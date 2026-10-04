import { gt as e, i as t } from "./src-BKbOlEyd.js";
import { S as n, m as r, o as i, t as a, v as o } from "./three-8LjgJeTV.js";
var s = {
    meta: {
      name: `stone_portal`,
      image: `portal_spritesheet.png`,
      format: `RGBA8888`,
      pixel_art: !0,
      transparent_background: !0,
      coordinate_origin: `top-left`,
      frame_size: { w: 85, h: 85 },
      sheet_size: { w: 765, h: 85 },
      grid: { columns: 9, rows: 1, layout: `horizontal strip` },
      direction: `south`,
      recommended_import: {
        filter: `nearest/point`,
        compression: `none`,
        mipmaps: !1,
        runtime_scale: 1,
        fps: 8,
      },
      note: `Rebuilt from the package description (9 frames of 85x85 in a 765x85 strip, 8 fps loop); the package JSON was not supplied.`,
    },
    frames: {
      portal_swirl_0: {
        frame: { x: 0, y: 0, w: 85, h: 85 },
        source: `frames/frame_000.png`,
        index: 0,
      },
      portal_swirl_1: {
        frame: { x: 85, y: 0, w: 85, h: 85 },
        source: `frames/frame_001.png`,
        index: 1,
      },
      portal_swirl_2: {
        frame: { x: 170, y: 0, w: 85, h: 85 },
        source: `frames/frame_002.png`,
        index: 2,
      },
      portal_swirl_3: {
        frame: { x: 255, y: 0, w: 85, h: 85 },
        source: `frames/frame_003.png`,
        index: 3,
      },
      portal_swirl_4: {
        frame: { x: 340, y: 0, w: 85, h: 85 },
        source: `frames/frame_004.png`,
        index: 4,
      },
      portal_swirl_5: {
        frame: { x: 425, y: 0, w: 85, h: 85 },
        source: `frames/frame_005.png`,
        index: 5,
      },
      portal_swirl_6: {
        frame: { x: 510, y: 0, w: 85, h: 85 },
        source: `frames/frame_006.png`,
        index: 6,
      },
      portal_swirl_7: {
        frame: { x: 595, y: 0, w: 85, h: 85 },
        source: `frames/frame_007.png`,
        index: 7,
      },
      portal_swirl_8: {
        frame: { x: 680, y: 0, w: 85, h: 85 },
        source: `frames/frame_008.png`,
        index: 8,
      },
    },
    animations: {
      portal_swirl: {
        frames: [
          `portal_swirl_0`,
          `portal_swirl_1`,
          `portal_swirl_2`,
          `portal_swirl_3`,
          `portal_swirl_4`,
          `portal_swirl_5`,
          `portal_swirl_6`,
          `portal_swirl_7`,
          `portal_swirl_8`,
        ],
        fps: 8,
        loop: !0,
      },
    },
  },
  c = s.animations.portal_swirl;
if (!c || c.frames.length === 0)
  throw Error(`portal sheet: no portal_swirl animation`);
var l = s.meta.frame_size;
c.frames.forEach((e, t) => {
  let n = s.frames[e];
  if (!n) throw Error(`portal sheet: missing frame ${e}`);
  let r = n.frame;
  if (r.w !== l.w || r.h !== l.h || r.y !== 0 || r.x !== t * l.w)
    throw Error(`portal sheet: frame ${e} is not cell ${t} of the strip`);
});
var u = {
    url: `/art/buildings/${s.meta.image}`,
    frameW: l.w,
    frameH: l.h,
    frames: c.frames.length,
    fps: c.fps,
    loop: c.loop,
    width: s.meta.sheet_size.w,
    height: s.meta.sheet_size.h,
  },
  d = [
    `lumberjack`,
    `engineer`,
    `miner`,
    `farmer`,
    `merchant`,
    `energy_worker`,
  ],
  f = {
    LUMBERJACK: `lumberjack`,
    ENGINEER: `engineer`,
    MINER: `miner`,
    FARMER: `farmer`,
    MERCHANT: `merchant`,
    ENERGY_WORKER: `energy_worker`,
  },
  p = `grey`,
  m = [p, ...e.flatMap((e) => d.map((t) => `${e}_${t}`))];
