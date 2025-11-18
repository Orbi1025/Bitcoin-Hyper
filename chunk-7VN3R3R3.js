import { a as Jo } from "./chunk-VJGTFA6C.js";
import {
  A as Bi,
  Aa as Fn,
  E as Ui,
  J as jt,
  O as $n,
  S as Zn,
  a as Yo,
  i as j,
  w as Un,
  x as Mn,
  za as Mi,
} from "./chunk-V2OYAYNL.js";
import "./chunk-ZU6Q67UT.js";
import "./chunk-N4IN2AJ3.js";
import { a as dt, b as Xo } from "./chunk-QV7AMSUB.js";
import "./chunk-L4DL45FQ.js";
import "./chunk-XMCF3TCT.js";
import { a as Wo, b as Bn } from "./chunk-CP7YJKJV.js";
import {
  a as ue,
  b as Pe,
  d as Ni,
  f as Nn,
  i as Ne,
  j as Go,
  l as v,
} from "./chunk-QE6IBIJD.js";
var Hi = Nn((Dd, jn) => {
  "use strict";
  var Qo = /[\p{Lu}]/u,
    es = /[\p{Ll}]/u,
    $i = /^[\p{Lu}](?![\p{Lu}])/gu,
    ji = /([\p{Alpha}\p{N}_]|$)/u,
    Vi = /[_.\- ]+/,
    ts = new RegExp("^" + Vi.source),
    Zi = new RegExp(Vi.source + ji.source, "gu"),
    Fi = new RegExp("\\d+" + ji.source, "gu"),
    ns = (n, t, e) => {
      let r = !1,
        i = !1,
        a = !1;
      for (let o = 0; o < n.length; o++) {
        let s = n[o];
        r && Qo.test(s)
          ? ((n = n.slice(0, o) + "-" + n.slice(o)),
            (r = !1),
            (a = i),
            (i = !0),
            o++)
          : i && a && es.test(s)
          ? ((n = n.slice(0, o - 1) + "-" + n.slice(o - 1)),
            (a = i),
            (i = !1),
            (r = !0))
          : ((r = t(s) === s && e(s) !== s),
            (a = i),
            (i = e(s) === s && t(s) !== s));
      }
      return n;
    },
    rs = (n, t) => (($i.lastIndex = 0), n.replace($i, (e) => t(e))),
    is = (n, t) => (
      (Zi.lastIndex = 0),
      (Fi.lastIndex = 0),
      n.replace(Zi, (e, r) => t(r)).replace(Fi, (e) => t(e))
    ),
    Ki = (n, t) => {
      if (!(typeof n == "string" || Array.isArray(n)))
        throw new TypeError("Expected the input to be `string | string[]`");
      if (
        ((t = ue({ pascalCase: !1, preserveConsecutiveUppercase: !1 }, t)),
        Array.isArray(n)
          ? (n = n
              .map((a) => a.trim())
              .filter((a) => a.length)
              .join("-"))
          : (n = n.trim()),
        n.length === 0)
      )
        return "";
      let e =
          t.locale === !1
            ? (a) => a.toLowerCase()
            : (a) => a.toLocaleLowerCase(t.locale),
        r =
          t.locale === !1
            ? (a) => a.toUpperCase()
            : (a) => a.toLocaleUpperCase(t.locale);
      return n.length === 1
        ? t.pascalCase
          ? r(n)
          : e(n)
        : (n !== e(n) && (n = ns(n, e, r)),
          (n = n.replace(ts, "")),
          t.preserveConsecutiveUppercase ? (n = rs(n, e)) : (n = e(n)),
          t.pascalCase && (n = r(n.charAt(0)) + n.slice(1)),
          is(n, r));
    };
  jn.exports = Ki;
  jn.exports.default = Ki;
});
var Yn = Nn((m) => {
  "use strict";
  var N = class {
    constructor(t, e) {
      if (!Number.isInteger(t)) throw new TypeError("span must be an integer");
      (this.span = t), (this.property = e);
    }
    makeDestinationObject() {
      return {};
    }
    decode(t, e) {
      throw new Error("Layout is abstract");
    }
    encode(t, e, r) {
      throw new Error("Layout is abstract");
    }
    getSpan(t, e) {
      if (0 > this.span) throw new RangeError("indeterminate span");
      return this.span;
    }
    replicate(t) {
      let e = Object.create(this.constructor.prototype);
      return Object.assign(e, this), (e.property = t), e;
    }
    fromArray(t) {}
  };
  m.Layout = N;
  function Wn(n, t) {
    return t.property ? n + "[" + t.property + "]" : n;
  }
  m.nameWithProperty = Wn;
  function as(n, t) {
    if (typeof n != "function")
      throw new TypeError("Class must be constructor");
    if (n.hasOwnProperty("layout_"))
      throw new Error("Class is already bound to a layout");
    if (!(t && t instanceof N)) throw new TypeError("layout must be a Layout");
    if (t.hasOwnProperty("boundConstructor_"))
      throw new Error("layout is already bound to a constructor");
    (n.layout_ = t),
      (t.boundConstructor_ = n),
      (t.makeDestinationObject = () => new n()),
      Object.defineProperty(n.prototype, "encode", {
        value: function (e, r) {
          return t.encode(this, e, r);
        },
        writable: !0,
      }),
      Object.defineProperty(n, "decode", {
        value: function (e, r) {
          return t.decode(e, r);
        },
        writable: !0,
      });
  }
  m.bindConstructorLayout = as;
  var Y = class extends N {
      isCount() {
        throw new Error("ExternalLayout is abstract");
      }
    },
    Vt = class extends Y {
      constructor(t, e) {
        if ((t === void 0 && (t = 1), !Number.isInteger(t) || 0 >= t))
          throw new TypeError("elementSpan must be a (positive) integer");
        super(-1, e), (this.elementSpan = t);
      }
      isCount() {
        return !0;
      }
      decode(t, e) {
        e === void 0 && (e = 0);
        let r = t.length - e;
        return Math.floor(r / this.elementSpan);
      }
      encode(t, e, r) {
        return 0;
      }
    },
    ft = class extends Y {
      constructor(t, e, r) {
        if (!(t instanceof N)) throw new TypeError("layout must be a Layout");
        if (e === void 0) e = 0;
        else if (!Number.isInteger(e))
          throw new TypeError("offset must be integer or undefined");
        super(t.span, r || t.property), (this.layout = t), (this.offset = e);
      }
      isCount() {
        return this.layout instanceof ie || this.layout instanceof le;
      }
      decode(t, e) {
        return e === void 0 && (e = 0), this.layout.decode(t, e + this.offset);
      }
      encode(t, e, r) {
        return (
          r === void 0 && (r = 0), this.layout.encode(t, e, r + this.offset)
        );
      }
    },
    ie = class extends N {
      constructor(t, e) {
        if ((super(t, e), 6 < this.span))
          throw new RangeError("span must not exceed 6 bytes");
      }
      decode(t, e) {
        return e === void 0 && (e = 0), t.readUIntLE(e, this.span);
      }
      encode(t, e, r) {
        return (
          r === void 0 && (r = 0), e.writeUIntLE(t, r, this.span), this.span
        );
      }
    },
    le = class extends N {
      constructor(t, e) {
        if ((super(t, e), 6 < this.span))
          throw new RangeError("span must not exceed 6 bytes");
      }
      decode(t, e) {
        return e === void 0 && (e = 0), t.readUIntBE(e, this.span);
      }
      encode(t, e, r) {
        return (
          r === void 0 && (r = 0), e.writeUIntBE(t, r, this.span), this.span
        );
      }
    },
    me = class extends N {
      constructor(t, e) {
        if ((super(t, e), 6 < this.span))
          throw new RangeError("span must not exceed 6 bytes");
      }
      decode(t, e) {
        return e === void 0 && (e = 0), t.readIntLE(e, this.span);
      }
      encode(t, e, r) {
        return (
          r === void 0 && (r = 0), e.writeIntLE(t, r, this.span), this.span
        );
      }
    },
    Se = class extends N {
      constructor(t, e) {
        if ((super(t, e), 6 < this.span))
          throw new RangeError("span must not exceed 6 bytes");
      }
      decode(t, e) {
        return e === void 0 && (e = 0), t.readIntBE(e, this.span);
      }
      encode(t, e, r) {
        return (
          r === void 0 && (r = 0), e.writeIntBE(t, r, this.span), this.span
        );
      }
    },
    Vn = Math.pow(2, 32);
  function rn(n) {
    let t = Math.floor(n / Vn),
      e = n - t * Vn;
    return { hi32: t, lo32: e };
  }
  function an(n, t) {
    return n * Vn + t;
  }
  var Kn = class extends N {
      constructor(t) {
        super(8, t);
      }
      decode(t, e) {
        e === void 0 && (e = 0);
        let r = t.readUInt32LE(e),
          i = t.readUInt32LE(e + 4);
        return an(i, r);
      }
      encode(t, e, r) {
        r === void 0 && (r = 0);
        let i = rn(t);
        return e.writeUInt32LE(i.lo32, r), e.writeUInt32LE(i.hi32, r + 4), 8;
      }
    },
    Hn = class extends N {
      constructor(t) {
        super(8, t);
      }
      decode(t, e) {
        e === void 0 && (e = 0);
        let r = t.readUInt32BE(e),
          i = t.readUInt32BE(e + 4);
        return an(r, i);
      }
      encode(t, e, r) {
        r === void 0 && (r = 0);
        let i = rn(t);
        return e.writeUInt32BE(i.hi32, r), e.writeUInt32BE(i.lo32, r + 4), 8;
      }
    },
    qn = class extends N {
      constructor(t) {
        super(8, t);
      }
      decode(t, e) {
        e === void 0 && (e = 0);
        let r = t.readUInt32LE(e),
          i = t.readInt32LE(e + 4);
        return an(i, r);
      }
      encode(t, e, r) {
        r === void 0 && (r = 0);
        let i = rn(t);
        return e.writeUInt32LE(i.lo32, r), e.writeInt32LE(i.hi32, r + 4), 8;
      }
    },
    Gn = class extends N {
      constructor(t) {
        super(8, t);
      }
      decode(t, e) {
        e === void 0 && (e = 0);
        let r = t.readInt32BE(e),
          i = t.readUInt32BE(e + 4);
        return an(r, i);
      }
      encode(t, e, r) {
        r === void 0 && (r = 0);
        let i = rn(t);
        return e.writeInt32BE(i.hi32, r), e.writeUInt32BE(i.lo32, r + 4), 8;
      }
    },
    Kt = class extends N {
      constructor(t) {
        super(4, t);
      }
      decode(t, e) {
        return e === void 0 && (e = 0), t.readFloatLE(e);
      }
      encode(t, e, r) {
        return r === void 0 && (r = 0), e.writeFloatLE(t, r), 4;
      }
    },
    Ht = class extends N {
      constructor(t) {
        super(4, t);
      }
      decode(t, e) {
        return e === void 0 && (e = 0), t.readFloatBE(e);
      }
      encode(t, e, r) {
        return r === void 0 && (r = 0), e.writeFloatBE(t, r), 4;
      }
    },
    qt = class extends N {
      constructor(t) {
        super(8, t);
      }
      decode(t, e) {
        return e === void 0 && (e = 0), t.readDoubleLE(e);
      }
      encode(t, e, r) {
        return r === void 0 && (r = 0), e.writeDoubleLE(t, r), 8;
      }
    },
    Gt = class extends N {
      constructor(t) {
        super(8, t);
      }
      decode(t, e) {
        return e === void 0 && (e = 0), t.readDoubleBE(e);
      }
      encode(t, e, r) {
        return r === void 0 && (r = 0), e.writeDoubleBE(t, r), 8;
      }
    },
    Wt = class extends N {
      constructor(t, e, r) {
        if (!(t instanceof N))
          throw new TypeError("elementLayout must be a Layout");
        if (
          !((e instanceof Y && e.isCount()) || (Number.isInteger(e) && 0 <= e))
        )
          throw new TypeError(
            "count must be non-negative integer or an unsigned integer ExternalLayout"
          );
        let i = -1;
        !(e instanceof Y) && 0 < t.span && (i = e * t.span),
          super(i, r),
          (this.elementLayout = t),
          (this.count = e);
      }
      getSpan(t, e) {
        if (0 <= this.span) return this.span;
        e === void 0 && (e = 0);
        let r = 0,
          i = this.count;
        if (
          (i instanceof Y && (i = i.decode(t, e)), 0 < this.elementLayout.span)
        )
          r = i * this.elementLayout.span;
        else {
          let a = 0;
          for (; a < i; ) (r += this.elementLayout.getSpan(t, e + r)), ++a;
        }
        return r;
      }
      decode(t, e) {
        e === void 0 && (e = 0);
        let r = [],
          i = 0,
          a = this.count;
        for (a instanceof Y && (a = a.decode(t, e)); i < a; )
          r.push(this.elementLayout.decode(t, e)),
            (e += this.elementLayout.getSpan(t, e)),
            (i += 1);
        return r;
      }
      encode(t, e, r) {
        r === void 0 && (r = 0);
        let i = this.elementLayout,
          a = t.reduce((o, s) => o + i.encode(s, e, r + o), 0);
        return this.count instanceof Y && this.count.encode(t.length, e, r), a;
      }
    },
    Yt = class extends N {
      constructor(t, e, r) {
        if (!(Array.isArray(t) && t.reduce((a, o) => a && o instanceof N, !0)))
          throw new TypeError("fields must be array of Layout instances");
        typeof e == "boolean" && r === void 0 && ((r = e), (e = void 0));
        for (let a of t)
          if (0 > a.span && a.property === void 0)
            throw new Error(
              "fields cannot contain unnamed variable-length layout"
            );
        let i = -1;
        try {
          i = t.reduce((a, o) => a + o.getSpan(), 0);
        } catch {}
        super(i, e), (this.fields = t), (this.decodePrefixes = !!r);
      }
      getSpan(t, e) {
        if (0 <= this.span) return this.span;
        e === void 0 && (e = 0);
        let r = 0;
        try {
          r = this.fields.reduce((i, a) => {
            let o = a.getSpan(t, e);
            return (e += o), i + o;
          }, 0);
        } catch {
          throw new RangeError("indeterminate span");
        }
        return r;
      }
      decode(t, e) {
        e === void 0 && (e = 0);
        let r = this.makeDestinationObject();
        for (let i of this.fields)
          if (
            (i.property !== void 0 && (r[i.property] = i.decode(t, e)),
            (e += i.getSpan(t, e)),
            this.decodePrefixes && t.length === e)
          )
            break;
        return r;
      }
      encode(t, e, r) {
        r === void 0 && (r = 0);
        let i = r,
          a = 0,
          o = 0;
        for (let s of this.fields) {
          let l = s.span;
          if (((o = 0 < l ? l : 0), s.property !== void 0)) {
            let c = t[s.property];
            c !== void 0 &&
              ((o = s.encode(c, e, r)), 0 > l && (l = s.getSpan(e, r)));
          }
          (a = r), (r += l);
        }
        return a + o - i;
      }
      fromArray(t) {
        let e = this.makeDestinationObject();
        for (let r of this.fields)
          r.property !== void 0 && 0 < t.length && (e[r.property] = t.shift());
        return e;
      }
      layoutFor(t) {
        if (typeof t != "string")
          throw new TypeError("property must be string");
        for (let e of this.fields) if (e.property === t) return e;
      }
      offsetOf(t) {
        if (typeof t != "string")
          throw new TypeError("property must be string");
        let e = 0;
        for (let r of this.fields) {
          if (r.property === t) return e;
          0 > r.span ? (e = -1) : 0 <= e && (e += r.span);
        }
      }
    },
    ht = class {
      constructor(t) {
        this.property = t;
      }
      decode() {
        throw new Error("UnionDiscriminator is abstract");
      }
      encode() {
        throw new Error("UnionDiscriminator is abstract");
      }
    },
    Xe = class extends ht {
      constructor(t, e) {
        if (!(t instanceof Y && t.isCount()))
          throw new TypeError(
            "layout must be an unsigned integer ExternalLayout"
          );
        super(e || t.property || "variant"), (this.layout = t);
      }
      decode(t, e) {
        return this.layout.decode(t, e);
      }
      encode(t, e, r) {
        return this.layout.encode(t, e, r);
      }
    },
    pt = class extends N {
      constructor(t, e, r) {
        let i = t instanceof ie || t instanceof le;
        if (i) t = new Xe(new ft(t));
        else if (t instanceof Y && t.isCount()) t = new Xe(t);
        else if (!(t instanceof ht))
          throw new TypeError(
            "discr must be a UnionDiscriminator or an unsigned integer layout"
          );
        if ((e === void 0 && (e = null), !(e === null || e instanceof N)))
          throw new TypeError("defaultLayout must be null or a Layout");
        if (e !== null) {
          if (0 > e.span)
            throw new Error("defaultLayout must have constant span");
          e.property === void 0 && (e = e.replicate("content"));
        }
        let a = -1;
        e && ((a = e.span), 0 <= a && i && (a += t.layout.span)),
          super(a, r),
          (this.discriminator = t),
          (this.usesPrefixDiscriminator = i),
          (this.defaultLayout = e),
          (this.registry = {});
        let o = this.defaultGetSourceVariant.bind(this);
        (this.getSourceVariant = function (s) {
          return o(s);
        }),
          (this.configGetSourceVariant = function (s) {
            o = s.bind(this);
          });
      }
      getSpan(t, e) {
        if (0 <= this.span) return this.span;
        e === void 0 && (e = 0);
        let r = this.getVariant(t, e);
        if (!r)
          throw new Error("unable to determine span for unrecognized variant");
        return r.getSpan(t, e);
      }
      defaultGetSourceVariant(t) {
        if (t.hasOwnProperty(this.discriminator.property)) {
          if (
            this.defaultLayout &&
            t.hasOwnProperty(this.defaultLayout.property)
          )
            return;
          let e = this.registry[t[this.discriminator.property]];
          if (e && (!e.layout || t.hasOwnProperty(e.property))) return e;
        } else
          for (let e in this.registry) {
            let r = this.registry[e];
            if (t.hasOwnProperty(r.property)) return r;
          }
        throw new Error("unable to infer src variant");
      }
      decode(t, e) {
        e === void 0 && (e = 0);
        let r,
          i = this.discriminator,
          a = i.decode(t, e),
          o = this.registry[a];
        if (o === void 0) {
          let s = 0;
          (o = this.defaultLayout),
            this.usesPrefixDiscriminator && (s = i.layout.span),
            (r = this.makeDestinationObject()),
            (r[i.property] = a),
            (r[o.property] = this.defaultLayout.decode(t, e + s));
        } else r = o.decode(t, e);
        return r;
      }
      encode(t, e, r) {
        r === void 0 && (r = 0);
        let i = this.getSourceVariant(t);
        if (i === void 0) {
          let a = this.discriminator,
            o = this.defaultLayout,
            s = 0;
          return (
            this.usesPrefixDiscriminator && (s = a.layout.span),
            a.encode(t[a.property], e, r),
            s + o.encode(t[o.property], e, r + s)
          );
        }
        return i.encode(t, e, r);
      }
      addVariant(t, e, r) {
        let i = new Xt(this, t, e, r);
        return (this.registry[t] = i), i;
      }
      getVariant(t, e) {
        let r = t;
        return (
          Buffer.isBuffer(t) &&
            (e === void 0 && (e = 0), (r = this.discriminator.decode(t, e))),
          this.registry[r]
        );
      }
    },
    Xt = class extends N {
      constructor(t, e, r, i) {
        if (!(t instanceof pt)) throw new TypeError("union must be a Union");
        if (!Number.isInteger(e) || 0 > e)
          throw new TypeError("variant must be a (non-negative) integer");
        if (
          (typeof r == "string" && i === void 0 && ((i = r), (r = null)), r)
        ) {
          if (!(r instanceof N)) throw new TypeError("layout must be a Layout");
          if (
            t.defaultLayout !== null &&
            0 <= r.span &&
            r.span > t.defaultLayout.span
          )
            throw new Error("variant span exceeds span of containing union");
          if (typeof i != "string")
            throw new TypeError("variant must have a String property");
        }
        let a = t.span;
        0 > t.span &&
          ((a = r ? r.span : 0),
          0 <= a &&
            t.usesPrefixDiscriminator &&
            (a += t.discriminator.layout.span)),
          super(a, i),
          (this.union = t),
          (this.variant = e),
          (this.layout = r || null);
      }
      getSpan(t, e) {
        if (0 <= this.span) return this.span;
        e === void 0 && (e = 0);
        let r = 0;
        return (
          this.union.usesPrefixDiscriminator &&
            (r = this.union.discriminator.layout.span),
          r + this.layout.getSpan(t, e + r)
        );
      }
      decode(t, e) {
        let r = this.makeDestinationObject();
        if ((e === void 0 && (e = 0), this !== this.union.getVariant(t, e)))
          throw new Error("variant mismatch");
        let i = 0;
        return (
          this.union.usesPrefixDiscriminator &&
            (i = this.union.discriminator.layout.span),
          this.layout
            ? (r[this.property] = this.layout.decode(t, e + i))
            : this.property
            ? (r[this.property] = !0)
            : this.union.usesPrefixDiscriminator &&
              (r[this.union.discriminator.property] = this.variant),
          r
        );
      }
      encode(t, e, r) {
        r === void 0 && (r = 0);
        let i = 0;
        if (
          (this.union.usesPrefixDiscriminator &&
            (i = this.union.discriminator.layout.span),
          this.layout && !t.hasOwnProperty(this.property))
        )
          throw new TypeError("variant lacks property " + this.property);
        this.union.discriminator.encode(this.variant, e, r);
        let a = i;
        if (
          this.layout &&
          (this.layout.encode(t[this.property], e, r + i),
          (a += this.layout.getSpan(e, r + i)),
          0 <= this.union.span && a > this.union.span)
        )
          throw new Error("encoded variant overruns containing union");
        return a;
      }
      fromArray(t) {
        if (this.layout) return this.layout.fromArray(t);
      }
    };
  function Ye(n) {
    return 0 > n && (n += 4294967296), n;
  }
  var _t = class extends N {
      constructor(t, e, r) {
        if (!(t instanceof ie || t instanceof le))
          throw new TypeError("word must be a UInt or UIntBE layout");
        if (
          (typeof e == "string" && r === void 0 && ((r = e), (e = void 0)),
          4 < t.span)
        )
          throw new RangeError("word cannot exceed 32 bits");
        super(t.span, r), (this.word = t), (this.msb = !!e), (this.fields = []);
        let i = 0;
        (this._packedSetValue = function (a) {
          return (i = Ye(a)), this;
        }),
          (this._packedGetValue = function () {
            return i;
          });
      }
      decode(t, e) {
        let r = this.makeDestinationObject();
        e === void 0 && (e = 0);
        let i = this.word.decode(t, e);
        this._packedSetValue(i);
        for (let a of this.fields)
          a.property !== void 0 && (r[a.property] = a.decode(i));
        return r;
      }
      encode(t, e, r) {
        r === void 0 && (r = 0);
        let i = this.word.decode(e, r);
        this._packedSetValue(i);
        for (let a of this.fields)
          if (a.property !== void 0) {
            let o = t[a.property];
            o !== void 0 && a.encode(o);
          }
        return this.word.encode(this._packedGetValue(), e, r);
      }
      addField(t, e) {
        let r = new Be(this, t, e);
        return this.fields.push(r), r;
      }
      addBoolean(t) {
        let e = new Jt(this, t);
        return this.fields.push(e), e;
      }
      fieldFor(t) {
        if (typeof t != "string")
          throw new TypeError("property must be string");
        for (let e of this.fields) if (e.property === t) return e;
      }
    },
    Be = class {
      constructor(t, e, r) {
        if (!(t instanceof _t))
          throw new TypeError("container must be a BitStructure");
        if (!Number.isInteger(e) || 0 >= e)
          throw new TypeError("bits must be positive integer");
        let i = 8 * t.span,
          a = t.fields.reduce((o, s) => o + s.bits, 0);
        if (e + a > i)
          throw new Error(
            "bits too long for span remainder (" +
              (i - a) +
              " of " +
              i +
              " remain)"
          );
        (this.container = t),
          (this.bits = e),
          (this.valueMask = (1 << e) - 1),
          e === 32 && (this.valueMask = 4294967295),
          (this.start = a),
          this.container.msb && (this.start = i - a - e),
          (this.wordMask = Ye(this.valueMask << this.start)),
          (this.property = r);
      }
      decode() {
        let t = this.container._packedGetValue();
        return Ye(t & this.wordMask) >>> this.start;
      }
      encode(t) {
        if (!Number.isInteger(t) || t !== Ye(t & this.valueMask))
          throw new TypeError(
            Wn("BitField.encode", this) +
              " value must be integer not exceeding " +
              this.valueMask
          );
        let e = this.container._packedGetValue(),
          r = Ye(t << this.start);
        this.container._packedSetValue(Ye(e & ~this.wordMask) | r);
      }
    },
    Jt = class extends Be {
      constructor(t, e) {
        super(t, 1, e);
      }
      decode(t, e) {
        return !!Be.prototype.decode.call(this, t, e);
      }
      encode(t) {
        return (
          typeof t == "boolean" && (t = +t), Be.prototype.encode.call(this, t)
        );
      }
    },
    Qt = class extends N {
      constructor(t, e) {
        if (
          !((t instanceof Y && t.isCount()) || (Number.isInteger(t) && 0 <= t))
        )
          throw new TypeError(
            "length must be positive integer or an unsigned integer ExternalLayout"
          );
        let r = -1;
        t instanceof Y || (r = t), super(r, e), (this.length = t);
      }
      getSpan(t, e) {
        let r = this.span;
        return 0 > r && (r = this.length.decode(t, e)), r;
      }
      decode(t, e) {
        e === void 0 && (e = 0);
        let r = this.span;
        return 0 > r && (r = this.length.decode(t, e)), t.slice(e, e + r);
      }
      encode(t, e, r) {
        let i = this.length;
        if (
          (this.length instanceof Y && (i = t.length),
          !(Buffer.isBuffer(t) && i === t.length))
        )
          throw new TypeError(
            Wn("Blob.encode", this) +
              " requires (length " +
              i +
              ") Buffer as src"
          );
        if (r + i > e.length) throw new RangeError("encoding overruns Buffer");
        return (
          e.write(t.toString("hex"), r, i, "hex"),
          this.length instanceof Y && this.length.encode(i, e, r),
          i
        );
      }
    },
    en = class extends N {
      constructor(t) {
        super(-1, t);
      }
      getSpan(t, e) {
        if (!Buffer.isBuffer(t)) throw new TypeError("b must be a Buffer");
        e === void 0 && (e = 0);
        let r = e;
        for (; r < t.length && t[r] !== 0; ) r += 1;
        return 1 + r - e;
      }
      decode(t, e, r) {
        e === void 0 && (e = 0);
        let i = this.getSpan(t, e);
        return t.slice(e, e + i - 1).toString("utf-8");
      }
      encode(t, e, r) {
        r === void 0 && (r = 0), typeof t != "string" && (t = t.toString());
        let i = new Buffer(t, "utf8"),
          a = i.length;
        if (r + a > e.length) throw new RangeError("encoding overruns Buffer");
        return i.copy(e, r), (e[r + a] = 0), a + 1;
      }
    },
    tn = class extends N {
      constructor(t, e) {
        if (
          (typeof t == "string" && e === void 0 && ((e = t), (t = void 0)),
          t === void 0)
        )
          t = -1;
        else if (!Number.isInteger(t))
          throw new TypeError("maxSpan must be an integer");
        super(-1, e), (this.maxSpan = t);
      }
      getSpan(t, e) {
        if (!Buffer.isBuffer(t)) throw new TypeError("b must be a Buffer");
        return e === void 0 && (e = 0), t.length - e;
      }
      decode(t, e, r) {
        e === void 0 && (e = 0);
        let i = this.getSpan(t, e);
        if (0 <= this.maxSpan && this.maxSpan < i)
          throw new RangeError("text length exceeds maxSpan");
        return t.slice(e, e + i).toString("utf-8");
      }
      encode(t, e, r) {
        r === void 0 && (r = 0), typeof t != "string" && (t = t.toString());
        let i = new Buffer(t, "utf8"),
          a = i.length;
        if (0 <= this.maxSpan && this.maxSpan < a)
          throw new RangeError("text length exceeds maxSpan");
        if (r + a > e.length) throw new RangeError("encoding overruns Buffer");
        return i.copy(e, r), a;
      }
    },
    nn = class extends N {
      constructor(t, e) {
        super(0, e), (this.value = t);
      }
      decode(t, e, r) {
        return this.value;
      }
      encode(t, e, r) {
        return 0;
      }
    };
  m.ExternalLayout = Y;
  m.GreedyCount = Vt;
  m.OffsetLayout = ft;
  m.UInt = ie;
  m.UIntBE = le;
  m.Int = me;
  m.IntBE = Se;
  m.Float = Kt;
  m.FloatBE = Ht;
  m.Double = qt;
  m.DoubleBE = Gt;
  m.Sequence = Wt;
  m.Structure = Yt;
  m.UnionDiscriminator = ht;
  m.UnionLayoutDiscriminator = Xe;
  m.Union = pt;
  m.VariantLayout = Xt;
  m.BitStructure = _t;
  m.BitField = Be;
  m.Boolean = Jt;
  m.Blob = Qt;
  m.CString = en;
  m.UTF8 = tn;
  m.Constant = nn;
  m.greedy = (n, t) => new Vt(n, t);
  m.offset = (n, t, e) => new ft(n, t, e);
  m.u8 = (n) => new ie(1, n);
  m.u16 = (n) => new ie(2, n);
  m.u24 = (n) => new ie(3, n);
  m.u32 = (n) => new ie(4, n);
  m.u40 = (n) => new ie(5, n);
  m.u48 = (n) => new ie(6, n);
  m.nu64 = (n) => new Kn(n);
  m.u16be = (n) => new le(2, n);
  m.u24be = (n) => new le(3, n);
  m.u32be = (n) => new le(4, n);
  m.u40be = (n) => new le(5, n);
  m.u48be = (n) => new le(6, n);
  m.nu64be = (n) => new Hn(n);
  m.s8 = (n) => new me(1, n);
  m.s16 = (n) => new me(2, n);
  m.s24 = (n) => new me(3, n);
  m.s32 = (n) => new me(4, n);
  m.s40 = (n) => new me(5, n);
  m.s48 = (n) => new me(6, n);
  m.ns64 = (n) => new qn(n);
  m.s16be = (n) => new Se(2, n);
  m.s24be = (n) => new Se(3, n);
  m.s32be = (n) => new Se(4, n);
  m.s40be = (n) => new Se(5, n);
  m.s48be = (n) => new Se(6, n);
  m.ns64be = (n) => new Gn(n);
  m.f32 = (n) => new Kt(n);
  m.f32be = (n) => new Ht(n);
  m.f64 = (n) => new qt(n);
  m.f64be = (n) => new Gt(n);
  m.struct = (n, t, e) => new Yt(n, t, e);
  m.bits = (n, t, e) => new _t(n, t, e);
  m.seq = (n, t, e) => new Wt(n, t, e);
  m.union = (n, t, e) => new pt(n, t, e);
  m.unionLayoutDiscriminator = (n, t) => new Xe(n, t);
  m.blob = (n, t) => new Qt(n, t);
  m.cstr = (n) => new en(n);
  m.utf8 = (n, t) => new tn(n, t);
  m.const = (n, t) => new nn(n, t);
});
var Wi = Nn((x) => {
  "use strict";
  var os =
    (x && x.__importDefault) ||
    function (n) {
      return n && n.__esModule ? n : { default: n };
    };
  Object.defineProperty(x, "__esModule", { value: !0 });
  x.map =
    x.array =
    x.rustEnum =
    x.str =
    x.vecU8 =
    x.tagged =
    x.vec =
    x.bool =
    x.option =
    x.publicKey =
    x.i256 =
    x.u256 =
    x.i128 =
    x.u128 =
    x.i64 =
    x.u64 =
    x.struct =
    x.f64 =
    x.f32 =
    x.i32 =
    x.u32 =
    x.i16 =
    x.u16 =
    x.i8 =
    x.u8 =
      void 0;
  var $ = Yn(),
    ss = (Fn(), Go(Mi)),
    cs = os(Bn()),
    ye = Yn();
  Object.defineProperty(x, "u8", {
    enumerable: !0,
    get: function () {
      return ye.u8;
    },
  });
  Object.defineProperty(x, "i8", {
    enumerable: !0,
    get: function () {
      return ye.s8;
    },
  });
  Object.defineProperty(x, "u16", {
    enumerable: !0,
    get: function () {
      return ye.u16;
    },
  });
  Object.defineProperty(x, "i16", {
    enumerable: !0,
    get: function () {
      return ye.s16;
    },
  });
  Object.defineProperty(x, "u32", {
    enumerable: !0,
    get: function () {
      return ye.u32;
    },
  });
  Object.defineProperty(x, "i32", {
    enumerable: !0,
    get: function () {
      return ye.s32;
    },
  });
  Object.defineProperty(x, "f32", {
    enumerable: !0,
    get: function () {
      return ye.f32;
    },
  });
  Object.defineProperty(x, "f64", {
    enumerable: !0,
    get: function () {
      return ye.f64;
    },
  });
  Object.defineProperty(x, "struct", {
    enumerable: !0,
    get: function () {
      return ye.struct;
    },
  });
  var Ie = class extends $.Layout {
    constructor(t, e, r) {
      super(t, r), (this.blob = (0, $.blob)(t)), (this.signed = e);
    }
    decode(t, e = 0) {
      let r = new cs.default(this.blob.decode(t, e), 10, "le");
      return this.signed ? r.fromTwos(this.span * 8).clone() : r;
    }
    encode(t, e, r = 0) {
      return (
        this.signed && (t = t.toTwos(this.span * 8)),
        this.blob.encode(t.toArrayLike(Buffer, "le", this.span), e, r)
      );
    }
  };
  function qi(n) {
    return new Ie(8, !1, n);
  }
  x.u64 = qi;
  function us(n) {
    return new Ie(8, !0, n);
  }
  x.i64 = us;
  function ls(n) {
    return new Ie(16, !1, n);
  }
  x.u128 = ls;
  function ds(n) {
    return new Ie(16, !0, n);
  }
  x.i128 = ds;
  function fs(n) {
    return new Ie(32, !1, n);
  }
  x.u256 = fs;
  function hs(n) {
    return new Ie(32, !0, n);
  }
  x.i256 = hs;
  var de = class extends $.Layout {
    constructor(t, e, r, i) {
      super(t.span, i),
        (this.layout = t),
        (this.decoder = e),
        (this.encoder = r);
    }
    decode(t, e) {
      return this.decoder(this.layout.decode(t, e));
    }
    encode(t, e, r) {
      return this.layout.encode(this.encoder(t), e, r);
    }
    getSpan(t, e) {
      return this.layout.getSpan(t, e);
    }
  };
  function ps(n) {
    return new de(
      (0, $.blob)(32),
      (t) => new ss.PublicKey(t),
      (t) => t.toBuffer(),
      n
    );
  }
  x.publicKey = ps;
  var Xn = class extends $.Layout {
    constructor(t, e) {
      super(-1, e), (this.layout = t), (this.discriminator = (0, $.u8)());
    }
    encode(t, e, r = 0) {
      return t == null
        ? this.discriminator.encode(0, e, r)
        : (this.discriminator.encode(1, e, r),
          this.layout.encode(t, e, r + 1) + 1);
    }
    decode(t, e = 0) {
      let r = this.discriminator.decode(t, e);
      if (r === 0) return null;
      if (r === 1) return this.layout.decode(t, e + 1);
      throw new Error("Invalid option " + this.property);
    }
    getSpan(t, e = 0) {
      let r = this.discriminator.decode(t, e);
      if (r === 0) return 1;
      if (r === 1) return this.layout.getSpan(t, e + 1) + 1;
      throw new Error("Invalid option " + this.property);
    }
  };
  function _s(n, t) {
    return new Xn(n, t);
  }
  x.option = _s;
  function ws(n) {
    return new de((0, $.u8)(), gs, ms, n);
  }
  x.bool = ws;
  function gs(n) {
    if (n === 0) return !1;
    if (n === 1) return !0;
    throw new Error("Invalid bool: " + n);
  }
  function ms(n) {
    return n ? 1 : 0;
  }
  function ys(n, t) {
    let e = (0, $.u32)("length"),
      r = (0, $.struct)([
        e,
        (0, $.seq)(n, (0, $.offset)(e, -e.span), "values"),
      ]);
    return new de(
      r,
      ({ values: i }) => i,
      (i) => ({ values: i }),
      t
    );
  }
  x.vec = ys;
  function bs(n, t, e) {
    let r = (0, $.struct)([qi("tag"), t.replicate("data")]);
    function i({ tag: a, data: o }) {
      if (!a.eq(n))
        throw new Error(
          "Invalid tag, expected: " +
            n.toString("hex") +
            ", got: " +
            a.toString("hex")
        );
      return o;
    }
    return new de(r, i, (a) => ({ tag: n, data: a }), e);
  }
  x.tagged = bs;
  function Gi(n) {
    let t = (0, $.u32)("length"),
      e = (0, $.struct)([t, (0, $.blob)((0, $.offset)(t, -t.span), "data")]);
    return new de(
      e,
      ({ data: r }) => r,
      (r) => ({ data: r }),
      n
    );
  }
  x.vecU8 = Gi;
  function vs(n) {
    return new de(
      Gi(),
      (t) => t.toString("utf-8"),
      (t) => Buffer.from(t, "utf-8"),
      n
    );
  }
  x.str = vs;
  function Es(n, t, e) {
    let r = (0, $.union)(e ?? (0, $.u8)(), t);
    return n.forEach((i, a) => r.addVariant(a, i, i.property)), r;
  }
  x.rustEnum = Es;
  function As(n, t, e) {
    let r = (0, $.struct)([(0, $.seq)(n, t, "values")]);
    return new de(
      r,
      ({ values: i }) => i,
      (i) => ({ values: i }),
      e
    );
  }
  x.array = As;
  var Jn = class extends $.Layout {
    constructor(t, e, r) {
      super(t.span + e.span, r), (this.keyLayout = t), (this.valueLayout = e);
    }
    decode(t, e) {
      e = e || 0;
      let r = this.keyLayout.decode(t, e),
        i = this.valueLayout.decode(t, e + this.keyLayout.getSpan(t, e));
      return [r, i];
    }
    encode(t, e, r) {
      r = r || 0;
      let i = this.keyLayout.encode(t[0], e, r),
        a = this.valueLayout.encode(t[1], e, r + i);
      return i + a;
    }
    getSpan(t, e) {
      return this.keyLayout.getSpan(t, e) + this.valueLayout.getSpan(t, e);
    }
  };
  function xs(n, t, e) {
    let r = (0, $.u32)("length"),
      i = (0, $.struct)([
        r,
        (0, $.seq)(new Jn(n, t), (0, $.offset)(r, -r.span), "values"),
      ]);
    return new de(
      i,
      ({ values: a }) => new Map(a),
      (a) => ({ values: Array.from(a.entries()) }),
      e
    );
  }
  x.map = xs;
});
var X = Ne(Wo());
Fn();
Fn();
var Si = Ne(Bn()),
  Od = Ne(Bn()),
  qe = Ne(Yo()),
  M = Ne(Hi()),
  y = Ne(Wi());
