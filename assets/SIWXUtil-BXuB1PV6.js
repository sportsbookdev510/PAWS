import {
  a as e,
  i as t,
  n,
  o as r,
  r as i,
  t as a,
} from "./rolldown-runtime-C_s2cVnS.js";
import {
  At as o,
  Dt as s,
  J as c,
  Ot as l,
  kt as u,
  v as d,
} from "./viem-CnFKpqyY.js";
import {
  B as f,
  M as p,
  V as m,
  b as h,
  g,
  j as _,
  l as v,
  nt as y,
  p as b,
  r as x,
  st as S,
  t as C,
  v as w,
  w as T,
} from "./ModalController-CZlcBei4.js";
import { t as E } from "./events-mo8iUHSb.js";
import {
  a as D,
  i as O,
  n as k,
  o as A,
  r as j,
  t as M,
} from "./dist-CoS6E-3x.js";
function N(e) {
  return (
    e instanceof Uint8Array ||
    (ArrayBuffer.isView(e) && e.constructor.name === `Uint8Array`)
  );
}
function P(e, t) {
  return Array.isArray(t)
    ? t.length === 0
      ? !0
      : e
      ? t.every((e) => typeof e == `string`)
      : t.every((e) => Number.isSafeInteger(e))
    : !1;
}
function F(e) {
  if (typeof e != `function`) throw Error(`function expected`);
  return !0;
}
function I(e, t) {
  if (typeof t != `string`) throw Error(`${e}: string expected`);
  return !0;
}
function L(e) {
  if (!Number.isSafeInteger(e)) throw Error(`invalid integer: ${e}`);
}
function R(e) {
  if (!Array.isArray(e)) throw Error(`array expected`);
}
function ee(e, t) {
  if (!P(!0, t)) throw Error(`${e}: array of strings expected`);
}
function te(e, t) {
  if (!P(!1, t)) throw Error(`${e}: array of numbers expected`);
}
function ne(...e) {
  let t = (e) => e,
    n = (e, t) => (n) => e(t(n));
  return {
    encode: e.map((e) => e.encode).reduceRight(n, t),
    decode: e.map((e) => e.decode).reduce(n, t),
  };
}
function re(e) {
  let t = typeof e == `string` ? e.split(``) : e,
    n = t.length;
  ee(`alphabet`, t);
  let r = new Map(t.map((e, t) => [e, t]));
  return {
    encode: (r) => (
      R(r),
      r.map((r) => {
        if (!Number.isSafeInteger(r) || r < 0 || r >= n)
          throw Error(
            `alphabet.encode: digit index outside alphabet "${r}". Allowed: ${e}`
          );
        return t[r];
      })
    ),
    decode: (t) => (
      R(t),
      t.map((t) => {
        I(`alphabet.decode`, t);
        let n = r.get(t);
        if (n === void 0) throw Error(`Unknown letter: "${t}". Allowed: ${e}`);
        return n;
      })
    ),
  };
}
function ie(e = ``) {
  return (
    I(`join`, e),
    {
      encode: (t) => (ee(`join.decode`, t), t.join(e)),
      decode: (t) => (I(`join.decode`, t), t.split(e)),
    }
  );
}
function ae(e, t = `=`) {
  return (
    L(e),
    I(`padding`, t),
    {
      encode(n) {
        for (ee(`padding.encode`, n); (n.length * e) % 8; ) n.push(t);
        return n;
      },
      decode(n) {
        ee(`padding.decode`, n);
        let r = n.length;
        if ((r * e) % 8)
          throw Error(
            `padding: invalid, string should have whole number of bytes`
          );
        for (; r > 0 && n[r - 1] === t; r--)
          if (((r - 1) * e) % 8 == 0)
            throw Error(`padding: invalid, string has too much padding`);
        return n.slice(0, r);
      },
    }
  );
}
function oe(e) {
  return F(e), { encode: (e) => e, decode: (t) => e(t) };
}
function se(e, t, n) {
  if (t < 2)
    throw Error(`convertRadix: invalid from=${t}, base cannot be less than 2`);
  if (n < 2)
    throw Error(`convertRadix: invalid to=${n}, base cannot be less than 2`);
  if ((R(e), !e.length)) return [];
  let r = 0,
    i = [],
    a = Array.from(e, (e) => {
      if ((L(e), e < 0 || e >= t)) throw Error(`invalid integer: ${e}`);
      return e;
    }),
    o = a.length;
  for (;;) {
    let e = 0,
      s = !0;
    for (let i = r; i < o; i++) {
      let o = a[i],
        c = t * e,
        l = c + o;
      if (!Number.isSafeInteger(l) || c / t !== e || l - o !== c)
        throw Error(`convertRadix: carry overflow`);
      let u = l / n;
      e = l % n;
      let d = Math.floor(u);
      if (((a[i] = d), !Number.isSafeInteger(d) || d * n + e !== l))
        throw Error(`convertRadix: carry overflow`);
      if (s) d ? (s = !1) : (r = i);
      else continue;
    }
    if ((i.push(e), s)) break;
  }
  for (let t = 0; t < e.length - 1 && e[t] === 0; t++) i.push(0);
  return i.reverse();
}
var ce = (e, t) => (t === 0 ? e : ce(t, e % t)),
  le = (e, t) => e + (t - ce(e, t)),
  ue = (() => {
    let e = [];
    for (let t = 0; t < 40; t++) e.push(2 ** t);
    return e;
  })();
function de(e, t, n, r) {
  if ((R(e), t <= 0 || t > 32)) throw Error(`convertRadix2: wrong from=${t}`);
  if (n <= 0 || n > 32) throw Error(`convertRadix2: wrong to=${n}`);
  if (le(t, n) > 32)
    throw Error(
      `convertRadix2: carry overflow from=${t} to=${n} carryBits=${le(t, n)}`
    );
  let i = 0,
    a = 0,
    o = ue[t],
    s = ue[n] - 1,
    c = [];
  for (let r of e) {
    if ((L(r), r >= o))
      throw Error(`convertRadix2: invalid data word=${r} from=${t}`);
    if (((i = (i << t) | r), a + t > 32))
      throw Error(`convertRadix2: carry overflow pos=${a} from=${t}`);
    for (a += t; a >= n; a -= n) c.push(((i >> (a - n)) & s) >>> 0);
    let e = ue[a];
    if (e === void 0) throw Error(`invalid carry`);
    i &= e - 1;
  }
  if (((i = (i << (n - a)) & s), !r && a >= t)) throw Error(`Excess padding`);
  if (!r && i > 0) throw Error(`Non-zero padding: ${i}`);
  return r && a > 0 && c.push(i >>> 0), c;
}
function fe(e) {
  return (
    L(e),
    {
      encode: (t) => {
        if (!N(t)) throw Error(`radix.encode input should be Uint8Array`);
        return se(Array.from(t), 256, e);
      },
      decode: (t) => (te(`radix.decode`, t), Uint8Array.from(se(t, e, 256))),
    }
  );
}
function pe(e, t = !1) {
  if ((L(e), e <= 0 || e > 32))
    throw Error(`radix2: bits should be in (0..32]`);
  if (le(8, e) > 32 || le(e, 8) > 32) throw Error(`radix2: carry overflow`);
  return {
    encode: (n) => {
      if (!N(n)) throw Error(`radix2.encode input should be Uint8Array`);
      return de(Array.from(n), 8, e, !t);
    },
    decode: (n) => (te(`radix2.decode`, n), Uint8Array.from(de(n, e, 8, t))),
  };
}
function me(e) {
  return (
    F(e),
    function (...t) {
      try {
        return e.apply(null, t);
      } catch {}
    }
  );
}
ne(pe(4), re(`0123456789ABCDEF`), ie(``));
var he = ne(pe(5), re(`ABCDEFGHIJKLMNOPQRSTUVWXYZ234567`), ae(5), ie(``));
ne(pe(5), re(`ABCDEFGHIJKLMNOPQRSTUVWXYZ234567`), ie(``)),
  ne(pe(5), re(`0123456789ABCDEFGHIJKLMNOPQRSTUV`), ae(5), ie(``)),
  ne(pe(5), re(`0123456789ABCDEFGHIJKLMNOPQRSTUV`), ie(``)),
  ne(
    pe(5),
    re(`0123456789ABCDEFGHJKMNPQRSTVWXYZ`),
    ie(``),
    oe((e) => e.toUpperCase().replace(/O/g, `0`).replace(/[IL]/g, `1`))
  );
var ge =
  typeof Uint8Array.from([]).toBase64 == `function` &&
  typeof Uint8Array.fromBase64 == `function`;
ge ||
  ne(
    pe(6),
    re(`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`),
    ae(6),
    ie(``)
  ),
  ne(
    pe(6),
    re(`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`),
    ie(``)
  ),
  ge ||
    ne(
      pe(6),
      re(`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`),
      ae(6),
      ie(``)
    ),
  ne(
    pe(6),
    re(`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`),
    ie(``)
  );
var _e = ((e) => ne(fe(58), re(e), ie(``)))(
    `123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz`
  ),
  ve = ne(re(`qpzry9x8gf2tvdw0s3jn54khce6mua7l`), ie(``)),
  ye = [996825010, 642813549, 513874426, 1027748829, 705979059];
function be(e) {
  let t = e >> 25,
    n = (e & 33554431) << 5;
  for (let e = 0; e < ye.length; e++) ((t >> e) & 1) == 1 && (n ^= ye[e]);
  return n;
}
function xe(e, t, n = 1) {
  let r = e.length,
    i = 1;
  for (let t = 0; t < r; t++) {
    let n = e.charCodeAt(t);
    if (n < 33 || n > 126) throw Error(`Invalid prefix (${e})`);
    i = be(i) ^ (n >> 5);
  }
  i = be(i);
  for (let t = 0; t < r; t++) i = be(i) ^ (e.charCodeAt(t) & 31);
  for (let e of t) i = be(i) ^ e;
  for (let e = 0; e < 6; e++) i = be(i);
  return (i ^= n), ve.encode(de([i % ue[30]], 30, 5, !1));
}
function Se(e) {
  let t = e === `bech32` ? 1 : 734539939,
    n = pe(5),
    r = n.decode,
    i = n.encode,
    a = me(r);
  function o(e, n, r = 90) {
    I(`bech32.encode prefix`, e),
      N(n) && (n = Array.from(n)),
      te(`bech32.encode`, n);
    let i = e.length;
    if (i === 0) throw TypeError(`Invalid prefix length ${i}`);
    let a = i + 7 + n.length;
    if (r !== !1 && a > r) throw TypeError(`Length ${a} exceeds limit ${r}`);
    let o = e.toLowerCase(),
      s = xe(o, n, t);
    return `${o}1${ve.encode(n)}${s}`;
  }
  function s(e, n = 90) {
    I(`bech32.decode input`, e);
    let r = e.length;
    if (r < 8 || (n !== !1 && r > n))
      throw TypeError(`invalid string length: ${r} (${e}). Expected (8..${n})`);
    let i = e.toLowerCase();
    if (e !== i && e !== e.toUpperCase())
      throw Error(`String must be lowercase or uppercase`);
    let a = i.lastIndexOf(`1`);
    if (a === 0 || a === -1)
      throw Error(`Letter "1" must be present between prefix and data only`);
    let o = i.slice(0, a),
      s = i.slice(a + 1);
    if (s.length < 6) throw Error(`Data must be at least 6 characters long`);
    let c = ve.decode(s).slice(0, -6),
      l = xe(o, c, t);
    if (!s.endsWith(l))
      throw Error(`Invalid checksum in ${e}: expected "${l}"`);
    return { prefix: o, words: c };
  }
  let c = me(s);
  function l(e) {
    let { prefix: t, words: n } = s(e, !1);
    return { prefix: t, words: n, bytes: r(n) };
  }
  function u(e, t) {
    return o(e, i(t));
  }
  return {
    encode: o,
    decode: s,
    encodeFromBytes: u,
    decodeToBytes: l,
    decodeUnsafe: c,
    fromWords: r,
    fromWordsUnsafe: a,
    toWords: i,
  };
}
Se(`bech32`),
  Se(`bech32m`),
  (typeof Uint8Array.from([]).toHex == `function` &&
    typeof Uint8Array.fromHex == `function`) ||
    ne(
      pe(4),
      re(`0123456789abcdef`),
      ie(``),
      oe((e) => {
        if (typeof e != `string` || e.length % 2 != 0)
          throw TypeError(
            `hex.decode: expected string, got ${typeof e} with length ${
              e.length
            }`
          );
        return e.toLowerCase();
      })
    );
var Ce = { exports: {} };
function we(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return `"[Circular]"`;
  }
}
var Te = Ee;
function Ee(e, t, n) {
  var r = (n && n.stringify) || we,
    i = 1;
  if (typeof e == `object` && e) {
    var a = t.length + i;
    if (a === 1) return e;
    var o = Array(a);
    o[0] = r(e);
    for (var s = 1; s < a; s++) o[s] = r(t[s]);
    return o.join(` `);
  }
  if (typeof e != `string`) return e;
  var c = t.length;
  if (c === 0) return e;
  for (
    var l = ``, u = 1 - i, d = -1, f = (e && e.length) || 0, p = 0;
    p < f;

  ) {
    if (e.charCodeAt(p) === 37 && p + 1 < f) {
      switch (((d = d > -1 ? d : 0), e.charCodeAt(p + 1))) {
        case 100:
        case 102:
          if (u >= c || t[u] == null) break;
          d < p && (l += e.slice(d, p)), (l += Number(t[u])), (d = p + 2), p++;
          break;
        case 105:
          if (u >= c || t[u] == null) break;
          d < p && (l += e.slice(d, p)),
            (l += Math.floor(Number(t[u]))),
            (d = p + 2),
            p++;
          break;
        case 79:
        case 111:
        case 106:
          if (u >= c || t[u] === void 0) break;
          d < p && (l += e.slice(d, p));
          var m = typeof t[u];
          if (m === `string`) {
            (l += `'` + t[u] + `'`), (d = p + 2), p++;
            break;
          }
          if (m === `function`) {
            (l += t[u].name || `<anonymous>`), (d = p + 2), p++;
            break;
          }
          (l += r(t[u])), (d = p + 2), p++;
          break;
        case 115:
          if (u >= c) break;
          d < p && (l += e.slice(d, p)), (l += String(t[u])), (d = p + 2), p++;
          break;
        case 37:
          d < p && (l += e.slice(d, p)), (l += `%`), (d = p + 2), p++, u--;
      }
      ++u;
    }
    ++p;
  }
  return d === -1 ? e : (d < f && (l += e.slice(d)), l);
}
var De = Te;
Ce.exports = Le;
var Oe = rt().console || {},
  ke = {
    mapHttpRequest: Xe,
    mapHttpResponse: Xe,
    wrapRequestSerializer: Ze,
    wrapResponseSerializer: Ze,
    wrapErrorSerializer: Ze,
    req: Xe,
    res: Xe,
    err: Je,
    errWithCause: Je,
  };
function Ae(e, t) {
  return e === `silent` ? 1 / 0 : t.levels.values[e];
}
var je = Symbol(`pino.logFuncs`),
  Me = Symbol(`pino.hierarchy`),
  Ne = {
    error: `log`,
    fatal: `error`,
    warn: `error`,
    info: `log`,
    debug: `log`,
    trace: `log`,
  };
function Pe(e, t) {
  t[Me] = { logger: t, parent: e[Me] };
}
function Fe(e, t, n) {
  let r = {};
  t.forEach((e) => {
    r[e] = n[e] ? n[e] : Oe[e] || Oe[Ne[e] || `log`] || Qe;
  }),
    (e[je] = r);
}
function Ie(e, t) {
  return Array.isArray(e)
    ? e.filter(function (e) {
        return e !== `!stdSerializers.err`;
      })
    : e === !0 && Object.keys(t);
}
function Le(e) {
  (e ||= {}), (e.browser = e.browser || {});
  let t = e.browser.transmit;
  if (t && typeof t.send != `function`)
    throw Error(`pino: transmit option must have a send function`);
  let n = e.browser.write || Oe;
  e.browser.write && (e.browser.asObject = !0);
  let r = e.serializers || {},
    i = Ie(e.browser.serialize, r),
    a = e.browser.serialize;
  Array.isArray(e.browser.serialize) &&
    e.browser.serialize.indexOf(`!stdSerializers.err`) > -1 &&
    (a = !1);
  let o = Object.keys(e.customLevels || {}),
    s = [`error`, `fatal`, `warn`, `info`, `debug`, `trace`].concat(o);
  typeof n == `function` &&
    s.forEach(function (e) {
      n[e] = n;
    }),
    (e.enabled === !1 || e.browser.disabled) && (e.level = `silent`);
  let c = e.level || `info`,
    l = Object.create(n);
  (l.log ||= Qe),
    Fe(l, s, n),
    Pe({}, l),
    Object.defineProperty(l, "levelVal", { get: d }),
    Object.defineProperty(l, "level", { get: f, set: p });
  let u = {
    transmit: t,
    serialize: i,
    asObject: e.browser.asObject,
    asObjectBindingsOnly: e.browser.asObjectBindingsOnly,
    formatters: e.browser.formatters,
    levels: s,
    timestamp: Ye(e),
    messageKey: e.messageKey || `msg`,
    onChild: e.onChild || Qe,
  };
  (l.levels = Re(e)),
    (l.level = c),
    (l.isLevelEnabled = function (e) {
      return this.levels.values[e]
        ? this.levels.values[e] >= this.levels.values[this.level]
        : !1;
    }),
    (l.setMaxListeners =
      l.getMaxListeners =
      l.emit =
      l.addListener =
      l.on =
      l.prependListener =
      l.once =
      l.prependOnceListener =
      l.removeListener =
      l.removeAllListeners =
      l.listeners =
      l.listenerCount =
      l.eventNames =
      l.write =
      l.flush =
        Qe),
    (l.serializers = r),
    (l._serialize = i),
    (l._stdErrSerialize = a),
    (l.child = function (...e) {
      return m.call(this, u, ...e);
    }),
    t && (l._logEvent = qe());
  function d() {
    return Ae(this.level, this);
  }
  function f() {
    return this._level;
  }
  function p(e) {
    if (e !== `silent` && !this.levels.values[e])
      throw Error(`unknown level ` + e);
    (this._level = e),
      Ve(this, u, l, `error`),
      Ve(this, u, l, `fatal`),
      Ve(this, u, l, `warn`),
      Ve(this, u, l, `info`),
      Ve(this, u, l, `debug`),
      Ve(this, u, l, `trace`),
      o.forEach((e) => {
        Ve(this, u, l, e);
      });
  }
  function m(n, a, o) {
    if (!a) throw Error(`missing bindings for child Pino`);
    (o ||= {}), i && a.serializers && (o.serializers = a.serializers);
    let s = o.serializers;
    if (i && s) {
      var c = Object.assign({}, r, s),
        l = e.browser.serialize === !0 ? Object.keys(c) : i;
      delete a.serializers, Ge([a], l, c, this._stdErrSerialize);
    }
    function u(e) {
      (this._childLevel = (e._childLevel | 0) + 1),
        (this.bindings = a),
        c && ((this.serializers = c), (this._serialize = l)),
        t && (this._logEvent = qe([].concat(e._logEvent.bindings, a)));
    }
    u.prototype = this;
    let d = new u(this);
    return (
      Pe(this, d),
      (d.child = function (...e) {
        return m.call(this, n, ...e);
      }),
      (d.level = o.level || this.level),
      n.onChild(d),
      d
    );
  }
  return l;
}
function Re(e) {
  let t = e.customLevels || {};
  return {
    values: Object.assign({}, Le.levels.values, t),
    labels: Object.assign({}, Le.levels.labels, ze(t)),
  };
}
function ze(e) {
  let t = {};
  return (
    Object.keys(e).forEach(function (n) {
      t[e[n]] = n;
    }),
    t
  );
}
(Le.levels = {
  values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
  labels: {
    10: `trace`,
    20: `debug`,
    30: `info`,
    40: `warn`,
    50: `error`,
    60: `fatal`,
  },
}),
  (Le.stdSerializers = ke),
  (Le.stdTimeFunctions = Object.assign(
    {},
    { nullTime: $e, epochTime: et, unixTime: tt, isoTime: nt }
  ));
function Be(e) {
  let t = [];
  e.bindings && t.push(e.bindings);
  let n = e[Me];
  for (; n.parent; )
    (n = n.parent), n.logger.bindings && t.push(n.logger.bindings);
  return t.reverse();
}
function Ve(e, t, n, r) {
  if (
    (Object.defineProperty(e, r, {
      value: Ae(e.level, n) > Ae(r, n) ? Qe : n[je][r],
      writable: !0,
      enumerable: !0,
      configurable: !0,
    }),
    e[r] === Qe)
  ) {
    if (!t.transmit) return;
    let i = Ae(t.transmit.level || e.level, n);
    if (Ae(r, n) < i) return;
  }
  e[r] = Ue(e, t, n, r);
  let i = Be(e);
  i.length !== 0 && (e[r] = He(i, e[r]));
}
function He(e, t) {
  return function () {
    return t.apply(this, [...e, ...arguments]);
  };
}
function Ue(e, t, n, r) {
  return (function (i) {
    return function () {
      let a = t.timestamp(),
        o = Array(arguments.length),
        s =
          Object.getPrototypeOf && Object.getPrototypeOf(this) === Oe
            ? Oe
            : this;
      for (var c = 0; c < o.length; c++) o[c] = arguments[c];
      var l = !1;
      if (
        (t.serialize &&
          (Ge(o, this._serialize, this.serializers, this._stdErrSerialize),
          (l = !0)),
        t.asObject || t.formatters
          ? i.call(s, ...We(this, r, o, a, t))
          : i.apply(s, o),
        t.transmit)
      ) {
        let i = t.transmit.level || e._level,
          s = Ae(i, n),
          c = Ae(r, n);
        if (c < s) return;
        Ke(
          this,
          {
            ts: a,
            methodLevel: r,
            methodValue: c,
            transmitLevel: i,
            transmitValue: n.levels.values[t.transmit.level || e._level],
            send: t.transmit.send,
            val: Ae(e._level, n),
          },
          o,
          l
        );
      }
    };
  })(e[je][r]);
}
function We(e, t, n, r, i) {
  let { level: a, log: o = (e) => e } = i.formatters || {},
    s = n.slice(),
    c = s[0],
    l = {},
    u = (e._childLevel | 0) + 1;
  if ((u < 1 && (u = 1), r && (l.time = r), a)) {
    let n = a(t, e.levels.values[t]);
    Object.assign(l, n);
  } else l.level = e.levels.values[t];
  if (i.asObjectBindingsOnly) {
    if (typeof c == `object` && c)
      for (; u-- && typeof s[0] == `object`; ) Object.assign(l, s.shift());
    return [o(l), ...s];
  }
  if (typeof c == `object` && c) {
    for (; u-- && typeof s[0] == `object`; ) Object.assign(l, s.shift());
    c = s.length ? De(s.shift(), s) : void 0;
  } else typeof c == `string` && (c = De(s.shift(), s));
  return c !== void 0 && (l[i.messageKey] = c), [o(l)];
}
function Ge(e, t, n, r) {
  for (let i in e)
    if (r && e[i] instanceof Error) e[i] = Le.stdSerializers.err(e[i]);
    else if (typeof e[i] == `object` && !Array.isArray(e[i]) && t)
      for (let r in e[i])
        t.indexOf(r) > -1 && r in n && (e[i][r] = n[r](e[i][r]));
}
function Ke(e, t, n, r = !1) {
  let i = t.send,
    a = t.ts,
    o = t.methodLevel,
    s = t.methodValue,
    c = t.val,
    l = e._logEvent.bindings;
  r ||
    Ge(
      n,
      e._serialize || Object.keys(e.serializers),
      e.serializers,
      e._stdErrSerialize === void 0 || e._stdErrSerialize
    ),
    (e._logEvent.ts = a),
    (e._logEvent.messages = n.filter(function (e) {
      return l.indexOf(e) === -1;
    })),
    (e._logEvent.level.label = o),
    (e._logEvent.level.value = s),
    i(o, e._logEvent, c),
    (e._logEvent = qe(l));
}
function qe(e) {
  return {
    ts: 0,
    messages: [],
    bindings: e || [],
    level: { label: ``, value: 0 },
  };
}
function Je(e) {
  let t = { type: e.constructor.name, msg: e.message, stack: e.stack };
  for (let n in e) t[n] === void 0 && (t[n] = e[n]);
  return t;
}
function Ye(e) {
  return typeof e.timestamp == `function`
    ? e.timestamp
    : e.timestamp === !1
    ? $e
    : et;
}
function Xe() {
  return {};
}
function Ze(e) {
  return e;
}
function Qe() {}
function $e() {
  return !1;
}
function et() {
  return Date.now();
}
function tt() {
  return Math.round(Date.now() / 1e3);
}
function nt() {
  return new Date(Date.now()).toISOString();
}
function rt() {
  function e(e) {
    return typeof e < `u` && e;
  }
  try {
    return (
      typeof globalThis < `u` ||
        Object.defineProperty(Object.prototype, "globalThis", {
          get: function () {
            return delete Object.prototype.globalThis, (this.globalThis = this);
          },
          configurable: !0,
        }),
      globalThis
    );
  } catch {
    return e(self) || e(window) || e(this) || {};
  }
}
(Ce.exports.default = Le), (Ce.exports.pino = Le);
var it = { level: `info` },
  at = `custom_context`,
  ot = 1024e3,
  st = Object.defineProperty,
  ct = (e, t, n) =>
    t in e
      ? st(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  lt = (e, t, n) => ct(e, typeof t == `symbol` ? t : t + ``, n),
  ut = class {
    constructor(e) {
      lt(this, `nodeValue`),
        lt(this, `sizeInBytes`),
        lt(this, `next`),
        (this.nodeValue = e),
        (this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length),
        (this.next = null);
    }
    get value() {
      return this.nodeValue;
    }
    get size() {
      return this.sizeInBytes;
    }
  },
  dt = class {
    constructor(e) {
      lt(this, `lengthInNodes`),
        lt(this, `sizeInBytes`),
        lt(this, `head`),
        lt(this, `tail`),
        lt(this, `maxSizeInBytes`),
        (this.head = null),
        (this.tail = null),
        (this.lengthInNodes = 0),
        (this.maxSizeInBytes = e),
        (this.sizeInBytes = 0);
    }
    append(e) {
      let t = new ut(e);
      if (t.size > this.maxSizeInBytes)
        throw Error(
          `[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`
        );
      for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
      this.head
        ? (this.tail && (this.tail.next = t), (this.tail = t))
        : ((this.head = t), (this.tail = t)),
        this.lengthInNodes++,
        (this.sizeInBytes += t.size);
    }
    shift() {
      if (!this.head) return;
      let e = this.head;
      (this.head = this.head.next),
        this.head || (this.tail = null),
        this.lengthInNodes--,
        (this.sizeInBytes -= e.size);
    }
    toArray() {
      let e = [],
        t = this.head;
      for (; t !== null; ) e.push(t.value), (t = t.next);
      return e;
    }
    get length() {
      return this.lengthInNodes;
    }
    get size() {
      return this.sizeInBytes;
    }
    toOrderedArray() {
      return Array.from(this);
    }
    [Symbol.iterator]() {
      let e = this.head;
      return {
        next: () => {
          if (!e) return { done: !0, value: null };
          let t = e.value;
          return (e = e.next), { done: !1, value: t };
        },
      };
    }
  },
  ft = (e) =>
    JSON.stringify(e, (e, t) =>
      typeof t == `bigint` ? t.toString() + `n` : t
    );
function pt(e) {
  return typeof e == `string` ? e : ft(e) || ``;
}
var mt = Object.defineProperty,
  ht = (e, t, n) =>
    t in e
      ? mt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  gt = (e, t, n) => ht(e, typeof t == `symbol` ? t : t + ``, n),
  _t = class {
    constructor(e, t = ot) {
      gt(this, `logs`),
        gt(this, `level`),
        gt(this, `levelValue`),
        gt(this, `MAX_LOG_SIZE_IN_BYTES`),
        (this.level = e ?? `error`),
        (this.levelValue = Ce.exports.levels.values[this.level]),
        (this.MAX_LOG_SIZE_IN_BYTES = t),
        (this.logs = new dt(this.MAX_LOG_SIZE_IN_BYTES));
    }
    forwardToConsole(e, t) {
      t === Ce.exports.levels.values.error
        ? console.error(e)
        : t === Ce.exports.levels.values.warn
        ? console.warn(e)
        : t === Ce.exports.levels.values.debug
        ? console.debug(e)
        : t === Ce.exports.levels.values.trace
        ? console.trace(e)
        : console.log(e);
    }
    appendToLogs(e) {
      this.logs.append(pt({ timestamp: new Date().toISOString(), log: e }));
      let t = typeof e == `string` ? JSON.parse(e).level : e.level;
      t >= this.levelValue && this.forwardToConsole(e, t);
    }
    getLogs() {
      return this.logs;
    }
    clearLogs() {
      this.logs = new dt(this.MAX_LOG_SIZE_IN_BYTES);
    }
    getLogArray() {
      return Array.from(this.logs);
    }
    logsToBlob(e) {
      let t = this.getLogArray();
      return (
        t.push(pt({ extraMetadata: e })),
        new Blob(t, { type: `application/json` })
      );
    }
  },
  vt = Object.defineProperty,
  yt = (e, t, n) =>
    t in e
      ? vt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  bt = (e, t, n) => yt(e, typeof t == `symbol` ? t : t + ``, n),
  xt = class {
    constructor(e, t = ot) {
      bt(this, `baseChunkLogger`), (this.baseChunkLogger = new _t(e, t));
    }
    write(e) {
      this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
      return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
      this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
      return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
      return this.baseChunkLogger.logsToBlob(e);
    }
    downloadLogsBlobInBrowser(e) {
      let t = URL.createObjectURL(this.logsToBlob(e)),
        n = document.createElement(`a`);
      (n.href = t),
        (n.download = `walletconnect-logs-${new Date().toISOString()}.txt`),
        document.body.appendChild(n),
        n.click(),
        document.body.removeChild(n),
        URL.revokeObjectURL(t);
    }
  },
  St = Object.defineProperty,
  Ct = (e, t, n) =>
    t in e
      ? St(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  wt = (e, t, n) => Ct(e, typeof t == `symbol` ? t : t + ``, n),
  Tt = class {
    constructor(e, t = ot) {
      wt(this, `baseChunkLogger`), (this.baseChunkLogger = new _t(e, t));
    }
    write(e) {
      this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
      return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
      this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
      return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
      return this.baseChunkLogger.logsToBlob(e);
    }
  },
  Et = Object.defineProperty,
  Dt = Object.defineProperties,
  Ot = Object.getOwnPropertyDescriptors,
  kt = Object.getOwnPropertySymbols,
  At = Object.prototype.hasOwnProperty,
  jt = Object.prototype.propertyIsEnumerable,
  Mt = (e, t, n) =>
    t in e
      ? Et(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Nt = (e, t) => {
    for (var n in (t ||= {})) At.call(t, n) && Mt(e, n, t[n]);
    if (kt) for (var n of kt(t)) jt.call(t, n) && Mt(e, n, t[n]);
    return e;
  },
  Pt = (e, t) => Dt(e, Ot(t));
function Ft(e) {
  return Pt(Nt({}, e), { level: e?.level || it.level });
}
function It(e, t, n = at) {
  return (e[n] = t), e;
}
function Lt(e, t = at) {
  return e[t] || ``;
}
function Rt(e, t, n = at) {
  let r = Lt(e, n);
  return r.trim() ? `${r}/${t}` : t;
}
function zt(e, t, n = at) {
  let r = Rt(e, t, n);
  return It(e.child({ context: r }), r, n);
}
function Bt(e) {
  let t = new xt(e.opts?.level, e.maxSizeInBytes);
  return {
    logger: Ce.exports(
      Pt(Nt({}, e.opts), {
        level: `trace`,
        browser: Pt(Nt({}, e.opts?.browser), { write: (e) => t.write(e) }),
      })
    ),
    chunkLoggerController: t,
  };
}
function Vt(e) {
  let t = new Tt(e.opts?.level, e.maxSizeInBytes);
  return {
    logger: Ce.exports(
      Pt(Nt({}, e.opts), {
        level: `trace`,
        browser: Pt(Nt({}, e.opts?.browser), { write: (e) => t.write(e) }),
      }),
      t
    ),
    chunkLoggerController: t,
  };
}
function Ht(e) {
  if (typeof e.loggerOverride < `u` && typeof e.loggerOverride != `string`)
    return { logger: e.loggerOverride, chunkLoggerController: null };
  let t = Pt(Nt({}, e.opts), {
    level:
      typeof e.loggerOverride == `string` ? e.loggerOverride : e.opts?.level,
  });
  return typeof window < `u`
    ? Bt(Pt(Nt({}, e), { opts: t }))
    : Vt(Pt(Nt({}, e), { opts: t }));
}
var Ut = i({
  __assign: () => mn,
  __asyncDelegator: () => on,
  __asyncGenerator: () => an,
  __asyncValues: () => sn,
  __await: () => rn,
  __awaiter: () => Yt,
  __classPrivateFieldGet: () => dn,
  __classPrivateFieldSet: () => fn,
  __createBinding: () => Zt,
  __decorate: () => Kt,
  __exportStar: () => Qt,
  __extends: () => Wt,
  __generator: () => Xt,
  __importDefault: () => un,
  __importStar: () => ln,
  __makeTemplateObject: () => cn,
  __metadata: () => Jt,
  __param: () => qt,
  __read: () => en,
  __rest: () => Gt,
  __spread: () => tn,
  __spreadArrays: () => nn,
  __values: () => $t,
});
function Wt(e, t) {
  pn(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
function Gt(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`)
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function Kt(e, t, n, r) {
  var i = arguments.length,
    a =
      i < 3 ? t : r === null ? (r = Object.getOwnPropertyDescriptor(t, n)) : r,
    o;
  if (typeof Reflect == `object` && typeof Reflect.decorate == `function`)
    a = Reflect.decorate(e, t, n, r);
  else
    for (var s = e.length - 1; s >= 0; s--)
      (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
  return i > 3 && a && Object.defineProperty(t, n, a), a;
}
function qt(e, t) {
  return function (n, r) {
    t(n, r, e);
  };
}
function Jt(e, t) {
  if (typeof Reflect == `object` && typeof Reflect.metadata == `function`)
    return Reflect.metadata(e, t);
}
function Yt(e, t, n, r) {
  function i(e) {
    return e instanceof n
      ? e
      : new n(function (t) {
          t(e);
        });
  }
  return new (n ||= Promise)(function (n, a) {
    function o(e) {
      try {
        c(r.next(e));
      } catch (e) {
        a(e);
      }
    }
    function s(e) {
      try {
        c(r.throw(e));
      } catch (e) {
        a(e);
      }
    }
    function c(e) {
      e.done ? n(e.value) : i(e.value).then(o, s);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function Xt(e, t) {
  var n = {
      label: 0,
      sent: function () {
        if (a[0] & 1) throw a[1];
        return a[1];
      },
      trys: [],
      ops: [],
    },
    r,
    i,
    a,
    o = { next: s(0), throw: s(1), return: s(2) };
  return (
    typeof Symbol == `function` &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function s(e) {
    return function (t) {
      return c([e, t]);
    };
  }
  function c(o) {
    if (r) throw TypeError(`Generator is already executing.`);
    for (; n; )
      try {
        if (
          ((r = 1),
          i &&
            (a =
              o[0] & 2
                ? i.return
                : o[0]
                ? i.throw || ((a = i.return) && a.call(i), 0)
                : i.next) &&
            !(a = a.call(i, o[1])).done)
        )
          return a;
        switch (((i = 0), a && (o = [o[0] & 2, a.value]), o[0])) {
          case 0:
          case 1:
            a = o;
            break;
          case 4:
            return n.label++, { value: o[1], done: !1 };
          case 5:
            n.label++, (i = o[1]), (o = [0]);
            continue;
          case 7:
            (o = n.ops.pop()), n.trys.pop();
            continue;
          default:
            if (
              ((a = n.trys),
              !(a = a.length > 0 && a[a.length - 1]) &&
                (o[0] === 6 || o[0] === 2))
            ) {
              n = 0;
              continue;
            }
            if (o[0] === 3 && (!a || (o[1] > a[0] && o[1] < a[3]))) {
              n.label = o[1];
              break;
            }
            if (o[0] === 6 && n.label < a[1]) {
              (n.label = a[1]), (a = o);
              break;
            }
            if (a && n.label < a[2]) {
              (n.label = a[2]), n.ops.push(o);
              break;
            }
            a[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        o = t.call(e, n);
      } catch (e) {
        (o = [6, e]), (i = 0);
      } finally {
        r = a = 0;
      }
    if (o[0] & 5) throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}
function Zt(e, t, n, r) {
  r === void 0 && (r = n), (e[r] = t[n]);
}
function Qt(e, t) {
  for (var n in e) n !== "default" && !t.hasOwnProperty(n) && (t[n] = e[n]);
}
function $t(e) {
  var t = typeof Symbol == `function` && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == `number`)
    return {
      next: function () {
        return (
          e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        );
      },
    };
  throw TypeError(
    t ? `Object is not iterable.` : `Symbol.iterator is not defined.`
  );
}
function en(e, t) {
  var n = typeof Symbol == `function` && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e),
    i,
    a = [],
    o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; ) a.push(i.value);
  } catch (e) {
    o = { error: e };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function tn() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(en(arguments[t]));
  return e;
}
function nn() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), i = 0, t = 0; t < n; t++)
    for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++)
      r[i] = a[o];
  return r;
}
function rn(e) {
  return this instanceof rn ? ((this.v = e), this) : new rn(e);
}
function an(e, t, n) {
  if (!Symbol.asyncIterator)
    throw TypeError(`Symbol.asyncIterator is not defined.`);
  var r = n.apply(e, t || []),
    i,
    a = [];
  return (
    (i = {}),
    o(`next`),
    o(`throw`),
    o(`return`),
    (i[Symbol.asyncIterator] = function () {
      return this;
    }),
    i
  );
  function o(e) {
    r[e] &&
      (i[e] = function (t) {
        return new Promise(function (n, r) {
          a.push([e, t, n, r]) > 1 || s(e, t);
        });
      });
  }
  function s(e, t) {
    try {
      c(r[e](t));
    } catch (e) {
      d(a[0][3], e);
    }
  }
  function c(e) {
    e.value instanceof rn
      ? Promise.resolve(e.value.v).then(l, u)
      : d(a[0][2], e);
  }
  function l(e) {
    s(`next`, e);
  }
  function u(e) {
    s(`throw`, e);
  }
  function d(e, t) {
    e(t), a.shift(), a.length && s(a[0][0], a[0][1]);
  }
}
function on(e) {
  var t = {},
    n;
  return (
    r(`next`),
    r(`throw`, function (e) {
      throw e;
    }),
    r(`return`),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function r(r, i) {
    t[r] = e[r]
      ? function (t) {
          return (n = !n)
            ? { value: rn(e[r](t)), done: r === `return` }
            : i
            ? i(t)
            : t;
        }
      : i;
  }
}
function sn(e) {
  if (!Symbol.asyncIterator)
    throw TypeError(`Symbol.asyncIterator is not defined.`);
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof $t == `function` ? $t(e) : e[Symbol.iterator]()),
      (n = {}),
      r(`next`),
      r(`throw`),
      r(`return`),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n);
  function r(t) {
    n[t] =
      e[t] &&
      function (n) {
        return new Promise(function (r, a) {
          (n = e[t](n)), i(r, a, n.done, n.value);
        });
      };
  }
  function i(e, t, n, r) {
    Promise.resolve(r).then(function (t) {
      e({ value: t, done: n });
    }, t);
  }
}
function cn(e, t) {
  return (
    Object.defineProperty
      ? Object.defineProperty(e, "raw", { value: t })
      : (e.raw = t),
    e
  );
}
function ln(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null)
    for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  return (t.default = e), t;
}
function un(e) {
  return e && e.__esModule ? e : { default: e };
}
function dn(e, t) {
  if (!t.has(e))
    throw TypeError(`attempted to get private field on non-instance`);
  return t.get(e);
}
function fn(e, t, n) {
  if (!t.has(e))
    throw TypeError(`attempted to set private field on non-instance`);
  return t.set(e, n), n;
}
var pn,
  mn,
  hn = n(() => {
    (pn = function (e, t) {
      return (
        (pn =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          }),
        pn(e, t)
      );
    }),
      (mn = function () {
        return (
          (mn =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in ((t = arguments[n]), t))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          mn.apply(this, arguments)
        );
      });
  }),
  gn = a((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.delay = void 0);
    function t(e) {
      return new Promise((t) => {
        setTimeout(() => {
          t(!0);
        }, e);
      });
    }
    e.delay = t;
  }),
  _n = a((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ONE_THOUSAND = e.ONE_HUNDRED = void 0),
      (e.ONE_HUNDRED = 100),
      (e.ONE_THOUSAND = 1e3);
  }),
  vn = a((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ONE_YEAR =
        e.FOUR_WEEKS =
        e.THREE_WEEKS =
        e.TWO_WEEKS =
        e.ONE_WEEK =
        e.THIRTY_DAYS =
        e.SEVEN_DAYS =
        e.FIVE_DAYS =
        e.THREE_DAYS =
        e.ONE_DAY =
        e.TWENTY_FOUR_HOURS =
        e.TWELVE_HOURS =
        e.SIX_HOURS =
        e.THREE_HOURS =
        e.ONE_HOUR =
        e.SIXTY_MINUTES =
        e.THIRTY_MINUTES =
        e.TEN_MINUTES =
        e.FIVE_MINUTES =
        e.ONE_MINUTE =
        e.SIXTY_SECONDS =
        e.THIRTY_SECONDS =
        e.TEN_SECONDS =
        e.FIVE_SECONDS =
        e.ONE_SECOND =
          void 0),
      (e.ONE_SECOND = 1),
      (e.FIVE_SECONDS = 5),
      (e.TEN_SECONDS = 10),
      (e.THIRTY_SECONDS = 30),
      (e.SIXTY_SECONDS = 60),
      (e.ONE_MINUTE = e.SIXTY_SECONDS),
      (e.FIVE_MINUTES = e.ONE_MINUTE * 5),
      (e.TEN_MINUTES = e.ONE_MINUTE * 10),
      (e.THIRTY_MINUTES = e.ONE_MINUTE * 30),
      (e.SIXTY_MINUTES = e.ONE_MINUTE * 60),
      (e.ONE_HOUR = e.SIXTY_MINUTES),
      (e.THREE_HOURS = e.ONE_HOUR * 3),
      (e.SIX_HOURS = e.ONE_HOUR * 6),
      (e.TWELVE_HOURS = e.ONE_HOUR * 12),
      (e.TWENTY_FOUR_HOURS = e.ONE_HOUR * 24),
      (e.ONE_DAY = e.TWENTY_FOUR_HOURS),
      (e.THREE_DAYS = e.ONE_DAY * 3),
      (e.FIVE_DAYS = e.ONE_DAY * 5),
      (e.SEVEN_DAYS = e.ONE_DAY * 7),
      (e.THIRTY_DAYS = e.ONE_DAY * 30),
      (e.ONE_WEEK = e.SEVEN_DAYS),
      (e.TWO_WEEKS = e.ONE_WEEK * 2),
      (e.THREE_WEEKS = e.ONE_WEEK * 3),
      (e.FOUR_WEEKS = e.ONE_WEEK * 4),
      (e.ONE_YEAR = e.ONE_DAY * 365);
  }),
  yn = a((t) => {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (hn(), e(Ut));
    n.__exportStar(_n(), t), n.__exportStar(vn(), t);
  }),
  bn = a((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.fromMiliseconds = e.toMiliseconds = void 0);
    var t = yn();
    function n(e) {
      return e * t.ONE_THOUSAND;
    }
    e.toMiliseconds = n;
    function r(e) {
      return Math.floor(e / t.ONE_THOUSAND);
    }
    e.fromMiliseconds = r;
  }),
  xn = a((t) => {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (hn(), e(Ut));
    n.__exportStar(gn(), t), n.__exportStar(bn(), t);
  }),
  Sn = a((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.Watch = void 0);
    var t = class {
      constructor() {
        this.timestamps = new Map();
      }
      start(e) {
        if (this.timestamps.has(e))
          throw Error(`Watch already started for label: ${e}`);
        this.timestamps.set(e, { started: Date.now() });
      }
      stop(e) {
        let t = this.get(e);
        if (t.elapsed !== void 0)
          throw Error(`Watch already stopped for label: ${e}`);
        let n = Date.now() - t.started;
        this.timestamps.set(e, { started: t.started, elapsed: n });
      }
      get(e) {
        let t = this.timestamps.get(e);
        if (t === void 0) throw Error(`No timestamp found for label: ${e}`);
        return t;
      }
      elapsed(e) {
        let t = this.get(e);
        return t.elapsed || Date.now() - t.started;
      }
    };
    (e.Watch = t), (e.default = t);
  }),
  Cn = a((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.IWatch = void 0),
      (e.IWatch = class {});
  }),
  wn = a((t) => {
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (hn(), e(Ut)).__exportStar(Cn(), t);
  }),
  Tn = a((t) => {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (hn(), e(Ut));
    n.__exportStar(xn(), t),
      n.__exportStar(Sn(), t),
      n.__exportStar(wn(), t),
      n.__exportStar(yn(), t);
  }),
  En = class {},
  Dn = r(E()),
  z = Tn(),
  On = class extends En {
    constructor(e) {
      super();
    }
  },
  kn = z.FIVE_SECONDS,
  An = { pulse: `heartbeat_pulse` },
  jn = class e extends On {
    constructor(e) {
      super(e),
        (this.events = new Dn.EventEmitter()),
        (this.interval = kn),
        (this.interval = e?.interval || kn);
    }
    static async init(t) {
      let n = new e(t);
      return await n.init(), n;
    }
    async init() {
      await this.initialize();
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(e, t) {
      this.events.on(e, t);
    }
    once(e, t) {
      this.events.once(e, t);
    }
    off(e, t) {
      this.events.off(e, t);
    }
    removeListener(e, t) {
      this.events.removeListener(e, t);
    }
    async initialize() {
      this.intervalRef = setInterval(
        () => this.pulse(),
        (0, z.toMiliseconds)(this.interval)
      );
    }
    pulse() {
      this.events.emit(An.pulse);
    }
  },
  Mn =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  Nn =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  Pn = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Fn(e, t) {
  if (
    e === `__proto__` ||
    (e === `constructor` && t && typeof t == `object` && `prototype` in t)
  ) {
    In(e);
    return;
  }
  return t;
}
function In(e) {
  console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
}
function Ln(e, t = {}) {
  if (typeof e != `string`) return e;
  if (e[0] === `"` && e[e.length - 1] === `"` && e.indexOf(`\\`) === -1)
    return e.slice(1, -1);
  let n = e.trim();
  if (n.length <= 9)
    switch (n.toLowerCase()) {
      case `true`:
        return !0;
      case `false`:
        return !1;
      case `undefined`:
        return;
      case `null`:
        return null;
      case `nan`:
        return NaN;
      case `infinity`:
        return 1 / 0;
      case `-infinity`:
        return -1 / 0;
    }
  if (!Pn.test(e)) {
    if (t.strict) throw SyntaxError(`[destr] Invalid JSON`);
    return e;
  }
  try {
    if (Mn.test(e) || Nn.test(e)) {
      if (t.strict) throw Error(`[destr] Possible prototype pollution`);
      return JSON.parse(e, Fn);
    }
    return JSON.parse(e);
  } catch (n) {
    if (t.strict) throw n;
    return e;
  }
}
function Rn(e) {
  return !e || typeof e.then != `function` ? Promise.resolve(e) : e;
}
function zn(e, ...t) {
  try {
    return Rn(e(...t));
  } catch (e) {
    return Promise.reject(e);
  }
}
function Bn(e) {
  let t = typeof e;
  return e === null || (t !== `object` && t !== `function`);
}
function Vn(e) {
  let t = Object.getPrototypeOf(e);
  return !t || t.isPrototypeOf(Object);
}
function Hn(e) {
  if (Bn(e)) return String(e);
  if (Vn(e) || Array.isArray(e)) return JSON.stringify(e);
  if (typeof e.toJSON == `function`) return Hn(e.toJSON());
  throw Error(`[unstorage] Cannot stringify value!`);
}
var Un = `base64:`;
function Wn(e) {
  return typeof e == `string` ? e : Un + qn(e);
}
function Gn(e) {
  return typeof e != `string` || !e.startsWith(Un) ? e : Kn(e.slice(7));
}
function Kn(e) {
  return globalThis.Buffer
    ? Buffer.from(e, `base64`)
    : Uint8Array.from(globalThis.atob(e), (e) => e.codePointAt(0));
}
function qn(e) {
  return globalThis.Buffer
    ? Buffer.from(e).toString(`base64`)
    : globalThis.btoa(String.fromCodePoint(...e));
}
function Jn(e) {
  return (
    (e &&
      e
        .split(`?`)[0]
        ?.replace(/[/\\]/g, `:`)
        .replace(/:+/g, `:`)
        .replace(/^:|:$/g, ``)) ||
    ``
  );
}
function Yn(...e) {
  return Jn(e.join(`:`));
}
function Xn(e) {
  return (e = Jn(e)), e ? e + `:` : ``;
}
function Zn(e, t) {
  if (t === void 0) return !0;
  let n = 0,
    r = e.indexOf(`:`);
  for (; r > -1; ) n++, (r = e.indexOf(`:`, r + 1));
  return n <= t;
}
function Qn(e, t) {
  return t
    ? e.startsWith(t) && e[e.length - 1] !== `$`
    : e[e.length - 1] !== `$`;
}
function $n(e) {
  return e;
}
var er = `memory`,
  tr = $n(() => {
    let e = new Map();
    return {
      name: er,
      getInstance: () => e,
      hasItem(t) {
        return e.has(t);
      },
      getItem(t) {
        return e.get(t) ?? null;
      },
      getItemRaw(t) {
        return e.get(t) ?? null;
      },
      setItem(t, n) {
        e.set(t, n);
      },
      setItemRaw(t, n) {
        e.set(t, n);
      },
      removeItem(t) {
        e.delete(t);
      },
      getKeys() {
        return [...e.keys()];
      },
      clear() {
        e.clear();
      },
      dispose() {
        e.clear();
      },
    };
  });
function nr(e = {}) {
  let t = {
      mounts: { "": e.driver || tr() },
      mountpoints: [``],
      watching: !1,
      watchListeners: [],
      unwatch: {},
    },
    n = (e) => {
      for (let n of t.mountpoints)
        if (e.startsWith(n))
          return {
            base: n,
            relativeKey: e.slice(n.length),
            driver: t.mounts[n],
          };
      return { base: ``, relativeKey: e, driver: t.mounts[``] };
    },
    r = (e, n) =>
      t.mountpoints
        .filter((t) => t.startsWith(e) || (n && e.startsWith(t)))
        .map((n) => ({
          relativeBase: e.length > n.length ? e.slice(n.length) : void 0,
          mountpoint: n,
          driver: t.mounts[n],
        })),
    i = (e, n) => {
      if (t.watching) {
        n = Jn(n);
        for (let r of t.watchListeners) r(e, n);
      }
    },
    a = async () => {
      if (!t.watching) {
        t.watching = !0;
        for (let e in t.mounts) t.unwatch[e] = await rr(t.mounts[e], i, e);
      }
    },
    o = async () => {
      if (t.watching) {
        for (let e in t.unwatch) await t.unwatch[e]();
        (t.unwatch = {}), (t.watching = !1);
      }
    },
    s = (e, t, r) => {
      let i = new Map(),
        a = (e) => {
          let t = i.get(e.base);
          return (
            t ||
              ((t = { driver: e.driver, base: e.base, items: [] }),
              i.set(e.base, t)),
            t
          );
        };
      for (let r of e) {
        let e = typeof r == `string`,
          i = Jn(e ? r : r.key),
          o = e ? void 0 : r.value,
          s = e || !r.options ? t : { ...t, ...r.options },
          c = n(i);
        a(c).items.push({
          key: i,
          value: o,
          relativeKey: c.relativeKey,
          options: s,
        });
      }
      return Promise.all([...i.values()].map((e) => r(e))).then((e) =>
        e.flat()
      );
    },
    c = {
      hasItem(e, t = {}) {
        e = Jn(e);
        let { relativeKey: r, driver: i } = n(e);
        return zn(i.hasItem, r, t);
      },
      getItem(e, t = {}) {
        e = Jn(e);
        let { relativeKey: r, driver: i } = n(e);
        return zn(i.getItem, r, t).then((e) => Ln(e));
      },
      getItems(e, t = {}) {
        return s(e, t, (e) =>
          e.driver.getItems
            ? zn(
                e.driver.getItems,
                e.items.map((e) => ({
                  key: e.relativeKey,
                  options: e.options,
                })),
                t
              ).then((t) =>
                t.map((t) => ({ key: Yn(e.base, t.key), value: Ln(t.value) }))
              )
            : Promise.all(
                e.items.map((t) =>
                  zn(e.driver.getItem, t.relativeKey, t.options).then((e) => ({
                    key: t.key,
                    value: Ln(e),
                  }))
                )
              )
        );
      },
      getItemRaw(e, t = {}) {
        e = Jn(e);
        let { relativeKey: r, driver: i } = n(e);
        return i.getItemRaw
          ? zn(i.getItemRaw, r, t)
          : zn(i.getItem, r, t).then((e) => Gn(e));
      },
      async setItem(e, t, r = {}) {
        if (t === void 0) return c.removeItem(e);
        e = Jn(e);
        let { relativeKey: a, driver: o } = n(e);
        o.setItem &&
          (await zn(o.setItem, a, Hn(t), r), o.watch || i(`update`, e));
      },
      async setItems(e, t) {
        await s(e, t, async (e) => {
          if (e.driver.setItems)
            return zn(
              e.driver.setItems,
              e.items.map((e) => ({
                key: e.relativeKey,
                value: Hn(e.value),
                options: e.options,
              })),
              t
            );
          e.driver.setItem &&
            (await Promise.all(
              e.items.map((t) =>
                zn(e.driver.setItem, t.relativeKey, Hn(t.value), t.options)
              )
            ));
        });
      },
      async setItemRaw(e, t, r = {}) {
        if (t === void 0) return c.removeItem(e, r);
        e = Jn(e);
        let { relativeKey: a, driver: o } = n(e);
        if (o.setItemRaw) await zn(o.setItemRaw, a, t, r);
        else if (o.setItem) await zn(o.setItem, a, Wn(t), r);
        else return;
        o.watch || i(`update`, e);
      },
      async removeItem(e, t = {}) {
        typeof t == `boolean` && (t = { removeMeta: t }), (e = Jn(e));
        let { relativeKey: r, driver: a } = n(e);
        a.removeItem &&
          (await zn(a.removeItem, r, t),
          (t.removeMeta || t.removeMata) &&
            (await zn(a.removeItem, r + `$`, t)),
          a.watch || i(`remove`, e));
      },
      async getMeta(e, t = {}) {
        typeof t == `boolean` && (t = { nativeOnly: t }), (e = Jn(e));
        let { relativeKey: r, driver: i } = n(e),
          a = Object.create(null);
        if (
          (i.getMeta && Object.assign(a, await zn(i.getMeta, r, t)),
          !t.nativeOnly)
        ) {
          let e = await zn(i.getItem, r + `$`, t).then((e) => Ln(e));
          e &&
            typeof e == `object` &&
            (typeof e.atime == `string` && (e.atime = new Date(e.atime)),
            typeof e.mtime == `string` && (e.mtime = new Date(e.mtime)),
            Object.assign(a, e));
        }
        return a;
      },
      setMeta(e, t, n = {}) {
        return this.setItem(e + `$`, t, n);
      },
      removeMeta(e, t = {}) {
        return this.removeItem(e + `$`, t);
      },
      async getKeys(e, t = {}) {
        e = Xn(e);
        let n = r(e, !0),
          i = [],
          a = [],
          o = !0;
        for (let e of n) {
          e.driver.flags?.maxDepth || (o = !1);
          let n = await zn(e.driver.getKeys, e.relativeBase, t);
          for (let t of n) {
            let n = e.mountpoint + Jn(t);
            i.some((e) => n.startsWith(e)) || a.push(n);
          }
          i = [e.mountpoint, ...i.filter((t) => !t.startsWith(e.mountpoint))];
        }
        let s = t.maxDepth !== void 0 && !o;
        return a.filter((n) => (!s || Zn(n, t.maxDepth)) && Qn(n, e));
      },
      async clear(e, t = {}) {
        (e = Xn(e)),
          await Promise.all(
            r(e, !1).map(async (e) => {
              if (e.driver.clear) return zn(e.driver.clear, e.relativeBase, t);
              if (e.driver.removeItem) {
                let n = await e.driver.getKeys(e.relativeBase || ``, t);
                return Promise.all(n.map((n) => e.driver.removeItem(n, t)));
              }
            })
          );
      },
      async dispose() {
        await Promise.all(Object.values(t.mounts).map((e) => ir(e)));
      },
      async watch(e) {
        return (
          await a(),
          t.watchListeners.push(e),
          async () => {
            (t.watchListeners = t.watchListeners.filter((t) => t !== e)),
              t.watchListeners.length === 0 && (await o());
          }
        );
      },
      async unwatch() {
        (t.watchListeners = []), await o();
      },
      mount(e, n) {
        if (((e = Xn(e)), e && t.mounts[e]))
          throw Error(`already mounted at ${e}`);
        return (
          e &&
            (t.mountpoints.push(e),
            t.mountpoints.sort((e, t) => t.length - e.length)),
          (t.mounts[e] = n),
          t.watching &&
            Promise.resolve(rr(n, i, e))
              .then((n) => {
                t.unwatch[e] = n;
              })
              .catch(console.error),
          c
        );
      },
      async unmount(e, n = !0) {
        (e = Xn(e)),
          e &&
            t.mounts[e] &&
            (t.watching &&
              e in t.unwatch &&
              (t.unwatch[e]?.(), delete t.unwatch[e]),
            n && (await ir(t.mounts[e])),
            (t.mountpoints = t.mountpoints.filter((t) => t !== e)),
            delete t.mounts[e]);
      },
      getMount(e = ``) {
        e = Jn(e) + `:`;
        let t = n(e);
        return { driver: t.driver, base: t.base };
      },
      getMounts(e = ``, t = {}) {
        return (
          (e = Jn(e)),
          r(e, t.parents).map((e) => ({ driver: e.driver, base: e.mountpoint }))
        );
      },
      keys: (e, t = {}) => c.getKeys(e, t),
      get: (e, t = {}) => c.getItem(e, t),
      set: (e, t, n = {}) => c.setItem(e, t, n),
      has: (e, t = {}) => c.hasItem(e, t),
      del: (e, t = {}) => c.removeItem(e, t),
      remove: (e, t = {}) => c.removeItem(e, t),
    };
  return c;
}
function rr(e, t, n) {
  return e.watch ? e.watch((e, r) => t(e, n + r)) : () => {};
}
async function ir(e) {
  typeof e.dispose == `function` && (await zn(e.dispose));
}
var ar = (e) =>
    JSON.stringify(e, (e, t) =>
      typeof t == `bigint` ? t.toString() + `n` : t
    ),
  or = (e) => {
    let t = e.replace(
      /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      `$1"$2n"$3`
    );
    return JSON.parse(t, (e, t) =>
      typeof t == `string` && t.match(/^\d+n$/)
        ? BigInt(t.substring(0, t.length - 1))
        : t
    );
  };
function sr(e) {
  if (typeof e != `string`)
    throw Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return or(e);
  } catch {
    return e;
  }
}
function cr(e) {
  return typeof e == `string` ? e : ar(e) || ``;
}
var lr = `idb-keyval`,
  ur = (e = {}) => {
    let t = e.base && e.base.length > 0 ? `${e.base}:` : ``,
      n = (e) => t + e,
      r;
    return (
      e.dbName && e.storeName && (r = k(e.dbName, e.storeName)),
      {
        name: lr,
        options: e,
        async hasItem(e) {
          return !(typeof (await O(n(e), r)) > `u`);
        },
        async getItem(e) {
          return (await O(n(e), r)) ?? null;
        },
        setItem(e, t) {
          return A(n(e), t, r);
        },
        removeItem(e) {
          return j(n(e), r);
        },
        getKeys() {
          return D(r);
        },
        clear() {
          return M(r);
        },
      }
    );
  },
  dr = `WALLET_CONNECT_V2_INDEXED_DB`,
  fr = `keyvaluestorage`,
  pr = class {
    constructor() {
      this.indexedDb = nr({ driver: ur({ dbName: dr, storeName: fr }) });
    }
    async getKeys() {
      return this.indexedDb.getKeys();
    }
    async getEntries() {
      return (
        await this.indexedDb.getItems(await this.indexedDb.getKeys())
      ).map((e) => [e.key, e.value]);
    }
    async getItem(e) {
      let t = await this.indexedDb.getItem(e);
      if (t !== null) return t;
    }
    async setItem(e, t) {
      await this.indexedDb.setItem(e, cr(t));
    }
    async removeItem(e) {
      await this.indexedDb.removeItem(e);
    }
  },
  mr =
    typeof globalThis < `u`
      ? globalThis
      : typeof window < `u`
      ? window
      : typeof global < `u`
      ? global
      : typeof self < `u`
      ? self
      : {},
  hr = { exports: {} };
(function () {
  let e;
  function t() {}
  (e = t),
    (e.prototype.getItem = function (e) {
      return this.hasOwnProperty(e) ? String(this[e]) : null;
    }),
    (e.prototype.setItem = function (e, t) {
      this[e] = String(t);
    }),
    (e.prototype.removeItem = function (e) {
      delete this[e];
    }),
    (e.prototype.clear = function () {
      let e = this;
      Object.keys(e).forEach(function (t) {
        (e[t] = void 0), delete e[t];
      });
    }),
    (e.prototype.key = function (e) {
      return (e ||= 0), Object.keys(this)[e];
    }),
    e.prototype.__defineGetter__(`length`, function () {
      return Object.keys(this).length;
    }),
    (hr.exports =
      typeof mr < `u` && mr.localStorage
        ? mr.localStorage
        : typeof window < `u` && window.localStorage
        ? window.localStorage
        : new t());
})();
function gr(e) {
  return [e[0], sr(e[1] ?? ``)];
}
var _r = class {
    constructor() {
      this.localStorage = hr.exports;
    }
    async getKeys() {
      return Object.keys(this.localStorage);
    }
    async getEntries() {
      return Object.entries(this.localStorage).map(gr);
    }
    async getItem(e) {
      let t = this.localStorage.getItem(e);
      if (t !== null) return sr(t);
    }
    async setItem(e, t) {
      this.localStorage.setItem(e, cr(t));
    }
    async removeItem(e) {
      this.localStorage.removeItem(e);
    }
  },
  vr = `wc_storage_version`,
  yr = 1,
  br = async (e, t, n) => {
    let r = vr,
      i = await t.getItem(r);
    if (i && i >= yr) {
      n(t);
      return;
    }
    let a = await e.getKeys();
    if (!a.length) {
      n(t);
      return;
    }
    let o = [];
    for (; a.length; ) {
      let n = a.shift();
      if (!n) continue;
      let r = n.toLowerCase();
      if (
        r.includes(`wc@`) ||
        r.includes(`walletconnect`) ||
        r.includes(`wc_`) ||
        r.includes(`wallet_connect`)
      ) {
        let r = await e.getItem(n);
        await t.setItem(n, r), o.push(n);
      }
    }
    await t.setItem(r, yr), n(t), xr(e, o);
  },
  xr = async (e, t) => {
    t.length &&
      t.forEach(async (t) => {
        await e.removeItem(t);
      });
  },
  Sr = class {
    constructor() {
      (this.initialized = !1),
        (this.setInitialized = (e) => {
          (this.storage = e), (this.initialized = !0);
        });
      let e = new _r();
      this.storage = e;
      try {
        br(e, new pr(), this.setInitialized);
      } catch {
        this.initialized = !0;
      }
    }
    async getKeys() {
      return await this.initialize(), this.storage.getKeys();
    }
    async getEntries() {
      return await this.initialize(), this.storage.getEntries();
    }
    async getItem(e) {
      return await this.initialize(), this.storage.getItem(e);
    }
    async setItem(e, t) {
      return await this.initialize(), this.storage.setItem(e, t);
    }
    async removeItem(e) {
      return await this.initialize(), this.storage.removeItem(e);
    }
    async initialize() {
      this.initialized ||
        (await new Promise((e) => {
          let t = setInterval(() => {
            this.initialized && (clearInterval(t), e());
          }, 20);
        }));
    }
  },
  Cr = Object.defineProperty,
  wr = (e, t, n) =>
    t in e
      ? Cr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Tr = (e, t, n) => wr(e, typeof t == `symbol` ? t : t + ``, n),
  Er = class extends En {
    constructor(e) {
      super(),
        (this.opts = e),
        Tr(this, `protocol`, `wc`),
        Tr(this, `version`, 2);
    }
  },
  Dr = Object.defineProperty,
  Or = (e, t, n) =>
    t in e
      ? Dr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  kr = (e, t, n) => Or(e, typeof t == `symbol` ? t : t + ``, n),
  Ar = class extends En {
    constructor(e, t) {
      super(),
        (this.core = e),
        (this.logger = t),
        kr(this, `records`, new Map());
    }
  },
  jr = class {
    constructor(e, t) {
      (this.logger = e), (this.core = t);
    }
  },
  Mr = class extends En {
    constructor(e, t) {
      super(), (this.relayer = e), (this.logger = t);
    }
  },
  Nr = class extends En {
    constructor(e) {
      super();
    }
  },
  Pr = class {
    constructor(e, t, n, r) {
      (this.core = e), (this.logger = t), (this.name = n);
    }
  },
  Fr = class extends En {
    constructor(e, t) {
      super(), (this.relayer = e), (this.logger = t);
    }
  },
  Ir = class extends En {
    constructor(e, t) {
      super(), (this.core = e), (this.logger = t);
    }
  },
  Lr = class {
    constructor(e, t, n) {
      (this.core = e), (this.logger = t), (this.store = n);
    }
  },
  Rr = class {
    constructor(e, t) {
      (this.projectId = e), (this.logger = t);
    }
  },
  zr = class {
    constructor(e, t, n) {
      (this.core = e), (this.logger = t), (this.telemetryEnabled = n);
    }
  },
  Br = Object.defineProperty,
  Vr = (e, t, n) =>
    t in e
      ? Br(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Hr = (e, t, n) => Vr(e, typeof t == `symbol` ? t : t + ``, n),
  Ur = class {
    constructor(e) {
      (this.opts = e), Hr(this, `protocol`, `wc`), Hr(this, `version`, 2);
    }
  },
  Wr = class {
    constructor(e) {
      this.client = e;
    }
  };
function Gr(e) {
  return (
    e instanceof Uint8Array ||
    (ArrayBuffer.isView(e) && e.constructor.name === `Uint8Array`)
  );
}
function Kr(e, ...t) {
  if (!Gr(e)) throw Error(`Uint8Array expected`);
  if (t.length > 0 && !t.includes(e.length))
    throw Error(
      `Uint8Array expected of length ` + t + `, got length=` + e.length
    );
}
function qr(e, t = !0) {
  if (e.destroyed) throw Error(`Hash instance has been destroyed`);
  if (t && e.finished) throw Error(`Hash#digest() has already been called`);
}
function Jr(e, t) {
  Kr(e);
  let n = t.outputLen;
  if (e.length < n)
    throw Error(`digestInto() expects output buffer of length at least ` + n);
}
var Yr =
    typeof globalThis == `object` && `crypto` in globalThis
      ? globalThis.crypto
      : void 0,
  Xr = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
function Zr(e) {
  if (typeof e != `string`)
    throw Error(`utf8ToBytes expected string, got ` + typeof e);
  return new Uint8Array(new TextEncoder().encode(e));
}
function Qr(e) {
  return typeof e == `string` && (e = Zr(e)), Kr(e), e;
}
var $r = class {
  clone() {
    return this._cloneInto();
  }
};
function ei(e) {
  let t = (t) => e().update(Qr(t)).digest(),
    n = e();
  return (
    (t.outputLen = n.outputLen),
    (t.blockLen = n.blockLen),
    (t.create = () => e()),
    t
  );
}
function ti(e = 32) {
  if (Yr && typeof Yr.getRandomValues == `function`)
    return Yr.getRandomValues(new Uint8Array(e));
  if (Yr && typeof Yr.randomBytes == `function`) return Yr.randomBytes(e);
  throw Error(`crypto.getRandomValues must be defined`);
}
function ni(e, t, n, r) {
  if (typeof e.setBigUint64 == `function`) return e.setBigUint64(t, n, r);
  let i = BigInt(32),
    a = BigInt(4294967295),
    o = Number((n >> i) & a),
    s = Number(n & a),
    c = r ? 4 : 0,
    l = r ? 0 : 4;
  e.setUint32(t + c, o, r), e.setUint32(t + l, s, r);
}
var ri = class extends $r {
    constructor(e, t, n, r) {
      super(),
        (this.blockLen = e),
        (this.outputLen = t),
        (this.padOffset = n),
        (this.isLE = r),
        (this.finished = !1),
        (this.length = 0),
        (this.pos = 0),
        (this.destroyed = !1),
        (this.buffer = new Uint8Array(e)),
        (this.view = Xr(this.buffer));
    }
    update(e) {
      qr(this);
      let { view: t, buffer: n, blockLen: r } = this;
      e = Qr(e);
      let i = e.length;
      for (let a = 0; a < i; ) {
        let o = Math.min(r - this.pos, i - a);
        if (o === r) {
          let t = Xr(e);
          for (; r <= i - a; a += r) this.process(t, a);
          continue;
        }
        n.set(e.subarray(a, a + o), this.pos),
          (this.pos += o),
          (a += o),
          this.pos === r && (this.process(t, 0), (this.pos = 0));
      }
      return (this.length += e.length), this.roundClean(), this;
    }
    digestInto(e) {
      qr(this), Jr(e, this), (this.finished = !0);
      let { buffer: t, view: n, blockLen: r, isLE: i } = this,
        { pos: a } = this;
      (t[a++] = 128),
        this.buffer.subarray(a).fill(0),
        this.padOffset > r - a && (this.process(n, 0), (a = 0));
      for (let e = a; e < r; e++) t[e] = 0;
      ni(n, r - 8, BigInt(this.length * 8), i), this.process(n, 0);
      let o = Xr(e),
        s = this.outputLen;
      if (s % 4) throw Error(`_sha2: outputLen should be aligned to 32bit`);
      let c = s / 4,
        l = this.get();
      if (c > l.length) throw Error(`_sha2: outputLen bigger than state`);
      for (let e = 0; e < c; e++) o.setUint32(4 * e, l[e], i);
    }
    digest() {
      let { buffer: e, outputLen: t } = this;
      this.digestInto(e);
      let n = e.slice(0, t);
      return this.destroy(), n;
    }
    _cloneInto(e) {
      (e ||= new this.constructor()), e.set(...this.get());
      let {
        blockLen: t,
        buffer: n,
        length: r,
        finished: i,
        destroyed: a,
        pos: o,
      } = this;
      return (
        (e.length = r),
        (e.pos = o),
        (e.finished = i),
        (e.destroyed = a),
        r % t && e.buffer.set(n),
        e
      );
    }
  },
  ii = BigInt(2 ** 32 - 1),
  ai = BigInt(32);
function oi(e, t = !1) {
  return t
    ? { h: Number(e & ii), l: Number((e >> ai) & ii) }
    : { h: Number((e >> ai) & ii) | 0, l: Number(e & ii) | 0 };
}
function si(e, t = !1) {
  let n = new Uint32Array(e.length),
    r = new Uint32Array(e.length);
  for (let i = 0; i < e.length; i++) {
    let { h: a, l: o } = oi(e[i], t);
    [n[i], r[i]] = [a, o];
  }
  return [n, r];
}
var ci = (e, t) => (BigInt(e >>> 0) << ai) | BigInt(t >>> 0),
  li = (e, t, n) => e >>> n,
  ui = (e, t, n) => (e << (32 - n)) | (t >>> n),
  di = (e, t, n) => (e >>> n) | (t << (32 - n)),
  fi = (e, t, n) => (e << (32 - n)) | (t >>> n),
  pi = (e, t, n) => (e << (64 - n)) | (t >>> (n - 32)),
  mi = (e, t, n) => (e >>> (n - 32)) | (t << (64 - n)),
  hi = (e, t) => t,
  gi = (e, t) => e,
  _i = (e, t, n) => (e << n) | (t >>> (32 - n)),
  vi = (e, t, n) => (t << n) | (e >>> (32 - n)),
  yi = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n)),
  bi = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
function xi(e, t, n, r) {
  let i = (t >>> 0) + (r >>> 0);
  return { h: (e + n + ((i / 2 ** 32) | 0)) | 0, l: i | 0 };
}
var B = {
    fromBig: oi,
    split: si,
    toBig: ci,
    shrSH: li,
    shrSL: ui,
    rotrSH: di,
    rotrSL: fi,
    rotrBH: pi,
    rotrBL: mi,
    rotr32H: hi,
    rotr32L: gi,
    rotlSH: _i,
    rotlSL: vi,
    rotlBH: yi,
    rotlBL: bi,
    add: xi,
    add3L: (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0),
    add3H: (e, t, n, r) => (t + n + r + ((e / 2 ** 32) | 0)) | 0,
    add4L: (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0),
    add4H: (e, t, n, r, i) => (t + n + r + i + ((e / 2 ** 32) | 0)) | 0,
    add5H: (e, t, n, r, i, a) => (t + n + r + i + a + ((e / 2 ** 32) | 0)) | 0,
    add5L: (e, t, n, r, i) =>
      (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0),
  },
  [Si, Ci] = B.split(
    `0x428a2f98d728ae22.0x7137449123ef65cd.0xb5c0fbcfec4d3b2f.0xe9b5dba58189dbbc.0x3956c25bf348b538.0x59f111f1b605d019.0x923f82a4af194f9b.0xab1c5ed5da6d8118.0xd807aa98a3030242.0x12835b0145706fbe.0x243185be4ee4b28c.0x550c7dc3d5ffb4e2.0x72be5d74f27b896f.0x80deb1fe3b1696b1.0x9bdc06a725c71235.0xc19bf174cf692694.0xe49b69c19ef14ad2.0xefbe4786384f25e3.0x0fc19dc68b8cd5b5.0x240ca1cc77ac9c65.0x2de92c6f592b0275.0x4a7484aa6ea6e483.0x5cb0a9dcbd41fbd4.0x76f988da831153b5.0x983e5152ee66dfab.0xa831c66d2db43210.0xb00327c898fb213f.0xbf597fc7beef0ee4.0xc6e00bf33da88fc2.0xd5a79147930aa725.0x06ca6351e003826f.0x142929670a0e6e70.0x27b70a8546d22ffc.0x2e1b21385c26c926.0x4d2c6dfc5ac42aed.0x53380d139d95b3df.0x650a73548baf63de.0x766a0abb3c77b2a8.0x81c2c92e47edaee6.0x92722c851482353b.0xa2bfe8a14cf10364.0xa81a664bbc423001.0xc24b8b70d0f89791.0xc76c51a30654be30.0xd192e819d6ef5218.0xd69906245565a910.0xf40e35855771202a.0x106aa07032bbd1b8.0x19a4c116b8d2d0c8.0x1e376c085141ab53.0x2748774cdf8eeb99.0x34b0bcb5e19b48a8.0x391c0cb3c5c95a63.0x4ed8aa4ae3418acb.0x5b9cca4f7763e373.0x682e6ff3d6b2b8a3.0x748f82ee5defb2fc.0x78a5636f43172f60.0x84c87814a1f0ab72.0x8cc702081a6439ec.0x90befffa23631e28.0xa4506cebde82bde9.0xbef9a3f7b2c67915.0xc67178f2e372532b.0xca273eceea26619c.0xd186b8c721c0c207.0xeada7dd6cde0eb1e.0xf57d4f7fee6ed178.0x06f067aa72176fba.0x0a637dc5a2c898a6.0x113f9804bef90dae.0x1b710b35131c471b.0x28db77f523047d84.0x32caab7b40c72493.0x3c9ebe0a15c9bebc.0x431d67c49c100d4c.0x4cc5d4becb3e42b6.0x597f299cfc657e2a.0x5fcb6fab3ad6faec.0x6c44198c4a475817`
      .split(`.`)
      .map((e) => BigInt(e))
  ),
  wi = new Uint32Array(80),
  Ti = new Uint32Array(80),
  Ei = class extends ri {
    constructor() {
      super(128, 64, 16, !1),
        (this.Ah = 1779033703),
        (this.Al = -205731576),
        (this.Bh = -1150833019),
        (this.Bl = -2067093701),
        (this.Ch = 1013904242),
        (this.Cl = -23791573),
        (this.Dh = -1521486534),
        (this.Dl = 1595750129),
        (this.Eh = 1359893119),
        (this.El = -1377402159),
        (this.Fh = -1694144372),
        (this.Fl = 725511199),
        (this.Gh = 528734635),
        (this.Gl = -79577749),
        (this.Hh = 1541459225),
        (this.Hl = 327033209);
    }
    get() {
      let {
        Ah: e,
        Al: t,
        Bh: n,
        Bl: r,
        Ch: i,
        Cl: a,
        Dh: o,
        Dl: s,
        Eh: c,
        El: l,
        Fh: u,
        Fl: d,
        Gh: f,
        Gl: p,
        Hh: m,
        Hl: h,
      } = this;
      return [e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h];
    }
    set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
      (this.Ah = e | 0),
        (this.Al = t | 0),
        (this.Bh = n | 0),
        (this.Bl = r | 0),
        (this.Ch = i | 0),
        (this.Cl = a | 0),
        (this.Dh = o | 0),
        (this.Dl = s | 0),
        (this.Eh = c | 0),
        (this.El = l | 0),
        (this.Fh = u | 0),
        (this.Fl = d | 0),
        (this.Gh = f | 0),
        (this.Gl = p | 0),
        (this.Hh = m | 0),
        (this.Hl = h | 0);
    }
    process(e, t) {
      for (let n = 0; n < 16; n++, t += 4)
        (wi[n] = e.getUint32(t)), (Ti[n] = e.getUint32((t += 4)));
      for (let e = 16; e < 80; e++) {
        let t = wi[e - 15] | 0,
          n = Ti[e - 15] | 0,
          r = B.rotrSH(t, n, 1) ^ B.rotrSH(t, n, 8) ^ B.shrSH(t, n, 7),
          i = B.rotrSL(t, n, 1) ^ B.rotrSL(t, n, 8) ^ B.shrSL(t, n, 7),
          a = wi[e - 2] | 0,
          o = Ti[e - 2] | 0,
          s = B.rotrSH(a, o, 19) ^ B.rotrBH(a, o, 61) ^ B.shrSH(a, o, 6),
          c = B.rotrSL(a, o, 19) ^ B.rotrBL(a, o, 61) ^ B.shrSL(a, o, 6),
          l = B.add4L(i, c, Ti[e - 7], Ti[e - 16]),
          u = B.add4H(l, r, s, wi[e - 7], wi[e - 16]);
        (wi[e] = u | 0), (Ti[e] = l | 0);
      }
      let {
        Ah: n,
        Al: r,
        Bh: i,
        Bl: a,
        Ch: o,
        Cl: s,
        Dh: c,
        Dl: l,
        Eh: u,
        El: d,
        Fh: f,
        Fl: p,
        Gh: m,
        Gl: h,
        Hh: g,
        Hl: _,
      } = this;
      for (let e = 0; e < 80; e++) {
        let t = B.rotrSH(u, d, 14) ^ B.rotrSH(u, d, 18) ^ B.rotrBH(u, d, 41),
          v = B.rotrSL(u, d, 14) ^ B.rotrSL(u, d, 18) ^ B.rotrBL(u, d, 41),
          y = (u & f) ^ (~u & m),
          b = (d & p) ^ (~d & h),
          x = B.add5L(_, v, b, Ci[e], Ti[e]),
          S = B.add5H(x, g, t, y, Si[e], wi[e]),
          C = x | 0,
          w = B.rotrSH(n, r, 28) ^ B.rotrBH(n, r, 34) ^ B.rotrBH(n, r, 39),
          T = B.rotrSL(n, r, 28) ^ B.rotrBL(n, r, 34) ^ B.rotrBL(n, r, 39),
          E = (n & i) ^ (n & o) ^ (i & o),
          D = (r & a) ^ (r & s) ^ (a & s);
        (g = m | 0),
          (_ = h | 0),
          (m = f | 0),
          (h = p | 0),
          (f = u | 0),
          (p = d | 0),
          ({ h: u, l: d } = B.add(c | 0, l | 0, S | 0, C | 0)),
          (c = o | 0),
          (l = s | 0),
          (o = i | 0),
          (s = a | 0),
          (i = n | 0),
          (a = r | 0);
        let O = B.add3L(C, T, D);
        (n = B.add3H(O, S, w, E)), (r = O | 0);
      }
      ({ h: n, l: r } = B.add(this.Ah | 0, this.Al | 0, n | 0, r | 0)),
        ({ h: i, l: a } = B.add(this.Bh | 0, this.Bl | 0, i | 0, a | 0)),
        ({ h: o, l: s } = B.add(this.Ch | 0, this.Cl | 0, o | 0, s | 0)),
        ({ h: c, l } = B.add(this.Dh | 0, this.Dl | 0, c | 0, l | 0)),
        ({ h: u, l: d } = B.add(this.Eh | 0, this.El | 0, u | 0, d | 0)),
        ({ h: f, l: p } = B.add(this.Fh | 0, this.Fl | 0, f | 0, p | 0)),
        ({ h: m, l: h } = B.add(this.Gh | 0, this.Gl | 0, m | 0, h | 0)),
        ({ h: g, l: _ } = B.add(this.Hh | 0, this.Hl | 0, g | 0, _ | 0)),
        this.set(n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _);
    }
    roundClean() {
      wi.fill(0), Ti.fill(0);
    }
    destroy() {
      this.buffer.fill(0),
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  },
  Di = ei(() => new Ei()),
  Oi = BigInt(0),
  ki = BigInt(1),
  Ai = BigInt(2);
function ji(e) {
  return (
    e instanceof Uint8Array ||
    (ArrayBuffer.isView(e) && e.constructor.name === `Uint8Array`)
  );
}
function Mi(e) {
  if (!ji(e)) throw Error(`Uint8Array expected`);
}
function Ni(e, t) {
  if (typeof t != `boolean`) throw Error(e + ` boolean expected, got ` + t);
}
var Pi = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, `0`));
function Fi(e) {
  Mi(e);
  let t = ``;
  for (let n = 0; n < e.length; n++) t += Pi[e[n]];
  return t;
}
function Ii(e) {
  if (typeof e != `string`) throw Error(`hex string expected, got ` + typeof e);
  return e === `` ? Oi : BigInt(`0x` + e);
}
var Li = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function Ri(e) {
  if (e >= Li._0 && e <= Li._9) return e - Li._0;
  if (e >= Li.A && e <= Li.F) return e - (Li.A - 10);
  if (e >= Li.a && e <= Li.f) return e - (Li.a - 10);
}
function zi(e) {
  if (typeof e != `string`) throw Error(`hex string expected, got ` + typeof e);
  let t = e.length,
    n = t / 2;
  if (t % 2)
    throw Error(`hex string expected, got unpadded hex of length ` + t);
  let r = new Uint8Array(n);
  for (let t = 0, i = 0; t < n; t++, i += 2) {
    let n = Ri(e.charCodeAt(i)),
      a = Ri(e.charCodeAt(i + 1));
    if (n === void 0 || a === void 0) {
      let t = e[i] + e[i + 1];
      throw Error(
        `hex string expected, got non-hex character "` + t + `" at index ` + i
      );
    }
    r[t] = n * 16 + a;
  }
  return r;
}
function Bi(e) {
  return Ii(Fi(e));
}
function Vi(e) {
  return Mi(e), Ii(Fi(Uint8Array.from(e).reverse()));
}
function Hi(e, t) {
  return zi(e.toString(16).padStart(t * 2, `0`));
}
function Ui(e, t) {
  return Hi(e, t).reverse();
}
function Wi(e, t, n) {
  let r;
  if (typeof t == `string`)
    try {
      r = zi(t);
    } catch (t) {
      throw Error(e + ` must be hex string or Uint8Array, cause: ` + t);
    }
  else if (ji(t)) r = Uint8Array.from(t);
  else throw Error(e + ` must be hex string or Uint8Array`);
  let i = r.length;
  if (typeof n == `number` && i !== n)
    throw Error(e + ` of length ` + n + ` expected, got ` + i);
  return r;
}
function Gi(...e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    Mi(r), (t += r.length);
  }
  let n = new Uint8Array(t);
  for (let t = 0, r = 0; t < e.length; t++) {
    let i = e[t];
    n.set(i, r), (r += i.length);
  }
  return n;
}
var Ki = (e) => typeof e == `bigint` && Oi <= e;
function qi(e, t, n) {
  return Ki(e) && Ki(t) && Ki(n) && t <= e && e < n;
}
function Ji(e, t, n, r) {
  if (!qi(t, n, r))
    throw Error(
      `expected valid ` + e + `: ` + n + ` <= n < ` + r + `, got ` + t
    );
}
function Yi(e) {
  let t = 0;
  for (; e > Oi; e >>= ki, t += 1);
  return t;
}
var Xi = (e) => (Ai << BigInt(e - 1)) - ki,
  Zi = {
    bigint: (e) => typeof e == `bigint`,
    function: (e) => typeof e == `function`,
    boolean: (e) => typeof e == `boolean`,
    string: (e) => typeof e == `string`,
    stringOrUint8Array: (e) => typeof e == `string` || ji(e),
    isSafeInteger: (e) => Number.isSafeInteger(e),
    array: (e) => Array.isArray(e),
    field: (e, t) => t.Fp.isValid(e),
    hash: (e) => typeof e == `function` && Number.isSafeInteger(e.outputLen),
  };
function Qi(e, t, n = {}) {
  let r = (t, n, r) => {
    let i = Zi[n];
    if (typeof i != `function`) throw Error(`invalid validator function`);
    let a = e[t];
    if (!(r && a === void 0) && !i(a, e))
      throw Error(
        `param ` + String(t) + ` is invalid. Expected ` + n + `, got ` + a
      );
  };
  for (let [e, n] of Object.entries(t)) r(e, n, !1);
  for (let [e, t] of Object.entries(n)) r(e, t, !0);
  return e;
}
function $i(e) {
  let t = new WeakMap();
  return (n, ...r) => {
    let i = t.get(n);
    if (i !== void 0) return i;
    let a = e(n, ...r);
    return t.set(n, a), a;
  };
}
var ea = BigInt(0),
  ta = BigInt(1),
  na = BigInt(2),
  ra = BigInt(3),
  ia = BigInt(4),
  aa = BigInt(5),
  oa = BigInt(8);
function sa(e, t) {
  let n = e % t;
  return n >= ea ? n : t + n;
}
function ca(e, t, n) {
  if (t < ea) throw Error(`invalid exponent, negatives unsupported`);
  if (n <= ea) throw Error(`invalid modulus`);
  if (n === ta) return ea;
  let r = ta;
  for (; t > ea; ) t & ta && (r = (r * e) % n), (e = (e * e) % n), (t >>= ta);
  return r;
}
function la(e, t, n) {
  let r = e;
  for (; t-- > ea; ) (r *= r), (r %= n);
  return r;
}
function ua(e, t) {
  if (e === ea) throw Error(`invert: expected non-zero number`);
  if (t <= ea) throw Error(`invert: expected positive modulus, got ` + t);
  let n = sa(e, t),
    r = t,
    i = ea,
    a = ta;
  for (; n !== ea; ) {
    let e = r / n,
      t = r % n,
      o = i - a * e;
    (r = n), (n = t), (i = a), (a = o);
  }
  if (r !== ta) throw Error(`invert: does not exist`);
  return sa(i, t);
}
function da(e) {
  let t = (e - ta) / na,
    n,
    r,
    i;
  for (n = e - ta, r = 0; n % na === ea; n /= na, r++);
  for (i = na; i < e && ca(i, t, e) !== e - ta; i++)
    if (i > 1e3) throw Error(`Cannot find square root: likely non-prime P`);
  if (r === 1) {
    let t = (e + ta) / ia;
    return function (e, n) {
      let r = e.pow(n, t);
      if (!e.eql(e.sqr(r), n)) throw Error(`Cannot find square root`);
      return r;
    };
  }
  let a = (n + ta) / na;
  return function (e, o) {
    if (e.pow(o, t) === e.neg(e.ONE)) throw Error(`Cannot find square root`);
    let s = r,
      c = e.pow(e.mul(e.ONE, i), n),
      l = e.pow(o, a),
      u = e.pow(o, n);
    for (; !e.eql(u, e.ONE); ) {
      if (e.eql(u, e.ZERO)) return e.ZERO;
      let t = 1;
      for (let n = e.sqr(u); t < s && !e.eql(n, e.ONE); t++) n = e.sqr(n);
      let n = e.pow(c, ta << BigInt(s - t - 1));
      (c = e.sqr(n)), (l = e.mul(l, n)), (u = e.mul(u, c)), (s = t);
    }
    return l;
  };
}
function fa(e) {
  if (e % ia === ra) {
    let t = (e + ta) / ia;
    return function (e, n) {
      let r = e.pow(n, t);
      if (!e.eql(e.sqr(r), n)) throw Error(`Cannot find square root`);
      return r;
    };
  }
  if (e % oa === aa) {
    let t = (e - aa) / oa;
    return function (e, n) {
      let r = e.mul(n, na),
        i = e.pow(r, t),
        a = e.mul(n, i),
        o = e.mul(e.mul(a, na), i),
        s = e.mul(a, e.sub(o, e.ONE));
      if (!e.eql(e.sqr(s), n)) throw Error(`Cannot find square root`);
      return s;
    };
  }
  return da(e);
}
var pa = (e, t) => (sa(e, t) & ta) === ta,
  ma = [
    `create`,
    `isValid`,
    `is0`,
    `neg`,
    `inv`,
    `sqrt`,
    `sqr`,
    `eql`,
    `add`,
    `sub`,
    `mul`,
    `pow`,
    `div`,
    `addN`,
    `subN`,
    `mulN`,
    `sqrN`,
  ];
function ha(e) {
  return Qi(
    e,
    ma.reduce((e, t) => ((e[t] = `function`), e), {
      ORDER: `bigint`,
      MASK: `bigint`,
      BYTES: `isSafeInteger`,
      BITS: `isSafeInteger`,
    })
  );
}
function ga(e, t, n) {
  if (n < ea) throw Error(`invalid exponent, negatives unsupported`);
  if (n === ea) return e.ONE;
  if (n === ta) return t;
  let r = e.ONE,
    i = t;
  for (; n > ea; ) n & ta && (r = e.mul(r, i)), (i = e.sqr(i)), (n >>= ta);
  return r;
}
function _a(e, t) {
  let n = Array(t.length),
    r = t.reduce(
      (t, r, i) => (e.is0(r) ? t : ((n[i] = t), e.mul(t, r))),
      e.ONE
    ),
    i = e.inv(r);
  return (
    t.reduceRight(
      (t, r, i) => (e.is0(r) ? t : ((n[i] = e.mul(t, n[i])), e.mul(t, r))),
      i
    ),
    n
  );
}
function va(e, t) {
  let n = t === void 0 ? e.toString(2).length : t;
  return { nBitLength: n, nByteLength: Math.ceil(n / 8) };
}
function ya(e, t, n = !1, r = {}) {
  if (e <= ea) throw Error(`invalid field: expected ORDER > 0, got ` + e);
  let { nBitLength: i, nByteLength: a } = va(e, t);
  if (a > 2048) throw Error(`invalid field: expected ORDER of <= 2048 bytes`);
  let o,
    s = Object.freeze({
      ORDER: e,
      isLE: n,
      BITS: i,
      BYTES: a,
      MASK: Xi(i),
      ZERO: ea,
      ONE: ta,
      create: (t) => sa(t, e),
      isValid: (t) => {
        if (typeof t != `bigint`)
          throw Error(
            `invalid field element: expected bigint, got ` + typeof t
          );
        return ea <= t && t < e;
      },
      is0: (e) => e === ea,
      isOdd: (e) => (e & ta) === ta,
      neg: (t) => sa(-t, e),
      eql: (e, t) => e === t,
      sqr: (t) => sa(t * t, e),
      add: (t, n) => sa(t + n, e),
      sub: (t, n) => sa(t - n, e),
      mul: (t, n) => sa(t * n, e),
      pow: (e, t) => ga(s, e, t),
      div: (t, n) => sa(t * ua(n, e), e),
      sqrN: (e) => e * e,
      addN: (e, t) => e + t,
      subN: (e, t) => e - t,
      mulN: (e, t) => e * t,
      inv: (t) => ua(t, e),
      sqrt: r.sqrt || ((t) => ((o ||= fa(e)), o(s, t))),
      invertBatch: (e) => _a(s, e),
      cmov: (e, t, n) => (n ? t : e),
      toBytes: (e) => (n ? Ui(e, a) : Hi(e, a)),
      fromBytes: (e) => {
        if (e.length !== a)
          throw Error(
            `Field.fromBytes: expected ` + a + ` bytes, got ` + e.length
          );
        return n ? Vi(e) : Bi(e);
      },
    });
  return Object.freeze(s);
}
var ba = BigInt(0),
  xa = BigInt(1);
function Sa(e, t) {
  let n = t.negate();
  return e ? n : t;
}
function Ca(e, t) {
  if (!Number.isSafeInteger(e) || e <= 0 || e > t)
    throw Error(`invalid window size, expected [1..` + t + `], got W=` + e);
}
function wa(e, t) {
  return Ca(e, t), { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) };
}
function Ta(e, t) {
  if (!Array.isArray(e)) throw Error(`array expected`);
  e.forEach((e, n) => {
    if (!(e instanceof t)) throw Error(`invalid point at index ` + n);
  });
}
function Ea(e, t) {
  if (!Array.isArray(e)) throw Error(`array of scalars expected`);
  e.forEach((e, n) => {
    if (!t.isValid(e)) throw Error(`invalid scalar at index ` + n);
  });
}
var Da = new WeakMap(),
  Oa = new WeakMap();
function ka(e) {
  return Oa.get(e) || 1;
}
function Aa(e, t) {
  return {
    constTimeNegate: Sa,
    hasPrecomputes(e) {
      return ka(e) !== 1;
    },
    unsafeLadder(t, n, r = e.ZERO) {
      let i = t;
      for (; n > ba; ) n & xa && (r = r.add(i)), (i = i.double()), (n >>= xa);
      return r;
    },
    precomputeWindow(e, n) {
      let { windows: r, windowSize: i } = wa(n, t),
        a = [],
        o = e,
        s = o;
      for (let e = 0; e < r; e++) {
        (s = o), a.push(s);
        for (let e = 1; e < i; e++) (s = s.add(o)), a.push(s);
        o = s.double();
      }
      return a;
    },
    wNAF(n, r, i) {
      let { windows: a, windowSize: o } = wa(n, t),
        s = e.ZERO,
        c = e.BASE,
        l = BigInt(2 ** n - 1),
        u = 2 ** n,
        d = BigInt(n);
      for (let e = 0; e < a; e++) {
        let t = e * o,
          n = Number(i & l);
        (i >>= d), n > o && ((n -= u), (i += xa));
        let a = t,
          f = t + Math.abs(n) - 1,
          p = e % 2 != 0,
          m = n < 0;
        n === 0 ? (c = c.add(Sa(p, r[a]))) : (s = s.add(Sa(m, r[f])));
      }
      return { p: s, f: c };
    },
    wNAFUnsafe(n, r, i, a = e.ZERO) {
      let { windows: o, windowSize: s } = wa(n, t),
        c = BigInt(2 ** n - 1),
        l = 2 ** n,
        u = BigInt(n);
      for (let e = 0; e < o; e++) {
        let t = e * s;
        if (i === ba) break;
        let n = Number(i & c);
        if (((i >>= u), n > s && ((n -= l), (i += xa)), n === 0)) continue;
        let o = r[t + Math.abs(n) - 1];
        n < 0 && (o = o.negate()), (a = a.add(o));
      }
      return a;
    },
    getPrecomputes(e, t, n) {
      let r = Da.get(t);
      return (
        r || ((r = this.precomputeWindow(t, e)), e !== 1 && Da.set(t, n(r))), r
      );
    },
    wNAFCached(e, t, n) {
      let r = ka(e);
      return this.wNAF(r, this.getPrecomputes(r, e, n), t);
    },
    wNAFCachedUnsafe(e, t, n, r) {
      let i = ka(e);
      return i === 1
        ? this.unsafeLadder(e, t, r)
        : this.wNAFUnsafe(i, this.getPrecomputes(i, e, n), t, r);
    },
    setWindowSize(e, n) {
      Ca(n, t), Oa.set(e, n), Da.delete(e);
    },
  };
}
function ja(e, t, n, r) {
  if ((Ta(n, e), Ea(r, t), n.length !== r.length))
    throw Error(`arrays of points and scalars must have equal length`);
  let i = e.ZERO,
    a = Yi(BigInt(n.length)),
    o = a > 12 ? a - 3 : a > 4 ? a - 2 : a ? 2 : 1,
    s = (1 << o) - 1,
    c = Array(s + 1).fill(i),
    l = Math.floor((t.BITS - 1) / o) * o,
    u = i;
  for (let e = l; e >= 0; e -= o) {
    c.fill(i);
    for (let t = 0; t < r.length; t++) {
      let i = r[t],
        a = Number((i >> BigInt(e)) & BigInt(s));
      c[a] = c[a].add(n[t]);
    }
    let t = i;
    for (let e = c.length - 1, n = i; e > 0; e--)
      (n = n.add(c[e])), (t = t.add(n));
    if (((u = u.add(t)), e !== 0)) for (let e = 0; e < o; e++) u = u.double();
  }
  return u;
}
function Ma(e) {
  return (
    ha(e.Fp),
    Qi(
      e,
      { n: `bigint`, h: `bigint`, Gx: `field`, Gy: `field` },
      { nBitLength: `isSafeInteger`, nByteLength: `isSafeInteger` }
    ),
    Object.freeze({ ...va(e.n, e.nBitLength), ...e, p: e.Fp.ORDER })
  );
}
var Na = BigInt(0),
  Pa = BigInt(1),
  Fa = BigInt(2),
  Ia = BigInt(8),
  La = { zip215: !0 };
function Ra(e) {
  let t = Ma(e);
  return (
    Qi(
      e,
      { hash: `function`, a: `bigint`, d: `bigint`, randomBytes: `function` },
      {
        adjustScalarBytes: `function`,
        domain: `function`,
        uvRatio: `function`,
        mapToCurve: `function`,
      }
    ),
    Object.freeze({ ...t })
  );
}
function za(e) {
  let t = Ra(e),
    {
      Fp: n,
      n: r,
      prehash: i,
      hash: a,
      randomBytes: o,
      nByteLength: s,
      h: c,
    } = t,
    l = Fa << (BigInt(s * 8) - Pa),
    u = n.create,
    d = ya(t.n, t.nBitLength),
    f =
      t.uvRatio ||
      ((e, t) => {
        try {
          return { isValid: !0, value: n.sqrt(e * n.inv(t)) };
        } catch {
          return { isValid: !1, value: Na };
        }
      }),
    p = t.adjustScalarBytes || ((e) => e),
    m =
      t.domain ||
      ((e, t, n) => {
        if ((Ni(`phflag`, n), t.length || n))
          throw Error(`Contexts/pre-hash are not supported`);
        return e;
      });
  function h(e, t) {
    Ji(`coordinate ` + e, t, Na, l);
  }
  function g(e) {
    if (!(e instanceof y)) throw Error(`ExtendedPoint expected`);
  }
  let _ = $i((e, t) => {
      let { ex: r, ey: i, ez: a } = e,
        o = e.is0();
      t ??= o ? Ia : n.inv(a);
      let s = u(r * t),
        c = u(i * t),
        l = u(a * t);
      if (o) return { x: Na, y: Pa };
      if (l !== Pa) throw Error(`invZ was invalid`);
      return { x: s, y: c };
    }),
    v = $i((e) => {
      let { a: n, d: r } = t;
      if (e.is0()) throw Error(`bad point: ZERO`);
      let { ex: i, ey: a, ez: o, et: s } = e,
        c = u(i * i),
        l = u(a * a),
        d = u(o * o),
        f = u(d * d),
        p = u(c * n);
      if (u(d * u(p + l)) !== u(f + u(r * u(c * l))))
        throw Error(`bad point: equation left != right (1)`);
      if (u(i * a) !== u(o * s))
        throw Error(`bad point: equation left != right (2)`);
      return !0;
    });
  class y {
    constructor(e, t, n, r) {
      (this.ex = e),
        (this.ey = t),
        (this.ez = n),
        (this.et = r),
        h(`x`, e),
        h(`y`, t),
        h(`z`, n),
        h(`t`, r),
        Object.freeze(this);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(e) {
      if (e instanceof y) throw Error(`extended point not allowed`);
      let { x: t, y: n } = e || {};
      return h(`x`, t), h(`y`, n), new y(t, n, Pa, u(t * n));
    }
    static normalizeZ(e) {
      let t = n.invertBatch(e.map((e) => e.ez));
      return e.map((e, n) => e.toAffine(t[n])).map(y.fromAffine);
    }
    static msm(e, t) {
      return ja(y, d, e, t);
    }
    _setWindowSize(e) {
      S.setWindowSize(this, e);
    }
    assertValidity() {
      v(this);
    }
    equals(e) {
      g(e);
      let { ex: t, ey: n, ez: r } = this,
        { ex: i, ey: a, ez: o } = e,
        s = u(t * o),
        c = u(i * r),
        l = u(n * o),
        d = u(a * r);
      return s === c && l === d;
    }
    is0() {
      return this.equals(y.ZERO);
    }
    negate() {
      return new y(u(-this.ex), this.ey, this.ez, u(-this.et));
    }
    double() {
      let { a: e } = t,
        { ex: n, ey: r, ez: i } = this,
        a = u(n * n),
        o = u(r * r),
        s = u(Fa * u(i * i)),
        c = u(e * a),
        l = n + r,
        d = u(u(l * l) - a - o),
        f = c + o,
        p = f - s,
        m = c - o,
        h = u(d * p),
        g = u(f * m),
        _ = u(d * m),
        v = u(p * f);
      return new y(h, g, v, _);
    }
    add(e) {
      g(e);
      let { a: n, d: r } = t,
        { ex: i, ey: a, ez: o, et: s } = this,
        { ex: c, ey: l, ez: d, et: f } = e;
      if (n === BigInt(-1)) {
        let e = u((a - i) * (l + c)),
          t = u((a + i) * (l - c)),
          n = u(t - e);
        if (n === Na) return this.double();
        let r = u(o * Fa * f),
          p = u(s * Fa * d),
          m = p + r,
          h = t + e,
          g = p - r,
          _ = u(m * n),
          v = u(h * g),
          b = u(m * g),
          x = u(n * h);
        return new y(_, v, x, b);
      }
      let p = u(i * c),
        m = u(a * l),
        h = u(s * r * f),
        _ = u(o * d),
        v = u((i + a) * (c + l) - p - m),
        b = _ - h,
        x = _ + h,
        S = u(m - n * p),
        C = u(v * b),
        w = u(x * S),
        T = u(v * S),
        E = u(b * x);
      return new y(C, w, E, T);
    }
    subtract(e) {
      return this.add(e.negate());
    }
    wNAF(e) {
      return S.wNAFCached(this, e, y.normalizeZ);
    }
    multiply(e) {
      let t = e;
      Ji(`scalar`, t, Pa, r);
      let { p: n, f: i } = this.wNAF(t);
      return y.normalizeZ([n, i])[0];
    }
    multiplyUnsafe(e, t = y.ZERO) {
      let n = e;
      return (
        Ji(`scalar`, n, Na, r),
        n === Na
          ? x
          : this.is0() || n === Pa
          ? this
          : S.wNAFCachedUnsafe(this, n, y.normalizeZ, t)
      );
    }
    isSmallOrder() {
      return this.multiplyUnsafe(c).is0();
    }
    isTorsionFree() {
      return S.unsafeLadder(this, r).is0();
    }
    toAffine(e) {
      return _(this, e);
    }
    clearCofactor() {
      let { h: e } = t;
      return e === Pa ? this : this.multiplyUnsafe(e);
    }
    static fromHex(e, r = !1) {
      let { d: i, a } = t,
        o = n.BYTES;
      (e = Wi(`pointHex`, e, o)), Ni(`zip215`, r);
      let s = e.slice(),
        c = e[o - 1];
      s[o - 1] = c & -129;
      let d = Vi(s);
      Ji(`pointHex.y`, d, Na, r ? l : n.ORDER);
      let p = u(d * d),
        m = u(p - Pa),
        h = u(i * p - a),
        { isValid: g, value: _ } = f(m, h);
      if (!g) throw Error(`Point.fromHex: invalid y coordinate`);
      let v = (_ & Pa) === Pa,
        b = !!(c & 128);
      if (!r && _ === Na && b) throw Error(`Point.fromHex: x=0 and x_0=1`);
      return b !== v && (_ = u(-_)), y.fromAffine({ x: _, y: d });
    }
    static fromPrivateKey(e) {
      return T(e).point;
    }
    toRawBytes() {
      let { x: e, y: t } = this.toAffine(),
        r = Ui(t, n.BYTES);
      return (r[r.length - 1] |= e & Pa ? 128 : 0), r;
    }
    toHex() {
      return Fi(this.toRawBytes());
    }
  }
  (y.BASE = new y(t.Gx, t.Gy, Pa, u(t.Gx * t.Gy))),
    (y.ZERO = new y(Na, Pa, Pa, Na));
  let { BASE: b, ZERO: x } = y,
    S = Aa(y, s * 8);
  function C(e) {
    return sa(e, r);
  }
  function w(e) {
    return C(Vi(e));
  }
  function T(e) {
    let t = n.BYTES;
    e = Wi(`private key`, e, t);
    let r = Wi(`hashed private key`, a(e), 2 * t),
      i = p(r.slice(0, t)),
      o = r.slice(t, 2 * t),
      s = w(i),
      c = b.multiply(s);
    return {
      head: i,
      prefix: o,
      scalar: s,
      point: c,
      pointBytes: c.toRawBytes(),
    };
  }
  function E(e) {
    return T(e).pointBytes;
  }
  function D(e = new Uint8Array(), ...t) {
    let n = Gi(...t);
    return w(a(m(n, Wi(`context`, e), !!i)));
  }
  function O(e, t, a = {}) {
    (e = Wi(`message`, e)), i && (e = i(e));
    let { prefix: o, scalar: s, pointBytes: c } = T(t),
      l = D(a.context, o, e),
      u = b.multiply(l).toRawBytes(),
      d = C(l + D(a.context, u, c, e) * s);
    return (
      Ji(`signature.s`, d, Na, r),
      Wi(`result`, Gi(u, Ui(d, n.BYTES)), n.BYTES * 2)
    );
  }
  let k = La;
  function A(e, t, r, a = k) {
    let { context: o, zip215: s } = a,
      c = n.BYTES;
    (e = Wi(`signature`, e, 2 * c)),
      (t = Wi(`message`, t)),
      (r = Wi(`publicKey`, r, c)),
      s !== void 0 && Ni(`zip215`, s),
      i && (t = i(t));
    let l = Vi(e.slice(c, 2 * c)),
      u,
      d,
      f;
    try {
      (u = y.fromHex(r, s)),
        (d = y.fromHex(e.slice(0, c), s)),
        (f = b.multiplyUnsafe(l));
    } catch {
      return !1;
    }
    if (!s && u.isSmallOrder()) return !1;
    let p = D(o, d.toRawBytes(), u.toRawBytes(), t);
    return d
      .add(u.multiplyUnsafe(p))
      .subtract(f)
      .clearCofactor()
      .equals(y.ZERO);
  }
  return (
    b._setWindowSize(8),
    {
      CURVE: t,
      getPublicKey: E,
      sign: O,
      verify: A,
      ExtendedPoint: y,
      utils: {
        getExtendedPublicKey: T,
        randomPrivateKey: () => o(n.BYTES),
        precompute(e = 8, t = y.BASE) {
          return t._setWindowSize(e), t.multiply(BigInt(3)), t;
        },
      },
    }
  );
}
var Ba = BigInt(
    `57896044618658097711785492504343953926634992332820282019728792003956564819949`
  ),
  Va = BigInt(
    `19681161376707505956807079304988542015446066515923890162744021073123829784752`
  ),
  Ha = BigInt(1),
  Ua = BigInt(2),
  Wa = BigInt(5),
  Ga = BigInt(8);
function Ka(e) {
  let t = BigInt(10),
    n = BigInt(20),
    r = BigInt(40),
    i = BigInt(80),
    a = Ba,
    o = (((e * e) % a) * e) % a,
    s = (la((la(o, Ua, a) * o) % a, Ha, a) * e) % a,
    c = (la(s, Wa, a) * s) % a,
    l = (la(c, t, a) * c) % a,
    u = (la(l, n, a) * l) % a,
    d = (la(u, r, a) * u) % a;
  return {
    pow_p_5_8:
      (la(
        (la((la((la(d, i, a) * d) % a, i, a) * d) % a, t, a) * c) % a,
        Ua,
        a
      ) *
        e) %
      a,
    b2: o,
  };
}
function qa(e) {
  return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
}
function Ja(e, t) {
  let n = Ba,
    r = sa(t * t * t, n),
    i = Ka(e * sa(r * r * t, n)).pow_p_5_8,
    a = sa(e * r * i, n),
    o = sa(t * a * a, n),
    s = a,
    c = sa(a * Va, n),
    l = o === e,
    u = o === sa(-e, n),
    d = o === sa(-e * Va, n);
  return (
    l && (a = s),
    (u || d) && (a = c),
    pa(a, n) && (a = sa(-a, n)),
    { isValid: l || u, value: a }
  );
}
var Ya = ya(Ba, void 0, !0),
  Xa = za({
    a: BigInt(-1),
    d: BigInt(
      `37095705934669439343138083508754565189542113879843219016388785533085940283555`
    ),
    Fp: Ya,
    n: BigInt(
      `7237005577332262213973186563042994240857116359379907606001950938285454250989`
    ),
    h: Ga,
    Gx: BigInt(
      `15112221349535400772501151409588531511454012693041857206046113283949847762202`
    ),
    Gy: BigInt(
      `46316835694926478169428394003475163141307993866256225615783033603165251855960`
    ),
    hash: Di,
    randomBytes: ti,
    adjustScalarBytes: qa,
    uvRatio: Ja,
  }),
  Za = `EdDSA`,
  Qa = `base64url`,
  $a = `utf8`,
  eo = `utf8`,
  to = `base58btc`;
function no(e) {
  return globalThis.Buffer == null
    ? e
    : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
function ro(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? no(globalThis.Buffer.allocUnsafe(e))
    : new Uint8Array(e);
}
function io(e, t) {
  t ||= e.reduce((e, t) => e + t.length, 0);
  let n = ro(t),
    r = 0;
  for (let t of e) n.set(t, r), (r += t.length);
  return no(n);
}
function ao(e, t) {
  if (e.length >= 255) throw TypeError(`Alphabet too long`);
  for (var n = new Uint8Array(256), r = 0; r < n.length; r++) n[r] = 255;
  for (var i = 0; i < e.length; i++) {
    var a = e.charAt(i),
      o = a.charCodeAt(0);
    if (n[o] !== 255) throw TypeError(a + ` is ambiguous`);
    n[o] = i;
  }
  var s = e.length,
    c = e.charAt(0),
    l = Math.log(s) / Math.log(256),
    u = Math.log(256) / Math.log(s);
  function d(t) {
    if (
      (t instanceof Uint8Array ||
        (ArrayBuffer.isView(t)
          ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
          : Array.isArray(t) && (t = Uint8Array.from(t))),
      !(t instanceof Uint8Array))
    )
      throw TypeError(`Expected Uint8Array`);
    if (t.length === 0) return ``;
    for (var n = 0, r = 0, i = 0, a = t.length; i !== a && t[i] === 0; )
      i++, n++;
    for (var o = ((a - i) * u + 1) >>> 0, l = new Uint8Array(o); i !== a; ) {
      for (
        var d = t[i], f = 0, p = o - 1;
        (d !== 0 || f < r) && p !== -1;
        p--, f++
      )
        (d += (256 * l[p]) >>> 0), (l[p] = d % s >>> 0), (d = (d / s) >>> 0);
      if (d !== 0) throw Error(`Non-zero carry`);
      (r = f), i++;
    }
    for (var m = o - r; m !== o && l[m] === 0; ) m++;
    for (var h = c.repeat(n); m < o; ++m) h += e.charAt(l[m]);
    return h;
  }
  function f(e) {
    if (typeof e != `string`) throw TypeError(`Expected String`);
    if (e.length === 0) return new Uint8Array();
    var t = 0;
    if (e[t] !== ` `) {
      for (var r = 0, i = 0; e[t] === c; ) r++, t++;
      for (
        var a = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(a);
        e[t];

      ) {
        var u = n[e.charCodeAt(t)];
        if (u === 255) return;
        for (var d = 0, f = a - 1; (u !== 0 || d < i) && f !== -1; f--, d++)
          (u += (s * o[f]) >>> 0),
            (o[f] = u % 256 >>> 0),
            (u = (u / 256) >>> 0);
        if (u !== 0) throw Error(`Non-zero carry`);
        (i = d), t++;
      }
      if (e[t] !== ` `) {
        for (var p = a - i; p !== a && o[p] === 0; ) p++;
        for (var m = new Uint8Array(r + (a - p)), h = r; p !== a; )
          m[h++] = o[p++];
        return m;
      }
    }
  }
  function p(e) {
    var n = f(e);
    if (n) return n;
    throw Error(`Non-${t} character`);
  }
  return { encode: d, decodeUnsafe: f, decode: p };
}
var oo = ao,
  so = (e) => {
    if (e instanceof Uint8Array && e.constructor.name === `Uint8Array`)
      return e;
    if (e instanceof ArrayBuffer) return new Uint8Array(e);
    if (ArrayBuffer.isView(e))
      return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
    throw Error(`Unknown type, must be binary type`);
  },
  co = (e) => new TextEncoder().encode(e),
  lo = (e) => new TextDecoder().decode(e),
  uo = class {
    constructor(e, t, n) {
      (this.name = e), (this.prefix = t), (this.baseEncode = n);
    }
    encode(e) {
      if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
      throw Error(`Unknown type, must be binary type`);
    }
  },
  fo = class {
    constructor(e, t, n) {
      if (((this.name = e), (this.prefix = t), t.codePointAt(0) === void 0))
        throw Error(`Invalid prefix character`);
      (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = n);
    }
    decode(e) {
      if (typeof e == `string`) {
        if (e.codePointAt(0) !== this.prefixCodePoint)
          throw Error(
            `Unable to decode multibase string ${JSON.stringify(e)}, ${
              this.name
            } decoder only supports inputs prefixed with ${this.prefix}`
          );
        return this.baseDecode(e.slice(this.prefix.length));
      }
      throw Error(`Can only multibase decode strings`);
    }
    or(e) {
      return mo(this, e);
    }
  },
  po = class {
    constructor(e) {
      this.decoders = e;
    }
    or(e) {
      return mo(this, e);
    }
    decode(e) {
      let t = e[0],
        n = this.decoders[t];
      if (n) return n.decode(e);
      throw RangeError(
        `Unable to decode multibase string ${JSON.stringify(
          e
        )}, only inputs prefixed with ${Object.keys(
          this.decoders
        )} are supported`
      );
    }
  },
  mo = (e, t) =>
    new po({
      ...(e.decoders || { [e.prefix]: e }),
      ...(t.decoders || { [t.prefix]: t }),
    }),
  ho = class {
    constructor(e, t, n, r) {
      (this.name = e),
        (this.prefix = t),
        (this.baseEncode = n),
        (this.baseDecode = r),
        (this.encoder = new uo(e, t, n)),
        (this.decoder = new fo(e, t, r));
    }
    encode(e) {
      return this.encoder.encode(e);
    }
    decode(e) {
      return this.decoder.decode(e);
    }
  },
  go = ({ name: e, prefix: t, encode: n, decode: r }) => new ho(e, t, n, r),
  _o = ({ prefix: e, name: t, alphabet: n }) => {
    let { encode: r, decode: i } = oo(n, t);
    return go({ prefix: e, name: t, encode: r, decode: (e) => so(i(e)) });
  },
  vo = (e, t, n, r) => {
    let i = {};
    for (let e = 0; e < t.length; ++e) i[t[e]] = e;
    let a = e.length;
    for (; e[a - 1] === `=`; ) --a;
    let o = new Uint8Array(((a * n) / 8) | 0),
      s = 0,
      c = 0,
      l = 0;
    for (let t = 0; t < a; ++t) {
      let a = i[e[t]];
      if (a === void 0) throw SyntaxError(`Non-${r} character`);
      (c = (c << n) | a),
        (s += n),
        s >= 8 && ((s -= 8), (o[l++] = 255 & (c >> s)));
    }
    if (s >= n || 255 & (c << (8 - s)))
      throw SyntaxError(`Unexpected end of data`);
    return o;
  },
  yo = (e, t, n) => {
    let r = t[t.length - 1] === `=`,
      i = (1 << n) - 1,
      a = ``,
      o = 0,
      s = 0;
    for (let r = 0; r < e.length; ++r)
      for (s = (s << 8) | e[r], o += 8; o > n; )
        (o -= n), (a += t[i & (s >> o)]);
    if ((o && (a += t[i & (s << (n - o))]), r))
      for (; (a.length * n) & 7; ) a += `=`;
    return a;
  },
  bo = ({ name: e, prefix: t, bitsPerChar: n, alphabet: r }) =>
    go({
      prefix: t,
      name: e,
      encode(e) {
        return yo(e, r, n);
      },
      decode(t) {
        return vo(t, r, n, e);
      },
    }),
  xo = go({
    prefix: `\0`,
    name: `identity`,
    encode: (e) => lo(e),
    decode: (e) => co(e),
  }),
  So = Object.freeze({ __proto__: null, identity: xo }),
  Co = bo({ prefix: `0`, name: `base2`, alphabet: `01`, bitsPerChar: 1 }),
  wo = Object.freeze({ __proto__: null, base2: Co }),
  To = bo({ prefix: `7`, name: `base8`, alphabet: `01234567`, bitsPerChar: 3 }),
  Eo = Object.freeze({ __proto__: null, base8: To }),
  Do = _o({ prefix: `9`, name: `base10`, alphabet: `0123456789` }),
  Oo = Object.freeze({ __proto__: null, base10: Do }),
  ko = bo({
    prefix: `f`,
    name: `base16`,
    alphabet: `0123456789abcdef`,
    bitsPerChar: 4,
  }),
  Ao = bo({
    prefix: `F`,
    name: `base16upper`,
    alphabet: `0123456789ABCDEF`,
    bitsPerChar: 4,
  }),
  jo = Object.freeze({ __proto__: null, base16: ko, base16upper: Ao }),
  Mo = bo({
    prefix: `b`,
    name: `base32`,
    alphabet: `abcdefghijklmnopqrstuvwxyz234567`,
    bitsPerChar: 5,
  }),
  No = bo({
    prefix: `B`,
    name: `base32upper`,
    alphabet: `ABCDEFGHIJKLMNOPQRSTUVWXYZ234567`,
    bitsPerChar: 5,
  }),
  Po = bo({
    prefix: `c`,
    name: `base32pad`,
    alphabet: `abcdefghijklmnopqrstuvwxyz234567=`,
    bitsPerChar: 5,
  }),
  Fo = bo({
    prefix: `C`,
    name: `base32padupper`,
    alphabet: `ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=`,
    bitsPerChar: 5,
  }),
  Io = bo({
    prefix: `v`,
    name: `base32hex`,
    alphabet: `0123456789abcdefghijklmnopqrstuv`,
    bitsPerChar: 5,
  }),
  Lo = bo({
    prefix: `V`,
    name: `base32hexupper`,
    alphabet: `0123456789ABCDEFGHIJKLMNOPQRSTUV`,
    bitsPerChar: 5,
  }),
  Ro = bo({
    prefix: `t`,
    name: `base32hexpad`,
    alphabet: `0123456789abcdefghijklmnopqrstuv=`,
    bitsPerChar: 5,
  }),
  zo = bo({
    prefix: `T`,
    name: `base32hexpadupper`,
    alphabet: `0123456789ABCDEFGHIJKLMNOPQRSTUV=`,
    bitsPerChar: 5,
  }),
  Bo = bo({
    prefix: `h`,
    name: `base32z`,
    alphabet: `ybndrfg8ejkmcpqxot1uwisza345h769`,
    bitsPerChar: 5,
  }),
  Vo = Object.freeze({
    __proto__: null,
    base32: Mo,
    base32upper: No,
    base32pad: Po,
    base32padupper: Fo,
    base32hex: Io,
    base32hexupper: Lo,
    base32hexpad: Ro,
    base32hexpadupper: zo,
    base32z: Bo,
  }),
  Ho = _o({
    prefix: `k`,
    name: `base36`,
    alphabet: `0123456789abcdefghijklmnopqrstuvwxyz`,
  }),
  Uo = _o({
    prefix: `K`,
    name: `base36upper`,
    alphabet: `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ`,
  }),
  Wo = Object.freeze({ __proto__: null, base36: Ho, base36upper: Uo }),
  Go = _o({
    name: `base58btc`,
    prefix: `z`,
    alphabet: `123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz`,
  }),
  Ko = _o({
    name: `base58flickr`,
    prefix: `Z`,
    alphabet: `123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ`,
  }),
  qo = Object.freeze({ __proto__: null, base58btc: Go, base58flickr: Ko }),
  Jo = bo({
    prefix: `m`,
    name: `base64`,
    alphabet: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,
    bitsPerChar: 6,
  }),
  Yo = bo({
    prefix: `M`,
    name: `base64pad`,
    alphabet: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`,
    bitsPerChar: 6,
  }),
  Xo = bo({
    prefix: `u`,
    name: `base64url`,
    alphabet: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`,
    bitsPerChar: 6,
  }),
  Zo = bo({
    prefix: `U`,
    name: `base64urlpad`,
    alphabet: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=`,
    bitsPerChar: 6,
  }),
  Qo = Object.freeze({
    __proto__: null,
    base64: Jo,
    base64pad: Yo,
    base64url: Xo,
    base64urlpad: Zo,
  }),
  $o = Array.from(
    `🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂`
  ),
  es = $o.reduce((e, t, n) => ((e[n] = t), e), []),
  ts = $o.reduce((e, t, n) => ((e[t.codePointAt(0)] = n), e), []);
function ns(e) {
  return e.reduce((e, t) => ((e += es[t]), e), ``);
}
function rs(e) {
  let t = [];
  for (let n of e) {
    let e = ts[n.codePointAt(0)];
    if (e === void 0) throw Error(`Non-base256emoji character: ${n}`);
    t.push(e);
  }
  return new Uint8Array(t);
}
var is = go({ prefix: `🚀`, name: `base256emoji`, encode: ns, decode: rs }),
  as = Object.freeze({ __proto__: null, base256emoji: is }),
  os = us,
  ss = 128,
  cs = -128,
  ls = 2 ** 31;
function us(e, t, n) {
  (t ||= []), (n ||= 0);
  for (var r = n; e >= ls; ) (t[n++] = (e & 255) | ss), (e /= 128);
  for (; e & cs; ) (t[n++] = (e & 255) | ss), (e >>>= 7);
  return (t[n] = e | 0), (us.bytes = n - r + 1), t;
}
var ds = ms,
  fs = 128,
  ps = 127;
function ms(e, t) {
  var n = 0,
    t = t || 0,
    r = 0,
    i = t,
    a,
    o = e.length;
  do {
    if (i >= o) throw ((ms.bytes = 0), RangeError(`Could not decode varint`));
    (a = e[i++]), (n += r < 28 ? (a & ps) << r : (a & ps) * 2 ** r), (r += 7);
  } while (a >= fs);
  return (ms.bytes = i - t), n;
}
var hs = 128,
  gs = 2 ** 14,
  _s = 2 ** 21,
  vs = 2 ** 28,
  ys = 2 ** 35,
  bs = 2 ** 42,
  xs = 2 ** 49,
  Ss = 2 ** 56,
  Cs = 2 ** 63,
  ws = {
    encode: os,
    decode: ds,
    encodingLength: function (e) {
      return e < hs
        ? 1
        : e < gs
        ? 2
        : e < _s
        ? 3
        : e < vs
        ? 4
        : e < ys
        ? 5
        : e < bs
        ? 6
        : e < xs
        ? 7
        : e < Ss
        ? 8
        : e < Cs
        ? 9
        : 10;
    },
  },
  Ts = (e, t, n = 0) => (ws.encode(e, t, n), t),
  Es = (e) => ws.encodingLength(e),
  Ds = (e, t) => {
    let n = t.byteLength,
      r = Es(e),
      i = r + Es(n),
      a = new Uint8Array(i + n);
    return Ts(e, a, 0), Ts(n, a, r), a.set(t, i), new Os(e, n, t, a);
  },
  Os = class {
    constructor(e, t, n, r) {
      (this.code = e), (this.size = t), (this.digest = n), (this.bytes = r);
    }
  },
  ks = ({ name: e, code: t, encode: n }) => new As(e, t, n),
  As = class {
    constructor(e, t, n) {
      (this.name = e), (this.code = t), (this.encode = n);
    }
    digest(e) {
      if (e instanceof Uint8Array) {
        let t = this.encode(e);
        return t instanceof Uint8Array
          ? Ds(this.code, t)
          : t.then((e) => Ds(this.code, e));
      }
      throw Error(`Unknown type, must be binary type`);
    }
  },
  js = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)),
  Ms = ks({ name: `sha2-256`, code: 18, encode: js(`SHA-256`) }),
  Ns = ks({ name: `sha2-512`, code: 19, encode: js(`SHA-512`) }),
  Ps = Object.freeze({ __proto__: null, sha256: Ms, sha512: Ns }),
  Fs = 0,
  Is = `identity`,
  Ls = so,
  Rs = Object.freeze({
    __proto__: null,
    identity: { code: Fs, name: Is, encode: Ls, digest: (e) => Ds(Fs, Ls(e)) },
  });
new TextEncoder(), new TextDecoder();
var zs = {
  ...So,
  ...wo,
  ...Eo,
  ...Oo,
  ...jo,
  ...Vo,
  ...Wo,
  ...qo,
  ...Qo,
  ...as,
};
({ ...Ps, ...Rs });
function Bs(e, t, n, r) {
  return {
    name: e,
    prefix: t,
    encoder: { name: e, prefix: t, encode: n },
    decoder: { decode: r },
  };
}
var Vs = Bs(
    `utf8`,
    `u`,
    (e) => `u` + new TextDecoder(`utf8`).decode(e),
    (e) => new TextEncoder().encode(e.substring(1))
  ),
  Hs = Bs(
    `ascii`,
    `a`,
    (e) => {
      let t = `a`;
      for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
      return t;
    },
    (e) => {
      e = e.substring(1);
      let t = ro(e.length);
      for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
      return t;
    }
  ),
  Us = {
    utf8: Vs,
    "utf-8": Vs,
    hex: zs.base16,
    latin1: Hs,
    ascii: Hs,
    binary: Hs,
    ...zs,
  };
function Ws(e, t = `utf8`) {
  let n = Us[t];
  if (!n) throw Error(`Unsupported encoding "${t}"`);
  return (t === `utf8` || t === `utf-8`) &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString(
        `utf8`
      )
    : n.encoder.encode(e).substring(1);
}
function Gs(e, t = `utf8`) {
  let n = Us[t];
  if (!n) throw Error(`Unsupported encoding "${t}"`);
  return (t === `utf8` || t === `utf-8`) &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? no(globalThis.Buffer.from(e, `utf-8`))
    : n.decoder.decode(`${n.prefix}${e}`);
}
function Ks(e) {
  return sr(Ws(Gs(e, Qa), $a));
}
function qs(e) {
  return Ws(Gs(cr(e), $a), Qa);
}
function Js(e) {
  return [`did`, `key`, `z` + Ws(io([Gs(`K36`, to), e]), to)].join(`:`);
}
function Ys(e) {
  return Ws(e, Qa);
}
function Xs(e) {
  return Gs(e, Qa);
}
function Zs(e) {
  return Gs([qs(e.header), qs(e.payload)].join(`.`), eo);
}
function Qs(e) {
  return [qs(e.header), qs(e.payload), Ys(e.signature)].join(`.`);
}
function $s(e) {
  let t = e.split(`.`);
  return {
    header: Ks(t[0]),
    payload: Ks(t[1]),
    signature: Xs(t[2]),
    data: Gs(t.slice(0, 2).join(`.`), eo),
  };
}
function ec(e = ti(32)) {
  let t = Xa.getPublicKey(e);
  return { secretKey: io([e, t]), publicKey: t };
}
async function tc(e, t, n, r, i = (0, z.fromMiliseconds)(Date.now())) {
  let a = { alg: Za, typ: `JWT` },
    o = { iss: Js(r.publicKey), sub: e, aud: t, iat: i, exp: i + n },
    s = Zs({ header: a, payload: o });
  return Qs({
    header: a,
    payload: o,
    signature: Xa.sign(s, r.secretKey.slice(0, 32)),
  });
}
var nc = function (e, t, n) {
    if (n || arguments.length === 2)
      for (var r = 0, i = t.length, a; r < i; r++)
        (a || !(r in t)) &&
          ((a ||= Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
    return e.concat(a || Array.prototype.slice.call(t));
  },
  rc = (function () {
    function e(e, t, n) {
      (this.name = e),
        (this.version = t),
        (this.os = n),
        (this.type = `browser`);
    }
    return e;
  })(),
  ic = (function () {
    function e(e) {
      (this.version = e),
        (this.type = `node`),
        (this.name = `node`),
        (this.os = process.platform);
    }
    return e;
  })(),
  ac = (function () {
    function e(e, t, n, r) {
      (this.name = e),
        (this.version = t),
        (this.os = n),
        (this.bot = r),
        (this.type = `bot-device`);
    }
    return e;
  })(),
  oc = (function () {
    function e() {
      (this.type = `bot`),
        (this.bot = !0),
        (this.name = `bot`),
        (this.version = null),
        (this.os = null);
    }
    return e;
  })(),
  sc = (function () {
    function e() {
      (this.type = `react-native`),
        (this.name = `react-native`),
        (this.version = null),
        (this.os = null);
    }
    return e;
  })(),
  cc =
    /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
  lc =
    /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
  uc = 3,
  dc = [
    [`aol`, /AOLShield\/([0-9\._]+)/],
    [`edge`, /Edge\/([0-9\._]+)/],
    [`edge-ios`, /EdgiOS\/([0-9\._]+)/],
    [`yandexbrowser`, /YaBrowser\/([0-9\._]+)/],
    [`kakaotalk`, /KAKAOTALK\s([0-9\.]+)/],
    [`samsung`, /SamsungBrowser\/([0-9\.]+)/],
    [`silk`, /\bSilk\/([0-9._-]+)\b/],
    [`miui`, /MiuiBrowser\/([0-9\.]+)$/],
    [`beaker`, /BeakerBrowser\/([0-9\.]+)/],
    [`edge-chromium`, /EdgA?\/([0-9\.]+)/],
    [
      `chromium-webview`,
      /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    [`chrome`, /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    [`phantomjs`, /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    [`crios`, /CriOS\/([0-9\.]+)(:?\s|$)/],
    [`firefox`, /Firefox\/([0-9\.]+)(?:\s|$)/],
    [`fxios`, /FxiOS\/([0-9\.]+)/],
    [`opera-mini`, /Opera Mini.*Version\/([0-9\.]+)/],
    [`opera`, /Opera\/([0-9\.]+)(?:\s|$)/],
    [`opera`, /OPR\/([0-9\.]+)(:?\s|$)/],
    [`pie`, /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
    [
      `pie`,
      /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
    ],
    [`netfront`, /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
    [`ie`, /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    [`ie`, /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    [`ie`, /MSIE\s(7\.0)/],
    [`bb10`, /BB10;\sTouch.*Version\/([0-9\.]+)/],
    [`android`, /Android\s([0-9\.]+)/],
    [`ios`, /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    [`safari`, /Version\/([0-9\._]+).*Safari/],
    [`facebook`, /FB[AS]V\/([0-9\.]+)/],
    [`instagram`, /Instagram\s([0-9\.]+)/],
    [`ios-webview`, /AppleWebKit\/([0-9\.]+).*Mobile/],
    [`ios-webview`, /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    [`curl`, /^curl\/([0-9\.]+)$/],
    [`searchbot`, cc],
  ],
  fc = [
    [`iOS`, /iP(hone|od|ad)/],
    [`Android OS`, /Android/],
    [`BlackBerry OS`, /BlackBerry|BB10/],
    [`Windows Mobile`, /IEMobile/],
    [`Amazon OS`, /Kindle/],
    [`Windows 3.11`, /Win16/],
    [`Windows 95`, /(Windows 95)|(Win95)|(Windows_95)/],
    [`Windows 98`, /(Windows 98)|(Win98)/],
    [`Windows 2000`, /(Windows NT 5.0)|(Windows 2000)/],
    [`Windows XP`, /(Windows NT 5.1)|(Windows XP)/],
    [`Windows Server 2003`, /(Windows NT 5.2)/],
    [`Windows Vista`, /(Windows NT 6.0)/],
    [`Windows 7`, /(Windows NT 6.1)/],
    [`Windows 8`, /(Windows NT 6.2)/],
    [`Windows 8.1`, /(Windows NT 6.3)/],
    [`Windows 10`, /(Windows NT 10.0)/],
    [`Windows ME`, /Windows ME/],
    [`Windows CE`, /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
    [`Open BSD`, /OpenBSD/],
    [`Sun OS`, /SunOS/],
    [`Chrome OS`, /CrOS/],
    [`Linux`, /(Linux)|(X11)/],
    [`Mac OS`, /(Mac_PowerPC)|(Macintosh)/],
    [`QNX`, /QNX/],
    [`BeOS`, /BeOS/],
    [`OS/2`, /OS\/2/],
  ];
function pc(e) {
  return e
    ? hc(e)
    : typeof document > `u` &&
      typeof navigator < `u` &&
      navigator.product === `ReactNative`
    ? new sc()
    : typeof navigator < `u`
    ? hc(navigator.userAgent)
    : _c();
}
function mc(e) {
  return (
    e !== `` &&
    dc.reduce(function (t, n) {
      var r = n[0],
        i = n[1];
      if (t) return t;
      var a = i.exec(e);
      return !!a && [r, a];
    }, !1)
  );
}
function hc(e) {
  var t = mc(e);
  if (!t) return null;
  var n = t[0],
    r = t[1];
  if (n === `searchbot`) return new oc();
  var i = r[1] && r[1].split(`.`).join(`_`).split(`_`).slice(0, 3);
  i
    ? i.length < uc && (i = nc(nc([], i, !0), vc(uc - i.length), !0))
    : (i = []);
  var a = i.join(`.`),
    o = gc(e),
    s = lc.exec(e);
  return s && s[1] ? new ac(n, a, o, s[1]) : new rc(n, a, o);
}
function gc(e) {
  for (var t = 0, n = fc.length; t < n; t++) {
    var r = fc[t],
      i = r[0];
    if (r[1].exec(e)) return i;
  }
  return null;
}
function _c() {
  return typeof process < `u` && process.version
    ? new ic(process.version.slice(1))
    : null;
}
function vc(e) {
  for (var t = [], n = 0; n < e; n++) t.push(`0`);
  return t;
}
var yc = a((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.getLocalStorage =
        e.getLocalStorageOrThrow =
        e.getCrypto =
        e.getCryptoOrThrow =
        e.getLocation =
        e.getLocationOrThrow =
        e.getNavigator =
        e.getNavigatorOrThrow =
        e.getDocument =
        e.getDocumentOrThrow =
        e.getFromWindowOrThrow =
        e.getFromWindow =
          void 0);
    function t(e) {
      let t;
      return typeof window < `u` && window[e] !== void 0 && (t = window[e]), t;
    }
    e.getFromWindow = t;
    function n(e) {
      let n = t(e);
      if (!n) throw Error(`${e} is not defined in Window`);
      return n;
    }
    e.getFromWindowOrThrow = n;
    function r() {
      return n(`document`);
    }
    e.getDocumentOrThrow = r;
    function i() {
      return t(`document`);
    }
    e.getDocument = i;
    function a() {
      return n(`navigator`);
    }
    e.getNavigatorOrThrow = a;
    function o() {
      return t(`navigator`);
    }
    e.getNavigator = o;
    function s() {
      return n(`location`);
    }
    e.getLocationOrThrow = s;
    function c() {
      return t(`location`);
    }
    e.getLocation = c;
    function l() {
      return n(`crypto`);
    }
    e.getCryptoOrThrow = l;
    function u() {
      return t(`crypto`);
    }
    e.getCrypto = u;
    function d() {
      return n(`localStorage`);
    }
    e.getLocalStorageOrThrow = d;
    function f() {
      return t(`localStorage`);
    }
    e.getLocalStorage = f;
  }),
  bc = a((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.getWindowMetadata = void 0);
    var t = yc();
    function n() {
      let e, n;
      try {
        (e = t.getDocumentOrThrow()), (n = t.getLocationOrThrow());
      } catch {
        return null;
      }
      function r() {
        let t = e.getElementsByTagName(`link`),
          r = [];
        for (let e = 0; e < t.length; e++) {
          let i = t[e],
            a = i.getAttribute(`rel`);
          if (a && a.toLowerCase().indexOf(`icon`) > -1) {
            let e = i.getAttribute(`href`);
            if (e) {
              if (
                e.toLowerCase().indexOf(`https:`) === -1 &&
                e.toLowerCase().indexOf(`http:`) === -1 &&
                e.indexOf(`//`) !== 0
              ) {
                let t = n.protocol + `//` + n.host;
                if (e.indexOf(`/`) === 0) t += e;
                else {
                  let r = n.pathname.split(`/`);
                  r.pop();
                  let i = r.join(`/`);
                  t += i + `/` + e;
                }
                r.push(t);
              } else if (e.indexOf(`//`) === 0) {
                let t = n.protocol + e;
                r.push(t);
              } else r.push(e);
            }
          }
        }
        return r;
      }
      function i(...t) {
        let n = e.getElementsByTagName(`meta`);
        for (let e = 0; e < n.length; e++) {
          let r = n[e],
            i = [`itemprop`, `property`, `name`]
              .map((e) => r.getAttribute(e))
              .filter((e) => (e ? t.includes(e) : !1));
          if (i.length && i) {
            let e = r.getAttribute(`content`);
            if (e) return e;
          }
        }
        return ``;
      }
      function a() {
        let t = i(`name`, `og:site_name`, `og:title`, `twitter:title`);
        return (t ||= e.title), t;
      }
      function o() {
        return i(
          `description`,
          `og:description`,
          `twitter:description`,
          `keywords`
        );
      }
      let s = a();
      return { description: o(), url: n.origin, icons: r(), name: s };
    }
    e.getWindowMetadata = n;
  }),
  xc = `0.1.1`;
function Sc() {
  return xc;
}
var Cc = class e extends Error {
  constructor(t, n = {}) {
    let r = (() => {
        if (n.cause instanceof e) {
          if (n.cause.details) return n.cause.details;
          if (n.cause.shortMessage) return n.cause.shortMessage;
        }
        return n.cause &&
          `details` in n.cause &&
          typeof n.cause.details == `string`
          ? n.cause.details
          : n.cause?.message
          ? n.cause.message
          : n.details;
      })(),
      i = (n.cause instanceof e && n.cause.docsPath) || n.docsPath,
      a = `https://oxlib.sh${i ?? ``}`,
      o = [
        t || `An error occurred.`,
        ...(n.metaMessages ? [``, ...n.metaMessages] : []),
        ...(r || i
          ? [``, r ? `Details: ${r}` : void 0, i ? `See: ${a}` : void 0]
          : []),
      ].filter((e) => typeof e == `string`).join(`
`);
    super(o, n.cause ? { cause: n.cause } : void 0),
      Object.defineProperty(this, "details", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "docs", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "docsPath", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "shortMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "cause", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: `BaseError`,
      }),
      Object.defineProperty(this, "version", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: `ox@${Sc()}`,
      }),
      (this.cause = n.cause),
      (this.details = r),
      (this.docs = a),
      (this.docsPath = i),
      (this.shortMessage = t);
  }
  walk(e) {
    return wc(this, e);
  }
};
function wc(e, t) {
  return t?.(e)
    ? e
    : e && typeof e == `object` && `cause` in e && e.cause
    ? wc(e.cause, t)
    : t
    ? null
    : e;
}
var Tc = BigInt(0),
  Ec = BigInt(1);
function Dc(e) {
  return (
    e instanceof Uint8Array ||
    (ArrayBuffer.isView(e) && e.constructor.name === `Uint8Array`)
  );
}
function Oc(e) {
  if (!Dc(e)) throw Error(`Uint8Array expected`);
}
function kc(e, t) {
  if (typeof t != `boolean`) throw Error(e + ` boolean expected, got ` + t);
}
function Ac(e) {
  let t = e.toString(16);
  return t.length & 1 ? `0` + t : t;
}
function jc(e) {
  if (typeof e != `string`) throw Error(`hex string expected, got ` + typeof e);
  return e === `` ? Tc : BigInt(`0x` + e);
}
var Mc =
    typeof Uint8Array.from([]).toHex == `function` &&
    typeof Uint8Array.fromHex == `function`,
  Nc = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, `0`));
function Pc(e) {
  if ((Oc(e), Mc)) return e.toHex();
  let t = ``;
  for (let n = 0; n < e.length; n++) t += Nc[e[n]];
  return t;
}
var Fc = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function Ic(e) {
  if (e >= Fc._0 && e <= Fc._9) return e - Fc._0;
  if (e >= Fc.A && e <= Fc.F) return e - (Fc.A - 10);
  if (e >= Fc.a && e <= Fc.f) return e - (Fc.a - 10);
}
function Lc(e) {
  if (typeof e != `string`) throw Error(`hex string expected, got ` + typeof e);
  if (Mc) return Uint8Array.fromHex(e);
  let t = e.length,
    n = t / 2;
  if (t % 2)
    throw Error(`hex string expected, got unpadded hex of length ` + t);
  let r = new Uint8Array(n);
  for (let t = 0, i = 0; t < n; t++, i += 2) {
    let n = Ic(e.charCodeAt(i)),
      a = Ic(e.charCodeAt(i + 1));
    if (n === void 0 || a === void 0) {
      let t = e[i] + e[i + 1];
      throw Error(
        `hex string expected, got non-hex character "` + t + `" at index ` + i
      );
    }
    r[t] = n * 16 + a;
  }
  return r;
}
function Rc(e) {
  return jc(Pc(e));
}
function zc(e) {
  return Oc(e), jc(Pc(Uint8Array.from(e).reverse()));
}
function Bc(e, t) {
  return Lc(e.toString(16).padStart(t * 2, `0`));
}
function Vc(e, t) {
  return Bc(e, t).reverse();
}
function Hc(e, t, n) {
  let r;
  if (typeof t == `string`)
    try {
      r = Lc(t);
    } catch (t) {
      throw Error(e + ` must be hex string or Uint8Array, cause: ` + t);
    }
  else if (Dc(t)) r = Uint8Array.from(t);
  else throw Error(e + ` must be hex string or Uint8Array`);
  let i = r.length;
  if (typeof n == `number` && i !== n)
    throw Error(e + ` of length ` + n + ` expected, got ` + i);
  return r;
}
function Uc(...e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    Oc(r), (t += r.length);
  }
  let n = new Uint8Array(t);
  for (let t = 0, r = 0; t < e.length; t++) {
    let i = e[t];
    n.set(i, r), (r += i.length);
  }
  return n;
}
var Wc = (e) => typeof e == `bigint` && Tc <= e;
function Gc(e, t, n) {
  return Wc(e) && Wc(t) && Wc(n) && t <= e && e < n;
}
function Kc(e, t, n, r) {
  if (!Gc(t, n, r))
    throw Error(
      `expected valid ` + e + `: ` + n + ` <= n < ` + r + `, got ` + t
    );
}
function qc(e) {
  let t = 0;
  for (; e > Tc; e >>= Ec, t += 1);
  return t;
}
var Jc = (e) => (Ec << BigInt(e)) - Ec,
  Yc = (e) => new Uint8Array(e),
  Xc = (e) => Uint8Array.from(e);
function Zc(e, t, n) {
  if (typeof e != `number` || e < 2) throw Error(`hashLen must be a number`);
  if (typeof t != `number` || t < 2) throw Error(`qByteLen must be a number`);
  if (typeof n != `function`) throw Error(`hmacFn must be a function`);
  let r = Yc(e),
    i = Yc(e),
    a = 0,
    o = () => {
      r.fill(1), i.fill(0), (a = 0);
    },
    s = (...e) => n(i, r, ...e),
    c = (e = Yc(0)) => {
      (i = s(Xc([0]), e)),
        (r = s()),
        e.length !== 0 && ((i = s(Xc([1]), e)), (r = s()));
    },
    l = () => {
      if (a++ >= 1e3) throw Error(`drbg: tried 1000 values`);
      let e = 0,
        n = [];
      for (; e < t; ) {
        r = s();
        let t = r.slice();
        n.push(t), (e += r.length);
      }
      return Uc(...n);
    };
  return (e, t) => {
    o(), c(e);
    let n;
    for (; !(n = t(l())); ) c();
    return o(), n;
  };
}
var Qc = {
  bigint: (e) => typeof e == `bigint`,
  function: (e) => typeof e == `function`,
  boolean: (e) => typeof e == `boolean`,
  string: (e) => typeof e == `string`,
  stringOrUint8Array: (e) => typeof e == `string` || Dc(e),
  isSafeInteger: (e) => Number.isSafeInteger(e),
  array: (e) => Array.isArray(e),
  field: (e, t) => t.Fp.isValid(e),
  hash: (e) => typeof e == `function` && Number.isSafeInteger(e.outputLen),
};
function $c(e, t, n = {}) {
  let r = (t, n, r) => {
    let i = Qc[n];
    if (typeof i != `function`) throw Error(`invalid validator function`);
    let a = e[t];
    if (!(r && a === void 0) && !i(a, e))
      throw Error(
        `param ` + String(t) + ` is invalid. Expected ` + n + `, got ` + a
      );
  };
  for (let [e, n] of Object.entries(t)) r(e, n, !1);
  for (let [e, t] of Object.entries(n)) r(e, t, !0);
  return e;
}
function el(e) {
  let t = new WeakMap();
  return (n, ...r) => {
    let i = t.get(n);
    if (i !== void 0) return i;
    let a = e(n, ...r);
    return t.set(n, a), a;
  };
}
function tl(e, t) {
  if (Fl(e) > t) throw new Rl({ givenSize: Fl(e), maxSize: t });
}
var nl = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
function rl(e) {
  if (e >= nl.zero && e <= nl.nine) return e - nl.zero;
  if (e >= nl.A && e <= nl.F) return e - (nl.A - 10);
  if (e >= nl.a && e <= nl.f) return e - (nl.a - 10);
}
function il(e, t = {}) {
  let { dir: n, size: r = 32 } = t;
  if (r === 0) return e;
  if (e.length > r)
    throw new zl({ size: e.length, targetSize: r, type: `Bytes` });
  let i = new Uint8Array(r);
  for (let t = 0; t < r; t++) {
    let a = n === `right`;
    i[a ? t : r - t - 1] = e[a ? t : e.length - t - 1];
  }
  return i;
}
function al(e, t) {
  if (bl(e) > t) throw new Tl({ givenSize: bl(e), maxSize: t });
}
function ol(e, t) {
  if (typeof t == `number` && t > 0 && t > bl(e) - 1)
    throw new El({ offset: t, position: `start`, size: bl(e) });
}
function sl(e, t, n) {
  if (typeof t == `number` && typeof n == `number` && bl(e) !== n - t)
    throw new El({ offset: n, position: `end`, size: bl(e) });
}
function cl(e, t = {}) {
  let { dir: n, size: r = 32 } = t;
  if (r === 0) return e;
  let i = e.replace(`0x`, ``);
  if (i.length > r * 2)
    throw new Dl({ size: Math.ceil(i.length / 2), targetSize: r, type: `Hex` });
  return `0x${i[n === `right` ? `padEnd` : `padStart`](r * 2, `0`)}`;
}
var ll = `#__bigint`;
function ul(e, t, n) {
  return JSON.stringify(
    e,
    (e, n) =>
      typeof t == `function`
        ? t(e, n)
        : typeof n == `bigint`
        ? n.toString() + ll
        : n,
    n
  );
}
var dl = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, `0`));
function fl(e, t = {}) {
  let { strict: n = !1 } = t;
  if (!e || typeof e != `string`) throw new Cl(e);
  if ((n && !/^0x[0-9a-fA-F]*$/.test(e)) || !e.startsWith(`0x`))
    throw new wl(e);
}
function pl(...e) {
  return `0x${e.reduce((e, t) => e + t.replace(`0x`, ``), ``)}`;
}
function ml(e) {
  return e instanceof Uint8Array
    ? hl(e)
    : Array.isArray(e)
    ? hl(new Uint8Array(e))
    : e;
}
function hl(e, t = {}) {
  let n = ``;
  for (let t = 0; t < e.length; t++) n += dl[e[t]];
  let r = `0x${n}`;
  return typeof t.size == `number` ? (al(r, t.size), vl(r, t.size)) : r;
}
function gl(e, t = {}) {
  let { signed: n, size: r } = t,
    i = BigInt(e),
    a;
  r
    ? (a = n ? (1n << (BigInt(r) * 8n - 1n)) - 1n : 2n ** (BigInt(r) * 8n) - 1n)
    : typeof e == `number` && (a = BigInt(2 ** 53 - 1));
  let o = typeof a == `bigint` && n ? -a - 1n : 0;
  if ((a && i > a) || i < o) {
    let t = typeof e == `bigint` ? `n` : ``;
    throw new Sl({
      max: a ? `${a}${t}` : void 0,
      min: `${o}${t}`,
      signed: n,
      size: r,
      value: `${e}${t}`,
    });
  }
  let s = `0x${(n && i < 0 ? (1n << BigInt(r * 8)) + BigInt(i) : i).toString(
    16
  )}`;
  return r ? _l(s, r) : s;
}
function _l(e, t) {
  return cl(e, { dir: `left`, size: t });
}
function vl(e, t) {
  return cl(e, { dir: `right`, size: t });
}
function yl(e, t, n, r = {}) {
  let { strict: i } = r;
  ol(e, t);
  let a = `0x${e.replace(`0x`, ``).slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
  return i && sl(a, t, n), a;
}
function bl(e) {
  return Math.ceil((e.length - 2) / 2);
}
function xl(e, t = {}) {
  let { strict: n = !1 } = t;
  try {
    return fl(e, { strict: n }), !0;
  } catch {
    return !1;
  }
}
var Sl = class extends Cc {
    constructor({ max: e, min: t, signed: n, size: r, value: i }) {
      super(
        `Number \`${i}\` is not in safe${r ? ` ${r * 8}-bit` : ``}${
          n ? ` signed` : ` unsigned`
        } integer range ${e ? `(\`${t}\` to \`${e}\`)` : `(above \`${t}\`)`}`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Hex.IntegerOutOfRangeError`,
        });
    }
  },
  Cl = class extends Cc {
    constructor(e) {
      super(
        `Value \`${
          typeof e == `object` ? ul(e) : e
        }\` of type \`${typeof e}\` is an invalid hex type.`,
        { metaMessages: ['Hex types must be represented as `"0x${string}"`.'] }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Hex.InvalidHexTypeError`,
        });
    }
  },
  wl = class extends Cc {
    constructor(e) {
      super(`Value \`${e}\` is an invalid hex value.`, {
        metaMessages: [
          'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Hex.InvalidHexValueError`,
        });
    }
  },
  Tl = class extends Cc {
    constructor({ givenSize: e, maxSize: t }) {
      super(`Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Hex.SizeOverflowError`,
        });
    }
  },
  El = class extends Cc {
    constructor({ offset: e, position: t, size: n }) {
      super(
        `Slice ${
          t === `start` ? `starting` : `ending`
        } at offset \`${e}\` is out-of-bounds (size: \`${n}\`).`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Hex.SliceOffsetOutOfBoundsError`,
        });
    }
  },
  Dl = class extends Cc {
    constructor({ size: e, targetSize: t, type: n }) {
      super(
        `${n.charAt(0).toUpperCase()}${n
          .slice(1)
          .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Hex.SizeExceedsPaddingSizeError`,
        });
    }
  },
  Ol = new TextEncoder();
function kl(e) {
  if (
    !(e instanceof Uint8Array) &&
    (!e ||
      typeof e != `object` ||
      !(`BYTES_PER_ELEMENT` in e) ||
      e.BYTES_PER_ELEMENT !== 1 ||
      e.constructor.name !== `Uint8Array`)
  )
    throw new Ll(e);
}
function Al(e) {
  return e instanceof Uint8Array ? e : typeof e == `string` ? Ml(e) : jl(e);
}
function jl(e) {
  return e instanceof Uint8Array ? e : new Uint8Array(e);
}
function Ml(e, t = {}) {
  let { size: n } = t,
    r = e;
  n && (al(e, n), (r = vl(e, n)));
  let i = r.slice(2);
  i.length % 2 && (i = `0${i}`);
  let a = i.length / 2,
    o = new Uint8Array(a);
  for (let e = 0, t = 0; e < a; e++) {
    let n = rl(i.charCodeAt(t++)),
      r = rl(i.charCodeAt(t++));
    if (n === void 0 || r === void 0)
      throw new Cc(
        `Invalid byte sequence ("${i[t - 2]}${i[t - 1]}" in "${i}").`
      );
    o[e] = n * 16 + r;
  }
  return o;
}
function Nl(e, t = {}) {
  let { size: n } = t,
    r = Ol.encode(e);
  return typeof n == `number` ? (tl(r, n), Pl(r, n)) : r;
}
function Pl(e, t) {
  return il(e, { dir: `right`, size: t });
}
function Fl(e) {
  return e.length;
}
function Il(e) {
  try {
    return kl(e), !0;
  } catch {
    return !1;
  }
}
var Ll = class extends Cc {
    constructor(e) {
      super(
        `Value \`${
          typeof e == `object` ? ul(e) : e
        }\` of type \`${typeof e}\` is an invalid Bytes value.`,
        { metaMessages: ["Bytes values must be of type `Bytes`."] }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Bytes.InvalidBytesTypeError`,
        });
    }
  },
  Rl = class extends Cc {
    constructor({ givenSize: e, maxSize: t }) {
      super(`Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Bytes.SizeOverflowError`,
        });
    }
  },
  zl = class extends Cc {
    constructor({ size: e, targetSize: t, type: n }) {
      super(
        `${n.charAt(0).toUpperCase()}${n
          .slice(1)
          .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Bytes.SizeExceedsPaddingSizeError`,
        });
    }
  };
function Bl(e, t = {}) {
  let { as: n = typeof e == `string` ? `Hex` : `Bytes` } = t,
    r = s(Al(e));
  return n === `Bytes` ? r : hl(r);
}
var Vl = {
  checksum: new (class extends Map {
    constructor(e) {
      super(),
        Object.defineProperty(this, "maxSize", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.maxSize = e);
    }
    get(e) {
      let t = super.get(e);
      return (
        super.has(e) && t !== void 0 && (this.delete(e), super.set(e, t)), t
      );
    }
    set(e, t) {
      if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
        let e = this.keys().next().value;
        e && this.delete(e);
      }
      return this;
    }
  })(8192),
}.checksum;
function Hl(e, t = {}) {
  let { compressed: n } = t,
    { prefix: r, x: i, y: a } = e;
  if (n === !1 || (typeof i == `bigint` && typeof a == `bigint`)) {
    if (r !== 4) throw new Jl({ prefix: r, cause: new Xl() });
    return;
  }
  if (n === !0 || (typeof i == `bigint` && a === void 0)) {
    if (r !== 3 && r !== 2) throw new Jl({ prefix: r, cause: new Yl() });
    return;
  }
  throw new ql({ publicKey: e });
}
function Ul(e) {
  let t = (() => {
    if (xl(e)) return Gl(e);
    if (Il(e)) return Wl(e);
    let { prefix: t, x: n, y: r } = e;
    return typeof n == `bigint` && typeof r == `bigint`
      ? { prefix: t ?? 4, x: n, y: r }
      : { prefix: t, x: n };
  })();
  return Hl(t), t;
}
function Wl(e) {
  return Gl(hl(e));
}
function Gl(e) {
  if (e.length !== 132 && e.length !== 130 && e.length !== 68)
    throw new Zl({ publicKey: e });
  return e.length === 130
    ? { prefix: 4, x: BigInt(yl(e, 0, 32)), y: BigInt(yl(e, 32, 64)) }
    : e.length === 132
    ? {
        prefix: Number(yl(e, 0, 1)),
        x: BigInt(yl(e, 1, 33)),
        y: BigInt(yl(e, 33, 65)),
      }
    : { prefix: Number(yl(e, 0, 1)), x: BigInt(yl(e, 1, 33)) };
}
function Kl(e, t = {}) {
  Hl(e);
  let { prefix: n, x: r, y: i } = e,
    { includePrefix: a = !0 } = t;
  return pl(
    a ? gl(n, { size: 1 }) : `0x`,
    gl(r, { size: 32 }),
    typeof i == `bigint` ? gl(i, { size: 32 }) : `0x`
  );
}
var ql = class extends Cc {
    constructor({ publicKey: e }) {
      super(`Value \`${ul(e)}\` is not a valid public key.`, {
        metaMessages: [
          `Public key must contain:`,
          "- an `x` and `prefix` value (compressed)",
          "- an `x`, `y`, and `prefix` value (uncompressed)",
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `PublicKey.InvalidError`,
        });
    }
  },
  Jl = class extends Cc {
    constructor({ prefix: e, cause: t }) {
      super(`Prefix "${e}" is invalid.`, { cause: t }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `PublicKey.InvalidPrefixError`,
        });
    }
  },
  Yl = class extends Cc {
    constructor() {
      super(`Prefix must be 2 or 3 for compressed public keys.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `PublicKey.InvalidCompressedPrefixError`,
        });
    }
  },
  Xl = class extends Cc {
    constructor() {
      super(`Prefix must be 4 for uncompressed public keys.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `PublicKey.InvalidUncompressedPrefixError`,
        });
    }
  },
  Zl = class extends Cc {
    constructor({ publicKey: e }) {
      super(`Value \`${e}\` is an invalid public key size.`, {
        metaMessages: [
          `Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).`,
          `Received ${bl(ml(e))} bytes.`,
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `PublicKey.InvalidSerializedSizeError`,
        });
    }
  },
  Ql = /^0x[a-fA-F0-9]{40}$/;
function $l(e, t = {}) {
  let { strict: n = !0 } = t;
  if (!Ql.test(e)) throw new ru({ address: e, cause: new iu() });
  if (n) {
    if (e.toLowerCase() === e) return;
    if (eu(e) !== e) throw new ru({ address: e, cause: new au() });
  }
}
function eu(e) {
  if (Vl.has(e)) return Vl.get(e);
  $l(e, { strict: !1 });
  let t = e.substring(2).toLowerCase(),
    n = Bl(Nl(t), { as: `Bytes` }),
    r = t.split(``);
  for (let e = 0; e < 40; e += 2)
    n[e >> 1] >> 4 >= 8 && r[e] && (r[e] = r[e].toUpperCase()),
      (n[e >> 1] & 15) >= 8 && r[e + 1] && (r[e + 1] = r[e + 1].toUpperCase());
  let i = `0x${r.join(``)}`;
  return Vl.set(e, i), i;
}
function tu(e, t = {}) {
  let { checksum: n = !1 } = t;
  return $l(e), n ? eu(e) : e;
}
function nu(e, t = {}) {
  return tu(`0x${Bl(`0x${Kl(e).slice(4)}`).substring(26)}`, t);
}
var ru = class extends Cc {
    constructor({ address: e, cause: t }) {
      super(`Address "${e}" is invalid.`, { cause: t }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Address.InvalidAddressError`,
        });
    }
  },
  iu = class extends Cc {
    constructor() {
      super(`Address is not a 20 byte (40 hexadecimal character) value.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Address.InvalidInputError`,
        });
    }
  },
  au = class extends Cc {
    constructor() {
      super(`Address does not match its checksum counterpart.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Address.InvalidChecksumError`,
        });
    }
  },
  ou = BigInt(0),
  su = BigInt(1),
  cu = BigInt(2),
  lu = BigInt(3),
  uu = BigInt(4),
  du = BigInt(5),
  fu = BigInt(8);
function pu(e, t) {
  let n = e % t;
  return n >= ou ? n : t + n;
}
function mu(e, t, n) {
  let r = e;
  for (; t-- > ou; ) (r *= r), (r %= n);
  return r;
}
function hu(e, t) {
  if (e === ou) throw Error(`invert: expected non-zero number`);
  if (t <= ou) throw Error(`invert: expected positive modulus, got ` + t);
  let n = pu(e, t),
    r = t,
    i = ou,
    a = su,
    o = su,
    s = ou;
  for (; n !== ou; ) {
    let e = r / n,
      t = r % n,
      c = i - o * e,
      l = a - s * e;
    (r = n), (n = t), (i = o), (a = s), (o = c), (s = l);
  }
  if (r !== su) throw Error(`invert: does not exist`);
  return pu(i, t);
}
function gu(e, t) {
  let n = (e.ORDER + su) / uu,
    r = e.pow(t, n);
  if (!e.eql(e.sqr(r), t)) throw Error(`Cannot find square root`);
  return r;
}
function _u(e, t) {
  let n = (e.ORDER - du) / fu,
    r = e.mul(t, cu),
    i = e.pow(r, n),
    a = e.mul(t, i),
    o = e.mul(e.mul(a, cu), i),
    s = e.mul(a, e.sub(o, e.ONE));
  if (!e.eql(e.sqr(s), t)) throw Error(`Cannot find square root`);
  return s;
}
function vu(e) {
  if (e < BigInt(3)) throw Error(`sqrt is not defined for small field`);
  let t = e - su,
    n = 0;
  for (; t % cu === ou; ) (t /= cu), n++;
  let r = cu,
    i = Eu(e);
  for (; wu(i, r) === 1; )
    if (r++ > 1e3) throw Error(`Cannot find square root: probably non-prime P`);
  if (n === 1) return gu;
  let a = i.pow(r, t),
    o = (t + su) / cu;
  return function (e, r) {
    if (e.is0(r)) return r;
    if (wu(e, r) !== 1) throw Error(`Cannot find square root`);
    let i = n,
      s = e.mul(e.ONE, a),
      c = e.pow(r, t),
      l = e.pow(r, o);
    for (; !e.eql(c, e.ONE); ) {
      if (e.is0(c)) return e.ZERO;
      let t = 1,
        n = e.sqr(c);
      for (; !e.eql(n, e.ONE); )
        if ((t++, (n = e.sqr(n)), t === i))
          throw Error(`Cannot find square root`);
      let r = su << BigInt(i - t - 1),
        a = e.pow(s, r);
      (i = t), (s = e.sqr(a)), (c = e.mul(c, s)), (l = e.mul(l, a));
    }
    return l;
  };
}
function yu(e) {
  return e % uu === lu ? gu : e % fu === du ? _u : vu(e);
}
var bu = [
  `create`,
  `isValid`,
  `is0`,
  `neg`,
  `inv`,
  `sqrt`,
  `sqr`,
  `eql`,
  `add`,
  `sub`,
  `mul`,
  `pow`,
  `div`,
  `addN`,
  `subN`,
  `mulN`,
  `sqrN`,
];
function xu(e) {
  return $c(
    e,
    bu.reduce((e, t) => ((e[t] = `function`), e), {
      ORDER: `bigint`,
      MASK: `bigint`,
      BYTES: `isSafeInteger`,
      BITS: `isSafeInteger`,
    })
  );
}
function Su(e, t, n) {
  if (n < ou) throw Error(`invalid exponent, negatives unsupported`);
  if (n === ou) return e.ONE;
  if (n === su) return t;
  let r = e.ONE,
    i = t;
  for (; n > ou; ) n & su && (r = e.mul(r, i)), (i = e.sqr(i)), (n >>= su);
  return r;
}
function Cu(e, t, n = !1) {
  let r = Array(t.length).fill(n ? e.ZERO : void 0),
    i = t.reduce(
      (t, n, i) => (e.is0(n) ? t : ((r[i] = t), e.mul(t, n))),
      e.ONE
    ),
    a = e.inv(i);
  return (
    t.reduceRight(
      (t, n, i) => (e.is0(n) ? t : ((r[i] = e.mul(t, r[i])), e.mul(t, n))),
      a
    ),
    r
  );
}
function wu(e, t) {
  let n = (e.ORDER - su) / cu,
    r = e.pow(t, n),
    i = e.eql(r, e.ONE),
    a = e.eql(r, e.ZERO),
    o = e.eql(r, e.neg(e.ONE));
  if (!i && !a && !o) throw Error(`invalid Legendre symbol result`);
  return i ? 1 : a ? 0 : -1;
}
function Tu(e, t) {
  t !== void 0 && l(t);
  let n = t === void 0 ? e.toString(2).length : t;
  return { nBitLength: n, nByteLength: Math.ceil(n / 8) };
}
function Eu(e, t, n = !1, r = {}) {
  if (e <= ou) throw Error(`invalid field: expected ORDER > 0, got ` + e);
  let { nBitLength: i, nByteLength: a } = Tu(e, t);
  if (a > 2048) throw Error(`invalid field: expected ORDER of <= 2048 bytes`);
  let o,
    s = Object.freeze({
      ORDER: e,
      isLE: n,
      BITS: i,
      BYTES: a,
      MASK: Jc(i),
      ZERO: ou,
      ONE: su,
      create: (t) => pu(t, e),
      isValid: (t) => {
        if (typeof t != `bigint`)
          throw Error(
            `invalid field element: expected bigint, got ` + typeof t
          );
        return ou <= t && t < e;
      },
      is0: (e) => e === ou,
      isOdd: (e) => (e & su) === su,
      neg: (t) => pu(-t, e),
      eql: (e, t) => e === t,
      sqr: (t) => pu(t * t, e),
      add: (t, n) => pu(t + n, e),
      sub: (t, n) => pu(t - n, e),
      mul: (t, n) => pu(t * n, e),
      pow: (e, t) => Su(s, e, t),
      div: (t, n) => pu(t * hu(n, e), e),
      sqrN: (e) => e * e,
      addN: (e, t) => e + t,
      subN: (e, t) => e - t,
      mulN: (e, t) => e * t,
      inv: (t) => hu(t, e),
      sqrt: r.sqrt || ((t) => ((o ||= yu(e)), o(s, t))),
      toBytes: (e) => (n ? Vc(e, a) : Bc(e, a)),
      fromBytes: (e) => {
        if (e.length !== a)
          throw Error(
            `Field.fromBytes: expected ` + a + ` bytes, got ` + e.length
          );
        return n ? zc(e) : Rc(e);
      },
      invertBatch: (e) => Cu(s, e),
      cmov: (e, t, n) => (n ? t : e),
    });
  return Object.freeze(s);
}
function Du(e) {
  if (typeof e != `bigint`) throw Error(`field order must be bigint`);
  let t = e.toString(2).length;
  return Math.ceil(t / 8);
}
function Ou(e) {
  let t = Du(e);
  return t + Math.ceil(t / 2);
}
function ku(e, t, n = !1) {
  let r = e.length,
    i = Du(t),
    a = Ou(t);
  if (r < 16 || r < a || r > 1024)
    throw Error(`expected ` + a + `-1024 bytes of input, got ` + r);
  let o = pu(n ? zc(e) : Rc(e), t - su) + su;
  return n ? Vc(o, i) : Bc(o, i);
}
var Au = BigInt(0),
  ju = BigInt(1);
function Mu(e, t) {
  let n = t.negate();
  return e ? n : t;
}
function Nu(e, t) {
  if (!Number.isSafeInteger(e) || e <= 0 || e > t)
    throw Error(`invalid window size, expected [1..` + t + `], got W=` + e);
}
function Pu(e, t) {
  Nu(e, t);
  let n = Math.ceil(t / e) + 1,
    r = 2 ** (e - 1),
    i = 2 ** e;
  return {
    windows: n,
    windowSize: r,
    mask: Jc(e),
    maxNumber: i,
    shiftBy: BigInt(e),
  };
}
function Fu(e, t, n) {
  let { windowSize: r, mask: i, maxNumber: a, shiftBy: o } = n,
    s = Number(e & i),
    c = e >> o;
  s > r && ((s -= a), (c += ju));
  let l = t * r,
    u = l + Math.abs(s) - 1,
    d = s === 0,
    f = s < 0,
    p = t % 2 != 0;
  return { nextN: c, offset: u, isZero: d, isNeg: f, isNegF: p, offsetF: l };
}
function Iu(e, t) {
  if (!Array.isArray(e)) throw Error(`array expected`);
  e.forEach((e, n) => {
    if (!(e instanceof t)) throw Error(`invalid point at index ` + n);
  });
}
function Lu(e, t) {
  if (!Array.isArray(e)) throw Error(`array of scalars expected`);
  e.forEach((e, n) => {
    if (!t.isValid(e)) throw Error(`invalid scalar at index ` + n);
  });
}
var Ru = new WeakMap(),
  zu = new WeakMap();
function Bu(e) {
  return zu.get(e) || 1;
}
function Vu(e, t) {
  return {
    constTimeNegate: Mu,
    hasPrecomputes(e) {
      return Bu(e) !== 1;
    },
    unsafeLadder(t, n, r = e.ZERO) {
      let i = t;
      for (; n > Au; ) n & ju && (r = r.add(i)), (i = i.double()), (n >>= ju);
      return r;
    },
    precomputeWindow(e, n) {
      let { windows: r, windowSize: i } = Pu(n, t),
        a = [],
        o = e,
        s = o;
      for (let e = 0; e < r; e++) {
        (s = o), a.push(s);
        for (let e = 1; e < i; e++) (s = s.add(o)), a.push(s);
        o = s.double();
      }
      return a;
    },
    wNAF(n, r, i) {
      let a = e.ZERO,
        o = e.BASE,
        s = Pu(n, t);
      for (let e = 0; e < s.windows; e++) {
        let {
          nextN: t,
          offset: n,
          isZero: c,
          isNeg: l,
          isNegF: u,
          offsetF: d,
        } = Fu(i, e, s);
        (i = t), c ? (o = o.add(Mu(u, r[d]))) : (a = a.add(Mu(l, r[n])));
      }
      return { p: a, f: o };
    },
    wNAFUnsafe(n, r, i, a = e.ZERO) {
      let o = Pu(n, t);
      for (let e = 0; e < o.windows && i !== Au; e++) {
        let { nextN: t, offset: n, isZero: s, isNeg: c } = Fu(i, e, o);
        if (((i = t), !s)) {
          let e = r[n];
          a = a.add(c ? e.negate() : e);
        }
      }
      return a;
    },
    getPrecomputes(e, t, n) {
      let r = Ru.get(t);
      return (
        r || ((r = this.precomputeWindow(t, e)), e !== 1 && Ru.set(t, n(r))), r
      );
    },
    wNAFCached(e, t, n) {
      let r = Bu(e);
      return this.wNAF(r, this.getPrecomputes(r, e, n), t);
    },
    wNAFCachedUnsafe(e, t, n, r) {
      let i = Bu(e);
      return i === 1
        ? this.unsafeLadder(e, t, r)
        : this.wNAFUnsafe(i, this.getPrecomputes(i, e, n), t, r);
    },
    setWindowSize(e, n) {
      Nu(n, t), zu.set(e, n), Ru.delete(e);
    },
  };
}
function Hu(e, t, n, r) {
  Iu(n, e), Lu(r, t);
  let i = n.length,
    a = r.length;
  if (i !== a)
    throw Error(`arrays of points and scalars must have equal length`);
  let o = e.ZERO,
    s = qc(BigInt(i)),
    c = 1;
  s > 12 ? (c = s - 3) : s > 4 ? (c = s - 2) : s > 0 && (c = 2);
  let l = Jc(c),
    u = Array(Number(l) + 1).fill(o),
    d = Math.floor((t.BITS - 1) / c) * c,
    f = o;
  for (let e = d; e >= 0; e -= c) {
    u.fill(o);
    for (let t = 0; t < a; t++) {
      let i = r[t],
        a = Number((i >> BigInt(e)) & l);
      u[a] = u[a].add(n[t]);
    }
    let t = o;
    for (let e = u.length - 1, n = o; e > 0; e--)
      (n = n.add(u[e])), (t = t.add(n));
    if (((f = f.add(t)), e !== 0)) for (let e = 0; e < c; e++) f = f.double();
  }
  return f;
}
function Uu(e) {
  return (
    xu(e.Fp),
    $c(
      e,
      { n: `bigint`, h: `bigint`, Gx: `field`, Gy: `field` },
      { nBitLength: `isSafeInteger`, nByteLength: `isSafeInteger` }
    ),
    Object.freeze({ ...Tu(e.n, e.nBitLength), ...e, p: e.Fp.ORDER })
  );
}
function Wu(e) {
  e.lowS !== void 0 && kc(`lowS`, e.lowS),
    e.prehash !== void 0 && kc(`prehash`, e.prehash);
}
function Gu(e) {
  let t = Uu(e);
  $c(
    t,
    { a: `field`, b: `field` },
    {
      allowInfinityPoint: `boolean`,
      allowedPrivateKeyLengths: `array`,
      clearCofactor: `function`,
      fromBytes: `function`,
      isTorsionFree: `function`,
      toBytes: `function`,
      wrapPrivateKey: `boolean`,
    }
  );
  let { endo: n, Fp: r, a: i } = t;
  if (n) {
    if (!r.eql(i, r.ZERO)) throw Error(`invalid endo: CURVE.a must be 0`);
    if (
      typeof n != `object` ||
      typeof n.beta != `bigint` ||
      typeof n.splitScalar != `function`
    )
      throw Error(
        `invalid endo: expected "beta": bigint and "splitScalar": function`
      );
  }
  return Object.freeze({ ...t });
}
var Ku = {
  Err: class extends Error {
    constructor(e = ``) {
      super(e);
    }
  },
  _tlv: {
    encode: (e, t) => {
      let { Err: n } = Ku;
      if (e < 0 || e > 256) throw new n(`tlv.encode: wrong tag`);
      if (t.length & 1) throw new n(`tlv.encode: unpadded data`);
      let r = t.length / 2,
        i = Ac(r);
      if ((i.length / 2) & 128)
        throw new n(`tlv.encode: long form length too big`);
      let a = r > 127 ? Ac((i.length / 2) | 128) : ``;
      return Ac(e) + a + i + t;
    },
    decode(e, t) {
      let { Err: n } = Ku,
        r = 0;
      if (e < 0 || e > 256) throw new n(`tlv.encode: wrong tag`);
      if (t.length < 2 || t[r++] !== e) throw new n(`tlv.decode: wrong tlv`);
      let i = t[r++],
        a = !!(i & 128),
        o = 0;
      if (!a) o = i;
      else {
        let e = i & 127;
        if (!e)
          throw new n(`tlv.decode(long): indefinite length not supported`);
        if (e > 4) throw new n(`tlv.decode(long): byte length is too big`);
        let a = t.subarray(r, r + e);
        if (a.length !== e)
          throw new n(`tlv.decode: length bytes not complete`);
        if (a[0] === 0) throw new n(`tlv.decode(long): zero leftmost byte`);
        for (let e of a) o = (o << 8) | e;
        if (((r += e), o < 128))
          throw new n(`tlv.decode(long): not minimal encoding`);
      }
      let s = t.subarray(r, r + o);
      if (s.length !== o) throw new n(`tlv.decode: wrong value length`);
      return { v: s, l: t.subarray(r + o) };
    },
  },
  _int: {
    encode(e) {
      let { Err: t } = Ku;
      if (e < Ju) throw new t(`integer: negative integers are not allowed`);
      let n = Ac(e);
      if ((Number.parseInt(n[0], 16) & 8 && (n = `00` + n), n.length & 1))
        throw new t(`unexpected DER parsing assertion: unpadded hex`);
      return n;
    },
    decode(e) {
      let { Err: t } = Ku;
      if (e[0] & 128) throw new t(`invalid signature integer: negative`);
      if (e[0] === 0 && !(e[1] & 128))
        throw new t(`invalid signature integer: unnecessary leading zero`);
      return Rc(e);
    },
  },
  toSig(e) {
    let { Err: t, _int: n, _tlv: r } = Ku,
      i = Hc(`signature`, e),
      { v: a, l: o } = r.decode(48, i);
    if (o.length) throw new t(`invalid signature: left bytes after parsing`);
    let { v: s, l: c } = r.decode(2, a),
      { v: l, l: u } = r.decode(2, c);
    if (u.length) throw new t(`invalid signature: left bytes after parsing`);
    return { r: n.decode(s), s: n.decode(l) };
  },
  hexFromSig(e) {
    let { _tlv: t, _int: n } = Ku,
      r = t.encode(2, n.encode(e.r)) + t.encode(2, n.encode(e.s));
    return t.encode(48, r);
  },
};
function qu(e, t) {
  return Pc(Bc(e, t));
}
var Ju = BigInt(0),
  Yu = BigInt(1),
  Xu = BigInt(3),
  Zu = BigInt(4);
function Qu(e) {
  let t = Gu(e),
    { Fp: n } = t,
    r = Eu(t.n, t.nBitLength),
    i =
      t.toBytes ||
      ((e, t, r) => {
        let i = t.toAffine();
        return Uc(Uint8Array.from([4]), n.toBytes(i.x), n.toBytes(i.y));
      }),
    a =
      t.fromBytes ||
      ((e) => {
        let t = e.subarray(1);
        return {
          x: n.fromBytes(t.subarray(0, n.BYTES)),
          y: n.fromBytes(t.subarray(n.BYTES, 2 * n.BYTES)),
        };
      });
  function o(e) {
    let { a: r, b: i } = t,
      a = n.sqr(e),
      o = n.mul(a, e);
    return n.add(n.add(o, n.mul(e, r)), i);
  }
  function s(e, t) {
    let r = n.sqr(t),
      i = o(e);
    return n.eql(r, i);
  }
  if (!s(t.Gx, t.Gy)) throw Error(`bad curve params: generator point`);
  let c = n.mul(n.pow(t.a, Xu), Zu),
    l = n.mul(n.sqr(t.b), BigInt(27));
  if (n.is0(n.add(c, l))) throw Error(`bad curve params: a or b`);
  function u(e) {
    return Gc(e, Yu, t.n);
  }
  function d(e) {
    let {
      allowedPrivateKeyLengths: n,
      nByteLength: r,
      wrapPrivateKey: i,
      n: a,
    } = t;
    if (n && typeof e != `bigint`) {
      if ((Dc(e) && (e = Pc(e)), typeof e != `string` || !n.includes(e.length)))
        throw Error(`invalid private key`);
      e = e.padStart(r * 2, `0`);
    }
    let o;
    try {
      o = typeof e == `bigint` ? e : Rc(Hc(`private key`, e, r));
    } catch {
      throw Error(
        `invalid private key, expected hex or ` + r + ` bytes, got ` + typeof e
      );
    }
    return i && (o = pu(o, a)), Kc(`private key`, o, Yu, a), o;
  }
  function f(e) {
    if (!(e instanceof h)) throw Error(`ProjectivePoint expected`);
  }
  let p = el((e, t) => {
      let { px: r, py: i, pz: a } = e;
      if (n.eql(a, n.ONE)) return { x: r, y: i };
      let o = e.is0();
      t ??= o ? n.ONE : n.inv(a);
      let s = n.mul(r, t),
        c = n.mul(i, t),
        l = n.mul(a, t);
      if (o) return { x: n.ZERO, y: n.ZERO };
      if (!n.eql(l, n.ONE)) throw Error(`invZ was invalid`);
      return { x: s, y: c };
    }),
    m = el((e) => {
      if (e.is0()) {
        if (t.allowInfinityPoint && !n.is0(e.py)) return;
        throw Error(`bad point: ZERO`);
      }
      let { x: r, y: i } = e.toAffine();
      if (!n.isValid(r) || !n.isValid(i))
        throw Error(`bad point: x or y not FE`);
      if (!s(r, i)) throw Error(`bad point: equation left != right`);
      if (!e.isTorsionFree())
        throw Error(`bad point: not in prime-order subgroup`);
      return !0;
    });
  class h {
    constructor(e, t, r) {
      if (e == null || !n.isValid(e)) throw Error(`x required`);
      if (t == null || !n.isValid(t) || n.is0(t)) throw Error(`y required`);
      if (r == null || !n.isValid(r)) throw Error(`z required`);
      (this.px = e), (this.py = t), (this.pz = r), Object.freeze(this);
    }
    static fromAffine(e) {
      let { x: t, y: r } = e || {};
      if (!e || !n.isValid(t) || !n.isValid(r))
        throw Error(`invalid affine point`);
      if (e instanceof h) throw Error(`projective point not allowed`);
      let i = (e) => n.eql(e, n.ZERO);
      return i(t) && i(r) ? h.ZERO : new h(t, r, n.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static normalizeZ(e) {
      let t = Cu(
        n,
        e.map((e) => e.pz)
      );
      return e.map((e, n) => e.toAffine(t[n])).map(h.fromAffine);
    }
    static fromHex(e) {
      let t = h.fromAffine(a(Hc(`pointHex`, e)));
      return t.assertValidity(), t;
    }
    static fromPrivateKey(e) {
      return h.BASE.multiply(d(e));
    }
    static msm(e, t) {
      return Hu(h, r, e, t);
    }
    _setWindowSize(e) {
      v.setWindowSize(this, e);
    }
    assertValidity() {
      m(this);
    }
    hasEvenY() {
      let { y: e } = this.toAffine();
      if (n.isOdd) return !n.isOdd(e);
      throw Error(`Field doesn't support isOdd`);
    }
    equals(e) {
      f(e);
      let { px: t, py: r, pz: i } = this,
        { px: a, py: o, pz: s } = e,
        c = n.eql(n.mul(t, s), n.mul(a, i)),
        l = n.eql(n.mul(r, s), n.mul(o, i));
      return c && l;
    }
    negate() {
      return new h(this.px, n.neg(this.py), this.pz);
    }
    double() {
      let { a: e, b: r } = t,
        i = n.mul(r, Xu),
        { px: a, py: o, pz: s } = this,
        c = n.ZERO,
        l = n.ZERO,
        u = n.ZERO,
        d = n.mul(a, a),
        f = n.mul(o, o),
        p = n.mul(s, s),
        m = n.mul(a, o);
      return (
        (m = n.add(m, m)),
        (u = n.mul(a, s)),
        (u = n.add(u, u)),
        (c = n.mul(e, u)),
        (l = n.mul(i, p)),
        (l = n.add(c, l)),
        (c = n.sub(f, l)),
        (l = n.add(f, l)),
        (l = n.mul(c, l)),
        (c = n.mul(m, c)),
        (u = n.mul(i, u)),
        (p = n.mul(e, p)),
        (m = n.sub(d, p)),
        (m = n.mul(e, m)),
        (m = n.add(m, u)),
        (u = n.add(d, d)),
        (d = n.add(u, d)),
        (d = n.add(d, p)),
        (d = n.mul(d, m)),
        (l = n.add(l, d)),
        (p = n.mul(o, s)),
        (p = n.add(p, p)),
        (d = n.mul(p, m)),
        (c = n.sub(c, d)),
        (u = n.mul(p, f)),
        (u = n.add(u, u)),
        (u = n.add(u, u)),
        new h(c, l, u)
      );
    }
    add(e) {
      f(e);
      let { px: r, py: i, pz: a } = this,
        { px: o, py: s, pz: c } = e,
        l = n.ZERO,
        u = n.ZERO,
        d = n.ZERO,
        p = t.a,
        m = n.mul(t.b, Xu),
        g = n.mul(r, o),
        _ = n.mul(i, s),
        v = n.mul(a, c),
        y = n.add(r, i),
        b = n.add(o, s);
      (y = n.mul(y, b)),
        (b = n.add(g, _)),
        (y = n.sub(y, b)),
        (b = n.add(r, a));
      let x = n.add(o, c);
      return (
        (b = n.mul(b, x)),
        (x = n.add(g, v)),
        (b = n.sub(b, x)),
        (x = n.add(i, a)),
        (l = n.add(s, c)),
        (x = n.mul(x, l)),
        (l = n.add(_, v)),
        (x = n.sub(x, l)),
        (d = n.mul(p, b)),
        (l = n.mul(m, v)),
        (d = n.add(l, d)),
        (l = n.sub(_, d)),
        (d = n.add(_, d)),
        (u = n.mul(l, d)),
        (_ = n.add(g, g)),
        (_ = n.add(_, g)),
        (v = n.mul(p, v)),
        (b = n.mul(m, b)),
        (_ = n.add(_, v)),
        (v = n.sub(g, v)),
        (v = n.mul(p, v)),
        (b = n.add(b, v)),
        (g = n.mul(_, b)),
        (u = n.add(u, g)),
        (g = n.mul(x, b)),
        (l = n.mul(y, l)),
        (l = n.sub(l, g)),
        (g = n.mul(y, _)),
        (d = n.mul(x, d)),
        (d = n.add(d, g)),
        new h(l, u, d)
      );
    }
    subtract(e) {
      return this.add(e.negate());
    }
    is0() {
      return this.equals(h.ZERO);
    }
    wNAF(e) {
      return v.wNAFCached(this, e, h.normalizeZ);
    }
    multiplyUnsafe(e) {
      let { endo: r, n: i } = t;
      Kc(`scalar`, e, Ju, i);
      let a = h.ZERO;
      if (e === Ju) return a;
      if (this.is0() || e === Yu) return this;
      if (!r || v.hasPrecomputes(this))
        return v.wNAFCachedUnsafe(this, e, h.normalizeZ);
      let { k1neg: o, k1: s, k2neg: c, k2: l } = r.splitScalar(e),
        u = a,
        d = a,
        f = this;
      for (; s > Ju || l > Ju; )
        s & Yu && (u = u.add(f)),
          l & Yu && (d = d.add(f)),
          (f = f.double()),
          (s >>= Yu),
          (l >>= Yu);
      return (
        o && (u = u.negate()),
        c && (d = d.negate()),
        (d = new h(n.mul(d.px, r.beta), d.py, d.pz)),
        u.add(d)
      );
    }
    multiply(e) {
      let { endo: r, n: i } = t;
      Kc(`scalar`, e, Yu, i);
      let a, o;
      if (r) {
        let { k1neg: t, k1: i, k2neg: s, k2: c } = r.splitScalar(e),
          { p: l, f: u } = this.wNAF(i),
          { p: d, f } = this.wNAF(c);
        (l = v.constTimeNegate(t, l)),
          (d = v.constTimeNegate(s, d)),
          (d = new h(n.mul(d.px, r.beta), d.py, d.pz)),
          (a = l.add(d)),
          (o = u.add(f));
      } else {
        let { p: t, f: n } = this.wNAF(e);
        (a = t), (o = n);
      }
      return h.normalizeZ([a, o])[0];
    }
    multiplyAndAddUnsafe(e, t, n) {
      let r = h.BASE,
        i = (e, t) =>
          t === Ju || t === Yu || !e.equals(r)
            ? e.multiplyUnsafe(t)
            : e.multiply(t),
        a = i(this, t).add(i(e, n));
      return a.is0() ? void 0 : a;
    }
    toAffine(e) {
      return p(this, e);
    }
    isTorsionFree() {
      let { h: e, isTorsionFree: n } = t;
      if (e === Yu) return !0;
      if (n) return n(h, this);
      throw Error(
        `isTorsionFree() has not been declared for the elliptic curve`
      );
    }
    clearCofactor() {
      let { h: e, clearCofactor: n } = t;
      return e === Yu ? this : n ? n(h, this) : this.multiplyUnsafe(t.h);
    }
    toRawBytes(e = !0) {
      return kc(`isCompressed`, e), this.assertValidity(), i(h, this, e);
    }
    toHex(e = !0) {
      return kc(`isCompressed`, e), Pc(this.toRawBytes(e));
    }
  }
  (h.BASE = new h(t.Gx, t.Gy, n.ONE)), (h.ZERO = new h(n.ZERO, n.ONE, n.ZERO));
  let { endo: g, nBitLength: _ } = t,
    v = Vu(h, g ? Math.ceil(_ / 2) : _);
  return {
    CURVE: t,
    ProjectivePoint: h,
    normPrivateKeyToScalar: d,
    weierstrassEquation: o,
    isWithinCurveOrder: u,
  };
}
function $u(e) {
  let t = Uu(e);
  return (
    $c(
      t,
      { hash: `hash`, hmac: `function`, randomBytes: `function` },
      { bits2int: `function`, bits2int_modN: `function`, lowS: `boolean` }
    ),
    Object.freeze({ lowS: !0, ...t })
  );
}
function ed(e) {
  let t = $u(e),
    { Fp: n, n: r, nByteLength: i, nBitLength: a } = t,
    o = n.BYTES + 1,
    s = 2 * n.BYTES + 1;
  function c(e) {
    return pu(e, r);
  }
  function l(e) {
    return hu(e, r);
  }
  let {
    ProjectivePoint: u,
    normPrivateKeyToScalar: d,
    weierstrassEquation: f,
    isWithinCurveOrder: p,
  } = Qu({
    ...t,
    toBytes(e, t, r) {
      let i = t.toAffine(),
        a = n.toBytes(i.x),
        o = Uc;
      return (
        kc(`isCompressed`, r),
        r
          ? o(Uint8Array.from([t.hasEvenY() ? 2 : 3]), a)
          : o(Uint8Array.from([4]), a, n.toBytes(i.y))
      );
    },
    fromBytes(e) {
      let t = e.length,
        r = e[0],
        i = e.subarray(1);
      if (t === o && (r === 2 || r === 3)) {
        let e = Rc(i);
        if (!Gc(e, Yu, n.ORDER)) throw Error(`Point is not on curve`);
        let t = f(e),
          a;
        try {
          a = n.sqrt(t);
        } catch (e) {
          let t = e instanceof Error ? `: ` + e.message : ``;
          throw Error(`Point is not on curve` + t);
        }
        let o = (a & Yu) === Yu;
        return ((r & 1) == 1) !== o && (a = n.neg(a)), { x: e, y: a };
      }
      if (t === s && r === 4)
        return {
          x: n.fromBytes(i.subarray(0, n.BYTES)),
          y: n.fromBytes(i.subarray(n.BYTES, 2 * n.BYTES)),
        };
      {
        let e = o,
          n = s;
        throw Error(
          `invalid Point, expected length of ` +
            e +
            `, or uncompressed ` +
            n +
            `, got ` +
            t
        );
      }
    },
  });
  function m(e) {
    return e > r >> Yu;
  }
  function h(e) {
    return m(e) ? c(-e) : e;
  }
  let g = (e, t, n) => Rc(e.slice(t, n));
  class _ {
    constructor(e, t, n) {
      Kc(`r`, e, Yu, r),
        Kc(`s`, t, Yu, r),
        (this.r = e),
        (this.s = t),
        n != null && (this.recovery = n),
        Object.freeze(this);
    }
    static fromCompact(e) {
      let t = i;
      return (
        (e = Hc(`compactSignature`, e, t * 2)),
        new _(g(e, 0, t), g(e, t, 2 * t))
      );
    }
    static fromDER(e) {
      let { r: t, s: n } = Ku.toSig(Hc(`DER`, e));
      return new _(t, n);
    }
    assertValidity() {}
    addRecoveryBit(e) {
      return new _(this.r, this.s, e);
    }
    recoverPublicKey(e) {
      let { r, s: i, recovery: a } = this,
        o = C(Hc(`msgHash`, e));
      if (a == null || ![0, 1, 2, 3].includes(a))
        throw Error(`recovery id invalid`);
      let s = a === 2 || a === 3 ? r + t.n : r;
      if (s >= n.ORDER) throw Error(`recovery id 2 or 3 invalid`);
      let d = a & 1 ? `03` : `02`,
        f = u.fromHex(d + qu(s, n.BYTES)),
        p = l(s),
        m = c(-o * p),
        h = c(i * p),
        g = u.BASE.multiplyAndAddUnsafe(f, m, h);
      if (!g) throw Error(`point at infinify`);
      return g.assertValidity(), g;
    }
    hasHighS() {
      return m(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new _(this.r, c(-this.s), this.recovery) : this;
    }
    toDERRawBytes() {
      return Lc(this.toDERHex());
    }
    toDERHex() {
      return Ku.hexFromSig(this);
    }
    toCompactRawBytes() {
      return Lc(this.toCompactHex());
    }
    toCompactHex() {
      let e = i;
      return qu(this.r, e) + qu(this.s, e);
    }
  }
  let v = {
    isValidPrivateKey(e) {
      try {
        return d(e), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: d,
    randomPrivateKey: () => {
      let e = Ou(t.n);
      return ku(t.randomBytes(e), t.n);
    },
    precompute(e = 8, t = u.BASE) {
      return t._setWindowSize(e), t.multiply(BigInt(3)), t;
    },
  };
  function y(e, t = !0) {
    return u.fromPrivateKey(e).toRawBytes(t);
  }
  function b(e) {
    if (typeof e == `bigint`) return !1;
    if (e instanceof u) return !0;
    let r = Hc(`key`, e).length,
      a = n.BYTES,
      o = a + 1,
      s = 2 * a + 1;
    if (!(t.allowedPrivateKeyLengths || i === o)) return r === o || r === s;
  }
  function x(e, t, n = !0) {
    if (b(e) === !0) throw Error(`first arg must be private key`);
    if (b(t) === !1) throw Error(`second arg must be public key`);
    return u.fromHex(t).multiply(d(e)).toRawBytes(n);
  }
  let S =
      t.bits2int ||
      function (e) {
        if (e.length > 8192) throw Error(`input is too large`);
        let t = Rc(e),
          n = e.length * 8 - a;
        return n > 0 ? t >> BigInt(n) : t;
      },
    C =
      t.bits2int_modN ||
      function (e) {
        return c(S(e));
      },
    w = Jc(a);
  function T(e) {
    return Kc(`num < 2^` + a, e, Ju, w), Bc(e, i);
  }
  function E(e, r, i = D) {
    if ([`recovered`, `canonical`].some((e) => e in i))
      throw Error(`sign() legacy options not supported`);
    let { hash: a, randomBytes: o } = t,
      { lowS: s, prehash: f, extraEntropy: g } = i;
    (s ??= !0),
      (e = Hc(`msgHash`, e)),
      Wu(i),
      f && (e = Hc(`prehashed msgHash`, a(e)));
    let v = C(e),
      y = d(r),
      b = [T(y), T(v)];
    if (g != null && g !== !1) {
      let e = g === !0 ? o(n.BYTES) : g;
      b.push(Hc(`extraEntropy`, e));
    }
    let x = Uc(...b),
      w = v;
    function E(e) {
      let t = S(e);
      if (!p(t)) return;
      let n = l(t),
        r = u.BASE.multiply(t).toAffine(),
        i = c(r.x);
      if (i === Ju) return;
      let a = c(n * c(w + i * y));
      if (a === Ju) return;
      let o = (r.x === i ? 0 : 2) | Number(r.y & Yu),
        d = a;
      return s && m(a) && ((d = h(a)), (o ^= 1)), new _(i, d, o);
    }
    return { seed: x, k2sig: E };
  }
  let D = { lowS: t.lowS, prehash: !1 },
    O = { lowS: t.lowS, prehash: !1 };
  function k(e, n, r = D) {
    let { seed: i, k2sig: a } = E(e, n, r),
      o = t;
    return Zc(o.hash.outputLen, o.nByteLength, o.hmac)(i, a);
  }
  u.BASE._setWindowSize(8);
  function A(e, n, r, i = O) {
    let a = e;
    (n = Hc(`msgHash`, n)), (r = Hc(`publicKey`, r));
    let { lowS: o, prehash: s, format: d } = i;
    if ((Wu(i), `strict` in i))
      throw Error(`options.strict was renamed to lowS`);
    if (d !== void 0 && d !== `compact` && d !== `der`)
      throw Error(`format must be compact or der`);
    let f = typeof a == `string` || Dc(a),
      p =
        !f &&
        !d &&
        typeof a == `object` &&
        !!a &&
        typeof a.r == `bigint` &&
        typeof a.s == `bigint`;
    if (!f && !p)
      throw Error(
        `invalid signature, expected Uint8Array, hex string or Signature instance`
      );
    let m, h;
    try {
      if ((p && (m = new _(a.r, a.s)), f)) {
        try {
          d !== `compact` && (m = _.fromDER(a));
        } catch (e) {
          if (!(e instanceof Ku.Err)) throw e;
        }
        !m && d !== `der` && (m = _.fromCompact(a));
      }
      h = u.fromHex(r);
    } catch {
      return !1;
    }
    if (!m || (o && m.hasHighS())) return !1;
    s && (n = t.hash(n));
    let { r: g, s: v } = m,
      y = C(n),
      b = l(v),
      x = c(y * b),
      S = c(g * b),
      w = u.BASE.multiplyAndAddUnsafe(h, x, S)?.toAffine();
    return w ? c(w.x) === g : !1;
  }
  return {
    CURVE: t,
    getPublicKey: y,
    getSharedSecret: x,
    sign: k,
    verify: A,
    ProjectivePoint: u,
    Signature: _,
    utils: v,
  };
}
function td(e) {
  return { hash: e, hmac: (t, ...n) => d(e, t, u(...n)), randomBytes: o };
}
function nd(e, t) {
  let n = (t) => ed({ ...e, ...td(t) });
  return { ...n(t), create: n };
}
var rd = BigInt(
    `0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f`
  ),
  id = BigInt(
    `0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141`
  ),
  ad = BigInt(0),
  od = BigInt(1),
  sd = BigInt(2),
  cd = (e, t) => (e + t / sd) / t;
function ld(e) {
  let t = rd,
    n = BigInt(3),
    r = BigInt(6),
    i = BigInt(11),
    a = BigInt(22),
    o = BigInt(23),
    s = BigInt(44),
    c = BigInt(88),
    l = (e * e * e) % t,
    u = (l * l * e) % t,
    d = (mu((mu((mu(u, n, t) * u) % t, n, t) * u) % t, sd, t) * l) % t,
    f = (mu(d, i, t) * d) % t,
    p = (mu(f, a, t) * f) % t,
    m = (mu(p, s, t) * p) % t,
    h = mu(
      (mu(
        (mu(
          (mu((mu((mu(m, c, t) * m) % t, s, t) * p) % t, n, t) * u) % t,
          o,
          t
        ) *
          f) %
          t,
        r,
        t
      ) *
        l) %
        t,
      sd,
      t
    );
  if (!ud.eql(ud.sqr(h), e)) throw Error(`Cannot find square root`);
  return h;
}
var ud = Eu(rd, void 0, void 0, { sqrt: ld }),
  dd = nd(
    {
      a: ad,
      b: BigInt(7),
      Fp: ud,
      n: id,
      Gx: BigInt(
        `55066263022277343669578718895168534326250603453777594175500187360389116729240`
      ),
      Gy: BigInt(
        `32670510020758816978083085130507043184471273380659243275938904335757337482424`
      ),
      h: BigInt(1),
      lowS: !0,
      endo: {
        beta: BigInt(
          `0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee`
        ),
        splitScalar: (e) => {
          let t = id,
            n = BigInt(`0x3086d221a7d46bcde86c90e49284eb15`),
            r = -od * BigInt(`0xe4437ed6010e88286f547fa90abfe4c3`),
            i = BigInt(`0x114ca50f7a8e2f3f657c1108d9d44cfd8`),
            a = n,
            o = BigInt(`0x100000000000000000000000000000000`),
            s = cd(a * e, t),
            c = cd(-r * e, t),
            l = pu(e - s * n - c * i, t),
            u = pu(-s * r - c * a, t),
            d = l > o,
            f = u > o;
          if ((d && (l = t - l), f && (u = t - u), l > o || u > o))
            throw Error(`splitScalar: Endomorphism failed, k=` + e);
          return { k1neg: d, k1: l, k2neg: f, k2: u };
        },
      },
    },
    c
  );
function fd(e) {
  if (e.length !== 130 && e.length !== 132) throw new md({ signature: e });
  let t = BigInt(yl(e, 0, 32)),
    n = BigInt(yl(e, 32, 64)),
    r = (() => {
      let t = Number(`0x${e.slice(130)}`);
      if (!Number.isNaN(t))
        try {
          return pd(t);
        } catch {
          throw new hd({ value: t });
        }
    })();
  return r === void 0 ? { r: t, s: n } : { r: t, s: n, yParity: r };
}
function pd(e) {
  if (e === 0 || e === 27) return 0;
  if (e === 1 || e === 28) return 1;
  if (e >= 35) return +(e % 2 == 0);
  throw new gd({ value: e });
}
var md = class extends Cc {
    constructor({ signature: e }) {
      super(`Value \`${e}\` is an invalid signature size.`, {
        metaMessages: [
          `Expected: 64 bytes or 65 bytes.`,
          `Received ${bl(ml(e))} bytes.`,
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Signature.InvalidSerializedSizeError`,
        });
    }
  },
  hd = class extends Cc {
    constructor({ value: e }) {
      super(
        `Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Signature.InvalidYParityError`,
        });
    }
  },
  gd = class extends Cc {
    constructor({ value: e }) {
      super(`Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Signature.InvalidVError`,
        });
    }
  };
function _d(e) {
  return nu(vd(e));
}
function vd(e) {
  let { payload: t, signature: n } = e,
    { r, s: i, yParity: a } = n;
  return Ul(
    new dd.Signature(BigInt(r), BigInt(i))
      .addRecoveryBit(a)
      .recoverPublicKey(ml(t).substring(2))
  );
}
function yd(e) {
  let t = e.length,
    n = 0,
    r = 0;
  for (; r < t; ) {
    let i = e.charCodeAt(r++);
    if (!(i & 4294967168)) {
      n++;
      continue;
    }
    if (!(i & 4294965248)) n += 2;
    else {
      if (i >= 55296 && i <= 56319 && r < t) {
        let t = e.charCodeAt(r);
        (t & 64512) == 56320 &&
          (++r, (i = ((i & 1023) << 10) + (t & 1023) + 65536));
      }
      i & 4294901760 ? (n += 4) : (n += 3);
    }
  }
  return n;
}
function bd(e, t, n) {
  let r = e.length,
    i = n,
    a = 0;
  for (; a < r; ) {
    let n = e.charCodeAt(a++);
    if (!(n & 4294967168)) {
      t[i++] = n;
      continue;
    }
    if (!(n & 4294965248)) t[i++] = ((n >> 6) & 31) | 192;
    else {
      if (n >= 55296 && n <= 56319 && a < r) {
        let t = e.charCodeAt(a);
        (t & 64512) == 56320 &&
          (++a, (n = ((n & 1023) << 10) + (t & 1023) + 65536));
      }
      n & 4294901760
        ? ((t[i++] = ((n >> 18) & 7) | 240),
          (t[i++] = ((n >> 12) & 63) | 128),
          (t[i++] = ((n >> 6) & 63) | 128))
        : ((t[i++] = ((n >> 12) & 15) | 224), (t[i++] = ((n >> 6) & 63) | 128));
    }
    t[i++] = (n & 63) | 128;
  }
}
var xd = new TextEncoder(),
  Sd = 50;
function Cd(e, t, n) {
  xd.encodeInto(e, t.subarray(n));
}
function wd(e, t, n) {
  e.length > Sd ? Cd(e, t, n) : bd(e, t, n);
}
var Td = 4096;
function Ed(e, t, n) {
  let r = t,
    i = r + n,
    a = [],
    o = ``;
  for (; r < i; ) {
    let t = e[r++];
    if (!(t & 128)) a.push(t);
    else if ((t & 224) == 192) {
      let n = e[r++] & 63;
      a.push(((t & 31) << 6) | n);
    } else if ((t & 240) == 224) {
      let n = e[r++] & 63,
        i = e[r++] & 63;
      a.push(((t & 31) << 12) | (n << 6) | i);
    } else if ((t & 248) == 240) {
      let n = e[r++] & 63,
        i = e[r++] & 63,
        o = e[r++] & 63,
        s = ((t & 7) << 18) | (n << 12) | (i << 6) | o;
      s > 65535 &&
        ((s -= 65536),
        a.push(((s >>> 10) & 1023) | 55296),
        (s = 56320 | (s & 1023))),
        a.push(s);
    } else a.push(t);
    a.length >= Td && ((o += String.fromCharCode(...a)), (a.length = 0));
  }
  return a.length > 0 && (o += String.fromCharCode(...a)), o;
}
var Dd = new TextDecoder(),
  Od = 200;
function kd(e, t, n) {
  let r = e.subarray(t, t + n);
  return Dd.decode(r);
}
function Ad(e, t, n) {
  return n > Od ? kd(e, t, n) : Ed(e, t, n);
}
var jd = class {
    type;
    data;
    constructor(e, t) {
      (this.type = e), (this.data = t);
    }
  },
  Md = class e extends Error {
    constructor(t) {
      super(t);
      let n = Object.create(e.prototype);
      Object.setPrototypeOf(this, n),
        Object.defineProperty(this, "name", {
          configurable: !0,
          enumerable: !1,
          value: e.name,
        });
    }
  };
function Nd(e, t, n) {
  let r = n / 4294967296,
    i = n;
  e.setUint32(t, r), e.setUint32(t + 4, i);
}
function Pd(e, t, n) {
  let r = Math.floor(n / 4294967296),
    i = n;
  e.setUint32(t, r), e.setUint32(t + 4, i);
}
function Fd(e, t) {
  let n = e.getInt32(t),
    r = e.getUint32(t + 4);
  return n * 4294967296 + r;
}
function Id(e, t) {
  let n = e.getUint32(t),
    r = e.getUint32(t + 4);
  return n * 4294967296 + r;
}
var Ld = 4294967295,
  Rd = 17179869183;
function zd({ sec: e, nsec: t }) {
  if (e >= 0 && t >= 0 && e <= Rd) {
    if (t === 0 && e <= Ld) {
      let t = new Uint8Array(4);
      return new DataView(t.buffer).setUint32(0, e), t;
    }
    {
      let n = e / 4294967296,
        r = e & 4294967295,
        i = new Uint8Array(8),
        a = new DataView(i.buffer);
      return a.setUint32(0, (t << 2) | (n & 3)), a.setUint32(4, r), i;
    }
  }
  {
    let n = new Uint8Array(12),
      r = new DataView(n.buffer);
    return r.setUint32(0, t), Pd(r, 4, e), n;
  }
}
function Bd(e) {
  let t = e.getTime(),
    n = Math.floor(t / 1e3),
    r = (t - n * 1e3) * 1e6,
    i = Math.floor(r / 1e9);
  return { sec: n + i, nsec: r - i * 1e9 };
}
function Vd(e) {
  return e instanceof Date ? zd(Bd(e)) : null;
}
function Hd(e) {
  let t = new DataView(e.buffer, e.byteOffset, e.byteLength);
  switch (e.byteLength) {
    case 4:
      return { sec: t.getUint32(0), nsec: 0 };
    case 8: {
      let e = t.getUint32(0),
        n = t.getUint32(4);
      return { sec: (e & 3) * 4294967296 + n, nsec: e >>> 2 };
    }
    case 12:
      return { sec: Fd(t, 4), nsec: t.getUint32(0) };
    default:
      throw new Md(
        `Unrecognized data size for timestamp (expected 4, 8, or 12): ${e.length}`
      );
  }
}
function Ud(e) {
  let t = Hd(e);
  return new Date(t.sec * 1e3 + t.nsec / 1e6);
}
var Wd = { type: -1, encode: Vd, decode: Ud },
  Gd = class e {
    static defaultCodec = new e();
    __brand;
    builtInEncoders = [];
    builtInDecoders = [];
    encoders = [];
    decoders = [];
    constructor() {
      this.register(Wd);
    }
    register({ type: e, encode: t, decode: n }) {
      if (e >= 0) (this.encoders[e] = t), (this.decoders[e] = n);
      else {
        let r = -1 - e;
        (this.builtInEncoders[r] = t), (this.builtInDecoders[r] = n);
      }
    }
    tryToEncode(e, t) {
      for (let n = 0; n < this.builtInEncoders.length; n++) {
        let r = this.builtInEncoders[n];
        if (r != null) {
          let i = r(e, t);
          if (i != null) return new jd(-1 - n, i);
        }
      }
      for (let n = 0; n < this.encoders.length; n++) {
        let r = this.encoders[n];
        if (r != null) {
          let i = r(e, t);
          if (i != null) return new jd(n, i);
        }
      }
      return e instanceof jd ? e : null;
    }
    decode(e, t, n) {
      let r = t < 0 ? this.builtInDecoders[-1 - t] : this.decoders[t];
      return r ? r(e, t, n) : new jd(t, e);
    }
  };
function Kd(e) {
  return (
    e instanceof ArrayBuffer ||
    (typeof SharedArrayBuffer < `u` && e instanceof SharedArrayBuffer)
  );
}
function qd(e) {
  return e instanceof Uint8Array
    ? e
    : ArrayBuffer.isView(e)
    ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
    : Kd(e)
    ? new Uint8Array(e)
    : Uint8Array.from(e);
}
var Jd = class e {
  extensionCodec;
  context;
  useBigInt64;
  maxDepth;
  initialBufferSize;
  sortKeys;
  forceFloat32;
  ignoreUndefined;
  forceIntegerToFloat;
  pos;
  view;
  bytes;
  entered = !1;
  constructor(e) {
    (this.extensionCodec = e?.extensionCodec ?? Gd.defaultCodec),
      (this.context = e?.context),
      (this.useBigInt64 = e?.useBigInt64 ?? !1),
      (this.maxDepth = e?.maxDepth ?? 100),
      (this.initialBufferSize = e?.initialBufferSize ?? 2048),
      (this.sortKeys = e?.sortKeys ?? !1),
      (this.forceFloat32 = e?.forceFloat32 ?? !1),
      (this.ignoreUndefined = e?.ignoreUndefined ?? !1),
      (this.forceIntegerToFloat = e?.forceIntegerToFloat ?? !1),
      (this.pos = 0),
      (this.view = new DataView(new ArrayBuffer(this.initialBufferSize))),
      (this.bytes = new Uint8Array(this.view.buffer));
  }
  clone() {
    return new e({
      extensionCodec: this.extensionCodec,
      context: this.context,
      useBigInt64: this.useBigInt64,
      maxDepth: this.maxDepth,
      initialBufferSize: this.initialBufferSize,
      sortKeys: this.sortKeys,
      forceFloat32: this.forceFloat32,
      ignoreUndefined: this.ignoreUndefined,
      forceIntegerToFloat: this.forceIntegerToFloat,
    });
  }
  reinitializeState() {
    this.pos = 0;
  }
  encodeSharedRef(e) {
    if (this.entered) return this.clone().encodeSharedRef(e);
    try {
      return (
        (this.entered = !0),
        this.reinitializeState(),
        this.doEncode(e, 1),
        this.bytes.subarray(0, this.pos)
      );
    } finally {
      this.entered = !1;
    }
  }
  encode(e) {
    if (this.entered) return this.clone().encode(e);
    try {
      return (
        (this.entered = !0),
        this.reinitializeState(),
        this.doEncode(e, 1),
        this.bytes.slice(0, this.pos)
      );
    } finally {
      this.entered = !1;
    }
  }
  doEncode(e, t) {
    if (t > this.maxDepth) throw Error(`Too deep objects in depth ${t}`);
    e == null
      ? this.encodeNil()
      : typeof e == `boolean`
      ? this.encodeBoolean(e)
      : typeof e == `number`
      ? this.forceIntegerToFloat
        ? this.encodeNumberAsFloat(e)
        : this.encodeNumber(e)
      : typeof e == `string`
      ? this.encodeString(e)
      : this.useBigInt64 && typeof e == `bigint`
      ? this.encodeBigInt64(e)
      : this.encodeObject(e, t);
  }
  ensureBufferSizeToWrite(e) {
    let t = this.pos + e;
    this.view.byteLength < t && this.resizeBuffer(t * 2);
  }
  resizeBuffer(e) {
    let t = new ArrayBuffer(e),
      n = new Uint8Array(t),
      r = new DataView(t);
    n.set(this.bytes), (this.view = r), (this.bytes = n);
  }
  encodeNil() {
    this.writeU8(192);
  }
  encodeBoolean(e) {
    e === !1 ? this.writeU8(194) : this.writeU8(195);
  }
  encodeNumber(e) {
    !this.forceIntegerToFloat && Number.isSafeInteger(e)
      ? e >= 0
        ? e < 128
          ? this.writeU8(e)
          : e < 256
          ? (this.writeU8(204), this.writeU8(e))
          : e < 65536
          ? (this.writeU8(205), this.writeU16(e))
          : e < 4294967296
          ? (this.writeU8(206), this.writeU32(e))
          : this.useBigInt64
          ? this.encodeNumberAsFloat(e)
          : (this.writeU8(207), this.writeU64(e))
        : e >= -32
        ? this.writeU8(224 | (e + 32))
        : e >= -128
        ? (this.writeU8(208), this.writeI8(e))
        : e >= -32768
        ? (this.writeU8(209), this.writeI16(e))
        : e >= -2147483648
        ? (this.writeU8(210), this.writeI32(e))
        : this.useBigInt64
        ? this.encodeNumberAsFloat(e)
        : (this.writeU8(211), this.writeI64(e))
      : this.encodeNumberAsFloat(e);
  }
  encodeNumberAsFloat(e) {
    this.forceFloat32
      ? (this.writeU8(202), this.writeF32(e))
      : (this.writeU8(203), this.writeF64(e));
  }
  encodeBigInt64(e) {
    e >= BigInt(0)
      ? (this.writeU8(207), this.writeBigUint64(e))
      : (this.writeU8(211), this.writeBigInt64(e));
  }
  writeStringHeader(e) {
    if (e < 32) this.writeU8(160 + e);
    else if (e < 256) this.writeU8(217), this.writeU8(e);
    else if (e < 65536) this.writeU8(218), this.writeU16(e);
    else if (e < 4294967296) this.writeU8(219), this.writeU32(e);
    else throw Error(`Too long string: ${e} bytes in UTF-8`);
  }
  encodeString(e) {
    let t = yd(e);
    this.ensureBufferSizeToWrite(5 + t),
      this.writeStringHeader(t),
      wd(e, this.bytes, this.pos),
      (this.pos += t);
  }
  encodeObject(e, t) {
    let n = this.extensionCodec.tryToEncode(e, this.context);
    if (n != null) this.encodeExtension(n);
    else if (Array.isArray(e)) this.encodeArray(e, t);
    else if (ArrayBuffer.isView(e)) this.encodeBinary(e);
    else if (typeof e == `object`) this.encodeMap(e, t);
    else
      throw Error(`Unrecognized object: ${Object.prototype.toString.apply(e)}`);
  }
  encodeBinary(e) {
    let t = e.byteLength;
    if (t < 256) this.writeU8(196), this.writeU8(t);
    else if (t < 65536) this.writeU8(197), this.writeU16(t);
    else if (t < 4294967296) this.writeU8(198), this.writeU32(t);
    else throw Error(`Too large binary: ${t}`);
    let n = qd(e);
    this.writeU8a(n);
  }
  encodeArray(e, t) {
    let n = e.length;
    if (n < 16) this.writeU8(144 + n);
    else if (n < 65536) this.writeU8(220), this.writeU16(n);
    else if (n < 4294967296) this.writeU8(221), this.writeU32(n);
    else throw Error(`Too large array: ${n}`);
    for (let n of e) this.doEncode(n, t + 1);
  }
  countWithoutUndefined(e, t) {
    let n = 0;
    for (let r of t) e[r] !== void 0 && n++;
    return n;
  }
  encodeMap(e, t) {
    let n = Object.keys(e);
    this.sortKeys && n.sort();
    let r = this.ignoreUndefined ? this.countWithoutUndefined(e, n) : n.length;
    if (r < 16) this.writeU8(128 + r);
    else if (r < 65536) this.writeU8(222), this.writeU16(r);
    else if (r < 4294967296) this.writeU8(223), this.writeU32(r);
    else throw Error(`Too large map object: ${r}`);
    for (let r of n) {
      let n = e[r];
      (this.ignoreUndefined && n === void 0) ||
        (this.encodeString(r), this.doEncode(n, t + 1));
    }
  }
  encodeExtension(e) {
    if (typeof e.data == `function`) {
      let t = e.data(this.pos + 6),
        n = t.length;
      if (n >= 4294967296) throw Error(`Too large extension object: ${n}`);
      this.writeU8(201),
        this.writeU32(n),
        this.writeI8(e.type),
        this.writeU8a(t);
      return;
    }
    let t = e.data.length;
    if (t === 1) this.writeU8(212);
    else if (t === 2) this.writeU8(213);
    else if (t === 4) this.writeU8(214);
    else if (t === 8) this.writeU8(215);
    else if (t === 16) this.writeU8(216);
    else if (t < 256) this.writeU8(199), this.writeU8(t);
    else if (t < 65536) this.writeU8(200), this.writeU16(t);
    else if (t < 4294967296) this.writeU8(201), this.writeU32(t);
    else throw Error(`Too large extension object: ${t}`);
    this.writeI8(e.type), this.writeU8a(e.data);
  }
  writeU8(e) {
    this.ensureBufferSizeToWrite(1),
      this.view.setUint8(this.pos, e),
      this.pos++;
  }
  writeU8a(e) {
    let t = e.length;
    this.ensureBufferSizeToWrite(t),
      this.bytes.set(e, this.pos),
      (this.pos += t);
  }
  writeI8(e) {
    this.ensureBufferSizeToWrite(1), this.view.setInt8(this.pos, e), this.pos++;
  }
  writeU16(e) {
    this.ensureBufferSizeToWrite(2),
      this.view.setUint16(this.pos, e),
      (this.pos += 2);
  }
  writeI16(e) {
    this.ensureBufferSizeToWrite(2),
      this.view.setInt16(this.pos, e),
      (this.pos += 2);
  }
  writeU32(e) {
    this.ensureBufferSizeToWrite(4),
      this.view.setUint32(this.pos, e),
      (this.pos += 4);
  }
  writeI32(e) {
    this.ensureBufferSizeToWrite(4),
      this.view.setInt32(this.pos, e),
      (this.pos += 4);
  }
  writeF32(e) {
    this.ensureBufferSizeToWrite(4),
      this.view.setFloat32(this.pos, e),
      (this.pos += 4);
  }
  writeF64(e) {
    this.ensureBufferSizeToWrite(8),
      this.view.setFloat64(this.pos, e),
      (this.pos += 8);
  }
  writeU64(e) {
    this.ensureBufferSizeToWrite(8),
      Nd(this.view, this.pos, e),
      (this.pos += 8);
  }
  writeI64(e) {
    this.ensureBufferSizeToWrite(8),
      Pd(this.view, this.pos, e),
      (this.pos += 8);
  }
  writeBigUint64(e) {
    this.ensureBufferSizeToWrite(8),
      this.view.setBigUint64(this.pos, e),
      (this.pos += 8);
  }
  writeBigInt64(e) {
    this.ensureBufferSizeToWrite(8),
      this.view.setBigInt64(this.pos, e),
      (this.pos += 8);
  }
};
function Yd(e, t) {
  return new Jd(t).encodeSharedRef(e);
}
function Xd(e) {
  return `${e < 0 ? `-` : ``}0x${Math.abs(e).toString(16).padStart(2, `0`)}`;
}
var Zd = 16,
  Qd = 16,
  $d = class {
    hit = 0;
    miss = 0;
    caches;
    maxKeyLength;
    maxLengthPerKey;
    constructor(e = Zd, t = Qd) {
      (this.maxKeyLength = e), (this.maxLengthPerKey = t), (this.caches = []);
      for (let e = 0; e < this.maxKeyLength; e++) this.caches.push([]);
    }
    canBeCached(e) {
      return e > 0 && e <= this.maxKeyLength;
    }
    find(e, t, n) {
      let r = this.caches[n - 1];
      FIND_CHUNK: for (let i of r) {
        let r = i.bytes;
        for (let i = 0; i < n; i++) if (r[i] !== e[t + i]) continue FIND_CHUNK;
        return i.str;
      }
      return null;
    }
    store(e, t) {
      let n = this.caches[e.length - 1],
        r = { bytes: e, str: t };
      n.length >= this.maxLengthPerKey
        ? (n[(Math.random() * n.length) | 0] = r)
        : n.push(r);
    }
    decode(e, t, n) {
      let r = this.find(e, t, n);
      if (r != null) return this.hit++, r;
      this.miss++;
      let i = Ed(e, t, n),
        a = Uint8Array.prototype.slice.call(e, t, t + n);
      return this.store(a, i), i;
    }
  },
  ef = `array`,
  tf = `map_key`,
  nf = `map_value`,
  rf = (e) => {
    if (typeof e == `string` || typeof e == `number`) return e;
    throw new Md(`The type of key must be string or number but ` + typeof e);
  },
  af = class {
    stack = [];
    stackHeadPosition = -1;
    get length() {
      return this.stackHeadPosition + 1;
    }
    top() {
      return this.stack[this.stackHeadPosition];
    }
    pushArrayState(e) {
      let t = this.getUninitializedStateFromPool();
      (t.type = ef), (t.position = 0), (t.size = e), (t.array = Array(e));
    }
    pushMapState(e) {
      let t = this.getUninitializedStateFromPool();
      (t.type = tf), (t.readCount = 0), (t.size = e), (t.map = {});
    }
    getUninitializedStateFromPool() {
      return (
        this.stackHeadPosition++,
        this.stackHeadPosition === this.stack.length &&
          this.stack.push({
            type: void 0,
            size: 0,
            array: void 0,
            position: 0,
            readCount: 0,
            map: void 0,
            key: null,
          }),
        this.stack[this.stackHeadPosition]
      );
    }
    release(e) {
      if (this.stack[this.stackHeadPosition] !== e)
        throw Error(
          `Invalid stack state. Released state is not on top of the stack.`
        );
      if (e.type === ef) {
        let t = e;
        (t.size = 0), (t.array = void 0), (t.position = 0), (t.type = void 0);
      }
      if (e.type === tf || e.type === nf) {
        let t = e;
        (t.size = 0), (t.map = void 0), (t.readCount = 0), (t.type = void 0);
      }
      this.stackHeadPosition--;
    }
    reset() {
      (this.stack.length = 0), (this.stackHeadPosition = -1);
    }
  },
  of = -1,
  sf = new DataView(new ArrayBuffer(0)),
  cf = new Uint8Array(sf.buffer);
try {
  sf.getInt8(0);
} catch (e) {
  if (!(e instanceof RangeError))
    throw Error(
      `This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access`
    );
}
var lf = RangeError(`Insufficient data`),
  uf = new $d(),
  df = class e {
    extensionCodec;
    context;
    useBigInt64;
    rawStrings;
    maxStrLength;
    maxBinLength;
    maxArrayLength;
    maxMapLength;
    maxExtLength;
    keyDecoder;
    mapKeyConverter;
    totalPos = 0;
    pos = 0;
    view = sf;
    bytes = cf;
    headByte = of;
    stack = new af();
    entered = !1;
    constructor(e) {
      (this.extensionCodec = e?.extensionCodec ?? Gd.defaultCodec),
        (this.context = e?.context),
        (this.useBigInt64 = e?.useBigInt64 ?? !1),
        (this.rawStrings = e?.rawStrings ?? !1),
        (this.maxStrLength = e?.maxStrLength ?? 4294967295),
        (this.maxBinLength = e?.maxBinLength ?? 4294967295),
        (this.maxArrayLength = e?.maxArrayLength ?? 4294967295),
        (this.maxMapLength = e?.maxMapLength ?? 4294967295),
        (this.maxExtLength = e?.maxExtLength ?? 4294967295),
        (this.keyDecoder = e?.keyDecoder === void 0 ? uf : e.keyDecoder),
        (this.mapKeyConverter = e?.mapKeyConverter ?? rf);
    }
    clone() {
      return new e({
        extensionCodec: this.extensionCodec,
        context: this.context,
        useBigInt64: this.useBigInt64,
        rawStrings: this.rawStrings,
        maxStrLength: this.maxStrLength,
        maxBinLength: this.maxBinLength,
        maxArrayLength: this.maxArrayLength,
        maxMapLength: this.maxMapLength,
        maxExtLength: this.maxExtLength,
        keyDecoder: this.keyDecoder,
      });
    }
    reinitializeState() {
      (this.totalPos = 0), (this.headByte = of), this.stack.reset();
    }
    setBuffer(e) {
      let t = qd(e);
      (this.bytes = t),
        (this.view = new DataView(t.buffer, t.byteOffset, t.byteLength)),
        (this.pos = 0);
    }
    appendBuffer(e) {
      if (this.headByte === of && !this.hasRemaining(1)) this.setBuffer(e);
      else {
        let t = this.bytes.subarray(this.pos),
          n = qd(e),
          r = new Uint8Array(t.length + n.length);
        r.set(t), r.set(n, t.length), this.setBuffer(r);
      }
    }
    hasRemaining(e) {
      return this.view.byteLength - this.pos >= e;
    }
    createExtraByteError(e) {
      let { view: t, pos: n } = this;
      return RangeError(
        `Extra ${t.byteLength - n} of ${
          t.byteLength
        } byte(s) found at buffer[${e}]`
      );
    }
    decode(e) {
      if (this.entered) return this.clone().decode(e);
      try {
        (this.entered = !0), this.reinitializeState(), this.setBuffer(e);
        let t = this.doDecodeSync();
        if (this.hasRemaining(1)) throw this.createExtraByteError(this.pos);
        return t;
      } finally {
        this.entered = !1;
      }
    }
    *decodeMulti(e) {
      if (this.entered) {
        yield* this.clone().decodeMulti(e);
        return;
      }
      try {
        for (
          this.entered = !0, this.reinitializeState(), this.setBuffer(e);
          this.hasRemaining(1);

        )
          yield this.doDecodeSync();
      } finally {
        this.entered = !1;
      }
    }
    async decodeAsync(e) {
      if (this.entered) return this.clone().decodeAsync(e);
      try {
        this.entered = !0;
        let t = !1,
          n;
        for await (let r of e) {
          if (t)
            throw (
              ((this.entered = !1), this.createExtraByteError(this.totalPos))
            );
          this.appendBuffer(r);
          try {
            (n = this.doDecodeSync()), (t = !0);
          } catch (e) {
            if (!(e instanceof RangeError)) throw e;
          }
          this.totalPos += this.pos;
        }
        if (t) {
          if (this.hasRemaining(1))
            throw this.createExtraByteError(this.totalPos);
          return n;
        }
        let { headByte: r, pos: i, totalPos: a } = this;
        throw RangeError(
          `Insufficient data in parsing ${Xd(
            r
          )} at ${a} (${i} in the current buffer)`
        );
      } finally {
        this.entered = !1;
      }
    }
    decodeArrayStream(e) {
      return this.decodeMultiAsync(e, !0);
    }
    decodeStream(e) {
      return this.decodeMultiAsync(e, !1);
    }
    async *decodeMultiAsync(e, t) {
      if (this.entered) {
        yield* this.clone().decodeMultiAsync(e, t);
        return;
      }
      try {
        this.entered = !0;
        let n = t,
          r = -1;
        for await (let i of e) {
          if (t && r === 0) throw this.createExtraByteError(this.totalPos);
          this.appendBuffer(i),
            n && ((r = this.readArraySize()), (n = !1), this.complete());
          try {
            for (; yield this.doDecodeSync(), --r !== 0; );
          } catch (e) {
            if (!(e instanceof RangeError)) throw e;
          }
          this.totalPos += this.pos;
        }
      } finally {
        this.entered = !1;
      }
    }
    doDecodeSync() {
      DECODE: for (;;) {
        let e = this.readHeadByte(),
          t;
        if (e >= 224) t = e - 256;
        else if (e < 192) {
          if (e < 128) t = e;
          else if (e < 144) {
            let n = e - 128;
            if (n !== 0) {
              this.pushMapState(n), this.complete();
              continue DECODE;
            }
            t = {};
          } else if (e < 160) {
            let n = e - 144;
            if (n !== 0) {
              this.pushArrayState(n), this.complete();
              continue DECODE;
            }
            t = [];
          } else {
            let n = e - 160;
            t = this.decodeString(n, 0);
          }
        } else if (e === 192) t = null;
        else if (e === 194) t = !1;
        else if (e === 195) t = !0;
        else if (e === 202) t = this.readF32();
        else if (e === 203) t = this.readF64();
        else if (e === 204) t = this.readU8();
        else if (e === 205) t = this.readU16();
        else if (e === 206) t = this.readU32();
        else if (e === 207)
          t = this.useBigInt64 ? this.readU64AsBigInt() : this.readU64();
        else if (e === 208) t = this.readI8();
        else if (e === 209) t = this.readI16();
        else if (e === 210) t = this.readI32();
        else if (e === 211)
          t = this.useBigInt64 ? this.readI64AsBigInt() : this.readI64();
        else if (e === 217) {
          let e = this.lookU8();
          t = this.decodeString(e, 1);
        } else if (e === 218) {
          let e = this.lookU16();
          t = this.decodeString(e, 2);
        } else if (e === 219) {
          let e = this.lookU32();
          t = this.decodeString(e, 4);
        } else if (e === 220) {
          let e = this.readU16();
          if (e !== 0) {
            this.pushArrayState(e), this.complete();
            continue DECODE;
          }
          t = [];
        } else if (e === 221) {
          let e = this.readU32();
          if (e !== 0) {
            this.pushArrayState(e), this.complete();
            continue DECODE;
          }
          t = [];
        } else if (e === 222) {
          let e = this.readU16();
          if (e !== 0) {
            this.pushMapState(e), this.complete();
            continue DECODE;
          }
          t = {};
        } else if (e === 223) {
          let e = this.readU32();
          if (e !== 0) {
            this.pushMapState(e), this.complete();
            continue DECODE;
          }
          t = {};
        } else if (e === 196) {
          let e = this.lookU8();
          t = this.decodeBinary(e, 1);
        } else if (e === 197) {
          let e = this.lookU16();
          t = this.decodeBinary(e, 2);
        } else if (e === 198) {
          let e = this.lookU32();
          t = this.decodeBinary(e, 4);
        } else if (e === 212) t = this.decodeExtension(1, 0);
        else if (e === 213) t = this.decodeExtension(2, 0);
        else if (e === 214) t = this.decodeExtension(4, 0);
        else if (e === 215) t = this.decodeExtension(8, 0);
        else if (e === 216) t = this.decodeExtension(16, 0);
        else if (e === 199) {
          let e = this.lookU8();
          t = this.decodeExtension(e, 1);
        } else if (e === 200) {
          let e = this.lookU16();
          t = this.decodeExtension(e, 2);
        } else if (e === 201) {
          let e = this.lookU32();
          t = this.decodeExtension(e, 4);
        } else throw new Md(`Unrecognized type byte: ${Xd(e)}`);
        this.complete();
        let n = this.stack;
        for (; n.length > 0; ) {
          let e = n.top();
          if (e.type === ef) {
            if (
              ((e.array[e.position] = t), e.position++, e.position === e.size)
            )
              (t = e.array), n.release(e);
            else continue DECODE;
          } else if (e.type === tf) {
            if (t === `__proto__`)
              throw new Md(`The key __proto__ is not allowed`);
            (e.key = this.mapKeyConverter(t)), (e.type = nf);
            continue DECODE;
          } else if (
            ((e.map[e.key] = t), e.readCount++, e.readCount === e.size)
          )
            (t = e.map), n.release(e);
          else {
            (e.key = null), (e.type = tf);
            continue DECODE;
          }
        }
        return t;
      }
    }
    readHeadByte() {
      return (
        this.headByte === of && (this.headByte = this.readU8()), this.headByte
      );
    }
    complete() {
      this.headByte = of;
    }
    readArraySize() {
      let e = this.readHeadByte();
      switch (e) {
        case 220:
          return this.readU16();
        case 221:
          return this.readU32();
        default:
          if (e < 160) return e - 144;
          throw new Md(`Unrecognized array type byte: ${Xd(e)}`);
      }
    }
    pushMapState(e) {
      if (e > this.maxMapLength)
        throw new Md(
          `Max length exceeded: map length (${e}) > maxMapLengthLength (${this.maxMapLength})`
        );
      this.stack.pushMapState(e);
    }
    pushArrayState(e) {
      if (e > this.maxArrayLength)
        throw new Md(
          `Max length exceeded: array length (${e}) > maxArrayLength (${this.maxArrayLength})`
        );
      this.stack.pushArrayState(e);
    }
    decodeString(e, t) {
      return !this.rawStrings || this.stateIsMapKey()
        ? this.decodeUtf8String(e, t)
        : this.decodeBinary(e, t);
    }
    decodeUtf8String(e, t) {
      if (e > this.maxStrLength)
        throw new Md(
          `Max length exceeded: UTF-8 byte length (${e}) > maxStrLength (${this.maxStrLength})`
        );
      if (this.bytes.byteLength < this.pos + t + e) throw lf;
      let n = this.pos + t,
        r;
      return (
        (r =
          this.stateIsMapKey() && this.keyDecoder?.canBeCached(e)
            ? this.keyDecoder.decode(this.bytes, n, e)
            : Ad(this.bytes, n, e)),
        (this.pos += t + e),
        r
      );
    }
    stateIsMapKey() {
      return this.stack.length > 0 && this.stack.top().type === tf;
    }
    decodeBinary(e, t) {
      if (e > this.maxBinLength)
        throw new Md(
          `Max length exceeded: bin length (${e}) > maxBinLength (${this.maxBinLength})`
        );
      if (!this.hasRemaining(e + t)) throw lf;
      let n = this.pos + t,
        r = this.bytes.subarray(n, n + e);
      return (this.pos += t + e), r;
    }
    decodeExtension(e, t) {
      if (e > this.maxExtLength)
        throw new Md(
          `Max length exceeded: ext length (${e}) > maxExtLength (${this.maxExtLength})`
        );
      let n = this.view.getInt8(this.pos + t),
        r = this.decodeBinary(e, t + 1);
      return this.extensionCodec.decode(r, n, this.context);
    }
    lookU8() {
      return this.view.getUint8(this.pos);
    }
    lookU16() {
      return this.view.getUint16(this.pos);
    }
    lookU32() {
      return this.view.getUint32(this.pos);
    }
    readU8() {
      let e = this.view.getUint8(this.pos);
      return this.pos++, e;
    }
    readI8() {
      let e = this.view.getInt8(this.pos);
      return this.pos++, e;
    }
    readU16() {
      let e = this.view.getUint16(this.pos);
      return (this.pos += 2), e;
    }
    readI16() {
      let e = this.view.getInt16(this.pos);
      return (this.pos += 2), e;
    }
    readU32() {
      let e = this.view.getUint32(this.pos);
      return (this.pos += 4), e;
    }
    readI32() {
      let e = this.view.getInt32(this.pos);
      return (this.pos += 4), e;
    }
    readU64() {
      let e = Id(this.view, this.pos);
      return (this.pos += 8), e;
    }
    readI64() {
      let e = Fd(this.view, this.pos);
      return (this.pos += 8), e;
    }
    readU64AsBigInt() {
      let e = this.view.getBigUint64(this.pos);
      return (this.pos += 8), e;
    }
    readI64AsBigInt() {
      let e = this.view.getBigInt64(this.pos);
      return (this.pos += 8), e;
    }
    readF32() {
      let e = this.view.getFloat32(this.pos);
      return (this.pos += 4), e;
    }
    readF64() {
      let e = this.view.getFloat64(this.pos);
      return (this.pos += 8), e;
    }
  };
function ff(e, t) {
  return new df(t).decode(e);
}
var pf = yc(),
  mf = bc();
function hf(e) {
  return globalThis.Buffer == null
    ? e
    : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
function gf(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? hf(globalThis.Buffer.allocUnsafe(e))
    : new Uint8Array(e);
}
function _f(e, t) {
  t ||= e.reduce((e, t) => e + t.length, 0);
  let n = gf(t),
    r = 0;
  for (let t of e) n.set(t, r), (r += t.length);
  return hf(n);
}
function vf(e, t) {
  if (e.length >= 255) throw TypeError(`Alphabet too long`);
  for (var n = new Uint8Array(256), r = 0; r < n.length; r++) n[r] = 255;
  for (var i = 0; i < e.length; i++) {
    var a = e.charAt(i),
      o = a.charCodeAt(0);
    if (n[o] !== 255) throw TypeError(a + ` is ambiguous`);
    n[o] = i;
  }
  var s = e.length,
    c = e.charAt(0),
    l = Math.log(s) / Math.log(256),
    u = Math.log(256) / Math.log(s);
  function d(t) {
    if (
      (t instanceof Uint8Array ||
        (ArrayBuffer.isView(t)
          ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
          : Array.isArray(t) && (t = Uint8Array.from(t))),
      !(t instanceof Uint8Array))
    )
      throw TypeError(`Expected Uint8Array`);
    if (t.length === 0) return ``;
    for (var n = 0, r = 0, i = 0, a = t.length; i !== a && t[i] === 0; )
      i++, n++;
    for (var o = ((a - i) * u + 1) >>> 0, l = new Uint8Array(o); i !== a; ) {
      for (
        var d = t[i], f = 0, p = o - 1;
        (d !== 0 || f < r) && p !== -1;
        p--, f++
      )
        (d += (256 * l[p]) >>> 0), (l[p] = d % s >>> 0), (d = (d / s) >>> 0);
      if (d !== 0) throw Error(`Non-zero carry`);
      (r = f), i++;
    }
    for (var m = o - r; m !== o && l[m] === 0; ) m++;
    for (var h = c.repeat(n); m < o; ++m) h += e.charAt(l[m]);
    return h;
  }
  function f(e) {
    if (typeof e != `string`) throw TypeError(`Expected String`);
    if (e.length === 0) return new Uint8Array();
    var t = 0;
    if (e[t] !== ` `) {
      for (var r = 0, i = 0; e[t] === c; ) r++, t++;
      for (
        var a = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(a);
        e[t];

      ) {
        var u = n[e.charCodeAt(t)];
        if (u === 255) return;
        for (var d = 0, f = a - 1; (u !== 0 || d < i) && f !== -1; f--, d++)
          (u += (s * o[f]) >>> 0),
            (o[f] = u % 256 >>> 0),
            (u = (u / 256) >>> 0);
        if (u !== 0) throw Error(`Non-zero carry`);
        (i = d), t++;
      }
      if (e[t] !== ` `) {
        for (var p = a - i; p !== a && o[p] === 0; ) p++;
        for (var m = new Uint8Array(r + (a - p)), h = r; p !== a; )
          m[h++] = o[p++];
        return m;
      }
    }
  }
  function p(e) {
    var n = f(e);
    if (n) return n;
    throw Error(`Non-${t} character`);
  }
  return { encode: d, decodeUnsafe: f, decode: p };
}
var yf = vf,
  bf = (e) => {
    if (e instanceof Uint8Array && e.constructor.name === `Uint8Array`)
      return e;
    if (e instanceof ArrayBuffer) return new Uint8Array(e);
    if (ArrayBuffer.isView(e))
      return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
    throw Error(`Unknown type, must be binary type`);
  },
  xf = (e) => new TextEncoder().encode(e),
  Sf = (e) => new TextDecoder().decode(e),
  Cf = class {
    constructor(e, t, n) {
      (this.name = e), (this.prefix = t), (this.baseEncode = n);
    }
    encode(e) {
      if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
      throw Error(`Unknown type, must be binary type`);
    }
  },
  wf = class {
    constructor(e, t, n) {
      if (((this.name = e), (this.prefix = t), t.codePointAt(0) === void 0))
        throw Error(`Invalid prefix character`);
      (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = n);
    }
    decode(e) {
      if (typeof e == `string`) {
        if (e.codePointAt(0) !== this.prefixCodePoint)
          throw Error(
            `Unable to decode multibase string ${JSON.stringify(e)}, ${
              this.name
            } decoder only supports inputs prefixed with ${this.prefix}`
          );
        return this.baseDecode(e.slice(this.prefix.length));
      }
      throw Error(`Can only multibase decode strings`);
    }
    or(e) {
      return Ef(this, e);
    }
  },
  Tf = class {
    constructor(e) {
      this.decoders = e;
    }
    or(e) {
      return Ef(this, e);
    }
    decode(e) {
      let t = e[0],
        n = this.decoders[t];
      if (n) return n.decode(e);
      throw RangeError(
        `Unable to decode multibase string ${JSON.stringify(
          e
        )}, only inputs prefixed with ${Object.keys(
          this.decoders
        )} are supported`
      );
    }
  },
  Ef = (e, t) =>
    new Tf({
      ...(e.decoders || { [e.prefix]: e }),
      ...(t.decoders || { [t.prefix]: t }),
    }),
  Df = class {
    constructor(e, t, n, r) {
      (this.name = e),
        (this.prefix = t),
        (this.baseEncode = n),
        (this.baseDecode = r),
        (this.encoder = new Cf(e, t, n)),
        (this.decoder = new wf(e, t, r));
    }
    encode(e) {
      return this.encoder.encode(e);
    }
    decode(e) {
      return this.decoder.decode(e);
    }
  },
  Of = ({ name: e, prefix: t, encode: n, decode: r }) => new Df(e, t, n, r),
  kf = ({ prefix: e, name: t, alphabet: n }) => {
    let { encode: r, decode: i } = yf(n, t);
    return Of({ prefix: e, name: t, encode: r, decode: (e) => bf(i(e)) });
  },
  Af = (e, t, n, r) => {
    let i = {};
    for (let e = 0; e < t.length; ++e) i[t[e]] = e;
    let a = e.length;
    for (; e[a - 1] === `=`; ) --a;
    let o = new Uint8Array(((a * n) / 8) | 0),
      s = 0,
      c = 0,
      l = 0;
    for (let t = 0; t < a; ++t) {
      let a = i[e[t]];
      if (a === void 0) throw SyntaxError(`Non-${r} character`);
      (c = (c << n) | a),
        (s += n),
        s >= 8 && ((s -= 8), (o[l++] = 255 & (c >> s)));
    }
    if (s >= n || 255 & (c << (8 - s)))
      throw SyntaxError(`Unexpected end of data`);
    return o;
  },
  jf = (e, t, n) => {
    let r = t[t.length - 1] === `=`,
      i = (1 << n) - 1,
      a = ``,
      o = 0,
      s = 0;
    for (let r = 0; r < e.length; ++r)
      for (s = (s << 8) | e[r], o += 8; o > n; )
        (o -= n), (a += t[i & (s >> o)]);
    if ((o && (a += t[i & (s << (n - o))]), r))
      for (; (a.length * n) & 7; ) a += `=`;
    return a;
  },
  Mf = ({ name: e, prefix: t, bitsPerChar: n, alphabet: r }) =>
    Of({
      prefix: t,
      name: e,
      encode(e) {
        return jf(e, r, n);
      },
      decode(t) {
        return Af(t, r, n, e);
      },
    }),
  Nf = i({ identity: () => Pf }),
  Pf = Of({
    prefix: `\0`,
    name: `identity`,
    encode: (e) => Sf(e),
    decode: (e) => xf(e),
  }),
  Ff = i({ base2: () => If }),
  If = Mf({ prefix: `0`, name: `base2`, alphabet: `01`, bitsPerChar: 1 }),
  Lf = i({ base8: () => Rf }),
  Rf = Mf({ prefix: `7`, name: `base8`, alphabet: `01234567`, bitsPerChar: 3 }),
  zf = i({ base10: () => Bf }),
  Bf = kf({ prefix: `9`, name: `base10`, alphabet: `0123456789` }),
  Vf = i({ base16: () => Hf, base16upper: () => Uf }),
  Hf = Mf({
    prefix: `f`,
    name: `base16`,
    alphabet: `0123456789abcdef`,
    bitsPerChar: 4,
  }),
  Uf = Mf({
    prefix: `F`,
    name: `base16upper`,
    alphabet: `0123456789ABCDEF`,
    bitsPerChar: 4,
  }),
  Wf = i({
    base32: () => Gf,
    base32hex: () => Yf,
    base32hexpad: () => Zf,
    base32hexpadupper: () => Qf,
    base32hexupper: () => Xf,
    base32pad: () => qf,
    base32padupper: () => Jf,
    base32upper: () => Kf,
    base32z: () => $f,
  }),
  Gf = Mf({
    prefix: `b`,
    name: `base32`,
    alphabet: `abcdefghijklmnopqrstuvwxyz234567`,
    bitsPerChar: 5,
  }),
  Kf = Mf({
    prefix: `B`,
    name: `base32upper`,
    alphabet: `ABCDEFGHIJKLMNOPQRSTUVWXYZ234567`,
    bitsPerChar: 5,
  }),
  qf = Mf({
    prefix: `c`,
    name: `base32pad`,
    alphabet: `abcdefghijklmnopqrstuvwxyz234567=`,
    bitsPerChar: 5,
  }),
  Jf = Mf({
    prefix: `C`,
    name: `base32padupper`,
    alphabet: `ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=`,
    bitsPerChar: 5,
  }),
  Yf = Mf({
    prefix: `v`,
    name: `base32hex`,
    alphabet: `0123456789abcdefghijklmnopqrstuv`,
    bitsPerChar: 5,
  }),
  Xf = Mf({
    prefix: `V`,
    name: `base32hexupper`,
    alphabet: `0123456789ABCDEFGHIJKLMNOPQRSTUV`,
    bitsPerChar: 5,
  }),
  Zf = Mf({
    prefix: `t`,
    name: `base32hexpad`,
    alphabet: `0123456789abcdefghijklmnopqrstuv=`,
    bitsPerChar: 5,
  }),
  Qf = Mf({
    prefix: `T`,
    name: `base32hexpadupper`,
    alphabet: `0123456789ABCDEFGHIJKLMNOPQRSTUV=`,
    bitsPerChar: 5,
  }),
  $f = Mf({
    prefix: `h`,
    name: `base32z`,
    alphabet: `ybndrfg8ejkmcpqxot1uwisza345h769`,
    bitsPerChar: 5,
  }),
  ep = i({ base36: () => tp, base36upper: () => np }),
  tp = kf({
    prefix: `k`,
    name: `base36`,
    alphabet: `0123456789abcdefghijklmnopqrstuvwxyz`,
  }),
  np = kf({
    prefix: `K`,
    name: `base36upper`,
    alphabet: `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ`,
  }),
  rp = i({ base58btc: () => ip, base58flickr: () => ap }),
  ip = kf({
    name: `base58btc`,
    prefix: `z`,
    alphabet: `123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz`,
  }),
  ap = kf({
    name: `base58flickr`,
    prefix: `Z`,
    alphabet: `123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ`,
  }),
  op = i({
    base64: () => sp,
    base64pad: () => cp,
    base64url: () => lp,
    base64urlpad: () => up,
  }),
  sp = Mf({
    prefix: `m`,
    name: `base64`,
    alphabet: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,
    bitsPerChar: 6,
  }),
  cp = Mf({
    prefix: `M`,
    name: `base64pad`,
    alphabet: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`,
    bitsPerChar: 6,
  }),
  lp = Mf({
    prefix: `u`,
    name: `base64url`,
    alphabet: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`,
    bitsPerChar: 6,
  }),
  up = Mf({
    prefix: `U`,
    name: `base64urlpad`,
    alphabet: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=`,
    bitsPerChar: 6,
  }),
  dp = i({ base256emoji: () => _p }),
  fp = Array.from(
    `🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂`
  ),
  pp = fp.reduce((e, t, n) => ((e[n] = t), e), []),
  mp = fp.reduce((e, t, n) => ((e[t.codePointAt(0)] = n), e), []);
function hp(e) {
  return e.reduce((e, t) => ((e += pp[t]), e), ``);
}
function gp(e) {
  let t = [];
  for (let n of e) {
    let e = mp[n.codePointAt(0)];
    if (e === void 0) throw Error(`Non-base256emoji character: ${n}`);
    t.push(e);
  }
  return new Uint8Array(t);
}
var _p = Of({ prefix: `🚀`, name: `base256emoji`, encode: hp, decode: gp }),
  vp = Sp,
  yp = 128,
  bp = -128,
  xp = 2 ** 31;
function Sp(e, t, n) {
  (t ||= []), (n ||= 0);
  for (var r = n; e >= xp; ) (t[n++] = (e & 255) | yp), (e /= 128);
  for (; e & bp; ) (t[n++] = (e & 255) | yp), (e >>>= 7);
  return (t[n] = e | 0), (Sp.bytes = n - r + 1), t;
}
var Cp = Ep,
  wp = 128,
  Tp = 127;
function Ep(e, t) {
  var n = 0,
    t = t || 0,
    r = 0,
    i = t,
    a,
    o = e.length;
  do {
    if (i >= o) throw ((Ep.bytes = 0), RangeError(`Could not decode varint`));
    (a = e[i++]), (n += r < 28 ? (a & Tp) << r : (a & Tp) * 2 ** r), (r += 7);
  } while (a >= wp);
  return (Ep.bytes = i - t), n;
}
var Dp = 128,
  Op = 2 ** 14,
  kp = 2 ** 21,
  Ap = 2 ** 28,
  jp = 2 ** 35,
  Mp = 2 ** 42,
  Np = 2 ** 49,
  Pp = 2 ** 56,
  Fp = 2 ** 63,
  Ip = {
    encode: vp,
    decode: Cp,
    encodingLength: function (e) {
      return e < Dp
        ? 1
        : e < Op
        ? 2
        : e < kp
        ? 3
        : e < Ap
        ? 4
        : e < jp
        ? 5
        : e < Mp
        ? 6
        : e < Np
        ? 7
        : e < Pp
        ? 8
        : e < Fp
        ? 9
        : 10;
    },
  },
  Lp = (e, t, n = 0) => (Ip.encode(e, t, n), t),
  Rp = (e) => Ip.encodingLength(e),
  zp = (e, t) => {
    let n = t.byteLength,
      r = Rp(e),
      i = r + Rp(n),
      a = new Uint8Array(i + n);
    return Lp(e, a, 0), Lp(n, a, r), a.set(t, i), new Bp(e, n, t, a);
  },
  Bp = class {
    constructor(e, t, n, r) {
      (this.code = e), (this.size = t), (this.digest = n), (this.bytes = r);
    }
  },
  Vp = ({ name: e, code: t, encode: n }) => new Hp(e, t, n),
  Hp = class {
    constructor(e, t, n) {
      (this.name = e), (this.code = t), (this.encode = n);
    }
    digest(e) {
      if (e instanceof Uint8Array) {
        let t = this.encode(e);
        return t instanceof Uint8Array
          ? zp(this.code, t)
          : t.then((e) => zp(this.code, e));
      }
      throw Error(`Unknown type, must be binary type`);
    }
  },
  Up = i({ sha256: () => Gp, sha512: () => Kp }),
  Wp = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)),
  Gp = Vp({ name: `sha2-256`, code: 18, encode: Wp(`SHA-256`) }),
  Kp = Vp({ name: `sha2-512`, code: 19, encode: Wp(`SHA-512`) }),
  qp = i({ identity: () => Zp }),
  Jp = 0,
  Yp = `identity`,
  Xp = bf,
  Zp = { code: Jp, name: Yp, encode: Xp, digest: (e) => zp(Jp, Xp(e)) };
new TextEncoder(), new TextDecoder();
var Qp = {
  ...Nf,
  ...Ff,
  ...Lf,
  ...zf,
  ...Vf,
  ...Wf,
  ...ep,
  ...rp,
  ...op,
  ...dp,
};
({ ...Up, ...qp });
function $p(e, t, n, r) {
  return {
    name: e,
    prefix: t,
    encoder: { name: e, prefix: t, encode: n },
    decoder: { decode: r },
  };
}
var em = $p(
    `utf8`,
    `u`,
    (e) => `u` + new TextDecoder(`utf8`).decode(e),
    (e) => new TextEncoder().encode(e.substring(1))
  ),
  tm = $p(
    `ascii`,
    `a`,
    (e) => {
      let t = `a`;
      for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
      return t;
    },
    (e) => {
      e = e.substring(1);
      let t = gf(e.length);
      for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
      return t;
    }
  ),
  nm = {
    utf8: em,
    "utf-8": em,
    hex: Qp.base16,
    latin1: tm,
    ascii: tm,
    binary: tm,
    ...Qp,
  };
function rm(e, t = `utf8`) {
  let n = nm[t];
  if (!n) throw Error(`Unsupported encoding "${t}"`);
  return (t === `utf8` || t === `utf-8`) &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? hf(globalThis.Buffer.from(e, `utf-8`))
    : n.decoder.decode(`${n.prefix}${e}`);
}
function im(e, t = `utf8`) {
  let n = nm[t];
  if (!n) throw Error(`Unsupported encoding "${t}"`);
  return (t === `utf8` || t === `utf-8`) &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString(
        `utf8`
      )
    : n.encoder.encode(e).substring(1);
}
var am = {
    waku: {
      publish: `waku_publish`,
      batchPublish: `waku_batchPublish`,
      subscribe: `waku_subscribe`,
      batchSubscribe: `waku_batchSubscribe`,
      subscription: `waku_subscription`,
      unsubscribe: `waku_unsubscribe`,
      batchUnsubscribe: `waku_batchUnsubscribe`,
      batchFetchMessages: `waku_batchFetchMessages`,
    },
    irn: {
      publish: `irn_publish`,
      batchPublish: `irn_batchPublish`,
      subscribe: `irn_subscribe`,
      batchSubscribe: `irn_batchSubscribe`,
      subscription: `irn_subscription`,
      unsubscribe: `irn_unsubscribe`,
      batchUnsubscribe: `irn_batchUnsubscribe`,
      batchFetchMessages: `irn_batchFetchMessages`,
    },
    iridium: {
      publish: `iridium_publish`,
      batchPublish: `iridium_batchPublish`,
      subscribe: `iridium_subscribe`,
      batchSubscribe: `iridium_batchSubscribe`,
      subscription: `iridium_subscription`,
      unsubscribe: `iridium_unsubscribe`,
      batchUnsubscribe: `iridium_batchUnsubscribe`,
      batchFetchMessages: `iridium_batchFetchMessages`,
    },
  },
  om = a((e, t) => {
    function n(e) {
      let t;
      if (e instanceof Uint8Array) t = e;
      else if (typeof e == `string`) t = new TextEncoder().encode(e);
      else throw Error(`Input must be an string, Buffer or Uint8Array`);
      return t;
    }
    function r(e) {
      return Array.prototype.map
        .call(e, function (e) {
          return (e < 16 ? `0` : ``) + e.toString(16);
        })
        .join(``);
    }
    function i(e) {
      return (4294967296 + e).toString(16).substring(1);
    }
    function a(e, t, n) {
      let r =
        `
` +
        e +
        ` = `;
      for (let a = 0; a < t.length; a += 2) {
        if (n === 32)
          (r += i(t[a]).toUpperCase()),
            (r += ` `),
            (r += i(t[a + 1]).toUpperCase());
        else if (n === 64)
          (r += i(t[a + 1]).toUpperCase()), (r += i(t[a]).toUpperCase());
        else throw Error(`Invalid size ` + n);
        a % 6 == 4
          ? (r +=
              `
` + Array(e.length + 4).join(` `))
          : a < t.length - 2 && (r += ` `);
      }
      console.log(r);
    }
    function o(e, t, n) {
      let r = new Date().getTime(),
        i = new Uint8Array(t);
      for (let e = 0; e < t; e++) i[e] = e % 256;
      let a = new Date().getTime();
      console.log(`Generated random input in ` + (a - r) + `ms`), (r = a);
      for (let a = 0; a < n; a++) {
        let n = e(i),
          a = new Date().getTime(),
          o = a - r;
        (r = a),
          console.log(`Hashed in ` + o + `ms: ` + n.substring(0, 20) + `...`),
          console.log(
            Math.round((t / (1 << 20) / (o / 1e3)) * 100) / 100 +
              ` MB PER SECOND`
          );
      }
    }
    t.exports = { normalizeInput: n, toHex: r, debugPrint: a, testSpeed: o };
  }),
  sm = a((e, t) => {
    var n = om();
    function r(e, t, n) {
      let r = e[t] + e[n],
        i = e[t + 1] + e[n + 1];
      r >= 4294967296 && i++, (e[t] = r), (e[t + 1] = i);
    }
    function i(e, t, n, r) {
      let i = e[t] + n;
      n < 0 && (i += 4294967296);
      let a = e[t + 1] + r;
      i >= 4294967296 && a++, (e[t] = i), (e[t + 1] = a);
    }
    function a(e, t) {
      return e[t] ^ (e[t + 1] << 8) ^ (e[t + 2] << 16) ^ (e[t + 3] << 24);
    }
    function o(e, t, n, a, o, s) {
      let c = u[o],
        d = u[o + 1],
        f = u[s],
        p = u[s + 1];
      r(l, e, t), i(l, e, c, d);
      let m = l[a] ^ l[e],
        h = l[a + 1] ^ l[e + 1];
      (l[a] = h),
        (l[a + 1] = m),
        r(l, n, a),
        (m = l[t] ^ l[n]),
        (h = l[t + 1] ^ l[n + 1]),
        (l[t] = (m >>> 24) ^ (h << 8)),
        (l[t + 1] = (h >>> 24) ^ (m << 8)),
        r(l, e, t),
        i(l, e, f, p),
        (m = l[a] ^ l[e]),
        (h = l[a + 1] ^ l[e + 1]),
        (l[a] = (m >>> 16) ^ (h << 16)),
        (l[a + 1] = (h >>> 16) ^ (m << 16)),
        r(l, n, a),
        (m = l[t] ^ l[n]),
        (h = l[t + 1] ^ l[n + 1]),
        (l[t] = (h >>> 31) ^ (m << 1)),
        (l[t + 1] = (m >>> 31) ^ (h << 1));
    }
    var s = new Uint32Array([
        4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242,
        1595750129, 2773480762, 2917565137, 1359893119, 725511199, 2600822924,
        4215389547, 528734635, 327033209, 1541459225,
      ]),
      c = new Uint8Array(
        [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9,
          15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10,
          14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0,
          15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6,
          10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4,
          10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4,
          8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10,
          2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6,
          7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0,
          2, 11, 7, 5, 3,
        ].map(function (e) {
          return e * 2;
        })
      ),
      l = new Uint32Array(32),
      u = new Uint32Array(32);
    function d(e, t) {
      let n = 0;
      for (n = 0; n < 16; n++) (l[n] = e.h[n]), (l[n + 16] = s[n]);
      for (
        l[24] ^= e.t,
          l[25] ^= e.t / 4294967296,
          t && ((l[28] = ~l[28]), (l[29] = ~l[29])),
          n = 0;
        n < 32;
        n++
      )
        u[n] = a(e.b, 4 * n);
      for (n = 0; n < 12; n++)
        o(0, 8, 16, 24, c[n * 16 + 0], c[n * 16 + 1]),
          o(2, 10, 18, 26, c[n * 16 + 2], c[n * 16 + 3]),
          o(4, 12, 20, 28, c[n * 16 + 4], c[n * 16 + 5]),
          o(6, 14, 22, 30, c[n * 16 + 6], c[n * 16 + 7]),
          o(0, 10, 20, 30, c[n * 16 + 8], c[n * 16 + 9]),
          o(2, 12, 22, 24, c[n * 16 + 10], c[n * 16 + 11]),
          o(4, 14, 16, 26, c[n * 16 + 12], c[n * 16 + 13]),
          o(6, 8, 18, 28, c[n * 16 + 14], c[n * 16 + 15]);
      for (n = 0; n < 16; n++) e.h[n] = e.h[n] ^ l[n] ^ l[n + 16];
    }
    var f = new Uint8Array([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
    function p(e, t, n, r) {
      if (e === 0 || e > 64)
        throw Error(`Illegal output length, expected 0 < length <= 64`);
      if (t && t.length > 64)
        throw Error(`Illegal key, expected Uint8Array with 0 < length <= 64`);
      if (n && n.length !== 16)
        throw Error(`Illegal salt, expected Uint8Array with length is 16`);
      if (r && r.length !== 16)
        throw Error(`Illegal personal, expected Uint8Array with length is 16`);
      let i = {
        b: new Uint8Array(128),
        h: new Uint32Array(16),
        t: 0,
        c: 0,
        outlen: e,
      };
      f.fill(0),
        (f[0] = e),
        t && (f[1] = t.length),
        (f[2] = 1),
        (f[3] = 1),
        n && f.set(n, 32),
        r && f.set(r, 48);
      for (let e = 0; e < 16; e++) i.h[e] = s[e] ^ a(f, e * 4);
      return t && (m(i, t), (i.c = 128)), i;
    }
    function m(e, t) {
      for (let n = 0; n < t.length; n++)
        e.c === 128 && ((e.t += e.c), d(e, !1), (e.c = 0)), (e.b[e.c++] = t[n]);
    }
    function h(e) {
      for (e.t += e.c; e.c < 128; ) e.b[e.c++] = 0;
      d(e, !0);
      let t = new Uint8Array(e.outlen);
      for (let n = 0; n < e.outlen; n++) t[n] = e.h[n >> 2] >> (8 * (n & 3));
      return t;
    }
    function g(e, t, r, i, a) {
      (r ||= 64),
        (e = n.normalizeInput(e)),
        (i &&= n.normalizeInput(i)),
        (a &&= n.normalizeInput(a));
      let o = p(r, t, i, a);
      return m(o, e), h(o);
    }
    function _(e, t, r, i, a) {
      let o = g(e, t, r, i, a);
      return n.toHex(o);
    }
    t.exports = {
      blake2b: g,
      blake2bHex: _,
      blake2bInit: p,
      blake2bUpdate: m,
      blake2bFinal: h,
    };
  }),
  cm = a((e, t) => {
    var n = om();
    function r(e, t) {
      return e[t] ^ (e[t + 1] << 8) ^ (e[t + 2] << 16) ^ (e[t + 3] << 24);
    }
    function i(e, t, n, r, i, o) {
      (c[e] = c[e] + c[t] + i),
        (c[r] = a(c[r] ^ c[e], 16)),
        (c[n] = c[n] + c[r]),
        (c[t] = a(c[t] ^ c[n], 12)),
        (c[e] = c[e] + c[t] + o),
        (c[r] = a(c[r] ^ c[e], 8)),
        (c[n] = c[n] + c[r]),
        (c[t] = a(c[t] ^ c[n], 7));
    }
    function a(e, t) {
      return (e >>> t) ^ (e << (32 - t));
    }
    var o = new Uint32Array([
        1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
        528734635, 1541459225,
      ]),
      s = new Uint8Array([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9,
        15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14,
        3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8,
        9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0,
        11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7,
        6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10,
        6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6,
        1, 5, 15, 11, 9, 14, 3, 12, 13, 0,
      ]),
      c = new Uint32Array(16),
      l = new Uint32Array(16);
    function u(e, t) {
      let n = 0;
      for (n = 0; n < 8; n++) (c[n] = e.h[n]), (c[n + 8] = o[n]);
      for (
        c[12] ^= e.t, c[13] ^= e.t / 4294967296, t && (c[14] = ~c[14]), n = 0;
        n < 16;
        n++
      )
        l[n] = r(e.b, 4 * n);
      for (n = 0; n < 10; n++)
        i(0, 4, 8, 12, l[s[n * 16 + 0]], l[s[n * 16 + 1]]),
          i(1, 5, 9, 13, l[s[n * 16 + 2]], l[s[n * 16 + 3]]),
          i(2, 6, 10, 14, l[s[n * 16 + 4]], l[s[n * 16 + 5]]),
          i(3, 7, 11, 15, l[s[n * 16 + 6]], l[s[n * 16 + 7]]),
          i(0, 5, 10, 15, l[s[n * 16 + 8]], l[s[n * 16 + 9]]),
          i(1, 6, 11, 12, l[s[n * 16 + 10]], l[s[n * 16 + 11]]),
          i(2, 7, 8, 13, l[s[n * 16 + 12]], l[s[n * 16 + 13]]),
          i(3, 4, 9, 14, l[s[n * 16 + 14]], l[s[n * 16 + 15]]);
      for (n = 0; n < 8; n++) e.h[n] ^= c[n] ^ c[n + 8];
    }
    function d(e, t) {
      if (!(e > 0 && e <= 32))
        throw Error(`Incorrect output length, should be in [1, 32]`);
      let n = t ? t.length : 0;
      if (t && !(n > 0 && n <= 32))
        throw Error(`Incorrect key length, should be in [1, 32]`);
      let r = {
        h: new Uint32Array(o),
        b: new Uint8Array(64),
        c: 0,
        t: 0,
        outlen: e,
      };
      return (
        (r.h[0] ^= 16842752 ^ (n << 8) ^ e), n > 0 && (f(r, t), (r.c = 64)), r
      );
    }
    function f(e, t) {
      for (let n = 0; n < t.length; n++)
        e.c === 64 && ((e.t += e.c), u(e, !1), (e.c = 0)), (e.b[e.c++] = t[n]);
    }
    function p(e) {
      for (e.t += e.c; e.c < 64; ) e.b[e.c++] = 0;
      u(e, !0);
      let t = new Uint8Array(e.outlen);
      for (let n = 0; n < e.outlen; n++)
        t[n] = (e.h[n >> 2] >> (8 * (n & 3))) & 255;
      return t;
    }
    function m(e, t, r) {
      (r ||= 32), (e = n.normalizeInput(e));
      let i = d(r, t);
      return f(i, e), p(i);
    }
    function h(e, t, r) {
      let i = m(e, t, r);
      return n.toHex(i);
    }
    t.exports = {
      blake2s: m,
      blake2sHex: h,
      blake2sInit: d,
      blake2sUpdate: f,
      blake2sFinal: p,
    };
  }),
  lm = a((e, t) => {
    var n = sm(),
      r = cm();
    t.exports = {
      blake2b: n.blake2b,
      blake2bHex: n.blake2bHex,
      blake2bInit: n.blake2bInit,
      blake2bUpdate: n.blake2bUpdate,
      blake2bFinal: n.blake2bFinal,
      blake2s: r.blake2s,
      blake2sHex: r.blake2sHex,
      blake2sInit: r.blake2sInit,
      blake2sUpdate: r.blake2sUpdate,
      blake2sFinal: r.blake2sFinal,
    };
  })(),
  um = `:`;
function dm(e) {
  let [t, n] = e.split(um);
  return { namespace: t, reference: n };
}
function fm(e, t) {
  return e.includes(`:`) ? [e] : t.chains || [];
}
var pm = {
    INVALID_METHOD: { message: `Invalid method.`, code: 1001 },
    INVALID_EVENT: { message: `Invalid event.`, code: 1002 },
    INVALID_UPDATE_REQUEST: { message: `Invalid update request.`, code: 1003 },
    INVALID_EXTEND_REQUEST: { message: `Invalid extend request.`, code: 1004 },
    INVALID_SESSION_SETTLE_REQUEST: {
      message: `Invalid session settle request.`,
      code: 1005,
    },
    UNAUTHORIZED_METHOD: { message: `Unauthorized method.`, code: 3001 },
    UNAUTHORIZED_EVENT: { message: `Unauthorized event.`, code: 3002 },
    UNAUTHORIZED_UPDATE_REQUEST: {
      message: `Unauthorized update request.`,
      code: 3003,
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
      message: `Unauthorized extend request.`,
      code: 3004,
    },
    USER_REJECTED: { message: `User rejected.`, code: 5e3 },
    USER_REJECTED_CHAINS: { message: `User rejected chains.`, code: 5001 },
    USER_REJECTED_METHODS: { message: `User rejected methods.`, code: 5002 },
    USER_REJECTED_EVENTS: { message: `User rejected events.`, code: 5003 },
    UNSUPPORTED_CHAINS: { message: `Unsupported chains.`, code: 5100 },
    UNSUPPORTED_METHODS: { message: `Unsupported methods.`, code: 5101 },
    UNSUPPORTED_EVENTS: { message: `Unsupported events.`, code: 5102 },
    UNSUPPORTED_ACCOUNTS: { message: `Unsupported accounts.`, code: 5103 },
    UNSUPPORTED_NAMESPACE_KEY: {
      message: `Unsupported namespace key.`,
      code: 5104,
    },
    USER_DISCONNECTED: { message: `User disconnected.`, code: 6e3 },
    SESSION_SETTLEMENT_FAILED: {
      message: `Session settlement failed.`,
      code: 7e3,
    },
    WC_METHOD_UNSUPPORTED: { message: `Unsupported wc_ method.`, code: 10001 },
  },
  mm = {
    NOT_INITIALIZED: { message: `Not initialized.`, code: 1 },
    NO_MATCHING_KEY: { message: `No matching key.`, code: 2 },
    RESTORE_WILL_OVERRIDE: { message: `Restore will override.`, code: 3 },
    RESUBSCRIBED: { message: `Resubscribed.`, code: 4 },
    MISSING_OR_INVALID: { message: `Missing or invalid.`, code: 5 },
    EXPIRED: { message: `Expired.`, code: 6 },
    UNKNOWN_TYPE: { message: `Unknown type.`, code: 7 },
    MISMATCHED_TOPIC: { message: `Mismatched topic.`, code: 8 },
    NON_CONFORMING_NAMESPACES: {
      message: `Non conforming namespaces.`,
      code: 9,
    },
  };
function V(e, t) {
  let { message: n, code: r } = mm[e];
  return { message: t ? `${n} ${t}` : n, code: r };
}
function H(e, t) {
  let { message: n, code: r } = pm[e];
  return { message: t ? `${n} ${t}` : n, code: r };
}
var hm = Object.defineProperty,
  gm = Object.defineProperties,
  _m = Object.getOwnPropertyDescriptors,
  vm = Object.getOwnPropertySymbols,
  ym = Object.prototype.hasOwnProperty,
  bm = Object.prototype.propertyIsEnumerable,
  xm = (e, t, n) =>
    t in e
      ? hm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Sm = (e, t) => {
    for (var n in (t ||= {})) ym.call(t, n) && xm(e, n, t[n]);
    if (vm) for (var n of vm(t)) bm.call(t, n) && xm(e, n, t[n]);
    return e;
  },
  Cm = (e, t) => gm(e, _m(t)),
  wm = (e, t, n) => xm(e, typeof t == `symbol` ? t : t + ``, n),
  Tm = {
    reactNative: `react-native`,
    node: `node`,
    browser: `browser`,
    unknown: `unknown`,
  };
function Em() {
  return (
    typeof process < `u` &&
    typeof process.versions < `u` &&
    typeof process.versions.node < `u`
  );
}
function Dm() {
  return (
    !(0, pf.getDocument)() &&
    !!(0, pf.getNavigator)() &&
    navigator.product === `ReactNative`
  );
}
function Om() {
  return (
    Dm() &&
    typeof global < `u` &&
    typeof (global == null ? void 0 : global.Platform) < `u` &&
    (global == null ? void 0 : global.Platform.OS) === `android`
  );
}
function km() {
  return (
    Dm() &&
    typeof global < `u` &&
    typeof (global == null ? void 0 : global.Platform) < `u` &&
    (global == null ? void 0 : global.Platform.OS) === `ios`
  );
}
function Am() {
  return !Em() && !!(0, pf.getNavigator)() && !!(0, pf.getDocument)();
}
function jm() {
  return Dm()
    ? Tm.reactNative
    : Em()
    ? Tm.node
    : Am()
    ? Tm.browser
    : Tm.unknown;
}
function Mm() {
  try {
    return Dm() &&
      typeof global < `u` &&
      typeof (global == null ? void 0 : global.Application) < `u`
      ? global.Application?.applicationId
      : void 0;
  } catch {
    return;
  }
}
function Nm(e, t) {
  let n = new URLSearchParams(e);
  return (
    Object.entries(t)
      .sort(([e], [t]) => e.localeCompare(t))
      .forEach(([e, t]) => {
        t != null && n.set(e, String(t));
      }),
    n.toString()
  );
}
function Pm(e) {
  var t, n;
  let r = Fm();
  try {
    return (
      e != null &&
        e.url &&
        r.url &&
        new URL(e.url).host !== new URL(r.url).host &&
        (console.warn(
          `The configured WalletConnect 'metadata.url':${e.url} differs from the actual page url:${r.url}. This is probably unintended and can lead to issues.`
        ),
        (e.url = r.url)),
      (t = e?.icons) != null &&
        t.length &&
        e.icons.length > 0 &&
        (e.icons = e.icons.filter((e) => e !== ``)),
      Cm(Sm(Sm({}, r), e), {
        url: e?.url || r.url,
        name: e?.name || r.name,
        description: e?.description || r.description,
        icons:
          (n = e?.icons) != null && n.length && e.icons.length > 0
            ? e.icons
            : r.icons,
      })
    );
  } catch (t) {
    return console.warn(`Error populating app metadata`, t), e || r;
  }
}
function Fm() {
  return (
    (0, mf.getWindowMetadata)() || {
      name: ``,
      description: ``,
      url: ``,
      icons: [``],
    }
  );
}
function Im() {
  if (
    jm() === Tm.reactNative &&
    typeof global < `u` &&
    typeof (global == null ? void 0 : global.Platform) < `u`
  ) {
    let { OS: e, Version: t } = global.Platform;
    return [e, t].join(`-`);
  }
  let e = pc();
  if (e === null) return `unknown`;
  let t = e.os ? e.os.replace(` `, ``).toLowerCase() : `unknown`;
  return e.type === `browser`
    ? [t, e.name, e.version].join(`-`)
    : [t, e.version].join(`-`);
}
function Lm() {
  let e = jm();
  return e === Tm.browser
    ? [e, (0, pf.getLocation)()?.host || `unknown`].join(`:`)
    : e;
}
function Rm(e, t, n) {
  let r = Im(),
    i = Lm();
  return [[e, t].join(`-`), [`js`, n].join(`-`), r, i].join(`/`);
}
function zm({
  protocol: e,
  version: t,
  relayUrl: n,
  sdkVersion: r,
  auth: i,
  projectId: a,
  useOnCloseEvent: o,
  bundleId: s,
  packageName: c,
}) {
  let l = n.split(`?`),
    u = {
      auth: i,
      ua: Rm(e, t, r),
      projectId: a,
      useOnCloseEvent: o || void 0,
      packageName: c || void 0,
      bundleId: s || void 0,
    },
    d = Nm(l[1] || ``, u);
  return l[0] + `?` + d;
}
function Bm(e, t) {
  return e.filter((e) => t.includes(e)).length === e.length;
}
function Vm(e) {
  return Object.fromEntries(e.entries());
}
function Hm(e) {
  return new Map(Object.entries(e));
}
function Um(e = z.FIVE_MINUTES, t) {
  let n = (0, z.toMiliseconds)(e || z.FIVE_MINUTES),
    r,
    i,
    a,
    o;
  return {
    resolve: (e) => {
      a && r && (clearTimeout(a), r(e), (o = Promise.resolve(e)));
    },
    reject: (e) => {
      a && i && (clearTimeout(a), i(e));
    },
    done: () =>
      new Promise((e, s) => {
        if (o) return e(o);
        (a = setTimeout(() => {
          let e = V(`EXPIRED`),
            n = Error(t || e.message);
          (n.code = e.code), s(n);
        }, n)),
          (r = e),
          (i = s);
      }),
  };
}
function Wm(e, t, n) {
  return new Promise(async (r, i) => {
    let a = setTimeout(() => i(Error(n)), t);
    try {
      r(await e);
    } catch (e) {
      i(e);
    }
    clearTimeout(a);
  });
}
function Gm(e, t) {
  if (typeof t == `string` && t.startsWith(`${e}:`)) return t;
  if (e.toLowerCase() === `topic`) {
    if (typeof t != `string`)
      throw Error(`Value must be "string" for expirer target type: topic`);
    return `topic:${t}`;
  }
  if (e.toLowerCase() === `id`) {
    if (typeof t != `number`)
      throw Error(`Value must be "number" for expirer target type: id`);
    return `id:${t}`;
  }
  throw Error(`Unknown expirer target type: ${e}`);
}
function Km(e) {
  return Gm(`topic`, e);
}
function qm(e) {
  return Gm(`id`, e);
}
function Jm(e) {
  let [t, n] = e.split(`:`),
    r = { id: void 0, topic: void 0 };
  if (t === `topic` && typeof n == `string`) r.topic = n;
  else if (t === `id` && Number.isInteger(Number(n))) r.id = Number(n);
  else
    throw Error(
      `Invalid target, expected id:number or topic:string, got ${t}:${n}`
    );
  return r;
}
function Ym(e, t) {
  return (0, z.fromMiliseconds)((t || Date.now()) + (0, z.toMiliseconds)(e));
}
function Xm(e) {
  return Date.now() >= (0, z.toMiliseconds)(e);
}
function U(e, t) {
  return `${e}${t ? `:${t}` : ``}`;
}
function Zm(e = [], t = []) {
  return [...new Set([...e, ...t])];
}
async function Qm({ id: e, topic: t, wcDeepLink: n }) {
  var r;
  try {
    if (!n) return;
    let i = (typeof n == `string` ? JSON.parse(n) : n)?.href;
    if (typeof i != `string`) return;
    let a = $m(i, e, t),
      o = jm();
    if (o === Tm.browser) {
      if (!((r = (0, pf.getDocument)()) != null && r.hasFocus())) {
        console.warn(`Document does not have focus, skipping deeplink.`);
        return;
      }
      eh(a);
    } else
      o === Tm.reactNative &&
        typeof (global == null ? void 0 : global.Linking) < `u` &&
        (await global.Linking.openURL(a));
  } catch (e) {
    console.error(e);
  }
}
function $m(e, t, n) {
  let r = `requestId=${t}&sessionTopic=${n}`;
  e.endsWith(`/`) && (e = e.slice(0, -1));
  let i = `${e}`;
  if (e.startsWith(`https://t.me`)) {
    let t = e.includes(`?`) ? `&startapp=` : `?startapp=`;
    i = `${i}${t}${sh(r, !0)}`;
  } else i = `${i}/wc?${r}`;
  return i;
}
function eh(e) {
  let t = `_self`;
  oh()
    ? (t = `_top`)
    : (ah() || e.startsWith(`https://`) || e.startsWith(`http://`)) &&
      (t = `_blank`),
    window.open(e, t, `noreferrer noopener`);
}
async function th(e, t) {
  let n = ``;
  try {
    if (Am() && ((n = localStorage.getItem(t)), n)) return n;
    n = await e.getItem(t);
  } catch (e) {
    console.error(e);
  }
  return n;
}
function nh(e, t) {
  if (!e.includes(t)) return null;
  let n = e.split(/([&,?,=])/);
  return n[n.indexOf(t) + 2];
}
function rh() {
  return typeof crypto < `u` && crypto != null && crypto.randomUUID
    ? crypto.randomUUID()
    : `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/gu, (e) => {
        let t = (Math.random() * 16) | 0;
        return (e === `x` ? t : (t & 3) | 8).toString(16);
      });
}
function ih() {
  return typeof process < `u` && {}.IS_VITEST === `true`;
}
function ah() {
  return (
    typeof window < `u` &&
    (!!window.TelegramWebviewProxy ||
      !!window.Telegram ||
      !!window.TelegramWebviewProxyProto)
  );
}
function oh() {
  try {
    return window.self !== window.top;
  } catch {
    return !1;
  }
}
function sh(e, t = !1) {
  let n = Buffer.from(e).toString(`base64`);
  return t ? n.replace(/[=]/g, ``) : n;
}
function ch(e) {
  return Buffer.from(e, `base64`).toString(`utf-8`);
}
function lh(e) {
  return new Promise((t) => setTimeout(t, e));
}
var uh = class {
    constructor({ limit: e }) {
      wm(this, `limit`),
        wm(this, `set`),
        (this.limit = e),
        (this.set = new Set());
    }
    add(e) {
      if (!this.set.has(e)) {
        if (this.set.size >= this.limit) {
          let e = this.set.values().next().value;
          e && this.set.delete(e);
        }
        this.set.add(e);
      }
    }
    has(e) {
      return this.set.has(e);
    }
  },
  dh = BigInt(2 ** 32 - 1),
  fh = BigInt(32);
function ph(e, t = !1) {
  return t
    ? { h: Number(e & dh), l: Number((e >> fh) & dh) }
    : { h: Number((e >> fh) & dh) | 0, l: Number(e & dh) | 0 };
}
function mh(e, t = !1) {
  let n = e.length,
    r = new Uint32Array(n),
    i = new Uint32Array(n);
  for (let a = 0; a < n; a++) {
    let { h: n, l: o } = ph(e[a], t);
    [r[a], i[a]] = [n, o];
  }
  return [r, i];
}
var hh = (e, t, n) => e >>> n,
  gh = (e, t, n) => (e << (32 - n)) | (t >>> n),
  _h = (e, t, n) => (e >>> n) | (t << (32 - n)),
  vh = (e, t, n) => (e << (32 - n)) | (t >>> n),
  yh = (e, t, n) => (e << (64 - n)) | (t >>> (n - 32)),
  bh = (e, t, n) => (e >>> (n - 32)) | (t << (64 - n)),
  xh = (e, t) => t,
  Sh = (e, t) => e,
  Ch = (e, t, n) => (e << n) | (t >>> (32 - n)),
  wh = (e, t, n) => (t << n) | (e >>> (32 - n)),
  Th = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n)),
  Eh = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
function Dh(e, t, n, r) {
  let i = (t >>> 0) + (r >>> 0);
  return { h: (e + n + ((i / 2 ** 32) | 0)) | 0, l: i | 0 };
}
var Oh = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0),
  kh = (e, t, n, r) => (t + n + r + ((e / 2 ** 32) | 0)) | 0,
  Ah = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0),
  jh = (e, t, n, r, i) => (t + n + r + i + ((e / 2 ** 32) | 0)) | 0,
  Mh = (e, t, n, r, i) =>
    (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0),
  Nh = (e, t, n, r, i, a) => (t + n + r + i + a + ((e / 2 ** 32) | 0)) | 0,
  Ph =
    typeof globalThis == `object` && `crypto` in globalThis
      ? globalThis.crypto
      : void 0;
function Fh(e) {
  return (
    e instanceof Uint8Array ||
    (ArrayBuffer.isView(e) && e.constructor.name === `Uint8Array`)
  );
}
function Ih(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw Error(`positive integer expected, got ` + e);
}
function Lh(e, ...t) {
  if (!Fh(e)) throw Error(`Uint8Array expected`);
  if (t.length > 0 && !t.includes(e.length))
    throw Error(
      `Uint8Array expected of length ` + t + `, got length=` + e.length
    );
}
function Rh(e) {
  if (typeof e != `function` || typeof e.create != `function`)
    throw Error(`Hash should be wrapped by utils.createHasher`);
  Ih(e.outputLen), Ih(e.blockLen);
}
function zh(e, t = !0) {
  if (e.destroyed) throw Error(`Hash instance has been destroyed`);
  if (t && e.finished) throw Error(`Hash#digest() has already been called`);
}
function Bh(e, t) {
  Lh(e);
  let n = t.outputLen;
  if (e.length < n)
    throw Error(`digestInto() expects output buffer of length at least ` + n);
}
function Vh(e) {
  return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
}
function Hh(...e) {
  for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function Uh(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function Wh(e, t) {
  return (e << (32 - t)) | (e >>> t);
}
var Gh = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function Kh(e) {
  return (
    ((e << 24) & 4278190080) |
    ((e << 8) & 16711680) |
    ((e >>> 8) & 65280) |
    ((e >>> 24) & 255)
  );
}
var qh = Gh ? (e) => e : (e) => Kh(e);
function Jh(e) {
  for (let t = 0; t < e.length; t++) e[t] = Kh(e[t]);
  return e;
}
var Yh = Gh ? (e) => e : Jh,
  Xh =
    typeof Uint8Array.from([]).toHex == `function` &&
    typeof Uint8Array.fromHex == `function`,
  Zh = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, `0`));
function Qh(e) {
  if ((Lh(e), Xh)) return e.toHex();
  let t = ``;
  for (let n = 0; n < e.length; n++) t += Zh[e[n]];
  return t;
}
var $h = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function eg(e) {
  if (e >= $h._0 && e <= $h._9) return e - $h._0;
  if (e >= $h.A && e <= $h.F) return e - ($h.A - 10);
  if (e >= $h.a && e <= $h.f) return e - ($h.a - 10);
}
function tg(e) {
  if (typeof e != `string`) throw Error(`hex string expected, got ` + typeof e);
  if (Xh) return Uint8Array.fromHex(e);
  let t = e.length,
    n = t / 2;
  if (t % 2)
    throw Error(`hex string expected, got unpadded hex of length ` + t);
  let r = new Uint8Array(n);
  for (let t = 0, i = 0; t < n; t++, i += 2) {
    let n = eg(e.charCodeAt(i)),
      a = eg(e.charCodeAt(i + 1));
    if (n === void 0 || a === void 0) {
      let t = e[i] + e[i + 1];
      throw Error(
        `hex string expected, got non-hex character "` + t + `" at index ` + i
      );
    }
    r[t] = n * 16 + a;
  }
  return r;
}
function ng(e) {
  if (typeof e != `string`) throw Error(`string expected`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function rg(e) {
  return typeof e == `string` && (e = ng(e)), Lh(e), e;
}
function ig(...e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    Lh(r), (t += r.length);
  }
  let n = new Uint8Array(t);
  for (let t = 0, r = 0; t < e.length; t++) {
    let i = e[t];
    n.set(i, r), (r += i.length);
  }
  return n;
}
var ag = class {};
function og(e) {
  let t = (t) => e().update(rg(t)).digest(),
    n = e();
  return (
    (t.outputLen = n.outputLen),
    (t.blockLen = n.blockLen),
    (t.create = () => e()),
    t
  );
}
function sg(e) {
  let t = (t, n) => e(n).update(rg(t)).digest(),
    n = e({});
  return (
    (t.outputLen = n.outputLen),
    (t.blockLen = n.blockLen),
    (t.create = (t) => e(t)),
    t
  );
}
function cg(e = 32) {
  if (Ph && typeof Ph.getRandomValues == `function`)
    return Ph.getRandomValues(new Uint8Array(e));
  if (Ph && typeof Ph.randomBytes == `function`)
    return Uint8Array.from(Ph.randomBytes(e));
  throw Error(`crypto.getRandomValues must be defined`);
}
var lg = BigInt(0),
  ug = BigInt(1),
  dg = BigInt(2),
  fg = BigInt(7),
  pg = BigInt(256),
  mg = BigInt(113),
  hg = [],
  gg = [],
  _g = [];
for (let e = 0, t = ug, n = 1, r = 0; e < 24; e++) {
  ([n, r] = [r, (2 * n + 3 * r) % 5]),
    hg.push(2 * (5 * r + n)),
    gg.push((((e + 1) * (e + 2)) / 2) % 64);
  let i = lg;
  for (let e = 0; e < 7; e++)
    (t = ((t << ug) ^ ((t >> fg) * mg)) % pg),
      t & dg && (i ^= ug << ((ug << BigInt(e)) - ug));
  _g.push(i);
}
var vg = mh(_g, !0),
  yg = vg[0],
  bg = vg[1],
  xg = (e, t, n) => (n > 32 ? Th(e, t, n) : Ch(e, t, n)),
  Sg = (e, t, n) => (n > 32 ? Eh(e, t, n) : wh(e, t, n));
function Cg(e, t = 24) {
  let n = new Uint32Array(10);
  for (let r = 24 - t; r < 24; r++) {
    for (let t = 0; t < 10; t++)
      n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
    for (let t = 0; t < 10; t += 2) {
      let r = (t + 8) % 10,
        i = (t + 2) % 10,
        a = n[i],
        o = n[i + 1],
        s = xg(a, o, 1) ^ n[r],
        c = Sg(a, o, 1) ^ n[r + 1];
      for (let n = 0; n < 50; n += 10) (e[t + n] ^= s), (e[t + n + 1] ^= c);
    }
    let t = e[2],
      i = e[3];
    for (let n = 0; n < 24; n++) {
      let r = gg[n],
        a = xg(t, i, r),
        o = Sg(t, i, r),
        s = hg[n];
      (t = e[s]), (i = e[s + 1]), (e[s] = a), (e[s + 1] = o);
    }
    for (let t = 0; t < 50; t += 10) {
      for (let r = 0; r < 10; r++) n[r] = e[t + r];
      for (let r = 0; r < 10; r++)
        e[t + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10];
    }
    (e[0] ^= yg[r]), (e[1] ^= bg[r]);
  }
  Hh(n);
}
var wg = class e extends ag {
    constructor(e, t, n, r = !1, i = 24) {
      if (
        (super(),
        (this.pos = 0),
        (this.posOut = 0),
        (this.finished = !1),
        (this.destroyed = !1),
        (this.enableXOF = !1),
        (this.blockLen = e),
        (this.suffix = t),
        (this.outputLen = n),
        (this.enableXOF = r),
        (this.rounds = i),
        Ih(n),
        !(0 < e && e < 200))
      )
        throw Error(`only keccak-f1600 function is supported`);
      (this.state = new Uint8Array(200)), (this.state32 = Vh(this.state));
    }
    clone() {
      return this._cloneInto();
    }
    keccak() {
      Yh(this.state32),
        Cg(this.state32, this.rounds),
        Yh(this.state32),
        (this.posOut = 0),
        (this.pos = 0);
    }
    update(e) {
      zh(this), (e = rg(e)), Lh(e);
      let { blockLen: t, state: n } = this,
        r = e.length;
      for (let i = 0; i < r; ) {
        let a = Math.min(t - this.pos, r - i);
        for (let t = 0; t < a; t++) n[this.pos++] ^= e[i++];
        this.pos === t && this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished) return;
      this.finished = !0;
      let { state: e, suffix: t, pos: n, blockLen: r } = this;
      (e[n] ^= t),
        t & 128 && n === r - 1 && this.keccak(),
        (e[r - 1] ^= 128),
        this.keccak();
    }
    writeInto(e) {
      zh(this, !1), Lh(e), this.finish();
      let t = this.state,
        { blockLen: n } = this;
      for (let r = 0, i = e.length; r < i; ) {
        this.posOut >= n && this.keccak();
        let a = Math.min(n - this.posOut, i - r);
        e.set(t.subarray(this.posOut, this.posOut + a), r),
          (this.posOut += a),
          (r += a);
      }
      return e;
    }
    xofInto(e) {
      if (!this.enableXOF) throw Error(`XOF is not possible for this instance`);
      return this.writeInto(e);
    }
    xof(e) {
      return Ih(e), this.xofInto(new Uint8Array(e));
    }
    digestInto(e) {
      if ((Bh(e, this), this.finished))
        throw Error(`digest() was already called`);
      return this.writeInto(e), this.destroy(), e;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      (this.destroyed = !0), Hh(this.state);
    }
    _cloneInto(t) {
      let {
        blockLen: n,
        suffix: r,
        outputLen: i,
        rounds: a,
        enableXOF: o,
      } = this;
      return (
        (t ||= new e(n, r, i, o, a)),
        t.state32.set(this.state32),
        (t.pos = this.pos),
        (t.posOut = this.posOut),
        (t.finished = this.finished),
        (t.rounds = a),
        (t.suffix = r),
        (t.outputLen = i),
        (t.enableXOF = o),
        (t.destroyed = this.destroyed),
        t
      );
    }
  },
  Tg = ((e, t, n) => og(() => new wg(t, e, n)))(1, 136, 32);
function Eg(e, t, n, r) {
  if (typeof e.setBigUint64 == `function`) return e.setBigUint64(t, n, r);
  let i = BigInt(32),
    a = BigInt(4294967295),
    o = Number((n >> i) & a),
    s = Number(n & a),
    c = r ? 4 : 0,
    l = r ? 0 : 4;
  e.setUint32(t + c, o, r), e.setUint32(t + l, s, r);
}
function Dg(e, t, n) {
  return (e & t) ^ (~e & n);
}
function Og(e, t, n) {
  return (e & t) ^ (e & n) ^ (t & n);
}
var kg = class extends ag {
    constructor(e, t, n, r) {
      super(),
        (this.finished = !1),
        (this.length = 0),
        (this.pos = 0),
        (this.destroyed = !1),
        (this.blockLen = e),
        (this.outputLen = t),
        (this.padOffset = n),
        (this.isLE = r),
        (this.buffer = new Uint8Array(e)),
        (this.view = Uh(this.buffer));
    }
    update(e) {
      zh(this), (e = rg(e)), Lh(e);
      let { view: t, buffer: n, blockLen: r } = this,
        i = e.length;
      for (let a = 0; a < i; ) {
        let o = Math.min(r - this.pos, i - a);
        if (o === r) {
          let t = Uh(e);
          for (; r <= i - a; a += r) this.process(t, a);
          continue;
        }
        n.set(e.subarray(a, a + o), this.pos),
          (this.pos += o),
          (a += o),
          this.pos === r && (this.process(t, 0), (this.pos = 0));
      }
      return (this.length += e.length), this.roundClean(), this;
    }
    digestInto(e) {
      zh(this), Bh(e, this), (this.finished = !0);
      let { buffer: t, view: n, blockLen: r, isLE: i } = this,
        { pos: a } = this;
      (t[a++] = 128),
        Hh(this.buffer.subarray(a)),
        this.padOffset > r - a && (this.process(n, 0), (a = 0));
      for (let e = a; e < r; e++) t[e] = 0;
      Eg(n, r - 8, BigInt(this.length * 8), i), this.process(n, 0);
      let o = Uh(e),
        s = this.outputLen;
      if (s % 4) throw Error(`_sha2: outputLen should be aligned to 32bit`);
      let c = s / 4,
        l = this.get();
      if (c > l.length) throw Error(`_sha2: outputLen bigger than state`);
      for (let e = 0; e < c; e++) o.setUint32(4 * e, l[e], i);
    }
    digest() {
      let { buffer: e, outputLen: t } = this;
      this.digestInto(e);
      let n = e.slice(0, t);
      return this.destroy(), n;
    }
    _cloneInto(e) {
      (e ||= new this.constructor()), e.set(...this.get());
      let {
        blockLen: t,
        buffer: n,
        length: r,
        finished: i,
        destroyed: a,
        pos: o,
      } = this;
      return (
        (e.destroyed = a),
        (e.finished = i),
        (e.length = r),
        (e.pos = o),
        r % t && e.buffer.set(n),
        e
      );
    }
    clone() {
      return this._cloneInto();
    }
  },
  Ag = Uint32Array.from([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ]),
  jg = Uint32Array.from([
    3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999,
    355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025,
    3675008525, 1694076839, 1203062813, 3204075428,
  ]),
  Mg = Uint32Array.from([
    1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723,
    2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199,
    528734635, 4215389547, 1541459225, 327033209,
  ]),
  Ng = Uint32Array.from([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ]),
  Pg = new Uint32Array(64),
  Fg = class extends kg {
    constructor(e = 32) {
      super(64, e, 8, !1),
        (this.A = Ag[0] | 0),
        (this.B = Ag[1] | 0),
        (this.C = Ag[2] | 0),
        (this.D = Ag[3] | 0),
        (this.E = Ag[4] | 0),
        (this.F = Ag[5] | 0),
        (this.G = Ag[6] | 0),
        (this.H = Ag[7] | 0);
    }
    get() {
      let { A: e, B: t, C: n, D: r, E: i, F: a, G: o, H: s } = this;
      return [e, t, n, r, i, a, o, s];
    }
    set(e, t, n, r, i, a, o, s) {
      (this.A = e | 0),
        (this.B = t | 0),
        (this.C = n | 0),
        (this.D = r | 0),
        (this.E = i | 0),
        (this.F = a | 0),
        (this.G = o | 0),
        (this.H = s | 0);
    }
    process(e, t) {
      for (let n = 0; n < 16; n++, t += 4) Pg[n] = e.getUint32(t, !1);
      for (let e = 16; e < 64; e++) {
        let t = Pg[e - 15],
          n = Pg[e - 2],
          r = Wh(t, 7) ^ Wh(t, 18) ^ (t >>> 3),
          i = Wh(n, 17) ^ Wh(n, 19) ^ (n >>> 10);
        Pg[e] = (i + Pg[e - 7] + r + Pg[e - 16]) | 0;
      }
      let { A: n, B: r, C: i, D: a, E: o, F: s, G: c, H: l } = this;
      for (let e = 0; e < 64; e++) {
        let t = Wh(o, 6) ^ Wh(o, 11) ^ Wh(o, 25),
          u = (l + t + Dg(o, s, c) + Ng[e] + Pg[e]) | 0,
          d = ((Wh(n, 2) ^ Wh(n, 13) ^ Wh(n, 22)) + Og(n, r, i)) | 0;
        (l = c),
          (c = s),
          (s = o),
          (o = (a + u) | 0),
          (a = i),
          (i = r),
          (r = n),
          (n = (u + d) | 0);
      }
      (n = (n + this.A) | 0),
        (r = (r + this.B) | 0),
        (i = (i + this.C) | 0),
        (a = (a + this.D) | 0),
        (o = (o + this.E) | 0),
        (s = (s + this.F) | 0),
        (c = (c + this.G) | 0),
        (l = (l + this.H) | 0),
        this.set(n, r, i, a, o, s, c, l);
    }
    roundClean() {
      Hh(Pg);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), Hh(this.buffer);
    }
  },
  Ig = mh(
    `0x428a2f98d728ae22.0x7137449123ef65cd.0xb5c0fbcfec4d3b2f.0xe9b5dba58189dbbc.0x3956c25bf348b538.0x59f111f1b605d019.0x923f82a4af194f9b.0xab1c5ed5da6d8118.0xd807aa98a3030242.0x12835b0145706fbe.0x243185be4ee4b28c.0x550c7dc3d5ffb4e2.0x72be5d74f27b896f.0x80deb1fe3b1696b1.0x9bdc06a725c71235.0xc19bf174cf692694.0xe49b69c19ef14ad2.0xefbe4786384f25e3.0x0fc19dc68b8cd5b5.0x240ca1cc77ac9c65.0x2de92c6f592b0275.0x4a7484aa6ea6e483.0x5cb0a9dcbd41fbd4.0x76f988da831153b5.0x983e5152ee66dfab.0xa831c66d2db43210.0xb00327c898fb213f.0xbf597fc7beef0ee4.0xc6e00bf33da88fc2.0xd5a79147930aa725.0x06ca6351e003826f.0x142929670a0e6e70.0x27b70a8546d22ffc.0x2e1b21385c26c926.0x4d2c6dfc5ac42aed.0x53380d139d95b3df.0x650a73548baf63de.0x766a0abb3c77b2a8.0x81c2c92e47edaee6.0x92722c851482353b.0xa2bfe8a14cf10364.0xa81a664bbc423001.0xc24b8b70d0f89791.0xc76c51a30654be30.0xd192e819d6ef5218.0xd69906245565a910.0xf40e35855771202a.0x106aa07032bbd1b8.0x19a4c116b8d2d0c8.0x1e376c085141ab53.0x2748774cdf8eeb99.0x34b0bcb5e19b48a8.0x391c0cb3c5c95a63.0x4ed8aa4ae3418acb.0x5b9cca4f7763e373.0x682e6ff3d6b2b8a3.0x748f82ee5defb2fc.0x78a5636f43172f60.0x84c87814a1f0ab72.0x8cc702081a6439ec.0x90befffa23631e28.0xa4506cebde82bde9.0xbef9a3f7b2c67915.0xc67178f2e372532b.0xca273eceea26619c.0xd186b8c721c0c207.0xeada7dd6cde0eb1e.0xf57d4f7fee6ed178.0x06f067aa72176fba.0x0a637dc5a2c898a6.0x113f9804bef90dae.0x1b710b35131c471b.0x28db77f523047d84.0x32caab7b40c72493.0x3c9ebe0a15c9bebc.0x431d67c49c100d4c.0x4cc5d4becb3e42b6.0x597f299cfc657e2a.0x5fcb6fab3ad6faec.0x6c44198c4a475817`
      .split(`.`)
      .map((e) => BigInt(e))
  ),
  Lg = Ig[0],
  Rg = Ig[1],
  zg = new Uint32Array(80),
  Bg = new Uint32Array(80),
  Vg = class extends kg {
    constructor(e = 64) {
      super(128, e, 16, !1),
        (this.Ah = Mg[0] | 0),
        (this.Al = Mg[1] | 0),
        (this.Bh = Mg[2] | 0),
        (this.Bl = Mg[3] | 0),
        (this.Ch = Mg[4] | 0),
        (this.Cl = Mg[5] | 0),
        (this.Dh = Mg[6] | 0),
        (this.Dl = Mg[7] | 0),
        (this.Eh = Mg[8] | 0),
        (this.El = Mg[9] | 0),
        (this.Fh = Mg[10] | 0),
        (this.Fl = Mg[11] | 0),
        (this.Gh = Mg[12] | 0),
        (this.Gl = Mg[13] | 0),
        (this.Hh = Mg[14] | 0),
        (this.Hl = Mg[15] | 0);
    }
    get() {
      let {
        Ah: e,
        Al: t,
        Bh: n,
        Bl: r,
        Ch: i,
        Cl: a,
        Dh: o,
        Dl: s,
        Eh: c,
        El: l,
        Fh: u,
        Fl: d,
        Gh: f,
        Gl: p,
        Hh: m,
        Hl: h,
      } = this;
      return [e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h];
    }
    set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
      (this.Ah = e | 0),
        (this.Al = t | 0),
        (this.Bh = n | 0),
        (this.Bl = r | 0),
        (this.Ch = i | 0),
        (this.Cl = a | 0),
        (this.Dh = o | 0),
        (this.Dl = s | 0),
        (this.Eh = c | 0),
        (this.El = l | 0),
        (this.Fh = u | 0),
        (this.Fl = d | 0),
        (this.Gh = f | 0),
        (this.Gl = p | 0),
        (this.Hh = m | 0),
        (this.Hl = h | 0);
    }
    process(e, t) {
      for (let n = 0; n < 16; n++, t += 4)
        (zg[n] = e.getUint32(t)), (Bg[n] = e.getUint32((t += 4)));
      for (let e = 16; e < 80; e++) {
        let t = zg[e - 15] | 0,
          n = Bg[e - 15] | 0,
          r = _h(t, n, 1) ^ _h(t, n, 8) ^ hh(t, n, 7),
          i = vh(t, n, 1) ^ vh(t, n, 8) ^ gh(t, n, 7),
          a = zg[e - 2] | 0,
          o = Bg[e - 2] | 0,
          s = _h(a, o, 19) ^ yh(a, o, 61) ^ hh(a, o, 6),
          c = Ah(
            i,
            vh(a, o, 19) ^ bh(a, o, 61) ^ gh(a, o, 6),
            Bg[e - 7],
            Bg[e - 16]
          ),
          l = jh(c, r, s, zg[e - 7], zg[e - 16]);
        (zg[e] = l | 0), (Bg[e] = c | 0);
      }
      let {
        Ah: n,
        Al: r,
        Bh: i,
        Bl: a,
        Ch: o,
        Cl: s,
        Dh: c,
        Dl: l,
        Eh: u,
        El: d,
        Fh: f,
        Fl: p,
        Gh: m,
        Gl: h,
        Hh: g,
        Hl: _,
      } = this;
      for (let e = 0; e < 80; e++) {
        let t = _h(u, d, 14) ^ _h(u, d, 18) ^ yh(u, d, 41),
          v = vh(u, d, 14) ^ vh(u, d, 18) ^ bh(u, d, 41),
          y = (u & f) ^ (~u & m),
          b = (d & p) ^ (~d & h),
          x = Mh(_, v, b, Rg[e], Bg[e]),
          S = Nh(x, g, t, y, Lg[e], zg[e]),
          C = x | 0,
          w = _h(n, r, 28) ^ yh(n, r, 34) ^ yh(n, r, 39),
          T = vh(n, r, 28) ^ bh(n, r, 34) ^ bh(n, r, 39),
          E = (n & i) ^ (n & o) ^ (i & o),
          D = (r & a) ^ (r & s) ^ (a & s);
        (g = m | 0),
          (_ = h | 0),
          (m = f | 0),
          (h = p | 0),
          (f = u | 0),
          (p = d | 0),
          ({ h: u, l: d } = Dh(c | 0, l | 0, S | 0, C | 0)),
          (c = o | 0),
          (l = s | 0),
          (o = i | 0),
          (s = a | 0),
          (i = n | 0),
          (a = r | 0);
        let O = Oh(C, T, D);
        (n = kh(O, S, w, E)), (r = O | 0);
      }
      ({ h: n, l: r } = Dh(this.Ah | 0, this.Al | 0, n | 0, r | 0)),
        ({ h: i, l: a } = Dh(this.Bh | 0, this.Bl | 0, i | 0, a | 0)),
        ({ h: o, l: s } = Dh(this.Ch | 0, this.Cl | 0, o | 0, s | 0)),
        ({ h: c, l } = Dh(this.Dh | 0, this.Dl | 0, c | 0, l | 0)),
        ({ h: u, l: d } = Dh(this.Eh | 0, this.El | 0, u | 0, d | 0)),
        ({ h: f, l: p } = Dh(this.Fh | 0, this.Fl | 0, f | 0, p | 0)),
        ({ h: m, l: h } = Dh(this.Gh | 0, this.Gl | 0, m | 0, h | 0)),
        ({ h: g, l: _ } = Dh(this.Hh | 0, this.Hl | 0, g | 0, _ | 0)),
        this.set(n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _);
    }
    roundClean() {
      Hh(zg, Bg);
    }
    destroy() {
      Hh(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  },
  Hg = class extends Vg {
    constructor() {
      super(48),
        (this.Ah = jg[0] | 0),
        (this.Al = jg[1] | 0),
        (this.Bh = jg[2] | 0),
        (this.Bl = jg[3] | 0),
        (this.Ch = jg[4] | 0),
        (this.Cl = jg[5] | 0),
        (this.Dh = jg[6] | 0),
        (this.Dl = jg[7] | 0),
        (this.Eh = jg[8] | 0),
        (this.El = jg[9] | 0),
        (this.Fh = jg[10] | 0),
        (this.Fl = jg[11] | 0),
        (this.Gh = jg[12] | 0),
        (this.Gl = jg[13] | 0),
        (this.Hh = jg[14] | 0),
        (this.Hl = jg[15] | 0);
    }
  },
  Ug = Uint32Array.from([
    573645204, 4230739756, 2673172387, 3360449730, 596883563, 1867755857,
    2520282905, 1497426621, 2519219938, 2827943907, 3193839141, 1401305490,
    721525244, 746961066, 246885852, 2177182882,
  ]),
  Wg = class extends Vg {
    constructor() {
      super(32),
        (this.Ah = Ug[0] | 0),
        (this.Al = Ug[1] | 0),
        (this.Bh = Ug[2] | 0),
        (this.Bl = Ug[3] | 0),
        (this.Ch = Ug[4] | 0),
        (this.Cl = Ug[5] | 0),
        (this.Dh = Ug[6] | 0),
        (this.Dl = Ug[7] | 0),
        (this.Eh = Ug[8] | 0),
        (this.El = Ug[9] | 0),
        (this.Fh = Ug[10] | 0),
        (this.Fl = Ug[11] | 0),
        (this.Gh = Ug[12] | 0),
        (this.Gl = Ug[13] | 0),
        (this.Hh = Ug[14] | 0),
        (this.Hl = Ug[15] | 0);
    }
  },
  Gg = og(() => new Fg()),
  Kg = og(() => new Vg()),
  qg = og(() => new Hg()),
  Jg = og(() => new Wg()),
  Yg = Uint8Array.from([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15,
    13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6,
    7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5,
    7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4,
    13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8,
    11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11,
    3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14,
    3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10,
    4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13,
    10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15,
    8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0,
    11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9,
  ]),
  Xg = Uint32Array.from([
    4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242,
    1595750129, 2773480762, 2917565137, 1359893119, 725511199, 2600822924,
    4215389547, 528734635, 327033209, 1541459225,
  ]),
  W = new Uint32Array(32);
function Zg(e, t, n, r, i, a) {
  let o = i[a],
    s = i[a + 1],
    c = W[2 * e],
    l = W[2 * e + 1],
    u = W[2 * t],
    d = W[2 * t + 1],
    f = W[2 * n],
    p = W[2 * n + 1],
    m = W[2 * r],
    h = W[2 * r + 1],
    g = Oh(c, u, o);
  (l = kh(g, l, d, s)),
    (c = g | 0),
    ({ Dh: h, Dl: m } = { Dh: h ^ l, Dl: m ^ c }),
    ({ Dh: h, Dl: m } = { Dh: xh(h, m), Dl: Sh(h) }),
    ({ h: p, l: f } = Dh(p, f, h, m)),
    ({ Bh: d, Bl: u } = { Bh: d ^ p, Bl: u ^ f }),
    ({ Bh: d, Bl: u } = { Bh: _h(d, u, 24), Bl: vh(d, u, 24) }),
    (W[2 * e] = c),
    (W[2 * e + 1] = l),
    (W[2 * t] = u),
    (W[2 * t + 1] = d),
    (W[2 * n] = f),
    (W[2 * n + 1] = p),
    (W[2 * r] = m),
    (W[2 * r + 1] = h);
}
function Qg(e, t, n, r, i, a) {
  let o = i[a],
    s = i[a + 1],
    c = W[2 * e],
    l = W[2 * e + 1],
    u = W[2 * t],
    d = W[2 * t + 1],
    f = W[2 * n],
    p = W[2 * n + 1],
    m = W[2 * r],
    h = W[2 * r + 1],
    g = Oh(c, u, o);
  (l = kh(g, l, d, s)),
    (c = g | 0),
    ({ Dh: h, Dl: m } = { Dh: h ^ l, Dl: m ^ c }),
    ({ Dh: h, Dl: m } = { Dh: _h(h, m, 16), Dl: vh(h, m, 16) }),
    ({ h: p, l: f } = Dh(p, f, h, m)),
    ({ Bh: d, Bl: u } = { Bh: d ^ p, Bl: u ^ f }),
    ({ Bh: d, Bl: u } = { Bh: yh(d, u, 63), Bl: bh(d, u, 63) }),
    (W[2 * e] = c),
    (W[2 * e + 1] = l),
    (W[2 * t] = u),
    (W[2 * t + 1] = d),
    (W[2 * n] = f),
    (W[2 * n + 1] = p),
    (W[2 * r] = m),
    (W[2 * r + 1] = h);
}
function $g(e, t = {}, n, r, i) {
  if ((Ih(n), e < 0 || e > n)) throw Error(`outputLen bigger than keyLen`);
  let { key: a, salt: o, personalization: s } = t;
  if (a !== void 0 && (a.length < 1 || a.length > n))
    throw Error(`key length must be undefined or 1..` + n);
  if (o !== void 0 && o.length !== r)
    throw Error(`salt must be undefined or ` + r);
  if (s !== void 0 && s.length !== i)
    throw Error(`personalization must be undefined or ` + i);
}
var e_ = class extends ag {
    constructor(e, t) {
      super(),
        (this.finished = !1),
        (this.destroyed = !1),
        (this.length = 0),
        (this.pos = 0),
        Ih(e),
        Ih(t),
        (this.blockLen = e),
        (this.outputLen = t),
        (this.buffer = new Uint8Array(e)),
        (this.buffer32 = Vh(this.buffer));
    }
    update(e) {
      zh(this), (e = rg(e)), Lh(e);
      let { blockLen: t, buffer: n, buffer32: r } = this,
        i = e.length,
        a = e.byteOffset,
        o = e.buffer;
      for (let s = 0; s < i; ) {
        this.pos === t &&
          (Yh(r), this.compress(r, 0, !1), Yh(r), (this.pos = 0));
        let c = Math.min(t - this.pos, i - s),
          l = a + s;
        if (c === t && !(l % 4) && s + c < i) {
          let e = new Uint32Array(o, l, Math.floor((i - s) / 4));
          Yh(e);
          for (let n = 0; s + t < i; n += r.length, s += t)
            (this.length += t), this.compress(e, n, !1);
          Yh(e);
          continue;
        }
        n.set(e.subarray(s, s + c), this.pos),
          (this.pos += c),
          (this.length += c),
          (s += c);
      }
      return this;
    }
    digestInto(e) {
      zh(this), Bh(e, this);
      let { pos: t, buffer32: n } = this;
      (this.finished = !0),
        Hh(this.buffer.subarray(t)),
        Yh(n),
        this.compress(n, 0, !0),
        Yh(n);
      let r = Vh(e);
      this.get().forEach((e, t) => (r[t] = qh(e)));
    }
    digest() {
      let { buffer: e, outputLen: t } = this;
      this.digestInto(e);
      let n = e.slice(0, t);
      return this.destroy(), n;
    }
    _cloneInto(e) {
      let {
        buffer: t,
        length: n,
        finished: r,
        destroyed: i,
        outputLen: a,
        pos: o,
      } = this;
      return (
        (e ||= new this.constructor({ dkLen: a })),
        e.set(...this.get()),
        e.buffer.set(t),
        (e.destroyed = i),
        (e.finished = r),
        (e.length = n),
        (e.pos = o),
        (e.outputLen = a),
        e
      );
    }
    clone() {
      return this._cloneInto();
    }
  },
  t_ = class extends e_ {
    constructor(e = {}) {
      let t = e.dkLen === void 0 ? 64 : e.dkLen;
      super(128, t),
        (this.v0l = Xg[0] | 0),
        (this.v0h = Xg[1] | 0),
        (this.v1l = Xg[2] | 0),
        (this.v1h = Xg[3] | 0),
        (this.v2l = Xg[4] | 0),
        (this.v2h = Xg[5] | 0),
        (this.v3l = Xg[6] | 0),
        (this.v3h = Xg[7] | 0),
        (this.v4l = Xg[8] | 0),
        (this.v4h = Xg[9] | 0),
        (this.v5l = Xg[10] | 0),
        (this.v5h = Xg[11] | 0),
        (this.v6l = Xg[12] | 0),
        (this.v6h = Xg[13] | 0),
        (this.v7l = Xg[14] | 0),
        (this.v7h = Xg[15] | 0),
        $g(t, e, 64, 16, 16);
      let { key: n, personalization: r, salt: i } = e,
        a = 0;
      if (
        (n !== void 0 && ((n = rg(n)), (a = n.length)),
        (this.v0l ^= this.outputLen | (a << 8) | 16842752),
        i !== void 0)
      ) {
        i = rg(i);
        let e = Vh(i);
        (this.v4l ^= qh(e[0])),
          (this.v4h ^= qh(e[1])),
          (this.v5l ^= qh(e[2])),
          (this.v5h ^= qh(e[3]));
      }
      if (r !== void 0) {
        r = rg(r);
        let e = Vh(r);
        (this.v6l ^= qh(e[0])),
          (this.v6h ^= qh(e[1])),
          (this.v7l ^= qh(e[2])),
          (this.v7h ^= qh(e[3]));
      }
      if (n !== void 0) {
        let e = new Uint8Array(this.blockLen);
        e.set(n), this.update(e);
      }
    }
    get() {
      let {
        v0l: e,
        v0h: t,
        v1l: n,
        v1h: r,
        v2l: i,
        v2h: a,
        v3l: o,
        v3h: s,
        v4l: c,
        v4h: l,
        v5l: u,
        v5h: d,
        v6l: f,
        v6h: p,
        v7l: m,
        v7h: h,
      } = this;
      return [e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h];
    }
    set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
      (this.v0l = e | 0),
        (this.v0h = t | 0),
        (this.v1l = n | 0),
        (this.v1h = r | 0),
        (this.v2l = i | 0),
        (this.v2h = a | 0),
        (this.v3l = o | 0),
        (this.v3h = s | 0),
        (this.v4l = c | 0),
        (this.v4h = l | 0),
        (this.v5l = u | 0),
        (this.v5h = d | 0),
        (this.v6l = f | 0),
        (this.v6h = p | 0),
        (this.v7l = m | 0),
        (this.v7h = h | 0);
    }
    compress(e, t, n) {
      this.get().forEach((e, t) => (W[t] = e)), W.set(Xg, 16);
      let { h: r, l: i } = ph(BigInt(this.length));
      (W[24] = Xg[8] ^ i),
        (W[25] = Xg[9] ^ r),
        n && ((W[28] = ~W[28]), (W[29] = ~W[29]));
      let a = 0,
        o = Yg;
      for (let n = 0; n < 12; n++)
        Zg(0, 4, 8, 12, e, t + 2 * o[a++]),
          Qg(0, 4, 8, 12, e, t + 2 * o[a++]),
          Zg(1, 5, 9, 13, e, t + 2 * o[a++]),
          Qg(1, 5, 9, 13, e, t + 2 * o[a++]),
          Zg(2, 6, 10, 14, e, t + 2 * o[a++]),
          Qg(2, 6, 10, 14, e, t + 2 * o[a++]),
          Zg(3, 7, 11, 15, e, t + 2 * o[a++]),
          Qg(3, 7, 11, 15, e, t + 2 * o[a++]),
          Zg(0, 5, 10, 15, e, t + 2 * o[a++]),
          Qg(0, 5, 10, 15, e, t + 2 * o[a++]),
          Zg(1, 6, 11, 12, e, t + 2 * o[a++]),
          Qg(1, 6, 11, 12, e, t + 2 * o[a++]),
          Zg(2, 7, 8, 13, e, t + 2 * o[a++]),
          Qg(2, 7, 8, 13, e, t + 2 * o[a++]),
          Zg(3, 4, 9, 14, e, t + 2 * o[a++]),
          Qg(3, 4, 9, 14, e, t + 2 * o[a++]);
      (this.v0l ^= W[0] ^ W[16]),
        (this.v0h ^= W[1] ^ W[17]),
        (this.v1l ^= W[2] ^ W[18]),
        (this.v1h ^= W[3] ^ W[19]),
        (this.v2l ^= W[4] ^ W[20]),
        (this.v2h ^= W[5] ^ W[21]),
        (this.v3l ^= W[6] ^ W[22]),
        (this.v3h ^= W[7] ^ W[23]),
        (this.v4l ^= W[8] ^ W[24]),
        (this.v4h ^= W[9] ^ W[25]),
        (this.v5l ^= W[10] ^ W[26]),
        (this.v5h ^= W[11] ^ W[27]),
        (this.v6l ^= W[12] ^ W[28]),
        (this.v6h ^= W[13] ^ W[29]),
        (this.v7l ^= W[14] ^ W[30]),
        (this.v7h ^= W[15] ^ W[31]),
        Hh(W);
    }
    destroy() {
      (this.destroyed = !0),
        Hh(this.buffer32),
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  },
  n_ = sg((e) => new t_(e)),
  r_ = `https://rpc.walletconnect.org/v1`;
function i_(e) {
  let t = `Ethereum Signed Message:
${e.length}`,
    n = new TextEncoder().encode(t + e);
  return `0x` + Buffer.from(Tg(n)).toString(`hex`);
}
async function a_(e, t, n, r, i, a) {
  switch (n.t) {
    case `eip191`:
      return await o_(e, t, n.s);
    case `eip1271`:
      return await s_(e, t, n.s, r, i, a);
    default:
      throw Error(
        `verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${n.t}`
      );
  }
}
function o_(e, t, n) {
  let r = fd(n);
  return _d({ payload: i_(t), signature: r }).toLowerCase() === e.toLowerCase();
}
async function s_(e, t, n, r, i, a) {
  let o = dm(r);
  if (!o.namespace || !o.reference)
    throw Error(
      `isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r}`
    );
  try {
    let o = n.substring(2),
      s = (o.length / 2).toString(16).padStart(64, `0`),
      c =
        `0x1626ba7e` +
        (t.startsWith(`0x`) ? t : i_(t)).substring(2) +
        `0000000000000000000000000000000000000000000000000000000000000040` +
        s +
        o,
      { result: l } = await (
        await fetch(`${a || r_}/?chainId=${r}&projectId=${i}`, {
          headers: { "Content-Type": `application/json` },
          method: `POST`,
          body: JSON.stringify({
            id: c_(),
            jsonrpc: `2.0`,
            method: `eth_call`,
            params: [{ to: e, data: c }, `latest`],
          }),
        })
      ).json();
    return l ? l.slice(0, 10).toLowerCase() === `0x1626ba7e` : !1;
  } catch (e) {
    return console.error(`isValidEip1271Signature: `, e), !1;
  }
}
function c_() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
function l_(e) {
  let t = atob(e),
    n = new Uint8Array(t.length);
  for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
  let r = n[0];
  if (r === 0) throw Error(`No signatures found`);
  let i = 1 + r * 64;
  if (n.length < i)
    throw Error(`Transaction data too short for claimed signature count`);
  if (n.length < 100) throw Error(`Transaction too short`);
  let a = Buffer.from(e, `base64`).slice(1, 65);
  return _e.encode(a);
}
function u_(e) {
  let t = new Uint8Array(Buffer.from(e, `base64`)),
    n = Array.from(`TransactionData::`).map((e) => e.charCodeAt(0)),
    r = new Uint8Array(n.length + t.length);
  r.set(n), r.set(t, n.length);
  let i = n_(r, { dkLen: 32 });
  return _e.encode(i);
}
function d_(e) {
  let t = new Uint8Array(Gg(f_(e)));
  return _e.encode(t);
}
function f_(e) {
  if (e instanceof Uint8Array) return e;
  if (Array.isArray(e)) return new Uint8Array(e);
  if (typeof e == `object` && e && e.data)
    return new Uint8Array(Object.values(e.data));
  if (typeof e == `object` && e) return new Uint8Array(Object.values(e));
  throw Error(
    `getNearUint8ArrayFromBytes: Unexpected result type from bytes array`
  );
}
function p_(e) {
  let t = ff(Buffer.from(e, `base64`)).txn;
  if (!t) throw Error(`Invalid signed transaction: missing 'txn' field`);
  let n = Yd(t),
    r = Buffer.from(`TX`),
    i = Jg(Buffer.concat([r, Buffer.from(n)]));
  return he.encode(i).replace(/=+$/, ``);
}
function m_(e) {
  let t = [],
    n = BigInt(e);
  for (; n >= BigInt(128); )
    t.push(Number((n & BigInt(127)) | BigInt(128))), (n >>= BigInt(7));
  return t.push(Number(n)), Buffer.from(t);
}
function h_(e) {
  let t = Buffer.from(e.signed.bodyBytes, `base64`),
    n = Buffer.from(e.signed.authInfoBytes, `base64`),
    r = Buffer.from(e.signature.signature, `base64`),
    i = [];
  i.push(Buffer.from([10])),
    i.push(m_(t.length)),
    i.push(t),
    i.push(Buffer.from([18])),
    i.push(m_(n.length)),
    i.push(n),
    i.push(Buffer.from([26])),
    i.push(m_(r.length)),
    i.push(r);
  let a = Gg(Buffer.concat(i));
  return Buffer.from(a).toString(`hex`).toUpperCase();
}
function g_(e) {
  let t = [];
  try {
    if (typeof e == `string`) return t.push(e), t;
    if (typeof e != `object`) return t;
    e != null && e.id && t.push(e.id);
    let n = e?.capabilities?.caip345?.transactionHashes;
    n && t.push(...n);
  } catch (e) {
    console.warn(`getWalletSendCallsHashes failed: `, e);
  }
  return t;
}
var __ = Object.defineProperty,
  v_ = Object.defineProperties,
  y_ = Object.getOwnPropertyDescriptors,
  b_ = Object.getOwnPropertySymbols,
  x_ = Object.prototype.hasOwnProperty,
  S_ = Object.prototype.propertyIsEnumerable,
  C_ = (e, t, n) =>
    t in e
      ? __(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  w_ = (e, t) => {
    for (var n in (t ||= {})) x_.call(t, n) && C_(e, n, t[n]);
    if (b_) for (var n of b_(t)) S_.call(t, n) && C_(e, n, t[n]);
    return e;
  },
  T_ = (e, t) => v_(e, y_(t)),
  E_ = `did:pkh:`,
  D_ = { eip155: `Ethereum`, solana: `Solana`, bip122: `Bitcoin` },
  O_ = (e) => (e ? D_[e] || e : ``),
  k_ = (e) => e?.split(`:`),
  A_ = (e) => {
    let t = e && k_(e);
    if (t) return e.includes(E_) ? t[3] : t[1];
  },
  j_ = (e) => {
    let t = e && k_(e);
    if (t) return e.includes(E_) ? t[2] : t[0];
  },
  M_ = (e) => {
    let t = e && k_(e);
    if (t) return t[2] + `:` + t[3];
  },
  N_ = (e) => {
    let t = e && k_(e);
    if (t) return t.pop();
  };
async function P_(e) {
  let { cacao: t, projectId: n } = e,
    { s: r, p: i } = t,
    a = F_(i, i.iss);
  return await a_(N_(i.iss), a, r, M_(i.iss), n);
}
var F_ = (e, t) => {
  let n = j_(t);
  if (!n) throw Error(`Invalid issuer: ` + t);
  let r = `${e.domain} wants you to sign in with your ${O_(n)} account:`,
    i = N_(t);
  if (!e.aud && !e.uri)
    throw Error("Either `aud` or `uri` is required to construct the message");
  let a = e.statement || void 0,
    o = `URI: ${e.aud || e.uri}`,
    s = `Version: ${e.version}`,
    c = `Chain ID: ${A_(t)}`,
    l = `Nonce: ${e.nonce}`,
    u = `Issued At: ${e.iat}`,
    d = e.exp ? `Expiration Time: ${e.exp}` : void 0,
    f = e.nbf ? `Not Before: ${e.nbf}` : void 0,
    p = e.requestId ? `Request ID: ${e.requestId}` : void 0,
    m = e.resources
      ? `Resources:${e.resources
          .map(
            (e) => `
- ${e}`
          )
          .join(``)}`
      : void 0,
    h = X_(e.resources);
  if (h) {
    let e = H_(h);
    a = q_(a, e);
  }
  return [r, i, ``, a, ``, o, s, c, l, u, d, f, p, m].filter((e) => e != null)
    .join(`
`);
};
function I_(e) {
  return Buffer.from(JSON.stringify(e)).toString(`base64`);
}
function L_(e) {
  return JSON.parse(Buffer.from(e, `base64`).toString(`utf-8`));
}
function R_(e) {
  if (!e) throw Error(`No recap provided, value is undefined`);
  if (!e.att) throw Error("No `att` property found");
  let t = Object.keys(e.att);
  if (!(t != null && t.length))
    throw Error("No resources found in `att` property");
  t.forEach((t) => {
    let n = e.att[t];
    if (Array.isArray(n) || typeof n != `object`)
      throw Error(`Resource must be an object: ${t}`);
    if (!Object.keys(n).length) throw Error(`Resource object is empty: ${t}`);
    Object.keys(n).forEach((e) => {
      let t = n[e];
      if (!Array.isArray(t))
        throw Error(
          `Ability limits ${e} must be an array of objects, found: ${t}`
        );
      if (!t.length)
        throw Error(
          `Value of ${e} is empty array, must be an array with objects`
        );
      t.forEach((t) => {
        if (typeof t != `object`)
          throw Error(
            `Ability limits (${e}) must be an array of objects, found: ${t}`
          );
      });
    });
  });
}
function z_(e, t, n, r = {}) {
  return n?.sort((e, t) => e.localeCompare(t)), { att: { [e]: B_(t, n, r) } };
}
function B_(e, t, n = {}) {
  t = t?.sort((e, t) => e.localeCompare(t));
  let r = t.map((t) => ({ [`${e}/${t}`]: [n] }));
  return Object.assign({}, ...r);
}
function V_(e) {
  return R_(e), `urn:recap:${I_(e).replace(/=/g, ``)}`;
}
function H_(e) {
  let t = L_(e.replace(`urn:recap:`, ``));
  return R_(t), t;
}
function U_(e, t, n) {
  return V_(z_(e, t, n));
}
function W_(e) {
  return e && e.includes(`urn:recap:`);
}
function G_(e, t) {
  return V_(K_(H_(e), H_(t)));
}
function K_(e, t) {
  R_(e), R_(t);
  let n = Object.keys(e.att)
      .concat(Object.keys(t.att))
      .sort((e, t) => e.localeCompare(t)),
    r = { att: {} };
  return (
    n.forEach((n) => {
      Object.keys(e.att?.[n] || {})
        .concat(Object.keys(t.att?.[n] || {}))
        .sort((e, t) => e.localeCompare(t))
        .forEach((i) => {
          r.att[n] = T_(w_({}, r.att[n]), {
            [i]: e.att[n]?.[i] || t.att[n]?.[i],
          });
        });
    }),
    r
  );
}
function q_(e = ``, t) {
  R_(t);
  let n = `I further authorize the stated URI to perform the following actions on my behalf: `;
  if (e.includes(n)) return e;
  let r = [],
    i = 0;
  Object.keys(t.att).forEach((e) => {
    let n = Object.keys(t.att[e]).map((e) => ({
      ability: e.split(`/`)[0],
      action: e.split(`/`)[1],
    }));
    n.sort((e, t) => e.action.localeCompare(t.action));
    let a = {};
    n.forEach((e) => {
      a[e.ability] || (a[e.ability] = []), a[e.ability].push(e.action);
    });
    let o = Object.keys(a).map(
      (t) => (i++, `(${i}) '${t}': '${a[t].join(`', '`)}' for '${e}'.`)
    );
    r.push(o.join(`, `).replace(`.,`, `.`));
  });
  let a = `${n}${r.join(` `)}`;
  return `${e ? e + ` ` : ``}${a}`;
}
function J_(e) {
  let t = H_(e);
  R_(t);
  let n = t.att?.eip155;
  return n ? Object.keys(n).map((e) => e.split(`/`)[1]) : [];
}
function Y_(e) {
  let t = H_(e);
  R_(t);
  let n = [];
  return (
    Object.values(t.att).forEach((e) => {
      Object.values(e).forEach((e) => {
        var t;
        (t = e?.[0]) != null && t.chains && n.push(e[0].chains);
      });
    }),
    [...new Set(n.flat())]
  );
}
function X_(e) {
  if (!e) return;
  let t = e?.[e.length - 1];
  return W_(t) ? t : void 0;
}
function Z_(e) {
  return (
    e instanceof Uint8Array ||
    (ArrayBuffer.isView(e) && e.constructor.name === `Uint8Array`)
  );
}
function Q_(e) {
  if (typeof e != `boolean`) throw Error(`boolean expected, not ${e}`);
}
function $_(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw Error(`positive integer expected, got ` + e);
}
function ev(e, ...t) {
  if (!Z_(e)) throw Error(`Uint8Array expected`);
  if (t.length > 0 && !t.includes(e.length))
    throw Error(
      `Uint8Array expected of length ` + t + `, got length=` + e.length
    );
}
function tv(e, t = !0) {
  if (e.destroyed) throw Error(`Hash instance has been destroyed`);
  if (t && e.finished) throw Error(`Hash#digest() has already been called`);
}
function nv(e, t) {
  ev(e);
  let n = t.outputLen;
  if (e.length < n)
    throw Error(`digestInto() expects output buffer of length at least ` + n);
}
function rv(e) {
  return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
}
function iv(...e) {
  for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function av(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
var ov = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function sv(e) {
  if (typeof e != `string`) throw Error(`string expected`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function cv(e) {
  if (typeof e == `string`) e = sv(e);
  else if (Z_(e)) e = gv(e);
  else throw Error(`Uint8Array expected, got ` + typeof e);
  return e;
}
function lv(e, t) {
  if (typeof t != `object` || !t) throw Error(`options must be defined`);
  return Object.assign(e, t);
}
function uv(e, t) {
  if (e.length !== t.length) return !1;
  let n = 0;
  for (let r = 0; r < e.length; r++) n |= e[r] ^ t[r];
  return n === 0;
}
var dv = (e, t) => {
  function n(n, ...r) {
    if ((ev(n), !ov))
      throw Error(`Non little-endian hardware is not yet supported`);
    if (e.nonceLength !== void 0) {
      let t = r[0];
      if (!t) throw Error(`nonce / iv required`);
      e.varSizeNonce ? ev(t) : ev(t, e.nonceLength);
    }
    let i = e.tagLength;
    i && r[1] !== void 0 && ev(r[1]);
    let a = t(n, ...r),
      o = (e, t) => {
        if (t !== void 0) {
          if (e !== 2) throw Error(`cipher output not supported`);
          ev(t);
        }
      },
      s = !1;
    return {
      encrypt(e, t) {
        if (s) throw Error(`cannot encrypt() twice with same key + nonce`);
        return (s = !0), ev(e), o(a.encrypt.length, t), a.encrypt(e, t);
      },
      decrypt(e, t) {
        if ((ev(e), i && e.length < i))
          throw Error(`invalid ciphertext length: smaller than tagLength=` + i);
        return o(a.decrypt.length, t), a.decrypt(e, t);
      },
    };
  }
  return Object.assign(n, e), n;
};
function fv(e, t, n = !0) {
  if (t === void 0) return new Uint8Array(e);
  if (t.length !== e)
    throw Error(`invalid output length, expected ` + e + `, got: ` + t.length);
  if (n && !hv(t)) throw Error(`invalid output, must be aligned`);
  return t;
}
function pv(e, t, n, r) {
  if (typeof e.setBigUint64 == `function`) return e.setBigUint64(t, n, r);
  let i = BigInt(32),
    a = BigInt(4294967295),
    o = Number((n >> i) & a),
    s = Number(n & a),
    c = r ? 4 : 0,
    l = r ? 0 : 4;
  e.setUint32(t + c, o, r), e.setUint32(t + l, s, r);
}
function mv(e, t, n) {
  Q_(n);
  let r = new Uint8Array(16),
    i = av(r);
  return pv(i, 0, BigInt(t), n), pv(i, 8, BigInt(e), n), r;
}
function hv(e) {
  return e.byteOffset % 4 == 0;
}
function gv(e) {
  return Uint8Array.from(e);
}
var _v = (e) => Uint8Array.from(e.split(``).map((e) => e.charCodeAt(0))),
  vv = _v(`expand 16-byte k`),
  yv = _v(`expand 32-byte k`),
  bv = rv(vv),
  xv = rv(yv);
function G(e, t) {
  return (e << t) | (e >>> (32 - t));
}
function Sv(e) {
  return e.byteOffset % 4 == 0;
}
var Cv = 64,
  wv = 16,
  Tv = 2 ** 32 - 1,
  Ev = new Uint32Array();
function Dv(e, t, n, r, i, a, o, s) {
  let c = i.length,
    l = new Uint8Array(Cv),
    u = rv(l),
    d = Sv(i) && Sv(a),
    f = d ? rv(i) : Ev,
    p = d ? rv(a) : Ev;
  for (let m = 0; m < c; o++) {
    if ((e(t, n, r, u, o, s), o >= Tv)) throw Error(`arx: counter overflow`);
    let h = Math.min(Cv, c - m);
    if (d && h === Cv) {
      let e = m / 4;
      if (m % 4 != 0) throw Error(`arx: invalid block position`);
      for (let t = 0, n; t < wv; t++) (n = e + t), (p[n] = f[n] ^ u[t]);
      m += Cv;
      continue;
    }
    for (let e = 0, t; e < h; e++) (t = m + e), (a[t] = i[t] ^ l[e]);
    m += h;
  }
}
function Ov(e, t) {
  let {
    allowShortKeys: n,
    extendNonceFn: r,
    counterLength: i,
    counterRight: a,
    rounds: o,
  } = lv(
    { allowShortKeys: !1, counterLength: 8, counterRight: !1, rounds: 20 },
    t
  );
  if (typeof e != `function`) throw Error(`core must be a function`);
  return (
    $_(i),
    $_(o),
    Q_(a),
    Q_(n),
    (t, s, c, l, u = 0) => {
      ev(t), ev(s), ev(c);
      let d = c.length;
      if (
        (l === void 0 && (l = new Uint8Array(d)),
        ev(l),
        $_(u),
        u < 0 || u >= Tv)
      )
        throw Error(`arx: counter overflow`);
      if (l.length < d)
        throw Error(`arx: output (${l.length}) is shorter than data (${d})`);
      let f = [],
        p = t.length,
        m,
        h;
      if (p === 32) f.push((m = gv(t))), (h = xv);
      else if (p === 16 && n)
        (m = new Uint8Array(32)), m.set(t), m.set(t, 16), (h = bv), f.push(m);
      else throw Error(`arx: invalid 32-byte key, got length=${p}`);
      Sv(s) || f.push((s = gv(s)));
      let g = rv(m);
      if (r) {
        if (s.length !== 24)
          throw Error(`arx: extended nonce must be 24 bytes`);
        r(h, g, rv(s.subarray(0, 16)), g), (s = s.subarray(16));
      }
      let _ = 16 - i;
      if (_ !== s.length) throw Error(`arx: nonce must be ${_} or 16 bytes`);
      if (_ !== 12) {
        let e = new Uint8Array(12);
        e.set(s, a ? 0 : 12 - s.length), (s = e), f.push(s);
      }
      let v = rv(s);
      return Dv(e, h, g, v, c, l, u, o), iv(...f), l;
    }
  );
}
var kv = (e, t) => (e[t++] & 255) | ((e[t++] & 255) << 8),
  Av = class {
    constructor(e) {
      (this.blockLen = 16),
        (this.outputLen = 16),
        (this.buffer = new Uint8Array(16)),
        (this.r = new Uint16Array(10)),
        (this.h = new Uint16Array(10)),
        (this.pad = new Uint16Array(8)),
        (this.pos = 0),
        (this.finished = !1),
        (e = cv(e)),
        ev(e, 32);
      let t = kv(e, 0),
        n = kv(e, 2),
        r = kv(e, 4),
        i = kv(e, 6),
        a = kv(e, 8),
        o = kv(e, 10),
        s = kv(e, 12),
        c = kv(e, 14);
      (this.r[0] = t & 8191),
        (this.r[1] = ((t >>> 13) | (n << 3)) & 8191),
        (this.r[2] = ((n >>> 10) | (r << 6)) & 7939),
        (this.r[3] = ((r >>> 7) | (i << 9)) & 8191),
        (this.r[4] = ((i >>> 4) | (a << 12)) & 255),
        (this.r[5] = (a >>> 1) & 8190),
        (this.r[6] = ((a >>> 14) | (o << 2)) & 8191),
        (this.r[7] = ((o >>> 11) | (s << 5)) & 8065),
        (this.r[8] = ((s >>> 8) | (c << 8)) & 8191),
        (this.r[9] = (c >>> 5) & 127);
      for (let t = 0; t < 8; t++) this.pad[t] = kv(e, 16 + 2 * t);
    }
    process(e, t, n = !1) {
      let r = n ? 0 : 2048,
        { h: i, r: a } = this,
        o = a[0],
        s = a[1],
        c = a[2],
        l = a[3],
        u = a[4],
        d = a[5],
        f = a[6],
        p = a[7],
        m = a[8],
        h = a[9],
        g = kv(e, t + 0),
        _ = kv(e, t + 2),
        v = kv(e, t + 4),
        y = kv(e, t + 6),
        b = kv(e, t + 8),
        x = kv(e, t + 10),
        S = kv(e, t + 12),
        C = kv(e, t + 14),
        w = i[0] + (g & 8191),
        T = i[1] + (((g >>> 13) | (_ << 3)) & 8191),
        E = i[2] + (((_ >>> 10) | (v << 6)) & 8191),
        D = i[3] + (((v >>> 7) | (y << 9)) & 8191),
        O = i[4] + (((y >>> 4) | (b << 12)) & 8191),
        k = i[5] + ((b >>> 1) & 8191),
        A = i[6] + (((b >>> 14) | (x << 2)) & 8191),
        j = i[7] + (((x >>> 11) | (S << 5)) & 8191),
        M = i[8] + (((S >>> 8) | (C << 8)) & 8191),
        N = i[9] + ((C >>> 5) | r),
        P = 0,
        F = P + w * o + 5 * h * T + 5 * m * E + 5 * p * D + 5 * f * O;
      (P = F >>> 13),
        (F &= 8191),
        (F += 5 * d * k + 5 * u * A + 5 * l * j + 5 * c * M + 5 * s * N),
        (P += F >>> 13),
        (F &= 8191);
      let I = P + w * s + T * o + 5 * h * E + 5 * m * D + 5 * p * O;
      (P = I >>> 13),
        (I &= 8191),
        (I += 5 * f * k + 5 * d * A + 5 * u * j + 5 * l * M + 5 * c * N),
        (P += I >>> 13),
        (I &= 8191);
      let L = P + w * c + T * s + E * o + 5 * h * D + 5 * m * O;
      (P = L >>> 13),
        (L &= 8191),
        (L += 5 * p * k + 5 * f * A + 5 * d * j + 5 * u * M + 5 * l * N),
        (P += L >>> 13),
        (L &= 8191);
      let R = P + w * l + T * c + E * s + D * o + 5 * h * O;
      (P = R >>> 13),
        (R &= 8191),
        (R += 5 * m * k + 5 * p * A + 5 * f * j + 5 * d * M + 5 * u * N),
        (P += R >>> 13),
        (R &= 8191);
      let ee = P + w * u + T * l + E * c + D * s + O * o;
      (P = ee >>> 13),
        (ee &= 8191),
        (ee += 5 * h * k + 5 * m * A + 5 * p * j + 5 * f * M + 5 * d * N),
        (P += ee >>> 13),
        (ee &= 8191);
      let te = P + w * d + T * u + E * l + D * c + O * s;
      (P = te >>> 13),
        (te &= 8191),
        (te += k * o + 5 * h * A + 5 * m * j + 5 * p * M + 5 * f * N),
        (P += te >>> 13),
        (te &= 8191);
      let ne = P + w * f + T * d + E * u + D * l + O * c;
      (P = ne >>> 13),
        (ne &= 8191),
        (ne += k * s + A * o + 5 * h * j + 5 * m * M + 5 * p * N),
        (P += ne >>> 13),
        (ne &= 8191);
      let re = P + w * p + T * f + E * d + D * u + O * l;
      (P = re >>> 13),
        (re &= 8191),
        (re += k * c + A * s + j * o + 5 * h * M + 5 * m * N),
        (P += re >>> 13),
        (re &= 8191);
      let ie = P + w * m + T * p + E * f + D * d + O * u;
      (P = ie >>> 13),
        (ie &= 8191),
        (ie += k * l + A * c + j * s + M * o + 5 * h * N),
        (P += ie >>> 13),
        (ie &= 8191);
      let ae = P + w * h + T * m + E * p + D * f + O * d;
      (P = ae >>> 13),
        (ae &= 8191),
        (ae += k * u + A * l + j * c + M * s + N * o),
        (P += ae >>> 13),
        (ae &= 8191),
        (P = ((P << 2) + P) | 0),
        (P = (P + F) | 0),
        (F = P & 8191),
        (P >>>= 13),
        (I += P),
        (i[0] = F),
        (i[1] = I),
        (i[2] = L),
        (i[3] = R),
        (i[4] = ee),
        (i[5] = te),
        (i[6] = ne),
        (i[7] = re),
        (i[8] = ie),
        (i[9] = ae);
    }
    finalize() {
      let { h: e, pad: t } = this,
        n = new Uint16Array(10),
        r = e[1] >>> 13;
      e[1] &= 8191;
      for (let t = 2; t < 10; t++)
        (e[t] += r), (r = e[t] >>> 13), (e[t] &= 8191);
      (e[0] += r * 5),
        (r = e[0] >>> 13),
        (e[0] &= 8191),
        (e[1] += r),
        (r = e[1] >>> 13),
        (e[1] &= 8191),
        (e[2] += r),
        (n[0] = e[0] + 5),
        (r = n[0] >>> 13),
        (n[0] &= 8191);
      for (let t = 1; t < 10; t++)
        (n[t] = e[t] + r), (r = n[t] >>> 13), (n[t] &= 8191);
      n[9] -= 8192;
      let i = (r ^ 1) - 1;
      for (let e = 0; e < 10; e++) n[e] &= i;
      i = ~i;
      for (let t = 0; t < 10; t++) e[t] = (e[t] & i) | n[t];
      (e[0] = (e[0] | (e[1] << 13)) & 65535),
        (e[1] = ((e[1] >>> 3) | (e[2] << 10)) & 65535),
        (e[2] = ((e[2] >>> 6) | (e[3] << 7)) & 65535),
        (e[3] = ((e[3] >>> 9) | (e[4] << 4)) & 65535),
        (e[4] = ((e[4] >>> 12) | (e[5] << 1) | (e[6] << 14)) & 65535),
        (e[5] = ((e[6] >>> 2) | (e[7] << 11)) & 65535),
        (e[6] = ((e[7] >>> 5) | (e[8] << 8)) & 65535),
        (e[7] = ((e[8] >>> 8) | (e[9] << 5)) & 65535);
      let a = e[0] + t[0];
      e[0] = a & 65535;
      for (let n = 1; n < 8; n++)
        (a = (((e[n] + t[n]) | 0) + (a >>> 16)) | 0), (e[n] = a & 65535);
      iv(n);
    }
    update(e) {
      tv(this), (e = cv(e)), ev(e);
      let { buffer: t, blockLen: n } = this,
        r = e.length;
      for (let i = 0; i < r; ) {
        let a = Math.min(n - this.pos, r - i);
        if (a === n) {
          for (; n <= r - i; i += n) this.process(e, i);
          continue;
        }
        t.set(e.subarray(i, i + a), this.pos),
          (this.pos += a),
          (i += a),
          this.pos === n && (this.process(t, 0, !1), (this.pos = 0));
      }
      return this;
    }
    destroy() {
      iv(this.h, this.r, this.buffer, this.pad);
    }
    digestInto(e) {
      tv(this), nv(e, this), (this.finished = !0);
      let { buffer: t, h: n } = this,
        { pos: r } = this;
      if (r) {
        for (t[r++] = 1; r < 16; r++) t[r] = 0;
        this.process(t, 0, !0);
      }
      this.finalize();
      let i = 0;
      for (let t = 0; t < 8; t++) (e[i++] = n[t] >>> 0), (e[i++] = n[t] >>> 8);
      return e;
    }
    digest() {
      let { buffer: e, outputLen: t } = this;
      this.digestInto(e);
      let n = e.slice(0, t);
      return this.destroy(), n;
    }
  };
function jv(e) {
  let t = (t, n) => e(n).update(cv(t)).digest(),
    n = e(new Uint8Array(32));
  return (
    (t.outputLen = n.outputLen),
    (t.blockLen = n.blockLen),
    (t.create = (t) => e(t)),
    t
  );
}
var Mv = jv((e) => new Av(e));
function Nv(e, t, n, r, i, a = 20) {
  let o = e[0],
    s = e[1],
    c = e[2],
    l = e[3],
    u = t[0],
    d = t[1],
    f = t[2],
    p = t[3],
    m = t[4],
    h = t[5],
    g = t[6],
    _ = t[7],
    v = i,
    y = n[0],
    b = n[1],
    x = n[2],
    S = o,
    C = s,
    w = c,
    T = l,
    E = u,
    D = d,
    O = f,
    k = p,
    A = m,
    j = h,
    M = g,
    N = _,
    P = v,
    F = y,
    I = b,
    L = x;
  for (let e = 0; e < a; e += 2)
    (S = (S + E) | 0),
      (P = G(P ^ S, 16)),
      (A = (A + P) | 0),
      (E = G(E ^ A, 12)),
      (S = (S + E) | 0),
      (P = G(P ^ S, 8)),
      (A = (A + P) | 0),
      (E = G(E ^ A, 7)),
      (C = (C + D) | 0),
      (F = G(F ^ C, 16)),
      (j = (j + F) | 0),
      (D = G(D ^ j, 12)),
      (C = (C + D) | 0),
      (F = G(F ^ C, 8)),
      (j = (j + F) | 0),
      (D = G(D ^ j, 7)),
      (w = (w + O) | 0),
      (I = G(I ^ w, 16)),
      (M = (M + I) | 0),
      (O = G(O ^ M, 12)),
      (w = (w + O) | 0),
      (I = G(I ^ w, 8)),
      (M = (M + I) | 0),
      (O = G(O ^ M, 7)),
      (T = (T + k) | 0),
      (L = G(L ^ T, 16)),
      (N = (N + L) | 0),
      (k = G(k ^ N, 12)),
      (T = (T + k) | 0),
      (L = G(L ^ T, 8)),
      (N = (N + L) | 0),
      (k = G(k ^ N, 7)),
      (S = (S + D) | 0),
      (L = G(L ^ S, 16)),
      (M = (M + L) | 0),
      (D = G(D ^ M, 12)),
      (S = (S + D) | 0),
      (L = G(L ^ S, 8)),
      (M = (M + L) | 0),
      (D = G(D ^ M, 7)),
      (C = (C + O) | 0),
      (P = G(P ^ C, 16)),
      (N = (N + P) | 0),
      (O = G(O ^ N, 12)),
      (C = (C + O) | 0),
      (P = G(P ^ C, 8)),
      (N = (N + P) | 0),
      (O = G(O ^ N, 7)),
      (w = (w + k) | 0),
      (F = G(F ^ w, 16)),
      (A = (A + F) | 0),
      (k = G(k ^ A, 12)),
      (w = (w + k) | 0),
      (F = G(F ^ w, 8)),
      (A = (A + F) | 0),
      (k = G(k ^ A, 7)),
      (T = (T + E) | 0),
      (I = G(I ^ T, 16)),
      (j = (j + I) | 0),
      (E = G(E ^ j, 12)),
      (T = (T + E) | 0),
      (I = G(I ^ T, 8)),
      (j = (j + I) | 0),
      (E = G(E ^ j, 7));
  let R = 0;
  (r[R++] = (o + S) | 0),
    (r[R++] = (s + C) | 0),
    (r[R++] = (c + w) | 0),
    (r[R++] = (l + T) | 0),
    (r[R++] = (u + E) | 0),
    (r[R++] = (d + D) | 0),
    (r[R++] = (f + O) | 0),
    (r[R++] = (p + k) | 0),
    (r[R++] = (m + A) | 0),
    (r[R++] = (h + j) | 0),
    (r[R++] = (g + M) | 0),
    (r[R++] = (_ + N) | 0),
    (r[R++] = (v + P) | 0),
    (r[R++] = (y + F) | 0),
    (r[R++] = (b + I) | 0),
    (r[R++] = (x + L) | 0);
}
var Pv = Ov(Nv, { counterRight: !1, counterLength: 4, allowShortKeys: !1 }),
  Fv = new Uint8Array(16),
  Iv = (e, t) => {
    e.update(t);
    let n = t.length % 16;
    n && e.update(Fv.subarray(n));
  },
  Lv = new Uint8Array(32);
function Rv(e, t, n, r, i) {
  let a = e(t, n, Lv),
    o = Mv.create(a);
  i && Iv(o, i), Iv(o, r);
  let s = mv(r.length, i ? i.length : 0, !0);
  o.update(s);
  let c = o.digest();
  return iv(a, s), c;
}
var zv = dv(
    { blockSize: 64, nonceLength: 12, tagLength: 16 },
    ((e) => (t, n, r) => ({
      encrypt(i, a) {
        let o = i.length;
        (a = fv(o + 16, a, !1)), a.set(i);
        let s = a.subarray(0, -16);
        e(t, n, s, s, 1);
        let c = Rv(e, t, n, s, r);
        return a.set(c, o), iv(c), a;
      },
      decrypt(i, a) {
        a = fv(i.length - 16, a, !1);
        let o = i.subarray(0, -16),
          s = i.subarray(-16),
          c = Rv(e, t, n, o, r);
        if (!uv(s, c)) throw Error(`invalid tag`);
        return a.set(i.subarray(0, -16)), e(t, n, a, a, 1), iv(c), a;
      },
    }))(Pv)
  ),
  Bv = class extends ag {
    constructor(e, t) {
      super(), (this.finished = !1), (this.destroyed = !1), Rh(e);
      let n = rg(t);
      if (((this.iHash = e.create()), typeof this.iHash.update != `function`))
        throw Error(`Expected instance of class which extends utils.Hash`);
      (this.blockLen = this.iHash.blockLen),
        (this.outputLen = this.iHash.outputLen);
      let r = this.blockLen,
        i = new Uint8Array(r);
      i.set(n.length > r ? e.create().update(n).digest() : n);
      for (let e = 0; e < i.length; e++) i[e] ^= 54;
      this.iHash.update(i), (this.oHash = e.create());
      for (let e = 0; e < i.length; e++) i[e] ^= 106;
      this.oHash.update(i), Hh(i);
    }
    update(e) {
      return zh(this), this.iHash.update(e), this;
    }
    digestInto(e) {
      zh(this),
        Lh(e, this.outputLen),
        (this.finished = !0),
        this.iHash.digestInto(e),
        this.oHash.update(e),
        this.oHash.digestInto(e),
        this.destroy();
    }
    digest() {
      let e = new Uint8Array(this.oHash.outputLen);
      return this.digestInto(e), e;
    }
    _cloneInto(e) {
      e ||= Object.create(Object.getPrototypeOf(this), {});
      let {
        oHash: t,
        iHash: n,
        finished: r,
        destroyed: i,
        blockLen: a,
        outputLen: o,
      } = this;
      return (
        (e = e),
        (e.finished = r),
        (e.destroyed = i),
        (e.blockLen = a),
        (e.outputLen = o),
        (e.oHash = t._cloneInto(e.oHash)),
        (e.iHash = n._cloneInto(e.iHash)),
        e
      );
    }
    clone() {
      return this._cloneInto();
    }
    destroy() {
      (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
    }
  },
  Vv = (e, t, n) => new Bv(e, t).update(n).digest();
Vv.create = (e, t) => new Bv(e, t);
function Hv(e, t, n) {
  return (
    Rh(e),
    n === void 0 && (n = new Uint8Array(e.outputLen)),
    Vv(e, rg(n), rg(t))
  );
}
var Uv = Uint8Array.from([0]),
  Wv = Uint8Array.of();
function Gv(e, t, n, r = 32) {
  Rh(e), Ih(r);
  let i = e.outputLen;
  if (r > 255 * i) throw Error(`Length should be <= 255*HashLen`);
  let a = Math.ceil(r / i);
  n === void 0 && (n = Wv);
  let o = new Uint8Array(a * i),
    s = Vv.create(e, t),
    c = s._cloneInto(),
    l = new Uint8Array(s.outputLen);
  for (let e = 0; e < a; e++)
    (Uv[0] = e + 1),
      c
        .update(e === 0 ? Wv : l)
        .update(n)
        .update(Uv)
        .digestInto(l),
      o.set(l, i * e),
      s._cloneInto(c);
  return s.destroy(), c.destroy(), Hh(l, Uv), o.slice(0, r);
}
var Kv = (e, t, n, r, i) => Gv(e, Hv(e, t, n), r, i),
  qv = Gg,
  Jv = BigInt(0),
  Yv = BigInt(1);
function Xv(e, t = ``) {
  if (typeof e != `boolean`) {
    let n = t && `"${t}"`;
    throw Error(n + `expected boolean, got type=` + typeof e);
  }
  return e;
}
function Zv(e, t, n = ``) {
  let r = Fh(e),
    i = e?.length,
    a = t !== void 0;
  if (!r || (a && i !== t)) {
    let o = n && `"${n}" `,
      s = a ? ` of length ${t}` : ``,
      c = r ? `length=${i}` : `type=${typeof e}`;
    throw Error(o + `expected Uint8Array` + s + `, got ` + c);
  }
  return e;
}
function Qv(e) {
  let t = e.toString(16);
  return t.length & 1 ? `0` + t : t;
}
function $v(e) {
  if (typeof e != `string`) throw Error(`hex string expected, got ` + typeof e);
  return e === `` ? Jv : BigInt(`0x` + e);
}
function ey(e) {
  return $v(Qh(e));
}
function ty(e) {
  return Lh(e), $v(Qh(Uint8Array.from(e).reverse()));
}
function ny(e, t) {
  return tg(e.toString(16).padStart(t * 2, `0`));
}
function ry(e, t) {
  return ny(e, t).reverse();
}
function iy(e, t, n) {
  let r;
  if (typeof t == `string`)
    try {
      r = tg(t);
    } catch (t) {
      throw Error(e + ` must be hex string or Uint8Array, cause: ` + t);
    }
  else if (Fh(t)) r = Uint8Array.from(t);
  else throw Error(e + ` must be hex string or Uint8Array`);
  let i = r.length;
  if (typeof n == `number` && i !== n)
    throw Error(e + ` of length ` + n + ` expected, got ` + i);
  return r;
}
var ay = (e) => typeof e == `bigint` && Jv <= e;
function oy(e, t, n) {
  return ay(e) && ay(t) && ay(n) && t <= e && e < n;
}
function sy(e, t, n, r) {
  if (!oy(t, n, r))
    throw Error(
      `expected valid ` + e + `: ` + n + ` <= n < ` + r + `, got ` + t
    );
}
function cy(e) {
  let t = 0;
  for (; e > Jv; e >>= Yv, t += 1);
  return t;
}
var ly = (e) => (Yv << BigInt(e)) - Yv;
function uy(e, t, n) {
  if (typeof e != `number` || e < 2) throw Error(`hashLen must be a number`);
  if (typeof t != `number` || t < 2) throw Error(`qByteLen must be a number`);
  if (typeof n != `function`) throw Error(`hmacFn must be a function`);
  let r = (e) => new Uint8Array(e),
    i = (e) => Uint8Array.of(e),
    a = r(e),
    o = r(e),
    s = 0,
    c = () => {
      a.fill(1), o.fill(0), (s = 0);
    },
    l = (...e) => n(o, a, ...e),
    u = (e = r(0)) => {
      (o = l(i(0), e)),
        (a = l()),
        e.length !== 0 && ((o = l(i(1), e)), (a = l()));
    },
    d = () => {
      if (s++ >= 1e3) throw Error(`drbg: tried 1000 values`);
      let e = 0,
        n = [];
      for (; e < t; ) {
        a = l();
        let t = a.slice();
        n.push(t), (e += a.length);
      }
      return ig(...n);
    };
  return (e, t) => {
    c(), u(e);
    let n;
    for (; !(n = t(d())); ) u();
    return c(), n;
  };
}
function dy(e, t, n = {}) {
  if (!e || typeof e != `object`) throw Error(`expected valid options object`);
  function r(t, n, r) {
    let i = e[t];
    if (r && i === void 0) return;
    let a = typeof i;
    if (a !== n || i === null)
      throw Error(`param "${t}" is invalid: expected ${n}, got ${a}`);
  }
  Object.entries(t).forEach(([e, t]) => r(e, t, !1)),
    Object.entries(n).forEach(([e, t]) => r(e, t, !0));
}
function fy(e) {
  let t = new WeakMap();
  return (n, ...r) => {
    let i = t.get(n);
    if (i !== void 0) return i;
    let a = e(n, ...r);
    return t.set(n, a), a;
  };
}
var py = BigInt(0),
  my = BigInt(1),
  hy = BigInt(2),
  gy = BigInt(3),
  _y = BigInt(4),
  vy = BigInt(5),
  yy = BigInt(7),
  by = BigInt(8),
  xy = BigInt(9),
  Sy = BigInt(16);
function Cy(e, t) {
  let n = e % t;
  return n >= py ? n : t + n;
}
function wy(e, t, n) {
  let r = e;
  for (; t-- > py; ) (r *= r), (r %= n);
  return r;
}
function Ty(e, t) {
  if (e === py) throw Error(`invert: expected non-zero number`);
  if (t <= py) throw Error(`invert: expected positive modulus, got ` + t);
  let n = Cy(e, t),
    r = t,
    i = py,
    a = my;
  for (; n !== py; ) {
    let e = r / n,
      t = r % n,
      o = i - a * e;
    (r = n), (n = t), (i = a), (a = o);
  }
  if (r !== my) throw Error(`invert: does not exist`);
  return Cy(i, t);
}
function Ey(e, t, n) {
  if (!e.eql(e.sqr(t), n)) throw Error(`Cannot find square root`);
}
function Dy(e, t) {
  let n = (e.ORDER + my) / _y,
    r = e.pow(t, n);
  return Ey(e, r, t), r;
}
function Oy(e, t) {
  let n = (e.ORDER - vy) / by,
    r = e.mul(t, hy),
    i = e.pow(r, n),
    a = e.mul(t, i),
    o = e.mul(e.mul(a, hy), i),
    s = e.mul(a, e.sub(o, e.ONE));
  return Ey(e, s, t), s;
}
function ky(e) {
  let t = Ry(e),
    n = Ay(e),
    r = n(t, t.neg(t.ONE)),
    i = n(t, r),
    a = n(t, t.neg(r)),
    o = (e + yy) / Sy;
  return (e, t) => {
    let n = e.pow(t, o),
      s = e.mul(n, r),
      c = e.mul(n, i),
      l = e.mul(n, a),
      u = e.eql(e.sqr(s), t),
      d = e.eql(e.sqr(c), t);
    (n = e.cmov(n, s, u)), (s = e.cmov(l, c, d));
    let f = e.eql(e.sqr(s), t),
      p = e.cmov(n, s, f);
    return Ey(e, p, t), p;
  };
}
function Ay(e) {
  if (e < gy) throw Error(`sqrt is not defined for small field`);
  let t = e - my,
    n = 0;
  for (; t % hy === py; ) (t /= hy), n++;
  let r = hy,
    i = Ry(e);
  for (; Iy(i, r) === 1; )
    if (r++ > 1e3) throw Error(`Cannot find square root: probably non-prime P`);
  if (n === 1) return Dy;
  let a = i.pow(r, t),
    o = (t + my) / hy;
  return function (e, r) {
    if (e.is0(r)) return r;
    if (Iy(e, r) !== 1) throw Error(`Cannot find square root`);
    let i = n,
      s = e.mul(e.ONE, a),
      c = e.pow(r, t),
      l = e.pow(r, o);
    for (; !e.eql(c, e.ONE); ) {
      if (e.is0(c)) return e.ZERO;
      let t = 1,
        n = e.sqr(c);
      for (; !e.eql(n, e.ONE); )
        if ((t++, (n = e.sqr(n)), t === i))
          throw Error(`Cannot find square root`);
      let r = my << BigInt(i - t - 1),
        a = e.pow(s, r);
      (i = t), (s = e.sqr(a)), (c = e.mul(c, s)), (l = e.mul(l, a));
    }
    return l;
  };
}
function jy(e) {
  return e % _y === gy
    ? Dy
    : e % by === vy
    ? Oy
    : e % Sy === xy
    ? ky(e)
    : Ay(e);
}
var My = [
  `create`,
  `isValid`,
  `is0`,
  `neg`,
  `inv`,
  `sqrt`,
  `sqr`,
  `eql`,
  `add`,
  `sub`,
  `mul`,
  `pow`,
  `div`,
  `addN`,
  `subN`,
  `mulN`,
  `sqrN`,
];
function Ny(e) {
  return (
    dy(
      e,
      My.reduce((e, t) => ((e[t] = `function`), e), {
        ORDER: `bigint`,
        MASK: `bigint`,
        BYTES: `number`,
        BITS: `number`,
      })
    ),
    e
  );
}
function Py(e, t, n) {
  if (n < py) throw Error(`invalid exponent, negatives unsupported`);
  if (n === py) return e.ONE;
  if (n === my) return t;
  let r = e.ONE,
    i = t;
  for (; n > py; ) n & my && (r = e.mul(r, i)), (i = e.sqr(i)), (n >>= my);
  return r;
}
function Fy(e, t, n = !1) {
  let r = Array(t.length).fill(n ? e.ZERO : void 0),
    i = t.reduce(
      (t, n, i) => (e.is0(n) ? t : ((r[i] = t), e.mul(t, n))),
      e.ONE
    ),
    a = e.inv(i);
  return (
    t.reduceRight(
      (t, n, i) => (e.is0(n) ? t : ((r[i] = e.mul(t, r[i])), e.mul(t, n))),
      a
    ),
    r
  );
}
function Iy(e, t) {
  let n = (e.ORDER - my) / hy,
    r = e.pow(t, n),
    i = e.eql(r, e.ONE),
    a = e.eql(r, e.ZERO),
    o = e.eql(r, e.neg(e.ONE));
  if (!i && !a && !o) throw Error(`invalid Legendre symbol result`);
  return i ? 1 : a ? 0 : -1;
}
function Ly(e, t) {
  t !== void 0 && Ih(t);
  let n = t === void 0 ? e.toString(2).length : t;
  return { nBitLength: n, nByteLength: Math.ceil(n / 8) };
}
function Ry(e, t, n = !1, r = {}) {
  if (e <= py) throw Error(`invalid field: expected ORDER > 0, got ` + e);
  let i,
    a,
    o = !1,
    s;
  if (typeof t == `object` && t) {
    if (r.sqrt || n) throw Error(`cannot specify opts in two arguments`);
    let e = t;
    e.BITS && (i = e.BITS),
      e.sqrt && (a = e.sqrt),
      typeof e.isLE == `boolean` && (n = e.isLE),
      typeof e.modFromBytes == `boolean` && (o = e.modFromBytes),
      (s = e.allowedLengths);
  } else typeof t == `number` && (i = t), r.sqrt && (a = r.sqrt);
  let { nBitLength: c, nByteLength: l } = Ly(e, i);
  if (l > 2048) throw Error(`invalid field: expected ORDER of <= 2048 bytes`);
  let u,
    d = Object.freeze({
      ORDER: e,
      isLE: n,
      BITS: c,
      BYTES: l,
      MASK: ly(c),
      ZERO: py,
      ONE: my,
      allowedLengths: s,
      create: (t) => Cy(t, e),
      isValid: (t) => {
        if (typeof t != `bigint`)
          throw Error(
            `invalid field element: expected bigint, got ` + typeof t
          );
        return py <= t && t < e;
      },
      is0: (e) => e === py,
      isValidNot0: (e) => !d.is0(e) && d.isValid(e),
      isOdd: (e) => (e & my) === my,
      neg: (t) => Cy(-t, e),
      eql: (e, t) => e === t,
      sqr: (t) => Cy(t * t, e),
      add: (t, n) => Cy(t + n, e),
      sub: (t, n) => Cy(t - n, e),
      mul: (t, n) => Cy(t * n, e),
      pow: (e, t) => Py(d, e, t),
      div: (t, n) => Cy(t * Ty(n, e), e),
      sqrN: (e) => e * e,
      addN: (e, t) => e + t,
      subN: (e, t) => e - t,
      mulN: (e, t) => e * t,
      inv: (t) => Ty(t, e),
      sqrt: a || ((t) => ((u ||= jy(e)), u(d, t))),
      toBytes: (e) => (n ? ry(e, l) : ny(e, l)),
      fromBytes: (t, r = !0) => {
        if (s) {
          if (!s.includes(t.length) || t.length > l)
            throw Error(
              `Field.fromBytes: expected ` + s + ` bytes, got ` + t.length
            );
          let e = new Uint8Array(l);
          e.set(t, n ? 0 : e.length - t.length), (t = e);
        }
        if (t.length !== l)
          throw Error(
            `Field.fromBytes: expected ` + l + ` bytes, got ` + t.length
          );
        let i = n ? ty(t) : ey(t);
        if ((o && (i = Cy(i, e)), !r && !d.isValid(i)))
          throw Error(`invalid field element: outside of range 0..ORDER`);
        return i;
      },
      invertBatch: (e) => Fy(d, e),
      cmov: (e, t, n) => (n ? t : e),
    });
  return Object.freeze(d);
}
function zy(e) {
  if (typeof e != `bigint`) throw Error(`field order must be bigint`);
  let t = e.toString(2).length;
  return Math.ceil(t / 8);
}
function By(e) {
  let t = zy(e);
  return t + Math.ceil(t / 2);
}
function Vy(e, t, n = !1) {
  let r = e.length,
    i = zy(t),
    a = By(t);
  if (r < 16 || r < a || r > 1024)
    throw Error(`expected ` + a + `-1024 bytes of input, got ` + r);
  let o = Cy(n ? ty(e) : ey(e), t - my) + my;
  return n ? ry(o, i) : ny(o, i);
}
var Hy = BigInt(0),
  Uy = BigInt(1);
function Wy(e, t) {
  let n = t.negate();
  return e ? n : t;
}
function Gy(e, t) {
  let n = Fy(
    e.Fp,
    t.map((e) => e.Z)
  );
  return t.map((t, r) => e.fromAffine(t.toAffine(n[r])));
}
function Ky(e, t) {
  if (!Number.isSafeInteger(e) || e <= 0 || e > t)
    throw Error(`invalid window size, expected [1..` + t + `], got W=` + e);
}
function qy(e, t) {
  Ky(e, t);
  let n = Math.ceil(t / e) + 1,
    r = 2 ** (e - 1),
    i = 2 ** e;
  return {
    windows: n,
    windowSize: r,
    mask: ly(e),
    maxNumber: i,
    shiftBy: BigInt(e),
  };
}
function Jy(e, t, n) {
  let { windowSize: r, mask: i, maxNumber: a, shiftBy: o } = n,
    s = Number(e & i),
    c = e >> o;
  s > r && ((s -= a), (c += Uy));
  let l = t * r,
    u = l + Math.abs(s) - 1,
    d = s === 0,
    f = s < 0,
    p = t % 2 != 0;
  return { nextN: c, offset: u, isZero: d, isNeg: f, isNegF: p, offsetF: l };
}
function Yy(e, t) {
  if (!Array.isArray(e)) throw Error(`array expected`);
  e.forEach((e, n) => {
    if (!(e instanceof t)) throw Error(`invalid point at index ` + n);
  });
}
function Xy(e, t) {
  if (!Array.isArray(e)) throw Error(`array of scalars expected`);
  e.forEach((e, n) => {
    if (!t.isValid(e)) throw Error(`invalid scalar at index ` + n);
  });
}
var Zy = new WeakMap(),
  Qy = new WeakMap();
function $y(e) {
  return Qy.get(e) || 1;
}
function eb(e) {
  if (e !== Hy) throw Error(`invalid wNAF`);
}
var tb = class {
  constructor(e, t) {
    (this.BASE = e.BASE),
      (this.ZERO = e.ZERO),
      (this.Fn = e.Fn),
      (this.bits = t);
  }
  _unsafeLadder(e, t, n = this.ZERO) {
    let r = e;
    for (; t > Hy; ) t & Uy && (n = n.add(r)), (r = r.double()), (t >>= Uy);
    return n;
  }
  precomputeWindow(e, t) {
    let { windows: n, windowSize: r } = qy(t, this.bits),
      i = [],
      a = e,
      o = a;
    for (let e = 0; e < n; e++) {
      (o = a), i.push(o);
      for (let e = 1; e < r; e++) (o = o.add(a)), i.push(o);
      a = o.double();
    }
    return i;
  }
  wNAF(e, t, n) {
    if (!this.Fn.isValid(n)) throw Error(`invalid scalar`);
    let r = this.ZERO,
      i = this.BASE,
      a = qy(e, this.bits);
    for (let e = 0; e < a.windows; e++) {
      let {
        nextN: o,
        offset: s,
        isZero: c,
        isNeg: l,
        isNegF: u,
        offsetF: d,
      } = Jy(n, e, a);
      (n = o), c ? (i = i.add(Wy(u, t[d]))) : (r = r.add(Wy(l, t[s])));
    }
    return eb(n), { p: r, f: i };
  }
  wNAFUnsafe(e, t, n, r = this.ZERO) {
    let i = qy(e, this.bits);
    for (let e = 0; e < i.windows && n !== Hy; e++) {
      let { nextN: a, offset: o, isZero: s, isNeg: c } = Jy(n, e, i);
      if (((n = a), !s)) {
        let e = t[o];
        r = r.add(c ? e.negate() : e);
      }
    }
    return eb(n), r;
  }
  getPrecomputes(e, t, n) {
    let r = Zy.get(t);
    return (
      r ||
        ((r = this.precomputeWindow(t, e)),
        e !== 1 && (typeof n == `function` && (r = n(r)), Zy.set(t, r))),
      r
    );
  }
  cached(e, t, n) {
    let r = $y(e);
    return this.wNAF(r, this.getPrecomputes(r, e, n), t);
  }
  unsafe(e, t, n, r) {
    let i = $y(e);
    return i === 1
      ? this._unsafeLadder(e, t, r)
      : this.wNAFUnsafe(i, this.getPrecomputes(i, e, n), t, r);
  }
  createCache(e, t) {
    Ky(t, this.bits), Qy.set(e, t), Zy.delete(e);
  }
  hasCache(e) {
    return $y(e) !== 1;
  }
};
function nb(e, t, n, r) {
  let i = t,
    a = e.ZERO,
    o = e.ZERO;
  for (; n > Hy || r > Hy; )
    n & Uy && (a = a.add(i)),
      r & Uy && (o = o.add(i)),
      (i = i.double()),
      (n >>= Uy),
      (r >>= Uy);
  return { p1: a, p2: o };
}
function rb(e, t, n, r) {
  Yy(n, e), Xy(r, t);
  let i = n.length,
    a = r.length;
  if (i !== a)
    throw Error(`arrays of points and scalars must have equal length`);
  let o = e.ZERO,
    s = cy(BigInt(i)),
    c = 1;
  s > 12 ? (c = s - 3) : s > 4 ? (c = s - 2) : s > 0 && (c = 2);
  let l = ly(c),
    u = Array(Number(l) + 1).fill(o),
    d = Math.floor((t.BITS - 1) / c) * c,
    f = o;
  for (let e = d; e >= 0; e -= c) {
    u.fill(o);
    for (let t = 0; t < a; t++) {
      let i = r[t],
        a = Number((i >> BigInt(e)) & l);
      u[a] = u[a].add(n[t]);
    }
    let t = o;
    for (let e = u.length - 1, n = o; e > 0; e--)
      (n = n.add(u[e])), (t = t.add(n));
    if (((f = f.add(t)), e !== 0)) for (let e = 0; e < c; e++) f = f.double();
  }
  return f;
}
function ib(e, t, n) {
  if (t) {
    if (t.ORDER !== e)
      throw Error(`Field.ORDER must match order: Fp == p, Fn == n`);
    return Ny(t), t;
  }
  return Ry(e, { isLE: n });
}
function ab(e, t, n = {}, r) {
  if ((r === void 0 && (r = e === `edwards`), !t || typeof t != `object`))
    throw Error(`expected valid ${e} CURVE object`);
  for (let e of [`p`, `n`, `h`]) {
    let n = t[e];
    if (!(typeof n == `bigint` && n > Hy))
      throw Error(`CURVE.${e} must be positive bigint`);
  }
  let i = ib(t.p, n.Fp, r),
    a = ib(t.n, n.Fn, r),
    o = [`Gx`, `Gy`, `a`, e === `weierstrass` ? `b` : `d`];
  for (let e of o)
    if (!i.isValid(t[e]))
      throw Error(`CURVE.${e} must be valid field element of CURVE.Fp`);
  return (t = Object.freeze(Object.assign({}, t))), { CURVE: t, Fp: i, Fn: a };
}
ng(`HashToScalar-`);
var ob = BigInt(0),
  sb = BigInt(1),
  cb = BigInt(2);
function lb(e) {
  return (
    dy(e, { adjustScalarBytes: `function`, powPminus2: `function` }),
    Object.freeze({ ...e })
  );
}
function ub(e) {
  let {
      P: t,
      type: n,
      adjustScalarBytes: r,
      powPminus2: i,
      randomBytes: a,
    } = lb(e),
    o = n === `x25519`;
  if (!o && n !== `x448`) throw Error(`invalid type`);
  let s = a || cg,
    c = o ? 255 : 448,
    l = o ? 32 : 56,
    u = BigInt(o ? 9 : 5),
    d = BigInt(o ? 121665 : 39081),
    f = o ? cb ** BigInt(254) : cb ** BigInt(447),
    p =
      f +
      (o
        ? BigInt(8) * cb ** BigInt(251) - sb
        : BigInt(4) * cb ** BigInt(445) - sb) +
      sb,
    m = (e) => Cy(e, t),
    h = g(u);
  function g(e) {
    return ry(m(e), l);
  }
  function _(e) {
    let t = iy(`u coordinate`, e, l);
    return o && (t[31] &= 127), m(ty(t));
  }
  function v(e) {
    return ty(r(iy(`scalar`, e, l)));
  }
  function y(e, t) {
    let n = S(_(t), v(e));
    if (n === ob) throw Error(`invalid private or public key received`);
    return g(n);
  }
  function b(e) {
    return y(e, h);
  }
  function x(e, t, n) {
    let r = m(e * (t - n));
    return (t = m(t - r)), (n = m(n + r)), { x_2: t, x_3: n };
  }
  function S(e, n) {
    sy(`u`, e, ob, t), sy(`scalar`, n, f, p);
    let r = n,
      a = e,
      o = sb,
      s = ob,
      l = e,
      u = sb,
      h = ob;
    for (let e = BigInt(c - 1); e >= ob; e--) {
      let t = (r >> e) & sb;
      (h ^= t),
        ({ x_2: o, x_3: l } = x(h, o, l)),
        ({ x_2: s, x_3: u } = x(h, s, u)),
        (h = t);
      let n = o + s,
        i = m(n * n),
        c = o - s,
        f = m(c * c),
        p = i - f,
        g = l + u,
        _ = l - u,
        v = m(_ * n),
        y = m(g * c),
        b = v + y,
        S = v - y;
      (l = m(b * b)),
        (u = m(a * m(S * S))),
        (o = m(i * f)),
        (s = m(p * (i + m(d * p))));
    }
    ({ x_2: o, x_3: l } = x(h, o, l)), ({ x_2: s, x_3: u } = x(h, s, u));
    let g = i(s);
    return m(o * g);
  }
  let C = { secretKey: l, publicKey: l, seed: l },
    w = (e = s(l)) => (Lh(e, C.seed), e);
  function T(e) {
    let t = w(e);
    return { secretKey: t, publicKey: b(t) };
  }
  return {
    keygen: T,
    getSharedSecret: (e, t) => y(e, t),
    getPublicKey: (e) => b(e),
    scalarMult: y,
    scalarMultBase: b,
    utils: { randomSecretKey: w, randomPrivateKey: w },
    GuBytes: h.slice(),
    lengths: C,
  };
}
var db = BigInt(1),
  fb = BigInt(2),
  pb = BigInt(3),
  mb = BigInt(5),
  hb = BigInt(8),
  gb = BigInt(
    `0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed`
  ),
  _b = {
    p: gb,
    n: BigInt(
      `0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed`
    ),
    h: hb,
    a: BigInt(
      `0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec`
    ),
    d: BigInt(
      `0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3`
    ),
    Gx: BigInt(
      `0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a`
    ),
    Gy: BigInt(
      `0x6666666666666666666666666666666666666666666666666666666666666658`
    ),
  };
function vb(e) {
  let t = BigInt(10),
    n = BigInt(20),
    r = BigInt(40),
    i = BigInt(80),
    a = gb,
    o = (((e * e) % a) * e) % a,
    s = (wy((wy(o, fb, a) * o) % a, db, a) * e) % a,
    c = (wy(s, mb, a) * s) % a,
    l = (wy(c, t, a) * c) % a,
    u = (wy(l, n, a) * l) % a,
    d = (wy(u, r, a) * u) % a;
  return {
    pow_p_5_8:
      (wy(
        (wy((wy((wy(d, i, a) * d) % a, i, a) * d) % a, t, a) * c) % a,
        fb,
        a
      ) *
        e) %
      a,
    b2: o,
  };
}
function yb(e) {
  return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
}
var bb = Ry(_b.p, { isLE: !0 }),
  xb = (() => {
    let e = bb.ORDER;
    return ub({
      P: e,
      type: `x25519`,
      powPminus2: (t) => {
        let { pow_p_5_8: n, b2: r } = vb(t);
        return Cy(wy(n, pb, e) * r, e);
      },
      adjustScalarBytes: yb,
    });
  })(),
  Sb = (e, t) => (e + (e >= 0 ? t : -t) / kb) / t;
function Cb(e, t, n) {
  let [[r, i], [a, o]] = t,
    s = Sb(o * e, n),
    c = Sb(-i * e, n),
    l = e - s * r - c * a,
    u = -s * i - c * o,
    d = l < Db,
    f = u < Db;
  d && (l = -l), f && (u = -u);
  let p = ly(Math.ceil(cy(n) / 2)) + Ob;
  if (l < Db || l >= p || u < Db || u >= p)
    throw Error(`splitScalar (endomorphism): failed, k=` + e);
  return { k1neg: d, k1: l, k2neg: f, k2: u };
}
function wb(e) {
  if (![`compact`, `recovered`, `der`].includes(e))
    throw Error(`Signature format must be "compact", "recovered", or "der"`);
  return e;
}
function Tb(e, t) {
  let n = {};
  for (let r of Object.keys(t)) n[r] = e[r] === void 0 ? t[r] : e[r];
  return (
    Xv(n.lowS, `lowS`),
    Xv(n.prehash, `prehash`),
    n.format !== void 0 && wb(n.format),
    n
  );
}
var Eb = {
    Err: class extends Error {
      constructor(e = ``) {
        super(e);
      }
    },
    _tlv: {
      encode: (e, t) => {
        let { Err: n } = Eb;
        if (e < 0 || e > 256) throw new n(`tlv.encode: wrong tag`);
        if (t.length & 1) throw new n(`tlv.encode: unpadded data`);
        let r = t.length / 2,
          i = Qv(r);
        if ((i.length / 2) & 128)
          throw new n(`tlv.encode: long form length too big`);
        let a = r > 127 ? Qv((i.length / 2) | 128) : ``;
        return Qv(e) + a + i + t;
      },
      decode(e, t) {
        let { Err: n } = Eb,
          r = 0;
        if (e < 0 || e > 256) throw new n(`tlv.encode: wrong tag`);
        if (t.length < 2 || t[r++] !== e) throw new n(`tlv.decode: wrong tlv`);
        let i = t[r++],
          a = !!(i & 128),
          o = 0;
        if (!a) o = i;
        else {
          let e = i & 127;
          if (!e)
            throw new n(`tlv.decode(long): indefinite length not supported`);
          if (e > 4) throw new n(`tlv.decode(long): byte length is too big`);
          let a = t.subarray(r, r + e);
          if (a.length !== e)
            throw new n(`tlv.decode: length bytes not complete`);
          if (a[0] === 0) throw new n(`tlv.decode(long): zero leftmost byte`);
          for (let e of a) o = (o << 8) | e;
          if (((r += e), o < 128))
            throw new n(`tlv.decode(long): not minimal encoding`);
        }
        let s = t.subarray(r, r + o);
        if (s.length !== o) throw new n(`tlv.decode: wrong value length`);
        return { v: s, l: t.subarray(r + o) };
      },
    },
    _int: {
      encode(e) {
        let { Err: t } = Eb;
        if (e < Db) throw new t(`integer: negative integers are not allowed`);
        let n = Qv(e);
        if ((Number.parseInt(n[0], 16) & 8 && (n = `00` + n), n.length & 1))
          throw new t(`unexpected DER parsing assertion: unpadded hex`);
        return n;
      },
      decode(e) {
        let { Err: t } = Eb;
        if (e[0] & 128) throw new t(`invalid signature integer: negative`);
        if (e[0] === 0 && !(e[1] & 128))
          throw new t(`invalid signature integer: unnecessary leading zero`);
        return ey(e);
      },
    },
    toSig(e) {
      let { Err: t, _int: n, _tlv: r } = Eb,
        i = iy(`signature`, e),
        { v: a, l: o } = r.decode(48, i);
      if (o.length) throw new t(`invalid signature: left bytes after parsing`);
      let { v: s, l: c } = r.decode(2, a),
        { v: l, l: u } = r.decode(2, c);
      if (u.length) throw new t(`invalid signature: left bytes after parsing`);
      return { r: n.decode(s), s: n.decode(l) };
    },
    hexFromSig(e) {
      let { _tlv: t, _int: n } = Eb,
        r = t.encode(2, n.encode(e.r)) + t.encode(2, n.encode(e.s));
      return t.encode(48, r);
    },
  },
  Db = BigInt(0),
  Ob = BigInt(1),
  kb = BigInt(2),
  Ab = BigInt(3),
  jb = BigInt(4);
function Mb(e, t) {
  let { BYTES: n } = e,
    r;
  if (typeof t == `bigint`) r = t;
  else {
    let i = iy(`private key`, t);
    try {
      r = e.fromBytes(i);
    } catch {
      throw Error(
        `invalid private key: expected ui8a of size ${n}, got ${typeof t}`
      );
    }
  }
  if (!e.isValidNot0(r))
    throw Error(`invalid private key: out of range [1..N-1]`);
  return r;
}
function Nb(e, t = {}) {
  let n = ab(`weierstrass`, e, t),
    { Fp: r, Fn: i } = n,
    a = n.CURVE,
    { h: o, n: s } = a;
  dy(
    t,
    {},
    {
      allowInfinityPoint: `boolean`,
      clearCofactor: `function`,
      isTorsionFree: `function`,
      fromBytes: `function`,
      toBytes: `function`,
      endo: `object`,
      wrapPrivateKey: `boolean`,
    }
  );
  let { endo: c } = t;
  if (
    c &&
    (!r.is0(a.a) || typeof c.beta != `bigint` || !Array.isArray(c.basises))
  )
    throw Error(`invalid endo: expected "beta": bigint and "basises": array`);
  let l = Fb(r, i);
  function u() {
    if (!r.isOdd)
      throw Error(`compression is not supported: Field does not have .isOdd()`);
  }
  function d(e, t, n) {
    let { x: i, y: a } = t.toAffine(),
      o = r.toBytes(i);
    return (
      Xv(n, `isCompressed`),
      n ? (u(), ig(Pb(!r.isOdd(a)), o)) : ig(Uint8Array.of(4), o, r.toBytes(a))
    );
  }
  function f(e) {
    Zv(e, void 0, `Point`);
    let { publicKey: t, publicKeyUncompressed: n } = l,
      i = e.length,
      a = e[0],
      o = e.subarray(1);
    if (i === t && (a === 2 || a === 3)) {
      let e = r.fromBytes(o);
      if (!r.isValid(e)) throw Error(`bad point: is not on curve, wrong x`);
      let t = h(e),
        n;
      try {
        n = r.sqrt(t);
      } catch (e) {
        let t = e instanceof Error ? `: ` + e.message : ``;
        throw Error(`bad point: is not on curve, sqrt error` + t);
      }
      u();
      let i = r.isOdd(n);
      return ((a & 1) == 1) !== i && (n = r.neg(n)), { x: e, y: n };
    }
    if (i === n && a === 4) {
      let e = r.BYTES,
        t = r.fromBytes(o.subarray(0, e)),
        n = r.fromBytes(o.subarray(e, e * 2));
      if (!g(t, n)) throw Error(`bad point: is not on curve`);
      return { x: t, y: n };
    }
    throw Error(
      `bad point: got length ${i}, expected compressed=${t} or uncompressed=${n}`
    );
  }
  let p = t.toBytes || d,
    m = t.fromBytes || f;
  function h(e) {
    let t = r.sqr(e),
      n = r.mul(t, e);
    return r.add(r.add(n, r.mul(e, a.a)), a.b);
  }
  function g(e, t) {
    let n = r.sqr(t),
      i = h(e);
    return r.eql(n, i);
  }
  if (!g(a.Gx, a.Gy)) throw Error(`bad curve params: generator point`);
  let _ = r.mul(r.pow(a.a, Ab), jb),
    v = r.mul(r.sqr(a.b), BigInt(27));
  if (r.is0(r.add(_, v))) throw Error(`bad curve params: a or b`);
  function y(e, t, n = !1) {
    if (!r.isValid(t) || (n && r.is0(t)))
      throw Error(`bad point coordinate ${e}`);
    return t;
  }
  function b(e) {
    if (!(e instanceof T)) throw Error(`ProjectivePoint expected`);
  }
  function x(e) {
    if (!c || !c.basises) throw Error(`no endo`);
    return Cb(e, c.basises, i.ORDER);
  }
  let S = fy((e, t) => {
      let { X: n, Y: i, Z: a } = e;
      if (r.eql(a, r.ONE)) return { x: n, y: i };
      let o = e.is0();
      t ??= o ? r.ONE : r.inv(a);
      let s = r.mul(n, t),
        c = r.mul(i, t),
        l = r.mul(a, t);
      if (o) return { x: r.ZERO, y: r.ZERO };
      if (!r.eql(l, r.ONE)) throw Error(`invZ was invalid`);
      return { x: s, y: c };
    }),
    C = fy((e) => {
      if (e.is0()) {
        if (t.allowInfinityPoint && !r.is0(e.Y)) return;
        throw Error(`bad point: ZERO`);
      }
      let { x: n, y: i } = e.toAffine();
      if (!r.isValid(n) || !r.isValid(i))
        throw Error(`bad point: x or y not field elements`);
      if (!g(n, i)) throw Error(`bad point: equation left != right`);
      if (!e.isTorsionFree())
        throw Error(`bad point: not in prime-order subgroup`);
      return !0;
    });
  function w(e, t, n, i, a) {
    return (
      (n = new T(r.mul(n.X, e), n.Y, n.Z)),
      (t = Wy(i, t)),
      (n = Wy(a, n)),
      t.add(n)
    );
  }
  class T {
    constructor(e, t, n) {
      (this.X = y(`x`, e)),
        (this.Y = y(`y`, t, !0)),
        (this.Z = y(`z`, n)),
        Object.freeze(this);
    }
    static CURVE() {
      return a;
    }
    static fromAffine(e) {
      let { x: t, y: n } = e || {};
      if (!e || !r.isValid(t) || !r.isValid(n))
        throw Error(`invalid affine point`);
      if (e instanceof T) throw Error(`projective point not allowed`);
      return r.is0(t) && r.is0(n) ? T.ZERO : new T(t, n, r.ONE);
    }
    static fromBytes(e) {
      let t = T.fromAffine(m(Zv(e, void 0, `point`)));
      return t.assertValidity(), t;
    }
    static fromHex(e) {
      return T.fromBytes(iy(`pointHex`, e));
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    precompute(e = 8, t = !0) {
      return D.createCache(this, e), t || this.multiply(Ab), this;
    }
    assertValidity() {
      C(this);
    }
    hasEvenY() {
      let { y: e } = this.toAffine();
      if (!r.isOdd) throw Error(`Field doesn't support isOdd`);
      return !r.isOdd(e);
    }
    equals(e) {
      b(e);
      let { X: t, Y: n, Z: i } = this,
        { X: a, Y: o, Z: s } = e,
        c = r.eql(r.mul(t, s), r.mul(a, i)),
        l = r.eql(r.mul(n, s), r.mul(o, i));
      return c && l;
    }
    negate() {
      return new T(this.X, r.neg(this.Y), this.Z);
    }
    double() {
      let { a: e, b: t } = a,
        n = r.mul(t, Ab),
        { X: i, Y: o, Z: s } = this,
        c = r.ZERO,
        l = r.ZERO,
        u = r.ZERO,
        d = r.mul(i, i),
        f = r.mul(o, o),
        p = r.mul(s, s),
        m = r.mul(i, o);
      return (
        (m = r.add(m, m)),
        (u = r.mul(i, s)),
        (u = r.add(u, u)),
        (c = r.mul(e, u)),
        (l = r.mul(n, p)),
        (l = r.add(c, l)),
        (c = r.sub(f, l)),
        (l = r.add(f, l)),
        (l = r.mul(c, l)),
        (c = r.mul(m, c)),
        (u = r.mul(n, u)),
        (p = r.mul(e, p)),
        (m = r.sub(d, p)),
        (m = r.mul(e, m)),
        (m = r.add(m, u)),
        (u = r.add(d, d)),
        (d = r.add(u, d)),
        (d = r.add(d, p)),
        (d = r.mul(d, m)),
        (l = r.add(l, d)),
        (p = r.mul(o, s)),
        (p = r.add(p, p)),
        (d = r.mul(p, m)),
        (c = r.sub(c, d)),
        (u = r.mul(p, f)),
        (u = r.add(u, u)),
        (u = r.add(u, u)),
        new T(c, l, u)
      );
    }
    add(e) {
      b(e);
      let { X: t, Y: n, Z: i } = this,
        { X: o, Y: s, Z: c } = e,
        l = r.ZERO,
        u = r.ZERO,
        d = r.ZERO,
        f = a.a,
        p = r.mul(a.b, Ab),
        m = r.mul(t, o),
        h = r.mul(n, s),
        g = r.mul(i, c),
        _ = r.add(t, n),
        v = r.add(o, s);
      (_ = r.mul(_, v)),
        (v = r.add(m, h)),
        (_ = r.sub(_, v)),
        (v = r.add(t, i));
      let y = r.add(o, c);
      return (
        (v = r.mul(v, y)),
        (y = r.add(m, g)),
        (v = r.sub(v, y)),
        (y = r.add(n, i)),
        (l = r.add(s, c)),
        (y = r.mul(y, l)),
        (l = r.add(h, g)),
        (y = r.sub(y, l)),
        (d = r.mul(f, v)),
        (l = r.mul(p, g)),
        (d = r.add(l, d)),
        (l = r.sub(h, d)),
        (d = r.add(h, d)),
        (u = r.mul(l, d)),
        (h = r.add(m, m)),
        (h = r.add(h, m)),
        (g = r.mul(f, g)),
        (v = r.mul(p, v)),
        (h = r.add(h, g)),
        (g = r.sub(m, g)),
        (g = r.mul(f, g)),
        (v = r.add(v, g)),
        (m = r.mul(h, v)),
        (u = r.add(u, m)),
        (m = r.mul(y, v)),
        (l = r.mul(_, l)),
        (l = r.sub(l, m)),
        (m = r.mul(_, h)),
        (d = r.mul(y, d)),
        (d = r.add(d, m)),
        new T(l, u, d)
      );
    }
    subtract(e) {
      return this.add(e.negate());
    }
    is0() {
      return this.equals(T.ZERO);
    }
    multiply(e) {
      let { endo: n } = t;
      if (!i.isValidNot0(e)) throw Error(`invalid scalar: out of range`);
      let r,
        a,
        o = (e) => D.cached(this, e, (e) => Gy(T, e));
      if (n) {
        let { k1neg: t, k1: i, k2neg: s, k2: c } = x(e),
          { p: l, f: u } = o(i),
          { p: d, f } = o(c);
        (a = u.add(f)), (r = w(n.beta, l, d, t, s));
      } else {
        let { p: t, f: n } = o(e);
        (r = t), (a = n);
      }
      return Gy(T, [r, a])[0];
    }
    multiplyUnsafe(e) {
      let { endo: n } = t,
        r = this;
      if (!i.isValid(e)) throw Error(`invalid scalar: out of range`);
      if (e === Db || r.is0()) return T.ZERO;
      if (e === Ob) return r;
      if (D.hasCache(this)) return this.multiply(e);
      if (n) {
        let { k1neg: t, k1: i, k2neg: a, k2: o } = x(e),
          { p1: s, p2: c } = nb(T, r, i, o);
        return w(n.beta, s, c, t, a);
      }
      return D.unsafe(r, e);
    }
    multiplyAndAddUnsafe(e, t, n) {
      let r = this.multiplyUnsafe(t).add(e.multiplyUnsafe(n));
      return r.is0() ? void 0 : r;
    }
    toAffine(e) {
      return S(this, e);
    }
    isTorsionFree() {
      let { isTorsionFree: e } = t;
      return o === Ob ? !0 : e ? e(T, this) : D.unsafe(this, s).is0();
    }
    clearCofactor() {
      let { clearCofactor: e } = t;
      return o === Ob ? this : e ? e(T, this) : this.multiplyUnsafe(o);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(o).is0();
    }
    toBytes(e = !0) {
      return Xv(e, `isCompressed`), this.assertValidity(), p(T, this, e);
    }
    toHex(e = !0) {
      return Qh(this.toBytes(e));
    }
    toString() {
      return `<Point ${this.is0() ? `ZERO` : this.toHex()}>`;
    }
    get px() {
      return this.X;
    }
    get py() {
      return this.X;
    }
    get pz() {
      return this.Z;
    }
    toRawBytes(e = !0) {
      return this.toBytes(e);
    }
    _setWindowSize(e) {
      this.precompute(e);
    }
    static normalizeZ(e) {
      return Gy(T, e);
    }
    static msm(e, t) {
      return rb(T, i, e, t);
    }
    static fromPrivateKey(e) {
      return T.BASE.multiply(Mb(i, e));
    }
  }
  (T.BASE = new T(a.Gx, a.Gy, r.ONE)),
    (T.ZERO = new T(r.ZERO, r.ONE, r.ZERO)),
    (T.Fp = r),
    (T.Fn = i);
  let E = i.BITS,
    D = new tb(T, t.endo ? Math.ceil(E / 2) : E);
  return T.BASE.precompute(8), T;
}
function Pb(e) {
  return Uint8Array.of(e ? 2 : 3);
}
function Fb(e, t) {
  return {
    secretKey: t.BYTES,
    publicKey: 1 + e.BYTES,
    publicKeyUncompressed: 1 + 2 * e.BYTES,
    publicKeyHasPrefix: !0,
    signature: 2 * t.BYTES,
  };
}
function Ib(e, t = {}) {
  let { Fn: n } = e,
    r = t.randomBytes || cg,
    i = Object.assign(Fb(e.Fp, n), { seed: By(n.ORDER) });
  function a(e) {
    try {
      return !!Mb(n, e);
    } catch {
      return !1;
    }
  }
  function o(t, n) {
    let { publicKey: r, publicKeyUncompressed: a } = i;
    try {
      let i = t.length;
      return (n === !0 && i !== r) || (n === !1 && i !== a)
        ? !1
        : !!e.fromBytes(t);
    } catch {
      return !1;
    }
  }
  function s(e = r(i.seed)) {
    return Vy(Zv(e, i.seed, `seed`), n.ORDER);
  }
  function c(t, r = !0) {
    return e.BASE.multiply(Mb(n, t)).toBytes(r);
  }
  function l(e) {
    let t = s(e);
    return { secretKey: t, publicKey: c(t) };
  }
  function u(t) {
    if (typeof t == `bigint`) return !1;
    if (t instanceof e) return !0;
    let { secretKey: r, publicKey: a, publicKeyUncompressed: o } = i;
    if (n.allowedLengths || r === a) return;
    let s = iy(`key`, t).length;
    return s === a || s === o;
  }
  function d(t, r, i = !0) {
    if (u(t) === !0) throw Error(`first arg must be private key`);
    if (u(r) === !1) throw Error(`second arg must be public key`);
    let a = Mb(n, t);
    return e.fromHex(r).multiply(a).toBytes(i);
  }
  return Object.freeze({
    getPublicKey: c,
    getSharedSecret: d,
    keygen: l,
    Point: e,
    utils: {
      isValidSecretKey: a,
      isValidPublicKey: o,
      randomSecretKey: s,
      isValidPrivateKey: a,
      randomPrivateKey: s,
      normPrivateKeyToScalar: (e) => Mb(n, e),
      precompute(t = 8, n = e.BASE) {
        return n.precompute(t, !1);
      },
    },
    lengths: i,
  });
}
function Lb(e, t, n = {}) {
  Rh(t),
    dy(
      n,
      {},
      {
        hmac: `function`,
        lowS: `boolean`,
        randomBytes: `function`,
        bits2int: `function`,
        bits2int_modN: `function`,
      }
    );
  let r = n.randomBytes || cg,
    i = n.hmac || ((e, ...n) => Vv(t, e, ig(...n))),
    { Fp: a, Fn: o } = e,
    { ORDER: s, BITS: c } = o,
    {
      keygen: l,
      getPublicKey: u,
      getSharedSecret: d,
      utils: f,
      lengths: p,
    } = Ib(e, n),
    m = {
      prehash: !1,
      lowS: typeof n.lowS == `boolean` && n.lowS,
      format: void 0,
      extraEntropy: !1,
    },
    h = `compact`;
  function g(e) {
    return e > s >> Ob;
  }
  function _(e, t) {
    if (!o.isValidNot0(t))
      throw Error(`invalid signature ${e}: out of range 1..Point.Fn.ORDER`);
    return t;
  }
  function v(e, t) {
    wb(t);
    let n = p.signature;
    return Zv(
      e,
      t === `compact` ? n : t === `recovered` ? n + 1 : void 0,
      `${t} signature`
    );
  }
  class y {
    constructor(e, t, n) {
      (this.r = _(`r`, e)),
        (this.s = _(`s`, t)),
        n != null && (this.recovery = n),
        Object.freeze(this);
    }
    static fromBytes(e, t = h) {
      v(e, t);
      let n;
      if (t === `der`) {
        let { r: t, s: n } = Eb.toSig(Zv(e));
        return new y(t, n);
      }
      t === `recovered` && ((n = e[0]), (t = `compact`), (e = e.subarray(1)));
      let r = o.BYTES,
        i = e.subarray(0, r),
        a = e.subarray(r, r * 2);
      return new y(o.fromBytes(i), o.fromBytes(a), n);
    }
    static fromHex(e, t) {
      return this.fromBytes(tg(e), t);
    }
    addRecoveryBit(e) {
      return new y(this.r, this.s, e);
    }
    recoverPublicKey(t) {
      let n = a.ORDER,
        { r, s: i, recovery: c } = this;
      if (c == null || ![0, 1, 2, 3].includes(c))
        throw Error(`recovery id invalid`);
      if (s * kb < n && c > 1)
        throw Error(`recovery id is ambiguous for h>1 curve`);
      let l = c === 2 || c === 3 ? r + s : r;
      if (!a.isValid(l)) throw Error(`recovery id 2 or 3 invalid`);
      let u = a.toBytes(l),
        d = e.fromBytes(ig(Pb(!(c & 1)), u)),
        f = o.inv(l),
        p = x(iy(`msgHash`, t)),
        m = o.create(-p * f),
        h = o.create(i * f),
        g = e.BASE.multiplyUnsafe(m).add(d.multiplyUnsafe(h));
      if (g.is0()) throw Error(`point at infinify`);
      return g.assertValidity(), g;
    }
    hasHighS() {
      return g(this.s);
    }
    toBytes(e = h) {
      if ((wb(e), e === `der`)) return tg(Eb.hexFromSig(this));
      let t = o.toBytes(this.r),
        n = o.toBytes(this.s);
      if (e === `recovered`) {
        if (this.recovery == null) throw Error(`recovery bit must be present`);
        return ig(Uint8Array.of(this.recovery), t, n);
      }
      return ig(t, n);
    }
    toHex(e) {
      return Qh(this.toBytes(e));
    }
    assertValidity() {}
    static fromCompact(e) {
      return y.fromBytes(iy(`sig`, e), `compact`);
    }
    static fromDER(e) {
      return y.fromBytes(iy(`sig`, e), `der`);
    }
    normalizeS() {
      return this.hasHighS()
        ? new y(this.r, o.neg(this.s), this.recovery)
        : this;
    }
    toDERRawBytes() {
      return this.toBytes(`der`);
    }
    toDERHex() {
      return Qh(this.toBytes(`der`));
    }
    toCompactRawBytes() {
      return this.toBytes(`compact`);
    }
    toCompactHex() {
      return Qh(this.toBytes(`compact`));
    }
  }
  let b =
      n.bits2int ||
      function (e) {
        if (e.length > 8192) throw Error(`input is too large`);
        let t = ey(e),
          n = e.length * 8 - c;
        return n > 0 ? t >> BigInt(n) : t;
      },
    x =
      n.bits2int_modN ||
      function (e) {
        return o.create(b(e));
      },
    S = ly(c);
  function C(e) {
    return sy(`num < 2^` + c, e, Db, S), o.toBytes(e);
  }
  function w(e, n) {
    return (
      Zv(e, void 0, `message`), n ? Zv(t(e), void 0, `prehashed message`) : e
    );
  }
  function T(t, n, i) {
    if ([`recovered`, `canonical`].some((e) => e in i))
      throw Error(`sign() legacy options not supported`);
    let { lowS: a, prehash: s, extraEntropy: c } = Tb(i, m);
    t = w(t, s);
    let l = x(t),
      u = Mb(o, n),
      d = [C(u), C(l)];
    if (c != null && c !== !1) {
      let e = c === !0 ? r(p.secretKey) : c;
      d.push(iy(`extraEntropy`, e));
    }
    let f = ig(...d),
      h = l;
    function _(t) {
      let n = b(t);
      if (!o.isValidNot0(n)) return;
      let r = o.inv(n),
        i = e.BASE.multiply(n).toAffine(),
        s = o.create(i.x);
      if (s === Db) return;
      let c = o.create(r * o.create(h + s * u));
      if (c === Db) return;
      let l = (i.x === s ? 0 : 2) | Number(i.y & Ob),
        d = c;
      return a && g(c) && ((d = o.neg(c)), (l ^= 1)), new y(s, d, l);
    }
    return { seed: f, k2sig: _ };
  }
  function E(e, n, r = {}) {
    e = iy(`message`, e);
    let { seed: a, k2sig: s } = T(e, n, r);
    return uy(t.outputLen, o.BYTES, i)(a, s);
  }
  function D(e) {
    let t,
      n = typeof e == `string` || Fh(e),
      r =
        !n &&
        typeof e == `object` &&
        !!e &&
        typeof e.r == `bigint` &&
        typeof e.s == `bigint`;
    if (!n && !r)
      throw Error(
        `invalid signature, expected Uint8Array, hex string or Signature instance`
      );
    if (r) t = new y(e.r, e.s);
    else if (n) {
      try {
        t = y.fromBytes(iy(`sig`, e), `der`);
      } catch (e) {
        if (!(e instanceof Eb.Err)) throw e;
      }
      if (!t)
        try {
          t = y.fromBytes(iy(`sig`, e), `compact`);
        } catch {
          return !1;
        }
    }
    return t || !1;
  }
  function O(t, n, r, i = {}) {
    let { lowS: a, prehash: s, format: c } = Tb(i, m);
    if (((r = iy(`publicKey`, r)), (n = w(iy(`message`, n), s)), `strict` in i))
      throw Error(`options.strict was renamed to lowS`);
    let l = c === void 0 ? D(t) : y.fromBytes(iy(`sig`, t), c);
    if (l === !1) return !1;
    try {
      let t = e.fromBytes(r);
      if (a && l.hasHighS()) return !1;
      let { r: i, s } = l,
        c = x(n),
        u = o.inv(s),
        d = o.create(c * u),
        f = o.create(i * u),
        p = e.BASE.multiplyUnsafe(d).add(t.multiplyUnsafe(f));
      return !p.is0() && o.create(p.x) === i;
    } catch {
      return !1;
    }
  }
  function k(e, t, n = {}) {
    let { prehash: r } = Tb(n, m);
    return (
      (t = w(t, r)), y.fromBytes(e, `recovered`).recoverPublicKey(t).toBytes()
    );
  }
  return Object.freeze({
    keygen: l,
    getPublicKey: u,
    getSharedSecret: d,
    utils: f,
    lengths: p,
    Point: e,
    sign: E,
    verify: O,
    recoverPublicKey: k,
    Signature: y,
    hash: t,
  });
}
function Rb(e) {
  let t = { a: e.a, b: e.b, p: e.Fp.ORDER, n: e.n, h: e.h, Gx: e.Gx, Gy: e.Gy },
    n = e.Fp,
    r = e.allowedPrivateKeyLengths
      ? Array.from(
          new Set(e.allowedPrivateKeyLengths.map((e) => Math.ceil(e / 2)))
        )
      : void 0;
  return {
    CURVE: t,
    curveOpts: {
      Fp: n,
      Fn: Ry(t.n, {
        BITS: e.nBitLength,
        allowedLengths: r,
        modFromBytes: e.wrapPrivateKey,
      }),
      allowInfinityPoint: e.allowInfinityPoint,
      endo: e.endo,
      isTorsionFree: e.isTorsionFree,
      clearCofactor: e.clearCofactor,
      fromBytes: e.fromBytes,
      toBytes: e.toBytes,
    },
  };
}
function zb(e) {
  let { CURVE: t, curveOpts: n } = Rb(e),
    r = {
      hmac: e.hmac,
      randomBytes: e.randomBytes,
      lowS: e.lowS,
      bits2int: e.bits2int,
      bits2int_modN: e.bits2int_modN,
    };
  return { CURVE: t, curveOpts: n, hash: e.hash, ecdsaOpts: r };
}
function Bb(e, t) {
  let n = t.Point;
  return Object.assign({}, t, {
    ProjectivePoint: n,
    CURVE: Object.assign({}, e, Ly(n.Fn.ORDER, n.Fn.BITS)),
  });
}
function Vb(e) {
  let { CURVE: t, curveOpts: n, hash: r, ecdsaOpts: i } = zb(e);
  return Bb(e, Lb(Nb(t, n), r, i));
}
function Hb(e, t) {
  let n = (t) => Vb({ ...e, hash: t });
  return { ...n(t), create: n };
}
var Ub = {
    p: BigInt(
      `0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff`
    ),
    n: BigInt(
      `0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551`
    ),
    h: BigInt(1),
    a: BigInt(
      `0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc`
    ),
    b: BigInt(
      `0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b`
    ),
    Gx: BigInt(
      `0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296`
    ),
    Gy: BigInt(
      `0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5`
    ),
  },
  Wb = {
    p: BigInt(
      `0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff`
    ),
    n: BigInt(
      `0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973`
    ),
    h: BigInt(1),
    a: BigInt(
      `0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc`
    ),
    b: BigInt(
      `0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef`
    ),
    Gx: BigInt(
      `0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7`
    ),
    Gy: BigInt(
      `0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f`
    ),
  },
  Gb = {
    p: BigInt(
      `0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff`
    ),
    n: BigInt(
      `0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409`
    ),
    h: BigInt(1),
    a: BigInt(
      `0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc`
    ),
    b: BigInt(
      `0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00`
    ),
    Gx: BigInt(
      `0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66`
    ),
    Gy: BigInt(
      `0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650`
    ),
  },
  Kb = Ry(Ub.p),
  qb = Ry(Wb.p),
  Jb = Ry(Gb.p),
  Yb = Hb({ ...Ub, Fp: Kb, lowS: !1 }, Gg);
Hb({ ...Wb, Fp: qb, lowS: !1 }, qg),
  Hb(
    { ...Gb, Fp: Jb, lowS: !1, allowedPrivateKeyLengths: [130, 131, 132] },
    Kg
  );
var Xb = Yb,
  Zb = `base10`,
  Qb = `base16`,
  $b = `base64pad`,
  ex = `base64url`,
  tx = `utf8`,
  nx = 0,
  rx = 1,
  ix = 12,
  ax = 32;
function ox() {
  let e = xb.utils.randomPrivateKey(),
    t = xb.getPublicKey(e);
  return { privateKey: im(e, Qb), publicKey: im(t, Qb) };
}
function sx() {
  return im(cg(ax), Qb);
}
function cx(e, t) {
  return im(
    Kv(qv, xb.getSharedSecret(rm(e, Qb), rm(t, Qb)), void 0, void 0, ax),
    Qb
  );
}
function lx(e) {
  return im(qv(rm(e, Qb)), Qb);
}
function ux(e) {
  return im(qv(rm(e, tx)), Qb);
}
function dx(e) {
  return rm(`${e}`, Zb);
}
function fx(e) {
  return Number(im(e, Zb));
}
function px(e) {
  return e.replace(/\+/g, `-`).replace(/\//g, `_`).replace(/=/g, ``);
}
function mx(e) {
  let t = e.replace(/-/g, `+`).replace(/_/g, `/`),
    n = (4 - (t.length % 4)) % 4;
  return t + `=`.repeat(n);
}
function hx(e) {
  let t = dx(typeof e.type < `u` ? e.type : 0);
  if (fx(t) === 1 && typeof e.senderPublicKey > `u`)
    throw Error(`Missing sender public key for type 1 envelope`);
  let n = typeof e.senderPublicKey < `u` ? rm(e.senderPublicKey, Qb) : void 0,
    r = typeof e.iv < `u` ? rm(e.iv, Qb) : cg(ix),
    i = yx({
      type: t,
      sealed: zv(rm(e.symKey, Qb), r).encrypt(rm(e.message, tx)),
      iv: r,
      senderPublicKey: n,
    });
  return e.encoding === `base64url` ? px(i) : i;
}
function gx(e) {
  let t = rm(e.symKey, Qb),
    { sealed: n, iv: r } = bx({ encoded: e.encoded, encoding: e.encoding }),
    i = zv(t, r).decrypt(n);
  if (i === null) throw Error(`Failed to decrypt`);
  return im(i, tx);
}
function _x(e, t) {
  let n = dx(2),
    r = cg(ix),
    i = yx({ type: n, sealed: rm(e, tx), iv: r });
  return t === `base64url` ? px(i) : i;
}
function vx(e, t) {
  let { sealed: n } = bx({ encoded: e, encoding: t });
  return im(n, tx);
}
function yx(e) {
  if (fx(e.type) === 2) return im(_f([e.type, e.sealed]), $b);
  if (fx(e.type) === 1) {
    if (typeof e.senderPublicKey > `u`)
      throw Error(`Missing sender public key for type 1 envelope`);
    return im(_f([e.type, e.senderPublicKey, e.iv, e.sealed]), $b);
  }
  return im(_f([e.type, e.iv, e.sealed]), $b);
}
function bx(e) {
  let t = rm(
      (e.encoding || `base64pad`) === `base64url` ? mx(e.encoded) : e.encoded,
      $b
    ),
    n = t.slice(nx, rx),
    r = rx;
  if (fx(n) === 1) {
    let e = t.slice(r, 33),
      i = t.slice(33, 45);
    return { type: n, sealed: t.slice(45), iv: i, senderPublicKey: e };
  }
  if (fx(n) === 2) return { type: n, sealed: t.slice(r), iv: cg(ix) };
  let i = t.slice(r, 13);
  return { type: n, sealed: t.slice(13), iv: i };
}
function xx(e, t) {
  let n = bx({ encoded: e, encoding: t?.encoding });
  return Sx({
    type: fx(n.type),
    senderPublicKey:
      typeof n.senderPublicKey < `u` ? im(n.senderPublicKey, Qb) : void 0,
    receiverPublicKey: t?.receiverPublicKey,
  });
}
function Sx(e) {
  let t = e?.type || 0;
  if (t === 1) {
    if (typeof e?.senderPublicKey > `u`)
      throw Error(`missing sender public key`);
    if (typeof e?.receiverPublicKey > `u`)
      throw Error(`missing receiver public key`);
  }
  return {
    type: t,
    senderPublicKey: e?.senderPublicKey,
    receiverPublicKey: e?.receiverPublicKey,
  };
}
function Cx(e) {
  return (
    e.type === 1 &&
    typeof e.senderPublicKey == `string` &&
    typeof e.receiverPublicKey == `string`
  );
}
function wx(e) {
  return e.type === 2;
}
function Tx(e) {
  let t = Buffer.from(e.x, `base64`),
    n = Buffer.from(e.y, `base64`);
  return _f([new Uint8Array([4]), t, n]);
}
function Ex(e, t) {
  let [n, r, i] = e.split(`.`),
    a = Buffer.from(mx(i), `base64`);
  if (a.length !== 64) throw Error(`Invalid signature length`);
  let o = a.slice(0, 32),
    s = a.slice(32, 64),
    c = qv(`${n}.${r}`),
    l = Tx(t);
  if (!Xb.verify(_f([o, s]), c, l)) throw Error(`Invalid signature`);
  return $s(e).payload;
}
function Dx(e) {
  return e?.relay || { protocol: `irn` };
}
function Ox(e) {
  let t = am[e];
  if (typeof t > `u`) throw Error(`Relay Protocol not supported: ${e}`);
  return t;
}
var kx = Object.defineProperty,
  Ax = Object.defineProperties,
  jx = Object.getOwnPropertyDescriptors,
  Mx = Object.getOwnPropertySymbols,
  Nx = Object.prototype.hasOwnProperty,
  Px = Object.prototype.propertyIsEnumerable,
  Fx = (e, t, n) =>
    t in e
      ? kx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Ix = (e, t) => {
    for (var n in (t ||= {})) Nx.call(t, n) && Fx(e, n, t[n]);
    if (Mx) for (var n of Mx(t)) Px.call(t, n) && Fx(e, n, t[n]);
    return e;
  },
  Lx = (e, t) => Ax(e, jx(t));
function Rx(e, t = `-`) {
  let n = {},
    r = `relay` + t;
  return (
    Object.keys(e).forEach((t) => {
      if (t.startsWith(r)) {
        let i = t.replace(r, ``),
          a = e[t];
        n[i] = a;
      }
    }),
    n
  );
}
function zx(e) {
  if (!e.includes(`wc:`)) {
    let t = ch(e);
    t != null && t.includes(`wc:`) && (e = t);
  }
  (e = e.includes(`wc://`) ? e.replace(`wc://`, ``) : e),
    (e = e.includes(`wc:`) ? e.replace(`wc:`, ``) : e);
  let t = e.indexOf(`:`),
    n = e.indexOf(`?`) === -1 ? void 0 : e.indexOf(`?`),
    r = e.substring(0, t),
    i = e.substring(t + 1, n).split(`@`),
    a = typeof n < `u` ? e.substring(n) : ``,
    o = new URLSearchParams(a),
    s = Object.fromEntries(o.entries()),
    c = typeof s.methods == `string` ? s.methods.split(`,`) : void 0;
  return {
    protocol: r,
    topic: Bx(i[0]),
    version: parseInt(i[1], 10),
    symKey: s.symKey,
    relay: Rx(s),
    methods: c,
    expiryTimestamp: s.expiryTimestamp
      ? parseInt(s.expiryTimestamp, 10)
      : void 0,
  };
}
function Bx(e) {
  return e.startsWith(`//`) ? e.substring(2) : e;
}
function Vx(e, t = `-`) {
  let n = {};
  return (
    Object.keys(e).forEach((r) => {
      let i = r,
        a = `relay` + t + i;
      e[i] && (n[a] = e[i]);
    }),
    n
  );
}
function Hx(e) {
  let t = new URLSearchParams(),
    n = Ix(
      Ix(
        Lx(Ix({}, Vx(e.relay)), { symKey: e.symKey }),
        e.expiryTimestamp && { expiryTimestamp: e.expiryTimestamp.toString() }
      ),
      e.methods && { methods: e.methods.join(`,`) }
    );
  return (
    Object.entries(n)
      .sort(([e], [t]) => e.localeCompare(t))
      .forEach(([e, n]) => {
        n !== void 0 && t.append(e, String(n));
      }),
    `${e.protocol}:${e.topic}@${e.version}?${t}`
  );
}
function Ux(e, t, n) {
  return `${e}?wc_ev=${n}&topic=${t}`;
}
var Wx = Object.defineProperty,
  Gx = Object.defineProperties,
  Kx = Object.getOwnPropertyDescriptors,
  qx = Object.getOwnPropertySymbols,
  Jx = Object.prototype.hasOwnProperty,
  Yx = Object.prototype.propertyIsEnumerable,
  Xx = (e, t, n) =>
    t in e
      ? Wx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Zx = (e, t) => {
    for (var n in (t ||= {})) Jx.call(t, n) && Xx(e, n, t[n]);
    if (qx) for (var n of qx(t)) Yx.call(t, n) && Xx(e, n, t[n]);
    return e;
  },
  Qx = (e, t) => Gx(e, Kx(t));
function $x(e) {
  let t = [];
  return (
    e.forEach((e) => {
      let [n, r] = e.split(`:`);
      t.push(`${n}:${r}`);
    }),
    t
  );
}
function eS(e) {
  let t = [];
  return (
    Object.values(e).forEach((e) => {
      t.push(...$x(e.accounts));
    }),
    [...new Set(t)]
  );
}
function tS(e) {
  let t = [];
  return (
    Object.values(e).forEach((e) => {
      t.push(...e.methods);
    }),
    [...new Set(t)]
  );
}
function nS(e) {
  let t = [];
  return (
    Object.values(e).forEach((e) => {
      t.push(...e.events);
    }),
    [...new Set(t)]
  );
}
function rS(e, t) {
  let n = [];
  return (
    Object.values(e).forEach((e) => {
      $x(e.accounts).includes(t) && n.push(...e.methods);
    }),
    n
  );
}
function iS(e, t) {
  let n = [];
  return (
    Object.values(e).forEach((e) => {
      $x(e.accounts).includes(t) && n.push(...e.events);
    }),
    n
  );
}
function aS(e) {
  return e.includes(`:`);
}
function oS(e) {
  return aS(e) ? e.split(`:`)[0] : e;
}
function sS(e) {
  let t = {};
  if (!fS(e)) return t;
  for (let [n, r] of Object.entries(e)) {
    let e = aS(n) ? [n] : r.chains,
      i = r.methods || [],
      a = r.events || [],
      o = oS(n);
    t[o] = Qx(Zx({}, t[o]), {
      chains: Zm(e, t[o]?.chains),
      methods: Zm(i, t[o]?.methods),
      events: Zm(a, t[o]?.events),
    });
  }
  return t;
}
function cS(e) {
  let t = {};
  return (
    e?.forEach((e) => {
      var n;
      let [r, i] = e.split(`:`);
      t[r] || (t[r] = { accounts: [], chains: [], events: [], methods: [] }),
        t[r].accounts.push(e),
        (n = t[r].chains) == null || n.push(`${r}:${i}`);
    }),
    t
  );
}
function lS(e, t) {
  t = t.map((e) => e.replace(`did:pkh:`, ``));
  let n = cS(t);
  for (let [t, r] of Object.entries(n))
    (r.methods = r.methods ? Zm(r.methods, e) : e),
      (r.events = [`chainChanged`, `accountsChanged`]);
  return n;
}
function uS(e, t) {
  let n = sS(e),
    r = sS(t),
    i = {},
    a = Object.keys(n).concat(Object.keys(r));
  for (let e of a)
    i[e] = {
      chains: Zm(n[e]?.chains, r[e]?.chains),
      methods: Zm(n[e]?.methods, r[e]?.methods),
      events: Zm(n[e]?.events, r[e]?.events),
    };
  return i;
}
function dS(e, t) {
  return Array.isArray(e) ? (typeof t < `u` && e.length ? e.every(t) : !0) : !1;
}
function fS(e) {
  return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
function pS(e) {
  return typeof e > `u`;
}
function mS(e, t) {
  return t && pS(e) ? !0 : typeof e == `string` && !!e.trim().length;
}
function hS(e, t) {
  return t && pS(e) ? !0 : typeof e == `number` && !isNaN(e);
}
function gS(e, t) {
  let { requiredNamespaces: n } = t,
    r = Object.keys(e.namespaces),
    i = Object.keys(n),
    a = !0;
  return Bm(i, r)
    ? (r.forEach((t) => {
        let { accounts: r, methods: i, events: o } = e.namespaces[t],
          s = $x(r),
          c = n[t];
        (!Bm(fm(t, c), s) || !Bm(c.methods, i) || !Bm(c.events, o)) && (a = !1);
      }),
      a)
    : !1;
}
function _S(e) {
  return mS(e, !1) && e.includes(`:`) ? e.split(`:`).length === 2 : !1;
}
function vS(e) {
  if (mS(e, !1) && e.includes(`:`)) {
    let t = e.split(`:`);
    if (t.length === 3) {
      let e = t[0] + `:` + t[1];
      return !!t[2] && _S(e);
    }
  }
  return !1;
}
function yS(e) {
  function t(e) {
    try {
      return typeof new URL(e) < `u`;
    } catch {
      return !1;
    }
  }
  try {
    if (mS(e, !1)) return t(e) ? !0 : t(ch(e));
  } catch {}
  return !1;
}
function bS(e) {
  return e?.proposer?.publicKey;
}
function xS(e) {
  return e?.topic;
}
function SS(e, t) {
  let n = null;
  return (
    mS(e?.publicKey, !1) ||
      (n = V(
        `MISSING_OR_INVALID`,
        `${t} controller public key should be a string`
      )),
    n
  );
}
function CS(e) {
  let t = !0;
  return dS(e) ? e.length && (t = e.every((e) => mS(e, !1))) : (t = !1), t;
}
function wS(e, t, n) {
  let r = null;
  return (
    dS(t) && t.length
      ? t.forEach((e) => {
          r ||
            _S(e) ||
            (r = H(
              `UNSUPPORTED_CHAINS`,
              `${n}, chain ${e} should be a string and conform to "namespace:chainId" format`
            ));
        })
      : _S(e) ||
        (r = H(
          `UNSUPPORTED_CHAINS`,
          `${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
        )),
    r
  );
}
function TS(e, t, n) {
  let r = null;
  return (
    Object.entries(e).forEach(([e, i]) => {
      if (r) return;
      let a = wS(e, fm(e, i), `${t} ${n}`);
      a && (r = a);
    }),
    r
  );
}
function ES(e, t) {
  let n = null;
  return (
    dS(e)
      ? e.forEach((e) => {
          n ||
            vS(e) ||
            (n = H(
              `UNSUPPORTED_ACCOUNTS`,
              `${t}, account ${e} should be a string and conform to "namespace:chainId:address" format`
            ));
        })
      : (n = H(
          `UNSUPPORTED_ACCOUNTS`,
          `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
        )),
    n
  );
}
function DS(e, t) {
  let n = null;
  return (
    Object.values(e).forEach((e) => {
      if (n) return;
      let r = ES(e?.accounts, `${t} namespace`);
      r && (n = r);
    }),
    n
  );
}
function OS(e, t) {
  let n = null;
  return (
    CS(e?.methods)
      ? CS(e?.events) ||
        (n = H(
          `UNSUPPORTED_EVENTS`,
          `${t}, events should be an array of strings or empty array for no events`
        ))
      : (n = H(
          `UNSUPPORTED_METHODS`,
          `${t}, methods should be an array of strings or empty array for no methods`
        )),
    n
  );
}
function kS(e, t) {
  let n = null;
  return (
    Object.values(e).forEach((e) => {
      if (n) return;
      let r = OS(e, `${t}, namespace`);
      r && (n = r);
    }),
    n
  );
}
function AS(e, t, n) {
  let r = null;
  if (e && fS(e)) {
    let i = kS(e, t);
    i && (r = i);
    let a = TS(e, t, n);
    a && (r = a);
  } else
    r = V(`MISSING_OR_INVALID`, `${t}, ${n} should be an object with data`);
  return r;
}
function jS(e, t) {
  let n = null;
  if (e && fS(e)) {
    let r = kS(e, t);
    r && (n = r);
    let i = DS(e, t);
    i && (n = i);
  } else
    n = V(
      `MISSING_OR_INVALID`,
      `${t}, namespaces should be an object with data`
    );
  return n;
}
function MS(e) {
  return mS(e.protocol, !0);
}
function NS(e, t) {
  let n = !1;
  return (
    t && !e
      ? (n = !0)
      : e &&
        dS(e) &&
        e.length &&
        e.forEach((e) => {
          n = MS(e);
        }),
    n
  );
}
function PS(e) {
  return typeof e == `number`;
}
function FS(e) {
  return typeof e < `u` && !0;
}
function IS(e) {
  return !(
    !e ||
    typeof e != `object` ||
    !e.code ||
    !hS(e.code, !1) ||
    !e.message ||
    !mS(e.message, !1)
  );
}
function LS(e) {
  return !(pS(e) || !mS(e.method, !1));
}
function RS(e) {
  return !(
    pS(e) ||
    (pS(e.result) && pS(e.error)) ||
    !hS(e.id, !1) ||
    !mS(e.jsonrpc, !1)
  );
}
function zS(e) {
  return !(pS(e) || !mS(e.name, !1));
}
function BS(e, t) {
  return !(!_S(t) || !eS(e).includes(t));
}
function VS(e, t, n) {
  return mS(n, !1) ? rS(e, t).includes(n) : !1;
}
function HS(e, t, n) {
  return mS(n, !1) ? iS(e, t).includes(n) : !1;
}
function US(e, t, n) {
  let r = null,
    i = WS(e),
    a = KS(t),
    o = Object.keys(i),
    s = Object.keys(a),
    c = GS(Object.keys(e)),
    l = GS(Object.keys(t)),
    u = c.filter((e) => !l.includes(e));
  return (
    u.length &&
      (r = V(
        `NON_CONFORMING_NAMESPACES`,
        `${n} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u.toString()}
      Received: ${Object.keys(t).toString()}`
      )),
    Bm(o, s) ||
      (r = V(
        `NON_CONFORMING_NAMESPACES`,
        `${n} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${s.toString()}`
      )),
    Object.keys(t).forEach((e) => {
      if (!e.includes(`:`) || r) return;
      let i = $x(t[e].accounts);
      i.includes(e) ||
        (r = V(
          `NON_CONFORMING_NAMESPACES`,
          `${n} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${i.toString()}`
        ));
    }),
    o.forEach((e) => {
      r ||
        (Bm(i[e].methods, a[e].methods)
          ? Bm(i[e].events, a[e].events) ||
            (r = V(
              `NON_CONFORMING_NAMESPACES`,
              `${n} namespaces events don't satisfy namespace events for ${e}`
            ))
          : (r = V(
              `NON_CONFORMING_NAMESPACES`,
              `${n} namespaces methods don't satisfy namespace methods for ${e}`
            )));
    }),
    r
  );
}
function WS(e) {
  let t = {};
  return (
    Object.keys(e).forEach((n) => {
      var r;
      n.includes(`:`)
        ? (t[n] = e[n])
        : (r = e[n].chains) == null ||
          r.forEach((r) => {
            t[r] = { methods: e[n].methods, events: e[n].events };
          });
    }),
    t
  );
}
function GS(e) {
  return [...new Set(e.map((e) => (e.includes(`:`) ? e.split(`:`)[0] : e)))];
}
function KS(e) {
  let t = {};
  return (
    Object.keys(e).forEach((n) => {
      n.includes(`:`)
        ? (t[n] = e[n])
        : $x(e[n].accounts)?.forEach((r) => {
            t[r] = {
              accounts: e[n].accounts.filter((e) => e.includes(`${r}:`)),
              methods: e[n].methods,
              events: e[n].events,
            };
          });
    }),
    t
  );
}
function qS(e, t) {
  return hS(e, !1) && e <= t.max && e >= t.min;
}
function JS() {
  let e = jm();
  return new Promise((t) => {
    switch (e) {
      case Tm.browser:
        t(YS());
        break;
      case Tm.reactNative:
        t(XS());
        break;
      case Tm.node:
        t(ZS());
        break;
      default:
        t(!0);
    }
  });
}
function YS() {
  return Am() && navigator?.onLine;
}
async function XS() {
  return Dm() && typeof global < `u` && global != null && global.NetInfo
    ? (await (global == null ? void 0 : global.NetInfo.fetch()))?.isConnected
    : !0;
}
function ZS() {
  return !0;
}
function QS(e) {
  switch (jm()) {
    case Tm.browser:
      $S(e);
      break;
    case Tm.reactNative:
      eC(e);
      break;
    case Tm.node:
  }
}
function $S(e) {
  !Dm() &&
    Am() &&
    (window.addEventListener(`online`, () => e(!0)),
    window.addEventListener(`offline`, () => e(!1)));
}
function eC(e) {
  Dm() &&
    typeof global < `u` &&
    global != null &&
    global.NetInfo &&
    global?.NetInfo.addEventListener((t) => e(t?.isConnected));
}
function tC() {
  return Am() && (0, pf.getDocument)()
    ? (0, pf.getDocument)()?.visibilityState === `visible`
    : !0;
}
var nC = {},
  rC = class {
    static get(e) {
      return nC[e];
    }
    static set(e, t) {
      nC[e] = t;
    }
    static delete(e) {
      delete nC[e];
    }
  };
function iC(e) {
  let t = _e.decode(e);
  if (t.length < 33) throw Error(`Too short to contain a public key`);
  return t.slice(1, 33);
}
function aC({ publicKey: e, signature: t, payload: n }) {
  let r = sC(n.method),
    i = 128 | parseInt(n.version?.toString() || `4`),
    a = lC(n.address),
    o = n.era === `00` ? new Uint8Array([0]) : sC(n.era);
  if (o.length !== 1 && o.length !== 2) throw Error(`Invalid era length`);
  let s = parseInt(n.nonce, 16),
    c = new Uint8Array([s & 255, (s >> 8) & 255]),
    l = dC(BigInt(`0x${cC(n.tip)}`)),
    u = new Uint8Array([0, ...e, a, ...t, ...o, ...c, ...l, ...r]),
    d = uC(u.length + 1);
  return new Uint8Array([...d, i, ...u]);
}
function oC(e) {
  let t = sC(e),
    n = (0, lm.blake2b)(t, void 0, 32);
  return `0x` + Buffer.from(n).toString(`hex`);
}
function sC(e) {
  return new Uint8Array(
    e
      .replace(/^0x/, ``)
      .match(/.{1,2}/g)
      .map((e) => parseInt(e, 16))
  );
}
function cC(e) {
  return e.startsWith(`0x`) ? e.slice(2) : e;
}
function lC(e) {
  let t = _e.decode(e)[0];
  return t === 42 ? 0 : t === 60 ? 2 : 1;
}
function uC(e) {
  if (e < 64) return new Uint8Array([e << 2]);
  if (e < 16384) {
    let t = (e << 2) | 1;
    return new Uint8Array([t & 255, (t >> 8) & 255]);
  }
  if (e < 1 << 30) {
    let t = (e << 2) | 2;
    return new Uint8Array([
      t & 255,
      (t >> 8) & 255,
      (t >> 16) & 255,
      (t >> 24) & 255,
    ]);
  }
  throw Error(`Compact encoding > 2^30 not supported`);
}
function dC(e) {
  if (e < BigInt(1) << BigInt(6))
    return new Uint8Array([Number(e << BigInt(2))]);
  if (e < BigInt(1) << BigInt(14)) {
    let t = (e << BigInt(2)) | BigInt(1);
    return new Uint8Array([
      Number(t & BigInt(255)),
      Number((t >> BigInt(8)) & BigInt(255)),
    ]);
  }
  if (e < BigInt(1) << BigInt(30)) {
    let t = (e << BigInt(2)) | BigInt(2);
    return new Uint8Array([
      Number(t & BigInt(255)),
      Number((t >> BigInt(8)) & BigInt(255)),
      Number((t >> BigInt(16)) & BigInt(255)),
      Number((t >> BigInt(24)) & BigInt(255)),
    ]);
  }
  throw Error(`BigInt compact encoding not supported > 2^30`);
}
function fC(e) {
  let t = Uint8Array.from(Buffer.from(e.signature, `hex`)),
    n = aC({
      publicKey: iC(e.transaction.address),
      signature: t,
      payload: e.transaction,
    });
  return oC(Buffer.from(n).toString(`hex`));
}
function pC({ logger: e, name: t }) {
  let n = typeof e == `string` ? Ht({ opts: { level: e, name: t } }).logger : e;
  return (n.level = typeof e == `string` ? e : e.level), n;
}
var mC = `PARSE_ERROR`,
  hC = `INVALID_REQUEST`,
  gC = `METHOD_NOT_FOUND`,
  _C = `INVALID_PARAMS`,
  vC = `INTERNAL_ERROR`,
  yC = `SERVER_ERROR`,
  bC = [-32700, -32600, -32601, -32602, -32603],
  xC = [-32e3, -32099],
  SC = {
    [mC]: { code: -32700, message: `Parse error` },
    [hC]: { code: -32600, message: `Invalid Request` },
    [gC]: { code: -32601, message: `Method not found` },
    [_C]: { code: -32602, message: `Invalid params` },
    [vC]: { code: -32603, message: `Internal error` },
    [yC]: { code: -32e3, message: `Server error` },
  },
  CC = yC;
function wC(e) {
  return e <= xC[0] && e >= xC[1];
}
function TC(e) {
  return bC.includes(e);
}
function EC(e) {
  return typeof e == `number`;
}
function DC(e) {
  return Object.keys(SC).includes(e) ? SC[e] : SC[CC];
}
function OC(e) {
  return Object.values(SC).find((t) => t.code === e) || SC[CC];
}
function kC(e) {
  if (e.error.code === void 0)
    return { valid: !1, error: `Missing code for JSON-RPC error` };
  if (e.error.message === void 0)
    return { valid: !1, error: `Missing message for JSON-RPC error` };
  if (!EC(e.error.code))
    return {
      valid: !1,
      error: `Invalid error code type for JSON-RPC: ${e.error.code}`,
    };
  if (TC(e.error.code)) {
    let t = OC(e.error.code);
    if (t.message !== SC.SERVER_ERROR.message && e.error.message === t.message)
      return {
        valid: !1,
        error: `Invalid error code message for JSON-RPC: ${e.error.code}`,
      };
  }
  return { valid: !0 };
}
function AC(e, t, n) {
  return e.message.includes(`getaddrinfo ENOTFOUND`) ||
    e.message.includes(`connect ECONNREFUSED`)
    ? Error(`Unavailable ${n} RPC url at ${t}`)
    : e;
}
var jC = i({
  __assign: () => tw,
  __asyncDelegator: () => qC,
  __asyncGenerator: () => KC,
  __asyncValues: () => JC,
  __await: () => GC,
  __awaiter: () => LC,
  __classPrivateFieldGet: () => QC,
  __classPrivateFieldSet: () => $C,
  __createBinding: () => zC,
  __decorate: () => PC,
  __exportStar: () => BC,
  __extends: () => MC,
  __generator: () => RC,
  __importDefault: () => ZC,
  __importStar: () => XC,
  __makeTemplateObject: () => YC,
  __metadata: () => IC,
  __param: () => FC,
  __read: () => HC,
  __rest: () => NC,
  __spread: () => UC,
  __spreadArrays: () => WC,
  __values: () => VC,
});
function MC(e, t) {
  ew(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
function NC(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`)
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function PC(e, t, n, r) {
  var i = arguments.length,
    a =
      i < 3 ? t : r === null ? (r = Object.getOwnPropertyDescriptor(t, n)) : r,
    o;
  if (typeof Reflect == `object` && typeof Reflect.decorate == `function`)
    a = Reflect.decorate(e, t, n, r);
  else
    for (var s = e.length - 1; s >= 0; s--)
      (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
  return i > 3 && a && Object.defineProperty(t, n, a), a;
}
function FC(e, t) {
  return function (n, r) {
    t(n, r, e);
  };
}
function IC(e, t) {
  if (typeof Reflect == `object` && typeof Reflect.metadata == `function`)
    return Reflect.metadata(e, t);
}
function LC(e, t, n, r) {
  function i(e) {
    return e instanceof n
      ? e
      : new n(function (t) {
          t(e);
        });
  }
  return new (n ||= Promise)(function (n, a) {
    function o(e) {
      try {
        c(r.next(e));
      } catch (e) {
        a(e);
      }
    }
    function s(e) {
      try {
        c(r.throw(e));
      } catch (e) {
        a(e);
      }
    }
    function c(e) {
      e.done ? n(e.value) : i(e.value).then(o, s);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function RC(e, t) {
  var n = {
      label: 0,
      sent: function () {
        if (a[0] & 1) throw a[1];
        return a[1];
      },
      trys: [],
      ops: [],
    },
    r,
    i,
    a,
    o = { next: s(0), throw: s(1), return: s(2) };
  return (
    typeof Symbol == `function` &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function s(e) {
    return function (t) {
      return c([e, t]);
    };
  }
  function c(o) {
    if (r) throw TypeError(`Generator is already executing.`);
    for (; n; )
      try {
        if (
          ((r = 1),
          i &&
            (a =
              o[0] & 2
                ? i.return
                : o[0]
                ? i.throw || ((a = i.return) && a.call(i), 0)
                : i.next) &&
            !(a = a.call(i, o[1])).done)
        )
          return a;
        switch (((i = 0), a && (o = [o[0] & 2, a.value]), o[0])) {
          case 0:
          case 1:
            a = o;
            break;
          case 4:
            return n.label++, { value: o[1], done: !1 };
          case 5:
            n.label++, (i = o[1]), (o = [0]);
            continue;
          case 7:
            (o = n.ops.pop()), n.trys.pop();
            continue;
          default:
            if (
              ((a = n.trys),
              !(a = a.length > 0 && a[a.length - 1]) &&
                (o[0] === 6 || o[0] === 2))
            ) {
              n = 0;
              continue;
            }
            if (o[0] === 3 && (!a || (o[1] > a[0] && o[1] < a[3]))) {
              n.label = o[1];
              break;
            }
            if (o[0] === 6 && n.label < a[1]) {
              (n.label = a[1]), (a = o);
              break;
            }
            if (a && n.label < a[2]) {
              (n.label = a[2]), n.ops.push(o);
              break;
            }
            a[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        o = t.call(e, n);
      } catch (e) {
        (o = [6, e]), (i = 0);
      } finally {
        r = a = 0;
      }
    if (o[0] & 5) throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}
function zC(e, t, n, r) {
  r === void 0 && (r = n), (e[r] = t[n]);
}
function BC(e, t) {
  for (var n in e) n !== "default" && !t.hasOwnProperty(n) && (t[n] = e[n]);
}
function VC(e) {
  var t = typeof Symbol == `function` && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == `number`)
    return {
      next: function () {
        return (
          e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        );
      },
    };
  throw TypeError(
    t ? `Object is not iterable.` : `Symbol.iterator is not defined.`
  );
}
function HC(e, t) {
  var n = typeof Symbol == `function` && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e),
    i,
    a = [],
    o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; ) a.push(i.value);
  } catch (e) {
    o = { error: e };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function UC() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(HC(arguments[t]));
  return e;
}
function WC() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), i = 0, t = 0; t < n; t++)
    for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++)
      r[i] = a[o];
  return r;
}
function GC(e) {
  return this instanceof GC ? ((this.v = e), this) : new GC(e);
}
function KC(e, t, n) {
  if (!Symbol.asyncIterator)
    throw TypeError(`Symbol.asyncIterator is not defined.`);
  var r = n.apply(e, t || []),
    i,
    a = [];
  return (
    (i = {}),
    o(`next`),
    o(`throw`),
    o(`return`),
    (i[Symbol.asyncIterator] = function () {
      return this;
    }),
    i
  );
  function o(e) {
    r[e] &&
      (i[e] = function (t) {
        return new Promise(function (n, r) {
          a.push([e, t, n, r]) > 1 || s(e, t);
        });
      });
  }
  function s(e, t) {
    try {
      c(r[e](t));
    } catch (e) {
      d(a[0][3], e);
    }
  }
  function c(e) {
    e.value instanceof GC
      ? Promise.resolve(e.value.v).then(l, u)
      : d(a[0][2], e);
  }
  function l(e) {
    s(`next`, e);
  }
  function u(e) {
    s(`throw`, e);
  }
  function d(e, t) {
    e(t), a.shift(), a.length && s(a[0][0], a[0][1]);
  }
}
function qC(e) {
  var t = {},
    n;
  return (
    r(`next`),
    r(`throw`, function (e) {
      throw e;
    }),
    r(`return`),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function r(r, i) {
    t[r] = e[r]
      ? function (t) {
          return (n = !n)
            ? { value: GC(e[r](t)), done: r === `return` }
            : i
            ? i(t)
            : t;
        }
      : i;
  }
}
function JC(e) {
  if (!Symbol.asyncIterator)
    throw TypeError(`Symbol.asyncIterator is not defined.`);
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof VC == `function` ? VC(e) : e[Symbol.iterator]()),
      (n = {}),
      r(`next`),
      r(`throw`),
      r(`return`),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n);
  function r(t) {
    n[t] =
      e[t] &&
      function (n) {
        return new Promise(function (r, a) {
          (n = e[t](n)), i(r, a, n.done, n.value);
        });
      };
  }
  function i(e, t, n, r) {
    Promise.resolve(r).then(function (t) {
      e({ value: t, done: n });
    }, t);
  }
}
function YC(e, t) {
  return (
    Object.defineProperty
      ? Object.defineProperty(e, "raw", { value: t })
      : (e.raw = t),
    e
  );
}
function XC(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null)
    for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  return (t.default = e), t;
}
function ZC(e) {
  return e && e.__esModule ? e : { default: e };
}
function QC(e, t) {
  if (!t.has(e))
    throw TypeError(`attempted to get private field on non-instance`);
  return t.get(e);
}
function $C(e, t, n) {
  if (!t.has(e))
    throw TypeError(`attempted to set private field on non-instance`);
  return t.set(e, n), n;
}
var ew,
  tw,
  nw = n(() => {
    (ew = function (e, t) {
      return (
        (ew =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          }),
        ew(e, t)
      );
    }),
      (tw = function () {
        return (
          (tw =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in ((t = arguments[n]), t))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          tw.apply(this, arguments)
        );
      });
  }),
  rw = a((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.isBrowserCryptoAvailable =
        e.getSubtleCrypto =
        e.getBrowerCrypto =
          void 0);
    function t() {
      return (
        (global == null ? void 0 : global.crypto) ||
        (global == null ? void 0 : global.msCrypto) ||
        {}
      );
    }
    e.getBrowerCrypto = t;
    function n() {
      let e = t();
      return e.subtle || e.webkitSubtle;
    }
    e.getSubtleCrypto = n;
    function r() {
      return !!t() && !!n();
    }
    e.isBrowserCryptoAvailable = r;
  }),
  iw = a((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.isBrowser = e.isNode = e.isReactNative = void 0);
    function t() {
      return (
        typeof document > `u` &&
        typeof navigator < `u` &&
        navigator.product === `ReactNative`
      );
    }
    e.isReactNative = t;
    function n() {
      return (
        typeof process < `u` &&
        process.versions !== void 0 &&
        process.versions.node !== void 0
      );
    }
    e.isNode = n;
    function r() {
      return !t() && !n();
    }
    e.isBrowser = r;
  }),
  aw = a((t) => {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (nw(), e(jC));
    n.__exportStar(rw(), t), n.__exportStar(iw(), t);
  }),
  ow = i({ isNodeJs: () => cw }),
  sw = aw();
t(ow, r(aw()));
var cw = sw.isNode;
function lw(e = 3) {
  return Date.now() * 10 ** e + Math.floor(Math.random() * 10 ** e);
}
function uw(e = 6) {
  return BigInt(lw(e));
}
function dw(e, t, n) {
  return { id: n || lw(), jsonrpc: `2.0`, method: e, params: t };
}
function fw(e, t) {
  return { id: e, jsonrpc: `2.0`, result: t };
}
function pw(e, t, n) {
  return { id: e, jsonrpc: `2.0`, error: mw(t, n) };
}
function mw(e, t) {
  return e === void 0
    ? DC(vC)
    : (typeof e == `string` &&
        (e = Object.assign(Object.assign({}, DC(yC)), { message: e })),
      t !== void 0 && (e.data = t),
      TC(e.code) && (e = OC(e.code)),
      e);
}
function hw(e) {
  return e.includes(`*`) ? _w(e) : !/\W/g.test(e);
}
function gw(e) {
  return e === `*`;
}
function _w(e) {
  return gw(e)
    ? !0
    : !(
        !e.includes(`*`) ||
        e.split(`*`).length !== 2 ||
        e.split(`*`).filter((e) => e.trim() === ``).length !== 1
      );
}
function vw(e) {
  return !gw(e) && _w(e) && !e.split(`*`)[0].trim();
}
function yw(e) {
  return !gw(e) && _w(e) && !e.split(`*`)[1].trim();
}
var bw = class {},
  xw = class extends bw {
    constructor(e) {
      super();
    }
  },
  Sw = class extends bw {
    constructor() {
      super();
    }
  },
  Cw = class extends Sw {
    constructor(e) {
      super();
    }
  },
  ww = `^https?:`,
  Tw = `^wss?:`;
function Ew(e) {
  let t = e.match(new RegExp(/^\w+:/, `gi`));
  if (t && t.length) return t[0];
}
function Dw(e, t) {
  let n = Ew(e);
  return n !== void 0 && new RegExp(t).test(n);
}
function Ow(e) {
  return Dw(e, ww);
}
function kw(e) {
  return Dw(e, Tw);
}
function Aw(e) {
  return RegExp(`wss?://localhost(:d{2,5})?`).test(e);
}
function jw(e) {
  return (
    typeof e == `object` && `id` in e && `jsonrpc` in e && e.jsonrpc === `2.0`
  );
}
function Mw(e) {
  return jw(e) && `method` in e;
}
function Nw(e) {
  return jw(e) && (Pw(e) || Fw(e));
}
function Pw(e) {
  return `result` in e;
}
function Fw(e) {
  return `error` in e;
}
function Iw(e) {
  return `error` in e && e.valid === !1;
}
var Lw = i({
  DEFAULT_ERROR: () => CC,
  IBaseJsonRpcProvider: () => Sw,
  IEvents: () => bw,
  IJsonRpcConnection: () => xw,
  IJsonRpcProvider: () => Cw,
  INTERNAL_ERROR: () => vC,
  INVALID_PARAMS: () => _C,
  INVALID_REQUEST: () => hC,
  METHOD_NOT_FOUND: () => gC,
  PARSE_ERROR: () => mC,
  RESERVED_ERROR_CODES: () => bC,
  SERVER_ERROR: () => yC,
  SERVER_ERROR_CODE_RANGE: () => xC,
  STANDARD_ERROR_MAP: () => SC,
  formatErrorMessage: () => mw,
  formatJsonRpcError: () => pw,
  formatJsonRpcRequest: () => dw,
  formatJsonRpcResult: () => fw,
  getBigIntRpcId: () => uw,
  getError: () => DC,
  getErrorByCode: () => OC,
  isHttpUrl: () => Ow,
  isJsonRpcError: () => Fw,
  isJsonRpcPayload: () => jw,
  isJsonRpcRequest: () => Mw,
  isJsonRpcResponse: () => Nw,
  isJsonRpcResult: () => Pw,
  isJsonRpcValidationInvalid: () => Iw,
  isLocalhostUrl: () => Aw,
  isNodeJs: () => cw,
  isReservedErrorCode: () => TC,
  isServerErrorCode: () => wC,
  isValidDefaultRoute: () => gw,
  isValidErrorCode: () => EC,
  isValidLeadingWildcardRoute: () => vw,
  isValidRoute: () => hw,
  isValidTrailingWildcardRoute: () => yw,
  isValidWildcardRoute: () => _w,
  isWsUrl: () => kw,
  parseConnectionError: () => AC,
  payloadId: () => lw,
  validateJsonRpcError: () => kC,
});
t(Lw, ow);
var Rw = class extends Cw {
    constructor(e) {
      super(e),
        (this.events = new Dn.EventEmitter()),
        (this.hasRegisteredEventListeners = !1),
        (this.connection = this.setConnection(e)),
        this.connection.connected && this.registerEventListeners();
    }
    async connect(e = this.connection) {
      await this.open(e);
    }
    async disconnect() {
      await this.close();
    }
    on(e, t) {
      this.events.on(e, t);
    }
    once(e, t) {
      this.events.once(e, t);
    }
    off(e, t) {
      this.events.off(e, t);
    }
    removeListener(e, t) {
      this.events.removeListener(e, t);
    }
    async request(e, t) {
      return this.requestStrict(
        dw(e.method, e.params || [], e.id || uw().toString()),
        t
      );
    }
    async requestStrict(e, t) {
      return new Promise(async (n, r) => {
        if (!this.connection.connected)
          try {
            await this.open();
          } catch (e) {
            r(e);
          }
        this.events.on(`${e.id}`, (e) => {
          Fw(e) ? r(e.error) : n(e.result);
        });
        try {
          await this.connection.send(e, t);
        } catch (e) {
          r(e);
        }
      });
    }
    setConnection(e = this.connection) {
      return e;
    }
    onPayload(e) {
      this.events.emit(`payload`, e),
        Nw(e)
          ? this.events.emit(`${e.id}`, e)
          : this.events.emit(`message`, { type: e.method, data: e.params });
    }
    onClose(e) {
      e &&
        e.code === 3e3 &&
        this.events.emit(
          `error`,
          Error(
            `WebSocket connection closed abnormally with code: ${e.code} ${
              e.reason ? `(${e.reason})` : ``
            }`
          )
        ),
        this.events.emit(`disconnect`);
    }
    async open(e = this.connection) {
      (this.connection === e && this.connection.connected) ||
        (this.connection.connected && this.close(),
        typeof e == `string` &&
          (await this.connection.open(e), (e = this.connection)),
        (this.connection = this.setConnection(e)),
        await this.connection.open(),
        this.registerEventListeners(),
        this.events.emit(`connect`));
    }
    async close() {
      await this.connection.close();
    }
    registerEventListeners() {
      this.hasRegisteredEventListeners ||=
        (this.connection.on(`payload`, (e) => this.onPayload(e)),
        this.connection.on(`close`, (e) => this.onClose(e)),
        this.connection.on(`error`, (e) => this.events.emit(`error`, e)),
        this.connection.on(`register_error`, (e) => this.onClose()),
        !0);
    }
  },
  zw = a((e, t) => {
    t.exports = function () {
      throw Error(
        `ws does not work in the browser. Browser clients must use the native WebSocket object`
      );
    };
  }),
  Bw = () =>
    typeof WebSocket < `u`
      ? WebSocket
      : typeof global < `u` && typeof global.WebSocket < `u`
      ? global.WebSocket
      : typeof window < `u` && typeof window.WebSocket < `u`
      ? window.WebSocket
      : typeof self < `u` && typeof self.WebSocket < `u`
      ? self.WebSocket
      : zw(),
  Vw = () =>
    typeof WebSocket < `u` ||
    (typeof global < `u` && typeof global.WebSocket < `u`) ||
    (typeof window < `u` && typeof window.WebSocket < `u`) ||
    (typeof self < `u` && typeof self.WebSocket < `u`),
  Hw = (e) => e.split(`?`)[0],
  Uw = 10,
  Ww = Bw(),
  Gw = class {
    constructor(e) {
      if (
        ((this.url = e),
        (this.events = new Dn.EventEmitter()),
        (this.registering = !1),
        !kw(e))
      )
        throw Error(
          `Provided URL is not compatible with WebSocket connection: ${e}`
        );
      this.url = e;
    }
    get connected() {
      return typeof this.socket < `u`;
    }
    get connecting() {
      return this.registering;
    }
    on(e, t) {
      this.events.on(e, t);
    }
    once(e, t) {
      this.events.once(e, t);
    }
    off(e, t) {
      this.events.off(e, t);
    }
    removeListener(e, t) {
      this.events.removeListener(e, t);
    }
    async open(e = this.url) {
      await this.register(e);
    }
    async close() {
      return new Promise((e, t) => {
        if (typeof this.socket > `u`) {
          t(Error(`Connection already closed`));
          return;
        }
        (this.socket.onclose = (t) => {
          this.onClose(t), e();
        }),
          this.socket.close();
      });
    }
    async send(e) {
      typeof this.socket > `u` && (this.socket = await this.register());
      try {
        this.socket.send(cr(e));
      } catch (t) {
        this.onError(e.id, t);
      }
    }
    register(e = this.url) {
      if (!kw(e))
        throw Error(
          `Provided URL is not compatible with WebSocket connection: ${e}`
        );
      if (this.registering) {
        let e = this.events.getMaxListeners();
        return (
          (this.events.listenerCount(`register_error`) >= e ||
            this.events.listenerCount(`open`) >= e) &&
            this.events.setMaxListeners(e + 1),
          new Promise((e, t) => {
            this.events.once(`register_error`, (e) => {
              this.resetMaxListeners(), t(e);
            }),
              this.events.once(`open`, () => {
                if ((this.resetMaxListeners(), typeof this.socket > `u`))
                  return t(Error(`WebSocket connection is missing or invalid`));
                e(this.socket);
              });
          })
        );
      }
      return (
        (this.url = e),
        (this.registering = !0),
        new Promise((t, n) => {
          let r = new Ww(
            e,
            [],
            (0, Lw.isReactNative)() ? void 0 : { rejectUnauthorized: !Aw(e) }
          );
          Vw()
            ? (r.onerror = (e) => {
                let t = e;
                n(this.emitError(t.error));
              })
            : r.on(`error`, (e) => {
                n(this.emitError(e));
              }),
            (r.onopen = () => {
              this.onOpen(r), t(r);
            });
        })
      );
    }
    onOpen(e) {
      (e.onmessage = (e) => this.onPayload(e)),
        (e.onclose = (e) => this.onClose(e)),
        (this.socket = e),
        (this.registering = !1),
        this.events.emit(`open`);
    }
    onClose(e) {
      (this.socket = void 0),
        (this.registering = !1),
        this.events.emit(`close`, e);
    }
    onPayload(e) {
      if (typeof e.data > `u`) return;
      let t = typeof e.data == `string` ? sr(e.data) : e.data;
      this.events.emit(`payload`, t);
    }
    onError(e, t) {
      let n = this.parseError(t),
        r = pw(e, n.message || n.toString());
      this.events.emit(`payload`, r);
    }
    parseError(e, t = this.url) {
      return AC(e, Hw(t), `WS`);
    }
    resetMaxListeners() {
      this.events.getMaxListeners() > Uw && this.events.setMaxListeners(Uw);
    }
    emitError(e) {
      let t = this.parseError(
        Error(
          e?.message || `WebSocket connection failed for host: ${Hw(this.url)}`
        )
      );
      return this.events.emit(`register_error`, t), t;
    }
  },
  Kw = `core`,
  qw = `wc@2:${Kw}:`,
  Jw = { name: Kw, logger: `error` },
  Yw = { database: `:memory:` },
  Xw = `crypto`,
  Zw = `client_ed25519_seed`,
  Qw = z.ONE_DAY,
  $w = `keychain`,
  eT = `messages`,
  tT = z.SIX_HOURS,
  nT = `publisher`,
  rT = `error`,
  iT = `relayer`,
  aT = {
    message: `relayer_message`,
    message_ack: `relayer_message_ack`,
    connect: `relayer_connect`,
    disconnect: `relayer_disconnect`,
    error: `relayer_error`,
    connection_stalled: `relayer_connection_stalled`,
    transport_closed: `relayer_transport_closed`,
    publish: `relayer_publish`,
  },
  oT = {
    payload: `payload`,
    connect: `connect`,
    disconnect: `disconnect`,
    error: `error`,
  },
  sT = `2.23.7`,
  K = { link_mode: `link_mode`, relay: `relay` },
  cT = { inbound: `inbound`, outbound: `outbound` },
  lT = `WALLETCONNECT_CLIENT_ID`,
  uT = {
    created: `subscription_created`,
    deleted: `subscription_deleted`,
    expired: `subscription_expired`,
    disabled: `subscription_disabled`,
    sync: `subscription_sync`,
    resubscribed: `subscription_resubscribed`,
  },
  dT = `subscription`;
z.FIVE_SECONDS * 1e3;
var fT = `pairing`,
  pT = {
    wc_pairingDelete: {
      req: { ttl: z.ONE_DAY, prompt: !1, tag: 1e3 },
      res: { ttl: z.ONE_DAY, prompt: !1, tag: 1001 },
    },
    wc_pairingPing: {
      req: { ttl: z.THIRTY_SECONDS, prompt: !1, tag: 1002 },
      res: { ttl: z.THIRTY_SECONDS, prompt: !1, tag: 1003 },
    },
    unregistered_method: {
      req: { ttl: z.ONE_DAY, prompt: !1, tag: 0 },
      res: { ttl: z.ONE_DAY, prompt: !1, tag: 0 },
    },
  },
  mT = {
    create: `pairing_create`,
    expire: `pairing_expire`,
    delete: `pairing_delete`,
    ping: `pairing_ping`,
  },
  hT = {
    created: `history_created`,
    updated: `history_updated`,
    deleted: `history_deleted`,
    sync: `history_sync`,
  },
  gT = `history`,
  _T = `expirer`,
  vT = {
    created: `expirer_created`,
    deleted: `expirer_deleted`,
    expired: `expirer_expired`,
    sync: `expirer_sync`,
  },
  yT = `verify-api`,
  bT = `https://verify.walletconnect.com`,
  xT = `https://verify.walletconnect.org`,
  ST = `${xT}/v3`,
  CT = [bT, xT],
  wT = `echo`,
  TT = `https://echo.walletconnect.com`,
  ET = {
    pairing_started: `pairing_started`,
    pairing_uri_validation_success: `pairing_uri_validation_success`,
    pairing_uri_not_expired: `pairing_uri_not_expired`,
    store_new_pairing: `store_new_pairing`,
    subscribing_pairing_topic: `subscribing_pairing_topic`,
    subscribe_pairing_topic_success: `subscribe_pairing_topic_success`,
    existing_pairing: `existing_pairing`,
    pairing_not_expired: `pairing_not_expired`,
    emit_inactive_pairing: `emit_inactive_pairing`,
    emit_session_proposal: `emit_session_proposal`,
    subscribing_to_pairing_topic: `subscribing_to_pairing_topic`,
  },
  DT = {
    no_wss_connection: `no_wss_connection`,
    no_internet_connection: `no_internet_connection`,
    malformed_pairing_uri: `malformed_pairing_uri`,
    active_pairing_already_exists: `active_pairing_already_exists`,
    subscribe_pairing_topic_failure: `subscribe_pairing_topic_failure`,
    pairing_expired: `pairing_expired`,
    proposal_expired: `proposal_expired`,
    proposal_listener_not_found: `proposal_listener_not_found`,
  },
  OT = {
    session_approve_started: `session_approve_started`,
    proposal_not_expired: `proposal_not_expired`,
    session_namespaces_validation_success: `session_namespaces_validation_success`,
    create_session_topic: `create_session_topic`,
    subscribing_session_topic: `subscribing_session_topic`,
    subscribe_session_topic_success: `subscribe_session_topic_success`,
    publishing_session_approve: `publishing_session_approve`,
    session_approve_publish_success: `session_approve_publish_success`,
    store_session: `store_session`,
    publishing_session_settle: `publishing_session_settle`,
    session_settle_publish_success: `session_settle_publish_success`,
    session_request_response_started: `session_request_response_started`,
    session_request_response_validation_success: `session_request_response_validation_success`,
    session_request_response_publish_started: `session_request_response_publish_started`,
  },
  kT = {
    no_internet_connection: `no_internet_connection`,
    no_wss_connection: `no_wss_connection`,
    proposal_expired: `proposal_expired`,
    subscribe_session_topic_failure: `subscribe_session_topic_failure`,
    session_approve_publish_failure: `session_approve_publish_failure`,
    session_settle_publish_failure: `session_settle_publish_failure`,
    session_approve_namespace_validation_failure: `session_approve_namespace_validation_failure`,
    proposal_not_found: `proposal_not_found`,
    session_request_response_validation_failure: `session_request_response_validation_failure`,
    session_request_response_publish_failure: `session_request_response_publish_failure`,
  },
  AT = {
    authenticated_session_approve_started: `authenticated_session_approve_started`,
    authenticated_session_not_expired: `authenticated_session_not_expired`,
    chains_caip2_compliant: `chains_caip2_compliant`,
    chains_evm_compliant: `chains_evm_compliant`,
    create_authenticated_session_topic: `create_authenticated_session_topic`,
    cacaos_verified: `cacaos_verified`,
    store_authenticated_session: `store_authenticated_session`,
    subscribing_authenticated_session_topic: `subscribing_authenticated_session_topic`,
    subscribe_authenticated_session_topic_success: `subscribe_authenticated_session_topic_success`,
    publishing_authenticated_session_approve: `publishing_authenticated_session_approve`,
    authenticated_session_approve_publish_success: `authenticated_session_approve_publish_success`,
  },
  jT = {
    no_internet_connection: `no_internet_connection`,
    no_wss_connection: `no_wss_connection`,
    missing_session_authenticate_request: `missing_session_authenticate_request`,
    session_authenticate_request_expired: `session_authenticate_request_expired`,
    chains_caip2_compliant_failure: `chains_caip2_compliant_failure`,
    chains_evm_compliant_failure: `chains_evm_compliant_failure`,
    invalid_cacao: `invalid_cacao`,
    subscribe_authenticated_session_topic_failure: `subscribe_authenticated_session_topic_failure`,
    authenticated_session_approve_publish_failure: `authenticated_session_approve_publish_failure`,
    authenticated_session_pending_request_not_found: `authenticated_session_pending_request_not_found`,
  },
  MT = 0.1,
  NT = `event-client`,
  PT = `https://pulse.walletconnect.org/batch`;
function FT(e, t) {
  if (e.length >= 255) throw TypeError(`Alphabet too long`);
  for (var n = new Uint8Array(256), r = 0; r < n.length; r++) n[r] = 255;
  for (var i = 0; i < e.length; i++) {
    var a = e.charAt(i),
      o = a.charCodeAt(0);
    if (n[o] !== 255) throw TypeError(a + ` is ambiguous`);
    n[o] = i;
  }
  var s = e.length,
    c = e.charAt(0),
    l = Math.log(s) / Math.log(256),
    u = Math.log(256) / Math.log(s);
  function d(t) {
    if (
      (t instanceof Uint8Array ||
        (ArrayBuffer.isView(t)
          ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
          : Array.isArray(t) && (t = Uint8Array.from(t))),
      !(t instanceof Uint8Array))
    )
      throw TypeError(`Expected Uint8Array`);
    if (t.length === 0) return ``;
    for (var n = 0, r = 0, i = 0, a = t.length; i !== a && t[i] === 0; )
      i++, n++;
    for (var o = ((a - i) * u + 1) >>> 0, l = new Uint8Array(o); i !== a; ) {
      for (
        var d = t[i], f = 0, p = o - 1;
        (d !== 0 || f < r) && p !== -1;
        p--, f++
      )
        (d += (256 * l[p]) >>> 0), (l[p] = d % s >>> 0), (d = (d / s) >>> 0);
      if (d !== 0) throw Error(`Non-zero carry`);
      (r = f), i++;
    }
    for (var m = o - r; m !== o && l[m] === 0; ) m++;
    for (var h = c.repeat(n); m < o; ++m) h += e.charAt(l[m]);
    return h;
  }
  function f(e) {
    if (typeof e != `string`) throw TypeError(`Expected String`);
    if (e.length === 0) return new Uint8Array();
    var t = 0;
    if (e[t] !== ` `) {
      for (var r = 0, i = 0; e[t] === c; ) r++, t++;
      for (
        var a = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(a);
        e[t];

      ) {
        var u = n[e.charCodeAt(t)];
        if (u === 255) return;
        for (var d = 0, f = a - 1; (u !== 0 || d < i) && f !== -1; f--, d++)
          (u += (s * o[f]) >>> 0),
            (o[f] = u % 256 >>> 0),
            (u = (u / 256) >>> 0);
        if (u !== 0) throw Error(`Non-zero carry`);
        (i = d), t++;
      }
      if (e[t] !== ` `) {
        for (var p = a - i; p !== a && o[p] === 0; ) p++;
        for (var m = new Uint8Array(r + (a - p)), h = r; p !== a; )
          m[h++] = o[p++];
        return m;
      }
    }
  }
  function p(e) {
    var n = f(e);
    if (n) return n;
    throw Error(`Non-${t} character`);
  }
  return { encode: d, decodeUnsafe: f, decode: p };
}
var IT = FT,
  LT = (e) => {
    if (e instanceof Uint8Array && e.constructor.name === `Uint8Array`)
      return e;
    if (e instanceof ArrayBuffer) return new Uint8Array(e);
    if (ArrayBuffer.isView(e))
      return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
    throw Error(`Unknown type, must be binary type`);
  },
  RT = (e) => new TextEncoder().encode(e),
  zT = (e) => new TextDecoder().decode(e),
  BT = class {
    constructor(e, t, n) {
      (this.name = e), (this.prefix = t), (this.baseEncode = n);
    }
    encode(e) {
      if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
      throw Error(`Unknown type, must be binary type`);
    }
  },
  VT = class {
    constructor(e, t, n) {
      if (((this.name = e), (this.prefix = t), t.codePointAt(0) === void 0))
        throw Error(`Invalid prefix character`);
      (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = n);
    }
    decode(e) {
      if (typeof e == `string`) {
        if (e.codePointAt(0) !== this.prefixCodePoint)
          throw Error(
            `Unable to decode multibase string ${JSON.stringify(e)}, ${
              this.name
            } decoder only supports inputs prefixed with ${this.prefix}`
          );
        return this.baseDecode(e.slice(this.prefix.length));
      }
      throw Error(`Can only multibase decode strings`);
    }
    or(e) {
      return UT(this, e);
    }
  },
  HT = class {
    constructor(e) {
      this.decoders = e;
    }
    or(e) {
      return UT(this, e);
    }
    decode(e) {
      let t = e[0],
        n = this.decoders[t];
      if (n) return n.decode(e);
      throw RangeError(
        `Unable to decode multibase string ${JSON.stringify(
          e
        )}, only inputs prefixed with ${Object.keys(
          this.decoders
        )} are supported`
      );
    }
  },
  UT = (e, t) =>
    new HT({
      ...(e.decoders || { [e.prefix]: e }),
      ...(t.decoders || { [t.prefix]: t }),
    }),
  WT = class {
    constructor(e, t, n, r) {
      (this.name = e),
        (this.prefix = t),
        (this.baseEncode = n),
        (this.baseDecode = r),
        (this.encoder = new BT(e, t, n)),
        (this.decoder = new VT(e, t, r));
    }
    encode(e) {
      return this.encoder.encode(e);
    }
    decode(e) {
      return this.decoder.decode(e);
    }
  },
  GT = ({ name: e, prefix: t, encode: n, decode: r }) => new WT(e, t, n, r),
  KT = ({ prefix: e, name: t, alphabet: n }) => {
    let { encode: r, decode: i } = IT(n, t);
    return GT({ prefix: e, name: t, encode: r, decode: (e) => LT(i(e)) });
  },
  qT = (e, t, n, r) => {
    let i = {};
    for (let e = 0; e < t.length; ++e) i[t[e]] = e;
    let a = e.length;
    for (; e[a - 1] === `=`; ) --a;
    let o = new Uint8Array(((a * n) / 8) | 0),
      s = 0,
      c = 0,
      l = 0;
    for (let t = 0; t < a; ++t) {
      let a = i[e[t]];
      if (a === void 0) throw SyntaxError(`Non-${r} character`);
      (c = (c << n) | a),
        (s += n),
        s >= 8 && ((s -= 8), (o[l++] = 255 & (c >> s)));
    }
    if (s >= n || 255 & (c << (8 - s)))
      throw SyntaxError(`Unexpected end of data`);
    return o;
  },
  JT = (e, t, n) => {
    let r = t[t.length - 1] === `=`,
      i = (1 << n) - 1,
      a = ``,
      o = 0,
      s = 0;
    for (let r = 0; r < e.length; ++r)
      for (s = (s << 8) | e[r], o += 8; o > n; )
        (o -= n), (a += t[i & (s >> o)]);
    if ((o && (a += t[i & (s << (n - o))]), r))
      for (; (a.length * n) & 7; ) a += `=`;
    return a;
  },
  YT = ({ name: e, prefix: t, bitsPerChar: n, alphabet: r }) =>
    GT({
      prefix: t,
      name: e,
      encode(e) {
        return JT(e, r, n);
      },
      decode(t) {
        return qT(t, r, n, e);
      },
    }),
  XT = GT({
    prefix: `\0`,
    name: `identity`,
    encode: (e) => zT(e),
    decode: (e) => RT(e),
  }),
  ZT = Object.freeze({ __proto__: null, identity: XT }),
  QT = YT({ prefix: `0`, name: `base2`, alphabet: `01`, bitsPerChar: 1 }),
  $T = Object.freeze({ __proto__: null, base2: QT }),
  eE = YT({ prefix: `7`, name: `base8`, alphabet: `01234567`, bitsPerChar: 3 }),
  tE = Object.freeze({ __proto__: null, base8: eE }),
  nE = KT({ prefix: `9`, name: `base10`, alphabet: `0123456789` }),
  rE = Object.freeze({ __proto__: null, base10: nE }),
  iE = YT({
    prefix: `f`,
    name: `base16`,
    alphabet: `0123456789abcdef`,
    bitsPerChar: 4,
  }),
  aE = YT({
    prefix: `F`,
    name: `base16upper`,
    alphabet: `0123456789ABCDEF`,
    bitsPerChar: 4,
  }),
  oE = Object.freeze({ __proto__: null, base16: iE, base16upper: aE }),
  sE = YT({
    prefix: `b`,
    name: `base32`,
    alphabet: `abcdefghijklmnopqrstuvwxyz234567`,
    bitsPerChar: 5,
  }),
  cE = YT({
    prefix: `B`,
    name: `base32upper`,
    alphabet: `ABCDEFGHIJKLMNOPQRSTUVWXYZ234567`,
    bitsPerChar: 5,
  }),
  lE = YT({
    prefix: `c`,
    name: `base32pad`,
    alphabet: `abcdefghijklmnopqrstuvwxyz234567=`,
    bitsPerChar: 5,
  }),
  uE = YT({
    prefix: `C`,
    name: `base32padupper`,
    alphabet: `ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=`,
    bitsPerChar: 5,
  }),
  dE = YT({
    prefix: `v`,
    name: `base32hex`,
    alphabet: `0123456789abcdefghijklmnopqrstuv`,
    bitsPerChar: 5,
  }),
  fE = YT({
    prefix: `V`,
    name: `base32hexupper`,
    alphabet: `0123456789ABCDEFGHIJKLMNOPQRSTUV`,
    bitsPerChar: 5,
  }),
  pE = YT({
    prefix: `t`,
    name: `base32hexpad`,
    alphabet: `0123456789abcdefghijklmnopqrstuv=`,
    bitsPerChar: 5,
  }),
  mE = YT({
    prefix: `T`,
    name: `base32hexpadupper`,
    alphabet: `0123456789ABCDEFGHIJKLMNOPQRSTUV=`,
    bitsPerChar: 5,
  }),
  hE = YT({
    prefix: `h`,
    name: `base32z`,
    alphabet: `ybndrfg8ejkmcpqxot1uwisza345h769`,
    bitsPerChar: 5,
  }),
  gE = Object.freeze({
    __proto__: null,
    base32: sE,
    base32upper: cE,
    base32pad: lE,
    base32padupper: uE,
    base32hex: dE,
    base32hexupper: fE,
    base32hexpad: pE,
    base32hexpadupper: mE,
    base32z: hE,
  }),
  _E = KT({
    prefix: `k`,
    name: `base36`,
    alphabet: `0123456789abcdefghijklmnopqrstuvwxyz`,
  }),
  vE = KT({
    prefix: `K`,
    name: `base36upper`,
    alphabet: `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ`,
  }),
  yE = Object.freeze({ __proto__: null, base36: _E, base36upper: vE }),
  bE = KT({
    name: `base58btc`,
    prefix: `z`,
    alphabet: `123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz`,
  }),
  xE = KT({
    name: `base58flickr`,
    prefix: `Z`,
    alphabet: `123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ`,
  }),
  SE = Object.freeze({ __proto__: null, base58btc: bE, base58flickr: xE }),
  CE = YT({
    prefix: `m`,
    name: `base64`,
    alphabet: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,
    bitsPerChar: 6,
  }),
  wE = YT({
    prefix: `M`,
    name: `base64pad`,
    alphabet: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`,
    bitsPerChar: 6,
  }),
  TE = YT({
    prefix: `u`,
    name: `base64url`,
    alphabet: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`,
    bitsPerChar: 6,
  }),
  EE = YT({
    prefix: `U`,
    name: `base64urlpad`,
    alphabet: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=`,
    bitsPerChar: 6,
  }),
  DE = Object.freeze({
    __proto__: null,
    base64: CE,
    base64pad: wE,
    base64url: TE,
    base64urlpad: EE,
  }),
  OE = Array.from(
    `🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂`
  ),
  kE = OE.reduce((e, t, n) => ((e[n] = t), e), []),
  AE = OE.reduce((e, t, n) => ((e[t.codePointAt(0)] = n), e), []);
function jE(e) {
  return e.reduce((e, t) => ((e += kE[t]), e), ``);
}
function ME(e) {
  let t = [];
  for (let n of e) {
    let e = AE[n.codePointAt(0)];
    if (e === void 0) throw Error(`Non-base256emoji character: ${n}`);
    t.push(e);
  }
  return new Uint8Array(t);
}
var NE = GT({ prefix: `🚀`, name: `base256emoji`, encode: jE, decode: ME }),
  PE = Object.freeze({ __proto__: null, base256emoji: NE }),
  FE = zE,
  IE = 128,
  LE = -128,
  RE = 2 ** 31;
function zE(e, t, n) {
  (t ||= []), (n ||= 0);
  for (var r = n; e >= RE; ) (t[n++] = (e & 255) | IE), (e /= 128);
  for (; e & LE; ) (t[n++] = (e & 255) | IE), (e >>>= 7);
  return (t[n] = e | 0), (zE.bytes = n - r + 1), t;
}
var BE = UE,
  VE = 128,
  HE = 127;
function UE(e, t) {
  var n = 0,
    t = t || 0,
    r = 0,
    i = t,
    a,
    o = e.length;
  do {
    if (i >= o) throw ((UE.bytes = 0), RangeError(`Could not decode varint`));
    (a = e[i++]), (n += r < 28 ? (a & HE) << r : (a & HE) * 2 ** r), (r += 7);
  } while (a >= VE);
  return (UE.bytes = i - t), n;
}
var WE = 128,
  GE = 2 ** 14,
  KE = 2 ** 21,
  qE = 2 ** 28,
  JE = 2 ** 35,
  YE = 2 ** 42,
  XE = 2 ** 49,
  ZE = 2 ** 56,
  QE = 2 ** 63,
  $E = {
    encode: FE,
    decode: BE,
    encodingLength: function (e) {
      return e < WE
        ? 1
        : e < GE
        ? 2
        : e < KE
        ? 3
        : e < qE
        ? 4
        : e < JE
        ? 5
        : e < YE
        ? 6
        : e < XE
        ? 7
        : e < ZE
        ? 8
        : e < QE
        ? 9
        : 10;
    },
  },
  eD = (e, t, n = 0) => ($E.encode(e, t, n), t),
  tD = (e) => $E.encodingLength(e),
  nD = (e, t) => {
    let n = t.byteLength,
      r = tD(e),
      i = r + tD(n),
      a = new Uint8Array(i + n);
    return eD(e, a, 0), eD(n, a, r), a.set(t, i), new rD(e, n, t, a);
  },
  rD = class {
    constructor(e, t, n, r) {
      (this.code = e), (this.size = t), (this.digest = n), (this.bytes = r);
    }
  },
  iD = ({ name: e, code: t, encode: n }) => new aD(e, t, n),
  aD = class {
    constructor(e, t, n) {
      (this.name = e), (this.code = t), (this.encode = n);
    }
    digest(e) {
      if (e instanceof Uint8Array) {
        let t = this.encode(e);
        return t instanceof Uint8Array
          ? nD(this.code, t)
          : t.then((e) => nD(this.code, e));
      }
      throw Error(`Unknown type, must be binary type`);
    }
  },
  oD = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)),
  sD = iD({ name: `sha2-256`, code: 18, encode: oD(`SHA-256`) }),
  cD = iD({ name: `sha2-512`, code: 19, encode: oD(`SHA-512`) }),
  lD = Object.freeze({ __proto__: null, sha256: sD, sha512: cD }),
  uD = 0,
  dD = `identity`,
  fD = LT,
  pD = Object.freeze({
    __proto__: null,
    identity: { code: uD, name: dD, encode: fD, digest: (e) => nD(uD, fD(e)) },
  });
new TextEncoder(), new TextDecoder();
var mD = {
  ...ZT,
  ...$T,
  ...tE,
  ...rE,
  ...oE,
  ...gE,
  ...yE,
  ...SE,
  ...DE,
  ...PE,
};
({ ...lD, ...pD });
function hD(e) {
  return globalThis.Buffer == null
    ? e
    : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
function gD(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? hD(globalThis.Buffer.allocUnsafe(e))
    : new Uint8Array(e);
}
function _D(e, t, n, r) {
  return {
    name: e,
    prefix: t,
    encoder: { name: e, prefix: t, encode: n },
    decoder: { decode: r },
  };
}
var vD = _D(
    `utf8`,
    `u`,
    (e) => `u` + new TextDecoder(`utf8`).decode(e),
    (e) => new TextEncoder().encode(e.substring(1))
  ),
  yD = _D(
    `ascii`,
    `a`,
    (e) => {
      let t = `a`;
      for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
      return t;
    },
    (e) => {
      e = e.substring(1);
      let t = gD(e.length);
      for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
      return t;
    }
  ),
  bD = {
    utf8: vD,
    "utf-8": vD,
    hex: mD.base16,
    latin1: yD,
    ascii: yD,
    binary: yD,
    ...mD,
  };
function xD(e, t = `utf8`) {
  let n = bD[t];
  if (!n) throw Error(`Unsupported encoding "${t}"`);
  return (t === `utf8` || t === `utf-8`) &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? hD(globalThis.Buffer.from(e, `utf-8`))
    : n.decoder.decode(`${n.prefix}${e}`);
}
var SD = Object.defineProperty,
  CD = (e, t, n) =>
    t in e
      ? SD(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  wD = (e, t, n) => CD(e, typeof t == `symbol` ? t : t + ``, n),
  TD = class {
    constructor(e, t) {
      (this.core = e),
        (this.logger = t),
        wD(this, `keychain`, new Map()),
        wD(this, `name`, $w),
        wD(this, `version`, `0.3`),
        wD(this, `initialized`, !1),
        wD(this, `storagePrefix`, qw),
        wD(this, `init`, async () => {
          if (!this.initialized) {
            let e = await this.getKeyChain();
            typeof e < `u` && (this.keychain = e), (this.initialized = !0);
          }
        }),
        wD(this, `has`, (e) => (this.isInitialized(), this.keychain.has(e))),
        wD(this, `set`, async (e, t) => {
          this.isInitialized(), this.keychain.set(e, t), await this.persist();
        }),
        wD(this, `get`, (e) => {
          this.isInitialized();
          let t = this.keychain.get(e);
          if (typeof t > `u`) {
            let { message: t } = V(`NO_MATCHING_KEY`, `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }),
        wD(this, `del`, async (e) => {
          this.isInitialized(), this.keychain.delete(e), await this.persist();
        }),
        (this.core = e),
        (this.logger = zt(t, this.name));
    }
    get context() {
      return Lt(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        `//` +
        this.name
      );
    }
    async setKeyChain(e) {
      await this.core.storage.setItem(this.storageKey, Vm(e));
    }
    async getKeyChain() {
      let e = await this.core.storage.getItem(this.storageKey);
      return typeof e < `u` ? Hm(e) : void 0;
    }
    async persist() {
      await this.setKeyChain(this.keychain);
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = V(`NOT_INITIALIZED`, this.name);
        throw Error(e);
      }
    }
  },
  ED = Object.defineProperty,
  DD = (e, t, n) =>
    t in e
      ? ED(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  OD = (e, t, n) => DD(e, typeof t == `symbol` ? t : t + ``, n),
  kD = class {
    constructor(e, t, n) {
      (this.core = e),
        (this.logger = t),
        OD(this, `name`, Xw),
        OD(this, `keychain`),
        OD(this, `randomSessionIdentifier`, sx()),
        OD(this, `initialized`, !1),
        OD(this, `clientId`),
        OD(this, `init`, async () => {
          this.initialized ||= (await this.keychain.init(), !0);
        }),
        OD(
          this,
          `hasKeys`,
          (e) => (this.isInitialized(), this.keychain.has(e))
        ),
        OD(this, `getClientId`, async () => {
          if ((this.isInitialized(), this.clientId)) return this.clientId;
          let e = Js(ec(await this.getClientSeed()).publicKey);
          return (this.clientId = e), e;
        }),
        OD(this, `generateKeyPair`, () => {
          this.isInitialized();
          let e = ox();
          return this.setPrivateKey(e.publicKey, e.privateKey);
        }),
        OD(this, `signJWT`, async (e) => {
          this.isInitialized();
          let t = ec(await this.getClientSeed()),
            n = this.randomSessionIdentifier;
          return await tc(n, e, Qw, t);
        }),
        OD(this, `generateSharedKey`, (e, t, n) => {
          this.isInitialized();
          let r = cx(this.getPrivateKey(e), t);
          return this.setSymKey(r, n);
        }),
        OD(this, `setSymKey`, async (e, t) => {
          this.isInitialized();
          let n = t || lx(e);
          return await this.keychain.set(n, e), n;
        }),
        OD(this, `deleteKeyPair`, async (e) => {
          this.isInitialized(), await this.keychain.del(e);
        }),
        OD(this, `deleteSymKey`, async (e) => {
          this.isInitialized(), await this.keychain.del(e);
        }),
        OD(this, `encode`, async (e, t, n) => {
          this.isInitialized();
          let r = Sx(n),
            i = cr(t);
          if (wx(r)) return _x(i, n?.encoding);
          if (Cx(r)) {
            let t = r.senderPublicKey,
              n = r.receiverPublicKey;
            e = await this.generateSharedKey(t, n);
          }
          let a = this.getSymKey(e),
            { type: o, senderPublicKey: s } = r;
          return hx({
            type: o,
            symKey: a,
            message: i,
            senderPublicKey: s,
            encoding: n?.encoding,
          });
        }),
        OD(this, `decode`, async (e, t, n) => {
          this.isInitialized();
          let r = xx(t, n);
          if (wx(r)) return sr(vx(t, n?.encoding));
          if (Cx(r)) {
            let t = r.receiverPublicKey,
              n = r.senderPublicKey;
            e = await this.generateSharedKey(t, n);
          }
          try {
            return sr(
              gx({
                symKey: this.getSymKey(e),
                encoded: t,
                encoding: n?.encoding,
              })
            );
          } catch (t) {
            this.logger.error(
              `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`
            ),
              this.logger.error(t);
          }
        }),
        OD(this, `getPayloadType`, (e, t = $b) =>
          fx(bx({ encoded: e, encoding: t }).type)
        ),
        OD(this, `getPayloadSenderPublicKey`, (e, t = $b) => {
          let n = bx({ encoded: e, encoding: t });
          return n.senderPublicKey ? im(n.senderPublicKey, Qb) : void 0;
        }),
        (this.core = e),
        (this.logger = zt(t, this.name)),
        (this.keychain = n || new TD(this.core, this.logger));
    }
    get context() {
      return Lt(this.logger);
    }
    async setPrivateKey(e, t) {
      return await this.keychain.set(e, t), e;
    }
    getPrivateKey(e) {
      return this.keychain.get(e);
    }
    async getClientSeed() {
      let e = ``;
      try {
        e = this.keychain.get(Zw);
      } catch {
        (e = sx()), await this.keychain.set(Zw, e);
      }
      return xD(e, `base16`);
    }
    getSymKey(e) {
      return this.keychain.get(e);
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = V(`NOT_INITIALIZED`, this.name);
        throw Error(e);
      }
    }
  },
  AD = Object.defineProperty,
  jD = Object.defineProperties,
  MD = Object.getOwnPropertyDescriptors,
  ND = Object.getOwnPropertySymbols,
  PD = Object.prototype.hasOwnProperty,
  FD = Object.prototype.propertyIsEnumerable,
  ID = (e, t, n) =>
    t in e
      ? AD(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  LD = (e, t) => {
    for (var n in (t ||= {})) PD.call(t, n) && ID(e, n, t[n]);
    if (ND) for (var n of ND(t)) FD.call(t, n) && ID(e, n, t[n]);
    return e;
  },
  RD = (e, t) => jD(e, MD(t)),
  zD = (e, t, n) => ID(e, typeof t == `symbol` ? t : t + ``, n),
  BD = class extends jr {
    constructor(e, t) {
      super(e, t),
        (this.logger = e),
        (this.core = t),
        zD(this, `messages`, new Map()),
        zD(this, `messagesWithoutClientAck`, new Map()),
        zD(this, `name`, eT),
        zD(this, `version`, `0.3`),
        zD(this, `initialized`, !1),
        zD(this, `storagePrefix`, qw),
        zD(this, `init`, async () => {
          if (!this.initialized) {
            this.logger.trace(`Initialized`);
            try {
              let e = await this.getRelayerMessages();
              typeof e < `u` && (this.messages = e);
              let t = await this.getRelayerMessagesWithoutClientAck();
              typeof t < `u` && (this.messagesWithoutClientAck = t),
                this.logger.debug(
                  `Successfully Restored records for ${this.name}`
                ),
                this.logger.trace({
                  type: `method`,
                  method: `restore`,
                  size: this.messages.size,
                });
            } catch (e) {
              this.logger.debug(`Failed to Restore records for ${this.name}`),
                this.logger.error(e);
            } finally {
              this.initialized = !0;
            }
          }
        }),
        zD(this, `set`, async (e, t, n) => {
          this.isInitialized();
          let r = ux(t),
            i = this.messages.get(e);
          if ((typeof i > `u` && (i = {}), typeof i[r] < `u`)) return r;
          if (((i[r] = t), this.messages.set(e, i), n === cT.inbound)) {
            let n = this.messagesWithoutClientAck.get(e) || {};
            this.messagesWithoutClientAck.set(e, RD(LD({}, n), { [r]: t }));
          }
          return await this.persist(), r;
        }),
        zD(this, `get`, (e) => {
          this.isInitialized();
          let t = this.messages.get(e);
          return typeof t > `u` && (t = {}), t;
        }),
        zD(this, `getWithoutAck`, (e) => {
          this.isInitialized();
          let t = {};
          for (let n of e) {
            let e = this.messagesWithoutClientAck.get(n) || {};
            t[n] = Object.values(e);
          }
          return t;
        }),
        zD(
          this,
          `has`,
          (e, t) => (this.isInitialized(), typeof this.get(e)[ux(t)] < `u`)
        ),
        zD(this, `ack`, async (e, t) => {
          this.isInitialized();
          let n = this.messagesWithoutClientAck.get(e);
          if (typeof n > `u`) return;
          let r = ux(t);
          delete n[r],
            Object.keys(n).length === 0
              ? this.messagesWithoutClientAck.delete(e)
              : this.messagesWithoutClientAck.set(e, n),
            await this.persist();
        }),
        zD(this, `del`, async (e) => {
          this.isInitialized(),
            this.messages.delete(e),
            this.messagesWithoutClientAck.delete(e),
            await this.persist();
        }),
        (this.logger = zt(e, this.name)),
        (this.core = t);
    }
    get context() {
      return Lt(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        `//` +
        this.name
      );
    }
    get storageKeyWithoutClientAck() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        `//` +
        this.name +
        `_withoutClientAck`
      );
    }
    async setRelayerMessages(e) {
      await this.core.storage.setItem(this.storageKey, Vm(e));
    }
    async setRelayerMessagesWithoutClientAck(e) {
      await this.core.storage.setItem(this.storageKeyWithoutClientAck, Vm(e));
    }
    async getRelayerMessages() {
      let e = await this.core.storage.getItem(this.storageKey);
      return typeof e < `u` ? Hm(e) : void 0;
    }
    async getRelayerMessagesWithoutClientAck() {
      let e = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
      return typeof e < `u` ? Hm(e) : void 0;
    }
    async persist() {
      await this.setRelayerMessages(this.messages),
        await this.setRelayerMessagesWithoutClientAck(
          this.messagesWithoutClientAck
        );
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = V(`NOT_INITIALIZED`, this.name);
        throw Error(e);
      }
    }
  },
  VD = Object.defineProperty,
  HD = Object.defineProperties,
  UD = Object.getOwnPropertyDescriptors,
  WD = Object.getOwnPropertySymbols,
  GD = Object.prototype.hasOwnProperty,
  KD = Object.prototype.propertyIsEnumerable,
  qD = (e, t, n) =>
    t in e
      ? VD(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  JD = (e, t) => {
    for (var n in (t ||= {})) GD.call(t, n) && qD(e, n, t[n]);
    if (WD) for (var n of WD(t)) KD.call(t, n) && qD(e, n, t[n]);
    return e;
  },
  YD = (e, t) => HD(e, UD(t)),
  XD = (e, t, n) => qD(e, typeof t == `symbol` ? t : t + ``, n),
  ZD = class extends Mr {
    constructor(e, t) {
      super(e, t),
        (this.relayer = e),
        (this.logger = t),
        XD(this, `events`, new Dn.EventEmitter()),
        XD(this, `name`, nT),
        XD(this, `queue`, new Map()),
        XD(this, `publishTimeout`, (0, z.toMiliseconds)(z.ONE_MINUTE)),
        XD(
          this,
          `initialPublishTimeout`,
          (0, z.toMiliseconds)(z.ONE_SECOND * 15)
        ),
        XD(this, `needsTransportRestart`, !1),
        XD(this, `publish`, async (e, t, n) => {
          var r, i, a;
          this.logger.debug(`Publishing Payload`),
            this.logger.trace({
              type: `method`,
              method: `publish`,
              params: { topic: e, message: t, opts: n },
            });
          let o = n?.ttl || tT,
            s = n?.prompt || !1,
            c = n?.tag || 0,
            l = n?.id || uw().toString(),
            u = Ox(Dx().protocol),
            d = {
              id: l,
              method: n?.publishMethod || u.publish,
              params: JD(
                {
                  topic: e,
                  message: t,
                  ttl: o,
                  prompt: s,
                  tag: c,
                  attestation: n?.attestation,
                },
                n?.tvf
              ),
            },
            f = `Failed to publish payload, please try again. id:${l} tag:${c}`;
          try {
            pS(d.params?.prompt) && ((r = d.params) == null || delete r.prompt),
              pS(d.params?.tag) && ((i = d.params) == null || delete i.tag);
            let a = new Promise(async (e) => {
              let t = ({ id: n }) => {
                d.id?.toString() === n.toString() &&
                  (this.removeRequestFromQueue(n),
                  this.relayer.events.removeListener(aT.publish, t),
                  e());
              };
              this.relayer.events.on(aT.publish, t);
              let r = Wm(
                new Promise((e, t) => {
                  this.rpcPublish(d, n)
                    .then(e)
                    .catch((e) => {
                      this.logger.warn(e, e?.message), t(e);
                    });
                }),
                this.initialPublishTimeout,
                `Failed initial publish, retrying.... id:${l} tag:${c}`
              );
              try {
                await r, this.events.removeListener(aT.publish, t);
              } catch (e) {
                this.queue.set(l, { request: d, opts: n, attempt: 1 }),
                  this.logger.warn(e, e?.message);
              }
            });
            this.logger.trace({
              type: `method`,
              method: `publish`,
              params: { id: l, topic: e, message: t, opts: n },
            }),
              await Wm(a, this.publishTimeout, f);
          } catch (e) {
            if (
              (this.logger.debug(`Failed to Publish Payload`),
              this.logger.error(e),
              (a = n?.internal) != null && a.throwOnFailedPublish)
            )
              throw e;
          } finally {
            this.queue.delete(l);
          }
        }),
        XD(this, `publishCustom`, async (e) => {
          var t, n, r;
          this.logger.debug(`Publishing custom payload`),
            this.logger.trace({
              type: `method`,
              method: `publishCustom`,
              params: e,
            });
          let { payload: i, opts: a = {} } = e,
            {
              attestation: o,
              tvf: s,
              publishMethod: c,
              prompt: l,
              tag: u,
              ttl: d = z.FIVE_MINUTES,
            } = a,
            f = a.id || uw().toString(),
            p = Ox(Dx().protocol),
            m = c || p.publish,
            h = {
              id: f,
              method: m,
              params: JD(
                YD(JD({}, i), { ttl: d, prompt: l, tag: u, attestation: o }),
                s
              ),
            },
            g = `Failed to publish custom payload, please try again. id:${f} tag:${u}`;
          try {
            pS(h.params?.prompt) && ((t = h.params) == null || delete t.prompt),
              pS(h.params?.tag) && ((n = h.params) == null || delete n.tag);
            let e = new Promise(async (e) => {
              let t = ({ id: n }) => {
                h.id?.toString() === n.toString() &&
                  (this.removeRequestFromQueue(n),
                  this.relayer.events.removeListener(aT.publish, t),
                  e());
              };
              this.relayer.events.on(aT.publish, t);
              let n = Wm(
                new Promise((e, t) => {
                  this.rpcPublish(h, a)
                    .then(e)
                    .catch((e) => {
                      this.logger.warn(e, e?.message), t(e);
                    });
                }),
                this.initialPublishTimeout,
                `Failed initial custom payload publish, retrying.... method:${m} id:${f} tag:${u}`
              );
              try {
                await n, this.events.removeListener(aT.publish, t);
              } catch (e) {
                this.queue.set(f, { request: h, opts: a, attempt: 1 }),
                  this.logger.warn(e, e?.message);
              }
            });
            this.logger.trace({
              type: `method`,
              method: `publish`,
              params: { id: f, payload: i, opts: a },
            }),
              await Wm(e, this.publishTimeout, g);
          } catch (e) {
            if (
              (this.logger.debug(`Failed to Publish Payload`),
              this.logger.error(e),
              (r = a?.internal) != null && r.throwOnFailedPublish)
            )
              throw e;
          } finally {
            this.queue.delete(f);
          }
        }),
        XD(this, `on`, (e, t) => {
          this.events.on(e, t);
        }),
        XD(this, `once`, (e, t) => {
          this.events.once(e, t);
        }),
        XD(this, `off`, (e, t) => {
          this.events.off(e, t);
        }),
        XD(this, `removeListener`, (e, t) => {
          this.events.removeListener(e, t);
        }),
        (this.relayer = e),
        (this.logger = zt(t, this.name)),
        this.registerEventListeners();
    }
    get context() {
      return Lt(this.logger);
    }
    async rpcPublish(e, t) {
      this.logger.debug(`Outgoing Relay Payload`),
        this.logger.trace({
          type: `message`,
          direction: `outgoing`,
          request: e,
        });
      let n = await this.relayer.request(e);
      return (
        this.relayer.events.emit(aT.publish, JD(JD({}, e), t)),
        this.logger.debug(`Successfully Published Payload`),
        n
      );
    }
    removeRequestFromQueue(e) {
      this.queue.delete(e);
    }
    checkQueue() {
      this.queue.forEach(async (e, t) => {
        let n = e.attempt + 1;
        this.queue.set(t, YD(JD({}, e), { attempt: n })),
          this.logger.warn(
            {},
            `Publisher: queue->publishing: ${e.request.id}, tag: ${e.request.params?.tag}, attempt: ${n}`
          ),
          await this.rpcPublish(e.request, e.opts),
          this.logger.warn({}, `Publisher: queue->published: ${e.request.id}`);
      });
    }
    registerEventListeners() {
      this.relayer.core.heartbeat.on(An.pulse, () => {
        if (this.needsTransportRestart) {
          (this.needsTransportRestart = !1),
            this.relayer.events.emit(aT.connection_stalled);
          return;
        }
        this.checkQueue();
      }),
        this.relayer.on(aT.message_ack, (e) => {
          this.removeRequestFromQueue(e.id.toString());
        });
    }
  },
  QD = Object.defineProperty,
  $D = (e, t, n) =>
    t in e
      ? QD(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  eO = (e, t, n) => $D(e, typeof t == `symbol` ? t : t + ``, n),
  tO = class {
    constructor() {
      eO(this, `map`, new Map()),
        eO(this, `set`, (e, t) => {
          let n = this.get(e);
          this.exists(e, t) || this.map.set(e, [...n, t]);
        }),
        eO(this, `get`, (e) => this.map.get(e) || []),
        eO(this, `exists`, (e, t) => this.get(e).includes(t)),
        eO(this, `delete`, (e, t) => {
          if (typeof t > `u`) {
            this.map.delete(e);
            return;
          }
          if (!this.map.has(e)) return;
          let n = this.get(e);
          if (!this.exists(e, t)) return;
          let r = n.filter((e) => e !== t);
          if (!r.length) {
            this.map.delete(e);
            return;
          }
          this.map.set(e, r);
        }),
        eO(this, `clear`, () => {
          this.map.clear();
        });
    }
    get topics() {
      return Array.from(this.map.keys());
    }
  },
  nO = Object.defineProperty,
  rO = Object.defineProperties,
  iO = Object.getOwnPropertyDescriptors,
  aO = Object.getOwnPropertySymbols,
  oO = Object.prototype.hasOwnProperty,
  sO = Object.prototype.propertyIsEnumerable,
  cO = (e, t, n) =>
    t in e
      ? nO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  lO = (e, t) => {
    for (var n in (t ||= {})) oO.call(t, n) && cO(e, n, t[n]);
    if (aO) for (var n of aO(t)) sO.call(t, n) && cO(e, n, t[n]);
    return e;
  },
  uO = (e, t) => rO(e, iO(t)),
  q = (e, t, n) => cO(e, typeof t == `symbol` ? t : t + ``, n),
  dO = class extends Fr {
    constructor(e, t) {
      super(e, t),
        (this.relayer = e),
        (this.logger = t),
        q(this, `subscriptions`, new Map()),
        q(this, `topicMap`, new tO()),
        q(this, `events`, new Dn.EventEmitter()),
        q(this, `name`, dT),
        q(this, `version`, `0.3`),
        q(this, `pending`, new Map()),
        q(this, `cached`, []),
        q(this, `initialized`, !1),
        q(this, `storagePrefix`, qw),
        q(this, `subscribeTimeout`, (0, z.toMiliseconds)(z.ONE_MINUTE)),
        q(
          this,
          `initialSubscribeTimeout`,
          (0, z.toMiliseconds)(z.ONE_SECOND * 15)
        ),
        q(this, `clientId`),
        q(this, `batchSubscribeTopicsLimit`, 500),
        q(this, `init`, async () => {
          this.initialized ||
            (this.logger.trace(`Initialized`),
            this.registerEventListeners(),
            await this.restore()),
            (this.initialized = !0);
        }),
        q(this, `subscribe`, async (e, t) => {
          var n;
          this.isInitialized(),
            this.logger.debug(`Subscribing Topic`),
            this.logger.trace({
              type: `method`,
              method: `subscribe`,
              params: { topic: e, opts: t },
            });
          try {
            let r = Dx(t),
              i = { topic: e, relay: r, transportType: t?.transportType };
            ((n = t?.internal) != null && n.skipSubscribe) ||
              this.pending.set(e, i);
            let a = await this.rpcSubscribe(e, r, t);
            return (
              typeof a == `string` &&
                (this.onSubscribe(a, i),
                this.logger.debug(`Successfully Subscribed Topic`),
                this.logger.trace({
                  type: `method`,
                  method: `subscribe`,
                  params: { topic: e, opts: t },
                })),
              a
            );
          } catch (e) {
            throw (
              (this.logger.debug(`Failed to Subscribe Topic`),
              this.logger.error(e),
              e)
            );
          }
        }),
        q(this, `unsubscribe`, async (e, t) => {
          this.isInitialized(),
            typeof t?.id < `u`
              ? await this.unsubscribeById(e, t.id, t)
              : await this.unsubscribeByTopic(e, t);
        }),
        q(
          this,
          `isSubscribed`,
          (e) =>
            new Promise((t) => {
              t(this.topicMap.topics.includes(e));
            })
        ),
        q(
          this,
          `isKnownTopic`,
          (e) =>
            new Promise((t) => {
              t(
                this.topicMap.topics.includes(e) ||
                  this.pending.has(e) ||
                  this.cached.some((t) => t.topic === e)
              );
            })
        ),
        q(this, `on`, (e, t) => {
          this.events.on(e, t);
        }),
        q(this, `once`, (e, t) => {
          this.events.once(e, t);
        }),
        q(this, `off`, (e, t) => {
          this.events.off(e, t);
        }),
        q(this, `removeListener`, (e, t) => {
          this.events.removeListener(e, t);
        }),
        q(this, `start`, async () => {
          await this.onConnect();
        }),
        q(this, `stop`, async () => {
          await this.onDisconnect();
        }),
        q(this, `restart`, async () => {
          await this.restore(), await this.onRestart();
        }),
        q(this, `checkPending`, async () => {
          if (
            this.pending.size === 0 &&
            (!this.initialized || !this.relayer.connected)
          )
            return;
          let e = [];
          this.pending.forEach((t) => {
            e.push(t);
          }),
            await this.batchSubscribe(e);
        }),
        q(this, `registerEventListeners`, () => {
          this.relayer.core.heartbeat.on(An.pulse, async () => {
            await this.checkPending();
          }),
            this.events.on(uT.created, async (e) => {
              let t = uT.created;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: `event`, event: t, data: e }),
                await this.persist();
            }),
            this.events.on(uT.deleted, async (e) => {
              let t = uT.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: `event`, event: t, data: e }),
                await this.persist();
            });
        }),
        (this.relayer = e),
        (this.logger = zt(t, this.name)),
        (this.clientId = ``);
    }
    get context() {
      return Lt(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.relayer.core.customStoragePrefix +
        `//` +
        this.name
      );
    }
    get length() {
      return this.subscriptions.size;
    }
    get ids() {
      return Array.from(this.subscriptions.keys());
    }
    get values() {
      return Array.from(this.subscriptions.values());
    }
    get topics() {
      return this.topicMap.topics;
    }
    get hasAnyTopics() {
      return (
        this.topicMap.topics.length > 0 ||
        this.pending.size > 0 ||
        this.cached.length > 0 ||
        this.subscriptions.size > 0
      );
    }
    hasSubscription(e, t) {
      let n = !1;
      try {
        n = this.getSubscription(e).topic === t;
      } catch {}
      return n;
    }
    reset() {
      (this.cached = []), (this.initialized = !0);
    }
    onDisable() {
      this.values.length > 0 && (this.cached = this.values),
        this.subscriptions.clear(),
        this.topicMap.clear();
    }
    async unsubscribeByTopic(e, t) {
      let n = this.topicMap.get(e);
      await Promise.all(
        n.map(async (n) => await this.unsubscribeById(e, n, t))
      );
    }
    async unsubscribeById(e, t, n) {
      this.logger.debug(`Unsubscribing Topic`),
        this.logger.trace({
          type: `method`,
          method: `unsubscribe`,
          params: { topic: e, id: t, opts: n },
        });
      try {
        let r = Dx(n);
        await this.restartToComplete({ topic: e, id: t, relay: r }),
          await this.rpcUnsubscribe(e, t, r);
        let i = H(`USER_DISCONNECTED`, `${this.name}, ${e}`);
        await this.onUnsubscribe(e, t, i),
          this.logger.debug(`Successfully Unsubscribed Topic`),
          this.logger.trace({
            type: `method`,
            method: `unsubscribe`,
            params: { topic: e, id: t, opts: n },
          });
      } catch (e) {
        throw (
          (this.logger.debug(`Failed to Unsubscribe Topic`),
          this.logger.error(e),
          e)
        );
      }
    }
    async rpcSubscribe(e, t, n) {
      var r;
      let i = await this.getSubscriptionId(e);
      if ((r = n?.internal) != null && r.skipSubscribe) return i;
      (!n || n?.transportType === K.relay) &&
        (await this.restartToComplete({ topic: e, id: e, relay: t }));
      let a = { method: Ox(t.protocol).subscribe, params: { topic: e } };
      this.logger.debug(`Outgoing Relay Payload`),
        this.logger.trace({
          type: `payload`,
          direction: `outgoing`,
          request: a,
        });
      let o = n?.internal?.throwOnFailedPublish;
      try {
        if (n?.transportType === K.link_mode)
          return (
            setTimeout(() => {
              (this.relayer.connected || this.relayer.connecting) &&
                this.relayer.request(a).catch((e) => this.logger.warn(e));
            }, (0, z.toMiliseconds)(z.ONE_SECOND)),
            i
          );
        let t = await Wm(
          new Promise(async (t) => {
            let n = (r) => {
              r.topic === e &&
                (this.events.removeListener(uT.created, n), t(r.id));
            };
            this.events.on(uT.created, n);
            try {
              let r = await Wm(
                new Promise((e, t) => {
                  this.relayer
                    .request(a)
                    .catch((e) => {
                      this.logger.warn(e, e?.message), t(e);
                    })
                    .then(e);
                }),
                this.initialSubscribeTimeout,
                `Subscribing to ${e} failed, please try again`
              );
              this.events.removeListener(uT.created, n), t(r);
            } catch {}
          }),
          this.subscribeTimeout,
          `Subscribing to ${e} failed, please try again`
        );
        if (!t && o)
          throw Error(`Subscribing to ${e} failed, please try again`);
        return t ? i : null;
      } catch (e) {
        if (
          (this.logger.debug(`Outgoing Relay Subscribe Payload stalled`),
          this.relayer.events.emit(aT.connection_stalled),
          o)
        )
          throw e;
      }
      return null;
    }
    async rpcBatchSubscribe(e) {
      if (!e.length) return !0;
      let t = e[0].relay,
        n = {
          method: Ox(t.protocol).batchSubscribe,
          params: { topics: e.map((e) => e.topic) },
        };
      this.logger.debug(`Outgoing Relay Payload`),
        this.logger.trace({
          type: `payload`,
          direction: `outgoing`,
          request: n,
        });
      try {
        return (
          await Wm(
            new Promise((e, t) => {
              this.relayer
                .request(n)
                .then(e)
                .catch((e) => {
                  this.logger.warn(e), t(e);
                });
            }),
            this.subscribeTimeout,
            `rpcBatchSubscribe failed, please try again`
          ),
          !0
        );
      } catch {
        return this.relayer.events.emit(aT.connection_stalled), !1;
      }
    }
    async rpcBatchFetchMessages(e) {
      if (!e.length) return;
      let t = e[0].relay,
        n = {
          method: Ox(t.protocol).batchFetchMessages,
          params: { topics: e.map((e) => e.topic) },
        };
      this.logger.debug(`Outgoing Relay Payload`),
        this.logger.trace({
          type: `payload`,
          direction: `outgoing`,
          request: n,
        });
      let r;
      try {
        r = await await Wm(
          new Promise((e, t) => {
            this.relayer
              .request(n)
              .catch((e) => {
                this.logger.warn(e), t(e);
              })
              .then(e);
          }),
          this.subscribeTimeout,
          `rpcBatchFetchMessages failed, please try again`
        );
      } catch {
        this.relayer.events.emit(aT.connection_stalled);
      }
      return r;
    }
    rpcUnsubscribe(e, t, n) {
      let r = {
        method: Ox(n.protocol).unsubscribe,
        params: { topic: e, id: t },
      };
      return (
        this.logger.debug(`Outgoing Relay Payload`),
        this.logger.trace({
          type: `payload`,
          direction: `outgoing`,
          request: r,
        }),
        this.relayer.request(r)
      );
    }
    onSubscribe(e, t) {
      this.setSubscription(e, uO(lO({}, t), { id: e })),
        this.pending.delete(t.topic);
    }
    onBatchSubscribe(e) {
      e.length &&
        e.forEach((e) => {
          this.setSubscription(e.id, lO({}, e)), this.pending.delete(e.topic);
        });
    }
    async onUnsubscribe(e, t, n) {
      this.events.removeAllListeners(t),
        this.hasSubscription(t, e) && this.deleteSubscription(t, n),
        await this.relayer.messages.del(e);
    }
    async setRelayerSubscriptions(e) {
      await this.relayer.core.storage.setItem(this.storageKey, e);
    }
    async getRelayerSubscriptions() {
      return await this.relayer.core.storage.getItem(this.storageKey);
    }
    setSubscription(e, t) {
      this.logger.debug(`Setting subscription`),
        this.logger.trace({
          type: `method`,
          method: `setSubscription`,
          id: e,
          subscription: t,
        }),
        this.addSubscription(e, t);
    }
    addSubscription(e, t) {
      this.subscriptions.set(e, lO({}, t)),
        this.topicMap.set(t.topic, e),
        this.events.emit(uT.created, t);
    }
    getSubscription(e) {
      this.logger.debug(`Getting subscription`),
        this.logger.trace({ type: `method`, method: `getSubscription`, id: e });
      let t = this.subscriptions.get(e);
      if (!t) {
        let { message: t } = V(`NO_MATCHING_KEY`, `${this.name}: ${e}`);
        throw Error(t);
      }
      return t;
    }
    deleteSubscription(e, t) {
      this.logger.debug(`Deleting subscription`),
        this.logger.trace({
          type: `method`,
          method: `deleteSubscription`,
          id: e,
          reason: t,
        });
      let n = this.getSubscription(e);
      this.subscriptions.delete(e),
        this.topicMap.delete(n.topic, e),
        this.events.emit(uT.deleted, uO(lO({}, n), { reason: t }));
    }
    async persist() {
      await this.setRelayerSubscriptions(this.values),
        this.events.emit(uT.sync);
    }
    async onRestart() {
      if (this.cached.length) {
        let e = [...this.cached],
          t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
        for (let n = 0; n < t; n++) {
          let t = e.splice(0, this.batchSubscribeTopicsLimit);
          await this.batchSubscribe(t);
        }
      }
      this.events.emit(uT.resubscribed);
    }
    async restore() {
      try {
        let e = await this.getRelayerSubscriptions();
        if (typeof e > `u` || !e.length) return;
        if (
          this.subscriptions.size &&
          !e.every((e) => e.topic === this.subscriptions.get(e.id)?.topic)
        ) {
          let { message: e } = V(`RESTORE_WILL_OVERRIDE`, this.name);
          throw (
            (this.logger.error(e),
            this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
            Error(e))
          );
        }
        (this.cached = e),
          this.logger.debug(
            `Successfully Restored subscriptions for ${this.name}`
          ),
          this.logger.trace({
            type: `method`,
            method: `restore`,
            subscriptions: this.values,
          });
      } catch (e) {
        this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
          this.logger.error(e);
      }
    }
    async batchSubscribe(e) {
      if (e.length) {
        if (!(await this.rpcBatchSubscribe(e))) {
          this.logger.warn(
            `Batch subscribe failed for ${e.length} topics, adding to pending for retry`
          ),
            e.forEach((e) => {
              this.pending.set(e.topic, e);
            });
          return;
        }
        this.onBatchSubscribe(
          await Promise.all(
            e.map(async (e) =>
              uO(lO({}, e), { id: await this.getSubscriptionId(e.topic) })
            )
          )
        );
      }
    }
    async batchFetchMessages(e) {
      if (!e.length) return;
      this.logger.trace(
        `Fetching batch messages for ${e.length} subscriptions`
      );
      let t = await this.rpcBatchFetchMessages(e);
      t &&
        t.messages &&
        (await lh((0, z.toMiliseconds)(z.ONE_SECOND)),
        await this.relayer.handleBatchMessageEvents(t.messages));
    }
    async onConnect() {
      await this.restart(), this.reset();
    }
    onDisconnect() {
      this.onDisable();
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = V(`NOT_INITIALIZED`, this.name);
        throw Error(e);
      }
    }
    async restartToComplete(e) {
      !this.relayer.connected &&
        !this.relayer.connecting &&
        (this.cached.push(e), await this.relayer.transportOpen());
    }
    async getClientId() {
      return (
        (this.clientId ||= await this.relayer.core.crypto.getClientId()),
        this.clientId
      );
    }
    async getSubscriptionId(e) {
      return ux(e + (await this.getClientId()));
    }
  },
  fO = Object.defineProperty,
  pO = Object.getOwnPropertySymbols,
  mO = Object.prototype.hasOwnProperty,
  hO = Object.prototype.propertyIsEnumerable,
  gO = (e, t, n) =>
    t in e
      ? fO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  _O = (e, t) => {
    for (var n in (t ||= {})) mO.call(t, n) && gO(e, n, t[n]);
    if (pO) for (var n of pO(t)) hO.call(t, n) && gO(e, n, t[n]);
    return e;
  },
  J = (e, t, n) => gO(e, typeof t == `symbol` ? t : t + ``, n),
  vO = class extends Nr {
    constructor(e) {
      super(e),
        J(this, `protocol`, `wc`),
        J(this, `version`, 2),
        J(this, `core`),
        J(this, `logger`),
        J(this, `events`, new Dn.EventEmitter()),
        J(this, `provider`),
        J(this, `messages`),
        J(this, `subscriber`),
        J(this, `publisher`),
        J(this, `name`, iT),
        J(this, `transportExplicitlyClosed`, !1),
        J(this, `initialized`, !1),
        J(this, `connectionAttemptInProgress`, !1),
        J(this, `relayUrl`),
        J(this, `projectId`),
        J(this, `packageName`),
        J(this, `bundleId`),
        J(this, `hasExperiencedNetworkDisruption`, !1),
        J(this, `pingTimeout`),
        J(
          this,
          `heartBeatTimeout`,
          (0, z.toMiliseconds)(z.THIRTY_SECONDS + z.FIVE_SECONDS)
        ),
        J(this, `reconnectTimeout`),
        J(this, `connectPromise`),
        J(this, `reconnectInProgress`, !1),
        J(this, `requestsInFlight`, []),
        J(this, `connectTimeout`, (0, z.toMiliseconds)(z.ONE_SECOND * 15)),
        J(this, `stalledRestartInProgress`, !1),
        J(this, `stalledRestartTimeout`),
        J(this, `stalledRestartBackoff`, 0),
        J(
          this,
          `stalledRestartBaseInterval`,
          (0, z.toMiliseconds)(z.ONE_SECOND * 2)
        ),
        J(
          this,
          `stalledRestartMaxInterval`,
          (0, z.toMiliseconds)(z.THIRTY_SECONDS)
        ),
        J(this, `request`, async (e) => {
          this.logger.debug(`Publishing Request Payload`);
          let t = e.id || uw().toString();
          await this.toEstablishConnection();
          try {
            this.logger.trace(
              { id: t, method: e.method, topic: e.params?.topic },
              `relayer.request - publishing...`
            );
            let n = `${t}:${e.params?.tag || ``}`;
            this.requestsInFlight.push(n);
            let r = await this.provider.request(e);
            return (
              (this.requestsInFlight = this.requestsInFlight.filter(
                (e) => e !== n
              )),
              r
            );
          } catch (e) {
            throw (this.logger.debug(`Failed to Publish Request: ${t}`), e);
          }
        }),
        J(this, `resetPingTimeout`, () => {
          Em() &&
            (clearTimeout(this.pingTimeout),
            (this.pingTimeout = setTimeout(() => {
              var e, t;
              try {
                this.logger.debug(
                  {},
                  `pingTimeout: Connection stalled, terminating...`
                ),
                  (t = (e = this.provider?.connection?.socket)?.terminate) ==
                    null || t.call(e);
              } catch (e) {
                this.logger.warn(e, e?.message);
              }
            }, this.heartBeatTimeout)));
        }),
        J(this, `onPayloadHandler`, (e) => {
          this.onProviderPayload(e), this.resetPingTimeout();
        }),
        J(this, `onConnectHandler`, () => {
          this.logger.warn({}, `Relayer connected 🛜`),
            this.startPingTimeout(),
            this.events.emit(aT.connect);
        }),
        J(this, `onDisconnectHandler`, () => {
          this.logger.warn({}, `Relayer disconnected 🛑`),
            (this.requestsInFlight = []),
            this.onProviderDisconnect();
        }),
        J(this, `onProviderErrorHandler`, (e) => {
          this.logger.fatal(`Fatal socket error: ${e.message}`),
            this.events.emit(aT.error, e),
            this.logger.fatal(`Fatal socket error received, closing transport`),
            (this.transportExplicitlyClosed = !0),
            clearTimeout(this.reconnectTimeout),
            (this.reconnectTimeout = void 0),
            (this.reconnectInProgress = !1),
            this.transportClose().catch((e) => this.logger.warn(e));
        }),
        J(this, `registerProviderListeners`, () => {
          this.provider.on(oT.payload, this.onPayloadHandler),
            this.provider.on(oT.connect, this.onConnectHandler),
            this.provider.on(oT.disconnect, this.onDisconnectHandler),
            this.provider.on(oT.error, this.onProviderErrorHandler);
        }),
        (this.core = e.core),
        (this.logger = pC({ logger: e.logger ?? rT, name: this.name })),
        (this.messages = new BD(this.logger, e.core)),
        (this.subscriber = new dO(this, this.logger)),
        (this.publisher = new ZD(this, this.logger)),
        (this.projectId = e?.projectId),
        (this.relayUrl = e?.relayUrl || `wss://relay.walletconnect.org`),
        Om() ? (this.packageName = Mm()) : km() && (this.bundleId = Mm()),
        (this.provider = {});
    }
    async init() {
      this.logger.trace(`Initialized`),
        this.registerEventListeners(),
        await Promise.all([this.messages.init(), this.subscriber.init()]),
        (this.initialized = !0),
        this.transportOpen().catch((e) => this.logger.warn(e, e?.message));
    }
    get context() {
      return Lt(this.logger);
    }
    get connected() {
      return this.provider?.connection?.socket?.readyState === 1 || !1;
    }
    get connecting() {
      return (
        this.provider?.connection?.socket?.readyState === 0 ||
        this.connectPromise !== void 0 ||
        !1
      );
    }
    async publish(e, t, n) {
      this.isInitialized(),
        await this.publisher.publish(e, t, n),
        await this.recordMessageEvent(
          {
            topic: e,
            message: t,
            publishedAt: Date.now(),
            transportType: K.relay,
          },
          cT.outbound
        );
    }
    async publishCustom(e) {
      this.isInitialized(), await this.publisher.publishCustom(e);
    }
    async subscribe(e, t) {
      this.isInitialized(),
        (!(t != null && t.transportType) || t?.transportType === `relay`) &&
          (await this.toEstablishConnection());
      let n =
          typeof t?.internal?.throwOnFailedPublish > `u` ||
          t?.internal?.throwOnFailedPublish,
        r = this.subscriber.topicMap.get(e)?.[0] || ``,
        i,
        a = (t) => {
          t.topic === e && (this.subscriber.off(uT.created, a), i());
        };
      return (
        await Promise.all([
          new Promise((e) => {
            (i = e), this.subscriber.on(uT.created, a);
          }),
          new Promise(async (i, a) => {
            (r =
              (await this.subscriber
                .subscribe(e, _O({ internal: { throwOnFailedPublish: n } }, t))
                .catch((e) => {
                  n && a(e);
                })) || r),
              i();
          }),
        ]),
        r
      );
    }
    async unsubscribe(e, t) {
      this.isInitialized(), await this.subscriber.unsubscribe(e, t);
    }
    on(e, t) {
      this.events.on(e, t);
    }
    once(e, t) {
      this.events.once(e, t);
    }
    off(e, t) {
      this.events.off(e, t);
    }
    removeListener(e, t) {
      this.events.removeListener(e, t);
    }
    async transportDisconnect() {
      this.provider.disconnect &&
      (this.hasExperiencedNetworkDisruption || this.connected)
        ? await Wm(
            this.provider.disconnect(),
            2e3,
            `provider.disconnect()`
          ).catch(() => this.onProviderDisconnect())
        : this.onProviderDisconnect();
    }
    async transportClose() {
      (this.transportExplicitlyClosed = !0),
        clearTimeout(this.stalledRestartTimeout),
        (this.stalledRestartInProgress = !1),
        (this.stalledRestartBackoff = 0),
        await this.resetTransport();
    }
    async transportOpen(e) {
      if (!this.subscriber.hasAnyTopics) {
        this.logger.info(
          `Starting WS connection skipped because the client has no topics to work with.`
        );
        return;
      }
      if (
        (this.connectPromise
          ? (this.logger.debug(
              {},
              `Waiting for existing connection attempt to resolve...`
            ),
            await this.connectPromise,
            this.logger.debug({}, `Existing connection attempt resolved`))
          : ((this.connectPromise = new Promise(async (t, n) => {
              await this.connect(e)
                .then(t)
                .catch(n)
                .finally(() => {
                  this.connectPromise = void 0;
                });
            })),
            await this.connectPromise),
        !this.connected)
      )
        throw Error(
          `Couldn't establish socket connection to the relay server: ${this.relayUrl}`
        );
    }
    async restartTransport(e) {
      this.logger.debug({}, `Restarting transport...`),
        !this.connectionAttemptInProgress &&
          ((this.relayUrl = e || this.relayUrl),
          await this.confirmOnlineStateOrThrow(),
          await this.resetTransport(),
          await this.transportOpen());
    }
    async resetTransport() {
      (this.reconnectInProgress = !0),
        clearTimeout(this.reconnectTimeout),
        (this.reconnectTimeout = void 0),
        await this.transportDisconnect(),
        await this.subscriber.stop(),
        (this.reconnectInProgress = !1);
    }
    async confirmOnlineStateOrThrow() {
      if (!(await JS()))
        throw Error(
          `No internet connection detected. Please restart your network and try again.`
        );
    }
    async handleBatchMessageEvents(e) {
      if (e?.length === 0) {
        this.logger.trace(`Batch message events is empty. Ignoring...`);
        return;
      }
      let t = e.sort((e, t) => e.publishedAt - t.publishedAt);
      this.logger.debug(`Batch of ${t.length} message events sorted`);
      for (let e of t)
        try {
          await this.onMessageEvent(e);
        } catch (e) {
          this.logger.warn(
            e,
            `Error while processing batch message event: ` + e?.message
          );
        }
      this.logger.trace(`Batch of ${t.length} message events processed`);
    }
    async onLinkMessageEvent(e, t) {
      let { topic: n } = e;
      if (!t.sessionExists) {
        let e = {
          topic: n,
          expiry: Ym(z.FIVE_MINUTES),
          relay: { protocol: `irn` },
          active: !1,
        };
        await this.core.pairing.pairings.set(n, e);
      }
      this.events.emit(aT.message, e),
        await this.recordMessageEvent(e, cT.inbound);
    }
    async connect(e) {
      await this.confirmOnlineStateOrThrow(),
        e &&
          e !== this.relayUrl &&
          ((this.relayUrl = e), await this.transportDisconnect()),
        (this.connectionAttemptInProgress = !0),
        (this.transportExplicitlyClosed = !1);
      let t = 1;
      for (; t < 6; ) {
        try {
          if (this.transportExplicitlyClosed) break;
          this.logger.debug(
            {},
            `Connecting to ${this.relayUrl}, attempt: ${t}...`
          ),
            await this.createProvider(),
            await new Promise(async (e, t) => {
              let n = () => {
                t(Error(`Connection interrupted while trying to connect`));
              };
              this.provider.once(oT.disconnect, n),
                await Wm(
                  new Promise((e, t) => {
                    this.provider.connect().then(e).catch(t);
                  }),
                  this.connectTimeout,
                  `Socket stalled when trying to connect to ${this.relayUrl}`
                )
                  .catch((e) => {
                    t(e);
                  })
                  .finally(() => {
                    this.provider.off(oT.disconnect, n),
                      clearTimeout(this.reconnectTimeout);
                  }),
                await new Promise(async (e, n) => {
                  let r = () => {
                    t(
                      Error(`Connection interrupted while trying to subscribe`)
                    );
                  };
                  this.provider.once(oT.disconnect, r),
                    await this.subscriber
                      .start()
                      .then(e)
                      .catch(n)
                      .finally(() => {
                        this.provider.off(oT.disconnect, r);
                      });
                }),
                (this.hasExperiencedNetworkDisruption = !1),
                e();
            });
        } catch (e) {
          await this.subscriber.stop();
          let t = e;
          this.logger.warn({}, t.message),
            (this.hasExperiencedNetworkDisruption = !0);
        } finally {
          this.connectionAttemptInProgress = !1;
        }
        if (this.connected) {
          this.logger.debug(
            {},
            `Connected to ${this.relayUrl} successfully on attempt: ${t}`
          );
          break;
        }
        await new Promise((e) => setTimeout(e, (0, z.toMiliseconds)(t * 1))),
          t++;
      }
    }
    startPingTimeout() {
      var e, t;
      if (Em())
        try {
          (e = this.provider?.connection) != null &&
            e.socket &&
            ((t = this.provider?.connection?.socket) == null ||
              t.on(`ping`, () => {
                this.resetPingTimeout();
              })),
            this.resetPingTimeout();
        } catch (e) {
          this.logger.warn(e, e?.message);
        }
    }
    async createProvider() {
      this.provider.connection && this.unregisterProviderListeners();
      let e = await this.core.crypto.signJWT(this.relayUrl);
      (this.provider = new Rw(
        new Gw(
          zm({
            sdkVersion: sT,
            protocol: this.protocol,
            version: this.version,
            relayUrl: this.relayUrl,
            projectId: this.projectId,
            auth: e,
            useOnCloseEvent: !0,
            bundleId: this.bundleId,
            packageName: this.packageName,
          })
        )
      )),
        this.registerProviderListeners();
    }
    async recordMessageEvent(e, t) {
      let { topic: n, message: r } = e;
      await this.messages.set(n, r, t);
    }
    async shouldIgnoreMessageEvent(e) {
      let { topic: t, message: n } = e;
      if (!n || n.length === 0)
        return this.logger.warn(`Ignoring invalid/empty message: ${n}`), !0;
      if (!(await this.subscriber.isKnownTopic(t)))
        return this.logger.warn(`Ignoring message for unknown topic ${t}`), !0;
      let r = this.messages.has(t, n);
      return r && this.logger.warn(`Ignoring duplicate message: ${n}`), r;
    }
    async onProviderPayload(e) {
      if (
        (this.logger.debug(`Incoming Relay Payload`),
        this.logger.trace({
          type: `payload`,
          direction: `incoming`,
          payload: e,
        }),
        Mw(e))
      ) {
        if (!e.method.endsWith(`_subscription`)) return;
        let t = e.params,
          { topic: n, message: r, publishedAt: i, attestation: a } = t.data,
          o = {
            topic: n,
            message: r,
            publishedAt: i,
            transportType: K.relay,
            attestation: a,
          };
        this.logger.debug(`Emitting Relayer Payload`),
          this.logger.trace(_O({ type: `event`, event: t.id }, o)),
          this.events.emit(t.id, o),
          await this.acknowledgePayload(e),
          await this.onMessageEvent(o);
      } else Nw(e) && this.events.emit(aT.message_ack, e);
    }
    async onMessageEvent(e) {
      (await this.shouldIgnoreMessageEvent(e)) ||
        (await this.recordMessageEvent(e, cT.inbound),
        this.events.emit(aT.message, e));
    }
    async acknowledgePayload(e) {
      let t = fw(e.id, !0);
      await this.provider.connection.send(t);
    }
    unregisterProviderListeners() {
      this.provider.off(oT.payload, this.onPayloadHandler),
        this.provider.off(oT.connect, this.onConnectHandler),
        this.provider.off(oT.disconnect, this.onDisconnectHandler),
        this.provider.off(oT.error, this.onProviderErrorHandler),
        clearTimeout(this.pingTimeout);
    }
    async registerEventListeners() {
      let e = await JS();
      QS(async (t) => {
        e !== t &&
          ((e = t),
          t
            ? await this.transportOpen().catch((e) =>
                this.logger.error(e, e?.message)
              )
            : ((this.hasExperiencedNetworkDisruption = !0),
              await this.transportDisconnect(),
              (this.transportExplicitlyClosed = !1)));
      }),
        this.core.heartbeat.on(An.pulse, async () => {
          if (!this.transportExplicitlyClosed && !this.connected && tC())
            try {
              await this.confirmOnlineStateOrThrow(),
                await this.transportOpen();
            } catch (e) {
              this.logger.warn(e, e?.message);
            }
        }),
        this.events.on(aT.connection_stalled, () => {
          if (this.transportExplicitlyClosed || this.stalledRestartInProgress)
            return;
          this.stalledRestartInProgress = !0;
          let e =
            this.stalledRestartBackoff === 0
              ? 0
              : Math.min(
                  2 ** (this.stalledRestartBackoff - 1) *
                    this.stalledRestartBaseInterval,
                  this.stalledRestartMaxInterval
                );
          this.stalledRestartBackoff++,
            this.logger.warn(
              `Connection stalled, restarting transport${
                e ? ` in ${e}ms` : ``
              }...`
            ),
            (this.stalledRestartTimeout = setTimeout(async () => {
              try {
                if (this.transportExplicitlyClosed) return;
                await this.restartTransport();
              } catch (e) {
                this.logger.error(e, e?.message);
              } finally {
                this.stalledRestartInProgress = !1;
              }
            }, e));
        });
    }
    async onProviderDisconnect() {
      clearTimeout(this.pingTimeout),
        this.events.emit(aT.disconnect),
        (this.connectionAttemptInProgress = !1),
        !this.reconnectInProgress &&
          ((this.reconnectInProgress = !0),
          await this.subscriber.stop(),
          this.subscriber.hasAnyTopics &&
            (this.transportExplicitlyClosed ||
              (this.reconnectTimeout = setTimeout(async () => {
                await this.transportOpen().catch((e) =>
                  this.logger.error(e, e?.message)
                ),
                  (this.reconnectTimeout = void 0),
                  (this.reconnectInProgress = !1);
              }, (0, z.toMiliseconds)(0.1)))));
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = V(`NOT_INITIALIZED`, this.name);
        throw Error(e);
      }
    }
    async toEstablishConnection() {
      if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
        if (this.connectPromise) {
          await this.connectPromise;
          return;
        }
        await this.connect();
      }
    }
  };
function yO(e, t) {
  return e === t || (Number.isNaN(e) && Number.isNaN(t));
}
function bO(e) {
  return Object.getOwnPropertySymbols(e).filter((t) =>
    Object.prototype.propertyIsEnumerable.call(e, t)
  );
}
function xO(e) {
  return e == null
    ? e === void 0
      ? `[object Undefined]`
      : `[object Null]`
    : Object.prototype.toString.call(e);
}
var SO = `[object RegExp]`,
  CO = `[object String]`,
  wO = `[object Number]`,
  TO = `[object Boolean]`,
  EO = `[object Arguments]`,
  DO = `[object Symbol]`,
  OO = `[object Date]`,
  kO = `[object Map]`,
  AO = `[object Set]`,
  jO = `[object Array]`,
  MO = `[object Function]`,
  NO = `[object ArrayBuffer]`,
  PO = `[object Object]`,
  FO = `[object Error]`,
  IO = `[object DataView]`,
  LO = `[object Uint8Array]`,
  RO = `[object Uint8ClampedArray]`,
  zO = `[object Uint16Array]`,
  BO = `[object Uint32Array]`,
  VO = `[object BigUint64Array]`,
  HO = `[object Int8Array]`,
  UO = `[object Int16Array]`,
  WO = `[object Int32Array]`,
  GO = `[object BigInt64Array]`,
  KO = `[object Float32Array]`,
  qO = `[object Float64Array]`;
function JO(e) {
  if (!e || typeof e != `object`) return !1;
  let t = Object.getPrototypeOf(e);
  return t === null ||
    t === Object.prototype ||
    Object.getPrototypeOf(t) === null
    ? Object.prototype.toString.call(e) === `[object Object]`
    : !1;
}
function YO(e, t, n) {
  return XO(e, t, void 0, void 0, void 0, void 0, n);
}
function XO(e, t, n, r, i, a, o) {
  let s = o(e, t, n, r, i, a);
  if (s !== void 0) return s;
  if (typeof e == typeof t)
    switch (typeof e) {
      case `bigint`:
      case `string`:
      case `boolean`:
      case `symbol`:
      case `undefined`:
        return e === t;
      case `number`:
        return e === t || Object.is(e, t);
      case `function`:
        return e === t;
      case `object`:
        return ZO(e, t, a, o);
    }
  return ZO(e, t, a, o);
}
function ZO(e, t, n, r) {
  if (Object.is(e, t)) return !0;
  let i = xO(e),
    a = xO(t);
  if ((i === EO && (i = PO), a === EO && (a = PO), i !== a)) return !1;
  switch (i) {
    case CO:
      return e.toString() === t.toString();
    case wO:
      return yO(e.valueOf(), t.valueOf());
    case TO:
    case OO:
    case DO:
      return Object.is(e.valueOf(), t.valueOf());
    case SO:
      return e.source === t.source && e.flags === t.flags;
    case MO:
      return e === t;
  }
  n ??= new Map();
  let o = n.get(e),
    s = n.get(t);
  if (o != null && s != null) return o === t;
  n.set(e, t), n.set(t, e);
  try {
    switch (i) {
      case kO:
        if (e.size !== t.size) return !1;
        for (let [i, a] of e.entries())
          if (!t.has(i) || !XO(a, t.get(i), i, e, t, n, r)) return !1;
        return !0;
      case AO: {
        if (e.size !== t.size) return !1;
        let i = Array.from(e.values()),
          a = Array.from(t.values());
        for (let o = 0; o < i.length; o++) {
          let s = i[o],
            c = a.findIndex((i) => XO(s, i, void 0, e, t, n, r));
          if (c === -1) return !1;
          a.splice(c, 1);
        }
        return !0;
      }
      case jO:
      case LO:
      case RO:
      case zO:
      case BO:
      case VO:
      case HO:
      case UO:
      case WO:
      case GO:
      case KO:
      case qO:
        if (
          (typeof Buffer < `u` && Buffer.isBuffer(e) !== Buffer.isBuffer(t)) ||
          e.length !== t.length
        )
          return !1;
        for (let i = 0; i < e.length; i++)
          if (!XO(e[i], t[i], i, e, t, n, r)) return !1;
        return !0;
      case NO:
        return (
          e.byteLength === t.byteLength &&
          ZO(new Uint8Array(e), new Uint8Array(t), n, r)
        );
      case IO:
        return e.byteLength !== t.byteLength || e.byteOffset !== t.byteOffset
          ? !1
          : ZO(new Uint8Array(e), new Uint8Array(t), n, r);
      case FO:
        return e.name === t.name && e.message === t.message;
      case PO: {
        if (!(ZO(e.constructor, t.constructor, n, r) || (JO(e) && JO(t))))
          return !1;
        let i = [...Object.keys(e), ...bO(e)],
          a = [...Object.keys(t), ...bO(t)];
        if (i.length !== a.length) return !1;
        for (let a = 0; a < i.length; a++) {
          let o = i[a],
            s = e[o];
          if (!Object.hasOwn(t, o)) return !1;
          let c = t[o];
          if (!XO(s, c, o, e, t, n, r)) return !1;
        }
        return !0;
      }
      default:
        return !1;
    }
  } finally {
    n.delete(e), n.delete(t);
  }
}
function QO() {}
function $O(e, t) {
  return YO(e, t, QO);
}
var ek = Object.defineProperty,
  tk = Object.getOwnPropertySymbols,
  nk = Object.prototype.hasOwnProperty,
  rk = Object.prototype.propertyIsEnumerable,
  ik = (e, t, n) =>
    t in e
      ? ek(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ak = (e, t) => {
    for (var n in (t ||= {})) nk.call(t, n) && ik(e, n, t[n]);
    if (tk) for (var n of tk(t)) rk.call(t, n) && ik(e, n, t[n]);
    return e;
  },
  ok = (e, t, n) => ik(e, typeof t == `symbol` ? t : t + ``, n),
  sk = class extends Pr {
    constructor(e, t, n, r = qw, i = void 0) {
      super(e, t, n, r),
        (this.core = e),
        (this.logger = t),
        (this.name = n),
        ok(this, `map`, new Map()),
        ok(this, `version`, `0.3`),
        ok(this, `cached`, []),
        ok(this, `initialized`, !1),
        ok(this, `getKey`),
        ok(this, `storagePrefix`, qw),
        ok(this, `recentlyDeleted`, []),
        ok(this, `recentlyDeletedLimit`, 200),
        ok(this, `init`, async () => {
          this.initialized ||=
            (this.logger.trace(`Initialized`),
            await this.restore(),
            this.cached.forEach((e) => {
              this.getKey && e !== null && !pS(e)
                ? this.map.set(this.getKey(e), e)
                : bS(e)
                ? this.map.set(e.id, e)
                : xS(e) && this.map.set(e.topic, e);
            }),
            (this.cached = []),
            !0);
        }),
        ok(this, `set`, async (e, t) => {
          this.isInitialized(),
            this.map.has(e)
              ? await this.update(e, t)
              : (this.logger.debug(`Setting value`),
                this.logger.trace({
                  type: `method`,
                  method: `set`,
                  key: e,
                  value: t,
                }),
                this.map.set(e, t),
                await this.persist());
        }),
        ok(
          this,
          `get`,
          (e) => (
            this.isInitialized(),
            this.logger.debug(`Getting value`),
            this.logger.trace({ type: `method`, method: `get`, key: e }),
            this.getData(e)
          )
        ),
        ok(
          this,
          `getAll`,
          (e) => (
            this.isInitialized(),
            e
              ? this.values.filter((t) =>
                  Object.keys(e).every((n) => $O(t[n], e[n]))
                )
              : this.values
          )
        ),
        ok(this, `update`, async (e, t) => {
          this.isInitialized(),
            this.logger.debug(`Updating value`),
            this.logger.trace({
              type: `method`,
              method: `update`,
              key: e,
              update: t,
            });
          let n = ak(ak({}, this.getData(e)), t);
          this.map.set(e, n), await this.persist();
        }),
        ok(this, `delete`, async (e, t) => {
          this.isInitialized(),
            this.map.has(e) &&
              (this.logger.debug(`Deleting value`),
              this.logger.trace({
                type: `method`,
                method: `delete`,
                key: e,
                reason: t,
              }),
              this.map.delete(e),
              this.addToRecentlyDeleted(e),
              await this.persist());
        }),
        (this.logger = zt(t, this.name)),
        (this.storagePrefix = r),
        (this.getKey = i);
    }
    get context() {
      return Lt(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        `//` +
        this.name
      );
    }
    get length() {
      return this.map.size;
    }
    get keys() {
      return Array.from(this.map.keys());
    }
    get values() {
      return Array.from(this.map.values());
    }
    addToRecentlyDeleted(e) {
      this.recentlyDeleted.push(e),
        this.recentlyDeleted.length >= this.recentlyDeletedLimit &&
          this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
    }
    async setDataStore(e) {
      await this.core.storage.setItem(this.storageKey, e);
    }
    async getDataStore() {
      return await this.core.storage.getItem(this.storageKey);
    }
    getData(e) {
      let t = this.map.get(e);
      if (!t) {
        if (this.recentlyDeleted.includes(e)) {
          let { message: t } = V(
            `MISSING_OR_INVALID`,
            `Record was recently deleted - ${this.name}: ${e}`
          );
          throw (this.logger.error(t), Error(t));
        }
        let { message: t } = V(`NO_MATCHING_KEY`, `${this.name}: ${e}`);
        throw (this.logger.error(t), Error(t));
      }
      return t;
    }
    async persist() {
      await this.setDataStore(this.values);
    }
    async restore() {
      try {
        let e = await this.getDataStore();
        if (typeof e > `u` || !e.length) return;
        if (this.map.size) {
          let { message: e } = V(`RESTORE_WILL_OVERRIDE`, this.name);
          throw (this.logger.error(e), Error(e));
        }
        (this.cached = e),
          this.logger.debug(`Successfully Restored value for ${this.name}`),
          this.logger.trace({
            type: `method`,
            method: `restore`,
            value: this.values,
          });
      } catch (e) {
        this.logger.debug(`Failed to Restore value for ${this.name}`),
          this.logger.error(e);
      }
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = V(`NOT_INITIALIZED`, this.name);
        throw Error(e);
      }
    }
  },
  ck = Object.defineProperty,
  lk = (e, t, n) =>
    t in e
      ? ck(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Y = (e, t, n) => lk(e, typeof t == `symbol` ? t : t + ``, n),
  uk = class {
    constructor(e, t) {
      (this.core = e),
        (this.logger = t),
        Y(this, `name`, fT),
        Y(this, `version`, `0.3`),
        Y(this, `events`, new Dn.default()),
        Y(this, `pairings`),
        Y(this, `initialized`, !1),
        Y(this, `storagePrefix`, qw),
        Y(this, `ignoredPayloadTypes`, [1]),
        Y(this, `registeredMethods`, []),
        Y(this, `init`, async () => {
          this.initialized ||
            (await this.pairings.init(),
            await this.cleanup(),
            this.registerRelayerEvents(),
            this.registerExpirerEvents(),
            (this.initialized = !0),
            this.logger.trace(`Initialized`));
        }),
        Y(this, `register`, ({ methods: e }) => {
          this.isInitialized(),
            (this.registeredMethods = [
              ...new Set([...this.registeredMethods, ...e]),
            ]);
        }),
        Y(this, `create`, async (e) => {
          this.isInitialized();
          let t = sx(),
            n = await this.core.crypto.setSymKey(t),
            r = Ym(z.FIVE_MINUTES),
            i = { protocol: `irn` },
            a = {
              topic: n,
              expiry: r,
              relay: i,
              active: !1,
              methods: e?.methods,
            },
            o = Hx({
              protocol: this.core.protocol,
              version: this.core.version,
              topic: n,
              symKey: t,
              relay: i,
              expiryTimestamp: r,
              methods: e?.methods,
            });
          return (
            this.events.emit(mT.create, a),
            this.core.expirer.set(n, r),
            await this.pairings.set(n, a),
            await this.core.relayer.subscribe(n, {
              transportType: e?.transportType,
              internal: e?.internal,
            }),
            { topic: n, uri: o }
          );
        }),
        Y(this, `pair`, async (e) => {
          this.isInitialized();
          let t = this.core.eventClient.createEvent({
            properties: { topic: e?.uri, trace: [ET.pairing_started] },
          });
          this.isValidPair(e, t);
          let {
            topic: n,
            symKey: r,
            relay: i,
            expiryTimestamp: a,
            methods: o,
          } = zx(e.uri);
          (t.props.properties.topic = n),
            t.addTrace(ET.pairing_uri_validation_success),
            t.addTrace(ET.pairing_uri_not_expired);
          let s;
          if (this.pairings.keys.includes(n)) {
            if (
              ((s = this.pairings.get(n)),
              t.addTrace(ET.existing_pairing),
              s.active)
            )
              throw (
                (t.setError(DT.active_pairing_already_exists),
                Error(
                  `Pairing already exists: ${n}. Please try again with a new connection URI.`
                ))
              );
            t.addTrace(ET.pairing_not_expired);
          }
          let c = a || Ym(z.FIVE_MINUTES),
            l = { topic: n, relay: i, expiry: c, active: !1, methods: o };
          this.core.expirer.set(n, c),
            await this.pairings.set(n, l),
            t.addTrace(ET.store_new_pairing),
            e.activatePairing && (await this.activate({ topic: n })),
            this.events.emit(mT.create, l),
            t.addTrace(ET.emit_inactive_pairing),
            this.core.crypto.keychain.has(n) ||
              (await this.core.crypto.setSymKey(r, n)),
            t.addTrace(ET.subscribing_pairing_topic);
          try {
            await this.core.relayer.confirmOnlineStateOrThrow();
          } catch {
            t.setError(DT.no_internet_connection);
          }
          try {
            await this.core.relayer.subscribe(n, { relay: i });
          } catch (e) {
            throw (t.setError(DT.subscribe_pairing_topic_failure), e);
          }
          return t.addTrace(ET.subscribe_pairing_topic_success), l;
        }),
        Y(this, `activate`, async ({ topic: e }) => {
          this.isInitialized();
          let t = Ym(z.FIVE_MINUTES);
          this.core.expirer.set(e, t),
            await this.pairings.update(e, { active: !0, expiry: t });
        }),
        Y(this, `ping`, async (e) => {
          this.isInitialized(),
            await this.isValidPing(e),
            this.logger.warn(
              `ping() is deprecated and will be removed in the next major release.`
            );
          let { topic: t } = e;
          if (this.pairings.keys.includes(t)) {
            let e = await this.sendRequest(t, `wc_pairingPing`, {}),
              { done: n, resolve: r, reject: i } = Um();
            this.events.once(U(`pairing_ping`, e), ({ error: e }) => {
              e ? i(e) : r();
            }),
              await n();
          }
        }),
        Y(this, `updateExpiry`, async ({ topic: e, expiry: t }) => {
          this.isInitialized(), await this.pairings.update(e, { expiry: t });
        }),
        Y(this, `updateMetadata`, async ({ topic: e, metadata: t }) => {
          this.isInitialized(),
            await this.pairings.update(e, { peerMetadata: t });
        }),
        Y(
          this,
          `getPairings`,
          () => (this.isInitialized(), this.pairings.values)
        ),
        Y(this, `disconnect`, async (e) => {
          this.isInitialized(), await this.isValidDisconnect(e);
          let { topic: t } = e;
          this.pairings.keys.includes(t) &&
            (await this.sendRequest(
              t,
              `wc_pairingDelete`,
              H(`USER_DISCONNECTED`)
            ),
            await this.deletePairing(t));
        }),
        Y(this, `formatUriFromPairing`, (e) => {
          this.isInitialized();
          let { topic: t, relay: n, expiry: r, methods: i } = e,
            a = this.core.crypto.keychain.get(t);
          return Hx({
            protocol: this.core.protocol,
            version: this.core.version,
            topic: t,
            symKey: a,
            relay: n,
            expiryTimestamp: r,
            methods: i,
          });
        }),
        Y(this, `sendRequest`, async (e, t, n) => {
          let r = dw(t, n),
            i = await this.core.crypto.encode(e, r),
            a = pT[t].req;
          return (
            this.core.history.set(e, r),
            this.core.relayer.publish(e, i, a),
            r.id
          );
        }),
        Y(this, `sendResult`, async (e, t, n) => {
          let r = fw(e, n),
            i = await this.core.crypto.encode(t, r),
            a = pT[(await this.core.history.get(t, e)).request.method].res;
          await this.core.relayer.publish(t, i, a),
            await this.core.history.resolve(r);
        }),
        Y(this, `sendError`, async (e, t, n) => {
          let r = pw(e, n),
            i = await this.core.crypto.encode(t, r),
            a = (await this.core.history.get(t, e)).request.method,
            o = pT[a] ? pT[a].res : pT.unregistered_method.res;
          await this.core.relayer.publish(t, i, o),
            await this.core.history.resolve(r);
        }),
        Y(this, `deletePairing`, async (e, t) => {
          await this.core.relayer.unsubscribe(e),
            await Promise.all([
              this.pairings.delete(e, H(`USER_DISCONNECTED`)),
              this.core.crypto.deleteSymKey(e),
              t ? Promise.resolve() : this.core.expirer.del(e),
            ]);
        }),
        Y(this, `cleanup`, async () => {
          let e = this.pairings.getAll().filter((e) => Xm(e.expiry));
          await Promise.all(e.map((e) => this.deletePairing(e.topic)));
        }),
        Y(this, `onRelayEventRequest`, async (e) => {
          let { topic: t, payload: n } = e;
          switch (n.method) {
            case `wc_pairingPing`:
              return await this.onPairingPingRequest(t, n);
            case `wc_pairingDelete`:
              return await this.onPairingDeleteRequest(t, n);
            default:
              return await this.onUnknownRpcMethodRequest(t, n);
          }
        }),
        Y(this, `onRelayEventResponse`, async (e) => {
          let { topic: t, payload: n } = e,
            r = (await this.core.history.get(t, n.id)).request.method;
          switch (r) {
            case `wc_pairingPing`:
              return this.onPairingPingResponse(t, n);
            default:
              return this.onUnknownRpcMethodResponse(r);
          }
        }),
        Y(this, `onPairingPingRequest`, async (e, t) => {
          let { id: n } = t;
          try {
            this.isValidPing({ topic: e }),
              await this.sendResult(n, e, !0),
              this.events.emit(mT.ping, { id: n, topic: e });
          } catch (t) {
            await this.sendError(n, e, t), this.logger.error(t);
          }
        }),
        Y(this, `onPairingPingResponse`, (e, t) => {
          let { id: n } = t;
          setTimeout(() => {
            Pw(t)
              ? this.events.emit(U(`pairing_ping`, n), {})
              : Fw(t) &&
                this.events.emit(U(`pairing_ping`, n), { error: t.error });
          }, 500);
        }),
        Y(this, `onPairingDeleteRequest`, async (e, t) => {
          let { id: n } = t;
          try {
            this.isValidDisconnect({ topic: e }),
              await this.deletePairing(e),
              this.events.emit(mT.delete, { id: n, topic: e });
          } catch (t) {
            await this.sendError(n, e, t), this.logger.error(t);
          }
        }),
        Y(this, `onUnknownRpcMethodRequest`, async (e, t) => {
          let { id: n, method: r } = t;
          try {
            if (this.registeredMethods.includes(r)) return;
            let t = H(`WC_METHOD_UNSUPPORTED`, r);
            await this.sendError(n, e, t), this.logger.error(t);
          } catch (t) {
            await this.sendError(n, e, t), this.logger.error(t);
          }
        }),
        Y(this, `onUnknownRpcMethodResponse`, (e) => {
          this.registeredMethods.includes(e) ||
            this.logger.error(H(`WC_METHOD_UNSUPPORTED`, e));
        }),
        Y(this, `isValidPair`, (e, t) => {
          var n;
          if (!FS(e)) {
            let { message: n } = V(`MISSING_OR_INVALID`, `pair() params: ${e}`);
            throw (t.setError(DT.malformed_pairing_uri), Error(n));
          }
          if (!yS(e.uri)) {
            let { message: n } = V(
              `MISSING_OR_INVALID`,
              `pair() uri: ${e.uri}`
            );
            throw (t.setError(DT.malformed_pairing_uri), Error(n));
          }
          let r = zx(e?.uri);
          if (!((n = r?.relay) != null && n.protocol)) {
            let { message: e } = V(
              `MISSING_OR_INVALID`,
              `pair() uri#relay-protocol`
            );
            throw (t.setError(DT.malformed_pairing_uri), Error(e));
          }
          if (!(r != null && r.symKey)) {
            let { message: e } = V(`MISSING_OR_INVALID`, `pair() uri#symKey`);
            throw (t.setError(DT.malformed_pairing_uri), Error(e));
          }
          if (
            r != null &&
            r.expiryTimestamp &&
            (0, z.toMiliseconds)(r?.expiryTimestamp) < Date.now()
          ) {
            t.setError(DT.pairing_expired);
            let { message: e } = V(
              `EXPIRED`,
              `pair() URI has expired. Please try again with a new connection URI.`
            );
            throw Error(e);
          }
        }),
        Y(this, `isValidPing`, async (e) => {
          if (!FS(e)) {
            let { message: t } = V(`MISSING_OR_INVALID`, `ping() params: ${e}`);
            throw Error(t);
          }
          let { topic: t } = e;
          await this.isValidPairingTopic(t);
        }),
        Y(this, `isValidDisconnect`, async (e) => {
          if (!FS(e)) {
            let { message: t } = V(
              `MISSING_OR_INVALID`,
              `disconnect() params: ${e}`
            );
            throw Error(t);
          }
          let { topic: t } = e;
          await this.isValidPairingTopic(t);
        }),
        Y(this, `isValidPairingTopic`, async (e) => {
          if (!mS(e, !1)) {
            let { message: t } = V(
              `MISSING_OR_INVALID`,
              `pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
          if (!this.pairings.keys.includes(e)) {
            let { message: t } = V(
              `NO_MATCHING_KEY`,
              `pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if (Xm(this.pairings.get(e).expiry)) {
            await this.deletePairing(e);
            let { message: t } = V(`EXPIRED`, `pairing topic: ${e}`);
            throw Error(t);
          }
        }),
        (this.core = e),
        (this.logger = zt(t, this.name)),
        (this.pairings = new sk(
          this.core,
          this.logger,
          this.name,
          this.storagePrefix
        ));
    }
    get context() {
      return Lt(this.logger);
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = V(`NOT_INITIALIZED`, this.name);
        throw Error(e);
      }
    }
    registerRelayerEvents() {
      this.core.relayer.on(aT.message, async (e) => {
        let { topic: t, message: n, transportType: r } = e;
        if (
          this.pairings.keys.includes(t) &&
          r !== K.link_mode &&
          !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n))
        )
          try {
            let e = await this.core.crypto.decode(t, n);
            Mw(e)
              ? (this.core.history.set(t, e),
                await this.onRelayEventRequest({ topic: t, payload: e }))
              : Nw(e) &&
                (await this.core.history.resolve(e),
                await this.onRelayEventResponse({ topic: t, payload: e }),
                this.core.history.delete(t, e.id)),
              await this.core.relayer.messages.ack(t, n);
          } catch (e) {
            this.logger.error(e);
          }
      });
    }
    registerExpirerEvents() {
      this.core.expirer.on(vT.expired, async (e) => {
        let { topic: t } = Jm(e.target);
        t &&
          this.pairings.keys.includes(t) &&
          (await this.deletePairing(t, !0),
          this.events.emit(mT.expire, { topic: t }));
      });
    }
  },
  dk = Object.defineProperty,
  fk = (e, t, n) =>
    t in e
      ? dk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  pk = (e, t, n) => fk(e, typeof t == `symbol` ? t : t + ``, n),
  mk = class extends Ar {
    constructor(e, t) {
      super(e, t),
        (this.core = e),
        (this.logger = t),
        pk(this, `records`, new Map()),
        pk(this, `events`, new Dn.EventEmitter()),
        pk(this, `name`, gT),
        pk(this, `version`, `0.3`),
        pk(this, `cached`, []),
        pk(this, `initialized`, !1),
        pk(this, `storagePrefix`, qw),
        pk(this, `init`, async () => {
          this.initialized ||=
            (this.logger.trace(`Initialized`),
            await this.restore(),
            this.cached.forEach((e) => this.records.set(e.id, e)),
            (this.cached = []),
            this.registerEventListeners(),
            !0);
        }),
        pk(this, `set`, (e, t, n) => {
          if (
            (this.isInitialized(),
            this.logger.debug(`Setting JSON-RPC request history record`),
            this.logger.trace({
              type: `method`,
              method: `set`,
              topic: e,
              request: t,
              chainId: n,
            }),
            this.records.has(t.id))
          )
            return;
          let r = {
            id: t.id,
            topic: e,
            request: { method: t.method, params: t.params || null },
            chainId: n,
            expiry: Ym(z.THIRTY_DAYS),
          };
          this.records.set(r.id, r),
            this.persist(),
            this.events.emit(hT.created, r);
        }),
        pk(this, `resolve`, async (e) => {
          if (
            (this.isInitialized(),
            this.logger.debug(`Updating JSON-RPC response history record`),
            this.logger.trace({
              type: `method`,
              method: `update`,
              response: e,
            }),
            !this.records.has(e.id))
          )
            return;
          let t = await this.getRecord(e.id);
          typeof t.response > `u` &&
            ((t.response = Fw(e) ? { error: e.error } : { result: e.result }),
            this.records.set(t.id, t),
            this.persist(),
            this.events.emit(hT.updated, t));
        }),
        pk(
          this,
          `get`,
          async (e, t) => (
            this.isInitialized(),
            this.logger.debug(`Getting record`),
            this.logger.trace({
              type: `method`,
              method: `get`,
              topic: e,
              id: t,
            }),
            await this.getRecord(t)
          )
        ),
        pk(this, `delete`, (e, t) => {
          this.isInitialized(),
            this.logger.debug(`Deleting record`),
            this.logger.trace({ type: `method`, method: `delete`, id: t }),
            this.values.forEach((n) => {
              if (n.topic === e) {
                if (typeof t < `u` && n.id !== t) return;
                this.records.delete(n.id), this.events.emit(hT.deleted, n);
              }
            }),
            this.persist();
        }),
        pk(
          this,
          `exists`,
          async (e, t) => (
            this.isInitialized(),
            this.records.has(t) ? (await this.getRecord(t)).topic === e : !1
          )
        ),
        pk(this, `on`, (e, t) => {
          this.events.on(e, t);
        }),
        pk(this, `once`, (e, t) => {
          this.events.once(e, t);
        }),
        pk(this, `off`, (e, t) => {
          this.events.off(e, t);
        }),
        pk(this, `removeListener`, (e, t) => {
          this.events.removeListener(e, t);
        }),
        (this.logger = zt(t, this.name));
    }
    get context() {
      return Lt(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        `//` +
        this.name
      );
    }
    get size() {
      return this.records.size;
    }
    get keys() {
      return Array.from(this.records.keys());
    }
    get values() {
      return Array.from(this.records.values());
    }
    get pending() {
      let e = [];
      return (
        this.values.forEach((t) => {
          if (typeof t.response < `u`) return;
          let n = {
            topic: t.topic,
            request: dw(t.request.method, t.request.params, t.id),
            chainId: t.chainId,
          };
          return e.push(n);
        }),
        e
      );
    }
    async setJsonRpcRecords(e) {
      await this.core.storage.setItem(this.storageKey, e);
    }
    async getJsonRpcRecords() {
      return await this.core.storage.getItem(this.storageKey);
    }
    getRecord(e) {
      this.isInitialized();
      let t = this.records.get(e);
      if (!t) {
        let { message: t } = V(`NO_MATCHING_KEY`, `${this.name}: ${e}`);
        throw Error(t);
      }
      return t;
    }
    async persist() {
      await this.setJsonRpcRecords(this.values), this.events.emit(hT.sync);
    }
    async restore() {
      try {
        let e = await this.getJsonRpcRecords();
        if (typeof e > `u` || !e.length) return;
        if (this.records.size) {
          let { message: e } = V(`RESTORE_WILL_OVERRIDE`, this.name);
          throw (this.logger.error(e), Error(e));
        }
        (this.cached = e),
          this.logger.debug(`Successfully Restored records for ${this.name}`),
          this.logger.trace({
            type: `method`,
            method: `restore`,
            records: this.values,
          });
      } catch (e) {
        this.logger.debug(`Failed to Restore records for ${this.name}`),
          this.logger.error(e);
      }
    }
    registerEventListeners() {
      this.events.on(hT.created, (e) => {
        let t = hT.created;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: `event`, event: t, record: e });
      }),
        this.events.on(hT.updated, (e) => {
          let t = hT.updated;
          this.logger.info(`Emitting ${t}`),
            this.logger.debug({ type: `event`, event: t, record: e });
        }),
        this.events.on(hT.deleted, (e) => {
          let t = hT.deleted;
          this.logger.info(`Emitting ${t}`),
            this.logger.debug({ type: `event`, event: t, record: e });
        }),
        this.core.heartbeat.on(An.pulse, () => {
          this.cleanup();
        });
    }
    cleanup() {
      try {
        this.isInitialized();
        let e = !1;
        this.records.forEach((t) => {
          (0, z.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
            (this.logger.info(`Deleting expired history log: ${t.id}`),
            this.records.delete(t.id),
            this.events.emit(hT.deleted, t, !1),
            (e = !0));
        }),
          e && this.persist();
      } catch (e) {
        this.logger.warn(e);
      }
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = V(`NOT_INITIALIZED`, this.name);
        throw Error(e);
      }
    }
  },
  hk = Object.defineProperty,
  gk = (e, t, n) =>
    t in e
      ? hk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  _k = (e, t, n) => gk(e, typeof t == `symbol` ? t : t + ``, n),
  vk = class extends Ir {
    constructor(e, t) {
      super(e, t),
        (this.core = e),
        (this.logger = t),
        _k(this, `expirations`, new Map()),
        _k(this, `events`, new Dn.EventEmitter()),
        _k(this, `name`, _T),
        _k(this, `version`, `0.3`),
        _k(this, `cached`, []),
        _k(this, `initialized`, !1),
        _k(this, `storagePrefix`, qw),
        _k(this, `init`, async () => {
          this.initialized ||=
            (this.logger.trace(`Initialized`),
            await this.restore(),
            this.cached.forEach((e) => this.expirations.set(e.target, e)),
            (this.cached = []),
            this.registerEventListeners(),
            !0);
        }),
        _k(this, `has`, (e) => {
          try {
            let t = this.formatTarget(e);
            return typeof this.getExpiration(t) < `u`;
          } catch {
            return !1;
          }
        }),
        _k(this, `set`, (e, t) => {
          this.isInitialized();
          let n = this.formatTarget(e),
            r = { target: n, expiry: t };
          this.expirations.set(n, r),
            this.checkExpiry(n, r),
            this.events.emit(vT.created, { target: n, expiration: r });
        }),
        _k(this, `get`, (e) => {
          this.isInitialized();
          let t = this.formatTarget(e);
          return this.getExpiration(t);
        }),
        _k(this, `del`, (e) => {
          if ((this.isInitialized(), this.has(e))) {
            let t = this.formatTarget(e),
              n = this.getExpiration(t);
            this.expirations.delete(t),
              this.events.emit(vT.deleted, { target: t, expiration: n });
          }
        }),
        _k(this, `on`, (e, t) => {
          this.events.on(e, t);
        }),
        _k(this, `once`, (e, t) => {
          this.events.once(e, t);
        }),
        _k(this, `off`, (e, t) => {
          this.events.off(e, t);
        }),
        _k(this, `removeListener`, (e, t) => {
          this.events.removeListener(e, t);
        }),
        (this.logger = zt(t, this.name));
    }
    get context() {
      return Lt(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        `//` +
        this.name
      );
    }
    get length() {
      return this.expirations.size;
    }
    get keys() {
      return Array.from(this.expirations.keys());
    }
    get values() {
      return Array.from(this.expirations.values());
    }
    formatTarget(e) {
      if (typeof e == `string`) return Km(e);
      if (typeof e == `number`) return qm(e);
      let { message: t } = V(`UNKNOWN_TYPE`, `Target type: ${typeof e}`);
      throw Error(t);
    }
    async setExpirations(e) {
      await this.core.storage.setItem(this.storageKey, e);
    }
    async getExpirations() {
      return await this.core.storage.getItem(this.storageKey);
    }
    async persist() {
      await this.setExpirations(this.values), this.events.emit(vT.sync);
    }
    async restore() {
      try {
        let e = await this.getExpirations();
        if (typeof e > `u` || !e.length) return;
        if (this.expirations.size) {
          let { message: e } = V(`RESTORE_WILL_OVERRIDE`, this.name);
          throw (this.logger.error(e), Error(e));
        }
        (this.cached = e),
          this.logger.debug(
            `Successfully Restored expirations for ${this.name}`
          ),
          this.logger.trace({
            type: `method`,
            method: `restore`,
            expirations: this.values,
          });
      } catch (e) {
        this.logger.debug(`Failed to Restore expirations for ${this.name}`),
          this.logger.error(e);
      }
    }
    getExpiration(e) {
      let t = this.expirations.get(e);
      if (!t) {
        let { message: t } = V(`NO_MATCHING_KEY`, `${this.name}: ${e}`);
        throw (this.logger.warn(t), Error(t));
      }
      return t;
    }
    checkExpiry(e, t) {
      let { expiry: n } = t;
      (0, z.toMiliseconds)(n) - Date.now() <= 0 && this.expire(e, t);
    }
    expire(e, t) {
      this.expirations.delete(e),
        this.events.emit(vT.expired, { target: e, expiration: t });
    }
    checkExpirations() {
      this.core.relayer.connected &&
        this.expirations.forEach((e, t) => this.checkExpiry(t, e));
    }
    registerEventListeners() {
      this.core.heartbeat.on(An.pulse, () => this.checkExpirations()),
        this.events.on(vT.created, (e) => {
          let t = vT.created;
          this.logger.info(`Emitting ${t}`),
            this.logger.debug({ type: `event`, event: t, data: e }),
            this.persist();
        }),
        this.events.on(vT.expired, (e) => {
          let t = vT.expired;
          this.logger.info(`Emitting ${t}`),
            this.logger.debug({ type: `event`, event: t, data: e }),
            this.persist();
        }),
        this.events.on(vT.deleted, (e) => {
          let t = vT.deleted;
          this.logger.info(`Emitting ${t}`),
            this.logger.debug({ type: `event`, event: t, data: e }),
            this.persist();
        });
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = V(`NOT_INITIALIZED`, this.name);
        throw Error(e);
      }
    }
  },
  yk = Object.defineProperty,
  bk = (e, t, n) =>
    t in e
      ? yk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  xk = (e, t, n) => bk(e, typeof t == `symbol` ? t : t + ``, n),
  Sk = class extends Lr {
    constructor(e, t, n) {
      super(e, t, n),
        (this.core = e),
        (this.logger = t),
        (this.store = n),
        xk(this, `name`, yT),
        xk(this, `abortController`),
        xk(this, `isDevEnv`),
        xk(this, `verifyUrlV3`, ST),
        xk(this, `storagePrefix`, qw),
        xk(this, `version`, 2),
        xk(this, `publicKey`),
        xk(this, `fetchPromise`),
        xk(this, `init`, async () => {
          this.isDevEnv ||
            ((this.publicKey = await this.store.getItem(this.storeKey)),
            this.publicKey &&
              (0, z.toMiliseconds)(this.publicKey?.expiresAt) < Date.now() &&
              (this.logger.debug(`verify v2 public key expired`),
              await this.removePublicKey()));
        }),
        xk(this, `register`, async (e) => {
          if (!Am() || this.isDevEnv) return;
          let t = window.location.origin,
            { id: n, decryptedId: r } = e,
            i = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${t}&id=${n}&decryptedId=${r}`;
          try {
            let e = (0, pf.getDocument)(),
              t = this.startAbortTimer(z.ONE_SECOND * 5),
              r = await new Promise((r, a) => {
                let o = () => {
                  window.removeEventListener(`message`, c),
                    e.body.removeChild(s),
                    a(`attestation aborted`);
                };
                this.abortController.signal.addEventListener(`abort`, o);
                let s = e.createElement(`iframe`);
                (s.src = i),
                  (s.style.display = `none`),
                  s.addEventListener(`error`, o, {
                    signal: this.abortController.signal,
                  });
                let c = (i) => {
                  if (i.data && typeof i.data == `string`)
                    try {
                      let a = JSON.parse(i.data);
                      if (a.type === `verify_attestation`) {
                        if ($s(a.attestation).payload.id !== n) return;
                        clearInterval(t),
                          e.body.removeChild(s),
                          this.abortController.signal.removeEventListener(
                            `abort`,
                            o
                          ),
                          window.removeEventListener(`message`, c),
                          r(a.attestation === null ? `` : a.attestation);
                      }
                    } catch (e) {
                      this.logger.warn(e);
                    }
                };
                e.body.appendChild(s),
                  window.addEventListener(`message`, c, {
                    signal: this.abortController.signal,
                  });
              });
            return this.logger.debug(r, `jwt attestation`), r;
          } catch (e) {
            this.logger.warn(e);
          }
          return ``;
        }),
        xk(this, `resolve`, async (e) => {
          if (this.isDevEnv) return ``;
          let { attestationId: t, hash: n, encryptedId: r } = e;
          if (t === ``) {
            this.logger.debug(`resolve: attestationId is empty, skipping`);
            return;
          }
          if (t) {
            if ($s(t).payload.id !== r) return;
            let e = await this.isValidJwtAttestation(t);
            if (e) {
              if (!e.isVerified) {
                this.logger.warn(
                  `resolve: jwt attestation: origin url not verified`
                );
                return;
              }
              return e;
            }
          }
          if (!n) return;
          let i = this.getVerifyUrl(e?.verifyUrl);
          return this.fetchAttestation(n, i);
        }),
        xk(this, `fetchAttestation`, async (e, t) => {
          this.logger.debug(`resolving attestation: ${e} from url: ${t}`);
          let n = this.startAbortTimer(z.ONE_SECOND * 5),
            r = await fetch(`${t}/attestation/${e}?v2Supported=true`, {
              signal: this.abortController.signal,
            });
          return clearTimeout(n), r.status === 200 ? await r.json() : void 0;
        }),
        xk(this, `getVerifyUrl`, (e) => {
          let t = e || `https://verify.walletconnect.org`;
          return (
            CT.includes(t) ||
              (this.logger.info(
                `verify url: ${t}, not included in trusted list, assigning default: https://verify.walletconnect.org`
              ),
              (t = `https://verify.walletconnect.org`)),
            t
          );
        }),
        xk(this, `fetchPublicKey`, async () => {
          try {
            this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
            let e = this.startAbortTimer(z.FIVE_SECONDS),
              t = await fetch(`${this.verifyUrlV3}/public-key`, {
                signal: this.abortController.signal,
              });
            return clearTimeout(e), await t.json();
          } catch (e) {
            this.logger.warn(e);
          }
        }),
        xk(this, `persistPublicKey`, async (e) => {
          this.logger.debug(e, `persisting public key to local storage`),
            await this.store.setItem(this.storeKey, e),
            (this.publicKey = e);
        }),
        xk(this, `removePublicKey`, async () => {
          this.logger.debug(`removing verify v2 public key from storage`),
            await this.store.removeItem(this.storeKey),
            (this.publicKey = void 0);
        }),
        xk(this, `isValidJwtAttestation`, async (e) => {
          let t = await this.getPublicKey();
          try {
            if (t) return this.validateAttestation(e, t);
          } catch (e) {
            this.logger.error(e),
              this.logger.warn(`error validating attestation`);
          }
          let n = await this.fetchAndPersistPublicKey();
          try {
            if (n) return this.validateAttestation(e, n);
          } catch (e) {
            this.logger.error(e),
              this.logger.warn(`error validating attestation`);
          }
        }),
        xk(this, `getPublicKey`, async () =>
          this.publicKey
            ? this.publicKey
            : await this.fetchAndPersistPublicKey()
        ),
        xk(this, `fetchAndPersistPublicKey`, async () => {
          if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
          this.fetchPromise = new Promise(async (e) => {
            let t = await this.fetchPublicKey();
            t && (await this.persistPublicKey(t), e(t));
          });
          let e = await this.fetchPromise;
          return (this.fetchPromise = void 0), e;
        }),
        xk(this, `validateAttestation`, (e, t) => {
          let n = Ex(e, t.publicKey),
            r = {
              hasExpired: (0, z.toMiliseconds)(n.exp) < Date.now(),
              payload: n,
            };
          if (r.hasExpired)
            throw (
              (this.logger.warn(`resolve: jwt attestation expired`),
              Error(`JWT attestation expired`))
            );
          return {
            origin: r.payload.origin,
            isScam: r.payload.isScam,
            isVerified: r.payload.isVerified,
          };
        }),
        (this.logger = zt(t, this.name)),
        (this.abortController = new AbortController()),
        (this.isDevEnv = ih()),
        this.init();
    }
    get storeKey() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        `//verify:public:key`
      );
    }
    get context() {
      return Lt(this.logger);
    }
    startAbortTimer(e) {
      return (
        (this.abortController = new AbortController()),
        setTimeout(() => this.abortController.abort(), (0, z.toMiliseconds)(e))
      );
    }
  },
  Ck = Object.defineProperty,
  wk = (e, t, n) =>
    t in e
      ? Ck(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Tk = (e, t, n) => wk(e, typeof t == `symbol` ? t : t + ``, n),
  Ek = class extends Rr {
    constructor(e, t) {
      super(e, t),
        (this.projectId = e),
        (this.logger = t),
        Tk(this, `context`, wT),
        Tk(this, `registerDeviceToken`, async (e) => {
          let {
              clientId: t,
              token: n,
              notificationType: r,
              enableEncrypted: i = !1,
            } = e,
            a = `${TT}/${this.projectId}/clients`;
          await fetch(a, {
            method: `POST`,
            headers: { "Content-Type": `application/json` },
            body: JSON.stringify({
              client_id: t,
              type: r,
              token: n,
              always_raw: i,
            }),
          });
        }),
        (this.logger = zt(t, this.context));
    }
  },
  Dk = Object.defineProperty,
  Ok = Object.getOwnPropertySymbols,
  kk = Object.prototype.hasOwnProperty,
  Ak = Object.prototype.propertyIsEnumerable,
  jk = (e, t, n) =>
    t in e
      ? Dk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Mk = (e, t) => {
    for (var n in (t ||= {})) kk.call(t, n) && jk(e, n, t[n]);
    if (Ok) for (var n of Ok(t)) Ak.call(t, n) && jk(e, n, t[n]);
    return e;
  },
  Nk = (e, t, n) => jk(e, typeof t == `symbol` ? t : t + ``, n),
  Pk = class extends zr {
    constructor(e, t, n = !0) {
      super(e, t, n),
        (this.core = e),
        (this.logger = t),
        Nk(this, `context`, NT),
        Nk(this, `storagePrefix`, qw),
        Nk(this, `storageVersion`, MT),
        Nk(this, `events`, new Map()),
        Nk(this, `shouldPersist`, !1),
        Nk(this, `init`, async () => {
          if (!ih())
            try {
              let e = {
                eventId: rh(),
                timestamp: Date.now(),
                domain: this.getAppDomain(),
                props: {
                  event: `INIT`,
                  type: ``,
                  properties: {
                    client_id: await this.core.crypto.getClientId(),
                    user_agent: Rm(
                      this.core.relayer.protocol,
                      this.core.relayer.version,
                      sT
                    ),
                  },
                },
              };
              await this.sendEvent([e]);
            } catch (e) {
              this.logger.warn(e);
            }
        }),
        Nk(this, `createEvent`, (e) => {
          let {
              event: t = `ERROR`,
              type: n = ``,
              properties: { topic: r, trace: i },
            } = e,
            a = rh(),
            o = this.core.projectId || ``,
            s = Mk(
              {
                eventId: a,
                timestamp: Date.now(),
                props: {
                  event: t,
                  type: n,
                  properties: { topic: r, trace: i },
                },
                bundleId: o,
                domain: this.getAppDomain(),
              },
              this.setMethods(a)
            );
          return (
            this.telemetryEnabled &&
              (this.events.set(a, s), (this.shouldPersist = !0)),
            s
          );
        }),
        Nk(this, `getEvent`, (e) => {
          let { eventId: t, topic: n } = e;
          if (t) return this.events.get(t);
          let r = Array.from(this.events.values()).find(
            (e) => e.props.properties.topic === n
          );
          if (r) return Mk(Mk({}, r), this.setMethods(r.eventId));
        }),
        Nk(this, `deleteEvent`, (e) => {
          let { eventId: t } = e;
          this.events.delete(t), (this.shouldPersist = !0);
        }),
        Nk(this, `setEventListeners`, () => {
          this.core.heartbeat.on(An.pulse, async () => {
            this.shouldPersist && (await this.persist()),
              this.events.forEach((e) => {
                (0, z.fromMiliseconds)(Date.now()) -
                  (0, z.fromMiliseconds)(e.timestamp) >
                  86400 &&
                  (this.events.delete(e.eventId), (this.shouldPersist = !0));
              });
          });
        }),
        Nk(this, `setMethods`, (e) => ({
          addTrace: (t) => this.addTrace(e, t),
          setError: (t) => this.setError(e, t),
        })),
        Nk(this, `addTrace`, (e, t) => {
          let n = this.events.get(e);
          n &&
            (n.props.properties.trace.push(t),
            this.events.set(e, n),
            (this.shouldPersist = !0));
        }),
        Nk(this, `setError`, (e, t) => {
          let n = this.events.get(e);
          n &&
            ((n.props.type = t),
            (n.timestamp = Date.now()),
            this.events.set(e, n),
            (this.shouldPersist = !0));
        }),
        Nk(this, `persist`, async () => {
          await this.core.storage.setItem(
            this.storageKey,
            Array.from(this.events.values())
          ),
            (this.shouldPersist = !1);
        }),
        Nk(this, `restore`, async () => {
          try {
            let e = (await this.core.storage.getItem(this.storageKey)) || [];
            if (!e.length) return;
            e.forEach((e) => {
              this.events.set(
                e.eventId,
                Mk(Mk({}, e), this.setMethods(e.eventId))
              );
            });
          } catch (e) {
            this.logger.warn(e);
          }
        }),
        Nk(this, `submit`, async () => {
          if (!this.telemetryEnabled || this.events.size === 0) return;
          let e = [];
          for (let [t, n] of this.events) n.props.type && e.push(n);
          if (e.length !== 0)
            try {
              if ((await this.sendEvent(e)).ok)
                for (let t of e)
                  this.events.delete(t.eventId), (this.shouldPersist = !0);
            } catch (e) {
              this.logger.warn(e);
            }
        }),
        Nk(this, `sendEvent`, async (e) => {
          let t = this.getAppDomain() ? `` : `&sp=desktop`;
          return await fetch(
            `${PT}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${sT}${t}`,
            { method: `POST`, body: JSON.stringify(e) }
          );
        }),
        Nk(this, `getAppDomain`, () => Fm().url),
        (this.logger = zt(t, this.context)),
        (this.telemetryEnabled = n),
        n
          ? this.restore().then(async () => {
              await this.submit(), this.setEventListeners();
            })
          : this.persist();
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.storageVersion +
        this.core.customStoragePrefix +
        `//` +
        this.context
      );
    }
  },
  Fk = Object.defineProperty,
  Ik = Object.getOwnPropertySymbols,
  Lk = Object.prototype.hasOwnProperty,
  Rk = Object.prototype.propertyIsEnumerable,
  zk = (e, t, n) =>
    t in e
      ? Fk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Bk = (e, t) => {
    for (var n in (t ||= {})) Lk.call(t, n) && zk(e, n, t[n]);
    if (Ik) for (var n of Ik(t)) Rk.call(t, n) && zk(e, n, t[n]);
    return e;
  },
  X = (e, t, n) => zk(e, typeof t == `symbol` ? t : t + ``, n),
  Vk = class e extends Er {
    constructor(e) {
      var t;
      super(e),
        X(this, `protocol`, `wc`),
        X(this, `version`, 2),
        X(this, `name`, Kw),
        X(this, `relayUrl`),
        X(this, `projectId`),
        X(this, `customStoragePrefix`),
        X(this, `events`, new Dn.EventEmitter()),
        X(this, `logger`),
        X(this, `heartbeat`),
        X(this, `relayer`),
        X(this, `crypto`),
        X(this, `storage`),
        X(this, `history`),
        X(this, `expirer`),
        X(this, `pairing`),
        X(this, `verify`),
        X(this, `echoClient`),
        X(this, `linkModeSupportedApps`),
        X(this, `eventClient`),
        X(this, `initialized`, !1),
        X(this, `logChunkController`),
        X(this, `on`, (e, t) => this.events.on(e, t)),
        X(this, `once`, (e, t) => this.events.once(e, t)),
        X(this, `off`, (e, t) => this.events.off(e, t)),
        X(this, `removeListener`, (e, t) => this.events.removeListener(e, t)),
        X(
          this,
          `dispatchEnvelope`,
          ({ topic: e, message: t, sessionExists: n }) => {
            if (!e || !t) return;
            let r = {
              topic: e,
              message: t,
              publishedAt: Date.now(),
              transportType: K.link_mode,
            };
            this.relayer.onLinkMessageEvent(r, { sessionExists: n });
          }
        );
      let n = this.getGlobalCore(e?.customStoragePrefix);
      if (n)
        try {
          return (
            (this.customStoragePrefix = n.customStoragePrefix),
            (this.logger = n.logger),
            (this.heartbeat = n.heartbeat),
            (this.crypto = n.crypto),
            (this.history = n.history),
            (this.expirer = n.expirer),
            (this.storage = n.storage),
            (this.relayer = n.relayer),
            (this.pairing = n.pairing),
            (this.verify = n.verify),
            (this.echoClient = n.echoClient),
            (this.linkModeSupportedApps = n.linkModeSupportedApps),
            (this.eventClient = n.eventClient),
            (this.initialized = n.initialized),
            (this.logChunkController = n.logChunkController),
            n
          );
        } catch (e) {
          console.warn(`Failed to copy global core`, e);
        }
      (this.projectId = e?.projectId),
        (this.relayUrl = e?.relayUrl || `wss://relay.walletconnect.org`),
        (this.customStoragePrefix =
          e != null && e.customStoragePrefix
            ? `:${e.customStoragePrefix}`
            : ``);
      let { logger: r, chunkLoggerController: i } = Ht({
        opts: Ft({
          level:
            typeof e?.logger == `string` && e.logger ? e.logger : Jw.logger,
          name: Kw,
        }),
        maxSizeInBytes: e?.maxLogBlobSizeInBytes,
        loggerOverride: e?.logger,
      });
      (this.logChunkController = i),
        (t = this.logChunkController) != null &&
          t.downloadLogsBlobInBrowser &&
          (window.downloadLogsBlobInBrowser = async () => {
            var e, t;
            (e = this.logChunkController) != null &&
              e.downloadLogsBlobInBrowser &&
              ((t = this.logChunkController) == null ||
                t.downloadLogsBlobInBrowser({
                  clientId: await this.crypto.getClientId(),
                }));
          }),
        (this.logger = zt(r, this.name)),
        (this.heartbeat = new jn()),
        (this.crypto = new kD(this, this.logger, e?.keychain)),
        (this.history = new mk(this, this.logger)),
        (this.expirer = new vk(this, this.logger)),
        (this.storage =
          e != null && e.storage
            ? e.storage
            : new Sr(Bk(Bk({}, Yw), e?.storageOptions))),
        (this.relayer = new vO({
          core: this,
          logger: this.logger,
          relayUrl: this.relayUrl,
          projectId: this.projectId,
        })),
        (this.pairing = new uk(this, this.logger)),
        (this.verify = new Sk(this, this.logger, this.storage)),
        (this.echoClient = new Ek(this.projectId || ``, this.logger)),
        (this.linkModeSupportedApps = []),
        (this.eventClient = new Pk(this, this.logger, e?.telemetryEnabled)),
        this.setGlobalCore(this);
    }
    static async init(t) {
      let n = new e(t);
      await n.initialize();
      let r = await n.crypto.getClientId();
      return await n.storage.setItem(lT, r), n;
    }
    get context() {
      return Lt(this.logger);
    }
    async start() {
      this.initialized || (await this.initialize());
    }
    async getLogsBlob() {
      return this.logChunkController?.logsToBlob({
        clientId: await this.crypto.getClientId(),
      });
    }
    async addLinkModeSupportedApp(e) {
      this.linkModeSupportedApps.includes(e) ||
        (this.linkModeSupportedApps.push(e),
        await this.storage.setItem(
          `WALLETCONNECT_LINK_MODE_APPS`,
          this.linkModeSupportedApps
        ));
    }
    async initialize() {
      this.logger.trace(`Initialized`);
      try {
        await this.crypto.init(),
          await this.history.init(),
          await this.expirer.init(),
          await this.relayer.init(),
          await this.heartbeat.init(),
          await this.pairing.init(),
          (this.linkModeSupportedApps =
            (await this.storage.getItem(`WALLETCONNECT_LINK_MODE_APPS`)) || []),
          (this.initialized = !0),
          this.logger.info(`Core Initialization Success`);
      } catch (e) {
        throw (
          (this.logger.warn(
            e,
            `Core Initialization Failure at epoch ${Date.now()}`
          ),
          this.logger.error(e.message),
          e)
        );
      }
    }
    getGlobalCore(e = ``) {
      try {
        if (this.isGlobalCoreDisabled()) return;
        let t = `_walletConnectCore_${e}`,
          n = `${t}_count`;
        return (
          (globalThis[n] = (globalThis[n] || 0) + 1),
          globalThis[n] > 1 &&
            console.warn(
              `WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[n]} times.`
            ),
          globalThis[t]
        );
      } catch (e) {
        console.warn(`Failed to get global WalletConnect core`, e);
        return;
      }
    }
    setGlobalCore(e) {
      try {
        if (this.isGlobalCoreDisabled()) return;
        let t = `_walletConnectCore_${e.opts?.customStoragePrefix || ``}`;
        globalThis[t] = e;
      } catch (e) {
        console.warn(`Failed to set global WalletConnect core`, e);
      }
    }
    isGlobalCoreDisabled() {
      try {
        return typeof process < `u` && {}.DISABLE_GLOBAL_CORE === `true`;
      } catch {
        return !0;
      }
    }
  },
  Hk = `client`,
  Uk = `wc@2:${Hk}:`,
  Wk = {
    name: Hk,
    logger: `error`,
    controller: !1,
    relayUrl: `wss://relay.walletconnect.org`,
  },
  Gk = `WALLETCONNECT_DEEPLINK_CHOICE`,
  Kk = `proposal`,
  qk = `Proposal expired`,
  Jk = `session`,
  Yk = z.SEVEN_DAYS,
  Xk = `engine`,
  Zk = {
    wc_sessionPropose: {
      req: { ttl: z.FIVE_MINUTES, prompt: !0, tag: 1100 },
      res: { ttl: z.FIVE_MINUTES, prompt: !1, tag: 1101 },
      reject: { ttl: z.FIVE_MINUTES, prompt: !1, tag: 1120 },
      autoReject: { ttl: z.FIVE_MINUTES, prompt: !1, tag: 1121 },
    },
    wc_sessionSettle: {
      req: { ttl: z.FIVE_MINUTES, prompt: !1, tag: 1102 },
      res: { ttl: z.FIVE_MINUTES, prompt: !1, tag: 1103 },
    },
    wc_sessionUpdate: {
      req: { ttl: z.ONE_DAY, prompt: !1, tag: 1104 },
      res: { ttl: z.ONE_DAY, prompt: !1, tag: 1105 },
    },
    wc_sessionExtend: {
      req: { ttl: z.ONE_DAY, prompt: !1, tag: 1106 },
      res: { ttl: z.ONE_DAY, prompt: !1, tag: 1107 },
    },
    wc_sessionRequest: {
      req: { ttl: z.FIVE_MINUTES * 3, prompt: !0, tag: 1108 },
      res: { ttl: z.FIVE_MINUTES * 3, prompt: !1, tag: 1109 },
    },
    wc_sessionEvent: {
      req: { ttl: z.FIVE_MINUTES, prompt: !0, tag: 1110 },
      res: { ttl: z.FIVE_MINUTES, prompt: !1, tag: 1111 },
    },
    wc_sessionDelete: {
      req: { ttl: z.ONE_DAY, prompt: !1, tag: 1112 },
      res: { ttl: z.ONE_DAY, prompt: !1, tag: 1113 },
    },
    wc_sessionPing: {
      req: { ttl: z.ONE_DAY, prompt: !1, tag: 1114 },
      res: { ttl: z.ONE_DAY, prompt: !1, tag: 1115 },
    },
    wc_sessionAuthenticate: {
      req: { ttl: z.ONE_HOUR, prompt: !0, tag: 1116 },
      res: { ttl: z.ONE_HOUR, prompt: !1, tag: 1117 },
      reject: { ttl: z.FIVE_MINUTES, prompt: !1, tag: 1118 },
      autoReject: { ttl: z.FIVE_MINUTES, prompt: !1, tag: 1119 },
    },
  },
  Qk = { min: z.FIVE_MINUTES, max: z.SEVEN_DAYS },
  $k = { idle: `IDLE`, active: `ACTIVE` },
  eA = {
    eth_sendTransaction: { key: `` },
    eth_sendRawTransaction: { key: `` },
    wallet_sendCalls: { key: `` },
    solana_signTransaction: { key: `signature` },
    solana_signAllTransactions: { key: `transactions` },
    solana_signAndSendTransaction: { key: `signature` },
    sui_signAndExecuteTransaction: { key: `digest` },
    sui_signTransaction: { key: `` },
    hedera_signAndExecuteTransaction: { key: `transactionId` },
    hedera_executeTransaction: { key: `transactionId` },
    near_signTransaction: { key: `` },
    near_signTransactions: { key: `` },
    tron_signTransaction: { key: `txID` },
    xrpl_signTransaction: { key: `` },
    xrpl_signTransactionFor: { key: `` },
    algo_signTxn: { key: `` },
    sendTransfer: { key: `txid` },
    stacks_stxTransfer: { key: `txId` },
    polkadot_signTransaction: { key: `` },
    cosmos_signDirect: { key: `` },
  },
  tA = `request`,
  nA = [
    `wc_sessionPropose`,
    `wc_sessionRequest`,
    `wc_authRequest`,
    `wc_sessionAuthenticate`,
  ],
  rA = `auth`,
  iA = `authKeys`,
  aA = `pairingTopics`,
  oA = `requests`,
  sA = `wc@1.5:${rA}:`,
  cA = `${sA}:PUB_KEY`,
  lA = Object.defineProperty,
  uA = Object.defineProperties,
  dA = Object.getOwnPropertyDescriptors,
  fA = Object.getOwnPropertySymbols,
  pA = Object.prototype.hasOwnProperty,
  mA = Object.prototype.propertyIsEnumerable,
  hA = (e, t, n) =>
    t in e
      ? lA(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Z = (e, t) => {
    for (var n in (t ||= {})) pA.call(t, n) && hA(e, n, t[n]);
    if (fA) for (var n of fA(t)) mA.call(t, n) && hA(e, n, t[n]);
    return e;
  },
  gA = (e, t) => uA(e, dA(t)),
  Q = (e, t, n) => hA(e, typeof t == `symbol` ? t : t + ``, n),
  _A = class extends Wr {
    constructor(e) {
      super(e),
        Q(this, `name`, Xk),
        Q(this, `events`, new Dn.default()),
        Q(this, `initialized`, !1),
        Q(this, `requestQueue`, { state: $k.idle, queue: [] }),
        Q(this, `sessionRequestQueue`, { state: $k.idle, queue: [] }),
        Q(this, `emittedSessionRequests`, new uh({ limit: 500 })),
        Q(this, `requestQueueDelay`, z.ONE_SECOND),
        Q(this, `expectedPairingMethodMap`, new Map()),
        Q(this, `recentlyDeletedMap`, new Map()),
        Q(this, `recentlyDeletedLimit`, 200),
        Q(this, `relayMessageCache`, []),
        Q(this, `pendingSessions`, new Map()),
        Q(this, `init`, async () => {
          this.initialized ||
            (await this.cleanup(),
            this.registerRelayerEvents(),
            this.registerExpirerEvents(),
            this.registerPairingEvents(),
            await this.registerLinkModeListeners(),
            this.client.core.pairing.register({ methods: Object.keys(Zk) }),
            (this.initialized = !0),
            setTimeout(async () => {
              await this.processPendingMessageEvents(),
                (this.sessionRequestQueue.queue =
                  this.getPendingSessionRequests()),
                this.processSessionRequestQueue();
            }, (0, z.toMiliseconds)(this.requestQueueDelay)));
        }),
        Q(this, `connect`, async (e) => {
          this.isInitialized(), await this.confirmOnlineStateOrThrow();
          let t = gA(Z({}, e), {
            requiredNamespaces: e.requiredNamespaces || {},
            optionalNamespaces: e.optionalNamespaces || {},
          });
          await this.isValidConnect(t),
            (t.optionalNamespaces = uS(
              t.requiredNamespaces,
              t.optionalNamespaces
            )),
            (t.requiredNamespaces = {});
          let {
              pairingTopic: n,
              requiredNamespaces: r,
              optionalNamespaces: i,
              sessionProperties: a,
              scopedProperties: o,
              relays: s,
              authentication: c,
              walletPay: l,
            } = t,
            u = c?.[0]?.ttl || Zk.wc_sessionPropose.req.ttl || z.FIVE_MINUTES;
          this.validateRequestExpiry(u);
          let d = n,
            f,
            p = !1;
          try {
            if (d) {
              let e = this.client.core.pairing.pairings.get(d);
              this.client.logger.warn(
                `connect() with existing pairing topic is deprecated and will be removed in the next major release.`
              ),
                (p = e.active);
            }
          } catch (e) {
            throw (
              (this.client.logger.error(
                `connect() -> pairing.get(${d}) failed`
              ),
              e)
            );
          }
          if (!d || !p) {
            let { topic: e, uri: t } = await this.client.core.pairing.create({
              internal: { skipSubscribe: !0 },
            });
            (d = e), (f = t);
          }
          if (!d) {
            let { message: e } = V(
              `NO_MATCHING_KEY`,
              `connect() pairing topic: ${d}`
            );
            throw Error(e);
          }
          let m = await this.client.core.crypto.generateKeyPair(),
            h = Ym(u),
            g = Z(
              gA(
                Z(
                  Z(
                    {
                      requiredNamespaces: r,
                      optionalNamespaces: i,
                      relays: s ?? [{ protocol: `irn` }],
                      proposer: {
                        publicKey: m,
                        metadata: this.client.metadata,
                      },
                      expiryTimestamp: h,
                      pairingTopic: d,
                    },
                    a && { sessionProperties: a }
                  ),
                  o && { scopedProperties: o }
                ),
                { id: lw() }
              ),
              (c || l) && {
                requests: {
                  authentication: c?.map((e) => {
                    let {
                      domain: t,
                      chains: n,
                      nonce: r,
                      uri: i,
                      exp: a,
                      nbf: o,
                      type: s,
                      statement: c,
                      requestId: l,
                      resources: u,
                      signatureTypes: d,
                    } = e;
                    return {
                      domain: t,
                      chains: n,
                      nonce: r,
                      type: s ?? `caip122`,
                      aud: i,
                      version: `1`,
                      iat: new Date().toISOString(),
                      exp: a,
                      nbf: o,
                      statement: c,
                      requestId: l,
                      resources: u,
                      signatureTypes: d,
                    };
                  }),
                  walletPay: l,
                },
              }
            ),
            _ = U(`session_connect`, g.id),
            { reject: v, resolve: y, done: b } = Um(u, qk),
            x = ({ id: e }) => {
              e === g.id &&
                (this.client.events.off(`proposal_expire`, x),
                this.pendingSessions.delete(g.id),
                this.events.emit(_, {
                  error: { message: `Proposal expired`, code: 0 },
                }));
            };
          return (
            this.client.events.on(`proposal_expire`, x),
            this.events.once(_, ({ error: e, session: t }) => {
              this.client.events.off(`proposal_expire`, x),
                e ? v(e) : t && y(t);
            }),
            await this.setProposal(g.id, g),
            await this.sendProposeSession({
              proposal: g,
              publishOpts: {
                internal: { throwOnFailedPublish: !0 },
                tvf: { correlationId: g.id },
              },
            }).catch((e) => {
              throw (this.deleteProposal(g.id), e);
            }),
            { uri: f, approval: b }
          );
        }),
        Q(this, `pair`, async (e) => {
          this.isInitialized(), await this.confirmOnlineStateOrThrow();
          try {
            return await this.client.core.pairing.pair(e);
          } catch (e) {
            throw (this.client.logger.error(`pair() failed`), e);
          }
        }),
        Q(this, `approve`, async (e) => {
          let t = this.client.core.eventClient.createEvent({
            properties: {
              topic: e?.id?.toString(),
              trace: [OT.session_approve_started],
            },
          });
          try {
            this.isInitialized(), await this.confirmOnlineStateOrThrow();
          } catch (e) {
            throw (t.setError(kT.no_internet_connection), e);
          }
          try {
            await this.isValidProposalId(e?.id);
          } catch (n) {
            throw (
              (this.client.logger.error(
                `approve() -> proposal.get(${e?.id}) failed`
              ),
              t.setError(kT.proposal_not_found),
              n)
            );
          }
          try {
            await this.isValidApprove(e);
          } catch (e) {
            throw (
              (this.client.logger.error(`approve() -> isValidApprove() failed`),
              t.setError(kT.session_approve_namespace_validation_failure),
              e)
            );
          }
          let {
              id: n,
              relayProtocol: r,
              namespaces: i,
              sessionProperties: a,
              scopedProperties: o,
              sessionConfig: s,
              proposalRequestsResponses: c,
            } = e,
            l = this.client.proposal.get(n);
          this.client.core.eventClient.deleteEvent({ eventId: t.eventId });
          let {
              pairingTopic: u,
              proposer: d,
              requiredNamespaces: f,
              optionalNamespaces: p,
            } = l,
            m = this.client.core.eventClient?.getEvent({ topic: u });
          m ||= this.client.core.eventClient?.createEvent({
            type: OT.session_approve_started,
            properties: {
              topic: u,
              trace: [
                OT.session_approve_started,
                OT.session_namespaces_validation_success,
              ],
            },
          });
          let h = await this.client.core.crypto.generateKeyPair(),
            g = d.publicKey,
            _ = await this.client.core.crypto.generateSharedKey(h, g),
            v = gA(
              Z(
                Z(
                  Z(
                    {
                      relay: { protocol: r ?? `irn` },
                      namespaces: i,
                      controller: {
                        publicKey: h,
                        metadata: this.client.metadata,
                      },
                      expiry: Ym(Yk),
                    },
                    a && { sessionProperties: a }
                  ),
                  o && { scopedProperties: o }
                ),
                s && { sessionConfig: s }
              ),
              { proposalRequestsResponses: c }
            ),
            y = K.relay;
          m.addTrace(OT.subscribing_session_topic);
          try {
            await this.client.core.relayer.subscribe(_, {
              transportType: y,
              internal: { skipSubscribe: !0 },
            });
          } catch (e) {
            throw (m.setError(kT.subscribe_session_topic_failure), e);
          }
          m.addTrace(OT.subscribe_session_topic_success);
          let b = gA(Z({}, v), {
            topic: _,
            requiredNamespaces: f,
            optionalNamespaces: p,
            pairingTopic: u,
            acknowledged: !1,
            self: v.controller,
            peer: { publicKey: d.publicKey, metadata: d.metadata },
            controller: h,
            transportType: K.relay,
            authentication: c?.authentication,
            walletPayResult: c?.walletPay,
          });
          await this.client.session.set(_, b), m.addTrace(OT.store_session);
          try {
            await this.sendApproveSession({
              sessionTopic: _,
              proposal: l,
              pairingProposalResponse: {
                relay: { protocol: r ?? `irn` },
                responderPublicKey: h,
              },
              sessionSettleRequest: v,
              publishOpts: {
                internal: { throwOnFailedPublish: !0 },
                tvf: Z({ correlationId: n }, this.getTVFApproveParams(b)),
              },
            }),
              m.addTrace(OT.session_approve_publish_success);
          } catch (e) {
            throw (
              (this.client.logger.error(e),
              this.client.session.delete(_, H(`USER_DISCONNECTED`)),
              await this.client.core.relayer.unsubscribe(_),
              e)
            );
          }
          return (
            this.client.core.eventClient.deleteEvent({ eventId: m.eventId }),
            await this.client.core.pairing.updateMetadata({
              topic: u,
              metadata: d.metadata,
            }),
            await this.deleteProposal(n),
            await this.client.core.pairing.activate({ topic: u }),
            await this.setExpiry(_, Ym(Yk)),
            {
              topic: _,
              acknowledged: () => Promise.resolve(this.client.session.get(_)),
            }
          );
        }),
        Q(this, `reject`, async (e) => {
          this.isInitialized(), await this.confirmOnlineStateOrThrow();
          try {
            await this.isValidReject(e);
          } catch (e) {
            throw (
              (this.client.logger.error(`reject() -> isValidReject() failed`),
              e)
            );
          }
          let { id: t, reason: n } = e,
            r;
          try {
            r = this.client.proposal.get(t).pairingTopic;
          } catch (e) {
            throw (
              (this.client.logger.error(
                `reject() -> proposal.get(${t}) failed`
              ),
              e)
            );
          }
          r &&
            (await this.sendError({
              id: t,
              topic: r,
              error: n,
              rpcOpts: Zk.wc_sessionPropose.reject,
            })),
            await this.deleteProposal(t);
        }),
        Q(this, `update`, async (e) => {
          this.isInitialized(), await this.confirmOnlineStateOrThrow();
          try {
            await this.isValidUpdate(e);
          } catch (e) {
            throw (
              (this.client.logger.error(`update() -> isValidUpdate() failed`),
              e)
            );
          }
          let { topic: t, namespaces: n } = e,
            {
              done: r,
              resolve: i,
              reject: a,
            } = Um(
              z.FIVE_MINUTES,
              `Session update request expired without receiving any acknowledgement`
            ),
            o = lw(),
            s = uw().toString(),
            c = this.client.session.get(t).namespaces;
          return (
            this.events.once(U(`session_update`, o), ({ error: e }) => {
              e ? a(e) : i();
            }),
            await this.client.session.update(t, { namespaces: n }),
            await this.sendRequest({
              topic: t,
              method: `wc_sessionUpdate`,
              params: { namespaces: n },
              throwOnFailedPublish: !0,
              clientRpcId: o,
              relayRpcId: s,
            }).catch((e) => {
              this.client.logger.error(e),
                this.client.session.update(t, { namespaces: c }),
                a(e);
            }),
            { acknowledged: r }
          );
        }),
        Q(this, `extend`, async (e) => {
          this.isInitialized(), await this.confirmOnlineStateOrThrow();
          try {
            await this.isValidExtend(e);
          } catch (e) {
            throw (
              (this.client.logger.error(`extend() -> isValidExtend() failed`),
              e)
            );
          }
          let { topic: t } = e,
            n = lw(),
            {
              done: r,
              resolve: i,
              reject: a,
            } = Um(
              z.FIVE_MINUTES,
              `Session extend request expired without receiving any acknowledgement`
            );
          return (
            this.events.once(U(`session_extend`, n), ({ error: e }) => {
              e ? a(e) : i();
            }),
            await this.setExpiry(t, Ym(Yk)),
            this.sendRequest({
              topic: t,
              method: `wc_sessionExtend`,
              params: {},
              clientRpcId: n,
              throwOnFailedPublish: !0,
            }).catch((e) => {
              a(e);
            }),
            { acknowledged: r }
          );
        }),
        Q(this, `request`, async (e) => {
          this.isInitialized();
          try {
            await this.isValidRequest(e);
          } catch (e) {
            throw (
              (this.client.logger.error(`request() -> isValidRequest() failed`),
              e)
            );
          }
          let {
              chainId: t,
              request: n,
              topic: r,
              expiry: i = Zk.wc_sessionRequest.req.ttl,
            } = e,
            a = this.client.session.get(r);
          a?.transportType === K.relay &&
            (await this.confirmOnlineStateOrThrow());
          let o = lw(),
            s = uw().toString(),
            {
              done: c,
              resolve: l,
              reject: u,
            } = Um(i, `Request expired. Please try again.`);
          this.events.once(
            U(`session_request`, o),
            ({ error: e, result: t }) => {
              e ? u(e) : l(t);
            }
          );
          let d = `wc_sessionRequest`,
            f = this.getAppLinkIfEnabled(a.peer.metadata, a.transportType);
          if (f)
            return (
              await this.sendRequest({
                clientRpcId: o,
                relayRpcId: s,
                topic: r,
                method: d,
                params: {
                  request: gA(Z({}, n), { expiryTimestamp: Ym(i) }),
                  chainId: t,
                },
                expiry: i,
                throwOnFailedPublish: !0,
                appLink: f,
              }).catch((e) => u(e)),
              this.client.events.emit(`session_request_sent`, {
                topic: r,
                request: n,
                chainId: t,
                id: o,
              }),
              await c()
            );
          let p = {
            request: gA(Z({}, n), { expiryTimestamp: Ym(i) }),
            chainId: t,
          };
          return await Promise.all([
            new Promise(async (e) => {
              await this.sendRequest({
                clientRpcId: o,
                relayRpcId: s,
                topic: r,
                method: d,
                params: p,
                expiry: i,
                throwOnFailedPublish: !0,
                tvf: this.getTVFParams(o, p),
              }).catch((e) => u(e)),
                this.client.events.emit(`session_request_sent`, {
                  topic: r,
                  request: n,
                  chainId: t,
                  id: o,
                }),
                e();
            }),
            new Promise(async (e) => {
              var t;
              if (!((t = a.sessionConfig) != null && t.disableDeepLink)) {
                let e = await th(this.client.core.storage, Gk);
                await Qm({ id: o, topic: r, wcDeepLink: e });
              }
              e();
            }),
            c(),
          ]).then((e) => e[2]);
        }),
        Q(this, `respond`, async (e) => {
          this.isInitialized();
          let t = this.client.core.eventClient.createEvent({
            properties: {
              topic: e?.topic || e?.response?.id?.toString(),
              trace: [OT.session_request_response_started],
            },
          });
          try {
            await this.isValidRespond(e);
          } catch (e) {
            throw (
              (t.addTrace(e?.message),
              t.setError(kT.session_request_response_validation_failure),
              e)
            );
          }
          t.addTrace(OT.session_request_response_validation_success);
          let { topic: n, response: r } = e,
            { id: i } = r,
            a = this.client.session.get(n);
          a.transportType === K.relay &&
            (await this.confirmOnlineStateOrThrow());
          let o = this.getAppLinkIfEnabled(a.peer.metadata, a.transportType);
          try {
            t.addTrace(OT.session_request_response_publish_started),
              Pw(r)
                ? await this.sendResult({
                    id: i,
                    topic: n,
                    result: r.result,
                    throwOnFailedPublish: !0,
                    appLink: o,
                  })
                : Fw(r) &&
                  (await this.sendError({
                    id: i,
                    topic: n,
                    error: r.error,
                    appLink: o,
                  })),
              this.cleanupAfterResponse(e);
          } catch (e) {
            throw (
              (t.addTrace(e?.message),
              t.setError(kT.session_request_response_publish_failure),
              e)
            );
          }
        }),
        Q(this, `ping`, async (e) => {
          this.isInitialized(), await this.confirmOnlineStateOrThrow();
          try {
            await this.isValidPing(e);
          } catch (e) {
            throw (
              (this.client.logger.error(`ping() -> isValidPing() failed`), e)
            );
          }
          let { topic: t } = e;
          if (this.client.session.keys.includes(t)) {
            let e = lw(),
              n = uw().toString(),
              {
                done: r,
                resolve: i,
                reject: a,
              } = Um(
                z.FIVE_MINUTES,
                `Ping request expired without receiving any acknowledgement`
              );
            this.events.once(U(`session_ping`, e), ({ error: e }) => {
              e ? a(e) : i();
            }),
              await Promise.all([
                this.sendRequest({
                  topic: t,
                  method: `wc_sessionPing`,
                  params: {},
                  throwOnFailedPublish: !0,
                  clientRpcId: e,
                  relayRpcId: n,
                }),
                r(),
              ]);
          } else
            this.client.core.pairing.pairings.keys.includes(t) &&
              (this.client.logger.warn(
                `ping() on pairing topic is deprecated and will be removed in the next major release.`
              ),
              await this.client.core.pairing.ping({ topic: t }));
        }),
        Q(this, `emit`, async (e) => {
          this.isInitialized(),
            await this.confirmOnlineStateOrThrow(),
            await this.isValidEmit(e);
          let { topic: t, event: n, chainId: r } = e,
            i = uw().toString(),
            a = lw();
          await this.sendRequest({
            topic: t,
            method: `wc_sessionEvent`,
            params: { event: n, chainId: r },
            throwOnFailedPublish: !0,
            relayRpcId: i,
            clientRpcId: a,
          });
        }),
        Q(this, `disconnect`, async (e) => {
          this.isInitialized(),
            await this.confirmOnlineStateOrThrow(),
            await this.isValidDisconnect(e);
          let { topic: t } = e;
          if (this.client.session.keys.includes(t))
            await this.sendRequest({
              topic: t,
              method: `wc_sessionDelete`,
              params: H(`USER_DISCONNECTED`),
              throwOnFailedPublish: !0,
            }),
              await this.deleteSession({ topic: t, emitEvent: !1 });
          else if (this.client.core.pairing.pairings.keys.includes(t))
            await this.client.core.pairing.disconnect({ topic: t });
          else {
            let { message: e } = V(
              `MISMATCHED_TOPIC`,
              `Session or pairing topic not found: ${t}`
            );
            throw Error(e);
          }
        }),
        Q(
          this,
          `find`,
          (e) => (
            this.isInitialized(),
            this.client.session.getAll().filter((t) => gS(t, e))
          )
        ),
        Q(this, `getPendingSessionRequests`, () =>
          this.client.pendingRequest.getAll()
        ),
        Q(this, `authenticate`, async (e, t) => {
          this.isInitialized(), this.isValidAuthenticate(e);
          let n =
              t &&
              this.client.core.linkModeSupportedApps.includes(t) &&
              this.client.metadata.redirect?.linkMode,
            r = n ? K.link_mode : K.relay;
          r === K.relay && (await this.confirmOnlineStateOrThrow());
          let {
              chains: i,
              statement: a = ``,
              uri: o,
              domain: s,
              nonce: c,
              type: l,
              exp: u,
              nbf: d,
              methods: f = [],
              expiry: p,
            } = e,
            m = [...(e.resources || [])],
            { topic: h, uri: g } = await this.client.core.pairing.create({
              methods: [`wc_sessionAuthenticate`],
              transportType: r,
            });
          this.client.logger.info({
            message: `Generated new pairing`,
            pairing: { topic: h, uri: g },
          });
          let _ = await this.client.core.crypto.generateKeyPair(),
            v = lx(_);
          if (
            (await Promise.all([
              this.client.auth.authKeys.set(cA, {
                responseTopic: v,
                publicKey: _,
              }),
              this.client.auth.pairingTopics.set(v, {
                topic: v,
                pairingTopic: h,
              }),
            ]),
            await this.client.core.relayer.subscribe(v, { transportType: r }),
            this.client.logger.info(
              `sending request to new pairing topic: ${h}`
            ),
            f.length > 0)
          ) {
            let { namespace: e } = dm(i[0]),
              t = U_(e, `request`, f);
            X_(m) && (t = G_(t, m.pop())), m.push(t);
          }
          let y =
              p && p > Zk.wc_sessionAuthenticate.req.ttl
                ? p
                : Zk.wc_sessionAuthenticate.req.ttl,
            b = {
              authPayload: {
                type: l ?? `caip122`,
                chains: i,
                statement: a,
                aud: o,
                domain: s,
                version: `1`,
                nonce: c,
                iat: new Date().toISOString(),
                exp: u,
                nbf: d,
                resources: m,
              },
              requester: { publicKey: _, metadata: this.client.metadata },
              expiryTimestamp: Ym(y),
            },
            x = {
              requiredNamespaces: {},
              optionalNamespaces: {
                eip155: {
                  chains: i,
                  methods: [...new Set([`personal_sign`, ...f])],
                  events: [`chainChanged`, `accountsChanged`],
                },
              },
              relays: [{ protocol: `irn` }],
              pairingTopic: h,
              proposer: { publicKey: _, metadata: this.client.metadata },
              expiryTimestamp: Ym(Zk.wc_sessionPropose.req.ttl),
              id: lw(),
            },
            { done: S, resolve: C, reject: w } = Um(y, `Request expired`),
            T = lw(),
            E = U(`session_connect`, x.id),
            D = U(`session_request`, T),
            O = async ({ error: e, session: t }) => {
              this.events.off(D, k), e ? w(e) : t && C({ session: t });
            },
            k = async (e) => {
              var n, i, a;
              if (
                (await this.deletePendingAuthRequest(T, {
                  message: `fulfilled`,
                  code: 0,
                }),
                e.error)
              ) {
                let t = H(`WC_METHOD_UNSUPPORTED`, `wc_sessionAuthenticate`);
                return e.error.code === t.code
                  ? void 0
                  : (this.events.off(E, O), w(e.error.message));
              }
              await this.deleteProposal(x.id), this.events.off(E, O);
              let { cacaos: o, responder: s } = e.result,
                c = [],
                l = [];
              for (let e of o) {
                (await P_({
                  cacao: e,
                  projectId: this.client.core.projectId,
                })) ||
                  (this.client.logger.error(e, `Signature verification failed`),
                  w(
                    H(
                      `SESSION_SETTLEMENT_FAILED`,
                      `Signature verification failed`
                    )
                  ));
                let { p: t } = e,
                  n = X_(t.resources),
                  r = [M_(t.iss)],
                  i = N_(t.iss);
                if (n) {
                  let e = J_(n),
                    t = Y_(n);
                  c.push(...e), r.push(...t);
                }
                for (let e of r) l.push(`${e}:${i}`);
              }
              let u = await this.client.core.crypto.generateSharedKey(
                  _,
                  s.publicKey
                ),
                d;
              c.length > 0 &&
                ((d = {
                  topic: u,
                  acknowledged: !0,
                  self: { publicKey: _, metadata: this.client.metadata },
                  peer: s,
                  controller: s.publicKey,
                  expiry: Ym(Yk),
                  requiredNamespaces: {},
                  optionalNamespaces: {},
                  relay: { protocol: `irn` },
                  pairingTopic: h,
                  namespaces: lS([...new Set(c)], [...new Set(l)]),
                  transportType: r,
                }),
                await this.client.core.relayer.subscribe(u, {
                  transportType: r,
                }),
                await this.client.session.set(u, d),
                h &&
                  (await this.client.core.pairing.updateMetadata({
                    topic: h,
                    metadata: s.metadata,
                  })),
                (d = this.client.session.get(u))),
                (n = this.client.metadata.redirect) != null &&
                  n.linkMode &&
                  (i = s.metadata.redirect) != null &&
                  i.linkMode &&
                  (a = s.metadata.redirect) != null &&
                  a.universal &&
                  t &&
                  (this.client.core.addLinkModeSupportedApp(
                    s.metadata.redirect.universal
                  ),
                  this.client.session.update(u, {
                    transportType: K.link_mode,
                  })),
                C({ auths: o, session: d });
            };
          this.events.once(E, O), this.events.once(D, k);
          let A;
          try {
            if (n) {
              let e = dw(`wc_sessionAuthenticate`, b, T);
              this.client.core.history.set(h, e),
                (A = Ux(
                  t,
                  h,
                  await this.client.core.crypto.encode(``, e, {
                    type: 2,
                    encoding: ex,
                  })
                ));
            } else
              await Promise.all([
                this.sendRequest({
                  topic: h,
                  method: `wc_sessionAuthenticate`,
                  params: b,
                  expiry: e.expiry,
                  throwOnFailedPublish: !0,
                  clientRpcId: T,
                }),
                this.sendRequest({
                  topic: h,
                  method: `wc_sessionPropose`,
                  params: x,
                  expiry: Zk.wc_sessionPropose.req.ttl,
                  throwOnFailedPublish: !0,
                  clientRpcId: x.id,
                }),
              ]);
          } catch (e) {
            throw (this.events.off(E, O), this.events.off(D, k), e);
          }
          return (
            await this.setProposal(x.id, x),
            await this.setAuthRequest(T, {
              request: gA(Z({}, b), { verifyContext: {} }),
              pairingTopic: h,
              transportType: r,
            }),
            { uri: A ?? g, response: S }
          );
        }),
        Q(this, `approveSessionAuthenticate`, async (e) => {
          let { id: t, auths: n } = e,
            r = this.client.core.eventClient.createEvent({
              properties: {
                topic: t.toString(),
                trace: [AT.authenticated_session_approve_started],
              },
            });
          try {
            this.isInitialized();
          } catch (e) {
            throw (r.setError(jT.no_internet_connection), e);
          }
          let i = this.getPendingAuthRequest(t);
          if (!i)
            throw (
              (r.setError(jT.authenticated_session_pending_request_not_found),
              Error(`Could not find pending auth request with id ${t}`))
            );
          let a = i.transportType || K.relay;
          a === K.relay && (await this.confirmOnlineStateOrThrow());
          let o = i.requester.publicKey,
            s = await this.client.core.crypto.generateKeyPair(),
            c = lx(o),
            l = { type: 1, receiverPublicKey: o, senderPublicKey: s },
            u = [],
            d = [];
          for (let e of n) {
            if (
              !(await P_({ cacao: e, projectId: this.client.core.projectId }))
            ) {
              r.setError(jT.invalid_cacao);
              let e = H(
                `SESSION_SETTLEMENT_FAILED`,
                `Signature verification failed`
              );
              throw (
                (await this.sendError({
                  id: t,
                  topic: c,
                  error: e,
                  encodeOpts: l,
                }),
                Error(e.message))
              );
            }
            r.addTrace(AT.cacaos_verified);
            let { p: n } = e,
              i = X_(n.resources),
              a = [M_(n.iss)],
              o = N_(n.iss);
            if (i) {
              let e = J_(i),
                t = Y_(i);
              u.push(...e), a.push(...t);
            }
            for (let e of a) d.push(`${e}:${o}`);
          }
          let f = await this.client.core.crypto.generateSharedKey(s, o);
          r.addTrace(AT.create_authenticated_session_topic);
          let p;
          if (u?.length > 0) {
            (p = {
              topic: f,
              acknowledged: !0,
              self: { publicKey: s, metadata: this.client.metadata },
              peer: { publicKey: o, metadata: i.requester.metadata },
              controller: o,
              expiry: Ym(Yk),
              authentication: n,
              requiredNamespaces: {},
              optionalNamespaces: {},
              relay: { protocol: `irn` },
              pairingTopic: i.pairingTopic,
              namespaces: lS([...new Set(u)], [...new Set(d)]),
              transportType: a,
            }),
              r.addTrace(AT.subscribing_authenticated_session_topic);
            try {
              await this.client.core.relayer.subscribe(f, { transportType: a });
            } catch (e) {
              throw (
                (r.setError(jT.subscribe_authenticated_session_topic_failure),
                e)
              );
            }
            r.addTrace(AT.subscribe_authenticated_session_topic_success),
              await this.client.session.set(f, p),
              r.addTrace(AT.store_authenticated_session),
              await this.client.core.pairing.updateMetadata({
                topic: i.pairingTopic,
                metadata: i.requester.metadata,
              });
          }
          r.addTrace(AT.publishing_authenticated_session_approve);
          try {
            await this.sendResult({
              topic: c,
              id: t,
              result: {
                cacaos: n,
                responder: { publicKey: s, metadata: this.client.metadata },
              },
              encodeOpts: l,
              throwOnFailedPublish: !0,
              appLink: this.getAppLinkIfEnabled(i.requester.metadata, a),
            });
          } catch (e) {
            throw (
              (r.setError(jT.authenticated_session_approve_publish_failure), e)
            );
          }
          return (
            await this.client.auth.requests.delete(t, {
              message: `fulfilled`,
              code: 0,
            }),
            await this.client.core.pairing.activate({ topic: i.pairingTopic }),
            this.client.core.eventClient.deleteEvent({ eventId: r.eventId }),
            { session: p }
          );
        }),
        Q(this, `rejectSessionAuthenticate`, async (e) => {
          this.isInitialized();
          let { id: t, reason: n } = e,
            r = this.getPendingAuthRequest(t);
          if (!r)
            throw Error(`Could not find pending auth request with id ${t}`);
          r.transportType === K.relay &&
            (await this.confirmOnlineStateOrThrow());
          let i = r.requester.publicKey,
            a = await this.client.core.crypto.generateKeyPair(),
            o = lx(i),
            s = { type: 1, receiverPublicKey: i, senderPublicKey: a };
          await this.sendError({
            id: t,
            topic: o,
            error: n,
            encodeOpts: s,
            rpcOpts: Zk.wc_sessionAuthenticate.reject,
            appLink: this.getAppLinkIfEnabled(
              r.requester.metadata,
              r.transportType
            ),
          }),
            await this.client.auth.requests.delete(t, {
              message: `rejected`,
              code: 0,
            }),
            await this.deleteProposal(t);
        }),
        Q(this, `formatAuthMessage`, (e) => {
          this.isInitialized();
          let { request: t, iss: n } = e;
          return F_(t, n);
        }),
        Q(this, `processRelayMessageCache`, () => {
          setTimeout(async () => {
            if (this.relayMessageCache.length !== 0)
              for (; this.relayMessageCache.length > 0; )
                try {
                  let e = this.relayMessageCache.shift();
                  e && (await this.onRelayMessage(e));
                } catch (e) {
                  this.client.logger.error(e);
                }
          }, 50);
        }),
        Q(this, `cleanupDuplicatePairings`, async (e) => {
          if (e.pairingTopic)
            try {
              let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                n = this.client.core.pairing.pairings
                  .getAll()
                  .filter(
                    (n) =>
                      n.peerMetadata?.url &&
                      n.peerMetadata?.url === e.peer.metadata.url &&
                      n.topic &&
                      n.topic !== t.topic
                  );
              if (n.length === 0) return;
              this.client.logger.info(
                `Cleaning up ${n.length} duplicate pairing(s)`
              ),
                await Promise.all(
                  n.map((e) =>
                    this.client.core.pairing.disconnect({ topic: e.topic })
                  )
                ),
                this.client.logger.info(`Duplicate pairings clean up finished`);
            } catch (e) {
              this.client.logger.error(e);
            }
        }),
        Q(this, `deleteSession`, async (e) => {
          let {
              topic: t,
              expirerHasDeleted: n = !1,
              emitEvent: r = !0,
              id: i = 0,
            } = e,
            { self: a } = this.client.session.get(t);
          await this.client.core.relayer.unsubscribe(t),
            await this.client.session.delete(t, H(`USER_DISCONNECTED`)),
            this.addToRecentlyDeleted(t, `session`),
            this.client.core.crypto.keychain.has(a.publicKey) &&
              (await this.client.core.crypto.deleteKeyPair(a.publicKey)),
            this.client.core.crypto.keychain.has(t) &&
              (await this.client.core.crypto.deleteSymKey(t)),
            n || this.client.core.expirer.del(t),
            this.client.core.storage
              .removeItem(Gk)
              .catch((e) => this.client.logger.warn(e)),
            t === this.sessionRequestQueue.queue[0]?.topic &&
              (this.sessionRequestQueue.state = $k.idle),
            await Promise.all(
              this.getPendingSessionRequests()
                .filter((e) => e.topic === t)
                .map((e) =>
                  this.deletePendingSessionRequest(e.id, H(`USER_DISCONNECTED`))
                )
            ),
            r && this.client.events.emit(`session_delete`, { id: i, topic: t });
        }),
        Q(this, `deleteProposal`, async (e, t) => {
          if (t)
            try {
              let t = this.client.proposal.get(e);
              this.client.core.eventClient
                .getEvent({ topic: t.pairingTopic })
                ?.setError(kT.proposal_expired);
            } catch {}
          await Promise.all([
            this.client.proposal.delete(e, H(`USER_DISCONNECTED`)),
            t ? Promise.resolve() : this.client.core.expirer.del(e),
          ]),
            this.addToRecentlyDeleted(e, `proposal`);
        }),
        Q(this, `deletePendingSessionRequest`, async (e, t, n = !1) => {
          await Promise.all([
            this.client.pendingRequest.delete(e, t),
            n ? Promise.resolve() : this.client.core.expirer.del(e),
          ]),
            this.addToRecentlyDeleted(e, `request`),
            (this.sessionRequestQueue.queue =
              this.sessionRequestQueue.queue.filter((t) => t.id !== e)),
            n &&
              ((this.sessionRequestQueue.state = $k.idle),
              this.client.events.emit(`session_request_expire`, { id: e }));
        }),
        Q(this, `deletePendingAuthRequest`, async (e, t, n = !1) => {
          await Promise.all([
            this.client.auth.requests.delete(e, t),
            n ? Promise.resolve() : this.client.core.expirer.del(e),
          ]);
        }),
        Q(this, `setExpiry`, async (e, t) => {
          this.client.session.keys.includes(e) &&
            (this.client.core.expirer.set(e, t),
            await this.client.session.update(e, { expiry: t }));
        }),
        Q(this, `setProposal`, async (e, t) => {
          this.client.core.expirer.set(e, Ym(Zk.wc_sessionPropose.req.ttl)),
            await this.client.proposal.set(e, t);
        }),
        Q(this, `setAuthRequest`, async (e, t) => {
          let { request: n, pairingTopic: r, transportType: i = K.relay } = t;
          this.client.core.expirer.set(e, n.expiryTimestamp),
            await this.client.auth.requests.set(e, {
              authPayload: n.authPayload,
              requester: n.requester,
              expiryTimestamp: n.expiryTimestamp,
              id: e,
              pairingTopic: r,
              verifyContext: n.verifyContext,
              transportType: i,
            });
        }),
        Q(this, `setPendingSessionRequest`, async (e) => {
          let { id: t, topic: n, params: r, verifyContext: i } = e,
            a = r.request.expiryTimestamp || Ym(Zk.wc_sessionRequest.req.ttl);
          this.client.core.expirer.set(t, a),
            await this.client.pendingRequest.set(t, {
              id: t,
              topic: n,
              params: r,
              verifyContext: i,
            });
        }),
        Q(this, `sendRequest`, async (e) => {
          let {
              topic: t,
              method: n,
              params: r,
              expiry: i,
              relayRpcId: a,
              clientRpcId: o,
              throwOnFailedPublish: s,
              appLink: c,
              tvf: l,
              publishOpts: u = {},
            } = e,
            d = dw(n, r, o),
            f,
            p = !!c;
          try {
            let e = p ? ex : $b;
            f = await this.client.core.crypto.encode(t, d, { encoding: e });
          } catch (e) {
            throw (
              (await this.cleanup(),
              this.client.logger.error(
                `sendRequest() -> core.crypto.encode() for topic ${t} failed`
              ),
              e)
            );
          }
          let m;
          if (nA.includes(n)) {
            let e = ux(JSON.stringify(d)),
              t = ux(f);
            m = await this.client.core.verify.register({
              id: t,
              decryptedId: e,
            });
          }
          let h = Z(Z({}, Zk[n].req), u);
          if (
            ((h.attestation = m),
            i && (h.ttl = i),
            a && (h.id = a),
            this.client.core.history.set(t, d),
            p)
          ) {
            let e = Ux(c, t, f);
            await global.Linking.openURL(e, this.client.name);
          } else
            (h.tvf = gA(Z({}, l), { correlationId: d.id })),
              s
                ? ((h.internal = gA(Z({}, h.internal), {
                    throwOnFailedPublish: !0,
                  })),
                  await this.client.core.relayer.publish(t, f, h))
                : this.client.core.relayer
                    .publish(t, f, h)
                    .catch((e) => this.client.logger.error(e));
          return d.id;
        }),
        Q(this, `sendProposeSession`, async (e) => {
          let { proposal: t, publishOpts: n } = e,
            r = dw(`wc_sessionPropose`, t, t.id);
          this.client.core.history.set(t.pairingTopic, r);
          let i = await this.client.core.crypto.encode(t.pairingTopic, r, {
              encoding: $b,
            }),
            a = ux(JSON.stringify(r)),
            o = ux(i),
            s = await this.client.core.verify.register({
              id: o,
              decryptedId: a,
            });
          await this.client.core.relayer.publishCustom({
            payload: { pairingTopic: t.pairingTopic, sessionProposal: i },
            opts: gA(Z({}, n), {
              publishMethod: `wc_proposeSession`,
              attestation: s,
            }),
          });
        }),
        Q(this, `sendApproveSession`, async (e) => {
          let {
              sessionTopic: t,
              pairingProposalResponse: n,
              proposal: r,
              sessionSettleRequest: i,
              publishOpts: a,
            } = e,
            o = fw(r.id, n),
            s = await this.client.core.crypto.encode(r.pairingTopic, o, {
              encoding: $b,
            }),
            c = dw(`wc_sessionSettle`, i, a?.id),
            l = await this.client.core.crypto.encode(t, c, { encoding: $b });
          this.client.core.history.set(t, c),
            await this.client.core.relayer.publishCustom({
              payload: {
                sessionTopic: t,
                pairingTopic: r.pairingTopic,
                sessionProposalResponse: s,
                sessionSettlementRequest: l,
              },
              opts: gA(Z({}, a), { publishMethod: `wc_approveSession` }),
            });
        }),
        Q(this, `sendResult`, async (e) => {
          let {
              id: t,
              topic: n,
              result: r,
              throwOnFailedPublish: i,
              encodeOpts: a,
              appLink: o,
            } = e,
            s = fw(t, r),
            c,
            l = o && typeof (global == null ? void 0 : global.Linking) < `u`;
          try {
            let e = l ? ex : $b;
            c = await this.client.core.crypto.encode(
              n,
              s,
              gA(Z({}, a || {}), { encoding: e })
            );
          } catch (e) {
            throw (
              (await this.cleanup(),
              this.client.logger.error(
                `sendResult() -> core.crypto.encode() for topic ${n} failed`
              ),
              e)
            );
          }
          let u, d;
          try {
            u = await this.client.core.history.get(n, t);
            let e = u.request;
            try {
              d = this.getTVFParams(t, e.params, r);
            } catch (e) {
              this.client.logger.warn(
                `sendResult() -> getTVFParams() failed: ${e?.message}`
              );
            }
          } catch (e) {
            throw (
              (this.client.logger.error(
                `sendResult() -> history.get(${n}, ${t}) failed`
              ),
              e)
            );
          }
          if (l) {
            let e = Ux(o, n, c);
            await global.Linking.openURL(e, this.client.name);
          } else {
            let e = Zk[u.request.method].res;
            (e.tvf = gA(Z({}, d), { correlationId: t })),
              i
                ? ((e.internal = gA(Z({}, e.internal), {
                    throwOnFailedPublish: !0,
                  })),
                  await this.client.core.relayer.publish(n, c, e))
                : this.client.core.relayer
                    .publish(n, c, e)
                    .catch((e) => this.client.logger.error(e));
          }
          await this.client.core.history.resolve(s);
        }),
        Q(this, `sendError`, async (e) => {
          let {
              id: t,
              topic: n,
              error: r,
              encodeOpts: i,
              rpcOpts: a,
              appLink: o,
            } = e,
            s = pw(t, r),
            c,
            l = o && typeof (global == null ? void 0 : global.Linking) < `u`;
          try {
            let e = l ? ex : $b;
            c = await this.client.core.crypto.encode(
              n,
              s,
              gA(Z({}, i || {}), { encoding: e })
            );
          } catch (e) {
            throw (
              (await this.cleanup(),
              this.client.logger.error(
                `sendError() -> core.crypto.encode() for topic ${n} failed`
              ),
              e)
            );
          }
          let u;
          try {
            u = await this.client.core.history.get(n, t);
          } catch (e) {
            throw (
              (this.client.logger.error(
                `sendError() -> history.get(${n}, ${t}) failed`
              ),
              e)
            );
          }
          if (l) {
            let e = Ux(o, n, c);
            await global.Linking.openURL(e, this.client.name);
          } else {
            let e = u.request.method,
              t = a || Zk[e].res;
            this.client.core.relayer.publish(n, c, t);
          }
          await this.client.core.history.resolve(s);
        }),
        Q(this, `cleanup`, async () => {
          let e = [],
            t = [];
          this.client.session.getAll().forEach((t) => {
            let n = !1;
            Xm(t.expiry) && (n = !0),
              this.client.core.crypto.keychain.has(t.topic) || (n = !0),
              n && e.push(t.topic);
          }),
            this.client.proposal.getAll().forEach((e) => {
              Xm(e.expiryTimestamp) && t.push(e.id);
            }),
            await Promise.all([
              ...e.map((e) => this.deleteSession({ topic: e })),
              ...t.map((e) => this.deleteProposal(e)),
            ]);
        }),
        Q(this, `onProviderMessageEvent`, async (e) => {
          !this.initialized || this.relayMessageCache.length > 0
            ? this.relayMessageCache.push(e)
            : await this.onRelayMessage(e);
        }),
        Q(this, `onRelayEventRequest`, async (e) => {
          this.requestQueue.queue.push(e), await this.processRequestsQueue();
        }),
        Q(this, `processRequestsQueue`, async () => {
          if (this.requestQueue.state === $k.active) {
            this.client.logger.info(
              `Request queue already active, skipping...`
            );
            return;
          }
          for (
            this.client.logger.info(
              `Request queue starting with ${this.requestQueue.queue.length} requests`
            );
            this.requestQueue.queue.length > 0;

          ) {
            this.requestQueue.state = $k.active;
            let e = this.requestQueue.queue.shift();
            if (e)
              try {
                await this.processRequest(e);
              } catch (e) {
                this.client.logger.warn(e);
              }
          }
          this.requestQueue.state = $k.idle;
        }),
        Q(this, `processRequest`, async (e) => {
          let {
              topic: t,
              payload: n,
              attestation: r,
              transportType: i,
              encryptedId: a,
            } = e,
            o = n.method;
          if (!this.shouldIgnorePairingRequest({ topic: t, requestMethod: o }))
            switch (o) {
              case `wc_sessionPropose`:
                return await this.onSessionProposeRequest({
                  topic: t,
                  payload: n,
                  attestation: r,
                  encryptedId: a,
                });
              case `wc_sessionSettle`:
                return await this.onSessionSettleRequest(t, n);
              case `wc_sessionUpdate`:
                return await this.onSessionUpdateRequest(t, n);
              case `wc_sessionExtend`:
                return await this.onSessionExtendRequest(t, n);
              case `wc_sessionPing`:
                return await this.onSessionPingRequest(t, n);
              case `wc_sessionDelete`:
                return await this.onSessionDeleteRequest(t, n);
              case `wc_sessionRequest`:
                return await this.onSessionRequest({
                  topic: t,
                  payload: n,
                  attestation: r,
                  encryptedId: a,
                  transportType: i,
                });
              case `wc_sessionEvent`:
                return await this.onSessionEventRequest(t, n);
              case `wc_sessionAuthenticate`:
                return await this.onSessionAuthenticateRequest({
                  topic: t,
                  payload: n,
                  attestation: r,
                  encryptedId: a,
                  transportType: i,
                });
              default:
                return this.client.logger.info(
                  `Unsupported request method ${o}`
                );
            }
        }),
        Q(this, `onRelayEventResponse`, async (e) => {
          let { topic: t, payload: n, transportType: r } = e,
            i = (await this.client.core.history.get(t, n.id)).request.method;
          switch (i) {
            case `wc_sessionPropose`:
              return this.onSessionProposeResponse(t, n, r);
            case `wc_sessionSettle`:
              return this.onSessionSettleResponse(t, n);
            case `wc_sessionUpdate`:
              return this.onSessionUpdateResponse(t, n);
            case `wc_sessionExtend`:
              return this.onSessionExtendResponse(t, n);
            case `wc_sessionPing`:
              return this.onSessionPingResponse(t, n);
            case `wc_sessionRequest`:
              return this.onSessionRequestResponse(t, n);
            case `wc_sessionAuthenticate`:
              return this.onSessionAuthenticateResponse(t, n);
            default:
              return this.client.logger.info(
                `Unsupported response method ${i}`
              );
          }
        }),
        Q(this, `onRelayEventUnknownPayload`, (e) => {
          let { topic: t } = e,
            { message: n } = V(
              `MISSING_OR_INVALID`,
              `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`
            );
          throw Error(n);
        }),
        Q(this, `shouldIgnorePairingRequest`, (e) => {
          let { topic: t, requestMethod: n } = e,
            r = this.expectedPairingMethodMap.get(t);
          return !r || r.includes(n)
            ? !1
            : !!(
                r.includes(`wc_sessionAuthenticate`) &&
                this.client.events.listenerCount(`session_authenticate`) > 0
              );
        }),
        Q(this, `onSessionProposeRequest`, async (e) => {
          let { topic: t, payload: n, attestation: r, encryptedId: i } = e,
            { params: a, id: o } = n;
          try {
            let e = this.client.core.eventClient.getEvent({ topic: t });
            this.client.events.listenerCount(`session_proposal`) === 0 &&
              (console.warn(`No listener for session_proposal event`),
              e?.setError(DT.proposal_listener_not_found)),
              this.isValidConnect(Z({}, n.params));
            let s = Z(
              {
                id: o,
                pairingTopic: t,
                expiryTimestamp:
                  a.expiryTimestamp || Ym(Zk.wc_sessionPropose.req.ttl),
                attestation: r,
                encryptedId: i,
              },
              a
            );
            await this.setProposal(o, s);
            let c = await this.getVerifyContext({
              attestationId: r,
              hash: ux(JSON.stringify(n)),
              encryptedId: i,
              metadata: s.proposer.metadata,
            });
            e?.addTrace(ET.emit_session_proposal),
              this.client.events.emit(`session_proposal`, {
                id: o,
                params: s,
                verifyContext: c,
              });
          } catch (e) {
            await this.sendError({
              id: o,
              topic: t,
              error: e,
              rpcOpts: Zk.wc_sessionPropose.autoReject,
            }),
              this.client.logger.error(e);
          }
        }),
        Q(this, `onSessionProposeResponse`, async (e, t, n) => {
          let { id: r } = t;
          if (Pw(t)) {
            let { result: i } = t;
            this.client.logger.trace({
              type: `method`,
              method: `onSessionProposeResponse`,
              result: i,
            });
            let a = this.client.proposal.get(r);
            this.client.logger.trace({
              type: `method`,
              method: `onSessionProposeResponse`,
              proposal: a,
            });
            let o = a.proposer.publicKey;
            this.client.logger.trace({
              type: `method`,
              method: `onSessionProposeResponse`,
              selfPublicKey: o,
            });
            let s = i.responderPublicKey;
            this.client.logger.trace({
              type: `method`,
              method: `onSessionProposeResponse`,
              peerPublicKey: s,
            });
            let c = await this.client.core.crypto.generateSharedKey(o, s);
            this.pendingSessions.set(r, {
              sessionTopic: c,
              pairingTopic: e,
              proposalId: r,
              publicKey: o,
            });
            let l = await this.client.core.relayer.subscribe(c, {
              transportType: n,
            });
            this.client.logger.trace({
              type: `method`,
              method: `onSessionProposeResponse`,
              subscriptionId: l,
            }),
              await this.client.core.pairing.activate({ topic: e });
          } else if (Fw(t)) {
            await this.deleteProposal(r);
            let e = U(`session_connect`, r);
            if (this.events.listenerCount(e) === 0)
              throw Error(`emitting ${e} without any listeners, 954`);
            this.events.emit(e, { error: t.error });
          }
        }),
        Q(this, `onSessionSettleRequest`, async (e, t) => {
          let { id: n, params: r } = t;
          try {
            this.isValidSessionSettleRequest(r);
            let {
                relay: n,
                controller: i,
                expiry: a,
                namespaces: o,
                sessionProperties: s,
                scopedProperties: c,
                sessionConfig: l,
                proposalRequestsResponses: u,
              } = t.params,
              d = [...this.pendingSessions.values()].find(
                (t) => t.sessionTopic === e
              );
            if (!d)
              return this.client.logger.error(
                `Pending session not found for topic ${e}`
              );
            let f = this.client.proposal.get(d.proposalId),
              p = gA(
                Z(
                  Z(
                    Z(
                      {
                        topic: e,
                        relay: n,
                        expiry: a,
                        namespaces: o,
                        acknowledged: !0,
                        pairingTopic: d.pairingTopic,
                        requiredNamespaces: f.requiredNamespaces,
                        optionalNamespaces: f.optionalNamespaces,
                        controller: i.publicKey,
                        self: {
                          publicKey: d.publicKey,
                          metadata: this.client.metadata,
                        },
                        peer: { publicKey: i.publicKey, metadata: i.metadata },
                      },
                      s && { sessionProperties: s }
                    ),
                    c && { scopedProperties: c }
                  ),
                  l && { sessionConfig: l }
                ),
                {
                  transportType: K.relay,
                  authentication: u?.authentication,
                  walletPayResult: u?.walletPay,
                }
              );
            await this.client.session.set(p.topic, p),
              await this.setExpiry(p.topic, p.expiry),
              await this.client.core.pairing.updateMetadata({
                topic: d.pairingTopic,
                metadata: p.peer.metadata,
              }),
              this.pendingSessions.delete(d.proposalId),
              this.deleteProposal(d.proposalId, !1),
              this.cleanupDuplicatePairings(p),
              await this.sendResult({
                id: t.id,
                topic: e,
                throwOnFailedPublish: !0,
                result: !0,
              }),
              this.client.events.emit(`session_connect`, { session: p }),
              this.events.emit(U(`session_connect`, d.proposalId), {
                session: p,
              });
          } catch (t) {
            await this.sendError({ id: n, topic: e, error: t }),
              this.client.logger.error(t);
          }
        }),
        Q(this, `onSessionSettleResponse`, async (e, t) => {
          let { id: n } = t;
          Pw(t)
            ? (await this.client.session.update(e, { acknowledged: !0 }),
              this.events.emit(U(`session_approve`, n), {}))
            : Fw(t) &&
              (await this.client.session.delete(e, H(`USER_DISCONNECTED`)),
              this.events.emit(U(`session_approve`, n), { error: t.error }));
        }),
        Q(this, `onSessionUpdateRequest`, async (e, t) => {
          let { params: n, id: r } = t;
          try {
            let t = `${e}_session_update`,
              i = rC.get(t);
            if (i && this.isRequestOutOfSync(i, r)) {
              this.client.logger.warn(`Discarding out of sync request - ${r}`),
                this.sendError({
                  id: r,
                  topic: e,
                  error: H(`INVALID_UPDATE_REQUEST`),
                });
              return;
            }
            this.isValidUpdate(Z({ topic: e }, n));
            try {
              rC.set(t, r),
                await this.client.session.update(e, {
                  namespaces: n.namespaces,
                }),
                await this.sendResult({ id: r, topic: e, result: !0 });
            } catch (e) {
              throw (rC.delete(t), e);
            }
            this.client.events.emit(`session_update`, {
              id: r,
              topic: e,
              params: n,
            });
          } catch (t) {
            await this.sendError({ id: r, topic: e, error: t }),
              this.client.logger.error(t);
          }
        }),
        Q(
          this,
          `isRequestOutOfSync`,
          (e, t) => t.toString().slice(0, -3) < e.toString().slice(0, -3)
        ),
        Q(this, `onSessionUpdateResponse`, (e, t) => {
          let { id: n } = t,
            r = U(`session_update`, n);
          if (this.events.listenerCount(r) === 0)
            throw Error(`emitting ${r} without any listeners`);
          Pw(t)
            ? this.events.emit(U(`session_update`, n), {})
            : Fw(t) &&
              this.events.emit(U(`session_update`, n), { error: t.error });
        }),
        Q(this, `onSessionExtendRequest`, async (e, t) => {
          let { id: n } = t;
          try {
            this.isValidExtend({ topic: e }),
              await this.setExpiry(e, Ym(Yk)),
              await this.sendResult({ id: n, topic: e, result: !0 }),
              this.client.events.emit(`session_extend`, { id: n, topic: e });
          } catch (t) {
            await this.sendError({ id: n, topic: e, error: t }),
              this.client.logger.error(t);
          }
        }),
        Q(this, `onSessionExtendResponse`, (e, t) => {
          let { id: n } = t,
            r = U(`session_extend`, n);
          if (this.events.listenerCount(r) === 0)
            throw Error(`emitting ${r} without any listeners`);
          Pw(t)
            ? this.events.emit(U(`session_extend`, n), {})
            : Fw(t) &&
              this.events.emit(U(`session_extend`, n), { error: t.error });
        }),
        Q(this, `onSessionPingRequest`, async (e, t) => {
          let { id: n } = t;
          try {
            this.isValidPing({ topic: e }),
              await this.sendResult({
                id: n,
                topic: e,
                result: !0,
                throwOnFailedPublish: !0,
              }),
              this.client.events.emit(`session_ping`, { id: n, topic: e });
          } catch (t) {
            await this.sendError({ id: n, topic: e, error: t }),
              this.client.logger.error(t);
          }
        }),
        Q(this, `onSessionPingResponse`, (e, t) => {
          let { id: n } = t,
            r = U(`session_ping`, n);
          setTimeout(() => {
            if (this.events.listenerCount(r) === 0)
              throw Error(`emitting ${r} without any listeners 2176`);
            Pw(t)
              ? this.events.emit(U(`session_ping`, n), {})
              : Fw(t) &&
                this.events.emit(U(`session_ping`, n), { error: t.error });
          }, 500);
        }),
        Q(this, `onSessionDeleteRequest`, async (e, t) => {
          let { id: n } = t;
          try {
            await this.isValidDisconnect({ topic: e, reason: t.params }),
              this.cleanupPendingSentRequestsForTopic({
                topic: e,
                error: H(`USER_DISCONNECTED`),
              }),
              await this.deleteSession({ topic: e, id: n });
          } catch (e) {
            this.client.logger.error(e);
          }
        }),
        Q(this, `onSessionRequest`, async (e) => {
          var t, n;
          let {
              topic: r,
              payload: i,
              attestation: a,
              encryptedId: o,
              transportType: s,
            } = e,
            { id: c, params: l } = i;
          try {
            await this.isValidRequest(Z({ topic: r }, l));
            let e = this.client.session.get(r),
              i = {
                id: c,
                topic: r,
                params: l,
                verifyContext: await this.getVerifyContext({
                  attestationId: a,
                  hash: ux(JSON.stringify(dw(`wc_sessionRequest`, l, c))),
                  encryptedId: o,
                  metadata: e.peer.metadata,
                  transportType: s,
                }),
              };
            await this.setPendingSessionRequest(i),
              s === K.link_mode &&
                (t = e.peer.metadata.redirect) != null &&
                t.universal &&
                this.client.core.addLinkModeSupportedApp(
                  e.peer.metadata.redirect?.universal
                ),
              (n = this.client.signConfig) != null && n.disableRequestQueue
                ? this.emitSessionRequest(i)
                : (this.addSessionRequestToSessionRequestQueue(i),
                  this.processSessionRequestQueue());
          } catch (e) {
            await this.sendError({ id: c, topic: r, error: e }),
              this.client.logger.error(e);
          }
        }),
        Q(this, `onSessionRequestResponse`, (e, t) => {
          let { id: n } = t,
            r = U(`session_request`, n);
          if (this.events.listenerCount(r) === 0)
            throw Error(`emitting ${r} without any listeners`);
          Pw(t)
            ? this.events.emit(U(`session_request`, n), { result: t.result })
            : Fw(t) &&
              this.events.emit(U(`session_request`, n), { error: t.error });
        }),
        Q(this, `onSessionEventRequest`, async (e, t) => {
          let { id: n, params: r } = t;
          try {
            let t = `${e}_session_event_${r.event.name}`,
              i = rC.get(t);
            if (i && this.isRequestOutOfSync(i, n)) {
              this.client.logger.info(`Discarding out of sync request - ${n}`);
              return;
            }
            this.isValidEmit(Z({ topic: e }, r)),
              this.client.events.emit(`session_event`, {
                id: n,
                topic: e,
                params: r,
              }),
              rC.set(t, n);
          } catch (t) {
            await this.sendError({ id: n, topic: e, error: t }),
              this.client.logger.error(t);
          }
        }),
        Q(this, `onSessionAuthenticateResponse`, (e, t) => {
          let { id: n } = t;
          this.client.logger.trace({
            type: `method`,
            method: `onSessionAuthenticateResponse`,
            topic: e,
            payload: t,
          }),
            Pw(t)
              ? this.events.emit(U(`session_request`, n), { result: t.result })
              : Fw(t) &&
                this.events.emit(U(`session_request`, n), { error: t.error });
        }),
        Q(this, `onSessionAuthenticateRequest`, async (e) => {
          var t;
          let {
            topic: n,
            payload: r,
            attestation: i,
            encryptedId: a,
            transportType: o,
          } = e;
          try {
            let { requester: e, authPayload: s, expiryTimestamp: c } = r.params,
              l = await this.getVerifyContext({
                attestationId: i,
                hash: ux(JSON.stringify(r)),
                encryptedId: a,
                metadata: e.metadata,
                transportType: o,
              }),
              u = {
                requester: e,
                pairingTopic: n,
                id: r.id,
                authPayload: s,
                verifyContext: l,
                expiryTimestamp: c,
              };
            await this.setAuthRequest(r.id, {
              request: u,
              pairingTopic: n,
              transportType: o,
            }),
              o === K.link_mode &&
                (t = e.metadata.redirect) != null &&
                t.universal &&
                this.client.core.addLinkModeSupportedApp(
                  e.metadata.redirect.universal
                ),
              this.client.events.emit(`session_authenticate`, {
                topic: n,
                params: r.params,
                id: r.id,
                verifyContext: l,
              });
          } catch (e) {
            this.client.logger.error(e);
            let t = r.params.requester.publicKey,
              i = await this.client.core.crypto.generateKeyPair(),
              a = this.getAppLinkIfEnabled(r.params.requester.metadata, o),
              s = { type: 1, receiverPublicKey: t, senderPublicKey: i };
            await this.sendError({
              id: r.id,
              topic: n,
              error: e,
              encodeOpts: s,
              rpcOpts: Zk.wc_sessionAuthenticate.autoReject,
              appLink: a,
            });
          }
        }),
        Q(this, `addSessionRequestToSessionRequestQueue`, (e) => {
          this.sessionRequestQueue.queue.push(e);
        }),
        Q(this, `cleanupAfterResponse`, (e) => {
          this.deletePendingSessionRequest(e.response.id, {
            message: `fulfilled`,
            code: 0,
          }),
            setTimeout(() => {
              (this.sessionRequestQueue.state = $k.idle),
                this.processSessionRequestQueue();
            }, (0, z.toMiliseconds)(this.requestQueueDelay));
        }),
        Q(
          this,
          `cleanupPendingSentRequestsForTopic`,
          ({ topic: e, error: t }) => {
            let n = this.client.core.history.pending;
            n.length > 0 &&
              n
                .filter(
                  (t) =>
                    t.topic === e && t.request.method === `wc_sessionRequest`
                )
                .forEach((e) => {
                  this.events.emit(U(`session_request`, e.request.id), {
                    error: t,
                  });
                });
          }
        ),
        Q(this, `processSessionRequestQueue`, () => {
          if (this.sessionRequestQueue.state === $k.active) {
            this.client.logger.info(`session request queue is already active.`);
            return;
          }
          let e = this.sessionRequestQueue.queue[0];
          if (!e) {
            this.client.logger.info(`session request queue is empty.`);
            return;
          }
          try {
            this.emitSessionRequest(e);
          } catch (e) {
            this.client.logger.error(e);
          }
        }),
        Q(this, `emitSessionRequest`, (e) => {
          if (this.emittedSessionRequests.has(e.id)) {
            this.client.logger.warn(
              { id: e.id },
              `Skipping emitting \`session_request\` event for duplicate request. id: ${e.id}`
            );
            return;
          }
          (this.sessionRequestQueue.state = $k.active),
            this.emittedSessionRequests.add(e.id),
            this.client.events.emit(`session_request`, e);
        }),
        Q(this, `onPairingCreated`, (e) => {
          if (
            (e.methods && this.expectedPairingMethodMap.set(e.topic, e.methods),
            e.active)
          )
            return;
          let t = this.client.proposal
            .getAll()
            .find((t) => t.pairingTopic === e.topic);
          t &&
            this.onSessionProposeRequest({
              topic: e.topic,
              payload: dw(
                `wc_sessionPropose`,
                gA(Z({}, t), {
                  requiredNamespaces: t.requiredNamespaces,
                  optionalNamespaces: t.optionalNamespaces,
                  relays: t.relays,
                  proposer: t.proposer,
                  sessionProperties: t.sessionProperties,
                  scopedProperties: t.scopedProperties,
                }),
                t.id
              ),
              attestation: t.attestation,
              encryptedId: t.encryptedId,
            });
        }),
        Q(this, `isValidConnect`, async (e) => {
          if (!FS(e)) {
            let { message: t } = V(
              `MISSING_OR_INVALID`,
              `connect() params: ${JSON.stringify(e)}`
            );
            throw Error(t);
          }
          let {
            pairingTopic: t,
            requiredNamespaces: n,
            optionalNamespaces: r,
            sessionProperties: i,
            scopedProperties: a,
            relays: o,
          } = e;
          if ((pS(t) || (await this.isValidPairingTopic(t)), !NS(o, !0))) {
            let { message: e } = V(
              `MISSING_OR_INVALID`,
              `connect() relays: ${o}`
            );
            throw Error(e);
          }
          if (n && !pS(n) && fS(n) !== 0) {
            let e = `requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces`;
            [`fatal`, `error`, `silent`].includes(this.client.logger.level)
              ? console.warn(e)
              : this.client.logger.warn(e),
              this.validateNamespaces(n, `requiredNamespaces`);
          }
          if (
            (r &&
              !pS(r) &&
              fS(r) !== 0 &&
              this.validateNamespaces(r, `optionalNamespaces`),
            i && !pS(i) && this.validateSessionProps(i, `sessionProperties`),
            a && !pS(a))
          ) {
            this.validateSessionProps(a, `scopedProperties`);
            let e = Object.keys(n || {}).concat(Object.keys(r || {}));
            if (!Object.keys(a).every((t) => e.includes(t.split(`:`)[0])))
              throw Error(
                `Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(
                  a
                )}, required/optional namespaces: ${JSON.stringify(e)}`
              );
          }
        }),
        Q(this, `validateNamespaces`, (e, t) => {
          let n = AS(e, `connect()`, t);
          if (n) throw Error(n.message);
        }),
        Q(this, `isValidApprove`, async (e) => {
          if (!FS(e))
            throw Error(
              V(`MISSING_OR_INVALID`, `approve() params: ${e}`).message
            );
          let {
            id: t,
            namespaces: n,
            relayProtocol: r,
            sessionProperties: i,
            scopedProperties: a,
          } = e;
          this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
          let o = this.client.proposal.get(t),
            s = jS(n, `approve()`);
          if (s) throw Error(s.message);
          let c = US(o.requiredNamespaces, n, `approve()`);
          if (c) throw Error(c.message);
          if (!mS(r, !0)) {
            let { message: e } = V(
              `MISSING_OR_INVALID`,
              `approve() relayProtocol: ${r}`
            );
            throw Error(e);
          }
          if (
            (i && !pS(i) && this.validateSessionProps(i, `sessionProperties`),
            a && !pS(a))
          ) {
            this.validateSessionProps(a, `scopedProperties`);
            let e = new Set(Object.keys(n));
            if (!Object.keys(a).every((t) => e.has(t.split(`:`)[0])))
              throw Error(
                `Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(
                  a
                )}, approved namespaces: ${Array.from(e).join(`, `)}`
              );
          }
        }),
        Q(this, `isValidReject`, async (e) => {
          if (!FS(e)) {
            let { message: t } = V(
              `MISSING_OR_INVALID`,
              `reject() params: ${e}`
            );
            throw Error(t);
          }
          let { id: t, reason: n } = e;
          if (
            (this.checkRecentlyDeleted(t),
            await this.isValidProposalId(t),
            !IS(n))
          ) {
            let { message: e } = V(
              `MISSING_OR_INVALID`,
              `reject() reason: ${JSON.stringify(n)}`
            );
            throw Error(e);
          }
        }),
        Q(this, `isValidSessionSettleRequest`, (e) => {
          if (!FS(e)) {
            let { message: t } = V(
              `MISSING_OR_INVALID`,
              `onSessionSettleRequest() params: ${e}`
            );
            throw Error(t);
          }
          let { relay: t, controller: n, namespaces: r, expiry: i } = e;
          if (!MS(t)) {
            let { message: e } = V(
              `MISSING_OR_INVALID`,
              `onSessionSettleRequest() relay protocol should be a string`
            );
            throw Error(e);
          }
          let a = SS(n, `onSessionSettleRequest()`);
          if (a) throw Error(a.message);
          let o = jS(r, `onSessionSettleRequest()`);
          if (o) throw Error(o.message);
          if (Xm(i)) {
            let { message: e } = V(`EXPIRED`, `onSessionSettleRequest()`);
            throw Error(e);
          }
        }),
        Q(this, `isValidUpdate`, async (e) => {
          if (!FS(e)) {
            let { message: t } = V(
              `MISSING_OR_INVALID`,
              `update() params: ${e}`
            );
            throw Error(t);
          }
          let { topic: t, namespaces: n } = e;
          this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
          let r = this.client.session.get(t),
            i = jS(n, `update()`);
          if (i) throw Error(i.message);
          let a = US(r.requiredNamespaces, n, `update()`);
          if (a) throw Error(a.message);
        }),
        Q(this, `isValidExtend`, async (e) => {
          if (!FS(e)) {
            let { message: t } = V(
              `MISSING_OR_INVALID`,
              `extend() params: ${e}`
            );
            throw Error(t);
          }
          let { topic: t } = e;
          this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
        }),
        Q(this, `isValidRequest`, async (e) => {
          if (!FS(e)) {
            let { message: t } = V(
              `MISSING_OR_INVALID`,
              `request() params: ${e}`
            );
            throw Error(t);
          }
          let { topic: t, request: n, chainId: r, expiry: i } = e;
          this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
          let { namespaces: a } = this.client.session.get(t);
          if (!BS(a, r)) {
            let { message: e } = V(
              `MISSING_OR_INVALID`,
              `request() chainId: ${r}`
            );
            throw Error(e);
          }
          if (!LS(n)) {
            let { message: e } = V(
              `MISSING_OR_INVALID`,
              `request() ${JSON.stringify(n)}`
            );
            throw Error(e);
          }
          if (!VS(a, r, n.method)) {
            let { message: e } = V(
              `MISSING_OR_INVALID`,
              `request() method: ${n.method}`
            );
            throw Error(e);
          }
          this.validateRequestExpiry(i);
        }),
        Q(this, `isValidRespond`, async (e) => {
          var t;
          if (!FS(e)) {
            let { message: t } = V(
              `MISSING_OR_INVALID`,
              `respond() params: ${e}`
            );
            throw Error(t);
          }
          let { topic: n, response: r } = e;
          try {
            await this.isValidSessionTopic(n);
          } catch (n) {
            throw (
              ((t = e?.response) != null &&
                t.id &&
                this.cleanupAfterResponse(e),
              n)
            );
          }
          if (!RS(r)) {
            let { message: e } = V(
              `MISSING_OR_INVALID`,
              `respond() response: ${JSON.stringify(r)}`
            );
            throw Error(e);
          }
          let i = this.client.pendingRequest.get(r.id);
          if (i.topic !== n) {
            let { message: e } = V(
              `MISMATCHED_TOPIC`,
              `Request response topic mismatch. reqId: ${r.id}, expected topic: ${i.topic}, received topic: ${n}`
            );
            throw Error(e);
          }
        }),
        Q(this, `isValidPing`, async (e) => {
          if (!FS(e)) {
            let { message: t } = V(`MISSING_OR_INVALID`, `ping() params: ${e}`);
            throw Error(t);
          }
          let { topic: t } = e;
          await this.isValidSessionOrPairingTopic(t);
        }),
        Q(this, `isValidEmit`, async (e) => {
          if (!FS(e)) {
            let { message: t } = V(`MISSING_OR_INVALID`, `emit() params: ${e}`);
            throw Error(t);
          }
          let { topic: t, event: n, chainId: r } = e;
          await this.isValidSessionTopic(t);
          let { namespaces: i } = this.client.session.get(t);
          if (!BS(i, r)) {
            let { message: e } = V(
              `MISSING_OR_INVALID`,
              `emit() chainId: ${r}`
            );
            throw Error(e);
          }
          if (!zS(n)) {
            let { message: e } = V(
              `MISSING_OR_INVALID`,
              `emit() event: ${JSON.stringify(n)}`
            );
            throw Error(e);
          }
          if (!HS(i, r, n.name)) {
            let { message: e } = V(
              `MISSING_OR_INVALID`,
              `emit() event: ${JSON.stringify(n)}`
            );
            throw Error(e);
          }
        }),
        Q(this, `isValidDisconnect`, async (e) => {
          if (!FS(e)) {
            let { message: t } = V(
              `MISSING_OR_INVALID`,
              `disconnect() params: ${e}`
            );
            throw Error(t);
          }
          let { topic: t } = e;
          await this.isValidSessionOrPairingTopic(t);
        }),
        Q(this, `isValidAuthenticate`, (e) => {
          let { chains: t, uri: n, domain: r, nonce: i } = e;
          if (!Array.isArray(t) || t.length === 0)
            throw Error(`chains is required and must be a non-empty array`);
          if (!mS(n, !1)) throw Error(`uri is required parameter`);
          if (!mS(r, !1)) throw Error(`domain is required parameter`);
          if (!mS(i, !1)) throw Error(`nonce is required parameter`);
          if ([...new Set(t.map((e) => dm(e).namespace))].length > 1)
            throw Error(
              `Multi-namespace requests are not supported. Please request single namespace only.`
            );
          let { namespace: a } = dm(t[0]);
          if (a !== `eip155`)
            throw Error(
              `Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.`
            );
        }),
        Q(this, `getVerifyContext`, async (e) => {
          let {
              attestationId: t,
              hash: n,
              encryptedId: r,
              metadata: i,
              transportType: a,
            } = e,
            o = {
              verified: {
                verifyUrl: i.verifyUrl || `https://verify.walletconnect.org`,
                validation: `UNKNOWN`,
                origin: i.url || ``,
              },
            };
          try {
            if (a === K.link_mode) {
              let e = this.getAppLinkIfEnabled(i, a);
              return (
                (o.verified.validation =
                  e && new URL(e).origin === new URL(i.url).origin
                    ? `VALID`
                    : `INVALID`),
                o
              );
            }
            let e = await this.client.core.verify.resolve({
              attestationId: t,
              hash: n,
              encryptedId: r,
              verifyUrl: i.verifyUrl,
            });
            e &&
              ((o.verified.origin = e.origin),
              (o.verified.isScam = e.isScam),
              (o.verified.validation =
                e.origin === new URL(i.url).origin ? `VALID` : `INVALID`));
          } catch (e) {
            this.client.logger.warn(e);
          }
          return (
            this.client.logger.debug(`Verify context: ${JSON.stringify(o)}`), o
          );
        }),
        Q(this, `validateSessionProps`, (e, t) => {
          Object.values(e).forEach((n, r) => {
            if (n == null) {
              let { message: i } = V(
                `MISSING_OR_INVALID`,
                `${t} must contain an existing value for each key. Received: ${n} for key ${
                  Object.keys(e)[r]
                }`
              );
              throw Error(i);
            }
          });
        }),
        Q(this, `getPendingAuthRequest`, (e) => {
          let t = this.client.auth.requests.get(e);
          return typeof t == `object` ? t : void 0;
        }),
        Q(this, `addToRecentlyDeleted`, (e, t) => {
          if (
            (this.recentlyDeletedMap.set(e, t),
            this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
          ) {
            let e = 0,
              t = this.recentlyDeletedLimit / 2;
            for (let n of this.recentlyDeletedMap.keys()) {
              if (e++ >= t) break;
              this.recentlyDeletedMap.delete(n);
            }
          }
        }),
        Q(this, `checkRecentlyDeleted`, (e) => {
          let t = this.recentlyDeletedMap.get(e);
          if (t) {
            let { message: n } = V(
              `MISSING_OR_INVALID`,
              `Record was recently deleted - ${t}: ${e}`
            );
            throw Error(n);
          }
        }),
        Q(this, `isLinkModeEnabled`, (e, t) =>
          !e || t !== K.link_mode
            ? !1
            : this.client.metadata?.redirect?.linkMode === !0 &&
              this.client.metadata?.redirect?.universal !== void 0 &&
              this.client.metadata?.redirect?.universal !== `` &&
              e?.redirect?.universal !== void 0 &&
              e?.redirect?.universal !== `` &&
              e?.redirect?.linkMode === !0 &&
              this.client.core.linkModeSupportedApps.includes(
                e.redirect.universal
              ) &&
              typeof (global == null ? void 0 : global.Linking) < `u`
        ),
        Q(this, `getAppLinkIfEnabled`, (e, t) =>
          this.isLinkModeEnabled(e, t) ? e?.redirect?.universal : void 0
        ),
        Q(this, `handleLinkModeMessage`, ({ url: e }) => {
          if (!e || !e.includes(`wc_ev`) || !e.includes(`topic`)) return;
          let t = nh(e, `topic`) || ``,
            n = decodeURIComponent(nh(e, `wc_ev`) || ``),
            r = this.client.session.keys.includes(t);
          r && this.client.session.update(t, { transportType: K.link_mode }),
            this.client.core.dispatchEnvelope({
              topic: t,
              message: n,
              sessionExists: r,
            });
        }),
        Q(this, `registerLinkModeListeners`, async () => {
          var e;
          if (
            ih() ||
            (Dm() && (e = this.client.metadata.redirect) != null && e.linkMode)
          ) {
            let e = global == null ? void 0 : global.Linking;
            if (typeof e < `u`) {
              e.addEventListener(
                `url`,
                this.handleLinkModeMessage,
                this.client.name
              );
              let t = await e.getInitialURL();
              t &&
                setTimeout(() => {
                  this.handleLinkModeMessage({ url: t });
                }, 50);
            }
          }
        }),
        Q(this, `getTVFApproveParams`, (e) => {
          try {
            return {
              approvedChains: eS(e.namespaces),
              approvedMethods: tS(e.namespaces),
              approvedEvents: nS(e.namespaces),
              sessionProperties: e.sessionProperties,
              scopedProperties: e.scopedProperties,
            };
          } catch (e) {
            return (
              this.client.logger.warn(e, `Error getting TVF approve params`), {}
            );
          }
        }),
        Q(this, `getTVFParams`, (e, t, n) => {
          var r;
          if (!((r = t.request) != null && r.method)) return {};
          let i = {
            correlationId: e,
            rpcMethods: [t.request.method],
            chainId: t.chainId,
          };
          try {
            (i.txHashes = this.extractTxHashesFromResult(t.request, n)),
              (i.contractAddresses = this.isValidContractData(t.request.params)
                ? [t.request.params?.[0]?.to]
                : []);
          } catch (e) {
            this.client.logger.warn(e, `Error getting TVF params`);
          }
          return i;
        }),
        Q(this, `isValidContractData`, (e) => {
          if (!e) return !1;
          try {
            let t = e?.data || e?.[0]?.data;
            if (!t.startsWith(`0x`)) return !1;
            let n = t.slice(2);
            return /^[0-9a-fA-F]*$/.test(n) ? n.length % 2 == 0 : !1;
          } catch {}
          return !1;
        }),
        Q(this, `extractTxHashesFromResult`, (e, t) => {
          try {
            if (!t) return [];
            let n = e.method,
              r = eA[n];
            if (n === `sui_signTransaction`) return [u_(t.transactionBytes)];
            if (n === `near_signTransaction`) return [d_(t)];
            if (n === `near_signTransactions`) return t.map((e) => d_(e));
            if (n === `xrpl_signTransactionFor` || n === `xrpl_signTransaction`)
              return [t.tx_json?.hash];
            if (n === `polkadot_signTransaction`)
              return [
                fC({
                  transaction: e.params.transactionPayload,
                  signature: t.signature,
                }),
              ];
            if (n === `algo_signTxn`)
              return dS(t) ? t.map((e) => p_(e)) : [p_(t)];
            if (n === `cosmos_signDirect`) return [h_(t)];
            if (n === `wallet_sendCalls`) return g_(t);
            if (typeof t == `string`) return [t];
            let i = t[r.key];
            if (dS(i))
              return n === `solana_signAllTransactions`
                ? i.map((e) => l_(e))
                : i;
            if (typeof i == `string`) return [i];
          } catch (e) {
            this.client.logger.warn(
              e,
              `Error extracting tx hashes from result`
            );
          }
          return [];
        });
    }
    async processPendingMessageEvents() {
      try {
        let e = this.client.session.keys,
          t = this.client.core.relayer.messages.getWithoutAck(e);
        for (let [e, n] of Object.entries(t))
          for (let t of n)
            try {
              await this.onProviderMessageEvent({
                topic: e,
                message: t,
                publishedAt: Date.now(),
              });
            } catch {
              this.client.logger.warn(
                `Error processing pending message event for topic: ${e}, message: ${t}`
              );
            }
      } catch (e) {
        this.client.logger.warn(e, `processPendingMessageEvents failed`);
      }
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = V(`NOT_INITIALIZED`, this.name);
        throw Error(e);
      }
    }
    async confirmOnlineStateOrThrow() {
      await this.client.core.relayer.confirmOnlineStateOrThrow();
    }
    registerRelayerEvents() {
      this.client.core.relayer.on(aT.message, (e) => {
        this.onProviderMessageEvent(e);
      });
    }
    async onRelayMessage(e) {
      let { topic: t, message: n, attestation: r, transportType: i } = e,
        { publicKey: a } = this.client.auth.authKeys.keys.includes(cA)
          ? this.client.auth.authKeys.get(cA)
          : { responseTopic: void 0, publicKey: void 0 };
      try {
        let e = await this.client.core.crypto.decode(t, n, {
          receiverPublicKey: a,
          encoding: i === K.link_mode ? ex : $b,
        });
        Mw(e)
          ? (this.client.core.history.set(t, e),
            await this.onRelayEventRequest({
              topic: t,
              payload: e,
              attestation: r,
              transportType: i,
              encryptedId: ux(n),
            }))
          : Nw(e)
          ? (await this.client.core.history.resolve(e),
            await this.onRelayEventResponse({
              topic: t,
              payload: e,
              transportType: i,
            }),
            this.client.core.history.delete(t, e.id))
          : (this.client.logger.error(
              `onRelayMessage() -> unknown payload: ${JSON.stringify(e)}`
            ),
            await this.onRelayEventUnknownPayload({
              topic: t,
              payload: e,
              transportType: i,
            })),
          await this.client.core.relayer.messages.ack(t, n);
      } catch (e) {
        this.client.logger.error(
          `onRelayMessage() -> failed to process an inbound message: ${n}`
        ),
          this.client.logger.error(e);
      }
    }
    registerExpirerEvents() {
      this.client.core.expirer.on(vT.expired, async (e) => {
        let { topic: t, id: n } = Jm(e.target);
        if (n && this.client.pendingRequest.keys.includes(n))
          return await this.deletePendingSessionRequest(n, V(`EXPIRED`), !0);
        if (n && this.client.auth.requests.keys.includes(n))
          return await this.deletePendingAuthRequest(n, V(`EXPIRED`), !0);
        t
          ? this.client.session.keys.includes(t) &&
            (await this.deleteSession({ topic: t, expirerHasDeleted: !0 }),
            this.client.events.emit(`session_expire`, { topic: t }))
          : n &&
            (await this.deleteProposal(n, !0),
            this.client.events.emit(`proposal_expire`, { id: n }));
      });
    }
    registerPairingEvents() {
      this.client.core.pairing.events.on(mT.create, (e) =>
        this.onPairingCreated(e)
      ),
        this.client.core.pairing.events.on(mT.delete, (e) => {
          this.addToRecentlyDeleted(e.topic, `pairing`);
        });
    }
    isValidPairingTopic(e) {
      if (!mS(e, !1)) {
        let { message: t } = V(
          `MISSING_OR_INVALID`,
          `pairing topic should be a string: ${e}`
        );
        throw Error(t);
      }
      if (!this.client.core.pairing.pairings.keys.includes(e)) {
        let { message: t } = V(
          `NO_MATCHING_KEY`,
          `pairing topic doesn't exist: ${e}`
        );
        throw Error(t);
      }
      if (Xm(this.client.core.pairing.pairings.get(e).expiry)) {
        let { message: t } = V(`EXPIRED`, `pairing topic: ${e}`);
        throw Error(t);
      }
    }
    async isValidSessionTopic(e) {
      if (!mS(e, !1)) {
        let { message: t } = V(
          `MISSING_OR_INVALID`,
          `session topic should be a string: ${e}`
        );
        throw Error(t);
      }
      if (
        (this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e))
      ) {
        let { message: t } = V(
          `NO_MATCHING_KEY`,
          `session topic doesn't exist: ${e}`
        );
        throw Error(t);
      }
      if (Xm(this.client.session.get(e).expiry)) {
        await this.deleteSession({ topic: e });
        let { message: t } = V(`EXPIRED`, `session topic: ${e}`);
        throw Error(t);
      }
      if (!this.client.core.crypto.keychain.has(e)) {
        let { message: t } = V(
          `MISSING_OR_INVALID`,
          `session topic does not exist in keychain: ${e}`
        );
        throw (await this.deleteSession({ topic: e }), Error(t));
      }
    }
    async isValidSessionOrPairingTopic(e) {
      if ((this.checkRecentlyDeleted(e), this.client.session.keys.includes(e)))
        await this.isValidSessionTopic(e);
      else if (this.client.core.pairing.pairings.keys.includes(e))
        this.isValidPairingTopic(e);
      else if (mS(e, !1)) {
        let { message: t } = V(
          `NO_MATCHING_KEY`,
          `session or pairing topic doesn't exist: ${e}`
        );
        throw Error(t);
      } else {
        let { message: t } = V(
          `MISSING_OR_INVALID`,
          `session or pairing topic should be a string: ${e}`
        );
        throw Error(t);
      }
    }
    async isValidProposalId(e) {
      if (!PS(e)) {
        let { message: t } = V(
          `MISSING_OR_INVALID`,
          `proposal id should be a number: ${e}`
        );
        throw Error(t);
      }
      if (!this.client.proposal.keys.includes(e)) {
        let { message: t } = V(
          `NO_MATCHING_KEY`,
          `proposal id doesn't exist: ${e}`
        );
        throw Error(t);
      }
      if (Xm(this.client.proposal.get(e).expiryTimestamp)) {
        await this.deleteProposal(e);
        let { message: t } = V(`EXPIRED`, `proposal id: ${e}`);
        throw Error(t);
      }
    }
    validateRequestExpiry(e) {
      if (e && !qS(e, Qk)) {
        let { message: t } = V(
          `MISSING_OR_INVALID`,
          `request() expiry: ${e}. Expiry must be a number (in seconds) between ${Qk.min} and ${Qk.max}`
        );
        throw Error(t);
      }
    }
  },
  vA = class extends sk {
    constructor(e, t) {
      super(e, t, Kk, Uk), (this.core = e), (this.logger = t);
    }
  },
  yA = class extends sk {
    constructor(e, t) {
      super(e, t, Jk, Uk), (this.core = e), (this.logger = t);
    }
  },
  bA = class extends sk {
    constructor(e, t) {
      super(e, t, tA, Uk, (e) => e.id), (this.core = e), (this.logger = t);
    }
  },
  xA = class extends sk {
    constructor(e, t) {
      super(e, t, iA, sA, () => cA), (this.core = e), (this.logger = t);
    }
  },
  SA = class extends sk {
    constructor(e, t) {
      super(e, t, aA, sA), (this.core = e), (this.logger = t);
    }
  },
  CA = class extends sk {
    constructor(e, t) {
      super(e, t, oA, sA, (e) => e.id), (this.core = e), (this.logger = t);
    }
  },
  wA = Object.defineProperty,
  TA = (e, t, n) =>
    t in e
      ? wA(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  EA = (e, t, n) => TA(e, typeof t == `symbol` ? t : t + ``, n),
  DA = class {
    constructor(e, t) {
      (this.core = e),
        (this.logger = t),
        EA(this, `authKeys`),
        EA(this, `pairingTopics`),
        EA(this, `requests`),
        (this.authKeys = new xA(this.core, this.logger)),
        (this.pairingTopics = new SA(this.core, this.logger)),
        (this.requests = new CA(this.core, this.logger));
    }
    async init() {
      await this.authKeys.init(),
        await this.pairingTopics.init(),
        await this.requests.init();
    }
  },
  OA = Object.defineProperty,
  kA = (e, t, n) =>
    t in e
      ? OA(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  $ = (e, t, n) => kA(e, typeof t == `symbol` ? t : t + ``, n),
  AA = class e extends Ur {
    constructor(e) {
      super(e),
        $(this, `protocol`, `wc`),
        $(this, `version`, 2),
        $(this, `name`, Wk.name),
        $(this, `metadata`),
        $(this, `core`),
        $(this, `logger`),
        $(this, `events`, new Dn.EventEmitter()),
        $(this, `engine`),
        $(this, `session`),
        $(this, `proposal`),
        $(this, `pendingRequest`),
        $(this, `auth`),
        $(this, `signConfig`),
        $(this, `on`, (e, t) => this.events.on(e, t)),
        $(this, `once`, (e, t) => this.events.once(e, t)),
        $(this, `off`, (e, t) => this.events.off(e, t)),
        $(this, `removeListener`, (e, t) => this.events.removeListener(e, t)),
        $(this, `removeAllListeners`, (e) => this.events.removeAllListeners(e)),
        $(this, `connect`, async (e) => {
          try {
            return await this.engine.connect(e);
          } catch (e) {
            throw (this.logger.error(e.message), e);
          }
        }),
        $(this, `pair`, async (e) => {
          try {
            return await this.engine.pair(e);
          } catch (e) {
            throw (this.logger.error(e.message), e);
          }
        }),
        $(this, `approve`, async (e) => {
          try {
            return await this.engine.approve(e);
          } catch (e) {
            throw (this.logger.error(e.message), e);
          }
        }),
        $(this, `reject`, async (e) => {
          try {
            return await this.engine.reject(e);
          } catch (e) {
            throw (this.logger.error(e.message), e);
          }
        }),
        $(this, `update`, async (e) => {
          try {
            return await this.engine.update(e);
          } catch (e) {
            throw (this.logger.error(e.message), e);
          }
        }),
        $(this, `extend`, async (e) => {
          try {
            return await this.engine.extend(e);
          } catch (e) {
            throw (this.logger.error(e.message), e);
          }
        }),
        $(this, `request`, async (e) => {
          try {
            return await this.engine.request(e);
          } catch (e) {
            throw (this.logger.error(e.message), e);
          }
        }),
        $(this, `respond`, async (e) => {
          try {
            return await this.engine.respond(e);
          } catch (e) {
            throw (this.logger.error(e.message), e);
          }
        }),
        $(this, `ping`, async (e) => {
          try {
            return await this.engine.ping(e);
          } catch (e) {
            throw (this.logger.error(e.message), e);
          }
        }),
        $(this, `emit`, async (e) => {
          try {
            return await this.engine.emit(e);
          } catch (e) {
            throw (this.logger.error(e.message), e);
          }
        }),
        $(this, `disconnect`, async (e) => {
          try {
            return await this.engine.disconnect(e);
          } catch (e) {
            throw (this.logger.error(e.message), e);
          }
        }),
        $(this, `find`, (e) => {
          try {
            return this.engine.find(e);
          } catch (e) {
            throw (this.logger.error(e.message), e);
          }
        }),
        $(this, `getPendingSessionRequests`, () => {
          try {
            return this.engine.getPendingSessionRequests();
          } catch (e) {
            throw (this.logger.error(e.message), e);
          }
        }),
        $(this, `authenticate`, async (e, t) => {
          try {
            return await this.engine.authenticate(e, t);
          } catch (e) {
            throw (this.logger.error(e.message), e);
          }
        }),
        $(this, `formatAuthMessage`, (e) => {
          try {
            return this.engine.formatAuthMessage(e);
          } catch (e) {
            throw (this.logger.error(e.message), e);
          }
        }),
        $(this, `approveSessionAuthenticate`, async (e) => {
          try {
            return await this.engine.approveSessionAuthenticate(e);
          } catch (e) {
            throw (this.logger.error(e.message), e);
          }
        }),
        $(this, `rejectSessionAuthenticate`, async (e) => {
          try {
            return await this.engine.rejectSessionAuthenticate(e);
          } catch (e) {
            throw (this.logger.error(e.message), e);
          }
        }),
        (this.name = e?.name || Wk.name),
        (this.metadata = Pm(e?.metadata)),
        (this.signConfig = e?.signConfig);
      let t = pC({ logger: e?.logger || Wk.logger, name: this.name });
      (this.logger = t),
        (this.core = e?.core || new Vk(e)),
        (this.session = new yA(this.core, this.logger)),
        (this.proposal = new vA(this.core, this.logger)),
        (this.pendingRequest = new bA(this.core, this.logger)),
        (this.engine = new _A(this)),
        (this.auth = new DA(this.core, this.logger));
    }
    static async init(t) {
      let n = new e(t);
      return await n.initialize(), n;
    }
    get context() {
      return Lt(this.logger);
    }
    get pairing() {
      return this.core.pairing.pairings;
    }
    async initialize() {
      this.logger.trace(`Initialized`);
      try {
        await this.core.start(),
          await this.session.init(),
          await this.proposal.init(),
          await this.pendingRequest.init(),
          await this.auth.init(),
          await this.engine.init(),
          this.logger.info(`SignClient Initialization Success`);
      } catch (e) {
        throw (
          (this.logger.info(`SignClient Initialization Failure`),
          this.logger.error(e.message),
          e)
        );
      }
    }
  },
  jA = r(
    a((e, t) => {
      var n =
          (typeof globalThis < `u` && globalThis) ||
          (typeof self < `u` && self) ||
          (typeof global < `u` && global),
        r = (function () {
          function e() {
            (this.fetch = !1), (this.DOMException = n.DOMException);
          }
          return (e.prototype = n), new e();
        })();
      (function (e) {
        (function (t) {
          var n =
              (e !== void 0 && e) ||
              (typeof self < `u` && self) ||
              (typeof global < `u` && global) ||
              {},
            r = {
              searchParams: `URLSearchParams` in n,
              iterable: `Symbol` in n && `iterator` in Symbol,
              blob:
                `FileReader` in n &&
                `Blob` in n &&
                (function () {
                  try {
                    return new Blob(), !0;
                  } catch {
                    return !1;
                  }
                })(),
              formData: `FormData` in n,
              arrayBuffer: `ArrayBuffer` in n,
            };
          function i(e) {
            return e && DataView.prototype.isPrototypeOf(e);
          }
          if (r.arrayBuffer)
            var a = [
                `[object Int8Array]`,
                `[object Uint8Array]`,
                `[object Uint8ClampedArray]`,
                `[object Int16Array]`,
                `[object Uint16Array]`,
                `[object Int32Array]`,
                `[object Uint32Array]`,
                `[object Float32Array]`,
                `[object Float64Array]`,
              ],
              o =
                ArrayBuffer.isView ||
                function (e) {
                  return e && a.indexOf(Object.prototype.toString.call(e)) > -1;
                };
          function s(e) {
            if (
              (typeof e != `string` && (e = String(e)),
              /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === ``)
            )
              throw TypeError(
                `Invalid character in header field name: "` + e + `"`
              );
            return e.toLowerCase();
          }
          function c(e) {
            return typeof e != `string` && (e = String(e)), e;
          }
          function l(e) {
            var t = {
              next: function () {
                var t = e.shift();
                return { done: t === void 0, value: t };
              },
            };
            return (
              r.iterable &&
                (t[Symbol.iterator] = function () {
                  return t;
                }),
              t
            );
          }
          function u(e) {
            (this.map = {}),
              e instanceof u
                ? e.forEach(function (e, t) {
                    this.append(t, e);
                  }, this)
                : Array.isArray(e)
                ? e.forEach(function (e) {
                    if (e.length != 2)
                      throw TypeError(
                        `Headers constructor: expected name/value pair to be length 2, found` +
                          e.length
                      );
                    this.append(e[0], e[1]);
                  }, this)
                : e &&
                  Object.getOwnPropertyNames(e).forEach(function (t) {
                    this.append(t, e[t]);
                  }, this);
          }
          (u.prototype.append = function (e, t) {
            (e = s(e)), (t = c(t));
            var n = this.map[e];
            this.map[e] = n ? n + `, ` + t : t;
          }),
            (u.prototype.delete = function (e) {
              delete this.map[s(e)];
            }),
            (u.prototype.get = function (e) {
              return (e = s(e)), this.has(e) ? this.map[e] : null;
            }),
            (u.prototype.has = function (e) {
              return this.map.hasOwnProperty(s(e));
            }),
            (u.prototype.set = function (e, t) {
              this.map[s(e)] = c(t);
            }),
            (u.prototype.forEach = function (e, t) {
              for (var n in this.map)
                this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
            }),
            (u.prototype.keys = function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push(n);
                }),
                l(e)
              );
            }),
            (u.prototype.values = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t);
                }),
                l(e)
              );
            }),
            (u.prototype.entries = function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push([n, t]);
                }),
                l(e)
              );
            }),
            r.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
          function d(e) {
            if (!e._noBody) {
              if (e.bodyUsed) return Promise.reject(TypeError(`Already read`));
              e.bodyUsed = !0;
            }
          }
          function f(e) {
            return new Promise(function (t, n) {
              (e.onload = function () {
                t(e.result);
              }),
                (e.onerror = function () {
                  n(e.error);
                });
            });
          }
          function p(e) {
            var t = new FileReader(),
              n = f(t);
            return t.readAsArrayBuffer(e), n;
          }
          function m(e) {
            var t = new FileReader(),
              n = f(t),
              r = /charset=([A-Za-z0-9_-]+)/.exec(e.type),
              i = r ? r[1] : `utf-8`;
            return t.readAsText(e, i), n;
          }
          function h(e) {
            for (
              var t = new Uint8Array(e), n = Array(t.length), r = 0;
              r < t.length;
              r++
            )
              n[r] = String.fromCharCode(t[r]);
            return n.join(``);
          }
          function g(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer;
          }
          function _() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (e) {
                (this.bodyUsed = this.bodyUsed),
                  (this._bodyInit = e),
                  e
                    ? typeof e == `string`
                      ? (this._bodyText = e)
                      : r.blob && Blob.prototype.isPrototypeOf(e)
                      ? (this._bodyBlob = e)
                      : r.formData && FormData.prototype.isPrototypeOf(e)
                      ? (this._bodyFormData = e)
                      : r.searchParams &&
                        URLSearchParams.prototype.isPrototypeOf(e)
                      ? (this._bodyText = e.toString())
                      : r.arrayBuffer && r.blob && i(e)
                      ? ((this._bodyArrayBuffer = g(e.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : r.arrayBuffer &&
                        (ArrayBuffer.prototype.isPrototypeOf(e) || o(e))
                      ? (this._bodyArrayBuffer = g(e))
                      : (this._bodyText = e = Object.prototype.toString.call(e))
                    : ((this._noBody = !0), (this._bodyText = ``)),
                  this.headers.get(`content-type`) ||
                    (typeof e == `string`
                      ? this.headers.set(
                          `content-type`,
                          `text/plain;charset=UTF-8`
                        )
                      : this._bodyBlob && this._bodyBlob.type
                      ? this.headers.set(`content-type`, this._bodyBlob.type)
                      : r.searchParams &&
                        URLSearchParams.prototype.isPrototypeOf(e) &&
                        this.headers.set(
                          `content-type`,
                          `application/x-www-form-urlencoded;charset=UTF-8`
                        ));
              }),
              r.blob &&
                (this.blob = function () {
                  var e = d(this);
                  if (e) return e;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (this._bodyFormData)
                    throw Error(`could not read FormData body as blob`);
                  return Promise.resolve(new Blob([this._bodyText]));
                }),
              (this.arrayBuffer = function () {
                if (this._bodyArrayBuffer)
                  return (
                    d(this) ||
                    (ArrayBuffer.isView(this._bodyArrayBuffer)
                      ? Promise.resolve(
                          this._bodyArrayBuffer.buffer.slice(
                            this._bodyArrayBuffer.byteOffset,
                            this._bodyArrayBuffer.byteOffset +
                              this._bodyArrayBuffer.byteLength
                          )
                        )
                      : Promise.resolve(this._bodyArrayBuffer))
                  );
                if (r.blob) return this.blob().then(p);
                throw Error(`could not read as ArrayBuffer`);
              }),
              (this.text = function () {
                var e = d(this);
                if (e) return e;
                if (this._bodyBlob) return m(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(h(this._bodyArrayBuffer));
                if (this._bodyFormData)
                  throw Error(`could not read FormData body as text`);
                return Promise.resolve(this._bodyText);
              }),
              r.formData &&
                (this.formData = function () {
                  return this.text().then(x);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          var v = [
            `CONNECT`,
            `DELETE`,
            `GET`,
            `HEAD`,
            `OPTIONS`,
            `PATCH`,
            `POST`,
            `PUT`,
            `TRACE`,
          ];
          function y(e) {
            var t = e.toUpperCase();
            return v.indexOf(t) > -1 ? t : e;
          }
          function b(e, t) {
            if (!(this instanceof b))
              throw TypeError(
                `Please use the "new" operator, this DOM object constructor cannot be called as a function.`
              );
            t ||= {};
            var r = t.body;
            if (e instanceof b) {
              if (e.bodyUsed) throw TypeError(`Already read`);
              (this.url = e.url),
                (this.credentials = e.credentials),
                t.headers || (this.headers = new u(e.headers)),
                (this.method = e.method),
                (this.mode = e.mode),
                (this.signal = e.signal),
                !r &&
                  e._bodyInit != null &&
                  ((r = e._bodyInit), (e.bodyUsed = !0));
            } else this.url = String(e);
            if (
              ((this.credentials =
                t.credentials || this.credentials || `same-origin`),
              (t.headers || !this.headers) && (this.headers = new u(t.headers)),
              (this.method = y(t.method || this.method || `GET`)),
              (this.mode = t.mode || this.mode || null),
              (this.signal =
                t.signal ||
                this.signal ||
                (function () {
                  if (`AbortController` in n)
                    return new AbortController().signal;
                })()),
              (this.referrer = null),
              (this.method === `GET` || this.method === `HEAD`) && r)
            )
              throw TypeError(`Body not allowed for GET or HEAD requests`);
            if (
              (this._initBody(r),
              (this.method === `GET` || this.method === `HEAD`) &&
                (t.cache === `no-store` || t.cache === `no-cache`))
            ) {
              var i = /([?&])_=[^&]*/;
              if (i.test(this.url))
                this.url = this.url.replace(i, `$1_=` + new Date().getTime());
              else {
                var a = /\?/;
                this.url +=
                  (a.test(this.url) ? `&` : `?`) + `_=` + new Date().getTime();
              }
            }
          }
          b.prototype.clone = function () {
            return new b(this, { body: this._bodyInit });
          };
          function x(e) {
            var t = new FormData();
            return (
              e
                .trim()
                .split(`&`)
                .forEach(function (e) {
                  if (e) {
                    var n = e.split(`=`),
                      r = n.shift().replace(/\+/g, ` `),
                      i = n.join(`=`).replace(/\+/g, ` `);
                    t.append(decodeURIComponent(r), decodeURIComponent(i));
                  }
                }),
              t
            );
          }
          function S(e) {
            var t = new u();
            return (
              e
                .replace(/\r?\n[\t ]+/g, ` `)
                .split(`\r`)
                .map(function (e) {
                  return e.indexOf(`
`) === 0
                    ? e.substr(1, e.length)
                    : e;
                })
                .forEach(function (e) {
                  var n = e.split(`:`),
                    r = n.shift().trim();
                  if (r) {
                    var i = n.join(`:`).trim();
                    try {
                      t.append(r, i);
                    } catch (e) {
                      console.warn(`Response ` + e.message);
                    }
                  }
                }),
              t
            );
          }
          _.call(b.prototype);
          function C(e, t) {
            if (!(this instanceof C))
              throw TypeError(
                `Please use the "new" operator, this DOM object constructor cannot be called as a function.`
              );
            if (
              ((t ||= {}),
              (this.type = `default`),
              (this.status = t.status === void 0 ? 200 : t.status),
              this.status < 200 || this.status > 599)
            )
              throw RangeError(
                `Failed to construct 'Response': The status provided (0) is outside the range [200, 599].`
              );
            (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText =
                t.statusText === void 0 ? `` : `` + t.statusText),
              (this.headers = new u(t.headers)),
              (this.url = t.url || ``),
              this._initBody(e);
          }
          _.call(C.prototype),
            (C.prototype.clone = function () {
              return new C(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new u(this.headers),
                url: this.url,
              });
            }),
            (C.error = function () {
              var e = new C(null, { status: 200, statusText: `` });
              return (e.ok = !1), (e.status = 0), (e.type = `error`), e;
            });
          var w = [301, 302, 303, 307, 308];
          (C.redirect = function (e, t) {
            if (w.indexOf(t) === -1) throw RangeError(`Invalid status code`);
            return new C(null, { status: t, headers: { location: e } });
          }),
            (t.DOMException = n.DOMException);
          try {
            new t.DOMException();
          } catch {
            (t.DOMException = function (e, t) {
              (this.message = e), (this.name = t);
              var n = Error(e);
              this.stack = n.stack;
            }),
              (t.DOMException.prototype = Object.create(Error.prototype)),
              (t.DOMException.prototype.constructor = t.DOMException);
          }
          function T(e, i) {
            return new Promise(function (a, o) {
              var l = new b(e, i);
              if (l.signal && l.signal.aborted)
                return o(new t.DOMException(`Aborted`, `AbortError`));
              var d = new XMLHttpRequest();
              function f() {
                d.abort();
              }
              (d.onload = function () {
                var e = {
                  statusText: d.statusText,
                  headers: S(d.getAllResponseHeaders() || ``),
                };
                (e.status =
                  l.url.indexOf(`file://`) === 0 &&
                  (d.status < 200 || d.status > 599)
                    ? 200
                    : d.status),
                  (e.url =
                    `responseURL` in d
                      ? d.responseURL
                      : e.headers.get(`X-Request-URL`));
                var t = `response` in d ? d.response : d.responseText;
                setTimeout(function () {
                  a(new C(t, e));
                }, 0);
              }),
                (d.onerror = function () {
                  setTimeout(function () {
                    o(TypeError(`Network request failed`));
                  }, 0);
                }),
                (d.ontimeout = function () {
                  setTimeout(function () {
                    o(TypeError(`Network request timed out`));
                  }, 0);
                }),
                (d.onabort = function () {
                  setTimeout(function () {
                    o(new t.DOMException(`Aborted`, `AbortError`));
                  }, 0);
                });
              function p(e) {
                try {
                  return e === `` && n.location.href ? n.location.href : e;
                } catch {
                  return e;
                }
              }
              if (
                (d.open(l.method, p(l.url), !0),
                l.credentials === `include`
                  ? (d.withCredentials = !0)
                  : l.credentials === `omit` && (d.withCredentials = !1),
                `responseType` in d &&
                  (r.blob
                    ? (d.responseType = `blob`)
                    : r.arrayBuffer && (d.responseType = `arraybuffer`)),
                i &&
                  typeof i.headers == `object` &&
                  !(
                    i.headers instanceof u ||
                    (n.Headers && i.headers instanceof n.Headers)
                  ))
              ) {
                var m = [];
                Object.getOwnPropertyNames(i.headers).forEach(function (e) {
                  m.push(s(e)), d.setRequestHeader(e, c(i.headers[e]));
                }),
                  l.headers.forEach(function (e, t) {
                    m.indexOf(t) === -1 && d.setRequestHeader(t, e);
                  });
              } else
                l.headers.forEach(function (e, t) {
                  d.setRequestHeader(t, e);
                });
              l.signal &&
                (l.signal.addEventListener(`abort`, f),
                (d.onreadystatechange = function () {
                  d.readyState === 4 &&
                    l.signal.removeEventListener(`abort`, f);
                })),
                d.send(l._bodyInit === void 0 ? null : l._bodyInit);
            });
          }
          return (
            (T.polyfill = !0),
            n.fetch ||
              ((n.fetch = T),
              (n.Headers = u),
              (n.Request = b),
              (n.Response = C)),
            (t.Headers = u),
            (t.Request = b),
            (t.Response = C),
            (t.fetch = T),
            Object.defineProperty(t, "__esModule", { value: !0 }),
            t
          );
        })({});
      })(r),
        (r.fetch.ponyfill = !0),
        delete r.fetch.polyfill;
      var i = n.fetch ? n : r;
      (e = i.fetch),
        (e.default = i.fetch),
        (e.fetch = i.fetch),
        (e.Headers = i.Headers),
        (e.Request = i.Request),
        (e.Response = i.Response),
        (t.exports = e);
    })()
  ),
  MA = Object.defineProperty,
  NA = Object.defineProperties,
  PA = Object.getOwnPropertyDescriptors,
  FA = Object.getOwnPropertySymbols,
  IA = Object.prototype.hasOwnProperty,
  LA = Object.prototype.propertyIsEnumerable,
  RA = (e, t, n) =>
    t in e
      ? MA(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  zA = (e, t) => {
    for (var n in (t ||= {})) IA.call(t, n) && RA(e, n, t[n]);
    if (FA) for (var n of FA(t)) LA.call(t, n) && RA(e, n, t[n]);
    return e;
  },
  BA = (e, t) => NA(e, PA(t)),
  VA = {
    headers: { Accept: `application/json`, "Content-Type": `application/json` },
    method: `POST`,
  },
  HA = 10,
  UA = class {
    constructor(e, t = !1) {
      if (
        ((this.url = e),
        (this.disableProviderPing = t),
        (this.events = new Dn.EventEmitter()),
        (this.isAvailable = !1),
        (this.registering = !1),
        !Ow(e))
      )
        throw Error(
          `Provided URL is not compatible with HTTP connection: ${e}`
        );
      (this.url = e), (this.disableProviderPing = t);
    }
    get connected() {
      return this.isAvailable;
    }
    get connecting() {
      return this.registering;
    }
    on(e, t) {
      this.events.on(e, t);
    }
    once(e, t) {
      this.events.once(e, t);
    }
    off(e, t) {
      this.events.off(e, t);
    }
    removeListener(e, t) {
      this.events.removeListener(e, t);
    }
    async open(e = this.url) {
      await this.register(e);
    }
    async close() {
      if (!this.isAvailable) throw Error(`Connection already closed`);
      this.onClose();
    }
    async send(e) {
      this.isAvailable || (await this.register());
      try {
        let t = cr(e),
          n = await (
            await (0, jA.default)(this.url, BA(zA({}, VA), { body: t }))
          ).json();
        this.onPayload({ data: n });
      } catch (t) {
        this.onError(e.id, t);
      }
    }
    async register(e = this.url) {
      if (!Ow(e))
        throw Error(
          `Provided URL is not compatible with HTTP connection: ${e}`
        );
      if (this.registering) {
        let e = this.events.getMaxListeners();
        return (
          (this.events.listenerCount(`register_error`) >= e ||
            this.events.listenerCount(`open`) >= e) &&
            this.events.setMaxListeners(e + 1),
          new Promise((e, t) => {
            this.events.once(`register_error`, (e) => {
              this.resetMaxListeners(), t(e);
            }),
              this.events.once(`open`, () => {
                if ((this.resetMaxListeners(), typeof this.isAvailable > `u`))
                  return t(Error(`HTTP connection is missing or invalid`));
                e();
              });
          })
        );
      }
      (this.url = e), (this.registering = !0);
      try {
        if (!this.disableProviderPing) {
          let t = cr({ id: 1, jsonrpc: `2.0`, method: `test`, params: [] });
          await (0, jA.default)(e, BA(zA({}, VA), { body: t }));
        }
        this.onOpen();
      } catch (e) {
        let t = this.parseError(e);
        throw (this.events.emit(`register_error`, t), this.onClose(), t);
      }
    }
    onOpen() {
      (this.isAvailable = !0),
        (this.registering = !1),
        this.events.emit(`open`);
    }
    onClose() {
      (this.isAvailable = !1),
        (this.registering = !1),
        this.events.emit(`close`);
    }
    onPayload(e) {
      if (typeof e.data > `u`) return;
      let t = typeof e.data == `string` ? sr(e.data) : e.data;
      this.events.emit(`payload`, t);
    }
    onError(e, t) {
      let n = this.parseError(t),
        r = pw(e, n.message || n.toString());
      this.events.emit(`payload`, r);
    }
    parseError(e, t = this.url) {
      return AC(e, t, `HTTP`);
    }
    resetMaxListeners() {
      this.events.getMaxListeners() > HA && this.events.setMaxListeners(HA);
    }
  };
function WA(e) {
  return Number.isSafeInteger(e) && e >= 0;
}
function GA(e) {
  return e != null && typeof e != `function` && WA(e.length);
}
function KA(e) {
  return e === `__proto__`;
}
function qA(e) {
  return e == null || (typeof e != `object` && typeof e != `function`);
}
function JA(e) {
  return Object.getOwnPropertySymbols(e).filter((t) =>
    Object.prototype.propertyIsEnumerable.call(e, t)
  );
}
function YA(e) {
  return e == null
    ? e === void 0
      ? `[object Undefined]`
      : `[object Null]`
    : Object.prototype.toString.call(e);
}
var XA = `[object RegExp]`,
  ZA = `[object String]`,
  QA = `[object Number]`,
  $A = `[object Boolean]`,
  ej = `[object Arguments]`,
  tj = `[object Symbol]`,
  nj = `[object Date]`,
  rj = `[object Map]`,
  ij = `[object Set]`,
  aj = `[object Array]`,
  oj = `[object ArrayBuffer]`,
  sj = `[object Object]`,
  cj = `[object DataView]`,
  lj = `[object Uint8Array]`,
  uj = `[object Uint8ClampedArray]`,
  dj = `[object Uint16Array]`,
  fj = `[object Uint32Array]`,
  pj = `[object Int8Array]`,
  mj = `[object Int16Array]`,
  hj = `[object Int32Array]`,
  gj = `[object Float32Array]`,
  _j = `[object Float64Array]`;
function vj(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function yj(e, t) {
  return bj(e, void 0, e, new Map(), t);
}
function bj(e, t, n, r = new Map(), i = void 0) {
  let a = i?.(e, t, n, r);
  if (a !== void 0) return a;
  if (qA(e)) return e;
  if (r.has(e)) return r.get(e);
  if (Array.isArray(e)) {
    let t = Array(e.length);
    r.set(e, t);
    for (let a = 0; a < e.length; a++) t[a] = bj(e[a], a, n, r, i);
    return (
      Object.hasOwn(e, `index`) && (t.index = e.index),
      Object.hasOwn(e, `input`) && (t.input = e.input),
      t
    );
  }
  if (e instanceof Date) return new Date(e.getTime());
  if (e instanceof RegExp) {
    let t = new RegExp(e.source, e.flags);
    return (t.lastIndex = e.lastIndex), t;
  }
  if (e instanceof Map) {
    let t = new Map();
    r.set(e, t);
    for (let [a, o] of e) t.set(a, bj(o, a, n, r, i));
    return t;
  }
  if (e instanceof Set) {
    let t = new Set();
    r.set(e, t);
    for (let a of e) t.add(bj(a, void 0, n, r, i));
    return t;
  }
  if (typeof Buffer < `u` && Buffer.isBuffer(e)) return e.subarray();
  if (vj(e)) {
    let t = new (Object.getPrototypeOf(e).constructor)(e.length);
    r.set(e, t);
    for (let a = 0; a < e.length; a++) t[a] = bj(e[a], a, n, r, i);
    return t;
  }
  if (
    e instanceof ArrayBuffer ||
    (typeof SharedArrayBuffer < `u` && e instanceof SharedArrayBuffer)
  )
    return e.slice(0);
  if (e instanceof DataView) {
    let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
    return r.set(e, t), xj(t, e, n, r, i), t;
  }
  if (typeof File < `u` && e instanceof File) {
    let t = new File([e], e.name, { type: e.type });
    return r.set(e, t), xj(t, e, n, r, i), t;
  }
  if (typeof Blob < `u` && e instanceof Blob) {
    let t = new Blob([e], { type: e.type });
    return r.set(e, t), xj(t, e, n, r, i), t;
  }
  if (e instanceof Error) {
    let t = new e.constructor();
    return (
      r.set(e, t),
      (t.message = e.message),
      (t.name = e.name),
      (t.stack = e.stack),
      (t.cause = e.cause),
      xj(t, e, n, r, i),
      t
    );
  }
  if (e instanceof Boolean) {
    let t = new Boolean(e.valueOf());
    return r.set(e, t), xj(t, e, n, r, i), t;
  }
  if (e instanceof Number) {
    let t = new Number(e.valueOf());
    return r.set(e, t), xj(t, e, n, r, i), t;
  }
  if (e instanceof String) {
    let t = new String(e.valueOf());
    return r.set(e, t), xj(t, e, n, r, i), t;
  }
  if (typeof e == `object` && Sj(e)) {
    let t = Object.create(Object.getPrototypeOf(e));
    return r.set(e, t), xj(t, e, n, r, i), t;
  }
  return e;
}
function xj(e, t, n = e, r, i) {
  let a = [...Object.keys(t), ...JA(t)];
  for (let o = 0; o < a.length; o++) {
    let s = a[o],
      c = Object.getOwnPropertyDescriptor(e, s);
    (c == null || c.writable) && (e[s] = bj(t[s], s, n, r, i));
  }
}
function Sj(e) {
  switch (YA(e)) {
    case ej:
    case aj:
    case oj:
    case cj:
    case $A:
    case nj:
    case gj:
    case _j:
    case pj:
    case mj:
    case hj:
    case rj:
    case QA:
    case sj:
    case XA:
    case ij:
    case ZA:
    case tj:
    case lj:
    case uj:
    case dj:
    case fj:
      return !0;
    default:
      return !1;
  }
}
function Cj(e, t) {
  return yj(e, (n, r, i, a) => {
    let o = t?.(n, r, i, a);
    if (o !== void 0) return o;
    if (typeof e == `object`) {
      if (YA(e) === sj && typeof e.constructor != `function`) {
        let t = {};
        return a.set(e, t), xj(t, e, i, a), t;
      }
      switch (Object.prototype.toString.call(e)) {
        case QA:
        case ZA:
        case $A: {
          let t = new e.constructor(e?.valueOf());
          return xj(t, e), t;
        }
        case ej: {
          let t = {};
          return (
            xj(t, e),
            (t.length = e.length),
            (t[Symbol.iterator] = e[Symbol.iterator]),
            t
          );
        }
        default:
          return;
      }
    }
  });
}
function wj(e) {
  return Cj(e);
}
function Tj(e) {
  return typeof e == `object` && !!e && YA(e) === `[object Arguments]`;
}
function Ej(e) {
  return typeof e == `object` && !!e;
}
function Dj(e) {
  return Ej(e) && GA(e);
}
function Oj() {}
function kj(e) {
  return vj(e);
}
function Aj(e) {
  if (typeof e != `object` || !e) return !1;
  if (Object.getPrototypeOf(e) === null) return !0;
  if (Object.prototype.toString.call(e) !== `[object Object]`) {
    let t = e[Symbol.toStringTag];
    return t == null ||
      !Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)?.writable
      ? !1
      : e.toString() === `[object ${t}]`;
  }
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function jj(e) {
  if (qA(e)) return e;
  if (
    Array.isArray(e) ||
    vj(e) ||
    e instanceof ArrayBuffer ||
    (typeof SharedArrayBuffer < `u` && e instanceof SharedArrayBuffer)
  )
    return e.slice(0);
  let t = Object.getPrototypeOf(e);
  if (t == null) return Object.assign(Object.create(t), e);
  let n = t.constructor;
  if (e instanceof Date || e instanceof Map || e instanceof Set)
    return new n(e);
  if (e instanceof RegExp) {
    let t = new n(e);
    return (t.lastIndex = e.lastIndex), t;
  }
  if (e instanceof DataView) return new n(e.buffer.slice(0));
  if (e instanceof Error) {
    let t;
    return (
      (t =
        e instanceof AggregateError
          ? new n(e.errors, e.message, { cause: e.cause })
          : new n(e.message, { cause: e.cause })),
      (t.stack = e.stack),
      Object.assign(t, e),
      t
    );
  }
  if (typeof File < `u` && e instanceof File)
    return new n([e], e.name, { type: e.type, lastModified: e.lastModified });
  if (typeof e == `object`) {
    let n = Object.create(t);
    return Object.assign(n, e);
  }
  return e;
}
function Mj(e, ...t) {
  let n = t.slice(0, -1),
    r = t[t.length - 1],
    i = e;
  for (let e = 0; e < n.length; e++) {
    let t = n[e];
    i = Nj(i, t, r, new Map());
  }
  return i;
}
function Nj(e, t, n, r) {
  if ((qA(e) && (e = Object(e)), typeof t != `object` || !t)) return e;
  if (r.has(t)) return jj(r.get(t));
  if ((r.set(t, e), Array.isArray(t))) {
    t = t.slice();
    for (let e = 0; e < t.length; e++) t[e] = t[e] ?? void 0;
  }
  let i = [...Object.keys(t), ...JA(t)];
  for (let a = 0; a < i.length; a++) {
    let o = i[a];
    if (KA(o)) continue;
    let s = t[o],
      c = e[o];
    if (
      (Tj(s) && (s = { ...s }),
      Tj(c) && (c = { ...c }),
      typeof Buffer < `u` && Buffer.isBuffer(s) && (s = wj(s)),
      Array.isArray(s))
    ) {
      if (Array.isArray(c)) {
        let e = [],
          t = Reflect.ownKeys(c);
        for (let n = 0; n < t.length; n++) {
          let r = t[n];
          e[r] = c[r];
        }
        c = e;
      } else if (Dj(c)) {
        let e = [];
        for (let t = 0; t < c.length; t++) e[t] = c[t];
        c = e;
      } else c = [];
    }
    let l = n(c, s, o, e, t, r);
    l === void 0
      ? Array.isArray(s) ||
        (Ej(c) && Ej(s) && (Aj(c) || Aj(s) || kj(c) || kj(s)))
        ? (e[o] = Nj(c, s, n, r))
        : c == null && Aj(s)
        ? (e[o] = Nj({}, s, n, r))
        : c == null && kj(s)
        ? (e[o] = wj(s))
        : (c === void 0 || s !== void 0) && (e[o] = s)
      : (e[o] = l);
  }
  return e;
}
function Pj(e, ...t) {
  return Mj(e, ...t, Oj);
}
var Fj = `error`,
  Ij = `wss://relay.walletconnect.org`,
  Lj = `wc`,
  Rj = `universal_provider`,
  zj = `${Lj}@2:${Rj}:`,
  Bj = `https://rpc.walletconnect.org/v1/`,
  Vj = `generic`,
  Hj = `${Bj}bundler`,
  Uj = `call_status`,
  Wj = 86400,
  Gj = { DEFAULT_CHAIN_CHANGED: `default_chain_changed` },
  Kj = Object.defineProperty,
  qj = Object.defineProperties,
  Jj = Object.getOwnPropertyDescriptors,
  Yj = Object.getOwnPropertySymbols,
  Xj = Object.prototype.hasOwnProperty,
  Zj = Object.prototype.propertyIsEnumerable,
  Qj = (e, t, n) =>
    t in e
      ? Kj(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  $j = (e, t) => {
    for (var n in (t ||= {})) Xj.call(t, n) && Qj(e, n, t[n]);
    if (Yj) for (var n of Yj(t)) Zj.call(t, n) && Qj(e, n, t[n]);
    return e;
  },
  eM = (e, t) => qj(e, Jj(t));
function tM(e, t, n) {
  let r = dm(e);
  return (
    t.rpcMap?.[r.reference] ||
    `${Bj}?chainId=${r.namespace}:${r.reference}&projectId=${n}`
  );
}
function nM(e) {
  return e.includes(`:`) ? e.split(`:`)[1] : e;
}
function rM(e) {
  return e.map((e) => `${e.split(`:`)[0]}:${e.split(`:`)[1]}`);
}
function iM(e, t) {
  let n = Object.keys(t.namespaces).filter((t) => t.includes(e));
  if (!n.length) return [];
  let r = [];
  return (
    n.forEach((e) => {
      let n = t.namespaces[e].accounts;
      r.push(...n);
    }),
    r
  );
}
function aM(e) {
  return Object.fromEntries(
    Object.entries(e).filter(
      ([e, t]) => t?.chains?.length && t?.chains?.length > 0
    )
  );
}
function oM(e = {}, t = {}) {
  return Pj(aM(sM(e)), aM(sM(t)));
}
function sM(e) {
  let t = {};
  if (!fS(e)) return t;
  for (let [n, r] of Object.entries(e)) {
    let e = aS(n) ? [n] : r.chains,
      i = r.methods || [],
      a = r.events || [],
      o = r.rpcMap || {},
      s = oS(n);
    (t[s] = eM($j($j({}, t[s]), r), {
      chains: Zm(e, t[s]?.chains),
      methods: Zm(i, t[s]?.methods),
      events: Zm(a, t[s]?.events),
    })),
      (fS(o) || fS(t[s]?.rpcMap || {})) &&
        (t[s].rpcMap = $j($j({}, o), t[s]?.rpcMap));
  }
  return t;
}
function cM(e) {
  return e.includes(`:`) ? e.split(`:`)[2] : e;
}
function lM(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) {
    let e = r.methods || [],
      i = r.events || [],
      a = r.accounts || [];
    t[n] = {
      chains: aS(n) ? [n] : r.chains ? r.chains : rM(r.accounts),
      methods: e,
      events: i,
      accounts: a,
    };
  }
  return t;
}
function uM(e) {
  return typeof e == `number`
    ? e
    : e.includes(`0x`)
    ? parseInt(e, 16)
    : ((e = e.includes(`:`) ? e.split(`:`)[1] : e),
      isNaN(Number(e)) ? e : Number(e));
}
function dM(e) {
  try {
    let t = JSON.parse(e);
    return typeof t == `object` && !!t && !Array.isArray(t);
  } catch {
    return !1;
  }
}
var fM = {},
  pM = (e) => fM[e],
  mM = (e, t) => {
    fM[e] = t;
  },
  hM = Object.defineProperty,
  gM = Object.getOwnPropertySymbols,
  _M = Object.prototype.hasOwnProperty,
  vM = Object.prototype.propertyIsEnumerable,
  yM = (e, t, n) =>
    t in e
      ? hM(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  bM = (e, t) => {
    for (var n in (t ||= {})) _M.call(t, n) && yM(e, n, t[n]);
    if (gM) for (var n of gM(t)) vM.call(t, n) && yM(e, n, t[n]);
    return e;
  },
  xM = `eip155`,
  SM = [
    `atomic`,
    `flow-control`,
    `paymasterService`,
    `sessionKeys`,
    `auxiliaryFunds`,
  ],
  CM = (e) => (e && e.startsWith(`0x`) ? BigInt(e).toString(10) : e),
  wM = (e) => (e && e.startsWith(`0x`) ? e : `0x${BigInt(e).toString(16)}`),
  TM = (e) =>
    Object.keys(e)
      .filter((e) => SM.includes(e))
      .reduce((t, n) => ((t[n] = EM(e[n])), t), {}),
  EM = (e) => (typeof e == `string` && dM(e) ? JSON.parse(e) : e),
  DM = (e, t, n) => {
    let { sessionProperties: r = {}, scopedProperties: i = {} } = e,
      a = {};
    if (!fS(i) && !fS(r)) return;
    let o = TM(r);
    for (let e of n) {
      let n = CM(e);
      if (!n) continue;
      a[wM(n)] = o;
      let r = i?.[`${xM}:${n}`];
      if (r) {
        let e = r?.[`${xM}:${n}:${t}`];
        a[wM(n)] = bM(bM({}, a[wM(n)]), TM(e || r));
      }
    }
    for (let [e, t] of Object.entries(a))
      Object.keys(t).length === 0 && delete a[e];
    return Object.keys(a).length > 0 ? a : void 0;
  },
  OM = Object.defineProperty,
  kM = (e, t, n) =>
    t in e
      ? OM(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  AM = (e, t, n) => kM(e, typeof t == `symbol` ? t : t + ``, n),
  jM,
  MM = class e {
    constructor(e) {
      AM(this, `storage`), (this.storage = e);
    }
    async getItem(e) {
      return await this.storage.getItem(e);
    }
    async setItem(e, t) {
      return await this.storage.setItem(e, t);
    }
    async removeItem(e) {
      return await this.storage.removeItem(e);
    }
    static getStorage(t) {
      return (jM ||= new e(t)), jM;
    }
  },
  NM = Object.defineProperty,
  PM = Object.defineProperties,
  FM = Object.getOwnPropertyDescriptors,
  IM = Object.getOwnPropertySymbols,
  LM = Object.prototype.hasOwnProperty,
  RM = Object.prototype.propertyIsEnumerable,
  zM = (e, t, n) =>
    t in e
      ? NM(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  BM = (e, t) => {
    for (var n in (t ||= {})) LM.call(t, n) && zM(e, n, t[n]);
    if (IM) for (var n of IM(t)) RM.call(t, n) && zM(e, n, t[n]);
    return e;
  },
  VM = (e, t) => PM(e, FM(t));
async function HM(e, t) {
  let n = dm(e.result.capabilities.caip345.caip2),
    r = e.result.capabilities.caip345.transactionHashes,
    i = await Promise.allSettled(r.map((e) => UM(n.reference, e, t))),
    a = i
      .filter((e) => e.status === `fulfilled`)
      .map((e) => e.value)
      .filter((e) => e);
  i.filter((e) => e.status === `rejected`).forEach((e) =>
    console.warn(`Failed to fetch transaction receipt:`, e.reason)
  );
  let o = !a.length || a.some((e) => !e),
    s = a.every((e) => e?.status === `0x1`),
    c = a.every((e) => e?.status === `0x0`),
    l = a.some((e) => e?.status === `0x0`),
    u;
  return (
    o ? (u = 100) : s ? (u = 200) : c ? (u = 500) : l && (u = 600),
    {
      id: e.result.id,
      version: e.request.version,
      atomic: e.request.atomicRequired,
      chainId: e.request.chainId,
      capabilities: e.result.capabilities,
      receipts: a,
      status: u,
    }
  );
}
async function UM(e, t, n) {
  return await n(parseInt(e)).request(dw(`eth_getTransactionReceipt`, [t]));
}
async function WM({ sendCalls: e, storage: t }) {
  let n = await t.getItem(Uj);
  await t.setItem(
    Uj,
    VM(BM({}, n), {
      [e.result.id]: { request: e.request, result: e.result, expiry: Ym(Wj) },
    })
  );
}
async function GM({ resultId: e, storage: t }) {
  let n = await t.getItem(Uj);
  if (n) {
    delete n[e], await t.setItem(Uj, n);
    for (let e in n) Xm(n[e].expiry) && delete n[e];
    await t.setItem(Uj, n);
  }
}
async function KM({ resultId: e, storage: t }) {
  let n = (await t.getItem(Uj))?.[e];
  if (n && !Xm(n.expiry)) return n;
  await GM({ resultId: e, storage: t });
}
var qM = Object.defineProperty,
  JM = Object.defineProperties,
  YM = Object.getOwnPropertyDescriptors,
  XM = Object.getOwnPropertySymbols,
  ZM = Object.prototype.hasOwnProperty,
  QM = Object.prototype.propertyIsEnumerable,
  $M = (e, t, n) =>
    t in e
      ? qM(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  eN = (e, t) => {
    for (var n in (t ||= {})) ZM.call(t, n) && $M(e, n, t[n]);
    if (XM) for (var n of XM(t)) QM.call(t, n) && $M(e, n, t[n]);
    return e;
  },
  tN = (e, t) => JM(e, YM(t)),
  nN = (e, t, n) => $M(e, typeof t == `symbol` ? t : t + ``, n),
  rN = class {
    constructor(e) {
      nN(this, `name`, `eip155`),
        nN(this, `client`),
        nN(this, `chainId`),
        nN(this, `namespace`),
        nN(this, `httpProviders`),
        nN(this, `events`),
        nN(this, `storage`),
        (this.namespace = e.namespace),
        (this.events = pM(`events`)),
        (this.client = pM(`client`)),
        (this.httpProviders = this.createHttpProviders()),
        (this.chainId = parseInt(this.getDefaultChain())),
        (this.storage = MM.getStorage(this.client.core.storage));
    }
    async request(e) {
      switch (e.request.method) {
        case `eth_requestAccounts`:
          return this.getAccounts();
        case `eth_accounts`:
          return this.getAccounts();
        case `wallet_switchEthereumChain`:
          return await this.handleSwitchChain(e);
        case `eth_chainId`:
          return parseInt(this.getDefaultChain());
        case `wallet_getCapabilities`:
          return await this.getCapabilities(e);
        case `wallet_getCallsStatus`:
          return await this.getCallStatus(e);
        case `wallet_sendCalls`:
          return await this.sendCalls(e);
      }
      return this.namespace.methods.includes(e.request.method)
        ? await this.client.request(e)
        : this.getHttpProvider().request(e.request);
    }
    updateNamespace(e) {
      this.namespace = Object.assign(this.namespace, e);
    }
    setDefaultChain(e, t) {
      this.httpProviders[e] || this.setHttpProvider(parseInt(e), t);
      let n = this.chainId;
      (this.chainId = parseInt(e)),
        this.events.emit(Gj.DEFAULT_CHAIN_CHANGED, {
          currentCaipChainId: `${this.name}:${e}`,
          previousCaipChainId: `${this.name}:${n}`,
        });
    }
    requestAccounts() {
      return this.getAccounts();
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId.toString();
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      let e = this.namespace.chains[0];
      if (!e) throw Error(`ChainId not found`);
      return e.split(`:`)[1];
    }
    createHttpProvider(e, t) {
      let n =
        t ||
        tM(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
      if (!n) throw Error(`No RPC url provided for chainId: ${e}`);
      return new Rw(new UA(n, pM(`disableProviderPing`)));
    }
    setHttpProvider(e, t) {
      let n = this.createHttpProvider(e, t);
      n && (this.httpProviders[e] = n);
    }
    createHttpProviders() {
      let e = {};
      return (
        this.namespace.chains.forEach((t) => {
          let n = parseInt(nM(t));
          e[n] = this.createHttpProvider(n, this.namespace.rpcMap?.[t]);
        }),
        e
      );
    }
    getAccounts() {
      let e = this.namespace.accounts;
      return e
        ? [
            ...new Set(
              e
                .filter((e) => e.split(`:`)[1] === this.chainId.toString())
                .map((e) => e.split(`:`)[2])
            ),
          ]
        : [];
    }
    getHttpProvider(e) {
      let t = e || this.chainId;
      return (
        this.httpProviders[t] ||
        ((this.httpProviders = tN(eN({}, this.httpProviders), {
          [t]: this.createHttpProvider(t),
        })),
        this.httpProviders[t])
      );
    }
    async handleSwitchChain(e) {
      let t = e.request.params ? e.request.params[0]?.chainId : `0x0`;
      t = t.startsWith(`0x`) ? t : `0x${t}`;
      let n = parseInt(t, 16);
      if (this.isChainApproved(n)) this.setDefaultChain(`${n}`);
      else if (this.namespace.methods.includes(`wallet_switchEthereumChain`))
        await this.client.request({
          topic: e.topic,
          request: { method: e.request.method, params: [{ chainId: t }] },
          chainId: this.namespace.chains?.[0],
        }),
          this.setDefaultChain(`${n}`);
      else
        throw Error(
          `Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
        );
      return null;
    }
    isChainApproved(e) {
      return this.namespace.chains.includes(`${this.name}:${e}`);
    }
    async getCapabilities(e) {
      let t = e.request?.params?.[0],
        n = e.request?.params?.[1] || [];
      if (!t)
        throw Error(
          "Missing address parameter in `wallet_getCapabilities` request"
        );
      let r = this.client.session.get(e.topic),
        i = r?.sessionProperties?.capabilities || {},
        a = `${t}${
          n.length > 0 ? n.join(`,`) : `0x${this.chainId.toString(16)}`
        }`,
        o = i?.[a];
      if (o) return o;
      let s;
      try {
        s = DM(r, t, n);
      } catch (e) {
        console.warn(`Failed to extract capabilities from session`, e);
      }
      if (s) return s;
      let c = await this.client.request(e);
      try {
        await this.client.session.update(e.topic, {
          sessionProperties: tN(eN({}, r.sessionProperties || {}), {
            capabilities: tN(eN({}, i || {}), { [a]: c }),
          }),
        });
      } catch (e) {
        console.warn(`Failed to update session with capabilities`, e);
      }
      return c;
    }
    async getCallStatus(e) {
      let t = this.client.session.get(e.topic),
        n = t.sessionProperties?.bundler_name;
      if (n) {
        let t = this.getBundlerUrl(e.chainId, n);
        try {
          return await this.getUserOperationReceipt(t, e);
        } catch (e) {
          console.warn(`Failed to fetch call status from bundler`, e, t);
        }
      }
      let r = t.sessionProperties?.bundler_url;
      if (r)
        try {
          return await this.getUserOperationReceipt(r, e);
        } catch (e) {
          console.warn(`Failed to fetch call status from custom bundler`, e, r);
        }
      let i = await KM({
        resultId: e.request.params?.[0],
        storage: this.storage,
      });
      if (i)
        try {
          return await HM(i, this.getHttpProvider.bind(this));
        } catch (e) {
          console.warn(
            `Failed to fetch call status from stored send calls`,
            e,
            i
          );
        }
      if (this.namespace.methods.includes(e.request.method))
        return await this.client.request(e);
      throw Error(`Fetching call status not approved by the wallet.`);
    }
    async getUserOperationReceipt(e, t) {
      let n = new URL(e),
        r = await fetch(n, {
          method: `POST`,
          headers: { "Content-Type": `application/json` },
          body: JSON.stringify(
            dw(`eth_getUserOperationReceipt`, [t.request.params?.[0]])
          ),
        });
      if (!r.ok)
        throw Error(`Failed to fetch user operation receipt - ${r.status}`);
      return await r.json();
    }
    getBundlerUrl(e, t) {
      return `${Hj}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${t}`;
    }
    async sendCalls(e) {
      let t = await this.client.request(e),
        n = e.request.params?.[0],
        r = t?.id,
        i = t?.capabilities || {},
        a = i?.caip345?.caip2,
        o = i?.caip345?.transactionHashes;
      return (
        !r ||
          !a ||
          !(o != null && o.length) ||
          (await WM({
            sendCalls: { request: n, result: t },
            storage: this.storage,
          })),
        t
      );
    }
  },
  iN = Object.defineProperty,
  aN = (e, t, n) =>
    t in e
      ? iN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  oN = (e, t, n) => aN(e, typeof t == `symbol` ? t : t + ``, n),
  sN = class {
    constructor(e) {
      oN(this, `name`, Vj),
        oN(this, `client`),
        oN(this, `httpProviders`),
        oN(this, `events`),
        oN(this, `namespace`),
        oN(this, `chainId`),
        (this.namespace = e.namespace),
        (this.events = pM(`events`)),
        (this.client = pM(`client`)),
        (this.chainId = this.getDefaultChain()),
        (this.name = this.getNamespaceName()),
        (this.httpProviders = this.createHttpProviders());
    }
    updateNamespace(e) {
      (this.namespace.chains = [
        ...new Set((this.namespace.chains || []).concat(e.chains || [])),
      ]),
        (this.namespace.accounts = [
          ...new Set((this.namespace.accounts || []).concat(e.accounts || [])),
        ]),
        (this.namespace.methods = [
          ...new Set((this.namespace.methods || []).concat(e.methods || [])),
        ]),
        (this.namespace.events = [
          ...new Set((this.namespace.events || []).concat(e.events || [])),
        ]),
        (this.httpProviders = this.createHttpProviders());
    }
    requestAccounts() {
      return this.getAccounts();
    }
    request(e) {
      return this.namespace.methods.includes(e.request.method)
        ? this.client.request(e)
        : this.getHttpProvider(e.chainId).request(e.request);
    }
    setDefaultChain(e, t) {
      this.httpProviders[e] || this.setHttpProvider(e, t);
      let n = this.chainId;
      (this.chainId = e),
        this.events.emit(Gj.DEFAULT_CHAIN_CHANGED, {
          currentCaipChainId: `${this.name}:${e}`,
          previousCaipChainId: `${this.name}:${n}`,
        });
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId;
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      let e = this.namespace.chains[0];
      if (!e) throw Error(`ChainId not found`);
      return e.split(`:`)[1];
    }
    getNamespaceName() {
      let e = this.namespace.chains[0];
      if (!e) throw Error(`ChainId not found`);
      return dm(e).namespace;
    }
    getAccounts() {
      let e = this.namespace.accounts;
      return e
        ? [
            ...new Set(
              e
                .filter((e) => e.split(`:`)[1] === this.chainId.toString())
                .map((e) => e.split(`:`)[2])
            ),
          ]
        : [];
    }
    createHttpProviders() {
      var e;
      let t = {};
      return (
        (e = this.namespace?.accounts) == null ||
          e.forEach((e) => {
            let n = dm(e),
              r = this.namespace?.rpcMap?.[`${n.namespace}:${n.reference}`];
            t[n.reference] = this.createHttpProvider(e, r);
          }),
        t
      );
    }
    getHttpProvider(e) {
      let t = dm(e).reference,
        n = this.httpProviders[t];
      if (typeof n > `u`) throw Error(`JSON-RPC provider for ${e} not found`);
      return n;
    }
    setHttpProvider(e, t) {
      let n = this.createHttpProvider(e, t);
      n && (this.httpProviders[e] = n);
    }
    createHttpProvider(e, t) {
      let n = t || tM(e, this.namespace, this.client.core.projectId);
      if (!n) throw Error(`No RPC url provided for chainId: ${e}`);
      return new Rw(new UA(n, pM(`disableProviderPing`)));
    }
  },
  cN = Object.defineProperty,
  lN = Object.defineProperties,
  uN = Object.getOwnPropertyDescriptors,
  dN = Object.getOwnPropertySymbols,
  fN = Object.prototype.hasOwnProperty,
  pN = Object.prototype.propertyIsEnumerable,
  mN = (e, t, n) =>
    t in e
      ? cN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  hN = (e, t) => {
    for (var n in (t ||= {})) fN.call(t, n) && mN(e, n, t[n]);
    if (dN) for (var n of dN(t)) pN.call(t, n) && mN(e, n, t[n]);
    return e;
  },
  gN = (e, t) => lN(e, uN(t)),
  _N = (e, t, n) => mN(e, typeof t == `symbol` ? t : t + ``, n),
  vN = class e {
    constructor(e) {
      _N(this, `client`),
        _N(this, `namespaces`),
        _N(this, `optionalNamespaces`),
        _N(this, `sessionProperties`),
        _N(this, `scopedProperties`),
        _N(this, `events`, new Dn.default()),
        _N(this, `rpcProviders`, {}),
        _N(this, `session`),
        _N(this, `providerOpts`),
        _N(this, `logger`),
        _N(this, `uri`),
        _N(this, `disableProviderPing`, !1),
        _N(this, `connectParams`),
        (this.providerOpts = e),
        (this.logger = pC({
          logger: e.logger ?? Fj,
          name: this.providerOpts.name ?? Rj,
        })),
        (this.disableProviderPing = e?.disableProviderPing || !1);
    }
    static async init(t) {
      let n = new e(t);
      return await n.initialize(), n;
    }
    async request(e, t, n) {
      let [r, i] = this.validateChain(t);
      if (!this.session) throw Error(`Please call connect() before request()`);
      return await this.getProvider(r).request({
        request: hN({}, e),
        chainId: `${r}:${i}`,
        topic: this.session.topic,
        expiry: n,
      });
    }
    sendAsync(e, t, n, r) {
      let i = new Date().getTime();
      this.request(e, n, r)
        .then((e) => t(null, fw(i, e)))
        .catch((e) => t(e, void 0));
    }
    async enable() {
      if (!this.client) throw Error(`Sign Client not initialized`);
      return (
        this.session ||
          (await this.connect({
            namespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties,
            scopedProperties: this.scopedProperties,
          })),
        await this.requestAccounts()
      );
    }
    async disconnect() {
      if (!this.session) throw Error(`Please call connect() before enable()`);
      await this.client.disconnect({
        topic: this.session?.topic,
        reason: H(`USER_DISCONNECTED`),
      }),
        await this.cleanup();
    }
    async connect(e) {
      if (!this.client) throw Error(`Sign Client not initialized`);
      if (
        ((this.connectParams = e),
        this.setNamespaces(e),
        this.cleanupPendingPairings(),
        !e.skipPairing)
      )
        return await this.pair(e.pairingTopic);
    }
    async authenticate(e, t) {
      if (!this.client) throw Error(`Sign Client not initialized`);
      this.setNamespaces(e), await this.cleanupPendingPairings();
      let { uri: n, response: r } = await this.client.authenticate(e, t);
      n && ((this.uri = n), this.events.emit(`display_uri`, n));
      let i = await r();
      if (((this.session = i.session), this.session)) {
        let e = lM(this.session.namespaces);
        (this.namespaces = oM(this.namespaces, e)),
          await this.persist(`namespaces`, this.namespaces),
          this.onConnect();
      }
      return i;
    }
    on(e, t) {
      this.events.on(e, t);
    }
    once(e, t) {
      this.events.once(e, t);
    }
    removeListener(e, t) {
      this.events.removeListener(e, t);
    }
    off(e, t) {
      this.events.off(e, t);
    }
    get isWalletConnect() {
      return !0;
    }
    async pair(e) {
      let { uri: t, approval: n } = await this.client.connect({
        pairingTopic: e,
        requiredNamespaces: this.namespaces,
        optionalNamespaces: this.optionalNamespaces,
        sessionProperties: this.sessionProperties,
        scopedProperties: this.scopedProperties,
        authentication: this.connectParams?.authentication,
        walletPay: this.connectParams?.walletPay,
      });
      t && ((this.uri = t), this.events.emit(`display_uri`, t));
      let r = await n();
      this.session = r;
      let i = lM(r.namespaces);
      return (
        (this.namespaces = oM(this.namespaces, i)),
        await this.persist(`namespaces`, this.namespaces),
        await this.persist(`optionalNamespaces`, this.optionalNamespaces),
        this.onConnect(),
        this.session
      );
    }
    setDefaultChain(e, t) {
      try {
        if (!this.session) return;
        let [n, r] = this.validateChain(e),
          i = this.getProvider(n);
        i
          ? i.setDefaultChain(r, t)
          : this.session &&
            this.logger.warn(
              `Provider for namespace '${n}' not found in setDefaultChain`
            );
      } catch (e) {
        if (!/Please call connect/.test(e.message)) throw e;
      }
    }
    async cleanupPendingPairings(e = {}) {
      try {
        this.logger.info(`Cleaning up inactive pairings...`);
        let t = this.client.pairing.getAll();
        if (!dS(t)) return;
        for (let n of t)
          e.deletePairings
            ? this.client.core.expirer.set(n.topic, 0)
            : await this.client.core.relayer.subscriber.unsubscribe(n.topic);
        this.logger.info(`Inactive pairings cleared: ${t.length}`);
      } catch (e) {
        this.logger.warn(e, `Failed to cleanup pending pairings`);
      }
    }
    abortPairingAttempt() {
      this.logger.warn(
        `abortPairingAttempt is deprecated. This is now a no-op.`
      );
    }
    async checkStorage() {
      (this.namespaces = (await this.getFromStore(`namespaces`)) || {}),
        (this.optionalNamespaces =
          (await this.getFromStore(`optionalNamespaces`)) || {}),
        this.session && this.createProviders();
    }
    async initialize() {
      this.logger.trace(`Initialized`),
        await this.createClient(),
        await this.checkStorage(),
        this.registerEventListeners();
    }
    async createClient() {
      if (
        ((this.client =
          this.providerOpts.client ||
          (await AA.init({
            core: this.providerOpts.core,
            logger: this.providerOpts.logger || Fj,
            relayUrl: this.providerOpts.relayUrl || Ij,
            projectId: this.providerOpts.projectId,
            metadata: this.providerOpts.metadata,
            storageOptions: this.providerOpts.storageOptions,
            storage: this.providerOpts.storage,
            name: this.providerOpts.name,
            customStoragePrefix: this.providerOpts.customStoragePrefix,
            telemetryEnabled: this.providerOpts.telemetryEnabled,
          }))),
        this.providerOpts.session)
      )
        try {
          this.session = this.client.session.get(
            this.providerOpts.session.topic
          );
        } catch (e) {
          throw (
            (this.logger.error(e, `Failed to get session`),
            Error(
              `The provided session: ${this.providerOpts?.session?.topic} doesn't exist in the Sign client`
            ))
          );
        }
      else {
        let e = this.client.session.getAll();
        this.session = e[0];
      }
      this.logger.trace(`SignClient Initialized`);
    }
    createProviders() {
      if (!this.client) throw Error(`Sign Client not initialized`);
      if (!this.session)
        throw Error(
          `Session not initialized. Please call connect() before enable()`
        );
      let e = [
        ...new Set(Object.keys(this.session.namespaces).map((e) => oS(e))),
      ];
      mM(`client`, this.client),
        mM(`events`, this.events),
        mM(`disableProviderPing`, this.disableProviderPing),
        e.forEach((e) => {
          if (!this.session) return;
          let t = iM(e, this.session);
          if (t?.length === 0) return;
          let n = rM(t),
            r = gN(hN({}, oM(this.namespaces, this.optionalNamespaces)[e]), {
              accounts: t,
              chains: n,
            });
          switch (e) {
            case `eip155`:
              this.rpcProviders[e] = new rN({ namespace: r });
              break;
            default:
              this.rpcProviders[e] = new sN({ namespace: r });
          }
        });
    }
    registerEventListeners() {
      if (typeof this.client > `u`)
        throw Error(`Sign Client is not initialized`);
      this.client.on(`session_ping`, (e) => {
        let { topic: t } = e;
        t === this.session?.topic && this.events.emit(`session_ping`, e);
      }),
        this.client.on(`session_event`, (e) => {
          let { params: t, topic: n } = e;
          if (n !== this.session?.topic) return;
          let { event: r } = t;
          if (r.name === `accountsChanged`) {
            let e = r.data;
            e && dS(e) && this.events.emit(`accountsChanged`, e.map(cM));
          } else if (r.name === `chainChanged`) {
            let e = t.chainId,
              n = t.event.data,
              r = oS(e),
              i = uM(e) === uM(n) ? e : `${r}:${uM(n)}`;
            this.onChainChanged({ currentCaipChainId: i });
          } else this.events.emit(r.name, r.data);
          this.events.emit(`session_event`, e);
        }),
        this.client.on(`session_update`, ({ topic: e, params: t }) => {
          if (e !== this.session?.topic) return;
          let { namespaces: n } = t,
            r = this.client?.session.get(e);
          (this.session = gN(hN({}, r), { namespaces: n })),
            this.onSessionUpdate(),
            this.events.emit(`session_update`, { topic: e, params: t });
        }),
        this.client.on(`session_delete`, async (e) => {
          e.topic === this.session?.topic &&
            (await this.cleanup(),
            this.events.emit(`session_delete`, e),
            this.events.emit(
              `disconnect`,
              gN(hN({}, H(`USER_DISCONNECTED`)), { data: e.topic })
            ));
        }),
        this.on(Gj.DEFAULT_CHAIN_CHANGED, (e) => {
          this.onChainChanged(gN(hN({}, e), { internal: !0 }));
        });
    }
    getProvider(e) {
      return this.rpcProviders[e] || this.rpcProviders[Vj];
    }
    onSessionUpdate() {
      Object.keys(this.rpcProviders).forEach((e) => {
        this.getProvider(e).updateNamespace(this.session?.namespaces[e]);
      });
    }
    setNamespaces(e) {
      let {
        namespaces: t = {},
        optionalNamespaces: n = {},
        sessionProperties: r,
        scopedProperties: i,
      } = e;
      (this.optionalNamespaces = oM(t, n)),
        (this.sessionProperties = r),
        (this.scopedProperties = i);
    }
    validateChain(e) {
      let [t, n] = e?.split(`:`) || [``, ``];
      if (!this.namespaces || !Object.keys(this.namespaces).length)
        return [t, n];
      if (
        t &&
        !Object.keys(this.namespaces || {})
          .map((e) => oS(e))
          .includes(t)
      )
        throw Error(
          `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
        );
      if (t && n) return [t, n];
      let r = oS(Object.keys(this.namespaces)[0]);
      return [r, this.rpcProviders[r].getDefaultChain()];
    }
    async requestAccounts() {
      let [e] = this.validateChain();
      return await this.getProvider(e).requestAccounts();
    }
    async onChainChanged({
      currentCaipChainId: e,
      previousCaipChainId: t,
      internal: n = !1,
    }) {
      if (!this.namespaces) return;
      let [r, i] = this.validateChain(e);
      if (i) {
        if ((this.updateNamespaceChain(r, i), n))
          this.events.emit(`chainChanged`, i),
            this.emitAccountsChangedOnChainChange({
              namespace: r,
              currentCaipChainId: e,
              previousCaipChainId: t,
            });
        else {
          let e = this.getProvider(r);
          e
            ? e.setDefaultChain(i)
            : this.session &&
              this.logger.warn(
                `Provider for namespace '${r}' not found during chain change`
              );
        }
        await this.persist(`namespaces`, this.namespaces);
      }
    }
    emitAccountsChangedOnChainChange({
      namespace: e,
      currentCaipChainId: t,
      previousCaipChainId: n,
    }) {
      try {
        if (n === t) return;
        let r = this.session?.namespaces[e]?.accounts;
        if (!r) return;
        let i = r.filter((e) => e.includes(`${t}:`)).map(cM);
        if (!dS(i)) return;
        this.events.emit(`accountsChanged`, i);
      } catch (e) {
        this.logger.warn(e, `Failed to emit accountsChanged on chain change`);
      }
    }
    updateNamespaceChain(e, t) {
      if (!this.namespaces) return;
      let n = this.namespaces[e] ? e : `${e}:${t}`,
        r = { chains: [], methods: [], events: [], defaultChain: t };
      this.namespaces[n]
        ? this.namespaces[n] && (this.namespaces[n].defaultChain = t)
        : (this.namespaces[n] = r);
    }
    onConnect() {
      this.createProviders(),
        this.events.emit(`connect`, { session: this.session });
    }
    async cleanup() {
      (this.connectParams = void 0),
        (this.namespaces = void 0),
        (this.optionalNamespaces = void 0),
        (this.sessionProperties = void 0),
        await this.deleteFromStore(`namespaces`),
        await this.deleteFromStore(`optionalNamespaces`),
        await this.deleteFromStore(`sessionProperties`),
        (this.session = void 0),
        this.cleanupPendingPairings({ deletePairings: !0 }),
        await this.cleanupStorage();
    }
    async persist(e, t) {
      let n = this.session?.topic || ``;
      await this.client.core.storage.setItem(`${zj}/${e}${n}`, t);
    }
    async getFromStore(e) {
      let t = this.session?.topic || ``;
      return await this.client.core.storage.getItem(`${zj}/${e}${t}`);
    }
    async deleteFromStore(e) {
      let t = this.session?.topic || ``;
      await this.client.core.storage.removeItem(`${zj}/${e}${t}`);
    }
    async cleanupStorage() {
      try {
        if (this.client?.session.length > 0) return;
        let e = await this.client.core.storage.getKeys();
        for (let t of e)
          t.startsWith(zj) && (await this.client.core.storage.removeItem(t));
      } catch (e) {
        this.logger.warn(e, `Failed to cleanup storage`);
      }
    }
  },
  yN = null,
  bN = {
    getSIWX() {
      return p.state.siwx;
    },
    async initializeIfEnabled(e = x.getActiveCaipAddress()) {
      let t = p.state.siwx;
      if (!(t && e)) return;
      let [n, r, i] = e.split(`:`);
      if (x.checkIfSupportedNetwork(n, `${n}:${r}`))
        try {
          if (p.state.remoteFeatures?.emailCapture) {
            let e = x.getAccountData(n)?.user;
            await C.open({
              view: `DataCapture`,
              data: { email: e?.email ?? void 0 },
            });
            return;
          }
          if ((yN && (await yN), (await t.getSessions(`${n}:${r}`, i)).length))
            return;
          await C.open({ view: `SIWXSignMessage` });
        } catch (e) {
          console.error(`SIWXUtil:initializeIfEnabled`, e),
            T.sendEvent({
              type: `track`,
              event: `SIWX_AUTH_ERROR`,
              properties: this.getSIWXEventProperties(e),
            }),
            await v._getClient()?.disconnect().catch(console.error),
            h.reset(`Connect`),
            _.showError(
              `A problem occurred while trying initialize authentication`
            );
        }
    },
    async isAuthenticated(e = x.getActiveCaipAddress()) {
      if (!p.state.siwx || !e) return !0;
      let { chainNamespace: t, chainId: n, address: r } = y.parseCaipAddress(e),
        i = `${t}:${n}`;
      return (
        (await bN.getSessions({ address: r, caipNetworkId: i })).length > 0
      );
    },
    async requestSignMessage() {
      let e = p.state.siwx,
        t = m.getPlainAddress(x.getActiveCaipAddress()),
        n = b();
      if (!e) throw Error(`SIWX is not enabled`);
      if (!t) throw Error(`No ActiveCaipAddress found`);
      if (!n) throw Error(`No ActiveCaipNetwork or client found`);
      try {
        let r = await e.createMessage({
            chainId: n.caipNetworkId,
            accountAddress: t,
          }),
          i = r.toString(),
          a = ``;
        e.signMessage
          ? (a = await e.signMessage({
              message: i,
              chainId: n.caipNetworkId,
              accountAddress: t,
            }))
          : (w.getConnectorId(n.chainNamespace) === S.CONNECTOR_ID.AUTH &&
              h.pushTransactionStack({}),
            (a = (await v.signMessage(i)) || ``)),
          await e.addSession({ data: r, message: i, signature: a }),
          x.setLastConnectedSIWECaipNetwork(n),
          C.close(),
          T.sendEvent({
            type: `track`,
            event: `SIWX_AUTH_SUCCESS`,
            properties: this.getSIWXEventProperties(),
          });
      } catch (e) {
        (!C.state.open || h.state.view === `ApproveTransaction`) &&
          (await C.open({ view: `SIWXSignMessage` })),
          _.showError(`Error signing message`),
          T.sendEvent({
            type: `track`,
            event: `SIWX_AUTH_ERROR`,
            properties: this.getSIWXEventProperties(e),
          }),
          console.error(`SWIXUtil:requestSignMessage`, e);
      }
    },
    async cancelSignMessage() {
      try {
        let e = this.getSIWX();
        if (e?.getRequired?.()) {
          let t = x.getLastConnectedSIWECaipNetwork();
          if (t) {
            let n = await e?.getSessions(
              t?.caipNetworkId,
              m.getPlainAddress(x.getActiveCaipAddress()) || ``
            );
            n && n.length > 0
              ? await x.switchActiveNetwork(t)
              : await v.disconnect();
          } else await v.disconnect();
        } else C.close();
        C.close(),
          T.sendEvent({
            event: `CLICK_CANCEL_SIWX`,
            type: `track`,
            properties: this.getSIWXEventProperties(),
          });
      } catch (e) {
        console.error(`SIWXUtil:cancelSignMessage`, e);
      }
    },
    async getAllSessions() {
      let e = this.getSIWX(),
        t = x.getAllRequestedCaipNetworks(),
        n = [];
      return (
        await Promise.all(
          t.map(async (t) => {
            let r = await e?.getSessions(
              t.caipNetworkId,
              m.getPlainAddress(x.getActiveCaipAddress()) || ``
            );
            r && n.push(...r);
          })
        ),
        n
      );
    },
    async getSessions(e) {
      let t = p.state.siwx,
        n = e?.address;
      if (!n) {
        let e = x.getActiveCaipAddress();
        n = m.getPlainAddress(e);
      }
      let r = e?.caipNetworkId;
      return (
        (r ||= x.getActiveCaipNetwork()?.caipNetworkId),
        t && n && r ? t.getSessions(r, n) : []
      );
    },
    async isSIWXCloseDisabled() {
      let e = this.getSIWX();
      if (e) {
        let t = h.state.view === `ApproveTransaction`,
          n = h.state.view === `SIWXSignMessage`;
        if (t || n)
          return e.getRequired?.() && (await this.getSessions()).length === 0;
      }
      return !1;
    },
    async authConnectorAuthenticate({
      authConnector: e,
      chainId: t,
      socialUri: n,
      preferredAccountType: r,
      chainNamespace: i,
    }) {
      let a = bN.getSIWX(),
        o = b();
      if (
        !a ||
        !i.includes(S.CHAIN.EVM) ||
        p.state.remoteFeatures?.emailCapture
      ) {
        let i = await e.connect({
          chainId: t,
          socialUri: n,
          preferredAccountType: r,
        });
        return { address: i.address, chainId: i.chainId, accounts: i.accounts };
      }
      let s = `${i}:${t}`,
        c = await a.createMessage({
          chainId: s,
          accountAddress: `<<AccountAddress>>`,
        }),
        l = {
          accountAddress: c.accountAddress,
          chainId: c.chainId,
          domain: c.domain,
          uri: c.uri,
          version: c.version,
          nonce: c.nonce,
          notBefore: c.notBefore,
          statement: c.statement,
          resources: c.resources,
          requestId: c.requestId,
          issuedAt: c.issuedAt,
          expirationTime: c.expirationTime,
          serializedMessage: c.toString(),
        },
        u = await e.connect({
          chainId: t,
          socialUri: n,
          siwxMessage: l,
          preferredAccountType: r,
        });
      return (
        (l.accountAddress = u.address),
        (l.serializedMessage = u.message || ``),
        u.signature &&
          u.message &&
          (await bN.addEmbeddedWalletSession(l, u.message, u.signature)),
        x.setLastConnectedSIWECaipNetwork(o),
        { address: u.address, chainId: u.chainId, accounts: u.accounts }
      );
    },
    async addEmbeddedWalletSession(e, t, n) {
      if (yN) return yN;
      let r = bN.getSIWX();
      return r
        ? ((yN = r
            .addSession({ data: e, message: t, signature: n })
            .finally(() => {
              yN = null;
            })),
          yN)
        : Promise.resolve();
    },
    async universalProviderAuthenticate({
      universalProvider: e,
      chains: t,
      methods: n,
    }) {
      let r = bN.getSIWX(),
        i = b(),
        a = new Set(t.map((e) => e.split(`:`)[0]));
      if (!r || a.size !== 1 || !a.has(`eip155`)) return !1;
      let o = await r.createMessage({
          chainId: b()?.caipNetworkId || ``,
          accountAddress: ``,
        }),
        s = await e.authenticate({
          nonce: o.nonce,
          domain: o.domain,
          uri: o.uri,
          exp: o.expirationTime,
          iat: o.issuedAt,
          nbf: o.notBefore,
          requestId: o.requestId,
          version: o.version,
          resources: o.resources,
          statement: o.statement,
          chainId: o.chainId,
          methods: n,
          chains: [o.chainId, ...t.filter((e) => e !== o.chainId)],
        });
      _.showLoading(`Authenticating...`, { autoClose: !1 });
      let c = {
        ...s.session.peer.metadata,
        name: s.session.peer.metadata.name,
        icon: s.session.peer.metadata.icons?.[0],
        type: `WALLET_CONNECT`,
      };
      if (
        (x.setAccountProp(`connectedWalletInfo`, c, Array.from(a)[0]),
        s?.auths?.length)
      ) {
        let t = s.auths.map((t) => {
          let n = e.client.formatAuthMessage({ request: t.p, iss: t.p.iss });
          return {
            data: {
              ...t.p,
              accountAddress: t.p.iss.split(`:`).slice(-1).join(``),
              chainId: t.p.iss.split(`:`).slice(2, 4).join(`:`),
              uri: t.p.aud ?? ``,
              version: t.p.version || o.version,
              expirationTime: t.p.exp,
              issuedAt: t.p.iat,
              notBefore: t.p.nbf,
            },
            message: n,
            signature: t.s.s,
            cacao: t,
          };
        });
        try {
          await r.setSessions(t),
            i && x.setLastConnectedSIWECaipNetwork(i),
            T.sendEvent({
              type: `track`,
              event: `SIWX_AUTH_SUCCESS`,
              properties: bN.getSIWXEventProperties(),
            });
        } catch (t) {
          throw (
            (console.error(
              `SIWX:universalProviderAuth - failed to set sessions`,
              t
            ),
            T.sendEvent({
              type: `track`,
              event: `SIWX_AUTH_ERROR`,
              properties: bN.getSIWXEventProperties(t),
            }),
            await e.disconnect().catch(console.error),
            t)
          );
        } finally {
          _.hide();
        }
      }
      return !0;
    },
    getSIWXEventProperties(e) {
      let t = x.state.activeChain;
      if (!t)
        throw Error(`SIWXUtil:getSIWXEventProperties - namespace is required`);
      return {
        network: x.state.activeCaipNetwork?.caipNetworkId || ``,
        isSmartAccount: g(t) === f.ACCOUNT_TYPES.SMART_ACCOUNT,
        message: e ? m.parseError(e) : void 0,
      };
    },
    async clearSessions() {
      let e = this.getSIWX();
      e && (await e.setSessions([]));
    },
  };
export { Ht as a, zt as i, vN as n, Ft as r, bN as t };
