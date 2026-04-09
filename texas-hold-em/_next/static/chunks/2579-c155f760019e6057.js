! function() {
  try {
    var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "de89e9bf-5fc0-490b-accf-6a862f804258", e._sentryDebugIdIdentifier = "sentry-dbid-de89e9bf-5fc0-490b-accf-6a862f804258")
  } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2579], {
    2417: (e, t, r) => {
      r.d(t, {
        Ee: () => s,
        zW: () => o
      });
      var a, s = ((a = {})[a.NOINTERACTION = -1] = "NOINTERACTION", a[a.AUTO = 0] = "AUTO", a[a.FIRST = 1] = "FIRST", a[a.SECOND = 2] = "SECOND", a[a.THIRD = 3] = "THIRD", a[a.FOURTH = 4] = "FOURTH", a[a.OTHER_AUTO = 5] = "OTHER_AUTO", a);
      class o extends Error {
        constructor(e, t) {
          super(e), this.response = t, this.name = "FetchDataError"
        }
      }
    },
    4265: (e, t, r) => {
      r.d(t, {
        Al: () => b,
        Ay: () => A,
        Ij: () => I,
        Q2: () => U,
        UserDataProvider: () => y,
        XI: () => P,
        dj: () => R,
        rB: () => C,
        sb: () => T,
        w1: () => w,
        xV: () => _
      });
      var a = r(95155),
        s = r(12115),
        o = r(30423),
        i = r(17413),
        n = r(14011),
        l = r(88011),
        u = r(27882),
        d = r(41936),
        c = r(33097),
        h = r(21765),
        p = r(32366),
        m = r(19253),
        E = r(52412),
        f = r(6240);
      let g = {
        profile: null,
        authStatus: "loading",
        ui: {
          isLoginModalOpen: !1
        },
        currency: {
          gems: null,
          isLoading: !1
        },
        error: null,
        favoriteGames: null,
        favoriteGamesLoading: !1,
        subscriptions: null
      };

      function v(e, t) {
        switch (t.type) {
          case "SET_PROFILE":
            return {
              ...e, profile: t.payload
            };
          case "UPDATE_PROFILE_DATA":
            return {
              ...e, profile: {
                ...e.profile,
                [t.payload.key]: t.payload.value
              }
            };
          case "SET_AUTH_STATUS":
            return {
              ...e, authStatus: t.payload
            };
          case "SET_LOGIN_MODAL":
            return {
              ...e, ui: {
                ...e.ui,
                isLoginModalOpen: t.payload
              }
            };
          case "SET_GEMS":
            return {
              ...e, currency: {
                ...e.currency,
                gems: t.payload
              }
            };
          case "SET_GEMS_LOADING":
            return {
              ...e, currency: {
                ...e.currency,
                isLoading: t.payload
              }
            };
          case "SET_ERROR":
            return {
              ...e, error: t.payload
            };
          case "LOGOUT":
            return {
              ...e, profile: null, authStatus: "unauthenticated", currency: {
                gems: null,
                isLoading: !1
              }
            };
          case "LOGIN_SUCCESS":
            return {
              ...e, profile: t.payload, authStatus: "authenticated", ui: {
                ...e.ui,
                isLoginModalOpen: !1
              }
            };
          case "SET_FAVORITES":
            return {
              ...e, favoriteGames: t.payload
            };
          case "SET_FAVORITES_LOADING":
            return {
              ...e, favoriteGamesLoading: t.payload
            };
          case "SET_SUBSCRIPTIONS":
            return {
              ...e, subscriptions: t.payload
            };
          default:
            return e
        }
      }
      let S = (0, s.createContext)(void 0),
        y = ({
          children: e
        }) => {
          let t = (0, i.t)(),
            {
              features: r
            } = (0, u.R)(),
            [y, T] = (0, s.useReducer)(v, g),
            A = (0, n.useRouter)(),
            {
              getPageSlug: P,
              currentLocale: w,
              routerReplaceLocalized: _
            } = (0, f.s)(),
            I = (0, d.ef)(),
            [C, U] = (0, s.useState)(null),
            [R, b] = (0, s.useState)(!1);
          (0, s.useEffect)(() => {
            let e = (0, p.Q1)();
            e?.authApi && U(e.authApi)
          }, []);
          let O = "authenticated" === y.authStatus,
            [L, k] = (0, s.useState)(!0),
            G = (0, s.useCallback)(async () => {
              try {
                let e = localStorage.getItem("eagle-access-token"),
                  a = localStorage.getItem("eagle-refresh-token"),
                  s = localStorage.getItem("eagle-expires_in");
                e && a && s ? await fetch(r.core.isTrailingSlashEnabled ? "/api/auth/migration/" : "/api/auth/migration", {
                  method: "POST",
                  body: JSON.stringify({
                    accessToken: e,
                    refreshToken: a,
                    expiresIn: s
                  })
                }) : t.info("[refreshProfile] - No pre-existing access, refresh and expires tokens found");
                let i = await (0, o.db)(`${o.lJ.PROFILE}`, {
                  method: "GET"
                });
                if (!i || i instanceof AbortSignal) return T({
                  type: "SET_AUTH_STATUS",
                  payload: "unauthenticated"
                }), c.y.updateUserProfile({
                  loggedIn: !1
                }), null;
                if ("errorCode" in i) return T({
                  type: "SET_AUTH_STATUS",
                  payload: "unauthenticated"
                }), T({
                  type: "SET_PROFILE",
                  payload: null
                }), c.y.updateUserProfile({
                  loggedIn: !1
                }), null;
                return T({
                  type: "SET_PROFILE",
                  payload: i
                }), T({
                  type: "SET_AUTH_STATUS",
                  payload: "authenticated"
                }), T({
                  type: "SET_SUBSCRIPTIONS",
                  payload: {
                    activeSubscriptions: i.subscriptions?.activeSubscriptions,
                    expiredSubscriptions: i.subscriptions?.expiredSubscriptions,
                    subscriptionID: i.subscriptions?.subscriptionID,
                    subscriptiontype: i.subscriptions?.subscriptiontype
                  }
                }), i
              } catch (e) {
                return t.error({
                  data: e
                }, "[refreshProfile] - Error fetching user data"), T({
                  type: "SET_ERROR",
                  payload: e instanceof Error ? e : Error(String(e))
                }), null
              }
            }, []),
            N = (0, s.useCallback)((e, t) => {
              T({
                type: "UPDATE_PROFILE_DATA",
                payload: {
                  key: e,
                  value: t
                }
              })
            }, []),
            D = (0, s.useCallback)(async () => {
              k(!1);
              try {
                let e = await (0, o.db)(o.lJ.LOGOUT);
                if (e && "errorCode" in e) return t.error({
                  data: {
                    request: o.lJ.LOGOUT,
                    errorCode: e.errorCode,
                    message: e.message
                  }
                }, "[logout] - Error logging out"), e;
                T({
                  type: "LOGOUT"
                }), localStorage.removeItem("eagle-access-token"), localStorage.removeItem("eagle-refresh-token"), localStorage.removeItem("eagle-expires_in"), c.y.updateUserProfile({
                  loggedIn: !1
                }), C?.logout();
                let r = window.location.pathname,
                  a = P(r);
                l.oG.includes(a) && _("/")
              } catch (e) {
                t.error({
                  data: e
                }, "[refreshProfile] - Error fetching user data"), T({
                  type: "SET_ERROR",
                  payload: e instanceof Error ? e : Error(String(e))
                })
              } finally {
                k(!0)
              }
            }, [C, A, w, P]),
            x = (0, s.useCallback)(() => {
              T({
                type: "SET_LOGIN_MODAL",
                payload: !0
              })
            }, []),
            F = (0, s.useCallback)(() => {
              T({
                type: "SET_LOGIN_MODAL",
                payload: !1
              })
            }, []),
            H = (0, s.useCallback)(async () => {
              try {
                T({
                  type: "SET_GEMS_LOADING",
                  payload: !0
                });
                let e = await (0, o.db)(o.lJ.SHOP_GEMS);
                "number" == typeof e && T({
                  type: "SET_GEMS",
                  payload: e
                })
              } catch (e) {
                t.error({
                  data: e
                }, "[fetchGems] - Error fetching gems")
              } finally {
                T({
                  type: "SET_GEMS_LOADING",
                  payload: !1
                })
              }
            }, []);
          (0, s.useEffect)(() => {
            r.auth.enabled && G()
          }, [r.auth.enabled, G]), (0, s.useEffect)(() => {
            O && r.auth.shop.enabled && !R && H()
          }, [r.auth.shop.enabled, O, H, R]);
          let M = (0, s.useCallback)(async () => {
            T({
              type: "SET_FAVORITES_LOADING",
              payload: !0
            });
            try {
              let e = r.core.isTrailingSlashEnabled ? "/api/profile/favoritelist/" : "/api/profile/favoritelist",
                t = await fetch(e, {
                  headers: {
                    cache: "no-store"
                  }
                });
              if (!t.ok) return void(0, i.t)().error({
                data: await t.text()
              }, "[fetchFavoriteGames] - Error fetching favorites:");
              let a = await t.json();
              if (Array.isArray(a)) {
                let e = a.map(e => e.gameKey);
                T({
                  type: "SET_FAVORITES",
                  payload: e
                })
              } else(0, i.t)().error({
                data: a
              }, "[fetchFavoriteGames] - Unexpected response shape")
            } catch (e) {
              (0, i.t)().error({
                data: e
              }, "[fetchFavoriteGames] - Exception in fetchFavoriteGames:")
            } finally {
              T({
                type: "SET_FAVORITES_LOADING",
                payload: !1
              })
            }
          }, []);
          (0, s.useEffect)(() => {
            O && r.auth.isFavoriteGamesEnabled ? M() : T({
              type: "SET_FAVORITES",
              payload: null
            })
          }, [O, M]);
          let B = (0, s.useCallback)(e => {
              b(e?.isFrictionlessLogin ?? !1), F(), G().then(t => {
                if (t) {
                  (0, h.ZR)({
                    Identity: t.uid,
                    loggedIn: !0
                  });
                  let r = !!t.emailRetrievalConsent,
                    a = {};
                  t.name && (a.Name = t.name), t.isEmailConfirmed && (a.registered = !0), a.emailConsent = r, a["MSG-email"] = r, a.loginRegisterType = e.loginRegisterType, a.Email = t.email, c.y.updateUserProfile(a)
                }(0, h.wt)(e.buttonLocation, e.loginRegisterType)
              }), I.clearCaptchaData(), I.resetCaptchaReady(), C?.getSessionStorage().triggerUpdate()
            }, [F, G, I, y.profile]),
            [q, $] = (0, s.useState)(),
            j = (0, s.useCallback)(e => {
              let t = setTimeout(() => {
                $(void 0), clearTimeout(t)
              }, 5e3);
              q?.timeout && clearTimeout(q.timeout), $({
                timeout: t,
                ...e
              })
            }, [q?.timeout]),
            V = (0, s.useMemo)(() => ({
              profile: y.profile,
              isAuthenticated: O,
              gems: y.currency.gems,
              isGemsLoading: y.currency.isLoading,
              fetchGems: H,
              login: x,
              logout: D,
              refreshProfile: G,
              closeLoginModal: F,
              isLoginModalOpen: y.ui.isLoginModalOpen,
              loginSuccess: B,
              isLogoutFinished: L,
              setIsLogoutFinished: k,
              favoriteGames: y.favoriteGames,
              fetchFavoriteGames: M,
              authStatus: y.authStatus,
              favoriteGamesLoading: y.favoriteGamesLoading,
              subscriptions: y.subscriptions,
              setToast: j,
              dispatch: T,
              updateProfileData: N,
              setIsFrictionlessLogin: b
            }), [y.profile, O, y.currency.gems, y.currency.isLoading, H, y.ui.isLoginModalOpen, x, D, G, F, B, L, y.favoriteGames, y.authStatus, y.favoriteGamesLoading, M, y.subscriptions, j, T, N, b]);
          return (0, a.jsxs)(S.Provider, {
            value: V,
            "data-sentry-element": "UserDataContext.Provider",
            "data-sentry-component": "UserDataProvider",
            "data-sentry-source-file": "UserContext.tsx",
            children: [e, q && (0, a.jsx)("div", {
              className: E.l,
              children: (0, a.jsx)(m.y, {
                type: q.type,
                children: q.message
              })
            })]
          })
        },
        T = () => {
          let e = (0, s.useContext)(S);
          if (!e) throw Error("useUserProfile must be used within UserProvider");
          return {
            ...e.profile,
            avatar: e.profile?.avatar || l.k_.filename,
            avatarBackground: e.profile?.avatarBackground || l.Bn
          }
        },
        A = () => {
          let e = (0, s.useContext)(S);
          if (!e) throw Error("useUpdateProfileData must be used within UserProvider");
          return e.updateProfileData
        },
        P = () => {
          let e = (0, s.useContext)(S);
          if (!e) throw Error("useIsAuthenticated must be used within UserProvider");
          return e.isAuthenticated
        },
        w = () => {
          let e = (0, s.useContext)(S);
          if (!e) throw Error("useAuthStatus must be used within UserProvider");
          return e.authStatus
        },
        _ = () => {
          let e = (0, s.useContext)(S);
          if (!e) throw Error("useLoginCallbacks must be used within UserProvider");
          return {
            login: e.login,
            logout: e.logout,
            refreshProfile: e.refreshProfile,
            loginSuccess: e.loginSuccess,
            setIsFrictionlessLogin: e.setIsFrictionlessLogin
          }
        },
        I = () => {
          let e = (0, s.useContext)(S);
          if (!e) throw Error("useGems must be used within UserProvider");
          return {
            gems: e.gems,
            isGemsLoading: e.isGemsLoading,
            fetchGems: e.fetchGems
          }
        },
        C = () => {
          let e = (0, s.useContext)(S);
          if (!e) throw Error("useFavorites must be used within UserProvider");
          return {
            favoriteGames: e.favoriteGames,
            favoriteGamesLoading: e.favoriteGamesLoading,
            fetchFavoriteGames: e.fetchFavoriteGames,
            setFavoriteGames: t => {
              let r = t(e.favoriteGames || []);
              e.dispatch({
                type: "SET_FAVORITES",
                payload: r
              })
            }
          }
        },
        U = () => {
          let e = (0, s.useContext)(S);
          if (!e) throw Error("useSubscriptions must be used within UserProvider");
          return e.subscriptions
        },
        R = () => {
          let e = (0, s.useContext)(S);
          if (!e) throw Error("useToast must be used within UserProvider");
          return {
            setToast: e.setToast
          }
        },
        b = () => {
          let e = (0, s.useContext)(S);
          if (!e) throw Error("useIsLogoutFinished must be used within UserProvider");
          return e.isLogoutFinished
        }
    },
    19253: (e, t, r) => {
      r.d(t, {
        W: () => l,
        y: () => u
      });
      var a, s = r(95155),
        o = r(70448),
        i = r.n(o),
        n = r(52412),
        l = ((a = {}).success = "success", a.error = "error", a.info = "info", a);
      let u = ({
        type: e = "info",
        children: t,
        withIcon: r = !1,
        customClassName: a,
        testId: o
      }) => t ? (0, s.jsx)("div", {
        className: i()(n.o({
          type: e,
          withIcon: r
        }), a),
        "data-testid": o,
        "data-sentry-component": "Toast",
        "data-sentry-source-file": "index.tsx",
        children: t
      }) : null
    },
    20869: (e, t, r) => {
      r.d(t, {
        I: () => s
      });
      var a, s = ((a = {})[a.InvalidRequestData = 1e3] = "InvalidRequestData", a[a.UserNotFound = 1001] = "UserNotFound", a[a.UserAlreadyExist = 1002] = "UserAlreadyExist", a[a.UserIsNotActive = 1003] = "UserIsNotActive", a[a.UserIsBanned = 1004] = "UserIsBanned", a[a.UserIsSoftDeleted = 1005] = "UserIsSoftDeleted", a[a.UserRemovedViaGDPR = 1006] = "UserRemovedViaGDPR", a[a.EmailDoesNotSpecified = 1007] = "EmailDoesNotSpecified", a[a.EmailAlreadyUsed = 1008] = "EmailAlreadyUsed", a[a.UserNameAlreadyUsed = 1009] = "UserNameAlreadyUsed", a[a.RefreshTokenIsInvalid = 1010] = "RefreshTokenIsInvalid", a[a.EmailOrPasswordIsIncorrect = 1011] = "EmailOrPasswordIsIncorrect", a[a.PasswordTooEasy = 1012] = "PasswordTooEasy", a[a.CountryIsInvalid = 1013] = "CountryIsInvalid", a[a.LanguageIsInvalid = 1014] = "LanguageIsInvalid", a[a.UserOldPasswordIsIncorrect = 1015] = "UserOldPasswordIsIncorrect", a[a.NewAndOldPasswordAreEquals = 1016] = "NewAndOldPasswordAreEquals", a[a.UserPasswordsAreNotEqual = 1017] = "UserPasswordsAreNotEqual", a[a.UserNotConfirmedError = 1018] = "UserNotConfirmedError", a[a.UserEmailConfirmationCodeIsInvalid = 1019] = "UserEmailConfirmationCodeIsInvalid", a[a.UserPasswordResetCodeIsInvalid = 1020] = "UserPasswordResetCodeIsInvalid", a[a.TooManyFailedLoginAttempts = 1021] = "TooManyFailedLoginAttempts", a[a.CaptchaValidationFailed = 1022] = "CaptchaValidationFailed", a[a.CaptchaScoreIsTooLow = 1023] = "CaptchaScoreIsTooLow", a[a.EmailSenderGeneralError = 2e3] = "EmailSenderGeneralError", a[a.EmailSenderEmailContentIsEmpty = 2001] = "EmailSenderEmailContentIsEmpty", a[a.ExternalProviderError = 2002] = "ExternalProviderError", a[a.NoEmailChangeRequest = 2003] = "NoEmailChangeRequest", a[a.EmailChangeRequestCodeIsInvalid = 2004] = "EmailChangeRequestCodeIsInvalid", a[a.UserHasNoActiveSubscriptions = 2005] = "UserHasNoActiveSubscriptions", a[a.SocialPasswordAlreadyExists = 2006] = "SocialPasswordAlreadyExists", a[a.EmailsShouldMatch = 2007] = "EmailsShouldMatch", a[a.ApplicationNotFound = 2008] = "ApplicationNotFound", a[a.ExternalAuthApplicationIsNotAllowed = 2009] = "ExternalAuthApplicationIsNotAllowed", a[a.ExternalAuthTokenIsInvalid = 2010] = "ExternalAuthTokenIsInvalid", a)
    },
    25538: (e, t, r) => {
      r.d(t, {
        C: () => s
      });
      var a = r(94854);
      class s {
        setServer(e) {
          if (!e) throw Error("Please, provide server Url");
          this.server = e
        }
        saveCredential(e) {}
        makeRequest(e, t, r = null, s = "", o = "", i) {
          if (!this.server) throw Error("No server url provided");
          let n = new Headers({
            "Content-Type": "application/json",
            cache: "no-store"
          });
          return s && n.append("Authorization", `Bearer ${s}`), o && n.append("recaptcha", o), i && n.append("recaptcha-mode", i), (0, a.x)(this.server.toString() + t, {
            method: e,
            headers: n,
            ...r ? {
              body: JSON.stringify({
                ...r
              })
            } : {}
          })
        }
        doPost(e, t, r = "") {
          let a = t.captchaToken || "",
            s = t.captchaMode || void 0;
          return delete t.captchaToken, delete t.captchaMode, this.makeRequest("POST", e, t, r, a, s)
        }
        doPatch(e, t, r = "") {
          return this.makeRequest("PATCH", e, t, r)
        }
        doDelete(e, t, r = "") {
          return this.makeRequest("DELETE", e, t, r)
        }
        doGet(e, t = "") {
          return this.makeRequest("GET", e, null, t)
        }
        getUserProfile(e) {
          return this.doGet("user", e)
        }
        updateUser(e, t) {
          return this.doPatch("user", {
            ...e
          }, t)
        }
        getUserByEmail(e) {
          return this.doGet(`user/email/${e}`)
        }
        generateUserName() {
          return this.doGet("user/generate")
        }
        checkUserName(e) {
          return this.doPost("user/check-name", {
            ...e
          })
        }
        changeEmailRequest(e, t) {
          return this.doPost("user/email/request", {
            ...e,
            changeEmailFormUrl: e.changeEmailFormUrl ? e.changeEmailFormUrl.toString() : void 0
          }, t)
        }
        changeEmailConfirm(e) {
          return this.doPost("user/email/confirm", {
            ...e
          })
        }
        softDelete(e) {
          return this.doDelete("user", null, e)
        }
        gdprDelete(e) {
          return this.doDelete("user/gdpr", null, e)
        }
      }
    },
    29752: (e, t, r) => {
      r.d(t, {
        B: () => s
      });
      var a = r(94854);
      class s {
        setServer(e) {
          if (!e) throw Error("Please, provide server Url");
          this.server = e
        }
        saveCredential(e) {}
        makeRequest(e, t, r = null, s = "") {
          if (!this.server) throw Error("No server url provided");
          return (0, a.x)(this.server.toString() + t, {
            method: e,
            ...s ? {
              headers: {
                Authorization: `Bearer ${s}`,
                cache: "no-store"
              }
            } : {},
            ...r ? {
              body: JSON.stringify({
                ...r
              })
            } : {}
          })
        }
        doPost(e, t, r = "") {
          return this.makeRequest("POST", e, t, r)
        }
        doPatch(e, t, r = "") {
          return this.makeRequest("PATCH", e, t, r)
        }
        doGet(e, t = "") {
          return this.makeRequest("GET", e, null, t)
        }
        getCountries(e) {
          return this.doGet("dictionary/country", e)
        }
        getLanguages(e) {
          return this.doGet("dictionary/language", e)
        }
      }
    },
    30423: (e, t, r) => {
      let a;
      r.d(t, {
        lJ: () => h,
        Fd: () => c,
        db: () => p,
        HX: () => m
      });
      var s, o = r(38841),
        i = r(88011);
      r(54674);
      var n = r(17413),
        l = r(2417);
      let u = 43200 * ("development" !== (0, o.env)("NEXT_PUBLIC_BUILD_ENV")),
        d = {
          ...(s = new Headers({
            "X-Geo-App": "Arena5"
          }), a = {
            next: {
              revalidate: u
            },
            headers: new Headers
          }, s && s.forEach((e, t) => {
            a.headers.set(t, e)
          }), a),
          cache: "no-store"
        },
        c = async (e, t = {}, r = !1) => {
          let a = (0, n.t)();
          try {
            let s = performance.now(),
              i = AbortSignal.timeout(1e4),
              n = new URL(e),
              u = "true" === (0, o.env)("NEXT_PUBLIC_TOGGLE_TRAILING_SLASH_ENABLED") ? e.replace(n.pathname, `${n.pathname}/`) : e,
              d = await fetch(u, {
                ...t,
                signal: i
              }),
              c = performance.now() - s;
            if (c > 5e3 && a.warn({
                data: {
                  url: e,
                  duration: c
                }
              }, "[fetchData] - Fetching data from dependencies took more than 5 seconds"), 401 === d.status) throw Error("Unauthorized, please check your API key");
            if (404 === d.status)
              if (r) throw new l.zW(`Resource not found: ${e}`, d);
              else throw Error(`Resource not found: ${e}`);
            if (204 !== d.status && d.ok && d.body) return await d.json();
            throw a.error({
              data: {
                url: e,
                status: d.status,
                content: await d.text()
              }
            }, "[fetchData] - Failed to fetch data"), Error(`Unknown error occurred while fetching data from ${e} with status ${d.status}`)
          } catch (t) {
            if (t instanceof Error)
              if ("TimeoutError" === t.name) throw a.error({
                data: {
                  url: e
                }
              }, "[fetchData] - Request took more than 10 seconds and was timed out"), Error(`Request timed out for: ${e}`);
              else if ("AbortError" === t.name) throw a.error({
              data: {
                url: e
              }
            }, "[fetchData] - Request was aborted"), Error(`Request timed out for: ${e}`);
            else if (t instanceof l.zW) throw t;
            else throw a.error({
              data: t
            }, `[fetchData] - Error fetching data from ${e}`), t;
            throw a.error({
              data: t
            }, `[fetchData] - Unknown error occurred while fetching data from ${e}`), Error(`Unknown error occurred while fetching data from ${e}`)
          }
        }, h = {
          DOMAIN: "/api/domain",
          ARENA_FEATURES: "/api/features",
          REGISTER: "/api/register",
          AUTH_BY_EMAIL: "/api/auth/email",
          AUTH_BY_GOOGLE: "/api/auth/google",
          AUTH_BY_FACEBOOK: "/api/auth/facebook",
          OPENWEB_LOGIN: "/api/auth/openweb",
          LOGOUT: "/api/auth/logout",
          RESEND_EMAIL: "/api/auth/email/resend",
          CHANGE_PASSWORD: "/api/auth/password/change",
          CHANGE_PASSWORD_BY_CODE: "/api/auth/password/reset/confirm",
          RESET_PASSWORD: "/api/auth/password/reset",
          VALIDATE_PASSWORD: "/api/auth/password/validate",
          PROFILE: "/api/profile",
          VIRTUAL_ITEMS_SPENT: "/api/profile/virtual-items-spent",
          GET_FAVORITE: "/api/profile/get/favorite",
          DELETE_FAVORITE: "/api/profile/delete/favorite",
          SHOP_GEMS: "/api/shop/gems",
          LEADERBOARD_DATA: "/api/leaderboard",
          LEADERBOARD_HIGH_SCORE: "/api/leaderboard/user-high-score",
          SHOP_PURCHASE: "/api/shop/purchase",
          SHOP_PURCHASE_SUBSCRIPTION: "/api/shop/purchase-subscription",
          SHOP_SUBSCRIPTION: "/api/shop/subscription",
          GAME_DATA_BY_SLUG: "/api/game/game-data-by-slug",
          GET_USER_RATING: "/api/game-rating/user"
        };
      async function p(e, t, r, a, s) {
        var l;
        let u, d, c = (0, n.t)(),
          p = "";
        p = window.location.origin;
        try {
          p = e.startsWith("http") ? "" : window.location.origin
        } catch (e) {
          c.error({
            data: e
          }, "[fetchInternalRoute] - Error building base URL:")
        }
        let m = p ? new URL(e, p) : new URL(e);
        s && (m.protocol = s);
        {
          let e = new URL(window.location.href),
            t = [h.AUTH_BY_EMAIL, h.AUTH_BY_GOOGLE, h.AUTH_BY_FACEBOOK, h.REGISTER];
          e.searchParams.has(i.b_.LOW_SCORE_CAPTCHA) && t.includes(m.pathname) && m.searchParams.set(i.b_.LOW_SCORE_CAPTCHA, "true"), e.searchParams.has(i.b_.BYPASS_CAPTCHA) && t.includes(m.pathname) && m.searchParams.set(i.b_.BYPASS_CAPTCHA, "true")
        }
        let E = new AbortController,
          f = a ? (l = E.signal, u = new AbortController, d = () => u.abort(), l.addEventListener("abort", d), a.addEventListener("abort", d), u.signal.addEventListener("abort", () => {
            l.removeEventListener("abort", d), a.removeEventListener("abort", d)
          }), u.signal) : E.signal,
          g = setTimeout(() => E.abort(), 1e4);
        try {
          let e = "true" === (0, o.env)("NEXT_PUBLIC_TOGGLE_TRAILING_SLASH_ENABLED") ? m.toString().replace(m.pathname, `${m.pathname}/`) : m,
            r = await fetch(e, {
              ...t,
              signal: f
            }).then(e => e.json()).then(e => e && e && "object" == typeof e && 0 === Object.keys(e).length ? null : e);
          return clearTimeout(g), r
        } catch (e) {
          return clearTimeout(g), e instanceof Error ? "AbortError" === e.name ? c.error(`[fetchInternalRoute] - Request timed out or aborted for: ${m}`) : c.error({
            data: e
          }, `[fetchInternalRoute] - Error fetching data from ${m}`) : c.error(`[fetchInternalRoute] - Unknown error occurred while fetching data from ${m}`), f
        }
      }(0, o.env)("NEXT_PUBLIC_BUILD_ENV");
      let m = async () => await c((0, o.env)("NEXT_PUBLIC_GEO_SERVICE_URL"), d)
    },
    32366: (e, t, r) => {
      r.d(t, {
        Q1: () => n
      });
      var a = r(32628);
      r(79438);
      var s = r(38841);
      class o {
        constructor(e) {
          const t = {
            server: new URL(e)
          };
          this.authApi = new a.aA(t)
        }
      }
      let i = null,
        n = () => {
          let e = (0, s.env)("NEXT_PUBLIC_EAGLE_USER_API");
          if (!e) throw Error("[getClientEagleLoginService]: NEXT_PUBLIC_EAGLE_USER_API configuration is missing");
          return i || (i = new o(e)), i
        }
    },
    32628: (e, t, r) => {
      r.d(t, {
        aA: () => h,
        nL: () => d.I
      });
      var a = r(79438),
        s = r(25538),
        o = r(29752),
        i = r(67343),
        n = r(63851),
        l = r(52020),
        u = r(82330),
        d = r(20869);
      let c = {
        1: {
          auth: new a.x,
          managment: new s.C,
          dictionary: new o.B,
          userFavoriteGame: new i.o
        }
      };
      class h extends l.b {
        constructor(e) {
          if (super(), !e.server) throw Error("Please, provide server Url");
          this.server = e.server, this.uiManager = {
            setState: e => {},
            onStateChange: () => {},
            show: () => {},
            hide: () => {},
            isVisible: () => !1
          }, this.sessionStorage = new u.ClientSessionStorageProxy
        }
        getAuthApi(e) {
          return Object.keys(c[e]).forEach(t => {
            c[e][t].setServer(this.server)
          }), Promise.resolve(c[e])
        }
        getUserGameDataApi(e) {
          return new n.k(e)
        }
        async getToken() {
          return await this.sessionStorage.getToken()
        }
        async restoreState() {
          this.sessionStorage.restoreState()
        }
        checkAuthorization() {
          this.sessionStorage.isAuthorised()
        }
        getSessionStorage() {
          return this.sessionStorage
        }
        openWidget() {
          this.uiManager.setState(!0)
        }
        closeWidget() {
          this.uiManager.setState(!1)
        }
        logout() {
          this.sessionStorage.logout()
        }
      }
    },
    40562: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var a = r(79481);
      let s = (0, a.createServerReference)("403dc7dd0847a9b66939ff5662c3b7bfe4197cdfc3", a.callServer, void 0, a.findSourceMapURL, "updateAuthCookies")
    },
    41936: (e, t, r) => {
      r.d(t, {
        Gf: () => a.Gf,
        Tv: () => a.Tv,
        ef: () => a.ef
      });
      var a = r(81414)
    },
    52020: (e, t, r) => {
      r.d(t, {
        b: () => a
      });
      class a {
        addEventListener(e, t) {
          this.events[e] ? this.events[e].push(t) : this.events[e] = [t]
        }
        removeEventListener(e, t) {
          this.events[e] && (this.events[e] = this.events[e].filter(e => e !== t))
        }
        fire(e, t) {
          (this.events[e] || []).forEach(e => e(t))
        }
        constructor() {
          this.events = {}
        }
      }
    },
    52412: (e, t, r) => {
      r.d(t, {
        l: () => s,
        o: () => o
      }), r(59437);
      var a = r(1721),
        s = "_9076pj6",
        o = (0, a.c)({
          defaultClassName: "_9076pj1 _9076pj0",
          variantClassNames: {
            type: {
              info: "_9076pj2",
              error: "_9076pj3",
              success: "_9076pj4"
            },
            withIcon: {
              false: "_9076pj5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        })
    },
    63851: (e, t, r) => {
      r.d(t, {
        k: () => s
      });
      var a = r(94854);
      class s {
        constructor(e) {
          this.apiRoot = e.apiRoot || "https://arenacloud.cdn.arkadiumhosted.com/uup-api-user-data-dev/api/v1"
        }
        makeRequest(e, t, r, s = "") {
          return (0, a.x)(t, {
            method: e,
            ...s ? {
              headers: {
                Authorization: `Bearer ${s}`,
                cache: "no-store"
              }
            } : {},
            ...r ? {
              body: JSON.stringify({
                ...r
              })
            } : {}
          })
        }
        get(e, t, r) {
          let a = `${this.apiRoot}/user-data/game/${e}/${t}`;
          return this.makeRequest("GET", a, null, r)
        }
        save(e, t, r, a) {
          let s = `${this.apiRoot}/user-data/game/${e}/${t}`;
          return r && !r.etag && delete r.etag, this.makeRequest("POST", s, r, a)
        }
        delete(e, t, r, a) {
          let s = `${this.apiRoot}/user-data/game/${e}/${t}?etag=${r}`;
          return this.makeRequest("DELETE", s, null, a)
        }
        getKeys(e, t) {
          let r = `${this.apiRoot}/user-data-key/game/${e}`;
          return this.makeRequest("GET", r, null, t)
        }
      }
    },
    67343: (e, t, r) => {
      r.d(t, {
        o: () => s
      });
      var a = r(94854);
      class s {
        setServer(e) {
          if (!e) throw Error("Please, provide server Url");
          this.server = e
        }
        saveCredential(e) {}
        makeRequest(e, t, r = null, s = "") {
          if (!this.server) throw Error("No server url provided");
          return (0, a.x)(this.server.toString() + t, {
            method: e,
            ...s ? {
              headers: {
                Authorization: `Bearer ${s}`,
                cache: "no-store"
              }
            } : {},
            ...r ? {
              body: JSON.stringify({
                ...r
              })
            } : {}
          })
        }
        doPost(e, t, r = "") {
          return this.makeRequest("POST", e, t, r)
        }
        doPatch(e, t, r = "") {
          return this.makeRequest("PATCH", e, t, r)
        }
        doDelete(e, t, r = "") {
          return this.makeRequest("DELETE", e, t, r)
        }
        doGet(e, t = "") {
          return this.makeRequest("GET", e, null, t)
        }
        getUserFavoriteGames(e) {
          return this.doGet("user-favorite-game", e)
        }
        addFavoriteGame(e, t) {
          return this.doPost("user-favorite-game", {
            ...e
          }, t)
        }
        deleteFavoriteGame(e, t) {
          return this.doDelete(`user-favorite-game/${e}`, null, t)
        }
      }
    },
    79438: (e, t, r) => {
      r.d(t, {
        h: () => l,
        x: () => u
      });
      var a, s = r(94854),
        o = r(40562),
        i = r(17413),
        n = r(93555),
        l = ((a = {}).EmailPassword = "EmailPassword", a.Facebook = "Facebook", a.Google = "Google", a.HSN = "HSN", a);
      class u {
        setServer(e) {
          if (!e) throw Error("Please, provide server Url");
          this.server = e
        }
        makeRequest(e, t, r, a = "", o = "", i) {
          if (!this.server) throw Error("No server url provided");
          let n = new Headers({
            "Content-Type": "application/json",
            cache: "no-store"
          });
          return a && n.append("Authorization", `Bearer ${a}`), o && n.append("recaptcha", o), i && n.append("recaptcha-mode", i), (0, s.x)(this.server.toString() + t, {
            method: e,
            headers: n,
            body: JSON.stringify({
              ...r
            })
          })
        }
        doPost(e, t, r = "") {
          let a = t.captchaToken || "",
            s = t.captchaMode || void 0;
          return delete t.captchaToken, delete t.captchaMode, this.makeRequest("POST", e, t, r, a, s)
        }
        registerViaEmail(e) {
          return this.doPost("auth/register", {
            ...e,
            registrationPlaceUrl: e.registrationPlaceUrl ? e.registrationPlaceUrl.toString() : void 0
          })
        }
        loginViaEmail(e) {
          return this.doPost("auth/login", {
            ...e,
            registrationPlaceUrl: e.registrationPlaceUrl ? e.registrationPlaceUrl.toString() : void 0
          }).then(e => ((0, o.v)(e), e))
        }
        loginViaApple(e) {
          return this.doPost("auth/login/apple", {
            ...e,
            registrationPlaceUrl: e.registrationPlaceUrl ? e.registrationPlaceUrl.toString() : void 0
          }).then(e => ((0, o.v)(e), e.payload))
        }
        loginViaUsat(e) {
          return this.doPost("auth/login/usat", {
            ...e,
            registrationPlaceUrl: e.registrationPlaceUrl ? e.registrationPlaceUrl.toString() : void 0
          }).then(e => ((0, o.v)(e), e.payload))
        }
        loginViaHsn(e) {
          return this.doPost("auth/login/hsn", {
            ...e,
            registrationPlaceUrl: e.registrationPlaceUrl ? e.registrationPlaceUrl.toString() : void 0
          }).then(e => ((0, o.v)(e), e.payload))
        }
        resendConfirmation(e) {
          return this.doPost("auth/email/resend-confirmation", {
            ...e
          })
        }
        confirmUser(e) {
          return this.doPost("auth/email/confirm", {
            ...e
          })
        }
        checkPasswordComplexity(e) {
          return this.doPost("auth/password/check-complexity", {
            ...e
          })
        }
        changePassword(e, t) {
          return this.doPost("auth/password/change", {
            ...e
          }, t)
        }
        getFacebookButton() {
          return "https://login.arkadium.com/arenax-connect/azure.facebook.next.index.html"
        }
        getGoogleButton() {
          return "https://login.arkadium.com/arenax-connect/azure.google.next.index.html"
        }
        async refreshToken(e) {
          let t = (0, i.t)();
          return await (0, s.x)(this.server?.toString() + "auth/refresh-token", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${e.access_token}`,
              cache: "no-store"
            },
            body: JSON.stringify({
              refreshToken: e.refresh_token
            })
          }).then(r => {
            let a = (0, n.s)(e.access_token),
              s = (0, n.s)(r.access_token);
            if (a.email !== s.email) throw t.error({
              data: {
                oldUniqueName: a.unique_name,
                newUniqueName: s.unique_name
              }
            }, "[AuthApi] - token renewal failed"), Error("Token renewal failed");
            return r
          }).catch(e => {
            throw t.error({
              data: e
            }, "[AuthApi] - token renewal failed"), e
          })
        }
        async getToken(e) {
          return 1e3 * e.expires_in <= Date.now() + 18e5 ? await this.refreshToken(e) : (e.expires_in - 10) * 1e3 > Date.now() ? Promise.resolve(e) : "" === e.access_token || "" === e.refresh_token ? Promise.reject(Error("Refresh token is empty!")) : await this.refreshToken(e)
        }
        constructor() {
          this.tokenDeffered = null
        }
      }
    },
    79760: (e, t, r) => {
      r.d(t, {
        UserAgentProvider: () => c,
        b: () => u,
        i: () => h
      });
      var a, s = r(95155),
        o = r(12115),
        i = r(89368),
        n = r(56818),
        l = r(17413),
        u = ((a = {}).DESKTOP = "pc", a.TABLET = "tablet", a.MOBILE = "mobile", a);
      let d = (0, o.createContext)(void 0),
        c = ({
          children: e
        }) => {
          let t = (0, o.useMemo)(() => [n.Ym, n.oz, n.UH, n.M9, n.jl, n.uC, n.aj, n.Yx], []),
            r = (0, o.useMemo)(() => (0, i.O)(t), [t]),
            [a, u] = (0, o.useState)(null);
          (0, o.useEffect)(() => {
            try {
              (0, i.O)(t).withFeatureCheck().withClientHints().then(e => {
                u(e)
              })
            } catch (e) {
              (0, l.t)().error({
                data: e
              }, "[UserAgentProvider] - Failed to get OS info")
            }
          }, [t]);
          let c = (0, o.useMemo)(() => {
              let e = a?.os || r.os || {};
              return {
                device: {
                  ...r.device,
                  vendor: a?.device?.vendor || r.device?.vendor || "unknown",
                  model: a?.device?.model || r.device?.model || "unknown",
                  type: a?.device?.type || r.device?.type || "pc"
                },
                os: e,
                cpu: a?.cpu || r.cpu || {},
                browser: a?.browser || r.browser || {}
              }
            }, [r, a]),
            h = (0, o.useCallback)(() => c.device?.vendor === "Apple" && c.device?.model === "iPad", [c]),
            p = (0, o.useCallback)(() => c.os?.name === "iOS", [c]),
            m = (0, o.useCallback)(() => c.device?.type === "mobile" || c.device?.model === "iPhone" ? "mobile" : "tablet" === c.device.type || "Kindle" === c.device.vendor || h() || c.os?.name === "Windows" && c.cpu?.architecture === "arm64" ? "tablet" : "pc", [c, h]),
            E = {
              browser: c.browser,
              os: c.os,
              detectDevice: m,
              isNotPc: () => ["tablet", "mobile"].includes(m()),
              isDesktop: () => "pc" === m(),
              isTablet: () => "tablet" === m(),
              isMobile: () => "mobile" === m(),
              isPad: h,
              isIOS: p,
              model: c.device?.model || "unknown"
            };
          return (0, s.jsx)(d.Provider, {
            value: E,
            "data-sentry-element": "UserAgentContext.Provider",
            "data-sentry-component": "UserAgentProvider",
            "data-sentry-source-file": "userAgentContext.tsx",
            children: e
          })
        },
        h = () => {
          let e = (0, o.useContext)(d);
          if (void 0 === e) throw Error("useDeviceDetector must be used within a UserAgentProvider");
          return e
        }
    },
    81414: (e, t, r) => {
      r.d(t, {
        FE: () => u,
        Gf: () => h,
        Tv: () => c,
        ef: () => p
      });
      var a, s, o, i = r(12115),
        n = r(27882),
        l = r(17413),
        u = ((a = {}).PurchaseSubscription = "PurchaseSub", a.PurchaseSubscriptionByEmail = "PurchaseSubByEmail", a.PurchaseItem = "PurchaseItem", a),
        d = ((s = {}).SIGN_IN = "SignIn", s.SIGN_UP = "SignUp", s.PASSWORD_RESET = "PasswordReset", s.CONFIRMATION_RESEND = "ResendConfirmation", s.GAME_VOTE_SUBMIT = "GameVoteSubmit", s),
        c = ((o = {}).CHALLENGE = "challenge", o);
      let h = {
          ...d,
          ...u
        },
        p = e => {
          let t = (0, i.useRef)(null),
            {
              features: {
                auth: {
                  captcha: r
                }
              }
            } = (0, n.R)(),
            [a, s] = (0, i.useState)(!1),
            [o, u] = (0, i.useState)(!1),
            [d, c] = (0, i.useState)(void 0),
            [h, p] = (0, i.useState)(null),
            [m, E] = (0, i.useState)(null),
            [f, g] = (0, i.useState)(!1),
            [v, S] = (0, i.useState)(!1),
            [y, T] = (0, i.useState)(void 0),
            [A] = (0, i.useState)(() => {
              let t = r?.url ?? "";
              return t && e ? `${t}?instanceId=${encodeURIComponent(e)}` : t
            }),
            P = (0, i.useCallback)(r => {
              t.current && A && t.current?.contentWindow?.postMessage({
                ...r,
                ...e ? {
                  instanceId: e
                } : {}
              }, A)
            }, []),
            w = (0, i.useCallback)(() => {
              c(void 0), p(null)
            }, []),
            _ = (0, i.useCallback)(() => {
              P({
                type: "ABORT_CAPTCHA_LOADING"
              })
            }, [P]);
          return (0, i.useEffect)(() => {
            let t = t => {
              let r = t.data;
              if (!e || r.instanceId === e) switch (r.type) {
                case "CAPTCHA_LOADED":
                  S(r.payload);
                  break;
                case "SEND_CAPTCHA_TOKEN":
                  E(r.payload.action), r.payload.token ? c(r.payload.token) : p("Captcha loading error, try again"), g(!1);
                  break;
                case "CHALLENGE_CAPTCHA_TOKEN":
                  r.payload ? (c(r.payload), u(!1)) : p("Captcha loading error, try again"), g(!1)
              }
            };
            return window.addEventListener("message", t), () => window.removeEventListener("message", t)
          }, []), (0, i.useEffect)(() => {
            !a || v || o || P({
              type: "LOAD_CAPTCHA",
              payload: r?.key ?? ""
            })
          }, [a, o, P, v]), (0, i.useEffect)(() => {
            a && o && m && P({
              type: "LOAD_CHALLENGE_CAPTCHA",
              payload: {
                key: r?.challengeKey ?? "",
                action: m
              }
            })
          }, [a, o, m, P]), {
            iframeURL: A,
            iframeRef: t,
            setIsIframeCaptchaLoaded: s,
            getCaptchaToken: e => {
              v ? (g(!0), w(), E(e), P({
                type: "GET_CAPTCHA_TOKEN",
                payload: {
                  key: r?.key ?? "",
                  action: e
                }
              })) : (0, l.t)().error("[useCaptcha::getCaptchaToken] - captcha is not ready")
            },
            captchaToken: d,
            setCaptchaToken: c,
            recaptchaAction: m,
            setRecaptchaAction: E,
            clearCaptchaData: () => {
              c(void 0), E(null), u(!1), g(!1), p(null), T(void 0)
            },
            showChallengeRecaptcha: o,
            setShowChallengeRecaptcha: u,
            isCaptchaPending: f,
            setIsCaptchaPending: g,
            clearCaptchaToken: w,
            abortCaptchaLoading: _,
            resetCaptchaReady: () => {
              S(!1), s(!1)
            },
            captchaTokenError: h,
            reloadRecaptcha: () => {
              P({
                type: "RELOAD_RECAPTCHA"
              })
            },
            captchaMode: y,
            setCaptchaMode: T
          }
        }
    },
    82330: (e, t, r) => {
      r.d(t, {
        ClientSessionStorageProxy: () => l,
        i: () => n
      });
      var a = r(40562),
        s = r(83226),
        o = r(38841);
      let i = "canvas-box",
        n = async () => {
          if ("true" !== (0, o.env)("NEXT_PUBLIC_TOGGLE_AUTH_ENABLED")) return {
            AccessToken: "",
            RefreshToken: "",
            ExpiresIn: 0
          };
          let e = (0, o.env)("NEXT_PUBLIC_TOGGLE_TRAILING_SLASH_ENABLED"),
            t = await fetch(e ? "/api/auth/" : "/api/auth");
          return await t.json()
        };
      class l {
        constructor() {
          this._isAuthorised = !1, this.updateCb = [], this.iframeBaseURL = "https://arenacloud.cdn.arkadiumhosted.com", this.handleMessageFromIframe = e => {
            if ("string" == typeof e?.data && e?.data?.startsWith("subscribe")) {
              let t = this.getIframeRef();
              t && t?.id === i && this.triggerUpdate(void 0, e.origin)
            }
          }, this.getIframeRef = () => document.querySelector(`iframe#${i}`), this.triggerUpdate = async (e, t) => {
            let r = e || await n();
            this._isAuthorised = !!r.AccessToken;
            let a = this.getIframeRef();
            a && (a.contentWindow?.postMessage(JSON.stringify({
              type: "token-exchange",
              data: r
            }), t || a.src), this.updateCb.forEach(e => e()))
          }, this.handleMessageFromIframe = this.handleMessageFromIframe.bind(this), s.S || window.addEventListener("message", this.handleMessageFromIframe)
        }
        destroy() {
          window.removeEventListener("message", this.handleMessageFromIframe), this.updateCb = []
        }
        async getToken() {
          return (await n()).AccessToken
        }
        checkAuthStatus() {
          this.triggerUpdate()
        }
        isAuthorised() {
          return this._isAuthorised
        }
        async update(e) {
          await (0, a.v)(e)
        }
        onUpdate(e) {
          this.updateCb.push(e)
        }
        async logout() {
          this.triggerUpdate({
            AccessToken: "",
            RefreshToken: "",
            ExpiresIn: 0
          })
        }
        async getAuthDataForIframe() {
          return await n()
        }
      }
    },
    85824: (e, t, r) => {
      r.d(t, {
        ModalProvider: () => u,
        h: () => d
      });
      var a = r(95155),
        s = r(12115),
        o = r(14011),
        i = r(6240);
      let n = (0, s.createContext)(void 0),
        l = {
          shop: ["id"],
          subscribe: ["id"],
          support: ["activeTab", "origin"],
          avatar: [],
          "sign-up": [],
          unlock: ["origin", "insufficientGems"],
          addToHomeScreen: []
        },
        u = ({
          children: e
        }) => {
          let [t, r] = (0, s.useState)(null), [u, d] = (0, s.useState)(null), [c, h] = (0, s.useState)(), [p, m] = (0, s.useState)(!1), E = (0, o.useSearchParams)(), f = (0, o.usePathname)(), {
            navigateTo: g
          } = (0, i.s)(), v = E.get("modal"), S = (0, s.useRef)(null), y = (0, s.useRef)(null), T = (0, s.useRef)(!1), A = (0, s.useRef)(void 0), P = () => {
            if (S.current) try {
              S.current()
            } finally {
              S.current = null
            }
          };
          (0, s.useEffect)(() => {
            if (v) {
              r(v), h(e => {
                let t = A.current ?? e ?? "direct";
                return A.current = void 0, t
              });
              let e = l[v] || [],
                t = {};
              e.forEach(e => {
                let r = E.get(e);
                r && (t[e] = r)
              }), d(Object.keys(t).length ? t : null)
            } else r(null), d(null), h(void 0), T.current ? T.current = !1 : P()
          }, [v, E]);
          let w = e => {
            g(f, {
              query: e
            })
          };
          return (0, a.jsx)(n.Provider, {
            value: {
              type: t,
              modalParams: u,
              setModalParams: d,
              openModal: (e, a, s, o) => {
                let i = new URLSearchParams(E.toString());
                t && l[t] && l[t].forEach(e => i.delete(e)), i.set("modal", e), A.current = s, a ? (Object.entries(a).forEach(([e, t]) => {
                  i.set(e, t)
                }), d(a)) : d(null), r(e), w(i), P(), S.current = o?.onClose ?? null, y.current = o?.onUnlock ?? null
              },
              closeModal: () => {
                let e = new URLSearchParams(E.toString());
                t && l[t] && l[t].forEach(t => e.delete(t)), e.delete("modal"), r(null), d(null), A.current = void 0, T.current = !0, w(e), h(void 0), m(!1), P()
              },
              modalButtonLocation: c,
              onUnlock: y.current,
              isRewardActive: p,
              setIsRewardActive: m
            },
            "data-sentry-element": "ModalContext.Provider",
            "data-sentry-component": "ModalProvider",
            "data-sentry-source-file": "ModalContext.tsx",
            children: e
          })
        };

      function d() {
        let e = (0, s.useContext)(n);
        if (void 0 === e) throw Error("useModal must be used within a ModalProvider");
        return e
      }
    },
    94854: (e, t, r) => {
      r.d(t, {
        x: () => o
      });
      var a = r(17413);
      let s = ["POST", "PATCH"],
        o = (e, t) => ((t = t || {}).headers = t.headers || {
          "Content-Type": "application/json"
        }, t.headers["Content-Type"] || -1 === s.indexOf(t.method.toUpperCase()) || (t.headers["Content-Type"] = "application/json"), fetch(e, t).then(t => t.text().then(r => {
          let s;
          try {
            s = JSON.parse(r)
          } catch (t) {
            (0, a.t)().error({
              data: {
                url: e,
                error: t
              }
            }, "[fetchJson] - Failed to parse response as JSON")
          }
          if (t.status >= 200 && t.status < 300) return s || r;
          {
            let e = new i(t);
            throw s && (s = Array.isArray(s) ? s[0] : s), e.body = s || r, e
          }
        })));
      class i extends Error {
        constructor(e) {
          super(`${e.status} - ${e.statusText} for ${e.url}`), this.name = "HttpError", this.response = e
        }
      }
    }
  }
]);