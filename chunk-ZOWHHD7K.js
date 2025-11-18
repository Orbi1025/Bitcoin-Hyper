import {
  $ as g,
  Da as M,
  E as S,
  Ea as A,
  G as r,
  Ga as t,
  Ha as n,
  Hb as X,
  Hc as f,
  I as E,
  Ia as W,
  Ic as ie,
  J as e,
  Jb as Y,
  K as b,
  Kb as Z,
  Lb as ee,
  Mb as u,
  Nb as te,
  Nc as oe,
  Qa as N,
  Qb as ne,
  Sa as $,
  T as H,
  Ta as q,
  Ua as V,
  V as i,
  Vb as P,
  Xa as G,
  Xb as O,
  Ya as z,
  Z as F,
  aa as l,
  ba as o,
  ca as j,
  da as U,
  fb as J,
  ga as R,
  gb as K,
  ha as L,
  m as k,
  qc as _,
  r as C,
  s as D,
  sa as s,
  ta as d,
  ua as x,
  wb as Q,
} from "./chunk-VN2GIHHS.js";
var ae = (() => {
  class a {
    ngOnInit() {
      console.log("inside on init");
    }
    static ɵfac = function (c) {
      return new (c || a)();
    };
    static ɵcmp = C({
      type: a,
      selectors: [["app-blog-layout"]],
      decls: 1,
      vars: 0,
      template: function (c, m) {
        c & 1 && o(0, "router-outlet");
      },
      dependencies: [Z],
      encapsulation: 2,
    });
  }
  return a;
})();
var le = (a) => ({ "three-cards": a }),
  ge = (a) => ({ link: a }),
  se = (a, v) => ["/", a, "blog", v],
  de = (a) => ["/blog", a],
  me = (a) => ["/", a, "blog"];