Xo();
function rt(n) {
  let t = n.length;
  for (; --t >= 0; ) n[t] = 0;
}
var ks = 0,
  za = 1,
  Ss = 2,
  Is = 3,
  Ts = 258,
  Er = 29,
  Lt = 256,
  Et = Lt + 1 + Er,
  et = 30,
  Ar = 19,
  Pa = 2 * Et + 1,
  Ue = 15,
  Qn = 16,
  Rs = 7,
  xr = 256,
  Na = 16,
  Ba = 17,
  Ua = 18,
  hr = new Uint8Array([
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
    5, 5, 5, 0,
  ]),
  dn = new Uint8Array([
    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
    11, 11, 12, 12, 13, 13,
  ]),
  Ls = new Uint8Array([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
  ]),
  Ma = new Uint8Array([
    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
  ]),
  Os = 512,
  ve = new Array((Et + 2) * 2);
rt(ve);
var yt = new Array(et * 2);
rt(yt);
var At = new Array(Os);
rt(At);
var xt = new Array(Ts - Is + 1);
rt(xt);
var kr = new Array(Er);
rt(kr);
var fn = new Array(et);
rt(fn);
function er(n, t, e, r, i) {
  (this.static_tree = n),
    (this.extra_bits = t),
    (this.extra_base = e),
    (this.elems = r),
    (this.max_length = i),
    (this.has_stree = n && n.length);
}
var $a, Za, Fa;
function tr(n, t) {
  (this.dyn_tree = n), (this.max_code = 0), (this.stat_desc = t);
}
var ja = (n) => (n < 256 ? At[n] : At[256 + (n >>> 7)]),
  kt = (n, t) => {
    (n.pending_buf[n.pending++] = t & 255),
      (n.pending_buf[n.pending++] = (t >>> 8) & 255);
  },
  ee = (n, t, e) => {
    n.bi_valid > Qn - e
      ? ((n.bi_buf |= (t << n.bi_valid) & 65535),
        kt(n, n.bi_buf),
        (n.bi_buf = t >> (Qn - n.bi_valid)),
        (n.bi_valid += e - Qn))
      : ((n.bi_buf |= (t << n.bi_valid) & 65535), (n.bi_valid += e));
  },
  he = (n, t, e) => {
    ee(n, e[t * 2], e[t * 2 + 1]);
  },
  Va = (n, t) => {
    let e = 0;
    do (e |= n & 1), (n >>>= 1), (e <<= 1);
    while (--t > 0);
    return e >>> 1;
  },
  Ds = (n) => {
    n.bi_valid === 16
      ? (kt(n, n.bi_buf), (n.bi_buf = 0), (n.bi_valid = 0))
      : n.bi_valid >= 8 &&
        ((n.pending_buf[n.pending++] = n.bi_buf & 255),
        (n.bi_buf >>= 8),
        (n.bi_valid -= 8));
  },
  Cs = (n, t) => {
    let e = t.dyn_tree,
      r = t.max_code,
      i = t.stat_desc.static_tree,
      a = t.stat_desc.has_stree,
      o = t.stat_desc.extra_bits,
      s = t.stat_desc.extra_base,
      l = t.stat_desc.max_length,
      c,
      u,
      _,
      h,
      d,
      p,
      b = 0;
    for (h = 0; h <= Ue; h++) n.bl_count[h] = 0;
    for (e[n.heap[n.heap_max] * 2 + 1] = 0, c = n.heap_max + 1; c < Pa; c++)
      (u = n.heap[c]),
        (h = e[e[u * 2 + 1] * 2 + 1] + 1),
        h > l && ((h = l), b++),
        (e[u * 2 + 1] = h),
        !(u > r) &&
          (n.bl_count[h]++,
          (d = 0),
          u >= s && (d = o[u - s]),
          (p = e[u * 2]),
          (n.opt_len += p * (h + d)),
          a && (n.static_len += p * (i[u * 2 + 1] + d)));
    if (b !== 0) {
      do {
        for (h = l - 1; n.bl_count[h] === 0; ) h--;
        n.bl_count[h]--, (n.bl_count[h + 1] += 2), n.bl_count[l]--, (b -= 2);
      } while (b > 0);
      for (h = l; h !== 0; h--)
        for (u = n.bl_count[h]; u !== 0; )
          (_ = n.heap[--c]),
            !(_ > r) &&
              (e[_ * 2 + 1] !== h &&
                ((n.opt_len += (h - e[_ * 2 + 1]) * e[_ * 2]),
                (e[_ * 2 + 1] = h)),
              u--);
    }
  },
  Ka = (n, t, e) => {
    let r = new Array(Ue + 1),
      i = 0,
      a,
      o;
    for (a = 1; a <= Ue; a++) (i = (i + e[a - 1]) << 1), (r[a] = i);
    for (o = 0; o <= t; o++) {
      let s = n[o * 2 + 1];
      s !== 0 && (n[o * 2] = Va(r[s]++, s));
    }
  },
  zs = () => {
    let n,
      t,
      e,
      r,
      i,
      a = new Array(Ue + 1);
    for (e = 0, r = 0; r < Er - 1; r++)
      for (kr[r] = e, n = 0; n < 1 << hr[r]; n++) xt[e++] = r;
    for (xt[e - 1] = r, i = 0, r = 0; r < 16; r++)
      for (fn[r] = i, n = 0; n < 1 << dn[r]; n++) At[i++] = r;
    for (i >>= 7; r < et; r++)
      for (fn[r] = i << 7, n = 0; n < 1 << (dn[r] - 7); n++) At[256 + i++] = r;
    for (t = 0; t <= Ue; t++) a[t] = 0;
    for (n = 0; n <= 143; ) (ve[n * 2 + 1] = 8), n++, a[8]++;
    for (; n <= 255; ) (ve[n * 2 + 1] = 9), n++, a[9]++;
    for (; n <= 279; ) (ve[n * 2 + 1] = 7), n++, a[7]++;
    for (; n <= 287; ) (ve[n * 2 + 1] = 8), n++, a[8]++;
    for (Ka(ve, Et + 1, a), n = 0; n < et; n++)
      (yt[n * 2 + 1] = 5), (yt[n * 2] = Va(n, 5));
    ($a = new er(ve, hr, Lt + 1, Et, Ue)),
      (Za = new er(yt, dn, 0, et, Ue)),
      (Fa = new er(new Array(0), Ls, 0, Ar, Rs));
  },
  Ha = (n) => {
    let t;
    for (t = 0; t < Et; t++) n.dyn_ltree[t * 2] = 0;
    for (t = 0; t < et; t++) n.dyn_dtree[t * 2] = 0;
    for (t = 0; t < Ar; t++) n.bl_tree[t * 2] = 0;
    (n.dyn_ltree[xr * 2] = 1),
      (n.opt_len = n.static_len = 0),
      (n.sym_next = n.matches = 0);
  },
  qa = (n) => {
    n.bi_valid > 8
      ? kt(n, n.bi_buf)
      : n.bi_valid > 0 && (n.pending_buf[n.pending++] = n.bi_buf),
      (n.bi_buf = 0),
      (n.bi_valid = 0);
  },
  Yi = (n, t, e, r) => {
    let i = t * 2,
      a = e * 2;
    return n[i] < n[a] || (n[i] === n[a] && r[t] <= r[e]);
  },
  nr = (n, t, e) => {
    let r = n.heap[e],
      i = e << 1;
    for (
      ;
      i <= n.heap_len &&
      (i < n.heap_len && Yi(t, n.heap[i + 1], n.heap[i], n.depth) && i++,
      !Yi(t, r, n.heap[i], n.depth));

    )
      (n.heap[e] = n.heap[i]), (e = i), (i <<= 1);
    n.heap[e] = r;
  },
  Xi = (n, t, e) => {
    let r,
      i,
      a = 0,
      o,
      s;
    if (n.sym_next !== 0)
      do
        (r = n.pending_buf[n.sym_buf + a++] & 255),
          (r += (n.pending_buf[n.sym_buf + a++] & 255) << 8),
          (i = n.pending_buf[n.sym_buf + a++]),
          r === 0
            ? he(n, i, t)
            : ((o = xt[i]),
              he(n, o + Lt + 1, t),
              (s = hr[o]),
              s !== 0 && ((i -= kr[o]), ee(n, i, s)),
              r--,
              (o = ja(r)),
              he(n, o, e),
              (s = dn[o]),
              s !== 0 && ((r -= fn[o]), ee(n, r, s)));
      while (a < n.sym_next);
    he(n, xr, t);
  },
  pr = (n, t) => {
    let e = t.dyn_tree,
      r = t.stat_desc.static_tree,
      i = t.stat_desc.has_stree,
      a = t.stat_desc.elems,
      o,
      s,
      l = -1,
      c;
    for (n.heap_len = 0, n.heap_max = Pa, o = 0; o < a; o++)
      e[o * 2] !== 0
        ? ((n.heap[++n.heap_len] = l = o), (n.depth[o] = 0))
        : (e[o * 2 + 1] = 0);
    for (; n.heap_len < 2; )
      (c = n.heap[++n.heap_len] = l < 2 ? ++l : 0),
        (e[c * 2] = 1),
        (n.depth[c] = 0),
        n.opt_len--,
        i && (n.static_len -= r[c * 2 + 1]);
    for (t.max_code = l, o = n.heap_len >> 1; o >= 1; o--) nr(n, e, o);
    c = a;
    do
      (o = n.heap[1]),
        (n.heap[1] = n.heap[n.heap_len--]),
        nr(n, e, 1),
        (s = n.heap[1]),
        (n.heap[--n.heap_max] = o),
        (n.heap[--n.heap_max] = s),
        (e[c * 2] = e[o * 2] + e[s * 2]),
        (n.depth[c] = (n.depth[o] >= n.depth[s] ? n.depth[o] : n.depth[s]) + 1),
        (e[o * 2 + 1] = e[s * 2 + 1] = c),
        (n.heap[1] = c++),
        nr(n, e, 1);
    while (n.heap_len >= 2);
    (n.heap[--n.heap_max] = n.heap[1]), Cs(n, t), Ka(e, l, n.bl_count);
  },
  Ji = (n, t, e) => {
    let r,
      i = -1,
      a,
      o = t[0 * 2 + 1],
      s = 0,
      l = 7,
      c = 4;
    for (
      o === 0 && ((l = 138), (c = 3)), t[(e + 1) * 2 + 1] = 65535, r = 0;
      r <= e;
      r++
    )
      (a = o),
        (o = t[(r + 1) * 2 + 1]),
        !(++s < l && a === o) &&
          (s < c
            ? (n.bl_tree[a * 2] += s)
            : a !== 0
            ? (a !== i && n.bl_tree[a * 2]++, n.bl_tree[Na * 2]++)
            : s <= 10
            ? n.bl_tree[Ba * 2]++
            : n.bl_tree[Ua * 2]++,
          (s = 0),
          (i = a),
          o === 0
            ? ((l = 138), (c = 3))
            : a === o
            ? ((l = 6), (c = 3))
            : ((l = 7), (c = 4)));
  },
  Qi = (n, t, e) => {
    let r,
      i = -1,
      a,
      o = t[0 * 2 + 1],
      s = 0,
      l = 7,
      c = 4;
    for (o === 0 && ((l = 138), (c = 3)), r = 0; r <= e; r++)
      if (((a = o), (o = t[(r + 1) * 2 + 1]), !(++s < l && a === o))) {
        if (s < c)
          do he(n, a, n.bl_tree);
          while (--s !== 0);
        else
          a !== 0
            ? (a !== i && (he(n, a, n.bl_tree), s--),
              he(n, Na, n.bl_tree),
              ee(n, s - 3, 2))
            : s <= 10
            ? (he(n, Ba, n.bl_tree), ee(n, s - 3, 3))
            : (he(n, Ua, n.bl_tree), ee(n, s - 11, 7));
        (s = 0),
          (i = a),
          o === 0
            ? ((l = 138), (c = 3))
            : a === o
            ? ((l = 6), (c = 3))
            : ((l = 7), (c = 4));
      }
  },
  Ps = (n) => {
    let t;
    for (
      Ji(n, n.dyn_ltree, n.l_desc.max_code),
        Ji(n, n.dyn_dtree, n.d_desc.max_code),
        pr(n, n.bl_desc),
        t = Ar - 1;
      t >= 3 && n.bl_tree[Ma[t] * 2 + 1] === 0;
      t--
    );
    return (n.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
  },
  Ns = (n, t, e, r) => {
    let i;
    for (ee(n, t - 257, 5), ee(n, e - 1, 5), ee(n, r - 4, 4), i = 0; i < r; i++)
      ee(n, n.bl_tree[Ma[i] * 2 + 1], 3);
    Qi(n, n.dyn_ltree, t - 1), Qi(n, n.dyn_dtree, e - 1);
  },
  Bs = (n) => {
    let t = 4093624447,
      e;
    for (e = 0; e <= 31; e++, t >>>= 1)
      if (t & 1 && n.dyn_ltree[e * 2] !== 0) return 0;
    if (
      n.dyn_ltree[9 * 2] !== 0 ||
      n.dyn_ltree[10 * 2] !== 0 ||
      n.dyn_ltree[13 * 2] !== 0
    )
      return 1;
    for (e = 32; e < Lt; e++) if (n.dyn_ltree[e * 2] !== 0) return 1;
    return 0;
  },
  ea = !1,
  Us = (n) => {
    ea || (zs(), (ea = !0)),
      (n.l_desc = new tr(n.dyn_ltree, $a)),
      (n.d_desc = new tr(n.dyn_dtree, Za)),
      (n.bl_desc = new tr(n.bl_tree, Fa)),
      (n.bi_buf = 0),
      (n.bi_valid = 0),
      Ha(n);
  },
  Ga = (n, t, e, r) => {
    ee(n, (ks << 1) + (r ? 1 : 0), 3),
      qa(n),
      kt(n, e),
      kt(n, ~e),
      e && n.pending_buf.set(n.window.subarray(t, t + e), n.pending),
      (n.pending += e);
  },
  Ms = (n) => {
    ee(n, za << 1, 3), he(n, xr, ve), Ds(n);
  },
  $s = (n, t, e, r) => {
    let i,
      a,
      o = 0;
    n.level > 0
      ? (n.strm.data_type === 2 && (n.strm.data_type = Bs(n)),
        pr(n, n.l_desc),
        pr(n, n.d_desc),
        (o = Ps(n)),
        (i = (n.opt_len + 3 + 7) >>> 3),
        (a = (n.static_len + 3 + 7) >>> 3),
        a <= i && (i = a))
      : (i = a = e + 5),
      e + 4 <= i && t !== -1
        ? Ga(n, t, e, r)
        : n.strategy === 4 || a === i
        ? (ee(n, (za << 1) + (r ? 1 : 0), 3), Xi(n, ve, yt))
        : (ee(n, (Ss << 1) + (r ? 1 : 0), 3),
          Ns(n, n.l_desc.max_code + 1, n.d_desc.max_code + 1, o + 1),
          Xi(n, n.dyn_ltree, n.dyn_dtree)),
      Ha(n),
      r && qa(n);
  },
  Zs = (n, t, e) => (
    (n.pending_buf[n.sym_buf + n.sym_next++] = t),
    (n.pending_buf[n.sym_buf + n.sym_next++] = t >> 8),
    (n.pending_buf[n.sym_buf + n.sym_next++] = e),
    t === 0
      ? n.dyn_ltree[e * 2]++
      : (n.matches++,
        t--,
        n.dyn_ltree[(xt[e] + Lt + 1) * 2]++,
        n.dyn_dtree[ja(t) * 2]++),
    n.sym_next === n.sym_end
  ),
  Fs = Us,
  js = Ga,
  Vs = $s,
  Ks = Zs,
  Hs = Ms,
  qs = {
    _tr_init: Fs,
    _tr_stored_block: js,
    _tr_flush_block: Vs,
    _tr_tally: Ks,
    _tr_align: Hs,
  },
  Gs = (n, t, e, r) => {
    let i = (n & 65535) | 0,
      a = ((n >>> 16) & 65535) | 0,
      o = 0;
    for (; e !== 0; ) {
      (o = e > 2e3 ? 2e3 : e), (e -= o);
      do (i = (i + t[r++]) | 0), (a = (a + i) | 0);
      while (--o);
      (i %= 65521), (a %= 65521);
    }
    return i | (a << 16) | 0;
  },
  St = Gs,
  Ws = () => {
    let n,
      t = [];
    for (var e = 0; e < 256; e++) {
      n = e;
      for (var r = 0; r < 8; r++) n = n & 1 ? 3988292384 ^ (n >>> 1) : n >>> 1;
      t[e] = n;
    }
    return t;
  },
  Ys = new Uint32Array(Ws()),
  Xs = (n, t, e, r) => {
    let i = Ys,
      a = r + e;
    n ^= -1;
    for (let o = r; o < a; o++) n = (n >>> 8) ^ i[(n ^ t[o]) & 255];
    return n ^ -1;
  },
  K = Xs,
  Ze = {
    2: "need dictionary",
    1: "stream end",
    0: "",
    "-1": "file error",
    "-2": "stream error",
    "-3": "data error",
    "-4": "insufficient memory",
    "-5": "buffer error",
    "-6": "incompatible version",
  },
  it = {
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_MEM_ERROR: -4,
    Z_BUF_ERROR: -5,
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    Z_BINARY: 0,
    Z_TEXT: 1,
    Z_UNKNOWN: 2,
    Z_DEFLATED: 8,
  },
  {
    _tr_init: Js,
    _tr_stored_block: _r,
    _tr_flush_block: Qs,
    _tr_tally: Le,
    _tr_align: ec,
  } = qs,
  {
    Z_NO_FLUSH: Oe,
    Z_PARTIAL_FLUSH: tc,
    Z_FULL_FLUSH: nc,
    Z_FINISH: ae,
    Z_BLOCK: ta,
    Z_OK: G,
    Z_STREAM_END: na,
    Z_STREAM_ERROR: pe,
    Z_DATA_ERROR: rc,
    Z_BUF_ERROR: rr,
    Z_DEFAULT_COMPRESSION: ic,
    Z_FILTERED: ac,
    Z_HUFFMAN_ONLY: on,
    Z_RLE: oc,
    Z_FIXED: sc,
    Z_DEFAULT_STRATEGY: cc,
    Z_UNKNOWN: uc,
    Z_DEFLATED: _n,
  } = it,
  lc = 9,
  dc = 15,
  fc = 8,
  hc = 29,
  pc = 256,
  wr = pc + 1 + hc,
  _c = 30,
  wc = 19,
  gc = 2 * wr + 1,
  mc = 15,
  P = 3,
  Re = 258,
  _e = Re + P + 1,
  yc = 32,
  tt = 42,
  Sr = 57,
  gr = 69,
  mr = 73,
  yr = 91,
  br = 103,
  Me = 113,
  gt = 666,
  Q = 1,
  at = 2,
  Fe = 3,
  ot = 4,
  bc = 3,
  $e = (n, t) => ((n.msg = Ze[t]), t),
  ra = (n) => n * 2 - (n > 4 ? 9 : 0),
  Te = (n) => {
    let t = n.length;
    for (; --t >= 0; ) n[t] = 0;
  },
  vc = (n) => {
    let t,
      e,
      r,
      i = n.w_size;
    (t = n.hash_size), (r = t);
    do (e = n.head[--r]), (n.head[r] = e >= i ? e - i : 0);
    while (--t);
    (t = i), (r = t);
    do (e = n.prev[--r]), (n.prev[r] = e >= i ? e - i : 0);
    while (--t);
  },
  Ec = (n, t, e) => ((t << n.hash_shift) ^ e) & n.hash_mask,
  De = Ec,
  te = (n) => {
    let t = n.state,
      e = t.pending;
    e > n.avail_out && (e = n.avail_out),
      e !== 0 &&
        (n.output.set(
          t.pending_buf.subarray(t.pending_out, t.pending_out + e),
          n.next_out
        ),
        (n.next_out += e),
        (t.pending_out += e),
        (n.total_out += e),
        (n.avail_out -= e),
        (t.pending -= e),
        t.pending === 0 && (t.pending_out = 0));
  },
  ne = (n, t) => {
    Qs(
      n,
      n.block_start >= 0 ? n.block_start : -1,
      n.strstart - n.block_start,
      t
    ),
      (n.block_start = n.strstart),
      te(n.strm);
  },
  B = (n, t) => {
    n.pending_buf[n.pending++] = t;
  },
  wt = (n, t) => {
    (n.pending_buf[n.pending++] = (t >>> 8) & 255),
      (n.pending_buf[n.pending++] = t & 255);
  },
  vr = (n, t, e, r) => {
    let i = n.avail_in;
    return (
      i > r && (i = r),
      i === 0
        ? 0
        : ((n.avail_in -= i),
          t.set(n.input.subarray(n.next_in, n.next_in + i), e),
          n.state.wrap === 1
            ? (n.adler = St(n.adler, t, i, e))
            : n.state.wrap === 2 && (n.adler = K(n.adler, t, i, e)),
          (n.next_in += i),
          (n.total_in += i),
          i)
    );
  },
  Wa = (n, t) => {
    let e = n.max_chain_length,
      r = n.strstart,
      i,
      a,
      o = n.prev_length,
      s = n.nice_match,
      l = n.strstart > n.w_size - _e ? n.strstart - (n.w_size - _e) : 0,
      c = n.window,
      u = n.w_mask,
      _ = n.prev,
      h = n.strstart + Re,
      d = c[r + o - 1],
      p = c[r + o];
    n.prev_length >= n.good_match && (e >>= 2),
      s > n.lookahead && (s = n.lookahead);
    do
      if (
        ((i = t),
        !(
          c[i + o] !== p ||
          c[i + o - 1] !== d ||
          c[i] !== c[r] ||
          c[++i] !== c[r + 1]
        ))
      ) {
        (r += 2), i++;
        do;
        while (
          c[++r] === c[++i] &&
          c[++r] === c[++i] &&
          c[++r] === c[++i] &&
          c[++r] === c[++i] &&
          c[++r] === c[++i] &&
          c[++r] === c[++i] &&
          c[++r] === c[++i] &&
          c[++r] === c[++i] &&
          r < h
        );
        if (((a = Re - (h - r)), (r = h - Re), a > o)) {
          if (((n.match_start = t), (o = a), a >= s)) break;
          (d = c[r + o - 1]), (p = c[r + o]);
        }
      }
    while ((t = _[t & u]) > l && --e !== 0);
    return o <= n.lookahead ? o : n.lookahead;
  },
  nt = (n) => {
    let t = n.w_size,
      e,
      r,
      i;
    do {
      if (
        ((r = n.window_size - n.lookahead - n.strstart),
        n.strstart >= t + (t - _e) &&
          (n.window.set(n.window.subarray(t, t + t - r), 0),
          (n.match_start -= t),
          (n.strstart -= t),
          (n.block_start -= t),
          n.insert > n.strstart && (n.insert = n.strstart),
          vc(n),
          (r += t)),
        n.strm.avail_in === 0)
      )
        break;
      if (
        ((e = vr(n.strm, n.window, n.strstart + n.lookahead, r)),
        (n.lookahead += e),
        n.lookahead + n.insert >= P)
      )
        for (
          i = n.strstart - n.insert,
            n.ins_h = n.window[i],
            n.ins_h = De(n, n.ins_h, n.window[i + 1]);
          n.insert &&
          ((n.ins_h = De(n, n.ins_h, n.window[i + P - 1])),
          (n.prev[i & n.w_mask] = n.head[n.ins_h]),
          (n.head[n.ins_h] = i),
          i++,
          n.insert--,
          !(n.lookahead + n.insert < P));

        );
    } while (n.lookahead < _e && n.strm.avail_in !== 0);
  },
  Ya = (n, t) => {
    let e =
        n.pending_buf_size - 5 > n.w_size ? n.w_size : n.pending_buf_size - 5,
      r,
      i,
      a,
      o = 0,
      s = n.strm.avail_in;
    do {
      if (
        ((r = 65535),
        (a = (n.bi_valid + 42) >> 3),
        n.strm.avail_out < a ||
          ((a = n.strm.avail_out - a),
          (i = n.strstart - n.block_start),
          r > i + n.strm.avail_in && (r = i + n.strm.avail_in),
          r > a && (r = a),
          r < e &&
            ((r === 0 && t !== ae) || t === Oe || r !== i + n.strm.avail_in)))
      )
        break;
      (o = t === ae && r === i + n.strm.avail_in ? 1 : 0),
        _r(n, 0, 0, o),
        (n.pending_buf[n.pending - 4] = r),
        (n.pending_buf[n.pending - 3] = r >> 8),
        (n.pending_buf[n.pending - 2] = ~r),
        (n.pending_buf[n.pending - 1] = ~r >> 8),
        te(n.strm),
        i &&
          (i > r && (i = r),
          n.strm.output.set(
            n.window.subarray(n.block_start, n.block_start + i),
            n.strm.next_out
          ),
          (n.strm.next_out += i),
          (n.strm.avail_out -= i),
          (n.strm.total_out += i),
          (n.block_start += i),
          (r -= i)),
        r &&
          (vr(n.strm, n.strm.output, n.strm.next_out, r),
          (n.strm.next_out += r),
          (n.strm.avail_out -= r),
          (n.strm.total_out += r));
    } while (o === 0);
    return (
      (s -= n.strm.avail_in),
      s &&
        (s >= n.w_size
          ? ((n.matches = 2),
            n.window.set(
              n.strm.input.subarray(n.strm.next_in - n.w_size, n.strm.next_in),
              0
            ),
            (n.strstart = n.w_size),
            (n.insert = n.strstart))
          : (n.window_size - n.strstart <= s &&
              ((n.strstart -= n.w_size),
              n.window.set(
                n.window.subarray(n.w_size, n.w_size + n.strstart),
                0
              ),
              n.matches < 2 && n.matches++,
              n.insert > n.strstart && (n.insert = n.strstart)),
            n.window.set(
              n.strm.input.subarray(n.strm.next_in - s, n.strm.next_in),
              n.strstart
            ),
            (n.strstart += s),
            (n.insert += s > n.w_size - n.insert ? n.w_size - n.insert : s)),
        (n.block_start = n.strstart)),
      n.high_water < n.strstart && (n.high_water = n.strstart),
      o
        ? ot
        : t !== Oe &&
          t !== ae &&
          n.strm.avail_in === 0 &&
          n.strstart === n.block_start
        ? at
        : ((a = n.window_size - n.strstart),
          n.strm.avail_in > a &&
            n.block_start >= n.w_size &&
            ((n.block_start -= n.w_size),
            (n.strstart -= n.w_size),
            n.window.set(n.window.subarray(n.w_size, n.w_size + n.strstart), 0),
            n.matches < 2 && n.matches++,
            (a += n.w_size),
            n.insert > n.strstart && (n.insert = n.strstart)),
          a > n.strm.avail_in && (a = n.strm.avail_in),
          a &&
            (vr(n.strm, n.window, n.strstart, a),
            (n.strstart += a),
            (n.insert += a > n.w_size - n.insert ? n.w_size - n.insert : a)),
          n.high_water < n.strstart && (n.high_water = n.strstart),
          (a = (n.bi_valid + 42) >> 3),
          (a = n.pending_buf_size - a > 65535 ? 65535 : n.pending_buf_size - a),
          (e = a > n.w_size ? n.w_size : a),
          (i = n.strstart - n.block_start),
          (i >= e ||
            ((i || t === ae) && t !== Oe && n.strm.avail_in === 0 && i <= a)) &&
            ((r = i > a ? a : i),
            (o = t === ae && n.strm.avail_in === 0 && r === i ? 1 : 0),
            _r(n, n.block_start, r, o),
            (n.block_start += r),
            te(n.strm)),
          o ? Fe : Q)
    );
  },
  ir = (n, t) => {
    let e, r;
    for (;;) {
      if (n.lookahead < _e) {
        if ((nt(n), n.lookahead < _e && t === Oe)) return Q;
        if (n.lookahead === 0) break;
      }
      if (
        ((e = 0),
        n.lookahead >= P &&
          ((n.ins_h = De(n, n.ins_h, n.window[n.strstart + P - 1])),
          (e = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h]),
          (n.head[n.ins_h] = n.strstart)),
        e !== 0 &&
          n.strstart - e <= n.w_size - _e &&
          (n.match_length = Wa(n, e)),
        n.match_length >= P)
      )
        if (
          ((r = Le(n, n.strstart - n.match_start, n.match_length - P)),
          (n.lookahead -= n.match_length),
          n.match_length <= n.max_lazy_match && n.lookahead >= P)
        ) {
          n.match_length--;
          do
            n.strstart++,
              (n.ins_h = De(n, n.ins_h, n.window[n.strstart + P - 1])),
              (e = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h]),
              (n.head[n.ins_h] = n.strstart);
          while (--n.match_length !== 0);
          n.strstart++;
        } else
          (n.strstart += n.match_length),
            (n.match_length = 0),
            (n.ins_h = n.window[n.strstart]),
            (n.ins_h = De(n, n.ins_h, n.window[n.strstart + 1]));
      else (r = Le(n, 0, n.window[n.strstart])), n.lookahead--, n.strstart++;
      if (r && (ne(n, !1), n.strm.avail_out === 0)) return Q;
    }
    return (
      (n.insert = n.strstart < P - 1 ? n.strstart : P - 1),
      t === ae
        ? (ne(n, !0), n.strm.avail_out === 0 ? Fe : ot)
        : n.sym_next && (ne(n, !1), n.strm.avail_out === 0)
        ? Q
        : at
    );
  },
  Je = (n, t) => {
    let e, r, i;
    for (;;) {
      if (n.lookahead < _e) {
        if ((nt(n), n.lookahead < _e && t === Oe)) return Q;
        if (n.lookahead === 0) break;
      }
      if (
        ((e = 0),
        n.lookahead >= P &&
          ((n.ins_h = De(n, n.ins_h, n.window[n.strstart + P - 1])),
          (e = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h]),
          (n.head[n.ins_h] = n.strstart)),
        (n.prev_length = n.match_length),
        (n.prev_match = n.match_start),
        (n.match_length = P - 1),
        e !== 0 &&
          n.prev_length < n.max_lazy_match &&
          n.strstart - e <= n.w_size - _e &&
          ((n.match_length = Wa(n, e)),
          n.match_length <= 5 &&
            (n.strategy === ac ||
              (n.match_length === P && n.strstart - n.match_start > 4096)) &&
            (n.match_length = P - 1)),
        n.prev_length >= P && n.match_length <= n.prev_length)
      ) {
        (i = n.strstart + n.lookahead - P),
          (r = Le(n, n.strstart - 1 - n.prev_match, n.prev_length - P)),
          (n.lookahead -= n.prev_length - 1),
          (n.prev_length -= 2);
        do
          ++n.strstart <= i &&
            ((n.ins_h = De(n, n.ins_h, n.window[n.strstart + P - 1])),
            (e = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h]),
            (n.head[n.ins_h] = n.strstart));
        while (--n.prev_length !== 0);
        if (
          ((n.match_available = 0),
          (n.match_length = P - 1),
          n.strstart++,
          r && (ne(n, !1), n.strm.avail_out === 0))
        )
          return Q;
      } else if (n.match_available) {
        if (
          ((r = Le(n, 0, n.window[n.strstart - 1])),
          r && ne(n, !1),
          n.strstart++,
          n.lookahead--,
          n.strm.avail_out === 0)
        )
          return Q;
      } else (n.match_available = 1), n.strstart++, n.lookahead--;
    }
    return (
      n.match_available &&
        ((r = Le(n, 0, n.window[n.strstart - 1])), (n.match_available = 0)),
      (n.insert = n.strstart < P - 1 ? n.strstart : P - 1),
      t === ae
        ? (ne(n, !0), n.strm.avail_out === 0 ? Fe : ot)
        : n.sym_next && (ne(n, !1), n.strm.avail_out === 0)
        ? Q
        : at
    );
  },
  Ac = (n, t) => {
    let e,
      r,
      i,
      a,
      o = n.window;
    for (;;) {
      if (n.lookahead <= Re) {
        if ((nt(n), n.lookahead <= Re && t === Oe)) return Q;
        if (n.lookahead === 0) break;
      }
      if (
        ((n.match_length = 0),
        n.lookahead >= P &&
          n.strstart > 0 &&
          ((i = n.strstart - 1),
          (r = o[i]),
          r === o[++i] && r === o[++i] && r === o[++i]))
      ) {
        a = n.strstart + Re;
        do;
        while (
          r === o[++i] &&
          r === o[++i] &&
          r === o[++i] &&
          r === o[++i] &&
          r === o[++i] &&
          r === o[++i] &&
          r === o[++i] &&
          r === o[++i] &&
          i < a
        );
        (n.match_length = Re - (a - i)),
          n.match_length > n.lookahead && (n.match_length = n.lookahead);
      }
      if (
        (n.match_length >= P
          ? ((e = Le(n, 1, n.match_length - P)),
            (n.lookahead -= n.match_length),
            (n.strstart += n.match_length),
            (n.match_length = 0))
          : ((e = Le(n, 0, n.window[n.strstart])), n.lookahead--, n.strstart++),
        e && (ne(n, !1), n.strm.avail_out === 0))
      )
        return Q;
    }
    return (
      (n.insert = 0),
      t === ae
        ? (ne(n, !0), n.strm.avail_out === 0 ? Fe : ot)
        : n.sym_next && (ne(n, !1), n.strm.avail_out === 0)
        ? Q
        : at
    );
  },
  xc = (n, t) => {
    let e;
    for (;;) {
      if (n.lookahead === 0 && (nt(n), n.lookahead === 0)) {
        if (t === Oe) return Q;
        break;
      }
      if (
        ((n.match_length = 0),
        (e = Le(n, 0, n.window[n.strstart])),
        n.lookahead--,
        n.strstart++,
        e && (ne(n, !1), n.strm.avail_out === 0))
      )
        return Q;
    }
    return (
      (n.insert = 0),
      t === ae
        ? (ne(n, !0), n.strm.avail_out === 0 ? Fe : ot)
        : n.sym_next && (ne(n, !1), n.strm.avail_out === 0)
        ? Q
        : at
    );
  };
