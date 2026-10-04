import {
  K as e,
  M as t,
  k as n,
  q as r,
  st as i,
} from "./ModalController-CZlcBei4.js";
var a = r({ message: ``, variant: `info`, open: !1 }),
  o = n({
    state: a,
    subscribeKey(t, n) {
      return e(a, t, n);
    },
    open(e, n) {
      let { debug: r } = t.state,
        { code: o, displayMessage: s, debugMessage: c } = e;
      if ((s && r && ((a.message = s), (a.variant = n), (a.open = !0)), c)) {
        if (!i.IS_DEVELOPMENT) return;
        let e = typeof c == `function` ? c() : c,
          t = o ? { code: o } : void 0;
        n === `error`
          ? console.error(e, t)
          : n === `warning`
          ? console.warn(e, t)
          : console.info(e, t);
      }
    },
    warn(e, t, n) {
      (a.open = !0),
        (a.message = e),
        (a.variant = `warning`),
        t && console.warn(t, n);
    },
    close() {
      (a.open = !1), (a.message = ``), (a.variant = `info`);
    },
  });
export { o as t };
