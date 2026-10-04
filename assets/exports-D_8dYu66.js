import { t as e } from "./SIWXUtil-BXuB1PV6.js";
import {
  B as t,
  C as n,
  D as r,
  E as i,
  H as a,
  M as o,
  O as s,
  S as c,
  T as ee,
  U as l,
  V as u,
  b as d,
  et as te,
  f as ne,
  g as re,
  j as f,
  l as p,
  n as ie,
  nt as ae,
  r as m,
  st as h,
  t as g,
  v as _,
  w as v,
  x as oe,
  y as se,
} from "./ModalController-CZlcBei4.js";
import "./w3m-activity-list-Dex5H9hX.js";
import { t as ce } from "./NavigationUtil-CLCRNDHF.js";
import { n as le, t as ue } from "./ErrorUtil-H8_l-xtM.js";
import { t as de } from "./AlertController-jOqmXqOH.js";
import "./w3m-tooltip-Ch8qBZxq.js";
import { t as fe } from "./wui-loading-thumbnail-DmkZQmjw.js";
import { t as y } from "./ExchangeController-Bf0z3fUa.js";
import { t as pe } from "./ConstantsUtil-DDp9om2U.js";
import { t as me } from "./CaipNetworkUtil-BEGNk9mF.js";
import { t as b } from "./HelpersUtil-mCo6UpyW.js";
import {
  _ as x,
  c as S,
  f as C,
  o as w,
  r as T,
  t as E,
} from "./exports-GL0dN1cC.js";
import {
  c as D,
  l as O,
  o as k,
  s as A,
  t as he,
  u as j,
} from "./wui-text--4f0jOux.js";
import { t as ge } from "./MathUtil-B2UslVSw.js";
import "./wui-loading-spinner-fUh-Nokt.js";
import "./wui-button-dAIbrjbl.js";
import "./wui-icon-Cbvx8fyh.js";
import "./wui-icon-link-DWZ_cZAC.js";
import "./wui-image-CWbJpeT3.js";
import "./wui-list-item-FCkR5KbW.js";
import "./wui-loading-spinner-BrDLNcVf.js";
import { t as _e } from "./wui-wallet-switch-CBoGgv-w.js";
import "./wui-separator-DYzL5EDF.js";
import "./wui-icon-box-CXmrBJiB.js";
import { t as ve } from "./wui-list-social-yeqQzY6K.js";
import "./wui-shimmer-DZc-QRRX.js";
import "./wui-shimmer-CRmfilNo.js";
import "./wui-link-BC8xxzVd.js";
import "./wui-icon-box-DX_XyRVV.js";
import { n as ye, t as be } from "./ref-CTGZ1-MC.js";
import "./wui-input-text-C_HTq8-Q.js";
import "./wui-email-input-mBeULGGX.js";
import { t as xe } from "./HelpersUtil-DQ6quKk4.js";
import "./wui-avatar-Nj9P3Mnf.js";
import "./w3m-onramp-providers-footer-GRgDqNkk.js";
import { n as Se, t as Ce } from "./wui-list-wallet-DhRv6wSj.js";
import "./wui-list-token-CpjeFbLZ.js";
import "./wui-qr-code-N8Df_Z8w.js";
import "./wui-visual-BkIdCCGO.js";
import "./wui-input-text-BX12ia3d.js";
var we = w`
  :host {
    display: block;
  }

  button {
    border-radius: ${({ borderRadius: e }) => e[20]};
    background: ${({ tokens: e }) => e.theme.foregroundPrimary};
    display: flex;
    gap: ${({ spacing: e }) => e[1]};
    padding: ${({ spacing: e }) => e[1]};
    color: ${({ tokens: e }) => e.theme.textSecondary};
    border-radius: ${({ borderRadius: e }) => e[16]};
    height: 32px;
    transition: box-shadow ${({ durations: e }) => e.lg}
      ${({ easings: e }) => e[`ease-out-power-2`]};
    will-change: box-shadow;
  }

  button wui-flex.avatar-container {
    width: 28px;
    height: 24px;
    position: relative;

    wui-flex.network-image-container {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 12px;
      height: 12px;
    }

    wui-flex.network-image-container wui-icon {
      background: ${({ tokens: e }) => e.theme.foregroundPrimary};
    }

    wui-avatar {
      width: 24px;
      min-width: 24px;
      height: 24px;
    }

    wui-icon {
      width: 12px;
      height: 12px;
    }
  }

  wui-image,
  wui-icon {
    border-radius: ${({ borderRadius: e }) => e[16]};
  }

  wui-text {
    white-space: nowrap;
  }

  button wui-flex.balance-container {
    height: 100%;
    border-radius: ${({ borderRadius: e }) => e[16]};
    padding-left: ${({ spacing: e }) => e[1]};
    padding-right: ${({ spacing: e }) => e[1]};
    background: ${({ tokens: e }) => e.theme.foregroundSecondary};
    color: ${({ tokens: e }) => e.theme.textPrimary};
    transition: background-color ${({ durations: e }) => e.lg}
      ${({ easings: e }) => e[`ease-out-power-2`]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:focus-visible:enabled,
  button:active:enabled {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

    wui-flex.balance-container {
      background: ${({ tokens: e }) => e.theme.foregroundTertiary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled wui-text,
  button:disabled wui-flex.avatar-container {
    opacity: 0.3;
  }
`,
  M = function (e, t, n, r) {
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
  N = class extends S {
    constructor() {
      super(...arguments),
        (this.networkSrc = void 0),
        (this.avatarSrc = void 0),
        (this.balance = void 0),
        (this.isUnsupportedChain = void 0),
        (this.disabled = !1),
        (this.loading = !1),
        (this.address = ``),
        (this.profileName = ``),
        (this.charsStart = 4),
        (this.charsEnd = 6);
    }
    render() {
      return C`
      <button
        ?disabled=${this.disabled}
        class=${D(this.balance ? void 0 : `local-no-balance`)}
        data-error=${D(this.isUnsupportedChain)}
      >
        ${this.imageTemplate()} ${this.addressTemplate()} ${this.balanceTemplate()}
      </button>
    `;
    }
    imageTemplate() {
      let e = this.networkSrc
        ? C`<wui-image src=${this.networkSrc}></wui-image>`
        : C` <wui-icon size="inherit" color="inherit" name="networkPlaceholder"></wui-icon> `;
      return C`<wui-flex class="avatar-container">
      <wui-avatar
        .imageSrc=${this.avatarSrc}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>

      <wui-flex class="network-image-container">${e}</wui-flex>
    </wui-flex>`;
    }
    addressTemplate() {
      return C`<wui-text variant="md-regular" color="inherit">
      ${
        this.address
          ? A.getTruncateString({
              string: this.profileName || this.address,
              charsStart: this.profileName ? 18 : this.charsStart,
              charsEnd: this.profileName ? 0 : this.charsEnd,
              truncate: this.profileName ? `end` : `middle`,
            })
          : null
      }
    </wui-text>`;
    }
    balanceTemplate() {
      if (this.balance) {
        let e = this.loading
          ? C`<wui-loading-spinner size="md" color="inherit"></wui-loading-spinner>`
          : C`<wui-text variant="md-regular" color="inherit"> ${this.balance}</wui-text>`;
        return C`<wui-flex alignItems="center" justifyContent="center" class="balance-container"
        >${e}</wui-flex
      >`;
      }
      return null;
    }
  };
(N.styles = [T, E, we]),
  M([j()], N.prototype, `networkSrc`, void 0),
  M([j()], N.prototype, `avatarSrc`, void 0),
  M([j()], N.prototype, `balance`, void 0),
  M([j({ type: Boolean })], N.prototype, `isUnsupportedChain`, void 0),
  M([j({ type: Boolean })], N.prototype, `disabled`, void 0),
  M([j({ type: Boolean })], N.prototype, `loading`, void 0),
  M([j()], N.prototype, `address`, void 0),
  M([j()], N.prototype, `profileName`, void 0),
  M([j()], N.prototype, `charsStart`, void 0),
  M([j()], N.prototype, `charsEnd`, void 0),
  (N = M([k(`wui-account-button`)], N));
var P = function (e, t, n, r) {
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
  F = class extends S {
    constructor() {
      super(...arguments),
        (this.unsubscribe = []),
        (this.disabled = !1),
        (this.balance = `show`),
        (this.charsStart = 4),
        (this.charsEnd = 6),
        (this.namespace = void 0),
        (this.isSupported = o.state.allowUnsupportedChain
          ? !0
          : !m.state.activeChain ||
            m.checkIfSupportedNetwork(m.state.activeChain));
    }
    connectedCallback() {
      super.connectedCallback(),
        this.setAccountData(m.getAccountData(this.namespace)),
        this.setNetworkData(m.getNetworkData(this.namespace));
    }
    firstUpdated() {
      let e = this.namespace;
      e
        ? this.unsubscribe.push(
            m.subscribeChainProp(
              `accountState`,
              (e) => {
                this.setAccountData(e);
              },
              e
            ),
            m.subscribeChainProp(
              `networkState`,
              (t) => {
                this.setNetworkData(t),
                  (this.isSupported = m.checkIfSupportedNetwork(
                    e,
                    t?.caipNetwork?.caipNetworkId
                  ));
              },
              e
            )
          )
        : this.unsubscribe.push(
            r.subscribeNetworkImages(() => {
              this.networkImage = i.getNetworkImage(this.network);
            }),
            m.subscribeKey(`activeCaipAddress`, (e) => {
              this.caipAddress = e;
            }),
            m.subscribeChainProp(`accountState`, (e) => {
              this.setAccountData(e);
            }),
            m.subscribeKey(`activeCaipNetwork`, (e) => {
              (this.network = e),
                (this.networkImage = i.getNetworkImage(e)),
                (this.isSupported =
                  !e?.chainNamespace ||
                  m.checkIfSupportedNetwork(e?.chainNamespace)),
                this.fetchNetworkImage(e);
            })
          );
    }
    updated() {
      this.fetchNetworkImage(this.network);
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      if (!m.state.activeChain) return null;
      let e = this.balance === `show`,
        t = typeof this.balanceVal != `string`,
        { formattedText: n } = u.parseBalance(
          this.balanceVal,
          this.balanceSymbol
        );
      return C`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${
          !o.state.allowUnsupportedChain && !this.isSupported
        }
        address=${D(u.getPlainAddress(this.caipAddress))}
        profileName=${D(this.profileName)}
        networkSrc=${D(this.networkImage)}
        avatarSrc=${D(this.profileImage)}
        balance=${e ? n : ``}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${
          this.namespace ? `-${this.namespace}` : ``
        }`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${t}
      >
      </wui-account-button>
    `;
    }
    onClick() {
      this.isSupported || o.state.allowUnsupportedChain
        ? g.open({ namespace: this.namespace })
        : g.open({ view: `UnsupportedChain` });
    }
    async fetchNetworkImage(e) {
      e?.assets?.imageId &&
        (this.networkImage = await i.fetchNetworkImage(e?.assets?.imageId));
    }
    setAccountData(e) {
      e &&
        ((this.caipAddress = e.caipAddress),
        (this.balanceVal = e.balance),
        (this.balanceSymbol = e.balanceSymbol),
        (this.profileName = e.profileName),
        (this.profileImage = e.profileImage));
    }
    setNetworkData(e) {
      e &&
        ((this.network = e.caipNetwork),
        (this.networkImage = i.getNetworkImage(e.caipNetwork)));
    }
  };
P([j({ type: Boolean })], F.prototype, `disabled`, void 0),
  P([j()], F.prototype, `balance`, void 0),
  P([j()], F.prototype, `charsStart`, void 0),
  P([j()], F.prototype, `charsEnd`, void 0),
  P([j()], F.prototype, `namespace`, void 0),
  P([O()], F.prototype, `caipAddress`, void 0),
  P([O()], F.prototype, `balanceVal`, void 0),
  P([O()], F.prototype, `balanceSymbol`, void 0),
  P([O()], F.prototype, `profileName`, void 0),
  P([O()], F.prototype, `profileImage`, void 0),
  P([O()], F.prototype, `network`, void 0),
  P([O()], F.prototype, `networkImage`, void 0),
  P([O()], F.prototype, `isSupported`, void 0);
var Te = class extends F {};
Te = P([k(`w3m-account-button`)], Te);
var Ee = class extends F {};
Ee = P([k(`appkit-account-button`)], Ee);
var De = x`
  :host {
    display: block;
    width: max-content;
  }
`,
  I = function (e, t, n, r) {
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
  L = class extends S {
    constructor() {
      super(...arguments),
        (this.unsubscribe = []),
        (this.disabled = !1),
        (this.balance = void 0),
        (this.size = void 0),
        (this.label = void 0),
        (this.loadingLabel = void 0),
        (this.charsStart = 4),
        (this.charsEnd = 6),
        (this.namespace = void 0);
    }
    firstUpdated() {
      (this.caipAddress = this.namespace
        ? m.getAccountData(this.namespace)?.caipAddress
        : m.state.activeCaipAddress),
        this.namespace
          ? this.unsubscribe.push(
              m.subscribeChainProp(
                `accountState`,
                (e) => {
                  this.caipAddress = e?.caipAddress;
                },
                this.namespace
              )
            )
          : this.unsubscribe.push(
              m.subscribeKey(`activeCaipAddress`, (e) => (this.caipAddress = e))
            );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      return this.caipAddress
        ? C`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${D(this.balance)}
            .charsStart=${D(this.charsStart)}
            .charsEnd=${D(this.charsEnd)}
            namespace=${D(this.namespace)}
          >
          </appkit-account-button>
        `
        : C`
          <appkit-connect-button
            size=${D(this.size)}
            label=${D(this.label)}
            loadingLabel=${D(this.loadingLabel)}
            namespace=${D(this.namespace)}
          ></appkit-connect-button>
        `;
    }
  };
(L.styles = De),
  I([j({ type: Boolean })], L.prototype, `disabled`, void 0),
  I([j()], L.prototype, `balance`, void 0),
  I([j()], L.prototype, `size`, void 0),
  I([j()], L.prototype, `label`, void 0),
  I([j()], L.prototype, `loadingLabel`, void 0),
  I([j()], L.prototype, `charsStart`, void 0),
  I([j()], L.prototype, `charsEnd`, void 0),
  I([j()], L.prototype, `namespace`, void 0),
  I([O()], L.prototype, `caipAddress`, void 0);
var Oe = class extends L {};
Oe = I([k(`w3m-button`)], Oe);
var ke = class extends L {};
ke = I([k(`appkit-button`)], ke);
var Ae = w`
  :host {
    position: relative;
    display: block;
  }

  button {
    border-radius: ${({ borderRadius: e }) => e[2]};
  }

  button[data-size='sm'] {
    padding: ${({ spacing: e }) => e[2]};
  }

  button[data-size='md'] {
    padding: ${({ spacing: e }) => e[3]};
  }

  button[data-size='lg'] {
    padding: ${({ spacing: e }) => e[4]};
  }

  button[data-variant='primary'] {
    background: ${({ tokens: e }) => e.core.backgroundAccentPrimary};
  }

  button[data-variant='secondary'] {
    background: ${({ tokens: e }) => e.core.foregroundAccent010};
  }

  button:hover:enabled {
    border-radius: ${({ borderRadius: e }) => e[3]};
  }

  button:disabled {
    cursor: not-allowed;
  }

  button[data-loading='true'] {
    cursor: not-allowed;
  }

  button[data-loading='true'][data-size='sm'] {
    border-radius: ${({ borderRadius: e }) => e[32]};
    padding: ${({ spacing: e }) => e[2]} ${({ spacing: e }) => e[3]};
  }

  button[data-loading='true'][data-size='md'] {
    border-radius: ${({ borderRadius: e }) => e[20]};
    padding: ${({ spacing: e }) => e[3]} ${({ spacing: e }) => e[4]};
  }

  button[data-loading='true'][data-size='lg'] {
    border-radius: ${({ borderRadius: e }) => e[16]};
    padding: ${({ spacing: e }) => e[4]} ${({ spacing: e }) => e[5]};
  }
`,
  je = function (e, t, n, r) {
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
  Me = class extends S {
    constructor() {
      super(...arguments),
        (this.size = `md`),
        (this.variant = `primary`),
        (this.loading = !1),
        (this.text = `Connect Wallet`);
    }
    render() {
      return C`
      <button
        data-loading=${this.loading}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.loading}
      >
        ${this.contentTemplate()}
      </button>
    `;
    }
    contentTemplate() {
      let e = { lg: `lg-regular`, md: `md-regular`, sm: `sm-regular` },
        t = { primary: `invert`, secondary: `accent-primary` };
      return this.loading
        ? C`<wui-loading-spinner
      color=${t[this.variant]}
      size=${this.size}
    ></wui-loading-spinner>`
        : C` <wui-text variant=${e[this.size]} color=${t[this.variant]}>
        ${this.text}
      </wui-text>`;
    }
  };
(Me.styles = [T, E, Ae]),
  je([j()], Me.prototype, `size`, void 0),
  je([j()], Me.prototype, `variant`, void 0),
  je([j({ type: Boolean })], Me.prototype, `loading`, void 0),
  je([j()], Me.prototype, `text`, void 0),
  (Me = je([k(`wui-connect-button`)], Me));
var Ne = function (e, t, n, r) {
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
  Pe = class extends S {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.size = `md`),
        (this.label = `Connect Wallet`),
        (this.loadingLabel = `Connecting...`),
        (this.open = g.state.open),
        (this.loading = this.namespace
          ? g.state.loadingNamespaceMap.get(this.namespace)
          : g.state.loading),
        this.unsubscribe.push(
          g.subscribe((e) => {
            (this.open = e.open),
              (this.loading = this.namespace
                ? e.loadingNamespaceMap.get(this.namespace)
                : e.loading);
          })
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      return C`
      <wui-connect-button
        size=${D(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${
          this.namespace ? `-${this.namespace}` : ``
        }`}
      >
        ${this.loading ? this.loadingLabel : this.label}
      </wui-connect-button>
    `;
    }
    onClick() {
      this.open
        ? g.close()
        : this.loading ||
          g.open({ view: `Connect`, namespace: this.namespace });
    }
  };
Ne([j()], Pe.prototype, `size`, void 0),
  Ne([j()], Pe.prototype, `label`, void 0),
  Ne([j()], Pe.prototype, `loadingLabel`, void 0),
  Ne([j()], Pe.prototype, `namespace`, void 0),
  Ne([O()], Pe.prototype, `open`, void 0),
  Ne([O()], Pe.prototype, `loading`, void 0);
var Fe = class extends Pe {};
Fe = Ne([k(`w3m-connect-button`)], Fe);
var Ie = class extends Pe {};
Ie = Ne([k(`appkit-connect-button`)], Ie);
var Le = w`
  :host {
    display: block;
  }

  button {
    border-radius: ${({ borderRadius: e }) => e[32]};
    display: flex;
    gap: ${({ spacing: e }) => e[1]};
    padding: ${({ spacing: e }) => e[1]} ${({ spacing: e }) => e[2]}
      ${({ spacing: e }) => e[1]} ${({ spacing: e }) => e[1]};
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens: e }) => e.theme.foregroundSecondary};
    }
  }

  button[data-size='sm'] > wui-icon-box,
  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-icon-box,
  button[data-size='md'] > wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-icon-box,
  button[data-size='lg'] > wui-image {
    width: 24px;
    height: 24px;
  }

  wui-image,
  wui-icon-box {
    border-radius: ${({ borderRadius: e }) => e[32]};
  }
`,
  Re = function (e, t, n, r) {
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
  ze = class extends S {
    constructor() {
      super(...arguments),
        (this.imageSrc = void 0),
        (this.isUnsupportedChain = void 0),
        (this.disabled = !1),
        (this.size = `lg`);
    }
    render() {
      return C`
      <button data-size=${
        this.size
      } data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant=${
          { sm: `sm-regular`, md: `md-regular`, lg: `lg-regular` }[this.size]
        } color="primary">
          <slot></slot>
        </wui-text>
      </button>
    `;
    }
    visualTemplate() {
      return this.isUnsupportedChain
        ? C` <wui-icon-box color="error" icon="warningCircle"></wui-icon-box> `
        : this.imageSrc
        ? C`<wui-image src=${this.imageSrc}></wui-image>`
        : C` <wui-icon size="xl" color="default" name="networkPlaceholder"></wui-icon> `;
    }
  };
(ze.styles = [T, E, Le]),
  Re([j()], ze.prototype, `imageSrc`, void 0),
  Re([j({ type: Boolean })], ze.prototype, `isUnsupportedChain`, void 0),
  Re([j({ type: Boolean })], ze.prototype, `disabled`, void 0),
  Re([j()], ze.prototype, `size`, void 0),
  (ze = Re([k(`wui-network-button`)], ze));
var Be = x`
  :host {
    display: block;
    width: max-content;
  }
`,
  Ve = function (e, t, n, r) {
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
  He = class extends S {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.disabled = !1),
        (this.network = m.state.activeCaipNetwork),
        (this.networkImage = i.getNetworkImage(this.network)),
        (this.caipAddress = m.state.activeCaipAddress),
        (this.loading = g.state.loading),
        (this.isSupported = o.state.allowUnsupportedChain
          ? !0
          : !m.state.activeChain ||
            m.checkIfSupportedNetwork(m.state.activeChain)),
        this.unsubscribe.push(
          r.subscribeNetworkImages(() => {
            this.networkImage = i.getNetworkImage(this.network);
          }),
          m.subscribeKey(`activeCaipAddress`, (e) => {
            this.caipAddress = e;
          }),
          m.subscribeKey(`activeCaipNetwork`, (e) => {
            (this.network = e),
              (this.networkImage = i.getNetworkImage(e)),
              (this.isSupported =
                !e?.chainNamespace ||
                m.checkIfSupportedNetwork(e.chainNamespace)),
              i.fetchNetworkImage(e?.assets?.imageId);
          }),
          g.subscribeKey(`loading`, (e) => (this.loading = e))
        );
    }
    firstUpdated() {
      i.fetchNetworkImage(this.network?.assets?.imageId);
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      let e =
        !this.network || m.checkIfSupportedNetwork(this.network.chainNamespace);
      return C`
      <wui-network-button
        .disabled=${!!(this.disabled || this.loading)}
        .isUnsupportedChain=${!o.state.allowUnsupportedChain && !e}
        imageSrc=${D(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `;
    }
    getLabel() {
      return this.network
        ? !this.isSupported && !o.state.allowUnsupportedChain
          ? `Switch Network`
          : this.network.name
        : this.label
        ? this.label
        : this.caipAddress
        ? `Unknown Network`
        : `Select Network`;
    }
    onClick() {
      this.loading ||
        (v.sendEvent({ type: `track`, event: `CLICK_NETWORKS` }),
        g.open({ view: `Networks` }));
    }
  };
(He.styles = Be),
  Ve([j({ type: Boolean })], He.prototype, `disabled`, void 0),
  Ve([j({ type: String })], He.prototype, `label`, void 0),
  Ve([O()], He.prototype, `network`, void 0),
  Ve([O()], He.prototype, `networkImage`, void 0),
  Ve([O()], He.prototype, `caipAddress`, void 0),
  Ve([O()], He.prototype, `loading`, void 0),
  Ve([O()], He.prototype, `isSupported`, void 0);
var Ue = class extends He {};
Ue = Ve([k(`w3m-network-button`)], Ue);
var We = class extends He {};
We = Ve([k(`appkit-network-button`)], We);
var Ge = w`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ spacing: e }) => e[4]};
    padding: ${({ spacing: e }) => e[3]};
    border-radius: ${({ borderRadius: e }) => e[4]};
    background-color: ${({ tokens: e }) => e.core.foregroundAccent010};
  }

  wui-flex > wui-icon {
    padding: ${({ spacing: e }) => e[2]};
    color: ${({ tokens: e }) => e.theme.textInvert};
    background-color: ${({ tokens: e }) => e.core.backgroundAccentPrimary};
    border-radius: ${({ borderRadius: e }) => e[2]};
    align-items: center;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens: e }) => e.core.foregroundAccent020};
    }
  }
`,
  Ke = function (e, t, n, r) {
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
  qe = class extends S {
    constructor() {
      super(...arguments),
        (this.label = ``),
        (this.description = ``),
        (this.icon = `wallet`);
    }
    render() {
      return C`
      <button>
        <wui-flex gap="2" alignItems="center">
          <wui-icon weight="fill" size="lg" name=${this.icon} color="inherit"></wui-icon>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.label}</wui-text>
            <wui-text variant="md-regular" color="tertiary">${this.description}</wui-text>
          </wui-flex>
        </wui-flex>
        <wui-icon size="lg" color="accent-primary" name="chevronRight"></wui-icon>
      </button>
    `;
    }
  };
(qe.styles = [T, E, Ge]),
  Ke([j()], qe.prototype, `label`, void 0),
  Ke([j()], qe.prototype, `description`, void 0),
  Ke([j()], qe.prototype, `icon`, void 0),
  (qe = Ke([k(`wui-notice-card`)], qe));
var Je = function (e, t, n, r) {
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
  Ye = class extends S {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.socialProvider = a.getConnectedSocialProvider()),
        (this.socialUsername = a.getConnectedSocialUsername()),
        (this.namespace = m.state.activeChain),
        this.unsubscribe.push(
          m.subscribeKey(`activeChain`, (e) => {
            this.namespace = e;
          })
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      let e = _.getConnectorId(this.namespace),
        t = _.getAuthConnector();
      if (!t || e !== h.CONNECTOR_ID.AUTH)
        return (this.style.cssText = `display: none`), null;
      let n = t.provider.getEmail() ?? ``;
      return !n && !this.socialUsername
        ? ((this.style.cssText = `display: none`), null)
        : C`
      <wui-list-item
        ?rounded=${!0}
        icon=${this.socialProvider ?? `mail`}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${() => {
          this.onGoToUpdateEmail(n, this.socialProvider);
        }}
      >
        <wui-text variant="lg-regular" color="primary">${this.getAuthName(
          n
        )}</wui-text>
      </wui-list-item>
    `;
    }
    onGoToUpdateEmail(e, t) {
      t || d.push(`UpdateEmailWallet`, { email: e, redirectView: `Account` });
    }
    getAuthName(e) {
      return this.socialUsername
        ? this.socialProvider === `discord` && this.socialUsername.endsWith(`0`)
          ? this.socialUsername.slice(0, -1)
          : this.socialUsername
        : e.length > 30
        ? `${e.slice(0, -3)}...`
        : e;
    }
  };
Je([O()], Ye.prototype, `namespace`, void 0),
  (Ye = Je([k(`w3m-account-auth-button`)], Ye));
var Xe = function (e, t, n, r) {
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
  Ze = class extends S {
    constructor() {
      super(),
        (this.usubscribe = []),
        (this.networkImages = r.state.networkImages),
        (this.address = m.getAccountData()?.address),
        (this.profileImage = m.getAccountData()?.profileImage),
        (this.profileName = m.getAccountData()?.profileName),
        (this.network = m.state.activeCaipNetwork),
        (this.disconnecting = !1),
        (this.remoteFeatures = o.state.remoteFeatures),
        this.usubscribe.push(
          m.subscribeChainProp(`accountState`, (e) => {
            e &&
              ((this.address = e.address),
              (this.profileImage = e.profileImage),
              (this.profileName = e.profileName));
          }),
          m.subscribeKey(`activeCaipNetwork`, (e) => {
            e?.id && (this.network = e);
          }),
          o.subscribeKey(`remoteFeatures`, (e) => {
            this.remoteFeatures = e;
          })
        );
    }
    disconnectedCallback() {
      this.usubscribe.forEach((e) => e());
    }
    render() {
      if (!this.address)
        throw Error(`w3m-account-settings-view: No account provided`);
      let e = this.networkImages[this.network?.assets?.imageId ?? ``];
      return C`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${[`0`, `5`, `3`, `5`]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${D(this.profileImage)}
          size="lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="1" alignItems="center" justifyContent="center">
            <wui-text variant="h5-medium" color="primary" data-testid="account-settings-address">
              ${A.getTruncateString({
                string: this.address,
                charsStart: 4,
                charsEnd: 6,
                truncate: `middle`,
              })}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="default"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" gap="2" .padding=${[
          `6`,
          `4`,
          `3`,
          `4`,
        ]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            imageSrc=${D(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            ?fullSize=${!0}
            ?rounded=${!0}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="lg-regular" color="primary">
              ${this.network?.name ?? `Unknown`}
            </wui-text>
          </wui-list-item>
          ${this.smartAccountSettingsTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            ?rounded=${!0}
            icon="power"
            iconColor="error"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
    }
    chooseNameButtonTemplate() {
      let e = this.network?.chainNamespace,
        t = _.getConnectorId(e),
        n = _.getAuthConnector();
      return !m.checkIfNamesSupported() ||
        !n ||
        t !== h.CONNECTOR_ID.AUTH ||
        this.profileName
        ? null
        : C`
      <wui-list-item
        icon="id"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="lg-regular" color="primary">Choose account name </wui-text>
      </wui-list-item>
    `;
    }
    authCardTemplate() {
      let e = _.getConnectorId(this.network?.chainNamespace),
        t = _.getAuthConnector(),
        { origin: n } = location;
      return !t || e !== h.CONNECTOR_ID.AUTH || n.includes(l.SECURE_SITE)
        ? null
        : C`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `;
    }
    isAllowedNetworkSwitch() {
      let e = m.getAllRequestedCaipNetworks(),
        t = e ? e.length > 1 : !1,
        n = e?.find(({ id: e }) => e === this.network?.id);
      return t || !n;
    }
    onCopyAddress() {
      try {
        this.address &&
          (u.copyToClopboard(this.address), f.showSuccess(`Address copied`));
      } catch {
        f.showError(`Failed to copy`);
      }
    }
    smartAccountSettingsTemplate() {
      let e = this.network?.chainNamespace,
        t = m.checkIfSmartAccountEnabled(),
        n = _.getConnectorId(e);
      return !_.getAuthConnector() || n !== h.CONNECTOR_ID.AUTH || !t
        ? null
        : C`
      <wui-list-item
        icon="user"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onSmartAccountSettings.bind(this)}
        data-testid="account-smart-account-settings-button"
      >
        <wui-text variant="lg-regular" color="primary">Smart Account Settings</wui-text>
      </wui-list-item>
    `;
    }
    onChooseName() {
      d.push(`ChooseAccountName`);
    }
    onNetworks() {
      this.isAllowedNetworkSwitch() && d.push(`Networks`);
    }
    async onDisconnect() {
      try {
        this.disconnecting = !0;
        let e = this.network?.chainNamespace,
          t = p.getConnections(e).length > 0,
          n = e && _.state.activeConnectorIds[e],
          r = this.remoteFeatures?.multiWallet;
        await p.disconnect(r ? { id: n, namespace: e } : {}),
          t && r && (d.push(`ProfileWallets`), f.showSuccess(`Wallet deleted`));
      } catch {
        v.sendEvent({
          type: `track`,
          event: `DISCONNECT_ERROR`,
          properties: { message: `Failed to disconnect` },
        }),
          f.showError(`Failed to disconnect`);
      } finally {
        this.disconnecting = !1;
      }
    }
    onGoToUpgradeView() {
      v.sendEvent({ type: `track`, event: `EMAIL_UPGRADE_FROM_MODAL` }),
        d.push(`UpgradeEmailWallet`);
    }
    onSmartAccountSettings() {
      d.push(`SmartAccountSettings`);
    }
  };
Xe([O()], Ze.prototype, `address`, void 0),
  Xe([O()], Ze.prototype, `profileImage`, void 0),
  Xe([O()], Ze.prototype, `profileName`, void 0),
  Xe([O()], Ze.prototype, `network`, void 0),
  Xe([O()], Ze.prototype, `disconnecting`, void 0),
  Xe([O()], Ze.prototype, `remoteFeatures`, void 0),
  (Ze = Xe([k(`w3m-account-settings-view`)], Ze));
var Qe = w`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({ spacing: e }) => e[1]} ${({ spacing: e }) => e[2]};
    column-gap: ${({ spacing: e }) => e[1]};
    color: ${({ tokens: e }) => e.theme.textSecondary};
    border-radius: ${({ borderRadius: e }) => e[20]};
    background-color: transparent;
    transition: background-color ${({ durations: e }) => e.lg}
      ${({ easings: e }) => e[`ease-out-power-2`]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({ tokens: e }) => e.theme.textPrimary};
    background-color: ${({ tokens: e }) => e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({ tokens: e }) => e.theme.textPrimary};
    }
  }
`,
  $e = function (e, t, n, r) {
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
  et = { lg: `lg-regular`, md: `md-regular`, sm: `sm-regular` },
  tt = { lg: `md`, md: `sm`, sm: `sm` },
  nt = class extends S {
    constructor() {
      super(...arguments),
        (this.icon = `mobile`),
        (this.size = `md`),
        (this.label = ``),
        (this.active = !1);
    }
    render() {
      return C`
      <button data-active=${this.active}>
        ${
          this.icon
            ? C`<wui-icon size=${tt[this.size]} name=${this.icon}></wui-icon>`
            : ``
        }
        <wui-text variant=${et[this.size]}> ${this.label} </wui-text>
      </button>
    `;
    }
  };
(nt.styles = [T, E, Qe]),
  $e([j()], nt.prototype, `icon`, void 0),
  $e([j()], nt.prototype, `size`, void 0),
  $e([j()], nt.prototype, `label`, void 0),
  $e([j({ type: Boolean })], nt.prototype, `active`, void 0),
  (nt = $e([k(`wui-tab-item`)], nt));
var rt = w`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({ tokens: e }) => e.theme.foregroundSecondary};
    border-radius: ${({ borderRadius: e }) => e[32]};
    padding: ${({ spacing: e }) => e[`01`]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`,
  it = function (e, t, n, r) {
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
  at = class extends S {
    constructor() {
      super(...arguments),
        (this.tabs = []),
        (this.onTabChange = () => null),
        (this.size = `md`),
        (this.activeTab = 0);
    }
    render() {
      return (
        (this.dataset.size = this.size),
        this.tabs.map((e, t) => {
          let n = t === this.activeTab;
          return C`
        <wui-tab-item
          @click=${() => this.onTabClick(t)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${n}
          data-active=${n}
          data-testid="tab-${e.label?.toLowerCase()}"
        ></wui-tab-item>
      `;
        })
      );
    }
    onTabClick(e) {
      (this.activeTab = e), this.onTabChange(e);
    }
  };
(at.styles = [T, E, rt]),
  it([j({ type: Array })], at.prototype, `tabs`, void 0),
  it([j()], at.prototype, `onTabChange`, void 0),
  it([j()], at.prototype, `size`, void 0),
  it([O()], at.prototype, `activeTab`, void 0),
  (at = it([k(`wui-tabs`)], at));
var ot = w`
  wui-icon-link {
    margin-right: calc(${({ spacing: e }) => e[8]} * -1);
  }

  wui-notice-card {
    margin-bottom: ${({ spacing: e }) => e[1]};
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .balance-container {
    display: inline;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .symbol {
    transform: translateY(-2px);
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ spacing: e }) => e[3]};
    height: 48px;
    padding: ${({ spacing: e }) => e[2]};
    padding-right: ${({ spacing: e }) => e[3]};
    box-shadow: inset 0 0 0 1px ${({ tokens: e }) => e.theme.foregroundPrimary};
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: e }) => e[6]};
    transition: background-color ${({ durations: e }) => e.lg}
      ${({ easings: e }) => e[`ease-out-power-2`]};
  }

  .account-button:hover {
    background-color: ${({ tokens: e }) => e.core.glass010};
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px ${({ tokens: e }) => e.core.glass010};
  }

  wui-wallet-switch {
    margin-top: ${({ spacing: e }) => e[2]};
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px ${({ tokens: e }) => e.core.glass010};
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color ${({ durations: e }) => e.md}
        ${({ easings: e }) => e[`ease-out-power-1`]},
      opacity ${({ durations: e }) => e.md} ${({ easings: e }) =>
    e[`ease-out-power-1`]};
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`,
  R = function (e, t, n, r) {
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
  z = class extends S {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.caipAddress = m.getAccountData()?.caipAddress),
        (this.address = u.getPlainAddress(m.getAccountData()?.caipAddress)),
        (this.profileImage = m.getAccountData()?.profileImage),
        (this.profileName = m.getAccountData()?.profileName),
        (this.disconnecting = !1),
        (this.balance = m.getAccountData()?.balance),
        (this.balanceSymbol = m.getAccountData()?.balanceSymbol),
        (this.features = o.state.features),
        (this.remoteFeatures = o.state.remoteFeatures),
        (this.namespace = m.state.activeChain),
        (this.activeConnectorIds = _.state.activeConnectorIds),
        this.unsubscribe.push(
          m.subscribeChainProp(`accountState`, (e) => {
            (this.address = u.getPlainAddress(e?.caipAddress)),
              (this.caipAddress = e?.caipAddress),
              (this.balance = e?.balance),
              (this.balanceSymbol = e?.balanceSymbol),
              (this.profileName = e?.profileName),
              (this.profileImage = e?.profileImage);
          }),
          o.subscribeKey(`features`, (e) => (this.features = e)),
          o.subscribeKey(`remoteFeatures`, (e) => (this.remoteFeatures = e)),
          _.subscribeKey(`activeConnectorIds`, (e) => {
            this.activeConnectorIds = e;
          }),
          m.subscribeKey(`activeChain`, (e) => (this.namespace = e)),
          m.subscribeKey(`activeCaipNetwork`, (e) => {
            e?.chainNamespace && (this.namespace = e?.chainNamespace);
          })
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      if (!this.caipAddress || !this.namespace) return null;
      let e = this.activeConnectorIds[this.namespace],
        t = e ? _.getConnectorById(e) : void 0,
        n = i.getConnectorImage(t),
        {
          value: r,
          decimals: a,
          symbol: o,
        } = u.parseBalance(this.balance, this.balanceSymbol);
      return C`<wui-flex
        flexDirection="column"
        .padding=${[`0`, `5`, `4`, `5`]}
        alignItems="center"
        gap="3"
      >
        <wui-avatar
          alt=${D(this.caipAddress)}
          address=${D(u.getPlainAddress(this.caipAddress))}
          imageSrc=${D(this.profileImage === null ? void 0 : this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${n}
          alt=${t?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <div class="balance-container">
          <wui-text variant="h3-regular" color="primary">${r}</wui-text>
          <wui-text variant="h3-regular" color="secondary">.${a}</wui-text>
          <wui-text variant="h6-medium" color="primary" class="symbol">${o}</wui-text>
        </div>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="2" .padding=${[`0`, `3`, `3`, `3`]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          .rounded=${!0}
          icon="power"
          iconColor="error"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          .rightIcon=${!1}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`;
    }
    fundWalletTemplate() {
      if (!this.namespace) return null;
      let e = l.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),
        t = !!this.features?.receive,
        n = this.remoteFeatures?.onramp && e,
        r = y.isPayWithExchangeEnabled();
      return !n && !t && !r
        ? null
        : C`
      <wui-list-item
        .rounded=${!0}
        data-testid="w3m-account-default-fund-wallet-button"
        iconVariant="blue"
        icon="dollar"
        ?chevron=${!0}
        @click=${this.handleClickFundWallet.bind(this)}
      >
        <wui-text variant="lg-regular" color="primary">Fund wallet</wui-text>
      </wui-list-item>
    `;
    }
    orderedFeaturesTemplate() {
      return (
        this.features?.walletFeaturesOrder ||
        l.DEFAULT_FEATURES.walletFeaturesOrder
      ).map((e) => {
        switch (e) {
          case `onramp`:
            return this.fundWalletTemplate();
          case `swaps`:
            return this.swapsTemplate();
          case `send`:
            return this.sendTemplate();
          default:
            return null;
        }
      });
    }
    activityTemplate() {
      return this.namespace &&
        this.remoteFeatures?.activity &&
        l.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)
        ? C` <wui-list-item
          .rounded=${!0}
          icon="clock"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="lg-regular" color="primary">Activity</wui-text>
        </wui-list-item>`
        : null;
    }
    swapsTemplate() {
      let e = this.remoteFeatures?.swaps,
        t = m.state.activeChain === h.CHAIN.EVM;
      return !e || !t
        ? null
        : C`
      <wui-list-item
        .rounded=${!0}
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="lg-regular" color="primary">Swap</wui-text>
      </wui-list-item>
    `;
    }
    sendTemplate() {
      let e = this.features?.send,
        t = m.state.activeChain;
      if (!t)
        throw Error(`SendController:sendTemplate - namespace is required`);
      let n = l.SEND_SUPPORTED_NAMESPACES.includes(t);
      return !e || !n
        ? null
        : C`
      <wui-list-item
        .rounded=${!0}
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="lg-regular" color="primary">Send</wui-text>
      </wui-list-item>
    `;
    }
    authCardTemplate() {
      let e = m.state.activeChain;
      if (!e)
        throw Error(
          `AuthCardTemplate:authCardTemplate - namespace is required`
        );
      let t = _.getConnectorId(e),
        n = _.getAuthConnector(),
        { origin: r } = location;
      return !n || t !== h.CONNECTOR_ID.AUTH || r.includes(l.SECURE_SITE)
        ? null
        : C`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `;
    }
    handleClickFundWallet() {
      d.push(`FundWallet`);
    }
    handleClickSwap() {
      d.push(`Swap`);
    }
    handleClickSend() {
      d.push(`WalletSend`);
    }
    explorerBtnTemplate() {
      return m.getAccountData()?.addressExplorerUrl
        ? C`
      <wui-button size="md" variant="accent-primary" @click=${this.onExplorer.bind(
        this
      )}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `
        : null;
    }
    onTransactions() {
      v.sendEvent({
        type: `track`,
        event: `CLICK_TRANSACTIONS`,
        properties: {
          isSmartAccount:
            re(m.state.activeChain) === t.ACCOUNT_TYPES.SMART_ACCOUNT,
        },
      }),
        d.push(`Transactions`);
    }
    async onDisconnect() {
      try {
        this.disconnecting = !0;
        let e = p.getConnections(this.namespace).length > 0,
          t = this.namespace && _.state.activeConnectorIds[this.namespace],
          n = this.remoteFeatures?.multiWallet;
        await p.disconnect(n ? { id: t, namespace: this.namespace } : {}),
          e && n && (d.push(`ProfileWallets`), f.showSuccess(`Wallet deleted`));
      } catch {
        v.sendEvent({
          type: `track`,
          event: `DISCONNECT_ERROR`,
          properties: { message: `Failed to disconnect` },
        }),
          f.showError(`Failed to disconnect`);
      } finally {
        this.disconnecting = !1;
      }
    }
    onExplorer() {
      let e = m.getAccountData()?.addressExplorerUrl;
      e && u.openHref(e, `_blank`);
    }
    onGoToUpgradeView() {
      v.sendEvent({ type: `track`, event: `EMAIL_UPGRADE_FROM_MODAL` }),
        d.push(`UpgradeEmailWallet`);
    }
    onGoToProfileWalletsView() {
      d.push(`ProfileWallets`);
    }
  };
(z.styles = ot),
  R([O()], z.prototype, `caipAddress`, void 0),
  R([O()], z.prototype, `address`, void 0),
  R([O()], z.prototype, `profileImage`, void 0),
  R([O()], z.prototype, `profileName`, void 0),
  R([O()], z.prototype, `disconnecting`, void 0),
  R([O()], z.prototype, `balance`, void 0),
  R([O()], z.prototype, `balanceSymbol`, void 0),
  R([O()], z.prototype, `features`, void 0),
  R([O()], z.prototype, `remoteFeatures`, void 0),
  R([O()], z.prototype, `namespace`, void 0),
  R([O()], z.prototype, `activeConnectorIds`, void 0),
  (z = R([k(`w3m-account-default-widget`)], z));
var st = w`
  span {
    font-weight: 500;
    font-size: 38px;
    color: ${({ tokens: e }) => e.theme.textPrimary};
    line-height: 38px;
    letter-spacing: -2%;
    text-align: center;
    font-family: var(--apkt-fontFamily-regular);
  }

  .pennies {
    color: ${({ tokens: e }) => e.theme.textSecondary};
  }
`,
  ct = function (e, t, n, r) {
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
  lt = class extends S {
    constructor() {
      super(...arguments), (this.dollars = `0`), (this.pennies = `00`);
    }
    render() {
      return C`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`;
    }
  };
(lt.styles = [T, st]),
  ct([j()], lt.prototype, `dollars`, void 0),
  ct([j()], lt.prototype, `pennies`, void 0),
  (lt = ct([k(`wui-balance`)], lt));
var ut = w`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  /* -- Variants --------------------------------------------------------- */
  :host([data-variant='fill']) {
    background-color: ${({ colors: e }) => e.neutrals100};
  }

  :host([data-variant='shade']) {
    background-color: ${({ colors: e }) => e.neutrals900};
  }

  :host([data-variant='fill']) > wui-text {
    color: ${({ colors: e }) => e.black};
  }

  :host([data-variant='shade']) > wui-text {
    color: ${({ colors: e }) => e.white};
  }

  :host([data-variant='fill']) > wui-icon {
    color: ${({ colors: e }) => e.neutrals100};
  }

  :host([data-variant='shade']) > wui-icon {
    color: ${({ colors: e }) => e.neutrals900};
  }

  /* -- Sizes --------------------------------------------------------- */
  :host([data-size='sm']) {
    padding: ${({ spacing: e }) => e[1]} ${({ spacing: e }) => e[2]};
    border-radius: ${({ borderRadius: e }) => e[2]};
  }

  :host([data-size='md']) {
    padding: ${({ spacing: e }) => e[2]} ${({ spacing: e }) => e[3]};
    border-radius: ${({ borderRadius: e }) => e[3]};
  }

  /* -- Placements --------------------------------------------------------- */
  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,
  dt = function (e, t, n, r) {
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
  ft = { sm: `sm-regular`, md: `md-regular` },
  pt = class extends S {
    constructor() {
      super(...arguments),
        (this.placement = `top`),
        (this.variant = `fill`),
        (this.size = `md`),
        (this.message = ``);
    }
    render() {
      return (
        (this.dataset.variant = this.variant),
        (this.dataset.size = this.size),
        C`<wui-icon data-placement=${
          this.placement
        } size="inherit" name="cursor"></wui-icon>
      <wui-text variant=${ft[this.size]}>${this.message}</wui-text>`
      );
    }
  };
(pt.styles = [T, E, ut]),
  dt([j()], pt.prototype, `placement`, void 0),
  dt([j()], pt.prototype, `variant`, void 0),
  dt([j()], pt.prototype, `size`, void 0),
  dt([j()], pt.prototype, `message`, void 0),
  (pt = dt([k(`wui-tooltip`)], pt));
var mt = x`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`,
  ht = function (e, t, n, r) {
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
  gt = class extends S {
    render() {
      return C`<w3m-activity-list page="account"></w3m-activity-list>`;
    }
  };
(gt.styles = mt), (gt = ht([k(`w3m-account-activity-widget`)], gt));
var _t = w`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({ spacing: e }) => e[4]};
    padding: ${({ spacing: e }) => e[4]};
    background-color: transparent;
    border-radius: ${({ borderRadius: e }) => e[4]};
  }

  wui-text {
    max-width: 174px;
  }

  .tag-container {
    width: fit-content;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    }
  }
`,
  vt = function (e, t, n, r) {
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
  yt = class extends S {
    constructor() {
      super(...arguments),
        (this.icon = `card`),
        (this.text = ``),
        (this.description = ``),
        (this.tag = void 0),
        (this.disabled = !1);
    }
    render() {
      return C`
      <button ?disabled=${this.disabled}>
        <wui-flex alignItems="center" gap="3">
          <wui-icon-box padding="2" color="secondary" icon=${
            this.icon
          } size="lg"></wui-icon-box>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${
              this.text
            }</wui-text>
            ${
              this.description
                ? C`<wui-text variant="md-regular" color="secondary">
                  ${this.description}</wui-text
                >`
                : null
            }
          </wui-flex>
        </wui-flex>

        <wui-flex class="tag-container" alignItems="center" gap="1" justifyContent="flex-end">
          ${
            this.tag
              ? C`<wui-tag tagType="main" size="sm">${this.tag}</wui-tag>`
              : null
          }
          <wui-icon size="md" name="chevronRight" color="default"></wui-icon>
        </wui-flex>
      </button>
    `;
    }
  };
(yt.styles = [T, E, _t]),
  vt([j()], yt.prototype, `icon`, void 0),
  vt([j()], yt.prototype, `text`, void 0),
  vt([j()], yt.prototype, `description`, void 0),
  vt([j()], yt.prototype, `tag`, void 0),
  vt([j({ type: Boolean })], yt.prototype, `disabled`, void 0),
  (yt = vt([k(`wui-list-description`)], yt));
var bt = x`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`,
  xt = function (e, t, n, r) {
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
  St = class extends S {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.tokenBalance = m.getAccountData()?.tokenBalance),
        (this.remoteFeatures = o.state.remoteFeatures),
        this.unsubscribe.push(
          m.subscribeChainProp(`accountState`, (e) => {
            this.tokenBalance = e?.tokenBalance;
          }),
          o.subscribeKey(`remoteFeatures`, (e) => {
            this.remoteFeatures = e;
          })
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      return C`${this.tokenTemplate()}`;
    }
    tokenTemplate() {
      return this.tokenBalance && this.tokenBalance?.length > 0
        ? C`<wui-flex class="contentContainer" flexDirection="column" gap="2">
        ${this.tokenItemTemplate()}
      </wui-flex>`
        : C` <wui-flex flexDirection="column">
      ${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Scan the QR code and receive funds"
        icon="qrCode"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="w3m-account-receive-button"
      ></wui-list-description
    ></wui-flex>`;
    }
    onRampTemplate() {
      return this.remoteFeatures?.onramp
        ? C`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="w3m-account-onramp-button"
      ></wui-list-description>`
        : C``;
    }
    tokenItemTemplate() {
      return this.tokenBalance?.map(
        (e) => C`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`
      );
    }
    onReceiveClick() {
      d.push(`WalletReceive`);
    }
    onBuyClick() {
      v.sendEvent({
        type: `track`,
        event: `SELECT_BUY_CRYPTO`,
        properties: {
          isSmartAccount:
            re(m.state.activeChain) === t.ACCOUNT_TYPES.SMART_ACCOUNT,
        },
      }),
        d.push(`OnRampProviders`);
    }
  };
(St.styles = bt),
  xt([O()], St.prototype, `tokenBalance`, void 0),
  xt([O()], St.prototype, `remoteFeatures`, void 0),
  (St = xt([k(`w3m-account-tokens-widget`)], St));
var Ct = w`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * ${({ spacing: e }) => e[4]});
  }

  wui-promo + wui-profile-button {
    margin-top: ${({ spacing: e }) => e[4]};
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({ borderRadius: e }) => e[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`,
  wt = function (e, t, n, r) {
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
  B = class extends S {
    constructor() {
      super(...arguments),
        (this.unsubscribe = []),
        (this.network = m.state.activeCaipNetwork),
        (this.profileName = m.getAccountData()?.profileName),
        (this.address = m.getAccountData()?.address),
        (this.currentTab = m.getAccountData()?.currentTab),
        (this.tokenBalance = m.getAccountData()?.tokenBalance),
        (this.features = o.state.features),
        (this.namespace = m.state.activeChain),
        (this.activeConnectorIds = _.state.activeConnectorIds),
        (this.remoteFeatures = o.state.remoteFeatures);
    }
    firstUpdated() {
      m.fetchTokenBalance(),
        this.unsubscribe.push(
          m.subscribeChainProp(`accountState`, (e) => {
            e?.address
              ? ((this.address = e.address),
                (this.profileName = e.profileName),
                (this.currentTab = e.currentTab),
                (this.tokenBalance = e.tokenBalance))
              : g.close();
          }),
          _.subscribeKey(`activeConnectorIds`, (e) => {
            this.activeConnectorIds = e;
          }),
          m.subscribeKey(`activeChain`, (e) => (this.namespace = e)),
          m.subscribeKey(`activeCaipNetwork`, (e) => (this.network = e)),
          o.subscribeKey(`features`, (e) => (this.features = e)),
          o.subscribeKey(`remoteFeatures`, (e) => (this.remoteFeatures = e))
        ),
        this.watchSwapValues();
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e()),
        clearInterval(this.watchTokenBalance);
    }
    render() {
      if (!this.address)
        throw Error(`w3m-account-features-widget: No account provided`);
      if (!this.namespace) return null;
      let e = this.activeConnectorIds[this.namespace],
        t = e ? _.getConnectorById(e) : void 0,
        { icon: n, iconSize: r } = this.getAuthData();
      return C`<wui-flex
      flexDirection="column"
      .padding=${[`0`, `3`, `4`, `3`]}
      alignItems="center"
      gap="4"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="2">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${n}
          iconSize=${r}
          alt=${t?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`;
    }
    orderedWalletFeatures() {
      let e =
        this.features?.walletFeaturesOrder ||
        l.DEFAULT_FEATURES.walletFeaturesOrder;
      if (
        e.every((e) =>
          e === `send` || e === `receive`
            ? !this.features?.[e]
            : e === `swaps` || e === `onramp`
            ? !this.remoteFeatures?.[e]
            : !0
        )
      )
        return null;
      let t = e.map((e) => (e === `receive` || e === `onramp` ? `fund` : e)),
        n = [...new Set(t)];
      return C`<wui-flex gap="2">
      ${n.map((e) => {
        switch (e) {
          case `fund`:
            return this.fundWalletTemplate();
          case `swaps`:
            return this.swapsTemplate();
          case `send`:
            return this.sendTemplate();
          default:
            return null;
        }
      })}
    </wui-flex>`;
    }
    fundWalletTemplate() {
      if (!this.namespace) return null;
      let e = l.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),
        t = this.features?.receive,
        n = this.remoteFeatures?.onramp && e,
        r = y.isPayWithExchangeEnabled();
      return !n && !t && !r
        ? null
        : C`
      <w3m-tooltip-trigger text="Fund wallet">
        <wui-button
          data-testid="wallet-features-fund-wallet-button"
          @click=${this.onFundWalletClick.bind(this)}
          variant="accent-secondary"
          size="lg"
          fullWidth
        >
          <wui-icon name="dollar"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `;
    }
    swapsTemplate() {
      let e = this.remoteFeatures?.swaps,
        t = m.state.activeChain === h.CHAIN.EVM;
      return !e || !t
        ? null
        : C`
      <w3m-tooltip-trigger text="Swap">
        <wui-button
          fullWidth
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="recycleHorizontal"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `;
    }
    sendTemplate() {
      let e = this.features?.send,
        t = m.state.activeChain,
        n = l.SEND_SUPPORTED_NAMESPACES.includes(t);
      return !e || !n
        ? null
        : C`
      <w3m-tooltip-trigger text="Send">
        <wui-button
          fullWidth
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="send"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `;
    }
    watchSwapValues() {
      this.watchTokenBalance = setInterval(
        () => m.fetchTokenBalance((e) => this.onTokenBalanceError(e)),
        1e4
      );
    }
    onTokenBalanceError(e) {
      e instanceof Error &&
        e.cause instanceof Response &&
        e.cause.status === h.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE &&
        clearInterval(this.watchTokenBalance);
    }
    listContentTemplate() {
      return this.currentTab === 0
        ? C`<w3m-account-tokens-widget></w3m-account-tokens-widget>`
        : this.currentTab === 1
        ? C`<w3m-account-activity-widget></w3m-account-activity-widget>`
        : C`<w3m-account-tokens-widget></w3m-account-tokens-widget>`;
    }
    tokenBalanceTemplate() {
      if (this.tokenBalance && this.tokenBalance?.length >= 0) {
        let e = u.calculateBalance(this.tokenBalance),
          { dollars: t = `0`, pennies: n = `00` } = u.formatTokenBalance(e);
        return C`<wui-balance dollars=${t} pennies=${n}></wui-balance>`;
      }
      return C`<wui-balance dollars="0" pennies="00"></wui-balance>`;
    }
    tabsTemplate() {
      let e = xe.getTabsByNamespace(m.state.activeChain);
      return e.length === 0
        ? null
        : C`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      .tabs=${e}
    ></wui-tabs>`;
    }
    onTabChange(e) {
      m.setAccountProp(`currentTab`, e, this.namespace);
    }
    onFundWalletClick() {
      d.push(`FundWallet`);
    }
    onSwapClick() {
      this.network?.caipNetworkId &&
      !l.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)
        ? d.push(`UnsupportedChain`, { swapUnsupportedChain: !0 })
        : (v.sendEvent({
            type: `track`,
            event: `OPEN_SWAP`,
            properties: {
              network: this.network?.caipNetworkId || ``,
              isSmartAccount:
                re(m.state.activeChain) === t.ACCOUNT_TYPES.SMART_ACCOUNT,
            },
          }),
          d.push(`Swap`));
    }
    getAuthData() {
      let e = a.getConnectedSocialProvider(),
        t = a.getConnectedSocialUsername(),
        n = _.getAuthConnector()?.provider.getEmail() ?? ``;
      return {
        name: oe.getAuthName({
          email: n,
          socialUsername: t,
          socialProvider: e,
        }),
        icon: e ?? `mail`,
        iconSize: e ? `xl` : `md`,
      };
    }
    onGoToProfileWalletsView() {
      d.push(`ProfileWallets`);
    }
    onSendClick() {
      v.sendEvent({
        type: `track`,
        event: `OPEN_SEND`,
        properties: {
          network: this.network?.caipNetworkId || ``,
          isSmartAccount:
            re(m.state.activeChain) === t.ACCOUNT_TYPES.SMART_ACCOUNT,
        },
      }),
        d.push(`WalletSend`);
    }
  };
(B.styles = Ct),
  wt([O()], B.prototype, `watchTokenBalance`, void 0),
  wt([O()], B.prototype, `network`, void 0),
  wt([O()], B.prototype, `profileName`, void 0),
  wt([O()], B.prototype, `address`, void 0),
  wt([O()], B.prototype, `currentTab`, void 0),
  wt([O()], B.prototype, `tokenBalance`, void 0),
  wt([O()], B.prototype, `features`, void 0),
  wt([O()], B.prototype, `namespace`, void 0),
  wt([O()], B.prototype, `activeConnectorIds`, void 0),
  wt([O()], B.prototype, `remoteFeatures`, void 0),
  (B = wt([k(`w3m-account-wallet-features-widget`)], B));
var Tt = function (e, t, n, r) {
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
  Et = class extends S {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.namespace = m.state.activeChain),
        this.unsubscribe.push(
          m.subscribeKey(`activeChain`, (e) => {
            this.namespace = e;
          })
        );
    }
    render() {
      if (!this.namespace) return null;
      let e = _.getConnectorId(this.namespace),
        t = _.getAuthConnector();
      return C`
      ${
        t && e === h.CONNECTOR_ID.AUTH
          ? this.walletFeaturesTemplate()
          : this.defaultTemplate()
      }
    `;
    }
    walletFeaturesTemplate() {
      return C`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`;
    }
    defaultTemplate() {
      return C`<w3m-account-default-widget></w3m-account-default-widget>`;
    }
  };
Tt([O()], Et.prototype, `namespace`, void 0),
  (Et = Tt([k(`w3m-account-view`)], Et));
var Dt = w`
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({ borderRadius: e }) => e[2]};
  }

  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({ borderRadius: e }) => e[2]};
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    border-radius: ${({ borderRadius: e }) => e[2]};
    background-color: ${({ tokens: e }) => e.theme.foregroundSecondary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    border: 2px solid ${({ tokens: e }) => e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({ spacing: e }) => e[`01`]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`,
  V = function (e, t, n, r) {
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
  H = class extends S {
    constructor() {
      super(...arguments),
        (this.address = ``),
        (this.profileName = ``),
        (this.content = []),
        (this.alt = ``),
        (this.imageSrc = ``),
        (this.icon = void 0),
        (this.iconSize = `md`),
        (this.iconBadge = void 0),
        (this.iconBadgeSize = `md`),
        (this.buttonVariant = `neutral-primary`),
        (this.enableMoreButton = !1),
        (this.charsStart = 4),
        (this.charsEnd = 6);
    }
    render() {
      return C`
      <wui-flex flexDirection="column" rowgap="2">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `;
    }
    topTemplate() {
      return C`
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${
          this.enableMoreButton
            ? C`<wui-icon-link
              variant="secondary"
              size="md"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`
            : null
        }
      </wui-flex>
    `;
    }
    bottomTemplate() {
      return C` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `;
    }
    imageOrIconTemplate() {
      return this.icon
        ? C`
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${
              this.icon
            } class="custom-icon"></wui-icon>

            ${
              this.iconBadge
                ? C`<wui-icon
                  color="accent-primary"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`
                : null
            }
          </wui-flex>
        </wui-flex>
      `
        : C`
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `;
    }
    contentTemplate() {
      return this.content.length === 0
        ? null
        : C`
      <wui-flex flexDirection="column" rowgap="3">
        ${this.content.map((e) => this.labelAndTagTemplate(e))}
      </wui-flex>
    `;
    }
    labelAndTagTemplate({
      address: e,
      profileName: t,
      label: n,
      description: r,
      enableButton: i,
      buttonType: a,
      buttonLabel: o,
      buttonVariant: s,
      tagVariant: c,
      tagLabel: ee,
      alignItems: l = `flex-end`,
    }) {
      return C`
      <wui-flex justifyContent="space-between" alignItems=${l} columngap="1">
        <wui-flex flexDirection="column" rowgap="01">
          ${
            n
              ? C`<wui-text variant="sm-medium" color="secondary">${n}</wui-text>`
              : null
          }

          <wui-flex alignItems="center" columngap="1">
            <wui-text variant="md-regular" color="primary">
              ${A.getTruncateString({
                string: t || e,
                charsStart: t ? 16 : this.charsStart,
                charsEnd: t ? 0 : this.charsEnd,
                truncate: t ? `end` : `middle`,
              })}
            </wui-text>

            ${
              c && ee
                ? C`<wui-tag variant=${c} size="sm">${ee}</wui-tag>`
                : null
            }
          </wui-flex>

          ${
            r
              ? C`<wui-text variant="sm-regular" color="secondary">${r}</wui-text>`
              : null
          }
        </wui-flex>

        ${
          i
            ? this.buttonTemplate({
                buttonType: a,
                buttonLabel: o,
                buttonVariant: s,
              })
            : null
        }
      </wui-flex>
    `;
    }
    buttonTemplate({ buttonType: e, buttonLabel: t, buttonVariant: n }) {
      return C`
      <wui-button
        size="sm"
        variant=${n}
        @click=${
          e === `disconnect`
            ? this.dispatchDisconnectEvent.bind(this)
            : this.dispatchSwitchEvent.bind(this)
        }
        data-testid=${
          e === `disconnect`
            ? `wui-active-profile-wallet-item-disconnect-button`
            : `wui-active-profile-wallet-item-switch-button`
        }
      >
        ${t}
      </wui-button>
    `;
    }
    dispatchDisconnectEvent() {
      this.dispatchEvent(
        new CustomEvent(`disconnect`, { bubbles: !0, composed: !0 })
      );
    }
    dispatchSwitchEvent() {
      this.dispatchEvent(
        new CustomEvent(`switch`, { bubbles: !0, composed: !0 })
      );
    }
    dispatchExternalLinkEvent() {
      this.dispatchEvent(
        new CustomEvent(`externalLink`, { bubbles: !0, composed: !0 })
      );
    }
    dispatchMoreButtonEvent() {
      this.dispatchEvent(
        new CustomEvent(`more`, { bubbles: !0, composed: !0 })
      );
    }
    dispatchCopyEvent() {
      this.dispatchEvent(
        new CustomEvent(`copy`, { bubbles: !0, composed: !0 })
      );
    }
  };
(H.styles = [T, E, Dt]),
  V([j()], H.prototype, `address`, void 0),
  V([j()], H.prototype, `profileName`, void 0),
  V([j({ type: Array })], H.prototype, `content`, void 0),
  V([j()], H.prototype, `alt`, void 0),
  V([j()], H.prototype, `imageSrc`, void 0),
  V([j()], H.prototype, `icon`, void 0),
  V([j()], H.prototype, `iconSize`, void 0),
  V([j()], H.prototype, `iconBadge`, void 0),
  V([j()], H.prototype, `iconBadgeSize`, void 0),
  V([j()], H.prototype, `buttonVariant`, void 0),
  V([j({ type: Boolean })], H.prototype, `enableMoreButton`, void 0),
  V([j({ type: Number })], H.prototype, `charsStart`, void 0),
  V([j({ type: Number })], H.prototype, `charsEnd`, void 0),
  (H = V([k(`wui-active-profile-wallet-item`)], H));
var Ot = w`
  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({ borderRadius: e }) => e[2]};
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    border: 2px solid ${({ tokens: e }) => e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({ spacing: e }) => e[`01`]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`,
  U = function (e, t, n, r) {
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
  W = class extends S {
    constructor() {
      super(...arguments),
        (this.address = ``),
        (this.profileName = ``),
        (this.alt = ``),
        (this.buttonLabel = ``),
        (this.buttonVariant = `accent-primary`),
        (this.imageSrc = ``),
        (this.icon = void 0),
        (this.iconSize = `md`),
        (this.iconBadgeSize = `md`),
        (this.rightIcon = `signOut`),
        (this.rightIconSize = `md`),
        (this.loading = !1),
        (this.charsStart = 4),
        (this.charsEnd = 6);
    }
    render() {
      return C`
      <wui-flex alignItems="center" columngap="2">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `;
    }
    imageOrIconTemplate() {
      return this.icon
        ? C`
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${
              this.icon
            } class="custom-icon"></wui-icon>

            ${
              this.iconBadge
                ? C`<wui-icon
                  color="default"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`
                : null
            }
          </wui-flex>
        </wui-flex>
      `
        : C`<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`;
    }
    labelAndDescriptionTemplate() {
      return C`
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="lg-regular" color="primary">
          ${A.getTruncateString({
            string: this.profileName || this.address,
            charsStart: this.profileName ? 16 : this.charsStart,
            charsEnd: this.profileName ? 0 : this.charsEnd,
            truncate: this.profileName ? `end` : `middle`,
          })}
        </wui-text>
      </wui-flex>
    `;
    }
    buttonActionTemplate() {
      return C`
      <wui-flex columngap="1" alignItems="center" justifyContent="center">
        <wui-button
          size="sm"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          variant="secondary"
          size="md"
          icon=${D(this.rightIcon)}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `;
    }
    handleButtonClick() {
      this.dispatchEvent(
        new CustomEvent(`buttonClick`, { bubbles: !0, composed: !0 })
      );
    }
    handleIconClick() {
      this.dispatchEvent(
        new CustomEvent(`iconClick`, { bubbles: !0, composed: !0 })
      );
    }
  };
(W.styles = [T, E, Ot]),
  U([j()], W.prototype, `address`, void 0),
  U([j()], W.prototype, `profileName`, void 0),
  U([j()], W.prototype, `alt`, void 0),
  U([j()], W.prototype, `buttonLabel`, void 0),
  U([j()], W.prototype, `buttonVariant`, void 0),
  U([j()], W.prototype, `imageSrc`, void 0),
  U([j()], W.prototype, `icon`, void 0),
  U([j()], W.prototype, `iconSize`, void 0),
  U([j()], W.prototype, `iconBadge`, void 0),
  U([j()], W.prototype, `iconBadgeSize`, void 0),
  U([j()], W.prototype, `rightIcon`, void 0),
  U([j()], W.prototype, `rightIconSize`, void 0),
  U([j({ type: Boolean })], W.prototype, `loading`, void 0),
  U([j({ type: Number })], W.prototype, `charsStart`, void 0),
  U([j({ type: Number })], W.prototype, `charsEnd`, void 0),
  (W = U([k(`wui-inactive-profile-wallet-item`)], W));
var kt = {
    getAuthData(e) {
      let t = e.connectorId === h.CONNECTOR_ID.AUTH;
      if (!t)
        return { isAuth: !1, icon: void 0, iconSize: void 0, name: void 0 };
      let n = e?.auth?.name ?? a.getConnectedSocialProvider(),
        r = e?.auth?.username ?? a.getConnectedSocialUsername(),
        i = _.getAuthConnector()?.provider.getEmail() ?? ``;
      return {
        isAuth: !0,
        icon: n ?? `mail`,
        iconSize: n ? `xl` : `md`,
        name: t
          ? oe.getAuthName({ email: i, socialUsername: r, socialProvider: n })
          : void 0,
      };
    },
  },
  At = w`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({ easings: e }) => e[`ease-out-power-1`]}
      ${({ durations: e }) => e.md};
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: e }) => e[4]};
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: ${({ spacing: e }) => e[4]};
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: e }) => e[4]};
  }

  wui-separator {
    margin: ${({ spacing: e }) => e[2]} 0 ${({ spacing: e }) => e[2]} 0;
  }

  .active-connection {
    padding: ${({ spacing: e }) => e[2]};
  }

  .recent-connection {
    padding: ${({ spacing: e }) => e[2]} 0 ${({ spacing: e }) => e[2]} 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`,
  G = function (e, t, n, r) {
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
  K = {
    ADDRESS_DISPLAY: { START: 4, END: 6 },
    BADGE: { SIZE: `md`, ICON: `lightbulb` },
    SCROLL_THRESHOLD: 50,
    OPACITY_RANGE: [0, 1],
  },
  jt = {
    eip155: `ethereum`,
    solana: `solana`,
    bip122: `bitcoin`,
    ton: `ton`,
    tron: `tron`,
  },
  Mt = [
    { namespace: `eip155`, icon: jt.eip155, label: `EVM` },
    { namespace: `solana`, icon: jt.solana, label: `Solana` },
    { namespace: `bip122`, icon: jt.bip122, label: `Bitcoin` },
    { namespace: `ton`, icon: jt.ton, label: `Ton` },
    { namespace: `tron`, icon: jt.tron, label: `Tron` },
  ],
  Nt = {
    eip155: {
      title: `Add EVM Wallet`,
      description: `Add your first EVM wallet`,
    },
    solana: {
      title: `Add Solana Wallet`,
      description: `Add your first Solana wallet`,
    },
    bip122: {
      title: `Add Bitcoin Wallet`,
      description: `Add your first Bitcoin wallet`,
    },
    ton: { title: `Add TON Wallet`, description: `Add your first TON wallet` },
    tron: {
      title: `Add TRON Wallet`,
      description: `Add your first TRON wallet`,
    },
  },
  q = class extends S {
    constructor() {
      super(),
        (this.unsubscribers = []),
        (this.currentTab = 0),
        (this.namespace = m.state.activeChain),
        (this.namespaces = Array.from(m.state.chains.keys())),
        (this.caipAddress = void 0),
        (this.profileName = void 0),
        (this.activeConnectorIds = _.state.activeConnectorIds),
        (this.lastSelectedAddress = ``),
        (this.lastSelectedConnectorId = ``),
        (this.isSwitching = !1),
        (this.caipNetwork = m.state.activeCaipNetwork),
        (this.user = m.getAccountData()?.user),
        (this.remoteFeatures = o.state.remoteFeatures),
        (this.currentTab = this.namespace
          ? this.namespaces.indexOf(this.namespace)
          : 0),
        (this.caipAddress = m.getAccountData(this.namespace)?.caipAddress),
        (this.profileName = m.getAccountData(this.namespace)?.profileName),
        this.unsubscribers.push(
          p.subscribeKey(`connections`, () => this.onConnectionsChange()),
          p.subscribeKey(`recentConnections`, () => this.requestUpdate()),
          _.subscribeKey(`activeConnectorIds`, (e) => {
            this.activeConnectorIds = e;
          }),
          m.subscribeKey(`activeCaipNetwork`, (e) => (this.caipNetwork = e)),
          m.subscribeChainProp(`accountState`, (e) => {
            this.user = e?.user;
          }),
          o.subscribeKey(`remoteFeatures`, (e) => (this.remoteFeatures = e))
        ),
        (this.chainListener = m.subscribeChainProp(
          `accountState`,
          (e) => {
            (this.caipAddress = e?.caipAddress),
              (this.profileName = e?.profileName);
          },
          this.namespace
        ));
    }
    disconnectedCallback() {
      this.unsubscribers.forEach((e) => e()),
        this.resizeObserver?.disconnect(),
        this.removeScrollListener(),
        this.chainListener?.();
    }
    firstUpdated() {
      let e = this.shadowRoot?.querySelector(`.wallet-list`);
      if (!e) return;
      let t = () => this.updateScrollOpacity(e);
      requestAnimationFrame(t),
        e.addEventListener(`scroll`, t),
        (this.resizeObserver = new ResizeObserver(t)),
        this.resizeObserver.observe(e),
        t();
    }
    render() {
      let e = this.namespace;
      if (!e) throw Error(`Namespace is not set`);
      return C`
      <wui-flex flexDirection="column" .padding=${[`0`, `4`, `4`, `4`]} gap="4">
        ${this.renderTabs()} ${this.renderHeader(e)} ${this.renderConnections(
        e
      )}
        ${this.renderAddConnectionButton(e)}
      </wui-flex>
    `;
    }
    renderTabs() {
      let e = this.namespaces
        .map((e) => Mt.find((t) => t.namespace === e))
        .filter(Boolean);
      return e.length > 1
        ? C`
        <wui-tabs
          .onTabChange=${(e) => this.handleTabChange(e)}
          .activeTab=${this.currentTab}
          .tabs=${e}
        ></wui-tabs>
      `
        : null;
    }
    renderHeader(e) {
      let t =
        this.getActiveConnections(e).flatMap(({ accounts: e }) => e).length +
        +!!this.caipAddress;
      return C`
      <wui-flex alignItems="center" columngap="1">
        <wui-icon
          size="sm"
          name=${jt[e] ?? jt.eip155}
        ></wui-icon>
        <wui-text color="secondary" variant="lg-regular"
          >${t > 1 ? `Wallets` : `Wallet`}</wui-text
        >
        <wui-text
          color="primary"
          variant="lg-regular"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${t}
        </wui-text>
        <wui-link
          color="secondary"
          variant="secondary"
          @click=${() => p.disconnect({ namespace: e })}
          ?disabled=${!this.hasAnyConnections(e)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `;
    }
    renderConnections(e) {
      let t = this.hasAnyConnections(e);
      return C`
      <wui-flex flexDirection="column" class=${he({
        "wallet-list": !0,
        "active-wallets-box": t,
        "empty-wallet-list-box": !t,
      })} rowgap="3">
        ${t ? this.renderActiveConnections(e) : this.renderEmptyState(e)}
      </wui-flex>
    `;
    }
    renderActiveConnections(e) {
      let t = this.getActiveConnections(e),
        n = this.activeConnectorIds[e],
        r = this.getPlainAddress();
      return C`
      ${
        r || n || t.length > 0
          ? C`<wui-flex
            flexDirection="column"
            .padding=${[`4`, `0`, `4`, `0`]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(e)} ${this.renderActiveConnectionsList(
              e
            )}
          </wui-flex>`
          : null
      }
      ${this.renderRecentConnections(e)}
    `;
    }
    renderActiveProfile(e) {
      let t = this.activeConnectorIds[e];
      if (!t) return null;
      let { connections: n } = ne.getConnectionsData(e),
        r = _.getConnectorById(t),
        a = i.getConnectorImage(r),
        o = this.getPlainAddress();
      if (!o) return null;
      let s = e === h.CHAIN.BITCOIN,
        c = kt.getAuthData({ connectorId: t, accounts: [] }),
        ee = this.getActiveConnections(e).flatMap((e) => e.accounts).length > 0,
        l = n.find((e) => e.connectorId === t),
        u = l?.accounts.filter((e) => !b.isLowerCaseMatch(e.address, o));
      return C`
      <wui-flex flexDirection="column" .padding=${[`0`, `4`, `0`, `4`]}>
        <wui-active-profile-wallet-item
          address=${o}
          alt=${r?.name}
          .content=${this.getProfileContent({
            address: o,
            connections: n,
            connectorId: t,
            namespace: e,
          })}
          .charsStart=${K.ADDRESS_DISPLAY.START}
          .charsEnd=${K.ADDRESS_DISPLAY.END}
          .icon=${c.icon}
          .iconSize=${c.iconSize}
          .iconBadge=${this.isSmartAccount(o) ? K.BADGE.ICON : void 0}
          .iconBadgeSize=${this.isSmartAccount(o) ? K.BADGE.SIZE : void 0}
          imageSrc=${a}
          ?enableMoreButton=${c.isAuth}
          @copy=${() => this.handleCopyAddress(o)}
          @disconnect=${() => this.handleDisconnect(e, t)}
          @switch=${() => {
            s && l && u?.[0] && this.handleSwitchWallet(l, u[0].address, e);
          }}
          @externalLink=${() => this.handleExternalLink(o)}
          @more=${() => this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${ee ? C`<wui-separator></wui-separator>` : null}
      </wui-flex>
    `;
    }
    renderActiveConnectionsList(e) {
      let t = this.getActiveConnections(e);
      return t.length === 0
        ? null
        : C`
      <wui-flex flexDirection="column" .padding=${[`0`, `2`, `0`, `2`]}>
        ${this.renderConnectionList(t, !1, e)}
      </wui-flex>
    `;
    }
    renderRecentConnections(e) {
      let { recentConnections: t } = ne.getConnectionsData(e);
      return t.flatMap((e) => e.accounts).length === 0
        ? null
        : C`
      <wui-flex flexDirection="column" .padding=${[
        `0`,
        `2`,
        `0`,
        `2`,
      ]} rowGap="2">
        <wui-text color="secondary" variant="sm-medium" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${[`0`, `2`, `0`, `2`]}>
          ${this.renderConnectionList(t, !0, e)}
        </wui-flex>
      </wui-flex>
    `;
    }
    renderConnectionList(e, t, n) {
      return e
        .filter((e) => e.accounts.length > 0)
        .map((e, r) => {
          let a = _.getConnectorById(e.connectorId),
            o = i.getConnectorImage(a) ?? ``,
            s = kt.getAuthData(e);
          return e.accounts.map((i, a) => {
            let c = r !== 0 || a !== 0,
              ee = this.isAccountLoading(e.connectorId, i.address);
            return C`
            <wui-flex flexDirection="column">
              ${c ? C`<wui-separator></wui-separator>` : null}
              <wui-inactive-profile-wallet-item
                address=${i.address}
                alt=${e.connectorId}
                buttonLabel=${t ? `Connect` : `Switch`}
                buttonVariant=${t ? `neutral-secondary` : `accent-secondary`}
                rightIcon=${t ? `bin` : `power`}
                rightIconSize="sm"
                class=${t ? `recent-connection` : `active-connection`}
                data-testid=${t ? `recent-connection` : `active-connection`}
                imageSrc=${o}
                .iconBadge=${
                  this.isSmartAccount(i.address) ? K.BADGE.ICON : void 0
                }
                .iconBadgeSize=${
                  this.isSmartAccount(i.address) ? K.BADGE.SIZE : void 0
                }
                .icon=${s.icon}
                .iconSize=${s.iconSize}
                .loading=${ee}
                .showBalance=${!1}
                .charsStart=${K.ADDRESS_DISPLAY.START}
                .charsEnd=${K.ADDRESS_DISPLAY.END}
                @buttonClick=${() => this.handleSwitchWallet(e, i.address, n)}
                @iconClick=${() =>
                  this.handleWalletAction({
                    connection: e,
                    address: i.address,
                    isRecentConnection: t,
                    namespace: n,
                  })}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `;
          });
        });
    }
    renderAddConnectionButton(e) {
      if (
        (!this.isMultiWalletEnabled() && this.caipAddress) ||
        !this.hasAnyConnections(e)
      )
        return null;
      let { title: t } = this.getChainLabelInfo(e);
      return C`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${!0}
        @click=${() => this.handleAddConnection(e)}
        data-testid="add-connection-button"
      >
        <wui-text variant="md-medium" color="secondary">${t}</wui-text>
      </wui-list-item>
    `;
    }
    renderEmptyState(e) {
      let { title: t, description: n } = this.getChainLabelInfo(e);
      return C`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowgap="3"
          class="empty-box"
        >
          <wui-icon-box size="xl" icon="wallet" color="secondary"></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="1">
            <wui-text color="primary" variant="lg-regular" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="secondary" variant="md-regular" data-testid="empty-state-description"
              >${n}</wui-text
            >
          </wui-flex>

          <wui-link
            @click=${() => this.handleAddConnection(e)}
            data-testid="empty-state-button"
            icon="plus"
          >
            ${t}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `;
    }
    handleTabChange(e) {
      let t = this.namespaces[e];
      t &&
        (this.chainListener?.(),
        (this.currentTab = this.namespaces.indexOf(t)),
        (this.namespace = t),
        (this.caipAddress = m.getAccountData(t)?.caipAddress),
        (this.profileName = m.getAccountData(t)?.profileName),
        (this.chainListener = m.subscribeChainProp(
          `accountState`,
          (e) => {
            this.caipAddress = e?.caipAddress;
          },
          t
        )));
    }
    async handleSwitchWallet(e, t, n) {
      try {
        (this.isSwitching = !0),
          (this.lastSelectedConnectorId = e.connectorId),
          (this.lastSelectedAddress = t),
          this.caipNetwork?.chainNamespace !== n &&
            e?.caipNetwork &&
            (_.setFilterByNamespace(n),
            await m.switchActiveNetwork(e?.caipNetwork)),
          await p.switchConnection({
            connection: e,
            address: t,
            namespace: n,
            closeModalOnConnect: !1,
            onChange({ hasSwitchedAccount: e, hasSwitchedWallet: t }) {
              t
                ? f.showSuccess(`Wallet switched`)
                : e && f.showSuccess(`Account switched`);
            },
          });
      } catch {
        f.showError(`Failed to switch wallet`);
      } finally {
        this.isSwitching = !1;
      }
    }
    handleWalletAction(e) {
      let {
        connection: t,
        address: n,
        isRecentConnection: r,
        namespace: i,
      } = e;
      r
        ? (a.deleteAddressFromConnection({
            connectorId: t.connectorId,
            address: n,
            namespace: i,
          }),
          p.syncStorageConnections(),
          f.showSuccess(`Wallet deleted`))
        : this.handleDisconnect(i, t.connectorId);
    }
    async handleDisconnect(e, t) {
      try {
        await p.disconnect({ id: t, namespace: e }),
          f.showSuccess(`Wallet disconnected`);
      } catch {
        f.showError(`Failed to disconnect wallet`);
      }
    }
    handleCopyAddress(e) {
      u.copyToClopboard(e), f.showSuccess(`Address copied`);
    }
    handleMore() {
      d.push(`AccountSettings`);
    }
    handleExternalLink(e) {
      let t = this.caipNetwork?.blockExplorers?.default.url;
      t && u.openHref(`${t}/address/${e}`, `_blank`);
    }
    handleAddConnection(e) {
      _.setFilterByNamespace(e),
        d.push(`Connect`, { addWalletForNamespace: e });
    }
    getChainLabelInfo(e) {
      return (
        Nt[e] ?? { title: `Add Wallet`, description: `Add your first wallet` }
      );
    }
    isSmartAccount(e) {
      if (!this.namespace) return !1;
      let t = this.user?.accounts?.find((e) => e.type === `smartAccount`);
      return t && e ? b.isLowerCaseMatch(t.address, e) : !1;
    }
    getPlainAddress() {
      return this.caipAddress ? u.getPlainAddress(this.caipAddress) : void 0;
    }
    getActiveConnections(e) {
      let t = this.activeConnectorIds[e],
        { connections: n } = ne.getConnectionsData(e),
        [r] = n.filter((e) => b.isLowerCaseMatch(e.connectorId, t));
      if (!t) return n;
      let i = e === h.CHAIN.BITCOIN,
        { address: a } = this.caipAddress
          ? ae.parseCaipAddress(this.caipAddress)
          : {},
        o = [...(a ? [a] : [])];
      return (
        i && r && (o = r.accounts.map((e) => e.address) || []),
        ne.excludeConnectorAddressFromConnections({
          connectorId: t,
          addresses: o,
          connections: n,
        })
      );
    }
    hasAnyConnections(e) {
      let t = this.getActiveConnections(e),
        { recentConnections: n } = ne.getConnectionsData(e);
      return !!this.caipAddress || t.length > 0 || n.length > 0;
    }
    isAccountLoading(e, t) {
      return (
        b.isLowerCaseMatch(this.lastSelectedConnectorId, e) &&
        b.isLowerCaseMatch(this.lastSelectedAddress, t) &&
        this.isSwitching
      );
    }
    getProfileContent(e) {
      let { address: t, connections: n, connectorId: r, namespace: i } = e,
        [a] = n.filter((e) => b.isLowerCaseMatch(e.connectorId, r));
      if (
        i === h.CHAIN.BITCOIN &&
        a?.accounts.every((e) => typeof e.type == `string`)
      )
        return this.getBitcoinProfileContent(a.accounts, t);
      let o = kt.getAuthData({ connectorId: r, accounts: [] });
      return [
        {
          address: t,
          tagLabel: `Active`,
          tagVariant: `success`,
          enableButton: !0,
          profileName: this.profileName,
          buttonType: `disconnect`,
          buttonLabel: `Disconnect`,
          buttonVariant: `neutral-secondary`,
          ...(o.isAuth
            ? {
                description: this.isSmartAccount(t)
                  ? `Smart Account`
                  : `EOA Account`,
              }
            : {}),
        },
      ];
    }
    getBitcoinProfileContent(e, t) {
      let n = e.length > 1,
        r = this.getPlainAddress();
      return e.map((e) => {
        let i = b.isLowerCaseMatch(e.address, r),
          a = `PAYMENT`;
        return (
          e.type === `ordinal` && (a = `ORDINALS`),
          {
            address: e.address,
            tagLabel: b.isLowerCaseMatch(e.address, t) ? `Active` : void 0,
            tagVariant: b.isLowerCaseMatch(e.address, t) ? `success` : void 0,
            enableButton: !0,
            ...(n
              ? {
                  label: a,
                  alignItems: `flex-end`,
                  buttonType: i ? `disconnect` : `switch`,
                  buttonLabel: i ? `Disconnect` : `Switch`,
                  buttonVariant: i ? `neutral-secondary` : `accent-secondary`,
                }
              : {
                  alignItems: `center`,
                  buttonType: `disconnect`,
                  buttonLabel: `Disconnect`,
                  buttonVariant: `neutral-secondary`,
                }),
          }
        );
      });
    }
    removeScrollListener() {
      let e = this.shadowRoot?.querySelector(`.wallet-list`);
      e &&
        e.removeEventListener(`scroll`, () => this.handleConnectListScroll());
    }
    handleConnectListScroll() {
      let e = this.shadowRoot?.querySelector(`.wallet-list`);
      e && this.updateScrollOpacity(e);
    }
    isMultiWalletEnabled() {
      return !!this.remoteFeatures?.multiWallet;
    }
    updateScrollOpacity(e) {
      e.style.setProperty(
        `--connect-scroll--top-opacity`,
        ge
          .interpolate([0, K.SCROLL_THRESHOLD], K.OPACITY_RANGE, e.scrollTop)
          .toString()
      ),
        e.style.setProperty(
          `--connect-scroll--bottom-opacity`,
          ge
            .interpolate(
              [0, K.SCROLL_THRESHOLD],
              K.OPACITY_RANGE,
              e.scrollHeight - e.scrollTop - e.offsetHeight
            )
            .toString()
        );
    }
    onConnectionsChange() {
      if (this.isMultiWalletEnabled() && this.namespace) {
        let { connections: e } = ne.getConnectionsData(this.namespace);
        e.length === 0 && d.reset(`ProfileWallets`);
      }
      this.requestUpdate();
    }
  };
(q.styles = At),
  G([O()], q.prototype, `currentTab`, void 0),
  G([O()], q.prototype, `namespace`, void 0),
  G([O()], q.prototype, `namespaces`, void 0),
  G([O()], q.prototype, `caipAddress`, void 0),
  G([O()], q.prototype, `profileName`, void 0),
  G([O()], q.prototype, `activeConnectorIds`, void 0),
  G([O()], q.prototype, `lastSelectedAddress`, void 0),
  G([O()], q.prototype, `lastSelectedConnectorId`, void 0),
  G([O()], q.prototype, `isSwitching`, void 0),
  G([O()], q.prototype, `caipNetwork`, void 0),
  G([O()], q.prototype, `user`, void 0),
  G([O()], q.prototype, `remoteFeatures`, void 0),
  (q = G([k(`w3m-profile-wallets-view`)], q));
var Pt = function (e, t, n, r) {
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
  Ft = class extends S {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.activeCaipNetwork = m.state.activeCaipNetwork),
        (this.features = o.state.features),
        (this.remoteFeatures = o.state.remoteFeatures),
        (this.exchangesLoading = y.state.isLoading),
        (this.exchanges = y.state.exchanges),
        this.unsubscribe.push(
          o.subscribeKey(`features`, (e) => (this.features = e)),
          o.subscribeKey(`remoteFeatures`, (e) => (this.remoteFeatures = e)),
          m.subscribeKey(`activeCaipNetwork`, (e) => {
            (this.activeCaipNetwork = e), this.setDefaultPaymentAsset();
          }),
          y.subscribeKey(`isLoading`, (e) => (this.exchangesLoading = e)),
          y.subscribeKey(`exchanges`, (e) => (this.exchanges = e))
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    async firstUpdated() {
      y.isPayWithExchangeSupported() &&
        (await this.setDefaultPaymentAsset(), await y.fetchExchanges());
    }
    render() {
      return C`
      <wui-flex flexDirection="column" .padding=${[`1`, `3`, `3`, `3`]} gap="2">
        ${this.onrampTemplate()} ${this.receiveTemplate()} ${this.depositFromExchangeTemplate()}
      </wui-flex>
    `;
    }
    async setDefaultPaymentAsset() {
      if (!this.activeCaipNetwork) return;
      let e = await y.getAssetsForNetwork(this.activeCaipNetwork.caipNetworkId),
        t = e.find((e) => e.metadata.symbol === `USDC`) || e[0];
      t && y.setPaymentAsset(t);
    }
    onrampTemplate() {
      if (!this.activeCaipNetwork) return null;
      let e = this.remoteFeatures?.onramp,
        t = l.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(
          this.activeCaipNetwork.chainNamespace
        );
      return !e || !t
        ? null
        : C`
      <wui-list-item
        @click=${this.onBuyCrypto.bind(this)}
        icon="card"
        data-testid="wallet-features-onramp-button"
      >
        <wui-text variant="lg-regular" color="primary">Buy crypto</wui-text>
      </wui-list-item>
    `;
    }
    depositFromExchangeTemplate() {
      return !this.activeCaipNetwork || !y.isPayWithExchangeSupported()
        ? null
        : C`
      <wui-list-item
        @click=${this.onDepositFromExchange.bind(this)}
        icon="arrowBottomCircle"
        data-testid="wallet-features-deposit-from-exchange-button"
        ?loading=${this.exchangesLoading}
        ?disabled=${this.exchangesLoading || !this.exchanges.length}
      >
        <wui-text variant="lg-regular" color="primary">Deposit from exchange</wui-text>
      </wui-list-item>
    `;
    }
    receiveTemplate() {
      return this.features?.receive
        ? C`
      <wui-list-item
        @click=${this.onReceive.bind(this)}
        icon="qrCode"
        data-testid="wallet-features-receive-button"
      >
        <wui-text variant="lg-regular" color="primary">Receive funds</wui-text>
      </wui-list-item>
    `
        : null;
    }
    onBuyCrypto() {
      d.push(`OnRampProviders`);
    }
    onReceive() {
      d.push(`WalletReceive`);
    }
    onDepositFromExchange() {
      y.reset(),
        d.push(`PayWithExchange`, { redirectView: d.state.data?.redirectView });
    }
  };
Pt([O()], Ft.prototype, `activeCaipNetwork`, void 0),
  Pt([O()], Ft.prototype, `features`, void 0),
  Pt([O()], Ft.prototype, `remoteFeatures`, void 0),
  Pt([O()], Ft.prototype, `exchangesLoading`, void 0),
  Pt([O()], Ft.prototype, `exchanges`, void 0),
  (Ft = Pt([k(`w3m-fund-wallet-view`)], Ft));
var It = w`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e[`ease-out-power-2`]},
      color ${({ durations: e }) => e.lg} ${({ easings: e }) =>
    e[`ease-out-power-2`]},
      border ${({ durations: e }) => e.lg} ${({ easings: e }) =>
    e[`ease-out-power-2`]},
      box-shadow ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e[`ease-out-power-2`]},
      width ${({ durations: e }) => e.lg} ${({ easings: e }) =>
    e[`ease-out-power-2`]},
      height ${({ durations: e }) => e.lg} ${({ easings: e }) =>
    e[`ease-out-power-2`]},
      transform ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e[`ease-out-power-2`]},
      opacity ${({ durations: e }) => e.lg} ${({ easings: e }) =>
    e[`ease-out-power-2`]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ colors: e }) => e.neutrals300};
    border-radius: ${({ borderRadius: e }) => e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e[`ease-out-power-2`]},
      color ${({ durations: e }) => e.lg} ${({ easings: e }) =>
    e[`ease-out-power-2`]},
      border ${({ durations: e }) => e.lg} ${({ easings: e }) =>
    e[`ease-out-power-2`]},
      box-shadow ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e[`ease-out-power-2`]},
      width ${({ durations: e }) => e.lg} ${({ easings: e }) =>
    e[`ease-out-power-2`]},
      height ${({ durations: e }) => e.lg} ${({ easings: e }) =>
    e[`ease-out-power-2`]},
      transform ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e[`ease-out-power-2`]},
      opacity ${({ durations: e }) => e.lg} ${({ easings: e }) =>
    e[`ease-out-power-2`]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({ colors: e }) => e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({ tokens: e }) => e.core.iconAccentPrimary};
    background-color: ${({ tokens: e }) => e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({ tokens: e }) => e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({ tokens: e }) => e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({ colors: e }) => e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({ colors: e }) => e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({ colors: e }) => e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({ colors: e }) => e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({ colors: e }) => e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({ tokens: e }) => e.theme.textTertiary};
  }
`,
  Lt = function (e, t, n, r) {
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
  Rt = class extends S {
    constructor() {
      super(...arguments),
        (this.inputElementRef = be()),
        (this.checked = !1),
        (this.disabled = !1),
        (this.size = `md`);
    }
    render() {
      return C`
      <label data-size=${this.size}>
        <input
          ${ye(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `;
    }
    dispatchChangeEvent() {
      this.dispatchEvent(
        new CustomEvent(`switchChange`, {
          detail: this.inputElementRef.value?.checked,
          bubbles: !0,
          composed: !0,
        })
      );
    }
  };
(Rt.styles = [T, E, It]),
  Lt([j({ type: Boolean })], Rt.prototype, `checked`, void 0),
  Lt([j({ type: Boolean })], Rt.prototype, `disabled`, void 0),
  Lt([j()], Rt.prototype, `size`, void 0),
  (Rt = Lt([k(`wui-toggle`)], Rt));
var zt = w`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({ spacing: e }) => e[2]};
    padding: ${({ spacing: e }) => e[2]} ${({ spacing: e }) => e[3]};
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: e }) => e[4]};
    box-shadow: inset 0 0 0 1px ${({ tokens: e }) => e.theme.foregroundPrimary};
    transition: background-color ${({ durations: e }) => e.lg}
      ${({ easings: e }) => e[`ease-out-power-2`]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`,
  Bt = function (e, t, n, r) {
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
  Vt = class extends S {
    constructor() {
      super(...arguments), (this.checked = !1);
    }
    render() {
      return C`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `;
    }
    handleToggleChange(e) {
      e.stopPropagation(),
        (this.checked = e.detail),
        this.dispatchSwitchEvent();
    }
    dispatchSwitchEvent() {
      this.dispatchEvent(
        new CustomEvent(`certifiedSwitchChange`, {
          detail: this.checked,
          bubbles: !0,
          composed: !0,
        })
      );
    }
  };
(Vt.styles = [T, E, zt]),
  Bt([j({ type: Boolean })], Vt.prototype, `checked`, void 0),
  (Vt = Bt([k(`wui-certified-switch`)], Vt));
var Ht = w`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({ spacing: e }) => e[3]};
    color: ${({ tokens: e }) => e.theme.iconDefault};
    cursor: pointer;
    padding: ${({ spacing: e }) => e[2]};
    background-color: transparent;
    border-radius: ${({ borderRadius: e }) => e[4]};
    transition: background-color ${({ durations: e }) => e.lg}
      ${({ easings: e }) => e[`ease-out-power-2`]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({ tokens: e }) => e.theme.foregroundSecondary};
    }
  }
`,
  Ut = function (e, t, n, r) {
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
  Wt = class extends S {
    constructor() {
      super(...arguments),
        (this.inputComponentRef = be()),
        (this.inputValue = ``);
    }
    render() {
      return C`
      <wui-input-text
        ${ye(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${
          this.inputValue
            ? C`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`
            : null
        }
      </wui-input-text>
    `;
    }
    onInputChange(e) {
      this.inputValue = e.detail || ``;
    }
    clearValue() {
      let e = this.inputComponentRef.value?.inputElementRef.value;
      e &&
        ((e.value = ``),
        (this.inputValue = ``),
        e.focus(),
        e.dispatchEvent(new Event(`input`)));
    }
  };
(Wt.styles = [T, Ht]),
  Ut([j()], Wt.prototype, `inputValue`, void 0),
  (Wt = Ut([k(`wui-search-bar`)], Wt));
var Gt = w`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({ spacing: e }) => e[2]};
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: e }) => e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({ tokens: e }) => e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`,
  Kt = function (e, t, n, r) {
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
  qt = class extends S {
    constructor() {
      super(...arguments), (this.type = `wallet`);
    }
    render() {
      return C`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `;
    }
    shimmerTemplate() {
      return this.type === `network`
        ? C` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${_e}`
        : C`<wui-shimmer width="56px" height="56px"></wui-shimmer>`;
    }
  };
(qt.styles = [T, E, Gt]),
  Kt([j()], qt.prototype, `type`, void 0),
  (qt = Kt([k(`wui-card-select-loader`)], qt));
var Jt = x`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,
  J = function (e, t, n, r) {
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
  Y = class extends S {
    render() {
      return (
        (this.style.cssText = `
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap && `var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding && A.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && A.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && A.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && A.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && A.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && A.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && A.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && A.getSpacingStyles(this.margin, 3)};
    `),
        C`<slot></slot>`
      );
    }
  };
(Y.styles = [T, Jt]),
  J([j()], Y.prototype, `gridTemplateRows`, void 0),
  J([j()], Y.prototype, `gridTemplateColumns`, void 0),
  J([j()], Y.prototype, `justifyItems`, void 0),
  J([j()], Y.prototype, `alignItems`, void 0),
  J([j()], Y.prototype, `justifyContent`, void 0),
  J([j()], Y.prototype, `alignContent`, void 0),
  J([j()], Y.prototype, `columnGap`, void 0),
  J([j()], Y.prototype, `rowGap`, void 0),
  J([j()], Y.prototype, `gap`, void 0),
  J([j()], Y.prototype, `padding`, void 0),
  J([j()], Y.prototype, `margin`, void 0),
  (Y = J([k(`wui-grid`)], Y));
var Yt = w`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({ spacing: e }) => e[2]};
    padding: ${({ spacing: e }) => e[3]} ${({ spacing: e }) => e[0]};
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({ borderRadius: e }) => e[4]}, 20px);
    transition:
      color ${({ durations: e }) => e.lg} ${({ easings: e }) =>
    e[`ease-out-power-1`]},
      background-color ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e[`ease-out-power-1`]},
      border-radius ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e[`ease-out-power-1`]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({ tokens: e }) => e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({ tokens: e }) => e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({ tokens: e }) => e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({ colors: e }) => e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({ colors: e }) => e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({ colors: e }) => e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`,
  Xt = function (e, t, n, r) {
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
  X = class extends S {
    constructor() {
      super(),
        (this.observer = new IntersectionObserver(() => void 0)),
        (this.visible = !1),
        (this.imageSrc = void 0),
        (this.imageLoading = !1),
        (this.isImpressed = !1),
        (this.explorerId = ``),
        (this.walletQuery = ``),
        (this.certified = !1),
        (this.displayIndex = 0),
        (this.wallet = void 0),
        (this.observer = new IntersectionObserver(
          (e) => {
            e.forEach((e) => {
              e.isIntersecting
                ? ((this.visible = !0),
                  this.fetchImageSrc(),
                  this.sendImpressionEvent())
                : (this.visible = !1);
            });
          },
          { threshold: 0.01 }
        ));
    }
    firstUpdated() {
      this.observer.observe(this);
    }
    disconnectedCallback() {
      this.observer.disconnect();
    }
    render() {
      let e = this.wallet?.badge_type === `certified`;
      return C`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${D(e ? `certified` : void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${
            e
              ? C`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`
              : null
          }
        </wui-flex>
      </button>
    `;
    }
    imageTemplate() {
      return (!this.visible && !this.imageSrc) || this.imageLoading
        ? this.shimmerTemplate()
        : C`
      <wui-wallet-image
        size="lg"
        imageSrc=${D(this.imageSrc)}
        name=${D(this.wallet?.name)}
        .installed=${this.wallet?.installed ?? !1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `;
    }
    shimmerTemplate() {
      return C`<wui-shimmer width="56px" height="56px"></wui-shimmer>`;
    }
    async fetchImageSrc() {
      this.wallet &&
        ((this.imageSrc = i.getWalletImage(this.wallet)),
        !this.imageSrc &&
          ((this.imageLoading = !0),
          (this.imageSrc = await i.fetchWalletImage(this.wallet.image_id)),
          (this.imageLoading = !1)));
    }
    sendImpressionEvent() {
      this.wallet &&
        !this.isImpressed &&
        ((this.isImpressed = !0),
        v.sendWalletImpressionEvent({
          name: this.wallet.name,
          walletRank: this.wallet.order,
          explorerId: this.explorerId,
          view: d.state.view,
          query: this.walletQuery,
          certified: this.certified,
          displayIndex: this.displayIndex,
        }));
    }
  };
(X.styles = Yt),
  Xt([O()], X.prototype, `visible`, void 0),
  Xt([O()], X.prototype, `imageSrc`, void 0),
  Xt([O()], X.prototype, `imageLoading`, void 0),
  Xt([O()], X.prototype, `isImpressed`, void 0),
  Xt([j()], X.prototype, `explorerId`, void 0),
  Xt([j()], X.prototype, `walletQuery`, void 0),
  Xt([j()], X.prototype, `certified`, void 0),
  Xt([j()], X.prototype, `displayIndex`, void 0),
  Xt([j({ type: Object })], X.prototype, `wallet`, void 0),
  (X = Xt([k(`w3m-all-wallets-list-item`)], X));
var Zt = w`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({ durations: e }) => e.xl};
    animation-timing-function: ${({ easings: e }) => e[`ease-inout-power-2`]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({ spacing: e }) => e[4]};
    padding-bottom: ${({ spacing: e }) => e[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,
  Qt = function (e, t, n, r) {
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
  $t = `local-paginator`,
  en = class extends S {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.paginationObserver = void 0),
        (this.loading = !n.state.wallets.length),
        (this.wallets = n.state.wallets),
        (this.mobileFullScreen = o.state.enableMobileFullScreen),
        this.unsubscribe.push(
          n.subscribeKey(`wallets`, (e) => (this.wallets = e))
        );
    }
    firstUpdated() {
      this.mobileFullScreen &&
        this.setAttribute(`data-mobile-fullscreen`, `true`),
        this.initialFetch(),
        this.createPaginationObserver();
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e()),
        this.paginationObserver?.disconnect();
    }
    render() {
      return C`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${[`0`, `3`, `3`, `3`]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading ? this.shimmerTemplate(16) : this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `;
    }
    async initialFetch() {
      this.loading = !0;
      let e = this.shadowRoot?.querySelector(`wui-grid`);
      e &&
        (await n.fetchWalletsByPage({ page: 1 }),
        await e.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 200,
          fill: `forwards`,
          easing: `ease`,
        }).finished,
        (this.loading = !1),
        e.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 200,
          fill: `forwards`,
          easing: `ease`,
        }));
    }
    shimmerTemplate(e, t) {
      return [...Array(e)].map(
        () => C`
        <wui-card-select-loader type="wallet" id=${D(
          t
        )}></wui-card-select-loader>
      `
      );
    }
    walletsTemplate() {
      return c.getWalletConnectWallets(this.wallets).map(
        (e, t) => C`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${e.id}"
          @click=${() => this.onConnectWallet(e)}
          .wallet=${e}
          explorerId=${e.id}
          certified=${this.badge === `certified`}
          displayIndex=${t}
        ></w3m-all-wallets-list-item>
      `
      );
    }
    paginationLoaderTemplate() {
      let {
          wallets: e,
          recommended: t,
          featured: r,
          count: i,
          mobileFilteredOutWalletsLength: a,
        } = n.state,
        o = window.innerWidth < 352 ? 3 : 4,
        s = e.length + t.length,
        c = Math.ceil(s / o) * o - s + o;
      return (
        (c -= e.length ? r.length % o : 0),
        i === 0 && r.length > 0
          ? null
          : i === 0 || [...r, ...e, ...t].length < i - (a ?? 0)
          ? this.shimmerTemplate(c, $t)
          : null
      );
    }
    createPaginationObserver() {
      let e = this.shadowRoot?.querySelector(`#${$t}`);
      e &&
        ((this.paginationObserver = new IntersectionObserver(([e]) => {
          if (e?.isIntersecting && !this.loading) {
            let { page: e, count: t, wallets: r } = n.state;
            r.length < t && n.fetchWalletsByPage({ page: e + 1 });
          }
        })),
        this.paginationObserver.observe(e));
    }
    onConnectWallet(e) {
      _.selectWalletConnector(e);
    }
  };
(en.styles = Zt),
  Qt([O()], en.prototype, `loading`, void 0),
  Qt([O()], en.prototype, `wallets`, void 0),
  Qt([O()], en.prototype, `badge`, void 0),
  Qt([O()], en.prototype, `mobileFullScreen`, void 0),
  (en = Qt([k(`w3m-all-wallets-list`)], en));
var tn = x`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`,
  nn = function (e, t, n, r) {
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
  rn = class extends S {
    constructor() {
      super(...arguments),
        (this.prevQuery = ``),
        (this.prevBadge = void 0),
        (this.loading = !0),
        (this.mobileFullScreen = o.state.enableMobileFullScreen),
        (this.query = ``);
    }
    render() {
      return (
        this.mobileFullScreen &&
          this.setAttribute(`data-mobile-fullscreen`, `true`),
        this.onSearch(),
        this.loading
          ? C`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`
          : this.walletsTemplate()
      );
    }
    async onSearch() {
      (this.query.trim() !== this.prevQuery.trim() ||
        this.badge !== this.prevBadge) &&
        ((this.prevQuery = this.query),
        (this.prevBadge = this.badge),
        (this.loading = !0),
        await n.searchWallet({ search: this.query, badge: this.badge }),
        (this.loading = !1));
    }
    walletsTemplate() {
      let { search: e } = n.state,
        t = c.markWalletsAsInstalled(e),
        r = c.filterWalletsByWcSupport(t);
      return r.length
        ? C`
      <wui-grid
        data-testid="wallet-list"
        .padding=${[`0`, `3`, `3`, `3`]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${r.map(
          (e, t) => C`
            <w3m-all-wallets-list-item
              @click=${() => this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
              explorerId=${e.id}
              certified=${this.badge === `certified`}
              walletQuery=${this.query}
              displayIndex=${t}
            ></w3m-all-wallets-list-item>
          `
        )}
      </wui-grid>
    `
        : C`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `;
    }
    onConnectWallet(e) {
      _.selectWalletConnector(e);
    }
  };
(rn.styles = tn),
  nn([O()], rn.prototype, `loading`, void 0),
  nn([O()], rn.prototype, `mobileFullScreen`, void 0),
  nn([j()], rn.prototype, `query`, void 0),
  nn([j()], rn.prototype, `badge`, void 0),
  (rn = nn([k(`w3m-all-wallets-search`)], rn));
var an = function (e, t, n, r) {
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
  on = class extends S {
    constructor() {
      super(...arguments),
        (this.search = ``),
        (this.badge = void 0),
        (this.onDebouncedSearch = u.debounce((e) => {
          this.search = e;
        }));
    }
    render() {
      let e = this.search.length >= 2;
      return C`
      <wui-flex .padding=${[`1`, `3`, `3`, `3`]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(
          this
        )}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge === `certified`}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${
        e || this.badge
          ? C`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`
          : C`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`
      }
    `;
    }
    onInputChange(e) {
      this.onDebouncedSearch(e.detail);
    }
    onCertifiedSwitchChange(e) {
      e.detail
        ? ((this.badge = `certified`),
          f.showSvg(`Only WalletConnect certified`, {
            icon: `walletConnectBrown`,
            iconColor: `accent-100`,
          }))
        : (this.badge = void 0);
    }
    qrButtonTemplate() {
      return u.isMobile()
        ? C`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `
        : null;
    }
    onWalletConnectQr() {
      d.push(`ConnectingWalletConnect`);
    }
  };
an([O()], on.prototype, `search`, void 0),
  an([O()], on.prototype, `badge`, void 0),
  (on = an([k(`w3m-all-wallets-view`)], on));
var sn = w`
  button {
    display: flex;
    gap: ${({ spacing: e }) => e[1]};
    padding: ${({ spacing: e }) => e[4]};
    width: 100%;
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: e }) => e[4]};
    justify-content: center;
    align-items: center;
  }

  :host([data-size='sm']) button {
    padding: ${({ spacing: e }) => e[2]};
    border-radius: ${({ borderRadius: e }) => e[2]};
  }

  :host([data-size='md']) button {
    padding: ${({ spacing: e }) => e[3]};
    border-radius: ${({ borderRadius: e }) => e[3]};
  }

  button:hover {
    background-color: ${({ tokens: e }) => e.theme.foregroundSecondary};
  }

  button:disabled {
    opacity: 0.5;
  }
`,
  cn = function (e, t, n, r) {
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
  ln = class extends S {
    constructor() {
      super(...arguments),
        (this.text = ``),
        (this.disabled = !1),
        (this.size = `lg`),
        (this.icon = `copy`),
        (this.tabIdx = void 0);
    }
    render() {
      this.dataset.size = this.size;
      let e = `${this.size}-regular`;
      return C`
      <button ?disabled=${this.disabled} tabindex=${D(this.tabIdx)}>
        <wui-icon name=${this.icon} size=${
        this.size
      } color="default"></wui-icon>
        <wui-text align="center" variant=${e} color="primary">${
        this.text
      }</wui-text>
      </button>
    `;
    }
  };
(ln.styles = [T, E, sn]),
  cn([j()], ln.prototype, `text`, void 0),
  cn([j({ type: Boolean })], ln.prototype, `disabled`, void 0),
  cn([j()], ln.prototype, `size`, void 0),
  cn([j()], ln.prototype, `icon`, void 0),
  cn([j()], ln.prototype, `tabIdx`, void 0),
  (ln = cn([k(`wui-list-button`)], ln));
var un = w`
  wui-separator {
    margin: ${({ spacing: e }) => e[3]} calc(${({ spacing: e }) => e[3]} * -1);
    width: calc(100% + ${({ spacing: e }) => e[3]} * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: ${({ spacing: e }) => e[2]};
  }

  wui-loading-spinner {
    right: ${({ spacing: e }) => e[3]};
  }

  wui-text {
    margin: ${({ spacing: e }) => e[2]} ${({ spacing: e }) => e[3]}
      ${({ spacing: e }) => e[0]} ${({ spacing: e }) => e[3]};
  }
`,
  dn = function (e, t, n, r) {
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
  fn = class extends S {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.formRef = be()),
        (this.email = ``),
        (this.loading = !1),
        (this.error = ``),
        (this.remoteFeatures = o.state.remoteFeatures),
        (this.hasExceededUsageLimit = n.state.plan.hasExceededUsageLimit),
        this.unsubscribe.push(
          o.subscribeKey(`remoteFeatures`, (e) => {
            this.remoteFeatures = e;
          }),
          n.subscribeKey(
            `plan`,
            (e) => (this.hasExceededUsageLimit = e.hasExceededUsageLimit)
          )
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    firstUpdated() {
      this.formRef.value?.addEventListener(`keydown`, (e) => {
        e.key === `Enter` && this.onSubmitEmail(e);
      });
    }
    render() {
      let e = p.hasAnyConnection(h.CONNECTOR_ID.AUTH);
      return C`
      <form ${ye(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${D(this.tabIdx)}
          ?disabled=${e || this.hasExceededUsageLimit}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `;
    }
    submitButtonTemplate() {
      return !this.loading && this.email.length > 3
        ? C`
          <wui-icon-link
            size="lg"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `
        : null;
    }
    loadingTemplate() {
      return this.loading
        ? C`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`
        : null;
    }
    templateError() {
      return this.error
        ? C`<wui-text variant="sm-medium" color="error">${this.error}</wui-text>`
        : null;
    }
    onEmailInputChange(e) {
      (this.email = e.detail.trim()), (this.error = ``);
    }
    async onSubmitEmail(e) {
      if (!xe.isValidEmail(this.email)) {
        de.open(
          { displayMessage: ue.ALERT_WARNINGS.INVALID_EMAIL.displayMessage },
          `warning`
        );
        return;
      }
      if (
        !h.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(
          (e) => e === m.state.activeChain
        )
      ) {
        let e = m.getFirstCaipNetworkSupportsAuthConnector();
        if (e) {
          d.push(`SwitchNetwork`, { network: e });
          return;
        }
      }
      try {
        if (this.loading) return;
        (this.loading = !0), e.preventDefault();
        let t = _.getAuthConnector();
        if (!t) throw Error(`w3m-email-login-widget: Auth connector not found`);
        let { action: n } = await t.provider.connectEmail({
          email: this.email,
        });
        if (
          (v.sendEvent({ type: `track`, event: `EMAIL_SUBMITTED` }),
          n === `VERIFY_OTP`)
        )
          v.sendEvent({ type: `track`, event: `EMAIL_VERIFICATION_CODE_SENT` }),
            d.push(`EmailVerifyOtp`, { email: this.email });
        else if (n === `VERIFY_DEVICE`)
          d.push(`EmailVerifyDevice`, { email: this.email });
        else if (n === `CONNECT`) {
          let e = this.remoteFeatures?.multiWallet;
          await p.connectExternal(t, m.state.activeChain),
            e
              ? (d.replace(`ProfileWallets`), f.showSuccess(`New Wallet Added`))
              : d.replace(`Account`);
        }
      } catch (e) {
        u.parseError(e)?.includes(`Invalid email`)
          ? (this.error = `Invalid email. Try again.`)
          : f.showError(e);
      } finally {
        this.loading = !1;
      }
    }
    onFocusEvent() {
      v.sendEvent({ type: `track`, event: `EMAIL_LOGIN_SELECTED` });
    }
  };
(fn.styles = un),
  dn([j()], fn.prototype, `tabIdx`, void 0),
  dn([O()], fn.prototype, `email`, void 0),
  dn([O()], fn.prototype, `loading`, void 0),
  dn([O()], fn.prototype, `error`, void 0),
  dn([O()], fn.prototype, `remoteFeatures`, void 0),
  dn([O()], fn.prototype, `hasExceededUsageLimit`, void 0),
  (fn = dn([k(`w3m-email-login-widget`)], fn));
var pn = w`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ tokens: e }) => e.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: e }) => e[4]};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background: ${({ tokens: e }) => e.theme.foregroundSecondary};
    }
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,
  mn = function (e, t, n, r) {
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
  hn = class extends S {
    constructor() {
      super(...arguments),
        (this.logo = `google`),
        (this.disabled = !1),
        (this.tabIdx = void 0);
    }
    render() {
      return C`
      <button ?disabled=${this.disabled} tabindex=${D(this.tabIdx)}>
        <wui-icon size="xxl" name=${this.logo}></wui-icon>
      </button>
    `;
    }
  };
(hn.styles = [T, E, pn]),
  mn([j()], hn.prototype, `logo`, void 0),
  mn([j({ type: Boolean })], hn.prototype, `disabled`, void 0),
  mn([j()], hn.prototype, `tabIdx`, void 0),
  (hn = mn([k(`wui-logo-select`)], hn));
var gn = w`
  wui-separator {
    margin: ${({ spacing: e }) => e[3]} calc(${({ spacing: e }) => e[3]} * -1)
      ${({ spacing: e }) => e[3]} calc(${({ spacing: e }) => e[3]} * -1);
    width: calc(100% + ${({ spacing: e }) => e[3]} * 2);
  }
`,
  _n = function (e, t, n, r) {
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
  vn = 2,
  yn = 6,
  bn = class extends S {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.walletGuide = `get-started`),
        (this.tabIdx = void 0),
        (this.connectors = _.state.connectors),
        (this.remoteFeatures = o.state.remoteFeatures),
        (this.authConnector = this.connectors.find((e) => e.type === `AUTH`)),
        (this.isPwaLoading = !1),
        (this.hasExceededUsageLimit = n.state.plan.hasExceededUsageLimit),
        this.unsubscribe.push(
          _.subscribeKey(`connectors`, (e) => {
            (this.connectors = e),
              (this.authConnector = this.connectors.find(
                (e) => e.type === `AUTH`
              ));
          }),
          o.subscribeKey(`remoteFeatures`, (e) => (this.remoteFeatures = e)),
          n.subscribeKey(
            `plan`,
            (e) => (this.hasExceededUsageLimit = e.hasExceededUsageLimit)
          )
        );
    }
    connectedCallback() {
      super.connectedCallback(), this.handlePwaFrameLoad();
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      return C`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="2"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `;
    }
    topViewTemplate() {
      let e = this.walletGuide === `explore`,
        t = this.remoteFeatures?.socials;
      return !t && e
        ? ((t = l.DEFAULT_SOCIALS), this.renderTopViewContent(t))
        : t
        ? this.renderTopViewContent(t)
        : null;
    }
    renderTopViewContent(e) {
      return e.length === 2
        ? C` <wui-flex gap="2">
        ${e.slice(0, vn).map(
          (e) => C`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${() => {
                this.onSocialClick(e);
              }}
              logo=${e}
              tabIdx=${D(this.tabIdx)}
              ?disabled=${this.isPwaLoading || this.hasConnection()}
            ></wui-logo-select>`
        )}
      </wui-flex>`
        : C` <wui-list-button
      data-testid=${`social-selector-${e[0]}`}
      @click=${() => {
        this.onSocialClick(e[0]);
      }}
      size="lg"
      icon=${D(e[0])}
      text=${`Continue with ${A.capitalize(e[0])}`}
      tabIdx=${D(this.tabIdx)}
      ?disabled=${this.isPwaLoading || this.hasConnection()}
    ></wui-list-button>`;
    }
    bottomViewTemplate() {
      let e = this.remoteFeatures?.socials,
        t = this.walletGuide === `explore`;
      return (
        (!this.authConnector || !e || e.length === 0) &&
          t &&
          (e = l.DEFAULT_SOCIALS),
        !e || e.length <= vn
          ? null
          : e && e.length > yn
          ? C`<wui-flex gap="2">
        ${e.slice(1, 5).map(
          (e) => C`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${() => {
                this.onSocialClick(e);
              }}
              logo=${e}
              tabIdx=${D(this.tabIdx)}
              ?focusable=${this.tabIdx !== void 0 && this.tabIdx >= 0}
              ?disabled=${this.isPwaLoading || this.hasConnection()}
            ></wui-logo-select>`
        )}
        <wui-logo-select
          logo="more"
          tabIdx=${D(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading || this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`
          : e
          ? C`<wui-flex gap="2">
      ${e.slice(1, e.length).map(
        (e) => C`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${() => {
              this.onSocialClick(e);
            }}
            logo=${e}
            tabIdx=${D(this.tabIdx)}
            ?focusable=${this.tabIdx !== void 0 && this.tabIdx >= 0}
            ?disabled=${this.isPwaLoading || this.hasConnection()}
          ></wui-logo-select>`
      )}
    </wui-flex>`
          : null
      );
    }
    onMoreSocialsClick() {
      d.push(`ConnectSocials`);
    }
    async onSocialClick(e) {
      if (this.hasExceededUsageLimit) {
        d.push(`UsageExceeded`);
        return;
      }
      if (
        !h.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(
          (e) => e === m.state.activeChain
        )
      ) {
        let e = m.getFirstCaipNetworkSupportsAuthConnector();
        if (e) {
          d.push(`SwitchNetwork`, { network: e });
          return;
        }
      }
      e && (await ve(e));
    }
    async handlePwaFrameLoad() {
      if (u.isPWA()) {
        this.isPwaLoading = !0;
        try {
          this.authConnector?.provider instanceof le &&
            (await this.authConnector.provider.init());
        } catch (e) {
          de.open(
            {
              displayMessage: `Error loading embedded wallet in PWA`,
              debugMessage: e.message,
            },
            `error`
          );
        } finally {
          this.isPwaLoading = !1;
        }
      }
    }
    hasConnection() {
      return p.hasAnyConnection(h.CONNECTOR_ID.AUTH);
    }
  };
(bn.styles = gn),
  _n([j()], bn.prototype, `walletGuide`, void 0),
  _n([j()], bn.prototype, `tabIdx`, void 0),
  _n([O()], bn.prototype, `connectors`, void 0),
  _n([O()], bn.prototype, `remoteFeatures`, void 0),
  _n([O()], bn.prototype, `authConnector`, void 0),
  _n([O()], bn.prototype, `isPwaLoading`, void 0),
  _n([O()], bn.prototype, `hasExceededUsageLimit`, void 0),
  (bn = _n([k(`w3m-social-login-widget`)], bn));
var xn = function (e, t, n, r) {
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
  Sn = class extends S {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.tabIdx = void 0),
        (this.connectors = _.state.connectors),
        (this.count = n.state.count),
        (this.filteredCount = n.state.filteredWallets.length),
        (this.isFetchingRecommendedWallets =
          n.state.isFetchingRecommendedWallets),
        this.unsubscribe.push(
          _.subscribeKey(`connectors`, (e) => (this.connectors = e)),
          n.subscribeKey(`count`, (e) => (this.count = e)),
          n.subscribeKey(
            `filteredWallets`,
            (e) => (this.filteredCount = e.length)
          ),
          n.subscribeKey(
            `isFetchingRecommendedWallets`,
            (e) => (this.isFetchingRecommendedWallets = e)
          )
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      let e = this.connectors.find((e) => e.id === `walletConnect`),
        { allWallets: t } = o.state;
      if (!e || t === `HIDE` || (t === `ONLY_MOBILE` && !u.isMobile()))
        return null;
      let r = n.state.featured.length,
        i = this.count + r,
        a = i < 10 ? i : Math.floor(i / 10) * 10,
        s = this.filteredCount > 0 ? this.filteredCount : a,
        c = `${s}`;
      this.filteredCount > 0
        ? (c = `${this.filteredCount}`)
        : s < i && (c = `${s}+`);
      let ee = p.hasAnyConnection(h.CONNECTOR_ID.WALLET_CONNECT);
      return C`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${c}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${D(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${ee}
        size="sm"
      ></wui-list-wallet>
    `;
    }
    onAllWallets() {
      v.sendEvent({ type: `track`, event: `CLICK_ALL_WALLETS` }),
        d.push(`AllWallets`, { redirectView: d.state.data?.redirectView });
    }
  };
xn([j()], Sn.prototype, `tabIdx`, void 0),
  xn([O()], Sn.prototype, `connectors`, void 0),
  xn([O()], Sn.prototype, `count`, void 0),
  xn([O()], Sn.prototype, `filteredCount`, void 0),
  xn([O()], Sn.prototype, `isFetchingRecommendedWallets`, void 0),
  (Sn = xn([k(`w3m-all-wallets-widget`)], Sn));
var Cn = w`
  :host {
    margin-top: ${({ spacing: e }) => e[1]};
  }
  wui-separator {
    margin: ${({ spacing: e }) => e[3]} calc(${({ spacing: e }) => e[3]} * -1)
      ${({ spacing: e }) => e[2]} calc(${({ spacing: e }) => e[3]} * -1);
    width: calc(100% + ${({ spacing: e }) => e[3]} * 2);
  }
`,
  wn = function (e, t, n, r) {
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
  Tn = class extends S {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.explorerWallets = n.state.explorerWallets),
        (this.connections = p.state.connections),
        (this.connectorImages = r.state.connectorImages),
        (this.loadingTelegram = !1),
        this.unsubscribe.push(
          p.subscribeKey(`connections`, (e) => (this.connections = e)),
          r.subscribeKey(`connectorImages`, (e) => (this.connectorImages = e)),
          n.subscribeKey(`explorerFilteredWallets`, (e) => {
            this.explorerWallets = e?.length ? e : n.state.explorerWallets;
          }),
          n.subscribeKey(`explorerWallets`, (e) => {
            this.explorerWallets?.length || (this.explorerWallets = e);
          })
        ),
        u.isTelegram() &&
          u.isIos() &&
          ((this.loadingTelegram = !p.state.wcUri),
          this.unsubscribe.push(
            p.subscribeKey(`wcUri`, (e) => (this.loadingTelegram = !e))
          ));
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      return C`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `;
    }
    connectorListTemplate() {
      return oe
        .connectorList()
        .map((e, t) =>
          e.kind === `connector`
            ? this.renderConnector(e, t)
            : this.renderWallet(e, t)
        );
    }
    getConnectorNamespaces(e) {
      return e.subtype === `walletConnect`
        ? []
        : e.subtype === `multiChain`
        ? e.connector.connectors?.map((e) => e.chain) || []
        : [e.connector.chain];
    }
    renderConnector(e, t) {
      let n = e.connector,
        r = i.getConnectorImage(n) || this.connectorImages[n?.imageId ?? ``],
        a = (this.connections.get(n.chain) ?? []).some((e) =>
          b.isLowerCaseMatch(e.connectorId, n.id)
        ),
        o,
        s;
      e.subtype === `walletConnect`
        ? ((o = `qr code`), (s = `accent`))
        : e.subtype === `injected` || e.subtype === `announced`
        ? ((o = a ? `connected` : `installed`), (s = a ? `info` : `success`))
        : ((o = void 0), (s = void 0));
      let c = p.hasAnyConnection(h.CONNECTOR_ID.WALLET_CONNECT),
        ee = e.subtype === `walletConnect` || e.subtype === `external` ? c : !1;
      return C`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${D(r)}
        .installed=${!0}
        name=${n.name ?? `Unknown`}
        .tagVariant=${s}
        tagLabel=${D(o)}
        data-testid=${`wallet-selector-${n.id.toLowerCase()}`}
        size="sm"
        @click=${() => this.onClickConnector(e)}
        tabIdx=${D(this.tabIdx)}
        ?disabled=${ee}
        rdnsId=${D(n.explorerWallet?.rdns || void 0)}
        walletRank=${D(n.explorerWallet?.order)}
        .namespaces=${this.getConnectorNamespaces(e)}
      >
      </w3m-list-wallet>
    `;
    }
    onClickConnector(e) {
      let t = d.state.data?.redirectView;
      if (e.subtype === `walletConnect`) {
        _.setActiveConnector(e.connector),
          u.isMobile()
            ? d.push(`AllWallets`)
            : d.push(`ConnectingWalletConnect`, { redirectView: t });
        return;
      }
      if (e.subtype === `multiChain`) {
        _.setActiveConnector(e.connector),
          d.push(`ConnectingMultiChain`, { redirectView: t });
        return;
      }
      if (e.subtype === `injected`) {
        _.setActiveConnector(e.connector),
          d.push(`ConnectingExternal`, {
            connector: e.connector,
            redirectView: t,
            wallet: e.connector.explorerWallet,
          });
        return;
      }
      if (e.subtype === `announced`) {
        if (e.connector.id === `walletConnect`) {
          u.isMobile()
            ? d.push(`AllWallets`)
            : d.push(`ConnectingWalletConnect`, { redirectView: t });
          return;
        }
        d.push(`ConnectingExternal`, {
          connector: e.connector,
          redirectView: t,
          wallet: e.connector.explorerWallet,
        });
        return;
      }
      d.push(`ConnectingExternal`, { connector: e.connector, redirectView: t });
    }
    renderWallet(e, t) {
      let n = e.wallet,
        r = i.getWalletImage(n),
        a = p.hasAnyConnection(h.CONNECTOR_ID.WALLET_CONNECT),
        o = this.loadingTelegram,
        s = e.subtype === `recent` ? `recent` : void 0,
        c = e.subtype === `recent` ? `info` : void 0;
      return C`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${D(r)}
        name=${n.name ?? `Unknown`}
        @click=${() => this.onClickWallet(e)}
        size="sm"
        data-testid=${`wallet-selector-${n.id}`}
        tabIdx=${D(this.tabIdx)}
        ?loading=${o}
        ?disabled=${a}
        rdnsId=${D(n.rdns || void 0)}
        walletRank=${D(n.order)}
        tagLabel=${D(s)}
        .tagVariant=${c}
      >
      </w3m-list-wallet>
    `;
    }
    onClickWallet(e) {
      let t = d.state.data?.redirectView,
        n = m.state.activeChain;
      if (e.subtype === `featured`) {
        _.selectWalletConnector(e.wallet);
        return;
      }
      if (e.subtype === `recent`) {
        if (this.loadingTelegram) return;
        _.selectWalletConnector(e.wallet);
        return;
      }
      if (e.subtype === `custom`) {
        if (this.loadingTelegram) return;
        d.push(`ConnectingWalletConnect`, {
          wallet: e.wallet,
          redirectView: t,
        });
        return;
      }
      if (this.loadingTelegram) return;
      let r = n ? _.getConnector({ id: e.wallet.id, namespace: n }) : void 0;
      r
        ? d.push(`ConnectingExternal`, { connector: r, redirectView: t })
        : d.push(`ConnectingWalletConnect`, {
            wallet: e.wallet,
            redirectView: t,
          });
    }
  };
(Tn.styles = Cn),
  wn([j({ type: Number })], Tn.prototype, `tabIdx`, void 0),
  wn([O()], Tn.prototype, `explorerWallets`, void 0),
  wn([O()], Tn.prototype, `connections`, void 0),
  wn([O()], Tn.prototype, `connectorImages`, void 0),
  wn([O()], Tn.prototype, `loadingTelegram`, void 0),
  (Tn = wn([k(`w3m-connector-list`)], Tn));
var En = function (e, t, n, r) {
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
  Dn = class extends S {
    constructor() {
      super(...arguments), (this.tabIdx = void 0);
    }
    render() {
      return C`
      <wui-flex flexDirection="column" gap="2">
        <w3m-connector-list tabIdx=${D(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${D(
          this.tabIdx
        )}></w3m-all-wallets-widget>
      </wui-flex>
    `;
    }
  };
En([j()], Dn.prototype, `tabIdx`, void 0),
  (Dn = En([k(`w3m-wallet-login-list`)], Dn));
var On = w`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({ durations: e }) => e.lg}
      ${({ easings: e }) => e[`ease-out-power-2`]};
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity ${({ durations: e }) => e.lg}
      ${({ easings: e }) => e[`ease-out-power-2`]};
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: ${({ spacing: e }) => e[3]} calc(${({ spacing: e }) => e[3]} * -1);
    width: calc(100% + ${({ spacing: e }) => e[3]} * 2);
  }
`,
  Z = function (e, t, n, r) {
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
  kn = 470,
  Q = class extends S {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.connectors = _.state.connectors),
        (this.authConnector = this.connectors.find((e) => e.type === `AUTH`)),
        (this.features = o.state.features),
        (this.remoteFeatures = o.state.remoteFeatures),
        (this.enableWallets = o.state.enableWallets),
        (this.noAdapters = m.state.noAdapters),
        (this.walletGuide = `get-started`),
        (this.checked = fe.state.isLegalCheckboxChecked),
        (this.isEmailEnabled =
          this.remoteFeatures?.email && !m.state.noAdapters),
        (this.isSocialEnabled =
          this.remoteFeatures?.socials &&
          this.remoteFeatures.socials.length > 0 &&
          !m.state.noAdapters),
        (this.isAuthEnabled = this.checkIfAuthEnabled(this.connectors)),
        this.unsubscribe.push(
          _.subscribeKey(`connectors`, (e) => {
            (this.connectors = e),
              (this.authConnector = this.connectors.find(
                (e) => e.type === `AUTH`
              )),
              (this.isAuthEnabled = this.checkIfAuthEnabled(this.connectors));
          }),
          o.subscribeKey(`features`, (e) => {
            this.features = e;
          }),
          o.subscribeKey(`remoteFeatures`, (e) => {
            (this.remoteFeatures = e),
              this.setEmailAndSocialEnableCheck(
                this.noAdapters,
                this.remoteFeatures
              );
          }),
          o.subscribeKey(`enableWallets`, (e) => (this.enableWallets = e)),
          m.subscribeKey(`noAdapters`, (e) =>
            this.setEmailAndSocialEnableCheck(e, this.remoteFeatures)
          ),
          fe.subscribeKey(`isLegalCheckboxChecked`, (e) => (this.checked = e))
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e()),
        this.resizeObserver?.disconnect(),
        this.shadowRoot
          ?.querySelector(`.connect`)
          ?.removeEventListener(
            `scroll`,
            this.handleConnectListScroll.bind(this)
          );
    }
    firstUpdated() {
      let e = this.shadowRoot?.querySelector(`.connect`);
      e &&
        (requestAnimationFrame(this.handleConnectListScroll.bind(this)),
        e?.addEventListener(`scroll`, this.handleConnectListScroll.bind(this)),
        (this.resizeObserver = new ResizeObserver(() => {
          this.handleConnectListScroll();
        })),
        this.resizeObserver?.observe(e),
        this.handleConnectListScroll());
    }
    render() {
      let { termsConditionsUrl: e, privacyPolicyUrl: t } = o.state,
        n = o.state.features?.legalCheckbox,
        r =
          !!(e || t) &&
          !!n &&
          this.walletGuide === `get-started` &&
          !this.checked,
        i = { connect: !0, disabled: r },
        a = o.state.enableWalletGuide,
        s = this.enableWallets,
        c = this.isSocialEnabled || this.authConnector,
        ee = r ? -1 : void 0;
      return C`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          .padding=${[`0`, `0`, `4`, `0`]}
          class=${he(i)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="2"
            .padding=${
              c && s && a && this.walletGuide === `get-started`
                ? [`0`, `3`, `0`, `3`]
                : [`0`, `3`, `3`, `3`]
            }
          >
            ${this.renderConnectMethod(ee)}
          </wui-flex>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `;
    }
    reownBrandingTemplate() {
      return xe.hasFooter() || !this.remoteFeatures?.reownBranding
        ? null
        : C`<wui-ux-by-reown></wui-ux-by-reown>`;
    }
    setEmailAndSocialEnableCheck(e, t) {
      (this.isEmailEnabled = t?.email && !e),
        (this.isSocialEnabled = t?.socials && t.socials.length > 0 && !e),
        (this.remoteFeatures = t),
        (this.noAdapters = e);
    }
    checkIfAuthEnabled(e) {
      let t = e
        .filter((e) => e.type === pe.CONNECTOR_TYPE_AUTH)
        .map((e) => e.chain);
      return h.AUTH_CONNECTOR_SUPPORTED_CHAINS.some((e) => t.includes(e));
    }
    renderConnectMethod(e) {
      let t = c.getConnectOrderMethod(this.features, this.connectors);
      return C`${t.map((t, n) => {
        switch (t) {
          case `email`:
            return C`${this.emailTemplate(e)} ${this.separatorTemplate(
              n,
              `email`
            )}`;
          case `social`:
            return C`${this.socialListTemplate(e)}
          ${this.separatorTemplate(n, `social`)}`;
          case `wallet`:
            return C`${this.walletListTemplate(e)}
          ${this.separatorTemplate(n, `wallet`)}`;
          default:
            return null;
        }
      })}`;
    }
    checkMethodEnabled(e) {
      switch (e) {
        case `wallet`:
          return this.enableWallets;
        case `social`:
          return this.isSocialEnabled && this.isAuthEnabled;
        case `email`:
          return this.isEmailEnabled && this.isAuthEnabled;
        default:
          return null;
      }
    }
    checkIsThereNextMethod(e) {
      let t = c.getConnectOrderMethod(this.features, this.connectors)[e + 1];
      if (t)
        return this.checkMethodEnabled(t)
          ? t
          : this.checkIsThereNextMethod(e + 1);
    }
    separatorTemplate(e, t) {
      let n = this.checkIsThereNextMethod(e),
        r = this.walletGuide === `explore`;
      switch (t) {
        case `wallet`:
          return this.enableWallets && n && !r
            ? C`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`
            : null;
        case `email`: {
          let e = n === `social`;
          return this.isAuthEnabled && this.isEmailEnabled && !e && n
            ? C`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`
            : null;
        }
        case `social`: {
          let e = n === `email`;
          return this.isAuthEnabled && this.isSocialEnabled && !e && n
            ? C`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`
            : null;
        }
        default:
          return null;
      }
    }
    emailTemplate(e) {
      return !this.isEmailEnabled || !this.isAuthEnabled
        ? null
        : C`<w3m-email-login-widget tabIdx=${D(e)}></w3m-email-login-widget>`;
    }
    socialListTemplate(e) {
      return !this.isSocialEnabled || !this.isAuthEnabled
        ? null
        : C`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${D(e)}
    ></w3m-social-login-widget>`;
    }
    walletListTemplate(e) {
      let t = this.enableWallets,
        n = this.features?.emailShowWallets === !1,
        r = this.features?.collapseWallets,
        i = n || r;
      return !t ||
        (u.isTelegram() &&
          (u.isSafari() || u.isIos()) &&
          p.connectWalletConnect().catch((e) => ({})),
        this.walletGuide === `explore`)
        ? null
        : this.isAuthEnabled &&
          (this.isEmailEnabled || this.isSocialEnabled) &&
          i
        ? C`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${D(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
        icon="wallet"
      ></wui-list-button>`
        : C`<w3m-wallet-login-list tabIdx=${D(e)}></w3m-wallet-login-list>`;
    }
    legalCheckboxTemplate() {
      return this.walletGuide === `explore`
        ? null
        : C`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`;
    }
    handleConnectListScroll() {
      let e = this.shadowRoot?.querySelector(`.connect`);
      e &&
        (e.scrollHeight > kn
          ? (e.style.setProperty(
              `--connect-mask-image`,
              `linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 100px,
          black calc(100% - 100px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`
            ),
            e.style.setProperty(
              `--connect-scroll--top-opacity`,
              ge.interpolate([0, 50], [0, 1], e.scrollTop).toString()
            ),
            e.style.setProperty(
              `--connect-scroll--bottom-opacity`,
              ge
                .interpolate(
                  [0, 50],
                  [0, 1],
                  e.scrollHeight - e.scrollTop - e.offsetHeight
                )
                .toString()
            ))
          : (e.style.setProperty(`--connect-mask-image`, `none`),
            e.style.setProperty(`--connect-scroll--top-opacity`, `0`),
            e.style.setProperty(`--connect-scroll--bottom-opacity`, `0`)));
    }
    onContinueWalletClick() {
      d.push(`ConnectWallets`);
    }
  };
(Q.styles = On),
  Z([O()], Q.prototype, `connectors`, void 0),
  Z([O()], Q.prototype, `authConnector`, void 0),
  Z([O()], Q.prototype, `features`, void 0),
  Z([O()], Q.prototype, `remoteFeatures`, void 0),
  Z([O()], Q.prototype, `enableWallets`, void 0),
  Z([O()], Q.prototype, `noAdapters`, void 0),
  Z([j()], Q.prototype, `walletGuide`, void 0),
  Z([O()], Q.prototype, `checked`, void 0),
  Z([O()], Q.prototype, `isEmailEnabled`, void 0),
  Z([O()], Q.prototype, `isSocialEnabled`, void 0),
  Z([O()], Q.prototype, `isAuthEnabled`, void 0),
  (Q = Z([k(`w3m-connect-view`)], Q));
var An = w`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: e }) => e[5]};
    padding-left: ${({ spacing: e }) => e[3]};
    padding-right: ${({ spacing: e }) => e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ spacing: e }) => e[6]};
  }

  wui-text {
    color: ${({ tokens: e }) => e.theme.textSecondary};
    min-width: 0;
    flex: 1 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  wui-button {
    flex-shrink: 0;
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`,
  jn = function (e, t, n, r) {
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
  Mn = class extends S {
    constructor() {
      super(...arguments),
        (this.disabled = !1),
        (this.label = ``),
        (this.buttonLabel = ``);
    }
    render() {
      return C`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `;
    }
  };
(Mn.styles = [T, E, An]),
  jn([j({ type: Boolean })], Mn.prototype, `disabled`, void 0),
  jn([j()], Mn.prototype, `label`, void 0),
  jn([j()], Mn.prototype, `buttonLabel`, void 0),
  (Mn = jn([k(`wui-cta-button`)], Mn));
var Nn = w`
  :host {
    display: block;
    padding: 0 ${({ spacing: e }) => e[5]} ${({ spacing: e }) => e[5]};
  }
`,
  Pn = function (e, t, n, r) {
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
  Fn = class extends S {
    constructor() {
      super(...arguments), (this.wallet = void 0);
    }
    render() {
      if (!this.wallet) return (this.style.display = `none`), null;
      let {
          name: e,
          app_store: t,
          play_store: n,
          chrome_store: r,
          homepage: i,
        } = this.wallet,
        a = u.isMobile(),
        o = u.isIos(),
        s = u.isAndroid(),
        c = [t, n, i, r].filter(Boolean).length > 1;
      return c && !a
        ? C`
        <wui-cta-button
          label=${`Don't have ${e}?`}
          buttonLabel="Get"
          @click=${() => d.push(`Downloads`, { wallet: this.wallet })}
        ></wui-cta-button>
      `
        : !c && i
        ? C`
        <wui-cta-button
          label=${`Don't have ${e}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `
        : t && o
        ? C`
        <wui-cta-button
          label=${`Don't have ${e}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `
        : n && s
        ? C`
        <wui-cta-button
          label=${`Don't have ${e}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `
        : ((this.style.display = `none`), null);
    }
    onAppStore() {
      this.wallet?.app_store && u.openHref(this.wallet.app_store, `_blank`);
    }
    onPlayStore() {
      this.wallet?.play_store && u.openHref(this.wallet.play_store, `_blank`);
    }
    onHomePage() {
      this.wallet?.homepage && u.openHref(this.wallet.homepage, `_blank`);
    }
  };
(Fn.styles = [Nn]),
  Pn([j({ type: Object })], Fn.prototype, `wallet`, void 0),
  (Fn = Pn([k(`w3m-mobile-download-links`)], Fn));
var In = w`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({ spacing: e }) => e[1]} * -1);
    bottom: calc(${({ spacing: e }) => e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({ durations: e }) => e.lg};
    transition-timing-function: ${({ easings: e }) => e[`ease-out-power-2`]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({ spacing: e }) => e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({ easings: e }) => e[`ease-out-power-2`]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`,
  Ln = function (e, t, n, r) {
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
  $ = class extends S {
    constructor() {
      super(),
        (this.wallet = d.state.data?.wallet),
        (this.connector = d.state.data?.connector),
        (this.timeout = void 0),
        (this.secondaryBtnIcon = `refresh`),
        (this.onConnect = void 0),
        (this.onRender = void 0),
        (this.onAutoConnect = void 0),
        (this.isWalletConnect = !0),
        (this.unsubscribe = []),
        (this.imageSrc =
          i.getConnectorImage(this.connector) ?? i.getWalletImage(this.wallet)),
        (this.name = this.wallet?.name ?? this.connector?.name ?? `Wallet`),
        (this.isRetrying = !1),
        (this.uri = p.state.wcUri),
        (this.error = p.state.wcError),
        (this.ready = !1),
        (this.showRetry = !1),
        (this.label = void 0),
        (this.secondaryBtnLabel = `Try again`),
        (this.secondaryLabel = `Accept connection request in the wallet`),
        (this.isLoading = !1),
        (this.isMobile = !1),
        (this.onRetry = void 0),
        this.unsubscribe.push(
          p.subscribeKey(`wcUri`, (e) => {
            (this.uri = e),
              this.isRetrying &&
                this.onRetry &&
                ((this.isRetrying = !1), this.onConnect?.());
          }),
          p.subscribeKey(`wcError`, (e) => (this.error = e))
        ),
        (u.isTelegram() || u.isSafari()) &&
          u.isIos() &&
          p.state.wcUri &&
          this.onConnect?.();
    }
    firstUpdated() {
      this.onAutoConnect?.(), (this.showRetry = !this.onAutoConnect);
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e()),
        p.setWcError(!1),
        clearTimeout(this.timeout);
    }
    render() {
      this.onRender?.(), this.onShowRetry();
      let e = this.error
          ? `Connection can be declined if a previous request is still active`
          : this.secondaryLabel,
        t = ``;
      return (
        this.label
          ? (t = this.label)
          : ((t = `Continue in ${this.name}`),
            this.error && (t = `Connection declined`)),
        C`
      <wui-flex
        data-error=${D(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${[`10`, `5`, `5`, `5`]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${D(
            this.imageSrc
          )}></wui-wallet-image>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${[`2`, `0`, `0`, `0`]}
        >
          <wui-text align="center" variant="lg-medium" color=${
            this.error ? `error` : `primary`
          }>
            ${t}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${e}</wui-text>
        </wui-flex>

        ${
          this.secondaryBtnLabel
            ? C`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying || this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `
            : null
        }
      </wui-flex>

      ${
        this.isWalletConnect
          ? C`
              <wui-flex .padding=${[
                `0`,
                `5`,
                `5`,
                `5`,
              ]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `
          : null
      }

      <w3m-mobile-download-links .wallet=${
        this.wallet
      }></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `
      );
    }
    onShowRetry() {
      this.error &&
        !this.showRetry &&
        ((this.showRetry = !0),
        this.shadowRoot
          ?.querySelector(`wui-button`)
          ?.animate([{ opacity: 0 }, { opacity: 1 }], {
            fill: `forwards`,
            easing: `ease`,
          }));
    }
    onTryAgain() {
      p.setWcError(!1),
        this.onRetry
          ? ((this.isRetrying = !0), this.onRetry?.())
          : this.onConnect?.();
    }
    loaderTemplate() {
      let e = se.state.themeVariables[`--w3m-border-radius-master`],
        t = e ? parseInt(e.replace(`px`, ``), 10) : 4;
      return C`<wui-loading-thumbnail radius=${t * 9}></wui-loading-thumbnail>`;
    }
    onCopyUri() {
      try {
        this.uri && (u.copyToClopboard(this.uri), f.showSuccess(`Link copied`));
      } catch {
        f.showError(`Failed to copy`);
      }
    }
  };
($.styles = In),
  Ln([O()], $.prototype, `isRetrying`, void 0),
  Ln([O()], $.prototype, `uri`, void 0),
  Ln([O()], $.prototype, `error`, void 0),
  Ln([O()], $.prototype, `ready`, void 0),
  Ln([O()], $.prototype, `showRetry`, void 0),
  Ln([O()], $.prototype, `label`, void 0),
  Ln([O()], $.prototype, `secondaryBtnLabel`, void 0),
  Ln([O()], $.prototype, `secondaryLabel`, void 0),
  Ln([O()], $.prototype, `isLoading`, void 0),
  Ln([j({ type: Boolean })], $.prototype, `isMobile`, void 0),
  Ln([j()], $.prototype, `onRetry`, void 0);
var Rn = function (e, t, n, r) {
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
  zn = class extends $ {
    constructor() {
      if (
        (super(),
        (this.externalViewUnsubscribe = []),
        (this.connectionsByNamespace = p.getConnections(this.connector?.chain)),
        (this.hasMultipleConnections = this.connectionsByNamespace.length > 0),
        (this.remoteFeatures = o.state.remoteFeatures),
        (this.currentActiveConnectorId =
          _.state.activeConnectorIds[this.connector?.chain]),
        !this.connector)
      )
        throw Error(`w3m-connecting-view: No connector provided`);
      let e = this.connector?.chain;
      this.isAlreadyConnected(this.connector) &&
        ((this.secondaryBtnLabel = void 0),
        (this.label = `This account is already linked, change your account in ${this.connector.name}`),
        (this.secondaryLabel = `To link a new account, open ${this.connector.name} and switch to the account you want to link`)),
        v.sendEvent({
          type: `track`,
          event: `SELECT_WALLET`,
          properties: {
            name: this.connector.name ?? `Unknown`,
            platform: `browser`,
            displayIndex: this.wallet?.display_index,
            walletRank: this.wallet?.order,
            view: d.state.view,
          },
        }),
        (this.onConnect = this.onConnectProxy.bind(this)),
        (this.onAutoConnect = this.onConnectProxy.bind(this)),
        (this.isWalletConnect = !1),
        this.externalViewUnsubscribe.push(
          _.subscribeKey(`activeConnectorIds`, (t) => {
            let n = t[e],
              r = this.remoteFeatures?.multiWallet,
              { redirectView: i } = d.state.data ?? {};
            n !== this.currentActiveConnectorId &&
              (this.hasMultipleConnections && r
                ? (d.replace(`ProfileWallets`),
                  f.showSuccess(`New Wallet Added`))
                : i
                ? d.replace(i)
                : g.close());
          }),
          p.subscribeKey(`connections`, this.onConnectionsChange.bind(this))
        );
    }
    disconnectedCallback() {
      this.externalViewUnsubscribe.forEach((e) => e());
    }
    async onConnectProxy() {
      try {
        if (((this.error = !1), this.connector)) {
          if (this.isAlreadyConnected(this.connector)) return;
          ((this.connector.id !== h.CONNECTOR_ID.COINBASE_SDK &&
            this.connector.id !== h.CONNECTOR_ID.BASE_ACCOUNT) ||
            !this.error) &&
            (await p.connectExternal(this.connector, this.connector.chain));
        }
      } catch (e) {
        e instanceof s &&
        e.originalName === te.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST
          ? v.sendEvent({
              type: `track`,
              event: `USER_REJECTED`,
              properties: { message: e.message },
            })
          : v.sendEvent({
              type: `track`,
              event: `CONNECT_ERROR`,
              properties: { message: e?.message ?? `Unknown` },
            }),
          (this.error = !0);
      }
    }
    onConnectionsChange(e) {
      if (
        this.connector?.chain &&
        e.get(this.connector.chain) &&
        this.isAlreadyConnected(this.connector)
      ) {
        let t = e.get(this.connector.chain) ?? [],
          n = this.remoteFeatures?.multiWallet;
        if (t.length === 0) d.replace(`Connect`);
        else {
          let e = ne
              .getConnectionsByConnectorId(
                this.connectionsByNamespace,
                this.connector.id
              )
              .flatMap((e) => e.accounts),
            r = ne
              .getConnectionsByConnectorId(t, this.connector.id)
              .flatMap((e) => e.accounts);
          r.length === 0
            ? this.hasMultipleConnections && n
              ? (d.replace(`ProfileWallets`), f.showSuccess(`Wallet deleted`))
              : g.close()
            : !e.every((e) =>
                r.some((t) => b.isLowerCaseMatch(e.address, t.address))
              ) &&
              n &&
              d.replace(`ProfileWallets`);
        }
      }
    }
    isAlreadyConnected(e) {
      return (
        !!e &&
        this.connectionsByNamespace.some((t) =>
          b.isLowerCaseMatch(t.connectorId, e.id)
        )
      );
    }
  };
zn = Rn([k(`w3m-connecting-external-view`)], zn);
var Bn = x`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`,
  Vn = function (e, t, n, r) {
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
  Hn = class extends S {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.activeConnector = _.state.activeConnector),
        this.unsubscribe.push(
          _.subscribeKey(`activeConnector`, (e) => (this.activeConnector = e))
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      return C`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`3`, `5`, `5`, `5`]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${D(i.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${[`0`, `3`, `0`, `3`]}
        >
          <wui-text variant="lg-medium" color="primary">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${[`2`, `0`, `2`, `0`]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `;
    }
    networksTemplate() {
      return this.activeConnector?.connectors?.map((e, t) =>
        e.name
          ? C`
            <w3m-list-wallet
              displayIndex=${t}
              imageSrc=${D(i.getChainImage(e.chain))}
              name=${h.CHAIN_NAME_MAP[e.chain]}
              @click=${() => this.onConnector(e)}
              size="sm"
              data-testid="wui-list-chain-${e.chain}"
              rdnsId=${e.explorerWallet?.rdns}
            ></w3m-list-wallet>
          `
          : null
      );
    }
    onConnector(e) {
      let t = this.activeConnector?.connectors?.find(
          (t) => t.chain === e.chain
        ),
        n = d.state.data?.redirectView;
      if (!t) {
        f.showError(`Failed to find connector`);
        return;
      }
      t.id === `walletConnect`
        ? u.isMobile()
          ? d.push(`AllWallets`)
          : d.push(`ConnectingWalletConnect`, { redirectView: n })
        : d.push(`ConnectingExternal`, {
            connector: t,
            redirectView: n,
            wallet: this.activeConnector?.explorerWallet,
          });
    }
  };
(Hn.styles = Bn),
  Vn([O()], Hn.prototype, `activeConnector`, void 0),
  (Hn = Vn([k(`w3m-connecting-multi-chain-view`)], Hn));
var Un = function (e, t, n, r) {
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
  Wn = class extends S {
    constructor() {
      super(...arguments),
        (this.platformTabs = []),
        (this.unsubscribe = []),
        (this.platforms = []),
        (this.onSelectPlatfrom = void 0);
    }
    disconnectCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      let e = this.generateTabs();
      return C`
      <wui-flex justifyContent="center" .padding=${[`0`, `0`, `4`, `0`]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(
        this
      )}></wui-tabs>
      </wui-flex>
    `;
    }
    generateTabs() {
      let e = this.platforms.map((e) =>
        e === `browser`
          ? { label: `Browser`, icon: `extension`, platform: `browser` }
          : e === `mobile`
          ? { label: `Mobile`, icon: `mobile`, platform: `mobile` }
          : e === `qrcode`
          ? { label: `Mobile`, icon: `mobile`, platform: `qrcode` }
          : e === `web`
          ? { label: `Webapp`, icon: `browser`, platform: `web` }
          : e === `desktop`
          ? { label: `Desktop`, icon: `desktop`, platform: `desktop` }
          : { label: `Browser`, icon: `extension`, platform: `unsupported` }
      );
      return (this.platformTabs = e.map(({ platform: e }) => e)), e;
    }
    onTabChange(e) {
      let t = this.platformTabs[e];
      t && this.onSelectPlatfrom?.(t);
    }
  };
Un([j({ type: Array })], Wn.prototype, `platforms`, void 0),
  Un([j()], Wn.prototype, `onSelectPlatfrom`, void 0),
  (Wn = Un([k(`w3m-connecting-header`)], Wn));
var Gn = function (e, t, n, r) {
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
  Kn = class extends $ {
    constructor() {
      if ((super(), !this.wallet))
        throw Error(`w3m-connecting-wc-browser: No wallet provided`);
      (this.onConnect = this.onConnectProxy.bind(this)),
        (this.onAutoConnect = this.onConnectProxy.bind(this)),
        v.sendEvent({
          type: `track`,
          event: `SELECT_WALLET`,
          properties: {
            name: this.wallet.name,
            platform: `browser`,
            displayIndex: this.wallet?.display_index,
            walletRank: this.wallet.order,
            view: d.state.view,
          },
        });
    }
    async onConnectProxy() {
      try {
        this.error = !1;
        let { connectors: t } = _.state,
          n = t.find(
            (e) =>
              (e.type === `ANNOUNCED` && e.info?.rdns === this.wallet?.rdns) ||
              e.type === `INJECTED` ||
              e.name === this.wallet?.name
          );
        if (n) await p.connectExternal(n, n.chain);
        else throw Error(`w3m-connecting-wc-browser: No connector found`);
        (!o.state.siwx || (await e.isAuthenticated())) && g.close();
      } catch (e) {
        e instanceof s &&
        e.originalName === te.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST
          ? v.sendEvent({
              type: `track`,
              event: `USER_REJECTED`,
              properties: { message: e.message },
            })
          : v.sendEvent({
              type: `track`,
              event: `CONNECT_ERROR`,
              properties: { message: e?.message ?? `Unknown` },
            }),
          (this.error = !0);
      }
    }
  };
Kn = Gn([k(`w3m-connecting-wc-browser`)], Kn);
var qn = function (e, t, n, r) {
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
  Jn = class extends $ {
    constructor() {
      if ((super(), !this.wallet))
        throw Error(`w3m-connecting-wc-desktop: No wallet provided`);
      (this.onConnect = this.onConnectProxy.bind(this)),
        (this.onRender = this.onRenderProxy.bind(this)),
        v.sendEvent({
          type: `track`,
          event: `SELECT_WALLET`,
          properties: {
            name: this.wallet.name,
            platform: `desktop`,
            displayIndex: this.wallet?.display_index,
            walletRank: this.wallet.order,
            view: d.state.view,
          },
        });
    }
    onRenderProxy() {
      !this.ready && this.uri && ((this.ready = !0), this.onConnect?.());
    }
    onConnectProxy() {
      if (this.wallet?.desktop_link && this.uri)
        try {
          this.error = !1;
          let { desktop_link: e, name: t } = this.wallet,
            { redirect: n, href: r } = u.formatNativeUrl(e, this.uri);
          p.setWcLinking({ name: t, href: r }),
            p.setRecentWallet(this.wallet),
            u.openHref(n, `_blank`);
        } catch {
          this.error = !0;
        }
    }
  };
Jn = qn([k(`w3m-connecting-wc-desktop`)], Jn);
var Yn = function (e, t, n, r) {
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
  Xn = class extends $ {
    constructor() {
      if (
        (super(),
        (this.btnLabelTimeout = void 0),
        (this.redirectDeeplink = void 0),
        (this.redirectUniversalLink = void 0),
        (this.target = void 0),
        (this.preferUniversalLinks = o.state.experimental_preferUniversalLinks),
        (this.isLoading = !0),
        (this.onConnect = () => {
          ne.onConnectMobile(this.wallet);
        }),
        !this.wallet)
      )
        throw Error(`w3m-connecting-wc-mobile: No wallet provided`);
      (this.secondaryBtnLabel = `Open`),
        (this.secondaryLabel = l.CONNECT_LABELS.MOBILE),
        (this.secondaryBtnIcon = `externalLink`),
        this.onHandleURI(),
        this.unsubscribe.push(
          p.subscribeKey(`wcUri`, () => {
            this.onHandleURI();
          })
        ),
        v.sendEvent({
          type: `track`,
          event: `SELECT_WALLET`,
          properties: {
            name: this.wallet.name,
            platform: `mobile`,
            displayIndex: this.wallet?.display_index,
            walletRank: this.wallet.order,
            view: d.state.view,
          },
        });
    }
    disconnectedCallback() {
      super.disconnectedCallback(), clearTimeout(this.btnLabelTimeout);
    }
    onHandleURI() {
      (this.isLoading = !this.uri),
        !this.ready && this.uri && ((this.ready = !0), this.onConnect?.());
    }
    onTryAgain() {
      p.setWcError(!1), this.onConnect?.();
    }
  };
Yn([O()], Xn.prototype, `redirectDeeplink`, void 0),
  Yn([O()], Xn.prototype, `redirectUniversalLink`, void 0),
  Yn([O()], Xn.prototype, `target`, void 0),
  Yn([O()], Xn.prototype, `preferUniversalLinks`, void 0),
  Yn([O()], Xn.prototype, `isLoading`, void 0),
  (Xn = Yn([k(`w3m-connecting-wc-mobile`)], Xn));
var Zn = w`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({ borderRadius: e }) => e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({ durations: e }) => e.xl};
    animation-timing-function: ${({ easings: e }) => e[`ease-out-power-2`]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,
  Qn = function (e, t, n, r) {
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
  $n = class extends $ {
    constructor() {
      super(), (this.basic = !1);
    }
    firstUpdated() {
      this.basic ||
        v.sendEvent({
          type: `track`,
          event: `SELECT_WALLET`,
          properties: {
            name: this.wallet?.name ?? `WalletConnect`,
            platform: `qrcode`,
            displayIndex: this.wallet?.display_index,
            walletRank: this.wallet?.order,
            view: d.state.view,
          },
        });
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.unsubscribe?.forEach((e) => e());
    }
    render() {
      return (
        this.onRenderProxy(),
        C`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`0`, `5`, `5`, `5`]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${
        this.wallet
      }></w3m-mobile-download-links>
    `
      );
    }
    onRenderProxy() {
      !this.ready && this.uri && (this.ready = !0);
    }
    qrCodeTemplate() {
      if (!this.uri || !this.ready) return null;
      let e = this.wallet ? this.wallet.name : void 0;
      p.setWcLinking(void 0), p.setRecentWallet(this.wallet);
      let t =
        se.state.themeVariables[`--apkt-qr-color`] ??
        se.state.themeVariables[`--w3m-qr-color`];
      return C` <wui-qr-code
      theme=${se.state.themeMode}
      uri=${this.uri}
      imageSrc=${D(i.getWalletImage(this.wallet))}
      color=${D(t)}
      alt=${D(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`;
    }
    copyTemplate() {
      let e = !this.uri || !this.ready;
      return C`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`;
    }
  };
($n.styles = Zn),
  Qn([j({ type: Boolean })], $n.prototype, `basic`, void 0),
  ($n = Qn([k(`w3m-connecting-wc-qrcode`)], $n));
var er = function (e, t, n, r) {
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
  tr = class extends S {
    constructor() {
      if ((super(), (this.wallet = d.state.data?.wallet), !this.wallet))
        throw Error(`w3m-connecting-wc-unsupported: No wallet provided`);
      v.sendEvent({
        type: `track`,
        event: `SELECT_WALLET`,
        properties: {
          name: this.wallet.name,
          platform: `browser`,
          displayIndex: this.wallet?.display_index,
          walletRank: this.wallet?.order,
          view: d.state.view,
        },
      });
    }
    render() {
      return C`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`10`, `5`, `5`, `5`]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${D(i.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${
        this.wallet
      }></w3m-mobile-download-links>
    `;
    }
  };
tr = er([k(`w3m-connecting-wc-unsupported`)], tr);
var nr = function (e, t, n, r) {
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
  rr = class extends $ {
    constructor() {
      if ((super(), (this.isLoading = !0), !this.wallet))
        throw Error(`w3m-connecting-wc-web: No wallet provided`);
      (this.onConnect = this.onConnectProxy.bind(this)),
        (this.secondaryBtnLabel = `Open`),
        (this.secondaryLabel = l.CONNECT_LABELS.MOBILE),
        (this.secondaryBtnIcon = `externalLink`),
        this.updateLoadingState(),
        this.unsubscribe.push(
          p.subscribeKey(`wcUri`, () => {
            this.updateLoadingState();
          })
        ),
        v.sendEvent({
          type: `track`,
          event: `SELECT_WALLET`,
          properties: {
            name: this.wallet.name,
            platform: `web`,
            displayIndex: this.wallet?.display_index,
            walletRank: this.wallet?.order,
            view: d.state.view,
          },
        });
    }
    updateLoadingState() {
      this.isLoading = !this.uri;
    }
    onConnectProxy() {
      if (this.wallet?.webapp_link && this.uri)
        try {
          this.error = !1;
          let { webapp_link: e, name: t } = this.wallet,
            { redirect: n, href: r } = u.formatUniversalUrl(e, this.uri);
          p.setWcLinking({ name: t, href: r }),
            p.setRecentWallet(this.wallet),
            u.openHref(n, `_blank`);
        } catch {
          this.error = !0;
        }
    }
  };
nr([O()], rr.prototype, `isLoading`, void 0),
  (rr = nr([k(`w3m-connecting-wc-web`)], rr));
var ir = w`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`,
  ar = function (e, t, n, r) {
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
  or = class extends S {
    constructor() {
      super(),
        (this.wallet = d.state.data?.wallet),
        (this.unsubscribe = []),
        (this.platform = void 0),
        (this.platforms = []),
        (this.isSiwxEnabled = !!o.state.siwx),
        (this.remoteFeatures = o.state.remoteFeatures),
        (this.displayBranding = !0),
        (this.basic = !1),
        this.determinePlatforms(),
        this.initializeConnection(),
        this.unsubscribe.push(
          o.subscribeKey(`remoteFeatures`, (e) => (this.remoteFeatures = e))
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      return (
        o.state.enableMobileFullScreen &&
          this.setAttribute(`data-mobile-fullscreen`, `true`),
        C`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `
      );
    }
    reownBrandingTemplate() {
      return !this.remoteFeatures?.reownBranding || !this.displayBranding
        ? null
        : C`<wui-ux-by-reown></wui-ux-by-reown>`;
    }
    async initializeConnection(e = !1) {
      if (!(this.platform === `browser` || (o.state.manualWCControl && !e)))
        try {
          let { wcPairingExpiry: t, status: n } = p.state,
            { redirectView: r } = d.state.data ?? {};
          if (
            e ||
            o.state.enableEmbedded ||
            u.isPairingExpired(t) ||
            n === `connecting`
          ) {
            let e = p.getConnections(m.state.activeChain),
              t = this.remoteFeatures?.multiWallet,
              n = e.length > 0;
            await p.connectWalletConnect({ cache: `never` }),
              this.isSiwxEnabled ||
                (n && t
                  ? (d.replace(`ProfileWallets`),
                    f.showSuccess(`New Wallet Added`))
                  : r
                  ? d.replace(r)
                  : g.close());
          }
        } catch (e) {
          if (
            e instanceof Error &&
            e.message.includes(
              `An error occurred when attempting to switch chain`
            ) &&
            !o.state.enableNetworkSwitch &&
            m.state.activeChain
          ) {
            m.setActiveCaipNetwork(
              me.getUnsupportedNetwork(
                `${m.state.activeChain}:${m.state.activeCaipNetwork?.id}`
              )
            ),
              m.showUnsupportedChainUI();
            return;
          }
          e instanceof s &&
          e.originalName === te.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST
            ? v.sendEvent({
                type: `track`,
                event: `USER_REJECTED`,
                properties: { message: e.message },
              })
            : v.sendEvent({
                type: `track`,
                event: `CONNECT_ERROR`,
                properties: { message: e?.message ?? `Unknown` },
              }),
            p.setWcError(!0),
            f.showError(e.message ?? `Connection error`),
            p.resetWcConnection(),
            d.goBack();
        }
    }
    determinePlatforms() {
      if (!this.wallet) {
        this.platforms.push(`qrcode`), (this.platform = `qrcode`);
        return;
      }
      if (this.platform) return;
      let {
          mobile_link: e,
          desktop_link: t,
          webapp_link: n,
          injected: r,
          rdns: i,
        } = this.wallet,
        a = r?.map(({ injected_id: e }) => e).filter(Boolean),
        s = [...(i ? [i] : a ?? [])],
        c = !o.state.isUniversalProvider && s.length,
        l = e,
        d = n,
        te = p.checkInstalled(s),
        ne = c && te,
        re = t && !u.isMobile();
      ne && !m.state.noAdapters && this.platforms.push(`browser`),
        l && this.platforms.push(u.isMobile() ? `mobile` : `qrcode`),
        d && this.platforms.push(`web`),
        re && this.platforms.push(`desktop`);
      let f = ee.isCustomDeeplinkWallet(this.wallet.id, m.state.activeChain);
      !ne &&
        c &&
        !m.state.noAdapters &&
        !f &&
        this.platforms.push(`unsupported`),
        (this.platform = this.platforms[0]);
    }
    platformTemplate() {
      switch (this.platform) {
        case `browser`:
          return C`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;
        case `web`:
          return C`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;
        case `desktop`:
          return C`
          <w3m-connecting-wc-desktop .onRetry=${() =>
            this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;
        case `mobile`:
          return C`
          <w3m-connecting-wc-mobile isMobile .onRetry=${() =>
            this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;
        case `qrcode`:
          return C`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;
        default:
          return C`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`;
      }
    }
    headerTemplate() {
      return this.platforms.length > 1
        ? C`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `
        : null;
    }
    async onSelectPlatform(e) {
      let t = this.shadowRoot?.querySelector(`div`);
      t &&
        (await t.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 200,
          fill: `forwards`,
          easing: `ease`,
        }).finished,
        (this.platform = e),
        t.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 200,
          fill: `forwards`,
          easing: `ease`,
        }));
    }
  };
(or.styles = ir),
  ar([O()], or.prototype, `platform`, void 0),
  ar([O()], or.prototype, `platforms`, void 0),
  ar([O()], or.prototype, `isSiwxEnabled`, void 0),
  ar([O()], or.prototype, `remoteFeatures`, void 0),
  ar([j({ type: Boolean })], or.prototype, `displayBranding`, void 0),
  ar([j({ type: Boolean })], or.prototype, `basic`, void 0),
  (or = ar([k(`w3m-connecting-wc-view`)], or));
var sr = function (e, t, n, r) {
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
  cr = class extends S {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.isMobile = u.isMobile()),
        (this.remoteFeatures = o.state.remoteFeatures),
        this.unsubscribe.push(
          o.subscribeKey(`remoteFeatures`, (e) => (this.remoteFeatures = e))
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      if (this.isMobile) {
        let { featured: e, recommended: t } = n.state,
          { customWallets: r } = o.state,
          i = a.getRecentWallets(),
          s = e.length || t.length || r?.length || i.length;
        return C`<wui-flex flexDirection="column" gap="2" .margin=${[
          `1`,
          `3`,
          `3`,
          `3`,
        ]}>
        ${s ? C`<w3m-connector-list></w3m-connector-list>` : null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`;
      }
      return C`<wui-flex flexDirection="column" .padding=${[
        `0`,
        `0`,
        `4`,
        `0`,
      ]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${[`0`, `3`, `0`, `3`]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `;
    }
    reownBrandingTemplate() {
      return this.remoteFeatures?.reownBranding
        ? C` <wui-flex flexDirection="column" .padding=${[`1`, `0`, `1`, `0`]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`
        : null;
    }
  };
sr([O()], cr.prototype, `isMobile`, void 0),
  sr([O()], cr.prototype, `remoteFeatures`, void 0),
  (cr = sr([k(`w3m-connecting-wc-basic-view`)], cr));
var lr = x`
  .continue-button-container {
    width: 100%;
  }
`,
  ur = function (e, t, n, r) {
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
  dr = class extends S {
    constructor() {
      super(...arguments), (this.loading = !1);
    }
    render() {
      return C`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${[`0`, `0`, `4`, `0`]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${() => {
            u.openHref(ce.URLS.FAQ, `_blank`);
          }}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `;
    }
    onboardingTemplate() {
      return C` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${[`0`, `6`, `0`, `6`]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box icon="id" size="xl" iconSize="xxl" color="default"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="lg-medium" color="primary">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`;
    }
    buttonsTemplate() {
      return C`<wui-flex
      .padding=${[`0`, `8`, `0`, `8`]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`;
    }
    handleContinue() {
      d.push(`RegisterAccountName`),
        v.sendEvent({
          type: `track`,
          event: `OPEN_ENS_FLOW`,
          properties: {
            isSmartAccount:
              re(m.state.activeChain) === t.ACCOUNT_TYPES.SMART_ACCOUNT,
          },
        });
    }
  };
(dr.styles = lr),
  ur([O()], dr.prototype, `loading`, void 0),
  (dr = ur([k(`w3m-choose-account-name-view`)], dr));
var fr = function (e, t, n, r) {
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
  pr = class extends S {
    constructor() {
      super(...arguments), (this.wallet = d.state.data?.wallet);
    }
    render() {
      if (!this.wallet) throw Error(`w3m-downloads-view`);
      return C`
      <wui-flex gap="2" flexDirection="column" .padding=${[`3`, `3`, `4`, `3`]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `;
    }
    chromeTemplate() {
      return this.wallet?.chrome_store
        ? C`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`
        : null;
    }
    iosTemplate() {
      return this.wallet?.app_store
        ? C`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`
        : null;
    }
    androidTemplate() {
      return this.wallet?.play_store
        ? C`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`
        : null;
    }
    homepageTemplate() {
      return this.wallet?.homepage
        ? C`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `
        : null;
    }
    openStore(e) {
      e.href &&
        this.wallet &&
        (v.sendEvent({
          type: `track`,
          event: `GET_WALLET`,
          properties: {
            name: this.wallet.name,
            walletRank: this.wallet.order,
            explorerId: this.wallet.id,
            type: e.type,
          },
        }),
        u.openHref(e.href, `_blank`));
    }
    onChromeStore() {
      this.wallet?.chrome_store &&
        this.openStore({
          href: this.wallet.chrome_store,
          type: `chrome_store`,
        });
    }
    onAppStore() {
      this.wallet?.app_store &&
        this.openStore({ href: this.wallet.app_store, type: `app_store` });
    }
    onPlayStore() {
      this.wallet?.play_store &&
        this.openStore({ href: this.wallet.play_store, type: `play_store` });
    }
    onHomePage() {
      this.wallet?.homepage &&
        this.openStore({ href: this.wallet.homepage, type: `homepage` });
    }
  };
pr = fr([k(`w3m-downloads-view`)], pr);
var mr = function (e, t, n, r) {
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
  hr = `https://walletguide.walletconnect.network`,
  gr = class extends S {
    render() {
      return C`
      <wui-flex flexDirection="column" .padding=${[`0`, `3`, `3`, `3`]} gap="2">
        ${this.recommendedWalletsTemplate()}
        <w3m-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          size="sm"
          @click=${() => {
            u.openHref(`https://walletguide.walletconnect.network/`, `_blank`);
          }}
        ></w3m-list-wallet>
      </wui-flex>
    `;
    }
    recommendedWalletsTemplate() {
      let { recommended: e, featured: t } = n.state,
        { customWallets: r } = o.state;
      return [...t, ...(r ?? []), ...e].slice(0, 4).map(
        (e, t) => C`
        <w3m-list-wallet
          displayIndex=${t}
          name=${e.name ?? `Unknown`}
          tagVariant="accent"
          size="sm"
          imageSrc=${D(i.getWalletImage(e))}
          @click=${() => {
            this.onWalletClick(e);
          }}
        ></w3m-list-wallet>
      `
      );
    }
    onWalletClick(e) {
      v.sendEvent({
        type: `track`,
        event: `GET_WALLET`,
        properties: {
          name: e.name,
          walletRank: void 0,
          explorerId: e.id,
          type: `homepage`,
        },
      }),
        u.openHref(e.homepage ?? hr, `_blank`);
    }
  };
gr = mr([k(`w3m-get-wallet-view`)], gr);
var _r = function (e, t, n, r) {
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
  vr = class extends S {
    constructor() {
      super(...arguments), (this.data = []);
    }
    render() {
      return C`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        ${this.data.map(
          (e) => C`
            <wui-flex flexDirection="column" alignItems="center" gap="5">
              <wui-flex flexDirection="row" justifyContent="center" gap="1">
                ${e.images.map(
                  (e) => C`<wui-visual size="sm" name=${e}></wui-visual>`
                )}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="1">
              <wui-text variant="md-regular" color="primary" align="center">${
                e.title
              }</wui-text>
              <wui-text variant="sm-regular" color="secondary" align="center"
                >${e.text}</wui-text
              >
            </wui-flex>
          `
        )}
      </wui-flex>
    `;
    }
  };
_r([j({ type: Array })], vr.prototype, `data`, void 0),
  (vr = _r([k(`w3m-help-widget`)], vr));
var yr = function (e, t, n, r) {
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
  br = [
    {
      images: [`login`, `profile`, `lock`],
      title: `One login for all of web3`,
      text: `Log in to any app by connecting your wallet. Say goodbye to countless passwords!`,
    },
    {
      images: [`defi`, `nft`, `eth`],
      title: `A home for your digital assets`,
      text: `A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.`,
    },
    {
      images: [`browser`, `noun`, `dao`],
      title: `Your gateway to a new web`,
      text: `With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.`,
    },
  ],
  xr = class extends S {
    render() {
      return C`
      <wui-flex
        flexDirection="column"
        .padding=${[`6`, `5`, `5`, `5`]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${br}></w3m-help-widget>
        <wui-button variant="accent-primary" size="md" @click=${this.onGetWallet.bind(
          this
        )}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `;
    }
    onGetWallet() {
      v.sendEvent({ type: `track`, event: `CLICK_GET_WALLET_HELP` }),
        d.push(`GetWallet`);
    }
  };
xr = yr([k(`w3m-what-is-a-wallet-view`)], xr);
var Sr = w`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({ durations: e }) => e.lg}
      ${({ easings: e }) => e[`ease-out-power-2`]};
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`,
  Cr = function (e, t, n, r) {
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
  wr = class extends S {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.checked = fe.state.isLegalCheckboxChecked),
        this.unsubscribe.push(
          fe.subscribeKey(`isLegalCheckboxChecked`, (e) => {
            this.checked = e;
          })
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      let { termsConditionsUrl: e, privacyPolicyUrl: t } = o.state,
        n = o.state.features?.legalCheckbox,
        r = !!(e || t) && !!n,
        i = r && !this.checked,
        a = i ? -1 : void 0;
      return C`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${r ? [`0`, `3`, `3`, `3`] : `3`}
        gap="2"
        class=${D(i ? `disabled` : void 0)}
      >
        <w3m-wallet-login-list tabIdx=${D(a)}></w3m-wallet-login-list>
      </wui-flex>
    `;
    }
  };
(wr.styles = Sr),
  Cr([O()], wr.prototype, `checked`, void 0),
  (wr = Cr([k(`w3m-connect-wallets-view`)], wr));
var Tr = w`
  :host {
    display: block;
    width: 120px;
    height: 120px;
  }

  svg {
    width: 120px;
    height: 120px;
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: ${(e) => e.colors.accent100};
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,
  Er = function (e, t, n, r) {
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
  Dr = class extends S {
    render() {
      return C`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `;
    }
  };
(Dr.styles = [T, Tr]), (Dr = Er([k(`wui-loading-hexagon`)], Dr));
var Or = x`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,
  kr = function (e, t, n, r) {
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
  Ar = class extends S {
    constructor() {
      super(),
        (this.network = d.state.data?.network),
        (this.unsubscribe = []),
        (this.showRetry = !1),
        (this.error = !1);
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    firstUpdated() {
      this.onSwitchNetwork();
    }
    render() {
      if (!this.network)
        throw Error(`w3m-network-switch-view: No network provided`);
      this.onShowRetry();
      let e = this.getLabel(),
        t = this.getSubLabel();
      return C`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${[`10`, `5`, `10`, `5`]}
        gap="7"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${D(i.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error ? null : C`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="h6-regular" color="primary">${e}</wui-text>
          <wui-text align="center" variant="md-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent-primary"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `;
    }
    getSubLabel() {
      let e = _.getConnectorId(m.state.activeChain);
      return _.getAuthConnector() && e === h.CONNECTOR_ID.AUTH
        ? ``
        : this.error
        ? `Switch can be declined if chain is not supported by a wallet or previous request is still active`
        : `Accept connection request in your wallet`;
    }
    getLabel() {
      let e = _.getConnectorId(m.state.activeChain);
      return _.getAuthConnector() && e === h.CONNECTOR_ID.AUTH
        ? `Switching to ${this.network?.name ?? `Unknown`} network...`
        : this.error
        ? `Switch declined`
        : `Approve in wallet`;
    }
    onShowRetry() {
      this.error &&
        !this.showRetry &&
        ((this.showRetry = !0),
        this.shadowRoot
          ?.querySelector(`wui-button`)
          ?.animate([{ opacity: 0 }, { opacity: 1 }], {
            fill: `forwards`,
            easing: `ease`,
          }));
    }
    async onSwitchNetwork() {
      try {
        (this.error = !1),
          m.state.activeChain !== this.network?.chainNamespace &&
            m.setIsSwitchingNamespace(!0),
          this.network &&
            (await m.switchActiveNetwork(this.network),
            (await e.isAuthenticated()) && d.goBack());
      } catch {
        this.error = !0;
      }
    }
  };
(Ar.styles = Or),
  kr([O()], Ar.prototype, `showRetry`, void 0),
  kr([O()], Ar.prototype, `error`, void 0),
  (Ar = kr([k(`w3m-network-switch-view`)], Ar));
var jr = w`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ spacing: e }) => e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({ borderRadius: e }) => e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,
  Mr = function (e, t, n, r) {
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
  Nr = class extends S {
    constructor() {
      super(...arguments),
        (this.imageSrc = void 0),
        (this.name = `Ethereum`),
        (this.disabled = !1);
    }
    render() {
      return C`
      <button ?disabled=${this.disabled} tabindex=${D(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          ${this.imageTemplate()}
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `;
    }
    imageTemplate() {
      return this.imageSrc
        ? C`<wui-image ?boxed=${!0} src=${this.imageSrc}></wui-image>`
        : C`<wui-image
      ?boxed=${!0}
      icon="networkPlaceholder"
      size="lg"
      iconColor="default"
    ></wui-image>`;
    }
  };
(Nr.styles = [T, E, jr]),
  Mr([j()], Nr.prototype, `imageSrc`, void 0),
  Mr([j()], Nr.prototype, `name`, void 0),
  Mr([j()], Nr.prototype, `tabIdx`, void 0),
  Mr([j({ type: Boolean })], Nr.prototype, `disabled`, void 0),
  (Nr = Mr([k(`wui-list-network`)], Nr));
var Pr = x`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`,
  Fr = function (e, t, n, r) {
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
  Ir = class extends S {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.network = m.state.activeCaipNetwork),
        (this.requestedCaipNetworks = m.getCaipNetworks()),
        (this.search = ``),
        (this.onDebouncedSearch = u.debounce((e) => {
          this.search = e;
        }, 100)),
        this.unsubscribe.push(
          r.subscribeNetworkImages(() => this.requestUpdate()),
          m.subscribeKey(`activeCaipNetwork`, (e) => (this.network = e)),
          m.subscribe(() => {
            this.requestedCaipNetworks = m.getAllRequestedCaipNetworks();
          })
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      return C`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${[`0`, `3`, `3`, `3`]}
        flexDirection="column"
        gap="2"
      >
        ${this.networksTemplate()}
      </wui-flex>
    `;
    }
    templateSearchInput() {
      return C`
      <wui-flex gap="2" .padding=${[`0`, `3`, `3`, `3`]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `;
    }
    onInputChange(e) {
      this.onDebouncedSearch(e.detail);
    }
    networksTemplate() {
      let e = m.getAllApprovedCaipNetworkIds(),
        t = u.sortRequestedNetworks(e, this.requestedCaipNetworks);
      return (
        (this.filteredNetworks = this.search
          ? t?.filter((e) =>
              e?.name?.toLowerCase().includes(this.search.toLowerCase())
            )
          : t),
        this.filteredNetworks?.map(
          (e) => C`
        <wui-list-network
          .selected=${this.network?.id === e.id}
          imageSrc=${D(i.getNetworkImage(e))}
          type="network"
          name=${e.name ?? e.id}
          @click=${() => this.onSwitchNetwork(e)}
          .disabled=${m.isCaipNetworkDisabled(e)}
          data-testid=${`w3m-network-switch-${e.name ?? e.id}`}
        ></wui-list-network>
      `
        )
      );
    }
    onSwitchNetwork(e) {
      ie.onSwitchNetwork({ network: e });
    }
  };
(Ir.styles = Pr),
  Fr([O()], Ir.prototype, `network`, void 0),
  Fr([O()], Ir.prototype, `requestedCaipNetworks`, void 0),
  Fr([O()], Ir.prototype, `filteredNetworks`, void 0),
  Fr([O()], Ir.prototype, `search`, void 0),
  (Ir = Fr([k(`w3m-networks-view`)], Ir));
var Lr = w`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    border-radius: calc(
      ${({ borderRadius: e }) => e[1]} * 9 - ${({ borderRadius: e }) => e[3]}
    );
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(
      ${({ borderRadius: e }) => e[1]} * 9 - ${({ borderRadius: e }) => e[3]}
    );
    box-shadow: inset 0 0 0 1px ${({ tokens: e }) => e.core.glass010};
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({ spacing: e }) => e[1]} * -1);
    bottom: calc(${({ spacing: e }) => e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({ durations: e }) => e.lg} ${({ easings: e }) =>
    e[`ease-out-power-2`]},
      transform ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e[`ease-out-power-2`]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({ spacing: e }) => e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({ easings: e }) => e[`ease-out-power-2`]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({ spacing: e }) => e[`01`]} ${({ spacing: e }) => e[2]};
  }

  .capitalize {
    text-transform: capitalize;
  }
`,
  Rr = function (e, t, n, r) {
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
  zr = { eip155: `eth`, solana: `solana`, bip122: `bitcoin`, polkadot: void 0 },
  Br = class extends S {
    constructor() {
      super(...arguments),
        (this.unsubscribe = []),
        (this.switchToChain = d.state.data?.switchToChain),
        (this.caipNetwork = d.state.data?.network),
        (this.activeChain = m.state.activeChain);
    }
    firstUpdated() {
      this.unsubscribe.push(
        m.subscribeKey(`activeChain`, (e) => (this.activeChain = e))
      );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      let e = this.switchToChain
        ? h.CHAIN_NAME_MAP[this.switchToChain]
        : `supported`;
      if (!this.switchToChain) return null;
      let t = h.CHAIN_NAME_MAP[this.switchToChain];
      return C`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`4`, `2`, `2`, `2`]}
        gap="4"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="2">
          <wui-visual
            size="md"
            name=${D(zr[this.switchToChain])}
          ></wui-visual>
          <wui-flex gap="2" flexDirection="column" alignItems="center">
            <wui-text
              data-testid=${`w3m-switch-active-chain-to-${t}`}
              variant="lg-regular"
              color="primary"
              align="center"
              >Switch to <span class="capitalize">${t}</span></wui-text
            >
            <wui-text variant="md-regular" color="secondary" align="center">
              Connected wallet doesn't support connecting to ${e} chain. You
              need to connect with a different wallet.
            </wui-text>
          </wui-flex>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `;
    }
    async switchActiveChain() {
      this.switchToChain &&
        (m.setIsSwitchingNamespace(!0),
        _.setFilterByNamespace(this.switchToChain),
        this.caipNetwork
          ? await m.switchActiveNetwork(this.caipNetwork)
          : m.setActiveNamespace(this.switchToChain),
        d.reset(`Connect`));
    }
  };
(Br.styles = Lr),
  Rr([j()], Br.prototype, `activeChain`, void 0),
  (Br = Rr([k(`w3m-switch-active-chain-view`)], Br));
var Vr = function (e, t, n, r) {
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
  Hr = [
    {
      images: [`network`, `layers`, `system`],
      title: `The system’s nuts and bolts`,
      text: `A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services.`,
    },
    {
      images: [`noun`, `defiAlt`, `dao`],
      title: `Designed for different uses`,
      text: `Each network is designed differently, and may therefore suit certain apps and experiences.`,
    },
  ],
  Ur = class extends S {
    render() {
      return C`
      <wui-flex
        flexDirection="column"
        .padding=${[`6`, `5`, `5`, `5`]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${Hr}></w3m-help-widget>
        <wui-button
          variant="accent-primary"
          size="md"
          @click=${() => {
            u.openHref(
              `https://ethereum.org/en/developers/docs/networks/`,
              `_blank`
            );
          }}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `;
    }
  };
Ur = Vr([k(`w3m-what-is-a-network-view`)], Ur);
var Wr = x`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,
  Gr = function (e, t, n, r) {
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
  Kr = class extends S {
    constructor() {
      super(),
        (this.swapUnsupportedChain = d.state.data?.swapUnsupportedChain),
        (this.unsubscribe = []),
        (this.disconnecting = !1),
        (this.remoteFeatures = o.state.remoteFeatures),
        this.unsubscribe.push(
          r.subscribeNetworkImages(() => this.requestUpdate()),
          o.subscribeKey(`remoteFeatures`, (e) => {
            this.remoteFeatures = e;
          })
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      return C`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${[`3`, `5`, `2`, `5`]}
          alignItems="center"
          gap="5"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="3" gap="2"> ${this.networksTemplate()} </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="3" gap="2">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="signOut"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="md-medium" color="secondary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
    }
    descriptionTemplate() {
      return this.swapUnsupportedChain
        ? C`
        <wui-text variant="sm-regular" color="secondary" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `
        : C`
      <wui-text variant="sm-regular" color="secondary" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `;
    }
    networksTemplate() {
      let e = m.getAllRequestedCaipNetworks(),
        t = m.getAllApprovedCaipNetworkIds(),
        n = u.sortRequestedNetworks(t, e);
      return (
        this.swapUnsupportedChain
          ? n.filter((e) => l.SWAP_SUPPORTED_NETWORKS.includes(e.caipNetworkId))
          : n
      ).map(
        (e) => C`
        <wui-list-network
          imageSrc=${D(i.getNetworkImage(e))}
          name=${e.name ?? `Unknown`}
          @click=${() => this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `
      );
    }
    async onDisconnect() {
      try {
        this.disconnecting = !0;
        let e = m.state.activeChain,
          t = p.getConnections(e).length > 0,
          n = e && _.state.activeConnectorIds[e],
          r = this.remoteFeatures?.multiWallet;
        await p.disconnect(r ? { id: n, namespace: e } : {}),
          t && r && (d.push(`ProfileWallets`), f.showSuccess(`Wallet deleted`));
      } catch {
        v.sendEvent({
          type: `track`,
          event: `DISCONNECT_ERROR`,
          properties: { message: `Failed to disconnect` },
        }),
          f.showError(`Failed to disconnect`);
      } finally {
        this.disconnecting = !1;
      }
    }
    async onSwitchNetwork(e) {
      let t = m.getActiveCaipAddress(),
        n = m.getAllApprovedCaipNetworkIds();
      m.getNetworkProp(`supportsAllNetworks`, e.chainNamespace);
      let r = d.state.data;
      t
        ? n?.includes(e.caipNetworkId)
          ? await m.switchActiveNetwork(e)
          : d.push(`SwitchNetwork`, { ...r, network: e })
        : t || (m.setActiveCaipNetwork(e), d.push(`Connect`));
    }
  };
(Kr.styles = Wr),
  Gr([O()], Kr.prototype, `disconnecting`, void 0),
  Gr([O()], Kr.prototype, `remoteFeatures`, void 0),
  (Kr = Gr([k(`w3m-unsupported-chain-view`)], Kr));
var qr = w`
  wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ spacing: e }) => e[2]};
    border-radius: ${({ borderRadius: e }) => e[4]};
    padding: ${({ spacing: e }) => e[3]};
  }

  /* -- Types --------------------------------------------------------- */
  wui-flex[data-type='info'] {
    color: ${({ tokens: e }) => e.theme.textSecondary};
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
  }

  wui-flex[data-type='success'] {
    color: ${({ tokens: e }) => e.core.textSuccess};
    background-color: ${({ tokens: e }) => e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] {
    color: ${({ tokens: e }) => e.core.textError};
    background-color: ${({ tokens: e }) => e.core.backgroundError};
  }

  wui-flex[data-type='warning'] {
    color: ${({ tokens: e }) => e.core.textWarning};
    background-color: ${({ tokens: e }) => e.core.backgroundWarning};
  }

  wui-flex[data-type='info'] wui-icon-box {
    background-color: ${({ tokens: e }) => e.theme.foregroundSecondary};
  }

  wui-flex[data-type='success'] wui-icon-box {
    background-color: ${({ tokens: e }) => e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] wui-icon-box {
    background-color: ${({ tokens: e }) => e.core.backgroundError};
  }

  wui-flex[data-type='warning'] wui-icon-box {
    background-color: ${({ tokens: e }) => e.core.backgroundWarning};
  }

  wui-text {
    flex: 1;
  }
`,
  Jr = function (e, t, n, r) {
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
  Yr = class extends S {
    constructor() {
      super(...arguments),
        (this.icon = `externalLink`),
        (this.text = ``),
        (this.type = `info`);
    }
    render() {
      return C`
      <wui-flex alignItems="center" data-type=${this.type}>
        <wui-icon-box size="sm" color="inherit" icon=${this.icon}></wui-icon-box>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
      </wui-flex>
    `;
    }
  };
(Yr.styles = [T, E, qr]),
  Jr([j()], Yr.prototype, `icon`, void 0),
  Jr([j()], Yr.prototype, `text`, void 0),
  Jr([j()], Yr.prototype, `type`, void 0),
  (Yr = Jr([k(`wui-banner`)], Yr));
var Xr = x`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,
  Zr = function (e, t, n, r) {
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
  Qr = class extends S {
    constructor() {
      super(), (this.unsubscribe = []);
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      return C` <wui-flex flexDirection="column" .padding=${[
        `2`,
        `3`,
        `3`,
        `3`,
      ]} gap="2">
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`;
    }
    networkTemplate() {
      let e = m.getAllRequestedCaipNetworks(),
        n = m.getAllApprovedCaipNetworkIds(),
        r = m.state.activeCaipNetwork,
        a = m.checkIfSmartAccountEnabled(),
        o = u.sortRequestedNetworks(n, e);
      if (a && re(r?.chainNamespace) === t.ACCOUNT_TYPES.SMART_ACCOUNT) {
        if (!r) return null;
        o = [r];
      }
      return o
        .filter((e) => e.chainNamespace === r?.chainNamespace)
        .map(
          (e) => C`
        <wui-list-network
          imageSrc=${D(i.getNetworkImage(e))}
          name=${e.name ?? `Unknown`}
          ?transparent=${!0}
        >
        </wui-list-network>
      `
        );
    }
  };
(Qr.styles = Xr), (Qr = Zr([k(`w3m-wallet-compatible-networks-view`)], Qr));
var $r = w`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    box-shadow: 0 0 0 8px ${({ tokens: e }) => e.theme.borderPrimary};
    border-radius: ${({ borderRadius: e }) => e[4]};
    overflow: hidden;
  }

  :host([data-border-radius-full='true']) {
    border-radius: 50px;
  }

  wui-icon {
    font-size: 48px;
  }
`,
  ei = function (e, t, n, r) {
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
  ti = class extends S {
    render() {
      return (
        (this.dataset.borderRadiusFull = this.borderRadiusFull
          ? `true`
          : `false`),
        C`${this.templateVisual()}`
      );
    }
    templateVisual() {
      return this.imageSrc
        ? C`<wui-image src=${this.imageSrc} alt=${this.alt ?? ``}></wui-image>`
        : C`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`;
    }
  };
(ti.styles = [T, $r]),
  ei([j()], ti.prototype, `imageSrc`, void 0),
  ei([j()], ti.prototype, `alt`, void 0),
  ei([j({ type: Boolean })], ti.prototype, `borderRadiusFull`, void 0),
  (ti = ei([k(`wui-visual-thumbnail`)], ti));
var ni = w`
  :host {
    display: flex;
    justify-content: center;
    gap: ${({ spacing: e }) => e[4]};
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`,
  ri = function (e, t, n, r) {
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
  ii = class extends S {
    constructor() {
      super(...arguments),
        (this.dappImageUrl = o.state.metadata?.icons),
        (this.walletImageUrl = m.getAccountData()?.connectedWalletInfo?.icon);
    }
    firstUpdated() {
      let e = this.shadowRoot?.querySelectorAll(`wui-visual-thumbnail`);
      e?.[0] && this.createAnimation(e[0], `translate(18px)`),
        e?.[1] && this.createAnimation(e[1], `translate(-18px)`);
    }
    render() {
      return C`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${
        this.walletImageUrl
      }></wui-visual-thumbnail>
    `;
    }
    createAnimation(e, t) {
      e.animate([{ transform: `translateX(0px)` }, { transform: t }], {
        duration: 1600,
        easing: `cubic-bezier(0.56, 0, 0.48, 1)`,
        direction: `alternate`,
        iterations: 1 / 0,
      });
    }
  };
(ii.styles = ni), (ii = ri([k(`w3m-siwx-sign-message-thumbnails`)], ii));
var ai = function (e, t, n, r) {
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
  oi = class extends S {
    constructor() {
      super(...arguments),
        (this.dappName = o.state.metadata?.name),
        (this.isCancelling = !1),
        (this.isSigning = !1);
    }
    render() {
      return C`
      <wui-flex justifyContent="center" .padding=${[`8`, `0`, `6`, `0`]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex .padding=${[
        `0`,
        `20`,
        `5`,
        `20`,
      ]} gap="3" justifyContent="space-between">
        <wui-text variant="lg-medium" align="center" color="primary"
          >${this.dappName ?? `Dapp`} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${[
        `0`,
        `10`,
        `4`,
        `10`,
      ]} gap="3" justifyContent="space-between">
        <wui-text variant="md-regular" align="center" color="secondary"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${[
        `4`,
        `5`,
        `5`,
        `5`,
      ]} gap="3" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-secondary"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling ? `Cancelling...` : `Cancel`}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-primary"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning ? `Signing...` : `Sign`}
        </wui-button>
      </wui-flex>
    `;
    }
    async onSign() {
      this.isSigning = !0;
      try {
        await e.requestSignMessage();
      } catch (e) {
        if (e instanceof Error && e.message.includes(`OTP is required`)) {
          f.showError({
            message: `Something went wrong. We need to verify your account again.`,
          }),
            d.replace(`DataCapture`);
          return;
        }
        throw e;
      } finally {
        this.isSigning = !1;
      }
    }
    async onCancel() {
      (this.isCancelling = !0),
        await e.cancelSignMessage().finally(() => (this.isCancelling = !1));
    }
  };
ai([O()], oi.prototype, `isCancelling`, void 0),
  ai([O()], oi.prototype, `isSigning`, void 0),
  (oi = ai([k(`w3m-siwx-sign-message-view`)], oi));
export {
  Ee as AppKitAccountButton,
  ke as AppKitButton,
  Ie as AppKitConnectButton,
  We as AppKitNetworkButton,
  Te as W3mAccountButton,
  Ze as W3mAccountSettingsView,
  Et as W3mAccountView,
  on as W3mAllWalletsView,
  Oe as W3mButton,
  dr as W3mChooseAccountNameView,
  Fe as W3mConnectButton,
  Q as W3mConnectView,
  wr as W3mConnectWalletsView,
  zn as W3mConnectingExternalView,
  Hn as W3mConnectingMultiChainView,
  cr as W3mConnectingWcBasicView,
  or as W3mConnectingWcView,
  pr as W3mDownloadsView,
  Se as W3mFooter,
  Ft as W3mFundWalletView,
  gr as W3mGetWalletView,
  Ue as W3mNetworkButton,
  Ar as W3mNetworkSwitchView,
  Ir as W3mNetworksView,
  q as W3mProfileWalletsView,
  Ce as W3mRouter,
  oi as W3mSIWXSignMessageView,
  Br as W3mSwitchActiveChainView,
  Kr as W3mUnsupportedChainView,
  Qr as W3mWalletCompatibleNetworksView,
  Ur as W3mWhatIsANetworkView,
  xr as W3mWhatIsAWalletView,
};