function fe(n, t, e, r, i) {
  (this.good_length = n),
    (this.max_lazy = t),
    (this.nice_length = e),
    (this.max_chain = r),
    (this.func = i);
}
var mt = [
    new fe(0, 0, 0, 0, Ya),
    new fe(4, 4, 8, 4, ir),
    new fe(4, 5, 16, 8, ir),
    new fe(4, 6, 32, 32, ir),
    new fe(4, 4, 16, 16, Je),
    new fe(8, 16, 32, 32, Je),
    new fe(8, 16, 128, 128, Je),
    new fe(8, 32, 128, 256, Je),
    new fe(32, 128, 258, 1024, Je),
    new fe(32, 258, 258, 4096, Je),
  ],
  kc = (n) => {
    (n.window_size = 2 * n.w_size),
      Te(n.head),
      (n.max_lazy_match = mt[n.level].max_lazy),
      (n.good_match = mt[n.level].good_length),
      (n.nice_match = mt[n.level].nice_length),
      (n.max_chain_length = mt[n.level].max_chain),
      (n.strstart = 0),
      (n.block_start = 0),
      (n.lookahead = 0),
      (n.insert = 0),
      (n.match_length = n.prev_length = P - 1),
      (n.match_available = 0),
      (n.ins_h = 0);
  };
function Sc() {
  (this.strm = null),
    (this.status = 0),
    (this.pending_buf = null),
    (this.pending_buf_size = 0),
    (this.pending_out = 0),
    (this.pending = 0),
    (this.wrap = 0),
    (this.gzhead = null),
    (this.gzindex = 0),
    (this.method = _n),
    (this.last_flush = -1),
    (this.w_size = 0),
    (this.w_bits = 0),
    (this.w_mask = 0),
    (this.window = null),
    (this.window_size = 0),
    (this.prev = null),
    (this.head = null),
    (this.ins_h = 0),
    (this.hash_size = 0),
    (this.hash_bits = 0),
    (this.hash_mask = 0),
    (this.hash_shift = 0),
    (this.block_start = 0),
    (this.match_length = 0),
    (this.prev_match = 0),
    (this.match_available = 0),
    (this.strstart = 0),
    (this.match_start = 0),
    (this.lookahead = 0),
    (this.prev_length = 0),
    (this.max_chain_length = 0),
    (this.max_lazy_match = 0),
    (this.level = 0),
    (this.strategy = 0),
    (this.good_match = 0),
    (this.nice_match = 0),
    (this.dyn_ltree = new Uint16Array(gc * 2)),
    (this.dyn_dtree = new Uint16Array((2 * _c + 1) * 2)),
    (this.bl_tree = new Uint16Array((2 * wc + 1) * 2)),
    Te(this.dyn_ltree),
    Te(this.dyn_dtree),
    Te(this.bl_tree),
    (this.l_desc = null),
    (this.d_desc = null),
    (this.bl_desc = null),
    (this.bl_count = new Uint16Array(mc + 1)),
    (this.heap = new Uint16Array(2 * wr + 1)),
    Te(this.heap),
    (this.heap_len = 0),
    (this.heap_max = 0),
    (this.depth = new Uint16Array(2 * wr + 1)),
    Te(this.depth),
    (this.sym_buf = 0),
    (this.lit_bufsize = 0),
    (this.sym_next = 0),
    (this.sym_end = 0),
    (this.opt_len = 0),
    (this.static_len = 0),
    (this.matches = 0),
    (this.insert = 0),
    (this.bi_buf = 0),
    (this.bi_valid = 0);
}
var Ot = (n) => {
    if (!n) return 1;
    let t = n.state;
    return !t ||
      t.strm !== n ||
      (t.status !== tt &&
        t.status !== Sr &&
        t.status !== gr &&
        t.status !== mr &&
        t.status !== yr &&
        t.status !== br &&
        t.status !== Me &&
        t.status !== gt)
      ? 1
      : 0;
  },
  Xa = (n) => {
    if (Ot(n)) return $e(n, pe);
    (n.total_in = n.total_out = 0), (n.data_type = uc);
    let t = n.state;
    return (
      (t.pending = 0),
      (t.pending_out = 0),
      t.wrap < 0 && (t.wrap = -t.wrap),
      (t.status = t.wrap === 2 ? Sr : t.wrap ? tt : Me),
      (n.adler = t.wrap === 2 ? 0 : 1),
      (t.last_flush = -2),
      Js(t),
      G
    );
  },
  Ja = (n) => {
    let t = Xa(n);
    return t === G && kc(n.state), t;
  },
  Ic = (n, t) => (Ot(n) || n.state.wrap !== 2 ? pe : ((n.state.gzhead = t), G)),
  Qa = (n, t, e, r, i, a) => {
    if (!n) return pe;
    let o = 1;
    if (
      (t === ic && (t = 6),
      r < 0 ? ((o = 0), (r = -r)) : r > 15 && ((o = 2), (r -= 16)),
      i < 1 ||
        i > lc ||
        e !== _n ||
        r < 8 ||
        r > 15 ||
        t < 0 ||
        t > 9 ||
        a < 0 ||
        a > sc ||
        (r === 8 && o !== 1))
    )
      return $e(n, pe);
    r === 8 && (r = 9);
    let s = new Sc();
    return (
      (n.state = s),
      (s.strm = n),
      (s.status = tt),
      (s.wrap = o),
      (s.gzhead = null),
      (s.w_bits = r),
      (s.w_size = 1 << s.w_bits),
      (s.w_mask = s.w_size - 1),
      (s.hash_bits = i + 7),
      (s.hash_size = 1 << s.hash_bits),
      (s.hash_mask = s.hash_size - 1),
      (s.hash_shift = ~~((s.hash_bits + P - 1) / P)),
      (s.window = new Uint8Array(s.w_size * 2)),
      (s.head = new Uint16Array(s.hash_size)),
      (s.prev = new Uint16Array(s.w_size)),
      (s.lit_bufsize = 1 << (i + 6)),
      (s.pending_buf_size = s.lit_bufsize * 4),
      (s.pending_buf = new Uint8Array(s.pending_buf_size)),
      (s.sym_buf = s.lit_bufsize),
      (s.sym_end = (s.lit_bufsize - 1) * 3),
      (s.level = t),
      (s.strategy = a),
      (s.method = e),
      Ja(n)
    );
  },
  Tc = (n, t) => Qa(n, t, _n, dc, fc, cc),
  Rc = (n, t) => {
    if (Ot(n) || t > ta || t < 0) return n ? $e(n, pe) : pe;
    let e = n.state;
    if (
      !n.output ||
      (n.avail_in !== 0 && !n.input) ||
      (e.status === gt && t !== ae)
    )
      return $e(n, n.avail_out === 0 ? rr : pe);
    let r = e.last_flush;
    if (((e.last_flush = t), e.pending !== 0)) {
      if ((te(n), n.avail_out === 0)) return (e.last_flush = -1), G;
    } else if (n.avail_in === 0 && ra(t) <= ra(r) && t !== ae) return $e(n, rr);
    if (e.status === gt && n.avail_in !== 0) return $e(n, rr);
    if ((e.status === tt && e.wrap === 0 && (e.status = Me), e.status === tt)) {
      let i = (_n + ((e.w_bits - 8) << 4)) << 8,
        a = -1;
      if (
        (e.strategy >= on || e.level < 2
          ? (a = 0)
          : e.level < 6
          ? (a = 1)
          : e.level === 6
          ? (a = 2)
          : (a = 3),
        (i |= a << 6),
        e.strstart !== 0 && (i |= yc),
        (i += 31 - (i % 31)),
        wt(e, i),
        e.strstart !== 0 && (wt(e, n.adler >>> 16), wt(e, n.adler & 65535)),
        (n.adler = 1),
        (e.status = Me),
        te(n),
        e.pending !== 0)
      )
        return (e.last_flush = -1), G;
    }
    if (e.status === Sr) {
      if (((n.adler = 0), B(e, 31), B(e, 139), B(e, 8), e.gzhead))
        B(
          e,
          (e.gzhead.text ? 1 : 0) +
            (e.gzhead.hcrc ? 2 : 0) +
            (e.gzhead.extra ? 4 : 0) +
            (e.gzhead.name ? 8 : 0) +
            (e.gzhead.comment ? 16 : 0)
        ),
          B(e, e.gzhead.time & 255),
          B(e, (e.gzhead.time >> 8) & 255),
          B(e, (e.gzhead.time >> 16) & 255),
          B(e, (e.gzhead.time >> 24) & 255),
          B(e, e.level === 9 ? 2 : e.strategy >= on || e.level < 2 ? 4 : 0),
          B(e, e.gzhead.os & 255),
          e.gzhead.extra &&
            e.gzhead.extra.length &&
            (B(e, e.gzhead.extra.length & 255),
            B(e, (e.gzhead.extra.length >> 8) & 255)),
          e.gzhead.hcrc && (n.adler = K(n.adler, e.pending_buf, e.pending, 0)),
          (e.gzindex = 0),
          (e.status = gr);
      else if (
        (B(e, 0),
        B(e, 0),
        B(e, 0),
        B(e, 0),
        B(e, 0),
        B(e, e.level === 9 ? 2 : e.strategy >= on || e.level < 2 ? 4 : 0),
        B(e, bc),
        (e.status = Me),
        te(n),
        e.pending !== 0)
      )
        return (e.last_flush = -1), G;
    }
    if (e.status === gr) {
      if (e.gzhead.extra) {
        let i = e.pending,
          a = (e.gzhead.extra.length & 65535) - e.gzindex;
        for (; e.pending + a > e.pending_buf_size; ) {
          let s = e.pending_buf_size - e.pending;
          if (
            (e.pending_buf.set(
              e.gzhead.extra.subarray(e.gzindex, e.gzindex + s),
              e.pending
            ),
            (e.pending = e.pending_buf_size),
            e.gzhead.hcrc &&
              e.pending > i &&
              (n.adler = K(n.adler, e.pending_buf, e.pending - i, i)),
            (e.gzindex += s),
            te(n),
            e.pending !== 0)
          )
            return (e.last_flush = -1), G;
          (i = 0), (a -= s);
        }
        let o = new Uint8Array(e.gzhead.extra);
        e.pending_buf.set(o.subarray(e.gzindex, e.gzindex + a), e.pending),
          (e.pending += a),
          e.gzhead.hcrc &&
            e.pending > i &&
            (n.adler = K(n.adler, e.pending_buf, e.pending - i, i)),
          (e.gzindex = 0);
      }
      e.status = mr;
    }
    if (e.status === mr) {
      if (e.gzhead.name) {
        let i = e.pending,
          a;
        do {
          if (e.pending === e.pending_buf_size) {
            if (
              (e.gzhead.hcrc &&
                e.pending > i &&
                (n.adler = K(n.adler, e.pending_buf, e.pending - i, i)),
              te(n),
              e.pending !== 0)
            )
              return (e.last_flush = -1), G;
            i = 0;
          }
          e.gzindex < e.gzhead.name.length
            ? (a = e.gzhead.name.charCodeAt(e.gzindex++) & 255)
            : (a = 0),
            B(e, a);
        } while (a !== 0);
        e.gzhead.hcrc &&
          e.pending > i &&
          (n.adler = K(n.adler, e.pending_buf, e.pending - i, i)),
          (e.gzindex = 0);
      }
      e.status = yr;
    }
    if (e.status === yr) {
      if (e.gzhead.comment) {
        let i = e.pending,
          a;
        do {
          if (e.pending === e.pending_buf_size) {
            if (
              (e.gzhead.hcrc &&
                e.pending > i &&
                (n.adler = K(n.adler, e.pending_buf, e.pending - i, i)),
              te(n),
              e.pending !== 0)
            )
              return (e.last_flush = -1), G;
            i = 0;
          }
          e.gzindex < e.gzhead.comment.length
            ? (a = e.gzhead.comment.charCodeAt(e.gzindex++) & 255)
            : (a = 0),
            B(e, a);
        } while (a !== 0);
        e.gzhead.hcrc &&
          e.pending > i &&
          (n.adler = K(n.adler, e.pending_buf, e.pending - i, i));
      }
      e.status = br;
    }
    if (e.status === br) {
      if (e.gzhead.hcrc) {
        if (e.pending + 2 > e.pending_buf_size && (te(n), e.pending !== 0))
          return (e.last_flush = -1), G;
        B(e, n.adler & 255), B(e, (n.adler >> 8) & 255), (n.adler = 0);
      }
      if (((e.status = Me), te(n), e.pending !== 0))
        return (e.last_flush = -1), G;
    }
    if (
      n.avail_in !== 0 ||
      e.lookahead !== 0 ||
      (t !== Oe && e.status !== gt)
    ) {
      let i =
        e.level === 0
          ? Ya(e, t)
          : e.strategy === on
          ? xc(e, t)
          : e.strategy === oc
          ? Ac(e, t)
          : mt[e.level].func(e, t);
      if (((i === Fe || i === ot) && (e.status = gt), i === Q || i === Fe))
        return n.avail_out === 0 && (e.last_flush = -1), G;
      if (
        i === at &&
        (t === tc
          ? ec(e)
          : t !== ta &&
            (_r(e, 0, 0, !1),
            t === nc &&
              (Te(e.head),
              e.lookahead === 0 &&
                ((e.strstart = 0), (e.block_start = 0), (e.insert = 0)))),
        te(n),
        n.avail_out === 0)
      )
        return (e.last_flush = -1), G;
    }
    return t !== ae
      ? G
      : e.wrap <= 0
      ? na
      : (e.wrap === 2
          ? (B(e, n.adler & 255),
            B(e, (n.adler >> 8) & 255),
            B(e, (n.adler >> 16) & 255),
            B(e, (n.adler >> 24) & 255),
            B(e, n.total_in & 255),
            B(e, (n.total_in >> 8) & 255),
            B(e, (n.total_in >> 16) & 255),
            B(e, (n.total_in >> 24) & 255))
          : (wt(e, n.adler >>> 16), wt(e, n.adler & 65535)),
        te(n),
        e.wrap > 0 && (e.wrap = -e.wrap),
        e.pending !== 0 ? G : na);
  },
  Lc = (n) => {
    if (Ot(n)) return pe;
    let t = n.state.status;
    return (n.state = null), t === Me ? $e(n, rc) : G;
  },
  Oc = (n, t) => {
    let e = t.length;
    if (Ot(n)) return pe;
    let r = n.state,
      i = r.wrap;
    if (i === 2 || (i === 1 && r.status !== tt) || r.lookahead) return pe;
    if (
      (i === 1 && (n.adler = St(n.adler, t, e, 0)), (r.wrap = 0), e >= r.w_size)
    ) {
      i === 0 &&
        (Te(r.head), (r.strstart = 0), (r.block_start = 0), (r.insert = 0));
      let l = new Uint8Array(r.w_size);
      l.set(t.subarray(e - r.w_size, e), 0), (t = l), (e = r.w_size);
    }
    let a = n.avail_in,
      o = n.next_in,
      s = n.input;
    for (
      n.avail_in = e, n.next_in = 0, n.input = t, nt(r);
      r.lookahead >= P;

    ) {
      let l = r.strstart,
        c = r.lookahead - (P - 1);
      do
        (r.ins_h = De(r, r.ins_h, r.window[l + P - 1])),
          (r.prev[l & r.w_mask] = r.head[r.ins_h]),
          (r.head[r.ins_h] = l),
          l++;
      while (--c);
      (r.strstart = l), (r.lookahead = P - 1), nt(r);
    }
    return (
      (r.strstart += r.lookahead),
      (r.block_start = r.strstart),
      (r.insert = r.lookahead),
      (r.lookahead = 0),
      (r.match_length = r.prev_length = P - 1),
      (r.match_available = 0),
      (n.next_in = o),
      (n.input = s),
      (n.avail_in = a),
      (r.wrap = i),
      G
    );
  },
  Dc = Tc,
  Cc = Qa,
  zc = Ja,
  Pc = Xa,
  Nc = Ic,
  Bc = Rc,
  Uc = Lc,
  Mc = Oc,
  $c = "pako deflate (from Nodeca project)",
  bt = {
    deflateInit: Dc,
    deflateInit2: Cc,
    deflateReset: zc,
    deflateResetKeep: Pc,
    deflateSetHeader: Nc,
    deflate: Bc,
    deflateEnd: Uc,
    deflateSetDictionary: Mc,
    deflateInfo: $c,
  },
  Zc = (n, t) => Object.prototype.hasOwnProperty.call(n, t),
  Fc = function (n) {
    let t = Array.prototype.slice.call(arguments, 1);
    for (; t.length; ) {
      let e = t.shift();
      if (e) {
        if (typeof e != "object") throw new TypeError(e + "must be non-object");
        for (let r in e) Zc(e, r) && (n[r] = e[r]);
      }
    }
    return n;
  },
  jc = (n) => {
    let t = 0;
    for (let r = 0, i = n.length; r < i; r++) t += n[r].length;
    let e = new Uint8Array(t);
    for (let r = 0, i = 0, a = n.length; r < a; r++) {
      let o = n[r];
      e.set(o, i), (i += o.length);
    }
    return e;
  },
  wn = { assign: Fc, flattenChunks: jc },
  eo = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  eo = !1;
}
var It = new Uint8Array(256);
for (let n = 0; n < 256; n++)
  It[n] =
    n >= 252
      ? 6
      : n >= 248
      ? 5
      : n >= 240
      ? 4
      : n >= 224
      ? 3
      : n >= 192
      ? 2
      : 1;
It[254] = It[254] = 1;
var Vc = (n) => {
    if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
      return new TextEncoder().encode(n);
    let t,
      e,
      r,
      i,
      a,
      o = n.length,
      s = 0;
    for (i = 0; i < o; i++)
      (e = n.charCodeAt(i)),
        (e & 64512) === 55296 &&
          i + 1 < o &&
          ((r = n.charCodeAt(i + 1)),
          (r & 64512) === 56320 &&
            ((e = 65536 + ((e - 55296) << 10) + (r - 56320)), i++)),
        (s += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4);
    for (t = new Uint8Array(s), a = 0, i = 0; a < s; i++)
      (e = n.charCodeAt(i)),
        (e & 64512) === 55296 &&
          i + 1 < o &&
          ((r = n.charCodeAt(i + 1)),
          (r & 64512) === 56320 &&
            ((e = 65536 + ((e - 55296) << 10) + (r - 56320)), i++)),
        e < 128
          ? (t[a++] = e)
          : e < 2048
          ? ((t[a++] = 192 | (e >>> 6)), (t[a++] = 128 | (e & 63)))
          : e < 65536
          ? ((t[a++] = 224 | (e >>> 12)),
            (t[a++] = 128 | ((e >>> 6) & 63)),
            (t[a++] = 128 | (e & 63)))
          : ((t[a++] = 240 | (e >>> 18)),
            (t[a++] = 128 | ((e >>> 12) & 63)),
            (t[a++] = 128 | ((e >>> 6) & 63)),
            (t[a++] = 128 | (e & 63)));
    return t;
  },
  Kc = (n, t) => {
    if (t < 65534 && n.subarray && eo)
      return String.fromCharCode.apply(
        null,
        n.length === t ? n : n.subarray(0, t)
      );
    let e = "";
    for (let r = 0; r < t; r++) e += String.fromCharCode(n[r]);
    return e;
  },
  Hc = (n, t) => {
    let e = t || n.length;
    if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
      return new TextDecoder().decode(n.subarray(0, t));
    let r,
      i,
      a = new Array(e * 2);
    for (i = 0, r = 0; r < e; ) {
      let o = n[r++];
      if (o < 128) {
        a[i++] = o;
        continue;
      }
      let s = It[o];
      if (s > 4) {
        (a[i++] = 65533), (r += s - 1);
        continue;
      }
      for (o &= s === 2 ? 31 : s === 3 ? 15 : 7; s > 1 && r < e; )
        (o = (o << 6) | (n[r++] & 63)), s--;
      if (s > 1) {
        a[i++] = 65533;
        continue;
      }
      o < 65536
        ? (a[i++] = o)
        : ((o -= 65536),
          (a[i++] = 55296 | ((o >> 10) & 1023)),
          (a[i++] = 56320 | (o & 1023)));
    }
    return Kc(a, i);
  },
  qc = (n, t) => {
    (t = t || n.length), t > n.length && (t = n.length);
    let e = t - 1;
    for (; e >= 0 && (n[e] & 192) === 128; ) e--;
    return e < 0 || e === 0 ? t : e + It[n[e]] > t ? e : t;
  },
  Tt = { string2buf: Vc, buf2string: Hc, utf8border: qc };
function Gc() {
  (this.input = null),
    (this.next_in = 0),
    (this.avail_in = 0),
    (this.total_in = 0),
    (this.output = null),
    (this.next_out = 0),
    (this.avail_out = 0),
    (this.total_out = 0),
    (this.msg = ""),
    (this.state = null),
    (this.data_type = 2),
    (this.adler = 0);
}
var to = Gc,
  no = Object.prototype.toString,
  {
    Z_NO_FLUSH: Wc,
    Z_SYNC_FLUSH: Yc,
    Z_FULL_FLUSH: Xc,
    Z_FINISH: Jc,
    Z_OK: hn,
    Z_STREAM_END: Qc,
    Z_DEFAULT_COMPRESSION: eu,
    Z_DEFAULT_STRATEGY: tu,
    Z_DEFLATED: nu,
  } = it;
