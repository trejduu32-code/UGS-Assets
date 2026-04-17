! function() {
  try {
    var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "56e4f9dc-0e7d-4397-962b-f7a78fb54200", e._sentryDebugIdIdentifier = "sentry-dbid-56e4f9dc-0e7d-4397-962b-f7a78fb54200")
  } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7514], {
    11966: (e, t, l) => {
      "use strict";
      l.d(t, {
        Y: () => a
      });
      var r, a = ((r = {}).SMALL = "small", r.MEDIUM = "medium", r.LARGE = "large", r.XL = "xl", r)
    },
    37221: e => {
      e.exports = {
        Spinner: "styles_Spinner__jKmhq",
        spin: "styles_spin__3VY_s"
      }
    },
    43487: (e, t, l) => {
      "use strict";
      l.d(t, {
        y: () => i
      });
      var r = l(95155),
        a = l(31969),
        n = l(11966),
        o = l(37221),
        d = l.n(o);
      let i = e => {
        let t = () => {
          switch (e.size) {
            case n.Y.SMALL:
              return 14;
            case n.Y.MEDIUM:
              return 20;
            case n.Y.LARGE:
              return 36;
            case n.Y.XL:
              return 48;
            default:
              return 24
          }
        };
        return (0, r.jsx)(a.StaticImage, {
          className: d().Spinner,
          src: "/media/spinner-icon.svg",
          alt: "Spinner",
          width: t(),
          height: t(),
          "data-testid": "spinner-icon",
          "data-sentry-element": "StaticImage",
          "data-sentry-component": "Spinner",
          "data-sentry-source-file": "index.tsx"
        })
      }
    },
    44455: (e, t, l) => {
      "use strict";
      l.d(t, {
        H: () => p,
        PWAInstallProvider: () => v
      });
      var r = l(95155),
        a = l(12115),
        n = l(17413),
        o = l(14011),
        d = l(79760),
        i = l(21765),
        s = l(88828);
      let c = (0, a.createContext)(void 0),
        u = () => {
          let e = window.location.pathname.match(/\/games\/([^/?]+)/);
          return e ? e[1] : null
        },
        f = async () => {
          try {
            if ("u" > typeof navigator) return await navigator.getInstalledRelatedApps()
          } catch (e) {
            return (0, n.t)().error({
              data: e
            }, "[PWA] Failed to check installed related apps"), !1
          }
        }, v = ({
          children: e
        }) => {
          let [t, l] = (0, a.useState)(!1), [v, p] = (0, a.useState)(!1), m = (0, a.useRef)(null), x = (0, o.usePathname)(), {
            browser: h,
            detectDevice: j,
            os: g,
            model: E
          } = (0, d.i)(), [_, y] = (0, a.useState)(!1), {
            getGameplayId: w,
            generateGameplayId: b
          } = (0, s.T3)();
          (0, a.useEffect)(() => {
            let e = window.matchMedia("(display-mode: standalone)"),
              t = window.navigator.standalone,
              r = document.referrer.includes("android-app://"),
              a = e.matches || t || r,
              o = u(),
              d = w() || b(o || ""),
              s = () => {
                (e.matches || t || r) && !_ && (y(!0), (0, i.$u)(h?.name ?? "unknown", j(), g?.name ?? "unknown", d))
              };
            a && ((0, n.t)().info("[PWA] Running in standalone mode - app is installed"), s(), p(!0), l(!1));
            let c = () => s();
            e.addEventListener("change", c);
            let v = e => {
              e.preventDefault(), m.current = e, (0, n.t)().info({
                data: {
                  slug: u()
                }
              }, "[PWA] beforeinstallprompt fired - app is installable"), l(!0), p(!1)
            };
            return a || ((async () => {
              if (!o) return;
              let e = !1;
              try {
                let t = await f();
                t && Array.isArray(t) && (e = t.some(e => e.url.includes(o)) || t.some(e => e.id.includes(o))), (0, n.t)().info({
                  data: {
                    slug: o,
                    installedApps: t.map(e => ({
                      id: e.id,
                      platform: e.platform,
                      url: e.url
                    })),
                    isInstalled: e
                  }
                }, "[PWA] Installation check result")
              } catch (e) {
                (0, n.t)().warn({
                  data: {
                    error: e
                  }
                }, "[PWA] Failed to check related apps during initial load")
              }
              e ? (p(!0), l(!1)) : ("Chrome" === h.name && ("Windows" === E || "Macintosh" === E) || "Edge" === h.name && ("Windows" === E || "Macintosh" === E) || "Chrome" === h.name && E.includes("Android")) && (l(!0), (0, n.t)().info({
                data: {
                  slug: o
                }
              }, "[PWA] Game is not installed"))
            })(), window.addEventListener("beforeinstallprompt", v)), () => {
              e.removeEventListener("change", c), window.removeEventListener("beforeinstallprompt", v)
            }
          }, [x, h?.name, j, E, g?.name]);
          let C = (0, a.useCallback)(async () => {
            if (!m.current) return (0, n.t)().warn("[PWA] No install prompt available"), l(!1), !1;
            try {
              await m.current.prompt();
              let e = await m.current.userChoice;
              if ("accepted" !== e.outcome) return (0, n.t)().info("[PWA] User dismissed install"), !1;
              {
                let e = u();
                (0, n.t)().info({
                  data: {
                    slug: e
                  }
                }, "[PWA] User accepted install");
                let t = !1;
                try {
                  let l = await f();
                  l && Array.isArray(l) && e && (t = l.some(t => t.url.includes(e)) || l.some(t => t.id.includes(e)))
                } catch (e) {
                  (0, n.t)().warn({
                    data: {
                      error: e
                    }
                  }, "[PWA] Could not verify installation after prompt")
                }
                if (m.current = null, t) return l(!1), p(!0), (0, n.t)().info({
                  data: {
                    slug: e
                  }
                }, "[PWA] Installation confirmed by browser API"), !0;
                return (0, n.t)().warn({
                  data: {
                    slug: e
                  }
                }, "[PWA] Installation not confirmed by browser API"), !1
              }
            } catch (e) {
              return (0, n.t)().error({
                data: e
              }, "[PWA] Error prompting install"), !1
            }
          }, []);
          return (0, r.jsx)(c.Provider, {
            value: {
              isInstallable: t,
              isInstalled: v,
              promptInstall: C
            },
            "data-sentry-element": "PWAInstallContext.Provider",
            "data-sentry-component": "PWAInstallProvider",
            "data-sentry-source-file": "PWAInstallContext.tsx",
            children: e
          })
        }, p = () => {
          let e = (0, a.useContext)(c);
          if (void 0 === e) throw Error("usePWAInstall must be used within a PWAInstallProvider");
          return e
        }
    },
    45798: (e, t, l) => {
      "use strict";
      l.d(t, {
        ArenaSdkProvider: () => u,
        T: () => f
      });
      var r = l(95155),
        a = l(12115),
        n = l(67754),
        o = l(38841),
        d = l(32366),
        i = l(17413),
        s = l(24709);
      let c = (0, a.createContext)({
          status: "idle",
          sdk: null,
          error: null
        }),
        u = ({
          children: e,
          theySellAd: t
        }) => {
          let [l, u] = (0, a.useState)(() => {
            let e = (0, n.$t)();
            return e ? {
              status: "ready",
              sdk: e,
              error: null
            } : {
              status: "idle",
              sdk: null,
              error: null
            }
          });
          (0, a.useEffect)(() => {
            let e = !1;
            async function r() {
              try {
                u({
                  status: "loading",
                  sdk: null,
                  error: null
                });
                let l = (0, o.env)("NEXT_PUBLIC_BUILD_ENV"),
                  r = n.bW["staging" === l ? "production" : l],
                  a = (0, d.Q1)()?.authApi,
                  i = a?.getSessionStorage(),
                  s = await (0, n.mQ)(r, i, t);
                e || u({
                  status: "ready",
                  sdk: s,
                  error: null
                })
              } catch (t) {
                (0, s.Cp)(t), (0, i.t)().error({
                  data: {
                    err: t
                  }
                }, "[ArenaSdkProvider] - Error loading Arena SDK"), e || u({
                  status: "error",
                  sdk: null,
                  error: t instanceof Error ? t : Error("Error while loading Arena SDK")
                })
              }
            }
            return "ready" !== l.status && r(), () => {
              e = !0
            }
          }, []);
          let f = (0, a.useMemo)(() => l, [l]);
          return (0, r.jsx)(c.Provider, {
            value: f,
            "data-sentry-element": "ArenaSdkContext.Provider",
            "data-sentry-component": "ArenaSdkProvider",
            "data-sentry-source-file": "ArkadiumSDKContext.tsx",
            children: e
          })
        };

      function f() {
        let e = (0, a.useContext)(c);
        if (!e) throw Error("useArenaSdk must be used within ArenaSdkProvider");
        return e
      }
    },
    46786: (e, t, l) => {
      "use strict";
      l.d(t, {
        y: () => u
      });
      var r = l(12115),
        a = l(4265),
        n = l(85824),
        o = l(27882),
        d = l(79481);
      let i = (0, d.createServerReference)("60c2423114b5b2610ce1b5d71febae6d0b8504597f", d.callServer, void 0, d.findSourceMapURL, "purchaseAndConsumeItem");
      var s = l(21765),
        c = l(17413);
      let u = e => {
        let {
          gameSlug: t,
          item: l,
          requiredGems: d,
          buttonLocation: u,
          requireConfirmationBeforeShop: f = !1,
          onSuccess: v,
          onSuccessAnalytics: p,
          errorContext: m
        } = e, [x, h] = (0, r.useState)(!1), {
          fetchGems: j,
          gems: g
        } = (0, a.Ij)(), E = (0, a.XI)(), {
          openModal: _
        } = (0, n.h)(), {
          features: y
        } = (0, o.R)(), w = y.auth.shop.enabled, b = y.auth.enabled, C = (0, c.t)();
        return {
          handlePurchase: async () => {
            if (!E) return _("sign-up", void 0, u), (0, s.sY)(u), {
              insufficientGems: !1,
              success: !1
            };
            if (await j(), null === g || "number" == typeof g && g < d) return f || (h(!0), _("shop", void 0, u)), {
              insufficientGems: !0,
              success: !1
            };
            try {
              let e = await i(t, l);
              if (e?.success) return v?.(), await j(), p?.(), h(!1), {
                insufficientGems: !1,
                success: !0
              };
              return {
                insufficientGems: !1,
                success: !1
              }
            } catch (e) {
              return C.error({
                data: {
                  error: e,
                  gems: g,
                  requiredGems: d,
                  requestContext: {
                    isAuthenticated: E,
                    isShopEnabled: w,
                    isAuthEnabled: b,
                    ...m
                  }
                }
              }, `[usePurchaseAndConsume] - Error purchasing item: ${l.bundleSku}`), {
                insufficientGems: !1,
                success: !1
              }
            }
          },
          insufficientGems: x
        }
      }
    },
    54188: (e, t, l) => {},
    57873: (e, t, l) => {
      "use strict";
      l.d(t, {
        nW: () => o,
        t: () => a,
        uM: () => d,
        w2: () => n
      });
      var r = l(88011);
      let a = e => {
          let t = localStorage.getItem(r.Kc);
          if (!t) return localStorage.setItem(r.Kc, JSON.stringify({
            [e]: 1
          })), 1;
          let l = JSON.parse(t);
          return l[e] = (l[e] || 0) + 1, localStorage.setItem(r.Kc, JSON.stringify(l)), l[e]
        },
        n = ({
          prerollFirstStartRate: e,
          prerollShowRate: t
        }, l) => {
          let a = e ?? r.AW.prerollFirstStartRate,
            n = t ?? r.AW.prerollShowRate,
            o = (e => {
              let t = localStorage?.getItem(r.Kc);
              if (!t) return 0;
              let l = JSON.parse(t);
              return e && e in l && l[e] || 0
            })(l);
          return o === a - 1 || !(o <= a) && (o - a + 1) % n == 0
        },
        o = (e, t) => {
          let l = t?.seconds ?? e?.prerollSeconds ?? r.AW.prerollSeconds;
          return {
            prerollShowRate: t?.showRate ?? e?.prerollShowRate ?? r.AW.prerollShowRate,
            prerollFirstStartRate: t?.firstStartRate ?? e?.prerollFirstStartRate ?? r.AW.prerollFirstStartRate,
            prerollEnabled: t?.isEnabled ?? e?.prerollEnabled ?? r.AW.prerollEnabled,
            prerollFreePeriod: t?.freePeriod ?? e?.prerollFreePeriod ?? r.AW.prerollFreePeriod,
            prerollSeconds: "string" == typeof l ? parseInt(l.split("-")[1]) : l
          }
        },
        d = e => e?.gameStartConfig?.buttonText?.slice(0, 16) ?? "Play now"
    },
    67838: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, {
        defaultVars: () => r,
        themeVars: () => a
      });
      var r = {
          colors: {
            primary: null,
            onPrimary: null,
            primaryContainer: null,
            onPrimaryContainer: null,
            secondary: null,
            onSecondary: null,
            secondaryContainer: null,
            onSecondaryContainer: null,
            tertiary: null,
            onTertiary: null,
            tertiaryContainer: null,
            onTertiaryContainer: null,
            error: null,
            onError: null,
            errorContainer: null,
            onErrorContainer: null,
            surface: null,
            surfaceDim: null,
            surfaceBright: null,
            surfaceContainerLowest: null,
            surfaceContainerLow: null,
            surfaceContainer: null,
            surfaceContainerHigh: null,
            surfaceContainerHighest: null,
            onSurface: null,
            onSurfaceVariant: null,
            outline: null,
            outlineVariant: null,
            inverseSurface: null,
            inverseOnSurface: null,
            inversePrimary: null,
            scrim: null,
            shadow: null
          },
          font: {
            standard: null
          },
          fontWeight: {
            light: null,
            regular: null,
            medium: null,
            semibold: null
          },
          fontSize: {
            "fs-12": null,
            "fs-14": null,
            "fs-16": null,
            "fs-18": null,
            "fs-20": null,
            "fs-22": null,
            "fs-24": null,
            "fs-28": null,
            "fs-32": null,
            "fs-36": null,
            "fs-40": null,
            "fs-44": null,
            "fs-48": null,
            "fs-52": null
          },
          typography: {
            displayLarge: null,
            displayMedium: null,
            displaySmall: null,
            headlineLarge: null,
            headlineMedium: null,
            headlineSmall: null,
            titleLarge: null,
            titleMedium: null,
            titleSmall: null,
            labelLarge: null,
            labelMedium: null,
            labelSmall: null,
            bodyLarge: null,
            bodyMedium: null,
            bodySmall: null
          },
          lineHeight: {
            "lh-0": null,
            "lh-1": null,
            "lh-2": null,
            "lh-3": null,
            "lh-4": null,
            "lh-5": null,
            "lh-6": null,
            "lh-7": null,
            "lh-8": null,
            "lh-9": null
          },
          padding: {
            "p-0": null,
            "p-2": null,
            "p-4": null,
            "p-8": null,
            "p-16": null,
            "p-24": null,
            "p-32": null,
            "p-40": null,
            "p-48": null,
            "p-56": null
          },
          size: {
            "s-0": null,
            "s-2": null,
            "s-4": null,
            "s-8": null,
            "s-16": null,
            "s-24": null,
            "s-32": null,
            "s-40": null,
            "s-48": null,
            "s-56": null
          },
          shape: {
            none: null,
            extraSmall: null,
            small: null,
            medium: null,
            large: null,
            extraLarge: null,
            full: null
          },
          borderWidth: {
            none: null,
            small: null,
            medium: null,
            large: null
          },
          elevation: {
            "el-0": null,
            "el-1": null,
            "el-2": null,
            "el-3": null,
            "el-4": null
          },
          components: {
            button: {
              outline: {
                background: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                },
                text: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                },
                border: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                },
                icon: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                }
              },
              filled: {
                background: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                },
                text: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                },
                border: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                },
                icon: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                }
              },
              label: {
                background: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                },
                text: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                },
                border: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                },
                icon: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                }
              },
              jumbo: {
                background: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                },
                text: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                },
                border: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                },
                icon: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                }
              }
            },
            pill: {
              primary: {
                background: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                },
                text: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                },
                border: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                },
                icon: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                }
              },
              secondary: {
                background: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                },
                text: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                },
                border: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                },
                icon: {
                  default: null,
                  hover: null,
                  active: null,
                  disabled: null,
                  focus: null
                }
              }
            },
            portraitCard: {
              hoverBlock: {
                type: "full",
                background: "#323232",
                color: null,
                buttonText: null,
                buttonTextColor: null,
                buttonBackground: null,
                buttonBackgroundEnd: null,
                buttonBorderColor: null
              }
            }
          },
          zIndex: {
            footer: "900",
            body: "950",
            card: "955",
            cardOverlay: "957",
            badge: "960",
            game: "1000",
            preroll: "1050",
            displayAds: "1100",
            actionBar: "1150",
            header: "1200",
            overlay: "5000",
            modal: "5100",
            modalClose: "5101"
          }
        },
        a = {
          colors: {
            primary: "var(--_1tjd7xf0)",
            onPrimary: "var(--_1tjd7xf1)",
            primaryContainer: "var(--_1tjd7xf2)",
            onPrimaryContainer: "var(--_1tjd7xf3)",
            secondary: "var(--_1tjd7xf4)",
            onSecondary: "var(--_1tjd7xf5)",
            secondaryContainer: "var(--_1tjd7xf6)",
            onSecondaryContainer: "var(--_1tjd7xf7)",
            tertiary: "var(--_1tjd7xf8)",
            onTertiary: "var(--_1tjd7xf9)",
            tertiaryContainer: "var(--_1tjd7xfa)",
            onTertiaryContainer: "var(--_1tjd7xfb)",
            error: "var(--_1tjd7xfc)",
            onError: "var(--_1tjd7xfd)",
            errorContainer: "var(--_1tjd7xfe)",
            onErrorContainer: "var(--_1tjd7xff)",
            surface: "var(--_1tjd7xfg)",
            surfaceDim: "var(--_1tjd7xfh)",
            surfaceBright: "var(--_1tjd7xfi)",
            surfaceContainerLowest: "var(--_1tjd7xfj)",
            surfaceContainerLow: "var(--_1tjd7xfk)",
            surfaceContainer: "var(--_1tjd7xfl)",
            surfaceContainerHigh: "var(--_1tjd7xfm)",
            surfaceContainerHighest: "var(--_1tjd7xfn)",
            onSurface: "var(--_1tjd7xfo)",
            onSurfaceVariant: "var(--_1tjd7xfp)",
            outline: "var(--_1tjd7xfq)",
            outlineVariant: "var(--_1tjd7xfr)",
            inverseSurface: "var(--_1tjd7xfs)",
            inverseOnSurface: "var(--_1tjd7xft)",
            inversePrimary: "var(--_1tjd7xfu)",
            scrim: "var(--_1tjd7xfv)",
            shadow: "var(--_1tjd7xfw)"
          },
          font: {
            standard: "var(--_1tjd7xfx)"
          },
          fontWeight: {
            light: "var(--_1tjd7xfy)",
            regular: "var(--_1tjd7xfz)",
            medium: "var(--_1tjd7xf10)",
            semibold: "var(--_1tjd7xf11)"
          },
          fontSize: {
            "fs-12": "var(--_1tjd7xf12)",
            "fs-14": "var(--_1tjd7xf13)",
            "fs-16": "var(--_1tjd7xf14)",
            "fs-18": "var(--_1tjd7xf15)",
            "fs-20": "var(--_1tjd7xf16)",
            "fs-22": "var(--_1tjd7xf17)",
            "fs-24": "var(--_1tjd7xf18)",
            "fs-28": "var(--_1tjd7xf19)",
            "fs-32": "var(--_1tjd7xf1a)",
            "fs-36": "var(--_1tjd7xf1b)",
            "fs-40": "var(--_1tjd7xf1c)",
            "fs-44": "var(--_1tjd7xf1d)",
            "fs-48": "var(--_1tjd7xf1e)",
            "fs-52": "var(--_1tjd7xf1f)"
          },
          typography: {
            displayLarge: "var(--_1tjd7xf1g)",
            displayMedium: "var(--_1tjd7xf1h)",
            displaySmall: "var(--_1tjd7xf1i)",
            headlineLarge: "var(--_1tjd7xf1j)",
            headlineMedium: "var(--_1tjd7xf1k)",
            headlineSmall: "var(--_1tjd7xf1l)",
            titleLarge: "var(--_1tjd7xf1m)",
            titleMedium: "var(--_1tjd7xf1n)",
            titleSmall: "var(--_1tjd7xf1o)",
            labelLarge: "var(--_1tjd7xf1p)",
            labelMedium: "var(--_1tjd7xf1q)",
            labelSmall: "var(--_1tjd7xf1r)",
            bodyLarge: "var(--_1tjd7xf1s)",
            bodyMedium: "var(--_1tjd7xf1t)",
            bodySmall: "var(--_1tjd7xf1u)"
          },
          lineHeight: {
            "lh-0": "var(--_1tjd7xf1v)",
            "lh-1": "var(--_1tjd7xf1w)",
            "lh-2": "var(--_1tjd7xf1x)",
            "lh-3": "var(--_1tjd7xf1y)",
            "lh-4": "var(--_1tjd7xf1z)",
            "lh-5": "var(--_1tjd7xf20)",
            "lh-6": "var(--_1tjd7xf21)",
            "lh-7": "var(--_1tjd7xf22)",
            "lh-8": "var(--_1tjd7xf23)",
            "lh-9": "var(--_1tjd7xf24)"
          },
          padding: {
            "p-0": "var(--_1tjd7xf25)",
            "p-2": "var(--_1tjd7xf26)",
            "p-4": "var(--_1tjd7xf27)",
            "p-8": "var(--_1tjd7xf28)",
            "p-16": "var(--_1tjd7xf29)",
            "p-24": "var(--_1tjd7xf2a)",
            "p-32": "var(--_1tjd7xf2b)",
            "p-40": "var(--_1tjd7xf2c)",
            "p-48": "var(--_1tjd7xf2d)",
            "p-56": "var(--_1tjd7xf2e)"
          },
          size: {
            "s-0": "var(--_1tjd7xf2f)",
            "s-2": "var(--_1tjd7xf2g)",
            "s-4": "var(--_1tjd7xf2h)",
            "s-8": "var(--_1tjd7xf2i)",
            "s-16": "var(--_1tjd7xf2j)",
            "s-24": "var(--_1tjd7xf2k)",
            "s-32": "var(--_1tjd7xf2l)",
            "s-40": "var(--_1tjd7xf2m)",
            "s-48": "var(--_1tjd7xf2n)",
            "s-56": "var(--_1tjd7xf2o)"
          },
          shape: {
            none: "var(--_1tjd7xf2p)",
            extraSmall: "var(--_1tjd7xf2q)",
            small: "var(--_1tjd7xf2r)",
            medium: "var(--_1tjd7xf2s)",
            large: "var(--_1tjd7xf2t)",
            extraLarge: "var(--_1tjd7xf2u)",
            full: "var(--_1tjd7xf2v)"
          },
          borderWidth: {
            none: "var(--_1tjd7xf2w)",
            small: "var(--_1tjd7xf2x)",
            medium: "var(--_1tjd7xf2y)",
            large: "var(--_1tjd7xf2z)"
          },
          elevation: {
            "el-0": "var(--_1tjd7xf30)",
            "el-1": "var(--_1tjd7xf31)",
            "el-2": "var(--_1tjd7xf32)",
            "el-3": "var(--_1tjd7xf33)",
            "el-4": "var(--_1tjd7xf34)"
          },
          components: {
            button: {
              outline: {
                background: {
                  default: "var(--_1tjd7xf35)",
                  hover: "var(--_1tjd7xf36)",
                  active: "var(--_1tjd7xf37)",
                  disabled: "var(--_1tjd7xf38)",
                  focus: "var(--_1tjd7xf39)"
                },
                text: {
                  default: "var(--_1tjd7xf3a)",
                  hover: "var(--_1tjd7xf3b)",
                  active: "var(--_1tjd7xf3c)",
                  disabled: "var(--_1tjd7xf3d)",
                  focus: "var(--_1tjd7xf3e)"
                },
                border: {
                  default: "var(--_1tjd7xf3f)",
                  hover: "var(--_1tjd7xf3g)",
                  active: "var(--_1tjd7xf3h)",
                  disabled: "var(--_1tjd7xf3i)",
                  focus: "var(--_1tjd7xf3j)"
                },
                icon: {
                  default: "var(--_1tjd7xf3k)",
                  hover: "var(--_1tjd7xf3l)",
                  active: "var(--_1tjd7xf3m)",
                  disabled: "var(--_1tjd7xf3n)",
                  focus: "var(--_1tjd7xf3o)"
                }
              },
              filled: {
                background: {
                  default: "var(--_1tjd7xf3p)",
                  hover: "var(--_1tjd7xf3q)",
                  active: "var(--_1tjd7xf3r)",
                  disabled: "var(--_1tjd7xf3s)",
                  focus: "var(--_1tjd7xf3t)"
                },
                text: {
                  default: "var(--_1tjd7xf3u)",
                  hover: "var(--_1tjd7xf3v)",
                  active: "var(--_1tjd7xf3w)",
                  disabled: "var(--_1tjd7xf3x)",
                  focus: "var(--_1tjd7xf3y)"
                },
                border: {
                  default: "var(--_1tjd7xf3z)",
                  hover: "var(--_1tjd7xf40)",
                  active: "var(--_1tjd7xf41)",
                  disabled: "var(--_1tjd7xf42)",
                  focus: "var(--_1tjd7xf43)"
                },
                icon: {
                  default: "var(--_1tjd7xf44)",
                  hover: "var(--_1tjd7xf45)",
                  active: "var(--_1tjd7xf46)",
                  disabled: "var(--_1tjd7xf47)",
                  focus: "var(--_1tjd7xf48)"
                }
              },
              label: {
                background: {
                  default: "var(--_1tjd7xf49)",
                  hover: "var(--_1tjd7xf4a)",
                  active: "var(--_1tjd7xf4b)",
                  disabled: "var(--_1tjd7xf4c)",
                  focus: "var(--_1tjd7xf4d)"
                },
                text: {
                  default: "var(--_1tjd7xf4e)",
                  hover: "var(--_1tjd7xf4f)",
                  active: "var(--_1tjd7xf4g)",
                  disabled: "var(--_1tjd7xf4h)",
                  focus: "var(--_1tjd7xf4i)"
                },
                border: {
                  default: "var(--_1tjd7xf4j)",
                  hover: "var(--_1tjd7xf4k)",
                  active: "var(--_1tjd7xf4l)",
                  disabled: "var(--_1tjd7xf4m)",
                  focus: "var(--_1tjd7xf4n)"
                },
                icon: {
                  default: "var(--_1tjd7xf4o)",
                  hover: "var(--_1tjd7xf4p)",
                  active: "var(--_1tjd7xf4q)",
                  disabled: "var(--_1tjd7xf4r)",
                  focus: "var(--_1tjd7xf4s)"
                }
              },
              jumbo: {
                background: {
                  default: "var(--_1tjd7xf4t)",
                  hover: "var(--_1tjd7xf4u)",
                  active: "var(--_1tjd7xf4v)",
                  disabled: "var(--_1tjd7xf4w)",
                  focus: "var(--_1tjd7xf4x)"
                },
                text: {
                  default: "var(--_1tjd7xf4y)",
                  hover: "var(--_1tjd7xf4z)",
                  active: "var(--_1tjd7xf50)",
                  disabled: "var(--_1tjd7xf51)",
                  focus: "var(--_1tjd7xf52)"
                },
                border: {
                  default: "var(--_1tjd7xf53)",
                  hover: "var(--_1tjd7xf54)",
                  active: "var(--_1tjd7xf55)",
                  disabled: "var(--_1tjd7xf56)",
                  focus: "var(--_1tjd7xf57)"
                },
                icon: {
                  default: "var(--_1tjd7xf58)",
                  hover: "var(--_1tjd7xf59)",
                  active: "var(--_1tjd7xf5a)",
                  disabled: "var(--_1tjd7xf5b)",
                  focus: "var(--_1tjd7xf5c)"
                }
              }
            },
            pill: {
              primary: {
                background: {
                  default: "var(--_1tjd7xf5d)",
                  hover: "var(--_1tjd7xf5e)",
                  active: "var(--_1tjd7xf5f)",
                  disabled: "var(--_1tjd7xf5g)",
                  focus: "var(--_1tjd7xf5h)"
                },
                text: {
                  default: "var(--_1tjd7xf5i)",
                  hover: "var(--_1tjd7xf5j)",
                  active: "var(--_1tjd7xf5k)",
                  disabled: "var(--_1tjd7xf5l)",
                  focus: "var(--_1tjd7xf5m)"
                },
                border: {
                  default: "var(--_1tjd7xf5n)",
                  hover: "var(--_1tjd7xf5o)",
                  active: "var(--_1tjd7xf5p)",
                  disabled: "var(--_1tjd7xf5q)",
                  focus: "var(--_1tjd7xf5r)"
                },
                icon: {
                  default: "var(--_1tjd7xf5s)",
                  hover: "var(--_1tjd7xf5t)",
                  active: "var(--_1tjd7xf5u)",
                  disabled: "var(--_1tjd7xf5v)",
                  focus: "var(--_1tjd7xf5w)"
                }
              },
              secondary: {
                background: {
                  default: "var(--_1tjd7xf5x)",
                  hover: "var(--_1tjd7xf5y)",
                  active: "var(--_1tjd7xf5z)",
                  disabled: "var(--_1tjd7xf60)",
                  focus: "var(--_1tjd7xf61)"
                },
                text: {
                  default: "var(--_1tjd7xf62)",
                  hover: "var(--_1tjd7xf63)",
                  active: "var(--_1tjd7xf64)",
                  disabled: "var(--_1tjd7xf65)",
                  focus: "var(--_1tjd7xf66)"
                },
                border: {
                  default: "var(--_1tjd7xf67)",
                  hover: "var(--_1tjd7xf68)",
                  active: "var(--_1tjd7xf69)",
                  disabled: "var(--_1tjd7xf6a)",
                  focus: "var(--_1tjd7xf6b)"
                },
                icon: {
                  default: "var(--_1tjd7xf6c)",
                  hover: "var(--_1tjd7xf6d)",
                  active: "var(--_1tjd7xf6e)",
                  disabled: "var(--_1tjd7xf6f)",
                  focus: "var(--_1tjd7xf6g)"
                }
              }
            },
            portraitCard: {
              hoverBlock: {
                type: "var(--_1tjd7xf6h)",
                background: "var(--_1tjd7xf6i)",
                color: "var(--_1tjd7xf6j)",
                buttonText: "var(--_1tjd7xf6k)",
                buttonTextColor: "var(--_1tjd7xf6l)",
                buttonBackground: "var(--_1tjd7xf6m)",
                buttonBackgroundEnd: "var(--_1tjd7xf6n)",
                buttonBorderColor: "var(--_1tjd7xf6o)"
              }
            }
          },
          zIndex: {
            footer: "var(--_1tjd7xf6p)",
            body: "var(--_1tjd7xf6q)",
            card: "var(--_1tjd7xf6r)",
            cardOverlay: "var(--_1tjd7xf6s)",
            badge: "var(--_1tjd7xf6t)",
            game: "var(--_1tjd7xf6u)",
            preroll: "var(--_1tjd7xf6v)",
            displayAds: "var(--_1tjd7xf6w)",
            actionBar: "var(--_1tjd7xf6x)",
            header: "var(--_1tjd7xf6y)",
            overlay: "var(--_1tjd7xf6z)",
            modal: "var(--_1tjd7xf70)",
            modalClose: "var(--_1tjd7xf71)"
          }
        }
    },
    68497: (e, t, l) => {
      "use strict";
      l.d(t, {
        l: () => g,
        b: () => E
      });
      var r = l(95155),
        a = l(26778),
        n = l(12115),
        o = l(79038);
      l(89126);
      var d = "_5lj35w7 _5lj35w0",
        i = "_5lj35w8",
        s = "_5lj35w5 _5lj35w0",
        c = "_5lj35w6 _5lj35w0",
        u = "_5lj35w3 _5lj35w0",
        f = "_5lj35w4 _5lj35w0",
        v = "_5lj35w1 _5lj35w0",
        p = "_5lj35w2 _5lj35w0",
        m = l(21765),
        x = l(48976),
        h = l(85824),
        j = l(86299);
      let g = "fullscreen-unlocked",
        E = ({
          marketingSlotImage: e,
          url: t,
          analyticId: l,
          className: E,
          variant: _ = "mediumHorizontal",
          target: y = "_blank"
        }) => {
          let w = "fullscreen" === l,
            [b, C] = (0, n.useState)(!0),
            {
              openModal: S
            } = (0, h.h)(),
            {
              gameData: R,
              onUnlockModalClose: F,
              onUnlock: A
            } = (0, x.xg)(),
            k = (0, j.p)();
          if ((0, n.useEffect)(() => {
              if (!w) return;
              let e = setTimeout(() => {
                  R?.slug && window.sessionStorage.getItem(`fullscreen_unlock_method_${R.slug}`) && C(!1)
                }, 100),
                t = e => {
                  e.detail?.slug === R?.slug && C(!1)
                };
              return document.addEventListener(g, t), () => {
                clearTimeout(e), document.removeEventListener(g, t)
              }
            }, [w, R?.slug]), w) {
            if (!k || !b) return null;
            let n = [{
              largeHorizontal: s,
              largeVertical: c,
              mediumHorizontal: u,
              mediumVertical: f,
              smallHorizontal: v,
              smallVertical: p,
              extraLargeHorizontal: d
            } [_], E].filter(Boolean).join(" ");
            return b && (0, r.jsx)("div", {
              className: n,
              children: (0, r.jsx)(o.LocalizedLink, {
                href: t,
                target: y,
                onClick: e => {
                  e.stopPropagation(), e.preventDefault(), k && ((0, m.Vc)(l), S("unlock", {
                    origin: `/games/${R?.slug}`
                  }, void 0, {
                    onClose: F || void 0,
                    onUnlock: A || void 0
                  }))
                },
                children: (0, r.jsx)(a.default, {
                  src: e,
                  alt: l,
                  fill: !0,
                  className: i
                })
              })
            })
          }
          let O = [{
            largeHorizontal: s,
            largeVertical: c,
            mediumHorizontal: u,
            mediumVertical: f,
            smallHorizontal: v,
            smallVertical: p,
            extraLargeHorizontal: d
          } [_], E].filter(Boolean).join(" ");
          return (0, r.jsx)("div", {
            className: O,
            "data-sentry-component": "MarketingWidget",
            "data-sentry-source-file": "MarketingWidget.tsx",
            children: (0, r.jsx)(o.LocalizedLink, {
              href: t,
              target: y,
              onClick: e => {
                e.stopPropagation(), (0, m.Vc)(l)
              },
              "data-sentry-element": "LocalizedLink",
              "data-sentry-source-file": "MarketingWidget.tsx",
              children: (0, r.jsx)(a.default, {
                src: e,
                alt: l,
                fill: !0,
                className: i,
                "data-sentry-element": "Image",
                "data-sentry-source-file": "MarketingWidget.tsx"
              })
            })
          })
        }
    },
    77142: (e, t, l) => {
      "use strict";
      l.d(t, {
        t: () => eb
      });
      var r, a, n, o, d, i, s, c, u, f, v, p, m, x, h, j, g, E, _, y, w, b, C, S, R, F, A, k, O, M, L, U, B, P, I, z, G, W, T, D, H, V, N, q = l(95155),
        K = l(12115);

      function J() {
        return (J = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = arguments[t];
            for (var r in l)({}).hasOwnProperty.call(l, r) && (e[r] = l[r])
          }
          return e
        }).apply(null, arguments)
      }
      let Y = function(e) {
        return K.createElement("svg", J({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "currentColor",
          viewBox: "0 0 24 24"
        }, e), r || (r = K.createElement("path", {
          stroke: "currentColor",
          d: "M5 4.99c0-.972 0-1.457.202-1.725a1 1 0 0 1 .738-.395c.335-.02.74.25 1.548.788l10.515 7.01c.668.446 1.002.668 1.118.949a1 1 0 0 1 0 .766c-.116.28-.45.503-1.118.948l-10.515 7.01c-.809.54-1.213.809-1.548.789a1 1 0 0 1-.738-.395C5 20.467 5 19.982 5 19.01z"
        })))
      };

      function $() {
        return ($ = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = arguments[t];
            for (var r in l)({}).hasOwnProperty.call(l, r) && (e[r] = l[r])
          }
          return e
        }).apply(null, arguments)
      }
      let X = function(e) {
        return K.createElement("svg", $({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 25 25"
        }, e), a || (a = K.createElement("g", {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2
        }, K.createElement("path", {
          d: "M12.5 22.5c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10"
        }), K.createElement("path", {
          d: "M10 9.465c0-.477 0-.716.1-.849a.5.5 0 0 1 .364-.199c.166-.012.367.117.769.375l4.72 3.035c.349.224.523.336.583.478a.5.5 0 0 1 0 .39c-.06.142-.234.254-.583.478l-4.72 3.035c-.402.258-.603.387-.769.375a.5.5 0 0 1-.364-.2c-.1-.132-.1-.371-.1-.848z"
        }))))
      };

      function Q() {
        return (Q = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = arguments[t];
            for (var r in l)({}).hasOwnProperty.call(l, r) && (e[r] = l[r])
          }
          return e
        }).apply(null, arguments)
      }
      let Z = function(e) {
        return K.createElement("svg", Q({
          xmlns: "http://www.w3.org/2000/svg",
          width: 18,
          height: 24,
          fill: "none",
          viewBox: "0 0 26 32"
        }, e), n || (n = K.createElement("path", {
          stroke: "#fff",
          strokeWidth: 3,
          d: "M4 5.787c0-1.277 0-1.915.257-2.267.223-.306.565-.496.935-.519.425-.026.937.328 1.962 1.036l13.332 9.213c.846.585 1.27.878 1.417 1.247.13.322.13.684 0 1.006-.147.37-.57.662-1.417 1.247L7.154 25.963c-1.025.708-1.537 1.062-1.962 1.036a1.26 1.26 0 0 1-.935-.52C4 26.129 4 25.49 4 24.214z",
          shapeRendering: "crispEdges"
        })))
      };

      function ee() {
        return (ee = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = arguments[t];
            for (var r in l)({}).hasOwnProperty.call(l, r) && (e[r] = l[r])
          }
          return e
        }).apply(null, arguments)
      }
      let et = function(e) {
        return K.createElement("svg", ee({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none",
          viewBox: "0 0 24 24"
        }, e), o || (o = K.createElement("g", {
          stroke: "#656263",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2
        }, K.createElement("path", {
          d: "M8.4 3H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 3.76 3 4.04 3 4.6v3.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 10 4.04 10 4.6 10h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C10 9.24 10 8.96 10 8.4V4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C9.24 3 8.96 3 8.4 3M19.4 3h-3.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C14 3.76 14 4.04 14 4.6v3.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C14.76 10 15.04 10 15.6 10h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 9.24 21 8.96 21 8.4V4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 3 19.96 3 19.4 3M19.4 14h-3.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C14 14.76 14 15.04 14 15.6v3.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C14.76 21 15.04 21 15.6 21h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 20.24 21 19.96 21 19.4v-3.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 14 19.96 14 19.4 14M8.4 14H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 14.76 3 15.04 3 15.6v3.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.04 21 4.6 21h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C10 20.24 10 19.96 10 19.4v-3.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C9.24 14 8.96 14 8.4 14"
        }))))
      };

      function el() {
        return (el = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = arguments[t];
            for (var r in l)({}).hasOwnProperty.call(l, r) && (e[r] = l[r])
          }
          return e
        }).apply(null, arguments)
      }
      let er = function(e) {
        return K.createElement("svg", el({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none",
          viewBox: "0 0 24 24"
        }, e), d || (d = K.createElement("path", {
          stroke: "currentColor",
          d: "m6 9 6 6 6-6"
        })))
      };

      function ea() {
        return (ea = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = arguments[t];
            for (var r in l)({}).hasOwnProperty.call(l, r) && (e[r] = l[r])
          }
          return e
        }).apply(null, arguments)
      }
      let en = function(e) {
        return K.createElement("svg", ea({
          xmlns: "http://www.w3.org/2000/svg",
          width: 21,
          height: 20,
          fill: "none",
          viewBox: "0 0 21 20"
        }, e), i || (i = K.createElement("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M13.833 3.333c.775 0 1.163 0 1.48.086a2.5 2.5 0 0 1 1.768 1.767c.086.318.086.706.086 1.48v7.667c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.093c-.535.272-1.235.272-2.635.272H7.833c-1.4 0-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.092-1.093c-.273-.534-.273-1.235-.273-2.635V6.667c0-.775 0-1.163.086-1.48a2.5 2.5 0 0 1 1.767-1.768c.318-.086.706-.086 1.48-.086M8 12.5l1.667 1.667 3.75-3.75M8.5 5h4c.467 0 .7 0 .878-.09a.83.83 0 0 0 .364-.365c.091-.178.091-.412.091-.878V3c0-.467 0-.7-.09-.878a.83.83 0 0 0-.365-.364c-.178-.091-.411-.091-.878-.091h-4c-.467 0-.7 0-.878.09a.83.83 0 0 0-.364.365c-.091.178-.091.411-.091.878v.667c0 .466 0 .7.09.878.08.157.208.284.365.364C7.8 5 8.033 5 8.5 5"
        })))
      };

      function eo() {
        return (eo = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = arguments[t];
            for (var r in l)({}).hasOwnProperty.call(l, r) && (e[r] = l[r])
          }
          return e
        }).apply(null, arguments)
      }
      let ed = function(e) {
        return K.createElement("svg", eo({
          xmlns: "http://www.w3.org/2000/svg",
          width: 40,
          height: 40,
          fill: "none",
          viewBox: "0 0 40 40"
        }, e), s || (s = K.createElement("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M30 10 10 30m0-20 20 20"
        })))
      };

      function ei() {
        return (ei = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = arguments[t];
            for (var r in l)({}).hasOwnProperty.call(l, r) && (e[r] = l[r])
          }
          return e
        }).apply(null, arguments)
      }
      let es = function(e) {
        return K.createElement("svg", ei({
          xmlns: "http://www.w3.org/2000/svg",
          width: 12,
          height: 15,
          fill: "none",
          viewBox: "0 0 12 15"
        }, e), c || (c = K.createElement("g", {
          fillRule: "evenodd",
          clipRule: "evenodd"
        }, K.createElement("path", {
          fill: "#28356A",
          d: "m3.366 13.69.229-1.503-.51-.012H.648L2.342 1.079a.15.15 0 0 1 .047-.087.14.14 0 0 1 .09-.034h4.108c1.364 0 2.305.293 2.796.872.23.271.377.555.448.868.075.327.076.719.003 1.197l-.005.034v.306l.23.135q.291.16.467.368c.197.232.325.527.378.877.056.36.038.788-.053 1.273-.106.558-.276 1.043-.505 1.44q-.318.551-.8.906a3.2 3.2 0 0 1-1.076.502c-.397.107-.849.16-1.345.16h-.32a.95.95 0 0 0-.625.238c-.175.156-.29.369-.326.601l-.024.136-.404 2.65-.019.097c-.005.031-.013.047-.025.057a.07.07 0 0 1-.042.016z"
        }), K.createElement("path", {
          fill: "#298FC2",
          d: "M10.278 3.965a8 8 0 0 1-.042.249c-.542 2.874-2.395 3.868-4.762 3.868H4.269a.59.59 0 0 0-.579.512l-.792 5.192a.316.316 0 0 0 .305.368H5.34a.52.52 0 0 0 .508-.448l.021-.112.403-2.64.026-.145a.52.52 0 0 1 .508-.45h.32c2.07 0 3.692-.868 4.166-3.383.197-1.05.095-1.928-.429-2.545a2 2 0 0 0-.585-.466"
        }), K.createElement("path", {
          fill: "#22284F",
          d: "M9.711 3.731a4 4 0 0 0-.527-.12 6.5 6.5 0 0 0-1.062-.08h-3.22a.5.5 0 0 0-.222.051.53.53 0 0 0-.285.397L3.71 8.463l-.02.131a.59.59 0 0 1 .578-.512h1.206c2.367 0 4.22-.994 4.762-3.868q.024-.128.042-.25a3 3 0 0 0-.567-.233"
        }), K.createElement("path", {
          fill: "#28356A",
          d: "M4.395 3.98a.53.53 0 0 1 .285-.397.5.5 0 0 1 .222-.052h3.22q.573-.001 1.062.08a5 5 0 0 1 .527.12l.122.04q.24.081.445.194c.162-1.063-.001-1.786-.557-2.441C9.11.803 8.003.494 6.588.494H2.48a.59.59 0 0 0-.58.513L.187 12.217a.36.36 0 0 0 .349.422h2.536z"
        }))))
      };

      function ec() {
        return (ec = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = arguments[t];
            for (var r in l)({}).hasOwnProperty.call(l, r) && (e[r] = l[r])
          }
          return e
        }).apply(null, arguments)
      }
      let eu = function(e) {
        return K.createElement("svg", ec({
          xmlns: "http://www.w3.org/2000/svg",
          width: 21,
          height: 20,
          fill: "none",
          viewBox: "0 0 21 20"
        }, e), u || (u = K.createElement("path", {
          fill: "currentColor",
          d: "M18.833 6.517a1 1 0 0 0 0-.159l-1.666-4.166a.83.83 0 0 0-.834-.525H4.667a.83.83 0 0 0-.775.525L2.225 6.358a1 1 0 0 0 0 .159.5.5 0 0 0-.058.15A3.33 3.33 0 0 0 3.833 9.5v8a.833.833 0 0 0 .833.833h11.667a.833.833 0 0 0 .834-.833V9.533a3.33 3.33 0 0 0 1.666-2.866.5.5 0 0 0 0-.15m-7.5 10.15H9.666v-3.334h1.667zm4.167 0H13V12.5a.834.834 0 0 0-.834-.833H8.833A.834.834 0 0 0 8 12.5v4.167H5.5V10A3.33 3.33 0 0 0 8 8.85a3.333 3.333 0 0 0 5 0A3.33 3.33 0 0 0 15.5 10zm0-8.334a1.667 1.667 0 0 1-1.667-1.666.833.833 0 1 0-1.667 0 1.667 1.667 0 1 1-3.333 0 .833.833 0 1 0-1.666 0 1.668 1.668 0 1 1-3.334.125l1.4-3.459h10.534l1.4 3.459A1.667 1.667 0 0 1 15.5 8.333"
        })))
      };

      function ef() {
        return (ef = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = arguments[t];
            for (var r in l)({}).hasOwnProperty.call(l, r) && (e[r] = l[r])
          }
          return e
        }).apply(null, arguments)
      }
      let ev = function(e) {
        return K.createElement("svg", ef({
          xmlns: "http://www.w3.org/2000/svg",
          width: 21,
          height: 20,
          fill: "none",
          viewBox: "0 0 21 20"
        }, e), f || (f = K.createElement("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M18.833 8.333H2.167m7.5 3.334H5.5M2.167 6.833v6.334c0 .933 0 1.4.181 1.756.16.314.415.569.729.729.356.181.823.181 1.756.181h11.334c.933 0 1.4 0 1.756-.181.314-.16.569-.415.729-.729.181-.356.181-.823.181-1.756V6.833c0-.933 0-1.4-.181-1.756a1.67 1.67 0 0 0-.729-.729c-.356-.181-.823-.181-1.756-.181H4.833c-.933 0-1.4 0-1.756.181-.314.16-.569.415-.729.729-.181.356-.181.823-.181 1.756"
        })))
      };

      function ep() {
        return (ep = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = arguments[t];
            for (var r in l)({}).hasOwnProperty.call(l, r) && (e[r] = l[r])
          }
          return e
        }).apply(null, arguments)
      }
      let em = function(e) {
        return K.createElement("svg", ep({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 15,
          fill: "none",
          viewBox: "0 0 24 15"
        }, e), v || (v = K.createElement("g", {
          fillRule: "evenodd",
          clipRule: "evenodd"
        }, K.createElement("path", {
          fill: "#ED0006",
          d: "M16.187 14.672c3.886 0 7.036-3.113 7.036-6.952S20.073.768 16.187.768a7.06 7.06 0 0 0-4.564 1.66A7.06 7.06 0 0 0 7.06.769C3.174.768.024 3.88.024 7.72s3.15 6.952 7.035 6.952a7.06 7.06 0 0 0 4.564-1.66 7.06 7.06 0 0 0 4.564 1.66"
        }), K.createElement("path", {
          fill: "#F9A000",
          d: "M11.623 13.011a6.9 6.9 0 0 0 2.472-5.291c0-2.119-.96-4.016-2.472-5.291A7.06 7.06 0 0 1 16.187.768c3.886 0 7.036 3.112 7.036 6.952s-3.15 6.952-7.036 6.952a7.06 7.06 0 0 1-4.564-1.66"
        }), K.createElement("path", {
          fill: "#FF5E00",
          d: "M11.623 13.011a6.9 6.9 0 0 0 2.472-5.291c0-2.119-.96-4.016-2.472-5.291a6.9 6.9 0 0 0-2.472 5.29c0 2.12.96 4.017 2.472 5.292"
        }))))
      };

      function ex() {
        return (ex = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = arguments[t];
            for (var r in l)({}).hasOwnProperty.call(l, r) && (e[r] = l[r])
          }
          return e
        }).apply(null, arguments)
      }
      let eh = function(e) {
        return K.createElement("svg", ex({
          xmlns: "http://www.w3.org/2000/svg",
          width: 36,
          height: 26,
          fill: "none",
          viewBox: "0 0 36 26"
        }, e), p || (p = K.createElement("rect", {
          width: 35.02,
          height: 24.125,
          x: .389,
          y: .938,
          fill: "#fff",
          rx: 4.28
        })), m || (m = K.createElement("rect", {
          width: 35.02,
          height: 24.125,
          x: .389,
          y: .938,
          stroke: "#F2F4F7",
          strokeWidth: .778,
          rx: 4.28
        })), x || (x = K.createElement("path", {
          fill: "#172B85",
          fillRule: "evenodd",
          d: "M11.155 17.004H9.017l-1.602-6.295c-.076-.29-.238-.545-.475-.666a6.8 6.8 0 0 0-1.96-.666v-.242h3.443c.476 0 .832.364.891.787l.832 4.54 2.136-5.327h2.078zm4.393 0h-2.019l1.662-7.87h2.019zm4.273-5.69c.06-.423.416-.665.832-.665.653-.061 1.365.06 1.959.363l.356-1.695a5 5 0 0 0-1.84-.364c-1.959 0-3.384 1.09-3.384 2.603 0 1.15 1.01 1.755 1.722 2.119.771.363 1.068.605 1.009.968 0 .545-.594.787-1.187.787a5 5 0 0 1-2.078-.485l-.356 1.695a5.7 5.7 0 0 0 2.196.424c2.197.06 3.562-1.029 3.562-2.663 0-2.058-2.79-2.179-2.79-3.086m9.855 5.69-1.603-7.87h-1.721a.895.895 0 0 0-.832.606l-2.968 7.263h2.078l.415-1.15h2.553l.238 1.15zm-3.027-5.75.593 2.965H25.58z",
          clipRule: "evenodd"
        })))
      };

      function ej() {
        return (ej = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = arguments[t];
            for (var r in l)({}).hasOwnProperty.call(l, r) && (e[r] = l[r])
          }
          return e
        }).apply(null, arguments)
      }
      let eg = function(e) {
        return K.createElement("svg", ej({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 26,
          fill: "none",
          viewBox: "0 0 24 26"
        }, e), h || (h = K.createElement("g", {
          filter: "url(#a)"
        }, K.createElement("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.67,
          d: "M16 6v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.48 2 13.92 2 12.8 2h-1.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C8 3.52 8 4.08 8 5.2V6m2 5.5v5m4-5v5M3 6h18m-2 0v11.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C16.72 22 15.88 22 14.2 22H9.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C5 19.72 5 18.88 5 17.2V6"
        }))), j || (j = K.createElement("defs", null, K.createElement("filter", {
          id: "a",
          width: 28,
          height: 28,
          x: -2,
          y: -1,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        }, K.createElement("feFlood", {
          floodOpacity: 0,
          result: "BackgroundImageFix"
        }), K.createElement("feColorMatrix", {
          in: "SourceAlpha",
          result: "hardAlpha",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        }), K.createElement("feOffset", {
          dy: 1
        }), K.createElement("feGaussianBlur", {
          stdDeviation: 1
        }), K.createElement("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), K.createElement("feColorMatrix", {
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
        }), K.createElement("feBlend", {
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_18774_263"
        }), K.createElement("feBlend", {
          in: "SourceGraphic",
          in2: "effect1_dropShadow_18774_263",
          result: "shape"
        })))))
      };

      function eE() {
        return (eE = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = arguments[t];
            for (var r in l)({}).hasOwnProperty.call(l, r) && (e[r] = l[r])
          }
          return e
        }).apply(null, arguments)
      }
      let e_ = function(e) {
        return K.createElement("svg", eE({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none",
          viewBox: "0 0 24 24"
        }, e), g || (g = K.createElement("g", {
          filter: "url(#a)"
        }, K.createElement("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.67,
          d: "M20 6 9 17l-5-5"
        }))), E || (E = K.createElement("defs", null, K.createElement("filter", {
          id: "a",
          width: 28,
          height: 28,
          x: -2,
          y: -1,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        }, K.createElement("feFlood", {
          floodOpacity: 0,
          result: "BackgroundImageFix"
        }), K.createElement("feColorMatrix", {
          in: "SourceAlpha",
          result: "hardAlpha",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        }), K.createElement("feOffset", {
          dy: 1
        }), K.createElement("feGaussianBlur", {
          stdDeviation: 1
        }), K.createElement("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), K.createElement("feColorMatrix", {
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
        }), K.createElement("feBlend", {
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_18774_395"
        }), K.createElement("feBlend", {
          in: "SourceGraphic",
          in2: "effect1_dropShadow_18774_395",
          result: "shape"
        })))))
      };

      function ey() {
        return (ey = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = arguments[t];
            for (var r in l)({}).hasOwnProperty.call(l, r) && (e[r] = l[r])
          }
          return e
        }).apply(null, arguments)
      }
      let ew = function(e) {
        return K.createElement("svg", ey({
          xmlns: "http://www.w3.org/2000/svg",
          width: 73,
          height: 64,
          fill: "none",
          viewBox: "0 0 73 64"
        }, e), _ || (_ = K.createElement("path", {
          fill: "url(#a)",
          fillRule: "evenodd",
          d: "M55.154 11.945c-2.569 0-4.628 2.026-4.628 4.512 0 1.787 1.077 3.334 2.626 4.07-1.096 4.145-3.854 9.044-6.574 12.432-2.833 3.518-6.648 5.286-10.483 5.286-3.815 0-7.65-1.768-10.482-5.286-2.72-3.37-5.478-8.287-6.574-12.431 1.55-.737 2.626-2.284 2.626-4.07 0-2.505-2.078-4.513-4.628-4.513s-4.627 2.026-4.627 4.512c0 2.192 1.605 4.034 3.74 4.44-.095 5.303-2.72 14.125-7.216 16.777l2.833 10.203h48.657l2.833-10.203c-4.495-2.652-7.121-11.492-7.215-16.778 2.134-.405 3.74-2.247 3.74-4.439 0-2.504-2.078-4.512-4.628-4.512",
          clipRule: "evenodd"
        })), K.createElement("path", {
          fill: "url(#b)",
          fillRule: "evenodd",
          d: "M59.045 32.61c-3.57.626-7.952-2.413-8.028-6.65-1.284 2.56-2.87 5.047-4.457 7-2.834 3.517-6.649 5.285-10.483 5.285-3.816 0-7.65-1.768-10.483-5.285-1.587-1.971-3.174-4.457-4.458-7-.075 4.237-4.458 7.276-8.027 6.65-1.134 2.21-2.55 4.088-4.232 5.083l2.834 10.203h48.713l2.833-10.203c-1.681-.995-3.098-2.855-4.231-5.084z",
          clipRule: "evenodd",
          style: {
            mixBlendMode: "multiply"
          }
        }), y || (y = K.createElement("path", {
          fill: "url(#c)",
          fillRule: "evenodd",
          d: "M0 17.251c0-.35.34-.829.793-.92a5.45 5.45 0 0 1 3.306.884c1.039.68 2.096 1.915 2.417 3.793l-4.74 1.142z",
          clipRule: "evenodd"
        })), w || (w = K.createElement("path", {
          fill: "url(#d)",
          fillRule: "evenodd",
          d: "M36.077.805c-3.57 0-6.46 2.818-6.46 6.298v1.069h12.92V7.103c0-3.48-2.89-6.298-6.46-6.298",
          clipRule: "evenodd"
        })), b || (b = K.createElement("path", {
          fill: "url(#e)",
          fillRule: "evenodd",
          d: "M72.153 17.251c0-.35-.34-.829-.793-.92a5.45 5.45 0 0 0-3.305.884c-1.04.68-2.097 1.915-2.418 3.793l4.74 1.142z",
          clipRule: "evenodd"
        })), C || (C = K.createElement("path", {
          fill: "url(#f)",
          fillRule: "evenodd",
          d: "M63.786 47.934v7.68c0 .497-.114.92-.378 1.344-2.38 3.904-13.58 6.962-27.312 6.962s-24.933-3.058-27.313-6.962a2.4 2.4 0 0 1-.378-1.344v-7.68c2.74 10.295 52.68 10.295 55.4 0z",
          clipRule: "evenodd"
        })), S || (S = K.createElement("path", {
          fill: "url(#g)",
          fillRule: "evenodd",
          d: "M36.077 1.874c3.57 0 6.46 2.818 6.46 6.299 0 2.578-1.587 4.788-3.854 5.764 1.795 7.956 5.421 18.362 13.373 20.83 6.781 2.1 13.09-3.555 15.13-8.62-1.398-1.27-2.06-3.222-1.55-5.138.738-2.8 3.665-4.475 6.517-3.738-3.475 10.313-6.44 21.216-8.367 31.585-.812 4.383-12.958 7.846-27.71 7.846-14.751 0-26.877-3.444-27.708-7.846C6.44 38.47 3.475 27.547 0 17.252c2.871-.718 5.78.958 6.516 3.739.51 1.915-.15 3.867-1.548 5.138 2.02 5.065 8.348 10.72 15.13 8.62 7.951-2.468 11.559-12.874 13.372-20.83-2.267-.976-3.853-3.186-3.853-5.765 0-3.48 2.89-6.299 6.46-6.299z",
          clipRule: "evenodd"
        })), K.createElement("path", {
          fill: "url(#h)",
          fillRule: "evenodd",
          d: "M13.977 53.406a279 279 0 0 0-4.722-21.401c-1.964-1.694-3.475-3.83-4.287-5.857 1.397-1.27 2.058-3.223 1.548-5.138C5.78 18.21 2.852 16.535 0 17.27c3.475 10.314 6.44 21.217 8.368 31.586.32 1.712 2.36 3.278 5.61 4.567z",
          clipRule: "evenodd",
          style: {
            mixBlendMode: "multiply"
          }
        }), K.createElement("path", {
          fill: "url(#i)",
          fillRule: "evenodd",
          d: "M56.986 35.006a272 272 0 0 0-3.513 19.836c5.76-1.382 9.614-3.444 10.256-5.802 0 0 .038-.147.038-.202 1.926-10.37 4.892-21.29 8.367-31.586-2.87-.718-5.78.958-6.516 3.739-.51 1.915.151 3.867 1.549 5.138-1.53 3.794-5.459 7.92-10.181 8.859z",
          clipRule: "evenodd",
          style: {
            mixBlendMode: "multiply"
          }
        }), K.createElement("path", {
          fill: "url(#j)",
          fillRule: "evenodd",
          d: "M27.464 56.278a334 334 0 0 0-2.154-24.715c-1.492 1.454-3.21 2.578-5.213 3.204-1.7.534-3.362.571-4.949.258 1.568 6.538 2.683 13.15 3.495 19.835 2.606.626 5.572 1.124 8.82 1.437z",
          clipRule: "evenodd",
          style: {
            mixBlendMode: "screen"
          }
        }), K.createElement("path", {
          fill: "url(#k)",
          fillRule: "evenodd",
          d: "M41.063 22.02c-.925 11.529-1.492 23.058-1.36 34.587a90 90 0 0 0 7.404-.608c.643-7.422 1.436-14.862 2.55-22.285-4.042-2.302-6.762-6.85-8.613-11.694z",
          clipRule: "evenodd",
          style: {
            mixBlendMode: "screen"
          }
        }), R || (R = K.createElement("path", {
          fill: "url(#l)",
          fillRule: "evenodd",
          d: "M52.056 34.748c6.781 2.1 13.09-3.555 15.13-8.62-1.077 4.052-4.175 8.97-9.388 10.351-13.052 3.444-18.51-12.763-19.115-22.561 1.795 7.956 5.421 18.362 13.373 20.83",
          clipRule: "evenodd"
        })), F || (F = K.createElement("path", {
          fill: "url(#m)",
          fillRule: "evenodd",
          d: "M20.116 34.748c-6.78 2.1-13.09-3.555-15.13-8.62 1.077 4.052 4.175 8.97 9.388 10.351 13.052 3.444 18.51-12.763 19.115-22.561-1.794 7.956-5.421 18.362-13.373 20.83",
          clipRule: "evenodd"
        })), K.createElement("path", {
          fill: "url(#n)",
          fillRule: "evenodd",
          d: "M13.977 60.568v-7.165c-3.248-1.27-5.288-2.854-5.61-4.567v6.778c0 .497.114.92.378 1.344.812 1.326 2.626 2.56 5.232 3.61",
          clipRule: "evenodd",
          style: {
            mixBlendMode: "multiply"
          }
        }), K.createElement("path", {
          fill: "url(#o)",
          fillRule: "evenodd",
          d: "M18.643 54.84v7.201c2.587.645 5.572 1.142 8.82 1.473v-7.238c-3.248-.313-6.233-.81-8.82-1.436",
          clipRule: "evenodd",
          opacity: .75,
          style: {
            mixBlendMode: "screen"
          }
        }), K.createElement("path", {
          fill: "url(#p)",
          fillRule: "evenodd",
          d: "M39.703 56.608v7.256c2.607-.11 5.081-.313 7.404-.626V56a82 82 0 0 1-7.404.608",
          clipRule: "evenodd",
          opacity: .75,
          style: {
            mixBlendMode: "screen"
          }
        }), K.createElement("path", {
          fill: "url(#q)",
          fillRule: "evenodd",
          d: "M53.473 54.84v7.201c5.08-1.27 8.688-3.057 9.916-5.083a2.4 2.4 0 0 0 .378-1.344v-6.778c-.454 2.431-4.382 4.567-10.313 6.004z",
          clipRule: "evenodd",
          style: {
            mixBlendMode: "multiply"
          }
        }), K.createElement("path", {
          fill: "url(#r)",
          fillRule: "evenodd",
          d: "M61.651 51.453c-4.098 3.076-14.11 5.23-25.782 5.23s-21.684-2.154-25.783-5.23c3.665 3.389 13.846 5.801 25.783 5.801s22.1-2.412 25.782-5.8",
          clipRule: "evenodd",
          opacity: .65,
          style: {
            mixBlendMode: "screen"
          }
        }), K.createElement("path", {
          fill: "url(#s)",
          fillRule: "evenodd",
          d: "M36.077 14.452a6.5 6.5 0 0 1-2.607-.534c-.094.387-.17.774-.283 1.179a6.56 6.56 0 0 0 4.023 1.362c.699 0 1.36-.11 2.002-.313-.189-.755-.378-1.51-.548-2.228a6.5 6.5 0 0 1-2.606.534z",
          clipRule: "evenodd",
          style: {
            mixBlendMode: "multiply"
          }
        }), A || (A = K.createElement("path", {
          fill: "#BE8954",
          fillRule: "evenodd",
          d: "m27.143 36.716 8.934-4.364 8.934 4.364-1.209 14.955-7.725 2.137-7.726-2.137z",
          clipRule: "evenodd"
        })), k || (k = K.createElement("path", {
          fill: "#E6E6E6",
          fillRule: "evenodd",
          d: "m28.295 37.363 7.782-3.812 7.782 3.812-1.096 13.481-6.686 1.86-6.687-1.86z",
          clipRule: "evenodd"
        })), O || (O = K.createElement("path", {
          fill: "url(#t)",
          fillRule: "evenodd",
          d: "m30.977 38.838.83 10.074 4.27 1.179 4.268-1.179.831-10.074-5.1-2.486z",
          clipRule: "evenodd"
        })), M || (M = K.createElement("path", {
          fill: "url(#u)",
          fillRule: "evenodd",
          d: "m29.39 50.845 2.418-1.934-.831-10.074-2.682-1.474z",
          clipRule: "evenodd"
        })), L || (L = K.createElement("path", {
          fill: "url(#v)",
          fillRule: "evenodd",
          d: "m30.977 38.837 5.1-2.487v-2.8l-7.782 3.813z",
          clipRule: "evenodd"
        })), U || (U = K.createElement("path", {
          fill: "url(#w)",
          fillRule: "evenodd",
          d: "m36.077 50.089-4.27-1.179-2.417 1.934 6.687 1.86z",
          clipRule: "evenodd"
        })), B || (B = K.createElement("path", {
          fill: "url(#x)",
          fillRule: "evenodd",
          d: "m42.763 50.845-2.418-1.934.831-10.074 2.683-1.474z",
          clipRule: "evenodd"
        })), P || (P = K.createElement("path", {
          fill: "url(#y)",
          fillRule: "evenodd",
          d: "m41.177 38.837-5.1-2.487v-2.8l7.782 3.813z",
          clipRule: "evenodd"
        })), I || (I = K.createElement("path", {
          fill: "url(#z)",
          fillRule: "evenodd",
          d: "m36.077 50.089 4.268-1.179 2.418 1.934-6.686 1.86z",
          clipRule: "evenodd"
        })), K.createElement("path", {
          fill: "#fff",
          fillRule: "evenodd",
          d: "M33.451 37.07c-1.454.755-3.513 1.197-5.156.294l2.7 1.492 5.1-2.486v-2.8c0 1.492-1.246 2.781-2.625 3.518z",
          clipRule: "evenodd",
          opacity: .65,
          style: {
            mixBlendMode: "screen"
          }
        }), K.createElement("path", {
          fill: "#fff",
          fillRule: "evenodd",
          d: "M37.947 49.997c1.926-.626 4.023.22 4.816.847l-2.418-1.934-4.268 1.179v1.97c0-.976.49-1.62 1.87-2.062",
          clipRule: "evenodd",
          opacity: .45,
          style: {
            mixBlendMode: "screen"
          }
        }), z || (z = K.createElement("path", {
          fill: "url(#A)",
          fillRule: "evenodd",
          d: "m28.295 37.361 7.782-3.812v-1.197l-8.934 4.364z",
          clipRule: "evenodd"
        })), G || (G = K.createElement("path", {
          fill: "url(#B)",
          fillRule: "evenodd",
          d: "m29.39 50.845-1.095-13.482-1.153-.644 1.21 14.954z",
          clipRule: "evenodd"
        })), W || (W = K.createElement("path", {
          fill: "url(#C)",
          fillRule: "evenodd",
          d: "m36.077 52.704-6.687-1.86-1.039.828 7.726 2.137z",
          clipRule: "evenodd"
        })), T || (T = K.createElement("path", {
          fill: "url(#D)",
          fillRule: "evenodd",
          d: "m43.859 37.361-7.782-3.812v-1.197l8.934 4.364z",
          clipRule: "evenodd"
        })), D || (D = K.createElement("path", {
          fill: "url(#E)",
          fillRule: "evenodd",
          d: "m42.763 50.845 1.096-13.482 1.152-.644-1.209 14.954z",
          clipRule: "evenodd"
        })), H || (H = K.createElement("path", {
          fill: "url(#F)",
          fillRule: "evenodd",
          d: "m36.077 52.704 6.686-1.86 1.039.828-7.725 2.137z",
          clipRule: "evenodd"
        })), K.createElement("path", {
          fill: "#FFFCE3",
          fillRule: "evenodd",
          d: "M27.653 36.459c2.53-.074 6.327-1.86 7.895-3.85z",
          clipRule: "evenodd",
          opacity: .7,
          style: {
            mixBlendMode: "screen"
          }
        }), V || (V = K.createElement("path", {
          fill: "url(#G)",
          fillRule: "evenodd",
          d: "M36.077 1.871c3.57 0 6.46 2.818 6.46 6.299 0 3.48-2.89 6.299-6.46 6.299s-6.46-2.818-6.46-6.3c0-3.48 2.89-6.298 6.46-6.298",
          clipRule: "evenodd"
        })), K.createElement("path", {
          fill: "url(#H)",
          fillRule: "evenodd",
          d: "M35.359 2.68c2.72 0 4.93 2.155 4.93 4.807s-2.21 4.807-4.93 4.807-4.93-2.155-4.93-4.807 2.21-4.807 4.93-4.807",
          clipRule: "evenodd",
          style: {
            mixBlendMode: "screen"
          }
        }), K.createElement("path", {
          fill: "url(#I)",
          fillRule: "evenodd",
          d: "M32.375 4.393c1.454-1.418 3.513-1.676 4.627-.607 1.115 1.068.831 3.094-.623 4.512s-3.513 1.676-4.628.608c-1.114-1.087-.83-3.095.624-4.513",
          clipRule: "evenodd",
          style: {
            mixBlendMode: "screen"
          }
        }), K.createElement("path", {
          fill: "url(#J)",
          fillRule: "evenodd",
          d: "M38.986 3.066c1.662 1.032 2.776 2.837 2.776 4.9 0 3.204-2.663 5.8-5.95 5.8a5.9 5.9 0 0 1-2.493-.533c.453.11.944.165 1.435.165 3.4 0 6.14-2.688 6.14-5.985 0-1.713-.737-3.242-1.908-4.347",
          clipRule: "evenodd",
          style: {
            mixBlendMode: "screen"
          }
        }), N || (N = K.createElement("defs", null, K.createElement("radialGradient", {
          id: "b",
          cx: 0,
          cy: 0,
          r: 1,
          gradientTransform: "matrix(44.7086 0 0 43.5935 36.266 3.308)",
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          offset: .51,
          stopColor: "#fff"
        }), K.createElement("stop", {
          offset: .65,
          stopColor: "#F7E0C2"
        }), K.createElement("stop", {
          offset: .95,
          stopColor: "#E6952C"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#E38812"
        })), K.createElement("radialGradient", {
          id: "j",
          cx: 0,
          cy: 0,
          r: 1,
          gradientTransform: "matrix(30.3535 0 0 29.5964 17.66 32.133)",
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#FFF0B0"
        }), K.createElement("stop", {
          offset: 1
        })), K.createElement("radialGradient", {
          id: "k",
          cx: 0,
          cy: 0,
          r: 1,
          gradientTransform: "matrix(46.7674 0 0 45.601 9.369 29.755)",
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#FFF0B0"
        }), K.createElement("stop", {
          offset: 1
        })), K.createElement("radialGradient", {
          id: "o",
          cx: 0,
          cy: 0,
          r: 1,
          gradientTransform: "matrix(21.7593 0 0 21.2166 18.303 53.993)",
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#FFF0B0"
        }), K.createElement("stop", {
          offset: 1
        })), K.createElement("radialGradient", {
          id: "p",
          cx: 0,
          cy: 0,
          r: 1,
          gradientTransform: "matrix(15.904 0 0 15.5073 32.431 60.696)",
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#FFF0B0"
        }), K.createElement("stop", {
          offset: 1
        })), K.createElement("radialGradient", {
          id: "r",
          cx: 0,
          cy: 0,
          r: 1,
          gradientTransform: "matrix(41.2332 0 0 40.2047 35.869 54.345)",
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#FFF0B0"
        }), K.createElement("stop", {
          offset: 1
        })), K.createElement("radialGradient", {
          id: "s",
          cx: 0,
          cy: 0,
          r: 1,
          gradientTransform: "matrix(13.2407 0 0 12.9105 35.208 9.774)",
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#FFA163"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#fff"
        })), K.createElement("radialGradient", {
          id: "t",
          cx: 0,
          cy: 0,
          r: 1,
          gradientTransform: "matrix(18.095 0 0 17.6437 33.961 37.051)",
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#FF8AAF"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#D7001E"
        })), K.createElement("radialGradient", {
          id: "u",
          cx: 0,
          cy: 0,
          r: 1,
          gradientTransform: "matrix(29.938 0 0 29.1912 26.33 37.971)",
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#FF8480"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#F50022"
        })), K.createElement("radialGradient", {
          id: "v",
          cx: 0,
          cy: 0,
          r: 1,
          gradientTransform: "matrix(13.694 0 0 13.3525 30.561 30.162)",
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#FFE3E3"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#FF8A91"
        })), K.createElement("radialGradient", {
          id: "w",
          cx: 0,
          cy: 0,
          r: 1,
          gradientTransform: "matrix(12.9385 0 0 12.6158 29.201 60.384)",
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#EB716D"
        }), K.createElement("stop", {
          offset: .27,
          stopColor: "#E35252"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#CF0008"
        })), K.createElement("radialGradient", {
          id: "x",
          cx: 0,
          cy: 0,
          r: 1,
          gradientTransform: "matrix(15.0917 0 0 14.7153 35.812 37.787)",
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#EB716D"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#CF0008"
        })), K.createElement("radialGradient", {
          id: "y",
          cx: 0,
          cy: 0,
          r: 1,
          gradientTransform: "matrix(22.7793 0 0 22.2111 37.21 32.943)",
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#FF8480"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#F50022"
        })), K.createElement("radialGradient", {
          id: "z",
          cx: 0,
          cy: 0,
          r: 1,
          gradientTransform: "matrix(14.9784 0 0 14.6048 35.416 39.646)",
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#FFE3E3"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#FF8A91"
        })), K.createElement("radialGradient", {
          id: "G",
          cx: 0,
          cy: 0,
          r: 1,
          gradientTransform: "matrix(8.80195 0 0 8.58241 34.018 6.439)",
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#FCCD10"
        }), K.createElement("stop", {
          offset: .22,
          stopColor: "#ECAB08"
        }), K.createElement("stop", {
          offset: .45,
          stopColor: "#DF8D02"
        }), K.createElement("stop", {
          offset: .58,
          stopColor: "#DB8300"
        }), K.createElement("stop", {
          offset: .71,
          stopColor: "#D57C00"
        }), K.createElement("stop", {
          offset: .88,
          stopColor: "#C76B00"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#BA5B00"
        })), K.createElement("radialGradient", {
          id: "H",
          cx: 0,
          cy: 0,
          r: 1,
          gradientTransform: "matrix(10.7286 0 0 10.461 31.997 3.711)",
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#FFE58A"
        }), K.createElement("stop", {
          offset: 1
        })), K.createElement("radialGradient", {
          id: "I",
          cx: 0,
          cy: 0,
          r: 1,
          gradientTransform: "matrix(10.5775 0 0 10.3136 29.73 1.557)",
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#FFE58A"
        }), K.createElement("stop", {
          offset: 1
        })), K.createElement("radialGradient", {
          id: "J",
          cx: 0,
          cy: 0,
          r: 1,
          gradientTransform: "matrix(10.1619 0 0 9.90845 36.435 7.081)",
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#FFE58A"
        }), K.createElement("stop", {
          offset: 1
        })), K.createElement("linearGradient", {
          id: "a",
          x1: 36.077,
          x2: 36.077,
          y1: 47.877,
          y2: 11.945,
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#E86900"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#FC8F00"
        })), K.createElement("linearGradient", {
          id: "c",
          x1: 0,
          x2: 6.516,
          y1: 19.222,
          y2: 19.222,
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#ED8E00"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#FFCB30"
        })), K.createElement("linearGradient", {
          id: "d",
          x1: 36.077,
          x2: 36.077,
          y1: 8.153,
          y2: .805,
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#ED8E00"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#FFCB30"
        })), K.createElement("linearGradient", {
          id: "e",
          x1: 65.637,
          x2: 72.153,
          y1: .805,
          y2: .805,
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#ED8E00"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#FFCB30"
        })), K.createElement("linearGradient", {
          id: "f",
          x1: 8.367,
          x2: 63.786,
          y1: 55.945,
          y2: 55.945,
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          offset: .05,
          stopColor: "#ED9500"
        }), K.createElement("stop", {
          offset: .4,
          stopColor: "#FC0"
        }), K.createElement("stop", {
          offset: .93,
          stopColor: "#B36600"
        })), K.createElement("linearGradient", {
          id: "g",
          x1: 0,
          x2: 72.153,
          y1: 29.279,
          y2: 29.279,
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          offset: .05,
          stopColor: "#ED9500"
        }), K.createElement("stop", {
          offset: .4,
          stopColor: "#FC0"
        }), K.createElement("stop", {
          offset: .93,
          stopColor: "#B36600"
        })), K.createElement("linearGradient", {
          id: "h",
          x1: 0,
          x2: 13.977,
          y1: 35.246,
          y2: 35.246,
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#FFA163"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#fff"
        })), K.createElement("linearGradient", {
          id: "i",
          x1: 53.473,
          x2: 72.153,
          y1: 35.964,
          y2: 35.964,
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#fff"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#FFA163"
        })), K.createElement("linearGradient", {
          id: "l",
          x1: 38.683,
          x2: 67.186,
          y1: 25.447,
          y2: 25.447,
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#ED8E00"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#FFCB30"
        })), K.createElement("linearGradient", {
          id: "m",
          x1: 4.987,
          x2: 33.47,
          y1: 25.447,
          y2: 25.447,
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#FFCB30"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#ED8E00"
        })), K.createElement("linearGradient", {
          id: "n",
          x1: 8.367,
          x2: 1.889,
          y1: 54.693,
          y2: 54.693,
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#FFA163"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#fff"
        })), K.createElement("linearGradient", {
          id: "q",
          x1: 0,
          x2: 63.786,
          y1: 55.448,
          y2: 55.448,
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#fff"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#FFA163"
        })), K.createElement("linearGradient", {
          id: "A",
          x1: 27.142,
          x2: 36.077,
          y1: 34.856,
          y2: 34.856,
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#F5D36C"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#FFF5B0"
        })), K.createElement("linearGradient", {
          id: "B",
          x1: 28.257,
          x2: 28.257,
          y1: 51.673,
          y2: 36.719,
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#ED8E00"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#FFCB30"
        })), K.createElement("linearGradient", {
          id: "C",
          x1: 28.351,
          x2: 36.077,
          y1: 52.336,
          y2: 52.336,
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#A34900"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#F09C00"
        })), K.createElement("linearGradient", {
          id: "D",
          x1: 36.077,
          x2: 45.011,
          y1: 34.856,
          y2: 34.856,
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#F09C00"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#A34900"
        })), K.createElement("linearGradient", {
          id: "E",
          x1: 43.896,
          x2: 43.896,
          y1: 51.673,
          y2: 36.719,
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#A34900"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#F09C00"
        })), K.createElement("linearGradient", {
          id: "F",
          x1: 36.077,
          x2: 43.802,
          y1: 52.336,
          y2: 52.336,
          gradientUnits: "userSpaceOnUse"
        }, K.createElement("stop", {
          stopColor: "#FFBF00"
        }), K.createElement("stop", {
          offset: 1,
          stopColor: "#DB6A00"
        })))))
      };

      function eb({
        name: e,
        width: t = 24,
        height: l = 24,
        ...r
      }) {
        switch (e) {
          case "play":
            return (0, q.jsx)(Y, {
              width: t,
              height: l,
              ...r
            });
          case "play-circle":
            return (0, q.jsx)(X, {
              width: t,
              height: l,
              ...r
            });
          case "play-outlined":
            return (0, q.jsx)(Z, {
              width: t,
              height: l,
              ...r
            });
          case "see_all":
            return (0, q.jsx)(et, {
              width: t,
              height: l,
              ...r
            });
          case "chevron-bottom":
            return (0, q.jsx)(er, {
              width: t,
              height: l,
              ...r
            });
          case "checkmark":
          case "clipboard-check":
            return (0, q.jsx)(en, {
              width: t,
              height: l,
              ...r
            });
          case "close":
            return (0, q.jsx)(ed, {
              width: t,
              height: l,
              ...r
            });
          case "paypal":
            return (0, q.jsx)(es, {
              width: t,
              height: l,
              ...r
            });
          case "shop":
            return (0, q.jsx)(eu, {
              width: t,
              height: l,
              ...r
            });
          case "credit-card":
            return (0, q.jsx)(ev, {
              width: t,
              height: l,
              ...r
            });
          case "mastercard":
            return (0, q.jsx)(em, {
              width: t,
              height: l,
              ...r
            });
          case "visa":
            return (0, q.jsx)(eh, {
              width: t,
              height: l,
              ...r
            });
          case "trash":
            return (0, q.jsx)(eg, {
              width: t,
              height: l,
              ...r
            });
          case "check":
            return (0, q.jsx)(e_, {
              width: t,
              height: l,
              ...r
            });
          case "crown":
            return (0, q.jsx)(ew, {
              width: t,
              height: l,
              ...r
            });
          default:
            return null
        }
      }
    },
    86299: (e, t, l) => {
      "use strict";
      l.d(t, {
        p: () => i
      });
      var r = l(12115),
        a = l(27882),
        n = l(6422),
        o = l(4265),
        d = l(79760);

      function i() {
        let {
          features: e
        } = (0, a.R)(), {
          detectDevice: t
        } = (0, d.i)(), {
          isSubscriber: l
        } = (0, o.sb)(), i = (0, o.w1)(), s = e.core.isRewardedFullscreenABTestEnabled, c = (0, r.useMemo)(() => t(), [t]), u = s && "pc" === c && "loading" !== i && !l, {
          fullscreenRewardedAccessAvailable: f
        } = u ? (0, n.Gt)() : {
          fullscreenRewardedAccessAvailable: !1
        };
        return u && f
      }
    },
    88963: (e, t, l) => {
      "use strict";
      l.d(t, {
        Oj: () => n
      }), l(4906), l(88011), l(89922);
      var r = l(32628),
        a = l(30423);
      r.nL.UserNotFound, r.nL.UserAlreadyExist, r.nL.UserIsNotActive, r.nL.UserIsBanned, r.nL.UserIsSoftDeleted, r.nL.EmailAlreadyUsed, r.nL.UserNameAlreadyUsed, r.nL.EmailOrPasswordIsIncorrect, r.nL.PasswordTooEasy, r.nL.UserOldPasswordIsIncorrect, r.nL.NewAndOldPasswordAreEquals, r.nL.UserPasswordsAreNotEqual, r.nL.UserNotConfirmedError, r.nL.UserEmailConfirmationCodeIsInvalid, r.nL.UserPasswordResetCodeIsInvalid, r.nL.TooManyFailedLoginAttempts, r.nL.CaptchaValidationFailed, r.nL.CaptchaScoreIsTooLow, r.nL.RefreshTokenIsInvalid, r.nL.CountryIsInvalid, r.nL.LanguageIsInvalid, r.nL.EmailSenderEmailContentIsEmpty, r.nL.ExternalProviderError, r.nL.NoEmailChangeRequest, r.nL.EmailChangeRequestCodeIsInvalid, r.nL.UserHasNoActiveSubscriptions, r.nL.SocialPasswordAlreadyExists, r.nL.EmailsShouldMatch, r.nL.ApplicationNotFound, r.nL.ExternalAuthApplicationIsNotAllowed, r.nL.ExternalAuthTokenIsInvalid;
      let n = async (e, t, l) => {
        let r = await (0, a.db)(a.lJ.VALIDATE_PASSWORD, {
          method: "POST",
          body: JSON.stringify({
            currentPassword: e,
            newPassword: t,
            confirmPassword: l
          })
        });
        if (!(r instanceof AbortSignal)) return r.error
      }
    },
    89549: (e, t, l) => {
      "use strict";
      l.d(t, {
        K: () => a,
        w: () => n
      });
      let r = !1,
        a = e => {
          r = e
        },
        n = () => r
    },
    89922: (e, t, l) => {
      "use strict";
      l.d(t, {
        m: () => r
      });
      let r = {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
        Pragma: "no-cache",
        Expires: "0"
      }
    },
    93329: (e, t, l) => {
      "use strict";
      l.d(t, {
        hT: () => r.h
      }), l(54188), l(32628);
      var r = l(79438);
      l(38841), l(17413), l(88963);
      var a = l(25538),
        n = l(29752),
        o = l(67343),
        d = (l(63851), l(52020));
      l(20869), new r.x, new a.C, new n.B, new o.o, d.b
    },
    98618: (e, t, l) => {
      "use strict";
      l.d(t, {
        D: () => d
      });
      var r = l(95155),
        a = l(12115),
        n = l(70448),
        o = l.n(n);
      l(71008);
      let d = ({
        isVisible: e,
        iframeRef: t,
        iframeURL: l,
        setIsIframeCaptchaLoaded: n
      }) => ((0, a.useEffect)(() => {
        let e = e => {
          let l, r;
          "CHANGE_SIZE" === e.data.type && (l = t?.current?.offsetWidth, r = t?.current?.offsetHeight, l && r && t.current && (t.current.style.width = `${l+2}px`, t.current.style.height = `${r+36}px`))
        };
        return window.addEventListener("message", e), () => {
          window.removeEventListener("message", e)
        }
      }, []), (0, r.jsx)("div", {
        className: o()({
          am1usu0: e,
          am1usu3: !e
        }),
        "data-sentry-component": "CaptchaIframe",
        "data-sentry-source-file": "CaptchaIframe.tsx",
        children: (0, r.jsxs)("div", {
          className: o()("am1usu1"),
          children: [(0, r.jsx)("h2", {
            children: (0, r.jsx)("strong", {
              children: "Verify you're human"
            })
          }), (0, r.jsx)("iframe", {
            ref: t,
            onLoad: () => n(!0),
            src: l,
            title: "Recaptcha for Eagle",
            className: "am1usu2"
          })]
        })
      }))
    }
  }
]);