function h(e) {
  let t = e.indexOf(`_`);
  return t < 0
    ? { coat: e, dressed: null }
    : { coat: e.slice(0, t), dressed: e.slice(t + 1) };
}
function g(t) {
  let n = /^coat:([a-z]+):/.exec(t ?? ``)?.[1];
  return n && e.includes(n) ? n : `grey`;
}
function _(e) {
  if (!e) return p;
  let t = f[e.profession];
  return t ? `${g(e.appearanceSeed)}_${t}` : p;
}
var v = `/art/wangtileset.png`,
  y = [1, 2, 3, 4].map((e) => `/art/trees/tree${e}.png`),
  b = `/art/sky/moon.png`,
  x = [`south_west`, `south_east`, `north_west`, `north_east`],
  S = (e, t = p) => `/art/cats/sitting/${t}/${e}.png`,
  C = m.flatMap((e) => x.map((t) => S(t, e))),
  w = (e, t) => m.indexOf(e) * x.length + x.indexOf(t),
  T = {
    south_west: { x: 0, y: -10 },
    south_east: { x: 0, y: -10 },
    north_west: { x: 0, y: -12 },
    north_east: { x: 0, y: -12 },
  },
  E = {
    lumberjack: { south_west: { x: 0, y: 5 }, south_east: { x: 0, y: 5 } },
    engineer: { south_west: { x: 0, y: 5 }, south_east: { x: 0, y: 5 } },
    miner: { south_west: { x: 0, y: 5 }, south_east: { x: 0, y: 5 } },
    farmer: {
      south_west: { x: 0, y: 5 },
      south_east: { x: 0, y: 5 },
      north_west: { x: 14, y: 2 },
      north_east: { x: -12, y: 2 },
    },
    merchant: { south_west: { x: 0, y: 5 }, south_east: { x: 0, y: 5 } },
    energy_worker: { south_west: { x: 0, y: 5 }, south_east: { x: 0, y: 5 } },
  };
function D(e, t) {
  let n = T[t],
    { dressed: r } = h(e),
    i = r ? E[r]?.[t] : void 0;
  return i ? { x: n.x + i.x, y: n.y + i.y } : n;
}
var O = { south_west: !0, south_east: !0, north_west: !1, north_east: !1 },
  k = {
    north: { x: -1, y: -1 },
    north_east: { x: 0, y: -1 },
    east: { x: 1, y: -1 },
    south_east: { x: 1, y: 0 },
    south: { x: 1, y: 1 },
    south_west: { x: 0, y: 1 },
    west: { x: -1, y: 1 },
    north_west: { x: -1, y: 0 },
  };
