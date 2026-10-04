import {
  _ as e,
  a as t,
  b as n,
  c as r,
  f as i,
  g as a,
  h as o,
  l as s,
  n as c,
  o as l,
  p as u,
  r as d,
  s as f,
  t as p,
  u as m,
  v as h,
  y as g,
} from "./schemas-CdEveidJ.js";
var _ = {
  name: `Paws of Sherwood`,
  shortName: `Paws`,
  tokenSymbol: `PAWS`,
  tokenDisplay: `$PAWS`,
  hubName: `Sherwood Hub`,
  worldName: `Sherwood`,
  catSerialPrefix: `PAWS`,
  demoLabel: `DEMO`,
  simulatedLabel: `SIMULATED`,
};
function v(e) {
  return n(p, e);
}
var y = [`COMMON`, `UNCOMMON`, `RARE`, `EPIC`, `LEGENDARY`, `MYTHIC`],
  b = c(y),
  ee = {
    COMMON: `Common`,
    UNCOMMON: `Uncommon`,
    RARE: `Rare`,
    EPIC: `Epic`,
    LEGENDARY: `Legendary`,
    MYTHIC: `Mythic`,
  },
  x = { COMMON: 0, UNCOMMON: 1, RARE: 2, EPIC: 3, LEGENDARY: 4, MYTHIC: 5 },
  te = [
    `LUMBERJACK`,
    `ENGINEER`,
    `MINER`,
    `FARMER`,
    `MERCHANT`,
    `ENERGY_WORKER`,
  ],
  S = c(te),
  ne = {
    LUMBERJACK: `Lumberjack`,
    ENGINEER: `Engineer`,
    MINER: `Miner`,
    FARMER: `Farmer`,
    MERCHANT: `Merchant`,
    ENERGY_WORKER: `Energy Worker`,
  },
  re = [`grey`, `ginger`, `caramel`, `tabby`, `fawn`, `lilac`, `blue`, `rose`],
  C = [`productivity`, `efficiency`, `luck`, `endurance`];
c(C);
var ie = m({
    productivity: s().int().min(1).max(100),
    efficiency: s().int().min(1).max(100),
    luck: s().int().min(1).max(100),
    endurance: s().int().min(1).max(100),
  }),
  ae = [`PREPARING`, `SUCCESS`, `FAILED`],
  oe = [`IN_PROGRESS`, `CLAIMED`],
  w = [`CAT`, `TICKET`, `CREDIT`],
  T = [`WOOD`, `ORE`, `FOOD`, `ENERGY`, `COMPONENTS`],
  E = c(T),
  se = {
    WOOD: `Wood`,
    ORE: `Ore`,
    FOOD: `Food`,
    ENERGY: `Energy`,
    COMPONENTS: `Components`,
  },
  ce = [
    `FORESTRY`,
    `AGRICULTURE`,
    `ENERGY`,
    `MINING`,
    `COMMERCE`,
    `BROKERAGE`,
    `COMPUTE`,
  ],
  D = c(ce),
  le = {
    FORESTRY: `Forestry`,
    AGRICULTURE: `Agriculture`,
    ENERGY: `Energy`,
    MINING: `Mining`,
    COMMERCE: `Commerce`,
    BROKERAGE: `Brokerage`,
    COMPUTE: `Compute`,
  },
  ue = [1, 5, 10, 30, 60, 120, 240, 480],
  de = [3],
  fe = [...de, ...ue],
  pe = r(fe);
function me(e) {
  return e % 60 == 0 ? `${e / 60}h` : `${e}m`;
}
var he = [`ACTIVE`, `CLAIMED`, `CANCELLED`],
  ge = [
    `LAND_EXPANSION`,
    `BUILDING_UPGRADE`,
    `STATION_DEPLOYMENT`,
    `STATION_RECYCLING`,
    `BLUEPRINT_CRAFT`,
    `RECRUITMENT`,
    `PRODUCTION_JOB`,
    `CAT_UPGRADE`,
    `ACCLIMATION`,
    `QUICK_NAP`,
    `BUILDING_REPAIR`,
  ],
  _e = [
    `LAND_EXPANSION`,
    `BUILDING_UPGRADE`,
    `RECRUITMENT`,
    `CAT_UPGRADE`,
    `BUSINESS_PERMIT`,
    `STATION_RECYCLING`,
    `BLUEPRINT_CRAFT`,
    `BUILDING_REPAIR`,
  ],
  ve = [
    `HOUSE`,
    `WORKSHOP`,
    `QUARRY`,
    `GARDEN`,
    `LUMBER_CAMP`,
    `COFFEE_FARM`,
    `POWER_STATION`,
    `MINE`,
    `TRADING_POST`,
    `SHERWOOD_EXCHANGE`,
    `GPU_FARM`,
  ],
  O = c(ve),
  ye = {
    HOUSE: `House`,
    WORKSHOP: `Workshop`,
    QUARRY: `Quarry`,
    GARDEN: `Garden`,
    LUMBER_CAMP: `Lumber Camp`,
    COFFEE_FARM: `Coffee Farm`,
    POWER_STATION: `Power Station`,
    MINE: `Mine`,
    TRADING_POST: `Trading Post`,
    SHERWOOD_EXCHANGE: `Sherwood Exchange`,
    GPU_FARM: `GPU Farm`,
  },
  be = [`ACTIVE`, `CONSTRUCTING`, `UPGRADING`, `REPAIRING`, `REMOVED`],
  xe = [
    `STARTER`,
    `CORE`,
    `PERMIT`,
    `RECYCLE`,
    `CRAFT`,
    `LEGACY`,
    `ADMIN`,
    `SEED`,
    `DEBUG`,
  ],
  Se = [`IN_PROGRESS`, `REVEALED`],
  Ce = [`CAT`, `TICKET`, `RECYCLE`, `STARTER`],
  we = [`LOCKED`, `READY`, `CLAIMED`, `DISABLED`],
  Te = [`IN_PROGRESS`, `COMPLETED`],
  Ee = [`IN_PROGRESS`, `COMPLETED`],
  De = [`DOUBLE_OUTPUT`, `PERMIT_TICKET`, `FRAGMENTS`],
  Oe = {
    DOUBLE_OUTPUT: `Double harvest`,
    PERMIT_TICKET: `Free Business Permit`,
    FRAGMENTS: `Blueprint Fragments`,
  },
  ke = [`HOUSEHOLD`, `GOLDEN_PAW`],
  Ae = [`SCHEDULED`, `OPEN`, `CLOSED`, `FINALIZED`],
  je = [`LOCKED`, `UNLOCKED`, `WITHDRAWN`],
  Me = [`PENDING`, `CONFIRMED`, `EXPIRED`, `CANCELLED`],
  Ne = [
    `REQUESTED`,
    `REVIEW`,
    `SUBMITTING`,
    `SUBMITTED`,
    `CONFIRMED`,
    `FAILED`,
    `REFUNDED`,
  ],
  Pe = [`UNFUNDED`, `FUNDED`, `PAUSED`],
  Fe = [`EXTERNAL`, `CAT`],
  Ie = [`POOL`, `CREATOR`],
  Le =
    `WELCOME.FIRST_JOB.FAST_TRACK.CLAIM_FIRST_JOB.MEET_THE_PLOT.TOWN_DIRECTORY.VISIT_TRAINER.VISIT_TAVERN.REACH_LEVEL_3.CLAIM_PERMIT.PLACE_BUSINESS.MOVE_BUSINESS.ROTATE_BUSINESS.MANAGE_BUSINESS.FIRST_BUSINESS.START_SECOND_CAT.VISIT_REWARDS.VISIT_MARKET.VISIT_LEADERBOARD.VISIT_STAKING.MEET_SECOND_CAT.MANAGE_CATS.RELEASE_PREVIEW.CAT_RULES.TWO_CATS_WORKING.GROW_YOUR_LAND.FINISH.COMPLETE`.split(
      `.`
    ),
  Re = c(Le),
  ze = [`RESUMED`, `ERROR`],
  Be = c([
    `TRAINER`,
    `TAVERN`,
    `PERMIT_OFFICE`,
    `REWARDS`,
    `MARKET`,
    `LEADERBOARD`,
    `STAKING`,
  ]),
  Ve = [`VISIT_LEADERBOARD`, `VISIT_STAKING`],
  He = [
    {
      id: `FIRST_JOB`,
      label: `Complete your first Lumber Camp job`,
      doneBy: `CLAIM_FIRST_JOB`,
    },
    {
      id: `FAST_TRACK`,
      label: `Use your free Fast Track`,
      doneBy: `FAST_TRACK`,
    },
    { id: `TRAINER`, label: `Visit the Trainer`, doneBy: `VISIT_TRAINER` },
    {
      id: `TAVERN`,
      label: `Visit the Recruitment Tavern`,
      doneBy: `VISIT_TAVERN`,
    },
    {
      id: `LEVEL_3`,
      label: `Reach Starter Cat Level 3`,
      doneBy: `REACH_LEVEL_3`,
    },
    {
      id: `PERMIT`,
      label: `Claim your free Business Permit`,
      doneBy: `CLAIM_PERMIT`,
    },
    {
      id: `PLACE`,
      label: `Place your first business`,
      doneBy: `PLACE_BUSINESS`,
    },
    { id: `MOVE`, label: `Move your business`, doneBy: `MOVE_BUSINESS` },
    { id: `ROTATE`, label: `Rotate your business`, doneBy: `ROTATE_BUSINESS` },
    { id: `REWARDS`, label: `Visit Rewards`, doneBy: `VISIT_REWARDS` },
    { id: `MARKET`, label: `Visit the Marketplace`, doneBy: `VISIT_MARKET` },
    {
      id: `SECOND_CAT`,
      label: `Recruit your second Cat`,
      doneBy: `MEET_SECOND_CAT`,
    },
    {
      id: `MANAGE_CATS`,
      label: `Learn to manage your Cats`,
      doneBy: `CAT_RULES`,
    },
    {
      id: `TWO_CATS`,
      label: `Put two Cats to work`,
      doneBy: `TWO_CATS_WORKING`,
    },
  ],
  Ue = [`ACTIVE`, `SOLD`, `CANCELLED`],
  We = [`OPEN`, `COMPLETED`, `CANCELLED`, `EXPIRED`],
  Ge = [`SUPER_ADMIN`, `ADMIN`, `MODERATOR`, `ANALYST`],
  Ke = [
    `HIGHEST_CAT_LEVEL`,
    `MOST_CATS`,
    `LARGEST_PROPERTY`,
    `WEEKLY_PRODUCTION`,
    `COMPUTE`,
    `FORESTRY`,
    `MINING`,
    `AGRICULTURE`,
    `COMMERCE`,
    `ENERGY`,
    `BROKERAGE`,
  ],
  qe = c(Ke),
  Je = {
    HIGHEST_CAT_LEVEL: `Highest Cat Level`,
    MOST_CATS: `Most Cats`,
    LARGEST_PROPERTY: `Largest Property`,
    WEEKLY_PRODUCTION: `Highest Weekly Production`,
    COMPUTE: `Highest Compute`,
    FORESTRY: `Highest Forestry`,
    MINING: `Highest Mining`,
    AGRICULTURE: `Highest Agriculture`,
    COMMERCE: `Highest Commerce`,
    ENERGY: `Highest Energy`,
    BROKERAGE: `Highest Brokerage`,
  },
  Ye = [`STARTER_LEVEL_3`, `FIRST_RECRUIT`, `PLOT_TIER_2`],
  Xe = {
    STARTER_LEVEL_3: `Their Starter Cat reaches level 3`,
    FIRST_RECRUIT: `They recruit their first Cat`,
    PLOT_TIER_2: `They expand to a Smallholding`,
  },
  Ze = [`GRANTED`, `HELD`, `RELEASED`, `REVOKED`],
  Qe = [`OPEN`, `CLOSED`, `FINALIZED`],
  $e = [`GROWING`, `FUNDED`, `EMPTY`],
  et = [`PENDING`, `APPROVED`, `REJECTED`, `EXPIRED`, `FINALIZED`],
  tt = [`STANDARD`, `GREAT`, `FEATURED`],
  nt = [
    `NOT_ABOUT_GAME`,
    `LOW_QUALITY_SPAM`,
    `MISSING_DISCLOSURE`,
    `NO_PAID_PARTNERSHIP_LABEL`,
    `NOT_ORIGINAL`,
    `DUPLICATE_CONTENT`,
    `WRONG_ACCOUNT`,
    `SUSPICIOUS_ENGAGEMENT`,
    `DELETED_POST`,
    `OUTSIDE_REWARD_PERIOD`,
    `OTHER`,
  ],
  rt = [`ELIGIBLE`, `INELIGIBLE`, `VERIFICATION_REQUIRED`, `HOLD`],
  it = [`READY`, `HELD`, `CLAIMED`, `PAID`, `EXPIRED`, `RELEASED`],
  at = [
    `PENDING_REVIEW`,
    `APPROVED`,
    `ON_HOLD`,
    `REJECTED`,
    `EXPIRED`,
    `COUNTED`,
  ],
  ot = [`REWARD_POOLS`, `UNALLOCATED`],
  st = 9e15,
  ct = 1e9,
  lt = `0123456789abcdef`,
  ut = `2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058`,
  dt = `3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789`,
  ft = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -st,
    maxE: st,
    crypto: !1,
  },
  pt,
  k,
  A = !0,
  mt = `[DecimalError] `,
  j = mt + `Invalid argument: `,
  ht = mt + `Precision limit exceeded`,
  gt = mt + `crypto unavailable`,
  _t = `[object Decimal]`,
  M = Math.floor,
  N = Math.pow,
  vt = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  yt = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  bt = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  xt = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  P = 1e7,
  F = 7,
  St = 9007199254740991,
  Ct = ut.length - 1,
  wt = dt.length - 1,
  I = { toStringTag: _t };
