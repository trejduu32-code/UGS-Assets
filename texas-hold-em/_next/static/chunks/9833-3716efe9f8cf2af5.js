! function() {
  try {
    var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "da323b91-ca4d-4e7e-91a1-5f7ddabf1f1c", e._sentryDebugIdIdentifier = "sentry-dbid-da323b91-ca4d-4e7e-91a1-5f7ddabf1f1c")
  } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9833], {
    6422: (e, t, a) => {
      a.d(t, {
        B5: () => i,
        Gt: () => p,
        Qc: () => u,
        X5: () => c,
        bQ: () => o,
        x7: () => d
      });
      var r, n, l = a(99554),
        s = a(88011),
        o = ((r = {}).CONTROL_A = "control", r.REWARDED_AD_B = "groupB", r.PAY_GEMS_C = "groupC", r),
        i = ((n = {}).CONTROL_A = "control", n.REWARDED_FULLSCREEN_B = "groupB", n.REWARDED_FULLSCREEN_C = "groupC", n);
      let d = (e, t, a) => {
          if (!e || t <= 0) return null;
          let r = Math.max(0, Math.min(100, t));
          try {
            let e = l.O1.getArkCookie(s.lF) || "";
            if (e) {
              if ("enabled" === e) return {
                group: "medium_monetization_rollout",
                adLayoutCode: "medium"
              };
              return null
            }
            if (Math.random() < r / 100) {
              try {
                l.O1.setArkCookie(s.lF, "enabled", 30)
              } catch (e) {}
              return {
                group: "medium_monetization_rollout",
                adLayoutCode: "medium"
              }
            }
            try {
              l.O1.setArkCookie(s.lF, "control", 30)
            } catch (e) {}
            return null
          } catch (e) {
            return null
          }
        },
        c = () => {
          let e, t = l.O1.getArkCookie(s._o);
          return t ? e = t : (e = .5 > Math.random() ? "control" : "groupB", l.O1.setArkCookie(s._o, e, 14)), {
            group: e,
            shouldShowStartScreen: "control" === e
          }
        },
        u = () => {
          let e, t, a = l.O1.getArkCookie(s.Fg);
          if (a) e = a;
          else {
            let t;
            e = (t = Math.random()) < .34 ? "control" : t < .67 ? "groupB" : "groupC", l.O1.setArkCookie(s.Fg, e, 14)
          }
          switch (e) {
            case "control":
            default:
              t = "subscription";
              break;
            case "groupB":
              t = "rewardedAd";
              break;
            case "groupC":
              t = "gems"
          }
          return {
            group: e,
            unlockMethod: t,
            isControl: "control" === e,
            canUnlockWithAd: "groupB" === e,
            canUnlockWithGems: "groupC" === e
          }
        },
        p = () => {
          let e, t = l.O1.getArkCookie(s.Yj);
          if (t) e = t;
          else {
            let t;
            e = (t = Math.random()) < 1 / 3 ? "control" : t < 2 / 3 ? "groupB" : "groupC", l.O1.setArkCookie(s.Yj, e, 30)
          }
          let a = "groupB" === e || "groupC" === e;
          return {
            group: e,
            fullscreenRewardedAccessAvailable: a
          }
        }
    },
    9482: (e, t, a) => {
      a.d(t, {
        X: () => n
      });
      var r, n = ((r = {}).AD_160x600 = "160,600", r.AD_250x250 = "250,250", r.AD_300x250 = "300,250", r.AD_300x250_AB_TEST = "999,999", r.AD_300x600 = "300,600", r.AD_728x90 = "728,90", r.AD_970x90 = "970,90", r.AD_970x250 = "970,250", r.AD_320x100 = "320,100", r.AD_320x50 = "320,50", r.AD_300x50 = "300,50", r)
    },
    15417: (e, t, a) => {
      a.d(t, {
        $J: () => h,
        AV: () => o,
        DD: () => b,
        Dk: () => d,
        EP: () => n,
        M6: () => x,
        NU: () => m,
        Om: () => p,
        R9: () => f,
        _O: () => s,
        dq: () => y,
        i5: () => C,
        iE: () => _,
        kL: () => c,
        qe: () => v,
        tJ: () => u,
        uy: () => g,
        vt: () => i,
        x6: () => l
      }), a(51799);
      var r = a(1721),
        n = "_412cz3s",
        l = "_412cz3e",
        s = "_412cz3h",
        o = "_412cz3g",
        i = "_412cz3f",
        d = "_412cz35",
        c = "_412cz3a",
        u = "_412cz3b",
        p = (0, r.c)({
          defaultClassName: "_412cz3n _412cz3m",
          variantClassNames: {
            black: {
              true: "_412cz3o"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        m = (0, r.c)({
          defaultClassName: "_412cz3q _412cz3p",
          variantClassNames: {
            black: {
              true: "_412cz3r"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        g = (0, r.c)({
          defaultClassName: "_412cz3j _412cz3i",
          variantClassNames: {
            outside: {
              true: "_412cz3k"
            },
            black: {
              true: "_412cz3l"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        h = "_412cz34",
        x = "_412cz3c",
        y = "_412cz3d",
        b = "_412cz32",
        v = "_412cz33",
        f = "_412cz36",
        C = (0, r.c)({
          defaultClassName: "_412cz38 _412cz37",
          variantClassNames: {
            fixedHeight: {
              true: "_412cz39"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        _ = "_412cz31"
    },
    21696: (e, t, a) => {
      a.d(t, {
        A: () => s
      });
      var r, n = a(12115);

      function l() {
        return (l = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a)({}).hasOwnProperty.call(a, r) && (e[r] = a[r])
          }
          return e
        }).apply(null, arguments)
      }
      let s = function(e) {
        return n.createElement("svg", l({
          xmlns: "http://www.w3.org/2000/svg",
          width: 36,
          height: 36,
          fill: "none",
          viewBox: "0 0 36 36"
        }, e), r || (r = n.createElement("path", {
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m13.5 27 9-9-9-9"
        })))
      }
    },
    26406: (e, t, a) => {
      a.d(t, {
        E: () => r
      });

      function r(e) {
        let t;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(e)) return 3 == (t = e.substring(1).split("")).length && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]), "rgba(" + [(t = "0x" + t.join("")) >> 16 & 255, t >> 8 & 255, 255 & t].join(",")
      }
    },
    33090: (e, t, a) => {
      a.d(t, {
        nB: () => u,
        nl: () => o,
        $j: () => i,
        JU: () => c,
        hE: () => d
      });
      var r = a(95155),
        n = a(70448),
        l = a.n(n);
      a(57486);
      var s = (0, a(1721).c)({
        defaultClassName: "_1rv6egp1 _1rv6egp0",
        variantClassNames: {
          type: {
            display: "_1rv6egp2",
            headline: "_1rv6egp3",
            title: "_1rv6egp4",
            label: "_1rv6egp5",
            body: "_1rv6egp6"
          },
          size: {
            large: "_1rv6egp7",
            medium: "_1rv6egp8",
            small: "_1rv6egp9"
          }
        },
        defaultVariants: {
          type: "body",
          size: "medium"
        },
        compoundVariants: [
          [{
            type: "display",
            size: "large"
          }, "_1rv6egpa"],
          [{
            type: "display",
            size: "medium"
          }, "_1rv6egpb"],
          [{
            type: "display",
            size: "small"
          }, "_1rv6egpc"],
          [{
            type: "headline",
            size: "large"
          }, "_1rv6egpd"],
          [{
            type: "headline",
            size: "medium"
          }, "_1rv6egpe"],
          [{
            type: "headline",
            size: "small"
          }, "_1rv6egpf"],
          [{
            type: "title",
            size: "large"
          }, "_1rv6egpg"],
          [{
            type: "title",
            size: "medium"
          }, "_1rv6egph"],
          [{
            type: "title",
            size: "small"
          }, "_1rv6egpi"],
          [{
            type: "label",
            size: "large"
          }, "_1rv6egpj"],
          [{
            type: "label",
            size: "medium"
          }, "_1rv6egpk"],
          [{
            type: "label",
            size: "small"
          }, "_1rv6egpl"],
          [{
            type: "body",
            size: "large"
          }, "_1rv6egpm"],
          [{
            type: "body",
            size: "medium"
          }, "_1rv6egpn"],
          [{
            type: "body",
            size: "small"
          }, "_1rv6egpo"]
        ]
      });
      let o = ({
          children: e,
          size: t,
          className: a,
          as: n,
          ...o
        }) => (0, r.jsx)(n || "h1", {
          className: l()(s({
            type: "display",
            size: t
          }), a),
          ...o,
          "data-sentry-element": "Component",
          "data-sentry-component": "Display",
          "data-sentry-source-file": "index.tsx",
          children: e
        }),
        i = ({
          children: e,
          size: t,
          className: a,
          as: n,
          ...o
        }) => (0, r.jsx)(n || "h2", {
          className: l()(s({
            type: "headline",
            size: t
          }), a),
          ...o,
          "data-sentry-element": "Component",
          "data-sentry-component": "Headline",
          "data-sentry-source-file": "index.tsx",
          children: e
        }),
        d = ({
          children: e,
          size: t,
          className: a,
          as: n,
          ...o
        }) => (0, r.jsx)(n || "h3", {
          className: l()(s({
            type: "title",
            size: t
          }), a),
          ...o,
          "data-sentry-element": "Component",
          "data-sentry-component": "Title",
          "data-sentry-source-file": "index.tsx",
          children: e
        }),
        c = ({
          children: e,
          size: t,
          className: a,
          as: n,
          ...o
        }) => (0, r.jsx)(n || "span", {
          className: l()(s({
            type: "label",
            size: t
          }), a),
          ...o,
          "data-sentry-element": "Component",
          "data-sentry-component": "Label",
          "data-sentry-source-file": "index.tsx",
          children: e
        }),
        u = ({
          children: e,
          size: t,
          className: a,
          as: n,
          ...o
        }) => (0, r.jsx)(n || "p", {
          className: l()(s({
            type: "body",
            size: t
          }), a),
          ...o,
          "data-sentry-element": "Component",
          "data-sentry-component": "Body",
          "data-sentry-source-file": "index.tsx",
          children: e
        })
    },
    34585: (e, t, a) => {
      a.d(t, {
        D: () => s
      });
      var r = a(99554),
        n = a(24709),
        l = a(24408);
      a(17413);
      let s = ({
        experiment: e,
        isEnabled: t,
        weights: a,
        cookieDays: s = 14
      }) => {
        let o = `abtest_${e}`,
          i = 0;
        if (t && 1) {
          let t = r.O1.getArkCookie(o);
          t ? i = parseInt(t) : (i = (e => {
            if (0 === e.length) return 0;
            let t = Math.random(),
              a = 0;
            for (let r = 0; r < e.length; r++)
              if (t < (a += e[r])) return r;
            return e.length - 1
          })(a), r.O1.setArkCookie(o, i, s)), (0, n.NA)(`abtest_${e}`, i.toString());
          let d = l.CA.getConfig?.().baseCustomDimensions?.abvariations;
          l.CA.updateConfig({
            baseCustomDimensions: {
              abvariations: (({
                existingValue: e,
                experiment: t,
                variantIndex: a
              }) => {
                let r = new Map;
                return e?.split(",").map(e => e.trim()).filter(Boolean).forEach(e => {
                  let [t, a] = e.split(":");
                  t && void 0 !== a && r.set(t, a)
                }), r.set(`abtest_${t}`, a.toString()), Array.from(r.entries()).map(([e, t]) => `${e}:${t}`).join(", ")
              })({
                existingValue: d,
                experiment: e,
                variantIndex: i
              })
            }
          })
        }
        return i
      }
    },
    36846: (e, t, a) => {
      a.d(t, {
        H: () => n
      });
      var r = a(90325);

      function n(e) {
        let t = (0, r.useABTestContext)()[e];
        return {
          experimentName: t.experimentName,
          variantIndex: t.variantIndex,
          isControl: 0 === t.variantIndex,
          isEnabled: t.enabled
        }
      }
    },
    39291: (e, t, a) => {
      a.d(t, {
        ay: () => c,
        hT: () => p,
        vE: () => u
      });
      var r = a(95155),
        n = a(12115),
        l = a(70448),
        s = a.n(l),
        o = a(15417),
        i = a(42248),
        d = a(21696);
      let c = e => {
          let [t, a] = (0, n.useState)(!1), [r, l] = (0, n.useState)(!1), s = (0, n.useCallback)(() => {
            e && (a(e.canScrollPrev()), l(e.canScrollNext()))
          }, [e]), o = (0, n.useCallback)(() => {
            e && e.scrollPrev(), s()
          }, [e, s]), i = (0, n.useCallback)(() => {
            e && e.scrollNext(), s()
          }, [e, s]);
          return (0, n.useEffect)(() => {
            e && (s(), e.on("reInit", s).on("select", s))
          }, [e, s]), {
            scrollPrev: o,
            scrollNext: i,
            prevBtnEnabled: t,
            nextBtnEnabled: r,
            handleKeyDown: e => {
              "ArrowLeft" === e.key ? (e.preventDefault(), o()) : "ArrowRight" === e.key && (e.preventDefault(), i())
            }
          }
        },
        u = ({
          onClick: e,
          enabled: t,
          arrowsButtonClassName: a
        }) => (0, r.jsx)("button", {
          className: s()(o.x6, o.AV, t && o.vt, a),
          onClick: e,
          "aria-label": "Previous slide",
          tabIndex: t ? 0 : -1,
          "data-testid": "carousel-prev",
          "data-sentry-component": "CarouselPrevArrow",
          "data-sentry-source-file": "CarouselArrows.tsx",
          children: (0, r.jsx)(i.A, {
            "data-sentry-element": "ButtonPrevSVG",
            "data-sentry-source-file": "CarouselArrows.tsx"
          })
        }),
        p = ({
          onClick: e,
          enabled: t,
          arrowsButtonClassName: a
        }) => (0, r.jsx)("button", {
          className: s()(o.x6, o._O, t && o.vt, a),
          onClick: e,
          "aria-label": "Next slide",
          tabIndex: t ? 0 : -1,
          "data-testid": "carousel-next",
          "data-sentry-component": "CarouselNextArrow",
          "data-sentry-source-file": "CarouselArrows.tsx",
          children: (0, r.jsx)(d.A, {
            "data-sentry-element": "ButtonNextSVG",
            "data-sentry-source-file": "CarouselArrows.tsx"
          })
        })
    },
    40725: (e, t, a) => {
      a.d(t, {
        q: () => S
      });
      var r = {};
      a.r(r), a.d(r, {
        bottomText: () => o,
        button: () => i,
        buttonfocusWrapper: () => d,
        card: () => c,
        description: () => u,
        fullImage: () => p,
        iconImage: () => m,
        medium: () => g,
        mobileGrid: () => h,
        noOutline: () => x,
        noOverlay: () => y,
        overlay: () => b,
        overlayWrapper: () => v,
        partialOverlay: () => f,
        small: () => C,
        smallGridFluid: () => _,
        title: () => k,
        wrapper: () => A
      });
      var n = a(95155);
      a(12115);
      var l = a(70448),
        s = a.n(l);
      a(16233);
      var o = "_11c01n1h",
        i = "_11c01n1g",
        d = "_11c01n1f",
        c = "_11c01n10",
        u = "_11c01n1d",
        p = "_11c01n11",
        m = "_11c01n12",
        g = "_11c01n15",
        h = "_11c01n16",
        x = "_11c01n17",
        y = "_11c01n18",
        b = "_11c01n1a",
        v = "_11c01n19",
        f = "_11c01n1b",
        C = "_11c01n13",
        _ = "_11c01n14",
        k = "_11c01n1c",
        A = "_11c01n1e",
        w = a(26778),
        N = a(26406),
        j = a(90242),
        D = a(33090),
        I = a(90143),
        E = a(2417),
        z = a(79038),
        B = a(51629),
        L = a(21765),
        P = a(28062);
      let S = ({
        size: e = "small",
        icon: t = "play",
        actionbar: a,
        enabled_actionbar: l,
        ...m
      }) => {
        let g = m.hoverBlock?.background ? `${(0,N.E)(m.hoverBlock?.background)}, 0.7)` : "rgba(0, 0, 0, 0.7)",
          C = (0, P.QZ)(m.hoverBlock?.description ?? ""),
          S = m.hoverBlock?.cta ?? "Play Now",
          O = m.hoverBlock?.title ? `${m.hoverBlock?.title} Card Image` : "Card Image",
          $ = m.hoverBlock && (m.hoverBlock?.type === "full" || m.hoverBlock?.type === "partial");
        return (0, n.jsx)(z.LocalizedLink, {
          prefetch: "default",
          href: m.href,
          target: "_self",
          tabIndex: m.tabIndex,
          onClick: m.onClick || (e => {
            e?.stopPropagation?.(), m.mixedCarouselContext ? (0, L.yn)("StandardCard", m.mixedCarouselContext.promoboxType, m.slug ?? "", m.badge?.label ?? "", m.mixedCarouselContext.index) : (0, L.m5)(m.slug, m.background, m.badge?.label, m.promoboxType, null != m.index ? String(m.index) : void 0)
          }),
          className: x,
          "data-testid": m.testId,
          style: {
            position: "relative"
          },
          "data-sentry-element": "LocalizedLink",
          "data-sentry-component": "StandardCard",
          "data-sentry-source-file": "index.tsx",
          children: (0, n.jsxs)("div", {
            className: s()(c, !$ && y, r[e], m.grid && "small" === e && _, m.className, m.grid && h),
            "data-actionbar": l,
            tabIndex: E.Ee.NOINTERACTION,
            children: [m.background && (0, n.jsx)(w.default, {
              unoptimized: !0,
              src: m.background,
              alt: O,
              className: p,
              fill: !0,
              "data-testid": "card-image",
              preload: m.preload,
              fetchPriority: m.preload ? "high" : "low"
            }), m.badge && m.badge.label && m.badge.backgroundColor && (0, n.jsx)(I.E, {
              backgroundColor: m.badge.backgroundColor,
              labelColor: m.badge.labelColor,
              label: m.badge.label,
              "data-testid": "card-badge"
            }), "medium" === e && a && l && (0, n.jsx)("div", {
              className: o,
              children: (0, n.jsx)("span", {
                children: a.length > 17 ? a.substring(0, 17) + "..." : a
              })
            }), $ && (0, n.jsx)("div", {
              className: v,
              children: (0, n.jsx)("div", {
                className: s()(b, m.hoverBlock?.type === "partial" && f),
                style: {
                  backgroundColor: g
                },
                "data-testid": "card-hover-block",
                children: (0, n.jsxs)("div", {
                  className: A,
                  children: [(0, n.jsx)("p", {
                    "aria-label": m.hoverBlock?.title,
                    className: k,
                    "data-testid": "card-title",
                    children: m.hoverBlock?.title
                  }), (0, n.jsx)("p", {
                    "aria-label": C,
                    className: u,
                    "data-testid": "card-description",
                    children: C
                  }), m.hoverBlock?.type === "full" && S && (0, n.jsx)("div", {
                    className: d,
                    children: (0, n.jsxs)(j.$, {
                      variant: "filled",
                      className: i,
                      focusable: !1,
                      testId: "card-button",
                      children: [(0, n.jsx)(B.I, {
                        name: t,
                        "aria-hidden": !0
                      }), (0, n.jsx)(D.JU, {
                        size: "large",
                        children: S
                      })]
                    })
                  })]
                })
              })
            })]
          })
        })
      }
    },
    41836: (e, t, a) => {
      a.d(t, {
        H: () => l,
        c: () => s
      });
      var r = a(95155),
        n = a(12115);
      let l = e => {
          let [t, a] = (0, n.useState)(0), r = (0, n.useCallback)(t => {
            e && e.scrollTo(t)
          }, [e]), l = (0, n.useCallback)(() => {
            e && a(e.selectedScrollSnap())
          }, [e]);
          return (0, n.useEffect)(() => {
            e && e.on("init", l).on("select", l)
          }, [e, l]), {
            selectedIndex: t,
            onDotButtonClick: r
          }
        },
        s = e => (0, r.jsx)("button", {
          "aria-label": e.ariaLabel,
          type: "button",
          className: e.className,
          onClick: e.onClick,
          "data-testid": e.testId,
          "data-sentry-component": "DotButton",
          "data-sentry-source-file": "CarouselDot.tsx"
        })
    },
    42248: (e, t, a) => {
      a.d(t, {
        A: () => s
      });
      var r, n = a(12115);

      function l() {
        return (l = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a)({}).hasOwnProperty.call(a, r) && (e[r] = a[r])
          }
          return e
        }).apply(null, arguments)
      }
      let s = function(e) {
        return n.createElement("svg", l({
          xmlns: "http://www.w3.org/2000/svg",
          width: 36,
          height: 36,
          fill: "none",
          viewBox: "0 0 36 36"
        }, e), r || (r = n.createElement("path", {
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m22.5 27-9-9 9-9"
        })))
      }
    },
    50990: (e, t, a) => {
      a.d(t, {
        Carousel: () => f
      });
      var r = a(95155),
        n = a(12115),
        l = a(87153),
        s = a(70448),
        o = a.n(s),
        i = a(15417),
        d = a(79038),
        c = a(2417),
        u = a(90242),
        p = a(21765);
      let m = ({
        title: e,
        href: t,
        label: a,
        target: l,
        id: s,
        analyticId: m,
        titleAnchorClassName: g
      }) => {
        let h = (0, n.useMemo)(() => t && a ? (0, r.jsx)(d.LocalizedLink, {
          prefetch: "default",
          href: t,
          target: l,
          tabIndex: c.Ee.NOINTERACTION,
          className: o()(g, i.qe),
          onClick: () => (0, p.ZZ)(m, e),
          "data-testid": "see-all-button",
          children: (0, r.jsx)(u.$, {
            variant: "label",
            className: o()(i.$J, "carousel-header-link-button"),
            children: a
          })
        }) : null, [t, a, l, s, e]);
        return (0, r.jsxs)(r.Fragment, {
          children: [e && (0, r.jsx)("h2", {
            className: o()(i.DD, "carousel-header-title"),
            children: e
          }), h]
        })
      };
      var g = a(39291),
        h = a(87521);
      let x = ({
          color: e = "#fff"
        }) => (0, r.jsx)("svg", {
          width: "40",
          height: "40",
          viewBox: "0 0 40 40",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "data-sentry-element": "svg",
          "data-sentry-component": "PlayIcon",
          "data-sentry-source-file": "PlayIcon.tsx",
          children: (0, r.jsx)("g", {
            id: "play-circle",
            "data-sentry-element": "g",
            "data-sentry-source-file": "PlayIcon.tsx",
            children: (0, r.jsxs)("g", {
              id: "Icon",
              "data-sentry-element": "g",
              "data-sentry-source-file": "PlayIcon.tsx",
              children: [(0, r.jsx)("path", {
                d: "M20 36.6666C29.2047 36.6666 36.6666 29.2047 36.6666 20C36.6666 10.7952 29.2047 3.33331 20 3.33331C10.7952 3.33331 3.33331 10.7952 3.33331 20C3.33331 29.2047 10.7952 36.6666 20 36.6666Z",
                stroke: e,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "data-sentry-element": "path",
                "data-sentry-source-file": "PlayIcon.tsx"
              }), (0, r.jsx)("path", {
                d: "M15.8333 14.9422C15.8333 14.1467 15.8333 13.749 15.9996 13.5269C16.1444 13.3334 16.3662 13.2124 16.6073 13.1952C16.884 13.1754 17.2185 13.3905 17.8877 13.8206L25.7553 18.8784C26.336 19.2517 26.6263 19.4383 26.7266 19.6756C26.8142 19.883 26.8142 20.117 26.7266 20.3243C26.6263 20.5616 26.336 20.7483 25.7553 21.1216L17.8877 26.1793C17.2185 26.6095 16.884 26.8246 16.6073 26.8048C16.3662 26.7876 16.1444 26.6665 15.9996 26.473C15.8333 26.251 15.8333 25.8532 15.8333 25.0578V14.9422Z",
                stroke: e,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "data-sentry-element": "path",
                "data-sentry-source-file": "PlayIcon.tsx"
              })]
            })
          })
        }),
        y = ({
          color: e = "#fff"
        }) => (0, r.jsx)("svg", {
          width: "40",
          height: "40",
          viewBox: "0 0 40 40",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "data-sentry-element": "svg",
          "data-sentry-component": "PauseIcon",
          "data-sentry-source-file": "PauseIcon.tsx",
          children: (0, r.jsx)("path", {
            d: "M15.8333 25V15M24.1666 25V15M36.6666 20C36.6666 29.2047 29.2047 36.6666 20 36.6666C10.7952 36.6666 3.33331 29.2047 3.33331 20C3.33331 10.7952 10.7952 3.33331 20 3.33331C29.2047 3.33331 36.6666 10.7952 36.6666 20Z",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "data-sentry-element": "path",
            "data-sentry-source-file": "PauseIcon.tsx"
          })
        }),
        b = ({
          onClick: e,
          className: t,
          autoplayIsPlaying: a,
          black: n = !1
        }) => {
          let l = n ? "#000" : "#fff";
          return (0, r.jsx)("button", {
            "aria-label": a ? "Pause Autoplay" : "Play Autoplay",
            className: o()(t, "autoplayButton"),
            onClick: e,
            "data-sentry-component": "CarouselAutoplayButton",
            "data-sentry-source-file": "CarouselAutoplay.tsx",
            children: a ? (0, r.jsx)(y, {
              color: l
            }) : (0, r.jsx)(x, {
              color: l
            })
          })
        };
      var v = a(41836);
      let f = ({
        children: e,
        spacing: t = 16,
        slidesToScroll: a = 1,
        containerClassName: s,
        headerClassName: d,
        wrapperClassName: c,
        title: u,
        href: p,
        label: x,
        target: y = "_self",
        id: f,
        isFullWidth: C = !1,
        loop: _ = !1,
        enableArrows: k = !0,
        autoPlayTime: A,
        enableDots: w = !1,
        showAutoplayButton: N = !1,
        fixedHeight: j = !0,
        dotsOutside: D = !1,
        dotsBlack: I = !1,
        testId: E,
        arrowsButtonClassName: z,
        analyticId: B,
        numberOfSSRSlides: L,
        onSlideChangeCallback: P,
        titleAnchorClassName: S
      }) => {
        let [O, $] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          $(!0)
        }, []);
        let T = {
            active: n.Children.count(e) > 1,
            align: "start",
            loop: _ || !1,
            slidesToScroll: a,
            skipSnaps: !0,
            watchDrag: (e, t) => !t.target.closest(".autoplayButton")
          },
          V = [];
        A && V.push((0, h.A)({
          playOnInit: !0,
          delay: A
        }));
        let [M, R] = (0, l.A)(T, V), [X, U] = (0, n.useState)([]), F = n.Children.count(e) > 1, {
          prevBtnEnabled: W,
          nextBtnEnabled: Y,
          scrollPrev: H,
          scrollNext: Z,
          handleKeyDown: G
        } = (0, g.ay)(R), {
          selectedIndex: J,
          onDotButtonClick: q
        } = (0, v.H)(R), {
          autoplayIsPlaying: Q,
          toggleAutoplay: K
        } = (e => {
          let [t, a] = (0, n.useState)(!0), r = (0, n.useCallback)(() => {
            let t = e?.plugins()?.autoplay;
            t && (t.isPlaying() ? t.stop : t.play)()
          }, [e]);
          return (0, n.useEffect)(() => {
            let t = e?.plugins()?.autoplay;
            t && (a(t.isPlaying()), e.on("autoplay:play", () => a(!0)).on("autoplay:stop", () => a(!1)).on("reInit", () => a(t.isPlaying())))
          }, [e]), {
            autoplayIsPlaying: t,
            toggleAutoplay: r
          }
        })(R), [ee, et] = (0, n.useState)(!1), ea = (0, n.useCallback)(e => {
          e && U(e.slidesNotInView())
        }, []), er = (0, n.useCallback)(e => {
          e && P && P(e.selectedScrollSnap())
        }, [P]), en = (0, n.useCallback)((e, t) => {
          if (C) return J !== e ? -1 : 0;
          let a = t?.props;
          return X.includes(e) ? -1 : a?.tabIndex ?? 0
        }, [C, J, X]);
        return (0, n.useEffect)(() => {
          R && R.on("slidesInView", ea).on("slideFocus", ea).on("select", er)
        }, [R, ea, er]), (0, r.jsxs)("section", {
          "data-carousel-type": "carousel",
          className: o()(i.iE, c),
          "data-testid": E,
          "data-sentry-component": "Carousel",
          "data-sentry-source-file": "index.tsx",
          children: [(u || x) && (0, r.jsx)(m, {
            title: u,
            href: p,
            label: x,
            target: y,
            id: f,
            analyticId: B,
            className: d,
            titleAnchorClassName: S
          }), (0, r.jsxs)("div", {
            className: i.Dk,
            children: [k && F && (0, r.jsx)(g.vE, {
              onClick: e => {
                e.preventDefault(), H()
              },
              enabled: W,
              arrowsButtonClassName: z
            }), (0, r.jsxs)("div", {
              className: o()(C ? i.i5({
                fixedHeight: j
              }) : i.R9),
              ref: M,
              role: "region",
              "aria-label": "Carousel",
              onKeyDown: G,
              children: [(0, r.jsx)("ul", {
                className: o()(C ? i.tJ : i.kL, s, "carousel-container"),
                style: {
                  gap: C ? "0" : `${t}px`
                },
                children: n.Children.map(e, (e, t) => !O && L && t >= L ? null : (0, r.jsx)("li", {
                  className: o()(i.M6, C && i.dq),
                  "aria-roledescription": "slide",
                  "aria-label": `Slide ${t+1}`,
                  "aria-hidden": C && J !== t,
                  onFocusCapture: () => {
                    let e = R?.plugins()?.autoplay;
                    e && e.isPlaying() && !ee && e.stop()
                  },
                  onBlurCapture: e => {
                    if (!e.currentTarget.contains(e.relatedTarget)) {
                      let e = R?.plugins()?.autoplay;
                      e && (ee || e.play())
                    }
                  },
                  children: n.isValidElement(e) ? n.cloneElement(e, {
                    ...e.props,
                    tabIndex: en(t, e)
                  }) : e
                }))
              }), w && F && (0, r.jsxs)("div", {
                className: i.uy({
                  outside: D,
                  black: I
                }),
                "data-testid": "carousel-slider",
                children: [A && N && (0, r.jsx)(b, {
                  onClick: function() {
                    Q ? et(!0) : et(!1), K()
                  },
                  className: i.EP,
                  autoplayIsPlaying: Q,
                  black: I
                }), n.Children.map(e, (e, t) => (0, r.jsx)(v.c, {
                  ariaLabel: `Dot Button ${t+1}`,
                  onClick: () => q(t),
                  className: o()(i.Om({
                    black: I
                  }), {
                    [i.NU({
                      black: I
                    })]: t === J
                  }),
                  testId: `nav-dot-${t}`
                }, t))]
              })]
            }), k && F && (0, r.jsx)(g.hT, {
              onClick: e => {
                e.preventDefault(), Z()
              },
              enabled: Y,
              arrowsButtonClassName: z
            })]
          })]
        })
      }
    },
    51629: (e, t, a) => {
      a.d(t, {
        I: () => l
      });
      var r = a(95155);
      let n = "/media/sprite.svg";

      function l({
        name: e,
        width: t = 24,
        height: a = 24,
        ...l
      }) {
        return (0, r.jsx)("svg", {
          width: t,
          height: a,
          ...l,
          "data-sentry-element": "svg",
          "data-sentry-component": "Icon",
          "data-sentry-source-file": "index.tsx",
          children: (0, r.jsx)("use", {
            href: `${n}#${e}`,
            xlinkHref: `${n}#${e}`,
            "data-sentry-element": "use",
            "data-sentry-source-file": "index.tsx"
          })
        })
      }
    },
    52573: (e, t, a) => {
      a.r(t), a.d(t, {
        button: () => r
      }), a(80872);
      var r = (0, a(1721).c)({
        defaultClassName: "_83ichw1 _83ichw0",
        variantClassNames: {
          variant: {
            outline: "_83ichw2",
            filled: "_83ichw3",
            label: "_83ichw4",
            disabled: "_83ichw5",
            jumbo: "_83ichw6"
          },
          size: {
            small: "_83ichw7",
            medium: "_83ichw8",
            large: "_83ichw9",
            big: "_83ichwa",
            extraLarge: "_83ichwb"
          },
          fullWidth: {
            true: "_83ichwc",
            false: "_83ichwd"
          }
        },
        defaultVariants: {
          variant: "filled",
          size: "medium",
          fullWidth: !1
        },
        compoundVariants: [
          [{
            variant: "filled",
            size: "large"
          }, "_83ichwe"],
          [{
            size: "extraLarge"
          }, "_83ichwf"],
          [{
            variant: "outline",
            size: "extraLarge"
          }, "_83ichwg"],
          [{
            variant: "label"
          }, "_83ichwh"]
        ]
      })
    },
    53599: (e, t, a) => {
      a.d(t, {
        A: () => r
      });
      let r = function() {
        let e, t, a, r, n;
        if (null !== window.document.body.getAttribute("abp")) return !0;
        let l = ((e = document.createElement("div")).setAttribute("class", "ad banner textads banner-ads banner_ads ad-banner ad-banner-example"), e.setAttribute("id", "ad-banner-example"), e.style.cssText = "position: absolute; left: -999px; top: -999px; height: 1px; width: 1px;", e);
        window.document.body.appendChild(l);
        let s = (a = "none" === (t = window.getComputedStyle(l)).getPropertyValue("display"), r = "hidden" === t.getPropertyValue("visibility"), n = "0" === t.getPropertyValue("opacity"), a || r || n);
        return window.document.body.removeChild(l), s
      }
    },
    58417: (e, t, a) => {
      a.d(t, {
        f: () => n
      });
      var r, n = ((r = {}).active = "active", r.inactive = "inactive", r)
    },
    64604: (e, t, a) => {
      a.d(t, {
        A7: () => d,
        SB: () => i,
        Zb: () => p,
        dZ: () => o,
        jn: () => s,
        sc: () => l,
        uS: () => u,
        zN: () => c
      });
      var r = a(58417);
      let n = e => !!e?.planId?.trim().endsWith("_trial"),
        l = e => n(e) && !!e?.trialEndDate && new Date < new Date(e?.trialEndDate),
        s = e => !e.length,
        o = (e, t) => !e?.length && (!t?.length || !t?.some(e => e.planId.includes("aasub2025_arkcom") || e.planId.includes("trial"))),
        i = e => "months" !== e.intervalUnit ? e.intervalUnit : 12 === e.intervalLength ? "Annual" : "Monthly",
        d = (e, t = "month") => {
          if ("months" !== e.intervalUnit) return;
          let a = e?.currencies[0]?.currency === "USD" ? "$" : "",
            r = e?.currencies[0]?.unitAmount || 0,
            n = (r / e.intervalLength * 12).toFixed(2);
          if ("year" === t) return 12 === e.intervalLength ? `Billed at ${a}${n}​` : `${a}${n}/year`;
          let [l, s = "00"] = String(r / e?.intervalLength).split("."), o = `${l}.${s?.slice(0,2)}`;
          return `${a}${o}`
        },
        c = (e, t) => {
          let a = e[0];
          return n(a) ? l(a) ? a : {
            ...a,
            planId: a.planId.replace("_trial", "")
          } : a || t.sort(function(e, t) {
            return new Date(t.endDate) - new Date(e.endDate)
          }).find(e => !n(e))
        },
        u = e => e && new Date(e.endDate) > new Date ? r.f.active : r.f.inactive,
        p = (e, t) => {
          let a = l(e),
            r = a ? e.trialEndDate : e.endDate,
            n = t && e.isAutoRenewable ? "Manage Subscription" : "Renew Subscription";
          return {
            text: a ? "Your trial ends:" : t ? e.isAutoRenewable ? "Your subscription renews:" : "Your subscription ends:" : "Your subscription ended:",
            date: new Date(r).toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric"
            }),
            linkText: n
          }
        }
    },
    85352: (e, t, a) => {
      a.d(t, {
        g: () => p,
        w: () => u
      });
      var r = a(95155),
        n = a(12115),
        l = a(88011),
        s = a(97265),
        o = a(38841),
        i = a(84374),
        d = a(17413);
      let c = (0, n.createContext)(null),
        u = ({
          children: e,
          userCountry: t,
          theySellAd: a
        }) => {
          let [u, p] = (0, n.useState)(!1), m = (0, n.useMemo)(() => l.lW.has(t), [t]), g = null;
          if (t && !m) {
            let e = (0, o.env)("NEXT_PUBLIC_DISPLAY_ADS");
            e ? g = a?.displayAdUrl ? (0, s.$)(e, a.displayAdUrl) : e : (0, d.t)().error({}, "[AdsProvider] - NEXT_PUBLIC_DISPLAY_ADS is not set")
          }
          let h = (0, n.useCallback)(() => {
            p(!1), (0, d.t)().error({
              data: {
                url: g
              }
            }, "[AdsProvider] - Error loading display ads")
          }, [g]);
          return (0, r.jsxs)(c.Provider, {
            value: {
              ready: u,
              isAdsDisabledByRegion: m,
              isAdsDisabledByRegionReady: !!t
            },
            "data-sentry-element": "AdsContext.Provider",
            "data-sentry-component": "AdsProvider",
            "data-sentry-source-file": "AdsContext.tsx",
            children: [e, g && (0, r.jsx)(i.default, {
              src: g,
              onLoad: () => p(!0),
              onError: h
            })]
          })
        };

      function p() {
        let e = (0, n.useContext)(c);
        if (!e) throw Error("useAds must be used within AdsProvider");
        return e
      }
    },
    90143: (e, t, a) => {
      a.d(t, {
        E: () => n
      });
      var r = a(95155);
      a(7120);
      let n = e => (0, r.jsx)("span", {
        "aria-label": "card badge",
        className: "_1670v4u0",
        style: {
          backgroundColor: e.backgroundColor,
          color: e.labelColor
        },
        "data-sentry-component": "Badge",
        "data-sentry-source-file": "index.tsx",
        children: e.label
      })
    },
    90242: (e, t, a) => {
      a.d(t, {
        $: () => i
      });
      var r = a(95155),
        n = a(79038),
        l = a(70448),
        s = a.n(l),
        o = a(52573);
      let i = (0, a(12115).forwardRef)(({
        variant: e,
        className: t,
        href: a,
        onClick: l,
        children: i,
        focusable: d = !0,
        size: c,
        tabIndex: u,
        testId: p,
        type: m = "button",
        target: g = "_self",
        role: h,
        disabled: x = !1,
        fullWidth: y
      }, b) => {
        let v = (0, o.button)({
            variant: e,
            size: c,
            fullWidth: y
          }),
          f = {
            className: s()(v, t),
            onClick: l,
            tabIndex: u ?? (!1 === d ? -1 : 0),
            ...p ? {
              "data-testid": p
            } : {}
          };
        return a ? (0, r.jsx)(n.LocalizedLink, {
          href: a,
          target: g,
          role: h,
          ...f,
          children: i
        }) : (0, r.jsx)("button", {
          ref: b,
          type: m,
          ...f,
          "data-testid": p,
          role: h,
          disabled: x || "disabled" === e,
          children: i
        })
      });
      i.displayName = "Button"
    },
    90325: (e, t, a) => {
      a.r(t), a.d(t, {
        ABTestProvider: () => i,
        useABTestContext: () => d
      });
      var r = a(95155),
        n = a(12115),
        l = a(34585),
        s = a(73512);
      let o = (0, n.createContext)(void 0),
        i = ({
          children: e
        }) => {
          let t = (0, n.useMemo)(() => Object.fromEntries(Object.entries(s.$).map(([e, t]) => {
            let a = !0 === t.toggle;
            return [e, {
              experimentName: t.experimentName,
              enabled: a,
              variantIndex: (0, l.D)({
                experiment: t.experimentName,
                isEnabled: a,
                weights: t.weights,
                cookieDays: t.cookieDays
              })
            }]
          })), []);
          return (0, r.jsx)(o.Provider, {
            value: t,
            "data-sentry-element": "ABTestContext.Provider",
            "data-sentry-component": "ABTestProvider",
            "data-sentry-source-file": "context.tsx",
            children: e
          })
        },
        d = () => {
          let e = (0, n.useContext)(o);
          if (void 0 === e) throw Error("useABTestContext must be used within an ABTestProvider");
          return e
        }
    },
    91532: (e, t, a) => {
      a.d(t, {
        ABTestVariant: () => s
      });
      var r = a(95155),
        n = a(12115),
        l = a(36846);
      let s = ({
          testId: e,
          children: t,
          fallback: a = null
        }) => {
          let {
            variantIndex: s
          } = (0, l.H)(e), i = n.Children.toArray(t).find(e => !!n.isValidElement(e) && e.type === o && e.props.variantIndex === s);
          return i ? (0, r.jsx)(r.Fragment, {
            children: i
          }) : (0, r.jsx)(r.Fragment, {
            children: a
          })
        },
        o = ({
          children: e
        }) => (0, r.jsx)(r.Fragment, {
          children: e
        });
      s.Variant = o
    },
    97265: (e, t, a) => {
      a.d(t, {
        $: () => s,
        E: () => l
      });
      var r = a(9482);
      let n = {
          [r.X.AD_300x600]: [r.X.AD_300x600, r.X.AD_300x250, r.X.AD_160x600, r.X.AD_250x250],
          [r.X.AD_300x250]: [r.X.AD_300x250, r.X.AD_250x250],
          [r.X.AD_728x90]: [r.X.AD_728x90, r.X.AD_320x50],
          [r.X.AD_320x50]: [r.X.AD_320x50, r.X.AD_300x50],
          [r.X.AD_300x250_AB_TEST]: [r.X.AD_300x250, r.X.AD_300x600, r.X.AD_250x250]
        },
        l = (e, t = !0) => e ? JSON.stringify(Array.from(new Set(e.reduce((e, a) => [...e, ...t && n[a] || [a]], []))).map(e => {
          let [t, a] = e.split(",");
          return [Number(t), Number(a)]
        })) : null,
        s = (e, t) => {
          if (!t) return e;
          let a = new URL(e),
            r = a.pathname.split("/");
          return r.splice(r.length - 1, 0, t), a.pathname = r.join("/"), a.href
        }
    },
    98566: (e, t, a) => {
      a.d(t, {
        LoadingCoordinatorProvider: () => o,
        U: () => i
      });
      var r = a(95155),
        n = a(12115),
        l = a(36846);
      let s = (0, n.createContext)(null);

      function o({
        componentsOrderToLoad: e = [],
        children: t
      }) {
        let {
          variantIndex: a,
          isEnabled: o
        } = (0, l.H)("loadingCoordinator"), i = o && 1 === a, [d, c] = (0, n.useState)(e), [u, p] = (0, n.useState)(!i), [m, g] = (0, n.useState)(0), [h, x] = (0, n.useState)({}), [y, b] = (0, n.useState)(new Map(d.flat().map(e => [e, !1]))), v = (0, n.useCallback)((e, t) => {
          i && !u ? x(a => ({
            ...a,
            [e]: t
          })) : 0 === d.length ? t() : x(a => a[e] ? a : {
            ...a,
            [e]: t
          })
        }, [i, u, d.length]), f = (0, n.useCallback)(e => {
          x(t => {
            let a = {
              ...t
            };
            return delete a[e], a
          }), b(t => {
            let a = new Map(t);
            return a.delete(e), a
          })
        }, []), C = (0, n.useCallback)(e => {
          let t = d[e];
          t && t.forEach(e => {
            h[e] && h[e]()
          })
        }, [h, d]), _ = (0, n.useCallback)(e => {
          b(t => {
            if (!0 === t.get(e)) return t;
            let a = new Map(t);
            return a.set(e, !0), a
          })
        }, []), k = (0, n.useCallback)(e => !0 === y.get(e), [y]), A = (0, n.useCallback)(e => {
          c(e), p(!0), b(new Map(e.flat().map(e => [e, !1]))), g(0)
        }, []);
        return (0, n.useEffect)(() => {
          if (i && !u) return;
          let e = d[m],
            t = e && e.every(e => void 0 !== h[e]);
          if (0 === m) {
            t && (C(0), g(m + 1));
            return
          }
          d[m - 1].every(e => !0 === y.get(e)) && t && (C(m), g(m + 1))
        }, [h, y, m, C, i, u, d]), (0, r.jsx)(s.Provider, {
          value: {
            subscribeCoordinatedComponent: v,
            doneLoading: _,
            unsubscribeCoordinatedComponent: f,
            isComponentLoaded: k,
            setComponentsOrder: A,
            isCoordinationActive: i
          },
          "data-sentry-element": "LoadingCoordinatorContext.Provider",
          "data-sentry-component": "LoadingCoordinatorProvider",
          "data-sentry-source-file": "LoadingCoordinatorContext.tsx",
          children: t
        })
      }
      let i = () => {
        let e = (0, n.useContext)(s);
        if (!e) throw Error("useCoordinatedLoading must be used within LoadingCoordinatorProvider");
        return e
      }
    }
  }
]);