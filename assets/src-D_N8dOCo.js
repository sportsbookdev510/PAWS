const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/exports-BUEiVG_S.js",
      "assets/rolldown-runtime-C_s2cVnS.js",
      "assets/react-Cn3k3YTV.js",
      "assets/viem-CnFKpqyY.js",
      "assets/createConnector-Bnfv1XXy.js",
    ])
) => i.map((i) => d[i]);
import { p as e } from "./react-Cn3k3YTV.js";
import {
  B as t,
  Ct as n,
  D as r,
  F as i,
  Ft as a,
  G as o,
  K as s,
  N as c,
  Nt as l,
  P as u,
  Rt as d,
  St as f,
  Ut as p,
  a as m,
  at as h,
  d as g,
  f as _,
  ht as v,
  it as y,
  k as ee,
  m as b,
  p as te,
  rt as x,
  s as ne,
  u as re,
  x as ie,
} from "./viem-CnFKpqyY.js";
import { t as ae } from "./SIWXUtil-BXuB1PV6.js";
import {
  a as oe,
  c as se,
  i as S,
  l as ce,
  n as C,
  o as le,
  r as ue,
  s as de,
  t as w,
  u as fe,
} from "./createConnector-Bnfv1XXy.js";
import { t as pe } from "./eventemitter3-COUZYguD.js";
import {
  D as me,
  H as T,
  K as he,
  M as E,
  V as D,
  et as ge,
  g as _e,
  ot as O,
  p as k,
  q as ve,
  r as A,
  rt as j,
  st as M,
  tt as ye,
  v as be,
} from "./ModalController-CZlcBei4.js";
import { t as N } from "./ErrorUtil-H8_l-xtM.js";
import {
  i as xe,
  n as Se,
  r as Ce,
  t as we,
} from "./W3MFrameProviderSingleton-B2wJzHqx.js";
import { t as P } from "./AlertController-jOqmXqOH.js";
import { t as F } from "./CaipNetworkUtil-BEGNk9mF.js";
import { t as I } from "./HelpersUtil-mCo6UpyW.js";
function L(e, t, n) {
  let r = e[t.name];
  if (typeof r == `function`) return r;
  let i = e[n];
  return typeof i == `function` ? i : (n) => t(e, n);
}
async function R(e, t) {
  let n;
  if (
    ((n =
      typeof t.connector == `function`
        ? e._internal.connectors.setup(t.connector)
        : t.connector),
    n.uid === e.state.current)
  )
    throw new le();
  try {
    e.setState((e) => ({ ...e, status: `connecting` })),
      n.emitter.emit(`message`, { type: `connecting` });
    let { connector: r, ...i } = t,
      a = await n.connect(i);
    return (
      n.emitter.off(`connect`, e._internal.events.connect),
      n.emitter.on(`change`, e._internal.events.change),
      n.emitter.on(`disconnect`, e._internal.events.disconnect),
      await e.storage?.setItem(`recentConnectorId`, n.id),
      e.setState((e) => ({
        ...e,
        connections: new Map(e.connections).set(n.uid, {
          accounts: i.withCapabilities
            ? a.accounts.map((e) => (typeof e == `object` ? e.address : e))
            : a.accounts,
          chainId: a.chainId,
          connector: n,
        }),
        current: n.uid,
        status: `connected`,
      })),
      {
        accounts: i.withCapabilities
          ? a.accounts.map((e) =>
              typeof e == `object` ? e : { address: e, capabilities: {} }
            )
          : a.accounts,
        chainId: a.chainId,
      }
    );
  } catch (t) {
    throw (
      (e.setState((e) => ({
        ...e,
        status: e.current ? `connected` : `disconnected`,
      })),
      t)
    );
  }
}
async function z(e, t = {}) {
  let { assertChainId: r = !0 } = t,
    i;
  if (t.connector) {
    let { connector: n } = t;
    if (e.state.status === `reconnecting` && !n.getAccounts && !n.getChainId)
      throw new ce({ connector: n });
    let [r, a] = await Promise.all([
      n.getAccounts().catch((e) => {
        if (t.account === null) return [];
        throw e;
      }),
      n.getChainId(),
    ]);
    i = { accounts: r, chainId: a, connector: n };
  } else i = e.state.connections.get(e.state.current);
  if (!i) throw new se();
  let a = t.chainId ?? i.chainId,
    o = await i.connector.getChainId();
  if (r && o !== a) throw new de({ connectionChainId: a, connectorChainId: o });
  let s = i.connector;
  if (s.getClient) return s.getClient({ chainId: a });
  let c = v(t.account ?? i.accounts[0]);
  if (
    (c && (c.address = n(c.address)),
    t.account &&
      !i.accounts.some((e) => e.toLowerCase() === c.address.toLowerCase()))
  )
    throw new oe({ address: c.address, connector: s });
  let l = e.chains.find((e) => e.id === a),
    u = await i.connector.getProvider({ chainId: a });
  return ee({
    account: c,
    chain: l,
    name: `Connector Client`,
    transport: (e) => m(u)({ ...e, retryCount: 0 }),
  });
}
async function Te(e, t = {}) {
  let n;
  if (t.connector) n = t.connector;
  else {
    let { connections: t, current: r } = e.state;
    n = t.get(r)?.connector;
  }
  let r = e.state.connections;
  n &&
    (await n.disconnect(),
    n.emitter.off(`change`, e._internal.events.change),
    n.emitter.off(`disconnect`, e._internal.events.disconnect),
    n.emitter.on(`connect`, e._internal.events.connect),
    r.delete(n.uid)),
    e.setState((e) => {
      if (r.size === 0)
        return {
          ...e,
          connections: new Map(),
          current: null,
          status: `disconnected`,
        };
      let t = r.values().next().value;
      return { ...e, connections: new Map(r), current: t.connector.uid };
    });
  {
    let t = e.state.current;
    if (!t) return;
    let n = e.state.connections.get(t)?.connector;
    if (!n) return;
    await e.storage?.setItem(`recentConnectorId`, n.id);
  }
}
async function Ee(e, t) {
  let { chainId: n, connector: r, ...i } = t,
    a;
  return (
    (a = t.account
      ? t.account
      : (
          await z(e, {
            account: t.account,
            assertChainId: !1,
            chainId: n,
            connector: r,
          })
        ).account),
    L(e.getClient({ chainId: n }), o, `estimateGas`)({ ...i, account: a })
  );
}
async function De(e, t) {
  let { address: n, blockNumber: i, blockTag: a, chainId: o } = t,
    s = e.getClient({ chainId: o }),
    c = await L(
      s,
      r,
      `getBalance`
    )(
      i === void 0
        ? { address: n, blockTag: a }
        : { address: n, blockNumber: i }
    ),
    l = e.chains.find((e) => e.id === o) ?? s.chain;
  return {
    decimals: l.nativeCurrency.decimals,
    symbol: l.nativeCurrency.symbol,
    value: c,
  };
}
function B(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == `object` && typeof t == `object`) {
    if (e.constructor !== t.constructor) return !1;
    let n, r;
    if (Array.isArray(e) && Array.isArray(t)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!B(e[r], t[r])) return !1;
      return !0;
    }
    if (
      typeof e.valueOf == `function` &&
      e.valueOf !== Object.prototype.valueOf
    )
      return e.valueOf() === t.valueOf();
    if (
      typeof e.toString == `function` &&
      e.toString !== Object.prototype.toString
    )
      return e.toString() === t.toString();
    let i = Object.keys(e);
    if (((n = i.length), n !== Object.keys(t).length)) return !1;
    for (r = n; r-- !== 0; ) if (!Object.hasOwn(t, i[r])) return !1;
    for (r = n; r-- !== 0; ) {
      let n = i[r];
      if (n && !B(e[n], t[n])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function V(e) {
  let t = e.state.current,
    n = e.state.connections.get(t),
    r = n?.accounts,
    i = r?.[0],
    a = e.chains.find((e) => e.id === n?.chainId),
    o = e.state.status;
  switch (o) {
    case `connected`:
      return {
        address: i,
        addresses: r,
        chain: a,
        chainId: n?.chainId,
        connector: n?.connector,
        isConnected: !0,
        isConnecting: !1,
        isDisconnected: !1,
        isReconnecting: !1,
        status: o,
      };
    case `reconnecting`:
      return {
        address: i,
        addresses: r,
        chain: a,
        chainId: n?.chainId,
        connector: n?.connector,
        isConnected: !!i,
        isConnecting: !1,
        isDisconnected: !1,
        isReconnecting: !0,
        status: o,
      };
    case `connecting`:
      return {
        address: i,
        addresses: r,
        chain: a,
        chainId: n?.chainId,
        connector: n?.connector,
        isConnected: !1,
        isConnecting: !0,
        isDisconnected: !1,
        isReconnecting: !1,
        status: o,
      };
    case `disconnected`:
      return {
        address: void 0,
        addresses: void 0,
        chain: void 0,
        chainId: void 0,
        connector: void 0,
        isConnected: !1,
        isConnecting: !1,
        isDisconnected: !0,
        isReconnecting: !1,
        status: o,
      };
  }
}
var H = [];
function U(e) {
  let t = [...e.state.connections.values()];
  return e.state.status === `reconnecting` || B(H, t) ? H : ((H = t), t);
}
async function Oe(e, t) {
  let { account: n, chainId: r, connector: i, ...a } = t,
    o;
  return (
    (o =
      typeof n == `object` && n?.type === `local`
        ? e.getClient({ chainId: r })
        : await z(e, {
            account: n ?? void 0,
            assertChainId: !1,
            chainId: r,
            connector: i,
          })),
    L(o, s, `prepareTransactionRequest`)({ ...a, ...(n ? { account: n } : {}) })
  );
}
var W = !1;
async function G(e, t = {}) {
  if (W) return [];
  (W = !0),
    e.setState((e) => ({
      ...e,
      status: e.current ? `reconnecting` : `connecting`,
    }));
  let n = [];
  if (t.connectors?.length)
    for (let r of t.connectors) {
      let t;
      (t = typeof r == `function` ? e._internal.connectors.setup(r) : r),
        n.push(t);
    }
  else n.push(...e.connectors);
  let r;
  try {
    r = await e.storage?.getItem(`recentConnectorId`);
  } catch {}
  let i = {};
  for (let [, t] of e.state.connections) i[t.connector.id] = 1;
  r && (i[r] = 0);
  let a =
      Object.keys(i).length > 0
        ? [...n].sort((e, t) => (i[e.id] ?? 10) - (i[t.id] ?? 10))
        : n,
    o = !1,
    s = [],
    c = [];
  for (let t of a) {
    let n = await t.getProvider().catch(() => void 0);
    if (!n || c.some((e) => e === n) || !(await t.isAuthorized())) continue;
    let r = await t.connect({ isReconnecting: !0 }).catch(() => null);
    r &&
      (t.emitter.off(`connect`, e._internal.events.connect),
      t.emitter.on(`change`, e._internal.events.change),
      t.emitter.on(`disconnect`, e._internal.events.disconnect),
      e.setState((e) => {
        let n = new Map(o ? e.connections : new Map()).set(t.uid, {
          accounts: r.accounts,
          chainId: r.chainId,
          connector: t,
        });
        return { ...e, current: o ? e.current : t.uid, connections: n };
      }),
      s.push({ accounts: r.accounts, chainId: r.chainId, connector: t }),
      c.push(n),
      (o = !0));
  }
  return (
    (e.state.status === `reconnecting` || e.state.status === `connecting`) &&
      (o
        ? e.setState((e) => ({ ...e, status: `connected` }))
        : e.setState((e) => ({
            ...e,
            connections: new Map(),
            current: null,
            status: `disconnected`,
          }))),
    (W = !1),
    s
  );
}
async function ke(e, t) {
  let { account: n, chainId: r, connector: a, ...o } = t,
    s;
  s =
    typeof n == `object` && n?.type === `local`
      ? e.getClient({ chainId: r })
      : await z(e, {
          account: n ?? void 0,
          assertChainId: !1,
          chainId: r,
          connector: a,
        });
  let c = !r || s.chain?.id === r ? s.chain : { id: r };
  return await L(
    s,
    i,
    `sendTransaction`
  )({
    ...o,
    ...(n ? { account: n } : {}),
    assertChainId: !!r,
    chain: c,
    gas: o.gas ?? void 0,
  });
}
async function Ae(e, t) {
  let { account: n, connector: r, ...i } = t,
    a;
  return (
    (a =
      typeof n == `object` && n.type === `local`
        ? e.getClient()
        : await z(e, { account: n, connector: r })),
    L(a, ne, `signMessage`)({ ...i, ...(n ? { account: n } : {}) })
  );
}
async function je(e, t) {
  let { addEthereumChainParameter: n, chainId: r } = t,
    i = e.state.connections.get(t.connector?.uid ?? e.state.current);
  if (i) {
    let e = i.connector;
    if (!e.switchChain) throw new ue({ connector: e });
    return await e.switchChain({ addEthereumChainParameter: n, chainId: r });
  }
  let a = e.chains.find((e) => e.id === r);
  if (!a) throw new S();
  return e.setState((e) => ({ ...e, chainId: r })), a;
}
async function Me(e, n) {
  let { chainId: r, timeout: i = 0, ...a } = n,
    o = e.getClient({ chainId: r }),
    s = await L(o, g, `waitForTransactionReceipt`)({ ...a, timeout: i });
  if (s.status === `reverted`)
    throw await ie(
      async () => {
        let { from: e, ...n } = await L(
            o,
            _,
            `getTransaction`
          )({ hash: s.transactionHash }),
          r = await L(
            o,
            t,
            `call`
          )({
            ...n,
            account: e,
            data: n.input,
            gasPrice: n.type === `eip1559` ? void 0 : n.gasPrice,
            maxFeePerGas: n.type === `eip1559` ? n.maxFeePerGas : void 0,
            maxPriorityFeePerGas:
              n.type === `eip1559` ? n.maxPriorityFeePerGas : void 0,
          }),
          i = r?.data ? d(`0x${r.data.substring(138)}`) : `unknown reason`;
        return Error(i);
      },
      {
        timeout: i > 0 ? Math.min(i, 1e4) : 1e4,
        errorInstance: Error(`unknown reason`),
      }
    );
  return { ...s, chainId: o.chain.id };
}
function Ne(e, t) {
  let { onChange: n } = t;
  return e.subscribe(() => V(e), n, {
    equalityFn(e, t) {
      let { connector: n, ...r } = e,
        { connector: i, ...a } = t;
      return B(r, a) && n?.id === i?.id && n?.uid === i?.uid;
    },
  });
}
function Pe(e, t) {
  let { onChange: n } = t;
  return e.subscribe(() => U(e), n, { equalityFn: B });
}
function Fe(e, t) {
  let { onChange: n } = t;
  return e._internal.connectors.subscribe((e, t) => {
    n(Object.values(e), t);
  });
}
function Ie(e, t) {
  let { syncConnectedChain: n = e._internal.syncConnectedChain, ...r } = t,
    i,
    a = (t) => (
      i && i(),
      (i = L(e.getClient({ chainId: t }), re, `watchPendingTransactions`)(r)),
      i
    ),
    o = a(t.chainId),
    s;
  return (
    n &&
      !t.chainId &&
      (s = e.subscribe(
        ({ chainId: e }) => e,
        async (e) => a(e)
      )),
    () => {
      o?.(), s?.();
    }
  );
}
async function Le(e, t) {
  let { account: n, chainId: r, connector: i, ...a } = t,
    o;
  o =
    typeof n == `object` && n?.type === `local`
      ? e.getClient({ chainId: r })
      : await z(e, {
          account: n ?? void 0,
          assertChainId: !1,
          chainId: r,
          connector: i,
        });
  let s = !r || o.chain?.id === r ? o.chain : { id: r };
  return await L(
    o,
    u,
    `writeContract`
  )({ ...a, ...(n ? { account: n } : {}), assertChainId: !!r, chain: s });
}
K.type = `injected`;
function K(e = {}) {
  let { shimDisconnect: t = !0, unstable_shimAsyncInject: r } = e;
  function i() {
    let t = e.target;
    if (typeof t == `function`) {
      let e = t();
      if (e) return e;
    }
    return typeof t == `object`
      ? t
      : typeof t == `string`
      ? {
          ...(Re[t] ?? {
            id: t,
            name: `${t[0].toUpperCase()}${t.slice(1)}`,
            provider: `is${t[0].toUpperCase()}${t.slice(1)}`,
          }),
        }
      : {
          id: `injected`,
          name: `Injected`,
          provider(e) {
            return e?.ethereum;
          },
        };
  }
  let a, o, s, u;
  return w((d) => ({
    get icon() {
      return i().icon;
    },
    get id() {
      return i().id;
    },
    get name() {
      return i().name;
    },
    type: K.type,
    async setup() {
      let t = await this.getProvider();
      t?.on &&
        e.target &&
        (s || ((s = this.onConnect.bind(this)), t.on(`connect`, s)),
        a ||
          ((a = this.onAccountsChanged.bind(this)),
          t.on(`accountsChanged`, a)));
    },
    async connect({ chainId: r, isReconnecting: i, withCapabilities: c } = {}) {
      let l = await this.getProvider();
      if (!l) throw new C();
      let f = [];
      if (i) f = await this.getAccounts().catch(() => []);
      else if (t)
        try {
          (f = (
            await l.request({
              method: `wallet_requestPermissions`,
              params: [{ eth_accounts: {} }],
            })
          )[0]?.caveats?.[0]?.value?.map((e) => n(e))),
            f.length > 0 && (f = await this.getAccounts());
        } catch (e) {
          let t = e;
          if (t.code === h.code) throw new h(t);
          if (t.code === x.code) throw t;
        }
      try {
        !f?.length &&
          !i &&
          (f = (await l.request({ method: `eth_requestAccounts` })).map((e) =>
            n(e)
          )),
          (s &&= (l.removeListener(`connect`, s), void 0)),
          a ||
            ((a = this.onAccountsChanged.bind(this)),
            l.on(`accountsChanged`, a)),
          o || ((o = this.onChainChanged.bind(this)), l.on(`chainChanged`, o)),
          u || ((u = this.onDisconnect.bind(this)), l.on(`disconnect`, u));
        let p = await this.getChainId();
        return (
          r &&
            p !== r &&
            (p =
              (
                await this.switchChain({ chainId: r }).catch((e) => {
                  if (e.code === h.code) throw e;
                  return { id: p };
                })
              )?.id ?? p),
          t && (await d.storage?.removeItem(`${this.id}.disconnected`)),
          e.target || (await d.storage?.setItem(`injected.connected`, !0)),
          {
            accounts: c ? f.map((e) => ({ address: e, capabilities: {} })) : f,
            chainId: p,
          }
        );
      } catch (e) {
        let t = e;
        throw t.code === h.code ? new h(t) : t.code === x.code ? new x(t) : t;
      }
    },
    async disconnect() {
      let n = await this.getProvider();
      if (!n) throw new C();
      (o &&= (n.removeListener(`chainChanged`, o), void 0)),
        (u &&= (n.removeListener(`disconnect`, u), void 0)),
        s || ((s = this.onConnect.bind(this)), n.on(`connect`, s));
      try {
        await ie(
          () =>
            n.request({
              method: `wallet_revokePermissions`,
              params: [{ eth_accounts: {} }],
            }),
          { timeout: 100 }
        );
      } catch {}
      t && (await d.storage?.setItem(`${this.id}.disconnected`, !0)),
        e.target || (await d.storage?.removeItem(`injected.connected`));
    },
    async getAccounts() {
      let e = await this.getProvider();
      if (!e) throw new C();
      return (await e.request({ method: `eth_accounts` })).map((e) => n(e));
    },
    async getChainId() {
      let e = await this.getProvider();
      if (!e) throw new C();
      let t = await e.request({ method: `eth_chainId` });
      return Number(t);
    },
    async getProvider() {
      if (typeof window > `u`) return;
      let e,
        t = i();
      return (
        (e =
          typeof t.provider == `function`
            ? t.provider(window)
            : typeof t.provider == `string`
            ? q(window, t.provider)
            : t.provider),
        e &&
          !e.removeListener &&
          (`off` in e && typeof e.off == `function`
            ? (e.removeListener = e.off)
            : (e.removeListener = () => {})),
        e
      );
    },
    async isAuthorized() {
      try {
        if (
          (t && (await d.storage?.getItem(`${this.id}.disconnected`))) ||
          (!e.target && !(await d.storage?.getItem(`injected.connected`)))
        )
          return !1;
        if (!(await this.getProvider())) {
          if (r !== void 0 && r !== !1) {
            let e = async () => (
                typeof window < `u` &&
                  window.removeEventListener(`ethereum#initialized`, e),
                !!(await this.getProvider())
              ),
              t = typeof r == `number` ? r : 1e3;
            if (
              await Promise.race([
                ...(typeof window < `u`
                  ? [
                      new Promise((t) =>
                        window.addEventListener(
                          `ethereum#initialized`,
                          () => t(e()),
                          { once: !0 }
                        )
                      ),
                    ]
                  : []),
                new Promise((n) => setTimeout(() => n(e()), t)),
              ])
            )
              return !0;
          }
          throw new C();
        }
        return !!(await c(() => this.getAccounts())).length;
      } catch {
        return !1;
      }
    },
    async switchChain({ addEthereumChainParameter: e, chainId: t }) {
      let n = await this.getProvider();
      if (!n) throw new C();
      let r = d.chains.find((e) => e.id === t);
      if (!r) throw new y(new S());
      let i = new Promise((e) => {
        let n = (r) => {
          `chainId` in r &&
            r.chainId === t &&
            (d.emitter.off(`change`, n), e());
        };
        d.emitter.on(`change`, n);
      });
      try {
        return (
          await Promise.all([
            n
              .request({
                method: `wallet_switchEthereumChain`,
                params: [{ chainId: l(t) }],
              })
              .then(async () => {
                (await this.getChainId()) === t &&
                  d.emitter.emit(`change`, { chainId: t });
              }),
            i,
          ]),
          r
        );
      } catch (a) {
        let o = a;
        if (o.code === 4902 || o?.data?.originalError?.code === 4902)
          try {
            let { default: a, ...o } = r.blockExplorers ?? {},
              s;
            e?.blockExplorerUrls
              ? (s = e.blockExplorerUrls)
              : a && (s = [a.url, ...Object.values(o).map((e) => e.url)]);
            let c;
            c = e?.rpcUrls?.length
              ? e.rpcUrls
              : [r.rpcUrls.default?.http[0] ?? ``];
            let u = {
              blockExplorerUrls: s,
              chainId: l(t),
              chainName: e?.chainName ?? r.name,
              iconUrls: e?.iconUrls,
              nativeCurrency: e?.nativeCurrency ?? r.nativeCurrency,
              rpcUrls: c,
            };
            return (
              await Promise.all([
                n
                  .request({ method: `wallet_addEthereumChain`, params: [u] })
                  .then(async () => {
                    if ((await this.getChainId()) === t)
                      d.emitter.emit(`change`, { chainId: t });
                    else
                      throw new h(
                        Error(`User rejected switch after adding network.`)
                      );
                  }),
                i,
              ]),
              r
            );
          } catch (e) {
            throw new h(e);
          }
        throw o.code === h.code ? new h(o) : new y(o);
      }
    },
    async onAccountsChanged(e) {
      if (e.length === 0) this.onDisconnect();
      else if (d.emitter.listenerCount(`connect`)) {
        let e = (await this.getChainId()).toString();
        this.onConnect({ chainId: e }),
          t && (await d.storage?.removeItem(`${this.id}.disconnected`));
      } else d.emitter.emit(`change`, { accounts: e.map((e) => n(e)) });
    },
    onChainChanged(e) {
      let t = Number(e);
      d.emitter.emit(`change`, { chainId: t });
    },
    async onConnect(e) {
      let t = await this.getAccounts();
      if (t.length === 0) return;
      let n = Number(e.chainId);
      d.emitter.emit(`connect`, { accounts: t, chainId: n });
      let r = await this.getProvider();
      r &&
        ((s &&= (r.removeListener(`connect`, s), void 0)),
        a ||
          ((a = this.onAccountsChanged.bind(this)), r.on(`accountsChanged`, a)),
        o || ((o = this.onChainChanged.bind(this)), r.on(`chainChanged`, o)),
        u || ((u = this.onDisconnect.bind(this)), r.on(`disconnect`, u)));
    },
    async onDisconnect(e) {
      let t = await this.getProvider();
      (e && e.code === 1013 && t && (await this.getAccounts()).length) ||
        (d.emitter.emit(`disconnect`),
        t &&
          ((o &&= (t.removeListener(`chainChanged`, o), void 0)),
          (u &&= (t.removeListener(`disconnect`, u), void 0)),
          s || ((s = this.onConnect.bind(this)), t.on(`connect`, s))));
    },
  }));
}
var Re = {
  coinbaseWallet: {
    id: `coinbaseWallet`,
    name: `Coinbase Wallet`,
    provider(e) {
      return e?.coinbaseWalletExtension
        ? e.coinbaseWalletExtension
        : q(e, `isCoinbaseWallet`);
    },
  },
  metaMask: {
    id: `metaMask`,
    name: `MetaMask`,
    provider(e) {
      return q(e, (e) => {
        if (!e.isMetaMask || (e.isBraveWallet && !e._events && !e._state))
          return !1;
        for (let t of [
          `isApexWallet`,
          `isAvalanche`,
          `isBitKeep`,
          `isBlockWallet`,
          `isKuCoinWallet`,
          `isMathWallet`,
          `isOkxWallet`,
          `isOKExWallet`,
          `isOneInchIOSWallet`,
          `isOneInchAndroidWallet`,
          `isOpera`,
          `isPhantom`,
          `isPortal`,
          `isRabby`,
          `isTokenPocket`,
          `isTokenary`,
          `isUniswapWallet`,
          `isZerion`,
        ])
          if (e[t]) return !1;
        return !0;
      });
    },
  },
  phantom: {
    id: `phantom`,
    name: `Phantom`,
    provider(e) {
      return e?.phantom?.ethereum ? e.phantom?.ethereum : q(e, `isPhantom`);
    },
  },
};
function q(e, t) {
  function n(e) {
    return typeof t == `function` ? t(e) : typeof t != `string` || e[t];
  }
  let r = e.ethereum;
  if (r?.providers) return r.providers.find((e) => n(e));
  if (r && n(r)) return r;
}
function ze(e) {
  if (typeof window > `u`) return;
  let t = (t) => e(t.detail);
  return (
    window.addEventListener(`eip6963:announceProvider`, t),
    window.dispatchEvent(new CustomEvent(`eip6963:requestProvider`)),
    () => window.removeEventListener(`eip6963:announceProvider`, t)
  );
}
function Be() {
  let e = new Set(),
    t = [],
    n = () =>
      ze((n) => {
        t.some(({ info: e }) => e.uuid === n.info.uuid) ||
          ((t = [...t, n]), e.forEach((e) => e(t, { added: [n] })));
      }),
    r = n();
  return {
    _listeners() {
      return e;
    },
    clear() {
      e.forEach((e) => e([], { removed: [...t] })), (t = []);
    },
    destroy() {
      this.clear(), e.clear(), r?.();
    },
    findProvider({ rdns: e }) {
      return t.find((t) => t.info.rdns === e);
    },
    getProviders() {
      return t;
    },
    reset() {
      this.clear(), r?.(), (r = n());
    },
    subscribe(n, { emitImmediately: r } = {}) {
      return e.add(n), r && n(t, { added: t }), () => e.delete(n);
    },
  };
}
var Ve = (e) => (t, n, r) => {
  let i = r.subscribe;
  return (
    (r.subscribe = (e, t, n) => {
      let a = e;
      if (t) {
        let i = n?.equalityFn || Object.is,
          o = e(r.getState());
        (a = (n) => {
          let r = e(n);
          if (!i(o, r)) {
            let e = o;
            t((o = r), e);
          }
        }),
          n?.fireImmediately && t(o, o);
      }
      return i(a);
    }),
    e(t, n, r)
  );
};
function He(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (e) => {
      let r = (e) => (e === null ? null : JSON.parse(e, t?.reviver)),
        i = n.getItem(e) ?? null;
      return i instanceof Promise ? i.then(r) : r(i);
    },
    setItem: (e, r) => n.setItem(e, JSON.stringify(r, t?.replacer)),
    removeItem: (e) => n.removeItem(e),
  };
}
var J = (e) => (t) => {
    try {
      let n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(e) {
              return J(e)(n);
            },
            catch(e) {
              return this;
            },
          };
    } catch (e) {
      return {
        then(e) {
          return this;
        },
        catch(t) {
          return J(t)(e);
        },
      };
    }
  },
  Ue = (e, t) => (n, r, i) => {
    let a = {
        storage: He(() => localStorage),
        partialize: (e) => e,
        version: 0,
        merge: (e, t) => ({ ...t, ...e }),
        ...t,
      },
      o = !1,
      s = new Set(),
      c = new Set(),
      l = a.storage;
    if (!l)
      return e(
        (...e) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
          ),
            n(...e);
        },
        r,
        i
      );
    let u = () => {
        let e = a.partialize({ ...r() });
        return l.setItem(a.name, { state: e, version: a.version });
      },
      d = i.setState;
    i.setState = (e, t) => {
      d(e, t), u();
    };
    let f = e(
      (...e) => {
        n(...e), u();
      },
      r,
      i
    );
    i.getInitialState = () => f;
    let p,
      m = () => {
        if (!l) return;
        (o = !1), s.forEach((e) => e(r() ?? f));
        let e = a.onRehydrateStorage?.call(a, r() ?? f) || void 0;
        return J(l.getItem.bind(l))(a.name)
          .then((e) => {
            if (e) {
              if (typeof e.version == `number` && e.version !== a.version) {
                if (a.migrate) return [!0, a.migrate(e.state, e.version)];
                console.error(
                  `State loaded from storage couldn't be migrated since no migrate function was provided`
                );
              } else return [!1, e.state];
            }
            return [!1, void 0];
          })
          .then((e) => {
            let [t, i] = e;
            if (((p = a.merge(i, r() ?? f)), n(p, !0), t)) return u();
          })
          .then(() => {
            e?.(p, void 0), (p = r()), (o = !0), c.forEach((e) => e(p));
          })
          .catch((t) => {
            e?.(void 0, t);
          });
      };
    return (
      (i.persist = {
        setOptions: (e) => {
          (a = { ...a, ...e }), e.storage && (l = e.storage);
        },
        clearStorage: () => {
          l?.removeItem(a.name);
        },
        getOptions: () => a,
        rehydrate: () => m(),
        hasHydrated: () => o,
        onHydrate: (e) => (
          s.add(e),
          () => {
            s.delete(e);
          }
        ),
        onFinishHydration: (e) => (
          c.add(e),
          () => {
            c.delete(e);
          }
        ),
      }),
      a.skipHydration || m(),
      p || f
    );
  },
  We = (e) => {
    let t,
      n = new Set(),
      r = (e, r) => {
        let i = typeof e == `function` ? e(t) : e;
        if (!Object.is(i, t)) {
          let e = t;
          (t = r ?? (typeof i != `object` || !i) ? i : Object.assign({}, t, i)),
            n.forEach((n) => n(t, e));
        }
      },
      i = () => t,
      a = {
        setState: r,
        getState: i,
        getInitialState: () => o,
        subscribe: (e) => (n.add(e), () => n.delete(e)),
      },
      o = (t = e(r, i, a));
    return a;
  },
  Y = (e) => (e ? We(e) : We),
  Ge = class {
    constructor(e) {
      Object.defineProperty(this, "uid", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e,
      }),
        Object.defineProperty(this, "_emitter", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new pe.default(),
        });
    }
    on(e, t) {
      this._emitter.on(e, t);
    }
    once(e, t) {
      this._emitter.once(e, t);
    }
    off(e, t) {
      this._emitter.off(e, t);
    }
    emit(e, ...t) {
      let n = t[0];
      this._emitter.emit(e, { uid: this.uid, ...n });
    }
    listenerCount(e) {
      return this._emitter.listenerCount(e);
    }
  };
