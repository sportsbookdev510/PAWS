import {
  a as e,
  c as t,
  d as n,
  h as r,
  i,
  l as a,
  n as o,
  o as s,
  p as c,
  u as l,
} from "./schemas-CdEveidJ.js";
import { a as u, i as d, r as ee } from "./SIWXUtil-BXuB1PV6.js";
import {
  $ as te,
  B as f,
  F as p,
  I as ne,
  L as re,
  M as ie,
  P as m,
  R as ae,
  nt as oe,
  st as h,
  z as g,
} from "./ModalController-CZlcBei4.js";
var _ = l({ message: r() });
function v(e) {
  return t(g[e]);
}
var y = l({
  serializedMessage: r().optional(),
  accountAddress: r(),
  chainId: r(),
  notBefore: r().optional(),
  domain: r(),
  uri: r(),
  version: r(),
  nonce: r(),
  statement: r().optional(),
  resources: e(r()).optional(),
  requestId: r().optional(),
  issuedAt: r().optional(),
  expirationTime: r().optional(),
});
l({
  accessList: e(r()),
  blockHash: r().nullable(),
  blockNumber: r().nullable(),
  chainId: r().or(a()),
  from: r(),
  gas: r(),
  hash: r(),
  input: r().nullable(),
  maxFeePerGas: r(),
  maxPriorityFeePerGas: r(),
  nonce: r(),
  r: r(),
  s: r(),
  to: r(),
  transactionIndex: r().nullable(),
  type: r(),
  v: r(),
  value: r(),
});
var se = l({ chainId: r().or(a()), rpcUrl: n(r()) }),
  b = l({ email: r().email() }),
  x = l({ otp: r() }),
  S = l({
    uri: r(),
    preferredAccountType: n(r()),
    chainId: n(r().or(a())),
    siwxMessage: n(y),
    rpcUrl: n(r()),
  }),
  C = l({
    chainId: n(r().or(a())),
    preferredAccountType: n(r()),
    socialUri: n(r()),
    siwxMessage: n(y),
    rpcUrl: n(r()),
  }),
  w = l({
    provider: o([`google`, `github`, `apple`, `facebook`, `x`, `discord`]),
  }),
  T = l({ email: r().email() }),
  E = l({ otp: r() }),
  D = l({ otp: r() }),
  O = l({
    themeMode: n(o([`light`, `dark`])),
    themeVariables: n(c(r(), r().or(a()))),
    w3mThemeVariables: n(c(r(), r())),
  }),
  k = l({
    metadata: l({
      name: r(),
      description: r(),
      url: r(),
      icons: e(r()),
    }).optional(),
    sdkVersion: r().optional(),
    sdkType: r().optional(),
    projectId: r(),
  }),
  A = l({ type: r() }),
  j = l({ action: o([`VERIFY_DEVICE`, `VERIFY_OTP`, `CONNECT`]) }),
  M = l({ url: r() }),
  N = l({ userName: r() }),
  P = l({
    email: r().optional().nullable(),
    address: r(),
    chainId: r().or(a()),
    accounts: e(
      l({
        address: r(),
        type: o([f.ACCOUNT_TYPES.EOA, f.ACCOUNT_TYPES.SMART_ACCOUNT]),
      })
    ).optional(),
    userName: r().optional().nullable(),
    preferredAccountType: n(r()),
    signature: r().optional(),
    message: r().optional(),
    siwxMessage: n(y),
  }),
  F = l({ action: o([`VERIFY_PRIMARY_OTP`, `VERIFY_SECONDARY_OTP`]) }),
  I = l({
    email: r().email().optional().nullable(),
    address: r(),
    chainId: r().or(a()),
    smartAccountDeployed: n(s()),
    accounts: e(
      l({
        address: r(),
        type: o([f.ACCOUNT_TYPES.EOA, f.ACCOUNT_TYPES.SMART_ACCOUNT]),
      })
    ).optional(),
    preferredAccountType: n(r()),
    signature: r().optional(),
    message: r().optional(),
    siwxMessage: n(y),
  }),
  L = l({ uri: r() }),
  R = l({ isConnected: s() }),
  z = l({ chainId: r().or(a()) }),
  B = l({ chainId: r().or(a()) }),
  V = l({ newEmail: r().email() }),
  H = l({ smartAccountEnabledNetworks: e(a()) });
