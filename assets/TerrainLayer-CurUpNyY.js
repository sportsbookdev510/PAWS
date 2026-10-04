import { d as e, n as t } from "./Renderer-BzRGE7NV.js";
import {
  C as n,
  _ as r,
  a as i,
  b as a,
  c as o,
  g as s,
  h as c,
  i as l,
  m as u,
  n as d,
  r as f,
  w as p,
  x as m,
} from "./three-8LjgJeTV.js";
var h = { w: 64, h: 32 };
function g(e, t) {
  let n = e + 0.5 - 32,
    r = t + 0.5,
    i = n / 2 + r,
    a = r - n / 2;
  return i < 0 || a < 0 || i >= 32 || a >= 32
    ? null
    : { x: Math.floor(i), y: Math.floor(a) };
}
function _(e, t) {
  return { x: e - t - 32, y: (e + t) / 2 };
}
function v(e, t, n, r, i, a, o, s) {
  for (let c = 0; c < h.h; c++)
    for (let l = 0; l < h.w; l++) {
      let u = g(l, c),
        d = ((s + c) * a + o + l) * 4;
      if (!u) {
        i[d] = i[d + 1] = i[d + 2] = i[d + 3] = 0;
        continue;
      }
      let f = ((r + u.y) * t + n + u.x) * 4;
      (i[d] = e[f]),
        (i[d + 1] = e[f + 1]),
        (i[d + 2] = e[f + 2]),
        (i[d + 3] = e[f + 3]);
    }
}
var y = [
  [1, 1],
  [3, 0],
  [4, 0],
  [1, 2],
  [3, 1],
  [2, 1],
  [3, 2],
  [2, 2],
  [4, 1],
  [4, 2],
  [0, 1],
  [0, 2],
  [1, 0],
  [2, 0],
  [0, 0],
  [1, 3],
];
function b(e, t, n, r) {
  return (e ? 8 : 0) + (t ? 4 : 0) + (n ? 2 : 0) + +!!r;
}
function x(e) {
  let t = y[e & 15];
  return { u0: t[0] / 5, v0: t[1] / 4, u1: (t[0] + 1) / 5, v1: (t[1] + 1) / 4 };
}
function S(e, t, n) {
  return b(e(t, n), e(t + 1, n), e(t, n + 1), e(t + 1, n + 1));
}
var C = 4,
  w = 4;
function T(e) {
  let t = new l(e);
  return (
    (t.magFilter = r),
    (t.minFilter = r),
    (t.generateMipmaps = !1),
    (t.colorSpace = m),
    (t.flipY = !1),
    t
  );
}
async function E(e) {
  let t = new Image();
  return (t.src = e), await t.decode(), t;
}
function D(e) {
  let t = C * h.w,
    n = w * h.h,
    r = e.getContext(`2d`).getImageData(0, 0, e.width, e.height),
    i = new ImageData(t, n);
  for (let n = 0; n < 16; n++) {
    let a = x(n);
    v(
      r.data,
      e.width,
      Math.round(a.u0 * e.width),
      Math.round(a.v0 * e.height),
      i.data,
      t,
      (n % C) * h.w,
      Math.floor(n / C) * h.h
    );
  }
  let a = document.createElement(`canvas`);
  return (
    (a.width = t),
    (a.height = n),
    a.getContext(`2d`).putImageData(i, 0, 0),
    {
      texture: T(a),
      width: t,
      height: n,
      uv: (e) => {
        let r = (e % C) * h.w,
          i = Math.floor(e / C) * h.h;
        return { u0: r / t, v0: i / n, u1: (r + h.w) / t, v1: (i + h.h) / n };
      },
    }
  );
}
function O(e, t) {
  if (e.naturalWidth !== 160 || e.naturalHeight !== 128)
    throw Error(
      `${t}: expected 160x128, got ${e.naturalWidth}x${e.naturalHeight}`
    );
  let n = document.createElement(`canvas`);
  (n.width = e.naturalWidth), (n.height = e.naturalHeight);
  let r = n.getContext(`2d`);
  (r.imageSmoothingEnabled = !1), r.drawImage(e, 0, 0);
  let i = T(n),
    a = null;
  return {
    texture: i,
    uv: x,
    iso: () => (a ??= D(n)),
    dispose: () => {
      i.dispose(), a?.texture.dispose();
    },
  };
}
var k = new Map();
function A(e) {
  let t = k.get(e);
  return (
    t ||
      ((t = E(e).then((t) => O(t, e))),
      t.catch(() => k.delete(e)),
      k.set(e, t)),
    t
  );
}
var j = {
    thickness: 20,
    shadowInner: { dx: 8, dy: 6, alpha: 0.24 },
    shadowOuter: { dx: 14, dy: 12, alpha: 0.1 },
    faceLit: `#ffffff`,
    face: `#e2dbd4`,
    shade: 0.62,
    bevel: `#5a4a3a`,
    outline: `#0f0d0b`,
    base: `#1a1512`,
  },
  M = {
    width: 256,
    base: `#3a2e26`,
    dark: `#2e241e`,
    light: `#463930`,
    root: `#7a5638`,
    rootLight: `#8f6a48`,
    roots: 7,
  };