function Ke(e) {
  return new Ge(e);
}
function qe(e, t) {
  return JSON.parse(e, (e, n) => {
    let r = n;
    return (
      r?.__type === `bigint` && (r = BigInt(r.value)),
      r?.__type === `Map` && (r = new Map(r.value)),
      t?.(e, r) ?? r
    );
  });
}
function Je(e, t) {
  return e.slice(0, t).join(`.`) || `.`;
}
function Ye(e, t) {
  let { length: n } = e;
  for (let r = 0; r < n; ++r) if (e[r] === t) return r + 1;
  return 0;
}
function Xe(e, t) {
  let n = typeof e == `function`,
    r = typeof t == `function`,
    i = [],
    a = [];
  return function (o, s) {
    if (typeof s == `object`) {
      if (i.length) {
        let e = Ye(i, this);
        e === 0 ? (i[i.length] = this) : (i.splice(e), a.splice(e)),
          (a[a.length] = o);
        let n = Ye(i, s);
        if (n !== 0)
          return r ? t.call(this, o, s, Je(a, n)) : `[ref=${Je(a, n)}]`;
      } else (i[0] = s), (a[0] = o);
    }
    return n ? e.call(this, o, s) : s;
  };
}
function Ze(e, t, n, r) {
  return JSON.stringify(
    e,
    Xe((e, n) => {
      let r = n;
      return (
        typeof r == `bigint` && (r = { __type: `bigint`, value: n.toString() }),
        r instanceof Map &&
          (r = { __type: `Map`, value: Array.from(n.entries()) }),
        t?.(e, r) ?? r
      );
    }, r),
    n ?? void 0
  );
}
function Qe(e) {
  let {
    deserialize: t = qe,
    key: n = `wagmi`,
    serialize: r = Ze,
    storage: i = $e,
  } = e;
  function a(e) {
    return e instanceof Promise ? e.then((e) => e).catch(() => null) : e;
  }
  return {
    ...i,
    key: n,
    async getItem(e, r) {
      let o = await a(i.getItem(`${n}.${e}`));
      return o ? t(o) ?? null : r ?? null;
    },
    async setItem(e, t) {
      let o = `${n}.${e}`;
      t === null ? await a(i.removeItem(o)) : await a(i.setItem(o, r(t)));
    },
    async removeItem(e) {
      await a(i.removeItem(`${n}.${e}`));
    },
  };
}
var $e = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
function et() {
  let e = typeof window < `u` && window.localStorage ? window.localStorage : $e;
  return {
    getItem(t) {
      return e.getItem(t);
    },
    removeItem(t) {
      e.removeItem(t);
    },
    setItem(t, n) {
      try {
        e.setItem(t, n);
      } catch {}
    },
  };
}
var X = 256,
  Z = X,
  Q;
