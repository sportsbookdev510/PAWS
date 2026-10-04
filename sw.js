/*
 * The game's service worker: what makes the site installable, and what shows its push
 * notifications. Plain JavaScript, served as-is from /sw.js (never bundled or hashed), and small
 * enough to read in one sitting. Tests: apps/web/src/pwa/sw.test.ts.
 *
 * WHAT IT CACHES: only the build's fingerprinted files under /assets/. A file there is named by a
 * hash of its contents, so a cached copy can never be out of date: the page decides which files it
 * wants, and a new build asks for new names.
 *
 * WHAT IT NEVER TOUCHES: the page itself (every navigation, "/" and index.html), /api/* and the
 * Town socket, this script, the manifest, and anything on another origin. Those go to the network
 * exactly as they would with no service worker at all - so a stale page can never be served, the
 * update banner's own check (a fetch of "/") always reads the server, and the site password on dev
 * and lab keeps working (a worker that answered navigations would hand the password's 401 to the
 * page instead of letting the browser ask for the login). There is no offline mode: the game needs
 * the server.
 *
 * ITS OWN UPDATES wait for the player. A changed sw.js installs and then waits; the update banner
 * offers the reload, and only then does the page ask this worker to take over (SKIP_WAITING). It
 * never swaps itself in under a running game.
 */
"use strict";

/**
 * Bump when this file's behaviour changes. The cache is named after it, and the new worker deletes
 * the old one when it takes over.
 */
const VERSION = 1;
const ASSET_CACHE = "paws-assets-v" + VERSION;
/**
 * A build is about 150 files (the wallet modal alone is dozens of small chunks) and 5 MB, and only
 * what a player's session asks for is kept: this holds a few builds' worth and no more.
 */
const MAX_ASSETS = 400;
/**
 * What a hashed file may be. A 200 of any other type under /assets/ - an HTML error page from
 * something in front of the site - is passed through but never kept.
 */
const CACHEABLE_TYPE =
  /^(application\/javascript|text\/javascript|text\/css|image\/|font\/|application\/font-|application\/json|application\/wasm|audio\/)/i;

self.addEventListener("install", function () {
  // No skipWaiting() here: see ITS OWN UPDATES above.
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    (async function () {
      const names = await caches.keys();
      await Promise.all(
        names
          .filter(function (name) {
            return name.startsWith("paws-") && name !== ASSET_CACHE;
          })
          .map(function (name) {
            return caches.delete(name);
          })
      );
      // The first worker a browser installs takes the open page at once (nothing was controlling
      // it); a later one only gets here after the player asked for the reload.
      await self.clients.claim();
    })()
  );
});

self.addEventListener("message", function (event) {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

/** Whether the worker answers this request: a plain GET of a hashed file on this origin. */
function isHashedAsset(request) {
  if (request.method !== "GET" || request.mode === "navigate") return false;
  // a range request (media) wants part of a file; the cache only holds whole ones
  if (request.headers.has("range")) return false;
  const url = new URL(request.url);
  return (
    url.origin === self.location.origin && url.pathname.startsWith("/assets/")
  );
}

self.addEventListener("fetch", function (event) {
  // Anything else is left alone: no respondWith, so the browser fetches it as it always would.
  if (!isHashedAsset(event.request)) return;
  event.respondWith(fromCacheOrNetwork(event));
});

async function fromCacheOrNetwork(event) {
  const request = event.request;
  let cache = null;
  try {
    cache = await caches.open(ASSET_CACHE);
    const hit = await cache.match(request);
    if (hit) return hit;
  } catch {
    // No cache to be had (storage refused or full, a private window): the file comes from the
    // network exactly as it would with no worker. A worker whose cache fails must never be the
    // reason a game cannot load its own code.
    cache = null;
  }
  const response = await fetch(request);
  if (
    cache !== null &&
    response.status === 200 &&
    response.type === "basic" &&
    CACHEABLE_TYPE.test(response.headers.get("content-type") || "")
  ) {
    event.waitUntil(
      cache
        .put(request, response.clone())
        .then(function () {
          return trim(cache);
        })
        .catch(function () {
          // a full disk or a quota refusal costs a later re-download, nothing more
        })
    );
  }
  return response;
}

/** Drops the oldest entries (the cache lists them in the order they were stored) past the cap. */
async function trim(cache) {
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - MAX_ASSETS; i++)
    await cache.delete(keys[i]);
}

/*
 * PUSH NOTIFICATIONS. The worker sends {v, title, body, to} (packages/shared/src/api/push.ts:
 * plain words, never an amount). Every push shows a notification - an iPhone takes the permission
 * back from a site whose push shows nothing - so a payload that cannot be read still shows one.
 */

/** A path the game may open: one of its own screens, nothing else. */
function screenPath(to) {
  return typeof to === "string" &&
    /^\/[A-Za-z0-9/_-]*$/.test(to) &&
    !to.startsWith("//")
    ? to
    : "/";
}

function readPush(data) {
  let message;
  try {
    message = data ? data.json() : null;
  } catch {
    message = null;
  }
  const text = function (value, max) {
    return typeof value === "string" && value.trim() !== ""
      ? value.trim().slice(0, max)
      : null;
  };
  return {
    title:
      text(message && message.title, 80) || "Something in the game is ready",
    body: text(message && message.body, 160) || "Tap to open the game.",
    to: screenPath(message && message.to),
  };
}

self.addEventListener("push", function (event) {
  const note = readPush(event.data);
  event.waitUntil(
    self.registration.showNotification(note.title, {
      body: note.body,
      icon: "/icons/icon-192.png",
      badge: "/icons/badge-96.png",
      lang: "en",
      data: { to: note.to },
    })
  );
});

/**
 * A tap opens the screen the push is about. A game already open is brought forward and asked to go
 * there itself, in memory: a reload would lose whatever the player was halfway through. Only with
 * no game open does a new window start at that screen.
 */
self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  const to = screenPath(event.notification.data && event.notification.data.to);
  event.waitUntil(
    (async function () {
      const windows = await self.clients.matchAll({
        type: "window",
        includeUncontrolled: true,
      });
      const open =
        windows.find(function (w) {
          return w.visibilityState === "visible";
        }) || windows[0];
      if (!open) {
        await self.clients.openWindow(to);
        return;
      }
      try {
        await open.focus();
      } catch {
        // a browser that refuses the focus still gets the screen
      }
      open.postMessage({ type: "paws:open", to: to });
    })()
  );
});
