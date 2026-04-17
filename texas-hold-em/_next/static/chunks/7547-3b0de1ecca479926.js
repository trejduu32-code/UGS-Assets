! function() {
  try {
    var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0a095ec7-8c08-4a4b-9706-26234ac3284d", e._sentryDebugIdIdentifier = "sentry-dbid-0a095ec7-8c08-4a4b-9706-26234ac3284d")
  } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7547], {
    646: (e, t, a) => {
      a.d(t, {
        M5: () => m,
        NL: () => i,
        Nf: () => l,
        jr: () => s,
        lu: () => r
      });
      var n = a(99472),
        o = a(88011);

      function i(e, t, a = o.Xn, n = !1, s) {
        let r = e;
        if (e === `/${t}/` && s) return "/";
        if (e.startsWith(`/${t}`) || e === `/${t}`) n && t === a && (r = e.replace(`/${t}`, ""));
        else if (e.startsWith("/")) {
          if ("/" === e) return t === a ? n ? "/" : `/${t}` : s ? `/${t}/` : `/${t}`;
          r = n && t === a ? e : `/${t}/${e.slice(1)}`
        }
        let l = r.includes("?"),
          m = r.split("/").pop()?.includes(".");
        return !s || r.endsWith("/") || l || m ? r : `${r}/`
      }
      let s = (e, t) => new URLSearchParams(e).get(t) ?? "",
        r = e => e.split("/")[1],
        l = (e, t) => {
          let a = e.startsWith("/") ? e.slice(1) : e;
          return "" === a ? `/${t}` : `/${t}/${a}`
        },
        m = e => {
          let [t, a] = window.location.pathname.split("/").filter(Boolean), o = e ? t : a;
          return o ? ({
            games: n.p.GAMEPAGE,
            blog: n.p.BLOG,
            search: n.p.SEARCH,
            tags: n.p.TAGS,
            profile: n.p.PROFILE,
            sitemap: n.p.SITEMAP,
            "privacy-policy": n.p.PRIVACY_POLICY,
            "player-agreement": n.p.PLAYER_AGREEMENT,
            category: n.p.CATEGORY,
            categories: n.p.CATEGORY,
            "free-online-games": n.p.CATEGORY
          })[o] || n.p.GENERIC : n.p.GENERIC_HOME
        }
    },
    6240: (e, t, a) => {
      a.d(t, {
        LocaleConfigProvider: () => m,
        s: () => l
      });
      var n = a(95155),
        o = a(12115),
        i = a(646),
        s = a(14011);
      let r = (0, o.createContext)({
          defaultLocale: "en",
          currentLocale: "en",
          isDefaultLocaleHidden: !1,
          getLocalizedPathname: () => "",
          navigateTo: () => {},
          routerReplaceLocalized: () => {},
          getPageSlug: () => "",
          isTrailingSlashEnabled: !1
        }),
        l = () => (0, o.useContext)(r);

      function m({
        children: e,
        defaultLocale: t,
        currentLocale: a,
        isDefaultLocaleHidden: o,
        trailingSlash: l
      }) {
        let m = (0, s.useRouter)(),
          c = e => (0, i.NL)(e, a, t, o, l);
        return (0, n.jsx)(r.Provider, {
          value: {
            defaultLocale: t,
            currentLocale: a,
            isDefaultLocaleHidden: o,
            getLocalizedPathname: c,
            navigateTo: (e, t) => {
              let a = c(e);
              t?.query && (a = `${a}?${t.query.toString()}`), m.push(a, {
                scroll: !0
              })
            },
            routerReplaceLocalized: (e, t) => {
              let a = c(e);
              t?.query && (a = `${a}?${t.query.toString()}`), m.replace(a)
            },
            getPageSlug: e => a === t && o ? e.split("/")[1] : e.split("/")[2],
            isTrailingSlashEnabled: l
          },
          "data-sentry-element": "LocaleConfigContext.Provider",
          "data-sentry-component": "LocaleConfigProvider",
          "data-sentry-source-file": "LocaleConfigContext.tsx",
          children: e
        })
      }
    },
    14407: (e, t, a) => {
      a.d(t, {
        M: () => n
      });
      let n = !a(83226).S && window.requestIdleCallback ? (e, t) => window.requestIdleCallback(e, t) : function(e, t) {
        let a = Date.now();
        return setTimeout(() => {
          e({
            didTimeout: !1,
            timeRemaining: () => Math.max(0, 50 - (Date.now() - a))
          })
        }, t?.timeout || 1)
      }
    },
    17413: (e, t, a) => {
      a.d(t, {
        t: () => l
      });
      var n = a(84940),
        o = a.n(n);
      let i = {
        level: (0, a(38841).env)("NEXT_PUBLIC_LOGGER_LEVEL") || "warn",
        redact: ["username", "password", "accessToken", "refreshToken", "token", "oldPassword", "newPassword"],
        formatters: {
          level: e => ({
            level: e
          })
        },
        serializers: {
          data: e => e instanceof Error || e?.err instanceof Error ? o().stdSerializers.err(e) : e
        },
        browser: {
          asObject: !0
        },
        args: !0
      };
      var s = a(58373);
      let r = o()(i),
        l = (e = "Browser", t = (0, s.A)()) => r.child({
          location: "Browser",
          correlationId: t
        })
    },
    21765: (e, t, a) => {
      a.d(t, {
        $t: () => eC,
        $u: () => td,
        BG: () => tl,
        BZ: () => e5,
        Be: () => ea,
        Bg: () => eP,
        Bl: () => e4,
        Bm: () => ta,
        Bv: () => et,
        Eh: () => en,
        Fi: () => tr,
        Gd: () => eD,
        IP: () => z,
        JC: () => Q,
        KE: () => ev,
        LO: () => eS,
        Lx: () => eA,
        MT: () => e8,
        Mm: () => tm,
        Ms: () => eb,
        N6: () => G,
        OZ: () => ei,
        Ok: () => ey,
        PT: () => q,
        Pq: () => eL,
        Ps: () => e6,
        Px: () => tn,
        RT: () => ef,
        RZ: () => e7,
        Sz: () => es,
        T9: () => V,
        TG: () => eN,
        TM: () => tt,
        UM: () => eY,
        VN: () => eI,
        Vc: () => ts,
        Vf: () => X,
        Vz: () => eZ,
        Ws: () => M,
        Xp: () => eJ,
        YM: () => ew,
        Yf: () => R,
        Ym: () => ek,
        Yv: () => Y,
        ZR: () => e0,
        ZZ: () => O,
        Ze: () => j,
        _N: () => ee,
        a7: () => ex,
        aB: () => F,
        aW: () => e_,
        b4: () => eF,
        c$: () => e2,
        c7: () => H,
        cK: () => K,
        cZ: () => eh,
        ej: () => eV,
        er: () => Z,
        fy: () => eT,
        g3: () => eX,
        gF: () => er,
        go: () => eg,
        gr: () => el,
        h_: () => te,
        kF: () => ed,
        kf: () => eB,
        lo: () => e3,
        m$: () => eu,
        m5: () => U,
        mG: () => eO,
        mP: () => tc,
        ml: () => eE,
        o3: () => eK,
        oN: () => eo,
        oX: () => eM,
        oe: () => x,
        oy: () => $,
        qT: () => e1,
        rM: () => eR,
        s9: () => e9,
        sY: () => ej,
        tG: () => eU,
        tQ: () => eG,
        tS: () => B,
        uQ: () => ti,
        vn: () => em,
        wG: () => J,
        wX: () => e$,
        wt: () => eQ,
        xM: () => to,
        xR: () => ep,
        yn: () => W,
        z0: () => eq,
        zL: () => T,
        zX: () => ec
      });
      var n = a(69067),
        o = a(24408),
        i = a(88058),
        s = a(47345),
        r = a(86910),
        l = a(20056),
        m = a(17413),
        c = a(11385),
        d = a(33097),
        u = a(82725),
        p = a(22372),
        g = a(93284),
        h = a(62936),
        b = a(88828),
        v = a(28062),
        C = a(65475),
        f = a(69142),
        y = a(63554);
      let A = new s.L,
        S = new r.o,
        N = new l.y,
        I = new u.k,
        P = new C.v,
        w = new f.G,
        E = () => ({
          domain: window.location.hostname,
          url: window.location.href,
          page: window.location.pathname,
          platform: "evo"
        }),
        _ = {},
        T = (0, o.NV)((e, t) => {
          if (!k("skipcwv")) switch (t.name) {
            case "LCP":
            case "FCP":
            case "TTFB":
              _[t.name] = {
                value: t.value
              }, _.LCP && _.FCP && _.TTFB && L(e, _);
              break;
            case "CLS":
            case "INP":
              D(e, t)
          }
        }),
        k = e => {
          let t = g.sj.getItem(e, !0),
            a = !1;
          return "" === t ? (a = !(.3 > Math.random()), g.sj.setItem(e, a.toString(), !0)) : a = "true" === t, a
        },
        D = (e, t) => {
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: "WebVitals",
            isNonInteraction: !1,
            eventAction: i.bi.IMPRESSION,
            customDimensions: {
              [t.name]: {
                name: t.name,
                value: t.value
              }
            }
          })
        },
        L = (e, t) => {
          let {
            ads_abtest: a,
            ...n
          } = e.baseCustomDimensions, o = {
            ...e.baseParams,
            ...n,
            ...Object.fromEntries(Object.entries(t).map(([e, {
              value: t
            }]) => [e, JSON.stringify({
              value: t
            })])),
            noninteraction: "false"
          };
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: "WebVitals",
            isNonInteraction: !1,
            eventAction: i.bi.IMPRESSION,
            customDimensions: {
              ...Object.fromEntries(Object.entries(t).map(([e, {
                value: t
              }]) => [e, {
                name: e,
                value: t
              }])),
              name: "allMetrics",
              ...o
            }
          })
        },
        R = (0, o.NV)(e => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "topNavImpression",
          isNonInteraction: !0,
          eventAction: i.bi.IMPRESSION
        })),
        x = (0, o.NV)((e, t, a, n) => {
          let o;
          (0, m.t)().debug("[AI - trackEvent] - TrackPageView");
          let i = {
              urlReferrer: (0, v.G2)()
            },
            {
              ads_abtest: s,
              ...r
            } = e.baseCustomDimensions,
            l = (0, v.jv)({
              ...e.baseParams,
              ...r,
              ...i
            });
          c.AppInsightService.trackPageView((o = new URL(window.location.href), tl() && o.searchParams.set("arkpromo", "pwa"), o.toString()), l, e.baseParams?.screenResolution || ""), d.y.trackEvent({
            event: h.e.PageView,
            properties: {
              ...E()
            }
          }), eW(e)
        }),
        B = (e, t) => {
          let {
            generalAnalytics: a,
            analyticsParams: o
          } = e, {
            ads_abtest: i,
            ...s
          } = o.baseCustomDimensions, r = a?.genericAiEvent({
            ...o.baseParams,
            ...s
          }, e.eventAction, e.eventName, e.isNonInteraction, e.game, {
            ...o.baseParams,
            ...s,
            ...e.customDimensions && "object" == typeof e.customDimensions && !Array.isArray(e.customDimensions) ? e.customDimensions : {}
          });
          t && (r.ga = t), (0, n.sx)(r), eW(o)
        },
        O = (0, o.NV)((e, t, a) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "promoboxSlot",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: {
            carouselId: t,
            carouselTitle: a,
            promoboxType: a,
            buttonContent: "seeAll"
          }
        })),
        V = (0, o.NV)((e, t) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "filter_click",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: {
            filterType: t
          }
        })),
        G = (0, o.NV)(e => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "leaderboard_views",
          isNonInteraction: !1,
          eventAction: i.bi.IMPRESSION,
          customDimensions: {}
        })),
        F = (0, o.NV)((e, t, a) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "promoboxSlot",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: {
            cardType: "NumericCard",
            game: t,
            cardImageURL: a
          }
        })),
        M = (0, o.NV)((e, t) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "seoCard",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: {
            cardType: "SeoCard",
            cardTitle: t
          }
        })),
        U = (0, o.NV)((e, t, a, n, o, s = "0") => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "promoboxSlot",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: {
            cardType: "StandardCard",
            game: t,
            cardImageURL: a,
            badge_text: n,
            promoboxType: o,
            index: s
          }
        })),
        K = (0, o.NV)((e, t, a, n, o, s) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "promoboxSlot",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: {
            cardType: 0 == s ? "Carousel" : "PromoCard",
            game: o,
            cardImageURL: a,
            buttonContent: t,
            index: n
          }
        }));
      (0, o.NV)((e, t, a, n) => B({
        analyticsParams: e,
        generalAnalytics: A,
        eventName: "promoboxSlot",
        isNonInteraction: !1,
        eventAction: i.bi.CLICK,
        customDimensions: {
          cardType: "StandardCard",
          game: t,
          cardImageURL: a,
          carouselId: n
        }
      }));
      let H = (0, o.NV)(e => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "collectGems",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: {
            buttonLocation: "registration"
          }
        })),
        $ = (0, o.NV)((e, t) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "promoboxSlot",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: {
            cardType: "Carousel",
            game: t,
            buttonLocation: "gemsRewardRegistration"
          }
        })),
        z = (0, o.NV)((e, t, a, n, o, s) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "promoboxSlot",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: {
            cardType: "PortraitCard",
            game: t,
            cardImageURL: a,
            badge_text: n,
            promoboxType: o,
            index: s
          }
        }));
      (0, o.NV)((e, t, a) => B({
        analyticsParams: e,
        generalAnalytics: A,
        eventName: "heroCard",
        isNonInteraction: !1,
        eventAction: i.bi.CLICK,
        customDimensions: {
          cardType: "Marketing",
          cardImageURL: t,
          badge_text: a
        }
      }));
      let W = (0, o.NV)((e, t, a, n, o, s) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "mixedCarousel",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: {
            cardType: t,
            promoboxType: a,
            game: n,
            badge_text: o ?? "",
            index: s
          }
        })),
        j = (0, o.NV)((e, t, a, n) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "heroCard",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: {
            cardType: "HeroCard",
            cardTitle: t,
            cardImageURL: a,
            badge_text: n
          }
        })),
        Y = (0, o.NV)((e, t, a, n) => {
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: "promoboxSlot",
            isNonInteraction: !1,
            eventAction: i.bi.CLICK,
            customDimensions: {
              isFavorited: t ? "true" : "false",
              cardType: "StandardCard",
              game: a,
              cardImageURL: n,
              badge_text: "Continue playing"
            }
          })
        }),
        Q = (0, o.NV)((e, t, a, n, o) => {
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: "funnelPlayNow",
            isNonInteraction: !1,
            eventAction: i.bi.CLICK,
            customDimensions: {
              playAgainStart: t,
              isFavorited: a,
              game: n.slug,
              gameplayId: o
            }
          }), d.y.trackEvent({
            event: h.e.FunnelPlayNow,
            properties: {
              ...E(),
              game: n?.meta?.name || ""
            }
          })
        }),
        q = (0, o.NV)((e, t) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "TagButton",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: {
            tagText: t || ""
          }
        })),
        X = (0, o.NV)((e, t, a) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "adBlockPopup",
          isNonInteraction: !0,
          eventAction: i.bi.IMPRESSION,
          customDimensions: {
            playAgainStart: t
          }
        })),
        J = (0, o.NV)(e => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "adBlockButtonClick",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK
        })),
        Z = (0, o.NV)((e, t) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "SearchNav",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: t ? {
            game: t
          } : {}
        })),
        ee = (0, o.NV)((e, t, a) => {
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: "SearchBox",
            isNonInteraction: !1,
            eventAction: i.bi.QUERY,
            customDimensions: a ? {
              searchQuery: t,
              game: a
            } : {
              searchQuery: t
            }
          }), d.y.trackEvent({
            event: h.e.Search_Performed,
            properties: {
              ...E(),
              keyword: t
            }
          })
        }),
        et = (0, o.NV)((e, t, a, n) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "TopNav",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: {
            categoryName: t,
            index: a,
            buttonLocation: n
          }
        })),
        ea = (0, o.NV)((e, t, a, n) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "CatNav",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: {
            categoryName: t,
            index: a,
            buttonLocation: n
          }
        })),
        en = (0, o.NV)((e, t, a, n) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "CatNav",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: {
            categoryName: t,
            index: a,
            buttonLocation: n
          }
        })),
        eo = (0, o.NV)((e, t) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "sortBy",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: {
            buttonContent: t
          }
        })),
        ei = (0, o.NV)((e, t) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "LogoLinkClick",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: {
            label: t.label,
            href: t.href
          }
        })),
        es = (0, o.NV)((e, t) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "SocialLinkClick",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: {
            label: t.label,
            href: t.href
          }
        })),
        er = (0, o.NV)((e, t) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "GroupLinkClick",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: {
            label: t.label,
            href: t.href
          }
        })),
        el = (0, o.NV)(e => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "GDPRLinkClick",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK
        })),
        em = (0, o.NV)(e => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "USPrivacyLinkClick",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK
        })),
        ec = (0, o.NV)(e => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "MicrosoftPrivacyLinkClick",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK
        })),
        ed = (0, o.NV)((e, t) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "notificationBanner",
          isNonInteraction: !1,
          eventAction: "to_Ark",
          customDimensions: t
        })),
        eu = (0, o.NV)((e, t) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "notificationBanner",
          isNonInteraction: !1,
          eventAction: "Close",
          customDimensions: t
        })),
        ep = (0, o.NV)((e, t) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "notificationBanner",
          isNonInteraction: !1,
          eventAction: i.bi.IMPRESSION,
          customDimensions: t
        })),
        eg = (0, o.NV)((e, t, a, o) => (0, n.sx)(N.profileAvatarCustomize({
          ...e.baseParams
        }, t, a, o))),
        eh = (0, o.NV)(e => (0, n.sx)(N.resendConfirmation({
          ...e.baseParams
        }))),
        eb = (0, o.NV)((e, t) => (0, n.sx)(N.profileEmail({
          ...e.baseParams
        }, t))),
        ev = (0, o.NV)((e, t) => (0, n.sx)(I.clickFavoriteGameTile({
          ...e.baseParams
        }, {
          gameSlug: t,
          gameFavorited: !0,
          pageType: p.EM.PROFILE
        }))),
        eC = (0, o.NV)((e, t) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "findFavoriteCTA",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: t
        })),
        ef = (0, o.NV)((e, t) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "favoriteAdded",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: {
            ...t,
            isFavorited: !0
          }
        })),
        ey = (0, o.NV)((e, t) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "favoriteRemoved",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: {
            ...t,
            isFavorited: !1
          }
        })),
        eA = (0, o.NV)((e, t) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "howToPlay",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: t
        })),
        eS = (0, o.NV)((e, t, a) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "fullScreenOpen",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: t,
          game: a
        })),
        eN = (0, o.NV)((e, t, a) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "fullScreenExit",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: t,
          game: a
        })),
        eI = (0, o.NV)((e, t) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "leaderboard",
          isNonInteraction: !1,
          eventAction: i.bi.IMPRESSION,
          customDimensions: t
        })),
        eP = (0, o.NV)((e, t, a, n, o) => {
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: t,
            isNonInteraction: !1,
            eventAction: i.bi.CLICK,
            customDimensions: {
              buttonLocation: a,
              buttonContent: n,
              game: o
            }
          })
        }),
        ew = (0, o.NV)((e, t, a, o, i, s) => {
          (0, n.sx)(S.prerollStart({
            ...e.baseParams,
            playAgainStart: t,
            isFavorite: a,
            game: o,
            gameplayId: i,
            ABTestSlot1: e.baseCustomDimensions.ABTestSlot1,
            ABTestSlot: e.baseCustomDimensions.ABTestSlot,
            ABTestName: e.baseCustomDimensions.ABTestName
          }, o, e.baseParams.domain || "", window.location.href, i, e.baseParams.recommendedGamesStart, a, e.baseCustomDimensions.ads_abtest, s, e.baseCustomDimensions.pwa ?? "no")), d.y.trackEvent({
            event: h.e.FunnelPrerollRequest,
            properties: {
              ...E(),
              game: o?.meta?.name || "",
              playAgainStart: t,
              isFavorited: e.baseCustomDimensions.isFavorited
            }
          })
        }),
        eE = (0, o.NV)((e, t, a, o, i) => {
          let s = {
              ...e.baseParams,
              playAgainStart: t,
              isFavorite: a,
              game: o,
              gameplayId: i,
              noninteraction: !1,
              ABTestSlot1: e.baseCustomDimensions.ABTestSlot1,
              ABTestSlot: e.baseCustomDimensions.ABTestSlot,
              ABTestName: e.baseCustomDimensions.ABTestName
            },
            r = {
              game: o,
              href: window.location.href,
              gameplayId: i,
              recommendedGamesStart: e.baseParams.recommendedGamesStart,
              isFavorited: a,
              ads_abtest: e.baseCustomDimensions.ads_abtest,
              pwa: e.baseCustomDimensions.pwa ?? "no"
            };
          (0, n.sx)(S.prerollEnd(s, r));
          let l = {
            ...E(),
            game: o?.meta?.name || "",
            playAgainStart: t,
            isFavorited: e.baseCustomDimensions.isFavorited
          };
          d.y.trackEvent({
            event: h.e.FunnelPrerollEnd,
            properties: l
          })
        }),
        e_ = (0, o.NV)((e, t, a, o, i, s) => {
          let r = {
              ...e.baseParams,
              playAgainStart: t,
              isFavorite: a,
              game: o,
              gameplayId: i,
              noninteraction: !1,
              ABTestSlot1: e.baseCustomDimensions.ABTestSlot1,
              ABTestSlot: e.baseCustomDimensions.ABTestSlot,
              ABTestName: e.baseCustomDimensions.ABTestName,
              timestamp: s
            },
            l = {
              game: o,
              href: window.location.href,
              gameplayId: i,
              recommendedGamesStart: e.baseParams.recommendedGamesStart,
              isFavorited: a,
              ads_abtest: e.baseCustomDimensions.ads_abtest,
              timestamp: s,
              pwa: e.baseCustomDimensions.pwa ?? "no"
            };
          (0, n.sx)(S.prerollLoaded(r, l));
          let m = {
            ...E(),
            game: o?.meta?.name || "",
            playAgainStart: t,
            timestamp: s
          };
          d.y.trackEvent({
            event: h.e.FunnelPrerollLoaded,
            properties: m
          })
        }),
        eT = (0, o.NV)((e, t, a, o, i) => {
          let s = {
              ...e.baseParams,
              playAgainStart: t,
              isFavorite: a,
              game: o,
              gameplayId: i,
              noninteraction: !1,
              ABTestSlot1: e.baseCustomDimensions.ABTestSlot1,
              ABTestSlot: e.baseCustomDimensions.ABTestSlot,
              ABTestName: e.baseCustomDimensions.ABTestName
            },
            r = {
              game: o,
              href: window.location.href,
              gameplayId: i,
              recommendedGamesStart: e.baseParams.recommendedGamesStart,
              isFavorited: a,
              ads_abtest: e.baseCustomDimensions.ads_abtest,
              pwa: e.baseCustomDimensions.pwa ?? "no"
            };
          (0, n.sx)(S.prerollSkipped(s, r));
          let l = {
            ...E(),
            game: o?.meta?.name || "",
            playAgainStart: t
          };
          d.y.trackEvent({
            event: h.e.FunnelPrerollSkipped,
            properties: l
          })
        }),
        ek = (0, o.NV)((e, t, a, o, i, s, r) => {
          (0, m.t)().info({
            data: {
              config: e,
              playAgainStart: t,
              game: a,
              gameplayId: o,
              isFavorite: i,
              isFullScreen: s
            }
          }, "[funnelContentStart] - gameStart 1"), (0, n.sx)(S.gameStart({
            ...e.baseParams,
            playAgainStart: t,
            ABTestSlot1: e.baseCustomDimensions.ABTestSlot1,
            ABTestSlot: e.baseCustomDimensions.ABTestSlot,
            ABTestName: e.baseCustomDimensions.ABTestName
          }, a, e.baseParams.domain || "", window.location.href, o, e.baseParams.recommendedGamesStart, i, s, r, e.baseCustomDimensions.ads_abtest, e.baseCustomDimensions.pwa ?? "no")), (0, m.t)().info({
            data: {
              config: e,
              playAgainStart: t,
              game: a,
              gameplayId: o,
              isFavorite: i,
              isFullScreen: s
            }
          }, "[funnelContentStart] - gameStart 2"), d.y.trackEvent({
            event: h.e.FunnelContentStart,
            properties: {
              ...E(),
              game: a?.meta?.name || "",
              playAgainStart: t,
              isFavorited: e.baseCustomDimensions.isFavorited
            }
          })
        }),
        eD = (0, o.NV)((e, t, a, o, i, s, r, l) => {
          (0, n.sx)(S.rewardVideoStart({
            ...e.baseParams,
            playAgainStart: t,
            noninteraction: !1,
            ABTestSlot1: e.baseCustomDimensions.ABTestSlot1,
            ABTestSlot: e.baseCustomDimensions.ABTestSlot,
            ABTestName: e.baseCustomDimensions.ABTestName
          }, a, e.baseParams.domain || "", o, i, s, e.baseCustomDimensions.ads_abtest, r, l, e.baseCustomDimensions.pwa ?? "no")), d.y.trackEvent({
            event: h.e.FunnelRewardRequest,
            properties: {
              ...E(),
              game: a?.meta?.name || "",
              playAgainStart: t,
              isFavorited: e.baseCustomDimensions.isFavorited
            }
          })
        }),
        eL = (0, o.NV)((e, t, a, o, i, s, r) => {
          (0, n.sx)(S.rewardVideoEnd({
            ...e.baseParams,
            playAgainStart: t,
            noninteraction: !1,
            isFullScreen: s,
            ABTestSlot1: e.baseCustomDimensions.ABTestSlot1,
            ABTestName: e.baseCustomDimensions.ABTestName
          }, a, o, i, s, e.baseCustomDimensions.ads_abtest, r, e.baseCustomDimensions.pwa ?? "no")), d.y.trackEvent({
            event: h.e.FunnelRewardEnd,
            properties: {
              ...E(),
              game: a?.meta?.name || "",
              playAgainStart: t,
              isFavorited: e.baseCustomDimensions.isFavorited
            }
          })
        }),
        eR = (0, o.NV)((e, t, a, o, i, s) => {
          let r = {
              ...e.baseParams,
              playAgainStart: t,
              isFavorite: a,
              game: o,
              gameplayId: i,
              noninteraction: !1,
              ABTestSlot1: e.baseCustomDimensions.ABTestSlot1,
              ABTestSlot: e.baseCustomDimensions.ABTestSlot,
              ABTestName: e.baseCustomDimensions.ABTestName,
              timestamp: s
            },
            l = {
              game: o,
              href: window.location.href,
              gameplayId: i,
              recommendedGamesStart: e.baseParams.recommendedGamesStart,
              isFavorited: a,
              ads_abtest: e.baseCustomDimensions.ads_abtest,
              timestamp: s,
              pwa: e.baseCustomDimensions.pwa ?? "no"
            };
          (0, n.sx)(S.rewardVideoLoaded(r, l));
          let m = {
            ...E(),
            game: o?.meta?.name || "",
            playAgainStart: t,
            timestamp: s
          };
          d.y.trackEvent({
            event: h.e.FunnelRewardLoaded,
            properties: m
          })
        }),
        ex = (0, o.NV)((e, t, a, o, i) => {
          let s = {
              ...e.baseParams,
              playAgainStart: t,
              isFavorite: a,
              game: o,
              gameplayId: i,
              noninteraction: !1,
              ABTestSlot1: e.baseCustomDimensions.ABTestSlot1,
              ABTestSlot: e.baseCustomDimensions.ABTestSlot,
              ABTestName: e.baseCustomDimensions.ABTestName
            },
            r = {
              game: o,
              href: window.location.href,
              gameplayId: i,
              recommendedGamesStart: e.baseParams.recommendedGamesStart,
              isFavorited: a,
              ads_abtest: e.baseCustomDimensions.ads_abtest,
              pwa: e.baseCustomDimensions.pwa ?? "no"
            };
          (0, n.sx)(S.rewardVideoSkipped(s, r));
          let l = {
            ...E(),
            game: o?.meta?.name || "",
            playAgainStart: t
          };
          d.y.trackEvent({
            event: h.e.FunnelRewardSkipped,
            properties: l
          })
        }),
        eB = (0, o.NV)((e, t, a, o, i, s, r) => {
          (0, n.sx)(S.interstitialVideoStart({
            ...e.baseParams,
            playAgainStart: t,
            noninteraction: !1
          }, a, e.baseParams.domain || "", o, i, s, e.baseCustomDimensions.ads_abtest, r, e.baseCustomDimensions.pwa ?? "no")), d.y.trackEvent({
            event: h.e.FunnelInterstitialRequest,
            properties: {
              ...E(),
              game: a?.meta?.name || "",
              playAgainStart: t,
              isFavorited: e.baseCustomDimensions.isFavorited
            }
          })
        }),
        eO = (0, o.NV)((e, t, a, o, i, s) => {
          (0, n.sx)(S.interstitialVideoEnd({
            ...e.baseParams,
            playAgainStart: t,
            noninteraction: !1
          }, a, o, i, s, e.baseCustomDimensions.ads_abtest, e.baseCustomDimensions.pwa ?? "no")), d.y.trackEvent({
            event: h.e.FunnelInterstitialEnd,
            properties: {
              ...E(),
              game: a?.meta?.name || "",
              playAgainStart: t,
              isFavorited: e.baseCustomDimensions.isFavorited
            }
          })
        }),
        eV = (0, o.NV)((e, t, a, o, i, s) => {
          let r = {
              ...e.baseParams,
              playAgainStart: t,
              isFavorite: a,
              game: o,
              gameplayId: i,
              noninteraction: !1,
              ABTestSlot1: e.baseCustomDimensions.ABTestSlot1,
              ABTestSlot: e.baseCustomDimensions.ABTestSlot,
              timestamp: s
            },
            l = {
              game: o,
              href: window.location.href,
              gameplayId: i,
              recommendedGamesStart: e.baseParams.recommendedGamesStart,
              isFavorited: a,
              ads_abtest: e.baseCustomDimensions.ads_abtest,
              timestamp: s,
              pwa: e.baseCustomDimensions.pwa ?? "no"
            };
          (0, n.sx)(S.interstitialVideoLoaded(r, l));
          let m = {
            ...E(),
            game: o?.meta?.name || "",
            playAgainStart: t,
            timestamp: s
          };
          d.y.trackEvent({
            event: h.e.FunnelInterstitialLoaded,
            properties: m
          })
        }),
        eG = (0, o.NV)((e, t, a, o, i) => {
          let s = {
              ...e.baseParams,
              playAgainStart: t,
              isFavorite: a,
              game: o,
              gameplayId: i,
              noninteraction: !1,
              ABTestSlot1: e.baseCustomDimensions.ABTestSlot1,
              ABTestSlot: e.baseCustomDimensions.ABTestSlot
            },
            r = {
              game: o,
              href: window.location.href,
              gameplayId: i,
              recommendedGamesStart: e.baseParams.recommendedGamesStart,
              isFavorited: a,
              ads_abtest: e.baseCustomDimensions.ads_abtest,
              pwa: e.baseCustomDimensions.pwa ?? "no"
            };
          (0, n.sx)(S.interstitialVideoSkipped(s, r));
          let l = {
            ...E(),
            game: o?.meta?.name || "",
            playAgainStart: t
          };
          d.y.trackEvent({
            event: h.e.FunnelInterstitialSkipped,
            properties: l
          })
        }),
        eF = (0, o.NV)((e, t, a, o, i, s) => {
          (0, n.sx)(S.gameEnd({
            ...e.baseParams,
            playAgainStart: t,
            ABTestSlot1: e.baseCustomDimensions.ABTestSlot1,
            ABTestSlot: e.baseCustomDimensions.ABTestSlot,
            ABTestName: e.baseCustomDimensions.ABTestName
          }, a, e.baseParams.domain || "", window.location.href, o, e.baseParams.recommendedGamesStart, i, s, e.baseCustomDimensions.ads_abtest, e.baseCustomDimensions.pwa ?? "no")), d.y.trackEvent({
            event: h.e.FunnelContentEnd,
            properties: {
              ...E(),
              game: a?.meta?.name || "",
              playAgainStart: t,
              isFavorited: e.baseCustomDimensions.isFavorited
            }
          })
        }),
        eM = (0, o.NV)((e, t, a, o, i) => {
          (0, n.sx)(S.playAgainClick({
            ...e.baseParams,
            ABTestSlot1: e.baseCustomDimensions.ABTestSlot1,
            ABTestSlot: e.baseCustomDimensions.ABTestSlot,
            ABTestName: e.baseCustomDimensions.ABTestName
          }, t, e.baseParams.domain || "", window.location.href, a, e.baseParams.recommendedGamesStart, o, i, e.baseCustomDimensions.ads_abtest, e.baseCustomDimensions.pwa ?? "no")), d.y.trackEvent({
            event: h.e.FunnelEndButtonPlayAgain,
            properties: {
              ...E(),
              game: t?.meta?.name || "",
              isFavorited: e.baseCustomDimensions.isFavorited
            }
          })
        }),
        eU = (0, o.NV)((e, t, a) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "recommendedGames",
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: {
            game: t,
            index: a
          }
        })),
        eK = (0, o.NV)((e, t, a, o, i, s, r, l) => {
          let m = {
              id: t?.["data-id"] ?? "",
              refreshed: a,
              game: o || "",
              displayAdLocation: e.baseParams.pageType
            },
            [c, u] = JSON.parse(t.dimensions)[0];
          (0, n.sx)(A.displayAd({
            ...e.baseParams,
            id: m.id,
            displayAdLocation: m.displayAdLocation,
            ABTestSlot1: e.baseCustomDimensions.ABTestSlot1,
            ABTestSlot: e.baseCustomDimensions.ABTestSlot,
            abvariations: e.baseCustomDimensions.abvariations,
            isFavorited: l
          }, a, !0, {
            slug: o
          }, [c, u], m.id ?? e.baseParams.pageType, e.baseParams.domain || "", e.baseCustomDimensions.modularPageID || "", window.location.href, e.baseParams.recommendedGamesStart, i, s, e.baseCustomDimensions.ads_abtest, r, e.baseCustomDimensions.pwa ?? "no")), d.y.trackEvent({
            event: h.e.DisplayAd,
            properties: {
              ...E(),
              ...m,
              isFavorited: e.baseCustomDimensions.isFavorited
            }
          })
        });
      (0, o.NV)((e, t, a) => (0, n.sx)(S.adblockImpression({
        ...e.baseParams,
        playAgainStart: t
      }, a, e.baseCustomDimensions.pwa ?? "no")));
      let eH = y.m.PENDING,
        e$ = e => {
          eH = e
        },
        ez = null;

      function eW(e) {
        ez && clearTimeout(ez), ez = setTimeout(() => {
          ! function(e) {
            if (eW(e), !window.userActive) return;
            let t = {
              message: "User is alive",
              timestamp: new Date().toISOString(),
              uri: window.location.href,
              pagePath: window.location.pathname,
              screenResolution: `${window.innerWidth}x${window.innerHeight}`,
              noninteraction: !1,
              ...eH !== y.m.PENDING && b.D6 && {
                gameplayID: b.D6,
                game: b.Bp
              }
            };
            B({
              analyticsParams: e,
              generalAnalytics: new s.L,
              eventName: "alive",
              isNonInteraction: !0,
              eventAction: i.bi.IMPRESSION,
              customDimensions: t
            }), d.y.trackEvent({
              event: h.e.Alive,
              properties: {
                ...t,
                ...E()
              }
            })
          }(e)
        }, 12e4)
      }
      let ej = (0, o.NV)((e, t) => {
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: "loginButton",
            isNonInteraction: !1,
            eventAction: i.bi.CLICK,
            customDimensions: {
              buttonLocation: t
            }
          }), d.y.trackEvent({
            event: h.e.LoginButton,
            properties: {
              ...E(),
              buttonLocation: t
            }
          })
        }),
        eY = (0, o.NV)((e, t) => {
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: h.e.LoginModal,
            isNonInteraction: !1,
            eventAction: i.bi.IMPRESSION,
            customDimensions: t
          }), d.y.trackEvent({
            event: h.e.SubscriptionImpression,
            properties: {
              ...E(),
              ...t
            }
          })
        }),
        eQ = (0, o.NV)((e, t, a) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: "loginButton",
          isNonInteraction: !1,
          eventAction: i.bi.LOGIN,
          customDimensions: {
            buttonLocation: t,
            loginRegisterType: a
          }
        })),
        eq = (0, o.NV)((e, t, a, o, i, s, r, l) => {
          let {
            ads_abtest: m,
            ...c
          } = e.baseCustomDimensions;
          (0, n.sx)(N.registration({
            ...e.baseParams,
            ...c
          }, e?.baseParams?.pageType ?? "", a, o, i, s, r, l, e.baseCustomDimensions.pwa ?? "no")), d.y.trackEvent({
            event: h.e.Registration,
            properties: {
              ...E(),
              ...t
            }
          })
        }),
        eX = (0, o.NV)((e, t, a, n, o) => {
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: "registrationEmailConfirm",
            isNonInteraction: !1,
            eventAction: n,
            customDimensions: {
              buttonLocation: t,
              loginRegisterType: a,
              confirmationSource: o
            }
          }), d.y.trackEvent({
            event: h.e.RegistrationEmailConfirm,
            properties: {
              ...E(),
              status: n
            }
          })
        }),
        eJ = (0, o.NV)((e, t, a, n) => {
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: "changeEmailConfirm",
            isNonInteraction: !1,
            eventAction: n,
            customDimensions: {
              buttonLocation: t,
              loginRegisterType: a
            }
          })
        }),
        eZ = e => {
          let {
            emailConsent: t,
            "MSG-email": a,
            ...n
          } = e, o = !0 === t, i = {
            "MSG-push": !1,
            "MSG-sms": !1,
            emailConsent: o,
            "MSG-email": o,
            ...n,
            ...E()
          };
          d.y.createUserProfile(i)
        },
        e0 = e => {
          d.y.loginUserProfile({
            ...e.Identity && {
              Identity: e.Identity
            },
            loggedIn: e.loggedIn ?? !0
          })
        },
        e1 = (0, o.NV)((e, t) => {
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: h.e.VirtualItemShopImpression,
            isNonInteraction: !1,
            eventAction: i.bi.IMPRESSION,
            customDimensions: t
          }), d.y.trackEvent({
            event: h.e.VirtualItemShopImpression,
            properties: {
              ...E(),
              ...t
            }
          })
        }),
        e8 = (0, o.NV)((e, t) => {
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: h.e.VirtualItemPurchaseClick,
            isNonInteraction: !1,
            eventAction: i.bi.CLICK,
            customDimensions: t
          }), d.y.trackEvent({
            event: h.e.VirtualItemPurchaseClick,
            properties: {
              ...t,
              ...E()
            }
          })
        }),
        e6 = e => {
          d.y.trackEvent({
            event: h.e.VirtualItemPurchaseNextStep,
            properties: {
              ...e,
              ...E()
            }
          })
        },
        e2 = e => {
          d.y.trackEvent({
            event: h.e.VirtualItemPurchaseChange,
            properties: {
              ...e,
              ...E()
            }
          })
        },
        e4 = (0, o.NV)((e, t, a, n) => {
          let o = P.gaAnalytics.gemsPurchaseSuccess(n, a, "USD");
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: h.e.VirtualItemPurchaseSuccess,
            isNonInteraction: !1,
            eventAction: i.bi.IMPRESSION,
            customDimensions: t
          }, o), d.y.trackEvent({
            event: h.e.VirtualItemPurchaseSuccess,
            properties: {
              ...t,
              ...E()
            }
          })
        }),
        e3 = (0, o.NV)((e, t) => {
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: h.e.SubscriptionImpression,
            isNonInteraction: !1,
            eventAction: i.bi.IMPRESSION,
            customDimensions: t
          }), d.y.trackEvent({
            event: h.e.SubscriptionImpression,
            properties: {
              ...E(),
              ...t
            }
          })
        }),
        e5 = (0, o.NV)((e, t) => {
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: h.e.SubscriptionPurchaseButton,
            isNonInteraction: !1,
            eventAction: i.bi.IMPRESSION,
            customDimensions: t
          }), d.y.trackEvent({
            event: h.e.SubscriptionPurchaseButton,
            properties: {
              ...E(),
              ...t
            }
          })
        }),
        e7 = (0, o.NV)((e, t, a, n, o, s, r, l, m = null) => {
          let c = w.gaAnalytics.subscriptionPurchase(a, n, o, r, l);
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: h.e.SubscriptionPurchase,
            isNonInteraction: !1,
            eventAction: i.bi.IMPRESSION,
            customDimensions: t
          }, c), d.y.trackEvent({
            event: h.e.SubscriptionPurchase,
            properties: {
              ...E(),
              ...t
            }
          })
        }),
        e9 = (0, o.NV)((e, t) => {
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: "support",
            isNonInteraction: !1,
            eventAction: i.bi.CLICK,
            customDimensions: {
              buttonLocation: t
            }
          })
        }),
        te = (0, o.NV)((e, t) => {
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: "supportModal",
            isNonInteraction: !1,
            eventAction: i.bi.IMPRESSION,
            customDimensions: {
              buttonLocation: t.buttonLocation
            }
          })
        }),
        tt = (0, o.NV)((e, t) => {
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: "supportModal",
            isNonInteraction: !1,
            eventAction: i.bi.CLICK,
            customDimensions: {
              supportModalClick: t
            }
          })
        }),
        ta = (0, o.NV)(e => {
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: "supportFeedback",
            isNonInteraction: !1,
            eventAction: i.bi.CLICK
          })
        }),
        tn = (0, o.NV)(e => {
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: "chatBotStart",
            isNonInteraction: !1,
            eventAction: i.bi.CLICK
          })
        }),
        to = (0, o.NV)(e => {
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: "virtualItemSkipAdButton",
            isNonInteraction: !1,
            eventAction: i.bi.SKIP_AD
          })
        }),
        ti = (0, o.NV)(e => {
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: "virtualItemSpendingSkipAdSuccess",
            isNonInteraction: !1,
            eventAction: i.bi.SKIP_AD
          })
        }),
        ts = (0, o.NV)((e, t) => {
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: "mktWidget",
            isNonInteraction: !1,
            eventAction: i.bi.CLICK,
            customDimensions: {
              buttonContent: t
            }
          }), d.y.trackEvent({
            event: h.e.MarketingWidget,
            properties: {
              ...E(),
              buttonContent: t
            }
          })
        }),
        tr = (0, o.NV)((e, t, a) => B({
          analyticsParams: e,
          generalAnalytics: A,
          eventName: t,
          isNonInteraction: !1,
          eventAction: i.bi.CLICK,
          customDimensions: {
            ABTestSlot1: e.baseCustomDimensions.ABTestSlot1
          },
          game: a
        })),
        tl = () => {
          let e = window.matchMedia("(display-mode: standalone)").matches,
            t = window.navigator.standalone,
            a = document.referrer.includes("android-app://");
          return e || t || a
        },
        tm = (0, o.NV)((e, t, a, n, o, s, r) => {
          let l = s || tl() ? "yes" : "no";
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: "pwaInstallClick",
            isNonInteraction: !1,
            eventAction: i.bi.CLICK,
            customDimensions: {
              browser: t,
              deviceType: a,
              os: n,
              pwa: l,
              installOutcome: o,
              gameplayId: r
            }
          }), d.y.trackEvent({
            event: h.e.PWAInstallClick,
            properties: {
              ...E(),
              browser: t,
              deviceType: a,
              os: n,
              pwa: l,
              installOutcome: o,
              gameplayId: r
            }
          })
        }),
        tc = (0, o.NV)((e, t, a, n, o, s) => {
          let r = t || tl() ? "yes" : "no";
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: "pwaInstructionsClick",
            isNonInteraction: !1,
            eventAction: i.bi.CLICK,
            customDimensions: {
              browser: a,
              deviceType: n,
              os: o,
              pwa: r,
              gameplayId: s
            }
          }), d.y.trackEvent({
            event: h.e.PWAInstructionsClick,
            properties: {
              ...E(),
              browser: a,
              deviceType: n,
              os: o,
              pwa: r,
              gameplayId: s
            }
          })
        }),
        td = (0, o.NV)((e, t, a, n, o) => {
          B({
            analyticsParams: e,
            generalAnalytics: A,
            eventName: "pwaSessionStart",
            isNonInteraction: !0,
            eventAction: i.bi.IMPRESSION,
            customDimensions: {
              browser: t,
              deviceType: a,
              os: n,
              pwa: "yes",
              gameplayId: o
            }
          }), (0, m.t)().info({
            data: {
              config: e,
              browser: t,
              deviceType: a,
              os: n,
              pwaStatus: "yes",
              gameplayId: o
            }
          }, "[AI - trackEvent] - pwaSessionStart"), d.y.trackEvent({
            event: h.e.PWASessionStart,
            properties: {
              ...E(),
              browser: t,
              deviceType: a,
              os: n,
              pwa: "yes",
              gameplayId: o
            }
          })
        })
    },
    24408: (e, t, a) => {
      a.d(t, {
        CA: () => u,
        NV: () => p
      });
      var n = a(99554),
        o = a(646),
        i = a(54026),
        s = a(38841),
        r = a(17413),
        l = a(28062),
        m = a(88011),
        c = a(73512);
      class d {
        async initialize() {
          return this.initialized || (this.updateConfig({
            baseParams: {
              ...this.createDefaultConfig().baseParams
            }
          }), this.setupPwaStatusListener(), this.initialized = !0), this.getConfig()
        }
        setupPwaStatusListener() {
          let e = window.matchMedia("(display-mode: standalone)"),
            t = window.navigator.standalone,
            a = document.referrer.includes("android-app://");
          if (e.matches || t || a) return void this.updateConfig({
            baseCustomDimensions: {
              pwa: "yes"
            }
          });
          let n = t => {
            t.matches && (this.updateConfig({
              baseCustomDimensions: {
                pwa: "yes"
              }
            }), e.removeEventListener("change", n))
          };
          e.addEventListener("change", n)
        }
        createDefaultConfig() {
          return {
            baseParams: {
              arenaVersion: "arena-evolution",
              buildVersion: (0, s.env)("NEXT_PUBLIC_RELEASE_NAME") || "",
              domain: window?.location?.host,
              screenResolution: window.innerWidth + "x" + window.innerHeight,
              recommendedGamesStart: "No",
              pagePath: window.location.pathname,
              fpVisitorId: "",
              fpIncognito: !1
            },
            baseCustomDimensions: {
              utmSource: (0, o.jr)(window.location.search, "utmSource"),
              utmMedium: (0, o.jr)(window.location.search, "utmMedium"),
              utmCampaign: (0, o.jr)(window.location.search, "utmCampaign"),
              ads_abtest: (0, l.dJ)("ads_abtest_2") || "",
              ABTestSlot1: (() => {
                try {
                  let e = "true" === (0, s.env)("NEXT_PUBLIC_TOGGLE_REWARDED_UNLOCK_GAMES_ABTEST_ENABLED"),
                    t = "true" === (0, s.env)("NEXT_PUBLIC_TOGGLE_REWARDED_FULLSCREEN_ABTEST_ENABLED");
                  if (e) return n.O1?.getArkCookie(m.Fg) || "";
                  if (t) return n.O1?.getArkCookie(m.Yj) || "";
                  let a = "true" === (0, s.env)("NEXT_PUBLIC_TOGGLE_ADSHIELD_ABTEST_ENABLED"),
                    o = `abtest_${c.$.adshield.experimentName}`;
                  if (a) return n.O1?.getArkCookie(o) === "1" ? "groupB" : "control";
                  return ""
                } catch (e) {
                  return (0, r.t)().error({
                    data: e
                  }, "[AnalyticsConfigManager] Error reading A/B test cookie"), ""
                }
              })(),
              ABTestName: (() => {
                try {
                  let e = "true" === (0, s.env)("NEXT_PUBLIC_TOGGLE_REWARDED_UNLOCK_GAMES_ABTEST_ENABLED"),
                    t = "true" === (0, s.env)("NEXT_PUBLIC_TOGGLE_REWARDED_FULLSCREEN_ABTEST_ENABLED");
                  if (e) return "unlockGame";
                  if (t) return "fullscreen";
                  if ("true" === (0, s.env)("NEXT_PUBLIC_TOGGLE_ADSHIELD_ABTEST_ENABLED")) return "adshield";
                  return ""
                } catch (e) {
                  return (0, r.t)().error({
                    data: e
                  }, "[AnalyticsConfigManager] Error reading A/B test cookie"), ""
                }
              })(),
              pwa: "no"
            }
          }
        }
        updateConfig(e) {
          e.baseParams && (this.config.baseParams = (0, l.jv)({
            ...this.config.baseParams,
            ...e.baseParams
          })), e.baseCustomDimensions && (this.config.baseCustomDimensions = (0, l.jv)({
            ...this.config.baseCustomDimensions,
            ...e.baseCustomDimensions
          }))
        }
        updateConfigWithUserType(e, t, a, o) {
          if (e) return (0, n.Mk)(t) ? this.config.baseParams.userType = n.zO.RETURNING : this.config.baseParams.userType = n.zO.NEW;
          this.config.baseParams.userType = (0, n.gR)()
        }
        getConfig() {
          let e = this.createDefaultConfig();
          return (0, l.jv)({
            baseParams: {
              ...e.baseParams,
              ...this.config.baseParams
            },
            baseCustomDimensions: {
              ...e.baseCustomDimensions,
              ...this.config.baseCustomDimensions
            }
          })
        }
        constructor() {
          this.config = {
            baseParams: {},
            baseCustomDimensions: {}
          }, this.initialized = !1
        }
      }
      let u = new d;

      function p(e) {
        return (...t) => {
          (0, i.bo)(() => {
            let a = u.getConfig();
            (0, r.t)().info({
              data: {
                freshConfig: a,
                args: t
              }
            }, "[dispatchOrQueueEvent] - dispatchOrQueueEvent"), a ? e(a, ...t) : (0, r.t)().info("[dispatchOrQueueEvent] - No config found")
          })
        }
      }
    },
    27882: (e, t, a) => {
      a.d(t, {
        FeatureTogglesProvider: () => s,
        R: () => r
      });
      var n = a(95155),
        o = a(12115);
      let i = (0, o.createContext)(void 0),
        s = ({
          currentFeatures: e,
          children: t
        }) => (0, n.jsx)(i.Provider, {
          value: {
            features: e
          },
          "data-sentry-element": "FeatureTogglesContext.Provider",
          "data-sentry-component": "FeatureTogglesProvider",
          "data-sentry-source-file": "FeatureToggleContext.tsx",
          children: t
        }),
        r = () => {
          let e = (0, o.useContext)(i);
          if (void 0 === e) throw Error("useFeatureToggles must be used within a FeatureTogglesProvider");
          return e
        }
    },
    28062: (e, t, a) => {
      a.d(t, {
        $4: () => d,
        AR: () => m,
        BY: () => c,
        G2: () => i,
        QZ: () => g,
        Ro: () => u,
        Tz: () => y,
        X7: () => l,
        XJ: () => h,
        Zr: () => r,
        dJ: () => s,
        fo: () => p,
        jv: () => o,
        y: () => f
      }), a(88011);
      var n = a(24709);
      let o = e => Object.fromEntries(Object.entries(e).filter(([e, t]) => void 0 !== t)),
        i = () => {
          let e = "" === window.document.referrer;
          return -1 !== window.document.referrer.indexOf(window.location.host) || e ? void 0 : window.document.referrer
        },
        s = e => {
          let t = `; ${document.cookie}`.split(`; ${e}=`);
          if (2 === t.length) return t.pop()?.split(";").shift()
        };

      function r(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
      }

      function l(e, t, a) {
        let n = e.find(e => e.slug === t);
        if (n?.meta?.badges) {
          let e = n.meta.badges.find(e => a?.some(t => t.label.toLowerCase() === e.toLowerCase()));
          if (e) {
            let t = a?.find(t => t.label.toLowerCase() === e.toLowerCase());
            if (t) return {
              label: t.label,
              backgroundColor: t.backgroundColor,
              labelColor: t.labelColor
            }
          }
        }
        return {
          label: "",
          backgroundColor: "",
          labelColor: ""
        }
      }
      async function m(e) {
        let t = navigator?.globalPrivacyControl === !0,
          a = "1" === navigator.doNotTrack,
          o = !t && !a;
        if (e) {
          let e = await
          function() {
            let e = new AbortController,
              {
                signal: t
              } = e;
            return new Promise(a => {
              let o = document.createElement("iframe");
              o.src = "https://arenacloud.cdn.arkadiumhosted.com/arenaxstorage-blob/evo-cookie-consent/index.html", o.sandbox = "allow-scripts allow-same-origin", o.style.display = "none", o.onload = () => {
                t.aborted || o.contentWindow.postMessage(JSON.stringify({
                  test: "cookie"
                }), "*")
              };
              let i = setTimeout(() => {
                  e.abort()
                }, 5e3),
                s = e => {
                  let n;
                  if (!t.aborted) {
                    try {
                      n = JSON.parse(e.data)
                    } catch (e) {
                      return
                    }
                    void 0 !== n.evoCheckCookiesEnable && (r(), a(n.evoCheckCookiesEnable))
                  }
                },
                r = () => {
                  window.removeEventListener("message", s), document.body.removeChild(o), clearTimeout(i)
                };
              window.addEventListener("message", s), document.body.appendChild(o), t.addEventListener("abort", () => {
                (0, n.wd)("Cross site cookie check timed out"), r(), a(!1)
              })
            })
          }();
          return o && e
        }
        return o
      }
      let c = e => null === e ? "" : e?.toLowerCase().replaceAll("-", " ").trim();

      function d(e) {
        let t = e.querySelectorAll('a[href]:not([tabindex="-1"]),area[href],input:not([disabled]):not([type="hidden"]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]):not([tabindex="-1"]),iframe,object,embed,*[tabindex]:not([tabindex="-1"]),*[contenteditable=true]');
        return t.length ? t[0] : null
      }
      let u = e => {
          if (e > 3 && e < 21) return "th";
          switch (e % 10) {
            case 1:
              return "st";
            case 2:
              return "nd";
            case 3:
              return "rd";
            default:
              return "th"
          }
        },
        p = (e, t, a, n) => {
          let o = `/${e.split("/").slice(2).join("/")}`;
          a?.preventDefault();
          let i = e.includes("games") ? e : void 0;
          t("support", i ? {
            origin: i
          } : void 0, n), window.__IS_404_PAGE__ && (window.location.href = `/support?origin=${o}&intercept=true`)
        },
        g = e => e?.replace(/<[^>]*>/g, ""),
        h = {
          THOUSAND: 1e3,
          MILLION: 1e6,
          BILLION: 1e9,
          TRILLION: 1e12
        },
        b = new Intl.NumberFormat("en-US", {
          maximumFractionDigits: 0,
          useGrouping: !1
        }),
        v = new Intl.NumberFormat("en-US", {
          useGrouping: !1,
          minimumFractionDigits: 0,
          maximumFractionDigits: 2
        }),
        C = e => Math.floor(100 * e) / 100,
        f = (e, t = h.THOUSAND) => {
          let {
            THOUSAND: a,
            MILLION: n,
            BILLION: o,
            TRILLION: i
          } = h;
          if (e >= i && i >= t) {
            let t = C(e / i);
            return v.format(t) + " T"
          }
          if (e >= o && o >= t) {
            let t = C(e / o);
            return v.format(t) + " B"
          }
          if (e >= n && n >= t) {
            let t = C(e / n);
            return v.format(t) + " M"
          }
          if (e >= a && a >= t) {
            let t = C(e / a);
            return v.format(t) + " K"
          }
          return b.format(e)
        },
        y = (e, t, a, n) => {
          let o = "ios" === a,
            i = n?.includes("ipad"),
            s = "android" === a,
            r = "mobile" === e || "tablet" === e,
            l = "pc" === e,
            m = "mobile" === e,
            c = l && "firefox" === t ? "desktop-firefox" : "safari" === t && "macos" === a && l ? "desktop-safari-macos" : l && "chrome" === t && "macos" === a ? "desktop-chrome-macos" : l && "chrome" === t && "windows" === a ? "desktop-chrome-windows" : "safari" === t && "u" > typeof navigator && navigator.maxTouchPoints > 0 && i && "tablet" === e ? "tablet-safari-ipados" : r && t.includes("firefox") && s ? m ? "mobile-firefox-android" : "tablet-firefox-android" : r && t.includes("chrome") && s ? m ? "mobile-chrome-android" : "tablet-chrome-android" : r && t.includes("firefox") && o ? m ? "mobile-firefox-ios" : "tablet-firefox-ios" : r && t.includes("chrome") && o ? m ? "mobile-chrome-ios" : "tablet-chrome-ios" : r && t.includes("safari") && o ? m ? "mobile-safari-ios" : "tablet-safari-ios" : "fallback",
            d = {
              "tablet-safari-ipados": {
                title: "Save to Home",
                subTitle: "Create a home screen shortcut for easy access to this game",
                steps: ["Tap the share button next to the address bar", 'Select "Add to Home Screen" from the menu', 'Click "Add" — look for the Arkadium icon on your home screen to play'],
                image: [{
                  src: "/media/add-to-home-screen/share.svg",
                  width: 68,
                  height: 68,
                  alt: "Share button",
                  gap: "48px"
                }, {
                  src: "/media/add-to-home-screen/tablet-safari-ipadOs-menu.png",
                  width: 131,
                  height: 196,
                  alt: "Desktop Safari menu",
                  gap: "24px"
                }, {
                  src: "/media/add-to-home-screen/tablet-all-ipados-confirmation.png",
                  width: 131,
                  height: 196,
                  alt: "Desktop Safari menu",
                  gap: "8px"
                }]
              },
              "desktop-safari-macos": {
                title: "Save to Desktop",
                subTitle: "Create a desktop shortcut for easy access to this game",
                steps: ["Click the share button at the top of your browser", 'Select "Add to Dock" from the menu', 'Click "Add" — look for the Arkadium icon in your dock to play'],
                image: [{
                  src: "/media/add-to-home-screen/share.svg",
                  width: 68,
                  height: 68,
                  alt: "Share button",
                  gap: "48px"
                }, {
                  src: "/media/add-to-home-screen/desktop-safari-menu.png",
                  width: 118,
                  height: 200,
                  alt: "Desktop Safari menu",
                  gap: "24px"
                }, {
                  src: "/media/add-to-home-screen/desktop-safari-confirmation.png",
                  width: 296.5,
                  height: 113.5,
                  alt: "Desktop Safari menu",
                  gap: "48px"
                }]
              },
              "desktop-firefox": {
                title: "Save to Desktop",
                subTitle: "Create a desktop shortcut for easy access to this game",
                steps: ["Resize your browser to see the desktop", "Locate the lock icon left of the address bar", "Drag the lock to your desktop, click to play anytime"],
                image: [{
                  src: "/media/add-to-home-screen/desktop-firefox-macos-resize.png",
                  width: 322,
                  height: 185,
                  alt: "Desktop Safari menu",
                  gap: "24px"
                }, {
                  src: "/media/add-to-home-screen/lock.svg",
                  width: 68,
                  height: 68,
                  alt: "Bookmark button",
                  gap: "48px"
                }, {
                  src: "/media/add-to-home-screen/desktop-firefox-macos-drag-step.png",
                  width: 312.5,
                  height: 38,
                  alt: "Desktop Safari menu",
                  gap: "48px"
                }]
              },
              "desktop-chrome-macos": {
                title: "Save to Desktop",
                subTitle: "Create a desktop shortcut for easy access to this game",
                steps: ["Click the three dots at the top right of your browser", "Select 'Cast, save and share', then 'Create Shortcut'", "Click 'Create' — look for the Arkadium icon on your desktop to play"],
                image: [{
                  src: "/media/add-to-home-screen/more.svg",
                  width: 68,
                  height: 68,
                  alt: "Three dots button",
                  gap: "48px"
                }, {
                  src: "/media/add-to-home-screen/desktop-chrome-macos-menu.png",
                  width: 140,
                  height: 200,
                  alt: "Desktop Chrome menu",
                  gap: "16px"
                }, {
                  src: "/media/add-to-home-screen/desktop-chrome-macos-confirmation.png",
                  width: 296,
                  height: 148,
                  alt: "Desktop Chrome confirmation",
                  gap: "48px"
                }]
              },
              "desktop-chrome-windows": {
                title: "Save to Desktop",
                subTitle: "Create a desktop shortcut for easy access to this game",
                steps: ["Click the three dots at the top right of your browser", "Select 'Cast, save and share', then 'Create Shortcut'", "Click 'Create' — look for the Arkadium icon on your desktop to play"],
                image: [{
                  src: "/media/add-to-home-screen/more.svg",
                  width: 68,
                  height: 68,
                  alt: "Three dots button",
                  gap: "48px"
                }, {
                  src: "/media/add-to-home-screen/desktop-chrome-windows-menu.png",
                  width: 158,
                  height: 200,
                  alt: "Desktop Chrome menu",
                  gap: "16px"
                }, {
                  src: "/media/add-to-home-screen/desktop-chrome-windows-confirmation.png",
                  width: 296,
                  height: 148,
                  alt: "Desktop Chrome confirmation",
                  gap: "32px"
                }]
              },
              "mobile-firefox-android": {
                title: "Save to Home",
                subTitle: "Create a home screen shortcut for easy access to this game",
                steps: ["Tap the three dots at the top right of your browser", 'Select "Add to Home screen" from the menu', 'Tap "Add" — look for the Arkadium icon on your home screen to play'],
                image: [{
                  src: "/media/add-to-home-screen/more.svg",
                  width: 68,
                  height: 68,
                  alt: "Three dots button",
                  gap: "48px"
                }, {
                  src: "/media/add-to-home-screen/mobile-firfox-android-menu.png",
                  width: 99,
                  height: 200,
                  alt: "Desktop Safari menu",
                  gap: "16px"
                }, {
                  src: "/media/add-to-home-screen/mobile-firefox-android-confirmation.png",
                  width: 174,
                  height: 109,
                  alt: "Desktop Safari menu",
                  gap: "48px"
                }]
              },
              "tablet-firefox-android": {
                title: "Save to Home",
                subTitle: "Create a home screen shortcut for easy access to this game",
                steps: ["Tap the three dots at the top right of your browser", 'Select "Add to Home screen" from the menu', 'Tap "Add" — look for the Arkadium icon on your home screen to play'],
                image: [{
                  src: "/media/add-to-home-screen/more.svg",
                  width: 68,
                  height: 68,
                  alt: "Three dots button",
                  gap: "48px"
                }, {
                  src: "/media/add-to-home-screen/tablet-firefox-android-menu.png",
                  width: 135,
                  height: 196,
                  alt: "Desktop Safari menu",
                  gap: "24px"
                }, {
                  src: "/media/add-to-home-screen/tablet-firefox-android-confirmation.png",
                  width: 301,
                  height: 90,
                  alt: "Desktop Safari menu",
                  gap: "48px"
                }]
              },
              "mobile-firefox-ios": {
                title: "Save to Home",
                subTitle: "Create a home screenshortcut for easy access to this game",
                steps: ["Tap the share button next to the address bar", 'Select "Add to Home Screen" from the menu', 'Tap "Add" — look for the Arkadium icon on your home screen to play'],
                image: [{
                  src: "/media/add-to-home-screen/share.svg",
                  width: 68,
                  height: 68,
                  alt: "Share button",
                  gap: "48px"
                }, {
                  src: "/media/add-to-home-screen/mobile-firefox-ios-menu.png",
                  width: 104,
                  height: 200,
                  alt: "Desktop Safari menu",
                  gap: "16px"
                }, {
                  src: "/media/add-to-home-screen/mobile-all-ios-confirmation.png",
                  width: 174,
                  height: 200,
                  alt: "Desktop Safari menu",
                  gap: "16px"
                }]
              },
              "tablet-firefox-ios": {
                title: "Save to Home",
                subTitle: "Create a home screenshortcut for easy access to this game",
                steps: ["Tap the share button next to the address bar", 'Select "Add to Home Screen" from the menu', 'Tap "Add" — look for the Arkadium icon on your home screen to play'],
                image: [{
                  src: "/media/add-to-home-screen/share.svg",
                  width: 68,
                  height: 68,
                  alt: "Share button",
                  gap: "48px"
                }, {
                  src: "/media/add-to-home-screen/tablet-firefox-ipadOs-menu.png",
                  width: 131,
                  height: 196,
                  alt: "Desktop Safari menu",
                  gap: "24px"
                }, {
                  src: "/media/add-to-home-screen/tablet-firefox-ipadOs-confirmation.png",
                  width: 131,
                  height: 196,
                  alt: "Desktop Safari menu",
                  gap: "8px"
                }]
              },
              "mobile-chrome-android": {
                title: "Save to Home",
                subTitle: "Create a home screen shortcut for easy access to this game",
                steps: ["Tap the three dots at the top right of your browser", 'Select "Add to Home Screen" from the menu', 'Tap "Add" — look for the Arkadium icon on your home screen to play'],
                image: [{
                  src: "/media/add-to-home-screen/more.svg",
                  width: 68,
                  height: 68,
                  alt: "Share button",
                  gap: "48px"
                }, {
                  src: "/media/add-to-home-screen/mobile-chrome-android-menu.png",
                  width: 99,
                  height: 200,
                  alt: "Mobile Chrome Menu",
                  gap: "16px"
                }, {
                  src: "/media/add-to-home-screen/mobile-chrome-android-confirmation.png",
                  width: 197,
                  height: 105,
                  alt: "Mobile Chrome Confirmation",
                  gap: "48px"
                }]
              },
              "tablet-chrome-android": {
                title: "Save to Home",
                subTitle: "Create a home screen shortcut for easy access to this game",
                steps: ["Tap the three dots at the top right of your browser", 'Select "Add to Home Screen" from the menu', 'Tap "Add" — look for the Arkadium icon on your home screen to play'],
                image: [{
                  src: "/media/add-to-home-screen/share.svg",
                  width: 68,
                  height: 68,
                  alt: "Share button",
                  gap: "48px"
                }, {
                  src: "/media/add-to-home-screen/tablet-chrome-android-menu.png",
                  width: 125,
                  height: 196,
                  alt: "Tablet Chrome Menu",
                  gap: "24px"
                }, {
                  src: "/media/add-to-home-screen/tablet-chrome-android-confirmation.png",
                  width: 301,
                  height: 114,
                  alt: "Tablet Chrome Confirmation",
                  gap: "48px"
                }]
              },
              "mobile-chrome-ios": {
                title: "Save to Home",
                subTitle: "Create a home screen shortcut for easy access to this game",
                steps: ["Tap the share button next to the address bar", 'Select "Add to Home Screen" from the menu', 'Tap "Add" — look for the Arkadium icon on your home screen to play'],
                image: [{
                  src: "/media/add-to-home-screen/share.svg",
                  width: 68,
                  height: 68,
                  alt: "Share button",
                  gap: "48px"
                }, {
                  src: "/media/add-to-home-screen/mobile-chrome-ios-menu.png",
                  width: 104,
                  height: 200,
                  alt: "Desktop Safari menu",
                  gap: "16px"
                }, {
                  src: "/media/add-to-home-screen/mobile-all-ios-confirmation.png",
                  width: 174,
                  height: 200,
                  alt: "Desktop Safari menu",
                  gap: "16px"
                }]
              },
              "tablet-chrome-ios": {
                title: "Save to Home",
                subTitle: "Create a home screen shortcut for easy access to this game",
                steps: ["Tap the share button next to the address bar", 'Select "Add to Home Screen" from the menu', 'Tap "Add" — look for the Arkadium icon on your home screen to play'],
                image: [{
                  src: "/media/add-to-home-screen/share.svg",
                  width: 68,
                  height: 68,
                  alt: "Share button",
                  gap: "48px"
                }, {
                  src: "/media/add-to-home-screen/tablet-chrome-ipadOs-menu.png",
                  width: 131,
                  height: 196,
                  alt: "Desktop Safari menu",
                  gap: "24px"
                }, {
                  src: "/media/add-to-home-screen/tablet-all-ipados-confirmation.png",
                  width: 131,
                  height: 196,
                  alt: "Desktop Safari menu",
                  gap: "8px"
                }]
              },
              "mobile-safari-ios": {
                title: "Save to Home",
                subTitle: "Create a home screen shortcut for easy access to this game",
                steps: ["Tap the share button next to the address bar", 'Select "Add to Home Screen" from the menu', 'Tap "Add" — look for the Arkadium icon on your home screen to play'],
                image: [{
                  src: "/media/add-to-home-screen/share.svg",
                  width: 68,
                  height: 68,
                  alt: "Share button",
                  gap: "48px"
                }, {
                  src: "/media/add-to-home-screen/mobile-safari-ios-menu.png",
                  width: 104,
                  height: 200,
                  alt: "Desktop Safari menu",
                  gap: "16px"
                }, {
                  src: "/media/add-to-home-screen/mobile-all-ios-confirmation.png",
                  width: 174,
                  height: 200,
                  alt: "Desktop Safari menu",
                  gap: "16px"
                }]
              },
              "tablet-safari-ios": {
                title: "Save to Home",
                subTitle: "Create a home screen shortcut for easy access to this game",
                steps: ["Tap the share button next to the address bar", 'Select "Add to Home Screen" from the menu', 'Tap "Add" — look for the Arkadium icon on your home screen to play'],
                image: [{
                  src: "/media/add-to-home-screen/share.svg",
                  width: 68,
                  height: 68,
                  alt: "Share button",
                  gap: "48px"
                }, {
                  src: "/media/add-to-home-screen/tablet-safari-ipadOs-menu.png",
                  width: 131,
                  height: 196,
                  alt: "Desktop Safari menu",
                  gap: "24px"
                }, {
                  src: "/media/add-to-home-screen/tablet-all-ipados-confirmation.png",
                  width: 131,
                  height: 196,
                  alt: "Desktop Safari menu",
                  gap: "8px"
                }]
              },
              fallback: {
                title: "Save to Device",
                subTitle: "Create a shortcut for easy access to this game",
                steps: ["Look for your browser's menu (usually three dots or share button)", "Find options like 'Add to Home screen', 'Add to Dock', or 'Create Shortcut'", "Click 'Create' or 'Add' — look for the Arkadium icon on your desktop to play"],
                image: [{
                  src: "/media/add-to-home-screen/more.svg",
                  width: 68,
                  height: 68,
                  alt: "Three dots button",
                  gap: "48px"
                }, {
                  src: "/media/add-to-home-screen/desktop-chrome-macos-menu.png",
                  width: 140,
                  height: 200,
                  alt: "Desktop Chrome menu",
                  gap: "16px"
                }, {
                  src: "/media/add-to-home-screen/desktop-chrome-macos-confirmation.png",
                  width: 296,
                  height: 148,
                  alt: "Desktop Chrome confirmation",
                  gap: "48px"
                }]
              }
            };
          return d[c] || d.fallback
        }
    },
    33097: (e, t, a) => {
      a.d(t, {
        y: () => s
      });
      var n = a(66177),
        o = a(17413),
        i = a(92851);
      class s {
        static {
          this.initialized = !1
        }
        static {
          this.initializationPerformed = !1
        }
        static {
          this.config = null
        }
        static {
          this.trackEventQueue = []
        }
        static {
          this.remoteConfigQueue = []
        }
        static {
          this.profileEventProperties = {}
        }
        static async init({
          gdprConsent: e,
          clevertapConfig: t,
          lastGamePlayed: r,
          subscriptionAutorenew: l = !1,
          subscriptionLifecycle: m,
          subscriptionPlan: c,
          subscriptionStatus: d,
          userId: u,
          userName: p,
          virtualItemSpent: g = !1
        }) {
          if (s.config = t, !s.initialized && !s.initializationPerformed && t?.projectId) {
            s.initializationPerformed = !0;
            try {
              return (0, n.E)(() => Promise.all([a.e(5940), a.e(8072)]).then(a.t.bind(a, 81796, 23))).then(() => {
                window.clevertap && (window.clevertap.init(t?.projectId, t?.region || "us1"), s.initialized = !0, s.setConsent(e), s.trackEventQueue.forEach(e => s.trackEvent(e)), s.trackEventQueue = [], s.remoteConfig = (0, i.hF)(), window.clevertap.fetchVariables(() => {
                  s.remoteConfig = (0, i.hF)(), s.remoteConfigQueue.forEach(e => e(s.remoteConfig)), s.remoteConfigQueue = []
                }), s.updateUserProfile({
                  platform: "evo",
                  ...r && {
                    last_game_played: r
                  },
                  subscription_autorenew: l,
                  subscription_lifecycle: m || "none",
                  subscription_plan: c || "",
                  subscription_status: d || "inactive",
                  ...u && {
                    user_id: u
                  },
                  ...p && {
                    user_name: p
                  },
                  virtualItemSpent: g,
                  ...s.profileEventProperties
                }))
              })
            } catch (e) {
              (0, o.t)().error({
                data: e
              }, "[ClevertapService::init] - Clevertap initialization error")
            }
          }
        }
        static setConsent(e) {
          s.initialized && (window.clevertap.privacy.push({
            optOut: !e
          }), window.clevertap.privacy.push({
            useIP: e
          }))
        }
        static getRemoteConfig(e) {
          if (s.remoteConfig) return e(s.remoteConfig);
          s.remoteConfigQueue.push(e)
        }
        static trackEvent({
          event: e,
          properties: t
        }) {
          if (s.config?.enableAnalytics) {
            if (!s.initialized) return void s.trackEventQueue.push({
              event: e,
              properties: t
            });
            window.clevertap.event.push(e, t)
          }
        }
        static createUserProfile(e) {
          s.initialized && s.config?.enableAnalytics && window.clevertap.onUserLogin.push({
            Site: e
          })
        }
        static loginUserProfile(e) {
          s.initialized && s.config?.enableAnalytics && window.clevertap.onUserLogin.push({
            Site: e
          })
        }
        static updateUserProfile(e) {
          if (!s.config?.enableAnalytics) return;
          let {
            Identity: t,
            ...a
          } = e;
          s.initialized ? window.clevertap.profile.push({
            Site: a
          }) : s.profileEventProperties = {
            ...s.profileEventProperties,
            ...a
          }
        }
      }
    },
    54026: (e, t, a) => {
      a.d(t, {
        DD: () => h,
        E7: () => d,
        bo: () => u,
        n_: () => p,
        yx: () => c,
        zL: () => g
      });
      var n = a(17413),
        o = a(14407),
        i = a(24408),
        s = a(87070);
      let r = "pending",
        l = !1,
        m = !1,
        c = [];

      function d(e) {
        let t = r;
        (r = e) || !t || (0, n.t)().info("[updateConsentStatus] - Consent revoked")
      }

      function u(e) {
        "pending" !== r && l ? (0, o.M)(() => {
          e()
        }, {
          timeout: 500
        }) : c.push(e)
      }
      async function p(e, t, a) {
        if (l || m) return g(), l;
        m = !0;
        let {
          fpVisitorId: o,
          fpIncognito: r
        } = JSON.parse(await s.m.init());
        try {
          return await i.CA.initialize(), i.CA.updateConfig({
            baseParams: {
              fpVisitorId: o,
              fpIncognito: r
            }
          }), i.CA.updateConfigWithUserType(e, t, r, a), l = !0, g(), !0
        } catch (e) {
          return (0, n.t)().error({
            data: e
          }, "[initialize] - Error during analytics initialization:"), !1
        } finally {
          m = !1
        }
      }

      function g() {
        if (l && r)
          for (; c.length > 0;) {
            let e = c.shift();
            if (e) try {
              e()
            } catch (e) {
              (0, n.t)().error({
                data: e
              }, "[processQueue] - Error processing queued event:")
            }
          }
      }
      let h = (e, t) => !1 === e && t
    },
    62936: (e, t, a) => {
      a.d(t, {
        Q: () => s,
        e: () => i
      });
      var n, o, i = ((n = {}).Search_Performed = "searchBox", n.PreRoll_Start = "PreRoll_Start", n.PreRoll_Paused = "PreRoll_Paused", n.PreRoll_End = "PreRoll_End", n.PageView = "PageView", n.FunnelPlayNow = "funnelPlayNow", n.FunnelContentStart = "funnelContentStart", n.FunnelContentEnd = "funnelContentEnd", n.FunnelEndButtonPlayAgain = "funnelEndButtonPlayAgain", n.FunnelPrerollRequest = "funnelPrerollRequest", n.FunnelPrerollEnd = "funnelPrerollEnd", n.FunnelPrerollLoaded = "funnelPrerollLoaded", n.FunnelPrerollSkipped = "funnelPrerollSkipped", n.FunnelInterstitialRequest = "funnelInterstitialRequest", n.FunnelInterstitialEnd = "funnelInterstitialEnd", n.FunnelInterstitialLoaded = "funnelInterstitialLoaded", n.FunnelInterstitialSkipped = "funnelInterstitialSkipped", n.FunnelRewardRequest = "funnelRewardRequest", n.FunnelRewardEnd = "funnelRewardEnd", n.FunnelRewardLoaded = "funnelRewardLoaded", n.FunnelRewardSkipped = "funnelRewardSkipped", n.AdBlockerClick = "AdBLockerClick", n.DisplayAd = "DisplayAd", n.Alive = "Alive", n.LoginButton = "loginButton", n.LoginModal = "loginModal", n.Registration = "registration", n.RegistrationEmailConfirm = "registrationEmailConfirm", n.VirtualItemShopImpression = "virtualItemShopImpression", n.VirtualItemPurchaseClick = "virtualItemPurchaseClick", n.VirtualItemPurchaseNextStep = "virtualItemPurchaseNextStep", n.VirtualItemPurchaseChange = "virtualItemPurchaseChange", n.VirtualItemPurchaseSuccess = "virtualItemPurchaseSuccess", n.SubscriptionImpression = "subscriptionImpression", n.SubscriptionPurchaseButton = "subscriptionPurchaseButton", n.SubscriptionPurchase = "subscriptionPurchase", n.MarketingWidget = "mktWidget", n.PWAInstallClick = "pwaInstallClick", n.PWAInstructionsClick = "pwaInstructionsClick", n.PWASessionStart = "pwaSessionStart", n),
        s = ((o = {}).Facebook = "facebook", o.Email = "email", o.Google = "google", o)
    },
    63554: (e, t, a) => {
      a.d(t, {
        A: () => s,
        m: () => i
      });
      var n, o, i = ((n = {}).GAME = "GAME", n.GAME_END = "GAME_END", n.GAME_SCORE_SAVED = "GAME_SCORE_SAVED", n.PENDING = "PENDING", n.PREROLL = "PREROLL", n.COVER = "COVER", n.ADBLOCK = "ADBLOCK", n.REWARD = "REWARD", n.INTERSTITIAL = "INTERSTITIAL", n.PREROLL_PLAYING = "PREROLL_PLAYING", n),
        s = ((o = {}).END_PREROLL = "arkadium:endPreroll", o.START_PREROLL = "arkadium:startPreroll", o.START_INTERSTITIAL = "arkadium:startInterstitial", o.START_REWARD = "arkadium:startReward", o)
    },
    66177: (e, t, a) => {
      a.d(t, {
        E: () => o
      });
      var n = a(14407);
      let o = (e, t) => new Promise((a, o) => {
        let i = () => {
          (0, n.M)(async () => {
            try {
              let t = await e();
              a(t)
            } catch (e) {
              o(e)
            }
          }, {
            timeout: t?.timeout || 2e3
          })
        };
        "complete" === document.readyState ? i() : window.addEventListener("load", i, {
          once: !0
        })
      })
    },
    66236: (e, t, a) => {
      a.d(t, {
        ZX: () => o,
        sj: () => n
      });
      let n = "https://arenacloud.cdn.arkadiumhosted.com/arenaxstorage-blob/arenax-index/_arena-shared-content_/arkadium-avatars/subscription/png/1x/avatar_blank.png",
        o = e => {
          if (!e) return n;
          if (e.startsWith("http")) return e;
          if ("_" !== e[6]) return n;
          let t = e.split(".").pop();
          return i(e) ? `https://arenacloud.cdn.arkadiumhosted.com/arenaxstorage-blob/arenax-index/_arena-shared-content_/arkadium-avatars/subscription/${t}/1x/premium/${e}` : `https://arenacloud.cdn.arkadiumhosted.com/arenaxstorage-blob/arenax-index/_arena-shared-content_/arkadium-avatars/subscription/${t}/1x/${e}`
        },
        i = e => e.includes("premium")
    },
    66788: (e, t, a) => {
      a.d(t, {
        K9: () => n,
        hW: () => o,
        y7: () => i
      });
      let n = "evo.geo.country_code",
        o = "ark__platformtype",
        i = "ark__environment"
    },
    73512: (e, t, a) => {
      a.d(t, {
        $: () => o
      });
      var n = a(38841);
      let o = {
        loadingCoordinator: {
          toggle: "true" === (0, n.env)("NEXT_PUBLIC_TOGGLE_COORDINATOR_ABTEST_ENABLED"),
          experimentName: "coordinator",
          weights: [.5, .5]
        },
        adshield: {
          toggle: "true" === (0, n.env)("NEXT_PUBLIC_TOGGLE_ADSHIELD_ABTEST_ENABLED"),
          experimentName: "adshield",
          weights: [.9, .1],
          cookieDays: 30
        }
      }
    },
    78932: (e, t, a) => {
      function n({
        src: e,
        width: t,
        quality: a
      }) {
        return `${e}?w=${t}&q=${a||75}`
      }
      a.r(t), a.d(t, {
        default: () => n
      })
    },
    79038: (e, t, a) => {
      a.r(t), a.d(t, {
        LocalizedLink: () => m
      });
      var n = a(95155),
        o = a(46902),
        i = a.n(o),
        s = a(12115),
        r = a(6240),
        l = a(27882);
      let m = s.forwardRef(({
        href: e,
        children: t,
        prefetch: a = !1,
        ...o
      }, s) => {
        let {
          getLocalizedPathname: m
        } = (0, r.s)(), {
          features: c
        } = (0, l.R)(), d = m(e ?? ""), u = !!c.core.isPrefetchEnabled && ("default" === a ? void 0 : a);
        return e && "#" !== e ? d && (0, n.jsx)(i(), {
          href: d,
          ref: s,
          prefetch: u,
          ...o,
          children: t
        }) : (0, n.jsx)("span", {
          ref: s,
          ...o,
          children: t
        })
      });
      m.displayName = "LocalizedLink"
    },
    83226: (e, t, a) => {
      a.d(t, {
        S: () => n
      });
      let n = !1
    },
    87070: (e, t, a) => {
      a.d(t, {
        m: () => m
      });
      var n = a(55421),
        o = a(42955),
        i = a(93284),
        s = a(17413);
      let r = {
        fpVisitorId: "unknown",
        fpIncognito: !1,
        fpCheckDone: !1
      };
      class l {
        async init() {
          let e = JSON.stringify(await this.detect());
          return i.sj.setItem(this.lsPropName, e), e
        }
        async detect() {
          let e = await this.getFingerprint(),
            t = {
              fpVisitorId: this?.detected?.fpVisitorId ?? e,
              fpIncognito: await this.isIncognito()
            };
          return (0, s.t)().info({
            data: t
          }, "[FingerprintService::detect] - detect!"), t
        }
        get detected() {
          let e = (0, s.t)(),
            t = i.sj.getItem(this.lsPropName),
            a = r;
          try {
            a = t ? JSON.parse(t) : null
          } catch (t) {
            e.error({
              data: t
            }, "[FingerprintService::detected] - Error parsing detectedJSON")
          }
          return e.info({
            data: a
          }, "[FingerprintService::detected] - get detected"), a
        }
        async getFingerprint() {
          let e = await n.Ay.load(),
            t = await e.get();
          return t?.visitorId
        }
        async isIncognito() {
          let e = await (0, o.k)();
          return e?.isPrivate
        }
        remove() {
          i.sj.removeItem(this.lsPropName)
        }
        constructor() {
          this.lsPropName = "FP_VISITOR"
        }
      }
      let m = new l
    },
    88011: (e, t, a) => {
      a.d(t, {
        lI: () => p,
        Y7: () => O,
        U8: () => K,
        k_: () => V,
        Bn: () => G,
        Xn: () => C,
        AW: () => M,
        gC: () => v,
        MQ: () => w,
        T: () => h,
        Qq: () => b,
        _o: () => D,
        Gb: () => I,
        oG: () => F,
        K9: () => f,
        lF: () => R,
        mC: () => B,
        lP: () => T,
        b7: () => k,
        lW: () => S,
        dh: () => A,
        O: () => _,
        Kc: () => U,
        b_: () => g,
        Yj: () => x,
        Fg: () => L,
        Ru: () => P,
        gc: () => E,
        td: () => N
      });
      var n, o, i, s, r, l = ((n = {}).US = "US", n.AS = "AS", n.GU = "GU", n.MP = "MP", n.PR = "PR", n.UM = "UM", n.VI = "VI", n.AT = "AT", n.AX = "AX", n.BE = "BE", n.BG = "BG", n.CY = "CY", n.CZ = "CZ", n.DE = "DE", n.DK = "DK", n.EE = "EE", n.EL = "EL", n.ES = "ES", n.EU = "EU", n.FI = "FI", n.FR = "FR", n.GB = "GB", n.GF = "GF", n.GI = "GI", n.GP = "GP", n.GR = "GR", n.HR = "HR", n.HU = "HU", n.IE = "IE", n.IS = "IS", n.IT = "IT", n.LI = "LI", n.LT = "LT", n.LU = "LU", n.LV = "LV", n.ME = "ME", n.MF = "MF", n.MQ = "MQ", n.MT = "MT", n.NL = "NL", n.NO = "NO", n.PL = "PL", n.PT = "PT", n.RE = "RE", n.RO = "RO", n.SE = "SE", n.SI = "SI", n.SK = "SK", n.YT = "YT", n.UK = "UK", n.CA = "CA", n.BR = "BR", n.CN = "CN", n.HK = "HK", n.MO = "MO", n.RU = "RU", n.BY = "BY", n.KP = "KP", n.IR = "IR", n.CU = "CU", n.SY = "SY", n),
        m = ((o = {}).CA = "CA", o.ME = "ME", o),
        c = a(63554),
        d = a(66236),
        u = a(66788);
      let p = {
        name: "See All",
        id: -1,
        slug: "",
        image: null,
        carousels: [],
        arena_tags: [],
        seo: null,
        title: null,
        description: null
      };
      u.hW, u.y7;
      let g = {
        LOW_SCORE_CAPTCHA: "__low_score_captcha",
        BYPASS_CAPTCHA: "__bypass_captcha"
      };
      var h = ((i = {}).REGISTER_CONFIRMATION_CODE = "account_confirmation_code", i.RESET_PASSWORD_CODE = "request_reset_password_code", i.EMAIL_CHANGE_CONFIRMATION_CODE = "email_change_confirmation_code", i.CONFIRMATION_SOURCE = "confirmation_source", i),
        b = ((s = {}).REGISTER = "register", s.RESEND_REQUEST_SHOP = "resend_request_shop", s.RESEND_REQUEST_LOGIN = "resend_request_login", s.RESEND_REQUEST_PROFILE = "resend_request_profile", s.FRICTIONLESS_REMINDER_D3 = "frictionless_reminder_d3", s.FRICTIONLESS_REMINDER_D6 = "frictionless_reminder_d6", s),
        v = ((r = {}).REQUIRED = "No avatar selected", r.FALLBACK = "Something went wrong", r);
      let C = "en",
        f = [c.m.GAME, c.m.REWARD, c.m.INTERSTITIAL],
        y = new Set([l.CN, l.HK, l.MO]),
        A = new Set([...y, ...new Set([l.RU, l.BY, l.KP, l.IR, l.CU, l.SY])]),
        S = new Set([...y]),
        N = new Set([l.US, l.AS, l.GU, l.MP, l.PR, l.UM, l.VI]),
        I = new Set([l.AT, l.AX, l.BE, l.BG, l.CY, l.CZ, l.DE, l.DK, l.EE, l.EL, l.ES, l.EU, l.FI, l.FR, l.GB, l.GF, l.GI, l.GP, l.GR, l.HR, l.HU, l.IE, l.IS, l.IT, l.LI, l.LT, l.LU, l.LV, l.ME, l.MF, l.MQ, l.MT, l.NL, l.NO, l.PL, l.PT, l.RE, l.RO, l.SE, l.SI, l.SK, l.YT, l.UK, l.CA, l.BR]),
        P = new Set([m.CA, m.ME]),
        w = {
          QUANTCAST: "quantcast",
          MicrosoftOneDSCustomTelemetry: "Microsoft1DS",
          GOOGLE_TAG_MANAGER: "Google Tag Manager 1.0",
          MICROSOFT_CLARITY: "Clarity MSN"
        },
        E = "3PAdsOptOut",
        _ = "TOptOut",
        T = "APP_ANON",
        k = "MUID",
        D = "abtest_game_start_screen_variation",
        L = "abtest_rewarded_unlock_games_variation",
        R = "medium_monetization_rollout",
        x = "abtest_rewarded_fullscreen_variation",
        B = "ark_lre",
        O = "ark_anid",
        V = {
          filename: d.sj,
          analyticsKey: "0",
          premium: !1,
          description: "A default avatar that is a silhouette."
        },
        G = "#d1d0d0",
        F = ["profile"],
        M = {
          prerollShowRate: 1,
          prerollFirstStartRate: 1,
          prerollEnabled: !0,
          prerollFreePeriod: 1,
          prerollSeconds: "s-30"
        },
        U = "prerollConfig",
        K = "skip_preroll"
    },
    88828: (e, t, a) => {
      let n, o;
      a.d(t, {
        Bp: () => o,
        D6: () => n,
        T3: () => s
      });
      var i = a(12115);

      function s() {
        let e = (0, i.useCallback)(() => n, []);
        return {
          getGameplayId: e,
          generateGameplayId: (0, i.useCallback)(e => {
            let t = new Date().toISOString(),
              a = Math.floor(1e6 * Math.random()).toString().padStart(6, "0");
            return n = `${e}-${t}-${a}`, o = e, n
          }, []),
          resetGameplayId: (0, i.useCallback)(() => {
            n = void 0
          }, [])
        }
      }
    },
    92851: (e, t, a) => {
      a.d(t, {
        hF: () => n,
        ib: () => o
      });
      let n = () => {
          let e = localStorage.getItem("WZRK_PE");
          if (!e) return;
          let t = decodeURIComponent(e);
          return t ? JSON.parse(t) : void 0
        },
        o = (e, t) => e.map(e => e.clevertap_promos_library ? {
          ...e,
          promos_library: {
            button: {
              label: e.clevertap_promos_library?.button?.label && t[e.clevertap_promos_library.button.label] ? t[e.clevertap_promos_library.button.label] : e.promos_library.button.label,
              url: e.clevertap_promos_library?.button?.url && t[e.clevertap_promos_library.button.url] ? t[e.clevertap_promos_library.button.url] : e.promos_library.button.url
            },
            image: {
              url: e.clevertap_promos_library?.image && t[e.clevertap_promos_library.image] ? t[e.clevertap_promos_library.image] : e.promos_library.image.url
            },
            imageMobile: {
              url: e.clevertap_promos_library?.imageMobile && t[e.clevertap_promos_library.imageMobile] ? t[e.clevertap_promos_library.imageMobile] : e.promos_library.imageMobile?.url
            },
            imageTablet: {
              url: e.clevertap_promos_library?.imageTablet && t[e.clevertap_promos_library.imageTablet] ? t[e.clevertap_promos_library.imageTablet] : e.promos_library.imageTablet?.url
            },
            text: e.clevertap_promos_library?.text && t[e.clevertap_promos_library.text] ? t[e.clevertap_promos_library.text] : e.promos_library.text,
            title: e.clevertap_promos_library?.title && t[e.clevertap_promos_library.title] ? t[e.clevertap_promos_library.title] : e.promos_library.title
          },
          gradientOverlay: e.clevertap_promos_library?.gradientOverlay && t[e.clevertap_promos_library.gradientOverlay] ? t[e.clevertap_promos_library.gradientOverlay] : e.gradientOverlay,
          textColor: e.clevertap_promos_library?.textColor && t[e.clevertap_promos_library.textColor] ? t[e.clevertap_promos_library.textColor] : e.textColor
        } : e)
    },
    93284: (e, t, a) => {
      let n, o, i, s;
      a.d(t, {
        dH: () => p,
        eu: () => b,
        f6: () => g,
        j1: () => u,
        rj: () => h,
        sJ: () => d,
        sj: () => c
      });
      var r, l = a(83226),
        m = a(17413);
      let c = (n = {}, o = "evo:", i = !1, s = null, l.S ? i = !0 : window.localStorage.getItem(""), {
        getItem: (e, t = !1) => {
          if (t || (e = `${o}${e}`), i) return n[e] ?? "";
          let a = window.localStorage.getItem(e);
          return a && "undefined" !== a && "null" !== a ? a : ""
        },
        setItem: (e, t, a = !1) => {
          s || (a || (e = `${o}${e}`), i ? n[e] = String(t) : window.localStorage.setItem(e, String(t)))
        },
        removeItem: (e, t = !1) => {
          t || (e = `${o}${e}`), i ? delete n[e] : window.localStorage.removeItem(e)
        },
        setBlockedByGdpr: e => {
          s = !e
        }
      });
      var d = ((r = {}).gamePlayCount = "ark_game_play_count", r.lastGamePlay = "ark_last_gameplay", r.popupTargetingConsent = "popup:targetingConsent", r.popupGDPRCookieConsent = "popup:gdprCookieConsent", r.targetingConsent = "ark_modules:targetingConsent", r.gdprCookieConsent = "ark_modules:gdprCookieConsent", r.arkcomTargetingConsent = "arkcom:targetingConsent", r.arkcomGDPRCookieConsent = "arkcom:gdprCookieConsent", r.isNonGDPR = "ark_is_non_gdpr", r.userConsentDetails = "ark_user_consent_details", r.gpcDataSharingOptIn = "ark_gpc_data_sharing_opt_in", r);
      let u = (e, t, a) => {
        let n = c.getItem(e),
          o = [];
        if (n) try {
          let e = JSON.parse(n);
          o = Array.isArray(e) ? e : []
        } catch (e) {
          (0, m.t)().error({
            data: e
          }, "[addRecentItemToLocalStorage] - Error parsing localStorage data:"), o = []
        }
        let i = {
            slug: t.slug,
            name: t.name,
            meta: {
              name: t.meta.name,
              alias: t.meta.alias,
              thumbs: {
                graphic_288x192: t.meta.thumbs.graphic_288x192,
                graphic_288x152: t.meta.thumbs.graphic_288x152
              },
              badges: {
                label: t.meta.badges.label
              },
              categories: t.meta.categories
            }
          },
          s = o.findIndex(e => e.slug === i.slug); - 1 !== s && o.splice(s, 1), o.unshift(i), o.length > 10 && (o = o.slice(0, 10)), c.setItem(e, JSON.stringify(o), a)
      };

      function p() {
        let e = c.getItem("recentlyPlayed");
        if (!e) return [];
        try {
          return JSON.parse(e).filter(e => {
            let t = "string" == typeof e.slug,
              a = e.meta?.thumbs?.graphic_288x192;
            return t && a
          })
        } catch (e) {
          return (0, m.t)().error({
            data: e
          }, "[getRecentlyPlayedGames] - Error parsing recently played games:"), []
        }
      }

      function g() {
        let e = c.getItem("arkcom:high_score");
        if (!e) return {};
        try {
          return JSON.parse(e)
        } catch (e) {
          return (0, m.t)().error({
            data: e
          }, "[getOptimizedHighScores] - Error parsing optimized high scores:"), {}
        }
      }

      function h() {
        let e = c.getItem("arkcom:high_score");
        if (e) try {
          let t = JSON.parse(e);
          if ("object" == typeof t && !Array.isArray(t)) return;
          if (Array.isArray(t)) {
            let e = {};
            t.forEach(t => {
              let a = e[t.slug];
              (!a || t.score > a.highestScore) && (e[t.slug] = {
                highestScore: t.score,
                timestamp: t.timestamp
              })
            }), c.setItem("arkcom:high_score", JSON.stringify(e)), (0, m.t)().info("[migrateHighScoresToOptimized] - Successfully migrated high scores to optimized format")
          }
        } catch (e) {
          (0, m.t)().error({
            data: e
          }, "[migrateHighScoresToOptimized] - Error migrating high scores:")
        }
      }

      function b() {
        c.removeItem("arkcom:high_score")
      }
    },
    99472: (e, t, a) => {
      a.d(t, {
        p: () => o
      });
      var n, o = ((n = {}).GENERIC = "generic", n.GENERIC_HOME = "home", n.BLOG = "blog", n.CATEGORY = "category", n.GAMEPAGE = "gamepage", n.SEARCH = "search", n.SITEMAP = "sitemap", n.TAGS = "tags", n.PLUS = "plus", n.UNKNOWN = "unknown", n.PROFILE = "profile", n.PRIVACY_POLICY = "privacy-policy", n.PLAYER_AGREEMENT = "player-agreement", n)
    },
    99554: (e, t, a) => {
      a.d(t, {
        Mk: () => d,
        O1: () => o.O,
        e7: () => m,
        gR: () => c,
        zO: () => r
      });
      var n, o = a(73072),
        i = a(41641),
        s = a(88011),
        r = ((n = {}).NEW = "new", n.RETURNING = "returning", n.INCOGNITO = "incognito", n.SUBSCRIBER = "subscriber", n);
      let l = "arkcom:userFirstVisit",
        m = "arkcom:userRegistration",
        c = () => {
          if ("returning" === (o.O.getArkCookie(i.QH.ARK_VISITOR_MAIN) || "new")) return "returning";
          let e = "new",
            t = o.O.getArkCookie(i.QH.GA),
            a = new Date;
          if (a.setTime(a.getTime() + 15768e7), "boolean" != typeof t && t.length > 0) {
            let a = t.split(".");
            (new Date().getTime() - 1e3 * parseInt(a[3], 10)) / 1e3 >= 3600 && (e = "returning")
          }
          return o.O.setArkCookie(i.QH.ARK_VISITOR_MAIN, e), e
        },
        d = e => {
          let t = e ?? s.AW.prerollFreePeriod,
            a = u(),
            n = new Date(Date.now());
          return n.setDate(n.getDate() - t), n > a
        },
        u = () => {
          let e, t = localStorage.getItem(m),
            a = localStorage.getItem(l);
          if (a) {
            let t = Number(a);
            if (Number.isFinite(t) && t > 0) e = t;
            else {
              let t = Date.parse(a);
              e = Number.isFinite(t) ? t : Date.now()
            }
          } else e = Date.now();
          return t && (e = new Date(t).getTime()), localStorage.setItem(l, e.toString()), new Date(e)
        }
    }
  }
]);