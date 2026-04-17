! function() {
  try {
    var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8ffc95d4-4528-4aa1-a66a-5ca45d70d008", e._sentryDebugIdIdentifier = "sentry-dbid-8ffc95d4-4528-4aa1-a66a-5ca45d70d008")
  } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4766, 7332], {
    134: () => {},
    374: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        default: () => o
      });
      var r = Number.isNaN || function(e) {
        return "number" == typeof e && e != e
      };

      function i(e, t) {
        if (e.length !== t.length) return !1;
        for (var n, i, o = 0; o < e.length; o++)
          if (!((n = e[o]) === (i = t[o]) || r(n) && r(i)) && 1) return !1;
        return !0
      }

      function o(e, t) {
        void 0 === t && (t = i);
        var n = null;

        function r() {
          for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
          if (n && n.lastThis === this && t(r, n.lastArgs)) return n.lastResult;
          var o = e.apply(this, r);
          return n = {
            lastResult: o,
            lastArgs: r,
            lastThis: this
          }, o
        }
        return r.clear = function() {
          n = null
        }, r
      }
    },
    1458: () => {},
    2208: e => {
      e.exports = function(e, t) {
        var n = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
          var r, i, o, s, a = [],
            l = !0,
            u = !1;
          try {
            if (o = (n = n.call(e)).next, 0 === t) {
              if (Object(n) !== n) return;
              l = !1
            } else
              for (; !(l = (r = o.call(n)).done) && (a.push(r.value), a.length !== t); l = !0);
          } catch (e) {
            u = !0, i = e
          } finally {
            try {
              if (!l && null != n.return && (s = n.return(), Object(s) !== s)) return
            } finally {
              if (u) throw i
            }
          }
          return a
        }
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    2803: () => {},
    2990: (e, t, n) => {
      var r = n(24082).default,
        i = n(80987);
      e.exports = function(e) {
        var t = i(e, "string");
        return "symbol" == r(t) ? t : t + ""
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    3137: e => {
      e.exports = {
        indexOf: function(e, t) {
          var n, r;
          if (Array.prototype.indexOf) return e.indexOf(t);
          for (n = 0, r = e.length; n < r; n++)
            if (e[n] === t) return n;
          return -1
        },
        forEach: function(e, t, n) {
          var r, i;
          if (Array.prototype.forEach) return e.forEach(t, n);
          for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e)
        },
        trim: function(e) {
          return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
        },
        trimRight: function(e) {
          return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "")
        }
      }
    },
    3293: e => {
      e.exports = function(e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if (({}).hasOwnProperty.call(e, r)) {
            if (-1 !== t.indexOf(r)) continue;
            n[r] = e[r]
          } return n
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    3883: () => {},
    4024: (e, t, n) => {
      "use strict";
      n.d(t, {
        UC: () => e4,
        q7: () => e6,
        ZL: () => e7,
        bL: () => e5,
        wv: () => te,
        l9: () => e8
      });
      var r = n(12115),
        i = n(65453),
        o = n(633),
        s = n(75021),
        a = n(38665),
        l = n(13275),
        u = n(97968),
        c = n(90471),
        h = n(81354),
        d = n(1977),
        p = n(4899),
        f = n(5337),
        m = n(13593),
        g = n(76990),
        v = n(31557),
        y = n(58069),
        b = n(95155),
        w = "rovingFocusGroup.onEntryFocus",
        x = {
          bubbles: !1,
          cancelable: !0
        },
        S = "RovingFocusGroup",
        [P, T, k] = (0, u.N)(S),
        [E, C] = (0, s.A)(S, [k]),
        [A, R] = E(S),
        M = r.forwardRef((e, t) => (0, b.jsx)(P.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, b.jsx)(P.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, b.jsx)(j, {
              ...e,
              ref: t
            })
          })
        }));
      M.displayName = S;
      var j = r.forwardRef((e, t) => {
          let {
            __scopeRovingFocusGroup: n,
            orientation: s,
            loop: u = !1,
            dir: h,
            currentTabStopId: d,
            defaultCurrentTabStopId: p,
            onCurrentTabStopIdChange: f,
            onEntryFocus: m,
            preventScrollOnEntryFocus: g = !1,
            ...v
          } = e, P = r.useRef(null), k = (0, o.s)(t, P), E = (0, c.jH)(h), [C, R] = (0, a.i)({
            prop: d,
            defaultProp: p ?? null,
            onChange: f,
            caller: S
          }), [M, j] = r.useState(!1), _ = (0, y.c)(m), I = T(n), D = r.useRef(!1), [L, V] = r.useState(0);
          return r.useEffect(() => {
            let e = P.current;
            if (e) return e.addEventListener(w, _), () => e.removeEventListener(w, _)
          }, [_]), (0, b.jsx)(A, {
            scope: n,
            orientation: s,
            dir: E,
            loop: u,
            currentTabStopId: C,
            onItemFocus: r.useCallback(e => R(e), [R]),
            onItemShiftTab: r.useCallback(() => j(!0), []),
            onFocusableItemAdd: r.useCallback(() => V(e => e + 1), []),
            onFocusableItemRemove: r.useCallback(() => V(e => e - 1), []),
            children: (0, b.jsx)(l.sG.div, {
              tabIndex: M || 0 === L ? -1 : 0,
              "data-orientation": s,
              ...v,
              ref: k,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, i.mK)(e.onMouseDown, () => {
                D.current = !0
              }),
              onFocus: (0, i.mK)(e.onFocus, e => {
                let t = !D.current;
                if (e.target === e.currentTarget && t && !M) {
                  let t = new CustomEvent(w, x);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    let e = I().filter(e => e.focusable);
                    O([e.find(e => e.active), e.find(e => e.id === C), ...e].filter(Boolean).map(e => e.ref.current), g)
                  }
                }
                D.current = !1
              }),
              onBlur: (0, i.mK)(e.onBlur, () => j(!1))
            })
          })
        }),
        _ = "RovingFocusGroupItem",
        I = r.forwardRef((e, t) => {
          let {
            __scopeRovingFocusGroup: n,
            focusable: o = !0,
            active: s = !1,
            tabStopId: a,
            children: u,
            ...c
          } = e, h = (0, f.B)(), d = a || h, p = R(_, n), m = p.currentTabStopId === d, g = T(n), {
            onFocusableItemAdd: v,
            onFocusableItemRemove: y,
            currentTabStopId: w
          } = p;
          return r.useEffect(() => {
            if (o) return v(), () => y()
          }, [o, v, y]), (0, b.jsx)(P.ItemSlot, {
            scope: n,
            id: d,
            focusable: o,
            active: s,
            children: (0, b.jsx)(l.sG.span, {
              tabIndex: m ? 0 : -1,
              "data-orientation": p.orientation,
              ...c,
              ref: t,
              onMouseDown: (0, i.mK)(e.onMouseDown, e => {
                o ? p.onItemFocus(d) : e.preventDefault()
              }),
              onFocus: (0, i.mK)(e.onFocus, () => p.onItemFocus(d)),
              onKeyDown: (0, i.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void p.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                let t = function(e, t, n) {
                  var r;
                  let i = (r = e.key, "rtl" !== n ? r : "ArrowLeft" === r ? "ArrowRight" : "ArrowRight" === r ? "ArrowLeft" : r);
                  if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(i)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(i))) return D[i]
                }(e, p.orientation, p.dir);
                if (void 0 !== t) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  let i = g().filter(e => e.focusable).map(e => e.ref.current);
                  if ("last" === t) i.reverse();
                  else if ("prev" === t || "next" === t) {
                    var n, r;
                    "prev" === t && i.reverse();
                    let o = i.indexOf(e.currentTarget);
                    i = p.loop ? (n = i, r = o + 1, n.map((e, t) => n[(r + t) % n.length])) : i.slice(o + 1)
                  }
                  setTimeout(() => O(i))
                }
              }),
              children: "function" == typeof u ? u({
                isCurrentTabStop: m,
                hasTabStop: null != w
              }) : u
            })
          })
        });
      I.displayName = _;
      var D = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function O(e, t = !1) {
        let n = document.activeElement;
        for (let r of e)
          if (r === n || (r.focus({
              preventScroll: t
            }), document.activeElement !== n)) return
      }
      var L = n(11792),
        V = n(65828),
        F = n(74967),
        N = ["Enter", " "],
        U = ["ArrowUp", "PageDown", "End"],
        B = ["ArrowDown", "PageUp", "Home", ...U],
        K = {
          ltr: [...N, "ArrowRight"],
          rtl: [...N, "ArrowLeft"]
        },
        $ = {
          ltr: ["ArrowLeft"],
          rtl: ["ArrowRight"]
        },
        W = "Menu",
        [G, q, z] = (0, u.N)(W),
        [H, X] = (0, s.A)(W, [z, m.Bk, C]),
        Y = (0, m.Bk)(),
        Z = C(),
        [J, Q] = H(W),
        [ee, et] = H(W),
        en = e => {
          let {
            __scopeMenu: t,
            open: n = !1,
            children: i,
            dir: o,
            onOpenChange: s,
            modal: a = !0
          } = e, l = Y(t), [u, h] = r.useState(null), d = r.useRef(!1), p = (0, y.c)(s), f = (0, c.jH)(o);
          return r.useEffect(() => {
            let e = () => {
                d.current = !0, document.addEventListener("pointerdown", t, {
                  capture: !0,
                  once: !0
                }), document.addEventListener("pointermove", t, {
                  capture: !0,
                  once: !0
                })
              },
              t = () => d.current = !1;
            return document.addEventListener("keydown", e, {
              capture: !0
            }), () => {
              document.removeEventListener("keydown", e, {
                capture: !0
              }), document.removeEventListener("pointerdown", t, {
                capture: !0
              }), document.removeEventListener("pointermove", t, {
                capture: !0
              })
            }
          }, []), (0, b.jsx)(m.bL, {
            ...l,
            children: (0, b.jsx)(J, {
              scope: t,
              open: n,
              onOpenChange: p,
              content: u,
              onContentChange: h,
              children: (0, b.jsx)(ee, {
                scope: t,
                onClose: r.useCallback(() => p(!1), [p]),
                isUsingKeyboardRef: d,
                dir: f,
                modal: a,
                children: i
              })
            })
          })
        };
      en.displayName = W;
      var er = r.forwardRef((e, t) => {
        let {
          __scopeMenu: n,
          ...r
        } = e, i = Y(n);
        return (0, b.jsx)(m.Mz, {
          ...i,
          ...r,
          ref: t
        })
      });
      er.displayName = "MenuAnchor";
      var ei = "MenuPortal",
        [eo, es] = H(ei, {
          forceMount: void 0
        }),
        ea = e => {
          let {
            __scopeMenu: t,
            forceMount: n,
            children: r,
            container: i
          } = e, o = Q(ei, t);
          return (0, b.jsx)(eo, {
            scope: t,
            forceMount: n,
            children: (0, b.jsx)(v.C, {
              present: n || o.open,
              children: (0, b.jsx)(g.Z, {
                asChild: !0,
                container: i,
                children: r
              })
            })
          })
        };
      ea.displayName = ei;
      var el = "MenuContent",
        [eu, ec] = H(el),
        eh = r.forwardRef((e, t) => {
          let n = es(el, e.__scopeMenu),
            {
              forceMount: r = n.forceMount,
              ...i
            } = e,
            o = Q(el, e.__scopeMenu),
            s = et(el, e.__scopeMenu);
          return (0, b.jsx)(G.Provider, {
            scope: e.__scopeMenu,
            children: (0, b.jsx)(v.C, {
              present: r || o.open,
              children: (0, b.jsx)(G.Slot, {
                scope: e.__scopeMenu,
                children: s.modal ? (0, b.jsx)(ed, {
                  ...i,
                  ref: t
                }) : (0, b.jsx)(ep, {
                  ...i,
                  ref: t
                })
              })
            })
          })
        }),
        ed = r.forwardRef((e, t) => {
          let n = Q(el, e.__scopeMenu),
            s = r.useRef(null),
            a = (0, o.s)(t, s);
          return r.useEffect(() => {
            let e = s.current;
            if (e) return (0, V.Eq)(e)
          }, []), (0, b.jsx)(em, {
            ...e,
            ref: a,
            trapFocus: n.open,
            disableOutsidePointerEvents: n.open,
            disableOutsideScroll: !0,
            onFocusOutside: (0, i.mK)(e.onFocusOutside, e => e.preventDefault(), {
              checkForDefaultPrevented: !1
            }),
            onDismiss: () => n.onOpenChange(!1)
          })
        }),
        ep = r.forwardRef((e, t) => {
          let n = Q(el, e.__scopeMenu);
          return (0, b.jsx)(em, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => n.onOpenChange(!1)
          })
        }),
        ef = (0, L.TL)("MenuContent.ScrollLock"),
        em = r.forwardRef((e, t) => {
          let {
            __scopeMenu: n,
            loop: s = !1,
            trapFocus: a,
            onOpenAutoFocus: l,
            onCloseAutoFocus: u,
            disableOutsidePointerEvents: c,
            onEntryFocus: f,
            onEscapeKeyDown: g,
            onPointerDownOutside: v,
            onFocusOutside: y,
            onInteractOutside: w,
            onDismiss: x,
            disableOutsideScroll: S,
            ...P
          } = e, T = Q(el, n), k = et(el, n), E = Y(n), C = Z(n), A = q(n), [R, j] = r.useState(null), _ = r.useRef(null), I = (0, o.s)(t, _, T.onContentChange), D = r.useRef(0), O = r.useRef(""), L = r.useRef(0), V = r.useRef(null), N = r.useRef("right"), K = r.useRef(0), $ = S ? F.A : r.Fragment;
          r.useEffect(() => () => window.clearTimeout(D.current), []), (0, d.Oh)();
          let W = r.useCallback(e => {
            var t, n;
            return N.current === V.current?.side && (t = e, !!(n = V.current?.area) && function(e, t) {
              let {
                x: n,
                y: r
              } = e, i = !1;
              for (let e = 0, o = t.length - 1; e < t.length; o = e++) {
                let s = t[e],
                  a = t[o],
                  l = s.x,
                  u = s.y,
                  c = a.x,
                  h = a.y;
                u > r != h > r && n < (c - l) * (r - u) / (h - u) + l && (i = !i)
              }
              return i
            }({
              x: t.clientX,
              y: t.clientY
            }, n))
          }, []);
          return (0, b.jsx)(eu, {
            scope: n,
            searchRef: O,
            onItemEnter: r.useCallback(e => {
              W(e) && e.preventDefault()
            }, [W]),
            onItemLeave: r.useCallback(e => {
              W(e) || (_.current?.focus(), j(null))
            }, [W]),
            onTriggerLeave: r.useCallback(e => {
              W(e) && e.preventDefault()
            }, [W]),
            pointerGraceTimerRef: L,
            onPointerGraceIntentChange: r.useCallback(e => {
              V.current = e
            }, []),
            children: (0, b.jsx)($, {
              ...S ? {
                as: ef,
                allowPinchZoom: !0
              } : void 0,
              children: (0, b.jsx)(p.n, {
                asChild: !0,
                trapped: a,
                onMountAutoFocus: (0, i.mK)(l, e => {
                  e.preventDefault(), _.current?.focus({
                    preventScroll: !0
                  })
                }),
                onUnmountAutoFocus: u,
                children: (0, b.jsx)(h.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: c,
                  onEscapeKeyDown: g,
                  onPointerDownOutside: v,
                  onFocusOutside: y,
                  onInteractOutside: w,
                  onDismiss: x,
                  children: (0, b.jsx)(M, {
                    asChild: !0,
                    ...C,
                    dir: k.dir,
                    orientation: "vertical",
                    loop: s,
                    currentTabStopId: R,
                    onCurrentTabStopIdChange: j,
                    onEntryFocus: (0, i.mK)(f, e => {
                      k.isUsingKeyboardRef.current || e.preventDefault()
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: (0, b.jsx)(m.UC, {
                      role: "menu",
                      "aria-orientation": "vertical",
                      "data-state": eB(T.open),
                      "data-radix-menu-content": "",
                      dir: k.dir,
                      ...E,
                      ...P,
                      ref: I,
                      style: {
                        outline: "none",
                        ...P.style
                      },
                      onKeyDown: (0, i.mK)(P.onKeyDown, e => {
                        let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget,
                          n = e.ctrlKey || e.altKey || e.metaKey,
                          r = 1 === e.key.length;
                        if (t) {
                          var i;
                          let t, o, s, a, l, u;
                          "Tab" === e.key && e.preventDefault(), !n && r && (i = e.key, t = O.current + i, o = A().filter(e => !e.disabled), s = document.activeElement, a = o.find(e => e.ref.current === s)?.textValue, l = function(e, t, n) {
                            var r;
                            let i = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
                              o = n ? e.indexOf(n) : -1,
                              s = (r = Math.max(o, 0), e.map((t, n) => e[(r + n) % e.length]));
                            1 === i.length && (s = s.filter(e => e !== n));
                            let a = s.find(e => e.toLowerCase().startsWith(i.toLowerCase()));
                            return a !== n ? a : void 0
                          }(o.map(e => e.textValue), t, a), u = o.find(e => e.textValue === l)?.ref.current, function e(t) {
                            O.current = t, window.clearTimeout(D.current), "" !== t && (D.current = window.setTimeout(() => e(""), 1e3))
                          }(t), u && setTimeout(() => u.focus()))
                        }
                        let o = _.current;
                        if (e.target !== o || !B.includes(e.key)) return;
                        e.preventDefault();
                        let s = A().filter(e => !e.disabled).map(e => e.ref.current);
                        U.includes(e.key) && s.reverse(),
                          function(e) {
                            let t = document.activeElement;
                            for (let n of e)
                              if (n === t || (n.focus(), document.activeElement !== t)) return
                          }(s)
                      }),
                      onBlur: (0, i.mK)(e.onBlur, e => {
                        e.currentTarget.contains(e.target) || (window.clearTimeout(D.current), O.current = "")
                      }),
                      onPointerMove: (0, i.mK)(e.onPointerMove, eW(e => {
                        let t = e.target,
                          n = K.current !== e.clientX;
                        e.currentTarget.contains(t) && n && (N.current = e.clientX > K.current ? "right" : "left", K.current = e.clientX)
                      }))
                    })
                  })
                })
              })
            })
          })
        });
      eh.displayName = el;
      var eg = r.forwardRef((e, t) => {
        let {
          __scopeMenu: n,
          ...r
        } = e;
        return (0, b.jsx)(l.sG.div, {
          role: "group",
          ...r,
          ref: t
        })
      });
      eg.displayName = "MenuGroup";
      var ev = r.forwardRef((e, t) => {
        let {
          __scopeMenu: n,
          ...r
        } = e;
        return (0, b.jsx)(l.sG.div, {
          ...r,
          ref: t
        })
      });
      ev.displayName = "MenuLabel";
      var ey = "MenuItem",
        eb = "menu.itemSelect",
        ew = r.forwardRef((e, t) => {
          let {
            disabled: n = !1,
            onSelect: s,
            ...a
          } = e, u = r.useRef(null), c = et(ey, e.__scopeMenu), h = ec(ey, e.__scopeMenu), d = (0, o.s)(t, u), p = r.useRef(!1);
          return (0, b.jsx)(ex, {
            ...a,
            ref: d,
            disabled: n,
            onClick: (0, i.mK)(e.onClick, () => {
              let e = u.current;
              if (!n && e) {
                let t = new CustomEvent(eb, {
                  bubbles: !0,
                  cancelable: !0
                });
                e.addEventListener(eb, e => s?.(e), {
                  once: !0
                }), (0, l.hO)(e, t), t.defaultPrevented ? p.current = !1 : c.onClose()
              }
            }),
            onPointerDown: t => {
              e.onPointerDown?.(t), p.current = !0
            },
            onPointerUp: (0, i.mK)(e.onPointerUp, e => {
              p.current || e.currentTarget?.click()
            }),
            onKeyDown: (0, i.mK)(e.onKeyDown, e => {
              let t = "" !== h.searchRef.current;
              n || t && " " === e.key || N.includes(e.key) && (e.currentTarget.click(), e.preventDefault())
            })
          })
        });
      ew.displayName = ey;
      var ex = r.forwardRef((e, t) => {
          let {
            __scopeMenu: n,
            disabled: s = !1,
            textValue: a,
            ...u
          } = e, c = ec(ey, n), h = Z(n), d = r.useRef(null), p = (0, o.s)(t, d), [f, m] = r.useState(!1), [g, v] = r.useState("");
          return r.useEffect(() => {
            let e = d.current;
            e && v((e.textContent ?? "").trim())
          }, [u.children]), (0, b.jsx)(G.ItemSlot, {
            scope: n,
            disabled: s,
            textValue: a ?? g,
            children: (0, b.jsx)(I, {
              asChild: !0,
              ...h,
              focusable: !s,
              children: (0, b.jsx)(l.sG.div, {
                role: "menuitem",
                "data-highlighted": f ? "" : void 0,
                "aria-disabled": s || void 0,
                "data-disabled": s ? "" : void 0,
                ...u,
                ref: p,
                onPointerMove: (0, i.mK)(e.onPointerMove, eW(e => {
                  s ? c.onItemLeave(e) : (c.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({
                    preventScroll: !0
                  }))
                })),
                onPointerLeave: (0, i.mK)(e.onPointerLeave, eW(e => c.onItemLeave(e))),
                onFocus: (0, i.mK)(e.onFocus, () => m(!0)),
                onBlur: (0, i.mK)(e.onBlur, () => m(!1))
              })
            })
          })
        }),
        eS = r.forwardRef((e, t) => {
          let {
            checked: n = !1,
            onCheckedChange: r,
            ...o
          } = e;
          return (0, b.jsx)(eM, {
            scope: e.__scopeMenu,
            checked: n,
            children: (0, b.jsx)(ew, {
              role: "menuitemcheckbox",
              "aria-checked": eK(n) ? "mixed" : n,
              ...o,
              ref: t,
              "data-state": e$(n),
              onSelect: (0, i.mK)(o.onSelect, () => r?.(!!eK(n) || !n), {
                checkForDefaultPrevented: !1
              })
            })
          })
        });
      eS.displayName = "MenuCheckboxItem";
      var eP = "MenuRadioGroup",
        [eT, ek] = H(eP, {
          value: void 0,
          onValueChange: () => {}
        }),
        eE = r.forwardRef((e, t) => {
          let {
            value: n,
            onValueChange: r,
            ...i
          } = e, o = (0, y.c)(r);
          return (0, b.jsx)(eT, {
            scope: e.__scopeMenu,
            value: n,
            onValueChange: o,
            children: (0, b.jsx)(eg, {
              ...i,
              ref: t
            })
          })
        });
      eE.displayName = eP;
      var eC = "MenuRadioItem",
        eA = r.forwardRef((e, t) => {
          let {
            value: n,
            ...r
          } = e, o = ek(eC, e.__scopeMenu), s = n === o.value;
          return (0, b.jsx)(eM, {
            scope: e.__scopeMenu,
            checked: s,
            children: (0, b.jsx)(ew, {
              role: "menuitemradio",
              "aria-checked": s,
              ...r,
              ref: t,
              "data-state": e$(s),
              onSelect: (0, i.mK)(r.onSelect, () => o.onValueChange?.(n), {
                checkForDefaultPrevented: !1
              })
            })
          })
        });
      eA.displayName = eC;
      var eR = "MenuItemIndicator",
        [eM, ej] = H(eR, {
          checked: !1
        }),
        e_ = r.forwardRef((e, t) => {
          let {
            __scopeMenu: n,
            forceMount: r,
            ...i
          } = e, o = ej(eR, n);
          return (0, b.jsx)(v.C, {
            present: r || eK(o.checked) || !0 === o.checked,
            children: (0, b.jsx)(l.sG.span, {
              ...i,
              ref: t,
              "data-state": e$(o.checked)
            })
          })
        });
      e_.displayName = eR;
      var eI = r.forwardRef((e, t) => {
        let {
          __scopeMenu: n,
          ...r
        } = e;
        return (0, b.jsx)(l.sG.div, {
          role: "separator",
          "aria-orientation": "horizontal",
          ...r,
          ref: t
        })
      });
      eI.displayName = "MenuSeparator";
      var eD = r.forwardRef((e, t) => {
        let {
          __scopeMenu: n,
          ...r
        } = e, i = Y(n);
        return (0, b.jsx)(m.i3, {
          ...i,
          ...r,
          ref: t
        })
      });
      eD.displayName = "MenuArrow";
      var [eO, eL] = H("MenuSub"), eV = "MenuSubTrigger", eF = r.forwardRef((e, t) => {
        let n = Q(eV, e.__scopeMenu),
          s = et(eV, e.__scopeMenu),
          a = eL(eV, e.__scopeMenu),
          l = ec(eV, e.__scopeMenu),
          u = r.useRef(null),
          {
            pointerGraceTimerRef: c,
            onPointerGraceIntentChange: h
          } = l,
          d = {
            __scopeMenu: e.__scopeMenu
          },
          p = r.useCallback(() => {
            u.current && window.clearTimeout(u.current), u.current = null
          }, []);
        return r.useEffect(() => p, [p]), r.useEffect(() => {
          let e = c.current;
          return () => {
            window.clearTimeout(e), h(null)
          }
        }, [c, h]), (0, b.jsx)(er, {
          asChild: !0,
          ...d,
          children: (0, b.jsx)(ex, {
            id: a.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": n.open,
            "aria-controls": a.contentId,
            "data-state": eB(n.open),
            ...e,
            ref: (0, o.t)(t, a.onTriggerChange),
            onClick: t => {
              e.onClick?.(t), e.disabled || t.defaultPrevented || (t.currentTarget.focus(), n.open || n.onOpenChange(!0))
            },
            onPointerMove: (0, i.mK)(e.onPointerMove, eW(t => {
              l.onItemEnter(t), !t.defaultPrevented && (e.disabled || n.open || u.current || (l.onPointerGraceIntentChange(null), u.current = window.setTimeout(() => {
                n.onOpenChange(!0), p()
              }, 100)))
            })),
            onPointerLeave: (0, i.mK)(e.onPointerLeave, eW(e => {
              p();
              let t = n.content?.getBoundingClientRect();
              if (t) {
                let r = n.content?.dataset.side,
                  i = "right" === r,
                  o = t[i ? "left" : "right"],
                  s = t[i ? "right" : "left"];
                l.onPointerGraceIntentChange({
                  area: [{
                    x: e.clientX + (i ? -5 : 5),
                    y: e.clientY
                  }, {
                    x: o,
                    y: t.top
                  }, {
                    x: s,
                    y: t.top
                  }, {
                    x: s,
                    y: t.bottom
                  }, {
                    x: o,
                    y: t.bottom
                  }],
                  side: r
                }), window.clearTimeout(c.current), c.current = window.setTimeout(() => l.onPointerGraceIntentChange(null), 300)
              } else {
                if (l.onTriggerLeave(e), e.defaultPrevented) return;
                l.onPointerGraceIntentChange(null)
              }
            })),
            onKeyDown: (0, i.mK)(e.onKeyDown, t => {
              let r = "" !== l.searchRef.current;
              e.disabled || r && " " === t.key || K[s.dir].includes(t.key) && (n.onOpenChange(!0), n.content?.focus(), t.preventDefault())
            })
          })
        })
      });
      eF.displayName = eV;
      var eN = "MenuSubContent",
        eU = r.forwardRef((e, t) => {
          let n = es(el, e.__scopeMenu),
            {
              forceMount: s = n.forceMount,
              ...a
            } = e,
            l = Q(el, e.__scopeMenu),
            u = et(el, e.__scopeMenu),
            c = eL(eN, e.__scopeMenu),
            h = r.useRef(null),
            d = (0, o.s)(t, h);
          return (0, b.jsx)(G.Provider, {
            scope: e.__scopeMenu,
            children: (0, b.jsx)(v.C, {
              present: s || l.open,
              children: (0, b.jsx)(G.Slot, {
                scope: e.__scopeMenu,
                children: (0, b.jsx)(em, {
                  id: c.contentId,
                  "aria-labelledby": c.triggerId,
                  ...a,
                  ref: d,
                  align: "start",
                  side: "rtl" === u.dir ? "left" : "right",
                  disableOutsidePointerEvents: !1,
                  disableOutsideScroll: !1,
                  trapFocus: !1,
                  onOpenAutoFocus: e => {
                    u.isUsingKeyboardRef.current && h.current?.focus(), e.preventDefault()
                  },
                  onCloseAutoFocus: e => e.preventDefault(),
                  onFocusOutside: (0, i.mK)(e.onFocusOutside, e => {
                    e.target !== c.trigger && l.onOpenChange(!1)
                  }),
                  onEscapeKeyDown: (0, i.mK)(e.onEscapeKeyDown, e => {
                    u.onClose(), e.preventDefault()
                  }),
                  onKeyDown: (0, i.mK)(e.onKeyDown, e => {
                    let t = e.currentTarget.contains(e.target),
                      n = $[u.dir].includes(e.key);
                    t && n && (l.onOpenChange(!1), c.trigger?.focus(), e.preventDefault())
                  })
                })
              })
            })
          })
        });

      function eB(e) {
        return e ? "open" : "closed"
      }

      function eK(e) {
        return "indeterminate" === e
      }

      function e$(e) {
        return eK(e) ? "indeterminate" : e ? "checked" : "unchecked"
      }

      function eW(e) {
        return t => "mouse" === t.pointerType ? e(t) : void 0
      }
      eU.displayName = eN;
      var eG = "DropdownMenu",
        [eq, ez] = (0, s.A)(eG, [X]),
        eH = X(),
        [eX, eY] = eq(eG),
        eZ = e => {
          let {
            __scopeDropdownMenu: t,
            children: n,
            dir: i,
            open: o,
            defaultOpen: s,
            onOpenChange: l,
            modal: u = !0
          } = e, c = eH(t), h = r.useRef(null), [d, p] = (0, a.i)({
            prop: o,
            defaultProp: s ?? !1,
            onChange: l,
            caller: eG
          });
          return (0, b.jsx)(eX, {
            scope: t,
            triggerId: (0, f.B)(),
            triggerRef: h,
            contentId: (0, f.B)(),
            open: d,
            onOpenChange: p,
            onOpenToggle: r.useCallback(() => p(e => !e), [p]),
            modal: u,
            children: (0, b.jsx)(en, {
              ...c,
              open: d,
              onOpenChange: p,
              dir: i,
              modal: u,
              children: n
            })
          })
        };
      eZ.displayName = eG;
      var eJ = "DropdownMenuTrigger",
        eQ = r.forwardRef((e, t) => {
          let {
            __scopeDropdownMenu: n,
            disabled: r = !1,
            ...s
          } = e, a = eY(eJ, n), u = eH(n);
          return (0, b.jsx)(er, {
            asChild: !0,
            ...u,
            children: (0, b.jsx)(l.sG.button, {
              type: "button",
              id: a.triggerId,
              "aria-haspopup": "menu",
              "aria-expanded": a.open,
              "aria-controls": a.open ? a.contentId : void 0,
              "data-state": a.open ? "open" : "closed",
              "data-disabled": r ? "" : void 0,
              disabled: r,
              ...s,
              ref: (0, o.t)(t, a.triggerRef),
              onPointerDown: (0, i.mK)(e.onPointerDown, e => {
                !r && 0 === e.button && !1 === e.ctrlKey && (a.onOpenToggle(), a.open || e.preventDefault())
              }),
              onKeyDown: (0, i.mK)(e.onKeyDown, e => {
                !r && (["Enter", " "].includes(e.key) && a.onOpenToggle(), "ArrowDown" === e.key && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault())
              })
            })
          })
        });
      eQ.displayName = eJ;
      var e0 = e => {
        let {
          __scopeDropdownMenu: t,
          ...n
        } = e, r = eH(t);
        return (0, b.jsx)(ea, {
          ...r,
          ...n
        })
      };
      e0.displayName = "DropdownMenuPortal";
      var e1 = "DropdownMenuContent",
        e2 = r.forwardRef((e, t) => {
          let {
            __scopeDropdownMenu: n,
            ...o
          } = e, s = eY(e1, n), a = eH(n), l = r.useRef(!1);
          return (0, b.jsx)(eh, {
            id: s.contentId,
            "aria-labelledby": s.triggerId,
            ...a,
            ...o,
            ref: t,
            onCloseAutoFocus: (0, i.mK)(e.onCloseAutoFocus, e => {
              l.current || s.triggerRef.current?.focus(), l.current = !1, e.preventDefault()
            }),
            onInteractOutside: (0, i.mK)(e.onInteractOutside, e => {
              let t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey,
                r = 2 === t.button || n;
              (!s.modal || r) && (l.current = !0)
            }),
            style: {
              ...e.style,
              "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
              "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
              "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
          })
        });
      e2.displayName = e1, r.forwardRef((e, t) => {
        let {
          __scopeDropdownMenu: n,
          ...r
        } = e, i = eH(n);
        return (0, b.jsx)(eg, {
          ...i,
          ...r,
          ref: t
        })
      }).displayName = "DropdownMenuGroup", r.forwardRef((e, t) => {
        let {
          __scopeDropdownMenu: n,
          ...r
        } = e, i = eH(n);
        return (0, b.jsx)(ev, {
          ...i,
          ...r,
          ref: t
        })
      }).displayName = "DropdownMenuLabel";
      var e9 = r.forwardRef((e, t) => {
        let {
          __scopeDropdownMenu: n,
          ...r
        } = e, i = eH(n);
        return (0, b.jsx)(ew, {
          ...i,
          ...r,
          ref: t
        })
      });
      e9.displayName = "DropdownMenuItem", r.forwardRef((e, t) => {
        let {
          __scopeDropdownMenu: n,
          ...r
        } = e, i = eH(n);
        return (0, b.jsx)(eS, {
          ...i,
          ...r,
          ref: t
        })
      }).displayName = "DropdownMenuCheckboxItem", r.forwardRef((e, t) => {
        let {
          __scopeDropdownMenu: n,
          ...r
        } = e, i = eH(n);
        return (0, b.jsx)(eE, {
          ...i,
          ...r,
          ref: t
        })
      }).displayName = "DropdownMenuRadioGroup", r.forwardRef((e, t) => {
        let {
          __scopeDropdownMenu: n,
          ...r
        } = e, i = eH(n);
        return (0, b.jsx)(eA, {
          ...i,
          ...r,
          ref: t
        })
      }).displayName = "DropdownMenuRadioItem", r.forwardRef((e, t) => {
        let {
          __scopeDropdownMenu: n,
          ...r
        } = e, i = eH(n);
        return (0, b.jsx)(e_, {
          ...i,
          ...r,
          ref: t
        })
      }).displayName = "DropdownMenuItemIndicator";
      var e3 = r.forwardRef((e, t) => {
        let {
          __scopeDropdownMenu: n,
          ...r
        } = e, i = eH(n);
        return (0, b.jsx)(eI, {
          ...i,
          ...r,
          ref: t
        })
      });
      e3.displayName = "DropdownMenuSeparator", r.forwardRef((e, t) => {
        let {
          __scopeDropdownMenu: n,
          ...r
        } = e, i = eH(n);
        return (0, b.jsx)(eD, {
          ...i,
          ...r,
          ref: t
        })
      }).displayName = "DropdownMenuArrow", r.forwardRef((e, t) => {
        let {
          __scopeDropdownMenu: n,
          ...r
        } = e, i = eH(n);
        return (0, b.jsx)(eF, {
          ...i,
          ...r,
          ref: t
        })
      }).displayName = "DropdownMenuSubTrigger", r.forwardRef((e, t) => {
        let {
          __scopeDropdownMenu: n,
          ...r
        } = e, i = eH(n);
        return (0, b.jsx)(eU, {
          ...i,
          ...r,
          ref: t,
          style: {
            ...e.style,
            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
          }
        })
      }).displayName = "DropdownMenuSubContent";
      var e5 = eZ,
        e8 = eQ,
        e7 = e0,
        e4 = e2,
        e6 = e9,
        te = e3
    },
    4049: e => {
      ! function() {
        "use strict";
        var t = {};
        t.d = function(e, n) {
          for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: n[r]
          })
        }, t.o = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
        }, t.r = function(e) {
          "u" > typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, void 0 !== t && (t.ab = "//");
        var n = {};
        t.r(n), t.d(n, {
          CLSThresholds: function() {
            return C
          },
          FCPThresholds: function() {
            return k
          },
          FIDThresholds: function() {
            return ee
          },
          INPThresholds: function() {
            return U
          },
          LCPThresholds: function() {
            return K
          },
          TTFBThresholds: function() {
            return G
          },
          onCLS: function() {
            return A
          },
          onFCP: function() {
            return E
          },
          onFID: function() {
            return et
          },
          onINP: function() {
            return B
          },
          onLCP: function() {
            return W
          },
          onTTFB: function() {
            return z
          }
        });
        var r, i, o, s, a, l = -1,
          u = function(e) {
            addEventListener("pageshow", function(t) {
              t.persisted && (l = t.timeStamp, e(t))
            }, !0)
          },
          c = function() {
            var e = self.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
            if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e
          },
          h = function() {
            var e = c();
            return e && e.activationStart || 0
          },
          d = function(e, t) {
            var n = c(),
              r = "navigate";
            return l >= 0 ? r = "back-forward-cache" : n && (document.prerendering || h() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
              name: e,
              value: void 0 === t ? -1 : t,
              rating: "good",
              delta: 0,
              entries: [],
              id: "v4-".concat(Date.now(), "-").concat(Math.floor(0x82f79cd8fff * Math.random()) + 1e12),
              navigationType: r
            }
          },
          p = function(e, t, n) {
            try {
              if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                var r = new PerformanceObserver(function(e) {
                  Promise.resolve().then(function() {
                    t(e.getEntries())
                  })
                });
                return r.observe(Object.assign({
                  type: e,
                  buffered: !0
                }, n || {})), r
              }
            } catch (e) {}
          },
          f = function(e, t, n, r) {
            var i, o;
            return function(s) {
              var a;
              t.value >= 0 && (s || r) && ((o = t.value - (i || 0)) || void 0 === i) && (i = t.value, t.delta = o, a = t.value, t.rating = a > n[1] ? "poor" : a > n[0] ? "needs-improvement" : "good", e(t))
            }
          },
          m = function(e) {
            requestAnimationFrame(function() {
              return requestAnimationFrame(function() {
                return e()
              })
            })
          },
          g = function(e) {
            document.addEventListener("visibilitychange", function() {
              "hidden" === document.visibilityState && e()
            })
          },
          v = function(e) {
            var t = !1;
            return function() {
              t || (e(), t = !0)
            }
          },
          y = -1,
          b = function() {
            return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
          },
          w = function(e) {
            "hidden" === document.visibilityState && y > -1 && (y = "visibilitychange" === e.type ? e.timeStamp : 0, S())
          },
          x = function() {
            addEventListener("visibilitychange", w, !0), addEventListener("prerenderingchange", w, !0)
          },
          S = function() {
            removeEventListener("visibilitychange", w, !0), removeEventListener("prerenderingchange", w, !0)
          },
          P = function() {
            return y < 0 && (y = b(), x(), u(function() {
              setTimeout(function() {
                y = b(), x()
              }, 0)
            })), {
              get firstHiddenTime() {
                return y
              }
            }
          },
          T = function(e) {
            document.prerendering ? addEventListener("prerenderingchange", function() {
              return e()
            }, !0) : e()
          },
          k = [1800, 3e3],
          E = function(e, t) {
            t = t || {}, T(function() {
              var n, r = P(),
                i = d("FCP"),
                o = p("paint", function(e) {
                  e.forEach(function(e) {
                    "first-contentful-paint" === e.name && (o.disconnect(), e.startTime < r.firstHiddenTime && (i.value = Math.max(e.startTime - h(), 0), i.entries.push(e), n(!0)))
                  })
                });
              o && (n = f(e, i, k, t.reportAllChanges), u(function(r) {
                n = f(e, i = d("FCP"), k, t.reportAllChanges), m(function() {
                  i.value = performance.now() - r.timeStamp, n(!0)
                })
              }))
            })
          },
          C = [.1, .25],
          A = function(e, t) {
            t = t || {}, E(v(function() {
              var n, r = d("CLS", 0),
                i = 0,
                o = [],
                s = function(e) {
                  e.forEach(function(e) {
                    if (!e.hadRecentInput) {
                      var t = o[0],
                        n = o[o.length - 1];
                      i && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (i += e.value, o.push(e)) : (i = e.value, o = [e])
                    }
                  }), i > r.value && (r.value = i, r.entries = o, n())
                },
                a = p("layout-shift", s);
              a && (n = f(e, r, C, t.reportAllChanges), g(function() {
                s(a.takeRecords()), n(!0)
              }), u(function() {
                i = 0, n = f(e, r = d("CLS", 0), C, t.reportAllChanges), m(function() {
                  return n()
                })
              }), setTimeout(n, 0))
            }))
          },
          R = 0,
          M = 1 / 0,
          j = 0,
          _ = function(e) {
            e.forEach(function(e) {
              e.interactionId && (M = Math.min(M, e.interactionId), R = (j = Math.max(j, e.interactionId)) ? (j - M) / 7 + 1 : 0)
            })
          },
          I = function() {
            "interactionCount" in performance || r || (r = p("event", _, {
              type: "event",
              buffered: !0,
              durationThreshold: 0
            }))
          },
          D = [],
          O = new Map,
          L = 0,
          V = [],
          F = function(e) {
            if (V.forEach(function(t) {
                return t(e)
              }), e.interactionId || "first-input" === e.entryType) {
              var t = D[D.length - 1],
                n = O.get(e.interactionId);
              if (n || D.length < 10 || e.duration > t.latency) {
                if (n) e.duration > n.latency ? (n.entries = [e], n.latency = e.duration) : e.duration === n.latency && e.startTime === n.entries[0].startTime && n.entries.push(e);
                else {
                  var r = {
                    id: e.interactionId,
                    latency: e.duration,
                    entries: [e]
                  };
                  O.set(r.id, r), D.push(r)
                }
                D.sort(function(e, t) {
                  return t.latency - e.latency
                }), D.length > 10 && D.splice(10).forEach(function(e) {
                  return O.delete(e.id)
                })
              }
            }
          },
          N = function(e) {
            var t = self.requestIdleCallback || self.setTimeout,
              n = -1;
            return e = v(e), "hidden" === document.visibilityState ? e() : (n = t(e), g(e)), n
          },
          U = [200, 500],
          B = function(e, t) {
            "PerformanceEventTiming" in self && "interactionId" in PerformanceEventTiming.prototype && (t = t || {}, T(function() {
              I();
              var n, i, o = d("INP"),
                s = function(e) {
                  N(function() {
                    e.forEach(F);
                    var t, n = (t = Math.min(D.length - 1, Math.floor(((r ? R : performance.interactionCount || 0) - L) / 50)), D[t]);
                    n && n.latency !== o.value && (o.value = n.latency, o.entries = n.entries, i())
                  })
                },
                a = p("event", s, {
                  durationThreshold: null != (n = t.durationThreshold) ? n : 40
                });
              i = f(e, o, U, t.reportAllChanges), a && (a.observe({
                type: "first-input",
                buffered: !0
              }), g(function() {
                s(a.takeRecords()), i(!0)
              }), u(function() {
                L = 0, D.length = 0, O.clear(), i = f(e, o = d("INP"), U, t.reportAllChanges)
              }))
            }))
          },
          K = [2500, 4e3],
          $ = {},
          W = function(e, t) {
            t = t || {}, T(function() {
              var n, r = P(),
                i = d("LCP"),
                o = function(e) {
                  t.reportAllChanges || (e = e.slice(-1)), e.forEach(function(e) {
                    e.startTime < r.firstHiddenTime && (i.value = Math.max(e.startTime - h(), 0), i.entries = [e], n())
                  })
                },
                s = p("largest-contentful-paint", o);
              if (s) {
                n = f(e, i, K, t.reportAllChanges);
                var a = v(function() {
                  $[i.id] || (o(s.takeRecords()), s.disconnect(), $[i.id] = !0, n(!0))
                });
                ["keydown", "click"].forEach(function(e) {
                  addEventListener(e, function() {
                    return N(a)
                  }, !0)
                }), g(a), u(function(r) {
                  n = f(e, i = d("LCP"), K, t.reportAllChanges), m(function() {
                    i.value = performance.now() - r.timeStamp, $[i.id] = !0, n(!0)
                  })
                })
              }
            })
          },
          G = [800, 1800],
          q = function e(t) {
            document.prerendering ? T(function() {
              return e(t)
            }) : "complete" !== document.readyState ? addEventListener("load", function() {
              return e(t)
            }, !0) : setTimeout(t, 0)
          },
          z = function(e, t) {
            t = t || {};
            var n = d("TTFB"),
              r = f(e, n, G, t.reportAllChanges);
            q(function() {
              var i = c();
              i && (n.value = Math.max(i.responseStart - h(), 0), n.entries = [i], r(!0), u(function() {
                (r = f(e, n = d("TTFB", 0), G, t.reportAllChanges))(!0)
              }))
            })
          },
          H = {
            passive: !0,
            capture: !0
          },
          X = new Date,
          Y = function(e, t) {
            i || (i = t, o = e, s = new Date, Q(removeEventListener), Z())
          },
          Z = function() {
            if (o >= 0 && o < s - X) {
              var e = {
                entryType: "first-input",
                name: i.type,
                target: i.target,
                cancelable: i.cancelable,
                startTime: i.timeStamp,
                processingStart: i.timeStamp + o
              };
              a.forEach(function(t) {
                t(e)
              }), a = []
            }
          },
          J = function(e) {
            if (e.cancelable) {
              var t, n, r, i = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
              "pointerdown" == e.type ? (t = function() {
                Y(i, e), r()
              }, n = function() {
                r()
              }, r = function() {
                removeEventListener("pointerup", t, H), removeEventListener("pointercancel", n, H)
              }, addEventListener("pointerup", t, H), addEventListener("pointercancel", n, H)) : Y(i, e)
            }
          },
          Q = function(e) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(t) {
              return e(t, J, H)
            })
          },
          ee = [100, 300],
          et = function(e, t) {
            t = t || {}, T(function() {
              var n, r = P(),
                s = d("FID"),
                l = function(e) {
                  e.startTime < r.firstHiddenTime && (s.value = e.processingStart - e.startTime, s.entries.push(e), n(!0))
                },
                c = function(e) {
                  e.forEach(l)
                },
                h = p("first-input", c);
              n = f(e, s, ee, t.reportAllChanges), h && (g(v(function() {
                c(h.takeRecords()), h.disconnect()
              })), u(function() {
                n = f(e, s = d("FID"), ee, t.reportAllChanges), a = [], o = -1, i = null, Q(addEventListener), a.push(l), Z()
              }))
            })
          };
        e.exports = n
      }()
    },
    4766: (e, t, n) => {
      "use strict";
      n.d(t, {
        DE: () => o,
        d7: () => i
      });
      var r = n(12115);

      function i(e, t) {
        let [n, i] = r.useState(e);
        return r.useEffect(() => {
          let n = setTimeout(() => {
            i(e)
          }, t);
          return () => {
            clearTimeout(n)
          }
        }, [e, t]), n
      }

      function o() {
        let [e, t] = r.useState(!1);
        return r.useEffect(() => {
          t(!0)
        }, []), e
      }
    },
    6854: e => {
      e.exports = function() {
        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    7120: () => {},
    8262: (e, t, n) => {
      var r = n(24082).default,
        i = n(87409);
      e.exports = function(e, t) {
        if (t && ("object" == r(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
        return i(e)
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    9382: (e, t) => {
      function n() {
        var e = {};
        return e["align-content"] = !1, e["align-items"] = !1, e["align-self"] = !1, e["alignment-adjust"] = !1, e["alignment-baseline"] = !1, e.all = !1, e["anchor-point"] = !1, e.animation = !1, e["animation-delay"] = !1, e["animation-direction"] = !1, e["animation-duration"] = !1, e["animation-fill-mode"] = !1, e["animation-iteration-count"] = !1, e["animation-name"] = !1, e["animation-play-state"] = !1, e["animation-timing-function"] = !1, e.azimuth = !1, e["backface-visibility"] = !1, e.background = !0, e["background-attachment"] = !0, e["background-clip"] = !0, e["background-color"] = !0, e["background-image"] = !0, e["background-origin"] = !0, e["background-position"] = !0, e["background-repeat"] = !0, e["background-size"] = !0, e["baseline-shift"] = !1, e.binding = !1, e.bleed = !1, e["bookmark-label"] = !1, e["bookmark-level"] = !1, e["bookmark-state"] = !1, e.border = !0, e["border-bottom"] = !0, e["border-bottom-color"] = !0, e["border-bottom-left-radius"] = !0, e["border-bottom-right-radius"] = !0, e["border-bottom-style"] = !0, e["border-bottom-width"] = !0, e["border-collapse"] = !0, e["border-color"] = !0, e["border-image"] = !0, e["border-image-outset"] = !0, e["border-image-repeat"] = !0, e["border-image-slice"] = !0, e["border-image-source"] = !0, e["border-image-width"] = !0, e["border-left"] = !0, e["border-left-color"] = !0, e["border-left-style"] = !0, e["border-left-width"] = !0, e["border-radius"] = !0, e["border-right"] = !0, e["border-right-color"] = !0, e["border-right-style"] = !0, e["border-right-width"] = !0, e["border-spacing"] = !0, e["border-style"] = !0, e["border-top"] = !0, e["border-top-color"] = !0, e["border-top-left-radius"] = !0, e["border-top-right-radius"] = !0, e["border-top-style"] = !0, e["border-top-width"] = !0, e["border-width"] = !0, e.bottom = !1, e["box-decoration-break"] = !0, e["box-shadow"] = !0, e["box-sizing"] = !0, e["box-snap"] = !0, e["box-suppress"] = !0, e["break-after"] = !0, e["break-before"] = !0, e["break-inside"] = !0, e["caption-side"] = !1, e.chains = !1, e.clear = !0, e.clip = !1, e["clip-path"] = !1, e["clip-rule"] = !1, e.color = !0, e["color-interpolation-filters"] = !0, e["column-count"] = !1, e["column-fill"] = !1, e["column-gap"] = !1, e["column-rule"] = !1, e["column-rule-color"] = !1, e["column-rule-style"] = !1, e["column-rule-width"] = !1, e["column-span"] = !1, e["column-width"] = !1, e.columns = !1, e.contain = !1, e.content = !1, e["counter-increment"] = !1, e["counter-reset"] = !1, e["counter-set"] = !1, e.crop = !1, e.cue = !1, e["cue-after"] = !1, e["cue-before"] = !1, e.cursor = !1, e.direction = !1, e.display = !0, e["display-inside"] = !0, e["display-list"] = !0, e["display-outside"] = !0, e["dominant-baseline"] = !1, e.elevation = !1, e["empty-cells"] = !1, e.filter = !1, e.flex = !1, e["flex-basis"] = !1, e["flex-direction"] = !1, e["flex-flow"] = !1, e["flex-grow"] = !1, e["flex-shrink"] = !1, e["flex-wrap"] = !1, e.float = !1, e["float-offset"] = !1, e["flood-color"] = !1, e["flood-opacity"] = !1, e["flow-from"] = !1, e["flow-into"] = !1, e.font = !0, e["font-family"] = !0, e["font-feature-settings"] = !0, e["font-kerning"] = !0, e["font-language-override"] = !0, e["font-size"] = !0, e["font-size-adjust"] = !0, e["font-stretch"] = !0, e["font-style"] = !0, e["font-synthesis"] = !0, e["font-variant"] = !0, e["font-variant-alternates"] = !0, e["font-variant-caps"] = !0, e["font-variant-east-asian"] = !0, e["font-variant-ligatures"] = !0, e["font-variant-numeric"] = !0, e["font-variant-position"] = !0, e["font-weight"] = !0, e.grid = !1, e["grid-area"] = !1, e["grid-auto-columns"] = !1, e["grid-auto-flow"] = !1, e["grid-auto-rows"] = !1, e["grid-column"] = !1, e["grid-column-end"] = !1, e["grid-column-start"] = !1, e["grid-row"] = !1, e["grid-row-end"] = !1, e["grid-row-start"] = !1, e["grid-template"] = !1, e["grid-template-areas"] = !1, e["grid-template-columns"] = !1, e["grid-template-rows"] = !1, e["hanging-punctuation"] = !1, e.height = !0, e.hyphens = !1, e.icon = !1, e["image-orientation"] = !1, e["image-resolution"] = !1, e["ime-mode"] = !1, e["initial-letters"] = !1, e["inline-box-align"] = !1, e["justify-content"] = !1, e["justify-items"] = !1, e["justify-self"] = !1, e.left = !1, e["letter-spacing"] = !0, e["lighting-color"] = !0, e["line-box-contain"] = !1, e["line-break"] = !1, e["line-grid"] = !1, e["line-height"] = !1, e["line-snap"] = !1, e["line-stacking"] = !1, e["line-stacking-ruby"] = !1, e["line-stacking-shift"] = !1, e["line-stacking-strategy"] = !1, e["list-style"] = !0, e["list-style-image"] = !0, e["list-style-position"] = !0, e["list-style-type"] = !0, e.margin = !0, e["margin-bottom"] = !0, e["margin-left"] = !0, e["margin-right"] = !0, e["margin-top"] = !0, e["marker-offset"] = !1, e["marker-side"] = !1, e.marks = !1, e.mask = !1, e["mask-box"] = !1, e["mask-box-outset"] = !1, e["mask-box-repeat"] = !1, e["mask-box-slice"] = !1, e["mask-box-source"] = !1, e["mask-box-width"] = !1, e["mask-clip"] = !1, e["mask-image"] = !1, e["mask-origin"] = !1, e["mask-position"] = !1, e["mask-repeat"] = !1, e["mask-size"] = !1, e["mask-source-type"] = !1, e["mask-type"] = !1, e["max-height"] = !0, e["max-lines"] = !1, e["max-width"] = !0, e["min-height"] = !0, e["min-width"] = !0, e["move-to"] = !1, e["nav-down"] = !1, e["nav-index"] = !1, e["nav-left"] = !1, e["nav-right"] = !1, e["nav-up"] = !1, e["object-fit"] = !1, e["object-position"] = !1, e.opacity = !1, e.order = !1, e.orphans = !1, e.outline = !1, e["outline-color"] = !1, e["outline-offset"] = !1, e["outline-style"] = !1, e["outline-width"] = !1, e.overflow = !1, e["overflow-wrap"] = !1, e["overflow-x"] = !1, e["overflow-y"] = !1, e.padding = !0, e["padding-bottom"] = !0, e["padding-left"] = !0, e["padding-right"] = !0, e["padding-top"] = !0, e.page = !1, e["page-break-after"] = !1, e["page-break-before"] = !1, e["page-break-inside"] = !1, e["page-policy"] = !1, e.pause = !1, e["pause-after"] = !1, e["pause-before"] = !1, e.perspective = !1, e["perspective-origin"] = !1, e.pitch = !1, e["pitch-range"] = !1, e["play-during"] = !1, e.position = !1, e["presentation-level"] = !1, e.quotes = !1, e["region-fragment"] = !1, e.resize = !1, e.rest = !1, e["rest-after"] = !1, e["rest-before"] = !1, e.richness = !1, e.right = !1, e.rotation = !1, e["rotation-point"] = !1, e["ruby-align"] = !1, e["ruby-merge"] = !1, e["ruby-position"] = !1, e["shape-image-threshold"] = !1, e["shape-outside"] = !1, e["shape-margin"] = !1, e.size = !1, e.speak = !1, e["speak-as"] = !1, e["speak-header"] = !1, e["speak-numeral"] = !1, e["speak-punctuation"] = !1, e["speech-rate"] = !1, e.stress = !1, e["string-set"] = !1, e["tab-size"] = !1, e["table-layout"] = !1, e["text-align"] = !0, e["text-align-last"] = !0, e["text-combine-upright"] = !0, e["text-decoration"] = !0, e["text-decoration-color"] = !0, e["text-decoration-line"] = !0, e["text-decoration-skip"] = !0, e["text-decoration-style"] = !0, e["text-emphasis"] = !0, e["text-emphasis-color"] = !0, e["text-emphasis-position"] = !0, e["text-emphasis-style"] = !0, e["text-height"] = !0, e["text-indent"] = !0, e["text-justify"] = !0, e["text-orientation"] = !0, e["text-overflow"] = !0, e["text-shadow"] = !0, e["text-space-collapse"] = !0, e["text-transform"] = !0, e["text-underline-position"] = !0, e["text-wrap"] = !0, e.top = !1, e.transform = !1, e["transform-origin"] = !1, e["transform-style"] = !1, e.transition = !1, e["transition-delay"] = !1, e["transition-duration"] = !1, e["transition-property"] = !1, e["transition-timing-function"] = !1, e["unicode-bidi"] = !1, e["vertical-align"] = !1, e.visibility = !1, e["voice-balance"] = !1, e["voice-duration"] = !1, e["voice-family"] = !1, e["voice-pitch"] = !1, e["voice-range"] = !1, e["voice-rate"] = !1, e["voice-stress"] = !1, e["voice-volume"] = !1, e.volume = !1, e["white-space"] = !1, e.widows = !1, e.width = !0, e["will-change"] = !1, e["word-break"] = !0, e["word-spacing"] = !0, e["word-wrap"] = !0, e["wrap-flow"] = !1, e["wrap-through"] = !1, e["writing-mode"] = !1, e["z-index"] = !1, e
      }
      var r = /javascript\s*\:/img;
      t.whiteList = n(), t.getDefaultWhiteList = n, t.onAttr = function(e, t, n) {}, t.onIgnoreAttr = function(e, t, n) {}, t.safeAttrValue = function(e, t) {
        return r.test(t) ? "" : t
      }
    },
    10393: (e, t, n) => {
      "use strict";
      var r = n(20024);
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i = r(n(48303)),
        o = r(n(90961)),
        s = r(n(87409)),
        a = r(n(88927)),
        l = r(n(8262)),
        u = r(n(70780)),
        c = r(n(35129)),
        h = r(n(66257)),
        d = r(n(12115)),
        p = r(n(23833)),
        f = r(n(374)),
        m = n(35111),
        g = ["id", "className", "onChange", "onBlur", "onFocus", "onReady", "onSubmit"],
        v = function() {},
        y = function(e) {
          return e.id, e.className, e.onChange, e.onBlur, e.onFocus, e.onReady, e.onSubmit, (0, h.default)(e, g)
        },
        b = function(e) {
          (0, a.default)(r, e);
          var t, n = (t = function() {
            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
              return !1
            }
          }(), function() {
            var e, n = (0, u.default)(r);
            return e = t ? Reflect.construct(n, arguments, (0, u.default)(this).constructor) : n.apply(this, arguments), (0, l.default)(this, e)
          });

          function r(e, t) {
            (0, i.default)(this, r), o = n.call(this, e, t), (0, c.default)((0, s.default)(o), "configureElement", (0, f.default)(function(e, t) {
              return e && Object.keys(t).length > 0 && e.configure(t)
            }));
            var o, a = o.constructor.elementClassName;
            if (!t || !t.elements) throw Error("<".concat(a, "> must be within an <Elements> tree."));
            return o._container = d.default.createRef(), o
          }
          return (0, o.default)(r, [{
            key: "componentDidMount",
            value: function() {
              var e = this,
                t = this.constructor.elementClassName,
                n = y(this.props),
                r = this._element = this.context.elements[t](n);
              r.on("attach", function() {
                var t;
                return (t = e.props).onReady.apply(t, arguments)
              }), r.on("change", function() {
                var t;
                return (t = e.props).onChange.apply(t, arguments)
              }), r.on("blur", function() {
                var t;
                return (t = e.props).onBlur.apply(t, arguments)
              }), r.on("focus", function() {
                var t;
                return (t = e.props).onFocus.apply(t, arguments)
              }), r.on("submit", function() {
                var t;
                return (t = e.props).onSubmit.apply(t, arguments)
              }), this._element.attach(this._container.current)
            }
          }, {
            key: "componentWillUnmount",
            value: function() {
              this._element.destroy()
            }
          }, {
            key: "render",
            value: function() {
              var e = this._element,
                t = this.props;
              return this.configureElement(e, y(t)), d.default.createElement("div", {
                id: t.id,
                className: t.className,
                ref: this._container
              })
            }
          }]), r
        }(d.default.PureComponent);
      t.default = b, (0, c.default)(b, "propTypes", {
        id: p.default.string,
        className: p.default.string,
        onChange: p.default.func,
        onBlur: p.default.func,
        onFocus: p.default.func,
        onReady: p.default.func,
        onSubmit: p.default.func,
        style: p.default.object,
        tabIndex: p.default.string
      }), (0, c.default)(b, "defaultProps", {
        id: void 0,
        className: void 0,
        onChange: function(e) {},
        onBlur: v,
        onFocus: v,
        onReady: v,
        onSubmit: v,
        style: {},
        tabIndex: void 0
      }), (0, c.default)(b, "contextType", m.RecurlyElementsContext)
    },
    10853: () => {},
    11992: e => {
      function t(n, r) {
        return e.exports = t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n, r)
      }
      e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    12118: (e, t, n) => {
      "use strict";
      var r = n(20024);
      Object.defineProperty(t, "iO", {
        enumerable: !0,
        get: function() {
          return c.default
        }
      }), Object.defineProperty(t, "Pf", {
        enumerable: !0,
        get: function() {
          return l.default
        }
      }), Object.defineProperty(t, "_D", {
        enumerable: !0,
        get: function() {
          return a.default
        }
      }), Object.defineProperty(t, "C3", {
        enumerable: !0,
        get: function() {
          return u.default
        }
      }), Object.defineProperty(t, "S8", {
        enumerable: !0,
        get: function() {
          return s.default
        }
      }), Object.defineProperty(t, "oZ", {
        enumerable: !0,
        get: function() {
          return i.default
        }
      }), Object.defineProperty(t, "ku", {
        enumerable: !0,
        get: function() {
          return h.default
        }
      }), Object.defineProperty(t, "CH", {
        enumerable: !0,
        get: function() {
          return o.default
        }
      });
      var i = r(n(88627)),
        o = r(n(88246)),
        s = r(n(35111)),
        a = (r(n(23769)), r(n(29973))),
        l = r(n(59989)),
        u = r(n(34677)),
        c = r(n(43225)),
        h = (r(n(25298)), r(n(37960)), r(n(89367)))
    },
    12452: e => {
      e.exports = {
        style: {
          fontFamily: "'Readex Pro', 'Readex Pro Fallback'",
          fontStyle: "normal"
        },
        className: "__className_94ff67",
        variable: "__variable_94ff67"
      }
    },
    13587: (e, t, n) => {
      "use strict";

      function r({
        moduleIds: e
      }) {
        return null
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "PreloadChunks", {
        enumerable: !0,
        get: function() {
          return r
        }
      }), n(95155), n(47650), n(12756), n(54049), n(94013)
    },
    15007: e => {
      e.exports = function(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    16233: () => {},
    17697: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
          return i
        }
      });
      let r = n(28729)._(n(77377));

      function i(e, t) {
        let n = {};
        "function" == typeof e && (n.loader = e);
        let i = {
          ...n,
          ...t
        };
        return (0, r.default)({
          ...i,
          modules: i.loadableGenerated?.modules
        })
      }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    18800: () => {},
    19648: () => {},
    19888: (e, t, n) => {
      "use strict";
      let r, i, o, s, a;
      n.d(t, {
        P: () => o_
      });
      let l = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        u = new Set(l),
        c = (e, t, n) => n > t ? t : n < e ? e : n,
        h = {
          test: e => "number" == typeof e,
          parse: parseFloat,
          transform: e => e
        },
        d = {
          ...h,
          transform: e => c(0, 1, e)
        },
        p = {
          ...h,
          default: 1
        },
        f = e => Math.round(1e5 * e) / 1e5,
        m = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        g = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        v = (e, t) => n => !!("string" == typeof n && g.test(n) && n.startsWith(e) || t && null != n && Object.prototype.hasOwnProperty.call(n, t)),
        y = (e, t, n) => r => {
          if ("string" != typeof r) return r;
          let [i, o, s, a] = r.match(m);
          return {
            [e]: parseFloat(i),
            [t]: parseFloat(o),
            [n]: parseFloat(s),
            alpha: void 0 !== a ? parseFloat(a) : 1
          }
        },
        b = {
          ...h,
          transform: e => Math.round(c(0, 255, e))
        },
        w = {
          test: v("rgb", "red"),
          parse: y("red", "green", "blue"),
          transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
          }) => "rgba(" + b.transform(e) + ", " + b.transform(t) + ", " + b.transform(n) + ", " + f(d.transform(r)) + ")"
        },
        x = {
          test: v("#"),
          parse: function(e) {
            let t = "",
              n = "",
              r = "",
              i = "";
            return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
              red: parseInt(t, 16),
              green: parseInt(n, 16),
              blue: parseInt(r, 16),
              alpha: i ? parseInt(i, 16) / 255 : 1
            }
          },
          transform: w.transform
        },
        S = e => ({
          test: t => "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: t => `${t}${e}`
        }),
        P = S("deg"),
        T = S("%"),
        k = S("px"),
        E = S("vh"),
        C = S("vw"),
        A = {
          ...T,
          parse: e => T.parse(e) / 100,
          transform: e => T.transform(100 * e)
        },
        R = {
          test: v("hsl", "hue"),
          parse: y("hue", "saturation", "lightness"),
          transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
          }) => "hsla(" + Math.round(e) + ", " + T.transform(f(t)) + ", " + T.transform(f(n)) + ", " + f(d.transform(r)) + ")"
        },
        M = {
          test: e => w.test(e) || x.test(e) || R.test(e),
          parse: e => w.test(e) ? w.parse(e) : R.test(e) ? R.parse(e) : x.parse(e),
          transform: e => "string" == typeof e ? e : e.hasOwnProperty("red") ? w.transform(e) : R.transform(e),
          getAnimatableNone: e => {
            let t = M.parse(e);
            return t.alpha = 0, M.transform(t)
          }
        },
        j = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        _ = "number",
        I = "color",
        D = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

      function O(e) {
        let t = e.toString(),
          n = [],
          r = {
            color: [],
            number: [],
            var: []
          },
          i = [],
          o = 0,
          s = t.replace(D, e => (M.test(e) ? (r.color.push(o), i.push(I), n.push(M.parse(e))) : e.startsWith("var(") ? (r.var.push(o), i.push("var"), n.push(e)) : (r.number.push(o), i.push(_), n.push(parseFloat(e))), ++o, "${}")).split("${}");
        return {
          values: n,
          split: s,
          indexes: r,
          types: i
        }
      }

      function L(e) {
        return O(e).values
      }

      function V(e) {
        let {
          split: t,
          types: n
        } = O(e), r = t.length;
        return e => {
          let i = "";
          for (let o = 0; o < r; o++)
            if (i += t[o], void 0 !== e[o]) {
              let t = n[o];
              t === _ ? i += f(e[o]) : t === I ? i += M.transform(e[o]) : i += e[o]
            } return i
        }
      }
      let F = e => "number" == typeof e ? 0 : M.test(e) ? M.getAnimatableNone(e) : e,
        N = {
          test: function(e) {
            return isNaN(e) && "string" == typeof e && (e.match(m)?.length || 0) + (e.match(j)?.length || 0) > 0
          },
          parse: L,
          createTransformer: V,
          getAnimatableNone: function(e) {
            let t = L(e);
            return V(e)(t.map(F))
          }
        },
        U = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function B(e) {
        let [t, n] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [r] = n.match(m) || [];
        if (!r) return e;
        let i = n.replace(r, ""),
          o = +!!U.has(t);
        return r !== n && (o *= 100), t + "(" + o + i + ")"
      }
      let K = /\b([a-z-]*)\(.*?\)/gu,
        $ = {
          ...N,
          getAnimatableNone: e => {
            let t = e.match(K);
            return t ? t.map(B).join(" ") : e
          }
        },
        W = {
          ...h,
          transform: Math.round
        },
        G = {
          borderWidth: k,
          borderTopWidth: k,
          borderRightWidth: k,
          borderBottomWidth: k,
          borderLeftWidth: k,
          borderRadius: k,
          borderTopLeftRadius: k,
          borderTopRightRadius: k,
          borderBottomRightRadius: k,
          borderBottomLeftRadius: k,
          width: k,
          maxWidth: k,
          height: k,
          maxHeight: k,
          top: k,
          right: k,
          bottom: k,
          left: k,
          inset: k,
          insetBlock: k,
          insetBlockStart: k,
          insetBlockEnd: k,
          insetInline: k,
          insetInlineStart: k,
          insetInlineEnd: k,
          padding: k,
          paddingTop: k,
          paddingRight: k,
          paddingBottom: k,
          paddingLeft: k,
          paddingBlock: k,
          paddingBlockStart: k,
          paddingBlockEnd: k,
          paddingInline: k,
          paddingInlineStart: k,
          paddingInlineEnd: k,
          margin: k,
          marginTop: k,
          marginRight: k,
          marginBottom: k,
          marginLeft: k,
          marginBlock: k,
          marginBlockStart: k,
          marginBlockEnd: k,
          marginInline: k,
          marginInlineStart: k,
          marginInlineEnd: k,
          fontSize: k,
          backgroundPositionX: k,
          backgroundPositionY: k,
          rotate: P,
          rotateX: P,
          rotateY: P,
          rotateZ: P,
          scale: p,
          scaleX: p,
          scaleY: p,
          scaleZ: p,
          skew: P,
          skewX: P,
          skewY: P,
          distance: k,
          translateX: k,
          translateY: k,
          translateZ: k,
          x: k,
          y: k,
          z: k,
          perspective: k,
          transformPerspective: k,
          opacity: d,
          originX: A,
          originY: A,
          originZ: k,
          zIndex: W,
          fillOpacity: d,
          strokeOpacity: d,
          numOctaves: W
        },
        q = {
          ...G,
          color: M,
          backgroundColor: M,
          outlineColor: M,
          fill: M,
          stroke: M,
          borderColor: M,
          borderTopColor: M,
          borderRightColor: M,
          borderBottomColor: M,
          borderLeftColor: M,
          filter: $,
          WebkitFilter: $
        },
        z = e => q[e],
        H = () => ({
          translate: 0,
          scale: 1,
          origin: 0,
          originPoint: 0
        }),
        X = () => ({
          x: H(),
          y: H()
        }),
        Y = () => ({
          min: 0,
          max: 0
        }),
        Z = () => ({
          x: Y(),
          y: Y()
        }),
        J = e => !!(e && e.getVelocity),
        Q = new Set(["width", "height", "top", "left", "right", "bottom", ...l]),
        ee = e => t => t.test(e),
        et = [h, k, T, P, C, E, {
          test: e => "auto" === e,
          parse: e => e
        }],
        en = e => et.find(ee(e));
      n(87358);
      let er = () => {},
        ei = () => {},
        eo = e => t => "string" == typeof t && t.startsWith(e),
        es = eo("--"),
        ea = eo("var(--"),
        el = e => !!ea(e) && eu.test(e.split("/*")[0].trim()),
        eu = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

      function ec(e) {
        return "string" == typeof e && e.split("/*")[0].includes("var(--")
      }
      let eh = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        ed = e => 180 * e / Math.PI,
        ep = e => em(ed(Math.atan2(e[1], e[0]))),
        ef = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
          rotate: ep,
          rotateZ: ep,
          skewX: e => ed(Math.atan(e[1])),
          skewY: e => ed(Math.atan(e[2])),
          skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
        },
        em = e => ((e %= 360) < 0 && (e += 360), e),
        eg = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
        ev = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
        ey = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: eg,
          scaleY: ev,
          scale: e => (eg(e) + ev(e)) / 2,
          rotateX: e => em(ed(Math.atan2(e[6], e[5]))),
          rotateY: e => em(ed(Math.atan2(-e[2], e[0]))),
          rotateZ: ep,
          rotate: ep,
          skewX: e => ed(Math.atan(e[4])),
          skewY: e => ed(Math.atan(e[1])),
          skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
        };

      function eb(e) {
        return +!!e.includes("scale")
      }

      function ew(e, t) {
        let n, r;
        if (!e || "none" === e) return eb(t);
        let i = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (i) n = ey, r = i;
        else {
          let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          n = ef, r = t
        }
        if (!r) return eb(t);
        let o = n[t],
          s = r[1].split(",").map(ex);
        return "function" == typeof o ? o(s) : s[o]
      }

      function ex(e) {
        return parseFloat(e.trim())
      }
      let eS = e => e === h || e === k,
        eP = new Set(["x", "y", "z"]),
        eT = l.filter(e => !eP.has(e)),
        ek = {
          width: ({
            x: e
          }, {
            paddingLeft: t = "0",
            paddingRight: n = "0"
          }) => e.max - e.min - parseFloat(t) - parseFloat(n),
          height: ({
            y: e
          }, {
            paddingTop: t = "0",
            paddingBottom: n = "0"
          }) => e.max - e.min - parseFloat(t) - parseFloat(n),
          top: (e, {
            top: t
          }) => parseFloat(t),
          left: (e, {
            left: t
          }) => parseFloat(t),
          bottom: ({
            y: e
          }, {
            top: t
          }) => parseFloat(t) + (e.max - e.min),
          right: ({
            x: e
          }, {
            left: t
          }) => parseFloat(t) + (e.max - e.min),
          x: (e, {
            transform: t
          }) => ew(t, "x"),
          y: (e, {
            transform: t
          }) => ew(t, "y")
        };
      ek.translateX = ek.x, ek.translateY = ek.y;
      let eE = e => e,
        eC = {},
        eA = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];

      function eR(e, t) {
        let n = !1,
          r = !0,
          i = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
          },
          o = () => n = !0,
          s = eA.reduce((e, n) => (e[n] = function(e, t) {
            let n = new Set,
              r = new Set,
              i = !1,
              o = !1,
              s = new WeakSet,
              a = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
              },
              l = 0;

            function u(t) {
              s.has(t) && (c.schedule(t), e()), l++, t(a)
            }
            let c = {
              schedule: (e, t = !1, o = !1) => {
                let a = o && i ? n : r;
                return t && s.add(e), a.has(e) || a.add(e), e
              },
              cancel: e => {
                r.delete(e), s.delete(e)
              },
              process: e => {
                if (a = e, i) {
                  o = !0;
                  return
                }
                i = !0, [n, r] = [r, n], n.forEach(u), t, l = 0, n.clear(), i = !1, o && (o = !1, c.process(e))
              }
            };
            return c
          }(o, t ? n : void 0), e), {}),
          {
            setup: a,
            read: l,
            resolveKeyframes: u,
            preUpdate: c,
            update: h,
            preRender: d,
            render: p,
            postRender: f
          } = s,
          m = () => {
            let o = eC.useManualTiming ? i.timestamp : performance.now();
            n = !1, eC.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, 40), 1)), i.timestamp = o, i.isProcessing = !0, a.process(i), l.process(i), u.process(i), c.process(i), h.process(i), d.process(i), p.process(i), f.process(i), i.isProcessing = !1, n && t && (r = !1, e(m))
          };
        return {
          schedule: eA.reduce((t, o) => {
            let a = s[o];
            return t[o] = (t, o = !1, s = !1) => (!n && (n = !0, r = !0, i.isProcessing || e(m)), a.schedule(t, o, s)), t
          }, {}),
          cancel: e => {
            for (let t = 0; t < eA.length; t++) s[eA[t]].cancel(e)
          },
          state: i,
          steps: s
        }
      }
      let {
        schedule: eM,
        cancel: ej,
        state: e_,
        steps: eI
      } = eR("u" > typeof requestAnimationFrame ? requestAnimationFrame : eE, !0), eD = new Set, eO = !1, eL = !1, eV = !1;

      function eF() {
        if (eL) {
          let e = Array.from(eD).filter(e => e.needsMeasurement),
            t = new Set(e.map(e => e.element)),
            n = new Map;
          t.forEach(e => {
            let t, r = (t = [], eT.forEach(n => {
              let r = e.getValue(n);
              void 0 !== r && (t.push([n, r.get()]), r.set(+!!n.startsWith("scale")))
            }), t);
            r.length && (n.set(e, r), e.render())
          }), e.forEach(e => e.measureInitialState()), t.forEach(e => {
            e.render();
            let t = n.get(e);
            t && t.forEach(([t, n]) => {
              e.getValue(t)?.set(n)
            })
          }), e.forEach(e => e.measureEndState()), e.forEach(e => {
            void 0 !== e.suspendedScrollY && window.scrollTo(0, e.suspendedScrollY)
          })
        }
        eL = !1, eO = !1, eD.forEach(e => e.complete(eV)), eD.clear()
      }

      function eN() {
        eD.forEach(e => {
          e.readKeyframes(), e.needsMeasurement && (eL = !0)
        })
      }
      class eU {
        constructor(e, t, n, r, i, o = !1) {
          this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = o
        }
        scheduleResolve() {
          this.state = "scheduled", this.isAsync ? (eD.add(this), eO || (eO = !0, eM.read(eN), eM.resolveKeyframes(eF))) : (this.readKeyframes(), this.complete())
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: e,
            name: t,
            element: n,
            motionValue: r
          } = this;
          if (null === e[0]) {
            let i = r?.get(),
              o = e[e.length - 1];
            if (void 0 !== i) e[0] = i;
            else if (n && t) {
              let r = n.readValue(t, o);
              null != r && (e[0] = r)
            }
            void 0 === e[0] && (e[0] = o), r && void 0 === i && r.set(e[0])
          }
          for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1])
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(e = !1) {
          this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), eD.delete(this)
        }
        cancel() {
          "scheduled" === this.state && (eD.delete(this), this.state = "pending")
        }
        resume() {
          "pending" === this.state && this.scheduleResolve()
        }
      }

      function eB(e, t) {
        let n = z(e);
        return n !== $ && (n = N), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
      }
      let eK = new Set(["auto", "none", "0"]);
      class e$ extends eU {
        constructor(e, t, n, r, i) {
          super(e, t, n, r, i, !0)
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: e,
            element: t,
            name: n
          } = this;
          if (!t || !t.current) return;
          super.readKeyframes();
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            if ("string" == typeof r && el(r = r.trim())) {
              let i = function e(t, n, r = 1) {
                ei(r <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
                let [i, o] = function(e) {
                  let t = eh.exec(e);
                  if (!t) return [, ];
                  let [, n, r, i] = t;
                  return [`--${n??r}`, i]
                }(t);
                if (!i) return;
                let s = window.getComputedStyle(n).getPropertyValue(i);
                if (s) {
                  let e = s.trim();
                  return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e) ? parseFloat(e) : e
                }
                return el(o) ? e(o, n, r + 1) : o
              }(r, t.current);
              void 0 !== i && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r)
            }
          }
          if (this.resolveNoneKeyframes(), !Q.has(n) || 2 !== e.length) return;
          let [r, i] = e, o = en(r), s = en(i);
          if (ec(r) !== ec(i) && ek[n]) {
            this.needsMeasurement = !0;
            return
          }
          if (o !== s)
            if (eS(o) && eS(s))
              for (let t = 0; t < e.length; t++) {
                let n = e[t];
                "string" == typeof n && (e[t] = parseFloat(n))
              } else ek[n] && (this.needsMeasurement = !0)
        }
        resolveNoneKeyframes() {
          let {
            unresolvedKeyframes: e,
            name: t
          } = this, n = [];
          for (let t = 0; t < e.length; t++)(null === e[t] || function(e) {
            if ("number" == typeof e) return 0 === e;
            if (null === e) return !0;
            return "none" === e || "0" === e || /^0[^.\s]+$/u.test(e)
          }(e[t])) && n.push(t);
          n.length && function(e, t, n) {
            let r, i = 0;
            for (; i < e.length && !r;) {
              let t = e[i];
              "string" == typeof t && !eK.has(t) && O(t).values.length && (r = e[i]), i++
            }
            if (r && n)
              for (let i of t) e[i] = eB(n, r)
          }(e, n, t)
        }
        measureInitialState() {
          let {
            element: e,
            unresolvedKeyframes: t,
            name: n
          } = this;
          if (!e || !e.current) return;
          "height" === n && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ek[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
          let r = t[t.length - 1];
          void 0 !== r && e.getValue(n, r).jump(r, !1)
        }
        measureEndState() {
          let {
            element: e,
            name: t,
            unresolvedKeyframes: n
          } = this;
          if (!e || !e.current) return;
          let r = e.getValue(t);
          r && r.jump(this.measuredOrigin, !1);
          let i = n.length - 1,
            o = n[i];
          n[i] = ek[t](e.measureViewportBox(), window.getComputedStyle(e.current)), null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
            e.getValue(t).set(n)
          }), this.resolveNoneKeyframes()
        }
      }
      let eW = e => 1e3 * e;

      function eG(e, t) {
        -1 === e.indexOf(t) && e.push(t)
      }

      function eq(e, t) {
        let n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
      }
      class ez {
        constructor() {
          this.subscriptions = []
        }
        add(e) {
          return eG(this.subscriptions, e), () => eq(this.subscriptions, e)
        }
        notify(e, t, n) {
          let r = this.subscriptions.length;
          if (r)
            if (1 === r) this.subscriptions[0](e, t, n);
            else
              for (let i = 0; i < r; i++) {
                let r = this.subscriptions[i];
                r && r(e, t, n)
              }
        }
        getSize() {
          return this.subscriptions.length
        }
        clear() {
          this.subscriptions.length = 0
        }
      }

      function eH(e) {
        let t;
        return () => (void 0 === t && (t = e()), t)
      }
      let eX = eH(() => void 0 !== window.ScrollTimeline),
        eY = e => null !== e;

      function eZ(e, {
        repeat: t,
        repeatType: n = "loop"
      }, r, i = 1) {
        let o = e.filter(eY),
          s = i < 0 || t && "loop" !== n && t % 2 == 1 ? 0 : o.length - 1;
        return s && void 0 !== r ? r : o[s]
      }
      class eJ {
        constructor() {
          this.updateFinished()
        }
        get finished() {
          return this._finished
        }
        updateFinished() {
          this._finished = new Promise(e => {
            this.resolve = e
          })
        }
        notifyFinished() {
          this.resolve()
        }
        then(e, t) {
          return this.finished.then(e, t)
        }
      }
      let eQ = {
          layout: 0,
          mainThread: 0,
          waapi: 0
        },
        e0 = e => Array.isArray(e) && "number" == typeof e[0],
        e1 = {},
        e2 = (s = eH(() => {
          try {
            document.createElement("div").animate({
              opacity: 0
            }, {
              easing: "linear(0, 1)"
            })
          } catch (e) {
            return !1
          }
          return !0
        }), () => e1.linearEasing ?? s()),
        e9 = (e, t, n = 10) => {
          let r = "",
            i = Math.max(Math.round(t / n), 2);
          for (let t = 0; t < i; t++) r += Math.round(1e4 * e(t / (i - 1))) / 1e4 + ", ";
          return `linear(${r.substring(0,r.length-2)})`
        },
        e3 = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
        e5 = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: e3([0, .65, .55, 1]),
          circOut: e3([.55, 0, 1, .45]),
          backIn: e3([.31, .01, .66, -.59]),
          backOut: e3([.33, 1.53, .69, .99])
        };

      function e8(e) {
        return "function" == typeof e && "applyToOptions" in e
      }
      class e7 extends eJ {
        constructor(e) {
          if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
          const {
            element: t,
            name: n,
            keyframes: r,
            pseudoElement: i,
            allowFlatten: o = !1,
            finalKeyframe: s,
            onComplete: a
          } = e;
          this.isPseudoElement = !!i, this.allowFlatten = o, this.options = e, ei("string" != typeof e.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
          const l = function({
            type: e,
            ...t
          }) {
            return e8(e) && e2() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t)
          }(e);
          this.animation = function(e, t, n, {
            delay: r = 0,
            duration: i = 300,
            repeat: o = 0,
            repeatType: s = "loop",
            ease: a = "easeOut",
            times: l
          } = {}, u) {
            let c = {
              [t]: n
            };
            l && (c.offset = l);
            let h = function e(t, n) {
              if (t) return "function" == typeof t ? e2() ? e9(t, n) : "ease-out" : e0(t) ? e3(t) : Array.isArray(t) ? t.map(t => e(t, n) || e5.easeOut) : e5[t]
            }(a, i);
            Array.isArray(h) && (c.easing = h);
            let d = {
              delay: r,
              duration: i,
              easing: Array.isArray(h) ? "linear" : h,
              fill: "both",
              iterations: o + 1,
              direction: "reverse" === s ? "alternate" : "normal"
            };
            u && (d.pseudoElement = u);
            let p = e.animate(c, d);
            return p
          }(t, n, r, l, i), !1 === l.autoplay && this.animation.pause(), this.animation.onfinish = () => {
            if (this.finishedTime = this.time, !i) {
              let e = eZ(r, this.options, s, this.speed);
              this.updateMotionValue ? this.updateMotionValue(e) : n.startsWith("--") ? t.style.setProperty(n, e) : t.style[n] = e, this.animation.cancel()
            }
            a?.(), this.notifyFinished()
          }
        }
        play() {
          this.isStopped || (this.manualStartTime = null, this.animation.play(), "finished" === this.state && this.updateFinished())
        }
        pause() {
          this.animation.pause()
        }
        complete() {
          this.animation.finish?.()
        }
        cancel() {
          try {
            this.animation.cancel()
          } catch (e) {}
        }
        stop() {
          if (this.isStopped) return;
          this.isStopped = !0;
          let {
            state: e
          } = this;
          "idle" !== e && "finished" !== e && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
        }
        commitStyles() {
          let e = this.options?.element;
          !this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.()
        }
        get duration() {
          return Number(this.animation.effect?.getComputedTiming?.().duration || 0) / 1e3
        }
        get iterationDuration() {
          let {
            delay: e = 0
          } = this.options || {};
          return this.duration + e / 1e3
        }
        get time() {
          return (Number(this.animation.currentTime) || 0) / 1e3
        }
        set time(e) {
          this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = eW(e)
        }
        get speed() {
          return this.animation.playbackRate
        }
        set speed(e) {
          e < 0 && (this.finishedTime = null), this.animation.playbackRate = e
        }
        get state() {
          return null !== this.finishedTime ? "finished" : this.animation.playState
        }
        get startTime() {
          return this.manualStartTime ?? Number(this.animation.startTime)
        }
        set startTime(e) {
          this.manualStartTime = this.animation.startTime = e
        }
        attachTimeline({
          timeline: e,
          observe: t
        }) {
          return (this.allowFlatten && this.animation.effect?.updateTiming({
            easing: "linear"
          }), this.animation.onfinish = null, e && eX()) ? (this.animation.timeline = e, eE) : t(this)
        }
      }
      let e4 = new Set(["opacity", "clipPath", "filter", "transform"]),
        {
          schedule: e6
        } = eR(queueMicrotask, !1);

      function te() {
        r = void 0
      }
      let tt = {
        now: () => (void 0 === r && tt.set(e_.isProcessing || eC.useManualTiming ? e_.timestamp : performance.now()), r),
        set: e => {
          r = e, queueMicrotask(te)
        }
      };
      class tn {
        constructor(e, t = {}) {
          this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = e => {
            let t = tt.now();
            if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
              for (let e of this.dependents) e.dirty()
          }, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner
        }
        setCurrent(e) {
          this.current = e, this.updatedAt = tt.now(), null === this.canTrackVelocity && void 0 !== e && (this.canTrackVelocity = !isNaN(parseFloat(this.current)))
        }
        setPrevFrameValue(e = this.current) {
          this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
        }
        onChange(e) {
          return this.on("change", e)
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new ez);
          let n = this.events[e].add(t);
          return "change" === e ? () => {
            n(), eM.read(() => {
              this.events.change.getSize() || this.stop()
            })
          } : n
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear()
        }
        attach(e, t) {
          this.passiveEffect = e, this.stopPassiveEffect = t
        }
        set(e) {
          this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e)
        }
        setWithVelocity(e, t, n) {
          this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n
        }
        jump(e, t = !0) {
          this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
        dirty() {
          this.events.change?.notify(this.current)
        }
        addDependent(e) {
          this.dependents || (this.dependents = new Set), this.dependents.add(e)
        }
        removeDependent(e) {
          this.dependents && this.dependents.delete(e)
        }
        get() {
          return a && a.push(this), this.current
        }
        getPrevious() {
          return this.prev
        }
        getVelocity() {
          var e;
          let t = tt.now();
          if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
          let n = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return e = parseFloat(this.current) - parseFloat(this.prevFrameValue), n ? 1e3 / n * e : 0
        }
        start(e) {
          return this.stop(), new Promise(t => {
            this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify()
          }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
          })
        }
        stop() {
          this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
        }
        isAnimating() {
          return !!this.animation
        }
        clearAnimation() {
          delete this.animation
        }
        destroy() {
          this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
      }

      function tr(e, t) {
        return new tn(e, t)
      }
      let ti = [...et, M, N],
        to = new WeakMap;

      function ts(e) {
        return null !== e && "object" == typeof e && "function" == typeof e.start
      }

      function ta(e) {
        return "string" == typeof e || Array.isArray(e)
      }
      let tl = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
        tu = ["initial", ...tl];

      function tc(e) {
        return ts(e.animate) || tu.some(t => ta(e[t]))
      }

      function th(e) {
        return !!(tc(e) || e.variants)
      }
      let td = {
          current: null
        },
        tp = {
          current: !1
        },
        tf = "u" > typeof window;

      function tm(e) {
        let t = [{}, {}];
        return e?.values.forEach((e, n) => {
          t[0][n] = e.get(), t[1][n] = e.getVelocity()
        }), t
      }

      function tg(e, t, n, r) {
        if ("function" == typeof t) {
          let [i, o] = tm(r);
          t = t(void 0 !== n ? n : e.custom, i, o)
        }
        if ("string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t) {
          let [i, o] = tm(r);
          t = t(void 0 !== n ? n : e.custom, i, o)
        }
        return t
      }
      let tv = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
        ty = {};
      class tb {
        scrapeMotionValuesFromProps(e, t, n) {
          return {}
        }
        constructor({
          parent: e,
          props: t,
          presenceContext: n,
          reducedMotionConfig: r,
          skipAnimations: i,
          blockInitialAnimation: o,
          visualState: s
        }, a = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = eU, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            let e = tt.now();
            this.renderScheduledAt < e && (this.renderScheduledAt = e, eM.render(this.render, !1, !0))
          };
          const {
            latestValues: l,
            renderState: u
          } = s;
          this.latestValues = l, this.baseTarget = {
            ...l
          }, this.initialValues = t.initial ? {
            ...l
          } : {}, this.renderState = u, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.skipAnimationsConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = tc(t), this.isVariantNode = th(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
          const {
            willChange: c,
            ...h
          } = this.scrapeMotionValuesFromProps(t, {}, this);
          for (const e in h) {
            const t = h[e];
            void 0 !== l[e] && J(t) && t.set(l[e])
          }
        }
        mount(e) {
          if (this.hasBeenMounted)
            for (let e in this.initialValues) this.values.get(e)?.jump(this.initialValues[e]), this.latestValues[e] = this.initialValues[e];
          this.current = e, to.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), "never" === this.reducedMotionConfig ? this.shouldReduceMotion = !1 : "always" === this.reducedMotionConfig ? this.shouldReduceMotion = !0 : (tp.current || function() {
            if (tp.current = !0, tf)
              if (window.matchMedia) {
                let e = window.matchMedia("(prefers-reduced-motion)"),
                  t = () => td.current = e.matches;
                e.addEventListener("change", t), t()
              } else td.current = !1
          }(), this.shouldReduceMotion = td.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0
        }
        unmount() {
          for (let e in this.projection && this.projection.unmount(), ej(this.notifyUpdate), ej(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this), this.events) this.events[e].clear();
          for (let e in this.features) {
            let t = this.features[e];
            t && (t.unmount(), t.isMounted = !1)
          }
          this.current = null
        }
        addChild(e) {
          this.children.add(e), this.enteringChildren ?? (this.enteringChildren = new Set), this.enteringChildren.add(e)
        }
        removeChild(e) {
          this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e)
        }
        bindToMotionValue(e, t) {
          let n;
          if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), t.accelerate && e4.has(e) && this.current instanceof HTMLElement) {
            let {
              factory: n,
              keyframes: r,
              times: i,
              ease: o,
              duration: s
            } = t.accelerate, a = new e7({
              element: this.current,
              name: e,
              keyframes: r,
              times: i,
              ease: o,
              duration: eW(s)
            }), l = n(a);
            this.valueSubscriptions.set(e, () => {
              l(), a.cancel()
            });
            return
          }
          let r = u.has(e);
          r && this.onBindTransform && this.onBindTransform();
          let i = t.on("change", t => {
            this.latestValues[e] = t, this.props.onUpdate && eM.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
          });
          "u" > typeof window && window.MotionCheckAppearSync && (n = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
            i(), n && n(), t.owner && t.stop()
          })
        }
        sortNodePosition(e) {
          return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
        }
        updateFeatures() {
          let e = "animation";
          for (e in ty) {
            let t = ty[e];
            if (!t) continue;
            let {
              isEnabled: n,
              Feature: r
            } = t;
            if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
              let t = this.features[e];
              t.isMounted ? t.update() : (t.mount(), t.isMounted = !0)
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props)
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Z()
        }
        getStaticValue(e) {
          return this.latestValues[e]
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t
        }
        update(e, t) {
          (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
          for (let t = 0; t < tv.length; t++) {
            let n = tv[t];
            this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            let r = e["on" + n];
            r && (this.propEventSubscriptions[n] = this.on(n, r))
          }
          this.prevMotionValues = function(e, t, n) {
            for (let r in t) {
              let i = t[r],
                o = n[r];
              if (J(i)) e.addValue(r, i);
              else if (J(o)) e.addValue(r, tr(i, {
                owner: e
              }));
              else if (o !== i)
                if (e.hasValue(r)) {
                  let t = e.getValue(r);
                  !0 === t.liveStyle ? t.jump(i) : t.hasAnimated || t.set(i)
                } else {
                  let t = e.getStaticValue(r);
                  e.addValue(r, tr(void 0 !== t ? t : i, {
                    owner: e
                  }))
                }
            }
            for (let r in n) void 0 === t[r] && e.removeValue(r);
            return t
          }(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
        }
        getProps() {
          return this.props
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0
        }
        getDefaultTransition() {
          return this.props.transition
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint
        }
        getClosestVariantNode() {
          return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
        }
        addVariantChild(e) {
          let t = this.getClosestVariantNode();
          if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e)
        }
        addValue(e, t) {
          let n = this.values.get(e);
          t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get())
        }
        removeValue(e) {
          this.values.delete(e);
          let t = this.valueSubscriptions.get(e);
          t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
        }
        hasValue(e) {
          return this.values.has(e)
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e]) return this.props.values[e];
          let n = this.values.get(e);
          return void 0 === n && void 0 !== t && (n = tr(null === t ? void 0 : t, {
            owner: this
          }), this.addValue(e, n)), n
        }
        readValue(e, t) {
          let n = void 0 === this.latestValues[e] && this.current ? this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e];
          if (null != n) {
            let r, i;
            if ("string" == typeof n && (r = n, /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(r) || (i = n, /^0[^.\s]+$/u.test(i)))) n = parseFloat(n);
            else {
              let r;
              r = n, !ti.find(ee(r)) && N.test(t) && (n = eB(e, t))
            }
            this.setBaseTarget(e, J(n) ? n.get() : n)
          }
          return J(n) ? n.get() : n
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t
        }
        getBaseTarget(e) {
          let t, {
            initial: n
          } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let r = tg(this.props, n, this.presenceContext?.custom);
            r && (t = r[e])
          }
          if (n && void 0 !== t) return t;
          let r = this.getBaseTargetFromProps(this.props, e);
          return void 0 === r || J(r) ? void 0 !== this.initialValues[e] && void 0 === t ? void 0 : this.baseTarget[e] : r
        }
        on(e, t) {
          return this.events[e] || (this.events[e] = new ez), this.events[e].add(t)
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t)
        }
        scheduleRenderMicrotask() {
          e6.render(this.render)
        }
      }
      class tw extends tb {
        constructor() {
          super(...arguments), this.KeyframeResolver = e$
        }
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1
        }
        getBaseTargetFromProps(e, t) {
          let n = e.style;
          return n ? n[t] : void 0
        }
        removeValueFromRenderState(e, {
          vars: t,
          style: n
        }) {
          delete t[e], delete n[e]
        }
        handleChildMotionValue() {
          this.childSubscription && (this.childSubscription(), delete this.childSubscription);
          let {
            children: e
          } = this.props;
          J(e) && (this.childSubscription = e.on("change", e => {
            this.current && (this.current.textContent = `${e}`)
          }))
        }
      }

      function tx(e) {
        return e.replace(/([A-Z])/g, e => `-${e.toLowerCase()}`)
      }
      let tS = (e, t) => t && "number" == typeof e ? t.transform(e) : e,
        tP = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        tT = l.length;

      function tk(e, t, n) {
        let {
          style: r,
          vars: i,
          transformOrigin: o
        } = e, s = !1, a = !1;
        for (let e in t) {
          let n = t[e];
          if (u.has(e)) {
            s = !0;
            continue
          }
          if (es(e)) {
            i[e] = n;
            continue
          } {
            let t = tS(n, G[e]);
            e.startsWith("origin") ? (a = !0, o[e] = t) : r[e] = t
          }
        }
        if (!t.transform && (s || n ? r.transform = function(e, t, n) {
            let r = "",
              i = !0;
            for (let o = 0; o < tT; o++) {
              let s = l[o],
                a = e[s];
              if (void 0 === a) continue;
              let u = !0;
              if ("number" == typeof a) u = a === +!!s.startsWith("scale");
              else {
                let e = parseFloat(a);
                u = s.startsWith("scale") ? 1 === e : 0 === e
              }
              if (!u || n) {
                let e = tS(a, G[s]);
                if (!u) {
                  i = !1;
                  let t = tP[s] || s;
                  r += `${t}(${e}) `
                }
                n && (t[s] = e)
              }
            }
            return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r
          }(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
          let {
            originX: e = "50%",
            originY: t = "50%",
            originZ: n = 0
          } = o;
          r.transformOrigin = `${e} ${t} ${n}`
        }
      }
      let tE = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        tC = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        },
        tA = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];

      function tR(e, {
        attrX: t,
        attrY: n,
        attrScale: r,
        pathLength: i,
        pathSpacing: o = 1,
        pathOffset: s = 0,
        ...a
      }, l, u, c) {
        if (tk(e, a, u), l) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return
        }
        e.attrs = e.style, e.style = {};
        let {
          attrs: h,
          style: d
        } = e;
        for (let e of (h.transform && (d.transform = h.transform, delete h.transform), (d.transform || h.transformOrigin) && (d.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), d.transform && (d.transformBox = c?.transformBox ?? "fill-box", delete h.transformBox), tA)) void 0 !== h[e] && (d[e] = h[e], delete h[e]);
        void 0 !== t && (h.x = t), void 0 !== n && (h.y = n), void 0 !== r && (h.scale = r), void 0 !== i && function(e, t, n = 1, r = 0, i = !0) {
          e.pathLength = 1;
          let o = i ? tE : tC;
          e[o.offset] = `${-r}`, e[o.array] = `${t} ${n}`
        }(h, i, o, s, !1)
      }
      let tM = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]),
        tj = e => "string" == typeof e && "svg" === e.toLowerCase();

      function t_(e, {
        style: t,
        vars: n
      }, r, i) {
        let o, s = e.style;
        for (o in t) s[o] = t[o];
        for (o in i?.applyProjectionStyles(s, r), n) s.setProperty(o, n[o])
      }

      function tI(e, t) {
        return t.max === t.min ? 0 : e / (t.max - t.min) * 100
      }
      let tD = {
          correct: (e, t) => {
            if (!t.target) return e;
            if ("string" == typeof e)
              if (!k.test(e)) return e;
              else e = parseFloat(e);
            let n = tI(e, t.target.x),
              r = tI(e, t.target.y);
            return `${n}% ${r}%`
          }
        },
        tO = (e, t, n) => e + (t - e) * n,
        tL = {
          borderRadius: {
            ...tD,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          },
          borderTopLeftRadius: tD,
          borderTopRightRadius: tD,
          borderBottomLeftRadius: tD,
          borderBottomRightRadius: tD,
          boxShadow: {
            correct: (e, {
              treeScale: t,
              projectionDelta: n
            }) => {
              let r = N.parse(e);
              if (r.length > 5) return e;
              let i = N.createTransformer(e),
                o = +("number" != typeof r[0]),
                s = n.x.scale * t.x,
                a = n.y.scale * t.y;
              r[0 + o] /= s, r[1 + o] /= a;
              let l = tO(s, a, .5);
              return "number" == typeof r[2 + o] && (r[2 + o] /= l), "number" == typeof r[3 + o] && (r[3 + o] /= l), i(r)
            }
          }
        };

      function tV(e, {
        layout: t,
        layoutId: n
      }) {
        return u.has(e) || e.startsWith("origin") || (t || void 0 !== n) && (!!tL[e] || "opacity" === e)
      }

      function tF(e, t, n) {
        let r = e.style,
          i = t?.style,
          o = {};
        if (!r) return o;
        for (let t in r)(J(r[t]) || i && J(i[t]) || tV(t, e) || n?.getValue(t)?.liveStyle !== void 0) && (o[t] = r[t]);
        return o
      }

      function tN(e, t, n) {
        let r = tF(e, t, n);
        for (let n in e)(J(e[n]) || J(t[n])) && (r[-1 !== l.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = e[n]);
        return r
      }
      class tU extends tw {
        constructor() {
          super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Z
        }
        getBaseTargetFromProps(e, t) {
          return e[t]
        }
        readValueFromInstance(e, t) {
          if (u.has(t)) {
            let e = z(t);
            return e && e.default || 0
          }
          return t = tM.has(t) ? t : tx(t), e.getAttribute(t)
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return tN(e, t, n)
        }
        build(e, t, n) {
          tR(e, t, this.isSVGTag, n.transformTemplate, n.style)
        }
        renderInstance(e, t, n, r) {
          for (let n in t_(e, t, void 0, r), t.attrs) e.setAttribute(tM.has(n) ? n : tx(n), t.attrs[n])
        }
        mount(e) {
          this.isSVGTag = tj(e.tagName), super.mount(e)
        }
      }

      function tB({
        top: e,
        left: t,
        right: n,
        bottom: r
      }) {
        return {
          x: {
            min: t,
            max: n
          },
          y: {
            min: e,
            max: r
          }
        }
      }

      function tK(e) {
        return void 0 === e || 1 === e
      }

      function t$({
        scale: e,
        scaleX: t,
        scaleY: n
      }) {
        return !tK(e) || !tK(t) || !tK(n)
      }

      function tW(e) {
        return t$(e) || tG(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
      }

      function tG(e) {
        var t, n;
        return (t = e.x) && "0%" !== t || (n = e.y) && "0%" !== n
      }

      function tq(e, t, n, r, i) {
        return void 0 !== i && (e = r + i * (e - r)), r + n * (e - r) + t
      }

      function tz(e, t = 0, n = 1, r, i) {
        e.min = tq(e.min, t, n, r, i), e.max = tq(e.max, t, n, r, i)
      }

      function tH(e, {
        x: t,
        y: n
      }) {
        tz(e.x, t.translate, t.scale, t.originPoint), tz(e.y, n.translate, n.scale, n.originPoint)
      }

      function tX(e, t) {
        e.min = e.min + t, e.max = e.max + t
      }

      function tY(e, t, n, r, i = .5) {
        let o = tO(e.min, e.max, i);
        tz(e, t, n, o, r)
      }

      function tZ(e, t) {
        tY(e.x, t.x, t.scaleX, t.scale, t.originX), tY(e.y, t.y, t.scaleY, t.scale, t.originY)
      }

      function tJ(e, t) {
        return tB(function(e, t) {
          if (!t) return e;
          let n = t({
              x: e.left,
              y: e.top
            }),
            r = t({
              x: e.right,
              y: e.bottom
            });
          return {
            top: n.y,
            left: n.x,
            bottom: r.y,
            right: r.x
          }
        }(e.getBoundingClientRect(), t))
      }
      class tQ extends tw {
        constructor() {
          super(...arguments), this.type = "html", this.renderInstance = t_
        }
        readValueFromInstance(e, t) {
          if (u.has(t)) return this.projection?.isProjecting ? eb(t) : ((e, t) => {
            let {
              transform: n = "none"
            } = getComputedStyle(e);
            return ew(n, t)
          })(e, t);
          {
            let n = window.getComputedStyle(e),
              r = (es(t) ? n.getPropertyValue(t) : n[t]) || 0;
            return "string" == typeof r ? r.trim() : r
          }
        }
        measureInstanceViewportBox(e, {
          transformPagePoint: t
        }) {
          return tJ(e, t)
        }
        build(e, t, n) {
          tk(e, t, n.transformTemplate)
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return tF(e, t, n)
        }
      }
      var t0, t1 = n(12115);
      let t2 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function t9(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (t2.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1
      }
      var t3 = n(95155);
      let t5 = (0, t1.createContext)({}),
        t8 = (0, t1.createContext)({
          strict: !1
        }),
        t7 = (0, t1.createContext)({
          transformPagePoint: e => e,
          isStatic: !1,
          reducedMotion: "never"
        }),
        t4 = (0, t1.createContext)({});

      function t6(e) {
        return Array.isArray(e) ? e.join(" ") : e
      }
      let ne = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
      });

      function nt(e, t, n) {
        for (let r in t) J(t[r]) || tV(r, n) || (e[r] = t[r])
      }
      let nn = () => ({
          ...ne(),
          attrs: {}
        }),
        nr = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

      function ni(e) {
        return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || nr.has(e)
      }
      let no = e => !ni(e);
      try {
        t0 = require("@emotion/is-prop-valid").default, "function" == typeof t0 && (no = e => e.startsWith("on") ? !ni(e) : t0(e))
      } catch {}

      function ns(e) {
        return J(e) ? e.get() : e
      }
      let na = (0, t1.createContext)(null),
        nl = e => (t, n) => {
          let r, i = (0, t1.useContext)(t4),
            o = (0, t1.useContext)(na),
            s = () => (function({
              scrapeMotionValuesFromProps: e,
              createRenderState: t
            }, n, r, i) {
              return {
                latestValues: function(e, t, n, r) {
                  let i = {},
                    o = r(e, {});
                  for (let e in o) i[e] = ns(o[e]);
                  let {
                    initial: s,
                    animate: a
                  } = e, l = tc(e), u = th(e);
                  t && u && !l && !1 !== e.inherit && (void 0 === s && (s = t.initial), void 0 === a && (a = t.animate));
                  let c = !!n && !1 === n.initial,
                    h = (c = c || !1 === s) ? a : s;
                  if (h && "boolean" != typeof h && !ts(h)) {
                    let t = Array.isArray(h) ? h : [h];
                    for (let n = 0; n < t.length; n++) {
                      let r = tg(e, t[n]);
                      if (r) {
                        let {
                          transitionEnd: e,
                          transition: t,
                          ...n
                        } = r;
                        for (let e in n) {
                          let t = n[e];
                          if (Array.isArray(t)) {
                            let e = c ? t.length - 1 : 0;
                            t = t[e]
                          }
                          null !== t && (i[e] = t)
                        }
                        for (let t in e) i[t] = e[t]
                      }
                    }
                  }
                  return i
                }(n, r, i, e),
                renderState: t()
              }
            })(e, t, i, o);
          return n ? s() : (null === (r = (0, t1.useRef)(null)).current && (r.current = s()), r.current)
        },
        nu = nl({
          scrapeMotionValuesFromProps: tF,
          createRenderState: ne
        }),
        nc = nl({
          scrapeMotionValuesFromProps: tN,
          createRenderState: nn
        }),
        nh = "u" > typeof window,
        nd = {
          animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"]
        },
        np = !1;

      function nf() {
        return ! function() {
          if (np) return;
          let e = {};
          for (let t in nd) e[t] = {
            isEnabled: e => nd[t].some(t => !!e[t])
          };
          ty = e, np = !0
        }(), ty
      }
      let nm = Symbol.for("motionComponentSymbol"),
        ng = "data-" + tx("framerAppearId"),
        nv = (0, t1.createContext)({});

      function ny(e) {
        return e && "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
      }
      let nb = nh ? t1.useLayoutEffect : t1.useEffect;

      function nw(e, {
        forwardMotionProps: t = !1,
        type: n
      } = {}, r, i) {
        r && function(e) {
          let t = nf();
          for (let n in e) t[n] = {
            ...t[n],
            ...e[n]
          };
          ty = t
        }(r);
        let o = n ? "svg" === n : t9(e),
          s = o ? nc : nu;

        function a(n, r) {
          var a;
          let l, u, c, h = {
              ...(0, t1.useContext)(t7),
              ...n,
              layoutId: function({
                layoutId: e
              }) {
                let t = (0, t1.useContext)(t5).id;
                return t && void 0 !== e ? t + "-" + e : e
              }(n)
            },
            {
              isStatic: d
            } = h,
            p = function(e) {
              let {
                initial: t,
                animate: n
              } = function(e, t) {
                if (tc(e)) {
                  let {
                    initial: t,
                    animate: n
                  } = e;
                  return {
                    initial: !1 === t || ta(t) ? t : void 0,
                    animate: ta(n) ? n : void 0
                  }
                }
                return !1 !== e.inherit ? t : {}
              }(e, (0, t1.useContext)(t4));
              return (0, t1.useMemo)(() => ({
                initial: t,
                animate: n
              }), [t6(t), t6(n)])
            }(n),
            f = s(n, d);
          if (!d && nh) {
            (0, t1.useContext)(t8).strict;
            let t = function(e) {
              let {
                drag: t,
                layout: n
              } = nf();
              if (!t && !n) return {};
              let r = {
                ...t,
                ...n
              };
              return {
                MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
                ProjectionNode: r.ProjectionNode
              }
            }(h);
            l = t.MeasureLayout, p.visualElement = function(e, t, n, r, i, o) {
              let {
                visualElement: s
              } = (0, t1.useContext)(t4), a = (0, t1.useContext)(t8), l = (0, t1.useContext)(na), u = (0, t1.useContext)(t7), c = u.reducedMotion, h = u.skipAnimations, d = (0, t1.useRef)(null), p = (0, t1.useRef)(!1);
              r = r || a.renderer, !d.current && r && (d.current = r(e, {
                visualState: t,
                parent: s,
                props: n,
                presenceContext: l,
                blockInitialAnimation: !!l && !1 === l.initial,
                reducedMotionConfig: c,
                skipAnimations: h,
                isSVG: o
              }), p.current && d.current && (d.current.manuallyAnimateOnMount = !0));
              let f = d.current,
                m = (0, t1.useContext)(nv);
              f && !f.projection && i && ("html" === f.type || "svg" === f.type) && function(e, t, n, r) {
                let {
                  layoutId: i,
                  layout: o,
                  drag: s,
                  dragConstraints: a,
                  layoutScroll: l,
                  layoutRoot: u,
                  layoutCrossfade: c
                } = t;
                e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : function e(t) {
                  if (t) return !1 !== t.options.allowProjection ? t.projection : e(t.parent)
                }(e.parent)), e.projection.setOptions({
                  layoutId: i,
                  layout: o,
                  alwaysMeasureLayout: !!s || a && ny(a),
                  visualElement: e,
                  animationType: "string" == typeof o ? o : "both",
                  initialPromotionConfig: r,
                  crossfade: c,
                  layoutScroll: l,
                  layoutRoot: u
                })
              }(d.current, n, i, m);
              let g = (0, t1.useRef)(!1);
              (0, t1.useInsertionEffect)(() => {
                f && g.current && f.update(n, l)
              });
              let v = n[ng],
                y = (0, t1.useRef)(!!v && !window.MotionHandoffIsComplete?.(v) && window.MotionHasOptimisedAnimation?.(v));
              return nb(() => {
                p.current = !0, f && (g.current = !0, window.MotionIsMounted = !0, f.updateFeatures(), f.scheduleRenderMicrotask(), y.current && f.animationState && f.animationState.animateChanges())
              }), (0, t1.useEffect)(() => {
                f && (!y.current && f.animationState && f.animationState.animateChanges(), y.current && (queueMicrotask(() => {
                  window.MotionHandoffMarkAsComplete?.(v)
                }), y.current = !1), f.enteringChildren = void 0)
              }), f
            }(e, f, h, i, t.ProjectionNode, o)
          }
          return (0, t3.jsxs)(t4.Provider, {
            value: p,
            children: [l && p.visualElement ? (0, t3.jsx)(l, {
              visualElement: p.visualElement,
              ...h
            }) : null, function(e, t, n, {
              latestValues: r
            }, i, o = !1, s) {
              let a = (s ?? t9(e) ? function(e, t, n, r) {
                  let i = (0, t1.useMemo)(() => {
                    let n = nn();
                    return tR(n, t, tj(r), e.transformTemplate, e.style), {
                      ...n.attrs,
                      style: {
                        ...n.style
                      }
                    }
                  }, [t]);
                  if (e.style) {
                    let t = {};
                    nt(t, e.style, e), i.style = {
                      ...t,
                      ...i.style
                    }
                  }
                  return i
                } : function(e, t) {
                  let n, r, i = {},
                    o = (n = e.style || {}, nt(r = {}, n, e), Object.assign(r, function({
                      transformTemplate: e
                    }, t) {
                      return (0, t1.useMemo)(() => {
                        let n = ne();
                        return tk(n, t, e), Object.assign({}, n.vars, n.style)
                      }, [t])
                    }(e, t)), r);
                  return e.drag && !1 !== e.dragListener && (i.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = !0 === e.drag ? "none" : `pan-${"x"===e.drag?"y":"x"}`), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (i.tabIndex = 0), i.style = o, i
                })(t, r, i, e),
                l = function(e, t, n) {
                  let r = {};
                  for (let i in e)("values" !== i || "object" != typeof e.values) && (no(i) || !0 === n && ni(i) || !t && !ni(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
                  return r
                }(t, "string" == typeof e, o),
                u = e !== t1.Fragment ? {
                  ...l,
                  ...a,
                  ref: n
                } : {},
                {
                  children: c
                } = t,
                h = (0, t1.useMemo)(() => J(c) ? c.get() : c, [c]);
              return (0, t1.createElement)(e, {
                ...u,
                children: h
              })
            }(e, n, (a = p.visualElement, u = (0, t1.useRef)(r), (0, t1.useInsertionEffect)(() => {
              u.current = r
            }), c = (0, t1.useRef)(null), (0, t1.useCallback)(e => {
              e && f.onMount?.(e), a && (e ? a.mount(e) : a.unmount());
              let t = u.current;
              if ("function" == typeof t)
                if (e) {
                  let n = t(e);
                  "function" == typeof n && (c.current = n)
                } else c.current ? (c.current(), c.current = null) : t(e);
              else t && (t.current = e)
            }, [a])), f, d, t, o)]
          })
        }
        a.displayName = `motion.${"string"==typeof e?e:`create(${e.displayName??e.name??""})`}`;
        let l = (0, t1.forwardRef)(a);
        return l[nm] = e, l
      }
      class nx {
        constructor(e) {
          this.isMounted = !1, this.node = e
        }
        update() {}
      }

      function nS(e, t, n) {
        let r = e.getProps();
        return tg(r, t, void 0 !== n ? n : r.custom, e)
      }

      function nP(e, t) {
        if (e?.inherit && t) {
          let {
            inherit: n,
            ...r
          } = e;
          return {
            ...t,
            ...r
          }
        }
        return e
      }

      function nT(e, t) {
        let n = e?.[t] ?? e?.default ?? e;
        return n !== e ? nP(n, e) : n
      }
      let nk = e => Array.isArray(e);

      function nE(e, t) {
        let n = e.getValue("willChange");
        if (J(n) && n.add) return n.add(t);
        if (!n && eC.WillChange) {
          let n = new eC.WillChange("auto");
          e.addValue("willChange", n), n.add(t)
        }
      }
      let nC = (e, t) => n => t(e(n)),
        nA = (...e) => e.reduce(nC);

      function nR(e, t, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + (t - e) * 6 * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function nM(e, t) {
        return n => n > 0 ? t : e
      }
      let nj = (e, t, n) => {
          let r = e * e,
            i = n * (t * t - r) + r;
          return i < 0 ? 0 : Math.sqrt(i)
        },
        n_ = [x, w, R];

      function nI(e) {
        let t = n_.find(t => t.test(e));
        if (er(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t) return !1;
        let n = t.parse(e);
        return t === R && (n = function({
          hue: e,
          saturation: t,
          lightness: n,
          alpha: r
        }) {
          e /= 360, n /= 100;
          let i = 0,
            o = 0,
            s = 0;
          if (t /= 100) {
            let r = n < .5 ? n * (1 + t) : n + t - n * t,
              a = 2 * n - r;
            i = nR(a, r, e + 1 / 3), o = nR(a, r, e), s = nR(a, r, e - 1 / 3)
          } else i = o = s = n;
          return {
            red: Math.round(255 * i),
            green: Math.round(255 * o),
            blue: Math.round(255 * s),
            alpha: r
          }
        }(n)), n
      }
      let nD = (e, t) => {
          let n = nI(e),
            r = nI(t);
          if (!n || !r) return nM(e, t);
          let i = {
            ...n
          };
          return e => (i.red = nj(n.red, r.red, e), i.green = nj(n.green, r.green, e), i.blue = nj(n.blue, r.blue, e), i.alpha = tO(n.alpha, r.alpha, e), w.transform(i))
        },
        nO = new Set(["none", "hidden"]);

      function nL(e, t) {
        return n => tO(e, t, n)
      }

      function nV(e) {
        return "number" == typeof e ? nL : "string" == typeof e ? el(e) ? nM : M.test(e) ? nD : nU : Array.isArray(e) ? nF : "object" == typeof e ? M.test(e) ? nD : nN : nM
      }

      function nF(e, t) {
        let n = [...e],
          r = n.length,
          i = e.map((e, n) => nV(e)(e, t[n]));
        return e => {
          for (let t = 0; t < r; t++) n[t] = i[t](e);
          return n
        }
      }

      function nN(e, t) {
        let n = {
            ...e,
            ...t
          },
          r = {};
        for (let i in n) void 0 !== e[i] && void 0 !== t[i] && (r[i] = nV(e[i])(e[i], t[i]));
        return e => {
          for (let t in r) n[t] = r[t](e);
          return n
        }
      }
      let nU = (e, t) => {
        let n = N.createTransformer(t),
          r = O(e),
          i = O(t);
        if (!(r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length)) return er(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), nM(e, t);
        if (nO.has(e) && !i.values.length || nO.has(t) && !r.values.length) return nO.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e;
        return nA(nF(function(e, t) {
          let n = [],
            r = {
              color: 0,
              var: 0,
              number: 0
            };
          for (let i = 0; i < t.values.length; i++) {
            let o = t.types[i],
              s = e.indexes[o][r[o]],
              a = e.values[s] ?? 0;
            n[i] = a, r[o]++
          }
          return n
        }(r, i), i.values), n)
      };

      function nB(e, t, n) {
        return "number" == typeof e && "number" == typeof t && "number" == typeof n ? tO(e, t, n) : nV(e)(e, t)
      }
      let nK = e => {
        let t = ({
          timestamp: t
        }) => e(t);
        return {
          start: (e = !0) => eM.update(t, e),
          stop: () => ej(t),
          now: () => e_.isProcessing ? e_.timestamp : tt.now()
        }
      };

      function n$(e) {
        let t = 0,
          n = e.next(t);
        for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
        return t >= 2e4 ? 1 / 0 : t
      }

      function nW(e, t, n) {
        var r, i;
        let o = Math.max(t - 5, 0);
        return r = n - e(o), (i = t - o) ? 1e3 / i * r : 0
      }
      let nG = .01,
        nq = 2,
        nz = .005,
        nH = .5;

      function nX(e, t) {
        return e * Math.sqrt(1 - t * t)
      }
      let nY = ["duration", "bounce"],
        nZ = ["stiffness", "damping", "mass"];

      function nJ(e, t) {
        return t.some(t => void 0 !== e[t])
      }

      function nQ(e = .3, t = .3) {
        let n, r = "object" != typeof e ? {
            visualDuration: e,
            keyframes: [0, 1],
            bounce: t
          } : e,
          {
            restSpeed: i,
            restDelta: o
          } = r,
          s = r.keyframes[0],
          a = r.keyframes[r.keyframes.length - 1],
          l = {
            done: !1,
            value: s
          },
          {
            stiffness: u,
            damping: h,
            mass: d,
            duration: p,
            velocity: f,
            isResolvedFromDuration: m
          } = function(e) {
            let t = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...e
            };
            if (!nJ(e, nZ) && nJ(e, nY))
              if (e.visualDuration) {
                let n = 2 * Math.PI / (1.2 * e.visualDuration),
                  r = n * n,
                  i = 2 * c(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(r);
                t = {
                  ...t,
                  mass: 1,
                  stiffness: r,
                  damping: i
                }
              } else {
                let n = function({
                  duration: e = 800,
                  bounce: t = .3,
                  velocity: n = 0,
                  mass: r = 1
                }) {
                  let i, o;
                  er(e <= eW(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                  let s = 1 - t;
                  s = c(.05, 1, s), e = c(.01, 10, e / 1e3), s < 1 ? (i = t => {
                    let r = t * s,
                      i = r * e;
                    return .001 - (r - n) / nX(t, s) * Math.exp(-i)
                  }, o = t => {
                    let r = t * s * e,
                      o = Math.pow(s, 2) * Math.pow(t, 2) * e,
                      a = Math.exp(-r),
                      l = nX(Math.pow(t, 2), s);
                    return (r * n + n - o) * a * (-i(t) + .001 > 0 ? -1 : 1) / l
                  }) : (i = t => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), o = t => e * e * (n - t) * Math.exp(-t * e));
                  let a = function(e, t, n) {
                    let r = n;
                    for (let n = 1; n < 12; n++) r -= e(r) / t(r);
                    return r
                  }(i, o, 5 / e);
                  if (e = eW(e), isNaN(a)) return {
                    stiffness: 100,
                    damping: 10,
                    duration: e
                  };
                  {
                    let t = Math.pow(a, 2) * r;
                    return {
                      stiffness: t,
                      damping: 2 * s * Math.sqrt(r * t),
                      duration: e
                    }
                  }
                }(e);
                (t = {
                  ...t,
                  ...n,
                  mass: 1
                }).isResolvedFromDuration = !0
              } return t
          }({
            ...r,
            velocity: -((r.velocity || 0) / 1e3)
          }),
          g = f || 0,
          v = h / (2 * Math.sqrt(u * d)),
          y = a - s,
          b = Math.sqrt(u / d) / 1e3,
          w = 5 > Math.abs(y);
        if (i || (i = w ? nG : nq), o || (o = w ? nz : nH), v < 1) {
          let e = nX(b, v);
          n = t => a - Math.exp(-v * b * t) * ((g + v * b * y) / e * Math.sin(e * t) + y * Math.cos(e * t))
        } else if (1 === v) n = e => a - Math.exp(-b * e) * (y + (g + b * y) * e);
        else {
          let e = b * Math.sqrt(v * v - 1);
          n = t => {
            let n = Math.exp(-v * b * t),
              r = Math.min(e * t, 300);
            return a - n * ((g + v * b * y) * Math.sinh(r) + e * y * Math.cosh(r)) / e
          }
        }
        let x = {
          calculatedDuration: m && p || null,
          next: e => {
            let t = n(e);
            if (m) l.done = e >= p;
            else {
              let r = 0 === e ? g : 0;
              v < 1 && (r = 0 === e ? eW(g) : nW(n, e, t));
              let s = Math.abs(a - t) <= o;
              l.done = Math.abs(r) <= i && s
            }
            return l.value = l.done ? a : t, l
          },
          toString: () => {
            let e = Math.min(n$(x), 2e4),
              t = e9(t => x.next(e * t).value, e, 30);
            return e + "ms " + t
          },
          toTransition: () => {}
        };
        return x
      }

      function n0({
        keyframes: e,
        velocity: t = 0,
        power: n = .8,
        timeConstant: r = 325,
        bounceDamping: i = 10,
        bounceStiffness: o = 500,
        modifyTarget: s,
        min: a,
        max: l,
        restDelta: u = .5,
        restSpeed: c
      }) {
        let h, d, p = e[0],
          f = {
            done: !1,
            value: p
          },
          m = n * t,
          g = p + m,
          v = void 0 === s ? g : s(g);
        v !== g && (m = v - p);
        let y = e => -m * Math.exp(-e / r),
          b = e => v + y(e),
          w = e => {
            let t = y(e),
              n = b(e);
            f.done = Math.abs(t) <= u, f.value = f.done ? v : n
          },
          x = e => {
            let t;
            if (t = f.value, void 0 !== a && t < a || void 0 !== l && t > l) {
              var n;
              h = e, d = nQ({
                keyframes: [f.value, (n = f.value, void 0 === a ? l : void 0 === l || Math.abs(a - n) < Math.abs(l - n) ? a : l)],
                velocity: nW(b, e, f.value),
                damping: i,
                stiffness: o,
                restDelta: u,
                restSpeed: c
              })
            }
          };
        return x(0), {
          calculatedDuration: null,
          next: e => {
            let t = !1;
            return (d || void 0 !== h || (t = !0, w(e), x(e)), void 0 !== h && e >= h) ? d.next(e - h) : (t || w(e), f)
          }
        }
      }
      nQ.applyToOptions = e => {
        let t = function(e, t = 100, n) {
          let r = n({
              ...e,
              keyframes: [0, t]
            }),
            i = Math.min(n$(r), 2e4);
          return {
            type: "keyframes",
            ease: e => r.next(i * e).value / t,
            duration: i / 1e3
          }
        }(e, 100, nQ);
        return e.ease = t.ease, e.duration = eW(t.duration), e.type = "keyframes", e
      };
      let n1 = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;

      function n2(e, t, n, r) {
        return e === t && n === r ? eE : i => 0 === i || 1 === i ? i : n1(function(e, t, n, r, i) {
          let o, s, a = 0;
          do(o = n1(s = t + (n - t) / 2, r, i) - e) > 0 ? n = s : t = s; while (Math.abs(o) > 1e-7 && ++a < 12);
          return s
        }(i, 0, 1, e, n), t, r)
      }
      let n9 = n2(.42, 0, 1, 1),
        n3 = n2(0, 0, .58, 1),
        n5 = n2(.42, 0, .58, 1),
        n8 = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        n7 = e => t => 1 - e(1 - t),
        n4 = n2(.33, 1.53, .69, .99),
        n6 = n7(n4),
        re = n8(n6),
        rt = e => (e *= 2) < 1 ? .5 * n6(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
        rn = e => 1 - Math.sin(Math.acos(e)),
        rr = n7(rn),
        ri = n8(rn),
        ro = {
          linear: eE,
          easeIn: n9,
          easeInOut: n5,
          easeOut: n3,
          circIn: rn,
          circInOut: ri,
          circOut: rr,
          backIn: n6,
          backInOut: re,
          backOut: n4,
          anticipate: rt
        },
        rs = e => {
          if (e0(e)) {
            ei(4 === e.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
            let [t, n, r, i] = e;
            return n2(t, n, r, i)
          }
          return "string" == typeof e ? (ei(void 0 !== ro[e], `Invalid easing type '${e}'`, "invalid-easing-type"), ro[e]) : e
        },
        ra = (e, t, n) => {
          let r = t - e;
          return 0 === r ? 1 : (n - e) / r
        };

      function rl({
        duration: e = 300,
        keyframes: t,
        times: n,
        ease: r = "easeInOut"
      }) {
        var i;
        let o, s = Array.isArray(r) && "number" != typeof r[0] ? r.map(rs) : rs(r),
          a = {
            done: !1,
            value: t[0]
          },
          l = function(e, t, {
            clamp: n = !0,
            ease: r,
            mixer: i
          } = {}) {
            let o = e.length;
            if (ei(o === t.length, "Both input and output ranges must be the same length", "range-length"), 1 === o) return () => t[0];
            if (2 === o && t[0] === t[1]) return () => t[1];
            let s = e[0] === e[1];
            e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
            let a = function(e, t, n) {
                let r = [],
                  i = n || eC.mix || nB,
                  o = e.length - 1;
                for (let n = 0; n < o; n++) {
                  let o = i(e[n], e[n + 1]);
                  t && (o = nA(Array.isArray(t) ? t[n] || eE : t, o)), r.push(o)
                }
                return r
              }(t, r, i),
              l = a.length,
              u = n => {
                if (s && n < e[0]) return t[0];
                let r = 0;
                if (l > 1)
                  for (; r < e.length - 2 && !(n < e[r + 1]); r++);
                let i = ra(e[r], e[r + 1], n);
                return a[r](i)
              };
            return n ? t => u(c(e[0], e[o - 1], t)) : u
          }((i = n && n.length === t.length ? n : (! function(e, t) {
            let n = e[e.length - 1];
            for (let r = 1; r <= t; r++) {
              let i = ra(0, t, r);
              e.push(tO(n, 1, i))
            }
          }(o = [0], t.length - 1), o), i.map(t => t * e)), t, {
            ease: Array.isArray(s) ? s : t.map(() => s || n5).splice(0, t.length - 1)
          });
        return {
          calculatedDuration: e,
          next: t => (a.value = l(t), a.done = t >= e, a)
        }
      }
      let ru = {
        decay: n0,
        inertia: n0,
        tween: rl,
        keyframes: rl,
        spring: nQ
      };

      function rc(e) {
        "string" == typeof e.type && (e.type = ru[e.type])
      }
      let rh = e => e / 100;
      class rd extends eJ {
        constructor(e) {
          super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
            let {
              motionValue: e
            } = this.options;
            e && e.updatedAt !== tt.now() && this.tick(tt.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), this.options.onStop?.())
          }, eQ.mainThread++, this.options = e, this.initAnimation(), this.play(), !1 === e.autoplay && this.pause()
        }
        initAnimation() {
          let {
            options: e
          } = this;
          rc(e);
          let {
            type: t = rl,
            repeat: n = 0,
            repeatDelay: r = 0,
            repeatType: i,
            velocity: o = 0
          } = e, {
            keyframes: s
          } = e, a = t || rl;
          a !== rl && "number" != typeof s[0] && (this.mixKeyframes = nA(rh, nB(s[0], s[1])), s = [0, 100]);
          let l = a({
            ...e,
            keyframes: s
          });
          "mirror" === i && (this.mirroredGenerator = a({
            ...e,
            keyframes: [...s].reverse(),
            velocity: -o
          })), null === l.calculatedDuration && (l.calculatedDuration = n$(l));
          let {
            calculatedDuration: u
          } = l;
          this.calculatedDuration = u, this.resolvedDuration = u + r, this.totalDuration = this.resolvedDuration * (n + 1) - r, this.generator = l
        }
        updateTime(e) {
          let t = Math.round(e - this.startTime) * this.playbackSpeed;
          null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = t
        }
        tick(e, t = !1) {
          let {
            generator: n,
            totalDuration: r,
            mixKeyframes: i,
            mirroredGenerator: o,
            resolvedDuration: s,
            calculatedDuration: a
          } = this;
          if (null === this.startTime) return n.next(0);
          let {
            delay: l = 0,
            keyframes: u,
            repeat: h,
            repeatType: d,
            repeatDelay: p,
            type: f,
            onUpdate: m,
            finalKeyframe: g
          } = this.options;
          this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
          let v = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1),
            y = this.playbackSpeed >= 0 ? v < 0 : v > r;
          this.currentTime = Math.max(v, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = r);
          let b = this.currentTime,
            w = n;
          if (h) {
            let e = Math.min(this.currentTime, r) / s,
              t = Math.floor(e),
              n = e % 1;
            !n && e >= 1 && (n = 1), 1 === n && t--, (t = Math.min(t, h + 1)) % 2 && ("reverse" === d ? (n = 1 - n, p && (n -= p / s)) : "mirror" === d && (w = o)), b = c(0, 1, n) * s
          }
          let x = y ? {
            done: !1,
            value: u[0]
          } : w.next(b);
          i && (x.value = i(x.value));
          let {
            done: S
          } = x;
          y || null === a || (S = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
          let P = null === this.holdTime && ("finished" === this.state || "running" === this.state && S);
          return P && f !== n0 && (x.value = eZ(u, this.options, g, this.speed)), m && m(x.value), P && this.finish(), x
        }
        then(e, t) {
          return this.finished.then(e, t)
        }
        get duration() {
          return this.calculatedDuration / 1e3
        }
        get iterationDuration() {
          let {
            delay: e = 0
          } = this.options || {};
          return this.duration + e / 1e3
        }
        get time() {
          return this.currentTime / 1e3
        }
        set time(e) {
          e = eW(e), this.currentTime = e, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver?.start(!1)
        }
        get speed() {
          return this.playbackSpeed
        }
        set speed(e) {
          this.updateTime(tt.now());
          let t = this.playbackSpeed !== e;
          this.playbackSpeed = e, t && (this.time = this.currentTime / 1e3)
        }
        play() {
          if (this.isStopped) return;
          let {
            driver: e = nK,
            startTime: t
          } = this.options;
          this.driver || (this.driver = e(e => this.tick(e))), this.options.onPlay?.();
          let n = this.driver.now();
          "finished" === this.state ? (this.updateFinished(), this.startTime = n) : null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime || (this.startTime = t ?? n), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
        }
        pause() {
          this.state = "paused", this.updateTime(tt.now()), this.holdTime = this.currentTime
        }
        complete() {
          "running" !== this.state && this.play(), this.state = "finished", this.holdTime = null
        }
        finish() {
          this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.()
        }
        cancel() {
          this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.()
        }
        teardown() {
          this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, eQ.mainThread--
        }
        stopDriver() {
          this.driver && (this.driver.stop(), this.driver = void 0)
        }
        sample(e) {
          return this.startTime = 0, this.tick(e, !0)
        }
        attachTimeline(e) {
          return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this)
        }
      }
      let rp = {
        anticipate: rt,
        backInOut: re,
        circInOut: ri
      };
      class rf extends e7 {
        constructor(e) {
          ! function(e) {
            "string" == typeof e.ease && e.ease in rp && (e.ease = rp[e.ease])
          }(e), rc(e), super(e), void 0 !== e.startTime && (this.startTime = e.startTime), this.options = e
        }
        updateMotionValue(e) {
          let {
            motionValue: t,
            onUpdate: n,
            onComplete: r,
            element: i,
            ...o
          } = this.options;
          if (!t) return;
          if (void 0 !== e) return void t.set(e);
          let s = new rd({
              ...o,
              autoplay: !1
            }),
            a = Math.max(10, tt.now() - this.startTime),
            l = c(0, 10, a - 10);
          t.setWithVelocity(s.sample(Math.max(0, a - l)).value, s.sample(a).value, l), s.stop()
        }
      }
      let rm = (e, t) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (N.test(e) || "0" === e) && !e.startsWith("url("));

      function rg(e) {
        e.duration = 0, e.type = "keyframes"
      }
      let rv = new Set(["opacity", "clipPath", "filter", "transform"]),
        ry = eH(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
      class rb extends eJ {
        constructor({
          autoplay: e = !0,
          delay: t = 0,
          type: n = "keyframes",
          repeat: r = 0,
          repeatDelay: i = 0,
          repeatType: o = "loop",
          keyframes: s,
          name: a,
          motionValue: l,
          element: u,
          ...c
        }) {
          super(), this.stop = () => {
            this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel()
          }, this.createdAt = tt.now();
          const h = {
              autoplay: e,
              delay: t,
              type: n,
              repeat: r,
              repeatDelay: i,
              repeatType: o,
              name: a,
              motionValue: l,
              element: u,
              ...c
            },
            d = u?.KeyframeResolver || eU;
          this.keyframeResolver = new d(s, (e, t, n) => this.onKeyframesResolved(e, t, h, !n), a, l, u), this.keyframeResolver?.scheduleResolve()
        }
        onKeyframesResolved(e, t, n, r) {
          this.keyframeResolver = void 0;
          let {
            name: i,
            type: o,
            velocity: s,
            delay: a,
            isHandoff: l,
            onUpdate: u
          } = n;
          this.resolvedAt = tt.now(), ! function(e, t, n, r) {
            let i = e[0];
            if (null === i) return !1;
            if ("display" === t || "visibility" === t) return !0;
            let o = e[e.length - 1],
              s = rm(i, t),
              a = rm(o, t);
            return er(s === a, `You are trying to animate ${t} from "${i}" to "${o}". "${s?o:i}" is not an animatable value.`, "value-not-animatable"), !!s && !!a && (function(e) {
              let t = e[0];
              if (1 === e.length) return !0;
              for (let n = 0; n < e.length; n++)
                if (e[n] !== t) return !0
            }(e) || ("spring" === n || e8(n)) && r)
          }(e, i, o, s) && ((eC.instantAnimations || !a) && u?.(eZ(e, n, t)), e[0] = e[e.length - 1], rg(n), n.repeat = 0);
          let c = {
              startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
              finalKeyframe: t,
              ...n,
              keyframes: e
            },
            h = !l && function(e) {
              let {
                motionValue: t,
                name: n,
                repeatDelay: r,
                repeatType: i,
                damping: o,
                type: s
              } = e;
              if (!(t?.owner?.current instanceof HTMLElement)) return !1;
              let {
                onUpdate: a,
                transformTemplate: l
              } = t.owner.getProps();
              return ry() && n && rv.has(n) && ("transform" !== n || !l) && !a && !r && "mirror" !== i && 0 !== o && "inertia" !== s
            }(c),
            d = c.motionValue?.owner?.current,
            p = h ? new rf({
              ...c,
              element: d
            }) : new rd(c);
          p.finished.then(() => {
            this.notifyFinished()
          }).catch(eE), this.pendingTimeline && (this.stopTimeline = p.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = p
        }
        get finished() {
          return this._animation ? this.animation.finished : this._finished
        }
        then(e, t) {
          return this.finished.finally(e).then(() => {})
        }
        get animation() {
          return this._animation || (this.keyframeResolver?.resume(), eV = !0, eN(), eF(), eV = !1), this._animation
        }
        get duration() {
          return this.animation.duration
        }
        get iterationDuration() {
          return this.animation.iterationDuration
        }
        get time() {
          return this.animation.time
        }
        set time(e) {
          this.animation.time = e
        }
        get speed() {
          return this.animation.speed
        }
        get state() {
          return this.animation.state
        }
        set speed(e) {
          this.animation.speed = e
        }
        get startTime() {
          return this.animation.startTime
        }
        attachTimeline(e) {
          return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop()
        }
        play() {
          this.animation.play()
        }
        pause() {
          this.animation.pause()
        }
        complete() {
          this.animation.complete()
        }
        cancel() {
          this._animation && this.animation.cancel(), this.keyframeResolver?.cancel()
        }
      }
      let rw = {
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        },
        rx = {
          type: "keyframes",
          duration: .8
        },
        rS = {
          type: "keyframes",
          ease: [.25, .1, .35, 1],
          duration: .3
        },
        rP = e => null !== e,
        rT = (e, t, n, r = {}, i, o) => s => {
          let a = nT(r, e) || {},
            l = a.delay || r.delay || 0,
            {
              elapsed: c = 0
            } = r;
          c -= eW(l);
          let h = {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: "easeOut",
            velocity: t.getVelocity(),
            ...a,
            delay: -c,
            onUpdate: e => {
              t.set(e), a.onUpdate && a.onUpdate(e)
            },
            onComplete: () => {
              s(), a.onComplete && a.onComplete()
            },
            name: e,
            motionValue: t,
            element: o ? void 0 : i
          };
          ! function({
            when: e,
            delay: t,
            delayChildren: n,
            staggerChildren: r,
            staggerDirection: i,
            repeat: o,
            repeatType: s,
            repeatDelay: a,
            from: l,
            elapsed: u,
            ...c
          }) {
            return !!Object.keys(c).length
          }(a) && Object.assign(h, ((e, {
            keyframes: t
          }) => t.length > 2 ? rx : u.has(e) ? e.startsWith("scale") ? {
            type: "spring",
            stiffness: 550,
            damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
          } : rw : rS)(e, h)), h.duration && (h.duration = eW(h.duration)), h.repeatDelay && (h.repeatDelay = eW(h.repeatDelay)), void 0 !== h.from && (h.keyframes[0] = h.from);
          let d = !1;
          if (!1 !== h.type && (0 !== h.duration || h.repeatDelay) || (rg(h), 0 === h.delay && (d = !0)), (eC.instantAnimations || eC.skipAnimations || i?.shouldSkipAnimations) && (d = !0, rg(h), h.delay = 0), h.allowFlatten = !a.type && !a.ease, d && !o && void 0 !== t.get()) {
            let e = function(e, {
              repeat: t,
              repeatType: n = "loop"
            }, r) {
              let i = e.filter(rP),
                o = t && "loop" !== n && t % 2 == 1 ? 0 : i.length - 1;
              return i[o]
            }(h.keyframes, a);
            if (void 0 !== e) return void eM.update(() => {
              h.onUpdate(e), h.onComplete()
            })
          }
          return a.isSync ? new rd(h) : new rb(h)
        };

      function rk(e, t, {
        delay: n = 0,
        transitionOverride: r,
        type: i
      } = {}) {
        let {
          transition: o,
          transitionEnd: s,
          ...a
        } = t, l = e.getDefaultTransition();
        o = o ? nP(o, l) : l;
        let u = o?.reduceMotion;
        r && (o = r);
        let c = [],
          h = i && e.animationState && e.animationState.getState()[i];
        for (let t in a) {
          let r = e.getValue(t, e.latestValues[t] ?? null),
            i = a[t];
          if (void 0 === i || h && function({
              protectedKeys: e,
              needsAnimating: t
            }, n) {
              let r = e.hasOwnProperty(n) && !0 !== t[n];
              return t[n] = !1, r
            }(h, t)) continue;
          let s = {
              delay: n,
              ...nT(o || {}, t)
            },
            l = r.get();
          if (void 0 !== l && !r.isAnimating && !Array.isArray(i) && i === l && !s.velocity) continue;
          let d = !1;
          if (window.MotionHandoffAnimation) {
            let n = e.props[ng];
            if (n) {
              let e = window.MotionHandoffAnimation(n, t, eM);
              null !== e && (s.startTime = e, d = !0)
            }
          }
          nE(e, t);
          let p = u ?? e.shouldReduceMotion;
          r.start(rT(t, r, i, p && Q.has(t) ? {
            type: !1
          } : s, e, d));
          let f = r.animation;
          f && c.push(f)
        }
        if (s) {
          let t = () => eM.update(() => {
            s && function(e, t) {
              let {
                transitionEnd: n = {},
                transition: r = {},
                ...i
              } = nS(e, t) || {};
              for (let t in i = {
                  ...i,
                  ...n
                }) {
                var o;
                let n = nk(o = i[t]) ? o[o.length - 1] || 0 : o;
                e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, tr(n))
              }
            }(e, s)
          });
          c.length ? Promise.all(c).then(t) : t()
        }
        return c
      }

      function rE(e, t, n, r = 0, i = 1) {
        let o = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t),
          s = e.size,
          a = (s - 1) * r;
        return "function" == typeof n ? n(o, s) : 1 === i ? o * r : a - o * r
      }

      function rC(e, t, n = {}) {
        let r = nS(e, t, "exit" === n.type ? e.presenceContext?.custom : void 0),
          {
            transition: i = e.getDefaultTransition() || {}
          } = r || {};
        n.transitionOverride && (i = n.transitionOverride);
        let o = r ? () => Promise.all(rk(e, r, n)) : () => Promise.resolve(),
          s = e.variantChildren && e.variantChildren.size ? (r = 0) => {
            let {
              delayChildren: o = 0,
              staggerChildren: s,
              staggerDirection: a
            } = i;
            return function(e, t, n = 0, r = 0, i = 0, o = 1, s) {
              let a = [];
              for (let l of e.variantChildren) l.notify("AnimationStart", t), a.push(rC(l, t, {
                ...s,
                delay: n + ("function" == typeof r ? 0 : r) + rE(e.variantChildren, l, r, i, o)
              }).then(() => l.notify("AnimationComplete", t)));
              return Promise.all(a)
            }(e, t, r, o, s, a, n)
          } : () => Promise.resolve(),
          {
            when: a
          } = i;
        if (!a) return Promise.all([o(), s(n.delay)]);
        {
          let [e, t] = "beforeChildren" === a ? [o, s] : [s, o];
          return e().then(() => t())
        }
      }
      let rA = tu.length;

      function rR(e, t) {
        if (!Array.isArray(t)) return !1;
        let n = t.length;
        if (n !== e.length) return !1;
        for (let r = 0; r < n; r++)
          if (t[r] !== e[r]) return !1;
        return !0
      }
      let rM = [...tl].reverse(),
        rj = tl.length;

      function r_(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }

      function rI() {
        return {
          animate: r_(!0),
          whileInView: r_(),
          whileHover: r_(),
          whileTap: r_(),
          whileDrag: r_(),
          whileFocus: r_(),
          exit: r_()
        }
      }
      class rD extends nx {
        constructor(e) {
          super(e), e.animationState || (e.animationState = function(e) {
            let t = t => Promise.all(t.map(({
                animation: t,
                options: n
              }) => (function(e, t, n = {}) {
                let r;
                if (e.notify("AnimationStart", t), Array.isArray(t)) r = Promise.all(t.map(t => rC(e, t, n)));
                else if ("string" == typeof t) r = rC(e, t, n);
                else {
                  let i = "function" == typeof t ? nS(e, t, n.custom) : t;
                  r = Promise.all(rk(e, i, n))
                }
                return r.then(() => {
                  e.notify("AnimationComplete", t)
                })
              })(e, t, n))),
              n = rI(),
              r = !0,
              i = t => (n, r) => {
                let i = nS(e, r, "exit" === t ? e.presenceContext?.custom : void 0);
                if (i) {
                  let {
                    transition: e,
                    transitionEnd: t,
                    ...r
                  } = i;
                  n = {
                    ...n,
                    ...r,
                    ...t
                  }
                }
                return n
              };

            function o(o) {
              let {
                props: s
              } = e, a = function e(t) {
                if (!t) return;
                if (!t.isControllingVariants) {
                  let n = t.parent && e(t.parent) || {};
                  return void 0 !== t.props.initial && (n.initial = t.props.initial), n
                }
                let n = {};
                for (let e = 0; e < rA; e++) {
                  let r = tu[e],
                    i = t.props[r];
                  (ta(i) || !1 === i) && (n[r] = i)
                }
                return n
              }(e.parent) || {}, l = [], u = new Set, c = {}, h = 1 / 0;
              for (let t = 0; t < rj; t++) {
                var d, p;
                let f = rM[t],
                  m = n[f],
                  g = void 0 !== s[f] ? s[f] : a[f],
                  v = ta(g),
                  y = f === o ? m.isActive : null;
                !1 === y && (h = t);
                let b = g === a[f] && g !== s[f] && v;
                if (b && r && e.manuallyAnimateOnMount && (b = !1), m.protectedKeys = {
                    ...c
                  }, !m.isActive && null === y || !g && !m.prevProp || ts(g) || "boolean" == typeof g) continue;
                if ("exit" === f && m.isActive && !0 !== y) {
                  m.prevResolvedValues && (c = {
                    ...c,
                    ...m.prevResolvedValues
                  });
                  continue
                }
                let w = (d = m.prevProp, "string" == typeof(p = g) ? p !== d : !!Array.isArray(p) && !rR(p, d)),
                  x = w || f === o && m.isActive && !b && v || t > h && v,
                  S = !1,
                  P = Array.isArray(g) ? g : [g],
                  T = P.reduce(i(f), {});
                !1 === y && (T = {});
                let {
                  prevResolvedValues: k = {}
                } = m, E = {
                  ...k,
                  ...T
                }, C = t => {
                  x = !0, u.has(t) && (S = !0, u.delete(t)), m.needsAnimating[t] = !0;
                  let n = e.getValue(t);
                  n && (n.liveStyle = !1)
                };
                for (let e in E) {
                  let t = T[e],
                    n = k[e];
                  if (!c.hasOwnProperty(e))(nk(t) && nk(n) ? rR(t, n) : t === n) ? void 0 !== t && u.has(e) ? C(e) : m.protectedKeys[e] = !0 : null != t ? C(e) : u.add(e)
                }
                m.prevProp = g, m.prevResolvedValues = T, m.isActive && (c = {
                  ...c,
                  ...T
                }), r && e.blockInitialAnimation && (x = !1);
                let A = b && w,
                  R = !A || S;
                x && R && l.push(...P.map(t => {
                  let n = {
                    type: f
                  };
                  if ("string" == typeof t && r && !A && e.manuallyAnimateOnMount && e.parent) {
                    let {
                      parent: r
                    } = e, i = nS(r, t);
                    if (r.enteringChildren && i) {
                      let {
                        delayChildren: t
                      } = i.transition || {};
                      n.delay = rE(r.enteringChildren, e, t)
                    }
                  }
                  return {
                    animation: t,
                    options: n
                  }
                }))
              }
              if (u.size) {
                let t = {};
                if ("boolean" != typeof s.initial) {
                  let n = nS(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
                  n && n.transition && (t.transition = n.transition)
                }
                u.forEach(n => {
                  let r = e.getBaseTarget(n),
                    i = e.getValue(n);
                  i && (i.liveStyle = !0), t[n] = r ?? null
                }), l.push({
                  animation: t
                })
              }
              let f = !!l.length;
              return r && (!1 === s.initial || s.initial === s.animate) && !e.manuallyAnimateOnMount && (f = !1), r = !1, f ? t(l) : Promise.resolve()
            }
            return {
              animateChanges: o,
              setActive: function(t, r) {
                if (n[t].isActive === r) return Promise.resolve();
                e.variantChildren?.forEach(e => e.animationState?.setActive(t, r)), n[t].isActive = r;
                let i = o(t);
                for (let e in n) n[e].protectedKeys = {};
                return i
              },
              setAnimateFunction: function(n) {
                t = n(e)
              },
              getState: () => n,
              reset: () => {
                n = rI()
              }
            }
          }(e))
        }
        updateAnimationControlsSubscription() {
          let {
            animate: e
          } = this.node.getProps();
          ts(e) && (this.unmountControls = e.subscribe(this.node))
        }
        mount() {
          this.updateAnimationControlsSubscription()
        }
        update() {
          let {
            animate: e
          } = this.node.getProps(), {
            animate: t
          } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription()
        }
        unmount() {
          this.node.animationState.reset(), this.unmountControls?.()
        }
      }
      let rO = 0;
      class rL extends nx {
        constructor() {
          super(...arguments), this.id = rO++
        }
        update() {
          if (!this.node.presenceContext) return;
          let {
            isPresent: e,
            onExitComplete: t
          } = this.node.presenceContext, {
            isPresent: n
          } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          let r = this.node.animationState.setActive("exit", !e);
          t && !e && r.then(() => {
            t(this.id)
          })
        }
        mount() {
          let {
            register: e,
            onExitComplete: t
          } = this.node.presenceContext || {};
          t && t(this.id), e && (this.unmount = e(this.id))
        }
        unmount() {}
      }
      let rV = {
        x: !1,
        y: !1
      };

      function rF(e) {
        return [e("x"), e("y")]
      }

      function rN(e) {
        return e.max - e.min
      }

      function rU(e, t, n, r = .5) {
        e.origin = r, e.originPoint = tO(t.min, t.max, e.origin), e.scale = rN(n) / rN(t), e.translate = tO(n.min, n.max, e.origin) - e.originPoint, (e.scale >= .9999 && e.scale <= 1.0001 || isNaN(e.scale)) && (e.scale = 1), (e.translate >= -.01 && e.translate <= .01 || isNaN(e.translate)) && (e.translate = 0)
      }

      function rB(e, t, n, r) {
        rU(e.x, t.x, n.x, r ? r.originX : void 0), rU(e.y, t.y, n.y, r ? r.originY : void 0)
      }

      function rK(e, t, n) {
        e.min = n.min + t.min, e.max = e.min + rN(t)
      }

      function r$(e, t, n) {
        e.min = t.min - n.min, e.max = e.min + rN(t)
      }

      function rW(e, t, n) {
        r$(e.x, t.x, n.x), r$(e.y, t.y, n.y)
      }
      let rG = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        rq = new Set(["INPUT", "SELECT", "TEXTAREA"]);

      function rz(e, t, n, r = {
        passive: !0
      }) {
        return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
      }

      function rH(e) {
        return "object" == typeof e && null !== e
      }

      function rX(e) {
        return rH(e) && "ownerSVGElement" in e
      }

      function rY(e, t, n) {
        if (null == e) return [];
        if (e instanceof EventTarget) return [e];
        if ("string" == typeof e) {
          let r = document;
          t && (r = t.current);
          let i = n?.[e] ?? r.querySelectorAll(e);
          return i ? Array.from(i) : []
        }
        return Array.from(e).filter(e => null != e)
      }
      let rZ = new WeakMap,
        rJ = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : rX(r) && "getBBox" in r ? r.getBBox()[t] : r[n],
        rQ = rJ("inline", "width", "offsetWidth"),
        r0 = rJ("block", "height", "offsetHeight");

      function r1({
        target: e,
        borderBoxSize: t
      }) {
        rZ.get(e)?.forEach(n => {
          n(e, {
            get width() {
              return rQ(e, t)
            },
            get height() {
              return r0(e, t)
            }
          })
        })
      }

      function r2(e) {
        e.forEach(r1)
      }
      let r9 = new Set;

      function r3(e, t) {
        let n;
        return "function" == typeof e ? (r9.add(e), o || (o = () => {
          let e = {
            get width() {
              return window.innerWidth
            },
            get height() {
              return window.innerHeight
            }
          };
          r9.forEach(t => t(e))
        }, window.addEventListener("resize", o)), () => {
          r9.delete(e), r9.size || "function" != typeof o || (window.removeEventListener("resize", o), o = void 0)
        }) : (!i && "u" > typeof ResizeObserver && (i = new ResizeObserver(r2)), (n = rY(e)).forEach(e => {
          let n = rZ.get(e);
          n || (n = new Set, rZ.set(e, n)), n.add(t), i?.observe(e)
        }), () => {
          n.forEach(e => {
            let n = rZ.get(e);
            n?.delete(t), n?.size || i?.unobserve(e)
          })
        })
      }
      let r5 = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary;

      function r8(e) {
        return {
          point: {
            x: e.pageX,
            y: e.pageY
          }
        }
      }

      function r7(e, t, n, r) {
        return rz(e, t, e => r5(e) && n(e, r8(e)), r)
      }
      let r4 = ({
          current: e
        }) => e ? e.ownerDocument.defaultView : null,
        r6 = (e, t) => Math.abs(e - t),
        ie = new Set(["auto", "scroll"]);
      class it {
        constructor(e, t, {
          transformPagePoint: n,
          contextWindow: r = window,
          dragSnapToOrigin: i = !1,
          distanceThreshold: o = 3,
          element: s
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = e => {
              this.handleScroll(e.target)
            }, this.onWindowScroll = () => {
              this.handleScroll(window)
            }, this.updatePoint = () => {
              var e, t;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let n = io(this.lastMoveEventInfo, this.history),
                r = null !== this.startEvent,
                i = (e = n.offset, t = {
                  x: 0,
                  y: 0
                }, Math.sqrt(r6(e.x, t.x) ** 2 + r6(e.y, t.y) ** 2) >= this.distanceThreshold);
              if (!r && !i) return;
              let {
                point: o
              } = n, {
                timestamp: s
              } = e_;
              this.history.push({
                ...o,
                timestamp: s
              });
              let {
                onStart: a,
                onMove: l
              } = this.handlers;
              r || (a && a(this.lastMoveEvent, n), this.startEvent = this.lastMoveEvent), l && l(this.lastMoveEvent, n)
            }, this.handlePointerMove = (e, t) => {
              this.lastMoveEvent = e, this.lastMoveEventInfo = ir(t, this.transformPagePoint), eM.update(this.updatePoint, !0)
            }, this.handlePointerUp = (e, t) => {
              this.end();
              let {
                onEnd: n,
                onSessionEnd: r,
                resumeAnimation: i
              } = this.handlers;
              if ((this.dragSnapToOrigin || !this.startEvent) && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let o = io("pointercancel" === e.type ? this.lastMoveEventInfo : ir(t, this.transformPagePoint), this.history);
              this.startEvent && n && n(e, o), r && r(e, o)
            }, !r5(e)) return;
          this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.distanceThreshold = o, this.contextWindow = r || window;
          const a = ir(r8(e), this.transformPagePoint),
            {
              point: l
            } = a,
            {
              timestamp: u
            } = e_;
          this.history = [{
            ...l,
            timestamp: u
          }];
          const {
            onSessionStart: c
          } = t;
          c && c(e, io(a, this.history)), this.removeListeners = nA(r7(this.contextWindow, "pointermove", this.handlePointerMove), r7(this.contextWindow, "pointerup", this.handlePointerUp), r7(this.contextWindow, "pointercancel", this.handlePointerUp)), s && this.startScrollTracking(s)
        }
        startScrollTracking(e) {
          let t = e.parentElement;
          for (; t;) {
            let e = getComputedStyle(t);
            (ie.has(e.overflowX) || ie.has(e.overflowY)) && this.scrollPositions.set(t, {
              x: t.scrollLeft,
              y: t.scrollTop
            }), t = t.parentElement
          }
          this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
          }), window.addEventListener("scroll", this.onElementScroll, {
            capture: !0,
            passive: !0
          }), window.addEventListener("scroll", this.onWindowScroll, {
            passive: !0
          }), this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
              capture: !0
            }), window.removeEventListener("scroll", this.onWindowScroll)
          }
        }
        handleScroll(e) {
          let t = this.scrollPositions.get(e);
          if (!t) return;
          let n = e === window,
            r = n ? {
              x: window.scrollX,
              y: window.scrollY
            } : {
              x: e.scrollLeft,
              y: e.scrollTop
            },
            i = {
              x: r.x - t.x,
              y: r.y - t.y
            };
          (0 !== i.x || 0 !== i.y) && (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i.x, this.lastMoveEventInfo.point.y += i.y) : this.history.length > 0 && (this.history[0].x -= i.x, this.history[0].y -= i.y), this.scrollPositions.set(e, r), eM.update(this.updatePoint, !0))
        }
        updateHandlers(e) {
          this.handlers = e
        }
        end() {
          this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), ej(this.updatePoint)
        }
      }

      function ir(e, t) {
        return t ? {
          point: t(e.point)
        } : e
      }

      function ii(e, t) {
        return {
          x: e.x - t.x,
          y: e.y - t.y
        }
      }

      function io({
        point: e
      }, t) {
        return {
          point: e,
          delta: ii(e, is(t)),
          offset: ii(e, t[0]),
          velocity: function(e, t) {
            if (e.length < 2) return {
              x: 0,
              y: 0
            };
            let n = e.length - 1,
              r = null,
              i = is(e);
            for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > eW(.1)));) n--;
            if (!r) return {
              x: 0,
              y: 0
            };
            r === e[0] && e.length > 2 && i.timestamp - r.timestamp > 2 * eW(.1) && (r = e[1]);
            let o = (i.timestamp - r.timestamp) / 1e3;
            if (0 === o) return {
              x: 0,
              y: 0
            };
            let s = {
              x: (i.x - r.x) / o,
              y: (i.y - r.y) / o
            };
            return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
          }(t, .1)
        }
      }

      function is(e) {
        return e[e.length - 1]
      }

      function ia(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
        }
      }

      function il(e, t) {
        let n = t.min - e.min,
          r = t.max - e.max;
        return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
          min: n,
          max: r
        }
      }

      function iu(e, t, n) {
        return {
          min: ic(e, t),
          max: ic(e, n)
        }
      }

      function ic(e, t) {
        return "number" == typeof e ? e : e[t] || 0
      }
      let ih = new WeakMap;
      class id {
        constructor(e) {
          this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Z(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e
        }
        start(e, {
          snapToCursor: t = !1,
          distanceThreshold: n
        } = {}) {
          let {
            presenceContext: r
          } = this.visualElement;
          if (r && !1 === r.isPresent) return;
          let i = e => {
              t && this.snapToCursor(r8(e).point), this.stopAnimation()
            },
            o = (e, t) => {
              let {
                drag: n,
                dragPropagation: r,
                onDragStart: i
              } = this.getProps();
              if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = function(e) {
                  if ("x" === e || "y" === e)
                    if (rV[e]) return null;
                    else return rV[e] = !0, () => {
                      rV[e] = !1
                    };
                  return rV.x || rV.y ? null : (rV.x = rV.y = !0, () => {
                    rV.x = rV.y = !1
                  })
                }(n), !this.openDragLock)) return;
              this.latestPointerEvent = e, this.latestPanInfo = t, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), rF(e => {
                let t = this.getAxisMotionValue(e).get() || 0;
                if (T.test(t)) {
                  let {
                    projection: n
                  } = this.visualElement;
                  if (n && n.layout) {
                    let r = n.layout.layoutBox[e];
                    r && (t = rN(r) * (parseFloat(t) / 100))
                  }
                }
                this.originPoint[e] = t
              }), i && eM.update(() => i(e, t), !1, !0), nE(this.visualElement, "transform");
              let {
                animationState: o
              } = this.visualElement;
              o && o.setActive("whileDrag", !0)
            },
            s = (e, t) => {
              this.latestPointerEvent = e, this.latestPanInfo = t;
              let {
                dragPropagation: n,
                dragDirectionLock: r,
                onDirectionLock: i,
                onDrag: o
              } = this.getProps();
              if (!n && !this.openDragLock) return;
              let {
                offset: s
              } = t;
              if (r && null === this.currentDirection) {
                this.currentDirection = function(e, t = 10) {
                  let n = null;
                  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
                }(s), null !== this.currentDirection && i && i(this.currentDirection);
                return
              }
              this.updateAxis("x", t.point, s), this.updateAxis("y", t.point, s), this.visualElement.render(), o && eM.update(() => o(e, t), !1, !0)
            },
            a = (e, t) => {
              this.latestPointerEvent = e, this.latestPanInfo = t, this.stop(e, t), this.latestPointerEvent = null, this.latestPanInfo = null
            },
            l = () => {
              let {
                dragSnapToOrigin: e
              } = this.getProps();
              (e || this.constraints) && this.startAnimation({
                x: 0,
                y: 0
              })
            },
            {
              dragSnapToOrigin: u
            } = this.getProps();
          this.panSession = new it(e, {
            onSessionStart: i,
            onStart: o,
            onMove: s,
            onSessionEnd: a,
            resumeAnimation: l
          }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            distanceThreshold: n,
            contextWindow: r4(this.visualElement),
            element: this.visualElement.current
          })
        }
        stop(e, t) {
          let n = e || this.latestPointerEvent,
            r = t || this.latestPanInfo,
            i = this.isDragging;
          if (this.cancel(), !i || !r || !n) return;
          let {
            velocity: o
          } = r;
          this.startAnimation(o);
          let {
            onDragEnd: s
          } = this.getProps();
          s && eM.postRender(() => s(n, r))
        }
        cancel() {
          this.isDragging = !1;
          let {
            projection: e,
            animationState: t
          } = this.visualElement;
          e && (e.isAnimationBlocked = !1), this.endPanSession();
          let {
            dragPropagation: n
          } = this.getProps();
          !n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t && t.setActive("whileDrag", !1)
        }
        endPanSession() {
          this.panSession && this.panSession.end(), this.panSession = void 0
        }
        updateAxis(e, t, n) {
          let {
            drag: r
          } = this.getProps();
          if (!n || !im(e, r, this.currentDirection)) return;
          let i = this.getAxisMotionValue(e),
            o = this.originPoint[e] + n[e];
          this.constraints && this.constraints[e] && (o = function(e, {
            min: t,
            max: n
          }, r) {
            return void 0 !== t && e < t ? e = r ? tO(t, e, r.min) : Math.max(e, t) : void 0 !== n && e > n && (e = r ? tO(n, e, r.max) : Math.min(e, n)), e
          }(o, this.constraints[e], this.elastic[e])), i.set(o)
        }
        resolveConstraints() {
          let {
            dragConstraints: e,
            dragElastic: t
          } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, r = this.constraints;
          e && ny(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(e, {
            top: t,
            left: n,
            bottom: r,
            right: i
          }) {
            return {
              x: ia(e.x, n, i),
              y: ia(e.y, t, r)
            }
          }(n.layoutBox, e) : this.constraints = !1, this.elastic = function(e = .35) {
            return !1 === e ? e = 0 : !0 === e && (e = .35), {
              x: iu(e, "left", "right"),
              y: iu(e, "top", "bottom")
            }
          }(t), r !== this.constraints && !ny(e) && n && this.constraints && !this.hasMutatedConstraints && rF(e => {
            var t, r;
            let i;
            !1 !== this.constraints && this.getAxisMotionValue(e) && (this.constraints[e] = (t = n.layoutBox[e], r = this.constraints[e], i = {}, void 0 !== r.min && (i.min = r.min - t.min), void 0 !== r.max && (i.max = r.max - t.min), i))
          })
        }
        resolveRefConstraints() {
          var e;
          let {
            dragConstraints: t,
            onMeasureDragConstraints: n
          } = this.getProps();
          if (!t || !ny(t)) return !1;
          let r = t.current;
          ei(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
          let {
            projection: i
          } = this.visualElement;
          if (!i || !i.layout) return !1;
          let o = function(e, t, n) {
              let r = tJ(e, n),
                {
                  scroll: i
                } = t;
              return i && (tX(r.x, i.offset.x), tX(r.y, i.offset.y)), r
            }(r, i.root, this.visualElement.getTransformPagePoint()),
            s = (e = i.layout.layoutBox, {
              x: il(e.x, o.x),
              y: il(e.y, o.y)
            });
          if (n) {
            let e = n(function({
              x: e,
              y: t
            }) {
              return {
                top: t.min,
                right: e.max,
                bottom: t.max,
                left: e.min
              }
            }(s));
            this.hasMutatedConstraints = !!e, e && (s = tB(e))
          }
          return s
        }
        startAnimation(e) {
          let {
            drag: t,
            dragMomentum: n,
            dragElastic: r,
            dragTransition: i,
            dragSnapToOrigin: o,
            onDragTransitionEnd: s
          } = this.getProps(), a = this.constraints || {};
          return Promise.all(rF(s => {
            if (!im(s, t, this.currentDirection)) return;
            let l = a && a[s] || {};
            o && (l = {
              min: 0,
              max: 0
            });
            let u = {
              type: "inertia",
              velocity: n ? e[s] : 0,
              bounceStiffness: r ? 200 : 1e6,
              bounceDamping: r ? 40 : 1e7,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...l
            };
            return this.startAxisValueAnimation(s, u)
          })).then(s)
        }
        startAxisValueAnimation(e, t) {
          let n = this.getAxisMotionValue(e);
          return nE(this.visualElement, e), n.start(rT(e, n, 0, t, this.visualElement, !1))
        }
        stopAnimation() {
          rF(e => this.getAxisMotionValue(e).stop())
        }
        getAxisMotionValue(e) {
          let t = `_drag${e.toUpperCase()}`,
            n = this.visualElement.getProps();
          return n[t] || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
        }
        snapToCursor(e) {
          rF(t => {
            let {
              drag: n
            } = this.getProps();
            if (!im(t, n, this.currentDirection)) return;
            let {
              projection: r
            } = this.visualElement, i = this.getAxisMotionValue(t);
            if (r && r.layout) {
              let {
                min: n,
                max: o
              } = r.layout.layoutBox[t], s = i.get() || 0;
              i.set(e[t] - tO(n, o, .5) + s)
            }
          })
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let {
            drag: e,
            dragConstraints: t
          } = this.getProps(), {
            projection: n
          } = this.visualElement;
          if (!ny(t) || !n || !this.constraints) return;
          this.stopAnimation();
          let r = {
            x: 0,
            y: 0
          };
          rF(e => {
            let t = this.getAxisMotionValue(e);
            if (t && !1 !== this.constraints) {
              var n, i;
              let o, s, a, l = t.get();
              r[e] = (n = {
                min: l,
                max: l
              }, i = this.constraints[e], o = .5, s = rN(n), (a = rN(i)) > s ? o = ra(i.min, i.max - s, n.min) : s > a && (o = ra(n.min, n.max - a, i.min)), c(0, 1, o))
            }
          });
          let {
            transformTemplate: i
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), rF(t => {
            if (!im(t, e, null)) return;
            let n = this.getAxisMotionValue(t),
              {
                min: i,
                max: o
              } = this.constraints[t];
            n.set(tO(i, o, r[t]))
          }), this.visualElement.render()
        }
        addListeners() {
          let e;
          if (!this.visualElement.current) return;
          ih.set(this.visualElement, this);
          let t = this.visualElement.current,
            n = r7(t, "pointerdown", e => {
              let {
                drag: n,
                dragListener: r = !0
              } = this.getProps(), i = e.target, o = i !== t && (rq.has(i.tagName) || !0 === i.isContentEditable);
              n && r && !o && this.start(e)
            }),
            r = () => {
              var n, r, i;
              let o, s, {
                dragConstraints: a
              } = this.getProps();
              ny(a) && a.current && (this.constraints = this.resolveRefConstraints(), e || (n = t, r = a.current, o = r3(n, ip(i = () => this.scalePositionWithinConstraints())), s = r3(r, ip(i)), e = () => {
                o(), s()
              }))
            },
            {
              projection: i
            } = this.visualElement,
            o = i.addEventListener("measure", r);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), eM.read(r);
          let s = rz(window, "resize", () => this.scalePositionWithinConstraints()),
            a = i.addEventListener("didUpdate", ({
              delta: e,
              hasLayoutChanged: t
            }) => {
              this.isDragging && t && (rF(t => {
                let n = this.getAxisMotionValue(t);
                n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate))
              }), this.visualElement.render())
            });
          return () => {
            s(), n(), o(), a && a(), e && e()
          }
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: n = !1,
              dragPropagation: r = !1,
              dragConstraints: i = !1,
              dragElastic: o = .35,
              dragMomentum: s = !0
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: n,
            dragPropagation: r,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: s
          }
        }
      }

      function ip(e) {
        let t = !0;
        return () => {
          if (t) {
            t = !1;
            return
          }
          e()
        }
      }

      function im(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e)
      }
      class ig extends nx {
        constructor(e) {
          super(e), this.removeGroupControls = eE, this.removeListeners = eE, this.controls = new id(e)
        }
        mount() {
          let {
            dragControls: e
          } = this.node.getProps();
          e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || eE
        }
        update() {
          let {
            dragControls: e
          } = this.node.getProps(), {
            dragControls: t
          } = this.node.prevProps || {};
          e !== t && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)))
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession()
        }
      }
      let iv = e => (t, n) => {
        e && eM.update(() => e(t, n), !1, !0)
      };
      class iy extends nx {
        constructor() {
          super(...arguments), this.removePointerDownListener = eE
        }
        onPointerDown(e) {
          this.session = new it(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: r4(this.node)
          })
        }
        createPanHandlers() {
          let {
            onPanSessionStart: e,
            onPanStart: t,
            onPan: n,
            onPanEnd: r
          } = this.node.getProps();
          return {
            onSessionStart: iv(e),
            onStart: iv(t),
            onMove: iv(n),
            onEnd: (e, t) => {
              delete this.session, r && eM.postRender(() => r(e, t))
            }
          }
        }
        mount() {
          this.removePointerDownListener = r7(this.node.current, "pointerdown", e => this.onPointerDown(e))
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers())
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end()
        }
      }
      let ib = {
          hasAnimatedSinceResize: !0,
          hasEverUpdated: !1
        },
        iw = !1;
      class ix extends t1.Component {
        componentDidMount() {
          let {
            visualElement: e,
            layoutGroup: t,
            switchLayoutGroup: n,
            layoutId: r
          } = this.props, {
            projection: i
          } = e;
          i && (t.group && t.group.add(i), n && n.register && r && n.register(i), iw && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
            this.safeToRemove()
          }), i.setOptions({
            ...i.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
          })), ib.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(e) {
          let {
            layoutDependency: t,
            visualElement: n,
            drag: r,
            isPresent: i
          } = this.props, {
            projection: o
          } = n;
          return o && (o.isPresent = i, e.layoutDependency !== t && o.setOptions({
            ...o.options,
            layoutDependency: t
          }), iw = !0, r || e.layoutDependency !== t || void 0 === t || e.isPresent !== i ? o.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? o.promote() : o.relegate() || eM.postRender(() => {
            let e = o.getStack();
            e && e.members.length || this.safeToRemove()
          }))), null
        }
        componentDidUpdate() {
          let {
            projection: e
          } = this.props.visualElement;
          e && (e.root.didUpdate(), e6.postRender(() => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
          }))
        }
        componentWillUnmount() {
          let {
            visualElement: e,
            layoutGroup: t,
            switchLayoutGroup: n
          } = this.props, {
            projection: r
          } = e;
          iw = !0, r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r))
        }
        safeToRemove() {
          let {
            safeToRemove: e
          } = this.props;
          e && e()
        }
        render() {
          return null
        }
      }

      function iS(e) {
        let [t, n] = function(e = !0) {
          let t = (0, t1.useContext)(na);
          if (null === t) return [!0, null];
          let {
            isPresent: n,
            onExitComplete: r,
            register: i
          } = t, o = (0, t1.useId)();
          (0, t1.useEffect)(() => {
            if (e) return i(o)
          }, [e]);
          let s = (0, t1.useCallback)(() => e && r && r(o), [o, r, e]);
          return !n && r ? [!1, s] : [!0]
        }(), r = (0, t1.useContext)(t5);
        return (0, t3.jsx)(ix, {
          ...e,
          layoutGroup: r,
          switchLayoutGroup: (0, t1.useContext)(nv),
          isPresent: t,
          safeToRemove: n
        })
      }
      let iP = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        iT = iP.length,
        ik = e => "string" == typeof e ? parseFloat(e) : e,
        iE = e => "number" == typeof e || k.test(e);

      function iC(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius
      }
      let iA = iM(0, .5, rr),
        iR = iM(.5, .95, eE);

      function iM(e, t, n) {
        return r => r < e ? 0 : r > t ? 1 : n(ra(e, t, r))
      }

      function ij(e, t) {
        e.min = t.min, e.max = t.max
      }

      function i_(e, t) {
        ij(e.x, t.x), ij(e.y, t.y)
      }

      function iI(e, t) {
        e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
      }

      function iD(e, t, n, r, i) {
        return e -= t, e = r + 1 / n * (e - r), void 0 !== i && (e = r + 1 / i * (e - r)), e
      }

      function iO(e, t, [n, r, i], o, s) {
        ! function(e, t = 0, n = 1, r = .5, i, o = e, s = e) {
          if (T.test(t) && (t = parseFloat(t), t = tO(s.min, s.max, t / 100) - s.min), "number" != typeof t) return;
          let a = tO(o.min, o.max, r);
          e === o && (a -= t), e.min = iD(e.min, t, n, a, i), e.max = iD(e.max, t, n, a, i)
        }(e, t[n], t[r], t[i], t.scale, o, s)
      }
      let iL = ["x", "scaleX", "originX"],
        iV = ["y", "scaleY", "originY"];

      function iF(e, t, n, r) {
        iO(e.x, t, iL, n ? n.x : void 0, r ? r.x : void 0), iO(e.y, t, iV, n ? n.y : void 0, r ? r.y : void 0)
      }

      function iN(e) {
        return 0 === e.translate && 1 === e.scale
      }

      function iU(e) {
        return iN(e.x) && iN(e.y)
      }

      function iB(e, t) {
        return e.min === t.min && e.max === t.max
      }

      function iK(e, t) {
        return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
      }

      function i$(e, t) {
        return iK(e.x, t.x) && iK(e.y, t.y)
      }

      function iW(e) {
        return rN(e.x) / rN(e.y)
      }

      function iG(e, t) {
        return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
      }
      class iq {
        constructor() {
          this.members = []
        }
        add(e) {
          eG(this.members, e);
          for (let t = this.members.length - 1; t >= 0; t--) {
            let n = this.members[t];
            if (n === e || n === this.lead || n === this.prevLead) continue;
            let r = n.instance;
            r && !1 === r.isConnected && !1 !== n.isPresent && !n.snapshot && eq(this.members, n)
          }
          e.scheduleRender()
        }
        remove(e) {
          if (eq(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e)
          }
        }
        relegate(e) {
          let t, n = this.members.findIndex(t => e === t);
          if (0 === n) return !1;
          for (let e = n; e >= 0; e--) {
            let n = this.members[e],
              r = n.instance;
            if (!1 !== n.isPresent && (!r || !1 !== r.isConnected)) {
              t = n;
              break
            }
          }
          return !!t && (this.promote(t), !0)
        }
        promote(e, t) {
          let n = this.lead;
          if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
            n.instance && n.scheduleRender(), e.scheduleRender();
            let r = n.options.layoutDependency,
              i = e.options.layoutDependency;
            if (void 0 === r || void 0 === i || r !== i) {
              let r = n.instance;
              !(r && !1 === r.isConnected && !n.snapshot) && (e.resumeFrom = n, t && (e.resumeFrom.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0))
            }
            let {
              crossfade: o
            } = e.options;
            !1 === o && n.hide()
          }
        }
        exitAnimationComplete() {
          this.members.forEach(e => {
            let {
              options: t,
              resumingFrom: n
            } = e;
            t.onExitComplete && t.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete()
          })
        }
        scheduleRender() {
          this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
          })
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
        }
      }
      let iz = (e, t) => e.depth - t.depth;
      class iH {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(e) {
          eG(this.children, e), this.isDirty = !0
        }
        remove(e) {
          eq(this.children, e), this.isDirty = !0
        }
        forEach(e) {
          this.isDirty && this.children.sort(iz), this.isDirty = !1, this.children.forEach(e)
        }
      }
      let iX = ["", "X", "Y", "Z"],
        iY = 0;

      function iZ(e, t, n, r) {
        let {
          latestValues: i
        } = t;
        i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0))
      }

      function iJ({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: n,
        checkIsScrollRoot: r,
        resetTransform: i
      }) {
        return class {
          constructor(e = {}, n = t?.()) {
            this.id = iY++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              this.projectionUpdateScheduled = !1, this.nodes.forEach(i1), this.nodes.forEach(i4), this.nodes.forEach(i6), this.nodes.forEach(i2)
            }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
            for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new iH)
          }
          addEventListener(e, t) {
            return this.eventHandlers.has(e) || this.eventHandlers.set(e, new ez), this.eventHandlers.get(e).add(t)
          }
          notifyListeners(e, ...t) {
            let n = this.eventHandlers.get(e);
            n && n.notify(...t)
          }
          hasListeners(e) {
            return this.eventHandlers.has(e)
          }
          mount(t) {
            if (this.instance) return;
            this.isSVG = rX(t) && !(rX(t) && "svg" === t.tagName), this.instance = t;
            let {
              layoutId: n,
              layout: r,
              visualElement: i
            } = this.options;
            if (i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0), e) {
              let n, r = 0,
                i = () => this.root.updateBlockedByResize = !1;
              eM.read(() => {
                r = window.innerWidth
              }), e(t, () => {
                let e = window.innerWidth;
                if (e !== r) {
                  let t, o;
                  r = e, this.root.updateBlockedByResize = !0, n && n(), t = tt.now(), o = ({
                    timestamp: e
                  }) => {
                    let n = e - t;
                    n >= 250 && (ej(o), i(n - 250))
                  }, eM.setup(o, !0), n = () => ej(o), ib.hasAnimatedSinceResize && (ib.hasAnimatedSinceResize = !1, this.nodes.forEach(i7))
                }
              })
            }
            n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && i && (n || r) && this.addEventListener("didUpdate", ({
              delta: e,
              hasLayoutChanged: t,
              hasRelativeLayoutChanged: n,
              layout: r
            }) => {
              if (this.isTreeAnimationBlocked()) {
                this.target = void 0, this.relativeTarget = void 0;
                return
              }
              let o = this.options.transition || i.getDefaultTransition() || oo,
                {
                  onLayoutAnimationStart: s,
                  onLayoutAnimationComplete: a
                } = i.getProps(),
                l = !this.targetLayout || !i$(this.targetLayout, r),
                u = !t && n;
              if (this.options.layoutRoot || this.resumeFrom || u || t && (l || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                let t = {
                  ...nT(o, "layout"),
                  onPlay: s,
                  onComplete: a
                };
                (i.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t), this.setAnimationOrigin(e, u)
              } else t || i7(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
              this.targetLayout = r
            })
          }
          unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            let e = this.getStack();
            e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), ej(this.updateProjection)
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
          }
          isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
          }
          startUpdate() {
            !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(oe), this.animationId++)
          }
          getTransformTemplate() {
            let {
              visualElement: e
            } = this.options;
            return e && e.getProps().transformTemplate
          }
          willUpdate(e = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
              this.options.onExitComplete && this.options.onExitComplete();
              return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function e(t) {
                if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
                let {
                  visualElement: n
                } = t.options;
                if (!n) return;
                let r = n.props[ng];
                if (window.MotionHasOptimisedAnimation(r, "transform")) {
                  let {
                    layout: e,
                    layoutId: n
                  } = t.options;
                  window.MotionCancelOptimisedAnimation(r, "transform", eM, !(e || n))
                }
                let {
                  parent: i
                } = t;
                i && !i.hasCheckedOptimisedAppear && e(i)
              }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              let t = this.path[e];
              t.shouldResetTransform = !0, t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1)
            }
            let {
              layoutId: t,
              layout: n
            } = this.options;
            if (void 0 === t && !n) return;
            let r = this.getTransformTemplate();
            this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate")
          }
          update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
              this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(i3);
              return
            }
            if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(i5);
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(i8), this.nodes.forEach(iQ), this.nodes.forEach(i0)) : this.nodes.forEach(i5), this.clearAllSnapshots();
            let e = tt.now();
            e_.delta = c(0, 1e3 / 60, e - e_.timestamp), e_.timestamp = e, e_.isProcessing = !0, eI.update.process(e_), eI.preRender.process(e_), eI.render.process(e_), e_.isProcessing = !1
          }
          didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, e6.read(this.scheduleUpdate))
          }
          clearAllSnapshots() {
            this.nodes.forEach(i9), this.sharedNodes.forEach(ot)
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, eM.preRender(this.updateProjection, !1, !0))
          }
          scheduleCheckAfterUnmount() {
            eM.postRender(() => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || rN(this.snapshot.measuredBox.x) || rN(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
          }
          updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
            let e = this.layout;
            this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected = Z(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            let {
              visualElement: t
            } = this.options;
            t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0)
          }
          updateScroll(e = "measure") {
            let t = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && this.instance) {
              let t = r(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: e,
                isRoot: t,
                offset: n(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : t
              }
            }
          }
          resetTransform() {
            if (!i) return;
            let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
              t = this.projectionDelta && !iU(this.projectionDelta),
              n = this.getTransformTemplate(),
              r = n ? n(this.latestValues, "") : void 0,
              o = r !== this.prevTransformTemplateValue;
            e && this.instance && (t || tW(this.latestValues) || o) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(e = !0) {
            var t;
            let n = this.measurePageBox(),
              r = this.removeElementScroll(n);
            return e && (r = this.removeTransform(r)), ol((t = r).x), ol(t.y), {
              animationId: this.root.animationId,
              measuredBox: n,
              layoutBox: r,
              latestValues: {},
              source: this.id
            }
          }
          measurePageBox() {
            let {
              visualElement: e
            } = this.options;
            if (!e) return Z();
            let t = e.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(oc))) {
              let {
                scroll: e
              } = this.root;
              e && (tX(t.x, e.offset.x), tX(t.y, e.offset.y))
            }
            return t
          }
          removeElementScroll(e) {
            let t = Z();
            if (i_(t, e), this.scroll?.wasRoot) return t;
            for (let n = 0; n < this.path.length; n++) {
              let r = this.path[n],
                {
                  scroll: i,
                  options: o
                } = r;
              r !== this.root && i && o.layoutScroll && (i.wasRoot && i_(t, e), tX(t.x, i.offset.x), tX(t.y, i.offset.y))
            }
            return t
          }
          applyTransform(e, t = !1) {
            let n = Z();
            i_(n, e);
            for (let e = 0; e < this.path.length; e++) {
              let r = this.path[e];
              !t && r.options.layoutScroll && r.scroll && r !== r.root && tZ(n, {
                x: -r.scroll.offset.x,
                y: -r.scroll.offset.y
              }), tW(r.latestValues) && tZ(n, r.latestValues)
            }
            return tW(this.latestValues) && tZ(n, this.latestValues), n
          }
          removeTransform(e) {
            let t = Z();
            i_(t, e);
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e];
              if (!n.instance || !tW(n.latestValues)) continue;
              t$(n.latestValues) && n.updateSnapshot();
              let r = Z();
              i_(r, n.measurePageBox()), iF(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r)
            }
            return tW(this.latestValues) && iF(t, this.latestValues), t
          }
          setTargetDelta(e) {
            this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade
            }
          }
          clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== e_.timestamp && this.relativeParent.resolveTargetDelta(!0)
          }
          resolveTargetDelta(e = !1) {
            let t = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = t.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = t.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = t.isSharedProjectionDirty);
            let n = !!this.resumingFrom || this !== t;
            if (!(e || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            let {
              layout: r,
              layoutId: i
            } = this.options;
            if (!this.layout || !(r || i)) return;
            this.resolvedRelativeTargetAt = e_.timestamp;
            let o = this.getClosestProjectingParent();
            if (o && this.linkedParentVersion !== o.layoutVersion && !o.options.layoutRoot && this.removeRelativeTarget(), this.targetDelta || this.relativeTarget || (o && o.layout ? this.createRelativeTarget(o, this.layout.layoutBox, o.layout.layoutBox) : this.removeRelativeTarget()), this.relativeTarget || this.targetDelta) {
              if (this.target || (this.target = Z(), this.targetWithTransforms = Z()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
                var s, a, l;
                this.forceRelativeParentToResolveTarget(), s = this.target, a = this.relativeTarget, l = this.relativeParent.target, rK(s.x, a.x, l.x), rK(s.y, a.y, l.y)
              } else this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : i_(this.target, this.layout.layoutBox), tH(this.target, this.targetDelta)) : i_(this.target, this.layout.layoutBox);
              this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, o && !!o.resumingFrom == !!this.resumingFrom && !o.options.layoutScroll && o.target && 1 !== this.animationProgress ? this.createRelativeTarget(o, this.target, o.target) : this.relativeParent = this.relativeTarget = void 0)
            }
          }
          getClosestProjectingParent() {
            if (!(!this.parent || t$(this.parent.latestValues) || tG(this.parent.latestValues)))
              if (this.parent.isProjecting()) return this.parent;
              else return this.parent.getClosestProjectingParent()
          }
          isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
          }
          createRelativeTarget(e, t, n) {
            this.relativeParent = e, this.linkedParentVersion = e.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Z(), this.relativeTargetOrigin = Z(), rW(this.relativeTargetOrigin, t, n), i_(this.relativeTarget, this.relativeTargetOrigin)
          }
          removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
          }
          calcProjection() {
            let e = this.getLead(),
              t = !!this.resumingFrom || this !== e,
              n = !0;
            if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === e_.timestamp && (n = !1), n) return;
            let {
              layout: r,
              layoutId: i
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || i)) return;
            i_(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              s = this.treeScale.y;
            ! function(e, t, n, r = !1) {
              let i, o, s = n.length;
              if (s) {
                t.x = t.y = 1;
                for (let a = 0; a < s; a++) {
                  o = (i = n[a]).projectionDelta;
                  let {
                    visualElement: s
                  } = i.options;
                  (!s || !s.props.style || "contents" !== s.props.style.display) && (r && i.options.layoutScroll && i.scroll && i !== i.root && tZ(e, {
                    x: -i.scroll.offset.x,
                    y: -i.scroll.offset.y
                  }), o && (t.x *= o.x.scale, t.y *= o.y.scale, tH(e, o)), r && tW(i.latestValues) && tZ(e, i.latestValues))
                }
                t.x < 1.0000000000001 && t.x > .999999999999 && (t.x = 1), t.y < 1.0000000000001 && t.y > .999999999999 && (t.y = 1)
              }
            }(this.layoutCorrected, this.treeScale, this.path, t), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox, e.targetWithTransforms = Z());
            let {
              target: a
            } = e;
            if (!a) {
              this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
              return
            }
            this.projectionDelta && this.prevProjectionDelta ? (iI(this.prevProjectionDelta.x, this.projectionDelta.x), iI(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), rB(this.projectionDelta, this.layoutCorrected, a, this.latestValues), this.treeScale.x === o && this.treeScale.y === s && iG(this.projectionDelta.x, this.prevProjectionDelta.x) && iG(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", a))
          }
          hide() {
            this.isVisible = !1
          }
          show() {
            this.isVisible = !0
          }
          scheduleRender(e = !0) {
            if (this.options.visualElement?.scheduleRender(), e) {
              let e = this.getStack();
              e && e.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
          }
          createProjectionDeltas() {
            this.prevProjectionDelta = X(), this.projectionDelta = X(), this.projectionDeltaWithTransform = X()
          }
          setAnimationOrigin(e, t = !1) {
            let n, r = this.snapshot,
              i = r ? r.latestValues : {},
              o = {
                ...this.latestValues
              },
              s = X();
            this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
            let a = Z(),
              l = (r ? r.source : void 0) !== (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              c = !u || u.members.length <= 1,
              h = !!(l && !c && !0 === this.options.crossfade && !this.path.some(oi));
            this.animationProgress = 0, this.mixTargetDelta = t => {
              let r = t / 1e3;
              if (on(s.x, e.x, r), on(s.y, e.y, r), this.setTargetDelta(s), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                var u, d, p, f, m, g;
                rW(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), p = this.relativeTarget, f = this.relativeTargetOrigin, m = a, g = r, or(p.x, f.x, m.x, g), or(p.y, f.y, m.y, g), n && (u = this.relativeTarget, d = n, iB(u.x, d.x) && iB(u.y, d.y)) && (this.isProjectionDirty = !1), n || (n = Z()), i_(n, this.relativeTarget)
              }
              l && (this.animationValues = o, function(e, t, n, r, i, o) {
                i ? (e.opacity = tO(0, n.opacity ?? 1, iA(r)), e.opacityExit = tO(t.opacity ?? 1, 0, iR(r))) : o && (e.opacity = tO(t.opacity ?? 1, n.opacity ?? 1, r));
                for (let i = 0; i < iT; i++) {
                  let o = `border${iP[i]}Radius`,
                    s = iC(t, o),
                    a = iC(n, o);
                  (void 0 !== s || void 0 !== a) && (s || (s = 0), a || (a = 0), 0 === s || 0 === a || iE(s) === iE(a) ? (e[o] = Math.max(tO(ik(s), ik(a), r), 0), (T.test(a) || T.test(s)) && (e[o] += "%")) : e[o] = a)
                }(t.rotate || n.rotate) && (e.rotate = tO(t.rotate || 0, n.rotate || 0, r))
              }(o, i, this.latestValues, r, h, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = r
            }, this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
          }
          startAnimation(e) {
            this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (ej(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = eM.update(() => {
              var t, n, r;
              let i;
              ib.hasAnimatedSinceResize = !0, eQ.layout++, this.motionValue || (this.motionValue = tr(0)), this.currentAnimation = (t = this.motionValue, n = [0, 1e3], r = {
                ...e,
                velocity: 0,
                isSync: !0,
                onUpdate: t => {
                  this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t)
                },
                onStop: () => {
                  eQ.layout--
                },
                onComplete: () => {
                  eQ.layout--, e.onComplete && e.onComplete(), this.completeAnimation()
                }
              }, (i = J(t) ? t : tr(t)).start(rT("", i, n, r)), i.animation), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
          }
          completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            let e = this.getStack();
            e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
          }
          finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
          }
          applyTransformsToTarget() {
            let e = this.getLead(),
              {
                targetWithTransforms: t,
                target: n,
                layout: r,
                latestValues: i
              } = e;
            if (t && n && r) {
              if (this !== e && this.layout && r && ou(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                n = this.target || Z();
                let t = rN(this.layout.layoutBox.x);
                n.x.min = e.target.x.min, n.x.max = n.x.min + t;
                let r = rN(this.layout.layoutBox.y);
                n.y.min = e.target.y.min, n.y.max = n.y.min + r
              }
              i_(t, n), tZ(t, i), rB(this.projectionDeltaWithTransform, this.layoutCorrected, t, i)
            }
          }
          registerSharedNode(e, t) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new iq), this.sharedNodes.get(e).add(t);
            let n = t.options.initialPromotionConfig;
            t.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
            })
          }
          isLead() {
            let e = this.getStack();
            return !e || e.lead === this
          }
          getLead() {
            let {
              layoutId: e
            } = this.options;
            return e && this.getStack()?.lead || this
          }
          getPrevLead() {
            let {
              layoutId: e
            } = this.options;
            return e ? this.getStack()?.prevLead : void 0
          }
          getStack() {
            let {
              layoutId: e
            } = this.options;
            if (e) return this.root.sharedNodes.get(e)
          }
          promote({
            needsReset: e,
            transition: t,
            preserveFollowOpacity: n
          } = {}) {
            let r = this.getStack();
            r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({
              transition: t
            })
          }
          relegate() {
            let e = this.getStack();
            return !!e && e.relegate(this)
          }
          resetSkewAndRotation() {
            let {
              visualElement: e
            } = this.options;
            if (!e) return;
            let t = !1,
              {
                latestValues: n
              } = e;
            if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0), !t) return;
            let r = {};
            n.z && iZ("z", e, r, this.animationValues);
            for (let t = 0; t < iX.length; t++) iZ(`rotate${iX[t]}`, e, r, this.animationValues), iZ(`skew${iX[t]}`, e, r, this.animationValues);
            for (let t in e.render(), r) e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]);
            e.scheduleRender()
          }
          applyProjectionStyles(e, t) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
              e.visibility = "hidden";
              return
            }
            let n = this.getTransformTemplate();
            if (this.needsReset) {
              this.needsReset = !1, e.visibility = "", e.opacity = "", e.pointerEvents = ns(t?.pointerEvents) || "", e.transform = n ? n(this.latestValues, "") : "none";
              return
            }
            let r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
              this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = ns(t?.pointerEvents) || ""), this.hasProjected && !tW(this.latestValues) && (e.transform = n ? n({}, "") : "none", this.hasProjected = !1);
              return
            }
            e.visibility = "";
            let i = r.animationValues || r.latestValues;
            this.applyTransformsToTarget();
            let o = function(e, t, n) {
              let r = "",
                i = e.x.translate / t.x,
                o = e.y.translate / t.y,
                s = n?.z || 0;
              if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `), (1 !== t.x || 1 !== t.y) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
                let {
                  transformPerspective: e,
                  rotate: t,
                  rotateX: i,
                  rotateY: o,
                  skewX: s,
                  skewY: a
                } = n;
                e && (r = `perspective(${e}px) ${r}`), t && (r += `rotate(${t}deg) `), i && (r += `rotateX(${i}deg) `), o && (r += `rotateY(${o}deg) `), s && (r += `skewX(${s}deg) `), a && (r += `skewY(${a}deg) `)
              }
              let a = e.x.scale * t.x,
                l = e.y.scale * t.y;
              return (1 !== a || 1 !== l) && (r += `scale(${a}, ${l})`), r || "none"
            }(this.projectionDeltaWithTransform, this.treeScale, i);
            n && (o = n(i, o)), e.transform = o;
            let {
              x: s,
              y: a
            } = this.projectionDelta;
            for (let t in e.transformOrigin = `${100*s.origin}% ${100*a.origin}% 0`, r.animationValues ? e.opacity = r === this ? i.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : e.opacity = r === this ? void 0 !== i.opacity ? i.opacity : "" : void 0 !== i.opacityExit ? i.opacityExit : 0, tL) {
              if (void 0 === i[t]) continue;
              let {
                correct: n,
                applyTo: s,
                isCSSVariable: a
              } = tL[t], l = "none" === o ? i[t] : n(i[t], r);
              if (s) {
                let t = s.length;
                for (let n = 0; n < t; n++) e[s[n]] = l
              } else a ? this.options.visualElement.renderState.vars[t] = l : e[t] = l
            }
            this.options.layoutId && (e.pointerEvents = r === this ? ns(t?.pointerEvents) || "" : "none")
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach(e => e.currentAnimation?.stop()), this.root.nodes.forEach(i3), this.root.sharedNodes.clear()
          }
        }
      }

      function iQ(e) {
        e.updateLayout()
      }

      function i0(e) {
        let t = e.resumeFrom?.snapshot || e.snapshot;
        if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
          let {
            layoutBox: n,
            measuredBox: r
          } = e.layout, {
            animationType: i
          } = e.options, o = t.source !== e.layout.source;
          "size" === i ? rF(e => {
            let r = o ? t.measuredBox[e] : t.layoutBox[e],
              i = rN(r);
            r.min = n[e].min, r.max = r.min + i
          }) : ou(i, t.layoutBox, n) && rF(r => {
            let i = o ? t.measuredBox[r] : t.layoutBox[r],
              s = rN(n[r]);
            i.max = i.min + s, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + s)
          });
          let s = X();
          rB(s, n, t.layoutBox);
          let a = X();
          o ? rB(a, e.applyTransform(r, !0), t.measuredBox) : rB(a, n, t.layoutBox);
          let l = !iU(s),
            u = !1;
          if (!e.resumeFrom) {
            let r = e.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
              let {
                snapshot: i,
                layout: o
              } = r;
              if (i && o) {
                let s = Z();
                rW(s, t.layoutBox, i.layoutBox);
                let a = Z();
                rW(a, n, o.layoutBox), i$(s, a) || (u = !0), r.options.layoutRoot && (e.relativeTarget = a, e.relativeTargetOrigin = s, e.relativeParent = r)
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: n,
            snapshot: t,
            delta: a,
            layoutDelta: s,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: u
          })
        } else if (e.isLead()) {
          let {
            onExitComplete: t
          } = e.options;
          t && t()
        }
        e.options.transition = void 0
      }

      function i1(e) {
        e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
      }

      function i2(e) {
        e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
      }

      function i9(e) {
        e.clearSnapshot()
      }

      function i3(e) {
        e.clearMeasurements()
      }

      function i5(e) {
        e.isLayoutDirty = !1
      }

      function i8(e) {
        let {
          visualElement: t
        } = e.options;
        t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
      }

      function i7(e) {
        e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
      }

      function i4(e) {
        e.resolveTargetDelta()
      }

      function i6(e) {
        e.calcProjection()
      }

      function oe(e) {
        e.resetSkewAndRotation()
      }

      function ot(e) {
        e.removeLeadSnapshot()
      }

      function on(e, t, n) {
        e.translate = tO(t.translate, 0, n), e.scale = tO(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
      }

      function or(e, t, n, r) {
        e.min = tO(t.min, n.min, r), e.max = tO(t.max, n.max, r)
      }

      function oi(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit
      }
      let oo = {
          duration: .45,
          ease: [.4, 0, .1, 1]
        },
        os = e => "u" > typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
        oa = os("applewebkit/") && !os("chrome/") ? Math.round : eE;

      function ol(e) {
        e.min = oa(e.min), e.max = oa(e.max)
      }

      function ou(e, t, n) {
        return "position" === e || "preserve-aspect" === e && !(.2 >= Math.abs(iW(t) - iW(n)))
      }

      function oc(e) {
        return e !== e.root && e.scroll?.wasRoot
      }
      let oh = iJ({
          attachResizeListener: (e, t) => rz(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
            y: document.documentElement.scrollTop || document.body?.scrollTop || 0
          }),
          checkIsScrollRoot: () => !0
        }),
        od = {
          current: void 0
        },
        op = iJ({
          measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
          }),
          defaultParent: () => {
            if (!od.current) {
              let e = new oh({});
              e.mount(window), e.setOptions({
                layoutScroll: !0
              }), od.current = e
            }
            return od.current
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none"
          },
          checkIsScrollRoot: e => "fixed" === window.getComputedStyle(e).position
        });

      function of(e, t) {
        let n = rY(e),
          r = new AbortController;
        return [n, {
          passive: !0,
          ...t,
          signal: r.signal
        }, () => r.abort()]
      }

      function om(e, t, n) {
        let {
          props: r
        } = e;
        e.animationState && r.whileHover && e.animationState.setActive("whileHover", "Start" === n);
        let i = r["onHover" + n];
        i && eM.postRender(() => i(t, r8(t)))
      }
      class og extends nx {
        mount() {
          let {
            current: e
          } = this.node;
          e && (this.unmount = function(e, t, n = {}) {
            let [r, i, o] = of(e, n);
            return r.forEach(e => {
              let n, r = !1,
                o = !1,
                s = t => {
                  n && (n(t), n = void 0), e.removeEventListener("pointerleave", l)
                },
                a = e => {
                  r = !1, window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", a), o && (o = !1, s(e))
                },
                l = e => {
                  if ("touch" !== e.pointerType) {
                    if (r) {
                      o = !0;
                      return
                    }
                    s(e)
                  }
                };
              e.addEventListener("pointerenter", r => {
                if ("touch" === r.pointerType || rV.x || rV.y) return;
                o = !1;
                let s = t(e, r);
                "function" == typeof s && (n = s, e.addEventListener("pointerleave", l, i))
              }, i), e.addEventListener("pointerdown", () => {
                r = !0, window.addEventListener("pointerup", a, i), window.addEventListener("pointercancel", a, i)
              }, i)
            }), o
          }(e, (e, t) => (om(this.node, t, "Start"), e => om(this.node, e, "End"))))
        }
        unmount() {}
      }
      class ov extends nx {
        constructor() {
          super(...arguments), this.isActive = !1
        }
        onFocus() {
          let e = !1;
          try {
            e = this.node.current.matches(":focus-visible")
          } catch (t) {
            e = !0
          }
          e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
        }
        onBlur() {
          this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
        }
        mount() {
          this.unmount = nA(rz(this.node.current, "focus", () => this.onFocus()), rz(this.node.current, "blur", () => this.onBlur()))
        }
        unmount() {}
      }
      let oy = (e, t) => !!t && (e === t || oy(e, t.parentElement)),
        ob = new WeakSet;

      function ow(e) {
        return t => {
          "Enter" === t.key && e(t)
        }
      }

      function ox(e, t) {
        e.dispatchEvent(new PointerEvent("pointer" + t, {
          isPrimary: !0,
          bubbles: !0
        }))
      }

      function oS(e) {
        return r5(e) && !(rV.x || rV.y)
      }
      let oP = new WeakSet;

      function oT(e, t, n) {
        let {
          props: r
        } = e;
        if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
        e.animationState && r.whileTap && e.animationState.setActive("whileTap", "Start" === n);
        let i = r["onTap" + ("End" === n ? "" : n)];
        i && eM.postRender(() => i(t, r8(t)))
      }
      class ok extends nx {
        mount() {
          let {
            current: e
          } = this.node;
          if (!e) return;
          let {
            globalTapTarget: t,
            propagate: n
          } = this.node.props;
          this.unmount = function(e, t, n = {}) {
            let [r, i, o] = of(e, n), s = e => {
              let r = e.currentTarget;
              if (!oS(e) || oP.has(e)) return;
              ob.add(r), n.stopPropagation && oP.add(e);
              let o = t(r, e),
                s = (e, t) => {
                  window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", l), ob.has(r) && ob.delete(r), oS(e) && "function" == typeof o && o(e, {
                    success: t
                  })
                },
                a = e => {
                  s(e, r === window || r === document || n.useGlobalTarget || oy(r, e.target))
                },
                l = e => {
                  s(e, !1)
                };
              window.addEventListener("pointerup", a, i), window.addEventListener("pointercancel", l, i)
            };
            return r.forEach(e => {
              (n.useGlobalTarget ? window : e).addEventListener("pointerdown", s, i), rH(e) && "offsetHeight" in e && (e.addEventListener("focus", e => ((e, t) => {
                let n = e.currentTarget;
                if (!n) return;
                let r = ow(() => {
                  if (ob.has(n)) return;
                  ox(n, "down");
                  let e = ow(() => {
                    ox(n, "up")
                  });
                  n.addEventListener("keyup", e, t), n.addEventListener("blur", () => ox(n, "cancel"), t)
                });
                n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
              })(e, i)), rG.has(e.tagName) || !0 === e.isContentEditable || e.hasAttribute("tabindex") || (e.tabIndex = 0))
            }), o
          }(e, (e, t) => (oT(this.node, t, "Start"), (e, {
            success: t
          }) => oT(this.node, e, t ? "End" : "Cancel")), {
            useGlobalTarget: t,
            stopPropagation: n?.tap === !1
          })
        }
        unmount() {}
      }
      let oE = new WeakMap,
        oC = new WeakMap,
        oA = e => {
          let t = oE.get(e.target);
          t && t(e)
        },
        oR = e => {
          e.forEach(oA)
        },
        oM = {
          some: 0,
          all: 1
        };
      class oj extends nx {
        constructor() {
          super(...arguments), this.hasEnteredView = !1, this.isInView = !1
        }
        startObserver() {
          var e;
          let t;
          this.unmount();
          let {
            viewport: n = {}
          } = this.node.getProps(), {
            root: r,
            margin: i,
            amount: o = "some",
            once: s
          } = n, a = {
            root: r ? r.current : void 0,
            rootMargin: i,
            threshold: "number" == typeof o ? o : oM[o]
          }, l = e => {
            let {
              isIntersecting: t
            } = e;
            if (this.isInView === t || (this.isInView = t, s && !t && this.hasEnteredView)) return;
            t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
            let {
              onViewportEnter: n,
              onViewportLeave: r
            } = this.node.getProps(), i = t ? n : r;
            i && i(e)
          };
          return e = this.node.current, t = function({
            root: e,
            ...t
          }) {
            let n = e || document;
            oC.has(n) || oC.set(n, {});
            let r = oC.get(n),
              i = JSON.stringify(t);
            return r[i] || (r[i] = new IntersectionObserver(oR, {
              root: e,
              ...t
            })), r[i]
          }(a), oE.set(e, l), t.observe(e), () => {
            oE.delete(e), t.unobserve(e)
          }
        }
        mount() {
          this.startObserver()
        }
        update() {
          if ("u" < typeof IntersectionObserver) return;
          let {
            props: e,
            prevProps: t
          } = this.node;
          ["amount", "margin", "root"].some(function({
            viewport: e = {}
          }, {
            viewport: t = {}
          } = {}) {
            return n => e[n] !== t[n]
          }(e, t)) && this.startObserver()
        }
        unmount() {}
      }
      let o_ = function(e, t) {
        if ("u" < typeof Proxy) return nw;
        let n = new Map,
          r = (n, r) => nw(n, r, e, t);
        return new Proxy((e, t) => r(e, t), {
          get: (i, o) => "create" === o ? r : (n.has(o) || n.set(o, nw(o, void 0, e, t)), n.get(o))
        })
      }({
        animation: {
          Feature: rD
        },
        exit: {
          Feature: rL
        },
        inView: {
          Feature: oj
        },
        tap: {
          Feature: ok
        },
        focus: {
          Feature: ov
        },
        hover: {
          Feature: og
        },
        pan: {
          Feature: iy
        },
        drag: {
          Feature: ig,
          ProjectionNode: op,
          MeasureLayout: iS
        },
        layout: {
          ProjectionNode: op,
          MeasureLayout: iS
        }
      }, (e, t) => t.isSVG ?? t9(e) ? new tU(t) : new tQ(t, {
        allowProjection: e !== t1.Fragment
      }))
    },
    20024: e => {
      e.exports = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    22158: (e, t, n) => {
      var r = n(3137);
      e.exports = function(e, t) {
        ";" !== (e = r.trimRight(e))[e.length - 1] && (e += ";");
        var n = e.length,
          i = !1,
          o = 0,
          s = 0,
          a = "";

        function l() {
          if (!i) {
            var n = r.trim(e.slice(o, s)),
              l = n.indexOf(":");
            if (-1 !== l) {
              var u = r.trim(n.slice(0, l)),
                c = r.trim(n.slice(l + 1));
              if (u) {
                var h = t(o, a.length, u, c, n);
                h && (a += h + "; ")
              }
            }
          }
          o = s + 1
        }
        for (; s < n; s++) {
          var u = e[s];
          if ("/" === u && "*" === e[s + 1]) {
            var c = e.indexOf("*/", s + 2);
            if (-1 === c) break;
            o = (s = c + 1) + 1, i = !1
          } else "(" === u ? i = !0 : ")" === u ? i = !1 : ";" === u ? i || l() : "\n" === u && l()
        }
        return r.trim(a)
      }
    },
    22326: (e, t, n) => {
      var r = n(50643),
        i = n(72481),
        o = n(99766),
        s = n(27451);
      e.exports = function(e) {
        return r(e) || i(e) || o(e) || s()
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    23769: (e, t, n) => {
      "use strict";
      var r = n(20024);
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i = r(n(90961)),
        o = r(n(48303)),
        s = r(n(88927)),
        a = r(n(8262)),
        l = r(n(70780)),
        u = r(n(35129)),
        c = function(e) {
          (0, s.default)(r, e);
          var t, n = (t = function() {
            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
              return !1
            }
          }(), function() {
            var e, n = (0, l.default)(r);
            return e = t ? Reflect.construct(n, arguments, (0, l.default)(this).constructor) : n.apply(this, arguments), (0, a.default)(this, e)
          });

          function r() {
            return (0, o.default)(this, r), n.apply(this, arguments)
          }
          return (0, i.default)(r)
        }(r(n(10393)).default);
      t.default = c, (0, u.default)(c, "elementClassName", "CardElement")
    },
    23833: (e, t, n) => {
      e.exports = n(40043)()
    },
    24066: () => {},
    24082: e => {
      function t(n) {
        return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n)
      }
      e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    25298: (e, t, n) => {
      "use strict";
      var r = n(20024);
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = t.RISK_STRATEGIES = void 0;
      var i = r(n(48303)),
        o = r(n(90961)),
        s = r(n(88927)),
        a = r(n(8262)),
        l = r(n(70780)),
        u = r(n(35129)),
        c = r(n(12115)),
        h = r(n(23833)),
        d = n(88627),
        p = ["kount"];
      t.RISK_STRATEGIES = p;
      var f = function(e) {
        (0, s.default)(r, e);
        var t, n = (t = function() {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
          } catch (e) {
            return !1
          }
        }(), function() {
          var e, n = (0, l.default)(r);
          return e = t ? Reflect.construct(n, arguments, (0, l.default)(this).constructor) : n.apply(this, arguments), (0, a.default)(this, e)
        });

        function r(e, t) {
          var o;
          if ((0, i.default)(this, r), o = n.call(this, e, t), !t || !t.recurly) throw Error("<RiskDataCollector> must be within a <RecurlyProvider> tree.");
          return o._container = c.default.createRef(), o._recurly = o.context.recurly, o
        }
        return (0, o.default)(r, [{
          key: "componentDidMount",
          value: function() {
            var e = this._container,
              t = this._recurly,
              n = this.props,
              r = n.strategy,
              i = n.onError;
            t.configure({
              fraud: (0, u.default)({}, r, {
                dataCollector: !0,
                form: e.current
              })
            }), (this._fraud = t.fraud).on("error", function() {
              return i.apply(void 0, arguments)
            })
          }
        }, {
          key: "render",
          value: function() {
            return c.default.createElement("div", {
              id: this.props.id,
              className: this.props.className,
              ref: this._container
            })
          }
        }]), r
      }(c.default.Component);
      t.default = f, (0, u.default)(f, "propTypes", {
        id: h.default.string,
        className: h.default.string,
        strategy: h.default.oneOf(p),
        onError: h.default.func
      }), (0, u.default)(f, "defaultProps", {
        id: void 0,
        className: void 0,
        strategy: p[0],
        onError: function(e) {
          throw e
        }
      }), (0, u.default)(f, "contextType", d.RecurlyContext)
    },
    25454: (e, t, n) => {
      "use strict";
      n.d(t, {
        Ay: () => F
      });
      var r = n(12115);
      let i = (e, t, n) => {
          let r = document.createElement(e),
            [i, o] = Array.isArray(t) ? [void 0, t] : [t, n];
          return i && Object.assign(r, i), null == o || o.forEach(e => r.appendChild(e)), r
        },
        o = String.raw,
        s = (() => {
          try {
            document.createElement("div").animate({
              opacity: 0
            }, {
              easing: "linear(0, 1)"
            })
          } catch {
            return !1
          }
          return !0
        })(),
        a = "u" > typeof CSS && CSS.supports && CSS.supports("line-height", "mod(1,1)"),
        l = "u" > typeof matchMedia ? matchMedia("(prefers-reduced-motion: reduce)") : null,
        u = "--_number-flow-d-opacity",
        c = "--_number-flow-d-width",
        h = "--_number-flow-dx",
        d = "--_number-flow-d",
        p = (() => {
          try {
            return CSS.registerProperty({
              name: u,
              syntax: "<number>",
              inherits: !1,
              initialValue: "0"
            }), CSS.registerProperty({
              name: h,
              syntax: "<length>",
              inherits: !0,
              initialValue: "0px"
            }), CSS.registerProperty({
              name: c,
              syntax: "<number>",
              inherits: !1,
              initialValue: "0"
            }), CSS.registerProperty({
              name: d,
              syntax: "<number>",
              inherits: !0,
              initialValue: "0"
            }), !0
          } catch {
            return !1
          }
        })(),
        f = "var(--number-flow-char-height, 1em)",
        m = "var(--number-flow-mask-height, 0.25em)",
        g = `calc(${m} / 2)`,
        v = "var(--number-flow-mask-width, 0.5em)",
        y = `calc(${v} / var(--scale-x))`,
        b = "#000 0, transparent 71%",
        w = o`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:${f} !important}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${c}) / var(--width));transform:translateX(var(${h})) scaleX(var(--scale-x));margin:0 calc(-1 * ${v});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${y},#000 calc(100% - ${y}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${m},#000 calc(100% - ${m}),transparent 100% ),radial-gradient(at bottom right,${b}),radial-gradient(at bottom left,${b}),radial-gradient(at top left,${b}),radial-gradient(at top right,${b});-webkit-mask-size:100% calc(100% - ${m} * 2),calc(100% - ${y} * 2) 100%,${y} ${m},${y} ${m},${y} ${m},${y} ${m};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${g} ${v};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${h})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${d})}.digit__num,.number .section::after{padding:${g} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${u}))}`,
        x = HTMLElement,
        S = (o`:host{display:inline-block;direction:ltr;white-space:nowrap;line-height:${f} !important}span{display:inline-block}:host([data-will-change]) span{will-change:transform}.number,.digit{padding:${g} 0}.symbol{white-space:pre}`, a && s && p);
      class P extends x {
        constructor() {
          super(), this.created = !1, this.batched = !1;
          const {
            animated: e,
            ...t
          } = this.constructor.defaultProps;
          this._animated = this.computedAnimated = e, Object.assign(this, t)
        }
        get animated() {
          return this._animated
        }
        set animated(e) {
          var t;
          this.animated !== e && (this._animated = e, null == (t = this.shadowRoot) || t.getAnimations().forEach(e => e.finish()))
        }
        set data(e) {
          var t;
          if (null == e) return;
          let {
            pre: n,
            integer: r,
            fraction: i,
            post: o,
            value: s
          } = e;
          if (this.created) {
            let a = this._data;
            this._data = e, this.computedTrend = "function" == typeof this.trend ? this.trend(a.value, s) : this.trend, this.computedAnimated = S && this._animated && (!this.respectMotionPreference || !(null != l && l.matches)) && this.offsetWidth > 0 && this.offsetHeight > 0, null == (t = this.plugins) || t.forEach(t => {
              var n;
              return null == (n = t.onUpdate) ? void 0 : n.call(t, e, a, this)
            }), this.batched || this.willUpdate(), this._pre.update(n), this._num.update({
              integer: r,
              fraction: i
            }), this._post.update(o), this.batched || this.didUpdate()
          } else {
            this._data = e, this.attachShadow({
              mode: "open"
            });
            try {
              this._internals ?? (this._internals = this.attachInternals()), this._internals.role = "img"
            } catch {}
            let t = document.createElement("style");
            t.textContent = w, this.shadowRoot.appendChild(t), this._pre = new C(this, n, {
              justify: "right",
              part: "left"
            }), this.shadowRoot.appendChild(this._pre.el), this._num = new T(this, r, i), this.shadowRoot.appendChild(this._num.el), this._post = new C(this, o, {
              justify: "left",
              part: "right"
            }), this.shadowRoot.appendChild(this._post.el), this.created = !0
          }
          try {
            this._internals.ariaLabel = e.valueAsString
          } catch {}
        }
        willUpdate() {
          this._pre.willUpdate(), this._num.willUpdate(), this._post.willUpdate()
        }
        didUpdate() {
          if (!this.computedAnimated) return;
          this._abortAnimationsFinish ? this._abortAnimationsFinish.abort() : this.dispatchEvent(new Event("animationsstart")), this._pre.didUpdate(), this._num.didUpdate(), this._post.didUpdate();
          let e = new AbortController;
          Promise.all(this.shadowRoot.getAnimations().map(e => e.finished)).then(() => {
            e.signal.aborted || (this.dispatchEvent(new Event("animationsfinish")), this._abortAnimationsFinish = void 0)
          }), this._abortAnimationsFinish = e
        }
      }
      P.defaultProps = {
        transformTiming: {
          duration: 900,
          easing: "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)"
        },
        spinTiming: void 0,
        opacityTiming: {
          duration: 450,
          easing: "ease-out"
        },
        animated: !0,
        trend: (e, t) => Math.sign(t - e),
        respectMotionPreference: !0,
        plugins: void 0,
        digits: void 0
      };
      class T {
        constructor(e, t, n, {
          className: r,
          ...o
        } = {}) {
          this.flow = e, this._integer = new E(e, t, {
            justify: "right",
            part: "integer"
          }), this._fraction = new E(e, n, {
            justify: "left",
            part: "fraction"
          }), this._inner = i("span", {
            className: "number__inner"
          }, [this._integer.el, this._fraction.el]), this.el = i("span", {
            ...o,
            part: "number",
            className: `number ${r??""}`
          }, [this._inner])
        }
        willUpdate() {
          this._prevWidth = this.el.offsetWidth, this._prevLeft = this.el.getBoundingClientRect().left, this._integer.willUpdate(), this._fraction.willUpdate()
        }
        update({
          integer: e,
          fraction: t
        }) {
          this._integer.update(e), this._fraction.update(t)
        }
        didUpdate() {
          let e = this.el.getBoundingClientRect();
          this._integer.didUpdate(), this._fraction.didUpdate();
          let t = this._prevLeft - e.left,
            n = this.el.offsetWidth,
            r = this._prevWidth - n;
          this.el.style.setProperty("--width", String(n)), this.el.animate({
            [h]: [`${t}px`, "0px"],
            [c]: [r, 0]
          }, {
            ...this.flow.transformTiming,
            composite: "accumulate"
          })
        }
      }
      class k {
        constructor(e, t, {
          justify: n,
          className: r,
          ...o
        }, s) {
          this.flow = e, this.children = new Map, this.onCharRemove = e => () => {
            this.children.delete(e)
          }, this.justify = n;
          const a = t.map(e => this.addChar(e).el);
          this.el = i("span", {
            ...o,
            className: `section section--justify-${n} ${r??""}`
          }, s ? s(a) : a)
        }
        addChar(e, {
          startDigitsAtZero: t = !1,
          ...n
        } = {}) {
          let r = "integer" === e.type || "fraction" === e.type ? new M(this, e.type, t ? 0 : e.value, e.pos, {
            ...n,
            onRemove: this.onCharRemove(e.key)
          }) : new j(this, e.type, e.value, {
            ...n,
            onRemove: this.onCharRemove(e.key)
          });
          return this.children.set(e.key, r), r
        }
        unpop(e) {
          e.el.removeAttribute("inert"), e.el.style.top = "", e.el.style[this.justify] = ""
        }
        pop(e) {
          e.forEach(e => {
            var t, n;
            e.el.style.top = `${e.el.offsetTop}px`, e.el.style[this.justify] = `${t=e.el,"left"===this.justify?t.offsetLeft:((null==(n=t.offsetParent instanceof HTMLElement?t.offsetParent:null)?void 0:n.offsetWidth)??0)-t.offsetWidth-t.offsetLeft}px`
          }), e.forEach(e => {
            e.el.setAttribute("inert", ""), e.present = !1
          })
        }
        addNewAndUpdateExisting(e) {
          let t = new Map,
            n = new Map,
            r = "left" === this.justify,
            i = r ? "prepend" : "append";
          if (function(e, t, {
              reverse: n = !1
            } = {}) {
              let r = e.length;
              for (let i = n ? r - 1 : 0; n ? i >= 0 : i < r; n ? i-- : i++) t(e[i], i)
            }(e, e => {
              let r;
              this.children.has(e.key) ? (r = this.children.get(e.key), n.set(e, r), this.unpop(r), r.present = !0) : (r = this.addChar(e, {
                startDigitsAtZero: !0,
                animateIn: !0
              }), t.set(e, r)), this.el[i](r.el)
            }, {
              reverse: r
            }), this.flow.computedAnimated) {
            let e = this.el.getBoundingClientRect();
            t.forEach(t => {
              t.willUpdate(e)
            })
          }
          t.forEach((e, t) => {
            e.update(t.value)
          }), n.forEach((e, t) => {
            e.update(t.value)
          })
        }
        willUpdate() {
          let e = this.el.getBoundingClientRect();
          this._prevOffset = e[this.justify], this.children.forEach(t => t.willUpdate(e))
        }
        didUpdate() {
          let e = this.el.getBoundingClientRect();
          this.children.forEach(t => t.didUpdate(e));
          let t = e[this.justify],
            n = this._prevOffset - t;
          n && this.children.size && this.el.animate({
            transform: [`translateX(${n}px)`, "none"]
          }, {
            ...this.flow.transformTiming,
            composite: "accumulate"
          })
        }
      }
      class E extends k {
        update(e) {
          let t = new Map;
          this.children.forEach((n, r) => {
            e.find(e => e.key === r) || t.set(r, n), this.unpop(n)
          }), this.addNewAndUpdateExisting(e), t.forEach(e => {
            e instanceof M && e.update(0)
          }), this.pop(t)
        }
      }
      class C extends k {
        update(e) {
          let t = new Map;
          this.children.forEach((n, r) => {
            e.find(e => e.key === r) || t.set(r, n)
          }), this.pop(t), this.addNewAndUpdateExisting(e)
        }
      }
      class A {
        constructor(e, t, {
          onRemove: n,
          animateIn: r = !1
        } = {}) {
          this.flow = e, this.el = t, this._present = !0, this._remove = () => {
            var e;
            this.el.remove(), null == (e = this._onRemove) || e.call(this)
          }, this.el.classList.add("animate-presence"), this.flow.computedAnimated && r && this.el.animate({
            [u]: [-.9999, 0]
          }, {
            ...this.flow.opacityTiming,
            composite: "accumulate"
          }), this._onRemove = n
        }
        get present() {
          return this._present
        }
        set present(e) {
          if (this._present !== e) {
            if (this._present = e, e ? this.el.removeAttribute("inert") : this.el.setAttribute("inert", ""), !this.flow.computedAnimated) {
              e || this._remove();
              return
            }
            this.el.style.setProperty("--_number-flow-d-opacity", e ? "0" : "-.999"), this.el.animate({
              [u]: e ? [-.9999, 0] : [.999, 0]
            }, {
              ...this.flow.opacityTiming,
              composite: "accumulate"
            }), e ? this.flow.removeEventListener("animationsfinish", this._remove) : this.flow.addEventListener("animationsfinish", this._remove, {
              once: !0
            })
          }
        }
      }
      class R extends A {
        constructor(e, t, n, r) {
          super(e.flow, n, r), this.section = e, this.value = t, this.el = n
        }
      }
      class M extends R {
        constructor(e, t, n, r, o) {
          var s, a;
          const l = ((null == (a = null == (s = e.flow.digits) ? void 0 : s[r]) ? void 0 : a.max) ?? 9) + 1,
            u = Array.from({
              length: l
            }).map((e, t) => {
              let r = i("span", {
                className: "digit__num"
              }, [document.createTextNode(String(t))]);
              return t !== n && r.setAttribute("inert", ""), r.style.setProperty("--n", String(t)), r
            }),
            c = i("span", {
              part: `digit ${t}-digit`,
              className: "digit"
            }, u);
          c.style.setProperty("--current", String(n)), c.style.setProperty("--length", String(l)), super(e, n, c, o), this.pos = r, this._onAnimationsFinish = () => {
            this.el.classList.remove("is-spinning")
          }, this._numbers = u, this.length = l
        }
        willUpdate(e) {
          let t = this.el.getBoundingClientRect();
          this._prevValue = this.value;
          let n = t[this.section.justify] - e[this.section.justify],
            r = t.width / 2;
          this._prevCenter = "left" === this.section.justify ? n + r : n - r
        }
        update(e) {
          this.el.style.setProperty("--current", String(e)), this._numbers.forEach((t, n) => n === e ? t.removeAttribute("inert") : t.setAttribute("inert", "")), this.value = e
        }
        didUpdate(e) {
          let t = this.el.getBoundingClientRect(),
            n = t[this.section.justify] - e[this.section.justify],
            r = t.width / 2,
            i = "left" === this.section.justify ? n + r : n - r,
            o = this._prevCenter - i;
          o && this.el.animate({
            transform: [`translateX(${o}px)`, "none"]
          }, {
            ...this.flow.transformTiming,
            composite: "accumulate"
          });
          let s = this.getDelta();
          s && (this.el.classList.add("is-spinning"), this.el.animate({
            [d]: [-s, 0]
          }, {
            ...this.flow.spinTiming ?? this.flow.transformTiming,
            composite: "accumulate"
          }), this.flow.addEventListener("animationsfinish", this._onAnimationsFinish, {
            once: !0
          }))
        }
        getDelta() {
          var e;
          if (this.flow.plugins)
            for (let t of this.flow.plugins) {
              let n = null == (e = t.getDelta) ? void 0 : e.call(t, this.value, this._prevValue, this);
              if (null != n) return n
            }
          let t = this.value - this._prevValue,
            n = this.flow.computedTrend || Math.sign(t);
          return n < 0 && this.value > this._prevValue ? this.value - this.length - this._prevValue : n > 0 && this.value < this._prevValue ? this.length - this._prevValue + this.value : t
        }
      }
      class j extends R {
        constructor(e, t, n, r) {
          const o = i("span", {
            className: "symbol__value",
            textContent: n
          });
          super(e, n, i("span", {
            part: `symbol ${t}`,
            className: "symbol"
          }, [o]), r), this.type = t, this._children = new Map, this._onChildRemove = e => () => {
            this._children.delete(e)
          }, this._children.set(n, new A(this.flow, o, {
            onRemove: this._onChildRemove(n)
          }))
        }
        willUpdate(e) {
          if ("decimal" === this.type) return;
          let t = this.el.getBoundingClientRect();
          this._prevOffset = t[this.section.justify] - e[this.section.justify]
        }
        update(e) {
          if (this.value !== e) {
            let t = this._children.get(this.value);
            t && (t.present = !1);
            let n = this._children.get(e);
            if (n) n.present = !0;
            else {
              let t = i("span", {
                className: "symbol__value",
                textContent: e
              });
              this.el.appendChild(t), this._children.set(e, new A(this.flow, t, {
                animateIn: !0,
                onRemove: this._onChildRemove(e)
              }))
            }
          }
          this.value = e
        }
        didUpdate(e) {
          if ("decimal" === this.type) return;
          let t = this.el.getBoundingClientRect()[this.section.justify] - e[this.section.justify],
            n = this._prevOffset - t;
          n && this.el.animate({
            transform: [`translateX(${n}px)`, "none"]
          }, {
            ...this.flow.transformTiming,
            composite: "accumulate"
          })
        }
      }
      let _ = parseInt(r.version.match(/^(\d+)\./)?.[1]) >= 19;
      class I extends P {
        attributeChangedCallback(e, t, n) {
          this[e] = JSON.parse(n)
        }
      }
      I.observedAttributes = _ ? [] : ["data", "digits"], customElements.get("number-flow-react") || customElements.define("number-flow-react", I);
      let D = {},
        O = _ ? e => e : JSON.stringify;

      function L(e) {
        let {
          transformTiming: t,
          spinTiming: n,
          opacityTiming: r,
          animated: i,
          respectMotionPreference: o,
          trend: s,
          plugins: a,
          ...l
        } = e;
        return [{
          transformTiming: t,
          spinTiming: n,
          opacityTiming: r,
          animated: i,
          respectMotionPreference: o,
          trend: s,
          plugins: a
        }, l]
      }
      class V extends r.Component {
        updateProperties(e) {
          if (!this.el) return;
          this.el.batched = !this.props.isolate;
          let [t] = L(this.props);
          Object.entries(t).forEach(([e, t]) => {
            this.el[e] = t ?? I.defaultProps[e]
          }), e?.onAnimationsStart && this.el.removeEventListener("animationsstart", e.onAnimationsStart), this.props.onAnimationsStart && this.el.addEventListener("animationsstart", this.props.onAnimationsStart), e?.onAnimationsFinish && this.el.removeEventListener("animationsfinish", e.onAnimationsFinish), this.props.onAnimationsFinish && this.el.addEventListener("animationsfinish", this.props.onAnimationsFinish)
        }
        componentDidMount() {
          this.updateProperties(), _ && this.el && (this.el.digits = this.props.digits, this.el.data = this.props.data)
        }
        getSnapshotBeforeUpdate(e) {
          if (this.updateProperties(e), e.data !== this.props.data) {
            if (this.props.group) return this.props.group.willUpdate(), () => this.props.group?.didUpdate();
            if (!this.props.isolate) return this.el?.willUpdate(), () => this.el?.didUpdate()
          }
          return null
        }
        componentDidUpdate(e, t, n) {
          n?.()
        }
        handleRef(e) {
          this.props.innerRef && (this.props.innerRef.current = e), this.el = e
        }
        render() {
          let [e, {
            innerRef: t,
            className: n,
            data: i,
            willChange: o,
            isolate: s,
            group: a,
            digits: l,
            onAnimationsStart: u,
            onAnimationsFinish: c,
            ...h
          }] = L(this.props);
          return r.createElement("number-flow-react", {
            ref: this.handleRef,
            "data-will-change": o ? "" : void 0,
            class: n,
            ...h,
            dangerouslySetInnerHTML: {
              __html: ""
            },
            suppressHydrationWarning: !0,
            digits: O(l),
            data: O(i)
          })
        }
        constructor(e) {
          super(e), this.handleRef = this.handleRef.bind(this)
        }
      }
      let F = r.forwardRef(function({
          value: e,
          locales: t,
          format: n,
          prefix: i,
          suffix: o,
          ...s
        }, a) {
          r.useImperativeHandle(a, () => l.current, []);
          let l = r.useRef(),
            u = r.useContext(N);
          u?.useRegister(l);
          let c = r.useMemo(() => t ? JSON.stringify(t) : "", [t]),
            h = r.useMemo(() => n ? JSON.stringify(n) : "", [n]),
            d = r.useMemo(() => (function(e, t, n, r) {
              let i = t.formatToParts(e);
              n && i.unshift({
                type: "prefix",
                value: n
              }), r && i.push({
                type: "suffix",
                value: r
              });
              let o = [],
                s = [],
                a = [],
                l = [],
                u = {},
                c = e => `${e}:${u[e]=(u[e]??-1)+1}`,
                h = "",
                d = !1,
                p = !1;
              for (let e of i) {
                h += e.value;
                let t = "minusSign" === e.type || "plusSign" === e.type ? "sign" : e.type;
                "integer" === t ? (d = !0, s.push(...e.value.split("").map(e => ({
                  type: t,
                  value: parseInt(e)
                })))) : "group" === t ? s.push({
                  type: t,
                  value: e.value
                }) : "decimal" === t ? (p = !0, a.push({
                  type: t,
                  value: e.value,
                  key: c(t)
                })) : "fraction" === t ? a.push(...e.value.split("").map(e => ({
                  type: t,
                  value: parseInt(e),
                  key: c(t),
                  pos: -1 - u[t]
                }))) : (d || p ? l : o).push({
                  type: t,
                  value: e.value,
                  key: c(t)
                })
              }
              let f = [];
              for (let e = s.length - 1; e >= 0; e--) {
                let t = s[e];
                f.unshift("integer" === t.type ? {
                  ...t,
                  key: c(t.type),
                  pos: u[t.type]
                } : {
                  ...t,
                  key: c(t.type)
                })
              }
              return {
                pre: o,
                integer: f,
                fraction: a,
                post: l,
                valueAsString: h,
                value: "string" == typeof e ? parseFloat(e) : e
              }
            })(e, D[`${c}:${h}`] ??= new Intl.NumberFormat(t, n), i, o), [e, c, h, i, o]);
          return r.createElement(V, {
            ...s,
            group: u,
            data: d,
            innerRef: l
          })
        }),
        N = r.createContext(void 0)
    },
    26821: () => {},
    27451: e => {
      e.exports = function() {
        throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    27988: (e, t, n) => {
      var r = n(9382),
        i = n(22158);

      function o(e) {
        (e = function(e) {
          var t = {};
          for (var n in e) t[n] = e[n];
          return t
        }(e || {})).whiteList = e.whiteList || r.whiteList, e.onAttr = e.onAttr || r.onAttr, e.onIgnoreAttr = e.onIgnoreAttr || r.onIgnoreAttr, e.safeAttrValue = e.safeAttrValue || r.safeAttrValue, this.options = e
      }
      n(3137), o.prototype.process = function(e) {
        if (!(e = (e = e || "").toString())) return "";
        var t = this.options,
          n = t.whiteList,
          r = t.onAttr,
          o = t.onIgnoreAttr,
          s = t.safeAttrValue;
        return i(e, function(e, t, i, a, l) {
          var u = n[i],
            c = !1;
          if (!0 === u ? c = u : "function" == typeof u ? c = u(a) : u instanceof RegExp && (c = u.test(a)), !0 !== c && (c = !1), a = s(i, a)) {
            var h = {
              position: t,
              sourcePosition: e,
              source: l,
              isWhite: c
            };
            if (c) {
              var d = r(i, a, h);
              return null == d ? i + ":" + a : d
            }
            var d = o(i, a, h);
            if (null != d) return d
          }
        })
      }, e.exports = o
    },
    29371: () => {},
    29973: (e, t, n) => {
      "use strict";
      var r = n(20024);
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i = r(n(90961)),
        o = r(n(48303)),
        s = r(n(88927)),
        a = r(n(8262)),
        l = r(n(70780)),
        u = r(n(35129)),
        c = function(e) {
          (0, s.default)(r, e);
          var t, n = (t = function() {
            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
              return !1
            }
          }(), function() {
            var e, n = (0, l.default)(r);
            return e = t ? Reflect.construct(n, arguments, (0, l.default)(this).constructor) : n.apply(this, arguments), (0, a.default)(this, e)
          });

          function r() {
            return (0, o.default)(this, r), n.apply(this, arguments)
          }
          return (0, i.default)(r)
        }(r(n(10393)).default);
      t.default = c, (0, u.default)(c, "elementClassName", "CardNumberElement")
    },
    30040: (e, t, n) => {
      "use strict";
      n.d(t, {
        default: () => i.a
      });
      var r = n(17697),
        i = n.n(r)
    },
    31019: () => {},
    31270: () => {},
    31329: (e, t, n) => {
      "use strict";
      n.d(t, {
        C1: () => P,
        bL: () => x
      });
      var r = n(12115),
        i = n(633),
        o = n(75021),
        s = n(65453),
        a = n(38665),
        l = n(3763),
        u = n(22295),
        c = n(31557),
        h = n(13275),
        d = n(95155),
        p = "Checkbox",
        [f, m] = (0, o.A)(p),
        [g, v] = f(p);

      function y(e) {
        let {
          __scopeCheckbox: t,
          checked: n,
          children: i,
          defaultChecked: o,
          disabled: s,
          form: l,
          name: u,
          onCheckedChange: c,
          required: h,
          value: f = "on",
          internal_do_not_use_render: m
        } = e, [v, y] = (0, a.i)({
          prop: n,
          defaultProp: o ?? !1,
          onChange: c,
          caller: p
        }), [b, w] = r.useState(null), [x, S] = r.useState(null), P = r.useRef(!1), T = !b || !!l || !!b.closest("form"), k = {
          checked: v,
          disabled: s,
          setChecked: y,
          control: b,
          setControl: w,
          name: u,
          form: l,
          value: f,
          hasConsumerStoppedPropagationRef: P,
          required: h,
          defaultChecked: !E(o) && o,
          isFormControl: T,
          bubbleInput: x,
          setBubbleInput: S
        };
        return (0, d.jsx)(g, {
          scope: t,
          ...k,
          children: "function" == typeof m ? m(k) : i
        })
      }
      var b = "CheckboxTrigger",
        w = r.forwardRef(({
          __scopeCheckbox: e,
          onKeyDown: t,
          onClick: n,
          ...o
        }, a) => {
          let {
            control: l,
            value: u,
            disabled: c,
            checked: p,
            required: f,
            setControl: m,
            setChecked: g,
            hasConsumerStoppedPropagationRef: y,
            isFormControl: w,
            bubbleInput: x
          } = v(b, e), S = (0, i.s)(a, m), P = r.useRef(p);
          return r.useEffect(() => {
            let e = l?.form;
            if (e) {
              let t = () => g(P.current);
              return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
            }
          }, [l, g]), (0, d.jsx)(h.sG.button, {
            type: "button",
            role: "checkbox",
            "aria-checked": E(p) ? "mixed" : p,
            "aria-required": f,
            "data-state": C(p),
            "data-disabled": c ? "" : void 0,
            disabled: c,
            value: u,
            ...o,
            ref: S,
            onKeyDown: (0, s.mK)(t, e => {
              "Enter" === e.key && e.preventDefault()
            }),
            onClick: (0, s.mK)(n, e => {
              g(e => !!E(e) || !e), x && w && (y.current = e.isPropagationStopped(), y.current || e.stopPropagation())
            })
          })
        });
      w.displayName = b;
      var x = r.forwardRef((e, t) => {
        let {
          __scopeCheckbox: n,
          name: r,
          checked: i,
          defaultChecked: o,
          required: s,
          disabled: a,
          value: l,
          onCheckedChange: u,
          form: c,
          ...h
        } = e;
        return (0, d.jsx)(y, {
          __scopeCheckbox: n,
          checked: i,
          defaultChecked: o,
          disabled: a,
          required: s,
          onCheckedChange: u,
          name: r,
          form: c,
          value: l,
          internal_do_not_use_render: ({
            isFormControl: e
          }) => (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)(w, {
              ...h,
              ref: t,
              __scopeCheckbox: n
            }), e && (0, d.jsx)(k, {
              __scopeCheckbox: n
            })]
          })
        })
      });
      x.displayName = p;
      var S = "CheckboxIndicator",
        P = r.forwardRef((e, t) => {
          let {
            __scopeCheckbox: n,
            forceMount: r,
            ...i
          } = e, o = v(S, n);
          return (0, d.jsx)(c.C, {
            present: r || E(o.checked) || !0 === o.checked,
            children: (0, d.jsx)(h.sG.span, {
              "data-state": C(o.checked),
              "data-disabled": o.disabled ? "" : void 0,
              ...i,
              ref: t,
              style: {
                pointerEvents: "none",
                ...e.style
              }
            })
          })
        });
      P.displayName = S;
      var T = "CheckboxBubbleInput",
        k = r.forwardRef(({
          __scopeCheckbox: e,
          ...t
        }, n) => {
          let {
            control: o,
            hasConsumerStoppedPropagationRef: s,
            checked: a,
            defaultChecked: c,
            required: p,
            disabled: f,
            name: m,
            value: g,
            form: y,
            bubbleInput: b,
            setBubbleInput: w
          } = v(T, e), x = (0, i.s)(n, w), S = (0, l.Z)(a), P = (0, u.X)(o);
          r.useEffect(() => {
            if (!b) return;
            let e = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set,
              t = !s.current;
            if (S !== a && e) {
              let n = new Event("click", {
                bubbles: t
              });
              b.indeterminate = E(a), e.call(b, !E(a) && a), b.dispatchEvent(n)
            }
          }, [b, S, a, s]);
          let k = r.useRef(!E(a) && a);
          return (0, d.jsx)(h.sG.input, {
            type: "checkbox",
            "aria-hidden": !0,
            defaultChecked: c ?? k.current,
            required: p,
            disabled: f,
            name: m,
            value: g,
            form: y,
            ...t,
            tabIndex: -1,
            ref: x,
            style: {
              ...t.style,
              ...P,
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0,
              transform: "translateX(-100%)"
            }
          })
        });

      function E(e) {
        return "indeterminate" === e
      }

      function C(e) {
        return E(e) ? "indeterminate" : e ? "checked" : "unchecked"
      }
      k.displayName = T
    },
    32076: () => {},
    34583: (e, t, n) => {
      var r = n(9382),
        i = n(27988);
      for (var o in (t = e.exports = function(e, t) {
          return new i(t).process(e)
        }).FilterCSS = i, r) t[o] = r[o];
      "u" > typeof window && (window.filterCSS = e.exports)
    },
    34677: (e, t, n) => {
      "use strict";
      var r = n(20024);
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i = r(n(90961)),
        o = r(n(48303)),
        s = r(n(88927)),
        a = r(n(8262)),
        l = r(n(70780)),
        u = r(n(35129)),
        c = function(e) {
          (0, s.default)(r, e);
          var t, n = (t = function() {
            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
              return !1
            }
          }(), function() {
            var e, n = (0, l.default)(r);
            return e = t ? Reflect.construct(n, arguments, (0, l.default)(this).constructor) : n.apply(this, arguments), (0, a.default)(this, e)
          });

          function r() {
            return (0, o.default)(this, r), n.apply(this, arguments)
          }
          return (0, i.default)(r)
        }(r(n(10393)).default);
      t.default = c, (0, u.default)(c, "elementClassName", "CardYearElement")
    },
    35111: (e, t, n) => {
      "use strict";
      var r = n(20024);
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = t.RecurlyElementsContext = void 0;
      var i = r(n(48303)),
        o = r(n(90961)),
        s = r(n(88927)),
        a = r(n(8262)),
        l = r(n(70780)),
        u = r(n(35129)),
        c = r(n(12115)),
        h = r(n(23833)),
        d = n(88627),
        p = c.default.createContext();
      t.RecurlyElementsContext = p;
      var f = p.Provider,
        m = function(e) {
          (0, s.default)(r, e);
          var t, n = (t = function() {
            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
              return !1
            }
          }(), function() {
            var e, n = (0, l.default)(r);
            return e = t ? Reflect.construct(n, arguments, (0, l.default)(this).constructor) : n.apply(this, arguments), (0, a.default)(this, e)
          });

          function r(e, t) {
            var o;
            if ((0, i.default)(this, r), o = n.call(this, e, t), !t || !t.recurly) throw Error("<Elements> must be within a <RecurlyProvider> tree.");
            return o._elements = o.context.recurly.Elements(), o._elements.on("submit", function(e) {
              return o.props.onSubmit(e)
            }), o
          }
          return (0, o.default)(r, [{
            key: "render",
            value: function() {
              var e = this._elements;
              return c.default.createElement(f, {
                value: {
                  elements: e
                }
              }, this.props.children)
            }
          }]), r
        }(c.default.Component);
      t.default = m, (0, u.default)(m, "propTypes", {
        onSubmit: h.default.func
      }), (0, u.default)(m, "defaultProps", {
        onSubmit: function() {}
      }), (0, u.default)(m, "contextType", d.RecurlyContext)
    },
    35129: (e, t, n) => {
      var r = n(2990);
      e.exports = function(e, t, n) {
        return (t = r(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    35848: () => {},
    37960: (e, t, n) => {
      "use strict";
      var r = n(20024);
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i = r(n(48303)),
        o = r(n(90961)),
        s = r(n(88927)),
        a = r(n(8262)),
        l = r(n(70780)),
        u = r(n(35129)),
        c = r(n(12115)),
        h = r(n(23833)),
        d = n(88627),
        p = function(e) {
          (0, s.default)(r, e);
          var t, n = (t = function() {
            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
              return !1
            }
          }(), function() {
            var e, n = (0, l.default)(r);
            return e = t ? Reflect.construct(n, arguments, (0, l.default)(this).constructor) : n.apply(this, arguments), (0, a.default)(this, e)
          });

          function r(e, t) {
            if ((0, i.default)(this, r), o = n.call(this, e, t), !t || !t.recurly) throw Error("<ThreeDSecureAction> must be within a <RecurlyProvider> tree.");
            var o, s = e.actionTokenId;
            return o._container = c.default.createRef(), o._risk = o.context.recurly.Risk(), o._threeDSecure = o._risk.ThreeDSecure({
              actionTokenId: s
            }), o._threeDSecure.on("token", function() {
              var e;
              return (e = o.props).onToken.apply(e, arguments)
            }), o._threeDSecure.on("error", function() {
              var e;
              return (e = o.props).onError.apply(e, arguments)
            }), o
          }
          return (0, o.default)(r, [{
            key: "componentDidMount",
            value: function() {
              this._threeDSecure.attach(this._container.current)
            }
          }, {
            key: "render",
            value: function() {
              return c.default.createElement("div", {
                id: this.props.id,
                className: this.props.className,
                ref: this._container
              })
            }
          }]), r
        }(c.default.PureComponent);
      t.default = p, (0, u.default)(p, "propTypes", {
        id: h.default.string,
        className: h.default.string,
        actionTokenId: h.default.string,
        onToken: h.default.func,
        onError: h.default.func
      }), (0, u.default)(p, "defaultProps", {
        id: void 0,
        className: void 0,
        actionTokenId: "",
        onToken: function() {},
        onError: function(e) {
          throw e
        }
      }), (0, u.default)(p, "contextType", d.RecurlyContext)
    },
    38165: () => {},
    40043: (e, t, n) => {
      "use strict";
      var r = n(59888);

      function i() {}

      function o() {}
      o.resetWarningCache = i, e.exports = function() {
        function e(e, t, n, i, o, s) {
          if (s !== r) {
            var a = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw a.name = "Invariant Violation", a
          }
        }

        function t() {
          return e
        }
        e.isRequired = e;
        var n = {
          array: e,
          bigint: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: o,
          resetWarningCache: i
        };
        return n.PropTypes = n, n
      }
    },
    40357: (e, t, n) => {
      var r = n(34583).FilterCSS,
        i = n(34583).getDefaultWhiteList,
        o = n(84936);

      function s() {
        return {
          a: ["target", "href", "title"],
          abbr: ["title"],
          address: [],
          area: ["shape", "coords", "href", "alt"],
          article: [],
          aside: [],
          audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"],
          b: [],
          bdi: ["dir"],
          bdo: ["dir"],
          big: [],
          blockquote: ["cite"],
          br: [],
          caption: [],
          center: [],
          cite: [],
          code: [],
          col: ["align", "valign", "span", "width"],
          colgroup: ["align", "valign", "span", "width"],
          dd: [],
          del: ["datetime"],
          details: ["open"],
          div: [],
          dl: [],
          dt: [],
          em: [],
          figcaption: [],
          figure: [],
          font: ["color", "size", "face"],
          footer: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          header: [],
          hr: [],
          i: [],
          img: ["src", "alt", "title", "width", "height", "loading"],
          ins: ["datetime"],
          kbd: [],
          li: [],
          mark: [],
          nav: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          section: [],
          small: [],
          span: [],
          sub: [],
          summary: [],
          sup: [],
          strong: [],
          strike: [],
          table: ["width", "border", "align", "valign"],
          tbody: ["align", "valign"],
          td: ["width", "rowspan", "colspan", "align", "valign"],
          tfoot: ["align", "valign"],
          th: ["width", "rowspan", "colspan", "align", "valign"],
          thead: ["align", "valign"],
          tr: ["rowspan", "align", "valign"],
          tt: [],
          u: [],
          ul: [],
          video: ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width"]
        }
      }
      var a = new r;

      function l(e) {
        return e.replace(u, "&lt;").replace(c, "&gt;")
      }
      var u = /</g,
        c = />/g,
        h = /"/g,
        d = /&quot;/g,
        p = /&#([a-zA-Z0-9]*);?/gim,
        f = /&colon;?/gim,
        m = /&newline;?/gim,
        g = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,
        v = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
        y = /u\s*r\s*l\s*\(.*/gi;

      function b(e) {
        return e.replace(h, "&quot;")
      }

      function w(e) {
        return e.replace(d, '"')
      }

      function x(e) {
        return e.replace(p, function(e, t) {
          return "x" === t[0] || "X" === t[0] ? String.fromCharCode(parseInt(t.substr(1), 16)) : String.fromCharCode(parseInt(t, 10))
        })
      }

      function S(e) {
        return e.replace(f, ":").replace(m, " ")
      }

      function P(e) {
        for (var t = "", n = 0, r = e.length; n < r; n++) t += 32 > e.charCodeAt(n) ? " " : e.charAt(n);
        return o.trim(t)
      }

      function T(e) {
        return P(e = S(e = x(e = w(e))))
      }

      function k(e) {
        return l(e = b(e))
      }
      t.whiteList = s(), t.getDefaultWhiteList = s, t.onTag = function(e, t, n) {}, t.onIgnoreTag = function(e, t, n) {}, t.onTagAttr = function(e, t, n) {}, t.onIgnoreTagAttr = function(e, t, n) {}, t.safeAttrValue = function(e, t, n, r) {
        if (n = T(n), "href" === t || "src" === t) {
          if ("#" === (n = o.trim(n))) return "#";
          if ("http://" !== n.substr(0, 7) && "https://" !== n.substr(0, 8) && "mailto:" !== n.substr(0, 7) && "tel:" !== n.substr(0, 4) && "data:image/" !== n.substr(0, 11) && "ftp://" !== n.substr(0, 6) && "./" !== n.substr(0, 2) && "../" !== n.substr(0, 3) && "#" !== n[0] && "/" !== n[0]) return ""
        } else if ("background" === t) {
          if (g.lastIndex = 0, g.test(n)) return ""
        } else if ("style" === t) {
          if (v.lastIndex = 0, v.test(n) || (y.lastIndex = 0, y.test(n) && (g.lastIndex = 0, g.test(n)))) return "";
          !1 !== r && (n = (r = r || a).process(n))
        }
        return k(n)
      }, t.escapeHtml = l, t.escapeQuote = b, t.unescapeQuote = w, t.escapeHtmlEntities = x, t.escapeDangerHtml5Entities = S, t.clearNonPrintableCharacter = P, t.friendlyAttrValue = T, t.escapeAttrValue = k, t.onIgnoreTagStripAll = function() {
        return ""
      }, t.StripTagBody = function(e, t) {
        "function" != typeof t && (t = function() {});
        var n = !Array.isArray(e),
          r = [],
          i = !1;
        return {
          onIgnoreTag: function(s, a, l) {
            if (n ? 0 : -1 === o.indexOf(e, s)) return t(s, a, l);
            if (!l.isClosing) return i || (i = l.position), "[removed]";
            var u = "[/removed]",
              c = l.position + u.length;
            return r.push([!1 !== i ? i : l.position, c]), i = !1, u
          },
          remove: function(e) {
            var t = "",
              n = 0;
            return o.forEach(r, function(r) {
              t += e.slice(n, r[0]), n = r[1]
            }), t += e.slice(n)
          }
        }
      }, t.stripCommentTag = function(e) {
        for (var t = "", n = 0; n < e.length;) {
          var r = e.indexOf("\x3c!--", n);
          if (-1 === r) {
            t += e.slice(n);
            break
          }
          t += e.slice(n, r);
          var i = e.indexOf("--\x3e", r);
          if (-1 === i) break;
          n = i + 3
        }
        return t
      }, t.stripBlankChar = function(e) {
        var t = e.split("");
        return (t = t.filter(function(e) {
          var t = e.charCodeAt(0);
          return 127 !== t && (!(t <= 31) || 10 === t || 13 === t)
        })).join("")
      }, t.attributeWrapSign = '"', t.cssFilter = a, t.getDefaultCSSWhiteList = i
    },
    41208: (e, t, n) => {
      var r = n(40357),
        i = n(57839),
        o = n(68234);

      function s(e, t) {
        return new o(t).process(e)
      }
      for (var a in (t = e.exports = s).filterXSS = s, t.FilterXSS = o, r) t[a] = r[a];
      for (var l in i) t[l] = i[l];
      "u" > typeof window && (window.filterXSS = e.exports), "u" > typeof self && "u" > typeof DedicatedWorkerGlobalScope && self instanceof DedicatedWorkerGlobalScope && (self.filterXSS = e.exports)
    },
    41845: () => {},
    42383: () => {},
    43225: (e, t, n) => {
      "use strict";
      var r = n(20024);
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i = r(n(90961)),
        o = r(n(48303)),
        s = r(n(88927)),
        a = r(n(8262)),
        l = r(n(70780)),
        u = r(n(35129)),
        c = function(e) {
          (0, s.default)(r, e);
          var t, n = (t = function() {
            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
              return !1
            }
          }(), function() {
            var e, n = (0, l.default)(r);
            return e = t ? Reflect.construct(n, arguments, (0, l.default)(this).constructor) : n.apply(this, arguments), (0, a.default)(this, e)
          });

          function r() {
            return (0, o.default)(this, r), n.apply(this, arguments)
          }
          return (0, i.default)(r)
        }(r(n(10393)).default);
      t.default = c, (0, u.default)(c, "elementClassName", "CardCvvElement")
    },
    43382: () => {},
    44403: () => {},
    47139: () => {},
    48303: e => {
      e.exports = function(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    49051: (e, t, n) => {
      "use strict";
      n.d(t, {
        nL: () => h
      });
      var r, i, o, s, a, l, u, c, h, d, p, f = function(e, t) {
        return (f = Object.setPrototypeOf || ({
          __proto__: []
        }) instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        })(e, t)
      };

      function m(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
          this.constructor = e
        }
        f(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      }
      var g = function() {
          return (g = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
          }).apply(this, arguments)
        },
        v = ["POST", "PATCH"],
        y = function(e, t) {
          return (t = t || {}).headers = t.headers || {
            "Content-Type": "application/json"
          }, t.headers["Content-Type"] || -1 === v.indexOf(t.method.toUpperCase()) || (t.headers["Content-Type"] = "application/json"), fetch(e, t).then(function(e) {
            return e.text().then(function(t) {
              try {
                n = JSON.parse(t)
              } catch (e) {}
              if (e.status >= 200 && e.status < 300) return n || t;
              var n, r = new b(e);
              throw n && (n = Array.isArray(n) ? n[0] : n), r.body = n || t, r
            })
          })
        },
        b = function(e) {
          function t(t) {
            var n = e.call(this, "".concat(t.status, " - ").concat(t.statusText, " for ").concat(t.url)) || this;
            return n.name = "HttpError", n.response = t, n
          }
          return m(t, e), t
        }(Error);
      (r = l || (l = {})).ACCESS_TOKEN = "eagle-access-token", r.REFRESH_TOKEN = "eagle-refresh-token", r.EXPIRES_IN = "eagle-expires_in";
      var w = function() {
          function e() {}
          return e.prototype.getAccessTokenKey = function() {
            return l.ACCESS_TOKEN
          }, e.prototype.getRefreshTokenKey = function() {
            return l.REFRESH_TOKEN
          }, e.prototype.getExpiresInKey = function() {
            return l.EXPIRES_IN
          }, e
        }(),
        x = function() {
          function e() {
            this.storage = {}, this.storage = {}
          }
          return e.prototype.getItem = function(e) {
            return this.storage[e]
          }, e.prototype.setItem = function(e, t) {
            this.storage[e] = t
          }, e.prototype.removeItem = function(e) {
            delete this.storage[e]
          }, e
        }(),
        S = function() {
          function e() {
            try {
              this.lsRef = window.localStorage
            } catch (e) {
              try {
                this.lsRef = window.sessionStorage
              } catch (e) {
                this.lsRef = new x
              }
            }
          }
          return e.prototype.getItem = function(e) {
            return Promise.resolve(this.lsRef.getItem(e))
          }, e.prototype.setItem = function(e, t) {
            return this.lsRef.setItem(e, t), Promise.resolve()
          }, e.prototype.removeItem = function(e) {
            return this.lsRef.removeItem(e), Promise.resolve()
          }, e
        }(),
        P = function() {
          function e() {
            this.AccessToken = "", this.RefreshToken = "", this.ExpiresIn = 0
          }
          return e.prototype.update = function(e) {
            this.AccessToken = e.AccessToken, this.RefreshToken = e.RefreshToken, this.ExpiresIn = e.ExpiresIn
          }, e.fromV1 = function(t) {
            var n = new e;
            return n.AccessToken = t.access_token, n.RefreshToken = t.refresh_token, n.ExpiresIn = t.expires_in, n
          }, e.fromV2 = function(t) {
            var n = new e;
            return n.AccessToken = t.access_toOOOOOOKEN, n.RefreshToken = t.refresh_tOOOOOOOoken, n.ExpiresIn = t.expires_inOOOOOOOOOO, n
          }, e.fromStorage = function(t, n) {
            var r, i, o, s;
            return r = this, i = void 0, o = void 0, s = function() {
              var r, i, o, s, a;
              return function(e, t) {
                var n, r, i, o, s = {
                  label: 0,
                  sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                  },
                  trys: [],
                  ops: []
                };
                return o = {
                  next: a(0),
                  throw: a(1),
                  return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                  return this
                }), o;

                function a(a) {
                  return function(l) {
                    var u = [a, l];
                    if (n) throw TypeError("Generator is already executing.");
                    for (; o && (o = 0, u[0] && (s = 0)), s;) try {
                      if (n = 1, r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done) return i;
                      switch (r = 0, i && (u = [2 & u[0], i.value]), u[0]) {
                        case 0:
                        case 1:
                          i = u;
                          break;
                        case 4:
                          return s.label++, {
                            value: u[1],
                            done: !1
                          };
                        case 5:
                          s.label++, r = u[1], u = [0];
                          continue;
                        case 7:
                          u = s.ops.pop(), s.trys.pop();
                          continue;
                        default:
                          if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
                            s = 0;
                            continue
                          }
                          if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                            s.label = u[1];
                            break
                          }
                          if (6 === u[0] && s.label < i[1]) {
                            s.label = i[1], i = u;
                            break
                          }
                          if (i && s.label < i[2]) {
                            s.label = i[2], s.ops.push(u);
                            break
                          }
                          i[2] && s.ops.pop(), s.trys.pop();
                          continue
                      }
                      u = t.call(e, s)
                    } catch (e) {
                      u = [6, e], r = 0
                    } finally {
                      n = i = 0
                    }
                    if (5 & u[0]) throw u[1];
                    return {
                      value: u[0] ? u[1] : void 0,
                      done: !0
                    }
                  }
                }
              }(this, function(l) {
                switch (l.label) {
                  case 0:
                    return n = n || new w, i = r = new e, [4, t.getItem(n.getAccessTokenKey())];
                  case 1:
                    return i.AccessToken = l.sent() || "", o = r, [4, t.getItem(n.getRefreshTokenKey())];
                  case 2:
                    return o.RefreshToken = l.sent() || "", s = r, a = parseInt, [4, t.getItem(n.getExpiresInKey())];
                  case 3:
                    return s.ExpiresIn = a.apply(void 0, [l.sent() || "0", 10]), [2, r]
                }
              })
            }, new(o || (o = Promise))(function(e, t) {
              function n(e) {
                try {
                  l(s.next(e))
                } catch (e) {
                  t(e)
                }
              }

              function a(e) {
                try {
                  l(s.throw(e))
                } catch (e) {
                  t(e)
                }
              }

              function l(t) {
                var r;
                t.done ? e(t.value) : ((r = t.value) instanceof o ? r : new o(function(e) {
                  e(r)
                })).then(n, a)
              }
              l((s = s.apply(r, i || [])).next())
            })
          }, e
        }(),
        T = function() {
          var e = this;
          this.resolve = function() {
            return null
          }, this.reject = function() {
            return null
          }, this.promise = new Promise(function(t, n) {
            e.resolve = t, e.reject = n
          })
        },
        k = function() {
          function e(e, t) {
            var n = this;
            this.data = new P, this.updateCb = [], this.tokenDeffered = null, this.broadcastToIframe = !1, this.receiveInIframe = !1, this.iframe = void 0, this.handleMessageFromIframe = function(e) {
              var t = n.parseMessageEvent(e);
              t && (n.iframe = t, n.triggerUpdate())
            }, this.parseMessageEvent = function(e) {
              var t = null;
              if (e && e.data && "string" == typeof e.data) {
                var n = "";
                if (e.data.startsWith("subscribe") && (n = e.data.replace("subscribe: ", "")), n.length > 0) {
                  var r = n;
                  try {
                    n = new URL(n).toString()
                  } catch (e) {
                    n = r
                  }
                  var i = 'iframe[src="'.concat(n, '"]');
                  t = document.querySelector(i)
                }
              }
              return t
            }, this.handleMessageInIframe = function(e) {
              if (e && e.data) try {
                var t = JSON.parse(e.data);
                t && "token-exchange" === t.type && (console.log("client-lib token exchange", t.data), n.update(P.fromV1({
                  access_token: t.data.AccessToken,
                  refresh_token: t.data.RefreshToken,
                  expires_in: t.data.ExpiresIn
                })))
              } catch (e) {}
            }, this.server = e, this.tokenStorage = t.storage || new S, this.broadcastToIframe = t.broadcastToIframe, this.receiveInIframe = t.receiveInIframe, this.sessionToken = t.sessionToken || new w, this.initIframeConnection(), this.restoreState()
          }
          return e.prototype.checkAuthStatus = function() {
            this.triggerUpdate()
          }, e.prototype.restoreState = function() {
            var e = this;
            return P.fromStorage(this.tokenStorage, this.sessionToken).then(function(t) {
              e.update(t)
            })
          }, e.prototype.triggerUpdate = function() {
            var e, t;
            this.broadcastToIframe && (null == (t = null == (e = this.iframe) ? void 0 : e.contentWindow) || t.postMessage(JSON.stringify({
              type: "token-exchange",
              data: this.data
            }), "*")), this.updateCb.forEach(function(e) {
              return e()
            })
          }, e.prototype.onUpdate = function(e) {
            this.updateCb.push(e)
          }, e.prototype.getToken = function() {
            if (this.tokenDeffered) return this.tokenDeffered.promise;
            var e = 1e3 * this.data.ExpiresIn;
            return e >= Date.now() && e <= Date.now() + 18e5 ? (this.tokenDeffered = this.refreshToken(), this.tokenDeffered.promise) : (this.data.ExpiresIn - 10) * 1e3 > Date.now() ? Promise.resolve(this.data.AccessToken) : "" === this.data.AccessToken || "" === this.data.RefreshToken ? Promise.reject("Refresh token is empty!") : (this.tokenDeffered = this.refreshToken(), this.tokenDeffered.promise)
          }, e.prototype.update = function(e) {
            this.data = e, this.saveToStorage(), this.triggerUpdate()
          }, e.prototype.saveToStorage = function() {
            this.tokenStorage.setItem(this.sessionToken.getAccessTokenKey(), this.data.AccessToken), this.tokenStorage.setItem(this.sessionToken.getRefreshTokenKey(), this.data.RefreshToken), this.tokenStorage.setItem(this.sessionToken.getExpiresInKey(), String(this.data.ExpiresIn))
          }, e.prototype.initIframeConnection = function() {
            this.receiveInIframe && window.top && (window.removeEventListener("message", this.handleMessageInIframe), window.addEventListener("message", this.handleMessageInIframe), window.top.postMessage("subscribe: " + window.location.href, "*")), this.broadcastToIframe && window.addEventListener("message", this.handleMessageFromIframe)
          }, e.prototype.refreshToken = function() {
            var e = this;
            return this.tokenDeffered = new T, y(this.server.toString() + "auth/refresh-token", {
              method: "POST",
              headers: {
                Authorization: "Bearer ".concat(this.data.AccessToken)
              },
              body: JSON.stringify({
                refreshToken: this.data.RefreshToken
              })
            }).then(function(t) {
              var n;
              e.update(P.fromV1(t)), null == (n = e.tokenDeffered) || n.resolve(e.data.AccessToken), e.tokenDeffered = null
            }).catch(function(t) {
              var n;
              null == (n = e.tokenDeffered) || n.reject(t), e.tokenDeffered = null
            }), this.tokenDeffered
          }, e.prototype.isAuthorised = function() {
            return !!this.data.AccessToken && !!this.data.RefreshToken && 1e3 * this.data.ExpiresIn > Date.now()
          }, e.prototype.logout = function() {
            this.tokenStorage.removeItem(this.sessionToken.getAccessTokenKey()), this.tokenStorage.removeItem(this.sessionToken.getRefreshTokenKey()), this.tokenStorage.removeItem(this.sessionToken.getExpiresInKey()), this.data = new P, this.triggerUpdate()
          }, e
        }(),
        E = function() {
          function e() {}
          return e.prototype.setServer = function(e) {
            if (!e) throw Error("Please, provide server Url");
            this.server = e
          }, e.prototype.setSessionStorage = function(e) {
            this.sessionStorage = e
          }, e.prototype.saveCredential = function(e) {
            this.sessionStorage && this.sessionStorage.update(P.fromV1(e))
          }, e.prototype.makeRequest = function(e, t, n, r, i, o) {
            if (void 0 === r && (r = ""), void 0 === i && (i = ""), !this.server) throw Error("No server url provided");
            var s = new Headers({
              "Content-Type": "application/json"
            });
            return r && s.append("Authorization", "Bearer ".concat(r)), i && s.append("recaptcha", i), o && s.append("recaptcha-mode", o), y(this.server.toString() + t, {
              method: e,
              headers: s,
              body: JSON.stringify(g({}, n))
            })
          }, e.prototype.doPost = function(e, t, n) {
            void 0 === n && (n = "");
            var r = t.captchaToken || "",
              i = t.captchaMode || void 0;
            return delete t.captchaToken, delete t.captchaMode, this.makeRequest("POST", e, t, n, r, i)
          }, e.prototype.registerViaEmail = function(e) {
            return this.doPost("auth/register", g(g({}, e), {
              registrationPlaceUrl: e.registrationPlaceUrl ? e.registrationPlaceUrl.toString() : void 0
            }))
          }, e.prototype.loginViaEmail = function(e) {
            var t = this;
            return this.doPost("auth/login", g(g({}, e), {
              registrationPlaceUrl: e.registrationPlaceUrl ? e.registrationPlaceUrl.toString() : void 0
            })).then(function(e) {
              return t.saveCredential(e)
            })
          }, e.prototype.loginViaApple = function(e) {
            var t = this;
            return this.doPost("auth/login/apple", g(g({}, e), {
              registrationPlaceUrl: e.registrationPlaceUrl ? e.registrationPlaceUrl.toString() : void 0
            })).then(function(e) {
              return t.saveCredential(e), e.payload
            })
          }, e.prototype.loginViaFacebook = function(e) {
            var t = this;
            return this.doPost("auth/login/facebook", g(g({}, e), {
              registrationPlaceUrl: e.registrationPlaceUrl ? e.registrationPlaceUrl.toString() : void 0
            })).then(function(e) {
              return t.saveCredential(e), e.payload
            })
          }, e.prototype.loginViaGoogle = function(e) {
            var t = this;
            return this.doPost("auth/login/google", g(g({}, e), {
              registrationPlaceUrl: e.registrationPlaceUrl ? e.registrationPlaceUrl.toString() : void 0
            })).then(function(e) {
              return t.saveCredential(e), e.payload
            })
          }, e.prototype.loginViaUsat = function(e) {
            var t = this;
            return this.doPost("auth/login/usat", g(g({}, e), {
              registrationPlaceUrl: e.registrationPlaceUrl ? e.registrationPlaceUrl.toString() : void 0
            })).then(function(e) {
              return t.saveCredential(e), e.payload
            })
          }, e.prototype.loginViaHsn = function(e) {
            var t = this;
            return this.doPost("auth/login/hsn", g(g({}, e), {
              registrationPlaceUrl: e.registrationPlaceUrl ? e.registrationPlaceUrl.toString() : void 0
            })).then(function(e) {
              return t.saveCredential(e), e.payload
            })
          }, e.prototype.resendConfirmation = function(e) {
            return this.doPost("auth/email/resend-confirmation", g({}, e))
          }, e.prototype.confirmUser = function(e) {
            return this.doPost("auth/email/confirm", g({}, e))
          }, e.prototype.checkPasswordComplexity = function(e) {
            return this.doPost("auth/password/check-complexity", g({}, e))
          }, e.prototype.changePassword = function(e) {
            var t = this;
            return this.sessionStorage ? this.sessionStorage.getToken().then(function(n) {
              return t.doPost("auth/password/change", g({}, e), n)
            }) : Promise.reject("Please, provide session storage")
          }, e.prototype.requestResetPassword = function(e) {
            return this.doPost("auth/password/reset/request", g(g({}, e), {
              resetPasswordConfirmationFormUrl: e.resetPasswordConfirmationFormUrl ? e.resetPasswordConfirmationFormUrl.toString() : void 0,
              registrationPlaceUrl: e.registrationPlaceUrl ? e.registrationPlaceUrl.toString() : void 0
            }))
          }, e.prototype.confirmResetPassword = function(e) {
            return this.doPost("auth/password/reset/confirm", g({}, e))
          }, e.prototype.getFacebookButton = function() {
            return "https://login.arkadium.com/arenax-connect/azure.facebook.next.index.html"
          }, e.prototype.getGoogleButton = function() {
            return "https://login.arkadium.com/arenax-connect/azure.google.next.index.html"
          }, e
        }(),
        C = function() {
          function e() {}
          return e.prototype.setServer = function(e) {
            if (!e) throw Error("Please, provide server Url");
            this.server = e
          }, e.prototype.setSessionStorage = function(e) {
            this.sessionStorage = e
          }, e.prototype.saveCredential = function(e) {
            this.sessionStorage && this.sessionStorage.update(P.fromV1(e))
          }, e.prototype.makeRequest = function(e, t, n, r, i, o) {
            if (void 0 === n && (n = null), void 0 === r && (r = ""), void 0 === i && (i = ""), !this.server) throw Error("No server url provided");
            var s = new Headers({
              "Content-Type": "application/json"
            });
            return r && s.append("Authorization", "Bearer ".concat(r)), i && s.append("recaptcha", i), o && s.append("recaptcha-mode", o), y(this.server.toString() + t, g({
              method: e,
              headers: s
            }, n ? {
              body: JSON.stringify(g({}, n))
            } : {}))
          }, e.prototype.doPost = function(e, t, n) {
            void 0 === n && (n = "");
            var r = t.captchaToken || "",
              i = t.captchaMode || void 0;
            return delete t.captchaToken, delete t.captchaMode, this.makeRequest("POST", e, t, n, r, i)
          }, e.prototype.doPatch = function(e, t, n) {
            return void 0 === n && (n = ""), this.makeRequest("PATCH", e, t, n)
          }, e.prototype.doDelete = function(e, t, n) {
            return void 0 === n && (n = ""), this.makeRequest("DELETE", e, t, n)
          }, e.prototype.doGet = function(e, t) {
            return void 0 === t && (t = ""), this.makeRequest("GET", e, null, t)
          }, e.prototype.getUserProfile = function() {
            var e = this;
            return this.sessionStorage ? this.sessionStorage.getToken().then(function(t) {
              return e.doGet("user", t)
            }) : Promise.reject("Please, provide session storage")
          }, e.prototype.getPublicUserProfile = function(e) {
            var t = this;
            return this.sessionStorage ? this.sessionStorage.getToken().then(function(n) {
              return t.doGet("user/".concat(e), n)
            }) : Promise.reject("Please, provide session storage")
          }, e.prototype.updateUser = function(e) {
            var t = this;
            return this.sessionStorage ? this.sessionStorage.getToken().then(function(n) {
              return t.doPatch("user", g({}, e), n)
            }) : Promise.reject("Please, provide session storage")
          }, e.prototype.getUserByEmail = function(e) {
            return this.sessionStorage ? this.doGet("user/email/".concat(e)) : Promise.reject("Please, provide session storage")
          }, e.prototype.generateUserName = function() {
            return this.sessionStorage ? this.doGet("user/generate") : Promise.reject("Please, provide session storage")
          }, e.prototype.checkUserEmail = function(e) {
            return this.sessionStorage ? this.doPost("user/check-email", g({}, e)) : Promise.reject("Please, provide session storage")
          }, e.prototype.checkUserName = function(e) {
            return this.sessionStorage ? this.doPost("user/check-name", g({}, e)) : Promise.reject("Please, provide session storage")
          }, e.prototype.changeEmailRequest = function(e) {
            var t = this;
            return this.sessionStorage ? this.sessionStorage.getToken().then(function(n) {
              return t.doPost("user/email/request", g(g({}, e), {
                changeEmailFormUrl: e.changeEmailFormUrl ? e.changeEmailFormUrl.toString() : void 0
              }), n)
            }) : Promise.reject("Please, provide session storage")
          }, e.prototype.changeEmailConfirm = function(e) {
            return this.sessionStorage ? this.doPost("user/email/confirm", g({}, e)) : Promise.reject("Please, provide session storage")
          }, e.prototype.softDelete = function() {
            var e = this;
            return this.sessionStorage ? this.sessionStorage.getToken().then(function(t) {
              return e.doDelete("user", null, t)
            }) : Promise.reject("Please, provide session storage")
          }, e.prototype.gdprDelete = function() {
            var e = this;
            return this.sessionStorage ? this.sessionStorage.getToken().then(function(t) {
              return e.doDelete("user/gdpr", null, t)
            }) : Promise.reject("Please, provide session storage")
          }, e
        }(),
        A = function() {
          function e() {}
          return e.prototype.setServer = function(e) {
            if (!e) throw Error("Please, provide server Url");
            this.server = e
          }, e.prototype.setSessionStorage = function(e) {
            this.sessionStorage = e
          }, e.prototype.saveCredential = function(e) {
            this.sessionStorage && this.sessionStorage.update(P.fromV1(e))
          }, e.prototype.makeRequest = function(e, t, n, r) {
            if (void 0 === n && (n = null), void 0 === r && (r = ""), !this.server) throw Error("No server url provided");
            return y(this.server.toString() + t, g(g({
              method: e
            }, r ? {
              headers: {
                Authorization: "Bearer ".concat(r)
              }
            } : {}), n ? {
              body: JSON.stringify(g({}, n))
            } : {}))
          }, e.prototype.doPost = function(e, t, n) {
            return void 0 === n && (n = ""), this.makeRequest("POST", e, t, n)
          }, e.prototype.doPatch = function(e, t, n) {
            return void 0 === n && (n = ""), this.makeRequest("PATCH", e, t, n)
          }, e.prototype.doGet = function(e, t) {
            return void 0 === t && (t = ""), this.makeRequest("GET", e, null, t)
          }, e.prototype.getCountries = function() {
            var e = this;
            return this.sessionStorage ? this.sessionStorage.getToken().then(function(t) {
              return e.doGet("dictionary/country", t)
            }) : Promise.reject("Please, provide session storage")
          }, e.prototype.getLanguages = function() {
            var e = this;
            return this.sessionStorage ? this.sessionStorage.getToken().then(function(t) {
              return e.doGet("dictionary/language", t)
            }) : Promise.reject("Please, provide session storage")
          }, e
        }(),
        R = function() {
          function e() {}
          return e.prototype.setServer = function(e) {
            if (!e) throw Error("Please, provide server Url");
            this.server = e
          }, e.prototype.setSessionStorage = function(e) {
            this.sessionStorage = e
          }, e.prototype.saveCredential = function(e) {
            this.sessionStorage && this.sessionStorage.update(P.fromV1(e))
          }, e.prototype.makeRequest = function(e, t, n, r) {
            if (void 0 === n && (n = null), void 0 === r && (r = ""), !this.server) throw Error("No server url provided");
            return y(this.server.toString() + t, g(g({
              method: e
            }, r ? {
              headers: {
                Authorization: "Bearer ".concat(r)
              }
            } : {}), n ? {
              body: JSON.stringify(g({}, n))
            } : {}))
          }, e.prototype.doPost = function(e, t, n) {
            return void 0 === n && (n = ""), this.makeRequest("POST", e, t, n)
          }, e.prototype.doPatch = function(e, t, n) {
            return void 0 === n && (n = ""), this.makeRequest("PATCH", e, t, n)
          }, e.prototype.doDelete = function(e, t, n) {
            return void 0 === n && (n = ""), this.makeRequest("DELETE", e, t, n)
          }, e.prototype.doGet = function(e, t) {
            return void 0 === t && (t = ""), this.makeRequest("GET", e, null, t)
          }, e.prototype.getUserFavoriteGames = function() {
            var e = this;
            return this.sessionStorage ? this.sessionStorage.getToken().then(function(t) {
              return e.doGet("user-favorite-game", t)
            }) : Promise.reject("Please, provide session storage")
          }, e.prototype.addFavoriteGame = function(e) {
            var t = this;
            return this.sessionStorage ? this.sessionStorage.getToken().then(function(n) {
              return t.doPost("user-favorite-game", g({}, e), n)
            }) : Promise.reject("Please, provide session storage")
          }, e.prototype.deleteFavoriteGame = function(e) {
            var t = this;
            return this.sessionStorage ? this.sessionStorage.getToken().then(function(n) {
              return t.doDelete("user-favorite-game/".concat(e), null, n)
            }) : Promise.reject("Please, provide session storage")
          }, e
        }();
      (i = u || (u = {}))[i.Opened = 0] = "Opened", i[i.Closed = 1] = "Closed";
      var M = function() {
        function e() {}
        return e.prototype.onStateChange = function(e) {
          this.cb = e
        }, e.prototype.setState = function(e) {
          this.cb && this.cb(e)
        }, e
      }();
      (o = c || (c = {}))[o.onWidgetStateChanged = 1] = "onWidgetStateChanged", o[o.onAuthStateChanged = 2] = "onAuthStateChanged";
      var j = function(e) {
          this.isOpened = !1, this.isOpened = e
        },
        _ = function(e) {
          this.isAuthorised = !1, this.isAuthorised = e
        },
        I = function() {
          function e() {
            this.events = {}
          }
          return e.prototype.addEventListener = function(e, t) {
            this.events[e] ? this.events[e].push(t) : this.events[e] = [t]
          }, e.prototype.removeEventListener = function(e, t) {
            this.events[e] && (this.events[e] = this.events[e].filter(function(e) {
              return e !== t
            }))
          }, e.prototype.fire = function(e, t) {
            void 0 === t && (t = void 0), (this.events[e] || []).forEach(function(e) {
              return e(t)
            })
          }, e
        }(),
        D = function() {
          function e(e, t) {
            this.sessionStorage = null, this.apiRoot = e.apiRoot || "https://arenacloud.cdn.arkadiumhosted.com/uup-api-user-data-dev/api/v1", this.sessionStorage = t
          }
          return e.prototype.makeRequest = function(e, t, n, r) {
            return void 0 === r && (r = ""), y(t, g(g({
              method: e
            }, r ? {
              headers: {
                Authorization: "Bearer ".concat(r)
              }
            } : {}), n ? {
              body: JSON.stringify(g({}, n))
            } : {}))
          }, e.prototype.get = function(e, t) {
            var n, r = this,
              i = "".concat(this.apiRoot, "/user-data/game/").concat(e, "/").concat(t);
            return null == (n = this.sessionStorage) ? void 0 : n.getToken().then(function(e) {
              return r.makeRequest("GET", i, null, e)
            })
          }, e.prototype.save = function(e, t, n) {
            var r, i = this,
              o = "".concat(this.apiRoot, "/user-data/game/").concat(e, "/").concat(t);
            return n && !n.etag && delete n.etag, null == (r = this.sessionStorage) ? void 0 : r.getToken().then(function(e) {
              return i.makeRequest("POST", o, n, e)
            })
          }, e.prototype.delete = function(e, t, n) {
            var r, i = this,
              o = "".concat(this.apiRoot, "/user-data/game/").concat(e, "/").concat(t, "?etag=").concat(n);
            return null == (r = this.sessionStorage) ? void 0 : r.getToken().then(function(e) {
              return i.makeRequest("DELETE", o, null, e)
            })
          }, e.prototype.getKeys = function(e) {
            var t, n = this,
              r = "".concat(this.apiRoot, "/user-data-key/game/").concat(e);
            return null == (t = this.sessionStorage) ? void 0 : t.getToken().then(function(e) {
              return n.makeRequest("GET", r, null, e)
            })
          }, e
        }();
      (s = h || (h = {}))[s.InvalidRequestData = 1e3] = "InvalidRequestData", s[s.UserNotFound = 1001] = "UserNotFound", s[s.UserAlreadyExist = 1002] = "UserAlreadyExist", s[s.UserIsNotActive = 1003] = "UserIsNotActive", s[s.UserIsBanned = 1004] = "UserIsBanned", s[s.UserIsSoftDeleted = 1005] = "UserIsSoftDeleted", s[s.UserRemovedViaGDPR = 1006] = "UserRemovedViaGDPR", s[s.EmailDoesNotSpecified = 1007] = "EmailDoesNotSpecified", s[s.EmailAlreadyUsed = 1008] = "EmailAlreadyUsed", s[s.UserNameAlreadyUsed = 1009] = "UserNameAlreadyUsed", s[s.RefreshTokenIsInvalid = 1010] = "RefreshTokenIsInvalid", s[s.EmailOrPasswordIsIncorrect = 1011] = "EmailOrPasswordIsIncorrect", s[s.PasswordTooEasy = 1012] = "PasswordTooEasy", s[s.CountryIsInvalid = 1013] = "CountryIsInvalid", s[s.LanguageIsInvalid = 1014] = "LanguageIsInvalid", s[s.UserOldPasswordIsIncorrect = 1015] = "UserOldPasswordIsIncorrect", s[s.NewAndOldPasswordAreEquals = 1016] = "NewAndOldPasswordAreEquals", s[s.UserPasswordsAreNotEqual = 1017] = "UserPasswordsAreNotEqual", s[s.UserNotConfirmedError = 1018] = "UserNotConfirmedError", s[s.UserEmailConfirmationCodeIsInvalid = 1019] = "UserEmailConfirmationCodeIsInvalid", s[s.UserPasswordResetCodeIsInvalid = 1020] = "UserPasswordResetCodeIsInvalid", s[s.TooManyFailedLoginAttempts = 1021] = "TooManyFailedLoginAttempts", s[s.CaptchaValidationFailed = 1022] = "CaptchaValidationFailed", s[s.CaptchaScoreIsTooLow = 1023] = "CaptchaScoreIsTooLow", s[s.EmailSenderGeneralError = 2e3] = "EmailSenderGeneralError", s[s.EmailSenderEmailContentIsEmpty = 2001] = "EmailSenderEmailContentIsEmpty", s[s.ExternalProviderError = 2002] = "ExternalProviderError", s[s.NoEmailChangeRequest = 2003] = "NoEmailChangeRequest", s[s.EmailChangeRequestCodeIsInvalid = 2004] = "EmailChangeRequestCodeIsInvalid", s[s.UserHasNoActiveSubscriptions = 2005] = "UserHasNoActiveSubscriptions", s[s.SocialPasswordAlreadyExists = 2006] = "SocialPasswordAlreadyExists", s[s.EmailsShouldMatch = 2007] = "EmailsShouldMatch", s[s.ApplicationNotFound = 2008] = "ApplicationNotFound", s[s.ExternalAuthApplicationIsNotAllowed = 2009] = "ExternalAuthApplicationIsNotAllowed", s[s.ExternalAuthTokenIsInvalid = 2010] = "ExternalAuthTokenIsInvalid", (a = p || (p = {}))[a.v1 = 1] = "v1";
      var O = ((d = {})[p.v1] = {
        auth: new E,
        managment: new C,
        dictionary: new A,
        userFavoriteGame: new R
      }, d);

      function L(e) {
        var t, n, r = this;
        if (r = I.call(this) || this, !e.server) throw Error("Please, provide server Url");
        return r.server = e.server, r.uiManager = new M, r.uiManager.onStateChange(function(e) {
          switch (e) {
            case u.Opened:
              r.fire(c.onWidgetStateChanged, new j(!0));
              break;
            case u.Closed:
              r.fire(c.onWidgetStateChanged, new j(!1))
          }
        }), r.sessionStorage = e.sessionStorage ? e.sessionStorage : new k(e.server, {
          storage: e.tokenStorage,
          receiveInIframe: null == (t = e.sessionStorageInitParams) ? void 0 : t.receiveInIframe,
          broadcastToIframe: null == (n = e.sessionStorageInitParams) ? void 0 : n.broadcastToIframe
        }), r.sessionStorage.onUpdate(function() {
          r.fire(c.onAuthStateChanged, new _(r.sessionStorage.isAuthorised()))
        }), r
      }
      m(L, I), L.prototype.getAuthApi = function(e) {
        var t = this;
        return Object.keys(O[e]).forEach(function(n) {
          O[e][n].setServer(t.server), O[e][n].setSessionStorage(t.sessionStorage)
        }), Promise.resolve(O[e])
      }, L.prototype.getUserGameDataApi = function(e) {
        return new D(e, this.sessionStorage)
      }, L.prototype.getToken = function() {
        return this.sessionStorage.getToken()
      }, L.prototype.restoreState = function() {
        return this.sessionStorage.restoreState()
      }, L.prototype.checkAuthorization = function() {
        this.sessionStorage.checkAuthStatus()
      }, L.prototype.openWidget = function() {
        this.uiManager.setState(u.Opened)
      }, L.prototype.closeWidget = function() {
        this.uiManager.setState(u.Closed)
      }, L.prototype.getSessionStorage = function() {
        return this.sessionStorage
      }, L.prototype.logout = function() {
        this.sessionStorage.logout()
      }
    },
    50643: (e, t, n) => {
      var r = n(15007);
      e.exports = function(e) {
        if (Array.isArray(e)) return r(e)
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    51153: () => {},
    51208: () => {},
    53089: () => {},
    54633: () => {},
    54886: () => {},
    55641: () => {},
    56059: () => {},
    56142: (e, t, n) => {
      "use strict";
      n.d(t, {
        D: () => i
      });
      var r = n(77702);

      function i(e, t) {
        var n = {};
        if ("object" == typeof t)(0, r.Bx)(t, (t, i) => {
          if (null != t) {
            var o = (0, r.Jt)(e, i);
            n[(0, r.Tm)(o)] = String(t)
          }
        });
        else
          for (var i in e) {
            var o = e[i];
            null != o && (n[(0, r.Tm)(i)] = o)
          }
        return Object.defineProperty(n, "toString", {
          value: function() {
            return Object.keys(this).map(e => "".concat(e, ":").concat(this[e])).join(";")
          },
          writable: !1
        }), n
      }
    },
    57086: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "useReportWebVitals", {
        enumerable: !0,
        get: function() {
          return o
        }
      });
      let r = n(12115),
        i = n(4049);

      function o(e) {
        (0, r.useEffect)(() => {
          (0, i.onCLS)(e), (0, i.onFID)(e), (0, i.onLCP)(e), (0, i.onINP)(e), (0, i.onFCP)(e), (0, i.onTTFB)(e)
        }, [e])
      }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    57486: () => {},
    57690: () => {},
    57839: (e, t, n) => {
      var r = n(84936),
        i = /[^a-zA-Z0-9\\_:.-]/gim;

      function o(e) {
        return '"' === e[0] && '"' === e[e.length - 1] || "'" === e[0] && "'" === e[e.length - 1] ? e.substr(1, e.length - 2) : e
      }
      t.parseTag = function(e, t, n) {
        "use strict";
        var i = "",
          o = 0,
          s = !1,
          a = !1,
          l = 0,
          u = e.length,
          c = "",
          h = "";
        e: for (l = 0; l < u; l++) {
          var d = e.charAt(l);
          if (!1 === s) {
            if ("<" === d) {
              s = l;
              continue
            }
          } else if (!1 === a) {
            if ("<" === d) {
              i += n(e.slice(o, l)), s = l, o = l;
              continue
            }
            if (">" === d || l === u - 1) {
              i += n(e.slice(o, s)), c = function(e) {
                var t, n = r.spaceIndex(e);
                return t = -1 === n ? e.slice(1, -1) : e.slice(1, n + 1), "/" === (t = r.trim(t).toLowerCase()).slice(0, 1) && (t = t.slice(1)), "/" === t.slice(-1) && (t = t.slice(0, -1)), t
              }(h = e.slice(s, l + 1)), i += t(s, i.length, c, h, "</" === h.slice(0, 2)), o = l + 1, s = !1;
              continue
            }
            if ('"' === d || "'" === d)
              for (var p = 1, f = e.charAt(l - p);
                "" === f.trim() || "=" === f;) {
                if ("=" === f) {
                  a = d;
                  continue e
                }
                f = e.charAt(l - ++p)
              }
          } else if (d === a) {
            a = !1;
            continue
          }
        }
        return o < u && (i += n(e.substr(o))), i
      }, t.parseAttr = function(e, t) {
        "use strict";
        var n = 0,
          s = 0,
          a = [],
          l = !1,
          u = e.length;

        function c(e, n) {
          if (!((e = (e = r.trim(e)).replace(i, "").toLowerCase()).length < 1)) {
            var o = t(e, n || "");
            o && a.push(o)
          }
        }
        for (var h = 0; h < u; h++) {
          var d, p = e.charAt(h);
          if (!1 === l && "=" === p) {
            l = e.slice(n, h), n = h + 1, s = '"' === e.charAt(n) || "'" === e.charAt(n) ? n : function(e, t) {
              for (; t < e.length; t++) {
                var n = e[t];
                if (" " !== n) {
                  if ("'" === n || '"' === n) return t;
                  return -1
                }
              }
            }(e, h + 1);
            continue
          }
          if (!1 !== l && h === s) {
            if (-1 === (d = e.indexOf(p, h + 1))) break;
            c(l, r.trim(e.slice(s + 1, d))), l = !1, n = (h = d) + 1;
            continue
          }
          if (/\s|\n|\t/.test(p)) {
            if (e = e.replace(/\s|\n|\t/g, " "), !1 === l) {
              if (-1 === (d = function(e, t) {
                  for (; t < e.length; t++) {
                    var n = e[t];
                    if (" " !== n) {
                      if ("=" === n) return t;
                      return -1
                    }
                  }
                }(e, h))) {
                c(r.trim(e.slice(n, h))), l = !1, n = h + 1;
                continue
              }
              h = d - 1;
              continue
            }
            if (-1 !== (d = function(e, t) {
                for (; t > 0; t--) {
                  var n = e[t];
                  if (" " !== n) {
                    if ("=" === n) return t;
                    return -1
                  }
                }
              }(e, h - 1))) continue;
            c(l, o(r.trim(e.slice(n, h)))), l = !1, n = h + 1;
            continue
          }
        }
        return n < e.length && (!1 === l ? c(e.slice(n)) : c(l, o(r.trim(e.slice(n))))), r.trim(a.join(" "))
      }
    },
    59803: () => {},
    59888: e => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    59989: (e, t, n) => {
      "use strict";
      var r = n(20024);
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i = r(n(90961)),
        o = r(n(48303)),
        s = r(n(88927)),
        a = r(n(8262)),
        l = r(n(70780)),
        u = r(n(35129)),
        c = function(e) {
          (0, s.default)(r, e);
          var t, n = (t = function() {
            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
              return !1
            }
          }(), function() {
            var e, n = (0, l.default)(r);
            return e = t ? Reflect.construct(n, arguments, (0, l.default)(this).constructor) : n.apply(this, arguments), (0, a.default)(this, e)
          });

          function r() {
            return (0, o.default)(this, r), n.apply(this, arguments)
          }
          return (0, i.default)(r)
        }(r(n(10393)).default);
      t.default = c, (0, u.default)(c, "elementClassName", "CardMonthElement")
    },
    60061: () => {},
    60757: () => {},
    61288: () => {},
    65722: e => {
      "use strict";
      e.exports = JSON.parse('{"name":"@recurly/react-recurly","version":"2.0.1","description":"React components for Recurly.js","main":"lib-dist/index.js","types":"types/index.d.ts","repository":{"type":"git","url":"git+https://github.com/recurly/react-recurly.git"},"author":"Recurly","license":"MIT","bugs":{"url":"https://github.com/recurly/react-recurly/issues"},"homepage":"https://github.com/recurly/react-recurly#readme","peerDependencies":{"react":">= 18.0.0","react-dom":">= 18.0.0"},"dependencies":{"@types/recurly__recurly-js":"latest","memoize-one":"^6.0.0","prop-types":"^15.7.2"},"devDependencies":{"@babel/cli":"^7.8.4","@babel/core":"^7.21.8","@babel/plugin-proposal-class-properties":"^7.18.6","@babel/plugin-transform-runtime":"^7.21.4","@babel/preset-env":"^7.21.5","@babel/preset-react":"^7.18.6","@definitelytyped/dtslint":"^0.0.163","@recurly/public-api-test-server":"https://gitpkg.now.sh/recurly/recurly-js/packages/public-api-fixture-server?v4.23.2","@storybook/addon-essentials":"^7.0.24","@storybook/addon-interactions":"^7.0.24","@storybook/addon-links":"^7.0.24","@storybook/blocks":"^7.0.24","@storybook/react":"^7.0.24","@storybook/react-vite":"^7.0.24","@storybook/testing-library":"^0.0.14-next.2","@testing-library/react":"^14.0.0","@types/react":"^18.2.6","babel-loader":"^9.1.2","jest":"^29.5.0","jest-environment-jsdom":"^29.5.0","jest-transform-css":"^6.0.1","react":"^18.2.0","react-dom":"^18.2.0","react-test-renderer":"^18.2.0","recurly.js":"recurly/recurly-js","regenerator-runtime":"^0.13.11","storybook":"^7.0.24"},"scripts":{"prepublishOnly":"babel lib -d lib-dist"}}')
    },
    66257: (e, t, n) => {
      var r = n(3293);
      e.exports = function(e, t) {
        if (null == e) return {};
        var n, i, o = r(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (i = 0; i < s.length; i++) n = s[i], -1 === t.indexOf(n) && ({}).propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    68234: (e, t, n) => {
      var r = n(34583).FilterCSS,
        i = n(40357),
        o = n(57839),
        s = o.parseTag,
        a = o.parseAttr,
        l = n(84936);

      function u(e) {
        (e = function(e) {
          var t = {};
          for (var n in e) t[n] = e[n];
          return t
        }(e || {})).stripIgnoreTag && (e.onIgnoreTag && console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'), e.onIgnoreTag = i.onIgnoreTagStripAll), e.whiteList || e.allowList ? e.whiteList = function(e) {
          var t = {};
          for (var n in e) Array.isArray(e[n]) ? t[n.toLowerCase()] = e[n].map(function(e) {
            return e.toLowerCase()
          }) : t[n.toLowerCase()] = e[n];
          return t
        }(e.whiteList || e.allowList) : e.whiteList = i.whiteList, this.attributeWrapSign = !0 === e.singleQuotedAttributeValue ? "'" : i.attributeWrapSign, e.onTag = e.onTag || i.onTag, e.onTagAttr = e.onTagAttr || i.onTagAttr, e.onIgnoreTag = e.onIgnoreTag || i.onIgnoreTag, e.onIgnoreTagAttr = e.onIgnoreTagAttr || i.onIgnoreTagAttr, e.safeAttrValue = e.safeAttrValue || i.safeAttrValue, e.escapeHtml = e.escapeHtml || i.escapeHtml, this.options = e, !1 === e.css ? this.cssFilter = !1 : (e.css = e.css || {}, this.cssFilter = new r(e.css))
      }
      u.prototype.process = function(e) {
        if (!(e = (e = e || "").toString())) return "";
        var t = this.options,
          n = t.whiteList,
          r = t.onTag,
          o = t.onIgnoreTag,
          u = t.onTagAttr,
          c = t.onIgnoreTagAttr,
          h = t.safeAttrValue,
          d = t.escapeHtml,
          p = this.attributeWrapSign,
          f = this.cssFilter;
        t.stripBlankChar && (e = i.stripBlankChar(e)), t.allowCommentTag || (e = i.stripCommentTag(e));
        var m = !1;
        t.stripIgnoreTagBody && (o = (m = i.StripTagBody(t.stripIgnoreTagBody, o)).onIgnoreTag);
        var g = s(e, function(e, t, i, s, m) {
          var g = {
              sourcePosition: e,
              position: t,
              isClosing: m,
              isWhite: Object.prototype.hasOwnProperty.call(n, i)
            },
            v = r(i, s, g);
          if (null != v) return v;
          if (g.isWhite) {
            if (g.isClosing) return "</" + i + ">";
            var y = function(e) {
                var t = l.spaceIndex(e);
                if (-1 === t) return {
                  html: "",
                  closing: "/" === e[e.length - 2]
                };
                var n = "/" === (e = l.trim(e.slice(t + 1, -1)))[e.length - 1];
                return n && (e = l.trim(e.slice(0, -1))), {
                  html: e,
                  closing: n
                }
              }(s),
              b = n[i],
              w = a(y.html, function(e, t) {
                var n = -1 !== l.indexOf(b, e),
                  r = u(i, e, t, n);
                return null != r ? r : n ? (t = h(i, e, t, f)) ? e + "=" + p + t + p : e : null != (r = c(i, e, t, n)) ? r : void 0
              });
            return s = "<" + i, w && (s += " " + w), y.closing && (s += " /"), s += ">"
          }
          return null != (v = o(i, s, g)) ? v : d(s)
        }, d);
        return m && (g = m.remove(g)), g
      }, e.exports = u
    },
    70060: () => {},
    70780: e => {
      function t(n) {
        return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n)
      }
      e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    72481: e => {
      e.exports = function(e) {
        if ("u" > typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    74502: () => {},
    76413: () => {},
    77238: () => {},
    77377: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
          return l
        }
      });
      let r = n(95155),
        i = n(12115),
        o = n(93694);

      function s(e) {
        return {
          default: e && "default" in e ? e.default : e
        }
      }
      n(13587);
      let a = {
          loader: () => Promise.resolve(s(() => null)),
          loading: null,
          ssr: !0
        },
        l = function(e) {
          let t = {
              ...a,
              ...e
            },
            n = (0, i.lazy)(() => t.loader().then(s)),
            l = t.loading;

          function u(e) {
            let s = l ? (0, r.jsx)(l, {
                isLoading: !0,
                pastDelay: !0,
                error: null
              }) : null,
              a = !t.ssr || !!t.loading,
              u = a ? i.Suspense : i.Fragment,
              c = t.ssr ? (0, r.jsxs)(r.Fragment, {
                children: [null, (0, r.jsx)(n, {
                  ...e
                })]
              }) : (0, r.jsx)(o.BailoutToCSR, {
                reason: "next/dynamic",
                children: (0, r.jsx)(n, {
                  ...e
                })
              });
            return (0, r.jsx)(u, {
              ...a ? {
                fallback: s
              } : {},
              children: c
            })
          }
          return u.displayName = "LoadableComponent", u
        }
    },
    77702: (e, t, n) => {
      "use strict";

      function r(e) {
        var t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      }

      function i(e, t) {
        var n = e;
        for (var r of t) {
          if (!(r in n)) throw Error("Path ".concat(t.join(" -> "), " does not exist in object"));
          n = n[r]
        }
        return n
      }
      n.d(t, {
        Bx: () => function e(t, n) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            i = {};
          for (var o in t) {
            var s = t[o],
              a = [...r, o];
            "string" == typeof s || "number" == typeof s || null == s ? i[o] = n(s, a) : "object" != typeof s || Array.isArray(s) ? console.warn('Skipping invalid key "'.concat(a.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(s) ? "Array" : typeof s, '"')) : i[o] = e(s, n, a)
          }
          return i
        },
        Jt: () => i,
        Tm: () => r
      })
    },
    80987: (e, t, n) => {
      var r = n(24082).default;
      e.exports = function(e, t) {
        if ("object" != r(e) || !e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var i = n.call(e, t || "default");
          if ("object" != r(i)) return i;
          throw TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    84007: e => {
      e.exports = function(e) {
        if (Array.isArray(e)) return e
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    84936: e => {
      e.exports = {
        indexOf: function(e, t) {
          var n, r;
          if (Array.prototype.indexOf) return e.indexOf(t);
          for (n = 0, r = e.length; n < r; n++)
            if (e[n] === t) return n;
          return -1
        },
        forEach: function(e, t, n) {
          var r, i;
          if (Array.prototype.forEach) return e.forEach(t, n);
          for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e)
        },
        trim: function(e) {
          return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
        },
        spaceIndex: function(e) {
          var t = /\s|\n|\t/.exec(e);
          return t ? t.index : -1
        }
      }
    },
    85729: (e, t, n) => {
      e.exports = n(57086)
    },
    87409: e => {
      e.exports = function(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    87720: (e, t, n) => {
      "use strict";
      n.d(t, {
        UC: () => en,
        VY: () => ei,
        ZL: () => ee,
        bL: () => J,
        bm: () => eo,
        hE: () => er,
        hJ: () => et,
        l9: () => Q
      });
      var r = n(12115),
        i = n(65453),
        o = n(633),
        s = n(75021),
        a = n(5337),
        l = n(38665),
        u = n(81354),
        c = n(4899),
        h = n(76990),
        d = n(31557),
        p = n(13275),
        f = n(1977),
        m = n(74967),
        g = n(65828),
        v = n(11792),
        y = n(95155),
        b = "Dialog",
        [w, x] = (0, s.A)(b),
        [S, P] = w(b),
        T = e => {
          let {
            __scopeDialog: t,
            children: n,
            open: i,
            defaultOpen: o,
            onOpenChange: s,
            modal: u = !0
          } = e, c = r.useRef(null), h = r.useRef(null), [d, p] = (0, l.i)({
            prop: i,
            defaultProp: o ?? !1,
            onChange: s,
            caller: b
          });
          return (0, y.jsx)(S, {
            scope: t,
            triggerRef: c,
            contentRef: h,
            contentId: (0, a.B)(),
            titleId: (0, a.B)(),
            descriptionId: (0, a.B)(),
            open: d,
            onOpenChange: p,
            onOpenToggle: r.useCallback(() => p(e => !e), [p]),
            modal: u,
            children: n
          })
        };
      T.displayName = b;
      var k = "DialogTrigger",
        E = r.forwardRef((e, t) => {
          let {
            __scopeDialog: n,
            ...r
          } = e, s = P(k, n), a = (0, o.s)(t, s.triggerRef);
          return (0, y.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": s.open,
            "aria-controls": s.contentId,
            "data-state": q(s.open),
            ...r,
            ref: a,
            onClick: (0, i.mK)(e.onClick, s.onOpenToggle)
          })
        });
      E.displayName = k;
      var C = "DialogPortal",
        [A, R] = w(C, {
          forceMount: void 0
        }),
        M = e => {
          let {
            __scopeDialog: t,
            forceMount: n,
            children: i,
            container: o
          } = e, s = P(C, t);
          return (0, y.jsx)(A, {
            scope: t,
            forceMount: n,
            children: r.Children.map(i, e => (0, y.jsx)(d.C, {
              present: n || s.open,
              children: (0, y.jsx)(h.Z, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        };
      M.displayName = C;
      var j = "DialogOverlay",
        _ = r.forwardRef((e, t) => {
          let n = R(j, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...i
            } = e,
            o = P(j, e.__scopeDialog);
          return o.modal ? (0, y.jsx)(d.C, {
            present: r || o.open,
            children: (0, y.jsx)(D, {
              ...i,
              ref: t
            })
          }) : null
        });
      _.displayName = j;
      var I = (0, v.TL)("DialogOverlay.RemoveScroll"),
        D = r.forwardRef((e, t) => {
          let {
            __scopeDialog: n,
            ...r
          } = e, i = P(j, n);
          return (0, y.jsx)(m.A, {
            as: I,
            allowPinchZoom: !0,
            shards: [i.contentRef],
            children: (0, y.jsx)(p.sG.div, {
              "data-state": q(i.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        }),
        O = "DialogContent",
        L = r.forwardRef((e, t) => {
          let n = R(O, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...i
            } = e,
            o = P(O, e.__scopeDialog);
          return (0, y.jsx)(d.C, {
            present: r || o.open,
            children: o.modal ? (0, y.jsx)(V, {
              ...i,
              ref: t
            }) : (0, y.jsx)(F, {
              ...i,
              ref: t
            })
          })
        });
      L.displayName = O;
      var V = r.forwardRef((e, t) => {
          let n = P(O, e.__scopeDialog),
            s = r.useRef(null),
            a = (0, o.s)(t, n.contentRef, s);
          return r.useEffect(() => {
            let e = s.current;
            if (e) return (0, g.Eq)(e)
          }, []), (0, y.jsx)(N, {
            ...e,
            ref: a,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, i.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, i.mK)(e.onPointerDownOutside, e => {
              let t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            }),
            onFocusOutside: (0, i.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        F = r.forwardRef((e, t) => {
          let n = P(O, e.__scopeDialog),
            i = r.useRef(!1),
            o = r.useRef(!1);
          return (0, y.jsx)(N, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (i.current || n.triggerRef.current?.focus(), t.preventDefault()), i.current = !1, o.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (i.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
              let r = t.target;
              n.triggerRef.current?.contains(r) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        }),
        N = r.forwardRef((e, t) => {
          let {
            __scopeDialog: n,
            trapFocus: i,
            onOpenAutoFocus: s,
            onCloseAutoFocus: a,
            ...l
          } = e, h = P(O, n), d = r.useRef(null), p = (0, o.s)(t, d);
          return (0, f.Oh)(), (0, y.jsxs)(y.Fragment, {
            children: [(0, y.jsx)(c.n, {
              asChild: !0,
              loop: !0,
              trapped: i,
              onMountAutoFocus: s,
              onUnmountAutoFocus: a,
              children: (0, y.jsx)(u.qW, {
                role: "dialog",
                id: h.contentId,
                "aria-describedby": h.descriptionId,
                "aria-labelledby": h.titleId,
                "data-state": q(h.open),
                ...l,
                ref: p,
                onDismiss: () => h.onOpenChange(!1)
              })
            }), (0, y.jsxs)(y.Fragment, {
              children: [(0, y.jsx)(Y, {
                titleId: h.titleId
              }), (0, y.jsx)(Z, {
                contentRef: d,
                descriptionId: h.descriptionId
              })]
            })]
          })
        }),
        U = "DialogTitle",
        B = r.forwardRef((e, t) => {
          let {
            __scopeDialog: n,
            ...r
          } = e, i = P(U, n);
          return (0, y.jsx)(p.sG.h2, {
            id: i.titleId,
            ...r,
            ref: t
          })
        });
      B.displayName = U;
      var K = "DialogDescription",
        $ = r.forwardRef((e, t) => {
          let {
            __scopeDialog: n,
            ...r
          } = e, i = P(K, n);
          return (0, y.jsx)(p.sG.p, {
            id: i.descriptionId,
            ...r,
            ref: t
          })
        });
      $.displayName = K;
      var W = "DialogClose",
        G = r.forwardRef((e, t) => {
          let {
            __scopeDialog: n,
            ...r
          } = e, o = P(W, n);
          return (0, y.jsx)(p.sG.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, i.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });

      function q(e) {
        return e ? "open" : "closed"
      }
      G.displayName = W;
      var z = "DialogTitleWarning",
        [H, X] = (0, s.q)(z, {
          contentName: O,
          titleName: U,
          docsSlug: "dialog"
        }),
        Y = ({
          titleId: e
        }) => {
          let t = X(z),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return r.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
          }, [n, e]), null
        },
        Z = ({
          contentRef: e,
          descriptionId: t
        }) => {
          let n = X("DialogDescriptionWarning"),
            i = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;
          return r.useEffect(() => {
            let n = e.current?.getAttribute("aria-describedby");
            t && n && (document.getElementById(t) || console.warn(i))
          }, [i, e, t]), null
        },
        J = T,
        Q = E,
        ee = M,
        et = _,
        en = L,
        er = B,
        ei = $,
        eo = G
    },
    88246: (e, t, n) => {
      "use strict";
      var r = n(20024);
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function() {
        var e = (0, o.useContext)(s.RecurlyElementsContext);
        if (!e || !e.elements) throw Error("It looks like you are trying to use Recurly outside of an Elements context.\n       Please be sure the component that calls 'useRecurly' is within an <Elements> component.");
        var t = e.elements,
          n = l(l({}, t.recurly), {}, {
            token: function() {
              for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
              return (e = t.recurly).token.apply(e, [t].concat(r))
            }
          });
        return Object.setPrototypeOf(n, t.recurly), n
      };
      var i = r(n(35129)),
        o = n(12115),
        s = n(35111);

      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? a(Object(n), !0).forEach(function(t) {
            (0, i.default)(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }
    },
    88627: (e, t, n) => {
      "use strict";
      var r = n(20024);
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = t.RecurlyContext = void 0;
      var i = r(n(66257)),
        o = r(n(48303)),
        s = r(n(90961)),
        a = r(n(88927)),
        l = r(n(8262)),
        u = r(n(70780)),
        c = r(n(35129)),
        h = r(n(12115)),
        d = r(n(23833)),
        p = n(65722),
        f = ["children"],
        m = h.default.createContext({
          recurly: null
        });
      t.RecurlyContext = m;
      var g = m.Provider,
        v = function(e) {
          (0, a.default)(r, e);
          var t, n = (t = function() {
            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
              return !1
            }
          }(), function() {
            var e, n = (0, u.default)(r);
            return e = t ? Reflect.construct(n, arguments, (0, u.default)(this).constructor) : n.apply(this, arguments), (0, l.default)(this, e)
          });

          function r(e) {
            if ((0, o.default)(this, r), !((u = n.call(this, e)).props.publicKey || u.props.hostname)) throw Error("\n        Please pass your 'publicKey' value to this RecurlyProvider.\n        Example: <RecurlyProvider publicKey=\"MY_PUBLIC_KEY\">\n      ");
            if (!window.recurly || !window.recurly.Recurly) throw Error("\n        Please load Recurly.js (https://js.recurly.com/v4/recurly.js) on this page prior to\n        loading your React application.\n      ");
            var t, s, a, l, u, c = u.props;
            return t = (c.children, (0, i.default)(c, f)), (l = (s = window.recurly.Recurly.__instanceCache = window.recurly.Recurly.__instanceCache || {})[a = JSON.stringify(t)] || new window.recurly.Recurly).configure(t), s[a] = l, u._recurly = l, !r.hasReportedInitialization && u._recurly.report && (u._recurly.ready(function() {
              u._recurly.report("react-recurly", {
                version: p.version
              })
            }), r.hasReportedInitialization = !0), u
          }
          return (0, s.default)(r, [{
            key: "render",
            value: function() {
              return h.default.createElement(g, {
                value: {
                  recurly: this._recurly
                }
              }, this.props.children)
            }
          }]), r
        }(h.default.Component);
      t.default = v, (0, c.default)(v, "propTypes", {
        publicKey: d.default.string,
        hostname: d.default.string,
        currency: d.default.string,
        required: d.default.arrayOf(d.default.string),
        timeout: d.default.number,
        fraud: d.default.shape({
          kount: d.default.shape({
            dataCollector: d.default.bool
          }),
          braintree: d.default.shape({
            deviceData: d.default.string
          }),
          litle: d.default.shape({
            sessionId: d.default.string
          })
        })
      }), (0, c.default)(v, "defaultProps", {
        publicKey: ""
      })
    },
    88926: () => {},
    88927: (e, t, n) => {
      var r = n(11992);
      e.exports = function(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && r(e, t)
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    89126: () => {},
    89367: (e, t, n) => {
      "use strict";
      var r = n(20024);
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c,
          n = (0, l.default)(),
          r = (0, a.useState)(!0),
          h = (0, s.default)(r, 2),
          d = h[0],
          p = h[1],
          f = (0, a.useState)(e || {}),
          m = (0, s.default)(f, 2),
          g = m[0],
          v = m[1],
          y = (0, a.useState)(n.Pricing.Checkout()),
          b = (0, s.default)(y, 2),
          w = b[0],
          x = b[1];
        return (0, a.useEffect)(function() {
          p(!0);
          var e, r, a = g.subscriptions,
            l = g.adjustments,
            c = void 0 === l ? [] : l,
            h = (0, o.default)(g, u),
            d = n.Pricing.Checkout();
          (e = void 0 === a ? [] : a, r = d, Promise.all(e.reduce(function(e, r) {
            var o, s = e.checkoutPricing,
              a = e.subscriptionPricings,
              l = r.plan,
              u = r.tax,
              c = r.addons,
              d = void 0 === c ? [] : c,
              p = r.quantity;
            return o = h.currency ? n.Pricing.Subscription().currency(h.currency).plan(l, {
              quantity: p
            }) : n.Pricing.Subscription().plan(l, {
              quantity: p
            }), d.length && (o = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                n = arguments.length > 1 ? arguments[1] : void 0;
              return e.reduce(function(e, t) {
                var n = t.code,
                  r = t.quantity;
                return e.addon(n, {
                  quantity: r
                })
              }, n).catch(t)
            }(d, o)), u && (o = o.tax(u)), o = o.catch(t), {
              checkoutPricing: s.subscription(o.done()).catch(t),
              subscriptionPricings: [].concat((0, i.default)(a), [o])
            }
          }, {
            checkoutPricing: r,
            subscriptionPricings: []
          }).subscriptionPricings)).then(function() {
            var e, n;
            d = (d = function(e, n) {
              var r = Object.entries(e);
              if (!r.length) return n.reprice();
              var i = n.pricing.PRICING_METHODS,
                o = ["reset", "remove", "reprice", "subscription", "adjustment", "addon", "plan"],
                a = i.filter(function(e) {
                  return !o.includes(e)
                });
              return r.reduce(function(e, n) {
                var r = (0, s.default)(n, 2),
                  i = r[0],
                  o = r[1];
                return o && a.includes(i) ? e[i](o).catch(t) : e
              }, n)
            }(h, (e = c, n = d, d = e.length ? e.reduce(function(e, n) {
              return e.adjustment(n).catch(t)
            }, n) : n.reprice()))).reprice().done(function() {
              x(d), p(!1)
            })
          })
        }, [g, t, n.Pricing]), [{
          price: w && structuredClone(w.price) || {},
          loading: d
        }, v, w]
      }, t.throwError = c;
      var i = r(n(22326)),
        o = r(n(66257)),
        s = r(n(94645)),
        a = n(12115),
        l = r(n(88246)),
        u = ["subscriptions", "adjustments"];

      function c(e) {
        throw e
      }
    },
    90961: (e, t, n) => {
      var r = n(2990);

      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, r(i.key), i)
        }
      }
      e.exports = function(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    92336: () => {},
    93694: (e, t, n) => {
      "use strict";

      function r({
        reason: e,
        children: t
      }) {
        return t
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "BailoutToCSR", {
        enumerable: !0,
        get: function() {
          return r
        }
      }), n(42250)
    },
    94645: (e, t, n) => {
      var r = n(84007),
        i = n(2208),
        o = n(99766),
        s = n(6854);
      e.exports = function(e, t) {
        return r(e) || i(e, t) || o(e, t) || s()
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    96743: () => {},
    96811: () => {},
    99365: () => {},
    99766: (e, t, n) => {
      var r = n(15007);
      e.exports = function(e, t) {
        if (e) {
          if ("string" == typeof e) return r(e, t);
          var n = ({}).toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
        }
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    }
  }
]);