function A(e) {
  switch (e) {
    case `south_east`:
    case `east`:
      return `south_east`;
    case `north_west`:
    case `west`:
      return `north_west`;
    case `north_east`:
    case `north`:
      return `north_east`;
    default:
      return `south_west`;
  }
}
var j = {
    UPGRADE: { url: `/art/buildings/cattrainer.png` },
    LEADERBOARD: {
      url: `/art/buildings/leaderboard.png`,
      anchor: { x: 76, y: 129 },
    },
    TOWN_SQUARE: {
      url: `/art/buildings/catstatue.png`,
      anchor: { x: 85, y: 161 },
    },
    TAVERN: { url: `/art/buildings/recruitmenttavern.png` },
    MARKET: {
      url: `/art/buildings/marketplace.png`,
      anchor: { x: 69, y: 122 },
    },
    PERMITS: { url: `/art/buildings/permitoffice.png` },
    JOBS: {
      url: `/art/buildings/jobboard/south_west.png`,
      anchor: { x: 70, y: 146 },
    },
    REWARDS: {
      url: `/art/buildings/rewardsvault.png`,
      anchor: { x: 49, y: 88 },
    },
    STAKING: { url: `/art/buildings/steakhouse/south_west.png` },
    PORTAL: { url: u.url, sheet: u, anchor: { x: 43, y: 108 } },
  },
  M = {
    COMMON: `#8f9a8f`,
    UNCOMMON: `#4f8a5b`,
    RARE: `#3b6fb6`,
    EPIC: `#8a4fb6`,
    LEGENDARY: `#d4a017`,
    MYTHIC: `#d1476f`,
  },
  N = {
    HOUSE: { wall: `#d9c7a5`, roof: `#a5442f`, accent: `#6b4a2b` },
    WORKSHOP: { wall: `#6b4a2b`, roof: `#8b5e3c`, accent: `#b3b3aa` },
    QUARRY: { wall: `#8c8c85`, roof: `#5f5f5a`, accent: `#d9c7a5` },
    GARDEN: { wall: `#8fbf7f`, roof: `#4f8a5b`, accent: `#f4e9d0` },
    LUMBER_CAMP: { wall: `#8b5e3c`, roof: `#5b3d24`, accent: `#f2c14e` },
    COFFEE_FARM: { wall: `#c98a3b`, roof: `#8fbf7f`, accent: `#f4e9d0` },
    POWER_STATION: { wall: `#6f7a8a`, roof: `#f2c14e`, accent: `#ffffff` },
    MINE: { wall: `#7a7a72`, roof: `#4a4a45`, accent: `#d4a017` },
    TRADING_POST: { wall: `#b98a5c`, roof: `#b4443c`, accent: `#f4e9d0` },
    SHERWOOD_EXCHANGE: { wall: `#d9c7a5`, roof: `#d4a017`, accent: `#3b6fb6` },
    GPU_FARM: { wall: `#5f5f5a`, roof: `#3b6fb6`, accent: `#8fd1ff` },
  },
  P = {
    TAVERN: { wall: `#b98a5c`, roof: `#7a3b2e`, accent: `#f2c14e` },
    UPGRADE: { wall: `#8b5e3c`, roof: `#4f8a5b`, accent: `#f4e9d0` },
    MARKET: { wall: `#d9c7a5`, roof: `#b4443c`, accent: `#f4e9d0` },
    LEADERBOARD: { wall: `#6b4a2b`, roof: `#d4a017`, accent: `#fbf5e6` },
    PORTAL: { wall: `#3b6fb6`, roof: `#8a4fb6`, accent: `#8fd1ff` },
    TOWN_SQUARE: { wall: `#8c8c85`, roof: `#3b6fb6`, accent: `#f4e9d0` },
    JOBS: { wall: `#d9c7a5`, roof: `#4f8a5b`, accent: `#6b4a2b` },
    PERMITS: { wall: `#b3b3aa`, roof: `#3b6fb6`, accent: `#f2c14e` },
    REWARDS: { wall: `#6f7a8a`, roof: `#d4a017`, accent: `#f2c14e` },
    STAKING: { wall: `#8c8c85`, roof: `#5b3d24`, accent: `#ecc367` },
    DECOR: { wall: `#4f8a5b`, roof: `#2f5d3a`, accent: `#6b4a2b` },
  },
  F = { base: `#2f5d3a`, catShadow: 0.22 },
  I = `isometric`,
  L = 0.75,
  R = {
    barrel: { dirs: t, url: (e) => `/art/props/barrel/${e}.png` },
    flowerpot: { dirs: t, url: (e) => `/art/props/flowerpot/${e}.png` },
    crate: { dirs: t, url: (e) => `/art/props/crate/${e}.png` },
    bench: { dirs: t, url: (e) => `/art/props/bench/${e}.png` },
    streetlamp: {
      dirs: t.filter((e) => e !== `north`),
      url: (e) => `/art/props/streetlamp/${e}.png`,
    },
    house1: { dirs: t, url: (e) => `/art/props/house1/${e}.png` },
    house2: { dirs: t, url: (e) => `/art/props/house2/${e}.png` },
    house3: { dirs: t, url: (e) => `/art/props/house3/${e}.png` },
    market: { dirs: t, url: (e) => `/art/props/market/${e}.png` },
    streetsign: { dirs: t, url: (e) => `/art/props/streetsign/${e}.png` },
    bush: { dirs: t, url: (e) => `/art/props/bush/${e}.png` },
    stonewell: { dirs: t, url: (e) => `/art/props/stonewell/${e}.png` },
    wheelbarrow: { dirs: t, url: (e) => `/art/props/wheelbarrow/${e}.png` },
    yellowflowers: {
      dirs: [`south`],
      url: () => `/art/props/yellowflowers/still.png`,
    },
    redflowers: {
      dirs: [`south`],
      url: () => `/art/props/redflowers/still.png`,
    },
    colorfulflowers: {
      dirs: [`south`],
      url: () => `/art/props/colorfulflowers/still.png`,
    },
  },
  z = [`south_west`, `north_west`, `north_east`, `south_east`],
  B = (e, t) => ({
    key: e,
    dirs: z,
    url: (t) => `/art/buildings/${e}/${t}.png`,
    ...(t ? { nudge: t } : {}),
  }),
  V = {
    HOUSE: {
      key: `house`,
      dirs: [`south_west`, `south_east`],
      url: (e) => `/art/buildings/house/${e}.png`,
    },
    WORKSHOP: B(`workshop`),
    QUARRY: B(`quarry`),
    GARDEN: B(`garden`),
    LUMBER_CAMP: {
      key: `lumbercamp`,
      dirs: [`north_east`, `north_west`],
      url: (e) => `/art/buildings/lumbercamp/${e}.png`,
    },
    COFFEE_FARM: {
      key: `coffeefarm`,
      dirs: [`south_west`, `south_east`],
      url: (e) => `/art/buildings/coffeefarm/${e}.png`,
    },
    POWER_STATION: {
      key: `powerstation`,
      dirs: [`north_east`, `north_west`],
      url: (e) => `/art/buildings/powerstation/${e}.png`,
    },
    MINE: B(`mine`),
    TRADING_POST: B(`tradingpost`, { south_east: { x: -8, y: 4 } }),
    SHERWOOD_EXCHANGE: {
      key: `sherwoodexchange`,
      dirs: [`south_west`, `south_east`],
      url: (e) => `/art/buildings/sherwoodexchange/${e}.png`,
    },
    GPU_FARM: B(`gpufarm`),
  };