function be(a, v) {
  a & 1 && o(0, "app-common-carousel", 10),
    a & 2 && i("rewards", !0)("placement", "banner");
}
function _e(a, v) {
  a & 1 && (g(0, "h1", 11), s(1), t(2, "translate"), l()),
    a & 2 && (e(), d(n(2, 1, "blog.title")));
}
function Me(a, v) {
  a & 1 && (g(0, "h2", 11), s(1), t(2, "translate"), l()),
    a & 2 && (e(), d(n(2, 1, "blog.title")));
}
function Ce(a, v) {
  if ((a & 1 && (o(0, "h2", 12), t(1, "translate")), a & 2)) {
    let p = L(2);
    i("innerHTML", W(1, 1, "blog.desc", M(4, ge, p.homeUrl)), r);
  }
}
function xe(a, v) {
  if (
    (a & 1 &&
      (g(0, "a", 14),
      o(1, "img", 15),
      g(2, "div", 16)(3, "p", 17),
      s(4),
      t(5, "translate"),
      l(),
      o(6, "p", 18),
      t(7, "translate"),
      l(),
      g(8, "span", 19),
      s(9),
      t(10, "translate"),
      l()()),
    a & 2)
  ) {
    let p = L().$implicit,
      c = L(2);
    F("box ", p.cursor, ""),
      i(
        "routerLink",
        c.currentLanguage !== "en"
          ? A(15, se, c.currentLanguage, p.link)
          : M(18, de, p.link)
      ),
      e(),
      i("deferLoad", p.graphic),
      e(2),
      i("ngClass", c.currentLanguage),
      e(),
      d(n(5, 9, p.title)),
      e(2),
      i("innerHTML", n(7, 11, p.desc), r),
      e(3),
      x(" ", n(10, 13, "blog.read_more"), " ");
  }
}
function ue(a, v) {
  if ((a & 1 && (j(0), H(1, xe, 11, 20, "a", 13), U()), a & 2)) {
    let p = v.index,
      c = L(2);
    e(), i("ngIf", c.fromLanding && !c.isMobile ? p < 6 : !0);
  }
}
function Pe(a, v) {
  if (
    (a & 1 && (g(0, "div", 20)(1, "a", 21), s(2), t(3, "translate"), l()()),
    a & 2)
  ) {
    let p = L(2);
    e(),
      i(
        "routerLink",
        p.currentLanguage !== "en" ? M(4, me, p.currentLanguage) : "/blog"
      ),
      e(),
      d(n(3, 2, "blog.check_updates"));
  }
}
function Oe(a, v) {
  if (
    (a & 1 &&
      (g(0, "div", 3),
      H(1, be, 1, 2, "app-common-carousel", 4)(2, _e, 3, 3, "h1", 5)(
        3,
        Me,
        3,
        3,
        "h2",
        5
      )(4, Ce, 2, 6, "h2", 6),
      g(5, "div", 7),
      H(6, ue, 2, 1, "ng-container", 8),
      l(),
      H(7, Pe, 4, 6, "div", 9),
      l()),
    a & 2)
  ) {
    let p = L();
    e(),
      i("ngIf", !p.fromLanding),
      e(),
      i("ngIf", !p.fromLanding),
      e(),
      i("ngIf", p.fromLanding),
      e(),
      i("ngIf", !p.fromLanding),
      e(),
      i("ngClass", M(7, le, !p.fromLanding && !p.isMobile)),
      e(),
      i("ngForOf", p.items),
      e(),
      i("ngIf", p.fromLanding);
  }
}
function fe(a, v) {
  a & 1 && o(0, "app-common-carousel", 22),
    a & 2 && i("placement", "bitcoin-layer");
}
var Ue = (() => {
  class a {
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
    onResize(p) {
      if (z(this._platformId)) {
        let c = window.innerWidth;
        this.isMobile = c <= 1024;
      }
    }
    constructor(p, c, m, I, T, re, pe) {
      (this.dom = p),
        (this._platformId = c),
        (this.translate = m),
        (this.route = I),
        (this.router = T),
        (this.meta = re),
        (this.title = pe),
        (this.currentLanguage = this.translate.currentLang),
        this.translate.onLangChange.subscribe((ce) => {
          (this.currentLanguage = ce.lang),
            (this.homeUrl = _(this.currentLanguage));
        });
    }
    activeIndex = -1;
    items = [
      {
        id: 5,
        graphic: "/assets/images/webp/blog/blog5.webp",
        title: "blog.box5_title",
        desc: "blog.box5_subtitle",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "What-is-a-Layer-2-crypto",
      },
      {
        id: 4,
        graphic: "/assets/images/webp/blog/blog4.webp",
        title: "blog.box4_title",
        desc: "blog.box4_subtitle",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "What-happens-after-a-crypto-presale",
      },
      {
        id: 3,
        graphic: "/assets/images/webp/blog/blog3.webp",
        title: "blog.box3_title",
        desc: "blog.box3_subtitle",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "What-is-a-crypto-presale",
      },
      {
        id: 2,
        graphic: "/assets/images/webp/blog/blog2.webp",
        title: "blog.box2_title",
        desc: "blog.box2_subtitle",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "How-to-buy-presale-crypto",
      },
      {
        id: 1,
        graphic: "/assets/images/webp/blog/blog1.webp",
        title: "blog.box1_title",
        desc: "blog.box1_subtitle",
        isActive: !0,
        cursor: "cursor-pointer",
        link: "Where-to-buy-presale-crypto",
      },
    ];
    goBack() {
      this.activeIndex = -1;
    }
    ngOnInit() {
      this.router.queryParams.subscribe((p) => {
        p.id && (this.activeIndex = p.id);
      }),
        (this.homeUrl = _(this.currentLanguage));
    }
    handleActiveClick(p) {
      if (this.fromLanding) {
        this.route.navigate([`/${this.currentLanguage}/blog`, p.title]);
        return;
      }
      p.isActive && (this.activeIndex = p.id),
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    ngAfterViewInit() {
      setTimeout(() => {
        if (z(this._platformId)) {
          let p = window.innerWidth;
          this.isMobile = p <= 1024;
        }
      }, 100);
    }
    static ɵfac = function (c) {
      return new (c || a)(b(N), b(S), b(P), b(ee), b(Y), b(J), b(K));
    };
    static ɵcmp = C({
      type: a,
      selectors: [["app-blog"]],
      hostBindings: function (c, m) {
        c & 1 &&
          R(
            "resize",
            function (T) {
              return m.onResize(T);
            },
            !1,
            E
          );
      },
      inputs: { fromLanding: "fromLanding" },
      decls: 3,
      vars: 2,
      consts: [
        ["id", "blog", 1, "blog"],
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
          "blog",
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
      template: function (c, m) {
        c & 1 &&
          (g(0, "div", 0),
          H(1, Oe, 8, 9, "div", 1)(2, fe, 1, 1, "app-common-carousel", 2),
          l()),
          c & 2 &&
            (e(),
            i("ngIf", m.activeIndex == -1),
            e(),
            i("ngIf", !m.fromLanding));
      },
      dependencies: [u, $, q, V, ie, f, O],
      styles: [
        ".blog[_ngcontent-%COMP%]{padding:100px 0 20px}@media screen and (max-width: 576px){.blog[_ngcontent-%COMP%]{padding:125px 0 20px;background-size:100%}}.blog[_ngcontent-%COMP%]   .updates-btn[_ngcontent-%COMP%]{background:#1a7ef7!important}.blog[_ngcontent-%COMP%]   .updates-btn[_ngcontent-%COMP%]:hover{border-color:#1a7ef7!important}.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{color:#464646;text-transform:uppercase;max-width:60%;font-family:Librestile_Extended_Bold,sans-serif;font-size:1rem}@media screen and (max-width: 576px){.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{max-width:100%;font-size:14px;line-height:18px}}.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes.three-cards[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}@media screen and (max-width: 1024px){.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media screen and (max-width: 768px){.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media screen and (max-width: 576px){.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}}.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{width:100%;border:2px solid #000000;box-shadow:0 2px #000;background:#fea942;border-radius:24px;margin:8px;min-height:450px;position:relative;color:#000;overflow:hidden}@media screen and (max-width: 576px){.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{margin:8px 0;min-height:unset}}.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;overflow:hidden}@media screen and (max-width: 576px){.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{-webkit-line-clamp:6;margin-bottom:50px}}.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .graphic[_ngcontent-%COMP%]{max-height:220px;width:100%;border-radius:20px 20px 0 0}.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{margin-top:8px;padding:0 16px}.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin-bottom:0;min-height:56px}.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.bg[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.cz[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.nl[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.fr[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.el[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.hu[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.id[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.it[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.jp[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.pl[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.pt[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.ro[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.sk[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.es[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.tr[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.vn[_ngcontent-%COMP%]{min-height:84px}@media screen and (max-width: 576px){.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.bg[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.cz[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.nl[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.fr[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.el[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.hu[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.id[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.it[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.jp[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.pl[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.pt[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.ro[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.sk[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.es[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.tr[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title.vn[_ngcontent-%COMP%]{min-height:unset}}@media screen and (max-width: 576px){.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{min-height:unset}}.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .read-more-cta[_ngcontent-%COMP%]{position:absolute;bottom:-1px;left:0;border-bottom:none;font-weight:800;text-transform:uppercase;color:#000;width:100%;display:flex;justify-content:center;align-items:center;background:#fff;border-radius:0 0 24px 24px;box-shadow:0 1px #000;height:42px}.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   .graphic[_ngcontent-%COMP%]{max-height:400px;width:100%;border:2px solid #000000;border-radius:24px;box-shadow:0 2px #000}.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:32px;font-weight:700}.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   .subitem[_ngcontent-%COMP%]{font-weight:400;color:#000;font-size:16px;margin-bottom:16px;letter-spacing:.8px}.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   .subitem.big[_ngcontent-%COMP%]{font-size:20px;letter-spacing:.8px}.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   .subitem.light[_ngcontent-%COMP%]{color:#454545;line-height:130%}.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   .subitem.date[_ngcontent-%COMP%]{letter-spacing:.8px;font-style:italic}.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   .subitem.max-w-400[_ngcontent-%COMP%]{max-width:400px}.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .update_detail[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:0}",
      ],
    });
  }
  return a;
})();
var ve = (a) => ["/", a, "blog"],
  We = (() => {
    class a {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(p) {
        (this.translate = p),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((c) => {
            (this.currentLanguage = c.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (c) {
        return new (c || a)(b(P));
      };
      static ɵcmp = C({
        type: a,
        selectors: [["app-detail-1"]],
        decls: 40,
        vars: 54,
        consts: [
          [1, "container", "details-container", "my-lg-5"],
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
            "/assets/images/webp/blog/blog1.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem", "fw-bold", "big", "light", "font-20", 3, "innerHTML"],
          [1, "subitem", 3, "innerHTML"],
        ],
        template: function (c, m) {
          c & 1 &&
            (g(0, "div", 0)(1, "div", 1)(2, "a", 2),
            o(3, "img", 3),
            s(4),
            t(5, "translate"),
            l(),
            o(6, "img", 4),
            g(7, "h1", 5),
            s(8),
            t(9, "translate"),
            l(),
            o(10, "p", 6),
            t(11, "translate"),
            o(12, "p", 7),
            t(13, "translate"),
            o(14, "p", 7),
            t(15, "translate"),
            o(16, "p", 7),
            t(17, "translate"),
            o(18, "p", 7),
            t(19, "translate"),
            o(20, "p", 7),
            t(21, "translate"),
            o(22, "p", 7),
            t(23, "translate"),
            o(24, "p", 6),
            t(25, "translate"),
            o(26, "p", 7),
            t(27, "translate"),
            o(28, "p", 7),
            t(29, "translate"),
            o(30, "p", 7),
            t(31, "translate"),
            o(32, "p", 7),
            t(33, "translate"),
            o(34, "p", 6),
            t(35, "translate"),
            o(36, "p", 7),
            t(37, "translate"),
            o(38, "p", 7),
            t(39, "translate"),
            l()()),
            c & 2 &&
              (e(2),
              i(
                "routerLink",
                m.currentLanguage !== "en"
                  ? M(52, ve, m.currentLanguage)
                  : "/blog"
              ),
              e(2),
              x(" ", n(5, 18, "blog.back_to"), ""),
              e(4),
              d(n(9, 20, "blog.box1_title")),
              e(2),
              i("innerHTML", n(11, 22, "blog.box1_desc1"), r),
              e(2),
              i("innerHTML", n(13, 24, "blog.box1_desc"), r),
              e(2),
              i("innerHTML", n(15, 26, "blog.box1_desc2"), r),
              e(2),
              i("innerHTML", n(17, 28, "blog.box1_desc3"), r),
              e(2),
              i("innerHTML", n(19, 30, "blog.box1_desc4"), r),
              e(2),
              i("innerHTML", n(21, 32, "blog.box1_desc5"), r),
              e(2),
              i("innerHTML", n(23, 34, "blog.box1_desc6"), r),
              e(2),
              i("innerHTML", n(25, 36, "blog.box1_desc7"), r),
              e(2),
              i("innerHTML", n(27, 38, "blog.box1_desc8"), r),
              e(2),
              i("innerHTML", n(29, 40, "blog.box1_desc9"), r),
              e(2),
              i("innerHTML", n(31, 42, "blog.box1_desc10"), r),
              e(2),
              i("innerHTML", n(33, 44, "blog.box1_desc11"), r),
              e(2),
              i("innerHTML", n(35, 46, "blog.box1_desc12"), r),
              e(2),
              i("innerHTML", n(37, 48, "blog.box1_desc13"), r),
              e(2),
              i("innerHTML", n(39, 50, "blog.box1_desc14"), r));
        },
        dependencies: [u, f, O],
        encapsulation: 2,
      });
    }
    return a;
  })();
var Le = (a) => ["/", a, "blog"],
  qe = (() => {
    class a {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(p) {
        (this.translate = p),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((c) => {
            (this.currentLanguage = c.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (c) {
        return new (c || a)(b(P));
      };
      static ɵcmp = C({
        type: a,
        selectors: [["app-detail-2"]],
        decls: 42,
        vars: 48,
        consts: [
          [1, "container", "details-container", "my-lg-5"],
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
            "/assets/images/webp/blog/blog2.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem", "fw-bold", "big", "light"],
          [1, "subitem"],
          [1, "subitem", 3, "innerHTML"],
          [1, "subitem", "fw-bold", "big", "light", 3, "innerHTML"],
        ],
        template: function (c, m) {
          c & 1 &&
            (g(0, "div", 0)(1, "div", 1)(2, "a", 2),
            o(3, "img", 3),
            s(4),
            t(5, "translate"),
            l(),
            o(6, "img", 4),
            g(7, "h1", 5),
            s(8),
            t(9, "translate"),
            l(),
            g(10, "p", 6),
            s(11),
            t(12, "translate"),
            l(),
            g(13, "p", 7),
            s(14),
            t(15, "translate"),
            l(),
            g(16, "p", 6),
            s(17),
            t(18, "translate"),
            l(),
            o(19, "p", 8),
            t(20, "translate"),
            g(21, "p", 6),
            s(22),
            t(23, "translate"),
            l(),
            o(24, "p", 8),
            t(25, "translate"),
            o(26, "p", 9),
            t(27, "translate"),
            o(28, "p", 8),
            t(29, "translate"),
            o(30, "p", 9),
            t(31, "translate"),
            o(32, "p", 8),
            t(33, "translate"),
            o(34, "p", 9),
            t(35, "translate"),
            g(36, "p", 7),
            s(37),
            t(38, "translate"),
            l(),
            g(39, "p", 7),
            s(40),
            t(41, "translate"),
            l()()()),
            c & 2 &&
              (e(2),
              i(
                "routerLink",
                m.currentLanguage !== "en"
                  ? M(46, Le, m.currentLanguage)
                  : "/blog"
              ),
              e(2),
              x(" ", n(5, 16, "blog.back_to"), ""),
              e(4),
              d(n(9, 18, "blog.box2_title")),
              e(3),
              d(n(12, 20, "blog.box2_desc")),
              e(3),
              d(n(15, 22, "blog.box2_desc1")),
              e(3),
              d(n(18, 24, "blog.box2_desc2")),
              e(2),
              i("innerHTML", n(20, 26, "blog.box2_desc3"), r),
              e(3),
              d(n(23, 28, "blog.box2_desc4")),
              e(2),
              i("innerHTML", n(25, 30, "blog.box2_desc5"), r),
              e(2),
              i("innerHTML", n(27, 32, "blog.box2_desc6"), r),
              e(2),
              i("innerHTML", n(29, 34, "blog.box2_desc7"), r),
              e(2),
              i("innerHTML", n(31, 36, "blog.box2_desc8"), r),
              e(2),
              i("innerHTML", n(33, 38, "blog.box2_desc9"), r),
              e(2),
              i("innerHTML", n(35, 40, "blog.box2_desc10"), r),
              e(3),
              d(n(38, 42, "blog.box2_desc11")),
              e(3),
              d(n(41, 44, "blog.box2_desc12")));
        },
        dependencies: [u, f, O],
        encapsulation: 2,
      });
    }
    return a;
  })();
var he = (a) => ["/", a, "blog"],
  Je = (() => {
    class a {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(p) {
        (this.translate = p),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((c) => {
            (this.currentLanguage = c.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (c) {
        return new (c || a)(b(P));
      };
      static ɵcmp = C({
        type: a,
        selectors: [["app-detail-3"]],
        decls: 47,
        vars: 63,
        consts: [
          [1, "container", "details-container", "my-lg-5"],
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
            "/assets/images/webp/blog/blog3.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem", "fw-bold", "big", "light"],
          [1, "subitem", 3, "innerHTML"],
          [1, "subitem", "fw-bold", "big", "light", 3, "innerHTML"],
        ],
        template: function (c, m) {
          c & 1 &&
            (g(0, "div", 0)(1, "div", 1)(2, "a", 2),
            o(3, "img", 3),
            s(4),
            t(5, "translate"),
            l(),
            o(6, "img", 4),
            g(7, "h1", 5),
            s(8),
            t(9, "translate"),
            l(),
            g(10, "p", 6),
            s(11),
            t(12, "translate"),
            l(),
            o(13, "p", 7),
            t(14, "translate"),
            o(15, "p", 8),
            t(16, "translate"),
            o(17, "p", 7),
            t(18, "translate"),
            o(19, "p", 7),
            t(20, "translate"),
            o(21, "p", 7),
            t(22, "translate"),
            o(23, "p", 8),
            t(24, "translate"),
            o(25, "p", 7),
            t(26, "translate"),
            o(27, "p", 7),
            t(28, "translate"),
            o(29, "p", 7),
            t(30, "translate"),
            o(31, "p", 8),
            t(32, "translate"),
            o(33, "p", 7),
            t(34, "translate"),
            o(35, "p", 8),
            t(36, "translate"),
            o(37, "p", 7),
            t(38, "translate"),
            o(39, "p", 7),
            t(40, "translate"),
            o(41, "p", 8),
            t(42, "translate"),
            o(43, "p", 7),
            t(44, "translate"),
            o(45, "p", 7),
            t(46, "translate"),
            l()()),
            c & 2 &&
              (e(2),
              i(
                "routerLink",
                m.currentLanguage !== "en"
                  ? M(61, he, m.currentLanguage)
                  : "/blog"
              ),
              e(2),
              x(" ", n(5, 21, "blog.back_to"), ""),
              e(4),
              d(n(9, 23, "blog.box3_title")),
              e(3),
              d(n(12, 25, "blog.box3_desc")),
              e(2),
              i("innerHTML", n(14, 27, "blog.box3_desc1"), r),
              e(2),
              i("innerHTML", n(16, 29, "blog.box3_desc2"), r),
              e(2),
              i("innerHTML", n(18, 31, "blog.box3_desc3"), r),
              e(2),
              i("innerHTML", n(20, 33, "blog.box3_desc4"), r),
              e(2),
              i("innerHTML", n(22, 35, "blog.box3_desc5"), r),
              e(2),
              i("innerHTML", n(24, 37, "blog.box3_desc6"), r),
              e(2),
              i("innerHTML", n(26, 39, "blog.box3_desc7"), r),
              e(2),
              i("innerHTML", n(28, 41, "blog.box3_desc8"), r),
              e(2),
              i("innerHTML", n(30, 43, "blog.box3_desc9"), r),
              e(2),
              i("innerHTML", n(32, 45, "blog.box3_desc10"), r),
              e(2),
              i("innerHTML", n(34, 47, "blog.box3_desc11"), r),
              e(2),
              i("innerHTML", n(36, 49, "blog.box3_desc12"), r),
              e(2),
              i("innerHTML", n(38, 51, "blog.box3_desc13"), r),
              e(2),
              i("innerHTML", n(40, 53, "blog.box3_desc14"), r),
              e(2),
              i("innerHTML", n(42, 55, "blog.box3_desc15"), r),
              e(2),
              i("innerHTML", n(44, 57, "blog.box3_desc16"), r),
              e(2),
              i("innerHTML", n(46, 59, "blog.box3_desc17"), r));
        },
        dependencies: [u, f, O],
        encapsulation: 2,
      });
    }
    return a;
  })();
var He = (a) => ["/", a, "blog"],
  Xe = (() => {
    class a {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(p) {
        (this.translate = p),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((c) => {
            (this.currentLanguage = c.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (c) {
        return new (c || a)(b(P));
      };
      static ɵcmp = C({
        type: a,
        selectors: [["app-detail-4"]],
        decls: 43,
        vars: 57,
        consts: [
          [1, "container", "details-container", "my-lg-5"],
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
            "/assets/images/webp/blog/blog4.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem", "fw-bold", "big", "light"],
          [1, "subitem", 3, "innerHTML"],
          [1, "subitem", "fw-bold", "big", "light", 3, "innerHTML"],
        ],
        template: function (c, m) {
          c & 1 &&
            (g(0, "div", 0)(1, "div", 1)(2, "a", 2),
            o(3, "img", 3),
            s(4),
            t(5, "translate"),
            l(),
            o(6, "img", 4),
            g(7, "h1", 5),
            s(8),
            t(9, "translate"),
            l(),
            g(10, "p", 6),
            s(11),
            t(12, "translate"),
            l(),
            o(13, "p", 7),
            t(14, "translate"),
            o(15, "p", 7),
            t(16, "translate"),
            o(17, "p", 8),
            t(18, "translate"),
            o(19, "p", 7),
            t(20, "translate"),
            o(21, "p", 7),
            t(22, "translate"),
            o(23, "p", 8),
            t(24, "translate"),
            o(25, "p", 7),
            t(26, "translate"),
            o(27, "p", 8),
            t(28, "translate"),
            o(29, "p", 7),
            t(30, "translate"),
            o(31, "p", 8),
            t(32, "translate"),
            o(33, "p", 7),
            t(34, "translate"),
            o(35, "p", 8),
            t(36, "translate"),
            o(37, "p", 7),
            t(38, "translate"),
            o(39, "p", 8),
            t(40, "translate"),
            o(41, "p", 7),
            t(42, "translate"),
            l()()),
            c & 2 &&
              (e(2),
              i(
                "routerLink",
                m.currentLanguage !== "en"
                  ? M(55, He, m.currentLanguage)
                  : "/blog"
              ),
              e(2),
              x(" ", n(5, 19, "blog.back_to"), ""),
              e(4),
              d(n(9, 21, "blog.box4_title")),
              e(3),
              d(n(12, 23, "blog.box4_desc")),
              e(2),
              i("innerHTML", n(14, 25, "blog.box4_desc1"), r),
              e(2),
              i("innerHTML", n(16, 27, "blog.box4_desc2"), r),
              e(2),
              i("innerHTML", n(18, 29, "blog.box4_desc3"), r),
              e(2),
              i("innerHTML", n(20, 31, "blog.box4_desc4"), r),
              e(2),
              i("innerHTML", n(22, 33, "blog.box4_desc5"), r),
              e(2),
              i("innerHTML", n(24, 35, "blog.box4_desc6"), r),
              e(2),
              i("innerHTML", n(26, 37, "blog.box4_desc7"), r),
              e(2),
              i("innerHTML", n(28, 39, "blog.box4_desc8"), r),
              e(2),
              i("innerHTML", n(30, 41, "blog.box4_desc9"), r),
              e(2),
              i("innerHTML", n(32, 43, "blog.box4_desc10"), r),
              e(2),
              i("innerHTML", n(34, 45, "blog.box4_desc11"), r),
              e(2),
              i("innerHTML", n(36, 47, "blog.box4_desc12"), r),
              e(2),
              i("innerHTML", n(38, 49, "blog.box4_desc13"), r),
              e(2),
              i("innerHTML", n(40, 51, "blog.box4_desc14"), r),
              e(2),
              i("innerHTML", n(42, 53, "blog.box4_desc15"), r));
        },
        dependencies: [u, f, O],
        encapsulation: 2,
      });
    }
    return a;
  })();
var ye = (a) => ["/", a, "blog"],
  et = (() => {
    class a {
      translate;
      currentLanguage;
      homeUrl = "";
      constructor(p) {
        (this.translate = p),
          (this.currentLanguage = this.translate.currentLang),
          (this.homeUrl = _(this.currentLanguage)),
          this.translate.onLangChange.subscribe((c) => {
            (this.currentLanguage = c.lang),
              (this.homeUrl = _(this.currentLanguage));
          });
      }
      static ɵfac = function (c) {
        return new (c || a)(b(P));
      };
      static ɵcmp = C({
        type: a,
        selectors: [["app-detail-5"]],
        decls: 51,
        vars: 66,
        consts: [
          [1, "container", "details-container", "my-lg-5"],
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
            "/assets/images/webp/blog/blog5.webp",
            "alt",
            "graphic",
            1,
            "graphic",
          ],
          [1, "title", "mt-4"],
          [1, "subitem", "fw-bold", "big", "light", 3, "innerHTML"],
          [1, "subitem", 3, "innerHTML"],
          [1, "ms-2"],
          [1, "subitem"],
        ],
        template: function (c, m) {
          c & 1 &&
            (g(0, "div", 0)(1, "div", 1)(2, "a", 2),
            o(3, "img", 3),
            s(4),
            t(5, "translate"),
            l(),
            o(6, "img", 4),
            g(7, "h1", 5),
            s(8),
            t(9, "translate"),
            l(),
            o(10, "p", 6),
            t(11, "translate"),
            o(12, "p", 7),
            t(13, "translate"),
            o(14, "p", 6),
            t(15, "translate"),
            o(16, "p", 7),
            t(17, "translate"),
            g(18, "ul", 8)(19, "li", 9),
            s(20),
            t(21, "translate"),
            l(),
            g(22, "li", 9),
            s(23),
            t(24, "translate"),
            l()(),
            o(25, "p", 7),
            t(26, "translate"),
            o(27, "p", 7),
            t(28, "translate"),
            o(29, "p", 6),
            t(30, "translate"),
            o(31, "p", 7),
            t(32, "translate"),
            o(33, "p", 7),
            t(34, "translate"),
            o(35, "p", 7),
            t(36, "translate"),
            o(37, "p", 6),
            t(38, "translate"),
            o(39, "p", 7),
            t(40, "translate"),
            o(41, "p", 7),
            t(42, "translate"),
            o(43, "p", 6),
            t(44, "translate"),
            o(45, "p", 7),
            t(46, "translate"),
            o(47, "p", 6),
            t(48, "translate"),
            o(49, "p", 7),
            t(50, "translate"),
            l()()),
            c & 2 &&
              (e(2),
              i(
                "routerLink",
                m.currentLanguage !== "en"
                  ? M(64, ye, m.currentLanguage)
                  : "/blog"
              ),
              e(2),
              x(" ", n(5, 22, "blog.back_to"), ""),
              e(4),
              d(n(9, 24, "blog.box5_title")),
              e(2),
              i("innerHTML", n(11, 26, "blog.box5_desc"), r),
              e(2),
              i("innerHTML", n(13, 28, "blog.box5_desc1"), r),
              e(2),
              i("innerHTML", n(15, 30, "blog.box5_desc2"), r),
              e(2),
              i("innerHTML", n(17, 32, "blog.box5_desc3"), r),
              e(4),
              d(n(21, 34, "blog.box5_desc4")),
              e(3),
              d(n(24, 36, "blog.box5_desc5")),
              e(2),
              i("innerHTML", n(26, 38, "blog.box5_desc6"), r),
              e(2),
              i("innerHTML", n(28, 40, "blog.box5_desc7"), r),
              e(2),
              i("innerHTML", n(30, 42, "blog.box5_desc8"), r),
              e(2),
              i("innerHTML", n(32, 44, "blog.box5_desc9"), r),
              e(2),
              i("innerHTML", n(34, 46, "blog.box5_desc10"), r),
              e(2),
              i("innerHTML", n(36, 48, "blog.box5_desc11"), r),
              e(2),
              i("innerHTML", n(38, 50, "blog.box5_desc12"), r),
              e(2),
              i("innerHTML", n(40, 52, "blog.box5_desc13"), r),
              e(2),
              i("innerHTML", n(42, 54, "blog.box5_desc14"), r),
              e(2),
              i("innerHTML", n(44, 56, "blog.box5_desc15"), r),
              e(2),
              i("innerHTML", n(46, 58, "blog.box5_desc16"), r),
              e(2),
              i("innerHTML", n(48, 60, "blog.box5_desc17"), r),
              e(2),
              i("innerHTML", n(50, 62, "blog.box5_desc18"), r));
        },
        dependencies: [u, f, O],
        encapsulation: 2,
      });
    }
    return a;
  })();
var Ot = (() => {
  class a {
    static ɵfac = function (c) {
      return new (c || a)();
    };
    static ɵmod = D({ type: a, bootstrap: [ae] });
    static ɵinj = k({ imports: [te.forChild([]), G, ne, oe, Q, X] });
  }
  return a;
})();
export {
  Ue as a,
  We as b,
  qe as c,
  Je as d,
  Xe as e,
  et as f,
  ae as g,
  Ot as h,
};
