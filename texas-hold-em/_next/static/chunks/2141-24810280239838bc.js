! function() {
  try {
    var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ae7c6819-e7f0-40d1-a63a-c3c98a2623b8", e._sentryDebugIdIdentifier = "sentry-dbid-ae7c6819-e7f0-40d1-a63a-c3c98a2623b8")
  } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2141], {
    633: (e, t, n) => {
      n.d(t, {
        s: () => l,
        t: () => i
      });
      var r = n(12115);

      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function i(...e) {
        return t => {
          let n = !1,
            r = e.map(e => {
              let r = o(e, t);
              return n || "function" != typeof r || (n = !0), r
            });
          if (n) return () => {
            for (let t = 0; t < r.length; t++) {
              let n = r[t];
              "function" == typeof n ? n() : o(e[t], null)
            }
          }
        }
      }

      function l(...e) {
        return r.useCallback(i(...e), e)
      }
    },
    5337: (e, t, n) => {
      n.d(t, {
        B: () => s
      });
      var r, o = n(12115),
        i = n(90804),
        l = (r || (r = n.t(o, 2)))[" useId ".trim().toString()] || (() => void 0),
        a = 0;

      function s(e) {
        let [t, n] = o.useState(l());
        return (0, i.N)(() => {
          e || n(e => e ?? String(a++))
        }, [e]), e || (t ? `radix-${t}` : "")
      }
    },
    11792: (e, t, n) => {
      n.d(t, {
        DX: () => f,
        Dc: () => p,
        TL: () => c,
        xV: () => m
      });
      var r, o = n(12115),
        i = n(633),
        l = n(95155),
        a = Symbol.for("react.lazy"),
        s = (r || (r = n.t(o, 2)))[" use ".trim().toString()];

      function u(e) {
        var t;
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === a && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t
      }

      function c(e) {
        var t;
        let n, r = (t = e, (n = o.forwardRef((e, t) => {
            let {
              children: n,
              ...r
            } = e;
            if (u(n) && "function" == typeof s && (n = s(n._payload)), o.isValidElement(n)) {
              var l;
              let e, a, s = (l = n, (a = (e = Object.getOwnPropertyDescriptor(l.props, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? l.ref : (a = (e = Object.getOwnPropertyDescriptor(l, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? l.props.ref : l.props.ref || l.ref),
                u = function(e, t) {
                  let n = {
                    ...t
                  };
                  for (let r in t) {
                    let o = e[r],
                      i = t[r];
                    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                      let t = i(...e);
                      return o(...e), t
                    } : o && (n[r] = o) : "style" === r ? n[r] = {
                      ...o,
                      ...i
                    } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                  }
                  return {
                    ...e,
                    ...n
                  }
                }(r, n.props);
              return n.type !== o.Fragment && (u.ref = t ? (0, i.t)(t, s) : s), o.cloneElement(n, u)
            }
            return o.Children.count(n) > 1 ? o.Children.only(null) : null
          })).displayName = `${t}.SlotClone`, n),
          a = o.forwardRef((e, t) => {
            let {
              children: n,
              ...i
            } = e;
            u(n) && "function" == typeof s && (n = s(n._payload));
            let a = o.Children.toArray(n),
              c = a.find(h);
            if (c) {
              let e = c.props.children,
                n = a.map(t => t !== c ? t : o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null);
              return (0, l.jsx)(r, {
                ...i,
                ref: t,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, n) : null
              })
            }
            return (0, l.jsx)(r, {
              ...i,
              ref: t,
              children: n
            })
          });
        return a.displayName = `${e}.Slot`, a
      }
      var f = c("Slot"),
        d = Symbol("radix.slottable");

      function p(e) {
        let t = ({
          children: e
        }) => (0, l.jsx)(l.Fragment, {
          children: e
        });
        return t.displayName = `${e}.Slottable`, t.__radixId = d, t
      }
      var m = p("Slottable");

      function h(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === d
      }
    },
    13275: (e, t, n) => {
      n.d(t, {
        hO: () => s,
        sG: () => a
      });
      var r = n(12115),
        o = n(47650),
        i = n(11792),
        l = n(95155),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          let n = (0, i.TL)(`Primitive.${t}`),
            o = r.forwardRef((e, r) => {
              let {
                asChild: o,
                ...i
              } = e;
              return "u" > typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(o ? n : t, {
                ...i,
                ref: r
              })
            });
          return o.displayName = `Primitive.${t}`, {
            ...e,
            [t]: o
          }
        }, {});

      function s(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t))
      }
    },
    13593: (e, t, n) => {
      n.d(t, {
        Mz: () => e1,
        i3: () => e2,
        UC: () => e5,
        bL: () => e0,
        Bk: () => eW
      });
      var r = n(12115);
      let o = ["top", "right", "bottom", "left"],
        i = Math.min,
        l = Math.max,
        a = Math.round,
        s = Math.floor,
        u = e => ({
          x: e,
          y: e
        }),
        c = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        f = {
          start: "end",
          end: "start"
        };

      function d(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function p(e) {
        return e.split("-")[0]
      }

      function m(e) {
        return e.split("-")[1]
      }

      function h(e) {
        return "x" === e ? "y" : "x"
      }

      function y(e) {
        return "y" === e ? "height" : "width"
      }
      let g = new Set(["top", "bottom"]);

      function v(e) {
        return g.has(p(e)) ? "y" : "x"
      }

      function w(e) {
        return e.replace(/start|end/g, e => f[e])
      }
      let b = ["left", "right"],
        x = ["right", "left"],
        E = ["top", "bottom"],
        R = ["bottom", "top"];

      function O(e) {
        return e.replace(/left|right|bottom|top/g, e => c[e])
      }

      function S(e) {
        return "number" != typeof e ? {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          ...e
        } : {
          top: e,
          right: e,
          bottom: e,
          left: e
        }
      }

      function C(e) {
        let {
          x: t,
          y: n,
          width: r,
          height: o
        } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n
        }
      }

      function A(e, t, n) {
        let r, {
            reference: o,
            floating: i
          } = e,
          l = v(t),
          a = h(v(t)),
          s = y(a),
          u = p(t),
          c = "y" === l,
          f = o.x + o.width / 2 - i.width / 2,
          d = o.y + o.height / 2 - i.height / 2,
          g = o[s] / 2 - i[s] / 2;
        switch (u) {
          case "top":
            r = {
              x: f,
              y: o.y - i.height
            };
            break;
          case "bottom":
            r = {
              x: f,
              y: o.y + o.height
            };
            break;
          case "right":
            r = {
              x: o.x + o.width,
              y: d
            };
            break;
          case "left":
            r = {
              x: o.x - i.width,
              y: d
            };
            break;
          default:
            r = {
              x: o.x,
              y: o.y
            }
        }
        switch (m(t)) {
          case "start":
            r[a] -= g * (n && c ? -1 : 1);
            break;
          case "end":
            r[a] += g * (n && c ? -1 : 1)
        }
        return r
      }
      async function N(e, t) {
        var n;
        void 0 === t && (t = {});
        let {
          x: r,
          y: o,
          platform: i,
          rects: l,
          elements: a,
          strategy: s
        } = e, {
          boundary: u = "clippingAncestors",
          rootBoundary: c = "viewport",
          elementContext: f = "floating",
          altBoundary: p = !1,
          padding: m = 0
        } = d(t, e), h = S(m), y = a[p ? "floating" === f ? "reference" : "floating" : f], g = C(await i.getClippingRect({
          element: null == (n = await (null == i.isElement ? void 0 : i.isElement(y))) || n ? y : y.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
          boundary: u,
          rootBoundary: c,
          strategy: s
        })), v = "floating" === f ? {
          x: r,
          y: o,
          width: l.floating.width,
          height: l.floating.height
        } : l.reference, w = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), b = await (null == i.isElement ? void 0 : i.isElement(w)) && await (null == i.getScale ? void 0 : i.getScale(w)) || {
          x: 1,
          y: 1
        }, x = C(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: a,
          rect: v,
          offsetParent: w,
          strategy: s
        }) : v);
        return {
          top: (g.top - x.top + h.top) / b.y,
          bottom: (x.bottom - g.bottom + h.bottom) / b.y,
          left: (g.left - x.left + h.left) / b.x,
          right: (x.right - g.right + h.right) / b.x
        }
      }
      let T = async (e, t, n) => {
        let {
          placement: r = "bottom",
          strategy: o = "absolute",
          middleware: i = [],
          platform: l
        } = n, a = i.filter(Boolean), s = await (null == l.isRTL ? void 0 : l.isRTL(t)), u = await l.getElementRects({
          reference: e,
          floating: t,
          strategy: o
        }), {
          x: c,
          y: f
        } = A(u, r, s), d = r, p = {}, m = 0;
        for (let n = 0; n < a.length; n++) {
          var h;
          let {
            name: i,
            fn: y
          } = a[n], {
            x: g,
            y: v,
            data: w,
            reset: b
          } = await y({
            x: c,
            y: f,
            initialPlacement: r,
            placement: d,
            strategy: o,
            middlewareData: p,
            rects: u,
            platform: {
              ...l,
              detectOverflow: null != (h = l.detectOverflow) ? h : N
            },
            elements: {
              reference: e,
              floating: t
            }
          });
          c = null != g ? g : c, f = null != v ? v : f, p = {
            ...p,
            [i]: {
              ...p[i],
              ...w
            }
          }, b && m <= 50 && (m++, "object" == typeof b && (b.placement && (d = b.placement), b.rects && (u = !0 === b.rects ? await l.getElementRects({
            reference: e,
            floating: t,
            strategy: o
          }) : b.rects), {
            x: c,
            y: f
          } = A(u, d, s)), n = -1)
        }
        return {
          x: c,
          y: f,
          placement: d,
          strategy: o,
          middlewareData: p
        }
      };

      function L(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function P(e) {
        return o.some(t => e[t] >= 0)
      }
      let D = new Set(["left", "top"]);
      async function M(e, t) {
        let {
          placement: n,
          platform: r,
          elements: o
        } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), l = p(n), a = m(n), s = "y" === v(n), u = D.has(l) ? -1 : 1, c = i && s ? -1 : 1, f = d(t, e), {
          mainAxis: h,
          crossAxis: y,
          alignmentAxis: g
        } = "number" == typeof f ? {
          mainAxis: f,
          crossAxis: 0,
          alignmentAxis: null
        } : {
          mainAxis: f.mainAxis || 0,
          crossAxis: f.crossAxis || 0,
          alignmentAxis: f.alignmentAxis
        };
        return a && "number" == typeof g && (y = "end" === a ? -1 * g : g), s ? {
          x: y * c,
          y: h * u
        } : {
          x: h * u,
          y: y * c
        }
      }

      function k() {
        return "u" > typeof window
      }

      function $(e) {
        return W(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function _(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function j(e) {
        var t;
        return null == (t = (W(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function W(e) {
        return !!k() && (e instanceof Node || e instanceof _(e).Node)
      }

      function F(e) {
        return !!k() && (e instanceof Element || e instanceof _(e).Element)
      }

      function I(e) {
        return !!k() && (e instanceof HTMLElement || e instanceof _(e).HTMLElement)
      }

      function H(e) {
        return !(!k() || "u" < typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof _(e).ShadowRoot)
      }
      let B = new Set(["inline", "contents"]);

      function z(e) {
        let {
          overflow: t,
          overflowX: n,
          overflowY: r,
          display: o
        } = ee(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !B.has(o)
      }
      let V = new Set(["table", "td", "th"]),
        U = [":popover-open", ":modal"];

      function X(e) {
        return U.some(t => {
          try {
            return e.matches(t)
          } catch (e) {
            return !1
          }
        })
      }
      let G = ["transform", "translate", "scale", "rotate", "perspective"],
        Y = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
        q = ["paint", "layout", "strict", "content"];

      function K(e) {
        let t = Z(),
          n = F(e) ? ee(e) : e;
        return G.some(e => !!n[e] && "none" !== n[e]) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || Y.some(e => (n.willChange || "").includes(e)) || q.some(e => (n.contain || "").includes(e))
      }

      function Z() {
        return !("u" < typeof CSS) && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
      }
      let J = new Set(["html", "body", "#document"]);

      function Q(e) {
        return J.has($(e))
      }

      function ee(e) {
        return _(e).getComputedStyle(e)
      }

      function et(e) {
        return F(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function en(e) {
        if ("html" === $(e)) return e;
        let t = e.assignedSlot || e.parentNode || H(e) && e.host || j(e);
        return H(t) ? t.host : t
      }

      function er(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let o = function e(t) {
            let n = en(t);
            return Q(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : I(n) && z(n) ? n : e(n)
          }(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          l = _(o);
        if (i) {
          let e = eo(l);
          return t.concat(l, l.visualViewport || [], z(o) ? o : [], e && n ? er(e) : [])
        }
        return t.concat(o, er(o, [], n))
      }

      function eo(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function ei(e) {
        let t = ee(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = I(e),
          i = o ? e.offsetWidth : n,
          l = o ? e.offsetHeight : r,
          s = a(n) !== i || a(r) !== l;
        return s && (n = i, r = l), {
          width: n,
          height: r,
          $: s
        }
      }

      function el(e) {
        return F(e) ? e : e.contextElement
      }

      function ea(e) {
        let t = el(e);
        if (!I(t)) return u(1);
        let n = t.getBoundingClientRect(),
          {
            width: r,
            height: o,
            $: i
          } = ei(t),
          l = (i ? a(n.width) : n.width) / r,
          s = (i ? a(n.height) : n.height) / o;
        return l && Number.isFinite(l) || (l = 1), s && Number.isFinite(s) || (s = 1), {
          x: l,
          y: s
        }
      }
      let es = u(0);

      function eu(e) {
        let t = _(e);
        return Z() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : es
      }

      function ec(e, t, n, r) {
        var o;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let i = e.getBoundingClientRect(),
          l = el(e),
          a = u(1);
        t && (r ? F(r) && (a = ea(r)) : a = ea(e));
        let s = (void 0 === (o = n) && (o = !1), r && (!o || r === _(l)) && o) ? eu(l) : u(0),
          c = (i.left + s.x) / a.x,
          f = (i.top + s.y) / a.y,
          d = i.width / a.x,
          p = i.height / a.y;
        if (l) {
          let e = _(l),
            t = r && F(r) ? _(r) : r,
            n = e,
            o = eo(n);
          for (; o && r && t !== n;) {
            let e = ea(o),
              t = o.getBoundingClientRect(),
              r = ee(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            c *= e.x, f *= e.y, d *= e.x, p *= e.y, c += i, f += l, o = eo(n = _(o))
          }
        }
        return C({
          width: d,
          height: p,
          x: c,
          y: f
        })
      }

      function ef(e, t) {
        let n = et(e).scrollLeft;
        return t ? t.left + n : ec(j(e)).left + n
      }

      function ed(e, t) {
        let n = e.getBoundingClientRect();
        return {
          x: n.left + t.scrollLeft - ef(e, n),
          y: n.top + t.scrollTop
        }
      }
      let ep = new Set(["absolute", "fixed"]);

      function em(e, t, n) {
        var r;
        let o;
        if ("viewport" === t) o = function(e, t) {
          let n = _(e),
            r = j(e),
            o = n.visualViewport,
            i = r.clientWidth,
            l = r.clientHeight,
            a = 0,
            s = 0;
          if (o) {
            i = o.width, l = o.height;
            let e = Z();
            (!e || e && "fixed" === t) && (a = o.offsetLeft, s = o.offsetTop)
          }
          let u = ef(r);
          if (u <= 0) {
            let e = r.ownerDocument,
              t = e.body,
              n = getComputedStyle(t),
              o = "CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
              l = Math.abs(r.clientWidth - t.clientWidth - o);
            l <= 25 && (i -= l)
          } else u <= 25 && (i += u);
          return {
            width: i,
            height: l,
            x: a,
            y: s
          }
        }(e, n);
        else if ("document" === t) {
          let t, n, i, a, s, u, c;
          r = j(e), t = j(r), n = et(r), i = r.ownerDocument.body, a = l(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth), s = l(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight), u = -n.scrollLeft + ef(r), c = -n.scrollTop, "rtl" === ee(i).direction && (u += l(t.clientWidth, i.clientWidth) - a), o = {
            width: a,
            height: s,
            x: u,
            y: c
          }
        } else if (F(t)) {
          let e, r, i, l, a, s;
          r = (e = ec(t, !0, "fixed" === n)).top + t.clientTop, i = e.left + t.clientLeft, l = I(t) ? ea(t) : u(1), a = t.clientWidth * l.x, s = t.clientHeight * l.y, o = {
            width: a,
            height: s,
            x: i * l.x,
            y: r * l.y
          }
        } else {
          let n = eu(e);
          o = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height
          }
        }
        return C(o)
      }

      function eh(e) {
        return "static" === ee(e).position
      }

      function ey(e, t) {
        if (!I(e) || "fixed" === ee(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return j(e) === n && (n = n.ownerDocument.body), n
      }

      function eg(e, t) {
        var n;
        let r = _(e);
        if (X(e)) return r;
        if (!I(e)) {
          let t = en(e);
          for (; t && !Q(t);) {
            if (F(t) && !eh(t)) return t;
            t = en(t)
          }
          return r
        }
        let o = ey(e, t);
        for (; o && (n = o, V.has($(n))) && eh(o);) o = ey(o, t);
        return o && Q(o) && eh(o) && !K(o) ? r : o || function(e) {
          let t = en(e);
          for (; I(t) && !Q(t);) {
            if (K(t)) return t;
            if (X(t)) break;
            t = en(t)
          }
          return null
        }(e) || r
      }
      let ev = async function(e) {
        let t = this.getOffsetParent || eg,
          n = this.getDimensions,
          r = await n(e.floating);
        return {
          reference: function(e, t, n) {
            let r = I(t),
              o = j(t),
              i = "fixed" === n,
              l = ec(e, !0, i, t),
              a = {
                scrollLeft: 0,
                scrollTop: 0
              },
              s = u(0);
            if (r || !r && !i)
              if (("body" !== $(t) || z(o)) && (a = et(t)), r) {
                let e = ec(t, !0, i, t);
                s.x = e.x + t.clientLeft, s.y = e.y + t.clientTop
              } else o && (s.x = ef(o));
            i && !r && o && (s.x = ef(o));
            let c = !o || r || i ? u(0) : ed(o, a);
            return {
              x: l.left + a.scrollLeft - s.x - c.x,
              y: l.top + a.scrollTop - s.y - c.y,
              width: l.width,
              height: l.height
            }
          }(e.reference, await t(e.floating), e.strategy),
          floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
          }
        }
      }, ew = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: n,
            offsetParent: r,
            strategy: o
          } = e, i = "fixed" === o, l = j(r), a = !!t && X(t.floating);
          if (r === l || a && i) return n;
          let s = {
              scrollLeft: 0,
              scrollTop: 0
            },
            c = u(1),
            f = u(0),
            d = I(r);
          if ((d || !d && !i) && (("body" !== $(r) || z(l)) && (s = et(r)), I(r))) {
            let e = ec(r);
            c = ea(r), f.x = e.x + r.clientLeft, f.y = e.y + r.clientTop
          }
          let p = !l || d || i ? u(0) : ed(l, s);
          return {
            width: n.width * c.x,
            height: n.height * c.y,
            x: n.x * c.x - s.scrollLeft * c.x + f.x + p.x,
            y: n.y * c.y - s.scrollTop * c.y + f.y + p.y
          }
        },
        getDocumentElement: j,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: n,
            rootBoundary: r,
            strategy: o
          } = e, a = [..."clippingAncestors" === n ? X(t) ? [] : function(e, t) {
            let n = t.get(e);
            if (n) return n;
            let r = er(e, [], !1).filter(e => F(e) && "body" !== $(e)),
              o = null,
              i = "fixed" === ee(e).position,
              l = i ? en(e) : e;
            for (; F(l) && !Q(l);) {
              let t = ee(l),
                n = K(l);
              n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && !!o && ep.has(o.position) || z(l) && !n && function e(t, n) {
                let r = en(t);
                return !(r === n || !F(r) || Q(r)) && ("fixed" === ee(r).position || e(r, n))
              }(e, l)) ? r = r.filter(e => e !== l) : o = t, l = en(l)
            }
            return t.set(e, r), r
          }(t, this._c) : [].concat(n), r], s = a[0], u = a.reduce((e, n) => {
            let r = em(t, n, o);
            return e.top = l(r.top, e.top), e.right = i(r.right, e.right), e.bottom = i(r.bottom, e.bottom), e.left = l(r.left, e.left), e
          }, em(t, s, o));
          return {
            width: u.right - u.left,
            height: u.bottom - u.top,
            x: u.left,
            y: u.top
          }
        },
        getOffsetParent: eg,
        getElementRects: ev,
        getClientRects: function(e) {
          return Array.from(e.getClientRects())
        },
        getDimensions: function(e) {
          let {
            width: t,
            height: n
          } = ei(e);
          return {
            width: t,
            height: n
          }
        },
        getScale: ea,
        isElement: F,
        isRTL: function(e) {
          return "rtl" === ee(e).direction
        }
      };

      function eb(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }
      let ex = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
          let {
            x: n,
            y: r,
            placement: o,
            rects: a,
            platform: s,
            elements: u,
            middlewareData: c
          } = t, {
            element: f,
            padding: p = 0
          } = d(e, t) || {};
          if (null == f) return {};
          let g = S(p),
            w = {
              x: n,
              y: r
            },
            b = h(v(o)),
            x = y(b),
            E = await s.getDimensions(f),
            R = "y" === b,
            O = R ? "clientHeight" : "clientWidth",
            C = a.reference[x] + a.reference[b] - w[b] - a.floating[x],
            A = w[b] - a.reference[b],
            N = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(f)),
            T = N ? N[O] : 0;
          T && await (null == s.isElement ? void 0 : s.isElement(N)) || (T = u.floating[O] || a.floating[x]);
          let L = T / 2 - E[x] / 2 - 1,
            P = i(g[R ? "top" : "left"], L),
            D = i(g[R ? "bottom" : "right"], L),
            M = T - E[x] - D,
            k = T / 2 - E[x] / 2 + (C / 2 - A / 2),
            $ = l(P, i(k, M)),
            _ = !c.arrow && null != m(o) && k !== $ && a.reference[x] / 2 - (k < P ? P : D) - E[x] / 2 < 0,
            j = _ ? k < P ? k - P : k - M : 0;
          return {
            [b]: w[b] + j,
            data: {
              [b]: $,
              centerOffset: k - $ - j,
              ..._ && {
                alignmentOffset: j
              }
            },
            reset: _
          }
        }
      });
      var eE = n(47650),
        eR = "u" > typeof document ? r.useLayoutEffect : function() {};

      function eO(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--;)
              if (!eO(e[r], t[r])) return !1;
            return !0
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
          for (r = n; 0 != r--;)
            if (!({}).hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--;) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !eO(e[n], t[n])) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function eS(e) {
        return "u" < typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function eC(e, t) {
        let n = eS(e);
        return Math.round(t * n) / n
      }

      function eA(e) {
        let t = r.useRef(e);
        return eR(() => {
          t.current = e
        }), t
      }
      var eN = n(13275),
        eT = n(95155),
        eL = r.forwardRef((e, t) => {
          let {
            children: n,
            width: r = 10,
            height: o = 5,
            ...i
          } = e;
          return (0, eT.jsx)(eN.sG.svg, {
            ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : (0, eT.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        });
      eL.displayName = "Arrow";
      var eP = n(633),
        eD = n(75021),
        eM = n(58069),
        ek = n(90804),
        e$ = n(22295),
        e_ = "Popper",
        [ej, eW] = (0, eD.A)(e_),
        [eF, eI] = ej(e_),
        eH = e => {
          let {
            __scopePopper: t,
            children: n
          } = e, [o, i] = r.useState(null);
          return (0, eT.jsx)(eF, {
            scope: t,
            anchor: o,
            onAnchorChange: i,
            children: n
          })
        };
      eH.displayName = e_;
      var eB = "PopperAnchor",
        ez = r.forwardRef((e, t) => {
          let {
            __scopePopper: n,
            virtualRef: o,
            ...i
          } = e, l = eI(eB, n), a = r.useRef(null), s = (0, eP.s)(t, a), u = r.useRef(null);
          return r.useEffect(() => {
            let e = u.current;
            u.current = o?.current || a.current, e !== u.current && l.onAnchorChange(u.current)
          }), o ? null : (0, eT.jsx)(eN.sG.div, {
            ...i,
            ref: s
          })
        });
      ez.displayName = eB;
      var eV = "PopperContent",
        [eU, eX] = ej(eV),
        eG = r.forwardRef((e, t) => {
          var n, o, a, u, c, f, g, S, C, A, N, k, $;
          let {
            __scopePopper: _,
            side: W = "bottom",
            sideOffset: F = 0,
            align: I = "center",
            alignOffset: H = 0,
            arrowPadding: B = 0,
            avoidCollisions: z = !0,
            collisionBoundary: V = [],
            collisionPadding: U = 0,
            sticky: X = "partial",
            hideWhenDetached: G = !1,
            updatePositionStrategy: Y = "optimized",
            onPlaced: q,
            ...K
          } = e, Z = eI(eV, _), [J, Q] = r.useState(null), ee = (0, eP.s)(t, e => Q(e)), [et, en] = r.useState(null), eo = (0, e$.X)(et), ei = eo?.width ?? 0, ea = eo?.height ?? 0, es = "number" == typeof U ? U : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...U
          }, eu = Array.isArray(V) ? V : [V], ef = eu.length > 0, ed = {
            padding: es,
            boundary: eu.filter(eZ),
            altBoundary: ef
          }, {
            refs: ep,
            floatingStyles: em,
            placement: eh,
            isPositioned: ey,
            middlewareData: eg
          } = function(e) {
            void 0 === e && (e = {});
            let {
              placement: t = "bottom",
              strategy: n = "absolute",
              middleware: o = [],
              platform: i,
              elements: {
                reference: l,
                floating: a
              } = {},
              transform: s = !0,
              whileElementsMounted: u,
              open: c
            } = e, [f, d] = r.useState({
              x: 0,
              y: 0,
              strategy: n,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [p, m] = r.useState(o);
            eO(p, o) || m(o);
            let [h, y] = r.useState(null), [g, v] = r.useState(null), w = r.useCallback(e => {
              e !== R.current && (R.current = e, y(e))
            }, []), b = r.useCallback(e => {
              e !== O.current && (O.current = e, v(e))
            }, []), x = l || h, E = a || g, R = r.useRef(null), O = r.useRef(null), S = r.useRef(f), C = null != u, A = eA(u), N = eA(i), L = eA(c), P = r.useCallback(() => {
              var e, r;
              let o, i, l;
              if (!R.current || !O.current) return;
              let a = {
                placement: t,
                strategy: n,
                middleware: p
              };
              N.current && (a.platform = N.current), (e = R.current, r = O.current, o = new Map, l = {
                ...(i = {
                  platform: ew,
                  ...a
                }).platform,
                _c: o
              }, T(e, r, {
                ...i,
                platform: l
              })).then(e => {
                let t = {
                  ...e,
                  isPositioned: !1 !== L.current
                };
                D.current && !eO(S.current, t) && (S.current = t, eE.flushSync(() => {
                  d(t)
                }))
              })
            }, [p, t, n, N, L]);
            eR(() => {
              !1 === c && S.current.isPositioned && (S.current.isPositioned = !1, d(e => ({
                ...e,
                isPositioned: !1
              })))
            }, [c]);
            let D = r.useRef(!1);
            eR(() => (D.current = !0, () => {
              D.current = !1
            }), []), eR(() => {
              if (x && (R.current = x), E && (O.current = E), x && E) {
                if (A.current) return A.current(x, E, P);
                P()
              }
            }, [x, E, P, A, C]);
            let M = r.useMemo(() => ({
                reference: R,
                floating: O,
                setReference: w,
                setFloating: b
              }), [w, b]),
              k = r.useMemo(() => ({
                reference: x,
                floating: E
              }), [x, E]),
              $ = r.useMemo(() => {
                let e = {
                  position: n,
                  left: 0,
                  top: 0
                };
                if (!k.floating) return e;
                let t = eC(k.floating, f.x),
                  r = eC(k.floating, f.y);
                return s ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...eS(k.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: n,
                  left: t,
                  top: r
                }
              }, [n, s, k.floating, f.x, f.y]);
            return r.useMemo(() => ({
              ...f,
              update: P,
              refs: M,
              elements: k,
              floatingStyles: $
            }), [f, P, M, k, $])
          }({
            strategy: "fixed",
            placement: W + ("center" !== I ? "-" + I : ""),
            whileElementsMounted: (...e) => (function(e, t, n, r) {
              let o;
              void 0 === r && (r = {});
              let {
                ancestorScroll: a = !0,
                ancestorResize: u = !0,
                elementResize: c = "function" == typeof ResizeObserver,
                layoutShift: f = "function" == typeof IntersectionObserver,
                animationFrame: d = !1
              } = r, p = el(e), m = a || u ? [...p ? er(p) : [], ...er(t)] : [];
              m.forEach(e => {
                a && e.addEventListener("scroll", n, {
                  passive: !0
                }), u && e.addEventListener("resize", n)
              });
              let h = p && f ? function(e, t) {
                  let n, r = null,
                    o = j(e);

                  function a() {
                    var e;
                    clearTimeout(n), null == (e = r) || e.disconnect(), r = null
                  }
                  return ! function u(c, f) {
                    void 0 === c && (c = !1), void 0 === f && (f = 1), a();
                    let d = e.getBoundingClientRect(),
                      {
                        left: p,
                        top: m,
                        width: h,
                        height: y
                      } = d;
                    if (c || t(), !h || !y) return;
                    let g = {
                        rootMargin: -s(m) + "px " + -s(o.clientWidth - (p + h)) + "px " + -s(o.clientHeight - (m + y)) + "px " + -s(p) + "px",
                        threshold: l(0, i(1, f)) || 1
                      },
                      v = !0;

                    function w(t) {
                      let r = t[0].intersectionRatio;
                      if (r !== f) {
                        if (!v) return u();
                        r ? u(!1, r) : n = setTimeout(() => {
                          u(!1, 1e-7)
                        }, 1e3)
                      }
                      1 !== r || eb(d, e.getBoundingClientRect()) || u(), v = !1
                    }
                    try {
                      r = new IntersectionObserver(w, {
                        ...g,
                        root: o.ownerDocument
                      })
                    } catch (e) {
                      r = new IntersectionObserver(w, g)
                    }
                    r.observe(e)
                  }(!0), a
                }(p, n) : null,
                y = -1,
                g = null;
              c && (g = new ResizeObserver(e => {
                let [r] = e;
                r && r.target === p && g && (g.unobserve(t), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
                  var e;
                  null == (e = g) || e.observe(t)
                })), n()
              }), p && !d && g.observe(p), g.observe(t));
              let v = d ? ec(e) : null;
              return d && function t() {
                let r = ec(e);
                v && !eb(v, r) && n(), v = r, o = requestAnimationFrame(t)
              }(), n(), () => {
                var e;
                m.forEach(e => {
                  a && e.removeEventListener("scroll", n), u && e.removeEventListener("resize", n)
                }), null == h || h(), null == (e = g) || e.disconnect(), g = null, d && cancelAnimationFrame(o)
              }
            })(...e, {
              animationFrame: "always" === Y
            }),
            elements: {
              reference: Z.anchor
            },
            middleware: [{
              ...{
                name: "offset",
                options: o = n = {
                  mainAxis: F + ea,
                  alignmentAxis: H
                },
                async fn(e) {
                  var t, n;
                  let {
                    x: r,
                    y: i,
                    placement: l,
                    middlewareData: a
                  } = e, s = await M(e, o);
                  return l === (null == (t = a.offset) ? void 0 : t.placement) && null != (n = a.arrow) && n.alignmentOffset ? {} : {
                    x: r + s.x,
                    y: i + s.y,
                    data: {
                      ...s,
                      placement: l
                    }
                  }
                }
              },
              options: [n, void 0]
            }, z && {
              ...{
                name: "shift",
                options: c = u = {
                  mainAxis: !0,
                  crossAxis: !1,
                  limiter: "partial" === X ? {
                    ...(a = void 0, {
                      options: a = {},
                      fn(e) {
                        let {
                          x: t,
                          y: n,
                          placement: r,
                          rects: o,
                          middlewareData: i
                        } = e, {
                          offset: l = 0,
                          mainAxis: s = !0,
                          crossAxis: u = !0
                        } = d(a, e), c = {
                          x: t,
                          y: n
                        }, f = v(r), m = h(f), y = c[m], g = c[f], w = d(l, e), b = "number" == typeof w ? {
                          mainAxis: w,
                          crossAxis: 0
                        } : {
                          mainAxis: 0,
                          crossAxis: 0,
                          ...w
                        };
                        if (s) {
                          let e = "y" === m ? "height" : "width",
                            t = o.reference[m] - o.floating[e] + b.mainAxis,
                            n = o.reference[m] + o.reference[e] - b.mainAxis;
                          y < t ? y = t : y > n && (y = n)
                        }
                        if (u) {
                          var x, E;
                          let e = "y" === m ? "width" : "height",
                            t = D.has(p(r)),
                            n = o.reference[f] - o.floating[e] + (t && (null == (x = i.offset) ? void 0 : x[f]) || 0) + (t ? 0 : b.crossAxis),
                            l = o.reference[f] + o.reference[e] + (t ? 0 : (null == (E = i.offset) ? void 0 : E[f]) || 0) - (t ? b.crossAxis : 0);
                          g < n ? g = n : g > l && (g = l)
                        }
                        return {
                          [m]: y,
                          [f]: g
                        }
                      }
                    }),
                    options: [void 0, void 0]
                  } : void 0,
                  ...ed
                },
                async fn(e) {
                  let {
                    x: t,
                    y: n,
                    placement: r,
                    platform: o
                  } = e, {
                    mainAxis: a = !0,
                    crossAxis: s = !1,
                    limiter: u = {
                      fn: e => {
                        let {
                          x: t,
                          y: n
                        } = e;
                        return {
                          x: t,
                          y: n
                        }
                      }
                    },
                    ...f
                  } = d(c, e), m = {
                    x: t,
                    y: n
                  }, y = await o.detectOverflow(e, f), g = v(p(r)), w = h(g), b = m[w], x = m[g];
                  if (a) {
                    let e = "y" === w ? "top" : "left",
                      t = "y" === w ? "bottom" : "right",
                      n = b + y[e],
                      r = b - y[t];
                    b = l(n, i(b, r))
                  }
                  if (s) {
                    let e = "y" === g ? "top" : "left",
                      t = "y" === g ? "bottom" : "right",
                      n = x + y[e],
                      r = x - y[t];
                    x = l(n, i(x, r))
                  }
                  let E = u.fn({
                    ...e,
                    [w]: b,
                    [g]: x
                  });
                  return {
                    ...E,
                    data: {
                      x: E.x - t,
                      y: E.y - n,
                      enabled: {
                        [w]: a,
                        [g]: s
                      }
                    }
                  }
                }
              },
              options: [u, void 0]
            }, z && {
              ...{
                name: "flip",
                options: g = f = {
                  ...ed
                },
                async fn(e) {
                  var t, n, r, o, i, l, a, s;
                  let u, c, f, {
                      placement: S,
                      middlewareData: C,
                      rects: A,
                      initialPlacement: N,
                      platform: T,
                      elements: L
                    } = e,
                    {
                      mainAxis: P = !0,
                      crossAxis: D = !0,
                      fallbackPlacements: M,
                      fallbackStrategy: k = "bestFit",
                      fallbackAxisSideDirection: $ = "none",
                      flipAlignment: _ = !0,
                      ...j
                    } = d(g, e);
                  if (null != (t = C.arrow) && t.alignmentOffset) return {};
                  let W = p(S),
                    F = v(N),
                    I = p(N) === N,
                    H = await (null == T.isRTL ? void 0 : T.isRTL(L.floating)),
                    B = M || (I || !_ ? [O(N)] : (u = O(N), [w(N), u, w(u)])),
                    z = "none" !== $;
                  !M && z && B.push(...(c = m(N), f = function(e, t, n) {
                    switch (e) {
                      case "top":
                      case "bottom":
                        if (n) return t ? x : b;
                        return t ? b : x;
                      case "left":
                      case "right":
                        return t ? E : R;
                      default:
                        return []
                    }
                  }(p(N), "start" === $, H), c && (f = f.map(e => e + "-" + c), _ && (f = f.concat(f.map(w)))), f));
                  let V = [N, ...B],
                    U = await T.detectOverflow(e, j),
                    X = [],
                    G = (null == (n = C.flip) ? void 0 : n.overflows) || [];
                  if (P && X.push(U[W]), D) {
                    let e, t, n, r, o = (l = S, a = A, void 0 === (s = H) && (s = !1), e = m(l), n = y(t = h(v(l))), r = "x" === t ? e === (s ? "end" : "start") ? "right" : "left" : "start" === e ? "bottom" : "top", a.reference[n] > a.floating[n] && (r = O(r)), [r, O(r)]);
                    X.push(U[o[0]], U[o[1]])
                  }
                  if (G = [...G, {
                      placement: S,
                      overflows: X
                    }], !X.every(e => e <= 0)) {
                    let e = ((null == (r = C.flip) ? void 0 : r.index) || 0) + 1,
                      t = V[e];
                    if (t && ("alignment" !== D || F === v(t) || G.every(e => v(e.placement) !== F || e.overflows[0] > 0))) return {
                      data: {
                        index: e,
                        overflows: G
                      },
                      reset: {
                        placement: t
                      }
                    };
                    let n = null == (o = G.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : o.placement;
                    if (!n) switch (k) {
                      case "bestFit": {
                        let e = null == (i = G.filter(e => {
                          if (z) {
                            let t = v(e.placement);
                            return t === F || "y" === t
                          }
                          return !0
                        }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : i[0];
                        e && (n = e);
                        break
                      }
                      case "initialPlacement":
                        n = N
                    }
                    if (S !== n) return {
                      reset: {
                        placement: n
                      }
                    }
                  }
                  return {}
                }
              },
              options: [f, void 0]
            }, {
              ...{
                name: "size",
                options: C = S = {
                  ...ed,
                  apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: n,
                    availableHeight: r
                  }) => {
                    let {
                      width: o,
                      height: i
                    } = t.reference, l = e.floating.style;
                    l.setProperty("--radix-popper-available-width", `${n}px`), l.setProperty("--radix-popper-available-height", `${r}px`), l.setProperty("--radix-popper-anchor-width", `${o}px`), l.setProperty("--radix-popper-anchor-height", `${i}px`)
                  }
                },
                async fn(e) {
                  var t, n;
                  let r, o, {
                      placement: a,
                      rects: s,
                      platform: u,
                      elements: c
                    } = e,
                    {
                      apply: f = () => {},
                      ...h
                    } = d(C, e),
                    y = await u.detectOverflow(e, h),
                    g = p(a),
                    w = m(a),
                    b = "y" === v(a),
                    {
                      width: x,
                      height: E
                    } = s.floating;
                  "top" === g || "bottom" === g ? (r = g, o = w === (await (null == u.isRTL ? void 0 : u.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (o = g, r = "end" === w ? "top" : "bottom");
                  let R = E - y.top - y.bottom,
                    O = x - y.left - y.right,
                    S = i(E - y[r], R),
                    A = i(x - y[o], O),
                    N = !e.middlewareData.shift,
                    T = S,
                    L = A;
                  if (null != (t = e.middlewareData.shift) && t.enabled.x && (L = O), null != (n = e.middlewareData.shift) && n.enabled.y && (T = R), N && !w) {
                    let e = l(y.left, 0),
                      t = l(y.right, 0),
                      n = l(y.top, 0),
                      r = l(y.bottom, 0);
                    b ? L = x - 2 * (0 !== e || 0 !== t ? e + t : l(y.left, y.right)) : T = E - 2 * (0 !== n || 0 !== r ? n + r : l(y.top, y.bottom))
                  }
                  await f({
                    ...e,
                    availableWidth: L,
                    availableHeight: T
                  });
                  let P = await u.getDimensions(c.floating);
                  return x !== P.width || E !== P.height ? {
                    reset: {
                      rects: !0
                    }
                  } : {}
                }
              },
              options: [S, void 0]
            }, et && {
              ...{
                name: "arrow",
                options: N = A = {
                  element: et,
                  padding: B
                },
                fn(e) {
                  let {
                    element: t,
                    padding: n
                  } = "function" == typeof N ? N(e) : N;
                  return t && ({}).hasOwnProperty.call(t, "current") ? null != t.current ? ex({
                    element: t.current,
                    padding: n
                  }).fn(e) : {} : t ? ex({
                    element: t,
                    padding: n
                  }).fn(e) : {}
                }
              },
              options: [A, void 0]
            }, eJ({
              arrowWidth: ei,
              arrowHeight: ea
            }), G && {
              ...{
                name: "hide",
                options: $ = k = {
                  strategy: "referenceHidden",
                  ...ed
                },
                async fn(e) {
                  let {
                    rects: t,
                    platform: n
                  } = e, {
                    strategy: r = "referenceHidden",
                    ...o
                  } = d($, e);
                  switch (r) {
                    case "referenceHidden": {
                      let r = L(await n.detectOverflow(e, {
                        ...o,
                        elementContext: "reference"
                      }), t.reference);
                      return {
                        data: {
                          referenceHiddenOffsets: r,
                          referenceHidden: P(r)
                        }
                      }
                    }
                    case "escaped": {
                      let r = L(await n.detectOverflow(e, {
                        ...o,
                        altBoundary: !0
                      }), t.floating);
                      return {
                        data: {
                          escapedOffsets: r,
                          escaped: P(r)
                        }
                      }
                    }
                    default:
                      return {}
                  }
                }
              },
              options: [k, void 0]
            }]
          }), [ev, eL] = eQ(eh), eD = (0, eM.c)(q);
          (0, ek.N)(() => {
            ey && eD?.()
          }, [ey, eD]);
          let e_ = eg.arrow?.x,
            ej = eg.arrow?.y,
            eW = eg.arrow?.centerOffset !== 0,
            [eF, eH] = r.useState();
          return (0, ek.N)(() => {
            J && eH(window.getComputedStyle(J).zIndex)
          }, [J]), (0, eT.jsx)("div", {
            ref: ep.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...em,
              transform: ey ? em.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: eF,
              "--radix-popper-transform-origin": [eg.transformOrigin?.x, eg.transformOrigin?.y].join(" "),
              ...eg.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, eT.jsx)(eU, {
              scope: _,
              placedSide: ev,
              onArrowChange: en,
              arrowX: e_,
              arrowY: ej,
              shouldHideArrow: eW,
              children: (0, eT.jsx)(eN.sG.div, {
                "data-side": ev,
                "data-align": eL,
                ...K,
                ref: ee,
                style: {
                  ...K.style,
                  animation: ey ? void 0 : "none"
                }
              })
            })
          })
        });
      eG.displayName = eV;
      var eY = "PopperArrow",
        eq = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        eK = r.forwardRef(function(e, t) {
          let {
            __scopePopper: n,
            ...r
          } = e, o = eX(eY, n), i = eq[o.placedSide];
          return (0, eT.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [i]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
              } [o.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
              } [o.placedSide],
              visibility: o.shouldHideArrow ? "hidden" : void 0
            },
            children: (0, eT.jsx)(eL, {
              ...r,
              ref: t,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        });

      function eZ(e) {
        return null !== e
      }
      eK.displayName = eY;
      var eJ = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          let {
            placement: n,
            rects: r,
            middlewareData: o
          } = t, i = o.arrow?.centerOffset !== 0, l = i ? 0 : e.arrowWidth, a = i ? 0 : e.arrowHeight, [s, u] = eQ(n), c = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [u], f = (o.arrow?.x ?? 0) + l / 2, d = (o.arrow?.y ?? 0) + a / 2, p = "", m = "";
          return "bottom" === s ? (p = i ? c : `${f}px`, m = `${-a}px`) : "top" === s ? (p = i ? c : `${f}px`, m = `${r.floating.height+a}px`) : "right" === s ? (p = `${-a}px`, m = i ? c : `${d}px`) : "left" === s && (p = `${r.floating.width+a}px`, m = i ? c : `${d}px`), {
            data: {
              x: p,
              y: m
            }
          }
        }
      });

      function eQ(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n]
      }
      var e0 = eH,
        e1 = ez,
        e5 = eG,
        e2 = eK
    },
    22295: (e, t, n) => {
      n.d(t, {
        X: () => i
      });
      var r = n(12115),
        o = n(90804);

      function i(e) {
        let [t, n] = r.useState(void 0);
        return (0, o.N)(() => {
          if (e) {
            n({
              width: e.offsetWidth,
              height: e.offsetHeight
            });
            let t = new ResizeObserver(t => {
              let r, o;
              if (!Array.isArray(t) || !t.length) return;
              let i = t[0];
              if ("borderBoxSize" in i) {
                let e = i.borderBoxSize,
                  t = Array.isArray(e) ? e[0] : e;
                r = t.inlineSize, o = t.blockSize
              } else r = e.offsetWidth, o = e.offsetHeight;
              n({
                width: r,
                height: o
              })
            });
            return t.observe(e, {
              box: "border-box"
            }), () => t.unobserve(e)
          }
          n(void 0)
        }, [e]), t
      }
    },
    31557: (e, t, n) => {
      n.d(t, {
        C: () => l
      });
      var r = n(12115),
        o = n(633),
        i = n(90804),
        l = e => {
          var t;
          let n, l, {
              present: s,
              children: u
            } = e,
            c = function(e) {
              var t, n;
              let [o, l] = r.useState(), s = r.useRef(null), u = r.useRef(e), c = r.useRef("none"), [f, d] = (t = e ? "mounted" : "unmounted", n = {
                mounted: {
                  UNMOUNT: "unmounted",
                  ANIMATION_OUT: "unmountSuspended"
                },
                unmountSuspended: {
                  MOUNT: "mounted",
                  ANIMATION_END: "unmounted"
                },
                unmounted: {
                  MOUNT: "mounted"
                }
              }, r.useReducer((e, t) => n[e][t] ?? e, t));
              return r.useEffect(() => {
                let e = a(s.current);
                c.current = "mounted" === f ? e : "none"
              }, [f]), (0, i.N)(() => {
                let t = s.current,
                  n = u.current;
                if (n !== e) {
                  let r = c.current,
                    o = a(t);
                  e ? d("MOUNT") : "none" === o || t?.display === "none" ? d("UNMOUNT") : n && r !== o ? d("ANIMATION_OUT") : d("UNMOUNT"), u.current = e
                }
              }, [e, d]), (0, i.N)(() => {
                if (o) {
                  let e, t = o.ownerDocument.defaultView ?? window,
                    n = n => {
                      let r = a(s.current).includes(CSS.escape(n.animationName));
                      if (n.target === o && r && (d("ANIMATION_END"), !u.current)) {
                        let n = o.style.animationFillMode;
                        o.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                          "forwards" === o.style.animationFillMode && (o.style.animationFillMode = n)
                        })
                      }
                    },
                    r = e => {
                      e.target === o && (c.current = a(s.current))
                    };
                  return o.addEventListener("animationstart", r), o.addEventListener("animationcancel", n), o.addEventListener("animationend", n), () => {
                    t.clearTimeout(e), o.removeEventListener("animationstart", r), o.removeEventListener("animationcancel", n), o.removeEventListener("animationend", n)
                  }
                }
                d("ANIMATION_END")
              }, [o, d]), {
                isPresent: ["mounted", "unmountSuspended"].includes(f),
                ref: r.useCallback(e => {
                  s.current = e ? getComputedStyle(e) : null, l(e)
                }, [])
              }
            }(s),
            f = "function" == typeof u ? u({
              present: c.isPresent
            }) : r.Children.only(u),
            d = (0, o.s)(c.ref, (t = f, (l = (n = Object.getOwnPropertyDescriptor(t.props, "ref")?.get) && "isReactWarning" in n && n.isReactWarning) ? t.ref : (l = (n = Object.getOwnPropertyDescriptor(t, "ref")?.get) && "isReactWarning" in n && n.isReactWarning) ? t.props.ref : t.props.ref || t.ref));
          return "function" == typeof u || c.isPresent ? r.cloneElement(f, {
            ref: d
          }) : null
        };

      function a(e) {
        return e?.animationName || "none"
      }
      l.displayName = "Presence"
    },
    38665: (e, t, n) => {
      n.d(t, {
        i: () => a
      });
      var r, o = n(12115),
        i = n(90804),
        l = (r || (r = n.t(o, 2)))[" useInsertionEffect ".trim().toString()] || i.N;

      function a({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r
      }) {
        let [i, a, s] = function({
          defaultProp: e,
          onChange: t
        }) {
          let [n, r] = o.useState(e), i = o.useRef(n), a = o.useRef(t);
          return l(() => {
            a.current = t
          }, [t]), o.useEffect(() => {
            i.current !== n && (a.current?.(n), i.current = n)
          }, [n, i]), [n, r, a]
        }({
          defaultProp: t,
          onChange: n
        }), u = void 0 !== e, c = u ? e : i;
        {
          let t = o.useRef(void 0 !== e);
          o.useEffect(() => {
            let e = t.current;
            if (e !== u) {
              let t = u ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${e?"controlled":"uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = u
          }, [u, r])
        }
        return [c, o.useCallback(t => {
          if (u) {
            let n = "function" == typeof t ? t(e) : t;
            n !== e && s.current?.(n)
          } else a(t)
        }, [u, e, a, s])]
      }
      Symbol("RADIX:SYNC_STATE")
    },
    58069: (e, t, n) => {
      n.d(t, {
        c: () => o
      });
      var r = n(12115);

      function o(e) {
        let t = r.useRef(e);
        return r.useEffect(() => {
          t.current = e
        }), r.useMemo(() => (...e) => t.current?.(...e), [])
      }
    },
    65453: (e, t, n) => {
      function r(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      n.d(t, {
        mK: () => r
      }), "u" > typeof window && window.document && window.document.createElement
    },
    75021: (e, t, n) => {
      n.d(t, {
        A: () => l,
        q: () => i
      });
      var r = n(12115),
        o = n(95155);

      function i(e, t) {
        let n = r.createContext(t),
          i = e => {
            let {
              children: t,
              ...i
            } = e, l = r.useMemo(() => i, Object.values(i));
            return (0, o.jsx)(n.Provider, {
              value: l,
              children: t
            })
          };
        return i.displayName = e + "Provider", [i, function(o) {
          let i = r.useContext(n);
          if (i) return i;
          if (void 0 !== t) return t;
          throw Error(`\`${o}\` must be used within \`${e}\``)
        }]
      }

      function l(e, t = []) {
        let n = [],
          i = () => {
            let t = n.map(e => r.createContext(e));
            return function(n) {
              let o = n?.[e] || t;
              return r.useMemo(() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: o
                }
              }), [n, o])
            }
          };
        return i.scopeName = e, [function(t, i) {
          let l = r.createContext(i),
            a = n.length;
          n = [...n, i];
          let s = t => {
            let {
              scope: n,
              children: i,
              ...s
            } = t, u = n?.[e]?.[a] || l, c = r.useMemo(() => s, Object.values(s));
            return (0, o.jsx)(u.Provider, {
              value: c,
              children: i
            })
          };
          return s.displayName = t + "Provider", [s, function(n, o) {
            let s = o?.[e]?.[a] || l,
              u = r.useContext(s);
            if (u) return u;
            if (void 0 !== i) return i;
            throw Error(`\`${n}\` must be used within \`${t}\``)
          }]
        }, function(...e) {
          let t = e[0];
          if (1 === e.length) return t;
          let n = () => {
            let n = e.map(e => ({
              useScope: e(),
              scopeName: e.scopeName
            }));
            return function(e) {
              let o = n.reduce((t, {
                useScope: n,
                scopeName: r
              }) => {
                let o = n(e)[`__scope${r}`];
                return {
                  ...t,
                  ...o
                }
              }, {});
              return r.useMemo(() => ({
                [`__scope${t.scopeName}`]: o
              }), [o])
            }
          };
          return n.scopeName = t.scopeName, n
        }(i, ...t)]
      }
    },
    76990: (e, t, n) => {
      n.d(t, {
        Z: () => s
      });
      var r = n(12115),
        o = n(47650),
        i = n(13275),
        l = n(90804),
        a = n(95155),
        s = r.forwardRef((e, t) => {
          let {
            container: n,
            ...s
          } = e, [u, c] = r.useState(!1);
          (0, l.N)(() => c(!0), []);
          let f = n || u && globalThis?.document?.body;
          return f ? o.createPortal((0, a.jsx)(i.sG.div, {
            ...s,
            ref: t
          }), f) : null
        });
      s.displayName = "Portal"
    },
    81354: (e, t, n) => {
      n.d(t, {
        qW: () => d
      });
      var r, o = n(12115),
        i = n(65453),
        l = n(13275),
        a = n(633),
        s = n(58069),
        u = n(95155),
        c = "dismissableLayer.update",
        f = o.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        d = o.forwardRef((e, t) => {
          let {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: d,
            onPointerDownOutside: h,
            onFocusOutside: y,
            onInteractOutside: g,
            onDismiss: v,
            ...w
          } = e, b = o.useContext(f), [x, E] = o.useState(null), R = x?.ownerDocument ?? globalThis?.document, [, O] = o.useState({}), S = (0, a.s)(t, e => E(e)), C = Array.from(b.layers), [A] = [...b.layersWithOutsidePointerEventsDisabled].slice(-1), N = C.indexOf(A), T = x ? C.indexOf(x) : -1, L = b.layersWithOutsidePointerEventsDisabled.size > 0, P = T >= N, D = function(e, t = globalThis?.document) {
            let n = (0, s.c)(e),
              r = o.useRef(!1),
              i = o.useRef(() => {});
            return o.useEffect(() => {
              let e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                        m("dismissableLayer.pointerDownOutside", n, o, {
                          discrete: !0
                        })
                      },
                      o = {
                        originalEvent: e
                      };
                    "touch" === e.pointerType ? (t.removeEventListener("click", i.current), i.current = r, t.addEventListener("click", i.current, {
                      once: !0
                    })) : r()
                  } else t.removeEventListener("click", i.current);
                  r.current = !1
                },
                o = window.setTimeout(() => {
                  t.addEventListener("pointerdown", e)
                }, 0);
              return () => {
                window.clearTimeout(o), t.removeEventListener("pointerdown", e), t.removeEventListener("click", i.current)
              }
            }, [t, n]), {
              onPointerDownCapture: () => r.current = !0
            }
          }(e => {
            let t = e.target,
              n = [...b.branches].some(e => e.contains(t));
            P && !n && (h?.(e), g?.(e), e.defaultPrevented || v?.())
          }, R), M = function(e, t = globalThis?.document) {
            let n = (0, s.c)(e),
              r = o.useRef(!1);
            return o.useEffect(() => {
              let e = e => {
                e.target && !r.current && m("dismissableLayer.focusOutside", n, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }, [t, n]), {
              onFocusCapture: () => r.current = !0,
              onBlurCapture: () => r.current = !1
            }
          }(e => {
            let t = e.target;
            ![...b.branches].some(e => e.contains(t)) && (y?.(e), g?.(e), e.defaultPrevented || v?.())
          }, R);
          return ! function(e, t = globalThis?.document) {
            let n = (0, s.c)(e);
            o.useEffect(() => {
              let e = e => {
                "Escape" === e.key && n(e)
              };
              return t.addEventListener("keydown", e, {
                capture: !0
              }), () => t.removeEventListener("keydown", e, {
                capture: !0
              })
            }, [n, t])
          }(e => {
            T === b.layers.size - 1 && (d?.(e), !e.defaultPrevented && v && (e.preventDefault(), v()))
          }, R), o.useEffect(() => {
            if (x) return n && (0 === b.layersWithOutsidePointerEventsDisabled.size && (r = R.body.style.pointerEvents, R.body.style.pointerEvents = "none"), b.layersWithOutsidePointerEventsDisabled.add(x)), b.layers.add(x), p(), () => {
              n && 1 === b.layersWithOutsidePointerEventsDisabled.size && (R.body.style.pointerEvents = r)
            }
          }, [x, R, n, b]), o.useEffect(() => () => {
            x && (b.layers.delete(x), b.layersWithOutsidePointerEventsDisabled.delete(x), p())
          }, [x, b]), o.useEffect(() => {
            let e = () => O({});
            return document.addEventListener(c, e), () => document.removeEventListener(c, e)
          }, []), (0, u.jsx)(l.sG.div, {
            ...w,
            ref: S,
            style: {
              pointerEvents: L ? P ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, i.mK)(e.onFocusCapture, M.onFocusCapture),
            onBlurCapture: (0, i.mK)(e.onBlurCapture, M.onBlurCapture),
            onPointerDownCapture: (0, i.mK)(e.onPointerDownCapture, D.onPointerDownCapture)
          })
        });

      function p() {
        let e = new CustomEvent(c);
        document.dispatchEvent(e)
      }

      function m(e, t, n, {
        discrete: r
      }) {
        let o = n.originalEvent.target,
          i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), r ? (0, l.hO)(o, i) : o.dispatchEvent(i)
      }
      d.displayName = "DismissableLayer", o.forwardRef((e, t) => {
        let n = o.useContext(f),
          r = o.useRef(null),
          i = (0, a.s)(t, r);
        return o.useEffect(() => {
          let e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }, [n.branches]), (0, u.jsx)(l.sG.div, {
          ...e,
          ref: i
        })
      }).displayName = "DismissableLayerBranch"
    },
    90804: (e, t, n) => {
      n.d(t, {
        N: () => o
      });
      var r = n(12115),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    }
  }
]);