function Dt(n) {
  this.options = wn.assign(
    {
      level: eu,
      method: nu,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: tu,
    },
    n || {}
  );
  let t = this.options;
  t.raw && t.windowBits > 0
    ? (t.windowBits = -t.windowBits)
    : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16),
    (this.err = 0),
    (this.msg = ""),
    (this.ended = !1),
    (this.chunks = []),
    (this.strm = new to()),
    (this.strm.avail_out = 0);
  let e = bt.deflateInit2(
    this.strm,
    t.level,
    t.method,
    t.windowBits,
    t.memLevel,
    t.strategy
  );
  if (e !== hn) throw new Error(Ze[e]);
  if ((t.header && bt.deflateSetHeader(this.strm, t.header), t.dictionary)) {
    let r;
    if (
      (typeof t.dictionary == "string"
        ? (r = Tt.string2buf(t.dictionary))
        : no.call(t.dictionary) === "[object ArrayBuffer]"
        ? (r = new Uint8Array(t.dictionary))
        : (r = t.dictionary),
      (e = bt.deflateSetDictionary(this.strm, r)),
      e !== hn)
    )
      throw new Error(Ze[e]);
    this._dict_set = !0;
  }
}
Dt.prototype.push = function (n, t) {
  let e = this.strm,
    r = this.options.chunkSize,
    i,
    a;
  if (this.ended) return !1;
  for (
    t === ~~t ? (a = t) : (a = t === !0 ? Jc : Wc),
      typeof n == "string"
        ? (e.input = Tt.string2buf(n))
        : no.call(n) === "[object ArrayBuffer]"
        ? (e.input = new Uint8Array(n))
        : (e.input = n),
      e.next_in = 0,
      e.avail_in = e.input.length;
    ;

  ) {
    if (
      (e.avail_out === 0 &&
        ((e.output = new Uint8Array(r)), (e.next_out = 0), (e.avail_out = r)),
      (a === Yc || a === Xc) && e.avail_out <= 6)
    ) {
      this.onData(e.output.subarray(0, e.next_out)), (e.avail_out = 0);
      continue;
    }
    if (((i = bt.deflate(e, a)), i === Qc))
      return (
        e.next_out > 0 && this.onData(e.output.subarray(0, e.next_out)),
        (i = bt.deflateEnd(this.strm)),
        this.onEnd(i),
        (this.ended = !0),
        i === hn
      );
    if (e.avail_out === 0) {
      this.onData(e.output);
      continue;
    }
    if (a > 0 && e.next_out > 0) {
      this.onData(e.output.subarray(0, e.next_out)), (e.avail_out = 0);
      continue;
    }
    if (e.avail_in === 0) break;
  }
  return !0;
};
Dt.prototype.onData = function (n) {
  this.chunks.push(n);
};
Dt.prototype.onEnd = function (n) {
  n === hn && (this.result = wn.flattenChunks(this.chunks)),
    (this.chunks = []),
    (this.err = n),
    (this.msg = this.strm.msg);
};
function Ir(n, t) {
  let e = new Dt(t);
  if ((e.push(n, !0), e.err)) throw e.msg || Ze[e.err];
  return e.result;
}
function ru(n, t) {
  return (t = t || {}), (t.raw = !0), Ir(n, t);
}
function iu(n, t) {
  return (t = t || {}), (t.gzip = !0), Ir(n, t);
}
var au = Dt,
  ou = Ir,
  su = ru,
  cu = iu,
  uu = it,
  lu = { Deflate: au, deflate: ou, deflateRaw: su, gzip: cu, constants: uu },
  sn = 16209,
  du = 16191,
  fu = function (t, e) {
    let r,
      i,
      a,
      o,
      s,
      l,
      c,
      u,
      _,
      h,
      d,
      p,
      b,
      E,
      S,
      O,
      R,
      g,
      L,
      F,
      A,
      z,
      C,
      T,
      I = t.state;
    (r = t.next_in),
      (C = t.input),
      (i = r + (t.avail_in - 5)),
      (a = t.next_out),
      (T = t.output),
      (o = a - (e - t.avail_out)),
      (s = a + (t.avail_out - 257)),
      (l = I.dmax),
      (c = I.wsize),
      (u = I.whave),
      (_ = I.wnext),
      (h = I.window),
      (d = I.hold),
      (p = I.bits),
      (b = I.lencode),
      (E = I.distcode),
      (S = (1 << I.lenbits) - 1),
      (O = (1 << I.distbits) - 1);
    e: do {
      p < 15 && ((d += C[r++] << p), (p += 8), (d += C[r++] << p), (p += 8)),
        (R = b[d & S]);
      t: for (;;) {
        if (
          ((g = R >>> 24),
          (d >>>= g),
          (p -= g),
          (g = (R >>> 16) & 255),
          g === 0)
        )
          T[a++] = R & 65535;
        else if (g & 16) {
          (L = R & 65535),
            (g &= 15),
            g &&
              (p < g && ((d += C[r++] << p), (p += 8)),
              (L += d & ((1 << g) - 1)),
              (d >>>= g),
              (p -= g)),
            p < 15 &&
              ((d += C[r++] << p), (p += 8), (d += C[r++] << p), (p += 8)),
            (R = E[d & O]);
          n: for (;;) {
            if (
              ((g = R >>> 24),
              (d >>>= g),
              (p -= g),
              (g = (R >>> 16) & 255),
              g & 16)
            ) {
              if (
                ((F = R & 65535),
                (g &= 15),
                p < g &&
                  ((d += C[r++] << p),
                  (p += 8),
                  p < g && ((d += C[r++] << p), (p += 8))),
                (F += d & ((1 << g) - 1)),
                F > l)
              ) {
                (t.msg = "invalid distance too far back"), (I.mode = sn);
                break e;
              }
              if (((d >>>= g), (p -= g), (g = a - o), F > g)) {
                if (((g = F - g), g > u && I.sane)) {
                  (t.msg = "invalid distance too far back"), (I.mode = sn);
                  break e;
                }
                if (((A = 0), (z = h), _ === 0)) {
                  if (((A += c - g), g < L)) {
                    L -= g;
                    do T[a++] = h[A++];
                    while (--g);
                    (A = a - F), (z = T);
                  }
                } else if (_ < g) {
                  if (((A += c + _ - g), (g -= _), g < L)) {
                    L -= g;
                    do T[a++] = h[A++];
                    while (--g);
                    if (((A = 0), _ < L)) {
                      (g = _), (L -= g);
                      do T[a++] = h[A++];
                      while (--g);
                      (A = a - F), (z = T);
                    }
                  }
                } else if (((A += _ - g), g < L)) {
                  L -= g;
                  do T[a++] = h[A++];
                  while (--g);
                  (A = a - F), (z = T);
                }
                for (; L > 2; )
                  (T[a++] = z[A++]),
                    (T[a++] = z[A++]),
                    (T[a++] = z[A++]),
                    (L -= 3);
                L && ((T[a++] = z[A++]), L > 1 && (T[a++] = z[A++]));
              } else {
                A = a - F;
                do
                  (T[a++] = T[A++]),
                    (T[a++] = T[A++]),
                    (T[a++] = T[A++]),
                    (L -= 3);
                while (L > 2);
                L && ((T[a++] = T[A++]), L > 1 && (T[a++] = T[A++]));
              }
            } else if (g & 64) {
              (t.msg = "invalid distance code"), (I.mode = sn);
              break e;
            } else {
              R = E[(R & 65535) + (d & ((1 << g) - 1))];
              continue n;
            }
            break;
          }
        } else if (g & 64)
          if (g & 32) {
            I.mode = du;
            break e;
          } else {
            (t.msg = "invalid literal/length code"), (I.mode = sn);
            break e;
          }
        else {
          R = b[(R & 65535) + (d & ((1 << g) - 1))];
          continue t;
        }
        break;
      }
    } while (r < i && a < s);
    (L = p >> 3),
      (r -= L),
      (p -= L << 3),
      (d &= (1 << p) - 1),
      (t.next_in = r),
      (t.next_out = a),
      (t.avail_in = r < i ? 5 + (i - r) : 5 - (r - i)),
      (t.avail_out = a < s ? 257 + (s - a) : 257 - (a - s)),
      (I.hold = d),
      (I.bits = p);
  },
  Qe = 15,
  ia = 852,
  aa = 592,
  oa = 0,
  ar = 1,
  sa = 2,
  hu = new Uint16Array([
    3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67,
    83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
  ]),
  pu = new Uint8Array([
    16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19,
    19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
  ]),
  _u = new Uint16Array([
    1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513,
    769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0,
  ]),
  wu = new Uint8Array([
    16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24,
    24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
  ]),
  gu = (n, t, e, r, i, a, o, s) => {
    let l = s.bits,
      c = 0,
      u = 0,
      _ = 0,
      h = 0,
      d = 0,
      p = 0,
      b = 0,
      E = 0,
      S = 0,
      O = 0,
      R,
      g,
      L,
      F,
      A,
      z = null,
      C,
      T = new Uint16Array(Qe + 1),
      I = new Uint16Array(Qe + 1),
      ge = null,
      We,
      f,
      w;
    for (c = 0; c <= Qe; c++) T[c] = 0;
    for (u = 0; u < r; u++) T[t[e + u]]++;
    for (d = l, h = Qe; h >= 1 && T[h] === 0; h--);
    if ((d > h && (d = h), h === 0))
      return (
        (i[a++] = (1 << 24) | (64 << 16) | 0),
        (i[a++] = (1 << 24) | (64 << 16) | 0),
        (s.bits = 1),
        0
      );
    for (_ = 1; _ < h && T[_] === 0; _++);
    for (d < _ && (d = _), E = 1, c = 1; c <= Qe; c++)
      if (((E <<= 1), (E -= T[c]), E < 0)) return -1;
    if (E > 0 && (n === oa || h !== 1)) return -1;
    for (I[1] = 0, c = 1; c < Qe; c++) I[c + 1] = I[c] + T[c];
    for (u = 0; u < r; u++) t[e + u] !== 0 && (o[I[t[e + u]]++] = u);
    if (
      (n === oa
        ? ((z = ge = o), (C = 20))
        : n === ar
        ? ((z = hu), (ge = pu), (C = 257))
        : ((z = _u), (ge = wu), (C = 0)),
      (O = 0),
      (u = 0),
      (c = _),
      (A = a),
      (p = d),
      (b = 0),
      (L = -1),
      (S = 1 << d),
      (F = S - 1),
      (n === ar && S > ia) || (n === sa && S > aa))
    )
      return 1;
    for (;;) {
      (We = c - b),
        o[u] + 1 < C
          ? ((f = 0), (w = o[u]))
          : o[u] >= C
          ? ((f = ge[o[u] - C]), (w = z[o[u] - C]))
          : ((f = 96), (w = 0)),
        (R = 1 << (c - b)),
        (g = 1 << p),
        (_ = g);
      do (g -= R), (i[A + (O >> b) + g] = (We << 24) | (f << 16) | w | 0);
      while (g !== 0);
      for (R = 1 << (c - 1); O & R; ) R >>= 1;
      if ((R !== 0 ? ((O &= R - 1), (O += R)) : (O = 0), u++, --T[c] === 0)) {
        if (c === h) break;
        c = t[e + o[u]];
      }
      if (c > d && (O & F) !== L) {
        for (
          b === 0 && (b = d), A += _, p = c - b, E = 1 << p;
          p + b < h && ((E -= T[p + b]), !(E <= 0));

        )
          p++, (E <<= 1);
        if (((S += 1 << p), (n === ar && S > ia) || (n === sa && S > aa)))
          return 1;
        (L = O & F), (i[L] = (d << 24) | (p << 16) | (A - a) | 0);
      }
    }
    return (
      O !== 0 && (i[A + O] = ((c - b) << 24) | (64 << 16) | 0), (s.bits = d), 0
    );
  },
  vt = gu,
  mu = 0,
  ro = 1,
  io = 2,
  {
    Z_FINISH: ca,
    Z_BLOCK: yu,
    Z_TREES: cn,
    Z_OK: je,
    Z_STREAM_END: bu,
    Z_NEED_DICT: vu,
    Z_STREAM_ERROR: oe,
    Z_DATA_ERROR: ao,
    Z_MEM_ERROR: oo,
    Z_BUF_ERROR: Eu,
    Z_DEFLATED: ua,
  } = it,
  gn = 16180,
  la = 16181,
  da = 16182,
  fa = 16183,
  ha = 16184,
  pa = 16185,
  _a = 16186,
  wa = 16187,
  ga = 16188,
  ma = 16189,
  pn = 16190,
  be = 16191,
  or = 16192,
  ya = 16193,
  sr = 16194,
  ba = 16195,
  va = 16196,
  Ea = 16197,
  Aa = 16198,
  un = 16199,
  ln = 16200,
  xa = 16201,
  ka = 16202,
  Sa = 16203,
  Ia = 16204,
  Ta = 16205,
  cr = 16206,
  Ra = 16207,
  La = 16208,
  Z = 16209,
  so = 16210,
  co = 16211,
  Au = 852,
  xu = 592,
  ku = 15,
  Su = ku,
  Oa = (n) =>
    ((n >>> 24) & 255) +
    ((n >>> 8) & 65280) +
    ((n & 65280) << 8) +
    ((n & 255) << 24);
function Iu() {
  (this.strm = null),
    (this.mode = 0),
    (this.last = !1),
    (this.wrap = 0),
    (this.havedict = !1),
    (this.flags = 0),
    (this.dmax = 0),
    (this.check = 0),
    (this.total = 0),
    (this.head = null),
    (this.wbits = 0),
    (this.wsize = 0),
    (this.whave = 0),
    (this.wnext = 0),
    (this.window = null),
    (this.hold = 0),
    (this.bits = 0),
    (this.length = 0),
    (this.offset = 0),
    (this.extra = 0),
    (this.lencode = null),
    (this.distcode = null),
    (this.lenbits = 0),
    (this.distbits = 0),
    (this.ncode = 0),
    (this.nlen = 0),
    (this.ndist = 0),
    (this.have = 0),
    (this.next = null),
    (this.lens = new Uint16Array(320)),
    (this.work = new Uint16Array(288)),
    (this.lendyn = null),
    (this.distdyn = null),
    (this.sane = 0),
    (this.back = 0),
    (this.was = 0);
}
var Ve = (n) => {
    if (!n) return 1;
    let t = n.state;
    return !t || t.strm !== n || t.mode < gn || t.mode > co ? 1 : 0;
  },
  uo = (n) => {
    if (Ve(n)) return oe;
    let t = n.state;
    return (
      (n.total_in = n.total_out = t.total = 0),
      (n.msg = ""),
      t.wrap && (n.adler = t.wrap & 1),
      (t.mode = gn),
      (t.last = 0),
      (t.havedict = 0),
      (t.flags = -1),
      (t.dmax = 32768),
      (t.head = null),
      (t.hold = 0),
      (t.bits = 0),
      (t.lencode = t.lendyn = new Int32Array(Au)),
      (t.distcode = t.distdyn = new Int32Array(xu)),
      (t.sane = 1),
      (t.back = -1),
      je
    );
  },
  lo = (n) => {
    if (Ve(n)) return oe;
    let t = n.state;
    return (t.wsize = 0), (t.whave = 0), (t.wnext = 0), uo(n);
  },
  fo = (n, t) => {
    let e;
    if (Ve(n)) return oe;
    let r = n.state;
    return (
      t < 0 ? ((e = 0), (t = -t)) : ((e = (t >> 4) + 5), t < 48 && (t &= 15)),
      t && (t < 8 || t > 15)
        ? oe
        : (r.window !== null && r.wbits !== t && (r.window = null),
          (r.wrap = e),
          (r.wbits = t),
          lo(n))
    );
  },
  ho = (n, t) => {
    if (!n) return oe;
    let e = new Iu();
    (n.state = e), (e.strm = n), (e.window = null), (e.mode = gn);
    let r = fo(n, t);
    return r !== je && (n.state = null), r;
  },
  Tu = (n) => ho(n, Su),
  Da = !0,
  ur,
  lr,
  Ru = (n) => {
    if (Da) {
      (ur = new Int32Array(512)), (lr = new Int32Array(32));
      let t = 0;
      for (; t < 144; ) n.lens[t++] = 8;
      for (; t < 256; ) n.lens[t++] = 9;
      for (; t < 280; ) n.lens[t++] = 7;
      for (; t < 288; ) n.lens[t++] = 8;
      for (vt(ro, n.lens, 0, 288, ur, 0, n.work, { bits: 9 }), t = 0; t < 32; )
        n.lens[t++] = 5;
      vt(io, n.lens, 0, 32, lr, 0, n.work, { bits: 5 }), (Da = !1);
    }
    (n.lencode = ur), (n.lenbits = 9), (n.distcode = lr), (n.distbits = 5);
  },
  po = (n, t, e, r) => {
    let i,
      a = n.state;
    return (
      a.window === null &&
        ((a.wsize = 1 << a.wbits),
        (a.wnext = 0),
        (a.whave = 0),
        (a.window = new Uint8Array(a.wsize))),
      r >= a.wsize
        ? (a.window.set(t.subarray(e - a.wsize, e), 0),
          (a.wnext = 0),
          (a.whave = a.wsize))
        : ((i = a.wsize - a.wnext),
          i > r && (i = r),
          a.window.set(t.subarray(e - r, e - r + i), a.wnext),
          (r -= i),
          r
            ? (a.window.set(t.subarray(e - r, e), 0),
              (a.wnext = r),
              (a.whave = a.wsize))
            : ((a.wnext += i),
              a.wnext === a.wsize && (a.wnext = 0),
              a.whave < a.wsize && (a.whave += i))),
      0
    );
  },
  Lu = (n, t) => {
    let e,
      r,
      i,
      a,
      o,
      s,
      l,
      c,
      u,
      _,
      h,
      d,
      p,
      b,
      E = 0,
      S,
      O,
      R,
      g,
      L,
      F,
      A,
      z,
      C = new Uint8Array(4),
      T,
      I,
      ge = new Uint8Array([
        16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
      ]);
    if (Ve(n) || !n.output || (!n.input && n.avail_in !== 0)) return oe;
    (e = n.state),
      e.mode === be && (e.mode = or),
      (o = n.next_out),
      (i = n.output),
      (l = n.avail_out),
      (a = n.next_in),
      (r = n.input),
      (s = n.avail_in),
      (c = e.hold),
      (u = e.bits),
      (_ = s),
      (h = l),
      (z = je);
    e: for (;;)
      switch (e.mode) {
        case gn:
          if (e.wrap === 0) {
            e.mode = or;
            break;
          }
          for (; u < 16; ) {
            if (s === 0) break e;
            s--, (c += r[a++] << u), (u += 8);
          }
          if (e.wrap & 2 && c === 35615) {
            e.wbits === 0 && (e.wbits = 15),
              (e.check = 0),
              (C[0] = c & 255),
              (C[1] = (c >>> 8) & 255),
              (e.check = K(e.check, C, 2, 0)),
              (c = 0),
              (u = 0),
              (e.mode = la);
            break;
          }
          if (
            (e.head && (e.head.done = !1),
            !(e.wrap & 1) || (((c & 255) << 8) + (c >> 8)) % 31)
          ) {
            (n.msg = "incorrect header check"), (e.mode = Z);
            break;
          }
          if ((c & 15) !== ua) {
            (n.msg = "unknown compression method"), (e.mode = Z);
            break;
          }
          if (
            ((c >>>= 4),
            (u -= 4),
            (A = (c & 15) + 8),
            e.wbits === 0 && (e.wbits = A),
            A > 15 || A > e.wbits)
          ) {
            (n.msg = "invalid window size"), (e.mode = Z);
            break;
          }
          (e.dmax = 1 << e.wbits),
            (e.flags = 0),
            (n.adler = e.check = 1),
            (e.mode = c & 512 ? ma : be),
            (c = 0),
            (u = 0);
          break;
        case la:
          for (; u < 16; ) {
            if (s === 0) break e;
            s--, (c += r[a++] << u), (u += 8);
          }
          if (((e.flags = c), (e.flags & 255) !== ua)) {
            (n.msg = "unknown compression method"), (e.mode = Z);
            break;
          }
          if (e.flags & 57344) {
            (n.msg = "unknown header flags set"), (e.mode = Z);
            break;
          }
          e.head && (e.head.text = (c >> 8) & 1),
            e.flags & 512 &&
              e.wrap & 4 &&
              ((C[0] = c & 255),
              (C[1] = (c >>> 8) & 255),
              (e.check = K(e.check, C, 2, 0))),
            (c = 0),
            (u = 0),
            (e.mode = da);
        case da:
          for (; u < 32; ) {
            if (s === 0) break e;
            s--, (c += r[a++] << u), (u += 8);
          }
          e.head && (e.head.time = c),
            e.flags & 512 &&
              e.wrap & 4 &&
              ((C[0] = c & 255),
              (C[1] = (c >>> 8) & 255),
              (C[2] = (c >>> 16) & 255),
              (C[3] = (c >>> 24) & 255),
              (e.check = K(e.check, C, 4, 0))),
            (c = 0),
            (u = 0),
            (e.mode = fa);
        case fa:
          for (; u < 16; ) {
            if (s === 0) break e;
            s--, (c += r[a++] << u), (u += 8);
          }
          e.head && ((e.head.xflags = c & 255), (e.head.os = c >> 8)),
            e.flags & 512 &&
              e.wrap & 4 &&
              ((C[0] = c & 255),
              (C[1] = (c >>> 8) & 255),
              (e.check = K(e.check, C, 2, 0))),
            (c = 0),
            (u = 0),
            (e.mode = ha);
        case ha:
          if (e.flags & 1024) {
            for (; u < 16; ) {
              if (s === 0) break e;
              s--, (c += r[a++] << u), (u += 8);
            }
            (e.length = c),
              e.head && (e.head.extra_len = c),
              e.flags & 512 &&
                e.wrap & 4 &&
                ((C[0] = c & 255),
                (C[1] = (c >>> 8) & 255),
                (e.check = K(e.check, C, 2, 0))),
              (c = 0),
              (u = 0);
          } else e.head && (e.head.extra = null);
          e.mode = pa;
        case pa:
          if (
            e.flags & 1024 &&
            ((d = e.length),
            d > s && (d = s),
            d &&
              (e.head &&
                ((A = e.head.extra_len - e.length),
                e.head.extra ||
                  (e.head.extra = new Uint8Array(e.head.extra_len)),
                e.head.extra.set(r.subarray(a, a + d), A)),
              e.flags & 512 && e.wrap & 4 && (e.check = K(e.check, r, d, a)),
              (s -= d),
              (a += d),
              (e.length -= d)),
            e.length)
          )
            break e;
          (e.length = 0), (e.mode = _a);
        case _a:
          if (e.flags & 2048) {
            if (s === 0) break e;
            d = 0;
            do
              (A = r[a + d++]),
                e.head &&
                  A &&
                  e.length < 65536 &&
                  (e.head.name += String.fromCharCode(A));
            while (A && d < s);
            if (
              (e.flags & 512 && e.wrap & 4 && (e.check = K(e.check, r, d, a)),
              (s -= d),
              (a += d),
              A)
            )
              break e;
          } else e.head && (e.head.name = null);
          (e.length = 0), (e.mode = wa);
        case wa:
          if (e.flags & 4096) {
            if (s === 0) break e;
            d = 0;
            do
              (A = r[a + d++]),
                e.head &&
                  A &&
                  e.length < 65536 &&
                  (e.head.comment += String.fromCharCode(A));
            while (A && d < s);
            if (
              (e.flags & 512 && e.wrap & 4 && (e.check = K(e.check, r, d, a)),
              (s -= d),
              (a += d),
              A)
            )
              break e;
          } else e.head && (e.head.comment = null);
          e.mode = ga;
        case ga:
          if (e.flags & 512) {
            for (; u < 16; ) {
              if (s === 0) break e;
              s--, (c += r[a++] << u), (u += 8);
            }
            if (e.wrap & 4 && c !== (e.check & 65535)) {
              (n.msg = "header crc mismatch"), (e.mode = Z);
              break;
            }
            (c = 0), (u = 0);
          }
          e.head && ((e.head.hcrc = (e.flags >> 9) & 1), (e.head.done = !0)),
            (n.adler = e.check = 0),
            (e.mode = be);
          break;
        case ma:
          for (; u < 32; ) {
            if (s === 0) break e;
            s--, (c += r[a++] << u), (u += 8);
          }
          (n.adler = e.check = Oa(c)), (c = 0), (u = 0), (e.mode = pn);
        case pn:
          if (e.havedict === 0)
            return (
              (n.next_out = o),
              (n.avail_out = l),
              (n.next_in = a),
              (n.avail_in = s),
              (e.hold = c),
              (e.bits = u),
              vu
            );
          (n.adler = e.check = 1), (e.mode = be);
        case be:
          if (t === yu || t === cn) break e;
        case or:
          if (e.last) {
            (c >>>= u & 7), (u -= u & 7), (e.mode = cr);
            break;
          }
          for (; u < 3; ) {
            if (s === 0) break e;
            s--, (c += r[a++] << u), (u += 8);
          }
          switch (((e.last = c & 1), (c >>>= 1), (u -= 1), c & 3)) {
            case 0:
              e.mode = ya;
              break;
            case 1:
              if ((Ru(e), (e.mode = un), t === cn)) {
                (c >>>= 2), (u -= 2);
                break e;
              }
              break;
            case 2:
              e.mode = va;
              break;
            case 3:
              (n.msg = "invalid block type"), (e.mode = Z);
          }
          (c >>>= 2), (u -= 2);
          break;
        case ya:
          for (c >>>= u & 7, u -= u & 7; u < 32; ) {
            if (s === 0) break e;
            s--, (c += r[a++] << u), (u += 8);
          }
          if ((c & 65535) !== ((c >>> 16) ^ 65535)) {
            (n.msg = "invalid stored block lengths"), (e.mode = Z);
            break;
          }
          if (
            ((e.length = c & 65535), (c = 0), (u = 0), (e.mode = sr), t === cn)
          )
            break e;
        case sr:
          e.mode = ba;
        case ba:
          if (((d = e.length), d)) {
            if ((d > s && (d = s), d > l && (d = l), d === 0)) break e;
            i.set(r.subarray(a, a + d), o),
              (s -= d),
              (a += d),
              (l -= d),
              (o += d),
              (e.length -= d);
            break;
          }
          e.mode = be;
          break;
        case va:
          for (; u < 14; ) {
            if (s === 0) break e;
            s--, (c += r[a++] << u), (u += 8);
          }
          if (
            ((e.nlen = (c & 31) + 257),
            (c >>>= 5),
            (u -= 5),
            (e.ndist = (c & 31) + 1),
            (c >>>= 5),
            (u -= 5),
            (e.ncode = (c & 15) + 4),
            (c >>>= 4),
            (u -= 4),
            e.nlen > 286 || e.ndist > 30)
          ) {
            (n.msg = "too many length or distance symbols"), (e.mode = Z);
            break;
          }
          (e.have = 0), (e.mode = Ea);
        case Ea:
          for (; e.have < e.ncode; ) {
            for (; u < 3; ) {
              if (s === 0) break e;
              s--, (c += r[a++] << u), (u += 8);
            }
            (e.lens[ge[e.have++]] = c & 7), (c >>>= 3), (u -= 3);
          }
          for (; e.have < 19; ) e.lens[ge[e.have++]] = 0;
          if (
            ((e.lencode = e.lendyn),
            (e.lenbits = 7),
            (T = { bits: e.lenbits }),
            (z = vt(mu, e.lens, 0, 19, e.lencode, 0, e.work, T)),
            (e.lenbits = T.bits),
            z)
          ) {
            (n.msg = "invalid code lengths set"), (e.mode = Z);
            break;
          }
          (e.have = 0), (e.mode = Aa);
        case Aa:
          for (; e.have < e.nlen + e.ndist; ) {
            for (
              ;
              (E = e.lencode[c & ((1 << e.lenbits) - 1)]),
                (S = E >>> 24),
                (O = (E >>> 16) & 255),
                (R = E & 65535),
                !(S <= u);

            ) {
              if (s === 0) break e;
              s--, (c += r[a++] << u), (u += 8);
            }
            if (R < 16) (c >>>= S), (u -= S), (e.lens[e.have++] = R);
            else {
              if (R === 16) {
                for (I = S + 2; u < I; ) {
                  if (s === 0) break e;
                  s--, (c += r[a++] << u), (u += 8);
                }
                if (((c >>>= S), (u -= S), e.have === 0)) {
                  (n.msg = "invalid bit length repeat"), (e.mode = Z);
                  break;
                }
                (A = e.lens[e.have - 1]),
                  (d = 3 + (c & 3)),
                  (c >>>= 2),
                  (u -= 2);
              } else if (R === 17) {
                for (I = S + 3; u < I; ) {
                  if (s === 0) break e;
                  s--, (c += r[a++] << u), (u += 8);
                }
                (c >>>= S),
                  (u -= S),
                  (A = 0),
                  (d = 3 + (c & 7)),
                  (c >>>= 3),
                  (u -= 3);
              } else {
                for (I = S + 7; u < I; ) {
                  if (s === 0) break e;
                  s--, (c += r[a++] << u), (u += 8);
                }
                (c >>>= S),
                  (u -= S),
                  (A = 0),
                  (d = 11 + (c & 127)),
                  (c >>>= 7),
                  (u -= 7);
              }
              if (e.have + d > e.nlen + e.ndist) {
                (n.msg = "invalid bit length repeat"), (e.mode = Z);
                break;
              }
              for (; d--; ) e.lens[e.have++] = A;
            }
          }
          if (e.mode === Z) break;
          if (e.lens[256] === 0) {
            (n.msg = "invalid code -- missing end-of-block"), (e.mode = Z);
            break;
          }
          if (
            ((e.lenbits = 9),
            (T = { bits: e.lenbits }),
            (z = vt(ro, e.lens, 0, e.nlen, e.lencode, 0, e.work, T)),
            (e.lenbits = T.bits),
            z)
          ) {
            (n.msg = "invalid literal/lengths set"), (e.mode = Z);
            break;
          }
          if (
            ((e.distbits = 6),
            (e.distcode = e.distdyn),
            (T = { bits: e.distbits }),
            (z = vt(io, e.lens, e.nlen, e.ndist, e.distcode, 0, e.work, T)),
            (e.distbits = T.bits),
            z)
          ) {
            (n.msg = "invalid distances set"), (e.mode = Z);
            break;
          }
          if (((e.mode = un), t === cn)) break e;
        case un:
          e.mode = ln;
        case ln:
          if (s >= 6 && l >= 258) {
            (n.next_out = o),
              (n.avail_out = l),
              (n.next_in = a),
              (n.avail_in = s),
              (e.hold = c),
              (e.bits = u),
              fu(n, h),
              (o = n.next_out),
              (i = n.output),
              (l = n.avail_out),
              (a = n.next_in),
              (r = n.input),
              (s = n.avail_in),
              (c = e.hold),
              (u = e.bits),
              e.mode === be && (e.back = -1);
            break;
          }
          for (
            e.back = 0;
            (E = e.lencode[c & ((1 << e.lenbits) - 1)]),
              (S = E >>> 24),
              (O = (E >>> 16) & 255),
              (R = E & 65535),
              !(S <= u);

          ) {
            if (s === 0) break e;
            s--, (c += r[a++] << u), (u += 8);
          }
          if (O && !(O & 240)) {
            for (
              g = S, L = O, F = R;
              (E = e.lencode[F + ((c & ((1 << (g + L)) - 1)) >> g)]),
                (S = E >>> 24),
                (O = (E >>> 16) & 255),
                (R = E & 65535),
                !(g + S <= u);

            ) {
              if (s === 0) break e;
              s--, (c += r[a++] << u), (u += 8);
            }
            (c >>>= g), (u -= g), (e.back += g);
          }
          if (((c >>>= S), (u -= S), (e.back += S), (e.length = R), O === 0)) {
            e.mode = Ta;
            break;
          }
          if (O & 32) {
            (e.back = -1), (e.mode = be);
            break;
          }
          if (O & 64) {
            (n.msg = "invalid literal/length code"), (e.mode = Z);
            break;
          }
          (e.extra = O & 15), (e.mode = xa);
        case xa:
          if (e.extra) {
            for (I = e.extra; u < I; ) {
              if (s === 0) break e;
              s--, (c += r[a++] << u), (u += 8);
            }
            (e.length += c & ((1 << e.extra) - 1)),
              (c >>>= e.extra),
              (u -= e.extra),
              (e.back += e.extra);
          }
          (e.was = e.length), (e.mode = ka);
        case ka:
          for (
            ;
            (E = e.distcode[c & ((1 << e.distbits) - 1)]),
              (S = E >>> 24),
              (O = (E >>> 16) & 255),
              (R = E & 65535),
              !(S <= u);

          ) {
            if (s === 0) break e;
            s--, (c += r[a++] << u), (u += 8);
          }
          if (!(O & 240)) {
            for (
              g = S, L = O, F = R;
              (E = e.distcode[F + ((c & ((1 << (g + L)) - 1)) >> g)]),
                (S = E >>> 24),
                (O = (E >>> 16) & 255),
                (R = E & 65535),
                !(g + S <= u);

            ) {
              if (s === 0) break e;
              s--, (c += r[a++] << u), (u += 8);
            }
            (c >>>= g), (u -= g), (e.back += g);
          }
          if (((c >>>= S), (u -= S), (e.back += S), O & 64)) {
            (n.msg = "invalid distance code"), (e.mode = Z);
            break;
          }
          (e.offset = R), (e.extra = O & 15), (e.mode = Sa);
        case Sa:
          if (e.extra) {
            for (I = e.extra; u < I; ) {
              if (s === 0) break e;
              s--, (c += r[a++] << u), (u += 8);
            }
            (e.offset += c & ((1 << e.extra) - 1)),
              (c >>>= e.extra),
              (u -= e.extra),
              (e.back += e.extra);
          }
          if (e.offset > e.dmax) {
            (n.msg = "invalid distance too far back"), (e.mode = Z);
            break;
          }
          e.mode = Ia;
        case Ia:
          if (l === 0) break e;
          if (((d = h - l), e.offset > d)) {
            if (((d = e.offset - d), d > e.whave && e.sane)) {
              (n.msg = "invalid distance too far back"), (e.mode = Z);
              break;
            }
            d > e.wnext
              ? ((d -= e.wnext), (p = e.wsize - d))
              : (p = e.wnext - d),
              d > e.length && (d = e.length),
              (b = e.window);
          } else (b = i), (p = o - e.offset), (d = e.length);
          d > l && (d = l), (l -= d), (e.length -= d);
          do i[o++] = b[p++];
          while (--d);
          e.length === 0 && (e.mode = ln);
          break;
        case Ta:
          if (l === 0) break e;
          (i[o++] = e.length), l--, (e.mode = ln);
          break;
        case cr:
          if (e.wrap) {
            for (; u < 32; ) {
              if (s === 0) break e;
              s--, (c |= r[a++] << u), (u += 8);
            }
            if (
              ((h -= l),
              (n.total_out += h),
              (e.total += h),
              e.wrap & 4 &&
                h &&
                (n.adler = e.check =
                  e.flags ? K(e.check, i, h, o - h) : St(e.check, i, h, o - h)),
              (h = l),
              e.wrap & 4 && (e.flags ? c : Oa(c)) !== e.check)
            ) {
              (n.msg = "incorrect data check"), (e.mode = Z);
              break;
            }
            (c = 0), (u = 0);
          }
          e.mode = Ra;
        case Ra:
          if (e.wrap && e.flags) {
            for (; u < 32; ) {
              if (s === 0) break e;
              s--, (c += r[a++] << u), (u += 8);
            }
            if (e.wrap & 4 && c !== (e.total & 4294967295)) {
              (n.msg = "incorrect length check"), (e.mode = Z);
              break;
            }
            (c = 0), (u = 0);
          }
          e.mode = La;
        case La:
          z = bu;
          break e;
        case Z:
          z = ao;
          break e;
        case so:
          return oo;
        case co:
        default:
          return oe;
      }
    return (
      (n.next_out = o),
      (n.avail_out = l),
      (n.next_in = a),
      (n.avail_in = s),
      (e.hold = c),
      (e.bits = u),
      (e.wsize ||
        (h !== n.avail_out && e.mode < Z && (e.mode < cr || t !== ca))) &&
        po(n, n.output, n.next_out, h - n.avail_out),
      (_ -= n.avail_in),
      (h -= n.avail_out),
      (n.total_in += _),
      (n.total_out += h),
      (e.total += h),
      e.wrap & 4 &&
        h &&
        (n.adler = e.check =
          e.flags
            ? K(e.check, i, h, n.next_out - h)
            : St(e.check, i, h, n.next_out - h)),
      (n.data_type =
        e.bits +
        (e.last ? 64 : 0) +
        (e.mode === be ? 128 : 0) +
        (e.mode === un || e.mode === sr ? 256 : 0)),
      ((_ === 0 && h === 0) || t === ca) && z === je && (z = Eu),
      z
    );
  },
  Ou = (n) => {
    if (Ve(n)) return oe;
    let t = n.state;
    return t.window && (t.window = null), (n.state = null), je;
  },
  Du = (n, t) => {
    if (Ve(n)) return oe;
    let e = n.state;
    return e.wrap & 2 ? ((e.head = t), (t.done = !1), je) : oe;
  },
  Cu = (n, t) => {
    let e = t.length,
      r,
      i,
      a;
    return Ve(n) || ((r = n.state), r.wrap !== 0 && r.mode !== pn)
      ? oe
      : r.mode === pn && ((i = 1), (i = St(i, t, e, 0)), i !== r.check)
      ? ao
      : ((a = po(n, t, e, e)),
        a ? ((r.mode = so), oo) : ((r.havedict = 1), je));
  },
  zu = lo,
  Pu = fo,
  Nu = uo,
  Bu = Tu,
  Uu = ho,
  Mu = Lu,
  $u = Ou,
  Zu = Du,
  Fu = Cu,
  ju = "pako inflate (from Nodeca project)",
  Ee = {
    inflateReset: zu,
    inflateReset2: Pu,
    inflateResetKeep: Nu,
    inflateInit: Bu,
    inflateInit2: Uu,
    inflate: Mu,
    inflateEnd: $u,
    inflateGetHeader: Zu,
    inflateSetDictionary: Fu,
    inflateInfo: ju,
  };
