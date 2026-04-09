! function() {
  try {
    var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d2d8ab63-6ee5-4405-9966-5e02b2c4a6af", e._sentryDebugIdIdentifier = "sentry-dbid-d2d8ab63-6ee5-4405-9966-5e02b2c4a6af")
  } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8596], {
    1977: (e, t, n) => {
      n.d(t, {
        Oh: () => i
      });
      var r = n(12115),
        o = 0;

      function i() {
        r.useEffect(() => {
          let e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? a()), document.body.insertAdjacentElement("beforeend", e[1] ?? a()), o++, () => {
            1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), o--
          }
        }, [])
      }

      function a() {
        let e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
    },
    3763: (e, t, n) => {
      n.d(t, {
        Z: () => o
      });
      var r = n(12115);

      function o(e) {
        let t = r.useRef({
          value: e,
          previous: e
        });
        return r.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }
    },
    4899: (e, t, n) => {
      let r;
      n.d(t, {
        n: () => f
      });
      var o = n(12115),
        i = n(633),
        a = n(13275),
        l = n(58069),
        s = n(95155),
        u = "focusScope.autoFocusOnMount",
        c = "focusScope.autoFocusOnUnmount",
        d = {
          bubbles: !1,
          cancelable: !0
        },
        f = o.forwardRef((e, t) => {
          let {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: f,
            onUnmountAutoFocus: g,
            ...y
          } = e, [w, b] = o.useState(null), x = (0, l.c)(f), S = (0, l.c)(g), E = o.useRef(null), C = (0, i.s)(t, e => b(e)), k = o.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          o.useEffect(() => {
            if (r) {
              let e = function(e) {
                  if (k.paused || !w) return;
                  let t = e.target;
                  w.contains(t) ? E.current = t : v(E.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (k.paused || !w) return;
                  let t = e.relatedTarget;
                  null !== t && (w.contains(t) || v(E.current, {
                    select: !0
                  }))
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              let n = new MutationObserver(function(e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && v(w)
              });
              return w && n.observe(w, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
              }
            }
          }, [r, w, k.paused]), o.useEffect(() => {
            if (w) {
              m.add(k);
              let e = document.activeElement;
              if (!w.contains(e)) {
                let t = new CustomEvent(u, d);
                w.addEventListener(u, x), w.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  let n = document.activeElement;
                  for (let r of e)
                    if (v(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(p(w).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && v(w))
              }
              return () => {
                w.removeEventListener(u, x), setTimeout(() => {
                  let t = new CustomEvent(c, d);
                  w.addEventListener(c, S), w.dispatchEvent(t), t.defaultPrevented || v(e ?? document.body, {
                    select: !0
                  }), w.removeEventListener(c, S), m.remove(k)
                }, 0)
              }
            }
          }, [w, x, S, k]);
          let R = o.useCallback(e => {
            if (!n && !r || k.paused) return;
            let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              var i;
              let t, r = e.currentTarget,
                [a, l] = [h(t = p(i = r), i), h(t.reverse(), i)];
              a && l ? e.shiftKey || o !== l ? e.shiftKey && o === a && (e.preventDefault(), n && v(l, {
                select: !0
              })) : (e.preventDefault(), n && v(a, {
                select: !0
              })) : o === r && e.preventDefault()
            }
          }, [n, r, k.paused]);
          return (0, s.jsx)(a.sG.div, {
            tabIndex: -1,
            ...y,
            ref: C,
            onKeyDown: R
          })
        });

      function p(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function h(e, t) {
        for (let n of e)
          if (! function(e, {
              upTo: t
            }) {
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === t || e !== t);) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement
              }
              return !1
            }(n, {
              upTo: t
            })) return n
      }

      function v(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
        }
      }
      f.displayName = "FocusScope";
      var m = (r = [], {
        add(e) {
          let t = r[0];
          e !== t && t?.pause(), (r = g(r, e)).unshift(e)
        },
        remove(e) {
          r = g(r, e), r[0]?.resume()
        }
      });

      function g(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
    },
    18596: (e, t, n) => {
      n.d(t, {
        In: () => eN,
        LM: () => eI,
        UC: () => eA,
        WT: () => eT,
        YJ: () => eL,
        ZL: () => eM,
        bL: () => ek,
        l9: () => eR,
        p4: () => eP,
        q7: () => ej
      });
      var r = n(12115),
        o = n(47650),
        i = n(82459),
        a = n(65453),
        l = n(97968),
        s = n(633),
        u = n(75021),
        c = n(90471),
        d = n(81354),
        f = n(1977),
        p = n(4899),
        h = n(5337),
        v = n(13593),
        m = n(76990),
        g = n(13275),
        y = n(11792),
        w = n(58069),
        b = n(38665),
        x = n(90804),
        S = n(3763),
        E = n(61440),
        C = n(65828),
        k = n(74967),
        R = n(95155),
        T = [" ", "Enter", "ArrowUp", "ArrowDown"],
        N = [" ", "Enter"],
        M = "Select",
        [A, I, L] = (0, l.N)(M),
        [j, P] = (0, u.A)(M, [L, v.Bk]),
        D = (0, v.Bk)(),
        [K, O] = j(M),
        [_, B] = j(M),
        F = e => {
          let {
            __scopeSelect: t,
            children: n,
            open: o,
            defaultOpen: i,
            onOpenChange: a,
            value: l,
            defaultValue: s,
            onValueChange: u,
            dir: d,
            name: f,
            autoComplete: p,
            disabled: m,
            required: g,
            form: y
          } = e, w = D(t), [x, S] = r.useState(null), [E, C] = r.useState(null), [k, T] = r.useState(!1), N = (0, c.jH)(d), [I, L] = (0, b.i)({
            prop: o,
            defaultProp: i ?? !1,
            onChange: a,
            caller: M
          }), [j, P] = (0, b.i)({
            prop: l,
            defaultProp: s,
            onChange: u,
            caller: M
          }), O = r.useRef(null), B = !x || y || !!x.closest("form"), [F, W] = r.useState(new Set), H = Array.from(F).map(e => e.props.value).join(";");
          return (0, R.jsx)(v.bL, {
            ...w,
            children: (0, R.jsxs)(K, {
              required: g,
              scope: t,
              trigger: x,
              onTriggerChange: S,
              valueNode: E,
              onValueNodeChange: C,
              valueNodeHasChildren: k,
              onValueNodeHasChildrenChange: T,
              contentId: (0, h.B)(),
              value: j,
              onValueChange: P,
              open: I,
              onOpenChange: L,
              dir: N,
              triggerPointerDownPosRef: O,
              disabled: m,
              children: [(0, R.jsx)(A.Provider, {
                scope: t,
                children: (0, R.jsx)(_, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: r.useCallback(e => {
                    W(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: r.useCallback(e => {
                    W(t => {
                      let n = new Set(t);
                      return n.delete(e), n
                    })
                  }, []),
                  children: n
                })
              }), B ? (0, R.jsxs)(ex, {
                "aria-hidden": !0,
                required: g,
                tabIndex: -1,
                name: f,
                autoComplete: p,
                value: j,
                onChange: e => P(e.target.value),
                disabled: m,
                form: y,
                children: [void 0 === j ? (0, R.jsx)("option", {
                  value: ""
                }) : null, Array.from(F)]
              }, H) : null]
            })
          })
        };
      F.displayName = M;
      var W = "SelectTrigger",
        H = r.forwardRef((e, t) => {
          let {
            __scopeSelect: n,
            disabled: o = !1,
            ...i
          } = e, l = D(n), u = O(W, n), c = u.disabled || o, d = (0, s.s)(t, u.onTriggerChange), f = I(n), p = r.useRef("touch"), [h, m, y] = eE(e => {
            let t = f().filter(e => !e.disabled),
              n = t.find(e => e.value === u.value),
              r = eC(t, e, n);
            void 0 !== r && u.onValueChange(r.value)
          }), w = e => {
            c || (u.onOpenChange(!0), y()), e && (u.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, R.jsx)(v.Mz, {
            asChild: !0,
            ...l,
            children: (0, R.jsx)(g.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": u.contentId,
              "aria-expanded": u.open,
              "aria-required": u.required,
              "aria-autocomplete": "none",
              dir: u.dir,
              "data-state": u.open ? "open" : "closed",
              disabled: c,
              "data-disabled": c ? "" : void 0,
              "data-placeholder": eS(u.value) ? "" : void 0,
              ...i,
              ref: d,
              onClick: (0, a.mK)(i.onClick, e => {
                e.currentTarget.focus(), "mouse" !== p.current && w(e)
              }),
              onPointerDown: (0, a.mK)(i.onPointerDown, e => {
                p.current = e.pointerType;
                let t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (w(e), e.preventDefault())
              }),
              onKeyDown: (0, a.mK)(i.onKeyDown, e => {
                let t = "" !== h.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || m(e.key), (!t || " " !== e.key) && T.includes(e.key) && (w(), e.preventDefault())
              })
            })
          })
        });
      H.displayName = W;
      var z = "SelectValue",
        G = r.forwardRef((e, t) => {
          let {
            __scopeSelect: n,
            className: r,
            style: o,
            children: i,
            placeholder: a = "",
            ...l
          } = e, u = O(z, n), {
            onValueNodeHasChildrenChange: c
          } = u, d = void 0 !== i, f = (0, s.s)(t, u.onValueNodeChange);
          return (0, x.N)(() => {
            c(d)
          }, [c, d]), (0, R.jsx)(g.sG.span, {
            ...l,
            ref: f,
            style: {
              pointerEvents: "none"
            },
            children: eS(u.value) ? (0, R.jsx)(R.Fragment, {
              children: a
            }) : i
          })
        });
      G.displayName = z;
      var V = r.forwardRef((e, t) => {
        let {
          __scopeSelect: n,
          children: r,
          ...o
        } = e;
        return (0, R.jsx)(g.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼"
        })
      });
      V.displayName = "SelectIcon";
      var q = e => (0, R.jsx)(m.Z, {
        asChild: !0,
        ...e
      });
      q.displayName = "SelectPortal";
      var U = "SelectContent",
        X = r.forwardRef((e, t) => {
          let n = O(U, e.__scopeSelect),
            [i, a] = r.useState();
          return ((0, x.N)(() => {
            a(new DocumentFragment)
          }, []), n.open) ? (0, R.jsx)(J, {
            ...e,
            ref: t
          }) : i ? o.createPortal((0, R.jsx)(Y, {
            scope: e.__scopeSelect,
            children: (0, R.jsx)(A.Slot, {
              scope: e.__scopeSelect,
              children: (0, R.jsx)("div", {
                children: e.children
              })
            })
          }), i) : null
        });
      X.displayName = U;
      var [Y, Z] = j(U), Q = (0, y.TL)("SelectContent.RemoveScroll"), J = r.forwardRef((e, t) => {
        let {
          __scopeSelect: n,
          position: o = "item-aligned",
          onCloseAutoFocus: i,
          onEscapeKeyDown: l,
          onPointerDownOutside: u,
          side: c,
          sideOffset: h,
          align: v,
          alignOffset: m,
          arrowPadding: g,
          collisionBoundary: y,
          collisionPadding: w,
          sticky: b,
          hideWhenDetached: x,
          avoidCollisions: S,
          ...E
        } = e, T = O(U, n), [N, M] = r.useState(null), [A, L] = r.useState(null), j = (0, s.s)(t, e => M(e)), [P, D] = r.useState(null), [K, _] = r.useState(null), B = I(n), [F, W] = r.useState(!1), H = r.useRef(!1);
        r.useEffect(() => {
          if (N) return (0, C.Eq)(N)
        }, [N]), (0, f.Oh)();
        let z = r.useCallback(e => {
            let [t, ...n] = B().map(e => e.ref.current), [r] = n.slice(-1), o = document.activeElement;
            for (let n of e)
              if (n === o || (n?.scrollIntoView({
                  block: "nearest"
                }), n === t && A && (A.scrollTop = 0), n === r && A && (A.scrollTop = A.scrollHeight), n?.focus(), document.activeElement !== o)) return
          }, [B, A]),
          G = r.useCallback(() => z([P, N]), [z, P, N]);
        r.useEffect(() => {
          F && G()
        }, [F, G]);
        let {
          onOpenChange: V,
          triggerPointerDownPosRef: q
        } = T;
        r.useEffect(() => {
          if (N) {
            let e = {
                x: 0,
                y: 0
              },
              t = t => {
                e = {
                  x: Math.abs(Math.round(t.pageX) - (q.current?.x ?? 0)),
                  y: Math.abs(Math.round(t.pageY) - (q.current?.y ?? 0))
                }
              },
              n = n => {
                e.x <= 10 && e.y <= 10 ? n.preventDefault() : N.contains(n.target) || V(!1), document.removeEventListener("pointermove", t), q.current = null
              };
            return null !== q.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
              capture: !0,
              once: !0
            })), () => {
              document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, {
                capture: !0
              })
            }
          }
        }, [N, V, q]), r.useEffect(() => {
          let e = () => V(!1);
          return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
            window.removeEventListener("blur", e), window.removeEventListener("resize", e)
          }
        }, [V]);
        let [X, Z] = eE(e => {
          let t = B().filter(e => !e.disabled),
            n = t.find(e => e.ref.current === document.activeElement),
            r = eC(t, e, n);
          r && setTimeout(() => r.ref.current.focus())
        }), J = r.useCallback((e, t, n) => {
          let r = !H.current && !n;
          (void 0 !== T.value && T.value === t || r) && (D(e), r && (H.current = !0))
        }, [T.value]), et = r.useCallback(() => N?.focus(), [N]), en = r.useCallback((e, t, n) => {
          let r = !H.current && !n;
          (void 0 !== T.value && T.value === t || r) && _(e)
        }, [T.value]), er = "popper" === o ? ee : $, eo = er === ee ? {
          side: c,
          sideOffset: h,
          align: v,
          alignOffset: m,
          arrowPadding: g,
          collisionBoundary: y,
          collisionPadding: w,
          sticky: b,
          hideWhenDetached: x,
          avoidCollisions: S
        } : {};
        return (0, R.jsx)(Y, {
          scope: n,
          content: N,
          viewport: A,
          onViewportChange: L,
          itemRefCallback: J,
          selectedItem: P,
          onItemLeave: et,
          itemTextRefCallback: en,
          focusSelectedItem: G,
          selectedItemText: K,
          position: o,
          isPositioned: F,
          searchRef: X,
          children: (0, R.jsx)(k.A, {
            as: Q,
            allowPinchZoom: !0,
            children: (0, R.jsx)(p.n, {
              asChild: !0,
              trapped: T.open,
              onMountAutoFocus: e => {
                e.preventDefault()
              },
              onUnmountAutoFocus: (0, a.mK)(i, e => {
                T.trigger?.focus({
                  preventScroll: !0
                }), e.preventDefault()
              }),
              children: (0, R.jsx)(d.qW, {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: l,
                onPointerDownOutside: u,
                onFocusOutside: e => e.preventDefault(),
                onDismiss: () => T.onOpenChange(!1),
                children: (0, R.jsx)(er, {
                  role: "listbox",
                  id: T.contentId,
                  "data-state": T.open ? "open" : "closed",
                  dir: T.dir,
                  onContextMenu: e => e.preventDefault(),
                  ...E,
                  ...eo,
                  onPlaced: () => W(!0),
                  ref: j,
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    outline: "none",
                    ...E.style
                  },
                  onKeyDown: (0, a.mK)(E.onKeyDown, e => {
                    let t = e.ctrlKey || e.altKey || e.metaKey;
                    if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || Z(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                      let t = B().filter(e => !e.disabled).map(e => e.ref.current);
                      if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                        let n = e.target,
                          r = t.indexOf(n);
                        t = t.slice(r + 1)
                      }
                      setTimeout(() => z(t)), e.preventDefault()
                    }
                  })
                })
              })
            })
          })
        })
      });
      J.displayName = "SelectContentImpl";
      var $ = r.forwardRef((e, t) => {
        let {
          __scopeSelect: n,
          onPlaced: o,
          ...a
        } = e, l = O(U, n), u = Z(U, n), [c, d] = r.useState(null), [f, p] = r.useState(null), h = (0, s.s)(t, e => p(e)), v = I(n), m = r.useRef(!1), y = r.useRef(!0), {
          viewport: w,
          selectedItem: b,
          selectedItemText: S,
          focusSelectedItem: E
        } = u, C = r.useCallback(() => {
          if (l.trigger && l.valueNode && c && f && w && b && S) {
            let e = l.trigger.getBoundingClientRect(),
              t = f.getBoundingClientRect(),
              n = l.valueNode.getBoundingClientRect(),
              r = S.getBoundingClientRect();
            if ("rtl" !== l.dir) {
              let o = r.left - t.left,
                a = n.left - o,
                l = e.left - a,
                s = e.width + l,
                u = Math.max(s, t.width),
                d = window.innerWidth - 10,
                f = (0, i.q)(a, [10, Math.max(10, d - u)]);
              c.style.minWidth = s + "px", c.style.left = f + "px"
            } else {
              let o = t.right - r.right,
                a = window.innerWidth - n.right - o,
                l = window.innerWidth - e.right - a,
                s = e.width + l,
                u = Math.max(s, t.width),
                d = window.innerWidth - 10,
                f = (0, i.q)(a, [10, Math.max(10, d - u)]);
              c.style.minWidth = s + "px", c.style.right = f + "px"
            }
            let a = v(),
              s = window.innerHeight - 20,
              u = w.scrollHeight,
              d = window.getComputedStyle(f),
              p = parseInt(d.borderTopWidth, 10),
              h = parseInt(d.paddingTop, 10),
              g = parseInt(d.borderBottomWidth, 10),
              y = p + h + u + parseInt(d.paddingBottom, 10) + g,
              x = Math.min(5 * b.offsetHeight, y),
              E = window.getComputedStyle(w),
              C = parseInt(E.paddingTop, 10),
              k = parseInt(E.paddingBottom, 10),
              R = e.top + e.height / 2 - 10,
              T = b.offsetHeight / 2,
              N = p + h + (b.offsetTop + T);
            if (N <= R) {
              let e = a.length > 0 && b === a[a.length - 1].ref.current;
              c.style.bottom = "0px";
              let t = Math.max(s - R, T + (e ? k : 0) + (f.clientHeight - w.offsetTop - w.offsetHeight) + g);
              c.style.height = N + t + "px"
            } else {
              let e = a.length > 0 && b === a[0].ref.current;
              c.style.top = "0px";
              let t = Math.max(R, p + w.offsetTop + (e ? C : 0) + T);
              c.style.height = t + (y - N) + "px", w.scrollTop = N - R + w.offsetTop
            }
            c.style.margin = "10px 0", c.style.minHeight = x + "px", c.style.maxHeight = s + "px", o?.(), requestAnimationFrame(() => m.current = !0)
          }
        }, [v, l.trigger, l.valueNode, c, f, w, b, S, l.dir, o]);
        (0, x.N)(() => C(), [C]);
        let [k, T] = r.useState();
        (0, x.N)(() => {
          f && T(window.getComputedStyle(f).zIndex)
        }, [f]);
        let N = r.useCallback(e => {
          e && !0 === y.current && (C(), E?.(), y.current = !1)
        }, [C, E]);
        return (0, R.jsx)(et, {
          scope: n,
          contentWrapper: c,
          shouldExpandOnScrollRef: m,
          onScrollButtonChange: N,
          children: (0, R.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: k
            },
            children: (0, R.jsx)(g.sG.div, {
              ...a,
              ref: h,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...a.style
              }
            })
          })
        })
      });
      $.displayName = "SelectItemAlignedPosition";
      var ee = r.forwardRef((e, t) => {
        let {
          __scopeSelect: n,
          align: r = "start",
          collisionPadding: o = 10,
          ...i
        } = e, a = D(n);
        return (0, R.jsx)(v.UC, {
          ...a,
          ...i,
          ref: t,
          align: r,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...i.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
          }
        })
      });
      ee.displayName = "SelectPopperPosition";
      var [et, en] = j(U, {}), er = "SelectViewport", eo = r.forwardRef((e, t) => {
        let {
          __scopeSelect: n,
          nonce: o,
          ...i
        } = e, l = Z(er, n), u = en(er, n), c = (0, s.s)(t, l.onViewportChange), d = r.useRef(0);
        return (0, R.jsxs)(R.Fragment, {
          children: [(0, R.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o
          }), (0, R.jsx)(A.Slot, {
            scope: n,
            children: (0, R.jsx)(g.sG.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...i,
              ref: c,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...i.style
              },
              onScroll: (0, a.mK)(i.onScroll, e => {
                let t = e.currentTarget,
                  {
                    contentWrapper: n,
                    shouldExpandOnScrollRef: r
                  } = u;
                if (r?.current && n) {
                  let e = Math.abs(d.current - t.scrollTop);
                  if (e > 0) {
                    let r = window.innerHeight - 20,
                      o = Math.max(parseFloat(n.style.minHeight), parseFloat(n.style.height));
                    if (o < r) {
                      let i = o + e,
                        a = Math.min(r, i),
                        l = i - a;
                      n.style.height = a + "px", "0px" === n.style.bottom && (t.scrollTop = l > 0 ? l : 0, n.style.justifyContent = "flex-end")
                    }
                  }
                }
                d.current = t.scrollTop
              })
            })
          })]
        })
      });
      eo.displayName = er;
      var ei = "SelectGroup",
        [ea, el] = j(ei),
        es = r.forwardRef((e, t) => {
          let {
            __scopeSelect: n,
            ...r
          } = e, o = (0, h.B)();
          return (0, R.jsx)(ea, {
            scope: n,
            id: o,
            children: (0, R.jsx)(g.sG.div, {
              role: "group",
              "aria-labelledby": o,
              ...r,
              ref: t
            })
          })
        });
      es.displayName = ei;
      var eu = "SelectLabel";
      r.forwardRef((e, t) => {
        let {
          __scopeSelect: n,
          ...r
        } = e, o = el(eu, n);
        return (0, R.jsx)(g.sG.div, {
          id: o.id,
          ...r,
          ref: t
        })
      }).displayName = eu;
      var ec = "SelectItem",
        [ed, ef] = j(ec),
        ep = r.forwardRef((e, t) => {
          let {
            __scopeSelect: n,
            value: o,
            disabled: i = !1,
            textValue: l,
            ...u
          } = e, c = O(ec, n), d = Z(ec, n), f = c.value === o, [p, v] = r.useState(l ?? ""), [m, y] = r.useState(!1), w = (0, s.s)(t, e => d.itemRefCallback?.(e, o, i)), b = (0, h.B)(), x = r.useRef("touch"), S = () => {
            i || (c.onValueChange(o), c.onOpenChange(!1))
          };
          if ("" === o) throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, R.jsx)(ed, {
            scope: n,
            value: o,
            disabled: i,
            textId: b,
            isSelected: f,
            onItemTextChange: r.useCallback(e => {
              v(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, R.jsx)(A.ItemSlot, {
              scope: n,
              value: o,
              disabled: i,
              textValue: p,
              children: (0, R.jsx)(g.sG.div, {
                role: "option",
                "aria-labelledby": b,
                "data-highlighted": m ? "" : void 0,
                "aria-selected": f && m,
                "data-state": f ? "checked" : "unchecked",
                "aria-disabled": i || void 0,
                "data-disabled": i ? "" : void 0,
                tabIndex: i ? void 0 : -1,
                ...u,
                ref: w,
                onFocus: (0, a.mK)(u.onFocus, () => y(!0)),
                onBlur: (0, a.mK)(u.onBlur, () => y(!1)),
                onClick: (0, a.mK)(u.onClick, () => {
                  "mouse" !== x.current && S()
                }),
                onPointerUp: (0, a.mK)(u.onPointerUp, () => {
                  "mouse" === x.current && S()
                }),
                onPointerDown: (0, a.mK)(u.onPointerDown, e => {
                  x.current = e.pointerType
                }),
                onPointerMove: (0, a.mK)(u.onPointerMove, e => {
                  x.current = e.pointerType, i ? d.onItemLeave?.() : "mouse" === x.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, a.mK)(u.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, a.mK)(u.onKeyDown, e => {
                  (d.searchRef?.current === "" || " " !== e.key) && (N.includes(e.key) && S(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      ep.displayName = ec;
      var eh = "SelectItemText",
        ev = r.forwardRef((e, t) => {
          let {
            __scopeSelect: n,
            className: i,
            style: a,
            ...l
          } = e, u = O(eh, n), c = Z(eh, n), d = ef(eh, n), f = B(eh, n), [p, h] = r.useState(null), v = (0, s.s)(t, e => h(e), d.onItemTextChange, e => c.itemTextRefCallback?.(e, d.value, d.disabled)), m = p?.textContent, y = r.useMemo(() => (0, R.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: m
          }, d.value), [d.disabled, d.value, m]), {
            onNativeOptionAdd: w,
            onNativeOptionRemove: b
          } = f;
          return (0, x.N)(() => (w(y), () => b(y)), [w, b, y]), (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsx)(g.sG.span, {
              id: d.textId,
              ...l,
              ref: v
            }), d.isSelected && u.valueNode && !u.valueNodeHasChildren ? o.createPortal(l.children, u.valueNode) : null]
          })
        });
      ev.displayName = eh;
      var em = "SelectItemIndicator";
      r.forwardRef((e, t) => {
        let {
          __scopeSelect: n,
          ...r
        } = e;
        return ef(em, n).isSelected ? (0, R.jsx)(g.sG.span, {
          "aria-hidden": !0,
          ...r,
          ref: t
        }) : null
      }).displayName = em;
      var eg = "SelectScrollUpButton";
      r.forwardRef((e, t) => {
        let n = Z(eg, e.__scopeSelect),
          o = en(eg, e.__scopeSelect),
          [i, a] = r.useState(!1),
          l = (0, s.s)(t, o.onScrollButtonChange);
        return (0, x.N)(() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
                a(t.scrollTop > 0)
              },
              t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [n.viewport, n.isPositioned]), i ? (0, R.jsx)(ew, {
          ...e,
          ref: l,
          onAutoScroll: () => {
            let {
              viewport: e,
              selectedItem: t
            } = n;
            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
          }
        }) : null
      }).displayName = eg;
      var ey = "SelectScrollDownButton";
      r.forwardRef((e, t) => {
        let n = Z(ey, e.__scopeSelect),
          o = en(ey, e.__scopeSelect),
          [i, a] = r.useState(!1),
          l = (0, s.s)(t, o.onScrollButtonChange);
        return (0, x.N)(() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
                let e = t.scrollHeight - t.clientHeight;
                a(Math.ceil(t.scrollTop) < e)
              },
              t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [n.viewport, n.isPositioned]), i ? (0, R.jsx)(ew, {
          ...e,
          ref: l,
          onAutoScroll: () => {
            let {
              viewport: e,
              selectedItem: t
            } = n;
            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
          }
        }) : null
      }).displayName = ey;
      var ew = r.forwardRef((e, t) => {
        let {
          __scopeSelect: n,
          onAutoScroll: o,
          ...i
        } = e, l = Z("SelectScrollButton", n), s = r.useRef(null), u = I(n), c = r.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return r.useEffect(() => () => c(), [c]), (0, x.N)(() => {
          let e = u().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [u]), (0, R.jsx)(g.sG.div, {
          "aria-hidden": !0,
          ...i,
          ref: t,
          style: {
            flexShrink: 0,
            ...i.style
          },
          onPointerDown: (0, a.mK)(i.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(o, 50))
          }),
          onPointerMove: (0, a.mK)(i.onPointerMove, () => {
            l.onItemLeave?.(), null === s.current && (s.current = window.setInterval(o, 50))
          }),
          onPointerLeave: (0, a.mK)(i.onPointerLeave, () => {
            c()
          })
        })
      });
      r.forwardRef((e, t) => {
        let {
          __scopeSelect: n,
          ...r
        } = e;
        return (0, R.jsx)(g.sG.div, {
          "aria-hidden": !0,
          ...r,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var eb = "SelectArrow";
      r.forwardRef((e, t) => {
        let {
          __scopeSelect: n,
          ...r
        } = e, o = D(n), i = O(eb, n), a = Z(eb, n);
        return i.open && "popper" === a.position ? (0, R.jsx)(v.i3, {
          ...o,
          ...r,
          ref: t
        }) : null
      }).displayName = eb;
      var ex = r.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...n
      }, o) => {
        let i = r.useRef(null),
          a = (0, s.s)(o, i),
          l = (0, S.Z)(t);
        return r.useEffect(() => {
          let e = i.current;
          if (!e) return;
          let n = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "value").set;
          if (l !== t && n) {
            let r = new Event("change", {
              bubbles: !0
            });
            n.call(e, t), e.dispatchEvent(r)
          }
        }, [l, t]), (0, R.jsx)(g.sG.select, {
          ...n,
          style: {
            ...E.Qg,
            ...n.style
          },
          ref: a,
          defaultValue: t
        })
      });

      function eS(e) {
        return "" === e || void 0 === e
      }

      function eE(e) {
        let t = (0, w.c)(e),
          n = r.useRef(""),
          o = r.useRef(0),
          i = r.useCallback(e => {
            let r = n.current + e;
            t(r),
              function e(t) {
                n.current = t, window.clearTimeout(o.current), "" !== t && (o.current = window.setTimeout(() => e(""), 1e3))
              }(r)
          }, [t]),
          a = r.useCallback(() => {
            n.current = "", window.clearTimeout(o.current)
          }, []);
        return r.useEffect(() => () => window.clearTimeout(o.current), []), [n, i, a]
      }

      function eC(e, t, n) {
        var r, o;
        let i = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          a = n ? e.indexOf(n) : -1,
          l = (r = e, o = Math.max(a, 0), r.map((e, t) => r[(o + t) % r.length]));
        1 === i.length && (l = l.filter(e => e !== n));
        let s = l.find(e => e.textValue.toLowerCase().startsWith(i.toLowerCase()));
        return s !== n ? s : void 0
      }
      ex.displayName = "SelectBubbleInput";
      var ek = F,
        eR = H,
        eT = G,
        eN = V,
        eM = q,
        eA = X,
        eI = eo,
        eL = es,
        ej = ep,
        eP = ev
    },
    32825: (e, t, n) => {
      n.d(t, {
        S: () => l
      });
      var r = n(12115);

      function o(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
      }
      var i = "u" > typeof window ? r.useLayoutEffect : r.useEffect,
        a = new WeakMap;

      function l(e, t) {
        var n, l, s, u = (n = t || null, l = function(t) {
          return e.forEach(function(e) {
            return o(e, t)
          })
        }, (s = (0, r.useState)(function() {
          return {
            value: n,
            callback: l,
            facade: {
              get current() {
                return s.value
              },
              set current(value) {
                var e = s.value;
                e !== value && (s.value = value, s.callback(value, e))
              }
            }
          }
        })[0]).callback = l, s.facade);
        return i(function() {
          var t = a.get(u);
          if (t) {
            var n = new Set(t),
              r = new Set(e),
              i = u.current;
            n.forEach(function(e) {
              r.has(e) || o(e, null)
            }), r.forEach(function(e) {
              n.has(e) || o(e, i)
            })
          }
          a.set(u, e)
        }, [e]), u
      }
    },
    50816: (e, t, n) => {
      n.d(t, {
        C: () => a,
        f: () => l
      });
      var r = n(56541);

      function o(e) {
        return e
      }

      function i(e, t) {
        void 0 === t && (t = o);
        var n = [],
          r = !1;
        return {
          read: function() {
            if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
          },
          useMedium: function(e) {
            var o = t(e, r);
            return n.push(o),
              function() {
                n = n.filter(function(e) {
                  return e !== o
                })
              }
          },
          assignSyncMedium: function(e) {
            for (r = !0; n.length;) {
              var t = n;
              n = [], t.forEach(e)
            }
            n = {
              push: function(t) {
                return e(t)
              },
              filter: function() {
                return n
              }
            }
          },
          assignMedium: function(e) {
            r = !0;
            var t = [];
            if (n.length) {
              var o = n;
              n = [], o.forEach(e), t = n
            }
            var i = function() {
                var n = t;
                t = [], n.forEach(e)
              },
              a = function() {
                return Promise.resolve().then(i)
              };
            a(), n = {
              push: function(e) {
                t.push(e), a()
              },
              filter: function(e) {
                return t = t.filter(e), n
              }
            }
          }
        }
      }

      function a(e, t) {
        return void 0 === t && (t = o), i(e, t)
      }

      function l(e) {
        void 0 === e && (e = {});
        var t = i(null);
        return t.options = (0, r.Cl)({
          async: !0,
          ssr: !1
        }, e), t
      }
    },
    61440: (e, t, n) => {
      n.d(t, {
        Qg: () => a,
        bL: () => s
      });
      var r = n(12115),
        o = n(13275),
        i = n(95155),
        a = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        l = r.forwardRef((e, t) => (0, i.jsx)(o.sG.span, {
          ...e,
          ref: t,
          style: {
            ...a,
            ...e.style
          }
        }));
      l.displayName = "VisuallyHidden";
      var s = l
    },
    65828: (e, t, n) => {
      n.d(t, {
        Eq: () => u
      });
      var r = new WeakMap,
        o = new WeakMap,
        i = {},
        a = 0,
        l = function(e) {
          return e && (e.host || l(e.parentNode))
        },
        s = function(e, t, n, s) {
          var u = (Array.isArray(e) ? e : [e]).map(function(e) {
            if (t.contains(e)) return e;
            var n = l(e);
            return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
          }).filter(function(e) {
            return !!e
          });
          i[n] || (i[n] = new WeakMap);
          var c = i[n],
            d = [],
            f = new Set,
            p = new Set(u),
            h = function(e) {
              !e || f.has(e) || (f.add(e), h(e.parentNode))
            };
          u.forEach(h);
          var v = function(e) {
            !e || p.has(e) || Array.prototype.forEach.call(e.children, function(e) {
              if (f.has(e)) v(e);
              else try {
                var t = e.getAttribute(s),
                  i = null !== t && "false" !== t,
                  a = (r.get(e) || 0) + 1,
                  l = (c.get(e) || 0) + 1;
                r.set(e, a), c.set(e, l), d.push(e), 1 === a && i && o.set(e, !0), 1 === l && e.setAttribute(n, "true"), i || e.setAttribute(s, "true")
              } catch (t) {
                console.error("aria-hidden: cannot operate on ", e, t)
              }
            })
          };
          return v(t), f.clear(), a++,
            function() {
              d.forEach(function(e) {
                var t = r.get(e) - 1,
                  i = c.get(e) - 1;
                r.set(e, t), c.set(e, i), t || (o.has(e) || e.removeAttribute(s), o.delete(e)), i || e.removeAttribute(n)
              }), --a || (r = new WeakMap, r = new WeakMap, o = new WeakMap, i = {})
            }
        },
        u = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o = t || ("u" < typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), s(r, o, n, "aria-hidden")) : function() {
            return null
          }
        }
    },
    74967: (e, t, n) => {
      n.d(t, {
        A: () => H
      });
      var r, o, i = n(56541),
        a = n(12115),
        l = "right-scroll-bar-position",
        s = "width-before-scroll-bar",
        u = n(32825),
        c = (0, n(50816).f)(),
        d = function() {},
        f = a.forwardRef(function(e, t) {
          var n = a.useRef(null),
            r = a.useState({
              onScrollCapture: d,
              onWheelCapture: d,
              onTouchMoveCapture: d
            }),
            o = r[0],
            l = r[1],
            s = e.forwardProps,
            f = e.children,
            p = e.className,
            h = e.removeScrollBar,
            v = e.enabled,
            m = e.shards,
            g = e.sideCar,
            y = e.noRelative,
            w = e.noIsolation,
            b = e.inert,
            x = e.allowPinchZoom,
            S = e.as,
            E = e.gapMode,
            C = (0, i.Tt)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            k = (0, u.S)([n, t]),
            R = (0, i.Cl)((0, i.Cl)({}, C), o);
          return a.createElement(a.Fragment, null, v && a.createElement(g, {
            sideCar: c,
            removeScrollBar: h,
            shards: m,
            noRelative: y,
            noIsolation: w,
            inert: b,
            setCallbacks: l,
            allowPinchZoom: !!x,
            lockRef: n,
            gapMode: E
          }), s ? a.cloneElement(a.Children.only(f), (0, i.Cl)((0, i.Cl)({}, R), {
            ref: k
          })) : a.createElement(void 0 === S ? "div" : S, (0, i.Cl)({}, R, {
            className: p,
            ref: k
          }), f))
        });
      f.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, f.classNames = {
        fullWidth: s,
        zeroRight: l
      };
      var p = function(e) {
        var t = e.sideCar,
          n = (0, i.Tt)(e, ["sideCar"]);
        if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return a.createElement(r, (0, i.Cl)({}, n))
      };
      p.isSideCarExport = !0;
      var h = function() {
          var e = 0,
            t = null;
          return {
            add: function(r) {
              if (0 == e && (t = function() {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = o || n.nc;
                  return t && e.setAttribute("nonce", t), e
                }())) {
                var i, a;
                (i = t).styleSheet ? i.styleSheet.cssText = r : i.appendChild(document.createTextNode(r)), a = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(a)
              }
              e++
            },
            remove: function() {
              --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
          }
        },
        v = function() {
          var e = h();
          return function(t, n) {
            a.useEffect(function() {
              return e.add(t),
                function() {
                  e.remove()
                }
            }, [t && n])
          }
        },
        m = function() {
          var e = v();
          return function(t) {
            return e(t.styles, t.dynamic), null
          }
        },
        g = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        y = function(e) {
          return parseInt(e || "", 10) || 0
        },
        w = function(e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [y(n), y(r), y(o)]
        },
        b = function(e) {
          if (void 0 === e && (e = "margin"), "u" < typeof window) return g;
          var t = w(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0])
          }
        },
        x = m(),
        S = "data-scroll-locked",
        E = function(e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            u = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(u, "px ").concat(r, ";\n  }\n  body[").concat(S, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(u, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(l, " {\n    right: ").concat(u, "px ").concat(r, ";\n  }\n  \n  .").concat(s, " {\n    margin-right: ").concat(u, "px ").concat(r, ";\n  }\n  \n  .").concat(l, " .").concat(l, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(s, " .").concat(s, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(S, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(u, "px;\n  }\n")
        },
        C = function() {
          var e = parseInt(document.body.getAttribute(S) || "0", 10);
          return isFinite(e) ? e : 0
        },
        k = function() {
          a.useEffect(function() {
            return document.body.setAttribute(S, (C() + 1).toString()),
              function() {
                var e = C() - 1;
                e <= 0 ? document.body.removeAttribute(S) : document.body.setAttribute(S, e.toString())
              }
          }, [])
        },
        R = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          k();
          var i = a.useMemo(function() {
            return b(o)
          }, [o]);
          return a.createElement(x, {
            styles: E(i, !t, o, n ? "" : "!important")
          })
        },
        T = !1;
      if ("u" > typeof window) try {
        var N = Object.defineProperty({}, "passive", {
          get: function() {
            return T = !0, !0
          }
        });
        window.addEventListener("test", N, N), window.removeEventListener("test", N, N)
      } catch (e) {
        T = !1
      }
      var M = !!T && {
          passive: !1
        },
        A = function(e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && (n.overflowY !== n.overflowX || "TEXTAREA" === e.tagName || "visible" !== n[t])
        },
        I = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("u" > typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), L(e, r)) {
              var o = j(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        L = function(e, t) {
          return "v" === e ? A(t, "overflowY") : A(t, "overflowX")
        },
        j = function(e, t) {
          return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
        },
        P = function(e, t, n, r, o) {
          var i, a = (i = window.getComputedStyle(t).direction, "h" === e && "rtl" === i ? -1 : 1),
            l = a * r,
            s = n.target,
            u = t.contains(s),
            c = !1,
            d = l > 0,
            f = 0,
            p = 0;
          do {
            if (!s) break;
            var h = j(e, s),
              v = h[0],
              m = h[1] - h[2] - a * v;
            (v || m) && L(e, s) && (f += m, p += v);
            var g = s.parentNode;
            s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g
          } while (!u && s !== document.body || u && (t.contains(s) || t === s));
          return d && (o && 1 > Math.abs(f) || !o && l > f) ? c = !0 : !d && (o && 1 > Math.abs(p) || !o && -l > p) && (c = !0), c
        },
        D = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        K = function(e) {
          return [e.deltaX, e.deltaY]
        },
        O = function(e) {
          return e && "current" in e ? e.current : e
        },
        _ = 0,
        B = [];
      let F = (r = function(e) {
        var t = a.useRef([]),
          n = a.useRef([0, 0]),
          r = a.useRef(),
          o = a.useState(_++)[0],
          l = a.useState(m)[0],
          s = a.useRef(e);
        a.useEffect(function() {
          s.current = e
        }, [e]), a.useEffect(function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var t = (0, i.fX)([e.lockRef.current], (e.shards || []).map(O), !0).filter(Boolean);
            return t.forEach(function(e) {
                return e.classList.add("allow-interactivity-".concat(o))
              }),
              function() {
                document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function(e) {
                  return e.classList.remove("allow-interactivity-".concat(o))
                })
              }
          }
        }, [e.inert, e.lockRef.current, e.shards]);
        var u = a.useCallback(function(e, t) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !s.current.allowPinchZoom;
            var o, i = D(e),
              a = n.current,
              l = "deltaX" in e ? e.deltaX : a[0] - i[0],
              u = "deltaY" in e ? e.deltaY : a[1] - i[1],
              c = e.target,
              d = Math.abs(l) > Math.abs(u) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === c.type) return !1;
            var f = window.getSelection(),
              p = f && f.anchorNode;
            if (p && (p === c || p.contains(c))) return !1;
            var h = I(d, c);
            if (!h) return !0;
            if (h ? o = d : (o = "v" === d ? "h" : "v", h = I(d, c)), !h) return !1;
            if (!r.current && "changedTouches" in e && (l || u) && (r.current = o), !o) return !0;
            var v = r.current || o;
            return P(v, t, e, "h" === v ? l : u, !0)
          }, []),
          c = a.useCallback(function(e) {
            if (B.length && B[B.length - 1] === l) {
              var n = "deltaY" in e ? K(e) : D(e),
                r = t.current.filter(function(t) {
                  var r;
                  return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (r = t.delta, r[0] === n[0] && r[1] === n[1])
                })[0];
              if (r && r.should) {
                e.cancelable && e.preventDefault();
                return
              }
              if (!r) {
                var o = (s.current.shards || []).map(O).filter(Boolean).filter(function(t) {
                  return t.contains(e.target)
                });
                (o.length > 0 ? u(e, o[0]) : !s.current.noIsolation) && e.cancelable && e.preventDefault()
              }
            }
          }, []),
          d = a.useCallback(function(e, n, r, o) {
            var i = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: function(e) {
                for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
                return t
              }(r)
            };
            t.current.push(i), setTimeout(function() {
              t.current = t.current.filter(function(e) {
                return e !== i
              })
            }, 1)
          }, []),
          f = a.useCallback(function(e) {
            n.current = D(e), r.current = void 0
          }, []),
          p = a.useCallback(function(t) {
            d(t.type, K(t), t.target, u(t, e.lockRef.current))
          }, []),
          h = a.useCallback(function(t) {
            d(t.type, D(t), t.target, u(t, e.lockRef.current))
          }, []);
        a.useEffect(function() {
          return B.push(l), e.setCallbacks({
              onScrollCapture: p,
              onWheelCapture: p,
              onTouchMoveCapture: h
            }), document.addEventListener("wheel", c, M), document.addEventListener("touchmove", c, M), document.addEventListener("touchstart", f, M),
            function() {
              B = B.filter(function(e) {
                return e !== l
              }), document.removeEventListener("wheel", c, M), document.removeEventListener("touchmove", c, M), document.removeEventListener("touchstart", f, M)
            }
        }, []);
        var v = e.removeScrollBar,
          g = e.inert;
        return a.createElement(a.Fragment, null, g ? a.createElement(l, {
          styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
        }) : null, v ? a.createElement(R, {
          noRelative: e.noRelative,
          gapMode: e.gapMode
        }) : null)
      }, c.useMedium(r), p);
      var W = a.forwardRef(function(e, t) {
        return a.createElement(f, (0, i.Cl)({}, e, {
          ref: t,
          sideCar: F
        }))
      });
      W.classNames = f.classNames;
      let H = W
    },
    82459: (e, t, n) => {
      n.d(t, {
        q: () => r
      });

      function r(e, [t, n]) {
        return Math.min(n, Math.max(t, e))
      }
    },
    90471: (e, t, n) => {
      n.d(t, {
        jH: () => i
      });
      var r = n(12115);
      n(95155);
      var o = r.createContext(void 0);

      function i(e) {
        let t = r.useContext(o);
        return e || t || "ltr"
      }
    },
    97968: (e, t, n) => {
      n.d(t, {
        N: () => s
      });
      var r = n(12115),
        o = n(75021),
        i = n(633),
        a = n(11792),
        l = n(95155);

      function s(e) {
        let t = e + "CollectionProvider",
          [n, s] = (0, o.A)(t),
          [u, c] = n(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          d = e => {
            let {
              scope: t,
              children: n
            } = e, o = r.useRef(null), i = r.useRef(new Map).current;
            return (0, l.jsx)(u, {
              scope: t,
              itemMap: i,
              collectionRef: o,
              children: n
            })
          };
        d.displayName = t;
        let f = e + "CollectionSlot",
          p = (0, a.TL)(f),
          h = r.forwardRef((e, t) => {
            let {
              scope: n,
              children: r
            } = e, o = c(f, n), a = (0, i.s)(t, o.collectionRef);
            return (0, l.jsx)(p, {
              ref: a,
              children: r
            })
          });
        h.displayName = f;
        let v = e + "CollectionItemSlot",
          m = "data-radix-collection-item",
          g = (0, a.TL)(v),
          y = r.forwardRef((e, t) => {
            let {
              scope: n,
              children: o,
              ...a
            } = e, s = r.useRef(null), u = (0, i.s)(t, s), d = c(v, n);
            return r.useEffect(() => (d.itemMap.set(s, {
              ref: s,
              ...a
            }), () => void d.itemMap.delete(s))), (0, l.jsx)(g, {
              ...{
                [m]: ""
              },
              ref: u,
              children: o
            })
          });
        return y.displayName = v, [{
          Provider: d,
          Slot: h,
          ItemSlot: y
        }, function(t) {
          let n = c(e + "CollectionConsumer", t);
          return r.useCallback(() => {
            let e = n.collectionRef.current;
            if (!e) return [];
            let t = Array.from(e.querySelectorAll(`[${m}]`));
            return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
          }, [n.collectionRef, n.itemMap])
        }, s]
      }
      var u = new WeakMap;

      function c(e, t) {
        var n, r;
        let o, i, a;
        if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
        let l = (n = e, r = t, o = n.length, (a = (i = d(r)) >= 0 ? i : o + i) < 0 || a >= o ? -1 : a);
        return -1 === l ? void 0 : e[l]
      }

      function d(e) {
        return e != e || 0 === e ? 0 : Math.trunc(e)
      }(class e extends Map {
        #e;
        constructor(e) {
          super(e), this.#e = [...super.keys()], u.set(this, !0)
        }
        set(e, t) {
          return u.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this
        }
        insert(e, t, n) {
          let r, o = this.has(t),
            i = this.#e.length,
            a = d(e),
            l = a >= 0 ? a : i + a,
            s = l < 0 || l >= i ? -1 : l;
          if (s === this.size || o && s === this.size - 1 || -1 === s) return this.set(t, n), this;
          let u = this.size + +!o;
          a < 0 && l++;
          let c = [...this.#e],
            f = !1;
          for (let e = l; e < u; e++)
            if (l === e) {
              let i = c[e];
              c[e] === t && (i = c[e + 1]), o && this.delete(t), r = this.get(i), this.set(t, n)
            } else {
              f || c[e - 1] !== t || (f = !0);
              let n = c[f ? e : e - 1],
                o = r;
              r = this.get(n), this.delete(n), this.set(n, o)
            } return this
        }
        with(t, n, r) {
          let o = new e(this);
          return o.insert(t, n, r), o
        }
        before(e) {
          let t = this.#e.indexOf(e) - 1;
          if (!(t < 0)) return this.entryAt(t)
        }
        setBefore(e, t, n) {
          let r = this.#e.indexOf(e);
          return -1 === r ? this : this.insert(r, t, n)
        }
        after(e) {
          let t = this.#e.indexOf(e);
          if (-1 !== (t = -1 === t || t === this.size - 1 ? -1 : t + 1)) return this.entryAt(t)
        }
        setAfter(e, t, n) {
          let r = this.#e.indexOf(e);
          return -1 === r ? this : this.insert(r + 1, t, n)
        }
        first() {
          return this.entryAt(0)
        }
        last() {
          return this.entryAt(-1)
        }
        clear() {
          return this.#e = [], super.clear()
        }
        delete(e) {
          let t = super.delete(e);
          return t && this.#e.splice(this.#e.indexOf(e), 1), t
        }
        deleteAt(e) {
          let t = this.keyAt(e);
          return void 0 !== t && this.delete(t)
        }
        at(e) {
          let t = c(this.#e, e);
          if (void 0 !== t) return this.get(t)
        }
        entryAt(e) {
          let t = c(this.#e, e);
          if (void 0 !== t) return [t, this.get(t)]
        }
        indexOf(e) {
          return this.#e.indexOf(e)
        }
        keyAt(e) {
          return c(this.#e, e)
        }
        from(e, t) {
          let n = this.indexOf(e);
          if (-1 === n) return;
          let r = n + t;
          return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.at(r)
        }
        keyFrom(e, t) {
          let n = this.indexOf(e);
          if (-1 === n) return;
          let r = n + t;
          return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.keyAt(r)
        }
        find(e, t) {
          let n = 0;
          for (let r of this) {
            if (Reflect.apply(e, t, [r, n, this])) return r;
            n++
          }
        }
        findIndex(e, t) {
          let n = 0;
          for (let r of this) {
            if (Reflect.apply(e, t, [r, n, this])) return n;
            n++
          }
          return -1
        }
        filter(t, n) {
          let r = [],
            o = 0;
          for (let e of this) Reflect.apply(t, n, [e, o, this]) && r.push(e), o++;
          return new e(r)
        }
        map(t, n) {
          let r = [],
            o = 0;
          for (let e of this) r.push([e[0], Reflect.apply(t, n, [e, o, this])]), o++;
          return new e(r)
        }
        reduce(...e) {
          let [t, n] = e, r = 0, o = n ?? this.at(0);
          for (let n of this) o = 0 === r && 1 === e.length ? n : Reflect.apply(t, this, [o, n, r, this]), r++;
          return o
        }
        reduceRight(...e) {
          let [t, n] = e, r = n ?? this.at(-1);
          for (let n = this.size - 1; n >= 0; n--) {
            let o = this.at(n);
            r = n === this.size - 1 && 1 === e.length ? o : Reflect.apply(t, this, [r, o, n, this])
          }
          return r
        }
        toSorted(t) {
          return new e([...this.entries()].sort(t))
        }
        toReversed() {
          let t = new e;
          for (let e = this.size - 1; e >= 0; e--) {
            let n = this.keyAt(e),
              r = this.get(n);
            t.set(n, r)
          }
          return t
        }
        toSpliced(...t) {
          let n = [...this.entries()];
          return n.splice(...t), new e(n)
        }
        slice(t, n) {
          let r = new e,
            o = this.size - 1;
          if (void 0 === t) return r;
          t < 0 && (t += this.size), void 0 !== n && n > 0 && (o = n - 1);
          for (let e = t; e <= o; e++) {
            let t = this.keyAt(e),
              n = this.get(t);
            r.set(t, n)
          }
          return r
        }
        every(e, t) {
          let n = 0;
          for (let r of this) {
            if (!Reflect.apply(e, t, [r, n, this])) return !1;
            n++
          }
          return !0
        }
        some(e, t) {
          let n = 0;
          for (let r of this) {
            if (Reflect.apply(e, t, [r, n, this])) return !0;
            n++
          }
          return !1
        }
      })
    }
  }
]);