function H(e, t) {
  let n = parseInt(e.slice(1, 7), 16),
    r = (e) => Math.max(0, Math.min(255, Math.round(e * t)));
  return `rgb(${r(n >> 16)},${r((n >> 8) & 255)},${r(n & 255)})`;
}
function U(e, t) {
  let n = parseInt(e.slice(1, 7), 16),
    r = (e) => Math.max(0, Math.min(255, Math.round(e * t))),
    i = (e) => e.toString(16).padStart(2, `0`);
  return `#${i(r(n >> 16))}${i(r((n >> 8) & 255))}${i(r(n & 255))}`;
}
function W(e, t, n = 0) {
  let r = (e * 374761393 + t * 668265263 + n * 2246822519) | 0;
  return (r = Math.imul(r ^ (r >>> 13), 1274126177)), (r ^ (r >>> 16)) >>> 0;
}
function G(e, t, n) {
  let r = parseInt(e.slice(1), 16),
    i = parseInt(t.slice(1), 16),
    a = (e) => {
      let t = (r >> e) & 255,
        a = (i >> e) & 255;
      return Math.round(t + (a - t) * n);
    };
  return `#${((a(16) << 16) | (a(8) << 8) | a(0))
    .toString(16)
    .padStart(6, `0`)}`;
}
function K(e) {
  let t = (e | 0) >>> 0;
  return (
    (t ^= t >>> 16),
    (t = Math.imul(t, 2146121005) >>> 0),
    (t ^= t >>> 15),
    (t = Math.imul(t, 2221713035) >>> 0),
    (t ^= t >>> 16),
    t >>> 0
  );
}
function q(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    (t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619) >>> 0);
  return t >>> 0;
}
var J = {
  sky: `#0f0a06`,
  star: { tint: `#ffebc8`, alpha: 0.4 },
  sel: `#d9a441`,
  info: `#6f95b3`,
  danger: `#c2522a`,
  success: `#7fa35a`,
  glow: `#f2c14e`,
  ghostOk: G(`#7fa35a`, `#ffffff`, 0.35),
  ghostBad: G(`#c2522a`, `#ffffff`, 0.35),
};
function Y(e = 0) {
  let t = Math.cos((e * Math.PI) / 180);
  return {
    name: `flat`,
    toScreen: (e, n) => ({ x: e * 32, y: n * 32 * t }),
    toTile: (e, n) => ({ x: e / 32, y: n / (32 * t) }),
    depth: (e, t) => t,
    ground: [1, 0, 0, t],
    facingTurn: 0,
  };
}
function X() {
  return {
    name: `isometric`,
    toScreen: (e, t) => ({ x: (e - t) * 32, y: ((e + t) * 32) / 2 }),
    toTile: (e, t) => ({
      x: (e / 32 + (2 * t) / 32) / 2,
      y: ((2 * t) / 32 - e / 32) / 2,
    }),
    depth: (e, t) => e + t,
    ground: [1, 1, -0.5, 0.5],
    facingTurn: 1,
  };
}
var Z = Y(0),
  Q = (e, t, n) => Math.min(Math.max(e, Math.min(t, n)), Math.max(t, n)),
  $ = class e {
    container;
    scene = new n();
    camera;
    gl;
    projection;
    requestedZoom;
    step = { n: 1, m: 1 };
    dpr = 1;
    W = 1;
    H = 1;
    backing = { w: 0, h: 0 };
    center = { x: 0, y: 0 };
    clamp = null;
    clampKeep = 1;
    fit = null;
    cover = { target: 0, now: 0 };
    coverLeft = { target: 0, now: 0 };
    coverTop = { target: 0, now: 0 };
    raf = 0;
    last = 0;
    acc = 0;
    running = !1;
    resizeObserver;
    onWindowResize = () => this.resize();
    update = () => void 0;
    frame = () => void 0;
    onResize = () => void 0;
    static STEP = 1 / 60;
    constructor(e, t = {}) {
      (this.container = e),
        (this.requestedZoom = t.zoom ?? 1),
        (this.projection = t.projection ?? Z),
        (this.gl = new a({
          antialias: !1,
          alpha: !1,
          powerPreference: `high-performance`,
        })),
        this.gl.setPixelRatio(1),
        (this.scene.background = new i(t.background ?? `#2f5d3a`)),
        (this.camera = new o(-1, 1, 1, -1, -1e3, 1e3)),
        (this.camera.position.z = 100),
        e.appendChild(this.gl.domElement),
        (this.resizeObserver = new ResizeObserver(() => this.resize())),
        this.resizeObserver.observe(e),
        window.addEventListener(`resize`, this.onWindowResize),
        this.resize();
    }
    get width() {
      return this.container.clientWidth;
    }
    get height() {
      return this.container.clientHeight;
    }
    get zoom() {
      return this.step.n / (this.step.m * this.dpr);
    }
    stepFor(e) {
      let t = e * this.dpr;
      return t < 0.75
        ? { n: 1, m: 2 }
        : { n: Math.max(1, Math.round(t)), m: 1 };
    }
    setCover(e, t = 0, n = 0) {
      (this.cover.target = Math.max(0, e)),
        (this.coverLeft.target = Math.max(0, t)),
        (this.coverTop.target = Math.max(0, n)),
        this.running ||
          ((this.cover.now = this.cover.target),
          (this.coverLeft.now = this.coverLeft.target),
          (this.coverTop.now = this.coverTop.target),
          this.reframe());
    }
    reframe() {
      this.fit ? this.applyFit() : this.applyCamera(!0);
    }
    get coverPx() {
      return this.cover.now * this.dpr * this.step.m;
    }
    get coverLeftPx() {
      return this.coverLeft.now * this.dpr * this.step.m;
    }
    get coverTopPx() {
      return this.coverTop.now * this.dpr * this.step.m;
    }
    snapshot() {
      let e = this.gl.domElement,
        t = document.createElement(`canvas`);
      (t.width = e.width), (t.height = e.height);
      let n = t.getContext(`2d`);
      return n
        ? (this.gl.render(this.scene, this.camera), n.drawImage(e, 0, 0), t)
        : null;
    }
    resize() {
      (this.dpr = window.devicePixelRatio || 1),
        (this.W = Math.max(
          1,
          Math.round(this.container.clientWidth * this.dpr)
        )),
        (this.H = Math.max(
          1,
          Math.round(this.container.clientHeight * this.dpr)
        )),
        this.fit ? this.applyFit() : this.applyCamera(),
        this.onResize(),
        this.running && this.gl.render(this.scene, this.camera);
    }
    ensureBacking() {
      let e = this.W * this.step.m,
        t = this.H * this.step.m;
      if (e !== this.backing.w || t !== this.backing.h) {
        (this.backing = { w: e, h: t }), this.gl.setSize(e, t, !1);
        let n = this.gl.domElement;
        (n.style.width = `${this.W / this.dpr}px`),
          (n.style.height = `${this.H / this.dpr}px`),
          (n.style.imageRendering = this.step.m > 1 ? `auto` : `pixelated`);
      }
    }
    lookAt(e, t) {
      (this.fit = null),
        (this.center = this.projection.toScreen(e, t)),
        this.applyCamera();
    }
    fitTo(e, t, n = 48, r = { min: 0.5, max: 2 }) {
      (this.fit = { cx: e.x, cy: e.y, w: t.w, h: t.h, pad: n }),
        (this.fitClamp = r),
        this.applyFit();
    }
    clearFit() {
      this.fit = null;
    }
    clampTo(e, t = 1) {
      (this.clamp = e),
        (this.clampKeep = Math.min(1, Math.max(0, t))),
        this.applyCamera();
    }
    setZoom(e) {
      (this.fit = null), (this.requestedZoom = e), this.applyCamera();
    }
    panBy(e, t) {
      (this.fit = null),
        (this.center = { x: this.center.x + e, y: this.center.y + t }),
        this.applyCamera(!0);
    }
    fitClamp = { min: 0.5, max: 2 };
    applyFit() {
      let e = this.fit,
        t = this.projectedBounds(e.cx - e.w / 2, e.cy - e.h / 2, e.w, e.h),
        n = e.pad * this.dpr,
        r = Math.min(
          (this.W - (this.cover.now + this.coverLeft.now) * this.dpr - n * 2) /
            t.w,
          (this.H - this.coverTop.now * this.dpr - n * 2) / t.h,
          this.fitClamp.max * this.dpr
        ),
        i = Math.floor(r);
      (this.step = i >= 1 ? { n: i, m: 1 } : { n: 1, m: 2 }),
        (this.center = { x: t.x + t.w / 2, y: t.y + t.h / 2 }),
        this.applyCamera(!0);
    }
    projectedBounds(e, t, n, r) {
      let i = [
          this.projection.toScreen(e, t),
          this.projection.toScreen(e + n, t),
          this.projection.toScreen(e + n, t + r),
          this.projection.toScreen(e, t + r),
        ],
        a = Math.min(...i.map((e) => e.x)),
        o = Math.min(...i.map((e) => e.y)),
        s = Math.max(...i.map((e) => e.x)),
        c = Math.max(...i.map((e) => e.y));
      return { x: a, y: o, w: s - a, h: c - o };
    }
    groundMatrix(e = 0, t = 0, n = 0) {
      let [i, a, o, s] = this.projection.ground;
      return new r().set(i, a, 0, e, o, s, 0, -t, 0, 0, 1, n, 0, 0, 0, 1);
    }
    applyGround(e, t = 0, n = 0, r = 0) {
      (e.matrixAutoUpdate = !1), e.matrix.copy(this.groundMatrix(t, n, r));
    }
    get originX() {
      return Math.floor(this.backing.w / 2);
    }
    get originY() {
      return Math.floor(this.backing.h / 2);
    }
    applyCamera(e = !1) {
      e || (this.step = this.stepFor(this.requestedZoom)), this.ensureBacking();
      let t = this.step.n,
        n = this.originX,
        r = this.originY;
      (this.camera.left = -n / t),
        (this.camera.right = (this.backing.w - n) / t),
        (this.camera.top = r / t),
        (this.camera.bottom = -(this.backing.h - r) / t);
      let i = this.coverPx / t,
        a = this.coverLeftPx / t,
        o = this.coverTopPx / t,
        s = this.center.x,
        c = this.center.y;
      if (this.clamp) {
        let e = this.clamp,
          n = this.backing.w / 2 / t - (i + a) / 2,
          r = this.backing.h / 2 / t - o / 2,
          l = this.clampKeep * Math.min(e.x1 - e.x0, n * 2),
          u = this.clampKeep * Math.min(e.y1 - e.y0, r * 2);
        (s = Q(s, e.x0 - n + l, e.x1 + n - l)),
          (c = Q(c, e.y0 - r + u, e.y1 + r - u));
      }
      (this.center = { x: s, y: c }),
        (s += (i - a) / 2),
        (c -= o / 2),
        (this.camera.position.x = Math.round(s * t) / t),
        (this.camera.position.y = -Math.round(c * t) / t),
        this.camera.updateProjectionMatrix();
    }
    visibleWorld(e = 0) {
      let t = this.backing.w / 2 / this.step.n,
        n = this.backing.h / 2 / this.step.n,
        r = this.camera.position.x,
        i = -this.camera.position.y;
      return { x0: r - t - e, y0: i - n - e, x1: r + t + e, y1: i + n + e };
    }
    visibleTiles(e = 2) {
      let t = this.visibleWorld(),
        n = [
          this.projection.toTile(t.x0, t.y0),
          this.projection.toTile(t.x1, t.y0),
          this.projection.toTile(t.x1, t.y1),
          this.projection.toTile(t.x0, t.y1),
        ];
      return {
        x0: Math.min(...n.map((e) => e.x)) - e,
        y0: Math.min(...n.map((e) => e.y)) - e,
        x1: Math.max(...n.map((e) => e.x)) + e,
        y1: Math.max(...n.map((e) => e.y)) + e,
      };
    }
    screenToWorld(e, t) {
      let n = this.dpr * this.step.m;
      return {
        x: (e * n - this.originX) / this.step.n + this.camera.position.x,
        y: (t * n - this.originY) / this.step.n - this.camera.position.y,
      };
    }
    worldToScreen(e, t) {
      let n = this.dpr * this.step.m;
      return {
        x: ((e - this.camera.position.x) * this.step.n + this.originX) / n,
        y: ((t + this.camera.position.y) * this.step.n + this.originY) / n,
      };
    }
    screenToTile(e, t) {
      let n = this.screenToWorld(e, t);
      return this.projection.toTile(n.x, n.y);
    }
    tileToScreen(e, t) {
      let n = this.projection.toScreen(e, t);
      return this.worldToScreen(n.x, n.y);
    }
    start() {
      if (this.running) return;
      (this.running = !0), (this.last = performance.now());
      let t = (n) => {
        if (!this.running) return;
        let r = Math.min(0.25, (n - this.last) / 1e3);
        (this.last = n), (this.acc += r);
        let i = !1;
        for (let e of [this.cover, this.coverLeft, this.coverTop]) {
          if (e.now === e.target) continue;
          let t = 1 - Math.exp(-r * 14);
          (e.now =
            Math.abs(e.target - e.now) < 0.5
              ? e.target
              : e.now + (e.target - e.now) * t),
            (i = !0);
        }
        for (i && this.reframe(); this.acc >= e.STEP; )
          this.update(e.STEP), (this.acc -= e.STEP);
        this.frame(this.acc / e.STEP),
          this.gl.render(this.scene, this.camera),
          (this.raf = requestAnimationFrame(t));
      };
      this.raf = requestAnimationFrame(t);
    }
    stop() {
      (this.running = !1), cancelAnimationFrame(this.raf);
    }
    dispose() {
      this.stop(),
        this.resizeObserver.disconnect(),
        window.removeEventListener(`resize`, this.onWindowResize),
        this.scene.clear(),
        this.gl.dispose(),
        this.gl.domElement.remove();
    }
  };
export {
  A,
  O as C,
  y as D,
  I as E,
  p as M,
  _ as N,
  D as O,
  h as P,
  k as S,
  v as T,
  P as _,
  J as a,
  M as b,
  q as c,
  U as d,
  N as f,
  b as g,
  j as h,
  X as i,
  m as j,
  w as k,
  G as l,
  F as m,
  Z as n,
  W as o,
  V as p,
  Y as r,
  K as s,
  $ as t,
  H as u,
  L as v,
  C as w,
  z as x,
  R as y,
};