l({ address: r(), isDeployed: s() });
var U = l({ version: r().optional() }),
  W = l({ type: r(), address: r() }),
  G = i(),
  K = l({ method: t(`eth_accounts`) }),
  ce = l({ method: t(`eth_blockNumber`) }),
  le = l({ method: t(`eth_call`), params: e(i()) }),
  ue = l({ method: t(`eth_chainId`) }),
  de = l({ method: t(`eth_estimateGas`), params: e(i()) }),
  fe = l({ method: t(`eth_feeHistory`), params: e(i()) }),
  pe = l({ method: t(`eth_gasPrice`) }),
  me = l({ method: t(`eth_getAccount`), params: e(i()) }),
  he = l({ method: t(`eth_getBalance`), params: e(i()) }),
  ge = l({ method: t(`eth_getBlockByHash`), params: e(i()) }),
  _e = l({ method: t(`eth_getBlockByNumber`), params: e(i()) }),
  ve = l({ method: t(`eth_getBlockReceipts`), params: e(i()) }),
  ye = l({ method: t(`eth_getBlockTransactionCountByHash`), params: e(i()) }),
  be = l({ method: t(`eth_getBlockTransactionCountByNumber`), params: e(i()) }),
  xe = l({ method: t(`eth_getCode`), params: e(i()) }),
  Se = l({ method: t(`eth_getFilterChanges`), params: e(i()) }),
  Ce = l({ method: t(`eth_getFilterLogs`), params: e(i()) }),
  we = l({ method: t(`eth_getLogs`), params: e(i()) }),
  Te = l({ method: t(`eth_getProof`), params: e(i()) }),
  Ee = l({ method: t(`eth_getStorageAt`), params: e(i()) }),
  De = l({
    method: t(`eth_getTransactionByBlockHashAndIndex`),
    params: e(i()),
  }),
  Oe = l({
    method: t(`eth_getTransactionByBlockNumberAndIndex`),
    params: e(i()),
  }),
  ke = l({ method: t(`eth_getTransactionByHash`), params: e(i()) }),
  Ae = l({ method: t(`eth_getTransactionCount`), params: e(i()) }),
  je = l({ method: t(`eth_getTransactionReceipt`), params: e(i()) }),
  Me = l({ method: t(`eth_getUncleCountByBlockHash`), params: e(i()) }),
  Ne = l({ method: t(`eth_getUncleCountByBlockNumber`), params: e(i()) }),
  Pe = l({ method: t(`eth_maxPriorityFeePerGas`) }),
  Fe = l({ method: t(`eth_newBlockFilter`) }),
  Ie = l({ method: t(`eth_newFilter`), params: e(i()) }),
  Le = l({ method: t(`eth_newPendingTransactionFilter`) }),
  Re = l({ method: t(`eth_sendRawTransaction`), params: e(i()) }),
  ze = l({ method: t(`eth_syncing`), params: e(i()) }),
  Be = l({ method: t(`eth_uninstallFilter`), params: e(i()) }),
  q = l({ method: t(`personal_sign`), params: e(i()) }),
  Ve = l({ method: t(`eth_signTypedData_v4`), params: e(i()) }),
  He = l({ method: t(`eth_sendTransaction`), params: e(i()) }),
  Ue = l({
    method: t(`solana_signMessage`),
    params: l({ message: r(), pubkey: r() }),
  }),
  We = l({
    method: t(`solana_signTransaction`),
    params: l({ transaction: r() }),
  }),
  Ge = l({
    method: t(`solana_signAllTransactions`),
    params: l({ transactions: e(r()) }),
  }),
  Ke = l({
    method: t(`solana_signAndSendTransaction`),
    params: l({
      transaction: r(),
      options: l({
        skipPreflight: s().optional(),
        preflightCommitment: o([
          `processed`,
          `confirmed`,
          `finalized`,
          `recent`,
          `single`,
          `singleGossip`,
          `root`,
          `max`,
        ]).optional(),
        maxRetries: a().optional(),
        minContextSlot: a().optional(),
      }).optional(),
    }),
  }),
  J = l({
    method: t(`wallet_sendCalls`),
    params: e(
      l({
        chainId: r().or(a()).optional(),
        from: r().optional(),
        version: r().optional(),
        capabilities: i().optional(),
        calls: e(
          l({
            to: r().startsWith(`0x`),
            data: r().startsWith(`0x`).optional(),
            value: r().optional(),
          })
        ),
      })
    ),
  }),
  qe = l({ method: t(`wallet_getCallsStatus`), params: e(r()) }),
  Je = l({
    method: t(`wallet_getCapabilities`),
    params: e(r().or(a()).optional()).optional(),
  }),
  Ye = l({ method: t(`wallet_grantPermissions`), params: e(i()) }),
  Xe = l({ method: t(`wallet_revokePermissions`), params: i() }),
  Ze = l({ method: t(`wallet_getAssets`), params: i() }),
  Y = l({ token: r() }),
  X = l({ id: r().optional() }),
  Z = {
    appEvent: X.extend({ type: v(`APP_SWITCH_NETWORK`), payload: se })
      .or(X.extend({ type: v(`APP_CONNECT_EMAIL`), payload: b }))
      .or(X.extend({ type: v(`APP_CONNECT_DEVICE`) }))
      .or(X.extend({ type: v(`APP_CONNECT_OTP`), payload: x }))
      .or(X.extend({ type: v(`APP_CONNECT_SOCIAL`), payload: S }))
      .or(X.extend({ type: v(`APP_GET_FARCASTER_URI`) }))
      .or(X.extend({ type: v(`APP_CONNECT_FARCASTER`) }))
      .or(X.extend({ type: v(`APP_GET_USER`), payload: n(C) }))
      .or(X.extend({ type: v(`APP_GET_SOCIAL_REDIRECT_URI`), payload: w }))
      .or(X.extend({ type: v(`APP_SIGN_OUT`) }))
      .or(X.extend({ type: v(`APP_IS_CONNECTED`), payload: n(Y) }))
      .or(X.extend({ type: v(`APP_GET_CHAIN_ID`) }))
      .or(X.extend({ type: v(`APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS`) }))
      .or(X.extend({ type: v(`APP_INIT_SMART_ACCOUNT`) }))
      .or(X.extend({ type: v(`APP_SET_PREFERRED_ACCOUNT`), payload: A }))
      .or(
        X.extend({
          type: v(`APP_RPC_REQUEST`),
          payload: q
            .or(Ze)
            .or(K)
            .or(ce)
            .or(le)
            .or(ue)
            .or(de)
            .or(fe)
            .or(pe)
            .or(me)
            .or(he)
            .or(ge)
            .or(_e)
            .or(ve)
            .or(ye)
            .or(be)
            .or(xe)
            .or(Se)
            .or(Ce)
            .or(we)
            .or(Te)
            .or(Ee)
            .or(De)
            .or(Oe)
            .or(ke)
            .or(Ae)
            .or(je)
            .or(Me)
            .or(Ne)
            .or(Pe)
            .or(Fe)
            .or(Ie)
            .or(Le)
            .or(Re)
            .or(ze)
            .or(Be)
            .or(q)
            .or(Ve)
            .or(He)
            .or(Ue)
            .or(We)
            .or(Ge)
            .or(Ke)
            .or(qe)
            .or(J)
            .or(Je)
            .or(Ye)
            .or(Xe)
            .and(
              l({
                chainId: r().or(a()).optional(),
                chainNamespace: o([
                  `eip155`,
                  `solana`,
                  `polkadot`,
                  `bip122`,
                  `cosmos`,
                ]).optional(),
                rpcUrl: r().optional(),
              })
            ),
        })
      )
      .or(X.extend({ type: v(`APP_UPDATE_EMAIL`), payload: T }))
      .or(X.extend({ type: v(`APP_UPDATE_EMAIL_PRIMARY_OTP`), payload: E }))
      .or(X.extend({ type: v(`APP_UPDATE_EMAIL_SECONDARY_OTP`), payload: D }))
      .or(X.extend({ type: v(`APP_SYNC_THEME`), payload: O }))
      .or(X.extend({ type: v(`APP_SYNC_DAPP_DATA`), payload: k }))
      .or(X.extend({ type: v(`APP_RELOAD`) }))
      .or(X.extend({ type: v(`APP_RPC_ABORT`) })),
    frameEvent: X.extend({ type: v(`FRAME_SWITCH_NETWORK_ERROR`), payload: _ })
      .or(X.extend({ type: v(`FRAME_SWITCH_NETWORK_SUCCESS`), payload: B }))
      .or(X.extend({ type: v(`FRAME_CONNECT_EMAIL_SUCCESS`), payload: j }))
      .or(X.extend({ type: v(`FRAME_CONNECT_EMAIL_ERROR`), payload: _ }))
      .or(X.extend({ type: v(`FRAME_GET_FARCASTER_URI_SUCCESS`), payload: M }))
      .or(X.extend({ type: v(`FRAME_GET_FARCASTER_URI_ERROR`), payload: _ }))
      .or(X.extend({ type: v(`FRAME_CONNECT_FARCASTER_SUCCESS`), payload: N }))
      .or(X.extend({ type: v(`FRAME_CONNECT_FARCASTER_ERROR`), payload: _ }))
      .or(X.extend({ type: v(`FRAME_CONNECT_OTP_ERROR`), payload: _ }))
      .or(X.extend({ type: v(`FRAME_CONNECT_OTP_SUCCESS`) }))
      .or(X.extend({ type: v(`FRAME_CONNECT_DEVICE_ERROR`), payload: _ }))
      .or(X.extend({ type: v(`FRAME_CONNECT_DEVICE_SUCCESS`) }))
      .or(X.extend({ type: v(`FRAME_CONNECT_SOCIAL_SUCCESS`), payload: P }))
      .or(X.extend({ type: v(`FRAME_CONNECT_SOCIAL_ERROR`), payload: _ }))
      .or(X.extend({ type: v(`FRAME_GET_USER_ERROR`), payload: _ }))
      .or(X.extend({ type: v(`FRAME_GET_USER_SUCCESS`), payload: I }))
      .or(
        X.extend({ type: v(`FRAME_GET_SOCIAL_REDIRECT_URI_ERROR`), payload: _ })
      )
      .or(
        X.extend({
          type: v(`FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS`),
          payload: L,
        })
      )
      .or(X.extend({ type: v(`FRAME_SIGN_OUT_ERROR`), payload: _ }))
      .or(X.extend({ type: v(`FRAME_SIGN_OUT_SUCCESS`) }))
      .or(X.extend({ type: v(`FRAME_IS_CONNECTED_ERROR`), payload: _ }))
      .or(X.extend({ type: v(`FRAME_IS_CONNECTED_SUCCESS`), payload: R }))
      .or(X.extend({ type: v(`FRAME_GET_CHAIN_ID_ERROR`), payload: _ }))
      .or(X.extend({ type: v(`FRAME_GET_CHAIN_ID_SUCCESS`), payload: z }))
      .or(X.extend({ type: v(`FRAME_RPC_REQUEST_ERROR`), payload: _ }))
      .or(X.extend({ type: v(`FRAME_RPC_REQUEST_SUCCESS`), payload: G }))
      .or(X.extend({ type: v(`FRAME_SESSION_UPDATE`), payload: Y }))
      .or(X.extend({ type: v(`FRAME_UPDATE_EMAIL_ERROR`), payload: _ }))
      .or(X.extend({ type: v(`FRAME_UPDATE_EMAIL_SUCCESS`), payload: F }))
      .or(
        X.extend({
          type: v(`FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR`),
          payload: _,
        })
      )
      .or(X.extend({ type: v(`FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS`) }))
      .or(
        X.extend({
          type: v(`FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR`),
          payload: _,
        })
      )
      .or(
        X.extend({
          type: v(`FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS`),
          payload: V,
        })
      )
      .or(X.extend({ type: v(`FRAME_SYNC_THEME_ERROR`), payload: _ }))
      .or(X.extend({ type: v(`FRAME_SYNC_THEME_SUCCESS`) }))
      .or(X.extend({ type: v(`FRAME_SYNC_DAPP_DATA_ERROR`), payload: _ }))
      .or(X.extend({ type: v(`FRAME_SYNC_DAPP_DATA_SUCCESS`) }))
      .or(
        X.extend({
          type: v(`FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS`),
          payload: H,
        })
      )
      .or(
        X.extend({
          type: v(`FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR`),
          payload: _,
        })
      )
      .or(X.extend({ type: v(`FRAME_INIT_SMART_ACCOUNT_ERROR`), payload: _ }))
      .or(
        X.extend({ type: v(`FRAME_SET_PREFERRED_ACCOUNT_SUCCESS`), payload: W })
      )
      .or(
        X.extend({ type: v(`FRAME_SET_PREFERRED_ACCOUNT_ERROR`), payload: _ })
      )
      .or(X.extend({ type: v(`FRAME_READY`), payload: U }))
      .or(X.extend({ type: v(`FRAME_RELOAD_ERROR`), payload: _ }))
      .or(X.extend({ type: v(`FRAME_RELOAD_SUCCESS`) })),
  };