(I.absoluteValue = I.abs =
  function () {
    var e = new this.constructor(this);
    return e.s < 0 && (e.s = 1), B(e);
  }),
  (I.ceil = function () {
    return B(new this.constructor(this), this.e + 1, 2);
  }),
  (I.clampedTo = I.clamp =
    function (e, t) {
      var n,
        r = this,
        i = r.constructor;
      if (((e = new i(e)), (t = new i(t)), !e.s || !t.s)) return new i(NaN);
      if (e.gt(t)) throw Error(j + t);
      return (n = r.cmp(e)), n < 0 ? e : r.cmp(t) > 0 ? t : new i(r);
    }),
  (I.comparedTo = I.cmp =
    function (e) {
      var t,
        n,
        r,
        i,
        a = this,
        o = a.d,
        s = (e = new a.constructor(e)).d,
        c = a.s,
        l = e.s;
      if (!o || !s)
        return !c || !l
          ? NaN
          : c === l
          ? o === s
            ? 0
            : !o ^ (c < 0)
            ? 1
            : -1
          : c;
      if (!o[0] || !s[0]) return o[0] ? c : s[0] ? -l : 0;
      if (c !== l) return c;
      if (a.e !== e.e) return (a.e > e.e) ^ (c < 0) ? 1 : -1;
      for (r = o.length, i = s.length, t = 0, n = r < i ? r : i; t < n; ++t)
        if (o[t] !== s[t]) return (o[t] > s[t]) ^ (c < 0) ? 1 : -1;
      return r === i ? 0 : (r > i) ^ (c < 0) ? 1 : -1;
    }),
  (I.cosine = I.cos =
    function () {
      var e,
        t,
        n = this,
        r = n.constructor;
      return n.d
        ? n.d[0]
          ? ((e = r.precision),
            (t = r.rounding),
            (r.precision = e + Math.max(n.e, n.sd()) + F),
            (r.rounding = 1),
            (n = Dt(r, Vt(r, n))),
            (r.precision = e),
            (r.rounding = t),
            B(k == 2 || k == 3 ? n.neg() : n, e, t, !0))
          : new r(1)
        : new r(NaN);
    }),
  (I.cubeRoot = I.cbrt =
    function () {
      var e,
        t,
        n,
        r,
        i,
        a,
        o,
        s,
        c,
        l,
        u = this,
        d = u.constructor;
      if (!u.isFinite() || u.isZero()) return new d(u);
      for (
        A = !1,
          a = u.s * N(u.s * u, 1 / 3),
          !a || Math.abs(a) == 1 / 0
            ? ((n = L(u.d)),
              (e = u.e),
              (a = (e - n.length + 1) % 3) &&
                (n += a == 1 || a == -2 ? `0` : `00`),
              (a = N(n, 1 / 3)),
              (e = M((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
              a == 1 / 0
                ? (n = `5e` + e)
                : ((n = a.toExponential()),
                  (n = n.slice(0, n.indexOf(`e`) + 1) + e)),
              (r = new d(n)),
              (r.s = u.s))
            : (r = new d(a.toString())),
          o = (e = d.precision) + 3;
        ;

      )
        if (
          ((s = r),
          (c = s.times(s).times(s)),
          (l = c.plus(u)),
          (r = z(l.plus(u).times(s), l.plus(c), o + 2, 1)),
          L(s.d).slice(0, o) === (n = L(r.d)).slice(0, o))
        ) {
          if (
            ((n = n.slice(o - 3, o + 1)), n == `9999` || (!i && n == `4999`))
          ) {
            if (!i && (B(s, e + 1, 0), s.times(s).times(s).eq(u))) {
              r = s;
              break;
            }
            (o += 4), (i = 1);
          } else {
            (!+n || (!+n.slice(1) && n.charAt(0) == `5`)) &&
              (B(r, e + 1, 1), (t = !r.times(r).times(r).eq(u)));
            break;
          }
        }
      return (A = !0), B(r, e, d.rounding, t);
    }),
  (I.decimalPlaces = I.dp =
    function () {
      var e,
        t = this.d,
        n = NaN;
      if (t) {
        if (((e = t.length - 1), (n = (e - M(this.e / F)) * F), (e = t[e]), e))
          for (; e % 10 == 0; e /= 10) n--;
        n < 0 && (n = 0);
      }
      return n;
    }),
  (I.dividedBy = I.div =
    function (e) {
      return z(this, new this.constructor(e));
    }),
  (I.dividedToIntegerBy = I.divToInt =
    function (e) {
      var t = this,
        n = t.constructor;
      return B(z(t, new n(e), 0, 1, 1), n.precision, n.rounding);
    }),
  (I.equals = I.eq =
    function (e) {
      return this.cmp(e) === 0;
    }),
  (I.floor = function () {
    return B(new this.constructor(this), this.e + 1, 3);
  }),
  (I.greaterThan = I.gt =
    function (e) {
      return this.cmp(e) > 0;
    }),
  (I.greaterThanOrEqualTo = I.gte =
    function (e) {
      var t = this.cmp(e);
      return t == 1 || t === 0;
    }),
  (I.hyperbolicCosine = I.cosh =
    function () {
      var e,
        t,
        n,
        r,
        i,
        a = this,
        o = a.constructor,
        s = new o(1);
      if (!a.isFinite()) return new o(a.s ? 1 / 0 : NaN);
      if (a.isZero()) return s;
      (n = o.precision),
        (r = o.rounding),
        (o.precision = n + Math.max(a.e, a.sd()) + 4),
        (o.rounding = 1),
        (i = a.d.length),
        i < 32
          ? ((e = Math.ceil(i / 3)), (t = (1 / Bt(4, e)).toString()))
          : ((e = 16), (t = `2.3283064365386962890625e-10`)),
        (a = zt(o, 1, a.times(t), new o(1), !0));
      for (var c, l = e, u = new o(8); l--; )
        (c = a.times(a)), (a = s.minus(c.times(u.minus(c.times(u)))));
      return B(a, (o.precision = n), (o.rounding = r), !0);
    }),
  (I.hyperbolicSine = I.sinh =
    function () {
      var e,
        t,
        n,
        r,
        i = this,
        a = i.constructor;
      if (!i.isFinite() || i.isZero()) return new a(i);
      if (
        ((t = a.precision),
        (n = a.rounding),
        (a.precision = t + Math.max(i.e, i.sd()) + 4),
        (a.rounding = 1),
        (r = i.d.length),
        r < 3)
      )
        i = zt(a, 2, i, i, !0);
      else {
        (e = 1.4 * Math.sqrt(r)),
          (e = e > 16 ? 16 : e | 0),
          (i = i.times(1 / Bt(5, e))),
          (i = zt(a, 2, i, i, !0));
        for (var o, s = new a(5), c = new a(16), l = new a(20); e--; )
          (o = i.times(i)), (i = i.times(s.plus(o.times(c.times(o).plus(l)))));
      }
      return (a.precision = t), (a.rounding = n), B(i, t, n, !0);
    }),
  (I.hyperbolicTangent = I.tanh =
    function () {
      var e,
        t,
        n = this,
        r = n.constructor;
      return n.isFinite()
        ? n.isZero()
          ? new r(n)
          : ((e = r.precision),
            (t = r.rounding),
            (r.precision = e + 7),
            (r.rounding = 1),
            z(n.sinh(), n.cosh(), (r.precision = e), (r.rounding = t)))
        : new r(n.s);
    }),
  (I.inverseCosine = I.acos =
    function () {
      var e = this,
        t = e.constructor,
        n = e.abs().cmp(1),
        r = t.precision,
        i = t.rounding;
      return n === -1
        ? e.isZero()
          ? H(t, r + 4, i).times(0.5)
          : ((t.precision = r + 6),
            (t.rounding = 1),
            (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
            (t.precision = r),
            (t.rounding = i),
            e.times(2))
        : n === 0
        ? e.isNeg()
          ? H(t, r, i)
          : new t(0)
        : new t(NaN);
    }),
  (I.inverseHyperbolicCosine = I.acosh =
    function () {
      var e,
        t,
        n = this,
        r = n.constructor;
      return n.lte(1)
        ? new r(n.eq(1) ? 0 : NaN)
        : n.isFinite()
        ? ((e = r.precision),
          (t = r.rounding),
          (r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4),
          (r.rounding = 1),
          (A = !1),
          (n = n.times(n).minus(1).sqrt().plus(n)),
          (A = !0),
          (r.precision = e),
          (r.rounding = t),
          n.ln())
        : new r(n);
    }),
  (I.inverseHyperbolicSine = I.asinh =
    function () {
      var e,
        t,
        n = this,
        r = n.constructor;
      return !n.isFinite() || n.isZero()
        ? new r(n)
        : ((e = r.precision),
          (t = r.rounding),
          (r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6),
          (r.rounding = 1),
          (A = !1),
          (n = n.times(n).plus(1).sqrt().plus(n)),
          (A = !0),
          (r.precision = e),
          (r.rounding = t),
          n.ln());
    }),
  (I.inverseHyperbolicTangent = I.atanh =
    function () {
      var e,
        t,
        n,
        r,
        i = this,
        a = i.constructor;
      return i.isFinite()
        ? i.e >= 0
          ? new a(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
          : ((e = a.precision),
            (t = a.rounding),
            (r = i.sd()),
            Math.max(r, e) < 2 * -i.e - 1
              ? B(new a(i), e, t, !0)
              : ((a.precision = n = r - i.e),
                (i = z(i.plus(1), new a(1).minus(i), n + e, 1)),
                (a.precision = e + 4),
                (a.rounding = 1),
                (i = i.ln()),
                (a.precision = e),
                (a.rounding = t),
                i.times(0.5)))
        : new a(NaN);
    }),
  (I.inverseSine = I.asin =
    function () {
      var e,
        t,
        n,
        r,
        i = this,
        a = i.constructor;
      return i.isZero()
        ? new a(i)
        : ((t = i.abs().cmp(1)),
          (n = a.precision),
          (r = a.rounding),
          t === -1
            ? ((a.precision = n + 6),
              (a.rounding = 1),
              (i = i.div(new a(1).minus(i.times(i)).sqrt().plus(1)).atan()),
              (a.precision = n),
              (a.rounding = r),
              i.times(2))
            : t === 0
            ? ((e = H(a, n + 4, r).times(0.5)), (e.s = i.s), e)
            : new a(NaN));
    }),
  (I.inverseTangent = I.atan =
    function () {
      var e,
        t,
        n,
        r,
        i,
        a,
        o,
        s,
        c,
        l = this,
        u = l.constructor,
        d = u.precision,
        f = u.rounding;
      if (!l.isFinite()) {
        if (!l.s) return new u(NaN);
        if (d + 4 <= wt) return (o = H(u, d + 4, f).times(0.5)), (o.s = l.s), o;
      } else if (l.isZero()) return new u(l);
      else if (l.abs().eq(1) && d + 4 <= wt)
        return (o = H(u, d + 4, f).times(0.25)), (o.s = l.s), o;
      for (
        u.precision = s = d + 10,
          u.rounding = 1,
          n = Math.min(28, (s / F + 2) | 0),
          e = n;
        e;
        --e
      )
        l = l.div(l.times(l).plus(1).sqrt().plus(1));
      for (
        A = !1,
          t = Math.ceil(s / F),
          r = 1,
          c = l.times(l),
          o = new u(l),
          i = l;
        e !== -1;

      )
        if (
          ((i = i.times(c)),
          (a = o.minus(i.div((r += 2)))),
          (i = i.times(c)),
          (o = a.plus(i.div((r += 2)))),
          o.d[t] !== void 0)
        )
          for (e = t; o.d[e] === a.d[e] && e--; );
      return (
        n && (o = o.times(2 << (n - 1))),
        (A = !0),
        B(o, (u.precision = d), (u.rounding = f), !0)
      );
    }),
  (I.isFinite = function () {
    return !!this.d;
  }),
  (I.isInteger = I.isInt =
    function () {
      return !!this.d && M(this.e / F) > this.d.length - 2;
    }),
  (I.isNaN = function () {
    return !this.s;
  }),
  (I.isNegative = I.isNeg =
    function () {
      return this.s < 0;
    }),
  (I.isPositive = I.isPos =
    function () {
      return this.s > 0;
    }),
  (I.isZero = function () {
    return !!this.d && this.d[0] === 0;
  }),
  (I.lessThan = I.lt =
    function (e) {
      return this.cmp(e) < 0;
    }),
  (I.lessThanOrEqualTo = I.lte =
    function (e) {
      return this.cmp(e) < 1;
    }),
  (I.logarithm = I.log =
    function (e) {
      var t,
        n,
        r,
        i,
        a,
        o,
        s,
        c,
        l = this,
        u = l.constructor,
        d = u.precision,
        f = u.rounding,
        p = 5;
      if (e == null) (e = new u(10)), (t = !0);
      else {
        if (((e = new u(e)), (n = e.d), e.s < 0 || !n || !n[0] || e.eq(1)))
          return new u(NaN);
        t = e.eq(10);
      }
      if (((n = l.d), l.s < 0 || !n || !n[0] || l.eq(1)))
        return new u(n && !n[0] ? -1 / 0 : l.s == 1 ? (n ? 0 : 1 / 0) : NaN);
      if (t) {
        if (n.length > 1) a = !0;
        else {
          for (i = n[0]; i % 10 == 0; ) i /= 10;
          a = i !== 1;
        }
      }
      if (
        ((A = !1),
        (s = d + p),
        (o = W(l, s)),
        (r = t ? kt(u, s + 10) : W(e, s)),
        (c = z(o, r, s, 1)),
        Tt(c.d, (i = d), f))
      )
        do
          if (
            ((s += 10),
            (o = W(l, s)),
            (r = t ? kt(u, s + 10) : W(e, s)),
            (c = z(o, r, s, 1)),
            !a)
          ) {
            +L(c.d).slice(i + 1, i + 15) + 1 == 0x5af3107a4000 &&
              (c = B(c, d + 1, 0));
            break;
          }
        while (Tt(c.d, (i += 10), f));
      return (A = !0), B(c, d, f);
    }),
  (I.minus = I.sub =
    function (e) {
      var t,
        n,
        r,
        i,
        a,
        o,
        s,
        c,
        l,
        u,
        d,
        f,
        p = this,
        m = p.constructor;
      if (((e = new m(e)), !p.d || !e.d))
        return (
          !p.s || !e.s
            ? (e = new m(NaN))
            : p.d
            ? (e.s = -e.s)
            : (e = new m(e.d || p.s !== e.s ? p : NaN)),
          e
        );
      if (p.s != e.s) return (e.s = -e.s), p.plus(e);
      if (
        ((l = p.d),
        (f = e.d),
        (s = m.precision),
        (c = m.rounding),
        !l[0] || !f[0])
      ) {
        if (f[0]) e.s = -e.s;
        else if (l[0]) e = new m(p);
        else return new m(c === 3 ? -0 : 0);
        return A ? B(e, s, c) : e;
      }
      if (
        ((n = M(e.e / F)), (u = M(p.e / F)), (l = l.slice()), (a = u - n), a)
      ) {
        for (
          d = a < 0,
            d
              ? ((t = l), (a = -a), (o = f.length))
              : ((t = f), (n = u), (o = l.length)),
            r = Math.max(Math.ceil(s / F), o) + 2,
            a > r && ((a = r), (t.length = 1)),
            t.reverse(),
            r = a;
          r--;

        )
          t.push(0);
        t.reverse();
      } else {
        for (
          r = l.length, o = f.length, d = r < o, d && (o = r), r = 0;
          r < o;
          r++
        )
          if (l[r] != f[r]) {
            d = l[r] < f[r];
            break;
          }
        a = 0;
      }
      for (
        d && ((t = l), (l = f), (f = t), (e.s = -e.s)),
          o = l.length,
          r = f.length - o;
        r > 0;
        --r
      )
        l[o++] = 0;
      for (r = f.length; r > a; ) {
        if (l[--r] < f[r]) {
          for (i = r; i && l[--i] === 0; ) l[i] = P - 1;
          --l[i], (l[r] += P);
        }
        l[r] -= f[r];
      }
      for (; l[--o] === 0; ) l.pop();
      for (; l[0] === 0; l.shift()) --n;
      return l[0]
        ? ((e.d = l), (e.e = Ot(l, n)), A ? B(e, s, c) : e)
        : new m(c === 3 ? -0 : 0);
    }),
  (I.modulo = I.mod =
    function (e) {
      var t,
        n = this,
        r = n.constructor;
      return (
        (e = new r(e)),
        !n.d || !e.s || (e.d && !e.d[0])
          ? new r(NaN)
          : !e.d || (n.d && !n.d[0])
          ? B(new r(n), r.precision, r.rounding)
          : ((A = !1),
            r.modulo == 9
              ? ((t = z(n, e.abs(), 0, 3, 1)), (t.s *= e.s))
              : (t = z(n, e, 0, r.modulo, 1)),
            (t = t.times(e)),
            (A = !0),
            n.minus(t))
      );
    }),
  (I.naturalExponential = I.exp =
    function () {
      return Pt(this);
    }),
  (I.naturalLogarithm = I.ln =
    function () {
      return W(this);
    }),
  (I.negated = I.neg =
    function () {
      var e = new this.constructor(this);
      return (e.s = -e.s), B(e);
    }),
  (I.plus = I.add =
    function (e) {
      var t,
        n,
        r,
        i,
        a,
        o,
        s,
        c,
        l,
        u,
        d = this,
        f = d.constructor;
      if (((e = new f(e)), !d.d || !e.d))
        return (
          !d.s || !e.s
            ? (e = new f(NaN))
            : d.d || (e = new f(e.d || d.s === e.s ? d : NaN)),
          e
        );
      if (d.s != e.s) return (e.s = -e.s), d.minus(e);
      if (
        ((l = d.d),
        (u = e.d),
        (s = f.precision),
        (c = f.rounding),
        !l[0] || !u[0])
      )
        return u[0] || (e = new f(d)), A ? B(e, s, c) : e;
      if (
        ((a = M(d.e / F)), (r = M(e.e / F)), (l = l.slice()), (i = a - r), i)
      ) {
        for (
          i < 0
            ? ((n = l), (i = -i), (o = u.length))
            : ((n = u), (r = a), (o = l.length)),
            a = Math.ceil(s / F),
            o = a > o ? a + 1 : o + 1,
            i > o && ((i = o), (n.length = 1)),
            n.reverse();
          i--;

        )
          n.push(0);
        n.reverse();
      }
      for (
        o = l.length,
          i = u.length,
          o - i < 0 && ((i = o), (n = u), (u = l), (l = n)),
          t = 0;
        i;

      )
        (t = ((l[--i] = l[i] + u[i] + t) / P) | 0), (l[i] %= P);
      for (t && (l.unshift(t), ++r), o = l.length; l[--o] == 0; ) l.pop();
      return (e.d = l), (e.e = Ot(l, r)), A ? B(e, s, c) : e;
    }),
  (I.precision = I.sd =
    function (e) {
      var t,
        n = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(j + e);
      return (
        n.d ? ((t = At(n.d)), e && n.e + 1 > t && (t = n.e + 1)) : (t = NaN), t
      );
    }),
  (I.round = function () {
    var e = this,
      t = e.constructor;
    return B(new t(e), e.e + 1, t.rounding);
  }),
  (I.sine = I.sin =
    function () {
      var e,
        t,
        n = this,
        r = n.constructor;
      return n.isFinite()
        ? n.isZero()
          ? new r(n)
          : ((e = r.precision),
            (t = r.rounding),
            (r.precision = e + Math.max(n.e, n.sd()) + F),
            (r.rounding = 1),
            (n = Rt(r, Vt(r, n))),
            (r.precision = e),
            (r.rounding = t),
            B(k > 2 ? n.neg() : n, e, t, !0))
        : new r(NaN);
    }),
  (I.squareRoot = I.sqrt =
    function () {
      var e,
        t,
        n,
        r,
        i,
        a,
        o = this,
        s = o.d,
        c = o.e,
        l = o.s,
        u = o.constructor;
      if (l !== 1 || !s || !s[0])
        return new u(!l || (l < 0 && (!s || s[0])) ? NaN : s ? o : 1 / 0);
      for (
        A = !1,
          l = Math.sqrt(+o),
          l == 0 || l == 1 / 0
            ? ((t = L(s)),
              (t.length + c) % 2 == 0 && (t += `0`),
              (l = Math.sqrt(t)),
              (c = M((c + 1) / 2) - (c < 0 || c % 2)),
              l == 1 / 0
                ? (t = `5e` + c)
                : ((t = l.toExponential()),
                  (t = t.slice(0, t.indexOf(`e`) + 1) + c)),
              (r = new u(t)))
            : (r = new u(l.toString())),
          n = (c = u.precision) + 3;
        ;

      )
        if (
          ((a = r),
          (r = a.plus(z(o, a, n + 2, 1)).times(0.5)),
          L(a.d).slice(0, n) === (t = L(r.d)).slice(0, n))
        ) {
          if (
            ((t = t.slice(n - 3, n + 1)), t == `9999` || (!i && t == `4999`))
          ) {
            if (!i && (B(a, c + 1, 0), a.times(a).eq(o))) {
              r = a;
              break;
            }
            (n += 4), (i = 1);
          } else {
            (!+t || (!+t.slice(1) && t.charAt(0) == `5`)) &&
              (B(r, c + 1, 1), (e = !r.times(r).eq(o)));
            break;
          }
        }
      return (A = !0), B(r, c, u.rounding, e);
    }),
  (I.tangent = I.tan =
    function () {
      var e,
        t,
        n = this,
        r = n.constructor;
      return n.isFinite()
        ? n.isZero()
          ? new r(n)
          : ((e = r.precision),
            (t = r.rounding),
            (r.precision = e + 10),
            (r.rounding = 1),
            (n = n.sin()),
            (n.s = 1),
            (n = z(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0)),
            (r.precision = e),
            (r.rounding = t),
            B(k == 2 || k == 4 ? n.neg() : n, e, t, !0))
        : new r(NaN);
    }),
  (I.times = I.mul =
    function (e) {
      var t,
        n,
        r,
        i,
        a,
        o,
        s,
        c,
        l,
        u = this,
        d = u.constructor,
        f = u.d,
        p = (e = new d(e)).d;
      if (((e.s *= u.s), !f || !f[0] || !p || !p[0]))
        return new d(
          !e.s || (f && !f[0] && !p) || (p && !p[0] && !f)
            ? NaN
            : !f || !p
            ? e.s / 0
            : e.s * 0
        );
      for (
        n = M(u.e / F) + M(e.e / F),
          c = f.length,
          l = p.length,
          c < l && ((a = f), (f = p), (p = a), (o = c), (c = l), (l = o)),
          a = [],
          o = c + l,
          r = o;
        r--;

      )
        a.push(0);
      for (r = l; --r >= 0; ) {
        for (t = 0, i = c + r; i > r; )
          (s = a[i] + p[r] * f[i - r - 1] + t),
            (a[i--] = s % P | 0),
            (t = (s / P) | 0);
        a[i] = (a[i] + t) % P | 0;
      }
      for (; !a[--o]; ) a.pop();
      return (
        t ? ++n : a.shift(),
        (e.d = a),
        (e.e = Ot(a, n)),
        A ? B(e, d.precision, d.rounding) : e
      );
    }),
  (I.toBinary = function (e, t) {
    return Ht(this, 2, e, t);
  }),
  (I.toDecimalPlaces = I.toDP =
    function (e, t) {
      var n = this,
        r = n.constructor;
      return (
        (n = new r(n)),
        e === void 0
          ? n
          : (R(e, 0, ct),
            t === void 0 ? (t = r.rounding) : R(t, 0, 8),
            B(n, e + n.e + 1, t))
      );
    }),
  (I.toExponential = function (e, t) {
    var n,
      r = this,
      i = r.constructor;
    return (
      e === void 0
        ? (n = V(r, !0))
        : (R(e, 0, ct),
          t === void 0 ? (t = i.rounding) : R(t, 0, 8),
          (r = B(new i(r), e + 1, t)),
          (n = V(r, !0, e + 1))),
      r.isNeg() && !r.isZero() ? `-` + n : n
    );
  }),
  (I.toFixed = function (e, t) {
    var n,
      r,
      i = this,
      a = i.constructor;
    return (
      e === void 0
        ? (n = V(i))
        : (R(e, 0, ct),
          t === void 0 ? (t = a.rounding) : R(t, 0, 8),
          (r = B(new a(i), e + i.e + 1, t)),
          (n = V(r, !1, e + r.e + 1))),
      i.isNeg() && !i.isZero() ? `-` + n : n
    );
  }),
  (I.toFraction = function (e) {
    var t,
      n,
      r,
      i,
      a,
      o,
      s,
      c,
      l,
      u,
      d,
      f,
      p = this,
      m = p.d,
      h = p.constructor;
    if (!m) return new h(p);
    if (
      ((l = n = new h(1)),
      (r = c = new h(0)),
      (t = new h(r)),
      (a = t.e = At(m) - p.e - 1),
      (o = a % F),
      (t.d[0] = N(10, o < 0 ? F + o : o)),
      e == null)
    )
      e = a > 0 ? t : l;
    else {
      if (((s = new h(e)), !s.isInt() || s.lt(l))) throw Error(j + s);
      e = s.gt(t) ? (a > 0 ? t : l) : s;
    }
    for (
      A = !1,
        s = new h(L(m)),
        u = h.precision,
        h.precision = a = m.length * F * 2;
      (d = z(s, t, 0, 1, 1)), (i = n.plus(d.times(r))), i.cmp(e) != 1;

    )
      (n = r),
        (r = i),
        (i = l),
        (l = c.plus(d.times(i))),
        (c = i),
        (i = t),
        (t = s.minus(d.times(i))),
        (s = i);
    return (
      (i = z(e.minus(n), r, 0, 1, 1)),
      (c = c.plus(i.times(l))),
      (n = n.plus(i.times(r))),
      (c.s = l.s = p.s),
      (f =
        z(l, r, a, 1).minus(p).abs().cmp(z(c, n, a, 1).minus(p).abs()) < 1
          ? [l, r]
          : [c, n]),
      (h.precision = u),
      (A = !0),
      f
    );
  }),
  (I.toHexadecimal = I.toHex =
    function (e, t) {
      return Ht(this, 16, e, t);
    }),
  (I.toNearest = function (e, t) {
    var n = this,
      r = n.constructor;
    if (((n = new r(n)), e == null)) {
      if (!n.d) return n;
      (e = new r(1)), (t = r.rounding);
    } else {
      if (((e = new r(e)), t === void 0 ? (t = r.rounding) : R(t, 0, 8), !n.d))
        return e.s ? n : e;
      if (!e.d) return e.s && (e.s = n.s), e;
    }
    return (
      e.d[0]
        ? ((A = !1), (n = z(n, e, 0, t, 1).times(e)), (A = !0), B(n))
        : ((e.s = n.s), (n = e)),
      n
    );
  }),
  (I.toNumber = function () {
    return +this;
  }),
  (I.toOctal = function (e, t) {
    return Ht(this, 8, e, t);
  }),
  (I.toPower = I.pow =
    function (e) {
      var t,
        n,
        r,
        i,
        a,
        o,
        s = this,
        c = s.constructor,
        l = +(e = new c(e));
      if (!s.d || !e.d || !s.d[0] || !e.d[0]) return new c(N(+s, l));
      if (((s = new c(s)), s.eq(1))) return s;
      if (((r = c.precision), (a = c.rounding), e.eq(1))) return B(s, r, a);
      if (((t = M(e.e / F)), t >= e.d.length - 1 && (n = l < 0 ? -l : l) <= St))
        return (i = jt(c, s, n, r)), e.s < 0 ? new c(1).div(i) : B(i, r, a);
      if (((o = s.s), o < 0)) {
        if (t < e.d.length - 1) return new c(NaN);
        if ((e.d[t] & 1 || (o = 1), s.e == 0 && s.d[0] == 1 && s.d.length == 1))
          return (s.s = o), s;
      }
      return (
        (n = N(+s, l)),
        (t =
          n == 0 || !isFinite(n)
            ? M(l * (Math.log(`0.` + L(s.d)) / Math.LN10 + s.e + 1))
            : new c(n + ``).e),
        t > c.maxE + 1 || t < c.minE - 1
          ? new c(t > 0 ? o / 0 : 0)
          : ((A = !1),
            (c.rounding = s.s = 1),
            (n = Math.min(12, (t + ``).length)),
            (i = Pt(e.times(W(s, r + n)), r)),
            i.d &&
              ((i = B(i, r + 5, 1)),
              Tt(i.d, r, a) &&
                ((t = r + 10),
                (i = B(Pt(e.times(W(s, t + n)), t), t + 5, 1)),
                +L(i.d).slice(r + 1, r + 15) + 1 == 0x5af3107a4000 &&
                  (i = B(i, r + 1, 0)))),
            (i.s = o),
            (A = !0),
            (c.rounding = a),
            B(i, r, a))
      );
    }),
  (I.toPrecision = function (e, t) {
    var n,
      r = this,
      i = r.constructor;
    return (
      e === void 0
        ? (n = V(r, r.e <= i.toExpNeg || r.e >= i.toExpPos))
        : (R(e, 1, ct),
          t === void 0 ? (t = i.rounding) : R(t, 0, 8),
          (r = B(new i(r), e, t)),
          (n = V(r, e <= r.e || r.e <= i.toExpNeg, e))),
      r.isNeg() && !r.isZero() ? `-` + n : n
    );
  }),
  (I.toSignificantDigits = I.toSD =
    function (e, t) {
      var n = this,
        r = n.constructor;
      return (
        e === void 0
          ? ((e = r.precision), (t = r.rounding))
          : (R(e, 1, ct), t === void 0 ? (t = r.rounding) : R(t, 0, 8)),
        B(new r(n), e, t)
      );
    }),
  (I.toString = function () {
    var e = this,
      t = e.constructor,
      n = V(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
    return e.isNeg() && !e.isZero() ? `-` + n : n;
  }),
  (I.truncated = I.trunc =
    function () {
      return B(new this.constructor(this), this.e + 1, 1);
    }),
  (I.valueOf = I.toJSON =
    function () {
      var e = this,
        t = e.constructor,
        n = V(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() ? `-` + n : n;
    });
function L(e) {
  var t,
    n,
    r,
    i = e.length - 1,
    a = ``,
    o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      (r = e[t] + ``), (n = F - r.length), n && (a += U(n)), (a += r);
    (o = e[t]), (r = o + ``), (n = F - r.length), n && (a += U(n));
  } else if (o === 0) return `0`;
  for (; o % 10 == 0; ) o /= 10;
  return a + o;
}
function R(e, t, n) {
  if (e !== ~~e || e < t || e > n) throw Error(j + e);
}
function Tt(e, t, n, r) {
  for (var i, a = e[0], o, s; a >= 10; a /= 10) --t;
  return (
    --t < 0 ? ((t += F), (i = 0)) : ((i = Math.ceil((t + 1) / F)), (t %= F)),
    (a = N(10, F - t)),
    (s = e[i] % a | 0),
    r == null
      ? t < 3
        ? (t == 0 ? (s = (s / 100) | 0) : t == 1 && (s = (s / 10) | 0),
          (o =
            (n < 4 && s == 99999) ||
            (n > 3 && s == 49999) ||
            s == 5e4 ||
            s == 0))
        : (o =
            (((n < 4 && s + 1 == a) || (n > 3 && s + 1 == a / 2)) &&
              ((e[i + 1] / a / 100) | 0) == N(10, t - 2) - 1) ||
            ((s == a / 2 || s == 0) && !((e[i + 1] / a / 100) | 0)))
      : t < 4
      ? (t == 0
          ? (s = (s / 1e3) | 0)
          : t == 1
          ? (s = (s / 100) | 0)
          : t == 2 && (s = (s / 10) | 0),
        (o = ((r || n < 4) && s == 9999) || (!r && n > 3 && s == 4999)))
      : (o =
          (((r || n < 4) && s + 1 == a) || (!r && n > 3 && s + 1 == a / 2)) &&
          ((e[i + 1] / a / 1e3) | 0) == N(10, t - 3) - 1),
    o
  );
}
function Et(e, t, n) {
  for (var r, i = [0], a, o = 0, s = e.length; o < s; ) {
    for (a = i.length; a--; ) i[a] *= t;
    for (i[0] += lt.indexOf(e.charAt(o++)), r = 0; r < i.length; r++)
      i[r] > n - 1 &&
        (i[r + 1] === void 0 && (i[r + 1] = 0),
        (i[r + 1] += (i[r] / n) | 0),
        (i[r] %= n));
  }
  return i.reverse();
}
function Dt(e, t) {
  var n, r, i;
  if (t.isZero()) return t;
  (r = t.d.length),
    r < 32
      ? ((n = Math.ceil(r / 3)), (i = (1 / Bt(4, n)).toString()))
      : ((n = 16), (i = `2.3283064365386962890625e-10`)),
    (e.precision += n),
    (t = zt(e, 1, t.times(i), new e(1)));
  for (var a = n; a--; ) {
    var o = t.times(t);
    t = o.times(o).minus(o).times(8).plus(1);
  }
  return (e.precision -= n), t;
}
var z = (function () {
  function e(e, t, n) {
    var r,
      i = 0,
      a = e.length;
    for (e = e.slice(); a--; )
      (r = e[a] * t + i), (e[a] = r % n | 0), (i = (r / n) | 0);
    return i && e.unshift(i), e;
  }
  function t(e, t, n, r) {
    var i, a;
    if (n != r) a = n > r ? 1 : -1;
    else
      for (i = a = 0; i < n; i++)
        if (e[i] != t[i]) {
          a = e[i] > t[i] ? 1 : -1;
          break;
        }
    return a;
  }
  function n(e, t, n, r) {
    for (var i = 0; n--; )
      (e[n] -= i), (i = +(e[n] < t[n])), (e[n] = i * r + e[n] - t[n]);
    for (; !e[0] && e.length > 1; ) e.shift();
  }
  return function (r, i, a, o, s, c) {
    var l,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _,
      v,
      y,
      b,
      ee,
      x,
      te,
      S,
      ne,
      re,
      C,
      ie,
      ae = r.constructor,
      oe = r.s == i.s ? 1 : -1,
      w = r.d,
      T = i.d;
    if (!w || !w[0] || !T || !T[0])
      return new ae(
        !r.s || !i.s || (w ? T && w[0] == T[0] : !T)
          ? NaN
          : (w && w[0] == 0) || !T
          ? oe * 0
          : oe / 0
      );
    for (
      c
        ? ((p = 1), (u = r.e - i.e))
        : ((c = P), (p = F), (u = M(r.e / p) - M(i.e / p))),
        C = T.length,
        ne = w.length,
        _ = new ae(oe),
        v = _.d = [],
        d = 0;
      T[d] == (w[d] || 0);
      d++
    );
    if (
      (T[d] > (w[d] || 0) && u--,
      a == null
        ? ((x = a = ae.precision), (o = ae.rounding))
        : (x = s ? a + (r.e - i.e) + 1 : a),
      x < 0)
    )
      v.push(1), (m = !0);
    else {
      if (((x = (x / p + 2) | 0), (d = 0), C == 1)) {
        for (f = 0, T = T[0], x++; (d < ne || f) && x--; d++)
          (te = f * c + (w[d] || 0)), (v[d] = (te / T) | 0), (f = te % T | 0);
        m = f || d < ne;
      } else {
        for (
          f = (c / (T[0] + 1)) | 0,
            f > 1 &&
              ((T = e(T, f, c)),
              (w = e(w, f, c)),
              (C = T.length),
              (ne = w.length)),
            S = C,
            y = w.slice(0, C),
            b = y.length;
          b < C;

        )
          y[b++] = 0;
        (ie = T.slice()), ie.unshift(0), (re = T[0]), T[1] >= c / 2 && ++re;
        do
          (f = 0),
            (l = t(T, y, C, b)),
            l < 0
              ? ((ee = y[0]),
                C != b && (ee = ee * c + (y[1] || 0)),
                (f = (ee / re) | 0),
                f > 1
                  ? (f >= c && (f = c - 1),
                    (h = e(T, f, c)),
                    (g = h.length),
                    (b = y.length),
                    (l = t(h, y, g, b)),
                    l == 1 && (f--, n(h, C < g ? ie : T, g, c)))
                  : (f == 0 && (l = f = 1), (h = T.slice())),
                (g = h.length),
                g < b && h.unshift(0),
                n(y, h, b, c),
                l == -1 &&
                  ((b = y.length),
                  (l = t(T, y, C, b)),
                  l < 1 && (f++, n(y, C < b ? ie : T, b, c))),
                (b = y.length))
              : l === 0 && (f++, (y = [0])),
            (v[d++] = f),
            l && y[0] ? (y[b++] = w[S] || 0) : ((y = [w[S]]), (b = 1));
        while ((S++ < ne || y[0] !== void 0) && x--);
        m = y[0] !== void 0;
      }
      v[0] || v.shift();
    }
    if (p == 1) (_.e = u), (pt = m);
    else {
      for (d = 1, f = v[0]; f >= 10; f /= 10) d++;
      (_.e = d + u * p - 1), B(_, s ? a + _.e + 1 : a, o, m);
    }
    return _;
  };
})();
function B(e, t, n, r) {
  var i,
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p = e.constructor;
  out: if (t != null) {
    if (((d = e.d), !d)) return e;
    for (i = 1, s = d[0]; s >= 10; s /= 10) i++;
    if (((a = t - i), a < 0))
      (a += F),
        (o = t),
        (u = d[(f = 0)]),
        (c = (u / N(10, i - o - 1)) % 10 | 0);
    else if (((f = Math.ceil((a + 1) / F)), (s = d.length), f >= s)) {
      if (r) {
        for (; s++ <= f; ) d.push(0);
        (u = c = 0), (i = 1), (a %= F), (o = a - F + 1);
      } else break out;
    } else {
      for (u = s = d[f], i = 1; s >= 10; s /= 10) i++;
      (a %= F),
        (o = a - F + i),
        (c = o < 0 ? 0 : (u / N(10, i - o - 1)) % 10 | 0);
    }
    if (
      ((r =
        r ||
        t < 0 ||
        d[f + 1] !== void 0 ||
        (o < 0 ? u : u % N(10, i - o - 1))),
      (l =
        n < 4
          ? (c || r) && (n == 0 || n == (e.s < 0 ? 3 : 2))
          : c > 5 ||
            (c == 5 &&
              (n == 4 ||
                r ||
                (n == 6 &&
                  (a > 0 ? (o > 0 ? u / N(10, i - o) : 0) : d[f - 1]) % 10 &
                    1) ||
                n == (e.s < 0 ? 8 : 7)))),
      t < 1 || !d[0])
    )
      return (
        (d.length = 0),
        l
          ? ((t -= e.e + 1), (d[0] = N(10, (F - (t % F)) % F)), (e.e = -t || 0))
          : (d[0] = e.e = 0),
        e
      );
    if (
      (a == 0
        ? ((d.length = f), (s = 1), f--)
        : ((d.length = f + 1),
          (s = N(10, F - a)),
          (d[f] = o > 0 ? ((u / N(10, i - o)) % N(10, o) | 0) * s : 0)),
      l)
    )
      for (;;)
        if (f == 0) {
          for (a = 1, o = d[0]; o >= 10; o /= 10) a++;
          for (o = d[0] += s, s = 1; o >= 10; o /= 10) s++;
          a != s && (e.e++, d[0] == P && (d[0] = 1));
          break;
        } else {
          if (((d[f] += s), d[f] != P)) break;
          (d[f--] = 0), (s = 1);
        }
    for (a = d.length; d[--a] === 0; ) d.pop();
  }
  return (
    A &&
      (e.e > p.maxE
        ? ((e.d = null), (e.e = NaN))
        : e.e < p.minE && ((e.e = 0), (e.d = [0]))),
    e
  );
}
function V(e, t, n) {
  if (!e.isFinite()) return Ft(e);
  var r,
    i = e.e,
    a = L(e.d),
    o = a.length;
  return (
    t
      ? (n && (r = n - o) > 0
          ? (a = a.charAt(0) + `.` + a.slice(1) + U(r))
          : o > 1 && (a = a.charAt(0) + `.` + a.slice(1)),
        (a = a + (e.e < 0 ? `e` : `e+`) + e.e))
      : i < 0
      ? ((a = `0.` + U(-i - 1) + a), n && (r = n - o) > 0 && (a += U(r)))
      : i >= o
      ? ((a += U(i + 1 - o)), n && (r = n - i - 1) > 0 && (a = a + `.` + U(r)))
      : ((r = i + 1) < o && (a = a.slice(0, r) + `.` + a.slice(r)),
        n && (r = n - o) > 0 && (i + 1 === o && (a += `.`), (a += U(r)))),
    a
  );
}
function Ot(e, t) {
  var n = e[0];
  for (t *= F; n >= 10; n /= 10) t++;
  return t;
}
function kt(e, t, n) {
  if (t > Ct) throw ((A = !0), n && (e.precision = n), Error(ht));
  return B(new e(ut), t, 1, !0);
}
function H(e, t, n) {
  if (t > wt) throw Error(ht);
  return B(new e(dt), t, n, !0);
}
function At(e) {
  var t = e.length - 1,
    n = t * F + 1;
  if (((t = e[t]), t)) {
    for (; t % 10 == 0; t /= 10) n--;
    for (t = e[0]; t >= 10; t /= 10) n++;
  }
  return n;
}
function U(e) {
  for (var t = ``; e--; ) t += `0`;
  return t;
}
function jt(e, t, n, r) {
  var i,
    a = new e(1),
    o = Math.ceil(r / F + 4);
  for (A = !1; ; ) {
    if (
      (n % 2 && ((a = a.times(t)), Ut(a.d, o) && (i = !0)),
      (n = M(n / 2)),
      n === 0)
    ) {
      (n = a.d.length - 1), i && a.d[n] === 0 && ++a.d[n];
      break;
    }
    (t = t.times(t)), Ut(t.d, o);
  }
  return (A = !0), a;
}
function Mt(e) {
  return e.d[e.d.length - 1] & 1;
}
function Nt(e, t, n) {
  for (var r, i, a = new e(t[0]), o = 0; ++o < t.length; ) {
    if (((i = new e(t[o])), !i.s)) {
      a = i;
      break;
    }
    (r = a.cmp(i)), (r === n || (r === 0 && a.s === n)) && (a = i);
  }
  return a;
}
function Pt(e, t) {
  var n,
    r,
    i,
    a,
    o,
    s,
    c,
    l = 0,
    u = 0,
    d = 0,
    f = e.constructor,
    p = f.rounding,
    m = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(
      e.d ? (e.d[0] ? (e.s < 0 ? 0 : 1 / 0) : 1) : e.s ? (e.s < 0 ? 0 : e) : NaN
    );
  for (
    t == null ? ((A = !1), (c = m)) : (c = t), s = new f(0.03125);
    e.e > -2;

  )
    (e = e.times(s)), (d += 5);
  for (
    r = ((Math.log(N(2, d)) / Math.LN10) * 2 + 5) | 0,
      c += r,
      n = a = o = new f(1),
      f.precision = c;
    ;

  ) {
    if (
      ((a = B(a.times(e), c, 1)),
      (n = n.times(++u)),
      (s = o.plus(z(a, n, c, 1))),
      L(s.d).slice(0, c) === L(o.d).slice(0, c))
    ) {
      for (i = d; i--; ) o = B(o.times(o), c, 1);
      if (t == null) {
        if (l < 3 && Tt(o.d, c - r, p, l))
          (f.precision = c += 10), (n = a = s = new f(1)), (u = 0), l++;
        else return B(o, (f.precision = m), p, (A = !0));
      } else return (f.precision = m), o;
    }
    o = s;
  }
}
function W(e, t) {
  var n,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p = 1,
    m = 10,
    h = e,
    g = h.d,
    _ = h.constructor,
    v = _.rounding,
    y = _.precision;
  if (h.s < 0 || !g || !g[0] || (!h.e && g[0] == 1 && g.length == 1))
    return new _(g && !g[0] ? -1 / 0 : h.s == 1 ? (g ? 0 : h) : NaN);
  if (
    (t == null ? ((A = !1), (u = y)) : (u = t),
    (_.precision = u += m),
    (n = L(g)),
    (r = n.charAt(0)),
    Math.abs((a = h.e)) < 0x5543df729c000)
  ) {
    for (; (r < 7 && r != 1) || (r == 1 && n.charAt(1) > 3); )
      (h = h.times(e)), (n = L(h.d)), (r = n.charAt(0)), p++;
    (a = h.e),
      r > 1 ? ((h = new _(`0.` + n)), a++) : (h = new _(r + `.` + n.slice(1)));
  } else
    return (
      (l = kt(_, u + 2, y).times(a + ``)),
      (h = W(new _(r + `.` + n.slice(1)), u - m).plus(l)),
      (_.precision = y),
      t == null ? B(h, y, v, (A = !0)) : h
    );
  for (
    d = h,
      c = o = h = z(h.minus(1), h.plus(1), u, 1),
      f = B(h.times(h), u, 1),
      i = 3;
    ;

  ) {
    if (
      ((o = B(o.times(f), u, 1)),
      (l = c.plus(z(o, new _(i), u, 1))),
      L(l.d).slice(0, u) === L(c.d).slice(0, u))
    ) {
      if (
        ((c = c.times(2)),
        a !== 0 && (c = c.plus(kt(_, u + 2, y).times(a + ``))),
        (c = z(c, new _(p), u, 1)),
        t == null)
      ) {
        if (Tt(c.d, u - m, v, s))
          (_.precision = u += m),
            (l = o = h = z(d.minus(1), d.plus(1), u, 1)),
            (f = B(h.times(h), u, 1)),
            (i = s = 1);
        else return B(c, (_.precision = y), v, (A = !0));
      } else return (_.precision = y), c;
    }
    (c = l), (i += 2);
  }
}
function Ft(e) {
  return String((e.s * e.s) / 0);
}
function It(e, t) {
  var n, r, i;
  for (
    (n = t.indexOf(`.`)) > -1 && (t = t.replace(`.`, ``)),
      (r = t.search(/e/i)) > 0
        ? (n < 0 && (n = r), (n += +t.slice(r + 1)), (t = t.substring(0, r)))
        : n < 0 && (n = t.length),
      r = 0;
    t.charCodeAt(r) === 48;
    r++
  );
  for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
  if (((t = t.slice(r, i)), t)) {
    if (
      ((i -= r),
      (e.e = n = n - r - 1),
      (e.d = []),
      (r = (n + 1) % F),
      n < 0 && (r += F),
      r < i)
    ) {
      for (r && e.d.push(+t.slice(0, r)), i -= F; r < i; )
        e.d.push(+t.slice(r, (r += F)));
      (t = t.slice(r)), (r = F - t.length);
    } else r -= i;
    for (; r--; ) t += `0`;
    e.d.push(+t),
      A &&
        (e.e > e.constructor.maxE
          ? ((e.d = null), (e.e = NaN))
          : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
  } else (e.e = 0), (e.d = [0]);
  return e;
}
function Lt(e, t) {
  var n, r, i, a, o, s, c, l, u;
  if (t.indexOf(`_`) > -1) {
    if (((t = t.replace(/(\d)_(?=\d)/g, `$1`)), xt.test(t))) return It(e, t);
  } else if (t === `Infinity` || t === `NaN`)
    return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
  if (yt.test(t)) (n = 16), (t = t.toLowerCase());
  else if (vt.test(t)) n = 2;
  else if (bt.test(t)) n = 8;
  else throw Error(j + t);
  for (
    a = t.search(/p/i),
      a > 0
        ? ((c = +t.slice(a + 1)), (t = t.substring(2, a)))
        : (t = t.slice(2)),
      a = t.indexOf(`.`),
      o = a >= 0,
      r = e.constructor,
      o &&
        ((t = t.replace(`.`, ``)),
        (s = t.length),
        (a = s - a),
        (i = jt(r, new r(n), a, a * 2))),
      l = Et(t, n, P),
      u = l.length - 1,
      a = u;
    l[a] === 0;
    --a
  )
    l.pop();
  return a < 0
    ? new r(e.s * 0)
    : ((e.e = Ot(l, u)),
      (e.d = l),
      (A = !1),
      o && (e = z(e, i, s * 4)),
      c && (e = e.times(Math.abs(c) < 54 ? N(2, c) : G.pow(2, c))),
      (A = !0),
      e);
}
function Rt(e, t) {
  var n,
    r = t.d.length;
  if (r < 3) return t.isZero() ? t : zt(e, 2, t, t);
  (n = 1.4 * Math.sqrt(r)),
    (n = n > 16 ? 16 : n | 0),
    (t = t.times(1 / Bt(5, n))),
    (t = zt(e, 2, t, t));
  for (var i, a = new e(5), o = new e(16), s = new e(20); n--; )
    (i = t.times(t)), (t = t.times(a.plus(i.times(o.times(i).minus(s)))));
  return t;
}
function zt(e, t, n, r, i) {
  var a,
    o,
    s,
    c,
    l = 1,
    u = e.precision,
    d = Math.ceil(u / F);
  for (A = !1, c = n.times(n), s = new e(r); ; ) {
    if (
      ((o = z(s.times(c), new e(t++ * t++), u, 1)),
      (s = i ? r.plus(o) : r.minus(o)),
      (r = z(o.times(c), new e(t++ * t++), u, 1)),
      (o = s.plus(r)),
      o.d[d] !== void 0)
    ) {
      for (a = d; o.d[a] === s.d[a] && a--; );
      if (a == -1) break;
    }
    (a = s), (s = r), (r = o), (o = a), l++;
  }
  return (A = !0), (o.d.length = d + 1), o;
}
function Bt(e, t) {
  for (var n = e; --t; ) n *= e;
  return n;
}
function Vt(e, t) {
  var n,
    r = t.s < 0,
    i = H(e, e.precision, 1),
    a = i.times(0.5);
  if (((t = t.abs()), t.lte(a))) return (k = r ? 4 : 1), t;
  if (((n = t.divToInt(i)), n.isZero())) k = r ? 3 : 2;
  else {
    if (((t = t.minus(n.times(i))), t.lte(a)))
      return (k = Mt(n) ? (r ? 2 : 3) : r ? 4 : 1), t;
    k = Mt(n) ? (r ? 1 : 4) : r ? 3 : 2;
  }
  return t.minus(i).abs();
}
function Ht(e, t, n, r) {
  var i,
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p = e.constructor,
    m = n !== void 0;
  if (
    (m
      ? (R(n, 1, ct), r === void 0 ? (r = p.rounding) : R(r, 0, 8))
      : ((n = p.precision), (r = p.rounding)),
    !e.isFinite())
  )
    u = Ft(e);
  else {
    for (
      u = V(e),
        o = u.indexOf(`.`),
        m
          ? ((i = 2), t == 16 ? (n = n * 4 - 3) : t == 8 && (n = n * 3 - 2))
          : (i = t),
        o >= 0 &&
          ((u = u.replace(`.`, ``)),
          (f = new p(1)),
          (f.e = u.length - o),
          (f.d = Et(V(f), 10, i)),
          (f.e = f.d.length)),
        d = Et(u, 10, i),
        a = c = d.length;
      d[--c] == 0;

    )
      d.pop();
    if (!d[0]) u = m ? `0p+0` : `0`;
    else {
      if (
        (o < 0
          ? a--
          : ((e = new p(e)),
            (e.d = d),
            (e.e = a),
            (e = z(e, f, n, r, 0, i)),
            (d = e.d),
            (a = e.e),
            (l = pt)),
        (o = d[n]),
        (s = i / 2),
        (l ||= d[n + 1] !== void 0),
        (l =
          r < 4
            ? (o !== void 0 || l) && (r === 0 || r === (e.s < 0 ? 3 : 2))
            : o > s ||
              (o === s &&
                (r === 4 ||
                  l ||
                  (r === 6 && d[n - 1] & 1) ||
                  r === (e.s < 0 ? 8 : 7)))),
        (d.length = n),
        l)
      )
        for (; ++d[--n] > i - 1; ) (d[n] = 0), n || (++a, d.unshift(1));
      for (c = d.length; !d[c - 1]; --c);
      for (o = 0, u = ``; o < c; o++) u += lt.charAt(d[o]);
      if (m) {
        if (c > 1) {
          if (t == 16 || t == 8) {
            for (o = t == 16 ? 4 : 3, --c; c % o; c++) u += `0`;
            for (d = Et(u, i, t), c = d.length; !d[c - 1]; --c);
            for (o = 1, u = `1.`; o < c; o++) u += lt.charAt(d[o]);
          } else u = u.charAt(0) + `.` + u.slice(1);
        }
        u = u + (a < 0 ? `p` : `p+`) + a;
      } else if (a < 0) {
        for (; ++a; ) u = `0` + u;
        u = `0.` + u;
      } else if (++a > c) for (a -= c; a--; ) u += `0`;
      else a < c && (u = u.slice(0, a) + `.` + u.slice(a));
    }
    u = (t == 16 ? `0x` : t == 2 ? `0b` : t == 8 ? `0o` : ``) + u;
  }
  return e.s < 0 ? `-` + u : u;
}
function Ut(e, t) {
  if (e.length > t) return (e.length = t), !0;
}
function Wt(e) {
  return new this(e).abs();
}
function Gt(e) {
  return new this(e).acos();
}
function Kt(e) {
  return new this(e).acosh();
}
function qt(e, t) {
  return new this(e).plus(t);
}
function Jt(e) {
  return new this(e).asin();
}
function Yt(e) {
  return new this(e).asinh();
}
function Xt(e) {
  return new this(e).atan();
}
function Zt(e) {
  return new this(e).atanh();
}
function Qt(e, t) {
  (e = new this(e)), (t = new this(t));
  var n,
    r = this.precision,
    i = this.rounding,
    a = r + 4;
  return (
    !e.s || !t.s
      ? (n = new this(NaN))
      : !e.d && !t.d
      ? ((n = H(this, a, 1).times(t.s > 0 ? 0.25 : 0.75)), (n.s = e.s))
      : !t.d || e.isZero()
      ? ((n = t.s < 0 ? H(this, r, i) : new this(0)), (n.s = e.s))
      : !e.d || t.isZero()
      ? ((n = H(this, a, 1).times(0.5)), (n.s = e.s))
      : t.s < 0
      ? ((this.precision = a),
        (this.rounding = 1),
        (n = this.atan(z(e, t, a, 1))),
        (t = H(this, a, 1)),
        (this.precision = r),
        (this.rounding = i),
        (n = e.s < 0 ? n.minus(t) : n.plus(t)))
      : (n = this.atan(z(e, t, a, 1))),
    n
  );
}
function $t(e) {
  return new this(e).cbrt();
}
function en(e) {
  return B((e = new this(e)), e.e + 1, 2);
}
function tn(e, t, n) {
  return new this(e).clamp(t, n);
}
function nn(e) {
  if (!e || typeof e != `object`) throw Error(mt + `Object expected`);
  var t,
    n,
    r,
    i = e.defaults === !0,
    a = [
      `precision`,
      1,
      ct,
      `rounding`,
      0,
      8,
      `toExpNeg`,
      -st,
      0,
      `toExpPos`,
      0,
      st,
      `maxE`,
      0,
      st,
      `minE`,
      -st,
      0,
      `modulo`,
      0,
      9,
    ];
  for (t = 0; t < a.length; t += 3)
    if (((n = a[t]), i && (this[n] = ft[n]), (r = e[n]) !== void 0)) {
      if (M(r) === r && r >= a[t + 1] && r <= a[t + 2]) this[n] = r;
      else throw Error(j + n + `: ` + r);
    }
  if (((n = `crypto`), i && (this[n] = ft[n]), (r = e[n]) !== void 0)) {
    if (r === !0 || r === !1 || r === 0 || r === 1) {
      if (r) {
        if (
          typeof crypto < `u` &&
          crypto &&
          (crypto.getRandomValues || crypto.randomBytes)
        )
          this[n] = !0;
        else throw Error(gt);
      } else this[n] = !1;
    } else throw Error(j + n + `: ` + r);
  }
  return this;
}
function rn(e) {
  return new this(e).cos();
}
function an(e) {
  return new this(e).cosh();
}
function on(e) {
  var t, n, r;
  function i(e) {
    var t,
      n,
      r,
      a = this;
    if (!(a instanceof i)) return new i(e);
    if (((a.constructor = i), dn(e))) {
      (a.s = e.s),
        A
          ? !e.d || e.e > i.maxE
            ? ((a.e = NaN), (a.d = null))
            : e.e < i.minE
            ? ((a.e = 0), (a.d = [0]))
            : ((a.e = e.e), (a.d = e.d.slice()))
          : ((a.e = e.e), (a.d = e.d ? e.d.slice() : e.d));
      return;
    }
    if (((r = typeof e), r === `number`)) {
      if (e === 0) {
        (a.s = 1 / e < 0 ? -1 : 1), (a.e = 0), (a.d = [0]);
        return;
      }
      if ((e < 0 ? ((e = -e), (a.s = -1)) : (a.s = 1), e === ~~e && e < 1e7)) {
        for (t = 0, n = e; n >= 10; n /= 10) t++;
        A
          ? t > i.maxE
            ? ((a.e = NaN), (a.d = null))
            : t < i.minE
            ? ((a.e = 0), (a.d = [0]))
            : ((a.e = t), (a.d = [e]))
          : ((a.e = t), (a.d = [e]));
        return;
      }
      if (e * 0 != 0) {
        e || (a.s = NaN), (a.e = NaN), (a.d = null);
        return;
      }
      return It(a, e.toString());
    }
    if (r === `string`)
      return (
        (n = e.charCodeAt(0)) === 45
          ? ((e = e.slice(1)), (a.s = -1))
          : (n === 43 && (e = e.slice(1)), (a.s = 1)),
        xt.test(e) ? It(a, e) : Lt(a, e)
      );
    if (r === `bigint`)
      return e < 0 ? ((e = -e), (a.s = -1)) : (a.s = 1), It(a, e.toString());
    throw Error(j + e);
  }
  if (
    ((i.prototype = I),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.EUCLID = 9),
    (i.config = i.set = nn),
    (i.clone = on),
    (i.isDecimal = dn),
    (i.abs = Wt),
    (i.acos = Gt),
    (i.acosh = Kt),
    (i.add = qt),
    (i.asin = Jt),
    (i.asinh = Yt),
    (i.atan = Xt),
    (i.atanh = Zt),
    (i.atan2 = Qt),
    (i.cbrt = $t),
    (i.ceil = en),
    (i.clamp = tn),
    (i.cos = rn),
    (i.cosh = an),
    (i.div = sn),
    (i.exp = cn),
    (i.floor = ln),
    (i.hypot = un),
    (i.ln = fn),
    (i.log = pn),
    (i.log10 = hn),
    (i.log2 = mn),
    (i.max = gn),
    (i.min = _n),
    (i.mod = vn),
    (i.mul = yn),
    (i.pow = bn),
    (i.random = xn),
    (i.round = Sn),
    (i.sign = Cn),
    (i.sin = wn),
    (i.sinh = Tn),
    (i.sqrt = En),
    (i.sub = Dn),
    (i.sum = On),
    (i.tan = kn),
    (i.tanh = An),
    (i.trunc = jn),
    e === void 0 && (e = {}),
    e && e.defaults !== !0)
  )
    for (
      r = [
        `precision`,
        `rounding`,
        `toExpNeg`,
        `toExpPos`,
        `maxE`,
        `minE`,
        `modulo`,
        `crypto`,
      ],
        t = 0;
      t < r.length;

    )
      e.hasOwnProperty((n = r[t++])) || (e[n] = this[n]);
  return i.config(e), i;
}
function sn(e, t) {
  return new this(e).div(t);
}
function cn(e) {
  return new this(e).exp();
}
function ln(e) {
  return B((e = new this(e)), e.e + 1, 3);
}
function un() {
  var e,
    t,
    n = new this(0);
  for (A = !1, e = 0; e < arguments.length; )
    if (((t = new this(arguments[e++])), t.d)) n.d && (n = n.plus(t.times(t)));
    else {
      if (t.s) return (A = !0), new this(1 / 0);
      n = t;
    }
  return (A = !0), n.sqrt();
}
function dn(e) {
  return e instanceof G || (e && e.toStringTag === _t) || !1;
}
function fn(e) {
  return new this(e).ln();
}
function pn(e, t) {
  return new this(e).log(t);
}
function mn(e) {
  return new this(e).log(2);
}
function hn(e) {
  return new this(e).log(10);
}
function gn() {
  return Nt(this, arguments, -1);
}
function _n() {
  return Nt(this, arguments, 1);
}
function vn(e, t) {
  return new this(e).mod(t);
}
function yn(e, t) {
  return new this(e).mul(t);
}
function bn(e, t) {
  return new this(e).pow(t);
}
function xn(e) {
  var t,
    n,
    r,
    i,
    a = 0,
    o = new this(1),
    s = [];
  if (
    (e === void 0 ? (e = this.precision) : R(e, 1, ct),
    (r = Math.ceil(e / F)),
    !this.crypto)
  )
    for (; a < r; ) s[a++] = (Math.random() * 1e7) | 0;
  else if (crypto.getRandomValues)
    for (t = crypto.getRandomValues(new Uint32Array(r)); a < r; )
      (i = t[a]),
        i >= 429e7
          ? (t[a] = crypto.getRandomValues(new Uint32Array(1))[0])
          : (s[a++] = i % 1e7);
  else if (crypto.randomBytes) {
    for (t = crypto.randomBytes((r *= 4)); a < r; )
      (i =
        t[a] + (t[a + 1] << 8) + (t[a + 2] << 16) + ((t[a + 3] & 127) << 24)),
        i >= 214e7
          ? crypto.randomBytes(4).copy(t, a)
          : (s.push(i % 1e7), (a += 4));
    a = r / 4;
  } else throw Error(gt);
  for (
    r = s[--a],
      e %= F,
      r && e && ((i = N(10, F - e)), (s[a] = ((r / i) | 0) * i));
    s[a] === 0;
    a--
  )
    s.pop();
  if (a < 0) (n = 0), (s = [0]);
  else {
    for (n = -1; s[0] === 0; n -= F) s.shift();
    for (r = 1, i = s[0]; i >= 10; i /= 10) r++;
    r < F && (n -= F - r);
  }
  return (o.e = n), (o.d = s), o;
}
function Sn(e) {
  return B((e = new this(e)), e.e + 1, this.rounding);
}
function Cn(e) {
  return (e = new this(e)), e.d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function wn(e) {
  return new this(e).sin();
}
function Tn(e) {
  return new this(e).sinh();
}
function En(e) {
  return new this(e).sqrt();
}
function Dn(e, t) {
  return new this(e).sub(t);
}
function On() {
  var e = 0,
    t = arguments,
    n = new this(t[e]);
  for (A = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
  return (A = !0), B(n, this.precision, this.rounding);
}
function kn(e) {
  return new this(e).tan();
}
function An(e) {
  return new this(e).tanh();
}
function jn(e) {
  return B((e = new this(e)), e.e + 1, 1);
}
(I[Symbol.for(`nodejs.util.inspect.custom`)] = I.toString),
  (I[Symbol.toStringTag] = `Decimal`);
var G = (I.constructor = on(ft));
(ut = new G(ut)), (dt = new G(dt));
var Mn = G.clone({
    precision: 60,
    rounding: G.ROUND_DOWN,
    toExpNeg: -40,
    toExpPos: 60,
  }),
  Nn = 1e4;
function K(e) {
  return new Mn(e);
}
K(0), K(1);
var Pn = (e, t) => K(e).mul(t).div(Nn),
  Fn = (e) => K(e).toFixed(18, G.ROUND_DOWN),
  In = (e) => K(Fn(e));
function Ln(e, t = 2) {
  let [n, r] = K(e).toFixed(t, G.ROUND_DOWN).split(`.`),
    i = (n ?? `0`).replace(/\B(?=(\d{3})+(?!\d))/g, `,`);
  return r ? `${i}.${r}` : i;
}
function Rn(e, t = 2) {
  let n = K(e);
  for (let [e, r] of [
    [0xe8d4a51000, `T`],
    [1e9, `B`],
    [1e6, `M`],
    [1e3, `K`],
  ]) {
    if (!n.gte(e)) continue;
    let i = n.div(e).toFixed(t, G.ROUND_DOWN);
    return `${
      i.includes(`.`) ? i.replace(/0+$/, ``).replace(/\.$/, ``) : i
    }${r}`;
  }
  return Ln(n, 0);
}
var zn = (e) => String(e).replace(/\B(?=(\d{3})+(?!\d))/g, `,`),
  Bn = /^\d{1,20}(\.\d{1,18})?$/,
  Vn = (e) => Bn.test(e),
  q = o().regex(Bn, `Invalid amount`),
  J = q.refine((e) => Vn(e) && K(e).gt(0), `Amount must be positive`);
function Hn(e, t = 4) {
  let [n, r = ``] = K(e).toFixed(t, G.ROUND_DOWN).split(`.`),
    i = r.replace(/0+$/, ``),
    a = n.replace(/\B(?=(\d{3})+(?!\d))/g, `,`);
  return i ? `${a}.${i}` : a;
}
m({ error: m({ code: o(), message: o(), details: h().optional() }) });
var Un = 864e5,
  Y = g().transform((e) => e.toLowerCase());
o().regex(RegExp(`^${_.catSerialPrefix}-\\d{6,}$`));
var Wn = o()
    .min(3)
    .max(20)
    .regex(/^[A-Za-z0-9_]+$/, `Letters, numbers and underscores only`),
  Gn = o().regex(/^0x[0-9a-fA-F]{40}$/, `Invalid EVM address`),
  Kn = o().regex(/^[A-Z0-9]{3,16}$/);
o().min(8).max(128);
var qn = m({
    cat: o(),
    profession: o(),
    traits: o(),
    building: o(),
    house: o(),
    shift: o(),
    wear: o(),
    staking: o(),
    luck: o(),
    level: o().optional(),
    quality: o().optional(),
    bonding: o().optional(),
    passive: o().optional(),
    luckyCat: o().optional(),
    total: o(),
  }),
  Jn = m({
    hours: s(),
    minutes: s().int().optional(),
    rewardEligible: l().optional(),
    baseResourcePerHour: o(),
    basePointsPerHour: o(),
    multipliers: qn,
    resource: m({ type: E, amount: o() }).nullable(),
    points: m({ category: D, amount: o() }).nullable(),
    gamePoints: o().optional(),
    consumed: t(m({ type: E, amount: o() })),
    xp: s().int(),
    staminaCost: s().int(),
    wearApplied: o(),
    luckChanceBps: s().int(),
    luckRolled: l(),
    luckHit: l(),
    jackpotChanceBps: s().int().optional(),
    catLevel: s().int().optional(),
    effectiveLevel: s().int().optional(),
    fastTrack: m({
      workedSeconds: s().int(),
      scheduledSeconds: s().int(),
      pointFraction: o(),
      fullPoints: o().nullable(),
      fullGamePoints: o(),
    }).optional(),
  }),
  Yn = c([`siwe`, `dev`]);
m({ address: Gn, provider: Yn.default(`siwe`) }),
  m({ provider: Yn, nonce: o(), message: o(), expiresAt: o() }),
  m({
    provider: Yn.default(`siwe`),
    nonce: o().min(8).max(128),
    message: o().min(1).max(4e3),
    signature: o().min(1).max(4e3),
    referralCode: Kn.optional(),
    deviceId: o().min(8).max(128).optional(),
  }),
  m({
    address: Gn.optional(),
    referralCode: Kn.optional(),
    deviceId: o().min(8).max(128).optional(),
  }),
  m({
    userId: o(),
    address: o(),
    isNewUser: l(),
    needsUsername: l(),
    csrfToken: o(),
    expiresAt: o(),
  }),
  m({ username: Wn }),
  m({ step: Re }),
  m({ valid: l(), referrerUsername: o().nullable() });
var Xn = `x-csrf-token`,
  Zn = `idempotency-key`,
  Qn = `x-device-id`,
  $n = c([`IDLE`, `WORKING`, `NAPPING`, `UPGRADING`, `LISTED`, `IN_TRADE`]),
  er = c([`OWNED`, `RELEASED`]),
  tr = c([
    `ALREADY_RELEASED`,
    `STARTER_CAT`,
    `PROTECTED`,
    `WORKING`,
    `NAPPING`,
    `UPGRADING`,
    `LISTED`,
    `IN_TRADE`,
    `ACCLIMATING`,
    `RELEASE_COOLDOWN`,
  ]),
  nr = {
    ALREADY_RELEASED: `This Cat has already been released`,
    STARTER_CAT: `Your Starter Cat is bound to your account forever`,
    PROTECTED: `Remove the Favourite lock first`,
    WORKING: `This Cat is working`,
    NAPPING: `This Cat is resting in the House: let it wake first`,
    UPGRADING: `This Cat is preparing an upgrade`,
    LISTED: `Cancel the marketplace listing first`,
    IN_TRADE: `This Cat is part of an open trade`,
    ACCLIMATING: `This Cat is still bonding with its new owner`,
    RELEASE_COOLDOWN: `This Cat arrived too recently to be released`,
  },
  rr = m({
    owned: s().int(),
    reserved: s().int(),
    max: s().int(),
    free: s().int(),
    full: l(),
  }),
  ir = m({ id: o(), name: o(), description: o() }),
  X = m({
    id: o(),
    serial: o(),
    name: o(),
    ownerId: o(),
    isStarter: l(),
    isTradable: l(),
    rarity: b,
    profession: S,
    level: s().int(),
    xp: s().int(),
    xpToNext: s().int(),
    levelCap: s().int(),
    stamina: s(),
    maxStamina: s().int(),
    staminaRegenPerHour: s(),
    stats: ie,
    traits: t(ir),
    appearanceSeed: o(),
    createdAt: o(),
    acquiredAt: o(),
    tradeCooldownUntil: o().nullable(),
    currentJobId: o().nullable(),
    currentNapId: o().nullable(),
    napCompletesAt: o().nullable(),
    pendingUpgradeId: o().nullable(),
    listingId: o().nullable(),
    isMain: l(),
    activity: $n,
    lifetimeWorkHours: o(),
    upgradeAttempts: s().int(),
    successfulUpgrades: s().int(),
    failedUpgrades: s().int(),
    productionStats: u(o(), o()),
    resolveBonusPct: s().int(),
    resolveTargetLevel: s().int().nullable(),
    canAttemptUpgrade: l(),
    origin: o(),
    bondingPct: s().int().nullable(),
    bondingStartedAt: o().nullable(),
    bondsAt: o().nullable(),
    acclimationUntil: o().nullable(),
    isAcclimating: l(),
    isLuckyCat: l(),
    jackpotChanceBps: s().int(),
    lifecycleStatus: er,
    releasedAt: o().nullable(),
    isProtected: l(),
    canRelease: l(),
    releaseBlockers: t(tr),
    releaseHighRarity: l(),
    releaseNeedsTypedConfirmation: l(),
  }),
  ar = X.omit({ resolveBonusPct: !0, resolveTargetLevel: !0 });
m({ confirm: o().max(32).optional() }),
  m({ protected: l() }),
  m({ cats: t(X), capacity: rr }),
  m({ cat: X, capacity: rr }),
  m({
    name: o()
      .min(2)
      .max(24)
      .regex(
        /^[A-Za-z0-9 '-]+$/,
        `Letters, numbers, spaces, apostrophes and hyphens`
      ),
  });
var or = c([`NORMAL`, `WARNING`, `NEARLY_FULL`, `FULL`, `OVER_CAP`]),
  sr = {
    NORMAL: ``,
    WARNING: `Storage getting full`,
    NEARLY_FULL: `Storage nearly full`,
    FULL: `FULL`,
    OVER_CAP: `OVER CAP`,
  },
  cr = m({
    resource: E,
    amount: s().int(),
    baseCapacity: s().int(),
    capacity: s().int(),
    free: s().int(),
    usedBps: s().int(),
    state: or,
  }),
  lr = m({
    resources: u(E, cr),
    houseBonusBps: s().int(),
    houseLevel: s().int(),
    nextHouse: m({
      level: s().int(),
      bonusBps: s().int(),
      capacities: u(E, s().int()),
    }).nullable(),
  }),
  ur = u(E, s().int()),
  dr = m({
    resource: E,
    amount: s().int(),
    capacity: s().int(),
    free: s().int(),
    incoming: s().int(),
    need: s().int(),
  }),
  fr = m({ fits: l(), shortfall: t(dr) }),
  pr = u(E, s().int());
m({
  user: m({
    id: o(),
    username: o().nullable(),
    referralCode: o(),
    referralUrl: o(),
    tutorialStep: Re,
    tutorialCompleted: l(),
    createdAt: o(),
    frozen: l(),
    rewardsHold: l(),
    isAdmin: l(),
    adminRole: o().nullable(),
  }),
  wallet: m({ address: o(), chainId: s().int(), provider: o() }).nullable(),
  balances: m({ cat: q, resources: pr }),
  resourceStorage: lr,
  property: m({
    id: o(),
    tier: s().int(),
    size: s().int(),
    name: o(),
    stationSlots: s().int(),
    activeCats: s().int(),
    maxEffectiveLevel: s().int(),
  }).nullable(),
  mainCat: X.nullable(),
  catCount: s().int(),
  catCapacity: rr,
  activeWork: m({ working: s().int(), max: s().int() }),
  onboarding: m({ needsUsername: l(), needsTutorial: l() }),
  starterPermit: m({
    status: c(we),
    unlockLevel: s().int(),
    starterCatLevel: s().int(),
    stationId: o().nullable(),
  }),
  demo: m({ tokenSimulated: l(), rewardsSimulated: l() }),
  permitWallet: m({
    permitTickets: s().int(),
    catTickets: s().int(),
    firstRecruitCredits: s().int(),
    fragmentTarget: O.nullable(),
    fragments: s().int(),
    fragmentThreshold: s().int(),
  }),
  configVersion: s().int(),
  csrfToken: o(),
  serverTime: o(),
});
var mr = m({
  id: o(),
  username: o().nullable(),
  createdAt: o(),
  propertyTier: s().int(),
  propertyName: o(),
  catCount: s().int(),
  highestCatLevel: s().int(),
  mainCat: ar.nullable(),
  showcase: u(o(), h()),
});
m({
  q: o()
    .trim()
    .regex(/^[A-Za-z0-9_]{2,20}$/, `Type at least two letters of a name`),
}),
  m({ players: t(m({ id: o(), username: o() })) }),
  m({ town: s().int().positive().nullable(), copies: s().int().nonnegative() });
var hr = c([`XP`, `CATS`, `CAT`, `HOUSE`, `RESOURCE`]),
  gr = m({
    kind: hr,
    resource: E.nullable(),
    label: o(),
    have: q,
    need: q,
    missing: q,
    met: l(),
  }),
  Z = m({ met: l(), items: t(gr) }),
  _r = (e, t, n, r, i) => {
    let a = K(r),
      o = K(i),
      s = o.minus(a);
    return {
      kind: e,
      resource: t,
      label: n,
      have: Fn(a),
      need: Fn(o),
      missing: Fn(s.gt(0) ? s : 0),
      met: a.gte(o),
    };
  };
function vr(e, t) {
  let n = [];
  e.xp !== void 0 && e.xp > 0 && n.push(_r(`XP`, null, `XP`, t.xp ?? 0, e.xp)),
    e.cats !== void 0 &&
      e.cats > 0 &&
      n.push(_r(`CATS`, null, `Cats`, t.cats ?? 0, e.cats)),
    e.houseLevel !== void 0 &&
      e.houseLevel > 1 &&
      n.push(_r(`HOUSE`, null, `House level`, t.houseLevel ?? 1, e.houseLevel)),
    e.cat !== void 0 &&
      K(e.cat).gt(0) &&
      n.push(_r(`CAT`, null, _.tokenDisplay, t.cat ?? 0, e.cat));
  for (let r of T) {
    let i = e.resources?.[r] ?? 0;
    i <= 0 || n.push(_r(`RESOURCE`, r, se[r], t.resources?.[r] ?? 0, i));
  }
  return { met: n.every((e) => e.met), items: n };
}
var yr = (e) => e.items.filter((e) => !e.met),
  br = (e, t) => (e.kind === `CAT` ? Hn(t, 2) : zn(K(t).toFixed(0))),
  xr = (e) =>
    e
      .map((e) =>
        e.kind === `HOUSE`
          ? `${e.label} ${br(e, e.need)}`
          : `${br(e, e.missing)} ${e.label}`
      )
      .join(`, `),
  Sr = c(_e),
  Cr = m({
    tierId: o(),
    reductionBps: s().int(),
    catCost: q,
    secondsSaved: s().int(),
    finalSeconds: s().int(),
    available: l(),
  }),
  wr = m({
    kind: Sr,
    timerId: o(),
    baseSeconds: s().int(),
    stakingReductionBps: s().int(),
    endsAt: o(),
    maxTotalReductionBps: s().int(),
    rushedBps: s().int(),
    catSpent: q,
    options: t(Cr),
    exhausted: l(),
  });
m({
  kind: Sr,
  timerId: o().uuid(),
  tierId: o().min(1),
  maxCatCost: q.optional(),
}),
  m({
    kind: Sr,
    timerId: o(),
    tierId: o(),
    catSpent: q,
    secondsSaved: s().int(),
    completesAt: o(),
    due: l(),
  });
var Tr = m({
    id: o(),
    amount: q,
    tierDays: s().int(),
    tierId: o().nullable(),
    constructionReductionBps: s().int(),
    recruitmentReductionBps: s().int(),
    lockedAt: o(),
    unlocksAt: o(),
    status: c(je),
    secondsRemaining: s().int(),
    unlocked: l(),
    migratedFrom: o().nullable(),
  }),
  Er = m({
    tierId: o().nullable(),
    tierLabel: o().nullable(),
    amount: q,
    days: s().int(),
    constructionReductionBps: s().int(),
    recruitmentReductionBps: s().int(),
  }),
  Dr = m({
    lockDays: t(s().int()),
    minStakeAmount: q,
    rejectBelowMinimum: l(),
    maxConstructionReductionBps: s().int(),
    maxRecruitmentReductionBps: s().int(),
    constructionCategories: t(c(ge)),
    allowEarlyUnstake: l(),
    allowMultiplePositions: l(),
    tiers: t(
      m({
        id: o(),
        label: o(),
        minAmount: q,
        benefits: t(
          m({
            days: s().int(),
            constructionReductionBps: s().int(),
            recruitmentReductionBps: s().int(),
          })
        ),
      })
    ),
  });
m({
  matrix: Dr,
  stakes: t(Tr),
  benefit: Er,
  progress: m({
    next: m({
      tierId: o(),
      tierLabel: o(),
      minAmount: q,
      needed: q,
      constructionReductionBps: s().int(),
      recruitmentReductionBps: s().int(),
    }).nullable(),
    max: m({
      tierId: o(),
      minAmount: q,
      days: s().int(),
      constructionReductionBps: s().int(),
      recruitmentReductionBps: s().int(),
    }),
  }),
  totalStaked: q,
  configVersion: s().int(),
  paysRewards: r(!1),
}),
  m({
    amount: J,
    tierDays: s().int().min(1).max(3650),
    minBenefit: m({
      constructionReductionBps: s().int().min(0),
      recruitmentReductionBps: s().int().min(0),
    }).optional(),
  });
var Or = m({
    baseSeconds: s().int(),
    stakingReductionBps: s().int(),
    finalSeconds: s().int(),
  }),
  kr = i(E, s().int()),
  Ar = m({ source: c(ke), bps: s().int() }),
  jr = m({
    type: O,
    name: o(),
    rarity: b,
    weightBps: s().int(),
    weightWithLuckBps: s().int(),
    pointsCategory: D.nullable(),
    rewardSymbol: o().nullable(),
    owned: s().int(),
  }),
  Mr = m({
    type: O,
    name: o(),
    rarity: b,
    enabled: l(),
    balance: s().int(),
    threshold: s().int(),
    perMiss: s().int(),
    selected: l(),
    craft: m({ catCost: q, resources: kr, hours: s() }),
    costRequirements: Z,
    canCraft: l(),
    craftBlockers: t(o()),
  }),
  Nr = m({
    permitTickets: s().int(),
    catTickets: s().int(),
    fragmentTarget: O.nullable(),
    fragments: t(Mr),
  }),
  Pr = m({
    type: O,
    name: o(),
    rarity: b,
    rewardSymbol: o().nullable(),
    buildingId: o(),
    fragmentsGranted: s().int(),
    fragmentTarget: O.nullable(),
  }),
  Fr = m({
    id: o(),
    status: c(Se),
    paidWith: c(Ce),
    catCost: q,
    resourcesCost: kr,
    startedAt: o(),
    readyAt: o(),
    revealedAt: o().nullable(),
    secondsRemaining: s().int(),
    claimable: l(),
    timer: Or,
    rush: wr.nullable(),
    oddsSnapshot: t(m({ type: O, weightBps: s().int() })),
    luckBonusBps: s().int(),
    luckSources: t(Ar),
    fragmentTarget: O.nullable(),
    serverSeedHash: o(),
    serverSeed: o().nullable(),
    configVersion: s().int(),
    result: Pr.nullable(),
  }),
  Ir = m({
    id: o(),
    status: c(Te),
    buildingIds: t(o()),
    buildingTypes: t(O),
    catCost: q,
    resourcesCost: kr,
    startedAt: o(),
    readyAt: o(),
    completedAt: o().nullable(),
    secondsRemaining: s().int(),
    claimable: l(),
    timer: Or,
    rush: wr.nullable(),
    permitId: o().nullable(),
  }),
  Lr = m({
    id: o(),
    target: O,
    status: c(Ee),
    fragmentsSpent: s().int(),
    catCost: q,
    resourcesCost: kr,
    startedAt: o(),
    readyAt: o(),
    completedAt: o().nullable(),
    secondsRemaining: s().int(),
    claimable: l(),
    timer: Or,
    rush: wr.nullable(),
    buildingId: o().nullable(),
  }),
  Rr = m({
    type: O,
    name: o(),
    rarity: b,
    weightBps: s().int(),
    pointsCategory: D.nullable(),
    rewardSymbol: o().nullable(),
    producesResource: E.nullable(),
    consumes: t(m({ resource: E, amountPerHour: s() })),
  }),
  zr = m({
    status: c(we),
    unlockLevel: s().int(),
    starterCatLevel: s().int(),
    tutorialCompleted: l(),
    grantedAt: o().nullable(),
    rolledAt: o().nullable(),
    permitId: o().nullable(),
    stationId: o().nullable(),
    table: t(Rr),
    excluded: t(m({ type: O, name: o() })),
  });
m({
  starter: zr,
  cost: m({ cat: q, resources: kr }),
  costRequirements: Z,
  hours: s(),
  durationSeconds: s().int(),
  baseDurationSeconds: s().int(),
  stakingReductionBps: s().int(),
  concurrency: m({ active: s().int(), max: s().int() }),
  table: t(jr),
  luckBonusBps: s().int(),
  luckSources: t(Ar),
  wallet: Nr,
  stations: m({ deployed: s().int(), stored: s().int(), slots: s().int() }),
  canStart: l(),
  canAfford: m({ cat: l(), resources: l() }),
  blockers: t(o()),
  recycling: m({
    enabled: l(),
    stationsRequired: s().int(),
    catCost: q,
    resources: kr,
    hours: s(),
    costRequirements: Z,
    candidates: t(
      m({
        buildingId: o(),
        type: O,
        name: o(),
        rarity: b,
        level: s().int(),
        deployed: l(),
      })
    ),
    active: t(Ir),
  }),
  crafts: t(Lr),
  active: t(Fr),
  history: t(Fr),
}),
  m({ useTicket: l().default(!1), maxCatCost: q.optional() }),
  m({ target: O }),
  m({ buildingIds: t(Y).min(1).max(10), maxCatCost: q.optional() }),
  m({ target: O, maxCatCost: q.optional() });
var Br = m({
    outcome: c(De),
    chanceBps: s().int(),
    rollBps: s().int(),
    outcomeRollBps: s().int(),
    fragments: s().int().optional(),
    fragmentTarget: O.optional(),
    tickets: s().int().optional(),
  }),
  Vr = [
    `DISABLED`,
    `STATION`,
    `SHIFT_TOO_SHORT`,
    `ALREADY_USED`,
    `FINISHED`,
    `NOT_ACTIVE`,
  ],
  Hr = m({
    tierId: o(),
    reductionBps: s().int(),
    catCost: q,
    secondsSaved: s().int(),
    secondsAfter: s().int(),
  }),
  Ur = m({
    available: l(),
    options: t(Hr),
    blocked: c(Vr).nullable(),
    free: l(),
    catCost: q,
    fullPriceCat: q.nullable(),
    reductionBps: s().int(),
    secondsSaved: s().int(),
    secondsAfter: s().int(),
    earnsRewardPoints: l(),
    normalizesPoints: l(),
    used: l(),
    usedAt: o().nullable(),
    usedFree: l(),
    catSpent: q,
    originalEndsAt: o().nullable(),
    pointFraction: o().nullable(),
  }),
  Wr = m({
    id: o(),
    userId: o(),
    catId: o(),
    catName: o(),
    catSerial: o(),
    buildingId: o(),
    buildingType: O,
    durationMinutes: pe,
    status: c(he),
    startedAt: o(),
    endsAt: o(),
    claimedAt: o().nullable(),
    cancelledAt: o().nullable(),
    secondsRemaining: s().int(),
    claimable: l(),
    cancellable: l(),
    cancelRefundsStamina: l(),
    cancelGraceSecondsRemaining: s().int(),
    staminaRefunded: o().nullable(),
    snapshot: Jn,
    result: Jn.nullable(),
    jackpot: Br.nullable(),
    storage: fr.nullable(),
    fastTrack: Ur,
  }),
  Gr = Wr.extend({
    snapshot: d(),
    result: d(),
    jackpot: d(),
    storage: d(),
    fastTrack: d(),
  }),
  Kr = (e) => e.snapshot !== null && e.fastTrack !== null;
m({ maxCatCost: q, tierId: o().optional() }),
  m({
    job: Wr,
    catSpent: q,
    free: l(),
    secondsSaved: s().int(),
    endsAt: o(),
    pointFraction: o(),
  }),
  m({ event: c([`BUTTON_SHOWN`, `CONFIRMATION_OPENED`, `DECLINED`]) }),
  m({ buildingId: Y, minutes: pe }),
  m({
    job: Wr,
    cat: X,
    granted: i(E, s().int()),
    resourceStorage: lr,
    points: m({ category: D, amount: o() }).nullable(),
    gamePoints: o(),
    xpGained: s().int(),
    levelUpAvailable: l(),
    jackpot: Br.nullable(),
  }),
  m({ minutes: v().pipe(pe) });
var qr = c([
    `WORKING`,
    `UNCLAIMED`,
    `NAPPING`,
    `RESTING`,
    `LISTED`,
    `BONDING`,
    `UPGRADING`,
    `IN_TRADE`,
    `LOW_STAMINA`,
  ]),
  Jr = m({
    kind: c([`RESOURCE`, `POINTS`, `XP`]),
    resource: E.nullable(),
    category: D.nullable(),
  }),
  Yr = m({
    catId: o(),
    rank: s().int().nullable(),
    blocker: qr.nullable(),
    blockedUntil: o().nullable(),
    professionMatch: l(),
    perHour: o(),
    total: o(),
    stamina: s(),
    staminaCost: s().int(),
    longestAffordableMinutes: s().int().nullable(),
    projection: Jn,
  });
m({
  buildingId: o(),
  buildingType: O,
  minutes: pe,
  rewardEligible: l(),
  metric: Jr,
  options: t(Yr),
  suggestedMinutes: s().int().nullable(),
}),
  m({
    status: c([`ACTIVE`, `CLAIMED`, `CANCELLED`]).optional(),
    limit: v().int().min(1).max(100).default(50),
  }),
  m({
    job: Wr,
    cat: X,
    elapsedSeconds: s().int(),
    staminaCharged: s().int(),
    staminaRefunded: o(),
    graceRefund: l(),
    forfeited: i(E, s().int()),
  });
var Xr = c(be),
  Zr = i(E, s().int()),
  Qr = m({
    id: o(),
    propertyId: o(),
    type: O,
    name: o(),
    rarity: b,
    core: l(),
    level: s().int(),
    deployed: l(),
    x: s().int(),
    y: s().int(),
    w: s().int(),
    h: s().int(),
    rotation: s().int(),
    footprint: m({ w: s().int(), h: s().int() }),
    condition: s(),
    status: Xr,
    source: c(xe),
    constructionCompletesAt: o().nullable(),
    secondsRemaining: s().int(),
    constructionTimer: Or.nullable(),
    slots: s().int(),
    slotsBreakdown: m({ base: s().int(), foreman: s().int() }),
    activeJobs: s().int(),
    preferredProfession: S.nullable(),
    producesResource: E.nullable(),
    pointsCategory: D.nullable(),
    rewardSymbol: o().nullable(),
    gamePointsPerHour: s(),
    consumes: t(m({ resource: E, amountPerHour: s() })),
    outputMultiplier: o(),
    hostsJobs: l(),
    nextLevel: m({
      level: s().int(),
      catCost: q,
      resourceCost: Zr,
      baseBuildHours: s(),
      buildHours: s(),
      requirements: Z.nullable(),
      canUpgrade: l(),
      timer: Or,
    }).nullable(),
    repair: m({
      needed: l(),
      points: s(),
      catCost: q,
      resources: Zr,
      affordable: l(),
    }),
    critical: l(),
    broken: l(),
    emergencyRepair: m({
      eligible: l(),
      available: l(),
      blockedBy: c([
        `DISABLED`,
        `NOT_CRITICAL`,
        `NOT_BROKEN`,
        `CAN_AFFORD_NORMAL_REPAIR`,
        `REPAIR_IN_PROGRESS`,
        `BUILDING_BUSY`,
        `COOLDOWN`,
      ]).nullable(),
      restoresTo: s(),
      durationSeconds: s().int(),
      cooldownSeconds: s().int(),
      cooldownRemaining: s().int(),
      catCost: q,
      resources: Zr,
      inProgress: l(),
      secondsRemaining: s().int(),
    }),
    canStartJob: l(),
    starter: l(),
    canStore: l(),
    canRecycle: l(),
    canDeploy: l(),
    canMove: l(),
    canRotate: l(),
    editBlockedBy: c([
      `NOT_DEPLOYED`,
      `ACTIVE_JOB`,
      `UNDER_CONSTRUCTION`,
      `REPAIRING`,
      `LAYOUT_COOLDOWN`,
    ]).nullable(),
    repairInProgress: m({
      id: o(),
      completesAt: o(),
      secondsRemaining: s().int(),
      rush: wr.nullable(),
    }).nullable(),
    rush: wr.nullable(),
    storedAt: o().nullable(),
    lifetimeHours: o(),
  }),
  $r = s().int().min(0).max(3);
m({
  x: s().int().min(0).max(64),
  y: s().int().min(0).max(64),
  rotation: $r.optional(),
}),
  m({
    x: s().int().min(0).max(64),
    y: s().int().min(0).max(64),
    rotation: $r.optional(),
  }),
  m({
    rotation: $r.optional(),
    turns: s().int().min(-3).max(3).optional(),
  }).refine(
    (e) => e.rotation !== void 0 || e.turns !== void 0,
    `Give either an absolute rotation or a number of quarter turns`
  ),
  m({
    type: O,
    name: o(),
    description: o(),
    rarity: b,
    core: l(),
    footprint: m({ w: s().int(), h: s().int() }),
    hostsJobs: l(),
    preferredProfession: S.nullable(),
    producesResource: E.nullable(),
    baseResourcePerHour: s(),
    pointsCategory: D.nullable(),
    basePointsPerHour: s(),
    gamePointsPerHour: s(),
    rewardSymbol: o().nullable(),
    consumes: t(m({ resource: E, amountPerHour: s(), fromLevel: s().int() })),
    slotsByLevel: t(s().int()),
    buildHours: s(),
    permitWeightBps: s().int(),
    obtainedBy: c([`CORE`, `PERMIT`, `STARTER`]),
    owned: s().int(),
    deployed: s().int(),
    stored: s().int(),
    fragmentTarget: l(),
  }),
  m({ permit: Fr, building: Qr, wallet: Nr }),
  m({ craft: Lr, building: Qr, wallet: Nr }),
  m({ maxCatCost: q.optional() });
var ei = c([`QUICK`, `REST`]),
  ti = c([`DISABLED`, `KIND`, `FINISHED`, `ALREADY_USED`]),
  ni = m({
    available: l(),
    blocked: ti.nullable(),
    catCost: q,
    reductionBps: s().int(),
    secondsSaved: s().int(),
    secondsAfter: s().int(),
    used: l(),
    catSpent: q,
  }),
  ri = m({
    id: o(),
    kind: ei,
    catId: o(),
    catName: o(),
    startedAt: o(),
    completesAt: o(),
    secondsRemaining: s().int(),
    ready: l(),
    catCost: q,
    fastTrack: ni,
  }),
  ii = m({
    buildingId: o(),
    level: s().int(),
    maxLevel: s().int(),
    quickNap: m({
      catCost: q,
      seconds: s().int(),
      minutes: s(),
      slots: s().int(),
      used: s().int(),
      active: t(ri),
    }),
    freeRest: m({
      enabled: l(),
      seconds: s().int(),
      minutes: s(),
      staminaRestored: s(),
      slots: s().int(),
      used: s().int(),
      active: t(ri),
    }),
    support: m({
      staminaRegenBonusBps: s().int(),
      storageBonusBps: s().int(),
      repairMaterialDiscountBps: s().int(),
      extraQueuedActions: s().int(),
      queuedActions: s().int(),
      storageCapacities: ur,
    }),
    nextLevel: m({
      level: s().int(),
      catCost: q,
      resourceCost: Zr,
      buildMinutes: s(),
      timer: Or,
      unlocks: t(o()),
      storageBonusBps: s().int(),
      storageCapacities: ur,
      queuedActions: s().int(),
      requirements: Z.nullable(),
    }).nullable(),
    upgrade: m({
      toLevel: s().int(),
      completesAt: o(),
      secondsRemaining: s().int(),
      claimable: l(),
    }).nullable(),
  });
m({ catId: Y, maxCatCost: q.optional() }), m({ maxCatCost: q });
var ai = m({
  id: o(),
  ownerId: o(),
  ownerUsername: o().nullable(),
  tier: s().int(),
  size: s().int(),
  name: o(),
  isOwner: l(),
  ownedCats: s().int(),
  nextTier: m({
    tier: s().int(),
    name: o(),
    size: s().int(),
    requiredCats: s().int(),
    catCost: q,
    resourceCost: Zr,
    baseBuildHours: s(),
    buildHours: s(),
    stakingReductionBps: s().int(),
    meetsCats: l(),
    requirements: Z.nullable(),
    canExpand: l(),
    stationSlots: s().int(),
    activeCats: s().int(),
    maxEffectiveLevel: s().int(),
  }).nullable(),
  expansion: m({
    id: o(),
    toTier: s().int(),
    completesAt: o(),
    secondsRemaining: s().int(),
    claimable: l(),
    timer: Or,
    rush: wr.nullable(),
  }).nullable(),
  buildings: t(Qr),
  storage: t(Qr),
  activeJobs: t(e([Wr, Gr])),
  cats: t(ar),
  resourceStorage: lr,
  stations: m({ deployed: s().int(), slots: s().int() }),
  activeCats: m({ working: s().int(), limit: s().int() }),
  maxEffectiveLevel: s().int(),
  house: ii,
  propertyQueue: m({ used: s().int(), slots: s().int() }),
  layout: m({
    storeFeeCat: q,
    cooldownSeconds: s().int(),
    cooldownRemaining: s().int(),
    free: l(),
  }),
  showcase: u(o(), h()),
});
m({
  napId: o(),
  catId: o(),
  catSpent: q,
  secondsSaved: s().int(),
  completesAt: o(),
  woken: l(),
  property: ai,
});
var oi = i(E, s().int()),
  si = m({
    baseBps: s().int(),
    resolveBps: s().int(),
    extraBps: s().int(),
    finalBps: s().int(),
    extraMultiplier: s(),
    guaranteedAvailable: l(),
    extraCapBps: s().int().nullable(),
    maxChanceBps: s().int(),
  }),
  ci = m({
    chanceBps: s().int(),
    extraBps: s().int(),
    extraMultiplier: s(),
    catCost: q,
  }),
  li = m({
    catDestroyed: r(!1),
    levelLost: r(!1),
    xpPreserved: r(!0),
    catCostConsumed: r(!0),
    resourceRefundBps: s().int(),
    resolveStepPct: s().int(),
    resolveMaxPct: s().int(),
  });
m({ targetChancePct: v().int().min(0).max(100).optional() });
var ui = m({
  levelBps: m({ now: s().int(), after: s().int() }),
  capped: l(),
  perLevelBps: s().int(),
  at: m({
    buildingType: o(),
    buildingName: o(),
    buildingLevel: s().int(),
    unit: o(),
    perHour: m({ now: o(), after: o() }),
    longestShift: m({ minutes: s().int(), now: o(), after: o() }),
    points: m({
      category: o(),
      perHour: m({ now: o(), after: o() }),
    }).nullable(),
  }).nullable(),
});
m({
  catId: o(),
  currentLevel: s().int(),
  targetLevel: s().int(),
  levelCap: s().int(),
  xp: m({ current: s().int(), required: s().int(), met: l() }),
  chance: si,
  costs: m({ baseCatCost: q, catCost: q, resources: oi }),
  prepSeconds: s().int(),
  guaranteedMultiplier: s(),
  guaranteedUntilLevel: s().int(),
  stops: t(ci),
  effectiveBaseBps: s().int(),
  resolvePct: s().int(),
  requirements: Z,
  failure: li,
  canAfford: m({ cat: l(), resources: l() }),
  canUpgrade: l(),
  blockers: t(o()),
  gain: ui,
}),
  m({
    targetChancePct: s().int().min(0).max(100).optional(),
    maxCatCost: q.optional(),
  });
var di = m({
  id: o(),
  catId: o(),
  fromLevel: s().int(),
  targetLevel: s().int(),
  status: c(ae),
  chance: si,
  catCost: q,
  resourcesCost: oi,
  resourcesRefunded: oi.nullable(),
  readyAt: o(),
  resolvedAt: o().nullable(),
  rollBps: s().int().nullable(),
  secondsRemaining: s().int(),
  resolvable: l(),
  rush: wr.nullable(),
  createdAt: o(),
});
m({ attempt: di, cat: X, success: l() });
var fi = m({
    id: o(),
    status: c(oe),
    startedAt: o(),
    readyAt: o(),
    claimedAt: o().nullable(),
    secondsRemaining: s().int(),
    claimable: l(),
    timer: Or,
    rush: wr.nullable(),
    catCost: q,
    resourcesCost: i(E, s().int()),
    paidWith: c(w),
    pityApplied: l(),
    oddsSnapshot: u(b, s().int()).nullable(),
    luckBonusBps: s().int(),
    serverSeedHash: o(),
    serverSeed: o().nullable(),
    resultCat: X.nullable(),
  }),
  pi = m({
    minSequence: s().int(),
    maxSequence: s().int().nullable(),
    catCost: q,
    resources: i(E, s().int()),
    durationSeconds: s().int(),
  });
m({
  costs: m({ cat: q, resources: i(E, s().int()) }),
  costRequirements: Z,
  durationSeconds: s().int(),
  baseDurationSeconds: s().int(),
  stakingReductionBps: s().int(),
  requirements: m({
    tutorialReady: l(),
    starterLevel: s().int(),
    minStarterLevel: s().int(),
    canAffordCat: l(),
    canAffordResources: l(),
    slotsAvailable: l(),
    capacityAvailable: l(),
  }),
  capacity: rr,
  canStart: l(),
  firstRecruitCredit: m({ available: s().int(), applies: l(), covers: q }),
  isFirstRecruitment: l(),
  ladder: m({
    lifetimeRecruited: s().int(),
    sequence: s().int(),
    range: pi,
    nextRange: pi.nullable(),
  }),
  tickets: s().int(),
  canUseTicket: l(),
  canStartWithTicket: l(),
  blockers: t(o()),
  odds: u(b, s().int()),
  oddsWithLuck: u(b, s().int()),
  luckBonusBps: s().int(),
  luckSources: t(Ar),
  pity: m({
    count: s().int(),
    everyN: s().int(),
    nextGuaranteed: l(),
    minRarity: b,
  }),
  active: t(fi),
  history: t(fi),
}),
  m({ useTicket: l().default(!1), maxCatCost: q.optional() });
var mi = m({
  id: o(),
  catId: o(),
  sellerId: o(),
  sellerUsername: o().nullable(),
  price: q,
  status: c(Ue),
  createdAt: o(),
  soldAt: o().nullable(),
  cat: ar,
  isMine: l(),
});
mi.extend({
  listedLevel: s().int(),
  sale: m({
    buyerUsername: o().nullable(),
    feeAmount: q,
    sellerNet: q,
  }).nullable(),
  cancelledAt: o().nullable(),
  cancelledBy: c([`SELLER`, `STAFF`]).nullable(),
});
var hi = (e, n) =>
    o()
      .optional()
      .transform((e) =>
        e
          ? [
              ...new Set(
                e
                  .split(`,`)
                  .map((e) => e.trim().toUpperCase())
                  .filter(Boolean)
              ),
            ]
          : []
      )
      .pipe(t(e).max(n)),
  gi = v().int().min(0).max(100).optional(),
  _i = 1e4,
  vi = [
    `newest`,
    `price_asc`,
    `price_desc`,
    `level_desc`,
    `level_asc`,
    `stats_desc`,
    `productivity_desc`,
    `efficiency_desc`,
    `luck_desc`,
    `endurance_desc`,
  ],
  yi = {
    newest: `Newest`,
    price_asc: `Price: low to high`,
    price_desc: `Price: high to low`,
    level_desc: `Level: high to low`,
    level_asc: `Level: low to high`,
    stats_desc: `Total stats`,
    productivity_desc: `Productivity`,
    efficiency_desc: `Efficiency`,
    luck_desc: `Luck`,
    endurance_desc: `Endurance`,
  };
m({
  q: o().max(40).optional(),
  rarity: hi(c(y), y.length),
  profession: hi(c(te), te.length),
  minLevel: v().int().min(1).max(100).optional(),
  maxLevel: v().int().min(1).max(100).optional(),
  minPrice: q.optional(),
  maxPrice: q.optional(),
  minProductivity: gi,
  minEfficiency: gi,
  minLuck: gi,
  minEndurance: gi,
  traits: hi(o().regex(/^[A-Z_]{1,41}$/), 10),
  sort: c(vi).default(`newest`),
  page: v().int().min(1).max(_i).default(1),
  limit: v().int().min(1).max(50).default(24),
}),
  m({
    listings: t(mi),
    page: s().int(),
    limit: s().int(),
    total: s().int(),
    hasMore: l(),
  }),
  m({ catId: Y, price: J });
var bi = m({
  id: o(),
  listingId: o(),
  catId: o(),
  catSerial: o(),
  catName: o(),
  rarity: b,
  profession: S,
  level: s().int(),
  sellerId: o(),
  sellerUsername: o().nullable(),
  buyerId: o(),
  buyerUsername: o().nullable(),
  price: q,
  feeAmount: q,
  sellerNet: q,
  createdAt: o(),
});
m({
  byRarity: u(b, q.nullable()),
  byProfession: u(S, q.nullable()),
  activeListings: s().int(),
  feeBps: s().int(),
});
var xi = m({
  userId: o(),
  username: o().nullable(),
  memberSince: o(),
  activeListings: s().int(),
  totalSales: s().int(),
  totalPurchases: s().int(),
});
mi.extend({
  seller: xi,
  catSaleHistory: t(bi),
  feeBps: s().int(),
  buyerTotal: q,
  sellerNet: q,
}),
  m({ sale: bi, cat: ar });
var Si = c([`INITIATOR`, `COUNTERPARTY`]),
  Ci = m({
    userId: o(),
    username: o().nullable(),
    role: Si,
    catAmount: q,
    cats: t(ar),
    confirmed: l(),
  });
m({
  id: o(),
  status: c(We),
  initiator: Ci,
  counterparty: Ci,
  summaryHash: o(),
  expiresAt: o(),
  secondsRemaining: s().int(),
  createdAt: o(),
  updatedAt: o(),
  completedAt: o().nullable(),
  viewerRole: Si.nullable(),
  canConfirm: l(),
});
var wi = m({ catIds: t(Y).max(10).default([]), catAmount: q.default(`0`) });
m({ counterpartyId: Y, offer: wi, request: wi }),
  m({ summaryHash: o().min(1) });
var Ti = m({
    symbol: o(),
    displayName: o(),
    chainId: s().int(),
    contractAddress: o().nullable(),
    decimals: s().int(),
    provider: o(),
    enabled: l(),
    fundable: l(),
    lastVerifiedAt: o().nullable(),
    simulated: l(),
  }),
  Ei = m({
    status: c(Pe),
    amount: q,
    quoteSpent: q,
    fundedAt: o().nullable(),
    reason: o().nullable(),
    simulated: l(),
    unitPrice: q.nullable(),
    priceSource: c([`PURCHASED`, `CONFIGURED`]).nullable(),
  }),
  Di = m({
    id: o(),
    kind: c(Fe),
    category: o(),
    symbol: o(),
    displayName: o(),
    themeLabel: o(),
    provider: o(),
    simulated: l(),
    enabled: l(),
    asset: Ti.nullable(),
    funding: Ei.nullable(),
    prizeStatus: c([`GROWING`, ...Pe]),
    prizeReason: o().nullable(),
    epochRewardAmount: q,
    myPoints: o(),
    totalPoints: o(),
    estimatedShare: q,
    estimatedSharePct: o(),
    contributors: s().int(),
    prizeQuote: q.nullable(),
    contributions: t(m({ buildingType: o(), points: o(), shifts: s().int() })),
  }),
  Oi = m({
    id: o(),
    epochNumber: s().int(),
    startsAt: o(),
    endsAt: o(),
    status: c(Ae),
    secondsRemaining: s().int(),
    closedAt: o().nullable(),
    finalizedAt: o().nullable(),
  }),
  ki = c([
    `PREPARING`,
    `READY`,
    `CONFIRMING`,
    `COLLECTED`,
    `HELD`,
    `SIMULATED`,
    `EXPIRED`,
  ]),
  Ai = m({
    contract: o(),
    chainId: s().int(),
    claimId: o(),
    token: o(),
    recipient: o(),
    amountUnits: o(),
    deadline: s().int(),
    signature: o(),
  }),
  ji = m({
    claimId: o(),
    allocationId: o().nullable(),
    creatorEntitlementId: o().nullable(),
    state: ki,
    epochNumber: s().int().nullable(),
    creatorWeekNumber: s().int().nullable(),
    symbol: o(),
    amount: q,
    token: m({ address: o().nullable(), decimals: s().int() }),
    ticket: Ai.nullable(),
    txHash: o().nullable(),
    explorerTxUrl: o().nullable(),
  });
m({ txHash: o().regex(/^0x[0-9a-fA-F]{64}$/, `A transaction hash`) });
var Mi = m({
    id: o(),
    source: c(Ie),
    epochId: o(),
    epochNumber: s().int(),
    poolKind: c(Fe),
    category: o(),
    symbol: o(),
    points: o(),
    totalPoints: o(),
    sharePct: o(),
    amount: q,
    eligible: l(),
    ineligibleReason: o().nullable(),
    status: c([`ALLOCATED`, `CLAIMED`, `HELD`, `EXPIRED`]),
    claimable: l(),
    simulated: l(),
    claimId: o().nullable(),
    collect: ki.nullable(),
  }),
  Ni = m({
    id: o(),
    claimId: o(),
    epochNumber: s().int(),
    category: o(),
    symbol: o(),
    amount: q,
    status: o(),
    provider: o(),
    chainId: s().int().nullable(),
    simulated: l(),
    label: o(),
    txHash: o().nullable(),
    createdAt: o(),
  }),
  Pi = m({
    catId: o(),
    name: o(),
    serial: o(),
    rarity: b,
    profession: S,
    appearanceSeed: o(),
    ownerId: o(),
    ownerUsername: o().nullable(),
    productionBps: s().int(),
    epochNumber: s().int(),
    chosenAt: o(),
  }),
  Fi = m({
    enabled: l(),
    amount: q,
    vaultBalance: q,
    myPoints: o(),
    totalPoints: o(),
    estimatedShare: q,
    estimatedSharePct: o(),
  });
m({
  provider: m({
    name: o(),
    simulated: l(),
    label: o(),
    collectedByPlayer: l(),
  }),
  currentEpoch: Oi.nullable(),
  closingEpoch: m({ epochNumber: s().int(), endsAt: o() }).nullable(),
  pools: t(Di),
  catPool: Fi,
  treasury: m({
    quoteAsset: o(),
    quoteBalance: q,
    revenueThisEpoch: q,
    simulated: l(),
  }),
  eligibility: m({
    eligible: l(),
    reasons: t(o()),
    rules: m({
      minAccountAgeHours: s(),
      requireTutorialComplete: l(),
      minCatLevel: s().int(),
      minClaimedJobs: s().int(),
      requireSpendOrDeposit: l(),
      minSpendOrDeposit: q,
    }),
  }),
  allocations: t(Mi),
  credits: t(Ni),
  luckyCat: Pi.nullable(),
}),
  m({
    allocation: Mi,
    credit: Ni.nullable(),
    status: c([`CREDITED`, `HELD`, `PENDING`, `COLLECT`]),
    collect: ji.nullable(),
  });
var Ii = m({
  rank: s().int(),
  userId: o(),
  username: o(),
  value: o(),
  extra: u(o(), h()).optional(),
});
m({ key: qe, label: o(), computedAt: o(), entries: t(Ii), me: Ii.nullable() }),
  m({ boards: t(m({ key: qe, label: o(), computedAt: o(), top: t(Ii) })) });
var Li = m({
    id: o(),
    referredUsername: o().nullable(),
    purpose: o(),
    amount: q,
    status: c([`EARNED`, `HOLD`, `RELEASED`, `REVOKED`]),
    holdReason: o().nullable(),
    createdAt: o(),
  }),
  Ri = m({
    id: o(),
    referredUserId: o(),
    referredUsername: o().nullable(),
    milestone: c(Ye),
    status: c(Ze),
    reward: m({ stationTickets: s().int() }),
    holdReason: o().nullable(),
    createdAt: o(),
  });
m({ code: o().trim().min(1).max(32) }),
  m({
    code: o(),
    url: o(),
    rateBps: s().int(),
    referredCount: s().int(),
    totals: m({ earned: q, held: q, released: q, all: q }),
    earnings: t(Li),
    referredPlayers: t(
      m({ userId: o(), username: o().nullable(), joinedAt: o() })
    ),
    household: m({
      active: l(),
      bonusBps: s().int(),
      activeDays: s().int(),
      selfActive: l(),
      partners: t(
        m({
          userId: o(),
          username: o().nullable(),
          role: c([`REFERRER`, `REFEREE`]),
          activeThisWeek: l(),
        })
      ),
    }),
    milestones: t(Ri),
    milestoneDefinitions: t(
      m({ id: c(Ye), label: o(), stationTickets: s().int() })
    ),
    refereeTicket: l(),
  });
var zi = m({
    id: o(),
    type: o(),
    title: o(),
    body: o(),
    data: u(o(), h()),
    readAt: o().nullable(),
    createdAt: o(),
  }),
  Bi = [
    `JOB_COMPLETE`,
    `PERMIT_READY`,
    `RECYCLING_READY`,
    `CRAFT_READY`,
    `PERMIT_REVEALED`,
    `CRAFT_COMPLETE`,
    `STARTER_PERMIT_READY`,
    `REWARD_ALLOCATED`,
    `TRADE_INVITE`,
    `CREATOR_REWARD_READY`,
  ],
  Vi = [
    `LUCKY_CAT`,
    `JACKPOT`,
    `RECRUIT_ARRIVED`,
    `CAT_SOLD`,
    `NAP_COMPLETE`,
    `REWARD_WEEK_ENDED`,
    `REWARD_CREDITED`,
    `REWARD_EXPIRED`,
    `REWARD_HELD`,
    `REFERRAL_MILESTONE`,
    `WITHDRAWAL_CONFIRMED`,
    `WITHDRAWAL_REFUNDED`,
    `TRADE_COMPLETED`,
    `TRADE_REQUEST`,
    `CREATOR_REWARD_PAID`,
    `CREATOR_REWARD_EXPIRED`,
    `CREATOR_REWARD_REVOKED`,
  ],
  Hi = (e) => Bi.includes(e),
  Ui = (e) => Vi.includes(e);
m({ ids: t(Y).max(200).optional(), all: l().optional() });
var Wi = [`shifts`, `ready`, `rewards`, `trades`, `wallet`, `naps`],
  Gi = {
    shifts: {
      label: `Shifts finished`,
      hint: `One buzz for a batch: "3 shifts finished", not three.`,
      defaultOn: !0,
    },
    ready: {
      label: `Ready to collect`,
      hint: `A Business Permit to reveal, a Blueprint or a recycling to collect.`,
      defaultOn: !0,
    },
    rewards: {
      label: `Rewards`,
      hint: `A Reward Round ending, rewards to claim, your Lucky Cat, a referral milestone.`,
      defaultOn: !0,
    },
    trades: {
      label: `Trades and sales`,
      hint: `A trade offer, a trade done, a Cat sold.`,
      defaultOn: !0,
    },
    wallet: {
      label: `Withdrawals`,
      hint: `A withdrawal gone through, or returned.`,
      defaultOn: !0,
    },
    naps: {
      label: `Rested Cats`,
      hint: `A Cat back from a nap. Frequent while you play.`,
      defaultOn: !1,
    },
  },
  Ki = new Set([
    `fcm.googleapis.com`,
    `android.googleapis.com`,
    `updates.push.services.mozilla.com`,
    `push.services.mozilla.com`,
    `web.push.apple.com`,
  ]),
  qi = [`.notify.windows.com`, `.push.apple.com`];
function Ji(e) {
  let t = /^https:\/\/([a-z0-9.-]+)\//i.exec(e)?.[1];
  if (!t) return !1;
  let n;
  try {
    n = new URL(e);
  } catch {
    return !1;
  }
  if (n.protocol !== `https:` || n.username || n.password || n.port) return !1;
  let r = n.hostname.toLowerCase();
  return r === t.toLowerCase()
    ? Ki.has(r) || qi.some((e) => r.endsWith(e))
    : !1;
}
function Yi(e) {
  if (!/^[A-Za-z0-9_-]+={0,2}$/.test(e)) return null;
  let t = e.replace(/=+$/, ``).replace(/-/g, `+`).replace(/_/g, `/`);
  try {
    let e = atob(t + `=`.repeat((4 - (t.length % 4)) % 4));
    return Uint8Array.from(e, (e) => e.charCodeAt(0));
  } catch {
    return null;
  }
}
m({
  endpoint: o()
    .max(2048)
    .refine(Ji, `Not the address of a browser push service`),
  expirationTime: s().nullable().optional(),
  keys: m({
    p256dh: o()
      .max(200)
      .refine((e) => {
        let t = Yi(e);
        return t?.length === 65 && t[0] === 4;
      }, `Not a P-256 public key`),
    auth: o()
      .max(100)
      .refine((e) => Yi(e)?.length === 16, `Not a 16-byte auth secret`),
  }),
}),
  m({ endpoint: o().max(2048) }),
  m({
    kinds: m(Object.fromEntries(Wi.map((e) => [e, l().optional()]))).strict(),
  });
var Xi =
    `users.wallets.sessions.cats.recruitments.upgrade-attempts.properties.buildings.jobs.listings.sales.trades.token-ledger.resource-ledger.referral-relationships.referral-earnings.reward-pools.reward-epochs.reward-allocations.claims.credits.stakes.risk-profiles.risk-signals.chat-messages.moderation-actions.security-events.audit-logs.announcements.config-versions.rng-rolls.permits.recyclings.blueprint-crafts.blueprint-fragments.pack-ledger.pack-wallets.lucky-cats.referral-milestones.deposit-intents.withdrawals.treasury-ledger.pool-fundings`.split(
      `.`
    ),
  Zi = c(Xi);
m({
  q: o().max(80).optional(),
  userId: Y.optional(),
  page: v().int().min(1).max(1e4).default(1),
  limit: v().int().min(1).max(200).default(50),
}),
  m({
    section: Zi,
    rows: t(u(o(), h())),
    page: s().int(),
    limit: s().int(),
    total: s().int(),
  }),
  ((e) => m({ days: v().int().min(1).max(365).default(e) }))(7);
var Q = o().trim().min(3).max(500);
m({
  action: c([
    `FREEZE`,
    `UNFREEZE`,
    `HOLD_REWARDS`,
    `RELEASE_REWARDS`,
    `BAN_LOGIN`,
    `UNBAN_LOGIN`,
    `SET_TEST`,
    `UNSET_TEST`,
    `MUTE`,
    `UNMUTE`,
  ]),
  reason: Q,
  hours: s().min(0).max(8760).optional(),
}),
  m({
    resources: i(E, s().int().min(1).max(1e6)),
    reason: Q,
    bypassStorage: l().optional(),
  }),
  m({ amount: J, reason: Q });
var Qi = 1e4;
m({
  amount: J.refine(
    (e) => K(e).lte(Qi),
    `One faucet request may send at most ${Qi.toLocaleString(
      `en-US`
    )} test $PAWS`
  ),
  reason: Q,
}),
  m({ ms: s().int().min(1e3).max(2592e6), reason: Q }),
  m({ maxSeconds: s().int().min(0).max(86400), reason: Q }),
  m({
    catId: Y,
    xp: s().int().min(1).max(1e6).optional(),
    level: s().int().min(1).max(100).optional(),
    reason: Q,
  }).refine((e) => (e.xp === void 0) != (e.level === void 0), {
    message: `Set exactly one of xp or level`,
  });
var $i = `RESET EVERYTHING`;
m({
  confirm: r($i),
  grantSuperAdmin: l().default(!1),
  keepTokenBalances: l().default(!0),
  timeScaleBps: s().int().min(1).max(1e4).optional(),
  resumeRealTime: l().default(!0),
  reason: Q,
}),
  m({ toUserId: Y, reason: Q }),
  m({ reason: Q, dryRun: l().default(!0) }),
  m({ reason: Q }),
  m({ config: h(), reason: Q }),
  m({ action: c([`CREDIT`, `REJECT`]), reason: Q }),
  m({ hold: l(), flagged: l().optional(), note: Q }),
  m({ action: c([`RELEASE`, `REVOKE`]), reason: Q }),
  m({ title: o().min(2).max(120), body: o().min(2).max(1e3) }),
  m({
    permitTickets: s().int().min(0).max(1e3).optional(),
    catTickets: s().int().min(0).max(1e3).optional(),
    fragments: m({ target: O, amount: s().int().min(1).max(1e4) }).optional(),
    reason: Q,
  }).refine(
    (e) =>
      (e.permitTickets ?? 0) +
        (e.catTickets ?? 0) +
        (e.fragments?.amount ?? 0) >
      0,
    `Grant at least one ticket or fragment`
  ),
  m({
    type: O,
    placement: c([`storage`, `auto`]).default(`storage`),
    reason: Q,
  }),
  m({ tier: s().int().min(1).max(10), reason: Q });
var ea = c(Ge);
m({ role: ea.nullable(), reason: Q }),
  m({ amount: J, note: o().max(200).optional(), reason: Q }),
  m({ category: D, action: c([`FUND`, `PAUSE`, `UNPAUSE`]), reason: Q }),
  m({ category: D, reason: Q }),
  m({
    category: D,
    contractAddress: o()
      .regex(/^0x[0-9a-fA-F]{40}$/)
      .nullable(),
    decimals: s().int().min(0).max(36).optional(),
    provider: c([`mock`, `erc20`]).optional(),
    fundable: l().optional(),
    referencePrice: J.optional(),
    purchasePool: m({
      fee: s().int().min(0).max(8388608),
      tickSpacing: s().int().min(1).max(32767),
      hooks: o().regex(/^0x[0-9a-fA-F]{40}$/),
    }).optional(),
    reason: Q,
  }),
  m({ profile: o().min(1).max(64), reason: Q }),
  m({ action: c([`APPROVE`, `REJECT`]), reason: Q });
var ta = `BURN RESERVE`;
m({ to: c([`REWARD_VAULT`, `BURN`]), amount: J, reason: Q });
var na = o().regex(/^0x[0-9a-fA-F]{64}$/);
m({
  chain: m({
    id: s().int(),
    name: o(),
    explorerUrl: o().nullable(),
    testnet: l(),
  }),
  token: m({
    kind: c([`mock`, `erc20`]),
    symbol: o(),
    simulated: l(),
    address: o().nullable(),
    decimals: s().int(),
    explorerUrl: o().nullable(),
  }),
  address: o().nullable(),
  onChainBalance: q.nullable(),
  gameBalance: q,
  pendingWithdrawals: q,
  unfinalisedDeposits: q,
  vault: m({
    kind: c([`mock`, `erc20`]),
    simulated: l(),
    address: o().nullable(),
    explorerUrl: o().nullable(),
    backing: q.nullable(),
    liabilities: q,
    solvent: l().nullable(),
  }),
  depositsEnabled: l(),
  mockDepositsEnabled: l(),
  withdrawalsEnabled: l(),
  withdrawalsPausedReason: o().nullable(),
  withdrawal: m({
    minAmount: q,
    dailyRemaining: q.nullable(),
    reviewRequired: l(),
  }),
}),
  m({ expectedAmount: J.optional() });
var ra = m({
  id: o(),
  chainId: s().int(),
  tokenAddress: o().nullable(),
  vaultAddress: o().nullable(),
  fromAddress: o(),
  expectedAmount: q.nullable(),
  status: c(Me),
  txHash: o().nullable(),
  confirmedAmount: q.nullable(),
  expiresAt: o(),
  createdAt: o(),
  confirmedAt: o().nullable(),
  explorerUrl: o().nullable(),
  simulated: l(),
});
m({ intentId: Y.optional(), txHash: na }),
  m({ intent: ra, amount: q, balanceAfter: q, credited: l() }),
  m({ amount: J, toAddress: Gn.optional() });
var ia = m({
  id: o(),
  chainId: s().int(),
  toAddress: o(),
  amount: q,
  status: c(Ne),
  providerRef: o().nullable(),
  txHash: o().nullable(),
  explorerUrl: o().nullable(),
  holdReason: o().nullable(),
  attempts: s().int(),
  lastError: o().nullable(),
  simulated: l(),
  createdAt: o(),
  updatedAt: o(),
});
m({ amount: J }),
  m({ gameBalance: q, pendingWithdrawals: q, staked: q }),
  m({
    id: o(),
    kind: o(),
    purpose: o().nullable(),
    delta: q,
    balanceAfter: q,
    refType: o().nullable(),
    refId: o().nullable(),
    createdAt: o(),
  }),
  m({ deposits: t(ra), withdrawals: t(ia) });
var aa = [`OFF`, `STAFF_ONLY`, `COUNTRY`, `NOT_READY`, `ACCOUNT`],
  $ = o().regex(/^0x[0-9a-fA-F]{40}$/),
  oa = o().regex(/^0x[0-9a-fA-F]{64}$/),
  sa = m({
    limits: m({
      minUsdg: q,
      maxUsdg: q,
      defaultSlippageBps: s().int(),
      warnImpactBps: s().int(),
      blockImpactBps: s().int(),
      quoteMaxAgeSeconds: s().int(),
      deadlineSeconds: s().int(),
    }),
    payWith: m({ usdg: l(), eth: l() }),
    ethRoute: m({ weth: $, v3Quoter: $, fee: s().int() }).nullable(),
    fundingHelp: l(),
    bridge: l(),
    riskLine: o(),
    chain: m({
      id: s().int(),
      name: o(),
      rpcUrl: o(),
      explorerUrl: o(),
      testnet: l(),
    }),
    contracts: m({
      universalRouter: $,
      permit2: $,
      v4Quoter: $,
      stateView: $,
      poolManager: $,
      vault: $,
      hook: $,
    }),
    pool: m({
      currency0: $,
      currency1: $,
      fee: s().int(),
      tickSpacing: s().int(),
      hooks: $,
      id: oa,
    }),
    paws: m({ address: $, decimals: s().int() }),
    usdg: m({ address: $, decimals: s().int() }),
    wallet: $,
  });
m({
  visible: l(),
  hiddenReason: c(aa).nullable(),
  notReadyDetail: o().nullable(),
  mode: c([`off`, `staff`, `everyone`]),
  staff: l(),
  country: o().nullable(),
  countryHidden: l(),
  setup: sa.nullable(),
});
var ca = c(ze),
  la = i(E, s().int()),
  ua = m({
    step: Re,
    kind: c([`ACK`, `VISIT`, `FACT`]),
    done: l(),
    completedAt: o().nullable(),
    reward: la.nullable(),
    skipped: l(),
  }),
  da = m({ id: o(), label: o(), done: l(), current: l() });
m({
  version: s().int(),
  mandatory: l(),
  active: l(),
  completedAt: o().nullable(),
  current: Re,
  steps: t(ua),
  objectives: t(da),
  objectivesDone: s().int(),
  visited: t(Be),
  facts: m({
    starterCatId: o().nullable(),
    starterLevel: s().int(),
    starterXp: s().int(),
    starterXpRequired: s().int(),
    lumberCampId: o().nullable(),
    activeJobs: s().int(),
    jobStarted: l(),
    jobClaimed: l(),
    starterPermit: m({
      rolled: l(),
      stationId: o().nullable(),
      stationType: O.nullable(),
      deployed: l(),
    }),
    recruitment: m({
      started: l(),
      claimed: l(),
      activeId: o().nullable(),
      readyAt: o().nullable(),
    }),
    freeFastTrack: m({ granted: l(), used: l(), jobId: o().nullable() }),
    managed: m({ moved: l(), rotated: l(), releasePreviewed: l() }),
    secondCatId: o().nullable(),
  }),
  flags: m({
    starterResourcesGranted: l(),
    starterPermitGranted: l(),
    starterPermitRolled: l(),
    firstRecruitmentCreditGranted: l(),
    firstJobStarted: l(),
    firstJobCompleted: l(),
    firstTutorialFastTrackGranted: l(),
    firstTutorialFastTrackConsumed: l(),
    firstBusinessPlaced: l(),
    cat2RecruitmentStarted: l(),
    cat2Claimed: l(),
    trainerVisited: l(),
    recruitmentVisited: l(),
    permitOfficeVisited: l(),
    rewardsVisited: l(),
    marketplaceVisited: l(),
    firstBusinessMoved: l(),
    firstBusinessRotated: l(),
    stationManagementExplained: l(),
    catManagementExplained: l(),
    releaseCatWarningViewed: l(),
    twoCatsAssignedToWork: l(),
  }),
  rewardsPending: la,
}),
  m({ step: Re }),
  m({ place: Be }),
  m({ event: ca, step: Re }),
  f(`action`, [
    m({ action: r(`COMPLETE`), reason: o().min(3).max(500) }),
    m({ action: r(`RESET`), reason: o().min(3).max(500) }),
    m({
      action: r(`JUMP`),
      step: Re.exclude([`COMPLETE`]),
      reason: o().min(3).max(500),
    }),
  ]);
var fa = m({
  step: Re,
  milestone: o().nullable(),
  kind: c([`ACK`, `VISIT`, `FACT`]),
  completed: s().int(),
  current: s().int(),
  stalled: s().int(),
  medianSeconds: s().nullable(),
  resumed: s().int(),
  errors: s().int(),
});
m({
  version: s().int(),
  windowDays: s().int(),
  started: s().int(),
  completed: s().int(),
  medianMinutesToComplete: s().nullable(),
  steps: t(fa),
}),
  m({
    countryCode: o()
      .trim()
      .regex(/^[A-Za-z]{2}$/, `A two-letter country code`),
    adult: l(),
    acceptTerms: l(),
  }),
  m({ url: o().trim().min(10).max(300), attest: r(!0) }),
  m({ authorizeUrl: o() });
var pa = m({
    tiers: m({ STANDARD: s().int(), GREAT: s().int(), FEATURED: s().int() }),
    perReferral: s().int(),
    maxPerCreatorRound: s().int().nullable(),
  }),
  ma = m({
    id: o(),
    weekNumber: s().int(),
    startsAt: o(),
    endsAt: o(),
    submissionsCloseAt: o(),
    finalizesAt: o(),
    status: c(Qe),
    submissionsOpen: l(),
    poolStatus: c($e),
    symbol: o(),
    poolUnits: q,
    pendingQuote: q,
    quoteAsset: o(),
    totalPoints: s().int(),
  }),
  ha = m({
    id: o(),
    weekNumber: s().int().nullable(),
    postUrl: o(),
    postCreatedAt: o(),
    submittedAt: o(),
    status: c(et),
    display: c(at),
    rejectReason: c(nt).nullable(),
    tier: c(tt).nullable(),
    points: s().int().nullable(),
  }),
  ga = m({
    weekNumber: s().int(),
    postPoints: s().int(),
    referralPoints: s().int(),
    referrals: s().int(),
    points: s().int(),
    estimatedSharePct: o().nullable(),
    estimatedReward: q.nullable(),
  });
m({
  enabled: l(),
  xReady: l(),
  asset: m({ symbol: o(), displayName: o() }),
  requiredDisclosure: o(),
  requirePaidPartnershipLabel: l(),
  maxPerCreatorRound: s().int(),
  maxPostAgeHours: s().int(),
  points: pa,
  blockedCountries: t(o()),
  week: ma.nullable(),
  profile: m({ countryCode: o(), eligibility: c(rt) }).nullable(),
  connection: m({ username: o(), connectedAt: o() }).nullable(),
  payoutsHeld: l(),
  standing: ga.nullable(),
  submissions: t(ha),
}),
  m({
    weekNumber: s().int().nullable(),
    totalPoints: s().int(),
    rows: t(
      m({
        rank: s().int(),
        creator: o(),
        points: s().int(),
        approvedPosts: s().int(),
        referrals: s().int(),
        sharePct: o(),
      })
    ),
  }),
  m({ claimId: o(), collect: ji.nullable() });
var _a = o().trim().min(3).max(500);
m({
  status: c(et).optional(),
  held: c([`true`, `false`]).optional(),
  weekNumber: v().int().min(1).optional(),
  q: o().max(80).optional(),
  page: v().int().min(1).max(1e4).default(1),
  limit: v().int().min(1).max(200).default(50),
}),
  m({ tier: c(tt), note: o().trim().max(500).optional() }),
  m({ tier: c(tt), note: _a }),
  m({ reasonCode: c(nt), note: _a }),
  m({ reason: _a }),
  m({ note: _a }),
  m({
    eligibility: c(rt),
    reason: _a,
    countryCode: o()
      .trim()
      .regex(/^[A-Za-z]{2}$/)
      .optional(),
  }),
  m({ reason: _a }),
  m({
    id: o(),
    weekNumber: s().int().nullable(),
    userId: o(),
    username: o().nullable(),
    wallet: o().nullable(),
    xUsername: o(),
    xUserId: o(),
    postId: o(),
    postUrl: o(),
    postCreatedAt: o(),
    submittedAt: o(),
    status: c(et),
    tier: c(tt).nullable(),
    points: s().int().nullable(),
    heldAt: o().nullable(),
    holdReason: o().nullable(),
    rejectReason: o().nullable(),
    adminNote: o().nullable(),
    eligibility: c(rt).nullable(),
  }),
  m({
    id: o(),
    weekNumber: s().int(),
    userId: o(),
    xUsername: o().nullable(),
    points: s().int(),
    postPoints: s().int(),
    referralPoints: s().int(),
    amount: q,
    symbol: o(),
    status: c(it),
    holdReason: o().nullable(),
  });
var va = c([
    `down`,
    `up`,
    `left`,
    `right`,
    `down_left`,
    `down_right`,
    `up_left`,
    `up_right`,
  ]),
  ya = m({
    id: o(),
    name: o(),
    rarity: b,
    profession: S,
    appearanceSeed: o(),
    level: s().int(),
    lucky: l().default(!1),
  }),
  ba = m({ x: s(), y: s() }),
  xa = m({
    userId: o(),
    username: o(),
    x: s(),
    y: s(),
    dir: va,
    moving: l(),
    target: ba.nullable(),
    mainCat: ya.nullable(),
    seat: o().nullable().default(null),
  }),
  Sa = m({
    id: o(),
    kind: c([
      `TOWN_SQUARE`,
      `TAVERN`,
      `UPGRADE`,
      `MARKET`,
      `LEADERBOARD`,
      `PORTAL`,
      `JOBS`,
      `PERMITS`,
      `REWARDS`,
      `STAKING`,
      `DECOR`,
    ]),
    name: o(),
    x: s().int(),
    y: s().int(),
    w: s().int(),
    h: s().int(),
    door: ba.nullable(),
    sprite: o().optional(),
  }),
  Ca = m({
    width: s().int(),
    height: s().int(),
    blocked: t(a([s().int(), s().int(), s().int(), s().int()])),
    spawn: ba,
    terrain: t(o()),
  }),
  wa = c([`GLOBAL`, `LOCAL`]),
  Ta = m({
    number: s().int().positive(),
    players: s().int().nonnegative(),
    capacity: s().int().positive(),
  });
f(`type`, [
  m({ type: r(`MOVE_TARGET`), x: s().finite(), y: s().finite() }),
  m({
    type: r(`CHAT_SEND`),
    text: o().min(1).max(2e3),
    channel: wa.default(`GLOBAL`),
  }),
  m({ type: r(`PLAYER_INSPECT`), userId: Y }),
  m({ type: r(`SIT`), npcId: o().min(1).max(64) }),
  m({ type: r(`TRADE_REQUEST`), userId: Y }),
  m({ type: r(`PING`), t: s() }),
  m({ type: r(`TOWN_LIST`) }),
  m({ type: r(`TOWN_SWITCH`), town: s().int().positive().max(1e4) }),
  m({ type: r(`TOWN_JOIN`), userId: Y }),
]);
var Ea = m({
    userId: o(),
    x: s(),
    y: s(),
    dir: va,
    moving: l(),
    target: ba.nullable(),
    seat: o().nullable().default(null),
  }),
  Da = m({
    id: o(),
    userId: o(),
    username: o(),
    text: o(),
    channel: wa,
    at: o(),
  }),
  Oa = f(`type`, [
    m({
      type: r(`WELCOME`),
      you: xa,
      roomId: o(),
      town: s().int().positive().default(1),
      tickHz: s().int(),
      moveSpeed: s(),
      map: Ca,
      npcs: t(Sa),
      serverTime: o(),
    }),
    m({ type: r(`WORLD_SNAPSHOT`), players: t(xa) }),
    m({ type: r(`PLAYER_JOINED`), player: xa }),
    m({ type: r(`PLAYER_LEFT`), userId: o() }),
    m({ type: r(`PLAYER_UPDATED`), userId: o(), mainCat: ya.nullable() }),
    m({ type: r(`PLAYER_MOVED`), moves: t(Ea), t: s() }),
    m({ type: r(`CHAT_MESSAGE`), message: Da }),
    m({ type: r(`PLAYER_INFO`), profile: mr }),
    m({ type: r(`TRADE_INVITE`), fromUserId: o(), fromUsername: o(), at: o() }),
    m({ type: r(`NOTIFICATION`), notification: zi }),
    m({ type: r(`ANNOUNCEMENT`), title: o(), body: o(), at: o() }),
    m({ type: r(`ERROR`), code: o(), message: o() }),
    m({ type: r(`PONG`), t: s(), serverTime: o() }),
    m({ type: r(`TOWNS`), towns: t(Ta), you: s().int().positive() }),
    m({
      type: r(`TOWN_JOINED`),
      userId: o(),
      username: o(),
      town: s().int().positive(),
    }),
  ]),
  ka = {
    FULL: `TOWN_FULL`,
    UNKNOWN: `TOWN_UNKNOWN`,
    NOT_IN_TOWN: `NOT_IN_TOWN`,
    SAME: `SAME_TOWN`,
  },
  Aa = [
    `north`,
    `north_east`,
    `east`,
    `south_east`,
    `south`,
    `south_west`,
    `west`,
    `north_west`,
  ],
  ja = c(Aa),
  Ma = (e) => Aa.includes(e),
  Na = e([
    a([s().int().min(0), s().int().min(0)]),
    a([s().int().min(0), s().int().min(0), ja]),
  ]),
  Pa = m({ fences: t(Na).max(2e3) }),
  Fa = a([
    s().int().min(0),
    s().int().min(0),
    s().int().min(1),
    s().int().min(1),
  ]),
  Ia = m({ stone: t(Fa).max(4e3) }),
  La = a([s().int().min(0), s().int().min(0)]),
  Ra = m({ trees: t(La).max(2e3) }),
  za = m({ x: s().int().min(0), y: s().int().min(0) }),
  Ba = m({ landmarks: u(o().regex(/^[a-z]+$/), za) }),
  Va = [
    `barrel`,
    `flowerpot`,
    `crate`,
    `bench`,
    `streetlamp`,
    `house1`,
    `house2`,
    `house3`,
    `yellowflowers`,
    `redflowers`,
    `colorfulflowers`,
    `market`,
    `streetsign`,
    `bush`,
    `stonewell`,
    `wheelbarrow`,
  ],
  Ha = c(Va),
  Ua = (e) => Va.includes(e),
  Wa = {
    barrel: { w: 1, h: 1 },
    flowerpot: { w: 1, h: 1 },
    crate: { w: 1, h: 1 },
    bench: { w: 1, h: 1 },
    streetlamp: { w: 1, h: 1 },
    house1: { w: 2, h: 2 },
    house2: { w: 2, h: 2 },
    house3: { w: 2, h: 2 },
    yellowflowers: { w: 1, h: 1 },
    redflowers: { w: 1, h: 1 },
    colorfulflowers: { w: 1, h: 1 },
    market: { w: 1, h: 1 },
    streetsign: { w: 1, h: 1 },
    bush: { w: 1, h: 1 },
    stonewell: { w: 1, h: 1 },
    wheelbarrow: { w: 1, h: 1 },
  },
  Ga = new Set([
    `yellowflowers`,
    `redflowers`,
    `colorfulflowers`,
    `crate`,
    `barrel`,
  ]),
  Ka = (e) => Ga.has(e),
  qa = Aa,
  Ja = a([s().int().min(0), s().int().min(0), Ha, ja]),
  Ya = m({ props: t(Ja).max(4e3) });
m({
  ...Ia.shape,
  ...Ra.shape,
  ...Ya.shape,
  ...Ba.shape,
  ...Pa.shape,
}).partial();
var Xa = {
    id: 46630,
    name: `Robinhood Chain Testnet`,
    rpcUrl: `https://rpc.testnet.chain.robinhood.com`,
    explorerUrl: `https://explorer.testnet.chain.robinhood.com`,
    nativeCurrency: { name: `Ether`, symbol: `ETH`, decimals: 18 },
    testnet: !0,
    uniswap: {
      universalRouter: `0x8876789976decbfcbbbe364623c63652db8c0904`,
      permit2: `0x000000000022D473030F116dDEE9F6B43aC78BA3`,
      v4Quoter: `0x8dc178efb8111bb0973dd9d722ebeff267c98f94`,
      stateView: `0xf3334192d15450cdd385c8b70e03f9a6bd9e673b`,
      poolManager: `0x8366a39CC670B4001A1121B8F6A443A643e40951`,
    },
  },
  Za = {
    id: 4663,
    name: `Robinhood Chain`,
    rpcUrl: `https://rpc.mainnet.chain.robinhood.com`,
    explorerUrl: `https://robinhoodchain.blockscout.com`,
    nativeCurrency: { name: `Ether`, symbol: `ETH`, decimals: 18 },
    testnet: !1,
    uniswap: {
      universalRouter: `0x204FAca1764B154221e35c0d20aBb3c525710498`,
      permit2: `0x000000000022D473030F116dDEE9F6B43aC78BA3`,
      v4Quoter: `0x8dc178efb8111bb0973dd9d722ebeff267c98f94`,
      stateView: `0xf3334192d15450cdd385c8b70e03f9a6bd9e673b`,
      poolManager: `0x8366a39CC670B4001A1121B8F6A443A643e40951`,
      ethRoute: {
        weth: `0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73`,
        v3Quoter: `0x33e885ed0ec9bf04ecfb19341582aadcb4c8a9e7`,
        fee: 100,
      },
    },
  },
  Qa = {
    id: 1,
    name: `Ethereum`,
    rpcUrl: `https://eth.llamarpc.com`,
    explorerUrl: `https://etherscan.io`,
    nativeCurrency: { name: `Ether`, symbol: `ETH`, decimals: 18 },
    testnet: !1,
  },
  $a = { [Xa.id]: Xa, [Za.id]: Za, [Qa.id]: Qa },
  eo = (e) => $a[e] ?? null;
function to(e, t, n) {
  let r = eo(e);
  return r ? `${r.explorerUrl}/${t}/${n}` : null;
}
export {
  Xe as $,
  dr as A,
  Pn as B,
  Kr as C,
  _ as Ct,
  xr as D,
  br as E,
  Wn as F,
  In as G,
  zn as H,
  Un as I,
  nt as J,
  ot as K,
  Bn as L,
  Xn as M,
  Qn as N,
  yr as O,
  Zn as P,
  Ye as Q,
  Nn as R,
  yi as S,
  C as St,
  vr as T,
  Ln as U,
  Hn as V,
  Rn as W,
  Ke as X,
  Ge as Y,
  Je as Z,
  Gi as _,
  te as _t,
  Aa as a,
  Oe as at,
  Hi as b,
  ee as bt,
  Ma as c,
  ue as ct,
  Oa as d,
  T as dt,
  He as et,
  ka as f,
  se as ft,
  Wi as g,
  re as gt,
  $i as h,
  me as ht,
  qa as i,
  ve as it,
  nr as j,
  sr as k,
  Ua as l,
  ce as lt,
  ta as m,
  de as mt,
  eo as n,
  Le as nt,
  Wa as o,
  De as ot,
  Xi as p,
  ge as pt,
  tt as q,
  to as r,
  ye as rt,
  Va as s,
  fe as st,
  Qa as t,
  Ve as tt,
  Ka as u,
  le as ut,
  Yi as v,
  ne as vt,
  gr as w,
  vi as x,
  x as xt,
  Ui as y,
  y as yt,
  K as z,
};