function tt(e = 11) {
  if (!Q || Z + e > X * 2) {
    (Q = ``), (Z = 0);
    for (let e = 0; e < X; e++)
      Q += ((256 + Math.random() * 256) | 0).toString(16).substring(1);
  }
  return Q.substring(Z, Z++ + e);
}
function nt(e) {
  let {
      multiInjectedProviderDiscovery: t = !0,
      storage: n = Qe({ storage: et() }),
      syncConnectedChain: r = !0,
      ssr: i = !1,
      ...a
    } = e,
    o = typeof window < `u` && t ? Be() : void 0,
    s = Y(() => a.chains),
    c = Y(() => {
      let e = [],
        t = new Set();
      for (let n of a.connectors ?? []) {
        let r = l(n);
        if ((e.push(r), !i && r.rdns)) {
          let e = typeof r.rdns == `string` ? [r.rdns] : r.rdns;
          for (let n of e) t.add(n);
        }
      }
      if (!i && o) {
        let n = o.getProviders();
        for (let r of n) t.has(r.info.rdns) || e.push(l(u(r)));
      }
      return e;
    });
  function l(e) {
    let t = Ke(tt()),
      r,
      i = {
        ...e({
          emitter: t,
          chains: s.getState(),
          get providers() {
            if (!o || !r) return [];
            let e = typeof r == `string` ? [r] : r,
              t = o.getProviders();
            return e.flatMap((e) => t.filter((t) => t.info.rdns === e));
          },
          storage: n,
          transports: a.transports,
        }),
        emitter: t,
        uid: t.uid,
      };
    return (r = i.rdns), t.on(`connect`, y), i.setup?.(), i;
  }
  function u(e) {
    let { info: t } = e,
      n = e.provider;
    return K({ target: { ...t, id: t.rdns, provider: n } });
  }
  let d = new Map();
  function f(e = {}) {
    let t = e.chainId ?? g.getState().chainId,
      n = s.getState().find((e) => e.id === t);
    if (e.chainId && !n) throw new S();
    {
      let e = d.get(g.getState().chainId);
      if (e && !n) return e;
      if (!n) throw new S();
    }
    {
      let e = d.get(t);
      if (e) return e;
    }
    let r;
    if (a.client) r = a.client({ chain: n });
    else {
      let e = n.id,
        t = s.getState().map((e) => e.id),
        i = {},
        o = Object.entries(a);
      for (let [n, r] of o)
        if (
          n !== `chains` &&
          n !== `client` &&
          n !== `connectors` &&
          n !== `transports`
        ) {
          if (typeof r == `object`) {
            if (e in r) i[n] = r[e];
            else {
              if (t.some((e) => e in r)) continue;
              i[n] = r;
            }
          } else i[n] = r;
        }
      r = ee({
        ...i,
        chain: n,
        batch: i.batch ?? { multicall: !0 },
        transport: (t) => a.transports[e]({ ...t, connectors: c }),
      });
    }
    return d.set(t, r), r;
  }
  function p() {
    return {
      chainId: s.getState()[0].id,
      connections: new Map(),
      current: null,
      status: `disconnected`,
    };
  }
  let m,
    h = `0.0.0-canary-`;
  m = `3.6.5`.startsWith(h)
    ? Number.parseInt(fe.replace(h, ``), 10)
    : Number.parseInt(`3.6.5`.split(`.`)[0] ?? `0`, 10);
  let g = Y(
    Ve(
      n
        ? Ue(p, {
            migrate(e, t) {
              if (t === m) return e;
              let n = p(),
                r = _(e, n.chainId);
              return { ...n, chainId: r };
            },
            name: `store`,
            partialize(e) {
              return {
                connections: {
                  __type: `Map`,
                  value: Array.from(e.connections.entries()).map(([e, t]) => {
                    let { id: n, name: r, type: i, uid: a } = t.connector,
                      o = { id: n, name: r, type: i, uid: a };
                    return [e, { ...t, connector: o }];
                  }),
                },
                chainId: e.chainId,
                current: e.current,
              };
            },
            merge(e, t) {
              typeof e == `object` && e && `status` in e && delete e.status;
              let n = _(e, t.chainId);
              return { ...t, ...e, chainId: n };
            },
            skipHydration: i,
            storage: n,
            version: m,
          })
        : p
    )
  );
  g.setState(p());
  function _(e, t) {
    return e &&
      typeof e == `object` &&
      `chainId` in e &&
      typeof e.chainId == `number` &&
      s.getState().some((t) => t.id === e.chainId)
      ? e.chainId
      : t;
  }
  r &&
    g.subscribe(
      ({ connections: e, current: t }) => (t ? e.get(t)?.chainId : void 0),
      (e) => {
        if (s.getState().some((t) => t.id === e))
          return g.setState((t) => ({ ...t, chainId: e ?? t.chainId }));
      }
    ),
    o?.subscribe((e) => {
      let t = new Set(),
        r = new Set();
      for (let e of c.getState())
        if ((t.add(e.id), e.rdns)) {
          let t = typeof e.rdns == `string` ? [e.rdns] : e.rdns;
          for (let e of t) r.add(e);
        }
      let i = [];
      for (let n of e) {
        if (r.has(n.info.rdns)) continue;
        let e = l(u(n));
        t.has(e.id) || i.push(e);
      }
      (!n || g.persist.hasHydrated()) && c.setState((e) => [...e, ...i], !0);
    });
  function v(e) {
    g.setState((t) => {
      let n = t.connections.get(e.uid);
      return n
        ? {
            ...t,
            connections: new Map(t.connections).set(e.uid, {
              accounts: e.accounts ?? n.accounts,
              chainId: e.chainId ?? n.chainId,
              connector: n.connector,
            }),
          }
        : t;
    });
  }
  function y(e) {
    g.getState().status !== `connecting` &&
      g.getState().status !== `reconnecting` &&
      g.setState((t) => {
        let n = c.getState().find((t) => t.uid === e.uid);
        return n
          ? (n.emitter.listenerCount(`connect`) && n.emitter.off(`connect`, v),
            n.emitter.listenerCount(`change`) || n.emitter.on(`change`, v),
            n.emitter.listenerCount(`disconnect`) ||
              n.emitter.on(`disconnect`, b),
            {
              ...t,
              connections: new Map(t.connections).set(e.uid, {
                accounts: e.accounts,
                chainId: e.chainId,
                connector: n,
              }),
              current: e.uid,
              status: `connected`,
            })
          : t;
      });
  }
  function b(e) {
    g.setState((t) => {
      let n = t.connections.get(e.uid);
      if (n) {
        let e = n.connector;
        e.emitter.listenerCount(`change`) &&
          n.connector.emitter.off(`change`, v),
          e.emitter.listenerCount(`disconnect`) &&
            n.connector.emitter.off(`disconnect`, b),
          e.emitter.listenerCount(`connect`) ||
            n.connector.emitter.on(`connect`, y);
      }
      if ((t.connections.delete(e.uid), t.connections.size === 0))
        return {
          ...t,
          connections: new Map(),
          current: null,
          status: `disconnected`,
        };
      let r = t.connections.values().next().value;
      return {
        ...t,
        connections: new Map(t.connections),
        current: r.connector.uid,
      };
    });
  }
  return {
    get chains() {
      return s.getState();
    },
    get connectors() {
      return c.getState();
    },
    storage: n,
    getClient: f,
    get state() {
      return g.getState();
    },
    setState(e) {
      let t;
      t = typeof e == `function` ? e(g.getState()) : e;
      let n = p();
      typeof t != `object` && (t = n),
        Object.keys(n).some((e) => !(e in t)) && (t = n),
        g.setState(t, !0);
    },
    subscribe(e, t, n) {
      return g.subscribe(
        e,
        t,
        n ? { ...n, fireImmediately: n.emitImmediately } : void 0
      );
    },
    _internal: {
      mipd: o,
      async revalidate() {
        let e = g.getState(),
          t = e.connections,
          n = e.current;
        for (let [, e] of t) {
          let r = e.connector;
          (r.isAuthorized && (await r.isAuthorized())) ||
            (t.delete(r.uid), n === r.uid && (n = null));
        }
        g.setState((e) => ({ ...e, connections: t, current: n }));
      },
      store: g,
      ssr: !!i,
      syncConnectedChain: r,
      transports: a.transports,
      chains: {
        setState(e) {
          let t = typeof e == `function` ? e(s.getState()) : e;
          if (t.length !== 0) return s.setState(t, !0);
        },
        subscribe(e) {
          return s.subscribe(e);
        },
      },
      connectors: {
        providerDetailToConnector: u,
        setup: l,
        setState(e) {
          return c.setState(typeof e == `function` ? e(c.getState()) : e, !0);
        },
        subscribe(e) {
          return c.subscribe(e);
        },
      },
      events: { change: v, connect: y, disconnect: b },
    },
  };
}
function rt(e) {
  let t = [],
    r,
    i;
  function a(e) {
    let t = A.getCaipNetworks(M.CHAIN.EVM),
      n = Number(O.parseEvmChainId(e));
    if (!t.some((t) => String(t.id) === String(e))) {
      let e = A.getActiveCaipNetwork(M.CHAIN.EVM)?.id || t[0]?.id;
      e && Number.isInteger(Number(e)) && (n = Number(e));
    }
    if (!n) throw Error(`ChainId not found in networks`);
    return n;
  }
  function o() {
    return (
      (r ||= we.getInstance({
        projectId: e.options.projectId,
        chainId: k()?.caipNetworkId,
        enableLogger: e.options.enableAuthLogger,
        onTimeout: (e) => {
          e === `iframe_load_failed`
            ? P.open(N.ALERT_ERRORS.IFRAME_LOAD_FAILED, `error`)
            : e === `iframe_request_timeout`
            ? P.open(N.ALERT_ERRORS.IFRAME_REQUEST_TIMEOUT, `error`)
            : e === `unverified_domain` &&
              P.open(N.ALERT_ERRORS.UNVERIFIED_DOMAIN, `error`);
        },
        abortController: N.EmbeddedWalletAbortController,
        getActiveCaipNetwork: (e) => k(e),
        getCaipNetworks: (e) => A.getCaipNetworks(e),
      })),
      r
    );
  }
  async function s(n = {}) {
    let r = o(),
      i = n.chainId;
    if (n.isReconnecting) {
      let t = O.parseEvmChainId(r.getLastUsedChainId() || ``),
        n = e.chains?.[0].id;
      if (((i = t || n), !i)) throw Error(`ChainId not found in provider`);
    }
    let s = _e(`eip155`),
      {
        address: c,
        chainId: l,
        accounts: u,
      } = await ae.authConnectorAuthenticate({
        authConnector: r,
        chainId: i,
        preferredAccountType: s,
        socialUri: n.socialUri,
        chainNamespace: M.CHAIN.EVM,
      });
    t = u?.map((e) => e.address) || [c];
    let d = a(l);
    return {
      accounts: t,
      account: c,
      chainId: d,
      chain: { id: d, unsupported: !1 },
    };
  }
  return w((r) => ({
    id: M.CONNECTOR_ID.AUTH,
    name: M.CONNECTOR_NAMES.AUTH,
    type: `AUTH`,
    chain: M.CHAIN.EVM,
    async connect(e = {}) {
      if (i) {
        let t = await i;
        return {
          accounts: e.withCapabilities
            ? t.accounts.map((e) => ({ address: e, capabilities: {} }))
            : t.accounts,
          chainId: t.chainId,
        };
      }
      i ||= new Promise((t) => {
        t(s(e));
      });
      let t = await i;
      return (
        (i = void 0),
        {
          accounts: e.withCapabilities
            ? t.accounts.map((e) => ({ address: e, capabilities: {} }))
            : t.accounts,
          chainId: t.chainId,
        }
      );
    },
    async disconnect() {
      await (await this.getProvider()).disconnect();
    },
    getAccounts() {
      return t?.length
        ? (r.emitter.emit(`change`, { accounts: t }), Promise.resolve(t))
        : Promise.resolve([]);
    },
    async getProvider() {
      return (
        (this.provider ||= we.getInstance({
          projectId: e.options.projectId,
          chainId: k()?.caipNetworkId,
          enableLogger: e.options.enableAuthLogger,
          abortController: N.EmbeddedWalletAbortController,
          onTimeout: (e) => {
            e === `iframe_load_failed`
              ? P.open(N.ALERT_ERRORS.IFRAME_LOAD_FAILED, `error`)
              : e === `iframe_request_timeout`
              ? P.open(N.ALERT_ERRORS.IFRAME_REQUEST_TIMEOUT, `error`)
              : e === `unverified_domain` &&
                P.open(N.ALERT_ERRORS.UNVERIFIED_DOMAIN, `error`);
          },
          getActiveCaipNetwork: (e) => k(e),
          getCaipNetworks: (e) => A.getCaipNetworks(e),
        })),
        Promise.resolve(this.provider)
      );
    },
    async getChainId() {
      let { chainId: e } = await (await this.getProvider()).getChainId();
      return a(e);
    },
    async isAuthorized() {
      let e = A.state.activeChain === M.CHAIN.EVM;
      if (
        M.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(
          (e) => be.getConnectorId(e) === M.CONNECTOR_ID.AUTH
        ) &&
        !e
      )
        return !1;
      let t = await this.getProvider();
      return Promise.resolve(t.getLoginEmailUsed());
    },
    async switchChain({ chainId: e }) {
      try {
        let n = r.chains.find((t) => t.id === e);
        if (!n) throw new y(Error(`chain not found on connector.`));
        let i = await this.getProvider(),
          a = _e(`eip155`),
          o = await i.connect({ chainId: e, preferredAccountType: a });
        return (
          (t = o?.accounts?.map((e) => e.address) || [o.address]),
          r.emitter.emit(`change`, { chainId: Number(e), accounts: t }),
          n
        );
      } catch (e) {
        throw e instanceof Error ? new y(e) : e;
      }
    },
    onAccountsChanged(e) {
      e.length === 0
        ? this.onDisconnect()
        : r.emitter.emit(`change`, { accounts: e.map(n) });
    },
    onChainChanged(e) {
      let t = Number(e);
      r.emitter.emit(`change`, { chainId: t });
    },
    async onDisconnect(e) {
      await (await this.getProvider()).disconnect();
    },
  }));
}
it.type = `walletConnect`;
function it(e) {
  let t = e.isNewChainsStale ?? !0,
    r,
    i,
    a,
    o,
    s,
    c,
    u;
  return w((d) => ({
    id: `walletConnect`,
    name: `WalletConnect`,
    type: it.type,
    provider: e.universalProvider,
    async setup() {
      let e = await this.getProvider().catch(() => null);
      e &&
        (o || ((o = this.onConnect.bind(this)), e.on(`connect`, o)),
        c ||
          ((c = this.onSessionDelete.bind(this)), e.on(`session_delete`, c)));
    },
    async connect({ ...e } = {}) {
      try {
        let t = A.getCaipNetworks(),
          n = await this.getProvider();
        if (!n) throw new C();
        s || ((s = this.onDisplayUri), n.on(`display_uri`, s));
        let r = await this.isChainsStale();
        n.session && r && (await n.disconnect());
        let l = E.state.universalProviderConfigOverride;
        if (!n.session || r) {
          let r = xe.createNamespaces(t, l);
          await n.connect({
            optionalNamespaces: r,
            ...(`pairingTopic` in e ? { pairingTopic: e.pairingTopic } : {}),
          }),
            this.setRequestedChainsIds(t.map((e) => Number(e.id)));
        }
        let d = await this.getAccounts(),
          f = await this.getChainId(),
          p = n.session?.namespaces?.eip155?.chains,
          m = p?.some((e) => Number(e.split(`:`)[1]) === f),
          h = 1;
        m ? (h = f) : p?.[0] && (h = Number(p[0].split(`:`)[1])),
          (s &&= (n.removeListener(`display_uri`, s), void 0)),
          (o &&= (n.removeListener(`connect`, o), void 0)),
          i ||
            ((i = this.onAccountsChanged.bind(this)),
            n.on(`accountsChanged`, i)),
          a || ((a = this.onChainChanged.bind(this)), n.on(`chainChanged`, a)),
          u || ((u = this.onDisconnect.bind(this)), n.on(`disconnect`, u)),
          c ||
            ((c = this.onSessionDelete.bind(this)), n.on(`session_delete`, c));
        let g = l?.defaultChain;
        return (
          n.setDefaultChain(g ?? `eip155:${h}`), { accounts: d, chainId: h }
        );
      } catch (e) {
        throw /(user rejected|connection request reset)/i.test(e?.message)
          ? new h(e)
          : e;
      }
    },
    async disconnect() {
      let e = await this.getProvider();
      try {
        await e?.disconnect();
      } catch (e) {
        if (!/No matching key/i.test(e.message)) throw e;
      } finally {
        (a &&= (e?.removeListener(`chainChanged`, a), void 0)),
          (u &&= (e?.removeListener(`disconnect`, u), void 0)),
          o || ((o = this.onConnect.bind(this)), e?.on(`connect`, o)),
          (i &&= (e?.removeListener(`accountsChanged`, i), void 0)),
          (c &&= (e?.removeListener(`session_delete`, c), void 0)),
          this.setRequestedChainsIds([]);
      }
    },
    async getAccounts() {
      let e = await this.getProvider();
      if (!e?.session?.namespaces) return [];
      let t =
          e?.session?.namespaces[M.CHAIN.EVM]?.accounts?.map(
            (e) => e.split(`:`)[2]
          ) ?? [],
        n = new Set();
      return t.filter((e) => {
        let t = e?.toLowerCase();
        return !n.has(t) && (n.add(t), !0);
      });
    },
    async getProvider({ chainId: t } = {}) {
      r || ((r = e.universalProvider), r?.events.setMaxListeners(1 / 0));
      let n = T.getActiveNamespace(),
        i = A.getActiveCaipNetwork()?.id;
      if (t && i !== t && n) {
        let e = T.getStoredActiveCaipNetworkId(),
          t = (n ? A.getCaipNetworks(n) : [])?.find((t) => t.id === e);
        t &&
          t.chainNamespace === M.CHAIN.EVM &&
          (await this.switchChain?.({ chainId: Number(t.id) }));
      }
      return r;
    },
    async getChainId() {
      let e = A.getActiveCaipNetwork(M.CHAIN.EVM)?.id;
      if (e) return e;
      let t = (await this.getProvider()).session?.namespaces[M.CHAIN.EVM]
        ?.chains?.[0];
      return A.getCaipNetworks().find((e) => e.id === t)?.id;
    },
    async isAuthorized() {
      try {
        let [e, t] = await Promise.all([
          this.getAccounts(),
          this.getProvider(),
        ]);
        return e.length
          ? (await this.isChainsStale()) && t.session
            ? (await t.disconnect().catch(() => {}), !1)
            : !0
          : !1;
      } catch {
        return !1;
      }
    },
    async switchChain({ addEthereumChainParameter: e, chainId: t }) {
      let n = await this.getProvider();
      if (!n) throw new C();
      let r = A.getCaipNetworks().find((e) => e.id === t);
      if (!r) throw new y(new S());
      try {
        await n.request({
          method: `wallet_switchEthereumChain`,
          params: [{ chainId: l(t) }],
        }),
          r?.caipNetworkId && n.setDefaultChain(r?.caipNetworkId),
          d.emitter.emit(`change`, { chainId: Number(t) });
        let e = await this.getRequestedChainsIds();
        return this.setRequestedChainsIds([...e, t]), { ...r, id: r.id };
      } catch (i) {
        let a = i;
        if (/(?:user rejected)/iu.test(a.message)) throw new h(a);
        try {
          let i;
          i = e?.blockExplorerUrls
            ? e.blockExplorerUrls
            : r.blockExplorers?.default.url
            ? [r.blockExplorers?.default.url]
            : [];
          let a = r.rpcUrls?.chainDefault?.http || [],
            o = {
              blockExplorerUrls: i,
              chainId: l(t),
              chainName: r.name,
              iconUrls: e?.iconUrls,
              nativeCurrency: r.nativeCurrency,
              rpcUrls: a,
            };
          await n.request({ method: `wallet_addEthereumChain`, params: [o] });
          let s = await this.getRequestedChainsIds();
          return this.setRequestedChainsIds([...s, t]), { ...r, id: r.id };
        } catch (e) {
          throw new h(e);
        }
      }
    },
    onAccountsChanged(e) {
      e.length === 0
        ? this.onDisconnect()
        : d.emitter.emit(`change`, { accounts: e.map((e) => n(e)) });
    },
    onChainChanged(e) {
      let t = Number(e);
      d.emitter.emit(`change`, { chainId: t });
    },
    onConnect(e) {
      this.setRequestedChainsIds(A.getCaipNetworks().map((e) => Number(e.id)));
    },
    async onDisconnect(e) {
      this.setRequestedChainsIds([]), d.emitter.emit(`disconnect`);
      let t = await this.getProvider();
      (i &&= (t.removeListener(`accountsChanged`, i), void 0)),
        (a &&= (t.removeListener(`chainChanged`, a), void 0)),
        (u &&= (t.removeListener(`disconnect`, u), void 0)),
        (c &&= (t.removeListener(`session_delete`, c), void 0)),
        o || ((o = this.onConnect.bind(this)), t.on(`connect`, o));
    },
    onDisplayUri(e) {
      d.emitter.emit(`message`, { type: `display_uri`, data: e });
    },
    onSessionDelete() {
      this.onDisconnect();
    },
    getNamespaceChainsIds() {
      return r?.session?.namespaces
        ? r?.session?.namespaces[M.CHAIN.EVM]?.accounts?.map((e) =>
            Number.parseInt(e.split(`:`)[1] ?? ``)
          ) ?? []
        : [];
    },
    async getRequestedChainsIds() {
      let e = (await d.storage?.getItem(this.requestedChainsStorageKey)) ?? [];
      return [...new Set(e)];
    },
    async isChainsStale() {
      if (!t) return !1;
      let e = d.chains.map((e) => e.id),
        n = this.getNamespaceChainsIds();
      if (n.length && !n.some((t) => e.includes(t))) return !1;
      let r = await this.getRequestedChainsIds();
      return !e.every((e) => r.includes(Number(e)));
    },
    async setRequestedChainsIds(e) {
      await d.storage?.setItem(this.requestedChainsStorageKey, e);
    },
    get requestedChainsStorageKey() {
      return `${this.id}.requestedChains`;
    },
  }));
}
var $ = ve({ pendingTransactions: 0 }),
  at = {
    state: $,
    subscribeKey(e, t) {
      return he($, e, t);
    },
    increase(e) {
      $[e] += 1;
    },
    decrease(e) {
      --$[e];
    },
    reset(e) {
      $[e] = 0;
    },
  };
