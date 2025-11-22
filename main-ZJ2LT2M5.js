import { a as Gl, h as ql } from "./chunk-ZOWHHD7K.js";
import { a as zl, l as Xl } from "./chunk-KPOXJWXT.js";
import {
  $ as c,
  $a as bt,
  $b as St,
  A as on,
  Aa as xt,
  Ab as dl,
  Ac as kt,
  B as ln,
  Ba as ea,
  Bb as sa,
  Bc as pa,
  C as we,
  Ca as xe,
  Cb as qt,
  Cc as Bl,
  D as $,
  Da as V,
  Db as rt,
  Dc as Nl,
  E as j,
  Ea as Xt,
  Eb as wt,
  Ec as fe,
  F as Ms,
  Fa as Ei,
  Fb as pl,
  Fc as Rl,
  G as De,
  Ga as g,
  Gb as hl,
  Gc as Yt,
  H as W,
  Ha as f,
  Hb as ml,
  Hc as At,
  I as Te,
  Ia as q,
  Ib as Ii,
  Ic as ha,
  J as o,
  Ja as $o,
  Jb as ul,
  Jc as Hl,
  K as w,
  Ka as at,
  Kb as ra,
  Kc as ma,
  L as No,
  La as jo,
  Lb as Tt,
  Lc as Wl,
  M as Ro,
  Ma as ta,
  Mb as Fi,
  Mc as $l,
  N as Ho,
  Na as vt,
  Nb as Vs,
  Nc as jl,
  O as zo,
  Oa as Xo,
  Ob as gl,
  P as nt,
  Pa as Es,
  Pb as fl,
  Q as cn,
  Qa as Oi,
  Qb as _l,
  R as li,
  Ra as qo,
  Rb as xl,
  S as jt,
  Sa as yt,
  Sb as vl,
  T as A,
  Ta as le,
  Tb as yl,
  U as te,
  Ua as X,
  Ub as bl,
  V as u,
  Va as Yo,
  Vb as pe,
  W as ct,
  Wa as Uo,
  Wb as oa,
  X as Ee,
  Xa as Bt,
  Xb as Y,
  Y as Mi,
  Ya as H,
  Yb as Cl,
  Z as ci,
  Za as Os,
  Zb as E,
  _ as Go,
  _a as Qo,
  _b as ce,
  a as Kn,
  aa as d,
  ab as Ko,
  ac as wl,
  b as ks,
  ba as T,
  bb as Zo,
  bc as Tl,
  c as Po,
  ca as dt,
  cb as Jo,
  cc as Bs,
  d as Io,
  da as pt,
  db as el,
  dc as Sl,
  e as Fo,
  ea as Ls,
  eb as ia,
  ec as kl,
  f as Vo,
  fa as O,
  fb as tl,
  fc as Al,
  g as Bo,
  ga as S,
  gb as il,
  gc as Vi,
  h as $t,
  ha as y,
  hb as nl,
  hc as Ml,
  i as sn,
  ia as Li,
  ib as K,
  ic as ge,
  j as Z,
  ja as Di,
  jb as Ct,
  jc as la,
  k as Zn,
  ka as Re,
  kb as na,
  kc as Ll,
  l as Me,
  la as de,
  lb as di,
  lc as Dl,
  m as J,
  ma as Vt,
  mb as al,
  mc as El,
  n as ri,
  na as Wo,
  nb as st,
  nc as Bi,
  o as We,
  oa as $e,
  ob as Ps,
  oc as Ol,
  p as oi,
  pa as He,
  pb as mn,
  pc as Pl,
  q as Jn,
  qa as ze,
  qb as Is,
  qc as Ns,
  r as F,
  ra as ht,
  rb as Pi,
  rc as Rs,
  s as ee,
  sa as m,
  sb as Fs,
  sc as ca,
  t as Le,
  ta as _,
  tb as aa,
  tc as Ye,
  u as rn,
  ua as P,
  ub as qe,
  uc as da,
  v as ye,
  va as mt,
  vb as sl,
  vc as Il,
  w as M,
  wa as Ds,
  wb as rl,
  wc as Fl,
  x as L,
  xa as dn,
  xb as ol,
  xc as Vl,
  y as z,
  ya as pn,
  yb as ll,
  yc as pi,
  z as As,
  za as hn,
  zb as cl,
  zc as Hs,
} from "./chunk-VN2GIHHS.js";
import "./chunk-JROBEG3T.js";
import "./chunk-VJGTFA6C.js";
import "./chunk-V2OYAYNL.js";
import "./chunk-ZU6Q67UT.js";
import "./chunk-NUY2RPSF.js";
import "./chunk-DATZCTIA.js";
import "./chunk-N4IN2AJ3.js";
import "./chunk-QV7AMSUB.js";
import "./chunk-L4DL45FQ.js";
import "./chunk-XMCF3TCT.js";
import { a as Oo, g as cm } from "./chunk-KUZSGAGC.js";
import "./chunk-CP7YJKJV.js";
import {
  a as ae,
  b as lt,
  d as Eo,
  f as Ts,
  i as Ss,
  l as Ne,
} from "./chunk-QE6IBIJD.js";
var Kp = Ts((NA, Qp) => {
  "use strict";
  Qp.exports = Hf;
  function Qi(t) {
    return t instanceof Buffer
      ? Buffer.from(t)
      : new t.constructor(t.buffer.slice(), t.byteOffset, t.length);
  }
  function Hf(t) {
    if (((t = t || {}), t.circles)) return zf(t);
    let i = new Map();
    if (
      (i.set(Date, (r) => new Date(r)),
      i.set(Map, (r, l) => new Map(n(Array.from(r), l))),
      i.set(Set, (r, l) => new Set(n(Array.from(r), l))),
      t.constructorHandlers)
    )
      for (let r of t.constructorHandlers) i.set(r[0], r[1]);
    let e = null;
    return t.proto ? s : a;
    function n(r, l) {
      let p = Object.keys(r),
        h = new Array(p.length);
      for (let x = 0; x < p.length; x++) {
        let v = p[x],
          b = r[v];
        typeof b != "object" || b === null
          ? (h[v] = b)
          : b.constructor !== Object && (e = i.get(b.constructor))
          ? (h[v] = e(b, l))
          : ArrayBuffer.isView(b)
          ? (h[v] = Qi(b))
          : (h[v] = l(b));
      }
      return h;
    }
    function a(r) {
      if (typeof r != "object" || r === null) return r;
      if (Array.isArray(r)) return n(r, a);
      if (r.constructor !== Object && (e = i.get(r.constructor)))
        return e(r, a);
      let l = {};
      for (let p in r) {
        if (Object.hasOwnProperty.call(r, p) === !1) continue;
        let h = r[p];
        typeof h != "object" || h === null
          ? (l[p] = h)
          : h.constructor !== Object && (e = i.get(h.constructor))
          ? (l[p] = e(h, a))
          : ArrayBuffer.isView(h)
          ? (l[p] = Qi(h))
          : (l[p] = a(h));
      }
      return l;
    }
    function s(r) {
      if (typeof r != "object" || r === null) return r;
      if (Array.isArray(r)) return n(r, s);
      if (r.constructor !== Object && (e = i.get(r.constructor)))
        return e(r, s);
      let l = {};
      for (let p in r) {
        let h = r[p];
        typeof h != "object" || h === null
          ? (l[p] = h)
          : h.constructor !== Object && (e = i.get(h.constructor))
          ? (l[p] = e(h, s))
          : ArrayBuffer.isView(h)
          ? (l[p] = Qi(h))
          : (l[p] = s(h));
      }
      return l;
    }
  }
  function zf(t) {
    let i = [],
      e = [],
      n = new Map();
    if (
      (n.set(Date, (p) => new Date(p)),
      n.set(Map, (p, h) => new Map(s(Array.from(p), h))),
      n.set(Set, (p, h) => new Set(s(Array.from(p), h))),
      t.constructorHandlers)
    )
      for (let p of t.constructorHandlers) n.set(p[0], p[1]);
    let a = null;
    return t.proto ? l : r;
    function s(p, h) {
      let x = Object.keys(p),
        v = new Array(x.length);
      for (let b = 0; b < x.length; b++) {
        let C = x[b],
          k = p[C];
        if (typeof k != "object" || k === null) v[C] = k;
        else if (k.constructor !== Object && (a = n.get(k.constructor)))
          v[C] = a(k, h);
        else if (ArrayBuffer.isView(k)) v[C] = Qi(k);
        else {
          let D = i.indexOf(k);
          D !== -1 ? (v[C] = e[D]) : (v[C] = h(k));
        }
      }
      return v;
    }
    function r(p) {
      if (typeof p != "object" || p === null) return p;
      if (Array.isArray(p)) return s(p, r);
      if (p.constructor !== Object && (a = n.get(p.constructor)))
        return a(p, r);
      let h = {};
      i.push(p), e.push(h);
      for (let x in p) {
        if (Object.hasOwnProperty.call(p, x) === !1) continue;
        let v = p[x];
        if (typeof v != "object" || v === null) h[x] = v;
        else if (v.constructor !== Object && (a = n.get(v.constructor)))
          h[x] = a(v, r);
        else if (ArrayBuffer.isView(v)) h[x] = Qi(v);
        else {
          let b = i.indexOf(v);
          b !== -1 ? (h[x] = e[b]) : (h[x] = r(v));
        }
      }
      return i.pop(), e.pop(), h;
    }
    function l(p) {
      if (typeof p != "object" || p === null) return p;
      if (Array.isArray(p)) return s(p, l);
      if (p.constructor !== Object && (a = n.get(p.constructor)))
        return a(p, l);
      let h = {};
      i.push(p), e.push(h);
      for (let x in p) {
        let v = p[x];
        if (typeof v != "object" || v === null) h[x] = v;
        else if (v.constructor !== Object && (a = n.get(v.constructor)))
          h[x] = a(v, l);
        else if (ArrayBuffer.isView(v)) h[x] = Qi(v);
        else {
          let b = i.indexOf(v);
          b !== -1 ? (h[x] = e[b]) : (h[x] = l(v));
        }
      }
      return i.pop(), e.pop(), h;
    }
  }
});
var Ah = Ts((eL, Jx) => {
  Jx.exports = {
    name: "@wert-io/widget-initializer",
    version: "6.7.1",
    description: "WertWidget helper",
    main: "index.js",
    types: "index.d.ts",
    repository: {
      type: "git",
      url: "https://github.com/wert-io/widget-initializer.git",
    },
    scripts: {
      build: "tsc -p .",
      "build-script": "rollup -c",
      test: "jest --ci --reporters=default --reporters=jest-junit",
    },
    author: "@wert-io",
    license: "ISC",
    devDependencies: {
      "@babel/core": "^7.13.16",
      "@babel/preset-env": "^7.13.15",
      "@rollup/plugin-babel": "^5.3.0",
      "@rollup/plugin-commonjs": "^18.0.0",
      "@rollup/plugin-json": "^4.1.0",
      "@rollup/plugin-node-resolve": "^13.1.3",
      "@typescript-eslint/eslint-plugin": "^4.28.1",
      "@typescript-eslint/parser": "^4.28.1",
      eslint: "^7.25.0",
      "eslint-plugin-import": "^2.22.1",
      jest: "^27.0.5",
      "jest-junit": "^12.0.0",
      rollup: "^2.45.2",
      typescript: "^4.3.5",
    },
    dependencies: {},
    jest: {
      testEnvironment: "jsdom",
      transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
    },
    "jest-junit": {
      outputDirectory: "reports",
      outputName: "jest-junit.xml",
      ancestorSeparator: " \u203A ",
      uniqueOutputName: "false",
      suiteNameTemplate: "{filepath}",
      classNameTemplate: "{classname}",
      titleTemplate: "{title}",
    },
  };
});
var vo = Ts((tL, Mh) => {
  "use strict";
  var ev = Ah(),
    xo = class {
      constructor(i) {
        (this.options = i),
          (this.iframe = document.createElement("iframe")),
          (this.widgetWindow = null),
          (this.widget_layout_mode = "Modal"),
          (this.await_data = !1),
          (this.onMessage = (e) => {
            var n, a, s, r, l, p, h, x, v, b;
            let C = e.source === this.widgetWindow,
              k = typeof e.data == "object";
            if (!(!C || !k))
              switch (e.data.type) {
                case "loaded":
                  this.sendEvent("allow-redirect", { redirectAllowed: !1 }),
                    this.sendEvent("extra", this.options.extra),
                    this.sendEvent("parent-hostname", {
                      hostname: window.location.hostname,
                    }),
                    (a =
                      (n = this.options.listeners) === null || n === void 0
                        ? void 0
                        : n[e.data.type]) === null ||
                      a === void 0 ||
                      a.call(n);
                  break;
                case "payment-status":
                  (r =
                    (s = this.options.listeners) === null || s === void 0
                      ? void 0
                      : s[e.data.type]) === null ||
                    r === void 0 ||
                    r.call(s, e.data.data);
                  break;
                case "position":
                  (p =
                    (l = this.options.listeners) === null || l === void 0
                      ? void 0
                      : l[e.data.type]) === null ||
                    p === void 0 ||
                    p.call(l, e.data.data);
                  break;
                case "rate-update":
                  (x =
                    (h = this.options.listeners) === null || h === void 0
                      ? void 0
                      : h[e.data.type]) === null ||
                    x === void 0 ||
                    x.call(h, e.data.data);
                  break;
                case "close":
                  this.close();
                  break;
                case "error":
                  (b =
                    (v = this.options.listeners) === null || v === void 0
                      ? void 0
                      : v[e.data.type]) === null ||
                    b === void 0 ||
                    b.call(v, e.data.data);
                  break;
                case "3ds-start":
                  this.iframe.style.background = "#fff";
                  break;
                case "3ds-end":
                  this.iframe.style.background = "transparent";
                  break;
              }
          }),
          this.validateOptions(i),
          this.options.origin ||
            (this.options.origin = "https://widget.wert.io"),
          this.options.extra && (this.await_data = !0);
      }
      open() {
        (this.iframe.style.border = "none"),
          (this.iframe.style.width = "100%"),
          (this.iframe.style.height = "100%"),
          (this.iframe.style.bottom = "0"),
          (this.iframe.style.right = "0"),
          (this.iframe.style.position = "fixed"),
          (this.iframe.style.zIndex = "10000"),
          (document.body.style.overflow = "hidden"),
          this.iframe.setAttribute("src", this.getEmbedUrl()),
          this.iframe.setAttribute("allow", "camera *; microphone *; payment"),
          this.iframe.setAttribute(
            "sandbox",
            "allow-scripts allow-forms allow-popups allow-same-origin"
          ),
          this.iframe.setAttribute("data-version", ev.version),
          document.body.appendChild(this.iframe),
          (this.widgetWindow = this.iframe.contentWindow),
          this.listenWidget();
      }
      addEventListeners(i) {
        this.options.listeners = Object.assign(
          Object.assign({}, this.options.listeners),
          i
        );
      }
      removeEventListeners(i) {
        var e, n;
        if (typeof i > "u") delete this.options.listeners;
        else if (typeof i == "string")
          (e = this.options.listeners) === null || e === void 0 || delete e[i];
        else
          for (let a of i)
            (n = this.options.listeners) === null ||
              n === void 0 ||
              delete n[a];
      }
      updateTheme(i) {
        !i || !Object.keys(i).length || this.sendEvent("theme", i);
      }
      close() {
        var i, e;
        document.body.removeChild(this.iframe),
          (document.body.style.overflow = ""),
          this.unListenWidget(),
          (e =
            (i = this.options.listeners) === null || i === void 0
              ? void 0
              : i.close) === null ||
            e === void 0 ||
            e.call(i);
      }
      validateOptions(i) {
        var e, n, a, s;
        if (!i.partner_id)
          throw Error(
            "Please provide a partner_id in order for the widget to work correctly"
          );
        i.container_id && console.error("container_id is no longer supported"),
          !(
            (n =
              (e = i.extra) === null || e === void 0 ? void 0 : e.item_info) ===
              null || n === void 0
          ) &&
            n.name &&
            i.extra.item_info.name.length > 40 &&
            console.error(
              "Max length of the extra.item_info.name value is 40 characters"
            ),
          !(
            (s =
              (a = i.extra) === null || a === void 0 ? void 0 : a.item_info) ===
              null || s === void 0
          ) &&
            s.category &&
            i.extra.item_info.category.length > 40 &&
            console.error(
              "Max length of the extra.item_info.category value is 40 characters"
            );
      }
      listenWidget() {
        window.addEventListener("message", this.onMessage);
        let i = () => {
          (this.widgetWindow && !this.widgetWindow.closed) ||
            this.unListenWidget();
        };
        this.checkIntervalId = window.setInterval(i, 200);
      }
      unListenWidget() {
        this.checkIntervalId &&
          (clearInterval(this.checkIntervalId),
          (this.checkIntervalId = void 0),
          window.removeEventListener("message", this.onMessage));
      }
      sendEvent(i, e) {
        var n;
        e &&
          ((n = this.widgetWindow) === null ||
            n === void 0 ||
            n.postMessage({ data: e, type: i }, this.options.origin));
      }
      getEmbedUrl() {
        let i = this.getParametersString();
        return `${this.options.origin}/${this.options.partner_id}/widget${i}`;
      }
      getParametersString() {
        return Object.entries(
          Object.assign(
            Object.assign(Object.assign({}, this.options), {
              widget_layout_mode: this.widget_layout_mode,
            }),
            this.await_data && { await_data: this.await_data }
          )
        ).reduce((i, [e, n]) => {
          if (
            n === void 0 ||
            typeof n == "object" ||
            ["origin", "partner_id"].includes(e)
          )
            return i;
          let a = i.length ? "&" : "?";
          return i + a + e + "=" + encodeURIComponent(n);
        }, "");
      }
    };
  Mh.exports = xo;
});
var tc = (() => {
    class t {
      constructor(e, n) {
        (this._renderer = e),
          (this._elementRef = n),
          (this.onChange = (a) => {}),
          (this.onTouched = () => {});
      }
      setProperty(e, n) {
        this._renderer.setProperty(this._elementRef.nativeElement, e, n);
      }
      registerOnTouched(e) {
        this.onTouched = e;
      }
      registerOnChange(e) {
        this.onChange = e;
      }
      setDisabledState(e) {
        this.setProperty("disabled", e);
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)(w(nt), w(we));
        };
      }
      static {
        this.ɵdir = Le({ type: t });
      }
    }
    return t;
  })(),
  dm = (() => {
    class t extends tc {
      static {
        this.ɵfac = (() => {
          let e;
          return function (a) {
            return (e || (e = on(t)))(a || t);
          };
        })();
      }
      static {
        this.ɵdir = Le({ type: t, features: [jt] });
      }
    }
    return t;
  })(),
  ic = new ri("");
var pm = { provide: ic, useExisting: Zn(() => Ri), multi: !0 };
function hm() {
  let t = Es() ? Es().getUserAgent() : "";
  return /android (\d+)/.test(t.toLowerCase());
}
var mm = new ri(""),
  Ri = (() => {
    class t extends tc {
      constructor(e, n, a) {
        super(e, n),
          (this._compositionMode = a),
          (this._composing = !1),
          this._compositionMode == null && (this._compositionMode = !hm());
      }
      writeValue(e) {
        let n = e ?? "";
        this.setProperty("value", n);
      }
      _handleInput(e) {
        (!this._compositionMode ||
          (this._compositionMode && !this._composing)) &&
          this.onChange(e);
      }
      _compositionStart() {
        this._composing = !0;
      }
      _compositionEnd(e) {
        (this._composing = !1), this._compositionMode && this.onChange(e);
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)(w(nt), w(we), w(mm, 8));
        };
      }
      static {
        this.ɵdir = Le({
          type: t,
          selectors: [
            ["input", "formControlName", "", 3, "type", "checkbox"],
            ["textarea", "formControlName", ""],
            ["input", "formControl", "", 3, "type", "checkbox"],
            ["textarea", "formControl", ""],
            ["input", "ngModel", "", 3, "type", "checkbox"],
            ["textarea", "ngModel", ""],
            ["", "ngDefaultControl", ""],
          ],
          hostBindings: function (n, a) {
            n & 1 &&
              S("input", function (r) {
                return a._handleInput(r.target.value);
              })("blur", function () {
                return a.onTouched();
              })("compositionstart", function () {
                return a._compositionStart();
              })("compositionend", function (r) {
                return a._compositionEnd(r.target.value);
              });
          },
          features: [xt([pm]), jt],
        });
      }
    }
    return t;
  })();
function um(t) {
  return (
    t == null || ((typeof t == "string" || Array.isArray(t)) && t.length === 0)
  );
}
var nc = new ri(""),
  gm = new ri("");
function fm(t) {
  if (!t) return zs;
  let i, e;
  return (
    typeof t == "string"
      ? ((e = ""),
        t.charAt(0) !== "^" && (e += "^"),
        (e += t),
        t.charAt(t.length - 1) !== "$" && (e += "$"),
        (i = new RegExp(e)))
      : ((e = t.toString()), (i = t)),
    (n) => {
      if (um(n.value)) return null;
      let a = n.value;
      return i.test(a)
        ? null
        : { pattern: { requiredPattern: e, actualValue: a } };
    }
  );
}
function zs(t) {
  return null;
}
function ac(t) {
  return t != null;
}
function sc(t) {
  return jo(t) ? Po(t) : t;
}
function rc(t) {
  let i = {};
  return (
    t.forEach((e) => {
      i = e != null ? ae(ae({}, i), e) : i;
    }),
    Object.keys(i).length === 0 ? null : i
  );
}
function oc(t, i) {
  return i.map((e) => e(t));
}
function _m(t) {
  return !t.validate;
}
function lc(t) {
  return t.map((i) => (_m(i) ? i : (e) => i.validate(e)));
}
function xm(t) {
  if (!t) return null;
  let i = t.filter(ac);
  return i.length == 0
    ? null
    : function (e) {
        return rc(oc(e, i));
      };
}
function cc(t) {
  return t != null ? xm(lc(t)) : null;
}
function vm(t) {
  if (!t) return null;
  let i = t.filter(ac);
  return i.length == 0
    ? null
    : function (e) {
        let n = oc(e, i).map(sc);
        return Fo(n).pipe(Io(rc));
      };
}
function dc(t) {
  return t != null ? vm(lc(t)) : null;
}
function Yl(t, i) {
  return t === null ? [i] : Array.isArray(t) ? [...t, i] : [t, i];
}
function ym(t) {
  return t._rawValidators;
}
function bm(t) {
  return t._rawAsyncValidators;
}
function Gs(t) {
  return t ? (Array.isArray(t) ? t : [t]) : [];
}
function ga(t, i) {
  return Array.isArray(t) ? t.includes(i) : t === i;
}
function Ul(t, i) {
  let e = Gs(i);
  return (
    Gs(t).forEach((a) => {
      ga(e, a) || e.push(a);
    }),
    e
  );
}
function Ql(t, i) {
  return Gs(i).filter((e) => !ga(t, e));
}
var fa = class {
    constructor() {
      (this._rawValidators = []),
        (this._rawAsyncValidators = []),
        (this._onDestroyCallbacks = []);
    }
    get value() {
      return this.control ? this.control.value : null;
    }
    get valid() {
      return this.control ? this.control.valid : null;
    }
    get invalid() {
      return this.control ? this.control.invalid : null;
    }
    get pending() {
      return this.control ? this.control.pending : null;
    }
    get disabled() {
      return this.control ? this.control.disabled : null;
    }
    get enabled() {
      return this.control ? this.control.enabled : null;
    }
    get errors() {
      return this.control ? this.control.errors : null;
    }
    get pristine() {
      return this.control ? this.control.pristine : null;
    }
    get dirty() {
      return this.control ? this.control.dirty : null;
    }
    get touched() {
      return this.control ? this.control.touched : null;
    }
    get status() {
      return this.control ? this.control.status : null;
    }
    get untouched() {
      return this.control ? this.control.untouched : null;
    }
    get statusChanges() {
      return this.control ? this.control.statusChanges : null;
    }
    get valueChanges() {
      return this.control ? this.control.valueChanges : null;
    }
    get path() {
      return null;
    }
    _setValidators(i) {
      (this._rawValidators = i || []),
        (this._composedValidatorFn = cc(this._rawValidators));
    }
    _setAsyncValidators(i) {
      (this._rawAsyncValidators = i || []),
        (this._composedAsyncValidatorFn = dc(this._rawAsyncValidators));
    }
    get validator() {
      return this._composedValidatorFn || null;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn || null;
    }
    _registerOnDestroy(i) {
      this._onDestroyCallbacks.push(i);
    }
    _invokeOnDestroyCallbacks() {
      this._onDestroyCallbacks.forEach((i) => i()),
        (this._onDestroyCallbacks = []);
    }
    reset(i = void 0) {
      this.control && this.control.reset(i);
    }
    hasError(i, e) {
      return this.control ? this.control.hasError(i, e) : !1;
    }
    getError(i, e) {
      return this.control ? this.control.getError(i, e) : null;
    }
  },
  Ws = class extends fa {
    get formDirective() {
      return null;
    }
    get path() {
      return null;
    }
  },
  fn = class extends fa {
    constructor() {
      super(...arguments),
        (this._parent = null),
        (this.name = null),
        (this.valueAccessor = null);
    }
  },
  $s = class {
    constructor(i) {
      this._cd = i;
    }
    get isTouched() {
      return !!this._cd?.control?.touched;
    }
    get isUntouched() {
      return !!this._cd?.control?.untouched;
    }
    get isPristine() {
      return !!this._cd?.control?.pristine;
    }
    get isDirty() {
      return !!this._cd?.control?.dirty;
    }
    get isValid() {
      return !!this._cd?.control?.valid;
    }
    get isInvalid() {
      return !!this._cd?.control?.invalid;
    }
    get isPending() {
      return !!this._cd?.control?.pending;
    }
    get isSubmitted() {
      return !!this._cd?.submitted;
    }
  },
  Cm = {
    "[class.ng-untouched]": "isUntouched",
    "[class.ng-touched]": "isTouched",
    "[class.ng-pristine]": "isPristine",
    "[class.ng-dirty]": "isDirty",
    "[class.ng-valid]": "isValid",
    "[class.ng-invalid]": "isInvalid",
    "[class.ng-pending]": "isPending",
  },
  nC = lt(ae({}, Cm), { "[class.ng-submitted]": "isSubmitted" }),
  _a = (() => {
    class t extends $s {
      constructor(e) {
        super(e);
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)(w(fn, 2));
        };
      }
      static {
        this.ɵdir = Le({
          type: t,
          selectors: [
            ["", "formControlName", ""],
            ["", "ngModel", ""],
            ["", "formControl", ""],
          ],
          hostVars: 14,
          hostBindings: function (n, a) {
            n & 2 &&
              Ee("ng-untouched", a.isUntouched)("ng-touched", a.isTouched)(
                "ng-pristine",
                a.isPristine
              )("ng-dirty", a.isDirty)("ng-valid", a.isValid)(
                "ng-invalid",
                a.isInvalid
              )("ng-pending", a.isPending);
          },
          features: [jt],
        });
      }
    }
    return t;
  })();
var un = "VALID",
  ua = "INVALID",
  Ni = "PENDING",
  gn = "DISABLED";
function wm(t) {
  return (xa(t) ? t.validators : t) || null;
}
function Tm(t) {
  return Array.isArray(t) ? cc(t) : t || null;
}
function Sm(t, i) {
  return (xa(i) ? i.asyncValidators : t) || null;
}
function km(t) {
  return Array.isArray(t) ? dc(t) : t || null;
}
function xa(t) {
  return t != null && !Array.isArray(t) && typeof t == "object";
}
var js = class {
  constructor(i, e) {
    (this._pendingDirty = !1),
      (this._hasOwnPendingAsyncValidator = !1),
      (this._pendingTouched = !1),
      (this._onCollectionChange = () => {}),
      (this._parent = null),
      (this.pristine = !0),
      (this.touched = !1),
      (this._onDisabledChange = []),
      this._assignValidators(i),
      this._assignAsyncValidators(e);
  }
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(i) {
    this._rawValidators = this._composedValidatorFn = i;
  }
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(i) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = i;
  }
  get parent() {
    return this._parent;
  }
  get valid() {
    return this.status === un;
  }
  get invalid() {
    return this.status === ua;
  }
  get pending() {
    return this.status == Ni;
  }
  get disabled() {
    return this.status === gn;
  }
  get enabled() {
    return this.status !== gn;
  }
  get dirty() {
    return !this.pristine;
  }
  get untouched() {
    return !this.touched;
  }
  get updateOn() {
    return this._updateOn
      ? this._updateOn
      : this.parent
      ? this.parent.updateOn
      : "change";
  }
  setValidators(i) {
    this._assignValidators(i);
  }
  setAsyncValidators(i) {
    this._assignAsyncValidators(i);
  }
  addValidators(i) {
    this.setValidators(Ul(i, this._rawValidators));
  }
  addAsyncValidators(i) {
    this.setAsyncValidators(Ul(i, this._rawAsyncValidators));
  }
  removeValidators(i) {
    this.setValidators(Ql(i, this._rawValidators));
  }
  removeAsyncValidators(i) {
    this.setAsyncValidators(Ql(i, this._rawAsyncValidators));
  }
  hasValidator(i) {
    return ga(this._rawValidators, i);
  }
  hasAsyncValidator(i) {
    return ga(this._rawAsyncValidators, i);
  }
  clearValidators() {
    this.validator = null;
  }
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  markAsTouched(i = {}) {
    (this.touched = !0),
      this._parent && !i.onlySelf && this._parent.markAsTouched(i);
  }
  markAllAsTouched() {
    this.markAsTouched({ onlySelf: !0 }),
      this._forEachChild((i) => i.markAllAsTouched());
  }
  markAsUntouched(i = {}) {
    (this.touched = !1),
      (this._pendingTouched = !1),
      this._forEachChild((e) => {
        e.markAsUntouched({ onlySelf: !0 });
      }),
      this._parent && !i.onlySelf && this._parent._updateTouched(i);
  }
  markAsDirty(i = {}) {
    (this.pristine = !1),
      this._parent && !i.onlySelf && this._parent.markAsDirty(i);
  }
  markAsPristine(i = {}) {
    (this.pristine = !0),
      (this._pendingDirty = !1),
      this._forEachChild((e) => {
        e.markAsPristine({ onlySelf: !0 });
      }),
      this._parent && !i.onlySelf && this._parent._updatePristine(i);
  }
  markAsPending(i = {}) {
    (this.status = Ni),
      i.emitEvent !== !1 && this.statusChanges.emit(this.status),
      this._parent && !i.onlySelf && this._parent.markAsPending(i);
  }
  disable(i = {}) {
    let e = this._parentMarkedDirty(i.onlySelf);
    (this.status = gn),
      (this.errors = null),
      this._forEachChild((n) => {
        n.disable(lt(ae({}, i), { onlySelf: !0 }));
      }),
      this._updateValue(),
      i.emitEvent !== !1 &&
        (this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
      this._updateAncestors(lt(ae({}, i), { skipPristineCheck: e })),
      this._onDisabledChange.forEach((n) => n(!0));
  }
  enable(i = {}) {
    let e = this._parentMarkedDirty(i.onlySelf);
    (this.status = un),
      this._forEachChild((n) => {
        n.enable(lt(ae({}, i), { onlySelf: !0 }));
      }),
      this.updateValueAndValidity({ onlySelf: !0, emitEvent: i.emitEvent }),
      this._updateAncestors(lt(ae({}, i), { skipPristineCheck: e })),
      this._onDisabledChange.forEach((n) => n(!1));
  }
  _updateAncestors(i) {
    this._parent &&
      !i.onlySelf &&
      (this._parent.updateValueAndValidity(i),
      i.skipPristineCheck || this._parent._updatePristine(),
      this._parent._updateTouched());
  }
  setParent(i) {
    this._parent = i;
  }
  getRawValue() {
    return this.value;
  }
  updateValueAndValidity(i = {}) {
    this._setInitialStatus(),
      this._updateValue(),
      this.enabled &&
        (this._cancelExistingSubscription(),
        (this.errors = this._runValidator()),
        (this.status = this._calculateStatus()),
        (this.status === un || this.status === Ni) &&
          this._runAsyncValidator(i.emitEvent)),
      i.emitEvent !== !1 &&
        (this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
      this._parent && !i.onlySelf && this._parent.updateValueAndValidity(i);
  }
  _updateTreeValidity(i = { emitEvent: !0 }) {
    this._forEachChild((e) => e._updateTreeValidity(i)),
      this.updateValueAndValidity({ onlySelf: !0, emitEvent: i.emitEvent });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? gn : un;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(i) {
    if (this.asyncValidator) {
      (this.status = Ni), (this._hasOwnPendingAsyncValidator = !0);
      let e = sc(this.asyncValidator(this));
      this._asyncValidationSubscription = e.subscribe((n) => {
        (this._hasOwnPendingAsyncValidator = !1),
          this.setErrors(n, { emitEvent: i });
      });
    }
  }
  _cancelExistingSubscription() {
    this._asyncValidationSubscription &&
      (this._asyncValidationSubscription.unsubscribe(),
      (this._hasOwnPendingAsyncValidator = !1));
  }
  setErrors(i, e = {}) {
    (this.errors = i), this._updateControlsErrors(e.emitEvent !== !1);
  }
  get(i) {
    let e = i;
    return e == null || (Array.isArray(e) || (e = e.split(".")), e.length === 0)
      ? null
      : e.reduce((n, a) => n && n._find(a), this);
  }
  getError(i, e) {
    let n = e ? this.get(e) : this;
    return n && n.errors ? n.errors[i] : null;
  }
  hasError(i, e) {
    return !!this.getError(i, e);
  }
  get root() {
    let i = this;
    for (; i._parent; ) i = i._parent;
    return i;
  }
  _updateControlsErrors(i) {
    (this.status = this._calculateStatus()),
      i && this.statusChanges.emit(this.status),
      this._parent && this._parent._updateControlsErrors(i);
  }
  _initObservables() {
    (this.valueChanges = new $()), (this.statusChanges = new $());
  }
  _calculateStatus() {
    return this._allControlsDisabled()
      ? gn
      : this.errors
      ? ua
      : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(Ni)
      ? Ni
      : this._anyControlsHaveStatus(ua)
      ? ua
      : un;
  }
  _anyControlsHaveStatus(i) {
    return this._anyControls((e) => e.status === i);
  }
  _anyControlsDirty() {
    return this._anyControls((i) => i.dirty);
  }
  _anyControlsTouched() {
    return this._anyControls((i) => i.touched);
  }
  _updatePristine(i = {}) {
    (this.pristine = !this._anyControlsDirty()),
      this._parent && !i.onlySelf && this._parent._updatePristine(i);
  }
  _updateTouched(i = {}) {
    (this.touched = this._anyControlsTouched()),
      this._parent && !i.onlySelf && this._parent._updateTouched(i);
  }
  _registerOnCollectionChange(i) {
    this._onCollectionChange = i;
  }
  _setUpdateStrategy(i) {
    xa(i) && i.updateOn != null && (this._updateOn = i.updateOn);
  }
  _parentMarkedDirty(i) {
    let e = this._parent && this._parent.dirty;
    return !i && !!e && !this._parent._anyControlsDirty();
  }
  _find(i) {
    return null;
  }
  _assignValidators(i) {
    (this._rawValidators = Array.isArray(i) ? i.slice() : i),
      (this._composedValidatorFn = Tm(this._rawValidators));
  }
  _assignAsyncValidators(i) {
    (this._rawAsyncValidators = Array.isArray(i) ? i.slice() : i),
      (this._composedAsyncValidatorFn = km(this._rawAsyncValidators));
  }
};
var Xs = new ri("CallSetDisabledState", {
    providedIn: "root",
    factory: () => va,
  }),
  va = "always";
function Am(t, i) {
  return [...i.path, t];
}
function Mm(t, i, e = va) {
  Dm(t, i),
    i.valueAccessor.writeValue(t.value),
    (t.disabled || e === "always") &&
      i.valueAccessor.setDisabledState?.(t.disabled),
    Em(t, i),
    Pm(t, i),
    Om(t, i),
    Lm(t, i);
}
function Kl(t, i) {
  t.forEach((e) => {
    e.registerOnValidatorChange && e.registerOnValidatorChange(i);
  });
}
function Lm(t, i) {
  if (i.valueAccessor.setDisabledState) {
    let e = (n) => {
      i.valueAccessor.setDisabledState(n);
    };
    t.registerOnDisabledChange(e),
      i._registerOnDestroy(() => {
        t._unregisterOnDisabledChange(e);
      });
  }
}
function Dm(t, i) {
  let e = ym(t);
  i.validator !== null
    ? t.setValidators(Yl(e, i.validator))
    : typeof e == "function" && t.setValidators([e]);
  let n = bm(t);
  i.asyncValidator !== null
    ? t.setAsyncValidators(Yl(n, i.asyncValidator))
    : typeof n == "function" && t.setAsyncValidators([n]);
  let a = () => t.updateValueAndValidity();
  Kl(i._rawValidators, a), Kl(i._rawAsyncValidators, a);
}
function Em(t, i) {
  i.valueAccessor.registerOnChange((e) => {
    (t._pendingValue = e),
      (t._pendingChange = !0),
      (t._pendingDirty = !0),
      t.updateOn === "change" && pc(t, i);
  });
}
function Om(t, i) {
  i.valueAccessor.registerOnTouched(() => {
    (t._pendingTouched = !0),
      t.updateOn === "blur" && t._pendingChange && pc(t, i),
      t.updateOn !== "submit" && t.markAsTouched();
  });
}
function pc(t, i) {
  t._pendingDirty && t.markAsDirty(),
    t.setValue(t._pendingValue, { emitModelToViewChange: !1 }),
    i.viewToModelUpdate(t._pendingValue),
    (t._pendingChange = !1);
}
function Pm(t, i) {
  let e = (n, a) => {
    i.valueAccessor.writeValue(n), a && i.viewToModelUpdate(n);
  };
  t.registerOnChange(e),
    i._registerOnDestroy(() => {
      t._unregisterOnChange(e);
    });
}
function Im(t, i) {
  if (!t.hasOwnProperty("model")) return !1;
  let e = t.model;
  return e.isFirstChange() ? !0 : !Object.is(i, e.currentValue);
}
function Fm(t) {
  return Object.getPrototypeOf(t.constructor) === dm;
}
function Vm(t, i) {
  if (!i) return null;
  Array.isArray(i);
  let e, n, a;
  return (
    i.forEach((s) => {
      s.constructor === Ri ? (e = s) : Fm(s) ? (n = s) : (a = s);
    }),
    a || n || e || null
  );
}
function Zl(t, i) {
  let e = t.indexOf(i);
  e > -1 && t.splice(e, 1);
}
function Jl(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    Object.keys(t).length === 2 &&
    "value" in t &&
    "disabled" in t
  );
}
var Bm = class extends js {
  constructor(i = null, e, n) {
    super(wm(e), Sm(n, e)),
      (this.defaultValue = null),
      (this._onChange = []),
      (this._pendingChange = !1),
      this._applyFormState(i),
      this._setUpdateStrategy(e),
      this._initObservables(),
      this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !!this.asyncValidator,
      }),
      xa(e) &&
        (e.nonNullable || e.initialValueIsDefault) &&
        (Jl(i) ? (this.defaultValue = i.value) : (this.defaultValue = i));
  }
  setValue(i, e = {}) {
    (this.value = this._pendingValue = i),
      this._onChange.length &&
        e.emitModelToViewChange !== !1 &&
        this._onChange.forEach((n) =>
          n(this.value, e.emitViewToModelChange !== !1)
        ),
      this.updateValueAndValidity(e);
  }
  patchValue(i, e = {}) {
    this.setValue(i, e);
  }
  reset(i = this.defaultValue, e = {}) {
    this._applyFormState(i),
      this.markAsPristine(e),
      this.markAsUntouched(e),
      this.setValue(this.value, e),
      (this._pendingChange = !1);
  }
  _updateValue() {}
  _anyControls(i) {
    return !1;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(i) {
    this._onChange.push(i);
  }
  _unregisterOnChange(i) {
    Zl(this._onChange, i);
  }
  registerOnDisabledChange(i) {
    this._onDisabledChange.push(i);
  }
  _unregisterOnDisabledChange(i) {
    Zl(this._onDisabledChange, i);
  }
  _forEachChild(i) {}
  _syncPendingControls() {
    return this.updateOn === "submit" &&
      (this._pendingDirty && this.markAsDirty(),
      this._pendingTouched && this.markAsTouched(),
      this._pendingChange)
      ? (this.setValue(this._pendingValue, {
          onlySelf: !0,
          emitModelToViewChange: !1,
        }),
        !0)
      : !1;
  }
  _applyFormState(i) {
    Jl(i)
      ? ((this.value = this._pendingValue = i.value),
        i.disabled
          ? this.disable({ onlySelf: !0, emitEvent: !1 })
          : this.enable({ onlySelf: !0, emitEvent: !1 }))
      : (this.value = this._pendingValue = i);
  }
};
var Nm = { provide: fn, useExisting: Zn(() => _n) },
  ec = Promise.resolve(),
  _n = (() => {
    class t extends fn {
      constructor(e, n, a, s, r, l) {
        super(),
          (this._changeDetectorRef = r),
          (this.callSetDisabledState = l),
          (this.control = new Bm()),
          (this._registered = !1),
          (this.name = ""),
          (this.update = new $()),
          (this._parent = e),
          this._setValidators(n),
          this._setAsyncValidators(a),
          (this.valueAccessor = Vm(this, s));
      }
      ngOnChanges(e) {
        if ((this._checkForErrors(), !this._registered || "name" in e)) {
          if (this._registered && (this._checkName(), this.formDirective)) {
            let n = e.name.previousValue;
            this.formDirective.removeControl({
              name: n,
              path: this._getPath(n),
            });
          }
          this._setUpControl();
        }
        "isDisabled" in e && this._updateDisabled(e),
          Im(e, this.viewModel) &&
            (this._updateValue(this.model), (this.viewModel = this.model));
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this);
      }
      get path() {
        return this._getPath(this.name);
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      viewToModelUpdate(e) {
        (this.viewModel = e), this.update.emit(e);
      }
      _setUpControl() {
        this._setUpdateStrategy(),
          this._isStandalone()
            ? this._setUpStandalone()
            : this.formDirective.addControl(this),
          (this._registered = !0);
      }
      _setUpdateStrategy() {
        this.options &&
          this.options.updateOn != null &&
          (this.control._updateOn = this.options.updateOn);
      }
      _isStandalone() {
        return !this._parent || !!(this.options && this.options.standalone);
      }
      _setUpStandalone() {
        Mm(this.control, this, this.callSetDisabledState),
          this.control.updateValueAndValidity({ emitEvent: !1 });
      }
      _checkForErrors() {
        this._isStandalone() || this._checkParentType(), this._checkName();
      }
      _checkParentType() {}
      _checkName() {
        this.options && this.options.name && (this.name = this.options.name),
          !this._isStandalone() && this.name;
      }
      _updateValue(e) {
        ec.then(() => {
          this.control.setValue(e, { emitViewToModelChange: !1 }),
            this._changeDetectorRef?.markForCheck();
        });
      }
      _updateDisabled(e) {
        let n = e.isDisabled.currentValue,
          a = n !== 0 && Xo(n);
        ec.then(() => {
          a && !this.control.disabled
            ? this.control.disable()
            : !a && this.control.disabled && this.control.enable(),
            this._changeDetectorRef?.markForCheck();
        });
      }
      _getPath(e) {
        return this._parent ? Am(e, this._parent) : [e];
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)(
            w(Ws, 9),
            w(nc, 10),
            w(gm, 10),
            w(ic, 10),
            w(vt, 8),
            w(Xs, 8)
          );
        };
      }
      static {
        this.ɵdir = Le({
          type: t,
          selectors: [
            ["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""],
          ],
          inputs: {
            name: "name",
            isDisabled: [Jn.None, "disabled", "isDisabled"],
            model: [Jn.None, "ngModel", "model"],
            options: [Jn.None, "ngModelOptions", "options"],
          },
          outputs: { update: "ngModelChange" },
          exportAs: ["ngModel"],
          features: [xt([Nm]), jt, ye],
        });
      }
    }
    return t;
  })();
var Rm = new ri("");
var Hm = (() => {
  class t {
    constructor() {
      this._validator = zs;
    }
    ngOnChanges(e) {
      if (this.inputName in e) {
        let n = this.normalizeInput(e[this.inputName].currentValue);
        (this._enabled = this.enabled(n)),
          (this._validator = this._enabled ? this.createValidator(n) : zs),
          this._onChange && this._onChange();
      }
    }
    validate(e) {
      return this._validator(e);
    }
    registerOnValidatorChange(e) {
      this._onChange = e;
    }
    enabled(e) {
      return e != null;
    }
    static {
      this.ɵfac = function (n) {
        return new (n || t)();
      };
    }
    static {
      this.ɵdir = Le({ type: t, features: [ye] });
    }
  }
  return t;
})();
var zm = { provide: nc, useExisting: Zn(() => qs), multi: !0 },
  qs = (() => {
    class t extends Hm {
      constructor() {
        super(...arguments),
          (this.inputName = "pattern"),
          (this.normalizeInput = (e) => e),
          (this.createValidator = (e) => fm(e));
      }
      static {
        this.ɵfac = (() => {
          let e;
          return function (a) {
            return (e || (e = on(t)))(a || t);
          };
        })();
      }
      static {
        this.ɵdir = Le({
          type: t,
          selectors: [
            ["", "pattern", "", "formControlName", ""],
            ["", "pattern", "", "formControl", ""],
            ["", "pattern", "", "ngModel", ""],
          ],
          hostVars: 1,
          hostBindings: function (n, a) {
            n & 2 && te("pattern", a._enabled ? a.pattern : null);
          },
          inputs: { pattern: "pattern" },
          features: [xt([zm]), jt],
        });
      }
    }
    return t;
  })();
var hc = (() => {
  class t {
    static {
      this.ɵfac = function (n) {
        return new (n || t)();
      };
    }
    static {
      this.ɵmod = ee({ type: t });
    }
    static {
      this.ɵinj = J({});
    }
  }
  return t;
})();
var mc = (() => {
    class t {
      static withConfig(e) {
        return {
          ngModule: t,
          providers: [{ provide: Xs, useValue: e.callSetDisabledState ?? va }],
        };
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵmod = ee({ type: t });
      }
      static {
        this.ɵinj = J({ imports: [hc] });
      }
    }
    return t;
  })(),
  uc = (() => {
    class t {
      static withConfig(e) {
        return {
          ngModule: t,
          providers: [
            {
              provide: Rm,
              useValue: e.warnOnNgModelWithFormControl ?? "always",
            },
            { provide: Xs, useValue: e.callSetDisabledState ?? va },
          ],
        };
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵmod = ee({ type: t });
      }
      static {
        this.ɵinj = J({ imports: [hc] });
      }
    }
    return t;
  })();
function fc(t) {
  return new Z(3e3, !1);
}
function Gm() {
  return new Z(3100, !1);
}
function Wm() {
  return new Z(3101, !1);
}
function $m(t) {
  return new Z(3001, !1);
}
function jm(t) {
  return new Z(3003, !1);
}
function Xm(t) {
  return new Z(3004, !1);
}
function qm(t, i) {
  return new Z(3005, !1);
}
function Ym() {
  return new Z(3006, !1);
}
function Um() {
  return new Z(3007, !1);
}
function Qm(t, i) {
  return new Z(3008, !1);
}
function Km(t) {
  return new Z(3002, !1);
}
function Zm(t, i, e, n, a) {
  return new Z(3010, !1);
}
function Jm() {
  return new Z(3011, !1);
}
function eu() {
  return new Z(3012, !1);
}
function tu() {
  return new Z(3200, !1);
}
function iu() {
  return new Z(3202, !1);
}
function nu() {
  return new Z(3013, !1);
}
function au(t) {
  return new Z(3014, !1);
}
function su(t) {
  return new Z(3015, !1);
}
function ru(t) {
  return new Z(3016, !1);
}
function ou(t, i) {
  return new Z(3404, !1);
}
function lu(t) {
  return new Z(3502, !1);
}
function cu(t) {
  return new Z(3503, !1);
}
function du() {
  return new Z(3300, !1);
}
function pu(t) {
  return new Z(3504, !1);
}
function hu(t) {
  return new Z(3301, !1);
}
function mu(t, i) {
  return new Z(3302, !1);
}
function uu(t) {
  return new Z(3303, !1);
}
function gu(t, i) {
  return new Z(3400, !1);
}
function fu(t) {
  return new Z(3401, !1);
}
function _u(t) {
  return new Z(3402, !1);
}
function xu(t, i) {
  return new Z(3505, !1);
}
function Ut(t) {
  switch (t.length) {
    case 0:
      return new Pi();
    case 1:
      return t[0];
    default:
      return new Fs(t);
  }
}
function Dc(t, i, e = new Map(), n = new Map()) {
  let a = [],
    s = [],
    r = -1,
    l = null;
  if (
    (i.forEach((p) => {
      let h = p.get("offset"),
        x = h == r,
        v = (x && l) || new Map();
      p.forEach((b, C) => {
        let k = C,
          D = b;
        if (C !== "offset")
          switch (((k = t.normalizePropertyName(k, a)), D)) {
            case aa:
              D = e.get(C);
              break;
            case Ct:
              D = n.get(C);
              break;
            default:
              D = t.normalizeStyleValue(C, k, D, a);
              break;
          }
        v.set(k, D);
      }),
        x || s.push(v),
        (l = v),
        (r = h);
    }),
    a.length)
  )
    throw lu(a);
  return s;
}
function fr(t, i, e, n) {
  switch (i) {
    case "start":
      t.onStart(() => n(e && Ys(e, "start", t)));
      break;
    case "done":
      t.onDone(() => n(e && Ys(e, "done", t)));
      break;
    case "destroy":
      t.onDestroy(() => n(e && Ys(e, "destroy", t)));
      break;
  }
}
function Ys(t, i, e) {
  let n = e.totalTime,
    a = !!e.disabled,
    s = _r(
      t.element,
      t.triggerName,
      t.fromState,
      t.toState,
      i || t.phaseName,
      n ?? t.totalTime,
      a
    ),
    r = t._data;
  return r != null && (s._data = r), s;
}
function _r(t, i, e, n, a = "", s = 0, r) {
  return {
    element: t,
    triggerName: i,
    fromState: e,
    toState: n,
    phaseName: a,
    totalTime: s,
    disabled: !!r,
  };
}
function Je(t, i, e) {
  let n = t.get(i);
  return n || t.set(i, (n = e)), n;
}
function _c(t) {
  let i = t.indexOf(":"),
    e = t.substring(1, i),
    n = t.slice(i + 1);
  return [e, n];
}
var vu = typeof document > "u" ? null : document.documentElement;
function xr(t) {
  let i = t.parentNode || t.host || null;
  return i === vu ? null : i;
}
function yu(t) {
  return t.substring(1, 6) == "ebkit";
}
var hi = null,
  xc = !1;
function bu(t) {
  hi ||
    ((hi = Cu() || {}), (xc = hi.style ? "WebkitAppearance" in hi.style : !1));
  let i = !0;
  return (
    hi.style &&
      !yu(t) &&
      ((i = t in hi.style),
      !i &&
        xc &&
        (i = "Webkit" + t.charAt(0).toUpperCase() + t.slice(1) in hi.style)),
    i
  );
}
function Cu() {
  return typeof document < "u" ? document.body : null;
}
function Ec(t, i) {
  for (; i; ) {
    if (i === t) return !0;
    i = xr(i);
  }
  return !1;
}
function Oc(t, i, e) {
  if (e) return Array.from(t.querySelectorAll(i));
  let n = t.querySelector(i);
  return n ? [n] : [];
}
var vr = (() => {
    class t {
      validateStyleProperty(e) {
        return bu(e);
      }
      matchesElement(e, n) {
        return !1;
      }
      containsElement(e, n) {
        return Ec(e, n);
      }
      getParentElement(e) {
        return xr(e);
      }
      query(e, n, a) {
        return Oc(e, n, a);
      }
      computeStyle(e, n, a) {
        return a || "";
      }
      animate(e, n, a, s, r, l = [], p) {
        return new Pi(a, s);
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵprov = Me({ token: t, factory: t.ɵfac });
      }
    }
    return t;
  })(),
  gi = class {
    static {
      this.NOOP = new vr();
    }
  },
  fi = class {};
var wu = 1e3,
  Pc = "{{",
  Tu = "}}",
  Ic = "ng-enter",
  er = "ng-leave",
  ya = "ng-trigger",
  Sa = ".ng-trigger",
  vc = "ng-animating",
  tr = ".ng-animating";
function Nt(t) {
  if (typeof t == "number") return t;
  let i = t.match(/^(-?[\.\d]+)(m?s)/);
  return !i || i.length < 2 ? 0 : ir(parseFloat(i[1]), i[2]);
}
function ir(t, i) {
  switch (i) {
    case "s":
      return t * wu;
    default:
      return t;
  }
}
function ka(t, i, e) {
  return t.hasOwnProperty("duration") ? t : Su(t, i, e);
}
function Su(t, i, e) {
  let n =
      /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,
    a,
    s = 0,
    r = "";
  if (typeof t == "string") {
    let l = t.match(n);
    if (l === null) return i.push(fc(t)), { duration: 0, delay: 0, easing: "" };
    a = ir(parseFloat(l[1]), l[2]);
    let p = l[3];
    p != null && (s = ir(parseFloat(p), l[4]));
    let h = l[5];
    h && (r = h);
  } else a = t;
  if (!e) {
    let l = !1,
      p = i.length;
    a < 0 && (i.push(Gm()), (l = !0)),
      s < 0 && (i.push(Wm()), (l = !0)),
      l && i.splice(p, 0, fc(t));
  }
  return { duration: a, delay: s, easing: r };
}
function ku(t) {
  return t.length
    ? t[0] instanceof Map
      ? t
      : t.map((i) => new Map(Object.entries(i)))
    : [];
}
function Mt(t, i, e) {
  i.forEach((n, a) => {
    let s = yr(a);
    e && !e.has(a) && e.set(a, t.style[s]), (t.style[s] = n);
  });
}
function ui(t, i) {
  i.forEach((e, n) => {
    let a = yr(n);
    t.style[a] = "";
  });
}
function xn(t) {
  return Array.isArray(t) ? (t.length == 1 ? t[0] : al(t)) : t;
}
function Au(t, i, e) {
  let n = i.params || {},
    a = Fc(t);
  a.length &&
    a.forEach((s) => {
      n.hasOwnProperty(s) || e.push($m(s));
    });
}
var nr = new RegExp(`${Pc}\\s*(.+?)\\s*${Tu}`, "g");
function Fc(t) {
  let i = [];
  if (typeof t == "string") {
    let e;
    for (; (e = nr.exec(t)); ) i.push(e[1]);
    nr.lastIndex = 0;
  }
  return i;
}
function yn(t, i, e) {
  let n = `${t}`,
    a = n.replace(nr, (s, r) => {
      let l = i[r];
      return l == null && (e.push(jm(r)), (l = "")), l.toString();
    });
  return a == n ? t : a;
}
var Mu = /-+([a-z0-9])/g;
function yr(t) {
  return t.replace(Mu, (...i) => i[1].toUpperCase());
}
function Lu(t, i) {
  return t === 0 || i === 0;
}
function Du(t, i, e) {
  if (e.size && i.length) {
    let n = i[0],
      a = [];
    if (
      (e.forEach((s, r) => {
        n.has(r) || a.push(r), n.set(r, s);
      }),
      a.length)
    )
      for (let s = 1; s < i.length; s++) {
        let r = i[s];
        a.forEach((l) => r.set(l, br(t, l)));
      }
  }
  return i;
}
function Ze(t, i, e) {
  switch (i.type) {
    case K.Trigger:
      return t.visitTrigger(i, e);
    case K.State:
      return t.visitState(i, e);
    case K.Transition:
      return t.visitTransition(i, e);
    case K.Sequence:
      return t.visitSequence(i, e);
    case K.Group:
      return t.visitGroup(i, e);
    case K.Animate:
      return t.visitAnimate(i, e);
    case K.Keyframes:
      return t.visitKeyframes(i, e);
    case K.Style:
      return t.visitStyle(i, e);
    case K.Reference:
      return t.visitReference(i, e);
    case K.AnimateChild:
      return t.visitAnimateChild(i, e);
    case K.AnimateRef:
      return t.visitAnimateRef(i, e);
    case K.Query:
      return t.visitQuery(i, e);
    case K.Stagger:
      return t.visitStagger(i, e);
    default:
      throw Xm(i.type);
  }
}
function br(t, i) {
  return window.getComputedStyle(t)[i];
}
var Eu = new Set([
    "width",
    "height",
    "minWidth",
    "minHeight",
    "maxWidth",
    "maxHeight",
    "left",
    "top",
    "bottom",
    "right",
    "fontSize",
    "outlineWidth",
    "outlineOffset",
    "paddingTop",
    "paddingLeft",
    "paddingBottom",
    "paddingRight",
    "marginTop",
    "marginLeft",
    "marginBottom",
    "marginRight",
    "borderRadius",
    "borderWidth",
    "borderTopWidth",
    "borderLeftWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "textIndent",
    "perspective",
  ]),
  Aa = class extends fi {
    normalizePropertyName(i, e) {
      return yr(i);
    }
    normalizeStyleValue(i, e, n, a) {
      let s = "",
        r = n.toString().trim();
      if (Eu.has(e) && n !== 0 && n !== "0")
        if (typeof n == "number") s = "px";
        else {
          let l = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
          l && l[1].length == 0 && a.push(qm(i, n));
        }
      return r + s;
    }
  };
var Ma = "*";
function Ou(t, i) {
  let e = [];
  return (
    typeof t == "string"
      ? t.split(/\s*,\s*/).forEach((n) => Pu(n, e, i))
      : e.push(t),
    e
  );
}
function Pu(t, i, e) {
  if (t[0] == ":") {
    let p = Iu(t, e);
    if (typeof p == "function") {
      i.push(p);
      return;
    }
    t = p;
  }
  let n = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (n == null || n.length < 4) return e.push(su(t)), i;
  let a = n[1],
    s = n[2],
    r = n[3];
  i.push(yc(a, r));
  let l = a == Ma && r == Ma;
  s[0] == "<" && !l && i.push(yc(r, a));
}
function Iu(t, i) {
  switch (t) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (e, n) => parseFloat(n) > parseFloat(e);
    case ":decrement":
      return (e, n) => parseFloat(n) < parseFloat(e);
    default:
      return i.push(ru(t)), "* => *";
  }
}
var ba = new Set(["true", "1"]),
  Ca = new Set(["false", "0"]);
function yc(t, i) {
  let e = ba.has(t) || Ca.has(t),
    n = ba.has(i) || Ca.has(i);
  return (a, s) => {
    let r = t == Ma || t == a,
      l = i == Ma || i == s;
    return (
      !r && e && typeof a == "boolean" && (r = a ? ba.has(t) : Ca.has(t)),
      !l && n && typeof s == "boolean" && (l = s ? ba.has(i) : Ca.has(i)),
      r && l
    );
  };
}
var Vc = ":self",
  Fu = new RegExp(`s*${Vc}s*,?`, "g");
function Bc(t, i, e, n) {
  return new ar(t).build(i, e, n);
}
var bc = "",
  ar = class {
    constructor(i) {
      this._driver = i;
    }
    build(i, e, n) {
      let a = new sr(e);
      return this._resetContextStyleTimingState(a), Ze(this, xn(i), a);
    }
    _resetContextStyleTimingState(i) {
      (i.currentQuerySelector = bc),
        (i.collectedStyles = new Map()),
        i.collectedStyles.set(bc, new Map()),
        (i.currentTime = 0);
    }
    visitTrigger(i, e) {
      let n = (e.queryCount = 0),
        a = (e.depCount = 0),
        s = [],
        r = [];
      return (
        i.name.charAt(0) == "@" && e.errors.push(Ym()),
        i.definitions.forEach((l) => {
          if ((this._resetContextStyleTimingState(e), l.type == K.State)) {
            let p = l,
              h = p.name;
            h
              .toString()
              .split(/\s*,\s*/)
              .forEach((x) => {
                (p.name = x), s.push(this.visitState(p, e));
              }),
              (p.name = h);
          } else if (l.type == K.Transition) {
            let p = this.visitTransition(l, e);
            (n += p.queryCount), (a += p.depCount), r.push(p);
          } else e.errors.push(Um());
        }),
        {
          type: K.Trigger,
          name: i.name,
          states: s,
          transitions: r,
          queryCount: n,
          depCount: a,
          options: null,
        }
      );
    }
    visitState(i, e) {
      let n = this.visitStyle(i.styles, e),
        a = (i.options && i.options.params) || null;
      if (n.containsDynamicStyles) {
        let s = new Set(),
          r = a || {};
        n.styles.forEach((l) => {
          l instanceof Map &&
            l.forEach((p) => {
              Fc(p).forEach((h) => {
                r.hasOwnProperty(h) || s.add(h);
              });
            });
        }),
          s.size && e.errors.push(Qm(i.name, [...s.values()]));
      }
      return {
        type: K.State,
        name: i.name,
        style: n,
        options: a ? { params: a } : null,
      };
    }
    visitTransition(i, e) {
      (e.queryCount = 0), (e.depCount = 0);
      let n = Ze(this, xn(i.animation), e),
        a = Ou(i.expr, e.errors);
      return {
        type: K.Transition,
        matchers: a,
        animation: n,
        queryCount: e.queryCount,
        depCount: e.depCount,
        options: mi(i.options),
      };
    }
    visitSequence(i, e) {
      return {
        type: K.Sequence,
        steps: i.steps.map((n) => Ze(this, n, e)),
        options: mi(i.options),
      };
    }
    visitGroup(i, e) {
      let n = e.currentTime,
        a = 0,
        s = i.steps.map((r) => {
          e.currentTime = n;
          let l = Ze(this, r, e);
          return (a = Math.max(a, e.currentTime)), l;
        });
      return (
        (e.currentTime = a), { type: K.Group, steps: s, options: mi(i.options) }
      );
    }
    visitAnimate(i, e) {
      let n = Ru(i.timings, e.errors);
      e.currentAnimateTimings = n;
      let a,
        s = i.styles ? i.styles : st({});
      if (s.type == K.Keyframes) a = this.visitKeyframes(s, e);
      else {
        let r = i.styles,
          l = !1;
        if (!r) {
          l = !0;
          let h = {};
          n.easing && (h.easing = n.easing), (r = st(h));
        }
        e.currentTime += n.duration + n.delay;
        let p = this.visitStyle(r, e);
        (p.isEmptyStep = l), (a = p);
      }
      return (
        (e.currentAnimateTimings = null),
        { type: K.Animate, timings: n, style: a, options: null }
      );
    }
    visitStyle(i, e) {
      let n = this._makeStyleAst(i, e);
      return this._validateStyleAst(n, e), n;
    }
    _makeStyleAst(i, e) {
      let n = [],
        a = Array.isArray(i.styles) ? i.styles : [i.styles];
      for (let l of a)
        typeof l == "string"
          ? l === Ct
            ? n.push(l)
            : e.errors.push(Km(l))
          : n.push(new Map(Object.entries(l)));
      let s = !1,
        r = null;
      return (
        n.forEach((l) => {
          if (
            l instanceof Map &&
            (l.has("easing") && ((r = l.get("easing")), l.delete("easing")), !s)
          ) {
            for (let p of l.values())
              if (p.toString().indexOf(Pc) >= 0) {
                s = !0;
                break;
              }
          }
        }),
        {
          type: K.Style,
          styles: n,
          easing: r,
          offset: i.offset,
          containsDynamicStyles: s,
          options: null,
        }
      );
    }
    _validateStyleAst(i, e) {
      let n = e.currentAnimateTimings,
        a = e.currentTime,
        s = e.currentTime;
      n && s > 0 && (s -= n.duration + n.delay),
        i.styles.forEach((r) => {
          typeof r != "string" &&
            r.forEach((l, p) => {
              let h = e.collectedStyles.get(e.currentQuerySelector),
                x = h.get(p),
                v = !0;
              x &&
                (s != a &&
                  s >= x.startTime &&
                  a <= x.endTime &&
                  (e.errors.push(Zm(p, x.startTime, x.endTime, s, a)),
                  (v = !1)),
                (s = x.startTime)),
                v && h.set(p, { startTime: s, endTime: a }),
                e.options && Au(l, e.options, e.errors);
            });
        });
    }
    visitKeyframes(i, e) {
      let n = { type: K.Keyframes, styles: [], options: null };
      if (!e.currentAnimateTimings) return e.errors.push(Jm()), n;
      let a = 1,
        s = 0,
        r = [],
        l = !1,
        p = !1,
        h = 0,
        x = i.steps.map((ne) => {
          let re = this._makeStyleAst(ne, e),
            oe = re.offset != null ? re.offset : Nu(re.styles),
            he = 0;
          return (
            oe != null && (s++, (he = re.offset = oe)),
            (p = p || he < 0 || he > 1),
            (l = l || he < h),
            (h = he),
            r.push(he),
            re
          );
        });
      p && e.errors.push(eu()), l && e.errors.push(tu());
      let v = i.steps.length,
        b = 0;
      s > 0 && s < v ? e.errors.push(iu()) : s == 0 && (b = a / (v - 1));
      let C = v - 1,
        k = e.currentTime,
        D = e.currentAnimateTimings,
        B = D.duration;
      return (
        x.forEach((ne, re) => {
          let oe = b > 0 ? (re == C ? 1 : b * re) : r[re],
            he = oe * B;
          (e.currentTime = k + D.delay + he),
            (D.duration = he),
            this._validateStyleAst(ne, e),
            (ne.offset = oe),
            n.styles.push(ne);
        }),
        n
      );
    }
    visitReference(i, e) {
      return {
        type: K.Reference,
        animation: Ze(this, xn(i.animation), e),
        options: mi(i.options),
      };
    }
    visitAnimateChild(i, e) {
      return e.depCount++, { type: K.AnimateChild, options: mi(i.options) };
    }
    visitAnimateRef(i, e) {
      return {
        type: K.AnimateRef,
        animation: this.visitReference(i.animation, e),
        options: mi(i.options),
      };
    }
    visitQuery(i, e) {
      let n = e.currentQuerySelector,
        a = i.options || {};
      e.queryCount++, (e.currentQuery = i);
      let [s, r] = Vu(i.selector);
      (e.currentQuerySelector = n.length ? n + " " + s : s),
        Je(e.collectedStyles, e.currentQuerySelector, new Map());
      let l = Ze(this, xn(i.animation), e);
      return (
        (e.currentQuery = null),
        (e.currentQuerySelector = n),
        {
          type: K.Query,
          selector: s,
          limit: a.limit || 0,
          optional: !!a.optional,
          includeSelf: r,
          animation: l,
          originalSelector: i.selector,
          options: mi(i.options),
        }
      );
    }
    visitStagger(i, e) {
      e.currentQuery || e.errors.push(nu());
      let n =
        i.timings === "full"
          ? { duration: 0, delay: 0, easing: "full" }
          : ka(i.timings, e.errors, !0);
      return {
        type: K.Stagger,
        animation: Ze(this, xn(i.animation), e),
        timings: n,
        options: null,
      };
    }
  };
function Vu(t) {
  let i = !!t.split(/\s*,\s*/).find((e) => e == Vc);
  return (
    i && (t = t.replace(Fu, "")),
    (t = t
      .replace(/@\*/g, Sa)
      .replace(/@\w+/g, (e) => Sa + "-" + e.slice(1))
      .replace(/:animating/g, tr)),
    [t, i]
  );
}
function Bu(t) {
  return t ? ae({}, t) : null;
}
var sr = class {
  constructor(i) {
    (this.errors = i),
      (this.queryCount = 0),
      (this.depCount = 0),
      (this.currentTransition = null),
      (this.currentQuery = null),
      (this.currentQuerySelector = null),
      (this.currentAnimateTimings = null),
      (this.currentTime = 0),
      (this.collectedStyles = new Map()),
      (this.options = null),
      (this.unsupportedCSSPropertiesFound = new Set());
  }
};
function Nu(t) {
  if (typeof t == "string") return null;
  let i = null;
  if (Array.isArray(t))
    t.forEach((e) => {
      if (e instanceof Map && e.has("offset")) {
        let n = e;
        (i = parseFloat(n.get("offset"))), n.delete("offset");
      }
    });
  else if (t instanceof Map && t.has("offset")) {
    let e = t;
    (i = parseFloat(e.get("offset"))), e.delete("offset");
  }
  return i;
}
function Ru(t, i) {
  if (t.hasOwnProperty("duration")) return t;
  if (typeof t == "number") {
    let s = ka(t, i).duration;
    return Us(s, 0, "");
  }
  let e = t;
  if (e.split(/\s+/).some((s) => s.charAt(0) == "{" && s.charAt(1) == "{")) {
    let s = Us(0, 0, "");
    return (s.dynamic = !0), (s.strValue = e), s;
  }
  let a = ka(e, i);
  return Us(a.duration, a.delay, a.easing);
}
function mi(t) {
  return (
    t ? ((t = ae({}, t)), t.params && (t.params = Bu(t.params))) : (t = {}), t
  );
}
function Us(t, i, e) {
  return { duration: t, delay: i, easing: e };
}
function Cr(t, i, e, n, a, s, r = null, l = !1) {
  return {
    type: 1,
    element: t,
    keyframes: i,
    preStyleProps: e,
    postStyleProps: n,
    duration: a,
    delay: s,
    totalTime: a + s,
    easing: r,
    subTimeline: l,
  };
}
var bn = class {
    constructor() {
      this._map = new Map();
    }
    get(i) {
      return this._map.get(i) || [];
    }
    append(i, e) {
      let n = this._map.get(i);
      n || this._map.set(i, (n = [])), n.push(...e);
    }
    has(i) {
      return this._map.has(i);
    }
    clear() {
      this._map.clear();
    }
  },
  Hu = 1,
  zu = ":enter",
  Gu = new RegExp(zu, "g"),
  Wu = ":leave",
  $u = new RegExp(Wu, "g");
function Nc(t, i, e, n, a, s = new Map(), r = new Map(), l, p, h = []) {
  return new rr().buildKeyframes(t, i, e, n, a, s, r, l, p, h);
}
var rr = class {
    buildKeyframes(i, e, n, a, s, r, l, p, h, x = []) {
      h = h || new bn();
      let v = new or(i, e, h, a, s, x, []);
      v.options = p;
      let b = p.delay ? Nt(p.delay) : 0;
      v.currentTimeline.delayNextStep(b),
        v.currentTimeline.setStyles([r], null, v.errors, p),
        Ze(this, n, v);
      let C = v.timelines.filter((k) => k.containsAnimation());
      if (C.length && l.size) {
        let k;
        for (let D = C.length - 1; D >= 0; D--) {
          let B = C[D];
          if (B.element === e) {
            k = B;
            break;
          }
        }
        k &&
          !k.allowOnlyTimelineStyles() &&
          k.setStyles([l], null, v.errors, p);
      }
      return C.length
        ? C.map((k) => k.buildKeyframes())
        : [Cr(e, [], [], [], 0, b, "", !1)];
    }
    visitTrigger(i, e) {}
    visitState(i, e) {}
    visitTransition(i, e) {}
    visitAnimateChild(i, e) {
      let n = e.subInstructions.get(e.element);
      if (n) {
        let a = e.createSubContext(i.options),
          s = e.currentTimeline.currentTime,
          r = this._visitSubInstructions(n, a, a.options);
        s != r && e.transformIntoNewTimeline(r);
      }
      e.previousNode = i;
    }
    visitAnimateRef(i, e) {
      let n = e.createSubContext(i.options);
      n.transformIntoNewTimeline(),
        this._applyAnimationRefDelays([i.options, i.animation.options], e, n),
        this.visitReference(i.animation, n),
        e.transformIntoNewTimeline(n.currentTimeline.currentTime),
        (e.previousNode = i);
    }
    _applyAnimationRefDelays(i, e, n) {
      for (let a of i) {
        let s = a?.delay;
        if (s) {
          let r =
            typeof s == "number" ? s : Nt(yn(s, a?.params ?? {}, e.errors));
          n.delayNextStep(r);
        }
      }
    }
    _visitSubInstructions(i, e, n) {
      let s = e.currentTimeline.currentTime,
        r = n.duration != null ? Nt(n.duration) : null,
        l = n.delay != null ? Nt(n.delay) : null;
      return (
        r !== 0 &&
          i.forEach((p) => {
            let h = e.appendInstructionToTimeline(p, r, l);
            s = Math.max(s, h.duration + h.delay);
          }),
        s
      );
    }
    visitReference(i, e) {
      e.updateOptions(i.options, !0),
        Ze(this, i.animation, e),
        (e.previousNode = i);
    }
    visitSequence(i, e) {
      let n = e.subContextCount,
        a = e,
        s = i.options;
      if (
        s &&
        (s.params || s.delay) &&
        ((a = e.createSubContext(s)),
        a.transformIntoNewTimeline(),
        s.delay != null)
      ) {
        a.previousNode.type == K.Style &&
          (a.currentTimeline.snapshotCurrentStyles(), (a.previousNode = La));
        let r = Nt(s.delay);
        a.delayNextStep(r);
      }
      i.steps.length &&
        (i.steps.forEach((r) => Ze(this, r, a)),
        a.currentTimeline.applyStylesToKeyframe(),
        a.subContextCount > n && a.transformIntoNewTimeline()),
        (e.previousNode = i);
    }
    visitGroup(i, e) {
      let n = [],
        a = e.currentTimeline.currentTime,
        s = i.options && i.options.delay ? Nt(i.options.delay) : 0;
      i.steps.forEach((r) => {
        let l = e.createSubContext(i.options);
        s && l.delayNextStep(s),
          Ze(this, r, l),
          (a = Math.max(a, l.currentTimeline.currentTime)),
          n.push(l.currentTimeline);
      }),
        n.forEach((r) => e.currentTimeline.mergeTimelineCollectedStyles(r)),
        e.transformIntoNewTimeline(a),
        (e.previousNode = i);
    }
    _visitTiming(i, e) {
      if (i.dynamic) {
        let n = i.strValue,
          a = e.params ? yn(n, e.params, e.errors) : n;
        return ka(a, e.errors);
      } else return { duration: i.duration, delay: i.delay, easing: i.easing };
    }
    visitAnimate(i, e) {
      let n = (e.currentAnimateTimings = this._visitTiming(i.timings, e)),
        a = e.currentTimeline;
      n.delay && (e.incrementTime(n.delay), a.snapshotCurrentStyles());
      let s = i.style;
      s.type == K.Keyframes
        ? this.visitKeyframes(s, e)
        : (e.incrementTime(n.duration),
          this.visitStyle(s, e),
          a.applyStylesToKeyframe()),
        (e.currentAnimateTimings = null),
        (e.previousNode = i);
    }
    visitStyle(i, e) {
      let n = e.currentTimeline,
        a = e.currentAnimateTimings;
      !a && n.hasCurrentStyleProperties() && n.forwardFrame();
      let s = (a && a.easing) || i.easing;
      i.isEmptyStep
        ? n.applyEmptyStep(s)
        : n.setStyles(i.styles, s, e.errors, e.options),
        (e.previousNode = i);
    }
    visitKeyframes(i, e) {
      let n = e.currentAnimateTimings,
        a = e.currentTimeline.duration,
        s = n.duration,
        l = e.createSubContext().currentTimeline;
      (l.easing = n.easing),
        i.styles.forEach((p) => {
          let h = p.offset || 0;
          l.forwardTime(h * s),
            l.setStyles(p.styles, p.easing, e.errors, e.options),
            l.applyStylesToKeyframe();
        }),
        e.currentTimeline.mergeTimelineCollectedStyles(l),
        e.transformIntoNewTimeline(a + s),
        (e.previousNode = i);
    }
    visitQuery(i, e) {
      let n = e.currentTimeline.currentTime,
        a = i.options || {},
        s = a.delay ? Nt(a.delay) : 0;
      s &&
        (e.previousNode.type === K.Style ||
          (n == 0 && e.currentTimeline.hasCurrentStyleProperties())) &&
        (e.currentTimeline.snapshotCurrentStyles(), (e.previousNode = La));
      let r = n,
        l = e.invokeQuery(
          i.selector,
          i.originalSelector,
          i.limit,
          i.includeSelf,
          !!a.optional,
          e.errors
        );
      e.currentQueryTotal = l.length;
      let p = null;
      l.forEach((h, x) => {
        e.currentQueryIndex = x;
        let v = e.createSubContext(i.options, h);
        s && v.delayNextStep(s),
          h === e.element && (p = v.currentTimeline),
          Ze(this, i.animation, v),
          v.currentTimeline.applyStylesToKeyframe();
        let b = v.currentTimeline.currentTime;
        r = Math.max(r, b);
      }),
        (e.currentQueryIndex = 0),
        (e.currentQueryTotal = 0),
        e.transformIntoNewTimeline(r),
        p &&
          (e.currentTimeline.mergeTimelineCollectedStyles(p),
          e.currentTimeline.snapshotCurrentStyles()),
        (e.previousNode = i);
    }
    visitStagger(i, e) {
      let n = e.parentContext,
        a = e.currentTimeline,
        s = i.timings,
        r = Math.abs(s.duration),
        l = r * (e.currentQueryTotal - 1),
        p = r * e.currentQueryIndex;
      switch (s.duration < 0 ? "reverse" : s.easing) {
        case "reverse":
          p = l - p;
          break;
        case "full":
          p = n.currentStaggerTime;
          break;
      }
      let x = e.currentTimeline;
      p && x.delayNextStep(p);
      let v = x.currentTime;
      Ze(this, i.animation, e),
        (e.previousNode = i),
        (n.currentStaggerTime =
          a.currentTime - v + (a.startTime - n.currentTimeline.startTime));
    }
  },
  La = {},
  or = class t {
    constructor(i, e, n, a, s, r, l, p) {
      (this._driver = i),
        (this.element = e),
        (this.subInstructions = n),
        (this._enterClassName = a),
        (this._leaveClassName = s),
        (this.errors = r),
        (this.timelines = l),
        (this.parentContext = null),
        (this.currentAnimateTimings = null),
        (this.previousNode = La),
        (this.subContextCount = 0),
        (this.options = {}),
        (this.currentQueryIndex = 0),
        (this.currentQueryTotal = 0),
        (this.currentStaggerTime = 0),
        (this.currentTimeline = p || new Da(this._driver, e, 0)),
        l.push(this.currentTimeline);
    }
    get params() {
      return this.options.params;
    }
    updateOptions(i, e) {
      if (!i) return;
      let n = i,
        a = this.options;
      n.duration != null && (a.duration = Nt(n.duration)),
        n.delay != null && (a.delay = Nt(n.delay));
      let s = n.params;
      if (s) {
        let r = a.params;
        r || (r = this.options.params = {}),
          Object.keys(s).forEach((l) => {
            (!e || !r.hasOwnProperty(l)) && (r[l] = yn(s[l], r, this.errors));
          });
      }
    }
    _copyOptions() {
      let i = {};
      if (this.options) {
        let e = this.options.params;
        if (e) {
          let n = (i.params = {});
          Object.keys(e).forEach((a) => {
            n[a] = e[a];
          });
        }
      }
      return i;
    }
    createSubContext(i = null, e, n) {
      let a = e || this.element,
        s = new t(
          this._driver,
          a,
          this.subInstructions,
          this._enterClassName,
          this._leaveClassName,
          this.errors,
          this.timelines,
          this.currentTimeline.fork(a, n || 0)
        );
      return (
        (s.previousNode = this.previousNode),
        (s.currentAnimateTimings = this.currentAnimateTimings),
        (s.options = this._copyOptions()),
        s.updateOptions(i),
        (s.currentQueryIndex = this.currentQueryIndex),
        (s.currentQueryTotal = this.currentQueryTotal),
        (s.parentContext = this),
        this.subContextCount++,
        s
      );
    }
    transformIntoNewTimeline(i) {
      return (
        (this.previousNode = La),
        (this.currentTimeline = this.currentTimeline.fork(this.element, i)),
        this.timelines.push(this.currentTimeline),
        this.currentTimeline
      );
    }
    appendInstructionToTimeline(i, e, n) {
      let a = {
          duration: e ?? i.duration,
          delay: this.currentTimeline.currentTime + (n ?? 0) + i.delay,
          easing: "",
        },
        s = new lr(
          this._driver,
          i.element,
          i.keyframes,
          i.preStyleProps,
          i.postStyleProps,
          a,
          i.stretchStartingKeyframe
        );
      return this.timelines.push(s), a;
    }
    incrementTime(i) {
      this.currentTimeline.forwardTime(this.currentTimeline.duration + i);
    }
    delayNextStep(i) {
      i > 0 && this.currentTimeline.delayNextStep(i);
    }
    invokeQuery(i, e, n, a, s, r) {
      let l = [];
      if ((a && l.push(this.element), i.length > 0)) {
        (i = i.replace(Gu, "." + this._enterClassName)),
          (i = i.replace($u, "." + this._leaveClassName));
        let p = n != 1,
          h = this._driver.query(this.element, i, p);
        n !== 0 &&
          (h = n < 0 ? h.slice(h.length + n, h.length) : h.slice(0, n)),
          l.push(...h);
      }
      return !s && l.length == 0 && r.push(au(e)), l;
    }
  },
  Da = class t {
    constructor(i, e, n, a) {
      (this._driver = i),
        (this.element = e),
        (this.startTime = n),
        (this._elementTimelineStylesLookup = a),
        (this.duration = 0),
        (this.easing = null),
        (this._previousKeyframe = new Map()),
        (this._currentKeyframe = new Map()),
        (this._keyframes = new Map()),
        (this._styleSummary = new Map()),
        (this._localTimelineStyles = new Map()),
        (this._pendingStyles = new Map()),
        (this._backFill = new Map()),
        (this._currentEmptyStepKeyframe = null),
        this._elementTimelineStylesLookup ||
          (this._elementTimelineStylesLookup = new Map()),
        (this._globalTimelineStyles = this._elementTimelineStylesLookup.get(e)),
        this._globalTimelineStyles ||
          ((this._globalTimelineStyles = this._localTimelineStyles),
          this._elementTimelineStylesLookup.set(e, this._localTimelineStyles)),
        this._loadKeyframe();
    }
    containsAnimation() {
      switch (this._keyframes.size) {
        case 0:
          return !1;
        case 1:
          return this.hasCurrentStyleProperties();
        default:
          return !0;
      }
    }
    hasCurrentStyleProperties() {
      return this._currentKeyframe.size > 0;
    }
    get currentTime() {
      return this.startTime + this.duration;
    }
    delayNextStep(i) {
      let e = this._keyframes.size === 1 && this._pendingStyles.size;
      this.duration || e
        ? (this.forwardTime(this.currentTime + i),
          e && this.snapshotCurrentStyles())
        : (this.startTime += i);
    }
    fork(i, e) {
      return (
        this.applyStylesToKeyframe(),
        new t(
          this._driver,
          i,
          e || this.currentTime,
          this._elementTimelineStylesLookup
        )
      );
    }
    _loadKeyframe() {
      this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe),
        (this._currentKeyframe = this._keyframes.get(this.duration)),
        this._currentKeyframe ||
          ((this._currentKeyframe = new Map()),
          this._keyframes.set(this.duration, this._currentKeyframe));
    }
    forwardFrame() {
      (this.duration += Hu), this._loadKeyframe();
    }
    forwardTime(i) {
      this.applyStylesToKeyframe(), (this.duration = i), this._loadKeyframe();
    }
    _updateStyle(i, e) {
      this._localTimelineStyles.set(i, e),
        this._globalTimelineStyles.set(i, e),
        this._styleSummary.set(i, { time: this.currentTime, value: e });
    }
    allowOnlyTimelineStyles() {
      return this._currentEmptyStepKeyframe !== this._currentKeyframe;
    }
    applyEmptyStep(i) {
      i && this._previousKeyframe.set("easing", i);
      for (let [e, n] of this._globalTimelineStyles)
        this._backFill.set(e, n || Ct), this._currentKeyframe.set(e, Ct);
      this._currentEmptyStepKeyframe = this._currentKeyframe;
    }
    setStyles(i, e, n, a) {
      e && this._previousKeyframe.set("easing", e);
      let s = (a && a.params) || {},
        r = ju(i, this._globalTimelineStyles);
      for (let [l, p] of r) {
        let h = yn(p, s, n);
        this._pendingStyles.set(l, h),
          this._localTimelineStyles.has(l) ||
            this._backFill.set(l, this._globalTimelineStyles.get(l) ?? Ct),
          this._updateStyle(l, h);
      }
    }
    applyStylesToKeyframe() {
      this._pendingStyles.size != 0 &&
        (this._pendingStyles.forEach((i, e) => {
          this._currentKeyframe.set(e, i);
        }),
        this._pendingStyles.clear(),
        this._localTimelineStyles.forEach((i, e) => {
          this._currentKeyframe.has(e) || this._currentKeyframe.set(e, i);
        }));
    }
    snapshotCurrentStyles() {
      for (let [i, e] of this._localTimelineStyles)
        this._pendingStyles.set(i, e), this._updateStyle(i, e);
    }
    getFinalKeyframe() {
      return this._keyframes.get(this.duration);
    }
    get properties() {
      let i = [];
      for (let e in this._currentKeyframe) i.push(e);
      return i;
    }
    mergeTimelineCollectedStyles(i) {
      i._styleSummary.forEach((e, n) => {
        let a = this._styleSummary.get(n);
        (!a || e.time > a.time) && this._updateStyle(n, e.value);
      });
    }
    buildKeyframes() {
      this.applyStylesToKeyframe();
      let i = new Set(),
        e = new Set(),
        n = this._keyframes.size === 1 && this.duration === 0,
        a = [];
      this._keyframes.forEach((l, p) => {
        let h = new Map([...this._backFill, ...l]);
        h.forEach((x, v) => {
          x === aa ? i.add(v) : x === Ct && e.add(v);
        }),
          n || h.set("offset", p / this.duration),
          a.push(h);
      });
      let s = [...i.values()],
        r = [...e.values()];
      if (n) {
        let l = a[0],
          p = new Map(l);
        l.set("offset", 0), p.set("offset", 1), (a = [l, p]);
      }
      return Cr(
        this.element,
        a,
        s,
        r,
        this.duration,
        this.startTime,
        this.easing,
        !1
      );
    }
  },
  lr = class extends Da {
    constructor(i, e, n, a, s, r, l = !1) {
      super(i, e, r.delay),
        (this.keyframes = n),
        (this.preStyleProps = a),
        (this.postStyleProps = s),
        (this._stretchStartingKeyframe = l),
        (this.timings = {
          duration: r.duration,
          delay: r.delay,
          easing: r.easing,
        });
    }
    containsAnimation() {
      return this.keyframes.length > 1;
    }
    buildKeyframes() {
      let i = this.keyframes,
        { delay: e, duration: n, easing: a } = this.timings;
      if (this._stretchStartingKeyframe && e) {
        let s = [],
          r = n + e,
          l = e / r,
          p = new Map(i[0]);
        p.set("offset", 0), s.push(p);
        let h = new Map(i[0]);
        h.set("offset", Cc(l)), s.push(h);
        let x = i.length - 1;
        for (let v = 1; v <= x; v++) {
          let b = new Map(i[v]),
            C = b.get("offset"),
            k = e + C * n;
          b.set("offset", Cc(k / r)), s.push(b);
        }
        (n = r), (e = 0), (a = ""), (i = s);
      }
      return Cr(
        this.element,
        i,
        this.preStyleProps,
        this.postStyleProps,
        n,
        e,
        a,
        !0
      );
    }
  };
function Cc(t, i = 3) {
  let e = Math.pow(10, i - 1);
  return Math.round(t * e) / e;
}
function ju(t, i) {
  let e = new Map(),
    n;
  return (
    t.forEach((a) => {
      if (a === "*") {
        n ??= i.keys();
        for (let s of n) e.set(s, Ct);
      } else for (let [s, r] of a) e.set(s, r);
    }),
    e
  );
}
function wc(t, i, e, n, a, s, r, l, p, h, x, v, b) {
  return {
    type: 0,
    element: t,
    triggerName: i,
    isRemovalTransition: a,
    fromState: e,
    fromStyles: s,
    toState: n,
    toStyles: r,
    timelines: l,
    queriedElements: p,
    preStyleProps: h,
    postStyleProps: x,
    totalTime: v,
    errors: b,
  };
}
var Qs = {},
  Ea = class {
    constructor(i, e, n) {
      (this._triggerName = i), (this.ast = e), (this._stateStyles = n);
    }
    match(i, e, n, a) {
      return Xu(this.ast.matchers, i, e, n, a);
    }
    buildStyles(i, e, n) {
      let a = this._stateStyles.get("*");
      return (
        i !== void 0 && (a = this._stateStyles.get(i?.toString()) || a),
        a ? a.buildStyles(e, n) : new Map()
      );
    }
    build(i, e, n, a, s, r, l, p, h, x) {
      let v = [],
        b = (this.ast.options && this.ast.options.params) || Qs,
        C = (l && l.params) || Qs,
        k = this.buildStyles(n, C, v),
        D = (p && p.params) || Qs,
        B = this.buildStyles(a, D, v),
        ne = new Set(),
        re = new Map(),
        oe = new Map(),
        he = a === "void",
        ue = { params: Rc(D, b), delay: this.ast.options?.delay },
        tt = x ? [] : Nc(i, e, this.ast.animation, s, r, k, B, ue, h, v),
        ke = 0;
      return (
        tt.forEach((Ae) => {
          ke = Math.max(Ae.duration + Ae.delay, ke);
        }),
        v.length
          ? wc(e, this._triggerName, n, a, he, k, B, [], [], re, oe, ke, v)
          : (tt.forEach((Ae) => {
              let Pt = Ae.element,
                It = Je(re, Pt, new Set());
              Ae.preStyleProps.forEach((Ge) => It.add(Ge));
              let Q = Je(oe, Pt, new Set());
              Ae.postStyleProps.forEach((Ge) => Q.add(Ge)),
                Pt !== e && ne.add(Pt);
            }),
            wc(
              e,
              this._triggerName,
              n,
              a,
              he,
              k,
              B,
              tt,
              [...ne.values()],
              re,
              oe,
              ke
            ))
      );
    }
  };
function Xu(t, i, e, n, a) {
  return t.some((s) => s(i, e, n, a));
}
function Rc(t, i) {
  let e = ae({}, i);
  return (
    Object.entries(t).forEach(([n, a]) => {
      a != null && (e[n] = a);
    }),
    e
  );
}
var cr = class {
  constructor(i, e, n) {
    (this.styles = i), (this.defaultParams = e), (this.normalizer = n);
  }
  buildStyles(i, e) {
    let n = new Map(),
      a = Rc(i, this.defaultParams);
    return (
      this.styles.styles.forEach((s) => {
        typeof s != "string" &&
          s.forEach((r, l) => {
            r && (r = yn(r, a, e));
            let p = this.normalizer.normalizePropertyName(l, e);
            (r = this.normalizer.normalizeStyleValue(l, p, r, e)), n.set(l, r);
          });
      }),
      n
    );
  }
};
function qu(t, i, e) {
  return new dr(t, i, e);
}
var dr = class {
  constructor(i, e, n) {
    (this.name = i),
      (this.ast = e),
      (this._normalizer = n),
      (this.transitionFactories = []),
      (this.states = new Map()),
      e.states.forEach((a) => {
        let s = (a.options && a.options.params) || {};
        this.states.set(a.name, new cr(a.style, s, n));
      }),
      Tc(this.states, "true", "1"),
      Tc(this.states, "false", "0"),
      e.transitions.forEach((a) => {
        this.transitionFactories.push(new Ea(i, a, this.states));
      }),
      (this.fallbackTransition = Yu(i, this.states, this._normalizer));
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(i, e, n, a) {
    return this.transitionFactories.find((r) => r.match(i, e, n, a)) || null;
  }
  matchStyles(i, e, n) {
    return this.fallbackTransition.buildStyles(i, e, n);
  }
};
function Yu(t, i, e) {
  let n = [(r, l) => !0],
    a = { type: K.Sequence, steps: [], options: null },
    s = {
      type: K.Transition,
      animation: a,
      matchers: n,
      options: null,
      queryCount: 0,
      depCount: 0,
    };
  return new Ea(t, s, i);
}
function Tc(t, i, e) {
  t.has(i) ? t.has(e) || t.set(e, t.get(i)) : t.has(e) && t.set(i, t.get(e));
}
var Uu = new bn(),
  pr = class {
    constructor(i, e, n) {
      (this.bodyNode = i),
        (this._driver = e),
        (this._normalizer = n),
        (this._animations = new Map()),
        (this._playersById = new Map()),
        (this.players = []);
    }
    register(i, e) {
      let n = [],
        a = [],
        s = Bc(this._driver, e, n, a);
      if (n.length) throw cu(n);
      a.length && void 0, this._animations.set(i, s);
    }
    _buildPlayer(i, e, n) {
      let a = i.element,
        s = Dc(this._normalizer, i.keyframes, e, n);
      return this._driver.animate(a, s, i.duration, i.delay, i.easing, [], !0);
    }
    create(i, e, n = {}) {
      let a = [],
        s = this._animations.get(i),
        r,
        l = new Map();
      if (
        (s
          ? ((r = Nc(
              this._driver,
              e,
              s,
              Ic,
              er,
              new Map(),
              new Map(),
              n,
              Uu,
              a
            )),
            r.forEach((x) => {
              let v = Je(l, x.element, new Map());
              x.postStyleProps.forEach((b) => v.set(b, null));
            }))
          : (a.push(du()), (r = [])),
        a.length)
      )
        throw pu(a);
      l.forEach((x, v) => {
        x.forEach((b, C) => {
          x.set(C, this._driver.computeStyle(v, C, Ct));
        });
      });
      let p = r.map((x) => {
          let v = l.get(x.element);
          return this._buildPlayer(x, new Map(), v);
        }),
        h = Ut(p);
      return (
        this._playersById.set(i, h),
        h.onDestroy(() => this.destroy(i)),
        this.players.push(h),
        h
      );
    }
    destroy(i) {
      let e = this._getPlayer(i);
      e.destroy(), this._playersById.delete(i);
      let n = this.players.indexOf(e);
      n >= 0 && this.players.splice(n, 1);
    }
    _getPlayer(i) {
      let e = this._playersById.get(i);
      if (!e) throw hu(i);
      return e;
    }
    listen(i, e, n, a) {
      let s = _r(e, "", "", "");
      return fr(this._getPlayer(i), n, s, a), () => {};
    }
    command(i, e, n, a) {
      if (n == "register") {
        this.register(i, a[0]);
        return;
      }
      if (n == "create") {
        let r = a[0] || {};
        this.create(i, e, r);
        return;
      }
      let s = this._getPlayer(i);
      switch (n) {
        case "play":
          s.play();
          break;
        case "pause":
          s.pause();
          break;
        case "reset":
          s.reset();
          break;
        case "restart":
          s.restart();
          break;
        case "finish":
          s.finish();
          break;
        case "init":
          s.init();
          break;
        case "setPosition":
          s.setPosition(parseFloat(a[0]));
          break;
        case "destroy":
          this.destroy(i);
          break;
      }
    }
  },
  Sc = "ng-animate-queued",
  Qu = ".ng-animate-queued",
  Ks = "ng-animate-disabled",
  Ku = ".ng-animate-disabled",
  Zu = "ng-star-inserted",
  Ju = ".ng-star-inserted",
  eg = [],
  Hc = {
    namespaceId: "",
    setForRemoval: !1,
    setForMove: !1,
    hasAnimation: !1,
    removedBeforeQueried: !1,
  },
  tg = {
    namespaceId: "",
    setForMove: !1,
    setForRemoval: !1,
    hasAnimation: !1,
    removedBeforeQueried: !0,
  },
  ut = "__ng_removed",
  Cn = class {
    get params() {
      return this.options.params;
    }
    constructor(i, e = "") {
      this.namespaceId = e;
      let n = i && i.hasOwnProperty("value"),
        a = n ? i.value : i;
      if (((this.value = ng(a)), n)) {
        let s = i,
          { value: r } = s,
          l = Eo(s, ["value"]);
        this.options = l;
      } else this.options = {};
      this.options.params || (this.options.params = {});
    }
    absorbOptions(i) {
      let e = i.params;
      if (e) {
        let n = this.options.params;
        Object.keys(e).forEach((a) => {
          n[a] == null && (n[a] = e[a]);
        });
      }
    }
  },
  vn = "void",
  Zs = new Cn(vn),
  hr = class {
    constructor(i, e, n) {
      (this.id = i),
        (this.hostElement = e),
        (this._engine = n),
        (this.players = []),
        (this._triggers = new Map()),
        (this._queue = []),
        (this._elementListeners = new Map()),
        (this._hostClassName = "ng-tns-" + i),
        ot(e, this._hostClassName);
    }
    listen(i, e, n, a) {
      if (!this._triggers.has(e)) throw mu(n, e);
      if (n == null || n.length == 0) throw uu(e);
      if (!ag(n)) throw gu(n, e);
      let s = Je(this._elementListeners, i, []),
        r = { name: e, phase: n, callback: a };
      s.push(r);
      let l = Je(this._engine.statesByElement, i, new Map());
      return (
        l.has(e) || (ot(i, ya), ot(i, ya + "-" + e), l.set(e, Zs)),
        () => {
          this._engine.afterFlush(() => {
            let p = s.indexOf(r);
            p >= 0 && s.splice(p, 1), this._triggers.has(e) || l.delete(e);
          });
        }
      );
    }
    register(i, e) {
      return this._triggers.has(i) ? !1 : (this._triggers.set(i, e), !0);
    }
    _getTrigger(i) {
      let e = this._triggers.get(i);
      if (!e) throw fu(i);
      return e;
    }
    trigger(i, e, n, a = !0) {
      let s = this._getTrigger(e),
        r = new wn(this.id, e, i),
        l = this._engine.statesByElement.get(i);
      l ||
        (ot(i, ya),
        ot(i, ya + "-" + e),
        this._engine.statesByElement.set(i, (l = new Map())));
      let p = l.get(e),
        h = new Cn(n, this.id);
      if (
        (!(n && n.hasOwnProperty("value")) && p && h.absorbOptions(p.options),
        l.set(e, h),
        p || (p = Zs),
        !(h.value === vn) && p.value === h.value)
      ) {
        if (!og(p.params, h.params)) {
          let D = [],
            B = s.matchStyles(p.value, p.params, D),
            ne = s.matchStyles(h.value, h.params, D);
          D.length
            ? this._engine.reportError(D)
            : this._engine.afterFlush(() => {
                ui(i, B), Mt(i, ne);
              });
        }
        return;
      }
      let b = Je(this._engine.playersByElement, i, []);
      b.forEach((D) => {
        D.namespaceId == this.id &&
          D.triggerName == e &&
          D.queued &&
          D.destroy();
      });
      let C = s.matchTransition(p.value, h.value, i, h.params),
        k = !1;
      if (!C) {
        if (!a) return;
        (C = s.fallbackTransition), (k = !0);
      }
      return (
        this._engine.totalQueuedPlayers++,
        this._queue.push({
          element: i,
          triggerName: e,
          transition: C,
          fromState: p,
          toState: h,
          player: r,
          isFallbackTransition: k,
        }),
        k ||
          (ot(i, Sc),
          r.onStart(() => {
            Hi(i, Sc);
          })),
        r.onDone(() => {
          let D = this.players.indexOf(r);
          D >= 0 && this.players.splice(D, 1);
          let B = this._engine.playersByElement.get(i);
          if (B) {
            let ne = B.indexOf(r);
            ne >= 0 && B.splice(ne, 1);
          }
        }),
        this.players.push(r),
        b.push(r),
        r
      );
    }
    deregister(i) {
      this._triggers.delete(i),
        this._engine.statesByElement.forEach((e) => e.delete(i)),
        this._elementListeners.forEach((e, n) => {
          this._elementListeners.set(
            n,
            e.filter((a) => a.name != i)
          );
        });
    }
    clearElementCache(i) {
      this._engine.statesByElement.delete(i), this._elementListeners.delete(i);
      let e = this._engine.playersByElement.get(i);
      e &&
        (e.forEach((n) => n.destroy()),
        this._engine.playersByElement.delete(i));
    }
    _signalRemovalForInnerTriggers(i, e) {
      let n = this._engine.driver.query(i, Sa, !0);
      n.forEach((a) => {
        if (a[ut]) return;
        let s = this._engine.fetchNamespacesByElement(a);
        s.size
          ? s.forEach((r) => r.triggerLeaveAnimation(a, e, !1, !0))
          : this.clearElementCache(a);
      }),
        this._engine.afterFlushAnimationsDone(() =>
          n.forEach((a) => this.clearElementCache(a))
        );
    }
    triggerLeaveAnimation(i, e, n, a) {
      let s = this._engine.statesByElement.get(i),
        r = new Map();
      if (s) {
        let l = [];
        if (
          (s.forEach((p, h) => {
            if ((r.set(h, p.value), this._triggers.has(h))) {
              let x = this.trigger(i, h, vn, a);
              x && l.push(x);
            }
          }),
          l.length)
        )
          return (
            this._engine.markElementAsRemoved(this.id, i, !0, e, r),
            n && Ut(l).onDone(() => this._engine.processLeaveNode(i)),
            !0
          );
      }
      return !1;
    }
    prepareLeaveAnimationListeners(i) {
      let e = this._elementListeners.get(i),
        n = this._engine.statesByElement.get(i);
      if (e && n) {
        let a = new Set();
        e.forEach((s) => {
          let r = s.name;
          if (a.has(r)) return;
          a.add(r);
          let p = this._triggers.get(r).fallbackTransition,
            h = n.get(r) || Zs,
            x = new Cn(vn),
            v = new wn(this.id, r, i);
          this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: i,
              triggerName: r,
              transition: p,
              fromState: h,
              toState: x,
              player: v,
              isFallbackTransition: !0,
            });
        });
      }
    }
    removeNode(i, e) {
      let n = this._engine;
      if (
        (i.childElementCount && this._signalRemovalForInnerTriggers(i, e),
        this.triggerLeaveAnimation(i, e, !0))
      )
        return;
      let a = !1;
      if (n.totalAnimations) {
        let s = n.players.length ? n.playersByQueriedElement.get(i) : [];
        if (s && s.length) a = !0;
        else {
          let r = i;
          for (; (r = r.parentNode); )
            if (n.statesByElement.get(r)) {
              a = !0;
              break;
            }
        }
      }
      if ((this.prepareLeaveAnimationListeners(i), a))
        n.markElementAsRemoved(this.id, i, !1, e);
      else {
        let s = i[ut];
        (!s || s === Hc) &&
          (n.afterFlush(() => this.clearElementCache(i)),
          n.destroyInnerAnimations(i),
          n._onRemovalComplete(i, e));
      }
    }
    insertNode(i, e) {
      ot(i, this._hostClassName);
    }
    drainQueuedTransitions(i) {
      let e = [];
      return (
        this._queue.forEach((n) => {
          let a = n.player;
          if (a.destroyed) return;
          let s = n.element,
            r = this._elementListeners.get(s);
          r &&
            r.forEach((l) => {
              if (l.name == n.triggerName) {
                let p = _r(
                  s,
                  n.triggerName,
                  n.fromState.value,
                  n.toState.value
                );
                (p._data = i), fr(n.player, l.phase, p, l.callback);
              }
            }),
            a.markedForDestroy
              ? this._engine.afterFlush(() => {
                  a.destroy();
                })
              : e.push(n);
        }),
        (this._queue = []),
        e.sort((n, a) => {
          let s = n.transition.ast.depCount,
            r = a.transition.ast.depCount;
          return s == 0 || r == 0
            ? s - r
            : this._engine.driver.containsElement(n.element, a.element)
            ? 1
            : -1;
        })
      );
    }
    destroy(i) {
      this.players.forEach((e) => e.destroy()),
        this._signalRemovalForInnerTriggers(this.hostElement, i);
    }
  },
  mr = class {
    _onRemovalComplete(i, e) {
      this.onRemovalComplete(i, e);
    }
    constructor(i, e, n, a) {
      (this.bodyNode = i),
        (this.driver = e),
        (this._normalizer = n),
        (this.scheduler = a),
        (this.players = []),
        (this.newHostElements = new Map()),
        (this.playersByElement = new Map()),
        (this.playersByQueriedElement = new Map()),
        (this.statesByElement = new Map()),
        (this.disabledNodes = new Set()),
        (this.totalAnimations = 0),
        (this.totalQueuedPlayers = 0),
        (this._namespaceLookup = {}),
        (this._namespaceList = []),
        (this._flushFns = []),
        (this._whenQuietFns = []),
        (this.namespacesByHostElement = new Map()),
        (this.collectedEnterElements = []),
        (this.collectedLeaveElements = []),
        (this.onRemovalComplete = (s, r) => {});
    }
    get queuedPlayers() {
      let i = [];
      return (
        this._namespaceList.forEach((e) => {
          e.players.forEach((n) => {
            n.queued && i.push(n);
          });
        }),
        i
      );
    }
    createNamespace(i, e) {
      let n = new hr(i, e, this);
      return (
        this.bodyNode && this.driver.containsElement(this.bodyNode, e)
          ? this._balanceNamespaceList(n, e)
          : (this.newHostElements.set(e, n), this.collectEnterElement(e)),
        (this._namespaceLookup[i] = n)
      );
    }
    _balanceNamespaceList(i, e) {
      let n = this._namespaceList,
        a = this.namespacesByHostElement;
      if (n.length - 1 >= 0) {
        let r = !1,
          l = this.driver.getParentElement(e);
        for (; l; ) {
          let p = a.get(l);
          if (p) {
            let h = n.indexOf(p);
            n.splice(h + 1, 0, i), (r = !0);
            break;
          }
          l = this.driver.getParentElement(l);
        }
        r || n.unshift(i);
      } else n.push(i);
      return a.set(e, i), i;
    }
    register(i, e) {
      let n = this._namespaceLookup[i];
      return n || (n = this.createNamespace(i, e)), n;
    }
    registerTrigger(i, e, n) {
      let a = this._namespaceLookup[i];
      a && a.register(e, n) && this.totalAnimations++;
    }
    destroy(i, e) {
      i &&
        (this.afterFlush(() => {}),
        this.afterFlushAnimationsDone(() => {
          let n = this._fetchNamespace(i);
          this.namespacesByHostElement.delete(n.hostElement);
          let a = this._namespaceList.indexOf(n);
          a >= 0 && this._namespaceList.splice(a, 1),
            n.destroy(e),
            delete this._namespaceLookup[i];
        }));
    }
    _fetchNamespace(i) {
      return this._namespaceLookup[i];
    }
    fetchNamespacesByElement(i) {
      let e = new Set(),
        n = this.statesByElement.get(i);
      if (n) {
        for (let a of n.values())
          if (a.namespaceId) {
            let s = this._fetchNamespace(a.namespaceId);
            s && e.add(s);
          }
      }
      return e;
    }
    trigger(i, e, n, a) {
      if (wa(e)) {
        let s = this._fetchNamespace(i);
        if (s) return s.trigger(e, n, a), !0;
      }
      return !1;
    }
    insertNode(i, e, n, a) {
      if (!wa(e)) return;
      let s = e[ut];
      if (s && s.setForRemoval) {
        (s.setForRemoval = !1), (s.setForMove = !0);
        let r = this.collectedLeaveElements.indexOf(e);
        r >= 0 && this.collectedLeaveElements.splice(r, 1);
      }
      if (i) {
        let r = this._fetchNamespace(i);
        r && r.insertNode(e, n);
      }
      a && this.collectEnterElement(e);
    }
    collectEnterElement(i) {
      this.collectedEnterElements.push(i);
    }
    markElementAsDisabled(i, e) {
      e
        ? this.disabledNodes.has(i) || (this.disabledNodes.add(i), ot(i, Ks))
        : this.disabledNodes.has(i) &&
          (this.disabledNodes.delete(i), Hi(i, Ks));
    }
    removeNode(i, e, n) {
      if (wa(e)) {
        this.scheduler?.notify();
        let a = i ? this._fetchNamespace(i) : null;
        a ? a.removeNode(e, n) : this.markElementAsRemoved(i, e, !1, n);
        let s = this.namespacesByHostElement.get(e);
        s && s.id !== i && s.removeNode(e, n);
      } else this._onRemovalComplete(e, n);
    }
    markElementAsRemoved(i, e, n, a, s) {
      this.collectedLeaveElements.push(e),
        (e[ut] = {
          namespaceId: i,
          setForRemoval: a,
          hasAnimation: n,
          removedBeforeQueried: !1,
          previousTriggersValues: s,
        });
    }
    listen(i, e, n, a, s) {
      return wa(e) ? this._fetchNamespace(i).listen(e, n, a, s) : () => {};
    }
    _buildInstruction(i, e, n, a, s) {
      return i.transition.build(
        this.driver,
        i.element,
        i.fromState.value,
        i.toState.value,
        n,
        a,
        i.fromState.options,
        i.toState.options,
        e,
        s
      );
    }
    destroyInnerAnimations(i) {
      let e = this.driver.query(i, Sa, !0);
      e.forEach((n) => this.destroyActiveAnimationsForElement(n)),
        this.playersByQueriedElement.size != 0 &&
          ((e = this.driver.query(i, tr, !0)),
          e.forEach((n) => this.finishActiveQueriedAnimationOnElement(n)));
    }
    destroyActiveAnimationsForElement(i) {
      let e = this.playersByElement.get(i);
      e &&
        e.forEach((n) => {
          n.queued ? (n.markedForDestroy = !0) : n.destroy();
        });
    }
    finishActiveQueriedAnimationOnElement(i) {
      let e = this.playersByQueriedElement.get(i);
      e && e.forEach((n) => n.finish());
    }
    whenRenderingDone() {
      return new Promise((i) => {
        if (this.players.length) return Ut(this.players).onDone(() => i());
        i();
      });
    }
    processLeaveNode(i) {
      let e = i[ut];
      if (e && e.setForRemoval) {
        if (((i[ut] = Hc), e.namespaceId)) {
          this.destroyInnerAnimations(i);
          let n = this._fetchNamespace(e.namespaceId);
          n && n.clearElementCache(i);
        }
        this._onRemovalComplete(i, e.setForRemoval);
      }
      i.classList?.contains(Ks) && this.markElementAsDisabled(i, !1),
        this.driver.query(i, Ku, !0).forEach((n) => {
          this.markElementAsDisabled(n, !1);
        });
    }
    flush(i = -1) {
      let e = [];
      if (
        (this.newHostElements.size &&
          (this.newHostElements.forEach((n, a) =>
            this._balanceNamespaceList(n, a)
          ),
          this.newHostElements.clear()),
        this.totalAnimations && this.collectedEnterElements.length)
      )
        for (let n = 0; n < this.collectedEnterElements.length; n++) {
          let a = this.collectedEnterElements[n];
          ot(a, Zu);
        }
      if (
        this._namespaceList.length &&
        (this.totalQueuedPlayers || this.collectedLeaveElements.length)
      ) {
        let n = [];
        try {
          e = this._flushAnimations(n, i);
        } finally {
          for (let a = 0; a < n.length; a++) n[a]();
        }
      } else
        for (let n = 0; n < this.collectedLeaveElements.length; n++) {
          let a = this.collectedLeaveElements[n];
          this.processLeaveNode(a);
        }
      if (
        ((this.totalQueuedPlayers = 0),
        (this.collectedEnterElements.length = 0),
        (this.collectedLeaveElements.length = 0),
        this._flushFns.forEach((n) => n()),
        (this._flushFns = []),
        this._whenQuietFns.length)
      ) {
        let n = this._whenQuietFns;
        (this._whenQuietFns = []),
          e.length
            ? Ut(e).onDone(() => {
                n.forEach((a) => a());
              })
            : n.forEach((a) => a());
      }
    }
    reportError(i) {
      throw _u(i);
    }
    _flushAnimations(i, e) {
      let n = new bn(),
        a = [],
        s = new Map(),
        r = [],
        l = new Map(),
        p = new Map(),
        h = new Map(),
        x = new Set();
      this.disabledNodes.forEach((I) => {
        x.add(I);
        let N = this.driver.query(I, Qu, !0);
        for (let R = 0; R < N.length; R++) x.add(N[R]);
      });
      let v = this.bodyNode,
        b = Array.from(this.statesByElement.keys()),
        C = Mc(b, this.collectedEnterElements),
        k = new Map(),
        D = 0;
      C.forEach((I, N) => {
        let R = Ic + D++;
        k.set(N, R), I.forEach((G) => ot(G, R));
      });
      let B = [],
        ne = new Set(),
        re = new Set();
      for (let I = 0; I < this.collectedLeaveElements.length; I++) {
        let N = this.collectedLeaveElements[I],
          R = N[ut];
        R &&
          R.setForRemoval &&
          (B.push(N),
          ne.add(N),
          R.hasAnimation
            ? this.driver.query(N, Ju, !0).forEach((G) => ne.add(G))
            : re.add(N));
      }
      let oe = new Map(),
        he = Mc(b, Array.from(ne));
      he.forEach((I, N) => {
        let R = er + D++;
        oe.set(N, R), I.forEach((G) => ot(G, R));
      }),
        i.push(() => {
          C.forEach((I, N) => {
            let R = k.get(N);
            I.forEach((G) => Hi(G, R));
          }),
            he.forEach((I, N) => {
              let R = oe.get(N);
              I.forEach((G) => Hi(G, R));
            }),
            B.forEach((I) => {
              this.processLeaveNode(I);
            });
        });
      let ue = [],
        tt = [];
      for (let I = this._namespaceList.length - 1; I >= 0; I--)
        this._namespaceList[I].drainQueuedTransitions(e).forEach((R) => {
          let G = R.player,
            Ce = R.element;
          if ((ue.push(G), this.collectedEnterElements.length)) {
            let Be = Ce[ut];
            if (Be && Be.setForMove) {
              if (
                Be.previousTriggersValues &&
                Be.previousTriggersValues.has(R.triggerName)
              ) {
                let si = Be.previousTriggersValues.get(R.triggerName),
                  it = this.statesByElement.get(R.element);
                if (it && it.has(R.triggerName)) {
                  let Qn = it.get(R.triggerName);
                  (Qn.value = si), it.set(R.triggerName, Qn);
                }
              }
              G.destroy();
              return;
            }
          }
          let _t = !v || !this.driver.containsElement(v, Ce),
            Ke = oe.get(Ce),
            Wt = k.get(Ce),
            me = this._buildInstruction(R, n, Wt, Ke, _t);
          if (me.errors && me.errors.length) {
            tt.push(me);
            return;
          }
          if (_t) {
            G.onStart(() => ui(Ce, me.fromStyles)),
              G.onDestroy(() => Mt(Ce, me.toStyles)),
              a.push(G);
            return;
          }
          if (R.isFallbackTransition) {
            G.onStart(() => ui(Ce, me.fromStyles)),
              G.onDestroy(() => Mt(Ce, me.toStyles)),
              a.push(G);
            return;
          }
          let Do = [];
          me.timelines.forEach((Be) => {
            (Be.stretchStartingKeyframe = !0),
              this.disabledNodes.has(Be.element) || Do.push(Be);
          }),
            (me.timelines = Do),
            n.append(Ce, me.timelines);
          let lm = { instruction: me, player: G, element: Ce };
          r.push(lm),
            me.queriedElements.forEach((Be) => Je(l, Be, []).push(G)),
            me.preStyleProps.forEach((Be, si) => {
              if (Be.size) {
                let it = p.get(si);
                it || p.set(si, (it = new Set())),
                  Be.forEach((Qn, ws) => it.add(ws));
              }
            }),
            me.postStyleProps.forEach((Be, si) => {
              let it = h.get(si);
              it || h.set(si, (it = new Set())),
                Be.forEach((Qn, ws) => it.add(ws));
            });
        });
      if (tt.length) {
        let I = [];
        tt.forEach((N) => {
          I.push(xu(N.triggerName, N.errors));
        }),
          ue.forEach((N) => N.destroy()),
          this.reportError(I);
      }
      let ke = new Map(),
        Ae = new Map();
      r.forEach((I) => {
        let N = I.element;
        n.has(N) &&
          (Ae.set(N, N),
          this._beforeAnimationBuild(I.player.namespaceId, I.instruction, ke));
      }),
        a.forEach((I) => {
          let N = I.element;
          this._getPreviousPlayers(
            N,
            !1,
            I.namespaceId,
            I.triggerName,
            null
          ).forEach((G) => {
            Je(ke, N, []).push(G), G.destroy();
          });
        });
      let Pt = B.filter((I) => Lc(I, p, h)),
        It = new Map();
      Ac(It, this.driver, re, h, Ct).forEach((I) => {
        Lc(I, p, h) && Pt.push(I);
      });
      let Ge = new Map();
      C.forEach((I, N) => {
        Ac(Ge, this.driver, new Set(I), p, aa);
      }),
        Pt.forEach((I) => {
          let N = It.get(I),
            R = Ge.get(I);
          It.set(
            I,
            new Map([...(N?.entries() ?? []), ...(R?.entries() ?? [])])
          );
        });
      let Ve = [],
        Ft = [],
        an = {};
      r.forEach((I) => {
        let { element: N, player: R, instruction: G } = I;
        if (n.has(N)) {
          if (x.has(N)) {
            R.onDestroy(() => Mt(N, G.toStyles)),
              (R.disabled = !0),
              R.overrideTotalTime(G.totalTime),
              a.push(R);
            return;
          }
          let Ce = an;
          if (Ae.size > 1) {
            let Ke = N,
              Wt = [];
            for (; (Ke = Ke.parentNode); ) {
              let me = Ae.get(Ke);
              if (me) {
                Ce = me;
                break;
              }
              Wt.push(Ke);
            }
            Wt.forEach((me) => Ae.set(me, Ce));
          }
          let _t = this._buildAnimation(R.namespaceId, G, ke, s, Ge, It);
          if ((R.setRealPlayer(_t), Ce === an)) Ve.push(R);
          else {
            let Ke = this.playersByElement.get(Ce);
            Ke && Ke.length && (R.parentPlayer = Ut(Ke)), a.push(R);
          }
        } else
          ui(N, G.fromStyles),
            R.onDestroy(() => Mt(N, G.toStyles)),
            Ft.push(R),
            x.has(N) && a.push(R);
      }),
        Ft.forEach((I) => {
          let N = s.get(I.element);
          if (N && N.length) {
            let R = Ut(N);
            I.setRealPlayer(R);
          }
        }),
        a.forEach((I) => {
          I.parentPlayer ? I.syncPlayerEvents(I.parentPlayer) : I.destroy();
        });
      for (let I = 0; I < B.length; I++) {
        let N = B[I],
          R = N[ut];
        if ((Hi(N, er), R && R.hasAnimation)) continue;
        let G = [];
        if (l.size) {
          let _t = l.get(N);
          _t && _t.length && G.push(..._t);
          let Ke = this.driver.query(N, tr, !0);
          for (let Wt = 0; Wt < Ke.length; Wt++) {
            let me = l.get(Ke[Wt]);
            me && me.length && G.push(...me);
          }
        }
        let Ce = G.filter((_t) => !_t.destroyed);
        Ce.length ? sg(this, N, Ce) : this.processLeaveNode(N);
      }
      return (
        (B.length = 0),
        Ve.forEach((I) => {
          this.players.push(I),
            I.onDone(() => {
              I.destroy();
              let N = this.players.indexOf(I);
              this.players.splice(N, 1);
            }),
            I.play();
        }),
        Ve
      );
    }
    afterFlush(i) {
      this._flushFns.push(i);
    }
    afterFlushAnimationsDone(i) {
      this._whenQuietFns.push(i);
    }
    _getPreviousPlayers(i, e, n, a, s) {
      let r = [];
      if (e) {
        let l = this.playersByQueriedElement.get(i);
        l && (r = l);
      } else {
        let l = this.playersByElement.get(i);
        if (l) {
          let p = !s || s == vn;
          l.forEach((h) => {
            h.queued || (!p && h.triggerName != a) || r.push(h);
          });
        }
      }
      return (
        (n || a) &&
          (r = r.filter(
            (l) => !((n && n != l.namespaceId) || (a && a != l.triggerName))
          )),
        r
      );
    }
    _beforeAnimationBuild(i, e, n) {
      let a = e.triggerName,
        s = e.element,
        r = e.isRemovalTransition ? void 0 : i,
        l = e.isRemovalTransition ? void 0 : a;
      for (let p of e.timelines) {
        let h = p.element,
          x = h !== s,
          v = Je(n, h, []);
        this._getPreviousPlayers(h, x, r, l, e.toState).forEach((C) => {
          let k = C.getRealPlayer();
          k.beforeDestroy && k.beforeDestroy(), C.destroy(), v.push(C);
        });
      }
      ui(s, e.fromStyles);
    }
    _buildAnimation(i, e, n, a, s, r) {
      let l = e.triggerName,
        p = e.element,
        h = [],
        x = new Set(),
        v = new Set(),
        b = e.timelines.map((k) => {
          let D = k.element;
          x.add(D);
          let B = D[ut];
          if (B && B.removedBeforeQueried) return new Pi(k.duration, k.delay);
          let ne = D !== p,
            re = rg((n.get(D) || eg).map((ke) => ke.getRealPlayer())).filter(
              (ke) => {
                let Ae = ke;
                return Ae.element ? Ae.element === D : !1;
              }
            ),
            oe = s.get(D),
            he = r.get(D),
            ue = Dc(this._normalizer, k.keyframes, oe, he),
            tt = this._buildPlayer(k, ue, re);
          if ((k.subTimeline && a && v.add(D), ne)) {
            let ke = new wn(i, l, D);
            ke.setRealPlayer(tt), h.push(ke);
          }
          return tt;
        });
      h.forEach((k) => {
        Je(this.playersByQueriedElement, k.element, []).push(k),
          k.onDone(() => ig(this.playersByQueriedElement, k.element, k));
      }),
        x.forEach((k) => ot(k, vc));
      let C = Ut(b);
      return (
        C.onDestroy(() => {
          x.forEach((k) => Hi(k, vc)), Mt(p, e.toStyles);
        }),
        v.forEach((k) => {
          Je(a, k, []).push(C);
        }),
        C
      );
    }
    _buildPlayer(i, e, n) {
      return e.length > 0
        ? this.driver.animate(i.element, e, i.duration, i.delay, i.easing, n)
        : new Pi(i.duration, i.delay);
    }
  },
  wn = class {
    constructor(i, e, n) {
      (this.namespaceId = i),
        (this.triggerName = e),
        (this.element = n),
        (this._player = new Pi()),
        (this._containsRealPlayer = !1),
        (this._queuedCallbacks = new Map()),
        (this.destroyed = !1),
        (this.parentPlayer = null),
        (this.markedForDestroy = !1),
        (this.disabled = !1),
        (this.queued = !0),
        (this.totalTime = 0);
    }
    setRealPlayer(i) {
      this._containsRealPlayer ||
        ((this._player = i),
        this._queuedCallbacks.forEach((e, n) => {
          e.forEach((a) => fr(i, n, void 0, a));
        }),
        this._queuedCallbacks.clear(),
        (this._containsRealPlayer = !0),
        this.overrideTotalTime(i.totalTime),
        (this.queued = !1));
    }
    getRealPlayer() {
      return this._player;
    }
    overrideTotalTime(i) {
      this.totalTime = i;
    }
    syncPlayerEvents(i) {
      let e = this._player;
      e.triggerCallback && i.onStart(() => e.triggerCallback("start")),
        i.onDone(() => this.finish()),
        i.onDestroy(() => this.destroy());
    }
    _queueEvent(i, e) {
      Je(this._queuedCallbacks, i, []).push(e);
    }
    onDone(i) {
      this.queued && this._queueEvent("done", i), this._player.onDone(i);
    }
    onStart(i) {
      this.queued && this._queueEvent("start", i), this._player.onStart(i);
    }
    onDestroy(i) {
      this.queued && this._queueEvent("destroy", i), this._player.onDestroy(i);
    }
    init() {
      this._player.init();
    }
    hasStarted() {
      return this.queued ? !1 : this._player.hasStarted();
    }
    play() {
      !this.queued && this._player.play();
    }
    pause() {
      !this.queued && this._player.pause();
    }
    restart() {
      !this.queued && this._player.restart();
    }
    finish() {
      this._player.finish();
    }
    destroy() {
      (this.destroyed = !0), this._player.destroy();
    }
    reset() {
      !this.queued && this._player.reset();
    }
    setPosition(i) {
      this.queued || this._player.setPosition(i);
    }
    getPosition() {
      return this.queued ? 0 : this._player.getPosition();
    }
    triggerCallback(i) {
      let e = this._player;
      e.triggerCallback && e.triggerCallback(i);
    }
  };
function ig(t, i, e) {
  let n = t.get(i);
  if (n) {
    if (n.length) {
      let a = n.indexOf(e);
      n.splice(a, 1);
    }
    n.length == 0 && t.delete(i);
  }
  return n;
}
function ng(t) {
  return t ?? null;
}
function wa(t) {
  return t && t.nodeType === 1;
}
function ag(t) {
  return t == "start" || t == "done";
}
function kc(t, i) {
  let e = t.style.display;
  return (t.style.display = i ?? "none"), e;
}
function Ac(t, i, e, n, a) {
  let s = [];
  e.forEach((p) => s.push(kc(p)));
  let r = [];
  n.forEach((p, h) => {
    let x = new Map();
    p.forEach((v) => {
      let b = i.computeStyle(h, v, a);
      x.set(v, b), (!b || b.length == 0) && ((h[ut] = tg), r.push(h));
    }),
      t.set(h, x);
  });
  let l = 0;
  return e.forEach((p) => kc(p, s[l++])), r;
}
function Mc(t, i) {
  let e = new Map();
  if ((t.forEach((l) => e.set(l, [])), i.length == 0)) return e;
  let n = 1,
    a = new Set(i),
    s = new Map();
  function r(l) {
    if (!l) return n;
    let p = s.get(l);
    if (p) return p;
    let h = l.parentNode;
    return e.has(h) ? (p = h) : a.has(h) ? (p = n) : (p = r(h)), s.set(l, p), p;
  }
  return (
    i.forEach((l) => {
      let p = r(l);
      p !== n && e.get(p).push(l);
    }),
    e
  );
}
function ot(t, i) {
  t.classList?.add(i);
}
function Hi(t, i) {
  t.classList?.remove(i);
}
function sg(t, i, e) {
  Ut(e).onDone(() => t.processLeaveNode(i));
}
function rg(t) {
  let i = [];
  return zc(t, i), i;
}
function zc(t, i) {
  for (let e = 0; e < t.length; e++) {
    let n = t[e];
    n instanceof Fs ? zc(n.players, i) : i.push(n);
  }
}
function og(t, i) {
  let e = Object.keys(t),
    n = Object.keys(i);
  if (e.length != n.length) return !1;
  for (let a = 0; a < e.length; a++) {
    let s = e[a];
    if (!i.hasOwnProperty(s) || t[s] !== i[s]) return !1;
  }
  return !0;
}
function Lc(t, i, e) {
  let n = e.get(t);
  if (!n) return !1;
  let a = i.get(t);
  return a ? n.forEach((s) => a.add(s)) : i.set(t, n), e.delete(t), !0;
}
var zi = class {
  constructor(i, e, n, a) {
    (this._driver = e),
      (this._normalizer = n),
      (this._triggerCache = {}),
      (this.onRemovalComplete = (s, r) => {}),
      (this._transitionEngine = new mr(i.body, e, n, a)),
      (this._timelineEngine = new pr(i.body, e, n)),
      (this._transitionEngine.onRemovalComplete = (s, r) =>
        this.onRemovalComplete(s, r));
  }
  registerTrigger(i, e, n, a, s) {
    let r = i + "-" + a,
      l = this._triggerCache[r];
    if (!l) {
      let p = [],
        h = [],
        x = Bc(this._driver, s, p, h);
      if (p.length) throw ou(a, p);
      h.length && void 0,
        (l = qu(a, x, this._normalizer)),
        (this._triggerCache[r] = l);
    }
    this._transitionEngine.registerTrigger(e, a, l);
  }
  register(i, e) {
    this._transitionEngine.register(i, e);
  }
  destroy(i, e) {
    this._transitionEngine.destroy(i, e);
  }
  onInsert(i, e, n, a) {
    this._transitionEngine.insertNode(i, e, n, a);
  }
  onRemove(i, e, n) {
    this._transitionEngine.removeNode(i, e, n);
  }
  disableAnimations(i, e) {
    this._transitionEngine.markElementAsDisabled(i, e);
  }
  process(i, e, n, a) {
    if (n.charAt(0) == "@") {
      let [s, r] = _c(n),
        l = a;
      this._timelineEngine.command(s, e, r, l);
    } else this._transitionEngine.trigger(i, e, n, a);
  }
  listen(i, e, n, a, s) {
    if (n.charAt(0) == "@") {
      let [r, l] = _c(n);
      return this._timelineEngine.listen(r, e, l, s);
    }
    return this._transitionEngine.listen(i, e, n, a, s);
  }
  flush(i = -1) {
    this._transitionEngine.flush(i);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(i) {
    this._transitionEngine.afterFlushAnimationsDone(i);
  }
};
function lg(t, i) {
  let e = null,
    n = null;
  return (
    Array.isArray(i) && i.length
      ? ((e = Js(i[0])), i.length > 1 && (n = Js(i[i.length - 1])))
      : i instanceof Map && (e = Js(i)),
    e || n ? new ur(t, e, n) : null
  );
}
var ur = class t {
  static {
    this.initialStylesByElement = new WeakMap();
  }
  constructor(i, e, n) {
    (this._element = i),
      (this._startStyles = e),
      (this._endStyles = n),
      (this._state = 0);
    let a = t.initialStylesByElement.get(i);
    a || t.initialStylesByElement.set(i, (a = new Map())),
      (this._initialStyles = a);
  }
  start() {
    this._state < 1 &&
      (this._startStyles &&
        Mt(this._element, this._startStyles, this._initialStyles),
      (this._state = 1));
  }
  finish() {
    this.start(),
      this._state < 2 &&
        (Mt(this._element, this._initialStyles),
        this._endStyles &&
          (Mt(this._element, this._endStyles), (this._endStyles = null)),
        (this._state = 1));
  }
  destroy() {
    this.finish(),
      this._state < 3 &&
        (t.initialStylesByElement.delete(this._element),
        this._startStyles &&
          (ui(this._element, this._startStyles), (this._endStyles = null)),
        this._endStyles &&
          (ui(this._element, this._endStyles), (this._endStyles = null)),
        Mt(this._element, this._initialStyles),
        (this._state = 3));
  }
};
function Js(t) {
  let i = null;
  return (
    t.forEach((e, n) => {
      cg(n) && ((i = i || new Map()), i.set(n, e));
    }),
    i
  );
}
function cg(t) {
  return t === "display" || t === "position";
}
var Oa = class {
    constructor(i, e, n, a) {
      (this.element = i),
        (this.keyframes = e),
        (this.options = n),
        (this._specialStyles = a),
        (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._onDestroyFns = []),
        (this._initialized = !1),
        (this._finished = !1),
        (this._started = !1),
        (this._destroyed = !1),
        (this._originalOnDoneFns = []),
        (this._originalOnStartFns = []),
        (this.time = 0),
        (this.parentPlayer = null),
        (this.currentSnapshot = new Map()),
        (this._duration = n.duration),
        (this._delay = n.delay || 0),
        (this.time = this._duration + this._delay);
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((i) => i()),
        (this._onDoneFns = []));
    }
    init() {
      this._buildPlayer(), this._preparePlayerBeforeStart();
    }
    _buildPlayer() {
      if (this._initialized) return;
      this._initialized = !0;
      let i = this.keyframes;
      (this.domPlayer = this._triggerWebAnimation(
        this.element,
        i,
        this.options
      )),
        (this._finalKeyframe = i.length ? i[i.length - 1] : new Map());
      let e = () => this._onFinish();
      this.domPlayer.addEventListener("finish", e),
        this.onDestroy(() => {
          this.domPlayer.removeEventListener("finish", e);
        });
    }
    _preparePlayerBeforeStart() {
      this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
    }
    _convertKeyframesToObject(i) {
      let e = [];
      return (
        i.forEach((n) => {
          e.push(Object.fromEntries(n));
        }),
        e
      );
    }
    _triggerWebAnimation(i, e, n) {
      return i.animate(this._convertKeyframesToObject(e), n);
    }
    onStart(i) {
      this._originalOnStartFns.push(i), this._onStartFns.push(i);
    }
    onDone(i) {
      this._originalOnDoneFns.push(i), this._onDoneFns.push(i);
    }
    onDestroy(i) {
      this._onDestroyFns.push(i);
    }
    play() {
      this._buildPlayer(),
        this.hasStarted() ||
          (this._onStartFns.forEach((i) => i()),
          (this._onStartFns = []),
          (this._started = !0),
          this._specialStyles && this._specialStyles.start()),
        this.domPlayer.play();
    }
    pause() {
      this.init(), this.domPlayer.pause();
    }
    finish() {
      this.init(),
        this._specialStyles && this._specialStyles.finish(),
        this._onFinish(),
        this.domPlayer.finish();
    }
    reset() {
      this._resetDomPlayerState(),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._started = !1),
        (this._onStartFns = this._originalOnStartFns),
        (this._onDoneFns = this._originalOnDoneFns);
    }
    _resetDomPlayerState() {
      this.domPlayer && this.domPlayer.cancel();
    }
    restart() {
      this.reset(), this.play();
    }
    hasStarted() {
      return this._started;
    }
    destroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this._resetDomPlayerState(),
        this._onFinish(),
        this._specialStyles && this._specialStyles.destroy(),
        this._onDestroyFns.forEach((i) => i()),
        (this._onDestroyFns = []));
    }
    setPosition(i) {
      this.domPlayer === void 0 && this.init(),
        (this.domPlayer.currentTime = i * this.time);
    }
    getPosition() {
      return +(this.domPlayer.currentTime ?? 0) / this.time;
    }
    get totalTime() {
      return this._delay + this._duration;
    }
    beforeDestroy() {
      let i = new Map();
      this.hasStarted() &&
        this._finalKeyframe.forEach((n, a) => {
          a !== "offset" && i.set(a, this._finished ? n : br(this.element, a));
        }),
        (this.currentSnapshot = i);
    }
    triggerCallback(i) {
      let e = i === "start" ? this._onStartFns : this._onDoneFns;
      e.forEach((n) => n()), (e.length = 0);
    }
  },
  Pa = class {
    validateStyleProperty(i) {
      return !0;
    }
    validateAnimatableStyleProperty(i) {
      return !0;
    }
    matchesElement(i, e) {
      return !1;
    }
    containsElement(i, e) {
      return Ec(i, e);
    }
    getParentElement(i) {
      return xr(i);
    }
    query(i, e, n) {
      return Oc(i, e, n);
    }
    computeStyle(i, e, n) {
      return br(i, e);
    }
    animate(i, e, n, a, s, r = []) {
      let l = a == 0 ? "both" : "forwards",
        p = { duration: n, delay: a, fill: l };
      s && (p.easing = s);
      let h = new Map(),
        x = r.filter((C) => C instanceof Oa);
      Lu(n, a) &&
        x.forEach((C) => {
          C.currentSnapshot.forEach((k, D) => h.set(D, k));
        });
      let v = ku(e).map((C) => new Map(C));
      v = Du(i, v, h);
      let b = lg(i, v);
      return new Oa(i, v, p, b);
    }
  };
var Ta = "@",
  Gc = "@.disabled",
  Ia = class {
    constructor(i, e, n, a) {
      (this.namespaceId = i),
        (this.delegate = e),
        (this.engine = n),
        (this._onDestroy = a),
        (this.ɵtype = 0);
    }
    get data() {
      return this.delegate.data;
    }
    destroyNode(i) {
      this.delegate.destroyNode?.(i);
    }
    destroy() {
      this.engine.destroy(this.namespaceId, this.delegate),
        this.engine.afterFlushAnimationsDone(() => {
          queueMicrotask(() => {
            this.delegate.destroy();
          });
        }),
        this._onDestroy?.();
    }
    createElement(i, e) {
      return this.delegate.createElement(i, e);
    }
    createComment(i) {
      return this.delegate.createComment(i);
    }
    createText(i) {
      return this.delegate.createText(i);
    }
    appendChild(i, e) {
      this.delegate.appendChild(i, e),
        this.engine.onInsert(this.namespaceId, e, i, !1);
    }
    insertBefore(i, e, n, a = !0) {
      this.delegate.insertBefore(i, e, n),
        this.engine.onInsert(this.namespaceId, e, i, a);
    }
    removeChild(i, e, n) {
      this.engine.onRemove(this.namespaceId, e, this.delegate);
    }
    selectRootElement(i, e) {
      return this.delegate.selectRootElement(i, e);
    }
    parentNode(i) {
      return this.delegate.parentNode(i);
    }
    nextSibling(i) {
      return this.delegate.nextSibling(i);
    }
    setAttribute(i, e, n, a) {
      this.delegate.setAttribute(i, e, n, a);
    }
    removeAttribute(i, e, n) {
      this.delegate.removeAttribute(i, e, n);
    }
    addClass(i, e) {
      this.delegate.addClass(i, e);
    }
    removeClass(i, e) {
      this.delegate.removeClass(i, e);
    }
    setStyle(i, e, n, a) {
      this.delegate.setStyle(i, e, n, a);
    }
    removeStyle(i, e, n) {
      this.delegate.removeStyle(i, e, n);
    }
    setProperty(i, e, n) {
      e.charAt(0) == Ta && e == Gc
        ? this.disableAnimations(i, !!n)
        : this.delegate.setProperty(i, e, n);
    }
    setValue(i, e) {
      this.delegate.setValue(i, e);
    }
    listen(i, e, n) {
      return this.delegate.listen(i, e, n);
    }
    disableAnimations(i, e) {
      this.engine.disableAnimations(i, e);
    }
  },
  gr = class extends Ia {
    constructor(i, e, n, a, s) {
      super(e, n, a, s), (this.factory = i), (this.namespaceId = e);
    }
    setProperty(i, e, n) {
      e.charAt(0) == Ta
        ? e.charAt(1) == "." && e == Gc
          ? ((n = n === void 0 ? !0 : !!n), this.disableAnimations(i, n))
          : this.engine.process(this.namespaceId, i, e.slice(1), n)
        : this.delegate.setProperty(i, e, n);
    }
    listen(i, e, n) {
      if (e.charAt(0) == Ta) {
        let a = dg(i),
          s = e.slice(1),
          r = "";
        return (
          s.charAt(0) != Ta && ([s, r] = pg(s)),
          this.engine.listen(this.namespaceId, a, s, r, (l) => {
            let p = l._data || -1;
            this.factory.scheduleListenerCallback(p, n, l);
          })
        );
      }
      return this.delegate.listen(i, e, n);
    }
  };
function dg(t) {
  switch (t) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return t;
  }
}
function pg(t) {
  let i = t.indexOf("."),
    e = t.substring(0, i),
    n = t.slice(i + 1);
  return [e, n];
}
var Fa = class {
  constructor(i, e, n) {
    (this.delegate = i),
      (this.engine = e),
      (this._zone = n),
      (this._currentId = 0),
      (this._microtaskId = 1),
      (this._animationCallbacksBuffer = []),
      (this._rendererCache = new Map()),
      (this._cdRecurDepth = 0),
      (e.onRemovalComplete = (a, s) => {
        let r = s?.parentNode(a);
        r && s.removeChild(r, a);
      });
  }
  createRenderer(i, e) {
    let n = "",
      a = this.delegate.createRenderer(i, e);
    if (!i || !e?.data?.animation) {
      let h = this._rendererCache,
        x = h.get(a);
      if (!x) {
        let v = () => h.delete(a);
        (x = new Ia(n, a, this.engine, v)), h.set(a, x);
      }
      return x;
    }
    let s = e.id,
      r = e.id + "-" + this._currentId;
    this._currentId++, this.engine.register(r, i);
    let l = (h) => {
      Array.isArray(h)
        ? h.forEach(l)
        : this.engine.registerTrigger(s, r, i, h.name, h);
    };
    return e.data.animation.forEach(l), new gr(this, r, a, this.engine);
  }
  begin() {
    this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  scheduleListenerCallback(i, e, n) {
    if (i >= 0 && i < this._microtaskId) {
      this._zone.run(() => e(n));
      return;
    }
    let a = this._animationCallbacksBuffer;
    a.length == 0 &&
      queueMicrotask(() => {
        this._zone.run(() => {
          a.forEach((s) => {
            let [r, l] = s;
            r(l);
          }),
            (this._animationCallbacksBuffer = []);
        });
      }),
      a.push([e, n]);
  }
  end() {
    this._cdRecurDepth--,
      this._cdRecurDepth == 0 &&
        this._zone.runOutsideAngular(() => {
          this._scheduleCountTask(), this.engine.flush(this._microtaskId);
        }),
      this.delegate.end && this.delegate.end();
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
};
var mg = (() => {
  class t extends zi {
    constructor(e, n, a) {
      super(e, n, a, oi(Ro, { optional: !0 }));
    }
    ngOnDestroy() {
      this.flush();
    }
    static {
      this.ɵfac = function (n) {
        return new (n || t)(We(Oi), We(gi), We(fi));
      };
    }
    static {
      this.ɵprov = Me({ token: t, factory: t.ɵfac });
    }
  }
  return t;
})();
function ug() {
  return new Aa();
}
function gg(t, i, e) {
  return new Fa(t, i, e);
}
var $c = [
    { provide: fi, useFactory: ug },
    { provide: zi, useClass: mg },
    { provide: zo, useFactory: gg, deps: [Jo, zi, cn] },
  ],
  Wc = [
    { provide: gi, useFactory: () => new Pa() },
    { provide: Ms, useValue: "BrowserAnimations" },
    ...$c,
  ],
  fg = [
    { provide: gi, useClass: vr },
    { provide: Ms, useValue: "NoopAnimations" },
    ...$c,
  ],
  jc = (() => {
    class t {
      static withConfig(e) {
        return { ngModule: t, providers: e.disableAnimations ? fg : Wc };
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵmod = ee({ type: t });
      }
      static {
        this.ɵinj = J({ providers: Wc, imports: [ia] });
      }
    }
    return t;
  })();
var Xc = (() => {
  class t {
    http;
    prefix;
    suffix;
    constructor(e, n = "/assets/i18n/", a = ".json") {
      (this.http = e), (this.prefix = n), (this.suffix = a);
    }
    getTranslation(e) {
      return this.http.get(`${this.prefix}${e}${this.suffix}`);
    }
    static ɵfac = function (n) {
      return new (n || t)(We(bt), We(String), We(String));
    };
    static ɵprov = Me({ token: t, factory: t.ɵfac });
  }
  return t;
})();
cm();
var Tn = class {
    attach(i) {
      return (this._attachedHost = i), i.attach(this);
    }
    detach() {
      let i = this._attachedHost;
      i != null && ((this._attachedHost = null), i.detach());
    }
    get isAttached() {
      return this._attachedHost != null;
    }
    setAttachedHost(i) {
      this._attachedHost = i;
    }
  },
  Sn = class extends Tn {
    constructor(i, e, n, a, s) {
      super(),
        (this.component = i),
        (this.viewContainerRef = e),
        (this.injector = n),
        (this.componentFactoryResolver = a),
        (this.projectableNodes = s);
    }
  },
  Tr = class extends Tn {
    constructor(i, e, n, a) {
      super(),
        (this.templateRef = i),
        (this.viewContainerRef = e),
        (this.context = n),
        (this.injector = a);
    }
    get origin() {
      return this.templateRef.elementRef;
    }
    attach(i, e = this.context) {
      return (this.context = e), super.attach(i);
    }
    detach() {
      return (this.context = void 0), super.detach();
    }
  },
  Sr = class extends Tn {
    constructor(i) {
      super(), (this.element = i instanceof we ? i.nativeElement : i);
    }
  },
  kr = class {
    constructor() {
      (this._isDisposed = !1), (this.attachDomPortal = null);
    }
    hasAttached() {
      return !!this._attachedPortal;
    }
    attach(i) {
      if (i instanceof Sn)
        return (this._attachedPortal = i), this.attachComponentPortal(i);
      if (i instanceof Tr)
        return (this._attachedPortal = i), this.attachTemplatePortal(i);
      if (this.attachDomPortal && i instanceof Sr)
        return (this._attachedPortal = i), this.attachDomPortal(i);
    }
    detach() {
      this._attachedPortal &&
        (this._attachedPortal.setAttachedHost(null),
        (this._attachedPortal = null)),
        this._invokeDisposeFn();
    }
    dispose() {
      this.hasAttached() && this.detach(),
        this._invokeDisposeFn(),
        (this._isDisposed = !0);
    }
    setDisposeFn(i) {
      this._disposeFn = i;
    }
    _invokeDisposeFn() {
      this._disposeFn && (this._disposeFn(), (this._disposeFn = null));
    }
  };
var Va = class extends kr {
  constructor(i, e, n, a, s) {
    super(),
      (this.outletElement = i),
      (this._componentFactoryResolver = e),
      (this._appRef = n),
      (this._defaultInjector = a),
      (this.attachDomPortal = (r) => {
        this._document;
        let l = r.element;
        l.parentNode;
        let p = this._document.createComment("dom-portal");
        l.parentNode.insertBefore(p, l),
          this.outletElement.appendChild(l),
          (this._attachedPortal = r),
          super.setDisposeFn(() => {
            p.parentNode && p.parentNode.replaceChild(l, p);
          });
      }),
      (this._document = s);
  }
  attachComponentPortal(i) {
    let n = (
        i.componentFactoryResolver || this._componentFactoryResolver
      ).resolveComponentFactory(i.component),
      a;
    return (
      i.viewContainerRef
        ? ((a = i.viewContainerRef.createComponent(
            n,
            i.viewContainerRef.length,
            i.injector || i.viewContainerRef.injector,
            i.projectableNodes || void 0
          )),
          this.setDisposeFn(() => a.destroy()))
        : ((a = n.create(i.injector || this._defaultInjector || ln.NULL)),
          this._appRef.attachView(a.hostView),
          this.setDisposeFn(() => {
            this._appRef.viewCount > 0 && this._appRef.detachView(a.hostView),
              a.destroy();
          })),
      this.outletElement.appendChild(this._getComponentRootNode(a)),
      (this._attachedPortal = i),
      a
    );
  }
  attachTemplatePortal(i) {
    let e = i.viewContainerRef,
      n = e.createEmbeddedView(i.templateRef, i.context, {
        injector: i.injector,
      });
    return (
      n.rootNodes.forEach((a) => this.outletElement.appendChild(a)),
      n.detectChanges(),
      this.setDisposeFn(() => {
        let a = e.indexOf(n);
        a !== -1 && e.remove(a);
      }),
      (this._attachedPortal = i),
      n
    );
  }
  dispose() {
    super.dispose(), this.outletElement.remove();
  }
  _getComponentRootNode(i) {
    return i.hostView.rootNodes[0];
  }
};
var Ba = "http://www.w3.org/1999/xhtml",
  Ar = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: Ba,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
  };
function Rt(t) {
  var i = (t += ""),
    e = i.indexOf(":");
  return (
    e >= 0 && (i = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)),
    Ar.hasOwnProperty(i) ? { space: Ar[i], local: t } : t
  );
}
function _g(t) {
  return function () {
    var i = this.ownerDocument,
      e = this.namespaceURI;
    return e === Ba && i.documentElement.namespaceURI === Ba
      ? i.createElement(t)
      : i.createElementNS(e, t);
  };
}
function xg(t) {
  return function () {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Na(t) {
  var i = Rt(t);
  return (i.local ? xg : _g)(i);
}
function vg() {}
function _i(t) {
  return t == null
    ? vg
    : function () {
        return this.querySelector(t);
      };
}
function qc(t) {
  typeof t != "function" && (t = _i(t));
  for (var i = this._groups, e = i.length, n = new Array(e), a = 0; a < e; ++a)
    for (
      var s = i[a], r = s.length, l = (n[a] = new Array(r)), p, h, x = 0;
      x < r;
      ++x
    )
      (p = s[x]) &&
        (h = t.call(p, p.__data__, x, s)) &&
        ("__data__" in p && (h.__data__ = p.__data__), (l[x] = h));
  return new _e(n, this._parents);
}
function Mr(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function yg() {
  return [];
}
function kn(t) {
  return t == null
    ? yg
    : function () {
        return this.querySelectorAll(t);
      };
}
function bg(t) {
  return function () {
    return Mr(t.apply(this, arguments));
  };
}
function Yc(t) {
  typeof t == "function" ? (t = bg(t)) : (t = kn(t));
  for (var i = this._groups, e = i.length, n = [], a = [], s = 0; s < e; ++s)
    for (var r = i[s], l = r.length, p, h = 0; h < l; ++h)
      (p = r[h]) && (n.push(t.call(p, p.__data__, h, r)), a.push(p));
  return new _e(n, a);
}
function An(t) {
  return function () {
    return this.matches(t);
  };
}
function Ra(t) {
  return function (i) {
    return i.matches(t);
  };
}
var Cg = Array.prototype.find;
function wg(t) {
  return function () {
    return Cg.call(this.children, t);
  };
}
function Tg() {
  return this.firstElementChild;
}
function Uc(t) {
  return this.select(t == null ? Tg : wg(typeof t == "function" ? t : Ra(t)));
}
var Sg = Array.prototype.filter;
function kg() {
  return Array.from(this.children);
}
function Ag(t) {
  return function () {
    return Sg.call(this.children, t);
  };
}
function Qc(t) {
  return this.selectAll(
    t == null ? kg : Ag(typeof t == "function" ? t : Ra(t))
  );
}
function Kc(t) {
  typeof t != "function" && (t = An(t));
  for (var i = this._groups, e = i.length, n = new Array(e), a = 0; a < e; ++a)
    for (var s = i[a], r = s.length, l = (n[a] = []), p, h = 0; h < r; ++h)
      (p = s[h]) && t.call(p, p.__data__, h, s) && l.push(p);
  return new _e(n, this._parents);
}
function Ha(t) {
  return new Array(t.length);
}
function Zc() {
  return new _e(this._enter || this._groups.map(Ha), this._parents);
}
function Mn(t, i) {
  (this.ownerDocument = t.ownerDocument),
    (this.namespaceURI = t.namespaceURI),
    (this._next = null),
    (this._parent = t),
    (this.__data__ = i);
}
Mn.prototype = {
  constructor: Mn,
  appendChild: function (t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function (t, i) {
    return this._parent.insertBefore(t, i);
  },
  querySelector: function (t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function (t) {
    return this._parent.querySelectorAll(t);
  },
};
function Jc(t) {
  return function () {
    return t;
  };
}
function Mg(t, i, e, n, a, s) {
  for (var r = 0, l, p = i.length, h = s.length; r < h; ++r)
    (l = i[r]) ? ((l.__data__ = s[r]), (n[r] = l)) : (e[r] = new Mn(t, s[r]));
  for (; r < p; ++r) (l = i[r]) && (a[r] = l);
}
function Lg(t, i, e, n, a, s, r) {
  var l,
    p,
    h = new Map(),
    x = i.length,
    v = s.length,
    b = new Array(x),
    C;
  for (l = 0; l < x; ++l)
    (p = i[l]) &&
      ((b[l] = C = r.call(p, p.__data__, l, i) + ""),
      h.has(C) ? (a[l] = p) : h.set(C, p));
  for (l = 0; l < v; ++l)
    (C = r.call(t, s[l], l, s) + ""),
      (p = h.get(C))
        ? ((n[l] = p), (p.__data__ = s[l]), h.delete(C))
        : (e[l] = new Mn(t, s[l]));
  for (l = 0; l < x; ++l) (p = i[l]) && h.get(b[l]) === p && (a[l] = p);
}
function Dg(t) {
  return t.__data__;
}
function ed(t, i) {
  if (!arguments.length) return Array.from(this, Dg);
  var e = i ? Lg : Mg,
    n = this._parents,
    a = this._groups;
  typeof t != "function" && (t = Jc(t));
  for (
    var s = a.length,
      r = new Array(s),
      l = new Array(s),
      p = new Array(s),
      h = 0;
    h < s;
    ++h
  ) {
    var x = n[h],
      v = a[h],
      b = v.length,
      C = Eg(t.call(x, x && x.__data__, h, n)),
      k = C.length,
      D = (l[h] = new Array(k)),
      B = (r[h] = new Array(k)),
      ne = (p[h] = new Array(b));
    e(x, v, D, B, ne, C, i);
    for (var re = 0, oe = 0, he, ue; re < k; ++re)
      if ((he = D[re])) {
        for (re >= oe && (oe = re + 1); !(ue = B[oe]) && ++oe < k; );
        he._next = ue || null;
      }
  }
  return (r = new _e(r, n)), (r._enter = l), (r._exit = p), r;
}
function Eg(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function td() {
  return new _e(this._exit || this._groups.map(Ha), this._parents);
}
function id(t, i, e) {
  var n = this.enter(),
    a = this,
    s = this.exit();
  return (
    typeof t == "function"
      ? ((n = t(n)), n && (n = n.selection()))
      : (n = n.append(t + "")),
    i != null && ((a = i(a)), a && (a = a.selection())),
    e == null ? s.remove() : e(s),
    n && a ? n.merge(a).order() : a
  );
}
function nd(t) {
  for (
    var i = t.selection ? t.selection() : t,
      e = this._groups,
      n = i._groups,
      a = e.length,
      s = n.length,
      r = Math.min(a, s),
      l = new Array(a),
      p = 0;
    p < r;
    ++p
  )
    for (
      var h = e[p], x = n[p], v = h.length, b = (l[p] = new Array(v)), C, k = 0;
      k < v;
      ++k
    )
      (C = h[k] || x[k]) && (b[k] = C);
  for (; p < a; ++p) l[p] = e[p];
  return new _e(l, this._parents);
}
function ad() {
  for (var t = this._groups, i = -1, e = t.length; ++i < e; )
    for (var n = t[i], a = n.length - 1, s = n[a], r; --a >= 0; )
      (r = n[a]) &&
        (s &&
          r.compareDocumentPosition(s) ^ 4 &&
          s.parentNode.insertBefore(r, s),
        (s = r));
  return this;
}
function sd(t) {
  t || (t = Og);
  function i(v, b) {
    return v && b ? t(v.__data__, b.__data__) : !v - !b;
  }
  for (
    var e = this._groups, n = e.length, a = new Array(n), s = 0;
    s < n;
    ++s
  ) {
    for (
      var r = e[s], l = r.length, p = (a[s] = new Array(l)), h, x = 0;
      x < l;
      ++x
    )
      (h = r[x]) && (p[x] = h);
    p.sort(i);
  }
  return new _e(a, this._parents).order();
}
function Og(t, i) {
  return t < i ? -1 : t > i ? 1 : t >= i ? 0 : NaN;
}
function rd() {
  var t = arguments[0];
  return (arguments[0] = this), t.apply(null, arguments), this;
}
function od() {
  return Array.from(this);
}
function ld() {
  for (var t = this._groups, i = 0, e = t.length; i < e; ++i)
    for (var n = t[i], a = 0, s = n.length; a < s; ++a) {
      var r = n[a];
      if (r) return r;
    }
  return null;
}
function cd() {
  let t = 0;
  for (let i of this) ++t;
  return t;
}
function dd() {
  return !this.node();
}
function pd(t) {
  for (var i = this._groups, e = 0, n = i.length; e < n; ++e)
    for (var a = i[e], s = 0, r = a.length, l; s < r; ++s)
      (l = a[s]) && t.call(l, l.__data__, s, a);
  return this;
}
function Pg(t) {
  return function () {
    this.removeAttribute(t);
  };
}
function Ig(t) {
  return function () {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Fg(t, i) {
  return function () {
    this.setAttribute(t, i);
  };
}
function Vg(t, i) {
  return function () {
    this.setAttributeNS(t.space, t.local, i);
  };
}
function Bg(t, i) {
  return function () {
    var e = i.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Ng(t, i) {
  return function () {
    var e = i.apply(this, arguments);
    e == null
      ? this.removeAttributeNS(t.space, t.local)
      : this.setAttributeNS(t.space, t.local, e);
  };
}
function hd(t, i) {
  var e = Rt(t);
  if (arguments.length < 2) {
    var n = this.node();
    return e.local ? n.getAttributeNS(e.space, e.local) : n.getAttribute(e);
  }
  return this.each(
    (i == null
      ? e.local
        ? Ig
        : Pg
      : typeof i == "function"
      ? e.local
        ? Ng
        : Bg
      : e.local
      ? Vg
      : Fg)(e, i)
  );
}
function za(t) {
  return (
    (t.ownerDocument && t.ownerDocument.defaultView) ||
    (t.document && t) ||
    t.defaultView
  );
}
function Rg(t) {
  return function () {
    this.style.removeProperty(t);
  };
}
function Hg(t, i, e) {
  return function () {
    this.style.setProperty(t, i, e);
  };
}
function zg(t, i, e) {
  return function () {
    var n = i.apply(this, arguments);
    n == null ? this.style.removeProperty(t) : this.style.setProperty(t, n, e);
  };
}
function md(t, i, e) {
  return arguments.length > 1
    ? this.each(
        (i == null ? Rg : typeof i == "function" ? zg : Hg)(t, i, e ?? "")
      )
    : Qt(this.node(), t);
}
function Qt(t, i) {
  return (
    t.style.getPropertyValue(i) ||
    za(t).getComputedStyle(t, null).getPropertyValue(i)
  );
}
function Gg(t) {
  return function () {
    delete this[t];
  };
}
function Wg(t, i) {
  return function () {
    this[t] = i;
  };
}
function $g(t, i) {
  return function () {
    var e = i.apply(this, arguments);
    e == null ? delete this[t] : (this[t] = e);
  };
}
function ud(t, i) {
  return arguments.length > 1
    ? this.each((i == null ? Gg : typeof i == "function" ? $g : Wg)(t, i))
    : this.node()[t];
}
function gd(t) {
  return t.trim().split(/^|\s+/);
}
function Lr(t) {
  return t.classList || new fd(t);
}
function fd(t) {
  (this._node = t), (this._names = gd(t.getAttribute("class") || ""));
}
fd.prototype = {
  add: function (t) {
    var i = this._names.indexOf(t);
    i < 0 &&
      (this._names.push(t),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function (t) {
    var i = this._names.indexOf(t);
    i >= 0 &&
      (this._names.splice(i, 1),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function (t) {
    return this._names.indexOf(t) >= 0;
  },
};
function _d(t, i) {
  for (var e = Lr(t), n = -1, a = i.length; ++n < a; ) e.add(i[n]);
}
function xd(t, i) {
  for (var e = Lr(t), n = -1, a = i.length; ++n < a; ) e.remove(i[n]);
}
function jg(t) {
  return function () {
    _d(this, t);
  };
}
function Xg(t) {
  return function () {
    xd(this, t);
  };
}
function qg(t, i) {
  return function () {
    (i.apply(this, arguments) ? _d : xd)(this, t);
  };
}
function vd(t, i) {
  var e = gd(t + "");
  if (arguments.length < 2) {
    for (var n = Lr(this.node()), a = -1, s = e.length; ++a < s; )
      if (!n.contains(e[a])) return !1;
    return !0;
  }
  return this.each((typeof i == "function" ? qg : i ? jg : Xg)(e, i));
}
function Yg() {
  this.textContent = "";
}
function Ug(t) {
  return function () {
    this.textContent = t;
  };
}
function Qg(t) {
  return function () {
    var i = t.apply(this, arguments);
    this.textContent = i ?? "";
  };
}
function yd(t) {
  return arguments.length
    ? this.each(t == null ? Yg : (typeof t == "function" ? Qg : Ug)(t))
    : this.node().textContent;
}
function Kg() {
  this.innerHTML = "";
}
function Zg(t) {
  return function () {
    this.innerHTML = t;
  };
}
function Jg(t) {
  return function () {
    var i = t.apply(this, arguments);
    this.innerHTML = i ?? "";
  };
}
function bd(t) {
  return arguments.length
    ? this.each(t == null ? Kg : (typeof t == "function" ? Jg : Zg)(t))
    : this.node().innerHTML;
}
function e0() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Cd() {
  return this.each(e0);
}
function t0() {
  this.previousSibling &&
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function wd() {
  return this.each(t0);
}
function Td(t) {
  var i = typeof t == "function" ? t : Na(t);
  return this.select(function () {
    return this.appendChild(i.apply(this, arguments));
  });
}
function i0() {
  return null;
}
function Sd(t, i) {
  var e = typeof t == "function" ? t : Na(t),
    n = i == null ? i0 : typeof i == "function" ? i : _i(i);
  return this.select(function () {
    return this.insertBefore(
      e.apply(this, arguments),
      n.apply(this, arguments) || null
    );
  });
}
function n0() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function kd() {
  return this.each(n0);
}
function a0() {
  var t = this.cloneNode(!1),
    i = this.parentNode;
  return i ? i.insertBefore(t, this.nextSibling) : t;
}
function s0() {
  var t = this.cloneNode(!0),
    i = this.parentNode;
  return i ? i.insertBefore(t, this.nextSibling) : t;
}
function Ad(t) {
  return this.select(t ? s0 : a0);
}
function Md(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function r0(t) {
  return function (i) {
    t.call(this, i, this.__data__);
  };
}
function o0(t) {
  return t
    .trim()
    .split(/^|\s+/)
    .map(function (i) {
      var e = "",
        n = i.indexOf(".");
      return (
        n >= 0 && ((e = i.slice(n + 1)), (i = i.slice(0, n))),
        { type: i, name: e }
      );
    });
}
function l0(t) {
  return function () {
    var i = this.__on;
    if (i) {
      for (var e = 0, n = -1, a = i.length, s; e < a; ++e)
        (s = i[e]),
          (!t.type || s.type === t.type) && s.name === t.name
            ? this.removeEventListener(s.type, s.listener, s.options)
            : (i[++n] = s);
      ++n ? (i.length = n) : delete this.__on;
    }
  };
}
function c0(t, i, e) {
  return function () {
    var n = this.__on,
      a,
      s = r0(i);
    if (n) {
      for (var r = 0, l = n.length; r < l; ++r)
        if ((a = n[r]).type === t.type && a.name === t.name) {
          this.removeEventListener(a.type, a.listener, a.options),
            this.addEventListener(a.type, (a.listener = s), (a.options = e)),
            (a.value = i);
          return;
        }
    }
    this.addEventListener(t.type, s, e),
      (a = { type: t.type, name: t.name, value: i, listener: s, options: e }),
      n ? n.push(a) : (this.__on = [a]);
  };
}
function Ld(t, i, e) {
  var n = o0(t + ""),
    a,
    s = n.length,
    r;
  if (arguments.length < 2) {
    var l = this.node().__on;
    if (l) {
      for (var p = 0, h = l.length, x; p < h; ++p)
        for (a = 0, x = l[p]; a < s; ++a)
          if ((r = n[a]).type === x.type && r.name === x.name) return x.value;
    }
    return;
  }
  for (l = i ? c0 : l0, a = 0; a < s; ++a) this.each(l(n[a], i, e));
  return this;
}
function Dd(t, i, e) {
  var n = za(t),
    a = n.CustomEvent;
  typeof a == "function"
    ? (a = new a(i, e))
    : ((a = n.document.createEvent("Event")),
      e
        ? (a.initEvent(i, e.bubbles, e.cancelable), (a.detail = e.detail))
        : a.initEvent(i, !1, !1)),
    t.dispatchEvent(a);
}
function d0(t, i) {
  return function () {
    return Dd(this, t, i);
  };
}
function p0(t, i) {
  return function () {
    return Dd(this, t, i.apply(this, arguments));
  };
}
function Ed(t, i) {
  return this.each((typeof i == "function" ? p0 : d0)(t, i));
}
function* Od() {
  for (var t = this._groups, i = 0, e = t.length; i < e; ++i)
    for (var n = t[i], a = 0, s = n.length, r; a < s; ++a)
      (r = n[a]) && (yield r);
}
var Dr = [null];
function _e(t, i) {
  (this._groups = t), (this._parents = i);
}
function Pd() {
  return new _e([[document.documentElement]], Dr);
}
function h0() {
  return this;
}
_e.prototype = Pd.prototype = {
  constructor: _e,
  select: qc,
  selectAll: Yc,
  selectChild: Uc,
  selectChildren: Qc,
  filter: Kc,
  data: ed,
  enter: Zc,
  exit: td,
  join: id,
  merge: nd,
  selection: h0,
  order: ad,
  sort: sd,
  call: rd,
  nodes: od,
  node: ld,
  size: cd,
  empty: dd,
  each: pd,
  attr: hd,
  style: md,
  property: ud,
  classed: vd,
  text: yd,
  html: bd,
  raise: Cd,
  lower: wd,
  append: Td,
  insert: Sd,
  remove: kd,
  clone: Ad,
  datum: Md,
  on: Ld,
  dispatch: Ed,
  [Symbol.iterator]: Od,
};
var Ht = Pd;
function Er(t) {
  return typeof t == "string"
    ? new _e([[document.querySelector(t)]], [document.documentElement])
    : new _e([[t]], Dr);
}
var m0 = { value: () => {} };
function Fd() {
  for (var t = 0, i = arguments.length, e = {}, n; t < i; ++t) {
    if (!(n = arguments[t] + "") || n in e || /[\s.]/.test(n))
      throw new Error("illegal type: " + n);
    e[n] = [];
  }
  return new Ga(e);
}
function Ga(t) {
  this._ = t;
}
function u0(t, i) {
  return t
    .trim()
    .split(/^|\s+/)
    .map(function (e) {
      var n = "",
        a = e.indexOf(".");
      if (
        (a >= 0 && ((n = e.slice(a + 1)), (e = e.slice(0, a))),
        e && !i.hasOwnProperty(e))
      )
        throw new Error("unknown type: " + e);
      return { type: e, name: n };
    });
}
Ga.prototype = Fd.prototype = {
  constructor: Ga,
  on: function (t, i) {
    var e = this._,
      n = u0(t + "", e),
      a,
      s = -1,
      r = n.length;
    if (arguments.length < 2) {
      for (; ++s < r; )
        if ((a = (t = n[s]).type) && (a = g0(e[a], t.name))) return a;
      return;
    }
    if (i != null && typeof i != "function")
      throw new Error("invalid callback: " + i);
    for (; ++s < r; )
      if ((a = (t = n[s]).type)) e[a] = Id(e[a], t.name, i);
      else if (i == null) for (a in e) e[a] = Id(e[a], t.name, null);
    return this;
  },
  copy: function () {
    var t = {},
      i = this._;
    for (var e in i) t[e] = i[e].slice();
    return new Ga(t);
  },
  call: function (t, i) {
    if ((a = arguments.length - 2) > 0)
      for (var e = new Array(a), n = 0, a, s; n < a; ++n)
        e[n] = arguments[n + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (s = this._[t], n = 0, a = s.length; n < a; ++n) s[n].value.apply(i, e);
  },
  apply: function (t, i, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var n = this._[t], a = 0, s = n.length; a < s; ++a)
      n[a].value.apply(i, e);
  },
};
function g0(t, i) {
  for (var e = 0, n = t.length, a; e < n; ++e)
    if ((a = t[e]).name === i) return a.value;
}
function Id(t, i, e) {
  for (var n = 0, a = t.length; n < a; ++n)
    if (t[n].name === i) {
      (t[n] = m0), (t = t.slice(0, n).concat(t.slice(n + 1)));
      break;
    }
  return e != null && t.push({ name: i, value: e }), t;
}
var Or = Fd;
function Wa(t, i, e) {
  (t.prototype = i.prototype = e), (e.constructor = t);
}
function Pr(t, i) {
  var e = Object.create(t.prototype);
  for (var n in i) e[n] = i[n];
  return e;
}
function En() {}
var Ln = 0.7,
  Xa = 1 / Ln,
  Gi = "\\s*([+-]?\\d+)\\s*",
  Dn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  Lt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  f0 = /^#([0-9a-f]{3,8})$/,
  _0 = new RegExp(`^rgb\\(${Gi},${Gi},${Gi}\\)$`),
  x0 = new RegExp(`^rgb\\(${Lt},${Lt},${Lt}\\)$`),
  v0 = new RegExp(`^rgba\\(${Gi},${Gi},${Gi},${Dn}\\)$`),
  y0 = new RegExp(`^rgba\\(${Lt},${Lt},${Lt},${Dn}\\)$`),
  b0 = new RegExp(`^hsl\\(${Dn},${Lt},${Lt}\\)$`),
  C0 = new RegExp(`^hsla\\(${Dn},${Lt},${Lt},${Dn}\\)$`),
  Vd = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
Wa(En, ft, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Bd,
  formatHex: Bd,
  formatHex8: w0,
  formatHsl: T0,
  formatRgb: Nd,
  toString: Nd,
});
function Bd() {
  return this.rgb().formatHex();
}
function w0() {
  return this.rgb().formatHex8();
}
function T0() {
  return $d(this).formatHsl();
}
function Nd() {
  return this.rgb().formatRgb();
}
function ft(t) {
  var i, e;
  return (
    (t = (t + "").trim().toLowerCase()),
    (i = f0.exec(t))
      ? ((e = i[1].length),
        (i = parseInt(i[1], 16)),
        e === 6
          ? Rd(i)
          : e === 3
          ? new Ue(
              ((i >> 8) & 15) | ((i >> 4) & 240),
              ((i >> 4) & 15) | (i & 240),
              ((i & 15) << 4) | (i & 15),
              1
            )
          : e === 8
          ? $a(
              (i >> 24) & 255,
              (i >> 16) & 255,
              (i >> 8) & 255,
              (i & 255) / 255
            )
          : e === 4
          ? $a(
              ((i >> 12) & 15) | ((i >> 8) & 240),
              ((i >> 8) & 15) | ((i >> 4) & 240),
              ((i >> 4) & 15) | (i & 240),
              (((i & 15) << 4) | (i & 15)) / 255
            )
          : null)
      : (i = _0.exec(t))
      ? new Ue(i[1], i[2], i[3], 1)
      : (i = x0.exec(t))
      ? new Ue((i[1] * 255) / 100, (i[2] * 255) / 100, (i[3] * 255) / 100, 1)
      : (i = v0.exec(t))
      ? $a(i[1], i[2], i[3], i[4])
      : (i = y0.exec(t))
      ? $a((i[1] * 255) / 100, (i[2] * 255) / 100, (i[3] * 255) / 100, i[4])
      : (i = b0.exec(t))
      ? Gd(i[1], i[2] / 100, i[3] / 100, 1)
      : (i = C0.exec(t))
      ? Gd(i[1], i[2] / 100, i[3] / 100, i[4])
      : Vd.hasOwnProperty(t)
      ? Rd(Vd[t])
      : t === "transparent"
      ? new Ue(NaN, NaN, NaN, 0)
      : null
  );
}
function Rd(t) {
  return new Ue((t >> 16) & 255, (t >> 8) & 255, t & 255, 1);
}
function $a(t, i, e, n) {
  return n <= 0 && (t = i = e = NaN), new Ue(t, i, e, n);
}
function S0(t) {
  return (
    t instanceof En || (t = ft(t)),
    t ? ((t = t.rgb()), new Ue(t.r, t.g, t.b, t.opacity)) : new Ue()
  );
}
function Wi(t, i, e, n) {
  return arguments.length === 1 ? S0(t) : new Ue(t, i, e, n ?? 1);
}
function Ue(t, i, e, n) {
  (this.r = +t), (this.g = +i), (this.b = +e), (this.opacity = +n);
}
Wa(
  Ue,
  Wi,
  Pr(En, {
    brighter(t) {
      return (
        (t = t == null ? Xa : Math.pow(Xa, t)),
        new Ue(this.r * t, this.g * t, this.b * t, this.opacity)
      );
    },
    darker(t) {
      return (
        (t = t == null ? Ln : Math.pow(Ln, t)),
        new Ue(this.r * t, this.g * t, this.b * t, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Ue(vi(this.r), vi(this.g), vi(this.b), qa(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: Hd,
    formatHex: Hd,
    formatHex8: k0,
    formatRgb: zd,
    toString: zd,
  })
);
function Hd() {
  return `#${xi(this.r)}${xi(this.g)}${xi(this.b)}`;
}
function k0() {
  return `#${xi(this.r)}${xi(this.g)}${xi(this.b)}${xi(
    (isNaN(this.opacity) ? 1 : this.opacity) * 255
  )}`;
}
function zd() {
  let t = qa(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${vi(this.r)}, ${vi(this.g)}, ${vi(
    this.b
  )}${t === 1 ? ")" : `, ${t})`}`;
}
function qa(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function vi(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function xi(t) {
  return (t = vi(t)), (t < 16 ? "0" : "") + t.toString(16);
}
function Gd(t, i, e, n) {
  return (
    n <= 0
      ? (t = i = e = NaN)
      : e <= 0 || e >= 1
      ? (t = i = NaN)
      : i <= 0 && (t = NaN),
    new gt(t, i, e, n)
  );
}
function $d(t) {
  if (t instanceof gt) return new gt(t.h, t.s, t.l, t.opacity);
  if ((t instanceof En || (t = ft(t)), !t)) return new gt();
  if (t instanceof gt) return t;
  t = t.rgb();
  var i = t.r / 255,
    e = t.g / 255,
    n = t.b / 255,
    a = Math.min(i, e, n),
    s = Math.max(i, e, n),
    r = NaN,
    l = s - a,
    p = (s + a) / 2;
  return (
    l
      ? (i === s
          ? (r = (e - n) / l + (e < n) * 6)
          : e === s
          ? (r = (n - i) / l + 2)
          : (r = (i - e) / l + 4),
        (l /= p < 0.5 ? s + a : 2 - s - a),
        (r *= 60))
      : (l = p > 0 && p < 1 ? 0 : r),
    new gt(r, l, p, t.opacity)
  );
}
function jd(t, i, e, n) {
  return arguments.length === 1 ? $d(t) : new gt(t, i, e, n ?? 1);
}
function gt(t, i, e, n) {
  (this.h = +t), (this.s = +i), (this.l = +e), (this.opacity = +n);
}
Wa(
  gt,
  jd,
  Pr(En, {
    brighter(t) {
      return (
        (t = t == null ? Xa : Math.pow(Xa, t)),
        new gt(this.h, this.s, this.l * t, this.opacity)
      );
    },
    darker(t) {
      return (
        (t = t == null ? Ln : Math.pow(Ln, t)),
        new gt(this.h, this.s, this.l * t, this.opacity)
      );
    },
    rgb() {
      var t = (this.h % 360) + (this.h < 0) * 360,
        i = isNaN(t) || isNaN(this.s) ? 0 : this.s,
        e = this.l,
        n = e + (e < 0.5 ? e : 1 - e) * i,
        a = 2 * e - n;
      return new Ue(
        Ir(t >= 240 ? t - 240 : t + 120, a, n),
        Ir(t, a, n),
        Ir(t < 120 ? t + 240 : t - 120, a, n),
        this.opacity
      );
    },
    clamp() {
      return new gt(Wd(this.h), ja(this.s), ja(this.l), qa(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      let t = qa(this.opacity);
      return `${t === 1 ? "hsl(" : "hsla("}${Wd(this.h)}, ${
        ja(this.s) * 100
      }%, ${ja(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
    },
  })
);
function Wd(t) {
  return (t = (t || 0) % 360), t < 0 ? t + 360 : t;
}
function ja(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Ir(t, i, e) {
  return (
    (t < 60
      ? i + ((e - i) * t) / 60
      : t < 180
      ? e
      : t < 240
      ? i + ((e - i) * (240 - t)) / 60
      : i) * 255
  );
}
function Fr(t, i, e, n, a) {
  var s = t * t,
    r = s * t;
  return (
    ((1 - 3 * t + 3 * s - r) * i +
      (4 - 6 * s + 3 * r) * e +
      (1 + 3 * t + 3 * s - 3 * r) * n +
      r * a) /
    6
  );
}
function Xd(t) {
  var i = t.length - 1;
  return function (e) {
    var n = e <= 0 ? (e = 0) : e >= 1 ? ((e = 1), i - 1) : Math.floor(e * i),
      a = t[n],
      s = t[n + 1],
      r = n > 0 ? t[n - 1] : 2 * a - s,
      l = n < i - 1 ? t[n + 2] : 2 * s - a;
    return Fr((e - n / i) * i, r, a, s, l);
  };
}
function qd(t) {
  var i = t.length;
  return function (e) {
    var n = Math.floor(((e %= 1) < 0 ? ++e : e) * i),
      a = t[(n + i - 1) % i],
      s = t[n % i],
      r = t[(n + 1) % i],
      l = t[(n + 2) % i];
    return Fr((e - n / i) * i, a, s, r, l);
  };
}
var On = (t) => () => t;
function A0(t, i) {
  return function (e) {
    return t + e * i;
  };
}
function M0(t, i, e) {
  return (
    (t = Math.pow(t, e)),
    (i = Math.pow(i, e) - t),
    (e = 1 / e),
    function (n) {
      return Math.pow(t + n * i, e);
    }
  );
}
function Yd(t) {
  return (t = +t) == 1
    ? Ya
    : function (i, e) {
        return e - i ? M0(i, e, t) : On(isNaN(i) ? e : i);
      };
}
function Ya(t, i) {
  var e = i - t;
  return e ? A0(t, e) : On(isNaN(t) ? i : t);
}
var yi = (function t(i) {
  var e = Yd(i);
  function n(a, s) {
    var r = e((a = Wi(a)).r, (s = Wi(s)).r),
      l = e(a.g, s.g),
      p = e(a.b, s.b),
      h = Ya(a.opacity, s.opacity);
    return function (x) {
      return (
        (a.r = r(x)), (a.g = l(x)), (a.b = p(x)), (a.opacity = h(x)), a + ""
      );
    };
  }
  return (n.gamma = t), n;
})(1);
function Ud(t) {
  return function (i) {
    var e = i.length,
      n = new Array(e),
      a = new Array(e),
      s = new Array(e),
      r,
      l;
    for (r = 0; r < e; ++r)
      (l = Wi(i[r])), (n[r] = l.r || 0), (a[r] = l.g || 0), (s[r] = l.b || 0);
    return (
      (n = t(n)),
      (a = t(a)),
      (s = t(s)),
      (l.opacity = 1),
      function (p) {
        return (l.r = n(p)), (l.g = a(p)), (l.b = s(p)), l + "";
      }
    );
  };
}
var L0 = Ud(Xd),
  D0 = Ud(qd);
function Qd(t, i) {
  i || (i = []);
  var e = t ? Math.min(i.length, t.length) : 0,
    n = i.slice(),
    a;
  return function (s) {
    for (a = 0; a < e; ++a) n[a] = t[a] * (1 - s) + i[a] * s;
    return n;
  };
}
function Kd(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Zd(t, i) {
  var e = i ? i.length : 0,
    n = t ? Math.min(e, t.length) : 0,
    a = new Array(n),
    s = new Array(e),
    r;
  for (r = 0; r < n; ++r) a[r] = bi(t[r], i[r]);
  for (; r < e; ++r) s[r] = i[r];
  return function (l) {
    for (r = 0; r < n; ++r) s[r] = a[r](l);
    return s;
  };
}
function Jd(t, i) {
  var e = new Date();
  return (
    (t = +t),
    (i = +i),
    function (n) {
      return e.setTime(t * (1 - n) + i * n), e;
    }
  );
}
function Oe(t, i) {
  return (
    (t = +t),
    (i = +i),
    function (e) {
      return t * (1 - e) + i * e;
    }
  );
}
function ep(t, i) {
  var e = {},
    n = {},
    a;
  (t === null || typeof t != "object") && (t = {}),
    (i === null || typeof i != "object") && (i = {});
  for (a in i) a in t ? (e[a] = bi(t[a], i[a])) : (n[a] = i[a]);
  return function (s) {
    for (a in e) n[a] = e[a](s);
    return n;
  };
}
var Br = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Vr = new RegExp(Br.source, "g");
function E0(t) {
  return function () {
    return t;
  };
}
function O0(t) {
  return function (i) {
    return t(i) + "";
  };
}
function Pn(t, i) {
  var e = (Br.lastIndex = Vr.lastIndex = 0),
    n,
    a,
    s,
    r = -1,
    l = [],
    p = [];
  for (t = t + "", i = i + ""; (n = Br.exec(t)) && (a = Vr.exec(i)); )
    (s = a.index) > e &&
      ((s = i.slice(e, s)), l[r] ? (l[r] += s) : (l[++r] = s)),
      (n = n[0]) === (a = a[0])
        ? l[r]
          ? (l[r] += a)
          : (l[++r] = a)
        : ((l[++r] = null), p.push({ i: r, x: Oe(n, a) })),
      (e = Vr.lastIndex);
  return (
    e < i.length && ((s = i.slice(e)), l[r] ? (l[r] += s) : (l[++r] = s)),
    l.length < 2
      ? p[0]
        ? O0(p[0].x)
        : E0(i)
      : ((i = p.length),
        function (h) {
          for (var x = 0, v; x < i; ++x) l[(v = p[x]).i] = v.x(h);
          return l.join("");
        })
  );
}
function bi(t, i) {
  var e = typeof i,
    n;
  return i == null || e === "boolean"
    ? On(i)
    : (e === "number"
        ? Oe
        : e === "string"
        ? (n = ft(i))
          ? ((i = n), yi)
          : Pn
        : i instanceof ft
        ? yi
        : i instanceof Date
        ? Jd
        : Kd(i)
        ? Qd
        : Array.isArray(i)
        ? Zd
        : (typeof i.valueOf != "function" && typeof i.toString != "function") ||
          isNaN(i)
        ? ep
        : Oe)(t, i);
}
function Nr(t, i) {
  return (
    (t = +t),
    (i = +i),
    function (e) {
      return Math.round(t * (1 - e) + i * e);
    }
  );
}
var tp = 180 / Math.PI,
  Ua = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
  };
function Rr(t, i, e, n, a, s) {
  var r, l, p;
  return (
    (r = Math.sqrt(t * t + i * i)) && ((t /= r), (i /= r)),
    (p = t * e + i * n) && ((e -= t * p), (n -= i * p)),
    (l = Math.sqrt(e * e + n * n)) && ((e /= l), (n /= l), (p /= l)),
    t * n < i * e && ((t = -t), (i = -i), (p = -p), (r = -r)),
    {
      translateX: a,
      translateY: s,
      rotate: Math.atan2(i, t) * tp,
      skewX: Math.atan(p) * tp,
      scaleX: r,
      scaleY: l,
    }
  );
}
var Qa;
function ip(t) {
  let i = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(
    t + ""
  );
  return i.isIdentity ? Ua : Rr(i.a, i.b, i.c, i.d, i.e, i.f);
}
function np(t) {
  return t == null
    ? Ua
    : (Qa || (Qa = document.createElementNS("http://www.w3.org/2000/svg", "g")),
      Qa.setAttribute("transform", t),
      (t = Qa.transform.baseVal.consolidate())
        ? ((t = t.matrix), Rr(t.a, t.b, t.c, t.d, t.e, t.f))
        : Ua);
}
function ap(t, i, e, n) {
  function a(h) {
    return h.length ? h.pop() + " " : "";
  }
  function s(h, x, v, b, C, k) {
    if (h !== v || x !== b) {
      var D = C.push("translate(", null, i, null, e);
      k.push({ i: D - 4, x: Oe(h, v) }, { i: D - 2, x: Oe(x, b) });
    } else (v || b) && C.push("translate(" + v + i + b + e);
  }
  function r(h, x, v, b) {
    h !== x
      ? (h - x > 180 ? (x += 360) : x - h > 180 && (h += 360),
        b.push({ i: v.push(a(v) + "rotate(", null, n) - 2, x: Oe(h, x) }))
      : x && v.push(a(v) + "rotate(" + x + n);
  }
  function l(h, x, v, b) {
    h !== x
      ? b.push({ i: v.push(a(v) + "skewX(", null, n) - 2, x: Oe(h, x) })
      : x && v.push(a(v) + "skewX(" + x + n);
  }
  function p(h, x, v, b, C, k) {
    if (h !== v || x !== b) {
      var D = C.push(a(C) + "scale(", null, ",", null, ")");
      k.push({ i: D - 4, x: Oe(h, v) }, { i: D - 2, x: Oe(x, b) });
    } else (v !== 1 || b !== 1) && C.push(a(C) + "scale(" + v + "," + b + ")");
  }
  return function (h, x) {
    var v = [],
      b = [];
    return (
      (h = t(h)),
      (x = t(x)),
      s(h.translateX, h.translateY, x.translateX, x.translateY, v, b),
      r(h.rotate, x.rotate, v, b),
      l(h.skewX, x.skewX, v, b),
      p(h.scaleX, h.scaleY, x.scaleX, x.scaleY, v, b),
      (h = x = null),
      function (C) {
        for (var k = -1, D = b.length, B; ++k < D; ) v[(B = b[k]).i] = B.x(C);
        return v.join("");
      }
    );
  };
}
var Hr = ap(ip, "px, ", "px)", "deg)"),
  zr = ap(np, ", ", ")", ")");
var $i = 0,
  Fn = 0,
  In = 0,
  rp = 1e3,
  Ka,
  Vn,
  Za = 0,
  Ci = 0,
  Ja = 0,
  Bn = typeof performance == "object" && performance.now ? performance : Date,
  op =
    typeof window == "object" && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (t) {
          setTimeout(t, 17);
        };
function Rn() {
  return Ci || (op(P0), (Ci = Bn.now() + Ja));
}
function P0() {
  Ci = 0;
}
function Nn() {
  this._call = this._time = this._next = null;
}
Nn.prototype = es.prototype = {
  constructor: Nn,
  restart: function (t, i, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    (e = (e == null ? Rn() : +e) + (i == null ? 0 : +i)),
      !this._next &&
        Vn !== this &&
        (Vn ? (Vn._next = this) : (Ka = this), (Vn = this)),
      (this._call = t),
      (this._time = e),
      Gr();
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), Gr());
  },
};
function es(t, i, e) {
  var n = new Nn();
  return n.restart(t, i, e), n;
}
function lp() {
  Rn(), ++$i;
  for (var t = Ka, i; t; )
    (i = Ci - t._time) >= 0 && t._call.call(void 0, i), (t = t._next);
  --$i;
}
function sp() {
  (Ci = (Za = Bn.now()) + Ja), ($i = Fn = 0);
  try {
    lp();
  } finally {
    ($i = 0), F0(), (Ci = 0);
  }
}
function I0() {
  var t = Bn.now(),
    i = t - Za;
  i > rp && ((Ja -= i), (Za = t));
}
function F0() {
  for (var t, i = Ka, e, n = 1 / 0; i; )
    i._call
      ? (n > i._time && (n = i._time), (t = i), (i = i._next))
      : ((e = i._next), (i._next = null), (i = t ? (t._next = e) : (Ka = e)));
  (Vn = t), Gr(n);
}
function Gr(t) {
  if (!$i) {
    Fn && (Fn = clearTimeout(Fn));
    var i = t - Ci;
    i > 24
      ? (t < 1 / 0 && (Fn = setTimeout(sp, t - Bn.now() - Ja)),
        In && (In = clearInterval(In)))
      : (In || ((Za = Bn.now()), (In = setInterval(I0, rp))), ($i = 1), op(sp));
  }
}
function ts(t, i, e) {
  var n = new Nn();
  return (
    (i = i == null ? 0 : +i),
    n.restart(
      (a) => {
        n.stop(), t(a + i);
      },
      i,
      e
    ),
    n
  );
}
var V0 = Or("start", "end", "cancel", "interrupt"),
  B0 = [],
  pp = 0,
  cp = 1,
  ns = 2,
  is = 3,
  dp = 4,
  as = 5,
  Hn = 6;
function Kt(t, i, e, n, a, s) {
  var r = t.__transition;
  if (!r) t.__transition = {};
  else if (e in r) return;
  N0(t, e, {
    name: i,
    index: n,
    group: a,
    on: V0,
    tween: B0,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: pp,
  });
}
function zn(t, i) {
  var e = be(t, i);
  if (e.state > pp) throw new Error("too late; already scheduled");
  return e;
}
function Pe(t, i) {
  var e = be(t, i);
  if (e.state > is) throw new Error("too late; already running");
  return e;
}
function be(t, i) {
  var e = t.__transition;
  if (!e || !(e = e[i])) throw new Error("transition not found");
  return e;
}
function N0(t, i, e) {
  var n = t.__transition,
    a;
  (n[i] = e), (e.timer = es(s, 0, e.time));
  function s(h) {
    (e.state = cp),
      e.timer.restart(r, e.delay, e.time),
      e.delay <= h && r(h - e.delay);
  }
  function r(h) {
    var x, v, b, C;
    if (e.state !== cp) return p();
    for (x in n)
      if (((C = n[x]), C.name === e.name)) {
        if (C.state === is) return ts(r);
        C.state === dp
          ? ((C.state = Hn),
            C.timer.stop(),
            C.on.call("interrupt", t, t.__data__, C.index, C.group),
            delete n[x])
          : +x < i &&
            ((C.state = Hn),
            C.timer.stop(),
            C.on.call("cancel", t, t.__data__, C.index, C.group),
            delete n[x]);
      }
    if (
      (ts(function () {
        e.state === is &&
          ((e.state = dp), e.timer.restart(l, e.delay, e.time), l(h));
      }),
      (e.state = ns),
      e.on.call("start", t, t.__data__, e.index, e.group),
      e.state === ns)
    ) {
      for (
        e.state = is, a = new Array((b = e.tween.length)), x = 0, v = -1;
        x < b;
        ++x
      )
        (C = e.tween[x].value.call(t, t.__data__, e.index, e.group)) &&
          (a[++v] = C);
      a.length = v + 1;
    }
  }
  function l(h) {
    for (
      var x =
          h < e.duration
            ? e.ease.call(null, h / e.duration)
            : (e.timer.restart(p), (e.state = as), 1),
        v = -1,
        b = a.length;
      ++v < b;

    )
      a[v].call(t, x);
    e.state === as && (e.on.call("end", t, t.__data__, e.index, e.group), p());
  }
  function p() {
    (e.state = Hn), e.timer.stop(), delete n[i];
    for (var h in n) return;
    delete t.__transition;
  }
}
function Wr(t, i) {
  var e = t.__transition,
    n,
    a,
    s = !0,
    r;
  if (e) {
    i = i == null ? null : i + "";
    for (r in e) {
      if ((n = e[r]).name !== i) {
        s = !1;
        continue;
      }
      (a = n.state > ns && n.state < as),
        (n.state = Hn),
        n.timer.stop(),
        n.on.call(a ? "interrupt" : "cancel", t, t.__data__, n.index, n.group),
        delete e[r];
    }
    s && delete t.__transition;
  }
}
function hp(t) {
  return this.each(function () {
    Wr(this, t);
  });
}
function R0(t, i) {
  var e, n;
  return function () {
    var a = Pe(this, t),
      s = a.tween;
    if (s !== e) {
      n = e = s;
      for (var r = 0, l = n.length; r < l; ++r)
        if (n[r].name === i) {
          (n = n.slice()), n.splice(r, 1);
          break;
        }
    }
    a.tween = n;
  };
}
function H0(t, i, e) {
  var n, a;
  if (typeof e != "function") throw new Error();
  return function () {
    var s = Pe(this, t),
      r = s.tween;
    if (r !== n) {
      a = (n = r).slice();
      for (var l = { name: i, value: e }, p = 0, h = a.length; p < h; ++p)
        if (a[p].name === i) {
          a[p] = l;
          break;
        }
      p === h && a.push(l);
    }
    s.tween = a;
  };
}
function mp(t, i) {
  var e = this._id;
  if (((t += ""), arguments.length < 2)) {
    for (var n = be(this.node(), e).tween, a = 0, s = n.length, r; a < s; ++a)
      if ((r = n[a]).name === t) return r.value;
    return null;
  }
  return this.each((i == null ? R0 : H0)(e, t, i));
}
function ji(t, i, e) {
  var n = t._id;
  return (
    t.each(function () {
      var a = Pe(this, n);
      (a.value || (a.value = {}))[i] = e.apply(this, arguments);
    }),
    function (a) {
      return be(a, n).value[i];
    }
  );
}
function ss(t, i) {
  var e;
  return (
    typeof i == "number"
      ? Oe
      : i instanceof ft
      ? yi
      : (e = ft(i))
      ? ((i = e), yi)
      : Pn
  )(t, i);
}
function z0(t) {
  return function () {
    this.removeAttribute(t);
  };
}
function G0(t) {
  return function () {
    this.removeAttributeNS(t.space, t.local);
  };
}
function W0(t, i, e) {
  var n,
    a = e + "",
    s;
  return function () {
    var r = this.getAttribute(t);
    return r === a ? null : r === n ? s : (s = i((n = r), e));
  };
}
function $0(t, i, e) {
  var n,
    a = e + "",
    s;
  return function () {
    var r = this.getAttributeNS(t.space, t.local);
    return r === a ? null : r === n ? s : (s = i((n = r), e));
  };
}
function j0(t, i, e) {
  var n, a, s;
  return function () {
    var r,
      l = e(this),
      p;
    return l == null
      ? void this.removeAttribute(t)
      : ((r = this.getAttribute(t)),
        (p = l + ""),
        r === p
          ? null
          : r === n && p === a
          ? s
          : ((a = p), (s = i((n = r), l))));
  };
}
function X0(t, i, e) {
  var n, a, s;
  return function () {
    var r,
      l = e(this),
      p;
    return l == null
      ? void this.removeAttributeNS(t.space, t.local)
      : ((r = this.getAttributeNS(t.space, t.local)),
        (p = l + ""),
        r === p
          ? null
          : r === n && p === a
          ? s
          : ((a = p), (s = i((n = r), l))));
  };
}
function up(t, i) {
  var e = Rt(t),
    n = e === "transform" ? zr : ss;
  return this.attrTween(
    t,
    typeof i == "function"
      ? (e.local ? X0 : j0)(e, n, ji(this, "attr." + t, i))
      : i == null
      ? (e.local ? G0 : z0)(e)
      : (e.local ? $0 : W0)(e, n, i)
  );
}
function q0(t, i) {
  return function (e) {
    this.setAttribute(t, i.call(this, e));
  };
}
function Y0(t, i) {
  return function (e) {
    this.setAttributeNS(t.space, t.local, i.call(this, e));
  };
}
function U0(t, i) {
  var e, n;
  function a() {
    var s = i.apply(this, arguments);
    return s !== n && (e = (n = s) && Y0(t, s)), e;
  }
  return (a._value = i), a;
}
function Q0(t, i) {
  var e, n;
  function a() {
    var s = i.apply(this, arguments);
    return s !== n && (e = (n = s) && q0(t, s)), e;
  }
  return (a._value = i), a;
}
function gp(t, i) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (i == null) return this.tween(e, null);
  if (typeof i != "function") throw new Error();
  var n = Rt(t);
  return this.tween(e, (n.local ? U0 : Q0)(n, i));
}
function K0(t, i) {
  return function () {
    zn(this, t).delay = +i.apply(this, arguments);
  };
}
function Z0(t, i) {
  return (
    (i = +i),
    function () {
      zn(this, t).delay = i;
    }
  );
}
function fp(t) {
  var i = this._id;
  return arguments.length
    ? this.each((typeof t == "function" ? K0 : Z0)(i, t))
    : be(this.node(), i).delay;
}
function J0(t, i) {
  return function () {
    Pe(this, t).duration = +i.apply(this, arguments);
  };
}
function ef(t, i) {
  return (
    (i = +i),
    function () {
      Pe(this, t).duration = i;
    }
  );
}
function _p(t) {
  var i = this._id;
  return arguments.length
    ? this.each((typeof t == "function" ? J0 : ef)(i, t))
    : be(this.node(), i).duration;
}
function tf(t, i) {
  if (typeof i != "function") throw new Error();
  return function () {
    Pe(this, t).ease = i;
  };
}
function xp(t) {
  var i = this._id;
  return arguments.length ? this.each(tf(i, t)) : be(this.node(), i).ease;
}
function nf(t, i) {
  return function () {
    var e = i.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    Pe(this, t).ease = e;
  };
}
function vp(t) {
  if (typeof t != "function") throw new Error();
  return this.each(nf(this._id, t));
}
function yp(t) {
  typeof t != "function" && (t = An(t));
  for (var i = this._groups, e = i.length, n = new Array(e), a = 0; a < e; ++a)
    for (var s = i[a], r = s.length, l = (n[a] = []), p, h = 0; h < r; ++h)
      (p = s[h]) && t.call(p, p.__data__, h, s) && l.push(p);
  return new je(n, this._parents, this._name, this._id);
}
function bp(t) {
  if (t._id !== this._id) throw new Error();
  for (
    var i = this._groups,
      e = t._groups,
      n = i.length,
      a = e.length,
      s = Math.min(n, a),
      r = new Array(n),
      l = 0;
    l < s;
    ++l
  )
    for (
      var p = i[l], h = e[l], x = p.length, v = (r[l] = new Array(x)), b, C = 0;
      C < x;
      ++C
    )
      (b = p[C] || h[C]) && (v[C] = b);
  for (; l < n; ++l) r[l] = i[l];
  return new je(r, this._parents, this._name, this._id);
}
function af(t) {
  return (t + "")
    .trim()
    .split(/^|\s+/)
    .every(function (i) {
      var e = i.indexOf(".");
      return e >= 0 && (i = i.slice(0, e)), !i || i === "start";
    });
}
function sf(t, i, e) {
  var n,
    a,
    s = af(i) ? zn : Pe;
  return function () {
    var r = s(this, t),
      l = r.on;
    l !== n && (a = (n = l).copy()).on(i, e), (r.on = a);
  };
}
function Cp(t, i) {
  var e = this._id;
  return arguments.length < 2
    ? be(this.node(), e).on.on(t)
    : this.each(sf(e, t, i));
}
function rf(t) {
  return function () {
    var i = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    i && i.removeChild(this);
  };
}
function wp() {
  return this.on("end.remove", rf(this._id));
}
function Tp(t) {
  var i = this._name,
    e = this._id;
  typeof t != "function" && (t = _i(t));
  for (var n = this._groups, a = n.length, s = new Array(a), r = 0; r < a; ++r)
    for (
      var l = n[r], p = l.length, h = (s[r] = new Array(p)), x, v, b = 0;
      b < p;
      ++b
    )
      (x = l[b]) &&
        (v = t.call(x, x.__data__, b, l)) &&
        ("__data__" in x && (v.__data__ = x.__data__),
        (h[b] = v),
        Kt(h[b], i, e, b, h, be(x, e)));
  return new je(s, this._parents, i, e);
}
function Sp(t) {
  var i = this._name,
    e = this._id;
  typeof t != "function" && (t = kn(t));
  for (var n = this._groups, a = n.length, s = [], r = [], l = 0; l < a; ++l)
    for (var p = n[l], h = p.length, x, v = 0; v < h; ++v)
      if ((x = p[v])) {
        for (
          var b = t.call(x, x.__data__, v, p),
            C,
            k = be(x, e),
            D = 0,
            B = b.length;
          D < B;
          ++D
        )
          (C = b[D]) && Kt(C, i, e, D, b, k);
        s.push(b), r.push(x);
      }
  return new je(s, r, i, e);
}
var of = Ht.prototype.constructor;
function kp() {
  return new of(this._groups, this._parents);
}
function lf(t, i) {
  var e, n, a;
  return function () {
    var s = Qt(this, t),
      r = (this.style.removeProperty(t), Qt(this, t));
    return s === r ? null : s === e && r === n ? a : (a = i((e = s), (n = r)));
  };
}
function Ap(t) {
  return function () {
    this.style.removeProperty(t);
  };
}
function cf(t, i, e) {
  var n,
    a = e + "",
    s;
  return function () {
    var r = Qt(this, t);
    return r === a ? null : r === n ? s : (s = i((n = r), e));
  };
}
function df(t, i, e) {
  var n, a, s;
  return function () {
    var r = Qt(this, t),
      l = e(this),
      p = l + "";
    return (
      l == null && (p = l = (this.style.removeProperty(t), Qt(this, t))),
      r === p ? null : r === n && p === a ? s : ((a = p), (s = i((n = r), l)))
    );
  };
}
function pf(t, i) {
  var e,
    n,
    a,
    s = "style." + i,
    r = "end." + s,
    l;
  return function () {
    var p = Pe(this, t),
      h = p.on,
      x = p.value[s] == null ? l || (l = Ap(i)) : void 0;
    (h !== e || a !== x) && (n = (e = h).copy()).on(r, (a = x)), (p.on = n);
  };
}
function Mp(t, i, e) {
  var n = (t += "") == "transform" ? Hr : ss;
  return i == null
    ? this.styleTween(t, lf(t, n)).on("end.style." + t, Ap(t))
    : typeof i == "function"
    ? this.styleTween(t, df(t, n, ji(this, "style." + t, i))).each(
        pf(this._id, t)
      )
    : this.styleTween(t, cf(t, n, i), e).on("end.style." + t, null);
}
function hf(t, i, e) {
  return function (n) {
    this.style.setProperty(t, i.call(this, n), e);
  };
}
function mf(t, i, e) {
  var n, a;
  function s() {
    var r = i.apply(this, arguments);
    return r !== a && (n = (a = r) && hf(t, r, e)), n;
  }
  return (s._value = i), s;
}
function Lp(t, i, e) {
  var n = "style." + (t += "");
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (i == null) return this.tween(n, null);
  if (typeof i != "function") throw new Error();
  return this.tween(n, mf(t, i, e ?? ""));
}
function uf(t) {
  return function () {
    this.textContent = t;
  };
}
function gf(t) {
  return function () {
    var i = t(this);
    this.textContent = i ?? "";
  };
}
function Dp(t) {
  return this.tween(
    "text",
    typeof t == "function"
      ? gf(ji(this, "text", t))
      : uf(t == null ? "" : t + "")
  );
}
function ff(t) {
  return function (i) {
    this.textContent = t.call(this, i);
  };
}
function _f(t) {
  var i, e;
  function n() {
    var a = t.apply(this, arguments);
    return a !== e && (i = (e = a) && ff(a)), i;
  }
  return (n._value = t), n;
}
function Ep(t) {
  var i = "text";
  if (arguments.length < 1) return (i = this.tween(i)) && i._value;
  if (t == null) return this.tween(i, null);
  if (typeof t != "function") throw new Error();
  return this.tween(i, _f(t));
}
function Op() {
  for (
    var t = this._name,
      i = this._id,
      e = rs(),
      n = this._groups,
      a = n.length,
      s = 0;
    s < a;
    ++s
  )
    for (var r = n[s], l = r.length, p, h = 0; h < l; ++h)
      if ((p = r[h])) {
        var x = be(p, i);
        Kt(p, t, e, h, r, {
          time: x.time + x.delay + x.duration,
          delay: 0,
          duration: x.duration,
          ease: x.ease,
        });
      }
  return new je(n, this._parents, t, e);
}
function Pp() {
  var t,
    i,
    e = this,
    n = e._id,
    a = e.size();
  return new Promise(function (s, r) {
    var l = { value: r },
      p = {
        value: function () {
          --a === 0 && s();
        },
      };
    e.each(function () {
      var h = Pe(this, n),
        x = h.on;
      x !== t &&
        ((i = (t = x).copy()),
        i._.cancel.push(l),
        i._.interrupt.push(l),
        i._.end.push(p)),
        (h.on = i);
    }),
      a === 0 && s();
  });
}
var xf = 0;
function je(t, i, e, n) {
  (this._groups = t), (this._parents = i), (this._name = e), (this._id = n);
}
function Ip(t) {
  return Ht().transition(t);
}
function rs() {
  return ++xf;
}
var zt = Ht.prototype;
je.prototype = Ip.prototype = {
  constructor: je,
  select: Tp,
  selectAll: Sp,
  selectChild: zt.selectChild,
  selectChildren: zt.selectChildren,
  filter: yp,
  merge: bp,
  selection: kp,
  transition: Op,
  call: zt.call,
  nodes: zt.nodes,
  node: zt.node,
  size: zt.size,
  empty: zt.empty,
  each: zt.each,
  on: Cp,
  attr: up,
  attrTween: gp,
  style: Mp,
  styleTween: Lp,
  text: Dp,
  textTween: Ep,
  remove: wp,
  tween: mp,
  delay: fp,
  duration: _p,
  ease: xp,
  easeVarying: vp,
  end: Pp,
  [Symbol.iterator]: zt[Symbol.iterator],
};
function os(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var vf = { time: null, delay: 0, duration: 250, ease: os };
function yf(t, i) {
  for (var e; !(e = t.__transition) || !(e = e[i]); )
    if (!(t = t.parentNode)) throw new Error(`transition ${i} not found`);
  return e;
}
function Fp(t) {
  var i, e;
  t instanceof je
    ? ((i = t._id), (t = t._name))
    : ((i = rs()), ((e = vf).time = Rn()), (t = t == null ? null : t + ""));
  for (var n = this._groups, a = n.length, s = 0; s < a; ++s)
    for (var r = n[s], l = r.length, p, h = 0; h < l; ++h)
      (p = r[h]) && Kt(p, t, i, h, r, e || yf(p, i));
  return new je(n, this._parents, t, i);
}
Ht.prototype.interrupt = hp;
Ht.prototype.transition = Fp;
var { abs: Rk, max: Hk, min: zk } = Math;
function Vp(t) {
  return [+t[0], +t[1]];
}
function bf(t) {
  return [Vp(t[0]), Vp(t[1])];
}
var Gk = {
    name: "x",
    handles: ["w", "e"].map($r),
    input: function (t, i) {
      return t == null
        ? null
        : [
            [+t[0], i[0][1]],
            [+t[1], i[1][1]],
          ];
    },
    output: function (t) {
      return t && [t[0][0], t[1][0]];
    },
  },
  Wk = {
    name: "y",
    handles: ["n", "s"].map($r),
    input: function (t, i) {
      return t == null
        ? null
        : [
            [i[0][0], +t[0]],
            [i[1][0], +t[1]],
          ];
    },
    output: function (t) {
      return t && [t[0][1], t[1][1]];
    },
  },
  $k = {
    name: "xy",
    handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map($r),
    input: function (t) {
      return t == null ? null : bf(t);
    },
    output: function (t) {
      return t;
    },
  };
function $r(t) {
  return { type: t };
}
function Dt(t, i) {
  return t == null || i == null
    ? NaN
    : t < i
    ? -1
    : t > i
    ? 1
    : t >= i
    ? 0
    : NaN;
}
function jr(t, i) {
  return t == null || i == null
    ? NaN
    : i < t
    ? -1
    : i > t
    ? 1
    : i >= t
    ? 0
    : NaN;
}
function ls(t) {
  let i, e, n;
  t.length !== 2
    ? ((i = Dt), (e = (l, p) => Dt(t(l), p)), (n = (l, p) => t(l) - p))
    : ((i = t === Dt || t === jr ? t : wf), (e = t), (n = t));
  function a(l, p, h = 0, x = l.length) {
    if (h < x) {
      if (i(p, p) !== 0) return x;
      do {
        let v = (h + x) >>> 1;
        e(l[v], p) < 0 ? (h = v + 1) : (x = v);
      } while (h < x);
    }
    return h;
  }
  function s(l, p, h = 0, x = l.length) {
    if (h < x) {
      if (i(p, p) !== 0) return x;
      do {
        let v = (h + x) >>> 1;
        e(l[v], p) <= 0 ? (h = v + 1) : (x = v);
      } while (h < x);
    }
    return h;
  }
  function r(l, p, h = 0, x = l.length) {
    let v = a(l, p, h, x - 1);
    return v > h && n(l[v - 1], p) > -n(l[v], p) ? v - 1 : v;
  }
  return { left: a, center: r, right: s };
}
function wf() {
  return 0;
}
function Gn(t) {
  return t === null ? NaN : +t;
}
var Bp = ls(Dt),
  Np = Bp.right,
  Tf = Bp.left,
  Sf = ls(Gn).center,
  Wn = Np;
var Xi = class extends Map {
  constructor(i, e = Mf) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: e },
      }),
      i != null)
    )
      for (let [n, a] of i) this.set(n, a);
  }
  get(i) {
    return super.get(Rp(this, i));
  }
  has(i) {
    return super.has(Rp(this, i));
  }
  set(i, e) {
    return super.set(kf(this, i), e);
  }
  delete(i) {
    return super.delete(Af(this, i));
  }
};
function Rp({ _intern: t, _key: i }, e) {
  let n = i(e);
  return t.has(n) ? t.get(n) : e;
}
function kf({ _intern: t, _key: i }, e) {
  let n = i(e);
  return t.has(n) ? t.get(n) : (t.set(n, e), e);
}
function Af({ _intern: t, _key: i }, e) {
  let n = i(e);
  return t.has(n) && ((e = t.get(n)), t.delete(n)), e;
}
function Mf(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
var Lf = Math.sqrt(50),
  Df = Math.sqrt(10),
  Ef = Math.sqrt(2);
function cs(t, i, e) {
  let n = (i - t) / Math.max(0, e),
    a = Math.floor(Math.log10(n)),
    s = n / Math.pow(10, a),
    r = s >= Lf ? 10 : s >= Df ? 5 : s >= Ef ? 2 : 1,
    l,
    p,
    h;
  return (
    a < 0
      ? ((h = Math.pow(10, -a) / r),
        (l = Math.round(t * h)),
        (p = Math.round(i * h)),
        l / h < t && ++l,
        p / h > i && --p,
        (h = -h))
      : ((h = Math.pow(10, a) * r),
        (l = Math.round(t / h)),
        (p = Math.round(i / h)),
        l * h < t && ++l,
        p * h > i && --p),
    p < l && 0.5 <= e && e < 2 ? cs(t, i, e * 2) : [l, p, h]
  );
}
function ds(t, i, e) {
  if (((i = +i), (t = +t), (e = +e), !(e > 0))) return [];
  if (t === i) return [t];
  let n = i < t,
    [a, s, r] = n ? cs(i, t, e) : cs(t, i, e);
  if (!(s >= a)) return [];
  let l = s - a + 1,
    p = new Array(l);
  if (n)
    if (r < 0) for (let h = 0; h < l; ++h) p[h] = (s - h) / -r;
    else for (let h = 0; h < l; ++h) p[h] = (s - h) * r;
  else if (r < 0) for (let h = 0; h < l; ++h) p[h] = (a + h) / -r;
  else for (let h = 0; h < l; ++h) p[h] = (a + h) * r;
  return p;
}
function $n(t, i, e) {
  return (i = +i), (t = +t), (e = +e), cs(t, i, e)[2];
}
function Xr(t, i, e) {
  (i = +i), (t = +t), (e = +e);
  let n = i < t,
    a = n ? $n(i, t, e) : $n(t, i, e);
  return (n ? -1 : 1) * (a < 0 ? 1 / -a : a);
}
function qr(t, i, e = Gn) {
  if (!(!(n = t.length) || isNaN((i = +i)))) {
    if (i <= 0 || n < 2) return +e(t[0], 0, t);
    if (i >= 1) return +e(t[n - 1], n - 1, t);
    var n,
      a = (n - 1) * i,
      s = Math.floor(a),
      r = +e(t[s], s, t),
      l = +e(t[s + 1], s + 1, t);
    return r + (l - r) * (a - s);
  }
}
function qi(t, i, e) {
  (t = +t),
    (i = +i),
    (e = (a = arguments.length) < 2 ? ((i = t), (t = 0), 1) : a < 3 ? 1 : +e);
  for (
    var n = -1, a = Math.max(0, Math.ceil((i - t) / e)) | 0, s = new Array(a);
    ++n < a;

  )
    s[n] = t + n * e;
  return s;
}
function Zt(t, i) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(i).domain(t);
      break;
  }
  return this;
}
var Yr = Symbol("implicit");
function wi() {
  var t = new Xi(),
    i = [],
    e = [],
    n = Yr;
  function a(s) {
    let r = t.get(s);
    if (r === void 0) {
      if (n !== Yr) return n;
      t.set(s, (r = i.push(s) - 1));
    }
    return e[r % e.length];
  }
  return (
    (a.domain = function (s) {
      if (!arguments.length) return i.slice();
      (i = []), (t = new Xi());
      for (let r of s) t.has(r) || t.set(r, i.push(r) - 1);
      return a;
    }),
    (a.range = function (s) {
      return arguments.length ? ((e = Array.from(s)), a) : e.slice();
    }),
    (a.unknown = function (s) {
      return arguments.length ? ((n = s), a) : n;
    }),
    (a.copy = function () {
      return wi(i, e).unknown(n);
    }),
    Zt.apply(a, arguments),
    a
  );
}
function Yi() {
  var t = wi().unknown(void 0),
    i = t.domain,
    e = t.range,
    n = 0,
    a = 1,
    s,
    r,
    l = !1,
    p = 0,
    h = 0,
    x = 0.5;
  delete t.unknown;
  function v() {
    var b = i().length,
      C = a < n,
      k = C ? a : n,
      D = C ? n : a;
    (s = (D - k) / Math.max(1, b - p + h * 2)),
      l && (s = Math.floor(s)),
      (k += (D - k - s * (b - p)) * x),
      (r = s * (1 - p)),
      l && ((k = Math.round(k)), (r = Math.round(r)));
    var B = qi(b).map(function (ne) {
      return k + s * ne;
    });
    return e(C ? B.reverse() : B);
  }
  return (
    (t.domain = function (b) {
      return arguments.length ? (i(b), v()) : i();
    }),
    (t.range = function (b) {
      return arguments.length
        ? (([n, a] = b), (n = +n), (a = +a), v())
        : [n, a];
    }),
    (t.rangeRound = function (b) {
      return ([n, a] = b), (n = +n), (a = +a), (l = !0), v();
    }),
    (t.bandwidth = function () {
      return r;
    }),
    (t.step = function () {
      return s;
    }),
    (t.round = function (b) {
      return arguments.length ? ((l = !!b), v()) : l;
    }),
    (t.padding = function (b) {
      return arguments.length ? ((p = Math.min(1, (h = +b))), v()) : p;
    }),
    (t.paddingInner = function (b) {
      return arguments.length ? ((p = Math.min(1, b)), v()) : p;
    }),
    (t.paddingOuter = function (b) {
      return arguments.length ? ((h = +b), v()) : h;
    }),
    (t.align = function (b) {
      return arguments.length ? ((x = Math.max(0, Math.min(1, b))), v()) : x;
    }),
    (t.copy = function () {
      return Yi(i(), [n, a]).round(l).paddingInner(p).paddingOuter(h).align(x);
    }),
    Zt.apply(v(), arguments)
  );
}
function Ur(t) {
  return function () {
    return t;
  };
}
function Qr(t) {
  return +t;
}
var Hp = [0, 1];
function Ui(t) {
  return t;
}
function Kr(t, i) {
  return (i -= t = +t)
    ? function (e) {
        return (e - t) / i;
      }
    : Ur(isNaN(i) ? NaN : 0.5);
}
function Pf(t, i) {
  var e;
  return (
    t > i && ((e = t), (t = i), (i = e)),
    function (n) {
      return Math.max(t, Math.min(i, n));
    }
  );
}
function If(t, i, e) {
  var n = t[0],
    a = t[1],
    s = i[0],
    r = i[1];
  return (
    a < n ? ((n = Kr(a, n)), (s = e(r, s))) : ((n = Kr(n, a)), (s = e(s, r))),
    function (l) {
      return s(n(l));
    }
  );
}
function Ff(t, i, e) {
  var n = Math.min(t.length, i.length) - 1,
    a = new Array(n),
    s = new Array(n),
    r = -1;
  for (
    t[n] < t[0] && ((t = t.slice().reverse()), (i = i.slice().reverse()));
    ++r < n;

  )
    (a[r] = Kr(t[r], t[r + 1])), (s[r] = e(i[r], i[r + 1]));
  return function (l) {
    var p = Wn(t, l, 1, n) - 1;
    return s[p](a[p](l));
  };
}
function zp(t, i) {
  return i
    .domain(t.domain())
    .range(t.range())
    .interpolate(t.interpolate())
    .clamp(t.clamp())
    .unknown(t.unknown());
}
function Vf() {
  var t = Hp,
    i = Hp,
    e = bi,
    n,
    a,
    s,
    r = Ui,
    l,
    p,
    h;
  function x() {
    var b = Math.min(t.length, i.length);
    return (
      r !== Ui && (r = Pf(t[0], t[b - 1])),
      (l = b > 2 ? Ff : If),
      (p = h = null),
      v
    );
  }
  function v(b) {
    return b == null || isNaN((b = +b))
      ? s
      : (p || (p = l(t.map(n), i, e)))(n(r(b)));
  }
  return (
    (v.invert = function (b) {
      return r(a((h || (h = l(i, t.map(n), Oe)))(b)));
    }),
    (v.domain = function (b) {
      return arguments.length ? ((t = Array.from(b, Qr)), x()) : t.slice();
    }),
    (v.range = function (b) {
      return arguments.length ? ((i = Array.from(b)), x()) : i.slice();
    }),
    (v.rangeRound = function (b) {
      return (i = Array.from(b)), (e = Nr), x();
    }),
    (v.clamp = function (b) {
      return arguments.length ? ((r = b ? !0 : Ui), x()) : r !== Ui;
    }),
    (v.interpolate = function (b) {
      return arguments.length ? ((e = b), x()) : e;
    }),
    (v.unknown = function (b) {
      return arguments.length ? ((s = b), v) : s;
    }),
    function (b, C) {
      return (n = b), (a = C), x();
    }
  );
}
function Zr() {
  return Vf()(Ui, Ui);
}
function Gp(t) {
  return Math.abs((t = Math.round(t))) >= 1e21
    ? t.toLocaleString("en").replace(/,/g, "")
    : t.toString(10);
}
function Ti(t, i) {
  if (
    (e = (t = i ? t.toExponential(i - 1) : t.toExponential()).indexOf("e")) < 0
  )
    return null;
  var e,
    n = t.slice(0, e);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +t.slice(e + 1)];
}
function Et(t) {
  return (t = Ti(Math.abs(t))), t ? t[1] : NaN;
}
function Wp(t, i) {
  return function (e, n) {
    for (
      var a = e.length, s = [], r = 0, l = t[0], p = 0;
      a > 0 &&
      l > 0 &&
      (p + l + 1 > n && (l = Math.max(1, n - p)),
      s.push(e.substring((a -= l), a + l)),
      !((p += l + 1) > n));

    )
      l = t[(r = (r + 1) % t.length)];
    return s.reverse().join(i);
  };
}
function $p(t) {
  return function (i) {
    return i.replace(/[0-9]/g, function (e) {
      return t[+e];
    });
  };
}
var Bf =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Jt(t) {
  if (!(i = Bf.exec(t))) throw new Error("invalid format: " + t);
  var i;
  return new ps({
    fill: i[1],
    align: i[2],
    sign: i[3],
    symbol: i[4],
    zero: i[5],
    width: i[6],
    comma: i[7],
    precision: i[8] && i[8].slice(1),
    trim: i[9],
    type: i[10],
  });
}
Jt.prototype = ps.prototype;
function ps(t) {
  (this.fill = t.fill === void 0 ? " " : t.fill + ""),
    (this.align = t.align === void 0 ? ">" : t.align + ""),
    (this.sign = t.sign === void 0 ? "-" : t.sign + ""),
    (this.symbol = t.symbol === void 0 ? "" : t.symbol + ""),
    (this.zero = !!t.zero),
    (this.width = t.width === void 0 ? void 0 : +t.width),
    (this.comma = !!t.comma),
    (this.precision = t.precision === void 0 ? void 0 : +t.precision),
    (this.trim = !!t.trim),
    (this.type = t.type === void 0 ? "" : t.type + "");
}
ps.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};
function jp(t) {
  e: for (var i = t.length, e = 1, n = -1, a; e < i; ++e)
    switch (t[e]) {
      case ".":
        n = a = e;
        break;
      case "0":
        n === 0 && (n = e), (a = e);
        break;
      default:
        if (!+t[e]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? t.slice(0, n) + t.slice(a + 1) : t;
}
var Jr;
function Xp(t, i) {
  var e = Ti(t, i);
  if (!e) return t + "";
  var n = e[0],
    a = e[1],
    s = a - (Jr = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1,
    r = n.length;
  return s === r
    ? n
    : s > r
    ? n + new Array(s - r + 1).join("0")
    : s > 0
    ? n.slice(0, s) + "." + n.slice(s)
    : "0." + new Array(1 - s).join("0") + Ti(t, Math.max(0, i + s - 1))[0];
}
function eo(t, i) {
  var e = Ti(t, i);
  if (!e) return t + "";
  var n = e[0],
    a = e[1];
  return a < 0
    ? "0." + new Array(-a).join("0") + n
    : n.length > a + 1
    ? n.slice(0, a + 1) + "." + n.slice(a + 1)
    : n + new Array(a - n.length + 2).join("0");
}
var to = {
  "%": (t, i) => (t * 100).toFixed(i),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Gp,
  e: (t, i) => t.toExponential(i),
  f: (t, i) => t.toFixed(i),
  g: (t, i) => t.toPrecision(i),
  o: (t) => Math.round(t).toString(8),
  p: (t, i) => eo(t * 100, i),
  r: eo,
  s: Xp,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16),
};
function io(t) {
  return t;
}
var qp = Array.prototype.map,
  Yp = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "\xB5",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ];
function Up(t) {
  var i =
      t.grouping === void 0 || t.thousands === void 0
        ? io
        : Wp(qp.call(t.grouping, Number), t.thousands + ""),
    e = t.currency === void 0 ? "" : t.currency[0] + "",
    n = t.currency === void 0 ? "" : t.currency[1] + "",
    a = t.decimal === void 0 ? "." : t.decimal + "",
    s = t.numerals === void 0 ? io : $p(qp.call(t.numerals, String)),
    r = t.percent === void 0 ? "%" : t.percent + "",
    l = t.minus === void 0 ? "\u2212" : t.minus + "",
    p = t.nan === void 0 ? "NaN" : t.nan + "";
  function h(v) {
    v = Jt(v);
    var b = v.fill,
      C = v.align,
      k = v.sign,
      D = v.symbol,
      B = v.zero,
      ne = v.width,
      re = v.comma,
      oe = v.precision,
      he = v.trim,
      ue = v.type;
    ue === "n"
      ? ((re = !0), (ue = "g"))
      : to[ue] || (oe === void 0 && (oe = 12), (he = !0), (ue = "g")),
      (B || (b === "0" && C === "=")) && ((B = !0), (b = "0"), (C = "="));
    var tt =
        D === "$"
          ? e
          : D === "#" && /[boxX]/.test(ue)
          ? "0" + ue.toLowerCase()
          : "",
      ke = D === "$" ? n : /[%p]/.test(ue) ? r : "",
      Ae = to[ue],
      Pt = /[defgprs%]/.test(ue);
    oe =
      oe === void 0
        ? 6
        : /[gprs]/.test(ue)
        ? Math.max(1, Math.min(21, oe))
        : Math.max(0, Math.min(20, oe));
    function It(Q) {
      var Ge = tt,
        Ve = ke,
        Ft,
        an,
        I;
      if (ue === "c") (Ve = Ae(Q) + Ve), (Q = "");
      else {
        Q = +Q;
        var N = Q < 0 || 1 / Q < 0;
        if (
          ((Q = isNaN(Q) ? p : Ae(Math.abs(Q), oe)),
          he && (Q = jp(Q)),
          N && +Q == 0 && k !== "+" && (N = !1),
          (Ge =
            (N ? (k === "(" ? k : l) : k === "-" || k === "(" ? "" : k) + Ge),
          (Ve =
            (ue === "s" ? Yp[8 + Jr / 3] : "") +
            Ve +
            (N && k === "(" ? ")" : "")),
          Pt)
        ) {
          for (Ft = -1, an = Q.length; ++Ft < an; )
            if (((I = Q.charCodeAt(Ft)), 48 > I || I > 57)) {
              (Ve = (I === 46 ? a + Q.slice(Ft + 1) : Q.slice(Ft)) + Ve),
                (Q = Q.slice(0, Ft));
              break;
            }
        }
      }
      re && !B && (Q = i(Q, 1 / 0));
      var R = Ge.length + Q.length + Ve.length,
        G = R < ne ? new Array(ne - R + 1).join(b) : "";
      switch (
        (re &&
          B &&
          ((Q = i(G + Q, G.length ? ne - Ve.length : 1 / 0)), (G = "")),
        C)
      ) {
        case "<":
          Q = Ge + Q + Ve + G;
          break;
        case "=":
          Q = Ge + G + Q + Ve;
          break;
        case "^":
          Q = G.slice(0, (R = G.length >> 1)) + Ge + Q + Ve + G.slice(R);
          break;
        default:
          Q = G + Ge + Q + Ve;
          break;
      }
      return s(Q);
    }
    return (
      (It.toString = function () {
        return v + "";
      }),
      It
    );
  }
  function x(v, b) {
    var C = h(((v = Jt(v)), (v.type = "f"), v)),
      k = Math.max(-8, Math.min(8, Math.floor(Et(b) / 3))) * 3,
      D = Math.pow(10, -k),
      B = Yp[8 + k / 3];
    return function (ne) {
      return C(D * ne) + B;
    };
  }
  return { format: h, formatPrefix: x };
}
var hs, ms, us;
no({ thousands: ",", grouping: [3], currency: ["$", ""] });
function no(t) {
  return (hs = Up(t)), (ms = hs.format), (us = hs.formatPrefix), hs;
}
function ao(t) {
  return Math.max(0, -Et(Math.abs(t)));
}
function so(t, i) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(Et(i) / 3))) * 3 - Et(Math.abs(t))
  );
}
function ro(t, i) {
  return (
    (t = Math.abs(t)), (i = Math.abs(i) - t), Math.max(0, Et(i) - Et(t)) + 1
  );
}
function oo(t, i, e, n) {
  var a = Xr(t, i, e),
    s;
  switch (((n = Jt(n ?? ",f")), n.type)) {
    case "s": {
      var r = Math.max(Math.abs(t), Math.abs(i));
      return (
        n.precision == null && !isNaN((s = so(a, r))) && (n.precision = s),
        us(n, r)
      );
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null &&
        !isNaN((s = ro(a, Math.max(Math.abs(t), Math.abs(i))))) &&
        (n.precision = s - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null &&
        !isNaN((s = ao(a))) &&
        (n.precision = s - (n.type === "%") * 2);
      break;
    }
  }
  return ms(n);
}
function Nf(t) {
  var i = t.domain;
  return (
    (t.ticks = function (e) {
      var n = i();
      return ds(n[0], n[n.length - 1], e ?? 10);
    }),
    (t.tickFormat = function (e, n) {
      var a = i();
      return oo(a[0], a[a.length - 1], e ?? 10, n);
    }),
    (t.nice = function (e) {
      e == null && (e = 10);
      var n = i(),
        a = 0,
        s = n.length - 1,
        r = n[a],
        l = n[s],
        p,
        h,
        x = 10;
      for (
        l < r && ((h = r), (r = l), (l = h), (h = a), (a = s), (s = h));
        x-- > 0;

      ) {
        if (((h = $n(r, l, e)), h === p)) return (n[a] = r), (n[s] = l), i(n);
        if (h > 0) (r = Math.floor(r / h) * h), (l = Math.ceil(l / h) * h);
        else if (h < 0) (r = Math.ceil(r * h) / h), (l = Math.floor(l * h) / h);
        else break;
        p = h;
      }
      return t;
    }),
    t
  );
}
function ei() {
  var t = Zr();
  return (
    (t.copy = function () {
      return zp(t, ei());
    }),
    Zt.apply(t, arguments),
    Nf(t)
  );
}
function jn() {
  var t = [],
    i = [],
    e = [],
    n;
  function a() {
    var r = 0,
      l = Math.max(1, i.length);
    for (e = new Array(l - 1); ++r < l; ) e[r - 1] = qr(t, r / l);
    return s;
  }
  function s(r) {
    return r == null || isNaN((r = +r)) ? n : i[Wn(e, r)];
  }
  return (
    (s.invertExtent = function (r) {
      var l = i.indexOf(r);
      return l < 0
        ? [NaN, NaN]
        : [l > 0 ? e[l - 1] : t[0], l < e.length ? e[l] : t[t.length - 1]];
    }),
    (s.domain = function (r) {
      if (!arguments.length) return t.slice();
      t = [];
      for (let l of r) l != null && !isNaN((l = +l)) && t.push(l);
      return t.sort(Dt), a();
    }),
    (s.range = function (r) {
      return arguments.length ? ((i = Array.from(r)), a()) : i.slice();
    }),
    (s.unknown = function (r) {
      return arguments.length ? ((n = r), s) : n;
    }),
    (s.quantiles = function () {
      return e.slice();
    }),
    (s.copy = function () {
      return jn().domain(t).range(i).unknown(n);
    }),
    Zt.apply(s, arguments)
  );
}
var oh = Ss(Kp(), 1);
var Xf = ["caretElm"],
  qf = (t) => ({ model: t });
function Yf(t, i) {}
function Uf(t, i) {
  if ((t & 1 && (c(0, "span"), A(1, Yf, 0, 0, "ng-template", 5), d()), t & 2)) {
    let e = y();
    o(),
      u("ngTemplateOutlet", e.template)(
        "ngTemplateOutletContext",
        V(2, qf, e.context)
      );
  }
}
function Qf(t, i) {
  if ((t & 1 && T(0, "span", 6), t & 2)) {
    let e = y();
    u("innerHTML", e.title, De);
  }
}
function Kf(t, i) {
  if ((t & 1 && (c(0, "header", 4)(1, "span", 5), m(2), d()()), t & 2)) {
    let e = y();
    o(2), _(e.title);
  }
}
function Zf(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "li", 6)(1, "ngx-charts-legend-entry", 7),
      S("select", function (a) {
        M(e);
        let s = y();
        return L(s.labelClick.emit(a));
      })("activate", function (a) {
        M(e);
        let s = y();
        return L(s.activate(a));
      })("deactivate", function (a) {
        M(e);
        let s = y();
        return L(s.deactivate(a));
      }),
      d()();
  }
  if (t & 2) {
    let e = i.$implicit,
      n = y();
    o(),
      u("label", e.label)("formattedLabel", e.formattedLabel)("color", e.color)(
        "isActive",
        n.isActive(e)
      );
  }
}
var Jf = ["*"];
function e_(t, i) {
  if ((t & 1 && T(0, "ngx-charts-scale-legend", 4), t & 2)) {
    let e = y();
    u(
      "horizontal",
      e.legendOptions && e.legendOptions.position === e.LegendPosition.Below
    )("valueRange", e.legendOptions.domain)("colors", e.legendOptions.colors)(
      "height",
      e.view[1]
    )("width", e.legendWidth);
  }
}
function t_(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "ngx-charts-legend", 5),
      S("labelClick", function (a) {
        M(e);
        let s = y();
        return L(s.legendLabelClick.emit(a));
      })("labelActivate", function (a) {
        M(e);
        let s = y();
        return L(s.legendLabelActivate.emit(a));
      })("labelDeactivate", function (a) {
        M(e);
        let s = y();
        return L(s.legendLabelDeactivate.emit(a));
      }),
      d();
  }
  if (t & 2) {
    let e = y();
    u(
      "horizontal",
      e.legendOptions && e.legendOptions.position === e.LegendPosition.Below
    )("data", e.legendOptions.domain)("title", e.legendOptions.title)(
      "colors",
      e.legendOptions.colors
    )("height", e.view[1])("width", e.legendWidth)(
      "activeEntries",
      e.activeEntries
    );
  }
}
var i_ = ["ngx-charts-axis-label", ""],
  lh = ["ticksel"],
  n_ = ["ngx-charts-x-axis-ticks", ""];
function a_(t, i) {
  t & 1 && (z(), Ls(0));
}
function s_(t, i) {
  if ((t & 1 && (z(), c(0, "tspan", 10), m(1), d()), t & 2)) {
    let e = i.$implicit,
      n = i.index;
    te("y", n * 12), o(), P(" ", e, " ");
  }
}
function r_(t, i) {
  if ((t & 1 && (z(), dt(0), A(1, s_, 2, 2, "tspan", 9), pt()), t & 2)) {
    let e = i.ngIf;
    o(), u("ngForOf", e);
  }
}
function o_(t, i) {
  if ((t & 1 && A(0, r_, 2, 1, "ng-container", 6), t & 2)) {
    let e = y(2).$implicit,
      n = y();
    u("ngIf", n.tickChunks(e));
  }
}
function l_(t, i) {
  if ((t & 1 && m(0), t & 2)) {
    let e = y().ngIf,
      n = y(2);
    P(" ", n.tickTrim(e), " ");
  }
}
function c_(t, i) {
  if (
    (t & 1 &&
      (z(),
      dt(0),
      c(1, "title"),
      m(2),
      d(),
      c(3, "text", 7),
      A(4, a_, 1, 0, "ng-container", 8),
      d(),
      A(5, o_, 1, 1, "ng-template", null, 1, at)(
        7,
        l_,
        1,
        1,
        "ng-template",
        null,
        2,
        at
      ),
      pt()),
    t & 2)
  ) {
    let e = i.ngIf,
      n = ht(6),
      a = ht(8),
      s = y(2);
    o(2),
      _(e),
      o(),
      te("text-anchor", s.textAnchor)("transform", s.textTransform),
      o(),
      u("ngIf", s.isWrapTicksSupported)("ngIfThen", n)("ngIfElse", a);
  }
}
function d_(t, i) {
  if (
    (t & 1 && (z(), c(0, "g", 5), A(1, c_, 9, 6, "ng-container", 6), d()),
    t & 2)
  ) {
    let e = i.$implicit,
      n = y();
    te("transform", n.tickTransform(e)), o(), u("ngIf", n.tickFormat(e));
  }
}
function p_(t, i) {
  if ((t & 1 && (z(), c(0, "g"), T(1, "line", 11), d()), t & 2)) {
    let e = y(2);
    te("transform", e.gridLineTransform()), o(), te("y1", -e.gridLineHeight);
  }
}
function h_(t, i) {
  if ((t & 1 && (z(), c(0, "g"), A(1, p_, 2, 2, "g", 6), d()), t & 2)) {
    let e = i.$implicit,
      n = y();
    te("transform", n.tickTransform(e)), o(), u("ngIf", n.showGridLines);
  }
}
var m_ = ["ngx-charts-x-axis", ""];
function u_(t, i) {
  if (t & 1) {
    let e = O();
    z(),
      c(0, "g", 2),
      S("dimensionsChanged", function (a) {
        M(e);
        let s = y();
        return L(s.emitTicksHeight(a));
      }),
      d();
  }
  if (t & 2) {
    let e = y();
    u("trimTicks", e.trimTicks)("rotateTicks", e.rotateTicks)(
      "maxTickLength",
      e.maxTickLength
    )("tickFormatting", e.tickFormatting)("tickArguments", e.tickArguments)(
      "tickStroke",
      e.tickStroke
    )("scale", e.xScale)("orient", e.xOrient)("showGridLines", e.showGridLines)(
      "gridLineHeight",
      e.dims.height
    )("width", e.dims.width)("tickValues", e.ticks)("wrapTicks", e.wrapTicks);
  }
}
function g_(t, i) {
  if ((t & 1 && (z(), T(0, "g", 3)), t & 2)) {
    let e = y();
    u("label", e.labelText)("offset", e.labelOffset)(
      "orient",
      e.orientation.Bottom
    )("height", e.dims.height)("width", e.dims.width);
  }
}
var f_ = ["ngx-charts-y-axis-ticks", ""];
function __(t, i) {
  t & 1 && (z(), Ls(0));
}
function x_(t, i) {
  if ((t & 1 && (z(), c(0, "tspan", 12), m(1), d()), t & 2)) {
    let e = i.$implicit,
      n = i.index,
      a = y(6);
    te("y", n * (8 + a.tickSpacing)), o(), P(" ", e, " ");
  }
}
function v_(t, i) {
  if ((t & 1 && (z(), dt(0), A(1, x_, 2, 2, "tspan", 11), pt()), t & 2)) {
    let e = y().ngIf;
    o(), u("ngForOf", e);
  }
}
function y_(t, i) {
  if (
    (t & 1 && (z(), dt(0), A(1, v_, 2, 1, "ng-container", 10), pt()), t & 2)
  ) {
    let e = i.ngIf;
    y(2);
    let n = ht(8);
    o(), u("ngIf", e.length > 1)("ngIfElse", n);
  }
}
function b_(t, i) {
  if ((t & 1 && A(0, y_, 2, 2, "ng-container", 7), t & 2)) {
    let e = y(2).$implicit,
      n = y();
    u("ngIf", n.tickChunks(e));
  }
}
function C_(t, i) {
  if ((t & 1 && m(0), t & 2)) {
    let e = y().ngIf,
      n = y(2);
    P(" ", n.tickTrim(e), " ");
  }
}
function w_(t, i) {
  if (
    (t & 1 &&
      (z(),
      dt(0),
      c(1, "title"),
      m(2),
      d(),
      c(3, "text", 8),
      A(4, __, 1, 0, "ng-container", 9),
      d(),
      A(5, b_, 1, 1, "ng-template", null, 1, at)(
        7,
        C_,
        1,
        1,
        "ng-template",
        null,
        2,
        at
      ),
      pt()),
    t & 2)
  ) {
    let e = i.ngIf,
      n = ht(6),
      a = ht(8),
      s = y(2);
    o(2),
      _(e),
      o(),
      ct("font-size", "12px"),
      te("dy", s.dy)("x", s.x1)("y", s.y1)("text-anchor", s.textAnchor),
      o(),
      u("ngIf", s.wrapTicks)("ngIfThen", n)("ngIfElse", a);
  }
}
function T_(t, i) {
  if (
    (t & 1 && (z(), c(0, "g", 6), A(1, w_, 9, 10, "ng-container", 7), d()),
    t & 2)
  ) {
    let e = i.$implicit,
      n = y();
    te("transform", n.transform(e)), o(), u("ngIf", n.tickFormat(e));
  }
}
function S_(t, i) {
  if ((t & 1 && (z(), T(0, "path", 13)), t & 2)) {
    let e = y();
    te("d", e.referenceAreaPath)("transform", e.gridLineTransform());
  }
}
function k_(t, i) {
  if ((t & 1 && (z(), T(0, "line", 15)), t & 2)) {
    let e = y(3);
    te("x2", e.gridLineWidth);
  }
}
function A_(t, i) {
  if ((t & 1 && (z(), T(0, "line", 15)), t & 2)) {
    let e = y(3);
    te("x2", -e.gridLineWidth);
  }
}
function M_(t, i) {
  if (
    (t & 1 &&
      (z(),
      c(0, "g"),
      A(1, k_, 1, 1, "line", 14)(2, A_, 1, 1, "line", 14),
      d()),
    t & 2)
  ) {
    let e = y(2);
    te("transform", e.gridLineTransform()),
      o(),
      u("ngIf", e.orient === e.Orientation.Left),
      o(),
      u("ngIf", e.orient === e.Orientation.Right);
  }
}
function L_(t, i) {
  if ((t & 1 && (z(), c(0, "g"), A(1, M_, 3, 3, "g", 7), d()), t & 2)) {
    let e = i.$implicit,
      n = y();
    te("transform", n.transform(e)), o(), u("ngIf", n.showGridLines);
  }
}
function D_(t, i) {
  if (
    (t & 1 &&
      (z(), c(0, "g")(1, "title"), m(2), d(), c(3, "text", 17), m(4), d()()),
    t & 2)
  ) {
    let e = y(2).$implicit,
      n = y();
    o(2),
      _(n.tickTrim(n.tickFormat(e.value))),
      o(),
      te("dy", n.dy)("y", -6)("x", n.gridLineWidth)(
        "text-anchor",
        n.textAnchor
      ),
      o(),
      P(" ", e.name, " ");
  }
}
function E_(t, i) {
  if (
    (t & 1 && (z(), c(0, "g"), T(1, "line", 16), A(2, D_, 5, 6, "g", 7), d()),
    t & 2)
  ) {
    let e = y().$implicit,
      n = y();
    te("transform", n.transform(e.value)),
      o(),
      te("x2", n.gridLineWidth)("transform", n.gridLineTransform()),
      o(),
      u("ngIf", n.showRefLabels);
  }
}
function O_(t, i) {
  if ((t & 1 && (z(), c(0, "g"), A(1, E_, 3, 4, "g", 7), d()), t & 2)) {
    let e = y();
    o(), u("ngIf", e.showRefLines);
  }
}
var P_ = ["ngx-charts-y-axis", ""];
function I_(t, i) {
  if (t & 1) {
    let e = O();
    z(),
      c(0, "g", 2),
      S("dimensionsChanged", function (a) {
        M(e);
        let s = y();
        return L(s.emitTicksWidth(a));
      }),
      d();
  }
  if (t & 2) {
    let e = y();
    u("trimTicks", e.trimTicks)("maxTickLength", e.maxTickLength)(
      "tickFormatting",
      e.tickFormatting
    )("tickArguments", e.tickArguments)("tickValues", e.ticks)(
      "tickStroke",
      e.tickStroke
    )("scale", e.yScale)("orient", e.yOrient)("showGridLines", e.showGridLines)(
      "gridLineWidth",
      e.dims.width
    )("referenceLines", e.referenceLines)("showRefLines", e.showRefLines)(
      "showRefLabels",
      e.showRefLabels
    )("height", e.dims.height)("wrapTicks", e.wrapTicks);
  }
}
function F_(t, i) {
  if ((t & 1 && (z(), T(0, "g", 3)), t & 2)) {
    let e = y();
    u("label", e.labelText)("offset", e.labelOffset)("orient", e.yOrient)(
      "height",
      e.dims.height
    )("width", e.dims.width);
  }
}
var V_ = ["ngx-charts-svg-linear-gradient", ""];
function B_(t, i) {
  if ((t & 1 && (z(), T(0, "stop")), t & 2)) {
    let e = i.$implicit;
    ct("stop-color", e.color)("stop-opacity", e.opacity),
      te("offset", e.offset + "%");
  }
}
var N_ = ["tooltipTemplate"];
var R_ = (t, i) => [t, i];
var H_ = `.ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}
`;
var z_ = ["ngx-charts-bar", ""];
function G_(t, i) {
  if ((t & 1 && (z(), c(0, "defs"), T(1, "g", 2), d()), t & 2)) {
    let e = y();
    o(),
      u("orientation", e.orientation)("name", e.gradientId)(
        "stops",
        e.gradientStops
      );
  }
}
var W_ = ["ngx-charts-bar-label", ""];
var $_ = ["ngx-charts-series-vertical", ""];
function j_(t, i) {
  if (t & 1) {
    let e = O();
    z(),
      c(0, "g", 2),
      S("select", function (a) {
        M(e);
        let s = y(2);
        return L(s.onClick(a));
      })("activate", function (a) {
        M(e);
        let s = y(2);
        return L(s.activate.emit(a));
      })("deactivate", function (a) {
        M(e);
        let s = y(2);
        return L(s.deactivate.emit(a));
      }),
      d();
  }
  if (t & 2) {
    let e = i.$implicit,
      n = y(2);
    u("@animationState", "active")("@.disabled", !n.animations)(
      "width",
      e.width
    )("height", e.height)("x", e.x)("y", e.y)("fill", e.color)(
      "stops",
      e.gradientStops
    )("data", e.data)("orientation", n.barOrientation.Vertical)(
      "roundEdges",
      e.roundEdges
    )("gradient", n.gradient)("ariaLabel", e.ariaLabel)(
      "isActive",
      n.isActive(e.data)
    )("tooltipDisabled", n.tooltipDisabled)(
      "tooltipPlacement",
      n.tooltipPlacement
    )("tooltipType", n.tooltipType)(
      "tooltipTitle",
      n.tooltipTemplate ? void 0 : e.tooltipText
    )("tooltipTemplate", n.tooltipTemplate)("tooltipContext", e.data)(
      "noBarWhenZero",
      n.noBarWhenZero
    )("animations", n.animations);
  }
}
function X_(t, i) {
  if ((t & 1 && (z(), c(0, "g"), A(1, j_, 1, 22, "g", 1), d()), t & 2)) {
    let e = y();
    o(), u("ngForOf", e.bars)("ngForTrackBy", e.trackBy);
  }
}
function q_(t, i) {
  if (t & 1) {
    let e = O();
    z(),
      c(0, "g", 2),
      S("select", function (a) {
        M(e);
        let s = y(2);
        return L(s.onClick(a));
      })("activate", function (a) {
        M(e);
        let s = y(2);
        return L(s.activate.emit(a));
      })("deactivate", function (a) {
        M(e);
        let s = y(2);
        return L(s.deactivate.emit(a));
      }),
      d();
  }
  if (t & 2) {
    let e = i.$implicit,
      n = y(2);
    u("width", e.width)("height", e.height)("x", e.x)("y", e.y)(
      "fill",
      e.color
    )("stops", e.gradientStops)("data", e.data)(
      "orientation",
      n.barOrientation.Vertical
    )("roundEdges", e.roundEdges)("gradient", n.gradient)(
      "ariaLabel",
      e.ariaLabel
    )("isActive", n.isActive(e.data))("tooltipDisabled", n.tooltipDisabled)(
      "tooltipPlacement",
      n.tooltipPlacement
    )("tooltipType", n.tooltipType)(
      "tooltipTitle",
      n.tooltipTemplate ? void 0 : e.tooltipText
    )("tooltipTemplate", n.tooltipTemplate)("tooltipContext", e.data)(
      "noBarWhenZero",
      n.noBarWhenZero
    )("animations", n.animations);
  }
}
function Y_(t, i) {
  if ((t & 1 && (z(), c(0, "g"), A(1, q_, 1, 20, "g", 1), d()), t & 2)) {
    let e = y();
    o(), u("ngForOf", e.bars)("ngForTrackBy", e.trackBy);
  }
}
function U_(t, i) {
  if (t & 1) {
    let e = O();
    z(),
      c(0, "g", 4),
      S("dimensionsChanged", function (a) {
        let s = M(e).index,
          r = y(2);
        return L(r.dataLabelHeightChanged.emit({ size: a, index: s }));
      }),
      d();
  }
  if (t & 2) {
    let e = i.$implicit,
      n = y(2);
    u("barX", e.x)("barY", e.y)("barWidth", e.width)("barHeight", e.height)(
      "value",
      e.total
    )("valueFormatting", n.dataLabelFormatting)(
      "orientation",
      n.barOrientation.Vertical
    );
  }
}
function Q_(t, i) {
  if ((t & 1 && (z(), c(0, "g"), A(1, U_, 1, 7, "g", 3), d()), t & 2)) {
    let e = y();
    o(), u("ngForOf", e.barsForDataLabels)("ngForTrackBy", e.trackDataLabelBy);
  }
}
function K_(t, i) {
  if (t & 1) {
    let e = O();
    z(),
      c(0, "g", 5),
      S("dimensionsChanged", function (a) {
        M(e);
        let s = y();
        return L(s.updateXAxisHeight(a));
      }),
      d();
  }
  if (t & 2) {
    let e = y();
    u("xScale", e.xScale)("dims", e.dims)("showGridLines", e.showGridLines)(
      "showLabel",
      e.showXAxisLabel
    )("labelText", e.xAxisLabel)("trimTicks", e.trimXAxisTicks)(
      "rotateTicks",
      e.rotateXAxisTicks
    )("maxTickLength", e.maxXAxisTickLength)(
      "tickFormatting",
      e.xAxisTickFormatting
    )("ticks", e.xAxisTicks)("xAxisOffset", e.dataLabelMaxHeight.negative)(
      "wrapTicks",
      e.wrapTicks
    );
  }
}
function Z_(t, i) {
  if (t & 1) {
    let e = O();
    z(),
      c(0, "g", 6),
      S("dimensionsChanged", function (a) {
        M(e);
        let s = y();
        return L(s.updateYAxisWidth(a));
      }),
      d();
  }
  if (t & 2) {
    let e = y();
    u("yScale", e.yScale)("dims", e.dims)("showGridLines", e.showGridLines)(
      "showLabel",
      e.showYAxisLabel
    )("labelText", e.yAxisLabel)("trimTicks", e.trimYAxisTicks)(
      "maxTickLength",
      e.maxYAxisTickLength
    )("tickFormatting", e.yAxisTickFormatting)("ticks", e.yAxisTicks)(
      "wrapTicks",
      e.wrapTicks
    );
  }
}
function J_(t, i, e) {
  e = e || {};
  let n,
    a,
    s,
    r = null,
    l = 0;
  function p() {
    (l = e.leading === !1 ? 0 : +new Date()), (r = null), (s = t.apply(n, a));
  }
  return function () {
    let h = +new Date();
    !l && e.leading === !1 && (l = h);
    let x = i - (h - l);
    return (
      (n = this),
      (a = arguments),
      x <= 0
        ? (clearTimeout(r), (r = null), (l = h), (s = t.apply(n, a)))
        : !r && e.trailing !== !1 && (r = setTimeout(p, x)),
      s
    );
  };
}
function ex(t, i) {
  return function (n, a, s) {
    return {
      configurable: !0,
      enumerable: s.enumerable,
      get: function () {
        return (
          Object.defineProperty(this, a, {
            configurable: !0,
            enumerable: s.enumerable,
            value: J_(s.value, t, i),
          }),
          this[a]
        );
      },
    };
  };
}
var U = (function (t) {
    return (
      (t.Top = "top"),
      (t.Bottom = "bottom"),
      (t.Left = "left"),
      (t.Right = "right"),
      (t.Center = "center"),
      t
    );
  })(U || {}),
  ni = 7;
function Zp(t, i, e) {
  if (e === U.Top) return t.top - ni;
  if (e === U.Bottom) return t.top + t.height - i.height + ni;
  if (e === U.Center) return t.top + t.height / 2 - i.height / 2;
}
function Jp(t, i, e) {
  if (e === U.Left) return t.left - ni;
  if (e === U.Right) return t.left + t.width - i.width + ni;
  if (e === U.Center) return t.left + t.width / 2 - i.width / 2;
}
var qn = class t {
    static calculateVerticalAlignment(i, e, n) {
      let a = Zp(i, e, n);
      return (
        a + e.height > window.innerHeight &&
          (a = window.innerHeight - e.height),
        a
      );
    }
    static calculateVerticalCaret(i, e, n, a) {
      let s;
      a === U.Top && (s = i.height / 2 - n.height / 2 + ni),
        a === U.Bottom && (s = e.height - i.height / 2 - n.height / 2 - ni),
        a === U.Center && (s = e.height / 2 - n.height / 2);
      let r = Zp(i, e, a);
      return (
        r + e.height > window.innerHeight &&
          (s += r + e.height - window.innerHeight),
        s
      );
    }
    static calculateHorizontalAlignment(i, e, n) {
      let a = Jp(i, e, n);
      return (
        a + e.width > window.innerWidth && (a = window.innerWidth - e.width), a
      );
    }
    static calculateHorizontalCaret(i, e, n, a) {
      let s;
      a === U.Left && (s = i.width / 2 - n.width / 2 + ni),
        a === U.Right && (s = e.width - i.width / 2 - n.width / 2 - ni),
        a === U.Center && (s = e.width / 2 - n.width / 2);
      let r = Jp(i, e, a);
      return (
        r + e.width > window.innerWidth &&
          (s += r + e.width - window.innerWidth),
        s
      );
    }
    static shouldFlip(i, e, n, a) {
      let s = !1;
      return (
        n === U.Right &&
          i.left + i.width + e.width + a > window.innerWidth &&
          (s = !0),
        n === U.Left && i.left - e.width - a < 0 && (s = !0),
        n === U.Top && i.top - e.height - a < 0 && (s = !0),
        n === U.Bottom &&
          i.top + i.height + e.height + a > window.innerHeight &&
          (s = !0),
        s
      );
    }
    static positionCaret(i, e, n, a, s) {
      let r = 0,
        l = 0;
      return (
        i === U.Right
          ? ((l = -7), (r = t.calculateVerticalCaret(n, e, a, s)))
          : i === U.Left
          ? ((l = e.width), (r = t.calculateVerticalCaret(n, e, a, s)))
          : i === U.Top
          ? ((r = e.height), (l = t.calculateHorizontalCaret(n, e, a, s)))
          : i === U.Bottom &&
            ((r = -7), (l = t.calculateHorizontalCaret(n, e, a, s))),
        { top: r, left: l }
      );
    }
    static positionContent(i, e, n, a, s) {
      let r = 0,
        l = 0;
      return (
        i === U.Right
          ? ((l = n.left + n.width + a),
            (r = t.calculateVerticalAlignment(n, e, s)))
          : i === U.Left
          ? ((l = n.left - e.width - a),
            (r = t.calculateVerticalAlignment(n, e, s)))
          : i === U.Top
          ? ((r = n.top - e.height - a),
            (l = t.calculateHorizontalAlignment(n, e, s)))
          : i === U.Bottom &&
            ((r = n.top + n.height + a),
            (l = t.calculateHorizontalAlignment(n, e, s))),
        { top: r, left: l }
      );
    }
    static determinePlacement(i, e, n, a) {
      if (t.shouldFlip(n, e, i, a)) {
        if (i === U.Right) return U.Left;
        if (i === U.Left) return U.Right;
        if (i === U.Top) return U.Bottom;
        if (i === U.Bottom) return U.Top;
      }
      return i;
    }
  },
  tx = (() => {
    class t {
      constructor(e, n, a) {
        (this.element = e), (this.renderer = n), (this.platformId = a);
      }
      get cssClasses() {
        let e = "ngx-charts-tooltip-content";
        return (
          (e += ` position-${this.placement}`),
          (e += ` type-${this.type}`),
          (e += ` ${this.cssClass}`),
          e
        );
      }
      ngAfterViewInit() {
        setTimeout(this.position.bind(this));
      }
      position() {
        if (!H(this.platformId)) return;
        let e = this.element.nativeElement,
          n = this.host.nativeElement.getBoundingClientRect();
        if (!n.height && !n.width) return;
        let a = e.getBoundingClientRect();
        this.checkFlip(n, a),
          this.positionContent(e, n, a),
          this.showCaret && this.positionCaret(n, a),
          setTimeout(() => this.renderer.addClass(e, "animate"), 1);
      }
      positionContent(e, n, a) {
        let { top: s, left: r } = qn.positionContent(
          this.placement,
          a,
          n,
          this.spacing,
          this.alignment
        );
        this.renderer.setStyle(e, "top", `${s}px`),
          this.renderer.setStyle(e, "left", `${r}px`);
      }
      positionCaret(e, n) {
        let a = this.caretElm.nativeElement,
          s = a.getBoundingClientRect(),
          { top: r, left: l } = qn.positionCaret(
            this.placement,
            n,
            e,
            s,
            this.alignment
          );
        this.renderer.setStyle(a, "top", `${r}px`),
          this.renderer.setStyle(a, "left", `${l}px`);
      }
      checkFlip(e, n) {
        this.placement = qn.determinePlacement(
          this.placement,
          n,
          e,
          this.spacing
        );
      }
      onWindowResize() {
        this.position();
      }
    }
    return (
      (t.ɵfac = function (e) {
        return new (e || t)(w(we), w(nt), w(j));
      }),
      (t.ɵcmp = F({
        type: t,
        selectors: [["ngx-tooltip-content"]],
        viewQuery: function (e, n) {
          if ((e & 1 && $e(Xf, 5), e & 2)) {
            let a;
            He((a = ze())) && (n.caretElm = a.first);
          }
        },
        hostVars: 2,
        hostBindings: function (e, n) {
          e & 1 &&
            S(
              "resize",
              function () {
                return n.onWindowResize();
              },
              !1,
              Te
            ),
            e & 2 && Mi(n.cssClasses);
        },
        inputs: {
          host: "host",
          showCaret: "showCaret",
          type: "type",
          placement: "placement",
          alignment: "alignment",
          spacing: "spacing",
          cssClass: "cssClass",
          title: "title",
          template: "template",
          context: "context",
        },
        decls: 6,
        vars: 6,
        consts: [
          ["caretElm", ""],
          [3, "hidden"],
          [1, "tooltip-content"],
          [4, "ngIf"],
          [3, "innerHTML", 4, "ngIf"],
          [3, "ngTemplateOutlet", "ngTemplateOutletContext"],
          [3, "innerHTML"],
        ],
        template: function (e, n) {
          e & 1 &&
            (c(0, "div"),
            T(1, "span", 1, 0),
            c(3, "div", 2),
            A(4, Uf, 2, 4, "span", 3)(5, Qf, 1, 1, "span", 4),
            d()()),
            e & 2 &&
              (o(),
              ci("tooltip-caret position-", n.placement, ""),
              u("hidden", !n.showCaret),
              o(3),
              u("ngIf", !n.title),
              o(),
              u("ngIf", n.title));
        },
        dependencies: [X, Yo],
        styles: [
          `.ngx-charts-tooltip-content{position:fixed;border-radius:3px;z-index:5000;display:block;font-weight:400;opacity:0;pointer-events:none!important}.ngx-charts-tooltip-content.type-popover{background:#fff;color:#060709;border:1px solid #72809b;box-shadow:0 1px 3px #0003,0 1px 1px #00000024,0 2px 1px -1px #0000001f;font-size:13px;padding:4px}.ngx-charts-tooltip-content.type-popover .tooltip-caret{position:absolute;z-index:5001;width:0;height:0}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-left{border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #fff}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-top{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #fff}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-right{border-top:7px solid transparent;border-bottom:7px solid transparent;border-right:7px solid #fff}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-bottom{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #fff}.ngx-charts-tooltip-content.type-tooltip{color:#fff;background:rgba(0,0,0,.75);font-size:12px;padding:0 10px;text-align:center;pointer-events:auto}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-left{border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-top{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-right{border-top:7px solid transparent;border-bottom:7px solid transparent;border-right:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-bottom{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content .tooltip-label{display:block;line-height:1em;padding:8px 5px 5px;font-size:1em}.ngx-charts-tooltip-content .tooltip-val{display:block;font-size:1.3em;line-height:1em;padding:0 5px 8px}.ngx-charts-tooltip-content .tooltip-caret{position:absolute;z-index:5001;width:0;height:0}.ngx-charts-tooltip-content.position-right{transform:translate(10px)}.ngx-charts-tooltip-content.position-left{transform:translate(-10px)}.ngx-charts-tooltip-content.position-top{transform:translateY(-10px)}.ngx-charts-tooltip-content.position-bottom{transform:translateY(10px)}.ngx-charts-tooltip-content.animate{opacity:1;transition:opacity .3s,transform .3s;transform:translate(0);pointer-events:auto}.area-tooltip-container{padding:5px 0;pointer-events:none}.tooltip-item{text-align:left;line-height:1.2em;padding:5px 0}.tooltip-item .tooltip-item-color{display:inline-block;height:12px;width:12px;margin-right:5px;color:#5b646b;border-radius:3px}
`,
        ],
        encapsulation: 2,
      })),
      Oo([ex(100)], t.prototype, "onWindowResize", null),
      t
    );
  })(),
  lo = class {
    constructor(i) {
      (this.injectionService = i),
        (this.defaults = {}),
        (this.components = new Map());
    }
    getByType(i = this.type) {
      return this.components.get(i);
    }
    create(i) {
      return this.createByType(this.type, i);
    }
    createByType(i, e) {
      e = this.assignDefaults(e);
      let n = this.injectComponent(i, e);
      return this.register(i, n), n;
    }
    destroy(i) {
      let e = this.components.get(i.componentType);
      if (e && e.length) {
        let n = e.indexOf(i);
        n > -1 && (e[n].destroy(), e.splice(n, 1));
      }
    }
    destroyAll() {
      this.destroyByType(this.type);
    }
    destroyByType(i) {
      let e = this.components.get(i);
      if (e && e.length) {
        let n = e.length - 1;
        for (; n >= 0; ) this.destroy(e[n--]);
      }
    }
    injectComponent(i, e) {
      return this.injectionService.appendComponent(i, e);
    }
    assignDefaults(i) {
      let e = ae({}, this.defaults.inputs),
        n = ae({}, this.defaults.outputs);
      return (
        !i.inputs && !i.outputs && (i = { inputs: i }),
        e && (i.inputs = ae(ae({}, e), i.inputs)),
        n && (i.outputs = ae(ae({}, n), i.outputs)),
        i
      );
    }
    register(i, e) {
      this.components.has(i) || this.components.set(i, []),
        this.components.get(i).push(e);
    }
  };
function ix(t) {
  return t.element;
}
var ch = (() => {
    class t {
      constructor(e, n, a) {
        (this.applicationRef = e),
          (this.componentFactoryResolver = n),
          (this.injector = a);
      }
      static setGlobalRootViewContainer(e) {
        t.globalRootViewContainer = e;
      }
      getRootViewContainer() {
        if (this._container) return this._container;
        if (t.globalRootViewContainer) return t.globalRootViewContainer;
        if (this.applicationRef.components.length)
          return this.applicationRef.components[0];
        throw new Error(
          "View Container not found! ngUpgrade needs to manually set this via setRootViewContainer or setGlobalRootViewContainer."
        );
      }
      setRootViewContainer(e) {
        this._container = e;
      }
      getComponentRootNode(e) {
        return ix(e)
          ? e.element.nativeElement
          : e.hostView && e.hostView.rootNodes.length > 0
          ? e.hostView.rootNodes[0]
          : e.location.nativeElement;
      }
      getRootViewContainerNode(e) {
        return this.getComponentRootNode(e);
      }
      projectComponentBindings(e, n) {
        if (n) {
          if (n.inputs !== void 0) {
            let a = Object.getOwnPropertyNames(n.inputs);
            for (let s of a) e.instance[s] = n.inputs[s];
          }
          if (n.outputs !== void 0) {
            let a = Object.getOwnPropertyNames(n.outputs);
            for (let s of a) e.instance[s] = n.outputs[s];
          }
        }
        return e;
      }
      appendComponent(e, n = {}, a) {
        a || (a = this.getRootViewContainer());
        let s = this.getComponentRootNode(a),
          r = new Va(
            s,
            this.componentFactoryResolver,
            this.applicationRef,
            this.injector
          ),
          l = new Sn(e),
          p = r.attach(l);
        return this.projectComponentBindings(p, n), p;
      }
    }
    return (
      (t.globalRootViewContainer = null),
      (t.ɵfac = function (e) {
        return new (e || t)(We(ta), We(Ho), We(ln));
      }),
      (t.ɵprov = Me({ token: t, factory: t.ɵfac })),
      t
    );
  })(),
  ho = (() => {
    class t extends lo {
      constructor(e) {
        super(e), (this.type = tx);
      }
    }
    return (
      (t.ɵfac = function (e) {
        return new (e || t)(We(ch));
      }),
      (t.ɵprov = Me({ token: t, factory: t.ɵfac })),
      t
    );
  })(),
  Si = (function (t) {
    return (t.Right = "right"), (t.Below = "below"), t;
  })(Si || {}),
  Xn = (function (t) {
    return (t.ScaleLegend = "scaleLegend"), (t.Legend = "legend"), t;
  })(Xn || {}),
  se = (function (t) {
    return (
      (t.Time = "time"),
      (t.Linear = "linear"),
      (t.Ordinal = "ordinal"),
      (t.Quantile = "quantile"),
      t
    );
  })(se || {}),
  nx = (() => {
    class t {
      constructor() {
        this.horizontal = !1;
      }
      ngOnChanges(e) {
        let n = this.gradientString(this.colors.range(), this.colors.domain()),
          a = this.horizontal ? "right" : "bottom";
        this.gradient = `linear-gradient(to ${a}, ${n})`;
      }
      gradientString(e, n) {
        n.push(1);
        let a = [];
        return (
          e.reverse().forEach((s, r) => {
            a.push(`${s} ${Math.round(n[r] * 100)}%`);
          }),
          a.join(", ")
        );
      }
    }
    return (
      (t.ɵfac = function (e) {
        return new (e || t)();
      }),
      (t.ɵcmp = F({
        type: t,
        selectors: [["ngx-charts-scale-legend"]],
        inputs: {
          valueRange: "valueRange",
          colors: "colors",
          height: "height",
          width: "width",
          horizontal: "horizontal",
        },
        features: [ye],
        decls: 8,
        vars: 10,
        consts: [
          [1, "scale-legend"],
          [1, "scale-legend-label"],
          [1, "scale-legend-wrap"],
        ],
        template: function (e, n) {
          e & 1 &&
            (c(0, "div", 0)(1, "div", 1)(2, "span"),
            m(3),
            d()(),
            T(4, "div", 2),
            c(5, "div", 1)(6, "span"),
            m(7),
            d()()()),
            e & 2 &&
              (ct("height", n.horizontal ? void 0 : n.height, "px")(
                "width",
                n.width,
                "px"
              ),
              Ee("horizontal-legend", n.horizontal),
              o(3),
              _(n.valueRange[1].toLocaleString()),
              o(),
              ct("background", n.gradient),
              o(3),
              _(n.valueRange[0].toLocaleString()));
        },
        styles: [
          `.chart-legend{display:inline-block;padding:0;width:auto!important}.chart-legend .scale-legend{text-align:center;display:flex;flex-direction:column}.chart-legend .scale-legend-wrap{display:inline-block;flex:1;width:30px;border-radius:5px;margin:0 auto}.chart-legend .scale-legend-label{font-size:12px}.chart-legend .horizontal-legend.scale-legend{flex-direction:row}.chart-legend .horizontal-legend .scale-legend-wrap{width:auto;height:30px;margin:0 16px}
`,
        ],
        encapsulation: 2,
        changeDetection: 0,
      })),
      t
    );
  })();
function mo(t) {
  return (
    t instanceof Date ? (t = t.toLocaleDateString()) : (t = t.toLocaleString()),
    t
  );
}
function ax(t) {
  return t
    .toLocaleString()
    .replace(
      /[&'`"<>]/g,
      (i) =>
        ({
          "&": "&amp;",
          "'": "&#x27;",
          "`": "&#x60;",
          '"': "&quot;",
          "<": "&lt;",
          ">": "&gt;",
        }[i])
    );
}
var sx = (() => {
    class t {
      constructor() {
        (this.isActive = !1),
          (this.select = new $()),
          (this.activate = new $()),
          (this.deactivate = new $()),
          (this.toggle = new $());
      }
      get trimmedLabel() {
        return this.formattedLabel || "(empty)";
      }
      onMouseEnter() {
        this.activate.emit({ name: this.label });
      }
      onMouseLeave() {
        this.deactivate.emit({ name: this.label });
      }
    }
    return (
      (t.ɵfac = function (e) {
        return new (e || t)();
      }),
      (t.ɵcmp = F({
        type: t,
        selectors: [["ngx-charts-legend-entry"]],
        hostBindings: function (e, n) {
          e & 1 &&
            S("mouseenter", function () {
              return n.onMouseEnter();
            })("mouseleave", function () {
              return n.onMouseLeave();
            });
        },
        inputs: {
          color: "color",
          label: "label",
          formattedLabel: "formattedLabel",
          isActive: "isActive",
        },
        outputs: {
          select: "select",
          activate: "activate",
          deactivate: "deactivate",
          toggle: "toggle",
        },
        decls: 4,
        vars: 6,
        consts: [
          ["tabindex", "-1", 3, "click", "title"],
          [1, "legend-label-color", 3, "click"],
          [1, "legend-label-text"],
        ],
        template: function (e, n) {
          e & 1 &&
            (c(0, "span", 0),
            S("click", function () {
              return n.select.emit(n.formattedLabel);
            }),
            c(1, "span", 1),
            S("click", function () {
              return n.toggle.emit(n.formattedLabel);
            }),
            d(),
            c(2, "span", 2),
            m(3),
            d()()),
            e & 2 &&
              (Ee("active", n.isActive),
              u("title", n.formattedLabel),
              o(),
              ct("background-color", n.color),
              o(2),
              P(" ", n.trimmedLabel, " "));
        },
        encapsulation: 2,
        changeDetection: 0,
      })),
      t
    );
  })(),
  rx = (() => {
    class t {
      constructor(e) {
        (this.cd = e),
          (this.horizontal = !1),
          (this.labelClick = new $()),
          (this.labelActivate = new $()),
          (this.labelDeactivate = new $()),
          (this.legendEntries = []);
      }
      ngOnChanges(e) {
        this.update();
      }
      update() {
        this.cd.markForCheck(), (this.legendEntries = this.getLegendEntries());
      }
      getLegendEntries() {
        let e = [];
        for (let n of this.data) {
          let a = mo(n);
          e.findIndex((r) => r.label === a) === -1 &&
            e.push({
              label: n,
              formattedLabel: a,
              color: this.colors.getColor(n),
            });
        }
        return e;
      }
      isActive(e) {
        return this.activeEntries
          ? this.activeEntries.find((a) => e.label === a.name) !== void 0
          : !1;
      }
      activate(e) {
        this.labelActivate.emit(e);
      }
      deactivate(e) {
        this.labelDeactivate.emit(e);
      }
      trackBy(e, n) {
        return n.label;
      }
    }
    return (
      (t.ɵfac = function (e) {
        return new (e || t)(w(vt));
      }),
      (t.ɵcmp = F({
        type: t,
        selectors: [["ngx-charts-legend"]],
        inputs: {
          data: "data",
          title: "title",
          colors: "colors",
          height: "height",
          width: "width",
          activeEntries: "activeEntries",
          horizontal: "horizontal",
        },
        outputs: {
          labelClick: "labelClick",
          labelActivate: "labelActivate",
          labelDeactivate: "labelDeactivate",
        },
        features: [ye],
        decls: 5,
        vars: 9,
        consts: [
          ["class", "legend-title", 4, "ngIf"],
          [1, "legend-wrap"],
          [1, "legend-labels"],
          ["class", "legend-label", 4, "ngFor", "ngForOf", "ngForTrackBy"],
          [1, "legend-title"],
          [1, "legend-title-text"],
          [1, "legend-label"],
          [
            3,
            "select",
            "activate",
            "deactivate",
            "label",
            "formattedLabel",
            "color",
            "isActive",
          ],
        ],
        template: function (e, n) {
          e & 1 &&
            (c(0, "div"),
            A(1, Kf, 3, 1, "header", 0),
            c(2, "div", 1)(3, "ul", 2),
            A(4, Zf, 2, 4, "li", 3),
            d()()()),
            e & 2 &&
              (ct("width", n.width, "px"),
              o(),
              u("ngIf", (n.title == null ? null : n.title.length) > 0),
              o(2),
              ct("max-height", n.height - 45, "px"),
              Ee("horizontal-legend", n.horizontal),
              o(),
              u("ngForOf", n.legendEntries)("ngForTrackBy", n.trackBy));
        },
        dependencies: [sx, X, le],
        styles: [
          `.chart-legend{display:inline-block;padding:0;width:auto!important}.chart-legend .legend-title{white-space:nowrap;overflow:hidden;margin-left:10px;margin-bottom:5px;font-size:14px;font-weight:700}.chart-legend ul,.chart-legend li{padding:0;margin:0;list-style:none}.chart-legend .horizontal-legend li{display:inline-block}.chart-legend .legend-wrap{width:calc(100% - 10px)}.chart-legend .legend-labels{line-height:85%;list-style:none;text-align:left;float:left;width:100%;border-radius:3px;overflow-y:auto;overflow-x:hidden;white-space:nowrap;background:rgba(0,0,0,.05)}.chart-legend .legend-label{cursor:pointer;font-size:90%;margin:8px;color:#afb7c8}.chart-legend .legend-label:hover{color:#000;transition:.2s}.chart-legend .legend-label .active .legend-label-text{color:#000}.chart-legend .legend-label-color{display:inline-block;height:15px;width:15px;margin-right:5px;color:#5b646b;border-radius:3px}.chart-legend .legend-label-text{display:inline-block;vertical-align:top;line-height:15px;font-size:12px;width:calc(100% - 20px);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.chart-legend .legend-title-text{vertical-align:bottom;display:inline-block;line-height:16px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
`,
        ],
        encapsulation: 2,
        changeDetection: 0,
      })),
      t
    );
  })(),
  ox = (() => {
    class t {
      constructor() {
        (this.showLegend = !1),
          (this.animations = !0),
          (this.legendLabelClick = new $()),
          (this.legendLabelActivate = new $()),
          (this.legendLabelDeactivate = new $()),
          (this.LegendPosition = Si),
          (this.LegendType = Xn);
      }
      ngOnChanges(e) {
        this.update();
      }
      update() {
        let e = 0;
        this.showLegend &&
          ((this.legendType = this.getLegendType()),
          (!this.legendOptions || this.legendOptions.position === Si.Right) &&
            (this.legendType === Xn.ScaleLegend ? (e = 1) : (e = 2)));
        let n = 12 - e;
        (this.chartWidth = Math.floor((this.view[0] * n) / 12)),
          (this.legendWidth =
            !this.legendOptions || this.legendOptions.position === Si.Right
              ? Math.floor((this.view[0] * e) / 12)
              : this.chartWidth);
      }
      getLegendType() {
        return this.legendOptions.scaleType === se.Linear
          ? Xn.ScaleLegend
          : Xn.Legend;
      }
    }
    return (
      (t.ɵfac = function (e) {
        return new (e || t)();
      }),
      (t.ɵcmp = F({
        type: t,
        selectors: [["ngx-charts-chart"]],
        inputs: {
          view: "view",
          showLegend: "showLegend",
          legendOptions: "legendOptions",
          legendType: "legendType",
          activeEntries: "activeEntries",
          animations: "animations",
        },
        outputs: {
          legendLabelClick: "legendLabelClick",
          legendLabelActivate: "legendLabelActivate",
          legendLabelDeactivate: "legendLabelDeactivate",
        },
        features: [xt([ho]), ye],
        ngContentSelectors: Jf,
        decls: 5,
        vars: 8,
        consts: [
          [1, "ngx-charts-outer"],
          [1, "ngx-charts"],
          [
            "class",
            "chart-legend",
            3,
            "horizontal",
            "valueRange",
            "colors",
            "height",
            "width",
            4,
            "ngIf",
          ],
          [
            "class",
            "chart-legend",
            3,
            "horizontal",
            "data",
            "title",
            "colors",
            "height",
            "width",
            "activeEntries",
            "labelClick",
            "labelActivate",
            "labelDeactivate",
            4,
            "ngIf",
          ],
          [
            1,
            "chart-legend",
            3,
            "horizontal",
            "valueRange",
            "colors",
            "height",
            "width",
          ],
          [
            1,
            "chart-legend",
            3,
            "labelClick",
            "labelActivate",
            "labelDeactivate",
            "horizontal",
            "data",
            "title",
            "colors",
            "height",
            "width",
            "activeEntries",
          ],
        ],
        template: function (e, n) {
          e & 1 &&
            (Li(),
            c(0, "div", 0),
            z(),
            c(1, "svg", 1),
            Di(2),
            d(),
            A(3, e_, 1, 5, "ngx-charts-scale-legend", 2)(
              4,
              t_,
              1,
              7,
              "ngx-charts-legend",
              3
            ),
            d()),
            e & 2 &&
              (ct("width", n.view[0], "px")("height", n.view[1], "px"),
              o(),
              te("width", n.chartWidth)("height", n.view[1]),
              o(2),
              u(
                "ngIf",
                n.showLegend && n.legendType === n.LegendType.ScaleLegend
              ),
              o(),
              u("ngIf", n.showLegend && n.legendType === n.LegendType.Legend));
        },
        dependencies: [nx, rx, X],
        encapsulation: 2,
        changeDetection: 0,
      })),
      t
    );
  })(),
  lx = (() => {
    class t {
      constructor(e, n) {
        (this.element = e),
          (this.zone = n),
          (this.visible = new $()),
          (this.isVisible = !1),
          this.runCheck();
      }
      destroy() {
        clearTimeout(this.timeout);
      }
      onVisibilityChange() {
        this.zone.run(() => {
          (this.isVisible = !0), this.visible.emit(!0);
        });
      }
      runCheck() {
        let e = () => {
          if (!this.element) return;
          let { offsetHeight: n, offsetWidth: a } = this.element.nativeElement;
          n && a
            ? (clearTimeout(this.timeout), this.onVisibilityChange())
            : (clearTimeout(this.timeout),
              this.zone.runOutsideAngular(() => {
                this.timeout = setTimeout(() => e(), 100);
              }));
        };
        this.zone.runOutsideAngular(() => {
          this.timeout = setTimeout(() => e());
        });
      }
    }
    return (
      (t.ɵfac = function (e) {
        return new (e || t)(w(we), w(cn));
      }),
      (t.ɵdir = Le({
        type: t,
        selectors: [["visibility-observer"]],
        outputs: { visible: "visible" },
      })),
      t
    );
  })();
function eh(t) {
  return toString.call(t) === "[object Date]";
}
var cx = (() => {
    class t {
      constructor(e, n, a, s) {
        (this.chartElement = e),
          (this.zone = n),
          (this.cd = a),
          (this.platformId = s),
          (this.scheme = "cool"),
          (this.schemeType = se.Ordinal),
          (this.animations = !0),
          (this.select = new $());
      }
      ngOnInit() {
        Os(this.platformId) && (this.animations = !1);
      }
      ngAfterViewInit() {
        this.bindWindowResizeEvent(),
          (this.visibilityObserver = new lx(this.chartElement, this.zone)),
          this.visibilityObserver.visible.subscribe(this.update.bind(this));
      }
      ngOnDestroy() {
        this.unbindEvents(),
          this.visibilityObserver &&
            (this.visibilityObserver.visible.unsubscribe(),
            this.visibilityObserver.destroy());
      }
      ngOnChanges(e) {
        this.update();
      }
      update() {
        if (
          (this.results
            ? (this.results = this.cloneData(this.results))
            : (this.results = []),
          this.view)
        )
          (this.width = this.view[0]), (this.height = this.view[1]);
        else {
          let e = this.getContainerDims();
          e && ((this.width = e.width), (this.height = e.height));
        }
        this.width || (this.width = 600),
          this.height || (this.height = 400),
          (this.width = Math.floor(this.width)),
          (this.height = Math.floor(this.height)),
          this.cd && this.cd.markForCheck();
      }
      getContainerDims() {
        let e,
          n,
          a = this.chartElement.nativeElement;
        if (H(this.platformId) && a.parentNode !== null) {
          let s = a.parentNode.getBoundingClientRect();
          (e = s.width), (n = s.height);
        }
        return e && n ? { width: e, height: n } : null;
      }
      formatDates() {
        for (let e = 0; e < this.results.length; e++) {
          let n = this.results[e];
          if (
            ((n.label = n.name),
            eh(n.label) && (n.label = n.label.toLocaleDateString()),
            n.series)
          )
            for (let a = 0; a < n.series.length; a++) {
              let s = n.series[a];
              (s.label = s.name),
                eh(s.label) && (s.label = s.label.toLocaleDateString());
            }
        }
      }
      unbindEvents() {
        this.resizeSubscription && this.resizeSubscription.unsubscribe();
      }
      bindWindowResizeEvent() {
        if (!H(this.platformId)) return;
        let n = Vo(window, "resize")
          .pipe(sn(200))
          .subscribe((a) => {
            this.update(), this.cd && this.cd.markForCheck();
          });
        this.resizeSubscription = n;
      }
      cloneData(e) {
        let n = [];
        for (let a of e) {
          let s = {};
          if (
            (a.name !== void 0 && (s.name = a.name),
            a.value !== void 0 && (s.value = a.value),
            a.series !== void 0)
          ) {
            s.series = [];
            for (let r of a.series) {
              let l = Object.assign({}, r);
              s.series.push(l);
            }
          }
          a.extra !== void 0 && (s.extra = JSON.parse(JSON.stringify(a.extra))),
            a.source !== void 0 && (s.source = a.source),
            a.target !== void 0 && (s.target = a.target),
            n.push(s);
        }
        return n;
      }
    }
    return (
      (t.ɵfac = function (e) {
        return new (e || t)(w(we), w(cn), w(vt), w(j));
      }),
      (t.ɵcmp = F({
        type: t,
        selectors: [["base-chart"]],
        inputs: {
          results: "results",
          view: "view",
          scheme: "scheme",
          schemeType: "schemeType",
          customColors: "customColors",
          animations: "animations",
        },
        outputs: { select: "select" },
        features: [ye],
        decls: 1,
        vars: 0,
        template: function (e, n) {
          e & 1 && T(0, "div");
        },
        encapsulation: 2,
      })),
      t
    );
  })(),
  Ie = (function (t) {
    return (
      (t.Top = "top"),
      (t.Bottom = "bottom"),
      (t.Left = "left"),
      (t.Right = "right"),
      t
    );
  })(Ie || {}),
  dh = (() => {
    class t {
      constructor(e) {
        (this.textHeight = 25),
          (this.margin = 5),
          (this.element = e.nativeElement);
      }
      ngOnChanges(e) {
        this.update();
      }
      update() {
        switch (
          ((this.strokeWidth = "0.01"),
          (this.textAnchor = "middle"),
          (this.transform = ""),
          this.orient)
        ) {
          case Ie.Top:
            (this.y = this.offset), (this.x = this.width / 2);
            break;
          case Ie.Bottom:
            (this.y = this.offset), (this.x = this.width / 2);
            break;
          case Ie.Left:
            (this.y = -(this.offset + this.textHeight + this.margin)),
              (this.x = -this.height / 2),
              (this.transform = "rotate(270)");
            break;
          case Ie.Right:
            (this.y = this.offset + this.margin),
              (this.x = -this.height / 2),
              (this.transform = "rotate(270)");
            break;
          default:
        }
      }
    }
    return (
      (t.ɵfac = function (e) {
        return new (e || t)(w(we));
      }),
      (t.ɵcmp = F({
        type: t,
        selectors: [["g", "ngx-charts-axis-label", ""]],
        inputs: {
          orient: "orient",
          label: "label",
          offset: "offset",
          width: "width",
          height: "height",
        },
        features: [ye],
        attrs: i_,
        decls: 2,
        vars: 6,
        template: function (e, n) {
          e & 1 && (z(), c(0, "text"), m(1), d()),
            e & 2 &&
              (te("stroke-width", n.strokeWidth)("x", n.x)("y", n.y)(
                "text-anchor",
                n.textAnchor
              )("transform", n.transform),
              o(),
              P(" ", n.label, " "));
        },
        encapsulation: 2,
        changeDetection: 0,
      })),
      t
    );
  })();
function ph(t, i = 16) {
  return typeof t != "string"
    ? typeof t == "number"
      ? t + ""
      : ""
    : ((t = t.trim()), t.length <= i ? t : `${t.slice(0, i)}...`);
}
function hh(t, i) {
  if (t.length > i) {
    let e = [],
      n = Math.floor(t.length / i);
    for (let a = 0; a < t.length; a++) a % n === 0 && e.push(t[a]);
    t = e;
  }
  return t;
}
function mh(t, i, e) {
  let n = (t || "").toString(),
    a = [];
  if (/\s/.test(n))
    a = n.split(/\s+/).reduce((s, r) => {
      let l = (s.pop() || "") + " ";
      return l.length + r.length > i
        ? [...s, l.trim(), r.trim()]
        : [...s, l + r];
    }, []);
  else {
    let s = 0;
    for (; s < n.length; ) a.push(n.substring(s, s + i)), (s += i);
  }
  return a.length > e && ((a = a.splice(0, e)), (a[a.length - 1] += "...")), a;
}
var Gt = (function (t) {
    return (t.Start = "start"), (t.Middle = "middle"), (t.End = "end"), t;
  })(Gt || {}),
  th = (() => {
    class t {
      constructor(e) {
        (this.platformId = e),
          (this.tickArguments = [5]),
          (this.tickStroke = "#ccc"),
          (this.trimTicks = !0),
          (this.maxTickLength = 16),
          (this.showGridLines = !1),
          (this.rotateTicks = !0),
          (this.wrapTicks = !1),
          (this.dimensionsChanged = new $()),
          (this.verticalSpacing = 20),
          (this.rotateLabels = !1),
          (this.innerTickSize = 6),
          (this.outerTickSize = 6),
          (this.tickPadding = 3),
          (this.textAnchor = Gt.Middle),
          (this.maxTicksLength = 0),
          (this.maxAllowedLength = 16),
          (this.height = 0),
          (this.approxHeight = 10),
          (this.maxPossibleLengthForTickIfWrapped = 16);
      }
      get isWrapTicksSupported() {
        return this.wrapTicks && this.scale.step;
      }
      ngOnChanges(e) {
        this.update();
      }
      ngAfterViewInit() {
        setTimeout(() => this.updateDims());
      }
      updateDims() {
        if (!H(this.platformId)) {
          this.dimensionsChanged.emit({ height: this.approxHeight });
          return;
        }
        let e = parseInt(
          this.ticksElement.nativeElement.getBoundingClientRect().height,
          10
        );
        e !== this.height &&
          ((this.height = e),
          this.dimensionsChanged.emit({ height: this.height }),
          setTimeout(() => this.updateDims()));
      }
      update() {
        let e = this.scale;
        (this.ticks = this.getTicks()),
          this.tickFormatting
            ? (this.tickFormat = this.tickFormatting)
            : e.tickFormat
            ? (this.tickFormat = e.tickFormat.apply(e, this.tickArguments))
            : (this.tickFormat = function (a) {
                return a.constructor.name === "Date"
                  ? a.toLocaleDateString()
                  : a.toLocaleString();
              });
        let n = this.rotateTicks ? this.getRotationAngle(this.ticks) : null;
        (this.adjustedScale = this.scale.bandwidth
          ? function (a) {
              return this.scale(a) + this.scale.bandwidth() * 0.5;
            }
          : this.scale),
          (this.textTransform = ""),
          n && n !== 0
            ? ((this.textTransform = `rotate(${n})`),
              (this.textAnchor = Gt.End),
              (this.verticalSpacing = 10))
            : (this.textAnchor = Gt.Middle),
          setTimeout(() => this.updateDims());
      }
      getRotationAngle(e) {
        let n = 0;
        this.maxTicksLength = 0;
        for (let v = 0; v < e.length; v++) {
          let b = this.tickFormat(e[v]).toString(),
            C = b.length;
          this.trimTicks && (C = this.tickTrim(b).length),
            C > this.maxTicksLength && (this.maxTicksLength = C);
        }
        let a = Math.min(this.maxTicksLength, this.maxAllowedLength),
          s = 7,
          r = a * s,
          l = r,
          p = Math.floor(this.width / e.length);
        for (; l > p && n > -90; )
          (n -= 30), (l = Math.cos(n * (Math.PI / 180)) * r);
        let h = 14;
        if (this.isWrapTicksSupported) {
          let v = this.ticks.reduce(
            (C, k) => (k.length > C.length ? k : C),
            ""
          );
          (h = 14 * (this.tickChunks(v).length || 1)),
            (this.maxPossibleLengthForTickIfWrapped =
              this.getMaxPossibleLengthForTick(v));
        }
        let x =
          n !== 0
            ? Math.max(
                Math.abs(Math.sin((n * Math.PI) / 180)) *
                  this.maxTickLength *
                  s,
                10
              )
            : h;
        return (this.approxHeight = Math.min(x, 200)), n;
      }
      getTicks() {
        let e,
          n = this.getMaxTicks(20),
          a = this.getMaxTicks(100);
        return (
          this.tickValues
            ? (e = this.tickValues)
            : this.scale.ticks
            ? (e = this.scale.ticks.apply(this.scale, [a]))
            : ((e = this.scale.domain()), (e = hh(e, n))),
          e
        );
      }
      getMaxTicks(e) {
        return Math.floor(this.width / e);
      }
      tickTransform(e) {
        return (
          "translate(" +
          this.adjustedScale(e) +
          "," +
          this.verticalSpacing +
          ")"
        );
      }
      gridLineTransform() {
        return `translate(0,${-this.verticalSpacing - 5})`;
      }
      tickTrim(e) {
        return this.trimTicks ? ph(e, this.maxTickLength) : e;
      }
      getMaxPossibleLengthForTick(e) {
        if (this.scale.bandwidth) {
          let a = Math.floor(this.scale.bandwidth() / 7),
            s = e.slice(0, a);
          return Math.max(s.length, this.maxTickLength);
        }
        return this.maxTickLength;
      }
      tickChunks(e) {
        if (e.toString().length > this.maxTickLength && this.scale.bandwidth) {
          let a = this.rotateTicks ? Math.floor(this.scale.step() / 14) : 5;
          if (a <= 1) return [this.tickTrim(e)];
          let s = Math.max(
            this.maxPossibleLengthForTickIfWrapped,
            this.maxTickLength
          );
          return (
            H(this.platformId) ||
              (s = Math.floor(
                Math.min(
                  this.approxHeight / 5,
                  Math.max(
                    this.maxPossibleLengthForTickIfWrapped,
                    this.maxTickLength
                  )
                )
              )),
            (a = Math.min(a, 5)),
            mh(e, s, a < 1 ? 1 : a)
          );
        }
        return [this.tickTrim(e)];
      }
    }
    return (
      (t.ɵfac = function (e) {
        return new (e || t)(w(j));
      }),
      (t.ɵcmp = F({
        type: t,
        selectors: [["g", "ngx-charts-x-axis-ticks", ""]],
        viewQuery: function (e, n) {
          if ((e & 1 && $e(lh, 5), e & 2)) {
            let a;
            He((a = ze())) && (n.ticksElement = a.first);
          }
        },
        inputs: {
          scale: "scale",
          orient: "orient",
          tickArguments: "tickArguments",
          tickValues: "tickValues",
          tickStroke: "tickStroke",
          trimTicks: "trimTicks",
          maxTickLength: "maxTickLength",
          tickFormatting: "tickFormatting",
          showGridLines: "showGridLines",
          gridLineHeight: "gridLineHeight",
          width: "width",
          rotateTicks: "rotateTicks",
          wrapTicks: "wrapTicks",
        },
        outputs: { dimensionsChanged: "dimensionsChanged" },
        features: [ye],
        attrs: n_,
        decls: 4,
        vars: 2,
        consts: [
          ["ticksel", ""],
          ["tmplMultilineTick", ""],
          ["tmplSinglelineTick", ""],
          ["class", "tick", 4, "ngFor", "ngForOf"],
          [4, "ngFor", "ngForOf"],
          [1, "tick"],
          [4, "ngIf"],
          ["stroke-width", "0.01", "font-size", "12px"],
          [4, "ngIf", "ngIfThen", "ngIfElse"],
          ["x", "0", 4, "ngFor", "ngForOf"],
          ["x", "0"],
          ["y2", "0", 1, "gridline-path", "gridline-path-vertical"],
        ],
        template: function (e, n) {
          e & 1 &&
            (z(),
            c(0, "g", null, 0),
            A(2, d_, 2, 2, "g", 3),
            d(),
            A(3, h_, 2, 2, "g", 4)),
            e & 2 && (o(2), u("ngForOf", n.ticks), o(), u("ngForOf", n.ticks));
        },
        dependencies: [le, X],
        encapsulation: 2,
        changeDetection: 0,
      })),
      t
    );
  })(),
  dx = (() => {
    class t {
      constructor() {
        (this.rotateTicks = !0),
          (this.showGridLines = !1),
          (this.xOrient = Ie.Bottom),
          (this.xAxisOffset = 0),
          (this.wrapTicks = !1),
          (this.dimensionsChanged = new $()),
          (this.xAxisClassName = "x axis"),
          (this.labelOffset = 0),
          (this.fill = "none"),
          (this.stroke = "stroke"),
          (this.tickStroke = "#ccc"),
          (this.strokeWidth = "none"),
          (this.padding = 5),
          (this.orientation = Ie);
      }
      ngOnChanges(e) {
        this.update();
      }
      update() {
        (this.transform = `translate(0,${
          this.xAxisOffset + this.padding + this.dims.height
        })`),
          typeof this.xAxisTickCount < "u" &&
            (this.tickArguments = [this.xAxisTickCount]);
      }
      emitTicksHeight({ height: e }) {
        let n = e + 25 + 5;
        n !== this.labelOffset &&
          ((this.labelOffset = n),
          setTimeout(() => {
            this.dimensionsChanged.emit({ height: e });
          }, 0));
      }
    }
    return (
      (t.ɵfac = function (e) {
        return new (e || t)();
      }),
      (t.ɵcmp = F({
        type: t,
        selectors: [["g", "ngx-charts-x-axis", ""]],
        viewQuery: function (e, n) {
          if ((e & 1 && $e(th, 5), e & 2)) {
            let a;
            He((a = ze())) && (n.ticksComponent = a.first);
          }
        },
        inputs: {
          xScale: "xScale",
          dims: "dims",
          trimTicks: "trimTicks",
          rotateTicks: "rotateTicks",
          maxTickLength: "maxTickLength",
          tickFormatting: "tickFormatting",
          showGridLines: "showGridLines",
          showLabel: "showLabel",
          labelText: "labelText",
          ticks: "ticks",
          xAxisTickCount: "xAxisTickCount",
          xOrient: "xOrient",
          xAxisOffset: "xAxisOffset",
          wrapTicks: "wrapTicks",
        },
        outputs: { dimensionsChanged: "dimensionsChanged" },
        features: [ye],
        attrs: m_,
        decls: 3,
        vars: 4,
        consts: [
          [
            "ngx-charts-x-axis-ticks",
            "",
            3,
            "trimTicks",
            "rotateTicks",
            "maxTickLength",
            "tickFormatting",
            "tickArguments",
            "tickStroke",
            "scale",
            "orient",
            "showGridLines",
            "gridLineHeight",
            "width",
            "tickValues",
            "wrapTicks",
            "dimensionsChanged",
            4,
            "ngIf",
          ],
          [
            "ngx-charts-axis-label",
            "",
            3,
            "label",
            "offset",
            "orient",
            "height",
            "width",
            4,
            "ngIf",
          ],
          [
            "ngx-charts-x-axis-ticks",
            "",
            3,
            "dimensionsChanged",
            "trimTicks",
            "rotateTicks",
            "maxTickLength",
            "tickFormatting",
            "tickArguments",
            "tickStroke",
            "scale",
            "orient",
            "showGridLines",
            "gridLineHeight",
            "width",
            "tickValues",
            "wrapTicks",
          ],
          [
            "ngx-charts-axis-label",
            "",
            3,
            "label",
            "offset",
            "orient",
            "height",
            "width",
          ],
        ],
        template: function (e, n) {
          e & 1 &&
            (z(), c(0, "g"), A(1, u_, 1, 13, "g", 0)(2, g_, 1, 5, "g", 1), d()),
            e & 2 &&
              (te("class", n.xAxisClassName)("transform", n.transform),
              o(),
              u("ngIf", n.xScale),
              o(),
              u("ngIf", n.showLabel));
        },
        dependencies: [th, dh, X],
        encapsulation: 2,
        changeDetection: 0,
      })),
      t
    );
  })();
function ti(t, i, e, n, a, [s, r, l, p]) {
  let h = "";
  return (
    (e = Math.floor(e)),
    (n = Math.floor(n)),
    (e = e === 0 ? 1 : e),
    (n = n === 0 ? 1 : n),
    (h = `M${[t + a, i]}`),
    (h += `h${e - 2 * a}`),
    r ? (h += `a${[a, a]} 0 0 1 ${[a, a]}`) : (h += `h${a}v${a}`),
    (h += `v${n - 2 * a}`),
    p ? (h += `a${[a, a]} 0 0 1 ${[-a, a]}`) : (h += `v${a}h${-a}`),
    (h += `h${2 * a - e}`),
    l ? (h += `a${[a, a]} 0 0 1 ${[-a, -a]}`) : (h += `h${-a}v${-a}`),
    (h += `v${2 * a - n}`),
    s ? (h += `a${[a, a]} 0 0 1 ${[a, -a]}`) : (h += `v${-a}h${a}`),
    (h += "z"),
    h
  );
}
var ih = (() => {
    class t {
      constructor(e) {
        (this.platformId = e),
          (this.tickArguments = [5]),
          (this.tickStroke = "#ccc"),
          (this.trimTicks = !0),
          (this.maxTickLength = 16),
          (this.showGridLines = !1),
          (this.showRefLabels = !1),
          (this.showRefLines = !1),
          (this.wrapTicks = !1),
          (this.dimensionsChanged = new $()),
          (this.innerTickSize = 6),
          (this.tickPadding = 3),
          (this.verticalSpacing = 20),
          (this.textAnchor = Gt.Middle),
          (this.width = 0),
          (this.outerTickSize = 6),
          (this.rotateLabels = !1),
          (this.referenceLineLength = 0),
          (this.Orientation = Ie);
      }
      ngOnChanges(e) {
        this.update();
      }
      ngAfterViewInit() {
        setTimeout(() => this.updateDims());
      }
      updateDims() {
        if (!H(this.platformId)) {
          (this.width = this.getApproximateAxisWidth()),
            this.dimensionsChanged.emit({ width: this.width });
          return;
        }
        let e = parseInt(
          this.ticksElement.nativeElement.getBoundingClientRect().width,
          10
        );
        e !== this.width &&
          ((this.width = e),
          this.dimensionsChanged.emit({ width: e }),
          setTimeout(() => this.updateDims()));
      }
      update() {
        let e = this.scale,
          n = this.orient === Ie.Top || this.orient === Ie.Right ? -1 : 1;
        switch (
          ((this.tickSpacing =
            Math.max(this.innerTickSize, 0) + this.tickPadding),
          (this.ticks = this.getTicks()),
          this.tickFormatting
            ? (this.tickFormat = this.tickFormatting)
            : e.tickFormat
            ? (this.tickFormat = e.tickFormat.apply(e, this.tickArguments))
            : (this.tickFormat = function (a) {
                return a.constructor.name === "Date"
                  ? a.toLocaleDateString()
                  : a.toLocaleString();
              }),
          (this.adjustedScale = e.bandwidth
            ? (a) => {
                let s = e(a) + e.bandwidth() * 0.5;
                if (
                  this.wrapTicks &&
                  a.toString().length > this.maxTickLength
                ) {
                  let r = this.tickChunks(a).length;
                  if (r === 1) return s;
                  let l = e.bandwidth(),
                    p = r * 8,
                    h = l * 0.5 - p * 0.5;
                  return e(a) + h;
                }
                return s;
              }
            : e),
          this.showRefLines && this.referenceLines && this.setReferencelines(),
          this.orient)
        ) {
          case Ie.Top:
            (this.transform = function (a) {
              return "translate(" + this.adjustedScale(a) + ",0)";
            }),
              (this.textAnchor = Gt.Middle),
              (this.y2 = this.innerTickSize * n),
              (this.y1 = this.tickSpacing * n),
              (this.dy = n < 0 ? "0em" : ".71em");
            break;
          case Ie.Bottom:
            (this.transform = function (a) {
              return "translate(" + this.adjustedScale(a) + ",0)";
            }),
              (this.textAnchor = Gt.Middle),
              (this.y2 = this.innerTickSize * n),
              (this.y1 = this.tickSpacing * n),
              (this.dy = n < 0 ? "0em" : ".71em");
            break;
          case Ie.Left:
            (this.transform = function (a) {
              return "translate(0," + this.adjustedScale(a) + ")";
            }),
              (this.textAnchor = Gt.End),
              (this.x2 = this.innerTickSize * -n),
              (this.x1 = this.tickSpacing * -n),
              (this.dy = ".32em");
            break;
          case Ie.Right:
            (this.transform = function (a) {
              return "translate(0," + this.adjustedScale(a) + ")";
            }),
              (this.textAnchor = Gt.Start),
              (this.x2 = this.innerTickSize * -n),
              (this.x1 = this.tickSpacing * -n),
              (this.dy = ".32em");
            break;
          default:
        }
        setTimeout(() => this.updateDims());
      }
      setReferencelines() {
        (this.refMin = this.adjustedScale(
          Math.min.apply(
            null,
            this.referenceLines.map((e) => e.value)
          )
        )),
          (this.refMax = this.adjustedScale(
            Math.max.apply(
              null,
              this.referenceLines.map((e) => e.value)
            )
          )),
          (this.referenceLineLength = this.referenceLines.length),
          (this.referenceAreaPath = ti(
            0,
            this.refMax,
            this.gridLineWidth,
            this.refMin - this.refMax,
            0,
            [!1, !1, !1, !1]
          ));
      }
      getTicks() {
        let e,
          n = this.getMaxTicks(20),
          a = this.getMaxTicks(50);
        return (
          this.tickValues
            ? (e = this.tickValues)
            : this.scale.ticks
            ? (e = this.scale.ticks.apply(this.scale, [a]))
            : ((e = this.scale.domain()), (e = hh(e, n))),
          e
        );
      }
      getMaxTicks(e) {
        return Math.floor(this.height / e);
      }
      tickTransform(e) {
        return `translate(${this.adjustedScale(e)},${this.verticalSpacing})`;
      }
      gridLineTransform() {
        return "translate(5,0)";
      }
      tickTrim(e) {
        return this.trimTicks ? ph(e, this.maxTickLength) : e;
      }
      getApproximateAxisWidth() {
        return (
          Math.max(
            ...this.ticks.map((a) => this.tickTrim(this.tickFormat(a)).length)
          ) * 7
        );
      }
      tickChunks(e) {
        if (e.toString().length > this.maxTickLength && this.scale.bandwidth) {
          let n = this.maxTickLength,
            a = Math.floor(this.scale.bandwidth() / 15);
          return a <= 1 ? [this.tickTrim(e)] : mh(e, n, Math.min(a, 5));
        }
        return [this.tickFormat(e)];
      }
    }
    return (
      (t.ɵfac = function (e) {
        return new (e || t)(w(j));
      }),
      (t.ɵcmp = F({
        type: t,
        selectors: [["g", "ngx-charts-y-axis-ticks", ""]],
        viewQuery: function (e, n) {
          if ((e & 1 && $e(lh, 5), e & 2)) {
            let a;
            He((a = ze())) && (n.ticksElement = a.first);
          }
        },
        inputs: {
          scale: "scale",
          orient: "orient",
          tickArguments: "tickArguments",
          tickValues: "tickValues",
          tickStroke: "tickStroke",
          trimTicks: "trimTicks",
          maxTickLength: "maxTickLength",
          tickFormatting: "tickFormatting",
          showGridLines: "showGridLines",
          gridLineWidth: "gridLineWidth",
          height: "height",
          referenceLines: "referenceLines",
          showRefLabels: "showRefLabels",
          showRefLines: "showRefLines",
          wrapTicks: "wrapTicks",
        },
        outputs: { dimensionsChanged: "dimensionsChanged" },
        features: [ye],
        attrs: f_,
        decls: 6,
        vars: 4,
        consts: [
          ["ticksel", ""],
          ["tmplMultilineTick", ""],
          ["tmplSinglelineTick", ""],
          ["class", "tick", 4, "ngFor", "ngForOf"],
          ["class", "reference-area", 4, "ngIf"],
          [4, "ngFor", "ngForOf"],
          [1, "tick"],
          [4, "ngIf"],
          ["stroke-width", "0.01"],
          [4, "ngIf", "ngIfThen", "ngIfElse"],
          [4, "ngIf", "ngIfElse"],
          ["x", "0", 4, "ngFor", "ngForOf"],
          ["x", "0"],
          [1, "reference-area"],
          [
            "class",
            "gridline-path gridline-path-horizontal",
            "x1",
            "0",
            4,
            "ngIf",
          ],
          ["x1", "0", 1, "gridline-path", "gridline-path-horizontal"],
          ["x1", "0", 1, "refline-path", "gridline-path-horizontal"],
          [1, "refline-label"],
        ],
        template: function (e, n) {
          e & 1 &&
            (z(),
            c(0, "g", null, 0),
            A(2, T_, 2, 2, "g", 3),
            d(),
            A(3, S_, 1, 2, "path", 4)(4, L_, 2, 2, "g", 5)(
              5,
              O_,
              2,
              1,
              "g",
              5
            )),
            e & 2 &&
              (o(2),
              u("ngForOf", n.ticks),
              o(),
              u(
                "ngIf",
                n.referenceLineLength > 1 &&
                  n.refMax &&
                  n.refMin &&
                  n.showRefLines
              ),
              o(),
              u("ngForOf", n.ticks),
              o(),
              u("ngForOf", n.referenceLines));
        },
        dependencies: [le, X],
        encapsulation: 2,
        changeDetection: 0,
      })),
      t
    );
  })(),
  px = (() => {
    class t {
      constructor() {
        (this.showGridLines = !1),
          (this.yOrient = Ie.Left),
          (this.yAxisOffset = 0),
          (this.wrapTicks = !1),
          (this.dimensionsChanged = new $()),
          (this.yAxisClassName = "y axis"),
          (this.labelOffset = 15),
          (this.fill = "none"),
          (this.stroke = "#CCC"),
          (this.tickStroke = "#CCC"),
          (this.strokeWidth = 1),
          (this.padding = 5);
      }
      ngOnChanges(e) {
        this.update();
      }
      update() {
        (this.offset = -(this.yAxisOffset + this.padding)),
          this.yOrient === Ie.Right
            ? ((this.labelOffset = 65),
              (this.transform = `translate(${
                this.offset + this.dims.width
              } , 0)`))
            : (this.transform = `translate(${this.offset} , 0)`),
          this.yAxisTickCount !== void 0 &&
            (this.tickArguments = [this.yAxisTickCount]);
      }
      emitTicksWidth({ width: e }) {
        e !== this.labelOffset && this.yOrient === Ie.Right
          ? ((this.labelOffset = e + this.labelOffset),
            setTimeout(() => {
              this.dimensionsChanged.emit({ width: e });
            }, 0))
          : e !== this.labelOffset &&
            ((this.labelOffset = e),
            setTimeout(() => {
              this.dimensionsChanged.emit({ width: e });
            }, 0));
      }
    }
    return (
      (t.ɵfac = function (e) {
        return new (e || t)();
      }),
      (t.ɵcmp = F({
        type: t,
        selectors: [["g", "ngx-charts-y-axis", ""]],
        viewQuery: function (e, n) {
          if ((e & 1 && $e(ih, 5), e & 2)) {
            let a;
            He((a = ze())) && (n.ticksComponent = a.first);
          }
        },
        inputs: {
          yScale: "yScale",
          dims: "dims",
          trimTicks: "trimTicks",
          maxTickLength: "maxTickLength",
          tickFormatting: "tickFormatting",
          ticks: "ticks",
          showGridLines: "showGridLines",
          showLabel: "showLabel",
          labelText: "labelText",
          yAxisTickCount: "yAxisTickCount",
          yOrient: "yOrient",
          referenceLines: "referenceLines",
          showRefLines: "showRefLines",
          showRefLabels: "showRefLabels",
          yAxisOffset: "yAxisOffset",
          wrapTicks: "wrapTicks",
        },
        outputs: { dimensionsChanged: "dimensionsChanged" },
        features: [ye],
        attrs: P_,
        decls: 3,
        vars: 4,
        consts: [
          [
            "ngx-charts-y-axis-ticks",
            "",
            3,
            "trimTicks",
            "maxTickLength",
            "tickFormatting",
            "tickArguments",
            "tickValues",
            "tickStroke",
            "scale",
            "orient",
            "showGridLines",
            "gridLineWidth",
            "referenceLines",
            "showRefLines",
            "showRefLabels",
            "height",
            "wrapTicks",
            "dimensionsChanged",
            4,
            "ngIf",
          ],
          [
            "ngx-charts-axis-label",
            "",
            3,
            "label",
            "offset",
            "orient",
            "height",
            "width",
            4,
            "ngIf",
          ],
          [
            "ngx-charts-y-axis-ticks",
            "",
            3,
            "dimensionsChanged",
            "trimTicks",
            "maxTickLength",
            "tickFormatting",
            "tickArguments",
            "tickValues",
            "tickStroke",
            "scale",
            "orient",
            "showGridLines",
            "gridLineWidth",
            "referenceLines",
            "showRefLines",
            "showRefLabels",
            "height",
            "wrapTicks",
          ],
          [
            "ngx-charts-axis-label",
            "",
            3,
            "label",
            "offset",
            "orient",
            "height",
            "width",
          ],
        ],
        template: function (e, n) {
          e & 1 &&
            (z(), c(0, "g"), A(1, I_, 1, 15, "g", 0)(2, F_, 1, 5, "g", 1), d()),
            e & 2 &&
              (te("class", n.yAxisClassName)("transform", n.transform),
              o(),
              u("ngIf", n.yScale),
              o(),
              u("ngIf", n.showLabel));
        },
        dependencies: [ih, dh, X],
        encapsulation: 2,
        changeDetection: 0,
      })),
      t
    );
  })(),
  nh = (() => {
    class t {}
    return (
      (t.ɵfac = function (e) {
        return new (e || t)();
      }),
      (t.ɵmod = ee({ type: t })),
      (t.ɵinj = J({ imports: [[Bt]] })),
      t
    );
  })(),
  uo = (function (t) {
    return (t.popover = "popover"), (t.tooltip = "tooltip"), t;
  })(uo || {}),
  Ki = (function (t) {
    return (
      (t[(t.all = "all")] = "all"),
      (t[(t.focus = "focus")] = "focus"),
      (t[(t.mouseover = "mouseover")] = "mouseover"),
      t
    );
  })(Ki || {}),
  hx = (() => {
    class t {
      constructor(e, n, a) {
        (this.tooltipService = e),
          (this.viewContainerRef = n),
          (this.renderer = a),
          (this.tooltipCssClass = ""),
          (this.tooltipAppendToBody = !0),
          (this.tooltipSpacing = 10),
          (this.tooltipDisabled = !1),
          (this.tooltipShowCaret = !0),
          (this.tooltipPlacement = U.Top),
          (this.tooltipAlignment = U.Center),
          (this.tooltipType = uo.popover),
          (this.tooltipCloseOnClickOutside = !0),
          (this.tooltipCloseOnMouseLeave = !0),
          (this.tooltipHideTimeout = 300),
          (this.tooltipShowTimeout = 100),
          (this.tooltipShowEvent = Ki.all),
          (this.tooltipImmediateExit = !1),
          (this.show = new $()),
          (this.hide = new $());
      }
      get listensForFocus() {
        return (
          this.tooltipShowEvent === Ki.all || this.tooltipShowEvent === Ki.focus
        );
      }
      get listensForHover() {
        return (
          this.tooltipShowEvent === Ki.all ||
          this.tooltipShowEvent === Ki.mouseover
        );
      }
      ngOnDestroy() {
        this.hideTooltip(!0);
      }
      onFocus() {
        this.listensForFocus && this.showTooltip();
      }
      onBlur() {
        this.listensForFocus && this.hideTooltip(!0);
      }
      onMouseEnter() {
        this.listensForHover && this.showTooltip();
      }
      onMouseLeave(e) {
        if (this.listensForHover && this.tooltipCloseOnMouseLeave) {
          if (
            (clearTimeout(this.timeout),
            this.component &&
              this.component.instance.element.nativeElement.contains(e))
          )
            return;
          this.hideTooltip(this.tooltipImmediateExit);
        }
      }
      onMouseClick() {
        this.listensForHover && this.hideTooltip(!0);
      }
      showTooltip(e) {
        if (this.component || this.tooltipDisabled) return;
        let n = e
          ? 0
          : this.tooltipShowTimeout +
            (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
              ? 400
              : 0);
        clearTimeout(this.timeout),
          (this.timeout = setTimeout(() => {
            this.tooltipService.destroyAll();
            let a = this.createBoundOptions();
            (this.component = this.tooltipService.create(a)),
              setTimeout(() => {
                this.component &&
                  this.addHideListeners(
                    this.component.instance.element.nativeElement
                  );
              }, 10),
              this.show.emit(!0);
          }, n));
      }
      addHideListeners(e) {
        (this.mouseEnterContentEvent = this.renderer.listen(
          e,
          "mouseenter",
          () => {
            clearTimeout(this.timeout);
          }
        )),
          this.tooltipCloseOnMouseLeave &&
            (this.mouseLeaveContentEvent = this.renderer.listen(
              e,
              "mouseleave",
              () => {
                this.hideTooltip(this.tooltipImmediateExit);
              }
            )),
          this.tooltipCloseOnClickOutside &&
            (this.documentClickEvent = this.renderer.listen(
              "window",
              "click",
              (n) => {
                e.contains(n.target) || this.hideTooltip();
              }
            ));
      }
      hideTooltip(e = !1) {
        if (!this.component) return;
        let n = () => {
          this.mouseLeaveContentEvent && this.mouseLeaveContentEvent(),
            this.mouseEnterContentEvent && this.mouseEnterContentEvent(),
            this.documentClickEvent && this.documentClickEvent(),
            this.hide.emit(!0),
            this.tooltipService.destroy(this.component),
            (this.component = void 0);
        };
        clearTimeout(this.timeout),
          e ? n() : (this.timeout = setTimeout(n, this.tooltipHideTimeout));
      }
      createBoundOptions() {
        return {
          title: this.tooltipTitle,
          template: this.tooltipTemplate,
          host: this.viewContainerRef.element,
          placement: this.tooltipPlacement,
          alignment: this.tooltipAlignment,
          type: this.tooltipType,
          showCaret: this.tooltipShowCaret,
          cssClass: this.tooltipCssClass,
          spacing: this.tooltipSpacing,
          context: this.tooltipContext,
        };
      }
    }
    return (
      (t.ɵfac = function (e) {
        return new (e || t)(w(ho), w(li), w(nt));
      }),
      (t.ɵdir = Le({
        type: t,
        selectors: [["", "ngx-tooltip", ""]],
        hostBindings: function (e, n) {
          e & 1 &&
            S("focusin", function () {
              return n.onFocus();
            })("blur", function () {
              return n.onBlur();
            })("mouseenter", function () {
              return n.onMouseEnter();
            })("mouseleave", function (s) {
              return n.onMouseLeave(s.target);
            })("click", function () {
              return n.onMouseClick();
            });
        },
        inputs: {
          tooltipCssClass: "tooltipCssClass",
          tooltipTitle: "tooltipTitle",
          tooltipAppendToBody: "tooltipAppendToBody",
          tooltipSpacing: "tooltipSpacing",
          tooltipDisabled: "tooltipDisabled",
          tooltipShowCaret: "tooltipShowCaret",
          tooltipPlacement: "tooltipPlacement",
          tooltipAlignment: "tooltipAlignment",
          tooltipType: "tooltipType",
          tooltipCloseOnClickOutside: "tooltipCloseOnClickOutside",
          tooltipCloseOnMouseLeave: "tooltipCloseOnMouseLeave",
          tooltipHideTimeout: "tooltipHideTimeout",
          tooltipShowTimeout: "tooltipShowTimeout",
          tooltipTemplate: "tooltipTemplate",
          tooltipShowEvent: "tooltipShowEvent",
          tooltipContext: "tooltipContext",
          tooltipImmediateExit: "tooltipImmediateExit",
        },
        outputs: { show: "show", hide: "hide" },
      })),
      t
    );
  })(),
  ah = (() => {
    class t {}
    return (
      (t.ɵfac = function (e) {
        return new (e || t)();
      }),
      (t.ɵmod = ee({ type: t })),
      (t.ɵinj = J({ providers: [ch, ho], imports: [[Bt]] })),
      t
    );
  })(),
  sh = {};
function uh() {
  let t = (
    "0000" + ((Math.random() * Math.pow(36, 4)) << 0).toString(36)
  ).slice(-4);
  return (t = `a${t}`), sh[t] ? uh() : ((sh[t] = !0), t);
}
var Xe = (function (t) {
    return (t.Vertical = "vertical"), (t.Horizontal = "horizontal"), t;
  })(Xe || {}),
  mx = (() => {
    class t {
      constructor() {
        this.orientation = Xe.Vertical;
      }
      ngOnChanges(e) {
        (this.x1 = "0%"),
          (this.x2 = "0%"),
          (this.y1 = "0%"),
          (this.y2 = "0%"),
          this.orientation === Xe.Horizontal
            ? (this.x2 = "100%")
            : this.orientation === Xe.Vertical && (this.y1 = "100%");
      }
    }
    return (
      (t.ɵfac = function (e) {
        return new (e || t)();
      }),
      (t.ɵcmp = F({
        type: t,
        selectors: [["g", "ngx-charts-svg-linear-gradient", ""]],
        inputs: { orientation: "orientation", name: "name", stops: "stops" },
        features: [ye],
        attrs: V_,
        decls: 2,
        vars: 6,
        consts: [
          [3, "id"],
          [3, "stop-color", "stop-opacity", 4, "ngFor", "ngForOf"],
        ],
        template: function (e, n) {
          e & 1 &&
            (z(), c(0, "linearGradient", 0), A(1, B_, 1, 5, "stop", 1), d()),
            e & 2 &&
              (u("id", n.name),
              te("x1", n.x1)("y1", n.y1)("x2", n.x2)("y2", n.y2),
              o(),
              u("ngForOf", n.stops));
        },
        dependencies: [le],
        encapsulation: 2,
        changeDetection: 0,
      })),
      t
    );
  })();
var co;
typeof window < "u" ? (co = window) : typeof global < "u" && (co = global);
var kM = co.MouseEvent;
var et = (() => {
  class t {}
  return (
    (t.ɵfac = function (e) {
      return new (e || t)();
    }),
    (t.ɵmod = ee({ type: t })),
    (t.ɵinj = J({ imports: [[Bt, nh, ah], Bt, nh, ah] })),
    t
  );
})();
function ux({
  width: t,
  height: i,
  margins: e,
  showXAxis: n = !1,
  showYAxis: a = !1,
  xAxisHeight: s = 0,
  yAxisWidth: r = 0,
  showXLabel: l = !1,
  showYLabel: p = !1,
  showLegend: h = !1,
  legendType: x = se.Ordinal,
  legendPosition: v = Si.Right,
  columns: b = 12,
}) {
  let C = e[3],
    k = t,
    D = i - e[0] - e[2];
  return (
    h && v === Si.Right && (x === se.Ordinal ? (b -= 2) : (b -= 1)),
    (k = (k * b) / 12),
    (k = k - e[1] - e[3]),
    n && ((D -= 5), (D -= s), l && (D -= 30)),
    a && ((k -= 5), (k -= r), (C += r), (C += 10), p && ((k -= 30), (C += 30))),
    (k = Math.max(0, k)),
    (D = Math.max(0, D)),
    { width: Math.floor(k), height: Math.floor(D), xOffset: Math.floor(C) }
  );
}
var rh = [
    {
      name: "vivid",
      selectable: !0,
      group: se.Ordinal,
      domain: [
        "#647c8a",
        "#3f51b5",
        "#2196f3",
        "#00b862",
        "#afdf0a",
        "#a7b61a",
        "#f3e562",
        "#ff9800",
        "#ff5722",
        "#ff4514",
      ],
    },
    {
      name: "natural",
      selectable: !0,
      group: se.Ordinal,
      domain: [
        "#bf9d76",
        "#e99450",
        "#d89f59",
        "#f2dfa7",
        "#a5d7c6",
        "#7794b1",
        "#afafaf",
        "#707160",
        "#ba9383",
        "#d9d5c3",
      ],
    },
    {
      name: "cool",
      selectable: !0,
      group: se.Ordinal,
      domain: [
        "#a8385d",
        "#7aa3e5",
        "#a27ea8",
        "#aae3f5",
        "#adcded",
        "#a95963",
        "#8796c0",
        "#7ed3ed",
        "#50abcc",
        "#ad6886",
      ],
    },
    {
      name: "fire",
      selectable: !0,
      group: se.Ordinal,
      domain: [
        "#ff3d00",
        "#bf360c",
        "#ff8f00",
        "#ff6f00",
        "#ff5722",
        "#e65100",
        "#ffca28",
        "#ffab00",
      ],
    },
    {
      name: "solar",
      selectable: !0,
      group: se.Linear,
      domain: [
        "#fff8e1",
        "#ffecb3",
        "#ffe082",
        "#ffd54f",
        "#ffca28",
        "#ffc107",
        "#ffb300",
        "#ffa000",
        "#ff8f00",
        "#ff6f00",
      ],
    },
    {
      name: "air",
      selectable: !0,
      group: se.Linear,
      domain: [
        "#e1f5fe",
        "#b3e5fc",
        "#81d4fa",
        "#4fc3f7",
        "#29b6f6",
        "#03a9f4",
        "#039be5",
        "#0288d1",
        "#0277bd",
        "#01579b",
      ],
    },
    {
      name: "aqua",
      selectable: !0,
      group: se.Linear,
      domain: [
        "#e0f7fa",
        "#b2ebf2",
        "#80deea",
        "#4dd0e1",
        "#26c6da",
        "#00bcd4",
        "#00acc1",
        "#0097a7",
        "#00838f",
        "#006064",
      ],
    },
    {
      name: "flame",
      selectable: !1,
      group: se.Ordinal,
      domain: [
        "#A10A28",
        "#D3342D",
        "#EF6D49",
        "#FAAD67",
        "#FDDE90",
        "#DBED91",
        "#A9D770",
        "#6CBA67",
        "#2C9653",
        "#146738",
      ],
    },
    {
      name: "ocean",
      selectable: !1,
      group: se.Ordinal,
      domain: [
        "#1D68FB",
        "#33C0FC",
        "#4AFFFE",
        "#AFFFFF",
        "#FFFC63",
        "#FDBD2D",
        "#FC8A25",
        "#FA4F1E",
        "#FA141B",
        "#BA38D1",
      ],
    },
    {
      name: "forest",
      selectable: !1,
      group: se.Ordinal,
      domain: [
        "#55C22D",
        "#C1F33D",
        "#3CC099",
        "#AFFFFF",
        "#8CFC9D",
        "#76CFFA",
        "#BA60FB",
        "#EE6490",
        "#C42A1C",
        "#FC9F32",
      ],
    },
    {
      name: "horizon",
      selectable: !1,
      group: se.Ordinal,
      domain: [
        "#2597FB",
        "#65EBFD",
        "#99FDD0",
        "#FCEE4B",
        "#FEFCFA",
        "#FDD6E3",
        "#FCB1A8",
        "#EF6F7B",
        "#CB96E8",
        "#EFDEE0",
      ],
    },
    {
      name: "neons",
      selectable: !1,
      group: se.Ordinal,
      domain: [
        "#FF3333",
        "#FF33FF",
        "#CC33FF",
        "#0000FF",
        "#33CCFF",
        "#33FFFF",
        "#33FF66",
        "#CCFF33",
        "#FFCC00",
        "#FF6600",
      ],
    },
    {
      name: "picnic",
      selectable: !1,
      group: se.Ordinal,
      domain: [
        "#FAC51D",
        "#66BD6D",
        "#FAA026",
        "#29BB9C",
        "#E96B56",
        "#55ACD2",
        "#B7332F",
        "#2C83C9",
        "#9166B8",
        "#92E7E8",
      ],
    },
    {
      name: "night",
      selectable: !1,
      group: se.Ordinal,
      domain: [
        "#2B1B5A",
        "#501356",
        "#183356",
        "#28203F",
        "#391B3C",
        "#1E2B3C",
        "#120634",
        "#2D0432",
        "#051932",
        "#453080",
        "#75267D",
        "#2C507D",
        "#4B3880",
        "#752F7D",
        "#35547D",
      ],
    },
    {
      name: "nightLights",
      selectable: !1,
      group: se.Ordinal,
      domain: [
        "#4e31a5",
        "#9c25a7",
        "#3065ab",
        "#57468b",
        "#904497",
        "#46648b",
        "#32118d",
        "#a00fb3",
        "#1052a2",
        "#6e51bd",
        "#b63cc3",
        "#6c97cb",
        "#8671c1",
        "#b455be",
        "#7496c3",
      ],
    },
  ],
  po = class {
    constructor(i, e, n, a) {
      typeof i == "string" && (i = rh.find((s) => s.name === i)),
        (this.colorDomain = i.domain),
        (this.scaleType = e),
        (this.domain = n),
        (this.customColors = a),
        (this.scale = this.generateColorScheme(i, e, this.domain));
    }
    generateColorScheme(i, e, n) {
      typeof i == "string" && (i = rh.find((s) => s.name === i));
      let a;
      switch (e) {
        case se.Quantile:
          a = jn().range(i.domain).domain(n);
          break;
        case se.Ordinal:
          a = wi().range(i.domain).domain(n);
          break;
        case se.Linear:
          {
            let s = [...i.domain];
            s.length === 1 && (s.push(s[0]), (this.colorDomain = s));
            let r = qi(0, 1, 1 / s.length);
            a = ei().range(s).domain(r);
          }
          break;
        default:
          break;
      }
      return a;
    }
    getColor(i) {
      if (i == null) throw new Error("Value can not be null");
      if (this.scaleType === se.Linear) {
        let e = ei().domain(this.domain).range([0, 1]);
        return this.scale(e(i));
      } else {
        if (typeof this.customColors == "function") return this.customColors(i);
        let e = i.toString(),
          n;
        return (
          this.customColors &&
            this.customColors.length > 0 &&
            (n = this.customColors.find(
              (a) => a.name.toLowerCase() === e.toLowerCase()
            )),
          n ? n.value : this.scale(i)
        );
      }
    }
    getLinearGradientStops(i, e) {
      e === void 0 && (e = this.domain[0]);
      let n = ei().domain(this.domain).range([0, 1]),
        a = Yi().domain(this.colorDomain).range([0, 1]),
        s = this.getColor(i),
        r = n(e),
        l = this.getColor(e),
        p = n(i),
        h = 1,
        x = r,
        v = [];
      for (
        v.push({ color: l, offset: r, originalOffset: r, opacity: 1 });
        x < p && h < this.colorDomain.length;

      ) {
        let b = this.colorDomain[h],
          C = a(b);
        if (C <= r) {
          h++;
          continue;
        }
        if (C.toFixed(4) >= (p - a.bandwidth()).toFixed(4)) break;
        v.push({ color: b, offset: C, opacity: 1 }), (x = C), h++;
      }
      if (
        (v[v.length - 1].offset < 100 &&
          v.push({ color: s, offset: p, opacity: 1 }),
        p === r)
      )
        (v[0].offset = 0), (v[1].offset = 100);
      else if (v[v.length - 1].offset !== 100)
        for (let b of v) b.offset = ((b.offset - r) / (p - r)) * 100;
      return v;
    }
  };
var gx = (() => {
    class t {}
    return (
      (t.ɵfac = function (e) {
        return new (e || t)();
      }),
      (t.ɵmod = ee({ type: t })),
      (t.ɵinj = J({ imports: [[et]] })),
      t
    );
  })(),
  fx = (() => {
    class t {
      constructor(e) {
        (this.roundEdges = !0),
          (this.gradient = !1),
          (this.offset = 0),
          (this.isActive = !1),
          (this.animations = !0),
          (this.noBarWhenZero = !0),
          (this.select = new $()),
          (this.activate = new $()),
          (this.deactivate = new $()),
          (this.hasGradient = !1),
          (this.hideBar = !1),
          (this.element = e.nativeElement);
      }
      ngOnChanges(e) {
        e.roundEdges && this.loadAnimation(), this.update();
      }
      update() {
        (this.gradientId = "grad" + uh().toString()),
          (this.gradientFill = `url(#${this.gradientId})`),
          this.gradient || this.stops
            ? ((this.gradientStops = this.getGradient()),
              (this.hasGradient = !0))
            : (this.hasGradient = !1),
          this.updatePathEl(),
          this.checkToHideBar();
      }
      loadAnimation() {
        (this.path = this.getStartingPath()),
          setTimeout(this.update.bind(this), 100);
      }
      updatePathEl() {
        let e = Er(this.element).select(".bar"),
          n = this.getPath();
        this.animations
          ? e.transition().duration(500).attr("d", n)
          : e.attr("d", n);
      }
      getGradient() {
        return this.stops
          ? this.stops
          : [
              { offset: 0, color: this.fill, opacity: this.getStartOpacity() },
              { offset: 100, color: this.fill, opacity: 1 },
            ];
      }
      getStartingPath() {
        if (!this.animations) return this.getPath();
        let e = this.getRadius(),
          n;
        return (
          this.roundEdges
            ? this.orientation === Xe.Vertical
              ? ((e = Math.min(this.height, e)),
                (n = ti(
                  this.x,
                  this.y + this.height,
                  this.width,
                  1,
                  0,
                  this.edges
                )))
              : this.orientation === Xe.Horizontal &&
                ((e = Math.min(this.width, e)),
                (n = ti(this.x, this.y, 1, this.height, 0, this.edges)))
            : this.orientation === Xe.Vertical
            ? (n = ti(
                this.x,
                this.y + this.height,
                this.width,
                1,
                0,
                this.edges
              ))
            : this.orientation === Xe.Horizontal &&
              (n = ti(this.x, this.y, 1, this.height, 0, this.edges)),
          n
        );
      }
      getPath() {
        let e = this.getRadius(),
          n;
        return (
          this.roundEdges
            ? this.orientation === Xe.Vertical
              ? ((e = Math.min(this.height, e)),
                (n = ti(
                  this.x,
                  this.y,
                  this.width,
                  this.height,
                  e,
                  this.edges
                )))
              : this.orientation === Xe.Horizontal &&
                ((e = Math.min(this.width, e)),
                (n = ti(
                  this.x,
                  this.y,
                  this.width,
                  this.height,
                  e,
                  this.edges
                )))
            : (n = ti(this.x, this.y, this.width, this.height, e, this.edges)),
          n
        );
      }
      getRadius() {
        let e = 0;
        return (
          this.roundEdges &&
            this.height > 5 &&
            this.width > 5 &&
            (e = Math.floor(Math.min(5, this.height / 2, this.width / 2))),
          e
        );
      }
      getStartOpacity() {
        return this.roundEdges ? 0.2 : 0.5;
      }
      get edges() {
        let e = [!1, !1, !1, !1];
        return (
          this.roundEdges &&
            (this.orientation === Xe.Vertical
              ? this.data.value > 0
                ? (e = [!0, !0, !1, !1])
                : (e = [!1, !1, !0, !0])
              : this.orientation === Xe.Horizontal &&
                (this.data.value > 0
                  ? (e = [!1, !0, !1, !0])
                  : (e = [!0, !1, !0, !1]))),
          e
        );
      }
      onMouseEnter() {
        this.activate.emit(this.data);
      }
      onMouseLeave() {
        this.deactivate.emit(this.data);
      }
      checkToHideBar() {
        this.hideBar =
          this.noBarWhenZero &&
          ((this.orientation === Xe.Vertical && this.height === 0) ||
            (this.orientation === Xe.Horizontal && this.width === 0));
      }
    }
    return (
      (t.ɵfac = function (e) {
        return new (e || t)(w(we));
      }),
      (t.ɵcmp = F({
        type: t,
        selectors: [["g", "ngx-charts-bar", ""]],
        hostBindings: function (e, n) {
          e & 1 &&
            S("mouseenter", function () {
              return n.onMouseEnter();
            })("mouseleave", function () {
              return n.onMouseLeave();
            });
        },
        inputs: {
          fill: "fill",
          data: "data",
          width: "width",
          height: "height",
          x: "x",
          y: "y",
          orientation: "orientation",
          roundEdges: "roundEdges",
          gradient: "gradient",
          offset: "offset",
          isActive: "isActive",
          stops: "stops",
          animations: "animations",
          ariaLabel: "ariaLabel",
          noBarWhenZero: "noBarWhenZero",
        },
        outputs: {
          select: "select",
          activate: "activate",
          deactivate: "deactivate",
        },
        features: [ye],
        attrs: z_,
        decls: 2,
        vars: 8,
        consts: [
          [4, "ngIf"],
          [
            "stroke",
            "none",
            "role",
            "img",
            "tabIndex",
            "-1",
            1,
            "bar",
            3,
            "click",
          ],
          [
            "ngx-charts-svg-linear-gradient",
            "",
            3,
            "orientation",
            "name",
            "stops",
          ],
        ],
        template: function (e, n) {
          e & 1 &&
            (A(0, G_, 2, 3, "defs", 0),
            z(),
            c(1, "path", 1),
            S("click", function () {
              return n.select.emit(n.data);
            }),
            d()),
            e & 2 &&
              (u("ngIf", n.hasGradient),
              o(),
              Ee("active", n.isActive)("hidden", n.hideBar),
              te("d", n.path)("aria-label", n.ariaLabel)(
                "fill",
                n.hasGradient ? n.gradientFill : n.fill
              ));
        },
        dependencies: [mx, X],
        encapsulation: 2,
        changeDetection: 0,
      })),
      t
    );
  })(),
  ii = (function (t) {
    return (
      (t.Standard = "standard"),
      (t.Normalized = "normalized"),
      (t.Stacked = "stacked"),
      t
    );
  })(ii || {}),
  Zi = (function (t) {
    return (t.positive = "positive"), (t.negative = "negative"), t;
  })(Zi || {}),
  _x = (() => {
    class t {
      constructor(e) {
        (this.dimensionsChanged = new $()),
          (this.horizontalPadding = 2),
          (this.verticalPadding = 5),
          (this.element = e.nativeElement);
      }
      ngOnChanges(e) {
        this.update();
      }
      getSize() {
        let e = this.element.getBoundingClientRect().height,
          n = this.element.getBoundingClientRect().width;
        return { height: e, width: n, negative: this.value < 0 };
      }
      ngAfterViewInit() {
        this.dimensionsChanged.emit(this.getSize());
      }
      update() {
        this.valueFormatting
          ? (this.formatedValue = this.valueFormatting(this.value))
          : (this.formatedValue = mo(this.value)),
          this.orientation === "horizontal"
            ? ((this.x = this.barX + this.barWidth),
              this.value < 0
                ? ((this.x = this.x - this.horizontalPadding),
                  (this.textAnchor = "end"))
                : ((this.x = this.x + this.horizontalPadding),
                  (this.textAnchor = "start")),
              (this.y = this.barY + this.barHeight / 2))
            : ((this.x = this.barX + this.barWidth / 2),
              (this.y = this.barY + this.barHeight),
              this.value < 0
                ? ((this.y = this.y + this.verticalPadding),
                  (this.textAnchor = "end"))
                : ((this.y = this.y - this.verticalPadding),
                  (this.textAnchor = "start")),
              (this.transform = `rotate(-45, ${this.x} , ${this.y})`));
      }
    }
    return (
      (t.ɵfac = function (e) {
        return new (e || t)(w(we));
      }),
      (t.ɵcmp = F({
        type: t,
        selectors: [["g", "ngx-charts-bar-label", ""]],
        inputs: {
          value: "value",
          valueFormatting: "valueFormatting",
          barX: "barX",
          barY: "barY",
          barWidth: "barWidth",
          barHeight: "barHeight",
          orientation: "orientation",
        },
        outputs: { dimensionsChanged: "dimensionsChanged" },
        features: [ye],
        attrs: W_,
        decls: 2,
        vars: 5,
        consts: [["alignment-baseline", "middle", 1, "textDataLabel"]],
        template: function (e, n) {
          e & 1 && (z(), c(0, "text", 0), m(1), d()),
            e & 2 &&
              (te("text-anchor", n.textAnchor)("transform", n.transform)(
                "x",
                n.x
              )("y", n.y),
              o(),
              P(" ", n.formatedValue, " "));
        },
        styles: [".textDataLabel[_ngcontent-%COMP%]{font-size:11px}"],
        changeDetection: 0,
      })),
      t
    );
  })();
var xx = (() => {
    class t {
      constructor(e) {
        (this.platformId = e),
          (this.type = ii.Standard),
          (this.tooltipDisabled = !1),
          (this.animations = !0),
          (this.showDataLabel = !1),
          (this.noBarWhenZero = !0),
          (this.select = new $()),
          (this.activate = new $()),
          (this.deactivate = new $()),
          (this.dataLabelHeightChanged = new $()),
          (this.barsForDataLabels = []),
          (this.barOrientation = Xe),
          (this.isSSR = !1);
      }
      ngOnInit() {
        Os(this.platformId) && (this.isSSR = !0);
      }
      ngOnChanges(e) {
        this.update();
      }
      update() {
        this.updateTooltipSettings();
        let e;
        this.series.length && (e = this.xScale.bandwidth()),
          (e = Math.round(e));
        let n = Math.max(this.yScale.domain()[0], 0),
          a = { [Zi.positive]: 0, [Zi.negative]: 0 },
          s = Zi.positive,
          r;
        this.type === ii.Normalized &&
          (r = this.series.map((l) => l.value).reduce((l, p) => l + p, 0)),
          (this.bars = this.series.map((l, p) => {
            let h = l.value,
              x = this.getLabel(l),
              v = mo(x),
              b = this.roundEdges;
            s = h > 0 ? Zi.positive : Zi.negative;
            let C = {
              value: h,
              label: x,
              roundEdges: b,
              data: l,
              width: e,
              formattedLabel: v,
              height: 0,
              x: 0,
              y: 0,
            };
            if (this.type === ii.Standard)
              (C.height = Math.abs(this.yScale(h) - this.yScale(n))),
                (C.x = this.xScale(x)),
                h < 0 ? (C.y = this.yScale(0)) : (C.y = this.yScale(h));
            else if (this.type === ii.Stacked) {
              let D = a[s],
                B = D + h;
              (a[s] += h),
                (C.height = this.yScale(D) - this.yScale(B)),
                (C.x = 0),
                (C.y = this.yScale(B)),
                (C.offset0 = D),
                (C.offset1 = B);
            } else if (this.type === ii.Normalized) {
              let D = a[s],
                B = D + h;
              (a[s] += h),
                r > 0
                  ? ((D = (D * 100) / r), (B = (B * 100) / r))
                  : ((D = 0), (B = 0)),
                (C.height = this.yScale(D) - this.yScale(B)),
                (C.x = 0),
                (C.y = this.yScale(B)),
                (C.offset0 = D),
                (C.offset1 = B),
                (h = (B - D).toFixed(2) + "%");
            }
            this.colors.scaleType === se.Ordinal
              ? (C.color = this.colors.getColor(x))
              : this.type === ii.Standard
              ? ((C.color = this.colors.getColor(h)),
                (C.gradientStops = this.colors.getLinearGradientStops(h)))
              : ((C.color = this.colors.getColor(C.offset1)),
                (C.gradientStops = this.colors.getLinearGradientStops(
                  C.offset1,
                  C.offset0
                )));
            let k = v;
            return (
              (C.ariaLabel = v + " " + h.toLocaleString()),
              this.seriesName !== null &&
                this.seriesName !== void 0 &&
                ((k = `${this.seriesName} \u2022 ${v}`),
                (C.data.series = this.seriesName),
                (C.ariaLabel = this.seriesName + " " + C.ariaLabel)),
              (C.tooltipText = this.tooltipDisabled
                ? void 0
                : `
        <span class="tooltip-label">${ax(k)}</span>
        <span class="tooltip-val">${
          this.dataLabelFormatting
            ? this.dataLabelFormatting(h)
            : h.toLocaleString()
        }</span>
      `),
              C
            );
          })),
          this.updateDataLabels();
      }
      updateDataLabels() {
        if (this.type === ii.Stacked) {
          this.barsForDataLabels = [];
          let e = {};
          e.series = this.seriesName;
          let n = this.series
              .map((s) => s.value)
              .reduce((s, r) => (r > 0 ? s + r : s), 0),
            a = this.series
              .map((s) => s.value)
              .reduce((s, r) => (r < 0 ? s + r : s), 0);
          (e.total = n + a),
            (e.x = 0),
            (e.y = 0),
            e.total > 0
              ? (e.height = this.yScale(n))
              : (e.height = this.yScale(a)),
            (e.width = this.xScale.bandwidth()),
            this.barsForDataLabels.push(e);
        } else
          this.barsForDataLabels = this.series.map((e) => {
            let n = {};
            return (
              (n.series = this.seriesName ?? e.label),
              (n.total = e.value),
              (n.x = this.xScale(e.label)),
              (n.y = this.yScale(0)),
              (n.height = this.yScale(n.total) - this.yScale(0)),
              (n.width = this.xScale.bandwidth()),
              n
            );
          });
      }
      updateTooltipSettings() {
        (this.tooltipPlacement = this.tooltipDisabled ? void 0 : U.Top),
          (this.tooltipType = this.tooltipDisabled ? void 0 : uo.tooltip);
      }
      isActive(e) {
        return this.activeEntries
          ? this.activeEntries.find(
              (a) => e.name === a.name && e.value === a.value
            ) !== void 0
          : !1;
      }
      onClick(e) {
        this.select.emit(e);
      }
      getLabel(e) {
        return e.label ? e.label : e.name;
      }
      trackBy(e, n) {
        return n.label;
      }
      trackDataLabelBy(e, n) {
        return e + "#" + n.series + "#" + n.total;
      }
    }
    return (
      (t.ɵfac = function (e) {
        return new (e || t)(w(j));
      }),
      (t.ɵcmp = F({
        type: t,
        selectors: [["g", "ngx-charts-series-vertical", ""]],
        inputs: {
          dims: "dims",
          type: "type",
          series: "series",
          xScale: "xScale",
          yScale: "yScale",
          colors: "colors",
          gradient: "gradient",
          activeEntries: "activeEntries",
          seriesName: "seriesName",
          tooltipDisabled: "tooltipDisabled",
          tooltipTemplate: "tooltipTemplate",
          roundEdges: "roundEdges",
          animations: "animations",
          showDataLabel: "showDataLabel",
          dataLabelFormatting: "dataLabelFormatting",
          noBarWhenZero: "noBarWhenZero",
        },
        outputs: {
          select: "select",
          activate: "activate",
          deactivate: "deactivate",
          dataLabelHeightChanged: "dataLabelHeightChanged",
        },
        features: [ye],
        attrs: $_,
        decls: 3,
        vars: 3,
        consts: [
          [4, "ngIf"],
          [
            "ngx-charts-bar",
            "",
            "ngx-tooltip",
            "",
            3,
            "width",
            "height",
            "x",
            "y",
            "fill",
            "stops",
            "data",
            "orientation",
            "roundEdges",
            "gradient",
            "ariaLabel",
            "isActive",
            "tooltipDisabled",
            "tooltipPlacement",
            "tooltipType",
            "tooltipTitle",
            "tooltipTemplate",
            "tooltipContext",
            "noBarWhenZero",
            "animations",
            "select",
            "activate",
            "deactivate",
            4,
            "ngFor",
            "ngForOf",
            "ngForTrackBy",
          ],
          [
            "ngx-charts-bar",
            "",
            "ngx-tooltip",
            "",
            3,
            "select",
            "activate",
            "deactivate",
            "width",
            "height",
            "x",
            "y",
            "fill",
            "stops",
            "data",
            "orientation",
            "roundEdges",
            "gradient",
            "ariaLabel",
            "isActive",
            "tooltipDisabled",
            "tooltipPlacement",
            "tooltipType",
            "tooltipTitle",
            "tooltipTemplate",
            "tooltipContext",
            "noBarWhenZero",
            "animations",
          ],
          [
            "ngx-charts-bar-label",
            "",
            3,
            "barX",
            "barY",
            "barWidth",
            "barHeight",
            "value",
            "valueFormatting",
            "orientation",
            "dimensionsChanged",
            4,
            "ngFor",
            "ngForOf",
            "ngForTrackBy",
          ],
          [
            "ngx-charts-bar-label",
            "",
            3,
            "dimensionsChanged",
            "barX",
            "barY",
            "barWidth",
            "barHeight",
            "value",
            "valueFormatting",
            "orientation",
          ],
        ],
        template: function (e, n) {
          e & 1 &&
            A(0, X_, 2, 2, "g", 0)(1, Y_, 2, 2, "g", 0)(2, Q_, 2, 2, "g", 0),
            e & 2 &&
              (u("ngIf", !n.isSSR),
              o(),
              u("ngIf", n.isSSR),
              o(),
              u("ngIf", n.showDataLabel));
        },
        dependencies: [fx, _x, X, le, hx],
        encapsulation: 2,
        data: {
          animation: [
            na("animationState", [
              mn(":leave", [st({ opacity: 1 }), di(500, st({ opacity: 0 }))]),
            ]),
          ],
        },
        changeDetection: 0,
      })),
      t
    );
  })(),
  gh = (() => {
    class t extends cx {
      constructor() {
        super(...arguments),
          (this.legend = !1),
          (this.legendTitle = "Legend"),
          (this.legendPosition = Si.Right),
          (this.tooltipDisabled = !1),
          (this.showGridLines = !0),
          (this.activeEntries = []),
          (this.trimXAxisTicks = !0),
          (this.trimYAxisTicks = !0),
          (this.rotateXAxisTicks = !0),
          (this.maxXAxisTickLength = 16),
          (this.maxYAxisTickLength = 16),
          (this.barPadding = 8),
          (this.roundDomains = !1),
          (this.roundEdges = !0),
          (this.showDataLabel = !1),
          (this.noBarWhenZero = !0),
          (this.wrapTicks = !1),
          (this.activate = new $()),
          (this.deactivate = new $()),
          (this.margin = [10, 20, 10, 20]),
          (this.xAxisHeight = 0),
          (this.yAxisWidth = 0),
          (this.dataLabelMaxHeight = { negative: 0, positive: 0 });
      }
      update() {
        super.update(),
          this.showDataLabel ||
            (this.dataLabelMaxHeight = { negative: 0, positive: 0 }),
          (this.margin = [
            10 + this.dataLabelMaxHeight.positive,
            20,
            10 + this.dataLabelMaxHeight.negative,
            20,
          ]),
          (this.dims = ux({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType,
            legendPosition: this.legendPosition,
          })),
          this.formatDates(),
          this.showDataLabel &&
            (this.dims.height -= this.dataLabelMaxHeight.negative),
          (this.xScale = this.getXScale()),
          (this.yScale = this.getYScale()),
          this.setColors(),
          (this.legendOptions = this.getLegendOptions()),
          (this.transform = `translate(${this.dims.xOffset} , ${
            this.margin[0] + this.dataLabelMaxHeight.negative
          })`);
      }
      getXScale() {
        this.xDomain = this.getXDomain();
        let e = this.xDomain.length / (this.dims.width / this.barPadding + 1);
        return Yi()
          .range([0, this.dims.width])
          .paddingInner(e)
          .domain(this.xDomain);
      }
      getYScale() {
        this.yDomain = this.getYDomain();
        let e = ei().range([this.dims.height, 0]).domain(this.yDomain);
        return this.roundDomains ? e.nice() : e;
      }
      getXDomain() {
        return this.results.map((e) => e.label);
      }
      getYDomain() {
        let e = this.results.map((s) => s.value),
          n = this.yScaleMin
            ? Math.min(this.yScaleMin, ...e)
            : Math.min(0, ...e);
        this.yAxisTicks &&
          !this.yAxisTicks.some(isNaN) &&
          (n = Math.min(n, ...this.yAxisTicks));
        let a = this.yScaleMax
          ? Math.max(this.yScaleMax, ...e)
          : Math.max(0, ...e);
        return (
          this.yAxisTicks &&
            !this.yAxisTicks.some(isNaN) &&
            (a = Math.max(a, ...this.yAxisTicks)),
          [n, a]
        );
      }
      onClick(e) {
        this.select.emit(e);
      }
      setColors() {
        let e;
        this.schemeType === se.Ordinal
          ? (e = this.xDomain)
          : (e = this.yDomain),
          (this.colors = new po(
            this.scheme,
            this.schemeType,
            e,
            this.customColors
          ));
      }
      getLegendOptions() {
        let e = {
          scaleType: this.schemeType,
          colors: void 0,
          domain: [],
          title: void 0,
          position: this.legendPosition,
        };
        return (
          e.scaleType === se.Ordinal
            ? ((e.domain = this.xDomain),
              (e.colors = this.colors),
              (e.title = this.legendTitle))
            : ((e.domain = this.yDomain), (e.colors = this.colors.scale)),
          e
        );
      }
      updateYAxisWidth({ width: e }) {
        (this.yAxisWidth = e), this.update();
      }
      updateXAxisHeight({ height: e }) {
        (this.xAxisHeight = e), this.update();
      }
      onDataLabelMaxHeightChanged(e) {
        e.size.negative
          ? (this.dataLabelMaxHeight.negative = Math.max(
              this.dataLabelMaxHeight.negative,
              e.size.height
            ))
          : (this.dataLabelMaxHeight.positive = Math.max(
              this.dataLabelMaxHeight.positive,
              e.size.height
            )),
          e.index === this.results.length - 1 &&
            setTimeout(() => this.update());
      }
      onActivate(e, n = !1) {
        (e = this.results.find((s) =>
          n ? s.label === e.name : s.name === e.name
        )),
          !(
            this.activeEntries.findIndex(
              (s) =>
                s.name === e.name &&
                s.value === e.value &&
                s.series === e.series
            ) > -1
          ) &&
            ((this.activeEntries = [e, ...this.activeEntries]),
            this.activate.emit({ value: e, entries: this.activeEntries }));
      }
      onDeactivate(e, n = !1) {
        e = this.results.find((s) =>
          n ? s.label === e.name : s.name === e.name
        );
        let a = this.activeEntries.findIndex(
          (s) =>
            s.name === e.name && s.value === e.value && s.series === e.series
        );
        this.activeEntries.splice(a, 1),
          (this.activeEntries = [...this.activeEntries]),
          this.deactivate.emit({ value: e, entries: this.activeEntries });
      }
    }
    return (
      (t.ɵfac = (() => {
        let i;
        return function (n) {
          return (i || (i = on(t)))(n || t);
        };
      })()),
      (t.ɵcmp = F({
        type: t,
        selectors: [["ngx-charts-bar-vertical"]],
        contentQueries: function (e, n, a) {
          if ((e & 1 && Wo(a, N_, 5), e & 2)) {
            let s;
            He((s = ze())) && (n.tooltipTemplate = s.first);
          }
        },
        inputs: {
          legend: "legend",
          legendTitle: "legendTitle",
          legendPosition: "legendPosition",
          xAxis: "xAxis",
          yAxis: "yAxis",
          showXAxisLabel: "showXAxisLabel",
          showYAxisLabel: "showYAxisLabel",
          xAxisLabel: "xAxisLabel",
          yAxisLabel: "yAxisLabel",
          tooltipDisabled: "tooltipDisabled",
          gradient: "gradient",
          showGridLines: "showGridLines",
          activeEntries: "activeEntries",
          schemeType: "schemeType",
          trimXAxisTicks: "trimXAxisTicks",
          trimYAxisTicks: "trimYAxisTicks",
          rotateXAxisTicks: "rotateXAxisTicks",
          maxXAxisTickLength: "maxXAxisTickLength",
          maxYAxisTickLength: "maxYAxisTickLength",
          xAxisTickFormatting: "xAxisTickFormatting",
          yAxisTickFormatting: "yAxisTickFormatting",
          xAxisTicks: "xAxisTicks",
          yAxisTicks: "yAxisTicks",
          barPadding: "barPadding",
          roundDomains: "roundDomains",
          roundEdges: "roundEdges",
          yScaleMax: "yScaleMax",
          yScaleMin: "yScaleMin",
          showDataLabel: "showDataLabel",
          dataLabelFormatting: "dataLabelFormatting",
          noBarWhenZero: "noBarWhenZero",
          wrapTicks: "wrapTicks",
        },
        outputs: { activate: "activate", deactivate: "deactivate" },
        features: [jt],
        decls: 5,
        vars: 25,
        consts: [
          [
            3,
            "legendLabelClick",
            "legendLabelActivate",
            "legendLabelDeactivate",
            "view",
            "showLegend",
            "legendOptions",
            "activeEntries",
            "animations",
          ],
          [1, "bar-chart", "chart"],
          [
            "ngx-charts-x-axis",
            "",
            3,
            "xScale",
            "dims",
            "showGridLines",
            "showLabel",
            "labelText",
            "trimTicks",
            "rotateTicks",
            "maxTickLength",
            "tickFormatting",
            "ticks",
            "xAxisOffset",
            "wrapTicks",
            "dimensionsChanged",
            4,
            "ngIf",
          ],
          [
            "ngx-charts-y-axis",
            "",
            3,
            "yScale",
            "dims",
            "showGridLines",
            "showLabel",
            "labelText",
            "trimTicks",
            "maxTickLength",
            "tickFormatting",
            "ticks",
            "wrapTicks",
            "dimensionsChanged",
            4,
            "ngIf",
          ],
          [
            "ngx-charts-series-vertical",
            "",
            3,
            "activate",
            "deactivate",
            "select",
            "dataLabelHeightChanged",
            "xScale",
            "yScale",
            "colors",
            "series",
            "dims",
            "gradient",
            "tooltipDisabled",
            "tooltipTemplate",
            "showDataLabel",
            "dataLabelFormatting",
            "activeEntries",
            "roundEdges",
            "animations",
            "noBarWhenZero",
          ],
          [
            "ngx-charts-x-axis",
            "",
            3,
            "dimensionsChanged",
            "xScale",
            "dims",
            "showGridLines",
            "showLabel",
            "labelText",
            "trimTicks",
            "rotateTicks",
            "maxTickLength",
            "tickFormatting",
            "ticks",
            "xAxisOffset",
            "wrapTicks",
          ],
          [
            "ngx-charts-y-axis",
            "",
            3,
            "dimensionsChanged",
            "yScale",
            "dims",
            "showGridLines",
            "showLabel",
            "labelText",
            "trimTicks",
            "maxTickLength",
            "tickFormatting",
            "ticks",
            "wrapTicks",
          ],
        ],
        template: function (e, n) {
          e & 1 &&
            (c(0, "ngx-charts-chart", 0),
            S("legendLabelClick", function (s) {
              return n.onClick(s);
            })("legendLabelActivate", function (s) {
              return n.onActivate(s, !0);
            })("legendLabelDeactivate", function (s) {
              return n.onDeactivate(s, !0);
            }),
            z(),
            c(1, "g", 1),
            A(2, K_, 1, 12, "g", 2)(3, Z_, 1, 10, "g", 3),
            c(4, "g", 4),
            S("activate", function (s) {
              return n.onActivate(s);
            })("deactivate", function (s) {
              return n.onDeactivate(s);
            })("select", function (s) {
              return n.onClick(s);
            })("dataLabelHeightChanged", function (s) {
              return n.onDataLabelMaxHeightChanged(s);
            }),
            d()()()),
            e & 2 &&
              (u("view", Xt(22, R_, n.width, n.height))("showLegend", n.legend)(
                "legendOptions",
                n.legendOptions
              )("activeEntries", n.activeEntries)("animations", n.animations),
              o(),
              te("transform", n.transform),
              o(),
              u("ngIf", n.xAxis),
              o(),
              u("ngIf", n.yAxis),
              o(),
              u("xScale", n.xScale)("yScale", n.yScale)("colors", n.colors)(
                "series",
                n.results
              )("dims", n.dims)("gradient", n.gradient)(
                "tooltipDisabled",
                n.tooltipDisabled
              )("tooltipTemplate", n.tooltipTemplate)(
                "showDataLabel",
                n.showDataLabel
              )("dataLabelFormatting", n.dataLabelFormatting)(
                "activeEntries",
                n.activeEntries
              )("roundEdges", n.roundEdges)("animations", n.animations)(
                "noBarWhenZero",
                n.noBarWhenZero
              ));
        },
        dependencies: [ox, dx, px, xx, X],
        styles: [H_],
        encapsulation: 2,
        changeDetection: 0,
      })),
      t
    );
  })();
var fh = (() => {
    class t {}
    return (
      (t.ɵfac = function (e) {
        return new (e || t)();
      }),
      (t.ɵmod = ee({ type: t })),
      (t.ɵinj = J({ imports: [[et]] })),
      t
    );
  })(),
  AM = (0, oh.default)();
var vx = (() => {
  class t {}
  return (
    (t.ɵfac = function (e) {
      return new (e || t)();
    }),
    (t.ɵmod = ee({ type: t })),
    (t.ɵinj = J({ imports: [[et]] })),
    t
  );
})();
var yx = (() => {
  class t {}
  return (
    (t.ɵfac = function (e) {
      return new (e || t)();
    }),
    (t.ɵmod = ee({ type: t })),
    (t.ɵinj = J({ imports: [[et]] })),
    t
  );
})();
var bx = (() => {
  class t {}
  return (
    (t.ɵfac = function (e) {
      return new (e || t)();
    }),
    (t.ɵmod = ee({ type: t })),
    (t.ɵinj = J({ imports: [[et]] })),
    t
  );
})();
var _h = (() => {
  class t {}
  return (
    (t.ɵfac = function (e) {
      return new (e || t)();
    }),
    (t.ɵmod = ee({ type: t })),
    (t.ɵinj = J({ imports: [[et]] })),
    t
  );
})();
var MM = 2 * Math.PI;
var go = (() => {
    class t {}
    return (
      (t.ɵfac = function (e) {
        return new (e || t)();
      }),
      (t.ɵmod = ee({ type: t })),
      (t.ɵinj = J({ imports: [[et]] })),
      t
    );
  })(),
  Cx = (() => {
    class t {}
    return (
      (t.ɵfac = function (e) {
        return new (e || t)();
      }),
      (t.ɵmod = ee({ type: t })),
      (t.ɵinj = J({ imports: [[et, go, _h]] })),
      t
    );
  })();
var wx = (() => {
  class t {}
  return (
    (t.ɵfac = function (e) {
      return new (e || t)();
    }),
    (t.ɵmod = ee({ type: t })),
    (t.ɵinj = J({ imports: [[et]] })),
    t
  );
})();
var Tx = (() => {
  class t {}
  return (
    (t.ɵfac = function (e) {
      return new (e || t)();
    }),
    (t.ɵmod = ee({ type: t })),
    (t.ɵinj = J({ imports: [[et]] })),
    t
  );
})();
var Sx = (() => {
  class t {}
  return (
    (t.ɵfac = function (e) {
      return new (e || t)();
    }),
    (t.ɵmod = ee({ type: t })),
    (t.ɵinj = J({ imports: [[et, go, fh]] })),
    t
  );
})();
function kx() {
  typeof SVGElement < "u" &&
    typeof SVGElement.prototype.contains > "u" &&
    (SVGElement.prototype.contains = HTMLDivElement.prototype.contains);
}
var Ax = (() => {
    class t {}
    return (
      (t.ɵfac = function (e) {
        return new (e || t)();
      }),
      (t.ɵmod = ee({ type: t })),
      (t.ɵinj = J({ imports: [[et]] })),
      t
    );
  })(),
  xh = (() => {
    class t {
      constructor() {
        kx();
      }
    }
    return (
      (t.ɵfac = function (e) {
        return new (e || t)();
      }),
      (t.ɵmod = ee({ type: t })),
      (t.ɵinj = J({
        imports: [et, gx, fh, vx, yx, bx, Ax, _h, Cx, wx, go, Tx, Sx],
      })),
      t
    );
  })();
var Dx = ["*"],
  Ex = (t) => ({ dropdown: t }),
  vh = (() => {
    class t {
      constructor() {
        (this.autoClose = !0),
          (this.insideClick = !1),
          (this.isAnimated = !1),
          (this.stopOnClickPropagation = !1);
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵprov = Me({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })(),
  Ji = (() => {
    class t {
      constructor() {
        (this.direction = "down"),
          (this.autoClose = !0),
          (this.insideClick = !1),
          (this.isAnimated = !1),
          (this.stopOnClickPropagation = !1),
          (this.isOpenChange = new $()),
          (this.isDisabledChange = new $()),
          (this.toggleClick = new $()),
          (this.counts = 0),
          (this.dropdownMenu = new Promise((e) => {
            this.resolveDropdownMenu = e;
          }));
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵprov = Me({ token: t, factory: t.ɵfac, providedIn: "platform" });
      }
    }
    return t;
  })(),
  Ox = "220ms cubic-bezier(0, 0, 0.2, 1)",
  yh = [
    st({ height: 0, overflow: "hidden" }),
    di(Ox, st({ height: "*", overflow: "hidden" })),
  ],
  Px = (() => {
    class t {
      get direction() {
        return this._state.direction;
      }
      constructor(e, n, a, s, r) {
        (this._state = e),
          (this.cd = n),
          (this._renderer = a),
          (this._element = s),
          (this.isOpen = !1),
          (this._factoryDropDownAnimation = r.build(yh)),
          (this._subscription = e.isOpenChange.subscribe((l) => {
            this.isOpen = l;
            let p = this._element.nativeElement.querySelector(".dropdown-menu");
            this._renderer.addClass(
              this._element.nativeElement.querySelector("div"),
              "open"
            ),
              p &&
                (this._renderer.addClass(p, "show"),
                (p.classList.contains("dropdown-menu-right") ||
                  p.classList.contains("dropdown-menu-end")) &&
                  (this._renderer.setStyle(p, "left", "auto"),
                  this._renderer.setStyle(p, "right", "0")),
                this.direction === "up" &&
                  (this._renderer.setStyle(p, "top", "auto"),
                  this._renderer.setStyle(
                    p,
                    "transform",
                    "translateY(-101%)"
                  ))),
              p &&
                this._state.isAnimated &&
                this._factoryDropDownAnimation.create(p).play(),
              this.cd.markForCheck(),
              this.cd.detectChanges();
          }));
      }
      _contains(e) {
        return this._element.nativeElement.contains(e);
      }
      ngOnDestroy() {
        this._subscription.unsubscribe();
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)(w(Ji), w(vt), w(nt), w(we), w(Is));
        };
      }
      static {
        this.ɵcmp = F({
          type: t,
          selectors: [["bs-dropdown-container"]],
          hostAttrs: [
            2,
            "display",
            "block",
            "position",
            "absolute",
            "z-index",
            "1040",
          ],
          standalone: !0,
          features: [ea],
          ngContentSelectors: Dx,
          decls: 2,
          vars: 9,
          consts: [[3, "ngClass"]],
          template: function (n, a) {
            n & 1 && (Li(), c(0, "div", 0), Di(1), d()),
              n & 2 &&
                (Ee("dropup", a.direction === "up")("show", a.isOpen)(
                  "open",
                  a.isOpen
                ),
                u("ngClass", V(7, Ex, a.direction === "down")));
          },
          dependencies: [yt],
          encapsulation: 2,
          changeDetection: 0,
        });
      }
    }
    return t;
  })(),
  Yn = (() => {
    class t {
      set autoClose(e) {
        this._state.autoClose = e;
      }
      get autoClose() {
        return this._state.autoClose;
      }
      set isAnimated(e) {
        this._state.isAnimated = e;
      }
      get isAnimated() {
        return this._state.isAnimated;
      }
      set insideClick(e) {
        this._state.insideClick = e;
      }
      get insideClick() {
        return this._state.insideClick;
      }
      set isDisabled(e) {
        (this._isDisabled = e),
          this._state.isDisabledChange.emit(e),
          e && this.hide();
      }
      get isDisabled() {
        return this._isDisabled;
      }
      get isOpen() {
        return this._showInline ? this._isInlineOpen : this._dropdown.isShown;
      }
      set isOpen(e) {
        e ? this.show() : this.hide();
      }
      get _showInline() {
        return !this.container;
      }
      constructor(e, n, a, s, r, l, p) {
        (this._elementRef = e),
          (this._renderer = n),
          (this._viewContainerRef = a),
          (this._cis = s),
          (this._state = r),
          (this._config = l),
          (this.dropup = !1),
          (this._isInlineOpen = !1),
          (this._isDisabled = !1),
          (this._subscriptions = []),
          (this._isInited = !1),
          (this._state.autoClose = this._config.autoClose),
          (this._state.insideClick = this._config.insideClick),
          (this._state.isAnimated = this._config.isAnimated),
          (this._state.stopOnClickPropagation =
            this._config.stopOnClickPropagation),
          (this._factoryDropDownAnimation = p.build(yh)),
          (this._dropdown = this._cis
            .createLoader(
              this._elementRef,
              this._viewContainerRef,
              this._renderer
            )
            .provide({ provide: Ji, useValue: this._state })),
          (this.onShown = this._dropdown.onShown),
          (this.onHidden = this._dropdown.onHidden),
          (this.isOpenChange = this._state.isOpenChange);
      }
      ngOnInit() {
        this._isInited ||
          ((this._isInited = !0),
          this._dropdown.listen({
            outsideClick: !1,
            triggers: this.triggers,
            show: () => this.show(),
          }),
          this._subscriptions.push(
            this._state.toggleClick.subscribe((e) => this.toggle(e))
          ),
          this._subscriptions.push(
            this._state.isDisabledChange
              .pipe($t((e) => e))
              .subscribe(() => this.hide())
          ));
      }
      show() {
        if (!(this.isOpen || this.isDisabled)) {
          if (this._showInline) {
            this._inlinedMenu ||
              this._state.dropdownMenu
                .then((e) => {
                  this._dropdown.attachInline(e.viewContainer, e.templateRef),
                    (this._inlinedMenu = this._dropdown._inlineViewRef),
                    this.addBs4Polyfills(),
                    this._inlinedMenu &&
                      this._renderer.addClass(
                        this._inlinedMenu.rootNodes[0].parentNode,
                        "open"
                      ),
                    this.playAnimation();
                })
                .catch(),
              this.addBs4Polyfills(),
              (this._isInlineOpen = !0),
              this.onShown.emit(!0),
              this._state.isOpenChange.emit(!0),
              this.playAnimation();
            return;
          }
          this._state.dropdownMenu
            .then((e) => {
              let n = this.dropup || (typeof this.dropup < "u" && this.dropup);
              this._state.direction = n ? "up" : "down";
              let a = this.placement || (n ? "top start" : "bottom start");
              this._dropdown
                .attach(Px)
                .to(this.container)
                .position({ attachment: a })
                .show({ content: e.templateRef, placement: a }),
                this._state.isOpenChange.emit(!0);
            })
            .catch();
        }
      }
      hide() {
        this.isOpen &&
          (this._showInline
            ? (this.removeShowClass(),
              this.removeDropupStyles(),
              (this._isInlineOpen = !1),
              this.onHidden.emit(!0))
            : this._dropdown.hide(),
          this._state.isOpenChange.emit(!1));
      }
      toggle(e) {
        return this.isOpen || !e ? this.hide() : this.show();
      }
      _contains(e) {
        return (
          this._elementRef.nativeElement.contains(e.target) ||
          (this._dropdown.instance &&
            this._dropdown.instance._contains(e.target))
        );
      }
      navigationClick(e) {
        let n = this._elementRef.nativeElement.querySelector(".dropdown-menu");
        if (!n) return;
        let a = this._elementRef.nativeElement.ownerDocument.activeElement,
          s = n.querySelectorAll(".dropdown-item");
        switch (e.keyCode) {
          case 38:
            this._state.counts > 0 && s[--this._state.counts].focus();
            break;
          case 40:
            this._state.counts + 1 < s.length &&
              (a.classList !== s[this._state.counts].classList
                ? s[this._state.counts].focus()
                : s[++this._state.counts].focus());
            break;
          default:
        }
        e.preventDefault();
      }
      ngOnDestroy() {
        for (let e of this._subscriptions) e.unsubscribe();
        this._dropdown.dispose();
      }
      addBs4Polyfills() {
        this.addShowClass(), this.checkRightAlignment(), this.addDropupStyles();
      }
      playAnimation() {
        this._state.isAnimated &&
          this._inlinedMenu &&
          setTimeout(() => {
            this._inlinedMenu &&
              this._factoryDropDownAnimation
                .create(this._inlinedMenu.rootNodes[0])
                .play();
          });
      }
      addShowClass() {
        this._inlinedMenu &&
          this._inlinedMenu.rootNodes[0] &&
          this._renderer.addClass(this._inlinedMenu.rootNodes[0], "show");
      }
      removeShowClass() {
        this._inlinedMenu &&
          this._inlinedMenu.rootNodes[0] &&
          this._renderer.removeClass(this._inlinedMenu.rootNodes[0], "show");
      }
      checkRightAlignment() {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
          let e =
            this._inlinedMenu.rootNodes[0].classList.contains(
              "dropdown-menu-right"
            ) ||
            this._inlinedMenu.rootNodes[0].classList.contains(
              "dropdown-menu-end"
            );
          this._renderer.setStyle(
            this._inlinedMenu.rootNodes[0],
            "left",
            e ? "auto" : "0"
          ),
            this._renderer.setStyle(
              this._inlinedMenu.rootNodes[0],
              "right",
              e ? "0" : "auto"
            );
        }
      }
      addDropupStyles() {
        this._inlinedMenu &&
          this._inlinedMenu.rootNodes[0] &&
          (this._renderer.setStyle(
            this._inlinedMenu.rootNodes[0],
            "top",
            this.dropup ? "auto" : "100%"
          ),
          this._renderer.setStyle(
            this._inlinedMenu.rootNodes[0],
            "transform",
            this.dropup ? "translateY(-101%)" : "translateY(0)"
          ),
          this._renderer.setStyle(
            this._inlinedMenu.rootNodes[0],
            "bottom",
            "auto"
          ));
      }
      removeDropupStyles() {
        this._inlinedMenu &&
          this._inlinedMenu.rootNodes[0] &&
          (this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], "top"),
          this._renderer.removeStyle(
            this._inlinedMenu.rootNodes[0],
            "transform"
          ),
          this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], "bottom"));
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)(w(we), w(nt), w(li), w(qt), w(Ji), w(vh), w(Is));
        };
      }
      static {
        this.ɵdir = Le({
          type: t,
          selectors: [
            ["", "bsDropdown", ""],
            ["", "dropdown", ""],
          ],
          hostVars: 6,
          hostBindings: function (n, a) {
            n & 1 &&
              S("keydown.arrowDown", function (r) {
                return a.navigationClick(r);
              })("keydown.arrowUp", function (r) {
                return a.navigationClick(r);
              }),
              n & 2 &&
                Ee("dropup", a.dropup)("open", a.isOpen)("show", a.isOpen);
          },
          inputs: {
            placement: "placement",
            triggers: "triggers",
            container: "container",
            dropup: "dropup",
            autoClose: "autoClose",
            isAnimated: "isAnimated",
            insideClick: "insideClick",
            isDisabled: "isDisabled",
            isOpen: "isOpen",
          },
          outputs: {
            isOpenChange: "isOpenChange",
            onShown: "onShown",
            onHidden: "onHidden",
          },
          exportAs: ["bs-dropdown"],
          standalone: !0,
          features: [xt([Ji, qt, vh])],
        });
      }
    }
    return t;
  })(),
  gs = (() => {
    class t {
      constructor(e, n, a) {
        e.resolveDropdownMenu({ templateRef: a, viewContainer: n });
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)(w(Ji), w(li), w(No));
        };
      }
      static {
        this.ɵdir = Le({
          type: t,
          selectors: [
            ["", "bsDropdownMenu", ""],
            ["", "dropdownMenu", ""],
          ],
          exportAs: ["bs-dropdown-menu"],
          standalone: !0,
        });
      }
    }
    return t;
  })(),
  fs = (() => {
    class t {
      constructor(e, n, a, s, r) {
        (this._changeDetectorRef = e),
          (this._dropdown = n),
          (this._element = a),
          (this._renderer = s),
          (this._state = r),
          (this.isOpen = !1),
          (this._subscriptions = []),
          this._subscriptions.push(
            this._state.isOpenChange.subscribe((l) => {
              (this.isOpen = l),
                l
                  ? ((this._documentClickListener = this._renderer.listen(
                      "document",
                      "click",
                      (p) => {
                        this._state.autoClose &&
                          p.button !== 2 &&
                          !this._element.nativeElement.contains(p.target) &&
                          !(
                            this._state.insideClick &&
                            this._dropdown._contains(p)
                          ) &&
                          (this._state.toggleClick.emit(!1),
                          this._changeDetectorRef.detectChanges());
                      }
                    )),
                    (this._escKeyUpListener = this._renderer.listen(
                      this._element.nativeElement,
                      "keyup.esc",
                      () => {
                        this._state.autoClose &&
                          (this._state.toggleClick.emit(!1),
                          this._changeDetectorRef.detectChanges());
                      }
                    )))
                  : (this._documentClickListener &&
                      this._documentClickListener(),
                    this._escKeyUpListener && this._escKeyUpListener());
            })
          ),
          this._subscriptions.push(
            this._state.isDisabledChange.subscribe(
              (l) => (this.isDisabled = l || void 0)
            )
          );
      }
      onClick(e) {
        this._state.stopOnClickPropagation && e.stopPropagation(),
          !this.isDisabled && this._state.toggleClick.emit(!0);
      }
      ngOnDestroy() {
        this._documentClickListener && this._documentClickListener(),
          this._escKeyUpListener && this._escKeyUpListener();
        for (let e of this._subscriptions) e.unsubscribe();
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)(w(vt), w(Yn), w(we), w(nt), w(Ji));
        };
      }
      static {
        this.ɵdir = Le({
          type: t,
          selectors: [
            ["", "bsDropdownToggle", ""],
            ["", "dropdownToggle", ""],
          ],
          hostVars: 3,
          hostBindings: function (n, a) {
            n & 1 &&
              S("click", function (r) {
                return a.onClick(r);
              }),
              n & 2 &&
                te("aria-haspopup", !0)("disabled", a.isDisabled)(
                  "aria-expanded",
                  a.isOpen
                );
          },
          exportAs: ["bs-dropdown-toggle"],
          standalone: !0,
        });
      }
    }
    return t;
  })(),
  bh = (() => {
    class t {
      static forRoot() {
        return { ngModule: t, providers: [] };
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵmod = ee({ type: t });
      }
      static {
        this.ɵinj = J({});
      }
    }
    return t;
  })();
var Ix = ["*"];
function Fx(t, i) {
  if ((t & 1 && (c(0, "h3", 3), m(1), d()), t & 2)) {
    let e = y();
    o(), _(e.title);
  }
}
var fo = (() => {
    class t {
      constructor() {
        (this.adaptivePosition = !0),
          (this.placement = "top"),
          (this.triggers = "click"),
          (this.outsideClick = !1),
          (this.delay = 0);
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵprov = Me({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })(),
  Vx = (() => {
    class t {
      set placement(e) {
        this._bsVersions.isBs5
          ? (this._placement = cl[e])
          : (this._placement = e);
      }
      get _bsVersions() {
        return ll();
      }
      constructor(e) {
        (this._placement = "top"), Object.assign(this, e);
      }
      checkMarginNecessity() {
        return dl(this._placement);
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)(w(fo));
        };
      }
      static {
        this.ɵcmp = F({
          type: t,
          selectors: [["popover-container"]],
          hostAttrs: [
            "role",
            "tooltip",
            2,
            "display",
            "block",
            "position",
            "absolute",
          ],
          hostVars: 7,
          hostBindings: function (n, a) {
            n & 2 &&
              (te("id", a.popoverId),
              Mi(
                "popover in popover-" +
                  a._placement +
                  " bs-popover-" +
                  a._placement +
                  " " +
                  a._placement +
                  " " +
                  a.containerClass +
                  " " +
                  a.checkMarginNecessity()
              ),
              Ee("show", !a._bsVersions.isBs3)("bs3", a._bsVersions.isBs3));
          },
          inputs: { placement: "placement", title: "title" },
          standalone: !0,
          features: [ea],
          ngContentSelectors: Ix,
          decls: 4,
          vars: 1,
          consts: [
            [1, "popover-arrow", "arrow"],
            ["class", "popover-title popover-header", 4, "ngIf"],
            [1, "popover-content", "popover-body"],
            [1, "popover-title", "popover-header"],
          ],
          template: function (n, a) {
            n & 1 &&
              (Li(),
              T(0, "div", 0),
              A(1, Fx, 2, 1, "h3", 1),
              c(2, "div", 2),
              Di(3),
              d()),
              n & 2 && (o(), u("ngIf", a.title));
          },
          dependencies: [X],
          styles: [
            ".popover.bottom[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%]{margin-left:-4px}[_nghost-%COMP%]   .popover-arrow[_ngcontent-%COMP%]{position:absolute}",
          ],
          changeDetection: 0,
        });
      }
    }
    return t;
  })(),
  Bx = 0,
  wh = (() => {
    class t {
      get isOpen() {
        return this._popover.isShown;
      }
      set isOpen(e) {
        e ? this.show() : this.hide();
      }
      constructor(e, n, a, s, r, l) {
        (this._elementRef = n),
          (this._renderer = a),
          (this._positionService = l),
          (this.popoverId = Bx++),
          (this.adaptivePosition = !0),
          (this.placement = "top"),
          (this.outsideClick = !1),
          (this.triggers = "click"),
          (this.containerClass = ""),
          (this.delay = 0),
          (this._isInited = !1),
          (this._popover = r
            .createLoader(n, s, a)
            .provide({ provide: fo, useValue: e })),
          Object.assign(this, e),
          (this.onShown = this._popover.onShown),
          (this.onHidden = this._popover.onHidden),
          typeof window < "u" &&
            n.nativeElement.addEventListener("click", function () {
              try {
                n.nativeElement.focus();
              } catch {
                return;
              }
            });
      }
      setAriaDescribedBy() {
        (this._ariaDescribedby = this.isOpen
          ? `ngx-popover-${this.popoverId}`
          : void 0),
          this._ariaDescribedby
            ? (this._popover.instance &&
                (this._popover.instance.popoverId = this._ariaDescribedby),
              this._renderer.setAttribute(
                this._elementRef.nativeElement,
                "aria-describedby",
                this._ariaDescribedby
              ))
            : this._renderer.removeAttribute(
                this._elementRef.nativeElement,
                "aria-describedby"
              );
      }
      show() {
        if (this._popover.isShown || !this.popover || this._delayTimeoutId)
          return;
        this._positionService.setOptions({
          modifiers: {
            flip: { enabled: this.adaptivePosition },
            preventOverflow: {
              enabled: this.adaptivePosition,
              boundariesElement: this.boundariesElement || "scrollParent",
            },
          },
        });
        let e = () => {
            this._delayTimeoutId && (this._delayTimeoutId = void 0),
              this._popover
                .attach(Vx)
                .to(this.container)
                .position({ attachment: this.placement })
                .show({
                  content: this.popover,
                  context: this.popoverContext,
                  placement: this.placement,
                  title: this.popoverTitle,
                  containerClass: this.containerClass,
                }),
              !this.adaptivePosition &&
                this._popover._componentRef &&
                (this._positionService.calcPosition(),
                this._positionService.deletePositionElement(
                  this._popover._componentRef.location
                )),
              (this.isOpen = !0),
              this.setAriaDescribedBy();
          },
          n = () => {
            this._popoverCancelShowFn && this._popoverCancelShowFn();
          };
        if (this.delay) {
          let a = Bo(this.delay).subscribe(() => {
            e(), n();
          });
          this.triggers &&
            ol(this.triggers).forEach((s) => {
              s.close &&
                (this._popoverCancelShowFn = this._renderer.listen(
                  this._elementRef.nativeElement,
                  s.close,
                  () => {
                    a.unsubscribe(), n();
                  }
                ));
            });
        } else e();
      }
      hide() {
        this._delayTimeoutId &&
          (clearTimeout(this._delayTimeoutId), (this._delayTimeoutId = void 0)),
          this.isOpen &&
            (this._popover.hide(),
            this.setAriaDescribedBy(),
            (this.isOpen = !1));
      }
      toggle() {
        if (this.isOpen) return this.hide();
        this.show();
      }
      ngOnInit() {
        this._isInited ||
          ((this._isInited = !0),
          this._popover.listen({
            triggers: this.triggers,
            outsideClick: this.outsideClick,
            show: () => this.show(),
            hide: () => this.hide(),
          }));
      }
      ngOnDestroy() {
        this._popover.dispose();
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)(w(fo), w(we), w(nt), w(li), w(qt), w(sa));
        };
      }
      static {
        this.ɵdir = Le({
          type: t,
          selectors: [["", "popover", ""]],
          inputs: {
            adaptivePosition: "adaptivePosition",
            boundariesElement: "boundariesElement",
            popover: "popover",
            popoverContext: "popoverContext",
            popoverTitle: "popoverTitle",
            placement: "placement",
            outsideClick: "outsideClick",
            triggers: "triggers",
            container: "container",
            containerClass: "containerClass",
            isOpen: "isOpen",
            delay: "delay",
          },
          outputs: { onShown: "onShown", onHidden: "onHidden" },
          exportAs: ["bs-popover"],
          standalone: !0,
          features: [xt([sa, qt])],
        });
      }
    }
    return t;
  })(),
  Th = (() => {
    class t {
      static forRoot() {
        return { ngModule: t, providers: [] };
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵmod = ee({ type: t });
      }
      static {
        this.ɵinj = J({ imports: [Bt] });
      }
    }
    return t;
  })();
function Rx(t, i) {
  if ((t & 1 && (c(0, "span", 14), m(1), g(2, "numberFormat"), d()), t & 2)) {
    let e = y(2);
    o(),
      mt(
        "",
        f(2, 2, +e.notificationData.data.tokensBought),
        " $",
        e.notificationData.data.slug,
        ""
      );
  }
}
function Hx(t, i) {
  if ((t & 1 && (c(0, "span", 14), m(1), g(2, "numberFormat"), d()), t & 2)) {
    let e = y(2);
    o(),
      mt(
        "",
        f(2, 2, +e.notificationData.data.amount),
        " $",
        e.notificationData.data.slug,
        ""
      );
  }
}
function zx(t, i) {
  t & 1 && (c(0, "span"), m(1, "for"), d());
}
function Gx(t, i) {
  if (
    (t & 1 && (c(0, "span", 14), m(1), g(2, "significantDecimal"), d()), t & 2)
  ) {
    let e = y(2);
    o(),
      mt(
        " ",
        f(2, 2, +e.notificationData.data.amountPaid),
        " ",
        e.getPurchaseToken(e.notificationData),
        " "
      );
  }
}
function Wx(t, i) {
  if (
    (t & 1 && (c(0, "span", 14), m(1), g(2, "significantDecimal"), d()), t & 2)
  ) {
    let e = y(2);
    o(),
      mt(
        " ",
        f(2, 2, +e.notificationData.data.usdEq),
        " ",
        e.getPurchaseToken(e.notificationData),
        " "
      );
  }
}
function $x(t, i) {
  if ((t & 1 && (c(0, "span"), m(1), g(2, "timeAgo"), d()), t & 2)) {
    let e = y(2);
    o(), _(f(2, 1, +e.notificationData.data.timestamp));
  }
}
function jx(t, i) {
  if (
    (t & 1 &&
      (c(0, "div", 15)(1, "span"),
      m(2),
      g(3, "timeAgo"),
      d(),
      c(4, "a", 16),
      z(),
      c(5, "svg", 17),
      T(6, "path", 18)(7, "path", 19)(8, "path", 20)(9, "path", 21)(
        10,
        "path",
        22
      )(11, "path", 23)(12, "path", 24)(13, "path", 25)(14, "path", 26)(
        15,
        "path",
        27
      )(16, "path", 28)(17, "path", 29)(18, "path", 30)(19, "path", 31)(
        20,
        "path",
        32
      )(21, "path", 33),
      d()()()),
    t & 2)
  ) {
    let e = y(2);
    o(2), _(f(3, 1, +e.notificationData.data.timestamp));
  }
}
function Xx(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 1),
      S("animationend", function () {
        M(e);
        let a = y();
        return L(a.handleAnimationEnd());
      }),
      T(1, "img", 2),
      c(2, "div", 3)(3, "div", 4)(4, "span"),
      m(5),
      g(6, "trimAddress"),
      d(),
      c(7, "a", 5)(8, "span"),
      m(9, "View Transaction"),
      d(),
      z(),
      c(10, "svg", 6),
      T(11, "path", 7),
      d()()(),
      As(),
      c(12, "div", 8)(13, "span"),
      m(14),
      d(),
      A(15, Rx, 3, 4, "span", 9)(16, Hx, 3, 4, "span", 9)(
        17,
        zx,
        2,
        0,
        "span",
        10
      )(18, Gx, 3, 4, "span", 9)(19, Wx, 3, 4, "span", 9)(
        20,
        $x,
        3,
        3,
        "span",
        10
      ),
      d(),
      A(21, jx, 22, 3, "div", 11),
      d(),
      z(),
      c(22, "svg", 12),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.closeNotification());
      }),
      T(23, "path", 13),
      d()();
  }
  if (t & 2) {
    let e = y();
    Mi(
      "notification-wrapper " +
        e.className +
        " " +
        e.position +
        " " +
        e.mobilePosition
    ),
      u("@fade", e.fadeState),
      o(),
      u(
        "src",
        e.notificationData == null || e.notificationData.data == null
          ? null
          : e.notificationData.data.logo,
        W
      ),
      o(4),
      _($o(6, 14, e.notificationData.data.user, 6, 4)),
      o(2),
      u("href", e.notificationData.data.explorerUrl, W),
      o(7),
      _(e.getEventName(e.notificationData.event)),
      o(),
      u("ngIf", !e.isClaimEvents(e.notificationData.event)),
      o(),
      u("ngIf", e.isClaimEvents(e.notificationData.event)),
      o(),
      u("ngIf", !e.isClaimEvents(e.notificationData.event)),
      o(),
      u(
        "ngIf",
        (e.notificationData == null || e.notificationData.data == null
          ? null
          : e.notificationData.data.isNativeToken) &&
          !e.isClaimEvents(e.notificationData.event)
      ),
      o(),
      u(
        "ngIf",
        !(
          !(e.notificationData == null || e.notificationData.data == null) &&
          e.notificationData.data.isNativeToken
        ) && !e.isClaimEvents(e.notificationData.event)
      ),
      o(),
      u("ngIf", !e.showLogo),
      o(),
      u("ngIf", e.showLogo);
  }
}
var _o = (function (t) {
    return (
      (t.TOKENS_BOUGHT = "TokensBought"),
      (t.TOKENS_BOUGHT_AND_STAKED = "TokenBoughtAndStaked"),
      (t.TOKENS_CLAIMED = "TokensClaimed"),
      (t.TOKENS_CLAIMED_AND_STAKED = "TokensClaimedAndStaked"),
      t
    );
  })(_o || {}),
  qx = [_o.TOKENS_CLAIMED, _o.TOKENS_CLAIMED_AND_STAKED],
  Yx = (() => {
    class t {
      transform(e) {
        return e == null
          ? "-"
          : e >= 1e6
          ? (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
          : e >= 1e3
          ? (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
          : e.toString();
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵpipe = rn({ name: "numberFormat", type: t, pure: !0 });
      }
    }
    return t;
  })(),
  Ux = (() => {
    class t {
      transform(e, n = 3) {
        if (e == null) return "-";
        let [a, s] = e.toString().split(".");
        if (a != "0") return e.toFixed(n);
        if (!s || n === 0) return a;
        let r = parseFloat(`0.${s}`).toPrecision(n).split(".")[1];
        return `${a}.${r}`;
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵpipe = rn({ name: "significantDecimal", type: t, pure: !0 });
      }
    }
    return t;
  })(),
  Qx = (() => {
    class t {
      transform(e) {
        if (!e) return "-";
        let a = Math.floor(Date.now() / 1e3) - e;
        switch (!0) {
          case a < 0:
            return "In the future";
          case a < 60:
            return `${a} sec ago`;
          case a < 3600:
            return `${Math.floor(a / 60)} min ago`;
          case a < 86400:
            return `${Math.floor(a / 3600)} hr ago`;
          default:
            return `${Math.floor(a / 86400)} days ago`;
        }
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵpipe = rn({ name: "timeAgo", type: t, pure: !0 });
      }
    }
    return t;
  })(),
  Kx = (() => {
    class t {
      transform(e, n = 6, a = 5) {
        return e ? e.slice(0, n) + "..." + e.slice(e.length - a) : "-";
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵpipe = rn({ name: "trimAddress", type: t, pure: !0 });
      }
    }
    return t;
  })(),
  Sh = (() => {
    class t {
      constructor() {
        (this.sseUrl = ""),
          (this.timeout = 12e3),
          (this.showLogo = !0),
          (this.position = "bottom-left"),
          (this.mobilePosition = "top"),
          (this.className = ""),
          (this.animationDuration = "500ms"),
          (this.pollRate = 1e3),
          (this.subscriptions = {}),
          (this.showNotification = !0),
          (this.timeoutId = null),
          (this.fadeState = "visible"),
          (this.eventSource = null),
          this.startListner();
      }
      startListner() {
        this.sseUrl != ""
          ? (this.subscriptions = this.connectToServerSentEvents(
              this.sseUrl
            ).subscribe({
              next: (e) => {
                (this.notificationData = JSON.parse(e.data)),
                  this.displayNotification();
              },
              error: (e) => {
                console.error("Notification Error:", e),
                  this.destroySubscription(),
                  (this.notificationData = {});
              },
            }))
          : setTimeout(() => {
              this.startListner();
            }, this.pollRate);
      }
      connectToServerSentEvents(e) {
        return new Kn(
          (n) => (
            (this.eventSource = new EventSource(e)),
            (this.eventSource.onerror = (a) => {
              n.error(a);
            }),
            (this.eventSource.onmessage = (a) => {
              n.next(a);
            }),
            () => {
              this.closeEventSource(), n.complete();
            }
          )
        );
      }
      displayNotification() {
        if (!this.notificationData || !this.notificationData.data) {
          console.warn("Notification data is not ready");
          return;
        }
        console.log("Notification Visible"),
          (this.showNotification = !0),
          (this.fadeState = "visible"),
          this.timeoutId &&
            (clearTimeout(this.timeoutId), (this.timeoutId = null)),
          (this.timeoutId = setTimeout(() => {
            console.log("Notification hidden"),
              (this.showNotification = !1),
              (this.fadeState = "hidden");
          }, this.timeout));
      }
      closeEventSource() {
        this.eventSource &&
          (this.eventSource.close(),
          (this.eventSource = null),
          this.subscriptions.unsubscribe());
      }
      handleAnimationEnd() {
        this.fadeState === "hidden" && (this.showNotification = !1);
      }
      closeNotification() {
        this.showNotification = !1;
      }
      destroySubscription() {
        Object.keys(this.subscriptions).length &&
          this.subscriptions.unsubscribe();
      }
      ngOnDestroy() {
        this.closeEventSource(),
          this.timeoutId &&
            (clearTimeout(this.timeoutId), (this.timeoutId = null));
      }
      getEventName(e) {
        switch (e) {
          case "TokensBought":
            return "Bought";
          case "TokenBoughtAndStaked":
            return "Bought and Staked";
          case "TokensClaimed":
            return "Claimed";
          case "TokensClaimedAndStaked":
            return "Claimed and Staked";
          default:
            return "Bought";
        }
      }
      getPurchaseToken(e) {
        if (e.data?.isNativeToken)
          switch (e.data.chain.toLowerCase()) {
            case "eth":
              return "ETH";
            case "bsc":
              return "BNB";
            case "polygon":
              return "POL";
            case "solana":
              return "SOL";
            default:
              return "ETH";
          }
        return "USDT";
      }
      isClaimEvents(e) {
        return qx.includes(e);
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵcmp = F({
          type: t,
          selectors: [["notif-library"]],
          inputs: {
            sseUrl: "sseUrl",
            timeout: "timeout",
            showLogo: "showLogo",
            position: "position",
            mobilePosition: "mobilePosition",
            className: "className",
            animationDuration: "animationDuration",
            pollRate: "pollRate",
          },
          decls: 1,
          vars: 1,
          consts: [
            [3, "class", "animationend", 4, "ngIf"],
            [3, "animationend"],
            ["alt", "Token Logo", "width", "36", "height", "36", 3, "src"],
            [1, "d-flex", "flex-column", "content"],
            [
              1,
              "d-flex",
              "align-items-center",
              "justify-content-between",
              "gap-1",
            ],
            [
              "target",
              "_blank",
              "rel",
              "noopener noreferrer",
              1,
              "link",
              "d-flex",
              "align-items-center",
              3,
              "href",
            ],
            [
              "width",
              "12",
              "height",
              "12",
              "viewBox",
              "0 0 12 12",
              "fill",
              "none",
              "xmlns",
              "http://www.w3.org/2000/svg",
            ],
            [
              "d",
              "M8.51824 0H3.48774C1.30265 0 0 1.30265 0 3.48774V8.51224C0 10.7033 1.30265 12.006 3.48774 12.006H8.51224C10.6973 12.006 12 10.7033 12 8.51824V3.48774C12.006 1.30265 10.7033 0 8.51824 0ZM9.15456 6.20109C9.15456 6.44721 8.95046 6.65131 8.70434 6.65131C8.45821 6.65131 8.25411 6.44721 8.25411 6.20109V4.38819L3.6198 9.0225C3.52976 9.11254 3.4157 9.15456 3.30165 9.15456C3.18759 9.15456 3.07353 9.11254 2.98349 9.0225C2.8094 8.84841 2.8094 8.56027 2.98349 8.38618L7.6178 3.75187H5.80489C5.55877 3.75187 5.35467 3.54777 5.35467 3.30165C5.35467 3.05552 5.55877 2.85142 5.80489 2.85142H8.70434C8.95046 2.85142 9.15456 3.05552 9.15456 3.30165V6.20109Z",
              "fill",
              "#1570EF",
            ],
            [1, "d-flex", "align-items-center", "gap-1", "flex-wrap"],
            ["class", "value", 4, "ngIf"],
            [4, "ngIf"],
            [
              "class",
              "d-flex align-items-center justify-content-between",
              4,
              "ngIf",
            ],
            [
              "version",
              "1.1",
              "id",
              "Layer_1",
              "width",
              "14",
              "height",
              "14",
              "xmlns",
              "http://www.w3.org/2000/svg",
              0,
              "xmlns",
              "xlink",
              "http://www.w3.org/1999/xlink",
              "x",
              "0px",
              "y",
              "0px",
              "viewBox",
              "12.6 12.6 14.8 14.8",
              "enable-background",
              "new 12.6 12.6 14.8 14.8",
              0,
              "xml",
              "space",
              "preserve",
              1,
              "cursor-pointer",
              3,
              "click",
            ],
            [
              "fill",
              "none",
              "stroke",
              "#000000",
              "stroke-width",
              "2",
              "stroke-linecap",
              "square",
              "d",
              "M26,14L14,26 M14,14l12,12",
            ],
            [1, "value"],
            [1, "d-flex", "align-items-center", "justify-content-between"],
            [
              "href",
              "https://web3paymentsolutions.io/",
              "target",
              "_blank",
              "rel",
              "noopener noreferrer",
              1,
              "link",
            ],
            [
              "width",
              "120",
              "height",
              "16",
              "viewBox",
              "0 0 93 12",
              "fill",
              "none",
              "xmlns",
              "http://www.w3.org/2000/svg",
            ],
            [
              "d",
              "M8.2627 0.00598145H9.94738L11.3288 6.22019L12.9231 0.00598145H14.675L16.1796 6.18588L17.5723 0.00598145H19.2689L17.0782 8.00881H15.2251L13.754 2.31047L12.2154 8.00881L10.375 8.02024L8.2627 0.00598145Z",
              "fill",
              "#101828",
            ],
            [
              "d",
              "M22.8731 8.02024C21.2182 8.02024 20.0166 6.84856 20.0166 5.02843C20.0166 3.1975 21.1885 2.03625 22.8731 2.03625C24.5182 2.03625 25.6799 3.17663 25.6799 4.90284C25.6816 5.09201 25.6677 5.28099 25.6385 5.46781H21.4753C21.5485 6.32495 22.1228 6.80645 22.8424 6.80645C23.4591 6.80645 23.7986 6.49266 23.9835 6.10582H25.5359C25.2272 7.17278 24.2816 8.02024 22.8731 8.02024ZM21.4855 4.48433H24.189C24.1685 3.72073 23.5443 3.21168 22.8042 3.21168C22.1153 3.21168 21.5987 3.68942 21.4855 4.48433Z",
              "fill",
              "#101828",
            ],
            [
              "d",
              "M72.9889 8.02024C71.3339 8.02024 70.1323 6.84856 70.1323 5.02843C70.1323 3.1975 71.3042 2.03625 72.9889 2.03625C74.6339 2.03625 75.7956 3.17663 75.7956 4.90284C75.7973 5.09201 75.7834 5.28099 75.7542 5.46781H71.591C71.6642 6.32495 72.2385 6.80645 72.9581 6.80645C73.5748 6.80645 73.9143 6.49266 74.0993 6.10582H75.6517C75.3429 7.17278 74.3974 8.02024 72.9889 8.02024ZM71.6012 4.48433H74.3047C74.2842 3.72073 73.688 3.21168 72.9478 3.21168C72.259 3.21168 71.7144 3.68942 71.6012 4.48433Z",
              "fill",
              "#101828",
            ],
            [
              "d",
              "M29.7842 2.04441C31.2596 2.04441 32.4122 3.20407 32.4122 5.0113C32.4122 6.81852 31.2589 8.02024 29.7842 8.02024C28.8804 8.02024 28.2773 7.6023 27.9242 7.101V8.02024H26.4282L26.4282 0.00598145H27.9242V2.98784C28.2766 2.45379 28.9115 2.04441 29.7842 2.04441ZM29.4012 3.21169C28.6239 3.21169 27.8836 3.81757 27.8836 4.91471C27.8836 6.01185 28.6213 6.73628 29.4012 6.73628C30.191 6.73628 30.9287 5.99063 30.9287 4.89349C30.9287 3.79635 30.1895 3.21169 29.4012 3.21169Z",
              "fill",
              "#101828",
            ],
            [
              "d",
              "M38.0756 5.81186C38.0756 7.08161 37.2122 8.02024 35.64 8.02024C34.3483 8.02024 33.4373 7.43555 33.1602 6.20001C33.4029 5.69173 34.3758 5.62026 34.3758 5.62026C34.4069 6.29277 34.8386 6.77292 35.6093 6.77292C36.3287 6.77292 36.6982 6.30342 36.6982 5.68451C36.6982 4.81013 36.164 4.48965 35.0956 4.48965H34.7972V3.21169H35.0956C35.9377 3.21169 36.633 3.01537 36.633 2.24743C36.633 1.63917 36.1947 1.27649 35.5375 1.27649C34.8386 1.27649 34.5402 1.74562 34.4893 2.23603H34.4069C34.1327 2.23071 33.2671 2.16532 33.1873 1.58405C33.4864 0.557601 34.3739 0.00598145 35.5782 0.00598145C37.1196 0.00598145 38.0756 0.913816 38.0756 2.0661C38.0756 3.03666 37.3565 3.63428 36.812 3.82626V3.8696C37.5718 4.11443 38.0756 4.75538 38.0756 5.81186Z",
              "fill",
              "#101828",
            ],
            [
              "d",
              "M89.3611 7.77857C89.7587 7.93966 90.22 8.02022 90.745 8.02022C91.2539 8.02022 91.4803 7.93966 91.8541 7.77857C92.2279 7.61744 92.5142 7.39497 92.713 7.11111C92.9119 6.82725 93.0072 6.50887 92.9994 6.15598C92.9994 5.74935 92.8958 5.43866 92.6892 5.22384C92.4826 5.00136 92.2041 4.83643 91.8541 4.72904C91.5123 4.61396 91.1344 4.51037 90.7212 4.41831C90.3391 4.33394 90.0331 4.24188 89.8026 4.14214C89.5718 4.04239 89.4564 3.90813 89.4564 3.73936C89.4564 3.57827 89.5319 3.48019 89.6831 3.3728C89.8421 3.26536 90.2299 3.21168 90.5162 3.21168C91.0889 3.21168 91.4191 3.43086 91.5066 3.85282H92.9497C92.8704 3.30044 92.6198 2.8226 92.1984 2.50807C91.7847 2.1935 91.2281 2.03625 90.5281 2.03625C89.7727 2.03625 89.0193 2.20886 88.5978 2.55407C88.1842 2.89931 87.9775 3.32508 87.9775 3.83141C87.9775 4.10762 88.0449 4.34159 88.1801 4.53339C88.3152 4.71751 88.4902 4.87095 88.705 4.99372C88.9277 5.10876 89.17 5.20466 89.4325 5.28138C89.695 5.3581 89.9534 5.42333 90.2081 5.47703C90.6057 5.56139 90.9159 5.64965 91.1385 5.7417C91.3612 5.82607 91.4725 5.99105 91.4725 6.23655C91.4725 6.40532 91.3928 6.55492 91.2338 6.68534C91.0826 6.81575 91.0551 6.88094 90.7212 6.88094C90.3872 6.88094 90.1128 6.80422 89.898 6.65078C89.6913 6.48969 89.564 6.29789 89.5163 6.07542H87.9776C88.0252 6.45902 88.1686 6.79657 88.4068 7.08808C88.6455 7.37963 88.9634 7.60975 89.3611 7.77857Z",
              "fill",
              "#101828",
            ],
            [
              "d",
              "M59.6606 2.03625V8.02024H61.0825V5.28171C61.0825 4.74767 61.2422 4.01718 61.4887 3.71878C61.7401 3.41452 62.1999 3.21168 62.6058 3.21168C62.848 3.21168 63.268 3.2989 63.4669 3.5659C63.6658 3.8329 63.7652 4.36073 63.7652 4.86333V8.02024H65.2924V5.0047C65.2924 4.47066 65.4157 3.95771 65.6622 3.65931C65.9165 3.36088 66.2505 3.21168 66.6643 3.21168C67.0698 3.21168 67.3681 3.34518 67.5591 3.61217C67.758 3.87917 67.8574 4.36073 67.8574 4.86333V8.02024H69.3846V4.72196C69.3846 3.84244 69.1779 3.17495 68.7642 2.71944C68.3505 2.26398 67.758 2.03625 66.9864 2.03625C66.557 2.03625 66.1593 2.13049 65.7932 2.31895C65.4354 2.50741 65.149 2.76265 64.9341 3.08461C64.5524 2.38572 63.9041 2.03625 62.9895 2.03625C62.5757 2.03625 62.2101 2.12262 61.8921 2.29538C61.5819 2.46032 61.2735 2.68411 61.0825 2.96685V2.03625H59.6606Z",
              "fill",
              "#101828",
            ],
            [
              "d",
              "M54.5444 8.02024L53.0497 11.2259H54.8174L58.9123 2.03625H57.1441L55.2597 6.51558L53.4526 2.03625H51.646L54.1545 8.02024H54.5444Z",
              "fill",
              "#101828",
            ],
            [
              "fill-rule",
              "evenodd",
              "clip-rule",
              "evenodd",
              "d",
              "M47.6279 8.02026C47.128 8.02026 46.7177 7.98249 46.3977 7.82804C46.0774 7.66585 45.8393 7.45351 45.6828 7.19096C45.5266 6.92837 45.4487 6.63881 45.4487 6.32216C45.4487 5.78935 45.6594 5.35687 46.0814 5.02483C46.503 4.69278 47.1357 4.52672 47.9794 4.52672H49.5093V4.38775V3.95971C49.5093 3.31855 48.5476 3.2117 48.1736 3.2117H48.0667C46.9982 3.2117 46.8599 3.79941 46.8599 3.85285H45.4487C45.4879 3.43585 45.6561 3.14661 45.8982 2.8377C46.1484 2.52879 46.4159 2.35875 46.8065 2.19656C47.1773 2.03527 47.688 2.03578 48.153 2.03624C48.1778 2.03627 48.2025 2.03629 48.227 2.03629C49.055 2.03629 49.7644 2.24092 50.2405 2.65019C50.717 3.0595 50.8984 3.63866 50.8984 4.38775V8.02026L49.6784 8.02026L49.5376 6.99402C49.3657 7.30293 49.1236 7.55775 48.8114 7.75855C48.5067 7.95932 48.1121 8.02026 47.6279 8.02026ZM47.9677 6.90135C48.3974 6.90135 48.7291 6.76233 48.9635 6.48434C49.2056 6.20635 49.3581 5.8627 49.4206 5.45339H48.1436C47.745 5.45339 47.4601 5.52674 47.2882 5.6735C47.1164 5.81247 47.0304 5.98624 47.0304 6.19474C47.0304 6.41868 47.1164 6.59244 47.2882 6.71602C47.4601 6.83956 47.6865 6.90135 47.9677 6.90135Z",
              "fill",
              "#101828",
            ],
            [
              "d",
              "M4.50715 6.2347C4.50715 5.22915 3.69199 4.41399 2.68644 4.41399C1.68088 4.41399 0.865723 5.22915 0.865723 6.23471C0.865723 7.24026 1.68088 8.05542 2.68644 8.05542C3.69199 8.05542 4.50715 7.24025 4.50715 6.2347Z",
              "fill",
              "#1570EF",
            ],
            [
              "d",
              "M4.69267 1.92257C3.91646 1.92609 3.29007 2.55817 3.29358 3.33438C3.29709 4.11059 3.92918 4.73698 4.70539 4.73347C5.4816 4.72996 6.10799 4.09787 6.10448 3.32166C6.10097 2.54545 5.46888 1.91906 4.69267 1.92257Z",
              "fill",
              "#1570EF",
            ],
            [
              "d",
              "M1.95193 2.68914C2.69286 2.68914 3.29351 2.0885 3.29351 1.34756C3.29351 0.606627 2.69286 0.00598145 1.95193 0.00598145C1.211 0.00598145 0.610352 0.606627 0.610352 1.34756C0.610352 2.0885 1.211 2.68914 1.95193 2.68914Z",
              "fill",
              "#1570EF",
            ],
            [
              "d",
              "M1.08966 4.41411C1.49541 4.41411 1.82433 4.08519 1.82433 3.67944C1.82433 3.27369 1.4954 2.94476 1.08965 2.94476C0.683905 2.94476 0.354981 3.27369 0.354981 3.67944C0.354982 4.08519 0.683907 4.41411 1.08966 4.41411Z",
              "fill",
              "#1570EF",
            ],
            [
              "fill-rule",
              "evenodd",
              "clip-rule",
              "evenodd",
              "d",
              "M38.8237 0.00598145V8.02024H40.4266V5.02696H42.2032C43.5897 5.02696 44.7137 3.90298 44.7137 2.51647C44.7137 1.12997 43.5897 0.00598145 42.2032 0.00598145H38.8237ZM40.3193 1.28825V3.85281H42.029C42.7372 3.85281 43.3113 3.27872 43.3113 2.57053C43.3113 1.86235 42.7372 1.28825 42.029 1.28825H40.3193Z",
              "fill",
              "#101828",
            ],
            [
              "d",
              "M76.5435 2.03625V8.02024H78.0632V5.0047C78.0632 4.47066 78.1977 3.95771 78.4667 3.65931C78.744 3.36088 79.096 3.21168 79.5232 3.21168C79.9587 3.21168 80.2792 3.34518 80.4853 3.61217C80.6909 3.87917 80.794 4.36073 80.794 4.86333V8.02024H82.3137V4.72196C82.3137 3.84244 82.1117 3.17495 81.7082 2.71944C81.3042 2.26398 80.7384 2.03625 80.0102 2.03625C79.5433 2.03625 79.1356 2.13836 78.7873 2.34252C78.4471 2.54668 78.1859 2.82155 78.0039 3.16708L77.8849 2.03625H76.5435Z",
              "fill",
              "#101828",
            ],
            [
              "d",
              "M84.6472 7.56838C85.0235 7.86966 85.5239 8.02028 86.1484 8.02028H87.2294V6.72408H86.4486C86.1447 6.72408 85.9284 6.67252 85.8002 6.56949C85.6802 6.45847 85.6203 6.2603 85.6203 5.97487L85.6203 3.21172H87.2294V2.0363H85.6203L85.6203 0.0594482H84.263L84.1306 2.0363H83.062V3.21172H84.1306L84.0831 5.963C84.0831 6.73198 84.2713 7.26714 84.6472 7.56838Z",
              "fill",
              "#101828",
            ],
          ],
          template: function (n, a) {
            n & 1 && A(0, Xx, 24, 18, "div", 0),
              n & 2 &&
                u(
                  "ngIf",
                  a.showNotification &&
                    (a.notificationData == null
                      ? null
                      : a.notificationData.data)
                );
          },
          dependencies: [X, Yx, Ux, Qx, Kx],
          styles: [
            ".notification-wrapper[_ngcontent-%COMP%]{position:fixed;border-radius:8px;border:1px solid #E0E0FA;background:#f8f8ff;box-shadow:0 20px 24px -4px #10182814,0 8px 8px -4px #10182808;padding:12px;display:flex;gap:12px;z-index:5;opacity:0;transform:translateY(100%);color:#98a2b3;font-size:12px;font-weight:400;line-height:18px}.notification-wrapper.top-left[_ngcontent-%COMP%]{top:40px;left:20px}.notification-wrapper.top-right[_ngcontent-%COMP%]{top:40px;right:20px}.notification-wrapper.bottom-left[_ngcontent-%COMP%]{bottom:40px;left:20px}.notification-wrapper.bottom-right[_ngcontent-%COMP%]{bottom:40px;right:20px}@media screen and (max-width: 576px){.notification-wrapper[_ngcontent-%COMP%]{margin-right:10px;left:10px}.notification-wrapper.bottom[_ngcontent-%COMP%]{bottom:40px;top:auto}.notification-wrapper.top[_ngcontent-%COMP%]{top:40px;bottom:auto}}.notification-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{display:flex}.notification-wrapper[_ngcontent-%COMP%]   .flex-column[_ngcontent-%COMP%]{flex-direction:column}.notification-wrapper[_ngcontent-%COMP%]   .align-items-center[_ngcontent-%COMP%]{align-items:center}.notification-wrapper[_ngcontent-%COMP%]   .justify-content-between[_ngcontent-%COMP%]{justify-content:space-between}.notification-wrapper[_ngcontent-%COMP%]   .gap-1[_ngcontent-%COMP%]{gap:.25rem}.notification-wrapper[_ngcontent-%COMP%]   .flex-wrap[_ngcontent-%COMP%]{flex-wrap:wrap}.notification-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{gap:12px}.notification-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:#1570ef;font-weight:500;text-decoration:none;gap:4px;cursor:pointer}.notification-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{color:#101828;font-weight:500}",
          ],
          data: {
            animation: [
              na("fade", [
                Ps("hidden", st({ opacity: 0, transform: "translateY(100%)" })),
                Ps("visible", st({ opacity: 1, transform: "translateY(0)" })),
                mn("hidden => visible", [di("500ms ease-out")]),
                mn("visible => hidden", [di("500ms ease-in")]),
              ]),
            ],
          },
        });
      }
    }
    return t;
  })(),
  kh = (() => {
    class t {
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵmod = ee({ type: t });
      }
      static {
        this.ɵinj = J({ imports: [Bt] });
      }
    }
    return t;
  })();
var Eh = Ss(vo());
var yo = [
    { question: "faq.faq_1", answer: ["faq.faq_cont_1"] },
    { question: "faq.faq_2", answer: ["faq.faq_cont_2"] },
    { question: "faq.faq_3", answer: ["faq.faq_cont_3"] },
    {
      question: "faq.faq_4",
      answer: [
        ["faq.faq_cont_4_1", "faq.faq_cont_4_2"],
        ["faq.faq_cont_4_3", "faq.faq_cont_4_4"],
        ["faq.faq_cont_4_5", "faq.faq_cont_4_6"],
        ["faq.faq_cont_4_7", "faq.faq_cont_4_8"],
      ],
    },
    { question: "faq.faq_5_new", answer: ["faq.faq_cont_5_new"] },
    {
      question: "faq.faq_5",
      answer: [
        [
          "faq.faq_cont_5_1",
          ["faq.faq_cont_5_2", "faq.faq_cont_5_3", "faq.faq_cont_5_4"],
        ],
        [
          "faq.faq_cont_5_5",
          ["faq.faq_cont_5_6", "faq.faq_cont_5_7", "faq.faq_cont_5_8"],
        ],
        [
          "faq.faq_cont_5_9",
          ["faq.faq_cont_5_10", "faq.faq_cont_5_11", "faq.faq_cont_5_12"],
        ],
        [
          "faq.faq_cont_5_13",
          ["faq.faq_cont_5_14", "faq.faq_cont_5_15", "faq.faq_cont_5_16"],
        ],
      ],
    },
    { question: "faq.faq_6", answer: ["faq.faq_cont_6"] },
  ],
  Lh = (() => {
    class t {
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵcmp = F({
        type: t,
        selectors: [["app-faq"]],
        decls: 143,
        vars: 117,
        consts: [
          ["id", "faq", 1, "sectionGap", "faq"],
          [1, "container"],
          [1, "section-title"],
          [
            1,
            "row",
            "d-flex",
            "flex-column-reverse",
            "flex-md-row",
            "align-items-center",
            "justify-content-between",
          ],
          [1, "col-12", "graphic-wrapper", "col-md-3"],
          [
            "deferLoad",
            "/assets/images/gif/faq.gif",
            "alt",
            "hyperbun presale token graphic",
            1,
            "graphic",
            "img-fluid",
          ],
          [1, "col-12", "col-md-8", "position-relative"],
          [1, "box", "position-relative"],
          [1, "dot", "circle-blur-effect", "position-absolute"],
          [1, "title", "lang-font"],
          [1, "desc", "mb-0"],
          [1, "desc", "mb-0", 3, "innerHTML"],
          [1, "mb-0"],
          [1, "fw-bold"],
          [1, "ps-1", 3, "innerHTML"],
          [1, "desc", "fw-bold", "mb-0"],
          [1, "mb-1"],
        ],
        template: function (n, a) {
          n & 1 &&
            (c(0, "section", 0)(1, "div", 1)(2, "h2", 2),
            m(3),
            g(4, "translate"),
            d(),
            c(5, "div", 3)(6, "div", 4),
            T(7, "img", 5),
            d(),
            c(8, "div", 6)(9, "div", 7),
            T(10, "div", 8),
            c(11, "p", 9),
            m(12),
            g(13, "translate"),
            d(),
            c(14, "p", 10),
            m(15),
            g(16, "translate"),
            d()(),
            c(17, "div", 7),
            T(18, "div", 8),
            c(19, "p", 9),
            m(20),
            g(21, "translate"),
            d(),
            T(22, "p", 11),
            g(23, "translate"),
            d(),
            c(24, "div", 7),
            T(25, "div", 8),
            c(26, "p", 9),
            m(27),
            g(28, "translate"),
            d(),
            c(29, "p", 10),
            m(30),
            g(31, "translate"),
            d()(),
            c(32, "div", 7),
            T(33, "div", 8),
            c(34, "p", 9),
            m(35),
            g(36, "translate"),
            d(),
            c(37, "ul", 12)(38, "li")(39, "span", 13),
            m(40),
            g(41, "translate"),
            d(),
            T(42, "span", 14),
            g(43, "translate"),
            d(),
            c(44, "li")(45, "span", 13),
            m(46),
            g(47, "translate"),
            d(),
            m(48),
            g(49, "translate"),
            d(),
            c(50, "li")(51, "span", 13),
            m(52),
            g(53, "translate"),
            d(),
            m(54),
            g(55, "translate"),
            d(),
            c(56, "li")(57, "span", 13),
            m(58),
            g(59, "translate"),
            d(),
            m(60),
            g(61, "translate"),
            d()()(),
            c(62, "div", 7),
            T(63, "div", 8),
            c(64, "p", 9),
            m(65),
            g(66, "translate"),
            d(),
            c(67, "p", 10),
            m(68),
            g(69, "translate"),
            d()(),
            c(70, "div", 7),
            T(71, "div", 8),
            c(72, "p", 9),
            m(73),
            g(74, "translate"),
            d(),
            c(75, "p", 15),
            m(76),
            g(77, "translate"),
            d(),
            c(78, "ul", 16)(79, "li"),
            m(80),
            g(81, "translate"),
            d(),
            c(82, "li"),
            m(83),
            g(84, "translate"),
            d(),
            c(85, "li"),
            m(86),
            g(87, "translate"),
            d()(),
            c(88, "p", 15),
            m(89),
            g(90, "translate"),
            d(),
            c(91, "ul", 16)(92, "li"),
            m(93),
            g(94, "translate"),
            d(),
            c(95, "li"),
            m(96),
            g(97, "translate"),
            d(),
            c(98, "li"),
            m(99),
            g(100, "translate"),
            d()(),
            c(101, "p", 15),
            m(102),
            g(103, "translate"),
            d(),
            c(104, "ul", 16)(105, "li"),
            m(106),
            g(107, "translate"),
            d(),
            c(108, "li"),
            m(109),
            g(110, "translate"),
            d(),
            c(111, "li"),
            m(112),
            g(113, "translate"),
            d()(),
            c(114, "p", 15),
            m(115),
            g(116, "translate"),
            d(),
            c(117, "ul", 16)(118, "li"),
            m(119),
            g(120, "translate"),
            d(),
            c(121, "li"),
            m(122),
            g(123, "translate"),
            d(),
            c(124, "li"),
            m(125),
            g(126, "translate"),
            d()()(),
            c(127, "div", 7),
            T(128, "div", 8),
            c(129, "p", 9),
            m(130),
            g(131, "translate"),
            d(),
            c(132, "p", 10),
            m(133),
            g(134, "translate"),
            d()(),
            c(135, "div", 7),
            T(136, "div", 8),
            c(137, "p", 9),
            m(138),
            g(139, "translate"),
            d(),
            c(140, "p", 10),
            m(141),
            g(142, "translate"),
            d()()()()()()),
            n & 2 &&
              (o(3),
              P(" ", f(4, 39, "faq.title"), " "),
              o(9),
              _(f(13, 41, "faq.faq_1")),
              o(3),
              _(f(16, 43, "faq.faq_cont_1")),
              o(5),
              _(f(21, 45, "faq.faq_2")),
              o(2),
              u("innerHTML", f(23, 47, "faq.faq_cont_2"), De),
              o(5),
              _(f(28, 49, "faq.faq_3")),
              o(3),
              _(f(31, 51, "faq.faq_cont_3")),
              o(5),
              _(f(36, 53, "faq.faq_4")),
              o(5),
              _(f(41, 55, "faq.faq_cont_4_1")),
              o(2),
              u("innerHTML", f(43, 57, "faq.faq_cont_4_2"), De),
              o(4),
              _(f(47, 59, "faq.faq_cont_4_3")),
              o(2),
              P(" ", f(49, 61, "faq.faq_cont_4_4"), ""),
              o(4),
              _(f(53, 63, "faq.faq_cont_4_5")),
              o(2),
              P(" ", f(55, 65, "faq.faq_cont_4_6"), ""),
              o(4),
              _(f(59, 67, "faq.faq_cont_4_7")),
              o(2),
              P(" ", f(61, 69, "faq.faq_cont_4_8"), ""),
              o(5),
              _(f(66, 71, "faq.faq_5_new")),
              o(3),
              _(f(69, 73, "faq.faq_cont_5_new")),
              o(5),
              _(f(74, 75, "faq.faq_5")),
              o(3),
              _(f(77, 77, "faq.faq_cont_5_1")),
              o(4),
              _(f(81, 79, "faq.faq_cont_5_2")),
              o(3),
              _(f(84, 81, "faq.faq_cont_5_3")),
              o(3),
              _(f(87, 83, "faq.faq_cont_5_4")),
              o(3),
              _(f(90, 85, "faq.faq_cont_5_5")),
              o(4),
              _(f(94, 87, "faq.faq_cont_5_6")),
              o(3),
              _(f(97, 89, "faq.faq_cont_5_7")),
              o(3),
              _(f(100, 91, "faq.faq_cont_5_8")),
              o(3),
              _(f(103, 93, "faq.faq_cont_5_9")),
              o(4),
              _(f(107, 95, "faq.faq_cont_5_10")),
              o(3),
              _(f(110, 97, "faq.faq_cont_5_11")),
              o(3),
              _(f(113, 99, "faq.faq_cont_5_12")),
              o(3),
              _(f(116, 101, "faq.faq_cont_5_13")),
              o(4),
              _(f(120, 103, "faq.faq_cont_5_14")),
              o(3),
              _(f(123, 105, "faq.faq_cont_5_15")),
              o(3),
              _(f(126, 107, "faq.faq_cont_5_16")),
              o(5),
              _(f(131, 109, "faq.faq_6_before")),
              o(3),
              _(f(134, 111, "faq.faq_cont_6_before")),
              o(5),
              _(f(139, 113, "faq.faq_6")),
              o(3),
              _(f(142, 115, "faq.faq_cont_6")));
        },
        dependencies: [At, Y],
        styles: [
          ".faq[_ngcontent-%COMP%]{padding:120px 40px 40px;background:url(/assets/images/webp/faq.webp);background-size:cover;margin-top:-80px}@media screen and (max-width: 768px){.faq[_ngcontent-%COMP%]{padding:120px 0 20px;background:#fff url(/assets/images/webp/faq-mob.webp) 0 0/100%;background-position:0 0;margin-top:-120px}}@media screen and (max-width: 768px){.faq[_ngcontent-%COMP%]   .graphic-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center}}@media screen and (max-width: 768px){.faq[_ngcontent-%COMP%]   .graphic-wrapper[_ngcontent-%COMP%]   .graphic[_ngcontent-%COMP%]{max-height:530px;margin:0 auto;z-index:1;position:relative}}.faq[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{padding:32px;background:url(/assets/images/webp/faq-box-bg.webp) no-repeat;background-size:cover;border:2px solid #000000;border-radius:32px;margin:12px 0}@media screen and (max-width: 768px){.faq[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{padding:16px 24px}}.faq[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:26px;height:26px;background:#fff;right:-3px;top:-10px;border-radius:50%;border:2px solid #000000;box-shadow:0 2px #000}.faq[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:first-child{margin-left:0}.faq[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#000;text-transform:uppercase;font-family:Librestile_Extended_Bold,sans-serif;margin-bottom:2px}@media screen and (max-width: 768px){.faq[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:14px;line-height:135%}}.faq[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{color:#000}  html[lang=ar] .our-friends .fire-money{left:0!important;right:unset!important}",
        ],
      });
    }
    return t;
  })();
function nv(t, i) {
  t & 1 && T(0, "router-outlet");
}
var Qe,
  Dh = (() => {
    class t {
      _platformId;
      dom;
      meta;
      title;
      translate;
      commonConnectionService;
      router;
      canRender = !0;
      onBlog = !1;
      onStaking = !1;
      onNews = !1;
      newsPgTitle = "";
      blogPgTitle = "";
      base = E.isEvmBased ? E.evmSite : E.solSite;
      constructor(e, n, a, s, r, l, p) {
        if (
          ((this._platformId = e),
          (this.dom = n),
          (this.meta = a),
          (this.title = s),
          (this.translate = r),
          (this.commonConnectionService = l),
          (this.router = p),
          oi(ta).isStable.subscribe(
            (h) => (this.canRender = h || this.canRender)
          ),
          Tl(["clickId", "source", "tid", "pid"]),
          wl(),
          typeof window < "u")
        ) {
          let h = Sl(),
            x = kl();
          this.commonConnectionService.vwoData("pageLand", null, !1),
            this.commonConnectionService.vwoData("browserTypeAndUsedCountry", {
              browserType: h,
              userCountry: x,
            });
        }
        this.router.events.pipe($t((h) => h instanceof Ii)).subscribe({
          next: (h) => {
            let x = h.url,
              v = x.split("/"),
              b = v[v.length - 1],
              C = v[v.length - 1];
            (this.onStaking = x.includes("staking")),
              (this.onNews = x.includes("news")),
              (this.onBlog = x.includes("blog")),
              (this.newsPgTitle = Dl.map((k) => k.name).includes(b) ? b : ""),
              (this.blogPgTitle = El.map((k) => k.name).includes(C) ? C : ""),
              this.updateSEOData(!0);
          },
        }),
          this.translate.onLangChange.subscribe((h) => {
            Qe = h.lang;
            let x = St.filter((v) => v.value === Qe)[0];
            this.updateSEOData(!1),
              (this.dom.documentElement.lang = x.hreflang);
          });
      }
      ngOnInit() {
        this.updateSocialCards();
      }
      updateSEOData(e) {
        this.updateMetaData(),
          this.updateCanonical(),
          this.updateSocialCards(),
          this.addFAQSchema(),
          e && (this.updateHrefLangs(), this.updateHiddenUrls());
      }
      updateMetaData() {
        let e = this.getMetaTitles().title,
          n = this.getMetaTitles().desc,
          a = this.translate.instant(e),
          s = this.translate.instant(n);
        this.title.setTitle(a),
          this.meta.updateTag({ name: "description", content: s }),
          E.isSolBased &&
            this.meta.updateTag({ name: "robots", content: "noindex" }),
          E.isEvmBased &&
            this.meta.updateTag({ name: "robots", content: "index,follow" });
      }
      getMetaTitles() {
        if (this.newsPgTitle) {
          let e = Ol.find((n) => n.url === this.newsPgTitle);
          if (e) return { title: e?.title, desc: e?.desc };
        }
        if (this.blogPgTitle) {
          let e = Pl.find((n) => n.url === this.blogPgTitle);
          if (e)
            return { title: e?.title, desc: e?.desc, keywords: e.keywords };
        }
        return this.onStaking
          ? Bi.staking
          : this.onNews
          ? Bi.news
          : this.onBlog
          ? Bi.blog
          : E.isSolBased
          ? Bi.sol
          : Bi.evm;
      }
      getCanonicalItems() {
        return this.blogPgTitle
          ? `blog/${this.blogPgTitle}`
          : this.onBlog
          ? "blog"
          : this.newsPgTitle
          ? `news/${this.newsPgTitle}`
          : this.onStaking
          ? "staking"
          : "news";
      }
      updateCanonical() {
        let e = this.dom.querySelector("link[rel=canonical]"),
          n = "";
        if (
          (this.onStaking ||
          this.newsPgTitle ||
          this.onNews ||
          this.blogPgTitle ||
          this.onBlog
            ? (n =
                Qe !== "en"
                  ? `${this.base}/${Qe}/${this.getCanonicalItems()}`
                  : `${this.base}/${this.getCanonicalItems()}`)
            : Qe === "en"
            ? (n = this.base)
            : (n = `${this.base}/${Qe}`),
          e)
        )
          e.href = n;
        else {
          let a = this.dom.createElement("link");
          (a.rel = "canonical"), (a.href = n), this.dom.head.appendChild(a);
        }
      }
      updateHrefLangs() {
        this.dom
          .querySelectorAll('link[rel="alternate"]')
          .forEach((a) => a.remove());
        for (let a of St) {
          let s = this.dom.createElement("link");
          (s.rel = "alternate"), (s.hreflang = a.hreflang);
          let r = "";
          this.onStaking ||
          this.onNews ||
          this.newsPgTitle ||
          this.onBlog ||
          this.blogPgTitle
            ? (r =
                a.value !== "en"
                  ? `${this.base}/${a.value}/${this.getCanonicalItems()}`
                  : `${this.base}/${this.getCanonicalItems()}`)
            : a.value === "en"
            ? (r = this.base)
            : (r = `${this.base}/${a.value}`),
            (s.href = r),
            this.dom.head.appendChild(s);
        }
        let n = this.dom.createElement("link");
        (n.rel = "alternate"),
          (n.hreflang = "x-default"),
          (n.href = `${this.base}${
            this.onStaking
              ? "/staking"
              : this.newsPgTitle
              ? `/news/${this.newsPgTitle}`
              : this.onNews
              ? "/news"
              : this.blogPgTitle
              ? `/blog/${this.blogPgTitle}`
              : this.onBlog
              ? "/blog"
              : ""
          }`),
          this.dom.head.appendChild(n);
      }
      updateSocialCards() {
        let e = "misc.meta_title",
          n = "misc.meta_data";
        E.isSolBased &&
          ((e = "misc.meta_title_sol"), (n = "misc.meta_data_sol"));
        let a = this.translate.instant(this.getMetaTitles().title),
          s = this.translate.instant(this.getMetaTitles().desc),
          r = "";
        this.onStaking
          ? (r = "/staking")
          : this.newsPgTitle
          ? (r = `/news/${this.newsPgTitle}`)
          : this.onNews
          ? (r = "/news")
          : this.blogPgTitle
          ? (r = `/blog/${this.blogPgTitle}`)
          : this.onBlog && (r = "/blog");
        let l = r !== "",
          p = "";
        Qe && Qe !== "en" ? (p = `/${Qe}`) : Qe === "en" && l && (p = "/en");
        let h = `${this.base}${p}${r}`,
          x = `${this.base}/assets/images/pngs/logo.png`;
        this.meta.updateTag({ property: "og:title", content: a }),
          this.meta.updateTag({ property: "og:description", content: s }),
          this.meta.updateTag({ property: "og:type", content: "website" }),
          this.meta.updateTag({ property: "og:url", content: h }),
          this.meta.updateTag({ property: "og:image", content: x }),
          this.meta.updateTag({ property: "og:image:width", content: "600" }),
          this.meta.updateTag({ property: "og:image:height", content: "600" }),
          this.meta.updateTag({
            name: "twitter:card",
            content: "summary_large_image",
          }),
          this.meta.updateTag({ name: "twitter:title", content: a }),
          this.meta.updateTag({ name: "twitter:description", content: s }),
          this.meta.updateTag({ name: "twitter:image", content: x }),
          this.meta.updateTag({ name: "twitter:url", content: h }),
          this.meta.updateTag({ name: "twitter:site", content: "@BTC_Hyper2" });
      }
      addFAQSchema() {
        if (this.onStaking || this.onNews || this.onBlog) {
          this.dom.getElementById("FAQ_SCHEMA")?.remove();
          return;
        }
        let e = [];
        yo.forEach((n) => {
          e.push(n.question);
          let a = (s) => {
            typeof s == "string"
              ? e.push(s)
              : Array.isArray(s) &&
                s.forEach((r) => {
                  typeof r == "string"
                    ? e.push(r)
                    : Array.isArray(r)
                    ? a(r)
                    : Array.isArray(r[1]) &&
                      (e.push(r[0]), r[1].forEach((l) => e.push(l)));
                });
          };
          a(n.answer);
        }),
          this.translate.get(e).subscribe((n) => {
            let a = {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: yo.map((l) => ({
                "@type": "Question",
                name: n[l.question],
                acceptedAnswer: {
                  "@type": "Answer",
                  text: ((x) => {
                    let v = "",
                      b = (C) =>
                        C.flatMap((k) =>
                          typeof k == "string"
                            ? [n[k]]
                            : Array.isArray(k)
                            ? b(k)
                            : Array.isArray(k[1])
                            ? [n[k[0]], ...k[1].map((D) => n[D])]
                            : []
                        );
                    return (
                      typeof l.answer == "string"
                        ? (v = n[l.answer])
                        : (v = b(l.answer).join("<br><br>")),
                      v
                    );
                  })(l.answer),
                },
              })),
            };
            this.dom.getElementById("FAQ_SCHEMA") &&
              this.dom.getElementById("FAQ_SCHEMA")?.remove();
            let r = this.dom.createElement("script");
            (r.type = "application/ld+json"),
              (r.text = JSON.stringify(a)),
              (r.id = "FAQ_SCHEMA"),
              this.dom.head.appendChild(r);
          });
      }
      updateHiddenUrls() {
        let e = this.dom.getElementById("hidden-langs");
        if (e) for (; e.firstChild; ) e.removeChild(e.firstChild);
        for (let n of St) {
          let a = this.dom.createElement("li"),
            s = this.dom.createElement("a"),
            r = "";
          this.onStaking
            ? (r = `${this.base}/${n.value}/staking`)
            : this.onNews
            ? (r = `${this.base}/${n.value}/news`)
            : this.onBlog
            ? (r = `${this.base}/${n.value}/blog`)
            : n.value === "en"
            ? (r = this.base)
            : (r = `${this.base}/${n.value}`),
            (s.href = r),
            (s.textContent = `Bitcoin Hyper ${n.name}`),
            a.appendChild(s),
            e.appendChild(a);
        }
      }
      static ɵfac = function (n) {
        return new (n || t)(w(j), w(Oi), w(tl), w(il), w(pe), w(fe), w(Tt));
      };
      static ɵcmp = F({
        type: t,
        selectors: [["app-root"]],
        decls: 1,
        vars: 1,
        template: function (n, a) {
          n & 1 && A(0, nv, 1, 0, "router-outlet"),
            n & 2 && Go(0, a.canRender ? 0 : -1);
        },
        dependencies: [ra],
        styles: [
          "html[lang=cz] .buyNow,   html[lang=bg] .buyNow,   html[lang=de] .buyNow,   html[lang=el] .buyNow{font-size:22px!important;line-height:2!important}  html[lang=fr] .buyNow{font-size:20px!important;line-height:1.1!important}  html[lang=el] .buyNow,   html[lang=hu] .buyNow,   html[lang=it] .buyNow,   html[lang=sk] .buyNow,   html[lang=es] .buyNow,   html[lang=tr] .buyNow{font-size:18px!important;line-height:2.4!important}  html[lang=ar]{direction:rtl!important;text-align:right!important}",
        ],
      });
    }
    return t;
  })();
var av = () => ({ "width.px": 14, "height.px": 14 }),
  sv = (t) => ({ token: t });
function rv(t, i) {
  t & 1 && (c(0, "h4", 5), m(1), g(2, "translate"), d()),
    t & 2 && (o(), _(f(2, 1, "widget.buy_now")));
}
function ov(t, i) {
  t & 1 && (c(0, "h4", 5), m(1), g(2, "translate"), d()),
    t & 2 && (o(), _(f(2, 1, "wert.title")));
}
function lv(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 6)(1, "p", 7),
      m(2),
      g(3, "translate"),
      d(),
      c(4, "button", 8),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.showWidget());
      }),
      m(5),
      g(6, "translate"),
      d()();
  }
  if (t & 2) {
    let e = y();
    o(2),
      _(q(3, 2, "wert.disclaimer", V(7, sv, e.token))),
      o(3),
      _(f(6, 5, "wert.continue"));
  }
}
function cv(t, i) {
  t & 1 &&
    (c(0, "div", 6),
    T(1, "img", 9),
    c(2, "p", 10),
    m(3),
    g(4, "translate"),
    d()()),
    t & 2 && (o(3), _(f(4, 1, "wert.desc")));
}
var Oh = (() => {
  class t {
    _platformId;
    modalRef;
    http;
    walletConnect;
    token = E.tokenName;
    walletAddress;
    isBscChain = !1;
    wertWidget;
    SwapStatus = ce;
    mountError = !1;
    currentStep = 1;
    constructor(e, n, a, s) {
      (this._platformId = e),
        (this.modalRef = n),
        (this.http = a),
        (this.walletConnect = s),
        setTimeout(() => {
          this.showWidget();
        }, 500);
    }
    showWidget() {
      return Ne(this, null, function* () {
        console.log(this.isBscChain, this.walletAddress),
          (this.currentStep = 1);
        let e = {
          walletAddress: this.walletConnect.walletAddress,
          commodity: this.isBscChain ? "BNB" : "ETH",
          network: this.isBscChain ? "bsc" : "ethereum",
        };
        H(this._platformId) &&
          this.http.post(E.wertOnRampUrl, e).subscribe(
            (n) => {
              let a = n,
                s = ae(
                  {
                    partner_id: E.partnerId,
                    session_id: a.sessionId,
                    lang: la[Qe] || "en",
                    redirect_url: E.evmSite,
                  },
                  e
                );
              console.log({ wertOptions: s, sessionData: a }),
                (this.wertWidget = new Eh.default(
                  lt(ae({}, s), {
                    listeners: {
                      loaded: () => {
                        console.log("widget loaded:"), this.modalRef.hide();
                      },
                      close: () => {
                        console.log("widget closed:");
                      },
                      position: (r) => console.log("step:", r.step),
                      "payment-status": (r) => {
                        console.log("payment-status:", r),
                          r.status == "success" &&
                            (this.wertWidget.removeEventListeners(),
                            this.wertWidget.close());
                      },
                      error: (r) => {
                        console.log("error:", r);
                      },
                    },
                  })
                )),
                this.wertWidget.open();
            },
            (n) => {
              console.log("wert error response", n), (this.mountError = !0);
            }
          );
      });
    }
    static ɵfac = function (n) {
      return new (n || t)(w(j), w(rt), w(bt), w(fe));
    };
    static ɵcmp = F({
      type: t,
      selectors: [["app-wert"]],
      decls: 9,
      vars: 6,
      consts: [
        [1, "p-4"],
        [1, "d-flex", "justify-content-between", "align-items-center"],
        ["class", "text-center fw-semibold fs-5 m-0 text-white", 4, "ngIf"],
        [
          "src",
          "/assets/images/svg-icons/close-white.svg",
          1,
          "cursor-pointer",
          3,
          "click",
          "svgStyle",
        ],
        ["class", "mt-4 content text-center", 4, "ngIf"],
        [1, "text-center", "fw-semibold", "fs-5", "m-0", "text-white"],
        [1, "mt-4", "content", "text-center"],
        [1, "text-white"],
        [
          1,
          "btn",
          "btn-primary",
          "bg-white",
          "text-black",
          "font-14",
          "mt-2",
          "mx-auto",
          3,
          "click",
        ],
        [
          "src",
          "./assets/images/svg-icons/token.svg",
          "alt",
          "loading",
          1,
          "worker",
          "loading",
        ],
        ["translate", "", 1, "text-white"],
      ],
      template: function (n, a) {
        n & 1 &&
          (c(0, "div", 0)(1, "div", 1)(2, "div"),
          m(3, "\xA0\xA0\xA0"),
          d(),
          A(4, rv, 3, 3, "h4", 2)(5, ov, 3, 3, "h4", 2),
          c(6, "svg-icon", 3),
          S("click", function () {
            return a.modalRef.hide();
          }),
          d()(),
          A(7, lv, 7, 9, "div", 4)(8, cv, 5, 3, "div", 4),
          d()),
          n & 2 &&
            (o(4),
            u("ngIf", a.currentStep === 0),
            o(),
            u("ngIf", a.currentStep === 1),
            o(),
            u("svgStyle", xe(5, av)),
            o(),
            u("ngIf", a.currentStep === 0),
            o(),
            u("ngIf", a.currentStep === 1));
      },
      dependencies: [X, oa, qe, Y],
      styles: [
        ".worker[_ngcontent-%COMP%]{display:block;margin:20px auto;max-width:270px;max-height:100px}",
      ],
    });
  }
  return t;
})();
var xs,
  dv = new Uint8Array(16);
function bo() {
  if (
    !xs &&
    ((xs =
      typeof crypto < "u" &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !xs)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return xs(dv);
}
var Fe = [];
for (let t = 0; t < 256; ++t) Fe.push((t + 256).toString(16).slice(1));
function Ph(t, i = 0) {
  return (
    Fe[t[i + 0]] +
    Fe[t[i + 1]] +
    Fe[t[i + 2]] +
    Fe[t[i + 3]] +
    "-" +
    Fe[t[i + 4]] +
    Fe[t[i + 5]] +
    "-" +
    Fe[t[i + 6]] +
    Fe[t[i + 7]] +
    "-" +
    Fe[t[i + 8]] +
    Fe[t[i + 9]] +
    "-" +
    Fe[t[i + 10]] +
    Fe[t[i + 11]] +
    Fe[t[i + 12]] +
    Fe[t[i + 13]] +
    Fe[t[i + 14]] +
    Fe[t[i + 15]]
  ).toLowerCase();
}
var pv =
    typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  Co = { randomUUID: pv };
function hv(t, i, e) {
  if (Co.randomUUID && !i && !t) return Co.randomUUID();
  t = t || {};
  let n = t.random || (t.rng || bo)();
  if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), i)) {
    e = e || 0;
    for (let a = 0; a < 16; ++a) i[e + a] = n[a];
    return i;
  }
  return Ph(n);
}
var wo = hv;
var Ih = Ss(vo());
var mv = () => ({ "width.px": 14, "height.px": 14 }),
  uv = (t) => ({ token: t });
function gv(t, i) {
  t & 1 && (c(0, "h4", 5), m(1), g(2, "translate"), d()),
    t & 2 && (o(), _(f(2, 1, "widget.buy_now")));
}
function fv(t, i) {
  t & 1 && (c(0, "h4", 5), m(1), g(2, "translate"), d()),
    t & 2 && (o(), _(f(2, 1, "wert.title")));
}
function _v(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 6)(1, "p", 7),
      m(2),
      g(3, "translate"),
      d(),
      c(4, "button", 8),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.showWidget());
      }),
      m(5),
      g(6, "translate"),
      d()();
  }
  if (t & 2) {
    let e = y();
    o(2),
      _(q(3, 2, "wert.disclaimer", V(7, uv, e.token))),
      o(3),
      _(f(6, 5, "wert.continue"));
  }
}
function xv(t, i) {
  t & 1 &&
    (c(0, "div", 6),
    T(1, "img", 9),
    c(2, "p", 10),
    m(3),
    g(4, "translate"),
    d()()),
    t & 2 && (o(3), _(f(4, 1, "wert.desc")));
}
var Fh = (() => {
  class t {
    _platformId;
    modalRef;
    http;
    commonConnect;
    token = E.tokenName;
    baseToken;
    swapToken;
    isStake = !1;
    walletAddress;
    wertWidget;
    wertOptions = {
      partner_id: E.partnerId,
      origin: E.wertOrigin,
      click_id: wo(),
      lang: la[Qe] || "en",
      theme: "light",
      currency: "USD",
      commodity: "ETH",
      network: E.production ? "ethereum" : "sepolia",
      redirect_url: E.evmSite,
      extra: {
        item_info: {
          name: E.tokenName,
          image_url:
            "https://bitcoinhyper.com/assets/images/svg-icons/token.svg",
        },
      },
    };
    SwapStatus = ce;
    mountError = !1;
    currentStep = 0;
    walletType = "";
    constructor(e, n, a, s) {
      (this._platformId = e),
        (this.modalRef = n),
        (this.http = a),
        (this.commonConnect = s);
    }
    showWidget() {
      return Ne(this, null, function* () {
        this.currentStep = 1;
        let e = yield this.commonConnect.getDynamicAmountWert(this.baseToken),
          n = {
            address: this.walletAddress,
            commodity: "ETH",
            network: E.production ? "ethereum" : "sepolia",
            commodity_amount: +(e * 1.01).toFixed(8),
            sc_address: E.eth.presaleAddress,
            sc_input_data: yield Il(
              this.baseToken,
              this.isStake,
              this.walletAddress
            ),
          };
        H(this._platformId) &&
          ((this.walletType = localStorage.getItem("connector") || ""),
          this.http.post(E.wertUrl, n).subscribe(
            (a) => {
              let s = a.data,
                r = !1,
                l = ae(ae({}, s), this.wertOptions);
              console.log("wertOptions =", l),
                (this.wertWidget = new Ih.default(
                  lt(ae(ae({}, s), this.wertOptions), {
                    listeners: {
                      loaded: () => {
                        console.log("widget loaded:"),
                          (this.commonConnect.swapStatus = ce.confirm_pending),
                          this.commonConnect.vwoData("wert", {
                            open_wert: !0,
                            wert_payment_status: "initiated-wert",
                            wallet_address: this.walletAddress,
                            wert_transaction_id: "",
                          }),
                          this.modalRef.hide();
                      },
                      close: () => {
                        console.log("widget closed:"),
                          this.commonConnect.swapStatus !==
                            ce.wert_inprogress &&
                            this.commonConnect.swapStatus !== ce.complete &&
                            (this.commonConnect.swapStatus = ce.rejected);
                      },
                      position: (p) => console.log("step:", p.step),
                      "payment-status": (p) => {
                        console.log("payment-status:", p),
                          (p.status == "progress" || p.status == "pending") &&
                            (this.commonConnect.swapStatus = ce.in_progess),
                          p.status == "success" &&
                            p.tx_id &&
                            (this.commonConnect.checkTransaction(
                              p.tx_id,
                              "usd",
                              this.baseToken,
                              this.swapToken,
                              "card",
                              "usd"
                            ),
                            this.wertWidget.removeEventListeners(),
                            this.wertWidget.close(),
                            this.commonConnect.vwoData("wert", {
                              open_wert: !1,
                              wert_payment_status: "success",
                              wallet_address: this.walletAddress,
                              wert_transaction_id: p.tx_id,
                            })),
                          p.status == "canceled" &&
                            ((this.commonConnect.swapStatus = ce.rejected),
                            this.commonConnect.vwoData("wert", {
                              open_wert: !1,
                              wert_payment_status: "rejected",
                              wallet_address: this.walletAddress,
                              wert_transaction_id: p.tx_id || "",
                            }),
                            this.commonConnect.vwoData(
                              "failedAndRejectTansaction",
                              {
                                transactionStatus: "rejected",
                                fundSpentAmount: this.swapToken,
                                tokenAmountPurchase: this.baseToken,
                                purchaseType: this.isStake
                                  ? "buy_and_stake"
                                  : "buy",
                                tokenPurchaseMethod: "card",
                                transactionId: p.tx_id,
                                walletAddress: this.walletAddress,
                                walletType: this.walletType,
                              }
                            ));
                      },
                      error: (p) => {
                        console.log("error:", p),
                          (this.commonConnect.swapStatus = ce.failed),
                          this.commonConnect.vwoData("wert", {
                            open_wert: !1,
                            wert_payment_status: "failed",
                            wallet_address: this.walletAddress,
                            wert_transaction_id: "",
                          }),
                          this.commonConnect.vwoData(
                            "failedAndRejectTansaction",
                            {
                              transactionStatus: "failed",
                              fundSpentAmount: this.swapToken,
                              tokenAmountPurchase: this.baseToken,
                              purchaseType: this.isStake
                                ? "buy_and_stake"
                                : "buy",
                              tokenPurchaseMethod: "card",
                              transactionId: "",
                              walletAddress: this.walletAddress,
                              walletType: this.walletType,
                            }
                          );
                      },
                    },
                  })
                )),
                this.wertWidget.open();
            },
            (a) => {
              console.log("wert error response", a),
                (this.mountError = !0),
                (this.commonConnect.swapStatus = ce.not_started);
            }
          ));
      });
    }
    static ɵfac = function (n) {
      return new (n || t)(w(j), w(rt), w(bt), w(fe));
    };
    static ɵcmp = F({
      type: t,
      selectors: [["app-wert"]],
      decls: 9,
      vars: 6,
      consts: [
        [1, "p-4"],
        [1, "d-flex", "justify-content-between", "align-items-center"],
        ["class", "text-center fw-semibold fs-5 m-0 text-white", 4, "ngIf"],
        [
          "src",
          "/assets/images/svg-icons/close-white.svg",
          1,
          "cursor-pointer",
          3,
          "click",
          "svgStyle",
        ],
        ["class", "mt-4 content text-center", 4, "ngIf"],
        [1, "text-center", "fw-semibold", "fs-5", "m-0", "text-white"],
        [1, "mt-4", "content", "text-center"],
        [1, "text-white"],
        [
          1,
          "btn",
          "btn-primary",
          "bg-white",
          "text-black",
          "font-14",
          "mt-2",
          "mx-auto",
          3,
          "click",
        ],
        [
          "src",
          "/assets/images/svg-icons/logo.svg",
          "alt",
          "loading",
          1,
          "worker",
        ],
        ["translate", "", 1, "text-white"],
      ],
      template: function (n, a) {
        n & 1 &&
          (c(0, "div", 0)(1, "div", 1)(2, "div"),
          m(3, "\xA0\xA0\xA0"),
          d(),
          A(4, gv, 3, 3, "h4", 2)(5, fv, 3, 3, "h4", 2),
          c(6, "svg-icon", 3),
          S("click", function () {
            return a.modalRef.hide();
          }),
          d()(),
          A(7, _v, 7, 9, "div", 4)(8, xv, 5, 3, "div", 4),
          d()),
          n & 2 &&
            (o(4),
            u("ngIf", a.currentStep === 0),
            o(),
            u("ngIf", a.currentStep === 1),
            o(),
            u("svgStyle", xe(5, mv)),
            o(),
            u("ngIf", a.currentStep === 0),
            o(),
            u("ngIf", a.currentStep === 1));
      },
      dependencies: [X, oa, qe, Y],
      styles: [
        ".worker[_ngcontent-%COMP%]{display:block;margin:20px auto;max-width:270px;max-height:100px}",
      ],
    });
  }
  return t;
})();
var To = [
  {
    name: "Ethereum",
    symbol: "ETH",
    category: "ETH",
    chainId: E.eth.chainIdInt,
    image: "/assets/images/svg-icons/eth_drop.svg",
    tokenBalance: 0,
    tokenUsdVal: 0,
    desCount: 10,
  },
  {
    name: "Tether USD",
    symbol: "USDT",
    category: "ETH",
    chainId: E.eth.chainIdInt,
    image: "/assets/images/svg-icons/eth_usdt_dropdown.svg",
    tokenBalance: 0,
    tokenUsdVal: 0,
    desCount: 4,
  },
  {
    name: "USD Coin",
    symbol: "USDC",
    category: "ETH",
    chainId: E.eth.chainIdInt,
    image: "/assets/images/svg-icons/usdc_eth.svg",
    tokenBalance: 0,
    tokenUsdVal: 0,
    desCount: 4,
  },
  {
    name: "Binance Coin",
    symbol: "BNB",
    category: "BNB",
    chainId: E.bsc.chainIdInt,
    image: "/assets/images/svg-icons/bnb-with-bnb.svg",
    tokenBalance: 0,
    tokenUsdVal: 0,
    desCount: 6,
  },
  {
    name: "Tether USD",
    symbol: "USDT",
    category: "BNB",
    chainId: E.bsc.chainIdInt,
    image: "/assets/images/svg-icons/usdt-with-bnb.svg",
    tokenBalance: 0,
    tokenUsdVal: 0,
    desCount: 4,
  },
  {
    name: "USD Coin",
    symbol: "USDC",
    category: "BNB",
    chainId: E.bsc.chainIdInt,
    image: "/assets/images/svg-icons/usdc_bsc.svg",
    tokenBalance: 0,
    tokenUsdVal: 0,
    desCount: 4,
  },
  {
    name: "SOL",
    symbol: "SOL",
    category: "SOL",
    chainId: E.sol.chainIdInt,
    image: "/assets/images/svg-icons/sol_sol.svg",
    tokenBalance: 0,
    tokenUsdVal: 0,
    desCount: 6,
    otherSymbol: "Solana",
  },
  {
    name: "USDT Coin",
    symbol: "USDT",
    category: "SOL",
    chainId: E.sol.chainIdInt,
    image: "/assets/images/svg-icons/usdt_sol.svg",
    tokenBalance: 0,
    tokenUsdVal: 0,
    desCount: 4,
  },
  {
    name: "USD Coin",
    symbol: "USDC",
    category: "SOL",
    chainId: E.sol.chainIdInt,
    image: "/assets/images/svg-icons/usdc_sol.svg",
    tokenBalance: 0,
    tokenUsdVal: 0,
    desCount: 4,
  },
];
var vv = ["swapIn"],
  yv = ["dropDownBtn"],
  bv = (t) => ({ "mt-1": t }),
  vs = (t) => ({ selected: t }),
  ki = (t) => ({ "mt-0": t }),
  Cv = (t) => ({ "col-12 col-xl-12": t }),
  wv = (t) => ({ tokenName: t }),
  Tv = (t) => ({ cryptoName: t }),
  Sv = () => ({ "width.px": 22, "height.px": 22 }),
  kv = (t) => ({ "mt-3": t }),
  Av = (t, i, e) => ({ "active-tab": t, "no-bal": i, "cursor-pointer": e }),
  Mv = () => ({ mode: "ETH" }),
  ys = (t) => ({ modeName: t }),
  Lv = (t, i) => ({ minAmount: t, cryptoName: i }),
  Vh = (t, i) => ({ baseToken: t, cryptoName: i }),
  Bh = (t) => ({ baseToken: t }),
  Nh = (t, i) => ({ cryptoName: t, tokenName: i });
function Dv(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 8)(1, "button", 9),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.changeTab("ETH", "ETH"));
      }),
      T(2, "img", 10),
      c(3, "span"),
      m(4, "ETH"),
      d()(),
      c(5, "button", 9),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.changeTab("ETH", "USDT"));
      }),
      T(6, "img", 11),
      c(7, "span"),
      m(8, "USDT"),
      d()(),
      c(9, "button", 9),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.changeTab("ETH", "USDC"));
      }),
      T(10, "img", 12),
      c(11, "span"),
      m(12, "USDC"),
      d()(),
      c(13, "button", 9),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.cardMode());
      }),
      T(14, "img", 13),
      c(15, "span"),
      m(16),
      g(17, "translate"),
      d()()();
  }
  if (t & 2) {
    let e = y();
    o(),
      u("ngClass", V(7, vs, !e.isWert && e.activeToken.symbol === "ETH")),
      o(4),
      u("ngClass", V(9, vs, !e.isWert && e.activeToken.symbol === "USDT")),
      o(4),
      u("ngClass", V(11, vs, !e.isWert && e.activeToken.symbol === "USDC")),
      o(4),
      u("ngClass", V(13, vs, !e.isNative && e.isWert)),
      o(3),
      _(f(17, 5, "widget.card"));
  }
}
function Ev(t, i) {
  if (
    (t & 1 && (c(0, "div", 14)(1, "div", 15), m(2), g(3, "translate"), d()()),
    t & 2)
  ) {
    let e = y();
    o(2),
      Ds(
        "",
        e.activeToken.symbol,
        " ",
        f(3, 3, "balance"),
        " ",
        e.convertNum(e.activeToken.tokenBalance, 4),
        ""
      );
  }
}
function Ov(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 43),
      S("click", function () {
        M(e);
        let a = y(2);
        return L(a.max());
      }),
      m(1),
      g(2, "translate"),
      d();
  }
  t & 2 && (o(), P(" ", f(2, 1, "widget.max"), " "));
}
function Pv(t, i) {
  if (
    (t & 1 && (c(0, "div", 55)(1, "p", 56), m(2), g(3, "translate"), d()()),
    t & 2)
  ) {
    let e = y(3);
    o(2),
      mt(
        "",
        f(3, 2, "widget.balance"),
        " = ",
        e.convertNum(e.activeToken.tokenBalance, 4),
        ""
      );
  }
}
function Iv(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "button", 60),
      S("click", function (a) {
        M(e);
        let s = y(4);
        return L(s.setTab("ETH", a, !0));
      }),
      T(1, "img", 68),
      c(2, "span"),
      m(3, "ETH"),
      d()();
  }
  if (t & 2) {
    let e = y(4);
    Ee("active", e.selectedTab === "ETH");
  }
}
function Fv(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "button", 60),
      S("click", function (a) {
        M(e);
        let s = y(4);
        return L(s.setTab("BNB", a, !0));
      }),
      T(1, "img", 69),
      c(2, "span"),
      m(3, "BSC"),
      d()();
  }
  if (t & 2) {
    let e = y(4);
    Ee("active", e.selectedTab === "BNB");
  }
}
function Vv(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "button", 60),
      S("click", function (a) {
        M(e);
        let s = y(4);
        return L(s.setTab("SOL", a, !0));
      }),
      T(1, "img", 70),
      c(2, "span"),
      m(3, "SOL"),
      d()();
  }
  if (t & 2) {
    let e = y(4);
    Ee("active", e.selectedTab === "SOL");
  }
}
function Bv(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 71),
      S("click", function (a) {
        let s = M(e).$implicit,
          r = y(4);
        return L(
          s.tokenBalance > 0
            ? r.setActiveTab(s, s.category)
            : a.stopPropagation()
        );
      }),
      c(1, "div", 72),
      T(2, "img", 73),
      c(3, "div", 74)(4, "p", 75),
      m(5),
      d(),
      c(6, "p", 76),
      m(7),
      d()()(),
      c(8, "div", 77)(9, "p", 78),
      m(10),
      d(),
      c(11, "p", 79),
      m(12),
      d()()();
  }
  if (t & 2) {
    let e = i.$implicit,
      n = y(4);
    u(
      "ngClass",
      Ei(
        6,
        Av,
        n.activeToken.symbol === e.symbol &&
          n.activeToken.category === e.category,
        e.tokenBalance == 0,
        e.tokenBalance > 0
      )
    ),
      o(2),
      u("src", e.image, W),
      o(3),
      _(e.name),
      o(2),
      _(e.otherSymbol || e.symbol),
      o(3),
      P("~$", n.convertNum(e.tokenUsdVal, 4), ""),
      o(2),
      _(n.convertNum(e.tokenBalance, 5));
  }
}
function Nv(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "button", 80),
      S("click", function () {
        M(e);
        let a = y(4);
        return L(a.changeChain(!0));
      }),
      m(1),
      g(2, "translate"),
      d();
  }
  t & 2 && (o(), _(f(2, 1, "widget.buy_with_card")));
}
function Rv(t, i) {
  if (
    (t & 1 && (c(0, "a", 81)(1, "button", 82), m(2), g(3, "translate"), d()()),
    t & 2)
  ) {
    let e = y(4);
    u("href", e.evmSite, W), o(2), _(q(3, 2, "popup.buy_with_mode", xe(5, Mv)));
  }
}
function Hv(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 57),
      S("click", function (a) {
        return M(e), L(a.stopPropagation());
      }),
      c(1, "div", 58),
      m(2),
      g(3, "translate"),
      d(),
      c(4, "div", 59),
      dt(5),
      c(6, "button", 60),
      S("click", function (a) {
        M(e);
        let s = y(3);
        return L(s.setTab("ALL", a, !0));
      }),
      c(7, "span"),
      m(8, "All"),
      d()(),
      A(9, Iv, 4, 2, "button", 61)(10, Fv, 4, 2, "button", 61)(
        11,
        Vv,
        4,
        2,
        "button",
        61
      ),
      pt(),
      d(),
      c(12, "div", 62),
      A(13, Bv, 13, 10, "div", 63),
      d(),
      dt(14),
      c(15, "p", 64),
      m(16, "Or"),
      d(),
      c(17, "div", 65),
      A(18, Nv, 3, 3, "button", 66)(19, Rv, 4, 6, "a", 67),
      d(),
      pt(),
      d();
  }
  if (t & 2) {
    let e = y(3);
    o(2),
      _(f(3, 9, "misc.choose_payment")),
      o(4),
      Ee("active", e.selectedTab === "ALL"),
      o(3),
      u("ngIf", e.isEvmBased),
      o(),
      u("ngIf", e.isEvmBased),
      o(),
      u("ngIf", e.isSolBased),
      o(2),
      u("ngForOf", e.tokenFilteredList),
      o(5),
      u("ngIf", e.isEvmBased),
      o(),
      u("ngIf", e.isSolBased);
  }
}
function zv(t, i) {
  if (
    (t & 1 &&
      (c(0, "div", 44),
      A(1, Pv, 4, 4, "div", 45),
      c(2, "div", 46)(3, "div", 47)(4, "button", 48, 2)(6, "div", 49),
      T(7, "img", 50),
      c(8, "span", 51),
      m(9),
      d(),
      c(10, "span", 52),
      T(11, "img", 53),
      d()()(),
      A(12, Hv, 20, 11, "div", 54),
      d()()()),
    t & 2)
  ) {
    let e = y(2);
    o(),
      u("ngIf", !e.isWert),
      o(6),
      u("src", e.activeToken.image, W),
      o(2),
      _(e.activeToken.symbol);
  }
}
function Gv(t, i) {
  t & 1 && (c(0, "div", 83), m(1), g(2, "translate"), d()),
    t & 2 && (o(), _(f(2, 1, "widget.you_receive_info")));
}
function Wv(t, i) {
  if ((t & 1 && (c(0, "div", 84), m(1), g(2, "translate"), d()), t & 2)) {
    let e = y(2);
    o(),
      P(" ", q(2, 1, "widget.gas_fees", V(4, ys, e.activeToken.category)), " ");
  }
}
function $v(t, i) {
  if ((t & 1 && (c(0, "div", 85), m(1), g(2, "translate"), d()), t & 2)) {
    let e = y(2);
    o(),
      P(
        " ",
        q(2, 1, "widget.low_gas_fees", V(4, ys, e.activeToken.category)),
        " "
      );
  }
}
function jv(t, i) {
  if (
    (t & 1 &&
      (c(0, "div", 85), m(1), g(2, "translate"), g(3, "translate"), d()),
    t & 2)
  ) {
    let e = y(2);
    o(),
      P(
        " ",
        e.lowGas
          ? q(2, 1, "widget.low_gas_fees", V(7, ys, e.activeToken.category))
          : q(3, 4, "widget.low_usdt", V(9, ys, e.activeToken.symbol)),
        " "
      );
  }
}
function Xv(t, i) {
  if ((t & 1 && (c(0, "div", 86), m(1), g(2, "translate"), d()), t & 2)) {
    let e = y(2);
    o(),
      P(
        " ",
        q(2, 1, "widget.min_crypto", Xt(4, Lv, e.minAmount, e.cryptoName)),
        " "
      );
  }
}
function qv(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "button", 87),
      S("click", function () {
        M(e);
        let a = y(2);
        return L(a.confirm(!0));
      }),
      m(1),
      g(2, "translate"),
      g(3, "translate"),
      d();
  }
  if (t & 2) {
    let e = y(2);
    u(
      "disabled",
      (e.isLowBalance && !e.isWert) || !e.swapToken || e.swapToken == 0
    ),
      o(),
      Ds(
        " ",
        f(2, 4, "staking.buy_stake_for"),
        " ",
        e.stakeData.apy,
        "% ",
        f(3, 6, "staking.rewards"),
        " "
      );
  }
}
function Yv(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "button", 88),
      S("click", function () {
        M(e);
        let a = y(2);
        return L(a.confirm());
      }),
      m(1),
      g(2, "translate"),
      d();
  }
  if (t & 2) {
    let e = y(2);
    u(
      "disabled",
      (e.isLowBalance && !e.isWert) || !e.swapToken || e.swapToken == 0
    ),
      o(),
      P("", f(2, 2, "widget.buy_now"), " ");
  }
}
function Uv(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "p", 89),
      m(1),
      g(2, "translate"),
      c(3, "span", 90),
      S("click", function () {
        M(e);
        let a = y(2);
        return L(a.switchMode());
      }),
      m(4),
      g(5, "translate"),
      d()();
  }
  if (t & 2) {
    let e = y(2);
    o(),
      P(
        " ",
        f(
          2,
          2,
          e.isWert
            ? "widget.pay_with_crypto_instead"
            : "widget.pay_with_card_instead"
        ),
        " "
      ),
      o(3),
      _(f(5, 4, "widget.click_here"));
  }
}
function Qv(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "div", 19)(4, "label", 20),
      m(5),
      g(6, "translate"),
      d(),
      A(7, Ov, 3, 3, "div", 21),
      d(),
      c(8, "div", 22)(9, "input", 23, 0),
      hn("ngModelChange", function (a) {
        M(e);
        let s = y();
        return pn(s.swapToken, a) || (s.swapToken = a), L(a);
      }),
      S("ngModelChange", function (a) {
        M(e);
        let s = y();
        return L(s.swapTokenUpdate.next(a));
      }),
      d()()(),
      A(11, zv, 13, 3, "div", 24),
      c(12, "div", 25)(13, "div", 26)(14, "div", 27)(15, "label", 28),
      m(16),
      g(17, "translate"),
      d(),
      T(18, "img", 29),
      A(19, Gv, 3, 3, "ng-template", null, 1, at),
      d(),
      c(21, "label", 30),
      m(22),
      d()(),
      c(23, "div", 31)(24, "input", 32),
      hn("ngModelChange", function (a) {
        M(e);
        let s = y();
        return pn(s.baseToken, a) || (s.baseToken = a), L(a);
      }),
      S("ngModelChange", function (a) {
        M(e);
        let s = y();
        return L(s.baseTokenUpdate.next(a));
      }),
      d(),
      c(25, "div", 33),
      T(26, "svg-icon", 34),
      d()()(),
      c(27, "div", 35),
      A(28, Wv, 3, 6, "div", 36)(29, $v, 3, 6, "div", 37)(
        30,
        jv,
        4,
        11,
        "div",
        37
      )(31, Xv, 3, 7, "div", 38),
      d(),
      c(32, "div", 39),
      A(33, qv, 4, 8, "button", 40)(34, Yv, 3, 4, "button", 41),
      d(),
      A(35, Uv, 6, 6, "p", 42),
      d()();
  }
  if (t & 2) {
    let e = ht(20),
      n = y();
    u("ngClass", V(28, ki, n.isModal)),
      o(2),
      u("ngClass", V(30, Cv, n.isWert || n.isModal)),
      o(3),
      P("", q(6, 22, "widget.pay_with", V(32, wv, n.tokenName)), " "),
      o(2),
      u("ngIf", !n.isWert),
      o(2),
      u("noDecimal", n.isNative ? 10 : 6),
      dn("ngModel", n.swapToken),
      o(2),
      u("ngIf", !n.isWert && !n.isModal),
      o(5),
      _(q(17, 25, "widget.amount_in", V(34, Tv, n.cryptoName))),
      o(2),
      u("popover", e),
      o(4),
      mt("1 ", n.cryptoName, " = $", n.salePrice, ""),
      o(2),
      u("noDecimal", 0),
      dn("ngModel", n.baseToken),
      o(2),
      u("svgStyle", xe(36, Sv)),
      o(2),
      u("ngIf", !n.isLowBalance && !n.isWert && n.walletAddress),
      o(),
      u("ngIf", n.isNative && n.isLowBalance && !n.isWert && n.walletAddress),
      o(),
      u("ngIf", !n.isNative && n.isLowBalance && !n.isWert && n.walletAddress),
      o(),
      u(
        "ngIf",
        n.baseToken && n.baseToken < n.minAmount && !n.isWert && n.walletAddress
      ),
      o(),
      u("ngClass", V(37, kv, n.isWert)),
      o(),
      u("ngIf", n.activeToken.category == "ETH"),
      o(),
      u("ngIf", !n.isModal),
      o(),
      u("ngIf", !n.isModal && n.selectedChain !== n.CHAINS.SOLANA);
  }
}
function Kv(t, i) {
  if ((t & 1 && (c(0, "p", 95), m(1), g(2, "translate"), d()), t & 2)) {
    let e = y(2);
    o(),
      _(
        q(2, 1, "widget.transction_info", Xt(4, Vh, e.baseToken, e.cryptoName))
      );
  }
}
function Zv(t, i) {
  if ((t & 1 && (c(0, "p", 95), m(1), g(2, "translate"), d()), t & 2)) {
    let e = y(2);
    o(), _(q(2, 1, "staking.transction_info_stake", V(4, Bh, e.baseToken)));
  }
}
function Jv(t, i) {
  if (
    (t & 1 &&
      (c(0, "div", 91),
      T(1, "img", 92),
      c(2, "div", 93),
      m(3),
      g(4, "translate"),
      d(),
      A(5, Kv, 3, 7, "p", 94)(6, Zv, 3, 6, "p", 94),
      d()),
    t & 2)
  ) {
    let e = y();
    u("ngClass", V(6, ki, e.isModal)),
      o(3),
      _(f(4, 4, "widget.transaction_in_progress")),
      o(2),
      u("ngIf", !e.isStake),
      o(),
      u("ngIf", e.isStake);
  }
}
function e1(t, i) {
  if ((t & 1 && (c(0, "p", 95), m(1), g(2, "translate"), d()), t & 2)) {
    let e = y(2);
    o(),
      _(
        q(2, 1, "widget.waiting_confirm", Xt(4, Nh, e.cryptoName, e.tokenName))
      );
  }
}
function t1(t, i) {
  t & 1 && (c(0, "p", 95), m(1), g(2, "translate"), d()),
    t & 2 && (o(), _(f(2, 1, "staking.waiting_confirm_stake")));
}
function i1(t, i) {
  t & 1 && (c(0, "p", 95), m(1), g(2, "translate"), d()),
    t & 2 && (o(), _(f(2, 1, "staking.waiting_confirm_stake_2")));
}
function n1(t, i) {
  if (
    (t & 1 &&
      (c(0, "div", 91),
      T(1, "img", 92),
      c(2, "div", 96),
      m(3),
      g(4, "translate"),
      d(),
      A(5, e1, 3, 7, "p", 94)(6, t1, 3, 3, "p", 94)(7, i1, 3, 3, "p", 94),
      d()),
    t & 2)
  ) {
    let e = y();
    u("ngClass", V(7, ki, e.isModal)),
      o(3),
      P("", f(4, 5, "confirm"), " "),
      o(2),
      u("ngIf", !e.isStake),
      o(),
      u("ngIf", e.isStake),
      o(),
      u("ngIf", e.isStake);
  }
}
function a1(t, i) {
  if (
    (t & 1 &&
      (c(0, "div", 91),
      T(1, "img", 92),
      c(2, "div", 97),
      m(3),
      g(4, "translate"),
      d(),
      c(5, "p", 95),
      m(6),
      g(7, "translate"),
      d()()),
    t & 2)
  ) {
    let e = y();
    u("ngClass", V(8, ki, e.isModal)),
      o(3),
      P("", f(4, 3, "widget.authorise"), " "),
      o(3),
      _(
        q(
          7,
          5,
          "widget.waiting_approve",
          Xt(10, Nh, e.cryptoName, e.activeToken.symbol)
        )
      );
  }
}
function s1(t, i) {
  if ((t & 1 && (c(0, "p", 104), m(1), g(2, "translate"), d()), t & 2)) {
    let e = y(2);
    o(),
      P(
        " ",
        q(2, 1, "staking.transction_info_stake_success", V(4, Bh, e.baseToken)),
        " "
      );
  }
}
function r1(t, i) {
  if ((t & 1 && (c(0, "p", 104), m(1), g(2, "translate"), d()), t & 2)) {
    let e = y(2);
    o(),
      _(
        q(2, 1, "widget.transction_info", Xt(4, Vh, e.baseToken, e.cryptoName))
      );
  }
}
function o1(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 105)(1, "button", 106),
      S("click", function () {
        M(e);
        let a = y(2);
        return L(a.stakeNow());
      }),
      m(2),
      g(3, "translate"),
      d()();
  }
  t & 2 && (o(2), _(f(3, 1, "widget.stake_now")));
}
function l1(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 91),
      T(1, "img", 98),
      c(2, "div", 99),
      m(3),
      g(4, "translate"),
      d(),
      A(5, s1, 3, 6, "p", 100)(6, r1, 3, 7, "p", 100)(7, o1, 4, 3, "div", 101),
      c(8, "div", 102)(9, "button", 103),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.viewUrl());
      }),
      m(10),
      g(11, "translate"),
      d(),
      c(12, "button", 103),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.startAgain());
      }),
      m(13),
      g(14, "translate"),
      d()()();
  }
  if (t & 2) {
    let e = y();
    u("ngClass", V(13, ki, e.isModal)),
      o(3),
      _(f(4, 7, "widget.transaction_success")),
      o(2),
      u("ngIf", e.isStake),
      o(),
      u("ngIf", !e.isStake),
      o(),
      u("ngIf", e.modeName == "ETH" && !e.isModal && !e.isStake),
      o(3),
      _(f(11, 9, "widget.view_transaction")),
      o(3),
      _(f(14, 11, "widget.start_again"));
  }
}
function c1(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 91),
      T(1, "img", 107),
      c(2, "div", 108),
      m(3),
      g(4, "translate"),
      d(),
      c(5, "p", 109),
      m(6),
      g(7, "translate"),
      d(),
      c(8, "div", 102)(9, "button", 103),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.viewUrl());
      }),
      m(10),
      g(11, "translate"),
      d(),
      c(12, "button", 103),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.startAgain());
      }),
      m(13),
      g(14, "translate"),
      d()()();
  }
  if (t & 2) {
    let e = y();
    u("ngClass", V(13, ki, e.isModal)),
      o(3),
      _(f(4, 5, "widget.transaction_failed")),
      o(3),
      _(f(7, 7, "widget.view_transaction_info")),
      o(4),
      _(f(11, 9, "widget.view_transaction")),
      o(3),
      _(f(14, 11, "widget.start_again"));
  }
}
function d1(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 91),
      T(1, "img", 107),
      c(2, "div", 110),
      m(3),
      g(4, "translate"),
      d(),
      c(5, "div", 111)(6, "button", 112),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.startAgain());
      }),
      m(7),
      g(8, "translate"),
      d()()();
  }
  if (t & 2) {
    let e = y();
    u("ngClass", V(7, ki, e.isModal)),
      o(3),
      _(f(4, 3, "widget.transaction_rejected")),
      o(4),
      _(f(8, 5, "widget.start_again"));
  }
}
var nn = (() => {
  class t {
    _platformId;
    eventService;
    modalService;
    translate;
    popupService;
    router;
    commonConnectService;
    isNative = !1;
    isWert = !1;
    isModal = !1;
    messageEvent = new $();
    swapIn = null;
    dropDownBtn = null;
    CHAINS = ge;
    subscriptions = [];
    environtment = E;
    baseToken;
    swapToken;
    swapTokenUpdate = new ks();
    baseTokenUpdate = new ks();
    currentLang;
    SwapStatus = ce;
    lblockPrice = 0;
    isLowBalance = !1;
    inProgress = !1;
    isSolBased = E.isSolBased;
    isEvmBased = E.isEvmBased;
    evmSite = E.evmSite;
    isStake = !1;
    usdtBal = 0;
    usdcBal = 0;
    nativeBal = 0;
    minAmount = E.minToken;
    modalRef;
    lowGas = !1;
    wertMode = !1;
    chainData;
    salePrice;
    modeName = "";
    walletAddress = "";
    status;
    tokenName = "";
    gasFees;
    maxTokensToBuy;
    cryptoName = E.tokenName;
    stakeData;
    allBalance = { native: 0, usdt: 0, usdc: 0 };
    selectedTab = "ALL";
    activeToken;
    tokenList = [];
    tokenFilteredList = [];
    chainId = 0;
    balanceData = {};
    constructor(e, n, a, s, r, l, p) {
      (this._platformId = e),
        (this.eventService = n),
        (this.modalService = a),
        (this.translate = s),
        (this.popupService = r),
        (this.router = l),
        (this.commonConnectService = p),
        (this.currentLang = this.translate.currentLang),
        this.translate.onLangChange.subscribe((h) => {
          this.currentLang = h.lang || "en";
        }),
        this.subscriptions.push(
          this.swapTokenUpdate.pipe(sn(500)).subscribe((h) => {
            this.swapToken && this.swapToken >= 0
              ? this.calculateSwap()
              : (this.baseToken = 0);
          })
        ),
        this.subscriptions.push(
          this.baseTokenUpdate.pipe(sn(500)).subscribe((h) => {
            this.baseToken && this.baseToken >= 0
              ? this.calculateSwapReverse()
              : (this.swapToken = 0);
          })
        );
    }
    ngOnChanges() {
      setTimeout(() => {
        (this.swapToken = 0),
          (this.baseToken = 0),
          (this.commonConnectService.swapStatus = ce.not_started),
          (this.isLowBalance = !1),
          (this.lowGas = !1),
          this.getBal(),
          this.checkLowBalance(),
          this.updateAllgetMethod(),
          this.tokenFilteredList.sort(
            ({ tokenUsdVal: e }, { tokenUsdVal: n }) => n - e
          ),
          !this.isWert && !this.isModal && this.max();
      }, 600);
    }
    ngOnInit() {
      H(this._platformId) &&
        ((this.commonConnectService.swapStatus = ce.not_started),
        (this.isLowBalance = !1),
        (this.tokenList = [...To.map((e) => e)]),
        (this.tokenList = this.tokenList.filter((e) =>
          this.isEvmBased ? e.category !== "SOL" : e.category === "SOL"
        )),
        (this.selectedTab = this.selectedChain === ge.SOLANA ? "SOL" : "ALL"),
        this.getBal(),
        this.setTab(this.selectedTab, void 0, !1),
        setInterval(() => {
          this.getBal(), this.updateAllgetMethod();
        }, 500),
        this.isModal && this.changeTab("ETH", "ETH"));
    }
    max() {
      return Ne(this, null, function* () {
        let e = ["BNB", "ETH", "SOL"].includes(this.activeToken?.symbol),
          n = 0,
          a = this.commonConnectService.balanceData,
          s = this.chainData?.chainIdInt;
        e
          ? (n = yield pi(
              this.maxTokensToBuy * 1.01,
              this.activeToken?.symbol,
              this.activeToken?.category,
              s,
              a
            ))
          : this.activeToken?.symbol == "USDT"
          ? (n = yield pi(
              this.maxTokensToBuy,
              "USDT",
              this.activeToken.category,
              s,
              a
            ))
          : this.activeToken?.symbol == "USDC"
          ? (n = yield pi(
              this.maxTokensToBuy,
              "USDT",
              this.activeToken.category,
              s,
              a
            ))
          : (n = yield pi(
              this.maxTokensToBuy,
              this.activeToken?.symbol,
              this.activeToken?.category,
              s,
              a
            )),
          this.activeToken
            ? (this.swapToken = +this.floorString(
                (e
                  ? this.activeToken?.tokenBalance - this.gasFees > 0
                    ? this.activeToken?.tokenBalance - this.gasFees
                    : 0
                  : this.activeToken?.tokenBalance
                )?.toString()
              ))
            : (this.swapToken = 0),
          n < this.swapToken && (this.swapToken = n),
          this.swapToken == 0
            ? ((this.swapToken = 0), (this.baseToken = 0))
            : ((this.swapToken =
                Math.floor(
                  this.swapToken * Math.pow(10, this.activeToken.desCount)
                ) / Math.pow(10, this.activeToken.desCount)),
              this.swapTokenUpdate.next(this.swapToken)),
          this.isWert && (this.swapToken = void 0),
          setTimeout(() => this.swapTokenUpdate.next(this.swapToken), 200);
      });
    }
    getBal() {
      (this.nativeBal = this.allBalance.native),
        (this.usdtBal = this.allBalance.usdt),
        (this.usdcBal = this.allBalance.usdc),
        (this.balanceData = this.commonConnectService.balanceData),
        (this.chainId = this.commonConnectService.chainId);
      let e =
          (this.balanceData?.ethUsdt ?? 0) /
          ((this.balanceData?.oneEth ?? 0) * 1e6),
        n =
          (this.balanceData?.ethUsdt ?? 0) /
          ((this.balanceData?.oneBnb ?? 0) * 1e6);
      if (
        ((this.tokenList = [...To.map((a) => a)]),
        this.selectedChain === ge.EVM && this.isEvmBased)
      )
        (this.tokenList = this.tokenList.filter(
          (a) => a.chainId !== E.sol.chainIdInt
        )),
          (this.tokenList[0].tokenBalance = this.balanceData.ethBal ?? 0),
          (this.tokenList[1].tokenBalance = this.balanceData.ethUsdtBal ?? 0),
          (this.tokenList[2].tokenBalance = this.balanceData.ethUsdcBal ?? 0),
          (this.tokenList[3].tokenBalance = this.balanceData.bscBal ?? 0),
          (this.tokenList[4].tokenBalance = this.balanceData.bscUsdtBal ?? 0),
          (this.tokenList[5].tokenBalance = this.balanceData?.bscUsdcBal ?? 0),
          (this.tokenList[0].tokenUsdVal = (this.balanceData.ethBal || 0) * e),
          (this.tokenList[1].tokenUsdVal = this.balanceData.ethUsdtBal ?? 0),
          (this.tokenList[2].tokenUsdVal = this.balanceData.ethUsdcBal ?? 0),
          (this.tokenList[3].tokenUsdVal = (this.balanceData.bscBal || 0) * n),
          (this.tokenList[4].tokenUsdVal = this.balanceData.bscUsdtBal ?? 0),
          (this.tokenList[5].tokenUsdVal = this.balanceData?.bscUsdcBal ?? 0);
      else if (this.isSolBased) {
        let a =
          (this.balanceData?.solUsdt || 0) /
          ((this.balanceData?.oneSol || 0) * 1e6);
        (this.tokenList = this.tokenList.filter(
          (s) => s.chainId === E.sol.chainIdInt
        )),
          (this.tokenList[0].tokenBalance =
            this.commonConnectService.balanceData.nativeBal ?? 0),
          (this.tokenList[1].tokenBalance = this.balanceData.solUsdtBal ?? 0),
          (this.tokenList[2].tokenBalance = this.balanceData.solUsdcBal ?? 0),
          (this.tokenList[0].tokenUsdVal =
            (this.commonConnectService.balanceData.nativeBal || 0) * a),
          (this.tokenList[1].tokenUsdVal = this.balanceData.solUsdtBal ?? 0),
          (this.tokenList[2].tokenUsdVal = this.balanceData.solUsdcBal ?? 0);
      }
      for (let a = 6; a < this.tokenList.length; a++) {
        let s = this.tokenList[a].category == "ETH" ? e : n;
        this.tokenList[a].tokenUsdVal =
          (s * this.tokenList[a].tokenBalance) /
          this.tokenList[a].tokenPerNative;
      }
    }
    updateAllgetMethod() {
      (this.chainData = da(this.commonConnectService.chainId)),
        (this.modeName = this.chainData.purchaseToken),
        (this.walletAddress = this.commonConnectService.walletAddress),
        (this.status = this.commonConnectService.swapStatus),
        (this.isNative = this.isWert
          ? !1
          : this.activeToken.name !== "Tether USD" &&
            this.activeToken.name !== "USD Coin"),
        (this.tokenName = this.isWert ? "USD" : this.activeToken.symbol),
        (this.gasFees = Hs(this.activeToken.chainId) || 0),
        (this.maxTokensToBuy =
          this.commonConnectService.balanceData.maxTokensToBuy),
        (this.cryptoName = E.tokenName),
        (this.stakeData = this.commonConnectService.stakeData);
      let e = this.commonConnectService.balanceData.currentStep,
        n = this.commonConnectService.tokenomics[e];
      (this.salePrice = n.tokenUSDT),
        (this.allBalance = {
          native: +this.commonConnectService.balanceData.nativeBal
            .toFixed(10)
            .replace(/0{0,10}$/, ""),
          usdt: this.commonConnectService.balanceData.usdtBal,
          usdc: this.commonConnectService.balanceData.usdcBal,
        });
    }
    ngOnDestroy() {
      for (let e of this.subscriptions) e.unsubscribe();
    }
    startAgain() {
      this.getBal(),
        this.updateAllgetMethod(),
        this.max(),
        (this.commonConnectService.swapStatus = ce.not_started);
    }
    confirm(e = !1) {
      (this.isStake = e),
        this.commonConnectService.vwoData("buyButtonClicked", {
          walletAddress: this.walletAddress,
          isBuyAndStake: e,
          isBuyWithCard: this.isWert,
        }),
        this.checkChain() &&
          (this.isWert
            ? (this.modalRef = this.modalService.show(Fh, {
                class: "modal-xs modal-dialog-centered transak",
                backdrop: "static",
                initialState: {
                  walletAddress: this.walletAddress,
                  baseToken: this.baseToken,
                  swapToken: this.swapToken,
                  isStake: this.isStake,
                },
              }))
            : this.swapToken !== 0 &&
              (this.baseToken ?? 0) >= this.minAmount &&
              this.createSwap(e));
    }
    calculateSwap = () =>
      Ne(this, null, function* () {
        this.checkLowBalance(),
          this.activeToken.symbol !== "USDT" &&
          this.activeToken.symbol !== "USDC" &&
          !this.isWert
            ? (this.baseToken = yield Vl(
                +(this.swapToken ?? 0) * 0.99,
                this.activeToken.symbol,
                this.balanceData
              ))
            : (this.baseToken = yield Fl(
                +(this.swapToken ?? 0) * 0.995,
                this.chainId,
                this.balanceData
              )),
          (this.baseToken = +this.baseToken.toFixed(0).replace(/0{0,0}$/, ""));
      });
    calculateSwapReverse = () =>
      Ne(this, null, function* () {
        this.activeToken.symbol !== "USDT" &&
        this.activeToken.symbol !== "USDC" &&
        !this.isWert
          ? ((this.swapToken = yield pi(
              this.baseToken ?? 0,
              this.activeToken.symbol,
              this.activeToken.category,
              this.chainId,
              this.balanceData
            )),
            (this.swapToken = +(this.swapToken * 1.01)
              .toFixed(10)
              .replace(/0{0,10}$/, "")))
          : ((this.swapToken = yield pi(
              this.baseToken ?? 0,
              "USDT",
              this.activeToken.category,
              this.chainId,
              this.balanceData
            )),
            (this.swapToken = +(this.swapToken * 1.005)
              .toFixed(10)
              .replace(/0{0,10}$/, ""))),
          this.checkLowBalance();
      });
    createSwap(e = !1) {
      return Ne(this, null, function* () {
        if (!this.inProgress)
          if (
            ((this.inProgress = !0),
            console.log(
              "createSwap called",
              this.isNative,
              this.maxTokensToBuy,
              this.activeToken
            ),
            this.baseToken && this.baseToken <= this.maxTokensToBuy)
          ) {
            this.commonConnectService.swapStatus = ce.not_started;
            try {
              this.activeToken.symbol !== "USDT" &&
              this.activeToken.symbol !== "USDC"
                ? yield this.commonConnectService.swapNativeTokens(
                    this.baseToken ?? 0,
                    this.swapToken ?? 0,
                    e
                  )
                : yield this.commonConnectService.buyWithStableToken(
                    this.baseToken ?? 0,
                    this.swapToken ?? 0,
                    !1,
                    e,
                    this.activeToken.symbol == "USDC"
                  ),
                (this.inProgress = !1);
            } catch (n) {
              console.log("createSwap", n),
                n && n.code == 4001
                  ? (this.commonConnectService.swapStatus = ce.rejected)
                  : (this.commonConnectService.swapStatus = ce.failed),
                (this.inProgress = !1);
            }
          } else
            this.popupService.messagePopup({
              icon: "warning",
              title: this.translate.instant("widget.max_token_title"),
              desc: this.translate.instant("widget.max_token_exceed", {
                maxTokensToBuy: this.maxTokensToBuy,
              }),
              confirmBtnTxt: this.translate.instant("misc.ok"),
            }),
              (this.commonConnectService.swapStatus = ce.not_started),
              (this.inProgress = !1);
      });
    }
    get hash() {
      return this.commonConnectService.swapHash;
    }
    viewUrl() {
      let e;
      this.commonConnectService.getSelectedChain === ge.SOLANA
        ? (e = E.sol.blockExplorerURL)
        : (e = this.chainData.blockExplorerURL);
      let n = `${e}${this.hash}${
        this.commonConnectService.getSelectedChain === ge.SOLANA &&
        !E.production
          ? "?cluster=devnet"
          : ""
      }`;
      window.open(n, "_blank");
    }
    checkLowBalance() {
      let e = Hs(this.activeToken.chainId),
        n = this.getNativeBal(this.activeToken.chainId);
      this.activeToken.symbol == "ETH" || this.activeToken.symbol == "BNB"
        ? (this.isLowBalance =
            +this.activeToken.tokenBalance - e < +(this.swapToken ?? 0))
        : +this.activeToken.tokenBalance >= +(this.swapToken ?? 0) && +n >= e
        ? ((this.isLowBalance = !1), (this.lowGas = !1))
        : ((this.isLowBalance = !0), n < this.gasFees && (this.lowGas = !0));
    }
    getNativeBal(e) {
      let n = 0;
      switch (e) {
        case E.eth.chainIdInt:
          n = this.commonConnectService.balanceData.ethBal;
          break;
        case E.bsc.chainIdInt:
          n = this.commonConnectService.balanceData.bscBal;
          break;
        case E.sol.chainIdInt:
          n = this.commonConnectService.balanceData.nativeBal;
          break;
        default:
          n = this.commonConnectService.balanceData.ethBal;
          break;
      }
      return n;
    }
    openWert() {
      this.eventService.broadcastEvent("OPEN_WERT", !0);
    }
    checkChain() {
      return this.isWert &&
        this.commonConnectService.chainId == E.eth.chainIdInt
        ? !0
        : this.isWert
        ? (this.commonConnectService.switchNetwork(E.eth.chainIdInt), !1)
        : this.commonConnectService.chainId == this.activeToken.chainId
        ? !0
        : (this.commonConnectService
            .switchNetwork(this.activeToken.chainId)
            .then(() => !0),
          !1);
    }
    convertNum(e, n = 2) {
      return Vi(e, n);
    }
    floorString(e) {
      let n = e.indexOf(".");
      return n >= 0 ? (e + "00").slice(0, n + 6) : e + ".00";
    }
    changeTab(e, n) {
      let a = this.tokenList.find((s) => s.category === e && s.symbol === n);
      a
        ? this.setActiveTab(a, e)
        : console.error(
            "No active crypto found for the selected tab and symbol."
          ),
        this.messageEvent.emit(!1),
        setTimeout(() => this.max(), 1e3);
    }
    cardMode() {
      (this.swapToken = 0), (this.baseToken = 0), this.messageEvent.emit(!0);
    }
    stakeNow() {
      this.commonConnectService.switchNetwork(E.eth.chainIdInt),
        this.router.navigateByUrl(this.currentLang + "/staking", {});
    }
    setTab(e, n, a = !0) {
      (n && this.selectedTab === e) ||
        ((this.selectedTab = e),
        n && n.stopPropagation(),
        (this.tokenFilteredList = this.tokenList.filter(
          (s) => s.category === e || e === "ALL"
        )),
        (this.tokenFilteredList = this.tokenFilteredList.filter((s) =>
          this.selectedChain === ge.SOLANA
            ? s.category === "SOL"
            : s.category !== "SOL"
        )),
        this.tokenFilteredList.sort(
          ({ tokenUsdVal: s }, { tokenUsdVal: r }) => r - s
        ),
        a || this.setActiveTab(this.tokenFilteredList[0], e),
        this.commonConnectService.getSelectedChain === ge.EVM &&
          this.selectedTab === "SOL" &&
          this.changeChain(!1),
        this.commonConnectService.getSelectedChain === ge.SOLANA &&
          (this.selectedTab === "ETH" || this.selectedTab === "BNB") &&
          this.changeChain(!1));
    }
    setActiveTab(e, n) {
      return Ne(this, null, function* () {
        (this.activeToken = e),
          (this.activeToken.symbol = this.activeToken.symbol.toString()),
          (this.isNative = !(e.symbol === "USDT" || e.symbol === "USDC")),
          setTimeout(() => this.max(), 1e3),
          this.dropDownBtn?.nativeElement.click(),
          e.chainId &&
            this.commonConnectService.chainId !== e.chainId &&
            (yield this.commonConnectService.switchNetwork(e.chainId));
      });
    }
    get selectedChain() {
      return this.commonConnectService.getSelectedChain;
    }
    changeChain(e = !1) {
      return Ne(this, null, function* () {
        if (e)
          if (this.commonConnectService.getSelectedChain === ge.EVM) {
            this.isWert = !0;
            return;
          } else {
            this.chainChangeAndConnect(!0);
            return;
          }
        this.chainChangeAndConnect(!1);
      });
    }
    chainChangeAndConnect(e = !1) {
      return Ne(this, null, function* () {
        (this.isWert = e),
          this.messageEvent.emit(e),
          yield this.commonConnectService.disconnectWallet(),
          this.connectModal(
            this.commonConnectService.getSelectedChain === ge.SOLANA
              ? ge.EVM
              : ge.SOLANA,
            e
          ),
          (this.commonConnectService.setSelectedChain = null);
      });
    }
    connectModal(e, n = !1) {
      this.modalRef = this.modalService.show(Yt, {
        class: "modal-xs modal-dialog-centered",
        backdrop: "static",
        initialState: { chain: e, isCard: n, isSolOnlyModal: e === ge.SOLANA },
      });
    }
    switchMode() {
      (this.isWert = !this.isWert),
        (this.isNative = !0),
        (this.selectedTab = "ETH"),
        this.setTab(this.selectedTab, void 0, !1),
        this.max();
    }
    static ɵfac = function (n) {
      return new (n || t)(w(j), w(Ye), w(wt), w(pe), w(kt), w(Tt), w(fe));
    };
    static ɵcmp = F({
      type: t,
      selectors: [["app-swap"]],
      viewQuery: function (n, a) {
        if ((n & 1 && ($e(vv, 5), $e(yv, 5)), n & 2)) {
          let s;
          He((s = ze())) && (a.swapIn = s.first),
            He((s = ze())) && (a.dropDownBtn = s.first);
        }
      },
      inputs: { isNative: "isNative", isWert: "isWert", isModal: "isModal" },
      outputs: { messageEvent: "messageEvent" },
      features: [ye],
      decls: 10,
      vars: 12,
      consts: [
        ["swapIn", ""],
        ["pop", ""],
        ["dropDownBtn", ""],
        [1, "swapSection", 3, "ngClass"],
        ["class", "tabs gap-2 mb-3", 4, "ngIf"],
        ["class", "text-center pb-2 font-16", 4, "ngIf"],
        ["class", "body-section mt-2", 3, "ngClass", 4, "ngIf"],
        ["class", "body-section mt-1 text-center", 3, "ngClass", 4, "ngIf"],
        [1, "tabs", "gap-2", "mb-3"],
        [1, "btn", "btn-white", 3, "click", "ngClass"],
        [
          "src",
          "/assets/images/svg-icons/ETH.svg",
          "height",
          "25",
          "alt",
          "ETH",
          1,
          "eth-logo",
          "me-1",
        ],
        [
          "src",
          "/assets/images/svg-icons/usdt.svg",
          "height",
          "25",
          "alt",
          "USDT",
          1,
          "eth-logo",
          "me-1",
        ],
        [
          "src",
          "/assets/images/svg-icons/usdc.svg",
          "height",
          "25",
          "alt",
          "USDC",
          1,
          "eth-logo",
          "me-1",
        ],
        [
          "src",
          "/assets/images/svg-icons/card.svg",
          "height",
          "26",
          "alt",
          "CARD",
          1,
          "eth-logo",
          "me-1",
        ],
        [1, "text-center", "pb-2", "font-16"],
        [1, "ms-2", "fw-semibold", "dashTitle", "text-light"],
        [1, "body-section", "mt-2", 3, "ngClass"],
        [1, "row", "my-2"],
        [1, "col-7", "col-xl-7", "pe-xl-2", 3, "ngClass"],
        [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"],
        [1, "d-block", "font-12", "text-white", "fw-bold"],
        [
          "class",
          "text-white fw-bold cursor-pointer font-12 text-uppercase text-decoration-underline",
          3,
          "click",
          4,
          "ngIf",
        ],
        [1, "amountField", "d-flex", "align-items-start"],
        [
          "type",
          "text",
          "appTwoDigitDecimalNumber",
          "",
          "placeholder",
          "0",
          1,
          "form-control",
          "text-truncate",
          3,
          "ngModelChange",
          "noDecimal",
          "ngModel",
        ],
        [
          "class",
          "col-5 col-xl-5 ps-3g-2 pe-xl-2 amountTypeDrp align-self-end mb-0 ms-0",
          4,
          "ngIf",
        ],
        [1, "col-12", "col-xl-12", "pe-xl-2", "mt-2", "mt-xl-2"],
        [1, "d-flex", "align-items-center", "justify-content-between", "mb-1"],
        [1, "d-flex", "align-items-start", "gap-1", "justify-content-start"],
        [1, "d-block", "font-12", "text-truncate", "text-white", "fw-bold"],
        [
          "src",
          "/assets/images/svg-icons/info-icon.svg",
          "triggers",
          "mouseenter:mouseout",
          "placement",
          "bottom",
          "alt",
          "info-icon",
          "loading",
          "lazy",
          1,
          "img-fluid",
          "mwx-16",
          "cursor-pointer",
          3,
          "popover",
        ],
        [
          1,
          "d-block",
          "d-3g-none",
          "d-xl-block",
          "font-12",
          "text-truncate",
          "text-white",
          "fw-bold",
        ],
        [1, "amountField"],
        [
          "type",
          "text",
          "appTwoDigitDecimalNumber",
          "",
          "min",
          "minAmount",
          "pattern",
          "\\d*",
          "placeholder",
          "0",
          1,
          "form-control",
          "text-truncate",
          3,
          "ngModelChange",
          "noDecimal",
          "ngModel",
        ],
        [1, "amountType"],
        ["src", "./assets/images/svg-icons/token.svg", 3, "svgStyle"],
        [1, "w-100", "p-0", "text-center"],
        ["class", "lowBalance mt-2 mb-2 mb-0 text-white font-12", 4, "ngIf"],
        ["class", "lowBalance m-2 mb-0 text-white font-12", 4, "ngIf"],
        ["class", "text-center mt-2 w-100 text-warning font-12", 4, "ngIf"],
        [
          1,
          "d-flex",
          "flex-column",
          "align-items-center",
          "gap-2",
          "mt-2",
          3,
          "ngClass",
        ],
        [
          "type",
          "button",
          "class",
          "btn btn-white w-100",
          3,
          "disabled",
          "click",
          4,
          "ngIf",
        ],
        [
          "type",
          "button",
          "class",
          "btn btn-primary w-100",
          3,
          "disabled",
          "click",
          4,
          "ngIf",
        ],
        ["class", "change-text text-white fw-bold text-center mt-2", 4, "ngIf"],
        [
          1,
          "text-white",
          "fw-bold",
          "cursor-pointer",
          "font-12",
          "text-uppercase",
          "text-decoration-underline",
          3,
          "click",
        ],
        [
          1,
          "col-5",
          "col-xl-5",
          "ps-3g-2",
          "pe-xl-2",
          "amountTypeDrp",
          "align-self-end",
          "mb-0",
          "ms-0",
        ],
        ["class", "mb-1 text-white text-end", 4, "ngIf"],
        [1, "align-self-end"],
        ["dropdown", "", 1, "dropdown", "eth-dropdown"],
        ["dropdownToggle", "", 1, "btn", "mx-0", "toggle-btn", "w-100"],
        [
          1,
          "dropdown-item",
          "d-flex",
          "align-items-center",
          "justify-content-center",
          "px-auto",
        ],
        ["alt", "ETH", 1, "eth-logo", 3, "src"],
        [1, "eth-name", "text-black", "mx-2", "fs-6"],
        [1, "arrow-down"],
        [
          "src",
          "/assets/images/svg-icons/angle-black.svg",
          "alt",
          "down_arrow",
          1,
          "down-arrow",
        ],
        [
          "class",
          "dropdown-menu dropdown-menu-right",
          3,
          "click",
          4,
          "dropdownMenu",
        ],
        [1, "mb-1", "text-white", "text-end"],
        [1, "font-12", "mb-0", "text-white", "fw-bold"],
        [1, "dropdown-menu", "dropdown-menu-right", 3, "click"],
        [1, "text-center", "widget-title", "mt-2"],
        [1, "tabs", "gap-2"],
        [1, "btn", "btn-secondary", 3, "click"],
        ["class", "btn btn-secondary", 3, "active", "click", 4, "ngIf"],
        [1, "itemHolder"],
        [
          "class",
          "d-flex justify-content-between tab-cont-wrap",
          3,
          "ngClass",
          "click",
          4,
          "ngFor",
          "ngForOf",
        ],
        [1, "text-center", "my-2", "font-13", "text-white", "dashTitle"],
        [1, "d-flex", "gap-3"],
        [
          "type",
          "button",
          "class",
          "btn btn-secondary w-50 mb-3 mx-auto",
          3,
          "click",
          4,
          "ngIf",
        ],
        ["target", "_blank", "class", "mx-auto", 3, "href", 4, "ngIf"],
        [
          "src",
          "/assets/images/svg-icons/ETH.svg",
          "alt",
          "ETH",
          1,
          "eth-logo",
          "me-1",
        ],
        [
          "src",
          "/assets/images/svg-icons/BNB.svg",
          "alt",
          "BNB",
          1,
          "eth-logo",
          "me-1",
        ],
        [
          "src",
          "/assets/images/svg-icons/SOL.svg",
          "alt",
          "",
          1,
          "eth-logo",
          "me-1",
        ],
        [
          1,
          "d-flex",
          "justify-content-between",
          "tab-cont-wrap",
          3,
          "click",
          "ngClass",
        ],
        [1, "d-flex"],
        ["alt", "token-icon", 1, "drop-logo", 3, "src"],
        [1, "pt-2", "ms-2", "font-14"],
        [1, "mb-0"],
        [1, "mb-2", "font-14"],
        [1, "pt-2"],
        [1, "mb-0", "me-0", "text-end", "fw-normal", "font-12"],
        [1, "mb-2", "me-0", "text-end", "font-14"],
        [
          "type",
          "button",
          1,
          "btn",
          "btn-secondary",
          "w-50",
          "mb-3",
          "mx-auto",
          3,
          "click",
        ],
        ["target", "_blank", 1, "mx-auto", 3, "href"],
        [
          "type",
          "button",
          1,
          "btn",
          "btn-secondary",
          "w-100",
          "mb-3",
          "mx-auto",
        ],
        [1, "popupHtml"],
        [1, "lowBalance", "mt-2", "mb-2", "mb-0", "text-white", "font-12"],
        [1, "lowBalance", "m-2", "mb-0", "text-white", "font-12"],
        [1, "text-center", "mt-2", "w-100", "text-warning", "font-12"],
        [
          "type",
          "button",
          1,
          "btn",
          "btn-white",
          "w-100",
          3,
          "click",
          "disabled",
        ],
        [
          "type",
          "button",
          1,
          "btn",
          "btn-primary",
          "w-100",
          3,
          "click",
          "disabled",
        ],
        [1, "change-text", "text-white", "fw-bold", "text-center", "mt-2"],
        [1, "clickable", 3, "click"],
        [1, "body-section", "mt-1", "text-center", 3, "ngClass"],
        [
          "src",
          "./assets/images/svg-icons/token.svg",
          "alt",
          "loading",
          1,
          "statusIcon",
          "loading",
        ],
        [
          1,
          "fw-normal",
          "fw-bold",
          "font-16",
          "px-2",
          "my-1",
          "text-uppercase",
          "text-light",
          "text-center",
        ],
        ["class", "fs-7 mb-1 text-light", 4, "ngIf"],
        [1, "fs-7", "mb-1", "text-light"],
        [
          1,
          "fw-semibold",
          "fs-6",
          "my-1",
          "text-uppercase",
          "text-center",
          "text-secondary",
          "text-light",
        ],
        [
          1,
          "fw-semibold",
          "fs-6",
          "my-1",
          "text-uppercase",
          "text-secondary",
          "text-light",
        ],
        [
          "src",
          "./assets/images/popup-icons/success.svg",
          "alt",
          "complete",
          1,
          "statusIcon",
        ],
        [
          1,
          "fw-semibold",
          "fs-6",
          "my-1",
          "text-uppercase",
          "text-success",
          "text-center",
        ],
        ["class", "fs-7 mb-1 text-light mb-lg-4", 4, "ngIf"],
        [
          "class",
          "d-flex align-items-center justify-content-center",
          4,
          "ngIf",
        ],
        [1, "d-flex", "align-items-center", "justify-content-center", "gap-2"],
        [1, "btn", "btn-primary", "w-50", "fs-8", "text-uppercase", 3, "click"],
        [1, "fs-7", "mb-1", "text-light", "mb-lg-4"],
        [1, "d-flex", "align-items-center", "justify-content-center"],
        [
          1,
          "btn",
          "btn-md",
          "mb-2",
          "btn-primary",
          "w-100",
          "fs-7",
          "text-uppercase",
          3,
          "click",
        ],
        [
          "src",
          "./assets/images/popup-icons/warning.svg",
          "alt",
          "failed",
          1,
          "statusIcon",
        ],
        [
          1,
          "fw-semibold",
          "fs-6",
          "my-1",
          "text-uppercase",
          "text-danger",
          "text-center",
        ],
        [1, "fs-7", "mb-1", "mb-lg-4", "text-danger"],
        [
          1,
          "fw-semibold",
          "fs-6",
          "text-uppercase",
          "text-danger",
          "my-1",
          "text-center",
        ],
        [
          1,
          "d-flex",
          "align-items-center",
          "justify-content-center",
          "gap-2",
          "mt-3",
        ],
        [
          1,
          "btn",
          "btn-primary",
          "w-100",
          "fs-7",
          "bg-secondary",
          "text-primary",
          "text-uppercase",
          3,
          "click",
        ],
      ],
      template: function (n, a) {
        n & 1 &&
          (c(0, "div", 3),
          A(1, Dv, 18, 15, "div", 4)(2, Ev, 4, 5, "div", 5)(
            3,
            Qv,
            36,
            39,
            "div",
            6
          )(4, Jv, 7, 8, "div", 7)(5, n1, 8, 9, "div", 7)(
            6,
            a1,
            8,
            13,
            "div",
            7
          )(7, l1, 15, 15, "div", 7)(8, c1, 15, 15, "div", 7)(
            9,
            d1,
            9,
            9,
            "div",
            7
          ),
          d()),
          n & 2 &&
            (u("ngClass", V(10, bv, !a.isModal)),
            o(),
            u("ngIf", a.isModal),
            o(),
            u("ngIf", a.walletAddress && a.isModal && !a.isWert),
            o(),
            u("ngIf", a.status === a.SwapStatus.not_started),
            o(),
            u("ngIf", a.status === a.SwapStatus.in_progess),
            o(),
            u("ngIf", a.status === a.SwapStatus.confirm_pending),
            o(),
            u("ngIf", a.status === a.SwapStatus.approval_pending),
            o(),
            u("ngIf", a.status === a.SwapStatus.complete),
            o(),
            u("ngIf", a.status === a.SwapStatus.failed),
            o(),
            u("ngIf", a.status === a.SwapStatus.rejected));
      },
      dependencies: [yt, le, X, Ri, _a, qs, _n, Hl, wh, qe, gs, fs, Yn, Y],
      styles: [
        ".swapSection[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{letter-spacing:.6px;color:#21283d;text-transform:uppercase}.swapSection[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .amountField[_ngcontent-%COMP%]{position:relative}.swapSection[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .amountField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:37px;padding:8px 15px;font-size:1rem;font-weight:400;border-radius:6px;border:1.61px solid #ffffff;color:#eaeaea;background:transparent;line-height:1}.swapSection[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .amountField[_ngcontent-%COMP%]   .amountType[_ngcontent-%COMP%]{position:absolute;top:18px;right:.8rem;transform:translateY(-50%);display:flex;align-items:center}.swapSection[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .lowBalance[_ngcontent-%COMP%]{line-height:20px;font-weight:400}.swapSection[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .statusIcon[_ngcontent-%COMP%]{height:55px}.white-btn[_ngcontent-%COMP%]{background-color:#fff!important}.white-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000!important}.amountTypeDrp[_ngcontent-%COMP%]{padding-bottom:.5px}.dropdown[_ngcontent-%COMP%]{min-width:90px!important;border-radius:5px;background:#fff;height:37px;display:flex;align-items:center}@media screen and (max-width: 1399px){.dropdown[_ngcontent-%COMP%], .dropdown.eth-dropdown[_ngcontent-%COMP%]{height:37px}}.dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{border:none;box-shadow:none}.dropdown[_ngcontent-%COMP%]   .eth-logo[_ngcontent-%COMP%]{height:20px}.dropdown-menu[_ngcontent-%COMP%]{min-width:390px;max-width:390px;min-height:418px;max-height:620px;overflow:hidden;padding:4px 8px;z-index:999;right:-16px!important;top:-210px!important;overflow-y:auto;background-color:#3f414a;border:1px solid #585e6f;border-radius:1px}.dropdown-menu[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin:.5em 0}.dropdown-menu[_ngcontent-%COMP%]   .widget-title[_ngcontent-%COMP%]{font-family:Librestile_Extended_Bold,sans-serif;font-size:15px;letter-spacing:.6px;color:#fff}.dropdown-menu[_ngcontent-%COMP%]   .itemHolder[_ngcontent-%COMP%]{max-height:305px;line-height:unset;overflow-y:auto;overflow-x:hidden;font-weight:700;margin-bottom:10px}@media screen and (max-width: 1399px){.dropdown-menu[_ngcontent-%COMP%]   .itemHolder[_ngcontent-%COMP%]{max-height:218px}}@media screen and (max-width: 768px){.dropdown-menu[_ngcontent-%COMP%]   .itemHolder[_ngcontent-%COMP%]{max-height:300px}}.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.tab-cont-wrap[_ngcontent-%COMP%]{margin:0 10px 7px;padding:0 15px;border-radius:4px;background:#fff;color:#000}.tab-cont-wrap.no-bal[_ngcontent-%COMP%]{opacity:.5}.tab-cont-wrap[_ngcontent-%COMP%]:last-child{margin:0 10px}.tab-cont-wrap[_ngcontent-%COMP%]   .drop-logo[_ngcontent-%COMP%]{width:35px}.active-tab[_ngcontent-%COMP%]{border:1px solid #000000;background:#ffa231;color:#fff}.down-arrow[_ngcontent-%COMP%]{height:8px}@media screen and (max-width: 768px){.down-arrow[_ngcontent-%COMP%]{height:10px}}.change-text[_ngcontent-%COMP%]{text-transform:uppercase;font-size:10px;margin-bottom:0;margin-top:4px}.change-text[_ngcontent-%COMP%]   .clickable[_ngcontent-%COMP%]{cursor:pointer;text-decoration:underline;color:#fff;letter-spacing:.7px}",
      ],
    });
  }
  return t;
})();
var p1 = () => ({ "width.px": 20, "height.px": 20 }),
  Hh = (() => {
    class t {
      modalRef;
      popupService;
      translateService;
      url = "";
      constructor(e, n, a) {
        (this.modalRef = e),
          (this.popupService = n),
          (this.translateService = a);
      }
      ngOnInit() {}
      copy() {
        this.popupService.messsageAlert(
          "success",
          this.translateService.instant("misc.successCopy")
        );
      }
      static ɵfac = function (n) {
        return new (n || t)(w(rt), w(kt), w(pe));
      };
      static ɵcmp = F({
        type: t,
        selectors: [["app-refer"]],
        decls: 17,
        vars: 13,
        consts: [
          [1, "modal-header"],
          [1, "modal-title", "text-center"],
          [1, "modal-body"],
          [1, "fw-medium", "font-16", "text-center"],
          [
            "type",
            "button",
            "ngxClipboard",
            "",
            1,
            "btn",
            "btn-outline-primary",
            "my-3",
            "d-block",
            "refer-btn",
            "wx-250",
            "mx-auto",
            3,
            "click",
            "cbContent",
          ],
          [1, "d-flex", "align-items-center", "justify-content-center"],
          [1, "d-inline-block", "text-truncate", "font-13", "me-1", "wx-250"],
          ["src", "./assets/images/svg-icons/copy.svg", 1, "", 3, "svgStyle"],
          [1, "footer"],
          [
            "type",
            "button",
            1,
            "btn",
            "btn-outline-primary",
            "w-100",
            "mt-3",
            "icon-btn",
            "d-block",
            3,
            "click",
          ],
        ],
        template: function (n, a) {
          n & 1 &&
            (c(0, "div", 0)(1, "h4", 1),
            m(2),
            g(3, "translate"),
            d()(),
            c(4, "div", 2)(5, "div", 3),
            m(6),
            g(7, "translate"),
            d(),
            c(8, "button", 4),
            S("click", function () {
              return a.copy();
            }),
            c(9, "div", 5)(10, "span", 6),
            m(11),
            d(),
            T(12, "svg-icon", 7),
            d()(),
            c(13, "div", 8)(14, "button", 9),
            S("click", function () {
              return a.modalRef.hide();
            }),
            m(15),
            g(16, "translate"),
            d()()()),
            n & 2 &&
              (o(2),
              _(f(3, 6, "popup.ref_link")),
              o(4),
              _(f(7, 8, "popup.ref_text")),
              o(2),
              u("cbContent", a.url),
              o(3),
              _(a.url),
              o(),
              u("svgStyle", xe(12, p1)),
              o(3),
              _(f(16, 10, "misc.close")));
        },
        dependencies: [hl, qe, Y],
        styles: [
          ".hide-overflow[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;word-break:break-all;overflow:hidden}",
        ],
      });
    }
    return t;
  })();
var Ai = (t) => ({ shimmer: t }),
  m1 = (t) => ({ "d-block font-12": t }),
  zh = (t) => ({ tokenName: t }),
  u1 = (t) => [t];
function g1(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 15)(1, "span", 16),
      m(2),
      g(3, "translate"),
      d(),
      c(4, "span", 17),
      m(5),
      d(),
      c(6, "img", 18),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.yourPurchasedInfo());
      }),
      d()();
  }
  if (t & 2) {
    let e = y();
    u(
      "ngClass",
      V(6, Ai, !e.raisedInfo.usdRaised || e.raisedInfo.usdRaised <= 0)
    ),
      o(2),
      _(q(3, 3, "widget.your_claimable", V(8, zh, e.tokenName))),
      o(3),
      P(
        " : ",
        e.convertNum(e.raisedInfo.userStaked + e.raisedInfo.userClaimable),
        ""
      );
  }
}
function f1(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 15)(1, "span", 16),
      m(2),
      g(3, "translate"),
      d(),
      c(4, "span", 19),
      m(5),
      d(),
      c(6, "img", 18),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.stakeInfo());
      }),
      d()();
  }
  if (t & 2) {
    let e = y();
    u(
      "ngClass",
      V(
        6,
        u1,
        !e.raisedInfo.usdRaised || e.raisedInfo.usdRaised <= 0 ? "shimmer" : ""
      )
    ),
      o(2),
      _(q(3, 3, "widget.your_stakeable", V(8, zh, e.tokenName))),
      o(3),
      P(" : ", e.convertNum(e.raisedInfo.userEthClaimable), "");
  }
}
var Gh = (() => {
  class t {
    popupService;
    translate;
    modalService;
    analyticService;
    commonConnectionService;
    liveCounter = { _days: 0, _hours: 0, _minutes: 0, _seconds: 0, _diff: 0 };
    raisedInfo = {
      raisedPercent: "",
      usdRaised: 0,
      userClaimable: 0,
      userEthClaimable: 0,
      userStaked: 0,
      maxAmount: 0,
    };
    tokenName = E.tokenName;
    modalRef;
    constructor(e, n, a, s, r) {
      (this.popupService = e),
        (this.translate = n),
        (this.modalService = a),
        (this.analyticService = s),
        (this.commonConnectionService = r);
    }
    get walletAddress() {
      return this.commonConnectionService.walletAddress;
    }
    convertNum(e) {
      return Vi(e);
    }
    yourPurchasedInfo() {
      this.popupService.messagePopup({
        icon: "info",
        desc: this.translate.instant(
          this.commonConnectionService.getSelectedChain === ge.EVM
            ? "popup.your_purchased_popup_info"
            : "popup.your_purchased_popup_info_sol"
        ),
        confirmBtnTxt: this.translate.instant("misc.ok"),
      });
    }
    stakeInfo() {
      this.popupService.messagePopup({
        icon: "info",
        desc: this.translate.instant("staking.stake_popup_info"),
        confirmBtnTxt: this.translate.instant("misc.ok"),
      });
    }
    get referUrl() {
      return this.analyticService.referUrl;
    }
    get isEVMConnected() {
      return this.commonConnectionService.getSelectedChain === ge.EVM;
    }
    referAndEarn() {
      this.modalRef = this.modalService.show(Hh, {
        class: "modal-min modal-dialog-centered",
        backdrop: "static",
        initialState: { url: this.referUrl },
      });
    }
    static ɵfac = function (n) {
      return new (n || t)(w(kt), w(pe), w(wt), w(pa), w(fe));
    };
    static ɵcmp = F({
      type: t,
      selectors: [["app-round-user-details"]],
      inputs: { liveCounter: "liveCounter", raisedInfo: "raisedInfo" },
      decls: 44,
      vars: 53,
      consts: [
        [
          1,
          "w-100",
          "d-flex",
          "flex-column",
          "align-items-center",
          "justify-content-start",
          "text-center",
        ],
        [
          1,
          "widget-title",
          "text-capitalize",
          "fw-bold",
          "mb-2",
          "text-white",
          3,
          "innerHTML",
        ],
        [
          1,
          "d-inline-flex",
          "align-items-center",
          "justify-content-center",
          "gap-2",
          "counter",
        ],
        [1, "rounded-3", "time-card", "text-center", "d-flex", 3, "ngClass"],
        [1, "indicator"],
        [1, "value"],
        [1, "rounded-3", "time-card", "text-center", 3, "ngClass"],
        [1, "my-3", "text-white", "text-center", "w-100", 3, "ngClass"],
        [1, "text-uppercase", "font-10", "fw-bold", 3, "ngClass"],
        [1, "font-lg-18", "font-15", "fw-bold"],
        ["data-percent", "0", 1, "progress", 3, "ngClass"],
        [1, "position-absolute", "text"],
        [1, "bar"],
        [
          1,
          "d-flex",
          "align-items-center",
          "gap-2",
          "my-2",
          "w-100",
          3,
          "ngClass",
        ],
        [
          "class",
          "d-flex justify-content-center align-items-center text-center font-8 font-sm-10 fw-bold text-white",
          3,
          "ngClass",
          4,
          "ngIf",
        ],
        [
          1,
          "d-flex",
          "justify-content-center",
          "align-items-center",
          "text-center",
          "font-8",
          "font-sm-10",
          "fw-bold",
          "text-white",
          3,
          "ngClass",
        ],
        [1, "text-uppercase"],
        [1, "text-light"],
        [
          "src",
          "/assets/images/svg-icons/info-icon.svg",
          "alt",
          "info-icon",
          "loading",
          "lazy",
          1,
          "img-fluid",
          "icon",
          "ms-1",
          "ms-sm-2",
          "cursor-pointer",
          3,
          "click",
        ],
        [1, "fw-regular", "text-light"],
      ],
      template: function (n, a) {
        n & 1 &&
          (c(0, "div", 0),
          T(1, "p", 1),
          g(2, "translate"),
          c(3, "div", 2)(4, "div", 3)(5, "div", 4),
          m(6),
          g(7, "translate"),
          d(),
          c(8, "div", 5),
          m(9),
          d()(),
          c(10, "div", 6)(11, "div", 4),
          m(12),
          g(13, "translate"),
          d(),
          c(14, "div", 5),
          m(15),
          d()(),
          c(16, "div", 6)(17, "div", 4),
          m(18),
          g(19, "translate"),
          d(),
          c(20, "div", 5),
          m(21),
          d()(),
          c(22, "div", 6)(23, "div", 4),
          m(24),
          g(25, "translate"),
          d(),
          c(26, "div", 5),
          m(27),
          d()()(),
          c(28, "p", 7)(29, "span", 8),
          m(30),
          g(31, "translate"),
          d(),
          c(32, "span", 9),
          m(33),
          d(),
          c(34, "span", 9),
          m(35),
          d()(),
          c(36, "div", 10)(37, "span", 11),
          m(38),
          g(39, "translate"),
          d(),
          T(40, "div", 12),
          d(),
          c(41, "div", 13),
          A(42, g1, 7, 10, "div", 14)(43, f1, 7, 10, "div", 14),
          d()()),
          n & 2 &&
            (o(),
            u("innerHTML", f(2, 25, "widget.widget_title"), De),
            o(3),
            u("ngClass", V(39, Ai, a.liveCounter._diff == 0)),
            o(2),
            _(f(7, 27, "widget.days")),
            o(3),
            _(a.liveCounter._days),
            o(),
            u("ngClass", V(41, Ai, a.liveCounter._diff == 0)),
            o(2),
            _(f(13, 29, "widget.hours")),
            o(3),
            _(a.liveCounter._hours),
            o(),
            u("ngClass", V(43, Ai, a.liveCounter._diff == 0)),
            o(2),
            _(f(19, 31, "widget.minutes")),
            o(3),
            _(a.liveCounter._minutes),
            o(),
            u("ngClass", V(45, Ai, a.liveCounter._diff == 0)),
            o(2),
            _(f(25, 33, "widget.seconds")),
            o(3),
            _(a.liveCounter._seconds),
            o(),
            u(
              "ngClass",
              V(47, Ai, !a.raisedInfo.usdRaised || a.raisedInfo.usdRaised <= 0)
            ),
            o(),
            u("ngClass", V(49, m1, !a.walletAddress)),
            o(),
            P(" ", f(31, 35, "widget.usdt_raised"), " "),
            o(3),
            P(" $", a.convertNum(a.raisedInfo.usdRaised), ""),
            o(2),
            P(" / $", a.convertNum(a.raisedInfo.maxAmount), ""),
            o(),
            u(
              "ngClass",
              V(51, Ai, !a.raisedInfo.usdRaised || a.raisedInfo.usdRaised <= 0)
            ),
            o(2),
            _(f(39, 37, "widget.bar_title")),
            o(2),
            ct("width", a.raisedInfo.raisedPercent),
            o(),
            u(
              "ngClass",
              a.isEVMConnected
                ? "justify-content-between"
                : "justify-content-center"
            ),
            o(),
            u("ngIf", a.walletAddress),
            o(),
            u("ngIf", a.walletAddress && a.isEVMConnected));
      },
      dependencies: [yt, X, Y],
      styles: [
        ".widget-title[_ngcontent-%COMP%]{font-family:Librestile_Extended_Bold,sans-serif;font-size:15px;letter-spacing:.6px}.counter[_ngcontent-%COMP%]{border-radius:19.352px;border:1.613px solid #FFF;background:#5f616b;box-shadow:0 1.613px #000;-webkit-backdrop-filter:blur(6.450782299px);backdrop-filter:blur(6.450782299px);overflow:hidden}.counter[_ngcontent-%COMP%]   .time-card[_ngcontent-%COMP%]{min-width:68px;padding:10px;display:flex;border-radius:5px;justify-content:center;flex-direction:column;align-items:center}@media screen and (max-width: 576px){.counter[_ngcontent-%COMP%]   .time-card[_ngcontent-%COMP%]{min-width:65px;padding:10px 5px}}.counter[_ngcontent-%COMP%]   .time-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:30px;font-weight:800;line-height:1;color:#ffa231}@media screen and (max-width: 576px){.counter[_ngcontent-%COMP%]   .time-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:32px}}.counter[_ngcontent-%COMP%]   .time-card[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]{font-size:13px;line-height:20px;font-weight:800;text-transform:uppercase;letter-spacing:.52px;color:#fff}@media screen and (max-width: 576px){.counter[_ngcontent-%COMP%]   .time-card[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]{font-size:12px}}.icon[_ngcontent-%COMP%]{height:13px}.progress[_ngcontent-%COMP%]{width:100%;border-radius:80px;height:19px;background:#535660;margin:0 auto;overflow:hidden;position:relative}@media screen and (max-width: 576px){.progress[_ngcontent-%COMP%]{width:100%}}.progress[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;font-size:12px;text-align:center;line-height:24px;z-index:1;color:#eaeaea}.progress[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{border-radius:80px;background:#ffa231;border:2px solid #fff;box-shadow:0 0 12.9px #ffffff80;position:relative}.progress[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:12px;font-weight:800;color:#fff;left:50%;top:50%;z-index:2;transform:translate(-50%,-50%)}a[_ngcontent-%COMP%]{color:#eaeaea;max-width:220px}",
      ],
    });
  }
  return t;
})();
var x1 = (t) => ({ cover: t }),
  v1 = (t) => ({ shimmer: t }),
  y1 = (t) => ({ mode: t });
function b1(t, i) {
  if ((t & 1 && T(0, "img", 22), t & 2)) {
    let e = i.$implicit;
    u("src", e, W);
  }
}
function C1(t, i) {
  if ((t & 1 && (c(0, "p", 23), m(1), d()), t & 2)) {
    let e = y();
    u("ngClass", V(3, v1, !e.usdRaised || e.usdRaised <= 0)),
      o(),
      mt("1 ", e.tokenName, " = $", e.salePrice, "");
  }
}
function w1(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "app-swap", 24, 0),
      S("messageEvent", function (a) {
        M(e);
        let s = y();
        return L(s.messageEvent(a));
      }),
      d();
  }
  if (t & 2) {
    let e = y();
    u("isNative", e.isNative)("isWert", e.isWert);
  }
}
function T1(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "button", 33),
      S("click", function () {
        M(e);
        let a = y(2);
        return (a.isWert = !0), L(a.connectModal("Widget-Crypto"));
      }),
      c(1, "span", 32),
      m(2),
      g(3, "translate"),
      d()();
  }
  t & 2 && (o(2), _(f(3, 1, "widget.buy_with_card")));
}
function S1(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 25)(1, "div", 26)(2, "button", 27),
      S("click", function () {
        M(e);
        let a = y();
        return (a.isWert = !1), L(a.connectModal("Widget-Card"));
      }),
      c(3, "span", 28),
      m(4),
      g(5, "translate"),
      d()(),
      A(6, T1, 4, 3, "button", 29),
      d(),
      c(7, "a", 30)(8, "button", 31)(9, "span", 32),
      m(10),
      g(11, "translate"),
      d()()()();
  }
  if (t & 2) {
    let e = y();
    o(4),
      _(f(5, 4, "widget.buy_with_crypto")),
      o(2),
      u("ngIf", e.isEvmBased),
      o(),
      u("href", e.isSolBased ? e.evmSite : e.solSite, W),
      o(3),
      _(
        q(11, 6, "popup.buy_with_mode", V(9, y1, e.isSolBased ? "ETH" : "SOL"))
      );
  }
}
function k1(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "a", 34),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.openEthBuyWidget());
      }),
      m(1),
      g(2, "translate"),
      d();
  }
  t & 2 && (o(), P(" ", f(2, 1, "widget.not_enough_eth"), " "));
}
function A1(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "a", 34),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.openEthBuyWidget(!0));
      }),
      m(1),
      g(2, "translate"),
      d();
  }
  t & 2 && (o(), P(" ", f(2, 1, "widget.not_enough_bnb"), " "));
}
function M1(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 35),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.openBestWallet());
      }),
      c(1, "span", 36),
      m(2),
      g(3, "translate"),
      d()();
  }
  t & 2 && (o(2), _(f(3, 1, "widget.no_wallet_click_here")));
}
var Wh = (() => {
  class t {
    _platformId;
    window;
    eventService;
    translate;
    popupService;
    modalService;
    modalRef;
    analyticasService;
    commonConnectService;
    evmConnectService;
    solConnectService;
    swapComp;
    subscriptions = [];
    isBsNetwork = !1;
    tokenSold = 0;
    maxAmount = 0;
    maxToken = 0;
    minToken = 0;
    usdRaised = 0;
    currentStep = 0;
    userStaked = 0;
    userClaimable = 0;
    userEthClaimable = 0;
    refreshId;
    refreshRate = 500;
    dataLoaded = !1;
    salePrice = 0.0337;
    liveCounter = { _days: 0, _hours: 0, _minutes: 0, _seconds: 0, _diff: 0 };
    swapMode = "native";
    isNative = !0;
    isWert = !1;
    referUrl = "";
    SwapStatus = ce;
    timeInterval;
    isSolBased = E.isSolBased;
    isEvmBased = E.isEvmBased;
    evmSite = E.evmSite;
    solSite = E.solSite;
    walletAddress;
    currentStoreData;
    status;
    raisedPercent;
    modeName;
    stakeData;
    tokenName = E.tokenName;
    bwUrl = Bs("bwUrl");
    raisedInfo = {
      raisedPercent: 0,
      usdRaised: 0,
      userClaimable: 0,
      userEthClaimable: 0,
      userStaked: 0,
      maxAmount: 0,
    };
    CHAINS = ge;
    buyOptions = [
      "/assets/images/webp/eth.webp",
      "/assets/images/webp/sol-black.webp",
      "/assets/images/svg-icons/usdc.svg",
      "/assets/images/svg-icons/usdt.svg",
      "/assets/images/webp/card-black.webp",
      "/assets/images/webp/bsc-black.webp",
    ];
    constructor(e, n, a, s, r, l, p, h, x, v, b) {
      (this._platformId = e),
        (this.window = n),
        (this.eventService = a),
        (this.translate = s),
        (this.popupService = r),
        (this.modalService = l),
        (this.modalRef = p),
        (this.analyticasService = h),
        (this.commonConnectService = x),
        (this.evmConnectService = v),
        (this.solConnectService = b),
        this.translate.onLangChange.subscribe((C) => {
          this.updateStructuredData();
        });
    }
    ngAfterViewInit() {
      H(this._platformId) &&
        ((this.refreshId = setInterval(
          () => this.getBalanceData(),
          this.refreshRate
        )),
        (this.timeInterval = setInterval(() => this.setTimer(), 2e3)),
        this.subscriptions.push(
          this.eventService.getCounter().subscribe((e) => {
            this.liveCounter = e;
          })
        ),
        (this.bwUrl = Bs("bwUrl")));
    }
    getBalanceData() {
      let e = this.commonConnectService.balanceData,
        n =
          (this.evmConnectService.balanceData?.usdRaised || 0) +
          (this.solConnectService.balanceData?.usdRaised || 0);
      (this.currentStep = e.currentStep),
        (this.tokenSold = e.totalTokensSold),
        (this.currentStoreData =
          this.commonConnectService.tokenomics[this.currentStep]),
        (this.maxAmount = this.commonConnectService.maxAmount || 0),
        (this.maxToken = this.currentStoreData?.maxToken || 0),
        (this.minToken = this.currentStoreData?.minToken || 0),
        (this.usdRaised = n),
        (this.userStaked = this.commonConnectService.stakeData.userStaked),
        (this.userClaimable = e.userClaimable),
        (this.userEthClaimable = e.ethClaimable ?? 0),
        (this.referUrl = this.analyticasService.referUrl),
        (this.status = this.commonConnectService.swapStatus),
        (this.walletAddress = this.commonConnectService.walletAddress),
        (this.modeName = da(this.commonConnectService.chainId).purchaseToken),
        (this.stakeData = this.commonConnectService.stakeData),
        (this.salePrice = this.currentStoreData?.tokenUSDT),
        (this.raisedPercent = this.getRaisedPercent()),
        this.updateStructuredData(),
        (this.raisedInfo = {
          raisedPercent: this.raisedPercent,
          usdRaised: this.usdRaised,
          userClaimable: this.userClaimable,
          userEthClaimable: this.userEthClaimable,
          userStaked: this.userStaked,
          maxAmount: this.maxAmount,
        }),
        (this.dataLoaded = !0);
    }
    get selectedChain() {
      return this.commonConnectService.getSelectedChain;
    }
    connectModal(e) {
      if (
        (this.commonConnectService.vwoData("walletConnectionPlacement", {
          placement: e,
        }),
        this.bwUrl && this.bwUrl !== "")
      ) {
        this.connectBestWallet();
        return;
      }
      this.modalRef = this.modalService.show(Yt, {
        class: "modal-min modal-dialog-centered",
        backdrop: "static",
        initialState: { isCard: this.isWert },
      });
    }
    connectBestWallet() {
      this.commonConnectService.connectEvmWallet(Ml.BEST_WALLET_MOB);
    }
    openSwap(e = !0, n = !1) {
      this.swapComp.wertMode
        ? this.popupService
            .messagePopup({
              icon: "warning",
              desc: this.translate.instant("popup.are_you_sure"),
              confirmBtnTxt: this.translate.instant("misc.confirm"),
              cancelBtnTxt: this.translate.instant("misc.cancel"),
            })
            .subscribe({
              next: (a) => {
                a &&
                  ((this.swapComp.wertMode = !1),
                  (this.swapMode = e ? "native" : n ? "card" : "usdt"),
                  (this.isNative = e),
                  (this.isWert = n));
              },
            })
        : ((this.swapMode = e ? "native" : n ? "card" : "usdt"),
          (this.isNative = e),
          (this.isWert = n)),
        setTimeout(() => this.swapComp.max(), 1e3);
    }
    changeChain(e) {
      if (e == this.modeName) return;
      let n = e === "ETH" ? E.eth : E.bsc;
      this.modeName == "ETH"
        ? this.popupService
            .messagePopup({
              icon: "info",
              title: this.translate.instant("popup.are_you_sure"),
              desc: this.translate.instant("popup.change_swap_text", {
                apy: this.stakeData.apy,
                mode: e,
              }),
              confirmBtnTxt: this.translate.instant("popup.buy_with_mode", {
                mode: e,
              }),
              cancelBtnTxt: this.translate.instant("misc.cancel"),
            })
            .subscribe({
              next: (a) => {
                a &&
                  (this.walletAddress
                    ? this.commonConnectService.switchNetwork(n.chainIdInt)
                    : (this.commonConnectService.chainId = n.chainIdInt));
              },
            })
        : this.walletAddress
        ? this.commonConnectService.switchNetwork(n.chainIdInt)
        : (this.commonConnectService.chainId = n.chainIdInt);
    }
    getRaisedPercent() {
      let e = (this.usdRaised / this.maxAmount) * 100;
      return (e >= 100 ? 100 : e) + "%";
    }
    ngOnDestroy() {
      for (let e of this.subscriptions) e.unsubscribe();
    }
    setTimer() {
      this.dataLoaded &&
        this.tokenSold &&
        this.tokenSold > 0 &&
        (this.currentStoreData.endDate < Date.parse(new Date().toString()) &&
        this.currentStep < this.commonConnectService.tokenomics.length - 1
          ? this.eventService.setCounter(
              this.commonConnectService.tokenomics[this.currentStep + 1].endDate
            )
          : this.eventService.setCounter(this.currentStoreData.endDate),
        clearInterval(this.timeInterval));
    }
    connectWallet(e) {
      this.commonConnectService.connectEvmWallet(e, this.isBsNetwork),
        this.modalRef.hide();
    }
    openBestWallet() {
      this.commonConnectService.vwoData("dontHaveWallet", {
        noWalletOptionClickedDevice: Ll(),
        noWalletOptionClickedPlacement: "Widget",
      }),
        this.modalRef.hide(),
        setTimeout(() => {
          this.modalRef = this.modalService.show(Rl, {
            class: "modal-lg modal-dialog-centered bw-modal",
            backdrop: "static",
          });
        }, 500);
    }
    openEthBuyWidget(e = !1) {
      this.modalRef = this.modalService.show(Oh, {
        class: "modal-xs modal-dialog-centered transak",
        backdrop: "static",
        initialState: { walletAddress: this.walletAddress, isBscChain: e },
      });
    }
    messageEvent(e) {
      this.isWert = e;
    }
    updateStructuredData() {
      let e = E.isEvmBased ? E.evmSite : E.solSite,
        n = {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bitcoin Hyper",
              alternateName: ["BitcoinHyper", "btchyper", "Hyper"],
              url: "https://bitcoinhyper.com",
              logo: "https://bitcoinhyper.com/assets/images/svg-icons/logo.svg",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  email: "contact@bitcoinhyper.com",
                  contactType: "Customer Support",
                  availableLanguage: [
                    "English",
                    "German",
                    "Japanese",
                    "Korean",
                    "Spanish",
                    "Chinese",
                    "Portuguese",
                    "Vietnamese",
                    "Italian",
                    "Russian",
                    "Polish",
                    "French",
                  ],
                },
              ],
              sameAs: ["https://t.me/BTCHyper_meme", "https://x.com/BTCHyper_meme"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Quijano Chambers, P.O. Box 3159",
                addressLocality: "Road Town",
                addressRegion: "British Virgin Islands",
                postalCode: "3159",
                addressCountry: "VG",
              },
              foundingDate: "2025-05-04",
              founders: [{ "@type": "Person", name: "Agus Prabowo Saputra" }],
              areaServed: "Worldwide",
              knowsAbout: [
                "Cryptocurrency",
                "Blockchain Technology",
                "Crypto Presale",
              ],
              isicV4: "6499",
            },
            {
              "@type": "Product",
              "@id": e,
              name: "Bitcoin Hyper",
              description: this.translate.instant("misc.meta_data"),
              image: `${e}/assets/images/pngs/logo.png`,
              brand: { "@type": "Brand", name: "Bitcoin Hyper" },
              category: "Cryptocurrency",
              offers: {
                "@type": "Offer",
                price: String(this.salePrice ?? 0),
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                url: e,
              },
            },
            {
              "@type": "Event",
              "@id": e,
              name: this.translate.instant("misc.schema_event"),
              description: this.translate.instant("misc.meta_data"),
              startDate: "2025-07-01T00:00:00Z",
              endDate: "2025-10-01T00:00:00Z",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode:
                "https://schema.org/OnlineEventAttendanceMode",
              location: { "@type": "VirtualLocation", url: e },
              organizer: { "@id": e },
              image: `${e}/assets/images/pngs/logo.png`,
            },
          ],
        };
      this.addSchema("GLOBAL_SCHEMA", n);
    }
    addSchema(e, n) {
      let a = document.getElementById(e);
      a && a.remove();
      let s = document.createElement("script");
      (s.type = "application/ld+json"),
        (s.id = e),
        (s.textContent = JSON.stringify(n)),
        document.head.appendChild(s);
    }
    static ɵfac = function (n) {
      return new (n || t)(
        w(j),
        w(ca),
        w(Ye),
        w(pe),
        w(kt),
        w(wt),
        w(rt),
        w(pa),
        w(fe),
        w(Bl),
        w(Nl)
      );
    };
    static ɵcmp = F({
      type: t,
      selectors: [["app-widget"]],
      viewQuery: function (n, a) {
        if ((n & 1 && $e(nn, 5), n & 2)) {
          let s;
          He((s = ze())) && (a.swapComp = s.first);
        }
      },
      decls: 26,
      vars: 18,
      consts: [
        ["swap", ""],
        [1, "col-12", "align-self-center"],
        [1, "top-bar"],
        [1, "scroller"],
        [1, "track-title"],
        [1, "marquee"],
        ["alt", "buy-option ", 3, "src", 4, "ngFor", "ngForOf"],
        [1, "widget-wrapper"],
        [1, "wallet-box"],
        [3, "liveCounter", "raisedInfo"],
        [1, "swapArea", 3, "ngClass"],
        [
          "class",
          "text-center m-0 font-16 fw-bold text-white dashTitle",
          3,
          "ngClass",
          4,
          "ngIf",
        ],
        [3, "isNative", "isWert", "messageEvent", 4, "ngIf"],
        [
          "class",
          "d-flex flex-column align-items-center justify-content-center gap-2 mt-4",
          4,
          "ngIf",
        ],
        [1, "mt-3"],
        [1, "font-13", "text-center", "mb-1"],
        [
          "class",
          "text-decoration-underline cursor-pointer text-light",
          "target",
          "_blank",
          3,
          "click",
          4,
          "ngIf",
        ],
        [
          "class",
          "my-2 w-100 d-flex justify-content-center align-items-center cursor-pointer",
          3,
          "click",
          4,
          "ngIf",
        ],
        [
          1,
          "font-14",
          "text-white",
          "text-center",
          "fw-regular",
          "mb-0",
          "d-flex",
          "align-items-center",
          "justify-content-center",
        ],
        [1, "me-2"],
        ["href", "https://web3paymentsolutions.io", "target", "_blank"],
        [
          "src",
          "/assets/images/svg-icons/W3P_White.svg",
          "alt",
          "w3p-logo",
          1,
          "poweredByIcon",
          "text-tertiary",
        ],
        ["alt", "buy-option ", 3, "src"],
        [
          1,
          "text-center",
          "m-0",
          "font-16",
          "fw-bold",
          "text-white",
          "dashTitle",
          3,
          "ngClass",
        ],
        [3, "messageEvent", "isNative", "isWert"],
        [
          1,
          "d-flex",
          "flex-column",
          "align-items-center",
          "justify-content-center",
          "gap-2",
          "mt-4",
        ],
        [1, "d-flex", "w-100", "gap-2"],
        [1, "btn", "btn-primary", "w-100", 3, "click"],
        [1, "text-white", "fw-bolder"],
        [
          "class",
          "btn btn-primary buy-with-card-btn w-100 px-2",
          3,
          "click",
          4,
          "ngIf",
        ],
        ["target", "_blank", 1, "w-100", 3, "href"],
        [1, "btn", "btn-primary", "buy-with-card-btn", "w-100", "px-2"],
        [1, "text-black", "fw-bolder"],
        [
          1,
          "btn",
          "btn-primary",
          "buy-with-card-btn",
          "w-100",
          "px-2",
          3,
          "click",
        ],
        [
          "target",
          "_blank",
          1,
          "text-decoration-underline",
          "cursor-pointer",
          "text-light",
          3,
          "click",
        ],
        [
          1,
          "my-2",
          "w-100",
          "d-flex",
          "justify-content-center",
          "align-items-center",
          "cursor-pointer",
          3,
          "click",
        ],
        [
          1,
          "d-inline-block",
          "text-white",
          "d-flex",
          "justify-content-center",
          "font-14",
          "text-decoration-underline",
        ],
      ],
      template: function (n, a) {
        n & 1 &&
          (c(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "p", 4),
          m(4),
          g(5, "translate"),
          d(),
          c(6, "div", 5),
          A(7, b1, 1, 1, "img", 6),
          d()()(),
          c(8, "div", 7)(9, "div", 8),
          T(10, "app-round-user-details", 9),
          c(11, "div", 10),
          A(12, C1, 2, 5, "p", 11)(13, w1, 2, 2, "app-swap", 12)(
            14,
            S1,
            12,
            11,
            "div",
            13
          ),
          c(15, "div", 14)(16, "p", 15),
          A(17, k1, 3, 3, "a", 16)(18, A1, 3, 3, "a", 16),
          d(),
          A(19, M1, 4, 3, "div", 17),
          c(20, "p", 18)(21, "span", 19),
          m(22),
          g(23, "translate"),
          d(),
          c(24, "a", 20),
          T(25, "img", 21),
          d()()()()()()()),
          n & 2 &&
            (o(4),
            _(f(5, 12, "widget.switch_to")),
            o(3),
            u("ngForOf", a.buyOptions),
            o(3),
            u("liveCounter", a.liveCounter)("raisedInfo", a.raisedInfo),
            o(),
            u(
              "ngClass",
              V(
                16,
                x1,
                a.status === a.SwapStatus.in_progess ||
                  a.status === a.SwapStatus.confirm_pending ||
                  a.status === a.SwapStatus.approval_pending
              )
            ),
            o(),
            u("ngIf", !a.walletAddress),
            o(),
            u("ngIf", a.walletAddress && a.dataLoaded),
            o(),
            u("ngIf", !a.walletAddress),
            o(3),
            u("ngIf", a.modeName == "ETH" && a.walletAddress),
            o(),
            u("ngIf", a.modeName == "BNB" && a.walletAddress),
            o(),
            u("ngIf", !a.walletAddress),
            o(3),
            _(f(23, 14, "widget.powered_by")));
      },
      dependencies: [yt, le, X, nn, Gh, Y],
      styles: [
        '.widget-wrapper[_ngcontent-%COMP%]{position:relative;background:url(/assets/images/webp/widget-bg-top.webp) no-repeat 0 -10px/100%,url(/assets/images/webp/widget-bg-bottom.webp) no-repeat 100% 100%/100%,linear-gradient(#21283d,#21283d);max-width:450px;z-index:1;margin-left:auto;border-radius:25px;padding:12px 20px 18px}@media screen and (max-width: 768px){.widget-wrapper[_ngcontent-%COMP%]{z-index:unset}}.widget-wrapper[_ngcontent-%COMP%]   .wallet-box[_ngcontent-%COMP%]{width:100%;max-width:450px;position:relative;background:url(/assets/images/webp/union.webp) no-repeat,radial-gradient(68.7% 68.7% at 50% 50%,#0000,#d9d9d903);padding:10px 30px 10px 18px;-webkit-backdrop-filter:blur(3.3340492249px);backdrop-filter:blur(3.3340492249px);box-shadow:.72px .72px #ffffff1c inset,0 14.5px 16.53px #0000004a,-.72px -.72px #ffffff26 inset;background-size:100% 100%;background-position:50% 50%;background-repeat:no-repeat}@media screen and (max-width: 1024px){.widget-wrapper[_ngcontent-%COMP%]   .wallet-box[_ngcontent-%COMP%]{margin:0 auto;padding:18px 15px 18px 8px}}.widget-wrapper[_ngcontent-%COMP%]   .wallet-box[_ngcontent-%COMP%]   .swapArea[_ngcontent-%COMP%]{position:relative}.widget-wrapper[_ngcontent-%COMP%]   .wallet-box[_ngcontent-%COMP%]   .swapArea.cover[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background:#21283d00;z-index:1;cursor:busy}.widget-wrapper[_ngcontent-%COMP%]   .wallet-box[_ngcontent-%COMP%]   .buy-with-card-btn[_ngcontent-%COMP%]{background-color:#fff!important}.widget-wrapper[_ngcontent-%COMP%]   .wallet-box[_ngcontent-%COMP%]   .poweredByIcon[_ngcontent-%COMP%]{height:16px}@media screen and (max-width: 576px){.widget-wrapper[_ngcontent-%COMP%]   .wallet-box[_ngcontent-%COMP%]:after{left:unset;right:-17px;top:-22px;width:37px;height:44px}}.track-title[_ngcontent-%COMP%]{color:#000;background:linear-gradient(179.83deg,#ffab2ea8 -.37%,#ffd096 -.37%,#ffab2e 53.22%,#ffd096 100.75%);height:30px;margin:0;display:flex;align-items:center;padding:0 12px 0 15px;font-family:Librestile_Extended_Bold,sans-serif;font-size:12px;letter-spacing:.4px;text-transform:uppercase;position:absolute;z-index:2}@media screen and (max-width: 576px){.track-title[_ngcontent-%COMP%]{padding:0 8px}}.scroller[_ngcontent-%COMP%]{width:100%;max-width:360px;margin:0 auto;overflow:hidden;white-space:nowrap;position:relative;display:flex;align-items:center;transform:translate(25px);padding:0;height:32px;border:2px solid #000000;border-bottom:none;border-radius:16px 16px 0 0;background:linear-gradient(179.83deg,#ffab2ea8 -.37%,#ffab2e80 -.37%,#ffab2e 53.22%,#ffab2e80 100.75%)}@media screen and (max-width: 576px){.scroller[_ngcontent-%COMP%]{max-width:280px;transform:translate(0)}}.scroller[_ngcontent-%COMP%]   .marquee[_ngcontent-%COMP%]{position:relative;z-index:1;overflow:hidden;width:calc(100% - 120px);display:flex;align-items:center;justify-content:space-between;margin-left:120px;padding-right:15px}.scroller[_ngcontent-%COMP%]   .marquee[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25px}  html[lang=ar] .scroller .marquee{margin-left:unset!important;margin-right:100px!important}@media screen and (max-width: 576px){  html[lang=ar] .scroller .marquee{margin-right:116px!important;padding-right:0!important}}',
      ],
    });
  }
  return t;
})();
function E1(t, i) {
  t & 1 &&
    (c(0, "div", 28)(1, "p", 29),
    m(2),
    g(3, "translate"),
    d(),
    c(4, "p", 29),
    m(5),
    g(6, "translate"),
    d()()),
    t & 2 &&
      (o(2),
      P(" ", f(3, 2, "banner.updates_1"), " "),
      o(3),
      P(" ", f(6, 4, "banner.updates_2"), " "));
}
var $h = (() => {
  class t {
    _platformId;
    translate;
    router;
    lang = "";
    isMobile = !1;
    windowSize = 0;
    currentLanguage = "";
    subscription;
    languagesList = St;
    selectedLanguage = {};
    list = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ];
    onResize(e) {
      if (H(this._platformId)) {
        let n = window.innerWidth;
        this.isMobile = n <= 1024;
      }
    }
    constructor(e, n, a) {
      (this._platformId = e),
        (this.translate = n),
        (this.router = a),
        (this.currentLanguage = this.translate.currentLang),
        this.translate.onLangChange.subscribe((s) => {
          (this.currentLanguage = s.lang), (this.lang = s.lang);
        });
    }
    ngAfterViewInit() {
      setTimeout(() => {
        if (H(this._platformId)) {
          let e = window.innerWidth;
          this.isMobile = e <= 1024;
        }
      }, 100);
    }
    redirectToUpdates() {
      this.router.navigate([`/${this.currentLanguage}/news`]);
    }
    static ɵfac = function (n) {
      return new (n || t)(w(j), w(pe), w(Tt));
    };
    static ɵcmp = F({
      type: t,
      selectors: [["app-banner"]],
      hostBindings: function (n, a) {
        n & 1 &&
          S(
            "resize",
            function (r) {
              return a.onResize(r);
            },
            !1,
            Te
          );
      },
      decls: 43,
      vars: 29,
      consts: [
        ["id", "home", 1, "banner"],
        [3, "rewards", "placement"],
        [1, "container", "mt-2"],
        [1, "bannerSec", "row"],
        [
          1,
          "col-12",
          "col-md-7",
          "leftSec",
          "order-2",
          "order-lg-1",
          "position-relative",
          "pe-md-0",
        ],
        [
          1,
          "d-flex",
          "align-items-center",
          "justify-content-center",
          "justify-content-lg-start",
          "flex-wrap",
          "gap-2",
          "mb-4",
        ],
        [
          1,
          "latest-updates",
          "cursor-pointer",
          "d-flex",
          "align-items-center",
          3,
          "click",
        ],
        [1, "mb-0", "updates-title", "px-2"],
        [1, "marquee"],
        [1, "track"],
        [1, "content"],
        ["class", "d-flex w-100 align-items-center", 4, "ngFor", "ngForOf"],
        ["title", "updates", 1, "readmore", "mb-0", 3, "routerLink"],
        [1, "banner-content"],
        [1, "banner-title", "lang-font"],
        [1, "banner-subtitle", "lang-font"],
        [
          1,
          "banner-desc",
          "mt-3",
          "mb-2",
          "pb-1",
          "d-none",
          "d-sm-block",
          3,
          "innerHTML",
        ],
        [
          1,
          "banner-desc",
          "mt-3",
          "mb-2",
          "pb-1",
          "d-block",
          "d-sm-none",
          3,
          "innerHTML",
        ],
        [1, "banner-para"],
        [1, "d-flex", "align-items-center", "position-relative"],
        [
          "src",
          "/assets/images/gif/banner.gif",
          "alt",
          "banner-gif",
          "loading",
          "lazy",
          1,
          "img-fluid",
        ],
        [
          1,
          "audit-btn",
          "d-flex",
          "align-items-center",
          "justify-content-center",
          "justify-content-lg-end",
          "gap-2",
          "flex-wrap",
          "mt-lg-4",
          "mt-3",
          "py-lg-2",
          "position-relative",
        ],
        [1, "mb-0", "audit-title", "me-1", "lang-font"],
        [
          "href",
          "https://coinsult.net/projects/bitcoin-hyper/",
          "target",
          "_blank",
        ],
        [
          "loading",
          "eager",
          "src",
          "/assets/images/svg-icons/coinsult.svg",
          "alt",
          "coinsult",
          1,
          "img-fluid",
          "audit-img",
        ],
        [
          "href",
          "https://spywolf.co/audits/BitcoinHyper_0xA86c39fa8341aDC5219f355468fc78Cec7e8702B.pdf",
          "target",
          "_blank",
        ],
        [
          "loading",
          "eager",
          "src",
          "/assets/images/webp/spywolf.webp?v2=true",
          "alt",
          "coinsult",
          1,
          "img-fluid",
          "audit-img",
        ],
        [1, "col-12", "col-md-5", "align-self-center", "order-1", "order-lg-2"],
        [1, "d-flex", "w-100", "align-items-center"],
        [
          1,
          "font-16",
          "fw-medium",
          "text-white",
          "d-flex",
          "px-2",
          "mx-1",
          "m-0",
        ],
      ],
      template: function (n, a) {
        n & 1 &&
          (c(0, "div", 0),
          T(1, "app-common-carousel", 1),
          c(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6),
          S("click", function () {
            return a.redirectToUpdates();
          }),
          c(7, "p", 7),
          m(8),
          g(9, "translate"),
          d(),
          c(10, "div", 8)(11, "div", 9)(12, "div", 10),
          A(13, E1, 7, 6, "div", 11),
          d()()()(),
          c(14, "a", 12),
          m(15),
          g(16, "translate"),
          d()(),
          c(17, "div", 13)(18, "h1", 14),
          m(19),
          g(20, "translate"),
          d(),
          c(21, "h2", 15),
          m(22),
          g(23, "translate"),
          d(),
          T(24, "p", 16),
          g(25, "translate"),
          T(26, "p", 17),
          g(27, "translate"),
          c(28, "h3", 18),
          m(29),
          g(30, "translate"),
          d(),
          c(31, "div", 19),
          T(32, "img", 20),
          d(),
          c(33, "div", 21)(34, "p", 22),
          m(35),
          g(36, "translate"),
          d(),
          c(37, "a", 23),
          T(38, "img", 24),
          d(),
          c(39, "a", 25),
          T(40, "img", 26),
          d()()()(),
          c(41, "div", 27),
          T(42, "app-widget"),
          d()()()()),
          n & 2 &&
            (o(),
            u("rewards", !0)("placement", "banner"),
            o(7),
            _(f(9, 13, "banner.updates")),
            o(5),
            u("ngForOf", a.list),
            o(),
            de(
              "routerLink",
              "/",
              a.currentLanguage === "en" ? "" : a.currentLanguage,
              "/news"
            ),
            o(),
            _(f(16, 15, "updates.read_more")),
            o(4),
            _(f(20, 17, "banner.banner_text_1")),
            o(3),
            P(" ", f(23, 19, "banner.banner_text_2"), " "),
            o(2),
            u("innerHTML", f(25, 21, "banner.banner_desc"), De),
            o(2),
            u("innerHTML", f(27, 23, "banner.banner_desc_mobile"), De),
            o(3),
            P(" ", f(30, 25, "banner.banner_para"), " "),
            o(6),
            _(f(36, 27, "banner.audit_title")));
      },
      dependencies: [le, Fi, ha, Wh, Y],
      styles: [
        '.banner[_ngcontent-%COMP%]{position:relative;padding:100px 0 20px;background:#fff url(/assets/images/webp/banner-bg.webp) no-repeat 100% 100%/100%;background-size:100% 45%}@media screen and (max-width: 576px){.banner[_ngcontent-%COMP%]{padding:125px 0 20px;background-size:100%;background:#fff url(/assets/images/webp/banner-bg-mob.webp) no-repeat 100% 100%/100%}}.banner[_ngcontent-%COMP%]   .latest-updates[_ngcontent-%COMP%]{background:#1a7ef7;border-radius:100px;border:1px solid #000000;box-shadow:0 2px #000;padding:2px 10px;position:relative;max-width:420px}@media screen and (max-width: 768px){.banner[_ngcontent-%COMP%]   .latest-updates[_ngcontent-%COMP%]{max-width:100%}}.banner[_ngcontent-%COMP%]   .latest-updates[_ngcontent-%COMP%]:after{content:"";position:absolute;right:0;width:50px;top:0;bottom:0;height:100%;background:linear-gradient(268deg,#1a7ef7,transparent);border-radius:100px;z-index:1}.banner[_ngcontent-%COMP%]   .latest-updates[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{white-space:nowrap}.banner[_ngcontent-%COMP%]   .latest-updates[_ngcontent-%COMP%]   .updates-title[_ngcontent-%COMP%]{text-transform:uppercase;letter-spacing:1px;font-weight:800;color:#fff;font-size:12px}.banner[_ngcontent-%COMP%]   .latest-updates[_ngcontent-%COMP%]   .marquee[_ngcontent-%COMP%]{position:relative;z-index:1;overflow:hidden;width:100%;display:flex;align-items:center;justify-content:flex-start}.banner[_ngcontent-%COMP%]   .latest-updates[_ngcontent-%COMP%]   .marquee[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_marquee 200s linear infinite;will-change:transform}.banner[_ngcontent-%COMP%]   .latest-updates[_ngcontent-%COMP%]   .marquee[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;align-items:center;font-family:DM Sans,sans-serif}@keyframes _ngcontent-%COMP%_marquee{0%{transform:translate(0)}to{transform:translate(-100%)}}.banner[_ngcontent-%COMP%]   .readmore[_ngcontent-%COMP%]{background:#ffa231;border-radius:100px;border:1px solid #000000;box-shadow:0 2px #000;font-size:16px;text-transform:uppercase;letter-spacing:2px;font-weight:800;padding:2px 15px;color:#fff}.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]{margin-top:-45px;padding:0 30px}@media screen and (max-width: 1300px){.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]{margin-top:-40px}}@media screen and (max-width: 576px){.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]{padding:0}}.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]{margin-top:40px}@media screen and (max-width: 576px){.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]{margin-top:10px}}.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]{position:relative}.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%]{font-size:29px;line-height:110%;font-family:Librestile_Extended_Bold,sans-serif;color:#000;text-transform:uppercase;margin-bottom:5px}@media screen and (max-width: 768px){.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%]{font-size:16px;margin-top:20px;max-width:300px;line-height:130%}}.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-subtitle[_ngcontent-%COMP%]{font-size:19px;line-height:110%;font-family:Librestile_Extended_Bold,sans-serif;color:#000;text-transform:uppercase}@media screen and (max-width: 576px){.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-subtitle[_ngcontent-%COMP%]{font-size:16px;line-height:130%}}.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-desc[_ngcontent-%COMP%]{font-size:16px;font-weight:400;line-height:150%;color:#000;max-width:558px}@media screen and (max-width: 576px){.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-desc[_ngcontent-%COMP%]{text-align:left}}.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-para[_ngcontent-%COMP%]{font-size:16px;font-weight:700;position:relative}.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-para[_ngcontent-%COMP%]:after{content:"";position:absolute;width:148px;height:4px;background:#ffa231;bottom:-6px;left:0}.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .audit-btn[_ngcontent-%COMP%]   .audit-title[_ngcontent-%COMP%]{font-family:Librestile_Extended_Bold,sans-serif;font-size:13px;text-transform:uppercase;font-weight:700}@media screen and (max-width: 576px){.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .audit-btn[_ngcontent-%COMP%]   .audit-title[_ngcontent-%COMP%]{font-size:8px}}.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .audit-btn[_ngcontent-%COMP%]   .audit-img[_ngcontent-%COMP%]{height:28px}@media screen and (max-width: 576px){.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .audit-btn[_ngcontent-%COMP%]   .audit-img[_ngcontent-%COMP%]{width:75px;height:auto}}.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .shoes-img[_ngcontent-%COMP%]{position:absolute;right:-40px;max-width:153px;top:-130px}@media screen and (max-width: 768px){.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .shoes-img[_ngcontent-%COMP%]{right:-30px;max-width:44%;bottom:-140px;z-index:1;pointer-events:none}}@media screen and (max-width: 576px){.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .shoes-img[_ngcontent-%COMP%]{right:-30px;max-width:24%;top:-60px}}.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .min-btn[_ngcontent-%COMP%]{min-width:222px!important}@media screen and (max-width: 576px){.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .min-btn[_ngcontent-%COMP%]{min-width:unset!important;padding:19px 10px 16px}}@media screen and (max-width: 768px){.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]{max-width:250px}}.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .tooltip-wrap[_ngcontent-%COMP%]:hover ~ a[_ngcontent-%COMP%]{filter:drop-shadow(0px 2px 10px rgba(0,0,0,.368627451))}.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .tooltip-wrap[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{position:absolute;top:-5px;right:10px;box-shadow:0 2px #3a3a3a,inset 0 0 12px #fff;width:25px;height:25px;border-radius:25px;display:inline-block;border:2px solid #6f6f6f;box-sizing:border-box;background:#fff;cursor:pointer}.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .tooltip-wrap[_ngcontent-%COMP%]   .tooltip-text[_ngcontent-%COMP%]{display:none}.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .tooltip-wrap[_ngcontent-%COMP%]:hover   .dot[_ngcontent-%COMP%]{background:#1a7ef7}.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .tooltip-wrap[_ngcontent-%COMP%]:hover   .tooltip-text[_ngcontent-%COMP%]{display:block;position:absolute;bottom:35px;right:0;min-width:200px;background:#505050;border:2px solid #000000;padding:10px 15px;border-radius:20px;box-shadow:0 2px #000,0 0 32px #000c;font-size:12px;font-weight:400;line-height:150%;color:#fff}@media screen and (max-width: 576px){.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .tooltip-wrap[_ngcontent-%COMP%]:hover   .tooltip-text[_ngcontent-%COMP%]{bottom:64px;box-shadow:0 0 #000,0 0 15px #000c}}.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bannerSec[_ngcontent-%COMP%]   .leftSec[_ngcontent-%COMP%]   .car-mob[_ngcontent-%COMP%]{max-width:140px;position:absolute;top:-20px;right:-30px}  html[lang=ar] .banner .container .bannerSec .leftSec .banner-content .banner-para:after{right:0!important}  html[lang=nl] .audit-title,   html[lang=fr] .audit-title,   html[lang=de] .audit-title,   html[lang=hu] .audit-title,   html[lang=id] .audit-title,   html[lang=pl] .audit-title,   html[lang=ro] .audit-title,   html[lang=sk] .audit-title,   html[lang=tr] .audit-title{font-size:10px!important}  html[lang=pt] .audit-title,   html[lang=es] .audit-title{font-size:9px!important}',
      ],
    });
  }
  return t;
})();
function P1(t, i) {
  if (
    (t & 1 &&
      (c(0, "div", 12),
      T(1, "div", 13),
      c(2, "p", 14),
      m(3),
      g(4, "translate"),
      d(),
      T(5, "p", 15),
      g(6, "translate"),
      d()),
    t & 2)
  ) {
    let e = i.$implicit;
    o(3), _(f(4, 2, e.title)), o(2), u("innerHtml", f(6, 4, e.desc), De);
  }
}
function I1(t, i) {
  if (
    (t & 1 &&
      (c(0, "div", 12),
      T(1, "div", 13),
      c(2, "p", 14),
      m(3),
      g(4, "translate"),
      d(),
      T(5, "p", 19),
      g(6, "translate"),
      d()),
    t & 2)
  ) {
    let e = y().$implicit;
    o(3), _(f(4, 2, e.title)), o(2), u("innerHtml", f(6, 4, e.desc), De);
  }
}
function F1(t, i) {
  t & 1 && A(0, I1, 7, 6, "ng-template", 18);
}
function V1(t, i) {
  if (
    (t & 1 && (c(0, "owl-carousel-o", 16), A(1, F1, 1, 0, null, 17), d()),
    t & 2)
  ) {
    let e = y();
    u("options", e.slider), o(), u("ngForOf", e.boxes);
  }
}
function B1(t, i) {
  if (
    (t & 1 &&
      (c(0, "div", 12),
      T(1, "div", 13),
      c(2, "p", 14),
      m(3),
      g(4, "translate"),
      d(),
      T(5, "p", 19),
      g(6, "translate"),
      d()),
    t & 2)
  ) {
    let e = i.$implicit;
    o(3), _(f(4, 2, e.title)), o(2), u("innerHtml", f(6, 4, e.desc), De);
  }
}
function N1(t, i) {
  if (
    (t & 1 && (c(0, "div")(1, "div", 20), A(2, B1, 7, 6, "div", 5), d()()),
    t & 2)
  ) {
    let e = y();
    o(2), u("ngForOf", e.boxes);
  }
}
var jh = (() => {
  class t {
    platform_id;
    eventService;
    commonConnectService;
    canRenders = !1;
    isMobile = !1;
    windowSize = 0;
    onResize(e) {
      if (H(this.platform_id)) {
        let n = window.innerWidth;
        this.isMobile = n <= 1024;
      }
    }
    boxes = [
      { title: "how-to-buy.box1_title", desc: "how-to-buy.box1_desc" },
      { title: "how-to-buy.box2_title", desc: "how-to-buy.box2_desc" },
      { title: "how-to-buy.box3_title", desc: "how-to-buy.box3_desc" },
      { title: "how-to-buy.box4_title", desc: "how-to-buy.box4_desc" },
    ];
    slider = {
      loop: !0,
      autoplay: !1,
      touchDrag: !0,
      mouseDrag: !0,
      dots: !1,
      nav: !1,
      center: !1,
      margin: 10,
      startPosition: 0,
      responsive: { 0: { items: 1.5 } },
    };
    constructor(e, n, a) {
      (this.platform_id = e),
        (this.eventService = n),
        (this.commonConnectService = a);
    }
    ngAfterViewInit() {
      setTimeout(() => {
        if (H(this.platform_id)) {
          this.canRenders = !0;
          let e = window.innerWidth;
          this.isMobile = e <= 1024;
        }
      }, 100);
    }
    connectWallet(e = !1) {
      this.commonConnectService.vwoData("walletConnectionPlacement", {
        placement: "HowToBuy",
      }),
        this.eventService.showBuyWidget("home", e);
    }
    static ɵfac = function (n) {
      return new (n || t)(w(j), w(Ye), w(fe));
    };
    static ɵcmp = F({
      type: t,
      selectors: [["app-how-to-buy"]],
      hostBindings: function (n, a) {
        n & 1 &&
          S(
            "resize",
            function (r) {
              return a.onResize(r);
            },
            !1,
            Te
          );
      },
      decls: 18,
      vars: 13,
      consts: [
        ["id", "how-to-buy", 1, "how-to-buy"],
        [1, "container", "position-relative"],
        [1, "section-title"],
        [
          "deferLoad",
          "/assets/images/gif/how-to-buy.gif",
          "alt",
          "gif",
          1,
          "position-absolute",
          "graphic",
          3,
          "rootMargin",
        ],
        [1, "boxes", "d-none", "d-md-flex"],
        ["class", "box position-relative", 4, "ngFor", "ngForOf"],
        ["class", "d-flex d-md-none mt-4 mt-sm-5", 3, "options", 4, "ngIf"],
        [4, "ngIf"],
        [
          1,
          "d-flex",
          "justify-content-center",
          "align-items-center",
          "cta-items",
        ],
        [
          1,
          "d-flex",
          "justify-content-center",
          "align-items-center",
          "cta-items",
          "gap-2",
        ],
        [1, "btn", "btn-primary", 3, "click"],
        [1, "btn", "btn-secondary", 3, "click"],
        [1, "box", "position-relative"],
        [1, "dot", "circle-blur-effect", "position-absolute"],
        [1, "title", "lang-font"],
        [1, "desc", 3, "innerHtml"],
        [1, "d-flex", "d-md-none", "mt-4", "mt-sm-5", 3, "options"],
        [4, "ngFor", "ngForOf"],
        ["carouselSlide", ""],
        [1, "desc", "mb-0", 3, "innerHtml"],
        [1, "box-mob", "d-flex", "align-items-stretch"],
      ],
      template: function (n, a) {
        n & 1 &&
          (c(0, "section", 0)(1, "div", 1)(2, "h2", 2),
          m(3),
          g(4, "translate"),
          d(),
          T(5, "img", 3),
          c(6, "div", 4),
          A(7, P1, 7, 6, "div", 5),
          d(),
          A(8, V1, 2, 2, "owl-carousel-o", 6)(9, N1, 3, 1, "div", 7),
          c(10, "div", 8)(11, "div", 9)(12, "button", 10),
          S("click", function () {
            return a.connectWallet(!0);
          }),
          m(13),
          g(14, "translate"),
          d(),
          c(15, "button", 11),
          S("click", function () {
            return a.connectWallet();
          }),
          m(16),
          g(17, "translate"),
          d()()()()()),
          n & 2 &&
            (o(3),
            _(f(4, 7, "how-to-buy.title")),
            o(2),
            u("rootMargin", 100),
            o(2),
            u("ngForOf", a.boxes),
            o(),
            u("ngIf", a.canRenders && !a.isMobile),
            o(),
            u("ngIf", a.isMobile),
            o(4),
            P(" ", f(14, 9, "widget.buy_with_card"), " "),
            o(3),
            P(" ", f(17, 11, "widget.buy_with_crypto"), " "));
      },
      dependencies: [le, X, At, fl, gl, Y],
      styles: [
        ".how-to-buy[_ngcontent-%COMP%]{padding:120px 0 50px;margin-top:-80px}@media screen and (max-width: 1300px){.how-to-buy[_ngcontent-%COMP%]{padding:120px 40px 50px}}@media screen and (max-width: 768px){.how-to-buy[_ngcontent-%COMP%]{padding:120px 0 50px}}.how-to-buy[_ngcontent-%COMP%]   .graphic[_ngcontent-%COMP%]{max-width:270px;right:0;z-index:1;bottom:-130px}@media screen and (max-width: 768px){.how-to-buy[_ngcontent-%COMP%]   .graphic[_ngcontent-%COMP%]{max-width:125px;top:-45px;bottom:unset;z-index:2}}.how-to-buy[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]{margin-top:40px}.how-to-buy[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{padding:20px 25px;background:url(/assets/images/webp/common-box-star.webp) no-repeat;background-size:cover;border:2px solid #000000;border-radius:32px;margin:0 8px;width:25%;box-shadow:0 2px #000}@media screen and (max-width: 768px){.how-to-buy[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{min-height:170px;width:100%;padding:16px 24px;min-width:270px;scroll-snap-align:start;transform-origin:center center;transform:scale(1);transition:transform .5s}}.how-to-buy[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:26px;height:26px;background:#fff;right:-3px;top:-10px;border-radius:50%;border:2px solid #000000;box-shadow:0 2px #000}.how-to-buy[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:first-child{margin-left:3px}.how-to-buy[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#000;text-transform:uppercase;font-family:Librestile_Extended_Bold,sans-serif;margin-bottom:2px}.how-to-buy[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{color:#000}@media screen and (max-width: 768px){.how-to-buy[_ngcontent-%COMP%]   .box-mob[_ngcontent-%COMP%]{overflow-x:scroll;padding:12px 5px 5px 15px!important;scroll-snap-type:x mandatory;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.how-to-buy[_ngcontent-%COMP%]   .box-mob[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}}.how-to-buy[_ngcontent-%COMP%]   .cta-items[_ngcontent-%COMP%]{margin-top:30px}@media screen and (max-width: 768px){.how-to-buy[_ngcontent-%COMP%]   .cta-items[_ngcontent-%COMP%]{margin-top:15px;gap:10px}}.how-to-buy[_ngcontent-%COMP%]   .cta-items[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:18px!important;min-width:200px}@media screen and (max-width: 768px){.how-to-buy[_ngcontent-%COMP%]   .cta-items[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:100%;min-height:48px!important;max-width:230px;margin:6px auto;min-width:auto;font-size:14px!important}}  .how-to-buy .owl-carousel .owl-stage{padding:8px 0;display:flex}",
      ],
    });
  }
  return t;
})();
function H1(t, i) {
  if (
    (t & 1 &&
      (c(0, "div", 15),
      T(1, "div", 16),
      c(2, "p", 17),
      m(3),
      g(4, "translate"),
      d(),
      c(5, "p", 18),
      m(6),
      g(7, "translate"),
      d()()),
    t & 2)
  ) {
    let e = i.$implicit;
    o(3), _(f(4, 2, e.title)), o(3), _(f(7, 4, e.desc));
  }
}
function z1(t, i) {
  if (
    (t & 1 &&
      (c(0, "div"),
      T(1, "div", 16),
      c(2, "p", 17),
      m(3),
      g(4, "translate"),
      d(),
      c(5, "p", 18),
      m(6),
      g(7, "translate"),
      d()()),
    t & 2)
  ) {
    let e = i.$implicit,
      n = i.index;
    ci("box box-", n + 1, " position-relative"),
      o(3),
      _(f(4, 5, e.title)),
      o(3),
      _(f(7, 7, e.desc));
  }
}
var Xh = (() => {
  class t {
    _platformId;
    isMobile = !1;
    windowSize = 0;
    constructor(e) {
      this._platformId = e;
    }
    onResize(e) {
      if (H(this._platformId)) {
        let n = window.innerWidth;
        this.isMobile = n <= 1024;
      }
    }
    ngAfterViewInit() {
      setTimeout(() => {
        if (H(this._platformId)) {
          let e = window.innerWidth;
          this.isMobile = e <= 1024;
        }
      }, 100);
    }
    boxes = [
      { title: "tokenomics.box1_title", desc: "tokenomics.box1_desc" },
      { title: "tokenomics.box2_title", desc: "tokenomics.box2_desc" },
      { title: "tokenomics.box3_title", desc: "tokenomics.box3_desc" },
      { title: "tokenomics.box4_title", desc: "tokenomics.box4_desc" },
      { title: "tokenomics.box5_title", desc: "tokenomics.box5_desc" },
    ];
    static ɵfac = function (n) {
      return new (n || t)(w(j));
    };
    static ɵcmp = F({
      type: t,
      selectors: [["app-tokenomics"]],
      hostBindings: function (n, a) {
        n & 1 &&
          S(
            "resize",
            function (r) {
              return a.onResize(r);
            },
            !1,
            Te
          );
      },
      decls: 22,
      vars: 11,
      consts: [
        ["id", "tokenomics", 1, "tokenomics"],
        [1, "container", "position-relative"],
        [1, "section-title", "mb-lg-4"],
        [1, "row"],
        [1, "col-12", "col-md-6", "order-1"],
        [1, "boxes", "d-flex"],
        ["class", "box position-relative", 4, "ngFor", "ngForOf"],
        [
          1,
          "col-12",
          "order-3",
          "order-lg-2",
          "d-flex",
          "justify-content-end",
          "align-items-center",
          "col-md-6",
          "position-relative",
        ],
        [
          "src",
          "/assets/images/gif/tokenomics.gif",
          "alt",
          "graphic",
          "loading",
          "lazy",
          1,
          "graphic",
        ],
        [1, "col-12", "col-md-9", "order-2", "order-lg-3"],
        [3, "class", 4, "ngFor", "ngForOf"],
        [1, "col-12", "col-md-3", "align-self-center", "order-4"],
        [
          1,
          "whitepaper-wrapper",
          "d-flex",
          "justify-content-center",
          "align-items-center",
          "flex-column",
          "my-3",
        ],
        [1, "mb-0", "mt-2", "pt-1"],
        [1, "box", "position-relative"],
        [1, "dot", "circle-blur-effect", "position-absolute"],
        [1, "title", "lang-font"],
        [1, "desc"],
      ],
      template: function (n, a) {
        n & 1 &&
          (c(0, "section", 0)(1, "div", 1)(2, "h2", 2),
          m(3),
          g(4, "translate"),
          d(),
          c(5, "div", 3)(6, "div", 4)(7, "div", 5),
          A(8, H1, 8, 6, "div", 6),
          d()(),
          c(9, "div", 7),
          T(10, "img", 8),
          d(),
          c(11, "div", 9)(12, "div", 5),
          A(13, z1, 8, 9, "div", 10),
          d()(),
          c(14, "div", 11)(15, "div", 12)(16, "a", 13),
          m(17),
          g(18, "translate"),
          d(),
          c(19, "p", 14),
          m(20),
          g(21, "translate"),
          d()()()()()()),
          n & 2 &&
            (o(3),
            _(f(4, 5, "tokenomics.title")),
            o(5),
            u("ngForOf", a.boxes.slice(0, 2)),
            o(5),
            u("ngForOf", a.boxes.slice(2, 5)),
            o(4),
            _(f(18, 7, "bitcoin_layer.read_whitepaper")),
            o(3),
            _(f(21, 9, "bitcoin_layer.breakdown")));
      },
      dependencies: [le, Y],
      styles: [
        ".tokenomics[_ngcontent-%COMP%]{padding:110px 40px 0;background:url(/assets/images/webp/tokenomics.webp);background-size:cover}@media screen and (max-width: 768px){.tokenomics[_ngcontent-%COMP%]{padding:110px 0 0}}.tokenomics[_ngcontent-%COMP%]   .graphic[_ngcontent-%COMP%]{max-width:390px;position:absolute;left:0;right:0;margin:auto;top:-160px;pointer-events:none}@media screen and (max-width: 1024px){.tokenomics[_ngcontent-%COMP%]   .graphic[_ngcontent-%COMP%]{transform:none;max-width:100%;position:relative;top:0}}@media screen and (max-width: 768px){.tokenomics[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]{flex-flow:row wrap}}.tokenomics[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]:first-child{margin-top:0}.tokenomics[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{padding:26px 20px;background:url(/assets/images/webp/common-box-star.webp) no-repeat;background-size:cover;border:2px solid #000000;border-radius:32px;margin:4px;width:50%;box-shadow:0 2px #000;min-height:150px}@media screen and (max-width: 768px){.tokenomics[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{padding:16px 20px;min-height:auto;margin:5px;width:47%}}@media screen and (max-width: 768px){.tokenomics[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box.box-3[_ngcontent-%COMP%]{width:100%}}.tokenomics[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:26px;height:26px;background:#fff;right:-3px;top:-10px;border-radius:50%;border:2px solid #000000;box-shadow:0 2px #000}.tokenomics[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:first-child{margin-left:0}@media screen and (max-width: 768px){.tokenomics[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:first-child{margin-left:auto}}.tokenomics[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#000;text-transform:uppercase;font-family:Librestile_Extended_Bold,sans-serif;margin-bottom:2px}@media screen and (max-width: 768px){.tokenomics[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:12px}}.tokenomics[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{color:#000}.tokenomics[_ngcontent-%COMP%]   .whitepaper-wrapper[_ngcontent-%COMP%]{max-width:230px;margin-left:auto}@media screen and (max-width: 768px){.tokenomics[_ngcontent-%COMP%]   .whitepaper-wrapper[_ngcontent-%COMP%]{max-width:100%;margin:0 auto}}.tokenomics[_ngcontent-%COMP%]   .whitepaper-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#1a7ef7!important}.tokenomics[_ngcontent-%COMP%]   .whitepaper-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-size:16px;text-align:right}",
      ],
    });
  }
  return t;
})();
function W1(t, i) {
  if ((t & 1 && (T(0, "p", 21), g(1, "translate")), t & 2)) {
    let e = i.$implicit;
    u("innerHtml", f(1, 1, e), De);
  }
}
function $1(t, i) {
  if (
    (t & 1 &&
      (c(0, "div", 10)(1, "div", 11)(2, "div", 12),
      T(3, "img", 13),
      c(4, "div", 14)(5, "p", 15),
      m(6),
      T(7, "img", 16),
      d(),
      c(8, "p", 17),
      m(9),
      d()()(),
      c(10, "a", 18),
      T(11, "img", 19),
      d()(),
      A(12, W1, 2, 3, "p", 20),
      d()),
    t & 2)
  ) {
    let e = i.$implicit;
    o(3),
      u("deferLoad", e.character),
      o(3),
      P("", e.name, " "),
      o(3),
      _(e.user_name),
      o(),
      u("href", e.link, W),
      o(2),
      u("ngForOf", e.desc);
  }
}
function j1(t, i) {
  if ((t & 1 && (T(0, "p", 21), g(1, "translate")), t & 2)) {
    let e = i.$implicit;
    u("innerHtml", f(1, 1, e), De);
  }
}
function X1(t, i) {
  if (
    (t & 1 &&
      (c(0, "div", 22)(1, "div", 11)(2, "div", 12),
      T(3, "img", 13),
      c(4, "div", 14)(5, "p", 15),
      m(6),
      T(7, "img", 16),
      d(),
      c(8, "p", 17),
      m(9),
      d()()(),
      c(10, "a", 18),
      T(11, "img", 19),
      d()(),
      A(12, j1, 2, 3, "p", 20),
      d()),
    t & 2)
  ) {
    let e = i.$implicit;
    o(3),
      u("deferLoad", e.character),
      o(3),
      P("", e.name, " "),
      o(3),
      _(e.user_name),
      o(),
      u("href", e.link, W),
      o(2),
      u("ngForOf", e.desc);
  }
}
var qh = (() => {
  class t {
    platform_id;
    translate;
    boxes = [
      {
        character: "/assets/images/webp/our-friends/our-friends1.webp",
        name: "halo",
        user_name: "@haloETH",
        desc: ["tweets.box1_1", "tweets.box1_2"],
        link: "https://x.com/haloETH/status/1921586301079564525?t=ERHwRkG73xTKQopI38giQA&s=19",
      },
      {
        character: "/assets/images/webp/our-friends/our-friends2.webp",
        name: "john",
        user_name: "@johncoin_",
        desc: ["tweets.box2_1", "tweets.box2_2"],
        link: "https://x.com/Johncoin_/status/1921585979216875582?t=SEsfW5nPf_TSjzH09nUjGg&s=19",
      },
      {
        character: "/assets/images/webp/our-friends/our-friends3.webp",
        name: "FISHER \u2728",
        user_name: "@worldoffisher",
        desc: ["tweets.box3_1", "tweets.box3_2"],
        link: "https://x.com/worldoffisher/status/1921586021088501881?t=P0INGjbiATjWir-Pq5iQig&s=19",
      },
      {
        character: "/assets/images/webp/our-friends/our-friends5.webp",
        name: "CREED \u{1F396}\uFE0F\u{1F396}\uFE0F",
        user_name: "@creed_web3",
        desc: ["tweets.box4_1", "tweets.box4_2"],
        link: "https://x.com/creed_web3/status/1921598213309575500?t=VWFMjx5aUrFIJf3tdLWjKw&s=19",
      },
      {
        character: "/assets/images/webp/our-friends/our-friends6.webp",
        name: "Snulet \u{1F3B4}",
        user_name: "@0xSnulet",
        desc: ["tweets.box5_1", "tweets.box5_2"],
        link: "https://x.com/0xSnulet/status/1921610872377737236?t=k4BgZLXK2b6DjWY92XUssg&s=19",
      },
      {
        character: "/assets/images/webp/our-friends/our-friends4.webp",
        name: "Kevlar",
        user_name: "@0xKevlar",
        desc: ["tweets.box6_1", "tweets.box6_2"],
        link: "https://x.com/0xKevlar/status/1921612186012549472?t=p4ZVyPd9u6cN86ceMGpAIQ&s=19",
      },
    ];
    canRenders = !1;
    slider = {
      loop: !0,
      autoplay: !1,
      touchDrag: !0,
      mouseDrag: !0,
      dots: !1,
      nav: !1,
      center: !1,
      margin: 10,
      startPosition: 0,
      responsive: { 0: { items: 1.5 } },
    };
    currentLanguage = "";
    constructor(e, n) {
      (this.platform_id = e),
        (this.translate = n),
        (this.currentLanguage = this.translate.currentLang),
        this.translate.onLangChange.subscribe((a) => {
          this.currentLanguage = a.lang;
        });
    }
    ngAfterViewInit() {
      setTimeout(() => {
        H(this.platform_id) && (this.canRenders = !0);
      }, 100);
    }
    openTweet(e) {
      H(this.platform_id) && window.open(e, "_blank");
    }
    static ɵfac = function (n) {
      return new (n || t)(w(j), w(pe));
    };
    static ɵcmp = F({
      type: t,
      selectors: [["app-our-friends"]],
      decls: 13,
      vars: 7,
      consts: [
        [3, "fromLanding"],
        [1, "d-flex", "justify-content-center"],
        ["id", "our-friends", 1, "our-friends"],
        [1, "container", "position-relative"],
        [1, "section-title"],
        [1, "boxes", "d-flex", "d-md-flex", "justify-content-between"],
        [
          "class",
          "box position-relative cursor-pointer",
          4,
          "ngFor",
          "ngForOf",
        ],
        [
          1,
          "boxes",
          "second",
          "d-flex",
          "d-md-flex",
          "justify-content-between",
          "cursor-pointer",
        ],
        ["class", "box position-relative", 4, "ngFor", "ngForOf"],
        [
          "deferLoad",
          "/assets/images/gif/fire-money.gif",
          "alt",
          "fire-money",
          "loading",
          "lazy",
          1,
          "img-fluid",
          "fire-money",
        ],
        [1, "box", "position-relative", "cursor-pointer"],
        [
          1,
          "user-profile",
          "d-flex",
          "align-items-center",
          "justify-content-between",
        ],
        [1, "d-flex"],
        ["alt", "character", 1, "profile", 3, "deferLoad"],
        [1, "info"],
        [1, "name", "lang-font"],
        [
          "deferLoad",
          "/assets/images/svg-icons/verified-badge.svg",
          "alt",
          "verified-badge",
          1,
          "verified",
        ],
        [1, "username"],
        ["target", "_blank", 1, "telegram", 3, "href"],
        [
          "deferLoad",
          "/assets/images/svg-icons/telegram.svg",
          "alt",
          "telegram",
        ],
        ["class", "desc", 3, "innerHtml", 4, "ngFor", "ngForOf"],
        [1, "desc", 3, "innerHtml"],
        [1, "box", "position-relative"],
      ],
      template: function (n, a) {
        n & 1 &&
          (T(0, "app-updates", 0)(1, "app-blog", 0)(2, "div", 1),
          c(3, "section", 2)(4, "div", 3)(5, "h2", 4),
          m(6),
          g(7, "translate"),
          d(),
          c(8, "div", 5),
          A(9, $1, 13, 5, "div", 6),
          d(),
          c(10, "div", 7),
          A(11, X1, 13, 5, "div", 8),
          d(),
          T(12, "img", 9),
          d()()),
          n & 2 &&
            (u("fromLanding", !0),
            o(),
            u("fromLanding", !0),
            o(5),
            _(f(7, 5, "our-friends.title")),
            o(3),
            u("ngForOf", a.boxes.slice(0, 3)),
            o(2),
            u("ngForOf", a.boxes.slice(3, 7)));
      },
      dependencies: [le, zl, Gl, At, Y],
      styles: [
        ".our-friends[_ngcontent-%COMP%]{padding:100px 40px 80px;background:url(/assets/images/webp/our-friends.webp) no-repeat;background-size:100%;background-position:top}@media screen and (max-width: 768px){.our-friends[_ngcontent-%COMP%]{background:url(/assets/images/webp/our-friend-mob.webp) no-repeat 0 0/100% 88%;padding:40px 0 0}}.our-friends[_ngcontent-%COMP%]   .fire-money[_ngcontent-%COMP%]{position:absolute;bottom:-225px;right:0;z-index:3;max-width:290px}@media screen and (max-width: 1499px){.our-friends[_ngcontent-%COMP%]   .fire-money[_ngcontent-%COMP%]{max-width:240px}}@media screen and (max-width: 768px){.our-friends[_ngcontent-%COMP%]   .fire-money[_ngcontent-%COMP%]{position:relative;max-width:190px;right:0;bottom:30px;margin-right:0;margin-left:auto;display:block}}.our-friends[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]{margin-top:40px}@media screen and (max-width: 768px){.our-friends[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]{overflow-x:scroll;padding:8px 0!important;align-items:stretch}.our-friends[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}}@media screen and (max-width: 768px){.our-friends[_ngcontent-%COMP%]   .boxes.second[_ngcontent-%COMP%]{margin-top:0}}.our-friends[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{padding:16px 32px;background:url(/assets/images/webp/common-box-star.webp) no-repeat;background-size:cover;border:2px solid #000000;border-radius:32px;margin:0 8px;width:33%;min-height:230px;box-shadow:0 2px #000}@media screen and (max-width: 768px){.our-friends[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{width:100%;padding:16px 24px;min-height:240px;min-width:255px}}.our-friends[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:first-child{margin-left:3px}.our-friends[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]{margin-bottom:16px}.our-friends[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]{width:44px;height:44px;object-fit:contain;margin-right:12px;border-radius:50%}.our-friends[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-family:Librestile_Extended_Bold,sans-serif;margin-bottom:0;text-transform:uppercase;line-height:16px;display:flex;align-items:center}.our-friends[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .verified[_ngcontent-%COMP%]{margin-left:8px}@media screen and (max-width: 768px){.our-friends[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:13px}}.our-friends[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]{color:#000;margin-bottom:0}@media screen and (max-width: 768px){.our-friends[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]{font-size:12px}}.our-friends[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .telegram[_ngcontent-%COMP%]{width:30px;height:30px}.our-friends[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{color:#000;margin-bottom:0;margin-top:16px}  .our-friends .owl-carousel .owl-stage-outer{padding:8px 0}  .our-friends .owl-carousel .owl-stage{display:flex;align-items:stretch}",
      ],
    });
  }
  return t;
})();
function Y1(t, i) {
  t & 1 && (c(0, "p", 9), m(1), g(2, "translate"), d()),
    t & 2 && (o(), _(f(2, 1, "trustby.featured_in")));
}
function U1(t, i) {
  t & 1 && (c(0, "p", 9), m(1), g(2, "translate"), d()),
    t & 2 && (o(), _(f(2, 1, "trustby.title")));
}
function Q1(t, i) {
  t & 1 && T(0, "img", 10);
}
function K1(t, i) {
  t & 1 && T(0, "img", 11);
}
function Z1(t, i) {
  t & 1 && T(0, "img", 12);
}
function J1(t, i) {
  if ((t & 1 && T(0, "img", 13), t & 2)) {
    let e = i.$implicit;
    Re("src", e.img, W);
  }
}
function ey(t, i) {
  if ((t & 1 && T(0, "img", 15), t & 2)) {
    let e = i.$implicit;
    Re("src", e.img, W);
  }
}
function ty(t, i) {
  if ((t & 1 && (dt(0), A(1, ey, 1, 1, "img", 14), pt()), t & 2)) {
    let e = y();
    o(), u("ngForOf", e.isMedia ? e.mediaItems : e.bannerItems);
  }
}
var Yh = (() => {
  class t {
    _platformId;
    eventService;
    isMedia = !1;
    isMobile = !1;
    bannerItems = [
      { img: "./assets/images/featured/feature_1.svg" },
      { img: "./assets/images/featured/feature_2.svg" },
      { img: "./assets/images/featured/feature_3.webp" },
      { img: "./assets/images/featured/feature_4.svg" },
      { img: "./assets/images/featured/feature_5.webp" },
      { img: "./assets/images/featured/feature_6.svg" },
      { img: "./assets/images/featured/feature_7.svg" },
    ];
    mediaItems = [
      { img: "./assets/images/featured/feature_new_1.svg" },
      { img: "./assets/images/featured/feature_new_2.svg" },
      { img: "./assets/images/featured/feature_new_3.svg" },
      { img: "./assets/images/featured/feature_new_4.svg" },
    ];
    onResize(e) {
      if (H(this._platformId)) {
        let n = window.innerWidth;
        this.isMobile = n <= 1024;
      }
    }
    constructor(e, n) {
      (this._platformId = e), (this.eventService = n);
    }
    ngAfterViewInit() {
      setTimeout(() => {
        if (H(this._platformId)) {
          let e = window.innerWidth;
          this.isMobile = e <= 1024;
        }
      }, 100);
    }
    static ɵfac = function (n) {
      return new (n || t)(w(j), w(Ye));
    };
    static ɵcmp = F({
      type: t,
      selectors: [["app-trustby"]],
      hostBindings: function (n, a) {
        n & 1 &&
          S(
            "resize",
            function (r) {
              return a.onResize(r);
            },
            !1,
            Te
          );
      },
      inputs: { isMedia: "isMedia" },
      decls: 10,
      vars: 7,
      consts: [
        [1, "trustby", "lang-font"],
        [1, "container", "position-relative"],
        [
          "class",
          "font-16 fw-bold text-center text-uppercase text-white mb-4",
          4,
          "ngIf",
        ],
        [
          "src",
          "/assets/images/gif/trust-moon.gif",
          "class",
          "trust-moon d-none d-lg-block",
          "alt",
          "trust-moon",
          "loading",
          "eager",
          4,
          "ngIf",
        ],
        [
          "deferLoad",
          "/assets/images/webp/trust-bike.webp",
          "class",
          "trust-bike",
          "alt",
          "trust-bike",
          4,
          "ngIf",
        ],
        [
          "deferLoad",
          "/assets/images/gif/speak.gif",
          "class",
          "trust-pepe-riding",
          "alt",
          "speak",
          4,
          "ngIf",
        ],
        [
          1,
          "d-flex",
          "justify-content-center",
          "align-items-center",
          "gap-4",
          "marquee",
        ],
        [
          "alt",
          "trustby-img",
          "class",
          "items",
          3,
          "src",
          4,
          "ngFor",
          "ngForOf",
        ],
        [4, "ngIf"],
        [
          1,
          "font-16",
          "fw-bold",
          "text-center",
          "text-uppercase",
          "text-white",
          "mb-4",
        ],
        [
          "src",
          "/assets/images/gif/trust-moon.gif",
          "alt",
          "trust-moon",
          "loading",
          "eager",
          1,
          "trust-moon",
          "d-none",
          "d-lg-block",
        ],
        [
          "deferLoad",
          "/assets/images/webp/trust-bike.webp",
          "alt",
          "trust-bike",
          1,
          "trust-bike",
        ],
        [
          "deferLoad",
          "/assets/images/gif/speak.gif",
          "alt",
          "speak",
          1,
          "trust-pepe-riding",
        ],
        ["alt", "trustby-img", 1, "items", 3, "src"],
        [
          "class",
          "d-block d-lg-none items",
          "alt",
          "trustby-img",
          3,
          "src",
          4,
          "ngFor",
          "ngForOf",
        ],
        ["alt", "trustby-img", 1, "d-block", "d-lg-none", "items", 3, "src"],
      ],
      template: function (n, a) {
        n & 1 &&
          (c(0, "div", 0)(1, "div", 1),
          A(2, Y1, 3, 3, "p", 2)(3, U1, 3, 3, "p", 2)(4, Q1, 1, 0, "img", 3)(
            5,
            K1,
            1,
            0,
            "img",
            4
          )(6, Z1, 1, 0, "img", 5),
          c(7, "div", 6),
          A(8, J1, 1, 1, "img", 7)(9, ty, 2, 1, "ng-container", 8),
          d()()()),
          n & 2 &&
            (o(2),
            u("ngIf", !a.isMedia),
            o(),
            u("ngIf", a.isMedia),
            o(),
            u("ngIf", !a.isMedia),
            o(),
            u("ngIf", a.isMedia),
            o(),
            u("ngIf", a.isMedia),
            o(2),
            u("ngForOf", a.isMedia ? a.mediaItems : a.bannerItems),
            o(),
            u("ngIf", a.isMobile));
      },
      dependencies: [le, X, At, Y],
      styles: [
        ".trustby[_ngcontent-%COMP%]{background:#000 url(/assets/images/webp/trustby-bg.webp);background-size:100%;height:135px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Librestile_Extended_Bold,sans-serif}@media screen and (max-width: 768px){.trustby[_ngcontent-%COMP%]{background:#000 url(/assets/images/webp/trusted-bg-mob.webp);background-size:cover}}.trustby[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]{max-width:170px}.trustby[_ngcontent-%COMP%]   .trust-moon[_ngcontent-%COMP%]{position:absolute;height:196px;left:-57px;top:-132px}.trustby[_ngcontent-%COMP%]   .trust-bike[_ngcontent-%COMP%]{position:absolute;height:250px;left:0;top:-94px;z-index:2;max-width:100%}@media screen and (max-width: 768px){.trustby[_ngcontent-%COMP%]   .trust-bike[_ngcontent-%COMP%]{left:-25px;top:-213px;width:221px;height:unset}}.trustby[_ngcontent-%COMP%]   .trust-pepe-riding[_ngcontent-%COMP%]{position:absolute;height:240px;right:0;top:-90px;z-index:2}@media screen and (max-width: 768px){.trustby[_ngcontent-%COMP%]   .trust-pepe-riding[_ngcontent-%COMP%]{height:200px;right:-30px;top:55px}}@media screen and (max-width: 1024px){.trustby[_ngcontent-%COMP%]   .marquee[_ngcontent-%COMP%]{animation:marquee 18s linear infinite;will-change:transform;width:331%}@keyframes marquee{0%{transform:translate(0)}to{transform:translate(-100%)}}}",
      ],
    });
  }
  return t;
})();
function ny(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 7)(1, "div", 8),
      S("click", function () {
        let a = M(e).$implicit,
          s = y(2);
        return L(s.openNewsUrl(a.url));
      }),
      T(2, "img", 9),
      c(3, "div", 10)(4, "div", 11),
      m(5),
      g(6, "translate"),
      d(),
      c(7, "p", 12),
      m(8),
      g(9, "translate"),
      d()(),
      T(10, "img", 13),
      d()();
  }
  if (t & 2) {
    let e = i.$implicit,
      n = i.index;
    o(),
      ci("media-card cursor-pointer px-2 px-lg-0 media-card-", n + 1, ""),
      o(),
      u("deferLoad", e.img),
      o(3),
      P(" ", f(6, 7, e.name), " "),
      o(3),
      _(f(9, 9, e.desc)),
      o(2),
      u("deferLoad", e.platform_icon);
  }
}
function ay(t, i) {
  if ((t & 1 && (c(0, "div", 5), A(1, ny, 11, 11, "div", 6), d()), t & 2)) {
    let e = y();
    o(), u("ngForOf", e.items);
  }
}
function sy(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 8),
      S("click", function () {
        let a = M(e).$implicit,
          s = y(2);
        return L(s.openNewsUrl(a.url));
      }),
      T(1, "img", 9),
      c(2, "div", 10)(3, "div", 17),
      m(4),
      g(5, "translate"),
      d(),
      c(6, "p", 12),
      m(7),
      g(8, "translate"),
      d()(),
      T(9, "img", 13),
      d();
  }
  if (t & 2) {
    let e = i.$implicit,
      n = i.index;
    ci("media-card cursor-pointer px-2 px-lg-0 media-card-", n + 1, ""),
      o(),
      u("deferLoad", e.img),
      o(3),
      P(" ", f(5, 7, e.name), " "),
      o(3),
      _(f(8, 9, e.desc)),
      o(2),
      u("deferLoad", e.platform_icon);
  }
}
function ry(t, i) {
  if (
    (t & 1 &&
      (c(0, "div", 14)(1, "div", 15), A(2, sy, 10, 11, "div", 16), d()()),
    t & 2)
  ) {
    let e = y();
    o(2), u("ngForOf", e.items);
  }
}
var Uh = (() => {
  class t {
    platformId;
    eventService;
    canRenders = !1;
    isMobile = !1;
    items = [
      {
        name: "media.media_1_title",
        desc: "media.media_1_desc",
        date: "media.media_1_date",
        img: "/assets/images/webp/media/media_1.webp",
        url: "https://cryptonews.com/press-releases/why-hyper-is-crypto-to-watch-in-blockchain-interoperability/",
        platform_icon: "/assets/images/svg-icons/news/news_1.svg",
      },
      {
        name: "media.media_2_title",
        desc: "media.media_2_desc",
        date: "media.media_2_date",
        img: "/assets/images/webp/media/media_2.webp",
        url: "https://en.cryptonomist.ch/2025/05/13/bitcoin-hypers-vision-for-faster-blockchain-transactions-top-presale-to-invest-in-now/",
        platform_icon: "/assets/images/svg-icons/news/news_2.svg",
      },
      {
        name: "media.media_3_title",
        desc: "media.media_3_desc",
        date: "media.media_3_date",
        img: "/assets/images/webp/media/media_3.webp",
        url: "https://insidebitcoins.com/press-releases/how-bitcoin-hyper-is-making-btc-faster-and-cheaper-presale-ongoing",
        platform_icon: "/assets/images/svg-icons/news/news_3.svg",
      },
      {
        name: "media.media_4_title",
        desc: "media.media_4_desc",
        date: "media.media_4_date",
        img: "/assets/images/webp/media/media_4.webp",
        url: "https://news.bitcoin.com/fidelity-calls-it-bitcoin-could-flip-golds-dominance-any-day-now/",
        platform_icon: "/assets/images/svg-icons/news/news_4.svg",
      },
    ];
    mediaSlider = {
      loop: !1,
      autoplay: !1,
      touchDrag: !0,
      mouseDrag: !0,
      dots: !0,
      nav: !1,
      center: !1,
      margin: 15,
      responsive: {
        0: { items: 1, center: !0 },
        480: { items: 1, center: !0 },
        768: { items: 2.5, center: !0 },
        1e3: { items: 4, center: !1, touchDrag: !1, mouseDrag: !1 },
        1200: { items: 4, touchDrag: !1, mouseDrag: !1 },
        1280: { items: 4, touchDrag: !1, mouseDrag: !1 },
      },
    };
    constructor(e, n) {
      (this.platformId = e), (this.eventService = n);
    }
    onResize() {
      H(this.platformId) && (this.isMobile = window.innerWidth <= 1024);
    }
    ngAfterViewInit() {
      H(this.platformId) &&
        setTimeout(() => {
          (this.isMobile = window.innerWidth <= 1024),
            (this.canRenders = !0),
            window.dispatchEvent(new Event("resize"));
        }, 100);
    }
    openNewsUrl(e) {
      H(this.platformId) && window.open(e, "_blank");
    }
    static ɵfac = function (n) {
      return new (n || t)(w(j), w(Ye));
    };
    static ɵcmp = F({
      type: t,
      selectors: [["app-media"]],
      hostBindings: function (n, a) {
        n & 1 &&
          S(
            "resize",
            function () {
              return a.onResize();
            },
            !1,
            Te
          );
      },
      decls: 7,
      vars: 5,
      consts: [
        ["id", "media", 1, "media"],
        [1, "container", "position-relative", "px-0", "px-md-3"],
        [1, "section-title", "px-2", "px-lg-0"],
        ["class", "row mt-4", 4, "ngIf"],
        ["class", "mt-4", 4, "ngIf"],
        [1, "row", "mt-4"],
        ["class", "col-lg-3", 4, "ngFor", "ngForOf"],
        [1, "col-lg-3"],
        [3, "click"],
        ["alt", "card-image", 1, "img-fluid", 3, "deferLoad"],
        [1, "media-info"],
        [1, "mt-2", "text-uppercase", "mb-1", "title", "lang-font"],
        [1, "desc"],
        ["alt", "icon", 1, "icon", 3, "deferLoad"],
        [1, "mt-4"],
        [1, "d-flex", "align-items-stretch", "media-wrapper"],
        [3, "class", "click", 4, "ngFor", "ngForOf"],
        [1, "mt-2", "text-uppercase", "mb-1", "title"],
      ],
      template: function (n, a) {
        n & 1 &&
          (c(0, "section", 0)(1, "div", 1)(2, "h2", 2),
          m(3),
          g(4, "translate"),
          d(),
          A(5, ay, 2, 1, "div", 3)(6, ry, 3, 1, "div", 4),
          d()()),
          n & 2 &&
            (o(3),
            _(f(4, 3, "media.title")),
            o(2),
            u("ngIf", !a.isMobile),
            o(),
            u("ngIf", a.canRenders && a.isMobile));
      },
      dependencies: [le, X, At, Y],
      styles: [
        '.media[_ngcontent-%COMP%]{background:url(/assets/images/webp/media_bg.webp) repeat-x 0 0;padding:40px 40px 90px}@media screen and (max-width: 768px){.media[_ngcontent-%COMP%]{padding-bottom:250px;background:url(/assets/images/webp/media_bg.webp) repeat-x 0 0}}@media screen and (max-width: 576px){.media[_ngcontent-%COMP%]{padding:15px 0 200px}}.media[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Librestile_Extended_Bold,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:120%;letter-spacing:.84px}@media screen and (max-width: 768px){.media[_ngcontent-%COMP%]   .media-wrapper[_ngcontent-%COMP%]{overflow-x:scroll;padding:8px 0!important}.media[_ngcontent-%COMP%]   .media-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}}.media[_ngcontent-%COMP%]   .media-card[_ngcontent-%COMP%]{max-width:282px;position:relative;padding-bottom:6px}.media[_ngcontent-%COMP%]   .media-card[_ngcontent-%COMP%]:after{content:"";width:3px;height:100%;position:absolute;top:0;right:-19px;background:#fff}@media screen and (max-width: 768px){.media[_ngcontent-%COMP%]   .media-card[_ngcontent-%COMP%]:after{display:none}}.media[_ngcontent-%COMP%]   .media-card.media-card-4[_ngcontent-%COMP%]:after{display:none}.media[_ngcontent-%COMP%]   .media-card[_ngcontent-%COMP%]   .media-info[_ngcontent-%COMP%]{min-height:250px}@media screen and (max-width: 576px){.media[_ngcontent-%COMP%]   .media-card[_ngcontent-%COMP%]   .media-info[_ngcontent-%COMP%]{min-height:auto}}@media screen and (max-width: 768px){.media[_ngcontent-%COMP%]   .media-card[_ngcontent-%COMP%]{width:100%;max-width:unset;min-width:100%;margin:0}}.media[_ngcontent-%COMP%]   .media-card[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{font-size:16.266px;font-style:normal;font-weight:400;line-height:120%;letter-spacing:.325px}.media[_ngcontent-%COMP%]   .media-card[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{font-size:12px;font-style:normal;font-weight:700;line-height:120%;letter-spacing:.72px;text-transform:uppercase}.media[_ngcontent-%COMP%]   .media-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:135px}@media screen and (max-width: 768px){.media[_ngcontent-%COMP%]   .media-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:150px}}.media[_ngcontent-%COMP%]   .media-wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;overflow-x:auto}.media[_ngcontent-%COMP%]   .media-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}',
      ],
    });
  }
  return t;
})();
var So = () => ({ "width.px": "45", "height.px": "35" }),
  ly = () => ({
    "width.px": "45",
    "height.px": "35",
    "marginRight.px": "150",
    transform: "rotate(90deg)",
  }),
  Qh = (() => {
    class t {
      platform_id;
      constructor(e) {
        this.platform_id = e;
      }
      static ɵfac = function (n) {
        return new (n || t)(w(j));
      };
      static ɵcmp = F({
        type: t,
        selectors: [["app-bitcoin-layer-2"]],
        decls: 140,
        vars: 96,
        consts: [
          ["id", "about", 1, "bitcoin-layer-2", "lang-font"],
          [1, "container", "px-0", "px-md-3"],
          [1, "innerCont"],
          [1, "section-title", "ps-2", "ps-md-0"],
          [
            1,
            "steps-container",
            "d-flex",
            "justify-content-between",
            "align-items-stretch",
            "mt-4",
            "py-2",
          ],
          [1, "step-outer"],
          [1, "step", "step-1"],
          [1, "circle", "circle-blur-effect"],
          [1, "content"],
          [1, "mb-1", "font-16", "text-uppercase"],
          [1, "ps-4", "mb-0"],
          [
            "src",
            "/assets/images/svg-icons/ani-arrow.svg",
            1,
            "align-self-center",
            3,
            "svgStyle",
          ],
          [1, "step", "step-2", "orange-bg"],
          [1, "step", "step-3"],
          [
            "src",
            "/assets/images/svg-icons/ani-arrow.svg",
            1,
            "d-block",
            "d-md-none",
            "align-self-center",
            3,
            "svgStyle",
          ],
          [1, "step", "step-4", "d-block", "d-md-none"],
          [1, "d-none", "d-md-flex", "justify-content-end", "mt-2", "mb-3"],
          [
            1,
            "d-none",
            "d-md-flex",
            "align-items-center",
            "justify-content-between",
          ],
          [1, "tech-types"],
          [1, "tech-list"],
          [1, "tech"],
          [
            "src",
            "/assets/images/webp/lightning.webp",
            "loading",
            "lazy",
            "alt",
            "Lightning Network",
          ],
          [
            "src",
            "/assets/images/webp/optimism.webp",
            "loading",
            "lazy",
            "alt",
            "Optimism",
          ],
          [
            "src",
            "/assets/images/webp/zkrollups.webp",
            "loading",
            "lazy",
            "alt",
            "ZK-Rollups",
          ],
          [
            "src",
            "/assets/images/webp/rootstock.webp",
            "loading",
            "lazy",
            "alt",
            "Rootstock",
          ],
          [
            "src",
            "/assets/images/webp/bitcoin-hyper.webp",
            "loading",
            "lazy",
            "alt",
            "Validium",
          ],
          [1, "step", "step-4"],
          [
            1,
            "whitepaper-wrapper",
            "d-flex",
            "justify-content-center",
            "align-items-center",
            "flex-column",
            "my-3",
          ],
          [1, "mb-0", "mt-2", "pt-1"],
          [3, "placement"],
        ],
        template: function (n, a) {
          n & 1 &&
            (c(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3),
            m(4),
            g(5, "translate"),
            d(),
            c(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "span"),
            m(11, "1"),
            d()(),
            c(12, "div", 8)(13, "h3", 9),
            m(14),
            g(15, "translate"),
            d(),
            c(16, "ul", 10)(17, "li"),
            m(18),
            g(19, "translate"),
            d(),
            c(20, "li"),
            m(21),
            g(22, "translate"),
            d(),
            c(23, "li"),
            m(24),
            g(25, "translate"),
            d()()()()(),
            T(26, "svg-icon", 11),
            c(27, "div", 5)(28, "div", 12)(29, "div", 7)(30, "span"),
            m(31, "2"),
            d()(),
            c(32, "div", 8)(33, "h3", 9),
            m(34),
            g(35, "translate"),
            d(),
            c(36, "ul", 10)(37, "li"),
            m(38),
            g(39, "translate"),
            d(),
            c(40, "li"),
            m(41),
            g(42, "translate"),
            d(),
            c(43, "li"),
            m(44),
            g(45, "translate"),
            d()()()()(),
            T(46, "svg-icon", 11),
            c(47, "div", 5)(48, "div", 13)(49, "div", 7)(50, "span"),
            m(51, "3"),
            d()(),
            c(52, "div", 8)(53, "h3", 9),
            m(54),
            g(55, "translate"),
            d(),
            c(56, "ul", 10)(57, "li"),
            m(58),
            g(59, "translate"),
            d(),
            c(60, "li"),
            m(61),
            g(62, "translate"),
            d(),
            c(63, "li"),
            m(64),
            g(65, "translate"),
            d()()()()(),
            T(66, "svg-icon", 14),
            c(67, "div", 5)(68, "div", 15)(69, "div", 7)(70, "span"),
            m(71, "4"),
            d()(),
            c(72, "div", 8)(73, "h3", 9),
            m(74),
            g(75, "translate"),
            d(),
            c(76, "ul", 10)(77, "li"),
            m(78),
            g(79, "translate"),
            d(),
            c(80, "li"),
            m(81),
            g(82, "translate"),
            d(),
            c(83, "li"),
            m(84),
            g(85, "translate"),
            d()()()()()(),
            c(86, "div", 16),
            T(87, "svg-icon", 11),
            d(),
            c(88, "div", 17)(89, "div", 18)(90, "h3", 9),
            m(91),
            g(92, "translate"),
            d(),
            c(93, "div", 19)(94, "div", 20),
            T(95, "img", 21),
            m(96),
            g(97, "translate"),
            d(),
            c(98, "div", 20),
            T(99, "img", 22),
            m(100),
            g(101, "translate"),
            d(),
            c(102, "div", 20),
            T(103, "img", 23),
            m(104),
            g(105, "translate"),
            d(),
            c(106, "div", 20),
            T(107, "img", 24),
            m(108),
            g(109, "translate"),
            d(),
            c(110, "div", 20),
            T(111, "img", 25),
            m(112),
            g(113, "translate"),
            d()()(),
            c(114, "div", 26)(115, "div", 7)(116, "span"),
            m(117, "4"),
            d()(),
            c(118, "div", 8)(119, "h3", 9),
            m(120),
            g(121, "translate"),
            d(),
            c(122, "ul", 10)(123, "li"),
            m(124),
            g(125, "translate"),
            d(),
            c(126, "li"),
            m(127),
            g(128, "translate"),
            d(),
            c(129, "li"),
            m(130),
            g(131, "translate"),
            d()()()()(),
            c(132, "div", 27)(133, "a", 28),
            m(134),
            g(135, "translate"),
            d(),
            c(136, "p", 29),
            m(137),
            g(138, "translate"),
            d()()()(),
            T(139, "app-common-carousel", 30),
            d()),
            n & 2 &&
              (o(4),
              _(f(5, 34, "bitcoin_layer.title")),
              o(10),
              _(f(15, 36, "bitcoin_layer.card_1_title")),
              o(4),
              _(f(19, 38, "bitcoin_layer.card_1_list_1")),
              o(3),
              _(f(22, 40, "bitcoin_layer.card_1_list_2")),
              o(3),
              _(f(25, 42, "bitcoin_layer.card_1_list_3")),
              o(2),
              u("svgStyle", xe(92, So)),
              o(8),
              _(f(35, 44, "bitcoin_layer.card_2_title")),
              o(4),
              _(f(39, 46, "bitcoin_layer.card_2_list_1")),
              o(3),
              _(f(42, 48, "bitcoin_layer.card_2_list_2")),
              o(3),
              _(f(45, 50, "bitcoin_layer.card_2_list_3")),
              o(2),
              u("svgStyle", xe(93, So)),
              o(8),
              _(f(55, 52, "bitcoin_layer.card_3_title")),
              o(4),
              _(f(59, 54, "bitcoin_layer.card_3_list_1")),
              o(3),
              _(f(62, 56, "bitcoin_layer.card_3_list_2")),
              o(3),
              _(f(65, 58, "bitcoin_layer.card_3_list_3")),
              o(2),
              u("svgStyle", xe(94, So)),
              o(8),
              _(f(75, 60, "bitcoin_layer.card_4_title")),
              o(4),
              _(f(79, 62, "bitcoin_layer.card_4_list_1")),
              o(3),
              _(f(82, 64, "bitcoin_layer.card_4_list_2")),
              o(3),
              _(f(85, 66, "bitcoin_layer.card_4_list_3")),
              o(3),
              u("svgStyle", xe(95, ly)),
              o(4),
              _(f(92, 68, "bitcoin_layer.box_title")),
              o(5),
              _(f(97, 70, "bitcoin_layer.benifit_text_1")),
              o(4),
              _(f(101, 72, "bitcoin_layer.benifit_text_2")),
              o(4),
              _(f(105, 74, "bitcoin_layer.benifit_text_3")),
              o(4),
              _(f(109, 76, "bitcoin_layer.benifit_text_4")),
              o(4),
              _(f(113, 78, "bitcoin_layer.benifit_text_5")),
              o(8),
              _(f(121, 80, "bitcoin_layer.card_4_title")),
              o(4),
              _(f(125, 82, "bitcoin_layer.card_4_list_1")),
              o(3),
              _(f(128, 84, "bitcoin_layer.card_4_list_2")),
              o(3),
              _(f(131, 86, "bitcoin_layer.card_4_list_3")),
              o(4),
              _(f(135, 88, "bitcoin_layer.read_whitepaper")),
              o(3),
              _(f(138, 90, "bitcoin_layer.breakdown")),
              o(2),
              u("placement", "bitcoin-layer"));
        },
        dependencies: [ha, qe, Y],
        styles: [
          ".bitcoin-layer-2[_ngcontent-%COMP%]{padding-top:100px;font-family:Librestile_Extended_Bold,sans-serif;margin-top:-60px}.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .innerCont[_ngcontent-%COMP%]{padding:0 40px}@media screen and (max-width: 768px){.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .innerCont[_ngcontent-%COMP%]{padding:0}}@media screen and (max-width: 768px){.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .steps-container[_ngcontent-%COMP%]{overflow-x:scroll;padding:12px 5px 5px 15px!important;scroll-snap-type:x mandatory;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .steps-container[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}}.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]{position:relative;border:2px dashed #000000;border-radius:32px;padding:24px;width:350px;min-height:210px;height:100%}@media screen and (max-width: 1024px){.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]{width:28vw}}@media screen and (max-width: 768px){.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]{min-width:260px;height:calc(100% - 2px);margin:5px;padding:22px 10px 20px 22px}}.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .step.orange-bg[_ngcontent-%COMP%]{background:url(/assets/images/webp/bitcoin-layer-card-bg.webp) no-repeat;background-size:cover;border-style:solid;box-shadow:0 2px #000}.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .step.orange-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{line-height:1.2!important}.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{position:absolute;top:-1rem;left:-1rem;background:#fff;border:3px solid #000000;border-radius:50%;width:40px;height:40px;text-align:center;line-height:38px;font-weight:700;font-size:1.2rem;box-shadow:0 3px #000}.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;z-index:1}.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{font-family:Inter,sans-serif;padding-left:2rem}@media screen and (max-width: 768px){.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-bottom:0}}.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{line-height:1.4}@media screen and (max-width: 1024px){.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:1rem}}.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .step.step-3[_ngcontent-%COMP%]{background:#fdbeb8 url(/assets/images/webp/step3-bg.webp) no-repeat 0 0/cover}.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .step.step-4[_ngcontent-%COMP%]{background:#ecf url(/assets/images/webp/step4-bg.webp) no-repeat 0 0/cover}@media screen and (max-width: 768px){.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .step-outer[_ngcontent-%COMP%]{padding-left:15px;margin-left:-15px;scroll-snap-align:start;flex-shrink:0;transform-origin:center center;transform:scale(1);transition:transform .5s;position:relative}}.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .tech-types[_ngcontent-%COMP%]{background:#000;color:#fff;padding:2rem;border-radius:32px;width:calc(100% - 395px)}@media screen and (max-width: 1024px){.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .tech-types[_ngcontent-%COMP%]{height:auto;width:calc(100% - 28vw - 30px)}}.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .tech-types[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:1rem}.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .tech-types[_ngcontent-%COMP%]   .tech-list[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:1.5rem}@media screen and (max-width: 1024px){.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .tech-types[_ngcontent-%COMP%]   .tech-list[_ngcontent-%COMP%]{flex-wrap:wrap;justify-content:space-evenly}}.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .tech-types[_ngcontent-%COMP%]   .tech-list[_ngcontent-%COMP%]   .tech[_ngcontent-%COMP%]{font-size:10px;text-align:center;font-weight:700;font-family:Inter,sans-serif;transition:all .3s ease;cursor:pointer}.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .tech-types[_ngcontent-%COMP%]   .tech-list[_ngcontent-%COMP%]   .tech[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:contain;display:block;margin:17px auto 10px;transition:all .3s ease}.bitcoin-layer-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .tech-types[_ngcontent-%COMP%]   .tech-list[_ngcontent-%COMP%]   .tech[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{filter:drop-shadow(0px 0px 18px #ffc885)}.bitcoin-layer-2[_ngcontent-%COMP%]   .whitepaper-wrapper[_ngcontent-%COMP%]{max-width:350px;margin-left:auto}@media screen and (max-width: 768px){.bitcoin-layer-2[_ngcontent-%COMP%]   .whitepaper-wrapper[_ngcontent-%COMP%]{max-width:100%;margin:0 auto}}.bitcoin-layer-2[_ngcontent-%COMP%]   .whitepaper-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#1a7ef7!important}.bitcoin-layer-2[_ngcontent-%COMP%]   .whitepaper-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-size:16px;text-align:center}",
        ],
      });
    }
    return t;
  })();
var ko = (() => {
  class t {
    static ɵfac = function (n) {
      return new (n || t)();
    };
    static ɵcmp = F({
      type: t,
      selectors: [["app-home"]],
      decls: 10,
      vars: 2,
      consts: [
        [1, "home"],
        [3, "isMedia"],
      ],
      template: function (n, a) {
        n & 1 &&
          (c(0, "div", 0),
          T(1, "app-banner")(2, "app-trustby", 1)(3, "app-bitcoin-layer-2")(
            4,
            "app-how-to-buy"
          )(5, "app-media")(
            6,
            "app-trustby",
            1
          )(7, "app-tokenomics")(8, "app-our-friends")(9, "app-faq"),
          d()),
          n & 2 && (o(2), u("isMedia", !1), o(4), u("isMedia", !0));
      },
      dependencies: [$h, jh, Xh, qh, Yh, Lh, Uh, Qh],
      styles: [".home[_ngcontent-%COMP%]{overflow:hidden}"],
    });
  }
  return t;
})();
var dy = [
    {
      id: "6822eafce5a71e988c937466",
      walletAddress: "0xe8Dc932dcb60E9c608Ba464479C5c4370C12239a",
      totalToken: "741",
      tokenAddress: "0xcomingsoon00",
      amountPaid: "0.003480962243109765",
      usdEquivalent: "8.5215",
      isNativeToken: !0,
      chain: "eth",
      txnHash:
        "0x2b4d6f8de0687338032f148f2869448d7ad2f6e55458306ce5e66445007ddbab",
      createdAt: "2025-05-13T06:47:24.733Z",
      project: {
        name: "BTC Hyper",
        ticker: "$HYPER",
        logo: "https://web3toolkit.s3.eu-west-2.amazonaws.com/uploads/presale/hyper_logo.png",
      },
    },
    {
      id: "6822ea6de5a71e988c9373c8",
      walletAddress: "0xe8Dc932dcb60E9c608Ba464479C5c4370C12239a",
      totalToken: "90746",
      tokenAddress: "0xcomingsoon00",
      amountPaid: "0.426293386927447784",
      usdEquivalent: "1043.579",
      isNativeToken: !0,
      chain: "eth",
      txnHash:
        "0xb657147202628ded0ec03822ed6cc6fa38418b12d0c125a38ff4cb922ceaa393",
      createdAt: "2025-05-13T06:45:01.116Z",
      project: {
        name: "BTC Hyper",
        ticker: "$HYPER",
        logo: "https://web3toolkit.s3.eu-west-2.amazonaws.com/uploads/presale/hyper_logo.png",
      },
    },
    {
      id: "6822c7f9e5a71e988c93568e",
      walletAddress: "0x7D7D67FF75A0Ace2120d230955D18362cF13d308",
      totalToken: "77869",
      tokenAddress: "0xcomingsoon00",
      amountPaid: "0.368476418161019808",
      usdEquivalent: "895.4935",
      isNativeToken: !0,
      chain: "eth",
      txnHash:
        "0x47faa00ff4c33ad39cd37541d68e3e78227df245e4bbc52608b4834ce0152895",
      createdAt: "2025-05-13T04:18:01.156Z",
      project: {
        name: "BTC Hyper",
        ticker: "$HYPER",
        logo: "https://web3toolkit.s3.eu-west-2.amazonaws.com/uploads/presale/hyper_logo.png",
      },
    },
    {
      id: "6822b0dee5a71e988c9345e9",
      walletAddress: "0x930faC73BA042B40b5F21d9c34164695467a918B",
      totalToken: "2763",
      tokenAddress: "0xcomingsoon00",
      amountPaid: "0.012998682724877681",
      usdEquivalent: "31.7745",
      isNativeToken: !0,
      chain: "eth",
      txnHash:
        "0x3a15ef72abc97f5caf0ac6788695fbee3ddf04d2c26a43b26e18236946737c0d",
      createdAt: "2025-05-13T02:39:26.419Z",
      project: {
        name: "BTC Hyper",
        ticker: "$HYPER",
        logo: "https://web3toolkit.s3.eu-west-2.amazonaws.com/uploads/presale/hyper_logo.png",
      },
    },
    {
      id: "6822a166e5a71e988c933c19",
      walletAddress: "0x7D7D67FF75A0Ace2120d230955D18362cF13d308",
      totalToken: "86521",
      tokenAddress: "0xcomingsoon00",
      amountPaid: "0.404617765108231093",
      usdEquivalent: "994.9915",
      isNativeToken: !0,
      chain: "eth",
      txnHash:
        "0xedde3e414967b37a315af48ca409b81571322652b39cf0fd839d61fa96af47d9",
      createdAt: "2025-05-13T01:33:26.619Z",
      project: {
        name: "BTC Hyper",
        ticker: "$HYPER",
        logo: "https://web3toolkit.s3.eu-west-2.amazonaws.com/uploads/presale/hyper_logo.png",
      },
    },
    {
      id: "68227e19e5a71e988c9321fd",
      walletAddress: "0x60864834F7d66D5F8cBB53E5453e528e915ae434",
      totalToken: "5326",
      tokenAddress: "0xcomingsoon00",
      amountPaid: "0.024531196180680716",
      usdEquivalent: "61.249",
      isNativeToken: !0,
      chain: "eth",
      txnHash:
        "0x7d6fe994f8c84ed82592411a89672e83f05abe88952e0868695ff2933d246877",
      createdAt: "2025-05-12T23:02:49.961Z",
      project: {
        name: "BTC Hyper",
        ticker: "$HYPER",
        logo: "https://web3toolkit.s3.eu-west-2.amazonaws.com/uploads/presale/hyper_logo.png",
      },
    },
    {
      id: "68227abae5a71e988c931f35",
      walletAddress: "0x930faC73BA042B40b5F21d9c34164695467a918B",
      totalToken: "2000",
      tokenAddress: "0xcomingsoon00",
      amountPaid: "0.00925963203027497",
      usdEquivalent: "23.0",
      isNativeToken: !0,
      chain: "eth",
      txnHash:
        "0xf8df68dcf76beeec30479d540b2d3e1394c4d8ccd91c035f248449d36420dbea",
      createdAt: "2025-05-12T22:48:26.177Z",
      project: {
        name: "BTC Hyper",
        ticker: "$HYPER",
        logo: "https://web3toolkit.s3.eu-west-2.amazonaws.com/uploads/presale/hyper_logo.png",
      },
    },
    {
      id: "682257f1e5a71e988c92fae7",
      walletAddress: "0x1d83238Bcd63741FFC6EFBab93C8f44A2B893d7b",
      totalToken: "641",
      tokenAddress: "0xcomingsoon00",
      amountPaid: "0.002997712333893961",
      usdEquivalent: "7.3715",
      isNativeToken: !0,
      chain: "eth",
      txnHash:
        "0x538f29b380c30a6132f8a46626d107ff5709d466fbcc5add33f50e4db2098768",
      createdAt: "2025-05-12T20:20:01.303Z",
      project: {
        name: "BTC Hyper",
        ticker: "$HYPER",
        logo: "https://web3toolkit.s3.eu-west-2.amazonaws.com/uploads/presale/hyper_logo.png",
      },
    },
    {
      id: "682215a8e5a71e988c92a831",
      walletAddress: "0xceE2c9505EaDAEC84c1F8125885583970743Ade0",
      totalToken: "6056",
      tokenAddress: "0xcomingsoon00",
      amountPaid: "0.027828117029448286",
      usdEquivalent: "69.644",
      isNativeToken: !0,
      chain: "eth",
      txnHash:
        "0xea935dcbd5227365f6f7db2d77def107d472b2c38d32791979e3468bd4a6625b",
      createdAt: "2025-05-12T15:37:12.977Z",
      project: {
        name: "BTC Hyper",
        ticker: "$HYPER",
        logo: "https://web3toolkit.s3.eu-west-2.amazonaws.com/uploads/presale/hyper_logo.png",
      },
    },
  ],
  Ao = (function (t) {
    return (
      (t.TOKENS_BOUGHT = "TokensBought"),
      (t.TOKENS_BOUGHT_AND_STAKED = "TokenBoughtAndStaked"),
      (t.TOKENS_CLAIMED = "TokensClaimed"),
      (t.TOKENS_CLAIMED_AND_STAKED = "TokensClaimedAndStaked"),
      t
    );
  })(Ao || {}),
  py = [Ao.TOKENS_CLAIMED, Ao.TOKENS_CLAIMED_AND_STAKED],
  Kh = (() => {
    class t {
      http;
      eventSource = null;
      subscriptions = {};
      transactions = dy;
      url = E.transactionUrl;
      sseUrl = E.sseUrl;
      constructor(e) {
        this.http = e;
      }
      getTransactions(e = 10) {
        return Ne(this, null, function* () {
          return this.http.get(this.url, {
            params: { limit: 10, page: 1, projectName: "BTC Hyper" },
          });
        });
      }
      setAllTransaction(e) {
        let n = e.filter((a) => !!a.usdEquivalent);
        this.transactions = n;
      }
      startListner() {
        this.sseUrl != "" &&
          E.production &&
          (this.subscriptions = this.connectToServerSentEvents(
            this.sseUrl
          ).subscribe({
            next: (e) => {
              let n = JSON.parse(e.data),
                a = {
                  amountPaid: n.data.amountPaid,
                  chain: n.data.chain,
                  createdAt: n.data.chain,
                  id: Math.random().toString(),
                  isNativeToken: n.data.isNativeToken,
                  project: {},
                  tokenAddress: "",
                  totalToken: n.data.tokensBought,
                  txnHash: n.data.transactionHash,
                  walletAddress: n.data.user,
                  usdEquivalent: this.getUsdEqAmount(n),
                },
                s = [ae({}, a)];
              this.transactions = [...s, ...this.transactions];
            },
            error: (e) => {
              console.error("Notification Error:", e),
                this.destroySubscription();
            },
          }));
      }
      connectToServerSentEvents(e) {
        return new Kn(
          (n) => (
            (this.eventSource = new EventSource(e)),
            (this.eventSource.onerror = (a) => {
              n.error(a);
            }),
            (this.eventSource.onmessage = (a) => {
              n.next(a);
            }),
            () => {
              this.closeEventSource(), n.complete();
            }
          )
        );
      }
      destroySubscription() {
        Object.keys(this.subscriptions).length &&
          this.subscriptions.unsubscribe();
      }
      closeEventSource() {
        this.eventSource &&
          (this.eventSource.close(),
          (this.eventSource = null),
          this.subscriptions.unsubscribe());
      }
      isClaimEvents(e) {
        return py.includes(e);
      }
      getUsdEqAmount(e) {
        return !this.isClaimEvents(e.event) && e.data.isNativeToken
          ? e.data.amountPaid
          : e.data.usdEq;
      }
      static ɵfac = function (n) {
        return new (n || t)(We(bt));
      };
      static ɵprov = Me({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })();
var Zh = (t, i, e) => ({ wallet: t, token: i, amount: e });
function uy(t, i) {
  if (
    (t & 1 &&
      (c(0, "div", 7)(1, "p", 8),
      m(2),
      g(3, "trimAddress"),
      g(4, "numberFormat"),
      g(5, "significantDecimal"),
      g(6, "translate"),
      d()()),
    t & 2)
  ) {
    let e = i.$implicit,
      n = y();
    o(2),
      P(
        " ",
        q(
          6,
          8,
          "feature.text1",
          Ei(
            11,
            Zh,
            f(3, 1, e.walletAddress),
            f(4, 3, n.getAmount(e.totalToken)),
            q(5, 5, n.getAmount(e.usdEquivalent), 2)
          )
        ),
        " "
      );
  }
}
function gy(t, i) {
  if (
    (t & 1 &&
      (c(0, "div", 7)(1, "p", 8),
      m(2),
      g(3, "trimAddress"),
      g(4, "numberFormat"),
      g(5, "significantDecimal"),
      g(6, "translate"),
      d()()),
    t & 2)
  ) {
    let e = i.$implicit,
      n = y();
    o(2),
      P(
        " ",
        q(
          6,
          8,
          "feature.text1",
          Ei(
            11,
            Zh,
            f(3, 1, e.walletAddress),
            f(4, 3, n.getAmount(e.totalToken)),
            q(5, 5, n.getAmount(e.usdEquivalent), 2)
          )
        ),
        " "
      );
  }
}
var Jh = (() => {
  class t {
    TransactionService;
    platform_id;
    constructor(e, n) {
      (this.TransactionService = e),
        (this.platform_id = n),
        this.getTokenTransactions;
    }
    ngAfterViewInit() {
      H(this.platform_id) && this.getTokenTransactions();
    }
    getTokenTransactions() {
      return Ne(this, null, function* () {
        (yield this.TransactionService.getTransactions()).subscribe((e) => {
          this.TransactionService.setAllTransaction(e?.result?.data || []),
            this.TransactionService.startListner();
        });
      });
    }
    getAmount(e) {
      return Number(e);
    }
    get transactions() {
      return this.TransactionService.transactions.slice(0, 10);
    }
    ngOnDestroy() {
      this.TransactionService.destroySubscription(),
        this.TransactionService.closeEventSource();
    }
    static ɵfac = function (n) {
      return new (n || t)(w(Kh), w(j));
    };
    static ɵcmp = F({
      type: t,
      selectors: [["app-scroller"]],
      decls: 12,
      vars: 5,
      consts: [
        [1, "top-bar"],
        [1, "scroller"],
        [1, "track-title"],
        [1, "marquee"],
        [1, "track"],
        [1, "content"],
        ["class", "d-flex align-items-center", 4, "ngFor", "ngForOf"],
        [1, "d-flex", "align-items-center"],
        [1, "font-14", "fw-bold", "text-black", "m-0", "mx-2"],
      ],
      template: function (n, a) {
        n & 1 &&
          (c(0, "div", 0)(1, "div", 1)(2, "p", 2),
          m(3),
          g(4, "translate"),
          d(),
          c(5, "div", 3)(6, "div", 4)(7, "div", 5),
          A(8, uy, 7, 15, "div", 6),
          d()(),
          c(9, "div", 4)(10, "div", 5),
          A(11, gy, 7, 15, "div", 6),
          d()()()()()),
          n & 2 &&
            (o(3),
            _(f(4, 3, "feature.text_title")),
            o(5),
            u("ngForOf", a.transactions),
            o(3),
            u("ngForOf", a.transactions));
      },
      dependencies: [le, ma, Wl, $l, Y],
      styles: [
        ".top-bar[_ngcontent-%COMP%]{overflow:hidden;position:fixed;top:0;left:0;right:0;z-index:4;border-bottom:2px solid #000000;background:#fff}.top-bar[_ngcontent-%COMP%]   .track-title[_ngcontent-%COMP%]{color:#000;background:linear-gradient(96deg,#fff 70%,#18181800);height:39px;margin:0;display:flex;align-items:center;padding:0 100px 0 30px;font-size:12px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;position:absolute;z-index:2}@media screen and (max-width: 768px){.top-bar[_ngcontent-%COMP%]   .track-title[_ngcontent-%COMP%]{padding:0 70px 0 10px}}.top-bar[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%]{width:100%;overflow:hidden;white-space:nowrap;position:relative;display:flex;align-items:center;padding:0;height:39px}.top-bar[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%]   .marquee[_ngcontent-%COMP%]{position:relative;z-index:1;overflow:hidden;width:100%;display:flex;align-items:center;justify-content:flex-start}.top-bar[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%]   .marquee[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_marquee 38s linear infinite;will-change:transform}@media screen and (max-width: 576px){.top-bar[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%]   .marquee[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]{animation:marquee 52s linear infinite}}.top-bar[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%]   .marquee[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;align-items:center;font-family:DM Sans,sans-serif}@keyframes _ngcontent-%COMP%_marquee{0%{transform:translate(0)}to{transform:translate(-100%)}}@media screen and (max-width: 576px){  html[lang=ar] .top-bar .track-title{padding:0 17px 0 10px!important}}",
      ],
    });
  }
  return t;
})();
var _y = ["navigation"],
  em = (t) => ({ scrolled: t }),
  xy = () => ({ "width.px": "14", "height.px": "22" }),
  vy = () => ({ "width.px": 24, "height.px": 24 }),
  tm = (t) => ({ open: t }),
  yy = () => ({ "width.px": "20", "height.px": "20" }),
  im = (t) => ({ selected: t });
function by(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "a", 49),
      S("click", function (a) {
        M(e);
        let s = y();
        return L(s.addActive(a, "staking"));
      }),
      m(1),
      g(2, "translate"),
      d();
  }
  if (t & 2) {
    let e = y();
    de("routerLink", "/", e.currentLanguage, "/staking"),
      o(),
      _(f(2, 3, "top_navigation.nav_staking"));
  }
}
function Cy(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "a", 50),
      S("click", function (a) {
        M(e);
        let s = y();
        return L(s.addActive(a, "staking"));
      }),
      m(1),
      g(2, "translate"),
      d();
  }
  t & 2 && (o(), _(f(2, 1, "top_navigation.nav_staking")));
}
function wy(t, i) {
  if ((t & 1 && (c(0, "a", 51), m(1), g(2, "translate"), d()), t & 2)) {
    let e = y();
    Vt("href", "", e.evmSite, "/", e.currentLanguage, "/staking", W),
      o(),
      _(f(2, 4, "top_navigation.nav_staking"));
  }
}
function Ty(t, i) {
  if ((t & 1 && (c(0, "a", 51), m(1), g(2, "translate"), d()), t & 2)) {
    let e = y();
    de("href", "", e.evmSite, "/staking", W),
      o(),
      _(f(2, 3, "top_navigation.nav_staking"));
  }
}
function Sy(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "a", 52),
      S("click", function (a) {
        M(e);
        let s = y();
        return L(s.addActive(a, "news"));
      }),
      m(1),
      g(2, "translate"),
      d();
  }
  if (t & 2) {
    let e = y();
    de("routerLink", "/", e.currentLanguage, "/news"),
      o(),
      _(f(2, 3, "top_navigation.nav_news"));
  }
}
function ky(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "a", 53),
      S("click", function (a) {
        M(e);
        let s = y();
        return L(s.addActive(a, "news"));
      }),
      m(1),
      g(2, "translate"),
      d();
  }
  t & 2 && (o(), _(f(2, 1, "top_navigation.nav_news")));
}
function Ay(t, i) {
  if ((t & 1 && (c(0, "a", 54), m(1), g(2, "translate"), d()), t & 2)) {
    let e = y();
    Vt("href", "", e.evmSite, "/", e.currentLanguage, "/news", W),
      o(),
      _(f(2, 4, "top_navigation.nav_news"));
  }
}
function My(t, i) {
  if ((t & 1 && (c(0, "a", 54), m(1), g(2, "translate"), d()), t & 2)) {
    let e = y();
    de("href", "", e.evmSite, "/news", W),
      o(),
      _(f(2, 3, "top_navigation.nav_news"));
  }
}
function Ly(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "a", 55),
      S("click", function (a) {
        M(e);
        let s = y();
        return L(s.addActive(a, "blog"));
      }),
      m(1),
      g(2, "translate"),
      d();
  }
  if (t & 2) {
    let e = y();
    de("routerLink", "/", e.currentLanguage, "/blog"),
      o(),
      _(f(2, 3, "top_navigation.nav_blog"));
  }
}
function Dy(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "a", 56),
      S("click", function (a) {
        M(e);
        let s = y();
        return L(s.addActive(a, "blog"));
      }),
      m(1),
      g(2, "translate"),
      d();
  }
  t & 2 && (o(), _(f(2, 1, "top_navigation.nav_blog")));
}
function Ey(t, i) {
  if ((t & 1 && (c(0, "a", 57), m(1), g(2, "translate"), d()), t & 2)) {
    let e = y();
    Vt("href", "", e.evmSite, "/", e.currentLanguage, "/blog", W),
      o(),
      _(f(2, 4, "top_navigation.nav_blog"));
  }
}
function Oy(t, i) {
  if ((t & 1 && (c(0, "a", 57), m(1), g(2, "translate"), d()), t & 2)) {
    let e = y();
    de("href", "", e.evmSite, "/blog", W),
      o(),
      _(f(2, 3, "top_navigation.nav_blog"));
  }
}
function Py(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "a", 58),
      S("click", function (a) {
        let s = M(e).$implicit,
          r = y();
        return L(r.addActive(a, s.routeName));
      }),
      m(1),
      g(2, "translate"),
      d();
  }
  if (t & 2) {
    let e = i.$implicit,
      n = y();
    de(
      "routerLink",
      "/",
      n.currentLanguage === "en" ? "" : n.currentLanguage,
      ""
    ),
      Re("fragment", e.routeName),
      Re("title", e.routeName),
      o(),
      P("", f(2, 5, e.navName), " ");
  }
}
function Iy(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 59),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.showWidget("home"));
      }),
      m(1),
      g(2, "translate"),
      d();
  }
  if (t & 2) {
    let e = y();
    u("ngClass", e.currentLanguage), o(), _(f(2, 2, "widget.buy_now"));
  }
}
function Fy(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 59),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.disconnect());
      }),
      m(1),
      g(2, "trimAddress"),
      d();
  }
  if (t & 2) {
    let e = y();
    u("ngClass", e.currentLanguage), o(), _(f(2, 2, e.walletAddress));
  }
}
function Vy(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "li", 62),
      S("click", function () {
        let a = M(e).$implicit,
          s = y(2);
        return L(s.changeLanguage(a.value));
      }),
      c(1, "a", 63),
      S("click", function (a) {
        return M(e), L(a.preventDefault());
      }),
      T(2, "img", 64),
      c(3, "span"),
      m(4),
      d()()();
  }
  if (t & 2) {
    let e = i.$implicit,
      n = y(2);
    u("ngClass", V(7, im, n.selectedLanguage.value == e.value)),
      o(),
      Vt("href", "", e.value === "en" ? "" : "/" + e.value, "", n.route, "", W),
      o(),
      de("src", "./assets/images/flags/", e.flag, ".svg", W),
      o(2),
      _(e.native_name);
  }
}
function By(t, i) {
  if ((t & 1 && (c(0, "ul", 60), A(1, Vy, 5, 9, "li", 61), d()), t & 2)) {
    let e = y();
    o(), u("ngForOf", e.languagesList);
  }
}
function Ny(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "a", 65),
      S("click", function () {
        let a = M(e).$implicit,
          s = y();
        return L(s.vwoData(a.alt));
      }),
      T(1, "img", 66),
      d();
  }
  if (t & 2) {
    let e = i.$implicit;
    Re("href", e.link, W), o(), Re("src", e.img, W), Re("alt", e.alt);
  }
}
function Ry(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "a", 49),
      S("click", function (a) {
        M(e);
        let s = y();
        return L(s.addActive(a, "staking"));
      }),
      m(1),
      g(2, "translate"),
      d();
  }
  if (t & 2) {
    let e = y();
    de("routerLink", "/", e.currentLanguage, "/staking"),
      o(),
      _(f(2, 3, "top_navigation.nav_staking"));
  }
}
function Hy(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "a", 50),
      S("click", function (a) {
        M(e);
        let s = y();
        return L(s.addActive(a, "staking"));
      }),
      m(1),
      g(2, "translate"),
      d();
  }
  t & 2 && (o(), _(f(2, 1, "top_navigation.nav_staking")));
}
function zy(t, i) {
  if ((t & 1 && (c(0, "a", 51), m(1), g(2, "translate"), d()), t & 2)) {
    let e = y();
    de("href", "", e.evmSite, "/staking", W),
      o(),
      _(f(2, 3, "top_navigation.nav_staking"));
  }
}
function Gy(t, i) {
  if ((t & 1 && (c(0, "a", 51), m(1), g(2, "translate"), d()), t & 2)) {
    let e = y();
    Vt("href", "", e.evmSite, "/", e.currentLanguage, "/staking", W),
      o(),
      _(f(2, 4, "top_navigation.nav_staking"));
  }
}
function Wy(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "a", 52),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.openCloseMenu());
      }),
      m(1),
      g(2, "translate"),
      d();
  }
  if (t & 2) {
    let e = y();
    de("routerLink", "/", e.currentLanguage, "/news"),
      o(),
      _(f(2, 3, "top_navigation.nav_news"));
  }
}
function $y(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "a", 53),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.openCloseMenu());
      }),
      m(1),
      g(2, "translate"),
      d();
  }
  t & 2 && (o(), _(f(2, 1, "top_navigation.nav_news")));
}
function jy(t, i) {
  if ((t & 1 && (c(0, "a", 67), m(1), g(2, "translate"), d()), t & 2)) {
    let e = y();
    Vt("href", "", e.evmSite, "/", e.currentLanguage, "/news", W),
      o(),
      _(f(2, 4, "top_navigation.nav_news"));
  }
}
function Xy(t, i) {
  if ((t & 1 && (c(0, "a", 67), m(1), g(2, "translate"), d()), t & 2)) {
    let e = y();
    de("href", "", e.evmSite, "/news", W),
      o(),
      _(f(2, 3, "top_navigation.nav_news"));
  }
}
function qy(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "a", 55),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.openCloseMenu());
      }),
      m(1),
      g(2, "translate"),
      d();
  }
  if (t & 2) {
    let e = y();
    de("routerLink", "/", e.currentLanguage, "/blog"),
      o(),
      _(f(2, 3, "top_navigation.nav_blog"));
  }
}
function Yy(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "a", 56),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.openCloseMenu());
      }),
      m(1),
      g(2, "translate"),
      d();
  }
  t & 2 && (o(), _(f(2, 1, "top_navigation.nav_blog")));
}
function Uy(t, i) {
  if ((t & 1 && (c(0, "a", 68), m(1), g(2, "translate"), d()), t & 2)) {
    let e = y();
    Vt("href", "", e.evmSite, "/", e.currentLanguage, "/blog", W),
      o(),
      _(f(2, 4, "top_navigation.nav_blog"));
  }
}
function Qy(t, i) {
  if ((t & 1 && (c(0, "a", 68), m(1), g(2, "translate"), d()), t & 2)) {
    let e = y();
    de("href", "", e.evmSite, "/blog", W),
      o(),
      _(f(2, 3, "top_navigation.nav_blog"));
  }
}
function Ky(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "a", 69),
      S("click", function (a) {
        let s = M(e).$implicit,
          r = y();
        return r.addActive(a, s.routeName), L(r.openCloseMenu());
      }),
      m(1),
      g(2, "translate"),
      d();
  }
  if (t & 2) {
    let e = i.$implicit,
      n = y();
    de(
      "routerLink",
      "/",
      n.currentLanguage === "en" ? "" : n.currentLanguage,
      ""
    ),
      Re("fragment", e.routeName),
      Re("title", e.routeName),
      o(),
      P("", f(2, 5, e.navName), " ");
  }
}
function Zy(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "a", 70),
      S("click", function () {
        let a = M(e).$implicit,
          s = y();
        return L(s.vwoData(a.alt));
      }),
      T(1, "img", 66),
      d();
  }
  if (t & 2) {
    let e = i.$implicit;
    Re("href", e.link, W), o(), Re("src", e.img, W), Re("alt", e.alt);
  }
}
function Jy(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "li", 62),
      S("click", function () {
        let a = M(e).$implicit,
          s = y(2);
        return s.changeLanguage(a.value), L(s.openCloseMenu());
      }),
      c(1, "a", 72),
      S("click", function (a) {
        return M(e), L(a.preventDefault());
      }),
      T(2, "img", 64),
      c(3, "span"),
      m(4),
      d()()();
  }
  if (t & 2) {
    let e = i.$implicit,
      n = y(2);
    u("ngClass", V(7, im, n.selectedLanguage.value == e.value)),
      o(),
      Vt("href", "", e.value === "en" ? "" : "/" + e.value, "", n.route, "", W),
      o(),
      de("src", "./assets/images/flags/", e.flag, ".svg", W),
      o(2),
      _(e.native_name);
  }
}
function eb(t, i) {
  if ((t & 1 && (c(0, "ul", 71), A(1, Jy, 5, 9, "li", 61), d()), t & 2)) {
    let e = y();
    o(), u("ngForOf", e.languagesList);
  }
}
function tb(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 73),
      S("click", function () {
        M(e);
        let a = y();
        return a.showWidget("home"), L(a.openCloseMenu());
      }),
      m(1),
      g(2, "translate"),
      d();
  }
  t & 2 && (o(), _(f(2, 1, "widget.buy_now")));
}
function ib(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 73),
      S("click", function () {
        M(e);
        let a = y();
        return a.disconnect(), L(a.openCloseMenu());
      }),
      m(1),
      g(2, "trimAddress"),
      d();
  }
  if (t & 2) {
    let e = y();
    o(), _(f(2, 1, e.walletAddress));
  }
}
var nm = (() => {
  class t {
    _platformId;
    dom;
    location;
    eventService;
    translate;
    modalService;
    commonConnectService;
    router;
    navigation;
    subscription;
    isScrolled = !1;
    showMenu = !1;
    openMenu = !1;
    modalRef;
    hashKey = "";
    currentLanguage = "";
    languagesList = St;
    selectedLanguage = {};
    isSolBased = E.isSolBased;
    isEvmBased = E.isEvmBased;
    evmSite = E.evmSite;
    route;
    checkScroll() {
      this.isScrolled = window.pageYOffset >= 50;
    }
    navigations = [
      { routeName: "about", navName: "top_navigation.nav_about" },
      { routeName: "how-to-buy", navName: "top_navigation.nav_howtobuy" },
      { routeName: "tokenomics", navName: "top_navigation.nav_tokenomics" },
      { routeName: "faq", navName: "top_navigation.nav_faq" },
    ];
    social = [
      {
        img: "assets/images/svg-icons/social-icons/telegram.svg",
        alt: "telegram",
        link: "https://t.me/BTCHyper_meme",
      },
      {
        img: "assets/images/svg-icons/social-icons/twitter.svg",
        alt: "x",
        link: "https://x.com/BTCHyper_meme",
      },
    ];
    constructor(e, n, a, s, r, l, p, h) {
      (this._platformId = e),
        (this.dom = n),
        (this.location = a),
        (this.eventService = s),
        (this.translate = r),
        (this.modalService = l),
        (this.commonConnectService = p),
        (this.router = h),
        (this.subscription = this.translate.onLangChange.subscribe((x) => {
          (this.currentLanguage = x.lang),
            (this.selectedLanguage = this.languagesList.filter(
              (v) => v.value === this.currentLanguage
            )[0]),
            H(this._platformId) &&
              localStorage.setItem("lang", this.currentLanguage);
        })),
        this.router.events.pipe($t((x) => x instanceof Ii)).subscribe({
          next: (x) => {
            this.checkRoute(x.url);
          },
        });
    }
    ngOnInit() {
      this.checkRoute(this.router.url);
    }
    checkRoute(e) {
      if (e.includes("staking")) {
        this.route = "/staking";
        return;
      }
      if (e.includes("news")) {
        (this.route = "/news"),
          e.includes("news/") && (this.route += "/" + e.split("news/")[1]);
        return;
      }
      if (e.includes("blog")) {
        (this.route = "/blog"),
          e.includes("blog/") && (this.route += "/" + e.split("blog/")[1]);
        return;
      }
      this.route = "";
    }
    ngAfterViewInit() {
      if (H(this._platformId)) {
        this.currentLanguage ||
          ((this.currentLanguage = localStorage.getItem("lang") || "en"),
          (this.selectedLanguage = this.languagesList.filter(
            (n) => n.value === this.currentLanguage
          )[0]));
        let e =
          window.location.pathname.split("/")[2] ||
          window.location.pathname.split("/")[1] ||
          "";
        (this.hashKey = window.location.hash
          ? window.location.hash.substring(1, window.location.hash.length)
          : ""),
          setTimeout(
            () => this.addActive(this.navigation.nativeElement, e, !0),
            1e3
          );
      }
    }
    changeLanguage(e) {
      this.currentLanguage !== e &&
        ((this.currentLanguage = e),
        this.translate.use(this.currentLanguage),
        this.eventService.setLang(this.currentLanguage),
        (this.selectedLanguage = this.languagesList.filter(
          (n) => n.value === this.currentLanguage
        )[0]),
        this.replaceURL());
    }
    replaceURL() {
      let e = this.location.path().split("/");
      (e = e.filter((a) => a === this.currentLanguage || Rs.includes(a))),
        this.currentLanguage !== "en" && e.unshift(this.currentLanguage);
      let n =
        this.hashKey && !Rs.includes(this.hashKey)
          ? e.join("/") + `#${this.hashKey}`
          : e.join("/");
      this.location.go("/" + n);
    }
    navigateToSection(e) {
      H(this._platformId) &&
        window.location.pathname.includes("dashboard") &&
        e &&
        e != "" &&
        ((window.location.hash = this.hashKey),
        (window.location.pathname = window.location.pathname.replace(
          "staking",
          ""
        )));
    }
    addActive(e, n, a = !1) {
      a || (this.hashKey = n && n != "staking" ? n : ""),
        (e.currentTarget ? e.currentTarget : e).parentNode
          .querySelectorAll("a")
          .forEach((l) => {
            l === e.target || l.title === this.hashKey
              ? l.classList.add("active")
              : l.classList.remove("active");
          }),
        n && this.navigateToSection(this.hashKey);
    }
    get walletAddress() {
      return this.commonConnectService.walletAddress;
    }
    showWidget(e) {
      this.commonConnectService.vwoData("walletConnectionPlacement", {
        placement: "Navbar",
      }),
        window.location.pathname.includes("dashboard")
          ? (window.scroll({ top: 0 }), this.connectModal())
          : this.eventService.showBuyWidget(e);
    }
    connectModal() {
      this.modalRef = this.modalService.show(Yt, {
        class: "modal-xs modal-dialog-centered",
        backdrop: "static",
      });
    }
    disconnect() {
      this.commonConnectService.disconnectWallet();
    }
    openCloseMenu() {
      this.showMenu
        ? ((this.openMenu = !this.openMenu),
          this.dom.body.classList.remove("modal-open"),
          setTimeout(() => (this.showMenu = !this.showMenu), 500))
        : ((this.showMenu = !this.showMenu),
          this.dom.body.classList.add("modal-open"),
          setTimeout(() => (this.openMenu = !this.openMenu), 400));
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    vwoData(e) {
      this.commonConnectService.vwoData("socials", {
        clickedXButton: e === "x",
        clickedInstagramButton: e === "telegram",
      });
    }
    static ɵfac = function (n) {
      return new (n || t)(
        w(j),
        w(Oi),
        w(qo),
        w(Ye),
        w(pe),
        w(wt),
        w(fe),
        w(Tt)
      );
    };
    static ɵcmp = F({
      type: t,
      selectors: [["app-header"]],
      viewQuery: function (n, a) {
        if ((n & 1 && $e(_y, 5), n & 2)) {
          let s;
          He((s = ze())) && (a.navigation = s.first);
        }
      },
      hostBindings: function (n, a) {
        n & 1 &&
          S(
            "scroll",
            function (r) {
              return a.checkScroll(r);
            },
            !1,
            Te
          );
      },
      decls: 75,
      vars: 65,
      consts: [
        ["navigation", ""],
        [1, "header-wraper"],
        [1, "header", "d-none", "d-lg-block", 3, "ngClass"],
        [
          1,
          "d-flex",
          "justify-content-between",
          "align-items-center",
          "w-100",
          "menu-header",
        ],
        [1, "container"],
        [1, "d-flex", "justify-content-between", "align-items-center", "w-100"],
        [
          1,
          "mx-0",
          "cursor-pointer",
          "d-flex",
          "align-items-center",
          "p-0",
          3,
          "click",
          "routerLink",
        ],
        ["src", "/assets/images/svg-icons/logo.svg", "alt", "logo"],
        [
          1,
          "menu-item",
          "d-flex",
          "align-items-center",
          "justify-content-center",
          3,
          "ngClass",
        ],
        ["title", "staking", 3, "routerLink", "click", 4, "ngIf"],
        ["routerLink", "/staking", "title", "staking", 3, "click", 4, "ngIf"],
        ["target", "_blank", "title", "staking", 3, "href", 4, "ngIf"],
        ["title", "news", 3, "routerLink", "click", 4, "ngIf"],
        ["routerLink", "/news", "title", "news", 3, "click", 4, "ngIf"],
        ["target", "_blank", "title", "news", 3, "href", 4, "ngIf"],
        ["title", "blog", 3, "routerLink", "click", 4, "ngIf"],
        ["routerLink", "/blog", "title", "blog", 3, "click", 4, "ngIf"],
        ["target", "_blank", "title", "blog", 3, "href", 4, "ngIf"],
        [3, "routerLink", "fragment", "title", "click", 4, "ngFor", "ngForOf"],
        [1, "menu-item", "d-flex", "align-items-center"],
        [
          "class",
          "btn btn-primary buy-now border-0 ms-2",
          3,
          "ngClass",
          "click",
          4,
          "ngIf",
        ],
        ["dropdown", "", 1, "btn-group", "language", "ms-2"],
        [
          "dropdownToggle",
          "",
          "type",
          "button",
          1,
          "dropdown-toggle",
          "amountType",
          "d-flex",
          "align-items-center",
        ],
        [1, "font-12", "text-uppercase", "fw-semibold"],
        [
          "src",
          "./assets/images/svg-icons/angle-black.svg",
          1,
          "dropdown",
          "ms-2",
          3,
          "svgStyle",
        ],
        [
          "class",
          "dropdown-menu dropdown-menu-right",
          "role",
          "menu",
          4,
          "dropdownMenu",
        ],
        [1, "ms-2", "social-wrap"],
        [
          "class",
          "link m-0",
          "target",
          "_blank",
          3,
          "href",
          "click",
          4,
          "ngFor",
          "ngForOf",
        ],
        [1, "header", "d-block", "d-lg-none", 3, "ngClass"],
        [
          1,
          "d-flex",
          "justify-content-between",
          "align-items-center",
          "flex-grow-1",
          "w-100",
        ],
        [1, "d-flex", "justify-content-start", "align-items-center"],
        [1, "cursor-pointer", "p-0", 3, "routerLink"],
        [1, "menu-btn", 3, "click"],
        [3, "src", "svgStyle"],
        [1, "menu-overlay", 3, "ngClass"],
        [1, "sub-menu", "pull-left", 3, "ngClass"],
        [
          1,
          "d-flex",
          "flex-column",
          "justify-content-start",
          "align-items-start",
          "w-100",
        ],
        ["title", "news", 3, "href", 4, "ngIf"],
        ["title", "blog", 3, "href", 4, "ngIf"],
        [
          "class",
          "",
          3,
          "routerLink",
          "fragment",
          "title",
          "click",
          4,
          "ngFor",
          "ngForOf",
        ],
        [
          1,
          "social-wrap",
          "d-flex",
          "align-items-center",
          "justify-content-center",
        ],
        [
          "target",
          "_blank",
          "class",
          "m-0",
          3,
          "href",
          "click",
          4,
          "ngFor",
          "ngForOf",
        ],
        ["dropdown", "", 1, "btn-group", "language", "my-2"],
        [
          "dropdownToggle",
          "",
          "type",
          "button",
          1,
          "dropdown-toggle",
          "amountType",
          "d-flex",
          "align-items-center",
          "justify-content-between",
        ],
        [1, "ms-1", "font-16", "text-uppercase", "fw-semi-bold"],
        [
          "src",
          "./assets/images/svg-icons/angle-black.svg",
          1,
          "dropdown",
          3,
          "svgStyle",
        ],
        [
          "class",
          "dropdown-menu dropdown-menu-left",
          "role",
          "menu",
          4,
          "dropdownMenu",
        ],
        ["class", "btn btn-secondary mx-auto", 3, "click", 4, "ngIf"],
        ["title", "staking", 3, "click", "routerLink"],
        ["routerLink", "/staking", "title", "staking", 3, "click"],
        ["target", "_blank", "title", "staking", 3, "href"],
        ["title", "news", 3, "click", "routerLink"],
        ["routerLink", "/news", "title", "news", 3, "click"],
        ["target", "_blank", "title", "news", 3, "href"],
        ["title", "blog", 3, "click", "routerLink"],
        ["routerLink", "/blog", "title", "blog", 3, "click"],
        ["target", "_blank", "title", "blog", 3, "href"],
        [3, "click", "routerLink", "fragment", "title"],
        [
          1,
          "btn",
          "btn-primary",
          "buy-now",
          "border-0",
          "ms-2",
          3,
          "click",
          "ngClass",
        ],
        ["role", "menu", 1, "dropdown-menu", "dropdown-menu-right"],
        ["role", "menuitem", 3, "ngClass", "click", 4, "ngFor", "ngForOf"],
        ["role", "menuitem", 3, "click", "ngClass"],
        [1, "p-2", "cursor-pointer", "w-100", 3, "click", "href"],
        ["alt", "flag-icon", "loading", "lazy", 3, "src"],
        ["target", "_blank", 1, "link", "m-0", 3, "click", "href"],
        ["loading", "lazy", 3, "src", "alt"],
        ["title", "news", 3, "href"],
        ["title", "blog", 3, "href"],
        [1, "", 3, "click", "routerLink", "fragment", "title"],
        ["target", "_blank", 1, "m-0", 3, "click", "href"],
        ["role", "menu", 1, "dropdown-menu", "dropdown-menu-left"],
        [1, "p-2", "mb-0", "cursor-pointer", "w-100", 3, "click", "href"],
        [1, "btn", "btn-secondary", "mx-auto", 3, "click"],
      ],
      template: function (n, a) {
        if (n & 1) {
          let s = O();
          c(0, "div", 1),
            T(1, "app-scroller"),
            c(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6, 0),
            S("click", function (l) {
              return M(s), a.navigateToSection("home"), L(a.addActive(l, ""));
            }),
            T(8, "img", 7),
            d(),
            c(9, "div", 8),
            A(10, by, 3, 5, "a", 9)(11, Cy, 3, 3, "a", 10)(
              12,
              wy,
              3,
              6,
              "a",
              11
            )(13, Ty, 3, 5, "a", 11)(14, Sy, 3, 5, "a", 12)(
              15,
              ky,
              3,
              3,
              "a",
              13
            )(16, Ay, 3, 6, "a", 14)(17, My, 3, 5, "a", 14)(
              18,
              Ly,
              3,
              5,
              "a",
              15
            )(19, Dy, 3, 3, "a", 16)(20, Ey, 3, 6, "a", 17)(
              21,
              Oy,
              3,
              5,
              "a",
              17
            )(22, Py, 3, 7, "a", 18),
            c(23, "a", 19),
            m(24),
            g(25, "translate"),
            d()(),
            c(26, "div", 20),
            A(27, Iy, 3, 4, "div", 21)(28, Fy, 3, 4, "div", 21),
            c(29, "div", 22)(30, "div", 23)(31, "div", 24),
            m(32),
            d(),
            T(33, "svg-icon", 25),
            d(),
            A(34, By, 2, 1, "ul", 26),
            d(),
            c(35, "span", 27),
            A(36, Ny, 2, 3, "a", 28),
            d()()()()()()(),
            c(37, "div", 29)(38, "div", 30)(39, "div", 31)(40, "a", 32, 0),
            T(42, "img", 7),
            d()(),
            c(43, "div", 33),
            S("click", function () {
              return M(s), L(a.openCloseMenu());
            }),
            T(44, "svg-icon", 34),
            d()(),
            c(45, "div", 35)(46, "div", 36)(47, "div", 37),
            A(48, Ry, 3, 5, "a", 9)(49, Hy, 3, 3, "a", 10)(
              50,
              zy,
              3,
              5,
              "a",
              11
            )(51, Gy, 3, 6, "a", 11)(52, Wy, 3, 5, "a", 12)(
              53,
              $y,
              3,
              3,
              "a",
              13
            )(54, jy, 3, 6, "a", 38)(55, Xy, 3, 5, "a", 38)(
              56,
              qy,
              3,
              5,
              "a",
              15
            )(57, Yy, 3, 3, "a", 16)(58, Uy, 3, 6, "a", 39)(
              59,
              Qy,
              3,
              5,
              "a",
              39
            )(60, Ky, 3, 7, "a", 40),
            c(61, "a", 19),
            m(62),
            g(63, "translate"),
            d()(),
            c(64, "span", 41),
            A(65, Zy, 2, 3, "a", 42),
            d(),
            c(66, "div", 43)(67, "div", 44)(68, "div")(69, "span", 45),
            m(70),
            d()(),
            T(71, "svg-icon", 46),
            d(),
            A(72, eb, 2, 1, "ul", 47),
            d(),
            A(73, tb, 3, 3, "div", 48)(74, ib, 3, 3, "div", 48),
            d()()();
        }
        n & 2 &&
          (o(2),
          u("ngClass", V(54, em, a.isScrolled)),
          o(4),
          de(
            "routerLink",
            "/",
            a.currentLanguage === "en" ? "" : a.currentLanguage,
            "/"
          ),
          o(3),
          u("ngClass", a.currentLanguage),
          o(),
          u("ngIf", a.isEvmBased && a.currentLanguage !== "en"),
          o(),
          u("ngIf", a.isEvmBased && a.currentLanguage === "en"),
          o(),
          u("ngIf", a.isSolBased && a.currentLanguage !== "en"),
          o(),
          u("ngIf", a.isSolBased && a.currentLanguage === "en"),
          o(),
          u("ngIf", a.isEvmBased && a.currentLanguage !== "en"),
          o(),
          u("ngIf", a.isEvmBased && a.currentLanguage == "en"),
          o(),
          u("ngIf", a.isSolBased),
          o(),
          u("ngIf", a.isSolBased && a.currentLanguage == "en"),
          o(),
          u("ngIf", a.isEvmBased && a.currentLanguage !== "en"),
          o(),
          u("ngIf", a.isEvmBased && a.currentLanguage == "en"),
          o(),
          u("ngIf", a.isSolBased),
          o(),
          u("ngIf", a.isSolBased && a.currentLanguage == "en"),
          o(),
          u("ngForOf", a.navigations),
          o(2),
          _(f(25, 50, "misc.whitepaper")),
          o(3),
          u("ngIf", !a.walletAddress),
          o(),
          u("ngIf", a.walletAddress),
          o(4),
          _(a.selectedLanguage.value),
          o(),
          u("svgStyle", xe(56, xy)),
          o(3),
          u("ngForOf", a.social),
          o(),
          u("ngClass", V(57, em, a.isScrolled)),
          o(3),
          de("routerLink", "/", a.currentLanguage, "/"),
          o(4),
          de(
            "src",
            "./assets/images/svg-icons/",
            a.showMenu ? "close-white" : "burger-icon",
            ".svg"
          ),
          u("svgStyle", xe(59, vy)),
          o(),
          u("ngClass", V(60, tm, a.showMenu)),
          o(),
          u("ngClass", V(62, tm, a.openMenu)),
          o(2),
          u("ngIf", a.isEvmBased && a.currentLanguage !== "en"),
          o(),
          u("ngIf", a.isEvmBased && a.currentLanguage === "en"),
          o(),
          u("ngIf", a.isSolBased && a.currentLanguage == "en"),
          o(),
          u("ngIf", a.isSolBased && a.currentLanguage !== "en"),
          o(),
          u("ngIf", a.isEvmBased && a.currentLanguage !== "en"),
          o(),
          u("ngIf", a.isEvmBased && a.currentLanguage === "en"),
          o(),
          u("ngIf", a.isSolBased && a.currentLanguage !== "en"),
          o(),
          u("ngIf", a.isSolBased && a.currentLanguage === "en"),
          o(),
          u("ngIf", a.isEvmBased && a.currentLanguage !== "en"),
          o(),
          u("ngIf", a.isEvmBased && a.currentLanguage === "en"),
          o(),
          u("ngIf", a.isSolBased && a.currentLanguage !== "en"),
          o(),
          u("ngIf", a.isSolBased && a.currentLanguage === "en"),
          o(),
          u("ngForOf", a.navigations),
          o(2),
          _(f(63, 52, "misc.whitepaper")),
          o(3),
          u("ngForOf", a.social),
          o(5),
          _(a.selectedLanguage.value),
          o(),
          u("svgStyle", xe(64, yy)),
          o(2),
          u("ngIf", !a.walletAddress),
          o(),
          u("ngIf", a.walletAddress));
      },
      dependencies: [yt, le, X, Fi, qe, gs, fs, Yn, Jh, ma, Y],
      styles: [
        ".header[_ngcontent-%COMP%]{position:fixed;left:0;top:41px;width:100%;z-index:5;padding:12px 0;background:#fff}.header.scrolled[_ngcontent-%COMP%]{box-shadow:0 4px 8px #0000,0 6px 20px #0000001f}@media screen and (max-width: 576px){.header[_ngcontent-%COMP%]{padding:12px}}.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:10px 5px;color:#000;cursor:pointer;text-decoration:none;text-transform:uppercase;font-weight:600;font-family:Inter,sans-serif;font-size:14px}@media screen and (max-width: 576px){.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0}}.header[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ffa231}.header[_ngcontent-%COMP%]   .es[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .es.btn[_ngcontent-%COMP%]{font-size:10.5px}.header[_ngcontent-%COMP%]   .cz[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .cz.btn[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .el[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .el.btn[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .it[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .it.btn[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .pt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .pt.btn[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .ro[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .ro.btn[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .sk[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .sk.btn[_ngcontent-%COMP%]{font-size:11.5px}.header[_ngcontent-%COMP%]   .de[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .de.btn[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .tr.btn[_ngcontent-%COMP%]{font-size:12px}@media screen and (max-width: 576px){.header[_ngcontent-%COMP%]   .language[_ngcontent-%COMP%]{width:100%;border:1px solid #000000;padding:10px;border-radius:0}}.header[_ngcontent-%COMP%]   .dropdown-menu.show[_ngcontent-%COMP%]{margin-top:15px}@media screen and (max-width: 576px){.header[_ngcontent-%COMP%]   .dropdown-menu.show[_ngcontent-%COMP%]{margin-top:3px;width:100%;border:0;border-radius:0}}.header[_ngcontent-%COMP%]   .buy-now[_ngcontent-%COMP%]{box-shadow:none!important;font-weight:600!important}.header[_ngcontent-%COMP%]   .social-wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border-bottom:unset!important;width:unset!important}.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]{background:#ffa231;padding:9px;border-radius:8px}.header[_ngcontent-%COMP%]   .menu-overlay[_ngcontent-%COMP%]{background:#000000bf;position:fixed;width:100%;height:calc(100vh - 106px);top:106px;left:100%;display:flex;justify-content:flex-end;opacity:0;transition:opacity .3s linear;transition-delay:.1s}.header[_ngcontent-%COMP%]   .menu-overlay.open[_ngcontent-%COMP%]{opacity:1;left:0}.header[_ngcontent-%COMP%]   .menu-overlay[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]{height:100vh;background:#fff;width:100%;padding:20px;position:relative;transition:left .4s linear;left:100%;top:0;overflow-y:auto;overflow-x:hidden}.header[_ngcontent-%COMP%]   .menu-overlay[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;margin-bottom:10px;cursor:pointer;border-bottom:1px solid rgba(200,200,200,.49);text-decoration:none;color:#000;text-transform:uppercase;font-size:17px}.header[_ngcontent-%COMP%]   .menu-overlay[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .menu-overlay[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#000}.header[_ngcontent-%COMP%]   .menu-overlay[_ngcontent-%COMP%]   .sub-menu.open[_ngcontent-%COMP%]{left:0}.header[_ngcontent-%COMP%]   .menu-overlay[_ngcontent-%COMP%]   .sub-menu.open[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{opacity:1;color:#000}",
      ],
    });
  }
  return t;
})();
var ab = (t) => ({ year: t });
function sb(t, i) {
  if ((t & 1 && (c(0, "a", 7), m(1), g(2, "translate"), d()), t & 2)) {
    let e = i.$implicit;
    u("routerLink", e.link), o(), P(" ", f(2, 2, e.title), " ");
  }
}
var am = (() => {
  class t {
    translate;
    _platformId;
    currentLanguage = "";
    currentYear = 2025;
    links = [
      { title: "top_navigation.nav_about", routeName: "about" },
      { title: "top_navigation.nav_howtobuy", routeName: "how-to-buy" },
      { title: "top_navigation.nav_roadmap", routeName: "roadmap" },
      { title: "top_navigation.nav_faq", routeName: "faq" },
    ];
    items = [
      {
        title: "footer_navigation.terms",
        link: "/assets/documents/term-conditions.pdf",
      },
      {
        title: "footer_navigation.privacy",
        link: "/assets/documents/privacy-policy.pdf",
      },
      {
        title: "footer_navigation.cookies",
        link: "/assets/documents/cookies.pdf",
      },
    ];
    social = [
      {
        img: "assets/images/svg-icons/social-icons/telegram.svg",
        alt: "telegram",
        link: "https://t.me/BTCHyper_meme",
      },
      {
        img: "assets/images/svg-icons/social-icons/twitter.svg",
        alt: "x",
        link: "https://x.com/BTCHyper_meme",
      },
    ];
    subscription;
    constructor(e, n) {
      (this.translate = e),
        (this._platformId = n),
        (this.subscription = this.translate.onLangChange.subscribe((a) => {
          this.currentLanguage = a.lang;
        }));
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    ngOnInit() {
      H(this._platformId) && (this.currentYear = new Date().getFullYear());
    }
    static ɵfac = function (n) {
      return new (n || t)(w(pe), w(j));
    };
    static ɵcmp = F({
      type: t,
      selectors: [["app-footer"]],
      decls: 16,
      vars: 13,
      consts: [
        ["id", "footer", 1, "footer"],
        [1, "container"],
        [1, "disclaimer", "text-center"],
        [1, "d-flex", "justify-content-center", "gap-3", "flex-wrap"],
        [
          "class",
          "footer-link text-white fw-medium text-decoration-underline",
          "target",
          "_blank",
          3,
          "routerLink",
          4,
          "ngFor",
          "ngForOf",
        ],
        [1, "mt-4", "d-flex", "justify-content-center"],
        [
          "src",
          "/assets/images/webp/logo-white.webp",
          "alt",
          "BTC Hyper Logo",
          "loading",
          "lazy",
        ],
        [
          "target",
          "_blank",
          1,
          "footer-link",
          "text-white",
          "fw-medium",
          "text-decoration-underline",
          3,
          "routerLink",
        ],
      ],
      template: function (n, a) {
        n & 1 &&
          (c(0, "section", 0)(1, "div", 1)(2, "p", 2)(3, "span"),
          m(4),
          g(5, "translate"),
          d(),
          c(6, "span"),
          m(7),
          g(8, "translate"),
          d(),
          c(9, "span"),
          m(10),
          g(11, "translate"),
          d()(),
          c(12, "div", 3),
          A(13, sb, 3, 4, "a", 4),
          d(),
          c(14, "div", 5),
          T(15, "img", 6),
          d()()()),
          n & 2 &&
            (o(4),
            _(f(5, 4, "footer_navigation.disclaimer")),
            o(3),
            _(f(8, 6, "footer_navigation.disclaimer_text")),
            o(3),
            _(
              q(
                11,
                8,
                "footer_navigation.disclaimer_text1",
                V(11, ab, a.currentYear)
              )
            ),
            o(3),
            u("ngForOf", a.items));
      },
      dependencies: [le, Fi, Y],
      styles: [
        ".footer[_ngcontent-%COMP%]{padding:60px 0;background:linear-gradient(0deg,#000,#000);min-height:200px}.footer[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]{font-size:12px;font-weight:700;text-transform:uppercase;color:#fff}.footer[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}.footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:38px}",
      ],
    });
  }
  return t;
})();
function ob(t, i) {
  if ((t & 1 && T(0, "notif-library", 1), t & 2)) {
    let e = y();
    Re("sseUrl", e.notificationUrl),
      u("timeout", e.notificationFadeOutTime)("showLogo", !1);
  }
}
var Mo = (() => {
  class t {
    platformId;
    window;
    route;
    router;
    translate;
    commonConnectService;
    lang;
    notificationUrl = E.sseUrl;
    isProduction = E.production;
    isLoaded = !1;
    notificationFadeOutTime = E.notificationTimeout;
    viewportScroller = oi(Qo);
    reachedThresholds = { 25: !1, 50: !1, 75: !1, 100: !1 };
    constructor(e, n, a, s, r, l) {
      (this.platformId = e),
        (this.window = n),
        (this.route = a),
        (this.router = s),
        (this.translate = r),
        (this.commonConnectService = l),
        this.translate.setDefaultLang("en"),
        this.router.events.pipe($t((p) => p instanceof Ii)).subscribe((p) => {
          let h = p.urlAfterRedirects.split("/")[1];
          (h = h.split("#")[0]),
            (h = h.split("?")[0]),
            h && Al(h) ? (this.lang = h) : (this.lang = "en"),
            this.translate.use(this.lang);
        }),
        this.route.fragment.subscribe((p) => {
          p && setTimeout(() => this.viewportScroller.scrollToAnchor(p), 1e3);
        });
    }
    ngAfterViewInit() {
      H(this.platformId) && (this.isLoaded = !0);
    }
    onWindowScroll() {
      let e = window.scrollY,
        n = window.innerHeight,
        a = document.body.scrollHeight,
        s = ((e + n) / a) * 100;
      [25, 50, 75, 100].forEach((r) => {
        s >= r &&
          !this.reachedThresholds[r] &&
          (this.commonConnectService.vwoData("pageScrolled", {
            depth: `${r}%`,
          }),
          (this.reachedThresholds[r] = !0));
      });
    }
    static ɵfac = function (n) {
      return new (n || t)(w(j), w(ca), w(ul), w(Tt), w(pe), w(fe));
    };
    static ɵcmp = F({
      type: t,
      selectors: [["app-language"]],
      hostBindings: function (n, a) {
        n & 1 &&
          S(
            "scroll",
            function () {
              return a.onWindowScroll();
            },
            !1,
            Te
          );
      },
      decls: 4,
      vars: 1,
      consts: [
        [
          "position",
          "bottom-right",
          "mobilePosition",
          "bottom",
          "className",
          "notif-custom-class",
          3,
          "timeout",
          "showLogo",
          "sseUrl",
          4,
          "ngIf",
        ],
        [
          "position",
          "bottom-right",
          "mobilePosition",
          "bottom",
          "className",
          "notif-custom-class",
          3,
          "timeout",
          "showLogo",
          "sseUrl",
        ],
      ],
      template: function (n, a) {
        n & 1 &&
          (A(0, ob, 1, 3, "notif-library", 0),
          T(1, "app-header")(2, "router-outlet")(3, "app-footer")),
          n & 2 && u("ngIf", a.isLoaded && a.isProduction);
      },
      dependencies: [X, ra, Sh, nm, am],
    });
  }
  return t;
})();
function lb(t, i) {
  if ((t & 1 && (c(0, "h4", 3), m(1), g(2, "translate"), d()), t & 2)) {
    let e = y();
    o(),
      P(
        " ",
        f(
          2,
          1,
          e.isStake ? "staking.claim_stake_title" : "staking.withdraw_title"
        ),
        " "
      );
  }
}
function cb(t, i) {
  t & 1 && (c(0, "h4", 3), m(1), g(2, "translate"), d()),
    t & 2 && (o(), _(f(2, 1, "widget.claim_title")));
}
function db(t, i) {
  t & 1 && (c(0, "h4", 3), m(1), g(2, "translate"), d()),
    t & 2 && (o(), _(f(2, 1, "staking.claim_inprogress_title")));
}
function pb(t, i) {
  t & 1 && (c(0, "h4", 3), m(1), g(2, "translate"), d()),
    t & 2 && (o(), _(f(2, 1, "staking.claim_success_title")));
}
function hb(t, i) {
  t & 1 && (c(0, "h4", 3), m(1), g(2, "translate"), d()),
    t & 2 && (o(), _(f(2, 1, "staking.stake_transaction_success")));
}
function mb(t, i) {
  t & 1 &&
    (c(0, "div", 4),
    T(1, "img", 5),
    c(2, "p", 6),
    m(3),
    g(4, "translate"),
    d()()),
    t & 2 && (o(3), _(f(4, 1, "staking.withdraw_inprogress")));
}
function ub(t, i) {
  t & 1 &&
    (c(0, "div", 4),
    T(1, "img", 5),
    c(2, "p", 6),
    m(3),
    g(4, "translate"),
    d()()),
    t & 2 && (o(3), _(f(4, 1, "staking.claim_stake_desc")));
}
function gb(t, i) {
  t & 1 &&
    (c(0, "div", 4),
    T(1, "img", 5),
    c(2, "p", 6),
    m(3),
    g(4, "translate"),
    d()()),
    t & 2 && (o(3), _(f(4, 1, "widget.claim_help")));
}
function fb(t, i) {
  t & 1 &&
    (c(0, "div", 4),
    T(1, "img", 5),
    c(2, "p", 6),
    m(3),
    g(4, "translate"),
    d()()),
    t & 2 && (o(3), _(f(4, 1, "staking.claim_inprogress")));
}
function _b(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 4),
      T(1, "img", 7),
      c(2, "div", 6),
      m(3),
      g(4, "translate"),
      d(),
      c(5, "a", 8),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.modalRef.hide());
      }),
      m(6),
      g(7, "translate"),
      d()();
  }
  if (t & 2) {
    let e = y();
    o(3),
      _(
        f(
          4,
          4,
          e.isStake
            ? "staking.stake_claim_success"
            : e.isWithdraw
            ? "staking.withdraw_success"
            : "staking.claim_success"
        )
      ),
      o(2),
      de("href", "", e.lang, "/staking", W),
      o(),
      _(f(7, 6, "misc.close"));
  }
}
function xb(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 4),
      T(1, "img", 9),
      c(2, "div", 6),
      m(3),
      g(4, "translate"),
      d(),
      c(5, "div", 10)(6, "button", 11),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.modalRef.hide());
      }),
      m(7),
      g(8, "translate"),
      d()()();
  }
  t & 2 &&
    (o(3),
    _(f(4, 2, "staking.transaction_rejected")),
    o(4),
    _(f(8, 4, "misc.close")));
}
var Cs = (() => {
  class t {
    eventService;
    modalRef;
    commonConnectService;
    translate;
    SwapStatus = ce;
    isStake = !1;
    lang = "en";
    isWithdraw = !1;
    constructor(e, n, a, s) {
      (this.eventService = e),
        (this.modalRef = n),
        (this.commonConnectService = a),
        (this.translate = s),
        this.eventService.getLang().subscribe((r) => {
          this.lang = r || "en";
        }),
        this.translate.onLangChange.subscribe((r) => {
          this.lang = r.lang;
        });
    }
    get status() {
      return this.commonConnectService.swapStatus;
    }
    static ɵfac = function (n) {
      return new (n || t)(w(Ye), w(rt), w(fe), w(pe));
    };
    static ɵcmp = F({
      type: t,
      selectors: [["app-claim"]],
      decls: 12,
      vars: 11,
      consts: [
        [1, "modal-header"],
        ["class", "modal-title text-center", 4, "ngIf"],
        ["class", "modal-body text-center", 4, "ngIf"],
        [1, "modal-title", "text-center"],
        [1, "modal-body", "text-center"],
        [
          "src",
          "/assets/images/popup-icons/progress.svg",
          "alt",
          "failed",
          1,
          "statusIcon",
        ],
        [1, "text-center", "mb-3", "font-sm-15", "text-light"],
        [
          "src",
          "/assets/images/popup-icons/success.svg",
          "alt",
          "complete",
          1,
          "statusIcon",
        ],
        [
          "type",
          "button",
          1,
          "btn",
          "btn-primary",
          "fs-7",
          "w-auto",
          3,
          "click",
          "href",
        ],
        [
          "src",
          "/assets/images/popup-icons/error.svg",
          "alt",
          "failed",
          1,
          "statusIcon",
        ],
        [1, "footer"],
        ["type", "button", 1, "btn", "btn-primary", "fs-7", "w-50", 3, "click"],
      ],
      template: function (n, a) {
        n & 1 &&
          (c(0, "div", 0),
          A(1, lb, 3, 3, "h4", 1)(2, cb, 3, 3, "h4", 1)(3, db, 3, 3, "h4", 1)(
            4,
            pb,
            3,
            3,
            "h4",
            1
          )(5, hb, 3, 3, "h4", 1),
          d(),
          A(6, mb, 5, 3, "div", 2)(7, ub, 5, 3, "div", 2)(
            8,
            gb,
            5,
            3,
            "div",
            2
          )(9, fb, 5, 3, "div", 2)(10, _b, 8, 8, "div", 2)(
            11,
            xb,
            9,
            6,
            "div",
            2
          )),
          n & 2 &&
            (o(),
            u(
              "ngIf",
              a.status !== a.SwapStatus.complete && (a.isStake || a.isWithdraw)
            ),
            o(),
            u(
              "ngIf",
              a.status == a.SwapStatus.not_started &&
                !a.isStake &&
                !a.isWithdraw
            ),
            o(),
            u(
              "ngIf",
              a.status == a.SwapStatus.in_progess && !a.isStake && !a.isWithdraw
            ),
            o(),
            u(
              "ngIf",
              a.status == a.SwapStatus.complete && !a.isStake && !a.isWithdraw
            ),
            o(),
            u(
              "ngIf",
              a.status == a.SwapStatus.complete && a.isStake && !a.isWithdraw
            ),
            o(),
            u("ngIf", a.status == a.SwapStatus.in_progess && a.isWithdraw),
            o(),
            u(
              "ngIf",
              a.status == a.SwapStatus.in_progess && a.isStake && !a.isWithdraw
            ),
            o(),
            u(
              "ngIf",
              a.status == a.SwapStatus.not_started &&
                !a.isStake &&
                !a.isWithdraw
            ),
            o(),
            u(
              "ngIf",
              a.status == a.SwapStatus.in_progess && !a.isStake && !a.isWithdraw
            ),
            o(),
            u("ngIf", a.status == a.SwapStatus.complete),
            o(),
            u("ngIf", a.status == a.SwapStatus.failed));
      },
      dependencies: [X, Y],
      styles: [
        ".modal-body[_ngcontent-%COMP%]{min-height:auto!important}.modal-body[_ngcontent-%COMP%]   .statusIcon[_ngcontent-%COMP%]{height:55px;margin-bottom:15px}",
      ],
    });
  }
  return t;
})();
var vb = ["graphCont"],
  yb = (t) => ({ rewardRate: t }),
  bb = (t) => ({ unstakeDate: t }),
  sm = (t) => ({ stakeAmount: t }),
  Cb = (t) => ({ cryptoName: t }),
  wb = () => ({ "width.px": 12, "height.px": 12 });
function Tb(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "a", 39),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.claimAndStake());
      }),
      m(1),
      g(2, "translate"),
      d();
  }
  t & 2 && (o(), _(f(2, 1, "staking.claim_stake")));
}
function Sb(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "a", 23),
      S("click", function () {
        M(e);
        let a = y(),
          s = ht(127);
        return L(a.buyClaimStake(s));
      }),
      m(1),
      g(2, "translate"),
      d();
  }
  t & 2 && (o(), _(f(2, 1, "staking.buy_stake")));
}
function kb(t, i) {
  if (
    (t & 1 && (c(0, "div", 40, 4), T(2, "ngx-charts-bar-vertical", 41), d()),
    t & 2)
  ) {
    let e = y();
    o(2),
      u("view", e.view)("scheme", e.colorScheme)("results", e.rewards)(
        "gradient",
        e.gradient
      )("xAxis", e.showXAxis)("yAxis", e.showYAxis)(
        "legendTitle",
        e.legendTitle
      )("legend", e.showLegend)("yScaleMin", e.minYAxis)(
        "yScaleMax",
        e.maxYAxis
      )("showXAxisLabel", e.showXAxisLabel)("showYAxisLabel", e.showYAxisLabel)(
        "showGridLines",
        e.showGridLines
      )("showDataLabel", e.showDataLabel)("xAxisLabel", e.xAxisLabel)(
        "yAxisLabel",
        e.yAxisLabel
      )("yAxisTickFormatting", e.yAxisTickFormattingFn);
  }
}
function Ab(t, i) {
  if (
    (t & 1 && (c(0, "div", 53), m(1), g(2, "date"), g(3, "translate"), d()),
    t & 2)
  ) {
    let e = y(2);
    o(),
      P(
        " ",
        q(
          3,
          4,
          "staking.withdraw_text",
          V(7, bb, q(2, 1, e.unstakeDate, "dd/MM/yyyy hh:mm:aa"))
        ),
        " "
      );
  }
}
function Mb(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 42)(1, "p", 43),
      m(2),
      g(3, "translate"),
      d()(),
      c(4, "div", 44)(5, "div", 45)(6, "span", 46),
      m(7),
      g(8, "translate"),
      d(),
      c(9, "p", 47),
      m(10),
      c(11, "span", 48),
      m(12),
      g(13, "translate"),
      d()(),
      A(14, Ab, 4, 9, "div", 49),
      d(),
      c(15, "div", 50)(16, "button", 51),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.closeModal());
      }),
      m(17),
      g(18, "translate"),
      d(),
      c(19, "button", 52),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.withdrawStake());
      }),
      m(20),
      g(21, "translate"),
      d()()();
  }
  if (t & 2) {
    let e = y();
    o(2),
      _(f(3, 8, "staking.withdraw_title")),
      o(5),
      _(f(8, 10, "staking.card_1_title")),
      o(3),
      P(" ", e.userStaked, " "),
      o(2),
      _(f(13, 12, "staking.card_coin")),
      o(2),
      u("ngIf", e.stakeData.userStaked > 0),
      o(3),
      _(f(18, 14, "misc.cancel")),
      o(2),
      u("disabled", !e.canUnstake),
      o(),
      _(f(21, 16, "staking.withdraw"));
  }
}
function Lb(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 42)(1, "p", 54),
      m(2),
      g(3, "translate"),
      d()(),
      c(4, "div", 44)(5, "div", 55)(6, "span", 56),
      m(7),
      g(8, "translate"),
      d(),
      c(9, "p", 57),
      m(10),
      c(11, "span", 58),
      m(12),
      g(13, "translate"),
      d()()(),
      c(14, "div", 59)(15, "div", 21)(16, "label", 60),
      m(17),
      g(18, "translate"),
      d(),
      c(19, "a", 61),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.max());
      }),
      m(20),
      g(21, "translate"),
      d()(),
      c(22, "input", 62),
      hn("ngModelChange", function (a) {
        M(e);
        let s = y();
        return pn(s.stakeAmount, a) || (s.stakeAmount = a), L(a);
      }),
      d(),
      c(23, "p", 63),
      m(24),
      g(25, "translate"),
      d()(),
      c(26, "div", 64)(27, "button", 65),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.closeModal());
      }),
      m(28),
      g(29, "translate"),
      d()()();
  }
  if (t & 2) {
    let e = y();
    o(2),
      _(f(3, 9, "widget.stake_token")),
      o(5),
      _(f(8, 11, "widget.user_bal")),
      o(3),
      P(" ", e.userBal, " "),
      o(2),
      _(f(13, 13, "staking.card_coin")),
      o(5),
      _(f(18, 15, "widget.stake_amount")),
      o(3),
      _(f(21, 17, "widget.max")),
      o(2),
      dn("ngModel", e.stakeAmount),
      o(2),
      _(f(25, 19, "widget.enterAmount")),
      o(4),
      _(f(29, 21, "misc.cancel"));
  }
}
function Db(t, i) {
  if (
    (t & 1 &&
      (c(0, "div", 69),
      T(1, "img", 70),
      c(2, "div", 71),
      m(3),
      g(4, "translate"),
      d(),
      c(5, "p", 72),
      m(6),
      g(7, "translate"),
      d()()),
    t & 2)
  ) {
    let e = y(2);
    o(3),
      _(f(4, 2, "widget.transaction_in_progress")),
      o(3),
      _(q(7, 4, "staking.stake_transction_info", V(7, sm, e.stakeAmount)));
  }
}
function Eb(t, i) {
  if (
    (t & 1 &&
      (c(0, "div", 69),
      T(1, "img", 70),
      c(2, "div", 73),
      m(3),
      g(4, "translate"),
      d(),
      c(5, "p", 72),
      m(6),
      g(7, "translate"),
      d()()),
    t & 2)
  ) {
    let e = y(2);
    o(3),
      _(f(4, 2, "misc.confirm")),
      o(3),
      _(q(7, 4, "staking.stake_waiting_confirm", V(7, Cb, e.cryptoName)));
  }
}
function Ob(t, i) {
  t & 1 &&
    (c(0, "div", 69),
    T(1, "img", 74),
    c(2, "div", 73),
    m(3),
    g(4, "translate"),
    d(),
    c(5, "p", 72),
    m(6),
    g(7, "translate"),
    d()()),
    t & 2 &&
      (o(3),
      _(f(4, 2, "widget.authorise")),
      o(3),
      _(f(7, 4, "staking.stake_waiting_approve")));
}
function Pb(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 69),
      T(1, "img", 75),
      c(2, "div", 76),
      m(3),
      g(4, "translate"),
      d(),
      c(5, "p", 77),
      m(6),
      g(7, "translate"),
      d(),
      c(8, "div", 78)(9, "button", 79),
      S("click", function () {
        M(e);
        let a = y(2);
        return L(a.viewUrl());
      }),
      m(10),
      g(11, "translate"),
      d(),
      c(12, "button", 80),
      S("click", function () {
        M(e);
        let a = y(2);
        return L(a.closeModal());
      }),
      m(13),
      g(14, "translate"),
      d()()();
  }
  if (t & 2) {
    let e = y(2);
    o(3),
      _(f(4, 4, "stake_transaction_success")),
      o(3),
      _(q(7, 6, "staking.stake_transction_info", V(13, sm, e.stakeAmount))),
      o(4),
      _(f(11, 9, "widget.view_transaction")),
      o(3),
      _(f(14, 11, "misc.done"));
  }
}
function Ib(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 69),
      T(1, "img", 81),
      c(2, "div", 82),
      m(3),
      g(4, "translate"),
      d(),
      c(5, "p", 83),
      m(6),
      g(7, "translate"),
      d(),
      c(8, "div", 78)(9, "button", 79),
      S("click", function () {
        M(e);
        let a = y(2);
        return L(a.viewUrl());
      }),
      m(10),
      g(11, "translate"),
      d(),
      c(12, "button", 80),
      S("click", function () {
        M(e);
        let a = y(2);
        return L(a.closeModal());
      }),
      m(13),
      g(14, "translate"),
      d()()();
  }
  t & 2 &&
    (o(3),
    _(f(4, 4, "staking.stake_transaction_failed")),
    o(3),
    _(f(7, 6, "staking.stake_view_transaction_info")),
    o(4),
    _(f(11, 8, "widget.view_transaction")),
    o(3),
    _(f(14, 10, "misc.done")));
}
function Fb(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 69),
      T(1, "img", 81),
      c(2, "div", 84),
      m(3),
      g(4, "translate"),
      d(),
      c(5, "div", 85)(6, "button", 80),
      S("click", function () {
        M(e);
        let a = y(2);
        return L(a.closeModal());
      }),
      m(7),
      g(8, "translate"),
      d()()();
  }
  t & 2 &&
    (o(3),
    _(f(4, 2, "staking.stake_transaction_rejected")),
    o(4),
    _(f(8, 4, "misc.done")));
}
function Vb(t, i) {
  if (
    (t & 1 &&
      (c(0, "div", 66)(1, "div", 67),
      A(2, Db, 8, 9, "div", 68)(3, Eb, 8, 9, "div", 68)(4, Ob, 8, 6, "div", 68)(
        5,
        Pb,
        15,
        15,
        "div",
        68
      )(6, Ib, 15, 12, "div", 68)(7, Fb, 9, 6, "div", 68),
      d()()),
    t & 2)
  ) {
    let e = y();
    o(2),
      u("ngIf", e.status === e.SwapStatus.in_progess),
      o(),
      u("ngIf", e.status === e.SwapStatus.confirm_pending),
      o(),
      u("ngIf", e.status === e.SwapStatus.approval_pending),
      o(),
      u("ngIf", e.status === e.SwapStatus.complete),
      o(),
      u("ngIf", e.status === e.SwapStatus.failed),
      o(),
      u("ngIf", e.status === e.SwapStatus.rejected);
  }
}
function Bb(t, i) {
  if (t & 1) {
    let e = O();
    c(0, "div", 42)(1, "p", 54),
      m(2),
      g(3, "translate"),
      d(),
      c(4, "svg-icon", 86),
      S("click", function () {
        M(e);
        let a = y();
        return L(a.closeModal());
      }),
      d()(),
      c(5, "div", 44)(6, "app-swap", 87),
      S("messageEvent", function (a) {
        M(e);
        let s = y();
        return L(s.messageEvent(a));
      }),
      d()();
  }
  if (t & 2) {
    let e = y();
    o(2),
      _(f(3, 5, "staking.buy_stake")),
      o(2),
      u("svgStyle", xe(7, wb)),
      o(2),
      u("isNative", e.isNative)("isWert", e.isWert)("isModal", !0);
  }
}
var Lo = (() => {
  class t {
    _platformId;
    popupService;
    translate;
    modalRef;
    modalService;
    cdRef;
    commonConnectService;
    graphCont;
    rewards = [
      { name: "May-2025", value: 1999375e4 },
      { name: "Jun-2025", value: 200375e5 },
      { name: "Jul-2025", value: 2008125e4 },
      { name: "Aug-2025", value: 20125e6 },
      { name: "Sep-2025", value: 2016875e4 },
      { name: "Oct-2025", value: 202125e5 },
      { name: "Nov-2025", value: 2025625e4 },
      { name: "Dec-2025", value: 203e8 },
      { name: "Jan-2026", value: 2034375e4 },
      { name: "Feb-2026", value: 203875e5 },
      { name: "Mar-2026", value: 2043125e4 },
      { name: "Apr-2026", value: 20475e6 },
      { name: "May-2026", value: 2051875e4 },
      { name: "Jun-2026", value: 205625e5 },
      { name: "Jul-2026", value: 2060625e4 },
      { name: "Aug-2026", value: 2065e7 },
      { name: "Sep-2026", value: 2069375e4 },
      { name: "Oct-2026", value: 207375e5 },
      { name: "Nov-2026", value: 2078125e4 },
      { name: "Dec-2026", value: 20825e6 },
      { name: "Jan-2027", value: 2086875e4 },
      { name: "Feb-2027", value: 209125e5 },
      { name: "Mar-2027", value: 2095625e4 },
      { name: "Apr-2027", value: 21e9 },
    ];
    fitContainer = !0;
    view = [400, 200];
    showXAxis = !0;
    showYAxis = !0;
    gradient = !1;
    legendTitle = "Total Rewards";
    legendPosition = "below";
    showLegend = !1;
    showXAxisLabel = !0;
    xAxisLabel = "Months";
    showYAxisLabel = !0;
    yAxisLabel = "Supply";
    SwapStatus = ce;
    showGridLines = !0;
    showDataLabel = !1;
    pageLoaded = !1;
    maxYAxis = 100;
    minYAxis = 0;
    stakeUnlockTime = E.stakeUnlockTime;
    stakeAmount;
    colorScheme = {
      name: "myScheme",
      selectable: !0,
      group: se.Ordinal,
      domain: [
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
        "#00000030",
      ],
    };
    lang = "";
    timeInterval;
    cryptoName = E.tokenName;
    walletAddress;
    stakeData;
    userStaked = "0";
    poolPercent = 0;
    ethClaimable = 0;
    ethTokens = 0;
    userReward = "0";
    totalStaked = "0";
    userBal = "0";
    unstakeDate;
    canUnstake;
    hash;
    status;
    isWert = !1;
    isNative = !0;
    link = "";
    onResize(e) {
      this.view = [+this.graphCont.nativeElement.offsetWidth / 1.05, 400];
    }
    constructor(e, n, a, s, r, l, p) {
      (this._platformId = e),
        (this.popupService = n),
        (this.translate = a),
        (this.modalRef = s),
        (this.modalService = r),
        (this.cdRef = l),
        (this.commonConnectService = p);
      let h = 0,
        x = new Date(),
        v = x.getUTCMonth(),
        b = x.getUTCFullYear();
      (this.stakeData = this.commonConnectService.stakeData),
        this.rewards.forEach((C, k) => {
          let D = new Date(C.name);
          D.setDate(D.getDate() + 10);
          let B = D.getUTCMonth();
          D.getUTCFullYear() === b && B === v && (h = k);
        }),
        (this.colorScheme.domain[h] = "#FFC700"),
        H(this._platformId) &&
          setInterval(() => this.updateAllgetMethod(), 500),
        (this.stakeData = this.commonConnectService.stakeData),
        (this.lang = this.translate.currentLang),
        this.translate.onLangChange.subscribe((C) => {
          (this.lang = C.lang), (this.link = Ns(this.lang));
        }),
        (this.link = Ns(this.lang));
    }
    ngAfterViewInit() {
      H(this._platformId) &&
        ((this.pageLoaded = !0),
        setTimeout(
          () =>
            (this.view = [
              +this.graphCont.nativeElement.offsetWidth / 1.05,
              400,
            ]),
          500
        ),
        this.cdRef.detectChanges());
    }
    updateAllgetMethod() {
      (this.walletAddress = this.commonConnectService.walletAddress),
        (this.stakeData = this.commonConnectService.stakeData),
        (this.userStaked = this.walletAddress
          ? this.formatNumber(+this.stakeData.userStaked.toFixed(0))
          : "0"),
        (this.poolPercent =
          (this.walletAddress &&
            this.stakeData.totalStaked !== 0 &&
            +(
              (this.stakeData.userStaked * 100) /
              this.stakeData.totalStaked
            ).toFixed(5)) ||
          0),
        (this.userReward = this.walletAddress
          ? this.formatNumber(+this.stakeData.userReward.toFixed(0))
          : "0"),
        (this.ethClaimable = this.walletAddress
          ? +(this.commonConnectService.balanceData?.ethClaimable ?? 0).toFixed(
              0
            )
          : 0),
        (this.ethTokens = this.walletAddress
          ? this.commonConnectService.balanceData?.ethClaimable ?? 0
          : 0),
        (this.totalStaked = this.formatNumber(
          +this.stakeData.totalStaked.toFixed(0)
        )),
        (this.userBal = this.formatNumber(this.stakeData.userBal)),
        (this.unstakeDate = new Date(this.stakeData.unlockTime * 1e3)),
        (this.unstakeDate =
          this.unstakeDate.getTime() > this.stakeUnlockTime
            ? new Date(this.unstakeDate)
            : new Date(this.stakeUnlockTime)),
        (this.canUnstake = this.unstakeDate < new Date()),
        (this.hash = this.commonConnectService.swapHash),
        (this.status = this.commonConnectService.swapStatus);
    }
    checkEthChain() {
      return this.walletAddress
        ? this.commonConnectService.isEthChain
          ? !0
          : (this.popupService
              .messagePopup({
                icon: "info",
                title: this.translate.instant("popup.change_network"),
                desc: this.translate.instant("popup.wrong_chain", {
                  chainName: E.eth.chainName,
                }),
                confirmBtnTxt: this.translate.instant("misc.ok"),
              })
              .subscribe({
                next: (e) => {
                  e &&
                    this.commonConnectService.switchNetwork(E.eth.chainIdInt);
                },
              }),
            !1)
        : (this.connectModal(), !1);
    }
    openWithdrawModal(e) {
      if (!this.stakeData.isClaimEnabled) {
        this.popupService.messagePopup({
          icon: "info",
          desc: this.translate.instant("popup.withdraw_not_live"),
          confirmBtnTxt: this.translate.instant("misc.ok"),
        });
        return;
      }
      this.modalRef = this.modalService.show(e, {
        class: "modal-xs modal-dialog-centered",
        backdrop: "static",
      });
    }
    openModal(e) {
      this.isSolWallet() ||
        (this.modalRef = this.modalService.show(e, {
          class: "modal-xs modal-dialog-centered",
          backdrop: "static",
        }));
    }
    buyClaimStake(e) {
      if (H(this._platformId)) {
        if (this.isSolWallet()) return;
        this.checkEthChain()
          ? this.walletAddress && this.ethClaimable == 0 && this.openModal(e)
          : (this.timeInterval = setInterval(
              () => this.startConnectInterval(e),
              2e3
            ));
      }
    }
    startConnectInterval(e) {
      this.walletAddress &&
        this.commonConnectService.isEthChain &&
        (this.openModal(e), clearInterval(this.timeInterval));
    }
    claimAndStake() {
      this.isSolWallet() ||
        (this.ethClaimable > 0 &&
          this.checkEthChain() &&
          ((this.modalRef = this.modalService.show(Cs, {
            class: "modal-xs modal-dialog-centered",
            backdrop: "static",
            initialState: { isStake: !0 },
          })),
          this.commonConnectService.claimAndStake()));
    }
    closeModal() {
      this.modalRef.hide();
    }
    yAxisTickFormattingFn = this.yAxisTickFormatting.bind(this);
    yAxisTickFormatting(e) {
      return this.formatNumber(e / 1e9) + "M";
    }
    formatString(e) {
      return e.toUpperCase();
    }
    formatNumber(e) {
      return Vi(e);
    }
    withdrawStake() {
      if (H(this._platformId)) {
        if (
          this.isSolWallet() ||
          this.stakeData.userStaked == 0 ||
          !this.checkEthChain()
        )
          return;
        this.modalRef.hide(),
          setTimeout(() => {
            this.modalRef = this.modalService.show(Cs, {
              class: "modal-xs modal-dialog-centered",
              backdrop: "static",
              initialState: { isWithdraw: !0 },
            });
          }, 500),
          this.commonConnectService.withdrawStake();
      }
    }
    harvestRewards() {
      if (H(this._platformId)) {
        if (!this.stakeData.isClaimEnabled) {
          this.popupService.messagePopup({
            icon: "info",
            desc: this.translate.instant("popup.claim_not_live"),
            confirmBtnTxt: this.translate.instant("misc.ok"),
          });
          return;
        }
        if (this.isSolWallet()) return;
        this.stakeData.userReward > 0 &&
          this.checkEthChain() &&
          (this.commonConnectService.harvestRewards(),
          this.modalRef?.hide(),
          setTimeout(() => {
            this.modalRef = this.modalService.show(Cs, {
              class: "modal-xs modal-dialog-centered",
              backdrop: "static",
            });
          }, 500));
      }
    }
    max() {
      this.stakeAmount = this.stakeData.userBal;
    }
    stakeToken(e) {
      if (H(this._platformId)) {
        if (
          this.isSolWallet() ||
          !this.checkEthChain() ||
          this.stakeAmount > this.stakeData.userBal
        )
          return;
        this.commonConnectService.createStake(this.stakeAmount),
          this.modalRef.hide(),
          setTimeout(() => {
            this.modalRef = this.modalService.show(e, {
              class: "modal-xs modal-dialog-centered",
              backdrop: "static",
            });
          }, 1e3);
      }
    }
    connectModal() {
      this.commonConnectService.vwoData("walletConnectionPlacement", {
        placement: "Staking",
      }),
        (this.modalRef = this.modalService.show(Yt, {
          class: "modal-min modal-dialog-centered",
          backdrop: "static",
          initialState: { isBsNetwork: !1, chain: ge.EVM },
        }));
    }
    poolInfo() {
      this.popupService.messagePopup({
        icon: "info",
        desc: this.translate.instant("staking.pool_share", {
          rewardRate: this.stakeData.rewardPerRound,
        }),
        confirmBtnTxt: this.translate.instant("misc.ok"),
      });
    }
    viewUrl() {
      if (H(this._platformId)) {
        if (typeof window > "u") return;
        let e = E.eth.blockExplorerURL;
        window.open(e + this.hash, "_blank");
      }
    }
    messageEvent(e) {
      (this.isWert = e), (this.isNative = !1);
    }
    isSolWallet() {
      return this.walletAddress &&
        this.commonConnectService.getSelectedChain === ge.SOLANA
        ? (this.popupService.messagePopup({
            icon: "info",
            title: this.translate.instant("popup.change_network"),
            desc: this.translate.instant("popup.wrong_wallet"),
            confirmBtnTxt: this.translate.instant("misc.ok"),
          }),
          !0)
        : !1;
    }
    static ɵfac = function (n) {
      return new (n || t)(w(j), w(kt), w(pe), w(rt), w(wt), w(vt), w(fe));
    };
    static ɵcmp = F({
      type: t,
      selectors: [["app-staking"]],
      viewQuery: function (n, a) {
        if ((n & 1 && $e(vb, 5), n & 2)) {
          let s;
          He((s = ze())) && (a.graphCont = s.first);
        }
      },
      hostBindings: function (n, a) {
        n & 1 &&
          S(
            "resize",
            function (r) {
              return a.onResize(r);
            },
            !1,
            Te
          );
      },
      decls: 128,
      vars: 83,
      consts: [
        ["withdraw", ""],
        ["stake", ""],
        ["successfull", ""],
        ["buy_stake", ""],
        ["graphCont", ""],
        ["id", "staking", 1, "staking"],
        [1, "container"],
        [1, "row", "d-flex", "align-items-center", "justify-content-between"],
        [1, "col-lg-7", "col-12"],
        [1, "section-title"],
        [1, "section-desc", "text-black"],
        [1, "section-desc", "text-black", "fw-bold", 3, "href"],
        [1, "col-lg-12", "col-12", "mt-5"],
        [1, "box-wrap"],
        [1, "box"],
        [1, "title"],
        [1, "value"],
        [1, "coin"],
        [
          "class",
          "btn btn-primary w-100 mt-3",
          "title",
          "staking",
          3,
          "click",
          4,
          "ngIf",
        ],
        ["class", "btn btn-primary w-100 mt-3", 3, "click", 4, "ngIf"],
        [1, "w-100"],
        [1, "d-flex", "align-items-center", "justify-content-between"],
        [
          "src",
          "/assets/images/svg-icons/info-icon.svg",
          "alt",
          "info-icon",
          "loading",
          "lazy",
          1,
          "img-fluid",
          "cursor-pointer",
          "info-icon",
          3,
          "click",
        ],
        [1, "btn", "btn-primary", "w-100", "mt-3", 3, "click"],
        [1, "coin", "ps-2", "mt-2"],
        [1, "p-0", "mt-3", "mb-0"],
        [
          "src",
          "/assets/images/svg-icons/arrow-right.svg",
          "height",
          "8px",
          "alt",
          "arrow-icon",
          "loading",
          "lazy",
          1,
          "me-1",
        ],
        [1, "row", "mt-5", "align-items-center", "justify-content-between"],
        [1, "col-lg-9", "mb-3"],
        [1, "chart-wrapper"],
        [1, "px-3"],
        [1, "mt-4", "text-center"],
        ["class", "w-100 graph-parent", 4, "ngIf"],
        [1, "mt-2"],
        [1, "font-14", "text-black", "mb-0"],
        ["href", "https://web3paymentsolutions.io/", "target", "_blank"],
        [
          "src",
          "/assets/images/svg-icons/w3p-logo.svg",
          "alt",
          "Web3Payments",
          "height",
          "18",
          1,
          "poweredByIcon",
        ],
        [1, "col-lg-3", "d-none", "d-sm-block"],
        [
          "src",
          "/assets/images/svg-icons/logo.svg",
          "loading",
          "lazy",
          "alt",
          "logo-image",
          1,
          "img-fluid",
          "mx-auto",
          "token",
          "d-flex",
          "align-items-center",
          "justify-content-center",
        ],
        [
          "title",
          "staking",
          1,
          "btn",
          "btn-primary",
          "w-100",
          "mt-3",
          3,
          "click",
        ],
        [1, "w-100", "graph-parent"],
        [
          3,
          "view",
          "scheme",
          "results",
          "gradient",
          "xAxis",
          "yAxis",
          "legendTitle",
          "legend",
          "yScaleMin",
          "yScaleMax",
          "showXAxisLabel",
          "showYAxisLabel",
          "showGridLines",
          "showDataLabel",
          "xAxisLabel",
          "yAxisLabel",
          "yAxisTickFormatting",
        ],
        [
          1,
          "modal-header",
          "d-flex",
          "align-items-center",
          "justify-content-center",
          "position-relative",
        ],
        [1, "modal-title", "pull-left"],
        [1, "modal-body"],
        [1, "text-center"],
        [1, "text-white"],
        [1, "font-25", "text-white"],
        [1, "font-14"],
        ["class", "d-inline-block text-white ms-2 font-14", 4, "ngIf"],
        [1, "d-flex", "align-items-center", "gap-2", "mt-3"],
        [1, "btn", "btn-outline-primary", "w-100", 3, "click"],
        [1, "btn", "btn-primary", "w-100", 3, "click", "disabled"],
        [1, "d-inline-block", "text-white", "ms-2", "font-14"],
        [1, "modal-title"],
        [1, "text-center", "mb-3"],
        [
          1,
          "staking-title",
          "font-14",
          "text-uppercase",
          "mb-1",
          "d-inline-block",
        ],
        [
          1,
          "font-25",
          "mt-2",
          "text-secondary",
          "d-flex",
          "align-items-start",
          "fw-bold",
          "justify-content-center",
        ],
        [1, "d-inline-block", "text-white", "ms-2", "font-12", "fw-bold"],
        [1, "form-group"],
        [1, "font-12"],
        [
          1,
          "font-12",
          "text-decoration-underline",
          "cursor-pointer",
          "text-secondary",
          3,
          "click",
        ],
        [
          "type",
          "text",
          "placeholder",
          "0",
          1,
          "form-control",
          "text-black",
          3,
          "ngModelChange",
          "ngModel",
        ],
        [1, "font-13"],
        [1, "d-flex", "align-items-center"],
        [
          1,
          "btn",
          "btn-secondary",
          "font-16",
          "text-white",
          "ms-3",
          "w-100",
          3,
          "click",
        ],
        [
          1,
          "modal-body",
          "d-flex",
          "align-items-center",
          "flex-column",
          "justify-content-center",
        ],
        [1, "text-center", "w-100", "mb-3"],
        ["class", "body-section text-center", 4, "ngIf"],
        [1, "body-section", "text-center"],
        [
          "src",
          "/assets/images/svg-icons/logo.svg",
          "alt",
          "loading",
          "loading",
          "lazy",
          1,
          "statusIcon",
          "loading",
        ],
        [
          1,
          "fw-normal",
          "fw-bold",
          "font-16",
          "px-2",
          "my-3",
          "text-uppercase",
          "text-white",
          "text-center",
        ],
        [1, "fs-7", "mb-0", "text-white"],
        [
          1,
          "fw-semibold",
          "fs-6",
          "my-3",
          "text-uppercase",
          "text-black",
          "text-center",
        ],
        [
          "src",
          "/assets/images/svg-icons/logo.svg",
          "alt",
          "loading",
          1,
          "statusIcon",
          "loading",
        ],
        [
          "src",
          "/assets/images/popup-icons/success.svg",
          "alt",
          "complete",
          "loading",
          "lazy",
          1,
          "statusIcon",
        ],
        [
          1,
          "fw-semibold",
          "fs-6",
          "my-3",
          "text-uppercase",
          "text-success",
          "text-center",
        ],
        [1, "fs-7", "mb-3", "mb-lg-4", "text-black"],
        [1, "d-flex", "align-items-center", "justify-content-center", "gap-3"],
        [1, "btn", "btn-outline-tertiary", "fs-7", "w-80", 3, "click"],
        [1, "btn", "btn-outline-secondary", "fs-7", "w-100", 3, "click"],
        [
          "src",
          "/assets/images/popup-icons/warning.svg",
          "alt",
          "failed",
          "loading",
          "lazy",
          1,
          "statusIcon",
        ],
        [
          1,
          "fw-semibold",
          "fs-6",
          "my-3",
          "text-uppercase",
          "text-danger",
          "text-center",
        ],
        [1, "fs-7", "mb-3", "mb-lg-4", "text-warning"],
        [
          1,
          "fw-semibold",
          "fs-6",
          "text-uppercase",
          "text-warning",
          "my-3",
          "text-center",
        ],
        [
          1,
          "d-flex",
          "align-items-center",
          "justify-content-center",
          "gap-3",
          "mt-4",
        ],
        [
          "src",
          "/assets/images/svg-icons/close-white.svg",
          1,
          "cursor-pointer",
          "stake-close",
          3,
          "click",
          "svgStyle",
        ],
        [3, "messageEvent", "isNative", "isWert", "isModal"],
      ],
      template: function (n, a) {
        if (n & 1) {
          let s = O();
          c(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "h1", 9),
            m(5),
            g(6, "translate"),
            d(),
            c(7, "p", 10),
            m(8),
            g(9, "translate"),
            c(10, "a", 11),
            m(11, "Bitcoin Hyper"),
            d(),
            m(12),
            g(13, "translate"),
            d()(),
            c(14, "div", 12)(15, "div", 13)(16, "div", 14)(17, "div")(
              18,
              "span",
              15
            ),
            m(19),
            g(20, "translate"),
            d(),
            c(21, "p", 16),
            m(22),
            c(23, "span", 17),
            m(24),
            g(25, "translate"),
            d()()(),
            c(26, "div")(27, "span", 15),
            m(28),
            g(29, "translate"),
            d(),
            c(30, "p", 16),
            m(31),
            c(32, "span", 17),
            m(33),
            g(34, "translate"),
            d()()(),
            A(35, Tb, 3, 3, "a", 18)(36, Sb, 3, 3, "a", 19),
            d(),
            c(37, "div", 14)(38, "div", 20)(39, "div", 21)(40, "span", 15),
            m(41),
            g(42, "translate"),
            d(),
            c(43, "img", 22),
            S("click", function () {
              return M(s), L(a.poolInfo());
            }),
            d()(),
            c(44, "p", 16),
            m(45),
            d(),
            c(46, "div")(47, "span", 15),
            m(48),
            g(49, "translate"),
            d(),
            c(50, "p", 16),
            m(51),
            c(52, "span", 17),
            m(53),
            g(54, "translate"),
            d()()(),
            c(55, "button", 23),
            S("click", function () {
              M(s);
              let l = ht(121);
              return L(a.openWithdrawModal(l));
            }),
            m(56),
            g(57, "translate"),
            d()()(),
            c(58, "div", 14)(59, "div")(60, "span", 15),
            m(61),
            g(62, "translate"),
            d(),
            c(63, "p", 16),
            m(64),
            c(65, "sup", 24),
            m(66),
            g(67, "translate"),
            d()()(),
            c(68, "ul", 25)(69, "li"),
            T(70, "img", 26),
            m(71),
            g(72, "translate"),
            d(),
            c(73, "li"),
            T(74, "img", 26),
            m(75),
            g(76, "translate"),
            d(),
            c(77, "li"),
            T(78, "img", 26),
            m(79),
            g(80, "translate"),
            d()()(),
            c(81, "div", 14)(82, "div")(83, "span", 15),
            m(84),
            g(85, "translate"),
            d(),
            c(86, "p", 16),
            m(87),
            c(88, "sup", 17),
            m(89),
            g(90, "translate"),
            d()()()(),
            c(91, "div", 14)(92, "div")(93, "span", 15),
            m(94),
            g(95, "translate"),
            d(),
            c(96, "p", 16),
            m(97),
            c(98, "span", 17),
            m(99),
            g(100, "translate"),
            d()()(),
            c(101, "button", 23),
            S("click", function () {
              return M(s), L(a.harvestRewards());
            }),
            m(102),
            g(103, "translate"),
            d()()()()(),
            c(104, "div", 27)(105, "div", 28)(106, "div", 29)(107, "div", 30)(
              108,
              "p",
              31
            ),
            m(109),
            g(110, "translate"),
            d()(),
            A(111, kb, 3, 17, "div", 32),
            d(),
            c(112, "div", 33)(113, "p", 34),
            m(114),
            g(115, "translate"),
            c(116, "a", 35),
            T(117, "img", 36),
            d()()()(),
            c(118, "div", 37),
            T(119, "img", 38),
            d()()()(),
            A(120, Mb, 22, 18, "ng-template", null, 0, at)(
              122,
              Lb,
              30,
              23,
              "ng-template",
              null,
              1,
              at
            )(124, Vb, 8, 6, "ng-template", null, 2, at)(
              126,
              Bb,
              7,
              8,
              "ng-template",
              null,
              3,
              at
            );
        }
        n & 2 &&
          (o(5),
          _(f(6, 34, "staking.title")),
          o(3),
          P(" ", f(9, 36, "staking.desc1"), " "),
          o(2),
          u("href", a.link, W),
          o(2),
          P(
            " ",
            q(13, 38, "staking.desc2", V(81, yb, a.stakeData.rewardPerRound)),
            " "
          ),
          o(7),
          _(f(20, 41, "staking.card_1_title")),
          o(3),
          P(" ", a.userStaked, " "),
          o(2),
          _(f(25, 43, "staking.card_coin")),
          o(4),
          P("", f(29, 45, "staking.your_stakeable"), " "),
          o(3),
          P(" ", a.formatNumber(a.ethClaimable), " "),
          o(2),
          _(f(34, 47, "staking.card_coin")),
          o(2),
          u("ngIf", a.ethTokens && a.ethTokens > 0),
          o(),
          u("ngIf", a.ethTokens == 0),
          o(5),
          _(f(42, 49, "staking.card_2_title")),
          o(4),
          P("", a.poolPercent, "%"),
          o(3),
          _(f(49, 51, "staking.total_staked")),
          o(3),
          P(" ", a.totalStaked, " "),
          o(2),
          _(f(54, 53, "staking.card_coin")),
          o(3),
          _(f(57, 55, "staking.withdraw_title")),
          o(5),
          _(f(62, 57, "staking.card_3_title")),
          o(3),
          P(" ", a.stakeData.apy, "%"),
          o(2),
          _(f(67, 59, "staking.stake_pa")),
          o(5),
          _(f(72, 61, "staking.card_3_para_1")),
          o(4),
          _(f(76, 63, "staking.card_3_para_2")),
          o(4),
          _(f(80, 65, "staking.card_3_para_3")),
          o(5),
          _(f(85, 67, "staking.card_4_title")),
          o(3),
          P(" ", a.stakeData.rewardPerRound, " "),
          o(2),
          _(f(90, 69, "staking.card_block")),
          o(5),
          _(f(95, 71, "staking.card_5_title")),
          o(3),
          P(" ", a.userReward, " "),
          o(2),
          _(f(100, 73, "staking.card_coin")),
          o(3),
          _(f(103, 75, "staking.rewards_btn")),
          o(7),
          _(f(110, 77, "staking.total_rewards")),
          o(2),
          u("ngIf", a.pageLoaded),
          o(3),
          P(" ", f(115, 79, "staking.staking_powered_by"), " "));
      },
      dependencies: [X, Ri, _a, _n, gh, qe, nn, Uo, Y],
      styles: [
        ".staking[_ngcontent-%COMP%]{padding:140px 0 100px;background:#fff url(/assets/images/webp/banner-bg.webp) no-repeat 100% 100%/100%}@media screen and (max-width: 1300px){.staking[_ngcontent-%COMP%]{padding:140px 25px 100px}}@media screen and (max-width: 576px){.staking[_ngcontent-%COMP%]{padding:140px 20px}}.staking[_ngcontent-%COMP%]   .box-wrap[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,1fr);gap:20px}@media screen and (max-width: 1024px){.staking[_ngcontent-%COMP%]   .box-wrap[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}@media screen and (max-width: 768px){.staking[_ngcontent-%COMP%]   .box-wrap[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media screen and (max-width: 576px){.staking[_ngcontent-%COMP%]   .box-wrap[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}}.staking[_ngcontent-%COMP%]   .box-wrap[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{padding:20px;border-radius:20px;border:2px solid #21283D;background:url(/assets/images/webp/bitcoin-layer-card-bg.webp) no-repeat;background-size:100% 100%;box-shadow:0 3px #000;width:100%;margin:0 auto;display:flex;flex-direction:column;justify-content:space-between}@media screen and (max-width: 576px){.staking[_ngcontent-%COMP%]   .box-wrap[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{max-width:unset}}.staking[_ngcontent-%COMP%]   .box-wrap[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:16px;color:#000}.staking[_ngcontent-%COMP%]   .box-wrap[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:18px;font-weight:600;color:#000;padding-top:5px;line-height:1.2;margin-bottom:8px}.staking[_ngcontent-%COMP%]   .box-wrap[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .coin[_ngcontent-%COMP%]{font-size:16px;font-weight:600}.staking[_ngcontent-%COMP%]   .box-wrap[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#000;font-size:10px;list-style:none;margin-bottom:3px;display:flex;align-items:baseline}.staking[_ngcontent-%COMP%]   .box-wrap[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{mix-blend-mode:difference}.staking[_ngcontent-%COMP%]   .chart-wrapper[_ngcontent-%COMP%]{border:2px solid #21283D;background:url(/assets/images/webp/bitcoin-layer-card-bg.webp) no-repeat;background-size:100% 100%;border-radius:20px;box-shadow:0 3px #000;min-height:431px}.staking[_ngcontent-%COMP%]   .chart-wrapper[_ngcontent-%COMP%]   .graph-parent[_ngcontent-%COMP%]{height:450px;width:900px}.staking[_ngcontent-%COMP%]   .chart-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;font-size:18px;font-weight:600;text-transform:uppercase;line-height:1.2;margin-bottom:8px}.staking[_ngcontent-%COMP%]   .chart-wrapper[_ngcontent-%COMP%]   ngx-charts-bar-vertical[_ngcontent-%COMP%]{fill:#000!important}.success-msg[_ngcontent-%COMP%]{color:#22282d;font-size:16px}.stake-close[_ngcontent-%COMP%]{position:absolute;right:20px}.modal-body[_ngcontent-%COMP%]{min-height:auto!important}",
      ],
    });
  }
  return t;
})();
var Nb = St.filter((t) => t.value !== "en").map((t) => ({
    path: t.value,
    component: Mo,
    children: [
      { path: "", component: ko },
      { path: "staking", component: Lo },
      {
        path: "news",
        loadChildren: () =>
          import("./chunk-UBRZPNN3.js").then((i) => i.UpdatesModule),
      },
      {
        path: "blog",
        loadChildren: () =>
          import("./chunk-E64U3HEM.js").then((i) => i.BlogModule),
      },
    ],
  })),
  Rb = [
    { path: "en", redirectTo: "", pathMatch: "full" },
    {
      path: "",
      component: Mo,
      children: [
        { path: "", component: ko },
        { path: "staking", component: Lo },
        {
          path: "news",
          loadChildren: () =>
            import("./chunk-UBRZPNN3.js").then((t) => t.UpdatesModule),
        },
        {
          path: "blog",
          loadChildren: () =>
            import("./chunk-E64U3HEM.js").then((t) => t.BlogModule),
        },
      ],
    },
    ...Nb,
    { path: "**", redirectTo: "", pathMatch: "full" },
    { path: "*path", redirectTo: "/", pathMatch: "full" },
  ],
  rm = (() => {
    class t {
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵmod = ee({ type: t });
      static ɵinj = J({
        imports: [
          Vs.forRoot(Rb, {
            anchorScrolling: "enabled",
            onSameUrlNavigation: "ignore",
            scrollPositionRestoration: "enabled",
            scrollOffset: [0, 20],
          }),
          Vs,
        ],
      });
    }
    return t;
  })();
var om = (() => {
  class t {
    static ɵfac = function (n) {
      return new (n || t)();
    };
    static ɵmod = ee({ type: t, bootstrap: [Dh] });
    static ɵinj = J({
      providers: [
        Ko(Zo()),
        Cl({ loader: { provide: bl, useFactory: Hb, deps: [bt] } }),
        nl(),
        vl(),
      ],
      imports: [
        ia,
        Xl,
        ql,
        uc,
        jc,
        mc,
        rm,
        xh,
        kh,
        jl,
        _l,
        rl,
        ml,
        Th,
        pl.forRoot(),
        sl.forRoot(),
        bh.forRoot(),
        yl.forRoot(),
        xl.forRoot({
          timeOut: 4e3,
          positionClass: "toast-bottom-right",
          preventDuplicates: !0,
          disableTimeOut: !1,
          progressBar: !0,
          progressAnimation: "decreasing",
          maxOpened: 1,
        }),
      ],
    });
  }
  return t;
})();
function Hb(t) {
  return new Xc(t, "./assets/i18n/", ".json");
}
el()
  .bootstrapModule(om, { ngZoneEventCoalescing: !0 })
  .catch((t) => console.error(t));
E.production && window && window.console;
