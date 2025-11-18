import {
  $ as a,
  Da as g,
  E as U,
  Ea as W,
  G as m,
  Ga as t,
  Ha as i,
  Hb as X,
  Hc as O,
  I as z,
  Ia as C,
  Ic as ae,
  J as e,
  Jb as Z,
  K as x,
  Kb as ee,
  Lb as te,
  Mb as f,
  Nb as ne,
  Nc as oe,
  Qa as V,
  Qb as ie,
  Sa as $,
  T as S,
  Ta as q,
  Ua as Q,
  V as l,
  Vb as v,
  Xa as Y,
  Xb as P,
  Ya as H,
  Z as F,
  aa as o,
  ba as d,
  ca as N,
  da as j,
  fb as G,
  ga as R,
  gb as J,
  ha as y,
  m as E,
  qc as _,
  r as b,
  s as D,
  sa as r,
  ta as p,
  ua as M,
  va as A,
  wb as K,
} from "./chunk-VN2GIHHS.js";
var re = (() => {
  class n {
    ngOnInit() {
      console.log("inside on init");
    }
    static ɵfac = function (s) {
      return new (s || n)();
    };
    static ɵcmp = b({
      type: n,
      selectors: [["app-updates-layout"]],
      decls: 1,
      vars: 0,
      template: function (s, u) {
        s & 1 && d(0, "router-outlet");
      },
      dependencies: [ee],
      encapsulation: 2,
    });
  }
  return n;
})();
var le = (n) => ["/", n, "news"],
  de = (n) => ({ link: n }),
  Ve = (() => {
    class n {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(c) {
        (this.translate = c),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((s) => {
            (this.currentLanguage = s.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (s) {
        return new (s || n)(x(v));
      };
      static ɵcmp = b({
        type: n,
        selectors: [["app-detail-1"]],
        decls: 35,
        vars: 39,
        consts: [
          [1, "container", "details-container", "mt-lg-5"],
          [1, "update_detail"],
          [1, "back-btn", "mb-3", "pb-2", 3, "routerLink"],
          [
            "deferLoad",
            "/assets/images/svg-icons/back-icon.svg",
            "alt",
            "back-icon",
            1,
            "img-fluid",
            "me-3",
          ],
          [
            "deferLoad",
            "/assets/images/webp/updates/box_1.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem"],
          [1, "subitem", "fw-bold", "big", "light", 3, "innerHTML"],
          [1, "subitem", "fw-bold", "big", "light"],
          [1, "subitem", "big", "fw-bold", 3, "innerHTML"],
          [1, "subitem", "light", "date", "mb-5"],
        ],
        template: function (s, u) {
          s & 1 &&
            (a(0, "div", 0)(1, "div", 1)(2, "a", 2),
            d(3, "img", 3),
            r(4),
            t(5, "translate"),
            o(),
            d(6, "img", 4),
            a(7, "h1", 5),
            r(8),
            t(9, "translate"),
            o(),
            a(10, "p", 6),
            r(11),
            t(12, "translate"),
            o(),
            d(13, "p", 7),
            t(14, "translate"),
            a(15, "p", 6),
            r(16),
            t(17, "translate"),
            o(),
            a(18, "p", 6),
            r(19),
            t(20, "translate"),
            o(),
            a(21, "p", 6),
            r(22),
            t(23, "translate"),
            o(),
            a(24, "p", 6),
            r(25),
            t(26, "translate"),
            o(),
            a(27, "p", 8),
            r(28),
            t(29, "translate"),
            o(),
            d(30, "p", 9),
            t(31, "translate"),
            a(32, "p", 10),
            r(33),
            t(34, "translate"),
            o()()()),
            s & 2 &&
              (e(2),
              l(
                "routerLink",
                u.currentLanguage !== "en"
                  ? g(35, le, u.currentLanguage)
                  : "/news"
              ),
              e(2),
              M(" ", i(5, 12, "updates.back_to"), ""),
              e(4),
              p(i(9, 14, "updates.box1_title")),
              e(3),
              p(i(12, 16, "updates.box1_desc")),
              e(2),
              l(
                "innerHTML",
                C(14, 18, "updates.box1_desc1", g(37, de, u.homeUrl)),
                m
              ),
              e(3),
              p(i(17, 21, "updates.box1_desc2")),
              e(3),
              p(i(20, 23, "updates.box1_desc3")),
              e(3),
              p(i(23, 25, "updates.box1_desc4")),
              e(3),
              p(i(26, 27, "updates.box1_desc5")),
              e(3),
              p(i(29, 29, "updates.box1_desc6")),
              e(2),
              l("innerHTML", i(31, 31, "updates.common_bottom"), m),
              e(3),
              p(i(34, 33, "updates.box1_date")));
        },
        dependencies: [f, O, P],
        encapsulation: 2,
      });
    }
    return n;
  })();
var me = (n) => ["/", n, "news"],
  ue = (n) => ({ link: n }),
  Qe = (() => {
    class n {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(c) {
        (this.translate = c),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((s) => {
            (this.currentLanguage = s.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (s) {
        return new (s || n)(x(v));
      };
      static ɵcmp = b({
        type: n,
        selectors: [["app-detail-2"]],
        decls: 46,
        vars: 54,
        consts: [
          [1, "container", "details-container", "mt-lg-5"],
          [1, "update_detail"],
          [1, "back-btn", "mb-3", "pb-2", 3, "routerLink"],
          [
            "deferLoad",
            "/assets/images/svg-icons/back-icon.svg",
            "alt",
            "back-icon",
            1,
            "img-fluid",
            "me-3",
          ],
          [
            "deferLoad",
            "/assets/images/webp/updates/box_2.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem"],
          [1, "subitem", "fw-bold", "big", "light"],
          [1, "subitem", 3, "innerHTML"],
          [1, "subitem", "big", "fw-bold", 3, "innerHTML"],
          [1, "subitem", "light", "date", "mb-5"],
        ],
        template: function (s, u) {
          s & 1 &&
            (a(0, "div", 0)(1, "div", 1)(2, "a", 2),
            d(3, "img", 3),
            r(4),
            t(5, "translate"),
            o(),
            d(6, "img", 4),
            a(7, "h1", 5),
            r(8),
            t(9, "translate"),
            o(),
            a(10, "p", 6),
            r(11),
            t(12, "translate"),
            o(),
            a(13, "p", 7),
            r(14),
            t(15, "translate"),
            o(),
            a(16, "p", 6),
            r(17),
            t(18, "translate"),
            o(),
            d(19, "p", 8),
            t(20, "translate"),
            a(21, "p", 6),
            r(22),
            t(23, "translate"),
            o(),
            d(24, "p", 8),
            t(25, "translate"),
            d(26, "p", 8),
            t(27, "translate"),
            d(28, "p", 8),
            t(29, "translate"),
            d(30, "p", 8),
            t(31, "translate"),
            a(32, "p", 6),
            r(33),
            t(34, "translate"),
            o(),
            a(35, "p", 6),
            r(36),
            t(37, "translate"),
            o(),
            a(38, "p", 6),
            r(39),
            t(40, "translate"),
            o(),
            d(41, "p", 9),
            t(42, "translate"),
            a(43, "p", 10),
            r(44),
            t(45, "translate"),
            o()()()),
            s & 2 &&
              (e(2),
              l(
                "routerLink",
                u.currentLanguage !== "en"
                  ? g(50, me, u.currentLanguage)
                  : "/news"
              ),
              e(2),
              M(" ", i(5, 17, "updates.back_to"), ""),
              e(4),
              p(i(9, 19, "updates.box2_title")),
              e(3),
              p(i(12, 21, "updates.box2_desc")),
              e(3),
              p(i(15, 23, "updates.box2_desc1")),
              e(3),
              p(i(18, 25, "updates.box2_desc2")),
              e(2),
              l(
                "innerHTML",
                C(20, 27, "updates.box2_desc3", g(52, ue, u.homeUrl)),
                m
              ),
              e(3),
              p(i(23, 30, "updates.box2_desc4")),
              e(2),
              l("innerHTML", i(25, 32, "updates.box2_desc5"), m),
              e(2),
              l("innerHTML", i(27, 34, "updates.box2_desc6"), m),
              e(2),
              l("innerHTML", i(29, 36, "updates.box2_desc7"), m),
              e(2),
              l("innerHTML", i(31, 38, "updates.box2_desc8"), m),
              e(3),
              p(i(34, 40, "updates.box2_desc9")),
              e(3),
              p(i(37, 42, "updates.box2_desc10")),
              e(3),
              p(i(40, 44, "updates.box2_desc11")),
              e(2),
              l("innerHTML", i(42, 46, "updates.common_bottom"), m),
              e(3),
              p(i(45, 48, "updates.box2_date")));
        },
        dependencies: [f, O, P],
        encapsulation: 2,
      });
    }
    return n;
  })();
var ge = (n) => ["/", n, "news"],
  _e = (n) => ({ link: n }),
  Je = (() => {
    class n {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(c) {
        (this.translate = c),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((s) => {
            (this.currentLanguage = s.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (s) {
        return new (s || n)(x(v));
      };
      static ɵcmp = b({
        type: n,
        selectors: [["app-detail-3"]],
        decls: 38,
        vars: 42,
        consts: [
          [1, "container", "details-container", "mt-lg-5"],
          [1, "update_detail"],
          [1, "back-btn", "mb-3", "pb-2", 3, "routerLink"],
          [
            "deferLoad",
            "/assets/images/svg-icons/back-icon.svg",
            "alt",
            "back-icon",
            1,
            "img-fluid",
            "me-3",
          ],
          [
            "deferLoad",
            "/assets/images/webp/updates/box_3.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem"],
          [1, "subitem", "mb-0"],
          [1, "subitem", 3, "innerHTML"],
          [1, "subitem", "big", "fw-bold", 3, "innerHTML"],
          [1, "subitem", "light", "date", "mb-5"],
        ],
        template: function (s, u) {
          s & 1 &&
            (a(0, "div", 0)(1, "div", 1)(2, "a", 2),
            d(3, "img", 3),
            r(4),
            t(5, "translate"),
            o(),
            d(6, "img", 4),
            a(7, "h1", 5),
            r(8),
            t(9, "translate"),
            o(),
            a(10, "p", 6),
            r(11),
            t(12, "translate"),
            o(),
            a(13, "p", 7),
            r(14),
            t(15, "translate"),
            o(),
            a(16, "ul")(17, "li", 6),
            r(18),
            t(19, "translate"),
            o(),
            a(20, "li", 6),
            r(21),
            t(22, "translate"),
            o(),
            a(23, "li", 6),
            r(24),
            t(25, "translate"),
            o(),
            a(26, "li", 6),
            r(27),
            t(28, "translate"),
            o()(),
            a(29, "p", 8),
            t(30, "translate"),
            r(31),
            t(32, "translate"),
            o(),
            d(33, "p", 9),
            t(34, "translate"),
            a(35, "p", 10),
            r(36),
            t(37, "translate"),
            o()()()),
            s & 2 &&
              (e(2),
              l(
                "routerLink",
                u.currentLanguage !== "en"
                  ? g(38, ge, u.currentLanguage)
                  : "/news"
              ),
              e(2),
              M(" ", i(5, 13, "updates.back_to"), ""),
              e(4),
              p(i(9, 15, "updates.box3_title")),
              e(3),
              p(i(12, 17, "updates.box3_desc")),
              e(3),
              p(i(15, 19, "updates.box3_desc2")),
              e(4),
              p(i(19, 21, "updates.box3_li_1")),
              e(3),
              p(i(22, 23, "updates.box3_li_2")),
              e(3),
              p(i(25, 25, "updates.box3_li_3")),
              e(3),
              p(i(28, 27, "updates.box3_li_4")),
              e(2),
              l(
                "innerHTML",
                C(30, 29, "updates.box3_desc3", g(40, _e, u.homeUrl)),
                m
              ),
              e(2),
              p(i(32, 32, "updates.box3_desc3")),
              e(2),
              l("innerHTML", i(34, 34, "updates.common_bottom"), m),
              e(3),
              p(i(37, 36, "updates.box3_date")));
        },
        dependencies: [f, O, P],
        encapsulation: 2,
      });
    }
    return n;
  })();
var xe = (n) => ["/", n, "news"],
  be = (n) => ({ link: n }),
  Ze = (() => {
    class n {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(c) {
        (this.translate = c),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((s) => {
            (this.currentLanguage = s.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (s) {
        return new (s || n)(x(v));
      };
      static ɵcmp = b({
        type: n,
        selectors: [["app-detail-4"]],
        decls: 55,
        vars: 60,
        consts: [
          [1, "container", "details-container", "mt-lg-5"],
          [1, "update_detail"],
          [1, "back-btn", "mb-3", "pb-2", 3, "routerLink"],
          [
            "deferLoad",
            "/assets/images/svg-icons/back-icon.svg",
            "alt",
            "back-icon",
            1,
            "img-fluid",
            "me-3",
          ],
          [
            "deferLoad",
            "/assets/images/webp/updates/box_4.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem"],
          [1, "ms-2"],
          [1, "subitem", "mb-0", "mt-2", "fw-bold"],
          [1, "subitem", 3, "innerHTML"],
          [1, "subitem", "big", "fw-bold", 3, "innerHTML"],
          [1, "subitem", "light", "date", "mb-5"],
        ],
        template: function (s, u) {
          s & 1 &&
            (a(0, "div", 0)(1, "div", 1)(2, "a", 2),
            d(3, "img", 3),
            r(4),
            t(5, "translate"),
            o(),
            d(6, "img", 4),
            a(7, "h1", 5),
            r(8),
            t(9, "translate"),
            o(),
            a(10, "p", 6),
            r(11),
            t(12, "translate"),
            t(13, "translate"),
            o(),
            a(14, "ul", 7)(15, "li", 6),
            r(16),
            t(17, "translate"),
            o(),
            a(18, "li", 6),
            r(19),
            t(20, "translate"),
            o(),
            a(21, "li", 6),
            r(22),
            t(23, "translate"),
            o(),
            a(24, "li", 6),
            r(25),
            t(26, "translate"),
            o()(),
            a(27, "p", 8),
            r(28),
            t(29, "translate"),
            o(),
            a(30, "p", 9),
            t(31, "translate"),
            r(32),
            t(33, "translate"),
            o(),
            a(34, "p", 6),
            r(35),
            t(36, "translate"),
            o(),
            a(37, "ul", 7)(38, "li", 6),
            r(39),
            t(40, "translate"),
            o(),
            a(41, "li", 6),
            r(42),
            t(43, "translate"),
            o(),
            a(44, "li", 6),
            r(45),
            t(46, "translate"),
            o()(),
            a(47, "p", 6),
            r(48),
            t(49, "translate"),
            o(),
            d(50, "p", 10),
            t(51, "translate"),
            a(52, "p", 11),
            r(53),
            t(54, "translate"),
            o()()()),
            s & 2 &&
              (e(2),
              l(
                "routerLink",
                u.currentLanguage !== "en"
                  ? g(56, xe, u.currentLanguage)
                  : "/news"
              ),
              e(2),
              M(" ", i(5, 19, "updates.back_to"), ""),
              e(4),
              p(i(9, 21, "updates.box4_title")),
              e(3),
              A(
                "",
                i(12, 23, "updates.box4_desc"),
                " ",
                i(13, 25, "updates.box4_desc1"),
                ""
              ),
              e(5),
              p(i(17, 27, "updates.box4_li_1")),
              e(3),
              p(i(20, 29, "updates.box4_li_2")),
              e(3),
              p(i(23, 31, "updates.box4_li_3")),
              e(3),
              p(i(26, 33, "updates.box4_li_4")),
              e(3),
              p(i(29, 35, "updates.box4_para2_title")),
              e(2),
              l(
                "innerHTML",
                C(31, 37, "updates.box4_para2_desc", g(58, be, u.homeUrl)),
                m
              ),
              e(2),
              p(i(33, 40, "updates.box4_para2_desc")),
              e(3),
              p(i(36, 42, "updates.box4_para3_title")),
              e(4),
              p(i(40, 44, "updates.box4_li2_1")),
              e(3),
              p(i(43, 46, "updates.box4_li2_2")),
              e(3),
              p(i(46, 48, "updates.box4_li2_3")),
              e(3),
              p(i(49, 50, "updates.box4_para3_desc")),
              e(2),
              l("innerHTML", i(51, 52, "updates.common_bottom"), m),
              e(3),
              p(i(54, 54, "updates.box4_date")));
        },
        dependencies: [f, O, P],
        encapsulation: 2,
      });
    }
    return n;
  })();
var Me = (n) => ["/", n, "news"],
  Ce = (n) => ({ link: n }),
  nt = (() => {
    class n {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(c) {
        (this.translate = c),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((s) => {
            (this.currentLanguage = s.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (s) {
        return new (s || n)(x(v));
      };
      static ɵcmp = b({
        type: n,
        selectors: [["app-detail-5"]],
        decls: 42,
        vars: 48,
        consts: [
          [1, "container", "details-container", "mt-lg-5"],
          [1, "update_detail"],
          [1, "back-btn", "mb-3", "pb-2", 3, "routerLink"],
          [
            "deferLoad",
            "/assets/images/svg-icons/back-icon.svg",
            "alt",
            "back-icon",
            1,
            "img-fluid",
            "me-3",
          ],
          [
            "deferLoad",
            "/assets/images/webp/updates/box_5.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem", 3, "innerHTML"],
          [1, "mt-4", 3, "innerHTML"],
          [1, "ms-2"],
          [1, "subitem"],
          [1, "subitem", "mb-3", "max-w-400"],
          [1, "subitem", "mb-3", 3, "innerHTML"],
          [1, "subitem", "mb-3"],
          [1, "subitem", "mb-4", "max-w-400"],
          [1, "subitem", "big", "fw-bold", 3, "innerHTML"],
          [1, "subitem", "light", "date", "mb-5"],
        ],
        template: function (s, u) {
          s & 1 &&
            (a(0, "div", 0)(1, "div", 1)(2, "a", 2),
            d(3, "img", 3),
            r(4),
            t(5, "translate"),
            o(),
            d(6, "img", 4),
            a(7, "h1", 5),
            r(8),
            t(9, "translate"),
            o(),
            d(10, "p", 6),
            t(11, "translate"),
            d(12, "p", 7),
            t(13, "translate"),
            a(14, "ul", 8)(15, "li", 9),
            r(16),
            t(17, "translate"),
            o(),
            a(18, "li", 9),
            r(19),
            t(20, "translate"),
            o(),
            a(21, "li", 9),
            r(22),
            t(23, "translate"),
            o()(),
            a(24, "p", 10),
            r(25),
            t(26, "translate"),
            o(),
            d(27, "p", 11),
            t(28, "translate"),
            a(29, "p", 12),
            r(30),
            t(31, "translate"),
            o(),
            d(32, "p", 11),
            t(33, "translate"),
            a(34, "p", 13),
            r(35),
            t(36, "translate"),
            o(),
            d(37, "p", 14),
            t(38, "translate"),
            a(39, "p", 15),
            r(40),
            t(41, "translate"),
            o()()()),
            s & 2 &&
              (e(2),
              l(
                "routerLink",
                u.currentLanguage !== "en"
                  ? g(44, Me, u.currentLanguage)
                  : "/news"
              ),
              e(2),
              M(" ", i(5, 15, "updates.back_to"), ""),
              e(4),
              p(i(9, 17, "updates.box5_title")),
              e(2),
              l("innerHTML", i(11, 19, "updates.box5_desc"), m),
              e(2),
              l(
                "innerHTML",
                C(13, 21, "updates.box5_list_title", g(46, Ce, u.homeUrl)),
                m
              ),
              e(4),
              p(i(17, 24, "updates.box5_li_1")),
              e(3),
              p(i(20, 26, "updates.box5_li_2")),
              e(3),
              p(i(23, 28, "updates.box5_li_3")),
              e(3),
              p(i(26, 30, "updates.box5_para1")),
              e(2),
              l("innerHTML", i(28, 32, "updates.box5_para2"), m),
              e(3),
              p(i(31, 34, "updates.box5_para3")),
              e(2),
              l("innerHTML", i(33, 36, "updates.box5_para4"), m),
              e(3),
              p(i(36, 38, "updates.box5_para5")),
              e(2),
              l("innerHTML", i(38, 40, "updates.common_bottom"), m),
              e(3),
              p(i(41, 42, "updates.box4_date")));
        },
        dependencies: [f, O, P],
        encapsulation: 2,
      });
    }
    return n;
  })();
var fe = (n) => ["/", n, "news"],
  ve = (n) => ({ link: n }),
  ot = (() => {
    class n {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(c) {
        (this.translate = c),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((s) => {
            (this.currentLanguage = s.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (s) {
        return new (s || n)(x(v));
      };
      static ɵcmp = b({
        type: n,
        selectors: [["app-detail-6"]],
        decls: 46,
        vars: 54,
        consts: [
          [1, "container", "details-container", "mt-lg-5"],
          [1, "update_detail"],
          [1, "back-btn", "mb-3", "pb-2", 3, "routerLink"],
          [
            "deferLoad",
            "/assets/images/svg-icons/back-icon.svg",
            "alt",
            "back-icon",
            1,
            "img-fluid",
            "me-3",
          ],
          [
            "deferLoad",
            "/assets/images/webp/updates/box_6.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem", 3, "innerHTML"],
          [1, "mt-4", 3, "innerHTML"],
          [1, "mb-3", 3, "innerHTML"],
          [1, "ms-2"],
          [1, "subitem", "mb-1"],
          [1, "subitem", "mb-3", 3, "innerHTML"],
          [1, "subitem", "mb-4"],
          [1, "subitem", "big", "fw-bold", 3, "innerHTML"],
          [1, "subitem", "light", "date", "mb-5"],
        ],
        template: function (s, u) {
          s & 1 &&
            (a(0, "div", 0)(1, "div", 1)(2, "a", 2),
            d(3, "img", 3),
            r(4),
            t(5, "translate"),
            o(),
            d(6, "img", 4),
            a(7, "h1", 5),
            r(8),
            t(9, "translate"),
            o(),
            d(10, "p", 6),
            t(11, "translate"),
            d(12, "p", 7),
            t(13, "translate"),
            d(14, "p", 8),
            t(15, "translate"),
            a(16, "ul", 9)(17, "li", 10),
            r(18),
            t(19, "translate"),
            o(),
            a(20, "li", 10),
            r(21),
            t(22, "translate"),
            o(),
            a(23, "li", 10),
            r(24),
            t(25, "translate"),
            o(),
            a(26, "li", 10),
            r(27),
            t(28, "translate"),
            o()(),
            a(29, "p", 11),
            t(30, "translate"),
            r(31),
            t(32, "translate"),
            o(),
            d(33, "p", 11),
            t(34, "translate"),
            a(35, "p", 12),
            r(36),
            t(37, "translate"),
            o(),
            a(38, "p", 12),
            r(39),
            t(40, "translate"),
            o(),
            d(41, "p", 13),
            t(42, "translate"),
            a(43, "p", 14),
            r(44),
            t(45, "translate"),
            o()()()),
            s & 2 &&
              (e(2),
              l(
                "routerLink",
                u.currentLanguage !== "en"
                  ? g(50, fe, u.currentLanguage)
                  : "/news"
              ),
              e(2),
              M(" ", i(5, 17, "updates.back_to"), ""),
              e(4),
              p(i(9, 19, "updates.box6_title")),
              e(2),
              l("innerHTML", i(11, 21, "updates.box6_desc"), m),
              e(2),
              l("innerHTML", i(13, 23, "updates.box6_para1"), m),
              e(2),
              l("innerHTML", i(15, 25, "updates.box6_para2"), m),
              e(4),
              p(i(19, 27, "updates.box6_li_1")),
              e(3),
              p(i(22, 29, "updates.box6_li_2")),
              e(3),
              p(i(25, 31, "updates.box6_li_3")),
              e(3),
              p(i(28, 33, "updates.box6_li_4")),
              e(2),
              l(
                "innerHTML",
                C(30, 35, "updates.box6_para3", g(52, ve, u.homeUrl)),
                m
              ),
              e(2),
              p(i(32, 38, "updates.box6_para3")),
              e(2),
              l("innerHTML", i(34, 40, "updates.box6_para4"), m),
              e(3),
              p(i(37, 42, "updates.box6_para5")),
              e(3),
              p(i(40, 44, "updates.box6_para6")),
              e(2),
              l("innerHTML", i(42, 46, "updates.common_bottom"), m),
              e(3),
              p(i(45, 48, "updates.box6_date")));
        },
        dependencies: [f, O, P],
        encapsulation: 2,
      });
    }
    return n;
  })();
var Pe = (n) => ["/", n, "news"],
  Oe = (n) => ({ link: n }),
  st = (() => {
    class n {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(c) {
        (this.translate = c),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((s) => {
            (this.currentLanguage = s.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (s) {
        return new (s || n)(x(v));
      };
      static ɵcmp = b({
        type: n,
        selectors: [["app-details-7"]],
        decls: 56,
        vars: 60,
        consts: [
          [1, "container", "details-container", "mt-lg-5"],
          [1, "update_detail"],
          [1, "back-btn", "mb-3", "pb-2", 3, "routerLink"],
          [
            "deferLoad",
            "/assets/images/svg-icons/back-icon.svg",
            "alt",
            "back-icon",
            1,
            "img-fluid",
            "me-3",
          ],
          [
            "deferLoad",
            "/assets/images/webp/updates/box_7.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem", 3, "innerHTML"],
          [1, "mt-4", "fw-bold", 3, "innerHTML"],
          [1, "ms-2"],
          [1, "subitem", "mb-1"],
          [1, "subitem", "mb-3", "fw-bold"],
          [1, "subitem", "mb-3", "fw-bold", 3, "innerHTML"],
          [1, "subitem", "mb-1", 3, "innerHTML"],
          [1, "subitem", "big", "fw-bold", 3, "innerHTML"],
          [1, "subitem", "light", "date", "mb-5"],
        ],
        template: function (s, u) {
          s & 1 &&
            (a(0, "div", 0)(1, "div", 1)(2, "a", 2),
            d(3, "img", 3),
            r(4),
            t(5, "translate"),
            o(),
            d(6, "img", 4),
            a(7, "h1", 5),
            r(8),
            t(9, "translate"),
            o(),
            d(10, "p", 6),
            t(11, "translate"),
            d(12, "p", 7),
            t(13, "translate"),
            a(14, "ul", 8)(15, "li", 9),
            r(16),
            t(17, "translate"),
            o(),
            a(18, "li", 9),
            r(19),
            t(20, "translate"),
            o(),
            a(21, "li", 9),
            r(22),
            t(23, "translate"),
            o(),
            a(24, "li", 9),
            r(25),
            t(26, "translate"),
            o()(),
            a(27, "p", 10),
            r(28),
            t(29, "translate"),
            o(),
            a(30, "ul", 8)(31, "li", 9),
            r(32),
            t(33, "translate"),
            o(),
            a(34, "li", 9),
            r(35),
            t(36, "translate"),
            o(),
            a(37, "li", 9),
            r(38),
            t(39, "translate"),
            o(),
            a(40, "li", 9),
            r(41),
            t(42, "translate"),
            o()(),
            d(43, "p", 11),
            t(44, "translate"),
            a(45, "ul", 8),
            d(46, "li", 12),
            t(47, "translate"),
            a(48, "li", 9),
            r(49),
            t(50, "translate"),
            o()(),
            d(51, "p", 13),
            t(52, "translate"),
            a(53, "p", 14),
            r(54),
            t(55, "translate"),
            o()()()),
            s & 2 &&
              (e(2),
              l(
                "routerLink",
                u.currentLanguage !== "en"
                  ? g(56, Pe, u.currentLanguage)
                  : "/news"
              ),
              e(2),
              M(" ", i(5, 19, "updates.back_to"), ""),
              e(4),
              p(i(9, 21, "updates.box7_title")),
              e(2),
              l("innerHTML", i(11, 23, "updates.box7_desc"), m),
              e(2),
              l("innerHTML", i(13, 25, "updates.box7_para1"), m),
              e(4),
              p(i(17, 27, "updates.box7_li_1")),
              e(3),
              p(i(20, 29, "updates.box7_li_2")),
              e(3),
              p(i(23, 31, "updates.box7_li_3")),
              e(3),
              p(i(26, 33, "updates.box7_li_4")),
              e(3),
              p(i(29, 35, "updates.box7_para3")),
              e(4),
              p(i(33, 37, "updates.box7_li_5")),
              e(3),
              p(i(36, 39, "updates.box7_li_6")),
              e(3),
              p(i(39, 41, "updates.box7_li_7")),
              e(3),
              p(i(42, 43, "updates.box7_li_8")),
              e(2),
              l("innerHTML", i(44, 45, "updates.box7_para4"), m),
              e(3),
              l(
                "innerHTML",
                C(47, 47, "updates.box7_li_9", g(58, Oe, u.homeUrl)),
                m
              ),
              e(3),
              p(i(50, 50, "updates.box7_li_10")),
              e(2),
              l("innerHTML", i(52, 52, "updates.common_bottom"), m),
              e(3),
              p(i(55, 54, "updates.box7_date")));
        },
        dependencies: [f, O, P],
        encapsulation: 2,
      });
    }
    return n;
  })();
var he = (n) => ["/", n, "news"],
  Le = (n) => ({ link: n }),
  dt = (() => {
    class n {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(c) {
        (this.translate = c),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((s) => {
            (this.currentLanguage = s.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (s) {
        return new (s || n)(x(v));
      };
      static ɵcmp = b({
        type: n,
        selectors: [["app-details-8"]],
        decls: 29,
        vars: 33,
        consts: [
          [1, "container", "details-container", "mt-lg-5"],
          [1, "update_detail"],
          [1, "back-btn", "mb-3", "pb-2", 3, "routerLink"],
          [
            "deferLoad",
            "/assets/images/svg-icons/back-icon.svg",
            "alt",
            "back-icon",
            1,
            "img-fluid",
            "me-3",
          ],
          [
            "deferLoad",
            "/assets/images/webp/updates/box_8.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem", "mb-3"],
          [1, "subitem", "mb-3", 3, "innerHTML"],
          [1, "subitem", "big", "fw-bold", 3, "innerHTML"],
          [1, "subitem", "light", "date", "mb-5"],
        ],
        template: function (s, u) {
          s & 1 &&
            (a(0, "div", 0)(1, "div", 1)(2, "a", 2),
            d(3, "img", 3),
            r(4),
            t(5, "translate"),
            o(),
            d(6, "img", 4),
            a(7, "h1", 5),
            r(8),
            t(9, "translate"),
            o(),
            a(10, "p", 6),
            r(11),
            t(12, "translate"),
            o(),
            a(13, "p", 6),
            r(14),
            t(15, "translate"),
            o(),
            d(16, "p", 7),
            t(17, "translate"),
            a(18, "p", 6),
            r(19),
            t(20, "translate"),
            o(),
            a(21, "p", 6),
            r(22),
            t(23, "translate"),
            o(),
            d(24, "p", 8),
            t(25, "translate"),
            a(26, "p", 9),
            r(27),
            t(28, "translate"),
            o()()()),
            s & 2 &&
              (e(2),
              l(
                "routerLink",
                u.currentLanguage !== "en"
                  ? g(29, he, u.currentLanguage)
                  : "/news"
              ),
              e(2),
              M(" ", i(5, 10, "updates.back_to"), ""),
              e(4),
              p(i(9, 12, "updates.box8_title")),
              e(3),
              p(i(12, 14, "updates.box8_desc")),
              e(3),
              p(i(15, 16, "updates.box8_para1")),
              e(2),
              l(
                "innerHTML",
                C(17, 18, "updates.box8_para2", g(31, Le, u.homeUrl)),
                m
              ),
              e(3),
              p(i(20, 21, "updates.box8_para3")),
              e(3),
              p(i(23, 23, "updates.box8_para4")),
              e(2),
              l("innerHTML", i(25, 25, "updates.common_bottom"), m),
              e(3),
              p(i(28, 27, "updates.box8_date")));
        },
        dependencies: [f, O, P],
        encapsulation: 2,
      });
    }
    return n;
  })();
var we = (n) => ({ "three-cards": n }),
  Ie = (n) => ({ link: n }),
  Be = (n, h) => ["/", n, "news", h],
  ye = (n) => ["/news", n],
  Se = (n) => ["/", n, "news"];
function ke(n, h) {
  n & 1 && d(0, "app-common-carousel", 10),
    n & 2 && l("rewards", !0)("placement", "banner");
}
function He(n, h) {
  n & 1 && (a(0, "h1", 11), r(1), t(2, "translate"), o()),
    n & 2 && (e(), p(i(2, 1, "updates.title")));
}
function Te(n, h) {
  n & 1 && (a(0, "h2", 11), r(1), t(2, "translate"), o()),
    n & 2 && (e(), p(i(2, 1, "updates.title")));
}
function Ee(n, h) {
  if ((n & 1 && (d(0, "h2", 12), t(1, "translate")), n & 2)) {
    let c = y(2);
    l("innerHTML", C(1, 1, "updates.desc", g(4, Ie, c.homeUrl)), m);
  }
}
function De(n, h) {
  if (
    (n & 1 &&
      (a(0, "a", 14),
      d(1, "img", 15),
      a(2, "div", 16)(3, "p", 17),
      r(4),
      t(5, "translate"),
      o(),
      d(6, "p", 18),
      t(7, "translate"),
      o(),
      a(8, "span", 19),
      r(9),
      t(10, "translate"),
      o()()),
    n & 2)
  ) {
    let c = y().$implicit,
      s = y(2);
    F("box ", c.cursor, ""),
      l(
        "routerLink",
        s.currentLanguage !== "en"
          ? W(15, Be, s.currentLanguage, c.link)
          : g(18, ye, c.link)
      ),
      e(),
      l("deferLoad", c.graphic),
      e(2),
      l("ngClass", s.currentLanguage),
      e(),
      p(i(5, 9, c.title)),
      e(2),
      l("innerHTML", i(7, 11, c.desc), m),
      e(3),
      M(" ", i(10, 13, "updates.read_more"), " ");
  }
}
function Ue(n, h) {
  if ((n & 1 && (N(0), S(1, De, 11, 20, "a", 13), j()), n & 2)) {
    let c = h.index,
      s = y(2);
    e(), l("ngIf", s.fromLanding && !s.isMobile ? c < 5 : !0);
  }
}
function ze(n, h) {
  if (
    (n & 1 && (a(0, "div", 20)(1, "a", 21), r(2), t(3, "translate"), o()()),
    n & 2)
  ) {
    let c = y(2);
    e(),
      l(
        "routerLink",
        c.currentLanguage !== "en" ? g(4, Se, c.currentLanguage) : "/news"
      ),
      e(),
      p(i(3, 2, "updates.check_updates"));
  }
}
function Fe(n, h) {
  if (
    (n & 1 &&
      (a(0, "div", 3),
      S(1, ke, 1, 2, "app-common-carousel", 4)(2, He, 3, 3, "h1", 5)(
        3,
        Te,
        3,
        3,
        "h2",
        5
      )(4, Ee, 2, 6, "h2", 6),
      a(5, "div", 7),
      S(6, Ue, 2, 1, "ng-container", 8),
      o(),
      S(7, ze, 4, 6, "div", 9),
      o()),
    n & 2)
  ) {
    let c = y();
    e(),
      l("ngIf", !c.fromLanding),
      e(),
      l("ngIf", !c.fromLanding),
      e(),
      l("ngIf", c.fromLanding),
      e(),
      l("ngIf", !c.fromLanding),
      e(),
      l("ngClass", g(7, we, !c.fromLanding && !c.isMobile)),
      e(),
      l("ngForOf", c.items),
      e(),
      l("ngIf", c.fromLanding);
  }
}
function Ne(n, h) {
  n & 1 && d(0, "app-common-carousel", 22),
    n & 2 && l("placement", "bitcoin-layer");
}
var Ot = (() => {
  class n {
    dom;
    _platformId;
    translate;
    route;
    router;
    meta;
    title;
    fromLanding = !1;
    currentLanguage = "";
    isMobile = !1;
    homeUrl = "";
    onResize(c) {
      if (H(this._platformId)) {
        let s = window.innerWidth;
        this.isMobile = s <= 1024;
      }
    }
    constructor(c, s, u, T, k, pe, se) {
      (this.dom = c),
        (this._platformId = s),
        (this.translate = u),
        (this.route = T),
        (this.router = k),
        (this.meta = pe),
        (this.title = se),
        (this.currentLanguage = this.translate.currentLang),
        this.translate.onLangChange.subscribe((ce) => {
          (this.currentLanguage = ce.lang),
            (this.homeUrl = _(this.currentLanguage));
        });
    }
    activeIndex = -1;
    items = [
      {
        id: 9,
        graphic: "/assets/images/webp/updates/box_9.webp",
        title: "updates.box9_title",
        desc: "updates.box9_desc",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "Execution-Layer-Research",
      },
      {
        id: 8,
        graphic: "/assets/images/webp/updates/box_8.webp",
        title: "updates.box8_title",
        desc: "updates.box8_desc",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "Settlement-Pathways",
      },
      {
        id: 7,
        graphic: "/assets/images/webp/updates/box_7.webp",
        title: "updates.box7_title",
        desc: "updates.box7_desc",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "Bitcoin-Hyper-Ecosystem-Update",
      },
      {
        id: 6,
        graphic: "/assets/images/webp/updates/box_6.webp",
        title: "updates.box6_title",
        desc: "updates.box6_desc",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "SVM-Programs-Running-Natively",
      },
      {
        id: 5,
        graphic: "/assets/images/webp/updates/box_5.webp",
        title: "updates.box5_title",
        desc: "updates.box5_desc",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "The-Rollup-Model:-Why-It-Works-for-Bitcoin",
      },
      {
        id: 4,
        graphic: "/assets/images/webp/updates/box_4.webp",
        title: "updates.box4_title",
        desc: "updates.box4_desc",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "What-You-Can-Build-On-Bitcoin-Hyper",
      },
      {
        id: 3,
        graphic: "/assets/images/webp/updates/box_3.webp",
        title: "updates.box3_title",
        desc: "updates.box3_desc",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "Devnet-Is-Live-Quietly",
      },
      {
        id: 2,
        graphic: "/assets/images/webp/updates/box_2.webp",
        title: "updates.box2_title",
        desc: "updates.box2_desc",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "Why-solana-VM-Why-Not-EVM",
      },
      {
        id: 1,
        graphic: "/assets/images/webp/updates/box_1.webp",
        title: "updates.box1_title",
        desc: "updates.box1_desc",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "Introducing-Bitcoin-Hyper:-Bringing-Rollups-to-Bitcoin",
      },
    ];
    goBack() {
      this.activeIndex = -1;
    }
    ngOnInit() {
      this.router.queryParams.subscribe((c) => {
        c.id && (this.activeIndex = c.id);
      }),
        (this.homeUrl = _(this.currentLanguage));
    }
    handleActiveClick(c) {
      if (this.fromLanding) {
        this.route.navigate([`/${this.currentLanguage}/news`, c.title]);
        return;
      }
      c.isActive && (this.activeIndex = c.id),
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    ngAfterViewInit() {
      setTimeout(() => {
        if (H(this._platformId)) {
          let c = window.innerWidth;
          this.isMobile = c <= 1024;
        }
      }, 100);
    }
    static ɵfac = function (s) {
      return new (s || n)(x(V), x(U), x(v), x(te), x(Z), x(G), x(J));
    };
    static ɵcmp = b({
      type: n,
      selectors: [["app-updates"]],
      hostBindings: function (s, u) {
        s & 1 &&
          R(
            "resize",
            function (k) {
              return u.onResize(k);
            },
            !1,
            z
          );
      },
      inputs: { fromLanding: "fromLanding" },
      decls: 3,
      vars: 2,
      consts: [
        ["id", "updates", 1, "updates"],
        ["class", "container mt-2", 4, "ngIf"],
        [3, "placement", 4, "ngIf"],
        [1, "container", "mt-2"],
        [3, "rewards", "placement", 4, "ngIf"],
        ["class", "section-title", 4, "ngIf"],
        ["class", "subtitle", 3, "innerHTML", 4, "ngIf"],
        [1, "boxes", 3, "ngClass"],
        [4, "ngFor", "ngForOf"],
        ["class", "d-flex justify-content-center mt-3", 4, "ngIf"],
        [3, "rewards", "placement"],
        [1, "section-title"],
        [1, "subtitle", 3, "innerHTML"],
        [3, "routerLink", "class", 4, "ngIf"],
        [3, "routerLink"],
        ["alt", "graphic", 1, "graphic", 3, "deferLoad"],
        [1, "content-wrapper"],
        [1, "title", 3, "ngClass"],
        [1, "desc", 3, "innerHTML"],
        [1, "read-more-cta"],
        [1, "d-flex", "justify-content-center", "mt-3"],
        [
          "title",
          "News",
          1,
          "btn",
          "btn-primary",
          "updates-btn",
          "text-white",
          "mwx-230",
          "w-100",
          3,
          "routerLink",
        ],
        [3, "placement"],
      ],
      template: function (s, u) {
        s & 1 &&
          (a(0, "div", 0),
          S(1, Fe, 8, 9, "div", 1)(2, Ne, 1, 1, "app-common-carousel", 2),
          o()),
          s & 2 &&
            (e(),
            l("ngIf", u.activeIndex == -1),
            e(),
            l("ngIf", !u.fromLanding));
      },
      dependencies: [f, $, q, Q, ae, O, P],
      styles: [
        ".updates[_ngcontent-%COMP%]{padding:100px 0 20px}@media screen and (max-width: 576px){.updates[_ngcontent-%COMP%]{padding:125px 0 20px;background-size:100%}}.updates[_ngcontent-%COMP%]   .updates-btn[_ngcontent-%COMP%]{background:#1a7ef7!important}.updates[_ngcontent-%COMP%]   .updates-btn[_ngcontent-%COMP%]:hover{border-color:#1a7ef7!important}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{color:#464646;text-transform:uppercase;max-width:60%;font-family:Librestile_Extended_Bold,sans-serif;font-size:1rem}@media screen and (max-width: 576px){.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{max-width:100%;font-size:14px;line-height:18px}}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes.three-cards[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}@media screen and (max-width: 1024px){.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media screen and (max-width: 768px){.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media screen and (max-width: 576px){.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{width:100%;border:2px solid #000000;box-shadow:0 2px #000;background:#fea942;border-radius:24px;margin:8px;min-height:450px;position:relative;color:#000;overflow:hidden}@media screen and (max-width: 576px){.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{margin:8px 0;min-height:unset}}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;overflow:hidden}@media screen and (max-width: 576px){.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{-webkit-line-clamp:6;margin-bottom:50px}}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .graphic[_ngcontent-%COMP%]{max-height:220px;width:100%;border-radius:20px 20px 0 0}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{margin-top:8px;padding:0 16px}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin-bottom:0;min-height:56px}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.bg[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.cz[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.nl[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.fr[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.el[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.hu[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.id[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.it[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.jp[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.pl[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.pt[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.ro[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.sk[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.es[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.tr[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.vn[_ngcontent-%COMP%]{min-height:84px}@media screen and (max-width: 576px){.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.bg[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.cz[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.nl[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.fr[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.el[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.hu[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.id[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.it[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.jp[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.pl[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.pt[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.ro[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.sk[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.es[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.tr[_ngcontent-%COMP%], .updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.vn[_ngcontent-%COMP%]{min-height:unset}}@media screen and (max-width: 576px){.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{min-height:unset}}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .read-more-cta[_ngcontent-%COMP%]{position:absolute;bottom:-1px;left:0;border-bottom:none;font-weight:800;text-transform:uppercase;color:#000;width:100%;display:flex;justify-content:center;align-items:center;background:#fff;border-radius:0 0 24px 24px;box-shadow:0 1px #000;height:42px}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   .graphic[_ngcontent-%COMP%]{max-height:400px;width:100%;border:2px solid #000000;border-radius:24px;box-shadow:0 2px #000}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:32px;font-weight:700}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   .subitem[_ngcontent-%COMP%]{font-weight:400;color:#000;font-size:16px;margin-bottom:16px;letter-spacing:.8px}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   .subitem.big[_ngcontent-%COMP%]{font-size:20px;letter-spacing:.8px}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   .subitem.light[_ngcontent-%COMP%]{color:#454545;line-height:130%}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   .subitem.date[_ngcontent-%COMP%]{letter-spacing:.8px;font-style:italic}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   .subitem.max-w-400[_ngcontent-%COMP%]{max-width:400px}.updates[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:0}",
      ],
    });
  }
  return n;
})();
var je = (n) => ["/", n, "news"],
  Re = (n) => ({ link: n }),
  wt = (() => {
    class n {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(c) {
        (this.translate = c),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((s) => {
            (this.currentLanguage = s.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (s) {
        return new (s || n)(x(v));
      };
      static ɵcmp = b({
        type: n,
        selectors: [["app-details-9"]],
        decls: 29,
        vars: 33,
        consts: [
          [1, "container", "details-container", "mt-lg-5"],
          [1, "update_detail"],
          [1, "back-btn", "mb-3", "pb-2", 3, "routerLink"],
          [
            "deferLoad",
            "/assets/images/svg-icons/back-icon.svg",
            "alt",
            "back-icon",
            1,
            "img-fluid",
            "me-3",
          ],
          [
            "deferLoad",
            "/assets/images/webp/updates/box_9.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem", "mb-3"],
          [1, "subitem", "mb-3", 3, "innerHTML"],
          [1, "subitem", "big", "fw-bold", 3, "innerHTML"],
          [1, "subitem", "light", "date", "mb-5"],
        ],
        template: function (s, u) {
          s & 1 &&
            (a(0, "div", 0)(1, "div", 1)(2, "a", 2),
            d(3, "img", 3),
            r(4),
            t(5, "translate"),
            o(),
            d(6, "img", 4),
            a(7, "h1", 5),
            r(8),
            t(9, "translate"),
            o(),
            a(10, "p", 6),
            r(11),
            t(12, "translate"),
            o(),
            a(13, "p", 6),
            r(14),
            t(15, "translate"),
            o(),
            d(16, "p", 7),
            t(17, "translate"),
            a(18, "p", 6),
            r(19),
            t(20, "translate"),
            o(),
            a(21, "p", 6),
            r(22),
            t(23, "translate"),
            o(),
            d(24, "p", 8),
            t(25, "translate"),
            a(26, "p", 9),
            r(27),
            t(28, "translate"),
            o()()()),
            s & 2 &&
              (e(2),
              l(
                "routerLink",
                u.currentLanguage !== "en"
                  ? g(29, je, u.currentLanguage)
                  : "/news"
              ),
              e(2),
              M(" ", i(5, 10, "updates.back_to"), ""),
              e(4),
              p(i(9, 12, "updates.box9_title")),
              e(3),
              p(i(12, 14, "updates.box9_desc")),
              e(3),
              p(i(15, 16, "updates.box9_para1")),
              e(2),
              l(
                "innerHTML",
                C(17, 18, "updates.box9_para2", g(31, Re, u.homeUrl)),
                m
              ),
              e(3),
              p(i(20, 21, "updates.box9_para3")),
              e(3),
              p(i(23, 23, "updates.box9_para4")),
              e(2),
              l("innerHTML", i(25, 25, "updates.common_bottom"), m),
              e(3),
              p(i(28, 27, "updates.box9_date")));
        },
        dependencies: [f, O, P],
        encapsulation: 2,
      });
    }
    return n;
  })();
var tn = (() => {
  class n {
    static ɵfac = function (s) {
      return new (s || n)();
    };
    static ɵmod = D({ type: n, bootstrap: [re] });
    static ɵinj = E({ imports: [ne.forChild([]), Y, ie, oe, K, X] });
  }
  return n;
})();
export {
  Ot as a,
  Ve as b,
  Qe as c,
  Je as d,
  Ze as e,
  nt as f,
  ot as g,
  st as h,
  dt as i,
  re as j,
  wt as k,
  tn as l,
};
