! function() {
  try {
    var t = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
      e = (new t.Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "85297887-9c07-4f80-8977-081ef37d2a13", t._sentryDebugIdIdentifier = "sentry-dbid-85297887-9c07-4f80-8977-081ef37d2a13")
  } catch (t) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4910], {
    51799: () => {},
    80872: () => {},
    87153: (t, e, n) => {
      "use strict";
      n.d(e, {
        A: () => I
      });
      var r = n(12115);

      function i(t) {
        return "[object Object]" === Object.prototype.toString.call(t) || Array.isArray(t)
      }

      function o(t, e) {
        let n = Object.keys(t),
          r = Object.keys(e);
        return n.length === r.length && JSON.stringify(Object.keys(t.breakpoints || {})) === JSON.stringify(Object.keys(e.breakpoints || {})) && n.every(n => {
          let r = t[n],
            u = e[n];
          return "function" == typeof r ? `${r}` == `${u}` : i(r) && i(u) ? o(r, u) : r === u
        })
      }

      function u(t) {
        return t.concat().sort((t, e) => t.name > e.name ? 1 : -1).map(t => t.options)
      }

      function c(t) {
        return "number" == typeof t
      }

      function a(t) {
        return "string" == typeof t
      }

      function l(t) {
        return "boolean" == typeof t
      }

      function s(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
      }

      function f(t) {
        return Math.abs(t)
      }

      function d(t) {
        return Math.sign(t)
      }

      function p(t) {
        return h(t).map(Number)
      }

      function m(t) {
        return t[g(t)]
      }

      function g(t) {
        return Math.max(0, t.length - 1)
      }

      function y(t, e = 0) {
        return Array.from(Array(t), (t, n) => e + n)
      }

      function h(t) {
        return Object.keys(t)
      }

      function b(t, e) {
        return void 0 !== e.MouseEvent && t instanceof e.MouseEvent
      }

      function v() {
        let t = [],
          e = {
            add: function(n, r, i, o = {
              passive: !0
            }) {
              let u;
              return "addEventListener" in n ? (n.addEventListener(r, i, o), u = () => n.removeEventListener(r, i, o)) : (n.addListener(i), u = () => n.removeListener(i)), t.push(u), e
            },
            clear: function() {
              t = t.filter(t => t())
            }
          };
        return e
      }

      function x(t = 0, e = 0) {
        let n = f(t - e);

        function r(n) {
          return n < t || n > e
        }
        return {
          length: n,
          max: e,
          min: t,
          constrain: function(n) {
            return r(n) ? n < t ? t : e : n
          },
          reachedAny: r,
          reachedMax: function(t) {
            return t > e
          },
          reachedMin: function(e) {
            return e < t
          },
          removeOffset: function(t) {
            return n ? t - n * Math.ceil((t - e) / n) : t
          }
        }
      }

      function w(t) {
        let e = t;

        function n(t) {
          return c(t) ? t : t.get()
        }
        return {
          get: function() {
            return e
          },
          set: function(t) {
            e = n(t)
          },
          add: function(t) {
            e += n(t)
          },
          subtract: function(t) {
            e -= n(t)
          }
        }
      }

      function S(t, e) {
        let n = "x" === t.scroll ? function(t) {
            return `translate3d(${t}px,0px,0px)`
          } : function(t) {
            return `translate3d(0px,${t}px,0px)`
          },
          r = e.style,
          i = null,
          o = !1;
        return {
          clear: function() {
            !o && (r.transform = "", e.getAttribute("style") || e.removeAttribute("style"))
          },
          to: function(e) {
            if (o) return;
            let u = Math.round(100 * t.direction(e)) / 100;
            u !== i && (r.transform = n(u), i = u)
          },
          toggleActive: function(t) {
            o = !t
          }
        }
      }
      let O = {
        align: "center",
        axis: "x",
        container: null,
        slides: null,
        containScroll: "trimSnaps",
        direction: "ltr",
        slidesToScroll: 1,
        inViewThreshold: 0,
        breakpoints: {},
        dragFree: !1,
        dragThreshold: 10,
        loop: !1,
        skipSnaps: !1,
        duration: 25,
        startIndex: 0,
        active: !0,
        watchDrag: !0,
        watchResize: !0,
        watchSlides: !0,
        watchFocus: !0
      };

      function E(t, e, n) {
        let r, i, o, u, I, D, k, L, F = t.ownerDocument,
          M = F.defaultView,
          A = function(t) {
            function e(t, e) {
              return function t(e, n) {
                return [e, n].reduce((e, n) => (h(n).forEach(r => {
                  let i = e[r],
                    o = n[r],
                    u = s(i) && s(o);
                  e[r] = u ? t(i, o) : o
                }), e), {})
              }(t, e || {})
            }
            return {
              mergeOptions: e,
              optionsAtMedia: function(n) {
                let r = n.breakpoints || {},
                  i = h(r).filter(e => t.matchMedia(e).matches).map(t => r[t]).reduce((t, n) => e(t, n), {});
                return e(n, i)
              },
              optionsMediaQueries: function(e) {
                return e.map(t => h(t.breakpoints || {})).reduce((t, e) => t.concat(e), []).map(t.matchMedia)
              }
            }
          }(M),
          T = (L = [], {
            init: function(t, e) {
              return (L = e.filter(({
                options: t
              }) => !1 !== A.optionsAtMedia(t).active)).forEach(e => e.init(t, A)), e.reduce((t, e) => Object.assign(t, {
                [e.name]: e
              }), {})
            },
            destroy: function() {
              L = L.filter(t => t.destroy())
            }
          }),
          N = v(),
          j = (i = {}, o = {
            init: function(t) {
              r = t
            },
            emit: function(t) {
              return (i[t] || []).forEach(e => e(r, t)), o
            },
            off: function(t, e) {
              return i[t] = (i[t] || []).filter(t => t !== e), o
            },
            on: function(t, e) {
              return i[t] = (i[t] || []).concat([e]), o
            },
            clear: function() {
              i = {}
            }
          }),
          {
            mergeOptions: P,
            optionsAtMedia: H,
            optionsMediaQueries: V
          } = A,
          {
            on: z,
            off: C,
            emit: _
          } = j,
          U = !1,
          B = P(O, E.globalOptions),
          R = P(B),
          $ = [];

        function q(e, n) {
          U || (R = H(B = P(B, e)), $ = n || $, function() {
            let {
              container: e,
              slides: n
            } = R;
            D = (a(e) ? t.querySelector(e) : e) || t.children[0];
            let r = a(n) ? D.querySelectorAll(n) : n;
            k = [].slice.call(r || D.children)
          }(), u = function e(n) {
            let r = function(t, e, n, r, i, o, u) {
              var s, O;
              let E, I, D, k, L, F, M, A, T, N, j, P, H, V, {
                  align: z,
                  axis: C,
                  direction: _,
                  startIndex: U,
                  loop: B,
                  duration: R,
                  dragFree: $,
                  dragThreshold: q,
                  inViewThreshold: J,
                  slidesToScroll: X,
                  skipSnaps: Q,
                  containScroll: Y,
                  watchResize: G,
                  watchSlides: K,
                  watchDrag: W,
                  watchFocus: Z
                } = o,
                tt = {
                  measure: function(t) {
                    let {
                      offsetTop: e,
                      offsetLeft: n,
                      offsetWidth: r,
                      offsetHeight: i
                    } = t;
                    return {
                      top: e,
                      right: n + r,
                      bottom: e + i,
                      left: n,
                      width: r,
                      height: i
                    }
                  }
                },
                te = tt.measure(e),
                tn = n.map(tt.measure),
                tr = (I = "rtl" === _, k = (D = "y" === C) || !I ? 1 : -1, L = D ? "top" : I ? "right" : "left", F = D ? "bottom" : I ? "left" : "right", {
                  scroll: D ? "y" : "x",
                  cross: D ? "x" : "y",
                  startEdge: L,
                  endEdge: F,
                  measureSize: function(t) {
                    let {
                      height: e,
                      width: n
                    } = t;
                    return D ? e : n
                  },
                  direction: function(t) {
                    return t * k
                  }
                }),
                ti = tr.measureSize(te),
                to = {
                  measure: function(t) {
                    return t / 100 * ti
                  }
                },
                tu = (s = z, O = ti, E = {
                  start: function() {
                    return 0
                  },
                  center: function(t) {
                    return (O - t) / 2
                  },
                  end: function(t) {
                    return O - t
                  }
                }, {
                  measure: function(t, e) {
                    return a(s) ? E[s](t) : s(O, t, e)
                  }
                }),
                tc = !B && !!Y,
                {
                  slideSizes: ta,
                  slideSizesWithGaps: tl,
                  startGap: ts,
                  endGap: tf
                } = function(t, e, n, r, i, o) {
                  let {
                    measureSize: u,
                    startEdge: c,
                    endEdge: a
                  } = t, l = n[0] && i, s = function() {
                    if (!l) return 0;
                    let t = n[0];
                    return f(e[c] - t[c])
                  }(), d = l ? parseFloat(o.getComputedStyle(m(r)).getPropertyValue(`margin-${a}`)) : 0, p = n.map(u), y = n.map((t, e, n) => {
                    let r = e === g(n);
                    return e ? r ? p[e] + d : n[e + 1][c] - t[c] : p[e] + s
                  }).map(f);
                  return {
                    slideSizes: p,
                    slideSizesWithGaps: y,
                    startGap: s,
                    endGap: d
                  }
                }(tr, te, tn, n, B || !!Y, i),
                td = function(t, e, n, r, i, o, u, a, l) {
                  let {
                    startEdge: s,
                    endEdge: d,
                    direction: y
                  } = t, h = c(n);
                  return {
                    groupSlides: function(t) {
                      return h ? p(t).filter(t => t % n == 0).map(e => t.slice(e, e + n)) : t.length ? p(t).reduce((n, c, l) => {
                        let p = m(n) || 0,
                          h = c === g(t),
                          b = i[s] - o[p][s],
                          v = i[s] - o[c][d],
                          x = r || 0 !== p ? 0 : y(u),
                          w = f(v - (!r && h ? y(a) : 0) - (b + x));
                        return l && w > e + 2 && n.push(c), h && n.push(t.length), n
                      }, []).map((e, n, r) => {
                        let i = Math.max(r[n - 1] || 0);
                        return t.slice(i, e)
                      }) : []
                    }
                  }
                }(tr, ti, X, B, te, tn, ts, tf, 0),
                {
                  snaps: tp,
                  snapsAligned: tm
                } = function(t, e, n, r, i) {
                  let {
                    startEdge: o,
                    endEdge: u
                  } = t, {
                    groupSlides: c
                  } = i, a = c(r).map(t => m(t)[u] - t[0][o]).map(f).map(e.measure), l = r.map(t => n[o] - t[o]).map(t => -f(t)), s = c(l).map(t => t[0]).map((t, e) => t + a[e]);
                  return {
                    snaps: l,
                    snapsAligned: s
                  }
                }(tr, tu, te, tn, td),
                tg = -m(tp) + m(tl),
                {
                  snapsContained: ty,
                  scrollContainLimit: th
                } = function(t, e, n, r, i) {
                  let o, u, c = x(-e + t, 0),
                    a = n.map((t, e) => {
                      let {
                        min: r,
                        max: i
                      } = c, o = c.constrain(t), u = e === g(n);
                      return e ? u || function(t, e) {
                        return 1 >= f(t - e)
                      }(r, o) ? r : function(t, e) {
                        return 1 >= f(t - e)
                      }(i, o) ? i : o : i
                    }).map(t => parseFloat(t.toFixed(3))),
                    l = (o = a[0], u = m(a), x(a.lastIndexOf(o), a.indexOf(u) + 1));
                  return {
                    snapsContained: function() {
                      if (e <= t + 2) return [c.max];
                      if ("keepSnaps" === r) return a;
                      let {
                        min: n,
                        max: i
                      } = l;
                      return a.slice(n, i)
                    }(),
                    scrollContainLimit: l
                  }
                }(ti, tg, tm, Y, 0),
                tb = tc ? ty : tm,
                {
                  limit: tv
                } = (M = tb[0], {
                  limit: x(B ? M - tg : m(tb), M)
                }),
                tx = function t(e, n, r) {
                  let {
                    constrain: i
                  } = x(0, e), o = e + 1, u = c(n);

                  function c(t) {
                    return r ? f((o + t) % o) : i(t)
                  }

                  function a() {
                    return t(e, u, r)
                  }
                  let l = {
                    get: function() {
                      return u
                    },
                    set: function(t) {
                      return u = c(t), l
                    },
                    add: function(t) {
                      return a().set(u + t)
                    },
                    clone: a
                  };
                  return l
                }(g(tb), U, B),
                tw = tx.clone(),
                tS = p(n),
                tO = function(t, e, n, r) {
                  let i = v(),
                    o = 1e3 / 60,
                    u = null,
                    c = 0,
                    a = 0;

                  function l(t) {
                    if (!a) return;
                    u || (u = t, n(), n());
                    let i = t - u;
                    for (u = t, c += i; c >= o;) n(), c -= o;
                    r(c / o), a && (a = e.requestAnimationFrame(l))
                  }

                  function s() {
                    e.cancelAnimationFrame(a), u = null, c = 0, a = 0
                  }
                  return {
                    init: function() {
                      i.add(t, "visibilitychange", () => {
                        t.hidden && (u = null, c = 0)
                      })
                    },
                    destroy: function() {
                      s(), i.clear()
                    },
                    start: function() {
                      a || (a = e.requestAnimationFrame(l))
                    },
                    stop: s,
                    update: n,
                    render: r
                  }
                }(r, i, () => (({
                  dragHandler: t,
                  scrollBody: e,
                  scrollBounds: n,
                  options: {
                    loop: r
                  }
                }) => {
                  r || n.constrain(t.pointerDown()), e.seek()
                })(tV), t => (({
                  scrollBody: t,
                  translate: e,
                  location: n,
                  offsetLocation: r,
                  previousLocation: i,
                  scrollLooper: o,
                  slideLooper: u,
                  dragHandler: c,
                  animation: a,
                  eventHandler: l,
                  scrollBounds: s,
                  options: {
                    loop: f
                  }
                }, d) => {
                  let p = t.settled(),
                    m = !s.shouldConstrain(),
                    g = f ? p : p && m,
                    y = g && !c.pointerDown();
                  y && a.stop();
                  let h = n.get() * d + i.get() * (1 - d);
                  r.set(h), f && (o.loop(t.direction()), u.loop()), e.to(r.get()), y && l.emit("settle"), g || l.emit("scroll")
                })(tV, t)),
                tE = tb[tx.get()],
                tI = w(tE),
                tD = w(tE),
                tk = w(tE),
                tL = w(tE),
                tF = function(t, e, n, r, i, o) {
                  let u = 0,
                    c = 0,
                    a = i,
                    l = .68,
                    s = t.get(),
                    p = 0;

                  function m(t) {
                    return a = t, y
                  }

                  function g(t) {
                    return l = t, y
                  }
                  let y = {
                    direction: function() {
                      return c
                    },
                    duration: function() {
                      return a
                    },
                    velocity: function() {
                      return u
                    },
                    seek: function() {
                      let e = r.get() - t.get(),
                        i = 0;
                      return a ? (n.set(t), u += e / a, u *= l, s += u, t.add(u), i = s - p) : (u = 0, n.set(r), t.set(r), i = e), c = d(i), p = s, y
                    },
                    settled: function() {
                      return .001 > f(r.get() - e.get())
                    },
                    useBaseFriction: function() {
                      return g(.68)
                    },
                    useBaseDuration: function() {
                      return m(i)
                    },
                    useFriction: g,
                    useDuration: m
                  };
                  return y
                }(tI, tk, tD, tL, R, 0),
                tM = function(t, e, n, r, i) {
                  let {
                    reachedAny: o,
                    removeOffset: u,
                    constrain: c
                  } = r;

                  function a(t) {
                    return t.concat().sort((t, e) => f(t) - f(e))[0]
                  }

                  function l(e, r) {
                    let i = [e, e + n, e - n];
                    if (!t) return e;
                    if (!r) return a(i);
                    let o = i.filter(t => d(t) === r);
                    return o.length ? a(o) : m(i) - n
                  }
                  return {
                    byDistance: function(n, r) {
                      let a = i.get() + n,
                        {
                          index: s,
                          distance: d
                        } = function(n) {
                          let r = t ? u(n) : c(n),
                            {
                              index: i
                            } = e.map((t, e) => ({
                              diff: l(t - r, 0),
                              index: e
                            })).sort((t, e) => f(t.diff) - f(e.diff))[0];
                          return {
                            index: i,
                            distance: r
                          }
                        }(a),
                        p = !t && o(a);
                      if (!r || p) return {
                        index: s,
                        distance: n
                      };
                      let m = n + l(e[s] - d, 0);
                      return {
                        index: s,
                        distance: m
                      }
                    },
                    byIndex: function(t, n) {
                      let r = l(e[t] - i.get(), n);
                      return {
                        index: t,
                        distance: r
                      }
                    },
                    shortcut: l
                  }
                }(B, tb, tg, tv, tL),
                tA = function(t, e, n, r, i, o, u) {
                  function c(i) {
                    let c = i.distance,
                      a = i.index !== e.get();
                    o.add(c), c && (r.duration() ? t.start() : (t.update(), t.render(1), t.update())), a && (n.set(e.get()), e.set(i.index), u.emit("select"))
                  }
                  return {
                    distance: function(t, e) {
                      c(i.byDistance(t, e))
                    },
                    index: function(t, n) {
                      let r = e.clone().set(t);
                      c(i.byIndex(r.get(), n))
                    }
                  }
                }(tO, tx, tw, tF, tM, tL, u),
                tT = function(t) {
                  let {
                    max: e,
                    length: n
                  } = t;
                  return {
                    get: function(t) {
                      return n ? -((t - e) / n) : 0
                    }
                  }
                }(tv),
                tN = v(),
                tj = (T = {}, N = null, j = null, P = !1, {
                  init: function() {
                    A = new IntersectionObserver(t => {
                      P || (t.forEach(t => {
                        T[n.indexOf(t.target)] = t
                      }), N = null, j = null, u.emit("slidesInView"))
                    }, {
                      root: e.parentElement,
                      threshold: J
                    }), n.forEach(t => A.observe(t))
                  },
                  destroy: function() {
                    A && A.disconnect(), P = !0
                  },
                  get: function(t = !0) {
                    if (t && N) return N;
                    if (!t && j) return j;
                    let e = h(T).reduce((e, n) => {
                      let r = parseInt(n),
                        {
                          isIntersecting: i
                        } = T[r];
                      return (t && i || !t && !i) && e.push(r), e
                    }, []);
                    return t && (N = e), t || (j = e), e
                  }
                }),
                {
                  slideRegistry: tP
                } = function(t, e, n, r, i, o) {
                  let u, {
                      groupSlides: c
                    } = i,
                    {
                      min: a,
                      max: l
                    } = r;
                  return {
                    slideRegistry: (u = c(o), 1 === n.length ? [o] : t && "keepSnaps" !== e ? u.slice(a, l).map((t, e, n) => {
                      let r = e === g(n);
                      return e ? r ? y(g(o) - m(n)[0] + 1, m(n)[0]) : t : y(m(n[0]) + 1)
                    }) : u)
                  }
                }(tc, Y, tb, th, td, tS),
                tH = function(t, e, n, r, i, o, u, a) {
                  let s = {
                      passive: !0,
                      capture: !0
                    },
                    f = 0;

                  function d(t) {
                    "Tab" === t.code && (f = new Date().getTime())
                  }
                  return {
                    init: function(p) {
                      a && (o.add(document, "keydown", d, !1), e.forEach((e, d) => {
                        o.add(e, "focus", e => {
                          (l(a) || a(p, e)) && function(e) {
                            if (new Date().getTime() - f > 10) return;
                            u.emit("slideFocusStart"), t.scrollLeft = 0;
                            let o = n.findIndex(t => t.includes(e));
                            c(o) && (i.useDuration(0), r.index(o, 0), u.emit("slideFocus"))
                          }(d)
                        }, s)
                      }))
                    }
                  }
                }(t, n, tP, tA, tF, tN, u, Z),
                tV = {
                  ownerDocument: r,
                  ownerWindow: i,
                  eventHandler: u,
                  containerRect: te,
                  slideRects: tn,
                  animation: tO,
                  axis: tr,
                  dragHandler: function(t, e, n, r, i, o, u, c, a, s, p, m, g, y, h, w, S, O, E) {
                    let {
                      cross: I,
                      direction: D
                    } = t, k = ["INPUT", "SELECT", "TEXTAREA"], L = {
                      passive: !1
                    }, F = v(), M = v(), A = x(50, 225).constrain(y.measure(20)), T = {
                      mouse: 300,
                      touch: 400
                    }, N = {
                      mouse: 500,
                      touch: 600
                    }, j = h ? 43 : 25, P = !1, H = 0, V = 0, z = !1, C = !1, _ = !1, U = !1;

                    function B(t) {
                      if (!b(t, r) && t.touches.length >= 2) return R(t);
                      let e = o.readPoint(t),
                        n = o.readPoint(t, I),
                        u = f(e - H),
                        a = f(n - V);
                      if (!C && !U && (!t.cancelable || !(C = u > a))) return R(t);
                      let l = o.pointerMove(t);
                      u > w && (_ = !0), s.useFriction(.3).useDuration(.75), c.start(), i.add(D(l)), t.preventDefault()
                    }

                    function R(t) {
                      var e;
                      let n, r, i = p.byDistance(0, !1).index !== m.get(),
                        u = o.pointerUp(t) * (h ? N : T)[U ? "mouse" : "touch"],
                        c = (e = D(u), n = m.add(-1 * d(e)), r = p.byDistance(e, !h).distance, h || f(e) < A ? r : S && i ? .5 * r : p.byIndex(n.get(), 0).distance),
                        l = function(t, e) {
                          var n, r;
                          if (0 === t || 0 === e || f(t) <= f(e)) return 0;
                          let i = (n = f(t), r = f(e), f(n - r));
                          return f(i / t)
                        }(u, c);
                      C = !1, z = !1, M.clear(), s.useDuration(j - 10 * l).useFriction(.68 + l / 50), a.distance(c, !h), U = !1, g.emit("pointerUp")
                    }

                    function $(t) {
                      _ && (t.stopPropagation(), t.preventDefault(), _ = !1)
                    }
                    return {
                      init: function(t) {
                        E && F.add(e, "dragstart", t => t.preventDefault(), L).add(e, "touchmove", () => void 0, L).add(e, "touchend", () => void 0).add(e, "touchstart", c).add(e, "mousedown", c).add(e, "touchcancel", R).add(e, "contextmenu", R).add(e, "click", $, !0);

                        function c(c) {
                          (l(E) || E(t, c)) && function(t) {
                            let c, a = b(t, r);
                            if ((U = a, _ = h && a && !t.buttons && P, P = f(i.get() - u.get()) >= 2, !a || 0 === t.button) && (c = t.target.nodeName || "", !k.includes(c))) {
                              let r;
                              z = !0, o.pointerDown(t), s.useFriction(0).useDuration(0), i.set(u), r = U ? n : e, M.add(r, "touchmove", B, L).add(r, "touchend", R).add(r, "mousemove", B, L).add(r, "mouseup", R), H = o.readPoint(t), V = o.readPoint(t, I), g.emit("pointerDown")
                            }
                          }(c)
                        }
                      },
                      destroy: function() {
                        F.clear(), M.clear()
                      },
                      pointerDown: function() {
                        return z
                      }
                    }
                  }(tr, t, r, i, tL, function(t, e) {
                    let n, r;

                    function i(t) {
                      return t.timeStamp
                    }

                    function o(n, r) {
                      let i = r || t.scroll,
                        o = `client${"x"===i?"X":"Y"}`;
                      return (b(n, e) ? n : n.touches[0])[o]
                    }
                    return {
                      pointerDown: function(t) {
                        return n = t, r = t, o(t)
                      },
                      pointerMove: function(t) {
                        let e = o(t) - o(r),
                          u = i(t) - i(n) > 170;
                        return r = t, u && (n = t), e
                      },
                      pointerUp: function(t) {
                        if (!n || !r) return 0;
                        let e = o(r) - o(n),
                          u = i(t) - i(n),
                          c = i(t) - i(r) > 170,
                          a = e / u;
                        return u && !c && f(a) > .1 ? a : 0
                      },
                      readPoint: o
                    }
                  }(tr, i), tI, tO, tA, tF, tM, tx, u, to, $, q, Q, 0, W),
                  eventStore: tN,
                  percentOfView: to,
                  index: tx,
                  indexPrevious: tw,
                  limit: tv,
                  location: tI,
                  offsetLocation: tk,
                  previousLocation: tD,
                  options: o,
                  resizeHandler: function(t, e, n, r, i, o, u) {
                    let c, a, s = [t].concat(r),
                      d = [],
                      p = !1;

                    function m(t) {
                      return i.measureSize(u.measure(t))
                    }
                    return {
                      init: function(i) {
                        o && (a = m(t), d = r.map(m), c = new ResizeObserver(n => {
                          (l(o) || o(i, n)) && function(n) {
                            for (let o of n) {
                              if (p) return;
                              let n = o.target === t,
                                u = r.indexOf(o.target),
                                c = n ? a : d[u];
                              if (f(m(n ? t : r[u]) - c) >= .5) {
                                i.reInit(), e.emit("resize");
                                break
                              }
                            }
                          }(n)
                        }), n.requestAnimationFrame(() => {
                          s.forEach(t => c.observe(t))
                        }))
                      },
                      destroy: function() {
                        p = !0, c && c.disconnect()
                      }
                    }
                  }(e, u, i, n, tr, G, tt),
                  scrollBody: tF,
                  scrollBounds: function(t, e, n, r, i) {
                    let o = i.measure(10),
                      u = i.measure(50),
                      c = x(.1, .99),
                      a = !1;

                    function l() {
                      return !a && !!t.reachedAny(n.get()) && !!t.reachedAny(e.get())
                    }
                    return {
                      shouldConstrain: l,
                      constrain: function(i) {
                        if (!l()) return;
                        let a = t.reachedMin(e.get()) ? "min" : "max",
                          s = f(t[a] - e.get()),
                          d = n.get() - e.get(),
                          p = c.constrain(s / u);
                        n.subtract(d * p), !i && f(d) < o && (n.set(t.constrain(n.get())), r.useDuration(25).useBaseFriction())
                      },
                      toggleActive: function(t) {
                        a = !t
                      }
                    }
                  }(tv, tk, tL, tF, to),
                  scrollLooper: function(t, e, n, r) {
                    let {
                      reachedMin: i,
                      reachedMax: o
                    } = x(e.min + .1, e.max + .1);
                    return {
                      loop: function(e) {
                        if (!(1 === e ? o(n.get()) : -1 === e && i(n.get()))) return;
                        let u = -1 * e * t;
                        r.forEach(t => t.add(u))
                      }
                    }
                  }(tg, tv, tk, [tI, tk, tD, tL]),
                  scrollProgress: tT,
                  scrollSnapList: tb.map(tT.get),
                  scrollSnaps: tb,
                  scrollTarget: tM,
                  scrollTo: tA,
                  slideLooper: function(t, e, n, r, i, o, u, c, a) {
                    let l = p(i),
                      s = p(i).reverse(),
                      f = g(m(s, u[0]), n, !1).concat(g(m(l, e - u[0] - 1), -n, !0));

                    function d(t, e) {
                      return t.reduce((t, e) => t - i[e], e)
                    }

                    function m(t, e) {
                      return t.reduce((t, n) => d(t, e) > 0 ? t.concat([n]) : t, [])
                    }

                    function g(i, u, l) {
                      let s = o.map((t, n) => ({
                        start: t - r[n] + .5 + u,
                        end: t + e - .5 + u
                      }));
                      return i.map(e => {
                        let r = l ? 0 : -n,
                          i = l ? n : 0,
                          o = s[e][l ? "end" : "start"];
                        return {
                          index: e,
                          loopPoint: o,
                          slideLocation: w(-1),
                          translate: S(t, a[e]),
                          target: () => c.get() > o ? r : i
                        }
                      })
                    }
                    return {
                      canLoop: function() {
                        return f.every(({
                          index: t
                        }) => .1 >= d(l.filter(e => e !== t), e))
                      },
                      clear: function() {
                        f.forEach(t => t.translate.clear())
                      },
                      loop: function() {
                        f.forEach(t => {
                          let {
                            target: e,
                            translate: n,
                            slideLocation: r
                          } = t, i = e();
                          i !== r.get() && (n.to(i), r.set(i))
                        })
                      },
                      loopPoints: f
                    }
                  }(tr, ti, tg, ta, tl, tp, tb, tk, n),
                  slideFocus: tH,
                  slidesHandler: (V = !1, {
                    init: function(t) {
                      K && (H = new MutationObserver(e => {
                        !V && (l(K) || K(t, e)) && function(e) {
                          for (let n of e)
                            if ("childList" === n.type) {
                              t.reInit(), u.emit("slidesChanged");
                              break
                            }
                        }(e)
                      })).observe(e, {
                        childList: !0
                      })
                    },
                    destroy: function() {
                      H && H.disconnect(), V = !0
                    }
                  }),
                  slidesInView: tj,
                  slideIndexes: tS,
                  slideRegistry: tP,
                  slidesToScroll: td,
                  target: tL,
                  translate: S(tr, e)
                };
              return tV
            }(t, D, k, F, M, n, j);
            return n.loop && !r.slideLooper.canLoop() ? e(Object.assign({}, n, {
              loop: !1
            })) : r
          }(R), V([B, ...$.map(({
            options: t
          }) => t)]).forEach(t => N.add(t, "change", J)), R.active && (u.translate.to(u.location.get()), u.animation.init(), u.slidesInView.init(), u.slideFocus.init(G), u.eventHandler.init(G), u.resizeHandler.init(G), u.slidesHandler.init(G), u.options.loop && u.slideLooper.loop(), D.offsetParent && k.length && u.dragHandler.init(G), I = T.init(G, $)))
        }

        function J(t, e) {
          let n = Y();
          X(), q(P({
            startIndex: n
          }, t), e), j.emit("reInit")
        }

        function X() {
          u.dragHandler.destroy(), u.eventStore.clear(), u.translate.clear(), u.slideLooper.clear(), u.resizeHandler.destroy(), u.slidesHandler.destroy(), u.slidesInView.destroy(), u.animation.destroy(), T.destroy(), N.clear()
        }

        function Q(t, e, n) {
          R.active && !U && (u.scrollBody.useBaseFriction().useDuration(!0 === e ? 0 : R.duration), u.scrollTo.index(t, n || 0))
        }

        function Y() {
          return u.index.get()
        }
        let G = {
          canScrollNext: function() {
            return u.index.add(1).get() !== Y()
          },
          canScrollPrev: function() {
            return u.index.add(-1).get() !== Y()
          },
          containerNode: function() {
            return D
          },
          internalEngine: function() {
            return u
          },
          destroy: function() {
            U || (U = !0, N.clear(), X(), j.emit("destroy"), j.clear())
          },
          off: C,
          on: z,
          emit: _,
          plugins: function() {
            return I
          },
          previousScrollSnap: function() {
            return u.indexPrevious.get()
          },
          reInit: J,
          rootNode: function() {
            return t
          },
          scrollNext: function(t) {
            Q(u.index.add(1).get(), t, -1)
          },
          scrollPrev: function(t) {
            Q(u.index.add(-1).get(), t, 1)
          },
          scrollProgress: function() {
            return u.scrollProgress.get(u.offsetLocation.get())
          },
          scrollSnapList: function() {
            return u.scrollSnapList
          },
          scrollTo: Q,
          selectedScrollSnap: Y,
          slideNodes: function() {
            return k
          },
          slidesInView: function() {
            return u.slidesInView.get()
          },
          slidesNotInView: function() {
            return u.slidesInView.get(!1)
          }
        };
        return q(e, n), setTimeout(() => j.emit("init"), 0), G
      }

      function I(t = {}, e = []) {
        let n = (0, r.useRef)(t),
          i = (0, r.useRef)(e),
          [c, a] = (0, r.useState)(),
          [l, s] = (0, r.useState)(),
          f = (0, r.useCallback)(() => {
            c && c.reInit(n.current, i.current)
          }, [c]);
        return (0, r.useEffect)(() => {
          o(n.current, t) || (n.current = t, f())
        }, [t, f]), (0, r.useEffect)(() => {
          ! function(t, e) {
            if (t.length !== e.length) return !1;
            let n = u(t),
              r = u(e);
            return n.every((t, e) => o(t, r[e]))
          }(i.current, e) && (i.current = e, f())
        }, [e, f]), (0, r.useEffect)(() => {
          if ("u" > typeof window && window.document && window.document.createElement && l) {
            E.globalOptions = I.globalOptions;
            let t = E(l, n.current, i.current);
            return a(t), () => t.destroy()
          }
          a(void 0)
        }, [l, a]), [s, c]
      }
      E.globalOptions = void 0, I.globalOptions = void 0
    },
    87521: (t, e, n) => {
      "use strict";
      n.d(e, {
        A: () => i
      });
      let r = {
        active: !0,
        breakpoints: {},
        delay: 4e3,
        jump: !1,
        playOnInit: !0,
        stopOnFocusIn: !0,
        stopOnInteraction: !0,
        stopOnMouseEnter: !1,
        stopOnLastSnap: !1,
        rootNode: null
      };

      function i(t = {}) {
        let e, n, o, u, c = null,
          a = 0,
          l = !1,
          s = !1,
          f = !1,
          d = !1;

        function p() {
          if (!o) {
            if (y()) {
              f = !0;
              return
            }
            l || n.emit("autoplay:play"),
              function() {
                let {
                  ownerWindow: t
                } = n.internalEngine();
                t.clearTimeout(a), a = t.setTimeout(w, u[n.selectedScrollSnap()]), c = new Date().getTime(), n.emit("autoplay:timerset")
              }(), l = !0
          }
        }

        function m() {
          o || (l && n.emit("autoplay:stop"), function() {
            let {
              ownerWindow: t
            } = n.internalEngine();
            t.clearTimeout(a), a = 0, c = null, n.emit("autoplay:timerstopped")
          }(), l = !1)
        }

        function g() {
          if (y()) return f = l, m();
          f && p()
        }

        function y() {
          let {
            ownerDocument: t
          } = n.internalEngine();
          return "hidden" === t.visibilityState
        }

        function h() {
          s || m()
        }

        function b() {
          s || p()
        }

        function v() {
          s = !0, m()
        }

        function x() {
          s = !1, p()
        }

        function w() {
          let {
            index: t
          } = n.internalEngine(), r = t.clone().add(1).get(), i = n.scrollSnapList().length - 1, o = e.stopOnLastSnap && r === i;
          if (n.canScrollNext() ? n.scrollNext(d) : n.scrollTo(0, d), n.emit("autoplay:select"), o) return m();
          p()
        }
        return {
          name: "autoplay",
          options: t,
          init: function(c, a) {
            var l, s, f, y;
            let w, S;
            n = c;
            let {
              mergeOptions: O,
              optionsAtMedia: E
            } = a, I = O(r, i.globalOptions);
            if (e = E(O(I, t)), n.scrollSnapList().length <= 1) return;
            d = e.jump, o = !1, l = n, s = e.delay, w = l.scrollSnapList(), u = "number" == typeof s ? w.map(() => s) : s(w, l);
            let {
              eventStore: D,
              ownerDocument: k
            } = n.internalEngine(), L = !!n.internalEngine().options.watchDrag, F = (f = n, y = e.rootNode, S = f.rootNode(), y && y(S) || S);
            D.add(k, "visibilitychange", g), L && n.on("pointerDown", h), L && !e.stopOnInteraction && n.on("pointerUp", b), e.stopOnMouseEnter && D.add(F, "mouseenter", v), e.stopOnMouseEnter && !e.stopOnInteraction && D.add(F, "mouseleave", x), e.stopOnFocusIn && n.on("slideFocusStart", m), e.stopOnFocusIn && !e.stopOnInteraction && D.add(n.containerNode(), "focusout", p), e.playOnInit && p()
          },
          destroy: function() {
            n.off("pointerDown", h).off("pointerUp", b).off("slideFocusStart", m), m(), o = !0, l = !1
          },
          play: function(t) {
            void 0 !== t && (d = t), p()
          },
          stop: function() {
            l && m()
          },
          reset: function() {
            l && p()
          },
          isPlaying: function() {
            return l
          },
          timeUntilNext: function() {
            return c ? u[n.selectedScrollSnap()] - (new Date().getTime() - c) : null
          }
        }
      }
      i.globalOptions = void 0
    }
  }
]);