function Q(e, t = {}) {
  return typeof t?.type == `string` && t?.type?.includes(e);
}
function Qe({
  projectId: e,
  chainId: t,
  enableLogger: n,
  rpcUrl: r = h.BLOCKCHAIN_API_RPC_URL,
  enableCloudAuthAccount: i = !1,
}) {
  let a = new URL(re);
  a.searchParams.set(`projectId`, e),
    a.searchParams.set(`chainId`, String(t)),
    a.searchParams.set(`version`, ae),
    a.searchParams.set(`enableLogger`, String(n)),
    a.searchParams.set(`rpcUrl`, r);
  let o = p.get(`dapp_smart_account_version`);
  return (
    o &&
      (o === `v6` || o === `v7`) &&
      (console.warn(`>> AppKit - Forcing smart account version`, o),
      a.searchParams.set(`smartAccountVersion`, o)),
    i && a.searchParams.set(`enableCloudAuthAccount`, `true`),
    a.toString()
  );
}
var $e = class {
    constructor({
      projectId: e,
      isAppClient: t = !1,
      chainId: n = `eip155:1`,
      enableLogger: r = !0,
      enableCloudAuthAccount: i = !1,
      rpcUrl: a = h.BLOCKCHAIN_API_RPC_URL,
    }) {
      if (
        ((this.iframe = null),
        (this.iframeIsReady = !1),
        (this.initFrame = () => {
          let e = document.getElementById(`w3m-iframe`);
          this.iframe && !e && document.body.appendChild(this.iframe);
        }),
        (this.events = {
          registerFrameEventHandler: (e, t, n) => {
            function r({ data: n }) {
              if (!Q(g.FRAME_EVENT_KEY, n)) return;
              let i = Z.frameEvent.safeParse(n);
              if (!i.success) {
                console.warn(`W3mFrame: invalid frame event`, i.error.message);
                return;
              }
              i.data?.id === e &&
                (t(i.data), window.removeEventListener(`message`, r));
            }
            m.isClient &&
              (window.addEventListener(`message`, r),
              n.addEventListener(`abort`, () => {
                window.removeEventListener(`message`, r);
              }));
          },
          onFrameEvent: (e) => {
            m.isClient &&
              window.addEventListener(`message`, ({ data: t }) => {
                if (!Q(g.FRAME_EVENT_KEY, t)) return;
                let n = Z.frameEvent.safeParse(t);
                n.success
                  ? e(n.data)
                  : console.warn(
                      `W3mFrame: invalid frame event`,
                      n.error.message
                    );
              });
          },
          onAppEvent: (e) => {
            m.isClient &&
              window.addEventListener(`message`, ({ data: t }) => {
                if (!Q(g.APP_EVENT_KEY, t)) return;
                let n = Z.appEvent.safeParse(t);
                n.success ||
                  console.warn(`W3mFrame: invalid app event`, n.error.message),
                  e(t);
              });
          },
          postAppEvent: (e) => {
            if (m.isClient) {
              if (!this.iframe?.contentWindow)
                throw Error(`W3mFrame: iframe is not set`);
              this.iframe.contentWindow.postMessage(e, `*`);
            }
          },
          postFrameEvent: (e) => {
            if (m.isClient) {
              if (!parent) throw Error(`W3mFrame: parent is not set`);
              parent.postMessage(e, `*`);
            }
          },
        }),
        (this.projectId = e),
        (this.frameLoadPromise = new Promise((e, t) => {
          this.frameLoadPromiseResolver = { resolve: e, reject: t };
        })),
        (this.rpcUrl = a),
        t &&
          ((this.frameLoadPromise = new Promise((e, t) => {
            this.frameLoadPromiseResolver = { resolve: e, reject: t };
          })),
          m.isClient))
      ) {
        let t = document.createElement(`iframe`);
        (t.id = `w3m-iframe`),
          (t.src = Qe({
            projectId: e,
            chainId: n,
            enableLogger: r,
            rpcUrl: this.rpcUrl,
            enableCloudAuthAccount: i,
          })),
          (t.name = `w3m-secure-iframe`),
          (t.style.position = `fixed`),
          (t.style.zIndex = `999999`),
          (t.style.display = `none`),
          (t.style.border = `none`),
          (t.style.animationDelay = `0s, 50ms`),
          (t.style.borderBottomLeftRadius = `clamp(0px, var(--apkt-borderRadius-8), 44px)`),
          (t.style.borderBottomRightRadius = `clamp(0px, var(--apkt-borderRadius-8), 44px)`),
          (this.iframe = t),
          (this.iframe.onerror = () => {
            this.frameLoadPromiseResolver?.reject(
              `Unable to load email login dependency`
            );
          }),
          this.events.onFrameEvent((e) => {
            e.type === `@w3m-frame/READY` &&
              ((this.iframeIsReady = !0),
              this.frameLoadPromiseResolver?.resolve(void 0));
          });
      }
    }
    get networks() {
      let e =
        `eip155:1.eip155:5.eip155:11155111.eip155:10.eip155:420.eip155:42161.eip155:421613.eip155:137.eip155:80001.eip155:42220.eip155:1313161554.eip155:1313161555.eip155:56.eip155:97.eip155:43114.eip155:43113.eip155:324.eip155:280.eip155:100.eip155:8453.eip155:84531.eip155:84532.eip155:7777777.eip155:999.solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp.solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z.solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1`
          .split(`.`)
          .map((e) => ({
            [e]: {
              rpcUrl: `${this.rpcUrl}/v1/?chainId=${e}&projectId=${this.projectId}`,
              chainId: e,
            },
          }));
      return Object.assign({}, ...e);
    }
  },
  et = class {
    constructor(e) {
      let t = ee({ level: ne }),
        { logger: n, chunkLoggerController: r } = u({ opts: t });
      (this.logger = d(n, this.constructor.name)),
        (this.chunkLoggerController = r),
        typeof window < `u` &&
          this.chunkLoggerController?.downloadLogsBlobInBrowser &&
          (window.downloadAppKitLogsBlob ||
            (window.downloadAppKitLogsBlob = {}),
          (window.downloadAppKitLogsBlob.sdk = () => {
            this.chunkLoggerController?.downloadLogsBlobInBrowser &&
              this.chunkLoggerController.downloadLogsBlobInBrowser({
                projectId: e,
              });
          }));
    }
  };
