import { r as e } from "./rolldown-runtime-C_s2cVnS.js";
import { p as t } from "./react-Cn3k3YTV.js";
var n = `1.2.3`,
  r = class e extends Error {
    constructor(t, r = {}) {
      let i =
          r.cause instanceof e
            ? r.cause.details
            : r.cause?.message
            ? r.cause.message
            : r.details,
        a = (r.cause instanceof e && r.cause.docsPath) || r.docsPath,
        o = [
          t || `An error occurred.`,
          ``,
          ...(r.metaMessages ? [...r.metaMessages, ``] : []),
          ...(a ? [`Docs: https://abitype.dev${a}`] : []),
          ...(i ? [`Details: ${i}`] : []),
          `Version: abitype@${n}`,
        ].join(`
`);
      super(o),
        Object.defineProperty(this, "details", {
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
        Object.defineProperty(this, "metaMessages", {
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
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `AbiTypeError`,
        }),
        r.cause && (this.cause = r.cause),
        (this.details = i),
        (this.docsPath = a),
        (this.metaMessages = r.metaMessages),
        (this.shortMessage = t);
    }
  };
function i(e, t) {
  return e.exec(t)?.groups;
}
var a = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
  o =
    /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
  s = /^\(.+?\).*?$/,
  c = /^tuple(?<array>(\[(\d*)\])*)$/;
function l(e) {
  let t = e.type;
  if (c.test(e.type) && `components` in e) {
    t = `(`;
    let n = e.components.length;
    for (let r = 0; r < n; r++) {
      let i = e.components[r];
      (t += l(i)), r < n - 1 && (t += `, `);
    }
    let r = i(c, e.type);
    return (t += `)${r?.array || ``}`), l({ ...e, type: t });
  }
  return (
    `indexed` in e && e.indexed && (t = `${t} indexed`),
    e.name ? `${t} ${e.name}` : t
  );
}
function u(e) {
  let t = ``,
    n = e.length;
  for (let r = 0; r < n; r++) {
    let i = e[r];
    (t += l(i)), r !== n - 1 && (t += `, `);
  }
  return t;
}
function d(e) {
  return e.type === `function`
    ? `function ${e.name}(${u(e.inputs)})${
        e.stateMutability && e.stateMutability !== `nonpayable`
          ? ` ${e.stateMutability}`
          : ``
      }${e.outputs?.length ? ` returns (${u(e.outputs)})` : ``}`
    : e.type === `event`
    ? `event ${e.name}(${u(e.inputs)})`
    : e.type === `error`
    ? `error ${e.name}(${u(e.inputs)})`
    : e.type === `constructor`
    ? `constructor(${u(e.inputs)})${
        e.stateMutability === `payable` ? ` payable` : ``
      }`
    : e.type === `fallback`
    ? `fallback() external${e.stateMutability === `payable` ? ` payable` : ``}`
    : `receive() external payable`;
}
var f = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function p(e) {
  return f.test(e);
}
function m(e) {
  return i(f, e);
}
var h = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function g(e) {
  return h.test(e);
}
function _(e) {
  return i(h, e);
}
var v =
  /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
function y(e) {
  return v.test(e);
}
function b(e) {
  return i(v, e);
}
var x = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
function S(e) {
  return x.test(e);
}
function C(e) {
  return i(x, e);
}
var w =
  /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
function ee(e) {
  return w.test(e);
}
function te(e) {
  return i(w, e);
}
var ne = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
function re(e) {
  return ne.test(e);
}
function ie(e) {
  return i(ne, e);
}
var ae = /^receive\(\) external payable$/;
function oe(e) {
  return ae.test(e);
}
var se = new Set([`memory`, `indexed`, `storage`, `calldata`]),
  ce = new Set([`indexed`]),
  le = new Set([`calldata`, `memory`, `storage`]),
  ue = class extends r {
    constructor({ signature: e }) {
      super(`Failed to parse ABI item.`, {
        details: `parseAbiItem(${JSON.stringify(e, null, 2)})`,
        docsPath: `/api/human#parseabiitem-1`,
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `InvalidAbiItemError`,
        });
    }
  },
  de = class extends r {
    constructor({ type: e }) {
      super(`Unknown type.`, {
        metaMessages: [
          `Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`,
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `UnknownTypeError`,
        });
    }
  },
  fe = class extends r {
    constructor({ type: e }) {
      super(`Unknown type.`, {
        metaMessages: [`Type "${e}" is not a valid ABI type.`],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `UnknownSolidityTypeError`,
        });
    }
  },
  pe = class extends r {
    constructor({ params: e }) {
      super(`Failed to parse ABI parameters.`, {
        details: `parseAbiParameters(${JSON.stringify(e, null, 2)})`,
        docsPath: `/api/human#parseabiparameters-1`,
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `InvalidAbiParametersError`,
        });
    }
  },
  me = class extends r {
    constructor({ param: e }) {
      super(`Invalid ABI parameter.`, { details: e }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `InvalidParameterError`,
        });
    }
  },
  he = class extends r {
    constructor({ param: e, name: t }) {
      super(`Invalid ABI parameter.`, {
        details: e,
        metaMessages: [
          `"${t}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`,
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `SolidityProtectedKeywordError`,
        });
    }
  },
  ge = class extends r {
    constructor({ param: e, type: t, modifier: n }) {
      super(`Invalid ABI parameter.`, {
        details: e,
        metaMessages: [
          `Modifier "${n}" not allowed${t ? ` in "${t}" type` : ``}.`,
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `InvalidModifierError`,
        });
    }
  },
  _e = class extends r {
    constructor({ param: e, type: t, modifier: n }) {
      super(`Invalid ABI parameter.`, {
        details: e,
        metaMessages: [
          `Modifier "${n}" not allowed${t ? ` in "${t}" type` : ``}.`,
          `Data location can only be specified for array, struct, or mapping types, but "${n}" was given.`,
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `InvalidFunctionModifierError`,
        });
    }
  },
  ve = class extends r {
    constructor({ abiParameter: e }) {
      super(`Invalid ABI parameter.`, {
        details: JSON.stringify(e, null, 2),
        metaMessages: [`ABI parameter type is invalid.`],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `InvalidAbiTypeParameterError`,
        });
    }
  },
  ye = class extends r {
    constructor({ signature: e, type: t }) {
      super(`Invalid ${t} signature.`, { details: e }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `InvalidSignatureError`,
        });
    }
  },
  be = class extends r {
    constructor({ signature: e }) {
      super(`Unknown signature.`, { details: e }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `UnknownSignatureError`,
        });
    }
  },
  xe = class extends r {
    constructor({ signature: e }) {
      super(`Invalid struct signature.`, {
        details: e,
        metaMessages: [`No properties exist.`],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `InvalidStructSignatureError`,
        });
    }
  },
  Se = class extends r {
    constructor({ type: e }) {
      super(`Circular reference detected.`, {
        metaMessages: [`Struct "${e}" is a circular reference.`],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `CircularReferenceError`,
        });
    }
  },
  Ce = class extends r {
    constructor({ current: e, depth: t }) {
      super(`Unbalanced parentheses.`, {
        metaMessages: [
          `"${e.trim()}" has too many ${
            t > 0 ? `opening` : `closing`
          } parentheses.`,
        ],
        details: `Depth "${t}"`,
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `InvalidParenthesisError`,
        });
    }
  };
function we(e, t, n) {
  let r = ``;
  if (n)
    for (let e of Object.entries(n)) {
      if (!e) continue;
      let t = ``;
      for (let n of e[1]) t += `[${n.type}${n.name ? `:${n.name}` : ``}]`;
      r += `(${e[0]}{${t}})`;
    }
  return t ? `${t}:${e}${r}` : `${e}${r}`;
}
var Te = new Map([
  [`address`, { type: `address` }],
  [`bool`, { type: `bool` }],
  [`bytes`, { type: `bytes` }],
  [`bytes32`, { type: `bytes32` }],
  [`int`, { type: `int256` }],
  [`int256`, { type: `int256` }],
  [`string`, { type: `string` }],
  [`uint`, { type: `uint256` }],
  [`uint8`, { type: `uint8` }],
  [`uint16`, { type: `uint16` }],
  [`uint24`, { type: `uint24` }],
  [`uint32`, { type: `uint32` }],
  [`uint64`, { type: `uint64` }],
  [`uint96`, { type: `uint96` }],
  [`uint112`, { type: `uint112` }],
  [`uint160`, { type: `uint160` }],
  [`uint192`, { type: `uint192` }],
  [`uint256`, { type: `uint256` }],
  [`address owner`, { type: `address`, name: `owner` }],
  [`address to`, { type: `address`, name: `to` }],
  [`bool approved`, { type: `bool`, name: `approved` }],
  [`bytes _data`, { type: `bytes`, name: `_data` }],
  [`bytes data`, { type: `bytes`, name: `data` }],
  [`bytes signature`, { type: `bytes`, name: `signature` }],
  [`bytes32 hash`, { type: `bytes32`, name: `hash` }],
  [`bytes32 r`, { type: `bytes32`, name: `r` }],
  [`bytes32 root`, { type: `bytes32`, name: `root` }],
  [`bytes32 s`, { type: `bytes32`, name: `s` }],
  [`string name`, { type: `string`, name: `name` }],
  [`string symbol`, { type: `string`, name: `symbol` }],
  [`string tokenURI`, { type: `string`, name: `tokenURI` }],
  [`uint tokenId`, { type: `uint256`, name: `tokenId` }],
  [`uint8 v`, { type: `uint8`, name: `v` }],
  [`uint256 balance`, { type: `uint256`, name: `balance` }],
  [`uint256 tokenId`, { type: `uint256`, name: `tokenId` }],
  [`uint256 value`, { type: `uint256`, name: `value` }],
  [
    `event:address indexed from`,
    { type: `address`, name: `from`, indexed: !0 },
  ],
  [`event:address indexed to`, { type: `address`, name: `to`, indexed: !0 }],
  [
    `event:uint indexed tokenId`,
    { type: `uint256`, name: `tokenId`, indexed: !0 },
  ],
  [
    `event:uint256 indexed tokenId`,
    { type: `uint256`, name: `tokenId`, indexed: !0 },
  ],
]);
function Ee(e, t = {}) {
  if (y(e)) return De(e, t);
  if (g(e)) return Oe(e, t);
  if (p(e)) return ke(e, t);
  if (ee(e)) return Ae(e, t);
  if (re(e)) return je(e);
  if (oe(e)) return { type: `receive`, stateMutability: `payable` };
  throw new be({ signature: e });
}
function De(e, t = {}) {
  let n = b(e);
  if (!n) throw new ye({ signature: e, type: `function` });
  let r = Ie(n.parameters),
    i = [],
    a = r.length;
  for (let e = 0; e < a; e++)
    i.push(Fe(r[e], { modifiers: le, structs: t, type: `function` }));
  let o = [];
  if (n.returns) {
    let e = Ie(n.returns),
      r = e.length;
    for (let n = 0; n < r; n++)
      o.push(Fe(e[n], { modifiers: le, structs: t, type: `function` }));
  }
  return {
    name: n.name,
    type: `function`,
    stateMutability: n.stateMutability ?? `nonpayable`,
    inputs: i,
    outputs: o,
  };
}
function Oe(e, t = {}) {
  let n = _(e);
  if (!n) throw new ye({ signature: e, type: `event` });
  let r = Ie(n.parameters),
    i = [],
    a = r.length;
  for (let e = 0; e < a; e++)
    i.push(Fe(r[e], { modifiers: ce, structs: t, type: `event` }));
  return { name: n.name, type: `event`, inputs: i };
}
function ke(e, t = {}) {
  let n = m(e);
  if (!n) throw new ye({ signature: e, type: `error` });
  let r = Ie(n.parameters),
    i = [],
    a = r.length;
  for (let e = 0; e < a; e++) i.push(Fe(r[e], { structs: t, type: `error` }));
  return { name: n.name, type: `error`, inputs: i };
}
function Ae(e, t = {}) {
  let n = te(e);
  if (!n) throw new ye({ signature: e, type: `constructor` });
  let r = Ie(n.parameters),
    i = [],
    a = r.length;
  for (let e = 0; e < a; e++)
    i.push(Fe(r[e], { structs: t, type: `constructor` }));
  return {
    type: `constructor`,
    stateMutability: n.stateMutability ?? `nonpayable`,
    inputs: i,
  };
}
function je(e) {
  let t = ie(e);
  if (!t) throw new ye({ signature: e, type: `fallback` });
  return {
    type: `fallback`,
    stateMutability: t.stateMutability ?? `nonpayable`,
  };
}
var Me =
    /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*(?:\spayable)?)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
  Ne =
    /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
  Pe = /^u?int$/;
function Fe(e, t) {
  let n = we(e, t?.type, t?.structs);
  if (Te.has(n)) return Te.get(n);
  let r = s.test(e),
    a = i(r ? Ne : Me, e);
  if (!a) throw new me({ param: e });
  if (a.name && ze(a.name)) throw new he({ param: e, name: a.name });
  let o = a.name ? { name: a.name } : {},
    c = a.modifier === `indexed` ? { indexed: !0 } : {},
    l = t?.structs ?? {},
    u,
    d = {};
  if (r) {
    u = `tuple`;
    let e = Ie(a.type),
      t = [],
      n = e.length;
    for (let r = 0; r < n; r++) t.push(Fe(e[r], { structs: l }));
    d = { components: t };
  } else if (a.type in l) (u = `tuple`), (d = { components: l[a.type] });
  else if (Pe.test(a.type)) u = `${a.type}256`;
  else if (a.type === `address payable`) u = `address`;
  else if (((u = a.type), t?.type !== `struct` && !Le(u)))
    throw new fe({ type: u });
  if (a.modifier) {
    if (!t?.modifiers?.has?.(a.modifier))
      throw new ge({ param: e, type: t?.type, modifier: a.modifier });
    if (le.has(a.modifier) && !Be(u, !!a.array))
      throw new _e({ param: e, type: t?.type, modifier: a.modifier });
  }
  let f = { type: `${u}${a.array ?? ``}`, ...o, ...c, ...d };
  return Te.set(n, f), f;
}
function Ie(e, t = [], n = ``, r = 0) {
  let i = e.trim().length;
  for (let a = 0; a < i; a++) {
    let i = e[a],
      o = e.slice(a + 1);
    switch (i) {
      case `,`:
        return r === 0 ? Ie(o, [...t, n.trim()]) : Ie(o, t, `${n}${i}`, r);
      case `(`:
        return Ie(o, t, `${n}${i}`, r + 1);
      case `)`:
        return Ie(o, t, `${n}${i}`, r - 1);
      default:
        return Ie(o, t, `${n}${i}`, r);
    }
  }
  if (n === ``) return t;
  if (r !== 0) throw new Ce({ current: n, depth: r });
  return t.push(n.trim()), t;
}
function Le(e) {
  return (
    e === `address` ||
    e === `bool` ||
    e === `function` ||
    e === `string` ||
    a.test(e) ||
    o.test(e)
  );
}
var Re =
  /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
function ze(e) {
  return (
    e === `address` ||
    e === `bool` ||
    e === `function` ||
    e === `string` ||
    e === `tuple` ||
    a.test(e) ||
    o.test(e) ||
    Re.test(e)
  );
}
function Be(e, t) {
  return t || e === `bytes` || e === `string` || e === `tuple`;
}
function Ve(e) {
  let t = {},
    n = e.length;
  for (let r = 0; r < n; r++) {
    let n = e[r];
    if (!S(n)) continue;
    let i = C(n);
    if (!i) throw new ye({ signature: n, type: `struct` });
    let a = i.properties.split(`;`),
      o = [],
      s = a.length;
    for (let e = 0; e < s; e++) {
      let t = a[e].trim();
      if (!t) continue;
      let n = Fe(t, { type: `struct` });
      o.push(n);
    }
    if (!o.length) throw new xe({ signature: n });
    t[i.name] = o;
  }
  let r = {},
    i = Object.entries(t),
    a = i.length;
  for (let e = 0; e < a; e++) {
    let [n, a] = i[e];
    r[n] = Ue(a, t);
  }
  return r;
}
var He = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
function Ue(e = [], t = {}, n = new Set()) {
  let r = [],
    a = e.length;
  for (let o = 0; o < a; o++) {
    let a = e[o];
    if (s.test(a.type)) r.push(a);
    else {
      let e = i(He, a.type);
      if (!e?.type) throw new ve({ abiParameter: a });
      let { array: o, type: s } = e;
      if (s in t) {
        if (n.has(s)) throw new Se({ type: s });
        r.push({
          ...a,
          type: `tuple${o ?? ``}`,
          components: Ue(t[s], t, new Set([...n, s])),
        });
      } else if (Le(s)) r.push(a);
      else throw new de({ type: s });
    }
  }
  return r;
}
function We(e) {
  let t = Ve(e),
    n = [],
    r = e.length;
  for (let i = 0; i < r; i++) {
    let r = e[i];
    S(r) || n.push(Ee(r, t));
  }
  return n;
}
function Ge(e) {
  let t;
  if (typeof e == `string`) t = Ee(e);
  else {
    let n = Ve(e),
      r = e.length;
    for (let i = 0; i < r; i++) {
      let r = e[i];
      if (!S(r)) {
        t = Ee(r, n);
        break;
      }
    }
  }
  if (!t) throw new ue({ signature: e });
  return t;
}
function Ke(e) {
  let t = [];
  if (typeof e == `string`) {
    let n = Ie(e),
      r = n.length;
    for (let e = 0; e < r; e++) t.push(Fe(n[e], { modifiers: se }));
  } else {
    let n = Ve(e),
      r = e.length;
    for (let i = 0; i < r; i++) {
      let r = e[i];
      if (S(r)) continue;
      let a = Ie(r),
        o = a.length;
      for (let e = 0; e < o; e++)
        t.push(Fe(a[e], { modifiers: se, structs: n }));
    }
  }
  if (t.length === 0) throw new pe({ params: e });
  return t;
}
function T(e, t, n) {
  let r = e[t.name];
  if (typeof r == `function`) return r;
  let i = e[n];
  return typeof i == `function` ? i : (n) => t(e, n);
}
function qe(e, { includeName: t = !1 } = {}) {
  if (e.type !== `function` && e.type !== `event` && e.type !== `error`)
    throw new Ct(e.type);
  return `${e.name}(${Je(e.inputs, { includeName: t })})`;
}
function Je(e, { includeName: t = !1 } = {}) {
  return e ? e.map((e) => Ye(e, { includeName: t })).join(t ? `, ` : `,`) : ``;
}
function Ye(e, { includeName: t }) {
  return e.type.startsWith(`tuple`)
    ? `(${Je(e.components, { includeName: t })})${e.type.slice(5)}`
    : e.type + (t && e.name ? ` ${e.name}` : ``);
}
function Xe(e, { strict: t = !0 } = {}) {
  return !e || typeof e != `string`
    ? !1
    : t
    ? /^0x[0-9a-fA-F]*$/.test(e)
    : e.startsWith(`0x`);
}
function E(e) {
  return Xe(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
}
var Ze = `2.56.5`,
  Qe = {
    getDocsUrl: ({ docsBaseUrl: e, docsPath: t = ``, docsSlug: n }) =>
      t ? `${e ?? `https://viem.sh`}${t}${n ? `#${n}` : ``}` : void 0,
    version: `viem@${Ze}`,
  },
  D = class e extends Error {
    constructor(t, n = {}) {
      let r =
          n.cause instanceof e
            ? n.cause.details
            : n.cause?.message
            ? n.cause.message
            : n.details,
        i = (n.cause instanceof e && n.cause.docsPath) || n.docsPath,
        a = Qe.getDocsUrl?.({ ...n, docsPath: i }),
        o = [
          t || `An error occurred.`,
          ``,
          ...(n.metaMessages ? [...n.metaMessages, ``] : []),
          ...(a ? [`Docs: ${a}`] : []),
          ...(r ? [`Details: ${r}`] : []),
          ...(Qe.version ? [`Version: ${Qe.version}`] : []),
        ].join(`
`);
      super(o, n.cause ? { cause: n.cause } : void 0),
        Object.defineProperty(this, "details", {
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
        Object.defineProperty(this, "metaMessages", {
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
        Object.defineProperty(this, "version", {
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
        (this.details = r),
        (this.docsPath = i),
        (this.metaMessages = n.metaMessages),
        (this.name = n.name ?? this.name),
        (this.shortMessage = t),
        (this.version = Ze);
    }
    walk(e) {
      return $e(this, e);
    }
  };
function $e(e, t) {
  return t?.(e)
    ? e
    : e && typeof e == `object` && `cause` in e && e.cause !== void 0
    ? $e(e.cause, t)
    : t
    ? null
    : e;
}
var et = class extends D {
    constructor({ docsPath: e }) {
      super(
        [
          `A constructor was not found on the ABI.`,
          `Make sure you are using the correct ABI and that the constructor exists on it.`,
        ].join(`
`),
        { docsPath: e, name: `AbiConstructorNotFoundError` }
      );
    }
  },
  tt = class extends D {
    constructor({ docsPath: e }) {
      super(
        [
          "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.",
          "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
        ].join(`
`),
        { docsPath: e, name: `AbiConstructorParamsNotFoundError` }
      );
    }
  },
  nt = class extends D {
    constructor({ data: e, params: t, size: n }) {
      super(
        [`Data size of ${n} bytes is too small for given parameters.`].join(`
`),
        {
          metaMessages: [
            `Params: (${Je(t, { includeName: !0 })})`,
            `Data:   ${e} (${n} bytes)`,
          ],
          name: `AbiDecodingDataSizeTooSmallError`,
        }
      ),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "params", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "size", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.data = e),
        (this.params = t),
        (this.size = n);
    }
  },
  rt = class extends D {
    constructor({ cause: e } = {}) {
      super(`Cannot decode zero data ("0x") with ABI parameters.`, {
        name: `AbiDecodingZeroDataError`,
        cause: e,
      });
    }
  },
  it = class extends D {
    constructor({ expectedLength: e, givenLength: t, type: n }) {
      super(
        [
          `ABI encoding array length mismatch for type ${n}.`,
          `Expected length: ${e}`,
          `Given length: ${t}`,
        ].join(`
`),
        { name: `AbiEncodingArrayLengthMismatchError` }
      );
    }
  },
  at = class extends D {
    constructor({ expectedSize: e, value: t }) {
      super(
        `Size of bytes "${t}" (bytes${E(
          t
        )}) does not match expected size (bytes${e}).`,
        { name: `AbiEncodingBytesSizeMismatchError` }
      );
    }
  },
  ot = class extends D {
    constructor({ expectedLength: e, givenLength: t }) {
      super(
        [
          `ABI encoding params/values length mismatch.`,
          `Expected length (params): ${e}`,
          `Given length (values): ${t}`,
        ].join(`
`),
        { name: `AbiEncodingLengthMismatchError` }
      );
    }
  },
  st = class extends D {
    constructor(e, { docsPath: t }) {
      super(
        [
          `Arguments (\`args\`) were provided to "${e}", but "${e}" on the ABI does not contain any parameters (\`inputs\`).`,
          `Cannot encode error result without knowing what the parameter types are.`,
          `Make sure you are using the correct ABI and that the inputs exist on it.`,
        ].join(`
`),
        { docsPath: t, name: `AbiErrorInputsNotFoundError` }
      );
    }
  },
  ct = class extends D {
    constructor(e, { docsPath: t } = {}) {
      super(
        [
          `Error ${e ? `"${e}" ` : ``}not found on ABI.`,
          `Make sure you are using the correct ABI and that the error exists on it.`,
        ].join(`
`),
        { docsPath: t, name: `AbiErrorNotFoundError` }
      );
    }
  },
  lt = class extends D {
    constructor(e, { docsPath: t, cause: n }) {
      super(
        [
          `Encoded error signature "${e}" not found on ABI.`,
          `Make sure you are using the correct ABI and that the error exists on it.`,
          `You can look up the decoded signature here: https://4byte.sourcify.dev/?q=${e}.`,
        ].join(`
`),
        { docsPath: t, name: `AbiErrorSignatureNotFoundError`, cause: n }
      ),
        Object.defineProperty(this, "signature", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.signature = e);
    }
  },
  ut = class extends D {
    constructor({ docsPath: e }) {
      super(`Cannot extract event signature from empty topics.`, {
        docsPath: e,
        name: `AbiEventSignatureEmptyTopicsError`,
      });
    }
  },
  dt = class extends D {
    constructor(e, { docsPath: t }) {
      super(
        [
          `Encoded event signature "${e}" not found on ABI.`,
          `Make sure you are using the correct ABI and that the event exists on it.`,
          `You can look up the signature here: https://4byte.sourcify.dev/?q=${e}.`,
        ].join(`
`),
        { docsPath: t, name: `AbiEventSignatureNotFoundError` }
      );
    }
  },
  ft = class extends D {
    constructor(e, { docsPath: t } = {}) {
      super(
        [
          `Event ${e ? `"${e}" ` : ``}not found on ABI.`,
          `Make sure you are using the correct ABI and that the event exists on it.`,
        ].join(`
`),
        { docsPath: t, name: `AbiEventNotFoundError` }
      );
    }
  },
  pt = class extends D {
    constructor(e, { docsPath: t } = {}) {
      super(
        [
          `Function ${e ? `"${e}" ` : ``}not found on ABI.`,
          `Make sure you are using the correct ABI and that the function exists on it.`,
        ].join(`
`),
        { docsPath: t, name: `AbiFunctionNotFoundError` }
      );
    }
  },
  mt = class extends D {
    constructor(e, { docsPath: t }) {
      super(
        [
          `Function "${e}" does not contain any \`outputs\` on ABI.`,
          `Cannot decode function result without knowing what the parameter types are.`,
          `Make sure you are using the correct ABI and that the function exists on it.`,
        ].join(`
`),
        { docsPath: t, name: `AbiFunctionOutputsNotFoundError` }
      );
    }
  },
  ht = class extends D {
    constructor(e, { docsPath: t }) {
      super(
        [
          `Encoded function signature "${e}" not found on ABI.`,
          `Make sure you are using the correct ABI and that the function exists on it.`,
          `You can look up the signature here: https://4byte.sourcify.dev/?q=${e}.`,
        ].join(`
`),
        { docsPath: t, name: `AbiFunctionSignatureNotFoundError` }
      );
    }
  },
  gt = class extends D {
    constructor(e, t) {
      super(`Found ambiguous types in overloaded ABI items.`, {
        metaMessages: [
          `\`${e.type}\` in \`${qe(e.abiItem)}\`, and`,
          `\`${t.type}\` in \`${qe(t.abiItem)}\``,
          ``,
          `These types encode differently and cannot be distinguished at runtime.`,
          `Remove one of the ambiguous items in the ABI.`,
        ],
        name: `AbiItemAmbiguityError`,
      });
    }
  },
  _t = class extends D {
    constructor({ expectedSize: e, givenSize: t }) {
      super(`Expected bytes${e}, got bytes${t}.`, {
        name: `BytesSizeMismatchError`,
      });
    }
  },
  vt = class extends D {
    constructor({ abiItem: e, data: t, params: n, size: r }) {
      super(
        [
          `Data size of ${r} bytes is too small for non-indexed event parameters.`,
        ].join(`
`),
        {
          metaMessages: [
            `Params: (${Je(n, { includeName: !0 })})`,
            `Data:   ${t} (${r} bytes)`,
          ],
          name: `DecodeLogDataMismatch`,
        }
      ),
        Object.defineProperty(this, "abiItem", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "params", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "size", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.abiItem = e),
        (this.data = t),
        (this.params = n),
        (this.size = r);
    }
  },
  yt = class extends D {
    constructor({ abiItem: e, param: t }) {
      super(
        [
          `Expected a topic for indexed event parameter${
            t.name ? ` "${t.name}"` : ``
          } on event "${qe(e, { includeName: !0 })}".`,
        ].join(`
`),
        { name: `DecodeLogTopicsMismatch` }
      ),
        Object.defineProperty(this, "abiItem", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.abiItem = e);
    }
  },
  bt = class extends D {
    constructor(e, { docsPath: t }) {
      super(
        [
          `Type "${e}" is not a valid encoding type.`,
          `Please provide a valid ABI type.`,
        ].join(`
`),
        { docsPath: t, name: `InvalidAbiEncodingType` }
      );
    }
  },
  xt = class extends D {
    constructor(e, { docsPath: t }) {
      super(
        [
          `Type "${e}" is not a valid decoding type.`,
          `Please provide a valid ABI type.`,
        ].join(`
`),
        { docsPath: t, name: `InvalidAbiDecodingType` }
      );
    }
  },
  St = class extends D {
    constructor(e) {
      super(
        [`Value "${e}" is not a valid array.`].join(`
`),
        { name: `InvalidArrayError` }
      );
    }
  },
  Ct = class extends D {
    constructor(e) {
      super(
        [
          `"${e}" is not a valid definition type.`,
          `Valid types: "function", "event", "error"`,
        ].join(`
`),
        { name: `InvalidDefinitionTypeError` }
      );
    }
  },
  wt = class extends D {
    constructor(e) {
      super(`Type "${e}" is not supported for packed encoding.`, {
        name: `UnsupportedPackedAbiType`,
      });
    }
  },
  Tt = class extends D {
    constructor(e) {
      super(`Filter type "${e}" is not supported.`, {
        name: `FilterTypeNotSupportedError`,
      });
    }
  },
  Et = class extends D {
    constructor({ offset: e, position: t, size: n }) {
      super(
        `Slice ${
          t === `start` ? `starting` : `ending`
        } at offset "${e}" is out-of-bounds (size: ${n}).`,
        { name: `SliceOffsetOutOfBoundsError` }
      );
    }
  },
  Dt = class extends D {
    constructor({ size: e, targetSize: t, type: n }) {
      super(
        `${n.charAt(0).toUpperCase()}${n
          .slice(1)
          .toLowerCase()} size (${e}) exceeds padding size (${t}).`,
        { name: `SizeExceedsPaddingSizeError` }
      );
    }
  },
  Ot = class extends D {
    constructor({ size: e, targetSize: t, type: n }) {
      super(
        `${n.charAt(0).toUpperCase()}${n
          .slice(1)
          .toLowerCase()} is expected to be ${t} ${n} long, but is ${e} ${n} long.`,
        { name: `InvalidBytesLengthError` }
      );
    }
  };
function kt(e, { dir: t, size: n = 32 } = {}) {
  return typeof e == `string`
    ? At(e, { dir: t, size: n })
    : jt(e, { dir: t, size: n });
}
function At(e, { dir: t, size: n = 32 } = {}) {
  if (n === null) return e;
  let r = e.replace(`0x`, ``);
  if (r.length > n * 2)
    throw new Dt({ size: Math.ceil(r.length / 2), targetSize: n, type: `hex` });
  return `0x${r[t === `right` ? `padEnd` : `padStart`](n * 2, `0`)}`;
}
function jt(e, { dir: t, size: n = 32 } = {}) {
  if (n === null) return e;
  if (e.length > n)
    throw new Dt({ size: e.length, targetSize: n, type: `bytes` });
  let r = new Uint8Array(n);
  for (let i = 0; i < n; i++) {
    let a = t === `right`;
    r[a ? i : n - i - 1] = e[a ? i : e.length - i - 1];
  }
  return r;
}
var Mt = class extends D {
    constructor({ max: e, min: t, signed: n, size: r, value: i }) {
      super(
        `Number "${i}" is not in safe ${
          r ? `${r * 8}-bit ${n ? `signed` : `unsigned`} ` : ``
        }integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`,
        { name: `IntegerOutOfRangeError` }
      );
    }
  },
  Nt = class extends D {
    constructor(e) {
      super(
        `Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,
        { name: `InvalidBytesBooleanError` }
      );
    }
  },
  Pt = class extends D {
    constructor(e) {
      super(
        `Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`,
        { name: `InvalidHexBooleanError` }
      );
    }
  },
  Ft = class extends D {
    constructor({ givenSize: e, maxSize: t }) {
      super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
        name: `SizeOverflowError`,
      });
    }
  };
function O(e, { dir: t = `left` } = {}) {
  let n = typeof e == `string` ? e.replace(`0x`, ``) : e,
    r = 0;
  for (
    let e = 0;
    e < n.length - 1 &&
    n[t === `left` ? e : n.length - e - 1].toString() === `0`;
    e++
  )
    r++;
  return (
    (n = t === `left` ? n.slice(r) : n.slice(0, n.length - r)),
    typeof e == `string`
      ? (n.length === 1 && t === `right` && (n = `${n}0`),
        `0x${n.length % 2 == 1 ? `0${n}` : n}`)
      : n
  );
}
function It(e, { size: t }) {
  if (E(e) > t) throw new Ft({ givenSize: E(e), maxSize: t });
}
function k(e, t = {}) {
  let { signed: n } = t;
  t.size && It(e, { size: t.size });
  let r = BigInt(e);
  if (!n) return r;
  let i = Math.ceil((e.length - 2) / 2);
  return r <= (1n << (BigInt(i) * 8n - 1n)) - 1n
    ? r
    : r - BigInt(`0x${`f`.padStart(i * 2, `f`)}`) - 1n;
}
function Lt(e, t = {}) {
  let n = e;
  if ((t.size && (It(n, { size: t.size }), (n = O(n))), O(n) === `0x00`))
    return !1;
  if (O(n) === `0x01`) return !0;
  throw new Pt(n);
}
function A(e, t = {}) {
  let n = k(e, t),
    r = Number(n);
  if (!Number.isSafeInteger(r))
    throw new Mt({
      max: `${2 ** 53 - 1}`,
      min: `${-(2 ** 53 - 1)}`,
      signed: t.signed,
      size: t.size,
      value: `${n}n`,
    });
  return r;
}
function Rt(e, t = {}) {
  let n = P(e);
  return (
    t.size && (It(n, { size: t.size }), (n = O(n, { dir: `right` }))),
    new TextDecoder().decode(n)
  );
}
var zt = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, `0`));
function j(e, t = {}) {
  return typeof e == `number` || typeof e == `bigint`
    ? N(e, t)
    : typeof e == `string`
    ? Ht(e, t)
    : typeof e == `boolean`
    ? Bt(e, t)
    : M(e, t);
}
function Bt(e, t = {}) {
  let n = `0x${Number(e)}`;
  return typeof t.size == `number`
    ? (It(n, { size: t.size }), kt(n, { size: t.size }))
    : n;
}
function M(e, t = {}) {
  let n = ``;
  for (let t = 0; t < e.length; t++) n += zt[e[t]];
  let r = `0x${n}`;
  return typeof t.size == `number`
    ? (It(r, { size: t.size }), kt(r, { dir: `right`, size: t.size }))
    : r;
}
function N(e, t = {}) {
  let { signed: n, size: r } = t,
    i = BigInt(e),
    a;
  r
    ? (a = n ? (1n << (BigInt(r) * 8n - 1n)) - 1n : 2n ** (BigInt(r) * 8n) - 1n)
    : typeof e == `number` && (a = BigInt(2 ** 53 - 1));
  let o = typeof a == `bigint` && n ? -a - 1n : 0;
  if ((a && i > a) || i < o) {
    let t = typeof e == `bigint` ? `n` : ``;
    throw new Mt({
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
  return r ? kt(s, { size: r }) : s;
}
var Vt = new TextEncoder();
function Ht(e, t = {}) {
  return M(Vt.encode(e), t);
}
var Ut = new TextEncoder();
function Wt(e, t = {}) {
  return typeof e == `number` || typeof e == `bigint`
    ? Jt(e, t)
    : typeof e == `boolean`
    ? Gt(e, t)
    : Xe(e)
    ? P(e, t)
    : Yt(e, t);
}
function Gt(e, t = {}) {
  let n = new Uint8Array(1);
  return (
    (n[0] = Number(e)),
    typeof t.size == `number`
      ? (It(n, { size: t.size }), kt(n, { size: t.size }))
      : n
  );
}
var Kt = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
function qt(e) {
  if (e >= Kt.zero && e <= Kt.nine) return e - Kt.zero;
  if (e >= Kt.A && e <= Kt.F) return e - (Kt.A - 10);
  if (e >= Kt.a && e <= Kt.f) return e - (Kt.a - 10);
}
function P(e, t = {}) {
  let n = e;
  t.size &&
    (It(n, { size: t.size }), (n = kt(n, { dir: `right`, size: t.size })));
  let r = n.slice(2);
  r.length % 2 && (r = `0${r}`);
  let i = r.length / 2,
    a = new Uint8Array(i);
  for (let e = 0, t = 0; e < i; e++) {
    let n = qt(r.charCodeAt(t++)),
      i = qt(r.charCodeAt(t++));
    if (n === void 0 || i === void 0)
      throw new D(
        `Invalid byte sequence ("${r[t - 2]}${r[t - 1]}" in "${r}").`
      );
    a[e] = n * 16 + i;
  }
  return a;
}
function Jt(e, t) {
  return P(N(e, t));
}
function Yt(e, t = {}) {
  let n = Ut.encode(e);
  return typeof t.size == `number`
    ? (It(n, { size: t.size }), kt(n, { dir: `right`, size: t.size }))
    : n;
}
var Xt = BigInt(2 ** 32 - 1),
  Zt = BigInt(32);
function Qt(e, t = !1) {
  return t
    ? { h: Number(e & Xt), l: Number((e >> Zt) & Xt) }
    : { h: Number((e >> Zt) & Xt) | 0, l: Number(e & Xt) | 0 };
}
function $t(e, t = !1) {
  let n = e.length,
    r = new Uint32Array(n),
    i = new Uint32Array(n);
  for (let a = 0; a < n; a++) {
    let { h: n, l: o } = Qt(e[a], t);
    [r[a], i[a]] = [n, o];
  }
  return [r, i];
}
var en = (e, t, n) => e >>> n,
  tn = (e, t, n) => (e << (32 - n)) | (t >>> n),
  nn = (e, t, n) => (e >>> n) | (t << (32 - n)),
  rn = (e, t, n) => (e << (32 - n)) | (t >>> n),
  an = (e, t, n) => (e << (64 - n)) | (t >>> (n - 32)),
  on = (e, t, n) => (e >>> (n - 32)) | (t << (64 - n)),
  sn = (e, t, n) => (e << n) | (t >>> (32 - n)),
  cn = (e, t, n) => (t << n) | (e >>> (32 - n)),
  ln = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n)),
  un = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
function dn(e, t, n, r) {
  let i = (t >>> 0) + (r >>> 0);
  return { h: (e + n + ((i / 2 ** 32) | 0)) | 0, l: i | 0 };
}
var fn = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0),
  pn = (e, t, n, r) => (t + n + r + ((e / 2 ** 32) | 0)) | 0,
  mn = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0),
  hn = (e, t, n, r, i) => (t + n + r + i + ((e / 2 ** 32) | 0)) | 0,
  gn = (e, t, n, r, i) =>
    (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0),
  _n = (e, t, n, r, i, a) => (t + n + r + i + a + ((e / 2 ** 32) | 0)) | 0,
  vn =
    typeof globalThis == `object` && `crypto` in globalThis
      ? globalThis.crypto
      : void 0;
function yn(e) {
  return (
    e instanceof Uint8Array ||
    (ArrayBuffer.isView(e) && e.constructor.name === `Uint8Array`)
  );
}
function bn(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw Error(`positive integer expected, got ` + e);
}
function xn(e, ...t) {
  if (!yn(e)) throw Error(`Uint8Array expected`);
  if (t.length > 0 && !t.includes(e.length))
    throw Error(
      `Uint8Array expected of length ` + t + `, got length=` + e.length
    );
}
function Sn(e) {
  if (typeof e != `function` || typeof e.create != `function`)
    throw Error(`Hash should be wrapped by utils.createHasher`);
  bn(e.outputLen), bn(e.blockLen);
}
function Cn(e, t = !0) {
  if (e.destroyed) throw Error(`Hash instance has been destroyed`);
  if (t && e.finished) throw Error(`Hash#digest() has already been called`);
}
function wn(e, t) {
  xn(e);
  let n = t.outputLen;
  if (e.length < n)
    throw Error(`digestInto() expects output buffer of length at least ` + n);
}
function Tn(e) {
  return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
}
function En(...e) {
  for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function Dn(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function On(e, t) {
  return (e << (32 - t)) | (e >>> t);
}
var kn = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function An(e) {
  return (
    ((e << 24) & 4278190080) |
    ((e << 8) & 16711680) |
    ((e >>> 8) & 65280) |
    ((e >>> 24) & 255)
  );
}
function jn(e) {
  for (let t = 0; t < e.length; t++) e[t] = An(e[t]);
  return e;
}
var Mn = kn ? (e) => e : jn;
function Nn(e) {
  if (typeof e != `string`) throw Error(`string expected`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function Pn(e) {
  return typeof e == `string` && (e = Nn(e)), xn(e), e;
}
function Fn(...e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    xn(r), (t += r.length);
  }
  let n = new Uint8Array(t);
  for (let t = 0, r = 0; t < e.length; t++) {
    let i = e[t];
    n.set(i, r), (r += i.length);
  }
  return n;
}
var In = class {};
function Ln(e) {
  let t = (t) => e().update(Pn(t)).digest(),
    n = e();
  return (
    (t.outputLen = n.outputLen),
    (t.blockLen = n.blockLen),
    (t.create = () => e()),
    t
  );
}
function Rn(e = 32) {
  if (vn && typeof vn.getRandomValues == `function`)
    return vn.getRandomValues(new Uint8Array(e));
  if (vn && typeof vn.randomBytes == `function`)
    return Uint8Array.from(vn.randomBytes(e));
  throw Error(`crypto.getRandomValues must be defined`);
}
var zn = BigInt(0),
  Bn = BigInt(1),
  Vn = BigInt(2),
  Hn = BigInt(7),
  Un = BigInt(256),
  Wn = BigInt(113),
  Gn = [],
  Kn = [],
  qn = [];
for (let e = 0, t = Bn, n = 1, r = 0; e < 24; e++) {
  ([n, r] = [r, (2 * n + 3 * r) % 5]),
    Gn.push(2 * (5 * r + n)),
    Kn.push((((e + 1) * (e + 2)) / 2) % 64);
  let i = zn;
  for (let e = 0; e < 7; e++)
    (t = ((t << Bn) ^ ((t >> Hn) * Wn)) % Un),
      t & Vn && (i ^= Bn << ((Bn << BigInt(e)) - Bn));
  qn.push(i);
}
var Jn = $t(qn, !0),
  Yn = Jn[0],
  Xn = Jn[1],
  Zn = (e, t, n) => (n > 32 ? ln(e, t, n) : sn(e, t, n)),
  Qn = (e, t, n) => (n > 32 ? un(e, t, n) : cn(e, t, n));
function $n(e, t = 24) {
  let n = new Uint32Array(10);
  for (let r = 24 - t; r < 24; r++) {
    for (let t = 0; t < 10; t++)
      n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
    for (let t = 0; t < 10; t += 2) {
      let r = (t + 8) % 10,
        i = (t + 2) % 10,
        a = n[i],
        o = n[i + 1],
        s = Zn(a, o, 1) ^ n[r],
        c = Qn(a, o, 1) ^ n[r + 1];
      for (let n = 0; n < 50; n += 10) (e[t + n] ^= s), (e[t + n + 1] ^= c);
    }
    let t = e[2],
      i = e[3];
    for (let n = 0; n < 24; n++) {
      let r = Kn[n],
        a = Zn(t, i, r),
        o = Qn(t, i, r),
        s = Gn[n];
      (t = e[s]), (i = e[s + 1]), (e[s] = a), (e[s + 1] = o);
    }
    for (let t = 0; t < 50; t += 10) {
      for (let r = 0; r < 10; r++) n[r] = e[t + r];
      for (let r = 0; r < 10; r++)
        e[t + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10];
    }
    (e[0] ^= Yn[r]), (e[1] ^= Xn[r]);
  }
  En(n);
}
var er = class e extends In {
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
        bn(n),
        !(0 < e && e < 200))
      )
        throw Error(`only keccak-f1600 function is supported`);
      (this.state = new Uint8Array(200)), (this.state32 = Tn(this.state));
    }
    clone() {
      return this._cloneInto();
    }
    keccak() {
      Mn(this.state32),
        $n(this.state32, this.rounds),
        Mn(this.state32),
        (this.posOut = 0),
        (this.pos = 0);
    }
    update(e) {
      Cn(this), (e = Pn(e)), xn(e);
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
      Cn(this, !1), xn(e), this.finish();
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
      return bn(e), this.xofInto(new Uint8Array(e));
    }
    digestInto(e) {
      if ((wn(e, this), this.finished))
        throw Error(`digest() was already called`);
      return this.writeInto(e), this.destroy(), e;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      (this.destroyed = !0), En(this.state);
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
  tr = ((e, t, n) => Ln(() => new er(t, e, n)))(1, 136, 32);
function F(e, t) {
  let n = t || `hex`,
    r = tr(Xe(e, { strict: !1 }) ? Wt(e) : e);
  return n === `bytes` ? r : j(r);
}
var nr = (e) => F(Wt(e));
function rr(e) {
  return nr(e);
}
function ir(e) {
  let t = !0,
    n = ``,
    r = 0,
    i = ``,
    a = !1;
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    if (
      ([`(`, `)`, `,`].includes(s) && (t = !0),
      s === `(` && r++,
      s === `)` && r--,
      t)
    ) {
      if (r === 0) {
        if (s === ` ` && [`event`, `function`, ``].includes(i)) i = ``;
        else if (((i += s), s === `)`)) {
          a = !0;
          break;
        }
        continue;
      }
      if (s === ` `) {
        e[o - 1] !== `,` && n !== `,` && n !== `,(` && ((n = ``), (t = !1));
        continue;
      }
      (i += s), (n += s);
    }
  }
  if (!a) throw new D(`Unable to normalize signature.`);
  return i;
}
var ar = (e) => ir(typeof e == `string` ? e : d(e));
function or(e) {
  return rr(ar(e));
}
var sr = or,
  I = class extends D {
    constructor({ address: e }) {
      super(`Address "${e}" is invalid.`, {
        metaMessages: [
          `- Address must be a hex value of 20 bytes (40 hex characters).`,
          `- Address must match its checksum counterpart.`,
        ],
        name: `InvalidAddressError`,
      });
    }
  },
  cr = class extends Map {
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
      return super.has(e) && (super.delete(e), super.set(e, t)), t;
    }
    set(e, t) {
      if (
        (super.has(e) && super.delete(e),
        super.set(e, t),
        this.maxSize && this.size > this.maxSize)
      ) {
        let e = super.keys().next().value;
        e !== void 0 && super.delete(e);
      }
      return this;
    }
  },
  lr = new cr(8192);
function ur(e, t) {
  if (lr.has(`${e}.${t}`)) return lr.get(`${e}.${t}`);
  let n = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
    r = F(Yt(n), `bytes`),
    i = (t ? n.substring(`${t}0x`.length) : n).split(``);
  for (let e = 0; e < 40; e += 2)
    r[e >> 1] >> 4 >= 8 && i[e] && (i[e] = i[e].toUpperCase()),
      (r[e >> 1] & 15) >= 8 && i[e + 1] && (i[e + 1] = i[e + 1].toUpperCase());
  let a = `0x${i.join(``)}`;
  return lr.set(`${e}.${t}`, a), a;
}
function dr(e, t) {
  if (!L(e, { strict: !1 })) throw new I({ address: e });
  return ur(e, t);
}
var fr = /^0x[a-fA-F0-9]{40}$/,
  pr = new cr(8192);
function L(e, t) {
  let { strict: n = !0 } = t ?? {},
    r = `${e}.${n}`;
  if (pr.has(r)) return pr.get(r);
  let i = fr.test(e) ? e.toLowerCase() === e || !n || ur(e) === e : !1;
  return pr.set(r, i), i;
}
function mr(e) {
  return typeof e[0] == `string` ? R(e) : hr(e);
}
function hr(e) {
  let t = 0;
  for (let n of e) t += n.length;
  let n = new Uint8Array(t),
    r = 0;
  for (let t of e) n.set(t, r), (r += t.length);
  return n;
}
function R(e) {
  return `0x${e.reduce((e, t) => e + t.replace(`0x`, ``), ``)}`;
}
function gr(e, t, n, { strict: r } = {}) {
  return Xe(e, { strict: !1 })
    ? br(e, t, n, { strict: r })
    : yr(e, t, n, { strict: r });
}
function _r(e, t) {
  if (typeof t == `number` && t > 0 && t > E(e) - 1)
    throw new Et({ offset: t, position: `start`, size: E(e) });
}
function vr(e, t, n) {
  if (typeof t == `number` && typeof n == `number` && E(e) !== n - t)
    throw new Et({ offset: n, position: `end`, size: E(e) });
}
function yr(e, t, n, { strict: r } = {}) {
  _r(e, t);
  let i = e.slice(t, n);
  return r && vr(i, t, n), i;
}
function br(e, t, n, { strict: r } = {}) {
  _r(e, t);
  let i = `0x${e.replace(`0x`, ``).slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
  return r && vr(i, t, n), i;
}
var xr = /^(.*)\[([0-9]*)\]$/,
  Sr = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
  Cr =
    /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
function wr(e, t) {
  if (e.length !== t.length)
    throw new ot({ expectedLength: e.length, givenLength: t.length });
  return Dr(Tr({ params: e, values: t }));
}
function Tr({ params: e, values: t }) {
  let n = [];
  for (let r = 0; r < e.length; r++) n.push(Er({ param: e[r], value: t[r] }));
  return n;
}
function Er({ param: e, value: t }) {
  let n = Fr(e.type);
  if (n) {
    let [r, i] = n;
    return kr(t, { length: r, param: { ...e, type: i } });
  }
  if (e.type === `tuple`) return Pr(t, { param: e });
  if (e.type === `address`) return Or(t);
  if (e.type === `bool`) return jr(t);
  if (e.type.startsWith(`uint`) || e.type.startsWith(`int`)) {
    let n = e.type.startsWith(`int`),
      [, , r = `256`] = Cr.exec(e.type) ?? [];
    return Mr(t, { signed: n, size: Number(r) });
  }
  if (e.type.startsWith(`bytes`)) return Ar(t, { param: e });
  if (e.type === `string`) return Nr(t);
  throw new bt(e.type, { docsPath: `/docs/contract/encodeAbiParameters` });
}
function Dr(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    let { dynamic: r, encoded: i } = e[n];
    t += r ? 32 : E(i);
  }
  let n = [],
    r = [],
    i = 0;
  for (let a = 0; a < e.length; a++) {
    let { dynamic: o, encoded: s } = e[a];
    o ? (n.push(N(t + i, { size: 32 })), r.push(s), (i += E(s))) : n.push(s);
  }
  return R([...n, ...r]);
}
function Or(e) {
  if (!L(e)) throw new I({ address: e });
  return { dynamic: !1, encoded: At(e.toLowerCase()) };
}
function kr(e, { length: t, param: n }) {
  let r = t === null;
  if (!Array.isArray(e)) throw new St(e);
  if (!r && e.length !== t)
    throw new it({
      expectedLength: t,
      givenLength: e.length,
      type: `${n.type}[${t}]`,
    });
  let i = e.length === 0 && Ir(n),
    a = [];
  for (let t = 0; t < e.length; t++) {
    let r = Er({ param: n, value: e[t] });
    r.dynamic && (i = !0), a.push(r);
  }
  if (r || i) {
    let e = Dr(a);
    if (r) return { dynamic: !0, encoded: R([N(a.length, { size: 32 }), e]) };
    if (i) return { dynamic: !0, encoded: e };
  }
  return { dynamic: !1, encoded: R(a.map(({ encoded: e }) => e)) };
}
function Ar(e, { param: t }) {
  let [, n] = t.type.split(`bytes`),
    r = E(e);
  if (!n) {
    let t = e;
    return (
      r % 32 != 0 &&
        (t = At(t, {
          dir: `right`,
          size: Math.ceil((e.length - 2) / 2 / 32) * 32,
        })),
      { dynamic: !0, encoded: R([At(N(r, { size: 32 })), t]) }
    );
  }
  if (r !== Number.parseInt(n, 10))
    throw new at({ expectedSize: Number.parseInt(n, 10), value: e });
  return { dynamic: !1, encoded: At(e, { dir: `right` }) };
}
function jr(e) {
  if (typeof e != `boolean`)
    throw new D(
      `Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`
    );
  return { dynamic: !1, encoded: At(Bt(e)) };
}
function Mr(e, { signed: t, size: n = 256 }) {
  if (typeof n == `number`) {
    let r = 2n ** (BigInt(n) - (t ? 1n : 0n)) - 1n,
      i = t ? -r - 1n : 0n;
    if (e > r || e < i)
      throw new Mt({
        max: r.toString(),
        min: i.toString(),
        signed: t,
        size: n / 8,
        value: e.toString(),
      });
  }
  return { dynamic: !1, encoded: N(e, { size: 32, signed: t }) };
}
function Nr(e) {
  let t = Ht(e),
    n = Math.ceil(E(t) / 32),
    r = [];
  for (let e = 0; e < n; e++)
    r.push(At(gr(t, e * 32, (e + 1) * 32), { dir: `right` }));
  return { dynamic: !0, encoded: R([At(N(E(t), { size: 32 })), ...r]) };
}
function Pr(e, { param: t }) {
  let n = !1,
    r = [];
  for (let i = 0; i < t.components.length; i++) {
    let a = t.components[i],
      o = Er({ param: a, value: e[Array.isArray(e) ? i : a.name] });
    r.push(o), o.dynamic && (n = !0);
  }
  return { dynamic: n, encoded: n ? Dr(r) : R(r.map(({ encoded: e }) => e)) };
}
function Fr(e) {
  let t = e.match(/^(.*)\[(\d+)?\]$/);
  return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
}
function Ir(e) {
  let { type: t } = e;
  if (t === `string` || t === `bytes` || t.endsWith(`[]`)) return !0;
  if (t === `tuple`) return e.components.some(Ir);
  let n = Fr(t);
  return n ? Ir({ ...e, type: n[1] }) : !1;
}
var Lr = (e) => gr(or(e), 0, 4);
function Rr(e) {
  let { abi: t, args: n = [], name: r } = e,
    i = Xe(r, { strict: !1 }),
    a = t.filter((e) =>
      i
        ? e.type === `function`
          ? Lr(e) === r
          : e.type === `event` && sr(e) === r
        : `name` in e && e.name === r
    );
  if (a.length === 0) return;
  if (a.length === 1) return a[0];
  let o;
  for (let e of a)
    if (`inputs` in e) {
      if (!n || n.length === 0) {
        if (!e.inputs || e.inputs.length === 0) return e;
        continue;
      }
      if (
        e.inputs &&
        e.inputs.length !== 0 &&
        e.inputs.length === n.length &&
        n.every((t, n) => {
          let r = `inputs` in e && e.inputs[n];
          return r ? zr(t, r) : !1;
        })
      ) {
        if (o && `inputs` in o && o.inputs) {
          let t = Br(e.inputs, o.inputs, n);
          if (t)
            throw new gt(
              { abiItem: e, type: t[0] },
              { abiItem: o, type: t[1] }
            );
        }
        o = e;
      }
    }
  return o || a[0];
}
function zr(e, t) {
  let n = typeof e,
    r = t.type;
  switch (r) {
    case `address`:
      return L(e, { strict: !1 });
    case `bool`:
      return n === `boolean`;
    case `function`:
      return n === `string`;
    case `string`:
      return n === `string`;
    default:
      return r === `tuple` && `components` in t
        ? Object.values(t.components).every(
            (t, r) => n === `object` && zr(Object.values(e)[r], t)
          )
        : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
            r
          )
        ? n === `number` || n === `bigint`
        : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)
        ? n === `string` || e instanceof Uint8Array
        : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)
        ? Array.isArray(e) &&
          e.every((e) =>
            zr(e, { ...t, type: r.replace(/(\[[0-9]{0,}\])$/, ``) })
          )
        : !1;
  }
}
function Br(e, t, n) {
  for (let r in e) {
    let i = e[r],
      a = t[r];
    if (
      i.type === `tuple` &&
      a.type === `tuple` &&
      `components` in i &&
      `components` in a
    )
      return Br(i.components, a.components, n[r]);
    let o = [i.type, a.type];
    if (
      (o.includes(`address`) && o.includes(`bytes20`)) ||
      (((o.includes(`address`) && o.includes(`string`)) ||
        (o.includes(`address`) && o.includes(`bytes`))) &&
        L(n[r], { strict: !1 }))
    )
      return o;
  }
}
var Vr = `/docs/contract/encodeEventTopics`;
function Hr(e) {
  let { abi: t, eventName: n, args: r } = e,
    i = t[0];
  if (n) {
    let e = Rr({ abi: t, name: n });
    if (!e) throw new ft(n, { docsPath: Vr });
    i = e;
  }
  if (i.type !== `event`) throw new ft(void 0, { docsPath: Vr });
  let a = [];
  if (r && `inputs` in i) {
    let e = i.inputs?.filter((e) => `indexed` in e && e.indexed),
      t = Array.isArray(r)
        ? r
        : Object.values(r).length > 0
        ? e?.map((e) => r[e.name]) ?? []
        : [];
    t.length > 0 &&
      (a =
        e?.map((e, n) =>
          Array.isArray(t[n])
            ? t[n].map((r, i) => Ur({ param: e, value: t[n][i] }))
            : t[n] !== void 0 && t[n] !== null
            ? Ur({ param: e, value: t[n] })
            : null
        ) ?? []);
  }
  return i.anonymous ? a : [sr(qe(i)), ...a];
}
function Ur({ param: e, value: t }) {
  if (e.type === `string` || e.type === `bytes`) return F(Wt(t));
  if (e.type === `tuple` || e.type.match(/^(.*)\[(\d+)?\]$/))
    throw new Tt(e.type);
  return wr([e], [t]);
}
function Wr(e, { method: t }) {
  let n = {};
  return (
    e.transport.type === `fallback` &&
      e.transport.onResponse?.(
        ({ method: e, response: r, status: i, transport: a }) => {
          i === `success` && t === e && (n[r] = a.request);
        }
      ),
    (t) => n[t] || e.request
  );
}
async function Gr(e, t) {
  let {
      address: n,
      abi: r,
      args: i,
      eventName: a,
      fromBlock: o,
      strict: s,
      toBlock: c,
    } = t,
    l = Wr(e, { method: `eth_newFilter` }),
    u = a ? Hr({ abi: r, args: i, eventName: a }) : void 0,
    d = await e.request({
      method: `eth_newFilter`,
      params: [
        {
          address: n,
          fromBlock: typeof o == `bigint` ? N(o) : o,
          toBlock: typeof c == `bigint` ? N(c) : c,
          topics: u,
        },
      ],
    });
  return {
    abi: r,
    args: i,
    eventName: a,
    id: d,
    request: l(d),
    strict: !!s,
    type: `event`,
  };
}
function z(e) {
  return typeof e == `string` ? { address: e, type: `json-rpc` } : e;
}
var Kr = `/docs/contract/encodeFunctionData`;
function qr(e) {
  let { abi: t, args: n, functionName: r } = e,
    i = t[0];
  if (r) {
    let e = Rr({ abi: t, args: n, name: r });
    if (!e) throw new pt(r, { docsPath: Kr });
    i = e;
  }
  if (i.type !== `function`) throw new pt(void 0, { docsPath: Kr });
  return { abi: [i], functionName: Lr(qe(i)) };
}
function B(e) {
  let { args: t } = e,
    { abi: n, functionName: r } =
      e.abi.length === 1 && e.functionName?.startsWith(`0x`) ? e : qr(e),
    i = n[0];
  return R([
    r,
    (`inputs` in i && i.inputs ? wr(i.inputs, t ?? []) : void 0) ?? `0x`,
  ]);
}
var Jr = {
    1: "An `assert` condition failed.",
    17: `Arithmetic operation resulted in underflow or overflow.`,
    18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
    33: `Attempted to convert to an invalid type.`,
    34: `Attempted to access a storage byte array that is incorrectly encoded.`,
    49: "Performed `.pop()` on an empty array",
    50: `Array index is out of bounds.`,
    65: `Allocated too much memory or created an array which is too large.`,
    81: `Attempted to call a zero-initialized variable of internal function type.`,
  },
  Yr = {
    inputs: [{ name: `message`, type: `string` }],
    name: `Error`,
    type: `error`,
  },
  Xr = {
    inputs: [{ name: `reason`, type: `uint256` }],
    name: `Panic`,
    type: `error`,
  },
  Zr = class extends D {
    constructor({ offset: e }) {
      super(`Offset \`${e}\` cannot be negative.`, {
        name: `NegativeOffsetError`,
      });
    }
  },
  Qr = class extends D {
    constructor({ length: e, position: t }) {
      super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`, {
        name: `PositionOutOfBoundsError`,
      });
    }
  },
  $r = class extends D {
    constructor({ count: e, limit: t }) {
      super(
        `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`,
        { name: `RecursiveReadLimitExceededError` }
      );
    }
  },
  ei = {
    bytes: new Uint8Array(),
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: new Map(),
    recursiveReadCount: 0,
    recursiveReadLimit: 1 / 0,
    assertReadLimit() {
      if (this.recursiveReadCount >= this.recursiveReadLimit)
        throw new $r({
          count: this.recursiveReadCount + 1,
          limit: this.recursiveReadLimit,
        });
    },
    assertPosition(e) {
      if (e < 0 || e > this.bytes.length - 1)
        throw new Qr({ length: this.bytes.length, position: e });
    },
    decrementPosition(e) {
      if (e < 0) throw new Zr({ offset: e });
      let t = this.position - e;
      this.assertPosition(t), (this.position = t);
    },
    getReadCount(e) {
      return this.positionReadCount.get(e || this.position) || 0;
    },
    incrementPosition(e) {
      if (e < 0) throw new Zr({ offset: e });
      let t = this.position + e;
      this.assertPosition(t), (this.position = t);
    },
    inspectByte(e) {
      let t = e ?? this.position;
      return this.assertPosition(t), this.bytes[t];
    },
    inspectBytes(e, t) {
      let n = t ?? this.position;
      return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e);
    },
    inspectUint8(e) {
      let t = e ?? this.position;
      return this.assertPosition(t), this.bytes[t];
    },
    inspectUint16(e) {
      let t = e ?? this.position;
      return this.assertPosition(t + 1), this.dataView.getUint16(t);
    },
    inspectUint24(e) {
      let t = e ?? this.position;
      return (
        this.assertPosition(t + 2),
        (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
      );
    },
    inspectUint32(e) {
      let t = e ?? this.position;
      return this.assertPosition(t + 3), this.dataView.getUint32(t);
    },
    pushByte(e) {
      this.assertPosition(this.position),
        (this.bytes[this.position] = e),
        this.position++;
    },
    pushBytes(e) {
      this.assertPosition(this.position + e.length - 1),
        this.bytes.set(e, this.position),
        (this.position += e.length);
    },
    pushUint8(e) {
      this.assertPosition(this.position),
        (this.bytes[this.position] = e),
        this.position++;
    },
    pushUint16(e) {
      this.assertPosition(this.position + 1),
        this.dataView.setUint16(this.position, e),
        (this.position += 2);
    },
    pushUint24(e) {
      this.assertPosition(this.position + 2),
        this.dataView.setUint16(this.position, e >> 8),
        this.dataView.setUint8(this.position + 2, e & 255),
        (this.position += 3);
    },
    pushUint32(e) {
      this.assertPosition(this.position + 3),
        this.dataView.setUint32(this.position, e),
        (this.position += 4);
    },
    readByte() {
      this.assertReadLimit(), this._touch();
      let e = this.inspectByte();
      return this.position++, e;
    },
    readBytes(e, t) {
      this.assertReadLimit(), this._touch();
      let n = this.inspectBytes(e);
      return (this.position += t ?? e), n;
    },
    readUint8() {
      this.assertReadLimit(), this._touch();
      let e = this.inspectUint8();
      return (this.position += 1), e;
    },
    readUint16() {
      this.assertReadLimit(), this._touch();
      let e = this.inspectUint16();
      return (this.position += 2), e;
    },
    readUint24() {
      this.assertReadLimit(), this._touch();
      let e = this.inspectUint24();
      return (this.position += 3), e;
    },
    readUint32() {
      this.assertReadLimit(), this._touch();
      let e = this.inspectUint32();
      return (this.position += 4), e;
    },
    get remaining() {
      return this.bytes.length - this.position;
    },
    setPosition(e) {
      let t = this.position;
      return (
        this.assertPosition(e), (this.position = e), () => (this.position = t)
      );
    },
    _touch() {
      if (this.recursiveReadLimit === 1 / 0) return;
      let e = this.getReadCount();
      this.positionReadCount.set(this.position, e + 1),
        e > 0 && this.recursiveReadCount++;
    },
  };
function ti(e, { recursiveReadLimit: t = 8192 } = {}) {
  let n = Object.create(ei);
  return (
    (n.bytes = e),
    (n.dataView = new DataView(e.buffer ?? e, e.byteOffset, e.byteLength)),
    (n.positionReadCount = new Map()),
    (n.recursiveReadLimit = t),
    n
  );
}
function ni(e, t = {}) {
  return t.size !== void 0 && It(e, { size: t.size }), k(M(e), t);
}
function ri(e, t = {}) {
  let n = e;
  if (
    (t.size !== void 0 && (It(n, { size: t.size }), (n = O(n))),
    n.length > 1 || n[0] > 1)
  )
    throw new Nt(n);
  return !!n[0];
}
function ii(e, t = {}) {
  return t.size !== void 0 && It(e, { size: t.size }), A(M(e), t);
}
function ai(e, t = {}) {
  let n = e;
  return (
    t.size !== void 0 &&
      (It(n, { size: t.size }), (n = O(n, { dir: `right` }))),
    new TextDecoder().decode(n)
  );
}
function oi(e, t) {
  let n = typeof t == `string` ? P(t) : t,
    r = ti(n);
  if (E(n) === 0 && e.length > 0) throw new rt();
  if (E(t) && E(t) < 32)
    throw new nt({
      data: typeof t == `string` ? t : M(t),
      params: e,
      size: E(t),
    });
  let i = 0,
    a = [];
  for (let t = 0; t < e.length; ++t) {
    let o = e[t];
    i < n.length && r.setPosition(i);
    let [s, c] = si(r, o, { staticPosition: 0 });
    (i += c), a.push(s);
  }
  return a;
}
function si(e, t, { staticPosition: n }) {
  let r = Fr(t.type);
  if (r) {
    let [i, a] = r;
    return di(e, { ...t, type: a }, { length: i, staticPosition: n });
  }
  if (t.type === `tuple`) return hi(e, t, { staticPosition: n });
  if (t.type === `address`) return ui(e);
  if (t.type === `bool`) return fi(e);
  if (t.type.startsWith(`bytes`)) return pi(e, t, { staticPosition: n });
  if (t.type.startsWith(`uint`) || t.type.startsWith(`int`)) return mi(e, t);
  if (t.type === `string`) return gi(e, { staticPosition: n });
  throw new xt(t.type, { docsPath: `/docs/contract/decodeAbiParameters` });
}
var ci = 32,
  li = 32;
function ui(e) {
  return [ur(M(yr(e.readBytes(32), -20))), 32];
}
function di(e, t, { length: n, staticPosition: r }) {
  if (n === null) {
    let n = r + ii(e.readBytes(li)),
      i = n + ci;
    e.setPosition(n);
    let a = ii(e.readBytes(ci)),
      o = _i(t),
      s = 0,
      c = [];
    for (let n = 0; n < a; ++n) {
      e.setPosition(i + (o ? n * 32 : s));
      let [r, a] = si(e, t, { staticPosition: i });
      (s += a), c.push(r), a === 0 && (e.assertReadLimit(), e._touch());
    }
    return e.setPosition(r + 32), [c, 32];
  }
  if (_i(t)) {
    let i = r + ii(e.readBytes(li)),
      a = [];
    for (let r = 0; r < n; ++r) {
      e.setPosition(i + r * 32);
      let [n] = si(e, t, { staticPosition: i });
      a.push(n);
    }
    return e.setPosition(r + 32), [a, 32];
  }
  let i = 0,
    a = [];
  for (let o = 0; o < n; ++o) {
    let [n, o] = si(e, t, { staticPosition: r + i });
    (i += o), a.push(n), o === 0 && (e.assertReadLimit(), e._touch());
  }
  return [a, i];
}
function fi(e) {
  return [ri(e.readBytes(32), { size: 32 }), 32];
}
function pi(e, t, { staticPosition: n }) {
  let [r, i] = t.type.split(`bytes`);
  if (!i) {
    let t = ii(e.readBytes(32));
    e.setPosition(n + t);
    let r = ii(e.readBytes(32));
    if (r === 0) return e.setPosition(n + 32), [`0x`, 32];
    let i = e.readBytes(r);
    return e.setPosition(n + 32), [M(i), 32];
  }
  return [M(e.readBytes(Number.parseInt(i, 10), 32)), 32];
}
function mi(e, t) {
  let n = t.type.startsWith(`int`),
    r = Number.parseInt(t.type.split(`int`)[1] || `256`, 10),
    i = e.readBytes(32);
  return [r > 48 ? ni(i, { signed: n }) : ii(i, { signed: n }), 32];
}
function hi(e, t, { staticPosition: n }) {
  let r = t.components.length === 0 || t.components.some(({ name: e }) => !e),
    i = r ? [] : {},
    a = 0;
  if (_i(t)) {
    let o = n + ii(e.readBytes(li));
    for (let n = 0; n < t.components.length; ++n) {
      let s = t.components[n];
      e.setPosition(o + a);
      let [c, l] = si(e, s, { staticPosition: o });
      (a += l), (i[r ? n : s?.name] = c);
    }
    return e.setPosition(n + 32), [i, 32];
  }
  for (let o = 0; o < t.components.length; ++o) {
    let s = t.components[o],
      [c, l] = si(e, s, { staticPosition: n });
    (i[r ? o : s?.name] = c), (a += l);
  }
  return [i, a];
}
function gi(e, { staticPosition: t }) {
  let n = t + ii(e.readBytes(32));
  e.setPosition(n);
  let r = ii(e.readBytes(32));
  if (r === 0) return e.setPosition(t + 32), [``, 32];
  let i = ai(e.readBytes(r, 32));
  return e.setPosition(t + 32), [i, 32];
}
function _i(e) {
  let { type: t } = e;
  if (t === `string` || t === `bytes` || t.endsWith(`[]`)) return !0;
  if (t === `tuple`) return e.components?.some(_i);
  let n = Fr(e.type);
  return !!(n && _i({ ...e, type: n[1] }));
}
function vi(e) {
  let { abi: t, data: n, cause: r } = e,
    i = gr(n, 0, 4);
  if (i === `0x`) throw new rt({ cause: r });
  let a = [...(t || []), Yr, Xr].find(
    (e) => e.type === `error` && i === Lr(qe(e))
  );
  if (!a)
    throw new lt(i, { docsPath: `/docs/contract/decodeErrorResult`, cause: r });
  return {
    abiItem: a,
    args:
      `inputs` in a && a.inputs && a.inputs.length > 0
        ? oi(a.inputs, gr(n, 4))
        : void 0,
    errorName: a.name,
  };
}
var V = (e, t, n) =>
  JSON.stringify(
    e,
    (e, n) => {
      let r = typeof n == `bigint` ? n.toString() : n;
      return typeof t == `function` ? t(e, r) : r;
    },
    n
  );
function yi({
  abiItem: e,
  args: t,
  includeFunctionName: n = !0,
  includeName: r = !1,
}) {
  if (`name` in e && `inputs` in e && e.inputs)
    return `${n ? e.name : ``}(${e.inputs
      .map(
        (e, n) =>
          `${r && e.name ? `${e.name}: ` : ``}${
            typeof t[n] == `object` ? V(t[n]) : t[n]
          }`
      )
      .join(`, `)})`;
}
var bi = { wei: 0, gwei: 9, szabo: 12, finney: 15, ether: 18 };
function xi(e, t = 0) {
  if (!Number.isInteger(t) || t < 0) throw new Di({ decimals: t });
  let n = e.toString(),
    r = n.startsWith(`-`);
  r && (n = n.slice(1)), (n = n.padStart(t, `0`));
  let [i, a] = [n.slice(0, n.length - t), n.slice(n.length - t)];
  return (
    (a = a.replace(/(0+)$/, ``)),
    `${r ? `-` : ``}${i || `0`}${a ? `.${a}` : ``}`
  );
}
function Si(e, t = `wei`) {
  return xi(e, bi.ether - bi[t]);
}
function Ci(e, t = `wei`) {
  return xi(e, bi.gwei - bi[t]);
}
function wi(e, t = 0) {
  if (!Number.isInteger(t) || t < 0) throw new Di({ decimals: t });
  if (!/^-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)$/.test(e))
    throw new Ei({ value: e });
  let [n = ``, r = `0`] = e.split(`.`),
    i = n.startsWith(`-`);
  if (
    (i && (n = n.slice(1)),
    n === `` && (n = `0`),
    (r = r.replace(/(0+)$/, ``)),
    t === 0)
  )
    r.length > 0 && Number.parseInt(r[0], 10) >= 5 && (n = `${BigInt(n) + 1n}`),
      (r = ``);
  else if (r.length > t) {
    let e = r.slice(0, t);
    if (Number.parseInt(r.slice(t, t + 1), 10) >= 5) {
      let i = Ti(e);
      i.length > t ? ((r = i.slice(1)), (n = `${BigInt(n) + 1n}`)) : (r = i);
    } else r = e;
  } else r = r.padEnd(t, `0`);
  return BigInt(`${i ? `-` : ``}${n}${r}`);
}
function Ti(e) {
  let t = e.split(``),
    n = t.length - 1;
  for (; n >= 0; ) {
    let e = Number.parseInt(t[n], 10) + 1;
    if (e < 10) return (t[n] = String(e)), t.join(``);
    (t[n] = `0`), n--;
  }
  return `1${t.join(``)}`;
}
var Ei = class extends Error {
    constructor({ value: e }) {
      super(`Value \`${e}\` is not a valid decimal number.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Value.InvalidDecimalNumberError`,
        });
    }
  },
  Di = class extends Error {
    constructor({ decimals: e }) {
      super(`\`decimals\` must be a non-negative integer. Got \`${e}\`.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Value.InvalidDecimalsError`,
        });
    }
  };
function Oi(e, t = `wei`) {
  return Si(e, t);
}
function H(e, t = `wei`) {
  return Ci(e, t);
}
var ki = class extends D {
    constructor({ address: e }) {
      super(`State for account "${e}" is set multiple times.`, {
        name: `AccountStateConflictError`,
      });
    }
  },
  Ai = class extends D {
    constructor() {
      super(`state and stateDiff are set on the same account.`, {
        name: `StateAssignmentConflictError`,
      });
    }
  };
function ji(e) {
  return e.reduce((e, { slot: t, value: n }) => `${e}        ${t}: ${n}\n`, ``);
}
function Mi(e) {
  return e
    .reduce(
      (e, { address: t, ...n }) => {
        let r = `${e}    ${t}:\n`;
        return (
          n.nonce && (r += `      nonce: ${n.nonce}\n`),
          n.balance && (r += `      balance: ${n.balance}\n`),
          n.code && (r += `      code: ${n.code}\n`),
          n.state &&
            ((r += `      state:
`),
            (r += ji(n.state))),
          n.stateDiff &&
            ((r += `      stateDiff:
`),
            (r += ji(n.stateDiff))),
          r
        );
      },
      `  State Override:
`
    )
    .slice(0, -1);
}
function Ni(e) {
  let t = Object.entries(e)
      .map(([e, t]) => (t === void 0 || t === !1 ? null : [e, t]))
      .filter(Boolean),
    n = t.reduce((e, [t]) => Math.max(e, t.length), 0);
  return t.map(([e, t]) => `  ${`${e}:`.padEnd(n + 1)}  ${t}`).join(`
`);
}
var Pi = class extends D {
    constructor({ filledNonce: e, requestedNonce: t }) {
      super(
        `The filled transaction nonce does not match the requested nonce.`,
        {
          metaMessages: [`Requested Nonce: ${t}`, `Filled Nonce: ${e}`],
          name: `FeePayerNonceMismatchError`,
        }
      );
    }
  },
  Fi = class extends D {
    constructor({ v: e }) {
      super(`Invalid \`v\` value "${e}". Expected 27 or 28.`, {
        name: `InvalidLegacyVError`,
      });
    }
  },
  Ii = class extends D {
    constructor({ transaction: e }) {
      super(`Cannot infer a transaction type from provided transaction.`, {
        metaMessages: [
          `Provided Transaction:`,
          `{`,
          Ni(e),
          `}`,
          ``,
          `To infer the type, either provide:`,
          "- a `type` to the Transaction, or",
          "- an EIP-1559 Transaction with `maxFeePerGas`, or",
          "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
          "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
          "- an EIP-7702 Transaction with `authorizationList`, or",
          "- a Legacy Transaction with `gasPrice`",
        ],
        name: `InvalidSerializableTransactionError`,
      });
    }
  },
  Li = class extends D {
    constructor({ storageKey: e }) {
      super(
        `Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor(
          (e.length - 2) / 2
        )} bytes.`,
        { name: `InvalidStorageKeySizeError` }
      );
    }
  },
  Ri = class extends D {
    constructor(
      e,
      {
        account: t,
        docsPath: n,
        chain: r,
        data: i,
        gas: a,
        gasPrice: o,
        maxFeePerGas: s,
        maxPriorityFeePerGas: c,
        nonce: l,
        to: u,
        value: d,
      }
    ) {
      let f = Ni({
        chain: r && `${r?.name} (id: ${r?.id})`,
        from: t?.address,
        to: u,
        value: d !== void 0 && `${Oi(d)} ${r?.nativeCurrency?.symbol || `ETH`}`,
        data: i,
        gas: a,
        gasPrice: o !== void 0 && `${H(o)} gwei`,
        maxFeePerGas: s !== void 0 && `${H(s)} gwei`,
        maxPriorityFeePerGas: c !== void 0 && `${H(c)} gwei`,
        nonce: l,
      });
      super(e.shortMessage, {
        cause: e,
        docsPath: n,
        metaMessages: [
          ...(e.metaMessages ? [...e.metaMessages, ` `] : []),
          `Request Arguments:`,
          f,
        ].filter(Boolean),
        name: `TransactionExecutionError`,
      }),
        Object.defineProperty(this, "cause", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.cause = e);
    }
  },
  zi = class extends D {
    constructor({
      blockHash: e,
      blockNumber: t,
      blockTag: n,
      hash: r,
      index: i,
    }) {
      let a = `Transaction`;
      n &&
        i !== void 0 &&
        (a = `Transaction at block time "${n}" at index "${i}"`),
        e &&
          i !== void 0 &&
          (a = `Transaction at block hash "${e}" at index "${i}"`),
        t &&
          i !== void 0 &&
          (a = `Transaction at block number "${t}" at index "${i}"`),
        r && (a = `Transaction with hash "${r}"`),
        super(`${a} could not be found.`, { name: `TransactionNotFoundError` });
    }
  },
  Bi = class extends D {
    constructor({ hash: e }) {
      super(
        `Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`,
        { name: `TransactionReceiptNotFoundError` }
      );
    }
  },
  Vi = class extends D {
    constructor({ receipt: e }) {
      super(`Transaction with hash "${e.transactionHash}" reverted.`, {
        metaMessages: [
          `The receipt marked the transaction as "reverted". This could mean that the function on the contract you are trying to call threw an error.`,
          ` `,
          `You can attempt to extract the revert reason by:`,
          "- calling the `simulateContract` or `simulateCalls` Action with the `abi` and `functionName` of the contract",
          "- using the `call` Action with raw `data`",
        ],
        name: `TransactionReceiptRevertedError`,
      }),
        Object.defineProperty(this, "receipt", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.receipt = e);
    }
  },
  Hi = class extends D {
    constructor({ hash: e }) {
      super(
        `Timed out while waiting for transaction with hash "${e}" to be confirmed.`,
        { name: `WaitForTransactionReceiptTimeoutError` }
      );
    }
  },
  Ui = (e) => e;
function Wi(e) {
  if (e?.reason) return e.reason;
  if (typeof DOMException == `function`)
    return new DOMException(`This operation was aborted`, `AbortError`);
  let t = Error(`This operation was aborted`);
  return (t.name = `AbortError`), t;
}
function Gi(e) {
  return typeof e == `object` && !!e && `name` in e && e.name === `AbortError`;
}
var Ki = (e) => {
    try {
      let t = new URL(e);
      return !t.username && !t.password
        ? e
        : ((t.username = ``), (t.password = ``), t.toString());
    } catch {
      return e;
    }
  },
  qi = class extends D {
    constructor(
      e,
      {
        account: t,
        docsPath: n,
        chain: r,
        data: i,
        gas: a,
        gasPrice: o,
        maxFeePerGas: s,
        maxPriorityFeePerGas: c,
        nonce: l,
        to: u,
        value: d,
        stateOverride: f,
      }
    ) {
      let p = Ni({
        from: (t ? z(t) : void 0)?.address,
        to: u,
        value: d !== void 0 && `${Oi(d)} ${r?.nativeCurrency?.symbol || `ETH`}`,
        data: i,
        gas: a,
        gasPrice: o !== void 0 && `${H(o)} gwei`,
        maxFeePerGas: s !== void 0 && `${H(s)} gwei`,
        maxPriorityFeePerGas: c !== void 0 && `${H(c)} gwei`,
        nonce: l,
      });
      f && (p += `\n${Mi(f)}`),
        super(e.shortMessage, {
          cause: e,
          docsPath: n,
          metaMessages: [
            ...(e.metaMessages ? [...e.metaMessages, ` `] : []),
            `Raw Call Arguments:`,
            p,
          ].filter(Boolean),
          name: `CallExecutionError`,
        }),
        Object.defineProperty(this, "cause", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.cause = e);
    }
  },
  Ji = class extends D {
    constructor(
      e,
      {
        abi: t,
        args: n,
        contractAddress: r,
        docsPath: i,
        functionName: a,
        sender: o,
      }
    ) {
      let s = Rr({ abi: t, args: n, name: a }),
        c = s
          ? yi({
              abiItem: s,
              args: n,
              includeFunctionName: !1,
              includeName: !1,
            })
          : void 0,
        l = s ? qe(s, { includeName: !0 }) : void 0,
        u = Ni({
          address: r && Ui(r),
          function: l,
          args:
            c &&
            c !== `()` &&
            `${[...Array(a?.length ?? 0).keys()].map(() => ` `).join(``)}${c}`,
          sender: o,
        });
      super(
        e.shortMessage ||
          `An unknown error occurred while executing the contract function "${a}".`,
        {
          cause: e,
          docsPath: i,
          metaMessages: [
            ...(e.metaMessages ? [...e.metaMessages, ` `] : []),
            u && `Contract Call:`,
            u,
          ].filter(Boolean),
          name: `ContractFunctionExecutionError`,
        }
      ),
        Object.defineProperty(this, "abi", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "args", {
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
        Object.defineProperty(this, "contractAddress", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "formattedArgs", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "functionName", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "sender", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.abi = t),
        (this.args = n),
        (this.cause = e),
        (this.contractAddress = r),
        (this.functionName = a),
        (this.sender = o);
    }
  },
  Yi = class extends D {
    constructor({ abi: e, data: t, functionName: n, message: r, cause: i }) {
      let a, o, s, c;
      if (t && t !== `0x`)
        try {
          o = vi({ abi: e, data: t, cause: i });
          let { abiItem: n, errorName: r, args: a } = o;
          if (r === `Error`) c = a[0];
          else if (r === `Panic`) {
            let [e] = a;
            c = Jr[e];
          } else {
            let e = n ? qe(n, { includeName: !0 }) : void 0,
              t =
                n && a
                  ? yi({
                      abiItem: n,
                      args: a,
                      includeFunctionName: !1,
                      includeName: !1,
                    })
                  : void 0;
            s = [
              e ? `Error: ${e}` : ``,
              t && t !== `()`
                ? `       ${[...Array(r?.length ?? 0).keys()]
                    .map(() => ` `)
                    .join(``)}${t}`
                : ``,
            ];
          }
        } catch (e) {
          a = e;
        }
      else r && (c = r);
      let l;
      a instanceof lt &&
        ((l = a.signature),
        (s = [
          `Unable to decode signature "${l}" as it was not found on the provided ABI.`,
          `Make sure you are using the correct ABI and that the error exists on it.`,
          `You can look up the decoded signature here: https://4byte.sourcify.dev/?q=${l}.`,
        ])),
        super(
          (c && c !== `execution reverted`) || l
            ? [
                `The contract function "${n}" reverted with the following ${
                  l ? `signature` : `reason`
                }:`,
                c || l,
              ].join(`
`)
            : `The contract function "${n}" reverted.`,
          {
            cause: a ?? i,
            metaMessages: s,
            name: `ContractFunctionRevertedError`,
          }
        ),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "raw", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "reason", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "signature", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.data = o),
        (this.raw = t),
        (this.reason = c),
        (this.signature = l);
    }
  },
  Xi = class extends D {
    constructor({ functionName: e, cause: t }) {
      super(`The contract function "${e}" returned no data ("0x").`, {
        metaMessages: [
          `This could be due to any of the following:`,
          `  - The contract does not have the function "${e}",`,
          `  - The parameters passed to the contract function may be invalid, or`,
          `  - The address is not a contract.`,
        ],
        name: `ContractFunctionZeroDataError`,
        cause: t,
      });
    }
  },
  Zi = class extends D {
    constructor({ factory: e }) {
      super(
        `Deployment for counterfactual contract call failed${
          e ? ` for factory "${e}".` : ``
        }`,
        {
          metaMessages: [
            `Please ensure:`,
            "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
            "- The `factoryData` is a valid encoded function call for contract deployment function on the factory.",
          ],
          name: `CounterfactualDeploymentFailedError`,
        }
      );
    }
  },
  Qi = class extends D {
    constructor({ data: e, message: t }) {
      super(t || ``, { name: `RawContractError` }),
        Object.defineProperty(this, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 3,
        }),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.data = e);
    }
  },
  $i = class extends D {
    constructor({
      body: e,
      cause: t,
      details: n,
      headers: r,
      status: i,
      url: a,
    }) {
      super(`HTTP request failed.`, {
        cause: t,
        details: n,
        metaMessages: [
          i && `Status: ${i}`,
          `URL: ${Ki(a)}`,
          e && `Request body: ${V(e)}`,
        ].filter(Boolean),
        name: `HttpRequestError`,
      }),
        Object.defineProperty(this, "body", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "headers", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "status", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "url", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.body = e),
        (this.headers = r),
        (this.status = i),
        (this.url = a);
    }
  },
  ea = class extends D {
    constructor({ maxSize: e, size: t }) {
      super(`HTTP response body exceeded the size limit.`, {
        metaMessages: [`Max: ${e} bytes`, `Received: ${t} bytes`],
        name: `ResponseBodyTooLargeError`,
      }),
        Object.defineProperty(this, "maxSize", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "size", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.maxSize = e),
        (this.size = t);
    }
  },
  ta = class extends D {
    constructor({ body: e, error: t, url: n }) {
      super(`RPC Request failed.`, {
        cause: t,
        details: t.message,
        metaMessages: [`URL: ${Ki(n)}`, `Request body: ${V(e)}`],
        name: `RpcRequestError`,
      }),
        Object.defineProperty(this, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "url", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.code = t.code),
        (this.data = t.data),
        (this.url = n);
    }
  },
  na = class extends D {
    constructor({ body: e, url: t }) {
      super(`The request took too long to respond.`, {
        details: `The request timed out.`,
        metaMessages: [`URL: ${Ki(t)}`, `Request body: ${V(e)}`],
        name: `TimeoutError`,
      }),
        Object.defineProperty(this, "url", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.url = t);
    }
  },
  ra = -1,
  U = class extends D {
    constructor(
      e,
      { code: t, docsPath: n, metaMessages: r, name: i, shortMessage: a }
    ) {
      super(a, {
        cause: e,
        docsPath: n,
        metaMessages: r || e?.metaMessages,
        name: i || `RpcError`,
      }),
        Object.defineProperty(this, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.name = i || e.name),
        (this.code = e instanceof ta ? e.code : t ?? ra);
    }
  },
  W = class extends U {
    constructor(e, t) {
      super(e, t),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.data = t.data);
    }
  },
  ia = class e extends U {
    constructor(t) {
      super(t, {
        code: e.code,
        name: `ParseRpcError`,
        shortMessage: `Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.`,
      });
    }
  };
Object.defineProperty(ia, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32700,
});
var aa = class e extends U {
  constructor(t) {
    super(t, {
      code: e.code,
      name: `InvalidRequestRpcError`,
      shortMessage: `JSON is not a valid request object.`,
    });
  }
};
Object.defineProperty(aa, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32600,
});
var oa = class e extends U {
  constructor(t, { method: n } = {}) {
    super(t, {
      code: e.code,
      name: `MethodNotFoundRpcError`,
      shortMessage: `The method${
        n ? ` "${n}"` : ``
      } does not exist / is not available.`,
    });
  }
};
Object.defineProperty(oa, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32601,
});
var sa = class e extends U {
  constructor(t) {
    super(t, {
      code: e.code,
      name: `InvalidParamsRpcError`,
      shortMessage: [
        `Invalid parameters were provided to the RPC method.`,
        `Double check you have provided the correct parameters.`,
      ].join(`
`),
    });
  }
};
Object.defineProperty(sa, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32602,
});
var ca = class e extends U {
  constructor(t) {
    super(t, {
      code: e.code,
      name: `InternalRpcError`,
      shortMessage: `An internal error was received.`,
    });
  }
};
Object.defineProperty(ca, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32603,
});
var la = class e extends U {
  constructor(t) {
    super(t, {
      code: e.code,
      name: `InvalidInputRpcError`,
      shortMessage: [
        `Missing or invalid parameters.`,
        `Double check you have provided the correct parameters.`,
      ].join(`
`),
    });
  }
};
Object.defineProperty(la, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32e3,
});
var ua = class e extends U {
  constructor(t) {
    super(t, {
      code: e.code,
      name: `ResourceNotFoundRpcError`,
      shortMessage: `Requested resource not found.`,
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: `ResourceNotFoundRpcError`,
      });
  }
};
Object.defineProperty(ua, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32001,
});
var da = class e extends U {
  constructor(t) {
    super(t, {
      code: e.code,
      name: `ResourceUnavailableRpcError`,
      shortMessage: `Requested resource not available.`,
    });
  }
};
Object.defineProperty(da, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32002,
});
var fa = class e extends U {
  constructor(t) {
    super(t, {
      code: e.code,
      name: `TransactionRejectedRpcError`,
      shortMessage: `Transaction creation failed.`,
    });
  }
};
Object.defineProperty(fa, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32003,
});
var pa = class e extends U {
  constructor(t, { method: n } = {}) {
    super(t, {
      code: e.code,
      name: `MethodNotSupportedRpcError`,
      shortMessage: `Method${n ? ` "${n}"` : ``} is not supported.`,
    });
  }
};
Object.defineProperty(pa, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32004,
});
var ma = class e extends U {
  constructor(t) {
    super(t, {
      code: e.code,
      name: `LimitExceededRpcError`,
      shortMessage: `Request exceeds defined limit.`,
    });
  }
};
Object.defineProperty(ma, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32005,
});
var ha = class e extends U {
  constructor(t) {
    super(t, {
      code: e.code,
      name: `JsonRpcVersionUnsupportedError`,
      shortMessage: `Version of JSON-RPC protocol is not supported.`,
    });
  }
};
Object.defineProperty(ha, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32006,
});
var ga = class e extends W {
  constructor(t) {
    super(t, {
      code: e.code,
      name: `UserRejectedRequestError`,
      shortMessage: `User rejected the request.`,
    });
  }
};
Object.defineProperty(ga, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4001,
});
var _a = class e extends W {
  constructor(t) {
    super(t, {
      code: e.code,
      name: `UnauthorizedProviderError`,
      shortMessage: `The requested method and/or account has not been authorized by the user.`,
    });
  }
};
Object.defineProperty(_a, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4100,
});
var va = class e extends W {
  constructor(t, { method: n } = {}) {
    super(t, {
      code: e.code,
      name: `UnsupportedProviderMethodError`,
      shortMessage: `The Provider does not support the requested method${
        n ? ` " ${n}"` : ``
      }.`,
    });
  }
};
Object.defineProperty(va, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4200,
});
var ya = class e extends W {
  constructor(t) {
    super(t, {
      code: e.code,
      name: `ProviderDisconnectedError`,
      shortMessage: `The Provider is disconnected from all chains.`,
    });
  }
};
Object.defineProperty(ya, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4900,
});
var ba = class e extends W {
  constructor(t) {
    super(t, {
      code: e.code,
      name: `ChainDisconnectedError`,
      shortMessage: `The Provider is not connected to the requested chain.`,
    });
  }
};
Object.defineProperty(ba, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4901,
});
var xa = class e extends W {
  constructor(t) {
    super(t, {
      code: e.code,
      name: `SwitchChainError`,
      shortMessage: `An error occurred when attempting to switch chain.`,
    });
  }
};
Object.defineProperty(xa, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4902,
});
var Sa = class e extends W {
  constructor(t) {
    super(t, {
      code: e.code,
      name: `UnsupportedNonOptionalCapabilityError`,
      shortMessage: `This Wallet does not support a capability that was not marked as optional.`,
    });
  }
};
Object.defineProperty(Sa, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5700,
});
var Ca = class e extends W {
  constructor(t) {
    super(t, {
      code: e.code,
      name: `UnsupportedChainIdError`,
      shortMessage: `This Wallet does not support the requested chain ID.`,
    });
  }
};
Object.defineProperty(Ca, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5710,
});
var wa = class e extends W {
  constructor(t) {
    super(t, {
      code: e.code,
      name: `DuplicateIdError`,
      shortMessage: `There is already a bundle submitted with this ID.`,
    });
  }
};
Object.defineProperty(wa, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5720,
});
var Ta = class e extends W {
  constructor(t) {
    super(t, {
      code: e.code,
      name: `UnknownBundleIdError`,
      shortMessage: `This bundle id is unknown / has not been submitted`,
    });
  }
};
Object.defineProperty(Ta, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5730,
});
var Ea = class e extends W {
  constructor(t) {
    super(t, {
      code: e.code,
      name: `BundleTooLargeError`,
      shortMessage: `The call bundle is too large for the Wallet to process.`,
    });
  }
};
Object.defineProperty(Ea, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5740,
});
var Da = class e extends W {
  constructor(t) {
    super(t, {
      code: e.code,
      name: `AtomicReadyWalletRejectedUpgradeError`,
      shortMessage: `The Wallet can support atomicity after an upgrade, but the user rejected the upgrade.`,
    });
  }
};
Object.defineProperty(Da, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5750,
});
var Oa = class e extends W {
  constructor(t) {
    super(t, {
      code: e.code,
      name: `AtomicityNotSupportedError`,
      shortMessage: `The wallet does not support atomic execution but the request requires it.`,
    });
  }
};
Object.defineProperty(Oa, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5760,
});
var ka = class e extends W {
  constructor(t) {
    super(t, {
      code: e.code,
      name: `WalletConnectSessionSettlementError`,
      shortMessage: `WalletConnect session settlement failed.`,
    });
  }
};
Object.defineProperty(ka, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 7e3,
});
var Aa = class extends U {
    constructor(e) {
      super(e, {
        name: `UnknownRpcError`,
        shortMessage: `An unknown RPC error occurred.`,
      });
    }
  },
  ja = 3;
function Ma(
  e,
  { abi: t, address: n, args: r, docsPath: i, functionName: a, sender: o }
) {
  let s =
      e instanceof Qi
        ? e
        : e instanceof D
        ? e.walk((e) => `data` in e) || e.walk()
        : {},
    { code: c, data: l, details: u, message: d, shortMessage: f } = s;
  return new Ji(
    e instanceof rt
      ? new Xi({ functionName: a, cause: e })
      : ([ja, ca.code].includes(c) && (l || u || d || f)) ||
        (c === la.code && u === `execution reverted` && l)
      ? new Yi({
          abi: t,
          data: typeof l == `object` ? l.data : l,
          functionName: a,
          message: s instanceof ta ? u : f ?? d,
          cause: e,
        })
      : e,
    {
      abi: t,
      args: r,
      contractAddress: n,
      docsPath: i,
      functionName: a,
      sender: o,
    }
  );
}
function Na(e) {
  return ur(`0x${F(`0x${e.substring(4)}`).substring(26)}`);
}
async function Pa({ hash: e, signature: n }) {
  let r = Xe(e) ? e : j(e),
    { secp256k1: i } = await t(async () => {
      let { secp256k1: e } = await Promise.resolve().then(() => Im);
      return { secp256k1: e };
    }, void 0);
  return `0x${(() => {
    if (typeof n == `object` && `r` in n && `s` in n) {
      let { r: e, s: t, v: r, yParity: a } = n,
        o = Fa(Number(a ?? r));
      return new i.Signature(k(e), k(t)).addRecoveryBit(o);
    }
    let e = Xe(n) ? n : j(n);
    if (E(e) !== 65) throw Error(`invalid signature length`);
    let t = Fa(A(`0x${e.slice(130)}`));
    return i.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(t);
  })()
    .recoverPublicKey(r.substring(2))
    .toHex(!1)}`;
}
function Fa(e) {
  if (e === 0 || e === 1) return e;
  if (e === 27) return 0;
  if (e === 28) return 1;
  throw Error(`Invalid yParityOrV value`);
}
async function Ia({ hash: e, signature: t }) {
  return Na(await Pa({ hash: e, signature: t }));
}
function La(e, t = `hex`) {
  let n = Ra(e),
    r = ti(new Uint8Array(n.length));
  return n.encode(r), t === `hex` ? M(r.bytes) : r.bytes;
}
function Ra(e) {
  return Array.isArray(e) ? za(e.map((e) => Ra(e))) : Ba(e);
}
function za(e) {
  let t = e.reduce((e, t) => e + t.length, 0),
    n = Va(t);
  return {
    length: t <= 55 ? 1 + t : 1 + n + t,
    encode(r) {
      t <= 55
        ? r.pushByte(192 + t)
        : (r.pushByte(247 + n),
          n === 1
            ? r.pushUint8(t)
            : n === 2
            ? r.pushUint16(t)
            : n === 3
            ? r.pushUint24(t)
            : r.pushUint32(t));
      for (let { encode: t } of e) t(r);
    },
  };
}
function Ba(e) {
  let t = typeof e == `string` ? P(e) : e,
    n = Va(t.length);
  return {
    length:
      t.length === 1 && t[0] < 128
        ? 1
        : t.length <= 55
        ? 1 + t.length
        : 1 + n + t.length,
    encode(e) {
      t.length === 1 && t[0] < 128
        ? e.pushBytes(t)
        : t.length <= 55
        ? (e.pushByte(128 + t.length), e.pushBytes(t))
        : (e.pushByte(183 + n),
          n === 1
            ? e.pushUint8(t.length)
            : n === 2
            ? e.pushUint16(t.length)
            : n === 3
            ? e.pushUint24(t.length)
            : e.pushUint32(t.length),
          e.pushBytes(t));
    },
  };
}
function Va(e) {
  if (e < 256) return 1;
  if (e < 2 ** 16) return 2;
  if (e < 2 ** 24) return 3;
  if (e < 2 ** 32) return 4;
  throw new D(`Length is too large.`);
}
function Ha(e) {
  let { chainId: t, nonce: n, to: r } = e,
    i = e.contractAddress ?? e.address,
    a = F(R([`0x05`, La([t ? N(t) : `0x`, i, n ? N(n) : `0x`])]));
  return r === `bytes` ? P(a) : a;
}
async function Ua(e) {
  let { authorization: t, signature: n } = e;
  return Ia({ hash: Ha(t), signature: n ?? t });
}
var Wa = class extends D {
    constructor(
      e,
      {
        account: t,
        docsPath: n,
        chain: r,
        data: i,
        gas: a,
        gasPrice: o,
        maxFeePerGas: s,
        maxPriorityFeePerGas: c,
        nonce: l,
        to: u,
        value: d,
      }
    ) {
      let f = Ni({
        from: t?.address,
        to: u,
        value: d !== void 0 && `${Oi(d)} ${r?.nativeCurrency?.symbol || `ETH`}`,
        data: i,
        gas: a,
        gasPrice: o !== void 0 && `${H(o)} gwei`,
        maxFeePerGas: s !== void 0 && `${H(s)} gwei`,
        maxPriorityFeePerGas: c !== void 0 && `${H(c)} gwei`,
        nonce: l,
      });
      super(e.shortMessage, {
        cause: e,
        docsPath: n,
        metaMessages: [
          ...(e.metaMessages ? [...e.metaMessages, ` `] : []),
          `Estimate Gas Arguments:`,
          f,
        ].filter(Boolean),
        name: `EstimateGasExecutionError`,
      }),
        Object.defineProperty(this, "cause", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.cause = e);
    }
  },
  Ga = class extends D {
    constructor({ cause: e, message: t } = {}) {
      let n = t
        ?.replace(`execution reverted: `, ``)
        ?.replace(`execution reverted`, ``);
      super(
        `Execution reverted ${
          n ? `with reason: ${n}` : `for an unknown reason`
        }.`,
        { cause: e, name: `ExecutionRevertedError` }
      );
    }
  };
Object.defineProperty(Ga, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 3,
}),
  Object.defineProperty(Ga, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /execution reverted|gas required exceeds allowance/,
  });
var Ka = class extends D {
  constructor({ cause: e, maxFeePerGas: t } = {}) {
    super(
      `The fee cap (\`maxFeePerGas\`${
        t ? ` = ${H(t)} gwei` : ``
      }) cannot be higher than the maximum allowed value (2^256-1).`,
      { cause: e, name: `FeeCapTooHighError` }
    );
  }
};
Object.defineProperty(Ka, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
});
var qa = class extends D {
  constructor({ cause: e, maxFeePerGas: t } = {}) {
    super(
      `The fee cap (\`maxFeePerGas\`${
        t ? ` = ${H(t)}` : ``
      } gwei) cannot be lower than the block base fee.`,
      { cause: e, name: `FeeCapTooLowError` }
    );
  }
};
Object.defineProperty(qa, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value:
    /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
});
var Ja = class extends D {
  constructor({ cause: e, nonce: t } = {}) {
    super(
      `Nonce provided for the transaction ${
        t ? `(${t}) ` : ``
      }is higher than the next one expected.`,
      { cause: e, name: `NonceTooHighError` }
    );
  }
};
Object.defineProperty(Ja, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too high/,
});
var Ya = class extends D {
  constructor({ cause: e, nonce: t } = {}) {
    super(
      [
        `Nonce provided for the transaction ${
          t ? `(${t}) ` : ``
        }is lower than the current nonce of the account.`,
        "Try increasing the nonce or find the latest nonce with `getTransactionCount`.",
      ].join(`
`),
      { cause: e, name: `NonceTooLowError` }
    );
  }
};
Object.defineProperty(Ya, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too low|transaction already imported|already known/,
});
var Xa = class extends D {
  constructor({ cause: e, nonce: t } = {}) {
    super(
      `Nonce provided for the transaction ${
        t ? `(${t}) ` : ``
      }exceeds the maximum allowed nonce.`,
      { cause: e, name: `NonceMaxValueError` }
    );
  }
};
Object.defineProperty(Xa, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce has max value/,
});
var Za = class extends D {
  constructor({ cause: e } = {}) {
    super(
      [
        `The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.`,
      ].join(`
`),
      {
        cause: e,
        metaMessages: [
          `This error could arise when the account does not have enough funds to:`,
          ` - pay for the total gas fee,`,
          ` - pay for the value to send.`,
          ` `,
          "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
          " - `gas` is the amount of gas needed for transaction to execute,",
          " - `gas fee` is the gas fee,",
          " - `value` is the amount of ether to send to the recipient.",
        ],
        name: `InsufficientFundsError`,
      }
    );
  }
};
Object.defineProperty(Za, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /insufficient funds|exceeds transaction sender account balance/,
});
var Qa = class extends D {
  constructor({ cause: e, gas: t } = {}) {
    super(
      `The amount of gas ${
        t ? `(${t}) ` : ``
      }provided for the transaction exceeds the limit allowed for the block.`,
      { cause: e, name: `IntrinsicGasTooHighError` }
    );
  }
};
Object.defineProperty(Qa, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too high|gas limit reached/,
});
var $a = class extends D {
  constructor({ cause: e, gas: t } = {}) {
    super(
      `The amount of gas ${
        t ? `(${t}) ` : ``
      }provided for the transaction is too low.`,
      { cause: e, name: `IntrinsicGasTooLowError` }
    );
  }
};
Object.defineProperty($a, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too low/,
});
var eo = class extends D {
  constructor({ cause: e }) {
    super(`The transaction type is not supported for this chain.`, {
      cause: e,
      name: `TransactionTypeNotSupportedError`,
    });
  }
};
Object.defineProperty(eo, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /transaction type not valid/,
});
var to = class extends D {
  constructor({ cause: e, maxPriorityFeePerGas: t, maxFeePerGas: n } = {}) {
    super(
      [
        `The provided tip (\`maxPriorityFeePerGas\`${
          t ? ` = ${H(t)} gwei` : ``
        }) cannot be higher than the fee cap (\`maxFeePerGas\`${
          n ? ` = ${H(n)} gwei` : ``
        }).`,
      ].join(`
`),
      { cause: e, name: `TipAboveFeeCapError` }
    );
  }
};
Object.defineProperty(to, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value:
    /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
});
var no = class extends D {
  constructor({ cause: e }) {
    super(`An error occurred while executing: ${e?.shortMessage}`, {
      cause: e,
      name: `UnknownNodeError`,
    });
  }
};
function ro(e, t) {
  let n = (e.details || ``).toLowerCase(),
    r = e instanceof D ? e.walk((e) => e?.code === Ga.code) : e;
  return r instanceof D
    ? new Ga({ cause: e, message: r.details })
    : Ga.nodeMessage.test(n)
    ? new Ga({ cause: e, message: e.details })
    : Ka.nodeMessage.test(n)
    ? new Ka({ cause: e, maxFeePerGas: t?.maxFeePerGas })
    : qa.nodeMessage.test(n)
    ? new qa({ cause: e, maxFeePerGas: t?.maxFeePerGas })
    : Ja.nodeMessage.test(n)
    ? new Ja({ cause: e, nonce: t?.nonce })
    : Ya.nodeMessage.test(n)
    ? new Ya({ cause: e, nonce: t?.nonce })
    : Xa.nodeMessage.test(n)
    ? new Xa({ cause: e, nonce: t?.nonce })
    : Za.nodeMessage.test(n)
    ? new Za({ cause: e })
    : Qa.nodeMessage.test(n)
    ? new Qa({ cause: e, gas: t?.gas })
    : $a.nodeMessage.test(n)
    ? new $a({ cause: e, gas: t?.gas })
    : eo.nodeMessage.test(n)
    ? new eo({ cause: e })
    : to.nodeMessage.test(n)
    ? new to({
        cause: e,
        maxFeePerGas: t?.maxFeePerGas,
        maxPriorityFeePerGas: t?.maxPriorityFeePerGas,
      })
    : new no({ cause: e });
}
function io(e, { docsPath: t, ...n }) {
  return new Wa(
    (() => {
      let t = ro(e, n);
      return t instanceof no ? e : t;
    })(),
    { docsPath: t, ...n }
  );
}
function ao(e, { format: t }) {
  if (!t) return {};
  let n = {};
  function r(t) {
    let i = Object.keys(t);
    for (let a of i)
      a in e && (n[a] = e[a]),
        t[a] && typeof t[a] == `object` && !Array.isArray(t[a]) && r(t[a]);
  }
  return r(t(e || {})), n;
}
function oo(e, t) {
  return ({ exclude: n, format: r }) => ({
    exclude: n,
    format: (e, i) => {
      let a = t(e, i);
      if (n) for (let e of n) delete a[e];
      return { ...a, ...r(e, i) };
    },
    type: e,
  });
}
var so = {
  legacy: `0x0`,
  eip2930: `0x1`,
  eip1559: `0x2`,
  eip4844: `0x3`,
  eip7702: `0x4`,
};
function co(e, t) {
  let n = {};
  return (
    e.authorizationList !== void 0 &&
      (n.authorizationList = lo(e.authorizationList)),
    e.accessList !== void 0 && (n.accessList = e.accessList),
    e.blobVersionedHashes !== void 0 &&
      (n.blobVersionedHashes = e.blobVersionedHashes),
    e.blobs !== void 0 &&
      (n.blobs =
        typeof e.blobs[0] == `string` ? e.blobs : e.blobs.map((e) => M(e))),
    e.data !== void 0 && (n.data = e.data),
    e.account && (n.from = e.account.address),
    e.from !== void 0 && (n.from = e.from),
    e.gas !== void 0 && (n.gas = N(e.gas)),
    e.gasPrice !== void 0 && (n.gasPrice = N(e.gasPrice)),
    e.maxFeePerBlobGas !== void 0 &&
      (n.maxFeePerBlobGas = N(e.maxFeePerBlobGas)),
    e.maxFeePerGas !== void 0 && (n.maxFeePerGas = N(e.maxFeePerGas)),
    e.maxPriorityFeePerGas !== void 0 &&
      (n.maxPriorityFeePerGas = N(e.maxPriorityFeePerGas)),
    e.nonce !== void 0 && (n.nonce = N(e.nonce)),
    e.to !== void 0 && (n.to = e.to),
    e.type !== void 0 && (n.type = so[e.type]),
    e.value !== void 0 && (n.value = N(e.value)),
    n
  );
}
function lo(e) {
  return e.map((e) => ({
    address: e.address,
    r: e.r ? N(BigInt(e.r)) : e.r,
    s: e.s ? N(BigInt(e.s)) : e.s,
    chainId: N(e.chainId),
    nonce: N(e.nonce),
    ...(e.yParity === void 0 ? {} : { yParity: N(e.yParity) }),
    ...(e.v !== void 0 && e.yParity === void 0 ? { v: N(e.v) } : {}),
  }));
}
function uo(e) {
  if (e && e.length !== 0)
    return e.reduce((e, { slot: t, value: n }) => {
      if (t.length !== 66)
        throw new Ot({ size: t.length, targetSize: 66, type: `hex` });
      if (n.length !== 66)
        throw new Ot({ size: n.length, targetSize: 66, type: `hex` });
      return (e[t] = n), e;
    }, {});
}
function fo(e) {
  let { balance: t, nonce: n, state: r, stateDiff: i, code: a } = e,
    o = {};
  if (
    (a !== void 0 && (o.code = a),
    t !== void 0 && (o.balance = N(t)),
    n !== void 0 && (o.nonce = N(n)),
    r !== void 0 && (o.state = uo(r)),
    i !== void 0)
  ) {
    if (o.state) throw new Ai();
    o.stateDiff = uo(i);
  }
  return o;
}
function po(e) {
  if (!e) return;
  let t = {};
  for (let { address: n, ...r } of e) {
    if (!L(n, { strict: !1 })) throw new I({ address: n });
    if (t[n]) throw new ki({ address: n });
    t[n] = fo(r);
  }
  return t;
}
2n ** (8n - 1n) - 1n,
  2n ** (16n - 1n) - 1n,
  2n ** (24n - 1n) - 1n,
  2n ** (32n - 1n) - 1n,
  2n ** (40n - 1n) - 1n,
  2n ** (48n - 1n) - 1n,
  2n ** (56n - 1n) - 1n,
  2n ** (64n - 1n) - 1n,
  2n ** (72n - 1n) - 1n,
  2n ** (80n - 1n) - 1n,
  2n ** (88n - 1n) - 1n,
  2n ** (96n - 1n) - 1n,
  2n ** (104n - 1n) - 1n,
  2n ** (112n - 1n) - 1n,
  2n ** (120n - 1n) - 1n,
  2n ** (128n - 1n) - 1n,
  2n ** (136n - 1n) - 1n,
  2n ** (144n - 1n) - 1n,
  2n ** (152n - 1n) - 1n,
  2n ** (160n - 1n) - 1n,
  2n ** (168n - 1n) - 1n,
  2n ** (176n - 1n) - 1n,
  2n ** (184n - 1n) - 1n,
  2n ** (192n - 1n) - 1n,
  2n ** (200n - 1n) - 1n,
  2n ** (208n - 1n) - 1n,
  2n ** (216n - 1n) - 1n,
  2n ** (224n - 1n) - 1n,
  2n ** (232n - 1n) - 1n,
  2n ** (240n - 1n) - 1n,
  2n ** (248n - 1n) - 1n,
  2n ** (256n - 1n) - 1n,
  -(2n ** (8n - 1n)),
  -(2n ** (16n - 1n)),
  -(2n ** (24n - 1n)),
  -(2n ** (32n - 1n)),
  -(2n ** (40n - 1n)),
  -(2n ** (48n - 1n)),
  -(2n ** (56n - 1n)),
  -(2n ** (64n - 1n)),
  -(2n ** (72n - 1n)),
  -(2n ** (80n - 1n)),
  -(2n ** (88n - 1n)),
  -(2n ** (96n - 1n)),
  -(2n ** (104n - 1n)),
  -(2n ** (112n - 1n)),
  -(2n ** (120n - 1n)),
  -(2n ** (128n - 1n)),
  -(2n ** (136n - 1n)),
  -(2n ** (144n - 1n)),
  -(2n ** (152n - 1n)),
  -(2n ** (160n - 1n)),
  -(2n ** (168n - 1n)),
  -(2n ** (176n - 1n)),
  -(2n ** (184n - 1n)),
  -(2n ** (192n - 1n)),
  -(2n ** (200n - 1n)),
  -(2n ** (208n - 1n)),
  -(2n ** (216n - 1n)),
  -(2n ** (224n - 1n)),
  -(2n ** (232n - 1n)),
  -(2n ** (240n - 1n)),
  -(2n ** (248n - 1n)),
  -(2n ** (256n - 1n));
var mo = 2n ** 256n - 1n;
function ho(e) {
  let { account: t, maxFeePerGas: n, maxPriorityFeePerGas: r, to: i } = e,
    a = t ? z(t) : void 0;
  if (a && !L(a.address)) throw new I({ address: a.address });
  if (i && !L(i)) throw new I({ address: i });
  if (n && n > mo) throw new Ka({ maxFeePerGas: n });
  if (r && n && r > n)
    throw new to({ maxFeePerGas: n, maxPriorityFeePerGas: r });
}
var go = class extends D {
    constructor() {
      super("`baseFeeMultiplier` must be greater than 1.", {
        name: `BaseFeeScalarError`,
      });
    }
  },
  _o = class extends D {
    constructor() {
      super(`Chain does not support EIP-1559 fees.`, {
        name: `Eip1559FeesNotSupportedError`,
      });
    }
  },
  vo = class extends D {
    constructor({ maxPriorityFeePerGas: e }) {
      super(
        `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${H(
          e
        )} gwei).`,
        { name: `MaxFeePerGasTooLowError` }
      );
    }
  },
  yo = class extends D {
    constructor({ blockHash: e, blockNumber: t }) {
      let n = `Block`;
      e && (n = `Block at hash "${e}"`),
        t && (n = `Block at number "${t}"`),
        super(`${n} could not be found.`, { name: `BlockNotFoundError` });
    }
  },
  bo = {
    "0x0": `legacy`,
    "0x1": `eip2930`,
    "0x2": `eip1559`,
    "0x3": `eip4844`,
    "0x4": `eip7702`,
  };
function xo(e, t) {
  let n = {
    ...e,
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    ...(e.blockTimestamp != null && {
      blockTimestamp: BigInt(e.blockTimestamp),
    }),
    chainId: e.chainId ? A(e.chainId) : void 0,
    gas: e.gas ? BigInt(e.gas) : void 0,
    gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
    maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0,
    maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: e.maxPriorityFeePerGas
      ? BigInt(e.maxPriorityFeePerGas)
      : void 0,
    nonce: e.nonce ? A(e.nonce) : void 0,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    type: e.type ? bo[e.type] : void 0,
    typeHex: e.type ? e.type : void 0,
    value: e.value ? BigInt(e.value) : void 0,
    v: e.v ? BigInt(e.v) : void 0,
  };
  return (
    e.authorizationList && (n.authorizationList = Co(e.authorizationList)),
    (n.yParity = (() => {
      if (e.yParity) return Number(e.yParity);
      if (typeof n.v == `bigint`) {
        if (n.v === 0n || n.v === 27n) return 0;
        if (n.v === 1n || n.v === 28n) return 1;
        if (n.v >= 35n) return +(n.v % 2n == 0n);
      }
    })()),
    n.type === `legacy` &&
      (delete n.accessList,
      delete n.maxFeePerBlobGas,
      delete n.maxFeePerGas,
      delete n.maxPriorityFeePerGas,
      delete n.yParity),
    n.type === `eip2930` &&
      (delete n.maxFeePerBlobGas,
      delete n.maxFeePerGas,
      delete n.maxPriorityFeePerGas),
    n.type === `eip1559` && delete n.maxFeePerBlobGas,
    n
  );
}
var So = oo(`transaction`, xo);
function Co(e) {
  return e.map((e) => ({
    address: e.address,
    chainId: Number(e.chainId),
    nonce: Number(e.nonce),
    r: e.r,
    s: e.s,
    yParity: Number(e.yParity),
  }));
}
function wo(e, t) {
  let n = (e.transactions ?? []).map((e) => (typeof e == `string` ? e : xo(e)));
  return {
    ...e,
    baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
    blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
    difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
    excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
    gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
    hash: e.hash ? e.hash : null,
    logsBloom: e.logsBloom ? e.logsBloom : null,
    nonce: e.nonce ? e.nonce : null,
    number: e.number ? BigInt(e.number) : null,
    size: e.size ? BigInt(e.size) : void 0,
    timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
    transactions: n,
    totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
  };
}
var To = oo(`block`, wo);
async function Eo(
  e,
  {
    blockHash: t,
    blockNumber: n,
    blockTag: r = e.experimental_blockTag ?? `latest`,
    includeTransactions: i,
  } = {}
) {
  let a = i ?? !1,
    o = n === void 0 ? void 0 : N(n),
    s = null;
  if (
    ((s = t
      ? await e.request(
          { method: `eth_getBlockByHash`, params: [t, a] },
          { dedupe: !0 }
        )
      : await e.request(
          { method: `eth_getBlockByNumber`, params: [o || r, a] },
          { dedupe: !!o }
        )),
    !s)
  )
    throw new yo({ blockHash: t, blockNumber: n });
  return (e.chain?.formatters?.block?.format || wo)(s, `getBlock`);
}
async function Do(e) {
  let t = await e.request({ method: `eth_gasPrice` });
  return BigInt(t);
}
async function Oo(e, t) {
  return ko(e, t);
}
async function ko(e, t) {
  let { block: n, chain: r = e.chain, request: i } = t || {};
  try {
    let t = r?.fees?.maxPriorityFeePerGas ?? r?.fees?.defaultPriorityFee;
    if (typeof t == `function`) {
      let r = await t({
        block: n || (await T(e, Eo, `getBlock`)({})),
        client: e,
        request: i,
      });
      if (r === null) throw Error();
      return r;
    }
    return t === void 0
      ? k(await e.request({ method: `eth_maxPriorityFeePerGas` }))
      : t;
  } catch {
    let [t, r] = await Promise.all([
      n ? Promise.resolve(n) : T(e, Eo, `getBlock`)({}),
      T(e, Do, `getGasPrice`)({}),
    ]);
    if (typeof t.baseFeePerGas != `bigint`) throw new _o();
    let i = r - t.baseFeePerGas;
    return i < 0n ? 0n : i;
  }
}
async function Ao(e, t) {
  return jo(e, t);
}
async function jo(e, t) {
  let {
      block: n,
      chain: r = e.chain,
      request: i,
      type: a = `eip1559`,
    } = t || {},
    o = await (async () =>
      typeof r?.fees?.baseFeeMultiplier == `function`
        ? r.fees.baseFeeMultiplier({ block: n, client: e, request: i })
        : r?.fees?.baseFeeMultiplier ?? 1.2)();
  if (o < 1) throw new go();
  let s = 10 ** (o.toString().split(`.`)[1]?.length ?? 0),
    c = (e) => (e * BigInt(Math.round(o * s))) / BigInt(s),
    l = n || (await T(e, Eo, `getBlock`)({}));
  if (typeof r?.fees?.estimateFeesPerGas == `function`) {
    let t = await r.fees.estimateFeesPerGas({
      block: n,
      client: e,
      multiply: c,
      request: i,
      type: a,
    });
    if (t !== null) return t;
  }
  if (a === `eip1559`) {
    if (typeof l.baseFeePerGas != `bigint`) throw new _o();
    let t =
        typeof i?.maxPriorityFeePerGas == `bigint`
          ? i.maxPriorityFeePerGas
          : await ko(e, { block: l, chain: r, request: i }),
      n = c(l.baseFeePerGas);
    return { maxFeePerGas: i?.maxFeePerGas ?? n + t, maxPriorityFeePerGas: t };
  }
  return { gasPrice: i?.gasPrice ?? c(await T(e, Do, `getGasPrice`)({})) };
}
function Mo(e) {
  let { blockHash: t, blockNumber: n, blockTag: r, requireCanonical: i } = e;
  if (i !== void 0 && !t)
    throw new D(
      "`requireCanonical` can only be provided when `blockHash` is set."
    );
  return t
    ? i
      ? { blockHash: t, requireCanonical: i }
      : { blockHash: t }
    : typeof n == `bigint`
    ? N(n)
    : r ?? `latest`;
}
async function No(
  e,
  {
    address: t,
    blockHash: n,
    blockNumber: r,
    blockTag: i = `latest`,
    requireCanonical: a,
  }
) {
  let o = Mo({
    blockHash: n,
    blockNumber: r,
    blockTag: i,
    requireCanonical: a,
  });
  return A(
    await e.request(
      { method: `eth_getTransactionCount`, params: [t, o] },
      { dedupe: typeof r == `bigint` || n !== void 0 }
    )
  );
}
function Po(e) {
  let { kzg: t } = e,
    n = e.to ?? (typeof e.blobs[0] == `string` ? `hex` : `bytes`),
    r = typeof e.blobs[0] == `string` ? e.blobs.map((e) => P(e)) : e.blobs,
    i = [];
  for (let e of r) i.push(Uint8Array.from(t.blobToKzgCommitment(e)));
  return n === `bytes` ? i : i.map((e) => M(e));
}
function Fo(e) {
  let { kzg: t } = e,
    n = e.to ?? (typeof e.blobs[0] == `string` ? `hex` : `bytes`),
    r = typeof e.blobs[0] == `string` ? e.blobs.map((e) => P(e)) : e.blobs,
    i =
      typeof e.commitments[0] == `string`
        ? e.commitments.map((e) => P(e))
        : e.commitments,
    a = [];
  for (let e = 0; e < r.length; e++) {
    let n = r[e],
      o = i[e];
    a.push(Uint8Array.from(t.computeBlobKzgProof(n, o)));
  }
  return n === `bytes` ? a : a.map((e) => M(e));
}
function Io(e, t, n, r) {
  if (typeof e.setBigUint64 == `function`) return e.setBigUint64(t, n, r);
  let i = BigInt(32),
    a = BigInt(4294967295),
    o = Number((n >> i) & a),
    s = Number(n & a),
    c = r ? 4 : 0,
    l = r ? 0 : 4;
  e.setUint32(t + c, o, r), e.setUint32(t + l, s, r);
}
function Lo(e, t, n) {
  return (e & t) ^ (~e & n);
}
function Ro(e, t, n) {
  return (e & t) ^ (e & n) ^ (t & n);
}
var zo = class extends In {
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
        (this.view = Dn(this.buffer));
    }
    update(e) {
      Cn(this), (e = Pn(e)), xn(e);
      let { view: t, buffer: n, blockLen: r } = this,
        i = e.length;
      for (let a = 0; a < i; ) {
        let o = Math.min(r - this.pos, i - a);
        if (o === r) {
          let t = Dn(e);
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
      Cn(this), wn(e, this), (this.finished = !0);
      let { buffer: t, view: n, blockLen: r, isLE: i } = this,
        { pos: a } = this;
      (t[a++] = 128),
        En(this.buffer.subarray(a)),
        this.padOffset > r - a && (this.process(n, 0), (a = 0));
      for (let e = a; e < r; e++) t[e] = 0;
      Io(n, r - 8, BigInt(this.length * 8), i), this.process(n, 0);
      let o = Dn(e),
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
  Bo = Uint32Array.from([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ]),
  G = Uint32Array.from([
    3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999,
    355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025,
    3675008525, 1694076839, 1203062813, 3204075428,
  ]),
  K = Uint32Array.from([
    1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723,
    2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199,
    528734635, 4215389547, 1541459225, 327033209,
  ]),
  Vo = Uint32Array.from([
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
  Ho = new Uint32Array(64),
  Uo = class extends zo {
    constructor(e = 32) {
      super(64, e, 8, !1),
        (this.A = Bo[0] | 0),
        (this.B = Bo[1] | 0),
        (this.C = Bo[2] | 0),
        (this.D = Bo[3] | 0),
        (this.E = Bo[4] | 0),
        (this.F = Bo[5] | 0),
        (this.G = Bo[6] | 0),
        (this.H = Bo[7] | 0);
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
      for (let n = 0; n < 16; n++, t += 4) Ho[n] = e.getUint32(t, !1);
      for (let e = 16; e < 64; e++) {
        let t = Ho[e - 15],
          n = Ho[e - 2],
          r = On(t, 7) ^ On(t, 18) ^ (t >>> 3),
          i = On(n, 17) ^ On(n, 19) ^ (n >>> 10);
        Ho[e] = (i + Ho[e - 7] + r + Ho[e - 16]) | 0;
      }
      let { A: n, B: r, C: i, D: a, E: o, F: s, G: c, H: l } = this;
      for (let e = 0; e < 64; e++) {
        let t = On(o, 6) ^ On(o, 11) ^ On(o, 25),
          u = (l + t + Lo(o, s, c) + Vo[e] + Ho[e]) | 0,
          d = ((On(n, 2) ^ On(n, 13) ^ On(n, 22)) + Ro(n, r, i)) | 0;
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
      En(Ho);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), En(this.buffer);
    }
  },
  Wo = $t(
    `0x428a2f98d728ae22.0x7137449123ef65cd.0xb5c0fbcfec4d3b2f.0xe9b5dba58189dbbc.0x3956c25bf348b538.0x59f111f1b605d019.0x923f82a4af194f9b.0xab1c5ed5da6d8118.0xd807aa98a3030242.0x12835b0145706fbe.0x243185be4ee4b28c.0x550c7dc3d5ffb4e2.0x72be5d74f27b896f.0x80deb1fe3b1696b1.0x9bdc06a725c71235.0xc19bf174cf692694.0xe49b69c19ef14ad2.0xefbe4786384f25e3.0x0fc19dc68b8cd5b5.0x240ca1cc77ac9c65.0x2de92c6f592b0275.0x4a7484aa6ea6e483.0x5cb0a9dcbd41fbd4.0x76f988da831153b5.0x983e5152ee66dfab.0xa831c66d2db43210.0xb00327c898fb213f.0xbf597fc7beef0ee4.0xc6e00bf33da88fc2.0xd5a79147930aa725.0x06ca6351e003826f.0x142929670a0e6e70.0x27b70a8546d22ffc.0x2e1b21385c26c926.0x4d2c6dfc5ac42aed.0x53380d139d95b3df.0x650a73548baf63de.0x766a0abb3c77b2a8.0x81c2c92e47edaee6.0x92722c851482353b.0xa2bfe8a14cf10364.0xa81a664bbc423001.0xc24b8b70d0f89791.0xc76c51a30654be30.0xd192e819d6ef5218.0xd69906245565a910.0xf40e35855771202a.0x106aa07032bbd1b8.0x19a4c116b8d2d0c8.0x1e376c085141ab53.0x2748774cdf8eeb99.0x34b0bcb5e19b48a8.0x391c0cb3c5c95a63.0x4ed8aa4ae3418acb.0x5b9cca4f7763e373.0x682e6ff3d6b2b8a3.0x748f82ee5defb2fc.0x78a5636f43172f60.0x84c87814a1f0ab72.0x8cc702081a6439ec.0x90befffa23631e28.0xa4506cebde82bde9.0xbef9a3f7b2c67915.0xc67178f2e372532b.0xca273eceea26619c.0xd186b8c721c0c207.0xeada7dd6cde0eb1e.0xf57d4f7fee6ed178.0x06f067aa72176fba.0x0a637dc5a2c898a6.0x113f9804bef90dae.0x1b710b35131c471b.0x28db77f523047d84.0x32caab7b40c72493.0x3c9ebe0a15c9bebc.0x431d67c49c100d4c.0x4cc5d4becb3e42b6.0x597f299cfc657e2a.0x5fcb6fab3ad6faec.0x6c44198c4a475817`
      .split(`.`)
      .map((e) => BigInt(e))
  ),
  Go = Wo[0],
  Ko = Wo[1],
  qo = new Uint32Array(80),
  Jo = new Uint32Array(80),
  Yo = class extends zo {
    constructor(e = 64) {
      super(128, e, 16, !1),
        (this.Ah = K[0] | 0),
        (this.Al = K[1] | 0),
        (this.Bh = K[2] | 0),
        (this.Bl = K[3] | 0),
        (this.Ch = K[4] | 0),
        (this.Cl = K[5] | 0),
        (this.Dh = K[6] | 0),
        (this.Dl = K[7] | 0),
        (this.Eh = K[8] | 0),
        (this.El = K[9] | 0),
        (this.Fh = K[10] | 0),
        (this.Fl = K[11] | 0),
        (this.Gh = K[12] | 0),
        (this.Gl = K[13] | 0),
        (this.Hh = K[14] | 0),
        (this.Hl = K[15] | 0);
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
        (qo[n] = e.getUint32(t)), (Jo[n] = e.getUint32((t += 4)));
      for (let e = 16; e < 80; e++) {
        let t = qo[e - 15] | 0,
          n = Jo[e - 15] | 0,
          r = nn(t, n, 1) ^ nn(t, n, 8) ^ en(t, n, 7),
          i = rn(t, n, 1) ^ rn(t, n, 8) ^ tn(t, n, 7),
          a = qo[e - 2] | 0,
          o = Jo[e - 2] | 0,
          s = nn(a, o, 19) ^ an(a, o, 61) ^ en(a, o, 6),
          c = mn(
            i,
            rn(a, o, 19) ^ on(a, o, 61) ^ tn(a, o, 6),
            Jo[e - 7],
            Jo[e - 16]
          ),
          l = hn(c, r, s, qo[e - 7], qo[e - 16]);
        (qo[e] = l | 0), (Jo[e] = c | 0);
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
        let t = nn(u, d, 14) ^ nn(u, d, 18) ^ an(u, d, 41),
          v = rn(u, d, 14) ^ rn(u, d, 18) ^ on(u, d, 41),
          y = (u & f) ^ (~u & m),
          b = (d & p) ^ (~d & h),
          x = gn(_, v, b, Ko[e], Jo[e]),
          S = _n(x, g, t, y, Go[e], qo[e]),
          C = x | 0,
          w = nn(n, r, 28) ^ an(n, r, 34) ^ an(n, r, 39),
          ee = rn(n, r, 28) ^ on(n, r, 34) ^ on(n, r, 39),
          te = (n & i) ^ (n & o) ^ (i & o),
          ne = (r & a) ^ (r & s) ^ (a & s);
        (g = m | 0),
          (_ = h | 0),
          (m = f | 0),
          (h = p | 0),
          (f = u | 0),
          (p = d | 0),
          ({ h: u, l: d } = dn(c | 0, l | 0, S | 0, C | 0)),
          (c = o | 0),
          (l = s | 0),
          (o = i | 0),
          (s = a | 0),
          (i = n | 0),
          (a = r | 0);
        let re = fn(C, ee, ne);
        (n = pn(re, S, w, te)), (r = re | 0);
      }
      ({ h: n, l: r } = dn(this.Ah | 0, this.Al | 0, n | 0, r | 0)),
        ({ h: i, l: a } = dn(this.Bh | 0, this.Bl | 0, i | 0, a | 0)),
        ({ h: o, l: s } = dn(this.Ch | 0, this.Cl | 0, o | 0, s | 0)),
        ({ h: c, l } = dn(this.Dh | 0, this.Dl | 0, c | 0, l | 0)),
        ({ h: u, l: d } = dn(this.Eh | 0, this.El | 0, u | 0, d | 0)),
        ({ h: f, l: p } = dn(this.Fh | 0, this.Fl | 0, f | 0, p | 0)),
        ({ h: m, l: h } = dn(this.Gh | 0, this.Gl | 0, m | 0, h | 0)),
        ({ h: g, l: _ } = dn(this.Hh | 0, this.Hl | 0, g | 0, _ | 0)),
        this.set(n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _);
    }
    roundClean() {
      En(qo, Jo);
    }
    destroy() {
      En(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  },
  Xo = class extends Yo {
    constructor() {
      super(48),
        (this.Ah = G[0] | 0),
        (this.Al = G[1] | 0),
        (this.Bh = G[2] | 0),
        (this.Bl = G[3] | 0),
        (this.Ch = G[4] | 0),
        (this.Cl = G[5] | 0),
        (this.Dh = G[6] | 0),
        (this.Dl = G[7] | 0),
        (this.Eh = G[8] | 0),
        (this.El = G[9] | 0),
        (this.Fh = G[10] | 0),
        (this.Fl = G[11] | 0),
        (this.Gh = G[12] | 0),
        (this.Gl = G[13] | 0),
        (this.Hh = G[14] | 0),
        (this.Hl = G[15] | 0);
    }
  },
  Zo = Ln(() => new Uo()),
  Qo = Ln(() => new Yo()),
  $o = Ln(() => new Xo()),
  es = Zo;
function ts(e, t) {
  let n = t || `hex`,
    r = es(Xe(e, { strict: !1 }) ? Wt(e) : e);
  return n === `bytes` ? r : j(r);
}
function ns(e) {
  let { commitment: t, version: n = 1 } = e,
    r = e.to ?? (typeof t == `string` ? `hex` : `bytes`),
    i = ts(t, `bytes`);
  return i.set([n], 0), r === `bytes` ? i : M(i);
}
function rs(e) {
  let { commitments: t, version: n } = e,
    r = e.to ?? (typeof t[0] == `string` ? `hex` : `bytes`),
    i = [];
  for (let e of t) i.push(ns({ commitment: e, to: r, version: n }));
  return i;
}
var is = 6,
  as = 4096,
  os = 32 * as,
  ss = os * is - 1 - 1 * as * is,
  cs = class extends D {
    constructor({ maxSize: e, size: t }) {
      super(`Blob size is too large.`, {
        metaMessages: [`Max: ${e} bytes`, `Given: ${t} bytes`],
        name: `BlobSizeTooLargeError`,
      });
    }
  },
  ls = class extends D {
    constructor() {
      super(`Blob data must not be empty.`, { name: `EmptyBlobError` });
    }
  },
  us = class extends D {
    constructor({ hash: e, size: t }) {
      super(`Versioned hash "${e}" size is invalid.`, {
        metaMessages: [`Expected: 32`, `Received: ${t}`],
        name: `InvalidVersionedHashSizeError`,
      });
    }
  },
  ds = class extends D {
    constructor({ hash: e, version: t }) {
      super(`Versioned hash "${e}" version is invalid.`, {
        metaMessages: [`Expected: 1`, `Received: ${t}`],
        name: `InvalidVersionedHashVersionError`,
      });
    }
  };
function fs(e) {
  let t = e.to ?? (typeof e.data == `string` ? `hex` : `bytes`),
    n = typeof e.data == `string` ? P(e.data) : e.data,
    r = E(n);
  if (!r) throw new ls();
  if (r > 761855) throw new cs({ maxSize: ss, size: r });
  let i = [],
    a = !0,
    o = 0;
  for (; a; ) {
    let e = ti(new Uint8Array(os)),
      t = 0;
    for (; t < as; ) {
      let r = n.slice(o, o + 31);
      if ((e.pushByte(0), e.pushBytes(r), r.length < 31)) {
        e.pushByte(128), (a = !1);
        break;
      }
      t++, (o += 31);
    }
    i.push(e);
  }
  return t === `bytes` ? i.map((e) => e.bytes) : i.map((e) => M(e.bytes));
}
function ps(e) {
  let { data: t, kzg: n, to: r } = e,
    i = e.blobs ?? fs({ data: t, to: r }),
    a = e.commitments ?? Po({ blobs: i, kzg: n, to: r }),
    o = e.proofs ?? Fo({ blobs: i, commitments: a, kzg: n, to: r }),
    s = [];
  for (let e = 0; e < i.length; e++)
    s.push({ blob: i[e], commitment: a[e], proof: o[e] });
  return s;
}
function ms(e) {
  if (e.type) return e.type;
  if (e.authorizationList !== void 0) return `eip7702`;
  if (
    e.blobs !== void 0 ||
    e.blobVersionedHashes !== void 0 ||
    e.maxFeePerBlobGas !== void 0 ||
    e.sidecars !== void 0
  )
    return `eip4844`;
  if (e.maxFeePerGas !== void 0 || e.maxPriorityFeePerGas !== void 0)
    return `eip1559`;
  if (e.gasPrice !== void 0)
    return e.accessList === void 0 ? `legacy` : `eip2930`;
  throw new Ii({ transaction: e });
}
function hs(e, { docsPath: t, ...n }) {
  return new Ri(
    (() => {
      let t = ro(e, n);
      return t instanceof no ? e : t;
    })(),
    { docsPath: t, ...n }
  );
}
async function gs(e) {
  return A(await e.request({ method: `eth_chainId` }, { dedupe: !0 }));
}
async function _s(e, t) {
  let {
      account: n = e.account,
      accessList: r,
      authorizationList: i,
      chain: a = e.chain,
      blobVersionedHashes: o,
      blobs: s,
      data: c,
      gas: l,
      gasPrice: u,
      maxFeePerBlobGas: d,
      maxFeePerGas: f,
      maxPriorityFeePerGas: p,
      nonce: m,
      nonceManager: h,
      to: g,
      type: _,
      value: v,
      ...y
    } = t,
    b = await (async () => {
      if (!n || !h || m !== void 0) return m;
      let t = z(n),
        r = a ? a.id : await T(e, gs, `getChainId`)({});
      return await h.consume({ address: t.address, chainId: r, client: e });
    })();
  ho(t);
  let x = a?.formatters?.transactionRequest?.format,
    S = (x || co)(
      {
        ...ao(y, { format: x }),
        account: n ? z(n) : void 0,
        accessList: r,
        authorizationList: i,
        blobs: s,
        blobVersionedHashes: o,
        data: c,
        gas: l,
        gasPrice: u,
        maxFeePerBlobGas: d,
        maxFeePerGas: f,
        maxPriorityFeePerGas: p,
        nonce: b,
        to: g,
        type: _,
        value: v,
      },
      `fillTransaction`
    );
  try {
    let n = await e.request({ method: `eth_fillTransaction`, params: [S] }),
      r = (a?.formatters?.transaction?.format || xo)(n.tx);
    delete r.blockHash,
      delete r.blockNumber,
      delete r.r,
      delete r.s,
      delete r.transactionIndex,
      delete r.v,
      delete r.yParity,
      (r.data = r.input);
    let i = r.feePayerSignature !== void 0 && r.feePayerSignature !== null;
    if (i && b !== void 0 && r.nonce !== b)
      throw new Pi({ filledNonce: r.nonce, requestedNonce: b });
    if (!i) {
      (r.gas &&= t.gas ?? r.gas),
        (r.gasPrice &&= t.gasPrice ?? r.gasPrice),
        (r.maxFeePerBlobGas &&= t.maxFeePerBlobGas ?? r.maxFeePerBlobGas),
        (r.maxFeePerGas &&= t.maxFeePerGas ?? r.maxFeePerGas),
        (r.maxPriorityFeePerGas &&=
          t.maxPriorityFeePerGas ?? r.maxPriorityFeePerGas),
        r.nonce !== void 0 && (r.nonce = t.nonce ?? r.nonce);
      let n = await (async () => {
        if (typeof a?.fees?.baseFeeMultiplier == `function`) {
          let n = await T(e, Eo, `getBlock`)({});
          return a.fees.baseFeeMultiplier({ block: n, client: e, request: t });
        }
        return a?.fees?.baseFeeMultiplier ?? 1.2;
      })();
      if (n < 1) throw new go();
      let i = 10 ** (n.toString().split(`.`)[1]?.length ?? 0),
        o = (e) => (e * BigInt(Math.round(n * i))) / BigInt(i);
      r.maxFeePerGas && !t.maxFeePerGas && (r.maxFeePerGas = o(r.maxFeePerGas)),
        r.gasPrice && !t.gasPrice && (r.gasPrice = o(r.gasPrice));
    }
    return {
      raw: n.raw,
      transaction: { from: S.from, ...r },
      ...(n.capabilities ? { capabilities: n.capabilities } : {}),
    };
  } catch (n) {
    throw hs(n, { ...t, chain: e.chain });
  }
}
var vs = [`blobVersionedHashes`, `chainId`, `fees`, `gas`, `nonce`, `type`],
  ys = new Map(),
  bs = new cr(128);
async function xs(e, t) {
  let n = t;
  (n.account ??= e.account), (n.parameters ??= vs);
  let { account: r, chain: i = e.chain, nonceManager: a, parameters: o } = n,
    s = (() => {
      if (typeof i?.prepareTransactionRequest == `function`)
        return {
          fn: i.prepareTransactionRequest,
          runAt: [`beforeFillTransaction`],
        };
      if (Array.isArray(i?.prepareTransactionRequest))
        return {
          fn: i.prepareTransactionRequest[0],
          runAt: i.prepareTransactionRequest[1].runAt,
        };
    })(),
    c;
  async function l() {
    return (
      c ||
      (n.chainId === void 0
        ? i
          ? i.id
          : ((c = await T(e, gs, `getChainId`)({})), c)
        : n.chainId)
    );
  }
  let u = r && z(r),
    d = n.nonce;
  if (s?.fn && s.runAt?.includes(`beforeFillTransaction`)) {
    (n = await s.fn(
      { ...n, chain: i },
      { client: e, phase: `beforeFillTransaction` }
    )),
      (d ??= n.nonce);
    let t = n.account ?? n.from;
    u = t ? z(t) : void 0;
  }
  if (o.includes(`nonce`) && d === void 0 && u && a) {
    let t = await l();
    d = await a.consume({ address: u.address, chainId: t, client: e });
  }
  let f =
    !(
      (o.includes(`blobVersionedHashes`) || o.includes(`sidecars`)) &&
      n.kzg &&
      n.blobs
    ) &&
    ((o.length > 0 &&
      `feePayer` in n &&
      n.feePayer &&
      !(`feePayerSignature` in n && n.feePayerSignature)) ||
      (bs.get(e.uid) !== !1 &&
        [`fees`, `gas`].some((e) => o.includes(e)) &&
        ((o.includes(`chainId`) && typeof n.chainId != `number`) ||
          (o.includes(`nonce`) && typeof d != `number`) ||
          (o.includes(`fees`) &&
            typeof n.gasPrice != `bigint` &&
            (typeof n.maxFeePerGas != `bigint` ||
              typeof n.maxPriorityFeePerGas != `bigint`)) ||
          (o.includes(`gas`) && typeof n.gas != `bigint`))))
      ? await T(
          e,
          _s,
          `fillTransaction`
        )({ ...n, nonce: d })
          .then((t) => {
            let {
                chainId: r,
                from: i,
                gas: a,
                gasPrice: o,
                nonce: s,
                maxFeePerBlobGas: c,
                maxFeePerGas: l,
                maxPriorityFeePerGas: u,
                type: d,
                ...f
              } = t.transaction,
              p = `feeToken` in f ? f.feeToken : void 0,
              m =
                `feePayerSignature` in f &&
                f.feePayerSignature !== null &&
                f.feePayerSignature !== void 0,
              h = p != null && (!(`feeToken` in n) || m);
            return (
              bs.set(e.uid, !0),
              {
                ...n,
                ...(i ? { from: i } : {}),
                ...(d && !n.type ? { type: d } : {}),
                ...(r === void 0 ? {} : { chainId: r }),
                ...(a === void 0 ? {} : { gas: a }),
                ...(o === void 0 ? {} : { gasPrice: o }),
                ...(s === void 0 ? {} : { nonce: s }),
                ...(c !== void 0 && n.type !== `legacy` && n.type !== `eip2930`
                  ? { maxFeePerBlobGas: c }
                  : {}),
                ...(l !== void 0 && n.type !== `legacy` && n.type !== `eip2930`
                  ? { maxFeePerGas: l }
                  : {}),
                ...(u !== void 0 && n.type !== `legacy` && n.type !== `eip2930`
                  ? { maxPriorityFeePerGas: u }
                  : {}),
                ...(`nonceKey` in f && f.nonceKey !== void 0
                  ? { nonceKey: f.nonceKey }
                  : {}),
                ...(`keyAuthorization` in f &&
                f.keyAuthorization !== void 0 &&
                f.keyAuthorization !== null &&
                !(`keyAuthorization` in n)
                  ? { keyAuthorization: f.keyAuthorization }
                  : {}),
                ...(`feePayerSignature` in f &&
                f.feePayerSignature !== void 0 &&
                f.feePayerSignature !== null
                  ? { feePayerSignature: f.feePayerSignature }
                  : {}),
                ...(h ? { feeToken: p } : {}),
                ...(t.capabilities ? { _capabilities: t.capabilities } : {}),
              }
            );
          })
          .catch((t) => {
            let r = t;
            if (r.name !== `TransactionExecutionError`) return n;
            if (
              r.walk?.((e) => e instanceof Pi) ||
              r.walk?.((e) => e.name === `ExecutionRevertedError`)
            )
              throw t;
            return (
              r.walk?.((e) => {
                let t = e;
                return (
                  t.name === `MethodNotFoundRpcError` ||
                  t.name === `MethodNotSupportedRpcError` ||
                  t.message?.includes(`eth_fillTransaction is not available`)
                );
              }) && bs.set(e.uid, !1),
              n
            );
          })
      : n;
  (d ??= f.nonce),
    (n = {
      ...f,
      ...(u ? { from: u?.address } : {}),
      ...(d === void 0 ? {} : { nonce: d }),
    });
  let { blobs: p, gas: m, kzg: h, type: g } = n;
  s?.fn &&
    s.runAt?.includes(`beforeFillParameters`) &&
    (n = await s.fn(
      { ...n, chain: i },
      { client: e, phase: `beforeFillParameters` }
    ));
  let _;
  async function v() {
    return _ || ((_ = await T(e, Eo, `getBlock`)({ blockTag: `latest` })), _);
  }
  if (
    (o.includes(`nonce`) &&
      d === void 0 &&
      u &&
      !a &&
      (n.nonce = await T(
        e,
        No,
        `getTransactionCount`
      )({ address: u.address, blockTag: `pending` })),
    (o.includes(`blobVersionedHashes`) || o.includes(`sidecars`)) && p && h)
  ) {
    let e = Po({ blobs: p, kzg: h });
    if (o.includes(`blobVersionedHashes`)) {
      let t = rs({ commitments: e, to: `hex` });
      n.blobVersionedHashes = t;
    }
    if (o.includes(`sidecars`)) {
      let t = ps({
        blobs: p,
        commitments: e,
        proofs: Fo({ blobs: p, commitments: e, kzg: h }),
        to: `hex`,
      });
      n.sidecars = t;
    }
  }
  if (
    (o.includes(`chainId`) && (n.chainId = await l()),
    (o.includes(`fees`) || o.includes(`type`)) && g === void 0)
  )
    try {
      n.type = ms(n);
    } catch {
      let t = ys.get(e.uid);
      t === void 0 &&
        ((t = typeof (await v())?.baseFeePerGas == `bigint`), ys.set(e.uid, t)),
        (n.type = t ? `eip1559` : `legacy`);
    }
  if (o.includes(`fees`)) {
    if (n.type !== `legacy` && n.type !== `eip2930`) {
      if (n.maxFeePerGas === void 0 || n.maxPriorityFeePerGas === void 0) {
        let { maxFeePerGas: t, maxPriorityFeePerGas: r } = await jo(e, {
          block: await v(),
          chain: i,
          request: n,
        });
        if (
          n.maxPriorityFeePerGas === void 0 &&
          n.maxFeePerGas &&
          n.maxFeePerGas < r
        )
          throw new vo({ maxPriorityFeePerGas: r });
        (n.maxPriorityFeePerGas = r), (n.maxFeePerGas = t);
      }
    } else {
      if (n.maxFeePerGas !== void 0 || n.maxPriorityFeePerGas !== void 0)
        throw new _o();
      if (n.gasPrice === void 0) {
        let { gasPrice: t } = await jo(e, {
          block: await v(),
          chain: i,
          request: n,
          type: `legacy`,
        });
        n.gasPrice = t;
      }
    }
  }
  return (
    o.includes(`gas`) &&
      m === void 0 &&
      (n.gas = await T(
        e,
        Ss,
        `estimateGas`
      )({
        ...n,
        account: u,
        prepare: u?.type === `local` ? [] : [`blobVersionedHashes`],
      })),
    s?.fn &&
      s.runAt?.includes(`afterFillParameters`) &&
      (n = await s.fn(
        { ...n, chain: i },
        { client: e, phase: `afterFillParameters` }
      )),
    ho(n),
    delete n.parameters,
    n
  );
}
async function Ss(e, t) {
  let { account: n = e.account, prepare: r = !0 } = t,
    i = n ? z(n) : void 0,
    a = (() => {
      if (Array.isArray(r)) return r;
      if (i?.type !== `local`) return [`blobVersionedHashes`];
    })();
  try {
    let n = await (async () => {
        if (t.to) return t.to;
        if (t.authorizationList && t.authorizationList.length > 0)
          return await Ua({ authorization: t.authorizationList[0] }).catch(
            () => {
              throw new D(
                "`to` is required. Could not infer from `authorizationList`"
              );
            }
          );
      })(),
      {
        accessList: o,
        authorizationList: s,
        blobs: c,
        blobVersionedHashes: l,
        blockNumber: u,
        blockTag: d,
        data: f,
        gas: p,
        gasPrice: m,
        maxFeePerBlobGas: h,
        maxFeePerGas: g,
        maxPriorityFeePerGas: _,
        nonce: v,
        value: y,
        stateOverride: b,
        ...x
      } = r ? await xs(e, { ...t, parameters: a, to: n }) : t;
    if (p && t.gas !== p) return p;
    let S = (typeof u == `bigint` ? N(u) : void 0) || d,
      C = po(b);
    ho(t);
    let w = e.chain?.formatters?.transactionRequest?.format,
      ee = (w || co)(
        {
          ...ao(x, { format: w }),
          account: i,
          accessList: o,
          authorizationList: s,
          blobs: c,
          blobVersionedHashes: l,
          data: f,
          gasPrice: m,
          maxFeePerBlobGas: h,
          maxFeePerGas: g,
          maxPriorityFeePerGas: _,
          nonce: v,
          to: n,
          value: y,
        },
        `estimateGas`
      );
    return BigInt(
      await e.request({
        method: `eth_estimateGas`,
        params: C
          ? [ee, S ?? e.experimental_blockTag ?? `latest`, C]
          : S
          ? [ee, S]
          : [ee],
      })
    );
  } catch (n) {
    throw io(n, { ...t, account: i, chain: e.chain });
  }
}
async function Cs(e, t) {
  let {
      abi: n,
      address: r,
      args: i,
      functionName: a,
      dataSuffix: o = typeof e.dataSuffix == `string`
        ? e.dataSuffix
        : e.dataSuffix?.value,
      ...s
    } = t,
    c = B({ abi: n, args: i, functionName: a });
  try {
    return await T(
      e,
      Ss,
      `estimateGas`
    )({ data: `${c}${o ? o.replace(`0x`, ``) : ``}`, to: r, ...s });
  } catch (e) {
    throw Ma(e, {
      abi: n,
      address: r,
      args: i,
      docsPath: `/docs/contract/estimateContractGas`,
      functionName: a,
      sender: (s.account ? z(s.account) : void 0)?.address,
    });
  }
}
function ws(e, t) {
  if (!L(e, { strict: !1 })) throw new I({ address: e });
  if (!L(t, { strict: !1 })) throw new I({ address: t });
  return e.toLowerCase() === t.toLowerCase();
}
function Ts(e, { args: t, eventName: n } = {}) {
  return {
    ...e,
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    blockTimestamp: e.blockTimestamp
      ? BigInt(e.blockTimestamp)
      : e.blockTimestamp === null
      ? null
      : void 0,
    logIndex: e.logIndex ? Number(e.logIndex) : null,
    transactionHash: e.transactionHash ? e.transactionHash : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    ...(n ? { args: t, eventName: n } : {}),
  };
}
var Es = `/docs/contract/decodeEventLog`;
function Ds(e) {
  let { abi: t, data: n, strict: r, topics: i } = e,
    a = r ?? !0,
    [o, ...s] = i;
  if (!o) throw new ut({ docsPath: Es });
  let c = t.find((e) => e.type === `event` && o === sr(qe(e)));
  if (!(c && `name` in c) || c.type !== `event`)
    throw new dt(o, { docsPath: Es });
  let { name: l, inputs: u } = c,
    d = u?.some((e) => !(`name` in e && e.name)),
    f = d ? [] : {},
    p = u.map((e, t) => [e, t]).filter(([e]) => `indexed` in e && e.indexed),
    m = [];
  for (let e = 0; e < p.length; e++) {
    let [t, n] = p[e],
      r = s[e];
    if (!r) {
      if (a) throw new yt({ abiItem: c, param: t });
      m.push([t, n]);
      continue;
    }
    f[d ? n : t.name || n] = Os({ param: t, value: r });
  }
  let h = u.filter((e) => !(`indexed` in e && e.indexed)),
    g = a ? h : [...m.map(([e]) => e), ...h];
  if (g.length > 0) {
    if (n && n !== `0x`)
      try {
        let e = oi(g, n);
        if (e) {
          let t = 0;
          if (!a) for (let [n, r] of m) f[d ? r : n.name || r] = e[t++];
          if (d)
            for (let n = 0; n < u.length; n++)
              f[n] === void 0 && t < e.length && (f[n] = e[t++]);
          else for (let n = 0; n < h.length; n++) f[h[n].name] = e[t++];
        }
      } catch (e) {
        if (a)
          throw e instanceof nt || e instanceof Qr
            ? new vt({ abiItem: c, data: n, params: g, size: E(n) })
            : e;
      }
    else if (a) throw new vt({ abiItem: c, data: `0x`, params: g, size: 0 });
  }
  return { eventName: l, args: Object.values(f).length > 0 ? f : void 0 };
}
function Os({ param: e, value: t }) {
  return e.type === `string` ||
    e.type === `bytes` ||
    e.type === `tuple` ||
    e.type.match(/^(.*)\[(\d+)?\]$/)
    ? t
    : (oi([e], t) || [])[0];
}
function ks(e) {
  let { abi: t, args: n, logs: r, strict: i = !0 } = e,
    a = (() => {
      if (e.eventName)
        return Array.isArray(e.eventName) ? e.eventName : [e.eventName];
    })(),
    o = t
      .filter((e) => e.type === `event`)
      .map((e) => ({ abi: e, selector: sr(e) }));
  return r
    .map((e) => {
      let t = typeof e.blockNumber == `string` ? Ts(e) : e,
        r = o.filter((e) => t.topics[0] === e.selector);
      if (r.length === 0) return null;
      let s, c;
      for (let e of r)
        try {
          (s = Ds({ ...t, abi: [e.abi], strict: !0 })), (c = e);
          break;
        } catch {}
      if (!s && !i) {
        c = r[0];
        try {
          s = Ds({ data: t.data, topics: t.topics, abi: [c.abi], strict: !1 });
        } catch {
          let e = c.abi.inputs?.some((e) => !(`name` in e && e.name));
          return { ...t, args: e ? [] : {}, eventName: c.abi.name };
        }
      }
      return !s ||
        !c ||
        (a && !a.includes(s.eventName)) ||
        !As({ args: s.args, inputs: c.abi.inputs, matchArgs: n })
        ? null
        : { ...s, ...t };
    })
    .filter(Boolean);
}
function As(e) {
  let { args: t, inputs: n, matchArgs: r } = e;
  if (!r) return !0;
  if (!t) return !1;
  function i(e, t, n) {
    try {
      return e.type === `address`
        ? ws(t, n)
        : e.type === `string` || e.type === `bytes`
        ? F(Wt(t)) === n
        : t === n;
    } catch {
      return !1;
    }
  }
  return Array.isArray(t) && Array.isArray(r)
    ? r.every((e, r) => {
        if (e == null) return !0;
        let a = n[r];
        return a ? (Array.isArray(e) ? e : [e]).some((e) => i(a, e, t[r])) : !1;
      })
    : typeof t == `object` &&
        !Array.isArray(t) &&
        typeof r == `object` &&
        !Array.isArray(r) &&
        Object.entries(r).every(([e, r]) => {
          if (r == null) return !0;
          let a = n.find((t) => t.name === e);
          return a
            ? (Array.isArray(r) ? r : [r]).some((n) => i(a, n, t[e]))
            : !1;
        });
}
async function js(
  e,
  {
    address: t,
    blockHash: n,
    fromBlock: r,
    toBlock: i,
    event: a,
    events: o,
    args: s,
    strict: c,
  } = {}
) {
  let l = c ?? !1,
    u = o ?? (a ? [a] : void 0),
    d = [];
  u &&
    ((d = [
      u.flatMap((e) =>
        Hr({ abi: [e], eventName: e.name, args: o ? void 0 : s })
      ),
    ]),
    a && (d = d[0]));
  let f;
  f = n
    ? await e.request({
        method: `eth_getLogs`,
        params: [{ address: t, topics: d, blockHash: n }],
      })
    : await e.request({
        method: `eth_getLogs`,
        params: [
          {
            address: t,
            topics: d,
            fromBlock: typeof r == `bigint` ? N(r) : r,
            toBlock: typeof i == `bigint` ? N(i) : i,
          },
        ],
      });
  let p = f.map((e) => Ts(e));
  return u ? ks({ abi: u, args: s, logs: p, strict: l }) : p;
}
async function Ms(e, t) {
  let {
      abi: n,
      address: r,
      args: i,
      blockHash: a,
      eventName: o,
      fromBlock: s,
      toBlock: c,
      strict: l,
    } = t,
    u = o ? Rr({ abi: n, name: o }) : void 0,
    d = u ? void 0 : n.filter((e) => e.type === `event`);
  return T(
    e,
    js,
    `getLogs`
  )({
    address: r,
    args: i,
    blockHash: a,
    event: u,
    events: d,
    fromBlock: s,
    toBlock: c,
    strict: l,
  });
}
var Ns = `/docs/contract/decodeFunctionResult`;
function Ps(e) {
  let { abi: t, args: n, functionName: r, data: i } = e,
    a = t[0];
  if (r) {
    let e = Rr({ abi: t, args: n, name: r });
    if (!e) throw new pt(r, { docsPath: Ns });
    a = e;
  }
  if (a.type !== `function`) throw new pt(void 0, { docsPath: Ns });
  if (!a.outputs) throw new mt(a.name, { docsPath: Ns });
  let o = oi(a.outputs, i);
  if (o && o.length > 1) return o;
  if (o && o.length === 1) return o[0];
}
var Fs = BigInt(0),
  Is = BigInt(1);
function Ls(e) {
  return (
    e instanceof Uint8Array ||
    (ArrayBuffer.isView(e) && e.constructor.name === `Uint8Array`)
  );
}
function Rs(e) {
  if (!Ls(e)) throw Error(`Uint8Array expected`);
}
function zs(e, t) {
  if (typeof t != `boolean`) throw Error(e + ` boolean expected, got ` + t);
}
function Bs(e) {
  let t = e.toString(16);
  return t.length & 1 ? `0` + t : t;
}
function Vs(e) {
  if (typeof e != `string`) throw Error(`hex string expected, got ` + typeof e);
  return e === `` ? Fs : BigInt(`0x` + e);
}
var Hs =
    typeof Uint8Array.from([]).toHex == `function` &&
    typeof Uint8Array.fromHex == `function`,
  Us = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, `0`));
function Ws(e) {
  if ((Rs(e), Hs)) return e.toHex();
  let t = ``;
  for (let n = 0; n < e.length; n++) t += Us[e[n]];
  return t;
}
var Gs = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function Ks(e) {
  if (e >= Gs._0 && e <= Gs._9) return e - Gs._0;
  if (e >= Gs.A && e <= Gs.F) return e - (Gs.A - 10);
  if (e >= Gs.a && e <= Gs.f) return e - (Gs.a - 10);
}
function qs(e) {
  if (typeof e != `string`) throw Error(`hex string expected, got ` + typeof e);
  if (Hs) return Uint8Array.fromHex(e);
  let t = e.length,
    n = t / 2;
  if (t % 2)
    throw Error(`hex string expected, got unpadded hex of length ` + t);
  let r = new Uint8Array(n);
  for (let t = 0, i = 0; t < n; t++, i += 2) {
    let n = Ks(e.charCodeAt(i)),
      a = Ks(e.charCodeAt(i + 1));
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
function Js(e) {
  return Vs(Ws(e));
}
function Ys(e) {
  return Rs(e), Vs(Ws(Uint8Array.from(e).reverse()));
}
function Xs(e, t) {
  return qs(e.toString(16).padStart(t * 2, `0`));
}
function Zs(e, t) {
  return Xs(e, t).reverse();
}
function Qs(e, t, n) {
  let r;
  if (typeof t == `string`)
    try {
      r = qs(t);
    } catch (t) {
      throw Error(e + ` must be hex string or Uint8Array, cause: ` + t);
    }
  else if (Ls(t)) r = Uint8Array.from(t);
  else throw Error(e + ` must be hex string or Uint8Array`);
  let i = r.length;
  if (typeof n == `number` && i !== n)
    throw Error(e + ` of length ` + n + ` expected, got ` + i);
  return r;
}
function $s(...e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    Rs(r), (t += r.length);
  }
  let n = new Uint8Array(t);
  for (let t = 0, r = 0; t < e.length; t++) {
    let i = e[t];
    n.set(i, r), (r += i.length);
  }
  return n;
}
var ec = (e) => typeof e == `bigint` && Fs <= e;
function tc(e, t, n) {
  return ec(e) && ec(t) && ec(n) && t <= e && e < n;
}
function nc(e, t, n, r) {
  if (!tc(t, n, r))
    throw Error(
      `expected valid ` + e + `: ` + n + ` <= n < ` + r + `, got ` + t
    );
}
function rc(e) {
  let t = 0;
  for (; e > Fs; e >>= Is, t += 1);
  return t;
}
var ic = (e) => (Is << BigInt(e)) - Is,
  ac = (e) => new Uint8Array(e),
  oc = (e) => Uint8Array.from(e);
function sc(e, t, n) {
  if (typeof e != `number` || e < 2) throw Error(`hashLen must be a number`);
  if (typeof t != `number` || t < 2) throw Error(`qByteLen must be a number`);
  if (typeof n != `function`) throw Error(`hmacFn must be a function`);
  let r = ac(e),
    i = ac(e),
    a = 0,
    o = () => {
      r.fill(1), i.fill(0), (a = 0);
    },
    s = (...e) => n(i, r, ...e),
    c = (e = ac(0)) => {
      (i = s(oc([0]), e)),
        (r = s()),
        e.length !== 0 && ((i = s(oc([1]), e)), (r = s()));
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
      return $s(...n);
    };
  return (e, t) => {
    o(), c(e);
    let n;
    for (; !(n = t(l())); ) c();
    return o(), n;
  };
}
var cc = {
  bigint: (e) => typeof e == `bigint`,
  function: (e) => typeof e == `function`,
  boolean: (e) => typeof e == `boolean`,
  string: (e) => typeof e == `string`,
  stringOrUint8Array: (e) => typeof e == `string` || Ls(e),
  isSafeInteger: (e) => Number.isSafeInteger(e),
  array: (e) => Array.isArray(e),
  field: (e, t) => t.Fp.isValid(e),
  hash: (e) => typeof e == `function` && Number.isSafeInteger(e.outputLen),
};
function lc(e, t, n = {}) {
  let r = (t, n, r) => {
    let i = cc[n];
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
function uc(e) {
  let t = new WeakMap();
  return (n, ...r) => {
    let i = t.get(n);
    if (i !== void 0) return i;
    let a = e(n, ...r);
    return t.set(n, a), a;
  };
}
var dc = `0.1.1`;
function fc() {
  return dc;
}
var q = class e extends Error {
  static setStaticOptions(t) {
    (e.prototype.docsOrigin = t.docsOrigin),
      (e.prototype.showVersion = t.showVersion),
      (e.prototype.version = t.version);
  }
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
      a = n.docsOrigin ?? e.prototype.docsOrigin,
      o = `${a}${i ?? ``}`,
      s = !!(n.version ?? e.prototype.showVersion),
      c = n.version ?? e.prototype.version,
      l = [
        t || `An error occurred.`,
        ...(n.metaMessages ? [``, ...n.metaMessages] : []),
        ...(r || i || s
          ? [
              ``,
              r ? `Details: ${r}` : void 0,
              i ? `See: ${o}` : void 0,
              s ? `Version: ${c}` : void 0,
            ]
          : []),
      ].filter((e) => typeof e == `string`).join(`
`);
    super(l, n.cause ? { cause: n.cause } : void 0),
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
      Object.defineProperty(this, "docsOrigin", {
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
      Object.defineProperty(this, "showVersion", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "version", {
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
      (this.cause = n.cause),
      (this.details = r),
      (this.docs = o),
      (this.docsOrigin = a),
      (this.docsPath = i),
      (this.shortMessage = t),
      (this.showVersion = s),
      (this.version = c);
  }
  walk(e) {
    return pc(this, e);
  }
};
Object.defineProperty(q, "defaultStaticOptions", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {
    docsOrigin: `https://oxlib.sh`,
    showVersion: !1,
    version: `ox@${fc()}`,
  },
}),
  q.setStaticOptions(q.defaultStaticOptions);
function pc(e, t) {
  return t?.(e)
    ? e
    : e && typeof e == `object` && `cause` in e && e.cause
    ? pc(e.cause, t)
    : t
    ? null
    : e;
}
function mc(e, t) {
  if (Pc(e) > t) throw new Uc({ givenSize: Pc(e), maxSize: t });
}
function hc(e, t) {
  if (typeof t == `number` && t > 0 && t > Pc(e) - 1)
    throw new Wc({ offset: t, position: `start`, size: Pc(e) });
}
function gc(e, t, n) {
  if (typeof t == `number` && typeof n == `number` && Pc(e) !== n - t)
    throw new Wc({ offset: n, position: `end`, size: Pc(e) });
}
var _c = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
function vc(e) {
  if (e >= _c.zero && e <= _c.nine) return e - _c.zero;
  if (e >= _c.A && e <= _c.F) return e - (_c.A - 10);
  if (e >= _c.a && e <= _c.f) return e - (_c.a - 10);
}
function yc(e, t = {}) {
  let { dir: n, size: r = 32 } = t;
  if (r === 0) return e;
  if (e.length > r)
    throw new Gc({ size: e.length, targetSize: r, type: `Bytes` });
  let i = new Uint8Array(r);
  for (let t = 0; t < r; t++) {
    let a = n === `right`;
    i[a ? t : r - t - 1] = e[a ? t : e.length - t - 1];
  }
  return i;
}
function bc(e, t = {}) {
  let { dir: n = `left` } = t,
    r = e,
    i = 0;
  for (
    let e = 0;
    e < r.length - 1 &&
    r[n === `left` ? e : r.length - e - 1].toString() === `0`;
    e++
  )
    i++;
  return (r = n === `left` ? r.slice(i) : r.slice(0, r.length - i)), r;
}
function xc(e, t) {
  if (rl(e) > t) throw new ul({ givenSize: rl(e), maxSize: t });
}
function Sc(e, t) {
  if (typeof t == `number` && t > 0 && t > rl(e) - 1)
    throw new dl({ offset: t, position: `start`, size: rl(e) });
}
function Cc(e, t, n) {
  if (typeof t == `number` && typeof n == `number` && rl(e) !== n - t)
    throw new dl({ offset: n, position: `end`, size: rl(e) });
}
function wc(e, t = {}) {
  let { dir: n, size: r = 32 } = t;
  if (r === 0) return e;
  let i = e.replace(`0x`, ``);
  if (i.length > r * 2)
    throw new fl({ size: Math.ceil(i.length / 2), targetSize: r, type: `Hex` });
  return `0x${i[n === `right` ? `padEnd` : `padStart`](r * 2, `0`)}`;
}
var Tc = `#__bigint`;
function Ec(e, t, n) {
  return JSON.stringify(
    e,
    (e, n) =>
      typeof t == `function`
        ? t(e, n)
        : typeof n == `bigint`
        ? n.toString() + Tc
        : n,
    n
  );
}
var Dc = new TextDecoder(),
  Oc = new TextEncoder();
function kc(e) {
  return e instanceof Uint8Array ? e : typeof e == `string` ? jc(e) : Ac(e);
}
function Ac(e) {
  return e instanceof Uint8Array ? e : new Uint8Array(e);
}
function jc(e, t = {}) {
  let { size: n } = t,
    r = e;
  n && (xc(e, n), (r = tl(e, n)));
  let i = r.slice(2);
  i.length % 2 && (i = `0${i}`);
  let a = i.length / 2,
    o = new Uint8Array(a);
  for (let e = 0, t = 0; e < a; e++) {
    let n = vc(i.charCodeAt(t++)),
      r = vc(i.charCodeAt(t++));
    if (n === void 0 || r === void 0)
      throw new q(
        `Invalid byte sequence ("${i[t - 2]}${i[t - 1]}" in "${i}").`
      );
    o[e] = (n << 4) | r;
  }
  return o;
}
function Mc(e, t = {}) {
  let { size: n } = t,
    r = Oc.encode(e);
  return typeof n == `number` ? (mc(r, n), Nc(r, n)) : r;
}
function Nc(e, t) {
  return yc(e, { dir: `right`, size: t });
}
function Pc(e) {
  return e.length;
}
function Fc(e, t, n, r = {}) {
  let { strict: i } = r;
  hc(e, t);
  let a = e.slice(t, n);
  return i && gc(a, t, n), a;
}
function Ic(e, t = {}) {
  let { size: n } = t;
  return n !== void 0 && mc(e, n), il(Qc(e, t), t);
}
function Lc(e, t = {}) {
  let { size: n } = t,
    r = e;
  if ((n !== void 0 && (mc(r, n), (r = Bc(r))), r.length > 1 || r[0] > 1))
    throw new Hc(r);
  return !!r[0];
}
function Rc(e, t = {}) {
  let { size: n } = t;
  return n !== void 0 && mc(e, n), al(Qc(e, t), t);
}
function zc(e, t = {}) {
  let { size: n } = t,
    r = e;
  return n !== void 0 && (mc(r, n), (r = Vc(r))), Dc.decode(r);
}
function Bc(e) {
  return bc(e, { dir: `left` });
}
function Vc(e) {
  return bc(e, { dir: `right` });
}
var Hc = class extends q {
    constructor(e) {
      super(`Bytes value \`${e}\` is not a valid boolean.`, {
        metaMessages: [
          "The bytes array must contain a single byte of either a `0` or `1` value.",
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Bytes.InvalidBytesBooleanError`,
        });
    }
  },
  Uc = class extends q {
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
  Wc = class extends q {
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
          value: `Bytes.SliceOffsetOutOfBoundsError`,
        });
    }
  },
  Gc = class extends q {
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
  },
  Kc = new TextEncoder(),
  qc = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, `0`));
function Jc(e, t = {}) {
  let { strict: n = !1 } = t;
  if (!e || typeof e != `string`) throw new cl(e);
  if ((n && !/^0x[0-9a-fA-F]*$/.test(e)) || !e.startsWith(`0x`))
    throw new ll(e);
}
function Yc(...e) {
  return `0x${e.reduce((e, t) => e + t.replace(`0x`, ``), ``)}`;
}
function Xc(e) {
  return e instanceof Uint8Array
    ? Qc(e)
    : Array.isArray(e)
    ? Qc(new Uint8Array(e))
    : e;
}
function Zc(e, t = {}) {
  let n = `0x${Number(e)}`;
  return typeof t.size == `number` ? (xc(n, t.size), el(n, t.size)) : n;
}
function Qc(e, t = {}) {
  let n = ``;
  for (let t = 0; t < e.length; t++) n += qc[e[t]];
  let r = `0x${n}`;
  return typeof t.size == `number` ? (xc(r, t.size), tl(r, t.size)) : r;
}
function J(e, t = {}) {
  let { signed: n, size: r } = t,
    i = BigInt(e),
    a;
  r
    ? (a = n ? (1n << (BigInt(r) * 8n - 1n)) - 1n : 2n ** (BigInt(r) * 8n) - 1n)
    : typeof e == `number` && (a = BigInt(2 ** 53 - 1));
  let o = typeof a == `bigint` && n ? -a - 1n : 0;
  if ((a && i > a) || i < o) {
    let t = typeof e == `bigint` ? `n` : ``;
    throw new sl({
      max: a ? `${a}${t}` : void 0,
      min: `${o}${t}`,
      signed: n,
      size: r,
      value: `${e}${t}`,
    });
  }
  let s = `0x${(n && i < 0 ? BigInt.asUintN(r * 8, BigInt(i)) : i).toString(
    16
  )}`;
  return r ? el(s, r) : s;
}
function $c(e, t = {}) {
  return Qc(Kc.encode(e), t);
}
function el(e, t) {
  return wc(e, { dir: `left`, size: t });
}
function tl(e, t) {
  return wc(e, { dir: `right`, size: t });
}
function nl(e, t, n, r = {}) {
  let { strict: i } = r;
  Sc(e, t);
  let a = `0x${e.replace(`0x`, ``).slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
  return i && Cc(a, t, n), a;
}
function rl(e) {
  return Math.ceil((e.length - 2) / 2);
}
function il(e, t = {}) {
  let { signed: n } = t;
  t.size && xc(e, t.size);
  let r = BigInt(e);
  if (!n) return r;
  let i = (e.length - 2) / 2,
    a = (1n << (BigInt(i) * 8n)) - 1n;
  return r <= a >> 1n ? r : r - a - 1n;
}
function al(e, t = {}) {
  let { signed: n, size: r } = t;
  return Number(!n && !r ? e : il(e, t));
}
function ol(e, t = {}) {
  let { strict: n = !1 } = t;
  try {
    return Jc(e, { strict: n }), !0;
  } catch {
    return !1;
  }
}
var sl = class extends q {
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
  cl = class extends q {
    constructor(e) {
      super(
        `Value \`${
          typeof e == `object` ? Ec(e) : e
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
  ll = class extends q {
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
  ul = class extends q {
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
  dl = class extends q {
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
  fl = class extends q {
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
  };
function pl(e) {
  return {
    address: e.address,
    amount: J(e.amount),
    index: J(e.index),
    validatorIndex: J(e.validatorIndex),
  };
}
function ml(e) {
  return {
    ...(typeof e.baseFeePerGas == `bigint` && {
      baseFeePerGas: J(e.baseFeePerGas),
    }),
    ...(typeof e.blobBaseFee == `bigint` && { blobBaseFee: J(e.blobBaseFee) }),
    ...(typeof e.feeRecipient == `string` && { feeRecipient: e.feeRecipient }),
    ...(typeof e.gasLimit == `bigint` && { gasLimit: J(e.gasLimit) }),
    ...(typeof e.number == `bigint` && { number: J(e.number) }),
    ...(typeof e.prevRandao == `bigint` && { prevRandao: J(e.prevRandao) }),
    ...(typeof e.time == `bigint` && { time: J(e.time) }),
    ...(e.withdrawals && { withdrawals: e.withdrawals.map(pl) }),
  };
}
var hl = [
    {
      inputs: [
        {
          components: [
            { name: `target`, type: `address` },
            { name: `allowFailure`, type: `bool` },
            { name: `callData`, type: `bytes` },
          ],
          name: `calls`,
          type: `tuple[]`,
        },
      ],
      name: `aggregate3`,
      outputs: [
        {
          components: [
            { name: `success`, type: `bool` },
            { name: `returnData`, type: `bytes` },
          ],
          name: `returnData`,
          type: `tuple[]`,
        },
      ],
      stateMutability: `view`,
      type: `function`,
    },
    {
      inputs: [{ name: `addr`, type: `address` }],
      name: `getEthBalance`,
      outputs: [{ name: `balance`, type: `uint256` }],
      stateMutability: `view`,
      type: `function`,
    },
    {
      inputs: [],
      name: `getCurrentBlockTimestamp`,
      outputs: [
        { internalType: `uint256`, name: `timestamp`, type: `uint256` },
      ],
      stateMutability: `view`,
      type: `function`,
    },
  ],
  gl = [
    {
      name: `query`,
      type: `function`,
      stateMutability: `view`,
      inputs: [
        {
          type: `tuple[]`,
          name: `queries`,
          components: [
            { type: `address`, name: `sender` },
            { type: `string[]`, name: `urls` },
            { type: `bytes`, name: `data` },
          ],
        },
      ],
      outputs: [
        { type: `bool[]`, name: `failures` },
        { type: `bytes[]`, name: `responses` },
      ],
    },
    {
      name: `HttpError`,
      type: `error`,
      inputs: [
        { type: `uint16`, name: `status` },
        { type: `string`, name: `message` },
      ],
    },
  ],
  _l = [
    {
      inputs: [{ name: `dns`, type: `bytes` }],
      name: `DNSDecodingFailed`,
      type: `error`,
    },
    {
      inputs: [{ name: `ens`, type: `string` }],
      name: `DNSEncodingFailed`,
      type: `error`,
    },
    { inputs: [], name: `EmptyAddress`, type: `error` },
    {
      inputs: [
        { name: `status`, type: `uint16` },
        { name: `message`, type: `string` },
      ],
      name: `HttpError`,
      type: `error`,
    },
    { inputs: [], name: `InvalidBatchGatewayResponse`, type: `error` },
    {
      inputs: [{ name: `errorData`, type: `bytes` }],
      name: `ResolverError`,
      type: `error`,
    },
    {
      inputs: [
        { name: `name`, type: `bytes` },
        { name: `resolver`, type: `address` },
      ],
      name: `ResolverNotContract`,
      type: `error`,
    },
    {
      inputs: [{ name: `name`, type: `bytes` }],
      name: `ResolverNotFound`,
      type: `error`,
    },
    {
      inputs: [
        { name: `primary`, type: `string` },
        { name: `primaryAddress`, type: `bytes` },
      ],
      name: `ReverseAddressMismatch`,
      type: `error`,
    },
    {
      inputs: [{ internalType: `bytes4`, name: `selector`, type: `bytes4` }],
      name: `UnsupportedResolverProfile`,
      type: `error`,
    },
  ],
  vl = [
    ..._l,
    {
      name: `resolveWithGateways`,
      type: `function`,
      stateMutability: `view`,
      inputs: [
        { name: `name`, type: `bytes` },
        { name: `data`, type: `bytes` },
        { name: `gateways`, type: `string[]` },
      ],
      outputs: [
        { name: ``, type: `bytes` },
        { name: `address`, type: `address` },
      ],
    },
  ],
  yl = [
    ..._l,
    {
      name: `reverseWithGateways`,
      type: `function`,
      stateMutability: `view`,
      inputs: [
        { type: `bytes`, name: `reverseName` },
        { type: `uint256`, name: `coinType` },
        { type: `string[]`, name: `gateways` },
      ],
      outputs: [
        { type: `string`, name: `resolvedName` },
        { type: `address`, name: `resolver` },
        { type: `address`, name: `reverseResolver` },
      ],
    },
  ],
  bl = [
    {
      name: `text`,
      type: `function`,
      stateMutability: `view`,
      inputs: [
        { name: `name`, type: `bytes32` },
        { name: `key`, type: `string` },
      ],
      outputs: [{ name: ``, type: `string` }],
    },
  ],
  xl = [
    {
      name: `addr`,
      type: `function`,
      stateMutability: `view`,
      inputs: [{ name: `name`, type: `bytes32` }],
      outputs: [{ name: ``, type: `address` }],
    },
    {
      name: `addr`,
      type: `function`,
      stateMutability: `view`,
      inputs: [
        { name: `name`, type: `bytes32` },
        { name: `coinType`, type: `uint256` },
      ],
      outputs: [{ name: ``, type: `bytes` }],
    },
  ],
  Sl = [
    {
      name: `isValidSignature`,
      type: `function`,
      stateMutability: `view`,
      inputs: [
        { name: `hash`, type: `bytes32` },
        { name: `signature`, type: `bytes` },
      ],
      outputs: [{ name: ``, type: `bytes4` }],
    },
  ],
  Cl = [
    {
      inputs: [
        { name: `_signer`, type: `address` },
        { name: `_hash`, type: `bytes32` },
        { name: `_signature`, type: `bytes` },
      ],
      stateMutability: `nonpayable`,
      type: `constructor`,
    },
    {
      inputs: [
        { name: `_signer`, type: `address` },
        { name: `_hash`, type: `bytes32` },
        { name: `_signature`, type: `bytes` },
      ],
      outputs: [{ type: `bool` }],
      stateMutability: `nonpayable`,
      type: `function`,
      name: `isValidSig`,
    },
  ],
  wl = [
    {
      type: `event`,
      name: `Approval`,
      inputs: [
        { indexed: !0, name: `owner`, type: `address` },
        { indexed: !0, name: `spender`, type: `address` },
        { indexed: !1, name: `value`, type: `uint256` },
      ],
    },
    {
      type: `event`,
      name: `Transfer`,
      inputs: [
        { indexed: !0, name: `from`, type: `address` },
        { indexed: !0, name: `to`, type: `address` },
        { indexed: !1, name: `value`, type: `uint256` },
      ],
    },
    {
      type: `function`,
      name: `allowance`,
      stateMutability: `view`,
      inputs: [
        { name: `owner`, type: `address` },
        { name: `spender`, type: `address` },
      ],
      outputs: [{ type: `uint256` }],
    },
    {
      type: `function`,
      name: `approve`,
      stateMutability: `nonpayable`,
      inputs: [
        { name: `spender`, type: `address` },
        { name: `amount`, type: `uint256` },
      ],
      outputs: [{ type: `bool` }],
    },
    {
      type: `function`,
      name: `balanceOf`,
      stateMutability: `view`,
      inputs: [{ name: `account`, type: `address` }],
      outputs: [{ type: `uint256` }],
    },
    {
      type: `function`,
      name: `decimals`,
      stateMutability: `view`,
      inputs: [],
      outputs: [{ type: `uint8` }],
    },
    {
      type: `function`,
      name: `name`,
      stateMutability: `view`,
      inputs: [],
      outputs: [{ type: `string` }],
    },
    {
      type: `function`,
      name: `symbol`,
      stateMutability: `view`,
      inputs: [],
      outputs: [{ type: `string` }],
    },
    {
      type: `function`,
      name: `totalSupply`,
      stateMutability: `view`,
      inputs: [],
      outputs: [{ type: `uint256` }],
    },
    {
      type: `function`,
      name: `transfer`,
      stateMutability: `nonpayable`,
      inputs: [
        { name: `recipient`, type: `address` },
        { name: `amount`, type: `uint256` },
      ],
      outputs: [{ type: `bool` }],
    },
    {
      type: `function`,
      name: `transferFrom`,
      stateMutability: `nonpayable`,
      inputs: [
        { name: `sender`, type: `address` },
        { name: `recipient`, type: `address` },
        { name: `amount`, type: `uint256` },
      ],
      outputs: [{ type: `bool` }],
    },
  ],
  Tl = `0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe`,
  El = `0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe`,
  Dl = `0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572`,
  Ol = `0x608060405234801561001057600080fd5b506115b9806100206000396000f3fe6080604052600436106100f35760003560e01c80634d2301cc1161008a578063a8b0574e11610059578063a8b0574e14610325578063bce38bd714610350578063c3077fa914610380578063ee82ac5e146103b2576100f3565b80634d2301cc1461026257806372425d9d1461029f57806382ad56cb146102ca57806386d516e8146102fa576100f3565b80633408e470116100c65780633408e470146101af578063399542e9146101da5780633e64a6961461020c57806342cbb15c14610237576100f3565b80630f28c97d146100f8578063174dea7114610123578063252dba421461015357806327e86d6e14610184575b600080fd5b34801561010457600080fd5b5061010d6103ef565b60405161011a9190610c0a565b60405180910390f35b61013d60048036038101906101389190610c94565b6103f7565b60405161014a9190610e94565b60405180910390f35b61016d60048036038101906101689190610f0c565b610615565b60405161017b92919061101b565b60405180910390f35b34801561019057600080fd5b506101996107ab565b6040516101a69190611064565b60405180910390f35b3480156101bb57600080fd5b506101c46107b7565b6040516101d19190610c0a565b60405180910390f35b6101f460048036038101906101ef91906110ab565b6107bf565b6040516102039392919061110b565b60405180910390f35b34801561021857600080fd5b506102216107e1565b60405161022e9190610c0a565b60405180910390f35b34801561024357600080fd5b5061024c6107e9565b6040516102599190610c0a565b60405180910390f35b34801561026e57600080fd5b50610289600480360381019061028491906111a7565b6107f1565b6040516102969190610c0a565b60405180910390f35b3480156102ab57600080fd5b506102b4610812565b6040516102c19190610c0a565b60405180910390f35b6102e460048036038101906102df919061122a565b61081a565b6040516102f19190610e94565b60405180910390f35b34801561030657600080fd5b5061030f6109e4565b60405161031c9190610c0a565b60405180910390f35b34801561033157600080fd5b5061033a6109ec565b6040516103479190611286565b60405180910390f35b61036a600480360381019061036591906110ab565b6109f4565b6040516103779190610e94565b60405180910390f35b61039a60048036038101906103959190610f0c565b610ba6565b6040516103a99392919061110b565b60405180910390f35b3480156103be57600080fd5b506103d960048036038101906103d491906112cd565b610bca565b6040516103e69190611064565b60405180910390f35b600042905090565b60606000808484905090508067ffffffffffffffff81111561041c5761041b6112fa565b5b60405190808252806020026020018201604052801561045557816020015b610442610bd5565b81526020019060019003908161043a5790505b5092503660005b828110156105c957600085828151811061047957610478611329565b5b6020026020010151905087878381811061049657610495611329565b5b90506020028101906104a89190611367565b925060008360400135905080860195508360000160208101906104cb91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16818580606001906104f2919061138f565b604051610500929190611431565b60006040518083038185875af1925050503d806000811461053d576040519150601f19603f3d011682016040523d82523d6000602084013e610542565b606091505b5083600001846020018290528215151515815250505081516020850135176105bc577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260846000fd5b826001019250505061045c565b5082341461060c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610603906114a7565b60405180910390fd5b50505092915050565b6000606043915060008484905090508067ffffffffffffffff81111561063e5761063d6112fa565b5b60405190808252806020026020018201604052801561067157816020015b606081526020019060019003908161065c5790505b5091503660005b828110156107a157600087878381811061069557610694611329565b5b90506020028101906106a791906114c7565b92508260000160208101906106bc91906111a7565b73ffffffffffffffffffffffffffffffffffffffff168380602001906106e2919061138f565b6040516106f0929190611431565b6000604051808303816000865af19150503d806000811461072d576040519150601f19603f3d011682016040523d82523d6000602084013e610732565b606091505b5086848151811061074657610745611329565b5b60200260200101819052819250505080610795576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078c9061153b565b60405180910390fd5b81600101915050610678565b5050509250929050565b60006001430340905090565b600046905090565b6000806060439250434091506107d68686866109f4565b905093509350939050565b600048905090565b600043905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b606060008383905090508067ffffffffffffffff81111561083e5761083d6112fa565b5b60405190808252806020026020018201604052801561087757816020015b610864610bd5565b81526020019060019003908161085c5790505b5091503660005b828110156109db57600084828151811061089b5761089a611329565b5b602002602001015190508686838181106108b8576108b7611329565b5b90506020028101906108ca919061155b565b92508260000160208101906108df91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060400190610905919061138f565b604051610913929190611431565b6000604051808303816000865af19150503d8060008114610950576040519150601f19603f3d011682016040523d82523d6000602084013e610955565b606091505b5082600001836020018290528215151515815250505080516020840135176109cf577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260646000fd5b8160010191505061087e565b50505092915050565b600045905090565b600041905090565b606060008383905090508067ffffffffffffffff811115610a1857610a176112fa565b5b604051908082528060200260200182016040528015610a5157816020015b610a3e610bd5565b815260200190600190039081610a365790505b5091503660005b82811015610b9c576000848281518110610a7557610a74611329565b5b60200260200101519050868683818110610a9257610a91611329565b5b9050602002810190610aa491906114c7565b9250826000016020810190610ab991906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060200190610adf919061138f565b604051610aed929190611431565b6000604051808303816000865af19150503d8060008114610b2a576040519150601f19603f3d011682016040523d82523d6000602084013e610b2f565b606091505b508260000183602001829052821515151581525050508715610b90578060000151610b8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b869061153b565b60405180910390fd5b5b81600101915050610a58565b5050509392505050565b6000806060610bb7600186866107bf565b8093508194508295505050509250925092565b600081409050919050565b6040518060400160405280600015158152602001606081525090565b6000819050919050565b610c0481610bf1565b82525050565b6000602082019050610c1f6000830184610bfb565b92915050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f840112610c5457610c53610c2f565b5b8235905067ffffffffffffffff811115610c7157610c70610c34565b5b602083019150836020820283011115610c8d57610c8c610c39565b5b9250929050565b60008060208385031215610cab57610caa610c25565b5b600083013567ffffffffffffffff811115610cc957610cc8610c2a565b5b610cd585828601610c3e565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60008115159050919050565b610d2281610d0d565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d62578082015181840152602081019050610d47565b83811115610d71576000848401525b50505050565b6000601f19601f8301169050919050565b6000610d9382610d28565b610d9d8185610d33565b9350610dad818560208601610d44565b610db681610d77565b840191505092915050565b6000604083016000830151610dd96000860182610d19565b5060208301518482036020860152610df18282610d88565b9150508091505092915050565b6000610e0a8383610dc1565b905092915050565b6000602082019050919050565b6000610e2a82610ce1565b610e348185610cec565b935083602082028501610e4685610cfd565b8060005b85811015610e825784840389528151610e638582610dfe565b9450610e6e83610e12565b925060208a01995050600181019050610e4a565b50829750879550505050505092915050565b60006020820190508181036000830152610eae8184610e1f565b905092915050565b60008083601f840112610ecc57610ecb610c2f565b5b8235905067ffffffffffffffff811115610ee957610ee8610c34565b5b602083019150836020820283011115610f0557610f04610c39565b5b9250929050565b60008060208385031215610f2357610f22610c25565b5b600083013567ffffffffffffffff811115610f4157610f40610c2a565b5b610f4d85828601610eb6565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000610f918383610d88565b905092915050565b6000602082019050919050565b6000610fb182610f59565b610fbb8185610f64565b935083602082028501610fcd85610f75565b8060005b858110156110095784840389528151610fea8582610f85565b9450610ff583610f99565b925060208a01995050600181019050610fd1565b50829750879550505050505092915050565b60006040820190506110306000830185610bfb565b81810360208301526110428184610fa6565b90509392505050565b6000819050919050565b61105e8161104b565b82525050565b60006020820190506110796000830184611055565b92915050565b61108881610d0d565b811461109357600080fd5b50565b6000813590506110a58161107f565b92915050565b6000806000604084860312156110c4576110c3610c25565b5b60006110d286828701611096565b935050602084013567ffffffffffffffff8111156110f3576110f2610c2a565b5b6110ff86828701610eb6565b92509250509250925092565b60006060820190506111206000830186610bfb565b61112d6020830185611055565b818103604083015261113f8184610e1f565b9050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061117482611149565b9050919050565b61118481611169565b811461118f57600080fd5b50565b6000813590506111a18161117b565b92915050565b6000602082840312156111bd576111bc610c25565b5b60006111cb84828501611192565b91505092915050565b60008083601f8401126111ea576111e9610c2f565b5b8235905067ffffffffffffffff81111561120757611206610c34565b5b60208301915083602082028301111561122357611222610c39565b5b9250929050565b6000806020838503121561124157611240610c25565b5b600083013567ffffffffffffffff81111561125f5761125e610c2a565b5b61126b858286016111d4565b92509250509250929050565b61128081611169565b82525050565b600060208201905061129b6000830184611277565b92915050565b6112aa81610bf1565b81146112b557600080fd5b50565b6000813590506112c7816112a1565b92915050565b6000602082840312156112e3576112e2610c25565b5b60006112f1848285016112b8565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b60008235600160800383360303811261138357611382611358565b5b80830191505092915050565b600080833560016020038436030381126113ac576113ab611358565b5b80840192508235915067ffffffffffffffff8211156113ce576113cd61135d565b5b6020830192506001820236038313156113ea576113e9611362565b5b509250929050565b600081905092915050565b82818337600083830152505050565b600061141883856113f2565b93506114258385846113fd565b82840190509392505050565b600061143e82848661140c565b91508190509392505050565b600082825260208201905092915050565b7f4d756c746963616c6c333a2076616c7565206d69736d61746368000000000000600082015250565b6000611491601a8361144a565b915061149c8261145b565b602082019050919050565b600060208201905081810360008301526114c081611484565b9050919050565b6000823560016040038336030381126114e3576114e2611358565b5b80830191505092915050565b7f4d756c746963616c6c333a2063616c6c206661696c6564000000000000000000600082015250565b600061152560178361144a565b9150611530826114ef565b602082019050919050565b6000602082019050818103600083015261155481611518565b9050919050565b60008235600160600383360303811261157757611576611358565b5b8083019150509291505056fea264697066735822122020c1bc9aacf8e4a6507193432a895a8e77094f45a1395583f07b24e860ef06cd64736f6c634300080c0033`,
  kl = class extends D {
    constructor({ blockNumber: e, chain: t, contract: n }) {
      super(`Chain "${t.name}" does not support contract "${n.name}".`, {
        metaMessages: [
          `This could be due to any of the following:`,
          ...(e && n.blockCreated && n.blockCreated > e
            ? [
                `- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${e}).`,
              ]
            : [
                `- The chain does not have the contract "${n.name}" configured.`,
              ]),
        ],
        name: `ChainDoesNotSupportContract`,
      });
    }
  },
  Al = class extends D {
    constructor({ chain: e, currentChainId: t }) {
      super(
        `The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,
        {
          metaMessages: [
            `Current Chain ID:  ${t}`,
            `Expected Chain ID: ${e.id} – ${e.name}`,
          ],
          name: `ChainMismatchError`,
        }
      );
    }
  },
  jl = class extends D {
    constructor() {
      super(
        [
          `No chain was provided to the request.`,
          "Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",
        ].join(`
`),
        { name: `ChainNotFoundError` }
      );
    }
  },
  Ml = class extends D {
    constructor() {
      super(`No chain was provided to the Client.`, {
        name: `ClientChainNotConfiguredError`,
      });
    }
  },
  Nl = class extends D {
    constructor({ chainId: e }) {
      super(
        typeof e == `number`
          ? `Chain ID "${e}" is invalid.`
          : `Chain ID is invalid.`,
        { name: `InvalidChainIdError` }
      );
    }
  },
  Pl = `/docs/contract/encodeDeployData`;
function Fl(e) {
  let { abi: t, args: n, bytecode: r } = e;
  if (!n || n.length === 0) return r;
  let i = t.find((e) => `type` in e && e.type === `constructor`);
  if (!i) throw new et({ docsPath: Pl });
  if (!(`inputs` in i) || !i.inputs || i.inputs.length === 0)
    throw new tt({ docsPath: Pl });
  return R([r, wr(i.inputs, n)]);
}
function Il({ blockNumber: e, chain: t, contract: n }) {
  let r = t?.contracts?.[n];
  if (!r) throw new kl({ chain: t, contract: { name: n } });
  if (e && r.blockCreated && r.blockCreated > e)
    throw new kl({
      blockNumber: e,
      chain: t,
      contract: { name: n, blockCreated: r.blockCreated },
    });
  return r.address;
}
function Ll(e, { docsPath: t, ...n }) {
  return new qi(
    (() => {
      let t = ro(e, n);
      return t instanceof no ? e : t;
    })(),
    { docsPath: t, ...n }
  );
}
function Rl() {
  let e = () => void 0,
    t = () => void 0;
  return {
    promise: new Promise((n, r) => {
      (e = n), (t = r);
    }),
    resolve: e,
    reject: t,
  };
}
var zl = new Map();
function Bl({ fn: e, id: t, shouldSplitBatch: n, wait: r = 0, sort: i }) {
  let a = async () => {
      let t = c();
      o();
      let n = t.map(({ args: e }) => e);
      n.length !== 0 &&
        e(n)
          .then((e) => {
            i && Array.isArray(e) && e.sort(i);
            for (let n = 0; n < t.length; n++) {
              let { resolve: r } = t[n];
              r?.([e[n], e]);
            }
          })
          .catch((e) => {
            for (let n = 0; n < t.length; n++) {
              let { reject: r } = t[n];
              r?.(e);
            }
          });
    },
    o = () => zl.delete(t),
    s = () => c().map(({ args: e }) => e),
    c = () => zl.get(t) || [],
    l = (e) => zl.set(t, [...c(), e]);
  return {
    flush: o,
    async schedule(e) {
      let { promise: t, resolve: i, reject: o } = Rl();
      return (
        n?.([...s(), e]) && a(),
        c().length > 0
          ? (l({ args: e, resolve: i, reject: o }), t)
          : (l({ args: e, resolve: i, reject: o }), setTimeout(a, r), t)
      );
    },
  };
}
async function Vl(e, n) {
  let {
      account: r = e.account,
      authorizationList: i,
      batch: a = !!e.batch?.multicall,
      blockHash: o,
      blockNumber: s,
      blockTag: c = e.experimental_blockTag ?? `latest`,
      requireCanonical: l,
      accessList: u,
      blobs: d,
      blockOverrides: f,
      code: p,
      data: m,
      factory: h,
      factoryData: g,
      gas: _,
      gasPrice: v,
      maxFeePerBlobGas: y,
      maxFeePerGas: b,
      maxPriorityFeePerGas: x,
      nonce: S,
      requestOptions: C,
      to: w,
      value: ee,
      stateOverride: te,
      ...ne
    } = n,
    re = r ? z(r) : void 0;
  if (p && (h || g))
    throw new D(
      "Cannot provide both `code` & `factory`/`factoryData` as parameters."
    );
  if (p && w) throw new D("Cannot provide both `code` & `to` as parameters.");
  let ie = p && m,
    ae = h && g && w && m,
    oe = ie || ae,
    se = ie
      ? Yl({ code: p, data: m })
      : ae
      ? Xl({ data: m, factory: h, factoryData: g, to: w })
      : m;
  try {
    ho(n);
    let t = Mo({
        blockHash: o,
        blockNumber: s,
        blockTag: c,
        requireCanonical: l,
      }),
      r = f ? ml(f) : void 0,
      p = po(te),
      m = e.chain?.formatters?.transactionRequest?.format,
      h = (m || co)(
        {
          ...ao(ne, { format: m }),
          accessList: u,
          account: re,
          authorizationList: i,
          blobs: d,
          data: se,
          gas: _,
          gasPrice: v,
          maxFeePerBlobGas: y,
          maxFeePerGas: b,
          maxPriorityFeePerGas: x,
          nonce: S,
          to: oe ? void 0 : w,
          value: ee,
        },
        `call`
      );
    if (a && Hl({ request: h }) && !r && o === void 0)
      try {
        let { deployless: t = !1 } =
            typeof e.batch?.multicall == `object` ? e.batch.multicall : {},
          n = ql(e, { blockNumber: s, deployless: t });
        if (!n || !Jl(p, n))
          return await Kl(e, {
            ...h,
            blockHash: o,
            blockNumber: s,
            blockTag: c,
            multicallAddress: n,
            requestOptions: C,
            requireCanonical: l,
            rpcStateOverride: p,
          });
      } catch (e) {
        if (!(e instanceof Ml) && !(e instanceof kl)) throw e;
      }
    let g = (() => {
        let e = [h, t];
        return p && r ? [...e, p, r] : p ? [...e, p] : r ? [...e, {}, r] : e;
      })(),
      ie = await e.request({ method: `eth_call`, params: g }, C);
    return ie === `0x` ? { data: void 0 } : { data: ie };
  } catch (r) {
    if (C?.signal?.aborted) throw Wi(C.signal);
    if (Gi(r)) throw r;
    let i = Zl(r),
      { offchainLookup: a, offchainLookupSignature: o } = await t(async () => {
        let { offchainLookup: e, offchainLookupSignature: t } =
          await Promise.resolve().then(() => uf);
        return { offchainLookup: e, offchainLookupSignature: t };
      }, void 0);
    if (e.ccipRead !== !1 && i?.slice(0, 10) === o && w)
      return { data: await a(e, { data: i, requestOptions: C, to: w }) };
    throw oe && i?.slice(0, 10) === `0x101bb98d`
      ? new Zi({ factory: h })
      : Ll(r, { ...n, account: re, chain: e.chain });
  }
}
function Hl({ request: e }) {
  let { data: t, to: n, ...r } = e;
  return !(
    !t ||
    t.startsWith(`0x82ad56cb`) ||
    !n ||
    Object.values(r).filter((e) => e !== void 0).length > 0
  );
}
var Ul = 0,
  Wl = new WeakMap();
function Gl(e) {
  if (!e) return `default`;
  let t = Wl.get(e);
  if (t !== void 0) return t;
  let n = Ul++;
  return Wl.set(e, n), n;
}
async function Kl(e, t) {
  let {
      batchSize: n = 1024,
      deployless: r = !1,
      wait: i = 0,
    } = typeof e.batch?.multicall == `object` ? e.batch.multicall : {},
    {
      blockHash: a,
      blockNumber: o,
      blockTag: s = e.experimental_blockTag ?? `latest`,
      requireCanonical: c,
      data: l,
      multicallAddress: u,
      requestOptions: d,
      rpcStateOverride: f,
      to: p,
    } = t,
    m = u === void 0 ? ql(e, { blockNumber: o, deployless: r }) : u,
    h = Mo({ blockHash: a, blockNumber: o, blockTag: s, requireCanonical: c }),
    g = typeof h == `string` ? h : JSON.stringify(h),
    _ = f ? `.${JSON.stringify(f)}` : ``,
    { schedule: v } = Bl({
      id: `${e.uid}.${g}.${Gl(d)}${_}`,
      wait: i,
      shouldSplitBatch(e) {
        return e.reduce((e, { data: t }) => e + (t.length - 2), 0) > n * 2;
      },
      fn: async (t) => {
        let n = t.map((e) => ({
            allowFailure: !0,
            callData: e.data,
            target: e.to,
          })),
          r = B({ abi: hl, args: [n], functionName: `aggregate3` }),
          i = {
            ...(m === null
              ? { data: Yl({ code: Ol, data: r }) }
              : { to: m, data: r }),
          },
          a = await e.request(
            { method: `eth_call`, params: f ? [i, h, f] : [i, h] },
            d
          );
        return Ps({
          abi: hl,
          args: [n],
          functionName: `aggregate3`,
          data: a || `0x`,
        });
      },
    }),
    [{ returnData: y, success: b }] = await v({ data: l, to: p });
  if (!b) throw new Qi({ data: y });
  return y === `0x` ? { data: void 0 } : { data: y };
}
function ql(e, t) {
  let { blockNumber: n, deployless: r } = t;
  if (r) return null;
  if (e.chain)
    return Il({ blockNumber: n, chain: e.chain, contract: `multicall3` });
  throw new Ml();
}
function Jl(e, t) {
  return e ? Object.keys(e).some((e) => ws(e, t)) : !1;
}
function Yl(e) {
  let { code: t, data: n } = e;
  return Fl({
    abi: We([`constructor(bytes, bytes)`]),
    bytecode: Tl,
    args: [t, n],
  });
}
function Xl(e) {
  let { data: t, factory: n, factoryData: r, to: i } = e;
  return Fl({
    abi: We([`constructor(address, bytes, address, bytes)`]),
    bytecode: El,
    args: [i, t, n, r],
  });
}
function Zl(e) {
  if (!(e instanceof D)) return;
  let t = e.walk();
  return typeof t?.data == `object` ? t.data?.data : t.data;
}
async function Y(e, t) {
  let { abi: n, address: r, args: i, functionName: a, ...o } = t,
    s = B({ abi: n, args: i, functionName: a });
  try {
    let { data: t } = await T(e, Vl, `call`)({ ...o, data: s, to: r });
    return Ps({ abi: n, args: i, functionName: a, data: t || `0x` });
  } catch (e) {
    throw Ma(e, {
      abi: n,
      address: r,
      args: i,
      docsPath: `/docs/contract/readContract`,
      functionName: a,
    });
  }
}
async function Ql(e, t) {
  let {
      abi: n,
      address: r,
      args: i,
      functionName: a,
      dataSuffix: o = typeof e.dataSuffix == `string`
        ? e.dataSuffix
        : e.dataSuffix?.value,
      ...s
    } = t,
    c = s.account ? z(s.account) : e.account,
    l = B({ abi: n, args: i, functionName: a });
  try {
    let { data: u } = await T(
      e,
      Vl,
      `call`
    )({
      batch: !1,
      data: `${l}${o ? o.replace(`0x`, ``) : ``}`,
      to: r,
      ...s,
      account: c,
    });
    return {
      result: Ps({ abi: n, args: i, functionName: a, data: u || `0x` }),
      request: {
        abi: n.filter((e) => `name` in e && e.name === t.functionName),
        address: r,
        args: i,
        dataSuffix: o,
        functionName: a,
        ...s,
        account: c,
      },
    };
  } catch (e) {
    throw Ma(e, {
      abi: n,
      address: r,
      args: i,
      docsPath: `/docs/contract/simulateContract`,
      functionName: a,
      sender: c?.address,
    });
  }
}
var $l = new Map(),
  eu = new Map(),
  tu = 0;
function nu(e, t, n) {
  let r = ++tu,
    i = () => $l.get(e) || [],
    a = () => {
      let t = i().filter((e) => e.id !== r);
      if (t.length === 0) {
        $l.delete(e), eu.delete(e);
        return;
      }
      $l.set(e, t);
    },
    o = () => {
      let t = i();
      if (!t.some((e) => e.id === r)) return;
      let n = eu.get(e);
      if (t.length === 1 && n) {
        let e = n();
        e instanceof Promise && e.catch(() => {});
      }
      a();
    },
    s = i();
  if (($l.set(e, [...s, { id: r, fns: t }]), s && s.length > 0)) return o;
  let c = {};
  for (let e in t)
    c[e] = (...t) => {
      let n = i();
      if (n.length !== 0) for (let r of n) r.fns[e]?.(...t);
    };
  let l = n(c);
  return typeof l == `function` && eu.set(e, l), o;
}
async function ru(e, { signal: t } = {}) {
  return new Promise((n, r) => {
    if (t?.aborted) {
      r(Wi(t));
      return;
    }
    let i = () => t?.removeEventListener(`abort`, o),
      a = setTimeout(() => {
        i(), n();
      }, e),
      o = () => {
        clearTimeout(a), i(), r(Wi(t));
      };
    t?.addEventListener(`abort`, o, { once: !0 });
  });
}
function iu(e, { emitOnBegin: t, initialWaitTime: n, interval: r }) {
  let i = !0,
    a = () => (i = !1);
  return (
    (async () => {
      let o;
      t && (o = await e({ unpoll: a })), await ru((await n?.(o)) ?? r);
      let s = async () => {
        i && (await e({ unpoll: a }), await ru(r), s());
      };
      s();
    })(),
    a
  );
}
var au = new Map(),
  ou = new Map();
function su(e) {
  let t = (e, t) => ({
      clear: () => t.delete(e),
      get: () => t.get(e),
      set: (n) => t.set(e, n),
    }),
    n = t(e, au),
    r = t(e, ou);
  return {
    clear: () => {
      n.clear(), r.clear();
    },
    promise: n,
    response: r,
  };
}
async function cu(e, { cacheKey: t, cacheTime: n = 1 / 0 }) {
  let r = su(t),
    i = r.response.get();
  if (i && n > 0 && Date.now() - i.created.getTime() < n) return i.data;
  let a = r.promise.get();
  a || ((a = e()), r.promise.set(a));
  try {
    let e = await a;
    return r.response.set({ created: new Date(), data: e }), e;
  } finally {
    r.promise.clear();
  }
}
var lu = (e) => `blockNumber.${e}`;
async function uu(e, { cacheTime: t = e.cacheTime } = {}) {
  let n = await cu(() => e.request({ method: `eth_blockNumber` }), {
    cacheKey: lu(e.uid),
    cacheTime: t,
  });
  return BigInt(n);
}
async function du(e, { filter: t }) {
  let n = `strict` in t && t.strict,
    r = await t.request({ method: `eth_getFilterChanges`, params: [t.id] });
  if (typeof r[0] == `string`) return r;
  let i = r.map((e) => Ts(e));
  return !(`abi` in t) || !t.abi ? i : ks({ abi: t.abi, logs: i, strict: n });
}
async function fu(e, { filter: t }) {
  return t.request({ method: `eth_uninstallFilter`, params: [t.id] });
}
function pu(e, t) {
  let {
    abi: n,
    address: r,
    args: i,
    batch: a = !0,
    eventName: o,
    fromBlock: s,
    onError: c,
    onLogs: l,
    poll: u,
    pollingInterval: d = e.pollingInterval,
    strict: f,
  } = t;
  return (
    u === void 0
      ? typeof s == `bigint` ||
        (e.transport.type !== `webSocket` &&
          e.transport.type !== `ipc` &&
          (e.transport.type !== `fallback` ||
            (e.transport.transports[0].config.type !== `webSocket` &&
              e.transport.transports[0].config.type !== `ipc`)))
      : u
  )
    ? (() => {
        let t = f ?? !1;
        return nu(
          V([`watchContractEvent`, r, i, a, e.uid, o, d, t, s]),
          { onLogs: l, onError: c },
          (c) => {
            let l;
            s !== void 0 && (l = s - 1n);
            let u,
              f = !1,
              p = iu(
                async () => {
                  if (!f) {
                    try {
                      u = await T(
                        e,
                        Gr,
                        `createContractEventFilter`
                      )({
                        abi: n,
                        address: r,
                        args: i,
                        eventName: o,
                        strict: t,
                        fromBlock: s,
                      });
                    } catch {}
                    f = !0;
                    return;
                  }
                  try {
                    let s;
                    if (u)
                      s = await T(e, du, `getFilterChanges`)({ filter: u });
                    else {
                      let a = await T(e, uu, `getBlockNumber`)({});
                      (s =
                        l && l < a
                          ? await T(
                              e,
                              Ms,
                              `getContractEvents`
                            )({
                              abi: n,
                              address: r,
                              args: i,
                              eventName: o,
                              fromBlock: l + 1n,
                              toBlock: a,
                              strict: t,
                            })
                          : []),
                        (l = a);
                    }
                    if (s.length === 0) return;
                    if (a) c.onLogs(s);
                    else for (let e of s) c.onLogs([e]);
                  } catch (e) {
                    u && e instanceof la && (f = !1), c.onError?.(e);
                  }
                },
                { emitOnBegin: !0, interval: d }
              );
            return async () => {
              u && (await T(e, fu, `uninstallFilter`)({ filter: u })), p();
            };
          }
        );
      })()
    : (() => {
        let t = f ?? !1,
          s = V([`watchContractEvent`, r, i, a, e.uid, o, d, t]),
          u = !0,
          p = () => (u = !1);
        return nu(
          s,
          { onLogs: l, onError: c },
          (t) => (
            (async () => {
              try {
                let a = (() => {
                    if (e.transport.type === `fallback`) {
                      let t = e.transport.transports.find(
                        (e) =>
                          e.config.type === `webSocket` ||
                          e.config.type === `ipc`
                      );
                      return t ? t.value : e.transport;
                    }
                    return e.transport;
                  })(),
                  s = o ? Hr({ abi: n, eventName: o, args: i }) : [],
                  { unsubscribe: c } = await a.subscribe({
                    params: [`logs`, { address: r, topics: s }],
                    onData(e) {
                      if (!u) return;
                      let r = e.result;
                      try {
                        let { eventName: e, args: i } = Ds({
                            abi: n,
                            data: r.data,
                            topics: r.topics,
                            strict: f,
                          }),
                          a = Ts(r, { args: i, eventName: e });
                        t.onLogs([a]);
                      } catch (e) {
                        let n, i;
                        if (e instanceof vt || e instanceof yt) {
                          if (f) return;
                          (n = e.abiItem.name),
                            (i = e.abiItem.inputs?.some(
                              (e) => !(`name` in e && e.name)
                            ));
                        }
                        let a = Ts(r, { args: i ? [] : {}, eventName: n });
                        t.onLogs([a]);
                      }
                    },
                    onError(e) {
                      t.onError?.(e);
                    },
                  });
                (p = c), u || p();
              } catch (e) {
                c?.(e);
              }
            })(),
            () => p()
          )
        );
      })();
}
var mu = class extends D {
    constructor({ docsPath: e } = {}) {
      super(
        [
          `Could not find an Account to execute with this Action.`,
          "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
        ].join(`
`),
        { docsPath: e, docsSlug: `account`, name: `AccountNotFoundError` }
      );
    }
  },
  hu = class extends D {
    constructor({ docsPath: e, metaMessages: t, type: n }) {
      super(`Account type "${n}" is not supported.`, {
        docsPath: e,
        metaMessages: t,
        name: `AccountTypeNotSupportedError`,
      });
    }
  };
function gu({ chain: e, currentChainId: t }) {
  if (!e) throw new jl();
  if (t !== e.id) throw new Al({ chain: e, currentChainId: t });
}
async function _u(e, { serializedTransaction: t }) {
  return e.request(
    { method: `eth_sendRawTransaction`, params: [t] },
    { retryCount: 0 }
  );
}
var vu = new cr(128);
async function yu(e, t) {
  let {
    account: n = e.account,
    assertChainId: r = !0,
    chain: i = e.chain,
    accessList: a,
    authorizationList: o,
    blobs: s,
    data: c,
    dataSuffix: l = typeof e.dataSuffix == `string`
      ? e.dataSuffix
      : e.dataSuffix?.value,
    gas: u,
    gasPrice: d,
    maxFeePerBlobGas: f,
    maxFeePerGas: p,
    maxPriorityFeePerGas: m,
    nonce: h,
    type: g,
    value: _,
    ...v
  } = t;
  if (n === void 0)
    throw new mu({ docsPath: `/docs/actions/wallet/sendTransaction` });
  let y = n ? z(n) : null,
    b;
  try {
    ho(t);
    let n = await (async () => {
      if (t.to) return t.to;
      if (t.to !== null && o && o.length > 0)
        return await Ua({ authorization: o[0] }).catch(() => {
          throw new D(
            "`to` is required. Could not infer from `authorizationList`."
          );
        });
    })();
    if (y?.type === `json-rpc` || y === null) {
      let t;
      i !== null &&
        ((t = await T(e, gs, `getChainId`)({})),
        r && gu({ currentChainId: t, chain: i }));
      let b = e.chain?.formatters?.transactionRequest?.format,
        x = (b || co)(
          {
            ...ao(v, { format: b }),
            accessList: a,
            account: y,
            authorizationList: o,
            blobs: s,
            chainId: t,
            data: l ? mr([c ?? `0x`, l]) : c,
            gas: u,
            gasPrice: d,
            maxFeePerBlobGas: f,
            maxFeePerGas: p,
            maxPriorityFeePerGas: m,
            nonce: h,
            to: n,
            type: g,
            value: _,
          },
          `sendTransaction`
        ),
        S = vu.get(e.uid),
        C = S ? `wallet_sendTransaction` : `eth_sendTransaction`;
      try {
        return await e.request({ method: C, params: [x] }, { retryCount: 0 });
      } catch (t) {
        if (S === !1) throw t;
        let n = t;
        if (
          n.name === `InvalidInputRpcError` ||
          n.name === `InvalidParamsRpcError` ||
          n.name === `MethodNotFoundRpcError` ||
          n.name === `MethodNotSupportedRpcError`
        )
          return await e
            .request(
              { method: `wallet_sendTransaction`, params: [x] },
              { retryCount: 0 }
            )
            .then((t) => (vu.set(e.uid, !0), t))
            .catch((t) => {
              let r = t;
              throw r.name === `MethodNotFoundRpcError` ||
                r.name === `MethodNotSupportedRpcError`
                ? (vu.set(e.uid, !1), n)
                : r;
            });
        throw n;
      }
    }
    if (y?.type === `local`) {
      let t = (() => {
          if (!y.nonceManager || h !== void 0) return y.nonceManager;
          let e = y.nonceManager;
          return {
            consume(t) {
              return (
                (b = { address: t.address, chainId: t.chainId }), e.consume(t)
              );
            },
            get(t) {
              return e.get(t);
            },
            increment(t) {
              return e.increment(t);
            },
            reset(t) {
              return e.reset(t);
            },
          };
        })(),
        r = await T(
          e,
          xs,
          `prepareTransactionRequest`
        )({
          account: y,
          accessList: a,
          authorizationList: o,
          blobs: s,
          chain: i,
          data: l ? mr([c ?? `0x`, l]) : c,
          gas: u,
          gasPrice: d,
          maxFeePerBlobGas: f,
          maxFeePerGas: p,
          maxPriorityFeePerGas: m,
          nonce: h,
          nonceManager: t,
          parameters: [...vs, `sidecars`],
          type: g,
          value: _,
          ...v,
          to: n,
        }),
        x = i?.serializers?.transaction,
        S = await y.signTransaction(r, { serializer: x }),
        C = (i ?? e.chain)?.serializers?.transactionEnvelope,
        w = C ? await C({ serializedTransaction: S, transaction: r }) : S;
      return await T(e, _u, `sendRawTransaction`)({ serializedTransaction: w });
    }
    throw y?.type === `smart`
      ? new hu({
          metaMessages: [
            "Consider using the `sendUserOperation` Action instead.",
          ],
          docsPath: `/docs/actions/bundler/sendUserOperation`,
          type: `smart`,
        })
      : new hu({
          docsPath: `/docs/actions/wallet/sendTransaction`,
          type: y?.type,
        });
  } catch (e) {
    throw e instanceof hu
      ? e
      : (b && y?.nonceManager?.reset(b),
        hs(e, { ...t, account: y, chain: t.chain || void 0 }));
  }
}
async function bu(e, t) {
  return bu.internal(e, yu, `sendTransaction`, t);
}
(function (e) {
  async function t(e, t, n, r) {
    let {
      abi: i,
      account: a = e.account,
      address: o,
      args: s,
      functionName: c,
      ...l
    } = r;
    if (a === void 0)
      throw new mu({ docsPath: `/docs/contract/writeContract` });
    let u = a ? z(a) : null,
      d = B({ abi: i, args: s, functionName: c });
    try {
      return await T(e, t, n)({ data: d, to: o, account: u, ...l });
    } catch (e) {
      throw Ma(e, {
        abi: i,
        address: o,
        args: s,
        docsPath: `/docs/contract/writeContract`,
        functionName: c,
        sender: u?.address,
      });
    }
  }
  e.internal = t;
})((bu ||= {}));
var xu = class extends D {
  constructor(e) {
    super(`Call bundle failed with status: ${e.statusCode}`, {
      name: `BundleFailedError`,
    }),
      Object.defineProperty(this, "result", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.result = e);
  }
};
function Su(
  e,
  {
    delay: t = 100,
    retryCount: n = 2,
    shouldRetry: r = () => !0,
    signal: i,
  } = {}
) {
  return new Promise((a, o) => {
    let s = async ({ count: c = 0 } = {}) => {
      if (i?.aborted) {
        o(Wi(i));
        return;
      }
      let l = async ({ error: e }) => {
        let n = typeof t == `function` ? t({ count: c, error: e }) : t;
        if (n)
          try {
            await ru(n, { signal: i });
          } catch (e) {
            o(e);
            return;
          }
        return s({ count: c + 1 });
      };
      try {
        a(await e());
      } catch (e) {
        if (i?.aborted) {
          o(Wi(i));
          return;
        }
        if (Gi(e)) {
          o(e);
          return;
        }
        if (c < n && (await r({ count: c, error: e }))) return l({ error: e });
        o(e);
      }
    };
    s().catch(o);
  });
}
var Cu = { "0x0": `reverted`, "0x1": `success` };
function wu(e, t) {
  let n = {
    ...e,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    contractAddress: e.contractAddress ? e.contractAddress : null,
    cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
    effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
    logs: e.logs ? e.logs.map((e) => Ts(e)) : null,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? A(e.transactionIndex) : null,
    status: e.status ? Cu[e.status] : null,
    type: e.type ? bo[e.type] || e.type : null,
  };
  return (
    e.blobGasPrice && (n.blobGasPrice = BigInt(e.blobGasPrice)),
    e.blobGasUsed && (n.blobGasUsed = BigInt(e.blobGasUsed)),
    n
  );
}
var Tu = oo(`transactionReceipt`, wu),
  Eu = `0x5792579257925792579257925792579257925792579257925792579257925792`,
  Du = N(0, { size: 32 });
async function Ou(e, t) {
  let {
      account: n = e.account,
      chain: r = e.chain,
      experimental_fallback: i,
      experimental_fallbackDelay: a = 32,
      forceAtomic: o = !1,
      id: s,
      version: c = `2.0.0`,
    } = t,
    l = n ? z(n) : null,
    u = t.capabilities;
  e.dataSuffix &&
    !t.capabilities?.dataSuffix &&
    (u =
      typeof e.dataSuffix == `string`
        ? {
            ...t.capabilities,
            dataSuffix: { value: e.dataSuffix, optional: !0 },
          }
        : {
            ...t.capabilities,
            dataSuffix: {
              value: e.dataSuffix.value,
              ...(e.dataSuffix.required ? {} : { optional: !0 }),
            },
          });
  let d = t.calls.map((e) => {
    let t = e,
      n = t.abi
        ? B({ abi: t.abi, functionName: t.functionName, args: t.args })
        : t.data;
    return {
      data: t.dataSuffix && n ? mr([n, t.dataSuffix]) : n,
      to: t.to,
      value: t.value ? N(t.value) : void 0,
    };
  });
  try {
    let t = await e.request(
      {
        method: `wallet_sendCalls`,
        params: [
          {
            atomicRequired: o,
            calls: d,
            capabilities: u,
            chainId: N(r.id),
            from: l?.address,
            id: s,
            version: c,
          },
        ],
      },
      { retryCount: 0 }
    );
    return typeof t == `string` ? { id: t } : t;
  } catch (n) {
    let s = n;
    if (
      i &&
      (s.name === `MethodNotFoundRpcError` ||
        s.name === `MethodNotSupportedRpcError` ||
        s.name === `UnknownRpcError` ||
        s.details.toLowerCase().includes(`does not exist / is not available`) ||
        s.details.toLowerCase().includes(`missing or invalid. request()`) ||
        s.details
          .toLowerCase()
          .includes(`did not match any variant of untagged enum`) ||
        s.details
          .toLowerCase()
          .includes(`account upgraded to unsupported contract`) ||
        s.details.toLowerCase().includes(`eip-7702 not supported`) ||
        s.details.toLowerCase().includes(`unsupported wc_ method`) ||
        s.details.toLowerCase().includes(`feature toggled misconfigured`) ||
        s.details
          .toLowerCase()
          .includes(
            `jsonrpcengine: response has no error or result for request`
          ))
    ) {
      if (u && Object.values(u).some((e) => !e.optional)) {
        let e =
          "non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.";
        throw new Sa(new D(e, { details: e }));
      }
      if (o && d.length > 1) {
        let e =
          "`forceAtomic` is not supported on fallback to `eth_sendTransaction`.";
        throw new Oa(new D(e, { details: e }));
      }
      let t = [];
      for (let n of d) {
        try {
          let i = await yu(e, {
            account: l,
            chain: r,
            data: n.data,
            to: n.to,
            value: n.value ? k(n.value) : void 0,
          });
          t.push({ status: `fulfilled`, value: i });
        } catch (e) {
          t.push({ reason: e, status: `rejected` });
        }
        a > 0 && (await new Promise((e) => setTimeout(e, a)));
      }
      if (t.every((e) => e.status === `rejected`)) throw t[0].reason;
      return {
        id: mr([
          ...t.map((e) => (e.status === `fulfilled` ? e.value : Du)),
          N(r.id, { size: 32 }),
          Eu,
        ]),
      };
    }
    throw hs(n, { ...t, account: l, chain: t.chain });
  }
}
async function ku(e, t) {
  async function n(t) {
    if (
      t.endsWith(
        `5792579257925792579257925792579257925792579257925792579257925792`
      )
    ) {
      let n = O(br(t, -64, -32)),
        r = br(t, 0, -64)
          .slice(2)
          .match(/.{1,64}/g),
        i = await Promise.all(
          r.map((t) =>
            Du.slice(2) === t
              ? void 0
              : e.request(
                  { method: `eth_getTransactionReceipt`, params: [`0x${t}`] },
                  { dedupe: !0 }
                )
          )
        ),
        a = i.some((e) => e === null)
          ? 100
          : i.every((e) => e?.status === `0x1`)
          ? 200
          : i.every((e) => e?.status === `0x0`)
          ? 500
          : 600;
      return {
        atomic: !1,
        chainId: A(n),
        receipts: i.filter(Boolean),
        status: a,
        version: `2.0.0`,
      };
    }
    return e.request({ method: `wallet_getCallsStatus`, params: [t] });
  }
  let {
      atomic: r = !1,
      chainId: i,
      receipts: a,
      version: o = `2.0.0`,
      ...s
    } = await n(t.id),
    [c, l] = (() => {
      let e = s.status;
      return e >= 100 && e < 200
        ? [`pending`, e]
        : e >= 200 && e < 300
        ? [`success`, e]
        : e >= 300 && e < 700
        ? [`failure`, e]
        : e === `CONFIRMED`
        ? [`success`, 200]
        : e === `PENDING`
        ? [`pending`, 100]
        : [void 0, e];
    })();
  return {
    ...s,
    atomic: r,
    chainId: i ? A(i) : void 0,
    receipts:
      a?.map((e) => ({
        ...e,
        blockNumber: k(e.blockNumber),
        gasUsed: k(e.gasUsed),
        status: Cu[e.status],
      })) ?? [],
    statusCode: l,
    status: c,
    version: o,
  };
}
async function Au(e, t) {
  let {
      id: n,
      pollingInterval: r = e.pollingInterval,
      status: i = ({ statusCode: e }) => e === 200 || e >= 300,
      retryCount: a = 4,
      retryDelay: o = ({ count: e }) => ~~(1 << e) * 200,
      timeout: s = 6e4,
      throwOnFailure: c = !1,
    } = t,
    l = V([`waitForCallsStatus`, e.uid, n]),
    { promise: u, resolve: d, reject: f } = Rl(),
    p,
    m = nu(l, { resolve: d, reject: f }, (t) => {
      let s = iu(
        async () => {
          let r = (e) => {
            clearTimeout(p), s(), e(), m();
          };
          try {
            let s = await Su(
              async () => {
                let t = await T(e, ku, `getCallsStatus`)({ id: n });
                if (c && t.status === `failure`) throw new xu(t);
                return t;
              },
              { retryCount: a, delay: o }
            );
            if (!i(s)) return;
            r(() => t.resolve(s));
          } catch (e) {
            r(() => t.reject(e));
          }
        },
        { interval: r, emitOnBegin: !0 }
      );
      return s;
    });
  return (
    (p = s
      ? setTimeout(() => {
          m(), clearTimeout(p), f(new ju({ id: n }));
        }, s)
      : void 0),
    await u
  );
}
var ju = class extends D {
    constructor({ id: e }) {
      super(
        `Timed out while waiting for call bundle with id "${e}" to be confirmed.`,
        { name: `WaitForCallsStatusTimeoutError` }
      );
    }
  },
  Mu = 256,
  Nu = Mu,
  Pu;
function Fu(e = 11) {
  if (!Pu || Nu + e > Mu * 2) {
    (Pu = ``), (Nu = 0);
    for (let e = 0; e < Mu; e++)
      Pu += ((256 + Math.random() * 256) | 0).toString(16).substring(1);
  }
  return Pu.substring(Nu, Nu++ + e);
}
function Iu(e) {
  let {
      batch: t,
      chain: n,
      ccipRead: r,
      dataSuffix: i,
      key: a = `base`,
      name: o = `Base Client`,
      tokens: s,
      type: c = `base`,
    } = e,
    l =
      e.experimental_blockTag ??
      (typeof n?.experimental_preconfirmationTime == `number`
        ? `pending`
        : void 0),
    u = n?.blockTime ?? 12e3,
    d = Math.min(Math.max(Math.floor(u / 2), 500), 4e3),
    f = e.pollingInterval ?? d,
    p = e.cacheTime ?? f,
    m = e.account ? z(e.account) : void 0,
    {
      config: h,
      request: g,
      value: _,
    } = e.transport({ account: m, chain: n, pollingInterval: f }),
    v = {
      account: m,
      batch: t,
      cacheTime: p,
      ccipRead: r,
      chain: n,
      dataSuffix: i,
      key: a,
      name: o,
      pollingInterval: f,
      request: g,
      tokens: s,
      transport: { ...h, ..._ },
      type: c,
      uid: Fu(),
      ...(l ? { experimental_blockTag: l } : {}),
    };
  function y(e) {
    return (t) => {
      let n = t(e);
      for (let e in v) delete n[e];
      let r = { ...e, ...n };
      for (let t in n) {
        let i = e[t],
          a = n[t];
        Lu(i) && Lu(a) && (r[t] = { ...i, ...a });
      }
      return Object.assign(r, { extend: y(r) });
    };
  }
  return Object.assign(v, { extend: y(v) });
}
function Lu(e) {
  if (typeof e != `object` || !e) return !1;
  let t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null;
}
function Ru(e, t) {
  let n = (n = {}) => t(e, n);
  for (let r of [
    `call`,
    `calls`,
    `callWithPeriod`,
    `estimateGas`,
    `prepare`,
    `prepareRecipient`,
    `predict`,
    `simulate`,
  ])
    if (Object.hasOwn(t, r)) {
      let i = t[r];
      n[r] = (t = {}) => (i.length === 1 ? i(t) : i(e, t));
    }
  for (let e of [`extractEvent`, `extractEvents`])
    Object.hasOwn(t, e) && (n[e] = t[e]);
  return n;
}
function zu(e) {
  if (!(e instanceof D)) return !1;
  let t = e.walk((e) => e instanceof Yi);
  return t instanceof Yi
    ? t.data?.errorName === `HttpError` ||
        t.data?.errorName === `ResolverError` ||
        t.data?.errorName === `ResolverNotContract` ||
        t.data?.errorName === `ResolverNotFound` ||
        t.data?.errorName === `ReverseAddressMismatch` ||
        t.data?.errorName === `UnsupportedResolverProfile`
    : !1;
}
function Bu(e) {
  let { abi: t, data: n } = e,
    r = gr(n, 0, 4),
    i = t.find((e) => e.type === `function` && r === Lr(qe(e)));
  if (!i) throw new ht(r, { docsPath: `/docs/contract/decodeFunctionData` });
  return {
    functionName: i.name,
    args:
      `inputs` in i && i.inputs && i.inputs.length > 0
        ? oi(i.inputs, gr(n, 4))
        : void 0,
  };
}
var Vu = `/docs/contract/encodeErrorResult`;
function Hu(e) {
  let { abi: t, errorName: n, args: r } = e,
    i = t[0];
  if (n) {
    let e = Rr({ abi: t, args: r, name: n });
    if (!e) throw new ct(n, { docsPath: Vu });
    i = e;
  }
  if (i.type !== `error`) throw new ct(void 0, { docsPath: Vu });
  let a = Lr(qe(i)),
    o = `0x`;
  if (r && r.length > 0) {
    if (!i.inputs) throw new st(i.name, { docsPath: Vu });
    o = wr(i.inputs, r);
  }
  return R([a, o]);
}
var Uu = `/docs/contract/encodeFunctionResult`;
function Wu(e) {
  let { abi: t, functionName: n, result: r } = e,
    i = t[0];
  if (n) {
    let e = Rr({ abi: t, name: n });
    if (!e) throw new pt(n, { docsPath: Uu });
    i = e;
  }
  if (i.type !== `function`) throw new pt(void 0, { docsPath: Uu });
  if (!i.outputs) throw new mt(i.name, { docsPath: Uu });
  let a = (() => {
    if (i.outputs.length === 0) return [];
    if (i.outputs.length === 1) return [r];
    if (Array.isArray(r)) return r;
    throw new St(r);
  })();
  return wr(i.outputs, a);
}
async function Gu(e) {
  let { data: t, ccipRequest: n } = e,
    {
      args: [r],
    } = Bu({ abi: gl, data: t }),
    i = [],
    a = [];
  return (
    await Promise.all(
      r.map(async (e, t) => {
        try {
          (a[t] = e.urls.includes(`x-batch-gateway:true`)
            ? await Gu({ data: e.data, ccipRequest: n })
            : await n(e)),
            (i[t] = !1);
        } catch (e) {
          (i[t] = !0), (a[t] = Ku(e));
        }
      })
    ),
    Wu({ abi: gl, functionName: `query`, result: [i, a] })
  );
}
function Ku(e) {
  return e.name === `HttpRequestError` && e.status
    ? Hu({ abi: gl, errorName: `HttpError`, args: [e.status, e.shortMessage] })
    : Hu({
        abi: [Yr],
        errorName: `Error`,
        args: [`shortMessage` in e ? e.shortMessage : e.message],
      });
}
function qu(e) {
  if (e.length !== 66 || e.indexOf(`[`) !== 0 || e.indexOf(`]`) !== 65)
    return null;
  let t = `0x${e.slice(1, 65)}`;
  return Xe(t) ? t : null;
}
function Ju(e) {
  let t = new Uint8Array(32).fill(0);
  if (!e) return M(t);
  let n = e.split(`.`);
  for (let e = n.length - 1; e >= 0; --e) {
    let r = qu(n[e]),
      i = r ? Wt(r) : F(Yt(n[e]), `bytes`);
    t = F(mr([t, i]), `bytes`);
  }
  return M(t);
}
function Yu(e) {
  return `[${e.slice(2)}]`;
}
function Xu(e) {
  let t = new Uint8Array(32).fill(0);
  return e ? qu(e) || F(Yt(e)) : M(t);
}
function Zu(e) {
  let t = e.replace(/^\.|\.$/gm, ``);
  if (t.length === 0) return new Uint8Array(1);
  let n = new Uint8Array(Yt(t).byteLength + 2),
    r = 0,
    i = t.split(`.`);
  for (let e = 0; e < i.length; e++) {
    let t = Yt(i[e]);
    t.byteLength > 255 && (t = Yt(Yu(Xu(i[e])))),
      (n[r] = t.length),
      n.set(t, r + 1),
      (r += t.length + 1);
  }
  return n.byteLength === r + 1 ? n : n.slice(0, r + 1);
}
async function Qu(e, t) {
  let {
      blockNumber: n,
      blockTag: r,
      coinType: i,
      name: a,
      gatewayUrls: o,
      strict: s,
    } = t,
    { chain: c } = e,
    l = (() => {
      if (t.universalResolverAddress) return t.universalResolverAddress;
      if (!c)
        throw Error(
          `client chain not configured. universalResolverAddress is required.`
        );
      return Il({ blockNumber: n, chain: c, contract: `ensUniversalResolver` });
    })(),
    u = c?.ensTlds;
  if (u && !u.some((e) => a.endsWith(e))) return null;
  let d = i == null ? [Ju(a)] : [Ju(a), BigInt(i)];
  try {
    let t = B({ abi: xl, functionName: `addr`, args: d }),
      s = {
        address: l,
        abi: vl,
        functionName: `resolveWithGateways`,
        args: [j(Zu(a)), t, o ?? [`x-batch-gateway:true`]],
        blockNumber: n,
        blockTag: r,
      },
      c = await T(e, Y, `readContract`)(s);
    if (c[0] === `0x`) return null;
    let u = $u({ coinType: i, data: c[0], args: d });
    return u === `0x` || O(u) === `0x00` ? null : u;
  } catch (e) {
    if (s) throw e;
    if (zu(e)) return null;
    throw e;
  }
}
function $u({ coinType: e, data: t, args: n }) {
  try {
    return Ps({ abi: xl, args: n, functionName: `addr`, data: t });
  } catch (n) {
    if (e == null) throw n;
    let r = O(t);
    if (E(r) === 20) return dr(r);
    throw n;
  }
}
var ed = class extends D {
    constructor({ data: e }) {
      super(
        `Unable to extract image from metadata. The metadata may be malformed or invalid.`,
        {
          metaMessages: [
            "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
            ``,
            `Provided data: ${JSON.stringify(e)}`,
          ],
          name: `EnsAvatarInvalidMetadataError`,
        }
      );
    }
  },
  td = class extends D {
    constructor({ reason: e }) {
      super(`ENS NFT avatar URI is invalid. ${e}`, {
        name: `EnsAvatarInvalidNftUriError`,
      });
    }
  },
  nd = class extends D {
    constructor({ uri: e }) {
      super(
        `Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,
        { name: `EnsAvatarUriResolutionError` }
      );
    }
  },
  rd = class extends D {
    constructor({ namespace: e }) {
      super(
        `ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,
        { name: `EnsAvatarUnsupportedNamespaceError` }
      );
    }
  },
  id =
    /(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
  ad =
    /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
  od = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
  sd = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function cd(e) {
  try {
    let t = await fetch(e, { method: `HEAD` });
    return (
      t.status === 200 && t.headers.get(`content-type`)?.startsWith(`image/`)
    );
  } catch (t) {
    return (typeof t == `object` && t.response !== void 0) ||
      !Object.hasOwn(globalThis, `Image`)
      ? !1
      : new Promise((t) => {
          let n = new Image();
          (n.onload = () => {
            t(!0);
          }),
            (n.onerror = () => {
              t(!1);
            }),
            (n.src = e);
        });
  }
}
function ld(e, t) {
  return e ? (e.endsWith(`/`) ? e.slice(0, -1) : e) : t;
}
function ud({ uri: e, gatewayUrls: t }) {
  let n = od.test(e);
  if (n) return { uri: e, isOnChain: !0, isEncoded: n };
  let r = ld(t?.ipfs, `https://ipfs.io`),
    i = ld(t?.arweave, `https://arweave.net`),
    {
      protocol: a,
      subpath: o,
      target: s,
      subtarget: c = ``,
    } = e.match(id)?.groups || {},
    l = a === `ipns:/` || o === `ipns/`,
    u = a === `ipfs:/` || o === `ipfs/` || ad.test(e);
  if (e.startsWith(`http`) && !l && !u) {
    let n = e;
    return (
      t?.arweave && (n = e.replace(/https:\/\/arweave.net/g, t?.arweave)),
      { uri: n, isOnChain: !1, isEncoded: !1 }
    );
  }
  if ((l || u) && s)
    return {
      uri: `${r}/${l ? `ipns` : `ipfs`}/${s}${c}`,
      isOnChain: !1,
      isEncoded: !1,
    };
  if (a === `ar:/` && s)
    return { uri: `${i}/${s}${c || ``}`, isOnChain: !1, isEncoded: !1 };
  let d = e.replace(sd, ``);
  if (
    (d.startsWith(`<svg`) && (d = `data:image/svg+xml;base64,${btoa(d)}`),
    d.startsWith(`data:`) || d.startsWith(`{`))
  )
    return { uri: d, isOnChain: !0, isEncoded: !1 };
  throw new nd({ uri: e });
}
function dd(e) {
  if (
    typeof e != `object` ||
    (!(`image` in e) && !(`image_url` in e) && !(`image_data` in e))
  )
    throw new ed({ data: e });
  return e.image || e.image_url || e.image_data;
}
async function fd({ gatewayUrls: e, uri: t }) {
  try {
    return await pd({
      gatewayUrls: e,
      uri: dd(await fetch(t).then((e) => e.json())),
    });
  } catch {
    throw new nd({ uri: t });
  }
}
async function pd({ gatewayUrls: e, uri: t }) {
  let { uri: n, isOnChain: r } = ud({ uri: t, gatewayUrls: e });
  if (r || (await cd(n))) return n;
  throw new nd({ uri: t });
}
function md(e) {
  let t = e;
  t.startsWith(`did:nft:`) &&
    (t = t.replace(`did:nft:`, ``).replace(/_/g, `/`));
  let [n, r, i] = t.split(`/`),
    [a, o] = n.split(`:`),
    [s, c] = r.split(`:`);
  if (!a || a.toLowerCase() !== `eip155`)
    throw new td({ reason: `Only EIP-155 supported` });
  if (!o) throw new td({ reason: `Chain ID not found` });
  if (!c) throw new td({ reason: `Contract address not found` });
  if (!i) throw new td({ reason: `Token ID not found` });
  if (!s) throw new td({ reason: `ERC namespace not found` });
  return {
    chainID: Number.parseInt(o, 10),
    namespace: s.toLowerCase(),
    contractAddress: c,
    tokenID: i,
  };
}
async function hd(e, { nft: t }) {
  if (t.namespace === `erc721`)
    return Y(e, {
      address: t.contractAddress,
      abi: [
        {
          name: `tokenURI`,
          type: `function`,
          stateMutability: `view`,
          inputs: [{ name: `tokenId`, type: `uint256` }],
          outputs: [{ name: ``, type: `string` }],
        },
      ],
      functionName: `tokenURI`,
      args: [BigInt(t.tokenID)],
    });
  if (t.namespace === `erc1155`)
    return Y(e, {
      address: t.contractAddress,
      abi: [
        {
          name: `uri`,
          type: `function`,
          stateMutability: `view`,
          inputs: [{ name: `_id`, type: `uint256` }],
          outputs: [{ name: ``, type: `string` }],
        },
      ],
      functionName: `uri`,
      args: [BigInt(t.tokenID)],
    });
  throw new rd({ namespace: t.namespace });
}
async function gd(e, { gatewayUrls: t, record: n }) {
  return /eip155:/i.test(n)
    ? _d(e, { gatewayUrls: t, record: n })
    : pd({ uri: n, gatewayUrls: t });
}
async function _d(e, { gatewayUrls: t, record: n }) {
  let r = md(n),
    {
      uri: i,
      isOnChain: a,
      isEncoded: o,
    } = ud({ uri: await hd(e, { nft: r }), gatewayUrls: t });
  if (a && (i.includes(`data:application/json;base64,`) || i.startsWith(`{`))) {
    let e = o ? atob(i.replace(`data:application/json;base64,`, ``)) : i;
    return pd({ uri: dd(JSON.parse(e)), gatewayUrls: t });
  }
  let s = r.tokenID;
  return (
    r.namespace === `erc1155` && (s = s.replace(`0x`, ``).padStart(64, `0`)),
    fd({ gatewayUrls: t, uri: i.replace(/(?:0x)?{id}/, s) })
  );
}
async function vd(e, t) {
  let {
      blockNumber: n,
      blockTag: r,
      key: i,
      name: a,
      gatewayUrls: o,
      strict: s,
    } = t,
    { chain: c } = e,
    l = (() => {
      if (t.universalResolverAddress) return t.universalResolverAddress;
      if (!c)
        throw Error(
          `client chain not configured. universalResolverAddress is required.`
        );
      return Il({ blockNumber: n, chain: c, contract: `ensUniversalResolver` });
    })(),
    u = c?.ensTlds;
  if (u && !u.some((e) => a.endsWith(e))) return null;
  try {
    let t = {
        address: l,
        abi: vl,
        args: [
          j(Zu(a)),
          B({ abi: bl, functionName: `text`, args: [Ju(a), i] }),
          o ?? [`x-batch-gateway:true`],
        ],
        functionName: `resolveWithGateways`,
        blockNumber: n,
        blockTag: r,
      },
      s = await T(e, Y, `readContract`)(t);
    if (s[0] === `0x`) return null;
    let c = Ps({ abi: bl, functionName: `text`, data: s[0] });
    return c === `` ? null : c;
  } catch (e) {
    if (s) throw e;
    if (zu(e)) return null;
    throw e;
  }
}
async function yd(
  e,
  {
    blockNumber: t,
    blockTag: n,
    assetGatewayUrls: r,
    name: i,
    gatewayUrls: a,
    strict: o,
    universalResolverAddress: s,
  }
) {
  let c = await T(
    e,
    vd,
    `getEnsText`
  )({
    blockNumber: t,
    blockTag: n,
    key: `avatar`,
    name: i,
    universalResolverAddress: s,
    gatewayUrls: a,
    strict: o,
  });
  if (!c) return null;
  try {
    return await gd(e, { record: c, gatewayUrls: r });
  } catch {
    return null;
  }
}
async function bd(e, t) {
  let {
      address: n,
      blockNumber: r,
      blockTag: i,
      coinType: a = 60n,
      gatewayUrls: o,
      strict: s,
    } = t,
    { chain: c } = e,
    l = (() => {
      if (t.universalResolverAddress) return t.universalResolverAddress;
      if (!c)
        throw Error(
          `client chain not configured. universalResolverAddress is required.`
        );
      return Il({ blockNumber: r, chain: c, contract: `ensUniversalResolver` });
    })();
  try {
    let t = {
        address: l,
        abi: yl,
        args: [n, a, o ?? [`x-batch-gateway:true`]],
        functionName: `reverseWithGateways`,
        blockNumber: r,
        blockTag: i,
      },
      [s] = await T(e, Y, `readContract`)(t);
    return s || null;
  } catch (e) {
    if (s) throw e;
    if (zu(e)) return null;
    throw e;
  }
}
async function xd(e, t) {
  let { blockNumber: n, blockTag: r, name: i } = t,
    { chain: a } = e,
    o = (() => {
      if (t.universalResolverAddress) return t.universalResolverAddress;
      if (!a)
        throw Error(
          `client chain not configured. universalResolverAddress is required.`
        );
      return Il({ blockNumber: n, chain: a, contract: `ensUniversalResolver` });
    })(),
    s = a?.ensTlds;
  if (s && !s.some((e) => i.endsWith(e)))
    throw Error(
      `${i} is not a valid ENS TLD (${s?.join(`, `)}) for chain "${
        a.name
      }" (id: ${a.id}).`
    );
  let [c] = await T(
    e,
    Y,
    `readContract`
  )({
    address: o,
    abi: [
      {
        inputs: [{ type: `bytes` }],
        name: `findResolver`,
        outputs: [
          { type: `address` },
          { type: `bytes32` },
          { type: `uint256` },
        ],
        stateMutability: `view`,
        type: `function`,
      },
    ],
    functionName: `findResolver`,
    args: [j(Zu(i))],
    blockNumber: n,
    blockTag: r,
  });
  return c;
}
async function Sd(e, t) {
  let {
      account: n = e.account,
      blockNumber: r,
      blockTag: i = `latest`,
      blobs: a,
      data: o,
      gas: s,
      gasPrice: c,
      maxFeePerBlobGas: l,
      maxFeePerGas: u,
      maxPriorityFeePerGas: d,
      to: f,
      value: p,
      ...m
    } = t,
    h = n ? z(n) : void 0;
  try {
    ho(t);
    let n = (typeof r == `bigint` ? N(r) : void 0) || i,
      g = e.chain?.formatters?.transactionRequest?.format,
      _ = (g || co)(
        {
          ...ao(m, { format: g }),
          account: h,
          blobs: a,
          data: o,
          gas: s,
          gasPrice: c,
          maxFeePerBlobGas: l,
          maxFeePerGas: u,
          maxPriorityFeePerGas: d,
          to: f,
          value: p,
        },
        `createAccessList`
      ),
      v = await e.request({ method: `eth_createAccessList`, params: [_, n] });
    if (v.error) throw new D(v.error, { details: v.error });
    return { accessList: v.accessList, gasUsed: BigInt(v.gasUsed) };
  } catch (n) {
    throw Ll(n, { ...t, account: h, chain: e.chain });
  }
}
async function Cd(e) {
  let t = Wr(e, { method: `eth_newBlockFilter` }),
    n = await e.request({ method: `eth_newBlockFilter` });
  return { id: n, request: t(n), type: `block` };
}
async function wd(
  e,
  {
    address: t,
    args: n,
    event: r,
    events: i,
    fromBlock: a,
    strict: o,
    toBlock: s,
  } = {}
) {
  let c = i ?? (r ? [r] : void 0),
    l = Wr(e, { method: `eth_newFilter` }),
    u = [];
  c &&
    ((u = [c.flatMap((e) => Hr({ abi: [e], eventName: e.name, args: n }))]),
    r && (u = u[0]));
  let d = await e.request({
    method: `eth_newFilter`,
    params: [
      {
        address: t,
        fromBlock: typeof a == `bigint` ? N(a) : a,
        toBlock: typeof s == `bigint` ? N(s) : s,
        ...(u.length ? { topics: u } : {}),
      },
    ],
  });
  return {
    abi: c,
    args: n,
    eventName: r ? r.name : void 0,
    fromBlock: a,
    id: d,
    request: l(d),
    strict: !!o,
    toBlock: s,
    type: `event`,
  };
}
async function Td(e) {
  let t = Wr(e, { method: `eth_newPendingTransactionFilter` }),
    n = await e.request({ method: `eth_newPendingTransactionFilter` });
  return { id: n, request: t(n), type: `transaction` };
}
async function Ed(
  e,
  {
    address: t,
    blockHash: n,
    blockNumber: r,
    blockTag: i = e.experimental_blockTag ?? `latest`,
    requireCanonical: a,
  }
) {
  let o = Mo({
    blockHash: n,
    blockNumber: r,
    blockTag: i,
    requireCanonical: a,
  });
  if (e.batch?.multicall && e.chain?.contracts?.multicall3) {
    let o = e.chain.contracts.multicall3.address,
      s = B({ abi: hl, functionName: `getEthBalance`, args: [t] }),
      { data: c } = await T(
        e,
        Vl,
        `call`
      )({
        to: o,
        data: s,
        blockHash: n,
        blockNumber: r,
        blockTag: i,
        requireCanonical: a,
      });
    return Ps({
      abi: hl,
      functionName: `getEthBalance`,
      args: [t],
      data: c || `0x`,
    });
  }
  let s = await e.request({ method: `eth_getBalance`, params: [t, o] });
  return BigInt(s);
}
async function Dd(e) {
  let t = await e.request({ method: `eth_blobBaseFee` });
  return BigInt(t);
}
async function Od(
  e,
  {
    blockHash: t,
    blockNumber: n,
    blockTag: r = e.experimental_blockTag ?? `latest`,
  } = {}
) {
  let i = n === void 0 ? void 0 : N(n),
    a = await e.request(
      { method: `eth_getBlockReceipts`, params: [t || i || r] },
      { dedupe: !!(t || i) }
    );
  if (!a) throw new yo({ blockHash: t, blockNumber: n });
  let o = e.chain?.formatters?.transactionReceipt?.format || wu;
  return a.map((e) => o(e, `getBlockReceipts`));
}
async function kd(
  e,
  { blockHash: t, blockNumber: n, blockTag: r = `latest` } = {}
) {
  let i = n === void 0 ? void 0 : N(n),
    a;
  return (
    (a = t
      ? await e.request(
          { method: `eth_getBlockTransactionCountByHash`, params: [t] },
          { dedupe: !0 }
        )
      : await e.request(
          { method: `eth_getBlockTransactionCountByNumber`, params: [i || r] },
          { dedupe: !!i }
        )),
    A(a)
  );
}
async function Ad(
  e,
  {
    address: t,
    blockHash: n,
    blockNumber: r,
    blockTag: i = `latest`,
    requireCanonical: a,
  }
) {
  let o = Mo({
      blockHash: n,
      blockNumber: r,
      blockTag: i,
      requireCanonical: a,
    }),
    s = await e.request(
      { method: `eth_getCode`, params: [t, o] },
      { dedupe: typeof r == `bigint` || n !== void 0 }
    );
  if (s !== `0x`) return s;
}
async function jd(e, { address: t, blockNumber: n, blockTag: r = `latest` }) {
  let i = await Ad(e, {
    address: t,
    ...(n === void 0 ? { blockTag: r } : { blockNumber: n }),
  });
  if (i && E(i) === 23 && i.startsWith(`0xef0100`)) return dr(gr(i, 3, 23));
}
var Md = class extends D {
  constructor({ address: e }) {
    super(`No EIP-712 domain found on contract "${e}".`, {
      metaMessages: [
        `Ensure that:`,
        `- The contract is deployed at the address "${e}".`,
        "- `eip712Domain()` function exists on the contract.",
        "- `eip712Domain()` function matches signature to ERC-5267 specification.",
      ],
      name: `Eip712DomainNotFoundError`,
    });
  }
};
async function Nd(e, t) {
  let { address: n, factory: r, factoryData: i } = t;
  try {
    let [t, a, o, s, c, l, u] = await T(
      e,
      Y,
      `readContract`
    )({
      abi: Pd,
      address: n,
      functionName: `eip712Domain`,
      factory: r,
      factoryData: i,
    });
    return {
      domain: {
        name: a,
        version: o,
        chainId: Number(s),
        verifyingContract: c,
        salt: l,
      },
      extensions: u,
      fields: t,
    };
  } catch (e) {
    let t = e;
    throw t.name === `ContractFunctionExecutionError` &&
      t.cause.name === `ContractFunctionZeroDataError`
      ? new Md({ address: n })
      : t;
  }
}
var Pd = [
  {
    inputs: [],
    name: `eip712Domain`,
    outputs: [
      { name: `fields`, type: `bytes1` },
      { name: `name`, type: `string` },
      { name: `version`, type: `string` },
      { name: `chainId`, type: `uint256` },
      { name: `verifyingContract`, type: `address` },
      { name: `salt`, type: `bytes32` },
      { name: `extensions`, type: `uint256[]` },
    ],
    stateMutability: `view`,
    type: `function`,
  },
];
function Fd(e) {
  return {
    baseFeePerGas: e.baseFeePerGas.map((e) => BigInt(e)),
    gasUsedRatio: e.gasUsedRatio,
    oldestBlock: BigInt(e.oldestBlock),
    reward: e.reward?.map((e) => e.map((e) => BigInt(e))),
  };
}
async function Id(
  e,
  {
    blockCount: t,
    blockNumber: n,
    blockTag: r = `latest`,
    rewardPercentiles: i,
  }
) {
  let a = typeof n == `bigint` ? N(n) : void 0;
  return Fd(
    await e.request(
      { method: `eth_feeHistory`, params: [N(t), a || r, i] },
      { dedupe: !!a }
    )
  );
}
async function Ld(e, { filter: t }) {
  let n = t.strict ?? !1,
    r = (await t.request({ method: `eth_getFilterLogs`, params: [t.id] })).map(
      (e) => Ts(e)
    );
  return t.abi ? ks({ abi: t.abi, logs: r, strict: n }) : r;
}
function Rd(e, t) {
  if (e.length !== t.length)
    throw new ot({ expectedLength: e.length, givenLength: t.length });
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r],
      a = t[r];
    n.push(zd(i, a));
  }
  return R(n);
}
function zd(e, t, n = !1) {
  if (e === `address`) {
    let e = t;
    if (!L(e)) throw new I({ address: e });
    return kt(e.toLowerCase(), { size: n ? 32 : null });
  }
  if (e === `string`) return Ht(t);
  if (e === `bytes`) return t;
  if (e === `bool`) return kt(Bt(t), { size: n ? 32 : 1 });
  let r = e.match(Cr);
  if (r) {
    let [e, i, a = `256`] = r,
      o = Number.parseInt(a, 10) / 8;
    return N(t, { size: n ? 32 : o, signed: i === `int` });
  }
  let i = e.match(Sr);
  if (i) {
    let [e, r] = i;
    if (Number.parseInt(r, 10) !== (t.length - 2) / 2)
      throw new _t({
        expectedSize: Number.parseInt(r, 10),
        givenSize: (t.length - 2) / 2,
      });
    return kt(t, { dir: `right`, size: n ? 32 : null });
  }
  let a = e.match(xr);
  if (a && Array.isArray(t)) {
    let [e, n] = a,
      r = [];
    for (let e = 0; e < t.length; e++) r.push(zd(n, t[e], !0));
    return r.length === 0 ? `0x` : R(r);
  }
  throw new wt(e);
}
function Bd(e) {
  let { authorizationList: t } = e;
  if (t)
    for (let e of t) {
      let { chainId: t } = e,
        n = e.address;
      if (!L(n)) throw new I({ address: n });
      if (t < 0) throw new Nl({ chainId: t });
    }
  Hd(e);
}
function Vd(e) {
  let { blobVersionedHashes: t } = e;
  if (t) {
    if (t.length === 0) throw new ls();
    for (let e of t) {
      let t = E(e),
        n = A(gr(e, 0, 1));
      if (t !== 32) throw new us({ hash: e, size: t });
      if (n !== 1) throw new ds({ hash: e, version: n });
    }
  }
  Hd(e);
}
function Hd(e) {
  let { chainId: t, maxPriorityFeePerGas: n, maxFeePerGas: r, to: i } = e;
  if (t <= 0) throw new Nl({ chainId: t });
  if (i && !L(i)) throw new I({ address: i });
  if (r && r > mo) throw new Ka({ maxFeePerGas: r });
  if (n && r && n > r)
    throw new to({ maxFeePerGas: r, maxPriorityFeePerGas: n });
}
function Ud(e) {
  let {
    chainId: t,
    maxPriorityFeePerGas: n,
    gasPrice: r,
    maxFeePerGas: i,
    to: a,
  } = e;
  if (t <= 0) throw new Nl({ chainId: t });
  if (a && !L(a)) throw new I({ address: a });
  if (n || i)
    throw new D(
      "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute."
    );
  if (r && r > mo) throw new Ka({ maxFeePerGas: r });
}
function Wd(e) {
  let {
    chainId: t,
    maxPriorityFeePerGas: n,
    gasPrice: r,
    maxFeePerGas: i,
    to: a,
  } = e;
  if (a && !L(a)) throw new I({ address: a });
  if (t !== void 0 && t <= 0) throw new Nl({ chainId: t });
  if (n || i)
    throw new D(
      "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute."
    );
  if (r && r > mo) throw new Ka({ maxFeePerGas: r });
}
function Gd(e) {
  if (!e || e.length === 0) return [];
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let { address: r, storageKeys: i } = e[n];
    for (let e = 0; e < i.length; e++)
      if (i[e].length - 2 != 64) throw new Li({ storageKey: i[e] });
    if (!L(r, { strict: !1 })) throw new I({ address: r });
    t.push([r, i]);
  }
  return t;
}
function Kd(e, t) {
  let n = ms(e);
  return n === `eip1559`
    ? Yd(e, t)
    : n === `eip2930`
    ? Xd(e, t)
    : n === `eip4844`
    ? Jd(e, t)
    : n === `eip7702`
    ? qd(e, t)
    : Zd(e, t);
}
function qd(e, t) {
  let {
    authorizationList: n,
    chainId: r,
    gas: i,
    nonce: a,
    to: o,
    value: s,
    maxFeePerGas: c,
    maxPriorityFeePerGas: l,
    accessList: u,
    data: d,
  } = e;
  Bd(e);
  let f = Gd(u),
    p = $d(n);
  return R([
    `0x04`,
    La([
      N(r),
      a ? N(a) : `0x`,
      l ? N(l) : `0x`,
      c ? N(c) : `0x`,
      i ? N(i) : `0x`,
      o ?? `0x`,
      s ? N(s) : `0x`,
      d ?? `0x`,
      f,
      p,
      ...Qd(e, t),
    ]),
  ]);
}
function Jd(e, t) {
  let {
    chainId: n,
    gas: r,
    nonce: i,
    to: a,
    value: o,
    maxFeePerBlobGas: s,
    maxFeePerGas: c,
    maxPriorityFeePerGas: l,
    accessList: u,
    data: d,
  } = e;
  Vd(e);
  let f = e.blobVersionedHashes,
    p = e.sidecars;
  if (e.blobs && (f === void 0 || p === void 0)) {
    let t = typeof e.blobs[0] == `string` ? e.blobs : e.blobs.map((e) => M(e)),
      n = e.kzg,
      r = Po({ blobs: t, kzg: n });
    f === void 0 && (f = rs({ commitments: r })),
      p === void 0 &&
        (p = ps({
          blobs: t,
          commitments: r,
          proofs: Fo({ blobs: t, commitments: r, kzg: n }),
        }));
  }
  let m = Gd(u),
    h = [
      N(n),
      i ? N(i) : `0x`,
      l ? N(l) : `0x`,
      c ? N(c) : `0x`,
      r ? N(r) : `0x`,
      a ?? `0x`,
      o ? N(o) : `0x`,
      d ?? `0x`,
      m,
      s ? N(s) : `0x`,
      f ?? [],
      ...Qd(e, t),
    ],
    g = [],
    _ = [],
    v = [];
  if (p)
    for (let e = 0; e < p.length; e++) {
      let { blob: t, commitment: n, proof: r } = p[e];
      g.push(t), _.push(n), v.push(r);
    }
  return R([`0x03`, La(p ? [h, g, _, v] : h)]);
}
function Yd(e, t) {
  let {
    chainId: n,
    gas: r,
    nonce: i,
    to: a,
    value: o,
    maxFeePerGas: s,
    maxPriorityFeePerGas: c,
    accessList: l,
    data: u,
  } = e;
  Hd(e);
  let d = Gd(l);
  return R([
    `0x02`,
    La([
      N(n),
      i ? N(i) : `0x`,
      c ? N(c) : `0x`,
      s ? N(s) : `0x`,
      r ? N(r) : `0x`,
      a ?? `0x`,
      o ? N(o) : `0x`,
      u ?? `0x`,
      d,
      ...Qd(e, t),
    ]),
  ]);
}
function Xd(e, t) {
  let {
    chainId: n,
    gas: r,
    data: i,
    nonce: a,
    to: o,
    value: s,
    accessList: c,
    gasPrice: l,
  } = e;
  Ud(e);
  let u = Gd(c);
  return R([
    `0x01`,
    La([
      N(n),
      a ? N(a) : `0x`,
      l ? N(l) : `0x`,
      r ? N(r) : `0x`,
      o ?? `0x`,
      s ? N(s) : `0x`,
      i ?? `0x`,
      u,
      ...Qd(e, t),
    ]),
  ]);
}
function Zd(e, t) {
  let {
    chainId: n = 0,
    gas: r,
    data: i,
    nonce: a,
    to: o,
    value: s,
    gasPrice: c,
  } = e;
  Wd(e);
  let l = [
    a ? N(a) : `0x`,
    c ? N(c) : `0x`,
    r ? N(r) : `0x`,
    o ?? `0x`,
    s ? N(s) : `0x`,
    i ?? `0x`,
  ];
  if (t) {
    let e = (() => {
        if (t.v >= 35n)
          return (t.v - 35n) / 2n > 0 ? t.v : 27n + (t.v === 35n ? 0n : 1n);
        if (n > 0) return BigInt(n * 2) + BigInt(35n + t.v - 27n);
        let e = 27n + (t.v === 27n ? 0n : 1n);
        if (t.v !== e) throw new Fi({ v: t.v });
        return e;
      })(),
      r = O(t.r),
      i = O(t.s);
    l = [...l, N(e), r === `0x00` ? `0x` : r, i === `0x00` ? `0x` : i];
  } else n > 0 && (l = [...l, N(n), `0x`, `0x`]);
  return La(l);
}
function Qd(e, t) {
  let n = t ?? e,
    { v: r, yParity: i } = n;
  if (n.r === void 0 || n.s === void 0 || (r === void 0 && i === void 0))
    return [];
  let a = O(n.r),
    o = O(n.s);
  return [
    typeof i == `number`
      ? i
        ? N(1)
        : `0x`
      : r === 0n
      ? `0x`
      : r === 1n
      ? N(1)
      : r === 27n
      ? `0x`
      : N(1),
    a === `0x00` ? `0x` : a,
    o === `0x00` ? `0x` : o,
  ];
}
function $d(e) {
  if (!e || e.length === 0) return [];
  let t = [];
  for (let n of e) {
    let { chainId: e, nonce: r, ...i } = n,
      a = n.address;
    t.push([e ? j(e) : `0x`, a, r ? j(r) : `0x`, ...Qd({}, i)]);
  }
  return t;
}
async function ef({ address: e, authorization: t, signature: n }) {
  return ws(dr(e), await Ua({ authorization: t, signature: n }));
}
var tf = new cr(8192);
function nf(e, { enabled: t = !0, id: n }) {
  if (!t || !n) return e();
  if (tf.get(n)) return tf.get(n);
  let r = e().finally(() => tf.delete(n));
  return tf.set(n, r), r;
}
function rf(e, t = {}) {
  return async (n, r = {}) => {
    let {
        dedupe: i = !1,
        methods: a,
        retryDelay: o = 150,
        retryCount: s = 3,
        signal: c,
        uid: l,
      } = { ...t, ...r },
      { method: u } = n;
    if (a?.exclude?.includes(u) || (a?.include && !a.include.includes(u)))
      throw new pa(Error(`method not supported`), { method: u });
    if (c?.aborted) throw Wi(c);
    return nf(
      () =>
        Su(
          async () => {
            try {
              return await e(n, c ? { signal: c } : void 0);
            } catch (e) {
              if (c?.aborted) throw Wi(c);
              if (Gi(e)) throw e;
              let t = e;
              switch (t.code) {
                case ia.code:
                  throw new ia(t);
                case aa.code:
                  throw new aa(t);
                case oa.code:
                  throw new oa(t, { method: n.method });
                case sa.code:
                  throw new sa(t);
                case ca.code:
                  throw new ca(t);
                case la.code:
                  throw new la(t);
                case ua.code:
                  throw new ua(t);
                case da.code:
                  throw new da(t);
                case fa.code:
                  throw new fa(t);
                case pa.code:
                  throw new pa(t, { method: n.method });
                case ma.code:
                  throw new ma(t);
                case ha.code:
                  throw new ha(t);
                case ga.code:
                  throw new ga(t);
                case _a.code:
                  throw new _a(t);
                case va.code:
                  throw new va(t);
                case ya.code:
                  throw new ya(t);
                case ba.code:
                  throw new ba(t);
                case xa.code:
                  throw new xa(t);
                case Sa.code:
                  throw new Sa(t);
                case Ca.code:
                  throw new Ca(t);
                case wa.code:
                  throw new wa(t);
                case Ta.code:
                  throw new Ta(t);
                case Ea.code:
                  throw new Ea(t);
                case Da.code:
                  throw new Da(t);
                case Oa.code:
                  throw new Oa(t);
                case 5e3:
                  throw new ga(t);
                case ka.code:
                  throw new ka(t);
                default:
                  throw e instanceof D ? e : new Aa(t);
              }
            }
          },
          {
            delay: ({ count: e, error: t }) => {
              if (t && t instanceof $i) {
                let e = t?.headers?.get(`Retry-After`);
                if (e?.match(/\d/)) return Number.parseInt(e, 10) * 1e3;
              }
              return ~~(1 << e) * o;
            },
            retryCount: s,
            signal: c,
            shouldRetry: ({ error: e }) => af(e),
          }
        ),
      { enabled: i, id: i ? of(`${l}.${V(n)}`) : void 0 }
    );
  };
}
function af(e) {
  return Gi(e)
    ? !1
    : `code` in e && typeof e.code == `number`
    ? e.code === -1 ||
      e.code === ma.code ||
      e.code === ca.code ||
      e.code === 429
    : e instanceof $i && e.status
    ? e.status === 403 ||
      e.status === 408 ||
      e.status === 413 ||
      e.status === 429 ||
      e.status === 500 ||
      e.status === 502 ||
      e.status === 503 ||
      e.status === 504
    : !0;
}
function of(e, t = 0) {
  let n = 3735928559 ^ t,
    r = 1103547991 ^ t;
  for (let t = 0; t < e.length; t++) {
    let i = e.charCodeAt(t);
    (n = Math.imul(n ^ i, 2654435761)), (r = Math.imul(r ^ i, 1597334677));
  }
  return (
    (n = Math.imul(n ^ (n >>> 16), 2246822507)),
    (n ^= Math.imul(r ^ (r >>> 16), 3266489909)),
    (r = Math.imul(r ^ (r >>> 16), 2246822507)),
    (r ^= Math.imul(n ^ (n >>> 16), 3266489909)),
    (4294967296 * (2097151 & r) + (n >>> 0)).toString(36)
  );
}
var sf = class extends D {
    constructor({
      callbackSelector: e,
      cause: t,
      data: n,
      extraData: r,
      sender: i,
      urls: a,
    }) {
      super(
        t.shortMessage ||
          `An error occurred while fetching for an offchain result.`,
        {
          cause: t,
          metaMessages: [
            ...(t.metaMessages || []),
            t.metaMessages?.length ? `` : [],
            `Offchain Gateway Call:`,
            a && [`  Gateway URL(s):`, ...a.map((e) => `    ${Ki(e)}`)],
            `  Sender: ${i}`,
            `  Data: ${n}`,
            `  Callback selector: ${e}`,
            `  Extra data: ${r}`,
          ].flat(),
          name: `OffchainLookupError`,
        }
      );
    }
  },
  cf = class extends D {
    constructor({ result: e, url: t }) {
      super(
        `Offchain gateway response is malformed. Response data must be a hex value.`,
        {
          metaMessages: [`Gateway URL: ${Ki(t)}`, `Response: ${V(e)}`],
          name: `OffchainLookupResponseMalformedError`,
        }
      );
    }
  },
  lf = class extends D {
    constructor({ sender: e, to: t }) {
      super(
        "Reverted sender address does not match target contract address (`to`).",
        {
          metaMessages: [
            `Contract address: ${t}`,
            `OffchainLookup sender address: ${e}`,
          ],
          name: `OffchainLookupSenderMismatchError`,
        }
      );
    }
  },
  uf = e({
    ccipRequest: () => mf,
    offchainLookup: () => pf,
    offchainLookupAbiItem: () => ff,
    offchainLookupSignature: () => df,
  }),
  df = `0x556f1830`,
  ff = {
    name: `OffchainLookup`,
    type: `error`,
    inputs: [
      { name: `sender`, type: `address` },
      { name: `urls`, type: `string[]` },
      { name: `callData`, type: `bytes` },
      { name: `callbackFunction`, type: `bytes4` },
      { name: `extraData`, type: `bytes` },
    ],
  };
async function pf(
  e,
  { blockNumber: t, blockTag: n, data: r, requestOptions: i, to: a }
) {
  let { args: o } = vi({ data: r, abi: [ff] }),
    [s, c, l, u, d] = o,
    { ccipRead: f } = e,
    p = f && typeof f?.request == `function` ? f.request : mf;
  try {
    if (!ws(a, s)) throw new lf({ sender: s, to: a });
    let { data: r } = await Vl(e, {
      blockNumber: t,
      blockTag: n,
      data: mr([
        u,
        wr(
          [{ type: `bytes` }, { type: `bytes` }],
          [
            c.includes(`x-batch-gateway:true`)
              ? await Gu({
                  data: l,
                  ccipRequest: (e) => p({ ...e, requestOptions: i }),
                })
              : await p({ data: l, requestOptions: i, sender: s, urls: c }),
            d,
          ]
        ),
      ]),
      requestOptions: i,
      to: a,
    });
    return r;
  } catch (e) {
    throw i?.signal?.aborted
      ? Wi(i.signal)
      : Gi(e)
      ? e
      : new sf({
          callbackSelector: u,
          cause: e,
          data: r,
          extraData: d,
          sender: s,
          urls: c,
        });
  }
}
async function mf({ data: e, requestOptions: t, sender: n, urls: r }) {
  let i = Error(`An unknown error occurred.`);
  for (let a = 0; a < r.length; a++) {
    if (t?.signal?.aborted) throw Wi(t.signal);
    let o = r[a],
      s = o.includes(`{data}`) ? `GET` : `POST`,
      c = s === `POST` ? { data: e, sender: n } : void 0,
      l = s === `POST` ? { "Content-Type": `application/json` } : {};
    try {
      let r = await fetch(
          o.replace(`{sender}`, n.toLowerCase()).replace(`{data}`, e),
          {
            body: JSON.stringify(c),
            headers: l,
            method: s,
            ...(t?.signal ? { signal: t.signal } : {}),
          }
        ),
        a;
      if (
        ((a = r.headers.get(`Content-Type`)?.startsWith(`application/json`)
          ? (await r.json()).data
          : await r.text()),
        !r.ok)
      ) {
        i = new $i({
          body: c,
          details: a?.error ? V(a.error) : r.statusText,
          headers: r.headers,
          status: r.status,
          url: o,
        });
        continue;
      }
      if (!Xe(a)) {
        i = new cf({ result: a, url: o });
        continue;
      }
      return a;
    } catch (e) {
      if (t?.signal?.aborted) throw Wi(t.signal);
      if (Gi(e)) throw e;
      i = new $i({ body: c, details: e.message, url: o });
    }
  }
  throw i;
}
function hf(e) {
  let t = { formatters: void 0, fees: void 0, serializers: void 0, ...e };
  function n(e) {
    return (t) => {
      let r = typeof t == `function` ? t(e) : t,
        i = { ...e, ...r };
      return Object.assign(i, { extend: n(i) });
    };
  }
  return Object.assign(t, { extend: n(t) });
}
function gf(e) {
  let { source: t } = e,
    n = new Map(),
    r = new cr(8192),
    i = new Map(),
    a = ({ address: e, chainId: t }) => `${e}.${t}`,
    o = (e) => {
      n.delete(e), i.delete(e);
    };
  return {
    async consume({ address: e, chainId: n, client: i }) {
      let o = a({ address: e, chainId: n }),
        s = this.get({ address: e, chainId: n, client: i });
      this.increment({ address: e, chainId: n });
      let c = await s;
      return await t.set({ address: e, chainId: n }, c), r.set(o, c), c;
    },
    async increment({ address: e, chainId: t }) {
      let r = a({ address: e, chainId: t }),
        i = n.get(r) ?? 0;
      n.set(r, i + 1);
    },
    async get({ address: e, chainId: s, client: c }) {
      let l = a({ address: e, chainId: s }),
        u = i.get(l);
      return (
        u ||
          ((u = (async () => {
            try {
              let n = await t.get({ address: e, chainId: s, client: c }),
                i = r.get(l) ?? 0;
              return i > 0 && n <= i ? i + 1 : (r.delete(l), n);
            } finally {
              o(l);
            }
          })()),
          i.set(l, u)),
        (n.get(l) ?? 0) + (await u)
      );
    },
    reset({ address: e, chainId: t }) {
      let n = a({ address: e, chainId: t });
      r.delete(n), o(n);
    },
  };
}
function _f(
  e,
  { errorInstance: t = Error(`timed out`), timeout: n, signal: r }
) {
  return new Promise((i, a) => {
    (async () => {
      let o,
        s = new AbortController();
      try {
        n > 0 &&
          (o = setTimeout(() => {
            r ? s.abort() : a(t);
          }, n)),
          i(await e({ signal: s?.signal || null }));
      } catch (e) {
        if (s?.signal.aborted && Gi(e)) {
          a(t);
          return;
        }
        a(e);
      } finally {
        clearTimeout(o);
      }
    })();
  });
}
function vf() {
  return {
    current: 0,
    take() {
      return this.current++;
    },
    reset() {
      this.current = 0;
    },
  };
}
var yf = vf(),
  bf = 10485760;
function xf(e, t = {}) {
  let { url: n, headers: r } = Cf(e);
  return {
    async request(e) {
      let {
          body: i,
          fetchFn: a = t.fetchFn ?? fetch,
          maxResponseBodySize: o = t.maxResponseBodySize ?? bf,
          onRequest: s = t.onRequest,
          onResponse: c = t.onResponse,
          timeout: l = t.timeout ?? 1e4,
        } = e,
        u = { ...(t.fetchOptions ?? {}), ...(e.fetchOptions ?? {}) },
        { headers: d, method: f, signal: p } = u;
      try {
        let e = await _f(
          async ({ signal: e }) => {
            let t = {
                ...u,
                body: V(
                  Array.isArray(i)
                    ? i.map((e) => ({
                        jsonrpc: `2.0`,
                        id: e.id ?? yf.take(),
                        ...e,
                      }))
                    : { jsonrpc: `2.0`, id: i.id ?? yf.take(), ...i }
                ),
                headers: { ...r, "Content-Type": `application/json`, ...d },
                method: f || `POST`,
                signal: p || (l > 0 ? e : null),
              },
              o = new Request(n, t),
              c = (await s?.(o, t)) ?? { ...t, url: n };
            return await a(c.url ?? n, c);
          },
          { errorInstance: new na({ body: i, url: n }), timeout: l, signal: !0 }
        );
        c && (await c(e));
        let t,
          m = await Sf(e, { maxResponseBodySize: o });
        if (e.headers.get(`Content-Type`)?.startsWith(`application/json`))
          t = JSON.parse(m);
        else {
          t = m;
          try {
            t = JSON.parse(t || `{}`);
          } catch (n) {
            if (e.ok) throw n;
            t = { error: t };
          }
        }
        if (!e.ok) {
          if (
            typeof t.error?.code == `number` &&
            typeof t.error?.message == `string`
          )
            return t;
          throw new $i({
            body: i,
            details: V(t.error) || e.statusText,
            headers: e.headers,
            status: e.status,
            url: n,
          });
        }
        return t;
      } catch (e) {
        throw p?.aborted
          ? Wi(p)
          : Gi(e) || e instanceof $i || e instanceof ea || e instanceof na
          ? e
          : new $i({ body: i, cause: e, url: n });
      }
    },
  };
}
async function Sf(e, { maxResponseBodySize: t }) {
  if (t === !1) return e.text();
  let n = e.headers.get(`Content-Length`);
  if (n) {
    let e = Number(n);
    if (e > t) throw new ea({ maxSize: t, size: e });
  }
  if (!e.body) {
    let n = await e.text(),
      r = new TextEncoder().encode(n).length;
    if (r > t) throw new ea({ maxSize: t, size: r });
    return n;
  }
  let r = e.body.getReader(),
    i = new TextDecoder(),
    a = ``,
    o = 0;
  try {
    for (;;) {
      let { done: e, value: n } = await r.read();
      if (e) break;
      if (((o += n.byteLength), o > t))
        throw (await r.cancel(), new ea({ maxSize: t, size: o }));
      a += i.decode(n, { stream: !0 });
    }
    return (a += i.decode()), a;
  } finally {
    r.releaseLock();
  }
}
function Cf(e) {
  try {
    let t = new URL(e),
      n = (() => {
        if (t.username) {
          let e = `${decodeURIComponent(t.username)}:${decodeURIComponent(
            t.password
          )}`;
          return (
            (t.username = ``),
            (t.password = ``),
            {
              url: t.toString(),
              headers: { Authorization: `Basic ${btoa(e)}` },
            }
          );
        }
      })();
    return { url: t.toString(), ...n };
  } catch {
    return { url: e };
  }
}
var wf = `Ethereum Signed Message:
`;
function Tf(e) {
  let t =
    typeof e == `string` ? Ht(e) : typeof e.raw == `string` ? e.raw : M(e.raw);
  return mr([Ht(`${wf}${E(t)}`), t]);
}
function Ef(e, t) {
  return F(Tf(e), t);
}
var Df = class extends D {
    constructor({ domain: e }) {
      super(`Invalid domain "${V(e)}".`, {
        metaMessages: [`Must be a valid EIP-712 domain.`],
      });
    }
  },
  Of = class extends D {
    constructor({ primaryType: e, types: t }) {
      super(
        `Invalid primary type \`${e}\` must be one of \`${JSON.stringify(
          Object.keys(t)
        )}\`.`,
        {
          docsPath: `/api/glossary/Errors#typeddatainvalidprimarytypeerror`,
          metaMessages: ["Check that the primary type is a key in `types`."],
        }
      );
    }
  },
  kf = class extends D {
    constructor({ type: e }) {
      super(`Struct type "${e}" is invalid.`, {
        metaMessages: [`Struct type must not be a Solidity type.`],
        name: `InvalidStructTypeError`,
      });
    }
  },
  Af = class extends D {
    constructor({ type: e }) {
      let t = e.replace(/^(u?int)/, `$&256`);
      super(`Type "${e}" is not a valid EIP-712 type.`, {
        metaMessages: [`Use "${t}" instead.`],
        name: `InvalidTypedDataTypeError`,
      });
    }
  };
function jf(e) {
  let { domain: t, message: n, primaryType: r, types: i } = e,
    a = (e, t) => {
      let n = { ...t };
      for (let t of e) {
        let { name: e, type: r } = t;
        r === `address` && (n[e] = n[e].toLowerCase());
      }
      return n;
    };
  return V({
    domain: !i.EIP712Domain || !t ? {} : a(i.EIP712Domain, t),
    message: (() => {
      if (r !== `EIP712Domain`) return a(i[r], n);
    })(),
    primaryType: r,
    types: i,
  });
}
function Mf(e) {
  let { domain: t, message: n, primaryType: r, types: i } = e,
    a = (e, t) => {
      for (let n of e) {
        let { name: e, type: r } = n,
          o = t[e],
          s = r.replace(/(\[[0-9]*\])+$/, ``);
        if (s === `int` || s === `uint`) throw new Af({ type: r });
        let c = r.match(Cr);
        if (c && (typeof o == `number` || typeof o == `bigint`)) {
          let [e, t, n] = c;
          N(o, { signed: t === `int`, size: Number.parseInt(n, 10) / 8 });
        }
        if (r === `address` && typeof o == `string` && !L(o))
          throw new I({ address: o });
        let l = r.match(Sr);
        if (l) {
          let [e, t] = l;
          if (t && E(o) !== Number.parseInt(t, 10))
            throw new _t({
              expectedSize: Number.parseInt(t, 10),
              givenSize: E(o),
            });
        }
        let u = i[r];
        u && (Pf(r), a(u, o));
      }
    };
  if (i.EIP712Domain && t) {
    if (typeof t != `object`) throw new Df({ domain: t });
    a(i.EIP712Domain, t);
  }
  if (r !== `EIP712Domain`) {
    if (i[r]) a(i[r], n);
    else throw new Of({ primaryType: r, types: i });
  }
}
function Nf({ domain: e }) {
  return [
    typeof e?.name == `string` && { name: `name`, type: `string` },
    e?.version && { name: `version`, type: `string` },
    (typeof e?.chainId == `number` || typeof e?.chainId == `bigint`) && {
      name: `chainId`,
      type: `uint256`,
    },
    e?.verifyingContract && { name: `verifyingContract`, type: `address` },
    e?.salt && { name: `salt`, type: `bytes32` },
  ].filter(Boolean);
}
function Pf(e) {
  if (
    e === `address` ||
    e === `bool` ||
    e === `string` ||
    e.startsWith(`bytes`) ||
    e.startsWith(`uint`) ||
    e.startsWith(`int`)
  )
    throw new kf({ type: e });
}
function Ff(e) {
  let { domain: t = {}, message: n, primaryType: r } = e,
    i = { EIP712Domain: Nf({ domain: t }), ...e.types };
  Mf({ domain: t, message: n, primaryType: r, types: i });
  let a = [`0x1901`];
  return (
    t && a.push(If({ domain: t, types: i })),
    r !== `EIP712Domain` && a.push(Lf({ data: n, primaryType: r, types: i })),
    F(mr(a))
  );
}
function If({ domain: e, types: t }) {
  return Lf({ data: e, primaryType: `EIP712Domain`, types: t });
}
function Lf({ data: e, primaryType: t, types: n }) {
  return F(Rf({ data: e, primaryType: t, types: n }));
}
function Rf({ data: e, primaryType: t, types: n }) {
  let r = [{ type: `bytes32` }],
    i = [zf({ primaryType: t, types: n })];
  for (let a of n[t]) {
    let [t, o] = Hf({ types: n, name: a.name, type: a.type, value: e[a.name] });
    r.push(t), i.push(o);
  }
  return wr(r, i);
}
function zf({ primaryType: e, types: t }) {
  return F(j(Bf({ primaryType: e, types: t })));
}
function Bf({ primaryType: e, types: t }) {
  let n = ``,
    r = Vf({ primaryType: e, types: t });
  r.delete(e);
  let i = [e, ...Array.from(r).sort()];
  for (let e of i)
    n += `${e}(${t[e].map(({ name: e, type: t }) => `${t} ${e}`).join(`,`)})`;
  return n;
}
function Vf({ primaryType: e, types: t }, n = new Set()) {
  let r = e.match(/^\w*/u)?.[0];
  if (n.has(r) || t[r] === void 0) return n;
  n.add(r);
  for (let e of t[r]) Vf({ primaryType: e.type, types: t }, n);
  return n;
}
function Hf({ types: e, name: t, type: n, value: r }) {
  if (e[n] !== void 0)
    return [{ type: `bytes32` }, F(Rf({ data: r, primaryType: n, types: e }))];
  if (n === `bytes`) return [{ type: `bytes32` }, F(r)];
  if (n === `string`) return [{ type: `bytes32` }, F(j(r))];
  if (n.lastIndexOf(`]`) === n.length - 1) {
    let i = n.slice(0, n.lastIndexOf(`[`)),
      a = r.map((n) => Hf({ name: t, type: i, types: e, value: n }));
    return [
      { type: `bytes32` },
      F(
        wr(
          a.map(([e]) => e),
          a.map(([, e]) => e)
        )
      ),
    ];
  }
  return [{ type: n }, r];
}
var Uf = `0x6492649264926492649264926492649264926492649264926492649264926492`,
  Wf = {
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
  }.checksum,
  Gf = class extends In {
    constructor(e, t) {
      super(), (this.finished = !1), (this.destroyed = !1), Sn(e);
      let n = Pn(t);
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
      this.oHash.update(i), En(i);
    }
    update(e) {
      return Cn(this), this.iHash.update(e), this;
    }
    digestInto(e) {
      Cn(this),
        xn(e, this.outputLen),
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
  Kf = (e, t, n) => new Gf(e, t).update(n).digest();
Kf.create = (e, t) => new Gf(e, t);
function qf(e, t = {}) {
  let { as: n = typeof e == `string` ? `Hex` : `Bytes` } = t,
    r = tr(kc(e));
  return n === `Bytes` ? r : Qc(r);
}
var Jf = /^0x[a-fA-F0-9]{40}$/;
function Yf(e, t = {}) {
  let { strict: n = !0 } = t;
  if (!Jf.test(e)) throw new Qf({ address: e, cause: new $f() });
  if (n) {
    if (e.toLowerCase() === e) return;
    if (Xf(e) !== e) throw new Qf({ address: e, cause: new ep() });
  }
}
function Xf(e) {
  if (Wf.has(e)) return Wf.get(e);
  Yf(e, { strict: !1 });
  let t = e.substring(2).toLowerCase(),
    n = qf(Mc(t), { as: `Bytes` }),
    r = t.split(``);
  for (let e = 0; e < 40; e += 2)
    n[e >> 1] >> 4 >= 8 && r[e] && (r[e] = r[e].toUpperCase()),
      (n[e >> 1] & 15) >= 8 && r[e + 1] && (r[e + 1] = r[e + 1].toUpperCase());
  let i = `0x${r.join(``)}`;
  return Wf.set(e, i), i;
}
function Zf(e, t = {}) {
  let { strict: n = !0 } = t ?? {};
  try {
    return Yf(e, { strict: n }), !0;
  } catch {
    return !1;
  }
}
var Qf = class extends q {
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
  $f = class extends q {
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
  ep = class extends q {
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
  tp = /^(.*)\[([0-9]*)\]$/,
  np = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
  rp =
    /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
2n ** (8n - 1n) - 1n,
  2n ** (16n - 1n) - 1n,
  2n ** (24n - 1n) - 1n,
  2n ** (32n - 1n) - 1n,
  2n ** (40n - 1n) - 1n,
  2n ** (48n - 1n) - 1n,
  2n ** (56n - 1n) - 1n,
  2n ** (64n - 1n) - 1n,
  2n ** (72n - 1n) - 1n,
  2n ** (80n - 1n) - 1n,
  2n ** (88n - 1n) - 1n,
  2n ** (96n - 1n) - 1n,
  2n ** (104n - 1n) - 1n,
  2n ** (112n - 1n) - 1n,
  2n ** (120n - 1n) - 1n,
  2n ** (128n - 1n) - 1n,
  2n ** (136n - 1n) - 1n,
  2n ** (144n - 1n) - 1n,
  2n ** (152n - 1n) - 1n,
  2n ** (160n - 1n) - 1n,
  2n ** (168n - 1n) - 1n,
  2n ** (176n - 1n) - 1n,
  2n ** (184n - 1n) - 1n,
  2n ** (192n - 1n) - 1n,
  2n ** (200n - 1n) - 1n,
  2n ** (208n - 1n) - 1n,
  2n ** (216n - 1n) - 1n,
  2n ** (224n - 1n) - 1n,
  2n ** (232n - 1n) - 1n,
  2n ** (240n - 1n) - 1n,
  2n ** (248n - 1n) - 1n,
  2n ** (256n - 1n) - 1n,
  -(2n ** (8n - 1n)),
  -(2n ** (16n - 1n)),
  -(2n ** (24n - 1n)),
  -(2n ** (32n - 1n)),
  -(2n ** (40n - 1n)),
  -(2n ** (48n - 1n)),
  -(2n ** (56n - 1n)),
  -(2n ** (64n - 1n)),
  -(2n ** (72n - 1n)),
  -(2n ** (80n - 1n)),
  -(2n ** (88n - 1n)),
  -(2n ** (96n - 1n)),
  -(2n ** (104n - 1n)),
  -(2n ** (112n - 1n)),
  -(2n ** (120n - 1n)),
  -(2n ** (128n - 1n)),
  -(2n ** (136n - 1n)),
  -(2n ** (144n - 1n)),
  -(2n ** (152n - 1n)),
  -(2n ** (160n - 1n)),
  -(2n ** (168n - 1n)),
  -(2n ** (176n - 1n)),
  -(2n ** (184n - 1n)),
  -(2n ** (192n - 1n)),
  -(2n ** (200n - 1n)),
  -(2n ** (208n - 1n)),
  -(2n ** (216n - 1n)),
  -(2n ** (224n - 1n)),
  -(2n ** (232n - 1n)),
  -(2n ** (240n - 1n)),
  -(2n ** (248n - 1n)),
  -(2n ** (256n - 1n));
var ip = 2n ** 256n - 1n;
function ap(e, t, n) {
  let { checksumAddress: r, staticPosition: i } = n,
    a = Tp(t.type);
  if (a) {
    let [n, o] = a;
    return lp(
      e,
      { ...t, type: o },
      { checksumAddress: r, length: n, staticPosition: i }
    );
  }
  if (t.type === `tuple`)
    return pp(e, t, { checksumAddress: r, staticPosition: i });
  if (t.type === `address`) return cp(e, { checksum: r });
  if (t.type === `bool`) return up(e);
  if (t.type.startsWith(`bytes`)) return dp(e, t, { staticPosition: i });
  if (t.type.startsWith(`uint`) || t.type.startsWith(`int`)) return fp(e, t);
  if (t.type === `string`) return mp(e, { staticPosition: i });
  throw new Hp(t.type);
}
var op = 32,
  sp = 32;
function cp(e, t = {}) {
  let { checksum: n = !1 } = t;
  return [((e) => (n ? Xf(e) : e))(Qc(Fc(e.readBytes(32), -20))), 32];
}
function lp(e, t, n) {
  let { checksumAddress: r, length: i, staticPosition: a } = n;
  if (i === null) {
    let n = a + Rc(e.readBytes(sp)),
      i = n + op;
    e.setPosition(n);
    let o = Rc(e.readBytes(op)),
      s = Ep(t),
      c = 0,
      l = [];
    for (let n = 0; n < o; ++n) {
      e.setPosition(i + (s ? n * 32 : c));
      let [a, o] = ap(e, t, { checksumAddress: r, staticPosition: i });
      (c += o), l.push(a), o === 0 && (e.assertReadLimit(), e._touch());
    }
    return e.setPosition(a + 32), [l, 32];
  }
  if (Ep(t)) {
    let n = a + Rc(e.readBytes(sp)),
      o = [];
    for (let a = 0; a < i; ++a) {
      e.setPosition(n + a * 32);
      let [i] = ap(e, t, { checksumAddress: r, staticPosition: n });
      o.push(i);
    }
    return e.setPosition(a + 32), [o, 32];
  }
  let o = 0,
    s = [];
  for (let n = 0; n < i; ++n) {
    let [n, i] = ap(e, t, { checksumAddress: r, staticPosition: a + o });
    (o += i), s.push(n), i === 0 && (e.assertReadLimit(), e._touch());
  }
  return [s, o];
}
function up(e) {
  return [Lc(e.readBytes(32), { size: 32 }), 32];
}
function dp(e, t, { staticPosition: n }) {
  let [r, i] = t.type.split(`bytes`);
  if (!i) {
    let t = Rc(e.readBytes(32));
    e.setPosition(n + t);
    let r = Rc(e.readBytes(32));
    if (r === 0) return e.setPosition(n + 32), [`0x`, 32];
    let i = e.readBytes(r);
    return e.setPosition(n + 32), [Qc(i), 32];
  }
  return [Qc(e.readBytes(Number.parseInt(i, 10), 32)), 32];
}
function fp(e, t) {
  let n = t.type.startsWith(`int`),
    r = Number.parseInt(t.type.split(`int`)[1] || `256`, 10),
    i = e.readBytes(32);
  return [r > 48 ? Ic(i, { signed: n }) : Rc(i, { signed: n }), 32];
}
function pp(e, t, n) {
  let { checksumAddress: r, staticPosition: i } = n,
    a = t.components.length === 0 || t.components.some(({ name: e }) => !e),
    o = a ? [] : {},
    s = 0;
  if (Ep(t)) {
    let n = i + Rc(e.readBytes(sp));
    for (let i = 0; i < t.components.length; ++i) {
      let c = t.components[i];
      e.setPosition(n + s);
      let [l, u] = ap(e, c, { checksumAddress: r, staticPosition: n });
      (s += u), (o[a ? i : c?.name] = l);
    }
    return e.setPosition(i + 32), [o, 32];
  }
  for (let n = 0; n < t.components.length; ++n) {
    let c = t.components[n],
      [l, u] = ap(e, c, { checksumAddress: r, staticPosition: i });
    (o[a ? n : c?.name] = l), (s += u);
  }
  return [o, s];
}
function mp(e, { staticPosition: t }) {
  let n = t + Rc(e.readBytes(32));
  e.setPosition(n);
  let r = Rc(e.readBytes(32));
  if (r === 0) return e.setPosition(t + 32), [``, 32];
  let i = zc(Bc(e.readBytes(r, 32)));
  return e.setPosition(t + 32), [i, 32];
}
function hp({ checksumAddress: e, parameters: t, values: n }) {
  let r = [];
  for (let i = 0; i < t.length; i++)
    r.push(gp({ checksumAddress: e, parameter: t[i], value: n[i] }));
  return r;
}
function gp({ checksumAddress: e = !1, parameter: t, value: n }) {
  let r = t,
    i = Tp(r.type);
  if (i) {
    let [t, a] = i;
    return yp(n, {
      checksumAddress: e,
      length: t,
      parameter: { ...r, type: a },
    });
  }
  if (r.type === `tuple`) return wp(n, { checksumAddress: e, parameter: r });
  if (r.type === `address`) return vp(n, { checksum: e });
  if (r.type === `bool`) return xp(n);
  if (r.type.startsWith(`uint`) || r.type.startsWith(`int`)) {
    let e = r.type.startsWith(`int`),
      [, , t = `256`] = rp.exec(r.type) ?? [];
    return Sp(n, { signed: e, size: Number(t) });
  }
  if (r.type.startsWith(`bytes`)) return bp(n, { type: r.type });
  if (r.type === `string`) return Cp(n);
  throw new Hp(r.type);
}
function _p(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    let { dynamic: r, encoded: i } = e[n];
    t += r ? 32 : rl(i);
  }
  let n = [],
    r = [],
    i = 0;
  for (let a = 0; a < e.length; a++) {
    let { dynamic: o, encoded: s } = e[a];
    o ? (n.push(J(t + i, { size: 32 })), r.push(s), (i += rl(s))) : n.push(s);
  }
  return Yc(...n, ...r);
}
function vp(e, t) {
  let { checksum: n = !1 } = t;
  return Yf(e, { strict: n }), { dynamic: !1, encoded: el(e.toLowerCase()) };
}
function yp(e, t) {
  let { checksumAddress: n, length: r, parameter: i } = t,
    a = r === null;
  if (!Array.isArray(e)) throw new Vp(e);
  if (!a && e.length !== r)
    throw new Rp({
      expectedLength: r,
      givenLength: e.length,
      type: `${i.type}[${r}]`,
    });
  let o = e.length === 0 && Ep(i),
    s = [];
  for (let t = 0; t < e.length; t++) {
    let r = gp({ checksumAddress: n, parameter: i, value: e[t] });
    r.dynamic && (o = !0), s.push(r);
  }
  if (a || o) {
    let e = _p(s);
    if (a) {
      let t = J(s.length, { size: 32 });
      return { dynamic: !0, encoded: s.length > 0 ? Yc(t, e) : t };
    }
    if (o) return { dynamic: !0, encoded: e };
  }
  return { dynamic: !1, encoded: Yc(...s.map(({ encoded: e }) => e)) };
}
function bp(e, { type: t }) {
  let [, n] = t.split(`bytes`),
    r = rl(e);
  if (!n) {
    let t = e;
    return (
      r % 32 != 0 && (t = tl(t, Math.ceil((e.length - 2) / 2 / 32) * 32)),
      { dynamic: !0, encoded: Yc(el(J(r, { size: 32 })), t) }
    );
  }
  if (r !== Number.parseInt(n, 10))
    throw new zp({ expectedSize: Number.parseInt(n, 10), value: e });
  return { dynamic: !1, encoded: tl(e) };
}
function xp(e) {
  if (typeof e != `boolean`)
    throw new q(
      `Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`
    );
  return { dynamic: !1, encoded: el(Zc(e)) };
}
function Sp(e, { signed: t, size: n }) {
  if (typeof n == `number`) {
    let r = 2n ** (BigInt(n) - (t ? 1n : 0n)) - 1n,
      i = t ? -r - 1n : 0n;
    if (e > r || e < i)
      throw new sl({
        max: r.toString(),
        min: i.toString(),
        signed: t,
        size: n / 8,
        value: e.toString(),
      });
  }
  return { dynamic: !1, encoded: J(e, { size: 32, signed: t }) };
}
function Cp(e) {
  let t = $c(e),
    n = Math.ceil(rl(t) / 32),
    r = [];
  for (let e = 0; e < n; e++) r.push(tl(nl(t, e * 32, (e + 1) * 32)));
  return { dynamic: !0, encoded: Yc(tl(J(rl(t), { size: 32 })), ...r) };
}
function wp(e, t) {
  let { checksumAddress: n, parameter: r } = t,
    i = !1,
    a = [];
  for (let t = 0; t < r.components.length; t++) {
    let o = r.components[t],
      s = gp({
        checksumAddress: n,
        parameter: o,
        value: e[Array.isArray(e) ? t : o.name],
      });
    a.push(s), s.dynamic && (i = !0);
  }
  return {
    dynamic: i,
    encoded: i ? _p(a) : Yc(...a.map(({ encoded: e }) => e)),
  };
}
function Tp(e) {
  let t = e.match(/^(.*)\[(\d+)?\]$/);
  return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
}
function Ep(e) {
  let { type: t } = e;
  if (t === `string` || t === `bytes` || t.endsWith(`[]`)) return !0;
  if (t === `tuple`) return e.components?.some(Ep);
  let n = Tp(e.type);
  return !!(n && Ep({ ...e, type: n[1] }));
}
var Dp = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: 1 / 0,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new jp({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit,
      });
  },
  assertPosition(e) {
    if (e < 0 || e > this.bytes.length - 1)
      throw new Ap({ length: this.bytes.length, position: e });
  },
  decrementPosition(e) {
    if (e < 0) throw new kp({ offset: e });
    let t = this.position - e;
    this.assertPosition(t), (this.position = t);
  },
  getReadCount(e) {
    return this.positionReadCount.get(e || this.position) || 0;
  },
  incrementPosition(e) {
    if (e < 0) throw new kp({ offset: e });
    let t = this.position + e;
    this.assertPosition(t), (this.position = t);
  },
  inspectByte(e) {
    let t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectBytes(e, t) {
    let n = t ?? this.position;
    return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e);
  },
  inspectUint8(e) {
    let t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectUint16(e) {
    let t = e ?? this.position;
    return this.assertPosition(t + 1), this.dataView.getUint16(t);
  },
  inspectUint24(e) {
    let t = e ?? this.position;
    return (
      this.assertPosition(t + 2),
      (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
    );
  },
  inspectUint32(e) {
    let t = e ?? this.position;
    return this.assertPosition(t + 3), this.dataView.getUint32(t);
  },
  pushByte(e) {
    this.assertPosition(this.position),
      (this.bytes[this.position] = e),
      this.position++;
  },
  pushBytes(e) {
    this.assertPosition(this.position + e.length - 1),
      this.bytes.set(e, this.position),
      (this.position += e.length);
  },
  pushUint8(e) {
    this.assertPosition(this.position),
      (this.bytes[this.position] = e),
      this.position++;
  },
  pushUint16(e) {
    this.assertPosition(this.position + 1),
      this.dataView.setUint16(this.position, e),
      (this.position += 2);
  },
  pushUint24(e) {
    this.assertPosition(this.position + 2),
      this.dataView.setUint16(this.position, e >> 8),
      this.dataView.setUint8(this.position + 2, e & 255),
      (this.position += 3);
  },
  pushUint32(e) {
    this.assertPosition(this.position + 3),
      this.dataView.setUint32(this.position, e),
      (this.position += 4);
  },
  readByte() {
    this.assertReadLimit(), this._touch();
    let e = this.inspectByte();
    return this.position++, e;
  },
  readBytes(e, t) {
    this.assertReadLimit(), this._touch();
    let n = this.inspectBytes(e);
    return (this.position += t ?? e), n;
  },
  readUint8() {
    this.assertReadLimit(), this._touch();
    let e = this.inspectUint8();
    return (this.position += 1), e;
  },
  readUint16() {
    this.assertReadLimit(), this._touch();
    let e = this.inspectUint16();
    return (this.position += 2), e;
  },
  readUint24() {
    this.assertReadLimit(), this._touch();
    let e = this.inspectUint24();
    return (this.position += 3), e;
  },
  readUint32() {
    this.assertReadLimit(), this._touch();
    let e = this.inspectUint32();
    return (this.position += 4), e;
  },
  get remaining() {
    return this.bytes.length - this.position;
  },
  setPosition(e) {
    let t = this.position;
    return (
      this.assertPosition(e), (this.position = e), () => (this.position = t)
    );
  },
  _touch() {
    if (this.recursiveReadLimit === 1 / 0) return;
    let e = this.getReadCount();
    this.positionReadCount.set(this.position, e + 1),
      e > 0 && this.recursiveReadCount++;
  },
};
function Op(e, { recursiveReadLimit: t = 8192 } = {}) {
  let n = Object.create(Dp);
  return (
    (n.bytes = e),
    (n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
    (n.positionReadCount = new Map()),
    (n.recursiveReadLimit = t),
    n
  );
}
var kp = class extends q {
    constructor({ offset: e }) {
      super(`Offset \`${e}\` cannot be negative.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Cursor.NegativeOffsetError`,
        });
    }
  },
  Ap = class extends q {
    constructor({ length: e, position: t }) {
      super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Cursor.PositionOutOfBoundsError`,
        });
    }
  },
  jp = class extends q {
    constructor({ count: e, limit: t }) {
      super(
        `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Cursor.RecursiveReadLimitExceededError`,
        });
    }
  };
function Mp(e, t, n = {}) {
  let { as: r = `Array`, checksumAddress: i = !1 } = n,
    a = typeof t == `string` ? jc(t) : t,
    o = Op(a);
  if (Pc(a) === 0 && e.length > 0) throw new Lp();
  if (Pc(a) && Pc(a) < 32)
    throw new Ip({
      data: typeof t == `string` ? t : Qc(t),
      parameters: e,
      size: Pc(a),
    });
  let s = 0,
    c = r === `Array` ? [] : {};
  for (let t = 0; t < e.length; ++t) {
    let n = e[t];
    s < a.length && o.setPosition(s);
    let [l, u] = ap(o, n, { checksumAddress: i, staticPosition: 0 });
    (s += u), r === `Array` ? c.push(l) : (c[n.name ?? t] = l);
  }
  return c;
}
function Np(e, t, n) {
  let { checksumAddress: r = !1 } = n ?? {};
  if (e.length !== t.length)
    throw new Bp({ expectedLength: e.length, givenLength: t.length });
  let i = _p(hp({ checksumAddress: r, parameters: e, values: t }));
  return i.length === 0 ? `0x` : i;
}
function Pp(e, t) {
  if (e.length !== t.length)
    throw new Bp({ expectedLength: e.length, givenLength: t.length });
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r],
      a = t[r];
    n.push(Pp.encode(i, a));
  }
  return Yc(...n);
}
(function (e) {
  function t(e, n, r = !1) {
    if (e === `address`) {
      let e = n;
      return Yf(e), el(e.toLowerCase(), r ? 32 : 0);
    }
    if (e === `string`) return $c(n);
    if (e === `bytes`) return n;
    if (e === `bool`) return el(Zc(n), r ? 32 : 1);
    let i = e.match(rp);
    if (i) {
      let [e, t, a = `256`] = i,
        o = Number.parseInt(a, 10) / 8;
      return J(n, { size: r ? 32 : o, signed: t === `int` });
    }
    let a = e.match(np);
    if (a) {
      let [e, t] = a;
      if (Number.parseInt(t, 10) !== (n.length - 2) / 2)
        throw new zp({ expectedSize: Number.parseInt(t, 10), value: n });
      return tl(n, r ? 32 : 0);
    }
    let o = e.match(tp);
    if (o && Array.isArray(n)) {
      let [e, r] = o,
        i = [];
      for (let e = 0; e < n.length; e++) i.push(t(r, n[e], !0));
      return i.length === 0 ? `0x` : Yc(...i);
    }
    throw new Hp(e);
  }
  e.encode = t;
})((Pp ||= {}));
function Fp(e) {
  return (Array.isArray(e) && typeof e[0] == `string`) || typeof e == `string`
    ? Ke(e)
    : e;
}
var Ip = class extends q {
    constructor({ data: e, parameters: t, size: n }) {
      super(`Data size of ${n} bytes is too small for given parameters.`, {
        metaMessages: [`Params: (${u(t)})`, `Data:   ${e} (${n} bytes)`],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `AbiParameters.DataSizeTooSmallError`,
        });
    }
  },
  Lp = class extends q {
    constructor() {
      super(`Cannot decode zero data ("0x") with ABI parameters.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `AbiParameters.ZeroDataError`,
        });
    }
  },
  Rp = class extends q {
    constructor({ expectedLength: e, givenLength: t, type: n }) {
      super(
        `Array length mismatch for type \`${n}\`. Expected: \`${e}\`. Given: \`${t}\`.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `AbiParameters.ArrayLengthMismatchError`,
        });
    }
  },
  zp = class extends q {
    constructor({ expectedSize: e, value: t }) {
      super(
        `Size of bytes "${t}" (bytes${rl(
          t
        )}) does not match expected size (bytes${e}).`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `AbiParameters.BytesSizeMismatchError`,
        });
    }
  },
  Bp = class extends q {
    constructor({ expectedLength: e, givenLength: t }) {
      super(
        [
          `ABI encoding parameters/values length mismatch.`,
          `Expected length (parameters): ${e}`,
          `Given length (values): ${t}`,
        ].join(`
`)
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `AbiParameters.LengthMismatchError`,
        });
    }
  },
  Vp = class extends q {
    constructor(e) {
      super(`Value \`${e}\` is not a valid array.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `AbiParameters.InvalidArrayError`,
        });
    }
  },
  Hp = class extends q {
    constructor(e) {
      super(`Type \`${e}\` is not a valid ABI Type.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `AbiParameters.InvalidTypeError`,
        });
    }
  },
  X = BigInt(0),
  Z = BigInt(1),
  Up = BigInt(2),
  Wp = BigInt(3),
  Gp = BigInt(4),
  Kp = BigInt(5),
  qp = BigInt(8);
function Q(e, t) {
  let n = e % t;
  return n >= X ? n : t + n;
}
function Jp(e, t, n) {
  let r = e;
  for (; t-- > X; ) (r *= r), (r %= n);
  return r;
}
function Yp(e, t) {
  if (e === X) throw Error(`invert: expected non-zero number`);
  if (t <= X) throw Error(`invert: expected positive modulus, got ` + t);
  let n = Q(e, t),
    r = t,
    i = X,
    a = Z,
    o = Z,
    s = X;
  for (; n !== X; ) {
    let e = r / n,
      t = r % n,
      c = i - o * e,
      l = a - s * e;
    (r = n), (n = t), (i = o), (a = s), (o = c), (s = l);
  }
  if (r !== Z) throw Error(`invert: does not exist`);
  return Q(i, t);
}
function Xp(e, t) {
  let n = (e.ORDER + Z) / Gp,
    r = e.pow(t, n);
  if (!e.eql(e.sqr(r), t)) throw Error(`Cannot find square root`);
  return r;
}
function Zp(e, t) {
  let n = (e.ORDER - Kp) / qp,
    r = e.mul(t, Up),
    i = e.pow(r, n),
    a = e.mul(t, i),
    o = e.mul(e.mul(a, Up), i),
    s = e.mul(a, e.sub(o, e.ONE));
  if (!e.eql(e.sqr(s), t)) throw Error(`Cannot find square root`);
  return s;
}
function Qp(e) {
  if (e < BigInt(3)) throw Error(`sqrt is not defined for small field`);
  let t = e - Z,
    n = 0;
  for (; t % Up === X; ) (t /= Up), n++;
  let r = Up,
    i = om(e);
  for (; im(i, r) === 1; )
    if (r++ > 1e3) throw Error(`Cannot find square root: probably non-prime P`);
  if (n === 1) return Xp;
  let a = i.pow(r, t),
    o = (t + Z) / Up;
  return function (e, r) {
    if (e.is0(r)) return r;
    if (im(e, r) !== 1) throw Error(`Cannot find square root`);
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
      let r = Z << BigInt(i - t - 1),
        a = e.pow(s, r);
      (i = t), (s = e.sqr(a)), (c = e.mul(c, s)), (l = e.mul(l, a));
    }
    return l;
  };
}
function $p(e) {
  return e % Gp === Wp ? Xp : e % qp === Kp ? Zp : Qp(e);
}
var em = [
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
function tm(e) {
  return lc(
    e,
    em.reduce((e, t) => ((e[t] = `function`), e), {
      ORDER: `bigint`,
      MASK: `bigint`,
      BYTES: `isSafeInteger`,
      BITS: `isSafeInteger`,
    })
  );
}
function nm(e, t, n) {
  if (n < X) throw Error(`invalid exponent, negatives unsupported`);
  if (n === X) return e.ONE;
  if (n === Z) return t;
  let r = e.ONE,
    i = t;
  for (; n > X; ) n & Z && (r = e.mul(r, i)), (i = e.sqr(i)), (n >>= Z);
  return r;
}
function rm(e, t, n = !1) {
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
function im(e, t) {
  let n = (e.ORDER - Z) / Up,
    r = e.pow(t, n),
    i = e.eql(r, e.ONE),
    a = e.eql(r, e.ZERO),
    o = e.eql(r, e.neg(e.ONE));
  if (!i && !a && !o) throw Error(`invalid Legendre symbol result`);
  return i ? 1 : a ? 0 : -1;
}
function am(e, t) {
  t !== void 0 && bn(t);
  let n = t === void 0 ? e.toString(2).length : t;
  return { nBitLength: n, nByteLength: Math.ceil(n / 8) };
}
function om(e, t, n = !1, r = {}) {
  if (e <= X) throw Error(`invalid field: expected ORDER > 0, got ` + e);
  let { nBitLength: i, nByteLength: a } = am(e, t);
  if (a > 2048) throw Error(`invalid field: expected ORDER of <= 2048 bytes`);
  let o,
    s = Object.freeze({
      ORDER: e,
      isLE: n,
      BITS: i,
      BYTES: a,
      MASK: ic(i),
      ZERO: X,
      ONE: Z,
      create: (t) => Q(t, e),
      isValid: (t) => {
        if (typeof t != `bigint`)
          throw Error(
            `invalid field element: expected bigint, got ` + typeof t
          );
        return X <= t && t < e;
      },
      is0: (e) => e === X,
      isOdd: (e) => (e & Z) === Z,
      neg: (t) => Q(-t, e),
      eql: (e, t) => e === t,
      sqr: (t) => Q(t * t, e),
      add: (t, n) => Q(t + n, e),
      sub: (t, n) => Q(t - n, e),
      mul: (t, n) => Q(t * n, e),
      pow: (e, t) => nm(s, e, t),
      div: (t, n) => Q(t * Yp(n, e), e),
      sqrN: (e) => e * e,
      addN: (e, t) => e + t,
      subN: (e, t) => e - t,
      mulN: (e, t) => e * t,
      inv: (t) => Yp(t, e),
      sqrt: r.sqrt || ((t) => ((o ||= $p(e)), o(s, t))),
      toBytes: (e) => (n ? Zs(e, a) : Xs(e, a)),
      fromBytes: (e) => {
        if (e.length !== a)
          throw Error(
            `Field.fromBytes: expected ` + a + ` bytes, got ` + e.length
          );
        return n ? Ys(e) : Js(e);
      },
      invertBatch: (e) => rm(s, e),
      cmov: (e, t, n) => (n ? t : e),
    });
  return Object.freeze(s);
}
function sm(e) {
  if (typeof e != `bigint`) throw Error(`field order must be bigint`);
  let t = e.toString(2).length;
  return Math.ceil(t / 8);
}
function cm(e) {
  let t = sm(e);
  return t + Math.ceil(t / 2);
}
function lm(e, t, n = !1) {
  let r = e.length,
    i = sm(t),
    a = cm(t);
  if (r < 16 || r < a || r > 1024)
    throw Error(`expected ` + a + `-1024 bytes of input, got ` + r);
  let o = Q(n ? Ys(e) : Js(e), t - Z) + Z;
  return n ? Zs(o, i) : Xs(o, i);
}
var um = BigInt(0),
  dm = BigInt(1);
function fm(e, t) {
  let n = t.negate();
  return e ? n : t;
}
function pm(e, t) {
  if (!Number.isSafeInteger(e) || e <= 0 || e > t)
    throw Error(`invalid window size, expected [1..` + t + `], got W=` + e);
}
function mm(e, t) {
  pm(e, t);
  let n = Math.ceil(t / e) + 1,
    r = 2 ** (e - 1),
    i = 2 ** e;
  return {
    windows: n,
    windowSize: r,
    mask: ic(e),
    maxNumber: i,
    shiftBy: BigInt(e),
  };
}
function hm(e, t, n) {
  let { windowSize: r, mask: i, maxNumber: a, shiftBy: o } = n,
    s = Number(e & i),
    c = e >> o;
  s > r && ((s -= a), (c += dm));
  let l = t * r,
    u = l + Math.abs(s) - 1,
    d = s === 0,
    f = s < 0,
    p = t % 2 != 0;
  return { nextN: c, offset: u, isZero: d, isNeg: f, isNegF: p, offsetF: l };
}
function gm(e, t) {
  if (!Array.isArray(e)) throw Error(`array expected`);
  e.forEach((e, n) => {
    if (!(e instanceof t)) throw Error(`invalid point at index ` + n);
  });
}
function _m(e, t) {
  if (!Array.isArray(e)) throw Error(`array of scalars expected`);
  e.forEach((e, n) => {
    if (!t.isValid(e)) throw Error(`invalid scalar at index ` + n);
  });
}
var vm = new WeakMap(),
  ym = new WeakMap();
function bm(e) {
  return ym.get(e) || 1;
}
function xm(e, t) {
  return {
    constTimeNegate: fm,
    hasPrecomputes(e) {
      return bm(e) !== 1;
    },
    unsafeLadder(t, n, r = e.ZERO) {
      let i = t;
      for (; n > um; ) n & dm && (r = r.add(i)), (i = i.double()), (n >>= dm);
      return r;
    },
    precomputeWindow(e, n) {
      let { windows: r, windowSize: i } = mm(n, t),
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
        s = mm(n, t);
      for (let e = 0; e < s.windows; e++) {
        let {
          nextN: t,
          offset: n,
          isZero: c,
          isNeg: l,
          isNegF: u,
          offsetF: d,
        } = hm(i, e, s);
        (i = t), c ? (o = o.add(fm(u, r[d]))) : (a = a.add(fm(l, r[n])));
      }
      return { p: a, f: o };
    },
    wNAFUnsafe(n, r, i, a = e.ZERO) {
      let o = mm(n, t);
      for (let e = 0; e < o.windows && i !== um; e++) {
        let { nextN: t, offset: n, isZero: s, isNeg: c } = hm(i, e, o);
        if (((i = t), !s)) {
          let e = r[n];
          a = a.add(c ? e.negate() : e);
        }
      }
      return a;
    },
    getPrecomputes(e, t, n) {
      let r = vm.get(t);
      return (
        r || ((r = this.precomputeWindow(t, e)), e !== 1 && vm.set(t, n(r))), r
      );
    },
    wNAFCached(e, t, n) {
      let r = bm(e);
      return this.wNAF(r, this.getPrecomputes(r, e, n), t);
    },
    wNAFCachedUnsafe(e, t, n, r) {
      let i = bm(e);
      return i === 1
        ? this.unsafeLadder(e, t, r)
        : this.wNAFUnsafe(i, this.getPrecomputes(i, e, n), t, r);
    },
    setWindowSize(e, n) {
      pm(n, t), ym.set(e, n), vm.delete(e);
    },
  };
}
function Sm(e, t, n, r) {
  gm(n, e), _m(r, t);
  let i = n.length,
    a = r.length;
  if (i !== a)
    throw Error(`arrays of points and scalars must have equal length`);
  let o = e.ZERO,
    s = rc(BigInt(i)),
    c = 1;
  s > 12 ? (c = s - 3) : s > 4 ? (c = s - 2) : s > 0 && (c = 2);
  let l = ic(c),
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
function Cm(e) {
  return (
    tm(e.Fp),
    lc(
      e,
      { n: `bigint`, h: `bigint`, Gx: `field`, Gy: `field` },
      { nBitLength: `isSafeInteger`, nByteLength: `isSafeInteger` }
    ),
    Object.freeze({ ...am(e.n, e.nBitLength), ...e, p: e.Fp.ORDER })
  );
}
function wm(e) {
  e.lowS !== void 0 && zs(`lowS`, e.lowS),
    e.prehash !== void 0 && zs(`prehash`, e.prehash);
}
function Tm(e) {
  let t = Cm(e);
  lc(
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
var Em = {
  Err: class extends Error {
    constructor(e = ``) {
      super(e);
    }
  },
  _tlv: {
    encode: (e, t) => {
      let { Err: n } = Em;
      if (e < 0 || e > 256) throw new n(`tlv.encode: wrong tag`);
      if (t.length & 1) throw new n(`tlv.encode: unpadded data`);
      let r = t.length / 2,
        i = Bs(r);
      if ((i.length / 2) & 128)
        throw new n(`tlv.encode: long form length too big`);
      let a = r > 127 ? Bs((i.length / 2) | 128) : ``;
      return Bs(e) + a + i + t;
    },
    decode(e, t) {
      let { Err: n } = Em,
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
      let { Err: t } = Em;
      if (e < Om) throw new t(`integer: negative integers are not allowed`);
      let n = Bs(e);
      if ((Number.parseInt(n[0], 16) & 8 && (n = `00` + n), n.length & 1))
        throw new t(`unexpected DER parsing assertion: unpadded hex`);
      return n;
    },
    decode(e) {
      let { Err: t } = Em;
      if (e[0] & 128) throw new t(`invalid signature integer: negative`);
      if (e[0] === 0 && !(e[1] & 128))
        throw new t(`invalid signature integer: unnecessary leading zero`);
      return Js(e);
    },
  },
  toSig(e) {
    let { Err: t, _int: n, _tlv: r } = Em,
      i = Qs(`signature`, e),
      { v: a, l: o } = r.decode(48, i);
    if (o.length) throw new t(`invalid signature: left bytes after parsing`);
    let { v: s, l: c } = r.decode(2, a),
      { v: l, l: u } = r.decode(2, c);
    if (u.length) throw new t(`invalid signature: left bytes after parsing`);
    return { r: n.decode(s), s: n.decode(l) };
  },
  hexFromSig(e) {
    let { _tlv: t, _int: n } = Em,
      r = t.encode(2, n.encode(e.r)) + t.encode(2, n.encode(e.s));
    return t.encode(48, r);
  },
};
function Dm(e, t) {
  return Ws(Xs(e, t));
}
var Om = BigInt(0),
  $ = BigInt(1),
  km = BigInt(3),
  Am = BigInt(4);
function jm(e) {
  let t = Tm(e),
    { Fp: n } = t,
    r = om(t.n, t.nBitLength),
    i =
      t.toBytes ||
      ((e, t, r) => {
        let i = t.toAffine();
        return $s(Uint8Array.from([4]), n.toBytes(i.x), n.toBytes(i.y));
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
  let c = n.mul(n.pow(t.a, km), Am),
    l = n.mul(n.sqr(t.b), BigInt(27));
  if (n.is0(n.add(c, l))) throw Error(`bad curve params: a or b`);
  function u(e) {
    return tc(e, $, t.n);
  }
  function d(e) {
    let {
      allowedPrivateKeyLengths: n,
      nByteLength: r,
      wrapPrivateKey: i,
      n: a,
    } = t;
    if (n && typeof e != `bigint`) {
      if ((Ls(e) && (e = Ws(e)), typeof e != `string` || !n.includes(e.length)))
        throw Error(`invalid private key`);
      e = e.padStart(r * 2, `0`);
    }
    let o;
    try {
      o = typeof e == `bigint` ? e : Js(Qs(`private key`, e, r));
    } catch {
      throw Error(
        `invalid private key, expected hex or ` + r + ` bytes, got ` + typeof e
      );
    }
    return i && (o = Q(o, a)), nc(`private key`, o, $, a), o;
  }
  function f(e) {
    if (!(e instanceof h)) throw Error(`ProjectivePoint expected`);
  }
  let p = uc((e, t) => {
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
    m = uc((e) => {
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
      let t = rm(
        n,
        e.map((e) => e.pz)
      );
      return e.map((e, n) => e.toAffine(t[n])).map(h.fromAffine);
    }
    static fromHex(e) {
      let t = h.fromAffine(a(Qs(`pointHex`, e)));
      return t.assertValidity(), t;
    }
    static fromPrivateKey(e) {
      return h.BASE.multiply(d(e));
    }
    static msm(e, t) {
      return Sm(h, r, e, t);
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
        i = n.mul(r, km),
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
        m = n.mul(t.b, km),
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
      nc(`scalar`, e, Om, i);
      let a = h.ZERO;
      if (e === Om) return a;
      if (this.is0() || e === $) return this;
      if (!r || v.hasPrecomputes(this))
        return v.wNAFCachedUnsafe(this, e, h.normalizeZ);
      let { k1neg: o, k1: s, k2neg: c, k2: l } = r.splitScalar(e),
        u = a,
        d = a,
        f = this;
      for (; s > Om || l > Om; )
        s & $ && (u = u.add(f)),
          l & $ && (d = d.add(f)),
          (f = f.double()),
          (s >>= $),
          (l >>= $);
      return (
        o && (u = u.negate()),
        c && (d = d.negate()),
        (d = new h(n.mul(d.px, r.beta), d.py, d.pz)),
        u.add(d)
      );
    }
    multiply(e) {
      let { endo: r, n: i } = t;
      nc(`scalar`, e, $, i);
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
          t === Om || t === $ || !e.equals(r)
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
      if (e === $) return !0;
      if (n) return n(h, this);
      throw Error(
        `isTorsionFree() has not been declared for the elliptic curve`
      );
    }
    clearCofactor() {
      let { h: e, clearCofactor: n } = t;
      return e === $ ? this : n ? n(h, this) : this.multiplyUnsafe(t.h);
    }
    toRawBytes(e = !0) {
      return zs(`isCompressed`, e), this.assertValidity(), i(h, this, e);
    }
    toHex(e = !0) {
      return zs(`isCompressed`, e), Ws(this.toRawBytes(e));
    }
  }
  (h.BASE = new h(t.Gx, t.Gy, n.ONE)), (h.ZERO = new h(n.ZERO, n.ONE, n.ZERO));
  let { endo: g, nBitLength: _ } = t,
    v = xm(h, g ? Math.ceil(_ / 2) : _);
  return {
    CURVE: t,
    ProjectivePoint: h,
    normPrivateKeyToScalar: d,
    weierstrassEquation: o,
    isWithinCurveOrder: u,
  };
}
function Mm(e) {
  let t = Cm(e);
  return (
    lc(
      t,
      { hash: `hash`, hmac: `function`, randomBytes: `function` },
      { bits2int: `function`, bits2int_modN: `function`, lowS: `boolean` }
    ),
    Object.freeze({ lowS: !0, ...t })
  );
}
function Nm(e) {
  let t = Mm(e),
    { Fp: n, n: r, nByteLength: i, nBitLength: a } = t,
    o = n.BYTES + 1,
    s = 2 * n.BYTES + 1;
  function c(e) {
    return Q(e, r);
  }
  function l(e) {
    return Yp(e, r);
  }
  let {
    ProjectivePoint: u,
    normPrivateKeyToScalar: d,
    weierstrassEquation: f,
    isWithinCurveOrder: p,
  } = jm({
    ...t,
    toBytes(e, t, r) {
      let i = t.toAffine(),
        a = n.toBytes(i.x),
        o = $s;
      return (
        zs(`isCompressed`, r),
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
        let e = Js(i);
        if (!tc(e, $, n.ORDER)) throw Error(`Point is not on curve`);
        let t = f(e),
          a;
        try {
          a = n.sqrt(t);
        } catch (e) {
          let t = e instanceof Error ? `: ` + e.message : ``;
          throw Error(`Point is not on curve` + t);
        }
        let o = (a & $) === $;
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
    return e > r >> $;
  }
  function h(e) {
    return m(e) ? c(-e) : e;
  }
  let g = (e, t, n) => Js(e.slice(t, n));
  class _ {
    constructor(e, t, n) {
      nc(`r`, e, $, r),
        nc(`s`, t, $, r),
        (this.r = e),
        (this.s = t),
        n != null && (this.recovery = n),
        Object.freeze(this);
    }
    static fromCompact(e) {
      let t = i;
      return (
        (e = Qs(`compactSignature`, e, t * 2)),
        new _(g(e, 0, t), g(e, t, 2 * t))
      );
    }
    static fromDER(e) {
      let { r: t, s: n } = Em.toSig(Qs(`DER`, e));
      return new _(t, n);
    }
    assertValidity() {}
    addRecoveryBit(e) {
      return new _(this.r, this.s, e);
    }
    recoverPublicKey(e) {
      let { r, s: i, recovery: a } = this,
        o = C(Qs(`msgHash`, e));
      if (a == null || ![0, 1, 2, 3].includes(a))
        throw Error(`recovery id invalid`);
      let s = a === 2 || a === 3 ? r + t.n : r;
      if (s >= n.ORDER) throw Error(`recovery id 2 or 3 invalid`);
      let d = a & 1 ? `03` : `02`,
        f = u.fromHex(d + Dm(s, n.BYTES)),
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
      return qs(this.toDERHex());
    }
    toDERHex() {
      return Em.hexFromSig(this);
    }
    toCompactRawBytes() {
      return qs(this.toCompactHex());
    }
    toCompactHex() {
      let e = i;
      return Dm(this.r, e) + Dm(this.s, e);
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
      let e = cm(t.n);
      return lm(t.randomBytes(e), t.n);
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
    let r = Qs(`key`, e).length,
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
        let t = Js(e),
          n = e.length * 8 - a;
        return n > 0 ? t >> BigInt(n) : t;
      },
    C =
      t.bits2int_modN ||
      function (e) {
        return c(S(e));
      },
    w = ic(a);
  function ee(e) {
    return nc(`num < 2^` + a, e, Om, w), Xs(e, i);
  }
  function te(e, r, i = ne) {
    if ([`recovered`, `canonical`].some((e) => e in i))
      throw Error(`sign() legacy options not supported`);
    let { hash: a, randomBytes: o } = t,
      { lowS: s, prehash: f, extraEntropy: g } = i;
    (s ??= !0),
      (e = Qs(`msgHash`, e)),
      wm(i),
      f && (e = Qs(`prehashed msgHash`, a(e)));
    let v = C(e),
      y = d(r),
      b = [ee(y), ee(v)];
    if (g != null && g !== !1) {
      let e = g === !0 ? o(n.BYTES) : g;
      b.push(Qs(`extraEntropy`, e));
    }
    let x = $s(...b),
      w = v;
    function te(e) {
      let t = S(e);
      if (!p(t)) return;
      let n = l(t),
        r = u.BASE.multiply(t).toAffine(),
        i = c(r.x);
      if (i === Om) return;
      let a = c(n * c(w + i * y));
      if (a === Om) return;
      let o = (r.x === i ? 0 : 2) | Number(r.y & $),
        d = a;
      return s && m(a) && ((d = h(a)), (o ^= 1)), new _(i, d, o);
    }
    return { seed: x, k2sig: te };
  }
  let ne = { lowS: t.lowS, prehash: !1 },
    re = { lowS: t.lowS, prehash: !1 };
  function ie(e, n, r = ne) {
    let { seed: i, k2sig: a } = te(e, n, r),
      o = t;
    return sc(o.hash.outputLen, o.nByteLength, o.hmac)(i, a);
  }
  u.BASE._setWindowSize(8);
  function ae(e, n, r, i = re) {
    let a = e;
    (n = Qs(`msgHash`, n)), (r = Qs(`publicKey`, r));
    let { lowS: o, prehash: s, format: d } = i;
    if ((wm(i), `strict` in i))
      throw Error(`options.strict was renamed to lowS`);
    if (d !== void 0 && d !== `compact` && d !== `der`)
      throw Error(`format must be compact or der`);
    let f = typeof a == `string` || Ls(a),
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
          if (!(e instanceof Em.Err)) throw e;
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
    sign: ie,
    verify: ae,
    ProjectivePoint: u,
    Signature: _,
    utils: v,
  };
}
function Pm(e) {
  return { hash: e, hmac: (t, ...n) => Kf(e, t, Fn(...n)), randomBytes: Rn };
}
function Fm(e, t) {
  let n = (t) => Nm({ ...e, ...Pm(t) });
  return { ...n(t), create: n };
}
var Im = e({ secp256k1: () => Gm }),
  Lm = BigInt(
    `0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f`
  ),
  Rm = BigInt(
    `0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141`
  ),
  zm = BigInt(0),
  Bm = BigInt(1),
  Vm = BigInt(2),
  Hm = (e, t) => (e + t / Vm) / t;
function Um(e) {
  let t = Lm,
    n = BigInt(3),
    r = BigInt(6),
    i = BigInt(11),
    a = BigInt(22),
    o = BigInt(23),
    s = BigInt(44),
    c = BigInt(88),
    l = (e * e * e) % t,
    u = (l * l * e) % t,
    d = (Jp((Jp((Jp(u, n, t) * u) % t, n, t) * u) % t, Vm, t) * l) % t,
    f = (Jp(d, i, t) * d) % t,
    p = (Jp(f, a, t) * f) % t,
    m = (Jp(p, s, t) * p) % t,
    h = Jp(
      (Jp(
        (Jp(
          (Jp((Jp((Jp(m, c, t) * m) % t, s, t) * p) % t, n, t) * u) % t,
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
      Vm,
      t
    );
  if (!Wm.eql(Wm.sqr(h), e)) throw Error(`Cannot find square root`);
  return h;
}
var Wm = om(Lm, void 0, void 0, { sqrt: Um }),
  Gm = Fm(
    {
      a: zm,
      b: BigInt(7),
      Fp: Wm,
      n: Rm,
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
          let t = Rm,
            n = BigInt(`0x3086d221a7d46bcde86c90e49284eb15`),
            r = -Bm * BigInt(`0xe4437ed6010e88286f547fa90abfe4c3`),
            i = BigInt(`0x114ca50f7a8e2f3f657c1108d9d44cfd8`),
            a = n,
            o = BigInt(`0x100000000000000000000000000000000`),
            s = Hm(a * e, t),
            c = Hm(-r * e, t),
            l = Q(e - s * n - c * i, t),
            u = Q(-s * r - c * a, t),
            d = l > o,
            f = u > o;
          if ((d && (l = t - l), f && (u = t - u), l > o || u > o))
            throw Error(`splitScalar: Endomorphism failed, k=` + e);
          return { k1neg: d, k1: l, k2neg: f, k2: u };
        },
      },
    },
    Zo
  );
function Km(e, t = {}) {
  let { recovered: n } = t;
  if (e.r === void 0 || e.s === void 0 || (n && e.yParity === void 0))
    throw new th({ signature: e });
  if (e.r < 0n || e.r > ip) throw new nh({ value: e.r });
  if (e.s < 0n || e.s > ip) throw new rh({ value: e.s });
  if (typeof e.yParity == `number` && e.yParity !== 0 && e.yParity !== 1)
    throw new ih({ value: e.yParity });
}
function qm(e) {
  return Jm(Qc(e));
}
function Jm(e) {
  if (e.length !== 130 && e.length !== 132) throw new eh({ signature: e });
  let t = BigInt(nl(e, 0, 32)),
    n = BigInt(nl(e, 32, 64)),
    r = (() => {
      let t = Number(`0x${e.slice(130)}`);
      if (!Number.isNaN(t))
        try {
          return $m(t);
        } catch {
          throw new ih({ value: t });
        }
    })();
  return r === void 0 ? { r: t, s: n } : { r: t, s: n, yParity: r };
}
function Ym(e) {
  if (e.r !== void 0 && e.s !== void 0) return Xm(e);
}
function Xm(e) {
  let t =
    typeof e == `string`
      ? Jm(e)
      : e instanceof Uint8Array
      ? qm(e)
      : typeof e.r == `string`
      ? Qm(e)
      : e.v
      ? Zm(e)
      : {
          r: e.r,
          s: e.s,
          ...(e.yParity === void 0 ? {} : { yParity: e.yParity }),
        };
  return Km(t), t;
}
function Zm(e) {
  return { r: e.r, s: e.s, yParity: $m(e.v) };
}
function Qm(e) {
  let t = (() => {
    let t = e.v ? Number(e.v) : void 0,
      n = e.yParity ? Number(e.yParity) : void 0;
    if (
      (typeof t == `number` && typeof n != `number` && (n = $m(t)),
      typeof n != `number`)
    )
      throw new ih({ value: e.yParity });
    return n;
  })();
  return { r: BigInt(e.r), s: BigInt(e.s), yParity: t };
}
function $m(e) {
  if (e === 0 || e === 27) return 0;
  if (e === 1 || e === 28) return 1;
  if (e >= 35) return +(e % 2 == 0);
  throw new ah({ value: e });
}
var eh = class extends q {
    constructor({ signature: e }) {
      super(`Value \`${e}\` is an invalid signature size.`, {
        metaMessages: [
          `Expected: 64 bytes or 65 bytes.`,
          `Received ${rl(Xc(e))} bytes.`,
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
  th = class extends q {
    constructor({ signature: e }) {
      super(
        `Signature \`${Ec(
          e
        )}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Signature.MissingPropertiesError`,
        });
    }
  },
  nh = class extends q {
    constructor({ value: e }) {
      super(
        `Value \`${e}\` is an invalid r value. r must be a positive integer less than 2^256.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Signature.InvalidRError`,
        });
    }
  },
  rh = class extends q {
    constructor({ value: e }) {
      super(
        `Value \`${e}\` is an invalid s value. s must be a positive integer less than 2^256.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `Signature.InvalidSError`,
        });
    }
  },
  ih = class extends q {
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
  ah = class extends q {
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
function oh(e, t = {}) {
  return typeof e.chainId == `string` ? sh(e) : { ...e, ...t.signature };
}
function sh(e) {
  let { address: t, chainId: n, nonce: r } = e,
    i = Ym(e);
  return { address: t, chainId: Number(n), nonce: BigInt(r), ...i };
}
var ch = Fp(
  `(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data`
);
function lh(e) {
  if (typeof e == `string`) {
    if (
      nl(e, -32) !==
      `0x8010801080108010801080108010801080108010801080108010801080108010`
    )
      throw new fh(e);
  } else Km(e.authorization);
}
function uh(e) {
  lh(e);
  let t = al(nl(e, -64, -32)),
    n = nl(e, -t - 64, -64),
    r = nl(e, 0, -t - 64),
    [i, a, o] = Mp(ch, n);
  return {
    authorization: oh({
      address: i.delegation,
      chainId: Number(i.chainId),
      nonce: i.nonce,
      yParity: i.yParity,
      r: i.r,
      s: i.s,
    }),
    signature: r,
    ...(o && o !== `0x` ? { data: o, to: a } : {}),
  };
}
function dh(e) {
  try {
    return lh(e), !0;
  } catch {
    return !1;
  }
}
var fh = class extends q {
  constructor(e) {
    super(`Value \`${e}\` is an invalid ERC-8010 wrapped signature.`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: `SignatureErc8010.InvalidWrappedSignatureError`,
      });
  }
};
function ph(e) {
  let { address: t, data: n, signature: r, to: i = `hex` } = e,
    a = R([
      wr(
        [{ type: `address` }, { type: `bytes` }, { type: `bytes` }],
        [t, n, r]
      ),
      Uf,
    ]);
  return i === `hex` ? a : P(a);
}
function mh(e, t) {
  return xi(e, t);
}
function hh(e, t) {
  return wi(e, t);
}
function gh(e) {
  return e.map((e) => ({ ...e, value: BigInt(e.value) }));
}
function _h(e) {
  return {
    ...e,
    balance: e.balance ? BigInt(e.balance) : void 0,
    nonce: e.nonce ? A(e.nonce) : void 0,
    storageProof: e.storageProof ? gh(e.storageProof) : void 0,
  };
}
async function vh(
  e,
  {
    address: t,
    blockHash: n,
    blockNumber: r,
    blockTag: i = `latest`,
    requireCanonical: a,
    storageKeys: o,
  }
) {
  let s = Mo({
    blockHash: n,
    blockNumber: r,
    blockTag: i,
    requireCanonical: a,
  });
  return _h(await e.request({ method: `eth_getProof`, params: [t, o, s] }));
}
async function yh(e, { hash: t }) {
  let n = await e.request(
    { method: `eth_getRawTransactionByHash`, params: [t] },
    { dedupe: !0 }
  );
  if (!n) throw new zi({ hash: t });
  return n;
}
async function bh(
  e,
  {
    address: t,
    blockHash: n,
    blockNumber: r,
    blockTag: i = `latest`,
    requireCanonical: a,
    slot: o,
  }
) {
  let s = Mo({
    blockHash: n,
    blockNumber: r,
    blockTag: i,
    requireCanonical: a,
  });
  return await e.request({ method: `eth_getStorageAt`, params: [t, o, s] });
}
async function xh(
  e,
  {
    blockHash: t,
    blockNumber: n,
    blockTag: r,
    hash: i,
    index: a,
    sender: o,
    nonce: s,
  }
) {
  let c = r || `latest`,
    l = n === void 0 ? void 0 : N(n),
    u = null;
  if (
    (i
      ? (u = await e.request(
          { method: `eth_getTransactionByHash`, params: [i] },
          { dedupe: !0 }
        ))
      : t
      ? (u = await e.request(
          {
            method: `eth_getTransactionByBlockHashAndIndex`,
            params: [t, N(a)],
          },
          { dedupe: !0 }
        ))
      : (l || c) && typeof a == `number`
      ? (u = await e.request(
          {
            method: `eth_getTransactionByBlockNumberAndIndex`,
            params: [l || c, N(a)],
          },
          { dedupe: !!l }
        ))
      : o &&
        typeof s == `number` &&
        (u = await e.request(
          { method: `eth_getTransactionBySenderAndNonce`, params: [o, N(s)] },
          { dedupe: !0 }
        )),
    !u)
  )
    throw new zi({
      blockHash: t,
      blockNumber: n,
      blockTag: c,
      hash: i,
      index: a,
    });
  return (e.chain?.formatters?.transaction?.format || xo)(u, `getTransaction`);
}
async function Sh(e, { hash: t, transactionReceipt: n }) {
  let [r, i] = await Promise.all([
      T(e, uu, `getBlockNumber`)({}),
      t ? T(e, xh, `getTransaction`)({ hash: t }) : void 0,
    ]),
    a = n?.blockNumber || i?.blockNumber;
  return a ? r - a + 1n : 0n;
}
async function Ch(e, { hash: t }) {
  let n = await e.request(
    { method: `eth_getTransactionReceipt`, params: [t] },
    { dedupe: !0 }
  );
  if (!n) throw new Bi({ hash: t });
  return (e.chain?.formatters?.transactionReceipt?.format || wu)(
    n,
    `getTransactionReceipt`
  );
}
async function wh(e, t) {
  let {
      account: n,
      authorizationList: r,
      allowFailure: i = !0,
      blockHash: a,
      blockNumber: o,
      blockOverrides: s,
      blockTag: c,
      requireCanonical: l,
      stateOverride: u,
    } = t,
    d = t.contracts,
    f = typeof e.batch?.multicall == `object` ? e.batch.multicall : {},
    p = t.batchSize ?? f.batchSize ?? 1024,
    m = t.deployless ?? f.deployless ?? !1,
    h = (() => {
      if (t.multicallAddress) return t.multicallAddress;
      if (m) return null;
      if (e.chain)
        return Il({ blockNumber: o, chain: e.chain, contract: `multicall3` });
      throw Error(`client chain not configured. multicallAddress is required.`);
    })(),
    g = [[]],
    _ = 0,
    v = 0;
  for (let e = 0; e < d.length; e++) {
    let { abi: t, address: r, args: a, functionName: o } = d[e];
    try {
      let e = B({ abi: t, args: a, functionName: o });
      (v += (e.length - 2) / 2),
        p > 0 &&
          v > p &&
          g[_].length > 0 &&
          (_++, (v = (e.length - 2) / 2), (g[_] = [])),
        (g[_] = [...g[_], { allowFailure: !0, callData: e, target: r }]);
    } catch (e) {
      let s = Ma(e, {
        abi: t,
        address: r,
        args: a,
        docsPath: `/docs/contract/multicall`,
        functionName: o,
        sender: n,
      });
      if (!i) throw s;
      g[_] = [...g[_], { allowFailure: !0, callData: `0x`, target: r }];
    }
  }
  let y = !!e.batch?.multicall,
    b = y ? g.flatMap((e) => e.map((e) => [e])) : g,
    x = await Promise.allSettled(
      b.map((t) =>
        y
          ? Th(e, {
              account: n,
              authorizationList: r,
              batchSize: p,
              blockHash: a,
              blockNumber: o,
              blockOverrides: s,
              blockTag: c,
              call: t[0],
              multicallAddress: h,
              requireCanonical: l,
              stateOverride: u,
            }).then((e) => [e])
          : T(
              e,
              Y,
              `readContract`
            )({
              ...(h === null ? { code: Ol } : { address: h }),
              abi: hl,
              account: n,
              args: [t],
              authorizationList: r,
              blockHash: a,
              blockNumber: o,
              blockOverrides: s,
              blockTag: c,
              functionName: `aggregate3`,
              requireCanonical: l,
              stateOverride: u,
            })
      )
    ),
    S = [];
  for (let e = 0; e < x.length; e++) {
    let t = x[e];
    if (t.status === `rejected`) {
      if (!i) throw t.reason;
      for (let n = 0; n < b[e].length; n++)
        S.push({ status: `failure`, error: t.reason, result: void 0 });
      continue;
    }
    let n = t.value;
    for (let t = 0; t < n.length; t++) {
      let { returnData: r, success: a } = n[t],
        { callData: o } = b[e][t],
        { abi: s, address: c, functionName: l, args: u } = d[S.length];
      try {
        if (o === `0x`) throw new rt();
        if (!a) throw new Qi({ data: r });
        let e = Ps({ abi: s, args: u, data: r, functionName: l });
        S.push(i ? { result: e, status: `success` } : e);
      } catch (e) {
        let t = Ma(e, {
          abi: s,
          address: c,
          args: u,
          docsPath: `/docs/contract/multicall`,
          functionName: l,
        });
        if (!i) throw t;
        S.push({ error: t, result: void 0, status: `failure` });
      }
    }
  }
  if (S.length !== d.length) throw new D(`multicall results mismatch`);
  return S;
}
async function Th(e, t) {
  let { batchSize: n, call: r, multicallAddress: i, ...a } = t,
    { wait: o = 0 } =
      typeof e.batch?.multicall == `object` ? e.batch.multicall : {},
    { schedule: s } = Bl({
      id: V([`multicall`, e.uid, n, i, a]),
      wait: o,
      shouldSplitBatch(e) {
        return (
          n !== 0 &&
          e.reduce((e, { callData: t }) => e + (t.length - 2) / 2, 0) > n
        );
      },
      fn: (t) =>
        T(
          e,
          Y,
          `readContract`
        )({
          ...(i === null ? { code: Ol } : { address: i }),
          ...a,
          abi: hl,
          args: [t],
          functionName: `aggregate3`,
        }),
    }),
    [c] = await s(r);
  return c;
}
async function Eh(e, t) {
  let {
    blockNumber: n,
    blockTag: r = e.experimental_blockTag ?? `latest`,
    blocks: i,
    returnFullTransactions: a,
    traceTransfers: o,
    validation: s,
  } = t;
  try {
    let t = [];
    for (let e of i) {
      let n = e.blockOverrides ? ml(e.blockOverrides) : void 0,
        r = e.calls.map((e) => {
          let t = e,
            n = t.account ? z(t.account) : void 0,
            r = t.abi ? B(t) : t.data,
            i = {
              ...t,
              account: n,
              data: t.dataSuffix ? mr([r || `0x`, t.dataSuffix]) : r,
              from: t.from ?? n?.address,
            };
          return ho(i), co(i);
        }),
        i = e.stateOverrides ? po(e.stateOverrides) : void 0;
      t.push({ blockOverrides: n, calls: r, stateOverrides: i });
    }
    let c = (typeof n == `bigint` ? N(n) : void 0) || r;
    return (
      await e.request({
        method: `eth_simulateV1`,
        params: [
          {
            blockStateCalls: t,
            returnFullTransactions: a,
            traceTransfers: o,
            validation: s,
          },
          c,
        ],
      })
    ).map((e, t) => ({
      ...wo(e),
      calls: e.calls.map((e, n) => {
        let { abi: r, args: a, functionName: o, to: s } = i[t].calls[n],
          c = e.error?.data ?? e.returnData,
          l = BigInt(e.gasUsed),
          u = e.logs?.map((e) => Ts(e)),
          d = e.status === `0x1` ? `success` : `failure`,
          f =
            r && d === `success` && c !== `0x`
              ? Ps({ abi: r, data: c, functionName: o })
              : null,
          p = (() => {
            if (d === `success`) return;
            let e;
            if (
              (c === `0x` ? (e = new rt()) : c && (e = new Qi({ data: c })), e)
            )
              return Ma(e, {
                abi: r ?? [],
                address: s ?? `0x`,
                args: a,
                functionName: o ?? `<unknown>`,
              });
          })();
        return {
          data: c,
          gasUsed: l,
          logs: u,
          status: d,
          ...(d === `success` ? { result: f } : { error: p }),
        };
      }),
    }));
  } catch (e) {
    let t = e,
      n = ro(t, {});
    throw n instanceof no ? t : n;
  }
}
function Dh(e) {
  let t = !0,
    n = ``,
    r = 0,
    i = ``,
    a = !1;
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    if (
      ([`(`, `)`, `,`].includes(s) && (t = !0),
      s === `(` && r++,
      s === `)` && r--,
      t)
    ) {
      if (r === 0) {
        if (s === ` ` && [`event`, `function`, `error`, ``].includes(i)) i = ``;
        else if (((i += s), s === `)`)) {
          a = !0;
          break;
        }
        continue;
      }
      if (s === ` `) {
        e[o - 1] !== `,` && n !== `,` && n !== `,(` && ((n = ``), (t = !1));
        continue;
      }
      (i += s), (n += s);
    }
  }
  if (!a) throw new q(`Unable to normalize signature.`);
  return i;
}
function Oh(e, t) {
  let n = typeof e,
    r = t.type;
  switch (r) {
    case `address`:
      return Zf(e, { strict: !1 });
    case `bool`:
      return n === `boolean`;
    case `function`:
      return n === `string`;
    case `string`:
      return n === `string`;
    default:
      return r === `tuple` && `components` in t
        ? Object.values(t.components).every((t, n) =>
            Oh(Object.values(e)[n], t)
          )
        : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
            r
          )
        ? n === `number` || n === `bigint`
        : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)
        ? n === `string` || e instanceof Uint8Array
        : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)
        ? Array.isArray(e) &&
          e.every((e) =>
            Oh(e, { ...t, type: r.replace(/(\[[0-9]{0,}\])$/, ``) })
          )
        : !1;
  }
}
function kh(e, t, n) {
  for (let r in e) {
    let i = e[r],
      a = t[r];
    if (
      i.type === `tuple` &&
      a.type === `tuple` &&
      `components` in i &&
      `components` in a
    )
      return kh(i.components, a.components, n[r]);
    let o = [i.type, a.type];
    if (
      (o.includes(`address`) && o.includes(`bytes20`)) ||
      (((o.includes(`address`) && o.includes(`string`)) ||
        (o.includes(`address`) && o.includes(`bytes`))) &&
        Zf(n[r], { strict: !1 }))
    )
      return o;
  }
}
function Ah(e, t = {}) {
  let { prepare: n = !0 } = t,
    r = Array.isArray(e) || typeof e == `string` ? Ge(e) : e;
  return { ...r, ...(n ? { hash: Ph(r) } : {}) };
}
function jh(e, t, n) {
  let { args: r = [], prepare: i = !0 } = n ?? {},
    a = ol(t, { strict: !1 }),
    o = e.filter((e) =>
      a
        ? e.type === `function` || e.type === `error`
          ? Mh(e) === nl(t, 0, 4)
          : e.type === `event` && Ph(e) === t
        : `name` in e && e.name === t
    );
  if (o.length === 0) throw new Ih({ name: t });
  if (o.length === 1) return { ...o[0], ...(i ? { hash: Ph(o[0]) } : {}) };
  let s;
  for (let e of o)
    if (`inputs` in e) {
      if (!r || r.length === 0) {
        if (!e.inputs || e.inputs.length === 0)
          return { ...e, ...(i ? { hash: Ph(e) } : {}) };
        continue;
      }
      if (
        e.inputs &&
        e.inputs.length !== 0 &&
        e.inputs.length === r.length &&
        r.every((t, n) => {
          let r = `inputs` in e && e.inputs[n];
          return r ? Oh(t, r) : !1;
        })
      ) {
        if (s && `inputs` in s && s.inputs) {
          let t = kh(e.inputs, s.inputs, r);
          if (t)
            throw new Fh(
              { abiItem: e, type: t[0] },
              { abiItem: s, type: t[1] }
            );
        }
        s = e;
      }
    }
  let c = (() => {
    if (s) return s;
    let [e, ...t] = o;
    return { ...e, overloads: t };
  })();
  if (!c) throw new Ih({ name: t });
  return { ...c, ...(i ? { hash: Ph(c) } : {}) };
}
function Mh(...e) {
  return nl(
    Ph(
      (() => {
        if (Array.isArray(e[0])) {
          let [t, n] = e;
          return jh(t, n);
        }
        return e[0];
      })()
    ),
    0,
    4
  );
}
function Nh(...e) {
  let t = (() => {
    if (Array.isArray(e[0])) {
      let [t, n] = e;
      return jh(t, n);
    }
    return e[0];
  })();
  return Dh(typeof t == `string` ? t : d(t));
}
function Ph(...e) {
  let t = (() => {
    if (Array.isArray(e[0])) {
      let [t, n] = e;
      return jh(t, n);
    }
    return e[0];
  })();
  return typeof t != `string` && `hash` in t && t.hash ? t.hash : qf($c(Nh(t)));
}
var Fh = class extends q {
    constructor(e, t) {
      super(`Found ambiguous types in overloaded ABI Items.`, {
        metaMessages: [
          `\`${e.type}\` in \`${Dh(d(e.abiItem))}\`, and`,
          `\`${t.type}\` in \`${Dh(d(t.abiItem))}\``,
          ``,
          `These types encode differently and cannot be distinguished at runtime.`,
          `Remove one of the ambiguous items in the ABI.`,
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `AbiItem.AmbiguityError`,
        });
    }
  },
  Ih = class extends q {
    constructor({ name: e, data: t, type: n = `item` }) {
      let r = e ? ` with name "${e}"` : t ? ` with data "${t}"` : ``;
      super(`ABI ${n}${r} not found.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `AbiItem.NotFoundError`,
        });
    }
  };
function Lh(...e) {
  let [t, n] = (() => {
      if (Array.isArray(e[0])) {
        let [t, n] = e;
        return [zh(t), n];
      }
      return e;
    })(),
    { bytecode: r, args: i } = n;
  return Yc(r, t.inputs?.length && i?.length ? Np(t.inputs, i) : `0x`);
}
function Rh(e) {
  return Ah(e);
}
function zh(e) {
  let t = e.find((e) => e.type === `constructor`);
  if (!t) throw new Ih({ name: `constructor` });
  return t;
}
function Bh(e, t = {}) {
  return Ah(e, t);
}
function Vh(e) {
  return Ph(e);
}
function Hh(...e) {
  let [t, n, r = {}] = (() => {
      if (Array.isArray(e[0])) {
        let [t, n, r, i] = e;
        return [Gh(t, n), r, i];
      }
      return e;
    })(),
    i = Mp(t.outputs, n, r);
  if (!(i && Object.keys(i).length === 0))
    return i && Object.keys(i).length === 1
      ? Array.isArray(i)
        ? i[0]
        : Object.values(i)[0]
      : i;
}
function Uh(...e) {
  let [t, n = []] = (() => {
      if (Array.isArray(e[0])) {
        let [t, n, r] = e;
        return [Gh(t, n, { args: r }), r];
      }
      let [t, n] = e;
      return [t, n];
    })(),
    { overloads: r } = t,
    i = r ? Gh([t, ...r], t.name, { args: n }) : t,
    a = Kh(i),
    o = n.length > 0 ? Np(i.inputs, n) : void 0;
  return o ? Yc(a, o) : a;
}
function Wh(e, t = {}) {
  return Ah(e, t);
}
function Gh(e, t, n) {
  let r = jh(e, t, n);
  if (r.type !== `function`) throw new Ih({ name: t, type: `function` });
  return r;
}
function Kh(e) {
  return Mh(e);
}
var qh = `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee`,
  Jh = `0x0000000000000000000000000000000000000000`,
  Yh = `0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033`,
  Xh = `0x608060405234801561000f575f5ffd5b5060043610610029575f3560e01c8063fd00430c1461002d575b5f5ffd5b6100476004803603810190610042919061012b565b610049565b005b80825f375f5f825f865afa610060573d5f5f3e3d5ffd5b3d5f5f3e3d5ff35b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61009982610070565b9050919050565b6100a98161008f565b81146100b3575f5ffd5b50565b5f813590506100c4816100a0565b92915050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f8401126100eb576100ea6100ca565b5b8235905067ffffffffffffffff811115610108576101076100ce565b5b602083019150836001820283011115610124576101236100d2565b5b9250929050565b5f5f5f6040848603121561014257610141610068565b5b5f61014f868287016100b6565b935050602084013567ffffffffffffffff8111156101705761016f61006c565b5b61017c868287016100d6565b9250925050925092509256fea2646970667358221220635ed99185cacf3f2acba6921f23687c969cec2bbaf5f9ad599f507e6e105e6964736f6c63430008230033`,
  Zh = 3735928559n,
  Qh = Vh(
    Bh(
      `event Transfer(address indexed from, address indexed to, uint256 value)`
    )
  ),
  $h = Wh(`function balanceOf(address) returns (uint256)`),
  eg = Wh(`function decimals() returns (uint256)`),
  tg = Wh(`function tokenURI(uint256) returns (string)`),
  ng = Wh(`function symbol() returns (string)`),
  rg = Wh(`function query(address target, bytes data)`);
async function ig(e, t) {
  let {
      blockNumber: n,
      blockTag: r,
      calls: i,
      stateOverrides: a,
      traceAssetChanges: o,
      traceTransfers: s,
      validation: c,
    } = t,
    l = t.account ? z(t.account) : void 0;
  if (o && !l)
    throw new D("`account` is required when `traceAssetChanges` is true");
  let u = l
      ? Lh(Rh(`constructor(bytes, bytes)`), {
          bytecode: Tl,
          args: [Yh, Uh(Wh(`function getBalance(address)`), [l.address])],
        })
      : void 0,
    d = r ?? e.experimental_blockTag ?? `latest`,
    f = n;
  if (o && typeof f != `bigint` && d !== `earliest` && d !== `pending`) {
    if (d === `latest`) f = await uu(e, { cacheTime: 0 });
    else {
      let t = await Eo(e, { blockTag: d });
      if (typeof t.number != `bigint`)
        throw new D(`Block tag \`${d}\` did not resolve to a number.`);
      f = t.number;
    }
  }
  let p = typeof f == `bigint` ? { blockNumber: f } : { blockTag: d },
    m = o
      ? await Eh(e, {
          ...p,
          blocks: [
            {
              calls: i.map((e) => ({ ...e, from: l.address })),
              stateOverrides: a,
            },
          ],
          traceTransfers: s,
          validation: c,
        })
      : void 0,
    h = m
      ? [
          ...new Set([
            ...og(
              m[0].calls.flatMap((e) => e.logs ?? []),
              l.address
            ),
            ...t.calls.map((e) => e.to?.toLowerCase()),
          ]),
        ].filter(
          (e) =>
            !!e &&
            e !== `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` &&
            e !== `0x0000000000000000000000000000000000000000`
        )
      : [],
    g = ug([
      ...(l ? [l.address] : []),
      ...h,
      ...(a?.map(({ address: e }) => e) ?? []),
    ]),
    _ = [{ address: g, code: Xh }],
    [v, y] = await Promise.all([
      o
        ? Promise.all([
            lg(e, { account: l.address, ...p, data: u, stateOverride: a }),
            ...h.map((t) =>
              lg(e, {
                account: l.address,
                address: t,
                ...p,
                data: Uh($h, [l.address]),
                staticCallAddress: g,
                stateOverride: a,
              })
            ),
          ])
        : [],
      Eh(e, {
        ...p,
        blocks: [
          {
            calls: [...i, { to: Jh }].map((e) => ({ ...e, from: l?.address })),
            stateOverrides: a,
          },
          ...(o
            ? [
                { calls: [{ data: u }] },
                {
                  calls: h.map((e) => ({
                    to: g,
                    data: ag(e, Uh($h, [l.address])),
                  })),
                  stateOverrides: _,
                },
                {
                  calls: h.map((e) => ({ to: g, data: ag(e, Uh(eg)) })),
                  stateOverrides: _,
                },
                {
                  calls: h.map((e) => ({ to: g, data: ag(e, Uh(tg, [0n])) })),
                  stateOverrides: _,
                },
                {
                  calls: h.map((e) => ({ to: g, data: ag(e, Uh(ng)) })),
                  stateOverrides: _,
                },
              ]
            : []),
        ],
        traceTransfers: s,
        validation: c,
      }),
    ]),
    b = y[0],
    [x, S, C, w, ee] = o ? y.slice(1) : [],
    { calls: te, ...ne } = b,
    re = te.slice(0, -1),
    ie = v.map((e) => (sg(e) ? k(e.data) : null)),
    ae = x?.calls ?? [],
    oe = S?.calls ?? [],
    se = [...ae, ...oe].map((e) => (sg(e) ? k(e.data) : null)),
    ce = (C?.calls ?? []).map((e) => cg(e, eg)),
    le = (ee?.calls ?? []).map((e) => cg(e, ng)),
    ue = (w?.calls ?? []).map((e) => cg(e, tg)),
    de = [];
  for (let [e, t] of se.entries()) {
    let n = ie[e],
      r = v[e],
      i =
        typeof n == `bigint`
          ? n
          : e > 0 && r?.status === `success` && r.data === `0x`
          ? 0n
          : null;
    if (typeof t != `bigint` || typeof i != `bigint`) continue;
    let a = ce[e - 1],
      o = le[e - 1],
      s = ue[e - 1],
      c =
        e === 0
          ? { address: qh, decimals: 18, symbol: `ETH` }
          : {
              address: h[e - 1],
              decimals: s || a ? Number(a ?? 1) : void 0,
              symbol: o ?? void 0,
            };
    de.push({ token: c, value: { pre: i, post: t, diff: t - i } });
  }
  return { assetChanges: de, block: ne, results: re };
}
function ag(e, t) {
  return Uh(rg, [e, t]);
}
function og(e, t) {
  let n = kt(t.toLowerCase(), { size: 32 });
  return e
    .filter((e) =>
      e.topics[0]?.toLowerCase() !== Qh ||
      e.address.toLowerCase() === `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee`
        ? !1
        : e.topics[1]?.toLowerCase() === n || e.topics[2]?.toLowerCase() === n
    )
    .map((e) => e.address.toLowerCase());
}
function sg(e) {
  return e.status === `success` && /^0x[\da-f]{64}$/i.test(e.data);
}
function cg(e, t) {
  if (e.status === `failure` || e.data === `0x`) return null;
  try {
    return Hh(t, e.data);
  } catch {
    return null;
  }
}
async function lg(e, t) {
  let {
    account: n,
    address: r,
    blockNumber: i,
    blockTag: a,
    data: o,
    staticCallAddress: s,
    stateOverride: c,
  } = t;
  try {
    return {
      data:
        (
          await Vl(
            { ...e, ccipRead: !1 },
            {
              account: r ? `0x0000000000000000000000000000000000000000` : n,
              data: r ? ag(r, o) : o,
              stateOverride:
                r && s ? [...(c ?? []), { address: s, code: Xh }] : c,
              ...(r ? { to: s } : {}),
              ...(typeof i == `bigint` ? { blockNumber: i } : { blockTag: a }),
            }
          )
        ).data ?? `0x`,
      status: `success`,
    };
  } catch (e) {
    if (!(e instanceof qi) || !(e.cause instanceof Ga)) throw e;
    return { data: `0x`, status: `failure` };
  }
}
function ug(e) {
  let t = new Set(e.map((e) => e.toLowerCase())),
    n = Zh;
  for (; t.has(`0x${n.toString(16).padStart(40, `0`)}`); ) n++;
  return `0x${n.toString(16).padStart(40, `0`)}`;
}
var dg = `0x6492649264926492649264926492649264926492649264926492649264926492`;
function fg(e) {
  if (
    nl(e, -32) !==
    `0x6492649264926492649264926492649264926492649264926492649264926492`
  )
    throw new hg(e);
}
function pg(e) {
  let { data: t, signature: n, to: r } = e;
  return Yc(Np(Fp(`address, bytes, bytes`), [r, t, n]), dg);
}
function mg(e) {
  try {
    return fg(e), !0;
  } catch {
    return !1;
  }
}
var hg = class extends q {
  constructor(e) {
    super(`Value \`${e}\` is an invalid ERC-6492 wrapped signature.`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: `SignatureErc6492.InvalidWrappedSignatureError`,
      });
  }
};
function gg({ r: e, s: t, to: n = `hex`, v: r, yParity: i }) {
  let a = (() => {
      if (i === 0 || i === 1) return i;
      if (r && (r === 27n || r === 28n || r >= 35n)) return +(r % 2n == 0n);
      throw Error("Invalid `v` or `yParity` value");
    })(),
    o = `0x${new Gm.Signature(k(e), k(t)).toCompactHex()}${
      a === 0 ? `1b` : `1c`
    }`;
  return n === `hex` ? o : P(o);
}
async function _g(e, t) {
  let {
    address: n,
    chain: r = e.chain,
    hash: i,
    erc6492VerifierAddress: a = t.universalSignatureVerifierAddress ??
      r?.contracts?.erc6492Verifier?.address,
    multicallAddress: o = t.multicallAddress ??
      r?.contracts?.multicall3?.address,
    mode: s = `auto`,
  } = t;
  if (r?.verifyHash) return await r.verifyHash(e, t);
  let c = (() => {
    let e = t.signature;
    return Xe(e)
      ? e
      : typeof e == `object` && `r` in e && `s` in e
      ? gg(e)
      : M(e);
  })();
  try {
    if (s === `eoa`)
      try {
        if (ws(dr(n), await Ia({ hash: i, signature: c }))) return !0;
      } catch {}
    return dh(c)
      ? await vg(e, { ...t, multicallAddress: o, signature: c })
      : await yg(e, { ...t, verifierAddress: a, signature: c });
  } catch (e) {
    if (s !== `eoa`)
      try {
        if (ws(dr(n), await Ia({ hash: i, signature: c }))) return !0;
      } catch {}
    if (e instanceof xg) return !1;
    throw e;
  }
}
async function vg(e, t) {
  let {
      address: n,
      blockHash: r,
      blockNumber: i,
      blockTag: a,
      hash: o,
      multicallAddress: s,
      requireCanonical: c,
    } = t,
    { authorization: l, data: u, signature: d, to: f } = uh(t.signature);
  if (
    (await Ad(e, {
      address: n,
      blockHash: r,
      blockNumber: i,
      blockTag: a,
      requireCanonical: c,
    })) === R([`0xef0100`, l.address])
  )
    return await bg(e, { ...t, signature: d });
  let p = {
    address: l.address,
    chainId: Number(l.chainId),
    nonce: Number(l.nonce),
    r: N(l.r, { size: 32 }),
    s: N(l.s, { size: 32 }),
    yParity: l.yParity,
  };
  if (!(await ef({ address: n, authorization: p }))) throw new xg();
  let m = await T(
    e,
    Y,
    `readContract`
  )({
    ...(s ? { address: s } : { code: Ol }),
    authorizationList: [p],
    abi: hl,
    blockHash: r,
    blockNumber: i,
    blockTag: `pending`,
    functionName: `aggregate3`,
    requireCanonical: c,
    args: [
      [
        ...(u ? [{ allowFailure: !0, target: f ?? n, callData: u }] : []),
        {
          allowFailure: !0,
          target: n,
          callData: B({
            abi: Sl,
            functionName: `isValidSignature`,
            args: [o, d],
          }),
        },
      ],
    ],
  });
  if (m[m.length - 1]?.returnData?.startsWith(`0x1626ba7e`)) return !0;
  throw new xg();
}
async function yg(e, t) {
  let {
      address: n,
      factory: r,
      factoryData: i,
      hash: a,
      signature: o,
      verifierAddress: s,
      ...c
    } = t,
    l = await (async () =>
      (!r && !i) || mg(o) ? o : pg({ data: i, signature: o, to: r }))(),
    u = s
      ? {
          to: s,
          data: B({ abi: Cl, functionName: `isValidSig`, args: [n, a, l] }),
          ...c,
        }
      : { data: Fl({ abi: Cl, args: [n, a, l], bytecode: Dl }), ...c },
    { data: d } = await T(
      e,
      Vl,
      `call`
    )(u).catch((e) => {
      throw e instanceof qi ? new xg() : e;
    });
  if (Lt(d ?? `0x0`)) return !0;
  throw new xg();
}
async function bg(e, t) {
  let {
    address: n,
    blockHash: r,
    blockNumber: i,
    blockTag: a,
    hash: o,
    requireCanonical: s,
    signature: c,
  } = t;
  if (
    (
      await T(
        e,
        Y,
        `readContract`
      )({
        address: n,
        abi: Sl,
        args: [o, c],
        blockHash: r,
        blockNumber: i,
        blockTag: a,
        functionName: `isValidSignature`,
        requireCanonical: s,
      }).catch((e) => {
        throw e instanceof Ji ? new xg() : e;
      })
    ).startsWith(`0x1626ba7e`)
  )
    return !0;
  throw new xg();
}
var xg = class extends Error {};
async function Sg(
  e,
  { address: t, message: n, factory: r, factoryData: i, signature: a, ...o }
) {
  let s = Ef(n);
  return T(
    e,
    _g,
    `verifyHash`
  )({ address: t, factory: r, factoryData: i, hash: s, signature: a, ...o });
}
async function Cg(e, t) {
  let {
      address: n,
      factory: r,
      factoryData: i,
      signature: a,
      message: o,
      primaryType: s,
      types: c,
      domain: l,
      ...u
    } = t,
    d = Ff({ message: o, primaryType: s, types: c, domain: l });
  return T(
    e,
    _g,
    `verifyHash`
  )({ address: n, factory: r, factoryData: i, hash: d, signature: a, ...u });
}
function wg(
  e,
  {
    emitOnBegin: t = !1,
    emitMissed: n = !1,
    onBlockNumber: r,
    onError: i,
    poll: a,
    pollingInterval: o = e.pollingInterval,
  }
) {
  let s =
      a === void 0
        ? e.transport.type !== `webSocket` &&
          e.transport.type !== `ipc` &&
          (e.transport.type !== `fallback` ||
            (e.transport.transports[0].config.type !== `webSocket` &&
              e.transport.transports[0].config.type !== `ipc`))
        : a,
    c;
  return s
    ? nu(
        V([`watchBlockNumber`, e.uid, t, n, o]),
        { onBlockNumber: r, onError: i },
        (r) =>
          iu(
            async () => {
              try {
                let t = await T(e, uu, `getBlockNumber`)({ cacheTime: 0 });
                if (c !== void 0) {
                  if (t === c) return;
                  if (t - c > 1 && n)
                    for (let e = c + 1n; e < t; e++)
                      r.onBlockNumber(e, c), (c = e);
                }
                (c === void 0 || t > c) && (r.onBlockNumber(t, c), (c = t));
              } catch (e) {
                r.onError?.(e);
              }
            },
            { emitOnBegin: t, interval: o }
          )
      )
    : nu(
        V([`watchBlockNumber`, e.uid, t, n]),
        { onBlockNumber: r, onError: i },
        (t) => {
          let n = !0,
            r = () => (n = !1);
          return (
            (async () => {
              try {
                let { unsubscribe: i } = await (() => {
                  if (e.transport.type === `fallback`) {
                    let t = e.transport.transports.find(
                      (e) =>
                        e.config.type === `webSocket` || e.config.type === `ipc`
                    );
                    return t ? t.value : e.transport;
                  }
                  return e.transport;
                })().subscribe({
                  params: [`newHeads`],
                  onData(e) {
                    if (!n) return;
                    let r = k(e.result?.number);
                    t.onBlockNumber(r, c), (c = r);
                  },
                  onError(e) {
                    t.onError?.(e);
                  },
                });
                (r = i), n || r();
              } catch (e) {
                i?.(e);
              }
            })(),
            () => r()
          );
        }
      );
}
async function Tg(e, t) {
  let {
      checkReplacement: n = e.chain?.supportsTransactionReplacementDetection ??
        !0,
      confirmations: r = 1,
      hash: i,
      onReplaced: a,
      retryCount: o = 6,
      retryDelay: s = ({ count: e }) => ~~(1 << e) * 200,
      timeout: c = 18e4,
    } = t,
    l = V([`waitForTransactionReceipt`, e.uid, i]),
    u = t.pollingInterval
      ? t.pollingInterval
      : e.chain?.experimental_preconfirmationTime
      ? e.chain.experimental_preconfirmationTime
      : e.pollingInterval,
    d,
    f,
    p,
    m = !1,
    h,
    g,
    { promise: _, resolve: v, reject: y } = Rl(),
    b = c
      ? setTimeout(() => {
          g?.(), h?.(), y(new Hi({ hash: i }));
        }, c)
      : void 0;
  return (
    (h = nu(l, { onReplaced: a, resolve: v, reject: y }, async (t) => {
      if (
        ((p = await T(
          e,
          Ch,
          `getTransactionReceipt`
        )({ hash: i }).catch(() => void 0)),
        p && r <= 1)
      ) {
        clearTimeout(b), t.resolve(p), h?.();
        return;
      }
      g = T(
        e,
        wg,
        `watchBlockNumber`
      )({
        emitMissed: !0,
        emitOnBegin: !0,
        poll: !0,
        pollingInterval: u,
        async onBlockNumber(a) {
          let c = (e) => {
              clearTimeout(b), g?.(), e(), h?.();
            },
            l = a;
          if (!m)
            try {
              if (p) {
                if (r > 1 && (!p.blockNumber || l - p.blockNumber + 1n < r))
                  return;
                c(() => t.resolve(p));
                return;
              }
              if (
                (n &&
                  !d &&
                  ((m = !0),
                  await Su(
                    async () => {
                      (d = await T(e, xh, `getTransaction`)({ hash: i })),
                        d.blockNumber && (l = d.blockNumber);
                    },
                    { delay: s, retryCount: o }
                  ),
                  (m = !1)),
                (p = await T(e, Ch, `getTransactionReceipt`)({ hash: i })),
                r > 1 && (!p.blockNumber || l - p.blockNumber + 1n < r))
              )
                return;
              c(() => t.resolve(p));
            } catch (n) {
              if (n instanceof zi || n instanceof Bi) {
                if (!d) {
                  m = !1;
                  return;
                }
                try {
                  (f = d), (m = !0);
                  let n = await Su(
                    () =>
                      T(
                        e,
                        Eo,
                        `getBlock`
                      )({ blockNumber: l, includeTransactions: !0 }),
                    {
                      delay: s,
                      retryCount: o,
                      shouldRetry: ({ error: e }) => e instanceof yo,
                    }
                  );
                  m = !1;
                  let i = n.transactions.find(
                    ({ from: e, nonce: t }) => e === f.from && t === f.nonce
                  );
                  if (
                    !i ||
                    ((p = await T(
                      e,
                      Ch,
                      `getTransactionReceipt`
                    )({ hash: i.hash })),
                    r > 1 && (!p.blockNumber || l - p.blockNumber + 1n < r))
                  )
                    return;
                  let a = `replaced`;
                  i.to === f.to && i.value === f.value && i.input === f.input
                    ? (a = `repriced`)
                    : i.from === i.to && i.value === 0n && (a = `cancelled`),
                    c(() => {
                      t.onReplaced?.({
                        reason: a,
                        replacedTransaction: f,
                        transaction: i,
                        transactionReceipt: p,
                      }),
                        t.resolve(p);
                    });
                } catch (e) {
                  c(() => t.reject(e));
                }
              } else c(() => t.reject(n));
            }
        },
      });
    })),
    _
  );
}
var Eg = [`size`, `totalDifficulty`, `transactions`, `uncles`, `withdrawals`];
function Dg(e, { onBlockHeader: t, onError: n }) {
  let r;
  return nu(
    V([`watchBlockHeaders`, e.uid]),
    { onBlockHeader: t, onError: n },
    (t) => {
      let n = !0,
        i = !1,
        a = () => (n = !1);
      return (
        (async () => {
          try {
            let { unsubscribe: o } = await (() => {
              if (e.transport.type === `fallback`) {
                let t = e.transport.transports.find(
                  (e) =>
                    e.config.type === `webSocket` || e.config.type === `ipc`
                );
                return t ? t.value : e.transport;
              }
              return e.transport;
            })().subscribe({
              params: [`newHeads`],
              onData(i) {
                if (!n) return;
                let a = (e.chain?.formatters?.block?.format || wo)(
                  i.result,
                  `watchBlockHeaders`
                );
                for (let e of Eg) delete a[e];
                t.onBlockHeader(a, r), (r = a);
              },
              onError(e) {
                i && t.onError?.(e);
              },
            });
            (i = !0), (a = o), n || a();
          } catch (e) {
            t.onError?.(e);
          }
        })(),
        () => a()
      );
    }
  );
}
function Og(
  e,
  {
    blockTag: t = e.experimental_blockTag ?? `latest`,
    emitMissed: n = !1,
    emitOnBegin: r = !1,
    onBlock: i,
    onError: a,
    includeTransactions: o,
    poll: s,
    pollingInterval: c = e.pollingInterval,
  }
) {
  let l =
      s === void 0
        ? e.transport.type !== `webSocket` &&
          e.transport.type !== `ipc` &&
          (e.transport.type !== `fallback` ||
            (e.transport.transports[0].config.type !== `webSocket` &&
              e.transport.transports[0].config.type !== `ipc`))
        : s,
    u = o ?? !1,
    d;
  return l
    ? nu(
        V([`watchBlocks`, e.uid, t, n, r, u, c]),
        { onBlock: i, onError: a },
        (i) =>
          iu(
            async () => {
              try {
                let r = await T(
                  e,
                  Eo,
                  `getBlock`
                )({ blockTag: t, includeTransactions: u });
                if (r.number !== null && d?.number != null) {
                  if (r.number === d.number) return;
                  if (r.number - d.number > 1 && n)
                    for (let t = d?.number + 1n; t < r.number; t++) {
                      let n = await T(
                        e,
                        Eo,
                        `getBlock`
                      )({ blockNumber: t, includeTransactions: u });
                      i.onBlock(n, d), (d = n);
                    }
                }
                (d?.number == null ||
                  (t === `pending` && r?.number == null) ||
                  (r.number !== null && r.number > d.number)) &&
                  (i.onBlock(r, d), (d = r));
              } catch (e) {
                i.onError?.(e);
              }
            },
            { emitOnBegin: r, interval: c }
          )
      )
    : (() => {
        let n = !0,
          o = !0,
          s = () => (n = !1);
        return (
          (async () => {
            try {
              r &&
                T(
                  e,
                  Eo,
                  `getBlock`
                )({ blockTag: t, includeTransactions: u })
                  .then((e) => {
                    n && (o &&= (i(e, void 0), !1));
                  })
                  .catch(a);
              let { unsubscribe: c } = await (() => {
                if (e.transport.type === `fallback`) {
                  let t = e.transport.transports.find(
                    (e) =>
                      e.config.type === `webSocket` || e.config.type === `ipc`
                  );
                  return t ? t.value : e.transport;
                }
                return e.transport;
              })().subscribe({
                params: [`newHeads`],
                async onData(t) {
                  if (!n) return;
                  let r = await T(
                    e,
                    Eo,
                    `getBlock`
                  )({
                    blockNumber: t.result?.number,
                    includeTransactions: u,
                  }).catch(() => {});
                  n && (i(r, d), (o = !1), (d = r));
                },
                onError(e) {
                  a?.(e);
                },
              });
              (s = c), n || s();
            } catch (e) {
              a?.(e);
            }
          })(),
          () => s()
        );
      })();
}
function kg(
  e,
  {
    address: t,
    args: n,
    batch: r = !0,
    event: i,
    events: a,
    fromBlock: o,
    onError: s,
    onLogs: c,
    poll: l,
    pollingInterval: u = e.pollingInterval,
    strict: d,
  }
) {
  let f =
      l === void 0
        ? typeof o == `bigint` ||
          (e.transport.type !== `webSocket` &&
            e.transport.type !== `ipc` &&
            (e.transport.type !== `fallback` ||
              (e.transport.transports[0].config.type !== `webSocket` &&
                e.transport.transports[0].config.type !== `ipc`)))
        : l,
    p = d ?? !1;
  return f
    ? nu(
        V([`watchEvent`, t, n, r, e.uid, i, u, o]),
        { onLogs: c, onError: s },
        (s) => {
          let c;
          o !== void 0 && (c = o - 1n);
          let l,
            d = !1,
            f = iu(
              async () => {
                if (!d) {
                  try {
                    l = await T(
                      e,
                      wd,
                      `createEventFilter`
                    )({
                      address: t,
                      args: n,
                      event: i,
                      events: a,
                      strict: p,
                      fromBlock: o,
                    });
                  } catch {}
                  d = !0;
                  return;
                }
                try {
                  let o;
                  if (l) o = await T(e, du, `getFilterChanges`)({ filter: l });
                  else {
                    let r = await T(e, uu, `getBlockNumber`)({});
                    (o =
                      c && c !== r
                        ? await T(
                            e,
                            js,
                            `getLogs`
                          )({
                            address: t,
                            args: n,
                            event: i,
                            events: a,
                            fromBlock: c + 1n,
                            toBlock: r,
                          })
                        : []),
                      (c = r);
                  }
                  if (o.length === 0) return;
                  if (r) s.onLogs(o);
                  else for (let e of o) s.onLogs([e]);
                } catch (e) {
                  l && e instanceof la && (d = !1), s.onError?.(e);
                }
              },
              { emitOnBegin: !0, interval: u }
            );
          return async () => {
            l && (await T(e, fu, `uninstallFilter`)({ filter: l })), f();
          };
        }
      )
    : (() => {
        let r = !0,
          o = () => (r = !1);
        return (
          (async () => {
            try {
              let l = (() => {
                  if (e.transport.type === `fallback`) {
                    let t = e.transport.transports.find(
                      (e) =>
                        e.config.type === `webSocket` || e.config.type === `ipc`
                    );
                    return t ? t.value : e.transport;
                  }
                  return e.transport;
                })(),
                u = a ?? (i ? [i] : void 0),
                f = [];
              u &&
                ((f = [
                  u.flatMap((e) =>
                    Hr({ abi: [e], eventName: e.name, args: n })
                  ),
                ]),
                i && (f = f[0]));
              let { unsubscribe: m } = await l.subscribe({
                params: [`logs`, { address: t, topics: f }],
                onData(e) {
                  if (!r) return;
                  let t = e.result;
                  try {
                    let { eventName: e, args: n } = Ds({
                      abi: u ?? [],
                      data: t.data,
                      topics: t.topics,
                      strict: p,
                    });
                    c([Ts(t, { args: n, eventName: e })]);
                  } catch (e) {
                    let n, r;
                    if (e instanceof vt || e instanceof yt) {
                      if (d) return;
                      (n = e.abiItem.name),
                        (r = e.abiItem.inputs?.some(
                          (e) => !(`name` in e && e.name)
                        ));
                    }
                    c([Ts(t, { args: r ? [] : {}, eventName: n })]);
                  }
                },
                onError(e) {
                  s?.(e);
                },
              });
              (o = m), r || o();
            } catch (e) {
              s?.(e);
            }
          })(),
          () => o()
        );
      })();
}
function Ag(
  e,
  {
    batch: t = !0,
    onError: n,
    onTransactions: r,
    poll: i,
    pollingInterval: a = e.pollingInterval,
  }
) {
  return (
    i === void 0
      ? e.transport.type !== `webSocket` && e.transport.type !== `ipc`
      : i
  )
    ? nu(
        V([`watchPendingTransactions`, e.uid, t, a]),
        { onTransactions: r, onError: n },
        (n) => {
          let r,
            i = iu(
              async () => {
                try {
                  if (!r)
                    try {
                      r = await T(e, Td, `createPendingTransactionFilter`)({});
                      return;
                    } catch (e) {
                      throw (i(), e);
                    }
                  let a = await T(e, du, `getFilterChanges`)({ filter: r });
                  if (a.length === 0) return;
                  if (t) n.onTransactions(a);
                  else for (let e of a) n.onTransactions([e]);
                } catch (e) {
                  n.onError?.(e);
                }
              },
              { emitOnBegin: !0, interval: a }
            );
          return async () => {
            r && (await T(e, fu, `uninstallFilter`)({ filter: r })), i();
          };
        }
      )
    : (() => {
        let t = !0,
          i = () => (t = !1);
        return (
          (async () => {
            try {
              let { unsubscribe: a } = await e.transport.subscribe({
                params: [`newPendingTransactions`],
                onData(e) {
                  if (!t) return;
                  let n = e.result;
                  r([n]);
                },
                onError(e) {
                  n?.(e);
                },
              });
              (i = a), t || i();
            } catch (e) {
              n?.(e);
            }
          })(),
          () => i()
        );
      })();
}
var jg = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
function Mg(e) {
  return jg.test(e) ? !Number.isNaN(new Date(e).getTime()) : !1;
}
function Ng(e) {
  return Mg(e) ? new Date(e) : new Date(NaN);
}
function Pg(e) {
  let { scheme: t, statement: n, ...r } = e.match(Fg)?.groups ?? {},
    {
      chainId: i,
      expirationTime: a,
      issuedAt: o,
      notBefore: s,
      requestId: c,
      ...l
    } = e.match(Ig)?.groups ?? {},
    u = e
      .split(`Resources:`)[1]
      ?.split(
        `
- `
      )
      .slice(1);
  return {
    ...r,
    ...l,
    ...(i ? { chainId: Number(i) } : {}),
    ...(a ? { expirationTime: Ng(a) } : {}),
    ...(o ? { issuedAt: Ng(o) } : {}),
    ...(s ? { notBefore: Ng(s) } : {}),
    ...(c ? { requestId: c } : {}),
    ...(u ? { resources: u } : {}),
    ...(t ? { scheme: t } : {}),
    ...(n ? { statement: n } : {}),
  };
}
var Fg =
    /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+\-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
  Ig =
    /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
function Lg(e) {
  let {
    address: t,
    domain: n,
    message: r,
    nonce: i,
    scheme: a,
    time: o = new Date(),
  } = e;
  if (
    (n && r.domain !== n) ||
    (i && r.nonce !== i) ||
    (a && r.scheme !== a) ||
    Number.isNaN(o.getTime()) ||
    (r.expirationTime &&
      (Number.isNaN(r.expirationTime.getTime()) || o >= r.expirationTime)) ||
    (r.notBefore && (Number.isNaN(r.notBefore.getTime()) || o < r.notBefore))
  )
    return !1;
  try {
    if (!r.address || !L(r.address, { strict: !1 }) || (t && !ws(r.address, t)))
      return !1;
  } catch {
    return !1;
  }
  return !0;
}
async function Rg(e, t) {
  let {
      address: n,
      domain: r,
      message: i,
      nonce: a,
      scheme: o,
      signature: s,
      time: c = new Date(),
      ...l
    } = t,
    u = Pg(i);
  if (
    !u.address ||
    !Lg({ address: n, domain: r, message: u, nonce: a, scheme: o, time: c })
  )
    return !1;
  let d = Ef(i);
  return _g(e, { address: u.address, hash: d, signature: s, ...l });
}
function zg(e, t) {
  return { amount: e, decimals: t, formatted: mh(e, t) };
}
function Bg(e, t) {
  if (typeof e == `bigint`) return e;
  let n = e.decimals ?? t;
  return hh(e.formatted, Vg(n));
}
function Vg(e) {
  if (e === void 0)
    throw Error(
      "Token decimals are required. Pass `amount.decimals` or select a declared token."
    );
  return e;
}
function Hg(e, t) {
  return typeof e == `bigint` ? t : e.decimals ?? t;
}
function Ug(e, t) {
  let { decimals: n, token: r } = t,
    i = Wg(e, r);
  if (i) return { address: i.address, decimals: n ?? i.decimals };
  if (L(r, { strict: !1 })) return { address: r, decimals: n ?? qg(e, r) };
  throw Error(
    `Token "${r}" is not a declared ERC-20 token on the client's \`tokens\` array (with an address for the client's chain), and is not a valid address.`
  );
}
function Wg(e, t) {
  let n = e.tokens,
    r = e.chain?.id;
  if (!n || r === void 0) return;
  let i = Kg(n, t);
  if (i) return Gg(i, r);
  if (L(t, { strict: !1 }))
    for (let e of n) {
      let n = Gg(e, r);
      if (n && ws(n.address, t)) return n;
    }
}
function Gg(e, t) {
  let n = e.addresses[t];
  if (n)
    return {
      address: n,
      currency: e.currency,
      decimals: e.decimals,
      name: e.name,
      popular: e.popular,
      symbol: e.symbol,
    };
}
function Kg(e, t) {
  let n = t.toLowerCase();
  for (let t of e) if (t.symbol?.toLowerCase() === n) return t;
}
function qg(e, t) {
  let n = e.tokens,
    r = e.chain?.id;
  if (n && r !== void 0)
    for (let e of n) {
      let n = Gg(e, r);
      if (n && ws(n.address, t)) return n.decimals;
    }
}
async function Jg(e, t) {
  let { address: n, decimals: r } = Ug(e, t);
  return r === void 0
    ? {
        address: n,
        decimals: await Y(e, { abi: wl, address: n, functionName: `decimals` }),
      }
    : { address: n, decimals: r };
}
function Yg(e) {
  let {
    account: t,
    chain: n,
    gas: r,
    maxFeePerGas: i,
    maxPriorityFeePerGas: a,
    nonce: o,
  } = e;
  return {
    account: t,
    chain: n,
    gas: r,
    maxFeePerGas: i,
    maxPriorityFeePerGas: a,
    nonce: o,
  };
}
function Xg(e) {
  return { ...e, data: B(e), to: e.address };
}
async function Zg(e, t) {
  return Zg.inner(bu, e, t);
}
(function (e) {
  async function t(t, n, r) {
    return await t(n, { ...r, ...e.call(n, r) });
  }
  e.inner = t;
  function n(e, t) {
    return Xg(Qg(e, t));
  }
  e.call = n;
  async function r(t, n) {
    return Cs(t, { ...Yg(n), ...e.call(t, n) });
  }
  e.estimateGas = r;
  async function i(t, n) {
    return Ql(t, { ...Yg(n), ...e.call(t, n) });
  }
  e.simulate = i;
  function a(e) {
    let [t] = ks({ abi: wl, logs: e, eventName: `Approval`, strict: !0 });
    if (!t) throw Error("`Approval` event not found.");
    return t;
  }
  e.extractEvent = a;
})((Zg ||= {}));
function Qg(e, t) {
  let { amount: n, spender: r, token: i } = t,
    { address: a, decimals: o } = Ug(e, { token: i });
  return { abi: wl, address: a, args: [r, Bg(n, o)], functionName: `approve` };
}
async function $g(
  e,
  { serializedTransaction: t, throwOnReceiptRevert: n, timeout: r }
) {
  let i = await e.request(
      { method: `eth_sendRawTransactionSync`, params: r ? [t, r] : [t] },
      { retryCount: 0 }
    ),
    a = (e.chain?.formatters?.transactionReceipt?.format || wu)(i);
  if (a.status === `reverted` && n) throw new Vi({ receipt: a });
  return a;
}
var e_ = new cr(128);
async function t_(e, t) {
  let {
      account: n = e.account,
      assertChainId: r = !0,
      chain: i = e.chain,
      accessList: a,
      authorizationList: o,
      blobs: s,
      data: c,
      dataSuffix: l = typeof e.dataSuffix == `string`
        ? e.dataSuffix
        : e.dataSuffix?.value,
      gas: u,
      gasPrice: d,
      maxFeePerBlobGas: f,
      maxFeePerGas: p,
      maxPriorityFeePerGas: m,
      nonce: h,
      pollingInterval: g,
      throwOnReceiptRevert: _,
      type: v,
      value: y,
      ...b
    } = t,
    x = t.timeout ?? Math.max((i?.blockTime ?? 0) * 3, 5e3);
  if (n === void 0)
    throw new mu({ docsPath: `/docs/actions/wallet/sendTransactionSync` });
  let S = n ? z(n) : null,
    C;
  try {
    ho(t);
    let n = await (async () => {
      if (t.to) return t.to;
      if (t.to !== null && o && o.length > 0)
        return await Ua({ authorization: o[0] }).catch(() => {
          throw new D(
            "`to` is required. Could not infer from `authorizationList`."
          );
        });
    })();
    if (S?.type === `json-rpc` || S === null) {
      let t;
      i !== null &&
        ((t = await T(e, gs, `getChainId`)({})),
        r && gu({ currentChainId: t, chain: i }));
      let C = e.chain?.formatters?.transactionRequest?.format,
        w = (C || co)(
          {
            ...ao(b, { format: C }),
            accessList: a,
            account: S,
            authorizationList: o,
            blobs: s,
            chainId: t,
            data: l ? mr([c ?? `0x`, l]) : c,
            gas: u,
            gasPrice: d,
            maxFeePerBlobGas: f,
            maxFeePerGas: p,
            maxPriorityFeePerGas: m,
            nonce: h,
            to: n,
            type: v,
            value: y,
          },
          `sendTransaction`
        ),
        ee = e_.get(e.uid),
        te = ee ? `wallet_sendTransaction` : `eth_sendTransaction`,
        ne = await (async () => {
          try {
            return await e.request(
              { method: te, params: [w] },
              { retryCount: 0 }
            );
          } catch (t) {
            if (ee === !1) throw t;
            let n = t;
            if (
              n.name === `InvalidInputRpcError` ||
              n.name === `InvalidParamsRpcError` ||
              n.name === `MethodNotFoundRpcError` ||
              n.name === `MethodNotSupportedRpcError`
            )
              return await e
                .request(
                  { method: `wallet_sendTransaction`, params: [w] },
                  { retryCount: 0 }
                )
                .then((t) => (e_.set(e.uid, !0), t))
                .catch((t) => {
                  let r = t;
                  throw r.name === `MethodNotFoundRpcError` ||
                    r.name === `MethodNotSupportedRpcError`
                    ? (e_.set(e.uid, !1), n)
                    : r;
                });
            throw n;
          }
        })(),
        re = await T(
          e,
          Tg,
          `waitForTransactionReceipt`
        )({ checkReplacement: !1, hash: ne, pollingInterval: g, timeout: x });
      if (_ && re.status === `reverted`) throw new Vi({ receipt: re });
      return re;
    }
    if (S?.type === `local`) {
      let r = (() => {
          if (!S.nonceManager || h !== void 0) return S.nonceManager;
          let e = S.nonceManager;
          return {
            consume(t) {
              return (
                (C = { address: t.address, chainId: t.chainId }), e.consume(t)
              );
            },
            get(t) {
              return e.get(t);
            },
            increment(t) {
              return e.increment(t);
            },
            reset(t) {
              return e.reset(t);
            },
          };
        })(),
        g = await T(
          e,
          xs,
          `prepareTransactionRequest`
        )({
          account: S,
          accessList: a,
          authorizationList: o,
          blobs: s,
          chain: i,
          data: l ? mr([c ?? `0x`, l]) : c,
          gas: u,
          gasPrice: d,
          maxFeePerBlobGas: f,
          maxFeePerGas: p,
          maxPriorityFeePerGas: m,
          nonce: h,
          nonceManager: r,
          parameters: [...vs, `sidecars`],
          type: v,
          value: y,
          ...b,
          to: n,
        }),
        x = i?.serializers?.transaction,
        w = await S.signTransaction(g, { serializer: x }),
        ee = (i ?? e.chain)?.serializers?.transactionEnvelope,
        te = ee ? await ee({ serializedTransaction: w, transaction: g }) : w;
      return await T(
        e,
        $g,
        `sendRawTransactionSync`
      )({
        serializedTransaction: te,
        throwOnReceiptRevert: _,
        timeout: t.timeout,
      });
    }
    throw S?.type === `smart`
      ? new hu({
          metaMessages: [
            "Consider using the `sendUserOperation` Action instead.",
          ],
          docsPath: `/docs/actions/bundler/sendUserOperation`,
          type: `smart`,
        })
      : new hu({
          docsPath: `/docs/actions/wallet/sendTransactionSync`,
          type: S?.type,
        });
  } catch (e) {
    throw e instanceof hu
      ? e
      : (C && !(e instanceof Vi) && S?.nonceManager?.reset(C),
        hs(e, { ...t, account: S, chain: t.chain || void 0 }));
  }
}
async function n_(e, t) {
  return bu.internal(e, t_, `sendTransactionSync`, t);
}
async function r_(e, t) {
  let { amount: n, token: r, throwOnReceiptRevert: i = !0 } = t,
    { decimals: a } = Ug(e, { token: r }),
    o = Hg(n, a),
    s = await Zg.inner(n_, e, { ...t, throwOnReceiptRevert: i }),
    { args: c } = Zg.extractEvent(s.logs);
  return {
    ...c,
    ...(o === void 0 ? {} : { decimals: o, formatted: mh(c.value, o) }),
    receipt: s,
  };
}
async function i_(e, t) {
  let { account: n, decimals: r, spender: i, token: a, ...o } = t,
    [s, { decimals: c }] = await Promise.all([
      Y(e, { ...o, ...i_.call(e, { account: n, spender: i, token: a }) }),
      Jg(e, { decimals: r, token: a }),
    ]);
  return zg(s, c);
}
(function (e) {
  function t(e, t) {
    return Xg({
      address: Ug(e, t).address,
      abi: wl,
      functionName: `allowance`,
      args: [t.account, t.spender],
    });
  }
  e.call = t;
})((i_ ||= {}));
async function a_(e, t) {
  let { account: n = e.account, decimals: r, token: i, ...a } = t;
  if (!n) throw new mu();
  let o = z(n).address,
    [s, { decimals: c }] = await Promise.all([
      Y(e, { ...a, ...a_.call(e, { account: o, token: i }) }),
      Jg(e, { decimals: r, token: i }),
    ]);
  return zg(s, c);
}
(function (e) {
  function t(e, t) {
    let n = t.account ?? e.account;
    if (!n) throw new mu();
    let r = z(n).address;
    return Xg({
      address: Ug(e, t).address,
      abi: wl,
      functionName: `balanceOf`,
      args: [r],
    });
  }
  e.call = t;
})((a_ ||= {}));
async function o_(e, t) {
  let { token: n, ...r } = t,
    { address: i } = Ug(e, { token: n }),
    a = Wg(e, n),
    [o, s, c] = await Promise.all([
      a?.decimals ??
        Y(e, { ...r, abi: wl, address: i, functionName: `decimals` }),
      a?.name ?? Y(e, { ...r, abi: wl, address: i, functionName: `name` }),
      a?.symbol ?? Y(e, { ...r, abi: wl, address: i, functionName: `symbol` }),
    ]);
  return { decimals: o, name: s, symbol: c };
}
async function s_(e, t) {
  let { decimals: n, token: r, ...i } = t,
    [a, { decimals: o }] = await Promise.all([
      Y(e, { ...i, ...s_.call(e, { token: r }) }),
      Jg(e, { decimals: n, token: r }),
    ]);
  return zg(a, o);
}
(function (e) {
  function t(e, t) {
    return Xg({
      address: Ug(e, t).address,
      abi: wl,
      args: [],
      functionName: `totalSupply`,
    });
  }
  e.call = t;
})((s_ ||= {}));
async function c_(e, t) {
  return c_.inner(bu, e, t);
}
(function (e) {
  async function t(t, n, r) {
    return await t(n, { ...r, ...e.call(n, r) });
  }
  e.inner = t;
  function n(e, t) {
    return Xg(l_(e, t));
  }
  e.call = n;
  async function r(t, n) {
    return Cs(t, { ...Yg(n), ...e.call(t, n) });
  }
  e.estimateGas = r;
  async function i(t, n) {
    return Ql(t, { ...Yg(n), ...e.call(t, n) });
  }
  e.simulate = i;
  function a(e) {
    let [t] = ks({ abi: wl, logs: e, eventName: `Transfer`, strict: !0 });
    if (!t) throw Error("`Transfer` event not found.");
    return t;
  }
  e.extractEvent = a;
})((c_ ||= {}));
function l_(e, t) {
  let { amount: n, from: r, to: i, token: a } = t,
    { address: o, decimals: s } = Ug(e, { token: a }),
    c = Bg(n, s);
  return r
    ? { abi: wl, address: o, args: [r, i, c], functionName: `transferFrom` }
    : { abi: wl, address: o, args: [i, c], functionName: `transfer` };
}
async function u_(e, t) {
  let { amount: n, token: r, throwOnReceiptRevert: i = !0 } = t,
    { decimals: a } = Ug(e, { token: r }),
    o = Hg(n, a),
    s = await c_.inner(n_, e, { ...t, throwOnReceiptRevert: i }),
    { args: c } = c_.extractEvent(s.logs);
  return {
    ...c,
    ...(o === void 0 ? {} : { decimals: o, formatted: mh(c.value, o) }),
    receipt: s,
  };
}
function d_(e) {
  return {
    call: (t) => Vl(e, t),
    createAccessList: (t) => Sd(e, t),
    createBlockFilter: () => Cd(e),
    createContractEventFilter: (t) => Gr(e, t),
    createEventFilter: (t) => wd(e, t),
    createPendingTransactionFilter: () => Td(e),
    estimateContractGas: (t) => Cs(e, t),
    estimateGas: (t) => Ss(e, t),
    getBalance: (t) => Ed(e, t),
    getBlobBaseFee: () => Dd(e),
    getBlock: (t) => Eo(e, t),
    getBlockNumber: (t) => uu(e, t),
    getBlockReceipts: (t) => Od(e, t),
    getBlockTransactionCount: (t) => kd(e, t),
    getBytecode: (t) => Ad(e, t),
    getChainId: () => gs(e),
    getCode: (t) => Ad(e, t),
    getContractEvents: (t) => Ms(e, t),
    getDelegation: (t) => jd(e, t),
    getEip712Domain: (t) => Nd(e, t),
    getEnsAddress: (t) => Qu(e, t),
    getEnsAvatar: (t) => yd(e, t),
    getEnsName: (t) => bd(e, t),
    getEnsResolver: (t) => xd(e, t),
    getEnsText: (t) => vd(e, t),
    getFeeHistory: (t) => Id(e, t),
    estimateFeesPerGas: (t) => Ao(e, t),
    getFilterChanges: (t) => du(e, t),
    getFilterLogs: (t) => Ld(e, t),
    getGasPrice: () => Do(e),
    getLogs: (t) => js(e, t),
    getProof: (t) => vh(e, t),
    estimateMaxPriorityFeePerGas: (t) => Oo(e, t),
    fillTransaction: (t) => _s(e, t),
    getRawTransaction: (t) => yh(e, t),
    getStorageAt: (t) => bh(e, t),
    getTransaction: (t) => xh(e, t),
    getTransactionConfirmations: (t) => Sh(e, t),
    getTransactionCount: (t) => No(e, t),
    getTransactionReceipt: (t) => Ch(e, t),
    multicall: (t) => wh(e, t),
    prepareTransactionRequest: (t) => xs(e, t),
    readContract: (t) => Y(e, t),
    sendRawTransaction: (t) => _u(e, t),
    sendRawTransactionSync: (t) => $g(e, t),
    simulate: (t) => Eh(e, t),
    simulateBlocks: (t) => Eh(e, t),
    simulateCalls: (t) => ig(e, t),
    simulateContract: (t) => Ql(e, t),
    verifyHash: (t) => _g(e, t),
    verifyMessage: (t) => Sg(e, t),
    verifySiweMessage: (t) => Rg(e, t),
    verifyTypedData: (t) => Cg(e, t),
    uninstallFilter: (t) => fu(e, t),
    waitForTransactionReceipt: (t) => Tg(e, t),
    watchBlockHeaders: (t) => Dg(e, t),
    watchBlocks: (t) => Og(e, t),
    watchBlockNumber: (t) => wg(e, t),
    watchContractEvent: (t) => pu(e, t),
    watchEvent: (t) => kg(e, t),
    watchPendingTransactions: (t) => Ag(e, t),
    token: f_(e),
  };
}
function f_(e) {
  return {
    getAllowance: Ru(e, i_),
    getBalance: Ru(e, a_),
    getMetadata: Ru(e, o_),
    getTotalSupply: Ru(e, s_),
  };
}
function p_(e) {
  let { key: t = `public`, name: n = `Public Client` } = e;
  return Iu({ ...e, key: t, name: n, type: `publicClient` }).extend(d_);
}
async function m_(e, { chain: t }) {
  let { id: n, name: r, nativeCurrency: i, rpcUrls: a, blockExplorers: o } = t;
  await e.request(
    {
      method: `wallet_addEthereumChain`,
      params: [
        {
          chainId: N(n),
          chainName: r,
          nativeCurrency: i,
          rpcUrls: a.default.http,
          blockExplorerUrls: o
            ? Object.values(o).map(({ url: e }) => e)
            : void 0,
        },
      ],
    },
    { dedupe: !0, retryCount: 0 }
  );
}
function h_(e, t) {
  let { abi: n, args: r, bytecode: i, ...a } = t,
    o = Fl({ abi: n, args: r, bytecode: i });
  return yu(e, { ...a, ...(a.authorizationList ? { to: null } : {}), data: o });
}
async function g_(e) {
  return e.account?.type === `local`
    ? [e.account.address]
    : (await e.request({ method: `eth_accounts` }, { dedupe: !0 })).map((e) =>
        ur(e)
      );
}
async function __(e, t = {}) {
  let { account: n = e.account, chainId: r } = t,
    i = n ? z(n) : void 0,
    a = r ? [i?.address, [N(r)]] : [i?.address],
    o = await e.request({ method: `wallet_getCapabilities`, params: a }),
    s = {};
  for (let [e, t] of Object.entries(o)) {
    s[Number(e)] = {};
    for (let [n, r] of Object.entries(t))
      n === `addSubAccount` && (n = `unstable_addSubAccount`),
        (s[Number(e)][n] = r);
  }
  return typeof r == `number` ? s[r] : s;
}
async function v_(e) {
  return await e.request({ method: `wallet_getPermissions` }, { dedupe: !0 });
}
async function y_(e, t) {
  let { account: n = e.account, chainId: r, nonce: i } = t;
  if (!n) throw new mu({ docsPath: `/docs/eip7702/prepareAuthorization` });
  let a = z(n),
    o = (() => {
      if (t.executor) return t.executor === `self` ? t.executor : z(t.executor);
    })(),
    s = { address: t.contractAddress ?? t.address, chainId: r, nonce: i };
  return (
    s.chainId === void 0 &&
      (s.chainId = e.chain?.id ?? (await T(e, gs, `getChainId`)({}))),
    s.nonce === void 0 &&
      ((s.nonce = await T(
        e,
        No,
        `getTransactionCount`
      )({ address: a.address, blockTag: `pending` })),
      (o === `self` || (o?.address && ws(o.address, a.address))) &&
        (s.nonce += 1)),
    s
  );
}
async function b_(e) {
  return (
    await e.request(
      { method: `eth_requestAccounts` },
      { dedupe: !0, retryCount: 0 }
    )
  ).map((e) => dr(e));
}
async function x_(e, t) {
  return e.request(
    { method: `wallet_requestPermissions`, params: [t] },
    { retryCount: 0 }
  );
}
async function S_(e, t) {
  let { chain: n = e.chain } = t,
    r = t.timeout ?? Math.max((n?.blockTime ?? 0) * 3, 5e3),
    i = await T(e, Ou, `sendCalls`)(t);
  return await T(e, Au, `waitForCallsStatus`)({ ...t, id: i.id, timeout: r });
}
async function C_(e, t) {
  let { id: n } = t;
  await e.request({ method: `wallet_showCallsStatus`, params: [n] });
}
async function w_(e, t) {
  let { account: n = e.account } = t;
  if (!n) throw new mu({ docsPath: `/docs/eip7702/signAuthorization` });
  let r = z(n);
  if (!r.signAuthorization)
    throw new hu({
      docsPath: `/docs/eip7702/signAuthorization`,
      metaMessages: [
        "The `signAuthorization` Action does not support JSON-RPC Accounts.",
      ],
      type: r.type,
    });
  let i = await y_(e, t);
  return r.signAuthorization(i);
}
async function T_(e, { account: t = e.account, message: n }) {
  if (!t) throw new mu({ docsPath: `/docs/actions/wallet/signMessage` });
  let r = z(t);
  if (r.signMessage) return r.signMessage({ message: n });
  let i =
    typeof n == `string`
      ? Ht(n)
      : n.raw instanceof Uint8Array
      ? j(n.raw)
      : n.raw;
  return e.request(
    { method: `personal_sign`, params: [i, r.address] },
    { retryCount: 0 }
  );
}
async function E_(e, t) {
  let { account: n = e.account, chain: r = e.chain, ...i } = t;
  if (!n) throw new mu({ docsPath: `/docs/actions/wallet/signTransaction` });
  let a = z(n);
  ho({ account: a, ...t });
  let o = await T(e, gs, `getChainId`)({});
  r !== null && gu({ currentChainId: o, chain: r });
  let s =
    (r?.formatters || e.chain?.formatters)?.transactionRequest?.format || co;
  return a.signTransaction
    ? a.signTransaction(
        { ...i, account: a, chainId: o },
        { serializer: e.chain?.serializers?.transaction }
      )
    : await e.request(
        {
          method: `eth_signTransaction`,
          params: [
            {
              ...s({ ...i, account: a }, `signTransaction`),
              chainId: N(o),
              from: a.address,
            },
          ],
        },
        { retryCount: 0 }
      );
}
async function D_(e, t) {
  let { account: n = e.account, domain: r, message: i, primaryType: a } = t;
  if (!n) throw new mu({ docsPath: `/docs/actions/wallet/signTypedData` });
  let o = z(n),
    s = { EIP712Domain: Nf({ domain: r }), ...t.types };
  if (
    (Mf({ domain: r, message: i, primaryType: a, types: s }), o.signTypedData)
  )
    return o.signTypedData({ domain: r, message: i, primaryType: a, types: s });
  let c = jf({ domain: r, message: i, primaryType: a, types: s });
  return e.request(
    { method: `eth_signTypedData_v4`, params: [o.address, c] },
    { retryCount: 0 }
  );
}
async function O_(e, { id: t }) {
  await e.request(
    { method: `wallet_switchEthereumChain`, params: [{ chainId: N(t) }] },
    { retryCount: 0 }
  );
}
async function k_(e, t) {
  return await e.request(
    { method: `wallet_watchAsset`, params: t },
    { retryCount: 0 }
  );
}
function A_(e) {
  return {
    addChain: (t) => m_(e, t),
    deployContract: (t) => h_(e, t),
    fillTransaction: (t) => _s(e, t),
    getAddresses: () => g_(e),
    getCallsStatus: (t) => ku(e, t),
    getCapabilities: (t) => __(e, t),
    getChainId: () => gs(e),
    getPermissions: () => v_(e),
    prepareAuthorization: (t) => y_(e, t),
    prepareTransactionRequest: (t) => xs(e, t),
    requestAddresses: () => b_(e),
    requestPermissions: (t) => x_(e, t),
    sendCalls: (t) => Ou(e, t),
    sendCallsSync: (t) => S_(e, t),
    sendRawTransaction: (t) => _u(e, t),
    sendRawTransactionSync: (t) => $g(e, t),
    sendTransaction: (t) => yu(e, t),
    sendTransactionSync: (t) => t_(e, t),
    showCallsStatus: (t) => C_(e, t),
    signAuthorization: (t) => w_(e, t),
    signMessage: (t) => T_(e, t),
    signTransaction: (t) => E_(e, t),
    signTypedData: (t) => D_(e, t),
    switchChain: (t) => O_(e, t),
    waitForCallsStatus: (t) => Au(e, t),
    watchAsset: (t) => k_(e, t),
    writeContract: (t) => bu(e, t),
    writeContractSync: (t) => n_(e, t),
    token: {
      approve: Ru(e, Zg),
      approveSync: Ru(e, r_),
      transfer: Ru(e, c_),
      transferSync: Ru(e, u_),
    },
  };
}
function j_(e) {
  let { key: t = `wallet`, name: n = `Wallet Client`, transport: r } = e;
  return Iu({
    ...e,
    key: t,
    name: n,
    transport: r,
    type: `walletClient`,
  }).extend(A_);
}
function M_(
  {
    key: e,
    methods: t,
    name: n,
    request: r,
    retryCount: i = 3,
    retryDelay: a = 150,
    timeout: o,
    type: s,
  },
  c
) {
  let l = Fu();
  return {
    config: {
      key: e,
      methods: t,
      name: n,
      request: r,
      retryCount: i,
      retryDelay: a,
      timeout: o,
      type: s,
    },
    request: rf(r, { methods: t, retryCount: i, retryDelay: a, uid: l }),
    value: c,
  };
}
function N_(e, t = {}) {
  let {
    key: n = `custom`,
    methods: r,
    name: i = `Custom Provider`,
    retryDelay: a,
  } = t;
  return ({ retryCount: o }) =>
    M_({
      key: n,
      methods: r,
      name: i,
      request: e.request.bind(e),
      retryCount: t.retryCount ?? o,
      retryDelay: a,
      type: `custom`,
    });
}
function P_(e, t = {}) {
  let {
    key: n = `fallback`,
    name: r = `Fallback`,
    rank: i = !1,
    shouldThrow: a = F_,
    retryCount: o,
    retryDelay: s,
  } = t;
  return ({ chain: t, pollingInterval: c = 4e3, timeout: l, ...u }) => {
    let d = e,
      f = () => {},
      p = M_(
        {
          key: n,
          name: r,
          async request({ method: e, params: n }) {
            let r,
              i = async (o = 0) => {
                let s = d[o]({ ...u, chain: t, retryCount: 0, timeout: l });
                try {
                  let t = await s.request({ method: e, params: n });
                  return (
                    f({
                      method: e,
                      params: n,
                      response: t,
                      transport: s,
                      status: `success`,
                    }),
                    t
                  );
                } catch (c) {
                  if (
                    (f({
                      error: c,
                      method: e,
                      params: n,
                      transport: s,
                      status: `error`,
                    }),
                    a(c) ||
                      o === d.length - 1 ||
                      ((r ??= d.slice(o + 1).some((n) => {
                        let { include: r, exclude: i } =
                          n({ chain: t }).config.methods || {};
                        return r ? r.includes(e) : !i || !i.includes(e);
                      })),
                      !r))
                  )
                    throw c;
                  return i(o + 1);
                }
              };
            return i();
          },
          retryCount: o,
          retryDelay: s,
          type: `fallback`,
        },
        {
          onResponse: (e) => (f = e),
          transports: d.map((e) => e({ chain: t, retryCount: 0 })),
        }
      );
    if (i) {
      let e = typeof i == `object` ? i : {};
      I_({
        chain: t,
        interval: e.interval ?? c,
        onTransports: (e) => (d = e),
        ping: e.ping,
        sampleCount: e.sampleCount,
        timeout: e.timeout,
        transports: d,
        weights: e.weights,
      });
    }
    return p;
  };
}
function F_(e) {
  return !!(
    `code` in e &&
    typeof e.code == `number` &&
    (e.code === fa.code ||
      e.code === ga.code ||
      e.code === ka.code ||
      Ga.nodeMessage.test(e.message) ||
      e.code === 5e3)
  );
}
function I_({
  chain: e,
  interval: t = 4e3,
  onTransports: n,
  ping: r,
  sampleCount: i = 10,
  timeout: a = 1e3,
  transports: o,
  weights: s = {},
}) {
  let { stability: c = 0.7, latency: l = 0.3 } = s,
    u = [],
    d = async () => {
      let s = await Promise.all(
        o.map(async (t) => {
          let n = t({ chain: e, retryCount: 0, timeout: a }),
            i = Date.now(),
            o,
            s;
          try {
            await (r
              ? r({ transport: n })
              : n.request({ method: `net_listening` })),
              (s = 1);
          } catch {
            s = 0;
          } finally {
            o = Date.now();
          }
          return { latency: o - i, success: s };
        })
      );
      u.push(s), u.length > i && u.shift();
      let f = Math.max(
        ...u.map((e) => Math.max(...e.map(({ latency: e }) => e)))
      );
      n(
        o
          .map((e, t) => {
            let n = u.map((e) => e[t].latency),
              r = 1 - n.reduce((e, t) => e + t, 0) / n.length / f,
              i = u.map((e) => e[t].success),
              a = i.reduce((e, t) => e + t, 0) / i.length;
            return a === 0 ? [0, t] : [l * r + c * a, t];
          })
          .sort((e, t) => t[0] - e[0])
          .map(([, e]) => o[e])
      ),
        await ru(t),
        d();
    };
  d();
}
var L_ = class extends D {
    constructor() {
      super(
        `No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.`,
        { docsPath: `/docs/clients/intro`, name: `UrlRequiredError` }
      );
    }
  },
  R_ = 0,
  z_ = new WeakMap();
function B_(e) {
  if (!e) return `default`;
  let t = z_.get(e);
  if (t !== void 0) return t;
  let n = R_++;
  return z_.set(e, n), n;
}
function V_(e, t = {}) {
  let {
    batch: n,
    fetchFn: r,
    fetchOptions: i,
    key: a = `http`,
    maxResponseBodySize: o,
    methods: s,
    name: c = `HTTP JSON-RPC`,
    onFetchRequest: l,
    onFetchResponse: u,
    retryDelay: d,
    raw: f,
  } = t;
  return ({ chain: p, retryCount: m, timeout: h }) => {
    let { batchSize: g = 1e3, wait: _ = 0 } = typeof n == `object` ? n : {},
      v = t.retryCount ?? m,
      y = h ?? t.timeout ?? 1e4,
      b = e || p?.rpcUrls.default.http[0];
    if (!b) throw new L_();
    let x = xf(b, {
      fetchFn: r,
      fetchOptions: i,
      maxResponseBodySize: o,
      onRequest: l,
      onResponse: u,
      timeout: y,
    });
    return M_(
      {
        key: a,
        methods: s,
        name: c,
        async request({ method: e, params: t }, r) {
          let i = { method: e, params: t },
            a = r?.signal ? { signal: r.signal } : void 0,
            { schedule: o } = Bl({
              id: `${b}.${B_(r?.signal)}`,
              wait: _,
              shouldSplitBatch(e) {
                return e.length > g;
              },
              fn: (e) => x.request({ body: e, fetchOptions: a }),
              sort: (e, t) => e.id - t.id,
            }),
            [{ error: s, result: c }] = await (async (e) =>
              n ? o(e) : [await x.request({ body: e, fetchOptions: a })])(i);
          if (f) return { error: s, result: c };
          if (s) throw new ta({ body: i, error: s, url: b });
          return c;
        },
        retryCount: v,
        retryDelay: d,
        timeout: y,
        type: `http`,
      },
      { fetchOptions: i, url: b }
    );
  };
}
function H_(e) {
  let { r: t, s: n } = Gm.Signature.fromCompact(e.slice(2, 130)),
    r = Number(`0x${e.slice(130)}`),
    [i, a] = (() => {
      if (r === 0 || r === 1) return [void 0, r];
      if (r === 27) return [BigInt(r), 0];
      if (r === 28) return [BigInt(r), 1];
      throw Error(`Invalid yParityOrV value`);
    })();
  return i === void 0
    ? { r: N(t, { size: 32 }), s: N(n, { size: 32 }), yParity: a }
    : { r: N(t, { size: 32 }), s: N(n, { size: 32 }), v: i, yParity: a };
}
var U_ = e({
  createPublicClient: () => p_,
  createWalletClient: () => j_,
  custom: () => N_,
  defineChain: () => hf,
  deploylessCallViaBytecodeBytecode: () => Tl,
  deploylessCallViaFactoryBytecode: () => El,
  encodeFunctionData: () => B,
  erc6492SignatureValidatorByteCode: () => Dl,
  ethAddress: () => qh,
  getAddress: () => dr,
  http: () => V_,
  offchainLookupSignature: () => df,
  parseUnits: () => hh,
  presignMessagePrefix: () => wf,
  universalSignatureValidatorByteCode: () => Dl,
  zeroAddress: () => Jh,
  zeroHash: () => zeroHash,
});
export {
  So as $,
  Au as A,
  Rn as At,
  Vl as B,
  kt as Bt,
  hf as C,
  dr as Ct,
  Ed as D,
  tr as Dt,
  Ad as E,
  F as Et,
  yu as F,
  j as Ft,
  Ss as G,
  Ke as Gt,
  Ds as H,
  E as Ht,
  mu as I,
  k as It,
  Zo as J,
  xs as K,
  We as Kt,
  iu as L,
  A as Lt,
  wu as M,
  Yt as Mt,
  Su as N,
  N as Nt,
  Bu as O,
  bn as Ot,
  bu as P,
  Ht as Pt,
  To as Q,
  nu as R,
  Rt,
  gf as S,
  ur as St,
  Rd as T,
  sr as Tt,
  Ts as U,
  Xe as Ut,
  wl as V,
  D as Vt,
  ws as W,
  T as Wt,
  Qo as X,
  $o as Y,
  Ao as Z,
  om as _,
  wr as _t,
  N_ as a,
  ga as at,
  Ef as b,
  R as bt,
  y_ as c,
  Xi as ct,
  Tg as d,
  V as dt,
  xo as et,
  xh as f,
  vi as ft,
  Fm as g,
  Lr as gt,
  ph as h,
  z as ht,
  P_ as i,
  xa as it,
  Tu as j,
  P as jt,
  Iu as k,
  Fn as kt,
  p_ as l,
  Ni as lt,
  mh as m,
  B as mt,
  H_ as n,
  La as nt,
  j_ as o,
  Ji as ot,
  hh as p,
  oi as pt,
  gs as q,
  V_ as r,
  da as rt,
  T_ as s,
  Yi as st,
  U_ as t,
  po as tt,
  Ag as u,
  H as ut,
  Kf as v,
  gr as vt,
  Kd as w,
  I as wt,
  _f as x,
  L as xt,
  Ff as y,
  mr as yt,
  Y as z,
  O as zt,
};