function N(e) {
  let t = e.originX ?? 0,
    n = e.originY ?? 0;
  return {
    x: t * 32 - 16,
    y: n * 32 - 16,
    w: e.width * 32 + 32,
    h: e.height * 32 + 32,
  };
}
var P = (e, t) => ({ x: e.x, y: e.y + t });
function F(e, t, n, r) {
  let i = n.x * 0.5,
    a = n.y * 0.5,
    o = -n.y,
    s = n.x;
  return {
    kind: `line`,
    pts: [
      { x: e.x + i - o * 0.5, y: e.y + a - s * 0.5 },
      { x: t.x + i - o * 0.5, y: t.y + a - s * 0.5 },
      { x: t.x + i + o * 0.5, y: t.y + a + s * 0.5 },
      { x: e.x + i + o * 0.5, y: e.y + a + s * 0.5 },
    ],
    color: r,
    alpha: 1,
    z: -1.4,
  };
}
function I(n, r = t, i = j.thickness) {
  let a = [
      { x: n.x, y: n.y },
      { x: n.x + n.w, y: n.y },
      { x: n.x + n.w, y: n.y + n.h },
      { x: n.x, y: n.y + n.h },
    ].map((e) => r.toScreen(e.x / 32, e.y / 32)),
    o = [];
  for (let e of [j.shadowOuter, j.shadowInner])
    o.push({
      kind: `shadow`,
      pts: a.map((t) => ({ x: t.x + e.dx, y: t.y + i + e.dy })),
      color: `#000000`,
      alpha: e.alpha,
      z: -2,
    });
  let s = a.map((e, t) => {
      let n = a[(t + 1) % 4],
        r = { x: n.y - e.y, y: -(n.x - e.x) },
        i = Math.hypot(r.x, r.y) || 1;
      return { a: e, b: n, n: { x: r.x / i, y: r.y / i } };
    }),
    c = s.map((e) => e.n.y > 1e-6);
  return (
    s.forEach((t, n) => {
      if (c[n]) {
        let n =
          t.n.x < -1e-6
            ? j.faceLit
            : t.n.x > 1e-6
            ? e(j.faceLit, j.shade)
            : j.face;
        o.push({
          kind: `face`,
          pts: [t.a, t.b, P(t.b, i), P(t.a, i)],
          color: n,
          alpha: 1,
          z: -1.5,
        }),
          o.push(F(t.a, t.b, t.n, j.bevel)),
          o.push(F(P(t.a, i), P(t.b, i), { x: 0, y: 1 }, j.base));
      } else o.push(F(t.a, t.b, t.n, j.outline));
    }),
    a.forEach((e, t) => {
      if (c[t] || c[(t + 3) % 4]) {
        let n = { x: s[t].n.x + s[(t + 3) % 4].n.x, y: 0 };
        o.push(F(e, P(e, i), n.x === 0 ? { x: 1, y: 0 } : n, j.base));
      }
    }),
    o
  );
}
function L(e) {
  let t = (e ^ 2654435769) >>> 0;
  return (
    (t = Math.imul(t ^ (t >>> 16), 73244475) >>> 0),
    (t = Math.imul(t ^ (t >>> 16), 73244475) >>> 0),
    ((t ^ (t >>> 16)) >>> 0) / 4294967296
  );
}
function R(e = M.width, t = j.thickness, n = M.roots, r = 3) {
  let i = [];
  for (let a = 0; a < n; a++) {
    let o = (e) => L(a * 97 + e * 13 + r * 7919),
      s = e / n,
      c = Math.floor(s * (a + 0.5) + (o(1) - 0.5) * s * 0.8),
      l = Math.min(t - 2, 9 + Math.floor(o(2) * 9)),
      u = o(3) < 0.5 ? -1 : 1,
      d = 3 + Math.floor(o(4) * 4),
      f = [];
    for (let n = 0; n < l; n++) {
      let r = 1 + n;
      if ((f.push({ x: (c + e) % e, y: r, light: n % 3 == 1 }), n === d)) {
        let n = c;
        for (let i = 1; i <= 3 + Math.floor(o(5) * 3); i++) {
          n -= u;
          let a = r + i;
          if (a >= t - 1) break;
          f.push({ x: (n + e) % e, y: a, light: i % 3 == 2 });
        }
      }
      let i = o(10 + n);
      c += i < 0.3 ? u : i > 0.85 ? -u : 0;
    }
    i.push(f);
  }
  return i;
}
function z(e, t = M.width, n = j.thickness) {
  (e.fillStyle = M.base), e.fillRect(0, 0, t, n);
  for (let r = 0; r < n; r++)
    for (let n = 0; n < t; n++) {
      let t = L(n * 131 + r * 7919 + 17);
      if (t < 0.16) e.fillStyle = M.dark;
      else if (t > 0.88) e.fillStyle = M.light;
      else continue;
      e.fillRect(n, r, 1, 1);
    }
  for (let r of R(t, n))
    for (let t of r)
      (e.fillStyle = t.light ? M.rootLight : M.root),
        e.fillRect(t.x, t.y, 1, 1);
}
function B() {
  if (typeof document > `u`) return null;
  let e = document.createElement(`canvas`);
  (e.width = M.width), (e.height = j.thickness);
  let t = e.getContext(`2d`);
  if (!t) return null;
  (t.imageSmoothingEnabled = !1), z(t);
  let n = new l(e);
  return (
    (n.magFilter = r),
    (n.minFilter = r),
    (n.generateMipmaps = !1),
    (n.wrapS = a),
    (n.wrapT = i),
    (n.colorSpace = m),
    (n.flipY = !1),
    n
  );
}
function V(e) {
  let t = parseInt(e.slice(1, 7), 16);
  return [(t >> 16) / 255, ((t >> 8) & 255) / 255, (t & 255) / 255];
}
function H(e, t) {
  let n = new Float32Array(e.length * 4 * 3),
    r = new Float32Array(e.length * 4 * 4),
    i = new Float32Array(e.length * 4 * 2),
    a = new Uint32Array(e.length * 6);
  e.forEach((e, t) => {
    let o = t * 4,
      s = V(e.color),
      c =
        Math.hypot(e.pts[1].x - e.pts[0].x, e.pts[1].y - e.pts[0].y) / M.width,
      l = [
        [0, 0],
        [c, 0],
        [c, 1],
        [0, 1],
      ];
    e.pts.forEach((t, a) => {
      n.set([t.x, -t.y, e.z], (o + a) * 3),
        r.set([s[0], s[1], s[2], e.alpha], (o + a) * 4),
        i.set(l[a], (o + a) * 2);
    }),
      a.set([o, o + 2, o + 1, o, o + 3, o + 2], t * 6);
  });
  let o = new f();
  return (
    o.setAttribute(`position`, new d(n, 3)),
    o.setAttribute(`color`, new d(r, 4)),
    t && o.setAttribute(`uv`, new d(i, 2)),
    o.setIndex(new d(a, 1)),
    o
  );
}
var U = class {
    mesh;
    faces;
    lines;
    texture;
    constructor(e, n = t) {
      let r = I(e, n);
      (this.texture = B()),
        (this.faces = new c(
          H(
            r.filter((e) => e.kind === `face`),
            !0
          ),
          new s({
            map: this.texture,
            color: this.texture ? `#ffffff` : M.base,
            vertexColors: !0,
            transparent: !0,
            depthWrite: !1,
            side: 2,
          })
        )),
        (this.lines = new c(
          H(
            r.filter((e) => e.kind !== `face`),
            !1
          ),
          new s({ vertexColors: !0, transparent: !0, depthWrite: !1, side: 2 })
        )),
        (this.faces.frustumCulled = !1),
        (this.lines.frustumCulled = !1),
        (this.mesh = new o()),
        this.mesh.add(this.lines, this.faces);
    }
    dispose() {
      for (let e of [this.faces, this.lines])
        e.geometry.dispose(), e.material.dispose();
      this.texture?.dispose();
    }
  },
  W = `
  attribute vec4 aRect;
  varying vec2 vUv;
  varying vec4 vRect;
  void main() {
    vUv = uv;
    vRect = aRect;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,
  G = `
  uniform sampler2D map;
  uniform vec2 uSize;
  varying vec2 vUv;
  varying vec4 vRect;
  void main() {
    vec2 pix = vUv * uSize;
    vec2 seam = floor(pix + 0.5);
    vec2 f = clamp((pix - seam) / fwidth(pix), -0.5, 0.5) + 0.5;
    vec2 lo = vRect.xy * uSize + 0.5;
    vec2 hi = vRect.zw * uSize - 0.5;
    vec2 a = clamp(seam - 0.5, lo, hi);
    vec2 b = clamp(seam + 0.5, lo, hi);
    vec4 c00 = texture2D(map, vec2(a.x, a.y) / uSize);
    vec4 c10 = texture2D(map, vec2(b.x, a.y) / uSize);
    vec4 c01 = texture2D(map, vec2(a.x, b.y) / uSize);
    vec4 c11 = texture2D(map, vec2(b.x, b.y) / uSize);
    gl_FragColor = mix(mix(c00, c10, f.x), mix(c01, c11, f.x), f.y);
    #include <colorspace_fragment>
  }
