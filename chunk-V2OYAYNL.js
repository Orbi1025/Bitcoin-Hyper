import { a as No, b as ec } from "./chunk-ZU6Q67UT.js";
import { a as os, b as Qa } from "./chunk-N4IN2AJ3.js";
import { a as ss, b as Ja } from "./chunk-QV7AMSUB.js";
import { a as Po, b as To, c as Co } from "./chunk-L4DL45FQ.js";
import {
  a as Bt,
  b as ts,
  c as rs,
  d as Lo,
  l as et,
  m as Ct,
  p as Fe,
  s as Yt,
  t as ns,
} from "./chunk-XMCF3TCT.js";
import { a as es, b as Oo, c as Xa } from "./chunk-CP7YJKJV.js";
import {
  a as F,
  b as Y,
  d as dt,
  e as le,
  f as St,
  g as Jn,
  i as nt,
  j as Qn,
  l as E,
} from "./chunk-QE6IBIJD.js";
function ht(n, e = "") {
  if (typeof n != "boolean") {
    let t = e && `"${e}"`;
    throw new Error(t + "expected boolean, got type=" + typeof n);
  }
  return n;
}
function Ye(n, e, t = "") {
  let r = Bt(n),
    s = n?.length,
    o = e !== void 0;
  if (!r || (o && s !== e)) {
    let i = t && `"${t}" `,
      c = o ? ` of length ${e}` : "",
      a = r ? `length=${s}` : `type=${typeof n}`;
    throw new Error(i + "expected Uint8Array" + c + ", got " + a);
  }
  return n;
}
function gr(n) {
  let e = n.toString(16);
  return e.length & 1 ? "0" + e : e;
}
function Uo(n) {
  if (typeof n != "string")
    throw new Error("hex string expected, got " + typeof n);
  return n === "" ? cs : BigInt("0x" + n);
}
function Zt(n) {
  return Uo(et(n));
}
function Ot(n) {
  return rs(n), Uo(et(Uint8Array.from(n).reverse()));
}
function Fr(n, e) {
  return Ct(n.toString(16).padStart(e * 2, "0"));
}
function us(n, e) {
  return Fr(n, e).reverse();
}
function ge(n, e, t) {
  let r;
  if (typeof e == "string")
    try {
      r = Ct(e);
    } catch (o) {
      throw new Error(n + " must be hex string or Uint8Array, cause: " + o);
    }
  else if (Bt(e)) r = Uint8Array.from(e);
  else throw new Error(n + " must be hex string or Uint8Array");
  let s = r.length;
  if (typeof t == "number" && s !== t)
    throw new Error(n + " of length " + t + " expected, got " + s);
  return r;
}
function fs(n) {
  return Uint8Array.from(n);
}
function zo(n, e, t) {
  return is(n) && is(e) && is(t) && e <= n && n < t;
}
function mr(n, e, t, r) {
  if (!zo(e, t, r))
    throw new Error(
      "expected valid " + n + ": " + t + " <= n < " + r + ", got " + e
    );
}
function jr(n) {
  let e;
  for (e = 0; n > cs; n >>= as, e += 1);
  return e;
}
function Ko(n, e, t) {
  if (typeof n != "number" || n < 2)
    throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2)
    throw new Error("qByteLen must be a number");
  if (typeof t != "function") throw new Error("hmacFn must be a function");
  let r = (l) => new Uint8Array(l),
    s = (l) => Uint8Array.of(l),
    o = r(n),
    i = r(n),
    c = 0,
    a = () => {
      o.fill(1), i.fill(0), (c = 0);
    },
    u = (...l) => t(i, o, ...l),
    d = (l = r(0)) => {
      (i = u(s(0), l)),
        (o = u()),
        l.length !== 0 && ((i = u(s(1), l)), (o = u()));
    },
    g = () => {
      if (c++ >= 1e3) throw new Error("drbg: tried 1000 values");
      let l = 0,
        h = [];
      for (; l < e; ) {
        o = u();
        let m = o.slice();
        h.push(m), (l += o.length);
      }
      return Fe(...h);
    };
  return (l, h) => {
    a(), d(l);
    let m;
    for (; !(m = h(g())); ) d();
    return a(), m;
  };
}
function It(n, e, t = {}) {
  if (!n || typeof n != "object")
    throw new Error("expected valid options object");
  function r(s, o, i) {
    let c = n[s];
    if (i && c === void 0) return;
    let a = typeof c;
    if (a !== o || c === null)
      throw new Error(`param "${s}" is invalid: expected ${o}, got ${a}`);
  }
  Object.entries(e).forEach(([s, o]) => r(s, o, !1)),
    Object.entries(t).forEach(([s, o]) => r(s, o, !0));
}
function Xt(n) {
  let e = new WeakMap();
  return (t, ...r) => {
    let s = e.get(t);
    if (s !== void 0) return s;
    let o = n(t, ...r);
    return e.set(t, o), o;
  };
}
var cs,
  as,
  is,
  Et,
  br = le(() => {
    "use strict";
    ns();
    ns();
    (cs = BigInt(0)), (as = BigInt(1));
    is = (n) => typeof n == "bigint" && cs <= n;
    Et = (n) => (as << BigInt(n)) - as;
  });
function Ee(n, e) {
  let t = n % e;
  return t >= De ? t : e + t;
}
function me(n, e, t) {
  let r = n;
  for (; e-- > De; ) (r *= r), (r %= t);
  return r;
}
function qo(n, e) {
  if (n === De) throw new Error("invert: expected non-zero number");
  if (e <= De) throw new Error("invert: expected positive modulus, got " + e);
  let t = Ee(n, e),
    r = e,
    s = De,
    o = _e,
    i = _e,
    c = De;
  for (; t !== De; ) {
    let u = r / t,
      d = r % t,
      g = s - i * u,
      y = o - c * u;
    (r = t), (t = d), (s = i), (o = c), (i = g), (c = y);
  }
  if (r !== _e) throw new Error("invert: does not exist");
  return Ee(s, e);
}
function ls(n, e, t) {
  if (!n.eql(n.sqr(e), t)) throw new Error("Cannot find square root");
}
function jo(n, e) {
  let t = (n.ORDER + _e) / Mo,
    r = n.pow(e, t);
  return ls(n, r, e), r;
}
function nc(n, e) {
  let t = (n.ORDER - Vo) / $o,
    r = n.mul(e, Nt),
    s = n.pow(r, t),
    o = n.mul(e, s),
    i = n.mul(n.mul(o, Nt), s),
    c = n.mul(o, n.sub(i, n.ONE));
  return ls(n, c, e), c;
}
function sc(n) {
  let e = Je(n),
    t = Ho(n),
    r = t(e, e.neg(e.ONE)),
    s = t(e, r),
    o = t(e, e.neg(r)),
    i = (n + tc) / Fo;
  return (c, a) => {
    let u = c.pow(a, i),
      d = c.mul(u, r),
      g = c.mul(u, s),
      y = c.mul(u, o),
      l = c.eql(c.sqr(d), a),
      h = c.eql(c.sqr(g), a);
    (u = c.cmov(u, d, l)), (d = c.cmov(y, g, h));
    let m = c.eql(c.sqr(d), a),
      k = c.cmov(u, d, m);
    return ls(c, k, a), k;
  };
}
function Ho(n) {
  if (n < Do) throw new Error("sqrt is not defined for small field");
  let e = n - _e,
    t = 0;
  for (; e % Nt === De; ) (e /= Nt), t++;
  let r = Nt,
    s = Je(n);
  for (; Wo(s, r) === 1; )
    if (r++ > 1e3)
      throw new Error("Cannot find square root: probably non-prime P");
  if (t === 1) return jo;
  let o = s.pow(r, e),
    i = (e + _e) / Nt;
  return function (a, u) {
    if (a.is0(u)) return u;
    if (Wo(a, u) !== 1) throw new Error("Cannot find square root");
    let d = t,
      g = a.mul(a.ONE, o),
      y = a.pow(u, e),
      l = a.pow(u, i);
    for (; !a.eql(y, a.ONE); ) {
      if (a.is0(y)) return a.ZERO;
      let h = 1,
        m = a.sqr(y);
      for (; !a.eql(m, a.ONE); )
        if ((h++, (m = a.sqr(m)), h === d))
          throw new Error("Cannot find square root");
      let k = _e << BigInt(d - h - 1),
        w = a.pow(g, k);
      (d = h), (g = a.sqr(w)), (y = a.mul(y, g)), (l = a.mul(l, w));
    }
    return l;
  };
}
function oc(n) {
  return n % Mo === Do
    ? jo
    : n % $o === Vo
    ? nc
    : n % Fo === rc
    ? sc(n)
    : Ho(n);
}
function ds(n) {
  let e = { ORDER: "bigint", MASK: "bigint", BYTES: "number", BITS: "number" },
    t = ic.reduce((r, s) => ((r[s] = "function"), r), e);
  return It(n, t), n;
}
function ac(n, e, t) {
  if (t < De) throw new Error("invalid exponent, negatives unsupported");
  if (t === De) return n.ONE;
  if (t === _e) return e;
  let r = n.ONE,
    s = e;
  for (; t > De; ) t & _e && (r = n.mul(r, s)), (s = n.sqr(s)), (t >>= _e);
  return r;
}
function wr(n, e, t = !1) {
  let r = new Array(e.length).fill(t ? n.ZERO : void 0),
    s = e.reduce(
      (i, c, a) => (n.is0(c) ? i : ((r[a] = i), n.mul(i, c))),
      n.ONE
    ),
    o = n.inv(s);
  return (
    e.reduceRight(
      (i, c, a) => (n.is0(c) ? i : ((r[a] = n.mul(i, r[a])), n.mul(i, c))),
      o
    ),
    r
  );
}
function Wo(n, e) {
  let t = (n.ORDER - _e) / Nt,
    r = n.pow(e, t),
    s = n.eql(r, n.ONE),
    o = n.eql(r, n.ZERO),
    i = n.eql(r, n.neg(n.ONE));
  if (!s && !o && !i) throw new Error("invalid Legendre symbol result");
  return s ? 1 : o ? 0 : -1;
}
function Hr(n, e) {
  e !== void 0 && ts(e);
  let t = e !== void 0 ? e : n.toString(2).length,
    r = Math.ceil(t / 8);
  return { nBitLength: t, nByteLength: r };
}
function Je(n, e, t = !1, r = {}) {
  if (n <= De) throw new Error("invalid field: expected ORDER > 0, got " + n);
  let s,
    o,
    i = !1,
    c;
  if (typeof e == "object" && e != null) {
    if (r.sqrt || t) throw new Error("cannot specify opts in two arguments");
    let y = e;
    y.BITS && (s = y.BITS),
      y.sqrt && (o = y.sqrt),
      typeof y.isLE == "boolean" && (t = y.isLE),
      typeof y.modFromBytes == "boolean" && (i = y.modFromBytes),
      (c = y.allowedLengths);
  } else typeof e == "number" && (s = e), r.sqrt && (o = r.sqrt);
  let { nBitLength: a, nByteLength: u } = Hr(n, s);
  if (u > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let d,
    g = Object.freeze({
      ORDER: n,
      isLE: t,
      BITS: a,
      BYTES: u,
      MASK: Et(a),
      ZERO: De,
      ONE: _e,
      allowedLengths: c,
      create: (y) => Ee(y, n),
      isValid: (y) => {
        if (typeof y != "bigint")
          throw new Error(
            "invalid field element: expected bigint, got " + typeof y
          );
        return De <= y && y < n;
      },
      is0: (y) => y === De,
      isValidNot0: (y) => !g.is0(y) && g.isValid(y),
      isOdd: (y) => (y & _e) === _e,
      neg: (y) => Ee(-y, n),
      eql: (y, l) => y === l,
      sqr: (y) => Ee(y * y, n),
      add: (y, l) => Ee(y + l, n),
      sub: (y, l) => Ee(y - l, n),
      mul: (y, l) => Ee(y * l, n),
      pow: (y, l) => ac(g, y, l),
      div: (y, l) => Ee(y * qo(l, n), n),
      sqrN: (y) => y * y,
      addN: (y, l) => y + l,
      subN: (y, l) => y - l,
      mulN: (y, l) => y * l,
      inv: (y) => qo(y, n),
      sqrt: o || ((y) => (d || (d = oc(n)), d(g, y))),
      toBytes: (y) => (t ? us(y, u) : Fr(y, u)),
      fromBytes: (y, l = !0) => {
        if (c) {
          if (!c.includes(y.length) || y.length > u)
            throw new Error(
              "Field.fromBytes: expected " + c + " bytes, got " + y.length
            );
          let m = new Uint8Array(u);
          m.set(y, t ? 0 : m.length - y.length), (y = m);
        }
        if (y.length !== u)
          throw new Error(
            "Field.fromBytes: expected " + u + " bytes, got " + y.length
          );
        let h = t ? Ot(y) : Zt(y);
        if ((i && (h = Ee(h, n)), !l && !g.isValid(h)))
          throw new Error("invalid field element: outside of range 0..ORDER");
        return h;
      },
      invertBatch: (y) => wr(g, y),
      cmov: (y, l, h) => (h ? l : y),
    });
  return Object.freeze(g);
}
function Yo(n) {
  if (typeof n != "bigint") throw new Error("field order must be bigint");
  let e = n.toString(2).length;
  return Math.ceil(e / 8);
}
function hs(n) {
  let e = Yo(n);
  return e + Math.ceil(e / 2);
}
function ys(n, e, t = !1) {
  let r = n.length,
    s = Yo(e),
    o = hs(e);
  if (r < 16 || r < o || r > 1024)
    throw new Error("expected " + o + "-1024 bytes of input, got " + r);
  let i = t ? Ot(n) : Zt(n),
    c = Ee(i, e - _e) + _e;
  return t ? us(c, s) : Fr(c, s);
}
var De,
  _e,
  Nt,
  Do,
  Mo,
  Vo,
  tc,
  $o,
  rc,
  Fo,
  Go,
  ic,
  Jt = le(() => {
    "use strict";
    br();
    (De = BigInt(0)),
      (_e = BigInt(1)),
      (Nt = BigInt(2)),
      (Do = BigInt(3)),
      (Mo = BigInt(4)),
      (Vo = BigInt(5)),
      (tc = BigInt(7)),
      ($o = BigInt(8)),
      (rc = BigInt(9)),
      (Fo = BigInt(16));
    (Go = (n, e) => (Ee(n, e) & _e) === _e),
      (ic = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ]);
  });
function kr(n, e) {
  let t = e.negate();
  return n ? t : e;
}
function yt(n, e) {
  let t = wr(
    n.Fp,
    e.map((r) => r.Z)
  );
  return e.map((r, s) => n.fromAffine(r.toAffine(t[s])));
}
function Qo(n, e) {
  if (!Number.isSafeInteger(n) || n <= 0 || n > e)
    throw new Error("invalid window size, expected [1.." + e + "], got W=" + n);
}
function ps(n, e) {
  Qo(n, e);
  let t = Math.ceil(e / n) + 1,
    r = 2 ** (n - 1),
    s = 2 ** n,
    o = Et(n),
    i = BigInt(n);
  return { windows: t, windowSize: r, mask: o, maxNumber: s, shiftBy: i };
}
function Zo(n, e, t) {
  let { windowSize: r, mask: s, maxNumber: o, shiftBy: i } = t,
    c = Number(n & s),
    a = n >> i;
  c > r && ((c -= o), (a += Ut));
  let u = e * r,
    d = u + Math.abs(c) - 1,
    g = c === 0,
    y = c < 0,
    l = e % 2 !== 0;
  return { nextN: a, offset: d, isZero: g, isNeg: y, isNegF: l, offsetF: u };
}
function cc(n, e) {
  if (!Array.isArray(n)) throw new Error("array expected");
  n.forEach((t, r) => {
    if (!(t instanceof e)) throw new Error("invalid point at index " + r);
  });
}
function uc(n, e) {
  if (!Array.isArray(n)) throw new Error("array of scalars expected");
  n.forEach((t, r) => {
    if (!e.isValid(t)) throw new Error("invalid scalar at index " + r);
  });
}
function ms(n) {
  return ei.get(n) || 1;
}
function Xo(n) {
  if (n !== Qt) throw new Error("invalid wNAF");
}
function ti(n, e, t, r) {
  let s = e,
    o = n.ZERO,
    i = n.ZERO;
  for (; t > Qt || r > Qt; )
    t & Ut && (o = o.add(s)),
      r & Ut && (i = i.add(s)),
      (s = s.double()),
      (t >>= Ut),
      (r >>= Ut);
  return { p1: o, p2: i };
}
function Gr(n, e, t, r) {
  cc(t, n), uc(r, e);
  let s = t.length,
    o = r.length;
  if (s !== o)
    throw new Error("arrays of points and scalars must have equal length");
  let i = n.ZERO,
    c = jr(BigInt(s)),
    a = 1;
  c > 12 ? (a = c - 3) : c > 4 ? (a = c - 2) : c > 0 && (a = 2);
  let u = Et(a),
    d = new Array(Number(u) + 1).fill(i),
    g = Math.floor((e.BITS - 1) / a) * a,
    y = i;
  for (let l = g; l >= 0; l -= a) {
    d.fill(i);
    for (let m = 0; m < o; m++) {
      let k = r[m],
        w = Number((k >> BigInt(l)) & u);
      d[w] = d[w].add(t[m]);
    }
    let h = i;
    for (let m = d.length - 1, k = i; m > 0; m--)
      (k = k.add(d[m])), (h = h.add(k));
    if (((y = y.add(h)), l !== 0)) for (let m = 0; m < a; m++) y = y.double();
  }
  return y;
}
function Jo(n, e, t) {
  if (e) {
    if (e.ORDER !== n)
      throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
    return ds(e), e;
  } else return Je(n, { isLE: t });
}
function Yr(n, e, t = {}, r) {
  if ((r === void 0 && (r = n === "edwards"), !e || typeof e != "object"))
    throw new Error(`expected valid ${n} CURVE object`);
  for (let a of ["p", "n", "h"]) {
    let u = e[a];
    if (!(typeof u == "bigint" && u > Qt))
      throw new Error(`CURVE.${a} must be positive bigint`);
  }
  let s = Jo(e.p, t.Fp, r),
    o = Jo(e.n, t.Fn, r),
    c = ["Gx", "Gy", "a", n === "weierstrass" ? "b" : "d"];
  for (let a of c)
    if (!s.isValid(e[a]))
      throw new Error(`CURVE.${a} must be valid field element of CURVE.Fp`);
  return (e = Object.freeze(Object.assign({}, e))), { CURVE: e, Fp: s, Fn: o };
}
var Qt,
  Ut,
  gs,
  ei,
  er,
  bs = le(() => {
    "use strict";
    br();
    Jt();
    (Qt = BigInt(0)), (Ut = BigInt(1));
    (gs = new WeakMap()), (ei = new WeakMap());
    er = class {
      constructor(e, t) {
        (this.BASE = e.BASE),
          (this.ZERO = e.ZERO),
          (this.Fn = e.Fn),
          (this.bits = t);
      }
      _unsafeLadder(e, t, r = this.ZERO) {
        let s = e;
        for (; t > Qt; ) t & Ut && (r = r.add(s)), (s = s.double()), (t >>= Ut);
        return r;
      }
      precomputeWindow(e, t) {
        let { windows: r, windowSize: s } = ps(t, this.bits),
          o = [],
          i = e,
          c = i;
        for (let a = 0; a < r; a++) {
          (c = i), o.push(c);
          for (let u = 1; u < s; u++) (c = c.add(i)), o.push(c);
          i = c.double();
        }
        return o;
      }
      wNAF(e, t, r) {
        if (!this.Fn.isValid(r)) throw new Error("invalid scalar");
        let s = this.ZERO,
          o = this.BASE,
          i = ps(e, this.bits);
        for (let c = 0; c < i.windows; c++) {
          let {
            nextN: a,
            offset: u,
            isZero: d,
            isNeg: g,
            isNegF: y,
            offsetF: l,
          } = Zo(r, c, i);
          (r = a), d ? (o = o.add(kr(y, t[l]))) : (s = s.add(kr(g, t[u])));
        }
        return Xo(r), { p: s, f: o };
      }
      wNAFUnsafe(e, t, r, s = this.ZERO) {
        let o = ps(e, this.bits);
        for (let i = 0; i < o.windows && r !== Qt; i++) {
          let { nextN: c, offset: a, isZero: u, isNeg: d } = Zo(r, i, o);
          if (((r = c), !u)) {
            let g = t[a];
            s = s.add(d ? g.negate() : g);
          }
        }
        return Xo(r), s;
      }
      getPrecomputes(e, t, r) {
        let s = gs.get(t);
        return (
          s ||
            ((s = this.precomputeWindow(t, e)),
            e !== 1 && (typeof r == "function" && (s = r(s)), gs.set(t, s))),
          s
        );
      }
      cached(e, t, r) {
        let s = ms(e);
        return this.wNAF(s, this.getPrecomputes(s, e, r), t);
      }
      unsafe(e, t, r, s) {
        let o = ms(e);
        return o === 1
          ? this._unsafeLadder(e, t, s)
          : this.wNAFUnsafe(o, this.getPrecomputes(o, e, r), t, s);
      }
      createCache(e, t) {
        Qo(t, this.bits), ei.set(e, t), gs.delete(e);
      }
      hasCache(e) {
        return ms(e) !== 1;
      }
    };
  });
function lc(n, e, t, r) {
  let s = n.sqr(t),
    o = n.sqr(r),
    i = n.add(n.mul(e.a, s), o),
    c = n.add(n.ONE, n.mul(e.d, n.mul(s, o)));
  return n.eql(i, c);
}
function dc(n, e = {}) {
  let t = Yr("edwards", n, e, e.FpFnLE),
    { Fp: r, Fn: s } = t,
    o = t.CURVE,
    { h: i } = o;
  It(e, {}, { uvRatio: "function" });
  let c = ws << (BigInt(s.BYTES * 8) - xe),
    a = (k) => r.create(k),
    u =
      e.uvRatio ||
      ((k, w) => {
        try {
          return { isValid: !0, value: r.sqrt(r.div(k, w)) };
        } catch {
          return { isValid: !1, value: vt };
        }
      });
  if (!lc(r, o, o.Gx, o.Gy))
    throw new Error("bad curve params: generator point");
  function d(k, w, R = !1) {
    let x = R ? xe : vt;
    return mr("coordinate " + k, w, x, c), w;
  }
  function g(k) {
    if (!(k instanceof h)) throw new Error("ExtendedPoint expected");
  }
  let y = Xt((k, w) => {
      let { X: R, Y: x, Z: U } = k,
        J = k.is0();
      w == null && (w = J ? fc : r.inv(U));
      let ee = a(R * w),
        te = a(x * w),
        re = r.mul(U, w);
      if (J) return { x: vt, y: xe };
      if (re !== xe) throw new Error("invZ was invalid");
      return { x: ee, y: te };
    }),
    l = Xt((k) => {
      let { a: w, d: R } = o;
      if (k.is0()) throw new Error("bad point: ZERO");
      let { X: x, Y: U, Z: J, T: ee } = k,
        te = a(x * x),
        re = a(U * U),
        _ = a(J * J),
        M = a(_ * _),
        H = a(te * w),
        V = a(_ * a(H + re)),
        I = a(M + a(R * a(te * re)));
      if (V !== I) throw new Error("bad point: equation left != right (1)");
      let S = a(x * U),
        B = a(J * ee);
      if (S !== B) throw new Error("bad point: equation left != right (2)");
      return !0;
    });
  class h {
    constructor(w, R, x, U) {
      (this.X = d("x", w)),
        (this.Y = d("y", R)),
        (this.Z = d("z", x, !0)),
        (this.T = d("t", U)),
        Object.freeze(this);
    }
    static CURVE() {
      return o;
    }
    static fromAffine(w) {
      if (w instanceof h) throw new Error("extended point not allowed");
      let { x: R, y: x } = w || {};
      return d("x", R), d("y", x), new h(R, x, xe, a(R * x));
    }
    static fromBytes(w, R = !1) {
      let x = r.BYTES,
        { a: U, d: J } = o;
      (w = fs(Ye(w, x, "point"))), ht(R, "zip215");
      let ee = fs(w),
        te = w[x - 1];
      ee[x - 1] = te & -129;
      let re = Ot(ee),
        _ = R ? c : r.ORDER;
      mr("point.y", re, vt, _);
      let M = a(re * re),
        H = a(M - xe),
        V = a(J * M - U),
        { isValid: I, value: S } = u(H, V);
      if (!I) throw new Error("bad point: invalid y coordinate");
      let B = (S & xe) === xe,
        L = (te & 128) !== 0;
      if (!R && S === vt && L) throw new Error("bad point: x=0 and x_0=1");
      return L !== B && (S = a(-S)), h.fromAffine({ x: S, y: re });
    }
    static fromHex(w, R = !1) {
      return h.fromBytes(ge("point", w), R);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    precompute(w = 8, R = !0) {
      return m.createCache(this, w), R || this.multiply(ws), this;
    }
    assertValidity() {
      l(this);
    }
    equals(w) {
      g(w);
      let { X: R, Y: x, Z: U } = this,
        { X: J, Y: ee, Z: te } = w,
        re = a(R * te),
        _ = a(J * U),
        M = a(x * te),
        H = a(ee * U);
      return re === _ && M === H;
    }
    is0() {
      return this.equals(h.ZERO);
    }
    negate() {
      return new h(a(-this.X), this.Y, this.Z, a(-this.T));
    }
    double() {
      let { a: w } = o,
        { X: R, Y: x, Z: U } = this,
        J = a(R * R),
        ee = a(x * x),
        te = a(ws * a(U * U)),
        re = a(w * J),
        _ = R + x,
        M = a(a(_ * _) - J - ee),
        H = re + ee,
        V = H - te,
        I = re - ee,
        S = a(M * V),
        B = a(H * I),
        L = a(M * I),
        N = a(V * H);
      return new h(S, B, N, L);
    }
    add(w) {
      g(w);
      let { a: R, d: x } = o,
        { X: U, Y: J, Z: ee, T: te } = this,
        { X: re, Y: _, Z: M, T: H } = w,
        V = a(U * re),
        I = a(J * _),
        S = a(te * x * H),
        B = a(ee * M),
        L = a((U + J) * (re + _) - V - I),
        N = B - S,
        W = B + S,
        K = a(I - R * V),
        q = a(L * N),
        j = a(W * K),
        G = a(L * K),
        ke = a(N * W);
      return new h(q, j, ke, G);
    }
    subtract(w) {
      return this.add(w.negate());
    }
    multiply(w) {
      if (!s.isValidNot0(w))
        throw new Error("invalid scalar: expected 1 <= sc < curve.n");
      let { p: R, f: x } = m.cached(this, w, (U) => yt(h, U));
      return yt(h, [R, x])[0];
    }
    multiplyUnsafe(w, R = h.ZERO) {
      if (!s.isValid(w))
        throw new Error("invalid scalar: expected 0 <= sc < curve.n");
      return w === vt
        ? h.ZERO
        : this.is0() || w === xe
        ? this
        : m.unsafe(this, w, (x) => yt(h, x), R);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(i).is0();
    }
    isTorsionFree() {
      return m.unsafe(this, o.n).is0();
    }
    toAffine(w) {
      return y(this, w);
    }
    clearCofactor() {
      return i === xe ? this : this.multiplyUnsafe(i);
    }
    toBytes() {
      let { x: w, y: R } = this.toAffine(),
        x = r.toBytes(R);
      return (x[x.length - 1] |= w & xe ? 128 : 0), x;
    }
    toHex() {
      return et(this.toBytes());
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
    get ex() {
      return this.X;
    }
    get ey() {
      return this.Y;
    }
    get ez() {
      return this.Z;
    }
    get et() {
      return this.T;
    }
    static normalizeZ(w) {
      return yt(h, w);
    }
    static msm(w, R) {
      return Gr(h, s, w, R);
    }
    _setWindowSize(w) {
      this.precompute(w);
    }
    toRawBytes() {
      return this.toBytes();
    }
  }
  (h.BASE = new h(o.Gx, o.Gy, xe, a(o.Gx * o.Gy))),
    (h.ZERO = new h(vt, xe, xe, vt)),
    (h.Fp = r),
    (h.Fn = s);
  let m = new er(h, s.BITS);
  return h.BASE.precompute(8), h;
}
function hc(n, e, t = {}) {
  if (typeof e != "function")
    throw new Error('"hash" function param is required');
  It(
    t,
    {},
    {
      adjustScalarBytes: "function",
      randomBytes: "function",
      domain: "function",
      prehash: "function",
      mapToCurve: "function",
    }
  );
  let { prehash: r } = t,
    { BASE: s, Fp: o, Fn: i } = n,
    c = t.randomBytes || Yt,
    a = t.adjustScalarBytes || ((_) => _),
    u =
      t.domain ||
      ((_, M, H) => {
        if ((ht(H, "phflag"), M.length || H))
          throw new Error("Contexts/pre-hash are not supported");
        return _;
      });
  function d(_) {
    return i.create(Ot(_));
  }
  function g(_) {
    let M = x.secretKey;
    _ = ge("private key", _, M);
    let H = ge("hashed private key", e(_), 2 * M),
      V = a(H.slice(0, M)),
      I = H.slice(M, 2 * M),
      S = d(V);
    return { head: V, prefix: I, scalar: S };
  }
  function y(_) {
    let { head: M, prefix: H, scalar: V } = g(_),
      I = s.multiply(V),
      S = I.toBytes();
    return { head: M, prefix: H, scalar: V, point: I, pointBytes: S };
  }
  function l(_) {
    return y(_).pointBytes;
  }
  function h(_ = Uint8Array.of(), ...M) {
    let H = Fe(...M);
    return d(e(u(H, ge("context", _), !!r)));
  }
  function m(_, M, H = {}) {
    (_ = ge("message", _)), r && (_ = r(_));
    let { prefix: V, scalar: I, pointBytes: S } = y(M),
      B = h(H.context, V, _),
      L = s.multiply(B).toBytes(),
      N = h(H.context, L, S, _),
      W = i.create(B + N * I);
    if (!i.isValid(W)) throw new Error("sign failed: invalid s");
    let K = Fe(L, i.toBytes(W));
    return Ye(K, x.signature, "result");
  }
  let k = { zip215: !0 };
  function w(_, M, H, V = k) {
    let { context: I, zip215: S } = V,
      B = x.signature;
    (_ = ge("signature", _, B)),
      (M = ge("message", M)),
      (H = ge("publicKey", H, x.publicKey)),
      S !== void 0 && ht(S, "zip215"),
      r && (M = r(M));
    let L = B / 2,
      N = _.subarray(0, L),
      W = Ot(_.subarray(L, B)),
      K,
      q,
      j;
    try {
      (K = n.fromBytes(H, S)),
        (q = n.fromBytes(N, S)),
        (j = s.multiplyUnsafe(W));
    } catch {
      return !1;
    }
    if (!S && K.isSmallOrder()) return !1;
    let G = h(I, q.toBytes(), K.toBytes(), M);
    return q.add(K.multiplyUnsafe(G)).subtract(j).clearCofactor().is0();
  }
  let R = o.BYTES,
    x = { secretKey: R, publicKey: R, signature: 2 * R, seed: R };
  function U(_ = c(x.seed)) {
    return Ye(_, x.seed, "seed");
  }
  function J(_) {
    let M = re.randomSecretKey(_);
    return { secretKey: M, publicKey: l(M) };
  }
  function ee(_) {
    return Bt(_) && _.length === i.BYTES;
  }
  function te(_, M) {
    try {
      return !!n.fromBytes(_, M);
    } catch {
      return !1;
    }
  }
  let re = {
    getExtendedPublicKey: y,
    randomSecretKey: U,
    isValidSecretKey: ee,
    isValidPublicKey: te,
    toMontgomery(_) {
      let { y: M } = n.fromBytes(_),
        H = x.publicKey,
        V = H === 32;
      if (!V && H !== 57) throw new Error("only defined for 25519 and 448");
      let I = V ? o.div(xe + M, xe - M) : o.div(M - xe, M + xe);
      return o.toBytes(I);
    },
    toMontgomerySecret(_) {
      let M = x.secretKey;
      Ye(_, M);
      let H = e(_.subarray(0, M));
      return a(H).subarray(0, M);
    },
    randomPrivateKey: U,
    precompute(_ = 8, M = n.BASE) {
      return M.precompute(_, !1);
    },
  };
  return Object.freeze({
    keygen: J,
    getPublicKey: l,
    sign: m,
    verify: w,
    utils: re,
    Point: n,
    lengths: x,
  });
}
function yc(n) {
  let e = { a: n.a, d: n.d, p: n.Fp.ORDER, n: n.n, h: n.h, Gx: n.Gx, Gy: n.Gy },
    t = n.Fp,
    r = Je(e.n, n.nBitLength, !0),
    s = { Fp: t, Fn: r, uvRatio: n.uvRatio },
    o = {
      randomBytes: n.randomBytes,
      adjustScalarBytes: n.adjustScalarBytes,
      domain: n.domain,
      prehash: n.prehash,
      mapToCurve: n.mapToCurve,
    };
  return { CURVE: e, curveOpts: s, hash: n.hash, eddsaOpts: o };
}
function pc(n, e) {
  let t = e.Point;
  return Object.assign({}, e, {
    ExtendedPoint: t,
    CURVE: n,
    nBitLength: t.Fn.BITS,
    nByteLength: t.Fn.BYTES,
  });
}
function ri(n) {
  let { CURVE: e, curveOpts: t, hash: r, eddsaOpts: s } = yc(n),
    o = dc(e, t),
    i = hc(o, r, s);
  return pc(n, i);
}
var vt,
  xe,
  ws,
  fc,
  ni = le(() => {
    "use strict";
    br();
    bs();
    Jt();
    (vt = BigInt(0)), (xe = BigInt(1)), (ws = BigInt(2)), (fc = BigInt(8));
  });
function wc(n) {
  let e = BigInt(10),
    t = BigInt(20),
    r = BigInt(40),
    s = BigInt(80),
    o = ks,
    c = (((n * n) % o) * n) % o,
    a = (me(c, si, o) * c) % o,
    u = (me(a, gc, o) * n) % o,
    d = (me(u, mc, o) * u) % o,
    g = (me(d, e, o) * d) % o,
    y = (me(g, t, o) * g) % o,
    l = (me(y, r, o) * y) % o,
    h = (me(l, s, o) * l) % o,
    m = (me(h, s, o) * l) % o,
    k = (me(m, e, o) * d) % o;
  return { pow_p_5_8: (me(k, si, o) * n) % o, b2: c };
}
function kc(n) {
  return (n[0] &= 248), (n[31] &= 127), (n[31] |= 64), n;
}
function Sc(n, e) {
  let t = ks,
    r = Ee(e * e * e, t),
    s = Ee(r * r * e, t),
    o = wc(n * s).pow_p_5_8,
    i = Ee(n * r * o, t),
    c = Ee(e * i * i, t),
    a = i,
    u = Ee(i * oi, t),
    d = c === n,
    g = c === Ee(-n, t),
    y = c === Ee(-n * oi, t);
  return (
    d && (i = a),
    (g || y) && (i = u),
    Go(i, t) && (i = Ee(-i, t)),
    { isValid: d || g, value: i }
  );
}
var gc,
  si,
  pd,
  mc,
  bc,
  ks,
  ii,
  oi,
  Bc,
  Ec,
  zt,
  ai = le(() => {
    "use strict";
    Co();
    ni();
    Jt();
    (gc = BigInt(1)),
      (si = BigInt(2)),
      (pd = BigInt(3)),
      (mc = BigInt(5)),
      (bc = BigInt(8)),
      (ks = BigInt(
        "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"
      )),
      (ii = {
        p: ks,
        n: BigInt(
          "0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"
        ),
        h: bc,
        a: BigInt(
          "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"
        ),
        d: BigInt(
          "0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"
        ),
        Gx: BigInt(
          "0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"
        ),
        Gy: BigInt(
          "0x6666666666666666666666666666666666666666666666666666666666666658"
        ),
      });
    oi = BigInt(
      "19681161376707505956807079304988542015446066515923890162744021073123829784752"
    );
    (Bc = Je(ii.p, { isLE: !0 })),
      (Ec = Y(F({}, ii), {
        Fp: Bc,
        hash: To,
        adjustScalarBytes: kc,
        uvRatio: Sc,
      })),
      (zt = ri(Ec));
  });
var ui = St((bd, ci) => {
  "use strict";
  var Zr = Xa().Buffer;
  function Ic(n) {
    if (n.length >= 255) throw new TypeError("Alphabet too long");
    for (var e = new Uint8Array(256), t = 0; t < e.length; t++) e[t] = 255;
    for (var r = 0; r < n.length; r++) {
      var s = n.charAt(r),
        o = s.charCodeAt(0);
      if (e[o] !== 255) throw new TypeError(s + " is ambiguous");
      e[o] = r;
    }
    var i = n.length,
      c = n.charAt(0),
      a = Math.log(i) / Math.log(256),
      u = Math.log(256) / Math.log(i);
    function d(l) {
      if (
        ((Array.isArray(l) || l instanceof Uint8Array) && (l = Zr.from(l)),
        !Zr.isBuffer(l))
      )
        throw new TypeError("Expected Buffer");
      if (l.length === 0) return "";
      for (var h = 0, m = 0, k = 0, w = l.length; k !== w && l[k] === 0; )
        k++, h++;
      for (var R = ((w - k) * u + 1) >>> 0, x = new Uint8Array(R); k !== w; ) {
        for (
          var U = l[k], J = 0, ee = R - 1;
          (U !== 0 || J < m) && ee !== -1;
          ee--, J++
        )
          (U += (256 * x[ee]) >>> 0),
            (x[ee] = U % i >>> 0),
            (U = (U / i) >>> 0);
        if (U !== 0) throw new Error("Non-zero carry");
        (m = J), k++;
      }
      for (var te = R - m; te !== R && x[te] === 0; ) te++;
      for (var re = c.repeat(h); te < R; ++te) re += n.charAt(x[te]);
      return re;
    }
    function g(l) {
      if (typeof l != "string") throw new TypeError("Expected String");
      if (l.length === 0) return Zr.alloc(0);
      for (var h = 0, m = 0, k = 0; l[h] === c; ) m++, h++;
      for (
        var w = ((l.length - h) * a + 1) >>> 0, R = new Uint8Array(w);
        h < l.length;

      ) {
        var x = l.charCodeAt(h);
        if (x > 255) return;
        var U = e[x];
        if (U === 255) return;
        for (var J = 0, ee = w - 1; (U !== 0 || J < k) && ee !== -1; ee--, J++)
          (U += (i * R[ee]) >>> 0),
            (R[ee] = U % 256 >>> 0),
            (U = (U / 256) >>> 0);
        if (U !== 0) throw new Error("Non-zero carry");
        (k = J), h++;
      }
      for (var te = w - k; te !== w && R[te] === 0; ) te++;
      var re = Zr.allocUnsafe(m + (w - te));
      re.fill(0, 0, m);
      for (var _ = m; te !== w; ) re[_++] = R[te++];
      return re;
    }
    function y(l) {
      var h = g(l);
      if (h) return h;
      throw new Error("Non-base" + i + " character");
    }
    return { encode: d, decodeUnsafe: g, decode: y };
  }
  ci.exports = Ic;
});
var Ss = St((wd, fi) => {
  "use strict";
  var vc = ui(),
    _c = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  fi.exports = vc(_c);
});
var li = {};
Jn(li, { TextDecoder: () => Qr, TextEncoder: () => en });
function pt(n, e, t) {
  return e <= n && n <= t;
}
function tn(n) {
  if (n === void 0) return {};
  if (n === Object(n)) return n;
  throw TypeError("Could not convert argument to dictionary");
}
function xc(n) {
  for (var e = String(n), t = e.length, r = 0, s = []; r < t; ) {
    var o = e.charCodeAt(r);
    if (o < 55296 || o > 57343) s.push(o);
    else if (56320 <= o && o <= 57343) s.push(65533);
    else if (55296 <= o && o <= 56319)
      if (r === t - 1) s.push(65533);
      else {
        var i = n.charCodeAt(r + 1);
        if (56320 <= i && i <= 57343) {
          var c = o & 1023,
            a = i & 1023;
          s.push(65536 + (c << 10) + a), (r += 1);
        } else s.push(65533);
      }
    r += 1;
  }
  return s;
}
function Ac(n) {
  for (var e = "", t = 0; t < n.length; ++t) {
    var r = n[t];
    r <= 65535
      ? (e += String.fromCharCode(r))
      : ((r -= 65536),
        (e += String.fromCharCode((r >> 10) + 55296, (r & 1023) + 56320)));
  }
  return e;
}
function Es(n) {
  this.tokens = [].slice.call(n);
}
function Bs(n, e) {
  if (n) throw TypeError("Decoder error");
  return e || 65533;
}
function Rc() {}
function Lc() {}
function Qr(n, e) {
  if (!(this instanceof Qr)) return new Qr(n, e);
  if (((n = n !== void 0 ? String(n).toLowerCase() : Jr), n !== Jr))
    throw new Error("Encoding not supported. Only utf-8 is supported");
  (e = tn(e)),
    (this._streaming = !1),
    (this._BOMseen = !1),
    (this._decoder = null),
    (this._fatal = !!e.fatal),
    (this._ignoreBOM = !!e.ignoreBOM),
    Object.defineProperty(this, "encoding", { value: "utf-8" }),
    Object.defineProperty(this, "fatal", { value: this._fatal }),
    Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
}
function en(n, e) {
  if (!(this instanceof en)) return new en(n, e);
  if (((n = n !== void 0 ? String(n).toLowerCase() : Jr), n !== Jr))
    throw new Error("Encoding not supported. Only utf-8 is supported");
  (e = tn(e)),
    (this._streaming = !1),
    (this._encoder = null),
    (this._options = { fatal: !!e.fatal }),
    Object.defineProperty(this, "encoding", { value: "utf-8" });
}
function Pc(n) {
  var e = n.fatal,
    t = 0,
    r = 0,
    s = 0,
    o = 128,
    i = 191;
  this.handler = function (c, a) {
    if (a === Xr && s !== 0) return (s = 0), Bs(e);
    if (a === Xr) return tr;
    if (s === 0) {
      if (pt(a, 0, 127)) return a;
      if (pt(a, 194, 223)) (s = 1), (t = a - 192);
      else if (pt(a, 224, 239))
        a === 224 && (o = 160), a === 237 && (i = 159), (s = 2), (t = a - 224);
      else if (pt(a, 240, 244))
        a === 240 && (o = 144), a === 244 && (i = 143), (s = 3), (t = a - 240);
      else return Bs(e);
      return (t = t << (6 * s)), null;
    }
    if (!pt(a, o, i))
      return (t = s = r = 0), (o = 128), (i = 191), c.prepend(a), Bs(e);
    if (
      ((o = 128),
      (i = 191),
      (r += 1),
      (t += (a - 128) << (6 * (s - r))),
      r !== s)
    )
      return null;
    var u = t;
    return (t = s = r = 0), u;
  };
}
function Tc(n) {
  var e = n.fatal;
  this.handler = function (t, r) {
    if (r === Xr) return tr;
    if (pt(r, 0, 127)) return r;
    var s, o;
    pt(r, 128, 2047)
      ? ((s = 1), (o = 192))
      : pt(r, 2048, 65535)
      ? ((s = 2), (o = 224))
      : pt(r, 65536, 1114111) && ((s = 3), (o = 240));
    for (var i = [(r >> (6 * s)) + o]; s > 0; ) {
      var c = r >> (6 * (s - 1));
      i.push(128 | (c & 63)), (s -= 1);
    }
    return i;
  };
}
var Xr,
  tr,
  Jr,
  di = le(() => {
    "use strict";
    Xr = -1;
    Es.prototype = {
      endOfStream: function () {
        return !this.tokens.length;
      },
      read: function () {
        return this.tokens.length ? this.tokens.shift() : Xr;
      },
      prepend: function (n) {
        if (Array.isArray(n))
          for (var e = n; e.length; ) this.tokens.unshift(e.pop());
        else this.tokens.unshift(n);
      },
      push: function (n) {
        if (Array.isArray(n))
          for (var e = n; e.length; ) this.tokens.push(e.shift());
        else this.tokens.push(n);
      },
    };
    tr = -1;
    Rc.prototype = { handler: function (n, e) {} };
    Lc.prototype = { handler: function (n, e) {} };
    Jr = "utf-8";
    Qr.prototype = {
      decode: function (e, t) {
        var r;
        typeof e == "object" && e instanceof ArrayBuffer
          ? (r = new Uint8Array(e))
          : typeof e == "object" &&
            "buffer" in e &&
            e.buffer instanceof ArrayBuffer
          ? (r = new Uint8Array(e.buffer, e.byteOffset, e.byteLength))
          : (r = new Uint8Array(0)),
          (t = tn(t)),
          this._streaming ||
            ((this._decoder = new Pc({ fatal: this._fatal })),
            (this._BOMseen = !1)),
          (this._streaming = !!t.stream);
        for (
          var s = new Es(r), o = [], i;
          !s.endOfStream() &&
          ((i = this._decoder.handler(s, s.read())), i !== tr);

        )
          i !== null && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
        if (!this._streaming) {
          do {
            if (((i = this._decoder.handler(s, s.read())), i === tr)) break;
            i !== null && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
          } while (!s.endOfStream());
          this._decoder = null;
        }
        return (
          o.length &&
            ["utf-8"].indexOf(this.encoding) !== -1 &&
            !this._ignoreBOM &&
            !this._BOMseen &&
            (o[0] === 65279
              ? ((this._BOMseen = !0), o.shift())
              : (this._BOMseen = !0)),
          Ac(o)
        );
      },
    };
    en.prototype = {
      encode: function (e, t) {
        (e = e ? String(e) : ""),
          (t = tn(t)),
          this._streaming || (this._encoder = new Tc(this._options)),
          (this._streaming = !!t.stream);
        for (
          var r = [], s = new Es(xc(e)), o;
          !s.endOfStream() &&
          ((o = this._encoder.handler(s, s.read())), o !== tr);

        )
          Array.isArray(o) ? r.push.apply(r, o) : r.push(o);
        if (!this._streaming) {
          for (; (o = this._encoder.handler(s, s.read())), o !== tr; )
            Array.isArray(o) ? r.push.apply(r, o) : r.push(o);
          this._encoder = null;
        }
        return new Uint8Array(r);
      },
    };
  });
var mi = St((de) => {
  "use strict";
  var Cc =
      (de && de.__createBinding) ||
      (Object.create
        ? function (n, e, t, r) {
            r === void 0 && (r = t),
              Object.defineProperty(n, r, {
                enumerable: !0,
                get: function () {
                  return e[t];
                },
              });
          }
        : function (n, e, t, r) {
            r === void 0 && (r = t), (n[r] = e[t]);
          }),
    Oc =
      (de && de.__setModuleDefault) ||
      (Object.create
        ? function (n, e) {
            Object.defineProperty(n, "default", { enumerable: !0, value: e });
          }
        : function (n, e) {
            n.default = e;
          }),
    st =
      (de && de.__decorate) ||
      function (n, e, t, r) {
        var s = arguments.length,
          o =
            s < 3
              ? e
              : r === null
              ? (r = Object.getOwnPropertyDescriptor(e, t))
              : r,
          i;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          o = Reflect.decorate(n, e, t, r);
        else
          for (var c = n.length - 1; c >= 0; c--)
            (i = n[c]) &&
              (o = (s < 3 ? i(o) : s > 3 ? i(e, t, o) : i(e, t)) || o);
        return s > 3 && o && Object.defineProperty(e, t, o), o;
      },
    Nc =
      (de && de.__importStar) ||
      function (n) {
        if (n && n.__esModule) return n;
        var e = {};
        if (n != null)
          for (var t in n)
            t !== "default" && Object.hasOwnProperty.call(n, t) && Cc(e, n, t);
        return Oc(e, n), e;
      },
    hi =
      (de && de.__importDefault) ||
      function (n) {
        return n && n.__esModule ? n : { default: n };
      };
  Object.defineProperty(de, "__esModule", { value: !0 });
  de.deserializeUnchecked =
    de.deserialize =
    de.serialize =
    de.BinaryReader =
    de.BinaryWriter =
    de.BorshError =
    de.baseDecode =
    de.baseEncode =
      void 0;
  var _t = hi(Oo()),
    yi = hi(Ss()),
    Uc = Nc((di(), Qn(li))),
    zc = typeof TextDecoder != "function" ? Uc.TextDecoder : TextDecoder,
    Kc = new zc("utf-8", { fatal: !0 });
  function qc(n) {
    return (
      typeof n == "string" && (n = Buffer.from(n, "utf8")),
      yi.default.encode(Buffer.from(n))
    );
  }
  de.baseEncode = qc;
  function Wc(n) {
    return Buffer.from(yi.default.decode(n));
  }
  de.baseDecode = Wc;
  var Is = 1024,
    Le = class extends Error {
      constructor(e) {
        super(e), (this.fieldPath = []), (this.originalMessage = e);
      }
      addToFieldPath(e) {
        this.fieldPath.splice(0, 0, e),
          (this.message =
            this.originalMessage + ": " + this.fieldPath.join("."));
      }
    };
  de.BorshError = Le;
  var rn = class {
    constructor() {
      (this.buf = Buffer.alloc(Is)), (this.length = 0);
    }
    maybeResize() {
      this.buf.length < 16 + this.length &&
        (this.buf = Buffer.concat([this.buf, Buffer.alloc(Is)]));
    }
    writeU8(e) {
      this.maybeResize(),
        this.buf.writeUInt8(e, this.length),
        (this.length += 1);
    }
    writeU16(e) {
      this.maybeResize(),
        this.buf.writeUInt16LE(e, this.length),
        (this.length += 2);
    }
    writeU32(e) {
      this.maybeResize(),
        this.buf.writeUInt32LE(e, this.length),
        (this.length += 4);
    }
    writeU64(e) {
      this.maybeResize(),
        this.writeBuffer(Buffer.from(new _t.default(e).toArray("le", 8)));
    }
    writeU128(e) {
      this.maybeResize(),
        this.writeBuffer(Buffer.from(new _t.default(e).toArray("le", 16)));
    }
    writeU256(e) {
      this.maybeResize(),
        this.writeBuffer(Buffer.from(new _t.default(e).toArray("le", 32)));
    }
    writeU512(e) {
      this.maybeResize(),
        this.writeBuffer(Buffer.from(new _t.default(e).toArray("le", 64)));
    }
    writeBuffer(e) {
      (this.buf = Buffer.concat([
        Buffer.from(this.buf.subarray(0, this.length)),
        e,
        Buffer.alloc(Is),
      ])),
        (this.length += e.length);
    }
    writeString(e) {
      this.maybeResize();
      let t = Buffer.from(e, "utf8");
      this.writeU32(t.length), this.writeBuffer(t);
    }
    writeFixedArray(e) {
      this.writeBuffer(Buffer.from(e));
    }
    writeArray(e, t) {
      this.maybeResize(), this.writeU32(e.length);
      for (let r of e) this.maybeResize(), t(r);
    }
    toArray() {
      return this.buf.subarray(0, this.length);
    }
  };
  de.BinaryWriter = rn;
  function ot(n, e, t) {
    let r = t.value;
    t.value = function (...s) {
      try {
        return r.apply(this, s);
      } catch (o) {
        if (o instanceof RangeError) {
          let i = o.code;
          if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(i) >= 0)
            throw new Le("Reached the end of buffer when deserializing");
        }
        throw o;
      }
    };
  }
  var Me = class {
    constructor(e) {
      (this.buf = e), (this.offset = 0);
    }
    readU8() {
      let e = this.buf.readUInt8(this.offset);
      return (this.offset += 1), e;
    }
    readU16() {
      let e = this.buf.readUInt16LE(this.offset);
      return (this.offset += 2), e;
    }
    readU32() {
      let e = this.buf.readUInt32LE(this.offset);
      return (this.offset += 4), e;
    }
    readU64() {
      let e = this.readBuffer(8);
      return new _t.default(e, "le");
    }
    readU128() {
      let e = this.readBuffer(16);
      return new _t.default(e, "le");
    }
    readU256() {
      let e = this.readBuffer(32);
      return new _t.default(e, "le");
    }
    readU512() {
      let e = this.readBuffer(64);
      return new _t.default(e, "le");
    }
    readBuffer(e) {
      if (this.offset + e > this.buf.length)
        throw new Le(`Expected buffer length ${e} isn't within bounds`);
      let t = this.buf.slice(this.offset, this.offset + e);
      return (this.offset += e), t;
    }
    readString() {
      let e = this.readU32(),
        t = this.readBuffer(e);
      try {
        return Kc.decode(t);
      } catch (r) {
        throw new Le(`Error decoding UTF-8 string: ${r}`);
      }
    }
    readFixedArray(e) {
      return new Uint8Array(this.readBuffer(e));
    }
    readArray(e) {
      let t = this.readU32(),
        r = Array();
      for (let s = 0; s < t; ++s) r.push(e());
      return r;
    }
  };
  st([ot], Me.prototype, "readU8", null);
  st([ot], Me.prototype, "readU16", null);
  st([ot], Me.prototype, "readU32", null);
  st([ot], Me.prototype, "readU64", null);
  st([ot], Me.prototype, "readU128", null);
  st([ot], Me.prototype, "readU256", null);
  st([ot], Me.prototype, "readU512", null);
  st([ot], Me.prototype, "readString", null);
  st([ot], Me.prototype, "readFixedArray", null);
  st([ot], Me.prototype, "readArray", null);
  de.BinaryReader = Me;
  function pi(n) {
    return n.charAt(0).toUpperCase() + n.slice(1);
  }
  function Kt(n, e, t, r, s) {
    try {
      if (typeof r == "string") s[`write${pi(r)}`](t);
      else if (r instanceof Array)
        if (typeof r[0] == "number") {
          if (t.length !== r[0])
            throw new Le(
              `Expecting byte array of length ${r[0]}, but got ${t.length} bytes`
            );
          s.writeFixedArray(t);
        } else if (r.length === 2 && typeof r[1] == "number") {
          if (t.length !== r[1])
            throw new Le(
              `Expecting byte array of length ${r[1]}, but got ${t.length} bytes`
            );
          for (let o = 0; o < r[1]; o++) Kt(n, null, t[o], r[0], s);
        } else
          s.writeArray(t, (o) => {
            Kt(n, e, o, r[0], s);
          });
      else if (r.kind !== void 0)
        switch (r.kind) {
          case "option": {
            t == null ? s.writeU8(0) : (s.writeU8(1), Kt(n, e, t, r.type, s));
            break;
          }
          case "map": {
            s.writeU32(t.size),
              t.forEach((o, i) => {
                Kt(n, e, i, r.key, s), Kt(n, e, o, r.value, s);
              });
            break;
          }
          default:
            throw new Le(`FieldType ${r} unrecognized`);
        }
      else gi(n, t, s);
    } catch (o) {
      throw (o instanceof Le && o.addToFieldPath(e), o);
    }
  }
  function gi(n, e, t) {
    if (typeof e.borshSerialize == "function") {
      e.borshSerialize(t);
      return;
    }
    let r = n.get(e.constructor);
    if (!r) throw new Le(`Class ${e.constructor.name} is missing in schema`);
    if (r.kind === "struct")
      r.fields.map(([s, o]) => {
        Kt(n, s, e[s], o, t);
      });
    else if (r.kind === "enum") {
      let s = e[r.field];
      for (let o = 0; o < r.values.length; ++o) {
        let [i, c] = r.values[o];
        if (i === s) {
          t.writeU8(o), Kt(n, i, e[i], c, t);
          break;
        }
      }
    } else
      throw new Le(
        `Unexpected schema kind: ${r.kind} for ${e.constructor.name}`
      );
  }
  function Dc(n, e, t = rn) {
    let r = new t();
    return gi(n, e, r), r.toArray();
  }
  de.serialize = Dc;
  function qt(n, e, t, r) {
    try {
      if (typeof t == "string") return r[`read${pi(t)}`]();
      if (t instanceof Array) {
        if (typeof t[0] == "number") return r.readFixedArray(t[0]);
        if (typeof t[1] == "number") {
          let s = [];
          for (let o = 0; o < t[1]; o++) s.push(qt(n, null, t[0], r));
          return s;
        } else return r.readArray(() => qt(n, e, t[0], r));
      }
      if (t.kind === "option") return r.readU8() ? qt(n, e, t.type, r) : void 0;
      if (t.kind === "map") {
        let s = new Map(),
          o = r.readU32();
        for (let i = 0; i < o; i++) {
          let c = qt(n, e, t.key, r),
            a = qt(n, e, t.value, r);
          s.set(c, a);
        }
        return s;
      }
      return vs(n, t, r);
    } catch (s) {
      throw (s instanceof Le && s.addToFieldPath(e), s);
    }
  }
  function vs(n, e, t) {
    if (typeof e.borshDeserialize == "function") return e.borshDeserialize(t);
    let r = n.get(e);
    if (!r) throw new Le(`Class ${e.name} is missing in schema`);
    if (r.kind === "struct") {
      let s = {};
      for (let [o, i] of n.get(e).fields) s[o] = qt(n, o, i, t);
      return new e(s);
    }
    if (r.kind === "enum") {
      let s = t.readU8();
      if (s >= r.values.length)
        throw new Le(`Enum index: ${s} is out of range`);
      let [o, i] = r.values[s],
        c = qt(n, o, i, t);
      return new e({ [o]: c });
    }
    throw new Le(`Unexpected schema kind: ${r.kind} for ${e.constructor.name}`);
  }
  function Mc(n, e, t, r = Me) {
    let s = new r(t),
      o = vs(n, e, s);
    if (s.offset < t.length)
      throw new Le(
        `Unexpected ${t.length - s.offset} bytes after deserialized data`
      );
    return o;
  }
  de.deserialize = Mc;
  function Vc(n, e, t, r = Me) {
    let s = new r(t);
    return vs(n, e, s);
  }
  de.deserializeUnchecked = Vc;
});
var Rs = St((b) => {
  "use strict";
  Object.defineProperty(b, "__esModule", { value: !0 });
  b.s16 =
    b.s8 =
    b.nu64be =
    b.u48be =
    b.u40be =
    b.u32be =
    b.u24be =
    b.u16be =
    b.nu64 =
    b.u48 =
    b.u40 =
    b.u32 =
    b.u24 =
    b.u16 =
    b.u8 =
    b.offset =
    b.greedy =
    b.Constant =
    b.UTF8 =
    b.CString =
    b.Blob =
    b.Boolean =
    b.BitField =
    b.BitStructure =
    b.VariantLayout =
    b.Union =
    b.UnionLayoutDiscriminator =
    b.UnionDiscriminator =
    b.Structure =
    b.Sequence =
    b.DoubleBE =
    b.Double =
    b.FloatBE =
    b.Float =
    b.NearInt64BE =
    b.NearInt64 =
    b.NearUInt64BE =
    b.NearUInt64 =
    b.IntBE =
    b.Int =
    b.UIntBE =
    b.UInt =
    b.OffsetLayout =
    b.GreedyCount =
    b.ExternalLayout =
    b.bindConstructorLayout =
    b.nameWithProperty =
    b.Layout =
    b.uint8ArrayToBuffer =
    b.checkUint8Array =
      void 0;
  b.constant =
    b.utf8 =
    b.cstr =
    b.blob =
    b.unionLayoutDiscriminator =
    b.union =
    b.seq =
    b.bits =
    b.struct =
    b.f64be =
    b.f64 =
    b.f32be =
    b.f32 =
    b.ns64be =
    b.s48be =
    b.s40be =
    b.s32be =
    b.s24be =
    b.s16be =
    b.ns64 =
    b.s48 =
    b.s40 =
    b.s32 =
    b.s24 =
      void 0;
  var xs = es();
  function sr(n) {
    if (!(n instanceof Uint8Array))
      throw new TypeError("b must be a Uint8Array");
  }
  b.checkUint8Array = sr;
  function oe(n) {
    return sr(n), xs.Buffer.from(n.buffer, n.byteOffset, n.length);
  }
  b.uint8ArrayToBuffer = oe;
  var ae = class {
    constructor(e, t) {
      if (!Number.isInteger(e)) throw new TypeError("span must be an integer");
      (this.span = e), (this.property = t);
    }
    makeDestinationObject() {
      return {};
    }
    getSpan(e, t) {
      if (0 > this.span) throw new RangeError("indeterminate span");
      return this.span;
    }
    replicate(e) {
      let t = Object.create(this.constructor.prototype);
      return Object.assign(t, this), (t.property = e), t;
    }
    fromArray(e) {}
  };
  b.Layout = ae;
  function As(n, e) {
    return e.property ? n + "[" + e.property + "]" : n;
  }
  b.nameWithProperty = As;
  function $c(n, e) {
    if (typeof n != "function")
      throw new TypeError("Class must be constructor");
    if (Object.prototype.hasOwnProperty.call(n, "layout_"))
      throw new Error("Class is already bound to a layout");
    if (!(e && e instanceof ae)) throw new TypeError("layout must be a Layout");
    if (Object.prototype.hasOwnProperty.call(e, "boundConstructor_"))
      throw new Error("layout is already bound to a constructor");
    (n.layout_ = e),
      (e.boundConstructor_ = n),
      (e.makeDestinationObject = () => new n()),
      Object.defineProperty(n.prototype, "encode", {
        value(t, r) {
          return e.encode(this, t, r);
        },
        writable: !0,
      }),
      Object.defineProperty(n, "decode", {
        value(t, r) {
          return e.decode(t, r);
        },
        writable: !0,
      });
  }
  b.bindConstructorLayout = $c;
  var Oe = class extends ae {
    isCount() {
      throw new Error("ExternalLayout is abstract");
    }
  };
  b.ExternalLayout = Oe;
  var nn = class extends Oe {
    constructor(e = 1, t) {
      if (!Number.isInteger(e) || 0 >= e)
        throw new TypeError("elementSpan must be a (positive) integer");
      super(-1, t), (this.elementSpan = e);
    }
    isCount() {
      return !0;
    }
    decode(e, t = 0) {
      sr(e);
      let r = e.length - t;
      return Math.floor(r / this.elementSpan);
    }
    encode(e, t, r) {
      return 0;
    }
  };
  b.GreedyCount = nn;
  var Sr = class extends Oe {
    constructor(e, t = 0, r) {
      if (!(e instanceof ae)) throw new TypeError("layout must be a Layout");
      if (!Number.isInteger(t))
        throw new TypeError("offset must be integer or undefined");
      super(e.span, r || e.property), (this.layout = e), (this.offset = t);
    }
    isCount() {
      return this.layout instanceof je || this.layout instanceof Ze;
    }
    decode(e, t = 0) {
      return this.layout.decode(e, t + this.offset);
    }
    encode(e, t, r = 0) {
      return this.layout.encode(e, t, r + this.offset);
    }
  };
  b.OffsetLayout = Sr;
  var je = class extends ae {
    constructor(e, t) {
      if ((super(e, t), 6 < this.span))
        throw new RangeError("span must not exceed 6 bytes");
    }
    decode(e, t = 0) {
      return oe(e).readUIntLE(t, this.span);
    }
    encode(e, t, r = 0) {
      return oe(t).writeUIntLE(e, r, this.span), this.span;
    }
  };
  b.UInt = je;
  var Ze = class extends ae {
    constructor(e, t) {
      if ((super(e, t), 6 < this.span))
        throw new RangeError("span must not exceed 6 bytes");
    }
    decode(e, t = 0) {
      return oe(e).readUIntBE(t, this.span);
    }
    encode(e, t, r = 0) {
      return oe(t).writeUIntBE(e, r, this.span), this.span;
    }
  };
  b.UIntBE = Ze;
  var gt = class extends ae {
    constructor(e, t) {
      if ((super(e, t), 6 < this.span))
        throw new RangeError("span must not exceed 6 bytes");
    }
    decode(e, t = 0) {
      return oe(e).readIntLE(t, this.span);
    }
    encode(e, t, r = 0) {
      return oe(t).writeIntLE(e, r, this.span), this.span;
    }
  };
  b.Int = gt;
  var xt = class extends ae {
    constructor(e, t) {
      if ((super(e, t), 6 < this.span))
        throw new RangeError("span must not exceed 6 bytes");
    }
    decode(e, t = 0) {
      return oe(e).readIntBE(t, this.span);
    }
    encode(e, t, r = 0) {
      return oe(t).writeIntBE(e, r, this.span), this.span;
    }
  };
  b.IntBE = xt;
  var _s = Math.pow(2, 32);
  function Sn(n) {
    let e = Math.floor(n / _s),
      t = n - e * _s;
    return { hi32: e, lo32: t };
  }
  function Bn(n, e) {
    return n * _s + e;
  }
  var sn = class extends ae {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      let r = oe(e),
        s = r.readUInt32LE(t),
        o = r.readUInt32LE(t + 4);
      return Bn(o, s);
    }
    encode(e, t, r = 0) {
      let s = Sn(e),
        o = oe(t);
      return o.writeUInt32LE(s.lo32, r), o.writeUInt32LE(s.hi32, r + 4), 8;
    }
  };
  b.NearUInt64 = sn;
  var on = class extends ae {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      let r = oe(e),
        s = r.readUInt32BE(t),
        o = r.readUInt32BE(t + 4);
      return Bn(s, o);
    }
    encode(e, t, r = 0) {
      let s = Sn(e),
        o = oe(t);
      return o.writeUInt32BE(s.hi32, r), o.writeUInt32BE(s.lo32, r + 4), 8;
    }
  };
  b.NearUInt64BE = on;
  var an = class extends ae {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      let r = oe(e),
        s = r.readUInt32LE(t),
        o = r.readInt32LE(t + 4);
      return Bn(o, s);
    }
    encode(e, t, r = 0) {
      let s = Sn(e),
        o = oe(t);
      return o.writeUInt32LE(s.lo32, r), o.writeInt32LE(s.hi32, r + 4), 8;
    }
  };
  b.NearInt64 = an;
  var cn = class extends ae {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      let r = oe(e),
        s = r.readInt32BE(t),
        o = r.readUInt32BE(t + 4);
      return Bn(s, o);
    }
    encode(e, t, r = 0) {
      let s = Sn(e),
        o = oe(t);
      return o.writeInt32BE(s.hi32, r), o.writeUInt32BE(s.lo32, r + 4), 8;
    }
  };
  b.NearInt64BE = cn;
  var un = class extends ae {
    constructor(e) {
      super(4, e);
    }
    decode(e, t = 0) {
      return oe(e).readFloatLE(t);
    }
    encode(e, t, r = 0) {
      return oe(t).writeFloatLE(e, r), 4;
    }
  };
  b.Float = un;
  var fn = class extends ae {
    constructor(e) {
      super(4, e);
    }
    decode(e, t = 0) {
      return oe(e).readFloatBE(t);
    }
    encode(e, t, r = 0) {
      return oe(t).writeFloatBE(e, r), 4;
    }
  };
  b.FloatBE = fn;
  var ln = class extends ae {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      return oe(e).readDoubleLE(t);
    }
    encode(e, t, r = 0) {
      return oe(t).writeDoubleLE(e, r), 8;
    }
  };
  b.Double = ln;
  var dn = class extends ae {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      return oe(e).readDoubleBE(t);
    }
    encode(e, t, r = 0) {
      return oe(t).writeDoubleBE(e, r), 8;
    }
  };
  b.DoubleBE = dn;
  var hn = class extends ae {
    constructor(e, t, r) {
      if (!(e instanceof ae))
        throw new TypeError("elementLayout must be a Layout");
      if (
        !((t instanceof Oe && t.isCount()) || (Number.isInteger(t) && 0 <= t))
      )
        throw new TypeError(
          "count must be non-negative integer or an unsigned integer ExternalLayout"
        );
      let s = -1;
      !(t instanceof Oe) && 0 < e.span && (s = t * e.span),
        super(s, r),
        (this.elementLayout = e),
        (this.count = t);
    }
    getSpan(e, t = 0) {
      if (0 <= this.span) return this.span;
      let r = 0,
        s = this.count;
      if (
        (s instanceof Oe && (s = s.decode(e, t)), 0 < this.elementLayout.span)
      )
        r = s * this.elementLayout.span;
      else {
        let o = 0;
        for (; o < s; ) (r += this.elementLayout.getSpan(e, t + r)), ++o;
      }
      return r;
    }
    decode(e, t = 0) {
      let r = [],
        s = 0,
        o = this.count;
      for (o instanceof Oe && (o = o.decode(e, t)); s < o; )
        r.push(this.elementLayout.decode(e, t)),
          (t += this.elementLayout.getSpan(e, t)),
          (s += 1);
      return r;
    }
    encode(e, t, r = 0) {
      let s = this.elementLayout,
        o = e.reduce((i, c) => i + s.encode(c, t, r + i), 0);
      return this.count instanceof Oe && this.count.encode(e.length, t, r), o;
    }
  };
  b.Sequence = hn;
  var yn = class extends ae {
    constructor(e, t, r) {
      if (!(Array.isArray(e) && e.reduce((o, i) => o && i instanceof ae, !0)))
        throw new TypeError("fields must be array of Layout instances");
      typeof t == "boolean" && r === void 0 && ((r = t), (t = void 0));
      for (let o of e)
        if (0 > o.span && o.property === void 0)
          throw new Error(
            "fields cannot contain unnamed variable-length layout"
          );
      let s = -1;
      try {
        s = e.reduce((o, i) => o + i.getSpan(), 0);
      } catch {}
      super(s, t), (this.fields = e), (this.decodePrefixes = !!r);
    }
    getSpan(e, t = 0) {
      if (0 <= this.span) return this.span;
      let r = 0;
      try {
        r = this.fields.reduce((s, o) => {
          let i = o.getSpan(e, t);
          return (t += i), s + i;
        }, 0);
      } catch {
        throw new RangeError("indeterminate span");
      }
      return r;
    }
    decode(e, t = 0) {
      sr(e);
      let r = this.makeDestinationObject();
      for (let s of this.fields)
        if (
          (s.property !== void 0 && (r[s.property] = s.decode(e, t)),
          (t += s.getSpan(e, t)),
          this.decodePrefixes && e.length === t)
        )
          break;
      return r;
    }
    encode(e, t, r = 0) {
      let s = r,
        o = 0,
        i = 0;
      for (let c of this.fields) {
        let a = c.span;
        if (((i = 0 < a ? a : 0), c.property !== void 0)) {
          let u = e[c.property];
          u !== void 0 &&
            ((i = c.encode(u, t, r)), 0 > a && (a = c.getSpan(t, r)));
        }
        (o = r), (r += a);
      }
      return o + i - s;
    }
    fromArray(e) {
      let t = this.makeDestinationObject();
      for (let r of this.fields)
        r.property !== void 0 && 0 < e.length && (t[r.property] = e.shift());
      return t;
    }
    layoutFor(e) {
      if (typeof e != "string") throw new TypeError("property must be string");
      for (let t of this.fields) if (t.property === e) return t;
    }
    offsetOf(e) {
      if (typeof e != "string") throw new TypeError("property must be string");
      let t = 0;
      for (let r of this.fields) {
        if (r.property === e) return t;
        0 > r.span ? (t = -1) : 0 <= t && (t += r.span);
      }
    }
  };
  b.Structure = yn;
  var Br = class {
    constructor(e) {
      this.property = e;
    }
    decode(e, t) {
      throw new Error("UnionDiscriminator is abstract");
    }
    encode(e, t, r) {
      throw new Error("UnionDiscriminator is abstract");
    }
  };
  b.UnionDiscriminator = Br;
  var nr = class extends Br {
    constructor(e, t) {
      if (!(e instanceof Oe && e.isCount()))
        throw new TypeError(
          "layout must be an unsigned integer ExternalLayout"
        );
      super(t || e.property || "variant"), (this.layout = e);
    }
    decode(e, t) {
      return this.layout.decode(e, t);
    }
    encode(e, t, r) {
      return this.layout.encode(e, t, r);
    }
  };
  b.UnionLayoutDiscriminator = nr;
  var Er = class extends ae {
    constructor(e, t, r) {
      let s;
      if (e instanceof je || e instanceof Ze) s = new nr(new Sr(e));
      else if (e instanceof Oe && e.isCount()) s = new nr(e);
      else if (e instanceof Br) s = e;
      else
        throw new TypeError(
          "discr must be a UnionDiscriminator or an unsigned integer layout"
        );
      if ((t === void 0 && (t = null), !(t === null || t instanceof ae)))
        throw new TypeError("defaultLayout must be null or a Layout");
      if (t !== null) {
        if (0 > t.span)
          throw new Error("defaultLayout must have constant span");
        t.property === void 0 && (t = t.replicate("content"));
      }
      let o = -1;
      t &&
        ((o = t.span),
        0 <= o && (e instanceof je || e instanceof Ze) && (o += s.layout.span)),
        super(o, r),
        (this.discriminator = s),
        (this.usesPrefixDiscriminator = e instanceof je || e instanceof Ze),
        (this.defaultLayout = t),
        (this.registry = {});
      let i = this.defaultGetSourceVariant.bind(this);
      (this.getSourceVariant = function (c) {
        return i(c);
      }),
        (this.configGetSourceVariant = function (c) {
          i = c.bind(this);
        });
    }
    getSpan(e, t = 0) {
      if (0 <= this.span) return this.span;
      let r = this.getVariant(e, t);
      if (!r)
        throw new Error("unable to determine span for unrecognized variant");
      return r.getSpan(e, t);
    }
    defaultGetSourceVariant(e) {
      if (
        Object.prototype.hasOwnProperty.call(e, this.discriminator.property)
      ) {
        if (
          this.defaultLayout &&
          this.defaultLayout.property &&
          Object.prototype.hasOwnProperty.call(e, this.defaultLayout.property)
        )
          return;
        let t = this.registry[e[this.discriminator.property]];
        if (
          t &&
          (!t.layout ||
            (t.property && Object.prototype.hasOwnProperty.call(e, t.property)))
        )
          return t;
      } else
        for (let t in this.registry) {
          let r = this.registry[t];
          if (r.property && Object.prototype.hasOwnProperty.call(e, r.property))
            return r;
        }
      throw new Error("unable to infer src variant");
    }
    decode(e, t = 0) {
      let r,
        s = this.discriminator,
        o = s.decode(e, t),
        i = this.registry[o];
      if (i === void 0) {
        let c = this.defaultLayout,
          a = 0;
        this.usesPrefixDiscriminator && (a = s.layout.span),
          (r = this.makeDestinationObject()),
          (r[s.property] = o),
          (r[c.property] = c.decode(e, t + a));
      } else r = i.decode(e, t);
      return r;
    }
    encode(e, t, r = 0) {
      let s = this.getSourceVariant(e);
      if (s === void 0) {
        let o = this.discriminator,
          i = this.defaultLayout,
          c = 0;
        return (
          this.usesPrefixDiscriminator && (c = o.layout.span),
          o.encode(e[o.property], t, r),
          c + i.encode(e[i.property], t, r + c)
        );
      }
      return s.encode(e, t, r);
    }
    addVariant(e, t, r) {
      let s = new pn(this, e, t, r);
      return (this.registry[e] = s), s;
    }
    getVariant(e, t = 0) {
      let r;
      return (
        e instanceof Uint8Array
          ? (r = this.discriminator.decode(e, t))
          : (r = e),
        this.registry[r]
      );
    }
  };
  b.Union = Er;
  var pn = class extends ae {
    constructor(e, t, r, s) {
      if (!(e instanceof Er)) throw new TypeError("union must be a Union");
      if (!Number.isInteger(t) || 0 > t)
        throw new TypeError("variant must be a (non-negative) integer");
      if ((typeof r == "string" && s === void 0 && ((s = r), (r = null)), r)) {
        if (!(r instanceof ae)) throw new TypeError("layout must be a Layout");
        if (
          e.defaultLayout !== null &&
          0 <= r.span &&
          r.span > e.defaultLayout.span
        )
          throw new Error("variant span exceeds span of containing union");
        if (typeof s != "string")
          throw new TypeError("variant must have a String property");
      }
      let o = e.span;
      0 > e.span &&
        ((o = r ? r.span : 0),
        0 <= o &&
          e.usesPrefixDiscriminator &&
          (o += e.discriminator.layout.span)),
        super(o, s),
        (this.union = e),
        (this.variant = t),
        (this.layout = r || null);
    }
    getSpan(e, t = 0) {
      if (0 <= this.span) return this.span;
      let r = 0;
      this.union.usesPrefixDiscriminator &&
        (r = this.union.discriminator.layout.span);
      let s = 0;
      return this.layout && (s = this.layout.getSpan(e, t + r)), r + s;
    }
    decode(e, t = 0) {
      let r = this.makeDestinationObject();
      if (this !== this.union.getVariant(e, t))
        throw new Error("variant mismatch");
      let s = 0;
      return (
        this.union.usesPrefixDiscriminator &&
          (s = this.union.discriminator.layout.span),
        this.layout
          ? (r[this.property] = this.layout.decode(e, t + s))
          : this.property
          ? (r[this.property] = !0)
          : this.union.usesPrefixDiscriminator &&
            (r[this.union.discriminator.property] = this.variant),
        r
      );
    }
    encode(e, t, r = 0) {
      let s = 0;
      if (
        (this.union.usesPrefixDiscriminator &&
          (s = this.union.discriminator.layout.span),
        this.layout && !Object.prototype.hasOwnProperty.call(e, this.property))
      )
        throw new TypeError("variant lacks property " + this.property);
      this.union.discriminator.encode(this.variant, t, r);
      let o = s;
      if (
        this.layout &&
        (this.layout.encode(e[this.property], t, r + s),
        (o += this.layout.getSpan(t, r + s)),
        0 <= this.union.span && o > this.union.span)
      )
        throw new Error("encoded variant overruns containing union");
      return o;
    }
    fromArray(e) {
      if (this.layout) return this.layout.fromArray(e);
    }
  };
  b.VariantLayout = pn;
  function rr(n) {
    return 0 > n && (n += 4294967296), n;
  }
  var Ir = class extends ae {
    constructor(e, t, r) {
      if (!(e instanceof je || e instanceof Ze))
        throw new TypeError("word must be a UInt or UIntBE layout");
      if (
        (typeof t == "string" && r === void 0 && ((r = t), (t = !1)),
        4 < e.span)
      )
        throw new RangeError("word cannot exceed 32 bits");
      super(e.span, r), (this.word = e), (this.msb = !!t), (this.fields = []);
      let s = 0;
      (this._packedSetValue = function (o) {
        return (s = rr(o)), this;
      }),
        (this._packedGetValue = function () {
          return s;
        });
    }
    decode(e, t = 0) {
      let r = this.makeDestinationObject(),
        s = this.word.decode(e, t);
      this._packedSetValue(s);
      for (let o of this.fields)
        o.property !== void 0 && (r[o.property] = o.decode(e));
      return r;
    }
    encode(e, t, r = 0) {
      let s = this.word.decode(t, r);
      this._packedSetValue(s);
      for (let o of this.fields)
        if (o.property !== void 0) {
          let i = e[o.property];
          i !== void 0 && o.encode(i);
        }
      return this.word.encode(this._packedGetValue(), t, r);
    }
    addField(e, t) {
      let r = new vr(this, e, t);
      return this.fields.push(r), r;
    }
    addBoolean(e) {
      let t = new gn(this, e);
      return this.fields.push(t), t;
    }
    fieldFor(e) {
      if (typeof e != "string") throw new TypeError("property must be string");
      for (let t of this.fields) if (t.property === e) return t;
    }
  };
  b.BitStructure = Ir;
  var vr = class {
    constructor(e, t, r) {
      if (!(e instanceof Ir))
        throw new TypeError("container must be a BitStructure");
      if (!Number.isInteger(t) || 0 >= t)
        throw new TypeError("bits must be positive integer");
      let s = 8 * e.span,
        o = e.fields.reduce((i, c) => i + c.bits, 0);
      if (t + o > s)
        throw new Error(
          "bits too long for span remainder (" +
            (s - o) +
            " of " +
            s +
            " remain)"
        );
      (this.container = e),
        (this.bits = t),
        (this.valueMask = (1 << t) - 1),
        t === 32 && (this.valueMask = 4294967295),
        (this.start = o),
        this.container.msb && (this.start = s - o - t),
        (this.wordMask = rr(this.valueMask << this.start)),
        (this.property = r);
    }
    decode(e, t) {
      let r = this.container._packedGetValue();
      return rr(r & this.wordMask) >>> this.start;
    }
    encode(e) {
      if (
        typeof e != "number" ||
        !Number.isInteger(e) ||
        e !== rr(e & this.valueMask)
      )
        throw new TypeError(
          As("BitField.encode", this) +
            " value must be integer not exceeding " +
            this.valueMask
        );
      let t = this.container._packedGetValue(),
        r = rr(e << this.start);
      this.container._packedSetValue(rr(t & ~this.wordMask) | r);
    }
  };
  b.BitField = vr;
  var gn = class extends vr {
    constructor(e, t) {
      super(e, 1, t);
    }
    decode(e, t) {
      return !!super.decode(e, t);
    }
    encode(e) {
      typeof e == "boolean" && (e = +e), super.encode(e);
    }
  };
  b.Boolean = gn;
  var mn = class extends ae {
    constructor(e, t) {
      if (
        !((e instanceof Oe && e.isCount()) || (Number.isInteger(e) && 0 <= e))
      )
        throw new TypeError(
          "length must be positive integer or an unsigned integer ExternalLayout"
        );
      let r = -1;
      e instanceof Oe || (r = e), super(r, t), (this.length = e);
    }
    getSpan(e, t) {
      let r = this.span;
      return 0 > r && (r = this.length.decode(e, t)), r;
    }
    decode(e, t = 0) {
      let r = this.span;
      return 0 > r && (r = this.length.decode(e, t)), oe(e).slice(t, t + r);
    }
    encode(e, t, r) {
      let s = this.length;
      if (
        (this.length instanceof Oe && (s = e.length),
        !(e instanceof Uint8Array && s === e.length))
      )
        throw new TypeError(
          As("Blob.encode", this) +
            " requires (length " +
            s +
            ") Uint8Array as src"
        );
      if (r + s > t.length)
        throw new RangeError("encoding overruns Uint8Array");
      let o = oe(e);
      return (
        oe(t).write(o.toString("hex"), r, s, "hex"),
        this.length instanceof Oe && this.length.encode(s, t, r),
        s
      );
    }
  };
  b.Blob = mn;
  var bn = class extends ae {
    constructor(e) {
      super(-1, e);
    }
    getSpan(e, t = 0) {
      sr(e);
      let r = t;
      for (; r < e.length && e[r] !== 0; ) r += 1;
      return 1 + r - t;
    }
    decode(e, t = 0) {
      let r = this.getSpan(e, t);
      return oe(e)
        .slice(t, t + r - 1)
        .toString("utf-8");
    }
    encode(e, t, r = 0) {
      typeof e != "string" && (e = String(e));
      let s = xs.Buffer.from(e, "utf8"),
        o = s.length;
      if (r + o > t.length) throw new RangeError("encoding overruns Buffer");
      let i = oe(t);
      return s.copy(i, r), (i[r + o] = 0), o + 1;
    }
  };
  b.CString = bn;
  var wn = class extends ae {
    constructor(e, t) {
      if (
        (typeof e == "string" && t === void 0 && ((t = e), (e = void 0)),
        e === void 0)
      )
        e = -1;
      else if (!Number.isInteger(e))
        throw new TypeError("maxSpan must be an integer");
      super(-1, t), (this.maxSpan = e);
    }
    getSpan(e, t = 0) {
      return sr(e), e.length - t;
    }
    decode(e, t = 0) {
      let r = this.getSpan(e, t);
      if (0 <= this.maxSpan && this.maxSpan < r)
        throw new RangeError("text length exceeds maxSpan");
      return oe(e)
        .slice(t, t + r)
        .toString("utf-8");
    }
    encode(e, t, r = 0) {
      typeof e != "string" && (e = String(e));
      let s = xs.Buffer.from(e, "utf8"),
        o = s.length;
      if (0 <= this.maxSpan && this.maxSpan < o)
        throw new RangeError("text length exceeds maxSpan");
      if (r + o > t.length) throw new RangeError("encoding overruns Buffer");
      return s.copy(oe(t), r), o;
    }
  };
  b.UTF8 = wn;
  var kn = class extends ae {
    constructor(e, t) {
      super(0, t), (this.value = e);
    }
    decode(e, t) {
      return this.value;
    }
    encode(e, t, r) {
      return 0;
    }
  };
  b.Constant = kn;
  b.greedy = (n, e) => new nn(n, e);
  b.offset = (n, e, t) => new Sr(n, e, t);
  b.u8 = (n) => new je(1, n);
  b.u16 = (n) => new je(2, n);
  b.u24 = (n) => new je(3, n);
  b.u32 = (n) => new je(4, n);
  b.u40 = (n) => new je(5, n);
  b.u48 = (n) => new je(6, n);
  b.nu64 = (n) => new sn(n);
  b.u16be = (n) => new Ze(2, n);
  b.u24be = (n) => new Ze(3, n);
  b.u32be = (n) => new Ze(4, n);
  b.u40be = (n) => new Ze(5, n);
  b.u48be = (n) => new Ze(6, n);
  b.nu64be = (n) => new on(n);
  b.s8 = (n) => new gt(1, n);
  b.s16 = (n) => new gt(2, n);
  b.s24 = (n) => new gt(3, n);
  b.s32 = (n) => new gt(4, n);
  b.s40 = (n) => new gt(5, n);
  b.s48 = (n) => new gt(6, n);
  b.ns64 = (n) => new an(n);
  b.s16be = (n) => new xt(2, n);
  b.s24be = (n) => new xt(3, n);
  b.s32be = (n) => new xt(4, n);
  b.s40be = (n) => new xt(5, n);
  b.s48be = (n) => new xt(6, n);
  b.ns64be = (n) => new cn(n);
  b.f32 = (n) => new un(n);
  b.f32be = (n) => new fn(n);
  b.f64 = (n) => new ln(n);
  b.f64be = (n) => new dn(n);
  b.struct = (n, e, t) => new yn(n, e, t);
  b.bits = (n, e, t) => new Ir(n, e, t);
  b.seq = (n, e, t) => new hn(n, e, t);
  b.union = (n, e, t) => new Er(n, e, t);
  b.unionLayoutDiscriminator = (n, e) => new nr(n, e);
  b.blob = (n, e) => new mn(n, e);
  b.cstr = (n) => new bn(n);
  b.utf8 = (n, e) => new wn(n, e);
  b.constant = (n, e) => new kn(n, e);
});
var bi = St((or) => {
  "use strict";
  Object.defineProperty(or, "__esModule", { value: !0 });
  var En;
  function Fc(n) {
    {
      let e = Buffer.from(n);
      e.reverse();
      let t = e.toString("hex");
      return t.length === 0 ? BigInt(0) : BigInt(`0x${t}`);
    }
    return En.toBigInt(n, !1);
  }
  or.toBigIntLE = Fc;
  function jc(n) {
    {
      let e = n.toString("hex");
      return e.length === 0 ? BigInt(0) : BigInt(`0x${e}`);
    }
    return En.toBigInt(n, !0);
  }
  or.toBigIntBE = jc;
  function Hc(n, e) {
    {
      let t = n.toString(16),
        r = Buffer.from(t.padStart(e * 2, "0").slice(0, e * 2), "hex");
      return r.reverse(), r;
    }
    return En.fromBigInt(n, Buffer.allocUnsafe(e), !1);
  }
  or.toBufferLE = Hc;
  function Gc(n, e) {
    {
      let t = n.toString(16);
      return Buffer.from(t.padStart(e * 2, "0").slice(0, e * 2), "hex");
    }
    return En.fromBigInt(n, Buffer.allocUnsafe(e), !0);
  }
  or.toBufferBE = Gc;
});
function Yc(n) {
  return _r(n) && typeof n[Symbol.iterator] == "function";
}
function _r(n) {
  return typeof n == "object" && n != null;
}
function In(n) {
  return _r(n) && !Array.isArray(n);
}
function tt(n) {
  return typeof n == "symbol"
    ? n.toString()
    : typeof n == "string"
    ? JSON.stringify(n)
    : `${n}`;
}
function Zc(n) {
  let { done: e, value: t } = n.next();
  return e ? void 0 : t;
}
function Xc(n, e, t, r) {
  if (n === !0) return;
  n === !1 ? (n = {}) : typeof n == "string" && (n = { message: n });
  let { path: s, branch: o } = e,
    { type: i } = t,
    {
      refinement: c,
      message: a = `Expected a value of type \`${i}\`${
        c ? ` with refinement \`${c}\`` : ""
      }, but received: \`${tt(r)}\``,
    } = n;
  return Y(
    F(
      {
        value: r,
        type: i,
        refinement: c,
        key: s[s.length - 1],
        path: s,
        branch: o,
      },
      n
    ),
    { message: a }
  );
}
function* wi(n, e, t, r) {
  Yc(n) || (n = [n]);
  for (let s of n) {
    let o = Xc(s, e, t, r);
    o && (yield o);
  }
}
function* Ps(n, e, t = {}) {
  let { path: r = [], branch: s = [n], coerce: o = !1, mask: i = !1 } = t,
    c = { path: r, branch: s, mask: i };
  o && (n = e.coercer(n, c));
  let a = "valid";
  for (let u of e.validator(n, c))
    (u.explanation = t.message), (a = "not_valid"), yield [u, void 0];
  for (let [u, d, g] of e.entries(n, c)) {
    let y = Ps(d, g, {
      path: u === void 0 ? r : [...r, u],
      branch: u === void 0 ? s : [...s, d],
      coerce: o,
      mask: i,
      message: t.message,
    });
    for (let l of y)
      l[0]
        ? ((a = l[0].refinement != null ? "not_refined" : "not_valid"),
          yield [l[0], void 0])
        : o &&
          ((d = l[1]),
          u === void 0
            ? (n = d)
            : n instanceof Map
            ? n.set(u, d)
            : n instanceof Set
            ? n.add(d)
            : _r(n) && (d !== void 0 || u in n) && (n[u] = d));
  }
  if (a !== "not_valid")
    for (let u of e.refiner(n, c))
      (u.explanation = t.message), (a = "not_refined"), yield [u, void 0];
  a === "valid" && (yield [void 0, n]);
}
function Ts(n, e, t) {
  let r = xr(n, e, { message: t });
  if (r[0]) throw r[0];
}
function P(n, e, t) {
  let r = xr(n, e, { coerce: !0, message: t });
  if (r[0]) throw r[0];
  return r[1];
}
function Jc(n, e, t) {
  let r = xr(n, e, { coerce: !0, mask: !0, message: t });
  if (r[0]) throw r[0];
  return r[1];
}
function ki(n, e) {
  return !xr(n, e)[0];
}
function xr(n, e, t = {}) {
  let r = Ps(n, e, t),
    s = Zc(r);
  return s[0]
    ? [
        new Ls(s[0], function* () {
          for (let i of r) i[0] && (yield i[0]);
        }),
        void 0,
      ]
    : [void 0, s[1]];
}
function Wt(n, e) {
  return new Qe({ type: n, schema: null, validator: e });
}
function Si() {
  return Wt("any", () => !0);
}
function C(n) {
  return new Qe({
    type: "array",
    schema: n,
    *entries(e) {
      if (n && Array.isArray(e))
        for (let [t, r] of e.entries()) yield [t, r, n];
    },
    coercer(e) {
      return Array.isArray(e) ? e.slice() : e;
    },
    validator(e) {
      return (
        Array.isArray(e) || `Expected an array value, but received: ${tt(e)}`
      );
    },
  });
}
function rt() {
  return Wt("boolean", (n) => typeof n == "boolean");
}
function vn(n) {
  return Wt(
    "instance",
    (e) =>
      e instanceof n ||
      `Expected a \`${n.name}\` instance, but received: ${tt(e)}`
  );
}
function be(n) {
  let e = tt(n),
    t = typeof n;
  return new Qe({
    type: "literal",
    schema: t === "string" || t === "number" || t === "boolean" ? n : null,
    validator(r) {
      return r === n || `Expected the literal \`${e}\`, but received: ${tt(r)}`;
    },
  });
}
function Qc() {
  return Wt("never", () => !1);
}
function O(n) {
  return new Qe(
    Y(F({}, n), {
      validator: (e, t) => e === null || n.validator(e, t),
      refiner: (e, t) => e === null || n.refiner(e, t),
    })
  );
}
function p() {
  return Wt(
    "number",
    (n) =>
      (typeof n == "number" && !isNaN(n)) ||
      `Expected a number, but received: ${tt(n)}`
  );
}
function D(n) {
  return new Qe(
    Y(F({}, n), {
      validator: (e, t) => e === void 0 || n.validator(e, t),
      refiner: (e, t) => e === void 0 || n.refiner(e, t),
    })
  );
}
function Cs(n, e) {
  return new Qe({
    type: "record",
    schema: null,
    *entries(t) {
      if (_r(t))
        for (let r in t) {
          let s = t[r];
          yield [r, r, n], yield [r, s, e];
        }
    },
    validator(t) {
      return In(t) || `Expected an object, but received: ${tt(t)}`;
    },
    coercer(t) {
      return In(t) ? F({}, t) : t;
    },
  });
}
function A() {
  return Wt(
    "string",
    (n) => typeof n == "string" || `Expected a string, but received: ${tt(n)}`
  );
}
function _n(n) {
  let e = Qc();
  return new Qe({
    type: "tuple",
    schema: null,
    *entries(t) {
      if (Array.isArray(t)) {
        let r = Math.max(n.length, t.length);
        for (let s = 0; s < r; s++) yield [s, t[s], n[s] || e];
      }
    },
    validator(t) {
      return Array.isArray(t) || `Expected an array, but received: ${tt(t)}`;
    },
    coercer(t) {
      return Array.isArray(t) ? t.slice() : t;
    },
  });
}
function v(n) {
  let e = Object.keys(n);
  return new Qe({
    type: "type",
    schema: n,
    *entries(t) {
      if (_r(t)) for (let r of e) yield [r, t[r], n[r]];
    },
    validator(t) {
      return In(t) || `Expected an object, but received: ${tt(t)}`;
    },
    coercer(t) {
      return In(t) ? F({}, t) : t;
    },
  });
}
function Ne(n) {
  let e = n.map((t) => t.type).join(" | ");
  return new Qe({
    type: "union",
    schema: null,
    coercer(t, r) {
      for (let s of n) {
        let [o, i] = s.validate(t, { coerce: !0, mask: r.mask });
        if (!o) return i;
      }
      return t;
    },
    validator(t, r) {
      let s = [];
      for (let o of n) {
        let [...i] = Ps(t, o, r),
          [c] = i;
        if (c[0]) for (let [a] of i) a && s.push(a);
        else return [];
      }
      return [
        `Expected the value to satisfy a union of \`${e}\`, but received: ${tt(
          t
        )}`,
        ...s,
      ];
    },
  });
}
function Dt() {
  return Wt("unknown", () => !0);
}
function ir(n, e, t) {
  return new Qe(
    Y(F({}, n), {
      coercer: (r, s) => (ki(r, e) ? n.coercer(t(r, s), s) : n.coercer(r, s)),
    })
  );
}
var Ls,
  Qe,
  Bi = le(() => {
    "use strict";
    Ls = class extends TypeError {
      constructor(e, t) {
        let r,
          u = e,
          { message: s, explanation: o } = u,
          i = dt(u, ["message", "explanation"]),
          { path: c } = e,
          a = c.length === 0 ? s : `At path: ${c.join(".")} -- ${s}`;
        super(o ?? a),
          o != null && (this.cause = a),
          Object.assign(this, i),
          (this.name = this.constructor.name),
          (this.failures = () => r ?? (r = [e, ...t()]));
      }
    };
    Qe = class {
      constructor(e) {
        let {
          type: t,
          schema: r,
          validator: s,
          refiner: o,
          coercer: i = (a) => a,
          entries: c = function* () {},
        } = e;
        (this.type = t),
          (this.schema = r),
          (this.entries = c),
          (this.coercer = i),
          s
            ? (this.validator = (a, u) => {
                let d = s(a, u);
                return wi(d, u, this, a);
              })
            : (this.validator = () => []),
          o
            ? (this.refiner = (a, u) => {
                let d = o(a, u);
                return wi(d, u, this, a);
              })
            : (this.refiner = () => []);
      }
      assert(e, t) {
        return Ts(e, this, t);
      }
      create(e, t) {
        return P(e, this, t);
      }
      is(e) {
        return ki(e, this);
      }
      mask(e, t) {
        return Jc(e, this, t);
      }
      validate(e, t = {}) {
        return xr(e, this, t);
      }
    };
  });
function Ar() {
  if (
    !xn &&
    ((xn =
      (typeof crypto < "u" &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      (typeof msCrypto < "u" &&
        typeof msCrypto.getRandomValues == "function" &&
        msCrypto.getRandomValues.bind(msCrypto))),
    !xn)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return xn(eu);
}
var xn,
  eu,
  Os = le(() => {
    "use strict";
    eu = new Uint8Array(16);
  });
var Ei,
  Ii = le(() => {
    "use strict";
    Ei =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  });
function tu(n) {
  return typeof n == "string" && Ei.test(n);
}
var At,
  Rr = le(() => {
    "use strict";
    Ii();
    At = tu;
  });
function ru(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    t = (
      Pe[n[e + 0]] +
      Pe[n[e + 1]] +
      Pe[n[e + 2]] +
      Pe[n[e + 3]] +
      "-" +
      Pe[n[e + 4]] +
      Pe[n[e + 5]] +
      "-" +
      Pe[n[e + 6]] +
      Pe[n[e + 7]] +
      "-" +
      Pe[n[e + 8]] +
      Pe[n[e + 9]] +
      "-" +
      Pe[n[e + 10]] +
      Pe[n[e + 11]] +
      Pe[n[e + 12]] +
      Pe[n[e + 13]] +
      Pe[n[e + 14]] +
      Pe[n[e + 15]]
    ).toLowerCase();
  if (!At(t)) throw TypeError("Stringified UUID is invalid");
  return t;
}
var Pe,
  An,
  Rt,
  Lr = le(() => {
    "use strict";
    Rr();
    Pe = [];
    for (An = 0; An < 256; ++An) Pe.push((An + 256).toString(16).substr(1));
    Rt = ru;
  });
function nu(n, e, t) {
  var r = (e && t) || 0,
    s = e || new Array(16);
  n = n || {};
  var o = n.node || vi,
    i = n.clockseq !== void 0 ? n.clockseq : Ns;
  if (o == null || i == null) {
    var c = n.random || (n.rng || Ar)();
    o == null && (o = vi = [c[0] | 1, c[1], c[2], c[3], c[4], c[5]]),
      i == null && (i = Ns = ((c[6] << 8) | c[7]) & 16383);
  }
  var a = n.msecs !== void 0 ? n.msecs : Date.now(),
    u = n.nsecs !== void 0 ? n.nsecs : zs + 1,
    d = a - Us + (u - zs) / 1e4;
  if (
    (d < 0 && n.clockseq === void 0 && (i = (i + 1) & 16383),
    (d < 0 || a > Us) && n.nsecs === void 0 && (u = 0),
    u >= 1e4)
  )
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  (Us = a), (zs = u), (Ns = i), (a += 122192928e5);
  var g = ((a & 268435455) * 1e4 + u) % 4294967296;
  (s[r++] = (g >>> 24) & 255),
    (s[r++] = (g >>> 16) & 255),
    (s[r++] = (g >>> 8) & 255),
    (s[r++] = g & 255);
  var y = ((a / 4294967296) * 1e4) & 268435455;
  (s[r++] = (y >>> 8) & 255),
    (s[r++] = y & 255),
    (s[r++] = ((y >>> 24) & 15) | 16),
    (s[r++] = (y >>> 16) & 255),
    (s[r++] = (i >>> 8) | 128),
    (s[r++] = i & 255);
  for (var l = 0; l < 6; ++l) s[r + l] = o[l];
  return e || Rt(s);
}
var vi,
  Ns,
  Us,
  zs,
  _i,
  xi = le(() => {
    "use strict";
    Os();
    Lr();
    (Us = 0), (zs = 0);
    _i = nu;
  });
function su(n) {
  if (!At(n)) throw TypeError("Invalid UUID");
  var e,
    t = new Uint8Array(16);
  return (
    (t[0] = (e = parseInt(n.slice(0, 8), 16)) >>> 24),
    (t[1] = (e >>> 16) & 255),
    (t[2] = (e >>> 8) & 255),
    (t[3] = e & 255),
    (t[4] = (e = parseInt(n.slice(9, 13), 16)) >>> 8),
    (t[5] = e & 255),
    (t[6] = (e = parseInt(n.slice(14, 18), 16)) >>> 8),
    (t[7] = e & 255),
    (t[8] = (e = parseInt(n.slice(19, 23), 16)) >>> 8),
    (t[9] = e & 255),
    (t[10] = ((e = parseInt(n.slice(24, 36), 16)) / 1099511627776) & 255),
    (t[11] = (e / 4294967296) & 255),
    (t[12] = (e >>> 24) & 255),
    (t[13] = (e >>> 16) & 255),
    (t[14] = (e >>> 8) & 255),
    (t[15] = e & 255),
    t
  );
}
var Rn,
  Ks = le(() => {
    "use strict";
    Rr();
    Rn = su;
  });
function ou(n) {
  n = unescape(encodeURIComponent(n));
  for (var e = [], t = 0; t < n.length; ++t) e.push(n.charCodeAt(t));
  return e;
}
function Ln(n, e, t) {
  function r(s, o, i, c) {
    if (
      (typeof s == "string" && (s = ou(s)),
      typeof o == "string" && (o = Rn(o)),
      o.length !== 16)
    )
      throw TypeError(
        "Namespace must be array-like (16 iterable integer values, 0-255)"
      );
    var a = new Uint8Array(16 + s.length);
    if (
      (a.set(o),
      a.set(s, o.length),
      (a = t(a)),
      (a[6] = (a[6] & 15) | e),
      (a[8] = (a[8] & 63) | 128),
      i)
    ) {
      c = c || 0;
      for (var u = 0; u < 16; ++u) i[c + u] = a[u];
      return i;
    }
    return Rt(a);
  }
  try {
    r.name = n;
  } catch {}
  return (r.DNS = iu), (r.URL = au), r;
}
var iu,
  au,
  qs = le(() => {
    "use strict";
    Lr();
    Ks();
    (iu = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
      (au = "6ba7b811-9dad-11d1-80b4-00c04fd430c8");
  });
function cu(n) {
  if (typeof n == "string") {
    var e = unescape(encodeURIComponent(n));
    n = new Uint8Array(e.length);
    for (var t = 0; t < e.length; ++t) n[t] = e.charCodeAt(t);
  }
  return uu(fu(lu(n), n.length * 8));
}
function uu(n) {
  for (
    var e = [], t = n.length * 32, r = "0123456789abcdef", s = 0;
    s < t;
    s += 8
  ) {
    var o = (n[s >> 5] >>> s % 32) & 255,
      i = parseInt(r.charAt((o >>> 4) & 15) + r.charAt(o & 15), 16);
    e.push(i);
  }
  return e;
}
function Ai(n) {
  return (((n + 64) >>> 9) << 4) + 14 + 1;
}
function fu(n, e) {
  (n[e >> 5] |= 128 << e % 32), (n[Ai(e) - 1] = e);
  for (
    var t = 1732584193, r = -271733879, s = -1732584194, o = 271733878, i = 0;
    i < n.length;
    i += 16
  ) {
    var c = t,
      a = r,
      u = s,
      d = o;
    (t = Ue(t, r, s, o, n[i], 7, -680876936)),
      (o = Ue(o, t, r, s, n[i + 1], 12, -389564586)),
      (s = Ue(s, o, t, r, n[i + 2], 17, 606105819)),
      (r = Ue(r, s, o, t, n[i + 3], 22, -1044525330)),
      (t = Ue(t, r, s, o, n[i + 4], 7, -176418897)),
      (o = Ue(o, t, r, s, n[i + 5], 12, 1200080426)),
      (s = Ue(s, o, t, r, n[i + 6], 17, -1473231341)),
      (r = Ue(r, s, o, t, n[i + 7], 22, -45705983)),
      (t = Ue(t, r, s, o, n[i + 8], 7, 1770035416)),
      (o = Ue(o, t, r, s, n[i + 9], 12, -1958414417)),
      (s = Ue(s, o, t, r, n[i + 10], 17, -42063)),
      (r = Ue(r, s, o, t, n[i + 11], 22, -1990404162)),
      (t = Ue(t, r, s, o, n[i + 12], 7, 1804603682)),
      (o = Ue(o, t, r, s, n[i + 13], 12, -40341101)),
      (s = Ue(s, o, t, r, n[i + 14], 17, -1502002290)),
      (r = Ue(r, s, o, t, n[i + 15], 22, 1236535329)),
      (t = ze(t, r, s, o, n[i + 1], 5, -165796510)),
      (o = ze(o, t, r, s, n[i + 6], 9, -1069501632)),
      (s = ze(s, o, t, r, n[i + 11], 14, 643717713)),
      (r = ze(r, s, o, t, n[i], 20, -373897302)),
      (t = ze(t, r, s, o, n[i + 5], 5, -701558691)),
      (o = ze(o, t, r, s, n[i + 10], 9, 38016083)),
      (s = ze(s, o, t, r, n[i + 15], 14, -660478335)),
      (r = ze(r, s, o, t, n[i + 4], 20, -405537848)),
      (t = ze(t, r, s, o, n[i + 9], 5, 568446438)),
      (o = ze(o, t, r, s, n[i + 14], 9, -1019803690)),
      (s = ze(s, o, t, r, n[i + 3], 14, -187363961)),
      (r = ze(r, s, o, t, n[i + 8], 20, 1163531501)),
      (t = ze(t, r, s, o, n[i + 13], 5, -1444681467)),
      (o = ze(o, t, r, s, n[i + 2], 9, -51403784)),
      (s = ze(s, o, t, r, n[i + 7], 14, 1735328473)),
      (r = ze(r, s, o, t, n[i + 12], 20, -1926607734)),
      (t = Ke(t, r, s, o, n[i + 5], 4, -378558)),
      (o = Ke(o, t, r, s, n[i + 8], 11, -2022574463)),
      (s = Ke(s, o, t, r, n[i + 11], 16, 1839030562)),
      (r = Ke(r, s, o, t, n[i + 14], 23, -35309556)),
      (t = Ke(t, r, s, o, n[i + 1], 4, -1530992060)),
      (o = Ke(o, t, r, s, n[i + 4], 11, 1272893353)),
      (s = Ke(s, o, t, r, n[i + 7], 16, -155497632)),
      (r = Ke(r, s, o, t, n[i + 10], 23, -1094730640)),
      (t = Ke(t, r, s, o, n[i + 13], 4, 681279174)),
      (o = Ke(o, t, r, s, n[i], 11, -358537222)),
      (s = Ke(s, o, t, r, n[i + 3], 16, -722521979)),
      (r = Ke(r, s, o, t, n[i + 6], 23, 76029189)),
      (t = Ke(t, r, s, o, n[i + 9], 4, -640364487)),
      (o = Ke(o, t, r, s, n[i + 12], 11, -421815835)),
      (s = Ke(s, o, t, r, n[i + 15], 16, 530742520)),
      (r = Ke(r, s, o, t, n[i + 2], 23, -995338651)),
      (t = qe(t, r, s, o, n[i], 6, -198630844)),
      (o = qe(o, t, r, s, n[i + 7], 10, 1126891415)),
      (s = qe(s, o, t, r, n[i + 14], 15, -1416354905)),
      (r = qe(r, s, o, t, n[i + 5], 21, -57434055)),
      (t = qe(t, r, s, o, n[i + 12], 6, 1700485571)),
      (o = qe(o, t, r, s, n[i + 3], 10, -1894986606)),
      (s = qe(s, o, t, r, n[i + 10], 15, -1051523)),
      (r = qe(r, s, o, t, n[i + 1], 21, -2054922799)),
      (t = qe(t, r, s, o, n[i + 8], 6, 1873313359)),
      (o = qe(o, t, r, s, n[i + 15], 10, -30611744)),
      (s = qe(s, o, t, r, n[i + 6], 15, -1560198380)),
      (r = qe(r, s, o, t, n[i + 13], 21, 1309151649)),
      (t = qe(t, r, s, o, n[i + 4], 6, -145523070)),
      (o = qe(o, t, r, s, n[i + 11], 10, -1120210379)),
      (s = qe(s, o, t, r, n[i + 2], 15, 718787259)),
      (r = qe(r, s, o, t, n[i + 9], 21, -343485551)),
      (t = Lt(t, c)),
      (r = Lt(r, a)),
      (s = Lt(s, u)),
      (o = Lt(o, d));
  }
  return [t, r, s, o];
}
function lu(n) {
  if (n.length === 0) return [];
  for (var e = n.length * 8, t = new Uint32Array(Ai(e)), r = 0; r < e; r += 8)
    t[r >> 5] |= (n[r / 8] & 255) << r % 32;
  return t;
}
function Lt(n, e) {
  var t = (n & 65535) + (e & 65535),
    r = (n >> 16) + (e >> 16) + (t >> 16);
  return (r << 16) | (t & 65535);
}
function du(n, e) {
  return (n << e) | (n >>> (32 - e));
}
function Pn(n, e, t, r, s, o) {
  return Lt(du(Lt(Lt(e, n), Lt(r, o)), s), t);
}
function Ue(n, e, t, r, s, o, i) {
  return Pn((e & t) | (~e & r), n, e, s, o, i);
}
function ze(n, e, t, r, s, o, i) {
  return Pn((e & r) | (t & ~r), n, e, s, o, i);
}
function Ke(n, e, t, r, s, o, i) {
  return Pn(e ^ t ^ r, n, e, s, o, i);
}
function qe(n, e, t, r, s, o, i) {
  return Pn(t ^ (e | ~r), n, e, s, o, i);
}
var Ri,
  Li = le(() => {
    "use strict";
    Ri = cu;
  });
var hu,
  Pi,
  Ti = le(() => {
    "use strict";
    qs();
    Li();
    (hu = Ln("v3", 48, Ri)), (Pi = hu);
  });
function yu(n, e, t) {
  n = n || {};
  var r = n.random || (n.rng || Ar)();
  if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), e)) {
    t = t || 0;
    for (var s = 0; s < 16; ++s) e[t + s] = r[s];
    return e;
  }
  return Rt(r);
}
var Ci,
  Oi = le(() => {
    "use strict";
    Os();
    Lr();
    Ci = yu;
  });
function pu(n, e, t, r) {
  switch (n) {
    case 0:
      return (e & t) ^ (~e & r);
    case 1:
      return e ^ t ^ r;
    case 2:
      return (e & t) ^ (e & r) ^ (t & r);
    case 3:
      return e ^ t ^ r;
  }
}
function Ws(n, e) {
  return (n << e) | (n >>> (32 - e));
}
function gu(n) {
  var e = [1518500249, 1859775393, 2400959708, 3395469782],
    t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof n == "string") {
    var r = unescape(encodeURIComponent(n));
    n = [];
    for (var s = 0; s < r.length; ++s) n.push(r.charCodeAt(s));
  } else Array.isArray(n) || (n = Array.prototype.slice.call(n));
  n.push(128);
  for (
    var o = n.length / 4 + 2, i = Math.ceil(o / 16), c = new Array(i), a = 0;
    a < i;
    ++a
  ) {
    for (var u = new Uint32Array(16), d = 0; d < 16; ++d)
      u[d] =
        (n[a * 64 + d * 4] << 24) |
        (n[a * 64 + d * 4 + 1] << 16) |
        (n[a * 64 + d * 4 + 2] << 8) |
        n[a * 64 + d * 4 + 3];
    c[a] = u;
  }
  (c[i - 1][14] = ((n.length - 1) * 8) / Math.pow(2, 32)),
    (c[i - 1][14] = Math.floor(c[i - 1][14])),
    (c[i - 1][15] = ((n.length - 1) * 8) & 4294967295);
  for (var g = 0; g < i; ++g) {
    for (var y = new Uint32Array(80), l = 0; l < 16; ++l) y[l] = c[g][l];
    for (var h = 16; h < 80; ++h)
      y[h] = Ws(y[h - 3] ^ y[h - 8] ^ y[h - 14] ^ y[h - 16], 1);
    for (
      var m = t[0], k = t[1], w = t[2], R = t[3], x = t[4], U = 0;
      U < 80;
      ++U
    ) {
      var J = Math.floor(U / 20),
        ee = (Ws(m, 5) + pu(J, k, w, R) + x + e[J] + y[U]) >>> 0;
      (x = R), (R = w), (w = Ws(k, 30) >>> 0), (k = m), (m = ee);
    }
    (t[0] = (t[0] + m) >>> 0),
      (t[1] = (t[1] + k) >>> 0),
      (t[2] = (t[2] + w) >>> 0),
      (t[3] = (t[3] + R) >>> 0),
      (t[4] = (t[4] + x) >>> 0);
  }
  return [
    (t[0] >> 24) & 255,
    (t[0] >> 16) & 255,
    (t[0] >> 8) & 255,
    t[0] & 255,
    (t[1] >> 24) & 255,
    (t[1] >> 16) & 255,
    (t[1] >> 8) & 255,
    t[1] & 255,
    (t[2] >> 24) & 255,
    (t[2] >> 16) & 255,
    (t[2] >> 8) & 255,
    t[2] & 255,
    (t[3] >> 24) & 255,
    (t[3] >> 16) & 255,
    (t[3] >> 8) & 255,
    t[3] & 255,
    (t[4] >> 24) & 255,
    (t[4] >> 16) & 255,
    (t[4] >> 8) & 255,
    t[4] & 255,
  ];
}
var Ni,
  Ui = le(() => {
    "use strict";
    Ni = gu;
  });
var mu,
  zi,
  Ki = le(() => {
    "use strict";
    qs();
    Ui();
    (mu = Ln("v5", 80, Ni)), (zi = mu);
  });
var qi,
  Wi = le(() => {
    "use strict";
    qi = "00000000-0000-0000-0000-000000000000";
  });
function bu(n) {
  if (!At(n)) throw TypeError("Invalid UUID");
  return parseInt(n.substr(14, 1), 16);
}
var Di,
  Mi = le(() => {
    "use strict";
    Rr();
    Di = bu;
  });
var Ds = {};
Jn(Ds, {
  NIL: () => qi,
  parse: () => Rn,
  stringify: () => Rt,
  v1: () => _i,
  v3: () => Pi,
  v4: () => Ci,
  v5: () => zi,
  validate: () => At,
  version: () => Di,
});
var Ms = le(() => {
  "use strict";
  xi();
  Ti();
  Oi();
  Ki();
  Wi();
  Mi();
  Rr();
  Lr();
  Ks();
});
var $i = St((uh, Vi) => {
  "use strict";
  var wu = (Ms(), Qn(Ds)).v4,
    ku = function (n, e, t, r) {
      if (typeof n != "string") throw new TypeError(n + " must be a string");
      r = r || {};
      let s = typeof r.version == "number" ? r.version : 2;
      if (s !== 1 && s !== 2) throw new TypeError(s + " must be 1 or 2");
      let o = { method: n };
      if ((s === 2 && (o.jsonrpc = "2.0"), e)) {
        if (typeof e != "object" && !Array.isArray(e))
          throw new TypeError(e + " must be an object, array or omitted");
        o.params = e;
      }
      if (typeof t > "u") {
        let i =
          typeof r.generator == "function"
            ? r.generator
            : function () {
                return wu();
              };
        o.id = i(o, r);
      } else
        s === 2 && t === null
          ? r.notificationIdNull && (o.id = null)
          : (o.id = t);
      return o;
    };
  Vi.exports = ku;
});
var ji = St((fh, Fi) => {
  "use strict";
  var Su = (Ms(), Qn(Ds)).v4,
    Bu = $i(),
    Pr = function (n, e) {
      if (!(this instanceof Pr)) return new Pr(n, e);
      e || (e = {}),
        (this.options = {
          reviver: typeof e.reviver < "u" ? e.reviver : null,
          replacer: typeof e.replacer < "u" ? e.replacer : null,
          generator:
            typeof e.generator < "u"
              ? e.generator
              : function () {
                  return Su();
                },
          version: typeof e.version < "u" ? e.version : 2,
          notificationIdNull:
            typeof e.notificationIdNull == "boolean"
              ? e.notificationIdNull
              : !1,
        }),
        (this.callServer = n);
    };
  Fi.exports = Pr;
  Pr.prototype.request = function (n, e, t, r) {
    let s = this,
      o = null,
      i = Array.isArray(n) && typeof e == "function";
    if (this.options.version === 1 && i)
      throw new TypeError("JSON-RPC 1.0 does not support batching");
    if (i || (!i && n && typeof n == "object" && typeof e == "function"))
      (r = e), (o = n);
    else {
      typeof t == "function" && ((r = t), (t = void 0));
      let u = typeof r == "function";
      try {
        o = Bu(n, e, t, {
          generator: this.options.generator,
          version: this.options.version,
          notificationIdNull: this.options.notificationIdNull,
        });
      } catch (d) {
        if (u) return r(d);
        throw d;
      }
      if (!u) return o;
    }
    let a;
    try {
      a = JSON.stringify(o, this.options.replacer);
    } catch (u) {
      return r(u);
    }
    return (
      this.callServer(a, function (u, d) {
        s._parseResponse(u, d, r);
      }),
      o
    );
  };
  Pr.prototype._parseResponse = function (n, e, t) {
    if (n) {
      t(n);
      return;
    }
    if (!e) return t();
    let r;
    try {
      r = JSON.parse(e, this.options.reviver);
    } catch (s) {
      return t(s);
    }
    if (t.length === 3)
      if (Array.isArray(r)) {
        let s = function (i) {
            return typeof i.error < "u";
          },
          o = function (i) {
            return !s(i);
          };
        return t(null, r.filter(s), r.filter(o));
      } else return t(null, r.error, r.result);
    t(null, r);
  };
});
var Gi = St((lh, Vs) => {
  "use strict";
  var Eu = Object.prototype.hasOwnProperty,
    Ve = "~";
  function Tr() {}
  Object.create &&
    ((Tr.prototype = Object.create(null)), new Tr().__proto__ || (Ve = !1));
  function Iu(n, e, t) {
    (this.fn = n), (this.context = e), (this.once = t || !1);
  }
  function Hi(n, e, t, r, s) {
    if (typeof t != "function")
      throw new TypeError("The listener must be a function");
    var o = new Iu(t, r || n, s),
      i = Ve ? Ve + e : e;
    return (
      n._events[i]
        ? n._events[i].fn
          ? (n._events[i] = [n._events[i], o])
          : n._events[i].push(o)
        : ((n._events[i] = o), n._eventsCount++),
      n
    );
  }
  function Tn(n, e) {
    --n._eventsCount === 0 ? (n._events = new Tr()) : delete n._events[e];
  }
  function We() {
    (this._events = new Tr()), (this._eventsCount = 0);
  }
  We.prototype.eventNames = function () {
    var e = [],
      t,
      r;
    if (this._eventsCount === 0) return e;
    for (r in (t = this._events)) Eu.call(t, r) && e.push(Ve ? r.slice(1) : r);
    return Object.getOwnPropertySymbols
      ? e.concat(Object.getOwnPropertySymbols(t))
      : e;
  };
  We.prototype.listeners = function (e) {
    var t = Ve ? Ve + e : e,
      r = this._events[t];
    if (!r) return [];
    if (r.fn) return [r.fn];
    for (var s = 0, o = r.length, i = new Array(o); s < o; s++) i[s] = r[s].fn;
    return i;
  };
  We.prototype.listenerCount = function (e) {
    var t = Ve ? Ve + e : e,
      r = this._events[t];
    return r ? (r.fn ? 1 : r.length) : 0;
  };
  We.prototype.emit = function (e, t, r, s, o, i) {
    var c = Ve ? Ve + e : e;
    if (!this._events[c]) return !1;
    var a = this._events[c],
      u = arguments.length,
      d,
      g;
    if (a.fn) {
      switch ((a.once && this.removeListener(e, a.fn, void 0, !0), u)) {
        case 1:
          return a.fn.call(a.context), !0;
        case 2:
          return a.fn.call(a.context, t), !0;
        case 3:
          return a.fn.call(a.context, t, r), !0;
        case 4:
          return a.fn.call(a.context, t, r, s), !0;
        case 5:
          return a.fn.call(a.context, t, r, s, o), !0;
        case 6:
          return a.fn.call(a.context, t, r, s, o, i), !0;
      }
      for (g = 1, d = new Array(u - 1); g < u; g++) d[g - 1] = arguments[g];
      a.fn.apply(a.context, d);
    } else {
      var y = a.length,
        l;
      for (g = 0; g < y; g++)
        switch ((a[g].once && this.removeListener(e, a[g].fn, void 0, !0), u)) {
          case 1:
            a[g].fn.call(a[g].context);
            break;
          case 2:
            a[g].fn.call(a[g].context, t);
            break;
          case 3:
            a[g].fn.call(a[g].context, t, r);
            break;
          case 4:
            a[g].fn.call(a[g].context, t, r, s);
            break;
          default:
            if (!d)
              for (l = 1, d = new Array(u - 1); l < u; l++)
                d[l - 1] = arguments[l];
            a[g].fn.apply(a[g].context, d);
        }
    }
    return !0;
  };
  We.prototype.on = function (e, t, r) {
    return Hi(this, e, t, r, !1);
  };
  We.prototype.once = function (e, t, r) {
    return Hi(this, e, t, r, !0);
  };
  We.prototype.removeListener = function (e, t, r, s) {
    var o = Ve ? Ve + e : e;
    if (!this._events[o]) return this;
    if (!t) return Tn(this, o), this;
    var i = this._events[o];
    if (i.fn)
      i.fn === t && (!s || i.once) && (!r || i.context === r) && Tn(this, o);
    else {
      for (var c = 0, a = [], u = i.length; c < u; c++)
        (i[c].fn !== t || (s && !i[c].once) || (r && i[c].context !== r)) &&
          a.push(i[c]);
      a.length ? (this._events[o] = a.length === 1 ? a[0] : a) : Tn(this, o);
    }
    return this;
  };
  We.prototype.removeAllListeners = function (e) {
    var t;
    return (
      e
        ? ((t = Ve ? Ve + e : e), this._events[t] && Tn(this, t))
        : ((this._events = new Tr()), (this._eventsCount = 0)),
      this
    );
  };
  We.prototype.off = We.prototype.removeListener;
  We.prototype.addListener = We.prototype.on;
  We.prefixed = Ve;
  We.EventEmitter = We;
  typeof Vs < "u" && (Vs.exports = We);
});
var Cn,
  Yi = le(() => {
    "use strict";
    Cn = nt(Gi(), 1);
  });
function Xi(n, e) {
  return new vu(n, e);
}
var Zi,
  vu,
  _u,
  Ji,
  Qi = le(() => {
    "use strict";
    Zi = nt(es(), 1);
    Yi();
    vu = class extends Cn.default {
      socket;
      constructor(n, e, t) {
        super(),
          (this.socket = new window.WebSocket(n, t)),
          (this.socket.onopen = () => this.emit("open")),
          (this.socket.onmessage = (r) => this.emit("message", r.data)),
          (this.socket.onerror = (r) => this.emit("error", r)),
          (this.socket.onclose = (r) => {
            this.emit("close", r.code, r.reason);
          });
      }
      send(n, e, t) {
        let r = t || e;
        try {
          this.socket.send(n), r();
        } catch (s) {
          r(s);
        }
      }
      close(n, e) {
        this.socket.close(n, e);
      }
      addEventListener(n, e, t) {
        this.socket.addEventListener(n, e, t);
      }
    };
    (_u = class {
      encode(n) {
        return JSON.stringify(n);
      }
      decode(n) {
        return JSON.parse(n);
      }
    }),
      (Ji = class extends Cn.default {
        address;
        rpc_id;
        queue;
        options;
        autoconnect;
        ready;
        reconnect;
        reconnect_timer_id;
        reconnect_interval;
        max_reconnects;
        rest_options;
        current_reconnects;
        generate_request_id;
        socket;
        webSocketFactory;
        dataPack;
        constructor(n, e = "ws://localhost:8080", u = {}, c, a) {
          var d = u,
            {
              autoconnect: t = !0,
              reconnect: r = !0,
              reconnect_interval: s = 1e3,
              max_reconnects: o = 5,
            } = d,
            i = dt(d, [
              "autoconnect",
              "reconnect",
              "reconnect_interval",
              "max_reconnects",
            ]);
          super(),
            (this.webSocketFactory = n),
            (this.queue = {}),
            (this.rpc_id = 0),
            (this.address = e),
            (this.autoconnect = t),
            (this.ready = !1),
            (this.reconnect = r),
            (this.reconnect_timer_id = void 0),
            (this.reconnect_interval = s),
            (this.max_reconnects = o),
            (this.rest_options = i),
            (this.current_reconnects = 0),
            (this.generate_request_id =
              c ||
              (() =>
                typeof this.rpc_id == "number"
                  ? ++this.rpc_id
                  : Number(this.rpc_id) + 1)),
            a ? (this.dataPack = a) : (this.dataPack = new _u()),
            this.autoconnect &&
              this._connect(
                this.address,
                F(
                  {
                    autoconnect: this.autoconnect,
                    reconnect: this.reconnect,
                    reconnect_interval: this.reconnect_interval,
                    max_reconnects: this.max_reconnects,
                  },
                  this.rest_options
                )
              );
        }
        connect() {
          this.socket ||
            this._connect(
              this.address,
              F(
                {
                  autoconnect: this.autoconnect,
                  reconnect: this.reconnect,
                  reconnect_interval: this.reconnect_interval,
                  max_reconnects: this.max_reconnects,
                },
                this.rest_options
              )
            );
        }
        call(n, e, t, r) {
          return (
            !r && typeof t == "object" && ((r = t), (t = null)),
            new Promise((s, o) => {
              if (!this.ready) return o(new Error("socket not ready"));
              let i = this.generate_request_id(n, e),
                c = { jsonrpc: "2.0", method: n, params: e || void 0, id: i };
              this.socket.send(this.dataPack.encode(c), r, (a) => {
                if (a) return o(a);
                (this.queue[i] = { promise: [s, o] }),
                  t &&
                    (this.queue[i].timeout = setTimeout(() => {
                      delete this.queue[i], o(new Error("reply timeout"));
                    }, t));
              });
            })
          );
        }
        login(n) {
          return E(this, null, function* () {
            let e = yield this.call("rpc.login", n);
            if (!e) throw new Error("authentication failed");
            return e;
          });
        }
        listMethods() {
          return E(this, null, function* () {
            return yield this.call("__listMethods");
          });
        }
        notify(n, e) {
          return new Promise((t, r) => {
            if (!this.ready) return r(new Error("socket not ready"));
            let s = { jsonrpc: "2.0", method: n, params: e };
            this.socket.send(this.dataPack.encode(s), (o) => {
              if (o) return r(o);
              t();
            });
          });
        }
        subscribe(n) {
          return E(this, null, function* () {
            typeof n == "string" && (n = [n]);
            let e = yield this.call("rpc.on", n);
            if (typeof n == "string" && e[n] !== "ok")
              throw new Error(
                "Failed subscribing to an event '" + n + "' with: " + e[n]
              );
            return e;
          });
        }
        unsubscribe(n) {
          return E(this, null, function* () {
            typeof n == "string" && (n = [n]);
            let e = yield this.call("rpc.off", n);
            if (typeof n == "string" && e[n] !== "ok")
              throw new Error("Failed unsubscribing from an event with: " + e);
            return e;
          });
        }
        close(n, e) {
          this.socket.close(n || 1e3, e);
        }
        setAutoReconnect(n) {
          this.reconnect = n;
        }
        setReconnectInterval(n) {
          this.reconnect_interval = n;
        }
        setMaxReconnects(n) {
          this.max_reconnects = n;
        }
        _connect(n, e) {
          clearTimeout(this.reconnect_timer_id),
            (this.socket = this.webSocketFactory(n, e)),
            this.socket.addEventListener("open", () => {
              (this.ready = !0),
                this.emit("open"),
                (this.current_reconnects = 0);
            }),
            this.socket.addEventListener("message", ({ data: t }) => {
              t instanceof ArrayBuffer && (t = Zi.Buffer.from(t).toString());
              try {
                t = this.dataPack.decode(t);
              } catch {
                return;
              }
              if (t.notification && this.listeners(t.notification).length) {
                if (!Object.keys(t.params).length)
                  return this.emit(t.notification);
                let r = [t.notification];
                if (t.params.constructor === Object) r.push(t.params);
                else
                  for (let s = 0; s < t.params.length; s++) r.push(t.params[s]);
                return Promise.resolve().then(() => {
                  this.emit.apply(this, r);
                });
              }
              if (!this.queue[t.id])
                return t.method
                  ? Promise.resolve().then(() => {
                      this.emit(t.method, t?.params);
                    })
                  : void 0;
              "error" in t == "result" in t &&
                this.queue[t.id].promise[1](
                  new Error(
                    'Server response malformed. Response must include either "result" or "error", but not both.'
                  )
                ),
                this.queue[t.id].timeout &&
                  clearTimeout(this.queue[t.id].timeout),
                t.error
                  ? this.queue[t.id].promise[1](t.error)
                  : this.queue[t.id].promise[0](t.result),
                delete this.queue[t.id];
            }),
            this.socket.addEventListener("error", (t) => this.emit("error", t)),
            this.socket.addEventListener("close", ({ code: t, reason: r }) => {
              this.ready && setTimeout(() => this.emit("close", t, r), 0),
                (this.ready = !1),
                (this.socket = void 0),
                t !== 1e3 &&
                  (this.current_reconnects++,
                  this.reconnect &&
                    (this.max_reconnects > this.current_reconnects ||
                      this.max_reconnects === 0) &&
                    (this.reconnect_timer_id = setTimeout(
                      () => this._connect(n, e),
                      this.reconnect_interval
                    )));
            });
        }
      });
  });
function xu(n, e, t) {
  let [[r, s], [o, i]] = e,
    c = ea(i * n, t),
    a = ea(-s * n, t),
    u = n - c * r - a * o,
    d = -c * s - a * i,
    g = u < bt,
    y = d < bt;
  g && (u = -u), y && (d = -d);
  let l = Et(Math.ceil(jr(t) / 2)) + cr;
  if (u < bt || u >= l || d < bt || d >= l)
    throw new Error("splitScalar (endomorphism): failed, k=" + n);
  return { k1neg: g, k1: u, k2neg: y, k2: d };
}
function Fs(n) {
  if (!["compact", "recovered", "der"].includes(n))
    throw new Error(
      'Signature format must be "compact", "recovered", or "der"'
    );
  return n;
}
function $s(n, e) {
  let t = {};
  for (let r of Object.keys(e)) t[r] = n[r] === void 0 ? e[r] : n[r];
  return (
    ht(t.lowS, "lowS"),
    ht(t.prehash, "prehash"),
    t.format !== void 0 && Fs(t.format),
    t
  );
}
function ar(n, e) {
  let { BYTES: t } = n,
    r;
  if (typeof e == "bigint") r = e;
  else {
    let s = ge("private key", e);
    try {
      r = n.fromBytes(s);
    } catch {
      throw new Error(
        `invalid private key: expected ui8a of size ${t}, got ${typeof e}`
      );
    }
  }
  if (!n.isValidNot0(r))
    throw new Error("invalid private key: out of range [1..N-1]");
  return r;
}
function Ru(n, e = {}) {
  let t = Yr("weierstrass", n, e),
    { Fp: r, Fn: s } = t,
    o = t.CURVE,
    { h: i, n: c } = o;
  It(
    e,
    {},
    {
      allowInfinityPoint: "boolean",
      clearCofactor: "function",
      isTorsionFree: "function",
      fromBytes: "function",
      toBytes: "function",
      endo: "object",
      wrapPrivateKey: "boolean",
    }
  );
  let { endo: a } = e;
  if (
    a &&
    (!r.is0(o.a) || typeof a.beta != "bigint" || !Array.isArray(a.basises))
  )
    throw new Error(
      'invalid endo: expected "beta": bigint and "basises": array'
    );
  let u = na(r, s);
  function d() {
    if (!r.isOdd)
      throw new Error(
        "compression is not supported: Field does not have .isOdd()"
      );
  }
  function g(V, I, S) {
    let { x: B, y: L } = I.toAffine(),
      N = r.toBytes(B);
    if ((ht(S, "isCompressed"), S)) {
      d();
      let W = !r.isOdd(L);
      return Fe(ra(W), N);
    } else return Fe(Uint8Array.of(4), N, r.toBytes(L));
  }
  function y(V) {
    Ye(V, void 0, "Point");
    let { publicKey: I, publicKeyUncompressed: S } = u,
      B = V.length,
      L = V[0],
      N = V.subarray(1);
    if (B === I && (L === 2 || L === 3)) {
      let W = r.fromBytes(N);
      if (!r.isValid(W)) throw new Error("bad point: is not on curve, wrong x");
      let K = m(W),
        q;
      try {
        q = r.sqrt(K);
      } catch (ke) {
        let he = ke instanceof Error ? ": " + ke.message : "";
        throw new Error("bad point: is not on curve, sqrt error" + he);
      }
      d();
      let j = r.isOdd(q);
      return ((L & 1) === 1) !== j && (q = r.neg(q)), { x: W, y: q };
    } else if (B === S && L === 4) {
      let W = r.BYTES,
        K = r.fromBytes(N.subarray(0, W)),
        q = r.fromBytes(N.subarray(W, W * 2));
      if (!k(K, q)) throw new Error("bad point: is not on curve");
      return { x: K, y: q };
    } else
      throw new Error(
        `bad point: got length ${B}, expected compressed=${I} or uncompressed=${S}`
      );
  }
  let l = e.toBytes || g,
    h = e.fromBytes || y;
  function m(V) {
    let I = r.sqr(V),
      S = r.mul(I, V);
    return r.add(r.add(S, r.mul(V, o.a)), o.b);
  }
  function k(V, I) {
    let S = r.sqr(I),
      B = m(V);
    return r.eql(S, B);
  }
  if (!k(o.Gx, o.Gy)) throw new Error("bad curve params: generator point");
  let w = r.mul(r.pow(o.a, On), Au),
    R = r.mul(r.sqr(o.b), BigInt(27));
  if (r.is0(r.add(w, R))) throw new Error("bad curve params: a or b");
  function x(V, I, S = !1) {
    if (!r.isValid(I) || (S && r.is0(I)))
      throw new Error(`bad point coordinate ${V}`);
    return I;
  }
  function U(V) {
    if (!(V instanceof _)) throw new Error("ProjectivePoint expected");
  }
  function J(V) {
    if (!a || !a.basises) throw new Error("no endo");
    return xu(V, a.basises, s.ORDER);
  }
  let ee = Xt((V, I) => {
      let { X: S, Y: B, Z: L } = V;
      if (r.eql(L, r.ONE)) return { x: S, y: B };
      let N = V.is0();
      I == null && (I = N ? r.ONE : r.inv(L));
      let W = r.mul(S, I),
        K = r.mul(B, I),
        q = r.mul(L, I);
      if (N) return { x: r.ZERO, y: r.ZERO };
      if (!r.eql(q, r.ONE)) throw new Error("invZ was invalid");
      return { x: W, y: K };
    }),
    te = Xt((V) => {
      if (V.is0()) {
        if (e.allowInfinityPoint && !r.is0(V.Y)) return;
        throw new Error("bad point: ZERO");
      }
      let { x: I, y: S } = V.toAffine();
      if (!r.isValid(I) || !r.isValid(S))
        throw new Error("bad point: x or y not field elements");
      if (!k(I, S)) throw new Error("bad point: equation left != right");
      if (!V.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
      return !0;
    });
  function re(V, I, S, B, L) {
    return (
      (S = new _(r.mul(S.X, V), S.Y, S.Z)),
      (I = kr(B, I)),
      (S = kr(L, S)),
      I.add(S)
    );
  }
  class _ {
    constructor(I, S, B) {
      (this.X = x("x", I)),
        (this.Y = x("y", S, !0)),
        (this.Z = x("z", B)),
        Object.freeze(this);
    }
    static CURVE() {
      return o;
    }
    static fromAffine(I) {
      let { x: S, y: B } = I || {};
      if (!I || !r.isValid(S) || !r.isValid(B))
        throw new Error("invalid affine point");
      if (I instanceof _) throw new Error("projective point not allowed");
      return r.is0(S) && r.is0(B) ? _.ZERO : new _(S, B, r.ONE);
    }
    static fromBytes(I) {
      let S = _.fromAffine(h(Ye(I, void 0, "point")));
      return S.assertValidity(), S;
    }
    static fromHex(I) {
      return _.fromBytes(ge("pointHex", I));
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    precompute(I = 8, S = !0) {
      return H.createCache(this, I), S || this.multiply(On), this;
    }
    assertValidity() {
      te(this);
    }
    hasEvenY() {
      let { y: I } = this.toAffine();
      if (!r.isOdd) throw new Error("Field doesn't support isOdd");
      return !r.isOdd(I);
    }
    equals(I) {
      U(I);
      let { X: S, Y: B, Z: L } = this,
        { X: N, Y: W, Z: K } = I,
        q = r.eql(r.mul(S, K), r.mul(N, L)),
        j = r.eql(r.mul(B, K), r.mul(W, L));
      return q && j;
    }
    negate() {
      return new _(this.X, r.neg(this.Y), this.Z);
    }
    double() {
      let { a: I, b: S } = o,
        B = r.mul(S, On),
        { X: L, Y: N, Z: W } = this,
        K = r.ZERO,
        q = r.ZERO,
        j = r.ZERO,
        G = r.mul(L, L),
        ke = r.mul(N, N),
        he = r.mul(W, W),
        se = r.mul(L, N);
      return (
        (se = r.add(se, se)),
        (j = r.mul(L, W)),
        (j = r.add(j, j)),
        (K = r.mul(I, j)),
        (q = r.mul(B, he)),
        (q = r.add(K, q)),
        (K = r.sub(ke, q)),
        (q = r.add(ke, q)),
        (q = r.mul(K, q)),
        (K = r.mul(se, K)),
        (j = r.mul(B, j)),
        (he = r.mul(I, he)),
        (se = r.sub(G, he)),
        (se = r.mul(I, se)),
        (se = r.add(se, j)),
        (j = r.add(G, G)),
        (G = r.add(j, G)),
        (G = r.add(G, he)),
        (G = r.mul(G, se)),
        (q = r.add(q, G)),
        (he = r.mul(N, W)),
        (he = r.add(he, he)),
        (G = r.mul(he, se)),
        (K = r.sub(K, G)),
        (j = r.mul(he, ke)),
        (j = r.add(j, j)),
        (j = r.add(j, j)),
        new _(K, q, j)
      );
    }
    add(I) {
      U(I);
      let { X: S, Y: B, Z: L } = this,
        { X: N, Y: W, Z: K } = I,
        q = r.ZERO,
        j = r.ZERO,
        G = r.ZERO,
        ke = o.a,
        he = r.mul(o.b, On),
        se = r.mul(S, N),
        Se = r.mul(B, W),
        ve = r.mul(L, K),
        $e = r.add(S, B),
        Be = r.add(N, W);
      ($e = r.mul($e, Be)),
        (Be = r.add(se, Se)),
        ($e = r.sub($e, Be)),
        (Be = r.add(S, L));
      let Ce = r.add(N, K);
      return (
        (Be = r.mul(Be, Ce)),
        (Ce = r.add(se, ve)),
        (Be = r.sub(Be, Ce)),
        (Ce = r.add(B, L)),
        (q = r.add(W, K)),
        (Ce = r.mul(Ce, q)),
        (q = r.add(Se, ve)),
        (Ce = r.sub(Ce, q)),
        (G = r.mul(ke, Be)),
        (q = r.mul(he, ve)),
        (G = r.add(q, G)),
        (q = r.sub(Se, G)),
        (G = r.add(Se, G)),
        (j = r.mul(q, G)),
        (Se = r.add(se, se)),
        (Se = r.add(Se, se)),
        (ve = r.mul(ke, ve)),
        (Be = r.mul(he, Be)),
        (Se = r.add(Se, ve)),
        (ve = r.sub(se, ve)),
        (ve = r.mul(ke, ve)),
        (Be = r.add(Be, ve)),
        (se = r.mul(Se, Be)),
        (j = r.add(j, se)),
        (se = r.mul(Ce, Be)),
        (q = r.mul($e, q)),
        (q = r.sub(q, se)),
        (se = r.mul($e, Se)),
        (G = r.mul(Ce, G)),
        (G = r.add(G, se)),
        new _(q, j, G)
      );
    }
    subtract(I) {
      return this.add(I.negate());
    }
    is0() {
      return this.equals(_.ZERO);
    }
    multiply(I) {
      let { endo: S } = e;
      if (!s.isValidNot0(I)) throw new Error("invalid scalar: out of range");
      let B,
        L,
        N = (W) => H.cached(this, W, (K) => yt(_, K));
      if (S) {
        let { k1neg: W, k1: K, k2neg: q, k2: j } = J(I),
          { p: G, f: ke } = N(K),
          { p: he, f: se } = N(j);
        (L = ke.add(se)), (B = re(S.beta, G, he, W, q));
      } else {
        let { p: W, f: K } = N(I);
        (B = W), (L = K);
      }
      return yt(_, [B, L])[0];
    }
    multiplyUnsafe(I) {
      let { endo: S } = e,
        B = this;
      if (!s.isValid(I)) throw new Error("invalid scalar: out of range");
      if (I === bt || B.is0()) return _.ZERO;
      if (I === cr) return B;
      if (H.hasCache(this)) return this.multiply(I);
      if (S) {
        let { k1neg: L, k1: N, k2neg: W, k2: K } = J(I),
          { p1: q, p2: j } = ti(_, B, N, K);
        return re(S.beta, q, j, L, W);
      } else return H.unsafe(B, I);
    }
    multiplyAndAddUnsafe(I, S, B) {
      let L = this.multiplyUnsafe(S).add(I.multiplyUnsafe(B));
      return L.is0() ? void 0 : L;
    }
    toAffine(I) {
      return ee(this, I);
    }
    isTorsionFree() {
      let { isTorsionFree: I } = e;
      return i === cr ? !0 : I ? I(_, this) : H.unsafe(this, c).is0();
    }
    clearCofactor() {
      let { clearCofactor: I } = e;
      return i === cr ? this : I ? I(_, this) : this.multiplyUnsafe(i);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(i).is0();
    }
    toBytes(I = !0) {
      return ht(I, "isCompressed"), this.assertValidity(), l(_, this, I);
    }
    toHex(I = !0) {
      return et(this.toBytes(I));
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
    get px() {
      return this.X;
    }
    get py() {
      return this.X;
    }
    get pz() {
      return this.Z;
    }
    toRawBytes(I = !0) {
      return this.toBytes(I);
    }
    _setWindowSize(I) {
      this.precompute(I);
    }
    static normalizeZ(I) {
      return yt(_, I);
    }
    static msm(I, S) {
      return Gr(_, s, I, S);
    }
    static fromPrivateKey(I) {
      return _.BASE.multiply(ar(s, I));
    }
  }
  (_.BASE = new _(o.Gx, o.Gy, r.ONE)),
    (_.ZERO = new _(r.ZERO, r.ONE, r.ZERO)),
    (_.Fp = r),
    (_.Fn = s);
  let M = s.BITS,
    H = new er(_, e.endo ? Math.ceil(M / 2) : M);
  return _.BASE.precompute(8), _;
}
function ra(n) {
  return Uint8Array.of(n ? 2 : 3);
}
function na(n, e) {
  return {
    secretKey: e.BYTES,
    publicKey: 1 + n.BYTES,
    publicKeyUncompressed: 1 + 2 * n.BYTES,
    publicKeyHasPrefix: !0,
    signature: 2 * e.BYTES,
  };
}
function Lu(n, e = {}) {
  let { Fn: t } = n,
    r = e.randomBytes || Yt,
    s = Object.assign(na(n.Fp, t), { seed: hs(t.ORDER) });
  function o(l) {
    try {
      return !!ar(t, l);
    } catch {
      return !1;
    }
  }
  function i(l, h) {
    let { publicKey: m, publicKeyUncompressed: k } = s;
    try {
      let w = l.length;
      return (h === !0 && w !== m) || (h === !1 && w !== k)
        ? !1
        : !!n.fromBytes(l);
    } catch {
      return !1;
    }
  }
  function c(l = r(s.seed)) {
    return ys(Ye(l, s.seed, "seed"), t.ORDER);
  }
  function a(l, h = !0) {
    return n.BASE.multiply(ar(t, l)).toBytes(h);
  }
  function u(l) {
    let h = c(l);
    return { secretKey: h, publicKey: a(h) };
  }
  function d(l) {
    if (typeof l == "bigint") return !1;
    if (l instanceof n) return !0;
    let { secretKey: h, publicKey: m, publicKeyUncompressed: k } = s;
    if (t.allowedLengths || h === m) return;
    let w = ge("key", l).length;
    return w === m || w === k;
  }
  function g(l, h, m = !0) {
    if (d(l) === !0) throw new Error("first arg must be private key");
    if (d(h) === !1) throw new Error("second arg must be public key");
    let k = ar(t, l);
    return n.fromHex(h).multiply(k).toBytes(m);
  }
  return Object.freeze({
    getPublicKey: a,
    getSharedSecret: g,
    keygen: u,
    Point: n,
    utils: {
      isValidSecretKey: o,
      isValidPublicKey: i,
      randomSecretKey: c,
      isValidPrivateKey: o,
      randomPrivateKey: c,
      normPrivateKeyToScalar: (l) => ar(t, l),
      precompute(l = 8, h = n.BASE) {
        return h.precompute(l, !1);
      },
    },
    lengths: s,
  });
}
function Pu(n, e, t = {}) {
  Lo(e),
    It(
      t,
      {},
      {
        hmac: "function",
        lowS: "boolean",
        randomBytes: "function",
        bits2int: "function",
        bits2int_modN: "function",
      }
    );
  let r = t.randomBytes || Yt,
    s = t.hmac || ((S, ...B) => No(e, S, Fe(...B))),
    { Fp: o, Fn: i } = n,
    { ORDER: c, BITS: a } = i,
    {
      keygen: u,
      getPublicKey: d,
      getSharedSecret: g,
      utils: y,
      lengths: l,
    } = Lu(n, t),
    h = {
      prehash: !1,
      lowS: typeof t.lowS == "boolean" ? t.lowS : !1,
      format: void 0,
      extraEntropy: !1,
    },
    m = "compact";
  function k(S) {
    let B = c >> cr;
    return S > B;
  }
  function w(S, B) {
    if (!i.isValidNot0(B))
      throw new Error(`invalid signature ${S}: out of range 1..Point.Fn.ORDER`);
    return B;
  }
  function R(S, B) {
    Fs(B);
    let L = l.signature,
      N = B === "compact" ? L : B === "recovered" ? L + 1 : void 0;
    return Ye(S, N, `${B} signature`);
  }
  class x {
    constructor(B, L, N) {
      (this.r = w("r", B)),
        (this.s = w("s", L)),
        N != null && (this.recovery = N),
        Object.freeze(this);
    }
    static fromBytes(B, L = m) {
      R(B, L);
      let N;
      if (L === "der") {
        let { r: j, s: G } = mt.toSig(Ye(B));
        return new x(j, G);
      }
      L === "recovered" && ((N = B[0]), (L = "compact"), (B = B.subarray(1)));
      let W = i.BYTES,
        K = B.subarray(0, W),
        q = B.subarray(W, W * 2);
      return new x(i.fromBytes(K), i.fromBytes(q), N);
    }
    static fromHex(B, L) {
      return this.fromBytes(Ct(B), L);
    }
    addRecoveryBit(B) {
      return new x(this.r, this.s, B);
    }
    recoverPublicKey(B) {
      let L = o.ORDER,
        { r: N, s: W, recovery: K } = this;
      if (K == null || ![0, 1, 2, 3].includes(K))
        throw new Error("recovery id invalid");
      if (c * ta < L && K > 1)
        throw new Error("recovery id is ambiguous for h>1 curve");
      let j = K === 2 || K === 3 ? N + c : N;
      if (!o.isValid(j)) throw new Error("recovery id 2 or 3 invalid");
      let G = o.toBytes(j),
        ke = n.fromBytes(Fe(ra((K & 1) === 0), G)),
        he = i.inv(j),
        se = J(ge("msgHash", B)),
        Se = i.create(-se * he),
        ve = i.create(W * he),
        $e = n.BASE.multiplyUnsafe(Se).add(ke.multiplyUnsafe(ve));
      if ($e.is0()) throw new Error("point at infinify");
      return $e.assertValidity(), $e;
    }
    hasHighS() {
      return k(this.s);
    }
    toBytes(B = m) {
      if ((Fs(B), B === "der")) return Ct(mt.hexFromSig(this));
      let L = i.toBytes(this.r),
        N = i.toBytes(this.s);
      if (B === "recovered") {
        if (this.recovery == null)
          throw new Error("recovery bit must be present");
        return Fe(Uint8Array.of(this.recovery), L, N);
      }
      return Fe(L, N);
    }
    toHex(B) {
      return et(this.toBytes(B));
    }
    assertValidity() {}
    static fromCompact(B) {
      return x.fromBytes(ge("sig", B), "compact");
    }
    static fromDER(B) {
      return x.fromBytes(ge("sig", B), "der");
    }
    normalizeS() {
      return this.hasHighS()
        ? new x(this.r, i.neg(this.s), this.recovery)
        : this;
    }
    toDERRawBytes() {
      return this.toBytes("der");
    }
    toDERHex() {
      return et(this.toBytes("der"));
    }
    toCompactRawBytes() {
      return this.toBytes("compact");
    }
    toCompactHex() {
      return et(this.toBytes("compact"));
    }
  }
  let U =
      t.bits2int ||
      function (B) {
        if (B.length > 8192) throw new Error("input is too large");
        let L = Zt(B),
          N = B.length * 8 - a;
        return N > 0 ? L >> BigInt(N) : L;
      },
    J =
      t.bits2int_modN ||
      function (B) {
        return i.create(U(B));
      },
    ee = Et(a);
  function te(S) {
    return mr("num < 2^" + a, S, bt, ee), i.toBytes(S);
  }
  function re(S, B) {
    return (
      Ye(S, void 0, "message"), B ? Ye(e(S), void 0, "prehashed message") : S
    );
  }
  function _(S, B, L) {
    if (["recovered", "canonical"].some((Se) => Se in L))
      throw new Error("sign() legacy options not supported");
    let { lowS: N, prehash: W, extraEntropy: K } = $s(L, h);
    S = re(S, W);
    let q = J(S),
      j = ar(i, B),
      G = [te(j), te(q)];
    if (K != null && K !== !1) {
      let Se = K === !0 ? r(l.secretKey) : K;
      G.push(ge("extraEntropy", Se));
    }
    let ke = Fe(...G),
      he = q;
    function se(Se) {
      let ve = U(Se);
      if (!i.isValidNot0(ve)) return;
      let $e = i.inv(ve),
        Be = n.BASE.multiply(ve).toAffine(),
        Ce = i.create(Be.x);
      if (Ce === bt) return;
      let $r = i.create($e * i.create(he + Ce * j));
      if ($r === bt) return;
      let Ao = (Be.x === Ce ? 0 : 2) | Number(Be.y & cr),
        Ro = $r;
      return N && k($r) && ((Ro = i.neg($r)), (Ao ^= 1)), new x(Ce, Ro, Ao);
    }
    return { seed: ke, k2sig: se };
  }
  function M(S, B, L = {}) {
    S = ge("message", S);
    let { seed: N, k2sig: W } = _(S, B, L);
    return Ko(e.outputLen, i.BYTES, s)(N, W);
  }
  function H(S) {
    let B,
      L = typeof S == "string" || Bt(S),
      N =
        !L &&
        S !== null &&
        typeof S == "object" &&
        typeof S.r == "bigint" &&
        typeof S.s == "bigint";
    if (!L && !N)
      throw new Error(
        "invalid signature, expected Uint8Array, hex string or Signature instance"
      );
    if (N) B = new x(S.r, S.s);
    else if (L) {
      try {
        B = x.fromBytes(ge("sig", S), "der");
      } catch (W) {
        if (!(W instanceof mt.Err)) throw W;
      }
      if (!B)
        try {
          B = x.fromBytes(ge("sig", S), "compact");
        } catch {
          return !1;
        }
    }
    return B || !1;
  }
  function V(S, B, L, N = {}) {
    let { lowS: W, prehash: K, format: q } = $s(N, h);
    if (
      ((L = ge("publicKey", L)), (B = re(ge("message", B), K)), "strict" in N)
    )
      throw new Error("options.strict was renamed to lowS");
    let j = q === void 0 ? H(S) : x.fromBytes(ge("sig", S), q);
    if (j === !1) return !1;
    try {
      let G = n.fromBytes(L);
      if (W && j.hasHighS()) return !1;
      let { r: ke, s: he } = j,
        se = J(B),
        Se = i.inv(he),
        ve = i.create(se * Se),
        $e = i.create(ke * Se),
        Be = n.BASE.multiplyUnsafe(ve).add(G.multiplyUnsafe($e));
      return Be.is0() ? !1 : i.create(Be.x) === ke;
    } catch {
      return !1;
    }
  }
  function I(S, B, L = {}) {
    let { prehash: N } = $s(L, h);
    return (
      (B = re(B, N)), x.fromBytes(S, "recovered").recoverPublicKey(B).toBytes()
    );
  }
  return Object.freeze({
    keygen: u,
    getPublicKey: d,
    getSharedSecret: g,
    utils: y,
    lengths: l,
    Point: n,
    sign: M,
    verify: V,
    recoverPublicKey: I,
    Signature: x,
    hash: e,
  });
}
function Tu(n) {
  let e = { a: n.a, b: n.b, p: n.Fp.ORDER, n: n.n, h: n.h, Gx: n.Gx, Gy: n.Gy },
    t = n.Fp,
    r = n.allowedPrivateKeyLengths
      ? Array.from(
          new Set(n.allowedPrivateKeyLengths.map((i) => Math.ceil(i / 2)))
        )
      : void 0,
    s = Je(e.n, {
      BITS: n.nBitLength,
      allowedLengths: r,
      modFromBytes: n.wrapPrivateKey,
    }),
    o = {
      Fp: t,
      Fn: s,
      allowInfinityPoint: n.allowInfinityPoint,
      endo: n.endo,
      isTorsionFree: n.isTorsionFree,
      clearCofactor: n.clearCofactor,
      fromBytes: n.fromBytes,
      toBytes: n.toBytes,
    };
  return { CURVE: e, curveOpts: o };
}
function Cu(n) {
  let { CURVE: e, curveOpts: t } = Tu(n),
    r = {
      hmac: n.hmac,
      randomBytes: n.randomBytes,
      lowS: n.lowS,
      bits2int: n.bits2int,
      bits2int_modN: n.bits2int_modN,
    };
  return { CURVE: e, curveOpts: t, hash: n.hash, ecdsaOpts: r };
}
function Ou(n, e) {
  let t = e.Point;
  return Object.assign({}, e, {
    ProjectivePoint: t,
    CURVE: Object.assign({}, n, Hr(t.Fn.ORDER, t.Fn.BITS)),
  });
}
function sa(n) {
  let { CURVE: e, curveOpts: t, hash: r, ecdsaOpts: s } = Cu(n),
    o = Ru(e, t),
    i = Pu(o, r, s);
  return Ou(n, i);
}
var ea,
  js,
  mt,
  bt,
  cr,
  ta,
  On,
  Au,
  oa = le(() => {
    "use strict";
    ec();
    ns();
    br();
    bs();
    Jt();
    ea = (n, e) => (n + (n >= 0 ? e : -e) / ta) / e;
    (js = class extends Error {
      constructor(e = "") {
        super(e);
      }
    }),
      (mt = {
        Err: js,
        _tlv: {
          encode: (n, e) => {
            let { Err: t } = mt;
            if (n < 0 || n > 256) throw new t("tlv.encode: wrong tag");
            if (e.length & 1) throw new t("tlv.encode: unpadded data");
            let r = e.length / 2,
              s = gr(r);
            if ((s.length / 2) & 128)
              throw new t("tlv.encode: long form length too big");
            let o = r > 127 ? gr((s.length / 2) | 128) : "";
            return gr(n) + o + s + e;
          },
          decode(n, e) {
            let { Err: t } = mt,
              r = 0;
            if (n < 0 || n > 256) throw new t("tlv.encode: wrong tag");
            if (e.length < 2 || e[r++] !== n)
              throw new t("tlv.decode: wrong tlv");
            let s = e[r++],
              o = !!(s & 128),
              i = 0;
            if (!o) i = s;
            else {
              let a = s & 127;
              if (!a)
                throw new t(
                  "tlv.decode(long): indefinite length not supported"
                );
              if (a > 4)
                throw new t("tlv.decode(long): byte length is too big");
              let u = e.subarray(r, r + a);
              if (u.length !== a)
                throw new t("tlv.decode: length bytes not complete");
              if (u[0] === 0)
                throw new t("tlv.decode(long): zero leftmost byte");
              for (let d of u) i = (i << 8) | d;
              if (((r += a), i < 128))
                throw new t("tlv.decode(long): not minimal encoding");
            }
            let c = e.subarray(r, r + i);
            if (c.length !== i) throw new t("tlv.decode: wrong value length");
            return { v: c, l: e.subarray(r + i) };
          },
        },
        _int: {
          encode(n) {
            let { Err: e } = mt;
            if (n < bt)
              throw new e("integer: negative integers are not allowed");
            let t = gr(n);
            if ((Number.parseInt(t[0], 16) & 8 && (t = "00" + t), t.length & 1))
              throw new e("unexpected DER parsing assertion: unpadded hex");
            return t;
          },
          decode(n) {
            let { Err: e } = mt;
            if (n[0] & 128) throw new e("invalid signature integer: negative");
            if (n[0] === 0 && !(n[1] & 128))
              throw new e(
                "invalid signature integer: unnecessary leading zero"
              );
            return Zt(n);
          },
        },
        toSig(n) {
          let { Err: e, _int: t, _tlv: r } = mt,
            s = ge("signature", n),
            { v: o, l: i } = r.decode(48, s);
          if (i.length)
            throw new e("invalid signature: left bytes after parsing");
          let { v: c, l: a } = r.decode(2, o),
            { v: u, l: d } = r.decode(2, a);
          if (d.length)
            throw new e("invalid signature: left bytes after parsing");
          return { r: t.decode(c), s: t.decode(u) };
        },
        hexFromSig(n) {
          let { _tlv: e, _int: t } = mt,
            r = e.encode(2, t.encode(n.r)),
            s = e.encode(2, t.encode(n.s)),
            o = r + s;
          return e.encode(48, o);
        },
      }),
      (bt = BigInt(0)),
      (cr = BigInt(1)),
      (ta = BigInt(2)),
      (On = BigInt(3)),
      (Au = BigInt(4));
  });
function ia(n, e) {
  let t = (r) => sa(Y(F({}, n), { hash: r }));
  return Y(F({}, t(e)), { create: t });
}
var aa = le(() => {
  "use strict";
  oa();
});
function Uu(n) {
  let e = Gs.p,
    t = BigInt(3),
    r = BigInt(6),
    s = BigInt(11),
    o = BigInt(22),
    i = BigInt(23),
    c = BigInt(44),
    a = BigInt(88),
    u = (n * n * n) % e,
    d = (u * u * n) % e,
    g = (me(d, t, e) * d) % e,
    y = (me(g, t, e) * d) % e,
    l = (me(y, ca, e) * u) % e,
    h = (me(l, s, e) * l) % e,
    m = (me(h, o, e) * h) % e,
    k = (me(m, c, e) * m) % e,
    w = (me(k, a, e) * k) % e,
    R = (me(w, c, e) * m) % e,
    x = (me(R, t, e) * d) % e,
    U = (me(x, i, e) * h) % e,
    J = (me(U, r, e) * u) % e,
    ee = me(J, ca, e);
  if (!Hs.eql(Hs.sqr(ee), n)) throw new Error("Cannot find square root");
  return ee;
}
var Gs,
  Nu,
  ca,
  Hs,
  Nn,
  ua = le(() => {
    "use strict";
    Co();
    aa();
    Jt();
    (Gs = {
      p: BigInt(
        "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
      ),
      n: BigInt(
        "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
      ),
      h: BigInt(1),
      a: BigInt(0),
      b: BigInt(7),
      Gx: BigInt(
        "0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
      ),
      Gy: BigInt(
        "0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
      ),
    }),
      (Nu = {
        beta: BigInt(
          "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
        ),
        basises: [
          [
            BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
            -BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
          ],
          [
            BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
            BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
          ],
        ],
      }),
      (ca = BigInt(2));
    (Hs = Je(Gs.p, { sqrt: Uu })),
      (Nn = ia(Y(F({}, Gs), { Fp: Hs, lowS: !0, endo: Nu }), Po));
  });
var Fl = {};
Jn(Fl, {
  Account: () => no,
  AddressLookupTableAccount: () => qr,
  AddressLookupTableInstruction: () => mo,
  AddressLookupTableProgram: () => Dr,
  Authorized: () => Hn,
  BLOCKHASH_CACHE_TIMEOUT_MS: () => Ka,
  BPF_LOADER_DEPRECATED_PROGRAM_ID: () => Wu,
  BPF_LOADER_PROGRAM_ID: () => of,
  BpfLoader: () => fo,
  COMPUTE_BUDGET_INSTRUCTION_LAYOUTS: () => ct,
  ComputeBudgetInstruction: () => bo,
  ComputeBudgetProgram: () => Mr,
  Connection: () => go,
  Ed25519Program: () => Fn,
  Enum: () => ro,
  EpochSchedule: () => Mn,
  FeeCalculatorLayout: () => Na,
  Keypair: () => $n,
  LAMPORTS_PER_SOL: () => $l,
  LOOKUP_TABLE_INSTRUCTION_LAYOUTS: () => kt,
  Loader: () => uo,
  Lockup: () => jt,
  MAX_SEED_LENGTH: () => Pa,
  Message: () => lt,
  MessageAccountKeys: () => $t,
  MessageV0: () => ur,
  NONCE_ACCOUNT_LENGTH: () => ao,
  NonceAccount: () => Dn,
  PACKET_DATA_SIZE: () => Tt,
  PUBLIC_KEY_LENGTH: () => ft,
  PublicKey: () => T,
  SIGNATURE_LENGTH_IN_BYTES: () => Ur,
  SOLANA_SCHEMA: () => Or,
  STAKE_CONFIG_ID: () => Ya,
  STAKE_INSTRUCTION_LAYOUTS: () => Ae,
  SYSTEM_INSTRUCTION_LAYOUTS: () => pe,
  SYSVAR_CLOCK_PUBKEY: () => it,
  SYSVAR_EPOCH_SCHEDULE_PUBKEY: () => Zu,
  SYSVAR_INSTRUCTIONS_PUBKEY: () => Xu,
  SYSVAR_RECENT_BLOCKHASHES_PUBKEY: () => zn,
  SYSVAR_RENT_PUBKEY: () => fr,
  SYSVAR_REWARDS_PUBKEY: () => Ju,
  SYSVAR_SLOT_HASHES_PUBKEY: () => Qu,
  SYSVAR_SLOT_HISTORY_PUBKEY: () => ef,
  SYSVAR_STAKE_HISTORY_PUBKEY: () => Kn,
  Secp256k1Program: () => jn,
  SendTransactionError: () => Ft,
  SolanaJSONRPCError: () => z,
  SolanaJSONRPCErrorCode: () => tf,
  StakeAuthorizationLayout: () => Nl,
  StakeInstruction: () => wo,
  StakeProgram: () => dr,
  Struct: () => Nr,
  SystemInstruction: () => co,
  SystemProgram: () => Te,
  Transaction: () => ue,
  TransactionExpiredBlockheightExceededError: () => zr,
  TransactionExpiredNonceInvalidError: () => Pt,
  TransactionExpiredTimeoutError: () => Kr,
  TransactionInstruction: () => fe,
  TransactionMessage: () => so,
  TransactionStatus: () => wt,
  VALIDATOR_INFO_KEY: () => Za,
  VERSION_PREFIX_MASK: () => Yn,
  VOTE_PROGRAM_ID: () => Kl,
  ValidatorInfo: () => So,
  VersionedMessage: () => Io,
  VersionedTransaction: () => oo,
  VoteAccount: () => Bo,
  VoteAuthorizationLayout: () => Ul,
  VoteInit: () => Gn,
  VoteInstruction: () => ko,
  VoteProgram: () => hr,
  clusterApiUrl: () => Ml,
  sendAndConfirmRawTransaction: () => Vl,
  sendAndConfirmTransaction: () => io,
});
function la(n) {
  try {
    return zt.ExtendedPoint.fromHex(n), !0;
  } catch {
    return !1;
  }
}
function qu(n) {
  return n._bn !== void 0;
}
function Ta(n, e) {
  let t = (s) => {
      if (s.span >= 0) return s.span;
      if (typeof s.alloc == "function") return s.alloc(e[s.property]);
      if ("count" in s && "elementLayout" in s) {
        let o = e[s.property];
        if (Array.isArray(o)) return o.length * t(s.elementLayout);
      } else if ("fields" in s) return Ta({ layout: s }, e[s.property]);
      return 0;
    },
    r = 0;
  return (
    n.layout.fields.forEach((s) => {
      r += t(s);
    }),
    r
  );
}
function He(n) {
  let e = 0,
    t = 0;
  for (;;) {
    let r = n.shift();
    if (((e |= (r & 127) << (t * 7)), (t += 1), !(r & 128))) break;
  }
  return e;
}
function Xe(n, e) {
  let t = e;
  for (;;) {
    let r = t & 127;
    if (((t >>= 7), t == 0)) {
      n.push(r);
      break;
    } else (r |= 128), n.push(r);
  }
}
function ie(n, e) {
  if (!n) throw new Error(e || "Assertion failed");
}
function at(n) {
  if (n.length === 0) throw new Error(Ca);
  return n.shift();
}
function Ge(n, ...e) {
  let [t] = e;
  if (e.length === 2 ? t + (e[1] ?? 0) > n.length : t >= n.length)
    throw new Error(Ca);
  return n.splice(...e);
}
function io(n, e, t, r) {
  return E(this, null, function* () {
    let s = r && {
        skipPreflight: r.skipPreflight,
        preflightCommitment: r.preflightCommitment || r.commitment,
        maxRetries: r.maxRetries,
        minContextSlot: r.minContextSlot,
      },
      o = yield n.sendTransaction(e, t, s),
      i;
    if (e.recentBlockhash != null && e.lastValidBlockHeight != null)
      i = (yield n.confirmTransaction(
        {
          abortSignal: r?.abortSignal,
          signature: o,
          blockhash: e.recentBlockhash,
          lastValidBlockHeight: e.lastValidBlockHeight,
        },
        r && r.commitment
      )).value;
    else if (e.minNonceContextSlot != null && e.nonceInfo != null) {
      let { nonceInstruction: c } = e.nonceInfo,
        a = c.keys[0].pubkey;
      i = (yield n.confirmTransaction(
        {
          abortSignal: r?.abortSignal,
          minContextSlot: e.minNonceContextSlot,
          nonceAccountPubkey: a,
          nonceValue: e.nonceInfo.nonce,
          signature: o,
        },
        r && r.commitment
      )).value;
    } else
      r?.abortSignal != null &&
        console.warn(
          "sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."
        ),
        (i = (yield n.confirmTransaction(o, r && r.commitment)).value);
    if (i.err)
      throw o != null
        ? new Ft({
            action: "send",
            signature: o,
            transactionMessage: `Status: (${JSON.stringify(i)})`,
          })
        : new Error(`Transaction ${o} failed (${JSON.stringify(i)})`);
    return o;
  });
}
function Mt(n) {
  return new Promise((e) => setTimeout(e, n));
}
function ne(n, e) {
  let t = n.layout.span >= 0 ? n.layout.span : Ta(n, e),
    r = $.Buffer.alloc(t),
    s = Object.assign({ instruction: n.index }, e);
  return n.layout.encode(s, r), r;
}
function ce(n, e) {
  let t;
  try {
    t = n.layout.decode(e);
  } catch (r) {
    throw new Error("invalid instruction; " + r);
  }
  if (t.instruction !== n.index)
    throw new Error(
      `invalid instruction; instruction index mismatch ${t.instruction} != ${n.index}`
    );
  return t;
}
function af(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
function cf() {
  if (ha) return Ys;
  ha = 1;
  var n = Object.prototype.toString,
    e =
      Object.keys ||
      function (r) {
        var s = [];
        for (var o in r) s.push(o);
        return s;
      };
  function t(r, s) {
    var o, i, c, a, u, d, g;
    if (r === !0) return "true";
    if (r === !1) return "false";
    switch (typeof r) {
      case "object":
        if (r === null) return null;
        if (r.toJSON && typeof r.toJSON == "function") return t(r.toJSON(), s);
        if (((g = n.call(r)), g === "[object Array]")) {
          for (c = "[", i = r.length - 1, o = 0; o < i; o++)
            c += t(r[o], !0) + ",";
          return i > -1 && (c += t(r[o], !0)), c + "]";
        } else if (g === "[object Object]") {
          for (a = e(r).sort(), i = a.length, c = "", o = 0; o < i; )
            (u = a[o]),
              (d = t(r[u], !1)),
              d !== void 0 &&
                (c && (c += ","), (c += JSON.stringify(u) + ":" + d)),
              o++;
          return "{" + c + "}";
        } else return JSON.stringify(r);
      case "function":
      case "undefined":
        return s ? null : void 0;
      case "string":
        return JSON.stringify(r);
      default:
        return isFinite(r) ? r : null;
    }
  }
  return (
    (Ys = function (r) {
      var s = t(r, !1);
      if (s !== void 0) return "" + s;
    }),
    Ys
  );
}
function Zs(n) {
  let e = 0;
  for (; n > 1; ) (n /= 2), e++;
  return e;
}
function ff(n) {
  return n === 0
    ? 1
    : (n--,
      (n |= n >> 1),
      (n |= n >> 2),
      (n |= n >> 4),
      (n |= n >> 8),
      (n |= n >> 16),
      (n |= n >> 32),
      n + 1);
}
function df(n, e) {
  let t;
  try {
    t = n.layout.decode(e);
  } catch (r) {
    throw new Error("invalid instruction; " + r);
  }
  if (t.typeIndex !== n.index)
    throw new Error(
      `invalid account data; account type mismatch ${t.typeIndex} != ${n.index}`
    );
  return t;
}
function pf(n) {
  let e = n.match(yf);
  if (e == null) throw TypeError(`Failed to validate endpoint URL \`${n}\``);
  let [t, r, s, o] = e,
    i = n.startsWith("https:") ? "wss:" : "ws:",
    c = s == null ? null : parseInt(s.slice(1), 10),
    a = c == null ? "" : `:${c + 1}`;
  return `${i}//${r}${a}${o}`;
}
function gf(n) {
  if (/^https?:/.test(n) === !1)
    throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
  return n;
}
function ye(n) {
  let e, t;
  if (typeof n == "string") e = n;
  else if (n) {
    let r = n,
      { commitment: s } = r,
      o = dt(r, ["commitment"]);
    (e = s), (t = o);
  }
  return { commitment: e, config: t };
}
function ga(n) {
  return n.map((e) =>
    "memcmp" in e
      ? Y(F({}, e), {
          memcmp: Y(F({}, e.memcmp), {
            encoding: e.memcmp.encoding ?? "base58",
          }),
        })
      : e
  );
}
function qa(n) {
  return Ne([
    v({ jsonrpc: be("2.0"), id: A(), result: n }),
    v({
      jsonrpc: be("2.0"),
      id: A(),
      error: v({ code: Dt(), message: A(), data: D(Si()) }),
    }),
  ]);
}
function Z(n) {
  return ir(qa(n), mf, (e) =>
    "error" in e ? e : Y(F({}, e), { result: P(e.result, n) })
  );
}
function Ie(n) {
  return Z(v({ context: v({ slot: p() }), value: n }));
}
function Zn(n) {
  return v({ context: v({ slot: p() }), value: n });
}
function Xs(n, e) {
  return n === 0
    ? new ur({
        header: e.header,
        staticAccountKeys: e.accountKeys.map((t) => new T(t)),
        recentBlockhash: e.recentBlockhash,
        compiledInstructions: e.instructions.map((t) => ({
          programIdIndex: t.programIdIndex,
          accountKeyIndexes: t.accounts,
          data: Re.default.decode(t.data),
        })),
        addressTableLookups: e.addressTableLookups,
      })
    : new lt(e);
}
function Pf(n, e, t, r, s, o) {
  let i = t || lf,
    c;
  o != null &&
    console.warn(
      "You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments."
    );
  let a;
  return (
    r &&
      (a = (d, g) =>
        E(this, null, function* () {
          let y = yield new Promise((l, h) => {
            try {
              r(d, g, (m, k) => l([m, k]));
            } catch (m) {
              h(m);
            }
          });
          return yield i(...y);
        })),
    new Ra.default(
      (d, g) =>
        E(this, null, function* () {
          let y = {
            method: "POST",
            body: d,
            agent: c,
            headers: Object.assign(
              { "Content-Type": "application/json" },
              e || {},
              Pl
            ),
          };
          try {
            let l = 5,
              h,
              m = 500;
            for (
              ;
              a ? (h = yield a(n, y)) : (h = yield i(n, y)),
                !(h.status !== 429 || s === !0 || ((l -= 1), l === 0));

            )
              console.error(
                `Server responded with ${h.status} ${h.statusText}.  Retrying after ${m}ms delay...`
              ),
                yield Mt(m),
                (m *= 2);
            let k = yield h.text();
            h.ok
              ? g(null, k)
              : g(new Error(`${h.status} ${h.statusText}: ${k}`));
          } catch (l) {
            l instanceof Error && g(l);
          }
        }),
      {}
    )
  );
}
function Tf(n) {
  return (e, t) =>
    new Promise((r, s) => {
      n.request(e, t, (o, i) => {
        if (o) {
          s(o);
          return;
        }
        r(i);
      });
    });
}
function Cf(n) {
  return (e) =>
    new Promise((t, r) => {
      e.length === 0 && t([]);
      let s = e.map((o) => n.request(o.methodName, o.args));
      n.request(s, (o, i) => {
        if (o) {
          r(o);
          return;
        }
        t(i);
      });
    });
}
function Wl({ authorizedVoter: n, epoch: e }) {
  return { epoch: e, authorizedVoter: new T(n) };
}
function _a({
  authorizedPubkey: n,
  epochOfLastAuthorizedSwitch: e,
  targetEpoch: t,
}) {
  return {
    authorizedPubkey: new T(n),
    epochOfLastAuthorizedSwitch: e,
    targetEpoch: t,
  };
}
function Dl({ buf: n, idx: e, isEmpty: t }) {
  return t ? [] : [...n.slice(e + 1).map(_a), ...n.slice(0, e).map(_a)];
}
function Ml(n, e) {
  let t = e === !1 ? "http" : "https";
  if (!n) return xa[t].devnet;
  let r = xa[t][n];
  if (!r) throw new Error(`Unknown ${t} cluster: ${n}`);
  return r;
}
function Vl(n, e, t, r) {
  return E(this, null, function* () {
    let s, o;
    (t && Object.prototype.hasOwnProperty.call(t, "lastValidBlockHeight")) ||
    (t && Object.prototype.hasOwnProperty.call(t, "nonceValue"))
      ? ((s = t), (o = r))
      : (o = t);
    let i = o && {
        skipPreflight: o.skipPreflight,
        preflightCommitment: o.preflightCommitment || o.commitment,
        minContextSlot: o.minContextSlot,
      },
      c = yield n.sendRawTransaction(e, i),
      a = o && o.commitment,
      d = (yield s ? n.confirmTransaction(s, a) : n.confirmTransaction(c, a))
        .value;
    if (d.err)
      throw c != null
        ? new Ft({
            action: i?.skipPreflight ? "send" : "simulate",
            signature: c,
            transactionMessage: `Status: (${JSON.stringify(d)})`,
          })
        : new Error(`Raw transaction ${c} failed (${JSON.stringify(d)})`);
    return c;
  });
}
var $,
  to,
  Re,
  yr,
  f,
  Aa,
  Vr,
  Ra,
  zu,
  fa,
  qn,
  Eo,
  Ku,
  X,
  Nr,
  ro,
  Or,
  La,
  Pa,
  ft,
  da,
  T,
  no,
  Wu,
  Tt,
  Yn,
  Ur,
  zr,
  Kr,
  Pt,
  $t,
  Q,
  Du,
  Vt,
  Mu,
  Vu,
  $u,
  Fu,
  Wn,
  Ca,
  lt,
  ur,
  Io,
  wt,
  ju,
  fe,
  ue,
  so,
  oo,
  Hu,
  Gu,
  Yu,
  Oa,
  it,
  Zu,
  Xu,
  zn,
  fr,
  Ju,
  Qu,
  ef,
  Kn,
  Ft,
  tf,
  z,
  Na,
  Ua,
  ao,
  Dn,
  rf,
  nf,
  lr,
  co,
  pe,
  Te,
  sf,
  uo,
  of,
  fo,
  Ys,
  ha,
  uf,
  ya,
  Cr,
  Mn,
  lf,
  lo,
  pa,
  qr,
  hf,
  yf,
  we,
  za,
  vo,
  Ka,
  mf,
  bf,
  wf,
  kf,
  Sf,
  Bf,
  Ef,
  If,
  Ht,
  vf,
  _f,
  xf,
  Af,
  Rf,
  ma,
  Lf,
  Of,
  Nf,
  Uf,
  zf,
  Kf,
  qf,
  Wf,
  Df,
  ho,
  Mf,
  Vf,
  yo,
  $f,
  Ff,
  Wr,
  jf,
  Hf,
  po,
  Gf,
  Yf,
  Zf,
  Xf,
  Jf,
  Qf,
  el,
  tl,
  rl,
  nl,
  sl,
  ol,
  il,
  al,
  ba,
  cl,
  ul,
  fl,
  ll,
  dl,
  Wa,
  _o,
  Da,
  Ma,
  Va,
  $a,
  hl,
  yl,
  Fa,
  ja,
  Vn,
  Ha,
  Xn,
  xo,
  pr,
  Gt,
  pl,
  gl,
  ml,
  bl,
  wl,
  kl,
  Sl,
  wa,
  Js,
  Un,
  Bl,
  El,
  Il,
  vl,
  _l,
  xl,
  Al,
  Rl,
  Ll,
  Pl,
  go,
  $n,
  kt,
  mo,
  Dr,
  bo,
  ct,
  Mr,
  ka,
  Sa,
  Ba,
  Ea,
  Fn,
  Tl,
  Cl,
  Ia,
  Qs,
  va,
  Ol,
  eo,
  jn,
  Ga,
  Ya,
  Hn,
  jt,
  wo,
  Ae,
  Nl,
  dr,
  Gn,
  ko,
  ut,
  Ul,
  hr,
  Za,
  zl,
  So,
  Kl,
  ql,
  Bo,
  xa,
  $l,
  jl = le(() => {
    $ = nt(es());
    ai();
    (to = nt(Oo())), (Re = nt(Ss()));
    Ja();
    (yr = nt(mi())), (f = nt(Rs())), (Aa = nt(Rs())), (Vr = nt(bi()));
    Bi();
    Ra = nt(ji());
    Qi();
    Qa();
    ua();
    (zu = zt.utils.randomPrivateKey),
      (fa = () => {
        let n = zt.utils.randomPrivateKey(),
          e = qn(n),
          t = new Uint8Array(64);
        return t.set(n), t.set(e, 32), { publicKey: e, secretKey: t };
      }),
      (qn = zt.getPublicKey);
    (Eo = (n, e) => zt.sign(n, e.slice(0, 32))),
      (Ku = zt.verify),
      (X = (n) =>
        $.Buffer.isBuffer(n)
          ? n
          : n instanceof Uint8Array
          ? $.Buffer.from(n.buffer, n.byteOffset, n.byteLength)
          : $.Buffer.from(n)),
      (Nr = class {
        constructor(e) {
          Object.assign(this, e);
        }
        encode() {
          return $.Buffer.from((0, yr.serialize)(Or, this));
        }
        static decode(e) {
          return (0, yr.deserialize)(Or, this, e);
        }
        static decodeUnchecked(e) {
          return (0, yr.deserializeUnchecked)(Or, this, e);
        }
      }),
      (ro = class extends Nr {
        constructor(e) {
          if ((super(e), (this.enum = ""), Object.keys(e).length !== 1))
            throw new Error("Enum can only take single value");
          Object.keys(e).map((t) => {
            this.enum = t;
          });
        }
      }),
      (Or = new Map()),
      (Pa = 32),
      (ft = 32);
    (da = 1),
      (T = class n extends Nr {
        constructor(e) {
          if ((super({}), (this._bn = void 0), qu(e))) this._bn = e._bn;
          else {
            if (typeof e == "string") {
              let t = Re.default.decode(e);
              if (t.length != ft) throw new Error("Invalid public key input");
              this._bn = new to.default(t);
            } else this._bn = new to.default(e);
            if (this._bn.byteLength() > ft)
              throw new Error("Invalid public key input");
          }
        }
        static unique() {
          let e = new n(da);
          return (da += 1), new n(e.toBuffer());
        }
        equals(e) {
          return this._bn.eq(e._bn);
        }
        toBase58() {
          return Re.default.encode(this.toBytes());
        }
        toJSON() {
          return this.toBase58();
        }
        toBytes() {
          let e = this.toBuffer();
          return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        }
        toBuffer() {
          let e = this._bn.toArrayLike($.Buffer);
          if (e.length === ft) return e;
          let t = $.Buffer.alloc(32);
          return e.copy(t, 32 - e.length), t;
        }
        get [Symbol.toStringTag]() {
          return `PublicKey(${this.toString()})`;
        }
        toString() {
          return this.toBase58();
        }
        static createWithSeed(e, t, r) {
          return E(this, null, function* () {
            let s = $.Buffer.concat([
                e.toBuffer(),
                $.Buffer.from(t),
                r.toBuffer(),
              ]),
              o = ss(s);
            return new n(o);
          });
        }
        static createProgramAddressSync(e, t) {
          let r = $.Buffer.alloc(0);
          e.forEach(function (o) {
            if (o.length > Pa) throw new TypeError("Max seed length exceeded");
            r = $.Buffer.concat([r, X(o)]);
          }),
            (r = $.Buffer.concat([
              r,
              t.toBuffer(),
              $.Buffer.from("ProgramDerivedAddress"),
            ]));
          let s = ss(r);
          if (la(s))
            throw new Error("Invalid seeds, address must fall off the curve");
          return new n(s);
        }
        static createProgramAddress(e, t) {
          return E(this, null, function* () {
            return this.createProgramAddressSync(e, t);
          });
        }
        static findProgramAddressSync(e, t) {
          let r = 255,
            s;
          for (; r != 0; ) {
            try {
              let o = e.concat($.Buffer.from([r]));
              s = this.createProgramAddressSync(o, t);
            } catch (o) {
              if (o instanceof TypeError) throw o;
              r--;
              continue;
            }
            return [s, r];
          }
          throw new Error("Unable to find a viable program address nonce");
        }
        static findProgramAddress(e, t) {
          return E(this, null, function* () {
            return this.findProgramAddressSync(e, t);
          });
        }
        static isOnCurve(e) {
          let t = new n(e);
          return la(t.toBytes());
        }
      });
    La = T;
    T.default = new La("11111111111111111111111111111111");
    Or.set(T, { kind: "struct", fields: [["_bn", "u256"]] });
    (no = class {
      constructor(e) {
        if (((this._publicKey = void 0), (this._secretKey = void 0), e)) {
          let t = X(e);
          if (e.length !== 64) throw new Error("bad secret key size");
          (this._publicKey = t.slice(32, 64)),
            (this._secretKey = t.slice(0, 32));
        } else
          (this._secretKey = X(zu())),
            (this._publicKey = X(qn(this._secretKey)));
      }
      get publicKey() {
        return new T(this._publicKey);
      }
      get secretKey() {
        return $.Buffer.concat([this._secretKey, this._publicKey], 64);
      }
    }),
      (Wu = new T("BPFLoader1111111111111111111111111111111111")),
      (Tt = 1232),
      (Yn = 127),
      (Ur = 64),
      (zr = class extends Error {
        constructor(e) {
          super(`Signature ${e} has expired: block height exceeded.`),
            (this.signature = void 0),
            (this.signature = e);
        }
      });
    Object.defineProperty(zr.prototype, "name", {
      value: "TransactionExpiredBlockheightExceededError",
    });
    Kr = class extends Error {
      constructor(e, t) {
        super(
          `Transaction was not confirmed in ${t.toFixed(
            2
          )} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`
        ),
          (this.signature = void 0),
          (this.signature = e);
      }
    };
    Object.defineProperty(Kr.prototype, "name", {
      value: "TransactionExpiredTimeoutError",
    });
    Pt = class extends Error {
      constructor(e) {
        super(`Signature ${e} has expired: the nonce is no longer valid.`),
          (this.signature = void 0),
          (this.signature = e);
      }
    };
    Object.defineProperty(Pt.prototype, "name", {
      value: "TransactionExpiredNonceInvalidError",
    });
    ($t = class {
      constructor(e, t) {
        (this.staticAccountKeys = void 0),
          (this.accountKeysFromLookups = void 0),
          (this.staticAccountKeys = e),
          (this.accountKeysFromLookups = t);
      }
      keySegments() {
        let e = [this.staticAccountKeys];
        return (
          this.accountKeysFromLookups &&
            (e.push(this.accountKeysFromLookups.writable),
            e.push(this.accountKeysFromLookups.readonly)),
          e
        );
      }
      get(e) {
        for (let t of this.keySegments()) {
          if (e < t.length) return t[e];
          e -= t.length;
        }
      }
      get length() {
        return this.keySegments().flat().length;
      }
      compileInstructions(e) {
        if (this.length > 256)
          throw new Error(
            "Account index overflow encountered during compilation"
          );
        let r = new Map();
        this.keySegments()
          .flat()
          .forEach((o, i) => {
            r.set(o.toBase58(), i);
          });
        let s = (o) => {
          let i = r.get(o.toBase58());
          if (i === void 0)
            throw new Error(
              "Encountered an unknown instruction account key during compilation"
            );
          return i;
        };
        return e.map((o) => ({
          programIdIndex: s(o.programId),
          accountKeyIndexes: o.keys.map((i) => s(i.pubkey)),
          data: o.data,
        }));
      }
    }),
      (Q = (n = "publicKey") => f.blob(32, n)),
      (Du = (n = "signature") => f.blob(64, n)),
      (Vt = (n = "string") => {
        let e = f.struct(
            [
              f.u32("length"),
              f.u32("lengthPadding"),
              f.blob(f.offset(f.u32(), -8), "chars"),
            ],
            n
          ),
          t = e.decode.bind(e),
          r = e.encode.bind(e),
          s = e;
        return (
          (s.decode = (o, i) => t(o, i).chars.toString()),
          (s.encode = (o, i, c) => {
            let a = { chars: $.Buffer.from(o, "utf8") };
            return r(a, i, c);
          }),
          (s.alloc = (o) =>
            f.u32().span + f.u32().span + $.Buffer.from(o, "utf8").length),
          s
        );
      }),
      (Mu = (n = "authorized") => f.struct([Q("staker"), Q("withdrawer")], n)),
      (Vu = (n = "lockup") =>
        f.struct(
          [f.ns64("unixTimestamp"), f.ns64("epoch"), Q("custodian")],
          n
        )),
      ($u = (n = "voteInit") =>
        f.struct(
          [
            Q("nodePubkey"),
            Q("authorizedVoter"),
            Q("authorizedWithdrawer"),
            f.u8("commission"),
          ],
          n
        )),
      (Fu = (n = "voteAuthorizeWithSeedArgs") =>
        f.struct(
          [
            f.u32("voteAuthorizationType"),
            Q("currentAuthorityDerivedKeyOwnerPubkey"),
            Vt("currentAuthorityDerivedKeySeed"),
            Q("newAuthorized"),
          ],
          n
        ));
    (Wn = class n {
      constructor(e, t) {
        (this.payer = void 0),
          (this.keyMetaMap = void 0),
          (this.payer = e),
          (this.keyMetaMap = t);
      }
      static compile(e, t) {
        let r = new Map(),
          s = (i) => {
            let c = i.toBase58(),
              a = r.get(c);
            return (
              a === void 0 &&
                ((a = { isSigner: !1, isWritable: !1, isInvoked: !1 }),
                r.set(c, a)),
              a
            );
          },
          o = s(t);
        (o.isSigner = !0), (o.isWritable = !0);
        for (let i of e) {
          s(i.programId).isInvoked = !0;
          for (let c of i.keys) {
            let a = s(c.pubkey);
            (a.isSigner ||= c.isSigner), (a.isWritable ||= c.isWritable);
          }
        }
        return new n(t, r);
      }
      getMessageComponents() {
        let e = [...this.keyMetaMap.entries()];
        ie(e.length <= 256, "Max static account keys length exceeded");
        let t = e.filter(([, a]) => a.isSigner && a.isWritable),
          r = e.filter(([, a]) => a.isSigner && !a.isWritable),
          s = e.filter(([, a]) => !a.isSigner && a.isWritable),
          o = e.filter(([, a]) => !a.isSigner && !a.isWritable),
          i = {
            numRequiredSignatures: t.length + r.length,
            numReadonlySignedAccounts: r.length,
            numReadonlyUnsignedAccounts: o.length,
          };
        {
          ie(t.length > 0, "Expected at least one writable signer key");
          let [a] = t[0];
          ie(
            a === this.payer.toBase58(),
            "Expected first writable signer key to be the fee payer"
          );
        }
        let c = [
          ...t.map(([a]) => new T(a)),
          ...r.map(([a]) => new T(a)),
          ...s.map(([a]) => new T(a)),
          ...o.map(([a]) => new T(a)),
        ];
        return [i, c];
      }
      extractTableLookup(e) {
        let [t, r] = this.drainKeysFoundInLookupTable(
            e.state.addresses,
            (i) => !i.isSigner && !i.isInvoked && i.isWritable
          ),
          [s, o] = this.drainKeysFoundInLookupTable(
            e.state.addresses,
            (i) => !i.isSigner && !i.isInvoked && !i.isWritable
          );
        if (!(t.length === 0 && s.length === 0))
          return [
            { accountKey: e.key, writableIndexes: t, readonlyIndexes: s },
            { writable: r, readonly: o },
          ];
      }
      drainKeysFoundInLookupTable(e, t) {
        let r = new Array(),
          s = new Array();
        for (let [o, i] of this.keyMetaMap.entries())
          if (t(i)) {
            let c = new T(o),
              a = e.findIndex((u) => u.equals(c));
            a >= 0 &&
              (ie(a < 256, "Max lookup table index exceeded"),
              r.push(a),
              s.push(c),
              this.keyMetaMap.delete(o));
          }
        return [r, s];
      }
    }),
      (Ca = "Reached end of buffer unexpectedly");
    (lt = class n {
      constructor(e) {
        (this.header = void 0),
          (this.accountKeys = void 0),
          (this.recentBlockhash = void 0),
          (this.instructions = void 0),
          (this.indexToProgramIds = new Map()),
          (this.header = e.header),
          (this.accountKeys = e.accountKeys.map((t) => new T(t))),
          (this.recentBlockhash = e.recentBlockhash),
          (this.instructions = e.instructions),
          this.instructions.forEach((t) =>
            this.indexToProgramIds.set(
              t.programIdIndex,
              this.accountKeys[t.programIdIndex]
            )
          );
      }
      get version() {
        return "legacy";
      }
      get staticAccountKeys() {
        return this.accountKeys;
      }
      get compiledInstructions() {
        return this.instructions.map((e) => ({
          programIdIndex: e.programIdIndex,
          accountKeyIndexes: e.accounts,
          data: Re.default.decode(e.data),
        }));
      }
      get addressTableLookups() {
        return [];
      }
      getAccountKeys() {
        return new $t(this.staticAccountKeys);
      }
      static compile(e) {
        let t = Wn.compile(e.instructions, e.payerKey),
          [r, s] = t.getMessageComponents(),
          i = new $t(s)
            .compileInstructions(e.instructions)
            .map((c) => ({
              programIdIndex: c.programIdIndex,
              accounts: c.accountKeyIndexes,
              data: Re.default.encode(c.data),
            }));
        return new n({
          header: r,
          accountKeys: s,
          recentBlockhash: e.recentBlockhash,
          instructions: i,
        });
      }
      isAccountSigner(e) {
        return e < this.header.numRequiredSignatures;
      }
      isAccountWritable(e) {
        let t = this.header.numRequiredSignatures;
        if (e >= this.header.numRequiredSignatures) {
          let r = e - t,
            o =
              this.accountKeys.length -
              t -
              this.header.numReadonlyUnsignedAccounts;
          return r < o;
        } else {
          let r = t - this.header.numReadonlySignedAccounts;
          return e < r;
        }
      }
      isProgramId(e) {
        return this.indexToProgramIds.has(e);
      }
      programIds() {
        return [...this.indexToProgramIds.values()];
      }
      nonProgramIds() {
        return this.accountKeys.filter((e, t) => !this.isProgramId(t));
      }
      serialize() {
        let e = this.accountKeys.length,
          t = [];
        Xe(t, e);
        let r = this.instructions.map((g) => {
            let { accounts: y, programIdIndex: l } = g,
              h = Array.from(Re.default.decode(g.data)),
              m = [];
            Xe(m, y.length);
            let k = [];
            return (
              Xe(k, h.length),
              {
                programIdIndex: l,
                keyIndicesCount: $.Buffer.from(m),
                keyIndices: y,
                dataLength: $.Buffer.from(k),
                data: h,
              }
            );
          }),
          s = [];
        Xe(s, r.length);
        let o = $.Buffer.alloc(Tt);
        $.Buffer.from(s).copy(o);
        let i = s.length;
        r.forEach((g) => {
          let l = f
            .struct([
              f.u8("programIdIndex"),
              f.blob(g.keyIndicesCount.length, "keyIndicesCount"),
              f.seq(f.u8("keyIndex"), g.keyIndices.length, "keyIndices"),
              f.blob(g.dataLength.length, "dataLength"),
              f.seq(f.u8("userdatum"), g.data.length, "data"),
            ])
            .encode(g, o, i);
          i += l;
        }),
          (o = o.slice(0, i));
        let c = f.struct([
            f.blob(1, "numRequiredSignatures"),
            f.blob(1, "numReadonlySignedAccounts"),
            f.blob(1, "numReadonlyUnsignedAccounts"),
            f.blob(t.length, "keyCount"),
            f.seq(Q("key"), e, "keys"),
            Q("recentBlockhash"),
          ]),
          a = {
            numRequiredSignatures: $.Buffer.from([
              this.header.numRequiredSignatures,
            ]),
            numReadonlySignedAccounts: $.Buffer.from([
              this.header.numReadonlySignedAccounts,
            ]),
            numReadonlyUnsignedAccounts: $.Buffer.from([
              this.header.numReadonlyUnsignedAccounts,
            ]),
            keyCount: $.Buffer.from(t),
            keys: this.accountKeys.map((g) => X(g.toBytes())),
            recentBlockhash: Re.default.decode(this.recentBlockhash),
          },
          u = $.Buffer.alloc(2048),
          d = c.encode(a, u);
        return o.copy(u, d), u.slice(0, d + o.length);
      }
      static from(e) {
        let t = [...e],
          r = at(t);
        if (r !== (r & Yn))
          throw new Error(
            "Versioned messages must be deserialized with VersionedMessage.deserialize()"
          );
        let s = at(t),
          o = at(t),
          i = He(t),
          c = [];
        for (let y = 0; y < i; y++) {
          let l = Ge(t, 0, ft);
          c.push(new T($.Buffer.from(l)));
        }
        let a = Ge(t, 0, ft),
          u = He(t),
          d = [];
        for (let y = 0; y < u; y++) {
          let l = at(t),
            h = He(t),
            m = Ge(t, 0, h),
            k = He(t),
            w = Ge(t, 0, k),
            R = Re.default.encode($.Buffer.from(w));
          d.push({ programIdIndex: l, accounts: m, data: R });
        }
        let g = {
          header: {
            numRequiredSignatures: r,
            numReadonlySignedAccounts: s,
            numReadonlyUnsignedAccounts: o,
          },
          recentBlockhash: Re.default.encode($.Buffer.from(a)),
          accountKeys: c,
          instructions: d,
        };
        return new n(g);
      }
    }),
      (ur = class n {
        constructor(e) {
          (this.header = void 0),
            (this.staticAccountKeys = void 0),
            (this.recentBlockhash = void 0),
            (this.compiledInstructions = void 0),
            (this.addressTableLookups = void 0),
            (this.header = e.header),
            (this.staticAccountKeys = e.staticAccountKeys),
            (this.recentBlockhash = e.recentBlockhash),
            (this.compiledInstructions = e.compiledInstructions),
            (this.addressTableLookups = e.addressTableLookups);
        }
        get version() {
          return 0;
        }
        get numAccountKeysFromLookups() {
          let e = 0;
          for (let t of this.addressTableLookups)
            e += t.readonlyIndexes.length + t.writableIndexes.length;
          return e;
        }
        getAccountKeys(e) {
          let t;
          if (e && "accountKeysFromLookups" in e && e.accountKeysFromLookups) {
            if (
              this.numAccountKeysFromLookups !=
              e.accountKeysFromLookups.writable.length +
                e.accountKeysFromLookups.readonly.length
            )
              throw new Error(
                "Failed to get account keys because of a mismatch in the number of account keys from lookups"
              );
            t = e.accountKeysFromLookups;
          } else if (
            e &&
            "addressLookupTableAccounts" in e &&
            e.addressLookupTableAccounts
          )
            t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
          else if (this.addressTableLookups.length > 0)
            throw new Error(
              "Failed to get account keys because address table lookups were not resolved"
            );
          return new $t(this.staticAccountKeys, t);
        }
        isAccountSigner(e) {
          return e < this.header.numRequiredSignatures;
        }
        isAccountWritable(e) {
          let t = this.header.numRequiredSignatures,
            r = this.staticAccountKeys.length;
          if (e >= r) {
            let s = e - r,
              o = this.addressTableLookups.reduce(
                (i, c) => i + c.writableIndexes.length,
                0
              );
            return s < o;
          } else if (e >= this.header.numRequiredSignatures) {
            let s = e - t,
              i = r - t - this.header.numReadonlyUnsignedAccounts;
            return s < i;
          } else {
            let s = t - this.header.numReadonlySignedAccounts;
            return e < s;
          }
        }
        resolveAddressTableLookups(e) {
          let t = { writable: [], readonly: [] };
          for (let r of this.addressTableLookups) {
            let s = e.find((o) => o.key.equals(r.accountKey));
            if (!s)
              throw new Error(
                `Failed to find address lookup table account for table key ${r.accountKey.toBase58()}`
              );
            for (let o of r.writableIndexes)
              if (o < s.state.addresses.length)
                t.writable.push(s.state.addresses[o]);
              else
                throw new Error(
                  `Failed to find address for index ${o} in address lookup table ${r.accountKey.toBase58()}`
                );
            for (let o of r.readonlyIndexes)
              if (o < s.state.addresses.length)
                t.readonly.push(s.state.addresses[o]);
              else
                throw new Error(
                  `Failed to find address for index ${o} in address lookup table ${r.accountKey.toBase58()}`
                );
          }
          return t;
        }
        static compile(e) {
          let t = Wn.compile(e.instructions, e.payerKey),
            r = new Array(),
            s = { writable: new Array(), readonly: new Array() },
            o = e.addressLookupTableAccounts || [];
          for (let d of o) {
            let g = t.extractTableLookup(d);
            if (g !== void 0) {
              let [y, { writable: l, readonly: h }] = g;
              r.push(y), s.writable.push(...l), s.readonly.push(...h);
            }
          }
          let [i, c] = t.getMessageComponents(),
            u = new $t(c, s).compileInstructions(e.instructions);
          return new n({
            header: i,
            staticAccountKeys: c,
            recentBlockhash: e.recentBlockhash,
            compiledInstructions: u,
            addressTableLookups: r,
          });
        }
        serialize() {
          let e = Array();
          Xe(e, this.staticAccountKeys.length);
          let t = this.serializeInstructions(),
            r = Array();
          Xe(r, this.compiledInstructions.length);
          let s = this.serializeAddressTableLookups(),
            o = Array();
          Xe(o, this.addressTableLookups.length);
          let i = f.struct([
              f.u8("prefix"),
              f.struct(
                [
                  f.u8("numRequiredSignatures"),
                  f.u8("numReadonlySignedAccounts"),
                  f.u8("numReadonlyUnsignedAccounts"),
                ],
                "header"
              ),
              f.blob(e.length, "staticAccountKeysLength"),
              f.seq(Q(), this.staticAccountKeys.length, "staticAccountKeys"),
              Q("recentBlockhash"),
              f.blob(r.length, "instructionsLength"),
              f.blob(t.length, "serializedInstructions"),
              f.blob(o.length, "addressTableLookupsLength"),
              f.blob(s.length, "serializedAddressTableLookups"),
            ]),
            c = new Uint8Array(Tt),
            u = i.encode(
              {
                prefix: 128,
                header: this.header,
                staticAccountKeysLength: new Uint8Array(e),
                staticAccountKeys: this.staticAccountKeys.map((d) =>
                  d.toBytes()
                ),
                recentBlockhash: Re.default.decode(this.recentBlockhash),
                instructionsLength: new Uint8Array(r),
                serializedInstructions: t,
                addressTableLookupsLength: new Uint8Array(o),
                serializedAddressTableLookups: s,
              },
              c
            );
          return c.slice(0, u);
        }
        serializeInstructions() {
          let e = 0,
            t = new Uint8Array(Tt);
          for (let r of this.compiledInstructions) {
            let s = Array();
            Xe(s, r.accountKeyIndexes.length);
            let o = Array();
            Xe(o, r.data.length);
            let i = f.struct([
              f.u8("programIdIndex"),
              f.blob(s.length, "encodedAccountKeyIndexesLength"),
              f.seq(f.u8(), r.accountKeyIndexes.length, "accountKeyIndexes"),
              f.blob(o.length, "encodedDataLength"),
              f.blob(r.data.length, "data"),
            ]);
            e += i.encode(
              {
                programIdIndex: r.programIdIndex,
                encodedAccountKeyIndexesLength: new Uint8Array(s),
                accountKeyIndexes: r.accountKeyIndexes,
                encodedDataLength: new Uint8Array(o),
                data: r.data,
              },
              t,
              e
            );
          }
          return t.slice(0, e);
        }
        serializeAddressTableLookups() {
          let e = 0,
            t = new Uint8Array(Tt);
          for (let r of this.addressTableLookups) {
            let s = Array();
            Xe(s, r.writableIndexes.length);
            let o = Array();
            Xe(o, r.readonlyIndexes.length);
            let i = f.struct([
              Q("accountKey"),
              f.blob(s.length, "encodedWritableIndexesLength"),
              f.seq(f.u8(), r.writableIndexes.length, "writableIndexes"),
              f.blob(o.length, "encodedReadonlyIndexesLength"),
              f.seq(f.u8(), r.readonlyIndexes.length, "readonlyIndexes"),
            ]);
            e += i.encode(
              {
                accountKey: r.accountKey.toBytes(),
                encodedWritableIndexesLength: new Uint8Array(s),
                writableIndexes: r.writableIndexes,
                encodedReadonlyIndexesLength: new Uint8Array(o),
                readonlyIndexes: r.readonlyIndexes,
              },
              t,
              e
            );
          }
          return t.slice(0, e);
        }
        static deserialize(e) {
          let t = [...e],
            r = at(t),
            s = r & Yn;
          ie(r !== s, "Expected versioned message but received legacy message");
          let o = s;
          ie(
            o === 0,
            `Expected versioned message with version 0 but found version ${o}`
          );
          let i = {
              numRequiredSignatures: at(t),
              numReadonlySignedAccounts: at(t),
              numReadonlyUnsignedAccounts: at(t),
            },
            c = [],
            a = He(t);
          for (let h = 0; h < a; h++) c.push(new T(Ge(t, 0, ft)));
          let u = Re.default.encode(Ge(t, 0, ft)),
            d = He(t),
            g = [];
          for (let h = 0; h < d; h++) {
            let m = at(t),
              k = He(t),
              w = Ge(t, 0, k),
              R = He(t),
              x = new Uint8Array(Ge(t, 0, R));
            g.push({ programIdIndex: m, accountKeyIndexes: w, data: x });
          }
          let y = He(t),
            l = [];
          for (let h = 0; h < y; h++) {
            let m = new T(Ge(t, 0, ft)),
              k = He(t),
              w = Ge(t, 0, k),
              R = He(t),
              x = Ge(t, 0, R);
            l.push({ accountKey: m, writableIndexes: w, readonlyIndexes: x });
          }
          return new n({
            header: i,
            staticAccountKeys: c,
            recentBlockhash: u,
            compiledInstructions: g,
            addressTableLookups: l,
          });
        }
      }),
      (Io = {
        deserializeMessageVersion(n) {
          let e = n[0],
            t = e & Yn;
          return t === e ? "legacy" : t;
        },
        deserialize: (n) => {
          let e = Io.deserializeMessageVersion(n);
          if (e === "legacy") return lt.from(n);
          if (e === 0) return ur.deserialize(n);
          throw new Error(
            `Transaction message version ${e} deserialization is not supported`
          );
        },
      }),
      (wt = (function (n) {
        return (
          (n[(n.BLOCKHEIGHT_EXCEEDED = 0)] = "BLOCKHEIGHT_EXCEEDED"),
          (n[(n.PROCESSED = 1)] = "PROCESSED"),
          (n[(n.TIMED_OUT = 2)] = "TIMED_OUT"),
          (n[(n.NONCE_INVALID = 3)] = "NONCE_INVALID"),
          n
        );
      })({})),
      (ju = $.Buffer.alloc(Ur).fill(0)),
      (fe = class {
        constructor(e) {
          (this.keys = void 0),
            (this.programId = void 0),
            (this.data = $.Buffer.alloc(0)),
            (this.programId = e.programId),
            (this.keys = e.keys),
            e.data && (this.data = e.data);
        }
        toJSON() {
          return {
            keys: this.keys.map(
              ({ pubkey: e, isSigner: t, isWritable: r }) => ({
                pubkey: e.toJSON(),
                isSigner: t,
                isWritable: r,
              })
            ),
            programId: this.programId.toJSON(),
            data: [...this.data],
          };
        }
      }),
      (ue = class n {
        get signature() {
          return this.signatures.length > 0
            ? this.signatures[0].signature
            : null;
        }
        constructor(e) {
          if (
            ((this.signatures = []),
            (this.feePayer = void 0),
            (this.instructions = []),
            (this.recentBlockhash = void 0),
            (this.lastValidBlockHeight = void 0),
            (this.nonceInfo = void 0),
            (this.minNonceContextSlot = void 0),
            (this._message = void 0),
            (this._json = void 0),
            !!e)
          )
            if (
              (e.feePayer && (this.feePayer = e.feePayer),
              e.signatures && (this.signatures = e.signatures),
              Object.prototype.hasOwnProperty.call(e, "nonceInfo"))
            ) {
              let { minContextSlot: t, nonceInfo: r } = e;
              (this.minNonceContextSlot = t), (this.nonceInfo = r);
            } else if (
              Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")
            ) {
              let { blockhash: t, lastValidBlockHeight: r } = e;
              (this.recentBlockhash = t), (this.lastValidBlockHeight = r);
            } else {
              let { recentBlockhash: t, nonceInfo: r } = e;
              r && (this.nonceInfo = r), (this.recentBlockhash = t);
            }
        }
        toJSON() {
          return {
            recentBlockhash: this.recentBlockhash || null,
            feePayer: this.feePayer ? this.feePayer.toJSON() : null,
            nonceInfo: this.nonceInfo
              ? {
                  nonce: this.nonceInfo.nonce,
                  nonceInstruction: this.nonceInfo.nonceInstruction.toJSON(),
                }
              : null,
            instructions: this.instructions.map((e) => e.toJSON()),
            signers: this.signatures.map(({ publicKey: e }) => e.toJSON()),
          };
        }
        add(...e) {
          if (e.length === 0) throw new Error("No instructions");
          return (
            e.forEach((t) => {
              "instructions" in t
                ? (this.instructions = this.instructions.concat(t.instructions))
                : "data" in t && "programId" in t && "keys" in t
                ? this.instructions.push(t)
                : this.instructions.push(new fe(t));
            }),
            this
          );
        }
        compileMessage() {
          if (
            this._message &&
            JSON.stringify(this.toJSON()) === JSON.stringify(this._json)
          )
            return this._message;
          let e, t;
          if (
            (this.nonceInfo
              ? ((e = this.nonceInfo.nonce),
                this.instructions[0] != this.nonceInfo.nonceInstruction
                  ? (t = [
                      this.nonceInfo.nonceInstruction,
                      ...this.instructions,
                    ])
                  : (t = this.instructions))
              : ((e = this.recentBlockhash), (t = this.instructions)),
            !e)
          )
            throw new Error("Transaction recentBlockhash required");
          t.length < 1 && console.warn("No instructions provided");
          let r;
          if (this.feePayer) r = this.feePayer;
          else if (this.signatures.length > 0 && this.signatures[0].publicKey)
            r = this.signatures[0].publicKey;
          else throw new Error("Transaction fee payer required");
          for (let m = 0; m < t.length; m++)
            if (t[m].programId === void 0)
              throw new Error(
                `Transaction instruction index ${m} has undefined program id`
              );
          let s = [],
            o = [];
          t.forEach((m) => {
            m.keys.forEach((w) => {
              o.push(F({}, w));
            });
            let k = m.programId.toString();
            s.includes(k) || s.push(k);
          }),
            s.forEach((m) => {
              o.push({ pubkey: new T(m), isSigner: !1, isWritable: !1 });
            });
          let i = [];
          o.forEach((m) => {
            let k = m.pubkey.toString(),
              w = i.findIndex((R) => R.pubkey.toString() === k);
            w > -1
              ? ((i[w].isWritable = i[w].isWritable || m.isWritable),
                (i[w].isSigner = i[w].isSigner || m.isSigner))
              : i.push(m);
          }),
            i.sort(function (m, k) {
              if (m.isSigner !== k.isSigner) return m.isSigner ? -1 : 1;
              if (m.isWritable !== k.isWritable) return m.isWritable ? -1 : 1;
              let w = {
                localeMatcher: "best fit",
                usage: "sort",
                sensitivity: "variant",
                ignorePunctuation: !1,
                numeric: !1,
                caseFirst: "lower",
              };
              return m.pubkey
                .toBase58()
                .localeCompare(k.pubkey.toBase58(), "en", w);
            });
          let c = i.findIndex((m) => m.pubkey.equals(r));
          if (c > -1) {
            let [m] = i.splice(c, 1);
            (m.isSigner = !0), (m.isWritable = !0), i.unshift(m);
          } else i.unshift({ pubkey: r, isSigner: !0, isWritable: !0 });
          for (let m of this.signatures) {
            let k = i.findIndex((w) => w.pubkey.equals(m.publicKey));
            if (k > -1)
              i[k].isSigner ||
                ((i[k].isSigner = !0),
                console.warn(
                  "Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."
                ));
            else throw new Error(`unknown signer: ${m.publicKey.toString()}`);
          }
          let a = 0,
            u = 0,
            d = 0,
            g = [],
            y = [];
          i.forEach(({ pubkey: m, isSigner: k, isWritable: w }) => {
            k
              ? (g.push(m.toString()), (a += 1), w || (u += 1))
              : (y.push(m.toString()), w || (d += 1));
          });
          let l = g.concat(y),
            h = t.map((m) => {
              let { data: k, programId: w } = m;
              return {
                programIdIndex: l.indexOf(w.toString()),
                accounts: m.keys.map((R) => l.indexOf(R.pubkey.toString())),
                data: Re.default.encode(k),
              };
            });
          return (
            h.forEach((m) => {
              ie(m.programIdIndex >= 0), m.accounts.forEach((k) => ie(k >= 0));
            }),
            new lt({
              header: {
                numRequiredSignatures: a,
                numReadonlySignedAccounts: u,
                numReadonlyUnsignedAccounts: d,
              },
              accountKeys: l,
              recentBlockhash: e,
              instructions: h,
            })
          );
        }
        _compile() {
          let e = this.compileMessage(),
            t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
          return (
            (this.signatures.length === t.length &&
              this.signatures.every((s, o) => t[o].equals(s.publicKey))) ||
              (this.signatures = t.map((r) => ({
                signature: null,
                publicKey: r,
              }))),
            e
          );
        }
        serializeMessage() {
          return this._compile().serialize();
        }
        getEstimatedFee(e) {
          return E(this, null, function* () {
            return (yield e.getFeeForMessage(this.compileMessage())).value;
          });
        }
        setSigners(...e) {
          if (e.length === 0) throw new Error("No signers");
          let t = new Set();
          this.signatures = e
            .filter((r) => {
              let s = r.toString();
              return t.has(s) ? !1 : (t.add(s), !0);
            })
            .map((r) => ({ signature: null, publicKey: r }));
        }
        sign(...e) {
          if (e.length === 0) throw new Error("No signers");
          let t = new Set(),
            r = [];
          for (let o of e) {
            let i = o.publicKey.toString();
            t.has(i) || (t.add(i), r.push(o));
          }
          this.signatures = r.map((o) => ({
            signature: null,
            publicKey: o.publicKey,
          }));
          let s = this._compile();
          this._partialSign(s, ...r);
        }
        partialSign(...e) {
          if (e.length === 0) throw new Error("No signers");
          let t = new Set(),
            r = [];
          for (let o of e) {
            let i = o.publicKey.toString();
            t.has(i) || (t.add(i), r.push(o));
          }
          let s = this._compile();
          this._partialSign(s, ...r);
        }
        _partialSign(e, ...t) {
          let r = e.serialize();
          t.forEach((s) => {
            let o = Eo(r, s.secretKey);
            this._addSignature(s.publicKey, X(o));
          });
        }
        addSignature(e, t) {
          this._compile(), this._addSignature(e, t);
        }
        _addSignature(e, t) {
          ie(t.length === 64);
          let r = this.signatures.findIndex((s) => e.equals(s.publicKey));
          if (r < 0) throw new Error(`unknown signer: ${e.toString()}`);
          this.signatures[r].signature = $.Buffer.from(t);
        }
        verifySignatures(e = !0) {
          return !this._getMessageSignednessErrors(this.serializeMessage(), e);
        }
        _getMessageSignednessErrors(e, t) {
          let r = {};
          for (let { signature: s, publicKey: o } of this.signatures)
            s === null
              ? t && (r.missing ||= []).push(o)
              : Ku(s, e, o.toBytes()) || (r.invalid ||= []).push(o);
          return r.invalid || r.missing ? r : void 0;
        }
        serialize(e) {
          let { requireAllSignatures: t, verifySignatures: r } = Object.assign(
              { requireAllSignatures: !0, verifySignatures: !0 },
              e
            ),
            s = this.serializeMessage();
          if (r) {
            let o = this._getMessageSignednessErrors(s, t);
            if (o) {
              let i = "Signature verification failed.";
              throw (
                (o.invalid &&
                  (i += `
Invalid signature for public key${
                    o.invalid.length === 1 ? "" : "(s)"
                  } [\`${o.invalid.map((c) => c.toBase58()).join("`, `")}\`].`),
                o.missing &&
                  (i += `
Missing signature for public key${
                    o.missing.length === 1 ? "" : "(s)"
                  } [\`${o.missing.map((c) => c.toBase58()).join("`, `")}\`].`),
                new Error(i))
              );
            }
          }
          return this._serialize(s);
        }
        _serialize(e) {
          let { signatures: t } = this,
            r = [];
          Xe(r, t.length);
          let s = r.length + t.length * 64 + e.length,
            o = $.Buffer.alloc(s);
          return (
            ie(t.length < 256),
            $.Buffer.from(r).copy(o, 0),
            t.forEach(({ signature: i }, c) => {
              i !== null &&
                (ie(i.length === 64, "signature has invalid length"),
                $.Buffer.from(i).copy(o, r.length + c * 64));
            }),
            e.copy(o, r.length + t.length * 64),
            ie(o.length <= Tt, `Transaction too large: ${o.length} > ${Tt}`),
            o
          );
        }
        get keys() {
          return (
            ie(this.instructions.length === 1),
            this.instructions[0].keys.map((e) => e.pubkey)
          );
        }
        get programId() {
          return (
            ie(this.instructions.length === 1), this.instructions[0].programId
          );
        }
        get data() {
          return ie(this.instructions.length === 1), this.instructions[0].data;
        }
        static from(e) {
          let t = [...e],
            r = He(t),
            s = [];
          for (let o = 0; o < r; o++) {
            let i = Ge(t, 0, Ur);
            s.push(Re.default.encode($.Buffer.from(i)));
          }
          return n.populate(lt.from(t), s);
        }
        static populate(e, t = []) {
          let r = new n();
          return (
            (r.recentBlockhash = e.recentBlockhash),
            e.header.numRequiredSignatures > 0 &&
              (r.feePayer = e.accountKeys[0]),
            t.forEach((s, o) => {
              let i = {
                signature:
                  s == Re.default.encode(ju) ? null : Re.default.decode(s),
                publicKey: e.accountKeys[o],
              };
              r.signatures.push(i);
            }),
            e.instructions.forEach((s) => {
              let o = s.accounts.map((i) => {
                let c = e.accountKeys[i];
                return {
                  pubkey: c,
                  isSigner:
                    r.signatures.some(
                      (a) => a.publicKey.toString() === c.toString()
                    ) || e.isAccountSigner(i),
                  isWritable: e.isAccountWritable(i),
                };
              });
              r.instructions.push(
                new fe({
                  keys: o,
                  programId: e.accountKeys[s.programIdIndex],
                  data: Re.default.decode(s.data),
                })
              );
            }),
            (r._message = e),
            (r._json = r.toJSON()),
            r
          );
        }
      }),
      (so = class n {
        constructor(e) {
          (this.payerKey = void 0),
            (this.instructions = void 0),
            (this.recentBlockhash = void 0),
            (this.payerKey = e.payerKey),
            (this.instructions = e.instructions),
            (this.recentBlockhash = e.recentBlockhash);
        }
        static decompile(e, t) {
          let { header: r, compiledInstructions: s, recentBlockhash: o } = e,
            {
              numRequiredSignatures: i,
              numReadonlySignedAccounts: c,
              numReadonlyUnsignedAccounts: a,
            } = r,
            u = i - c;
          ie(u > 0, "Message header is invalid");
          let d = e.staticAccountKeys.length - i - a;
          ie(d >= 0, "Message header is invalid");
          let g = e.getAccountKeys(t),
            y = g.get(0);
          if (y === void 0)
            throw new Error(
              "Failed to decompile message because no account keys were found"
            );
          let l = [];
          for (let h of s) {
            let m = [];
            for (let w of h.accountKeyIndexes) {
              let R = g.get(w);
              if (R === void 0)
                throw new Error(
                  `Failed to find key for account key index ${w}`
                );
              let x = w < i,
                U;
              x
                ? (U = w < u)
                : w < g.staticAccountKeys.length
                ? (U = w - i < d)
                : (U =
                    w - g.staticAccountKeys.length <
                    g.accountKeysFromLookups.writable.length),
                m.push({
                  pubkey: R,
                  isSigner: w < r.numRequiredSignatures,
                  isWritable: U,
                });
            }
            let k = g.get(h.programIdIndex);
            if (k === void 0)
              throw new Error(
                `Failed to find program id for program id index ${h.programIdIndex}`
              );
            l.push(new fe({ programId: k, data: X(h.data), keys: m }));
          }
          return new n({ payerKey: y, instructions: l, recentBlockhash: o });
        }
        compileToLegacyMessage() {
          return lt.compile({
            payerKey: this.payerKey,
            recentBlockhash: this.recentBlockhash,
            instructions: this.instructions,
          });
        }
        compileToV0Message(e) {
          return ur.compile({
            payerKey: this.payerKey,
            recentBlockhash: this.recentBlockhash,
            instructions: this.instructions,
            addressLookupTableAccounts: e,
          });
        }
      }),
      (oo = class n {
        get version() {
          return this.message.version;
        }
        constructor(e, t) {
          if (
            ((this.signatures = void 0), (this.message = void 0), t !== void 0)
          )
            ie(
              t.length === e.header.numRequiredSignatures,
              "Expected signatures length to be equal to the number of required signatures"
            ),
              (this.signatures = t);
          else {
            let r = [];
            for (let s = 0; s < e.header.numRequiredSignatures; s++)
              r.push(new Uint8Array(Ur));
            this.signatures = r;
          }
          this.message = e;
        }
        serialize() {
          let e = this.message.serialize(),
            t = Array();
          Xe(t, this.signatures.length);
          let r = f.struct([
              f.blob(t.length, "encodedSignaturesLength"),
              f.seq(Du(), this.signatures.length, "signatures"),
              f.blob(e.length, "serializedMessage"),
            ]),
            s = new Uint8Array(2048),
            o = r.encode(
              {
                encodedSignaturesLength: new Uint8Array(t),
                signatures: this.signatures,
                serializedMessage: e,
              },
              s
            );
          return s.slice(0, o);
        }
        static deserialize(e) {
          let t = [...e],
            r = [],
            s = He(t);
          for (let i = 0; i < s; i++) r.push(new Uint8Array(Ge(t, 0, Ur)));
          let o = Io.deserialize(new Uint8Array(t));
          return new n(o, r);
        }
        sign(e) {
          let t = this.message.serialize(),
            r = this.message.staticAccountKeys.slice(
              0,
              this.message.header.numRequiredSignatures
            );
          for (let s of e) {
            let o = r.findIndex((i) => i.equals(s.publicKey));
            ie(
              o >= 0,
              `Cannot sign with non signer key ${s.publicKey.toBase58()}`
            ),
              (this.signatures[o] = Eo(t, s.secretKey));
          }
        }
        addSignature(e, t) {
          ie(t.byteLength === 64, "Signature must be 64 bytes long");
          let s = this.message.staticAccountKeys
            .slice(0, this.message.header.numRequiredSignatures)
            .findIndex((o) => o.equals(e));
          ie(
            s >= 0,
            `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`
          ),
            (this.signatures[s] = t);
        }
      }),
      (Hu = 160),
      (Gu = 64),
      (Yu = Hu / Gu),
      (Oa = 1e3 / Yu),
      (it = new T("SysvarC1ock11111111111111111111111111111111")),
      (Zu = new T("SysvarEpochSchedu1e111111111111111111111111")),
      (Xu = new T("Sysvar1nstructions1111111111111111111111111")),
      (zn = new T("SysvarRecentB1ockHashes11111111111111111111")),
      (fr = new T("SysvarRent111111111111111111111111111111111")),
      (Ju = new T("SysvarRewards111111111111111111111111111111")),
      (Qu = new T("SysvarS1otHashes111111111111111111111111111")),
      (ef = new T("SysvarS1otHistory11111111111111111111111111")),
      (Kn = new T("SysvarStakeHistory1111111111111111111111111")),
      (Ft = class extends Error {
        constructor({
          action: e,
          signature: t,
          transactionMessage: r,
          logs: s,
        }) {
          let o = s
              ? `Logs: 
${JSON.stringify(s.slice(-10), null, 2)}. `
              : "",
            i =
              "\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.",
            c;
          switch (e) {
            case "send":
              c =
                `Transaction ${t} resulted in an error. 
${r}. ` +
                o +
                i;
              break;
            case "simulate":
              c =
                `Simulation failed. 
Message: ${r}. 
` +
                o +
                i;
              break;
            default:
              c = `Unknown action '${((a) => a)(e)}'`;
          }
          super(c),
            (this.signature = void 0),
            (this.transactionMessage = void 0),
            (this.transactionLogs = void 0),
            (this.signature = t),
            (this.transactionMessage = r),
            (this.transactionLogs = s || void 0);
        }
        get transactionError() {
          return {
            message: this.transactionMessage,
            logs: Array.isArray(this.transactionLogs)
              ? this.transactionLogs
              : void 0,
          };
        }
        get logs() {
          let e = this.transactionLogs;
          if (!(e != null && typeof e == "object" && "then" in e)) return e;
        }
        getLogs(e) {
          return E(this, null, function* () {
            return (
              Array.isArray(this.transactionLogs) ||
                (this.transactionLogs = new Promise((t, r) => {
                  e.getTransaction(this.signature)
                    .then((s) => {
                      if (s && s.meta && s.meta.logMessages) {
                        let o = s.meta.logMessages;
                        (this.transactionLogs = o), t(o);
                      } else r(new Error("Log messages not found"));
                    })
                    .catch(r);
                })),
              yield this.transactionLogs
            );
          });
        }
      }),
      (tf = {
        JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP: -32001,
        JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE: -32002,
        JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE:
          -32003,
        JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE: -32004,
        JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY: -32005,
        JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE:
          -32006,
        JSON_RPC_SERVER_ERROR_SLOT_SKIPPED: -32007,
        JSON_RPC_SERVER_ERROR_NO_SNAPSHOT: -32008,
        JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED: -32009,
        JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX: -32010,
        JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE: -32011,
        JSON_RPC_SCAN_ERROR: -32012,
        JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH: -32013,
        JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET: -32014,
        JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION: -32015,
        JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED: -32016,
      }),
      (z = class extends Error {
        constructor({ code: e, message: t, data: r }, s) {
          super(s != null ? `${s}: ${t}` : t),
            (this.code = void 0),
            (this.data = void 0),
            (this.code = e),
            (this.data = r),
            (this.name = "SolanaJSONRPCError");
        }
      });
    (Na = f.nu64("lamportsPerSignature")),
      (Ua = f.struct([
        f.u32("version"),
        f.u32("state"),
        Q("authorizedPubkey"),
        Q("nonce"),
        f.struct([Na], "feeCalculator"),
      ])),
      (ao = Ua.span),
      (Dn = class n {
        constructor(e) {
          (this.authorizedPubkey = void 0),
            (this.nonce = void 0),
            (this.feeCalculator = void 0),
            (this.authorizedPubkey = e.authorizedPubkey),
            (this.nonce = e.nonce),
            (this.feeCalculator = e.feeCalculator);
        }
        static fromAccountData(e) {
          let t = Ua.decode(X(e), 0);
          return new n({
            authorizedPubkey: new T(t.authorizedPubkey),
            nonce: new T(t.nonce).toString(),
            feeCalculator: t.feeCalculator,
          });
        }
      }),
      (rf = (n) => {
        let e = n.decode.bind(n),
          t = n.encode.bind(n);
        return { decode: e, encode: t };
      }),
      (nf = (n) => (e) => {
        let t = (0, Aa.blob)(n, e),
          { encode: r, decode: s } = rf(t),
          o = t;
        return (
          (o.decode = (i, c) => {
            let a = s(i, c);
            return (0, Vr.toBigIntLE)($.Buffer.from(a));
          }),
          (o.encode = (i, c, a) => {
            let u = (0, Vr.toBufferLE)(i, n);
            return r(u, c, a);
          }),
          o
        );
      }),
      (lr = nf(8)),
      (co = class {
        constructor() {}
        static decodeInstructionType(e) {
          this.checkProgramId(e.programId);
          let r = f.u32("instruction").decode(e.data),
            s;
          for (let [o, i] of Object.entries(pe))
            if (i.index == r) {
              s = o;
              break;
            }
          if (!s)
            throw new Error(
              "Instruction type incorrect; not a SystemInstruction"
            );
          return s;
        }
        static decodeCreateAccount(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
          let { lamports: t, space: r, programId: s } = ce(pe.Create, e.data);
          return {
            fromPubkey: e.keys[0].pubkey,
            newAccountPubkey: e.keys[1].pubkey,
            lamports: t,
            space: r,
            programId: new T(s),
          };
        }
        static decodeTransfer(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
          let { lamports: t } = ce(pe.Transfer, e.data);
          return {
            fromPubkey: e.keys[0].pubkey,
            toPubkey: e.keys[1].pubkey,
            lamports: t,
          };
        }
        static decodeTransferWithSeed(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let {
            lamports: t,
            seed: r,
            programId: s,
          } = ce(pe.TransferWithSeed, e.data);
          return {
            fromPubkey: e.keys[0].pubkey,
            basePubkey: e.keys[1].pubkey,
            toPubkey: e.keys[2].pubkey,
            lamports: t,
            seed: r,
            programId: new T(s),
          };
        }
        static decodeAllocate(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
          let { space: t } = ce(pe.Allocate, e.data);
          return { accountPubkey: e.keys[0].pubkey, space: t };
        }
        static decodeAllocateWithSeed(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
          let {
            base: t,
            seed: r,
            space: s,
            programId: o,
          } = ce(pe.AllocateWithSeed, e.data);
          return {
            accountPubkey: e.keys[0].pubkey,
            basePubkey: new T(t),
            seed: r,
            space: s,
            programId: new T(o),
          };
        }
        static decodeAssign(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
          let { programId: t } = ce(pe.Assign, e.data);
          return { accountPubkey: e.keys[0].pubkey, programId: new T(t) };
        }
        static decodeAssignWithSeed(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
          let {
            base: t,
            seed: r,
            programId: s,
          } = ce(pe.AssignWithSeed, e.data);
          return {
            accountPubkey: e.keys[0].pubkey,
            basePubkey: new T(t),
            seed: r,
            programId: new T(s),
          };
        }
        static decodeCreateWithSeed(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
          let {
            base: t,
            seed: r,
            lamports: s,
            space: o,
            programId: i,
          } = ce(pe.CreateWithSeed, e.data);
          return {
            fromPubkey: e.keys[0].pubkey,
            newAccountPubkey: e.keys[1].pubkey,
            basePubkey: new T(t),
            seed: r,
            lamports: s,
            space: o,
            programId: new T(i),
          };
        }
        static decodeNonceInitialize(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let { authorized: t } = ce(pe.InitializeNonceAccount, e.data);
          return { noncePubkey: e.keys[0].pubkey, authorizedPubkey: new T(t) };
        }
        static decodeNonceAdvance(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3),
            ce(pe.AdvanceNonceAccount, e.data),
            {
              noncePubkey: e.keys[0].pubkey,
              authorizedPubkey: e.keys[2].pubkey,
            }
          );
        }
        static decodeNonceWithdraw(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
          let { lamports: t } = ce(pe.WithdrawNonceAccount, e.data);
          return {
            noncePubkey: e.keys[0].pubkey,
            toPubkey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[4].pubkey,
            lamports: t,
          };
        }
        static decodeNonceAuthorize(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
          let { authorized: t } = ce(pe.AuthorizeNonceAccount, e.data);
          return {
            noncePubkey: e.keys[0].pubkey,
            authorizedPubkey: e.keys[1].pubkey,
            newAuthorizedPubkey: new T(t),
          };
        }
        static checkProgramId(e) {
          if (!e.equals(Te.programId))
            throw new Error(
              "invalid instruction; programId is not SystemProgram"
            );
        }
        static checkKeyLength(e, t) {
          if (e.length < t)
            throw new Error(
              `invalid instruction; found ${e.length} keys, expected at least ${t}`
            );
        }
      }),
      (pe = Object.freeze({
        Create: {
          index: 0,
          layout: f.struct([
            f.u32("instruction"),
            f.ns64("lamports"),
            f.ns64("space"),
            Q("programId"),
          ]),
        },
        Assign: {
          index: 1,
          layout: f.struct([f.u32("instruction"), Q("programId")]),
        },
        Transfer: {
          index: 2,
          layout: f.struct([f.u32("instruction"), lr("lamports")]),
        },
        CreateWithSeed: {
          index: 3,
          layout: f.struct([
            f.u32("instruction"),
            Q("base"),
            Vt("seed"),
            f.ns64("lamports"),
            f.ns64("space"),
            Q("programId"),
          ]),
        },
        AdvanceNonceAccount: {
          index: 4,
          layout: f.struct([f.u32("instruction")]),
        },
        WithdrawNonceAccount: {
          index: 5,
          layout: f.struct([f.u32("instruction"), f.ns64("lamports")]),
        },
        InitializeNonceAccount: {
          index: 6,
          layout: f.struct([f.u32("instruction"), Q("authorized")]),
        },
        AuthorizeNonceAccount: {
          index: 7,
          layout: f.struct([f.u32("instruction"), Q("authorized")]),
        },
        Allocate: {
          index: 8,
          layout: f.struct([f.u32("instruction"), f.ns64("space")]),
        },
        AllocateWithSeed: {
          index: 9,
          layout: f.struct([
            f.u32("instruction"),
            Q("base"),
            Vt("seed"),
            f.ns64("space"),
            Q("programId"),
          ]),
        },
        AssignWithSeed: {
          index: 10,
          layout: f.struct([
            f.u32("instruction"),
            Q("base"),
            Vt("seed"),
            Q("programId"),
          ]),
        },
        TransferWithSeed: {
          index: 11,
          layout: f.struct([
            f.u32("instruction"),
            lr("lamports"),
            Vt("seed"),
            Q("programId"),
          ]),
        },
        UpgradeNonceAccount: {
          index: 12,
          layout: f.struct([f.u32("instruction")]),
        },
      })),
      (Te = class n {
        constructor() {}
        static createAccount(e) {
          let t = pe.Create,
            r = ne(t, {
              lamports: e.lamports,
              space: e.space,
              programId: X(e.programId.toBuffer()),
            });
          return new fe({
            keys: [
              { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
              { pubkey: e.newAccountPubkey, isSigner: !0, isWritable: !0 },
            ],
            programId: this.programId,
            data: r,
          });
        }
        static transfer(e) {
          let t, r;
          if ("basePubkey" in e) {
            let s = pe.TransferWithSeed;
            (t = ne(s, {
              lamports: BigInt(e.lamports),
              seed: e.seed,
              programId: X(e.programId.toBuffer()),
            })),
              (r = [
                { pubkey: e.fromPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
                { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
              ]);
          } else {
            let s = pe.Transfer;
            (t = ne(s, { lamports: BigInt(e.lamports) })),
              (r = [
                { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
                { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
              ]);
          }
          return new fe({ keys: r, programId: this.programId, data: t });
        }
        static assign(e) {
          let t, r;
          if ("basePubkey" in e) {
            let s = pe.AssignWithSeed;
            (t = ne(s, {
              base: X(e.basePubkey.toBuffer()),
              seed: e.seed,
              programId: X(e.programId.toBuffer()),
            })),
              (r = [
                { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
              ]);
          } else {
            let s = pe.Assign;
            (t = ne(s, { programId: X(e.programId.toBuffer()) })),
              (r = [{ pubkey: e.accountPubkey, isSigner: !0, isWritable: !0 }]);
          }
          return new fe({ keys: r, programId: this.programId, data: t });
        }
        static createAccountWithSeed(e) {
          let t = pe.CreateWithSeed,
            r = ne(t, {
              base: X(e.basePubkey.toBuffer()),
              seed: e.seed,
              lamports: e.lamports,
              space: e.space,
              programId: X(e.programId.toBuffer()),
            }),
            s = [
              { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
              { pubkey: e.newAccountPubkey, isSigner: !1, isWritable: !0 },
            ];
          return (
            e.basePubkey.equals(e.fromPubkey) ||
              s.push({ pubkey: e.basePubkey, isSigner: !0, isWritable: !1 }),
            new fe({ keys: s, programId: this.programId, data: r })
          );
        }
        static createNonceAccount(e) {
          let t = new ue();
          "basePubkey" in e && "seed" in e
            ? t.add(
                n.createAccountWithSeed({
                  fromPubkey: e.fromPubkey,
                  newAccountPubkey: e.noncePubkey,
                  basePubkey: e.basePubkey,
                  seed: e.seed,
                  lamports: e.lamports,
                  space: ao,
                  programId: this.programId,
                })
              )
            : t.add(
                n.createAccount({
                  fromPubkey: e.fromPubkey,
                  newAccountPubkey: e.noncePubkey,
                  lamports: e.lamports,
                  space: ao,
                  programId: this.programId,
                })
              );
          let r = {
            noncePubkey: e.noncePubkey,
            authorizedPubkey: e.authorizedPubkey,
          };
          return t.add(this.nonceInitialize(r)), t;
        }
        static nonceInitialize(e) {
          let t = pe.InitializeNonceAccount,
            r = ne(t, { authorized: X(e.authorizedPubkey.toBuffer()) }),
            s = {
              keys: [
                { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
                { pubkey: zn, isSigner: !1, isWritable: !1 },
                { pubkey: fr, isSigner: !1, isWritable: !1 },
              ],
              programId: this.programId,
              data: r,
            };
          return new fe(s);
        }
        static nonceAdvance(e) {
          let t = pe.AdvanceNonceAccount,
            r = ne(t),
            s = {
              keys: [
                { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
                { pubkey: zn, isSigner: !1, isWritable: !1 },
                { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
              ],
              programId: this.programId,
              data: r,
            };
          return new fe(s);
        }
        static nonceWithdraw(e) {
          let t = pe.WithdrawNonceAccount,
            r = ne(t, { lamports: e.lamports });
          return new fe({
            keys: [
              { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
              { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
              { pubkey: zn, isSigner: !1, isWritable: !1 },
              { pubkey: fr, isSigner: !1, isWritable: !1 },
              { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: r,
          });
        }
        static nonceAuthorize(e) {
          let t = pe.AuthorizeNonceAccount,
            r = ne(t, { authorized: X(e.newAuthorizedPubkey.toBuffer()) });
          return new fe({
            keys: [
              { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
              { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: r,
          });
        }
        static allocate(e) {
          let t, r;
          if ("basePubkey" in e) {
            let s = pe.AllocateWithSeed;
            (t = ne(s, {
              base: X(e.basePubkey.toBuffer()),
              seed: e.seed,
              space: e.space,
              programId: X(e.programId.toBuffer()),
            })),
              (r = [
                { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
              ]);
          } else {
            let s = pe.Allocate;
            (t = ne(s, { space: e.space })),
              (r = [{ pubkey: e.accountPubkey, isSigner: !0, isWritable: !0 }]);
          }
          return new fe({ keys: r, programId: this.programId, data: t });
        }
      });
    Te.programId = new T("11111111111111111111111111111111");
    (sf = Tt - 300),
      (uo = (() => {
        class n {
          constructor() {}
          static getMinNumSignatures(t) {
            return 2 * (Math.ceil(t / n.chunkSize) + 1 + 1);
          }
          static load(t, r, s, o, i) {
            return E(this, null, function* () {
              {
                let y = yield t.getMinimumBalanceForRentExemption(i.length),
                  l = yield t.getAccountInfo(s.publicKey, "confirmed"),
                  h = null;
                if (l !== null) {
                  if (l.executable)
                    return (
                      console.error(
                        "Program load failed, account is already executable"
                      ),
                      !1
                    );
                  l.data.length !== i.length &&
                    ((h = h || new ue()),
                    h.add(
                      Te.allocate({
                        accountPubkey: s.publicKey,
                        space: i.length,
                      })
                    )),
                    l.owner.equals(o) ||
                      ((h = h || new ue()),
                      h.add(
                        Te.assign({ accountPubkey: s.publicKey, programId: o })
                      )),
                    l.lamports < y &&
                      ((h = h || new ue()),
                      h.add(
                        Te.transfer({
                          fromPubkey: r.publicKey,
                          toPubkey: s.publicKey,
                          lamports: y - l.lamports,
                        })
                      ));
                } else h = new ue().add(Te.createAccount({ fromPubkey: r.publicKey, newAccountPubkey: s.publicKey, lamports: y > 0 ? y : 1, space: i.length, programId: o }));
                h !== null &&
                  (yield io(t, h, [r, s], { commitment: "confirmed" }));
              }
              let c = f.struct([
                  f.u32("instruction"),
                  f.u32("offset"),
                  f.u32("bytesLength"),
                  f.u32("bytesLengthPadding"),
                  f.seq(f.u8("byte"), f.offset(f.u32(), -8), "bytes"),
                ]),
                a = n.chunkSize,
                u = 0,
                d = i,
                g = [];
              for (; d.length > 0; ) {
                let y = d.slice(0, a),
                  l = $.Buffer.alloc(a + 16);
                c.encode(
                  {
                    instruction: 0,
                    offset: u,
                    bytes: y,
                    bytesLength: 0,
                    bytesLengthPadding: 0,
                  },
                  l
                );
                let h = new ue().add({
                  keys: [{ pubkey: s.publicKey, isSigner: !0, isWritable: !0 }],
                  programId: o,
                  data: l,
                });
                g.push(io(t, h, [r, s], { commitment: "confirmed" })),
                  t._rpcEndpoint.includes("solana.com") && (yield Mt(1e3 / 4)),
                  (u += a),
                  (d = d.slice(a));
              }
              yield Promise.all(g);
              {
                let y = f.struct([f.u32("instruction")]),
                  l = $.Buffer.alloc(y.span);
                y.encode({ instruction: 1 }, l);
                let h = new ue().add({
                    keys: [
                      { pubkey: s.publicKey, isSigner: !0, isWritable: !0 },
                      { pubkey: fr, isSigner: !1, isWritable: !1 },
                    ],
                    programId: o,
                    data: l,
                  }),
                  m = "processed",
                  k = yield t.sendTransaction(h, [r, s], {
                    preflightCommitment: m,
                  }),
                  { context: w, value: R } = yield t.confirmTransaction(
                    {
                      signature: k,
                      lastValidBlockHeight: h.lastValidBlockHeight,
                      blockhash: h.recentBlockhash,
                    },
                    m
                  );
                if (R.err)
                  throw new Error(
                    `Transaction ${k} failed (${JSON.stringify(R)})`
                  );
                for (;;) {
                  try {
                    if ((yield t.getSlot({ commitment: m })) > w.slot) break;
                  } catch {}
                  yield new Promise((x) => setTimeout(x, Math.round(Oa / 2)));
                }
              }
              return !0;
            });
          }
        }
        return (n.chunkSize = sf), n;
      })()),
      (of = new T("BPFLoader2111111111111111111111111111111111")),
      (fo = class {
        static getMinNumSignatures(e) {
          return uo.getMinNumSignatures(e);
        }
        static load(e, t, r, s, o) {
          return uo.load(e, t, r, o, s);
        }
      });
    (uf = cf()), (ya = af(uf)), (Cr = 32);
    (Mn = class {
      constructor(e, t, r, s, o) {
        (this.slotsPerEpoch = void 0),
          (this.leaderScheduleSlotOffset = void 0),
          (this.warmup = void 0),
          (this.firstNormalEpoch = void 0),
          (this.firstNormalSlot = void 0),
          (this.slotsPerEpoch = e),
          (this.leaderScheduleSlotOffset = t),
          (this.warmup = r),
          (this.firstNormalEpoch = s),
          (this.firstNormalSlot = o);
      }
      getEpoch(e) {
        return this.getEpochAndSlotIndex(e)[0];
      }
      getEpochAndSlotIndex(e) {
        if (e < this.firstNormalSlot) {
          let t = Zs(ff(e + Cr + 1)) - Zs(Cr) - 1,
            r = this.getSlotsInEpoch(t),
            s = e - (r - Cr);
          return [t, s];
        } else {
          let t = e - this.firstNormalSlot,
            r = Math.floor(t / this.slotsPerEpoch),
            s = this.firstNormalEpoch + r,
            o = t % this.slotsPerEpoch;
          return [s, o];
        }
      }
      getFirstSlotInEpoch(e) {
        return e <= this.firstNormalEpoch
          ? (Math.pow(2, e) - 1) * Cr
          : (e - this.firstNormalEpoch) * this.slotsPerEpoch +
              this.firstNormalSlot;
      }
      getLastSlotInEpoch(e) {
        return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1;
      }
      getSlotsInEpoch(e) {
        return e < this.firstNormalEpoch
          ? Math.pow(2, e + Zs(Cr))
          : this.slotsPerEpoch;
      }
    }),
      (lf = globalThis.fetch),
      (lo = class extends Ji {
        constructor(e, t, r) {
          let s = (o) => {
            let i = Xi(
              o,
              F(
                {
                  autoconnect: !0,
                  max_reconnects: 5,
                  reconnect: !0,
                  reconnect_interval: 1e3,
                },
                t
              )
            );
            return (
              "socket" in i
                ? (this.underlyingSocket = i.socket)
                : (this.underlyingSocket = i),
              i
            );
          };
          super(s, e, t, r), (this.underlyingSocket = void 0);
        }
        call(...e) {
          let t = this.underlyingSocket?.readyState;
          return t === 1
            ? super.call(...e)
            : Promise.reject(
                new Error(
                  "Tried to call a JSON-RPC method `" +
                    e[0] +
                    "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " +
                    t +
                    ")"
                )
              );
        }
        notify(...e) {
          let t = this.underlyingSocket?.readyState;
          return t === 1
            ? super.notify(...e)
            : Promise.reject(
                new Error(
                  "Tried to send a JSON-RPC notification `" +
                    e[0] +
                    "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " +
                    t +
                    ")"
                )
              );
        }
      });
    (pa = 56),
      (qr = class {
        constructor(e) {
          (this.key = void 0),
            (this.state = void 0),
            (this.key = e.key),
            (this.state = e.state);
        }
        isActive() {
          let e = BigInt("0xffffffffffffffff");
          return this.state.deactivationSlot === e;
        }
        static deserialize(e) {
          let t = df(hf, e),
            r = e.length - pa;
          ie(r >= 0, "lookup table is invalid"),
            ie(r % 32 === 0, "lookup table is invalid");
          let s = r / 32,
            { addresses: o } = f
              .struct([f.seq(Q(), s, "addresses")])
              .decode(e.slice(pa));
          return {
            deactivationSlot: t.deactivationSlot,
            lastExtendedSlot: t.lastExtendedSlot,
            lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
            authority:
              t.authority.length !== 0 ? new T(t.authority[0]) : void 0,
            addresses: o.map((i) => new T(i)),
          };
        }
      }),
      (hf = {
        index: 1,
        layout: f.struct([
          f.u32("typeIndex"),
          lr("deactivationSlot"),
          f.nu64("lastExtendedSlot"),
          f.u8("lastExtendedStartIndex"),
          f.u8(),
          f.seq(Q(), f.offset(f.u8(), -1), "authority"),
        ]),
      }),
      (yf = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i);
    (we = ir(vn(T), A(), (n) => new T(n))),
      (za = _n([A(), be("base64")])),
      (vo = ir(vn($.Buffer), za, (n) => $.Buffer.from(n[0], "base64"))),
      (Ka = 30 * 1e3);
    mf = qa(Dt());
    (bf = v({
      foundation: p(),
      foundationTerm: p(),
      initial: p(),
      taper: p(),
      terminal: p(),
    })),
      (wf = Z(
        C(
          O(
            v({
              epoch: p(),
              effectiveSlot: p(),
              amount: p(),
              postBalance: p(),
              commission: D(O(p())),
            })
          )
        )
      )),
      (kf = C(v({ slot: p(), prioritizationFee: p() }))),
      (Sf = v({ total: p(), validator: p(), foundation: p(), epoch: p() })),
      (Bf = v({
        epoch: p(),
        slotIndex: p(),
        slotsInEpoch: p(),
        absoluteSlot: p(),
        blockHeight: D(p()),
        transactionCount: D(p()),
      })),
      (Ef = v({
        slotsPerEpoch: p(),
        leaderScheduleSlotOffset: p(),
        warmup: rt(),
        firstNormalEpoch: p(),
        firstNormalSlot: p(),
      })),
      (If = Cs(A(), C(p()))),
      (Ht = O(Ne([v({}), A()]))),
      (vf = v({ err: Ht })),
      (_f = be("receivedSignature")),
      (xf = v({ "solana-core": A(), "feature-set": D(p()) })),
      (Af = v({ program: A(), programId: we, parsed: Dt() })),
      (Rf = v({ programId: we, accounts: C(we), data: A() })),
      (ma = Ie(
        v({
          err: O(Ne([v({}), A()])),
          logs: O(C(A())),
          accounts: D(
            O(
              C(
                O(
                  v({
                    executable: rt(),
                    owner: A(),
                    lamports: p(),
                    data: C(A()),
                    rentEpoch: D(p()),
                  })
                )
              )
            )
          ),
          unitsConsumed: D(p()),
          returnData: D(
            O(v({ programId: A(), data: _n([A(), be("base64")]) }))
          ),
          innerInstructions: D(
            O(C(v({ index: p(), instructions: C(Ne([Af, Rf])) })))
          ),
        })
      )),
      (Lf = Ie(
        v({
          byIdentity: Cs(A(), C(p())),
          range: v({ firstSlot: p(), lastSlot: p() }),
        })
      ));
    (Of = Z(bf)),
      (Nf = Z(Sf)),
      (Uf = Z(kf)),
      (zf = Z(Bf)),
      (Kf = Z(Ef)),
      (qf = Z(If)),
      (Wf = Z(p())),
      (Df = Ie(
        v({
          total: p(),
          circulating: p(),
          nonCirculating: p(),
          nonCirculatingAccounts: C(we),
        })
      )),
      (ho = v({
        amount: A(),
        uiAmount: O(p()),
        decimals: p(),
        uiAmountString: D(A()),
      })),
      (Mf = Ie(
        C(
          v({
            address: we,
            amount: A(),
            uiAmount: O(p()),
            decimals: p(),
            uiAmountString: D(A()),
          })
        )
      )),
      (Vf = Ie(
        C(
          v({
            pubkey: we,
            account: v({
              executable: rt(),
              owner: we,
              lamports: p(),
              data: vo,
              rentEpoch: p(),
            }),
          })
        )
      )),
      (yo = v({ program: A(), parsed: Dt(), space: p() })),
      ($f = Ie(
        C(
          v({
            pubkey: we,
            account: v({
              executable: rt(),
              owner: we,
              lamports: p(),
              data: yo,
              rentEpoch: p(),
            }),
          })
        )
      )),
      (Ff = Ie(C(v({ lamports: p(), address: we })))),
      (Wr = v({
        executable: rt(),
        owner: we,
        lamports: p(),
        data: vo,
        rentEpoch: p(),
      })),
      (jf = v({ pubkey: we, account: Wr })),
      (Hf = ir(Ne([vn($.Buffer), yo]), Ne([za, yo]), (n) =>
        Array.isArray(n) ? P(n, vo) : n
      )),
      (po = v({
        executable: rt(),
        owner: we,
        lamports: p(),
        data: Hf,
        rentEpoch: p(),
      })),
      (Gf = v({ pubkey: we, account: po })),
      (Yf = v({
        state: Ne([
          be("active"),
          be("inactive"),
          be("activating"),
          be("deactivating"),
        ]),
        active: p(),
        inactive: p(),
      })),
      (Zf = Z(
        C(
          v({
            signature: A(),
            slot: p(),
            err: Ht,
            memo: O(A()),
            blockTime: D(O(p())),
          })
        )
      )),
      (Xf = Z(
        C(
          v({
            signature: A(),
            slot: p(),
            err: Ht,
            memo: O(A()),
            blockTime: D(O(p())),
          })
        )
      )),
      (Jf = v({ subscription: p(), result: Zn(Wr) })),
      (Qf = v({ pubkey: we, account: Wr })),
      (el = v({ subscription: p(), result: Zn(Qf) })),
      (tl = v({ parent: p(), slot: p(), root: p() })),
      (rl = v({ subscription: p(), result: tl })),
      (nl = Ne([
        v({
          type: Ne([
            be("firstShredReceived"),
            be("completed"),
            be("optimisticConfirmation"),
            be("root"),
          ]),
          slot: p(),
          timestamp: p(),
        }),
        v({ type: be("createdBank"), parent: p(), slot: p(), timestamp: p() }),
        v({
          type: be("frozen"),
          slot: p(),
          timestamp: p(),
          stats: v({
            numTransactionEntries: p(),
            numSuccessfulTransactions: p(),
            numFailedTransactions: p(),
            maxTransactionsPerEntry: p(),
          }),
        }),
        v({ type: be("dead"), slot: p(), timestamp: p(), err: A() }),
      ])),
      (sl = v({ subscription: p(), result: nl })),
      (ol = v({ subscription: p(), result: Zn(Ne([vf, _f])) })),
      (il = v({ subscription: p(), result: p() })),
      (al = v({
        pubkey: A(),
        gossip: O(A()),
        tpu: O(A()),
        rpc: O(A()),
        version: O(A()),
      })),
      (ba = v({
        votePubkey: A(),
        nodePubkey: A(),
        activatedStake: p(),
        epochVoteAccount: rt(),
        epochCredits: C(_n([p(), p(), p()])),
        commission: p(),
        lastVote: p(),
        rootSlot: O(p()),
      })),
      (cl = Z(v({ current: C(ba), delinquent: C(ba) }))),
      (ul = Ne([be("processed"), be("confirmed"), be("finalized")])),
      (fl = v({
        slot: p(),
        confirmations: O(p()),
        err: Ht,
        confirmationStatus: D(ul),
      })),
      (ll = Ie(C(O(fl)))),
      (dl = Z(p())),
      (Wa = v({
        accountKey: we,
        writableIndexes: C(p()),
        readonlyIndexes: C(p()),
      })),
      (_o = v({
        signatures: C(A()),
        message: v({
          accountKeys: C(A()),
          header: v({
            numRequiredSignatures: p(),
            numReadonlySignedAccounts: p(),
            numReadonlyUnsignedAccounts: p(),
          }),
          instructions: C(
            v({ accounts: C(p()), data: A(), programIdIndex: p() })
          ),
          recentBlockhash: A(),
          addressTableLookups: D(C(Wa)),
        }),
      })),
      (Da = v({
        pubkey: we,
        signer: rt(),
        writable: rt(),
        source: D(Ne([be("transaction"), be("lookupTable")])),
      })),
      (Ma = v({ accountKeys: C(Da), signatures: C(A()) })),
      (Va = v({ parsed: Dt(), program: A(), programId: we })),
      ($a = v({ accounts: C(we), data: A(), programId: we })),
      (hl = Ne([$a, Va])),
      (yl = Ne([
        v({ parsed: Dt(), program: A(), programId: A() }),
        v({ accounts: C(A()), data: A(), programId: A() }),
      ])),
      (Fa = ir(hl, yl, (n) => ("accounts" in n ? P(n, $a) : P(n, Va)))),
      (ja = v({
        signatures: C(A()),
        message: v({
          accountKeys: C(Da),
          instructions: C(Fa),
          recentBlockhash: A(),
          addressTableLookups: D(O(C(Wa))),
        }),
      })),
      (Vn = v({
        accountIndex: p(),
        mint: A(),
        owner: D(A()),
        programId: D(A()),
        uiTokenAmount: ho,
      })),
      (Ha = v({ writable: C(we), readonly: C(we) })),
      (Xn = v({
        err: Ht,
        fee: p(),
        innerInstructions: D(
          O(
            C(
              v({
                index: p(),
                instructions: C(
                  v({ accounts: C(p()), data: A(), programIdIndex: p() })
                ),
              })
            )
          )
        ),
        preBalances: C(p()),
        postBalances: C(p()),
        logMessages: D(O(C(A()))),
        preTokenBalances: D(O(C(Vn))),
        postTokenBalances: D(O(C(Vn))),
        loadedAddresses: D(Ha),
        computeUnitsConsumed: D(p()),
      })),
      (xo = v({
        err: Ht,
        fee: p(),
        innerInstructions: D(O(C(v({ index: p(), instructions: C(Fa) })))),
        preBalances: C(p()),
        postBalances: C(p()),
        logMessages: D(O(C(A()))),
        preTokenBalances: D(O(C(Vn))),
        postTokenBalances: D(O(C(Vn))),
        loadedAddresses: D(Ha),
        computeUnitsConsumed: D(p()),
      })),
      (pr = Ne([be(0), be("legacy")])),
      (Gt = v({
        pubkey: A(),
        lamports: p(),
        postBalance: O(p()),
        rewardType: O(A()),
        commission: D(O(p())),
      })),
      (pl = Z(
        O(
          v({
            blockhash: A(),
            previousBlockhash: A(),
            parentSlot: p(),
            transactions: C(
              v({ transaction: _o, meta: O(Xn), version: D(pr) })
            ),
            rewards: D(C(Gt)),
            blockTime: O(p()),
            blockHeight: O(p()),
          })
        )
      )),
      (gl = Z(
        O(
          v({
            blockhash: A(),
            previousBlockhash: A(),
            parentSlot: p(),
            rewards: D(C(Gt)),
            blockTime: O(p()),
            blockHeight: O(p()),
          })
        )
      )),
      (ml = Z(
        O(
          v({
            blockhash: A(),
            previousBlockhash: A(),
            parentSlot: p(),
            transactions: C(
              v({ transaction: Ma, meta: O(Xn), version: D(pr) })
            ),
            rewards: D(C(Gt)),
            blockTime: O(p()),
            blockHeight: O(p()),
          })
        )
      )),
      (bl = Z(
        O(
          v({
            blockhash: A(),
            previousBlockhash: A(),
            parentSlot: p(),
            transactions: C(
              v({ transaction: ja, meta: O(xo), version: D(pr) })
            ),
            rewards: D(C(Gt)),
            blockTime: O(p()),
            blockHeight: O(p()),
          })
        )
      )),
      (wl = Z(
        O(
          v({
            blockhash: A(),
            previousBlockhash: A(),
            parentSlot: p(),
            transactions: C(
              v({ transaction: Ma, meta: O(xo), version: D(pr) })
            ),
            rewards: D(C(Gt)),
            blockTime: O(p()),
            blockHeight: O(p()),
          })
        )
      )),
      (kl = Z(
        O(
          v({
            blockhash: A(),
            previousBlockhash: A(),
            parentSlot: p(),
            rewards: D(C(Gt)),
            blockTime: O(p()),
            blockHeight: O(p()),
          })
        )
      )),
      (Sl = Z(
        O(
          v({
            blockhash: A(),
            previousBlockhash: A(),
            parentSlot: p(),
            transactions: C(v({ transaction: _o, meta: O(Xn) })),
            rewards: D(C(Gt)),
            blockTime: O(p()),
          })
        )
      )),
      (wa = Z(
        O(
          v({
            blockhash: A(),
            previousBlockhash: A(),
            parentSlot: p(),
            signatures: C(A()),
            blockTime: O(p()),
          })
        )
      )),
      (Js = Z(
        O(
          v({
            slot: p(),
            meta: O(Xn),
            blockTime: D(O(p())),
            transaction: _o,
            version: D(pr),
          })
        )
      )),
      (Un = Z(
        O(
          v({
            slot: p(),
            transaction: ja,
            meta: O(xo),
            blockTime: D(O(p())),
            version: D(pr),
          })
        )
      )),
      (Bl = Ie(v({ blockhash: A(), lastValidBlockHeight: p() }))),
      (El = Ie(rt())),
      (Il = v({
        slot: p(),
        numTransactions: p(),
        numSlots: p(),
        samplePeriodSecs: p(),
      })),
      (vl = Z(C(Il))),
      (_l = Ie(O(v({ feeCalculator: v({ lamportsPerSignature: p() }) })))),
      (xl = Z(A())),
      (Al = Z(A())),
      (Rl = v({ err: Ht, logs: C(A()), signature: A() })),
      (Ll = v({ result: Zn(Rl), subscription: p() })),
      (Pl = { "solana-client": "js/1.0.0-maintenance" }),
      (go = class {
        constructor(e, t) {
          (this._commitment = void 0),
            (this._confirmTransactionInitialTimeout = void 0),
            (this._rpcEndpoint = void 0),
            (this._rpcWsEndpoint = void 0),
            (this._rpcClient = void 0),
            (this._rpcRequest = void 0),
            (this._rpcBatchRequest = void 0),
            (this._rpcWebSocket = void 0),
            (this._rpcWebSocketConnected = !1),
            (this._rpcWebSocketHeartbeat = null),
            (this._rpcWebSocketIdleTimeout = null),
            (this._rpcWebSocketGeneration = 0),
            (this._disableBlockhashCaching = !1),
            (this._pollingBlockhash = !1),
            (this._blockhashInfo = {
              latestBlockhash: null,
              lastFetch: 0,
              transactionSignatures: [],
              simulatedSignatures: [],
            }),
            (this._nextClientSubscriptionId = 0),
            (this._subscriptionDisposeFunctionsByClientSubscriptionId = {}),
            (this._subscriptionHashByClientSubscriptionId = {}),
            (this._subscriptionStateChangeCallbacksByHash = {}),
            (this._subscriptionCallbacksByServerSubscriptionId = {}),
            (this._subscriptionsByHash = {}),
            (this._subscriptionsAutoDisposedByRpc = new Set()),
            (this.getBlockHeight = (() => {
              let u = {};
              return (d) =>
                E(this, null, function* () {
                  let { commitment: g, config: y } = ye(d),
                    l = this._buildArgs([], g, void 0, y),
                    h = ya(l);
                  return (
                    (u[h] =
                      u[h] ??
                      E(this, null, function* () {
                        try {
                          let m = yield this._rpcRequest("getBlockHeight", l),
                            k = P(m, Z(p()));
                          if ("error" in k)
                            throw new z(
                              k.error,
                              "failed to get block height information"
                            );
                          return k.result;
                        } finally {
                          delete u[h];
                        }
                      })),
                    yield u[h]
                  );
                });
            })());
          let r, s, o, i, c, a;
          t && typeof t == "string"
            ? (this._commitment = t)
            : t &&
              ((this._commitment = t.commitment),
              (this._confirmTransactionInitialTimeout =
                t.confirmTransactionInitialTimeout),
              (r = t.wsEndpoint),
              (s = t.httpHeaders),
              (o = t.fetch),
              (i = t.fetchMiddleware),
              (c = t.disableRetryOnRateLimit),
              (a = t.httpAgent)),
            (this._rpcEndpoint = gf(e)),
            (this._rpcWsEndpoint = r || pf(e)),
            (this._rpcClient = Pf(e, s, o, i, c, a)),
            (this._rpcRequest = Tf(this._rpcClient)),
            (this._rpcBatchRequest = Cf(this._rpcClient)),
            (this._rpcWebSocket = new lo(this._rpcWsEndpoint, {
              autoconnect: !1,
              max_reconnects: 1 / 0,
            })),
            this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)),
            this._rpcWebSocket.on("error", this._wsOnError.bind(this)),
            this._rpcWebSocket.on("close", this._wsOnClose.bind(this)),
            this._rpcWebSocket.on(
              "accountNotification",
              this._wsOnAccountNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "programNotification",
              this._wsOnProgramAccountNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "slotNotification",
              this._wsOnSlotNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "slotsUpdatesNotification",
              this._wsOnSlotUpdatesNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "signatureNotification",
              this._wsOnSignatureNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "rootNotification",
              this._wsOnRootNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "logsNotification",
              this._wsOnLogsNotification.bind(this)
            );
        }
        get commitment() {
          return this._commitment;
        }
        get rpcEndpoint() {
          return this._rpcEndpoint;
        }
        getBalanceAndContext(e, t) {
          return E(this, null, function* () {
            let { commitment: r, config: s } = ye(t),
              o = this._buildArgs([e.toBase58()], r, void 0, s),
              i = yield this._rpcRequest("getBalance", o),
              c = P(i, Ie(p()));
            if ("error" in c)
              throw new z(c.error, `failed to get balance for ${e.toBase58()}`);
            return c.result;
          });
        }
        getBalance(e, t) {
          return E(this, null, function* () {
            return yield this.getBalanceAndContext(e, t)
              .then((r) => r.value)
              .catch((r) => {
                throw new Error(
                  "failed to get balance of account " + e.toBase58() + ": " + r
                );
              });
          });
        }
        getBlockTime(e) {
          return E(this, null, function* () {
            let t = yield this._rpcRequest("getBlockTime", [e]),
              r = P(t, Z(O(p())));
            if ("error" in r)
              throw new z(r.error, `failed to get block time for slot ${e}`);
            return r.result;
          });
        }
        getMinimumLedgerSlot() {
          return E(this, null, function* () {
            let e = yield this._rpcRequest("minimumLedgerSlot", []),
              t = P(e, Z(p()));
            if ("error" in t)
              throw new z(t.error, "failed to get minimum ledger slot");
            return t.result;
          });
        }
        getFirstAvailableBlock() {
          return E(this, null, function* () {
            let e = yield this._rpcRequest("getFirstAvailableBlock", []),
              t = P(e, Wf);
            if ("error" in t)
              throw new z(t.error, "failed to get first available block");
            return t.result;
          });
        }
        getSupply(e) {
          return E(this, null, function* () {
            let t = {};
            typeof e == "string"
              ? (t = { commitment: e })
              : e
              ? (t = Y(F({}, e), {
                  commitment: (e && e.commitment) || this.commitment,
                }))
              : (t = { commitment: this.commitment });
            let r = yield this._rpcRequest("getSupply", [t]),
              s = P(r, Df);
            if ("error" in s) throw new z(s.error, "failed to get supply");
            return s.result;
          });
        }
        getTokenSupply(e, t) {
          return E(this, null, function* () {
            let r = this._buildArgs([e.toBase58()], t),
              s = yield this._rpcRequest("getTokenSupply", r),
              o = P(s, Ie(ho));
            if ("error" in o)
              throw new z(o.error, "failed to get token supply");
            return o.result;
          });
        }
        getTokenAccountBalance(e, t) {
          return E(this, null, function* () {
            let r = this._buildArgs([e.toBase58()], t),
              s = yield this._rpcRequest("getTokenAccountBalance", r),
              o = P(s, Ie(ho));
            if ("error" in o)
              throw new z(o.error, "failed to get token account balance");
            return o.result;
          });
        }
        getTokenAccountsByOwner(e, t, r) {
          return E(this, null, function* () {
            let { commitment: s, config: o } = ye(r),
              i = [e.toBase58()];
            "mint" in t
              ? i.push({ mint: t.mint.toBase58() })
              : i.push({ programId: t.programId.toBase58() });
            let c = this._buildArgs(i, s, "base64", o),
              a = yield this._rpcRequest("getTokenAccountsByOwner", c),
              u = P(a, Vf);
            if ("error" in u)
              throw new z(
                u.error,
                `failed to get token accounts owned by account ${e.toBase58()}`
              );
            return u.result;
          });
        }
        getParsedTokenAccountsByOwner(e, t, r) {
          return E(this, null, function* () {
            let s = [e.toBase58()];
            "mint" in t
              ? s.push({ mint: t.mint.toBase58() })
              : s.push({ programId: t.programId.toBase58() });
            let o = this._buildArgs(s, r, "jsonParsed"),
              i = yield this._rpcRequest("getTokenAccountsByOwner", o),
              c = P(i, $f);
            if ("error" in c)
              throw new z(
                c.error,
                `failed to get token accounts owned by account ${e.toBase58()}`
              );
            return c.result;
          });
        }
        getLargestAccounts(e) {
          return E(this, null, function* () {
            let t = Y(F({}, e), {
                commitment: (e && e.commitment) || this.commitment,
              }),
              r = t.filter || t.commitment ? [t] : [],
              s = yield this._rpcRequest("getLargestAccounts", r),
              o = P(s, Ff);
            if ("error" in o)
              throw new z(o.error, "failed to get largest accounts");
            return o.result;
          });
        }
        getTokenLargestAccounts(e, t) {
          return E(this, null, function* () {
            let r = this._buildArgs([e.toBase58()], t),
              s = yield this._rpcRequest("getTokenLargestAccounts", r),
              o = P(s, Mf);
            if ("error" in o)
              throw new z(o.error, "failed to get token largest accounts");
            return o.result;
          });
        }
        getAccountInfoAndContext(e, t) {
          return E(this, null, function* () {
            let { commitment: r, config: s } = ye(t),
              o = this._buildArgs([e.toBase58()], r, "base64", s),
              i = yield this._rpcRequest("getAccountInfo", o),
              c = P(i, Ie(O(Wr)));
            if ("error" in c)
              throw new z(
                c.error,
                `failed to get info about account ${e.toBase58()}`
              );
            return c.result;
          });
        }
        getParsedAccountInfo(e, t) {
          return E(this, null, function* () {
            let { commitment: r, config: s } = ye(t),
              o = this._buildArgs([e.toBase58()], r, "jsonParsed", s),
              i = yield this._rpcRequest("getAccountInfo", o),
              c = P(i, Ie(O(po)));
            if ("error" in c)
              throw new z(
                c.error,
                `failed to get info about account ${e.toBase58()}`
              );
            return c.result;
          });
        }
        getAccountInfo(e, t) {
          return E(this, null, function* () {
            try {
              return (yield this.getAccountInfoAndContext(e, t)).value;
            } catch (r) {
              throw new Error(
                "failed to get info about account " + e.toBase58() + ": " + r
              );
            }
          });
        }
        getMultipleParsedAccounts(e, t) {
          return E(this, null, function* () {
            let { commitment: r, config: s } = ye(t),
              o = e.map((u) => u.toBase58()),
              i = this._buildArgs([o], r, "jsonParsed", s),
              c = yield this._rpcRequest("getMultipleAccounts", i),
              a = P(c, Ie(C(O(po))));
            if ("error" in a)
              throw new z(a.error, `failed to get info for accounts ${o}`);
            return a.result;
          });
        }
        getMultipleAccountsInfoAndContext(e, t) {
          return E(this, null, function* () {
            let { commitment: r, config: s } = ye(t),
              o = e.map((u) => u.toBase58()),
              i = this._buildArgs([o], r, "base64", s),
              c = yield this._rpcRequest("getMultipleAccounts", i),
              a = P(c, Ie(C(O(Wr))));
            if ("error" in a)
              throw new z(a.error, `failed to get info for accounts ${o}`);
            return a.result;
          });
        }
        getMultipleAccountsInfo(e, t) {
          return E(this, null, function* () {
            return (yield this.getMultipleAccountsInfoAndContext(e, t)).value;
          });
        }
        getStakeActivation(e, t, r) {
          return E(this, null, function* () {
            let { commitment: s, config: o } = ye(t),
              i = this._buildArgs(
                [e.toBase58()],
                s,
                void 0,
                Y(F({}, o), { epoch: r ?? o?.epoch })
              ),
              c = yield this._rpcRequest("getStakeActivation", i),
              a = P(c, Z(Yf));
            if ("error" in a)
              throw new z(
                a.error,
                `failed to get Stake Activation ${e.toBase58()}`
              );
            return a.result;
          });
        }
        getProgramAccounts(e, t) {
          return E(this, null, function* () {
            let { commitment: r, config: s } = ye(t),
              g = s || {},
              { encoding: o } = g,
              i = dt(g, ["encoding"]),
              c = this._buildArgs(
                [e.toBase58()],
                r,
                o || "base64",
                F(F({}, i), i.filters ? { filters: ga(i.filters) } : null)
              ),
              a = yield this._rpcRequest("getProgramAccounts", c),
              u = C(jf),
              d = i.withContext === !0 ? P(a, Ie(u)) : P(a, Z(u));
            if ("error" in d)
              throw new z(
                d.error,
                `failed to get accounts owned by program ${e.toBase58()}`
              );
            return d.result;
          });
        }
        getParsedProgramAccounts(e, t) {
          return E(this, null, function* () {
            let { commitment: r, config: s } = ye(t),
              o = this._buildArgs([e.toBase58()], r, "jsonParsed", s),
              i = yield this._rpcRequest("getProgramAccounts", o),
              c = P(i, Z(C(Gf)));
            if ("error" in c)
              throw new z(
                c.error,
                `failed to get accounts owned by program ${e.toBase58()}`
              );
            return c.result;
          });
        }
        confirmTransaction(e, t) {
          return E(this, null, function* () {
            let r;
            if (typeof e == "string") r = e;
            else {
              let o = e;
              if (o.abortSignal?.aborted)
                return Promise.reject(o.abortSignal.reason);
              r = o.signature;
            }
            let s;
            try {
              s = Re.default.decode(r);
            } catch {
              throw new Error("signature must be base58 encoded: " + r);
            }
            return (
              ie(s.length === 64, "signature has invalid length"),
              typeof e == "string"
                ? yield this.confirmTransactionUsingLegacyTimeoutStrategy({
                    commitment: t || this.commitment,
                    signature: r,
                  })
                : "lastValidBlockHeight" in e
                ? yield this.confirmTransactionUsingBlockHeightExceedanceStrategy(
                    { commitment: t || this.commitment, strategy: e }
                  )
                : yield this.confirmTransactionUsingDurableNonceStrategy({
                    commitment: t || this.commitment,
                    strategy: e,
                  })
            );
          });
        }
        getCancellationPromise(e) {
          return new Promise((t, r) => {
            e != null &&
              (e.aborted
                ? r(e.reason)
                : e.addEventListener("abort", () => {
                    r(e.reason);
                  }));
          });
        }
        getTransactionConfirmationPromise({ commitment: e, signature: t }) {
          let r,
            s,
            o = !1,
            i = new Promise((a, u) => {
              try {
                r = this.onSignature(
                  t,
                  (g, y) => {
                    r = void 0;
                    let l = { context: y, value: g };
                    a({ __type: wt.PROCESSED, response: l });
                  },
                  e
                );
                let d = new Promise((g) => {
                  r == null
                    ? g()
                    : (s = this._onSubscriptionStateChange(r, (y) => {
                        y === "subscribed" && g();
                      }));
                });
                E(this, null, function* () {
                  if ((yield d, o)) return;
                  let g = yield this.getSignatureStatus(t);
                  if (o || g == null) return;
                  let { context: y, value: l } = g;
                  if (l != null)
                    if (l?.err) u(l.err);
                    else {
                      switch (e) {
                        case "confirmed":
                        case "single":
                        case "singleGossip": {
                          if (l.confirmationStatus === "processed") return;
                          break;
                        }
                        case "finalized":
                        case "max":
                        case "root": {
                          if (
                            l.confirmationStatus === "processed" ||
                            l.confirmationStatus === "confirmed"
                          )
                            return;
                          break;
                        }
                        case "processed":
                        case "recent":
                      }
                      (o = !0),
                        a({
                          __type: wt.PROCESSED,
                          response: { context: y, value: l },
                        });
                    }
                });
              } catch (d) {
                u(d);
              }
            });
          return {
            abortConfirmation: () => {
              s && (s(), (s = void 0)),
                r != null && (this.removeSignatureListener(r), (r = void 0));
            },
            confirmationPromise: i,
          };
        }
        confirmTransactionUsingBlockHeightExceedanceStrategy(o) {
          return E(
            this,
            arguments,
            function* ({
              commitment: e,
              strategy: {
                abortSignal: t,
                lastValidBlockHeight: r,
                signature: s,
              },
            }) {
              let i = !1,
                c = new Promise((y) => {
                  let l = () =>
                    E(this, null, function* () {
                      try {
                        return yield this.getBlockHeight(e);
                      } catch {
                        return -1;
                      }
                    });
                  E(this, null, function* () {
                    let h = yield l();
                    if (!i) {
                      for (; h <= r; )
                        if ((yield Mt(1e3), i || ((h = yield l()), i))) return;
                      y({ __type: wt.BLOCKHEIGHT_EXCEEDED });
                    }
                  });
                }),
                { abortConfirmation: a, confirmationPromise: u } =
                  this.getTransactionConfirmationPromise({
                    commitment: e,
                    signature: s,
                  }),
                d = this.getCancellationPromise(t),
                g;
              try {
                let y = yield Promise.race([d, u, c]);
                if (y.__type === wt.PROCESSED) g = y.response;
                else throw new zr(s);
              } finally {
                (i = !0), a();
              }
              return g;
            }
          );
        }
        confirmTransactionUsingDurableNonceStrategy(c) {
          return E(
            this,
            arguments,
            function* ({
              commitment: e,
              strategy: {
                abortSignal: t,
                minContextSlot: r,
                nonceAccountPubkey: s,
                nonceValue: o,
                signature: i,
              },
            }) {
              let a = !1,
                u = new Promise((h) => {
                  let m = o,
                    k = null,
                    w = () =>
                      E(this, null, function* () {
                        try {
                          let { context: R, value: x } =
                            yield this.getNonceAndContext(s, {
                              commitment: e,
                              minContextSlot: r,
                            });
                          return (k = R.slot), x?.nonce;
                        } catch {
                          return m;
                        }
                      });
                  E(this, null, function* () {
                    if (((m = yield w()), !a))
                      for (;;) {
                        if (o !== m) {
                          h({
                            __type: wt.NONCE_INVALID,
                            slotInWhichNonceDidAdvance: k,
                          });
                          return;
                        }
                        if ((yield Mt(2e3), a || ((m = yield w()), a))) return;
                      }
                  });
                }),
                { abortConfirmation: d, confirmationPromise: g } =
                  this.getTransactionConfirmationPromise({
                    commitment: e,
                    signature: i,
                  }),
                y = this.getCancellationPromise(t),
                l;
              try {
                let h = yield Promise.race([y, g, u]);
                if (h.__type === wt.PROCESSED) l = h.response;
                else {
                  let m;
                  for (;;) {
                    let k = yield this.getSignatureStatus(i);
                    if (k == null) break;
                    if (k.context.slot < (h.slotInWhichNonceDidAdvance ?? r)) {
                      yield Mt(400);
                      continue;
                    }
                    m = k;
                    break;
                  }
                  if (m?.value) {
                    let k = e || "finalized",
                      { confirmationStatus: w } = m.value;
                    switch (k) {
                      case "processed":
                      case "recent":
                        if (
                          w !== "processed" &&
                          w !== "confirmed" &&
                          w !== "finalized"
                        )
                          throw new Pt(i);
                        break;
                      case "confirmed":
                      case "single":
                      case "singleGossip":
                        if (w !== "confirmed" && w !== "finalized")
                          throw new Pt(i);
                        break;
                      case "finalized":
                      case "max":
                      case "root":
                        if (w !== "finalized") throw new Pt(i);
                        break;
                      default:
                    }
                    l = { context: m.context, value: { err: m.value.err } };
                  } else throw new Pt(i);
                }
              } finally {
                (a = !0), d();
              }
              return l;
            }
          );
        }
        confirmTransactionUsingLegacyTimeoutStrategy(r) {
          return E(
            this,
            arguments,
            function* ({ commitment: e, signature: t }) {
              let s,
                o = new Promise((u) => {
                  let d = this._confirmTransactionInitialTimeout || 6e4;
                  switch (e) {
                    case "processed":
                    case "recent":
                    case "single":
                    case "confirmed":
                    case "singleGossip": {
                      d = this._confirmTransactionInitialTimeout || 3e4;
                      break;
                    }
                  }
                  s = setTimeout(
                    () => u({ __type: wt.TIMED_OUT, timeoutMs: d }),
                    d
                  );
                }),
                { abortConfirmation: i, confirmationPromise: c } =
                  this.getTransactionConfirmationPromise({
                    commitment: e,
                    signature: t,
                  }),
                a;
              try {
                let u = yield Promise.race([c, o]);
                if (u.__type === wt.PROCESSED) a = u.response;
                else throw new Kr(t, u.timeoutMs / 1e3);
              } finally {
                clearTimeout(s), i();
              }
              return a;
            }
          );
        }
        getClusterNodes() {
          return E(this, null, function* () {
            let e = yield this._rpcRequest("getClusterNodes", []),
              t = P(e, Z(C(al)));
            if ("error" in t)
              throw new z(t.error, "failed to get cluster nodes");
            return t.result;
          });
        }
        getVoteAccounts(e) {
          return E(this, null, function* () {
            let t = this._buildArgs([], e),
              r = yield this._rpcRequest("getVoteAccounts", t),
              s = P(r, cl);
            if ("error" in s)
              throw new z(s.error, "failed to get vote accounts");
            return s.result;
          });
        }
        getSlot(e) {
          return E(this, null, function* () {
            let { commitment: t, config: r } = ye(e),
              s = this._buildArgs([], t, void 0, r),
              o = yield this._rpcRequest("getSlot", s),
              i = P(o, Z(p()));
            if ("error" in i) throw new z(i.error, "failed to get slot");
            return i.result;
          });
        }
        getSlotLeader(e) {
          return E(this, null, function* () {
            let { commitment: t, config: r } = ye(e),
              s = this._buildArgs([], t, void 0, r),
              o = yield this._rpcRequest("getSlotLeader", s),
              i = P(o, Z(A()));
            if ("error" in i) throw new z(i.error, "failed to get slot leader");
            return i.result;
          });
        }
        getSlotLeaders(e, t) {
          return E(this, null, function* () {
            let r = [e, t],
              s = yield this._rpcRequest("getSlotLeaders", r),
              o = P(s, Z(C(we)));
            if ("error" in o)
              throw new z(o.error, "failed to get slot leaders");
            return o.result;
          });
        }
        getSignatureStatus(e, t) {
          return E(this, null, function* () {
            let { context: r, value: s } = yield this.getSignatureStatuses(
              [e],
              t
            );
            ie(s.length === 1);
            let o = s[0];
            return { context: r, value: o };
          });
        }
        getSignatureStatuses(e, t) {
          return E(this, null, function* () {
            let r = [e];
            t && r.push(t);
            let s = yield this._rpcRequest("getSignatureStatuses", r),
              o = P(s, ll);
            if ("error" in o)
              throw new z(o.error, "failed to get signature status");
            return o.result;
          });
        }
        getTransactionCount(e) {
          return E(this, null, function* () {
            let { commitment: t, config: r } = ye(e),
              s = this._buildArgs([], t, void 0, r),
              o = yield this._rpcRequest("getTransactionCount", s),
              i = P(o, Z(p()));
            if ("error" in i)
              throw new z(i.error, "failed to get transaction count");
            return i.result;
          });
        }
        getTotalSupply(e) {
          return E(this, null, function* () {
            return (yield this.getSupply({
              commitment: e,
              excludeNonCirculatingAccountsList: !0,
            })).value.total;
          });
        }
        getInflationGovernor(e) {
          return E(this, null, function* () {
            let t = this._buildArgs([], e),
              r = yield this._rpcRequest("getInflationGovernor", t),
              s = P(r, Of);
            if ("error" in s) throw new z(s.error, "failed to get inflation");
            return s.result;
          });
        }
        getInflationReward(e, t, r) {
          return E(this, null, function* () {
            let { commitment: s, config: o } = ye(r),
              i = this._buildArgs(
                [e.map((u) => u.toBase58())],
                s,
                void 0,
                Y(F({}, o), { epoch: t ?? o?.epoch })
              ),
              c = yield this._rpcRequest("getInflationReward", i),
              a = P(c, wf);
            if ("error" in a)
              throw new z(a.error, "failed to get inflation reward");
            return a.result;
          });
        }
        getInflationRate() {
          return E(this, null, function* () {
            let e = yield this._rpcRequest("getInflationRate", []),
              t = P(e, Nf);
            if ("error" in t)
              throw new z(t.error, "failed to get inflation rate");
            return t.result;
          });
        }
        getEpochInfo(e) {
          return E(this, null, function* () {
            let { commitment: t, config: r } = ye(e),
              s = this._buildArgs([], t, void 0, r),
              o = yield this._rpcRequest("getEpochInfo", s),
              i = P(o, zf);
            if ("error" in i) throw new z(i.error, "failed to get epoch info");
            return i.result;
          });
        }
        getEpochSchedule() {
          return E(this, null, function* () {
            let e = yield this._rpcRequest("getEpochSchedule", []),
              t = P(e, Kf);
            if ("error" in t)
              throw new z(t.error, "failed to get epoch schedule");
            let r = t.result;
            return new Mn(
              r.slotsPerEpoch,
              r.leaderScheduleSlotOffset,
              r.warmup,
              r.firstNormalEpoch,
              r.firstNormalSlot
            );
          });
        }
        getLeaderSchedule() {
          return E(this, null, function* () {
            let e = yield this._rpcRequest("getLeaderSchedule", []),
              t = P(e, qf);
            if ("error" in t)
              throw new z(t.error, "failed to get leader schedule");
            return t.result;
          });
        }
        getMinimumBalanceForRentExemption(e, t) {
          return E(this, null, function* () {
            let r = this._buildArgs([e], t),
              s = yield this._rpcRequest(
                "getMinimumBalanceForRentExemption",
                r
              ),
              o = P(s, dl);
            return "error" in o
              ? (console.warn(
                  "Unable to fetch minimum balance for rent exemption"
                ),
                0)
              : o.result;
          });
        }
        getRecentBlockhashAndContext(e) {
          return E(this, null, function* () {
            let {
              context: t,
              value: { blockhash: r },
            } = yield this.getLatestBlockhashAndContext(e);
            return {
              context: t,
              value: {
                blockhash: r,
                feeCalculator: {
                  get lamportsPerSignature() {
                    throw new Error(
                      "The capability to fetch `lamportsPerSignature` using the `getRecentBlockhash` API is no longer offered by the network. Use the `getFeeForMessage` API to obtain the fee for a given message."
                    );
                  },
                  toJSON() {
                    return {};
                  },
                },
              },
            };
          });
        }
        getRecentPerformanceSamples(e) {
          return E(this, null, function* () {
            let t = yield this._rpcRequest(
                "getRecentPerformanceSamples",
                e ? [e] : []
              ),
              r = P(t, vl);
            if ("error" in r)
              throw new z(r.error, "failed to get recent performance samples");
            return r.result;
          });
        }
        getFeeCalculatorForBlockhash(e, t) {
          return E(this, null, function* () {
            let r = this._buildArgs([e], t),
              s = yield this._rpcRequest("getFeeCalculatorForBlockhash", r),
              o = P(s, _l);
            if ("error" in o)
              throw new z(o.error, "failed to get fee calculator");
            let { context: i, value: c } = o.result;
            return { context: i, value: c !== null ? c.feeCalculator : null };
          });
        }
        getFeeForMessage(e, t) {
          return E(this, null, function* () {
            let r = X(e.serialize()).toString("base64"),
              s = this._buildArgs([r], t),
              o = yield this._rpcRequest("getFeeForMessage", s),
              i = P(o, Ie(O(p())));
            if ("error" in i)
              throw new z(i.error, "failed to get fee for message");
            if (i.result === null) throw new Error("invalid blockhash");
            return i.result;
          });
        }
        getRecentPrioritizationFees(e) {
          return E(this, null, function* () {
            let t = e?.lockedWritableAccounts?.map((i) => i.toBase58()),
              r = t?.length ? [t] : [],
              s = yield this._rpcRequest("getRecentPrioritizationFees", r),
              o = P(s, Uf);
            if ("error" in o)
              throw new z(o.error, "failed to get recent prioritization fees");
            return o.result;
          });
        }
        getRecentBlockhash(e) {
          return E(this, null, function* () {
            try {
              return (yield this.getRecentBlockhashAndContext(e)).value;
            } catch (t) {
              throw new Error("failed to get recent blockhash: " + t);
            }
          });
        }
        getLatestBlockhash(e) {
          return E(this, null, function* () {
            try {
              return (yield this.getLatestBlockhashAndContext(e)).value;
            } catch (t) {
              throw new Error("failed to get recent blockhash: " + t);
            }
          });
        }
        getLatestBlockhashAndContext(e) {
          return E(this, null, function* () {
            let { commitment: t, config: r } = ye(e),
              s = this._buildArgs([], t, void 0, r),
              o = yield this._rpcRequest("getLatestBlockhash", s),
              i = P(o, Bl);
            if ("error" in i)
              throw new z(i.error, "failed to get latest blockhash");
            return i.result;
          });
        }
        isBlockhashValid(e, t) {
          return E(this, null, function* () {
            let { commitment: r, config: s } = ye(t),
              o = this._buildArgs([e], r, void 0, s),
              i = yield this._rpcRequest("isBlockhashValid", o),
              c = P(i, El);
            if ("error" in c)
              throw new z(
                c.error,
                "failed to determine if the blockhash `" + e + "`is valid"
              );
            return c.result;
          });
        }
        getVersion() {
          return E(this, null, function* () {
            let e = yield this._rpcRequest("getVersion", []),
              t = P(e, Z(xf));
            if ("error" in t) throw new z(t.error, "failed to get version");
            return t.result;
          });
        }
        getGenesisHash() {
          return E(this, null, function* () {
            let e = yield this._rpcRequest("getGenesisHash", []),
              t = P(e, Z(A()));
            if ("error" in t)
              throw new z(t.error, "failed to get genesis hash");
            return t.result;
          });
        }
        getBlock(e, t) {
          return E(this, null, function* () {
            let { commitment: r, config: s } = ye(t),
              o = this._buildArgsAtLeastConfirmed([e], r, void 0, s),
              i = yield this._rpcRequest("getBlock", o);
            try {
              switch (s?.transactionDetails) {
                case "accounts": {
                  let c = P(i, ml);
                  if ("error" in c) throw c.error;
                  return c.result;
                }
                case "none": {
                  let c = P(i, gl);
                  if ("error" in c) throw c.error;
                  return c.result;
                }
                default: {
                  let c = P(i, pl);
                  if ("error" in c) throw c.error;
                  let { result: a } = c;
                  return a
                    ? Y(F({}, a), {
                        transactions: a.transactions.map(
                          ({ transaction: u, meta: d, version: g }) => ({
                            meta: d,
                            transaction: Y(F({}, u), {
                              message: Xs(g, u.message),
                            }),
                            version: g,
                          })
                        ),
                      })
                    : null;
                }
              }
            } catch (c) {
              throw new z(c, "failed to get confirmed block");
            }
          });
        }
        getParsedBlock(e, t) {
          return E(this, null, function* () {
            let { commitment: r, config: s } = ye(t),
              o = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", s),
              i = yield this._rpcRequest("getBlock", o);
            try {
              switch (s?.transactionDetails) {
                case "accounts": {
                  let c = P(i, wl);
                  if ("error" in c) throw c.error;
                  return c.result;
                }
                case "none": {
                  let c = P(i, kl);
                  if ("error" in c) throw c.error;
                  return c.result;
                }
                default: {
                  let c = P(i, bl);
                  if ("error" in c) throw c.error;
                  return c.result;
                }
              }
            } catch (c) {
              throw new z(c, "failed to get block");
            }
          });
        }
        getBlockProduction(e) {
          return E(this, null, function* () {
            let t, r;
            if (typeof e == "string") r = e;
            else if (e) {
              let c = e,
                { commitment: a } = c,
                u = dt(c, ["commitment"]);
              (r = a), (t = u);
            }
            let s = this._buildArgs([], r, "base64", t),
              o = yield this._rpcRequest("getBlockProduction", s),
              i = P(o, Lf);
            if ("error" in i)
              throw new z(
                i.error,
                "failed to get block production information"
              );
            return i.result;
          });
        }
        getTransaction(e, t) {
          return E(this, null, function* () {
            let { commitment: r, config: s } = ye(t),
              o = this._buildArgsAtLeastConfirmed([e], r, void 0, s),
              i = yield this._rpcRequest("getTransaction", o),
              c = P(i, Js);
            if ("error" in c) throw new z(c.error, "failed to get transaction");
            let a = c.result;
            return (
              a &&
              Y(F({}, a), {
                transaction: Y(F({}, a.transaction), {
                  message: Xs(a.version, a.transaction.message),
                }),
              })
            );
          });
        }
        getParsedTransaction(e, t) {
          return E(this, null, function* () {
            let { commitment: r, config: s } = ye(t),
              o = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", s),
              i = yield this._rpcRequest("getTransaction", o),
              c = P(i, Un);
            if ("error" in c) throw new z(c.error, "failed to get transaction");
            return c.result;
          });
        }
        getParsedTransactions(e, t) {
          return E(this, null, function* () {
            let { commitment: r, config: s } = ye(t),
              o = e.map((a) => ({
                methodName: "getTransaction",
                args: this._buildArgsAtLeastConfirmed([a], r, "jsonParsed", s),
              }));
            return (yield this._rpcBatchRequest(o)).map((a) => {
              let u = P(a, Un);
              if ("error" in u)
                throw new z(u.error, "failed to get transactions");
              return u.result;
            });
          });
        }
        getTransactions(e, t) {
          return E(this, null, function* () {
            let { commitment: r, config: s } = ye(t),
              o = e.map((a) => ({
                methodName: "getTransaction",
                args: this._buildArgsAtLeastConfirmed([a], r, void 0, s),
              }));
            return (yield this._rpcBatchRequest(o)).map((a) => {
              let u = P(a, Js);
              if ("error" in u)
                throw new z(u.error, "failed to get transactions");
              let d = u.result;
              return (
                d &&
                Y(F({}, d), {
                  transaction: Y(F({}, d.transaction), {
                    message: Xs(d.version, d.transaction.message),
                  }),
                })
              );
            });
          });
        }
        getConfirmedBlock(e, t) {
          return E(this, null, function* () {
            let r = this._buildArgsAtLeastConfirmed([e], t),
              s = yield this._rpcRequest("getBlock", r),
              o = P(s, Sl);
            if ("error" in o)
              throw new z(o.error, "failed to get confirmed block");
            let i = o.result;
            if (!i) throw new Error("Confirmed block " + e + " not found");
            let c = Y(F({}, i), {
              transactions: i.transactions.map(
                ({ transaction: a, meta: u }) => {
                  let d = new lt(a.message);
                  return { meta: u, transaction: Y(F({}, a), { message: d }) };
                }
              ),
            });
            return Y(F({}, c), {
              transactions: c.transactions.map(
                ({ transaction: a, meta: u }) => ({
                  meta: u,
                  transaction: ue.populate(a.message, a.signatures),
                })
              ),
            });
          });
        }
        getBlocks(e, t, r) {
          return E(this, null, function* () {
            let s = this._buildArgsAtLeastConfirmed(
                t !== void 0 ? [e, t] : [e],
                r
              ),
              o = yield this._rpcRequest("getBlocks", s),
              i = P(o, Z(C(p())));
            if ("error" in i) throw new z(i.error, "failed to get blocks");
            return i.result;
          });
        }
        getBlockSignatures(e, t) {
          return E(this, null, function* () {
            let r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
                transactionDetails: "signatures",
                rewards: !1,
              }),
              s = yield this._rpcRequest("getBlock", r),
              o = P(s, wa);
            if ("error" in o) throw new z(o.error, "failed to get block");
            let i = o.result;
            if (!i) throw new Error("Block " + e + " not found");
            return i;
          });
        }
        getConfirmedBlockSignatures(e, t) {
          return E(this, null, function* () {
            let r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
                transactionDetails: "signatures",
                rewards: !1,
              }),
              s = yield this._rpcRequest("getBlock", r),
              o = P(s, wa);
            if ("error" in o)
              throw new z(o.error, "failed to get confirmed block");
            let i = o.result;
            if (!i) throw new Error("Confirmed block " + e + " not found");
            return i;
          });
        }
        getConfirmedTransaction(e, t) {
          return E(this, null, function* () {
            let r = this._buildArgsAtLeastConfirmed([e], t),
              s = yield this._rpcRequest("getTransaction", r),
              o = P(s, Js);
            if ("error" in o) throw new z(o.error, "failed to get transaction");
            let i = o.result;
            if (!i) return i;
            let c = new lt(i.transaction.message),
              a = i.transaction.signatures;
            return Y(F({}, i), { transaction: ue.populate(c, a) });
          });
        }
        getParsedConfirmedTransaction(e, t) {
          return E(this, null, function* () {
            let r = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"),
              s = yield this._rpcRequest("getTransaction", r),
              o = P(s, Un);
            if ("error" in o)
              throw new z(o.error, "failed to get confirmed transaction");
            return o.result;
          });
        }
        getParsedConfirmedTransactions(e, t) {
          return E(this, null, function* () {
            let r = e.map((i) => ({
              methodName: "getTransaction",
              args: this._buildArgsAtLeastConfirmed([i], t, "jsonParsed"),
            }));
            return (yield this._rpcBatchRequest(r)).map((i) => {
              let c = P(i, Un);
              if ("error" in c)
                throw new z(c.error, "failed to get confirmed transactions");
              return c.result;
            });
          });
        }
        getConfirmedSignaturesForAddress(e, t, r) {
          return E(this, null, function* () {
            let s = {},
              o = yield this.getFirstAvailableBlock();
            for (; !("until" in s) && (t--, !(t <= 0 || t < o)); )
              try {
                let a = yield this.getConfirmedBlockSignatures(t, "finalized");
                a.signatures.length > 0 &&
                  (s.until = a.signatures[a.signatures.length - 1].toString());
              } catch (a) {
                if (a instanceof Error && a.message.includes("skipped"))
                  continue;
                throw a;
              }
            let i = yield this.getSlot("finalized");
            for (; !("before" in s) && (r++, !(r > i)); )
              try {
                let a = yield this.getConfirmedBlockSignatures(r);
                a.signatures.length > 0 &&
                  (s.before = a.signatures[a.signatures.length - 1].toString());
              } catch (a) {
                if (a instanceof Error && a.message.includes("skipped"))
                  continue;
                throw a;
              }
            return (yield this.getConfirmedSignaturesForAddress2(e, s)).map(
              (a) => a.signature
            );
          });
        }
        getConfirmedSignaturesForAddress2(e, t, r) {
          return E(this, null, function* () {
            let s = this._buildArgsAtLeastConfirmed(
                [e.toBase58()],
                r,
                void 0,
                t
              ),
              o = yield this._rpcRequest(
                "getConfirmedSignaturesForAddress2",
                s
              ),
              i = P(o, Zf);
            if ("error" in i)
              throw new z(
                i.error,
                "failed to get confirmed signatures for address"
              );
            return i.result;
          });
        }
        getSignaturesForAddress(e, t, r) {
          return E(this, null, function* () {
            let s = this._buildArgsAtLeastConfirmed(
                [e.toBase58()],
                r,
                void 0,
                t
              ),
              o = yield this._rpcRequest("getSignaturesForAddress", s),
              i = P(o, Xf);
            if ("error" in i)
              throw new z(i.error, "failed to get signatures for address");
            return i.result;
          });
        }
        getAddressLookupTable(e, t) {
          return E(this, null, function* () {
            let { context: r, value: s } = yield this.getAccountInfoAndContext(
                e,
                t
              ),
              o = null;
            return (
              s !== null &&
                (o = new qr({ key: e, state: qr.deserialize(s.data) })),
              { context: r, value: o }
            );
          });
        }
        getNonceAndContext(e, t) {
          return E(this, null, function* () {
            let { context: r, value: s } = yield this.getAccountInfoAndContext(
                e,
                t
              ),
              o = null;
            return (
              s !== null && (o = Dn.fromAccountData(s.data)),
              { context: r, value: o }
            );
          });
        }
        getNonce(e, t) {
          return E(this, null, function* () {
            return yield this.getNonceAndContext(e, t)
              .then((r) => r.value)
              .catch((r) => {
                throw new Error(
                  "failed to get nonce for account " + e.toBase58() + ": " + r
                );
              });
          });
        }
        requestAirdrop(e, t) {
          return E(this, null, function* () {
            let r = yield this._rpcRequest("requestAirdrop", [e.toBase58(), t]),
              s = P(r, xl);
            if ("error" in s)
              throw new z(s.error, `airdrop to ${e.toBase58()} failed`);
            return s.result;
          });
        }
        _blockhashWithExpiryBlockHeight(e) {
          return E(this, null, function* () {
            if (!e) {
              for (; this._pollingBlockhash; ) yield Mt(100);
              let r = Date.now() - this._blockhashInfo.lastFetch >= Ka;
              if (this._blockhashInfo.latestBlockhash !== null && !r)
                return this._blockhashInfo.latestBlockhash;
            }
            return yield this._pollNewBlockhash();
          });
        }
        _pollNewBlockhash() {
          return E(this, null, function* () {
            this._pollingBlockhash = !0;
            try {
              let e = Date.now(),
                t = this._blockhashInfo.latestBlockhash,
                r = t ? t.blockhash : null;
              for (let s = 0; s < 50; s++) {
                let o = yield this.getLatestBlockhash("finalized");
                if (r !== o.blockhash)
                  return (
                    (this._blockhashInfo = {
                      latestBlockhash: o,
                      lastFetch: Date.now(),
                      transactionSignatures: [],
                      simulatedSignatures: [],
                    }),
                    o
                  );
                yield Mt(Oa / 2);
              }
              throw new Error(
                `Unable to obtain a new blockhash after ${Date.now() - e}ms`
              );
            } finally {
              this._pollingBlockhash = !1;
            }
          });
        }
        getStakeMinimumDelegation(e) {
          return E(this, null, function* () {
            let { commitment: t, config: r } = ye(e),
              s = this._buildArgs([], t, "base64", r),
              o = yield this._rpcRequest("getStakeMinimumDelegation", s),
              i = P(o, Ie(p()));
            if ("error" in i)
              throw new z(i.error, "failed to get stake minimum delegation");
            return i.result;
          });
        }
        simulateTransaction(e, t, r) {
          return E(this, null, function* () {
            if ("message" in e) {
              let m = e.serialize(),
                k = $.Buffer.from(m).toString("base64");
              if (Array.isArray(t) || r !== void 0)
                throw new Error("Invalid arguments");
              let w = t || {};
              (w.encoding = "base64"),
                "commitment" in w || (w.commitment = this.commitment),
                t &&
                  typeof t == "object" &&
                  "innerInstructions" in t &&
                  (w.innerInstructions = t.innerInstructions);
              let R = [k, w],
                x = yield this._rpcRequest("simulateTransaction", R),
                U = P(x, ma);
              if ("error" in U)
                throw new Error(
                  "failed to simulate transaction: " + U.error.message
                );
              return U.result;
            }
            let s;
            if (e instanceof ue) {
              let h = e;
              (s = new ue()),
                (s.feePayer = h.feePayer),
                (s.instructions = e.instructions),
                (s.nonceInfo = h.nonceInfo),
                (s.signatures = h.signatures);
            } else (s = ue.populate(e)), (s._message = s._json = void 0);
            if (t !== void 0 && !Array.isArray(t))
              throw new Error("Invalid arguments");
            let o = t;
            if (s.nonceInfo && o) s.sign(...o);
            else {
              let h = this._disableBlockhashCaching;
              for (;;) {
                let m = yield this._blockhashWithExpiryBlockHeight(h);
                if (
                  ((s.lastValidBlockHeight = m.lastValidBlockHeight),
                  (s.recentBlockhash = m.blockhash),
                  !o)
                )
                  break;
                if ((s.sign(...o), !s.signature)) throw new Error("!signature");
                let k = s.signature.toString("base64");
                if (
                  !this._blockhashInfo.simulatedSignatures.includes(k) &&
                  !this._blockhashInfo.transactionSignatures.includes(k)
                ) {
                  this._blockhashInfo.simulatedSignatures.push(k);
                  break;
                } else h = !0;
              }
            }
            let i = s._compile(),
              c = i.serialize(),
              u = s._serialize(c).toString("base64"),
              d = { encoding: "base64", commitment: this.commitment };
            if (r) {
              let h = (Array.isArray(r) ? r : i.nonProgramIds()).map((m) =>
                m.toBase58()
              );
              d.accounts = { encoding: "base64", addresses: h };
            }
            o && (d.sigVerify = !0),
              t &&
                typeof t == "object" &&
                "innerInstructions" in t &&
                (d.innerInstructions = t.innerInstructions);
            let g = [u, d],
              y = yield this._rpcRequest("simulateTransaction", g),
              l = P(y, ma);
            if ("error" in l) {
              let h;
              if (
                "data" in l.error &&
                ((h = l.error.data.logs), h && Array.isArray(h))
              ) {
                let m = `
    `,
                  k = m + h.join(m);
                console.error(l.error.message, k);
              }
              throw new Ft({
                action: "simulate",
                signature: "",
                transactionMessage: l.error.message,
                logs: h,
              });
            }
            return l.result;
          });
        }
        sendTransaction(e, t, r) {
          return E(this, null, function* () {
            if ("version" in e) {
              if (t && Array.isArray(t)) throw new Error("Invalid arguments");
              let i = e.serialize();
              return yield this.sendRawTransaction(i, t);
            }
            if (t === void 0 || !Array.isArray(t))
              throw new Error("Invalid arguments");
            let s = t;
            if (e.nonceInfo) e.sign(...s);
            else {
              let i = this._disableBlockhashCaching;
              for (;;) {
                let c = yield this._blockhashWithExpiryBlockHeight(i);
                if (
                  ((e.lastValidBlockHeight = c.lastValidBlockHeight),
                  (e.recentBlockhash = c.blockhash),
                  e.sign(...s),
                  !e.signature)
                )
                  throw new Error("!signature");
                let a = e.signature.toString("base64");
                if (this._blockhashInfo.transactionSignatures.includes(a))
                  i = !0;
                else {
                  this._blockhashInfo.transactionSignatures.push(a);
                  break;
                }
              }
            }
            let o = e.serialize();
            return yield this.sendRawTransaction(o, r);
          });
        }
        sendRawTransaction(e, t) {
          return E(this, null, function* () {
            let r = X(e).toString("base64");
            return yield this.sendEncodedTransaction(r, t);
          });
        }
        sendEncodedTransaction(e, t) {
          return E(this, null, function* () {
            let r = { encoding: "base64" },
              s = t && t.skipPreflight,
              o =
                s === !0
                  ? "processed"
                  : (t && t.preflightCommitment) || this.commitment;
            t && t.maxRetries != null && (r.maxRetries = t.maxRetries),
              t &&
                t.minContextSlot != null &&
                (r.minContextSlot = t.minContextSlot),
              s && (r.skipPreflight = s),
              o && (r.preflightCommitment = o);
            let i = [e, r],
              c = yield this._rpcRequest("sendTransaction", i),
              a = P(c, Al);
            if ("error" in a) {
              let u;
              throw (
                ("data" in a.error && (u = a.error.data.logs),
                new Ft({
                  action: s ? "send" : "simulate",
                  signature: "",
                  transactionMessage: a.error.message,
                  logs: u,
                }))
              );
            }
            return a.result;
          });
        }
        _wsOnOpen() {
          (this._rpcWebSocketConnected = !0),
            (this._rpcWebSocketHeartbeat = setInterval(() => {
              E(this, null, function* () {
                try {
                  yield this._rpcWebSocket.notify("ping");
                } catch {}
              });
            }, 5e3)),
            this._updateSubscriptions();
        }
        _wsOnError(e) {
          (this._rpcWebSocketConnected = !1),
            console.error("ws error:", e.message);
        }
        _wsOnClose(e) {
          if (
            ((this._rpcWebSocketConnected = !1),
            (this._rpcWebSocketGeneration =
              (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER),
            this._rpcWebSocketIdleTimeout &&
              (clearTimeout(this._rpcWebSocketIdleTimeout),
              (this._rpcWebSocketIdleTimeout = null)),
            this._rpcWebSocketHeartbeat &&
              (clearInterval(this._rpcWebSocketHeartbeat),
              (this._rpcWebSocketHeartbeat = null)),
            e === 1e3)
          ) {
            this._updateSubscriptions();
            return;
          }
          (this._subscriptionCallbacksByServerSubscriptionId = {}),
            Object.entries(this._subscriptionsByHash).forEach(([t, r]) => {
              this._setSubscription(t, Y(F({}, r), { state: "pending" }));
            });
        }
        _setSubscription(e, t) {
          let r = this._subscriptionsByHash[e]?.state;
          if (((this._subscriptionsByHash[e] = t), r !== t.state)) {
            let s = this._subscriptionStateChangeCallbacksByHash[e];
            s &&
              s.forEach((o) => {
                try {
                  o(t.state);
                } catch {}
              });
          }
        }
        _onSubscriptionStateChange(e, t) {
          let r = this._subscriptionHashByClientSubscriptionId[e];
          if (r == null) return () => {};
          let s = (this._subscriptionStateChangeCallbacksByHash[r] ||=
            new Set());
          return (
            s.add(t),
            () => {
              s.delete(t),
                s.size === 0 &&
                  delete this._subscriptionStateChangeCallbacksByHash[r];
            }
          );
        }
        _updateSubscriptions() {
          return E(this, null, function* () {
            if (Object.keys(this._subscriptionsByHash).length === 0) {
              this._rpcWebSocketConnected &&
                ((this._rpcWebSocketConnected = !1),
                (this._rpcWebSocketIdleTimeout = setTimeout(() => {
                  this._rpcWebSocketIdleTimeout = null;
                  try {
                    this._rpcWebSocket.close();
                  } catch (r) {
                    r instanceof Error &&
                      console.log(
                        `Error when closing socket connection: ${r.message}`
                      );
                  }
                }, 500)));
              return;
            }
            if (
              (this._rpcWebSocketIdleTimeout !== null &&
                (clearTimeout(this._rpcWebSocketIdleTimeout),
                (this._rpcWebSocketIdleTimeout = null),
                (this._rpcWebSocketConnected = !0)),
              !this._rpcWebSocketConnected)
            ) {
              this._rpcWebSocket.connect();
              return;
            }
            let e = this._rpcWebSocketGeneration,
              t = () => e === this._rpcWebSocketGeneration;
            yield Promise.all(
              Object.keys(this._subscriptionsByHash).map((r) =>
                E(this, null, function* () {
                  let s = this._subscriptionsByHash[r];
                  if (s !== void 0)
                    switch (s.state) {
                      case "pending":
                      case "unsubscribed":
                        if (s.callbacks.size === 0) {
                          delete this._subscriptionsByHash[r],
                            s.state === "unsubscribed" &&
                              delete this
                                ._subscriptionCallbacksByServerSubscriptionId[
                                s.serverSubscriptionId
                              ],
                            yield this._updateSubscriptions();
                          return;
                        }
                        yield E(this, null, function* () {
                          let { args: o, method: i } = s;
                          try {
                            this._setSubscription(
                              r,
                              Y(F({}, s), { state: "subscribing" })
                            );
                            let c = yield this._rpcWebSocket.call(i, o);
                            this._setSubscription(
                              r,
                              Y(F({}, s), {
                                serverSubscriptionId: c,
                                state: "subscribed",
                              })
                            ),
                              (this._subscriptionCallbacksByServerSubscriptionId[
                                c
                              ] = s.callbacks),
                              yield this._updateSubscriptions();
                          } catch (c) {
                            if (
                              (console.error(
                                `Received ${
                                  c instanceof Error ? "" : "JSON-RPC "
                                }error calling \`${i}\``,
                                { args: o, error: c }
                              ),
                              !t())
                            )
                              return;
                            this._setSubscription(
                              r,
                              Y(F({}, s), { state: "pending" })
                            ),
                              yield this._updateSubscriptions();
                          }
                        });
                        break;
                      case "subscribed":
                        s.callbacks.size === 0 &&
                          (yield E(this, null, function* () {
                            let {
                              serverSubscriptionId: o,
                              unsubscribeMethod: i,
                            } = s;
                            if (this._subscriptionsAutoDisposedByRpc.has(o))
                              this._subscriptionsAutoDisposedByRpc.delete(o);
                            else {
                              this._setSubscription(
                                r,
                                Y(F({}, s), { state: "unsubscribing" })
                              ),
                                this._setSubscription(
                                  r,
                                  Y(F({}, s), { state: "unsubscribing" })
                                );
                              try {
                                yield this._rpcWebSocket.call(i, [o]);
                              } catch (c) {
                                if (
                                  (c instanceof Error &&
                                    console.error(`${i} error:`, c.message),
                                  !t())
                                )
                                  return;
                                this._setSubscription(
                                  r,
                                  Y(F({}, s), { state: "subscribed" })
                                ),
                                  yield this._updateSubscriptions();
                                return;
                              }
                            }
                            this._setSubscription(
                              r,
                              Y(F({}, s), { state: "unsubscribed" })
                            ),
                              yield this._updateSubscriptions();
                          }));
                        break;
                    }
                })
              )
            );
          });
        }
        _handleServerNotification(e, t) {
          let r = this._subscriptionCallbacksByServerSubscriptionId[e];
          r !== void 0 &&
            r.forEach((s) => {
              try {
                s(...t);
              } catch (o) {
                console.error(o);
              }
            });
        }
        _wsOnAccountNotification(e) {
          let { result: t, subscription: r } = P(e, Jf);
          this._handleServerNotification(r, [t.value, t.context]);
        }
        _makeSubscription(e, t) {
          let r = this._nextClientSubscriptionId++,
            s = ya([e.method, t]),
            o = this._subscriptionsByHash[s];
          return (
            o === void 0
              ? (this._subscriptionsByHash[s] = Y(F({}, e), {
                  args: t,
                  callbacks: new Set([e.callback]),
                  state: "pending",
                }))
              : o.callbacks.add(e.callback),
            (this._subscriptionHashByClientSubscriptionId[r] = s),
            (this._subscriptionDisposeFunctionsByClientSubscriptionId[r] = () =>
              E(this, null, function* () {
                delete this._subscriptionDisposeFunctionsByClientSubscriptionId[
                  r
                ],
                  delete this._subscriptionHashByClientSubscriptionId[r];
                let i = this._subscriptionsByHash[s];
                ie(
                  i !== void 0,
                  `Could not find a \`Subscription\` when tearing down client subscription #${r}`
                ),
                  i.callbacks.delete(e.callback),
                  yield this._updateSubscriptions();
              })),
            this._updateSubscriptions(),
            r
          );
        }
        onAccountChange(e, t, r) {
          let { commitment: s, config: o } = ye(r),
            i = this._buildArgs(
              [e.toBase58()],
              s || this._commitment || "finalized",
              "base64",
              o
            );
          return this._makeSubscription(
            {
              callback: t,
              method: "accountSubscribe",
              unsubscribeMethod: "accountUnsubscribe",
            },
            i
          );
        }
        removeAccountChangeListener(e) {
          return E(this, null, function* () {
            yield this._unsubscribeClientSubscription(e, "account change");
          });
        }
        _wsOnProgramAccountNotification(e) {
          let { result: t, subscription: r } = P(e, el);
          this._handleServerNotification(r, [
            { accountId: t.value.pubkey, accountInfo: t.value.account },
            t.context,
          ]);
        }
        onProgramAccountChange(e, t, r, s) {
          let { commitment: o, config: i } = ye(r),
            c = this._buildArgs(
              [e.toBase58()],
              o || this._commitment || "finalized",
              "base64",
              i || (s ? { filters: ga(s) } : void 0)
            );
          return this._makeSubscription(
            {
              callback: t,
              method: "programSubscribe",
              unsubscribeMethod: "programUnsubscribe",
            },
            c
          );
        }
        removeProgramAccountChangeListener(e) {
          return E(this, null, function* () {
            yield this._unsubscribeClientSubscription(
              e,
              "program account change"
            );
          });
        }
        onLogs(e, t, r) {
          let s = this._buildArgs(
            [typeof e == "object" ? { mentions: [e.toString()] } : e],
            r || this._commitment || "finalized"
          );
          return this._makeSubscription(
            {
              callback: t,
              method: "logsSubscribe",
              unsubscribeMethod: "logsUnsubscribe",
            },
            s
          );
        }
        removeOnLogsListener(e) {
          return E(this, null, function* () {
            yield this._unsubscribeClientSubscription(e, "logs");
          });
        }
        _wsOnLogsNotification(e) {
          let { result: t, subscription: r } = P(e, Ll);
          this._handleServerNotification(r, [t.value, t.context]);
        }
        _wsOnSlotNotification(e) {
          let { result: t, subscription: r } = P(e, rl);
          this._handleServerNotification(r, [t]);
        }
        onSlotChange(e) {
          return this._makeSubscription(
            {
              callback: e,
              method: "slotSubscribe",
              unsubscribeMethod: "slotUnsubscribe",
            },
            []
          );
        }
        removeSlotChangeListener(e) {
          return E(this, null, function* () {
            yield this._unsubscribeClientSubscription(e, "slot change");
          });
        }
        _wsOnSlotUpdatesNotification(e) {
          let { result: t, subscription: r } = P(e, sl);
          this._handleServerNotification(r, [t]);
        }
        onSlotUpdate(e) {
          return this._makeSubscription(
            {
              callback: e,
              method: "slotsUpdatesSubscribe",
              unsubscribeMethod: "slotsUpdatesUnsubscribe",
            },
            []
          );
        }
        removeSlotUpdateListener(e) {
          return E(this, null, function* () {
            yield this._unsubscribeClientSubscription(e, "slot update");
          });
        }
        _unsubscribeClientSubscription(e, t) {
          return E(this, null, function* () {
            let r = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
            r
              ? yield r()
              : console.warn(
                  `Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`
                );
          });
        }
        _buildArgs(e, t, r, s) {
          let o = t || this._commitment;
          if (o || r || s) {
            let i = {};
            r && (i.encoding = r),
              o && (i.commitment = o),
              s && (i = Object.assign(i, s)),
              e.push(i);
          }
          return e;
        }
        _buildArgsAtLeastConfirmed(e, t, r, s) {
          let o = t || this._commitment;
          if (o && !["confirmed", "finalized"].includes(o))
            throw new Error(
              "Using Connection with default commitment: `" +
                this._commitment +
                "`, but method requires at least `confirmed`"
            );
          return this._buildArgs(e, t, r, s);
        }
        _wsOnSignatureNotification(e) {
          let { result: t, subscription: r } = P(e, ol);
          t.value !== "receivedSignature" &&
            this._subscriptionsAutoDisposedByRpc.add(r),
            this._handleServerNotification(
              r,
              t.value === "receivedSignature"
                ? [{ type: "received" }, t.context]
                : [{ type: "status", result: t.value }, t.context]
            );
        }
        onSignature(e, t, r) {
          let s = this._buildArgs([e], r || this._commitment || "finalized"),
            o = this._makeSubscription(
              {
                callback: (i, c) => {
                  if (i.type === "status") {
                    t(i.result, c);
                    try {
                      this.removeSignatureListener(o);
                    } catch {}
                  }
                },
                method: "signatureSubscribe",
                unsubscribeMethod: "signatureUnsubscribe",
              },
              s
            );
          return o;
        }
        onSignatureWithOptions(e, t, r) {
          let a = Y(F({}, r), {
              commitment:
                (r && r.commitment) || this._commitment || "finalized",
            }),
            { commitment: s } = a,
            o = dt(a, ["commitment"]),
            i = this._buildArgs([e], s, void 0, o),
            c = this._makeSubscription(
              {
                callback: (u, d) => {
                  t(u, d);
                  try {
                    this.removeSignatureListener(c);
                  } catch {}
                },
                method: "signatureSubscribe",
                unsubscribeMethod: "signatureUnsubscribe",
              },
              i
            );
          return c;
        }
        removeSignatureListener(e) {
          return E(this, null, function* () {
            yield this._unsubscribeClientSubscription(e, "signature result");
          });
        }
        _wsOnRootNotification(e) {
          let { result: t, subscription: r } = P(e, il);
          this._handleServerNotification(r, [t]);
        }
        onRootChange(e) {
          return this._makeSubscription(
            {
              callback: e,
              method: "rootSubscribe",
              unsubscribeMethod: "rootUnsubscribe",
            },
            []
          );
        }
        removeRootChangeListener(e) {
          return E(this, null, function* () {
            yield this._unsubscribeClientSubscription(e, "root change");
          });
        }
      }),
      ($n = class n {
        constructor(e) {
          (this._keypair = void 0), (this._keypair = e ?? fa());
        }
        static generate() {
          return new n(fa());
        }
        static fromSecretKey(e, t) {
          if (e.byteLength !== 64) throw new Error("bad secret key size");
          let r = e.slice(32, 64);
          if (!t || !t.skipValidation) {
            let s = e.slice(0, 32),
              o = qn(s);
            for (let i = 0; i < 32; i++)
              if (r[i] !== o[i])
                throw new Error("provided secretKey is invalid");
          }
          return new n({ publicKey: r, secretKey: e });
        }
        static fromSeed(e) {
          let t = qn(e),
            r = new Uint8Array(64);
          return r.set(e), r.set(t, 32), new n({ publicKey: t, secretKey: r });
        }
        get publicKey() {
          return new T(this._keypair.publicKey);
        }
        get secretKey() {
          return new Uint8Array(this._keypair.secretKey);
        }
      }),
      (kt = Object.freeze({
        CreateLookupTable: {
          index: 0,
          layout: f.struct([
            f.u32("instruction"),
            lr("recentSlot"),
            f.u8("bumpSeed"),
          ]),
        },
        FreezeLookupTable: {
          index: 1,
          layout: f.struct([f.u32("instruction")]),
        },
        ExtendLookupTable: {
          index: 2,
          layout: f.struct([
            f.u32("instruction"),
            lr(),
            f.seq(Q(), f.offset(f.u32(), -8), "addresses"),
          ]),
        },
        DeactivateLookupTable: {
          index: 3,
          layout: f.struct([f.u32("instruction")]),
        },
        CloseLookupTable: {
          index: 4,
          layout: f.struct([f.u32("instruction")]),
        },
      })),
      (mo = class {
        constructor() {}
        static decodeInstructionType(e) {
          this.checkProgramId(e.programId);
          let r = f.u32("instruction").decode(e.data),
            s;
          for (let [o, i] of Object.entries(kt))
            if (i.index == r) {
              s = o;
              break;
            }
          if (!s)
            throw new Error(
              "Invalid Instruction. Should be a LookupTable Instruction"
            );
          return s;
        }
        static decodeCreateLookupTable(e) {
          this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 4);
          let { recentSlot: t } = ce(kt.CreateLookupTable, e.data);
          return {
            authority: e.keys[1].pubkey,
            payer: e.keys[2].pubkey,
            recentSlot: Number(t),
          };
        }
        static decodeExtendLookupTable(e) {
          if ((this.checkProgramId(e.programId), e.keys.length < 2))
            throw new Error(
              `invalid instruction; found ${e.keys.length} keys, expected at least 2`
            );
          let { addresses: t } = ce(kt.ExtendLookupTable, e.data);
          return {
            lookupTable: e.keys[0].pubkey,
            authority: e.keys[1].pubkey,
            payer: e.keys.length > 2 ? e.keys[2].pubkey : void 0,
            addresses: t.map((r) => new T(r)),
          };
        }
        static decodeCloseLookupTable(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 3),
            {
              lookupTable: e.keys[0].pubkey,
              authority: e.keys[1].pubkey,
              recipient: e.keys[2].pubkey,
            }
          );
        }
        static decodeFreezeLookupTable(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 2),
            { lookupTable: e.keys[0].pubkey, authority: e.keys[1].pubkey }
          );
        }
        static decodeDeactivateLookupTable(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 2),
            { lookupTable: e.keys[0].pubkey, authority: e.keys[1].pubkey }
          );
        }
        static checkProgramId(e) {
          if (!e.equals(Dr.programId))
            throw new Error(
              "invalid instruction; programId is not AddressLookupTable Program"
            );
        }
        static checkKeysLength(e, t) {
          if (e.length < t)
            throw new Error(
              `invalid instruction; found ${e.length} keys, expected at least ${t}`
            );
        }
      }),
      (Dr = class {
        constructor() {}
        static createLookupTable(e) {
          let [t, r] = T.findProgramAddressSync(
              [
                e.authority.toBuffer(),
                (0, Vr.toBufferLE)(BigInt(e.recentSlot), 8),
              ],
              this.programId
            ),
            s = kt.CreateLookupTable,
            o = ne(s, { recentSlot: BigInt(e.recentSlot), bumpSeed: r }),
            i = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
              { pubkey: e.payer, isSigner: !0, isWritable: !0 },
              { pubkey: Te.programId, isSigner: !1, isWritable: !1 },
            ];
          return [new fe({ programId: this.programId, keys: i, data: o }), t];
        }
        static freezeLookupTable(e) {
          let t = kt.FreezeLookupTable,
            r = ne(t),
            s = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
            ];
          return new fe({ programId: this.programId, keys: s, data: r });
        }
        static extendLookupTable(e) {
          let t = kt.ExtendLookupTable,
            r = ne(t, { addresses: e.addresses.map((o) => o.toBytes()) }),
            s = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
            ];
          return (
            e.payer &&
              s.push(
                { pubkey: e.payer, isSigner: !0, isWritable: !0 },
                { pubkey: Te.programId, isSigner: !1, isWritable: !1 }
              ),
            new fe({ programId: this.programId, keys: s, data: r })
          );
        }
        static deactivateLookupTable(e) {
          let t = kt.DeactivateLookupTable,
            r = ne(t),
            s = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
            ];
          return new fe({ programId: this.programId, keys: s, data: r });
        }
        static closeLookupTable(e) {
          let t = kt.CloseLookupTable,
            r = ne(t),
            s = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
              { pubkey: e.recipient, isSigner: !1, isWritable: !0 },
            ];
          return new fe({ programId: this.programId, keys: s, data: r });
        }
      });
    Dr.programId = new T("AddressLookupTab1e1111111111111111111111111");
    (bo = class {
      constructor() {}
      static decodeInstructionType(e) {
        this.checkProgramId(e.programId);
        let r = f.u8("instruction").decode(e.data),
          s;
        for (let [o, i] of Object.entries(ct))
          if (i.index == r) {
            s = o;
            break;
          }
        if (!s)
          throw new Error(
            "Instruction type incorrect; not a ComputeBudgetInstruction"
          );
        return s;
      }
      static decodeRequestUnits(e) {
        this.checkProgramId(e.programId);
        let { units: t, additionalFee: r } = ce(ct.RequestUnits, e.data);
        return { units: t, additionalFee: r };
      }
      static decodeRequestHeapFrame(e) {
        this.checkProgramId(e.programId);
        let { bytes: t } = ce(ct.RequestHeapFrame, e.data);
        return { bytes: t };
      }
      static decodeSetComputeUnitLimit(e) {
        this.checkProgramId(e.programId);
        let { units: t } = ce(ct.SetComputeUnitLimit, e.data);
        return { units: t };
      }
      static decodeSetComputeUnitPrice(e) {
        this.checkProgramId(e.programId);
        let { microLamports: t } = ce(ct.SetComputeUnitPrice, e.data);
        return { microLamports: t };
      }
      static checkProgramId(e) {
        if (!e.equals(Mr.programId))
          throw new Error(
            "invalid instruction; programId is not ComputeBudgetProgram"
          );
      }
    }),
      (ct = Object.freeze({
        RequestUnits: {
          index: 0,
          layout: f.struct([
            f.u8("instruction"),
            f.u32("units"),
            f.u32("additionalFee"),
          ]),
        },
        RequestHeapFrame: {
          index: 1,
          layout: f.struct([f.u8("instruction"), f.u32("bytes")]),
        },
        SetComputeUnitLimit: {
          index: 2,
          layout: f.struct([f.u8("instruction"), f.u32("units")]),
        },
        SetComputeUnitPrice: {
          index: 3,
          layout: f.struct([f.u8("instruction"), lr("microLamports")]),
        },
      })),
      (Mr = class {
        constructor() {}
        static requestUnits(e) {
          let t = ct.RequestUnits,
            r = ne(t, e);
          return new fe({ keys: [], programId: this.programId, data: r });
        }
        static requestHeapFrame(e) {
          let t = ct.RequestHeapFrame,
            r = ne(t, e);
          return new fe({ keys: [], programId: this.programId, data: r });
        }
        static setComputeUnitLimit(e) {
          let t = ct.SetComputeUnitLimit,
            r = ne(t, e);
          return new fe({ keys: [], programId: this.programId, data: r });
        }
        static setComputeUnitPrice(e) {
          let t = ct.SetComputeUnitPrice,
            r = ne(t, { microLamports: BigInt(e.microLamports) });
          return new fe({ keys: [], programId: this.programId, data: r });
        }
      });
    Mr.programId = new T("ComputeBudget111111111111111111111111111111");
    (ka = 64),
      (Sa = 32),
      (Ba = 64),
      (Ea = f.struct([
        f.u8("numSignatures"),
        f.u8("padding"),
        f.u16("signatureOffset"),
        f.u16("signatureInstructionIndex"),
        f.u16("publicKeyOffset"),
        f.u16("publicKeyInstructionIndex"),
        f.u16("messageDataOffset"),
        f.u16("messageDataSize"),
        f.u16("messageInstructionIndex"),
      ])),
      (Fn = class n {
        constructor() {}
        static createInstructionWithPublicKey(e) {
          let {
            publicKey: t,
            message: r,
            signature: s,
            instructionIndex: o,
          } = e;
          ie(
            t.length === Sa,
            `Public Key must be ${Sa} bytes but received ${t.length} bytes`
          ),
            ie(
              s.length === Ba,
              `Signature must be ${Ba} bytes but received ${s.length} bytes`
            );
          let i = Ea.span,
            c = i + t.length,
            a = c + s.length,
            u = 1,
            d = $.Buffer.alloc(a + r.length),
            g = o ?? 65535;
          return (
            Ea.encode(
              {
                numSignatures: u,
                padding: 0,
                signatureOffset: c,
                signatureInstructionIndex: g,
                publicKeyOffset: i,
                publicKeyInstructionIndex: g,
                messageDataOffset: a,
                messageDataSize: r.length,
                messageInstructionIndex: g,
              },
              d
            ),
            d.fill(t, i),
            d.fill(s, c),
            d.fill(r, a),
            new fe({ keys: [], programId: n.programId, data: d })
          );
        }
        static createInstructionWithPrivateKey(e) {
          let { privateKey: t, message: r, instructionIndex: s } = e;
          ie(
            t.length === ka,
            `Private key must be ${ka} bytes but received ${t.length} bytes`
          );
          try {
            let o = $n.fromSecretKey(t),
              i = o.publicKey.toBytes(),
              c = Eo(r, o.secretKey);
            return this.createInstructionWithPublicKey({
              publicKey: i,
              message: r,
              signature: c,
              instructionIndex: s,
            });
          } catch (o) {
            throw new Error(`Error creating instruction; ${o}`);
          }
        }
      });
    Fn.programId = new T("Ed25519SigVerify111111111111111111111111111");
    Tl = (n, e) => {
      let t = Nn.sign(n, e);
      return [t.toCompactRawBytes(), t.recovery];
    };
    Nn.utils.isValidPrivateKey;
    (Cl = Nn.getPublicKey),
      (Ia = 32),
      (Qs = 20),
      (va = 64),
      (Ol = 11),
      (eo = f.struct([
        f.u8("numSignatures"),
        f.u16("signatureOffset"),
        f.u8("signatureInstructionIndex"),
        f.u16("ethAddressOffset"),
        f.u8("ethAddressInstructionIndex"),
        f.u16("messageDataOffset"),
        f.u16("messageDataSize"),
        f.u8("messageInstructionIndex"),
        f.blob(20, "ethAddress"),
        f.blob(64, "signature"),
        f.u8("recoveryId"),
      ])),
      (jn = class n {
        constructor() {}
        static publicKeyToEthAddress(e) {
          ie(
            e.length === va,
            `Public key must be ${va} bytes but received ${e.length} bytes`
          );
          try {
            return $.Buffer.from(os(X(e))).slice(-Qs);
          } catch (t) {
            throw new Error(`Error constructing Ethereum address: ${t}`);
          }
        }
        static createInstructionWithPublicKey(e) {
          let {
            publicKey: t,
            message: r,
            signature: s,
            recoveryId: o,
            instructionIndex: i,
          } = e;
          return n.createInstructionWithEthAddress({
            ethAddress: n.publicKeyToEthAddress(t),
            message: r,
            signature: s,
            recoveryId: o,
            instructionIndex: i,
          });
        }
        static createInstructionWithEthAddress(e) {
          let {
              ethAddress: t,
              message: r,
              signature: s,
              recoveryId: o,
              instructionIndex: i = 0,
            } = e,
            c;
          typeof t == "string"
            ? t.startsWith("0x")
              ? (c = $.Buffer.from(t.substr(2), "hex"))
              : (c = $.Buffer.from(t, "hex"))
            : (c = t),
            ie(
              c.length === Qs,
              `Address must be ${Qs} bytes but received ${c.length} bytes`
            );
          let a = 1 + Ol,
            u = a,
            d = a + c.length,
            g = d + s.length + 1,
            y = 1,
            l = $.Buffer.alloc(eo.span + r.length);
          return (
            eo.encode(
              {
                numSignatures: y,
                signatureOffset: d,
                signatureInstructionIndex: i,
                ethAddressOffset: u,
                ethAddressInstructionIndex: i,
                messageDataOffset: g,
                messageDataSize: r.length,
                messageInstructionIndex: i,
                signature: X(s),
                ethAddress: X(c),
                recoveryId: o,
              },
              l
            ),
            l.fill(X(r), eo.span),
            new fe({ keys: [], programId: n.programId, data: l })
          );
        }
        static createInstructionWithPrivateKey(e) {
          let { privateKey: t, message: r, instructionIndex: s } = e;
          ie(
            t.length === Ia,
            `Private key must be ${Ia} bytes but received ${t.length} bytes`
          );
          try {
            let o = X(t),
              i = Cl(o, !1).slice(1),
              c = $.Buffer.from(os(X(r))),
              [a, u] = Tl(c, o);
            return this.createInstructionWithPublicKey({
              publicKey: i,
              message: r,
              signature: a,
              recoveryId: u,
              instructionIndex: s,
            });
          } catch (o) {
            throw new Error(`Error creating instruction; ${o}`);
          }
        }
      });
    jn.programId = new T("KeccakSecp256k11111111111111111111111111111");
    (Ya = new T("StakeConfig11111111111111111111111111111111")),
      (Hn = class {
        constructor(e, t) {
          (this.staker = void 0),
            (this.withdrawer = void 0),
            (this.staker = e),
            (this.withdrawer = t);
        }
      }),
      (jt = class {
        constructor(e, t, r) {
          (this.unixTimestamp = void 0),
            (this.epoch = void 0),
            (this.custodian = void 0),
            (this.unixTimestamp = e),
            (this.epoch = t),
            (this.custodian = r);
        }
      });
    Ga = jt;
    jt.default = new Ga(0, 0, T.default);
    (wo = class {
      constructor() {}
      static decodeInstructionType(e) {
        this.checkProgramId(e.programId);
        let r = f.u32("instruction").decode(e.data),
          s;
        for (let [o, i] of Object.entries(Ae))
          if (i.index == r) {
            s = o;
            break;
          }
        if (!s)
          throw new Error("Instruction type incorrect; not a StakeInstruction");
        return s;
      }
      static decodeInitialize(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
        let { authorized: t, lockup: r } = ce(Ae.Initialize, e.data);
        return {
          stakePubkey: e.keys[0].pubkey,
          authorized: new Hn(new T(t.staker), new T(t.withdrawer)),
          lockup: new jt(r.unixTimestamp, r.epoch, new T(r.custodian)),
        };
      }
      static decodeDelegate(e) {
        return (
          this.checkProgramId(e.programId),
          this.checkKeyLength(e.keys, 6),
          ce(Ae.Delegate, e.data),
          {
            stakePubkey: e.keys[0].pubkey,
            votePubkey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[5].pubkey,
          }
        );
      }
      static decodeAuthorize(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
        let { newAuthorized: t, stakeAuthorizationType: r } = ce(
            Ae.Authorize,
            e.data
          ),
          s = {
            stakePubkey: e.keys[0].pubkey,
            authorizedPubkey: e.keys[2].pubkey,
            newAuthorizedPubkey: new T(t),
            stakeAuthorizationType: { index: r },
          };
        return e.keys.length > 3 && (s.custodianPubkey = e.keys[3].pubkey), s;
      }
      static decodeAuthorizeWithSeed(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
        let {
            newAuthorized: t,
            stakeAuthorizationType: r,
            authoritySeed: s,
            authorityOwner: o,
          } = ce(Ae.AuthorizeWithSeed, e.data),
          i = {
            stakePubkey: e.keys[0].pubkey,
            authorityBase: e.keys[1].pubkey,
            authoritySeed: s,
            authorityOwner: new T(o),
            newAuthorizedPubkey: new T(t),
            stakeAuthorizationType: { index: r },
          };
        return e.keys.length > 3 && (i.custodianPubkey = e.keys[3].pubkey), i;
      }
      static decodeSplit(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
        let { lamports: t } = ce(Ae.Split, e.data);
        return {
          stakePubkey: e.keys[0].pubkey,
          splitStakePubkey: e.keys[1].pubkey,
          authorizedPubkey: e.keys[2].pubkey,
          lamports: t,
        };
      }
      static decodeMerge(e) {
        return (
          this.checkProgramId(e.programId),
          this.checkKeyLength(e.keys, 3),
          ce(Ae.Merge, e.data),
          {
            stakePubkey: e.keys[0].pubkey,
            sourceStakePubKey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[4].pubkey,
          }
        );
      }
      static decodeWithdraw(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
        let { lamports: t } = ce(Ae.Withdraw, e.data),
          r = {
            stakePubkey: e.keys[0].pubkey,
            toPubkey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[4].pubkey,
            lamports: t,
          };
        return e.keys.length > 5 && (r.custodianPubkey = e.keys[5].pubkey), r;
      }
      static decodeDeactivate(e) {
        return (
          this.checkProgramId(e.programId),
          this.checkKeyLength(e.keys, 3),
          ce(Ae.Deactivate, e.data),
          { stakePubkey: e.keys[0].pubkey, authorizedPubkey: e.keys[2].pubkey }
        );
      }
      static checkProgramId(e) {
        if (!e.equals(dr.programId))
          throw new Error("invalid instruction; programId is not StakeProgram");
      }
      static checkKeyLength(e, t) {
        if (e.length < t)
          throw new Error(
            `invalid instruction; found ${e.length} keys, expected at least ${t}`
          );
      }
    }),
      (Ae = Object.freeze({
        Initialize: {
          index: 0,
          layout: f.struct([f.u32("instruction"), Mu(), Vu()]),
        },
        Authorize: {
          index: 1,
          layout: f.struct([
            f.u32("instruction"),
            Q("newAuthorized"),
            f.u32("stakeAuthorizationType"),
          ]),
        },
        Delegate: { index: 2, layout: f.struct([f.u32("instruction")]) },
        Split: {
          index: 3,
          layout: f.struct([f.u32("instruction"), f.ns64("lamports")]),
        },
        Withdraw: {
          index: 4,
          layout: f.struct([f.u32("instruction"), f.ns64("lamports")]),
        },
        Deactivate: { index: 5, layout: f.struct([f.u32("instruction")]) },
        Merge: { index: 7, layout: f.struct([f.u32("instruction")]) },
        AuthorizeWithSeed: {
          index: 8,
          layout: f.struct([
            f.u32("instruction"),
            Q("newAuthorized"),
            f.u32("stakeAuthorizationType"),
            Vt("authoritySeed"),
            Q("authorityOwner"),
          ]),
        },
      })),
      (Nl = Object.freeze({ Staker: { index: 0 }, Withdrawer: { index: 1 } })),
      (dr = class {
        constructor() {}
        static initialize(e) {
          let { stakePubkey: t, authorized: r, lockup: s } = e,
            o = s || jt.default,
            i = Ae.Initialize,
            c = ne(i, {
              authorized: {
                staker: X(r.staker.toBuffer()),
                withdrawer: X(r.withdrawer.toBuffer()),
              },
              lockup: {
                unixTimestamp: o.unixTimestamp,
                epoch: o.epoch,
                custodian: X(o.custodian.toBuffer()),
              },
            }),
            a = {
              keys: [
                { pubkey: t, isSigner: !1, isWritable: !0 },
                { pubkey: fr, isSigner: !1, isWritable: !1 },
              ],
              programId: this.programId,
              data: c,
            };
          return new fe(a);
        }
        static createAccountWithSeed(e) {
          let t = new ue();
          t.add(
            Te.createAccountWithSeed({
              fromPubkey: e.fromPubkey,
              newAccountPubkey: e.stakePubkey,
              basePubkey: e.basePubkey,
              seed: e.seed,
              lamports: e.lamports,
              space: this.space,
              programId: this.programId,
            })
          );
          let { stakePubkey: r, authorized: s, lockup: o } = e;
          return t.add(
            this.initialize({ stakePubkey: r, authorized: s, lockup: o })
          );
        }
        static createAccount(e) {
          let t = new ue();
          t.add(
            Te.createAccount({
              fromPubkey: e.fromPubkey,
              newAccountPubkey: e.stakePubkey,
              lamports: e.lamports,
              space: this.space,
              programId: this.programId,
            })
          );
          let { stakePubkey: r, authorized: s, lockup: o } = e;
          return t.add(
            this.initialize({ stakePubkey: r, authorized: s, lockup: o })
          );
        }
        static delegate(e) {
          let { stakePubkey: t, authorizedPubkey: r, votePubkey: s } = e,
            o = Ae.Delegate,
            i = ne(o);
          return new ue().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: s, isSigner: !1, isWritable: !1 },
              { pubkey: it, isSigner: !1, isWritable: !1 },
              { pubkey: Kn, isSigner: !1, isWritable: !1 },
              { pubkey: Ya, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: i,
          });
        }
        static authorize(e) {
          let {
              stakePubkey: t,
              authorizedPubkey: r,
              newAuthorizedPubkey: s,
              stakeAuthorizationType: o,
              custodianPubkey: i,
            } = e,
            c = Ae.Authorize,
            a = ne(c, {
              newAuthorized: X(s.toBuffer()),
              stakeAuthorizationType: o.index,
            }),
            u = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: it, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ];
          return (
            i && u.push({ pubkey: i, isSigner: !0, isWritable: !1 }),
            new ue().add({ keys: u, programId: this.programId, data: a })
          );
        }
        static authorizeWithSeed(e) {
          let {
              stakePubkey: t,
              authorityBase: r,
              authoritySeed: s,
              authorityOwner: o,
              newAuthorizedPubkey: i,
              stakeAuthorizationType: c,
              custodianPubkey: a,
            } = e,
            u = Ae.AuthorizeWithSeed,
            d = ne(u, {
              newAuthorized: X(i.toBuffer()),
              stakeAuthorizationType: c.index,
              authoritySeed: s,
              authorityOwner: X(o.toBuffer()),
            }),
            g = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
              { pubkey: it, isSigner: !1, isWritable: !1 },
            ];
          return (
            a && g.push({ pubkey: a, isSigner: !0, isWritable: !1 }),
            new ue().add({ keys: g, programId: this.programId, data: d })
          );
        }
        static splitInstruction(e) {
          let {
              stakePubkey: t,
              authorizedPubkey: r,
              splitStakePubkey: s,
              lamports: o,
            } = e,
            i = Ae.Split,
            c = ne(i, { lamports: o });
          return new fe({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: s, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: c,
          });
        }
        static split(e, t) {
          let r = new ue();
          return (
            r.add(
              Te.createAccount({
                fromPubkey: e.authorizedPubkey,
                newAccountPubkey: e.splitStakePubkey,
                lamports: t,
                space: this.space,
                programId: this.programId,
              })
            ),
            r.add(this.splitInstruction(e))
          );
        }
        static splitWithSeed(e, t) {
          let {
              stakePubkey: r,
              authorizedPubkey: s,
              splitStakePubkey: o,
              basePubkey: i,
              seed: c,
              lamports: a,
            } = e,
            u = new ue();
          return (
            u.add(
              Te.allocate({
                accountPubkey: o,
                basePubkey: i,
                seed: c,
                space: this.space,
                programId: this.programId,
              })
            ),
            t &&
              t > 0 &&
              u.add(
                Te.transfer({
                  fromPubkey: e.authorizedPubkey,
                  toPubkey: o,
                  lamports: t,
                })
              ),
            u.add(
              this.splitInstruction({
                stakePubkey: r,
                authorizedPubkey: s,
                splitStakePubkey: o,
                lamports: a,
              })
            )
          );
        }
        static merge(e) {
          let { stakePubkey: t, sourceStakePubKey: r, authorizedPubkey: s } = e,
            o = Ae.Merge,
            i = ne(o);
          return new ue().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !1, isWritable: !0 },
              { pubkey: it, isSigner: !1, isWritable: !1 },
              { pubkey: Kn, isSigner: !1, isWritable: !1 },
              { pubkey: s, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: i,
          });
        }
        static withdraw(e) {
          let {
              stakePubkey: t,
              authorizedPubkey: r,
              toPubkey: s,
              lamports: o,
              custodianPubkey: i,
            } = e,
            c = Ae.Withdraw,
            a = ne(c, { lamports: o }),
            u = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: s, isSigner: !1, isWritable: !0 },
              { pubkey: it, isSigner: !1, isWritable: !1 },
              { pubkey: Kn, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ];
          return (
            i && u.push({ pubkey: i, isSigner: !0, isWritable: !1 }),
            new ue().add({ keys: u, programId: this.programId, data: a })
          );
        }
        static deactivate(e) {
          let { stakePubkey: t, authorizedPubkey: r } = e,
            s = Ae.Deactivate,
            o = ne(s);
          return new ue().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: it, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: o,
          });
        }
      });
    dr.programId = new T("Stake11111111111111111111111111111111111111");
    dr.space = 200;
    (Gn = class {
      constructor(e, t, r, s) {
        (this.nodePubkey = void 0),
          (this.authorizedVoter = void 0),
          (this.authorizedWithdrawer = void 0),
          (this.commission = void 0),
          (this.nodePubkey = e),
          (this.authorizedVoter = t),
          (this.authorizedWithdrawer = r),
          (this.commission = s);
      }
    }),
      (ko = class {
        constructor() {}
        static decodeInstructionType(e) {
          this.checkProgramId(e.programId);
          let r = f.u32("instruction").decode(e.data),
            s;
          for (let [o, i] of Object.entries(ut))
            if (i.index == r) {
              s = o;
              break;
            }
          if (!s)
            throw new Error(
              "Instruction type incorrect; not a VoteInstruction"
            );
          return s;
        }
        static decodeInitializeAccount(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 4);
          let { voteInit: t } = ce(ut.InitializeAccount, e.data);
          return {
            votePubkey: e.keys[0].pubkey,
            nodePubkey: e.keys[3].pubkey,
            voteInit: new Gn(
              new T(t.nodePubkey),
              new T(t.authorizedVoter),
              new T(t.authorizedWithdrawer),
              t.commission
            ),
          };
        }
        static decodeAuthorize(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let { newAuthorized: t, voteAuthorizationType: r } = ce(
            ut.Authorize,
            e.data
          );
          return {
            votePubkey: e.keys[0].pubkey,
            authorizedPubkey: e.keys[2].pubkey,
            newAuthorizedPubkey: new T(t),
            voteAuthorizationType: { index: r },
          };
        }
        static decodeAuthorizeWithSeed(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let {
            voteAuthorizeWithSeedArgs: {
              currentAuthorityDerivedKeyOwnerPubkey: t,
              currentAuthorityDerivedKeySeed: r,
              newAuthorized: s,
              voteAuthorizationType: o,
            },
          } = ce(ut.AuthorizeWithSeed, e.data);
          return {
            currentAuthorityDerivedKeyBasePubkey: e.keys[2].pubkey,
            currentAuthorityDerivedKeyOwnerPubkey: new T(t),
            currentAuthorityDerivedKeySeed: r,
            newAuthorizedPubkey: new T(s),
            voteAuthorizationType: { index: o },
            votePubkey: e.keys[0].pubkey,
          };
        }
        static decodeWithdraw(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let { lamports: t } = ce(ut.Withdraw, e.data);
          return {
            votePubkey: e.keys[0].pubkey,
            authorizedWithdrawerPubkey: e.keys[2].pubkey,
            lamports: t,
            toPubkey: e.keys[1].pubkey,
          };
        }
        static checkProgramId(e) {
          if (!e.equals(hr.programId))
            throw new Error(
              "invalid instruction; programId is not VoteProgram"
            );
        }
        static checkKeyLength(e, t) {
          if (e.length < t)
            throw new Error(
              `invalid instruction; found ${e.length} keys, expected at least ${t}`
            );
        }
      }),
      (ut = Object.freeze({
        InitializeAccount: {
          index: 0,
          layout: f.struct([f.u32("instruction"), $u()]),
        },
        Authorize: {
          index: 1,
          layout: f.struct([
            f.u32("instruction"),
            Q("newAuthorized"),
            f.u32("voteAuthorizationType"),
          ]),
        },
        Withdraw: {
          index: 3,
          layout: f.struct([f.u32("instruction"), f.ns64("lamports")]),
        },
        UpdateValidatorIdentity: {
          index: 4,
          layout: f.struct([f.u32("instruction")]),
        },
        AuthorizeWithSeed: {
          index: 10,
          layout: f.struct([f.u32("instruction"), Fu()]),
        },
      })),
      (Ul = Object.freeze({ Voter: { index: 0 }, Withdrawer: { index: 1 } })),
      (hr = class n {
        constructor() {}
        static initializeAccount(e) {
          let { votePubkey: t, nodePubkey: r, voteInit: s } = e,
            o = ut.InitializeAccount,
            i = ne(o, {
              voteInit: {
                nodePubkey: X(s.nodePubkey.toBuffer()),
                authorizedVoter: X(s.authorizedVoter.toBuffer()),
                authorizedWithdrawer: X(s.authorizedWithdrawer.toBuffer()),
                commission: s.commission,
              },
            }),
            c = {
              keys: [
                { pubkey: t, isSigner: !1, isWritable: !0 },
                { pubkey: fr, isSigner: !1, isWritable: !1 },
                { pubkey: it, isSigner: !1, isWritable: !1 },
                { pubkey: r, isSigner: !0, isWritable: !1 },
              ],
              programId: this.programId,
              data: i,
            };
          return new fe(c);
        }
        static createAccount(e) {
          let t = new ue();
          return (
            t.add(
              Te.createAccount({
                fromPubkey: e.fromPubkey,
                newAccountPubkey: e.votePubkey,
                lamports: e.lamports,
                space: this.space,
                programId: this.programId,
              })
            ),
            t.add(
              this.initializeAccount({
                votePubkey: e.votePubkey,
                nodePubkey: e.voteInit.nodePubkey,
                voteInit: e.voteInit,
              })
            )
          );
        }
        static authorize(e) {
          let {
              votePubkey: t,
              authorizedPubkey: r,
              newAuthorizedPubkey: s,
              voteAuthorizationType: o,
            } = e,
            i = ut.Authorize,
            c = ne(i, {
              newAuthorized: X(s.toBuffer()),
              voteAuthorizationType: o.index,
            }),
            a = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: it, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ];
          return new ue().add({ keys: a, programId: this.programId, data: c });
        }
        static authorizeWithSeed(e) {
          let {
              currentAuthorityDerivedKeyBasePubkey: t,
              currentAuthorityDerivedKeyOwnerPubkey: r,
              currentAuthorityDerivedKeySeed: s,
              newAuthorizedPubkey: o,
              voteAuthorizationType: i,
              votePubkey: c,
            } = e,
            a = ut.AuthorizeWithSeed,
            u = ne(a, {
              voteAuthorizeWithSeedArgs: {
                currentAuthorityDerivedKeyOwnerPubkey: X(r.toBuffer()),
                currentAuthorityDerivedKeySeed: s,
                newAuthorized: X(o.toBuffer()),
                voteAuthorizationType: i.index,
              },
            }),
            d = [
              { pubkey: c, isSigner: !1, isWritable: !0 },
              { pubkey: it, isSigner: !1, isWritable: !1 },
              { pubkey: t, isSigner: !0, isWritable: !1 },
            ];
          return new ue().add({ keys: d, programId: this.programId, data: u });
        }
        static withdraw(e) {
          let {
              votePubkey: t,
              authorizedWithdrawerPubkey: r,
              lamports: s,
              toPubkey: o,
            } = e,
            i = ut.Withdraw,
            c = ne(i, { lamports: s }),
            a = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: o, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ];
          return new ue().add({ keys: a, programId: this.programId, data: c });
        }
        static safeWithdraw(e, t, r) {
          if (e.lamports > t - r)
            throw new Error(
              "Withdraw will leave vote account with insufficient funds."
            );
          return n.withdraw(e);
        }
        static updateValidatorIdentity(e) {
          let {
              votePubkey: t,
              authorizedWithdrawerPubkey: r,
              nodePubkey: s,
            } = e,
            o = ut.UpdateValidatorIdentity,
            i = ne(o),
            c = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: s, isSigner: !0, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ];
          return new ue().add({ keys: c, programId: this.programId, data: i });
        }
      });
    hr.programId = new T("Vote111111111111111111111111111111111111111");
    hr.space = 3762;
    (Za = new T("Va1idator1nfo111111111111111111111111111111")),
      (zl = v({
        name: A(),
        website: D(A()),
        details: D(A()),
        iconUrl: D(A()),
        keybaseUsername: D(A()),
      })),
      (So = class n {
        constructor(e, t) {
          (this.key = void 0),
            (this.info = void 0),
            (this.key = e),
            (this.info = t);
        }
        static fromConfigData(e) {
          let t = [...e];
          if (He(t) !== 2) return null;
          let s = [];
          for (let o = 0; o < 2; o++) {
            let i = new T(Ge(t, 0, ft)),
              c = at(t) === 1;
            s.push({ publicKey: i, isSigner: c });
          }
          if (s[0].publicKey.equals(Za) && s[1].isSigner) {
            let o = Vt().decode($.Buffer.from(t)),
              i = JSON.parse(o);
            return Ts(i, zl), new n(s[1].publicKey, i);
          }
          return null;
        }
      }),
      (Kl = new T("Vote111111111111111111111111111111111111111")),
      (ql = f.struct([
        Q("nodePubkey"),
        Q("authorizedWithdrawer"),
        f.u8("commission"),
        f.nu64(),
        f.seq(
          f.struct([f.nu64("slot"), f.u32("confirmationCount")]),
          f.offset(f.u32(), -8),
          "votes"
        ),
        f.u8("rootSlotValid"),
        f.nu64("rootSlot"),
        f.nu64(),
        f.seq(
          f.struct([f.nu64("epoch"), Q("authorizedVoter")]),
          f.offset(f.u32(), -8),
          "authorizedVoters"
        ),
        f.struct(
          [
            f.seq(
              f.struct([
                Q("authorizedPubkey"),
                f.nu64("epochOfLastAuthorizedSwitch"),
                f.nu64("targetEpoch"),
              ]),
              32,
              "buf"
            ),
            f.nu64("idx"),
            f.u8("isEmpty"),
          ],
          "priorVoters"
        ),
        f.nu64(),
        f.seq(
          f.struct([f.nu64("epoch"), f.nu64("credits"), f.nu64("prevCredits")]),
          f.offset(f.u32(), -8),
          "epochCredits"
        ),
        f.struct([f.nu64("slot"), f.nu64("timestamp")], "lastTimestamp"),
      ])),
      (Bo = class n {
        constructor(e) {
          (this.nodePubkey = void 0),
            (this.authorizedWithdrawer = void 0),
            (this.commission = void 0),
            (this.rootSlot = void 0),
            (this.votes = void 0),
            (this.authorizedVoters = void 0),
            (this.priorVoters = void 0),
            (this.epochCredits = void 0),
            (this.lastTimestamp = void 0),
            (this.nodePubkey = e.nodePubkey),
            (this.authorizedWithdrawer = e.authorizedWithdrawer),
            (this.commission = e.commission),
            (this.rootSlot = e.rootSlot),
            (this.votes = e.votes),
            (this.authorizedVoters = e.authorizedVoters),
            (this.priorVoters = e.priorVoters),
            (this.epochCredits = e.epochCredits),
            (this.lastTimestamp = e.lastTimestamp);
        }
        static fromAccountData(e) {
          let r = ql.decode(X(e), 4),
            s = r.rootSlot;
          return (
            r.rootSlotValid || (s = null),
            new n({
              nodePubkey: new T(r.nodePubkey),
              authorizedWithdrawer: new T(r.authorizedWithdrawer),
              commission: r.commission,
              votes: r.votes,
              rootSlot: s,
              authorizedVoters: r.authorizedVoters.map(Wl),
              priorVoters: Dl(r.priorVoters),
              epochCredits: r.epochCredits,
              lastTimestamp: r.lastTimestamp,
            })
          );
        }
      });
    xa = {
      http: {
        devnet: "http://api.devnet.solana.com",
        testnet: "http://api.testnet.solana.com",
        "mainnet-beta": "http://api.mainnet-beta.solana.com/",
      },
      https: {
        devnet: "https://api.devnet.solana.com",
        testnet: "https://api.testnet.solana.com",
        "mainnet-beta": "https://api.mainnet-beta.solana.com/",
      },
    };
    $l = 1e9;
  });
export {
  Ss as a,
  Rs as b,
  bi as c,
  Nr as d,
  ro as e,
  Or as f,
  Pa as g,
  ft as h,
  T as i,
  no as j,
  Wu as k,
  Tt as l,
  Yn as m,
  Ur as n,
  zr as o,
  Kr as p,
  Pt as q,
  $t as r,
  lt as s,
  ur as t,
  Io as u,
  wt as v,
  fe as w,
  ue as x,
  so as y,
  oo as z,
  it as A,
  Zu as B,
  Xu as C,
  zn as D,
  fr as E,
  Ju as F,
  Qu as G,
  ef as H,
  Kn as I,
  Ft as J,
  tf as K,
  z as L,
  io as M,
  Na as N,
  ao as O,
  Dn as P,
  co as Q,
  pe as R,
  Te as S,
  uo as T,
  of as U,
  fo as V,
  Mn as W,
  qr as X,
  Ka as Y,
  go as Z,
  $n as _,
  kt as $,
  mo as aa,
  Dr as ba,
  bo as ca,
  ct as da,
  Mr as ea,
  Fn as fa,
  jn as ga,
  Ya as ha,
  Hn as ia,
  jt as ja,
  wo as ka,
  Ae as la,
  Nl as ma,
  dr as na,
  Gn as oa,
  ko as pa,
  Ul as qa,
  hr as ra,
  Za as sa,
  So as ta,
  Kl as ua,
  Bo as va,
  Ml as wa,
  Vl as xa,
  $l as ya,
  Fl as za,
  jl as Aa,
};
