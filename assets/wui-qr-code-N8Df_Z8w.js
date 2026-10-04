import { o as e } from "./rolldown-runtime-C_s2cVnS.js";
import { c as t, f as n, m as r, o as i, r as a } from "./exports-GL0dN1cC.js";
import { o, u as s } from "./wui-text--4f0jOux.js";
import "./wui-image-CWbJpeT3.js";
import { t as c } from "./browser-CQ2H9MfN.js";
var l = e(c(), 1),
  u = 0.1,
  d = 2.5,
  f = 7;
function p(e, t, n) {
  return e !== t && (e - t < 0 ? t - e : e - t) <= n + u;
}
function m(e, t) {
  let n = Array.prototype.slice.call(
      l.create(e, { errorCorrectionLevel: t }).modules.data,
      0
    ),
    r = Math.sqrt(n.length);
  return n.reduce(
    (e, t, n) => (n % r === 0 ? e.push([t]) : e[e.length - 1].push(t)) && e,
    []
  );
}
var h = {
    generate({
      uri: e,
      size: t,
      logoSize: n,
      padding: i = 8,
      dotColor: a = `var(--apkt-colors-black)`,
    }) {
      let o = [],
        s = m(e, `Q`),
        c = (t - 2 * i) / s.length,
        l = [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 0, y: 1 },
        ];
      l.forEach(({ x: e, y: t }) => {
        let n = (s.length - f) * c * e + i,
          u = (s.length - f) * c * t + i,
          d = 0.45;
        for (let e = 0; e < l.length; e += 1) {
          let t = c * (f - e * 2);
          o.push(r`
            <rect
              fill=${
                e === 2
                  ? `var(--apkt-colors-black)`
                  : `var(--apkt-colors-white)`
              }
              width=${e === 0 ? t - 10 : t}
              rx= ${e === 0 ? (t - 10) * d : t * d}
              ry= ${e === 0 ? (t - 10) * d : t * d}
              stroke=${a}
              stroke-width=${e === 0 ? 10 : 0}
              height=${e === 0 ? t - 10 : t}
              x= ${e === 0 ? u + c * e + 5 : u + c * e}
              y= ${e === 0 ? n + c * e + 5 : n + c * e}
            />
          `);
        }
      });
      let u = Math.floor((n + 25) / c),
        h = s.length / 2 - u / 2,
        g = s.length / 2 + u / 2 - 1,
        _ = [];
      s.forEach((e, t) => {
        e.forEach((e, n) => {
          if (
            s[t][n] &&
            !(
              (t < f && n < f) ||
              (t > s.length - 8 && n < f) ||
              (t < f && n > s.length - 8)
            ) &&
            !(t > h && t < g && n > h && n < g)
          ) {
            let e = t * c + c / 2 + i,
              r = n * c + c / 2 + i;
            _.push([e, r]);
          }
        });
      });
      let v = {};
      return (
        _.forEach(([e, t]) => {
          v[e] ? v[e]?.push(t) : (v[e] = [t]);
        }),
        Object.entries(v)
          .map(([e, t]) => {
            let n = t.filter((e) => t.every((t) => !p(e, t, c)));
            return [Number(e), n];
          })
          .forEach(([e, t]) => {
            t.forEach((t) => {
              o.push(r`<circle cx=${e} cy=${t} fill=${a} r=${c / d} />`);
            });
          }),
        Object.entries(v)
          .filter(([e, t]) => t.length > 1)
          .map(([e, t]) => {
            let n = t.filter((e) => t.some((t) => p(e, t, c)));
            return [Number(e), n];
          })
          .map(([e, t]) => {
            t.sort((e, t) => (e < t ? -1 : 1));
            let n = [];
            for (let e of t) {
              let t = n.find((t) => t.some((t) => p(e, t, c)));
              t ? t.push(e) : n.push([e]);
            }
            return [e, n.map((e) => [e[0], e[e.length - 1]])];
          })
          .forEach(([e, t]) => {
            t.forEach(([t, n]) => {
              o.push(r`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${n}
                stroke=${a}
                stroke-width=${c / (d / 2)}
                stroke-linecap="round"
              />
            `);
            });
          }),
        o
      );
    },
  },
  g = i`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({ colors: e }) => e.white};
    border: 1px solid ${({ tokens: e }) => e.theme.borderPrimary};
  }

  :host {
    border-radius: ${({ borderRadius: e }) => e[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({ tokens: e }) => e.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({ tokens: e }) => e.theme.backgroundPrimary};
    border-radius: ${({ borderRadius: e }) => e[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({ borderRadius: e }) => e[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`,
  _ = function (e, t, n, r) {
    var i = arguments.length,
      a =
        i < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, n))
          : r,
      o;
    if (typeof Reflect == `object` && typeof Reflect.decorate == `function`)
      a = Reflect.decorate(e, t, n, r);
    else
      for (var s = e.length - 1; s >= 0; s--)
        (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
    return i > 3 && a && Object.defineProperty(t, n, a), a;
  },
  v = class extends t {
    constructor() {
      super(...arguments),
        (this.uri = ``),
        (this.size = 500),
        (this.theme = `dark`),
        (this.imageSrc = void 0),
        (this.alt = void 0),
        (this.arenaClear = void 0),
        (this.farcaster = void 0);
    }
    render() {
      return (
        (this.dataset.theme = this.theme),
        (this.dataset.clear = String(this.arenaClear)),
        n`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`
      );
    }
    templateSvg() {
      return r`
      <svg viewBox="0 0 ${this.size} ${this.size}" width="100%" height="100%">
        ${h.generate({
          uri: this.uri,
          size: this.size,
          logoSize: this.arenaClear ? 0 : this.size / 4,
        })}
      </svg>
    `;
    }
    templateVisual() {
      return this.imageSrc
        ? n`<wui-image src=${this.imageSrc} alt=${
            this.alt ?? `logo`
          }></wui-image>`
        : this.farcaster
        ? n`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`
        : n`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`;
    }
  };
(v.styles = [a, g]),
  _([s()], v.prototype, `uri`, void 0),
  _([s({ type: Number })], v.prototype, `size`, void 0),
  _([s()], v.prototype, `theme`, void 0),
  _([s()], v.prototype, `imageSrc`, void 0),
  _([s()], v.prototype, `alt`, void 0),
  _([s({ type: Boolean })], v.prototype, `arenaClear`, void 0),
  _([s({ type: Boolean })], v.prototype, `farcaster`, void 0),
  (v = _([o(`wui-qr-code`)], v));