function $(e) {
  if (typeof e == `bigint`) return `0x${e.toString(16)}`;
  if (Array.isArray(e)) return e.map($);
  if (typeof e == `object` && e) {
    let t = {};
    for (let [n, r] of Object.entries(e)) t[n] = $(r);
    return t;
  }
  return e;
}
var tt = class {
    constructor({
      projectId: e,
      chainId: t,
      enableLogger: n = !0,
      onTimeout: r,
      abortController: i,
      getActiveCaipNetwork: a,
      getCaipNetworks: o,
      enableCloudAuthAccount: s,
      metadata: c,
      sdkVersion: l,
      sdkType: u,
    }) {
      (this.openRpcRequests = new Map()),
        (this.isInitialized = !1),
        n && (this.w3mLogger = new et(e)),
        (this.abortController = i),
        (this.getActiveCaipNetwork = a),
        (this.getCaipNetworks = o);
      let d = this.getRpcUrl(t);
      (this.projectId = e),
        (this.sdkVersion = l),
        (this.sdkType = u),
        (this.metadata = c),
        (this.w3mFrame = new $e({
          projectId: e,
          isAppClient: !0,
          chainId: t,
          enableLogger: n,
          rpcUrl: d,
          enableCloudAuthAccount: s,
        })),
        (this.onTimeout = r),
        this.getLoginEmailUsed() && this.createFrame();
    }
    async createFrame() {
      this.w3mFrame.initFrame(),
        (this.initPromise = new Promise((e) => {
          this.w3mFrame.events.onFrameEvent((t) => {
            t.type === g.FRAME_READY &&
              setTimeout(() => {
                e();
              }, 500);
          });
        })),
        await this.initPromise,
        await this.syncDappData({
          metadata: this.metadata,
          projectId: this.projectId,
          sdkVersion: this.sdkVersion,
          sdkType: this.sdkType,
        }),
        await this.getSmartAccountEnabledNetworks(),
        (this.isInitialized = !0),
        (this.initPromise = void 0);
    }
    async init() {
      if (!this.isInitialized) {
        if (this.initPromise) {
          await this.initPromise;
          return;
        }
        await this.createFrame();
      }
    }
    getLoginEmailUsed() {
      return !!p.get(g.EMAIL_LOGIN_USED_KEY);
    }
    getEmail() {
      return p.get(g.EMAIL);
    }
    getUsername() {
      return p.get(g.SOCIAL_USERNAME);
    }
    async reload() {
      try {
        await this.appEvent({ type: g.APP_RELOAD });
      } catch (e) {
        throw (
          (this.w3mLogger?.logger.error({ error: e }, `Error reloading iframe`),
          e)
        );
      }
    }
    async connectEmail(e) {
      try {
        m.checkIfAllowedToTriggerEmail(), await this.init();
        let t = await this.appEvent({ type: g.APP_CONNECT_EMAIL, payload: e });
        return this.setNewLastEmailLoginTime(), t;
      } catch (e) {
        throw (
          (this.w3mLogger?.logger.error({ error: e }, `Error connecting email`),
          e)
        );
      }
    }
    async connectDevice() {
      try {
        return this.appEvent({ type: g.APP_CONNECT_DEVICE });
      } catch (e) {
        throw (
          (this.w3mLogger?.logger.error(
            { error: e },
            `Error connecting device`
          ),
          e)
        );
      }
    }
    async connectOtp(e) {
      try {
        return this.appEvent({ type: g.APP_CONNECT_OTP, payload: e });
      } catch (e) {
        throw (
          (this.w3mLogger?.logger.error({ error: e }, `Error connecting otp`),
          e)
        );
      }
    }
    async isConnected() {
      try {
        if (!this.getLoginEmailUsed()) return { isConnected: !1 };
        let e = await this.appEvent({ type: g.APP_IS_CONNECTED });
        return e?.isConnected || this.deleteAuthLoginCache(), e;
      } catch (e) {
        throw (
          (this.deleteAuthLoginCache(),
          this.w3mLogger?.logger.error(
            { error: e },
            `Error checking connection`
          ),
          e)
        );
      }
    }
    async getChainId() {
      try {
        let e = await this.appEvent({ type: g.APP_GET_CHAIN_ID });
        return this.setLastUsedChainId(e.chainId), e;
      } catch (e) {
        throw (
          (this.w3mLogger?.logger.error({ error: e }, `Error getting chain id`),
          e)
        );
      }
    }
    async getSocialRedirectUri(e) {
      try {
        return (
          await this.init(),
          this.appEvent({ type: g.APP_GET_SOCIAL_REDIRECT_URI, payload: e })
        );
      } catch (e) {
        throw (
          (this.w3mLogger?.logger.error(
            { error: e },
            `Error getting social redirect uri`
          ),
          e)
        );
      }
    }
    async updateEmail(e) {
      try {
        let t = await this.appEvent({ type: g.APP_UPDATE_EMAIL, payload: e });
        return this.setNewLastEmailLoginTime(), t;
      } catch (e) {
        throw (
          (this.w3mLogger?.logger.error({ error: e }, `Error updating email`),
          e)
        );
      }
    }
    async updateEmailPrimaryOtp(e) {
      try {
        return this.appEvent({
          type: g.APP_UPDATE_EMAIL_PRIMARY_OTP,
          payload: e,
        });
      } catch (e) {
        throw (
          (this.w3mLogger?.logger.error(
            { error: e },
            `Error updating email primary otp`
          ),
          e)
        );
      }
    }
    async updateEmailSecondaryOtp(e) {
      try {
        let t = await this.appEvent({
          type: g.APP_UPDATE_EMAIL_SECONDARY_OTP,
          payload: e,
        });
        return this.setLoginSuccess(t.newEmail), t;
      } catch (e) {
        throw (
          (this.w3mLogger?.logger.error(
            { error: e },
            `Error updating email secondary otp`
          ),
          e)
        );
      }
    }
    async syncTheme(e) {
      try {
        return this.appEvent({ type: g.APP_SYNC_THEME, payload: e });
      } catch (e) {
        throw (
          (this.w3mLogger?.logger.error({ error: e }, `Error syncing theme`), e)
        );
      }
    }
    async syncDappData(e) {
      try {
        return this.appEvent({ type: g.APP_SYNC_DAPP_DATA, payload: e });
      } catch (e) {
        throw (
          (this.w3mLogger?.logger.error(
            { error: e },
            `Error syncing dapp data`
          ),
          e)
        );
      }
    }
    async getSmartAccountEnabledNetworks() {
      try {
        let e = await this.appEvent({
          type: g.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS,
        });
        return (
          this.persistSmartAccountEnabledNetworks(
            e.smartAccountEnabledNetworks
          ),
          e
        );
      } catch (e) {
        throw (
          (this.persistSmartAccountEnabledNetworks([]),
          this.w3mLogger?.logger.error(
            { error: e },
            `Error getting smart account enabled networks`
          ),
          e)
        );
      }
    }
    async setPreferredAccount(e) {
      try {
        return this.appEvent({
          type: g.APP_SET_PREFERRED_ACCOUNT,
          payload: { type: e },
        });
      } catch (e) {
        throw (
          (this.w3mLogger?.logger.error(
            { error: e },
            `Error setting preferred account`
          ),
          e)
        );
      }
    }
    async connect(e) {
      if (e?.socialUri)
        try {
          await this.init();
          let t = this.getRpcUrl(e.chainId),
            n = await this.appEvent({
              type: g.APP_CONNECT_SOCIAL,
              payload: {
                uri: e.socialUri,
                preferredAccountType: e.preferredAccountType,
                chainId: e.chainId,
                siwxMessage: e.siwxMessage,
                rpcUrl: t,
              },
            });
          return (
            n.userName && this.setSocialLoginSuccess(n.userName),
            this.setLoginSuccess(n.email),
            this.setLastUsedChainId(n.chainId),
            (this.user = n),
            n
          );
        } catch (e) {
          throw (
            (this.w3mLogger?.logger.error(
              { error: e },
              `Error connecting social`
            ),
            e)
          );
        }
      try {
        let t = e?.chainId || this.getLastUsedChainId() || 1,
          n = await this.getUser({
            chainId: t,
            preferredAccountType: e?.preferredAccountType,
            siwxMessage: e?.siwxMessage,
            rpcUrl: this.getRpcUrl(t),
          });
        return (
          this.setLoginSuccess(n.email),
          this.setLastUsedChainId(n.chainId),
          (this.user = n),
          n
        );
      } catch (e) {
        throw (
          (this.w3mLogger?.logger.error({ error: e }, `Error connecting`), e)
        );
      }
    }
    async getUser(e) {
      try {
        await this.init();
        let t = e?.chainId || this.getLastUsedChainId() || 1,
          n = await this.appEvent({
            type: g.APP_GET_USER,
            payload: { ...e, chainId: t, rpcUrl: this.getRpcUrl(t) },
          });
        return (this.user = n), n;
      } catch (e) {
        throw (
          (this.w3mLogger?.logger.error({ error: e }, `Error connecting`), e)
        );
      }
    }
    async connectSocial({ uri: e, chainId: t, preferredAccountType: n }) {
      try {
        await this.init();
        let r = this.getRpcUrl(t),
          i = await this.appEvent({
            type: g.APP_CONNECT_SOCIAL,
            payload: { uri: e, chainId: t, rpcUrl: r, preferredAccountType: n },
          });
        return i.userName && this.setSocialLoginSuccess(i.userName), i;
      } catch (e) {
        throw (
          (this.w3mLogger?.logger.error(
            { error: e },
            `Error connecting social`
          ),
          e)
        );
      }
    }
    async getFarcasterUri() {
      try {
        return (
          await this.init(),
          await this.appEvent({ type: g.APP_GET_FARCASTER_URI })
        );
      } catch (e) {
        throw (
          (this.w3mLogger?.logger.error(
            { error: e },
            `Error getting farcaster uri`
          ),
          e)
        );
      }
    }
    async connectFarcaster() {
      try {
        let e = await this.appEvent({ type: g.APP_CONNECT_FARCASTER });
        return e.userName && this.setSocialLoginSuccess(e.userName), e;
      } catch (e) {
        throw (
          (this.w3mLogger?.logger.error(
            { error: e },
            `Error connecting farcaster`
          ),
          e)
        );
      }
    }
    async switchNetwork({ chainId: e }) {
      try {
        let t = this.getRpcUrl(e),
          n = await this.appEvent({
            type: g.APP_SWITCH_NETWORK,
            payload: { chainId: e, rpcUrl: t },
          });
        return this.setLastUsedChainId(n.chainId), n;
      } catch (e) {
        throw (
          (this.w3mLogger?.logger.error(
            { error: e },
            `Error switching network`
          ),
          e)
        );
      }
    }
    async disconnect() {
      try {
        return (
          this.deleteAuthLoginCache(),
          await new Promise(async (e) => {
            let t = setTimeout(() => {
              e();
            }, 3e3);
            await this.appEvent({ type: g.APP_SIGN_OUT }), clearTimeout(t), e();
          })
        );
      } catch (e) {
        throw (
          (this.w3mLogger?.logger.error({ error: e }, `Error disconnecting`), e)
        );
      }
    }
    async request(e) {
      let t = e;
      try {
        if (f.GET_CHAIN_ID === e.method) return this.getLastUsedChainId();
        let n = e.chainNamespace || `eip155`,
          r = this.getActiveCaipNetwork(n)?.id;
        (t.chainNamespace = n),
          (t.chainId = r),
          (t.rpcUrl = this.getRpcUrl(r)),
          this.rpcRequestHandler?.(e);
        let i = await this.appEvent({ type: g.APP_RPC_REQUEST, payload: $(t) });
        return this.rpcSuccessHandler?.(i, t), i;
      } catch (e) {
        throw (
          (this.rpcErrorHandler?.(e, t),
          this.w3mLogger?.logger.error({ error: e }, `Error requesting`),
          e)
        );
      }
    }
    onRpcRequest(e) {
      this.rpcRequestHandler = e;
    }
    onRpcSuccess(e) {
      this.rpcSuccessHandler = e;
    }
    onRpcError(e) {
      this.rpcErrorHandler = e;
    }
    onIsConnected(e) {
      this.w3mFrame.events.onFrameEvent((t) => {
        t.type === g.FRAME_IS_CONNECTED_SUCCESS && t.payload.isConnected && e();
      });
    }
    onNotConnected(e) {
      this.w3mFrame.events.onFrameEvent((t) => {
        t.type === g.FRAME_IS_CONNECTED_ERROR && e(),
          t.type === g.FRAME_IS_CONNECTED_SUCCESS &&
            !t.payload.isConnected &&
            e();
      });
    }
    onConnect(e) {
      this.w3mFrame.events.onFrameEvent((t) => {
        t.type === g.FRAME_GET_USER_SUCCESS && e(t.payload);
      });
    }
    onSocialConnected(e) {
      this.w3mFrame.events.onFrameEvent((t) => {
        t.type === g.FRAME_CONNECT_SOCIAL_SUCCESS && e(t.payload);
      });
    }
    async getCapabilities() {
      try {
        return (await this.request({ method: `wallet_getCapabilities` })) || {};
      } catch {
        return {};
      }
    }
    onSetPreferredAccount(e) {
      this.w3mFrame.events.onFrameEvent((t) => {
        t.type === g.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS
          ? e(t.payload)
          : t.type === g.FRAME_SET_PREFERRED_ACCOUNT_ERROR &&
            e({ type: f.ACCOUNT_TYPES.EOA });
      });
    }
    getAvailableChainIds() {
      return Object.keys(this.w3mFrame.networks);
    }
    async rejectRpcRequests() {
      try {
        await Promise.all(
          Array.from(this.openRpcRequests.values()).map(
            async ({ abortController: e, method: t }) => {
              f.SAFE_RPC_METHODS.includes(t) || e.abort(),
                await this.appEvent({ type: g.APP_RPC_ABORT });
            }
          )
        ),
          this.openRpcRequests.clear();
      } catch (e) {
        this.w3mLogger?.logger.error(
          { error: e },
          `Error aborting RPC request`
        );
      }
    }
    async appEvent(e) {
      let t, n;
      function r(e) {
        return e.replace(`@w3m-app/`, ``);
      }
      let i = [
          g.APP_SYNC_DAPP_DATA,
          g.APP_SYNC_THEME,
          g.APP_SET_PREFERRED_ACCOUNT,
        ],
        a = r(e.type);
      return (
        !this.w3mFrame.iframeIsReady &&
          !i.includes(e.type) &&
          (n = setTimeout(() => {
            this.onTimeout?.(`iframe_load_failed`),
              this.abortController.abort();
          }, 2e4)),
        await this.w3mFrame.frameLoadPromise,
        clearTimeout(n),
        [
          g.APP_CONNECT_EMAIL,
          g.APP_CONNECT_DEVICE,
          g.APP_CONNECT_OTP,
          g.APP_CONNECT_SOCIAL,
          g.APP_GET_SOCIAL_REDIRECT_URI,
        ]
          .map(r)
          .includes(a) &&
          (t = setTimeout(() => {
            this.onTimeout?.(`iframe_request_timeout`),
              this.abortController.abort();
          }, 12e4)),
        new Promise((r, i) => {
          let o = Math.random().toString(36).substring(7);
          this.w3mLogger?.logger.info?.(
            { event: e, id: o },
            `Sending app event`
          ),
            this.w3mFrame.events.postAppEvent({ ...e, id: o });
          let s = new AbortController();
          if (a === `RPC_REQUEST`) {
            let t = e;
            this.openRpcRequests.set(o, { ...t.payload, abortController: s });
          }
          s.signal.addEventListener(`abort`, () => {
            a === `RPC_REQUEST`
              ? i(Error(`Request was aborted`))
              : a !== `GET_FARCASTER_URI` && i(Error(`Something went wrong`));
          });
          let c = (e, s) => {
            e.id === o &&
              (s?.logger.info?.(
                { framEvent: e, id: o },
                `Received frame response`
              ),
              this.openRpcRequests.delete(e.id),
              e.type === `@w3m-frame/${a}_SUCCESS`
                ? (t && clearTimeout(t),
                  n && clearTimeout(n),
                  `payload` in e && r(e.payload),
                  r(void 0))
                : e.type === `@w3m-frame/${a}_ERROR` &&
                  (t && clearTimeout(t),
                  n && clearTimeout(n),
                  `payload` in e &&
                    i(Error(e.payload?.message || `An error occurred`)),
                  i(Error(`An error occurred`))));
          };
          this.w3mFrame.events.registerFrameEventHandler(
            o,
            (e) => c(e, this.w3mLogger),
            this.abortController.signal
          );
        })
      );
    }
    setNewLastEmailLoginTime() {
      p.set(g.LAST_EMAIL_LOGIN_TIME, Date.now().toString());
    }
    setSocialLoginSuccess(e) {
      p.set(g.SOCIAL_USERNAME, e);
    }
    setLoginSuccess(e) {
      e && p.set(g.EMAIL, e),
        p.set(g.EMAIL_LOGIN_USED_KEY, `true`),
        p.delete(g.LAST_EMAIL_LOGIN_TIME);
    }
    deleteAuthLoginCache() {
      p.delete(g.EMAIL_LOGIN_USED_KEY),
        p.delete(g.EMAIL),
        p.delete(g.LAST_USED_CHAIN_KEY),
        p.delete(g.SOCIAL_USERNAME);
    }
    setLastUsedChainId(e) {
      e && p.set(g.LAST_USED_CHAIN_KEY, String(e));
    }
    getLastUsedChainId() {
      let e = p.get(g.LAST_USED_CHAIN_KEY) ?? void 0,
        t = Number(e);
      return isNaN(t) ? e : t;
    }
    persistSmartAccountEnabledNetworks(e) {
      p.set(g.SMART_ACCOUNT_ENABLED_NETWORKS, e.join(`,`));
    }
    getRpcUrl(e) {
      let t = e === void 0 ? void 0 : `eip155`;
      typeof e == `string` &&
        (t = e.includes(`:`)
          ? oe.parseCaipNetworkId(e)?.chainNamespace
          : Number.isInteger(Number(e))
          ? `eip155`
          : `solana`);
      let n = this.getCaipNetworks(t);
      return (
        e
          ? n.find((t) => String(t.id) === String(e) || t.caipNetworkId === e)
          : n[0]
      )?.rpcUrls.default.http?.[0];
    }
  },
  nt = {
    EmbeddedWalletAbortController: new AbortController(),
    UniversalProviderErrors: {
      UNAUTHORIZED_DOMAIN_NOT_ALLOWED: {
        message: `Unauthorized: origin not allowed`,
        alertErrorKey: `ORIGIN_NOT_ALLOWED`,
      },
      JWT_VALIDATION_ERROR: {
        message: `JWT validation error: JWT Token is not yet valid`,
        alertErrorKey: `JWT_TOKEN_NOT_VALID`,
      },
      INVALID_KEY: {
        message: `Unauthorized: invalid key`,
        alertErrorKey: `INVALID_PROJECT_ID`,
      },
    },
    ALERT_ERRORS: {
      SWITCH_NETWORK_NOT_FOUND: {
        code: `APKT001`,
        displayMessage: `Network Not Found`,
        debugMessage:
          "The specified network is not recognized. Please ensure it is included in the `networks` array of your `createAppKit` configuration.",
      },
      ORIGIN_NOT_ALLOWED: {
        code: `APKT002`,
        displayMessage: `Invalid App Configuration`,
        debugMessage: () =>
          `The origin ${
            te() ? window.origin : `unknown`
          } is not in your allow list. Please update your allowed domains at https://dashboard.reown.com. [PID: ${
            ie.state.projectId
          }]`,
      },
      IFRAME_LOAD_FAILED: {
        code: `APKT003`,
        displayMessage: `Network Error: Wallet Load Failed`,
        debugMessage: () =>
          `Failed to load the embedded wallet. This may be due to network issues or server downtime. Please check your network connection and try again shortly. Contact support if the issue persists.`,
      },
      IFRAME_REQUEST_TIMEOUT: {
        code: `APKT004`,
        displayMessage: `Wallet Request Timeout`,
        debugMessage: () =>
          `The request to the embedded wallet timed out. Please check your network connection and try again shortly. Contact support if the issue persists.`,
      },
      UNVERIFIED_DOMAIN: {
        code: `APKT005`,
        displayMessage: `Unverified Domain`,
        debugMessage: () =>
          `Embedded wallet load failed. Ensure your domain is verified in https://dashboard.reown.com.`,
      },
      JWT_TOKEN_NOT_VALID: {
        code: `APKT006`,
        displayMessage: `Session Expired`,
        debugMessage: `Your session is invalid or expired. Please check your system’s date and time settings, then reconnect.`,
      },
      INVALID_PROJECT_ID: {
        code: `APKT007`,
        displayMessage: `Invalid Project ID`,
        debugMessage: `The specified project ID is invalid. Please visit https://dashboard.reown.com to obtain a valid project ID.`,
      },
      PROJECT_ID_NOT_CONFIGURED: {
        code: `APKT008`,
        displayMessage: `Project ID Missing`,
        debugMessage: `No project ID is configured. You can create and configure a project ID at https://dashboard.reown.com.`,
      },
      SERVER_ERROR_APP_CONFIGURATION: {
        code: `APKT009`,
        displayMessage: `Server Error`,
        debugMessage: (e) =>
          `Unable to fetch App Configuration. ${e}. Please check your network connection and try again shortly. Contact support if the issue persists.`,
      },
      RATE_LIMITED_APP_CONFIGURATION: {
        code: `APKT010`,
        displayMessage: `Rate Limited`,
        debugMessage: `You have been rate limited while retrieving App Configuration. Please wait a few minutes and try again. Contact support if the issue persists.`,
      },
    },
    ALERT_WARNINGS: {
      LOCAL_CONFIGURATION_IGNORED: {
        debugMessage: (e) => `[Reown Config Notice] ${e}`,
      },
      INACTIVE_NAMESPACE_NOT_CONNECTED: {
        code: `APKTW001`,
        displayMessage: `Inactive Namespace Not Connected`,
        debugMessage: (e, t) =>
          `An error occurred while connecting an inactive namespace ${e}: "${t}"`,
      },
      INVALID_EMAIL: {
        code: `APKTW002`,
        displayMessage: `Invalid Email Address`,
        debugMessage: `Please enter a valid email address`,
      },
    },
  };
export { tt as n, nt as t };
