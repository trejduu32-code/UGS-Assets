! function() {
  try {
    var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c0a928e3-2b3b-4603-9dad-1c141876ef59", e._sentryDebugIdIdentifier = "sentry-dbid-c0a928e3-2b3b-4603-9dad-1c141876ef59")
  } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9359], {
    79359: (e, t, n) => {
      n.r(t), n.d(t, {
        Analytics: () => T,
        AppInsightService: () => I.AppInsightService,
        CONSTS: () => _.l,
        EnumArkMessages: () => P.W,
        EnumGameState: () => o,
        EnumIframeAuthActions: () => K.V,
        EnumIframeMessageTypes: () => O.c,
        EnumPurchaseEventLsListenedProps: () => F.g,
        FingerprintService: () => B.m,
        GameObservable: () => j.O,
        GameRenderingModule: () => z.$p,
        GamesWithOwnIframe: () => H,
        GoogleAnalyticsService: () => w.GoogleAnalyticsService,
        NamespaceStore: () => V.Z,
        TypeEnvType: () => D.Q,
        feedMetadataMock: () => x,
        gameMock: () => M,
        gameModelMock: () => R,
        makeGameResume: () => z.Gf,
        setGamePurchaseRequestResult: () => z.Eq
      });
      var i, o, a = n(24294),
        r = n(88058),
        s = function() {
          function e() {}
          return e.prototype.categoryLeftNavigationClick = function(e, t) {
            var n = this.newEventBuilder(e);
            return n.setName("CatNav"), n.setEventAction(r.bi.CLICK), n.setNonInteraction(!1), n.setCustom("category", t), n.build()
          }, e.prototype.claimDailyEntry = function(e, t) {
            var n = this.newEventBuilder(e);
            return n.setName("claimDailyEntry"), n.setEventAction(r.bi.CLICK), t && n.setCustom("loginRegisterType", t), n.setNonInteraction(!1), n.build()
          }, e.prototype.seeAllCategoryClick = function(e, t) {
            var n = this.newEventBuilder(e);
            return n.setName("seeAllCategoryCTA"), n.setEventAction(r.bi.CLICK), n.setCustom("category", t), n.setNonInteraction(!1), n.build()
          }, e.prototype.seeAllBannerClick = function(e) {
            var t = this.newEventBuilder(e);
            return t.setName("seeAllCTA"), t.setEventAction(r.bi.CLICK), t.setNonInteraction(!1), t.build()
          }, e.prototype.newEventBuilder = function(e) {
            return new a.W().baseEvent(e)
          }, e
        }(),
        l = function() {
          function e() {
            this.aiAnalytics = new s
          }
          return e.prototype.categoryLeftNavigationClick = function(e, t) {
            return (0, r.cA)(null, this.aiAnalytics.categoryLeftNavigationClick(e, t))
          }, e.prototype.claimDailyEntry = function(e, t) {
            return (0, r.cA)(null, this.aiAnalytics.claimDailyEntry(e, t))
          }, e.prototype.seeAllBannerClick = function(e) {
            return (0, r.cA)(null, this.aiAnalytics.seeAllBannerClick(e))
          }, e.prototype.seeAllCategoryClick = function(e, t) {
            return (0, r.cA)(null, this.aiAnalytics.seeAllCategoryClick(e, t))
          }, e
        }(),
        c = n(86910),
        u = n(65475),
        p = n(47345),
        m = function() {
          function e() {}
          return e.prototype.newEventBuilder = function(e) {
            return new a.W().baseEvent(e)
          }, e.prototype.gifterStart = function(e, t) {
            var n = this.newEventBuilder(e);
            return n.setName("gifterStart"), n.setEventAction(r.bi.CLICK), n.setCustom("subscriptionLocation", t), n.setNonInteraction(!1), n.build()
          }, e.prototype.giftRecipientName = function(e, t) {
            var n = this.newEventBuilder(e);
            return n.setName("giftRecipientName"), n.setEventAction(r.bi.CLICK), n.setCustom("subscriptionLocation", t), n.setNonInteraction(!1), n.build()
          }, e.prototype.giftRecipientEmail = function(e, t) {
            var n = this.newEventBuilder(e);
            return n.setName("giftRecipientEmail"), n.setEventAction(r.bi.CLICK), n.setCustom("subscriptionLocation", t), n.setNonInteraction(!1), n.build()
          }, e.prototype.giftConfirmEmail = function(e, t) {
            var n = this.newEventBuilder(e);
            return n.setName("giftConfirmEmail"), n.setEventAction(r.bi.CLICK), n.setCustom("subscriptionLocation", t), n.setNonInteraction(!1), n.build()
          }, e.prototype.giftDeliveryDate = function(e, t) {
            var n = this.newEventBuilder(e);
            return n.setName("giftDeliveryDate"), n.setEventAction(r.bi.CLICK), n.setCustom("subscriptionLocation", t), n.setNonInteraction(!1), n.build()
          }, e.prototype.giftCustomMessage = function(e, t) {
            var n = this.newEventBuilder(e);
            return n.setName("giftCustomMessage"), n.setEventAction(r.bi.CLICK), n.setCustom("subscriptionLocation", t), n.setNonInteraction(!1), n.build()
          }, e.prototype.giftSenderName = function(e, t) {
            var n = this.newEventBuilder(e);
            return n.setName("giftSenderName"), n.setEventAction(r.bi.CLICK), n.setCustom("subscriptionLocation", t), n.setNonInteraction(!1), n.build()
          }, e.prototype.giftSenderEmail = function(e, t) {
            var n = this.newEventBuilder(e);
            return n.setName("giftSenderEmail"), n.setEventAction(r.bi.CLICK), n.setCustom("subscriptionLocation", t), n.setNonInteraction(!1), n.build()
          }, e.prototype.gifterNextStep = function(e, t) {
            var n = this.newEventBuilder(e);
            return n.setName("gifterNextStep"), n.setEventAction(r.bi.CLICK), n.setCustom("subscriptionLocation", t), n.setNonInteraction(!1), n.build()
          }, e.prototype.gifterSendAgain = function(e, t) {
            var n = this.newEventBuilder(e);
            return n.setName("gifterSendAgain"), n.setEventAction(r.bi.CLICK), n.setCustom("subscriptionLocation", t), n.setNonInteraction(!1), n.build()
          }, e.prototype.gifterFormViewable = function(e, t) {
            var n = this.newEventBuilder(e);
            return n.setName("gifterFormViewable"), n.setEventAction(r.bi.CLICK), n.setCustom("subscriptionLocation", t), n.setNonInteraction(!0), n.build()
          }, e
        }(),
        g = function() {
          function e() {}
          return e.prototype.newEventBuilder = function() {
            return new a.W
          }, e.prototype.gifterStart = function(e) {
            var t = this.newEventBuilder();
            return t.setEventGaCategory("gifterStart"), t.setEventGaAction(r.bi.CLICK), t.setEventGaLabel(e), t.setGaNonInteraction(!1), t.build()
          }, e.prototype.giftRecipientName = function(e) {
            var t = this.newEventBuilder();
            return t.setEventGaCategory("giftRecipientName"), t.setEventGaAction(r.bi.CLICK), t.setEventGaLabel(e), t.setGaNonInteraction(!1), t.build()
          }, e.prototype.giftRecipientEmail = function(e) {
            var t = this.newEventBuilder();
            return t.setEventGaCategory("giftRecipientEmail"), t.setEventGaAction(r.bi.CLICK), t.setEventGaLabel(e), t.setGaNonInteraction(!1), t.build()
          }, e.prototype.giftConfirmEmail = function(e) {
            var t = this.newEventBuilder();
            return t.setEventGaCategory("giftConfirmEmail"), t.setEventGaAction(r.bi.CLICK), t.setEventGaLabel(e), t.setGaNonInteraction(!1), t.build()
          }, e.prototype.giftDeliveryDate = function(e) {
            var t = this.newEventBuilder();
            return t.setEventGaCategory("giftDeliveryDate"), t.setEventGaAction(r.bi.CLICK), t.setEventGaLabel(e), t.setGaNonInteraction(!1), t.build()
          }, e.prototype.giftCustomMessage = function(e) {
            var t = this.newEventBuilder();
            return t.setEventGaCategory("giftCustomMessage"), t.setEventGaAction(r.bi.CLICK), t.setEventGaLabel(e), t.setGaNonInteraction(!1), t.build()
          }, e.prototype.giftSenderName = function(e) {
            var t = this.newEventBuilder();
            return t.setEventGaCategory("giftSenderName"), t.setEventGaAction(r.bi.CLICK), t.setEventGaLabel(e), t.setGaNonInteraction(!1), t.build()
          }, e.prototype.giftSenderEmail = function(e) {
            var t = this.newEventBuilder();
            return t.setEventGaCategory("giftSenderEmail"), t.setEventGaAction(r.bi.CLICK), t.setEventGaLabel(e), t.setGaNonInteraction(!1), t.build()
          }, e.prototype.gifterNextStep = function(e) {
            var t = this.newEventBuilder();
            return t.setEventGaCategory("gifterNextStep"), t.setEventGaAction(r.bi.CLICK), t.setEventGaLabel(e), t.setGaNonInteraction(!1), t.build()
          }, e.prototype.gifterSendAgain = function(e) {
            var t = this.newEventBuilder();
            return t.setEventGaCategory("gifterSendAgain"), t.setEventGaAction(r.bi.CLICK), t.setEventGaLabel(e), t.setGaNonInteraction(!1), t.build()
          }, e.prototype.gifterFormViewable = function(e) {
            var t = this.newEventBuilder();
            return t.setEventGaCategory("gifterFormViewable"), t.setEventGaAction(r.bi.CLICK), t.setEventGaLabel(e), t.setGaNonInteraction(!0), t.build()
          }, e
        }(),
        f = function() {
          function e() {
            this.aiAnalytics = new m, this.gaAnalytics = new g
          }
          return e.prototype.gifterStart = function(e, t) {
            return (0, r.cA)(this.gaAnalytics.gifterStart(t), this.aiAnalytics.gifterStart(e, t))
          }, e.prototype.giftRecipientName = function(e, t) {
            return (0, r.cA)(this.gaAnalytics.giftRecipientName(t), this.aiAnalytics.giftRecipientName(e, t))
          }, e.prototype.giftRecipientEmail = function(e, t) {
            return (0, r.cA)(this.gaAnalytics.giftRecipientEmail(t), this.aiAnalytics.giftRecipientEmail(e, t))
          }, e.prototype.giftConfirmEmail = function(e, t) {
            return (0, r.cA)(this.gaAnalytics.giftConfirmEmail(t), this.aiAnalytics.giftConfirmEmail(e, t))
          }, e.prototype.giftDeliveryDate = function(e, t) {
            return (0, r.cA)(this.gaAnalytics.giftDeliveryDate(t), this.aiAnalytics.giftDeliveryDate(e, t))
          }, e.prototype.giftCustomMessage = function(e, t) {
            return (0, r.cA)(this.gaAnalytics.giftCustomMessage(t), this.aiAnalytics.giftCustomMessage(e, t))
          }, e.prototype.giftSenderName = function(e, t) {
            return (0, r.cA)(this.gaAnalytics.giftSenderName(t), this.aiAnalytics.giftSenderName(e, t))
          }, e.prototype.giftSenderEmail = function(e, t) {
            return (0, r.cA)(this.gaAnalytics.giftSenderEmail(t), this.aiAnalytics.giftSenderEmail(e, t))
          }, e.prototype.gifterNextStep = function(e, t) {
            return (0, r.cA)(this.gaAnalytics.gifterNextStep(t), this.aiAnalytics.gifterNextStep(e, t))
          }, e.prototype.gifterSendAgain = function(e, t) {
            return (0, r.cA)(this.gaAnalytics.gifterSendAgain(t), this.aiAnalytics.gifterSendAgain(e, t))
          }, e.prototype.gifterFormViewable = function(e, t) {
            return (0, r.cA)(this.gaAnalytics.gifterFormViewable(t), this.aiAnalytics.gifterFormViewable(e, t))
          }, e
        }(),
        h = function() {
          function e() {}
          return e.prototype.searchNavClick = function(e, t) {
            var n = this.newEventBuilder(e);
            return n.setName("SearchNav"), n.setEventAction(r.bi.CLICK), n.setNonInteraction(!1), n.setCustom("topnavClick", t.toLowerCase()), n.build()
          }, e.prototype.seoImpression = function(e) {
            var t = this.newEventBuilder(e);
            return t.setName("SeoNav"), t.setEventAction(r.bi.IMPRESSION), t.setNonInteraction(!0), t.build()
          }, e.prototype.seoClick = function(e, t) {
            var n = this.newEventBuilder(e);
            return n.setName("SeoNav"), n.setEventAction(r.bi.CLICK), n.setNonInteraction(!1), n.setCustom("topnavClick", t.toLowerCase()), n.build()
          }, e.prototype.footerSocialNav = function(e, t) {
            var n = this.newEventBuilder(e);
            return n.setName("FooterSocialNav"), n.setEventAction(r.bi.CLICK), n.setNonInteraction(!1), n.setCustom("topnavClick", t.toLowerCase()), n.build()
          }, e.prototype.searchNavSupportImpression = function(e) {
            var t = this.newEventBuilder(e);
            return t.setName("SearchNav Support"), t.setEventAction(r.bi.IMPRESSION), t.setNonInteraction(!0), t.build()
          }, e.prototype.searchNavSupportClick = function(e, t) {
            var n = this.newEventBuilder(e);
            return n.setName("SearchNav Support"), n.setEventAction(r.bi.CLICK), n.setNonInteraction(!1), n.setCustom("topnavClick", t), n.build()
          }, e.prototype.searchNavFeedbackClick = function(e, t) {
            var n = this.newEventBuilder(e);
            return n.setName("SearchNav Feedback"), n.setEventAction(r.bi.CLICK), n.setNonInteraction(!1), n.setCustom("topnavClick", t), n.build()
          }, e.prototype.promoboxImpression = function(e, t, n) {
            var i = this.newEventBuilder(e);
            return i.setName("promobox"), i.setEventAction(r.bi.IMPRESSION), i.setNonInteraction(!0), i.setCustom("promoboxImpression", t.toLowerCase()), i.setCustom("promobox Type", n.toLowerCase()), i.build()
          }, e.prototype.promoboxSlotClick = function(e, t, n, i, o) {
            var a = this.newEventBuilder(e);
            return a.setName("promoboxSlot"), a.setEventAction(r.bi.CLICK), a.setNonInteraction(!1), a.setCustom("game", o.toLowerCase()), a.setCustom("promoboxSlotClick", t.toLowerCase()), a.setCustom("promobox Type", "".concat(n.toLowerCase(), "|").concat(i)), a.build()
          }, e.prototype.gameBox = function(e, t, n) {
            var i = this.newEventBuilder(e);
            return i.setName("gameBox"), i.setEventAction(r.bi.CLICK), i.setNonInteraction(!1), i.setGame(t), i.setCustom("homeCategory", n), i.build()
          }, e.prototype.seeAllButton = function(e, t) {
            var n = this.newEventBuilder(e);
            return n.setName("SeeAllButton"), n.setEventAction(r.bi.CLICK), n.setNonInteraction(!1), n.setCustom("homeCategory", t), n.build()
          }, e.prototype.backButton = function(e) {
            var t = this.newEventBuilder(e);
            return t.setName("BackButton"), t.setEventAction(r.bi.CLICK), t.setNonInteraction(!1), t.build()
          }, e.prototype.newEventBuilder = function(e) {
            return new a.W().baseEvent(e)
          }, e
        }(),
        d = function() {
          function e() {
            this.aiAnalytics = new h
          }
          return e.prototype.searchNavClick = function(e, t) {
            return (0, r.cA)(null, this.aiAnalytics.searchNavClick(e, t))
          }, e.prototype.seoImpression = function(e) {
            return (0, r.cA)(null, this.aiAnalytics.seoImpression(e))
          }, e.prototype.seoClick = function(e, t) {
            return (0, r.cA)(null, this.aiAnalytics.seoClick(e, t))
          }, e.prototype.footerSocialNav = function(e, t) {
            return (0, r.cA)(null, this.aiAnalytics.footerSocialNav(e, t))
          }, e.prototype.searchNavSupportImpression = function(e) {
            return (0, r.cA)(null, this.aiAnalytics.searchNavSupportImpression(e))
          }, e.prototype.searchNavSupportClick = function(e, t) {
            return (0, r.cA)(null, this.aiAnalytics.searchNavSupportClick(e, t))
          }, e.prototype.searchNavFeedbackClick = function(e, t) {
            return (0, r.cA)(null, this.aiAnalytics.searchNavFeedbackClick(e, t))
          }, e.prototype.promoboxImpression = function(e, t, n) {
            return (0, r.cA)(null, this.aiAnalytics.promoboxImpression(e, t, n))
          }, e.prototype.promoboxImpressionHero = function(e, t, n) {
            return (0, r.cA)(null, this.aiAnalytics.promoboxImpression(e, t, n))
          }, e.prototype.promoboxSlotClick = function(e, t, n, i, o) {
            return void 0 === o && (o = ""), (0, r.cA)(null, this.aiAnalytics.promoboxSlotClick(e, t, n, i, o))
          }, e.prototype.promoboxSlotClickHero = function(e, t, n, i, o) {
            return void 0 === o && (o = ""), (0, r.cA)(null, this.aiAnalytics.promoboxSlotClick(e, t, n, i, o))
          }, e.prototype.gameBox = function(e, t, n) {
            return (0, r.cA)(null, this.aiAnalytics.gameBox(e, t, n))
          }, e.prototype.seeAllButton = function(e, t) {
            return (0, r.cA)(null, this.aiAnalytics.seeAllButton(e, t))
          }, e.prototype.backButton = function(e) {
            return (0, r.cA)(null, this.aiAnalytics.backButton(e))
          }, e
        }(),
        y = function() {
          function e() {}
          return e.prototype.MainModule = function(e, t) {
            var n = this.newEventBuilder(e),
              i = t.moduleScreenId || "MainModule";
            return n.setName(i), n.setEventAction(r.bi.CLICK), n.setNonInteraction(!1), Object.keys(t).forEach(function(e) {
              n.setCustom(e, t[e])
            }), n.build()
          }, e.prototype.ColumnsModule = function(e, t, n) {
            var i = this.newEventBuilder(e);
            return i.setName("ColumnsModule"), n ? i.setEventAction(r.bi.IMPRESSION) : i.setEventAction(r.bi.CLICK), i.setNonInteraction(!1), Object.keys(t).forEach(function(e) {
              i.setCustom(e, t[e])
            }), i.build()
          }, e.prototype.newEventBuilder = function(e) {
            return new a.W().baseEvent(e)
          }, e
        }(),
        b = function() {
          function e() {
            this.aiAnalytics = new y
          }
          return e.prototype.mainModuleClick = function(e, t) {
            return (0, r.cA)(null, this.aiAnalytics.MainModule(e, t))
          }, e.prototype.columnModuleImpression = function(e, t) {
            return (0, r.cA)(null, this.aiAnalytics.ColumnsModule(e, t, !0))
          }, e.prototype.columnModuleClick = function(e, t) {
            return (0, r.cA)(null, this.aiAnalytics.ColumnsModule(e, t, !1))
          }, e
        }(),
        v = n(20056),
        C = n(41641),
        A = n(73072),
        E = n(12306),
        w = n(94779),
        I = n(11385),
        N = n(64717),
        k = n(82725),
        S = n(69142),
        G = n(35712),
        L = function() {
          return (L = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
              for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
          }).apply(this, arguments)
        },
        T = new(function() {
          function e() {
            this.general = new p.L, this.newHome = new d, this.games = new c.o, this.categories = new l, this.profile = new v.y, this.subscription = new S.G, this.giftCard = new f, this.gems = new u.v, this.favorites = new k.k, this.pageBuilderAdvantageAnalytics = new b, this.getPlayAgainStart = function(e) {
              return -1 !== e.indexOf("playAgain") ? r.bi.YES : r.bi.NO
            }, this.getRecPreviousGame = function(e) {
              var t;
              return null != (t = new URL(e).searchParams.get("recPreviousGame")) ? t : ""
            }, this.generateLabel = function(e, t, n) {
              return n ? "".concat(e, " | ").concat(t, "/").concat(n) : "".concat(e, " | ").concat(t)
            }, this.generateDimension = function(e) {
              return e.join(" | ")
            }, this.generateAction = function(e, t) {
              return "".concat(e, "|").concat(t)
            }, this.gamePlayNumTrack = function(e, t, n) {
              var i, o = parseInt(null != (i = E.sj.getItem(C.QH.GAME_PLAY_NUM)) ? i : "0", 10);
              o > 0 ? o++ : o = 1, E.sj.setItem(C.QH.GAME_PLAY_NUM, o), A.O.setArkCookie(C.QH.ARK_PC_OVERALL_GAMES_PLAYED, o), A.O.setArkCookie(C.QH.ARK_PC_LAST_GAME_PLAYED, t.slug), o > 4 && o <= 100 && o % 5 == 0 && T.trackEvent(T.games.numberTimesPlay(e, t, "".concat(o, "th Gameplay"), n))
            }, this.gamePlayVisitTrack = function(e, t, n) {
              var i, o, a = parseInt(null != (i = E.sj.getItem(C.QH.LAST_TIME_GAME_PLAYED)) ? i : "0", 10),
                r = Math.round(new Date().getTime() / 1e3);
              if ((r - a) / 60 / 60 / 24 > 1) {
                var s = parseInt(null != (o = E.sj.getItem(C.QH.GAME_PLAY_VISIT)) ? o : "0", 10);
                ++s > 1 && s <= 25 && (s % 5 == 0 || 2 === s) && T.trackEvent(T.games.numberPlayVisits(e, t, "".concat(s, "th visit"), n)), E.sj.setItem(C.QH.GAME_PLAY_VISIT, s)
              }
              E.sj.setItem(C.QH.LAST_TIME_GAME_PLAYED, r)
            }
          }
          return e.prototype.trackEvent = function(e) {
            if (!N.o.isServer) {
              if (e.ai) {
                var t = e.ai.name,
                  n = L(L({}, e.ai.data), {
                    targetingConsent: E.sj.getItem(C.QH.TARGETING_CONSENT)
                  });
                G.v.log("AI - trackEvent", t, n), I.AppInsightService.trackEvent(t, L({}, n))
              }
              e.ga && w.GoogleAnalyticsService.trackEvent(e.ga.data)
            }
          }, e
        }()),
        B = n(78628),
        x = {
          gameReleaseDate: 1632132e3,
          name: "GameName",
          alias: "GameAlias",
          description: "Game Description",
          rules: "Game Rules",
          subtitle: "Game Subtitle",
          shortTitle: "Short Title",
          fullTitle: "Full Title",
          seoTitle: "SEO Title",
          seoTitleEnUs: "SEO Title - en-US",
          seoTitleEnCn: "SEO Title - en-CN",
          seoTitleEnNz: "SEO Title - en-NZ",
          seoTitleEnAu: "SEO Title - en-AU",
          seoTitleEnGb: "SEO Title - en-GB",
          details: "Game Details",
          categories: ["puzzle", "strategy"],
          webGameFlex: !0,
          aspectRatio: 16 / 9,
          webGameAreaBackgroundColor: "#FFFFFF",
          webGameAreaTopAssetLeft: "/assets/left.png",
          webGameAreaTopAssetRight: "/assets/right.png",
          externalConfigUrl: "https://example.com/config",
          pushNotificationEnabled: !0,
          pwaIcon512: "/icons/icon512.png",
          pwaIcon152: "/icons/icon152.png",
          pwaIcon192: "/icons/icon192.png",
          pwaIcon180: "/icons/icon180.png",
          pwaIcon167: "/icons/icon167.png",
          pwaIcon120: "/icons/icon120.png",
          pwaIcon76: "/icons/icon76.png",
          promoTile280x600: "/promo/tile280x600.png",
          promoTile760x312: "/promo/tile760x312.png",
          promoTile1000x312: "/promo/tile1000x312.png",
          promoTile280x280: "/promo/tile280x280.png",
          promoTile384x216: "/promo/tile384x216.png",
          gameMetaFilesBaseUrl: "https://example.com/metafiles",
          subscriberOnlyGame: "subscriberGame123",
          primaryCategory: "puzzle",
          appStore: [{
            OS: "iOS",
            link: "https://www.apple.com/app-store/"
          }],
          hasCollection: "true"
        },
        R = {
          id: "gameId123",
          name: "GameName",
          locales: "en",
          slug: "game-slug",
          sdkName: "SDK",
          assetOriginUrl: "https://example.com/assets",
          thumbPath: "/assets/thumb.png",
          description: "Game Description",
          tags: "puzzle",
          version: "1.0.0",
          gameReleaseDate: 1632132e3,
          metaHTMLTitle: "Game Title",
          metaHTMLDescription: "Game HTML Description",
          feedMetadata: x,
          analyticsMetaData: {
            rank: {
              desktopRank: 1,
              mobileRank: 2,
              tabletRank: 3
            },
            recommendedGames: ["game1", "game2"]
          },
          orderByGameStarts: 100
        },
        M = {
          id: 1,
          name: "2048",
          slug: "2048",
          version: "0.50",
          renderingType: "JavaScript",
          sdkName: "TwoZeroFourEight",
          meta: {
            locale: "en",
            name: "2048 Game",
            description: '<h2>About 2048</h2>\n<p>2048 is a cool math and puzzle game that was created in 2014 and quickly became popular around the globe. Inspired by 1024 and Threes!, our free 2048 game is an exciting combination of math and strategy. Can you get a 2048 high score? Play it today online for free! No downloads required!</p>\n<h2>Fun Facts about 2048</h2>\n<ul>\n    <li>2048 was created in only two days as a side project of developer Gabriele Cirulli</li>\n    <li>After going viral, 2048 had over 4,000,000 players in less than one week!</li>\n    <li>Deciding not to sell the game, Cirulli released 2048 as an open-source software, making it available to gamers and developers worldwide</li>\n    <li>Because the game is open-source and widely recognized for its brilliant design, 2048 is often used to teach young programmers</li>\n    <li>Recently, an artificial intelligence system was developed to play 2048. Can you beat its high score?</li>\n    <li>2048 has been ported to many platforms due to its open-source code</li>\n    <li>The original version of 2048 was written in JavaScript and CSS, but now many C++ and Vala clones exist</li>\n    <li>The game 1024 is a clone of Threes! and Cirulli has said that 2048 is a clone of 1024; what a mathematical pedigree!</li>\n    <li>New editions of the game, like this one, include leaderboards, which were unavailable in the original</li>\n    <li>Many variations of 2048 exist, including 2048 cupcakes and other versions that contain elements of famous movies and television show</li>\n</ul>\n<p>Enjoing 2048? Check out our other <a href="https://www.arkadium.com/free-online-games/math/">math</a> and <a href="https://www.arkadium.com/free-online-games/strategy/">strategy games</a> for more challenges!</p>',
            rules: "<h2>How to Play 2048</h2>\n\n<p>To play 2048, players must move numbered tiles and combine them to produce a tile with a value of 2048. More tiles are added to the board every turn and only identical numbers can be combined. Once the board is full and no more tiles can be combined, the game is over. However, skilled players that create a tile with a value of 2048 can continue playing with bigger numbers. Keep playing to develop your 2048 strategy; our version of this game is no 2048 cupcake!<p>\n\n<h2>2048 Tips and Tricks</h2>\n<P><UL><LI>Where possible, you want to move the 2048 tiles in only two directions, even though they can be moved in 4.  And experts generally agree that the best place to move all of the tiles are the bottom (a 'down' move) and left corner of the board.  This ensures you have the majority of the board to bring in and combine new tiles that fill the board. </li><li>Although it may be tempting, you should generally resist  the urge to combine tiles with large numbers.  Rather, focus on combining 2048 tiles with smaller numbers.  For example, the 2s, 4s, 8s, 16s, and 32s.</li><li>2048 is great for keeping you sharp as you should always think three steps ahead and strategize your moves out.  While you can likely recover from a bad move or two, too many mistakes could lead to the end of the game.</li><li>Practice makes perfect!  While there is certainly a degree of luck, 2048 is all about your strategy, plan of attack, and taking it slow!</ul></li></p><P>We hope you enjoy playing our free 2048 game, and best of luck on your way to producing a tile with a value of...2048!</p>\n",
            alias: "2048-game",
            htmlTitle: "2048 Game | Instantly Play 2048 Online for Free",
            htmlDescription: "Play the hit game, 2048, today for free online. This game went viral and it's easy to see why -instantly play for free, no downloads or installs needed!",
            details: "This viral classic is an entertaining mix of numbers and strategy!",
            gameReleaseDate: null,
            fullTitle: "2048 Game",
            seoTitle: "2048 Game",
            subTitle: "Free Strategy Game",
            backgroundColor: "#646262",
            hasCollection: !1,
            hasEagle: null,
            isFlex: !0,
            isIframe: !0,
            isAdsFree: !0,
            isGRM: !0,
            hasGems: !0,
            aspectRatio: null,
            gameSuggestions: ["bubble-shooter", "mahjongg-solitaire"],
            categories: ["new", "strategy", "math", "New Category Test", "Snack Games", "puzzle"],
            primaryCategory: "strategy",
            tags: ["Leaderboard", "Time Challenge", "Classic Mode"],
            badges: ["Beginner", "Intermediate", "Advanced", "2048 Master"],
            thumbs: {
              promoThumbPath: "assets/thumbs/promo-thumb.jpg",
              thumbPath: "assets/thumbs/thumb2x.jpg",
              secondaryThumbPath: "assets/thumbs/secondary-thumb2x.jpg",
              screenshotPath: "assets/thumbs/screenshot.jpg",
              squareIcon76: "assets/thumbs/icon_76.png",
              squareIcon120: "assets/thumbs/icon_120.png",
              squareIcon152: "assets/thumbs/icon_152.png",
              squareIcon167: "assets/thumbs/icon_167.png",
              squareIcon180: "assets/thumbs/icon_180.png",
              squareIcon192: "assets/thumbs/icon_192.png",
              squareIcon512: "assets/thumbs/icon_512.png",
              pwaIcon192: "2048/files/icon_192.png",
              promoTile384x216: "2048/files/384x216.webp",
              promoTile280x280: "2048/files/280x280.webp",
              pwaIcon152: "2048/files/icon_152.png",
              pwaIcon180: "2048/files/icon_180.png",
              promoTile1000x312: "2048/files/1000x312.webp",
              promoTile760x312: "2048/files/760x312.webp",
              pwaIcon512: "2048/files/icon_512.png",
              pwaIcon76: "2048/files/icon_76.png",
              pwaIcon167: "2048/files/icon_167.png",
              pwaIcon120: "2048/files/icon_120.png",
              webGameAreaTopAssetLeft: "2048/files/top_left_600x296.webp",
              promoTile280x600: "2048/files/280x600.webp",
              webGameAreaTopAssetRight: "2048/files/top_right_600x296.webp"
            }
          },
          analyticsMetaData: {
            rank: {
              desktopRank: 98,
              mobileRank: 98,
              tabletRank: 98
            },
            recommendedGames: ["5roll", "8-ball-pool-together", "9-ball-pool", "alus-revenge-2", "arkadium-fill-ins", "atari-asteroids"]
          },
          hasFrenchLocale: !1,
          orderByGameStarts: 67
        },
        _ = n(67114),
        D = n(42728),
        P = n(61828);
      (i = o || (o = {}))[i.GAME = 0] = "GAME", i[i.GAME_END = 1] = "GAME_END", i[i.GAME_SCORE_SAVED = 2] = "GAME_SCORE_SAVED", i[i.PENDING = 3] = "PENDING", i[i.PREROLL = 4] = "PREROLL", i[i.COVER = 5] = "COVER", i[i.ADBLOCK = 6] = "ADBLOCK", i[i.REWARD = 7] = "REWARD", i[i.INTERSTITIAL = 8] = "INTERSTITIAL", i[i.PREROLL_PLAYING = 9] = "PREROLL_PLAYING";
      var K = n(27249),
        O = n(39576),
        F = n(74348),
        j = n(97160),
        V = n(88487),
        H = ["stock-car-hero", "hidden-kitchen", "grand-prix-hero", "pirates-and-treasures", "spellbound", "car-rush-racing-game", "famous-paintings", "atari-asteroids", "atari-centipede", "space-adventure-pinball", "flower-garden-2", "sprint-club-nitro", "uclick-crossword", "uclick-kenken", "uclick-lexigo", "uclick-quick-cross", "uclick-sudoku", "uclick-unolingo", "uclick-updownwords", "uclick-word-round-up", "amu-jumble", "amu-rootonym", "amu-sudoku-2"],
        z = n(19183)
    }
  }
]);