! function() {
  try {
    var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b7e9cd44-2da7-4dce-8744-371654428d61", e._sentryDebugIdIdentifier = "sentry-dbid-b7e9cd44-2da7-4dce-8744-371654428d61")
  } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9711], {
    9460: (e, t, a) => {
      a.d(t, {
        O: () => u
      });
      var s = a(95155);
      a(69708), a(24465);
      var i = (0, a(1721).c)({
          defaultClassName: "_1v1muu45 _1v1muu44",
          variantClassNames: {
            backgroundVariant: {
              blue: "_1v1muu46",
              purple: "_1v1muu47"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        n = a(26778),
        l = a(90242),
        r = a(44698),
        d = a(70448),
        o = a.n(d);
      let u = ({
        titleText: e,
        variant: t,
        logoSource: a,
        alt: d,
        bannerText: u,
        openModal: c,
        modalType: m
      }) => (0, s.jsxs)("div", {
        className: "_1v1muu40",
        "data-sentry-component": "ProfileBanner",
        "data-sentry-source-file": "index.tsx",
        children: [(0, s.jsx)("div", {
          className: "_1v1muu42",
          children: e
        }), (0, s.jsxs)("div", {
          className: i({
            backgroundVariant: t
          }),
          children: [(0, s.jsx)(n.default, {
            unoptimized: !0,
            className: "_1v1muu43",
            src: a,
            alt: d,
            width: 175,
            height: 86,
            "data-sentry-element": "Image",
            "data-sentry-source-file": "index.tsx"
          }), (0, s.jsx)("div", {
            className: "_1v1muu41",
            children: (0, s.jsx)("span", {
              children: u
            })
          }), (0, s.jsx)(l.$, {
            type: "button",
            size: "medium",
            variant: "outline",
            className: o()("_1v1muu48", r.$A),
            onClick: () => {
              m && c?.(m)
            },
            "data-sentry-element": "Button",
            "data-sentry-source-file": "index.tsx",
            children: "Learn more"
          })]
        })]
      })
    },
    44698: (e, t, a) => {
      a.d(t, {
        $A: () => d,
        $Y: () => y,
        Cu: () => u,
        F$: () => b,
        G1: () => x,
        H6: () => r,
        I3: () => s,
        Ii: () => j,
        OA: () => h,
        P4: () => i,
        Vg: () => m,
        bg: () => p,
        eN: () => f,
        fj: () => o,
        id: () => l,
        j$: () => n,
        jp: () => c,
        n8: () => v,
        q9: () => _
      }), a(6680);
      var s = "_1yxvyes3",
        i = "_1yxvyesd",
        n = "_1yxvyesa",
        l = "_1yxvyes8",
        r = "_1yxvyesb",
        d = "_1yxvyesc",
        o = "_1yxvyes5",
        u = "_1yxvyes4",
        c = "_1yxvyes7",
        m = "_1yxvyes0",
        b = "_1yxvyes1",
        x = "_1yxvyes9",
        p = "_1yxvyes6",
        y = "_1yxvyesh",
        h = "_1yxvyesi",
        v = "_1yxvyesf",
        _ = "_1yxvyesg",
        j = "_1yxvyes2",
        f = "_1yxvyese"
    },
    67754: (e, t, a) => {
      a.d(t, {
        $t: () => h,
        Ez: () => p,
        NH: () => x,
        bW: () => o,
        mQ: () => y
      });
      var s = a(38841),
        i = a(17413),
        n = a(24709),
        l = a(2777),
        r = a(51770),
        d = a(97265);
      let o = {
          development: "DEV",
          production: "PROD",
          staging: "STAGING"
        },
        u = null,
        c = null,
        m = !1,
        b = [];

      function x() {
        m = !0, b.forEach(e => e()), b = []
      }

      function p(e) {
        m = !1, b.forEach(e => e()), b = [], (0, n.Cp)(e, {
          tags: {
            "platform.sdk.load.error": "true",
            "platformad.sdk.load.error.message": e instanceof Error ? e.message : "Unknown error"
          }
        })
      }
      async function y(e, t, a) {
        if (u) return u;
        if (c) return c;
        c = (async () => {
          var s, i;
          let n, d;
          if (await (m ? Promise.resolve() : new Promise(e => {
              b.push(e)
            })), !window.__ArenaApi__?.getInstance) throw Error("Arena SDK script is not available on window.__ArenaApi__");
          let o = await window.__ArenaApi__.getInstance(e, !0);
          return o.initialize(e, !1, t), s = o, i = a, n = (0, l.Bk)(), d = (0, r.Uk)({
            name: "sdk.configure",
            op: "platform.sdk.configure",
            onlyIfParent: !1,
            parentSpan: n ?? void 0,
            attributes: {
              theySellDisplayAdUrl: i?.displayAdUrl,
              theySellVideoAdUrl: i?.videoAdUrl
            }
          }), v({
            theySellUrl: i?.displayAdUrl,
            envKey: "NEXT_PUBLIC_DISPLAY_ADS",
            setAdsUrl: e => s.ads?.setDisplayAdsUrl(e)
          }, d, i), v({
            theySellUrl: i?.videoAdUrl,
            envKey: "NEXT_PUBLIC_VIDEO_ADS",
            setAdsUrl: e => s.ads?.setVideoAdsUrl(e)
          }, d, i), u = o, o
        })();
        try {
          return await c
        } finally {
          c = null
        }
      }

      function h() {
        return u
      }

      function v(e, t, a) {
        let {
          theySellUrl: n,
          envKey: l,
          setAdsUrl: r
        } = e, o = `loading.${l}`;
        if (!n) {
          let e = (0, s.env)(l);
          r(e), t.setAttribute(o, e);
          return
        }
        let u = (0, s.env)(l);
        if (!u) {
          (0, i.t)().error({
            data: {
              baseUrl: u,
              theySell: a
            }
          }, `[configureSdkAfterInit] - ${l} is not set`), t.setAttribute(o, "-");
          return
        }
        let c = (0, d.$)(u, n);
        r(c), t.setAttribute(o, c), (0, i.t)().info({
          data: {
            [l]: n
          }
        }, `[sdk] - Loaded ${l}`)
      }
    },
    72200: (e, t, a) => {
      a.d(t, {
        e: () => l
      });
      var s = a(95155),
        i = a(26778);
      a(98915);
      var n = a(66236);
      let l = ({
        avatarImage: e = n.sj,
        size: t = 163,
        maxSize: a
      }) => (0, s.jsx)("div", {
        className: "_1i3xwon0",
        "data-sentry-component": "Avatar",
        "data-sentry-source-file": "index.tsx",
        children: (0, s.jsx)(i.default, {
          unoptimized: !0,
          className: "_1i3xwon1",
          src: e,
          alt: "Avatar",
          width: t,
          height: t,
          style: a ? {
            maxWidth: `${a}px`,
            maxHeight: `${a}px`
          } : void 0,
          "data-sentry-element": "Image",
          "data-sentry-source-file": "index.tsx"
        })
      })
    },
    79711: (e, t, a) => {
      a.d(t, {
        Subscription: () => E
      });
      var s = a(95155),
        i = a(26778),
        n = a(64604);
      a(88938), a(39580), a(59602);
      var l = a(1721),
        r = (0, l.c)({
          defaultClassName: "_10qjyxc1 _10qjyxc0",
          variantClassNames: {
            twoColumns: {
              true: "_10qjyxc2"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        d = (0, l.c)({
          defaultClassName: "_10qjyxc4 _10qjyxc3",
          variantClassNames: {
            light: {
              true: "_10qjyxc5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      let o = ({
        light: e = !1,
        hideAsterisks: t = !1,
        items: a,
        twoColumns: i
      }) => (0, s.jsx)("ul", {
        "data-testid": "subscription-bullet-list",
        className: r({
          twoColumns: i
        }),
        "data-sentry-component": "SubscriptionBulletList",
        "data-sentry-source-file": "index.tsx",
        children: a.map(a => (0, s.jsx)("li", {
          className: d({
            light: e
          }),
          children: (0, s.jsx)("div", {
            children: t && "string" == typeof a.text ? a.text.replaceAll("*", "") : a.text
          })
        }, a.id))
      });
      var u = a(72200),
        c = a(90242),
        m = a(58417);
      let b = e => {
        let t = (0, n.uS)(e.subscription) === m.f.active,
          a = (0, n.Zb)(e.subscription, t);
        return (0, s.jsxs)("div", {
          "data-testid": "subscription-info",
          className: "taliq0",
          "data-sentry-component": "SubscriptionInfo",
          "data-sentry-source-file": "index.tsx",
          children: [(0, s.jsxs)("div", {
            className: "taliq1",
            children: [(0, s.jsxs)("div", {
              className: "taliq3",
              children: [(0, s.jsx)("div", {
                className: "taliq4",
                children: (0, s.jsx)(u.e, {
                  avatarImage: e.avatar,
                  "data-sentry-element": "Avatar",
                  "data-sentry-source-file": "index.tsx"
                })
              }), (0, s.jsxs)("div", {
                className: "taliq5",
                children: [(0, s.jsx)("div", {
                  className: "taliq6",
                  children: e.plan?.name
                }), (0, s.jsx)("div", {
                  className: "taliq7",
                  children: a.text
                }), (0, s.jsx)("div", {
                  className: "taliq8",
                  children: a.date
                }), (0, s.jsx)(c.$, {
                  className: "taliq9",
                  variant: "filled",
                  href: e.billingPage,
                  target: "_blank",
                  "data-sentry-element": "Button",
                  "data-sentry-source-file": "index.tsx",
                  children: a.linkText
                })]
              })]
            }), (0, s.jsx)("div", {
              className: "taliq2",
              children: e.plan?.bulletList && (0, s.jsx)(o, {
                items: e.plan?.bulletList,
                hideAsterisks: !e.footerText,
                light: !0,
                twoColumns: !0
              })
            })]
          }), (0, s.jsx)("div", {
            className: "taliqa",
            children: e.footerText
          })]
        })
      };
      var x = a(50990);
      a(24216);
      var p = (0, l.c)({
          defaultClassName: "aj3a504 aj3a503",
          variantClassNames: {
            hasPromotion: {
              true: "aj3a505"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        y = a(70448),
        h = a.n(y),
        v = a(44698),
        _ = a(21765),
        j = a(4265);
      let f = e => {
          let t = (0, j.sb)(),
            a = "months" === e.plan.intervalUnit && 12 === e.plan.intervalLength,
            i = a ? "annual" : "monthly";
          return (0, s.jsxs)("div", {
            className: p({
              hasPromotion: !!e.plan.promotionText
            }),
            "data-sentry-component": "SubscriptionPlan",
            "data-sentry-source-file": "index.tsx",
            children: [e.plan.promotionText && (0, s.jsx)("div", {
              className: "aj3a50a",
              children: e.plan.promotionText
            }), (0, s.jsx)("div", {
              className: "aj3a508",
              children: (0, s.jsxs)("div", {
                className: "aj3a509",
                children: [(0, s.jsx)("div", {
                  className: "aj3a50b",
                  children: (0, n.SB)(e.plan)
                }), (0, s.jsxs)("div", {
                  className: "aj3a50c",
                  children: [(0, n.A7)(e.plan), (0, s.jsx)("span", {
                    className: "aj3a50d",
                    children: "/month"
                  })]
                }), (0, s.jsx)("div", {
                  className: "aj3a50e",
                  children: (0, n.A7)(e.plan, "year")
                }), (0, s.jsx)(o, {
                  items: e.plan.bulletList,
                  light: 12 === e.plan.intervalLength,
                  "data-sentry-element": "SubscriptionBulletList",
                  "data-sentry-source-file": "index.tsx"
                })]
              })
            }), (0, s.jsx)(c.$, {
              className: h()("aj3a50f", a ? v.H6 : v.$A),
              variant: a ? "filled" : "outline",
              onClick: () => {
                (0, _.BZ)({
                  subscriptionType: i,
                  xsollaId: t?.uid ?? "",
                  buttonLocation: e.buttonLocation
                }), e.openModal("subscribe", {
                  id: i
                })
              },
              "data-sentry-element": "Button",
              "data-sentry-source-file": "index.tsx",
              children: e.plan.button.label
            })]
          })
        },
        g = e => (0, s.jsxs)("div", {
          "data-testid": "subscription-plans",
          className: "aj3a500",
          "data-sentry-component": "SubscriptionPlans",
          "data-sentry-source-file": "index.tsx",
          children: [(0, s.jsx)("div", {
            "data-testid": "subscriptionPlansDesktop",
            className: "aj3a501",
            children: e.configuredPlans.map(t => (0, s.jsx)("div", {
              className: "aj3a507",
              children: (0, s.jsx)(f, {
                plan: t,
                openModal: e.openModal,
                buttonLocation: e.buttonLocation
              }, t.code)
            }, t.code))
          }), (0, s.jsx)("div", {
            "data-testid": "subscriptionPlansMobile",
            className: "aj3a502",
            children: (0, s.jsx)(x.Carousel, {
              isFullWidth: !0,
              autoPlayTime: 7e3,
              showAutoplayButton: !0,
              enableDots: !0,
              enableArrows: !1,
              fixedHeight: !1,
              dotsOutside: !0,
              dotsBlack: !e.fullWidth,
              "data-sentry-element": "Carousel",
              "data-sentry-source-file": "index.tsx",
              children: e.configuredPlans.map(t => (0, s.jsx)("div", {
                className: "aj3a506",
                children: (0, s.jsx)(f, {
                  plan: t,
                  openModal: e.openModal,
                  buttonLocation: e.buttonLocation
                })
              }, t.code))
            })
          })]
        });
      var S = a(9460),
        N = a(67754),
        A = a(38841);
      let k = {
          aasub2025_arkcom_annual_trial: {
            promotionText: "\uD83D\uDC51 SAVE 41%",
            button: {
              id: 1,
              label: "Subscribe and Save",
              url: "?subscribe=true&id=aasub2025_arkcom_annual_trial"
            },
            bulletList: [{
              id: 1,
              text: "3 Day Free Trial*"
            }, {
              id: 2,
              text: "No Disruptive Ads​"
            }, {
              id: 3,
              text: "Subscriber-Only Games​"
            }, {
              id: 4,
              text: "Bonus Gems**​"
            }, {
              id: 5,
              text: (0, s.jsxs)(s.Fragment, {
                children: ["Save 30% ", (0, s.jsx)("span", {
                  children: "on Gems​"
                })]
              })
            }, {
              id: 6,
              text: "VIP Support"
            }, {
              id: 7,
              text: (0, s.jsxs)(s.Fragment, {
                children: ["Save $33 ", (0, s.jsx)("span", {
                  children: "with an Annual Plan​"
                })]
              })
            }],
            isPlus: !0
          },
          aasub2025_arkcom_monthly_trial: {
            button: {
              id: 1,
              label: "Subscribe",
              url: "?subscribe=true&id=aasub2025_arkcom_monthly_trial"
            },
            bulletList: [{
              id: 1,
              text: "Cancel Anytime"
            }, {
              id: 2,
              text: "3 Day Free Trial*"
            }, {
              id: 3,
              text: "No Disruptive Ads​"
            }, {
              id: 4,
              text: "Subscriber-Only Games​"
            }, {
              id: 5,
              text: "Bonus Gems**​"
            }, {
              id: 6,
              text: (0, s.jsxs)(s.Fragment, {
                children: ["Save 30% ", (0, s.jsx)("span", {
                  children: "on Gems​"
                })]
              })
            }, {
              id: 7,
              text: "VIP Support"
            }],
            isPlus: !0
          },
          aasub2025_arkcom_annual: {
            promotionText: "\uD83D\uDC51 SAVE 41%",
            button: {
              id: 1,
              label: "Subscribe and Save",
              url: "?subscribe=true&id=aasub2025_arkcom_annual"
            },
            bulletList: [{
              id: 2,
              text: "No Disruptive Ads​"
            }, {
              id: 3,
              text: "Subscriber-Only Games​"
            }, {
              id: 4,
              text: "Bonus Gems**​"
            }, {
              id: 5,
              text: (0, s.jsxs)(s.Fragment, {
                children: ["Save 30% ", (0, s.jsx)("span", {
                  children: "on Gems​"
                })]
              })
            }, {
              id: 6,
              text: "VIP Support"
            }, {
              id: 7,
              text: (0, s.jsxs)(s.Fragment, {
                children: ["Save $33 ", (0, s.jsx)("span", {
                  children: "with an Annual Plan​"
                })]
              })
            }],
            isPlus: !0
          },
          aasub2025_arkcom_monthly: {
            button: {
              id: 1,
              label: "Subscribe",
              url: "?subscribe=true&id=aasub2025_arkcom_monthly"
            },
            bulletList: [{
              id: 1,
              text: "Cancel Anytime"
            }, {
              id: 2,
              text: "No Disruptive Ads​"
            }, {
              id: 3,
              text: "Bonus Gems**​"
            }, {
              id: 4,
              text: "Subscriber-Only Games​"
            }, {
              id: 5,
              text: (0, s.jsxs)(s.Fragment, {
                children: ["Save 30% ", (0, s.jsx)("span", {
                  children: "on Gems​"
                })]
              })
            }, {
              id: 6,
              text: "VIP Support"
            }],
            isPlus: !0
          },
          aasub_arkcom_annual: {
            promotionText: "\uD83D\uDC51 SAVE 41%",
            button: {
              id: 1,
              label: "Subscribe and Save",
              url: "?subscribe=true&id=aasub_arkcom_annual"
            },
            bulletList: [{
              id: 1,
              text: "No Disruptive Ads​"
            }, {
              id: 2,
              text: "VIP Support"
            }, {
              id: 3,
              text: "Subscriber-Only Games​"
            }, {
              id: 4,
              text: "Save 30% on Gems​"
            }],
            isPlus: !1
          },
          aasub_arkcom_monthly: {
            button: {
              id: 1,
              label: "Subscribe",
              url: "/profile?tab=Subscriptions&subscribe=true&id=aasub_arkcom_monthly"
            },
            bulletList: [{
              id: 1,
              text: "No Disruptive Ads​"
            }, {
              id: 2,
              text: "VIP Support"
            }, {
              id: 3,
              text: "Subscriber-Only Games​"
            }, {
              id: 4,
              text: "Save 30% on Gems​"
            }],
            isPlus: !1
          }
        },
        P = {
          test____aasub2025_arkcom_annual_trial: {
            promotionText: "\uD83D\uDC51 SAVE 41%",
            button: {
              id: 1,
              label: "Subscribe and Save",
              url: "subscribe=true&id=annual"
            },
            bulletList: [{
              id: 1,
              text: "3 Day Free Trial*"
            }, {
              id: 2,
              text: "No Disruptive Ads​"
            }, {
              id: 3,
              text: "Subscriber-Only Games​"
            }, {
              id: 4,
              text: "Bonus Gems**​"
            }, {
              id: 5,
              text: (0, s.jsxs)(s.Fragment, {
                children: ["Save 30% ", (0, s.jsx)("span", {
                  children: "on Gems​"
                })]
              })
            }, {
              id: 6,
              text: "VIP Support"
            }, {
              id: 7,
              text: (0, s.jsxs)(s.Fragment, {
                children: ["Save $33 ", (0, s.jsx)("span", {
                  children: "with an Annual Plan​"
                })]
              })
            }],
            isPlus: !0
          },
          test____aasub2025_arkcom_monthly_trial: {
            button: {
              id: 1,
              label: "Subscribe",
              url: "subscribe=true&id=monthly"
            },
            bulletList: [{
              id: 1,
              text: "Cancel Anytime"
            }, {
              id: 2,
              text: "3 Day Free Trial*"
            }, {
              id: 3,
              text: "No Disruptive Ads​"
            }, {
              id: 4,
              text: "Subscriber-Only Games​"
            }, {
              id: 5,
              text: "Bonus Gems**​"
            }, {
              id: 6,
              text: (0, s.jsxs)(s.Fragment, {
                children: ["Save 30% ", (0, s.jsx)("span", {
                  children: "on Gems​"
                })]
              })
            }, {
              id: 7,
              text: "VIP Support"
            }],
            isPlus: !0
          },
          test____aasub2025_arkcom_annual: {
            promotionText: "\uD83D\uDC51 SAVE 41%",
            button: {
              id: 1,
              label: "Subscribe and Save",
              url: "subscribe=true&id=annual"
            },
            bulletList: [{
              id: 2,
              text: "No Disruptive Ads​"
            }, {
              id: 3,
              text: "Subscriber-Only Games​"
            }, {
              id: 4,
              text: "Bonus Gems**​"
            }, {
              id: 5,
              text: (0, s.jsxs)(s.Fragment, {
                children: ["Save 30% ", (0, s.jsx)("span", {
                  children: "on Gems​"
                })]
              })
            }, {
              id: 6,
              text: "VIP Support"
            }, {
              id: 7,
              text: (0, s.jsxs)(s.Fragment, {
                children: ["Save $33 ", (0, s.jsx)("span", {
                  children: "with an Annual Plan​"
                })]
              })
            }],
            isPlus: !0
          },
          test____aasub2025_arkcom_monthly: {
            button: {
              id: 1,
              label: "Subscribe",
              url: "subscribe=true&id=monthly"
            },
            bulletList: [{
              id: 1,
              text: "Cancel Anytime"
            }, {
              id: 2,
              text: "No Disruptive Ads​"
            }, {
              id: 3,
              text: "Bonus Gems**​"
            }, {
              id: 4,
              text: "Subscriber-Only Games​"
            }, {
              id: 5,
              text: (0, s.jsxs)(s.Fragment, {
                children: ["Save 30% ", (0, s.jsx)("span", {
                  children: "on Gems​"
                })]
              })
            }, {
              id: 6,
              text: "VIP Support"
            }],
            isPlus: !0
          },
          test____aasub_arkcom_annual: {
            promotionText: "\uD83D\uDC51 SAVE 41%",
            button: {
              id: 1,
              label: "Subscribe and Save",
              url: "subscribe=true&id=annual"
            },
            bulletList: [{
              id: 1,
              text: "No Disruptive Ads​"
            }, {
              id: 2,
              text: "VIP Support"
            }, {
              id: 3,
              text: "Subscriber-Only Games​"
            }, {
              id: 4,
              text: "Save 30% on Gems​"
            }],
            isPlus: !1
          },
          test____aasub_arkcom_monthly: {
            button: {
              id: 1,
              label: "Subscribe",
              url: "subscribe=true&id=monthly"
            },
            bulletList: [{
              id: 1,
              text: "No Disruptive Ads​"
            }, {
              id: 2,
              text: "VIP Support"
            }, {
              id: 3,
              text: "Subscriber-Only Games​"
            }, {
              id: 4,
              text: "Save 30% on Gems​"
            }],
            isPlus: !1
          }
        },
        w = (0, A.env)("NEXT_PUBLIC_BUILD_ENV"),
        V = N.bW[w] == N.bW.production || N.bW[w] == N.bW.staging ? k : P;
      var I = (0, l.c)({
          defaultClassName: "_19lrbemg _19lrbemf",
          variantClassNames: {
            fullWidth: {
              true: "_19lrbemh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        G = (0, l.c)({
          defaultClassName: "_19lrbem9 _19lrbem8",
          variantClassNames: {
            fullWidth: {
              true: "_19lrbema"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        L = (0, l.c)({
          defaultClassName: "_19lrbem5 _19lrbem4",
          variantClassNames: {
            short: {
              true: "_19lrbem6"
            },
            wide: {
              true: "_19lrbem7"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        C = "_19lrbemi",
        D = (0, l.c)({
          defaultClassName: "_19lrbem1 _19lrbem0",
          variantClassNames: {
            wide: {
              true: "_19lrbem2"
            },
            fullWidth: {
              true: "_19lrbem3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        T = a(85824);
      let B = () => (0, s.jsxs)(s.Fragment, {
          children: ["Have questions?\xa0", (0, s.jsx)("a", {
            className: "_19lrbemj",
            href: "https://support.arkadium.com/en/support/solutions/folders/44000751704",
            target: "_blank",
            children: "Visit the FAQ"
          }), "."]
        }),
        F = () => (0, s.jsxs)(s.Fragment, {
          children: ["*Offer valid for new users only; restrictions apply. **Annual plans include bonus gems at each renewal; monthly plans provide bonus gems only upon initial subscription. Your subscription will renew automatically - manage or cancel your subscription any time through your profile.", (0, s.jsx)("br", {}), (0, s.jsx)(B, {
            "data-sentry-element": "VisitFAQ",
            "data-sentry-source-file": "index.tsx"
          })]
        }),
        $ = (0, s.jsx)(B, {}),
        U = `*Offer valid for new users only; restrictions apply. **Annual plans include bonus gems at each renewal; monthly plans provide bonus gems only upon initial subscription. Your subscription will renew automatically – manage or cancel your subscription any time through your profile.`,
        O = ` **Annual plans include bonus gems at each renewal; monthly plans provide bonus gems only upon initial subscription. Your subscription will renew automatically – manage or cancel your subscription any time through your profile.`,
        E = ({
          avatar: e,
          wide: t,
          activeSubscriptions: a,
          expiredSubscriptions: l,
          subscriptionPlans: r,
          billingPageLink: d,
          fullWidth: o,
          subscriptionTitle: u = "The Best Way to Play",
          impression: m = "subscriptionModal"
        }) => {
          let {
            openModal: x
          } = (0, T.h)(), p = (0, n.dZ)(a, l), y = Object.keys(V).filter(e => !!r.find(t => t.code === e)).map(e => ({
            ...r.find(t => t.code === e),
            ...V[e]
          })), v = y.filter(e => !!e.code.includes("aasub2025_arkcom") && (p ? e.code.includes("_trial") : !e.code.includes("_trial"))), _ = (0, n.jn)(a || []), j = (0, n.zN)(a, l), f = y.find(e => e.code === j?.planId), N = !(0, n.sc)(j) && (j?.isAutoRenewable || f?.isPlus === !1) ? $ : (0, s.jsx)(F, {}), A = _ || (0, n.sc)(j);
          return (0, s.jsx)("div", {
            className: D({
              wide: t,
              fullWidth: o
            }),
            "data-testid": "plus-modal",
            "data-sentry-component": "Subscription",
            "data-sentry-source-file": "index.tsx",
            children: (0, s.jsxs)("div", {
              className: L({
                short: _,
                wide: t
              }),
              children: [(0, s.jsxs)("div", {
                className: G({
                  fullWidth: o
                }),
                children: [!o && (0, s.jsx)(i.default, {
                  unoptimized: !0,
                  className: "_19lrbemb",
                  src: "https://arenacloud.cdn.arkadiumhosted.com/arkcomstrapiuploadsdev-blob/test/assets/arkadium_Plus_Logo_143366f226.png",
                  alt: u,
                  width: 175,
                  height: 86
                }), (0, s.jsx)("div", {
                  className: "_19lrbemc",
                  children: u
                })]
              }), (0, s.jsxs)("div", {
                children: [(0, s.jsx)("div", {
                  className: h()("_19lrbemd", {
                    _19lrbeme: "subscriptionModal" === m && j
                  }),
                  children: _ ? (0, s.jsx)(g, {
                    configuredPlans: v,
                    fullWidth: o,
                    openModal: (e, t) => {
                      x(e, t, m)
                    },
                    buttonLocation: m
                  }) : j && (0, s.jsx)(b, {
                    subscription: j,
                    plan: f,
                    footerText: N,
                    avatar: e,
                    billingPage: d
                  })
                }), _ && (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)("div", {
                    className: I({
                      fullWidth: o
                    }),
                    children: p ? U : O
                  }), (0, s.jsxs)("div", {
                    className: I({
                      fullWidth: o
                    }),
                    children: [(0, s.jsx)(c.$, {
                      href: "/player-agreement",
                      target: "_blank",
                      className: C,
                      variant: "label",
                      children: "Arkadium Player Agreement"
                    }), ",", " ", (0, s.jsx)(c.$, {
                      className: C,
                      target: "_blank",
                      href: "https://www.arkadium.com/arkadium-plus-agreement.pdf",
                      variant: "label",
                      children: "Arkadium Plus Membership Agreement"
                    }), " ", "and", " ", (0, s.jsx)(c.$, {
                      className: C,
                      target: "_blank",
                      href: "/privacy-policy",
                      variant: "label",
                      children: "Privacy policy"
                    })]
                  })]
                })]
              }), !o && (0, s.jsx)(S.O, {
                openModal: (e, t) => {
                  x(e, t, "shop" === e ? "shopBanner" : "plusBanner")
                },
                modalType: "shop",
                titleText: _ ? "Not ready to subscribe? Use gems to level up your game​" : "Use gems to level up your game​",
                variant: "blue",
                logoSource: "https://arenacloud.cdn.arkadiumhosted.com/arkadiummodulesstorage-blob/evo-static-assets/assets/shop/ArkShop.webp",
                alt: "Arkadium Plus Logo",
                bannerText: A ? "Use gems to skip ads and enhance your gameplay with boosts in your favorite games​" : "Save 30% on gems​"
              })]
            })
          })
        }
    }
  }
]);