function Vu() {
  (this.text = 0),
    (this.time = 0),
    (this.xflags = 0),
    (this.os = 0),
    (this.extra = null),
    (this.extra_len = 0),
    (this.name = ""),
    (this.comment = ""),
    (this.hcrc = 0),
    (this.done = !1);
}
var Ku = Vu,
  _o = Object.prototype.toString,
  {
    Z_NO_FLUSH: Hu,
    Z_FINISH: qu,
    Z_OK: Rt,
    Z_STREAM_END: dr,
    Z_NEED_DICT: fr,
    Z_STREAM_ERROR: Gu,
    Z_DATA_ERROR: Ca,
    Z_MEM_ERROR: Wu,
  } = it;
function Ct(n) {
  this.options = wn.assign(
    { chunkSize: 1024 * 64, windowBits: 15, to: "" },
    n || {}
  );
  let t = this.options;
  t.raw &&
    t.windowBits >= 0 &&
    t.windowBits < 16 &&
    ((t.windowBits = -t.windowBits),
    t.windowBits === 0 && (t.windowBits = -15)),
    t.windowBits >= 0 &&
      t.windowBits < 16 &&
      !(n && n.windowBits) &&
      (t.windowBits += 32),
    t.windowBits > 15 &&
      t.windowBits < 48 &&
      (t.windowBits & 15 || (t.windowBits |= 15)),
    (this.err = 0),
    (this.msg = ""),
    (this.ended = !1),
    (this.chunks = []),
    (this.strm = new to()),
    (this.strm.avail_out = 0);
  let e = Ee.inflateInit2(this.strm, t.windowBits);
  if (e !== Rt) throw new Error(Ze[e]);
  if (
    ((this.header = new Ku()),
    Ee.inflateGetHeader(this.strm, this.header),
    t.dictionary &&
      (typeof t.dictionary == "string"
        ? (t.dictionary = Tt.string2buf(t.dictionary))
        : _o.call(t.dictionary) === "[object ArrayBuffer]" &&
          (t.dictionary = new Uint8Array(t.dictionary)),
      t.raw &&
        ((e = Ee.inflateSetDictionary(this.strm, t.dictionary)), e !== Rt)))
  )
    throw new Error(Ze[e]);
}
Ct.prototype.push = function (n, t) {
  let e = this.strm,
    r = this.options.chunkSize,
    i = this.options.dictionary,
    a,
    o,
    s;
  if (this.ended) return !1;
  for (
    t === ~~t ? (o = t) : (o = t === !0 ? qu : Hu),
      _o.call(n) === "[object ArrayBuffer]"
        ? (e.input = new Uint8Array(n))
        : (e.input = n),
      e.next_in = 0,
      e.avail_in = e.input.length;
    ;

  ) {
    for (
      e.avail_out === 0 &&
        ((e.output = new Uint8Array(r)), (e.next_out = 0), (e.avail_out = r)),
        a = Ee.inflate(e, o),
        a === fr &&
          i &&
          ((a = Ee.inflateSetDictionary(e, i)),
          a === Rt ? (a = Ee.inflate(e, o)) : a === Ca && (a = fr));
      e.avail_in > 0 && a === dr && e.state.wrap > 0 && n[e.next_in] !== 0;

    )
      Ee.inflateReset(e), (a = Ee.inflate(e, o));
    switch (a) {
      case Gu:
      case Ca:
      case fr:
      case Wu:
        return this.onEnd(a), (this.ended = !0), !1;
    }
    if (((s = e.avail_out), e.next_out && (e.avail_out === 0 || a === dr)))
      if (this.options.to === "string") {
        let l = Tt.utf8border(e.output, e.next_out),
          c = e.next_out - l,
          u = Tt.buf2string(e.output, l);
        (e.next_out = c),
          (e.avail_out = r - c),
          c && e.output.set(e.output.subarray(l, l + c), 0),
          this.onData(u);
      } else
        this.onData(
          e.output.length === e.next_out
            ? e.output
            : e.output.subarray(0, e.next_out)
        );
    if (!(a === Rt && s === 0)) {
      if (a === dr)
        return (
          (a = Ee.inflateEnd(this.strm)), this.onEnd(a), (this.ended = !0), !0
        );
      if (e.avail_in === 0) break;
    }
  }
  return !0;
};
Ct.prototype.onData = function (n) {
  this.chunks.push(n);
};
Ct.prototype.onEnd = function (n) {
  n === Rt &&
    (this.options.to === "string"
      ? (this.result = this.chunks.join(""))
      : (this.result = wn.flattenChunks(this.chunks))),
    (this.chunks = []),
    (this.err = n),
    (this.msg = this.strm.msg);
};
function Tr(n, t) {
  let e = new Ct(t);
  if ((e.push(n), e.err)) throw e.msg || Ze[e.err];
  return e.result;
}
function Yu(n, t) {
  return (t = t || {}), (t.raw = !0), Tr(n, t);
}
var Xu = Ct,
  Ju = Tr,
  Qu = Yu,
  el = Tr,
  tl = it,
  nl = { Inflate: Xu, inflate: Ju, inflateRaw: Qu, ungzip: el, constants: tl },
  { Deflate: Nd, deflate: Bd, deflateRaw: Ud, gzip: Md } = lu,
  { Inflate: $d, inflate: rl, inflateRaw: Zd, ungzip: Fd } = nl;
var wo = rl;
var Io = Ne(Jo());
function il(n, t) {
  return Array.apply(0, new Array(Math.ceil(n.length / t))).map((e, r) =>
    n.slice(r * t, (r + 1) * t)
  );
}
var zt = (n) => "version" in n;
function al(n) {
  return n.reduce((t, e) => t + e.toString(16).padStart(2, "0"), "0x");
}
function ol(n) {
  n.indexOf("0x") === 0 && (n = n.substr(2)),
    n.length % 2 === 1 && (n = "0" + n);
  let t = n.match(/.{2}/g);
  return t === null
    ? X.Buffer.from([])
    : X.Buffer.from(t.map((e) => parseInt(e, 16)));
}
var sl = Object.freeze({ __proto__: null, encode: al, decode: ol });
function To(n) {
  return new TextDecoder("utf-8").decode(n);
}
function Ro(n) {
  return new TextEncoder().encode(n);
}
var cl = Object.freeze({ __proto__: null, decode: To, encode: Ro });
function Dr(n) {
  return qe.default.encode(n);
}
function ul(n) {
  return qe.default.decode(n);
}
var ll = Object.freeze({ __proto__: null, encode: Dr, decode: ul });
function Cr(n) {
  return n.toString("base64");
}
function Ii(n) {
  return X.Buffer.from(n, "base64");
}
var dl = Object.freeze({ __proto__: null, encode: Cr, decode: Ii }),
  fl = Object.freeze({
    __proto__: null,
    hex: sl,
    utf8: cl,
    bs58: ll,
    base64: dl,
  });
function hl(n) {
  let t = new Map();
  return (
    n.errors &&
      n.errors.forEach((e) => {
        var r;
        let i = (r = e.msg) !== null && r !== void 0 ? r : e.name;
        t.set(e.code, i);
      }),
    t
  );
}
function pl(n, ...t) {
  if (n.args.length != t.length) throw new Error("Invalid argument length");
  let e = {},
    r = 0;
  return (
    n.args.forEach((i) => {
      (e[i.name] = t[r]), (r += 1);
    }),
    e
  );
}
function Lo(n, t = {}) {
  n.forEach((e) => {
    if ("accounts" in e) Lo(e.accounts, t[e.name]);
    else if (t[e.name] === void 0)
      throw new Error(`Invalid arguments: ${e.name} not provided.`);
  });
}
function re(n) {
  return n instanceof j ? n : new j(n);
}
var zr = class extends TypeError {
  constructor(t, e) {
    let r,
      l = t,
      { message: i } = l,
      a = Ni(l, ["message"]),
      { path: o } = t,
      s = o.length === 0 ? i : "At path: " + o.join(".") + " -- " + i;
    super(s),
      (this.value = void 0),
      (this.key = void 0),
      (this.type = void 0),
      (this.refinement = void 0),
      (this.path = void 0),
      (this.branch = void 0),
      (this.failures = void 0),
      Object.assign(this, a),
      (this.name = this.constructor.name),
      (this.failures = () => {
        var c;
        return (c = r) != null ? c : (r = [t, ...e()]);
      });
  }
};
function _l(n) {
  return st(n) && typeof n[Symbol.iterator] == "function";
}
function st(n) {
  return typeof n == "object" && n != null;
}
function ze(n) {
  return typeof n == "string" ? JSON.stringify(n) : "" + n;
}
function wl(n) {
  let { done: t, value: e } = n.next();
  return t ? void 0 : e;
}
function gl(n, t, e, r) {
  if (n === !0) return;
  n === !1 ? (n = {}) : typeof n == "string" && (n = { message: n });
  let { path: i, branch: a } = t,
    { type: o } = e,
    {
      refinement: s,
      message: l = "Expected a value of type `" +
        o +
        "`" +
        (s ? " with refinement `" + s + "`" : "") +
        ", but received: `" +
        ze(r) +
        "`",
    } = n;
  return Pe(
    ue(
      {
        value: r,
        type: o,
        refinement: s,
        key: i[i.length - 1],
        path: i,
        branch: a,
      },
      n
    ),
    { message: l }
  );
}
function* go(n, t, e, r) {
  _l(n) || (n = [n]);
  for (let i of n) {
    let a = gl(i, t, e, r);
    a && (yield a);
  }
}
function* Ti(n, t, e) {
  e === void 0 && (e = {});
  let { path: r = [], branch: i = [n], coerce: a = !1, mask: o = !1 } = e,
    s = { path: r, branch: i };
  if (
    a &&
    ((n = t.coercer(n, s)),
    o && t.type !== "type" && st(t.schema) && st(n) && !Array.isArray(n))
  )
    for (let c in n) t.schema[c] === void 0 && delete n[c];
  let l = !0;
  for (let c of t.validator(n, s)) (l = !1), yield [c, void 0];
  for (let [c, u, _] of t.entries(n, s)) {
    let h = Ti(u, _, {
      path: c === void 0 ? r : [...r, c],
      branch: c === void 0 ? i : [...i, u],
      coerce: a,
      mask: o,
    });
    for (let d of h)
      d[0]
        ? ((l = !1), yield [d[0], void 0])
        : a &&
          ((u = d[1]),
          c === void 0
            ? (n = u)
            : n instanceof Map
            ? n.set(c, u)
            : n instanceof Set
            ? n.add(u)
            : st(n) && (n[c] = u));
  }
  if (l) for (let c of t.refiner(n, s)) (l = !1), yield [c, void 0];
  l && (yield [void 0, n]);
}
var we = class {
  constructor(t) {
    (this.TYPE = void 0),
      (this.type = void 0),
      (this.schema = void 0),
      (this.coercer = void 0),
      (this.validator = void 0),
      (this.refiner = void 0),
      (this.entries = void 0);
    let {
      type: e,
      schema: r,
      validator: i,
      refiner: a,
      coercer: o = (l) => l,
      entries: s = function* () {},
    } = t;
    (this.type = e),
      (this.schema = r),
      (this.entries = s),
      (this.coercer = o),
      i
        ? (this.validator = (l, c) => {
            let u = i(l, c);
            return go(u, c, this, l);
          })
        : (this.validator = () => []),
      a
        ? (this.refiner = (l, c) => {
            let u = a(l, c);
            return go(u, c, this, l);
          })
        : (this.refiner = () => []);
  }
  assert(t) {
    return ml(t, this);
  }
  create(t) {
    return Ri(t, this);
  }
  is(t) {
    return Oo(t, this);
  }
  mask(t) {
    return yl(t, this);
  }
  validate(t, e) {
    return e === void 0 && (e = {}), Mt(t, this, e);
  }
};
function ml(n, t) {
  let e = Mt(n, t);
  if (e[0]) throw e[0];
}
function Ri(n, t) {
  let e = Mt(n, t, { coerce: !0 });
  if (e[0]) throw e[0];
  return e[1];
}
function yl(n, t) {
  let e = Mt(n, t, { coerce: !0, mask: !0 });
  if (e[0]) throw e[0];
  return e[1];
}
function Oo(n, t) {
  return !Mt(n, t)[0];
}
function Mt(n, t, e) {
  e === void 0 && (e = {});
  let r = Ti(n, t, e),
    i = wl(r);
  return i[0]
    ? [
        new zr(i[0], function* () {
          for (let o of r) o[0] && (yield o[0]);
        }),
        void 0,
      ]
    : [void 0, i[1]];
}
function $t(n, t) {
  return new we({ type: n, schema: null, validator: t });
}
function bl() {
  return $t("any", () => !0);
}
function Rr(n) {
  return new we({
    type: "array",
    schema: n,
    *entries(t) {
      if (n && Array.isArray(t))
        for (let [e, r] of t.entries()) yield [e, r, n];
    },
    coercer(t) {
      return Array.isArray(t) ? t.slice() : t;
    },
    validator(t) {
      return (
        Array.isArray(t) || "Expected an array value, but received: " + ze(t)
      );
    },
  });
}
function vl() {
  return $t("boolean", (n) => typeof n == "boolean");
}
function mo(n) {
  let t = ze(n),
    e = typeof n;
  return new we({
    type: "literal",
    schema: e === "string" || e === "number" || e === "boolean" ? n : null,
    validator(r) {
      return (
        r === n || "Expected the literal `" + t + "`, but received: " + ze(r)
      );
    },
  });
}
function mn(n) {
  return new we(
    Pe(ue({}, n), {
      validator: (t, e) => t === null || n.validator(t, e),
      refiner: (t, e) => t === null || n.refiner(t, e),
    })
  );
}
function bn() {
  return $t(
    "number",
    (n) =>
      (typeof n == "number" && !isNaN(n)) ||
      "Expected a number, but received: " + ze(n)
  );
}
function vn(n) {
  return new we(
    Pe(ue({}, n), {
      validator: (t, e) => t === void 0 || n.validator(t, e),
      refiner: (t, e) => t === void 0 || n.refiner(t, e),
    })
  );
}
function Ke() {
  return $t(
    "string",
    (n) => typeof n == "string" || "Expected a string, but received: " + ze(n)
  );
}
function Ce(n) {
  let t = Object.keys(n);
  return new we({
    type: "type",
    schema: n,
    *entries(e) {
      if (st(e)) for (let r of t) yield [r, e[r], n[r]];
    },
    validator(e) {
      return st(e) || "Expected an object, but received: " + ze(e);
    },
  });
}
function Do(n) {
  let t = n.map((e) => e.type).join(" | ");
  return new we({
    type: "union",
    schema: null,
    coercer(e, r) {
      return (
        n.find((a) => {
          let [o] = a.validate(e, { coerce: !0 });
          return !o;
        }) || Li()
      ).coercer(e, r);
    },
    validator(e, r) {
      let i = [];
      for (let a of n) {
        let [...o] = Ti(e, a, r),
          [s] = o;
        if (s[0]) for (let [l] of o) l && i.push(l);
        else return [];
      }
      return [
        "Expected the value to satisfy a union of `" +
          t +
          "`, but received: " +
          ze(e),
        ...i,
      ];
    },
  });
}
function Li() {
  return $t("unknown", () => !0);
}
function El(n, t, e) {
  return new we(
    Pe(ue({}, n), {
      coercer: (r, i) => (Oo(r, t) ? n.coercer(e(r, i), i) : n.coercer(r, i)),
    })
  );
}
function Al(n, t, e, r) {
  return v(this, null, function* () {
    (n = re(n)), r || (r = En());
    let i = new Mn();
    if (
      (i.add(new Un({ programId: n, keys: t ?? [], data: e })),
      r.sendAndConfirm === void 0)
    )
      throw new Error(
        "This function requires 'Provider.sendAndConfirm' to be implemented."
      );
    return yield r.sendAndConfirm(i, []);
  });
}
var yo = 99;
function xl(n, t, e) {
  return v(this, null, function* () {
    return (yield Oi(n, t, e)).map((i) =>
      i ? { publicKey: i.publicKey, account: i.account } : null
    );
  });
}
function Oi(n, t, e) {
  return v(this, null, function* () {
    if (t.length <= yo) return yield bo(n, t, e);
    {
      let r = il(t, yo);
      return (yield Promise.all(r.map((a) => bo(n, a, e)))).flat();
    }
  });
}
function bo(n, t, e) {
  return v(this, null, function* () {
    let r = e ?? n.commitment,
      { value: i, context: a } = yield n.getMultipleAccountsInfoAndContext(
        t,
        r
      );
    return i.map((s, l) =>
      s === null ? null : { publicKey: t[l], account: s, context: a }
    );
  });
}
function Co(n, t, e, r, i) {
  return v(this, null, function* () {
    var a;
    e && e.length > 0 && t.sign(...e);
    let o = t._compile(),
      s = o.serialize(),
      c = t._serialize(s).toString("base64"),
      u = { encoding: "base64", commitment: r ?? n.commitment };
    if (i) {
      let p = (Array.isArray(i) ? i : o.nonProgramIds()).map((b) =>
        b.toBase58()
      );
      u.accounts = { encoding: "base64", addresses: p };
    }
    e && (u.sigVerify = !0);
    let _ = [c, u],
      h = yield n._rpcRequest("simulateTransaction", _),
      d = Ri(h, Tl);
    if ("error" in d) {
      let p;
      if (
        "data" in d.error &&
        ((p = (a = d.error.data) === null || a === void 0 ? void 0 : a.logs),
        p && Array.isArray(p))
      ) {
        let b = `
    `,
          E = b + p.join(b);
        console.error(d.error.message, E);
      }
      throw new jt("failed to simulate transaction: " + d.error.message, p);
    }
    return d.result;
  });
}
function kl(n) {
  return El(zo(n), Sl, (t) =>
    "error" in t ? t : Pe(ue({}, t), { result: Ri(t.result, n) })
  );
}
var Sl = zo(Li());
function zo(n) {
  return Do([
    Ce({ jsonrpc: mo("2.0"), id: Ke(), result: n }),
    Ce({
      jsonrpc: mo("2.0"),
      id: Ke(),
      error: Ce({ code: Li(), message: Ke(), data: vn(bl()) }),
    }),
  ]);
}
function Il(n) {
  return kl(Ce({ context: Ce({ slot: bn() }), value: n }));
}
var Tl = Il(
    Ce({
      err: mn(Do([Ce({}), Ke()])),
      logs: mn(Rr(Ke())),
      accounts: vn(
        mn(
          Rr(
            mn(
              Ce({
                executable: vl(),
                owner: Ke(),
                lamports: bn(),
                data: Rr(Ke()),
                rentEpoch: vn(bn()),
              })
            )
          )
        )
      ),
      unitsConsumed: vn(bn()),
    })
  ),
  Rl = Object.freeze({
    __proto__: null,
    invoke: Al,
    getMultipleAccounts: xl,
    getMultipleAccountsAndContext: Oi,
    simulateTransaction: Co,
  }),
  Pr = class {
    constructor(t, e, r) {
      (this.connection = t),
        (this.wallet = e),
        (this.opts = r),
        (this.publicKey = e?.publicKey);
    }
    static defaultOptions() {
      return { preflightCommitment: "processed", commitment: "processed" };
    }
    static local(t, e) {
      throw new Error("Provider local is not available on browser.");
    }
    static env() {
      throw new Error("Provider env is not available on browser.");
    }
    sendAndConfirm(t, e, r) {
      return v(this, null, function* () {
        var i, a, o, s;
        if ((r === void 0 && (r = this.opts), zt(t))) e && t.sign(e);
        else if (
          ((t.feePayer =
            (i = t.feePayer) !== null && i !== void 0
              ? i
              : this.wallet.publicKey),
          (t.recentBlockhash = (yield this.connection.getLatestBlockhash(
            r.preflightCommitment
          )).blockhash),
          e)
        )
          for (let c of e) t.partialSign(c);
        t = yield this.wallet.signTransaction(t);
        let l = t.serialize();
        try {
          return yield vo(this.connection, l, r);
        } catch (c) {
          if (c instanceof Nt) {
            let u = Dr(
                zt(t)
                  ? ((a = t.signatures) === null || a === void 0
                      ? void 0
                      : a[0]) || new Uint8Array()
                  : (o = t.signature) !== null && o !== void 0
                  ? o
                  : new Uint8Array()
              ),
              _ = yield this.connection.getTransaction(u, {
                commitment: "confirmed",
              });
            if (_) {
              let h =
                (s = _.meta) === null || s === void 0 ? void 0 : s.logMessages;
              throw h ? new jt(c.message, h) : c;
            } else throw c;
          } else throw c;
        }
      });
    }
    sendAll(t, e) {
      return v(this, null, function* () {
        var r, i, a;
        e === void 0 && (e = this.opts);
        let o = (yield this.connection.getLatestBlockhash(
            e.preflightCommitment
          )).blockhash,
          s = t.map((u) => {
            var _, h;
            if (zt(u.tx)) {
              let d = u.tx;
              return u.signers && d.sign(u.signers), d;
            } else {
              let d = u.tx,
                p = (_ = u.signers) !== null && _ !== void 0 ? _ : [];
              return (
                (d.feePayer =
                  (h = d.feePayer) !== null && h !== void 0
                    ? h
                    : this.wallet.publicKey),
                (d.recentBlockhash = o),
                p.forEach((b) => {
                  d.partialSign(b);
                }),
                d
              );
            }
          }),
          l = yield this.wallet.signAllTransactions(s),
          c = [];
        for (let u = 0; u < s.length; u += 1) {
          let _ = l[u],
            h = _.serialize();
          try {
            c.push(yield vo(this.connection, h, e));
          } catch (d) {
            if (d instanceof Nt) {
              let p = Dr(
                  zt(_)
                    ? ((r = _.signatures) === null || r === void 0
                        ? void 0
                        : r[0]) || new Uint8Array()
                    : (i = _.signature) !== null && i !== void 0
                    ? i
                    : new Uint8Array()
                ),
                b = yield this.connection.getTransaction(p, {
                  commitment: "confirmed",
                });
              if (b) {
                let E =
                  (a = b.meta) === null || a === void 0
                    ? void 0
                    : a.logMessages;
                throw E ? new jt(d.message, E) : d;
              } else throw d;
            } else throw d;
          }
        }
        return c;
      });
    }
    simulate(t, e, r, i) {
      return v(this, null, function* () {
        let a = (yield this.connection.getLatestBlockhash(
            r ?? this.connection.commitment
          )).blockhash,
          o;
        if (
          (zt(t)
            ? (e && (t.sign(e), (t = yield this.wallet.signTransaction(t))),
              (o = yield this.connection.simulateTransaction(t, {
                commitment: r,
              })))
            : ((t.feePayer = t.feePayer || this.wallet.publicKey),
              (t.recentBlockhash = a),
              e && (t = yield this.wallet.signTransaction(t)),
              (o = yield Co(this.connection, t, e, r, i))),
          o.value.err)
        )
          throw new Nr(o.value);
        return o.value;
      });
    }
  },
  Nr = class extends Error {
    constructor(t, e) {
      super(e), (this.simulationResponse = t);
    }
  };
function vo(n, t, e) {
  return v(this, null, function* () {
    let r = e && {
        skipPreflight: e.skipPreflight,
        preflightCommitment: e.preflightCommitment || e.commitment,
      },
      i = yield n.sendRawTransaction(t, r),
      a = (yield n.confirmTransaction(i, e && e.commitment)).value;
    if (a.err)
      throw new Nt(`Raw transaction ${i} failed (${JSON.stringify(a)})`);
    return i;
  });
}
var Nt = class extends Error {
  constructor(t) {
    super(t);
  }
};
function qd(n) {
  Br = n;
}
function En() {
  return Br === null ? Pr.local() : Br;
}
var Br = null,
  Ll = new Set(["anchor-deprecated-state", "debug-logs"]),
  Po = new Map();
function Ol(n) {
  if (!Ll.has(n)) throw new Error("Invalid feature");
  Po.set(n, !0);
}
function Di(n) {
  return Po.get(n) !== void 0;
}
var Dl = Object.freeze({ __proto__: null, set: Ol, isSet: Di }),
  ct = class extends Error {
    constructor(t) {
      super(t), (this.name = "IdlError");
    }
  },
  Bt = class n {
    constructor(t) {
      this.stack = t;
    }
    static parse(t) {
      var e;
      let r = /^Program (\w*) invoke/,
        i = /^Program \w* success/,
        a = [];
      for (let o = 0; o < t.length; o++) {
        if (i.exec(t[o])) {
          a.pop();
          continue;
        }
        let s = (e = r.exec(t[o])) === null || e === void 0 ? void 0 : e[1];
        s && a.push(new j(s));
      }
      return new n(a);
    }
  },
  Ur = class n extends Error {
    constructor(t, e, r, i, a, o) {
      super(
        r
          .join(
            `
`
          )
          .replace("Program log: ", "")
      ),
        (this.errorLogs = r),
        (this.logs = i),
        (this.error = {
          errorCode: t,
          errorMessage: e,
          comparedValues: o,
          origin: a,
        }),
        (this._programErrorStack = Bt.parse(i));
    }
    static parse(t) {
      if (!t) return null;
      let e = t.findIndex((h) => h.startsWith("Program log: AnchorError"));
      if (e === -1) return null;
      let r = t[e],
        i = [r],
        a;
      if (e + 1 < t.length) {
        if (t[e + 1] === "Program log: Left:") {
          let h = /^Program log: (.*)$/,
            d = h.exec(t[e + 2])[1],
            p = h.exec(t[e + 4])[1];
          (a = [new j(d), new j(p)]), i.push(...t.slice(e + 1, e + 5));
        } else if (t[e + 1].startsWith("Program log: Left:")) {
          let h = /^Program log: (Left|Right): (.*)$/,
            d = h.exec(t[e + 1])[2],
            p = h.exec(t[e + 2])[2];
          i.push(...t.slice(e + 1, e + 3)), (a = [d, p]);
        }
      }
      let s =
          /^Program log: AnchorError occurred\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(
            r
          ),
        c =
          /^Program log: AnchorError thrown in (.*):(\d*)\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(
            r
          ),
        _ =
          /^Program log: AnchorError caused by account: (.*)\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(
            r
          );
      if (s) {
        let [h, d, p] = s.slice(1, 4),
          b = { code: h, number: parseInt(d) };
        return new n(b, p, i, t, void 0, a);
      } else if (c) {
        let [h, d, p, b, E] = c.slice(1, 6),
          S = { code: p, number: parseInt(b) },
          O = { file: h, line: parseInt(d) };
        return new n(S, E, i, t, O, a);
      } else if (_) {
        let [h, d, p, b] = _.slice(1, 5),
          E = h,
          S = { code: d, number: parseInt(p) };
        return new n(S, b, i, t, E, a);
      } else return null;
    }
    get program() {
      return this._programErrorStack.stack[
        this._programErrorStack.stack.length - 1
      ];
    }
    get programErrorStack() {
      return this._programErrorStack.stack;
    }
    toString() {
      return this.message;
    }
  },
  Mr = class n extends Error {
    constructor(t, e, r) {
      super(),
        (this.code = t),
        (this.msg = e),
        (this.logs = r),
        r && (this._programErrorStack = Bt.parse(r));
    }
    static parse(t, e) {
      let r = t.toString(),
        i;
      if (r.includes("custom program error:")) {
        let s = r.split("custom program error: ");
        if (s.length !== 2) return null;
        i = s[1];
      } else {
        let s = r.match(/"Custom":([0-9]+)}/g);
        if (!s || s.length > 1) return null;
        i = s[0].match(/([0-9]+)/g)[0];
      }
      let a;
      try {
        a = parseInt(i);
      } catch {
        return null;
      }
      let o = e.get(a);
      return o !== void 0
        ? new n(a, o, t.logs)
        : ((o = Cl.get(a)), o !== void 0 ? new n(a, o, t.logs) : null);
    }
    get program() {
      var t;
      return (t = this._programErrorStack) === null || t === void 0
        ? void 0
        : t.stack[this._programErrorStack.stack.length - 1];
    }
    get programErrorStack() {
      var t;
      return (t = this._programErrorStack) === null || t === void 0
        ? void 0
        : t.stack;
    }
    toString() {
      return this.msg;
    }
  };