`;
function K(e) {
  let t = e.originX ?? 0,
    n = e.originY ?? 0,
    r = (t, n) => !e.isStone(t, n),
    i = [];
  for (let a = 0; a <= e.height; a++)
    for (let o = 0; o <= e.width; o++) {
      let e = t - 1 + o,
        s = n - 1 + a;
      i.push({ cx: e, cy: s, index: S(r, e, s) });
    }
  return i;
}
function q(e, t, n) {
  let r = new Float32Array(e.length * 4 * 3),
    i = new Float32Array(e.length * 4 * 2),
    a = n ? new Float32Array(e.length * 4 * 4) : null,
    o = new Uint32Array(e.length * 6);
  e.forEach((e, n) => {
    let s = n * 4,
      c = [
        [e.x, -e.y],
        [e.x + e.w, -e.y],
        [e.x + e.w, -(e.y + e.h)],
        [e.x, -(e.y + e.h)],
      ],
      l = [
        [e.uv[0], e.uv[1]],
        [e.uv[2], e.uv[1]],
        [e.uv[2], e.uv[3]],
        [e.uv[0], e.uv[3]],
      ];
    for (let n = 0; n < 4; n++)
      r.set([c[n][0], c[n][1], t], (s + n) * 3),
        i.set([l[n][0], l[n][1]], (s + n) * 2),
        a?.set(e.uv, (s + n) * 4);
    o.set([s, s + 2, s + 1, s, s + 3, s + 2], n * 6);
  });
  let s = new f();
  return (
    s.setAttribute(`position`, new d(r, 3)),
    s.setAttribute(`uv`, new d(i, 2)),
    a && s.setAttribute(`aRect`, new d(a, 4)),
    s.setIndex(new d(o, 1)),
    s
  );
}
var J = class {
  mesh;
  constructor(e, r, i = {}) {
    let a = i.projection ?? t,
      o = i.z ?? -1,
      l = K(r);
    if (a.name === `isometric`) {
      let t = e.iso(),
        n = q(
          l.map((e) => {
            let n = _((e.cx + 0.5) * 32, (e.cy + 0.5) * 32),
              r = t.uv(e.index);
            return {
              x: n.x,
              y: n.y,
              w: h.w,
              h: h.h,
              uv: [r.u0, r.v0, r.u1, r.v1],
            };
          }),
          o,
          !1
        );
      this.mesh = new c(n, new s({ map: t.texture, alphaTest: 0.5 }));
    } else {
      let t = q(
          l.map((t) => {
            let n = e.uv(t.index);
            return {
              x: (t.cx + 0.5) * 32,
              y: (t.cy + 0.5) * 32,
              w: 32,
              h: 32,
              uv: [n.u0, n.v0, n.u1, n.v1],
            };
          }),
          o,
          !0
        ),
        r = new n({
          uniforms: {
            map: { value: e.texture },
            uSize: { value: new p(160, 128) },
          },
          vertexShader: W,
          fragmentShader: G,
        });
      this.mesh = new c(t, r);
      let [i, s, d, f] = a.ground;
      (this.mesh.matrixAutoUpdate = !1),
        this.mesh.matrix.copy(
          new u().set(i, s, 0, 0, d, f, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        );
    }
    this.mesh.frustumCulled = !1;
  }
  dispose() {
    this.mesh.geometry.dispose(), this.mesh.material.dispose();
  }
};
export { h as a, A as i, U as n, N as r, J as t };
