import { o as e } from "./rolldown-runtime-C_s2cVnS.js";
import { w as t } from "./react-Cn3k3YTV.js";
var n = e(t(), 1),
  r = `(max-width: 760px)`;
function i(e) {
  let [t, r] = (0, n.useState)(() => window.matchMedia(e).matches);
  return (
    (0, n.useEffect)(() => {
      let t = window.matchMedia(e),
        n = () => r(t.matches);
      return (
        n(),
        t.addEventListener(`change`, n),
        () => t.removeEventListener(`change`, n)
      );
    }, [e]),
    t
  );
}
var a = () => i(r);
export { i as n, a as r, r as t };