function No(n, t) {
  Di("debug-logs") && console.log("Translating error:", n);
  let e = Ur.parse(n.logs);
  if (e) return e;
  let r = Mr.parse(n, t);
  if (r) return r;
  if (n.logs) {
    let i = {
      get: function (a, o) {
        return o === "programErrorStack"
          ? a.programErrorStack.stack
          : o === "program"
          ? a.programErrorStack.stack[n.programErrorStack.stack.length - 1]
          : Reflect.get(...arguments);
      },
    };
    return (n.programErrorStack = Bt.parse(n.logs)), new Proxy(n, i);
  }
  return n;
}
var k = {
    InstructionMissing: 100,
    InstructionFallbackNotFound: 101,
    InstructionDidNotDeserialize: 102,
    InstructionDidNotSerialize: 103,
    IdlInstructionStub: 1e3,
    IdlInstructionInvalidProgram: 1001,
    ConstraintMut: 2e3,
    ConstraintHasOne: 2001,
    ConstraintSigner: 2002,
    ConstraintRaw: 2003,
    ConstraintOwner: 2004,
    ConstraintRentExempt: 2005,
    ConstraintSeeds: 2006,
    ConstraintExecutable: 2007,
    ConstraintState: 2008,
    ConstraintAssociated: 2009,
    ConstraintAssociatedInit: 2010,
    ConstraintClose: 2011,
    ConstraintAddress: 2012,
    ConstraintZero: 2013,
    ConstraintTokenMint: 2014,
    ConstraintTokenOwner: 2015,
    ConstraintMintMintAuthority: 2016,
    ConstraintMintFreezeAuthority: 2017,
    ConstraintMintDecimals: 2018,
    ConstraintSpace: 2019,
    ConstraintAccountIsNone: 2020,
    RequireViolated: 2500,
    RequireEqViolated: 2501,
    RequireKeysEqViolated: 2502,
    RequireNeqViolated: 2503,
    RequireKeysNeqViolated: 2504,
    RequireGtViolated: 2505,
    RequireGteViolated: 2506,
    AccountDiscriminatorAlreadySet: 3e3,
    AccountDiscriminatorNotFound: 3001,
    AccountDiscriminatorMismatch: 3002,
    AccountDidNotDeserialize: 3003,
    AccountDidNotSerialize: 3004,
    AccountNotEnoughKeys: 3005,
    AccountNotMutable: 3006,
    AccountOwnedByWrongProgram: 3007,
    InvalidProgramId: 3008,
    InvalidProgramExecutable: 3009,
    AccountNotSigner: 3010,
    AccountNotSystemOwned: 3011,
    AccountNotInitialized: 3012,
    AccountNotProgramData: 3013,
    AccountNotAssociatedTokenAccount: 3014,
    AccountSysvarMismatch: 3015,
    AccountReallocExceedsLimit: 3016,
    AccountDuplicateReallocs: 3017,
    DeclaredProgramIdMismatch: 4100,
    Deprecated: 5e3,
  },
  Cl = new Map([
    [k.InstructionMissing, "8 byte instruction identifier not provided"],
    [k.InstructionFallbackNotFound, "Fallback functions are not supported"],
    [
      k.InstructionDidNotDeserialize,
      "The program could not deserialize the given instruction",
    ],
    [
      k.InstructionDidNotSerialize,
      "The program could not serialize the given instruction",
    ],
    [k.IdlInstructionStub, "The program was compiled without idl instructions"],
    [
      k.IdlInstructionInvalidProgram,
      "The transaction was given an invalid program for the IDL instruction",
    ],
    [k.ConstraintMut, "A mut constraint was violated"],
    [k.ConstraintHasOne, "A has one constraint was violated"],
    [k.ConstraintSigner, "A signer constraint was violated"],
    [k.ConstraintRaw, "A raw constraint was violated"],
    [k.ConstraintOwner, "An owner constraint was violated"],
    [k.ConstraintRentExempt, "A rent exemption constraint was violated"],
    [k.ConstraintSeeds, "A seeds constraint was violated"],
    [k.ConstraintExecutable, "An executable constraint was violated"],
    [
      k.ConstraintState,
      "Deprecated Error, feel free to replace with something else",
    ],
    [k.ConstraintAssociated, "An associated constraint was violated"],
    [k.ConstraintAssociatedInit, "An associated init constraint was violated"],
    [k.ConstraintClose, "A close constraint was violated"],
    [k.ConstraintAddress, "An address constraint was violated"],
    [k.ConstraintZero, "Expected zero account discriminant"],
    [k.ConstraintTokenMint, "A token mint constraint was violated"],
    [k.ConstraintTokenOwner, "A token owner constraint was violated"],
    [
      k.ConstraintMintMintAuthority,
      "A mint mint authority constraint was violated",
    ],
    [
      k.ConstraintMintFreezeAuthority,
      "A mint freeze authority constraint was violated",
    ],
    [k.ConstraintMintDecimals, "A mint decimals constraint was violated"],
    [k.ConstraintSpace, "A space constraint was violated"],
    [
      k.ConstraintAccountIsNone,
      "A required account for the constraint is None",
    ],
    [k.RequireViolated, "A require expression was violated"],
    [k.RequireEqViolated, "A require_eq expression was violated"],
    [k.RequireKeysEqViolated, "A require_keys_eq expression was violated"],
    [k.RequireNeqViolated, "A require_neq expression was violated"],
    [k.RequireKeysNeqViolated, "A require_keys_neq expression was violated"],
    [k.RequireGtViolated, "A require_gt expression was violated"],
    [k.RequireGteViolated, "A require_gte expression was violated"],
    [
      k.AccountDiscriminatorAlreadySet,
      "The account discriminator was already set on this account",
    ],
    [
      k.AccountDiscriminatorNotFound,
      "No 8 byte discriminator was found on the account",
    ],
    [
      k.AccountDiscriminatorMismatch,
      "8 byte discriminator did not match what was expected",
    ],
    [k.AccountDidNotDeserialize, "Failed to deserialize the account"],
    [k.AccountDidNotSerialize, "Failed to serialize the account"],
    [
      k.AccountNotEnoughKeys,
      "Not enough account keys given to the instruction",
    ],
    [k.AccountNotMutable, "The given account is not mutable"],
    [
      k.AccountOwnedByWrongProgram,
      "The given account is owned by a different program than expected",
    ],
    [k.InvalidProgramId, "Program ID was not as expected"],
    [k.InvalidProgramExecutable, "Program account is not executable"],
    [k.AccountNotSigner, "The given account did not sign"],
    [
      k.AccountNotSystemOwned,
      "The given account is not owned by the system program",
    ],
    [
      k.AccountNotInitialized,
      "The program expected this account to be already initialized",
    ],
    [
      k.AccountNotProgramData,
      "The given account is not a program data account",
    ],
    [
      k.AccountNotAssociatedTokenAccount,
      "The given account is not the associated token account",
    ],
    [
      k.AccountSysvarMismatch,
      "The given public key does not match the required sysvar",
    ],
    [
      k.AccountReallocExceedsLimit,
      "The account reallocation exceeds the MAX_PERMITTED_DATA_INCREASE limit",
    ],
    [
      k.AccountDuplicateReallocs,
      "The account was duplicated for more than one reallocation",
    ],
    [
      k.DeclaredProgramIdMismatch,
      "The declared program id does not match the actual program id",
    ],
    [
      k.Deprecated,
      "The API being used is deprecated and should no longer be used",
    ],
  ]),
  $r = function () {
    return (
      ($r =
        Object.assign ||
        function (t) {
          for (var e, r = 1, i = arguments.length; r < i; r++) {
            e = arguments[r];
            for (var a in e)
              Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
          }
          return t;
        }),
      $r.apply(this, arguments)
    );
  },
  Zr = function () {
    return (
      (Zr =
        Object.assign ||
        function (t) {
          for (var e, r = 1, i = arguments.length; r < i; r++) {
            e = arguments[r];
            for (var a in e)
              Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
          }
          return t;
        }),
      Zr.apply(this, arguments)
    );
  };
function zl(n) {
  return n.toLowerCase();
}
var Pl = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g],
  Nl = /[^A-Z0-9]+/gi;
function Bl(n, t) {
  t === void 0 && (t = {});
  for (
    var e = t.splitRegexp,
      r = e === void 0 ? Pl : e,
      i = t.stripRegexp,
      a = i === void 0 ? Nl : i,
      o = t.transform,
      s = o === void 0 ? zl : o,
      l = t.delimiter,
      c = l === void 0 ? " " : l,
      u = Eo(Eo(n, r, "$1\0$2"), a, "\0"),
      _ = 0,
      h = u.length;
    u.charAt(_) === "\0";

  )
    _++;
  for (; u.charAt(h - 1) === "\0"; ) h--;
  return u.slice(_, h).split("\0").map(s).join(c);
}
function Eo(n, t, e) {
  return t instanceof RegExp
    ? n.replace(t, e)
    : t.reduce(function (r, i) {
        return r.replace(i, e);
      }, n);
}
function Ul(n, t) {
  return t === void 0 && (t = {}), Bl(n, Zr({ delimiter: "." }, t));
}
function Ml(n, t) {
  return t === void 0 && (t = {}), Ul(n, $r({ delimiter: "_" }, t));
}
var Ge = class n {
    static fieldLayout(t, e) {
      let r = t.name !== void 0 ? (0, M.default)(t.name) : void 0;
      switch (t.type) {
        case "bool":
          return y.bool(r);
        case "u8":
          return y.u8(r);
        case "i8":
          return y.i8(r);
        case "u16":
          return y.u16(r);
        case "i16":
          return y.i16(r);
        case "u32":
          return y.u32(r);
        case "i32":
          return y.i32(r);
        case "f32":
          return y.f32(r);
        case "u64":
          return y.u64(r);
        case "i64":
          return y.i64(r);
        case "f64":
          return y.f64(r);
        case "u128":
          return y.u128(r);
        case "i128":
          return y.i128(r);
        case "u256":
          return y.u256(r);
        case "i256":
          return y.i256(r);
        case "bytes":
          return y.vecU8(r);
        case "string":
          return y.str(r);
        case "publicKey":
          return y.publicKey(r);
        default: {
          if ("vec" in t.type)
            return y.vec(
              n.fieldLayout({ name: void 0, type: t.type.vec }, e),
              r
            );
          if ("option" in t.type)
            return y.option(
              n.fieldLayout({ name: void 0, type: t.type.option }, e),
              r
            );
          if ("defined" in t.type) {
            if (!e) throw new ct("User defined types not provided");
            let i = t.type.defined,
              a = e.filter((o) => o.name === i);
            if (a.length !== 1)
              throw new ct(`Type not found: ${JSON.stringify(t)}`);
            return n.typeDefLayout(a[0], e, r);
          } else if ("array" in t.type) {
            let i = t.type.array[0],
              a = t.type.array[1],
              o = n.fieldLayout({ name: void 0, type: i }, e);
            return y.array(o, a, r);
          } else throw new Error(`Not yet implemented: ${t}`);
        }
      }
    }
    static typeDefLayout(t, e = [], r) {
      switch (t.type.kind) {
        case "struct": {
          let i = t.type.fields.map((a) => n.fieldLayout(a, e));
          return y.struct(i, r);
        }
        case "enum": {
          let i = t.type.variants.map((a) => {
            let o = (0, M.default)(a.name);
            if (!a.fields) return y.struct([], o);
            let s = a.fields.map((l, c) =>
              l?.name
                ? n.fieldLayout(l, e)
                : n.fieldLayout({ type: l, name: c.toString() }, e)
            );
            return y.struct(s, o);
          });
          return r !== void 0 ? y.rustEnum(i).replicate(r) : y.rustEnum(i, r);
        }
        case "alias":
          return n.fieldLayout({ type: t.type.value, name: t.name }, e);
      }
    }
  },
  Ao = "global",
  Fr = class n {
    constructor(t) {
      (this.idl = t), (this.ixLayout = n.parseIxLayout(t));
      let e = new Map();
      t.instructions.forEach((r) => {
        let i = xo(Ao, r.name);
        e.set(qe.default.encode(i), {
          layout: this.ixLayout.get(r.name),
          name: r.name,
        });
      }),
        (this.sighashLayouts = e);
    }
    encode(t, e) {
      return this._encode(Ao, t, e);
    }
    _encode(t, e, r) {
      let i = X.Buffer.alloc(1e3),
        a = (0, M.default)(e),
        o = this.ixLayout.get(a);
      if (!o) throw new Error(`Unknown method: ${a}`);
      let s = o.encode(r, i),
        l = i.slice(0, s);
      return X.Buffer.concat([xo(t, e), l]);
    }
    static parseIxLayout(t) {
      let e = t.instructions.map((r) => {
        let i = r.args.map((o) => {
            var s, l;
            return Ge.fieldLayout(
              o,
              Array.from([
                ...((s = t.accounts) !== null && s !== void 0 ? s : []),
                ...((l = t.types) !== null && l !== void 0 ? l : []),
              ])
            );
          }),
          a = (0, M.default)(r.name);
        return [a, y.struct(i, a)];
      });
      return new Map(e);
    }
    decode(t, e = "hex") {
      typeof t == "string" &&
        (t = e === "hex" ? X.Buffer.from(t, "hex") : qe.default.decode(t));
      let r = qe.default.encode(t.slice(0, 8)),
        i = t.slice(8),
        a = this.sighashLayouts.get(r);
      return a ? { data: a.layout.decode(i), name: a.name } : null;
    }
    format(t, e) {
      return jr.format(t, e, this.idl);
    }
  },
  jr = class n {
    static format(t, e, r) {
      let i = r.instructions.filter((l) => t.name === l.name)[0];
      if (i === void 0) return console.error("Invalid instruction given"), null;
      let a = i.args.map((l) => ({
          name: l.name,
          type: n.formatIdlType(l.type),
          data: n.formatIdlData(l, t.data[l.name], r.types),
        })),
        o = n.flattenIdlAccounts(i.accounts),
        s = e.map((l, c) =>
          c < o.length ? ue({ name: o[c].name }, l) : ue({ name: void 0 }, l)
        );
      return { args: a, accounts: s };
    }
    static formatIdlType(t) {
      if (typeof t == "string") return t;
      if ("vec" in t) return `Vec<${this.formatIdlType(t.vec)}>`;
      if ("option" in t) return `Option<${this.formatIdlType(t.option)}>`;
      if ("defined" in t) return t.defined;
      if ("array" in t) return `Array<${t.array[0]}; ${t.array[1]}>`;
      throw new Error(`Unknown IDL type: ${t}`);
    }
    static formatIdlData(t, e, r) {
      if (typeof t.type == "string") return e.toString();
      if (t.type.hasOwnProperty("vec"))
        return (
          "[" +
          e
            .map((i) => this.formatIdlData({ name: "", type: t.type.vec }, i))
            .join(", ") +
          "]"
        );
      if (t.type.hasOwnProperty("option"))
        return e === null
          ? "null"
          : this.formatIdlData({ name: "", type: t.type.option }, e, r);
      if (t.type.hasOwnProperty("defined")) {
        if (r === void 0) throw new Error("User defined types not provided");
        let i = r.filter((a) => a.name === t.type.defined);
        if (i.length !== 1)
          throw new Error(`Type not found: ${t.type.defined}`);
        return n.formatIdlDataDefined(i[0], e, r);
      }
      return "unknown";
    }
    static formatIdlDataDefined(t, e, r) {
      switch (t.type.kind) {
        case "struct": {
          let i = t.type;
          return (
            "{ " +
            Object.keys(e)
              .map((o) => {
                let s = i.fields.find((l) => l.name === o);
                if (!s) throw new Error("Unable to find type");
                return o + ": " + n.formatIdlData(s, e[o], r);
              })
              .join(", ") +
            " }"
          );
        }
        case "enum": {
          if (t.type.variants.length === 0) return "{}";
          if (t.type.variants[0].name) {
            let i = t.type.variants,
              a = Object.keys(e)[0],
              o = e[a],
              s = Object.keys(o)
                .map((c) => {
                  var u;
                  let _ = o[c],
                    h =
                      (u = i[a]) === null || u === void 0
                        ? void 0
                        : u.find((d) => d.name === c);
                  if (!h) throw new Error("Unable to find variant");
                  return c + ": " + n.formatIdlData(h, _, r);
                })
                .join(", "),
              l = (0, M.default)(a, { pascalCase: !0 });
            return s.length === 0 ? l : `${l} { ${s} }`;
          } else return "Tuple formatting not yet implemented";
        }
        case "alias":
          return n.formatIdlType(t.type.value);
      }
    }
    static flattenIdlAccounts(t, e) {
      return t
        .map((r) => {
          let i = $l(r.name);
          if (r.hasOwnProperty("accounts")) {
            let a = e ? `${e} > ${i}` : i;
            return n.flattenIdlAccounts(r.accounts, a);
          } else return Pe(ue({}, r), { name: e ? `${e} > ${i}` : i });
        })
        .flat();
    }
  };