async function ot(t) {
  if (D.isSafeApp()) {
    let { safe: n } = await e(async () => {
      let { safe: e } = await import(`./exports-BUEiVG_S.js`);
      return { safe: e };
    }, __vite__mapDeps([0, 1, 2, 3, 4]));
    if (n && !t.some((e) => e.type === `safe`)) return n();
  }
  return null;
}
async function st(t) {
  try {
    let { baseAccount: n } = await e(async () => {
      let { baseAccount: e } = await import(`./exports-BUEiVG_S.js`);
      return { baseAccount: e };
    }, __vite__mapDeps([0, 1, 2, 3, 4]));
    if (n && !t.some((e) => e.id === `baseAccount`)) return n();
  } catch (e) {
    console.error(`Failed to import Base Account SDK:`, e);
  }
  return null;
}
async function ct(t, n) {
  try {
    let { coinbaseWallet: r } = await e(async () => {
      let { coinbaseWallet: e } = await import(`./exports-BUEiVG_S.js`);
      return { coinbaseWallet: e };
    }, __vite__mapDeps([0, 1, 2, 3, 4]));
    if (r && !t.some((e) => e.id === `coinbaseWallet`))
      return r({ preference: n });
  } catch (e) {
    console.error(`Failed to import Coinbase Wallet SDK:`, e);
  }
  return null;
}
var lt = { enable: !1, pollingInterval: 3e4 },
  ut = class extends Ce {
    constructor(e) {
      let t = F.extendCaipNetworks(e.networks, {
        projectId: e.projectId,
        customNetworkImageUrls: {},
        customRpcUrls: e.customRpcUrls,
      });
      super(),
        (this.balancePromises = {}),
        (this.namespace = M.CHAIN.EVM),
        (this.adapterType = M.ADAPTER_TYPES.WAGMI),
        (this.projectId = e.projectId),
        (this.pendingTransactionsFilter = {
          ...lt,
          ...(e.pendingTransactionsFilter ?? {}),
        }),
        this.createConfig({ ...e, networks: t }),
        this.checkChainId();
    }
    construct(e) {
      this.checkChainId(), this.setupWatchers();
    }
    async getAccounts(e) {
      let t = this.getWagmiConnector(e.id);
      if (!t) return { accounts: [] };
      if (t.id === M.CONNECTOR_ID.AUTH) {
        let e = await t.getProvider();
        if (!e?.user) return { accounts: [] };
        let { address: n, accounts: r, chainId: i } = e.user;
        return Promise.resolve({
          accounts: (r || [{ address: n, type: `eoa` }]).map((e) =>
            D.createAccount({
              caipAddress: `eip155:${i}:${e.address}`,
              type: e.type,
            })
          ),
        });
      }
      let { addresses: n, address: r, chainId: i } = V(this.wagmiConfig);
      return Promise.resolve({
        accounts: i
          ? [...new Set(n || [r])].map((e) =>
              D.createAccount({
                caipAddress: `eip155:${i}:${e || ``}`,
                type: `eoa`,
              })
            )
          : [],
      });
    }
    checkChainId() {
      let { chainId: e } = V(this.wagmiConfig);
      e && this.emit(`switchNetwork`, { chainId: e });
    }
    getWagmiConnector(e) {
      return this.wagmiConfig.connectors.find((t) => t.id === e);
    }
    createConfig(e) {
      this.wagmiChains = e.networks.filter(
        (e) => e.chainNamespace === M.CHAIN.EVM
      );
      let t = {},
        n = [...(e.connectors ?? [])];
      this.wagmiChains.forEach((n) => {
        let r = e.transports?.[n.id],
          i = F.getCaipNetworkId(n);
        r
          ? (t[n.id] = F.extendWagmiTransports(n, e.projectId, r))
          : (t[n.id] = F.getViemTransport(
              n,
              e.projectId,
              e.customRpcUrls?.[i]
            ));
      }),
        (this.wagmiConfig = nt({
          ...e,
          chains: this.wagmiChains,
          connectors: n,
          transports: t,
        }));
    }
    setupWatchPendingTransactions() {
      if (
        !this.pendingTransactionsFilter.enable ||
        this.unwatchPendingTransactions
      )
        return;
      this.unwatchPendingTransactions = Ie(this.wagmiConfig, {
        pollingInterval: this.pendingTransactionsFilter.pollingInterval,
        onError: () => {},
        onTransactions: () => {
          this.emit(`pendingTransactions`), at.increase(`pendingTransactions`);
        },
      });
      let e = at.subscribeKey(`pendingTransactions`, (t) => {
        t >= M.LIMITS.PENDING_TRANSACTIONS &&
          (this.unwatchPendingTransactions?.(), e());
      });
    }
    setupWatchers() {
      Pe(this.wagmiConfig, {
        onChange: (e) => {
          this.clearConnections(),
            this.addConnection(
              ...e.map((e) => {
                let t = this.getCaipNetworks().find((t) => t.id === e.chainId),
                  n = e.connector.id === M.CONNECTOR_ID.AUTH;
                return {
                  accounts: e.accounts.map((e) => ({
                    address: this.toChecksummedAddress(e),
                  })),
                  caipNetwork: t,
                  connectorId: e.connector.id,
                  auth: n
                    ? {
                        name: T.getConnectedSocialProvider(),
                        username: T.getConnectedSocialUsername(),
                      }
                    : void 0,
                };
              })
            );
        },
      }),
        Ne(this.wagmiConfig, {
          onChange: (e, t) => {
            if (
              (e.status === `disconnected` &&
                t.address &&
                this.emit(`disconnect`),
              e?.chainId &&
                e?.chainId !== t?.chainId &&
                this.emit(`switchNetwork`, { chainId: e.chainId }),
              e.status === `connected`)
            ) {
              let n = e.address !== t?.address,
                r = e.connector.id !== t.connector?.id,
                i = t.status !== `connected`;
              (n || r || i) &&
                (this.setupWatchPendingTransactions(),
                this.handleAccountChanged({
                  address: e.address,
                  chainId: e.chainId,
                  connector: e.connector,
                }));
            }
          },
        });
    }
    async addThirdPartyConnectors() {
      let e = [],
        {
          enableCoinbase: t,
          enableBaseAccount: n,
          coinbasePreference: r,
        } = E.state || {};
      if (n !== !1) {
        let t = await st(this.wagmiConfig.connectors);
        t && e.push(t);
      }
      if (t !== !1) {
        let t = await ct(this.wagmiConfig.connectors, r);
        t && e.push(t);
      }
      let i = await ot(this.wagmiConfig.connectors);
      i && e.push(i),
        await Promise.all(
          e.map((e) => {
            let t = this.configureInternalConnector(e);
            return this.addWagmiConnector(t);
          })
        );
    }
    addWagmiConnectors() {
      let e = [];
      E.state.enableInjected !== !1 && e.push(K({ shimDisconnect: !0 }));
      let {
          features: t,
          remoteFeatures: n,
          projectId: r,
          enableAuthLogger: i,
        } = E.state,
        a = n?.email ?? t?.email ?? !0,
        o = n?.socials ?? t?.socials,
        s = Array.isArray(o) && o?.length > 0;
      (a || s) &&
        e.push(
          rt({
            chains: this.wagmiChains,
            options: { projectId: r, enableAuthLogger: i },
          })
        ),
        e.forEach((e) => {
          this.configureInternalConnector(e);
        });
    }
    configureInternalConnector(e) {
      let t = this.wagmiConfig._internal.connectors.setup(e);
      return (
        this.wagmiConfig._internal.connectors.setState((e) => [...e, t]), t
      );
    }
    async handleAccountChanged({ address: e, chainId: t, connector: n }) {
      if (!this.namespace)
        throw Error(
          `WagmiAdapter:handleAccountChanged - namespace is required`
        );
      let r = await n.getProvider().catch(() => void 0);
      this.emit(`accountChanged`, {
        address: this.toChecksummedAddress(e),
        chainId: t,
        connector: {
          id: n.id,
          name: j.ConnectorNamesMap[n.id] ?? n.name,
          imageId: j.ConnectorImageIds[n.id],
          type: j.ConnectorTypesMap[n.type] ?? `EXTERNAL`,
          info: n.id === M.CONNECTOR_ID.INJECTED ? void 0 : { rdns: n.id },
          provider: r,
          chain: this.namespace,
          chains: [],
        },
      });
    }
    async writeSolanaTransaction() {
      return Promise.resolve({ hash: `` });
    }
    async signMessage(e) {
      try {
        if (e.connectorId === M.CONNECTOR_ID.WALLET_CONNECT && e.provider) {
          let t = p(e.message) ? e.message : a(e.message);
          return {
            signature: await e.provider.request(
              { method: `personal_sign`, params: [t, e.address] },
              e.caipNetworkId
            ),
          };
        }
        return {
          signature: await Ae(this.wagmiConfig, {
            message: e.message,
            account: e.address,
          }),
        };
      } catch {
        throw Error(`WagmiAdapter:signMessage - Sign message failed`);
      }
    }
    async sendTransaction(e) {
      let { chainId: t, address: n } = V(this.wagmiConfig),
        r = this.wagmiChains?.find((e) => e.id === t),
        i = {
          account: n,
          to: e.to,
          value: Number.isNaN(Number(e.value)) ? BigInt(0) : BigInt(e.value),
          gas: e.gas ? BigInt(e.gas) : void 0,
          gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
          data: e.data,
          chain: r,
          type: `legacy`,
          parameters: [`nonce`],
        };
      await Oe(this.wagmiConfig, i);
      let a = await ke(this.wagmiConfig, i);
      return (
        await Me(this.wagmiConfig, { hash: a, timeout: 25e3 }), { hash: a }
      );
    }
    async writeContract(e) {
      let { caipNetwork: t, ...n } = e,
        r = Number(O.caipNetworkIdToNumber(t.caipNetworkId)),
        i = this.wagmiChains?.find((e) => e.id === r);
      return {
        hash: await Le(this.wagmiConfig, {
          chain: i,
          address: n.tokenAddress,
          account: n.fromAddress,
          abi: n.abi,
          functionName: n.method,
          args: n.args,
          __mode: `prepared`,
        }),
      };
    }
    async estimateGas(e) {
      try {
        return {
          gas: await Ee(this.wagmiConfig, {
            account: e.address,
            to: e.to,
            data: e.data,
            type: `legacy`,
          }),
        };
      } catch {
        throw Error(`WagmiAdapter:estimateGas - error estimating gas`);
      }
    }
    parseUnits(e) {
      return te(e.value, e.decimals);
    }
    formatUnits(e) {
      return b(e.value, e.decimals);
    }
    async addWagmiConnector(e) {
      if (!this.namespace)
        throw Error(`WagmiAdapter:addWagmiConnector - namespace is required`);
      let { enableEIP6963: t, enableInjected: n } = E.state || {},
        r = e.type === M.CONNECTOR_ID.INJECTED,
        i = e.id === M.CONNECTOR_ID.INJECTED;
      if (
        (i && n === !1) ||
        (r && !i && t === !1) ||
        e.id === M.CONNECTOR_ID.AUTH ||
        e.id === M.CONNECTOR_ID.WALLET_CONNECT
      )
        return;
      let a;
      e.id !== M.CONNECTOR_ID.BASE_ACCOUNT &&
        (a = await e.getProvider().catch(() => void 0));
      let o = me.state.connectorImages;
      this.addConnector({
        id: e.id,
        explorerId:
          j.ConnectorExplorerIds[e.id] ?? j.ConnectorExplorerIds[e.name],
        imageUrl: o?.[e.id] ?? e.icon,
        name: j.ConnectorNamesMap[e.id] ?? e.name,
        imageId: j.ConnectorImageIds[e.id],
        type: j.ConnectorTypesMap[e.type] ?? `EXTERNAL`,
        info: e.id === M.CONNECTOR_ID.INJECTED ? void 0 : { rdns: e.id },
        provider: a,
        chain: this.namespace,
        chains: [],
      });
    }
    async syncConnectors() {
      Fe(this.wagmiConfig, {
        onChange: (e) => {
          e.forEach((e) => this.addWagmiConnector(e));
        },
      }),
        this.addWagmiConnectors(),
        await Promise.all(
          this.wagmiConfig.connectors.map((e) => this.addWagmiConnector(e))
        ),
        await this.addThirdPartyConnectors();
    }
    async syncConnections() {
      let e = this.connectors
        .filter((e) => {
          let { hasDisconnected: t, hasConnected: n } =
            I.getConnectorStorageInfo(e.id, this.namespace);
          return !t && n;
        })
        .map((e) => this.getWagmiConnector(e.id))
        .filter(Boolean);
      await G(this.wagmiConfig, { connectors: e });
    }
    async syncConnection(e) {
      let { id: t, chainId: n } = e,
        r = U(this.wagmiConfig).find((e) => e.connector.id === t),
        i = await this.getWagmiConnector(t)?.getProvider();
      if (D.isSafeApp() && t === M.CONNECTOR_ID.SAFE && !r?.accounts.length) {
        let e = this.getWagmiConnector(`safe`);
        if (e) {
          let t = await R(this.wagmiConfig, {
              connector: e,
              chainId: Number(n),
            }),
            i = await e.getProvider();
          return {
            chainId: Number(n),
            address: this.toChecksummedAddress(t.accounts[0]),
            provider: i,
            type: r?.connector.type?.toUpperCase(),
            id: r?.connector.id,
          };
        }
      }
      return {
        chainId: Number(r?.chainId),
        address: this.toChecksummedAddress(r?.accounts[0]),
        provider: i,
        type: r?.connector.type?.toUpperCase(),
        id: r?.connector.id,
      };
    }
    async connectWalletConnect(e) {
      try {
        let t = this.getWalletConnectConnector();
        await t.authenticate();
        let n = this.getWagmiConnector(`walletConnect`);
        if (!n)
          throw Error(
            `UniversalAdapter:connectWalletConnect - connector not found`
          );
        let r = await R(this.wagmiConfig, {
          connector: n,
          chainId: e ? Number(e) : void 0,
        });
        return (
          r.chainId !== Number(e) &&
            (await je(this.wagmiConfig, { chainId: r.chainId })),
          { clientId: await t.provider.client.core.crypto.getClientId() }
        );
      } catch (e) {
        throw e instanceof h || ge.isUserRejectedRequestError(e)
          ? new ye(e)
          : e;
      }
    }
    async connect(e) {
      try {
        let {
            id: t,
            address: n,
            provider: r,
            type: i,
            info: a,
            chainId: o,
            socialUri: s,
          } = e,
          c = this.getWagmiConnector(t);
        if (!c)
          throw Error(
            `connectionControllerClient:connectExternal - connector is undefined`
          );
        r &&
          a &&
          c.id === M.CONNECTOR_ID.EIP6963 &&
          c.setEip6963Wallet?.({ provider: r, info: a });
        let l = this.wagmiConfig.state?.connections?.get(c.uid);
        if (l) {
          await this.wagmiConfig.storage?.setItem(`recentConnectorId`, c.id);
          let e = [...l.accounts].sort((e, t) =>
            I.isLowerCaseMatch(e, n) ? -1 : +!!I.isLowerCaseMatch(t, n)
          );
          return (
            this.wagmiConfig?.setState((t) => ({
              ...t,
              connections: new Map(t.connections).set(c.uid, {
                accounts: e,
                chainId: l.chainId,
                connector: l.connector,
              }),
              current: c.uid,
              status: `connected`,
            })),
            {
              address: this.toChecksummedAddress(e[0]),
              chainId: l.chainId,
              provider: r,
              type: i,
              id: t,
            }
          );
        }
        let u = await R(this.wagmiConfig, {
            connector: c,
            chainId: o ? Number(o) : void 0,
            socialUri: s,
          }),
          d = r ?? (await c.getProvider());
        return {
          address: this.toChecksummedAddress(u.accounts[0]),
          chainId: u.chainId,
          provider: d,
          type: i,
          id: t,
        };
      } catch (e) {
        throw e instanceof h || ge.isUserRejectedRequestError(e)
          ? new ye(e)
          : e;
      }
    }
    get connections() {
      return Array.from(this.wagmiConfig.state.connections.values()).map(
        (e) => ({
          accounts: e.accounts.map((e) => ({
            address: this.toChecksummedAddress(e),
          })),
          connectorId: e.connector.id,
        })
      );
    }
    async reconnect(e) {
      let { id: t } = e,
        n = this.getWagmiConnector(t);
      if (!n)
        throw Error(
          `connectionControllerClient:connectExternal - connector is undefined`
        );
      await G(this.wagmiConfig, { connectors: [n] });
    }
    async getBalance(e) {
      let t = e.address,
        n = this.getCaipNetworks().find((t) => t.id === e.chainId);
      if (!t) return Promise.resolve({ balance: `0.00`, symbol: `ETH` });
      if (n && this.wagmiConfig) {
        let t = `${n.caipNetworkId}:${e.address}`,
          r = this.balancePromises[t];
        if (r) return r;
        let i = T.getNativeBalanceCacheForCaipAddress(t);
        return i
          ? { balance: i.balance, symbol: i.symbol }
          : ((this.balancePromises[t] = new Promise(async (r) => {
              try {
                let i = Number(e.chainId),
                  a = await De(this.wagmiConfig, {
                    address: e.address,
                    chainId: i,
                    token: e.tokens?.[n.caipNetworkId]?.address,
                  });
                T.updateNativeBalanceCache({
                  caipAddress: t,
                  balance: a.formatted,
                  symbol: a.symbol,
                  timestamp: Date.now(),
                }),
                  r({ balance: a.formatted, symbol: a.symbol });
              } catch (e) {
                console.warn(
                  `Appkit:WagmiAdapter:getBalance - Error getting balance`,
                  e
                ),
                  r({ balance: `0.00`, symbol: `ETH` });
              }
            }).finally(() => {
              delete this.balancePromises[t];
            })),
            this.balancePromises[t] || { balance: `0.00`, symbol: `ETH` });
      }
      return { balance: ``, symbol: `` };
    }
    getWalletConnectProvider() {
      return this.getWagmiConnector(`walletConnect`)?.provider;
    }
    async disconnect(e) {
      if (e.id) {
        let t = this.getWagmiConnector(e.id),
          n = U(this.wagmiConfig).find((t) =>
            I.isLowerCaseMatch(t.connector.id, e.id)
          );
        return (
          await Te(this.wagmiConfig, { connector: t }),
          E.state.enableReconnect === !1 && this.deleteConnection(e.id),
          n
            ? {
                connections: [
                  {
                    accounts: n.accounts.map((e) => ({
                      address: this.toChecksummedAddress(e),
                    })),
                    connectorId: n.connector.id,
                  },
                ],
              }
            : { connections: [] }
        );
      }
      return this.disconnectAll();
    }
    async disconnectAll() {
      let e = U(this.wagmiConfig),
        t = await Promise.allSettled(
          e.map(async (e) => {
            let t = this.getWagmiConnector(e.connector.id);
            return t && (await Te(this.wagmiConfig, { connector: t })), e;
          })
        );
      return (
        this.wagmiConfig.state.connections.clear(),
        {
          connections: t
            .filter((e) => e.status === `fulfilled`)
            .map(({ value: e }) => ({
              accounts: e.accounts.map((e) => ({
                address: this.toChecksummedAddress(e),
              })),
              connectorId: e.connector.id,
            })),
        }
      );
    }
    async switchNetwork(e) {
      let { caipNetwork: t } = e,
        n = this.wagmiConfig.chains.find(
          (e) => e.id.toString() === t.id.toString()
        );
      if (!n)
        throw Error(
          `connectionControllerClient:switchNetwork - wagmiChain is undefined`
        );
      let {
          name: r,
          nativeCurrency: i,
          rpcUrls: a,
          blockExplorers: o,
          id: s,
        } = n,
        c = t.rpcUrls?.chainDefault?.http?.[0] ?? a.default.http[0] ?? ``,
        l = o?.default.url ?? t.blockExplorers?.default?.url ?? ``,
        u = i ?? t.nativeCurrency,
        d = r ?? t.name;
      await je(this.wagmiConfig, {
        chainId: s,
        addEthereumChainParameter: {
          chainName: d,
          nativeCurrency: u,
          rpcUrls: [c],
          blockExplorerUrls: [l],
        },
      }),
        await super.switchNetwork(e);
    }
    async getCapabilities(e) {
      if (!this.wagmiConfig)
        throw Error(
          `connectionControllerClient:getCapabilities - wagmiConfig is undefined`
        );
      let t = U(this.wagmiConfig)[0],
        n = t ? this.getWagmiConnector(t.connector.id) : null;
      if (!n)
        throw Error(
          `connectionControllerClient:getCapabilities - connector is undefined`
        );
      let r = await n.getProvider();
      if (!r)
        throw Error(
          `connectionControllerClient:getCapabilities - provider is undefined`
        );
      return await r.request({ method: `wallet_getCapabilities`, params: [e] });
    }
    async grantPermissions(e) {
      if (!this.wagmiConfig)
        throw Error(
          `connectionControllerClient:grantPermissions - wagmiConfig is undefined`
        );
      let t = U(this.wagmiConfig)[0],
        n = t ? this.getWagmiConnector(t.connector.id) : null;
      if (!n)
        throw Error(
          `connectionControllerClient:grantPermissions - connector is undefined`
        );
      let r = await n.getProvider();
      if (!r)
        throw Error(
          `connectionControllerClient:grantPermissions - provider is undefined`
        );
      return r.request({ method: `wallet_grantPermissions`, params: e });
    }
    async revokePermissions(e) {
      if (!this.wagmiConfig)
        throw Error(
          `connectionControllerClient:revokePermissions - wagmiConfig is undefined`
        );
      let t = U(this.wagmiConfig)[0],
        n = t ? this.getWagmiConnector(t.connector.id) : null;
      if (!n)
        throw Error(
          `connectionControllerClient:revokePermissions - connector is undefined`
        );
      let r = await n.getProvider();
      if (!r)
        throw Error(
          `connectionControllerClient:revokePermissions - provider is undefined`
        );
      return r.request({ method: `wallet_revokePermissions`, params: e });
    }
    async walletGetAssets(e) {
      if (!this.wagmiConfig)
        throw Error(
          `connectionControllerClient:walletGetAssets - wagmiConfig is undefined`
        );
      let t = U(this.wagmiConfig)[0],
        n = t ? this.getWagmiConnector(t.connector.id) : null;
      if (!n)
        throw Error(
          `connectionControllerClient:walletGetAssets - connector is undefined`
        );
      let r = await n.getProvider();
      if (!r)
        throw Error(
          `connectionControllerClient:walletGetAssets - provider is undefined`
        );
      return r.request({ method: `wallet_getAssets`, params: [e] });
    }
    setAuthProvider(e) {
      if (!this.namespace)
        throw Error(`WagmiAdapter:setAuthProvider - namespace is required`);
      this.addConnector({
        id: M.CONNECTOR_ID.AUTH,
        type: `AUTH`,
        name: M.CONNECTOR_NAMES.AUTH,
        provider: e,
        imageId: j.ConnectorImageIds[M.CONNECTOR_ID.AUTH],
        chain: this.namespace,
        chains: [],
      });
    }
    async setUniversalProvider(e) {
      e.on(`connect`, () => {
        let e = U(this.wagmiConfig),
          t = this.getWagmiConnector(`walletConnect`);
        if (t && !e.find((e) => e.connector.id === t.id)) {
          if (A.state.activeChain === `eip155`) return;
          G(this.wagmiConfig, { connectors: [t] });
        }
      });
      let t = it({ universalProvider: e });
      return (
        this.configureInternalConnector(t),
        this.addConnector(
          new Se({
            provider: e,
            caipNetworks: this.getCaipNetworks(),
            namespace: `eip155`,
          })
        ),
        Promise.resolve()
      );
    }
    toChecksummedAddress(e) {
      if (!e) return e;
      try {
        return f(e.toLowerCase());
      } catch {
        return e;
      }
    }
  };
export { ut as WagmiAdapter, rt as authConnector, K as t };
