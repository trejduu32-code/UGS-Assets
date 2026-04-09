! function() {
  try {
    var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e4503630-4838-46a9-af7f-f9262955de2b", e._sentryDebugIdIdentifier = "sentry-dbid-e4503630-4838-46a9-af7f-f9262955de2b")
  } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8450], {
    2725: (e, t, a) => {
      "use strict";
      a.d(t, {
        a: () => l
      });
      var s = a(95155),
        r = a(43487),
        n = a(11966),
        i = a(70448),
        o = a.n(i);
      a(31900);
      let l = ({
        text: e,
        size: t
      }) => (0, s.jsxs)("p", {
        className: o()("_1sd3r6b0"),
        "data-sentry-component": "Loader",
        "data-sentry-source-file": "index.tsx",
        children: [(0, s.jsx)(r.y, {
          size: t ?? n.Y.SMALL,
          "data-sentry-element": "Spinner",
          "data-sentry-source-file": "index.tsx"
        }), e]
      })
    },
    4944: (e, t, a) => {
      "use strict";
      a.d(t, {
        o: () => g,
        q: () => x
      });
      var s = a(95155),
        r = a(12115),
        n = a(42956),
        i = a(4265),
        o = a(64604),
        l = a(23349),
        d = a(30423),
        c = a(14011),
        u = a(85824),
        m = a(74113),
        p = a(6240),
        h = a(21765);
      let f = (0, r.createContext)(void 0);

      function g({
        children: e,
        type: t,
        allAvailableItems: a
      }) {
        let {
          paymentMethod: g,
          setPaymentMethod: x,
          paymentToken: y,
          setPaymentToken: _,
          promoCode: v,
          setPromoCode: b,
          billingDetails: S,
          setBillingDetails: j
        } = (() => {
          let [e, t] = (0, r.useState)(n.g5.PAYPAL), [a, s] = (0, r.useState)(null), [i, o] = (0, r.useState)(null), [l, d] = (0, r.useState)({
            first_name: "",
            last_name: "",
            email: "",
            address1: "",
            city: "",
            country: "",
            postal_code: "",
            state: ""
          });
          return {
            paymentMethod: e,
            setPaymentMethod: t,
            paymentToken: a,
            setPaymentToken: s,
            promoCode: i,
            setPromoCode: o,
            billingDetails: l,
            setBillingDetails: d
          }
        })(), [C, w] = (0, r.useState)(void 0);
        (0, r.useEffect)(() => {
          y?.card?.brand ? w(y.card.brand.toLowerCase()) : w(void 0)
        }, [y]);
        let N = (0, c.useSearchParams)(),
          k = (0, c.usePathname)(),
          E = N.get("id"),
          {
            navigateTo: I
          } = (0, p.s)(),
          A = (0, i.sb)(),
          {
            isRewardActive: P,
            modalButtonLocation: R
          } = (0, u.h)(),
          [T, L] = (0, r.useState)({
            subscriptions: [],
            expiredSubscriptions: [],
            recurlyHostedLoginToken: ""
          }),
          [D, F] = (0, r.useState)(null),
          {
            availableItems: U
          } = ((e, t, a, s, n) => {
            let c = (0, i.w1)(),
              u = (0, r.useMemo)(() => e.filter(e => e.variantId === e.id), [e]),
              m = (0, r.useMemo)(() => e.filter(e => e.variantId?.endsWith("_advantage_2025")), [e]),
              p = (0, r.useMemo)(() => e.filter(e => e.variantId?.includes("aasub2025_arkcom") && !e.variantId?.includes("trial")), [e]),
              h = (0, r.useMemo)(() => e.filter(e => e.variantId?.endsWith("trial")), [e]),
              [f, g] = (0, r.useState)(u);
            return (0, r.useEffect)(() => {
              let e = async () => {
                let e = await (0, d.db)(d.lJ.SHOP_SUBSCRIPTION);
                if (e instanceof AbortSignal) return;
                let {
                  subscriptions: r,
                  expiredSubscriptions: n,
                  recurlyHostedLoginToken: i
                } = e, o = r.some(e => e.planId.includes("aasub2025_arkcom") || e.planId.includes("aasub_arkcom")), l = r.some(e => e.planId.includes("trial") && !e.isTrialPeriodEnded);
                o && !l ? (g(m), s(m.find(e => e.id === t) || m[0])) : (g(u), s(u.find(e => e.id === t) || u[0])), a({
                  subscriptions: r,
                  expiredSubscriptions: n,
                  recurlyHostedLoginToken: i
                })
              }, r = async () => {
                let e = await (0, d.db)(d.lJ.SHOP_SUBSCRIPTION);
                if (e instanceof AbortSignal) return;
                let {
                  subscriptions: r,
                  expiredSubscriptions: n,
                  recurlyHostedLoginToken: i
                } = e, l = (0, o.dZ)(r, n);
                a({
                  subscriptions: r,
                  expiredSubscriptions: n,
                  recurlyHostedLoginToken: i
                }), l ? (g(h), s(h.find(e => e.id === t) || h[0])) : (g(p), s(p.find(e => e.id === t) || p[0]))
              };
              (0, l.U4)(n) && "authenticated" === c && e(), (0, l.R7)(n) && ("authenticated" === c ? r() : g(h))
            }, [c]), {
              availableItems: f
            }
          })(a, E, L, F, t),
          M = (0, m.U)(t) ? [] : a,
          {
            step: O,
            handleSetStep: B,
            handleLoginSuccess: G
          } = ((e, t, a, s) => {
            let o = "authenticated" === (0, i.w1)(),
              {
                loginSuccess: d
              } = (0, i.xV)(),
              {
                isRewardActive: c
              } = (0, u.h)(),
              m = n.XV.selection.id;
            e && (m = o ? s ? n.XV.payment.id : n.XV.verifyEmail.id : n.XV.auth.id);
            let [p, h] = (0, r.useState)(m), f = (0, r.useCallback)(e => {
              o || e !== n.XV.payment.id && e !== n.XV.review.id ? o && !s && (e === n.XV.payment.id || e === n.XV.review.id) ? h(n.XV.verifyEmail.id) : h(e) : h(n.XV.auth.id)
            }, [o, s]);
            return (0, r.useEffect)(() => {
              o && !c && (t.subscriptions.length > 0 && (0, l.R7)(a) ? f(n.XV.selection.id) : e ? f(s ? n.XV.payment.id : n.XV.verifyEmail.id) : f(n.XV.selection.id))
            }, [o, s, m, f, t.subscriptions, a, e, c]), {
              step: p,
              handleSetStep: f,
              handleLoginSuccess: (0, r.useCallback)(e => {
                let t = e.buttonLocation || "shopModal";
                d({
                  ...e,
                  buttonLocation: t
                })
              }, [d])
            }
          })(!!U.find(e => e.id === E), T, t, !!A?.isEmailConfirmed);
        return (0, r.useEffect)(() => {
          let e = U.find(e => e.id === E);
          "gems" === t && e && (0, h.Ps)({
            purchasableItemId: e?.id,
            purchasableItemAmount: e?.amount,
            purchasableItemName: e?.name,
            step: O,
            paymentType: g,
            buttonLocation: R ?? "shopModal"
          })
        }, [O, E, R]), (0, r.useEffect)(() => {
          if (P) return;
          let e = U.find(e => e.id === E);
          e && 0 === T.subscriptions.length && (O !== n.XV.review.id && B(n.XV.payment.id), F(e))
        }, [E, B, U, T.subscriptions, P]), (0, s.jsx)(f.Provider, {
          value: {
            paymentMethod: g,
            setPaymentMethod: x,
            paymentToken: y,
            setPaymentToken: _,
            promoCode: v,
            setPromoCode: b,
            billingDetails: S,
            setBillingDetails: j,
            step: O,
            setStep: B,
            handleLoginSuccess: G,
            taxData: {
              first_name: S.first_name,
              last_name: S.last_name,
              country: S.country,
              postal_code: S.postal_code
            },
            type: t,
            availableItems: U,
            selectedItem: D,
            setSelectedItem: e => {
              let a = U.find(t => t.id === e);
              if (a) {
                F(a);
                let e = new URLSearchParams(window.location.search);
                e.set("id", a.id), I(k, {
                  query: e
                }), "gems" === t && (0, h.MT)({
                  purchasableItemId: a.id,
                  purchasableItemName: a.name,
                  purchasableItemAmount: a.amount,
                  buttonLocation: R ?? "shopModal"
                })
              }
            },
            userSubscriptions: T,
            allSubscriptions: M,
            cardType: C,
            setCardType: w
          },
          "data-sentry-element": "ShopContext.Provider",
          "data-sentry-component": "ShopProvider",
          "data-sentry-source-file": "ShopContext.tsx",
          children: e
        })
      }

      function x() {
        let e = (0, r.useContext)(f);
        if (void 0 === e) throw Error("useShop must be used within a ShopProvider");
        return e
      }
    },
    7139: (e, t, a) => {
      "use strict";
      a.d(t, {
        s: () => y
      });
      var s = a(95155),
        r = a(69518),
        n = a(20816),
        i = a.n(n),
        o = a(70448),
        l = a.n(o),
        d = a(12115),
        c = a(26778);
      let u = ({
        password: e,
        className: t
      }) => {
        let [a, r] = (0, d.useState)([{
          text: "Minimum of 8 characters",
          isValid: null
        }, {
          text: "One UPPERCASE letter",
          isValid: null
        }]);
        return (0, d.useEffect)(() => {
          null !== e && (e.length < 8 ? r(e => [{
            text: e[0].text,
            isValid: !1
          }, {
            ...e[1]
          }]) : r(e => [{
            text: e[0].text,
            isValid: !0
          }, {
            ...e[1]
          }]), /[A-Z]/.test(e) ? r(e => [{
            ...e[0]
          }, {
            text: e[1].text,
            isValid: !0
          }]) : r(e => [{
            ...e[0]
          }, {
            text: e[1].text,
            isValid: !1
          }]))
        }, [e]), (0, s.jsxs)("div", {
          className: l()(i().PasswordRequirements, t),
          "data-sentry-component": "PasswordRequirements",
          "data-sentry-source-file": "PasswordRequirements.tsx",
          children: [(0, s.jsx)("p", {
            children: "Make sure your password contains:"
          }), a.map(e => (0, s.jsxs)("p", {
            className: i().PasswordRequirement,
            "data-testid": "password-requirement",
            children: [e.text, null !== e.isValid ? (0, s.jsx)(c.default, {
              unoptimized: !0,
              src: e.isValid ? "/media/check.svg" : "/media/x-invalid-icon.svg",
              alt: "check-icon",
              width: 16,
              height: 16,
              className: l()(i().CheckIcon, {
                [i().isValid]: e.isValid
              }),
              "data-testid": `${e.isValid?"valid":"invalid"}-icon`
            }) : null]
          }, e.text))]
        })
      };
      var m = a(12347),
        p = a.n(m),
        h = a(53686),
        f = a.n(h),
        g = a(31969),
        x = a(76499);
      let y = ({
        name: e,
        label: t,
        withRequirements: a,
        onUpdate: n,
        notification: i,
        invalid: o,
        errors: c,
        testId: m,
        placeholder: h,
        disabled: y,
        withMarginBottom: _,
        autofocus: v
      }) => {
        let [b, S] = (0, d.useState)(null), [j, C] = (0, d.useState)(!1), [w, N] = (0, d.useState)(!1);
        return (0, s.jsxs)(r.D0, {
          className: l()(p().Field, f().PasswordField, {
            [p().Invalid]: o,
            [f().WithMarginBottom]: _ ?? !1
          }),
          name: e,
          onChange: e => {
            e.preventDefault()
          },
          "data-sentry-element": "Field",
          "data-sentry-component": "PasswordField",
          "data-sentry-source-file": "PasswordField.tsx",
          children: [(0, s.jsx)(r.JU, {
            className: p().Label,
            "data-sentry-element": "Label",
            "data-sentry-source-file": "PasswordField.tsx",
            children: t ?? "Password"
          }), (0, s.jsxs)("div", {
            className: f().FieldInputWrapper,
            "data-testid": m,
            children: [(0, s.jsx)(r.Ec, {
              asChild: !0,
              "data-sentry-element": "Control",
              "data-sentry-source-file": "PasswordField.tsx",
              children: (0, s.jsx)("input", {
                tabIndex: 0,
                className: l()(p().Input, p().WithIcon, {
                  [p().Clicked]: w
                }),
                onClick: () => N(!0),
                onBlur: () => N(!1),
                name: e,
                type: j ? "text" : "password",
                onChange: e => {
                  S(e.target.value), n?.(e.target.value)
                },
                disabled: y ?? !1,
                placeholder: h ?? "",
                autoFocus: v,
                "data-testid": "password-input"
              })
            }), a && (0, s.jsx)(u, {
              className: f().PasswordRequirements,
              password: b
            }), (0, s.jsx)("button", {
              type: "button",
              className: f().FieldInputIconImage,
              onClick: e => {
                e.preventDefault(), e.stopPropagation(), C(e => !e)
              },
              children: (0, s.jsx)(g.StaticImage, {
                src: j ? "/media/general/eye.svg" : "/media/general/eye-off.svg",
                alt: "eye-icon",
                width: 24,
                height: 24,
                "data-sentry-element": "StaticImage",
                "data-sentry-source-file": "PasswordField.tsx"
              })
            }), (0, s.jsx)(x.l, {
              error: c?.[0],
              testId: "password-error",
              "data-sentry-element": "AuthError",
              "data-sentry-source-file": "PasswordField.tsx"
            })]
          }), i && (0, s.jsx)(s.Fragment, {
            children: i
          })]
        })
      }
    },
    10131: (e, t, a) => {
      "use strict";
      a.d(t, {
        $S: () => p,
        Bj: () => l,
        Or: () => r,
        P2: () => u,
        PS: () => d,
        Pl: () => h,
        R2: () => b,
        Sh: () => _,
        UD: () => n,
        Ui: () => i,
        Us: () => w,
        VS: () => f,
        X7: () => s,
        cn: () => C,
        fI: () => y,
        gB: () => x,
        gr: () => m,
        iL: () => v,
        jq: () => o,
        qZ: () => N,
        uu: () => g,
        vB: () => c,
        w_: () => j,
        zp: () => S
      }), a(53089);
      var s = "h5pe41v",
        r = "h5pe41q",
        n = "h5pe41d",
        i = "h5pe41g",
        o = "h5pe41l",
        l = "h5pe41i",
        d = "h5pe41j",
        c = "h5pe41n",
        u = "h5pe41o",
        m = "h5pe417",
        p = "h5pe415",
        h = "h5pe414",
        f = "h5pe41e",
        g = "h5pe410",
        x = "h5pe412",
        y = "h5pe411",
        _ = "h5pe41h",
        v = "h5pe41r",
        b = "h5pe419",
        S = "h5pe41c",
        j = "h5pe41b",
        C = "h5pe41a",
        w = "h5pe416",
        N = "h5pe41k"
    },
    10447: (e, t, a) => {
      "use strict";
      a.d(t, {
        o: () => i
      });
      var s = a(95155),
        r = a(2417),
        n = a(90242);
      let i = e => (0, s.jsx)(n.$, {
        variant: "label",
        size: "medium",
        tabIndex: r.Ee.AUTO,
        className: e.addClass,
        testId: e.testId ?? "back-button",
        onClick: e.onClick,
        "data-sentry-element": "Button",
        "data-sentry-component": "BackButton",
        "data-sentry-source-file": "index.tsx",
        children: "Back"
      })
    },
    12347: e => {
      e.exports = {
        Root: "form_styles_Root__kJeAu",
        Field: "form_styles_Field__VPQER",
        Label: "form_styles_Label__WBFSK",
        Message: "form_styles_Message__MaRTe",
        Input: "form_styles_Input__KHhPi",
        Clicked: "form_styles_Clicked__Qe9fJ",
        WithIcon: "form_styles_WithIcon__DHSfA",
        Invalid: "form_styles_Invalid__H6LiR",
        KeepAliveContainer: "form_styles_KeepAliveContainer__QHWxO",
        AuthStepsContainer: "form_styles_AuthStepsContainer__6KDak",
        Active: "form_styles_Active__0ZZVd",
        Reward: "form_styles_Reward__U4OOu",
        BackButton: "form_styles_BackButton__8S4a5",
        Shop: "form_styles_Shop__p74jh",
        ErrorMargin: "form_styles_ErrorMargin__e2qF6"
      }
    },
    17155: (e, t, a) => {
      "use strict";
      a.d(t, {
        ModalManager: () => x
      });
      var s = a(95155),
        r = a(14011),
        n = a(12115),
        i = a(47650),
        o = a(87720);
      a(1458);
      var l = a(77142),
        d = a(70448),
        c = a.n(d),
        u = a(85824);

      function m({
        children: e,
        customClassName: t,
        closeButtonClassName: a,
        modalContentClassName: r,
        closeModalCallback: d
      }) {
        let [m, p] = (0, n.useState)(!1), [h, f] = (0, n.useState)(!1), {
          closeModal: g
        } = (0, u.h)();
        (0, n.useEffect)(() => {
          p(!0), f(!0)
        }, []);
        let x = () => {
            p(!1), d && d(), g()
          },
          y = (() => {
            let [e, t] = (0, n.useState)(!1);
            return (0, n.useEffect)(() => {
              let e = () => {
                  let e = document.querySelector("#qc-cmp2-container #qc-cmp2-ui");
                  if (!e) return !1;
                  let t = e.getBoundingClientRect();
                  return t.width > 0 && t.height > 0
                },
                a = new MutationObserver(() => {
                  t(e())
                });
              return a.observe(document.body, {
                childList: !0,
                subtree: !0
              }), e() && t(!0), () => a.disconnect()
            }, []), e
          })();
        return h ? (0, i.createPortal)((0, s.jsxs)(o.bL, {
          open: m,
          onOpenChange: e => {
            !y && (e || x())
          },
          children: [(0, s.jsx)(o.hJ, {
            className: c()("_14fpm4p0")
          }), (0, s.jsxs)(o.UC, {
            className: c()("_14fpm4p1", t),
            children: [(0, s.jsx)(o.hE, {
              hidden: !0,
              children: "Main Modal"
            }), (0, s.jsxs)("div", {
              className: c()("_14fpm4p3", r),
              tabIndex: 0,
              "aria-label": "Modal",
              "data-testid": "modal-content",
              children: [(0, s.jsx)(o.bm, {
                asChild: !0,
                children: (0, s.jsx)("button", {
                  className: c()("_14fpm4p2", a),
                  onClick: x,
                  "data-testid": "modal-close-button",
                  children: (0, s.jsx)(l.t, {
                    name: "close",
                    width: 40,
                    height: 40
                  })
                })
              }), e]
            })]
          })]
        }), document.getElementById("modal-root")) : null
      }
      var p = a(6240),
        h = a(88011),
        f = a(4265),
        g = a(21765);

      function x({
        modals: e
      }) {
        let t = (0, r.useSearchParams)(),
          a = t.get("modal"),
          i = Object.keys(e),
          {
            routerReplaceLocalized: o
          } = (0, p.s)(),
          l = (0, r.usePathname)(),
          d = (0, f.w1)(),
          c = "authenticated" === d,
          x = (0, f.sb)(),
          {
            fetchGems: y
          } = (0, f.Ij)(),
          {
            isRewardActive: _,
            modalButtonLocation: v
          } = (0, u.h)(),
          b = (0, n.useRef)(null),
          S = (0, n.useRef)(a),
          j = (0, n.useRef)(!1);
        (0, n.useEffect)(() => {
          try {
            let e = performance.getEntriesByType("navigation")[0];
            j.current = e?.type === "reload"
          } catch {
            j.current = !1
          }
        }, []), (0, n.useEffect)(() => {
          let e = t.get("modal");
          if (e && v && e !== b.current) {
            if (j.current) {
              if (e === S.current) {
                b.current = e, j.current = !1;
                return
              }
              j.current = !1
            }
            switch (e) {
              case "subscribe":
                (0, g.lo)({
                  buttonLocation: v
                });
                break;
              case "shop":
                (0, g.qT)({
                  buttonLocation: v
                });
                break;
              case "support":
                "direct" === v && (0, g.h_)({
                  buttonLocation: v
                });
                break;
              case "sign-up":
                (0, g.UM)({
                  buttonLocation: v
                })
            }
            b.current = e
          }
        }, [t, v]), (0, n.useEffect)(() => {
          t.get("modal") || (b.current = null)
        }, [t]), (0, n.useEffect)(() => {
          if ("1" === t.get("subscription")) {
            let e = new URLSearchParams(t.toString());
            e.delete("subscription"), e.set("modal", "subscribe"), o(l, {
              query: e
            })
          }
        }, [l, o, t]), (0, n.useEffect)(() => {
          let e = t.has(h.T.REGISTER_CONFIRMATION_CODE),
            a = t.has(h.T.RESET_PASSWORD_CODE),
            s = t.has(h.T.EMAIL_CHANGE_CONFIRMATION_CODE),
            r = t.get("modal"),
            n = !!x?.isEmailConfirmed,
            i = e && c && !n;
          if ((e || a || s) && "sign-up" !== r && (!c || i)) {
            let e = new URLSearchParams(t.toString());
            e.set("modal", "sign-up"), o(l, {
              query: e
            })
          }
        }, [l, o, t, c, x?.isEmailConfirmed]), (0, n.useEffect)(() => {
          let e = t.get("modal"),
            a = !!x?.isEmailConfirmed;
          if ("sign-up" === e && c && a && !_) {
            let e = new URLSearchParams(t.toString());
            e.delete("modal"), e.delete(h.T.REGISTER_CONFIRMATION_CODE), o(l, {
              query: e
            })
          }
        }, [l, o, t, c, x?.isEmailConfirmed, _]);
        let C = t.get("modal"),
          w = i.find(e => C === e),
          N = t.has(h.T.REGISTER_CONFIRMATION_CODE),
          k = !!x?.isEmailConfirmed,
          E = c && N && !k;
        if ("sign-up" === C && !_ && ("loading" === d || c && !E) || !w) return null;
        let I = e[w];
        return I && I.component ? (0, s.jsx)(m, {
          customClassName: I.modalClassName,
          closeButtonClassName: I.closeButtonClassName,
          modalContentClassName: I.modalContentClassName,
          closeModalCallback: _ ? () => {
            c && y()
          } : void 0,
          "data-sentry-element": "Modal",
          "data-sentry-component": "ModalManager",
          "data-sentry-source-file": "index.tsx",
          children: (0, s.jsx)(n.Suspense, {
            fallback: (0, s.jsx)("div", {
              children: "Loading..."
            }),
            "data-sentry-element": "Suspense",
            "data-sentry-source-file": "index.tsx",
            children: I.component
          })
        }) : null
      }
    },
    19109: (e, t, a) => {
      "use strict";
      a.r(t), a(60061)
    },
    20671: (e, t, a) => {
      "use strict";
      a.d(t, {
        ModalUnlockAccessClient: () => P
      });
      var s = a(95155),
        r = a(12115),
        n = a(6422),
        i = a(26778),
        o = a(72044),
        l = a(90242),
        d = a(52573),
        c = a(70448),
        u = a.n(c),
        m = a(38841),
        p = a(46786),
        h = a(85824),
        f = a(21765),
        g = a(27882),
        x = a(68497);
      let y = {
          itemSku: (0, m.env)("NEXT_PUBLIC_SHOP_SKU_REWARDED_ACCESS"),
          itemAmount: 1,
          bundleSku: (0, m.env)("NEXT_PUBLIC_SHOP_SKU_REWARDED_FULLSCREEN_BUNDLE"),
          bundleAmount: 1
        },
        _ = "fullscreen_unlock",
        v = ({
          priceLabel: e,
          gameData: t
        }) => {
          let a, n, c, m, {
              modalParams: v,
              closeModal: b,
              onUnlock: S,
              openModal: j
            } = (0, h.h)(),
            {
              features: C
            } = (0, g.R)(),
            w = v?.insufficientGems === "true",
            N = C.core.isRewardedUnlockGamesABTestEnabled,
            k = C.core.isRewardedFullscreenABTestEnabled,
            E = N && !k,
            I = () => E ? "unlockGame" : "unlockFullscreen",
            {
              handlePurchase: A,
              insufficientGems: P
            } = (0, p.y)({
              gameSlug: t?.slug,
              item: y,
              requiredGems: 5,
              buttonLocation: I(),
              requireConfirmationBeforeShop: !0,
              onSuccess: () => {
                t?.slug && (sessionStorage.setItem(`${_}_method_${t.slug}`, "gems"), sessionStorage.setItem(`${_}_timestamp_${t.slug}`, Date.now().toString()), document.dispatchEvent(new CustomEvent(x.l, {
                  detail: {
                    slug: t.slug
                  }
                }))), S?.(), b()
              },
              onSuccessAnalytics: () => {
                (0, f.Fi)("virtualItemSpendingFullScreenAccessSuccess", t)
              },
              errorContext: {
                ctaValue: 100
              }
            }),
            [R, T] = (0, r.useState)(!1),
            [L, D] = (0, r.useState)(w),
            F = (0, r.useRef)(!1),
            U = async () => {
              if (!R) {
                T(!0);
                try {
                  if (L) return void(b(), setTimeout(() => {
                    j("shop", void 0, I())
                  }, 0));
                  F.current || ((0, f.Fi)("fullScreenAccess", t), F.current = !0), (await A()).insufficientGems && D(!0)
                } finally {
                  T(!1)
                }
              }
            };
          return L || P ? (a = "Not Enough Gems", n = "Buy more to unlock the ultimate gaming experience!", c = "Buy gems", m = "/media/abtests/emptybag.png") : E ? (a = "Unlock Game", n = `Use ${e} gems to play this subscriber-only game`, c = `Use ${e} gems`, m = "/media/abtests/emptybag.png") : (a = "Go Full Screen", n = `Use ${e} gems to play your game in full screen`, c = `Use ${e} gems`, m = "/media/abtests/fullscreen.png"), (0, s.jsxs)("div", {
            className: o.unlockAccessCard,
            "data-sentry-component": "ModalUnlockAccessGems",
            "data-sentry-source-file": "ModalUnlockAccessGems.tsx",
            children: [(0, s.jsx)("div", {
              className: o.unlockAccessIconWrapper,
              "aria-hidden": "true",
              children: (0, s.jsx)(i.default, {
                src: m,
                alt: "",
                width: 200,
                height: 150,
                unoptimized: !0,
                "data-sentry-element": "Image",
                "data-sentry-source-file": "ModalUnlockAccessGems.tsx"
              })
            }), (0, s.jsx)("h2", {
              className: o.unlockAccessTitle,
              children: a
            }), (0, s.jsx)("p", {
              className: o.unlockAccessDescription,
              children: n
            }), (0, s.jsx)(l.$, {
              variant: "filled",
              size: "extraLarge",
              className: u()(d.button, o.responsiveButton),
              onClick: U,
              disabled: R,
              type: "button",
              fullWidth: !0,
              "data-sentry-element": "Button",
              "data-sentry-source-file": "ModalUnlockAccessGems.tsx",
              children: (0, s.jsxs)("span", {
                className: o.buttonContent,
                children: [(0, s.jsx)(i.default, {
                  src: "/media/gem_vertical.png",
                  alt: "Gem",
                  width: 36,
                  height: 36,
                  className: o.responsiveButtonIcon,
                  "data-sentry-element": "Image",
                  "data-sentry-source-file": "ModalUnlockAccessGems.tsx"
                }), c]
              })
            })]
          })
        };
      var b = a(45798),
        S = a(67754),
        j = a(17413),
        C = a(24709),
        w = a(88828),
        N = a(4265),
        k = a(48976),
        E = a(89549);
      let I = ({
        gameData: e
      }) => {
        let {
          closeModal: t,
          onUnlock: a
        } = (0, h.h)(), {
          sdk: c,
          status: p
        } = (0, b.T)(), {
          getGameplayId: g
        } = (0, w.T3)(), {
          favoriteGames: y
        } = (0, N.rB)(), _ = (0, N.XI)(), {
          isFullscreen: v
        } = (0, k.xg)(), [I, A] = (0, r.useState)(!1), P = (0, j.t)(), R = async () => {
          if (I || "ready" !== p || !c?.ads) return;
          A(!0), t();
          let {
            group: s
          } = (0, n.Gt)(), r = {
            duration: 30,
            product: "evo",
            env: S.bW[(0, m.env)("NEXT_PUBLIC_BUILD_ENV")],
            keyvalues: {
              ABTestSlot1: `cohort-${s}:bl-fullscreen`
            }
          }, i = g() || "", o = !!_ && !!y && y.includes(e?.slug || ""), l = performance.now();
          e && (0, f.Gd)("No", e, i, o, v, l, "fullscreen"), (0, E.K)(!0), P.info({
            data: {
              options: r,
              sdkStatus: p
            }
          }, "[ModalUnlockAccessRewardedAd] Calling showRewardAd with options");
          let d = () => {
            P.info("[ModalUnlockAccessRewardedAd] Ad loaded event received"), e && (0, f.rM)("No", o, e, i, performance.now()), document.removeEventListener("ark-video-loaded", d)
          };
          document.addEventListener("ark-video-loaded", d);
          let u = () => {
            P.info("[ModalUnlockAccessRewardedAd] Ad skipped event received"), e && (0, f.a7)("No", o, e, i), document.removeEventListener("ark-video-skipped", u)
          };
          document.addEventListener("ark-video-skipped", u);
          try {
            P.info("[ModalUnlockAccessRewardedAd] Awaiting showRewardAd..."), await c.ads.showRewardAd(r), P.info("[ModalUnlockAccessRewardedAd] showRewardAd promise resolved"), e?.slug && (sessionStorage.setItem(`fullscreen_unlock_method_${e.slug}`, "rewarded_ad"), sessionStorage.setItem(`fullscreen_unlock_timestamp_${e.slug}`, Date.now().toString()), document.dispatchEvent(new CustomEvent(x.l, {
              detail: {
                slug: e.slug
              }
            }))), a?.()
          } catch (t) {
            P.error({
              data: t
            }, "[ModalUnlockAccessRewardedAd] - Reward ad failed"), (0, C.Cp)("platform.ad.reward.failed", {
              tags: {
                game: e?.slug,
                "platform.ad.reward.failed": "true",
                "platform.ad.reward.error.message": t instanceof Error ? t.message : "Unknown error"
              }
            })
          } finally {
            A(!1), document.removeEventListener("ark-video-loaded", d), document.removeEventListener("ark-video-skipped", u), e && (0, f.Pq)("No", e, i, o, v, "fullscreen"), (0, E.K)(!1)
          }
        };
        return (0, s.jsxs)("div", {
          className: o.unlockAccessCard,
          "data-sentry-component": "ModalUnlockAccessRewardedAd",
          "data-sentry-source-file": "ModalUnlockAccessRewardedAd.tsx",
          children: [(0, s.jsx)("div", {
            className: o.rewardedAdVisualElements,
            "aria-hidden": "true",
            children: (0, s.jsx)(i.default, {
              src: "/media/abtests/fullscreen.png",
              alt: "",
              width: 213,
              height: 174,
              unoptimized: !0,
              "data-sentry-element": "Image",
              "data-sentry-source-file": "ModalUnlockAccessRewardedAd.tsx"
            })
          }), (0, s.jsx)("h2", {
            className: o.unlockAccessTitle,
            children: "Go Full Screen"
          }), (0, s.jsx)("p", {
            className: o.unlockAccessDescription,
            children: "To play in full screen: watch an ad, then click the full screen icon"
          }), (0, s.jsx)(l.$, {
            variant: "filled",
            size: "extraLarge",
            className: u()(d.button, o.responsiveButton),
            onClick: R,
            disabled: I || "ready" !== p,
            type: "button",
            fullWidth: !0,
            "data-sentry-element": "Button",
            "data-sentry-source-file": "ModalUnlockAccessRewardedAd.tsx",
            children: (0, s.jsxs)("span", {
              className: o.buttonContent,
              children: [(0, s.jsx)(i.default, {
                src: "/media/play.png",
                alt: "Play",
                width: 36,
                height: 36,
                className: o.responsiveButtonIcon,
                "data-sentry-element": "Image",
                "data-sentry-source-file": "ModalUnlockAccessRewardedAd.tsx"
              }), "Watch ad"]
            })
          })]
        })
      };
      var A = a(30423);
      let P = ({
        priceLabel: e
      }) => {
        let {
          features: t
        } = (0, g.R)(), {
          modalParams: a
        } = (0, h.h)(), [i, o] = (0, r.useState)(null), [l, d] = (0, r.useState)(!1), [c, u] = (0, r.useState)(null), m = t.core.isRewardedFullscreenABTestEnabled, p = t.core.isRewardedUnlockGamesABTestEnabled, f = a?.insufficientGems === "true", [x, y] = (0, r.useState)(() => !!f || null);
        return ((0, r.useEffect)(() => {
          let e = a?.origin;
          e && (async () => {
            let t = e?.split("/").filter(Boolean).pop()?.toLowerCase() || "";
            if (!t) return u("Invalid game slug");
            d(!0), u(null);
            try {
              let e = `${window.location.origin}/api/game/game-data-by-slug?slug=${t}`,
                a = await (0, A.Fd)(e);
              if (!a || "object" != typeof a) return void u("Invalid game data received");
              o(a[0])
            } catch (e) {
              u(e instanceof Error ? e.message : "Failed to fetch game data")
            } finally {
              d(!1)
            }
          })()
        }, [a?.origin]), (0, r.useEffect)(() => {
          if (f) return void y(!0);
          if (p) {
            let {
              group: e
            } = (0, n.Qc)();
            y(e === n.bQ.PAY_GEMS_C);
            return
          }
          if (m) {
            let {
              group: e
            } = (0, n.Gt)();
            y(e === n.B5.REWARDED_FULLSCREEN_C);
            return
          }
          y(!1)
        }, [m, p, f]), l || null === x || c || !i) ? null : i && x ? (0, s.jsx)(v, {
          priceLabel: e,
          gameData: i
        }) : (0, s.jsx)(I, {
          gameData: i,
          "data-sentry-element": "ModalUnlockAccessRewardedAd",
          "data-sentry-component": "ModalUnlockAccessClient",
          "data-sentry-source-file": "ModalUnlockAccessClient.tsx"
        })
      }
    },
    20816: e => {
      e.exports = {
        PasswordRequirements: "styles_PasswordRequirements___EjDo",
        PasswordRequirement: "styles_PasswordRequirement__2kdzx",
        CheckIcon: "styles_CheckIcon__qv25_",
        isValid: "styles_isValid__O4pvJ"
      }
    },
    21540: (e, t, a) => {
      "use strict";
      a.d(t, {
        N: () => r
      });
      var s = a(79481);
      let r = (0, s.createServerReference)("40be58b282f2a3235aac957a5699a3ccb28ac8d624", s.callServer, void 0, s.findSourceMapURL, "resendConfirmation")
    },
    21637: (e, t, a) => {
      "use strict";
      a.d(t, {
        H: () => o
      });
      var s = a(95155),
        r = a(79038),
        n = a(64585),
        i = a.n(n);
      let o = () => (0, s.jsx)(r.LocalizedLink, {
        tabIndex: 0,
        className: i().link,
        href: "/privacy-policy",
        target: "_blank",
        "data-sentry-element": "LocalizedLink",
        "data-sentry-component": "PrivacyPolicyLink",
        "data-sentry-source-file": "PrivacyPolicyLink.tsx",
        children: "Privacy policy"
      })
    },
    23349: (e, t, a) => {
      "use strict";
      a.d(t, {
        xr: () => i,
        T_: () => r,
        w8: () => n,
        U4: () => o.U,
        R7: () => o.R
      }), a(38841);
      var s = a(42956);
      let r = (e, t) => t !== s.dm.subscription && e && e?.now?.taxes && e?.now?.taxes !== "0.00" ? `${e?.currency?.symbol}${e?.now?.taxes}` : "TBD",
        n = e => e?.now?.total ? `${e?.currency?.symbol}${e?.now?.total}` : null,
        i = (e, t, a) => t ? e === s.dm.subscription ? {
          subscriptions: [{
            plan: t?.variantId.endsWith("_trial") ? t?.variantId.replace("_trial", "") : t?.variantId || ""
          }]
        } : {
          adjustments: [{
            itemCode: t?.variantId || t?.id || "",
            quantity: 1
          }],
          address: a
        } : {};
      var o = a(74113)
    },
    23939: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        ShopWrapper: () => eU
      });
      var s, r, n = a(95155),
        i = a(12115),
        o = a(84374),
        l = a(12118),
        d = a(70448),
        c = a.n(d),
        u = a(4265);
      a(31270);
      var m = "_4jgtit7",
        p = "_4jgtit6",
        h = "_4jgtitj",
        f = "_4jgtitl",
        g = "_4jgtite",
        x = "_4jgtit1",
        y = "_4jgtita",
        _ = "_4jgtitb",
        v = "_4jgtitc",
        b = "_4jgtit8",
        S = "_4jgtits",
        j = "_4jgtitp",
        C = a(90242),
        w = a(98618),
        N = a(58264),
        k = a(26778);
      a(134);
      var E = a(14011),
        I = a(37357);
      let A = ({
        items: e,
        defaultValue: t,
        onUpdate: a
      }) => {
        let s = (0, E.useSearchParams)(),
          [r, o] = (0, i.useState)(e.find(e => e.value === t) || e[0]);
        return (0, i.useEffect)(() => {
          let t = s.get("id");
          t && o(e.find(e => e.value === t) || e[0])
        }, [s, e]), (0, n.jsx)(I.l, {
          items: e,
          selectedItem: r,
          onUpdate: a,
          contentClassName: "xkihrj2",
          "data-sentry-element": "Select",
          "data-sentry-component": "GemsDropdown",
          "data-sentry-source-file": "GemsDropdown.tsx"
        })
      };
      var P = a(4944),
        R = a(21765),
        T = a(85824);
      let L = () => {
        let {
          selectedItem: e,
          setSelectedItem: t,
          availableItems: a,
          type: s,
          paymentMethod: r
        } = (0, P.q)(), {
          modalButtonLocation: i
        } = (0, T.h)(), o = a.map(e => ({
          label: `${e.amount?.toLocaleString()} Gems`,
          value: e.id
        }));
        return (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsxs)("div", {
            className: "xkihrj0",
            "data-testid": "gems-select-container",
            children: [(0, n.jsx)(k.default, {
              src: "https://arenacloud.cdn.arkadiumhosted.com/arkadiummodulesstorage-blob/evo-static-assets/assets/shop/purple_gem.webp",
              alt: "Gems",
              width: 20,
              height: 20,
              "data-sentry-element": "StaticImage",
              "data-sentry-source-file": "index.tsx"
            }), (0, n.jsx)(A, {
              defaultValue: e?.id || o[0].value,
              onUpdate: e => (e => {
                if (t(e), "gems" === s) {
                  let t = a.find(t => t.id === e);
                  (0, R.c$)({
                    purchasableItemId: t?.id,
                    purchasableItemAmount: t?.amount,
                    purchasableItemName: t?.name,
                    paymentType: r,
                    buttonLocation: i ?? "shopModal"
                  })
                }
              })(e.value),
              items: o,
              "data-sentry-element": "GemsDropdown",
              "data-sentry-source-file": "index.tsx"
            })]
          }), (0, n.jsxs)("h2", {
            className: "xkihrj1",
            "data-testid": "price-text",
            children: ["Price: $", e?.price]
          })]
        })
      };
      a(43382);
      let D = () => {
        let {
          selectedItem: e,
          availableItems: t,
          setSelectedItem: a
        } = (0, P.q)(), {
          modalButtonLocation: s
        } = (0, T.h)(), r = (0, u.sb)();
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("div", {
            className: "acxh9f0",
            children: [(0, n.jsxs)("div", {
              className: "acxh9f4",
              children: [(0, n.jsx)(k.default, {
                src: "/media/subscription.png",
                alt: "Arkadium Plus",
                width: 28.8,
                height: 32,
                "data-sentry-element": "StaticImage",
                "data-sentry-source-file": "index.tsx"
              }), (0, n.jsx)("p", {
                className: "acxh9f5",
                children: e?.name
              })]
            }), (0, n.jsxs)("div", {
              className: "acxh9f7",
              children: [(0, n.jsx)("div", {
                className: "acxh9f1",
                children: t.map(t => (0, n.jsx)("button", {
                  className: c()("acxh9f2", e?.intervalLength === t.intervalLength && "acxh9f3"),
                  onClick: n => {
                    n.preventDefault(), e?.id !== t.id && ((0, R.BZ)({
                      subscriptionType: t.id,
                      xsollaId: r?.uid ?? "",
                      buttonLocation: s ?? "subscriptionModal"
                    }), a(t.id))
                  },
                  children: 12 === t.intervalLength ? "Annual" : "Monthly"
                }, t.id))
              }), (0, n.jsxs)("h2", {
                className: "acxh9f6",
                children: ["Price: $", e?.price ? e?.price.toString().replace(".", ",") : ""]
              })]
            })]
          })
        })
      };
      var F = a(19253),
        U = a(23349),
        M = a(42956);
      let O = ({
        taxSum: e,
        totalSum: t,
        price: a,
        paymentType: s,
        selectedItem: r,
        isTrial: i
      }) => {
        let {
          promoCode: o
        } = (0, P.q)(), l = s === M.dm.subscription ? r?.name : `${r?.amount?.toLocaleString("en-US")} Gems`, d = "TBD" !== e || i ? "Pay now" : "Total Before Tax";
        return (0, n.jsx)("div", {
          className: "_4jgtit5",
          "data-sentry-component": "PaymentSummary",
          "data-sentry-source-file": "PaymentSummary.tsx",
          children: (0, n.jsxs)("div", {
            className: c()(x, y),
            "data-testid": "payment-summary",
            children: [(0, n.jsx)("h2", {
              className: b,
              children: "Summary"
            }), (0, n.jsxs)("div", {
              className: _,
              children: [(0, n.jsx)("p", {
                children: l
              }), (0, n.jsxs)("p", {
                children: ["$", r?.price]
              })]
            }), (0, n.jsxs)("div", {
              className: _,
              children: [(0, n.jsx)("p", {
                children: "Sales Tax"
              }), (0, n.jsx)("p", {
                children: e
              })]
            }), o && a?.now?.discount !== "0.00" && (0, n.jsxs)("div", {
              className: _,
              children: [(0, n.jsxs)("p", {
                className: "_4jgtith",
                children: ["Promo Code applied ", o]
              }), (0, n.jsxs)("p", {
                className: "_4jgtiti",
                children: ["-$", a?.now?.discount]
              })]
            }), i && (0, n.jsxs)("div", {
              className: _,
              children: [(0, n.jsx)("p", {
                children: "Total after trial"
              }), (0, n.jsxs)("p", {
                children: [o && a?.now?.discount !== "0.00" && (0, n.jsxs)("s", {
                  className: j,
                  children: ["$", a?.now?.[s === M.dm.subscription ? "subscriptions" : "adjustments"]]
                }), t]
              })]
            }), (0, n.jsx)("div", {
              className: f
            }), (0, n.jsxs)("div", {
              className: _,
              children: [(0, n.jsx)("p", {
                className: "_4jgtitr",
                children: d
              }), i ? (0, n.jsx)("p", {
                children: "$0.00"
              }) : (0, n.jsxs)("p", {
                children: [o && a?.now?.discount !== "0.00" && (0, n.jsxs)("s", {
                  className: j,
                  children: ["$", a?.now?.[s === M.dm.subscription ? "subscriptions" : "adjustments"]]
                }), t]
              })]
            })]
          })
        })
      };
      var B = a(79038),
        G = a(77142),
        $ = a(31679);
      let q = ({
        promoCodeError: e,
        handlePromoCodeVerification: t
      }) => {
        let {
          paymentMethod: a,
          billingDetails: s,
          setStep: r,
          promoCode: i,
          cardType: o
        } = (0, P.q)(), l = e => {
          e.preventDefault(), r(M.XV.payment.id)
        }, d = (e => {
          if (e) return ({
            master: "mastercard",
            visa: "visa"
          })[e.toLowerCase()] || void 0
        })(o);
        return (0, n.jsxs)("div", {
          className: "_4jgtit4",
          "data-sentry-component": "PaymentDetails",
          "data-sentry-source-file": "PaymentDetails.tsx",
          children: [(0, n.jsxs)("div", {
            className: c()(x, y),
            children: [(0, n.jsx)("h2", {
              className: "_4jgtit9",
              children: "Payment method"
            }), (0, n.jsxs)("div", {
              className: v,
              children: [(0, n.jsxs)("div", {
                className: "_4jgtitf",
                children: [(0, n.jsx)("p", {
                  className: "_4jgtitg",
                  children: "paypal" === a ? "Paypal" : "Credit Card"
                }), "paypal" === a && (0, n.jsx)(G.t, {
                  width: 16,
                  height: 16,
                  name: "paypal"
                }), "card" === a && d && (0, n.jsx)(G.t, {
                  width: 35.8,
                  height: 24.9,
                  name: d
                })]
              }), (0, n.jsx)(B.LocalizedLink, {
                className: g,
                href: "?shop=true&step=payment",
                onClick: e => l(e),
                "data-sentry-element": "LocalizedLink",
                "data-sentry-source-file": "PaymentDetails.tsx",
                children: "Edit"
              })]
            })]
          }), "card" === a && (0, n.jsxs)("div", {
            className: c()(x, "_4jgtitd"),
            children: [(0, n.jsx)("h2", {
              className: b,
              children: "Billing details"
            }), (0, n.jsxs)("div", {
              className: c()(v, h),
              children: [(0, n.jsxs)("div", {
                children: [(0, n.jsxs)("p", {
                  children: [s.first_name, " ", s.last_name]
                }), (0, n.jsx)("p", {
                  children: s.email
                }), (0, n.jsxs)("p", {
                  children: [s.address1, ", ", s.city]
                }), (0, n.jsxs)("p", {
                  children: [s.country, " - ", s.postal_code]
                })]
              }), (0, n.jsx)(B.LocalizedLink, {
                className: g,
                href: "?shop=true&step=payment",
                onClick: e => l(e),
                children: "Edit"
              })]
            })]
          }), (0, n.jsx)("div", {
            className: x,
            children: (0, n.jsx)($.k, {
              className: h,
              labelClassName: "_4jgtitt",
              label: "Promo code",
              disabled: !!i || !!e,
              iconClassName: h,
              onIconClick: e => {
                t(e)
              },
              onIconEmptyClick: () => {
                t("")
              },
              withIcon: !0,
              error: !!e,
              errorMessage: e,
              testId: "promo-code-input",
              "data-sentry-element": "TextInput",
              "data-sentry-source-file": "PaymentDetails.tsx"
            })
          })]
        })
      };
      var z = a(2725),
        W = a(81414),
        V = a(41936);
      let X = ["POST", "PATCH"],
        H = (e, t) => ((t = t || {}).headers = t.headers || {
          "Content-Type": "application/json"
        }, t.headers["Content-Type"] || -1 === X.indexOf(t.method.toUpperCase()) || (t.headers["Content-Type"] = "application/json"), fetch(e, t).then(e => e.text().then(t => {
          let a;
          try {
            a = JSON.parse(t)
          } catch (e) {}
          if (e.status >= 200 && e.status < 300) return a || t;
          {
            let s = new J(e);
            throw a && (a = Array.isArray(a) ? a[0] : a), s.body = a || t, s
          }
        })));
      class J extends Error {
        constructor(e) {
          super(`${e.status} - ${e.statusText} for ${e.url}`), this.name = "HttpError", this.response = e
        }
      }
      class Y {
        setServer(e) {
          if (!e) throw Error("Please, provide server Url");
          this.server = e
        }
        makeRequest(e, t, a = null, s = "", r = "", n) {
          if (!this.server) throw Error("No server url provided");
          let i = new Headers({
            "Content-Type": "application/json",
            cache: "no-store"
          });
          return s && i.append("Authorization", `Bearer ${s}`), r && i.append("recaptcha", r), n && i.append("recaptcha-mode", n), H(this.server.toString() + t, {
            method: e,
            headers: i,
            ...a ? {
              body: JSON.stringify({
                ...a
              })
            } : {}
          })
        }
        doPost(e, t, a = "") {
          let s = t.captchaToken || "",
            r = t.captchaMode || void 0;
          return delete t.captchaToken, delete t.captchaMode, this.makeRequest("POST", e, t, a, s, r)
        }
        doPatch(e, t, a = "") {
          let s = t.captchaToken || "";
          return delete t.captchaToken, delete t.captchaMode, this.makeRequest("PATCH", e, t, a, s)
        }
        doGet(e, t = "") {
          return this.makeRequest("GET", e, null, t)
        }
        getPlans() {
          return this.doGet("web-subscription/plan")
        }
        createSubscription(e, t) {
          return this.doPost("web-subscription/purchase", {
            ...e
          }, t)
        }
        purchaseSubscription(e, t) {
          return this.purchaseSubscriptionByEmail(e, t)
        }
        purchaseSubscriptionByEmail(e, t) {
          return this.doPost(`web-subscription/purchase/${e}`, {
            ...t
          })
        }
        purchaseGiftCard(e) {
          return this.doPost("Recurly-Gift-Card/purchase/", {
            ...e
          })
        }
        cancelSubscription(e, t) {
          return this.doPost("web-subscription/cancel", {
            ...e
          }, t)
        }
        getRecurlyData(e) {
          return this.doGet("web-subscription/user-recurly-data", e)
        }
        createSubscriptionChange(e, t) {
          return this.doPost("web-subscription/create-subscription-change", {
            ...e
          }, t)
        }
        reactivateSubscription(e, t) {
          return this.doPost("web-subscription/reactivate-subscription", {
            ...e
          }, t)
        }
        purchaseItem(e, t) {
          return this.doPost("web-subscription/purchase-item", {
            ...e
          }, t)
        }
        getPurchasableItems(e) {
          return this.doGet(`web-subscription/purchasable-items?${e.ids.map(e=>`ids=${encodeURIComponent(e)}`).join("&")}`)
        }
      }
      class K {
        setServer(e) {
          if (!e) throw Error("Please, provide server Url");
          this.server = e
        }
        makeRequest(e, t, a = null, s = "") {
          if (!this.server) throw Error("No server url provided");
          return H(this.server.toString() + t, {
            method: e,
            ...s ? {
              headers: {
                Authorization: `Bearer ${s}`,
                cache: "no-store"
              }
            } : {},
            ...a ? {
              body: JSON.stringify({
                ...a
              })
            } : {}
          })
        }
        doGet(e, t = "") {
          return this.makeRequest("GET", e, null, t)
        }
        getSubscriptions(e) {
          return this.doGet("general/subscriptions", e)
        }
        getExpiredSubscriptions(e) {
          return this.doGet("general/expired-subscriptions", e)
        }
      }
      var Q = a(17413);
      class Z {
        setServer(e) {
          if (!e) throw Error("Please, provide server Url");
          this.server = e
        }
        makeRequest(e, t, a = null, s = "") {
          if (!this.server) throw Error("No server url provided");
          return H(this.server.toString() + t, {
            method: e,
            ...s ? {
              headers: {
                Authorization: `Bearer ${s}`,
                cache: "no-store"
              }
            } : {},
            ...a ? {
              body: JSON.stringify({
                ...a
              })
            } : {}
          })
        }
        doGet(e, t = "") {
          return this.makeRequest("GET", e, null, t)
        }
        doPost(e, t, a = "") {
          return this.makeRequest("POST", e, t, a)
        }
        syncSubcriptions(e, t) {
          return (0, Q.t)().warn("[AppleSubscriptionApi::syncSubcriptions] - Method deprecated use syncSubscriptions instead"), this.doPost("apple-subscription/sync", {
            originalTransactionsIds: e
          }, t)
        }
        syncSubscriptions(e, t) {
          return this.doPost("apple-subscription/sync", {
            originalTransactionsIds: e
          }, t)
        }
        syncAppsFlyer(e) {
          return this.doPost("apple-subscription/sync-appsflyer", {
            ...e
          })
        }
        getSubcriptionShortInfo(e, t) {
          return (0, Q.t)().warn("[AppleSubscriptionApi::getSubcriptionShortInfo] - Method deprecated use getSubscriptionShortInfo instead"), this.doGet(`apple-subscription/subscription-short-info?originalTransactionId=${e}&productId=${t}`)
        }
        getSubscriptionShortInfo(e, t) {
          return this.doGet(`apple-subscription/subscription-short-info?originalTransactionId=${e}&productId=${t}`)
        }
        validateReciept(e) {
          return this.doPost("apple-subscription/validate-reciept", {
            data: e
          })
        }
      }
      class ee {
        setServer(e) {
          if (!e) throw Error("Please, provide server Url");
          this.server = e
        }
        makeRequest(e, t, a = null, s = "") {
          if (!this.server) throw Error("No server url provided");
          return H(this.server.toString() + t, {
            method: e,
            ...s ? {
              headers: {
                Authorization: `Bearer ${s}`,
                cache: "no-store"
              }
            } : {},
            ...a ? {
              body: JSON.stringify({
                ...a
              })
            } : {}
          })
        }
        doPost(e, t, a = "") {
          return this.makeRequest("POST", e, t, a)
        }
        doPatch(e, t, a = "") {
          return this.makeRequest("PATCH", e, t, a)
        }
        doGet(e, t = "") {
          return this.makeRequest("GET", e, null, t)
        }
        syncSubcriptions(e, t) {
          return (0, Q.t)().warn("[GoogleSubscriptionApi::syncSubcriptions] - Method deprecated use syncSubscriptions instead"), this.doPost("google-subscription/sync", {
            ...e
          }, t)
        }
        syncSubscriptions(e, t) {
          return this.doPost("google-subscription/sync", {
            ...e
          }, t)
        }
        syncAppsFlyer(e) {
          return this.doPost("google-subscription/sync-appsflyer", {
            ...e
          })
        }
        cancelSubscription(e, t, a, s) {
          return this.doPost(`google-subscription/cancel?packageName=${e}&subscriptionId=${t}&purchaseToken=${a}`, {
            subscriptionId: t
          }, s)
        }
        getSubcriptionShortInfo(e) {
          return (0, Q.t)().warn("[GoogleSubscriptionApi::getSubcriptionShortInfo] - Method deprecated use getSubscriptionShortInfo instead"), this.doGet(`google-subscription/subscription-short-info?purchaseToken=${e}`)
        }
        getSubscriptionShortInfo(e) {
          return this.doGet(`google-subscription/subscription-short-info?purchaseToken=${e}`)
        }
      }(s = {}).PurchaseSubscription = "PurchaseSub", s.PurchaseSubscriptionByEmail = "PurchaseSubByEmail", s.PurchaseItem = "PurchaseItem";
      var et = ((r = {})[r.InvalidRequestData = 1e3] = "InvalidRequestData", r[r.UserNotFound = 1001] = "UserNotFound", r[r.UserIsNotActive = 1002] = "UserIsNotActive", r[r.UserIsBanned = 1003] = "UserIsBanned", r[r.UserIsSoftDeleted = 1004] = "UserIsSoftDeleted", r[r.UserRemovedViaGDPR = 1005] = "UserRemovedViaGDPR", r[r.ExternalProviderError = 1006] = "ExternalProviderError", r[r.SubscriptionNotFound = 1007] = "SubscriptionNotFound", r[r.SubscriptionAlreadyAssignedToAnotherUser = 1008] = "SubscriptionAlreadyAssignedToAnotherUser", r[r.CaptchaValidationFailed = 1009] = "CaptchaValidationFailed", r[r.CaptchaScoreIsTooLow = 1010] = "CaptchaScoreIsTooLow", r[r.RecurlyInternalError = 2e3] = "RecurlyInternalError", r[r.RecurlyLogicError = 2001] = "RecurlyLogicError", r[r.RecurlyGiftCardPurchaseError = 2002] = "RecurlyGiftCardPurchaseError", r[r.RecurlySubscriptionPurchaseError = 2003] = "RecurlySubscriptionPurchaseError", r[r.UserAlreadyHasSubscription = 2004] = "UserAlreadyHasSubscription", r[r.EmailNotConfirmed = 2005] = "EmailNotConfirmed", r);
      new Y, new ee, new Z, new K;
      var ea = a(79481);
      let es = (0, ea.createServerReference)("7842056193f11103da567568e988d4e3f1b4793250", ea.callServer, void 0, ea.findSourceMapURL, "purchaseGems");
      var er = a(88011);
      let en = (0, ea.createServerReference)("78c0706d3d21a8de197ea80f257024d6d9c00bcb85", ea.callServer, void 0, ea.findSourceMapURL, "purchaseSubscription"),
        ei = ({
          domain: e,
          type: t,
          selectedItem: a
        }) => {
          let s = M.dm[t],
            r = (0, V.ef)("shop"),
            {
              handlePurchase: o
            } = ((e, t, a) => {
              let {
                setStep: s,
                paymentToken: r,
                selectedItem: n,
                promoCode: i
              } = (0, P.q)(), o = (0, u.Ij)(), l = (0, E.useSearchParams)(), d = async t => {
                if (n && r) try {
                  let o = l.has(er.b_.LOW_SCORE_CAPTCHA),
                    d = l.has(er.b_.BYPASS_CAPTCHA),
                    c = n.variantId || n.id,
                    u = {
                      arenaName: e,
                      planCode: c,
                      tokenId: r.id,
                      couponCodes: i ? [i] : [],
                      captchaToken: a.captchaToken,
                      captchaMode: a.captchaMode
                    },
                    p = await en(u, o, d, a.captchaMode);
                  if (p.errorCode) return m(p, t);
                  if (p) return void s(M.XV.success.id)
                } catch (e) {
                  (0, Q.t)().error({
                    data: e
                  }, "[usePurchaseHandler::handleSubscriptionPurchase] - Purchase error:")
                }
              }, c = async t => {
                if (n && r) try {
                  let d = l.has(er.b_.LOW_SCORE_CAPTCHA),
                    c = l.has(er.b_.BYPASS_CAPTCHA),
                    u = n.variantId || n.id,
                    p = {
                      arenaName: e,
                      itemCode: u,
                      quantity: 1,
                      tokenId: r.id,
                      couponCodes: i ? [i] : [],
                      captchaToken: a.captchaToken,
                      captchaMode: a.captchaMode
                    },
                    h = await es(p, d, c, a.captchaMode);
                  if (!h) {
                    await o.fetchGems(), s(M.XV.success.id);
                    return
                  }
                  if (h.errorCode) return m(h, t)
                } catch (e) {
                  (0, Q.t)().error({
                    data: e
                  }, "[usePurchaseHandler::handleGemsPurchase] - Purchase error:")
                }
              }, m = (e, t) => {
                let {
                  message: s,
                  errorCode: r
                } = e;
                if (r === et.CaptchaValidationFailed || r === et.CaptchaScoreIsTooLow) {
                  a.setShowChallengeRecaptcha(!0), a.setCaptchaToken(void 0), a.setCaptchaMode(V.Tv.CHALLENGE);
                  return
                }
                if (r === et.UserNotFound || r === et.UserAlreadyHasSubscription) {
                  t(s[0]), a.setCaptchaToken(void 0);
                  return
                }
                if (r === et.EmailNotConfirmed) {
                  t("Email verification required to make purchases"), a.setCaptchaToken(void 0);
                  return
                }
                t("Sorry, an error has occurred. Please try again later"), a.setCaptchaToken(void 0)
              };
              return {
                handlePurchase: (0, U.R7)(t) ? d : c
              }
            })(e, t, r),
            {
              promoCodeError: d,
              price: h,
              handlePromoCodeVerification: g
            } = ((e, t) => {
              let [a, s] = (0, i.useState)(""), [r, n] = (0, i.useState)(null), {
                billingDetails: o,
                paymentMethod: d,
                setPromoCode: c
              } = (0, P.q)(), u = d === M.g5.PAYPAL ? void 0 : {
                country: o.country,
                postal_code: o.postal_code,
                first_name: o.first_name,
                last_name: o.last_name
              }, m = (0, U.xr)(e, t, u), [{
                price: p
              }, h] = (0, l.ku)(m, n);
              return (0, i.useEffect)(() => {
                r && s(r.message.toLocaleLowerCase().includes("could not find") ? "Invalid promo code." : r.message)
              }, [r]), (0, i.useEffect)(() => {
                s(""), c(null), n(null), t && h(m)
              }, [t, h, c, s, n]), {
                promoCodeError: a,
                setPromoCodeError: s,
                recurlyPricingError: r,
                price: p,
                handlePromoCodeVerification: e => {
                  if ("" === e) {
                    s(""), c(null), n(null), h(e => ({
                      ...e,
                      coupon: ""
                    }));
                    return
                  }
                  c(e), h(t => ({
                    ...t,
                    coupon: e
                  }))
                }
              }
            })(s, a),
            {
              isProcessing: y,
              error: _,
              handlePayButtonClick: v
            } = ((e, t, a) => {
              let [s, r] = (0, i.useState)(!1), [n, o] = (0, i.useState)(null);
              return (0, i.useEffect)(() => {
                let t = async () => {
                  r(!0), await e(o), r(!1)
                };
                a.captchaToken && t()
              }, [a.captchaToken]), (0, i.useEffect)(() => (a.clearCaptchaData(), () => {
                a.resetCaptchaReady()
              }), []), {
                isProcessing: s,
                error: n,
                setError: o,
                handlePayButtonClick: () => {
                  r(!0), o(null), (0, U.U4)(t) ? a.getCaptchaToken(W.FE.PurchaseItem) : (0, U.R7)(t) && a.getCaptchaToken(W.FE.PurchaseSubscriptionByEmail)
                }
              }
            })(o, t, r),
            b = (0, U.T_)(h, s),
            j = (0, U.w8)(h),
            k = a?.variantId.includes("trial");
          return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("div", {
              className: c()(p, {
                [m]: r.showChallengeRecaptcha
              }),
              children: (0, n.jsx)(w.D, {
                isVisible: r.showChallengeRecaptcha,
                iframeRef: r.iframeRef,
                iframeURL: r.iframeURL,
                setIsIframeCaptchaLoaded: r.setIsIframeCaptchaLoaded,
                "data-sentry-element": "CaptchaIframe",
                "data-sentry-source-file": "index.tsx"
              })
            }), (0, n.jsxs)("div", {
              className: c()("_4jgtit0", p, {
                [m]: !r.showChallengeRecaptcha
              }),
              children: [(0, n.jsx)("div", {
                className: c()(x, "_4jgtit2"),
                "data-testid": "review-container",
                children: (0, U.U4)(t) ? (0, n.jsx)(L, {}) : (0, n.jsx)(D, {})
              }), (0, n.jsxs)("div", {
                className: "_4jgtit3",
                children: [(0, n.jsx)(q, {
                  promoCodeError: d,
                  handlePromoCodeVerification: g,
                  "data-sentry-element": "PaymentDetails",
                  "data-sentry-source-file": "index.tsx"
                }), (0, n.jsx)(O, {
                  taxSum: b,
                  totalSum: j,
                  price: h,
                  paymentType: s,
                  selectedItem: a,
                  isTrial: k,
                  "data-sentry-element": "PaymentSummary",
                  "data-sentry-source-file": "index.tsx"
                })]
              }), (0, n.jsx)("div", {
                className: f
              }), (0, n.jsxs)("div", {
                className: "_4jgtitm",
                children: [(0, n.jsx)("p", {
                  children: "After any free trial(s) or discount(s), you will be charged the above-mentioned price plus applicable taxes on a recurring basis. Prices are subject to change. If you do not cancel before the trial ends, you will be charged. Your subscription renews automatically—manage or cancel anytime through your profile."
                }), (0, n.jsxs)("p", {
                  children: ["By confirming purchase you agree to", " ", (0, n.jsx)(B.LocalizedLink, {
                    className: S,
                    target: "_blank",
                    href: "/player-agreement",
                    "data-sentry-element": "LocalizedLink",
                    "data-sentry-source-file": "index.tsx",
                    children: "Arkadium's Arkadium Player Agreement"
                  }), ",", " ", (0, n.jsx)(B.LocalizedLink, {
                    className: S,
                    target: "_blank",
                    href: "https://www.arkadium.com/arkadium-plus-agreement.pdf",
                    "data-sentry-element": "LocalizedLink",
                    "data-sentry-source-file": "index.tsx",
                    children: "Arkadium Plus Membership Agreement"
                  }), " ", "and", " ", (0, n.jsx)(B.LocalizedLink, {
                    className: S,
                    target: "_blank",
                    href: "/privacy-policy",
                    "data-sentry-element": "LocalizedLink",
                    "data-sentry-source-file": "index.tsx",
                    children: "Privacy Policy"
                  })]
                })]
              }), _ && (0, n.jsx)(F.y, {
                type: F.W.error,
                children: _
              }), (0, n.jsx)("div", {
                className: "_4jgtitn",
                children: (0, n.jsx)(C.$, {
                  variant: y ? "disabled" : "filled",
                  className: "_4jgtito",
                  onClick: v,
                  testId: "pay-now-button",
                  "data-sentry-element": "Button",
                  "data-sentry-source-file": "index.tsx",
                  children: y ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(z.a, {}), (0, n.jsx)("span", {
                      children: "Processing..."
                    })]
                  }) : "Pay Now"
                })
              }), (0, n.jsx)(N.Q, {
                supportInNewTab: !0,
                "data-sentry-element": "SupportAndCompliance",
                "data-sentry-source-file": "index.tsx"
              })]
            })]
          })
        };
      var eo = a(30040),
        el = a(10131),
        ed = a(11966);
      let ec = (0, eo.default)(() => Promise.all([a.e(9167), a.e(254), a.e(1927)]).then(a.bind(a, 71927)).then(e => e.RecurlyPaymentForm), {
          loadableGenerated: {
            webpack: () => [71927]
          },
          ssr: !1,
          loading: () => (0, n.jsx)(z.a, {
            text: "Loading payment system...",
            size: ed.Y.LARGE
          })
        }),
        eu = ({
          type: e,
          selectedItem: t
        }) => {
          let {
            step: a
          } = (0, P.q)(), s = a === M.XV.review.id;
          return (0, n.jsxs)("div", {
            className: c()(el.uu, {
              [el.gB]: s
            }),
            "data-sentry-component": "Payment",
            "data-sentry-source-file": "index.tsx",
            children: [(0, n.jsxs)("div", {
              className: c()(el.Pl, el.$S),
              "data-testid": "payment-container",
              children: [(0, U.U4)(e) && (0, n.jsx)(L, {}), (0, U.R7)(e) && (0, n.jsx)(D, {})]
            }), (0, n.jsx)(ec, {
              selectedItem: t,
              "data-sentry-element": "RecurlyPaymentForm",
              "data-sentry-source-file": "index.tsx"
            })]
          })
        };
      var em = a(44698);
      a(41845);
      var ep = a(72044);
      let eh = ({
          openModal: e
        }) => (0, n.jsxs)("div", {
          "data-testid": "shop-subscription-save",
          "data-sentry-component": "ShopSubscriptionSave",
          "data-sentry-source-file": "index.tsx",
          children: [(0, n.jsx)("h3", {
            className: ep.shopSubscriptionSaveTitle,
            children: "Save with Arkadium Plus"
          }), (0, n.jsxs)("div", {
            className: "xku5910",
            children: [(0, n.jsx)("div", {
              className: "xku5911",
              children: (0, n.jsx)(k.default, {
                unoptimized: !0,
                src: "/media/arkadium-plus-logo.png",
                alt: "arkadium plus logo",
                fill: !0,
                "data-sentry-element": "Image",
                "data-sentry-source-file": "index.tsx"
              })
            }), (0, n.jsxs)("h3", {
              className: "xku5912",
              children: ["Save 30% on gems and play ", (0, n.jsx)("span", {
                style: {
                  textWrap: "nowrap"
                },
                children: "subscriber-only"
              }), " games with Arkadium Plus"]
            }), (0, n.jsx)(C.$, {
              className: c()("xku5913", em.H6),
              size: "small",
              variant: "filled",
              onClick: () => {
                e?.("subscribe", void 0, "plusBanner")
              },
              "data-sentry-element": "Button",
              "data-sentry-source-file": "index.tsx",
              children: "Learn more"
            })]
          })]
        }),
        ef = () => {
          let {
            setStep: e,
            availableItems: t,
            setSelectedItem: a
          } = (0, P.q)(), s = (0, u.XI)(), r = (0, u.sb)(), i = r?.isEmailConfirmed ?? !0, {
            openModal: o
          } = (0, T.h)(), l = t.find(e => e.isSpecial), d = t.filter(e => !e.isSpecial), m = (t, r, o) => {
            let l = M.XV.selection.id;
            return l = s ? i ? M.XV.payment.id : M.XV.verifyEmail.id : M.XV.auth.id, (0, n.jsx)(C.$, {
              className: c()(em.P4, em.H6, {
                [em.eN]: void 0 !== r
              }),
              size: "small",
              onClick: () => {
                e(l), a(o)
              },
              testId: `buy-button-${o}`,
              "data-sentry-element": "Button",
              "data-sentry-component": "renderButton",
              "data-sentry-source-file": "index.tsx",
              children: t ? (0, n.jsxs)("p", {
                "data-sentry-component": "renderPrice",
                "data-sentry-source-file": "index.tsx",
                children: [r ? (0, n.jsx)("span", {
                  className: em.n8,
                  children: `${r}`
                }) : null, (0, n.jsx)("span", {
                  className: em.q9,
                  children: `${t}`
                })]
              }) : null
            })
          };
          return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsxs)("div", {
              className: em.Vg,
              children: [(0, n.jsxs)("div", {
                className: em.F$,
                children: [(0, n.jsx)("div", {
                  className: em.$Y,
                  children: (0, n.jsx)("p", {
                    className: em.OA,
                    children: "Most popular"
                  })
                }), (0, n.jsx)("div", {
                  className: em.bg,
                  children: (0, n.jsx)(k.default, {
                    unoptimized: !0,
                    className: em.fj,
                    src: l?.imageSrc || "",
                    alt: `${l?.amount} gems`,
                    width: 290,
                    height: 226,
                    "data-sentry-element": "Image",
                    "data-sentry-source-file": "index.tsx"
                  })
                }), (0, n.jsxs)("p", {
                  className: em.jp,
                  children: [l?.amount?.toLocaleString(), " Gems"]
                }), (0, n.jsxs)("div", {
                  className: em.G1,
                  children: [l?.discountPercentage && (0, n.jsxs)("span", {
                    className: em.id,
                    children: [(0, n.jsx)("span", {
                      className: em.j$,
                      children: "\uD83D\uDC51"
                    }), "save ", l.discountPercentage, "%"]
                  }), m(l?.formattedPrice, l?.formattedOldPrice, l?.id || "")]
                })]
              }), d.map((e, t) => (0, n.jsxs)("div", {
                className: t < 2 ? em.Ii : em.I3,
                children: [(0, n.jsx)("div", {
                  className: em.Cu,
                  children: (0, n.jsx)(k.default, {
                    unoptimized: !0,
                    className: em.fj,
                    src: e.imageSrc || "",
                    alt: `${e.amount} Gems`,
                    fill: !0
                  })
                }), (0, n.jsx)("p", {
                  className: em.jp,
                  children: `${e.amount?.toLocaleString()} Gems`
                }), m(e.formattedPrice, e.formattedOldPrice, e.id)]
              }, e.id))]
            }), (0, n.jsx)(eh, {
              openModal: o,
              "data-sentry-element": "ShopSubscriptionSave",
              "data-sentry-source-file": "index.tsx"
            })]
          })
        };
      a(56059);
      var eg = a(95669);
      let ex = ({
        type: e,
        selectedItem: t
      }) => {
        let {
          closeModal: a
        } = (0, T.h)(), s = "gems" === e ? `${t?.amount?.toLocaleString("en-US")} Gems` : t?.name, r = "gems" === e ? t?.imageSrc : "/media/subscription.png", i = "gems" === e ? `${t?.amount?.toLocaleString("en-US")} Gems` : t?.name;
        return (0, n.jsxs)("div", {
          className: "bkkyma0",
          "data-sentry-component": "Success",
          "data-sentry-source-file": "index.tsx",
          children: [(0, n.jsx)("div", {
            className: "bkkyma1",
            children: (0, n.jsx)(k.default, {
              unoptimized: !0,
              className: "bkkyma2",
              src: "/media/shop-success.gif",
              alt: "Success",
              width: 500,
              height: 666,
              "data-sentry-element": "Image",
              "data-sentry-source-file": "index.tsx"
            })
          }), (0, n.jsxs)("div", {
            className: "bkkyma4",
            children: [(0, n.jsx)(k.default, {
              unoptimized: !0,
              className: "bkkyma5",
              src: r || "",
              alt: i || "",
              width: 208,
              height: 175,
              "data-sentry-element": "Image",
              "data-sentry-source-file": "index.tsx"
            }), (0, n.jsx)("h2", {
              className: "bkkyma3",
              "data-testid": "success-gems",
              children: s
            })]
          }), (0, n.jsx)("div", {
            className: "bkkyma6",
            children: (0, n.jsx)(C.$, {
              className: "bkkyma7",
              onClick: () => {
                a()
              },
              testId: "continue-playing-button",
              "data-sentry-element": "Button",
              "data-sentry-source-file": "index.tsx",
              children: "Continue Playing"
            })
          }), (0, n.jsx)("div", {
            className: "bkkyma8",
            children: (0, n.jsx)(eg.E, {
              openInNewTab: !0,
              "data-sentry-element": "Support",
              "data-sentry-source-file": "index.tsx"
            })
          })]
        })
      };
      a(92336);
      let ey = () => {
        let {
          setPaymentToken: e,
          setStep: t
        } = (0, P.q)();
        return (0, n.jsxs)("div", {
          className: "_159fjmr0",
          "data-sentry-component": "Error",
          "data-sentry-source-file": "index.tsx",
          children: [(0, n.jsx)("div", {
            className: "_159fjmr1",
            children: (0, n.jsx)(k.default, {
              unoptimized: !0,
              src: "/media/404-mobile.png",
              alt: "Error",
              width: 538,
              height: 313,
              "data-sentry-element": "Image",
              "data-sentry-source-file": "index.tsx"
            })
          }), (0, n.jsx)("div", {
            className: "_159fjmr3",
            children: (0, n.jsx)(C.$, {
              className: "_159fjmr4",
              onClick: () => {
                e(null), t(M.XV.selection.id)
              },
              "data-sentry-element": "Button",
              "data-sentry-source-file": "index.tsx",
              children: "Try again"
            })
          }), (0, n.jsx)(N.Q, {
            supportInNewTab: !0,
            "data-sentry-element": "SupportAndCompliance",
            "data-sentry-source-file": "index.tsx"
          })]
        })
      };
      var e_ = a(88658);
      a(31019);
      var ev = "_5jtc6aa",
        eb = "_5jtc6a9",
        eS = a(21540),
        ej = a(37914),
        eC = a(21637);
      let ew = ({
        domain: e
      }) => {
        let {
          openModal: t
        } = (0, T.h)(), a = (0, u.sb)(), s = a?.email ?? "", r = (0, V.ef)("shop"), [o, l] = (0, i.useState)(!1), [d, m] = (0, i.useState)(null), [p, h] = (0, i.useState)(!1), f = (0, i.useCallback)(() => {
          m(null), l(!1), h(!0), r.getCaptchaToken(V.Gf.CONFIRMATION_RESEND)
        }, [r]);
        return (0, i.useEffect)(() => {
          let t = r.captchaToken;
          t && (async () => {
            let a = new FormData;
            a.append("email", s), a.append("authType", e_.hT.EmailPassword), a.append("confirmationSource", er.Qq.RESEND_REQUEST_SHOP), a.append("resendConfirmationFormUrl", e), a.append("captchaToken", t), r.captchaMode && a.append("captchaMode", r.captchaMode);
            let n = await (0, eS.N)(a);
            if (n && "error" in n) {
              let e = n.error || "Failed to resend confirmation email";
              m(Array.isArray(e) ? e[0] : e), r.clearCaptchaData();
              return
            }
            h(!1), (0, R.cZ)(), l(!0), r.clearCaptchaData()
          })()
        }, [r.captchaToken, s, e, r.captchaMode]), (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)("div", {
            className: c()(eb, {
              [ev]: r.showChallengeRecaptcha
            }),
            children: (0, n.jsx)(w.D, {
              isVisible: r.showChallengeRecaptcha,
              iframeRef: r.iframeRef,
              iframeURL: r.iframeURL,
              setIsIframeCaptchaLoaded: r.setIsIframeCaptchaLoaded,
              "data-sentry-element": "CaptchaIframe",
              "data-sentry-source-file": "index.tsx"
            })
          }), (0, n.jsxs)("div", {
            className: c()("_5jtc6a0", eb, {
              [ev]: !r.showChallengeRecaptcha
            }),
            "data-testid": "shop-verify-email-container",
            children: [(0, n.jsx)("p", {
              className: "_5jtc6a3",
              children: "You must confirm your email before making a purchase​"
            }), (0, n.jsxs)("p", {
              className: "_5jtc6a4",
              children: ["A confirmation email was sent to ", (0, n.jsx)("span", {
                className: "_5jtc6a5",
                children: s
              }), ".", (0, n.jsx)("p", {
                children: "Didn't receive it?"
              })]
            }), (0, n.jsx)(C.$, {
              onClick: f,
              fullWidth: !0,
              variant: p || o ? "disabled" : "filled",
              "data-testid": "shop-unconfirmed-resend-button",
              "data-sentry-element": "Button",
              "data-sentry-source-file": "index.tsx",
              children: p ? "Sending..." : "Resend email"
            }), o && (0, n.jsx)(F.y, {
              type: F.W.success,
              customClassName: c()("_5jtc6a7", "_5jtc6a8"),
              testId: "resend-success-toast",
              children: "Email sent"
            }), d && (0, n.jsx)(F.y, {
              type: F.W.error,
              testId: "resend-error-toast",
              children: d
            }), (0, n.jsxs)("div", {
              className: "_5jtc6ab",
              children: [(0, n.jsx)(ej.X, {
                "data-sentry-element": "ContactSupportBlock",
                "data-sentry-source-file": "index.tsx"
              }), (0, n.jsx)(eC.H, {
                "data-sentry-element": "PrivacyPolicyLink",
                "data-sentry-source-file": "index.tsx"
              })]
            })]
          })]
        })
      };
      var eN = a(52514),
        ek = a(79711),
        eE = a(27882);
      let eI = ({
        domain: e,
        recurlyLoaded: t,
        type: a
      }) => {
        let {
          step: s,
          setStep: r,
          userSubscriptions: o,
          handleLoginSuccess: l,
          availableItems: d,
          selectedItem: c,
          allSubscriptions: m,
          paymentMethod: p
        } = (0, P.q)(), {
          modalButtonLocation: h
        } = (0, T.h)(), f = (0, V.ef)(), g = (0, u.sb)(), {
          refreshProfile: x
        } = (0, u.xV)(), y = (0, u.Q2)(), _ = (0, i.useCallback)(async () => {
          y?.subscriptionID === void 0 ? await x() : (0, R.RZ)({
            subscriptionId: y?.subscriptionID ?? void 0,
            subscriptionType: c?.id,
            xsollaId: g.uid,
            buttonLocation: "subscriptionModal",
            paymentType: p
          }, "", c?.id, p, c?.entirePlan?.code, c?.price, "USD")
        }, [y, c, g]), {
          features: {
            auth: {
              shop: v,
              isFrictionlessRegisterEnabled: b
            }
          }
        } = (0, eE.R)();
        switch (s) {
          case M.XV.selection.id:
            if ((0, U.U4)(a)) return (0, n.jsx)(ef, {});
            if ((0, U.R7)(a)) {
              let e = o.subscriptions.length > 0 ? m.map(e => e.entirePlan) : d.map(e => e.entirePlan);
              return (0, n.jsx)(ek.Subscription, {
                wide: !0,
                avatar: g.avatar,
                activeSubscriptions: o.subscriptions,
                expiredSubscriptions: o.expiredSubscriptions,
                subscriptionPlans: e,
                billingPageLink: o.recurlyHostedLoginToken && v.recurly ? `${v.recurly.url}${o.recurlyHostedLoginToken}` : void 0,
                impression: h
              })
            }
          case M.XV.payment.id:
          case M.XV.review.id:
            if (!t) return null;
            return (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(eu, {
                type: a,
                selectedItem: c || d[0]
              }), s === M.XV.review.id && (0, n.jsx)(ei, {
                domain: e,
                type: a,
                selectedItem: c || d[0]
              })]
            });
          case M.XV.auth.id:
            return (0, n.jsx)("div", {
              className: ep.authContainer,
              "data-testid": "shop-auth-container",
              children: (0, n.jsx)(eN.v, {
                isFrictionlessRegisterEnabled: b,
                captchaData: f,
                onLoginSuccess: l,
                onBackButtonClick: () => r(M.XV.selection.id),
                isShopFeature: !0
              })
            });
          case M.XV.success.id:
            return "gems" === a && (0, R.Bl)({
              purchasableItemId: c?.id,
              purchasableItemAmount: c?.amount,
              purchasableItemName: c?.name,
              paymentType: p,
              buttonLocation: h ?? "shopModal"
            }, c?.price, c?.id), "subscription" === a && _(), (0, n.jsx)(ex, {
              type: a,
              selectedItem: c || d[0]
            });
          case M.XV.error.id:
            return (0, n.jsx)(ey, {});
          case M.XV.verifyEmail.id:
            return (0, n.jsx)("div", {
              className: ep.centerContainer,
              children: (0, n.jsx)(ew, {
                domain: e
              })
            });
          default:
            return null
        }
      };
      a(54633);
      var eA = "_1bi77ms4",
        eP = "_1bi77ms1",
        eR = "_1bi77ms2",
        eT = "_1bi77ms6",
        eL = "_1bi77ms3";
      let eD = [M.XV.selection.id, M.XV.payment.id, M.XV.review.id],
        eF = e => {
          let t = t => {
              let a = eD.indexOf(e.activeStep),
                s = eD.indexOf(t);
              return s < a ? "completed" : s === a ? "current" : "inactive"
            },
            a = e => {
              switch (t(e)) {
                case "completed":
                  return "_1bi77ms7";
                case "current":
                  return "_1bi77ms8";
                default:
                  return "_1bi77ms9"
              }
            },
            s = e => {
              switch (t(e)) {
                case "completed":
                  return "_1bi77msa";
                case "current":
                  return "_1bi77msb";
                default:
                  return "_1bi77msc"
              }
            },
            r = (t, a) => {
              a.preventDefault(), e.setStep(t)
            };
          return (0, n.jsxs)("div", {
            className: "_1bi77ms0",
            "data-sentry-component": "Progress",
            "data-sentry-source-file": "index.tsx",
            children: [(0, n.jsx)(C.$, {
              className: eR,
              variant: "label",
              onClick: e => r(M.XV.selection.id, e),
              "data-sentry-element": "Button",
              "data-sentry-source-file": "index.tsx",
              children: (0, n.jsxs)("div", {
                className: eP,
                children: [(0, n.jsx)("div", {
                  className: c()(eT, a(M.XV.selection.id)),
                  children: (0, n.jsx)(G.t, {
                    name: "shop",
                    height: 20,
                    width: 20,
                    "data-sentry-element": "OldIcon",
                    "data-sentry-source-file": "index.tsx"
                  })
                }), (0, n.jsx)("p", {
                  className: c()(eL, s(M.XV.selection.id)),
                  children: "Shop"
                })]
              })
            }), (0, n.jsx)("div", {
              className: c()(eA, a(M.XV.payment.id))
            }), (0, n.jsx)(C.$, {
              className: eR,
              variant: "label",
              onClick: e => r(M.XV.payment.id, e),
              "data-sentry-element": "Button",
              "data-sentry-source-file": "index.tsx",
              children: (0, n.jsxs)("div", {
                className: eP,
                children: [(0, n.jsx)("div", {
                  className: c()(eT, a(M.XV.payment.id)),
                  children: (0, n.jsx)(G.t, {
                    name: "credit-card",
                    height: 20,
                    width: 20,
                    "data-sentry-element": "OldIcon",
                    "data-sentry-source-file": "index.tsx"
                  })
                }), (0, n.jsx)("p", {
                  className: c()(eL, s(M.XV.payment.id)),
                  children: "Payment"
                })]
              })
            }), (0, n.jsx)("div", {
              className: c()(eA, "_1bi77ms5", a(M.XV.review.id))
            }), (0, n.jsx)(C.$, {
              className: eR,
              variant: "label",
              onClick: e => r(M.XV.review.id, e),
              disabled: !0,
              "data-sentry-element": "Button",
              "data-sentry-source-file": "index.tsx",
              children: (0, n.jsxs)("div", {
                className: eP,
                children: [(0, n.jsx)("div", {
                  className: c()(eT, a(M.XV.review.id)),
                  children: (0, n.jsx)(G.t, {
                    name: "clipboard-check",
                    height: 20,
                    width: 20,
                    "data-sentry-element": "OldIcon",
                    "data-sentry-source-file": "index.tsx"
                  })
                }), (0, n.jsx)("p", {
                  className: c()(eL, s(M.XV.review.id)),
                  children: "Review"
                })]
              })
            })]
          })
        },
        eU = e => (0, n.jsx)(P.o, {
          type: e.type,
          allAvailableItems: e.itemsData,
          "data-sentry-element": "ShopProvider",
          "data-sentry-component": "ShopWrapper",
          "data-sentry-source-file": "ShopWrapper.tsx",
          children: (0, n.jsx)(eM, {
            domain: e.domain,
            type: e.type,
            subscriptionTopBanner: e.subscriptionTopBanner,
            "data-sentry-element": "ShopClient",
            "data-sentry-source-file": "ShopWrapper.tsx"
          })
        }),
        eM = ({
          domain: e,
          type: t,
          subscriptionTopBanner: a
        }) => {
          let {
            step: s,
            setStep: r
          } = (0, P.q)(), [d, m] = (0, i.useState)(!1), p = s === M.XV.success.id || s === M.XV.error.id || s === M.XV.verifyEmail.id, h = M.XV[s].title?.[t], f = (0, U.R7)(t) && s === M.XV.selection.id, {
            features: {
              auth: {
                shop: g
              }
            }
          } = (0, eE.R)();
          if ("loading" === (0, u.w1)()) return (0, n.jsx)("div", {
            className: ep.loadingContainer,
            children: (0, n.jsx)(z.a, {
              text: "Loading...",
              size: ed.Y.LARGE
            })
          });
          let x = g.recurly?.publicKey || "";
          return (0, n.jsxs)(n.Fragment, {
            children: [!f && a, (0, n.jsxs)("div", {
              className: c()({
                [ep.shopContainer]: !f
              }),
              children: [(0, n.jsx)(o.default, {
                src: "https://js.recurly.com/v4/recurly.js",
                async: !0,
                onLoad: () => m(!0),
                onReady: () => m(!0),
                "data-sentry-element": "Script",
                "data-sentry-source-file": "ShopWrapper.tsx"
              }), h && (0, n.jsxs)("div", {
                className: c()(ep.topContainer, {
                  [ep.centerContainer]: p
                }),
                children: [(0, n.jsxs)("div", {
                  children: [(0, n.jsx)("h2", {
                    className: ep.stateTitle,
                    "data-testid": "shop-state-title",
                    children: h
                  }), M.XV[s].subtitle && (0, n.jsx)("p", {
                    className: ep.stateSubtitle,
                    children: M.XV[s].subtitle
                  })]
                }), (s === M.XV.review.id || s === M.XV.payment.id) && (0, n.jsx)(eF, {
                  activeStep: s,
                  setStep: r
                })]
              }), x && d ? (0, n.jsx)(l.oZ, {
                publicKey: x,
                children: (0, n.jsx)(l.S8, {
                  children: (0, n.jsx)(eI, {
                    type: t,
                    domain: e,
                    recurlyLoaded: d
                  })
                })
              }) : null]
            })]
          })
        }
    },
    28044: e => {
      e.exports = {
        ResetPasswordTitle: "styles_ResetPasswordTitle__sto_i",
        ResetPasswordDescription: "styles_ResetPasswordDescription__A0yl9",
        ResetPasswordForm: "styles_ResetPasswordForm__dVJiP",
        invalid: "styles_invalid__NQ4U_",
        ContinueButtonWrapper: "styles_ContinueButtonWrapper__m1EdF",
        ErrorNotification: "styles_ErrorNotification__kJsKE",
        visible: "styles_visible__O_VQT"
      }
    },
    29197: e => {
      e.exports = {
        SignInPasswordTitle: "styles_SignInPasswordTitle__LLqbZ",
        SignInPasswordDescription: "styles_SignInPasswordDescription__W0Vxi",
        SignInPasswordForm: "styles_SignInPasswordForm__Zlw7J",
        ForgotPasswordButtonWrapper: "styles_ForgotPasswordButtonWrapper__LL6VU",
        ContinueButtonWrapper: "styles_ContinueButtonWrapper__BP0OM"
      }
    },
    30535: (e, t, a) => {
      "use strict";
      a.d(t, {
        ModalBaseContent: () => H
      });
      var s = a(95155);
      a(51153);
      var r = "_1kvyg471",
        n = a(26778),
        i = a(12115);
      a(88926), a(47139);
      var o = "_1lxiiv3",
        l = "_1lxiiv2",
        d = a(38841),
        c = a(89922),
        u = a(17413);
      let m = async e => {
        let t = e.split(" "),
          a = [e, ...t],
          s = Array.from(new Map(((await Promise.all(a.map(async e => {
            let t = "true" === (0, d.env)("NEXT_PUBLIC_TOGGLE_TRAILING_SLASH_ENABLED") ? `/api/support/freshdesk/?__arkver=${encodeURIComponent(e)}` : `/api/support/freshdesk?__arkver=${encodeURIComponent(e)}`,
              a = await fetch(t, {
                headers: c.m
              });
            return a.ok ? a.json() : ((0, u.t)().error(`[getFreshdeskArticles] - Error fetching Freshdesk articles for term: ${e}`), [])
          })).catch(e => ((0, u.t)().error({
            data: e
          }, "[getFreshdeskArticles] - Error fetching Freshdesk articles:"), []))).flat() || []).map(e => [e.id, e])).values()),
          r = RegExp(e, "i"),
          n = [];
        if (s.forEach(e => {
            e?.title?.match?.(r) && n.push(e)
          }), n.length < 3) {
          let e = s.filter(e => !n.includes(e));
          for (; n.length < 3 && e.length > 0;) n.push(e.shift())
        } else n.length > 3 && (n = n.slice(0, 3));
        return n
      };
      a(54886);
      var p = "pcthbs3",
        h = "pcthbs1";
      let f = ({
        articles: e
      }) => (0, s.jsxs)("div", {
        className: "pcthbs0",
        "data-testid": "support-popular-articles",
        "data-sentry-component": "ArticlesGenericPage",
        "data-sentry-source-file": "articles-generic-page.tsx",
        children: [(0, s.jsxs)("div", {
          className: h,
          children: [(0, s.jsx)("h2", {
            className: "pcthbs2",
            "data-testid": "most-popular-articles-title",
            children: "Most popular articles"
          }), 0 === e.length && (0, s.jsx)("p", {
            children: "No articles found"
          }), e.slice(0, 3).map((e, t) => (0, s.jsx)("a", {
            href: e.href || "#",
            className: p,
            style: {
              fontWeight: 0 === t ? "bold" : "normal"
            },
            target: e?.target || "_blank",
            "data-testid": "support-article",
            children: e.label
          }, t))]
        }), (0, s.jsxs)("div", {
          className: h,
          children: [e.slice(3, 6).map((e, t) => (0, s.jsx)("a", {
            href: e.href || "#",
            className: p,
            style: {
              marginTop: 0 === t ? "4px" : "0px"
            },
            target: e?.target || "_blank",
            "data-testid": "support-article",
            children: e.label
          }, t)), (0, s.jsx)("a", {
            href: "https://support.arkadium.com/en/support/home",
            className: p,
            target: "_blank",
            "data-testid": "most-popular-articles-more-link",
            children: "More..."
          })]
        })]
      });
      var g = a(43487),
        x = a(11966);
      let y = ({
          mostPopularArticles: e,
          gameName: t
        }) => {
          let [a, r] = (0, i.useState)(null), [n, o] = (0, i.useState)(!0);
          return ((0, i.useEffect)(() => {
            (async () => {
              if (t) try {
                let e = (await m(t)).map(e => ({
                  id: e.id ?? null,
                  label: e.title ?? null,
                  href: e.path ? `https://support.arkadium.com/en/support/solutions/articles/${e.path}` : null,
                  target: "_blank"
                }));
                r(e)
              } catch (e) {
                (0, u.t)().error({
                  data: e
                }, "[RecommendedArticles] - Error fetching freshdesk articles:")
              } finally {
                o(!1)
              }
            })()
          }, [t]), n) ? (0, s.jsxs)("div", {
            className: "_1lxiiv0",
            children: [(0, s.jsx)(g.y, {
              size: x.Y.LARGE
            }), (0, s.jsx)("div", {
              children: "Loading"
            })]
          }) : a && a?.length > 0 ? (0, s.jsx)(_, {
            recommendedArticles: a,
            mostPopularArticles: e,
            gameName: t
          }) : (0, s.jsx)(f, {
            articles: e,
            "data-sentry-element": "ArticlesGenericPage",
            "data-sentry-component": "RecommendedArticles",
            "data-sentry-source-file": "articles-game-page.tsx"
          })
        },
        _ = ({
          recommendedArticles: e,
          mostPopularArticles: t,
          gameName: a
        }) => (0, s.jsxs)("div", {
          className: "_1lxiiv1",
          "data-sentry-component": "ArticlesGamePage",
          "data-sentry-source-file": "articles-game-page.tsx",
          children: [(0, s.jsxs)("div", {
            className: l,
            children: [(0, s.jsx)("h2", {
              className: o,
              children: "Recommended articles"
            }), e.slice(0, 3).map((e, t) => (0, s.jsx)("a", {
              href: e?.href || "#",
              className: o,
              style: {
                fontWeight: 0 === t ? "bold" : "normal"
              },
              target: e?.target || "_blank",
              children: e.label
            }, t)), (0, s.jsx)("a", {
              href: `https://support.arkadium.com/en/support/search/solutions?term=${a}`,
              className: o,
              target: "_blank",
              children: "More..."
            })]
          }), (0, s.jsxs)("div", {
            className: l,
            children: [(0, s.jsx)("h2", {
              className: o,
              children: "Most popular articles"
            }), 0 === t.length && (0, s.jsx)("p", {
              children: "No articles found"
            }), t.slice(0, 3).map((e, t) => (0, s.jsx)("a", {
              href: e?.href || "#",
              className: o,
              style: {
                fontWeight: 0 === t ? "bold" : "normal"
              },
              target: e?.target || "_blank",
              children: e.label
            }, t)), (0, s.jsx)("a", {
              href: "https://support.arkadium.com/en/support/home",
              className: o,
              target: "_blank",
              children: "More..."
            })]
          })]
        });
      a(96811);
      let v = ({
        icon: e,
        title: t,
        text: a,
        href: r,
        target: i,
        label: o,
        error: l,
        handleClick: d
      }) => (0, s.jsxs)("div", {
        className: "_3hzrdu0",
        "data-testid": `support-${t?.toLowerCase().replace(/\s+/g,"-")}`,
        "data-sentry-component": "DynamicAction",
        "data-sentry-source-file": "index.tsx",
        children: [(0, s.jsx)("div", {
          className: "_3hzrdu1",
          children: (0, s.jsx)("div", {
            className: "_3hzrdu2",
            "data-testid": `support-${t?.toLowerCase().replace(/\s+/g,"-")}-icon`,
            children: e && (0, s.jsx)(n.default, {
              unoptimized: !0,
              src: e?.url || "",
              alt: t || "",
              width: 56,
              height: 56
            })
          })
        }), (0, s.jsxs)("div", {
          className: "_3hzrdu3",
          children: [(0, s.jsx)("h3", {
            "data-testid": `support-${t?.toLowerCase().replace(/\s+/g,"-")}-title`,
            children: t
          }), (0, s.jsx)("p", {
            "data-testid": `support-${t?.toLowerCase().replace(/\s+/g,"-")}-description`,
            children: a
          }), (0, s.jsxs)("a", {
            href: r || "#",
            target: i || "_blank",
            onClick: d,
            "data-testid": `support-${t?.toLowerCase().replace(/\s+/g,"-")}-link`,
            children: [" ", o, " "]
          }), l && (0, s.jsx)("span", {
            children: l
          })]
        })]
      });
      var b = "_1i0ijj48",
        S = "_1i0ijj4c",
        j = "_1i0ijj4a",
        C = "_1i0ijj4b",
        w = "_1i0ijj4k",
        N = "_1i0ijj49",
        k = "_1i0ijj46",
        E = "_1i0ijj47",
        I = "_1i0ijj4d",
        A = a(31969),
        P = a(90242);
      a(24066);
      var R = "_1mfvkfi2";
      let T = ["image/png", "image/jpeg", "image/gif", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/pdf"],
        L = ({
          onFileSelect: e
        }) => {
          let [t, a] = (0, i.useState)("No file chosen"), [r, n] = (0, i.useState)(null), o = (0, u.t)();
          return (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsxs)("div", {
              className: "_1mfvkfi0",
              children: [(0, s.jsxs)("label", {
                htmlFor: "file",
                className: "_1mfvkfi1",
                children: [(0, s.jsx)("input", {
                  id: "file",
                  className: "_1mfvkfi4",
                  type: "file",
                  onChange: t => {
                    if (t.target.files && t.target.files.length > 0) {
                      let s = t.target.files[0] || null;
                      if (s.size > 0xa00000) {
                        o.error("[FileUpload] - File size exceeds 10MB!"), n("File size exceeds 10MB"), e(null);
                        return
                      }
                      if (!T.includes(s.type)) {
                        o.error("[FileUpload] - Unsupported file format!"), n("Unsupported file format. Please upload a JPEG, PNG, GIF, DOC, DOCX, or PDF file."), e(null);
                        return
                      }
                      n(null), e(s), a(s.name)
                    } else a("No file chosen"), e(null)
                  },
                  "aria-label": "Upload file",
                  tabIndex: -1,
                  "data-testid": "upload-file-input"
                }), (0, s.jsxs)(P.$, {
                  variant: "outline",
                  size: "small",
                  className: "_1mfvkfi3",
                  testId: "choose-file-button",
                  "data-sentry-element": "Button",
                  "data-sentry-source-file": "index.tsx",
                  children: [(0, s.jsx)(A.StaticImage, {
                    src: "/media/attachment.svg",
                    alt: "Attachment",
                    width: 24,
                    height: 24,
                    "data-sentry-element": "StaticImage",
                    "data-sentry-source-file": "index.tsx"
                  }), "Choose file"]
                })]
              }), (0, s.jsxs)("span", {
                className: R,
                children: ["Supported files type: .png, .jpg, .gif, .jpeg, .doc, .docx, .pdf. ", (0, s.jsx)("br", {}), " File size limit: 10MB"]
              })]
            }), "No file chosen" !== t && (0, s.jsxs)("div", {
              className: "_1mfvkfi5",
              children: [(0, s.jsx)("span", {
                className: R,
                children: t
              }), (0, s.jsx)("button", {
                type: "button",
                onClick: t => {
                  t.preventDefault();
                  let s = document.getElementById("file");
                  s && (s.value = ""), a("No file chosen"), e(null)
                },
                className: "_1mfvkfi6",
                "data-testid": "file-delete-button",
                children: (0, s.jsx)(A.StaticImage, {
                  src: "/media/trash-01.svg",
                  alt: "Trash can",
                  width: 24,
                  height: 24
                })
              })]
            }), r && (0, s.jsx)("p", {
              className: "_1mfvkfi7",
              children: r
            })]
          })
        };
      var D = a(19253),
        F = a(79481);
      let U = (0, F.createServerReference)("40646b8d54d4dc90f7f08ac23aaeb83d63d97e8296", F.callServer, void 0, F.findSourceMapURL, "createTicket");
      var M = a(21765),
        O = a(79760),
        B = a(4265),
        G = a(53599),
        $ = a(30423);
      let q = ({
        gameName: e,
        mostPopularArticles: t,
        renderRecommendedArticles: a,
        onBack: r
      }) => {
        let [n, o] = (0, i.useState)(!1), [l, d] = (0, i.useState)({}), [c, u] = (0, i.useState)(!1), {
          browser: m,
          detectDevice: p,
          isMobile: h,
          os: g
        } = (0, O.i)(), x = h(), _ = p(), {
          gems: v
        } = (0, B.Ij)(), R = (0, B.Q2)(), {
          email: T
        } = (0, B.sb)(), [F, q] = (0, i.useState)(null);
        (0, i.useEffect)(() => {
          (async () => {
            q(await (0, $.HX)())
          })()
        }, []);
        let [z, W] = (0, i.useState)({
          name: !1,
          email: !1,
          subject: !1,
          description: !1,
          agreeToProcessData: !1
        }), [V, X] = (0, i.useState)({
          name: !1,
          email: !1,
          subject: !1,
          description: !1,
          agreeToProcessData: !1
        }), [H, J] = (0, i.useState)({
          name: "",
          email: "",
          subject: e ? e.replace(/-/g, " ") : "",
          description: "",
          agreeToProcessData: !1,
          file: null
        }), Y = e => {
          let {
            id: t,
            value: a,
            checked: s
          } = e.target;
          X(e => ({
            ...e,
            [t]: !0
          })), "description" === t && "" !== H.subject.trim() && u(!0), "" === a.trim() ? W(e => ({
            ...e,
            [t]: !0
          })) : "agreeToProcessData" !== t || s || W(e => ({
            ...e,
            [t]: !0
          }))
        }, K = e => {
          let {
            id: t,
            value: a,
            type: s,
            checked: r
          } = e.target;
          d({}), J(e => ({
            ...e,
            [t]: "checkbox" === s ? r : a
          })), "email" === t ? W(e => ({
            ...e,
            [t]: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)
          })) : "agreeToProcessData" !== t || r ? W(e => ({
            ...e,
            [t]: "" === a.trim()
          })) : W(e => ({
            ...e,
            [t]: !0
          }))
        }, Q = (0, i.useMemo)(() => {
          let t;
          return {
            cf_os: `${g.name} ${g.version}`,
            cf_browser: `${m.name} ${m.version?.split(".")[0]}`,
            cf_game_tag: e,
            cf_arena_url: window.location.hostname,
            cf_full_url: window.location.href,
            cf_is_mobile: x,
            cf_device_type: _,
            cf_is_adblock_active: (0, G.A)(),
            cf_screen_size: (() => {
              let {
                width: e,
                height: t
              } = window.screen;
              return `${e}x${t}`
            })(),
            cf_window_size: (() => {
              let {
                innerWidth: e,
                innerHeight: t
              } = window;
              return `${e}x${t}`
            })(),
            cf_game_size: (() => {
              let e = document.querySelector("[data-element-description='game']");
              if (!e) return "Not defined";
              let {
                clientWidth: t,
                clientHeight: a
              } = e;
              return `${t}x${a}`
            })(),
            cf_language: (t = window.navigator.userLanguage || window.navigator.language, ({
              en: "English",
              fr: "French",
              de: "German",
              it: "Italian",
              es: "Spanish"
            })[t?.split("-")?.[0]] || "English"),
            cf_advantage: R?.activeSubscriptions ? "Yes" : "No",
            cf_bonus: "No",
            cf_expired_subscriptions: R?.expiredSubscriptions ? "Yes" : "No",
            cf_user_email: T,
            cf_ip: F?.ip,
            cf_geo: `${F?.country_name} - GEO: ${F?.latitude},${F?.longitude}`,
            cf_gems_amount: v || 0,
            cf_legacy_platform: !1,
            cf_gdpr: !0
          }
        }, [g, m, e, _, R, T, F, v, x]), Z = (0, i.useCallback)(async e => {
          e.preventDefault();
          let t = new FormData;
          for (let [e, a] of(t.append("name", H.name), t.append("email", H.email), t.append("subject", H.subject), t.append("description", H.description), t.append("consent", H.agreeToProcessData.toString()), H.file instanceof File && t.append("attachments[]", H.file), Object.entries(Q))) t.append(`custom_fields[${e}]`, String(a));
          let a = await U(t);
          if (a.errors) {
            let e = {};
            for (let [t, s] of Object.entries(a.errors)) e[t] = Array.isArray(s) ? s[0] ?? "" : String(s);
            d(e)
          } else o(!0), (0, M.Bm)()
        }, [H, Q]);
        return (0, s.jsx)(s.Fragment, {
          children: n ? (0, s.jsxs)("div", {
            className: "_1i0ijj4l",
            "data-testid": "contact-form-success",
            children: [(0, s.jsx)(A.StaticImage, {
              src: "/media/success.svg",
              alt: "Checkmark",
              width: 60,
              height: 60
            }), (0, s.jsx)("h1", {
              className: "_1i0ijj4m",
              children: "Feedback submitted"
            }), (0, s.jsx)("h3", {
              className: "_1i0ijj4n",
              children: "Thanks! Our support team will reply within 24 hours."
            })]
          }) : (0, s.jsxs)("div", {
            className: "_1i0ijj40",
            children: [(0, s.jsxs)("div", {
              children: [(0, s.jsxs)("button", {
                className: "_1i0ijj41",
                onClick: r,
                children: [(0, s.jsx)(A.StaticImage, {
                  src: "/media/chevron-left.svg",
                  alt: "Back",
                  width: 24,
                  height: 24
                }), (0, s.jsx)("p", {
                  children: "Back"
                })]
              }), (0, s.jsx)("h1", {
                className: "_1i0ijj42",
                children: "We are happy to answer your questions"
              }), (0, s.jsx)("h3", {
                className: "_1i0ijj43",
                children: "Please note that we provide support in English language"
              })]
            }), (0, s.jsxs)("div", {
              className: "_1i0ijj44",
              children: [a ? (0, s.jsx)(y, {
                mostPopularArticles: t,
                gameName: c ? H.subject : e
              }) : (0, s.jsx)(f, {
                articles: t
              }), (0, s.jsxs)("form", {
                onSubmit: Z,
                className: "_1i0ijj45",
                "data-testid": "contact-support-form",
                children: [(0, s.jsxs)("div", {
                  className: k,
                  children: [(0, s.jsxs)("label", {
                    htmlFor: "name",
                    className: E,
                    children: ["Name ", (0, s.jsx)("span", {
                      className: b,
                      children: "*"
                    })]
                  }), (0, s.jsx)("input", {
                    id: "name",
                    type: "text",
                    placeholder: "Full Name",
                    className: `${N} ${!V.name?j:z.name?C:S}`,
                    onChange: K,
                    onBlur: Y,
                    value: H.name,
                    "aria-required": "true",
                    "aria-label": "Full Name"
                  }), z.name && (0, s.jsx)("div", {
                    className: I,
                    children: "Please type your full name"
                  })]
                }), (0, s.jsxs)("div", {
                  className: k,
                  children: [(0, s.jsxs)("label", {
                    htmlFor: "email",
                    className: E,
                    children: ["Email ", (0, s.jsx)("span", {
                      className: b,
                      children: "*"
                    })]
                  }), (0, s.jsx)("input", {
                    id: "email",
                    type: "email",
                    placeholder: "your.email@mail.com",
                    className: `${N} ${!V.email?j:z.email?C:S}`,
                    onChange: K,
                    onBlur: Y,
                    value: H.email,
                    "aria-required": "true",
                    "aria-label": "Email"
                  }), z.email && (0, s.jsx)("div", {
                    className: I,
                    children: "Please type a valid email format"
                  })]
                }), (0, s.jsxs)("div", {
                  className: k,
                  children: [(0, s.jsxs)("label", {
                    htmlFor: "subject",
                    className: E,
                    children: ["Subject ", (0, s.jsx)("span", {
                      className: b,
                      children: "*"
                    })]
                  }), (0, s.jsx)("input", {
                    id: "subject",
                    type: "text",
                    placeholder: "Subject",
                    className: `${N} ${!V.subject?j:z.subject?C:S}`,
                    onChange: K,
                    onBlur: Y,
                    maxLength: 50,
                    value: H.subject,
                    "aria-required": "true",
                    "aria-label": "Subject"
                  }), z.subject && (0, s.jsx)("div", {
                    className: I,
                    children: "Please type a subject"
                  })]
                }), (0, s.jsxs)("div", {
                  className: k,
                  children: [(0, s.jsxs)("label", {
                    htmlFor: "description",
                    className: E,
                    children: ["Your message ", (0, s.jsx)("span", {
                      className: b,
                      children: "*"
                    })]
                  }), (0, s.jsx)("textarea", {
                    id: "description",
                    className: `${N} ${!V.description?j:z.description?C:S}`,
                    placeholder: "Write your message",
                    onChange: K,
                    onBlur: Y,
                    value: H.description,
                    "aria-required": "true",
                    "aria-label": "Message"
                  }), z.description && (0, s.jsx)("div", {
                    className: I,
                    children: "Please type a description"
                  })]
                }), (0, s.jsx)(L, {
                  onFileSelect: e => {
                    J(t => ({
                      ...t,
                      file: e
                    }))
                  }
                }), (0, s.jsxs)("div", {
                  className: k,
                  children: [(0, s.jsxs)("div", {
                    className: "_1i0ijj4e",
                    children: [(0, s.jsx)("input", {
                      id: "agreeToProcessData",
                      type: "checkbox",
                      className: "_1i0ijj4f",
                      checked: H.agreeToProcessData,
                      onChange: K,
                      "aria-required": "true",
                      "aria-label": "Privacy Policy"
                    }), (0, s.jsxs)("label", {
                      htmlFor: "agreeToProcessData",
                      className: "_1i0ijj4g",
                      children: ["I understand that Arkadium will retain this email to respond to my feedback", " ", (0, s.jsx)("span", {
                        className: b,
                        children: "*"
                      })]
                    })]
                  }), z.agreeToProcessData && (0, s.jsx)("div", {
                    className: I,
                    children: "Please agree to the privacy policy"
                  })]
                }), Object.keys(l).length > 0 && (0, s.jsx)("div", {
                  role: "alert",
                  className: "_1i0ijj4h",
                  "aria-live": "assertive",
                  children: (0, s.jsx)(D.y, {
                    type: D.W.error,
                    withIcon: !0,
                    children: "Please complete all the required fields marked with an *"
                  })
                }), (0, s.jsxs)("div", {
                  className: "_1i0ijj4i",
                  children: [(0, s.jsx)("span", {
                    className: b,
                    children: "*"
                  }), " Indicates a required field"]
                }), (0, s.jsxs)("div", {
                  className: "_1i0ijj4j",
                  children: [(0, s.jsx)(P.$, {
                    variant: "outline",
                    size: "small",
                    onClick: () => {
                      J({
                        name: "",
                        email: "",
                        subject: "",
                        description: "",
                        agreeToProcessData: !1,
                        file: null
                      }), W({
                        name: !1,
                        email: !1,
                        subject: !1,
                        description: !1,
                        agreeToProcessData: !1
                      }), X({
                        name: !1,
                        email: !1,
                        subject: !1,
                        description: !1,
                        agreeToProcessData: !1
                      }), d({})
                    },
                    className: w,
                    tabIndex: 0,
                    children: "Cancel"
                  }), (0, s.jsx)(P.$, {
                    type: "submit",
                    variant: "filled",
                    size: "small",
                    className: w,
                    tabIndex: 0,
                    children: "Send"
                  })]
                })]
              })]
            })]
          })
        })
      };
      var z = a(14011),
        W = a(85824),
        V = a(70448),
        X = a.n(V);
      let H = ({
        renderRecommendedArticles: e,
        dynamicActionCards: t,
        highlightedItemCards: a,
        mostPopularArticles: o,
        isGamePage: l,
        gameFeed: d
      }) => {
        let c = (0, u.t)(),
          [m, p] = (0, i.useState)(!1),
          [h, g] = (0, i.useState)(""),
          x = (0, z.useSearchParams)(),
          _ = x.get("origin")?.includes("games"),
          b = x.get("origin"),
          S = () => d[(b?.split("/").filter(Boolean).pop() || "").toLowerCase()] || "",
          {
            closeModal: j
          } = (0, W.h)(),
          C = null,
          w = ({
            icon: e,
            title: t,
            text: a,
            href: r,
            label: i,
            borderColor: o,
            target: l,
            onClick: d
          }) => (0, s.jsxs)("div", {
            className: "_1kvyg477",
            style: {
              border: `1px solid ${o}`
            },
            "data-testid": `support-${t?.toLowerCase().replace(/\s+/g,"-")}`,
            "data-sentry-component": "HighlightedAction",
            "data-sentry-source-file": "modalBaseContent.tsx",
            children: [(0, s.jsx)("div", {
              className: "_1kvyg478",
              "data-testid": `support-${t?.toLowerCase().replace(/\s+/g,"-")}-icon`,
              children: (0, s.jsx)(n.default, {
                unoptimized: !0,
                src: e?.url || "",
                alt: t || "",
                width: 120,
                height: 120,
                sizes: "(max-width: 768px) 88px, 120px",
                style: {
                  width: "auto",
                  height: "auto"
                },
                "data-sentry-element": "Image",
                "data-sentry-source-file": "modalBaseContent.tsx"
              })
            }), (0, s.jsxs)("div", {
              className: "_1kvyg479",
              children: [(0, s.jsx)("h3", {
                "data-testid": `support-${t?.toLowerCase().replace(/\s+/g,"-")}-title`,
                children: t
              }), (0, s.jsx)("p", {
                "data-testid": `support-${t?.toLowerCase().replace(/\s+/g,"-")}-description`,
                children: a
              }), (0, s.jsxs)("a", {
                href: r || "#",
                target: l || "_blank",
                onClick: e => {
                  "#" === r && e.preventDefault(), d && d(e)
                },
                "data-testid": `support-${t?.toLowerCase().replace(/\s+/g,"-")}-link`,
                children: [" ", i, " "]
              })]
            })]
          });
        return (0, s.jsx)("div", {
          className: "_1kvyg470",
          "data-testid": "support-modal",
          "data-sentry-component": "ModalBaseContent",
          "data-sentry-source-file": "modalBaseContent.tsx",
          children: m ? (0, s.jsx)("div", {
            className: X()(r, "_1kvyg472"),
            children: (0, s.jsx)(q, {
              gameName: S() || "",
              mostPopularArticles: o,
              renderRecommendedArticles: _,
              onBack: () => p(!1)
            })
          }) : (0, s.jsxs)("div", {
            className: r,
            children: [(0, s.jsx)("h1", {
              className: "_1kvyg473",
              "data-testid": "support-modal-title",
              children: "How can we help?"
            }), _ ? (0, s.jsx)(y, {
              mostPopularArticles: o,
              gameName: S()
            }) : (0, s.jsx)(f, {
              articles: o
            }), (0, s.jsx)("div", {
              className: "_1kvyg474",
              "data-testid": "support-dynamic-actions",
              children: t.filter(e => e.href?.trim()).map(e => (0, s.jsx)(v, {
                icon: e.icon,
                title: e.title,
                text: e.text,
                href: "chatbot" === e.href || "contactform" === e.href ? "" : e.href,
                target: e.target,
                label: e.label,
                handleClick: t => {
                  var a, s;
                  return a = e.href || "", s = e.title || "default", void(("chatbot" === a || "contactform" === a) && (t.preventDefault(), "chatbot" === a ? ((e => {
                    if (!window.fcWidget) return g("Oops! The chatbot widget failed to load. Please try again later.");
                    C = e, j(), window.fcWidget.open();
                    let t = () => {
                      requestAnimationFrame(() => {
                        let e = document.querySelector("iframe#fc_widget");
                        if (e) {
                          e.setAttribute("tabindex", "0"), e.focus({
                            preventScroll: !0
                          });
                          try {
                            e.contentWindow?.focus()
                          } catch {
                            c.warn("[focusFreshdeskWidget] - Unable to focus iframe content due to Same Origin Policy restrictions")
                          }
                        }
                      }), window.fcWidget.off("widget:opened", t)
                    };
                    window.fcWidget.on("widget:opened", t);
                    let a = () => {
                      let e;
                      (e = document.querySelector("iframe#fc_widget")) && e.setAttribute("tabindex", "-1"), C && C.isConnected ? C.focus() : document.body.focus(), window.fcWidget.off("widget:closed", a)
                    };
                    window.fcWidget.on("widget:closed", a)
                  })(t.currentTarget), (0, M.Px)()) : "contactform" === a && p(!0)), (0, M.TM)(s))
                },
                error: "chatbot" === e.href ? h : null
              }, e.id))
            }), (0, s.jsx)("hr", {
              className: "_1kvyg475"
            }), (0, s.jsx)("div", {
              className: "_1kvyg476",
              "data-testid": "support-highlighted-actions",
              children: a.filter(e => e.href && "" !== e.href.trim()).map(e => (0, s.jsx)(w, {
                icon: e.icon,
                title: e.title,
                text: e.text,
                href: e.href,
                label: e.label,
                borderColor: e.borderColor,
                target: e.target,
                onClick: t => (0, M.TM)(e.title)
              }, e.id))
            })]
          })
        })
      }
    },
    31381: (e, t, a) => {
      "use strict";
      a.d(t, {
        J: () => i
      });
      var s = a(95155);
      a(32076);
      var r = a(70448),
        n = a.n(r);
      let i = ({
        label: e,
        required: t = !1,
        htmlFor: a,
        className: r
      }) => (0, s.jsxs)("label", {
        className: n()("s4qdbo0", r),
        htmlFor: a,
        "data-sentry-component": "Label",
        "data-sentry-source-file": "index.tsx",
        children: [e, t && (0, s.jsx)("span", {
          className: "s4qdbo1",
          children: "*"
        })]
      })
    },
    31399: (e, t, a) => {
      "use strict";
      a.d(t, {
        ProfileAvatarSelectionForm: () => M
      });
      var s, r = a(95155),
        n = a(26778),
        i = a(70448),
        o = a.n(i),
        l = a(90242),
        d = a(2417),
        c = a(4265),
        u = a(50990),
        m = a(85824),
        p = a(36074),
        h = ((s = {}).Avatar = "avatar", s.Extra = "extra", s),
        f = a(12115),
        g = a(66236),
        x = a(89586);
      let y = ["#E87F1C", "#FB7D62", "#FFC106", "#BBDE2A", "#268D7C", "#50A395", "#3EC4A5", "#2656AD", "#85ABEB", "#6232B7", "#9E55D5", "#CEA2F0", "#363636", "#EFEFEF"],
        _ = [{
          id: "frame-0",
          image: "",
          imgUrl: ""
        }, {
          id: "frame-1",
          image: "frame_1.png",
          imgUrl: "https://arenacloud.cdn.arkadiumhosted.com/arenaxstorage-blob/arenax-index/_arena-shared-content_/arkadium-frames/png/1x/frame_1.png"
        }, {
          id: "frame-2",
          image: "frame_2.png",
          imgUrl: "https://arenacloud.cdn.arkadiumhosted.com/arenaxstorage-blob/arenax-index/_arena-shared-content_/arkadium-frames/png/1x/frame_2.png"
        }, {
          id: "frame-3",
          image: "frame_3.png",
          imgUrl: "https://arenacloud.cdn.arkadiumhosted.com/arenaxstorage-blob/arenax-index/_arena-shared-content_/arkadium-frames/png/1x/frame_3.png"
        }, {
          id: "frame-4",
          image: "frame_4.png",
          imgUrl: "https://arenacloud.cdn.arkadiumhosted.com/arenaxstorage-blob/arenax-index/_arena-shared-content_/arkadium-frames/png/1x/frame_4.png"
        }, {
          id: "frame-5",
          image: "frame_5.png",
          imgUrl: "https://arenacloud.cdn.arkadiumhosted.com/arenaxstorage-blob/arenax-index/_arena-shared-content_/arkadium-frames/png/1x/frame_5.png"
        }, {
          id: "frame-6",
          image: "frame_6.png",
          imgUrl: "https://arenacloud.cdn.arkadiumhosted.com/arenaxstorage-blob/arenax-index/_arena-shared-content_/arkadium-frames/png/1x/frame_6.png"
        }, {
          id: "frame-7",
          image: "frame_7.png",
          imgUrl: "https://arenacloud.cdn.arkadiumhosted.com/arenaxstorage-blob/arenax-index/_arena-shared-content_/arkadium-frames/png/1x/frame_7.png"
        }];

      function* v(e, t) {
        for (let a = 0; a < e.length; a += t) yield e.slice(a, a + t)
      }
      let b = e => e.filter(e => !e?.image_name.includes("blank")).map(e => ({
        id: e?.id ?? null,
        imgUrl: (0, g.ZX)(e?.image_name || ""),
        imgId: `${e?.image_name??""}`,
        isPremium: e?.type === x.V.Premium
      }));

      function S(e, t, a) {
        let s = [],
          r = [...v(a(e), 6)],
          n = [...v(a(t), 12)],
          i = Math.max(r.length, n.length);
        for (let e = 0; e < i; e++) s.push([...r[e] ?? [], ...n[e] ?? []]);
        return s
      }
      var j = a(79481);
      let C = (0, j.createServerReference)("40fde665ff1927e2c155cdba3f0b1a4bf78dc8e9c2", j.callServer, void 0, j.findSourceMapURL, "updateUserAvatar");
      var w = a(21765);
      a(61288);
      var N = (0, a(1721).c)({
          defaultClassName: "_128fnv79 _128fnv77",
          variantClassNames: {
            premium: {
              true: "_128fnv78"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        k = "_128fnv7j",
        E = "_128fnv7h",
        I = "_128fnv7i",
        A = "_128fnv7o",
        P = "_128fnv7p",
        R = "_128fnv7l",
        T = "_128fnv7k",
        L = a(56142),
        D = a(11966),
        F = a(43487),
        U = a(19253);
      let M = ({
        avatars: e
      }) => {
        let {
          refreshProfile: t
        } = (0, c.xV)(), a = (0, c.sb)(), {
          closeModal: s
        } = (0, m.h)(), [i, x] = (0, f.useState)(a.avatarId), [v, j] = (0, f.useState)(a.avatarBackground), [M, O] = (0, f.useState)(a.subscriberAvatar?.frame || ""), [B, G] = (0, f.useState)(null), [$, q] = (0, f.useState)(!1), [z, W] = f.useState(h.Avatar), V = async e => {
          q(!0);
          let a = new FormData(e.target),
            r = await C(a);
          "message" in r && G(r.message);
          try {
            let {
              colorSelected: e,
              frameSelected: a
            } = r;
            "avatarSelected" in r && (t(), (0, w.go)(e, a, "profile"), s())
          } catch (e) {
            G("Unknown error")
          }
          q(!1)
        }, X = S(e?.premiumAvatars ?? [], e?.regularAvatars ?? [], b), H = S([], _, e => e.map(e => ({
          id: e.id,
          imgUrl: e.imgUrl,
          imgId: e.image,
          isPremium: !0
        }))), J = [{
          id: h.Avatar,
          name: "Select Avatar",
          isActive: z === h.Avatar
        }, {
          id: h.Extra,
          name: "Customize",
          isActive: z === h.Extra
        }];
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)("form", {
            onSubmit: V,
            "data-testid": "profile-avatar-selection-content",
            style: (0, L.D)({
              "--dot-container-distance": "-40px"
            }),
            children: [(0, r.jsx)(p.t, {
              tabContainerClassName: "_128fnv73",
              tabNavListClassName: "_128fnv72",
              tabNavListDirection: "row",
              tabs: J,
              onTabClick: e => W(e),
              "data-sentry-element": "Tabs",
              "data-sentry-source-file": "index.tsx",
              children: z === h.Avatar ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("input", {
                  type: "hidden",
                  id: "colorSelected",
                  name: "colorSelected",
                  value: v
                }), (0, r.jsx)("input", {
                  type: "hidden",
                  id: "frameSelected",
                  name: "frameSelected",
                  value: M
                }), (0, r.jsx)(u.Carousel, {
                  isFullWidth: !0,
                  enableDots: !0,
                  fixedHeight: !1,
                  dotsOutside: !0,
                  dotsBlack: !0,
                  arrowsButtonClassName: "_128fnv75",
                  containerClassName: "_128fnv76",
                  children: X.map((e, t) => (0, r.jsx)("div", {
                    className: "_128fnv7b",
                    children: e.map(e => (0, r.jsx)("div", {
                      className: o()(E, {
                        [I]: i === e.imgId
                      }),
                      children: (0, r.jsxs)("label", {
                        className: o()(k, {
                          [T]: i === e.imgId,
                          [R]: e.isPremium && !a.isSubscriber
                        }),
                        "data-testid": `profile-avatar-selection-slide-${e.id}`,
                        htmlFor: `avatar-${e.id}`,
                        children: [(0, r.jsx)("input", {
                          id: `avatar-${e.id}`,
                          type: "radio",
                          radioGroup: "avatarSelected",
                          name: "avatarSelected",
                          value: e?.imgId ?? "",
                          className: A,
                          defaultChecked: i === e.imgId,
                          tabIndex: d.Ee.AUTO,
                          disabled: e.isPremium && !a.isSubscriber,
                          onChange: () => x(e.imgId)
                        }), (0, r.jsx)(n.default, {
                          unoptimized: !0,
                          className: N({
                            premium: e.isPremium
                          }),
                          src: e.imgUrl ?? "",
                          alt: `Avatar image ${e.id}`,
                          width: 136,
                          height: 136,
                          style: {
                            background: a.avatarBackground
                          }
                        }), e.isPremium && (0, r.jsx)("div", {
                          className: o()("_128fnv7q"),
                          "data-testid": "profile-avatar-selection-premium-badge"
                        })]
                      }, `-box_${e.id}`)
                    }, `${e.id}-box`))
                  }, `avatars-page-${t}`))
                })]
              }) : z === h.Extra ? (0, r.jsxs)("div", {
                className: "_128fnv74",
                children: [(0, r.jsx)("input", {
                  type: "hidden",
                  id: "avatarSelected",
                  name: "avatarSelected",
                  value: i
                }), (0, r.jsx)("h3", {
                  className: P,
                  children: "Choose your background color"
                }), (0, r.jsx)("div", {
                  className: "_128fnv7e",
                  children: y.map(e => (0, r.jsxs)("label", {
                    htmlFor: `color-${e}`,
                    className: o()("_128fnv7f", {
                      _128fnv7g: v === e
                    }),
                    "data-testid": `profile-color-selection-slide-${e}`,
                    style: {
                      backgroundColor: e,
                      borderColor: e
                    },
                    children: [(0, r.jsx)("div", {
                      className: o()("_128fnv7m", {
                        _128fnv7n: v === e
                      }),
                      style: {
                        borderColor: e
                      }
                    }), (0, r.jsx)("input", {
                      type: "radio",
                      id: `color-${e}`,
                      radioGroup: "colorSelected",
                      name: "colorSelected",
                      value: e,
                      defaultChecked: v === e,
                      tabIndex: d.Ee.AUTO,
                      onChange: () => j(e),
                      className: A
                    })]
                  }, `-box_${e}`))
                }), (0, r.jsx)("h3", {
                  className: P,
                  children: "Choose your frame"
                }), H.map((e, t) => (0, r.jsx)("div", {
                  className: "_128fnv7c",
                  children: e.map(e => (0, r.jsx)("div", {
                    className: o()(E, {
                      [I]: M === e.imgId,
                      [R]: "" !== e.imgId && !a.isSubscriber
                    }),
                    children: (0, r.jsxs)("label", {
                      className: o()(k, {
                        [T]: M === e.imgId
                      }),
                      "data-testid": `profile-frame-selection-slide-${e.id}`,
                      children: [(0, r.jsx)("div", {
                        className: "_128fnv7d",
                        style: {
                          background: `url(${e.imgUrl})`
                        }
                      }), (0, r.jsx)("input", {
                        type: "radio",
                        radioGroup: "frameSelected",
                        name: "frameSelected",
                        value: e.imgId,
                        className: A,
                        defaultChecked: M === e.imgId,
                        tabIndex: d.Ee.AUTO,
                        disabled: "" !== e.imgId && !a.isSubscriber,
                        onChange: () => O(e.imgId)
                      }), (0, r.jsx)(n.default, {
                        unoptimized: !0,
                        className: N({
                          premium: !1
                        }),
                        style: {
                          background: v
                        },
                        src: (0, g.ZX)(i ?? ""),
                        alt: `Avatar image ${i}`,
                        width: 136,
                        height: 136
                      })]
                    }, `-box_${e.id}`)
                  }, `${e.id}-box`))
                }, `frames-page-${t}`))]
              }) : null
            }), (0, r.jsx)("footer", {
              className: "_128fnv71",
              children: (0, r.jsx)(l.$, {
                type: "submit",
                size: "medium",
                variant: $ ? "disabled" : "filled",
                className: "_128fnv70",
                testId: "profile-button",
                "data-sentry-element": "Button",
                "data-sentry-source-file": "index.tsx",
                children: $ ? (0, r.jsx)(F.y, {
                  size: D.Y.SMALL
                }) : "Save"
              })
            })]
          }), (0, r.jsx)("aside", {
            className: "_128fnv7r",
            children: (0, r.jsx)(U.y, {
              type: U.W.error,
              "data-sentry-element": "Toast",
              "data-sentry-source-file": "index.tsx",
              children: B
            })
          })]
        })
      }
    },
    31679: (e, t, a) => {
      "use strict";
      a.d(t, {
        k: () => u
      });
      var s = a(95155),
        r = a(70448),
        n = a.n(r),
        i = a(12115),
        o = a(46034),
        l = a(31381),
        d = a(82492),
        c = a(77142);
      let u = ({
        label: e,
        labelClassName: t,
        error: a = !1,
        errorMessage: r,
        required: u = !1,
        className: m,
        iconClassName: p,
        withIcon: h,
        onFocus: f,
        onBlur: g,
        onIconClick: x,
        onIconEmptyClick: y,
        onChange: _,
        id: v,
        disabled: b,
        testId: S,
        ...j
      }) => {
        let [C, w] = (0, i.useState)(!1), [N, k] = (0, i.useState)(""), [E, I] = (0, i.useState)(!1), A = E ? "close" : "check";
        return a && (A = "trash"), (0, s.jsxs)("div", {
          className: o.Kf,
          "data-sentry-component": "TextInput",
          "data-sentry-source-file": "index.tsx",
          children: [(0, s.jsx)(l.J, {
            label: e,
            required: u,
            htmlFor: v,
            className: t,
            "data-sentry-element": "Label",
            "data-sentry-source-file": "index.tsx"
          }), (0, s.jsxs)("div", {
            className: o.I6,
            "data-testid": S,
            children: [(0, s.jsx)("input", {
              className: n()(o.hF, {
                [o.Xu]: a,
                [o.i_]: C && !a,
                [o.qw]: !C,
                [o.IU]: h
              }, m),
              onFocus: e => {
                w(!0), f?.(e)
              },
              onBlur: e => {
                w(!1), g?.(e)
              },
              "aria-invalid": a,
              "aria-required": u,
              disabled: b,
              value: N,
              onChange: e => {
                k(e.target.value), _?.(e)
              },
              ...j
            }), h && (0, s.jsx)("div", {
              className: n()(o.zc, p, {
                [o.jw]: E
              }),
              onClick: () => void(0 !== N.length && (E ? (I(!1), k(""), y?.()) : (I(!0), x?.(N)))),
              "data-testid": `${A}-icon-button`,
              children: (0, s.jsx)(c.t, {
                name: A,
                width: 24,
                height: 24,
                color: "white"
              })
            })]
          }), a && r && (0, s.jsx)(d.K, {
            message: r
          })]
        })
      }
    },
    36074: (e, t, a) => {
      "use strict";
      a.d(t, {
        t: () => u
      });
      var s = a(95155),
        r = a(70448),
        n = a.n(r);
      a(68601);
      var i = a(1721),
        o = (0, i.c)({
          defaultClassName: "qf1mzy6 qf1mzy5",
          variantClassNames: {
            isPending: {
              true: "qf1mzy7"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        l = (0, i.c)({
          defaultClassName: "qf1mzy1 qf1mzy0",
          variantClassNames: {
            direction: {
              column: "qf1mzy2",
              row: "qf1mzy3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        d = (0, i.c)({
          defaultClassName: "qf1mzyc qf1mzya",
          variantClassNames: {
            active: {
              true: "qf1mzyb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        c = a(90242);
      let u = ({
        renderNavExtra: e,
        tabs: t,
        onTabClick: a,
        children: r,
        isPending: i,
        tabContainerClassName: u,
        tabNavListClassName: m,
        tabNavListDirection: p = "column"
      }) => (0, s.jsxs)("div", {
        className: n()("qf1mzy4", u),
        "data-sentry-component": "Tabs",
        "data-sentry-source-file": "index.tsx",
        children: [(0, s.jsxs)("div", {
          className: "qf1mzy8",
          children: [e?.(), (0, s.jsx)("div", {
            className: "qf1mzy9",
            children: (0, s.jsx)("nav", {
              className: n()(l({
                direction: p
              }), m),
              children: t.map(e => (0, s.jsx)(c.$, {
                variant: "label",
                size: "medium",
                onClick: () => a(e.id),
                className: d({
                  active: e.isActive
                }),
                role: "link",
                children: e.name
              }, e.id))
            })
          })]
        }), (0, s.jsx)("div", {
          className: o({
            isPending: i
          }),
          children: r
        })]
      })
    },
    37357: (e, t, a) => {
      "use strict";
      a.d(t, {
        l: () => c
      });
      var s = a(95155),
        r = a(12115),
        n = a(18596);
      a(60007);
      var i = a(51629),
        o = a(70448),
        l = a.n(o),
        d = a(39347);
      let c = ({
        items: e,
        onUpdate: t,
        selectedItem: a,
        placeholder: o = "Select an option",
        prefix: c,
        inputClassName: u,
        contentClassName: m,
        disabled: p,
        contentDataTestId: h
      }) => {
        let [f, g] = (0, r.useState)(!1), x = c ? `${c} ${a?.label}` : a?.label;
        return (0, s.jsxs)(n.bL, {
          onValueChange: a => {
            let s = e.find(e => e.value === a);
            s && t?.(s)
          },
          onOpenChange: g,
          value: a?.value,
          "data-sentry-element": "RadixSelect.Root",
          "data-sentry-component": "Select",
          "data-sentry-source-file": "index.tsx",
          children: [(0, s.jsxs)(n.l9, {
            className: l()("_18cucgp4", "_18cucgp0", u),
            tabIndex: 0,
            disabled: !e.length || p,
            "data-testid": "dropdown-button",
            "data-sentry-element": "RadixSelect.Trigger",
            "data-sentry-source-file": "index.tsx",
            children: [(0, s.jsxs)(n.WT, {
              placeholder: o,
              "data-sentry-element": "RadixSelect.Value",
              "data-sentry-source-file": "index.tsx",
              children: [a?.icon ? a.icon : "", (0, s.jsx)("p", {
                children: x
              })]
            }), (0, s.jsx)(n.In, {
              asChild: !0,
              "data-sentry-element": "RadixSelect.Icon",
              "data-sentry-source-file": "index.tsx",
              children: (0, s.jsx)(i.I, {
                className: "_18cucgp1",
                name: "chevron-bottom"
              })
            })]
          }), (0, s.jsx)(n.ZL, {
            "data-sentry-element": "RadixSelect.Portal",
            "data-sentry-source-file": "index.tsx",
            children: (0, s.jsx)(n.UC, {
              className: l()("_18cucgp3", m),
              position: "popper",
              side: "bottom",
              align: "start",
              sideOffset: 4,
              alignOffset: 0,
              avoidCollisions: !1,
              "data-testid": h,
              "data-sentry-element": "RadixSelect.Content",
              "data-sentry-source-file": "index.tsx",
              children: (0, s.jsx)(d.bL, {
                type: "auto",
                "data-sentry-element": "ScrollAreaRoot",
                "data-sentry-source-file": "index.tsx",
                children: (0, s.jsx)(n.LM, {
                  asChild: !0,
                  "data-sentry-element": "RadixSelect.Viewport",
                  "data-sentry-source-file": "index.tsx",
                  children: (0, s.jsx)(d.LM, {
                    className: "_18cucgp2",
                    "data-sentry-element": "ScrollAreaViewport",
                    "data-sentry-source-file": "index.tsx",
                    children: (0, s.jsx)(n.YJ, {
                      "data-sentry-element": "RadixSelect.Group",
                      "data-sentry-source-file": "index.tsx",
                      children: e.map((e, t) => (0, s.jsxs)(n.q7, {
                        value: e.value,
                        textValue: e.label,
                        className: "_18cucgp5",
                        "data-testid": "dropdown-item",
                        children: [e?.icon ? e.icon : "", e.label]
                      }, t))
                    })
                  })
                })
              })
            })
          })]
        })
      }
    },
    37914: (e, t, a) => {
      "use strict";
      a.d(t, {
        X: () => i
      });
      var s = a(95155),
        r = a(85824);
      a(59803);
      var n = a(90242);
      let i = () => {
        let {
          openModal: e
        } = (0, r.h)();
        return (0, s.jsxs)("p", {
          className: "_1a2clym0",
          "data-sentry-component": "ContactSupportBlock",
          "data-sentry-source-file": "ContactSupportBlock.tsx",
          children: ["Still need help?", " ", (0, s.jsx)(n.$, {
            className: "_1a2clym1",
            onClick: () => {
              e("support", {
                origin: window.location.pathname
              })
            },
            variant: "label",
            "data-sentry-element": "Button",
            "data-sentry-source-file": "ContactSupportBlock.tsx",
            children: "Contact Support"
          })]
        })
      }
    },
    39079: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        arkadiumPlus: () => s,
        bannerContainer: () => r,
        bannerSubTitle: () => n,
        bannerTitle: () => i,
        container: () => o,
        modalSubscription: () => l
      }), a(60757);
      var s = "oewxm25",
        r = "oewxm21",
        n = "oewxm23",
        i = "oewxm22",
        o = "oewxm24",
        l = "oewxm20"
    },
    39243: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        signUpModalClose: () => s,
        signUpModalContent: () => r,
        signUpModalFrictionlessBadge: () => n,
        signUpModalInner: () => i
      }), a(10853);
      var s = "aak55y3",
        r = "aak55y0",
        n = "aak55y1",
        i = "aak55y2"
    },
    40038: e => {
      e.exports = {
        toggle: "styles_toggle__cIkjW",
        __opened: "styles___opened__UE1P6",
        selected: "styles_selected__rl_CT",
        clicked: "styles_clicked__lKY5g",
        item: "styles_item__9DVxZ",
        content: "styles_content__upyaX",
        list: "styles_list__fv3KX",
        separator: "styles_separator__MoifJ",
        dropdownItemWithIcon: "styles_dropdownItemWithIcon__aTSwb"
      }
    },
    40087: e => {
      e.exports = {
        ResetPasswordSuccessTitle: "styles_ResetPasswordSuccessTitle__DFNaa",
        ResetPasswordSuccessDescription: "styles_ResetPasswordSuccessDescription__iCO5o",
        ContinueButtonWrapper: "styles_ContinueButtonWrapper__j4Xhb"
      }
    },
    41557: (e, t, a) => {
      "use strict";
      a.d(t, {
        CP: () => n,
        Lz: () => s,
        WS: () => o,
        Z$: () => i,
        ed: () => r
      }), a(42383);
      var s = "_1jkkofu0",
        r = "_1jkkofu2",
        n = "_1jkkofu1",
        i = "_1jkkofu3",
        o = "_1jkkofu4"
    },
    42956: (e, t, a) => {
      "use strict";
      a.d(t, {
        XV: () => r,
        dm: () => o,
        g5: () => l,
        tz: () => s
      });
      let s = {
          GEMS: "gems",
          SUBSCRIPTION: "subscription"
        },
        r = {
          selection: {
            id: "selection",
            title: {
              subscription: "",
              gems: "Choose the gem pack that's right for you"
            },
            stepName: "selection"
          },
          payment: {
            id: "payment",
            title: {
              subscription: "Choose your payment method",
              gems: "Choose your payment method"
            },
            stepName: "payment"
          },
          review: {
            id: "review",
            title: {
              subscription: "Review and pay",
              gems: "Review and pay"
            },
            stepName: "review",
            subtitle: "Please take a moment to review your order before finalizing your purchase"
          },
          success: {
            id: "success",
            title: {
              subscription: "Thanks for subscribing - enjoy your exclusive perks",
              gems: "Thanks for your purchase - your gems are ready to use"
            },
            stepName: "success",
            subtitle: "We’ve emailed you a receipt for your purchase​"
          },
          error: {
            id: "error",
            title: {
              subscription: "Sorry, something went wrong—please try again​",
              gems: "Sorry, something went wrong—please try again​"
            },
            stepName: "error"
          },
          auth: {
            id: "auth",
            title: null,
            stepName: "auth"
          },
          verifyEmail: {
            id: "verifyEmail",
            title: {
              subscription: "Confirm your email to continue",
              gems: "Confirm your email to continue"
            },
            stepName: "verifyEmail"
          }
        };
      var n, i, o = ((n = {}).subscription = "Arkadium Advantage", n.gems = "Gems", n),
        l = ((i = {}).CARD = "card", i.PAYPAL = "paypal", i.APPLE_PAY = "applePay", i.GIFT_CARD = "giftCard", i)
    },
    43022: (e, t, a) => {
      "use strict";
      a.d(t, {
        RegisterServiceWorker: () => i
      });
      var s = a(12115),
        r = a(17413),
        n = a(27882);
      let i = () => {
        let {
          features: e
        } = (0, n.R)(), t = e.core.isTrailingSlashEnabled ? "/sw.js/" : "/sw.js";
        return (0, s.useEffect)(() => {
          e.addToHomeScreen.enabled && ("serviceWorker" in navigator ? ((0, r.t)().info("[PWA] Registering service worker..."), navigator.serviceWorker.register(t, {
            scope: "/"
          }).then(e => {
            (0, r.t)().info({
              data: {
                scope: e.scope,
                active: !!e.active,
                installing: !!e.installing,
                waiting: !!e.waiting
              }
            }, "[PWA] Service Worker registered successfully"), e.addEventListener("updatefound", () => {
              let t = e.installing;
              t && t.addEventListener("statechange", () => {
                "installed" === t.state && navigator.serviceWorker.controller && (0, r.t)().info("[PWA] New service worker available")
              })
            })
          }).catch(e => {
            if (e instanceof Error)(0, r.t)().error({
              data: e
            }, "[PWA] Service Worker registration failed");
            else if (e) {
              let a = String(e),
                s = {
                  message: e?.message || a,
                  name: e?.name || e?.constructor?.name || "UnknownError",
                  stack: e?.stack,
                  code: e?.code,
                  path: t,
                  errorType: e?.constructor?.name || typeof e,
                  rawError: a
                };
              (0, r.t)().error({
                data: s
              }, "[PWA] Service Worker registration failed")
            } else(0, r.t)().error({
              data: {
                path: t,
                error: "Service worker registration failed with unknown error"
              }
            }, "[PWA] Service Worker registration failed")
          })) : (0, r.t)().warn("[PWA] Service Worker not supported in this browser"))
        }, []), null
      }
    },
    43536: e => {
      e.exports = {
        iframeWrapper: "styles_iframeWrapper__uixeT",
        googleButton: "styles_googleButton__Dzn25",
        googleAuthButton: "styles_googleAuthButton__uK3X7"
      }
    },
    43772: (e, t, a) => {
      "use strict";
      a.d(t, {
        ModalSignUp: () => b
      });
      var s = a(95155),
        r = a(12115),
        n = a(14011),
        i = a(4265),
        o = a(85824),
        l = a(52514),
        d = a(41936),
        c = a(88011),
        u = a(79481);
      let m = (0, u.createServerReference)("40ea6c660e20c0e41f68da0dcdddb1fbfa5bd62ec0", u.callServer, void 0, u.findSourceMapURL, "confirmEmail"),
        p = (0, u.createServerReference)("4010bb41352eea76a5fec86f40fdb19d0bfbe1721b", u.callServer, void 0, u.findSourceMapURL, "changeEmail");
      var h = a(24709),
        f = a(21765),
        g = a(61181),
        x = a(646),
        y = a(27882),
        _ = a(39243),
        v = a(33097);
      let b = () => {
        let e = (0, n.useSearchParams)(),
          t = (0, n.usePathname)(),
          a = (0, n.useRouter)(),
          u = (0, i.XI)(),
          b = (0, i.sb)(),
          {
            closeModal: S,
            modalButtonLocation: j,
            isRewardActive: C
          } = (0, o.h)(),
          {
            loginSuccess: w,
            logout: N
          } = (0, i.xV)(),
          k = (0, d.ef)("auth"),
          {
            domain: E
          } = (0, g.X)(),
          {
            features: I
          } = (0, y.R)(),
          A = I.auth.isFrictionlessRegisterEnabled,
          P = (0, x.lu)(t),
          R = (0, i.Al)(),
          T = k.clearCaptchaData,
          L = k.abortCaptchaLoading,
          D = k.isCaptchaPending,
          F = k.resetCaptchaReady,
          [U, M] = (0, r.useState)(null),
          [O, B] = (0, r.useState)(""),
          [G, $] = (0, r.useState)(null),
          [q, z] = (0, r.useState)(""),
          [W, V] = (0, r.useState)(""),
          X = e.get(c.T.REGISTER_CONFIRMATION_CODE),
          H = e.get(c.T.CONFIRMATION_SOURCE),
          J = e.get(c.T.RESET_PASSWORD_CODE),
          Y = e.get(c.T.EMAIL_CHANGE_CONFIRMATION_CODE),
          K = e.get("modal"),
          Q = (0, r.useCallback)(e => {
            w({
              buttonLocation: "success" === U ? "signUpModal" : e.buttonLocation ?? j ?? "signUpModal",
              loginRegisterType: e.loginRegisterType,
              isFrictionlessLogin: e.isFrictionlessLogin
            })
          }, [w, j, U]),
          Z = (0, r.useCallback)(() => {
            let s = new URLSearchParams(e.toString());
            s.delete("modal");
            let r = s.toString() ? `${t}?${s.toString()}` : t;
            a.replace(r)
          }, [e, t, a]),
          ee = (0, r.useCallback)(s => {
            let r = new URLSearchParams(e.toString());
            r.delete(s);
            let n = r.toString() ? `${t}?${r.toString()}` : t;
            a.replace(n)
          }, [e, t, a]),
          et = !!b?.isEmailConfirmed,
          ea = u && (!!X || !!U) && !et;
        return ((0, r.useEffect)(() => {
          !u || "sign-up" !== K || ea || C || (Z(), S())
        }, [u, K, Z, S, ea, C]), (0, r.useEffect)(() => {
          X && u && !et && N()
        }, [X, u, et, N]), (0, r.useEffect)(() => {
          !X || U || q || u || !R || (async () => {
            let e = "success",
              t = new FormData;
            t.append("code", X);
            let a = await m(t);
            a && "error" in a && (e = "error", z("Email confirmation failed. Please check your confirmation link and try again."), (0, h.wd)("Email confirmation failed in ModalSignUp", {
              level: "error",
              tags: {
                component: "ModalSignUp",
                action: "confirmEmail",
                errorType: "confirmation_failure",
                status: a.status?.toString() || "unknown"
              },
              extra: {
                confirmationCode: X,
                response: a,
                domain: E,
                locale: P
              }
            })), ee(c.T.REGISTER_CONFIRMATION_CODE), "success" === e && v.y.updateUserProfile({
              registered: !0
            }), M(e), (0, f.g3)("modal", "email", e, H)
          })(), J && (B(J), ee(c.T.RESET_PASSWORD_CODE))
        }, [X, H, J, U, q, ee, E, P, u, R]), (0, r.useEffect)(() => {
          Y && !G && !W && R && (async () => {
            let e = "success",
              t = new FormData;
            t.append("code", Y);
            let a = await p(t);
            a && "error" in a ? (e = "error", V("Email change confirmation failed. Please check your confirmation link and try again."), (0, h.wd)("Email change confirmation failed in ModalSignUp", {
              level: "error",
              tags: {
                component: "ModalSignUp",
                action: "changeEmail",
                errorType: "change_email_confirmation_failure",
                status: a.status?.toString() || "unknown"
              },
              extra: {
                changeEmailConfirmationCode: Y,
                response: a,
                domain: E,
                locale: P
              }
            })) : (V(""), z("")), $(e), (0, f.Xp)("modal", "email", e), ee(c.T.EMAIL_CHANGE_CONFIRMATION_CODE)
          })()
        }, [Y, G, W, R, ee, E, P]), (0, r.useEffect)(() => {
          if ((U || G) && "sign-up" !== K && !u) {
            let s = new URLSearchParams(e.toString());
            s.set("modal", "sign-up");
            let r = s.toString() ? `${t}?${s.toString()}` : t;
            a.replace(r)
          }
        }, [U, G, K, u, e, t, a]), (0, r.useEffect)(() => () => {
          T(), D && L(), F()
        }, []), "sign-up" === K && (!u || ea || C)) ? (0, s.jsx)("div", {
          className: _.signUpModalInner,
          "data-testid": "entry-modal-content",
          "data-sentry-component": "ModalSignUp",
          "data-sentry-source-file": "ModalSignUp.tsx",
          children: (0, s.jsx)(l.v, {
            isFrictionlessRegisterEnabled: A,
            confirmEmailError: q,
            emailConfirmState: U,
            captchaData: k,
            onLoginSuccess: Q,
            resetPasswordRecoveryCode: O,
            setEmailConfirmState: M,
            changeEmailConfirmError: W,
            changeEmailConfirmCodeState: G,
            "data-sentry-element": "EntryForm",
            "data-sentry-source-file": "ModalSignUp.tsx"
          })
        }) : null
      }
    },
    46034: (e, t, a) => {
      "use strict";
      a.d(t, {
        I6: () => u,
        IU: () => c,
        Kf: () => i,
        Xu: () => l,
        hF: () => n,
        i_: () => d,
        jw: () => r,
        qw: () => o,
        zc: () => s
      }), a(18800);
      var s = "_1izqokt8",
        r = "_1izqokt9",
        n = "_1izqokt3 _1izqokt2",
        i = "_1izqokt0",
        o = "_1izqokt4",
        l = "_1izqokt6",
        d = "_1izqokt5",
        c = "_1izqokt7",
        u = "_1izqokt1"
    },
    51312: e => {
      e.exports = {
        EmailSentTitle: "styles_EmailSentTitle__UPo7B",
        EmailSentDescription: "styles_EmailSentDescription__nb53F",
        EmailSentNotification: "styles_EmailSentNotification__7cx7O",
        visible: "styles_visible__pzktF",
        EmailSentResendButton: "styles_EmailSentResendButton__Zy1fN",
        EmailSentForm: "styles_EmailSentForm__1Osq2",
        ThankYouButton: "styles_ThankYouButton__LWWsx",
        ContinueButtonWrapper: "styles_ContinueButtonWrapper__xk28k"
      }
    },
    52514: (e, t, a) => {
      "use strict";
      a.d(t, {
        v: () => e4
      });
      var s, r = a(95155),
        n = a(12115),
        i = a(32628),
        o = a(69518),
        l = a(12347),
        d = a.n(l),
        c = a(88658),
        u = a(41936),
        m = a(39768),
        p = a(60921),
        h = a(93329),
        f = ((s = {})[s.InvalidRequestData = 1e3] = "InvalidRequestData", s[s.CaptchaValidationFailed = 1022] = "CaptchaValidationFailed", s[s.CaptchaScoreIsTooLow = 1023] = "CaptchaScoreIsTooLow", s),
        g = a(43536),
        x = a.n(g),
        y = a(70448),
        _ = a.n(y),
        v = a(30423),
        b = a(79481);
      let S = (0, b.createServerReference)("40320c2811d3f8008fafc12b4f65384130b61fded7", b.callServer, void 0, b.findSourceMapURL, "loginByGoogle");
      var j = a(62936),
        C = a(21765),
        w = a(24408),
        N = a(85824),
        k = a(27882),
        E = a(17413),
        I = a(4265),
        A = a(93284);
      let P = "activation_expires_at",
        R = ({
          changeEmail: e,
          changeAuthType: t,
          onLoginSuccess: a,
          setEmailConfirmState: s,
          changeErrors: i,
          changeErrorCode: o,
          currentStep: l,
          changeCurrentStep: d,
          changeLoading: g,
          captchaToken: y,
          captchaMode: b,
          getCaptchaToken: R,
          clearCaptchaData: T,
          domainWithProtocolAndLocale: L,
          abortSignal: D,
          game: F
        }) => {
          let {
            features: {
              auth: U
            }
          } = (0, k.R)(), M = (0, n.useRef)(null), [O, B] = (0, n.useState)(!1), G = (0, p.lm)(), [$, q] = (0, n.useState)(null), z = (0, n.useRef)(!1), {
            modalButtonLocation: W,
            setIsRewardActive: V
          } = (0, N.h)(), {
            setIsFrictionlessLogin: X
          } = (0, I.xV)(), H = U.isFrictionlessRegisterEnabled, [J, Y] = (0, n.useState)(null), K = U.providers?.google?.buttonUrl ?? "", Q = (0, E.t)();
          (0, n.useEffect)(() => {
            let e = G === m.LB.xxs ? "small" : "large";
            J !== e && (Y(e), M?.current && O && M.current.contentWindow?.postMessage({
              type: "RELOAD_GOOGLE_BUTTON",
              payload: {
                buttonSize: e
              }
            }, K))
          }, [G, J, O, K]), (0, n.useEffect)(() => {
            let e = e => {
              let t = e.data;
              t && "auth-google-user" === t.action && ($ || q(t.user), z.current = !1)
            };
            return window.addEventListener("message", e), () => window.removeEventListener("message", e)
          }, [$]), (0, n.useEffect)(() => {
            if ($ && !y && !z.current) {
              if (z.current = !0, t(h.hT.Google), i([]), o(null), !$.email) return void s?.("error");
              s?.(null), g(!0), R(u.Gf.SIGN_IN)
            }
          }, [y, $, t, i, o, s, g, d, R]);
          let Z = (0, n.useCallback)((e, t, a, s) => ({
            token: e.access_token,
            email: e.email ?? null,
            emailRetrievalConsent: !1,
            registrationPlaceUrl: s,
            registrationAppId: new URL(s).hostname,
            authProviderAppId: U.providers?.google?.appId ?? "",
            captchaToken: t,
            ...a ? {
              captchaMode: a
            } : {}
          }), []);
          return (0, n.useEffect)(() => {
            M?.current && O && M.current.contentWindow?.postMessage({
              type: "RENDER_GOOGLE_BUTTON",
              payload: {
                buttonSize: J,
                googleAppId: U.providers?.google?.appId ?? "",
                parentOrigin: window.location.origin
              }
            }, K)
          }, [K, O]), (0, n.useEffect)(() => {
            y && $?.id && (async () => {
              try {
                let e = Z($, y, b, L),
                  t = new FormData;
                if (!e.token) {
                  Q.error({
                    data: {
                      hasToken: !!e.token,
                      hasEmail: !!e.email,
                      hasCaptchaToken: !!y
                    }
                  }, "[GoogleAuthButton/index.tsx] - Missing Google token"), i(["Google authentication failed. Please try again."]), g(!1);
                  return
                }
                t.append("", e.token), t.append("email", e.email || ""), t.append("emailRetrievalConsent", (e.emailRetrievalConsent || !1).toString()), t.append("registrationPlaceUrl", e.registrationPlaceUrl || ""), t.append("registrationAppId", e.registrationAppId || ""), t.append("authProviderAppId", e.authProviderAppId || ""), y && t.append("captchaToken", y), b && t.append("captchaMode", b), t.append("0", "");
                let r = await S(t);
                if (r && "error" in r) {
                  let e = r.error || "An error occurred",
                    t = r.status || 500;
                  if (400 === t) {
                    if (e.toLowerCase().includes("captcha")) return void o(f.CaptchaValidationFailed);
                    i([e]), o(f.InvalidRequestData)
                  } else i([e]), o(f.InvalidRequestData);
                  g(!1), e.toLowerCase().includes("email") && s?.("error");
                  return
                }
                g(!1), T(), r?.payload && (r.payload.isRegistered && (0, C.z0)({
                  Email: $.email,
                  buttonLocation: W,
                  loginRegisterType: j.Q.Google
                }, F, "google", "", "", W, r.payload.uid), w.CA.updateConfig({
                  baseParams: {
                    xsollaId: r.payload.uid,
                    loggedIn: !0
                  }
                }), a({
                  buttonLocation: W,
                  loginRegisterType: j.Q.Google
                }), r.payload.isRegistered && H && (A.sj.setItem(P, "no-expiration"), V(!0), X(!0), d(c.d_.REWARD)))
              } catch (e) {
                Q.error({
                  data: {
                    err: e,
                    hasSocialUser: !!$,
                    hasCaptchaToken: !!y
                  }
                }, "[GoogleAuthButton/index.tsx] - Unexpected error during Google login"), i(["An unexpected error occurred during login. Please try again."]), o(f.InvalidRequestData), g(!1)
              }
            })()
          }, [y]), (0, n.useEffect)(() => {
            y && l === c.d_.SIGN_IN_UP_RESEND_EMAIL_GOOGLE && (async () => {
              g(!0);
              let e = await (0, v.db)(v.lJ.RESEND_EMAIL, {
                method: "POST",
                body: JSON.stringify({
                  email: $.email,
                  authType: h.hT.Google,
                  resendConfirmationFormUrl: L,
                  captchaToken: y,
                  ...b ? {
                    captchaMode: b
                  } : {}
                })
              }, void 0, D);
              if (!(e instanceof AbortSignal)) {
                if (e && "errorCode" in e) {
                  i(e.message), o(e.errorCode);
                  return
                }
                T(), d(c.d_.EMAIL_SENT_FORM)
              }
            })()
          }, [g, b, y, d, o, i, T, l, L, $, D]), (0, r.jsx)("div", {
            className: _()(x().iframeWrapper, x().googleButton),
            style: {
              width: G === m.LB.xxs || G === m.LB.xs ? "360px" : "400px",
              height: "40px"
            },
            "data-sentry-component": "GoogleAuthButton",
            "data-sentry-source-file": "index.tsx",
            children: (0, r.jsx)("iframe", {
              ref: M,
              onLoad: () => B(!0),
              src: K,
              title: "google button iframe",
              className: _()({
                [x().googleAuthButton]: !O
              }),
              height: "40px",
              width: G === m.LB.xxs || G === m.LB.xs ? "360px" : "400px"
            })
          })
        },
        T = (0, b.createServerReference)("4026376fa9c8635f7119e914893c6e44e3c33ace16", b.callServer, void 0, b.findSourceMapURL, "loginByFacebook"),
        L = ({
          changeEmail: e,
          changeAuthType: t,
          onLoginSuccess: a,
          setEmailConfirmState: s,
          changeErrors: i,
          changeErrorCode: o,
          currentStep: l,
          changeCurrentStep: d,
          changeLoading: g,
          captchaToken: y,
          captchaMode: b,
          getCaptchaToken: S,
          clearCaptchaData: w,
          domainWithProtocolAndLocale: R,
          abortSignal: L,
          changeSocialUserToken: D,
          game: F
        }) => {
          let {
            features: {
              auth: U
            }
          } = (0, k.R)(), M = (0, n.useRef)(null), [O, B] = (0, n.useState)(!1), G = (0, p.lm)(), [$, q] = (0, n.useState)(null), [z, W] = (0, n.useState)(null), [V, X] = (0, n.useState)(""), {
            modalButtonLocation: H,
            setIsRewardActive: J
          } = (0, N.h)(), {
            setIsFrictionlessLogin: Y
          } = (0, I.xV)(), K = U.isFrictionlessRegisterEnabled, Q = (0, n.useRef)(!1), Z = U.providers?.facebook?.buttonUrl ?? "", ee = (0, E.t)();
          (0, n.useEffect)(() => {
            let e = G === m.LB.xxs ? "small" : "large";
            z !== e && (W(e), M?.current && O && M.current.contentWindow?.postMessage({
              type: "RELOAD_FB_BUTTON",
              payload: {
                buttonSize: e
              }
            }, Z))
          }, [G, z, O, Z]), (0, n.useEffect)(() => {
            let e = e => {
              let t = e.data;
              if (t) switch (t.action) {
                case "init-fb-auth":
                  g(!0);
                  break;
                case "cancel-fb-auth":
                  g(!1);
                  break;
                case "update-user-info":
                  $ || (q(t.data), D(t.data.access_token)), Q.current = !1
              }
            };
            return window.addEventListener("message", e), () => window.removeEventListener("message", e)
          }, [$, D]), (0, n.useEffect)(() => {
            !$ || y || Q.current || (Q.current = !0, t(h.hT.Facebook), i([]), o(null), s?.(null), g(!0), S(u.Gf.SIGN_IN), d(c.d_.FACEBOOK_AUTH))
          }, [y, $, t, i, o, s, g, d, S]);
          let et = (0, n.useCallback)((e, t, a, s) => ({
            token: e.access_token,
            email: e.email ?? null,
            emailRetrievalConsent: !1,
            registrationPlaceUrl: s,
            registrationAppId: new URL(s).hostname,
            authProviderAppId: "",
            captchaToken: t,
            ...a ? {
              captchaMode: a
            } : {}
          }), []);
          return (0, n.useEffect)(() => {
            M?.current && O && M.current.contentWindow?.postMessage({
              type: "RENDER_FB_BUTTON",
              payload: {
                buttonSize: z
              }
            }, Z)
          }, [Z, O]), (0, n.useEffect)(() => {
            y && $?.id && l === c.d_.FACEBOOK_AUTH && (async () => {
              try {
                let e = et($, y, b, R),
                  t = new FormData;
                t.append("", e.token), t.append("email", e.email || ""), t.append("emailRetrievalConsent", e.emailRetrievalConsent.toString()), t.append("registrationPlaceUrl", e.registrationPlaceUrl || ""), t.append("registrationAppId", e.registrationAppId || ""), t.append("authProviderAppId", e.authProviderAppId || ""), t.append("captchaToken", e.captchaToken || ""), e.captchaMode && t.append("captchaMode", e.captchaMode), t.append("0", "");
                let s = await T(t);
                if (ee.info({
                    data: {
                      hasError: "error" in s,
                      hasSuccess: "success" in s,
                      errorValue: "error" in s ? s.error : "N/A",
                      statusValue: "status" in s ? s.status : "N/A",
                      responseKeys: Object.keys(s)
                    }
                  }, "[FacebookAuthButton/index.tsx] - Received Facebook auth response"), "error" in s) {
                  let e = s.error || "Facebook login failed",
                    t = s.status || 500,
                    a = Array.isArray(e) ? e.join(", ") : e;
                  if (ee.info({
                      data: {
                        hasErrorMessage: !!e,
                        status: t,
                        includesCaptcha: a.toLowerCase().includes("captcha"),
                        errorType: Array.isArray(e) ? "array" : "string"
                      }
                    }, "[FacebookAuthButton/index.tsx] - Processing Facebook auth error"), a.toLowerCase().includes("captcha")) {
                    ee.info({
                      data: {
                        includesCaptcha: !0,
                        errorCode: f.CaptchaScoreIsTooLow
                      }
                    }, "[FacebookAuthButton/index.tsx] - Triggering captcha challenge"), o(f.CaptchaScoreIsTooLow), g(!1);
                    return
                  }
                  let r = Array.isArray(e) ? e : [e];
                  i(r), o(f.InvalidRequestData), g(!1);
                  return
                }
                s.success && s.payload && (s.payload.isRegistered && (0, C.z0)({
                  Email: $.email,
                  buttonLocation: H,
                  loginRegisterType: j.Q.Facebook
                }, F, "facebook", "", "", H), a({
                  buttonLocation: H,
                  loginRegisterType: j.Q.Facebook
                }), s.payload.isRegistered && K && (A.sj.setItem(P, "no-expiration"), J(!0), Y(!0), d(c.d_.REWARD)), w())
              } catch (e) {
                ee.error({
                  data: {
                    err: e,
                    hasSocialUser: !!$,
                    hasCaptchaToken: !!y
                  }
                }, "[FacebookAuthButton/index.tsx] - Unexpected error during Facebook login"), i(["An unexpected error occurred during login. Please try again."]), o(f.InvalidRequestData), g(!1)
              }
            })()
          }, [y, l]), (0, n.useEffect)(() => {
            y && l === c.d_.SIGN_IN_UP_RESEND_EMAIL_FACEBOOK && (g(!0), (async () => {
              let t = await (0, v.db)(v.lJ.RESEND_EMAIL, {
                method: "POST",
                body: JSON.stringify({
                  email: V,
                  authType: h.hT.Facebook,
                  resendConfirmationFormUrl: R,
                  captchaToken: y,
                  ...b ? {
                    captchaMode: b
                  } : {}
                })
              }, void 0, L);
              if (!(t instanceof AbortSignal)) {
                if (t && "errorCode" in t) {
                  i(t.message), o(t.errorCode);
                  return
                }
                w(), e(V), d(c.d_.EMAIL_SENT_FORM)
              }
            })())
          }, [g, b, y, d, o, i, w, l, R, $, L]), (0, r.jsx)("div", {
            className: _()(x().iframeWrapper),
            style: {
              width: G === m.LB.xxs || G === m.LB.xs ? "360px" : "400px",
              height: "40px"
            },
            "data-sentry-component": "FacebookAuthButton",
            "data-sentry-source-file": "index.tsx",
            children: (0, r.jsx)("iframe", {
              ref: M,
              onLoad: () => B(!0),
              src: Z,
              title: "facebook button iframe",
              id: "facebook-button-iframe",
              height: "40px",
              width: G === m.LB.xxs || G === m.LB.xs ? "360px" : "400px"
            })
          })
        };
      var D = a(76499),
        F = a(87720),
        U = a(70824),
        M = a.n(U),
        O = a(31969),
        B = a(2725),
        G = a(11966),
        $ = a(90242);
      a(35848);
      let q = ({
        loading: e,
        text: t,
        onClick: a,
        classNameFromProps: s
      }) => {
        let i = (0, n.useRef)(null);
        return (0, n.useEffect)(() => {
          setTimeout(() => {
            i.current && i.current.blur()
          }, 0)
        }, []), (0, r.jsx)("div", {
          className: _()("cnupor0", s),
          "data-sentry-component": "ContinueButton",
          "data-sentry-source-file": "ContinueButton.tsx",
          children: (0, r.jsx)($.$, {
            fullWidth: !0,
            size: "small",
            ref: i,
            onClick: a,
            type: "submit",
            tabIndex: 0,
            className: "cnupor1",
            testId: "continue-button",
            "data-sentry-element": "Button",
            "data-sentry-source-file": "ContinueButton.tsx",
            children: e ? (0, r.jsx)(B.a, {
              size: G.Y.MEDIUM
            }) : t
          })
        })
      };
      var z = a(97549),
        W = a.n(z),
        V = a(49051),
        X = a(97950),
        H = a(75283),
        J = a(19253);
      let Y = (0, b.createServerReference)("401f111d96e2ed540266fdf72d0b0022cadb553e54", b.callServer, void 0, b.findSourceMapURL, "checkUser"),
        K = "Please provide a valid email",
        Q = X.Yj().min(1, {
          message: K
        }).regex(/^(?!\.)(?!.*\.\.)[a-zA-Z0-9!$%&'*+=^_`{|}~.-]+[^.@/?#]@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/, {
          message: K
        }),
        Z = ({
          confirmEmailError: e,
          changeEmailConfirmError: t,
          changeEmailConfirmCodeState: a,
          email: s,
          changeEmail: i,
          errors: l,
          changeErrors: u,
          changeErrorCode: m,
          loading: p,
          changeLoading: h,
          emailConfirmState: f,
          setEmailConfirmState: g,
          changeCurrentStep: x,
          authType: y,
          changeAuthType: v,
          currentStep: b,
          onLoginSuccess: S,
          captchaToken: j,
          captchaMode: C,
          getCaptchaToken: w,
          clearCaptchaData: N,
          domainWithProtocolAndLocale: k,
          byGoogle: E,
          byFacebook: I,
          byEmail: A,
          abortSignal: P,
          errorCode: T,
          changeSocialUserToken: U,
          game: B,
          isFrictionlessRegisterEnabled: G = !1
        }) => {
          let $ = async e => {
            let t = Object.fromEntries(e).email,
              a = (0, H.l)(Q, t);
            if (u([]), m(null), t && a) return u([a]);
            g?.(null), i(t), h(!0);
            let s = new FormData;
            s.append("email", t);
            let r = await Y(s);
            if (!(r instanceof AbortSignal)) {
              if (h(!1), 1e3 === r.status) return void u(["Please provide a valid email"]);
              if (1002 === r.status) return void x(c.d_.SIGN_IN_PASSWORD);
              if (1003 === r.status) return void u(["Too many requests. Please wait a moment before trying again."]);
              if (1004 === r.status) return void x(c.d_.SIGN_UP_PASSWORD);
              if (2e3 === r.status) return void u(["Failed to check email"])
            }
          }, z = {
            authType: y,
            changeEmail: i,
            changeAuthType: v,
            onLoginSuccess: S,
            setEmailConfirmState: g,
            changeErrors: u,
            changeErrorCode: m,
            currentStep: b,
            changeCurrentStep: x,
            changeLoading: h,
            captchaToken: j,
            captchaMode: C,
            getCaptchaToken: w,
            clearCaptchaData: N,
            domainWithProtocolAndLocale: k,
            abortSignal: P,
            changeSocialUserToken: U,
            game: B
          }, [X, K] = (0, n.useState)(!1);
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(F.hE, {
              "data-testid": "sign-in-up-header",
              className: _()(M().Title, W().SignInUpTitle),
              "data-sentry-element": "Title",
              "data-sentry-source-file": "index.tsx",
              children: "Sign In or Sign Up"
            }), (0, r.jsx)(F.VY, {
              className: _()(M().Description, W().SignInUpDescription),
              "data-sentry-element": "Description",
              "data-sentry-source-file": "index.tsx",
              children: (G ? [{
                iconUrl: "/media/login/info/feature-icon-container.avif",
                iconAlt: "favorites icon",
                text: "Save Your Favorites"
              }, {
                iconUrl: "/media/login/info/feature-icon-container1.avif",
                iconAlt: "gems icon",
                text: "Earn Bonus Gems"
              }, {
                iconUrl: "/media/login/info/feature-icon-container2.avif",
                iconAlt: "trophy icon",
                text: "Join Leaderboards"
              }] : [{
                iconUrl: "/media/heart.svg",
                iconAlt: "heart icon",
                text: "Receive free boosts"
              }, {
                iconUrl: "/media/message-chat-circle.svg",
                iconAlt: "chat icon",
                text: "Be the first to know about new games"
              }, {
                iconUrl: "/media/trophy.svg",
                iconAlt: "trophy icon",
                text: "Save and track your progress"
              }]).map((e, t) => (0, r.jsxs)("span", {
                className: W().DescriptionItem,
                children: [(0, r.jsx)(O.StaticImage, {
                  width: 24,
                  height: 24,
                  src: e.iconUrl,
                  alt: e.iconAlt
                }), e.text]
              }, t))
            }), "success" === f || "success" === a ? (0, r.jsx)(J.y, {
              type: J.W.success,
              customClassName: W().NotificationMargin,
              testId: "email-confirmation-success",
              children: "Email confirmation complete"
            }) : null, t || e ? (0, r.jsx)(J.y, {
              type: J.W.error,
              customClassName: W().NotificationMargin,
              testId: "email-confirmation-error",
              children: "Email confirmation code is invalid"
            }) : null, (0, r.jsxs)(o.bL, {
              className: _()(d().Root, W().SignInUpEmailForm),
              onSubmit: async e => {
                e.preventDefault();
                let t = new FormData(e.currentTarget);
                await $(t)
              },
              "data-sentry-element": "Root",
              "data-sentry-source-file": "index.tsx",
              children: [(0, r.jsxs)("div", {
                className: W().SocialLogins,
                children: [E && (0, r.jsx)(R, {
                  ...z
                }), I && (0, r.jsx)(L, {
                  email: s,
                  ...z
                })]
              }), A && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsxs)(o.D0, {
                  className: _()(d().Field, W().EmailField),
                  name: "email",
                  children: [(0, r.jsx)(o.JU, {
                    className: _()(d().Label, {
                      [d().Clicked]: X
                    }),
                    children: "Continue with email"
                  }), (0, r.jsx)(o.Ec, {
                    asChild: !0,
                    children: (0, r.jsx)("input", {
                      tabIndex: 0,
                      "data-testid": "sign-in-up-email-input",
                      required: !0,
                      className: _()(d().Input),
                      onClick: () => K(!0),
                      onBlur: () => K(!1),
                      onInput: () => {
                        u([])
                      },
                      name: "email",
                      type: "email",
                      placeholder: "your.email@mail.com",
                      defaultValue: s
                    })
                  }), (0, r.jsx)(o.QB, {
                    match: "valueMissing",
                    children: (0, r.jsx)(D.l, {
                      error: "Please enter your email",
                      testId: "empty-email-error"
                    })
                  }), (0, r.jsx)(o.QB, {
                    match: "typeMismatch",
                    children: (0, r.jsx)(D.l, {
                      error: "Please provide a valid email",
                      testId: "invalid-email-error"
                    })
                  }), (0, r.jsx)(D.l, {
                    error: l?.[0],
                    showSupportLink: T === V.nL.UserIsNotActive,
                    testId: "sign-in-up-email-error"
                  })]
                }), (0, r.jsx)(o.XT, {
                  asChild: !0,
                  tabIndex: 0,
                  children: (0, r.jsx)(q, {
                    classNameFromProps: W().ContinueButtonWrapper,
                    loading: p,
                    text: "Continue"
                  })
                })]
              })]
            })]
          })
        };
      var ee = a(29197),
        et = a.n(ee),
        ea = a(7139),
        es = a(88011),
        er = a(21540),
        en = a(88963);
      let ei = (0, b.createServerReference)("78b9de60ee5c482d0b87beabda9a03da652838b2f7", b.callServer, void 0, b.findSourceMapURL, "login");
      var eo = a(14011);
      let el = ({
        email: e,
        errors: t,
        changeErrors: a,
        changeErrorCode: s,
        currentStep: l,
        changeCurrentStep: m,
        loading: p,
        changeLoading: h,
        onLoginSuccess: f,
        captchaToken: g,
        captchaMode: x,
        getCaptchaToken: y,
        clearCaptchaData: v,
        domainWithProtocolAndLocale: b,
        abortSignal: S
      }) => {
        let [C, w] = (0, n.useState)(""), [k, E] = (0, n.useState)(!1), {
          modalButtonLocation: I
        } = (0, N.h)(), A = (0, eo.useSearchParams)(), P = A.has(es.b_.LOW_SCORE_CAPTCHA), R = A.has(es.b_.BYPASS_CAPTCHA), T = (0, n.useCallback)(e => {
          let t = e.errorCode === i.nL.UserNotConfirmedError,
            r = e.errorCode === i.nL.UserEmailConfirmationCodeIsInvalid,
            n = e.errorCode === i.nL.EmailOrPasswordIsIncorrect,
            o = e.errorCode === i.nL.CaptchaScoreIsTooLow,
            l = e.errorCode === i.nL.CaptchaValidationFailed;
          if (t || r) {
            v(), m(c.d_.RESEND_CONFIRMATION_EMAIL), h(!0), s(e.errorCode), E(!1), y(u.Gf.CONFIRMATION_RESEND);
            return
          }
          if (l || o) {
            s(e.errorCode), E(!1);
            return
          }
          if (n) {
            h(!1), a(e.message), s(e.errorCode), E(!1);
            return
          }
          h(!1), a(e.message), s(e.errorCode), E(!1)
        }, [m, s, a, h, v, y]), L = async e => {
          let t = Object.fromEntries(e).password;
          w(t);
          let r = await (0, en.Oj)(t);
          r ? a([r]) : (a([]), s(null), h(!0), y(l === c.d_.SIGN_IN_PASSWORD ? u.Gf.SIGN_IN : u.Gf.CONFIRMATION_RESEND))
        };
        return (0, n.useEffect)(() => {
          x && E(!1)
        }, [x]), (0, n.useEffect)(() => {
          g && l === c.d_.SIGN_IN_PASSWORD && !k && (async () => {
            let t = new FormData;
            t.append("email", e), t.append("password", C), t.append("captchaToken", g), t.append("registrationPlaceUrl", b), x && t.append("captchaMode", x);
            let r = await ei(t, P, R, x);
            if (r && "error" in r) {
              if ((1022 === r.errorCode || 1023 === r.errorCode) && s(r.errorCode), r.errorCode === i.nL.UserNotConfirmedError) {
                m(c.d_.EMAIL_SENT_FORM), v();
                return
              }
              h(!1), a(Array.isArray(r.error) ? r.error : [r.error || "Login failed"]);
              return
            }
            h(!1), f({
              loginRegisterType: j.Q.Email,
              buttonLocation: I
            }), v()
          })()
        }, [k, E, T, g, h, v, l, m, e, f, b, x, P, R, I, a, s, C, S]), (0, n.useEffect)(() => {
          g && l === c.d_.RESEND_CONFIRMATION_EMAIL && (async () => {
            let t = new FormData;
            t.append("email", e), t.append("authType", c.hT.EmailPassword), t.append("confirmationSource", es.Qq.RESEND_REQUEST_LOGIN), t.append("resendConfirmationFormUrl", b), t.append("captchaToken", g), x && t.append("captchaMode", x);
            let s = await (0, er.N)(t);
            if (s && "error" in s) {
              let e = s.error || "Failed to resend confirmation email";
              a(Array.isArray(e) ? e : [e]);
              return
            }
            h(!1), v(), m(c.d_.EMAIL_SENT_FORM)
          })()
        }, [e, h, x, g, m, s, a, v, l, b, S]), (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(F.hE, {
            "data-testid": "sign-in-password-header",
            className: _()(M().Title, et().SignInPasswordTitle),
            "data-sentry-element": "Title",
            "data-sentry-source-file": "index.tsx",
            children: "Welcome back"
          }), (0, r.jsxs)(F.VY, {
            className: _()(M().DescriptionPassword, et().SignInPasswordDescription),
            "data-sentry-element": "Description",
            "data-sentry-source-file": "index.tsx",
            children: ["Ready to play? ", (0, r.jsx)("br", {}), "Sign in with ", (0, r.jsx)("span", {
              className: M().strong,
              children: e
            })]
          }), (0, r.jsxs)(o.bL, {
            className: _()(d().Root, et().SignInPasswordForm),
            onSubmit: async e => {
              e.preventDefault();
              let t = new FormData(e.currentTarget);
              await L(t)
            },
            "data-sentry-element": "Root",
            "data-sentry-source-file": "index.tsx",
            children: [(0, r.jsx)(ea.s, {
              invalid: t.length > 0,
              name: "password",
              withRequirements: !1,
              placeholder: "your password",
              autofocus: !0,
              onUpdate: () => {
                a([])
              },
              "data-sentry-element": "PasswordField",
              "data-sentry-source-file": "index.tsx"
            }), (0, r.jsx)("div", {
              className: et().ForgotPasswordButtonWrapper,
              children: (0, r.jsx)($.$, {
                variant: "label",
                onClick: () => m(c.d_.FORGOT_PASSWORD),
                "data-sentry-element": "Button",
                "data-sentry-source-file": "index.tsx",
                children: "Forgot password?"
              })
            }), (0, r.jsx)(D.l, {
              error: t?.[0],
              testId: "password-error",
              "data-sentry-element": "AuthError",
              "data-sentry-source-file": "index.tsx"
            }), (0, r.jsx)(o.XT, {
              asChild: !0,
              "data-sentry-element": "Submit",
              "data-sentry-source-file": "index.tsx",
              children: (0, r.jsx)(q, {
                classNameFromProps: et().ContinueButtonWrapper,
                loading: p,
                text: "Continue",
                "data-sentry-element": "ContinueButton",
                "data-sentry-source-file": "index.tsx"
              })
            })]
          })]
        })
      };
      var ed = a(21637),
        ec = a(31329),
        eu = a(56263),
        em = a.n(eu);
      let ep = (0, b.createServerReference)("78fe5493bfc2d56ff4204b61dccfb4a7bbaf9287a2", b.callServer, void 0, b.findSourceMapURL, "registerEmail");
      var eh = a(79038),
        ef = a(2417);
      let eg = ({
        email: e,
        errors: t,
        loading: a,
        changeErrors: s,
        changeErrorCode: i,
        changeLoading: l,
        captchaToken: m,
        getCaptchaToken: p,
        captchaMode: h,
        domainWithProtocolAndLocale: f,
        changeCurrentStep: g,
        clearCaptchaData: x,
        abortSignal: y,
        game: v,
        isFrictionlessRegisterEnabled: b
      }) => {
        let [S, E] = (0, n.useState)(""), [R, T] = (0, n.useState)(!1), [L, D] = (0, n.useState)(null), {
          modalButtonLocation: U,
          setIsRewardActive: B
        } = (0, N.h)(), {
          features: G
        } = (0, k.R)(), {
          loginSuccess: $
        } = (0, I.xV)(), z = (0, eo.useSearchParams)(), W = z.has("__low_score_captcha"), V = z.has("__bypass_captcha"), X = async e => {
          let t = Object.fromEntries(e);
          null === L && D(!1);
          let a = await (0, en.Oj)(t.password);
          a ? s([a]) : (a || s([]), L && (s([]), i(null), l(!0), p(u.Gf.SIGN_UP)))
        };
        return (0, n.useEffect)(() => {
          m && (async () => {
            let t = new FormData;
            t.append("email", e), t.append("password", S), t.append("emailRetrievalConsent", R.toString()), t.append("captchaToken", m), t.append("registrationPlaceUrl", f), h && t.append("captchaMode", h);
            let a = await ep(t, W, V, h);
            if (a && "error" in a) {
              if (1023 === a.errorCode || 1022 === a.errorCode) return i(a.errorCode);
              if (429 === a.status || 503 === a.status) s(Array.isArray(a.error) ? a.error : [a.error || "Registration failed"]);
              else {
                let e = (Array.isArray(a.error) ? a.error : [a.error || "Registration failed"]).filter(e => "string" == typeof e);
                e.some(e => e.includes("Password format")) ? s(["Password format is invalid. Please try again."]) : s(e)
              }
              return l(!1)
            }(0, C.z0)({
              Email: e,
              buttonLocation: U,
              loginRegisterType: j.Q.Email
            }, v, "email", "", "", U);
            let r = !0 === R;
            (0, C.Vz)({
              Identity: a.uid,
              Email: e,
              buttonLocation: U,
              loginRegisterType: j.Q.Email,
              emailConsent: r,
              "MSG-email": r
            }), w.CA.updateConfig({
              baseParams: {
                xsollaId: a.uid,
                loggedIn: !0
              }
            }), l(!1), x(), G.auth.isFrictionlessRegisterEnabled && a?.isFrictionlessLogin ? (A.sj.setItem(P, a?.frictionlessLoginExpiresAt || "no-expiration"), B(!0), $({
              buttonLocation: U,
              loginRegisterType: j.Q.Email,
              isFrictionlessLogin: !0
            }), g(c.d_.REWARD)) : g(c.d_.EMAIL_SENT_FORM)
          })()
        }, [m, l, x, g, e, R, S, f, h, s, i, y, G.auth.isFrictionlessRegisterEnabled, $, U, v, W, V, B]), (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(F.hE, {
            "data-testid": "sign-up-password-header",
            className: _()(M().Title, em().SignUpPasswordTitle),
            "data-sentry-element": "Title",
            "data-sentry-source-file": "index.tsx",
            children: "Choose your password"
          }), (0, r.jsxs)(F.VY, {
            className: _()(M().Description, em().SignUpPasswordDescription),
            "data-sentry-element": "Description",
            "data-sentry-source-file": "index.tsx",
            children: [(0, r.jsx)("span", {
              children: "You are signing up with "
            }), (0, r.jsx)("span", {
              className: M().strong,
              children: e.trim()
            })]
          }), (0, r.jsxs)(o.bL, {
            className: _()(d().Root, em().SignUpPasswordForm),
            onSubmit: async e => {
              e.preventDefault();
              let t = new FormData(e.currentTarget);
              await X(t)
            },
            "data-sentry-element": "Root",
            "data-sentry-source-file": "index.tsx",
            children: [(0, r.jsx)(ea.s, {
              name: "password",
              withRequirements: !0,
              invalid: t.length > 0,
              errors: t,
              onUpdate: e => {
                E(e), s([])
              },
              placeholder: "your password",
              "data-sentry-element": "PasswordField",
              "data-sentry-source-file": "index.tsx"
            }), (0, r.jsxs)(o.D0, {
              tabIndex: ef.Ee.AUTO,
              className: _()(d().Field, em().CheckboxField),
              name: "emailRetrievalConsent",
              onKeyDown: e => "Enter" === e.key && T(!R),
              "data-sentry-element": "Field",
              "data-sentry-source-file": "index.tsx",
              children: [(0, r.jsx)(ec.bL, {
                className: em().CheckboxRoot,
                id: "emailRetrievalConsent",
                tabIndex: ef.Ee.NOINTERACTION,
                onCheckedChange: e => {
                  T(!!e)
                },
                checked: R,
                "data-sentry-element": "CheckboxRoot",
                "data-sentry-source-file": "index.tsx",
                children: (0, r.jsx)(ec.C1, {
                  className: em().CheckboxIndicator,
                  "data-sentry-element": "CheckboxIndicator",
                  "data-sentry-source-file": "index.tsx",
                  children: (0, r.jsx)(O.StaticImage, {
                    src: "/media/check-icon.svg",
                    alt: "check-icon",
                    width: 16,
                    height: 16,
                    "data-sentry-element": "StaticImage",
                    "data-sentry-source-file": "index.tsx"
                  })
                })
              }), (0, r.jsx)(o.JU, {
                htmlFor: "emailRetrievalConsent",
                className: em().CheckboxLabel,
                "data-sentry-element": "Label",
                "data-sentry-source-file": "index.tsx",
                children: "Email me updates on new games, special events, and exclusive offers"
              })]
            }), (0, r.jsxs)(o.D0, {
              className: _()(d().Field, em().CheckboxField, em().gdprConsent),
              name: "gdprConsent",
              onKeyDown: e => "Enter" === e.key && D(!L),
              tabIndex: ef.Ee.AUTO,
              "data-sentry-element": "Field",
              "data-sentry-source-file": "index.tsx",
              children: [(0, r.jsxs)("div", {
                children: [(0, r.jsx)(ec.bL, {
                  onClick: () => D(!L),
                  className: _()(em().CheckboxRoot, {
                    [em().invalid]: null !== L && !L
                  }),
                  id: "gdprConsent",
                  tabIndex: ef.Ee.NOINTERACTION,
                  onCheckedChange: e => D(!0 === e),
                  checked: !!L,
                  "data-testid": "auth-agreement-checkbox",
                  "data-sentry-element": "CheckboxRoot",
                  "data-sentry-source-file": "index.tsx",
                  children: (0, r.jsx)(ec.C1, {
                    className: em().CheckboxIndicator,
                    "data-sentry-element": "CheckboxIndicator",
                    "data-sentry-source-file": "index.tsx",
                    children: (0, r.jsx)(O.StaticImage, {
                      src: "/media/check-icon.svg",
                      alt: "check-icon",
                      width: 16,
                      height: 16,
                      "data-sentry-element": "StaticImage",
                      "data-sentry-source-file": "index.tsx"
                    })
                  })
                }), (0, r.jsxs)(o.JU, {
                  htmlFor: "gdprConsent",
                  className: _()(em().CheckboxLabel),
                  "data-sentry-element": "Label",
                  "data-sentry-source-file": "index.tsx",
                  children: ["I have read and agree to Arkadium’s", " ", (0, r.jsx)(eh.LocalizedLink, {
                    className: em().LegalLink,
                    href: "/privacy-policy",
                    target: "_blank",
                    "data-sentry-element": "LocalizedLink",
                    "data-sentry-source-file": "index.tsx",
                    children: "Privacy Policy"
                  }), " ", "and", " ", (0, r.jsx)(eh.LocalizedLink, {
                    className: em().LegalLink,
                    href: "/player-agreement",
                    target: "_blank",
                    "data-sentry-element": "LocalizedLink",
                    "data-sentry-source-file": "index.tsx",
                    children: "Player Agreement"
                  }), "."]
                })]
              }), null !== L && !L && (0, r.jsx)("span", {
                className: em().gdprConsentError,
                "data-testid": "consent-error",
                children: "You must agree to the terms before proceeding"
              })]
            }), (0, r.jsx)(o.XT, {
              asChild: !0,
              "data-sentry-element": "Submit",
              "data-sentry-source-file": "index.tsx",
              children: (0, r.jsx)(q, {
                loading: a,
                text: b ? "Create profile" : "Continue",
                "data-testid": "auth-submit-button",
                "data-sentry-element": "ContinueButton",
                "data-sentry-source-file": "index.tsx"
              })
            }), b && (0, r.jsxs)("p", {
              className: em().frictionlessRegisterDescription,
              children: ["A confirmation email will be sent — you have ", (0, r.jsx)("b", {
                children: "7 days"
              }), " to complete your sign up\xa0​"]
            })]
          })]
        })
      };
      var ex = a(51312),
        ey = a.n(ex),
        e_ = a(37914);
      let ev = (0, b.createServerReference)("407af6d55fbe7946316dc7106926f992ac532397c1", b.callServer, void 0, b.findSourceMapURL, "requestPasswordReset"),
        eb = ({
          email: e,
          errors: t,
          loading: a,
          changeErrors: s,
          changeErrorCode: i,
          changeCurrentStep: l,
          changeLoading: m,
          captchaToken: p,
          captchaMode: h,
          getCaptchaToken: f,
          clearCaptchaData: g,
          domainWithProtocolAndLocale: x,
          authType: y,
          isThankYouForm: v,
          abortSignal: b,
          isFrictionlessRegisterEnabled: S
        }) => {
          let [j, C] = (0, n.useState)(!1);
          return (0, n.useEffect)(() => {
            p && v && (async () => {
              let t = new FormData;
              t.append("email", e), t.append("registrationPlaceUrl", x), t.append("resetPasswordConfirmationFormUrl", x), t.append("captchaToken", p), h && t.append("captchaMode", h);
              let a = await ev(t);
              if (a && "error" in a) return 1022 === a.errorCode || 1023 === a.errorCode ? i(a.errorCode) : (m(!1), s(Array.isArray(a.error) ? a.error : [a.error || "Password reset failed"]));
              m(!1), C(!0), g()
            })()
          }, [v, p, m, g, l, e, x, h, s, i, b]), (0, n.useEffect)(() => {
            p && !v && (m(!0), (async () => {
              let t = new FormData;
              t.append("email", e), t.append("authType", y ?? c.hT.EmailPassword), t.append("confirmationSource", es.Qq.RESEND_REQUEST_LOGIN), t.append("resendConfirmationFormUrl", x), t.append("captchaToken", p), h && t.append("captchaMode", h);
              let a = await (0, er.N)(t);
              if (m(!1), a && "error" in a) return s(Array.isArray(a.error) ? a.error : [a.error || "Resend failed"]);
              C(!0), g()
            })())
          }, [v, p, m, g, l, e, x, h, s, i, y, b]), (0, r.jsxs)(r.Fragment, {
            children: [v ? null : (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(F.hE, {
                "data-testid": "email-sent-header",
                className: _()(M().Title, ey().EmailSentTitle),
                "data-sentry-element": "Title",
                "data-sentry-source-file": "index.tsx",
                children: S ? "Confirm your email" : "You're almost done"
              }), (0, r.jsxs)(F.VY, {
                className: _()(ey().EmailSentDescription),
                "data-sentry-element": "Description",
                "data-sentry-source-file": "index.tsx",
                children: ["We sent an email to ", (0, r.jsx)("span", {
                  className: M().strong,
                  children: e
                })]
              }), (0, r.jsx)(F.VY, {
                className: _()(ey().EmailSentDescription),
                "data-sentry-element": "Description",
                "data-sentry-source-file": "index.tsx",
                children: "Follow the instructions to finish signing up"
              }), (0, r.jsx)(F.VY, {
                className: _()(ey().EmailSentDescription),
                "data-sentry-element": "Description",
                "data-sentry-source-file": "index.tsx",
                children: "Can’t find your email? Check your spam folder or resend it​"
              })]
            }), (0, r.jsxs)(o.bL, {
              className: _()(d().Root, ey().EmailSentForm),
              action: () => {
                s([]), i(null), C(!1), m(!0), v ? f(u.Gf.PASSWORD_RESET) : f(u.Gf.CONFIRMATION_RESEND)
              },
              "data-sentry-element": "Root",
              "data-sentry-source-file": "index.tsx",
              children: [(0, r.jsx)(D.l, {
                error: t?.[0],
                "data-sentry-element": "AuthError",
                "data-sentry-source-file": "index.tsx"
              }), (0, r.jsx)(o.XT, {
                asChild: !0,
                "data-sentry-element": "Submit",
                "data-sentry-source-file": "index.tsx",
                children: (0, r.jsxs)("div", {
                  className: _()(ey().EmailSentResendButton, {
                    [ey().ThankYouButton]: v
                  }),
                  children: [(0, r.jsx)(q, {
                    classNameFromProps: ey().ContinueButtonWrapper,
                    loading: a,
                    text: "Resend email",
                    "data-sentry-element": "ContinueButton",
                    "data-sentry-source-file": "index.tsx"
                  }), (0, r.jsx)(J.y, {
                    type: J.W.success,
                    customClassName: _()(ey().EmailSentNotification, {
                      [ey().visible]: j
                    }),
                    "data-sentry-element": "Toast",
                    "data-sentry-source-file": "index.tsx",
                    children: "Email sent"
                  })]
                })
              })]
            }), (0, r.jsx)(e_.X, {
              "data-sentry-element": "ContactSupportBlock",
              "data-sentry-source-file": "index.tsx"
            })]
          })
        };
      var eS = a(91490),
        ej = a.n(eS);
      let eC = ({
        email: e,
        errors: t,
        loading: a,
        changeErrors: s,
        changeErrorCode: i,
        changeCurrentStep: l,
        changeLoading: m,
        captchaToken: p,
        captchaMode: h,
        getCaptchaToken: f,
        clearCaptchaData: g,
        domainWithProtocolAndLocale: x,
        changeEmail: y,
        abortSignal: v
      }) => ((0, n.useEffect)(() => {
        p && (async () => {
          let t = new FormData;
          t.append("email", e), t.append("registrationPlaceUrl", x), t.append("resetPasswordConfirmationFormUrl", x), t.append("captchaToken", p), h && t.append("captchaMode", h);
          let a = await ev(t);
          if (a && "error" in a) return 1022 === a.errorCode || 1023 === a.errorCode ? i(a.errorCode) : (m(!1), s(Array.isArray(a.error) ? a.error : [a.error || "Password reset failed"]));
          g(), l(c.d_.THANK_YOU_FORM)
        })()
      }, [p, m, g, l, e, x, h, s, i, v]), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(F.hE, {
          "data-testid": "forgot-password-header",
          className: _()(M().Title, ej().ForgotPasswordTitle),
          "data-sentry-element": "Title",
          "data-sentry-source-file": "index.tsx",
          children: "Reset your password"
        }), (0, r.jsx)(F.VY, {
          className: _()(M().DescriptionPassword, ej().ForgotPasswordDescription),
          "data-sentry-element": "Description",
          "data-sentry-source-file": "index.tsx",
          children: "Enter the email linked to your Arkadium profile to receive a reset link"
        }), (0, r.jsxs)(o.bL, {
          className: _()(d().Root, ej().ForgotPasswordForm),
          onSubmit: async e => {
            e.preventDefault(), (e => {
              s([]);
              let t = Object.fromEntries(e).email,
                a = (0, H.l)(Q, t);
              if (t && a) return s([a]);
              y(t), m(!0), f(u.Gf.PASSWORD_RESET)
            })(new FormData(e.currentTarget))
          },
          "data-sentry-element": "Root",
          "data-sentry-source-file": "index.tsx",
          children: [(0, r.jsxs)(o.D0, {
            className: _()(d().Field),
            name: "email",
            "data-sentry-element": "Field",
            "data-sentry-source-file": "index.tsx",
            children: [(0, r.jsx)(o.JU, {
              className: d().Label,
              "data-sentry-element": "Label",
              "data-sentry-source-file": "index.tsx",
              children: "Email"
            }), (0, r.jsx)(o.Ec, {
              asChild: !0,
              "data-sentry-element": "Control",
              "data-sentry-source-file": "index.tsx",
              children: (0, r.jsx)("input", {
                tabIndex: ef.Ee.AUTO,
                required: !0,
                defaultValue: e,
                className: _()(d().Input),
                name: "email",
                type: "email",
                placeholder: "your.email@mail.com",
                onInput: () => {
                  s([])
                }
              })
            }), (0, r.jsx)(o.QB, {
              match: "valueMissing",
              "data-sentry-element": "Message",
              "data-sentry-source-file": "index.tsx",
              children: (0, r.jsx)(D.l, {
                error: "Please enter your email",
                testId: "empty-email-error",
                "data-sentry-element": "AuthError",
                "data-sentry-source-file": "index.tsx"
              })
            }), (0, r.jsx)(o.QB, {
              match: "typeMismatch",
              "data-sentry-element": "Message",
              "data-sentry-source-file": "index.tsx",
              children: (0, r.jsx)(D.l, {
                error: "Please provide a valid email",
                testId: "invalid-email-error",
                "data-sentry-element": "AuthError",
                "data-sentry-source-file": "index.tsx"
              })
            }), (0, r.jsx)(D.l, {
              error: t?.[0],
              "data-sentry-element": "AuthError",
              "data-sentry-source-file": "index.tsx"
            })]
          }), (0, r.jsx)(o.XT, {
            asChild: !0,
            "data-sentry-element": "Submit",
            "data-sentry-source-file": "index.tsx",
            children: (0, r.jsx)(q, {
              classNameFromProps: ej().ContinueButtonWrapper,
              loading: a,
              text: "Reset password",
              "data-sentry-element": "ContinueButton",
              "data-sentry-source-file": "index.tsx"
            })
          })]
        })]
      }));
      var ew = a(28044),
        eN = a.n(ew);
      let ek = (0, b.createServerReference)("40afba2106ddfdc54a7d2377d00c1cc9b08dd3677f", b.callServer, void 0, b.findSourceMapURL, "confirmPasswordReset"),
        eE = ({
          errors: e,
          loading: t,
          changeErrors: a,
          changeErrorCode: s,
          changeCurrentStep: i,
          changeLoading: l,
          captchaToken: m,
          captchaMode: p,
          getCaptchaToken: h,
          clearCaptchaData: f,
          domainWithProtocolAndLocale: g,
          resetPasswordRecoveryCode: x,
          abortSignal: y
        }) => {
          let [v, b] = (0, n.useState)(""), S = async e => {
            let t = Object.fromEntries(e),
              s = t.newPassword,
              r = t.confirmPassword;
            b(s);
            let n = await (0, en.Oj)(s, r);
            n ? a([n]) : (a([]), l(!0), h(u.Gf.PASSWORD_RESET))
          };
          return (0, n.useEffect)(() => {
            m && (async () => {
              let e = new FormData;
              e.append("newPassword", v), e.append("resetCode", x), e.append("captchaToken", m), p && e.append("captchaMode", p);
              let t = await ek(e);
              if (t && "error" in t) return 1022 === t.errorCode || 1023 === t.errorCode ? s(t.errorCode) : (l(!1), a(Array.isArray(t.error) ? t.error : [t.error || "Password reset failed"]));
              i(c.d_.RESET_PASSWORD_FORM_SUCCESS), f()
            })()
          }, [m, l, f, i, g, p, a, s, v, x, y]), (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(F.hE, {
              "data-testid": "reset-password-header",
              className: _()(M().Title, eN().ResetPasswordTitle),
              "data-sentry-element": "Title",
              "data-sentry-source-file": "index.tsx",
              children: "Choose your password"
            }), (0, r.jsx)(F.VY, {
              className: _()(M().DescriptionPassword, eN().ResetPasswordDescription),
              "data-sentry-element": "Description",
              "data-sentry-source-file": "index.tsx",
              children: "Create a new password to regain access to your account."
            }), (0, r.jsxs)(o.bL, {
              className: _()(d().Root, eN().ResetPasswordForm, {
                [eN().invalid]: e.length > 0
              }),
              onSubmit: e => {
                e.preventDefault(), S(new FormData(e.currentTarget))
              },
              "data-sentry-element": "Root",
              "data-sentry-source-file": "index.tsx",
              children: [(0, r.jsx)(ea.s, {
                name: "newPassword",
                withRequirements: !0,
                invalid: e.length > 0,
                placeholder: "your password",
                onUpdate: () => {
                  a([])
                },
                "data-sentry-element": "PasswordField",
                "data-sentry-source-file": "index.tsx"
              }), (0, r.jsx)(ea.s, {
                name: "confirmPassword",
                label: "Repeat password",
                withRequirements: !1,
                invalid: e.length > 0,
                placeholder: "repeat password",
                onUpdate: () => {
                  a([])
                },
                "data-sentry-element": "PasswordField",
                "data-sentry-source-file": "index.tsx"
              }), (0, r.jsx)(D.l, {
                error: e?.[0],
                "data-sentry-element": "AuthError",
                "data-sentry-source-file": "index.tsx"
              }), (0, r.jsx)(o.XT, {
                asChild: !0,
                "data-sentry-element": "Submit",
                "data-sentry-source-file": "index.tsx",
                children: (0, r.jsx)(q, {
                  classNameFromProps: eN().ContinueButtonWrapper,
                  loading: t,
                  text: "Continue",
                  "data-sentry-element": "ContinueButton",
                  "data-sentry-source-file": "index.tsx"
                })
              })]
            })]
          })
        };
      var eI = a(40087),
        eA = a.n(eI);
      let eP = ({
        changeErrors: e,
        changeErrorCode: t,
        changeCurrentStep: a,
        loading: s
      }) => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(F.hE, {
          "data-testid": "reset-password-success-header",
          className: _()(M().Title, eA().ResetPasswordSuccessTitle),
          "data-sentry-element": "Title",
          "data-sentry-source-file": "index.tsx",
          children: "Success"
        }), (0, r.jsx)(F.VY, {
          className: _()(M().DescriptionPassword, eA().ResetPasswordSuccessDescription),
          "data-sentry-element": "Description",
          "data-sentry-source-file": "index.tsx",
          children: "Your password has been reset."
        }), (0, r.jsx)(F.VY, {
          className: _()(M().DescriptionPassword, eA().ResetPasswordSuccessDescription),
          "data-sentry-element": "Description",
          "data-sentry-source-file": "index.tsx",
          children: "Use your new password the next time you log in."
        }), (0, r.jsx)(o.bL, {
          className: _()(d().Root, eA().ResetPasswordSuccessForm),
          action: () => {
            e([]), t(null), a(c.d_.SIGN_IN_UP_EMAIL)
          },
          "data-sentry-element": "Root",
          "data-sentry-source-file": "index.tsx",
          children: (0, r.jsx)(o.XT, {
            asChild: !0,
            "data-sentry-element": "Submit",
            "data-sentry-source-file": "index.tsx",
            children: (0, r.jsx)(q, {
              classNameFromProps: eA().ContinueButtonWrapper,
              loading: s,
              text: "Login",
              "data-sentry-element": "ContinueButton",
              "data-sentry-source-file": "index.tsx"
            })
          })
        }), (0, r.jsx)(e_.X, {
          "data-sentry-element": "ContactSupportBlock",
          "data-sentry-source-file": "index.tsx"
        })]
      });
      a(96743);
      var eR = "_18u6gkj1";
      let eT = ({
        email: e,
        loading: t,
        errors: a,
        changeErrors: s,
        changeErrorCode: n,
        changeCurrentStep: i,
        changeLoading: o,
        captchaToken: l,
        captchaMode: d,
        getCaptchaToken: c,
        clearCaptchaData: u,
        domainWithProtocolAndLocale: m,
        authType: p,
        abortSignal: h
      }) => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(F.hE, {
          className: "_18u6gkj0",
          "data-sentry-element": "Title",
          "data-sentry-source-file": "index.tsx",
          children: "Thank you"
        }), (0, r.jsxs)(F.VY, {
          className: eR,
          "data-sentry-element": "Description",
          "data-sentry-source-file": "index.tsx",
          children: ["We sent an email to ", (0, r.jsx)("strong", {
            className: "_18u6gkj2",
            children: e
          }), " with instructions"]
        }), (0, r.jsx)(F.VY, {
          className: eR,
          "data-sentry-element": "Description",
          "data-sentry-source-file": "index.tsx",
          children: "Can’t find the email? Check your Spam folder or resend it"
        }), (0, r.jsx)(eb, {
          isThankYouForm: !0,
          email: e,
          loading: t,
          errors: a,
          changeErrors: s,
          changeErrorCode: n,
          changeLoading: o,
          changeCurrentStep: i,
          domainWithProtocolAndLocale: m,
          captchaToken: l,
          captchaMode: d,
          getCaptchaToken: c,
          clearCaptchaData: u,
          authType: p,
          abortSignal: h,
          "data-sentry-element": "EmailSentForm",
          "data-sentry-source-file": "index.tsx"
        })]
      });
      var eL = a(98618),
        eD = a(54653),
        eF = a.n(eD);
      let eU = "Please provide a valid email",
        eM = X.Yj().min(1, {
          message: eU
        }).regex(/^(?!\.)(?!.*\.\.)[a-zA-Z0-9!$%&'*+=^_`{|}~.-]+[^.@/?#]@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/, {
          message: eU
        }),
        eO = ({
          email: e,
          changeEmail: t,
          errors: a,
          changeErrors: s,
          changeErrorCode: i,
          loading: l,
          changeLoading: m,
          changeCurrentStep: p,
          currentStep: h,
          captchaToken: f,
          captchaMode: g,
          getCaptchaToken: x,
          clearCaptchaData: y,
          domainWithProtocolAndLocale: b,
          abortSignal: S,
          socialUserToken: j
        }) => {
          let C = async e => {
            let a = Object.fromEntries(e).email,
              r = (0, H.l)(eM, a);
            if (s([]), a && r) return s([r]);
            t(a), m(!0), x(u.Gf.SIGN_IN)
          }, w = (0, n.useCallback)((t, a, s) => ({
            token: j ?? "",
            email: e,
            emailRetrievalConsent: !1,
            registrationPlaceUrl: s,
            registrationAppId: new URL(s).hostname,
            authProviderAppId: "",
            captchaToken: t,
            ...a ? {
              captchaMode: a
            } : {}
          }), [e, j]);
          (0, n.useEffect)(() => {
            f && h === c.d_.REQUEST_EMAIL && (async () => {
              let e = w(f, g, b),
                t = await (0, v.db)(v.lJ.AUTH_BY_FACEBOOK, {
                  method: "POST",
                  body: JSON.stringify(e)
                }, void 0, S);
              if (!(t instanceof AbortSignal)) {
                if (t && "errorCode" in t) {
                  if (t.errorCode === V.nL.UserNotConfirmedError) {
                    m(!1), i(null), s([]), y(), p(c.d_.EMAIL_SENT_FORM);
                    return
                  }
                  s(t.message), i(t.errorCode), m(!1);
                  return
                }
                m(!1), y(), p(c.d_.EMAIL_SENT_FORM)
              }
            })()
          }, [e, m, g, f, p, i, s, y, h, b, S]);
          let [N, k] = (0, n.useState)(!1);
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(D.l, {
              customClassName: eF().RequestEmailError,
              error: "Sorry, we couldn't confirm your email​",
              "data-sentry-element": "AuthError",
              "data-sentry-source-file": "index.tsx"
            }), (0, r.jsx)(F.hE, {
              "data-testid": "request-email-header",
              className: _()(M().Title, eF().RequestEmailTitle),
              "data-sentry-element": "Title",
              "data-sentry-source-file": "index.tsx",
              children: "Complete your account"
            }), (0, r.jsx)(F.VY, {
              className: _()(M().Description, eF().RequestEmailDescription),
              "data-sentry-element": "Description",
              "data-sentry-source-file": "index.tsx",
              children: (0, r.jsx)("span", {
                className: eF().DescriptionItem,
                children: "We've noticed there isn't an email associated with your profile. Please add your email below to complete your account. Don't worry, you will still be able to sign in using Facebook."
              })
            }), (0, r.jsx)(o.bL, {
              className: _()(d().Root, eF().RequestEmailForm),
              onSubmit: async e => {
                e.preventDefault();
                let t = new FormData(e.currentTarget);
                await C(t)
              },
              "data-sentry-element": "Root",
              "data-sentry-source-file": "index.tsx",
              children: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsxs)(o.D0, {
                  className: _()(d().Field, eF().EmailField),
                  name: "email",
                  "data-sentry-element": "Field",
                  "data-sentry-source-file": "index.tsx",
                  children: [(0, r.jsx)(o.JU, {
                    className: _()(d().Label, {
                      [d().Clicked]: N
                    }),
                    "data-sentry-element": "Label",
                    "data-sentry-source-file": "index.tsx",
                    children: "Continue with email"
                  }), (0, r.jsx)(o.Ec, {
                    asChild: !0,
                    "data-sentry-element": "Control",
                    "data-sentry-source-file": "index.tsx",
                    children: (0, r.jsx)("input", {
                      tabIndex: 0,
                      "data-testid": "request-email-input",
                      required: !0,
                      className: _()(d().Input),
                      onClick: () => k(!0),
                      onBlur: () => k(!1),
                      onInput: () => {
                        s([])
                      },
                      name: "email",
                      type: "email",
                      placeholder: "your.email@mail.com",
                      defaultValue: e
                    })
                  }), (0, r.jsx)(o.QB, {
                    match: "valueMissing",
                    "data-sentry-element": "Message",
                    "data-sentry-source-file": "index.tsx",
                    children: (0, r.jsx)(D.l, {
                      error: "Please enter your email",
                      testId: "empty-email-error",
                      "data-sentry-element": "AuthError",
                      "data-sentry-source-file": "index.tsx"
                    })
                  }), (0, r.jsx)(o.QB, {
                    match: "typeMismatch",
                    "data-sentry-element": "Message",
                    "data-sentry-source-file": "index.tsx",
                    children: (0, r.jsx)(D.l, {
                      error: "Please provide a valid email",
                      testId: "invalid-email-error",
                      "data-sentry-element": "AuthError",
                      "data-sentry-source-file": "index.tsx"
                    })
                  }), (0, r.jsx)(D.l, {
                    error: a?.[0],
                    "data-sentry-element": "AuthError",
                    "data-sentry-source-file": "index.tsx"
                  })]
                }), (0, r.jsx)(o.XT, {
                  asChild: !0,
                  tabIndex: 0,
                  "data-sentry-element": "Submit",
                  "data-sentry-source-file": "index.tsx",
                  children: (0, r.jsx)(q, {
                    loading: l,
                    text: "Continue",
                    "data-sentry-element": "ContinueButton",
                    "data-sentry-source-file": "index.tsx"
                  })
                })]
              })
            })]
          })
        };
      var eB = a(10447),
        eG = a(48976),
        e$ = a(61181),
        eq = a(39243),
        ez = a(26778),
        eW = a(50990),
        eV = a(40725),
        eX = a(28062);
      a(57690);
      var eH = "_5czckka",
        eJ = a(38841),
        eY = a(19888);
      let eK = (e, t) => e + Math.random() * (t - e);

      function eQ({
        size: e,
        hue: t = 0
      }) {
        return (0, r.jsxs)("svg", {
          width: e,
          height: e,
          viewBox: "0 0 40 42",
          style: {
            overflow: "visible",
            filter: `hue-rotate(${t}deg) drop-shadow(0 2px 5px rgba(80,0,120,.5))`
          },
          "data-sentry-element": "svg",
          "data-sentry-component": "GemIcon",
          "data-sentry-source-file": "index.tsx",
          children: [(0, r.jsx)("polygon", {
            points: "20,2  9,14  20,11  31,14",
            fill: "#f0abfc",
            "data-sentry-element": "polygon",
            "data-sentry-source-file": "index.tsx"
          }), (0, r.jsx)("polygon", {
            points: "9,14  4,36  20,27  20,11",
            fill: "#d946ef",
            "data-sentry-element": "polygon",
            "data-sentry-source-file": "index.tsx"
          }), (0, r.jsx)("polygon", {
            points: "31,14 36,36 20,27  20,11",
            fill: "#9333ea",
            "data-sentry-element": "polygon",
            "data-sentry-source-file": "index.tsx"
          }), (0, r.jsx)("polygon", {
            points: "4,36  20,40 36,36  20,27",
            fill: "#7e22ce",
            "data-sentry-element": "polygon",
            "data-sentry-source-file": "index.tsx"
          }), (0, r.jsx)("polygon", {
            points: "20,6  15,13 20,11  25,13",
            fill: "rgba(255,255,255,.38)",
            "data-sentry-element": "polygon",
            "data-sentry-source-file": "index.tsx"
          })]
        })
      }

      function eZ({
        gem: e,
        sourcePos: t,
        pouchPos: a,
        onComplete: s
      }) {
        let n = t.x + e.burstDx,
          i = t.y + e.burstDy,
          o = a.x,
          l = a.y - 30,
          d = (n + o) * .5 + e.arcSway,
          c = Math.min(i, l) - .3 * Math.abs(i - l) - 28,
          u = Array.from({
            length: 60
          }, (e, t) => {
            let a = t / 59;
            return {
              x: (1 - a) * (1 - a) * n + 2 * (1 - a) * a * d + a * a * o,
              y: (1 - a) * (1 - a) * i + 2 * (1 - a) * a * c + a * a * l
            }
          });
        return (0, r.jsx)(eY.P.div, {
          initial: {
            x: t.x,
            y: t.y,
            opacity: 0,
            scale: .5,
            rotate: 0
          },
          animate: {
            x: [t.x, n, n, ...u.map(e => e.x)],
            y: [t.y, i, i, ...u.map(e => e.y)],
            opacity: [0, 1, 1, ...Array(u.length).fill(1).map((e, t) => {
              let a = t / (u.length - 1);
              return a > .75 ? 1 - (a - .75) / .25 * .95 : 1
            })],
            scale: [.5, 1, 1, ...Array(u.length).fill(1).map((e, t) => {
              let a = t / (u.length - 1);
              return a > .75 ? 1 - (a - .75) / .25 * .5 : 1
            })],
            rotate: [0, .1 * e.spinSpeed, .1 * e.spinSpeed, ...Array(u.length).fill(0).map((t, a) => {
              let s = a / (u.length - 1);
              return .08 * e.spinSpeed + e.spinSpeed * s * .5
            })]
          },
          transition: {
            delay: e.delay,
            times: [0, .2875816993464052, .3333333333333333, 1],
            duration: 1.53,
            ease: [
              [.33, 1, .68, 1], "linear", [.42, 0, .58, 1]
            ]
          },
          onAnimationComplete: s,
          style: {
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 60,
            pointerEvents: "none",
            willChange: "transform, opacity"
          },
          "data-sentry-element": "motion.div",
          "data-sentry-component": "FlyingGem",
          "data-sentry-source-file": "index.tsx",
          children: (0, r.jsx)("div", {
            style: {
              transform: "translate(-50%, -50%)"
            },
            children: (0, r.jsx)(eQ, {
              size: e.size,
              hue: e.hue,
              "data-sentry-element": "GemIcon",
              "data-sentry-source-file": "index.tsx"
            })
          })
        })
      }
      var e0 = a(33090);
      let e1 = ["family-feud", "word-wipe", "word-wipe-2", "hurdle", "free-8-ball-pool", "bubble-shooter", "price-is-right-plinko", "connect-the-dots-color-match", "block-champ-2", "mahjongg-solitaire-legends", "solitaire-kitchen", "journey-match-3d", "mahjongg-dimensions"];

      function e2({
        isShopFeature: e = !1,
        onComplete: t
      }) {
        let [a, s] = (0, n.useState)(!1), [i, o] = (0, n.useState)(!1), [l, d] = (0, n.useState)([]), c = "true" === (0, eJ.env)("NEXT_PUBLIC_TOGGLE_TRAILING_SLASH_ENABLED") ? `${v.lJ.GAME_DATA_BY_SLUG}/` : v.lJ.GAME_DATA_BY_SLUG, [u] = (0, n.useState)(() => Array.from({
          length: 22
        }, (e, t) => {
          let a = t % 5,
            s = Math.floor(t / 5);
          return {
            id: t,
            burstDx: (a - 2) * 11 + eK(-4, 4),
            burstDy: -(10 * s + eK(6, 14)),
            delay: .088 * s + .018 * a,
            size: eK(17, 24),
            spinSpeed: eK(-300, 300),
            arcSway: eK(-10, 10),
            hue: eK(-8, 8)
          }
        })), [m, p] = (0, n.useState)("idle"), [h, f] = (0, n.useState)(0), [g, x] = (0, n.useState)([]), {
          setIsFrictionlessLogin: y
        } = (0, I.xV)(), [_, b] = (0, n.useState)(null), S = (0, n.useRef)(null), j = (0, n.useRef)(null), w = (0, n.useRef)(null), N = (0, n.useCallback)(async () => {
          if ("idle" !== m) return;
          (0, C.c7)();
          let t = S.current?.getBoundingClientRect(),
            a = j.current?.getBoundingClientRect(),
            r = w.current?.getBoundingClientRect();
          if (t) b({
            source: a ? {
              x: a.left - t.left + a.width / 2,
              y: a.top - t.top + a.height / 2
            } : {
              x: 0,
              y: 0
            },
            pouch: r ? {
              x: r.left - t.left + .5 * r.width,
              y: r.top - t.top + .37 * r.height
            } : {
              x: 0,
              y: 0
            }
          });
          else b({
            source: {
              x: 0,
              y: 0
            },
            pouch: {
              x: 0,
              y: 0
            }
          });
          if (p("flying"), x(u), o(!0), !e) {
            let e = new URLSearchParams;
            e1.forEach(t => e.append("slug", t)), fetch(`${c}?${e.toString()}`).then(e => e.json()).then(e => {
              d(Array.isArray(e) ? e : []), s(!0)
            }).catch(() => d([]))
          }
        }, [c, m, u, e]);
        (0, n.useEffect)(() => {
          if ("done" === m) {
            if (e) {
              y(!1);
              let e = setTimeout(() => t?.(), 3e3);
              return () => clearTimeout(e)
            }
            a && y(!1)
          }
        }, [m, a, y, e, t]);
        let k = (0, n.useCallback)(() => {
          f(e => {
            let t = e + 1;
            return 22 === t && p("done"), t
          })
        }, []);
        return (0, r.jsxs)("div", {
          ref: S,
          className: "_5czckk4",
          "data-testid": "gems-reward",
          "data-sentry-component": "GemsReward",
          "data-sentry-source-file": "index.tsx",
          children: ["flying" === m && _ && (0, r.jsx)("div", {
            className: "_5czckk5",
            "data-testid": "flying-gems-overlay",
            children: g.map(e => (0, r.jsx)(eZ, {
              gem: e,
              sourcePos: _.source,
              pouchPos: _.pouch,
              onComplete: k
            }, e.id))
          }), (0, r.jsx)("div", {
            ref: w,
            className: "_5czckk6",
            children: (0, r.jsx)(ez.default, {
              src: "done" === m ? "/media/rewards/wallet_full.avif" : "/media/rewards/wallet_empty.avif",
              alt: "Gems bag",
              width: 218,
              height: 218,
              className: "_5czckk7",
              unoptimized: !0,
              "data-sentry-element": "Image",
              "data-sentry-source-file": "index.tsx"
            })
          }), !e && a && "done" === m ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("p", {
              className: "_5czckkh",
              "data-testid": "gems-collected-message",
              children: ["+ ", 50, " Gems have been added to your profile​​"]
            }), (0, r.jsx)("div", {
              className: "_5czckki",
              children: (0, r.jsxs)("span", {
                className: "_5czckkj",
                children: [(0, r.jsx)("span", {
                  className: "_5czckkk",
                  children: (0, r.jsxs)(e0.hE, {
                    size: "large",
                    children: ["Use Gems to ", (0, r.jsx)("b", {
                      children: "skip ads"
                    }), " and", (0, r.jsx)("br", {}), (0, r.jsx)("b", {
                      children: "get boosts"
                    }), " in your favorite games"]
                  })
                }), (0, r.jsx)("span", {
                  className: "_5czckkl",
                  children: (0, r.jsx)(ez.default, {
                    src: "/media/rewards/arrow.svg",
                    alt: "",
                    width: 35,
                    height: 24,
                    className: "_5czckkm",
                    unoptimized: !0
                  })
                })]
              })
            }), l.length > 0 && (0, r.jsx)("div", {
              className: "_5czckkn",
              children: (0, r.jsx)(eW.Carousel, {
                enableArrows: !0,
                enableDots: !0,
                spacing: 8,
                children: l.map((e, t) => {
                  let a = e.meta?.alias || e.slug,
                    s = e.meta?.thumbs?.graphic_288x152 || "",
                    n = (0, eX.X7)(l, e.slug, []);
                  return (0, r.jsx)("div", {
                    className: "_5czckk2",
                    children: (0, r.jsx)(eV.q, {
                      slug: e.slug,
                      size: "small",
                      href: `/games/${a}`,
                      background: s,
                      className: "_5czckk3",
                      hoverBlock: {
                        type: "none"
                      },
                      badge: n ? {
                        label: n.label,
                        backgroundColor: n.backgroundColor,
                        labelColor: n.labelColor
                      } : null,
                      testId: `gems-game-card-${t}`,
                      onClick: () => {
                        (0, C.oy)(e.slug)
                      }
                    }, `gems-game-${e.slug}-${t}`)
                  }, `gems-game-${e.slug}-${t}`)
                })
              })
            })]
          }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("div", {
              className: "_5czckk8",
              children: [(0, r.jsx)("h2", {
                className: "_5czckk9",
                children: "Congratulations"
              }), (0, r.jsx)("p", {
                className: eH,
                children: "Your profile was successfully created"
              })]
            }), (0, r.jsx)("div", {
              children: (0, r.jsx)("p", {
                className: eH,
                children: "You've received"
              })
            }), (0, r.jsxs)("div", {
              className: "_5czckkb",
              children: [(0, r.jsx)("span", {
                className: "_5czckkc",
                "data-testid": "gems-amount",
                children: 50
              }), (0, r.jsx)("div", {
                ref: j,
                className: "_5czckkd",
                children: (0, r.jsx)(ez.default, {
                  src: "/media/rewards/diamond.png",
                  alt: "Gems",
                  width: 60,
                  height: 60,
                  className: "_5czckke",
                  unoptimized: !0
                })
              })]
            }), (0, r.jsx)("div", {
              className: "_5czckkf",
              children: (0, r.jsx)($.$, {
                variant: "filled",
                size: "large",
                fullWidth: !0,
                className: "_5czckkg",
                onClick: N,
                disabled: i,
                testId: "collect-gems-button",
                children: i ? "Collecting..." : "Collect my Gems"
              })
            })]
          })]
        })
      }
      let e4 = ({
        confirmEmailError: e,
        captchaData: t,
        onLoginSuccess: a,
        resetPasswordRecoveryCode: s,
        emailConfirmState: o,
        setEmailConfirmState: l,
        changeEmailConfirmError: m,
        changeEmailConfirmCodeState: p,
        onBackButtonClick: h,
        isShopFeature: f,
        isFrictionlessRegisterEnabled: g = !1
      }) => {
        let {
          domain: x
        } = (0, e$.X)(), [y, v] = (0, n.useState)(""), [b, S] = (0, n.useState)(c.hT.EmailPassword), [j, C] = (0, n.useState)(!1), [w, E] = (0, n.useState)(null), [A, P] = (0, n.useState)([]), [R, T] = (0, n.useState)(null), [L, D] = (0, n.useState)(s ? c.d_.RESET_PASSWORD_FORM : c.d_.SIGN_IN_UP_EMAIL), F = L === c.d_.SIGN_IN_UP_EMAIL || L === c.d_.SIGN_UP_PASSWORD || L === c.d_.FACEBOOK_AUTH || L === c.d_.GOOGLE_AUTH, U = new URL((0, eo.usePathname)(), x).toString(), M = (0, n.useRef)(null), O = (0, n.useRef)(new AbortController), {
          features: B
        } = (0, k.R)(), {
          gameData: G
        } = (0, eG.xg)(), $ = (0, I.XI)(), {
          setIsRewardActive: q
        } = (0, N.h)(), {
          favoriteGames: z
        } = (0, I.rB)(), W = $ && z && !!z?.includes(G?.slug || ""), V = G ? {
          slug: G.slug,
          isFavorite: !!W
        } : null, {
          captchaToken: X,
          clearCaptchaData: H,
          getCaptchaToken: J,
          iframeRef: Y,
          iframeURL: K,
          setIsIframeCaptchaLoaded: Q,
          showChallengeRecaptcha: ee,
          setShowChallengeRecaptcha: et,
          clearCaptchaToken: ea,
          reloadRecaptcha: es,
          captchaMode: er,
          setCaptchaMode: en
        } = t;
        (0, n.useEffect)(() => {
          if (!R) return;
          let e = R === i.nL.CaptchaScoreIsTooLow || R === i.nL.CaptchaValidationFailed;
          e || H(), R === i.nL.CaptchaValidationFailed && A.some(e => e.includes("Captcha validation failed")) && es(), et(e), e && (en(u.Tv.CHALLENGE), ea())
        }, [R]), (0, n.useEffect)(() => {
          s && L !== c.d_.RESET_PASSWORD_FORM && D(c.d_.RESET_PASSWORD_FORM)
        }, [s, L]), (0, n.useEffect)(() => {
          P([]), T(null), [c.d_.FACEBOOK_AUTH, c.d_.SIGN_IN_UP_RESEND_EMAIL_FACEBOOK].includes(L) || C(!1)
        }, [L]);
        let ei = [c.d_.SIGN_IN_UP_EMAIL, c.d_.FACEBOOK_AUTH, c.d_.GOOGLE_AUTH],
          ec = [...f ? ei : [], c.d_.SIGN_UP_PASSWORD, c.d_.RESEND_CONFIRMATION_EMAIL, c.d_.SIGN_IN_PASSWORD, c.d_.FORGOT_PASSWORD].includes(L),
          eu = (0, n.useCallback)(() => {
            q(!1)
          }, [q]),
          em = [c.d_.SIGN_UP_PASSWORD, c.d_.RESET_PASSWORD_FORM_SUCCESS, c.d_.REWARD];
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)("div", {
            ref: M,
            className: _()(d().KeepAliveContainer, {
              [d().Active]: !ee && L !== c.d_.REWARD,
              [d().AuthStepsContainer]: L !== c.d_.REWARD,
              [d().Reward]: L === c.d_.REWARD
            }),
            children: [ec && (0, r.jsx)(eB.o, {
              addClass: _()(d().BackButton, {
                [d().Shop]: f
              }),
              testId: "modal-back-button",
              onClick: () => {
                if (O.current.abort(), H(), t.isCaptchaPending && t.abortCaptchaLoading(), f && ei.includes(L)) {
                  t.resetCaptchaReady(), h?.();
                  return
                }(L === c.d_.SIGN_UP_PASSWORD || L === c.d_.SIGN_IN_PASSWORD || L === c.d_.RESEND_CONFIRMATION_EMAIL) && D(c.d_.SIGN_IN_UP_EMAIL), L === c.d_.FORGOT_PASSWORD && D(c.d_.SIGN_IN_PASSWORD)
              }
            }), g && F && (0, r.jsx)("div", {
              className: eq.signUpModalFrictionlessBadge,
              "data-testid": "frictionless-register-badge",
              children: "Sign up now and get 50 gems"
            }), (() => {
              let t = {
                  captchaToken: X,
                  captchaMode: er,
                  getCaptchaToken: J,
                  clearCaptchaData: H
                },
                n = {
                  loading: j,
                  changeLoading: C,
                  errors: A,
                  changeErrors: P,
                  changeErrorCode: T,
                  domainWithProtocolAndLocale: U,
                  abortSignal: O.current.signal
                };
              switch (L) {
                case c.d_.SIGN_IN_UP_EMAIL:
                case c.d_.GOOGLE_AUTH:
                case c.d_.FACEBOOK_AUTH:
                case c.d_.SIGN_IN_UP_RESEND_EMAIL_FACEBOOK:
                case c.d_.SIGN_IN_UP_RESEND_EMAIL_GOOGLE:
                  return (0, r.jsx)(Z, {
                    confirmEmailError: e,
                    changeEmailConfirmError: m,
                    changeEmailConfirmCodeState: p,
                    errorCode: R,
                    email: y,
                    changeEmail: v,
                    emailConfirmState: o,
                    setEmailConfirmState: l,
                    authType: b,
                    currentStep: L,
                    changeCurrentStep: D,
                    onLoginSuccess: a,
                    changeAuthType: S,
                    byGoogle: B.auth.providers?.google?.enabled ?? !1,
                    byFacebook: B.auth.providers?.facebook?.enabled ?? !1,
                    byEmail: B.auth.providers?.email?.enabled ?? !1,
                    changeSocialUserToken: E,
                    game: V,
                    isFrictionlessRegisterEnabled: g,
                    ...n,
                    ...t
                  });
                case c.d_.SIGN_UP_PASSWORD:
                  return (0, r.jsx)(eg, {
                    email: y,
                    changeCurrentStep: D,
                    game: V,
                    isFrictionlessRegisterEnabled: g,
                    ...n,
                    ...t
                  });
                case c.d_.SIGN_IN_PASSWORD:
                case c.d_.RESEND_CONFIRMATION_EMAIL:
                  return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(el, {
                      email: y,
                      currentStep: L,
                      changeCurrentStep: D,
                      onLoginSuccess: a,
                      ...n,
                      ...t
                    })
                  });
                case c.d_.FORGOT_PASSWORD:
                  return (0, r.jsx)(eC, {
                    email: y,
                    changeEmail: v,
                    changeCurrentStep: D,
                    ...n,
                    ...t
                  });
                case c.d_.REQUEST_EMAIL:
                  return (0, r.jsx)(eO, {
                    currentStep: L,
                    changeCurrentStep: D,
                    email: y,
                    changeEmail: v,
                    socialUserToken: w,
                    ...n,
                    ...t
                  });
                case c.d_.EMAIL_SENT_FORM:
                  return (0, r.jsx)(eb, {
                    isFrictionlessRegisterEnabled: g,
                    email: y,
                    changeCurrentStep: D,
                    authType: b,
                    ...n,
                    ...t
                  });
                case c.d_.THANK_YOU_FORM:
                  return (0, r.jsx)(eT, {
                    email: y,
                    changeCurrentStep: D,
                    authType: b,
                    ...n,
                    ...t
                  });
                case c.d_.RESET_PASSWORD_FORM:
                  return (0, r.jsx)(eE, {
                    changeCurrentStep: D,
                    resetPasswordRecoveryCode: s ?? "",
                    ...n,
                    ...t
                  });
                case c.d_.RESET_PASSWORD_FORM_SUCCESS:
                  return (0, r.jsx)(eP, {
                    loading: j,
                    changeErrors: P,
                    changeErrorCode: T,
                    changeCurrentStep: D
                  });
                case c.d_.REWARD:
                  return (0, r.jsx)(e2, {
                    isShopFeature: f,
                    onComplete: eu
                  });
                default:
                  return null
              }
            })()]
          }), (0, r.jsx)("div", {
            className: _()(d().KeepAliveContainer, {
              [d().Active]: ee
            }),
            children: (0, r.jsx)(eL.D, {
              isVisible: ee,
              iframeRef: Y,
              iframeURL: K,
              setIsIframeCaptchaLoaded: Q,
              "data-sentry-element": "CaptchaIframe",
              "data-sentry-source-file": "EntryForm.tsx"
            })
          }), !em.includes(L) && (0, r.jsx)(ed.H, {})]
        })
      }
    },
    53686: e => {
      e.exports = {
        PasswordField: "styles_PasswordField___Ksl5",
        PasswordRequirements: "styles_PasswordRequirements__K5dzt",
        FieldInputWrapper: "styles_FieldInputWrapper__9mLi0",
        WithMarginBottom: "styles_WithMarginBottom__F89nJ",
        FieldInputIconImage: "styles_FieldInputIconImage__yEpGj"
      }
    },
    54653: e => {
      e.exports = {
        RequestEmailTitle: "styles_RequestEmailTitle__RxyW9",
        RequestEmailDescription: "styles_RequestEmailDescription__WT1VK",
        RequestEmailForm: "styles_RequestEmailForm__qSHSu",
        Input: "styles_Input__zRBHe",
        EmailField: "styles_EmailField__oxuPl",
        RequestEmailError: "styles_RequestEmailError__2rZu_"
      }
    },
    55057: (e, t, a) => {
      "use strict";
      a.r(t), a(77238)
    },
    55823: (e, t, a) => {
      "use strict";
      a.d(t, {
        k: () => u
      });
      var s = a(12115),
        r = a(93284),
        n = a(88011),
        i = a(28062),
        o = a(30423);
      let l = e => {
          let t = r.sj.getItem(e, !0);
          return t.length > 0 ? "true" === t : null
        },
        d = async e => {
          let t = e.toLowerCase().includes("microsoft") || e.toLowerCase().includes("msn"),
            a = !1,
            s = null;
          try {
            s = await (0, o.HX)()
          } catch (e) {
            a = !0
          }
          let d = n.Gb.has(s?.country_code),
            c = n.td.has(s?.country_code),
            u = n.dh.has(s?.country_code),
            m = n.Ru.has(s?.region_code),
            p = await (0, i.AR)(t),
            h = (0, i.dJ)(n.gc) ?? null;
          return {
            isMicrosoftDomain: t,
            isGDPRApplies: d,
            isSpecificUSState: m,
            browserTrackingConsent: p,
            isCmpDisabledByRegion: u,
            isUS: c,
            muidCookie: (0, i.dJ)(n.b7) ?? null,
            msInitialConsent: "1" !== h,
            lastTargetingConsent: l(r.sJ.popupTargetingConsent),
            lastGDPRConsent: l(r.sJ.popupGDPRCookieConsent),
            initialTargetingConsent: l(r.sJ.arkcomTargetingConsent),
            initialGDPRConsent: l(r.sJ.arkcomGDPRCookieConsent),
            isGeoRequestFailed: a
          }
        };
      var c = a(17413);
      let u = (e, t) => {
        let [a, r] = (0, s.useState)(null);
        return (0, s.useEffect)(() => {
          t && d(e).then(r).catch(e => {
            (0, c.t)().error({
              data: e
            }, "[useComputeConsentFlags.ts] - Failed to compute consent flags")
          })
        }, [e, t]), [a, r]
      }
    },
    56263: e => {
      e.exports = {
        SignUpPasswordTitle: "styles_SignUpPasswordTitle__hAS2N",
        SignUpPasswordDescription: "styles_SignUpPasswordDescription__rH_BA",
        SignUpPasswordForm: "styles_SignUpPasswordForm__lXB3E",
        Input: "styles_Input__urUd3",
        CheckboxField: "styles_CheckboxField__805pq",
        gdprConsent: "styles_gdprConsent__TcAnl",
        CheckboxRoot: "styles_CheckboxRoot__cN_Sp",
        invalid: "styles_invalid__WjDmr",
        CheckboxIndicator: "styles_CheckboxIndicator__MH90i",
        CheckboxLabel: "styles_CheckboxLabel__HRyls",
        LegalLink: "styles_LegalLink__KL7Oy",
        gdprConsentError: "styles_gdprConsentError__42RTP",
        frictionlessRegisterDescription: "styles_frictionlessRegisterDescription__SmUe2"
      }
    },
    58264: (e, t, a) => {
      "use strict";
      a.d(t, {
        Q: () => l
      });
      var s = a(95155),
        r = a(95669),
        n = a(41557),
        i = a(26778);
      let o = () => (0, s.jsxs)("div", {
          className: n.Lz,
          "data-sentry-component": "Compliance",
          "data-sentry-source-file": "Compliance.tsx",
          children: [(0, s.jsxs)("div", {
            className: n.CP,
            children: [(0, s.jsx)(i.default, {
              src: "https://arenacloud.cdn.arkadiumhosted.com/arkadiummodulesstorage-blob/evo-static-assets/assets/shop/pci.png",
              alt: "Gems",
              width: 144,
              height: 73,
              "data-sentry-element": "StaticImage",
              "data-sentry-source-file": "Compliance.tsx"
            }), (0, s.jsx)(i.default, {
              src: "https://arenacloud.cdn.arkadiumhosted.com/arkadiummodulesstorage-blob/evo-static-assets/assets/shop/soc2.png",
              alt: "Gems",
              width: 119,
              height: 73,
              "data-sentry-element": "StaticImage",
              "data-sentry-source-file": "Compliance.tsx"
            })]
          }), (0, s.jsx)("p", {
            className: n.ed,
            children: "Payments are securely processed by Recurly, which is PCI Level 1 and SOC 2 Type II certified."
          })]
        }),
        l = ({
          supportInNewTab: e = !1
        }) => (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(r.E, {
            openInNewTab: e,
            "data-sentry-element": "Support",
            "data-sentry-source-file": "index.tsx"
          }), (0, s.jsx)(o, {
            "data-sentry-element": "Compliance",
            "data-sentry-source-file": "index.tsx"
          })]
        })
    },
    59298: (e, t, a) => {
      "use strict";
      a.r(t), a(19648)
    },
    60529: (e, t, a) => {
      "use strict";
      a.r(t), a(38165)
    },
    64585: e => {
      e.exports = {
        link: "styles_link__Zum5N"
      }
    },
    70824: e => {
      e.exports = {
        Modal: "styles_Modal__MKs9y",
        Overlay: "styles_Overlay__kPsdB",
        OverlayElevated: "styles_OverlayElevated___OBzw",
        Content: "styles_Content__gBCdk",
        ContentElevated: "styles_ContentElevated__2GuJa",
        MainContent: "styles_MainContent__thOdX",
        MainContentForRecaptcha: "styles_MainContentForRecaptcha__cPN8m",
        Title: "styles_Title__Oxb_t",
        Description: "styles_Description__K9UlP",
        DescriptionPassword: "styles_DescriptionPassword__3i4IT",
        strong: "styles_strong__jFHjE",
        Button: "styles_Button__1rcPK",
        Fieldset: "styles_Fieldset__Xpgfz",
        Close: "styles_Close__A4nsy",
        IconItem: "styles_IconItem__PAh9P",
        Icon: "styles_Icon__E2bXL",
        ButtonWrapper: "styles_ButtonWrapper__1R5zV",
        overlayShow: "styles_overlayShow__G0YEV",
        contentShow: "styles_contentShow__mvE8L"
      }
    },
    71407: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 94562)), Promise.resolve().then(a.bind(a, 67838)), Promise.resolve().then(a.bind(a, 55057)), Promise.resolve().then(a.bind(a, 60529)), Promise.resolve().then(a.bind(a, 59298)), Promise.resolve().then(a.bind(a, 81264)), Promise.resolve().then(a.bind(a, 79038)), Promise.resolve().then(a.bind(a, 31399)), Promise.resolve().then(a.bind(a, 39079)), Promise.resolve().then(a.bind(a, 43022)), Promise.resolve().then(a.bind(a, 81617)), Promise.resolve().then(a.bind(a, 98566)), Promise.resolve().then(a.bind(a, 6240)), Promise.resolve().then(a.bind(a, 44455)), Promise.resolve().then(a.bind(a, 72207)), Promise.resolve().then(a.bind(a, 81099)), Promise.resolve().then(a.bind(a, 39243)), Promise.resolve().then(a.bind(a, 43772)), Promise.resolve().then(a.bind(a, 85824)), Promise.resolve().then(a.bind(a, 17155)), Promise.resolve().then(a.bind(a, 20671)), Promise.resolve().then(a.bind(a, 23939)), Promise.resolve().then(a.bind(a, 72044)), Promise.resolve().then(a.bind(a, 30535)), Promise.resolve().then(a.bind(a, 19109)), Promise.resolve().then(a.bind(a, 88965)), Promise.resolve().then(a.bind(a, 91532)), Promise.resolve().then(a.bind(a, 90325)), Promise.resolve().then(a.bind(a, 82330)), Promise.resolve().then(a.bind(a, 45798)), Promise.resolve().then(a.bind(a, 77762)), Promise.resolve().then(a.bind(a, 27882)), Promise.resolve().then(a.bind(a, 61181)), Promise.resolve().then(a.bind(a, 79760)), Promise.resolve().then(a.bind(a, 4265)), Promise.resolve().then(a.t.bind(a, 19648, 23)), Promise.resolve().then(a.t.bind(a, 77238, 23)), Promise.resolve().then(a.t.bind(a, 38165, 23)), Promise.resolve().then(a.t.bind(a, 2803, 23)), Promise.resolve().then(a.t.bind(a, 60061, 23)), Promise.resolve().then(a.t.bind(a, 60757, 23)), Promise.resolve().then(a.t.bind(a, 10853, 23)), Promise.resolve().then(a.bind(a, 98208)), Promise.resolve().then(a.bind(a, 99082)), Promise.resolve().then(a.t.bind(a, 8763, 23)), Promise.resolve().then(a.t.bind(a, 51191, 23)), Promise.resolve().then(a.t.bind(a, 12452, 23))
    },
    72044: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        authContainer: () => s,
        bannerContainer: () => r,
        bannerImageContainer: () => n,
        buttonContent: () => i,
        centerContainer: () => o,
        gemsBalanceContainer: () => l,
        gemsContainer: () => d,
        gemsShop: () => c,
        gemsShopContainer: () => u,
        gemsWrapperShop: () => m,
        loadingContainer: () => p,
        modalSubscription: () => h,
        responsiveButton: () => f,
        responsiveButtonIcon: () => g,
        rewardedAdCoin: () => x,
        rewardedAdCurrencyIcon: () => y,
        rewardedAdCurrencyIconBottom: () => _,
        rewardedAdFullscreenIcon: () => v,
        rewardedAdGem: () => b,
        rewardedAdSphere: () => S,
        rewardedAdVisualElements: () => j,
        shopContainer: () => C,
        shopSubscriptionSaveTitle: () => w,
        stateSubtitle: () => N,
        stateTitle: () => k,
        subscriptionBannerContainer: () => E,
        title: () => I,
        titleSubscription: () => A,
        topContainer: () => P,
        unlockAccessButtonIcon: () => R,
        unlockAccessCard: () => T,
        unlockAccessCloseButton: () => L,
        unlockAccessDescription: () => D,
        unlockAccessIconWrapper: () => F,
        unlockAccessModalContent: () => U,
        unlockAccessTitle: () => M
      }), a(2803);
      var s = "_168u3s5e",
        r = "_168u3s51",
        n = "_168u3s55",
        i = "_168u3s5q",
        o = "_168u3s5h",
        l = "_168u3s53",
        d = "_168u3s5d",
        c = "_168u3s5g",
        u = "_168u3s5b",
        m = "_168u3s5f",
        p = "_168u3s52",
        h = "_168u3s50",
        f = "_168u3s5p",
        g = "_168u3s5r",
        x = "_168u3s5w",
        y = "_168u3s5y",
        _ = "_168u3s5z",
        v = "_168u3s5u",
        b = "_168u3s5v",
        S = "_168u3s5x",
        j = "_168u3s5t",
        C = "_168u3s5a",
        w = "_168u3s5i",
        N = "_168u3s59",
        k = "_168u3s58",
        E = "_168u3s54",
        I = "_168u3s56",
        A = "_168u3s57",
        P = "_168u3s5c",
        R = "_168u3s5s",
        T = "_168u3s5l",
        L = "_168u3s5k",
        D = "_168u3s5o",
        F = "_168u3s5m",
        U = "_168u3s5j",
        M = "_168u3s5n"
    },
    72207: (e, t, a) => {
      "use strict";
      a.d(t, {
        ModalAddToHomeScreen: () => h
      });
      var s = a(95155),
        r = a(87153),
        n = a(26778);
      a(44403);
      var i = "_1weghrvk",
        o = "_1weghrvl",
        l = a(28062),
        d = a(79760),
        c = a(70448),
        u = a.n(c),
        m = a(41836),
        p = a(39291);
      let h = () => {
        let {
          browser: e,
          os: t,
          detectDevice: a,
          model: c
        } = (0, d.i)(), h = (0, l.Tz)(a() || "", e?.name?.toLowerCase() || "", t?.name?.toLowerCase() || "unknown", c?.toLowerCase() || "unknown"), f = h.steps.length > 1, [g, x] = (0, r.A)({
          active: f,
          align: "start",
          loop: !1,
          slidesToScroll: 1,
          skipSnaps: !1
        }), {
          selectedIndex: y,
          onDotButtonClick: _
        } = (0, m.H)(x), {
          scrollPrev: v,
          scrollNext: b,
          prevBtnEnabled: S,
          nextBtnEnabled: j
        } = (0, p.ay)(x);
        return (0, s.jsxs)("div", {
          className: u()("_1weghrv0"),
          "data-sentry-component": "ModalAddToHomeScreen",
          "data-sentry-source-file": "index.tsx",
          children: [(0, s.jsxs)("div", {
            className: "_1weghrv1",
            children: [(0, s.jsx)("h1", {
              className: "_1weghrv2",
              children: h.title
            }), (0, s.jsx)("h2", {
              className: "_1weghrv3",
              children: h.subTitle
            })]
          }), (0, s.jsxs)("div", {
            className: "_1weghrvo",
            children: [(0, s.jsx)("div", {
              className: "_1weghrv4",
              children: (0, s.jsx)("div", {
                className: "_1weghrv5",
                ref: g,
                children: (0, s.jsx)("ul", {
                  className: "_1weghrv6",
                  children: h.steps.map((e, t) => {
                    let a = h.image[t],
                      r = a?.src.endsWith(".svg"),
                      i = a?.gap || "24px";
                    return (0, s.jsx)("li", {
                      className: "_1weghrv7",
                      children: (0, s.jsxs)("div", {
                        className: "_1weghrv8",
                        style: {
                          "--slide-gap": i
                        },
                        children: [(0, s.jsx)("p", {
                          className: "_1weghrve",
                          children: e
                        }), a && (0, s.jsx)("div", {
                          className: "_1weghrv9",
                          children: (0, s.jsx)(n.default, {
                            src: a.src,
                            alt: a.alt || `Step ${t+1} illustration`,
                            width: a.width,
                            height: a.height,
                            className: "_1weghrvj",
                            unoptimized: r,
                            loading: r ? "eager" : "lazy"
                          })
                        })]
                      })
                    }, t)
                  })
                })
              })
            }), f && (0, s.jsxs)("div", {
              className: "_1weghrvf",
              children: [(0, s.jsx)("button", {
                className: u()(i, "_1weghrvm", {
                  [o]: S
                }),
                onClick: v,
                "aria-label": "Previous slide",
                tabIndex: S ? 0 : -1,
                "data-testid": "instruction-arrow-prev",
                children: (0, s.jsx)(n.default, {
                  src: "/media/add-to-home-screen/left-arrow-icon.svg",
                  alt: "",
                  width: 40,
                  height: 40,
                  unoptimized: !0
                })
              }), (0, s.jsx)("div", {
                className: "_1weghrvg",
                children: h.steps.map((e, t) => (0, s.jsx)(m.c, {
                  ariaLabel: `Go to slide ${t+1}`,
                  onClick: () => _(t),
                  className: u()("_1weghrvh", {
                    _1weghrvi: t === y
                  }),
                  testId: `instruction-dot-${t}`
                }, t))
              }), (0, s.jsx)("button", {
                className: u()(i, "_1weghrvn", {
                  [o]: j
                }),
                onClick: b,
                "aria-label": "Next slide",
                tabIndex: j ? 0 : -1,
                "data-testid": "instruction-arrow-next",
                children: (0, s.jsx)(n.default, {
                  src: "/media/add-to-home-screen/right-arrow-icon.svg",
                  alt: "",
                  width: 40,
                  height: 40,
                  unoptimized: !0
                })
              })]
            })]
          })]
        })
      }
    },
    74113: (e, t, a) => {
      "use strict";
      a.d(t, {
        R: () => n,
        U: () => r
      });
      var s = a(42956);

      function r(e) {
        return e === s.tz.GEMS
      }

      function n(e) {
        return e === s.tz.SUBSCRIPTION
      }
    },
    75283: (e, t, a) => {
      "use strict";
      a.d(t, {
        l: () => n
      });
      var s = a(17413),
        r = a(88011);
      let n = (e, t) => {
        try {
          e.parse(t)
        } catch (t) {
          let e = t?.flatten?.()?.formErrors?.[0] ?? r.gC.FALLBACK;
          return (0, s.t)().error({
            data: {
              error: t,
              err: e
            }
          }, "[profileSchemaCheck] - Error parsing schema"), e
        }
      }
    },
    76499: (e, t, a) => {
      "use strict";
      a.d(t, {
        l: () => d
      });
      var s = a(95155);
      a(12115), a(19577);
      var r = a(19253),
        n = a(70448),
        i = a.n(n),
        o = a(85824),
        l = a(90242);
      let d = ({
        error: e,
        showSupportLink: t,
        customClassName: a = "",
        testId: n
      }) => {
        let {
          openModal: d
        } = (0, o.h)();
        return e ? (0, s.jsxs)(r.y, {
          type: r.W.error,
          customClassName: i()("_149tsne0", a),
          testId: n,
          "data-sentry-element": "Toast",
          "data-sentry-component": "AuthError",
          "data-sentry-source-file": "AuthError.tsx",
          children: [e, t && (0, s.jsx)(l.$, {
            className: "_149tsne1",
            onClick: () => {
              d("support", {
                origin: window.location.pathname
              })
            },
            variant: "label",
            children: "Contact Support"
          })]
        }) : null
      }
    },
    77762: (e, t, a) => {
      "use strict";
      a.d(t, {
        ConsentProvider: () => u,
        b: () => m
      });
      var s = a(95155),
        r = a(17413),
        n = a(99005),
        i = a(12115),
        o = a(93284),
        l = a(38841),
        d = a(55823);
      let c = (0, i.createContext)(void 0);

      function u({
        domain: e,
        children: t,
        hasQuantcast: a
      }) {
        let u, [m, p] = (0, i.useState)(null),
          [h, f] = (0, i.useState)(!1),
          [g, x] = (0, i.useState)(null),
          [y, _] = (0, d.k)(e, a),
          [v, b] = (0, i.useState)(null),
          [S, j] = (0, i.useState)(null),
          [C, w] = (0, i.useState)(!1),
          [N, k] = (0, i.useState)(!1);
        (u = (0, i.useRef)(null)).current = y, (0, i.useEffect)(() => {
          if (!(y?.isGDPRApplies || y?.lastTargetingConsent !== null) || !a || y?.isCmpDisabledByRegion || !C) return;
          let e = null,
            t = !1,
            s = () => {
              !t && window.__tcfapi && (e = (e, t) => {
                if (t && u.current) {
                  if ("loaded" === e.cmpStatus && u.current.isMicrosoftDomain && !h) {
                    let t = {
                      Required: !0,
                      Analytics: !!e.purpose?.consents?.[10],
                      SocialMedia: !!e.purpose?.consents?.[7],
                      Advertising: !!e.purpose?.consents?.[1]
                    };
                    o.sj.setItem(o.sJ.userConsentDetails, JSON.stringify(t), !0);
                    let a = !0 === u.current.browserTrackingConsent && !0 === u.current.msInitialConsent;
                    o.sj.setItem(o.sJ.gpcDataSharingOptIn, a, !0), window.__app_insights_1ds_key = (0, l.env)("NEXT_PUBLIC_APP_INSIGHTS_1DS_KEY"), f(!0)
                  }
                  if ("useractioncomplete" === e.eventStatus) {
                    let t = !!e.purpose?.consents?.[1],
                      a = t && !!e.vendor?.consents?.[11];
                    o.sj.setItem(o.sJ.popupTargetingConsent, t, !0), o.sj.setItem(o.sJ.popupGDPRCookieConsent, a, !0), o.sj.setItem(o.sJ.targetingConsent, t, !0), o.sj.setItem(o.sJ.gdprCookieConsent, a, !0), _(e => e ? {
                      ...e,
                      lastTargetingConsent: t,
                      lastGDPRConsent: a
                    } : null)
                  }
                  if (("useractioncomplete" === e.eventStatus || "tcloaded" === e.eventStatus) && x(e.tcString), "tcloaded" === e.eventStatus && u.current.isGDPRApplies && o.sj.getItem(o.sJ.isNonGDPR, !0) && (o.sj.removeItem(o.sJ.isNonGDPR, !0), window.__tcfapi?.("displayConsentUi", 2, () => {})), "loaded" === e.cmpStatus && u.current.isMicrosoftDomain && "useractioncomplete" === e.eventStatus && h) {
                    let t = (0, n.Tc)(u.current, e.purpose?.consents || {});
                    (0, n.IS)(t)
                  }
                }
              }, window.__tcfapi("addEventListener", 2, e))
            };
          if (window.__tcfapi) s();
          else {
            let e = setInterval(() => {
              window.__tcfapi && (clearInterval(e), s())
            }, 150);
            return () => clearInterval(e)
          }
          return () => {
            if (t = !0, e && window.__tcfapi) try {
              window.__tcfapi("removeEventListener", 2, e)
            } catch {}
          }
        }, [y?.browserTrackingConsent, y?.isCmpDisabledByRegion, y?.isGDPRApplies, a, h, _, f, x, C]), (0, i.useEffect)(() => {
          if (a && y) {
            var e, t, s;
            let a = y.isMicrosoftDomain ? (e = y).isCmpDisabledByRegion || e.isGeoRequestFailed || !1 === e.browserTrackingConsent || !1 === e.msInitialConsent ? {
              targetingConsent: !1,
              gdprConsent: !1,
              userConsentDetails: {
                Required: !0,
                Analytics: !1,
                SocialMedia: !1,
                Advertising: !1
              }
            } : !1 === e.isGDPRApplies && null !== e.lastTargetingConsent ? {
              targetingConsent: !!(t = e.lastTargetingConsent),
              gdprConsent: !!t,
              userConsentDetails: {
                Required: !0,
                Analytics: !0,
                SocialMedia: !0,
                Advertising: !0
              }
            } : !1 === e.isGDPRApplies && null === e.lastTargetingConsent ? {
              targetingConsent: !0,
              gdprConsent: !0,
              userConsentDetails: {
                Required: !0,
                Analytics: !0,
                SocialMedia: !0,
                Advertising: !0
              }
            } : !0 === e.isGDPRApplies ? {
              targetingConsent: (s = e.lastTargetingConsent) ?? !0,
              gdprConsent: e.lastGDPRConsent ?? !0,
              userConsentDetails: {
                Required: !0,
                Analytics: s ?? !0,
                SocialMedia: s ?? !0,
                Advertising: s ?? !0
              }
            } : {
              targetingConsent: !0,
              gdprConsent: !0,
              userConsentDetails: {
                Required: !0,
                Analytics: !0,
                SocialMedia: !0,
                Advertising: !0
              }
            } : function(e) {
              if (!e || "object" != typeof e) throw (0, r.t)().error({
                data: {
                  err: e
                }
              }, "resolveConsentDefault: invalid flags"), Error("resolveConsentDefault: invalid flags");
              return !1 === e.browserTrackingConsent || !0 === e.isCmpDisabledByRegion || e.isGeoRequestFailed ? {
                targetingConsent: !1,
                gdprConsent: !1
              } : null !== e.lastTargetingConsent && null !== e.lastGDPRConsent ? {
                targetingConsent: e.lastTargetingConsent,
                gdprConsent: e.lastGDPRConsent
              } : !0 !== e.isGDPRApplies ? {
                targetingConsent: !0,
                gdprConsent: !0
              } : !0 === e.isGDPRApplies ? {
                targetingConsent: e.initialTargetingConsent ?? !0,
                gdprConsent: e.initialGDPRConsent ?? !0
              } : void 0
            }(y);
            if ("userConsentDetails" in a && !h) {
              let e = JSON.stringify(a.userConsentDetails);
              o.sj.getItem(o.sJ.userConsentDetails, !0) !== e && o.sj.setItem(o.sJ.userConsentDetails, e, !0)
            }
            null !== a.targetingConsent && o.sj.setItem(o.sJ.targetingConsent, a.targetingConsent, !0), null !== a.gdprConsent && o.sj.setItem(o.sJ.gdprCookieConsent, a.gdprConsent, !0), !1 === a.gdprConsent && (document.cookie = "MUID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.msn.com; secure; samesite=none"), p(a), b((({
              isMicrosoftDomain: e,
              isGDPRApplies: t,
              isUS: a,
              isCmpDisabledByRegion: s,
              lastTargetingConsent: r,
              isGeoRequestFailed: n
            }) => !n && (null !== r || (e ? !s && (t || a) : !s)))({
              isMicrosoftDomain: y.isMicrosoftDomain,
              isGDPRApplies: y.isGDPRApplies,
              isUS: y.isUS,
              isCmpDisabledByRegion: y.isCmpDisabledByRegion,
              lastTargetingConsent: y.lastTargetingConsent,
              isGeoRequestFailed: y.isGeoRequestFailed
            })), j((0, n.FA)({
              isMicrosoftDomain: y.isMicrosoftDomain,
              isGDPRApplies: y.isGDPRApplies,
              isUS: y.isUS,
              isCmpDisabledByRegion: y.isCmpDisabledByRegion,
              isGeoRequestFailed: y.isGeoRequestFailed,
              lastTargetingConsent: y.lastTargetingConsent
            }))
          }
        }, [y, h]), (0, i.useEffect)(() => {
          if (!y || !y.isMicrosoftDomain || y.isGDPRApplies || !N) return;
          let e = (0, n.Tc)(y);
          (0, n.IS)(e)
        }, [y, N]);
        let E = (0, i.useCallback)(() => {
          y?.isGDPRApplies && window.__tcfapi || y?.lastTargetingConsent !== null ? window.__tcfapi("displayConsentUi", 2, () => {}) : y?.isSpecificUSState && window.__uspapi && window.__uspapi("displayUspUi")
        }, [y?.isGDPRApplies, y?.isSpecificUSState]);
        return (0, s.jsx)(c.Provider, {
          value: {
            targetingConsent: m?.targetingConsent ?? null,
            gdprConsent: m?.gdprConsent ?? null,
            isSpecificUSState: y?.isSpecificUSState ?? null,
            isGDPRApplies: y?.isGDPRApplies ?? null,
            isMicrosoftDomain: y?.isMicrosoftDomain ?? null,
            ready: !!y,
            openConsentPopup: E,
            tcString: g,
            readyToLoadMicrosoft1DS: h,
            shouldLoadQuantcastScript: v,
            shouldLoadMicrosoftClarity: S,
            browserTrackingConsent: y?.browserTrackingConsent ?? null,
            muidCookie: y?.muidCookie ?? null,
            setIsQuantcastScriptLoaded: w,
            setIsMicrosoftClarityScriptLoaded: k
          },
          "data-sentry-element": "ConsentContext.Provider",
          "data-sentry-component": "ConsentProvider",
          "data-sentry-source-file": "Context.tsx",
          children: t
        })
      }

      function m() {
        let e = (0, i.useContext)(c);
        if (!e) throw Error("useConsentContext must be used within a <ConsentProvider>");
        return e
      }
    },
    81099: (e, t, a) => {
      "use strict";
      a.d(t, {
        ArenaView: () => e$
      });
      var s = a(95155),
        r = a(12115),
        n = a(14011),
        i = a(84374),
        o = a(70448),
        l = a.n(o),
        d = a(24709),
        c = a(38841);
      a(29371);
      var u = "_1uqvs921",
        m = "_1uqvs92b",
        p = "_1uqvs92f",
        h = "_1uqvs922",
        f = a(18730),
        g = a(2417),
        x = a(79038),
        y = a(28062),
        _ = a(39768),
        v = a(60921),
        b = a(4024),
        S = a(40038),
        j = a.n(S),
        C = a(93346),
        w = a(31969),
        N = a(81264),
        k = a(51629),
        E = a(4265),
        I = a(27882),
        A = a(6240),
        P = a(85824),
        R = a(21765);
      let T = {
          label: "My profile",
          route: "/profile",
          queryParams: {
            tab: "MyProfile"
          },
          iconPath: "/media/myprofile-icon.svg",
          testId: "profile-menu-item"
        },
        L = {
          label: "Sign out",
          route: "/logout",
          iconPath: "/media/logout-icon.svg",
          testId: "signout-menu-item"
        },
        D = {
          label: "",
          route: "",
          iconPath: "",
          isDivider: !0,
          testId: "divider"
        },
        F = {
          label: "Favorites",
          route: "/profile",
          queryParams: {
            tab: "Favorites"
          },
          iconPath: "/media/favorites-icon.svg",
          testId: "favorites-menu-item"
        },
        U = [T, F, D, L],
        M = [{
          label: "Arkadium Plus",
          route: "/plus",
          iconPath: "/media/topbar/ark-plus.webp"
        }, {
          label: "Shop",
          route: "/shop",
          iconPath: "/media/topbar/shop.webp"
        }],
        O = () => {
          let {
            logout: e
          } = (0, E.xV)(), {
            features: t
          } = (0, I.R)(), a = (0, n.usePathname)(), i = t.auth.isFavoriteGamesEnabled && t.actionBar ? U : U.filter(e => e.label !== F.label), [o, d] = (0, r.useState)(i), [c, u] = (0, r.useState)(!1), m = (0, v.lm)(), p = {
            label: "Support",
            route: "/support",
            queryParams: {
              modal: "support"
            },
            iconPath: "/media/help-circle.svg",
            testId: "support-menu-item"
          }, {
            openModal: h
          } = (0, P.h)(), {
            navigateTo: f
          } = (0, A.s)();
          return (0, r.useEffect)(() => {
            u([_.LB.xxs, _.LB.xs].includes(m))
          }, [m]), (0, r.useEffect)(() => {
            let e = t.support ? [p] : [];
            c ? d(t.auth.isFavoriteGamesEnabled && t.actionBar ? [...M, D, T, F, D, ...e, L] : [...M, D, T, D, ...e, L]) : d(t.support ? [...i.slice(0, -1), p, L] : i)
          }, [t, c]), (0, s.jsxs)(b.bL, {
            "data-sentry-element": "DropdownMenu.Root",
            "data-sentry-component": "UserDropdown",
            "data-sentry-source-file": "index.tsx",
            children: [(0, s.jsx)(b.l9, {
              asChild: !0,
              "data-sentry-element": "DropdownMenu.Trigger",
              "data-sentry-source-file": "index.tsx",
              children: (0, s.jsx)("div", {
                className: l()(j().toggle),
                children: (0, s.jsxs)("div", {
                  "data-testid": "user-dropdown-trigger",
                  className: l()(j().selected),
                  children: [!c && (0, s.jsx)(N.GemsBalance, {
                    type: "round"
                  }), (0, s.jsx)(C.T, {
                    size: 40,
                    isEditable: !1,
                    "data-sentry-element": "ProfileAvatar",
                    "data-sentry-source-file": "index.tsx"
                  }), (0, s.jsx)(k.I, {
                    name: "chevron-bottom",
                    "data-sentry-element": "Icon",
                    "data-sentry-source-file": "index.tsx"
                  })]
                })
              })
            }), (0, s.jsx)(b.ZL, {
              "data-sentry-element": "DropdownMenu.Portal",
              "data-sentry-source-file": "index.tsx",
              children: (0, s.jsxs)(b.UC, {
                className: j().content,
                align: "end",
                "data-testid": "user-dropdown-content",
                "data-sentry-element": "DropdownMenu.Content",
                "data-sentry-source-file": "index.tsx",
                children: [c && (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)(N.GemsBalance, {
                    type: "listItem"
                  }), (0, s.jsx)(b.wv, {
                    className: j().separator
                  })]
                }), (0, s.jsx)("div", {
                  className: j().list,
                  children: o.map((t, r) => t.isDivider ? (0, s.jsx)(b.wv, {
                    className: j().separator
                  }, `divider-${r}`) : (0, s.jsxs)(b.q7, {
                    className: l()(j().item, j().dropdownItemWithIcon),
                    onSelect: () => (t => {
                      if ("/logout" === t.route) return e();
                      if ("/shop" === t.route) return h("shop", void 0, "mobileDropDown");
                      if ("/plus" === t.route) return h("subscribe", void 0, "mobileDropDown");
                      let s = new URLSearchParams(t.route ? {
                          ...t.queryParams
                        } : t.queryParams),
                        r = a.includes("games") ? a : void 0;
                      if ("/support" === t.route) return (0, R.s9)("mobileDropDown"), h("support", {
                        origin: r
                      });
                      if ("/profile" === t.route && a.includes("/profile")) {
                        let e = new URLSearchParams(window.location.search);
                        e.set("tab", t.queryParams?.tab || "MyProfile"), f(a, {
                          query: e
                        })
                      } else f(t.route, {
                        query: s
                      })
                    })(t),
                    "data-testid": t.testId,
                    children: [(0, s.jsx)(w.StaticImage, {
                      src: t.iconPath,
                      width: 20,
                      height: 20,
                      alt: t.label
                    }), (0, s.jsx)("span", {
                      tabIndex: g.Ee.AUTO,
                      children: t.label
                    })]
                  }, `item-${r}`))
                })]
              })
            })]
          })
        };
      var B = a(70824),
        G = a.n(B),
        $ = a(4766),
        q = a(88011),
        z = a(90242),
        W = a(33853);
      let V = g.Ee.THIRD,
        X = g.Ee.FOURTH,
        H = ({
          zIndexStartVal: e,
          attributes: {
            logo: t = null,
            logoLabel: a = null,
            links: i = [],
            override_color_topbar_background: o = null,
            override_color_item_normal_label: d = null,
            override_color_item_hover_background: c = null,
            menuActions: v = null,
            logoMobile: b = null
          }
        }) => {
          let S, j, {
              features: C
            } = (0, I.R)(),
            N = (0, E.XI)(),
            {
              logout: k
            } = (0, E.xV)(),
            A = (0, n.useSearchParams)(),
            [T, L] = (0, r.useState)(!1),
            D = (0, r.useRef)(null),
            [F, U] = (0, r.useState)(1),
            M = (0, r.useRef)(null),
            B = (0, r.useRef)(null),
            H = (0, r.useRef)(null),
            J = (0, r.useRef)(null),
            [Y, K] = (0, r.useState)(!1),
            Q = (0, n.usePathname)(),
            Z = v?.find(e => "auth" === e.actions)?.button?.label || "Sign in",
            [ee, et] = (0, r.useState)(!1),
            ea = (0, $.d7)(window.innerWidth, 200),
            {
              openModal: es
            } = (0, P.h)(),
            er = (0, W.d)(),
            [en, ei] = (0, r.useState)(!0);
          (0, r.useEffect)(() => {
            ei(er.isAbove(_.LB.sm))
          }, [er]);
          let eo = Q.includes("/games/"),
            el = Q.match(/\/games\/([^\/]+)/)?.[1] || "",
            ed = i?.map((e, t) => {
              let a = e.href.split("/").filter(Boolean).pop(),
                r = Q.split("/").filter(Boolean).pop();
              return (0, s.jsx)(x.LocalizedLink, {
                prefetch: "default",
                ref: J,
                href: e.href,
                target: e.target,
                onClick: () => (0, R.Bv)(e?.label ?? "", t, "top"),
                "aria-current": r === a ? "page" : void 0,
                onKeyDown: e => 0 === t && ex(e),
                className: ["ark-ui-topbar-link", "topbar-link", "_1uqvs925", r === a ? "_1uqvs926" : null].filter(Boolean).join(" "),
                "data-testid": "topbar-link",
                children: e?.label?.substring?.(0, 12) || ""
              }, t)
            });

          function ec() {
            let e = document.activeElement;
            e?.classList.contains("ark-ui-search-active") && e.blur()
          }(0, r.useEffect)(() => (window.matchMedia("(min-width: 1024px)"), function(e = !1) {
            document?.body?.querySelector?.(`.${u}`)?.setAttribute("tabindex", V.toString()), (document?.body?.querySelectorAll(".ark-ui-topbar.topbar .ark-ui-topbar-link") || []).forEach(e => {
              e.setAttribute("tabindex", X)
            })
          }(!0)), []), (0, r.useEffect)(() => {
            if (T && "u" > typeof document && D.current) return setTimeout(() => document.addEventListener("scroll", ec), 400), () => {
              document.removeEventListener("scroll", ec)
            }
          }, [T, D.current]);
          let eu = (0, r.useCallback)(() => {
              L(!0)
            }, []),
            em = (0, r.useCallback)(() => {
              L(!1)
            }, []),
            ep = (0, E.Al)(),
            eh = A.get(q.T.EMAIL_CHANGE_CONFIRMATION_CODE);
          (0, r.useEffect)(() => {
            eh && N && ep && (async () => {
              try {
                await k()
              } catch (e) {}
            })()
          }, [eh, k, N, ep]);
          let ef = (e, t) => {
            if ("Tab" === e.key) switch (t) {
              case 1:
                e.shiftKey || U(2);
                break;
              case 2:
                e.shiftKey ? U(1) : U(3);
                break;
              case 3:
                e.shiftKey && U(1)
            }
          };
          (0, r.useEffect)(() => {
            if (!("MutationObserver" in window)) return;
            let e = new MutationObserver(() => {
              Y && (window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "auto"
              }), setTimeout(() => {
                K(!1), e.disconnect()
              }, 1e3))
            });
            return e.observe(document.body, {
              childList: !0,
              subtree: !0
            }), () => {
              e.disconnect()
            }
          }, [Y]);
          let eg = (e, t) => {
              if ("Enter" === e.key || "click" === e.type) {
                let e = document.getElementById(t);
                if (e) {
                  let a = (0, y.$4)(e);
                  a ? (e.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  }), setTimeout(() => {
                    a.focus()
                  }, 200)) : e.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  }), U(1), "footer-content" === t && K(!0)
                }
              }
            },
            ex = e => {
              "Tab" === e.key && e.shiftKey && (e.preventDefault(), U(3), requestAnimationFrame(() => {
                B.current?.focus()
              }))
            };
          return (0, r.useEffect)(() => {
            let e = () => {
              let e = 1024 >= Number(ea);
              e !== ee && et(e)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [ea, ee]), (0, s.jsxs)("header", {
            ref: D,
            className: "ark-ui-topbar topbar _1uqvs920",
            style: {
              "--background-color": o || "",
              zIndex: e + 1
            },
            "data-testid": "topbar",
            "data-sentry-component": "TopBar",
            "data-sentry-source-file": "index.tsx",
            children: [1 === F && (0, s.jsx)(x.LocalizedLink, {
              ref: H,
              className: u,
              href: "/",
              "aria-label": a ?? void 0,
              onKeyDown: e => ef(e, 1),
              tabIndex: g.Ee.THIRD,
              "data-testid": "topbar-logo",
              children: t?.length ? (S = ee && b || t, j = ee && b ? 48 : 152, S ? (0, s.jsx)(w.StaticImage, {
                className: "_1uqvs923",
                src: S,
                alt: a ?? "Logo",
                quality: 90,
                width: j,
                height: 48,
                "data-testid": "logo",
                "data-sentry-element": "StaticImage",
                "data-sentry-component": "imageSrc",
                "data-sentry-source-file": "index.tsx"
              }) : null) : (0, s.jsx)("div", {
                className: "_1uqvs92h"
              })
            }), 2 === F && (0, s.jsx)("button", {
              tabIndex: g.Ee.THIRD,
              role: "button",
              type: "button",
              "aria-label": "Skip to main content",
              "data-testid": "skip-to-main",
              className: h,
              onKeyDown: e => {
                ef(e, 2), "Tab" === e.key && e.shiftKey ? (e.preventDefault(), U(1), requestAnimationFrame(() => {
                  H.current?.focus()
                })) : "Enter" === e.key && eg(e, "main-content")
              },
              onClick: e => eg(e, "main-content"),
              onBlur: () => U(1),
              ref: M,
              children: "Skip to main content"
            }), 3 === F && (0, s.jsx)("button", {
              tabIndex: g.Ee.THIRD,
              role: "button",
              type: "button",
              "aria-label": "Skip to footer content",
              "data-testid": "skip-to-footer",
              className: h,
              onKeyDown: e => {
                ef(e, 3), "Tab" === e.key && e.shiftKey ? (e.preventDefault(), U(2), requestAnimationFrame(() => {
                  M.current?.focus()
                })) : "Enter" === e.key && eg(e, "footer-content")
              },
              onClick: e => eg(e, "footer-content"),
              onBlur: () => U(1),
              ref: B,
              children: "Skip to footer content"
            }), (0, s.jsx)("nav", {
              style: {
                "--normal-label-color": d || "",
                "--hover-background-color": c || ""
              },
              className: l()("_1uqvs924", T && "_1uqvs92d"),
              children: ed
            }), (0, s.jsxs)("div", {
              className: "_1uqvs927",
              "data-testid": "right-container-wrapper",
              children: [(0, s.jsx)("div", {
                className: l()("_1uqvs928", T && "_1uqvs929"),
                "data-testid": "search",
                children: (0, s.jsx)(f.v, {
                  isFocused: T,
                  onFocus: eu,
                  onBlur: em,
                  isGamePage: eo,
                  gameSlug: el,
                  "data-sentry-element": "Search",
                  "data-sentry-source-file": "index.tsx"
                })
              }), (0, s.jsxs)("div", {
                className: "_1uqvs92a",
                children: [v?.filter(e => "auth" !== e.actions && "support" !== e.actions && "shop" !== e.actions).map((e, t) => e?.buttonOrIcon === !0 && e?.button?.label ? (0, s.jsx)("div", {
                  className: m,
                  children: (0, s.jsx)(z.$, {
                    variant: "outline",
                    size: "small",
                    className: "_1uqvs92c",
                    href: e?.button?.url,
                    children: e?.button?.label
                  })
                }, t) : e?.actionLink?.icon?.url && (0, s.jsx)("div", {
                  className: m,
                  children: (0, s.jsx)(x.LocalizedLink, {
                    href: e?.actionLink?.href,
                    target: e?.actionLink?.target,
                    "aria-label": e?.actionLink?.label || e?.actions,
                    children: (0, s.jsx)(w.StaticImage, {
                      width: 24,
                      height: 24,
                      src: e.actionLink.icon?.url || "",
                      alt: e.actionLink.label || e.actions
                    }, t)
                  })
                }, t)), C.support.enabled && (0, s.jsx)(z.$, {
                  variant: "label",
                  className: l()("_1uqvs92e"),
                  onClick: e => {
                    (0, y.fo)(Q, es, e, "topNav"), (0, R.s9)("topNav")
                  },
                  size: "small",
                  testId: "topbar-support-icon",
                  children: (0, s.jsx)(w.StaticImage, {
                    src: "/media/topbar/help-circle.svg",
                    alt: "Support icon",
                    width: 32,
                    height: 32
                  })
                }), C.auth.isSubscriberOnlyEnabled && en && (0, s.jsxs)(z.$, {
                  role: "link",
                  variant: "filled",
                  className: l()(p),
                  onClick: () => {
                    es("subscribe", void 0, "topNav")
                  },
                  size: "small",
                  testId: "topbar-ark-plus-icon",
                  children: [(0, s.jsx)(w.StaticImage, {
                    src: "/media/topbar/ark-plus.webp",
                    alt: "Arkadium Plus icon",
                    width: 23,
                    height: 25,
                    loading: "eager"
                  }), (0, s.jsx)("span", {
                    children: "Plus"
                  })]
                }), C.auth.shop.enabled && en && (0, s.jsxs)(z.$, {
                  variant: "filled",
                  className: l()(p),
                  onClick: () => {
                    es("shop", void 0, "topNav")
                  },
                  size: "small",
                  testId: "topbar-shop-icon",
                  children: [(0, s.jsx)(w.StaticImage, {
                    src: "/media/topbar/shop.webp",
                    alt: "Shop icon",
                    width: 20,
                    height: 25,
                    loading: "eager"
                  }), (0, s.jsx)("span", {
                    children: "Shop"
                  })]
                }), C.auth.enabled && (0, s.jsx)("div", {
                  className: "_1uqvs92g"
                }), C.auth.enabled ? N && ep && !eh ? (0, s.jsx)(O, {}) : (0, s.jsx)("div", {
                  className: G().ButtonWrapper,
                  "data-testid": "cta-button-modal",
                  "data-sentry-component": "renderAuthFeature",
                  "data-sentry-source-file": "index.tsx",
                  children: (0, s.jsx)(z.$, {
                    variant: "filled",
                    size: "small",
                    onClick: () => {
                      es("sign-up", void 0, "topNav"), (0, R.sY)("topNav")
                    },
                    className: G().Button,
                    "data-sentry-element": "Button",
                    "data-sentry-source-file": "index.tsx",
                    children: (0, s.jsx)("span", {
                      children: Z
                    })
                  })
                }) : null]
              })]
            })]
          })
        };
      var J = a(196);
      a(55641);
      let Y = () => (0, s.jsx)("svg", {
        className: "_1rmp7cz3",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "data-sentry-element": "svg",
        "data-sentry-component": "CloseIcon",
        "data-sentry-source-file": "CloseIcon.tsx",
        children: (0, s.jsx)("path", {
          d: "M24 8L8 24M8 8L24 24",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "data-sentry-element": "path",
          "data-sentry-source-file": "CloseIcon.tsx"
        })
      });
      var K = a(33090),
        Q = a(48976);
      let Z = "evo_notifs",
        ee = "arena_environment",
        et = "legacy_arkcom",
        ea = ({
          notificationBars: e
        }) => {
          let t = (0, r.useRef)(null),
            [a, n] = (0, r.useState)(!1),
            [i, o] = (0, r.useState)({
              startTime: 0,
              remainingTime: 0,
              timeoutRef: null
            }),
            [d, c] = (0, r.useState)(),
            [u, m] = (0, r.useState)(-1),
            {
              gameState: p
            } = (0, Q.xg)(),
            h = (0, v.lm)(),
            {
              icon: f,
              title: _,
              text: b,
              link: S,
              cta: j,
              analyticId: C,
              dismissButton: w,
              closeIcon: N,
              autoDismiss: k,
              autoDismissTime: E,
              bgColor: I,
              closeColor: A,
              textColor: P
            } = d?.length && u >= 0 ? d[u] : {},
            T = {
              notifId: C,
              notifType: k ? "expirable" : "nonexpirable"
            },
            L = null,
            D = null,
            F = () => {
              L || (L = document.querySelector("main.gamepage .gamepage_game-area_game-container")), D || (D = document.querySelector("main.gamepage #ark_pre-roll")), L?.classList.remove("with-notification-bar"), D?.classList.remove("with-notification-bar")
            },
            U = () => {
              let e = (0, y.dJ)(Z)?.split("|") ?? [];
              e.push(d[u]?.id.toString());
              let t = new Date,
                a = (t.getMonth() + 1) % 12;
              t.setMonth(a), document.cookie = `${Z}=${e.join("|")}; expires=${t.toUTCString()}; Secure`, n(!0), F(), setTimeout(() => {
                n(!1);
                let e = u + 1 >= d.length ? -1 : u + 1; - 1 !== e && (0, R.xR)(T), m(e)
              }, 5e3)
            },
            M = e => {
              let t = setTimeout(() => {
                U(), (0, R.xR)({
                  ...T,
                  notifAction: "Expire"
                }), o({
                  startTime: 0,
                  remainingTime: 0,
                  timeoutRef: null
                })
              }, e);
              o({
                startTime: Date.now(),
                remainingTime: e,
                timeoutRef: t
              })
            },
            O = () => {
              t.current && document.documentElement.style.setProperty("--top-padding", `${t.current?.clientHeight??0}px`)
            },
            B = (e, t) => {
              var a;
              if (a = {
                  ...T,
                  notifAction: t
                }, (0, R.kF)(a), S?.href?.includes?.(et) || j?.href?.includes?.(et)) {
                e.preventDefault();
                let t = new Date;
                t.setTime(t.getTime() + 15768e7), document.cookie = `${ee}=arena;expires=${t.toUTCString()};path=/;`, location.reload()
              }
            };
          return (0, r.useEffect)(() => {
            let e, t = (...t) => {
              clearTimeout(e), e = setTimeout(() => O(...t), 300)
            };
            return window.addEventListener("resize", t), O(), F(), () => {
              window.removeEventListener("resize", t)
            }
          }, [h, u, a]), (0, r.useEffect)(() => {
            !k || w || M((() => {
              if (E) return 1e3 * Number(E.split("-")?.at(-1));
              let e = 1e4,
                t = [_, b, S?.label].map(e => e?.split(" ")?.length ?? 0).reduce((e, t) => e + t);
              return t > 15 ? e += 1e4 : t > 10 && (e += 5e3), e
            })())
          }, [k, w]), (0, r.useEffect)(() => {
            if (!["xs", "sm"].includes(h) || !d?.length || !k || w) {
              i.timeoutRef && M(i.remainingTime);
              return
            }
            q.K9.includes(p) && i.timeoutRef && (clearTimeout(i.timeoutRef), o(e => ({
              ...e,
              timeoutRef: null,
              remainingTime: e.remainingTime - (Date.now() - e.startTime)
            }))), q.K9.includes(p) || i.timeoutRef || !(i.remainingTime > 0) || M(i.remainingTime)
          }, [h, d, k, w, p]), (0, r.useEffect)(() => {
            if (!e?.length) return;
            let t = e.filter(e => {
                let t, a = e.link?.href?.includes?.(et) || e.cta?.href?.includes?.(et),
                  s = !!((t = (0, y.dJ)(ee)) && t.length > 0);
                return !a || s
              }),
              a = (0, y.dJ)(Z)?.split("|");
            if (!a?.length) {
              c(t), m(0), (0, R.xR)(T);
              return
            }
            let s = t.filter(e => {
              let t = !e.autoDismiss && !e.dismissButton,
                s = !a?.includes(e.id.toString());
              return t || s
            });
            s?.length ? (c(s), m(0), (0, R.xR)(T)) : m(-1)
          }, [e]), (0, r.useEffect)(() => {
            document.body.classList.toggle("with-notification-bar", !a && -1 !== u)
          }, [a, u, p, h]), d && d.length > 0 && (0, s.jsxs)("div", {
            ref: t,
            className: l()("notificationBar", "_1rmp7cz0", (a || -1 === u) && "_1rmp7cz1"),
            style: {
              "--background-color": I,
              "--text-color": P,
              "--close-color": A
            },
            children: [(0, s.jsxs)("div", {
              className: "_1rmp7cz8",
              children: [f && (0, s.jsx)("img", {
                width: "32",
                height: "32",
                className: "_1rmp7cz4",
                src: f.url,
                "aria-hidden": !0
              }), (0, s.jsxs)("p", {
                className: "_1rmp7cz7",
                children: [_ ?? "", b && (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)("br", {}), b]
                }), S && (0, s.jsxs)(s.Fragment, {
                  children: ["\xa0", (0, s.jsx)(x.LocalizedLink, {
                    className: "_1rmp7cz5",
                    href: S.href.replace(et, ""),
                    target: S.target,
                    tabIndex: g.Ee.FIRST,
                    onClick: e => B(e, "Text Link"),
                    children: S.label
                  })]
                })]
              }), j && (0, s.jsx)(z.$, {
                variant: "outline",
                size: "small",
                className: "_1rmp7cz6",
                href: j.href.replace(et, ""),
                target: j.target,
                tabIndex: g.Ee.FIRST,
                onClick: e => B(e, "CTA"),
                children: (0, s.jsxs)("div", {
                  children: [j.icon && (0, s.jsx)("img", {
                    width: "24",
                    height: "24",
                    src: j.icon.url,
                    alt: "Button Icon",
                    "aria-hidden": !0
                  }), (0, s.jsx)(K.JU, {
                    size: "medium",
                    children: j.label
                  })]
                })
              })]
            }), w && (0, s.jsx)("button", {
              className: l()("dismissNotificationButton", "_1rmp7cz2"),
              type: "button",
              tabIndex: g.Ee.SECOND,
              onClick: () => {
                (0, R.m$)({
                  ...T,
                  notifAction: "Close"
                }), U()
              },
              "aria-label": "Close notification",
              children: N ? (0, s.jsx)("img", {
                width: "32",
                height: "32",
                src: N.url,
                "aria-label": "Close notification"
              }) : (0, s.jsx)(Y, {})
            })]
          })
        },
        es = ({
          id: e,
          src: t
        }) => (0, s.jsx)("img", {
          id: e,
          src: t,
          alt: "tracking-pixel",
          "aria-hidden": "true",
          style: {
            display: "none"
          },
          "data-sentry-component": "Pixel",
          "data-sentry-source-file": "index.tsx"
        });
      a(3883);
      var er = "_1lj742y8",
        en = a(26778),
        ei = a(63554),
        eo = a(93284),
        el = a(83226),
        ed = a(77762);
      let ec = (e, t, a, r) => (0, s.jsx)("li", {
          "data-sentry-component": "renderGroupLink",
          "data-sentry-source-file": "index.tsx",
          children: (0, s.jsxs)(x.LocalizedLink, {
            href: e.href,
            target: e.target,
            "aria-label": e.label,
            onClick: t => {
              e.href.includes("arkadiumsupport") && (t?.preventDefault(), r && (0, y.fo)(a ?? "/", r, t, "footer")), (0, R.gF)(e)
            },
            rel: e.isNoFollow ? "nofollow" : void 0,
            "data-testid": `footer-link-${e.label?.toLowerCase().replace(/\s+/g,"-")}`,
            "data-sentry-element": "LocalizedLink",
            "data-sentry-source-file": "index.tsx",
            children: [(0, s.jsx)("span", {
              children: e.label
            }), e?.icon && (0, s.jsx)(en.default, {
              unoptimized: !0,
              className: "icon",
              src: e?.icon?.url,
              alt: e.label || "Link icon",
              quality: 90,
              width: 30,
              height: 14
            })]
          })
        }, `groupLink-${t}-${e.href}-${t}`),
        eu = ({
          attributes: e
        }) => {
          let t = (0, n.usePathname)(),
            {
              openModal: a
            } = (0, P.h)(),
            {
              isGDPRApplies: i,
              isSpecificUSState: o,
              isMicrosoftDomain: d,
              openConsentPopup: c
            } = (0, ed.b)(),
            u = !el.S && window && window.innerWidth <= 568,
            {
              logo: m,
              logoLink: p,
              background: h,
              groups: f,
              socialLinks: g,
              fontColor: y,
              text: _,
              manageCookiesLabel: v
            } = e ?? {},
            {
              gameState: b
            } = (0, Q.xg)(),
            S = l()("_1lj742y0", {
              _1lj742y1: b === ei.m.GAME && u
            }),
            j = new Date().getFullYear();
          return (0, r.useEffect)(() => {
            let e = document.createElement("style");
            return e.innerHTML = `     
        footer {
            background-color: ${h||"#000"}
        }

        footer .container ul li a, 
        footer .container ul li button, 
        footer .container p {
            color: ${y||"#fff"}
        }
            `, document.head.appendChild(e), () => {
              document.head.removeChild(e)
            }
          }, [h, y]), (0, s.jsx)("footer", {
            className: S,
            id: "footer-content",
            "data-testid": "footer",
            "data-sentry-component": "Footer",
            "data-sentry-source-file": "index.tsx",
            children: (0, s.jsxs)("div", {
              className: l()("_1lj742y2", "container"),
              children: [(0, s.jsxs)("div", {
                className: "_1lj742y6",
                children: [m && (0, s.jsx)("div", {
                  className: "_1lj742y3",
                  children: (() => {
                    if (m?.url == "undefined" || m?.url == null) return (0, s.jsx)(s.Fragment, {});
                    let e = (0, s.jsx)(en.default, {
                      unoptimized: !0,
                      src: m?.url,
                      alt: "Company logo",
                      quality: 90,
                      width: 0,
                      height: 0,
                      objectFit: "contain"
                    });
                    return p ? (0, s.jsx)(x.LocalizedLink, {
                      href: p.href,
                      target: p.target,
                      onClick: e => {
                        (0, R.OZ)(p)
                      },
                      "aria-label": p.label ?? "Company logo",
                      "data-sentry-element": "LocalizedLink",
                      "data-sentry-component": "imageSrc",
                      "data-sentry-source-file": "index.tsx",
                      children: e
                    }) : e
                  })()
                }), (0, s.jsxs)("p", {
                  children: [" ", "\xa9 ", j, " ", _]
                }), (0, s.jsx)("div", {
                  className: "_1lj742y7",
                  children: (0, s.jsx)("ul", {
                    className: "_1lj742y5",
                    children: g ? g.filter(e => e.icon).map((e, t) => (0, s.jsx)("li", {
                      children: (0, s.jsx)(x.LocalizedLink, {
                        href: e.href,
                        target: e.target,
                        "aria-label": e.label,
                        onClick: () => (0, R.Sz)(e),
                        rel: e.isNoFollow ? "nofollow" : void 0,
                        children: (0, s.jsx)(en.default, {
                          unoptimized: !0,
                          className: "icon",
                          src: e?.icon?.url,
                          alt: e.label || "Social media icon",
                          quality: 90,
                          width: 24,
                          height: 24
                        })
                      })
                    }, `socialLinks-${t}-${e.href}`)) : null
                  })
                })]
              }), (0, s.jsx)("div", {
                className: "_1lj742y4",
                children: ((e, t, a, n, i, o, l, d) => {
                  var c, u;
                  let [m, p] = (0, r.useState)(!1);
                  return ((0, r.useEffect)(() => {
                    p(eo.sj.getItem(eo.sJ.popupGDPRCookieConsent, !0).length > 0)
                  }, []), o) ? [...o.slice(0, o.length - 1).map((e, t) => (0, s.jsx)("ul", {
                    children: e.link.map(e => ec(e, t, l, d))
                  }, `group-${t}`)), ...(c = o.slice(-1), u = i ?? "Manage Cookies", c.map(r => {
                    let i, o, c, p;
                    return (0, s.jsxs)("ul", {
                      children: [r.link.map((e, t) => ec(e, t, l, d)), n && (i = "Your Privacy Choices", o = {
                        url: "/media/us_privacy_choices_icon.svg"
                      }, (0, s.jsx)("li", {
                        "data-sentry-component": "renderMicrosoftGroupLink",
                        "data-sentry-source-file": "index.tsx",
                        children: (0, s.jsxs)(x.LocalizedLink, {
                          href: "https://aka.ms/YourCaliforniaPrivacyChoices",
                          target: "_blank",
                          "aria-label": i,
                          onClick: () => (0, R.zX)(),
                          "data-sentry-element": "LocalizedLink",
                          "data-sentry-source-file": "index.tsx",
                          children: [(0, s.jsx)("span", {
                            children: i
                          }), (0, s.jsx)(en.default, {
                            unoptimized: !0,
                            className: "icon",
                            src: o.url,
                            alt: i || "Privacy choices icon",
                            quality: 90,
                            width: 30,
                            height: 14,
                            "data-sentry-element": "Image",
                            "data-sentry-source-file": "index.tsx"
                          })]
                        })
                      }, "msGroupRef")), !n && a && (c = "Your Privacy Choices", p = {
                        url: "/media/us_privacy_choices_icon.svg"
                      }, (0, s.jsx)("li", {
                        "data-sentry-component": "renderUSGroupLink",
                        "data-sentry-source-file": "index.tsx",
                        children: (0, s.jsxs)("button", {
                          type: "button",
                          className: er,
                          "aria-label": c,
                          onClick: () => {
                            (0, R.vn)(), e()
                          },
                          children: [(0, s.jsx)("span", {
                            children: c
                          }), (0, s.jsx)(w.StaticImage, {
                            className: "icon",
                            src: p.url,
                            alt: c || "Privacy choices icon",
                            quality: 90,
                            width: 30,
                            height: 14,
                            "data-sentry-element": "StaticImage",
                            "data-sentry-source-file": "index.tsx"
                          })]
                        })
                      }, "usGroupLink" + c)), (t || m) && (0, s.jsx)("li", {
                        "data-sentry-component": "renderGDPRGroupLink",
                        "data-sentry-source-file": "index.tsx",
                        children: (0, s.jsx)("button", {
                          type: "button",
                          className: er,
                          "aria-label": u,
                          onClick: () => {
                            (0, R.gr)(), e()
                          },
                          children: (0, s.jsx)("span", {
                            children: u
                          })
                        })
                      }, "gdprGroupLink" + u)]
                    }, "last-group")
                  }))] : null
                })(c, i, o, d, v, f, t, a)
              })]
            })
          })
        };
      var em = a(41208),
        ep = a.n(em),
        eh = a(17413);
      let ef = (e, t) => `${e}-${t.replace(/ /g,"-")}`,
        eg = e => {
          if (!e) return null;
          let t = String(e).trim().startsWith("<script>") ? e.slice(8, -9) : e;
          return ep()(t).replace(/&gt;/g, ">").replace(/&lt;/g, "<")
        },
        ex = ({
          scripts: e,
          onLoad: t,
          readyToLoadMicrosoft1DS: a,
          googleTagManagerId: n,
          shouldLoadQuantcastScript: o,
          shouldLoadMicrosoftClarity: l
        }) => {
          if (!e) return null;
          let d = e.map(e => {
            let d;
            if ("rawScript" === e.scriptLoadingType) {
              let r, d = e.name === q.MQ.MicrosoftOneDSCustomTelemetry,
                c = e.name === q.MQ.MICROSOFT_CLARITY;
              if (d && !a || e.name.toLowerCase().includes(q.MQ.QUANTCAST) && !o || c && !l) return null;
              if (e.name === q.MQ.GOOGLE_TAG_MANAGER)
                if (!n) return null;
                else e.mainScript = e.mainScript.replace("GOOGLE_TAG_MANAGER_ID", n);
              return r = [e.codeBeforeMainScript, e.mainScript, e.codeAfterMainScript].filter(Boolean).map(eg).join("; \n"), (0, s.jsx)(i.default, {
                strategy: "afterInteractive",
                defer: !0,
                id: ef("inline-main-script", e.name),
                onReady: () => t(e.name),
                "data-sentry-element": "Script",
                "data-sentry-component": "buildRawScript",
                "data-sentry-source-file": "index.tsx",
                children: r
              }, ef("inline-main-script", e.name))
            }
            if ("cdnURL" === e.scriptLoadingType) return (0, s.jsxs)(r.Fragment, {
              children: [e.codeBeforeMainScript && (0, s.jsx)(i.default, {
                id: ef("before-url-main-script", e.name),
                strategy: "afterInteractive",
                defer: !0,
                children: eg(e.codeBeforeMainScript)
              }), (0, s.jsx)(i.default, {
                src: e.mainScript,
                id: ef("url-main-script", e.name),
                strategy: "afterInteractive",
                defer: !0,
                onLoad: () => {
                  t(e.name)
                },
                "data-sentry-element": "Script",
                "data-sentry-source-file": "index.tsx"
              }), e.codeAfterMainScript && e.isLoaded && (0, s.jsx)(i.default, {
                id: ef("after-url-main-script", e.name),
                strategy: "afterInteractive",
                defer: !0,
                children: eg(e.codeAfterMainScript)
              })]
            }, ef("url-main-script", e.name));
            return (0, s.jsx)(r.Fragment, {
              children: (0, s.jsx)(() => {
                if ("AppInsight" === e.mainScript[0]) try {
                  t(e.name)
                } catch (e) {
                  (0, eh.t)().error({
                    data: e
                  }, "[buildInternalScript] - Error importing the mock package:")
                }
                return null
              }, {
                "data-sentry-element": "MainScript",
                "data-sentry-source-file": "internalScripts.tsx"
              })
            }, (d = e.name, `before-internal-main-script-${d}`))
          });
          return (0, s.jsx)(s.Fragment, {
            children: d
          })
        },
        ey = () => {
          let [e, t] = (0, r.useState)(null), {
            isGDPRApplies: a,
            tcString: n,
            muidCookie: i
          } = (0, ed.b)();
          return ((0, r.useEffect)(() => {
            if (null === a || a && null === n || document.cookie.includes("3PAdsOptOut") || document.cookie.includes("TOptOut") || "1" === navigator.doNotTrack) return;
            let e = new URLSearchParams({
              adid: i ?? "",
              red3: "MSAN_MCGz_pd",
              gdpr: "0"
            });
            a && (e.set("gdpr", "1"), e.set("gdpr_consent", n)), t(`https://c.bing.com/c.gif?${e.toString()}`)
          }, [a, n, i]), null === e) ? null : (0, s.jsx)("img", {
            src: e,
            alt: "Bing tracking pixel",
            "aria-hidden": "true",
            width: 1,
            height: 1,
            style: {
              display: "none"
            },
            "data-sentry-component": "BingPixel",
            "data-sentry-source-file": "index.tsx"
          })
        };
      var e_ = a(24408),
        ev = a(54026),
        eb = a(88828),
        eS = a(79760),
        ej = a(646),
        eC = a(67754),
        ew = a(57873),
        eN = a(87070),
        ek = a(99554),
        eE = a(79481);
      let eI = (0, eE.createServerReference)("404b578ecf029b88517fc9a2b7a328292a665ec46a", eE.callServer, void 0, eE.findSourceMapURL, "fetchLiveRampEnvelopeAction");
      var eA = a(66177);
      let eP = !1,
        eR = !1,
        eT = async (e, t) => {
          if (!eP) return await new Promise(async s => {
            try {
              let r = await (0, eA.E)(() => Promise.resolve().then(a.bind(a, 11385)));
              await r.AppInsightService.init(e, t), eP = !0, s()
            } catch (e) {
              throw (0, eh.t)().error({
                data: e
              }, "[initAppInsight] - Error loading AppInsights module"), (0, d.wd)("[initAppInsight] - Error loading AppInsights module", {
                level: "error"
              }), e
            }
          })
        }, eL = async () => {
          if (eR) return;
          let e = (0, c.env)("NEXT_PUBLIC_GA_ID") || "";
          if (!e) {
            (0, eh.t)().error("[initGA] ID is missing from the configs"), (0, d.wd)("[initGA] ID is missing from the configs", {
              level: "error"
            });
            return
          }
          try {
            (await (0, eA.E)(() => Promise.resolve().then(a.bind(a, 94779)))).GoogleAnalyticsService.init(e), eR = !0
          } catch (e) {
            throw (0, eh.t)().error({
              data: e
            }, "[initGA] - Error loading Google Analytics module"), (0, d.wd)("[initGA] - Error loading Google Analytics module", {
              level: "error"
            }), e
          }
        };
      var eD = a(33097),
        eF = a(30423),
        eU = a(64604),
        eM = a(99005),
        eO = a(55823),
        eB = a(66788),
        eG = a(85352);
      a(76413);
      let e$ = ({
        children: e,
        arenaData: t,
        notificationBars: a,
        domain: o
      }) => {
        let u = (0, eh.t)(),
          {
            isMicrosoftDomain: m,
            targetingConsent: p,
            gdprConsent: h,
            isGDPRApplies: f,
            browserTrackingConsent: g,
            readyToLoadMicrosoft1DS: x,
            shouldLoadQuantcastScript: _,
            shouldLoadMicrosoftClarity: v,
            setIsQuantcastScriptLoaded: b,
            setIsMicrosoftClarityScriptLoaded: S
          } = (0, ed.b)(),
          j = null !== g && m && p && h,
          {
            browser: C,
            detectDevice: w,
            os: N
          } = (0, eS.i)(),
          k = C?.name,
          P = w(),
          T = N.name || "unknown",
          L = (0, E.w1)(),
          {
            resetGameplayId: D
          } = (0, eb.T3)(),
          F = (0, E.Q2)(),
          {
            uid: U,
            registrationDate: M,
            isEmailConfirmed: O
          } = (0, E.sb)(),
          B = F?.subscriptionID,
          {
            features: G
          } = (0, I.R)(),
          {
            isSubscriber: $
          } = (0, E.sb)(),
          z = (0, Q.xg)(),
          W = z?.configGamePage,
          V = G.auth.enabled,
          [X, Y] = (0, r.useState)(null);
        (0, r.useEffect)(() => {
          (0, d.NA)("platform.deviceMemory", navigator.deviceMemory?.toString() || "unknown"), (0, d.NA)("platform.networkType", navigator.connection?.effectiveType || "unknown")
        }, []);
        let K = t.external_scripts?.some(e => e.name.toLowerCase().includes("quantcast")) ?? !1,
          [Z, ee] = ((e, t, a, s, n, i) => {
            let [o, l] = (0, r.useState)(null), [d] = (0, eO.k)(s, a);
            return (0, r.useEffect)(() => {
              null === e || null === t || l((t ? e : e.filter(e => !e.name.toLowerCase().includes("quantcast"))).map(e => ({
                id: e.id,
                name: e.name,
                isLoaded: !1,
                ...e.script
              })))
            }, [e, t, n]), [o, async e => {
              if (l(t => t?.map(t => t.name === e ? {
                  ...t,
                  isLoaded: !0
                } : t) ?? null), e.toLowerCase().includes("quantcast") && n(!0), e === q.MQ.MICROSOFT_CLARITY && i) {
                i(!0);
                let e = JSON.parse(eo.sj.getItem(eo.sJ.userConsentDetails, !0)),
                  t = {
                    1: !!e.Advertising,
                    10: !!e.Analytics
                  };
                if (d) {
                  let e = (0, eM.Tc)(d, t);
                  setTimeout(() => {
                    (0, eM.IS)(e)
                  }, 500)
                }
              }
            }]
          })(t.external_scripts, _, K, o, b, S),
          et = e => e ? "development" === (0, c.env)("NEXT_PUBLIC_BUILD_ENV") ? `${e}` : e : "",
          er = t.layout?.styleOverride?.topbar,
          en = t.layout?.styleOverride?.topbarLink,
          ei = en?.find(e => "normal" === e.state),
          el = en?.find(e => "hover" === e.state),
          ec = {
            links: t.layout?.topBarLinks,
            logo: et(t.logo?.url ?? ""),
            logoLabel: t.logo_label,
            override_color_topbar_background: er?.background,
            override_color_item_normal_label: ei?.color,
            override_color_item_hover_background: el?.background,
            menuActions: t.layout?.menuActions,
            supportAreaId: t.support_area?.id,
            logoMobile: et(t.logoMobile?.url ?? "")
          };
        ((e, t, a, s) => {
          let n = (0, E.w1)(),
            {
              isSubscriber: i,
              uid: o,
              emailRetrievalConsent: l,
              name: u,
              registrationDate: m
            } = (0, E.sb)(),
            p = (0, E.Q2)(),
            {
              gems: h
            } = (0, E.Ij)(),
            f = (0, Q.xg)(),
            g = f?.configGamePage,
            x = f?.gameData?.slug,
            {
              prerollFreePeriod: y
            } = (0, ew.nW)(g?.prerollConfiguration),
            _ = (0, c.env)("NEXT_PUBLIC_BUILD_ENV"),
            v = (0, r.useMemo)(() => "development" === _ ? "pseudo-coins" : "gems_prod", [_]),
            {
              features: {
                core: {
                  analytics: {
                    appInsights: {
                      instrumentationKey: b,
                      connectionString: S
                    }
                  },
                  isNewUserTypeEnabled: j
                },
                auth: C
              }
            } = (0, I.R)(),
            w = (0, r.useCallback)(async (e, t) => {
              (0, ev.E7)(e), await t(), await (0, ev.n_)(j, y, i)
            }, [j, y, i]);
          (0, r.useEffect)(() => {
            let t = async () => {
              if (null !== a) {
                await w("granted", async () => {
                  try {
                    await eT(b, S)
                  } catch (e) {
                    (0, d.Cp)(e, {
                      tags: {
                        component: "useAnalytics",
                        method: "handleAnalyticsInit:initAppInsight"
                      }
                    }), (0, eh.t)().error({
                      data: e
                    }, "Failed to initialize App Insights")
                  }
                });
                try {
                  let t = "authenticated" === n,
                    s = t && !!m,
                    r = p ? (0, eU.zN)(p.activeSubscriptions || [], p.expiredSubscriptions || []) : void 0,
                    d = (0, eU.uS)(r),
                    c = r ? (0, eU.sc)(r) ? "trial" : "active" === d ? "active" : "expired" : "none";
                  await eD.y.init({
                    gdprConsent: a,
                    clevertapConfig: e,
                    loggedIn: t,
                    registered: s,
                    subscriber: i,
                    emailConsent: l || !1,
                    lastGamePlayed: x,
                    subscriptionAutorenew: r?.isAutoRenewable || !1,
                    subscriptionLifecycle: c,
                    subscriptionPlan: r?.planId,
                    subscriptionStatus: d,
                    userId: o,
                    userName: u,
                    virtualItemSpent: !1
                  }), eD.y.setConsent(a)
                } catch (e) {
                  (0, d.Cp)(e, {
                    tags: {
                      component: "useAnalytics",
                      method: "handleAnalyticsInit:ClevertapService"
                    }
                  }), (0, eh.t)().error({
                    data: e
                  }, "Failed to initialize Clevertap")
                }
              }
            };
            C.enabled && "loading" === n || t()
          }, [a, w, e, C.enabled, n, o, l, x, p, b, S, u, h]), (0, r.useEffect)(() => {
            (0, ev.DD)(s, t) && w("granted", async () => {
              try {
                await eL()
              } catch (e) {
                (0, eh.t)().error({
                  data: e
                }, "Failed to initialize Google Analytics"), (0, d.Cp)(e, {
                  tags: {
                    component: "useAnalytics",
                    method: "loadGA"
                  }
                })
              }
            })
          }, [s, t, w]), (0, r.useEffect)(() => {
            if (p) try {
              let e = (0, eU.zN)(p.activeSubscriptions || [], p.expiredSubscriptions || []),
                t = (0, eU.uS)(e),
                a = e ? (0, eU.sc)(e) ? "trial" : "active" === t ? "active" : "expired" : "none";
              eD.y.updateUserProfile({
                subscription_autorenew: e?.isAutoRenewable || !1,
                subscription_lifecycle: a,
                subscription_plan: e?.planId || "",
                subscription_status: t
              })
            } catch (e) {
              (0, eh.t)().debug({
                data: e
              }, "Failed to update Clevertap subscription properties")
            }
          }, [p]);
          let N = (0, r.useMemo)(() => null !== h ? {
            [v]: h
          } : void 0, [h, v]);
          (0, r.useEffect)(() => {
            "authenticated" === n ? eD.y.updateUserProfile({
              loggedIn: !0,
              subscriber: i,
              ...o && {
                user_id: o
              },
              ...u && {
                user_name: u
              },
              ...N && {
                userInventory: JSON.stringify(N)
              }
            }) : "unauthenticated" === n && eD.y.updateUserProfile({
              loggedIn: !1
            })
          }, [n, o, u, h, i, v]);
          let k = (0, r.useRef)(!1),
            A = (0, r.useRef)(null);
          (0, r.useEffect)(() => {
            if ("authenticated" !== n) {
              k.current = !1, A.current = null;
              return
            }
            if (k.current) {
              null !== A.current && eD.y.updateUserProfile({
                virtualItemSpent: A.current
              });
              return
            }
            let e = !1;
            return k.current = !0, (async () => {
              try {
                let t = await (0, eF.db)(eF.lJ.VIRTUAL_ITEMS_SPENT);
                if (e) return;
                if (!t || "object" == typeof t && "virtualItemSpent" in t == !1) {
                  k.current = !1;
                  return
                }
                let a = !!t.virtualItemSpent;
                A.current = a, e || eD.y.updateUserProfile({
                  virtualItemSpent: a
                })
              } catch (t) {
                e || ((0, eh.t)().debug({
                  data: t
                }, "Failed to check eagle prop for virtual items spent"), k.current = !1)
              }
            })(), () => {
              e = !0
            }
          }, [n])
        })(t.clevertap, p, h, f), (0, r.useEffect)(() => {
          let e = P === eS.b.MOBILE ? "phone" : P,
            {
              prerollFreePeriod: a
            } = (0, ew.nW)(W?.prerollConfiguration);
          e_.CA.updateConfig({
            baseParams: {
              browser: k,
              deviceType: e,
              loggedIn: "authenticated" === L,
              gdprConsent: h ?? !1,
              xsollaId: U || "",
              subscriptionId: B || "",
              isEmailConfirmed: "authenticated" === L && O
            },
            baseCustomDimensions: {
              arenaLayoutID: t.layout?.analyticId ?? "",
              ...{
                pwa: (0, R.BG)() ? "yes" : "no"
              }
            }
          }), eN.m.isIncognito().then(e => {
            e_.CA.updateConfigWithUserType(G.core.isNewUserTypeEnabled, a ?? void 0, e, $)
          })
        }, [t, k, P, h, U, B, L, G.core.isNewUserTypeEnabled, W?.prerollConfiguration, $, O]);
        let em = (0, n.usePathname)(),
          {
            currentLocale: ep,
            isDefaultLocaleHidden: ef
          } = (0, A.s)(),
          eg = em.includes("/games/"),
          eE = em.match(/\/games\/([^\/]+)/)?.[1] || "",
          {
            favoriteGames: eA,
            favoriteGamesLoading: eP
          } = (0, E.rB)(),
          eR = (0, E.XI)(),
          e$ = (0, r.useMemo)(() => eg && eR && !!eA && !!eA?.includes(eE), [eg, eR, eA, eE]),
          eq = !eR || !eP,
          ez = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
          (0, eo.rj)()
        }, []), (0, r.useEffect)(() => {
          D()
        }, [em, D]), (0, r.useEffect)(() => {
          ez.current = null
        }, [em]), (0, r.useEffect)(() => {
          "loading" === L && V || !eq || ez.current !== em && (ez.current = em, localStorage.setItem(ek.e7, M || ""), e_.CA.updateConfig({
            baseParams: {
              pageType: (0, ej.M5)(ef),
              pagePath: em
            },
            baseCustomDimensions: {
              isFavorited: e$
            }
          }), (0, R.oe)(k.name, P, T), (0, R.Yf)(), em.includes("/games/") || e_.CA.updateConfig({
            baseParams: {
              recommendedGamesStart: "No"
            }
          }))
        }, [em, L, eq, e$, V, ef, M]);
        let eW = (0, n.useSearchParams)();
        (0, r.useEffect)(() => {
          (async () => {
            try {
              let e = await (0, eF.HX)();
              (0, d.NA)(eB.K9, e.country_code), Y(e.country_code)
            } catch (e) {
              u.error({
                data: e
              }, "[ArenaView] - Error fetching user country")
            }
          })()
        }, []);
        let eV = e => e ? e.map(e => /^https?:\/\//.test(e.href) ? e : {
            ...e,
            href: (0, ej.Nf)(e.href, ep)
          }) : [],
          eX = (t.layout?.topBarLinks?.length ?? 0) > 0,
          eH = t.layout?.topBar === !1 && eX || t.layout?.sideBar === !1 || em?.includes?.("/games/") || em?.includes?.("/support") && eW?.has("origin") && eW?.has("intercept") && eW.get("origin")?.includes("games"),
          eJ = t.layout?.sidebar_groups?.map(e => ({
            ...e,
            icon: et(e.icon?.url),
            sidebar_items: e.sidebar_items?.map(e => ({
              ...e,
              icon: et(e.icon?.url),
              link: {
                ...e.link,
                href: e.link?.href ? eV([e.link])[0].href : void 0
              }
            }))
          })),
          eY = t.layout?.styleOverride?.sidebar,
          eK = t.layout?.styleOverride?.sidebarItem,
          eQ = eK?.find(e => "normal" === e.state),
          eZ = eK?.find(e => "hover" === e.state),
          e0 = {
            sidebarHiddenClosedState: eH,
            groups: eJ,
            topbarLinks: eV(t.layout?.topBarLinks),
            override_color_item_normal_label: eQ?.color,
            override_color_item_hover_background: eZ?.background,
            override_color_item_hover_border: eZ?.border,
            override_color_sidebar_background: eY?.background,
            override_color_sidebar_divider: eY?.divider,
            override_color_sidebar_toggle: eY?.toggle,
            override_color_sidebar_toggle_background: eY?.toggleBackground || er?.background,
            zIndexStartVal: 100,
            menuActions: t.layout?.menuActions,
            supportAreaId: t.support_area?.id
          },
          e1 = (t.layout?.topBar || t.layout?.sideBar) && (eX || eJ?.find(e => e?.link?.label || e?.sidebar_items?.find(e => e?.link?.label))),
          e2 = r.memo(J.z);
        (0, r.useEffect)(() => {
          let e, t;

          function a() {
            window.userActive = !0, s()
          }

          function s() {
            clearTimeout(e), e = setTimeout(() => {
              window.userActive = !1
            }, 12e4)
          }
          window.userActive = !0;
          let r = (...e) => {
            clearTimeout(t), t = setTimeout(() => {
              t = null, a(...e)
            }, 100)
          };
          return document.addEventListener("mousemove", r, {
            passive: !0
          }), document.addEventListener("pointermove", r, {
            passive: !0
          }), document.addEventListener("keydown", a), document.addEventListener("click", a), document.addEventListener("touchstart", a, {
            passive: !0
          }), document.addEventListener("touchmove", r, {
            passive: !0
          }), s(), () => {
            document.removeEventListener("mousemove", r), document.removeEventListener("pointermove", r), document.removeEventListener("keydown", a), document.removeEventListener("click", a), document.removeEventListener("touchstart", a), document.removeEventListener("touchmove", r)
          }
        }, []);
        let e4 = (0, ev.DD)(f, p),
          e5 = (0, c.env)("NEXT_PUBLIC_ARKADIUM_SDK_URL");
        return (() => {
          let {
            features: e
          } = (0, I.R)(), t = e.core.isMsftLiveRampEnvelopeEnabled, {
            isMicrosoftDomain: a,
            gdprConsent: s
          } = (0, ed.b)(), n = (e, t, a) => {
            document.cookie = `${e}=${encodeURIComponent(t)}; Path=/; Secure; SameSite=None; Max-Age=${a}`
          }, i = e => {
            document.cookie = `${e}=; Path=/; Secure; SameSite=None; Max-Age=0`, document.cookie = `${e}=; Path=/; Domain=${window.location.hostname}; Secure; SameSite=None; Max-Age=0`
          };
          (0, r.useEffect)(() => {
            if (!t || !a || null === s) return;
            let e = "1" === (0, y.dJ)(q.gc),
              r = "1" === (0, y.dJ)(q.O),
              o = !1 === s || e || r,
              l = (0, y.dJ)(q.mC),
              d = (0, y.dJ)(q.Y7);
            if (o) {
              l && i(q.mC), d && i(q.Y7);
              return
            }
            if (l && d) return;
            let c = (0, y.dJ)(q.lP),
              u = c?.startsWith("A=") ? c.substring(2) : void 0,
              m = d || u || void 0;
            if (l) !d && u && n(q.Y7, u, 2592e3);
            else {
              let e = (0, y.dJ)(q.b7) || void 0;
              (e || m) && eI({
                muid: e,
                anid: m
              }).then(e => {
                if (!e.success) return;
                let t = e.data?.liveRampEnvelope,
                  a = e.data?.anid;
                t && n(q.mC, t, 2592e3), a ? n(q.Y7, a, 2592e3) : !d && u && n(q.Y7, u, 2592e3)
              })
            }
          }, [a, t, s])
        })(), (0, s.jsxs)(eG.w, {
          userCountry: X,
          theySellAd: t.theySellAd,
          "data-sentry-element": "AdsProvider",
          "data-sentry-component": "ArenaView",
          "data-sentry-source-file": "view.tsx",
          children: [e5 && (0, s.jsx)(i.default, {
            id: "arena-sdk",
            strategy: "afterInteractive",
            src: e5,
            onLoad: eC.NH,
            onError: e => (0, eC.Ez)(e)
          }), null !== g && (0, s.jsx)(ex, {
            scripts: Z,
            onLoad: ee,
            readyToLoadMicrosoft1DS: x,
            googleTagManagerId: e4 ? t.google_tag_manager_id : null,
            shouldLoadQuantcastScript: _,
            shouldLoadMicrosoftClarity: v
          }), (0, s.jsxs)("div", {
            className: l()("data-wrapper", eH ? "sidebar-collapsed-hidden" : "", t.layout?.topBar && "_150q2y0"),
            "data-round_corners": t?.layout?.themeLayout?.roundCorners,
            "data-carousel_arrows_visible": t?.layout?.themeLayout?.carouselArrowsVisible,
            "data-layout": t?.layout?.themeLayout?.layout,
            "data-font": t?.layout?.themeLayout?.fontFamily,
            "data-max_width": t?.layout?.themeLayout?.arenaMaxWidth,
            "data-theme": "light",
            children: [(0, s.jsxs)("div", {
              className: "_150q2y1",
              children: [(0, s.jsx)(ea, {
                notificationBars: a,
                "data-sentry-element": "NotificationBar",
                "data-sentry-source-file": "view.tsx"
              }), (0, s.jsxs)("div", {
                className: "_150q2y2",
                children: [t.layout?.topBar && (0, s.jsx)(H, {
                  zIndexStartVal: 100,
                  attributes: ec
                }), e1 && (0, s.jsx)(e2, {
                  zIndexStartVal: 100,
                  attributes: e0,
                  isGamePage: eg,
                  gameSlug: eE
                })]
              })]
            }), e, (0, s.jsx)(eu, {
              attributes: t?.layout?.footer,
              "data-sentry-element": "Footer",
              "data-sentry-source-file": "view.tsx"
            }), j && (0, s.jsx)(es, {
              id: "msnPixel",
              src: "https://c.msn.com/c.gif"
            }), m && (0, s.jsx)(ey, {})]
          })]
        })
      }
    },
    81264: (e, t, a) => {
      "use strict";
      a.d(t, {
        GemsBalance: () => u
      });
      var s = a(95155),
        r = a(31969);
      a(51208);
      var n = a(1721),
        i = (0, n.c)({
          defaultClassName: "_1vujioe5",
          variantClassNames: {
            type: {
              round: "_1vujioe6",
              squircle: "_1vujioe7",
              listItem: "_1vujioe8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, n.c)({
        defaultClassName: "_1vujioe9",
        variantClassNames: {
          type: {
            round: "_1vujioea",
            squircle: "_1vujioeb",
            listItem: "_1vujioec"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      var o = (0, n.c)({
          defaultClassName: "_1vujioe1 _1vujioe0",
          variantClassNames: {
            type: {
              round: "_1vujioe2",
              squircle: "_1vujioe3",
              listItem: "_1vujioe4"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        l = a(2725),
        d = a(25454),
        c = a(4265);
      let u = ({
        type: e = "squircle",
        color: t = "black"
      }) => {
        let {
          gems: a,
          isGemsLoading: n
        } = (0, c.Ij)();
        return null !== a || n ? (0, s.jsxs)("div", {
          className: o({
            type: e
          }),
          "data-testid": "gems-balance",
          "data-sentry-component": "GemsBalance",
          "data-sentry-source-file": "index.tsx",
          children: [(0, s.jsx)(r.StaticImage, {
            src: "/media/topbar/gem.png",
            alt: "Gems icon",
            width: 19,
            height: 18,
            "data-sentry-element": "StaticImage",
            "data-sentry-source-file": "index.tsx"
          }), n ? (0, s.jsx)(l.a, {}) : (0, s.jsx)(d.Ay, {
            className: i({
              type: e
            }),
            color: t,
            value: a || 0,
            transformTiming: {
              duration: 100,
              easing: "linear"
            },
            spinTiming: {
              duration: 1e3,
              easing: "linear"
            },
            opacityTiming: {
              duration: 100,
              easing: "ease-out"
            }
          })]
        }) : null
      }
    },
    81617: (e, t, a) => {
      "use strict";
      a.d(t, {
        default: () => n
      });
      var s = a(12115),
        r = a(14011);

      function n() {
        let e = (0, r.usePathname)(),
          t = (0, r.useSearchParams)();
        return (0, s.useEffect)(() => {
          window.scrollTo({
            top: 0,
            behavior: "auto"
          })
        }, [e, t]), null
      }
    },
    82492: (e, t, a) => {
      "use strict";
      a.d(t, {
        K: () => r
      });
      var s = a(95155);
      a(26821);
      let r = ({
        message: e
      }) => (0, s.jsx)("span", {
        className: "kaifmq0",
        "data-sentry-component": "ErrorMessage",
        "data-sentry-source-file": "index.tsx",
        children: e
      })
    },
    83611: e => {
      e.exports = {
        Avatar: "style_Avatar__fZUhe",
        UserDataMain: "style_UserDataMain__i18fF",
        __AvatarEditable: "style___AvatarEditable__2mNSJ",
        AvatarImageContainer: "style_AvatarImageContainer___KIFu",
        AvatarImage: "style_AvatarImage__EeNBh",
        __AvatarImageAside: "style___AvatarImageAside__Jiu5D",
        __AvatarImageUserdata: "style___AvatarImageUserdata__e0tIg",
        AvatarSelectionSlideAvatarPremium: "style_AvatarSelectionSlideAvatarPremium__3__ih",
        AvatarSelectionFrame: "style_AvatarSelectionFrame__2TJd5",
        AvatarSelectionFrameWrapper: "style_AvatarSelectionFrameWrapper__U0HAL"
      }
    },
    88658: (e, t, a) => {
      "use strict";
      a.d(t, {
        d_: () => n,
        hT: () => i
      });
      var s, r, n = ((s = {}).SIGN_IN_UP_EMAIL = "SIGN_IN_UP_EMAIL", s.SIGN_IN_UP_RESEND_EMAIL_FACEBOOK = "SIGN_IN_UP_RESEND_EMAIL_FACEBOOK", s.SIGN_IN_UP_RESEND_EMAIL_GOOGLE = "SIGN_IN_UP_RESEND_EMAIL_GOOGLE", s.GOOGLE_AUTH = "GOOGLE_AUTH", s.FACEBOOK_AUTH = "FACEBOOK_AUTH", s.SIGN_UP_PASSWORD = "SIGN_UP_PASSWORD", s.SIGN_IN_PASSWORD = "SIGN_IN_PASSWORD", s.FORGOT_PASSWORD = "FORGOT_PASSWORD", s.REQUEST_EMAIL = "REQUEST_EMAIL", s.EMAIL_SENT_FORM = "EMAIL_SENT_FORM", s.RESEND_CONFIRMATION_EMAIL = "RESEND_CONFIRMATION_EMAIL", s.RESET_PASSWORD_FORM = "RESET_PASSWORD_FORM", s.RESET_PASSWORD_FORM_SUCCESS = "RESET_PASSWORD_FORM_SUCCESS", s.THANK_YOU_FORM = "THANK_YOU_FORM", s.REWARD = "REWARD", s),
        i = ((r = {}).EmailPassword = "EmailPassword", r.Facebook = "Facebook", r.Google = "Google", r.HSN = "HSN", r)
    },
    88965: (e, t, a) => {
      "use strict";
      a.d(t, {
        WebVitalsReporter: () => n
      });
      var s = a(85729),
        r = a(21765);

      function n() {
        return (0, s.useReportWebVitals)(r.zL), null
      }
    },
    89586: (e, t, a) => {
      "use strict";
      a.d(t, {
        V: () => n,
        p: () => i
      });
      var s, r, n = ((s = {}).Regular = "regular", s.Premium = "premium", s),
        i = ((r = {}).MyProfile = "MyProfile", r.Favorites = "Favorites", r.MyPurchases = "MyPurchases", r.Subscriptions = "Subscriptions", r)
    },
    91490: e => {
      e.exports = {
        ForgotPasswordTitle: "styles_ForgotPasswordTitle__mWW_2",
        ForgotPasswordDescription: "styles_ForgotPasswordDescription__qgUF2",
        ForgotPasswordForm: "styles_ForgotPasswordForm__fZ0uF",
        ContinueButtonWrapper: "styles_ContinueButtonWrapper__lMOEr"
      }
    },
    93346: (e, t, a) => {
      "use strict";
      a.d(t, {
        T: () => m
      });
      var s = a(95155);
      a(12115);
      var r = a(83611),
        n = a.n(r),
        i = a(70448),
        o = a.n(i),
        l = a(26778),
        d = a(2417),
        c = a(4265),
        u = a(85824);
      let m = ({
        size: e,
        isEditable: t
      }) => {
        let a, r = (0, c.sb)(),
          {
            openModal: i
          } = (0, u.h)(),
          m = () => {
            i("avatar")
          };
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("div", {
            className: o()(n().Avatar, {
              [n().__AvatarEditable]: t
            }),
            "data-testid": "profile-avatar-main",
            children: (0, s.jsxs)("div", {
              className: n().AvatarImageContainer,
              style: {
                width: `${e}px`,
                height: `${e}px`,
                minWidth: `${e}px`,
                minHeight: `${e}px`,
                userSelect: t ? "initial" : "none",
                pointerEvents: t ? "initial" : "none",
                background: `${r.avatarBackground}`,
                borderRadius: "50%",
                borderWidth: "2px"
              },
              tabIndex: t ? d.Ee.AUTO : d.Ee.NOINTERACTION,
              onClick: () => t && m && m(),
              "data-sentry-element": "AvatarComponent",
              "data-sentry-source-file": "ProfileAvatar.tsx",
              children: [(0, s.jsx)(l.default, {
                unoptimized: !0,
                src: r.avatar,
                alt: "User avatar",
                width: e,
                height: e,
                className: o()(n().AvatarImage, n().__AvatarImageUserdata),
                "data-sentry-element": "Image",
                "data-sentry-source-file": "ProfileAvatar.tsx"
              }), r.isSubscriber && r.subscriberAvatar?.frame && (0, s.jsx)("div", {
                className: n().AvatarSelectionFrameWrapper,
                style: {
                  background: `url(${(a=r.subscriberAvatar.frame,`https://arenacloud.cdn.arkadiumhosted.com/arenaxstorage-blob/arenax-index/_arena-shared-content_/arkadium-frames/png/1x/${a}`)})`
                },
                "data-testid": "profile-avatar-frame"
              })]
            })
          })
        })
      }
    },
    94562: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => o
      });
      var s = a(95155),
        r = a(12115),
        n = a(24709),
        i = a(17413);

      function o({
        error: e
      }) {
        return (0, r.useEffect)(() => {
          (0, i.t)().error({
            data: e
          }, "[GeneralError] - Error"), (0, n.Cp)(e, {
            tags: {
              real_status_code: "500"
            }
          })
        }, [e]), (0, s.jsxs)("div", {
          className: "_185fn380",
          "data-sentry-component": "GeneralError",
          "data-sentry-source-file": "error.tsx",
          children: [(0, s.jsx)("h2", {
            className: "_185fn381",
            children: "Something went wrong!"
          }), (0, s.jsx)("center", {
            "data-sentry-element": "center",
            "data-sentry-source-file": "error.tsx",
            children: (0, s.jsx)("button", {
              className: "_185fn382",
              onClick: () => window.location.reload(),
              children: "Try again"
            })
          })]
        })
      }
      a(70060)
    },
    95669: (e, t, a) => {
      "use strict";
      a.d(t, {
        E: () => c
      });
      var s = a(95155),
        r = a(79038),
        n = a(41557),
        i = a(90242),
        o = a(14011),
        l = a(85824),
        d = a(28062);
      let c = ({
        openInNewTab: e = !1
      }) => {
        let t = (0, o.usePathname)(),
          {
            openModal: a
          } = (0, l.h)();
        return (0, s.jsx)("div", {
          className: n.Z$,
          "data-sentry-component": "Support",
          "data-sentry-source-file": "Support.tsx",
          children: (0, s.jsxs)("p", {
            children: ["Need help?", " ", e ? (0, s.jsx)(r.LocalizedLink, {
              href: t + "?modal=support",
              target: "_blank",
              rel: "noopener noreferrer",
              className: n.WS,
              children: "Contact Support"
            }) : (0, s.jsx)(i.$, {
              className: n.WS,
              onClick: e => {
                (0, d.fo)(t, a, e, "shopModal")
              },
              variant: "label",
              children: "Contact Support"
            })]
          })
        })
      }
    },
    97549: e => {
      e.exports = {
        SignInUpTitle: "styles_SignInUpTitle__0JY_o",
        SignInUpDescription: "styles_SignInUpDescription__sViHo",
        DescriptionItem: "styles_DescriptionItem__8jYYc",
        bold: "styles_bold__iWopv",
        SocialLogins: "styles_SocialLogins__u2R83",
        NotificationMargin: "styles_NotificationMargin__dBXb3",
        EmailField: "styles_EmailField__BnPkL",
        ContinueButtonWrapper: "styles_ContinueButtonWrapper___yC9e"
      }
    },
    99005: (e, t, a) => {
      "use strict";
      a.d(t, {
        FA: () => n,
        Tc: () => o,
        IS: () => i
      });
      var s = a(17413),
        r = a(24709);
      let n = ({
          isMicrosoftDomain: e,
          isGeoRequestFailed: t,
          isGDPRApplies: a,
          isUS: s,
          isCmpDisabledByRegion: r,
          lastTargetingConsent: n
        }) => !!e && !t && !r && (!a || null !== n),
        i = e => {
          let t = (0, s.t)();
          try {
            window.clarity && (window.clarity("consentv2", e), t.info({
              data: e
            }, "[Microsoft Clarity] Consent successfully sent to clarity"))
          } catch (a) {
            t.error({
              data: {
                error: a,
                consentData: e
              }
            }, "[Microsoft Clarity] Failed to update consent"), (0, r.Cp)(a, {
              tags: {
                component: "MicrosoftClarityConsent",
                method: "updateMicrosoftClarityConsent"
              },
              extra: {
                consentData: e
              }
            })
          }
        },
        o = (e, t) => {
          if (!e) throw Error("[Microsoft Clarity] ConsentFlags is required");
          if (e.isCmpDisabledByRegion || e.isGeoRequestFailed || !1 === e.browserTrackingConsent || !1 === e.msInitialConsent) return {
            ad_Storage: "denied",
            analytics_Storage: "denied"
          };
          if (e.isUS || !1 === e.isGDPRApplies) {
            let t;
            return {
              ad_Storage: (t = !0 === e.browserTrackingConsent && !0 === e.msInitialConsent) ? "granted" : "denied",
              analytics_Storage: t ? "granted" : "denied"
            }
          }
          if (!0 === e.isGDPRApplies && t) {
            let a, s;
            return a = !!t?.[1], s = !!t?.[10], {
              ad_Storage: a && !0 === e.browserTrackingConsent && !0 === e.msInitialConsent ? "granted" : "denied",
              analytics_Storage: s && !0 === e.browserTrackingConsent && !0 === e.msInitialConsent ? "granted" : "denied"
            }
          }
          return {
            ad_Storage: "denied",
            analytics_Storage: "denied"
          }
        }
    }
  },
  e => {
    e.O(0, [8831, 422, 6241, 8223, 6950, 8679, 6072, 2570, 7646, 6700, 9901, 3927, 6850, 5337, 5216, 8248, 1174, 4615, 4935, 2398, 1175, 2477, 208, 1041, 8880, 976, 5393, 5108, 8380, 508, 7944, 115, 8653, 6778, 4450, 7767, 2141, 4910, 8596, 7352, 7037, 7332, 7547, 2579, 5283, 9833, 9711, 7514, 8441, 2352, 7358], () => e(e.s = 71407)), _N_E = e.O()
  }
]);