function $l(n) {
  let t = n.replace(/([A-Z])/g, " $1");
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function xo(n, t) {
  let e = Ml(t),
    r = `${n}:${e}`;
  return X.Buffer.from(dt(r).slice(0, 8));
}
function Ci(n, t) {
  switch (t.type.kind) {
    case "struct":
      return t.type.fields.map((e) => He(n, e.type)).reduce((e, r) => e + r, 0);
    case "enum": {
      let e = t.type.variants.map((r) =>
        r.fields
          ? r.fields
              .map((i) =>
                typeof i == "object" && "name" in i ? He(n, i.type) : He(n, i)
              )
              .reduce((i, a) => i + a, 0)
          : 0
      );
      return Math.max(...e) + 1;
    }
    case "alias":
      return He(n, t.type.value);
  }
}
function He(n, t) {
  var e, r;
  switch (t) {
    case "bool":
      return 1;
    case "u8":
      return 1;
    case "i8":
      return 1;
    case "i16":
      return 2;
    case "u16":
      return 2;
    case "u32":
      return 4;
    case "i32":
      return 4;
    case "f32":
      return 4;
    case "u64":
      return 8;
    case "i64":
      return 8;
    case "f64":
      return 8;
    case "u128":
      return 16;
    case "i128":
      return 16;
    case "u256":
      return 32;
    case "i256":
      return 32;
    case "bytes":
      return 1;
    case "string":
      return 1;
    case "publicKey":
      return 32;
    default:
      if ("vec" in t) return 1;
      if ("option" in t) return 1 + He(n, t.option);
      if ("coption" in t) return 4 + He(n, t.coption);
      if ("defined" in t) {
        let i =
          (r =
            (e = n.types) === null || e === void 0
              ? void 0
              : e.filter((o) => o.name === t.defined)) !== null && r !== void 0
            ? r
            : [];
        if (i.length !== 1)
          throw new ct(`Type not found: ${JSON.stringify(t)}`);
        let a = i[0];
        return Ci(n, a);
      }
      if ("array" in t) {
        let i = t.array[0],
          a = t.array[1];
        return He(n, i) * a;
      }
      throw new Error(`Invalid type ${JSON.stringify(t)}`);
  }
}
var Vr = 8;
function Bo(n) {
  return Buffer.from(dt(n).slice(0, Vr));
}
var Kr = class n {
    constructor(t) {
      if (t.accounts === void 0) {
        this.accountLayouts = new Map();
        return;
      }
      let e = t.accounts.map((r) => [r.name, Ge.typeDefLayout(r, t.types)]);
      (this.accountLayouts = new Map(e)), (this.idl = t);
    }
    encode(t, e) {
      return v(this, null, function* () {
        let r = X.Buffer.alloc(1e3),
          i = this.accountLayouts.get(t);
        if (!i) throw new Error(`Unknown account: ${t}`);
        let a = i.encode(e, r),
          o = r.slice(0, a),
          s = n.accountDiscriminator(t);
        return X.Buffer.concat([s, o]);
      });
    }
    decode(t, e) {
      if (n.accountDiscriminator(t).compare(e.slice(0, 8)))
        throw new Error("Invalid account discriminator");
      return this.decodeUnchecked(t, e);
    }
    decodeAny(t) {
      let e = t.slice(0, 8),
        r = Array.from(this.accountLayouts.keys()).find((i) =>
          n.accountDiscriminator(i).equals(e)
        );
      if (!r) throw new Error("Account descriminator not found");
      return this.decodeUnchecked(r, t);
    }
    decodeUnchecked(t, e) {
      let r = e.subarray(Vr),
        i = this.accountLayouts.get(t);
      if (!i) throw new Error(`Unknown account: ${t}`);
      return i.decode(r);
    }
    memcmp(t, e) {
      let r = n.accountDiscriminator(t);
      return {
        offset: 0,
        bytes: qe.default.encode(e ? X.Buffer.concat([r, e]) : r),
      };
    }
    size(t) {
      var e;
      return Vr + ((e = Ci(this.idl, t)) !== null && e !== void 0 ? e : 0);
    }
    static accountDiscriminator(t) {
      let e = `account:${(0, M.default)(t, {
        pascalCase: !0,
        preserveConsecutiveUppercase: !0,
      })}`;
      return Bo(e);
    }
  },
  Hr = class {
    constructor(t) {
      if (t.events === void 0) {
        this.layouts = new Map();
        return;
      }
      let e = t.events.map((r) => {
        let i = {
          name: r.name,
          type: {
            kind: "struct",
            fields: r.fields.map((a) => ({ name: a.name, type: a.type })),
          },
        };
        return [r.name, Ge.typeDefLayout(i, t.types)];
      });
      (this.layouts = new Map(e)),
        (this.discriminators = new Map(
          t.events === void 0
            ? []
            : t.events.map((r) => [Cr(Zl(r.name)), r.name])
        ));
    }
    decode(t) {
      let e;
      try {
        e = Ii(t);
      } catch {
        return null;
      }
      let r = Cr(e.slice(0, 8)),
        i = this.discriminators.get(r);
      if (i === void 0) return null;
      let a = this.layouts.get(i);
      if (!a) throw new Error(`Unknown event: ${i}`);
      return { data: a.decode(e.slice(8)), name: i };
    }
  };
function Zl(n) {
  return Bo(`event:${n}`);
}
var qr = class {
    constructor(t) {
      if (t.types === void 0) {
        this.typeLayouts = new Map();
        return;
      }
      let e = t.types.map((r) => [r.name, Ge.typeDefLayout(r, t.types)]);
      (this.typeLayouts = new Map(e)), (this.idl = t);
    }
    encode(t, e) {
      let r = X.Buffer.alloc(1e3),
        i = this.typeLayouts.get(t);
      if (!i) throw new Error(`Unknown type: ${t}`);
      let a = i.encode(e, r);
      return r.slice(0, a);
    }
    decode(t, e) {
      let r = this.typeLayouts.get(t);
      if (!r) throw new Error(`Unknown type: ${t}`);
      return r.decode(e);
    }
  },
  An = class {
    constructor(t) {
      (this.instruction = new Fr(t)),
        (this.accounts = new Kr(t)),
        (this.events = new Hr(t)),
        (this.types = new qr(t));
    }
  },
  Fl =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {};
function jl(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var J = class {
    constructor(t, e) {
      if (!Number.isInteger(t)) throw new TypeError("span must be an integer");
      (this.span = t), (this.property = e);
    }
    makeDestinationObject() {
      return {};
    }
    decode(t, e) {
      throw new Error("Layout is abstract");
    }
    encode(t, e, r) {
      throw new Error("Layout is abstract");
    }
    getSpan(t, e) {
      if (0 > this.span) throw new RangeError("indeterminate span");
      return this.span;
    }
    replicate(t) {
      let e = Object.create(this.constructor.prototype);
      return Object.assign(e, this), (e.property = t), e;
    }
    fromArray(t) {}
  },
  Dn = J;
function Vl(n, t) {
  return t.property ? n + "[" + t.property + "]" : n;
}
var xe = class extends J {
    isCount() {
      throw new Error("ExternalLayout is abstract");
    }
  },
  xn = class extends xe {
    constructor(t, e, r) {
      if (!(t instanceof J)) throw new TypeError("layout must be a Layout");
      if (e === void 0) e = 0;
      else if (!Number.isInteger(e))
        throw new TypeError("offset must be integer or undefined");
      super(t.span, r || t.property), (this.layout = t), (this.offset = e);
    }
    isCount() {
      return this.layout instanceof ut || this.layout instanceof kn;
    }
    decode(t, e) {
      return e === void 0 && (e = 0), this.layout.decode(t, e + this.offset);
    }
    encode(t, e, r) {
      return r === void 0 && (r = 0), this.layout.encode(t, e, r + this.offset);
    }
  },
  ut = class extends J {
    constructor(t, e) {
      if ((super(t, e), 6 < this.span))
        throw new RangeError("span must not exceed 6 bytes");
    }
    decode(t, e) {
      return e === void 0 && (e = 0), t.readUIntLE(e, this.span);
    }
    encode(t, e, r) {
      return r === void 0 && (r = 0), e.writeUIntLE(t, r, this.span), this.span;
    }
  },
  kn = class extends J {
    constructor(t, e) {
      if ((super(t, e), 6 < this.span))
        throw new RangeError("span must not exceed 6 bytes");
    }
    decode(t, e) {
      return e === void 0 && (e = 0), t.readUIntBE(e, this.span);
    }
    encode(t, e, r) {
      return r === void 0 && (r = 0), e.writeUIntBE(t, r, this.span), this.span;
    }
  },
  Gr = Math.pow(2, 32);
function Uo(n) {
  let t = Math.floor(n / Gr),
    e = n - t * Gr;
  return { hi32: t, lo32: e };
}
function Mo(n, t) {
  return n * Gr + t;
}
var Wr = class extends J {
    constructor(t) {
      super(8, t);
    }
    decode(t, e) {
      e === void 0 && (e = 0);
      let r = t.readUInt32LE(e),
        i = t.readUInt32LE(e + 4);
      return Mo(i, r);
    }
    encode(t, e, r) {
      r === void 0 && (r = 0);
      let i = Uo(t);
      return e.writeUInt32LE(i.lo32, r), e.writeUInt32LE(i.hi32, r + 4), 8;
    }
  },
  Yr = class extends J {
    constructor(t) {
      super(8, t);
    }
    decode(t, e) {
      e === void 0 && (e = 0);
      let r = t.readUInt32LE(e),
        i = t.readInt32LE(e + 4);
      return Mo(i, r);
    }
    encode(t, e, r) {
      r === void 0 && (r = 0);
      let i = Uo(t);
      return e.writeUInt32LE(i.lo32, r), e.writeInt32LE(i.hi32, r + 4), 8;
    }
  },
  Xr = class extends J {
    constructor(t, e, r) {
      if (!(Array.isArray(t) && t.reduce((a, o) => a && o instanceof J, !0)))
        throw new TypeError("fields must be array of Layout instances");
      typeof e == "boolean" && r === void 0 && ((r = e), (e = void 0));
      for (let a of t)
        if (0 > a.span && a.property === void 0)
          throw new Error(
            "fields cannot contain unnamed variable-length layout"
          );
      let i = -1;
      try {
        i = t.reduce((a, o) => a + o.getSpan(), 0);
      } catch {}
      super(i, e), (this.fields = t), (this.decodePrefixes = !!r);
    }
    getSpan(t, e) {
      if (0 <= this.span) return this.span;
      e === void 0 && (e = 0);
      let r = 0;
      try {
        r = this.fields.reduce((i, a) => {
          let o = a.getSpan(t, e);
          return (e += o), i + o;
        }, 0);
      } catch {
        throw new RangeError("indeterminate span");
      }
      return r;
    }
    decode(t, e) {
      e === void 0 && (e = 0);
      let r = this.makeDestinationObject();
      for (let i of this.fields)
        if (
          (i.property !== void 0 && (r[i.property] = i.decode(t, e)),
          (e += i.getSpan(t, e)),
          this.decodePrefixes && t.length === e)
        )
          break;
      return r;
    }
    encode(t, e, r) {
      r === void 0 && (r = 0);
      let i = r,
        a = 0,
        o = 0;
      for (let s of this.fields) {
        let l = s.span;
        if (((o = 0 < l ? l : 0), s.property !== void 0)) {
          let c = t[s.property];
          c !== void 0 &&
            ((o = s.encode(c, e, r)), 0 > l && (l = s.getSpan(e, r)));
        }
        (a = r), (r += l);
      }
      return a + o - i;
    }
    fromArray(t) {
      let e = this.makeDestinationObject();
      for (let r of this.fields)
        r.property !== void 0 && 0 < t.length && (e[r.property] = t.shift());
      return e;
    }
    layoutFor(t) {
      if (typeof t != "string") throw new TypeError("property must be string");
      for (let e of this.fields) if (e.property === t) return e;
    }
    offsetOf(t) {
      if (typeof t != "string") throw new TypeError("property must be string");
      let e = 0;
      for (let r of this.fields) {
        if (r.property === t) return e;
        0 > r.span ? (e = -1) : 0 <= e && (e += r.span);
      }
    }
  },
  Sn = class {
    constructor(t) {
      this.property = t;
    }
    decode() {
      throw new Error("UnionDiscriminator is abstract");
    }
    encode() {
      throw new Error("UnionDiscriminator is abstract");
    }
  },
  In = class extends Sn {
    constructor(t, e) {
      if (!(t instanceof xe && t.isCount()))
        throw new TypeError(
          "layout must be an unsigned integer ExternalLayout"
        );
      super(e || t.property || "variant"), (this.layout = t);
    }
    decode(t, e) {
      return this.layout.decode(t, e);
    }
    encode(t, e, r) {
      return this.layout.encode(t, e, r);
    }
  },
  Tn = class extends J {
    constructor(t, e, r) {
      let i = t instanceof ut || t instanceof kn;
      if (i) t = new In(new xn(t));
      else if (t instanceof xe && t.isCount()) t = new In(t);
      else if (!(t instanceof Sn))
        throw new TypeError(
          "discr must be a UnionDiscriminator or an unsigned integer layout"
        );
      if ((e === void 0 && (e = null), !(e === null || e instanceof J)))
        throw new TypeError("defaultLayout must be null or a Layout");
      if (e !== null) {
        if (0 > e.span)
          throw new Error("defaultLayout must have constant span");
        e.property === void 0 && (e = e.replicate("content"));
      }
      let a = -1;
      e && ((a = e.span), 0 <= a && i && (a += t.layout.span)),
        super(a, r),
        (this.discriminator = t),
        (this.usesPrefixDiscriminator = i),
        (this.defaultLayout = e),
        (this.registry = {});
      let o = this.defaultGetSourceVariant.bind(this);
      (this.getSourceVariant = function (s) {
        return o(s);
      }),
        (this.configGetSourceVariant = function (s) {
          o = s.bind(this);
        });
    }
    getSpan(t, e) {
      if (0 <= this.span) return this.span;
      e === void 0 && (e = 0);
      let r = this.getVariant(t, e);
      if (!r)
        throw new Error("unable to determine span for unrecognized variant");
      return r.getSpan(t, e);
    }
    defaultGetSourceVariant(t) {
      if (t.hasOwnProperty(this.discriminator.property)) {
        if (this.defaultLayout && t.hasOwnProperty(this.defaultLayout.property))
          return;
        let e = this.registry[t[this.discriminator.property]];
        if (e && (!e.layout || t.hasOwnProperty(e.property))) return e;
      } else
        for (let e in this.registry) {
          let r = this.registry[e];
          if (t.hasOwnProperty(r.property)) return r;
        }
      throw new Error("unable to infer src variant");
    }
    decode(t, e) {
      e === void 0 && (e = 0);
      let r,
        i = this.discriminator,
        a = i.decode(t, e),
        o = this.registry[a];
      if (o === void 0) {
        let s = 0;
        (o = this.defaultLayout),
          this.usesPrefixDiscriminator && (s = i.layout.span),
          (r = this.makeDestinationObject()),
          (r[i.property] = a),
          (r[o.property] = this.defaultLayout.decode(t, e + s));
      } else r = o.decode(t, e);
      return r;
    }
    encode(t, e, r) {
      r === void 0 && (r = 0);
      let i = this.getSourceVariant(t);
      if (i === void 0) {
        let a = this.discriminator,
          o = this.defaultLayout,
          s = 0;
        return (
          this.usesPrefixDiscriminator && (s = a.layout.span),
          a.encode(t[a.property], e, r),
          s + o.encode(t[o.property], e, r + s)
        );
      }
      return i.encode(t, e, r);
    }
    addVariant(t, e, r) {
      let i = new Jr(this, t, e, r);
      return (this.registry[t] = i), i;
    }
    getVariant(t, e) {
      let r = t;
      return (
        Buffer.isBuffer(t) &&
          (e === void 0 && (e = 0), (r = this.discriminator.decode(t, e))),
        this.registry[r]
      );
    }
  },
  Jr = class extends J {
    constructor(t, e, r, i) {
      if (!(t instanceof Tn)) throw new TypeError("union must be a Union");
      if (!Number.isInteger(e) || 0 > e)
        throw new TypeError("variant must be a (non-negative) integer");
      if ((typeof r == "string" && i === void 0 && ((i = r), (r = null)), r)) {
        if (!(r instanceof J)) throw new TypeError("layout must be a Layout");
        if (
          t.defaultLayout !== null &&
          0 <= r.span &&
          r.span > t.defaultLayout.span
        )
          throw new Error("variant span exceeds span of containing union");
        if (typeof i != "string")
          throw new TypeError("variant must have a String property");
      }
      let a = t.span;
      0 > t.span &&
        ((a = r ? r.span : 0),
        0 <= a &&
          t.usesPrefixDiscriminator &&
          (a += t.discriminator.layout.span)),
        super(a, i),
        (this.union = t),
        (this.variant = e),
        (this.layout = r || null);
    }
    getSpan(t, e) {
      if (0 <= this.span) return this.span;
      e === void 0 && (e = 0);
      let r = 0;
      return (
        this.union.usesPrefixDiscriminator &&
          (r = this.union.discriminator.layout.span),
        r + this.layout.getSpan(t, e + r)
      );
    }
    decode(t, e) {
      let r = this.makeDestinationObject();
      if ((e === void 0 && (e = 0), this !== this.union.getVariant(t, e)))
        throw new Error("variant mismatch");
      let i = 0;
      return (
        this.union.usesPrefixDiscriminator &&
          (i = this.union.discriminator.layout.span),
        this.layout
          ? (r[this.property] = this.layout.decode(t, e + i))
          : this.property
          ? (r[this.property] = !0)
          : this.union.usesPrefixDiscriminator &&
            (r[this.union.discriminator.property] = this.variant),
        r
      );
    }
    encode(t, e, r) {
      r === void 0 && (r = 0);
      let i = 0;
      if (
        (this.union.usesPrefixDiscriminator &&
          (i = this.union.discriminator.layout.span),
        this.layout && !t.hasOwnProperty(this.property))
      )
        throw new TypeError("variant lacks property " + this.property);
      this.union.discriminator.encode(this.variant, e, r);
      let a = i;
      if (
        this.layout &&
        (this.layout.encode(t[this.property], e, r + i),
        (a += this.layout.getSpan(e, r + i)),
        0 <= this.union.span && a > this.union.span)
      )
        throw new Error("encoded variant overruns containing union");
      return a;
    }
    fromArray(t) {
      if (this.layout) return this.layout.fromArray(t);
    }
  },
  Qr = class extends J {
    constructor(t, e) {
      if (
        !((t instanceof xe && t.isCount()) || (Number.isInteger(t) && 0 <= t))
      )
        throw new TypeError(
          "length must be positive integer or an unsigned integer ExternalLayout"
        );
      let r = -1;
      t instanceof xe || (r = t), super(r, e), (this.length = t);
    }
    getSpan(t, e) {
      let r = this.span;
      return 0 > r && (r = this.length.decode(t, e)), r;
    }
    decode(t, e) {
      e === void 0 && (e = 0);
      let r = this.span;
      return 0 > r && (r = this.length.decode(t, e)), t.slice(e, e + r);
    }
    encode(t, e, r) {
      let i = this.length;
      if (
        (this.length instanceof xe && (i = t.length),
        !(Buffer.isBuffer(t) && i === t.length))
      )
        throw new TypeError(
          Vl("Blob.encode", this) + " requires (length " + i + ") Buffer as src"
        );
      if (r + i > e.length) throw new RangeError("encoding overruns Buffer");
      return (
        e.write(t.toString("hex"), r, i, "hex"),
        this.length instanceof xe && this.length.encode(i, e, r),
        i
      );
    }
  },
  Kl = (n, t, e) => new xn(n, t, e),
  Hl = (n) => new ut(1, n),
  Ae = (n) => new ut(4, n),
  ql = (n) => new Wr(n),
  ke = (n) => new Yr(n),
  V = (n, t, e) => new Xr(n, t, e),
  $o = (n, t, e) => new Tn(n, t, e),
  Zt = (n, t) => new Qr(n, t),
  ei = class {
    constructor(t) {}
    encode(t, e) {
      switch ((0, M.default)(t)) {
        case "createAccount":
          return Gl(e);
        case "assign":
          return Wl(e);
        case "transfer":
          return Yl(e);
        case "createAccountWithSeed":
          return Xl(e);
        case "advanceNonceAccount":
          return Ql(e);
        case "withdrawNonceAccount":
          return ed(e);
        case "initializeNonceAccount":
          return Jl(e);
        case "authorizeNonceAccount":
          return td(e);
        case "allocate":
          return nd(e);
        case "allocateWithSeed":
          return rd(e);
        case "assignWithSeed":
          return id(e);
        case "transferWithSeed":
          return ad(e);
        default:
          throw new Error(`Invalid instruction: ${t}`);
      }
    }
    encodeState(t, e) {
      throw new Error("System does not have state");
    }
  },
  ti = class extends Dn {
    constructor(t) {
      super(-1, t),
        (this.property = t),
        (this.layout = V(
          [Ae("length"), Ae("lengthPadding"), Zt(Kl(Ae(), -8), "chars")],
          this.property
        ));
    }
    encode(t, e, r = 0) {
      if (t == null) return this.layout.span;
      let i = { chars: Buffer.from(t, "utf8") };
      return this.layout.encode(i, e, r);
    }
    decode(t, e = 0) {
      return this.layout.decode(t, e).chars.toString();
    }
    getSpan(t, e = 0) {
      return (
        Ae().span +
        Ae().span +
        new Si.default(new Uint8Array(t).slice(e, e + 4), 10, "le").toNumber()
      );
    }
  };
function Cn(n) {
  return new ti(n);
}
function se(n) {
  return Zt(32, n);
}
function Gl({ lamports: n, space: t, owner: e }) {
  return ce({ createAccount: { lamports: n, space: t, owner: e.toBuffer() } });
}
function Wl({ owner: n }) {
  return ce({ assign: { owner: n.toBuffer() } });
}
function Yl({ lamports: n }) {
  return ce({ transfer: { lamports: n } });
}
function Xl({ base: n, seed: t, lamports: e, space: r, owner: i }) {
  return ce(
    {
      createAccountWithSeed: {
        base: n.toBuffer(),
        seed: t,
        lamports: e,
        space: r,
        owner: i.toBuffer(),
      },
    },
    H.getVariant(3).span + t.length
  );
}
function Jl({ authorized: n }) {
  return ce({ initializeNonceAccount: { authorized: n.toBuffer() } });
}
function Ql({ authorized: n }) {
  return ce({ advanceNonceAccount: { authorized: n.toBuffer() } });
}
function ed({ lamports: n }) {
  return ce({ withdrawNonceAccount: { lamports: n } });
}
function td({ authorized: n }) {
  return ce({ authorizeNonceAccount: { authorized: n.toBuffer() } });
}
function nd({ space: n }) {
  return ce({ allocate: { space: n } });
}
function rd({ base: n, seed: t, space: e, owner: r }) {
  return ce(
    {
      allocateWithSeed: {
        base: n.toBuffer(),
        seed: t,
        space: e,
        owner: r.toBuffer(),
      },
    },
    H.getVariant(9).span + t.length
  );
}
function id({ base: n, seed: t, owner: e }) {
  return ce(
    { assignWithSeed: { base: n.toBuffer(), seed: t, owner: e.toBuffer() } },
    H.getVariant(10).span + t.length
  );
}
function ad({ lamports: n, seed: t, owner: e }) {
  return ce(
    { transferWithSeed: { lamports: n, seed: t, owner: e.toBuffer() } },
    H.getVariant(11).span + t.length
  );
}
var H = $o(Ae("instruction"));
H.addVariant(0, V([ke("lamports"), ke("space"), se("owner")]), "createAccount");
H.addVariant(1, V([se("owner")]), "assign");
H.addVariant(2, V([ke("lamports")]), "transfer");
H.addVariant(
  3,
  V([se("base"), Cn("seed"), ke("lamports"), ke("space"), se("owner")]),
  "createAccountWithSeed"
);
H.addVariant(4, V([se("authorized")]), "advanceNonceAccount");
H.addVariant(5, V([ke("lamports")]), "withdrawNonceAccount");
H.addVariant(6, V([se("authorized")]), "initializeNonceAccount");
H.addVariant(7, V([se("authorized")]), "authorizeNonceAccount");
H.addVariant(8, V([ke("space")]), "allocate");
H.addVariant(
  9,
  V([se("base"), Cn("seed"), ke("space"), se("owner")]),
  "allocateWithSeed"
);
H.addVariant(10, V([se("base"), Cn("seed"), se("owner")]), "assignWithSeed");
H.addVariant(
  11,
  V([ke("lamports"), Cn("seed"), se("owner")]),
  "transferWithSeed"
);
function ce(n, t) {
  let e = Buffer.alloc(t ?? od),
    r = H.encode(n, e);
  return t === void 0 ? e.slice(0, r) : e;
}
var od = Math.max(...Object.values(H.registry).map((n) => n.span)),
  ni = class {
    constructor(t) {
      this.idl = t;
    }
    encode(t, e) {
      return v(this, null, function* () {
        switch (t) {
          case "nonce": {
            let r = Buffer.alloc($n),
              i = Zo.encode(e, r);
            return r.slice(0, i);
          }
          default:
            throw new Error(`Invalid account name: ${t}`);
        }
      });
    }
    decode(t, e) {
      return this.decodeUnchecked(t, e);
    }
    decodeUnchecked(t, e) {
      switch (t) {
        case "nonce":
          return sd(e);
        default:
          throw new Error(`Invalid account name: ${t}`);
      }
    }
    memcmp(t, e) {
      switch (t) {
        case "nonce":
          return { dataSize: $n };
        default:
          throw new Error(`Invalid account name: ${t}`);
      }
    }
    size(t) {
      var e;
      return (e = Ci(this.idl, t)) !== null && e !== void 0 ? e : 0;
    }
  };
function sd(n) {
  return Zo.decode(n);
}
var ri = class extends Dn {
  constructor(t, e, r, i) {
    super(t.span, i), (this.layout = t), (this.decoder = e), (this.encoder = r);
  }
  decode(t, e) {
    return this.decoder(this.layout.decode(t, e));
  }
  encode(t, e, r) {
    return this.layout.encode(this.encoder(t), e, r);
  }
  getSpan(t, e) {
    return this.layout.getSpan(t, e);
  }
};
function ko(n) {
  return new ri(
    Zt(32),
    (t) => new j(t),
    (t) => t.toBuffer(),
    n
  );
}
var Zo = V([
    Ae("version"),
    Ae("state"),
    ko("authorizedPubkey"),
    ko("nonce"),
    V([ql("lamportsPerSignature")], "feeCalculator"),
  ]),
  ii = class {
    constructor(t) {}
    decode(t) {
      throw new Error("System program does not have events");
    }
  },
  ai = class {
    constructor(t) {}
    encode(t, e) {
      throw new Error("System does not have user-defined types");
    }
    decode(t, e) {
      throw new Error("System does not have user-defined types");
    }
  },
  oi = class {
    constructor(t) {
      (this.instruction = new ei(t)),
        (this.accounts = new ni(t)),
        (this.events = new ii(t)),
        (this.types = new ai(t));
    }
  };
function cd(n) {
  return new TextDecoder().decode(dt(n));
}
var ud = Object.freeze({ __proto__: null, hash: cd });
function ld(n, t, e) {
  let r = X.Buffer.concat([n.toBuffer(), X.Buffer.from(t), e.toBuffer()]);
  return new j(dt(r));
}
function Fo(n, ...t) {
  let e = [X.Buffer.from([97, 110, 99, 104, 111, 114])];
  t.forEach((i) => {
    e.push(i instanceof X.Buffer ? i : re(i).toBuffer());
  });
  let [r] = j.findProgramAddressSync(e, re(n));
  return r;
}
var dd = Object.freeze({
    __proto__: null,
    createWithSeedSync: ld,
    associated: Fo,
  }),
  zi = new j("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
  Pi = new j("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
function fd({ mint: n, owner: t }) {
  return j.findProgramAddressSync(
    [t.toBuffer(), zi.toBuffer(), n.toBuffer()],
    Pi
  )[0];
}
var hd = Object.freeze({
    __proto__: null,
    TOKEN_PROGRAM_ID: zi,
    ASSOCIATED_PROGRAM_ID: Pi,
    associatedAddress: fd,
  }),
  si = { exports: {} };
(function (n, t) {
  var e = typeof self < "u" ? self : Fl,
    r = (function () {
      function a() {
        (this.fetch = !1), (this.DOMException = e.DOMException);
      }
      return (a.prototype = e), new a();
    })();
  (function (a) {
    (function (o) {
      var s = {
        searchParams: "URLSearchParams" in a,
        iterable: "Symbol" in a && "iterator" in Symbol,
        blob:
          "FileReader" in a &&
          "Blob" in a &&
          (function () {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          })(),
        formData: "FormData" in a,
        arrayBuffer: "ArrayBuffer" in a,
      };
      function l(f) {
        return f && DataView.prototype.isPrototypeOf(f);
      }
      if (s.arrayBuffer)
        var c = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          u =
            ArrayBuffer.isView ||
            function (f) {
              return f && c.indexOf(Object.prototype.toString.call(f)) > -1;
            };
      function _(f) {
        if (
          (typeof f != "string" && (f = String(f)),
          /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(f))
        )
          throw new TypeError("Invalid character in header field name");
        return f.toLowerCase();
      }
      function h(f) {
        return typeof f != "string" && (f = String(f)), f;
      }
      function d(f) {
        var w = {
          next: function () {
            var D = f.shift();
            return { done: D === void 0, value: D };
          },
        };
        return (
          s.iterable &&
            (w[Symbol.iterator] = function () {
              return w;
            }),
          w
        );
      }
      function p(f) {
        (this.map = {}),
          f instanceof p
            ? f.forEach(function (w, D) {
                this.append(D, w);
              }, this)
            : Array.isArray(f)
            ? f.forEach(function (w) {
                this.append(w[0], w[1]);
              }, this)
            : f &&
              Object.getOwnPropertyNames(f).forEach(function (w) {
                this.append(w, f[w]);
              }, this);
      }
      (p.prototype.append = function (f, w) {
        (f = _(f)), (w = h(w));
        var D = this.map[f];
        this.map[f] = D ? D + ", " + w : w;
      }),
        (p.prototype.delete = function (f) {
          delete this.map[_(f)];
        }),
        (p.prototype.get = function (f) {
          return (f = _(f)), this.has(f) ? this.map[f] : null;
        }),
        (p.prototype.has = function (f) {
          return this.map.hasOwnProperty(_(f));
        }),
        (p.prototype.set = function (f, w) {
          this.map[_(f)] = h(w);
        }),
        (p.prototype.forEach = function (f, w) {
          for (var D in this.map)
            this.map.hasOwnProperty(D) && f.call(w, this.map[D], D, this);
        }),
        (p.prototype.keys = function () {
          var f = [];
          return (
            this.forEach(function (w, D) {
              f.push(D);
            }),
            d(f)
          );
        }),
        (p.prototype.values = function () {
          var f = [];
          return (
            this.forEach(function (w) {
              f.push(w);
            }),
            d(f)
          );
        }),
        (p.prototype.entries = function () {
          var f = [];
          return (
            this.forEach(function (w, D) {
              f.push([D, w]);
            }),
            d(f)
          );
        }),
        s.iterable && (p.prototype[Symbol.iterator] = p.prototype.entries);
      function b(f) {
        if (f.bodyUsed) return Promise.reject(new TypeError("Already read"));
        f.bodyUsed = !0;
      }
      function E(f) {
        return new Promise(function (w, D) {
          (f.onload = function () {
            w(f.result);
          }),
            (f.onerror = function () {
              D(f.error);
            });
        });
      }
      function S(f) {
        var w = new FileReader(),
          D = E(w);
        return w.readAsArrayBuffer(f), D;
      }
      function O(f) {
        var w = new FileReader(),
          D = E(w);
        return w.readAsText(f), D;
      }
      function R(f) {
        for (
          var w = new Uint8Array(f), D = new Array(w.length), W = 0;
          W < w.length;
          W++
        )
          D[W] = String.fromCharCode(w[W]);
        return D.join("");
      }
      function g(f) {
        if (f.slice) return f.slice(0);
        var w = new Uint8Array(f.byteLength);
        return w.set(new Uint8Array(f)), w.buffer;
      }
      function L() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (f) {
            (this._bodyInit = f),
              f
                ? typeof f == "string"
                  ? (this._bodyText = f)
                  : s.blob && Blob.prototype.isPrototypeOf(f)
                  ? (this._bodyBlob = f)
                  : s.formData && FormData.prototype.isPrototypeOf(f)
                  ? (this._bodyFormData = f)
                  : s.searchParams && URLSearchParams.prototype.isPrototypeOf(f)
                  ? (this._bodyText = f.toString())
                  : s.arrayBuffer && s.blob && l(f)
                  ? ((this._bodyArrayBuffer = g(f.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : s.arrayBuffer &&
                    (ArrayBuffer.prototype.isPrototypeOf(f) || u(f))
                  ? (this._bodyArrayBuffer = g(f))
                  : (this._bodyText = f = Object.prototype.toString.call(f))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                (typeof f == "string"
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : s.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(f) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          s.blob &&
            ((this.blob = function () {
              var f = b(this);
              if (f) return f;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? b(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(S);
            })),
          (this.text = function () {
            var f = b(this);
            if (f) return f;
            if (this._bodyBlob) return O(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(R(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          s.formData &&
            (this.formData = function () {
              return this.text().then(C);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      var F = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function A(f) {
        var w = f.toUpperCase();
        return F.indexOf(w) > -1 ? w : f;
      }
      function z(f, w) {
        w = w || {};
        var D = w.body;
        if (f instanceof z) {
          if (f.bodyUsed) throw new TypeError("Already read");
          (this.url = f.url),
            (this.credentials = f.credentials),
            w.headers || (this.headers = new p(f.headers)),
            (this.method = f.method),
            (this.mode = f.mode),
            (this.signal = f.signal),
            !D && f._bodyInit != null && ((D = f._bodyInit), (f.bodyUsed = !0));
        } else this.url = String(f);
        if (
          ((this.credentials =
            w.credentials || this.credentials || "same-origin"),
          (w.headers || !this.headers) && (this.headers = new p(w.headers)),
          (this.method = A(w.method || this.method || "GET")),
          (this.mode = w.mode || this.mode || null),
          (this.signal = w.signal || this.signal),
          (this.referrer = null),
          (this.method === "GET" || this.method === "HEAD") && D)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(D);
      }
      z.prototype.clone = function () {
        return new z(this, { body: this._bodyInit });
      };
      function C(f) {
        var w = new FormData();
        return (
          f
            .trim()
            .split("&")
            .forEach(function (D) {
              if (D) {
                var W = D.split("="),
                  q = W.shift().replace(/\+/g, " "),
                  U = W.join("=").replace(/\+/g, " ");
                w.append(decodeURIComponent(q), decodeURIComponent(U));
              }
            }),
          w
        );
      }
      function T(f) {
        var w = new p(),
          D = f.replace(/\r?\n[\t ]+/g, " ");
        return (
          D.split(/\r?\n/).forEach(function (W) {
            var q = W.split(":"),
              U = q.shift().trim();
            if (U) {
              var Ft = q.join(":").trim();
              w.append(U, Ft);
            }
          }),
          w
        );
      }
      L.call(z.prototype);
      function I(f, w) {
        w || (w = {}),
          (this.type = "default"),
          (this.status = w.status === void 0 ? 200 : w.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = "statusText" in w ? w.statusText : "OK"),
          (this.headers = new p(w.headers)),
          (this.url = w.url || ""),
          this._initBody(f);
      }
      L.call(I.prototype),
        (I.prototype.clone = function () {
          return new I(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new p(this.headers),
            url: this.url,
          });
        }),
        (I.error = function () {
          var f = new I(null, { status: 0, statusText: "" });
          return (f.type = "error"), f;
        });
      var ge = [301, 302, 303, 307, 308];
      (I.redirect = function (f, w) {
        if (ge.indexOf(w) === -1) throw new RangeError("Invalid status code");
        return new I(null, { status: w, headers: { location: f } });
      }),
        (o.DOMException = a.DOMException);
      try {
        new o.DOMException();
      } catch {
        (o.DOMException = function (w, D) {
          (this.message = w), (this.name = D);
          var W = Error(w);
          this.stack = W.stack;
        }),
          (o.DOMException.prototype = Object.create(Error.prototype)),
          (o.DOMException.prototype.constructor = o.DOMException);
      }
      function We(f, w) {
        return new Promise(function (D, W) {
          var q = new z(f, w);
          if (q.signal && q.signal.aborted)
            return W(new o.DOMException("Aborted", "AbortError"));
          var U = new XMLHttpRequest();
          function Ft() {
            U.abort();
          }
          (U.onload = function () {
            var lt = {
              status: U.status,
              statusText: U.statusText,
              headers: T(U.getAllResponseHeaders() || ""),
            };
            lt.url =
              "responseURL" in U
                ? U.responseURL
                : lt.headers.get("X-Request-URL");
            var Pn = "response" in U ? U.response : U.responseText;
            D(new I(Pn, lt));
          }),
            (U.onerror = function () {
              W(new TypeError("Network request failed"));
            }),
            (U.ontimeout = function () {
              W(new TypeError("Network request failed"));
            }),
            (U.onabort = function () {
              W(new o.DOMException("Aborted", "AbortError"));
            }),
            U.open(q.method, q.url, !0),
            q.credentials === "include"
              ? (U.withCredentials = !0)
              : q.credentials === "omit" && (U.withCredentials = !1),
            "responseType" in U && s.blob && (U.responseType = "blob"),
            q.headers.forEach(function (lt, Pn) {
              U.setRequestHeader(Pn, lt);
            }),
            q.signal &&
              (q.signal.addEventListener("abort", Ft),
              (U.onreadystatechange = function () {
                U.readyState === 4 && q.signal.removeEventListener("abort", Ft);
              })),
            U.send(typeof q._bodyInit > "u" ? null : q._bodyInit);
        });
      }
      return (
        (We.polyfill = !0),
        a.fetch ||
          ((a.fetch = We), (a.Headers = p), (a.Request = z), (a.Response = I)),
        (o.Headers = p),
        (o.Request = z),
        (o.Response = I),
        (o.fetch = We),
        Object.defineProperty(o, "__esModule", { value: !0 }),
        o
      );
    })({});
  })(r),
    (r.fetch.ponyfill = !0),
    delete r.fetch.polyfill;
  var i = r;
  (t = i.fetch),
    (t.default = i.fetch),
    (t.fetch = i.fetch),
    (t.Headers = i.Headers),
    (t.Request = i.Request),
    (t.Response = i.Response),
    (n.exports = t);
})(si, si.exports);
var pd = jl(si.exports);
function _d(n, t, e = 5) {
  return v(this, null, function* () {
    let r = `https://api.apr.dev/api/v0/program/${t.toString()}/latest?limit=${e}`,
      [i, a] = yield Promise.all([jo(n, t), pd(r)]),
      o = (yield a.json()).filter(
        (l) => !l.aborted && l.state === "Built" && l.verified === "Verified"
      );
    if (o.length === 0) return null;
    let s = o[0];
    return i.slot.toNumber() !== s.verified_slot ? null : s;
  });
}
function jo(n, t) {
  return v(this, null, function* () {
    let e = yield n.getAccountInfo(t);
    if (e === null) throw new Error("program account not found");
    let { program: r } = ci(e.data),
      i = yield n.getAccountInfo(r.programdataAddress);
    if (i === null) throw new Error("program data account not found");
    let { programData: a } = ci(i.data);
    return a;
  });
}
var wd = y.rustEnum(
  [
    y.struct([], "uninitialized"),
    y.struct([y.option(y.publicKey(), "authorityAddress")], "buffer"),
    y.struct([y.publicKey("programdataAddress")], "program"),
    y.struct(
      [y.u64("slot"), y.option(y.publicKey(), "upgradeAuthorityAddress")],
      "programData"
    ),
  ],
  void 0,
  y.u32()
);
function ci(n) {
  return wd.decode(n);
}
var gd = Object.freeze({
    __proto__: null,
    verifiedBuild: _d,
    fetchData: jo,
    decodeUpgradeableLoaderState: ci,
  }),
  Gd = Object.freeze({
    __proto__: null,
    sha256: ud,
    rpc: Rl,
    publicKey: dd,
    bytes: fl,
    token: hd,
    features: Dl,
    registry: gd,
  });
function md(n) {
  return "accounts" in n;
}
function yd(n) {
  return v(this, null, function* () {
    let t = (yield j.findProgramAddress([], n))[0];
    return yield j.createWithSeed(t, bd(), n);
  });
}
function bd() {
  return "anchor:idl";
}
var vd = y.struct([y.publicKey("authority"), y.vecU8("data")]);
function Ed(n) {
  return vd.decode(n);
}
function zn(n, t) {
  var e, r;
  let i = {},
    a = n.args ? n.args.length : 0;
  if (t.length > a) {
    if (t.length !== a + 1)
      throw new Error(
        `provided too many arguments ${t} to instruction ${
          n?.name
        } expecting: ${
          (r =
            (e = n.args) === null || e === void 0
              ? void 0
              : e.map((o) => o.name)) !== null && r !== void 0
            ? r
            : []
        }`
      );
    i = t.pop();
  }
  return [t, i];
}
var ui = class n {
  static build(t, e, r) {
    if (t.name === "_inner") throw new ct("the _inner name is reserved");
    let i = (...a) => {
      let [o, s] = zn(t, [...a]);
      Lo(t.accounts, s.accounts), Ad(t, ...a);
      let l = i.accounts(s.accounts);
      return (
        s.remainingAccounts !== void 0 && l.push(...s.remainingAccounts),
        Di("debug-logs") && console.log("Outgoing account metas:", l),
        new Un({ keys: l, programId: r, data: e(t.name, pl(t, ...o)) })
      );
    };
    return (i.accounts = (a) => n.accountsArray(a, t.accounts, r, t.name)), i;
  }
  static accountsArray(t, e, r, i) {
    return t
      ? e
          .map((a) => {
            if (("accounts" in a ? a.accounts : void 0) !== void 0) {
              let s = t[a.name];
              return n.accountsArray(s, a.accounts, r, i).flat();
            } else {
              let s = a,
                l;
              try {
                l = re(t[a.name]);
              } catch {
                throw new Error(
                  `Wrong input type for account "${
                    a.name
                  }" in the instruction accounts object${
                    i !== void 0 ? ' for instruction "' + i + '"' : ""
                  }. Expected PublicKey or string.`
                );
              }
              let c = s.isOptional && l.equals(r),
                u = s.isMut && !c,
                _ = s.isSigner && !c;
              return { pubkey: l, isWritable: u, isSigner: _ };
            }
          })
          .flat()
      : [];
  }
};
function Ad(n, ...t) {}
var li = class {
    static build(t, e) {
      return (...i) => {
        var a, o, s;
        let [, l] = zn(t, [...i]),
          c = new Mn();
        if (l.preInstructions && l.instructions)
          throw new Error("instructions is deprecated, use preInstructions");
        return (
          (a = l.preInstructions) === null ||
            a === void 0 ||
            a.forEach((u) => c.add(u)),
          (o = l.instructions) === null ||
            o === void 0 ||
            o.forEach((u) => c.add(u)),
          c.add(e(...i)),
          (s = l.postInstructions) === null ||
            s === void 0 ||
            s.forEach((u) => c.add(u)),
          c
        );
      };
    }
  },
  di = class {
    static build(t, e, r, i) {
      return (...o) =>
        v(this, null, function* () {
          var s;
          let l = e(...o),
            [, c] = zn(t, [...o]);
          if (i.sendAndConfirm === void 0)
            throw new Error(
              "This function requires 'Provider.sendAndConfirm' to be implemented."
            );
          try {
            return yield i.sendAndConfirm(
              l,
              (s = c.signers) !== null && s !== void 0 ? s : [],
              c.options
            );
          } catch (u) {
            throw No(u, r);
          }
        });
    }
  },
  fi = class {
    static build(t, e, r, i) {
      var a;
      let o = {};
      return (
        (a = t.accounts) === null ||
          a === void 0 ||
          a.forEach((s) => {
            let l = (0, M.default)(s.name);
            o[l] = new hi(t, s, r, i, e);
          }),
        o
      );
    }
  },
  hi = class {
    get size() {
      return this._size;
    }
    get programId() {
      return this._programId;
    }
    get provider() {
      return this._provider;
    }
    get coder() {
      return this._coder;
    }
    get idlAccount() {
      return this._idlAccount;
    }
    constructor(t, e, r, i, a) {
      (this._idlAccount = e),
        (this._programId = r),
        (this._provider = i ?? En()),
        (this._coder = a ?? new An(t)),
        (this._size = this._coder.accounts.size(e));
    }
    fetchNullable(t, e) {
      return v(this, null, function* () {
        let { data: r } = yield this.fetchNullableAndContext(t, e);
        return r;
      });
    }
    fetchNullableAndContext(t, e) {
      return v(this, null, function* () {
        let r = yield this.getAccountInfoAndContext(t, e),
          { value: i, context: a } = r;
        return {
          data:
            i && i.data.length !== 0
              ? this._coder.accounts.decode(this._idlAccount.name, i.data)
              : null,
          context: a,
        };
      });
    }
    fetch(t, e) {
      return v(this, null, function* () {
        let { data: r } = yield this.fetchNullableAndContext(t, e);
        if (r === null)
          throw new Error(
            `Account does not exist or has no data ${t.toString()}`
          );
        return r;
      });
    }
    fetchAndContext(t, e) {
      return v(this, null, function* () {
        let { data: r, context: i } = yield this.fetchNullableAndContext(t, e);
        if (r === null)
          throw new Error(`Account does not exist ${t.toString()}`);
        return { data: r, context: i };
      });
    }
    fetchMultiple(t, e) {
      return v(this, null, function* () {
        return (yield this.fetchMultipleAndContext(t, e)).map((i) =>
          i ? i.data : null
        );
      });
    }
    fetchMultipleAndContext(t, e) {
      return v(this, null, function* () {
        return (yield Oi(
          this._provider.connection,
          t.map((i) => re(i)),
          e
        )).map((i) => {
          if (i == null) return null;
          let { account: a, context: o } = i;
          return {
            data: this._coder.accounts.decode(this._idlAccount.name, a.data),
            context: o,
          };
        });
      });
    }
    all(t) {
      return v(this, null, function* () {
        let e = this.coder.accounts.memcmp(
            this._idlAccount.name,
            t instanceof Buffer ? t : void 0
          ),
          r = [];
        return (
          e?.offset != null &&
            e?.bytes != null &&
            r.push({ memcmp: { offset: e.offset, bytes: e.bytes } }),
          e?.dataSize != null && r.push({ dataSize: e.dataSize }),
          (yield this._provider.connection.getProgramAccounts(this._programId, {
            commitment: this._provider.connection.commitment,
            filters: [...r, ...(Array.isArray(t) ? t : [])],
          })).map(({ pubkey: a, account: o }) => ({
            publicKey: a,
            account: this._coder.accounts.decode(this._idlAccount.name, o.data),
          }))
        );
      });
    }
    subscribe(t, e) {
      let r = Pt.get(t.toString());
      if (r) return r.ee;
      let i = new Io.default();
      t = re(t);
      let a = this._provider.connection.onAccountChange(
        t,
        (o) => {
          let s = this._coder.accounts.decode(this._idlAccount.name, o.data);
          i.emit("change", s);
        },
        e
      );
      return Pt.set(t.toString(), { ee: i, listener: a }), i;
    }
    unsubscribe(t) {
      return v(this, null, function* () {
        let e = Pt.get(t.toString());
        if (!e) {
          console.warn("Address is not subscribed");
          return;
        }
        Pt &&
          (yield this._provider.connection
            .removeAccountChangeListener(e.listener)
            .then(() => {
              Pt.delete(t.toString());
            })
            .catch(console.error));
      });
    }
    createInstruction(t, e) {
      return v(this, null, function* () {
        let r = this.size;
        if (this._provider.publicKey === void 0)
          throw new Error(
            "This function requires the Provider interface implementor to have a 'publicKey' field."
          );
        return Zn.createAccount({
          fromPubkey: this._provider.publicKey,
          newAccountPubkey: t.publicKey,
          space: e ?? r,
          lamports:
            yield this._provider.connection.getMinimumBalanceForRentExemption(
              e ?? r
            ),
          programId: this._programId,
        });
      });
    }
    associated(...t) {
      return v(this, null, function* () {
        let e = yield this.associatedAddress(...t);
        return yield this.fetch(e);
      });
    }
    associatedAddress(...t) {
      return v(this, null, function* () {
        return yield Fo(this._programId, ...t);
      });
    }
    getAccountInfo(t, e) {
      return v(this, null, function* () {
        return yield this._provider.connection.getAccountInfo(re(t), e);
      });
    }
    getAccountInfoAndContext(t, e) {
      return v(this, null, function* () {
        return yield this._provider.connection.getAccountInfoAndContext(
          re(t),
          e
        );
      });
    }
  },
  Pt = new Map(),
  pi = "Program log: ",
  Vo = "Program data: ",
  xd = pi.length,
  kd = Vo.length,
  _i = class {
    constructor(t, e, r) {
      (this._programId = t),
        (this._provider = e),
        (this._eventParser = new Rn(t, r)),
        (this._eventCallbacks = new Map()),
        (this._eventListeners = new Map()),
        (this._listenerIdCount = 0);
    }
    addEventListener(t, e) {
      var r;
      let i = this._listenerIdCount;
      return (
        (this._listenerIdCount += 1),
        this._eventListeners.has(t) || this._eventListeners.set(t, []),
        this._eventListeners.set(
          t,
          ((r = this._eventListeners.get(t)) !== null && r !== void 0
            ? r
            : []
          ).concat(i)
        ),
        this._eventCallbacks.set(i, [t, e]),
        this._onLogsSubscriptionId !== void 0 ||
          (this._onLogsSubscriptionId = this._provider.connection.onLogs(
            this._programId,
            (a, o) => {
              if (!a.err)
                for (let s of this._eventParser.parseLogs(a.logs)) {
                  let l = this._eventListeners.get(s.name);
                  l &&
                    l.forEach((c) => {
                      let u = this._eventCallbacks.get(c);
                      if (u) {
                        let [, _] = u;
                        _(s.data, o.slot, a.signature);
                      }
                    });
                }
            }
          )),
        i
      );
    }
    removeEventListener(t) {
      return v(this, null, function* () {
        let e = this._eventCallbacks.get(t);
        if (!e) throw new Error(`Event listener ${t} doesn't exist!`);
        let [r] = e,
          i = this._eventListeners.get(r);
        if (!i) throw new Error(`Event listeners don't exist for ${r}!`);
        if (
          (this._eventCallbacks.delete(t),
          (i = i.filter((a) => a !== t)),
          this._eventListeners.set(r, i),
          i.length === 0 && this._eventListeners.delete(r),
          this._eventCallbacks.size === 0)
        ) {
          if (this._eventListeners.size !== 0)
            throw new Error(
              `Expected event listeners size to be 0 but got ${this._eventListeners.size}`
            );
          this._onLogsSubscriptionId !== void 0 &&
            (yield this._provider.connection.removeOnLogsListener(
              this._onLogsSubscriptionId
            ),
            (this._onLogsSubscriptionId = void 0));
        }
      });
    }
  },
  Rn = class {
    constructor(t, e) {
      (this.coder = e), (this.programId = t);
    }
    *parseLogs(t, e = !1) {
      let r = new gi(t),
        i = new wi(),
        a = r.next();
      for (; a !== null; ) {
        let [o, s, l] = this.handleLog(i, a, e);
        o && (yield o), s && i.push(s), l && i.pop(), (a = r.next());
      }
    }
    handleLog(t, e, r) {
      return t.stack.length > 0 && t.program() === this.programId.toString()
        ? this.handleProgramLog(e, r)
        : [null, ...this.handleSystemLog(e)];
    }
    handleProgramLog(t, e) {
      if (t.startsWith(pi) || t.startsWith(Vo)) {
        let r = t.startsWith(pi) ? t.slice(xd) : t.slice(kd),
          i = this.coder.events.decode(r);
        if (e && i === null) throw new Error(`Unable to decode event ${r}`);
        return [i, null, !1];
      } else return [null, ...this.handleSystemLog(t)];
    }
    handleSystemLog(t) {
      let e = t.split(":")[0];
      return e.match(/^Program (.*) success/g) !== null
        ? [null, !0]
        : e.startsWith(`Program ${this.programId.toString()} invoke`)
        ? [this.programId.toString(), !1]
        : e.includes("invoke")
        ? ["cpi", !1]
        : [null, !1];
    }
  },
  wi = class {
    constructor() {
      this.stack = [];
    }
    program() {
      if (!this.stack.length)
        throw new Error("Expected the stack to have elements");
      return this.stack[this.stack.length - 1];
    }
    push(t) {
      this.stack.push(t);
    }
    pop() {
      if (!this.stack.length)
        throw new Error("Expected the stack to have elements");
      this.stack.pop();
    }
  },
  gi = class {
    constructor(t) {
      this.logs = t;
    }
    next() {
      if (this.logs.length === 0) return null;
      let t = this.logs[0];
      return (this.logs = this.logs.slice(1)), t;
    }
  },
  mi = class {
    static build(t, e, r, i, a, o, s) {
      return (...c) =>
        v(this, null, function* () {
          var u;
          let _ = e(...c),
            [, h] = zn(t, [...c]),
            d;
          if (i.simulate === void 0)
            throw new Error(
              "This function requires 'Provider.simulate' to be implemented."
            );
          try {
            d = yield i.simulate(
              _,
              h.signers,
              (u = h.options) === null || u === void 0 ? void 0 : u.commitment
            );
          } catch (E) {
            throw No(E, r);
          }
          if (d === void 0) throw new Error("Unable to simulate transaction");
          let p = d.logs;
          if (!p) throw new Error("Simulated logs not found");
          let b = [];
          if (s.events) {
            let E = new Rn(o, a);
            for (let S of E.parseLogs(p)) b.push(S);
          }
          return { events: b, raw: p };
        });
    }
  };
function Lr(n) {
  return new Ln(
    Zt(8),
    (t) => bi.fromBuffer(t),
    (t) => t.toBuffer(),
    n
  );
}
function yn(n) {
  return new Ln(
    Zt(32),
    (t) => new j(t),
    (t) => t.toBuffer(),
    n
  );
}
function Or(n, t) {
  return new yi(n, t);
}
var Ln = class extends Dn {
    constructor(t, e, r, i) {
      super(t.span, i),
        (this.layout = t),
        (this.decoder = e),
        (this.encoder = r);
    }
    decode(t, e) {
      return this.decoder(this.layout.decode(t, e));
    }
    encode(t, e, r) {
      return this.layout.encode(this.encoder(t), e, r);
    }
    getSpan(t, e) {
      return this.layout.getSpan(t, e);
    }
  },
  yi = class extends Dn {
    constructor(t, e) {
      super(-1, e), (this.layout = t), (this.discriminator = Ae());
    }
    encode(t, e, r = 0) {
      return t == null
        ? this.layout.span + this.discriminator.encode(0, e, r)
        : (this.discriminator.encode(1, e, r),
          this.layout.encode(t, e, r + 4) + 4);
    }
    decode(t, e = 0) {
      let r = this.discriminator.decode(t, e);
      if (r === 0) return null;
      if (r === 1) return this.layout.decode(t, e + 4);
      throw new Error("Invalid coption " + this.layout.property);
    }
    getSpan(t, e = 0) {
      return this.layout.getSpan(t, e + 4) + 4;
    }
  },
  bi = class n extends Si.default {
    toBuffer() {
      let t = super.toArray().reverse(),
        e = Buffer.from(t);
      if (e.length === 8) return e;
      if (e.length >= 8) throw new Error("u64 too large");
      let r = Buffer.alloc(8);
      return e.copy(r), r;
    }
    static fromBuffer(t) {
      if (t.length !== 8) throw new Error(`Invalid buffer length: ${t.length}`);
      return new n(
        [...t]
          .reverse()
          .map((e) => `00${e.toString(16)}`.slice(-2))
          .join(""),
        16
      );
    }
  },
  Sd = V([
    yn("mint"),
    yn("owner"),
    Lr("amount"),
    Or(yn(), "delegate"),
    ((n) => {
      let t = $o(Hl("discriminator"), null, n);
      return (
        t.addVariant(0, V([]), "uninitialized"),
        t.addVariant(1, V([]), "initialized"),
        t.addVariant(2, V([]), "frozen"),
        t
      );
    })("state"),
    Or(Lr(), "isNative"),
    Lr("delegatedAmount"),
    Or(yn(), "closeAuthority"),
  ]);
function Id(n) {
  return Sd.decode(n);
}
var On = class n {
  constructor(t, e, r, i, a, o, s, l) {
    (this._accounts = e),
      (this._provider = r),
      (this._programId = i),
      (this._idlIx = a),
      (this._idlTypes = s),
      (this._customResolver = l),
      (this._args = t),
      (this._accountStore = new vi(r, o, this._programId));
  }
  args(t) {
    this._args = t;
  }
  resolve() {
    return v(this, null, function* () {
      for (
        yield this.resolveConst(this._idlIx.accounts),
          this._resolveEventCpi(this._idlIx.accounts);
        (yield this.resolvePdas(this._idlIx.accounts)) +
          (yield this.resolveRelations(this._idlIx.accounts)) +
          (yield this.resolveCustom()) >
        0;

      );
    });
  }
  resolveCustom() {
    return v(this, null, function* () {
      if (this._customResolver) {
        let { accounts: t, resolved: e } = yield this._customResolver({
          args: this._args,
          accounts: this._accounts,
          provider: this._provider,
          programId: this._programId,
          idlIx: this._idlIx,
        });
        return (this._accounts = t), e;
      }
      return 0;
    });
  }
  resolveOptionalsHelper(t, e) {
    let r = {};
    for (let i of e) {
      let a = i.name,
        o = t[a];
      o !== void 0 &&
        (Ko(o)
          ? md(i)
            ? (r[a] = this.resolveOptionalsHelper(o, i.accounts))
            : (r[a] = Ho(o, !0))
          : o !== null
          ? (r[a] = re(o))
          : i.isOptional && (r[a] = this._programId));
    }
    return r;
  }
  resolveOptionals(t) {
    Object.assign(
      this._accounts,
      this.resolveOptionalsHelper(t, this._idlIx.accounts)
    );
  }
  get(t) {
    let e = t.reduce((r, i) => r && r[i], this._accounts);
    if (e && e.toBase58) return e;
  }
  set(t, e) {
    let r = this._accounts;
    t.forEach((i, a) => {
      a == t.length - 1 && (r[i] = e), (r[i] = r[i] || {}), (r = r[i]);
    });
  }
  resolveConst(r) {
    return v(this, arguments, function* (t, e = []) {
      for (let i = 0; i < t.length; i += 1) {
        let a = t[i],
          o = a.accounts;
        o && (yield this.resolveConst(o, [...e, (0, M.default)(a.name)]));
        let s = a,
          l = (0, M.default)(a.name);
        if (s.isSigner && !this.get([...e, l])) {
          if (this._provider.wallet === void 0)
            throw new Error(
              "This function requires the Provider interface implementor to have a 'wallet' field."
            );
          this.set([...e, l], this._provider.wallet.publicKey);
        }
        Reflect.has(n.CONST_ACCOUNTS, l) &&
          !this.get([...e, l]) &&
          this.set([...e, l], n.CONST_ACCOUNTS[l]);
      }
    });
  }
  _resolveEventCpi(t, e = []) {
    for (let r in t) {
      let i = t[r],
        a = i.accounts;
      a && this._resolveEventCpi(a, [...e, (0, M.default)(i.name)]);
      let o = +r + 1;
      if (o === t.length) return;
      let s = (0, M.default)(t[r].name),
        l = (0, M.default)(t[o].name);
      if (s === "eventAuthority" && l === "program") {
        let c = [...e, s],
          u = [...e, l];
        this.get(c) ||
          this.set(
            c,
            j.findProgramAddressSync(
              [Buffer.from("__event_authority")],
              this._programId
            )[0]
          ),
          this.get(u) || this.set(u, this._programId);
        return;
      }
    }
  }
  resolvePdas(r) {
    return v(this, arguments, function* (t, e = []) {
      let i = 0;
      for (let a = 0; a < t.length; a += 1) {
        let o = t[a],
          s = o.accounts;
        s && (i += yield this.resolvePdas(s, [...e, (0, M.default)(o.name)]));
        let l = o,
          c = (0, M.default)(o.name);
        l.pda &&
          l.pda.seeds.length > 0 &&
          !this.get([...e, c]) &&
          (yield this.autoPopulatePda(l, e)) &&
          (i += 1);
      }
      return i;
    });
  }
  resolveRelations(r) {
    return v(this, arguments, function* (t, e = []) {
      let i = 0;
      for (let a = 0; a < t.length; a += 1) {
        let o = t[a],
          s = o.accounts;
        s &&
          (i += yield this.resolveRelations(s, [...e, (0, M.default)(o.name)]));
        let l = o.relations || [],
          c = (0, M.default)(o.name),
          u = [...e, c],
          _ = this.get(u);
        if (_) {
          let h = l.filter((d) => !this.get([...e, (0, M.default)(d)]));
          if (((i += h.length), h.length > 0)) {
            let d = yield this._accountStore.fetchAccount({ publicKey: _ });
            yield Promise.all(
              h.map((p) =>
                v(this, null, function* () {
                  let b = (0, M.default)(p);
                  return this.set([...e, b], d[b]), d[b];
                })
              )
            );
          }
        }
      }
      return i;
    });
  }
  autoPopulatePda(r) {
    return v(this, arguments, function* (t, e = []) {
      if (!t.pda || !t.pda.seeds) throw new Error("Must have seeds");
      let i = yield Promise.all(t.pda.seeds.map((s) => this.toBuffer(s, e)));
      if (i.some((s) => typeof s > "u")) return;
      let a = yield this.parseProgramId(t, e);
      if (!a) return;
      let [o] = yield j.findProgramAddress(i, a);
      this.set([...e, (0, M.default)(t.name)], o);
    });
  }
  parseProgramId(r) {
    return v(this, arguments, function* (t, e = []) {
      var i;
      if (!(!((i = t.pda) === null || i === void 0) && i.programId))
        return this._programId;
      switch (t.pda.programId.kind) {
        case "const":
          return new j(this.toBufferConst(t.pda.programId.value));
        case "arg":
          return this.argValue(t.pda.programId);
        case "account":
          return yield this.accountValue(t.pda.programId, e);
        default:
          throw new Error(
            `Unexpected program seed kind: ${t.pda.programId.kind}`
          );
      }
    });
  }
  toBuffer(r) {
    return v(this, arguments, function* (t, e = []) {
      switch (t.kind) {
        case "const":
          return this.toBufferConst(t);
        case "arg":
          return yield this.toBufferArg(t);
        case "account":
          return yield this.toBufferAccount(t, e);
        default:
          throw new Error(`Unexpected seed kind: ${t.kind}`);
      }
    });
  }
  getType(t, e = []) {
    if (e.length > 0 && t.defined) {
      let r = this._idlTypes.find((o) => o.name === t.defined);
      if (!r) throw new Error(`Cannot find type ${t.defined}`);
      let a = r.type.fields.find((o) => o.name === e[0]);
      return this.getType(a.type, e.slice(1));
    }
    return t;
  }
  toBufferConst(t) {
    return this.toBufferValue(
      this.getType(t.type, (t.path || "").split(".").slice(1)),
      t.value
    );
  }
  toBufferArg(t) {
    return v(this, null, function* () {
      let e = this.argValue(t);
      if (!(typeof e > "u"))
        return this.toBufferValue(
          this.getType(t.type, (t.path || "").split(".").slice(1)),
          e
        );
    });
  }
  argValue(t) {
    let e = t.path.split("."),
      r = (0, M.default)(e[0]),
      i = this._idlIx.args.findIndex((a) => a.name === r);
    if (i === -1) throw new Error(`Unable to find argument for seed: ${r}`);
    return e.slice(1).reduce((a, o) => (a || {})[o], this._args[i]);
  }
  toBufferAccount(r) {
    return v(this, arguments, function* (t, e = []) {
      let i = yield this.accountValue(t, e);
      if (i) return this.toBufferValue(t.type, i);
    });
  }
  accountValue(r) {
    return v(this, arguments, function* (t, e = []) {
      let i = t.path.split("."),
        a = i[0],
        o = this.get([...e, (0, M.default)(a)]);
      if (o === null) throw new Error("fieldPubkey is null");
      if (i.length === 1) return o;
      let s = yield this._accountStore.fetchAccount({
        publicKey: o,
        name: t.account,
      });
      return this.parseAccountValue(s, i.slice(1));
    });
  }
  parseAccountValue(t, e) {
    let r;
    for (; e.length > 0; ) (r = t[(0, M.default)(e[0])]), (e = e.slice(1));
    return r;
  }
  toBufferValue(t, e) {
    switch (t) {
      case "u8":
        return Buffer.from([e]);
      case "u16":
        let r = Buffer.alloc(2);
        return r.writeUInt16LE(e), r;
      case "u32":
        let i = Buffer.alloc(4);
        return i.writeUInt32LE(e), i;
      case "u64":
        let a = Buffer.alloc(8);
        return a.writeBigUInt64LE(BigInt(e)), a;
      case "string":
        return Buffer.from(Ro(e));
      case "publicKey":
        return e.toBuffer();
      default:
        if (t.array) return Buffer.from(e);
        throw new Error(`Unexpected seed type: ${t}`);
    }
  }
};
On.CONST_ACCOUNTS = {
  associatedTokenProgram: Pi,
  rent: Ui,
  systemProgram: Zn.programId,
  tokenProgram: zi,
  clock: Bi,
};
var vi = class {
    constructor(t, e, r) {
      (this._provider = t),
        (this._programId = r),
        (this._cache = new Map()),
        (this._idls = {}),
        (this._idls[r.toBase58()] = e);
    }
    ensureIdl(t) {
      return v(this, null, function* () {
        if (!this._idls[t.toBase58()]) {
          let e = yield Ut.fetchIdl(t, this._provider);
          if (e) {
            let r = new Ut(e, t, this._provider);
            this._idls[t.toBase58()] = r.account;
          }
        }
        return this._idls[t.toBase58()];
      });
    }
    fetchAccount(i) {
      return v(
        this,
        arguments,
        function* ({ publicKey: t, name: e, programId: r = this._programId }) {
          let a = t.toString();
          if (!this._cache.has(a))
            if (e === "TokenAccount") {
              let o = yield this._provider.connection.getAccountInfo(t);
              if (o === null) throw new Error(`invalid account info for ${a}`);
              let s = Id(o.data);
              this._cache.set(a, s);
            } else if (e) {
              let o = yield this.ensureIdl(r);
              if (o) {
                let s = o[(0, M.default)(e)];
                if (s) {
                  let l = yield s.fetch(t);
                  this._cache.set(a, l);
                }
              }
            } else {
              let o = yield this._provider.connection.getAccountInfo(t);
              if (o === null) throw new Error(`invalid account info for ${a}`);
              let s = o.data,
                l = yield this.ensureIdl(o.owner);
              if (l) {
                let c = Object.values(l)[0];
                if (!c) throw new Error("No accounts for this program");
                let u = c.coder.accounts.decodeAny(s);
                this._cache.set(a, u);
              }
            }
          return this._cache.get(a);
        }
      );
    }
  },
  Ei = class {
    static build(t, e, r, i, a, o, s, l, c, u, _) {
      return (...h) => new Ai(h, i, a, o, s, l, t, e, r, c, u, _);
    }
  };
function Ko(n) {
  return typeof n == "object" && n !== null && !("_bn" in n);
}
function Ho(n, t) {
  let e = {};
  for (let r in n) {
    let i = n[r];
    if (i === null) {
      if (t)
        throw new Error(
          "Failed to resolve optionals due to IDL type mismatch with input accounts!"
        );
      continue;
    }
    e[r] = Ko(i) ? Ho(i, !0) : re(i);
  }
  return e;
}
var Ai = class {
    constructor(t, e, r, i, a, o, s, l, c, u, _, h) {
      (this._ixFn = e),
        (this._txFn = r),
        (this._rpcFn = i),
        (this._simulateFn = a),
        (this._viewFn = o),
        (this._programId = l),
        (this._accounts = {}),
        (this._remainingAccounts = []),
        (this._signers = []),
        (this._preInstructions = []),
        (this._postInstructions = []),
        (this._autoResolveAccounts = !0),
        (this._args = t),
        (this._accountsResolver = new On(t, this._accounts, s, l, c, u, _, h));
    }
    args(t) {
      (this._args = t), this._accountsResolver.args(t);
    }
    pubkeys() {
      return v(this, null, function* () {
        return (
          this._autoResolveAccounts && (yield this._accountsResolver.resolve()),
          this._accounts
        );
      });
    }
    accounts(t) {
      return (
        (this._autoResolveAccounts = !0),
        this._accountsResolver.resolveOptionals(t),
        this
      );
    }
    accountsStrict(t) {
      return (
        (this._autoResolveAccounts = !1),
        this._accountsResolver.resolveOptionals(t),
        this
      );
    }
    signers(t) {
      return (this._signers = this._signers.concat(t)), this;
    }
    remainingAccounts(t) {
      return (
        (this._remainingAccounts = this._remainingAccounts.concat(t)), this
      );
    }
    preInstructions(t) {
      return (this._preInstructions = this._preInstructions.concat(t)), this;
    }
    postInstructions(t) {
      return (this._postInstructions = this._postInstructions.concat(t)), this;
    }
    rpc(t) {
      return v(this, null, function* () {
        return (
          this._autoResolveAccounts && (yield this._accountsResolver.resolve()),
          this._rpcFn(...this._args, {
            accounts: this._accounts,
            signers: this._signers,
            remainingAccounts: this._remainingAccounts,
            preInstructions: this._preInstructions,
            postInstructions: this._postInstructions,
            options: t,
          })
        );
      });
    }
    rpcAndKeys(t) {
      return v(this, null, function* () {
        return { pubkeys: yield this.pubkeys(), signature: yield this.rpc(t) };
      });
    }
    view(t) {
      return v(this, null, function* () {
        if (
          (this._autoResolveAccounts &&
            (yield this._accountsResolver.resolve()),
          !this._viewFn)
        )
          throw new Error("Method does not support views");
        return this._viewFn(...this._args, {
          accounts: this._accounts,
          signers: this._signers,
          remainingAccounts: this._remainingAccounts,
          preInstructions: this._preInstructions,
          postInstructions: this._postInstructions,
          options: t,
        });
      });
    }
    simulate(t) {
      return v(this, null, function* () {
        return (
          this._autoResolveAccounts && (yield this._accountsResolver.resolve()),
          this._simulateFn(...this._args, {
            accounts: this._accounts,
            signers: this._signers,
            remainingAccounts: this._remainingAccounts,
            preInstructions: this._preInstructions,
            postInstructions: this._postInstructions,
            options: t,
          })
        );
      });
    }
    instruction() {
      return v(this, null, function* () {
        return (
          this._autoResolveAccounts && (yield this._accountsResolver.resolve()),
          this._ixFn(...this._args, {
            accounts: this._accounts,
            signers: this._signers,
            remainingAccounts: this._remainingAccounts,
            preInstructions: this._preInstructions,
            postInstructions: this._postInstructions,
          })
        );
      });
    }
    prepare() {
      return v(this, null, function* () {
        return {
          instruction: yield this.instruction(),
          pubkeys: yield this.pubkeys(),
          signers: yield this._signers,
        };
      });
    }
    transaction() {
      return v(this, null, function* () {
        return (
          this._autoResolveAccounts && (yield this._accountsResolver.resolve()),
          this._txFn(...this._args, {
            accounts: this._accounts,
            signers: this._signers,
            remainingAccounts: this._remainingAccounts,
            preInstructions: this._preInstructions,
            postInstructions: this._postInstructions,
          })
        );
      });
    }
  },
  xi = class {
    static build(t, e, r, i) {
      let a = e.accounts.find((l) => l.isMut),
        o = !!e.returns;
      return a || !o
        ? void 0
        : (...l) =>
            v(this, null, function* () {
              var c, u;
              let _ = yield r(...l),
                h = `Program return: ${t} `,
                d = _.raw.find((S) => S.startsWith(h));
              if (!d) throw new Error("View expected return log");
              let p = Ii(d.slice(h.length)),
                b = e.returns;
              if (!b) throw new Error("View expected return type");
              return Ge.fieldLayout(
                { type: b },
                Array.from([
                  ...((c = i.accounts) !== null && c !== void 0 ? c : []),
                  ...((u = i.types) !== null && u !== void 0 ? u : []),
                ])
              ).decode(p);
            });
    }
  },
  ki = class {
    static build(t, e, r, i, a) {
      let o = {},
        s = {},
        l = {},
        c = {},
        u = {},
        _ = {},
        h = hl(t),
        d = t.accounts ? fi.build(t, e, r, i) : {};
      return (
        t.instructions.forEach((p) => {
          let b = ui.build(p, (F, A) => e.instruction.encode(F, A), r),
            E = li.build(p, b),
            S = di.build(p, E, h, i),
            O = mi.build(p, E, h, i, e, r, t),
            R = xi.build(r, p, O, t),
            g = Ei.build(i, r, p, b, E, S, O, R, d, t.types || [], a && a(p)),
            L = (0, M.default)(p.name);
          (s[L] = b),
            (l[L] = E),
            (o[L] = S),
            (c[L] = O),
            (u[L] = g),
            R && (_[L] = R);
        }),
        [o, s, l, d, c, u, _]
      );
    }
  },
  Ut = class n {
    get programId() {
      return this._programId;
    }
    get idl() {
      return this._idl;
    }
    get coder() {
      return this._coder;
    }
    get provider() {
      return this._provider;
    }
    constructor(t, e, r, i, a) {
      (e = re(e)),
        r || (r = En()),
        (this._idl = t),
        (this._provider = r),
        (this._programId = e),
        (this._coder = i ?? new An(t)),
        (this._events = new _i(this._programId, r, this._coder));
      let [o, s, l, c, u, _, h] = ki.build(
        t,
        this._coder,
        e,
        r,
        a ?? (() => {})
      );
      (this.rpc = o),
        (this.instruction = s),
        (this.transaction = l),
        (this.account = c),
        (this.simulate = u),
        (this.methods = _),
        (this.views = h);
    }
    static at(t, e) {
      return v(this, null, function* () {
        let r = re(t),
          i = yield n.fetchIdl(r, e);
        if (!i) throw new Error(`IDL not found for program: ${t.toString()}`);
        return new n(i, r, e);
      });
    }
    static fetchIdl(t, e) {
      return v(this, null, function* () {
        e = e ?? En();
        let r = re(t),
          i = yield yd(r),
          a = yield e.connection.getAccountInfo(i);
        if (!a) return null;
        let o = Ed(a.data.slice(8)),
          s = wo(o.data);
        return JSON.parse(To(s));
      });
    }
    addEventListener(t, e) {
      return this._events.addEventListener(t, e);
    }
    removeEventListener(t) {
      return v(this, null, function* () {
        return yield this._events.removeEventListener(t);
      });
    }
  },
  Td = new j("11111111111111111111111111111111");
function Rd(n) {
  return new Ut(qo, Td, n, Ld());
}
function Ld() {
  return new oi(qo);
}
var qo = {
    version: "0.1.0",
    name: "system_program",
    instructions: [
      {
        name: "createAccount",
        accounts: [
          { name: "from", isMut: !0, isSigner: !0 },
          { name: "to", isMut: !0, isSigner: !0 },
        ],
        args: [
          { name: "lamports", type: "u64" },
          { name: "space", type: "u64" },
          { name: "owner", type: "publicKey" },
        ],
      },
      {
        name: "assign",
        accounts: [{ name: "pubkey", isMut: !0, isSigner: !0 }],
        args: [{ name: "owner", type: "publicKey" }],
      },
      {
        name: "transfer",
        accounts: [
          { name: "from", isMut: !0, isSigner: !0 },
          { name: "to", isMut: !0, isSigner: !1 },
        ],
        args: [{ name: "lamports", type: "u64" }],
      },
      {
        name: "createAccountWithSeed",
        accounts: [
          { name: "from", isMut: !0, isSigner: !0 },
          { name: "to", isMut: !0, isSigner: !1 },
          { name: "base", isMut: !1, isSigner: !0 },
        ],
        args: [
          { name: "base", type: "publicKey" },
          { name: "seed", type: "string" },
          { name: "lamports", type: "u64" },
          { name: "space", type: "u64" },
          { name: "owner", type: "publicKey" },
        ],
      },
      {
        name: "advanceNonceAccount",
        accounts: [
          { name: "nonce", isMut: !0, isSigner: !1 },
          { name: "recentBlockhashes", isMut: !1, isSigner: !1 },
          { name: "authorized", isMut: !1, isSigner: !0 },
        ],
        args: [{ name: "authorized", type: "publicKey" }],
      },
      {
        name: "withdrawNonceAccount",
        accounts: [
          { name: "nonce", isMut: !0, isSigner: !1 },
          { name: "to", isMut: !0, isSigner: !1 },
          { name: "recentBlockhashes", isMut: !1, isSigner: !1 },
          { name: "rent", isMut: !1, isSigner: !1 },
          { name: "authorized", isMut: !1, isSigner: !0 },
        ],
        args: [{ name: "lamports", type: "u64" }],
      },
      {
        name: "initializeNonceAccount",
        accounts: [
          { name: "nonce", isMut: !0, isSigner: !0 },
          { name: "recentBlockhashes", isMut: !1, isSigner: !1 },
          { name: "rent", isMut: !1, isSigner: !1 },
        ],
        args: [{ name: "authorized", type: "publicKey" }],
      },
      {
        name: "authorizeNonceAccount",
        accounts: [
          { name: "nonce", isMut: !0, isSigner: !1 },
          { name: "authorized", isMut: !1, isSigner: !0 },
        ],
        args: [{ name: "authorized", type: "publicKey" }],
      },
      {
        name: "allocate",
        accounts: [{ name: "pubkey", isMut: !0, isSigner: !0 }],
        args: [{ name: "space", type: "u64" }],
      },
      {
        name: "allocateWithSeed",
        accounts: [
          { name: "account", isMut: !0, isSigner: !1 },
          { name: "base", isMut: !1, isSigner: !0 },
        ],
        args: [
          { name: "base", type: "publicKey" },
          { name: "seed", type: "string" },
          { name: "space", type: "u64" },
          { name: "owner", type: "publicKey" },
        ],
      },
      {
        name: "assignWithSeed",
        accounts: [
          { name: "account", isMut: !0, isSigner: !1 },
          { name: "base", isMut: !1, isSigner: !0 },
        ],
        args: [
          { name: "base", type: "publicKey" },
          { name: "seed", type: "string" },
          { name: "owner", type: "publicKey" },
        ],
      },
      {
        name: "transferWithSeed",
        accounts: [
          { name: "from", isMut: !0, isSigner: !1 },
          { name: "base", isMut: !1, isSigner: !0 },
          { name: "to", isMut: !0, isSigner: !1 },
        ],
        args: [
          { name: "lamports", type: "u64" },
          { name: "seed", type: "string" },
          { name: "owner", type: "publicKey" },
        ],
      },
    ],
    accounts: [
      {
        name: "nonce",
        type: {
          kind: "struct",
          fields: [
            { name: "version", type: "u32" },
            { name: "state", type: "u32" },
            { name: "authorizedPubkey", type: "publicKey" },
            { name: "nonce", type: "publicKey" },
            { name: "feeCalculator", type: { defined: "FeeCalculator" } },
          ],
        },
      },
    ],
    types: [
      {
        name: "FeeCalculator",
        type: {
          kind: "struct",
          fields: [{ name: "lamportsPerSignature", type: "u64" }],
        },
      },
    ],
  },
  So = class {
    static system(t) {
      return Rd(t);
    }
  };
var export_BN = Od.default;
export {
  hi as AccountClient,
  Ur as AnchorError,
  Pr as AnchorProvider,
  export_BN as BN,
  Kr as BorshAccountsCoder,
  An as BorshCoder,
  Hr as BorshEventCoder,
  Fr as BorshInstructionCoder,
  Vr as DISCRIMINATOR_SIZE,
  _i as EventManager,
  Rn as EventParser,
  ct as IdlError,
  k as LangErrorCode,
  Cl as LangErrorMessage,
  Ei as MethodsBuilderFactory,
  So as Native,
  Ut as Program,
  Mr as ProgramError,
  Bt as ProgramErrorStack,
  oi as SystemCoder,
  Zl as eventDiscriminator,
  En as getProvider,
  hl as parseIdlErrors,
  qd as setProvider,
  zn as splitArgsAndCtx,
  pl as toInstruction,
  re as translateAddress,
  No as translateError,
  Gd as utils,
  Lo as validateAccounts,
  Mi as web3,
};
