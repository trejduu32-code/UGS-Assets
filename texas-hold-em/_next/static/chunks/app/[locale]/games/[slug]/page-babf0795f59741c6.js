! function() {
  try {
    var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "14f09f44-bed5-4ec8-98bf-b07c5b63bfe0", e._sentryDebugIdIdentifier = "sentry-dbid-14f09f44-bed5-4ec8-98bf-b07c5b63bfe0")
  } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4515], {
    1019: (e, t, a) => {
      "use strict";
      a.d(t, {
        Cq: () => m,
        Fu: () => o,
        HM: () => r,
        Wx: () => s,
        _R: () => i,
        i7: () => n,
        w3: () => c,
        wn: () => d,
        xD: () => l
      }), a(87245);
      var r = "b2y4py4",
        s = "b2y4py5",
        n = "b2y4py6",
        l = "b2y4py9",
        i = "b2y4py2",
        o = "b2y4py7",
        d = "b2y4py0",
        c = "b2y4py3",
        m = "b2y4py1"
    },
    5909: (e, t, a) => {
      "use strict";
      a.d(t, {
        T: () => n
      });
      var r = a(12115),
        s = a(30423);
      let n = () => ({
        fetchLeaderboardDataApi: (0, r.useCallback)(async (e, t, a) => {
          let r = new URLSearchParams({
            slug: e,
            timeOffset: a?.toString() ?? new Date().getTimezoneOffset().toString()
          });
          t && r.append("userId", t);
          let n = await (0, s.db)(`${s.lJ.LEADERBOARD_DATA}?${r.toString()}`);
          if ("errorCode" in n) throw Error(Array.isArray(n.message) ? n.message.join(", ") : n.message ?? "Unknown error");
          return n
        }, [])
      })
    },
    7907: (e, t, a) => {
      "use strict";
      a.d(t, {
        default: () => k
      });
      var r = a(95155),
        s = a(38174);
      a(19389);
      var n = a(12115),
        l = a(91277);
      a(89664);
      var i = a(99016),
        o = a(4265),
        d = a(67838),
        c = a(96526),
        m = a(43487),
        u = a(11966),
        h = a(17413),
        g = a(30423),
        p = a(27882),
        f = a(85824);
      let b = `
	.spcv_conversation-view {
		margin: 0 0 1px !important;
	}
	.spcv_commentsCounter {
		margin-left: 16px !important;
	}
	.spcv_username-wrapper .spcv_username {
		color: white !important;
	}


	div[data-spot-im-class=message-text] span[class*=richie-entities__mention__]{
		font-weight: 900;
	}

	div[class^=richie-editor__controls__] > button[type=button]:hover {
		color: black !important;
	}
	div[class^=richie-editor__controls__] > label[class^=richie-editor__controlButton__]:hover {
		color: black !important;
	}
	div[class^=richie-editor__toolbar__] > button[role=menuitemcheckbox]:hover {
		color: black !important;
	}
	div.spcv_toastStyling Toast__textContainer--11-5-4 {
		color: black !important;
	}
	div[class^=richie-editor__toolbar__] > button[class*=richie-editor__isActive__] svg {
		fill: black !important;
	}
	
	span[class*=UnseenBadge__counter]{
		color: black !important;
	}
		
	span[class*=spcv_typingContainer] > span[class*=Typography__text--]{
		color: white !important;
	}
	/* comment being typed animation */
	span[class*=spcv_typing-animation]{
		display: none !important;
	}

	/* Input placeholder colors */
	div.ProseMirror p.is-editor-empty:first-child::before {
		color: rgba(7, 7, 7, 0.65) !important;
	}
	div.ProseMirror:focus p.is-editor-empty:first-child::before {
		color: rgba(7, 7, 7, 0.3) !important;
	}
	/* New comment notification toast */
	.spcv_toast-new-comment-container {
		color: black !important;
		fill: black !important;
	}
	.spcv_toast-new-comment-container * {
		color: black !important;
		fill: black !important;
	}
	/* users dropdown when writing @ on comment */
	ul[class*=richie-editor__suggestionsList__] span[class*=richie-editor__displayName__], ul[class*=richie-editor__suggestionsList__] span[class*=richie-editor__username__]{
		color: black !important;
	}
`,
        x = `
	/* Exclamation bell svg on notification dropdown logged out user */
	div[class^=ExclamationBell__] > div[class*=SvgProvider__][class*=ExclamationBell__bell] {
		color: black !important;
	}
	div[class^=ExclamationBell__] > div[class*=SvgProvider__][class*=ExclamationBell__exclamation] {
		color: ${(0,c.us)(d.themeVars.components.button.filled.background.default,d.themeVars.colors.primary)} !important;
	}
	div[class^=ExclamationBell__] ~ button[class*=Button__button--] {
		color: white !important;
		background: ${(0,c.us)(d.themeVars.components.button.filled.background.default,d.themeVars.colors.primary)} !important;
		border-radius: 999px !important;
	}

	span.components-MessageActions-components-VoteButtons-partials-users-list-index__displayName {
		color: black !important;
	}
	/* Color of link shared notification toast */
	div[class*=Toast__toastContainer] span.Typography__l6--11-5-4 {
		color: black !important;
	}
	/* Radio button border on report modal */
	input[class*=RadioButton__radioInput] {
		border-color: black !important;
	}
	input[class*=RadioButton__radioInput]:checked {
		background-color: black !important;
	}
	div[class*=ReportReasonModal__radioBtnText] span {
		color: black !important;
	}
	/* ... menu on notification panel */ 
	button[class*=Header__menuButton--] > span[class*=Button__contentWrapper]{
		color: black !important;
	}
	time[data-spot-im-class=message-timestamp] {
		color: black !important;
	}

	/* notification item label */
	span[class*=NotificationDescription__descriptionText]{
		color: black !important;
	}
	button[class*=NotificationItem__isRead] span[class*=NotificationDescription__descriptionText]{
		color: rgba(7,7,7,0.65) !important;
	}
	
	/* join the community button for logged off users attempting to like a comment */
	div[class*=Modal__bodyContainer--] button[class*=Button__button--]{
		color: white !important;
		background: ${(0,c.us)(d.themeVars.components.button.filled.background.default,d.themeVars.colors.primary)} !important;
		border-radius: 999px !important;
	}
`,
        v = `${Object.entries({"--spotim-font-size-username":"var(--_1tjd7xf14)","--spotim-font-family-product-header":"var(--font-family-main-readex-pro)","--spotim-font-family-username":"var(--font-family-main-readex-pro)","--spotim-font-family-date-format":"var(--font-family-main-readex-pro)","--spotim-font-family-action":"var(--font-family-main-readex-pro)","--spotim-font-family-t3":"var(--font-family-main-readex-pro)","--spotim-font-family-t4":"var(--font-family-main-readex-pro)","--spotim-font-family-t5":"var(--font-family-main-readex-pro)","--spotim-font-family-t6":"var(--font-family-main-readex-pro)","--spotim-pitc-header-margin-top":0,"--spotim-text-color-product-header":"white","--spotim-text-color-username":"white","--spotim-text-color-date-format":"white","--spotim-text-color-action":"white","--spotim-text-color-t3":"white","--spotim-text-color-t4":"white","--spotim-text-color-t5":"white","--spotim-text-color-t6":"white","--spotim-color-scheme-l5":"white","--spotim-color-scheme-g1":"white","--spotim-text-color-muted":"white","--spotim-brand-color":"white","--spotim-background-color-primary-button":"white","--spotim-brand-text-color":"black","--spotim-ads-footer-color":"white"}).map(([e,t])=>`
      $ {
        e
      }: $ {
        t
      }
      `).join(";")};`, y = ({
        postId: e,
        updateCommentsCount: t
      }) => {
        let [a, s] = (0, n.useState)(!1), [d, c] = (0, n.useState)(void 0), y = (0, n.useRef)(null), {
          uid: _,
          name: w,
          avatar: j
        } = (0, o.sb)(), S = (0, o.w1)(), {
          features: {
            auth: {
              openWeb: E
            }
          }
        } = (0, p.R)(), {
          logout: N
        } = (0, o.xV)(), {
          openModal: k
        } = (0, f.h)(), A = async () => {
          if (_?.length) try {
            await (0, l.zz)({
              userId: _,
              performBEDHandshakeCallback: T
            })
          } catch (e) {
            (0, h.t)().error({
              data: e
            }, "[Openweb] - Error logging in to Openweb")
          }
        };
        (0, n.useEffect)(() => {
          window.SPOTIM && s(!0), c(window.location.href)
        }, []), (0, n.useEffect)(() => {
          let e = new MutationObserver(e => {
            for (let t of e.filter(e => e))
              if (0 !== t.addedNodes.length)
                for (let e of t.addedNodes) {
                  if (e.nodeType !== Node.ELEMENT_NODE || !e.shadowRoot?.querySelector("[data-openweb-style-wrapper=true]")) continue;
                  let t = document.createElement("style");
                  t.textContent = `:host { ${v} } ${x}`, e.shadowRoot?.appendChild(t)
                }
          });
          return y.current && e.observe(y.current, {
            subtree: !1,
            attributes: !1,
            childList: !0
          }), () => {
            e.disconnect()
          }
        }, [y]), (0, n.useEffect)(() => {
          "unauthenticated" === S ? (0, l.ri)().catch(e => {
            (0, h.t)().error({
              data: e
            }, "[Openweb] - Error logging out of Openweb")
          }) : A().catch(e => {
            (0, h.t)().error({
              data: e
            }, "[Openweb] - Error logging in to Openweb")
          })
        }, [y, S]);
        let T = async e => {
          try {
            return (0, g.Fd)(new URL(g.lJ.OPENWEB_LOGIN, window.location.origin).toString(), {
              method: "POST",
              body: JSON.stringify({
                code_a: e,
                uid: _,
                user_name: w,
                imageUrl: j
              })
            }).then(e => e && "string" == typeof e ? e : "").catch(e => ((0, h.t)().error({
              data: e
            }, "[Openweb::performBEDHandshakeCallback] - Failed to handshake Openweb."), ""))
          } catch (e) {
            return (0, h.t)().error({
              data: e
            }, "[Openweb::performBEDHandshakeCallback] - Fatal error performing handshake"), Promise.resolve("")
          }
        }, C = E.key;
        return C ? (0, r.jsx)("div", {
          id: "openweb-container",
          ref: y,
          className: "_17i829i0",
          "data-sentry-component": "Openweb",
          "data-sentry-source-file": "index.tsx",
          children: (0, r.jsxs)(l.yo, {
            spotId: C,
            tracking: {
              "spot-im-api-ready": () => {
                s(!0), _ && A().catch(e => {
                  (0, h.t)().error({
                    data: e
                  }, "[Openweb] - Error logging in to Openweb")
                })
              },
              "spot-im-conversation-loaded": () => {},
              "spot-im-recirculation-loaded": () => {
                let e = y.current.querySelector("[data-spotim-module=pitc]"),
                  t = e?.firstChild,
                  a = document.createElement("style");
                a.textContent = `:host {
							--spotim-pitc-header-margin-top: 0 !important;
						}`, t?.shadowRoot?.appendChild(a)
              },
              "spot-im-conversation-viewed": () => {
                let e = y.current.querySelector("[data-spotim-module=conversation]"),
                  t = e?.firstChild,
                  a = document.createElement("style");
                a.textContent = b, t?.shadowRoot?.appendChild(a);
                let r = document.body.querySelector("[open-web-ui-components-menus]"),
                  s = document.createElement("style");
                s.textContent = `.spotim-light { ${v} } ${x}`, r?.shadowRoot?.appendChild(s)
              },
              "spot-im-login-start": () => {
                k("sign-up", void 0, "openweb")
              },
              "spot-im-user-logout": async () => {
                if (_) try {
                  await N()
                } catch (e) {
                  (0, h.t)().error({
                    data: e
                  }, "[Openweb] - Failed to re-establish Openweb session:")
                }
              },
              "spot-im-current-user-sent-message-succeed": () => {
                t()
              }
            },
            "data-sentry-element": "OpenWebProvider",
            "data-sentry-source-file": "index.tsx",
            children: [!a && (0, r.jsx)("div", {
              className: "_17i829i1",
              children: (0, r.jsx)(m.y, {
                size: u.Y.LARGE
              })
            }), a && d && (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(i.tH, {
                onError: () => {
                  y.current.dataset.pitc = "loaded"
                },
                children: (0, r.jsx)(l.h8, {
                  postId: e,
                  postUrl: d
                })
              }), (0, r.jsx)(l.sy, {
                postId: e,
                postUrl: d
              })]
            })]
          })
        }) : ((0, h.t)().error("[Openweb] - Openweb key not found in env."), null)
      };
      var _ = a(77142),
        w = a(21765),
        j = a(24408),
        S = a(88058);
      let E = new(a(47345)).L,
        N = (0, j.NV)((e, t) => (0, w.tS)({
          analyticsParams: e,
          generalAnalytics: E,
          eventName: "openWebDrawer",
          isNonInteraction: !1,
          eventAction: S.bi.CLICK,
          customDimensions: t
        }));

      function k({
        openWebPostId: e
      }) {
        let [t, a] = (0, n.useState)(0), [l, i] = (0, n.useState)(!0), [o, d] = (0, n.useState)(!1), {
          features: c
        } = (0, p.R)(), h = c.auth.openWeb.enabled, g = c.auth.openWeb.key, f = (0, n.useCallback)(() => {
          h && g && fetch(`https://api-2-0.spot.im/v1.0.0/messages-count?spot_id=${g}&posts_ids=${e}`, {
            headers: {
              "Content-Type": "application/json",
              "x-spot-id": g ?? ""
            }
          }).then(e => e.json()).then(t => {
            let r = `${g}_${e}`;
            a(t.counts[r].comments + t.counts[r].replies)
          }).catch(() => {
            a(0)
          }).finally(() => {
            i(!1)
          })
        }, [h, g, e]);
        if ((0, n.useEffect)(() => {
            f()
          }, [e, h, g]), !h || !g) return null;
        let b = t > 0 ? `${t} comments` : "Comments";
        if (1 === t && (b = "1 Comment"), t >= 1e3) {
          let e = t / 1e3,
            a = e.toFixed(1),
            r = a.endsWith(".0") ? Math.round(e).toString() : a;
          b = `${r}K comments`
        }
        return (0, r.jsxs)(s._s.Root, {
          direction: "right",
          handleOnly: !0,
          modal: !1,
          dismissible: !0,
          open: o,
          onOpenChange: d,
          autoFocus: !0,
          "data-sentry-element": "VaulDrawer.Root",
          "data-sentry-component": "OpenWebDrawer",
          "data-sentry-source-file": "index.tsx",
          children: [(0, r.jsx)(s._s.Trigger, {
            className: "wezlnt1",
            onClick: () => {
              d(!0), N({
                postId: e
              })
            },
            "data-sentry-element": "VaulDrawer.Trigger",
            "data-sentry-source-file": "index.tsx",
            children: l ? (0, r.jsx)(m.y, {
              size: u.Y.SMALL
            }) : b
          }), (0, r.jsxs)(s._s.Portal, {
            "data-sentry-element": "VaulDrawer.Portal",
            "data-sentry-source-file": "index.tsx",
            children: [o && (0, r.jsx)("div", {
              className: "wezlnt0",
              onClick: () => d(!1)
            }), (0, r.jsxs)(s._s.Content, {
              className: "wezlnt2",
              onCloseAutoFocus: e => {
                e.preventDefault()
              },
              onInteractOutside: e => {
                e.currentTarget.classList.contains("ark-ui-search") && d(!1)
              },
              "data-sentry-element": "VaulDrawer.Content",
              "data-sentry-source-file": "index.tsx",
              children: [(0, r.jsxs)("div", {
                className: "wezlnt3",
                children: [(0, r.jsx)(s._s.Title, {
                  hidden: !0,
                  "data-sentry-element": "VaulDrawer.Title",
                  "data-sentry-source-file": "index.tsx",
                  children: "Open Web"
                }), (0, r.jsx)(s._s.Close, {
                  className: "wezlnt4",
                  asChild: !0,
                  onClick: () => d(!1),
                  "data-sentry-element": "VaulDrawer.Close",
                  "data-sentry-source-file": "index.tsx",
                  children: (0, r.jsx)("button", {
                    className: "wezlnt6",
                    children: (0, r.jsx)(_.t, {
                      name: "close",
                      width: 40,
                      height: 40,
                      "data-sentry-element": "OldIcon",
                      "data-sentry-source-file": "index.tsx"
                    })
                  })
                })]
              }), (0, r.jsx)("div", {
                className: "wezlnt5",
                tabIndex: 1,
                children: (0, r.jsx)(y, {
                  postId: e,
                  updateCommentsCount: f,
                  "data-sentry-element": "Openweb",
                  "data-sentry-source-file": "index.tsx"
                })
              })]
            })]
          })]
        })
      }
    },
    14059: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        BottomRail: () => p
      });
      var r = a(95155),
        s = a(97265),
        n = a(9482),
        l = a(49572),
        i = a(70448),
        o = a.n(i),
        d = a(1019),
        c = a(48976),
        m = a(60921),
        u = a(79760);
      let h = {
          "data-id": "footer_ad_large",
          product: "arena",
          dimensions: (0, s.E)([n.X.AD_728x90], !1)
        },
        g = {
          "data-id": "footer_ad_small",
          product: "arena",
          dimensions: (0, s.E)([n.X.AD_320x50])
        },
        p = ({
          mobileAds: e
        }) => {
          let {
            isFullscreen: t
          } = (0, c.xg)(), a = (0, m.MM)(), {
            isMobile: s
          } = (0, u.i)();
          if ("off" === e || t) return null;
          let n = window.innerWidth,
            i = o()({
              "footer_ad--bottom": "bottom" === e || !e,
              "footer_ad--top": "top" === e
            }),
            p = "landscape" === a && s();
          return (0, r.jsx)("div", {
            "data-testid": "bottom-ads",
            style: {
              minHeight: "50px"
            },
            className: o()(d.Wx, i),
            "data-sentry-component": "BottomRail",
            "data-sentry-source-file": "BottomRail.tsx",
            children: n >= 1024 ? (0, r.jsx)("div", {
              "data-testid": "desktop-ads",
              children: (0, r.jsx)(l.default, {
                adOptions: h,
                className: d.i7
              })
            }) : n >= 810 && n < 1024 || !(n < 360) && n < 810 || p ? (0, r.jsx)("div", {
              "data-testid": "mobile-ads",
              children: (0, r.jsx)(l.default, {
                adOptions: g,
                className: d.i7
              })
            }) : null
          })
        }
    },
    15370: (e, t, a) => {
      "use strict";
      a.d(t, {
        GameTabs: () => g
      });
      var r = a(95155),
        s = a(12115),
        n = a(80180);
      a(60661);
      var l = "ukf96c6",
        i = "ukf96c5",
        o = a(27882),
        d = a(70448),
        c = a.n(d),
        m = a(48976);
      let u = ({
          aboutContentText: e,
          gameName: t
        }) => (0, r.jsxs)("div", {
          className: "ukf96c4",
          "data-testid": "about",
          "data-sentry-component": "AboutContent",
          "data-sentry-source-file": "index.tsx",
          children: [(0, r.jsxs)("h2", {
            className: i,
            children: ["About ", t]
          }), "" !== e ? (0, r.jsx)("div", {
            className: l,
            dangerouslySetInnerHTML: {
              __html: e.trim()
            }
          }) : (0, r.jsx)("div", {
            className: l,
            children: "No information available."
          })]
        }),
        h = ({
          howToPlayContentText: e,
          gameName: t
        }) => {
          let {
            textHtml: a,
            iframeHtml: n
          } = (0, s.useMemo)(() => {
            if (!e) return {
              textHtml: "",
              iframeHtml: ""
            };
            let t = e.trim(),
              a = t.match(/<iframe[\s\S]*?<\/iframe>/i);
            if (!a) return {
              textHtml: t,
              iframeHtml: ""
            };
            let r = a[0];
            return {
              textHtml: t.replace(r, "").trim(),
              iframeHtml: r
            }
          }, [e]), [o, d] = (0, s.useState)(!1), c = (0, s.useRef)(null);
          return (0, s.useEffect)(() => {
            if (!n) return;
            let e = c.current;
            if (!e) return;
            let t = new IntersectionObserver(e => {
              let a = e[0];
              a && a.isIntersecting && (d(!0), t.disconnect())
            }, {
              root: null,
              rootMargin: "0px",
              threshold: .2
            });
            return t.observe(e), () => t.disconnect()
          }, [n]), (0, r.jsxs)("div", {
            "data-testid": "how-to-play",
            "data-sentry-component": "HowToPlayContent",
            "data-sentry-source-file": "index.tsx",
            children: [(0, r.jsxs)("h2", {
              className: i,
              children: ["How to play ", t]
            }), "" !== a ? (0, r.jsx)("div", {
              className: l,
              dangerouslySetInnerHTML: {
                __html: a || ""
              }
            }) : (0, r.jsx)("div", {
              className: l,
              children: "No information available."
            }), n && (0, r.jsx)("div", {
              ref: c,
              className: "ukf96c7",
              "aria-label": "How to play video",
              children: o ? (0, r.jsx)("div", {
                dangerouslySetInnerHTML: {
                  __html: n
                }
              }) : null
            })]
          })
        },
        g = ({
          gameSlug: e,
          gameName: t,
          aboutContentText: a,
          howToPlayContentText: l
        }) => {
          let {
            features: i
          } = (0, o.R)(), {
            scrollTab: d,
            setScrollTab: g
          } = (0, m.xg)(), p = [{
            key: n.Q.HOW_TO_PLAY,
            content: (0, r.jsx)(h, {
              howToPlayContentText: l,
              gameName: t
            })
          }, {
            key: n.Q.ABOUT,
            content: (0, r.jsx)(u, {
              aboutContentText: a,
              gameName: t
            })
          }], [f, b] = (0, s.useState)(p[0].key);
          return (0, s.useEffect)(() => {
            d && (b(d), g())
          }, [d]), (0, r.jsxs)("div", {
            "data-sentry-component": "GameTabs",
            "data-sentry-source-file": "index.tsx",
            children: [(0, r.jsx)("div", {
              className: "ukf96c0",
              id: n.W,
              role: "tablist",
              children: p.map(e => (0, r.jsx)("button", {
                id: `${e.key.toLowerCase()}-tab`,
                "aria-controls": `${e.key.toLowerCase()}-panel`,
                type: "button",
                role: "tab",
                onClick: () => {
                  b(e.key)
                },
                className: c()("ukf96c1", {
                  active: f === e.key
                }),
                "aria-selected": f === e.key,
                "data-testid": "game-tab",
                children: e.key
              }, e.key))
            }), p.filter(e => e.key !== n.Q.COMMENTS).map(e => (0, r.jsx)("div", {
              id: `${e.key.toLowerCase()}-panel`,
              className: "ukf96c2",
              hidden: f !== e.key,
              role: "tabpanel",
              "aria-labelledby": `${e.key.toLowerCase()}-tab`,
              children: e.content
            }, e.key)), i.auth.openWeb.enabled && (0, r.jsx)("div", {
              className: "ukf96c3 ukf96c2",
              hidden: f !== n.Q.COMMENTS,
              role: "tabpanel",
              "aria-labelledby": "comments-tab",
              id: "comments-panel",
              children: p.find(e => e.key === n.Q.COMMENTS)?.content
            })]
          })
        }
    },
    25315: (e, t, a) => {
      "use strict";
      a.d(t, {
        $: () => u
      });
      var r = a(95155),
        s = a(70448),
        n = a.n(s),
        l = a(72200),
        i = a(90242),
        o = a(85824);
      a(53251);
      var d = "vpyhfh6",
        c = "vpyhfh8",
        m = a(21765);
      let u = ({
        description: e,
        ctaLabel: t,
        size: a = "medium",
        isGamePageBackgroundColorBlack: s
      }) => {
        let {
          openModal: u
        } = (0, o.h)(), h = {
          small: {
            widget: "vpyhfh3 vpyhfh2 vpyhfh0",
            avatarWrapper: "vpyhfh7 vpyhfh6",
            title: c,
            button: "vpyhfha vpyhfh9",
            avatarSize: 40
          },
          medium: {
            widget: "vpyhfh4 vpyhfh2 vpyhfh0",
            avatarWrapper: d,
            title: c,
            button: "vpyhfhb vpyhfh9",
            avatarSize: 48
          },
          large: {
            widget: "vpyhfh5 vpyhfh2 vpyhfh0",
            avatarWrapper: d,
            title: c,
            button: "vpyhfhc vpyhfh9",
            avatarSize: 48
          }
        } [a];
        return (0, r.jsxs)("div", {
          className: n()(h.widget, s && "vpyhfh1"),
          "data-sentry-component": "SignInWidget",
          "data-sentry-source-file": "SignInWidget.tsx",
          children: [(0, r.jsx)("div", {
            className: h.avatarWrapper,
            style: {
              backgroundColor: "#1049A9"
            },
            children: (0, r.jsx)(l.e, {
              avatarImage: "/media/profile_avatar_blank.png",
              size: h.avatarSize,
              maxSize: h.avatarSize,
              "data-sentry-element": "Avatar",
              "data-sentry-source-file": "SignInWidget.tsx"
            })
          }), (0, r.jsx)("div", {
            className: h.title,
            children: e || "Don't lose your progress!"
          }), (0, r.jsx)(i.$, {
            variant: "outline",
            size: "small",
            className: h.button,
            onClick: () => {
              u("sign-up", void 0, "widget"), (0, m.sY)("widget")
            },
            "data-sentry-element": "Button",
            "data-sentry-source-file": "SignInWidget.tsx",
            children: (0, r.jsx)("span", {
              children: t || "Register free"
            })
          })]
        })
      }
    },
    26414: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        gamePageBottomCategoriesPills: () => r,
        gamePageBottomSection: () => s,
        gamePageBottomSectionNoMonetization: () => n,
        gamePageBottomSectionWrapper: () => l,
        gamePageBottomSectionWrapperNoMonetization: () => i,
        gamePageContent: () => o,
        gamePageContentWithRightRail: () => d
      }), a(45160);
      var r = "_19yt8jm6",
        s = "_19yt8jm2",
        n = "_19yt8jm3",
        l = "_19yt8jm4",
        i = "_19yt8jm5",
        o = "_19yt8jm0",
        d = "_19yt8jm1"
    },
    26444: (e, t, a) => {
      "use strict";
      a.d(t, {
        StructuredDataList: () => l
      });
      var r = a(95155),
        s = a(48976),
        n = a(84374);
      a(12115);
      let l = ({
        pageUrl: e,
        gamesList: t
      }) => {
        let {
          configGamePage: a
        } = (0, s.xg)();
        if (!t) return;
        let l = {
          "@context": "https://schema.org",
          "@type": "ItemList",
          numberOfItems: t.length,
          name: a?.id.toString() ?? "Games",
          url: `${e}/games`,
          gamesList: t
        };
        return (0, r.jsx)(n.default, {
          id: "data-list",
          type: "application/ld+json",
          "data-sentry-element": "Script",
          "data-sentry-component": "StructuredDataList",
          "data-sentry-source-file": "StructuredDataList.tsx",
          children: JSON.stringify(l)
        })
      }
    },
    26531: (e, t, a) => {
      "use strict";
      a.d(t, {
        f: () => i
      });
      var r = a(95155);
      a(75960);
      var s = a(70448),
        n = a.n(s),
        l = a(26778);
      let i = ({
        description: e = "players enjoy this game",
        size: t = "medium",
        maxPlayers: a,
        minPlayers: s,
        isGamePageBackgroundColorBlack: i
      }) => {
        let o, d, c, m = (c = (d = (o = (Math.floor(Math.random() * (a - s + 1)) + s) / 1e3).toFixed(1)).endsWith(".0") ? Math.round(o).toString() : d, `${c}K ${e}`);
        return (0, r.jsxs)("div", {
          className: n()("_184h171 _184h170", "large" === t && "_184h173", "medium" === t && "_184h174", "small" === t && "_184h175", i && "_184h172"),
          "data-sentry-component": "NumberOfPlayersWidget",
          "data-sentry-source-file": "NumberOfPlayersWidget.tsx",
          children: [(0, r.jsxs)("div", {
            className: "_184h176",
            children: [(0, r.jsx)("span", {
              className: "_184h177",
              children: (0, r.jsx)(l.default, {
                src: "/media/profile_avatar_left.png",
                alt: "Player avatar",
                width: 40,
                height: 40,
                "data-sentry-element": "Image",
                "data-sentry-source-file": "NumberOfPlayersWidget.tsx"
              })
            }), (0, r.jsx)("span", {
              className: "_184h178",
              children: (0, r.jsx)("span", {
                className: "_184h179",
                children: (0, r.jsx)(l.default, {
                  src: "/media/profile_avatar_center.png",
                  alt: "Player avatar",
                  width: 36,
                  height: 36,
                  "data-sentry-element": "Image",
                  "data-sentry-source-file": "NumberOfPlayersWidget.tsx"
                })
              })
            }), (0, r.jsx)("span", {
              className: "_184h17a",
              children: (0, r.jsx)(l.default, {
                src: "/media/profile_avatar_right.png",
                alt: "Player avatar",
                width: 40,
                height: 40,
                "data-sentry-element": "Image",
                "data-sentry-source-file": "NumberOfPlayersWidget.tsx"
              })
            })]
          }), (0, r.jsx)("div", {
            className: n()("_184h17b", "small" === t && "_184h17c"),
            children: m
          })]
        })
      }
    },
    27024: (e, t, a) => {
      "use strict";
      a.d(t, {
        GameRecommendations: () => h
      });
      var r = a(95155),
        s = a(12115),
        n = a(79760),
        l = a(28062),
        i = a(83522),
        o = a(21765),
        d = a(50990),
        c = a(6240),
        m = a(48976),
        u = a(24408);
      a(22861);
      let h = ({
        arenaBadges: e,
        configGamePage: t,
        href: a,
        label: h
      }) => {
        let g = (0, m.ws)(),
          {
            isMobile: p,
            isTablet: f
          } = (0, n.i)(),
          b = f() || p(),
          {
            isTrailingSlashEnabled: x
          } = (0, c.s)(),
          v = t?.recommendedSectionCopy || "You might also like",
          y = (0, s.useMemo)(() => g.map(t => ({
            onMobile: b,
            background_image_desktop: t?.meta?.thumbs?.graphic_288x152,
            background_image_mobile: t?.meta?.thumbs?.graphic_288x152,
            game_slug: t?.slug,
            game_alias: t?.meta?.alias,
            game_name: t?.meta?.name || t?.name,
            badge: (0, l.X7)(g, t?.slug, e),
            size: "small",
            shortDescription: t?.meta?.details || ""
          })), [g, p, f, b, e]);
        return (0, r.jsx)("div", {
          "data-testid": "recommended-games",
          className: "_1q613xu0",
          "data-sentry-component": "GameRecommendations",
          "data-sentry-source-file": "index.tsx",
          children: (0, r.jsx)(d.Carousel, {
            spacing: 16,
            numberOfSSRSlides: g.length,
            title: v,
            enableArrows: !0,
            enableDots: !1,
            slidesToScroll: 1,
            loop: !1,
            isFullWidth: !1,
            href: a,
            label: h,
            titleAnchorClassName: "_1q613xu1",
            "data-sentry-element": "Carousel",
            "data-sentry-source-file": "index.tsx",
            children: g.map((e, t) => {
              let a = y.find(t => t.game_slug === e.slug),
                s = a?.game_alias || a?.game_slug,
                n = e.meta?.name || e.name,
                l = a?.shortDescription || "";
              return (0, r.jsx)(i.a, {
                href: `/games/${s}${x?"/":""}`,
                slug: e.slug,
                hoverBlock: {
                  type: "full",
                  title: n,
                  description: l
                },
                badge: a?.badge,
                onClick: () => {
                  u.CA.updateConfig({
                    baseParams: {
                      recommendedGamesStart: "Yes"
                    }
                  }), (0, o.tG)(e?.slug, t)
                },
                "aria-describedby": l ? `card_hover-block_description_${l}` : void 0,
                size: "small",
                background: a?.background_image_desktop || "",
                testId: "recommended-game"
              }, e.slug)
            })
          })
        })
      }
    },
    36144: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        ClientOnlyRightRail: () => F,
        EAdLayoutCode: () => P,
        MobileWidgetArea: () => O,
        NoMonetizationLayout: () => $,
        RightRail: () => B
      });
      var r, s = a(95155),
        n = a(97265),
        l = a(9482),
        i = a(49572),
        o = a(4265),
        d = a(1019),
        c = a(48976),
        m = a(79760),
        u = a(27882),
        h = a(74474),
        g = a(12115),
        p = a(68497),
        f = a(25315),
        b = a(26531),
        x = a(62223),
        v = a(60921),
        y = a(39768),
        _ = a(85571);
      let w = () => {
        let [e, t] = (0, g.useState)(() => {
          let e = window.innerWidth;
          return e <= 810 ? "large" : e > 810 && e <= 1024 ? "small" : "medium"
        });
        return (0, g.useEffect)(() => {
          let e, a = () => {
            clearTimeout(e), e = setTimeout(() => {
              let e = window.innerWidth;
              e <= 810 ? t("large") : e > 810 && e <= 1024 ? t("small") : t("medium")
            }, 200)
          };
          return window.addEventListener("resize", a), () => {
            window.removeEventListener("resize", a), clearTimeout(e)
          }
        }, []), e
      };

      function j(e) {
        switch (e) {
          case "desktop":
          default:
            return "300,250";
          case "tablet":
            return "160,600";
          case "mobile":
            return "320,50"
        }
      }
      let S = ({
          widget: e,
          isGamePageBackgroundColorBlack: t
        }) => {
          let a = (0, o.XI)(),
            r = w(),
            {
              features: n
            } = (0, u.R)();
          return !n.auth.enabled || a ? null : (0, s.jsx)("div", {
            "data-widget-id": e.id,
            "data-sentry-component": "LoginWidget",
            "data-sentry-source-file": "WidgetArea.tsx",
            children: (0, s.jsx)(f.$, {
              description: e.description || "Don't lose your progress!",
              ctaLabel: e.ctaLabel || "Register free",
              size: r,
              isGamePageBackgroundColorBlack: t,
              "data-sentry-element": "SignInWidget",
              "data-sentry-source-file": "WidgetArea.tsx"
            })
          })
        },
        E = ({
          widget: e
        }) => {
          let t = (0, v.lm)(),
            a = w(),
            [r, n] = g.useState(!1),
            [l, i] = g.useState(null);
          (0, g.useEffect)(() => {
            n(!0)
          }, []);
          let o = () => {
            if (!t) return e.marketingImageDesktop?.url;
            switch (t) {
              case y.LB.md:
              case y.LB.lg:
                return e.marketingImageDesktop?.url;
              case y.LB.sm:
                if (r && window.innerWidth >= 1025) return e.marketingImageDesktop?.url;
                return e.marketingImageTablet?.url || e.marketingImageDesktop?.url;
              case y.LB.xs:
                return e.marketingImageTabletSmall?.url || e.marketingImageTablet?.url;
              case y.LB.xxs:
                return e.marketingImageMobile?.url || e.marketingImageDesktop?.url;
              default:
                return e.marketingImageDesktop?.url
            }
          };
          (0, g.useEffect)(() => {
            if ("medium" !== a && "small" !== a) return void i("horizontal");
            let e = o();
            if (!e || !r) return;
            let t = new Image;
            t.onload = () => {
              let e = t.naturalHeight;
              "medium" === a ? i(136 === e ? "vertical" : "horizontal") : "small" === a && i(136 === e ? "vertical" : "horizontal")
            }, t.onerror = () => {
              i("horizontal")
            }, t.src = e
          }, [t, r, a, e.marketingImageDesktop?.url, e.marketingImageTablet?.url, e.marketingImageTabletSmall?.url, e.marketingImageMobile?.url]);
          let c = o();
          return c ? (0, s.jsx)("div", {
            className: d.xD,
            "data-widget-id": e.id,
            "data-sentry-component": "MarketingWidgetComponent",
            "data-sentry-source-file": "WidgetArea.tsx",
            children: (0, s.jsx)(p.b, {
              "data-widget-id": e.id,
              marketingSlotImage: c,
              url: e.url?.href || "#",
              target: e.url?.target,
              analyticId: e.analyticId || `marketing-widget-${e.id}`,
              variant: (() => {
                let e = l || "horizontal";
                switch (a) {
                  case "large":
                    return "largeHorizontal";
                  case "small":
                    return "vertical" === e ? "smallVertical" : "smallHorizontal";
                  default:
                    return "vertical" === e ? "mediumVertical" : "mediumHorizontal"
                }
              })(),
              "data-sentry-element": "MarketingWidget",
              "data-sentry-source-file": "WidgetArea.tsx"
            })
          }) : null
        },
        N = ({
          widget: e,
          isGamePageBackgroundColorBlack: t
        }) => {
          let {
            gameData: a
          } = (0, c.xg)(), r = w();
          return a?.meta?.hasLeaderboard ? (0, s.jsx)("div", {
            "data-widget-id": e.id,
            "data-sentry-component": "LeaderboardWidgetComponent",
            "data-sentry-source-file": "WidgetArea.tsx",
            children: (0, s.jsx)(x.q, {
              title: e.title || "Leaderboard",
              size: r,
              isGamePageBackgroundColorBlack: t,
              "data-sentry-element": "LeaderboardWidget",
              "data-sentry-source-file": "WidgetArea.tsx"
            })
          }) : null
        },
        k = ({
          widget: e,
          isGamePageBackgroundColorBlack: t
        }) => {
          let a, {
              gameData: r
            } = (0, c.xg)(),
            n = w(),
            l = (a = r?.slug || "").includes("bubble-shooter") ? {
              minPlayers: 61508,
              maxPlayers: 61758
            } : a.includes("millionaire") ? {
              minPlayers: 28685,
              maxPlayers: 28785
            } : a.includes("zoo-boom") ? {
              minPlayers: 8080,
              maxPlayers: 8180
            } : null;
          if (!l) return null;
          let {
            minPlayers: i,
            maxPlayers: o
          } = l;
          return (0, s.jsx)("div", {
            "data-widget-id": e.id,
            "data-sentry-component": "UsersPlayingWidget",
            "data-sentry-source-file": "WidgetArea.tsx",
            children: (0, s.jsx)(b.f, {
              description: e.description || "play this game",
              size: n,
              maxPlayers: o,
              minPlayers: i,
              isGamePageBackgroundColorBlack: t,
              "data-sentry-element": "NumberOfPlayersWidget",
              "data-sentry-source-file": "WidgetArea.tsx"
            })
          })
        },
        A = ({
          widget: e,
          isGamePageBackgroundColorBlack: t
        }) => {
          let a = w();
          return (0, s.jsx)("div", {
            "data-widget-id": e.id,
            "data-sentry-component": "GameRatingWidgetComponent",
            "data-sentry-source-file": "WidgetArea.tsx",
            children: (0, s.jsx)(_.S, {
              label: e.label,
              size: a,
              secondLineText: e.secondLineText,
              isGamePageBackgroundColorBlack: t,
              "data-sentry-element": "GameRatingWidget",
              "data-sentry-source-file": "WidgetArea.tsx"
            })
          })
        },
        T = ({
          widget: e
        }) => {
          w();
          let t = e.dimensions && e.dimensions.length > 0 ? e.dimensions.map(t => {
              if (t.match(/^\d+,\d+$/)) return t;
              let a = t.match(/(\d+)x(\d+):(\d+),(\d+)/);
              if (a) return `${a[3]},${a[4]}`;
              let r = t.match(/(\d+)x(\d+)/);
              return r ? `${r[1]},${r[2]}` : j(e.deviceType)
            }) : [j(e.deviceType)],
            a = {
              "data-id": e.ad_id || `widget-ad-${e.id}`,
              product: "arena",
              dimensions: (0, n.E)(t)
            };
          return (0, s.jsx)("div", {
            "data-widget-id": e.id,
            "data-device-type": e.deviceType,
            "data-sentry-component": "AdComponentWidget",
            "data-sentry-source-file": "WidgetArea.tsx",
            children: (0, s.jsx)(i.default, {
              adOptions: a,
              "data-sentry-element": "Ad",
              "data-sentry-source-file": "WidgetArea.tsx"
            })
          })
        },
        C = ({
          widget: e,
          isGamePageBackgroundColorBlack: t
        }) => {
          let {
            features: a
          } = (0, u.R)(), r = a.gameRating?.enabled || !1;
          switch (e.__component) {
            case "shared.login-widget":
              return (0, s.jsx)(S, {
                widget: e,
                isGamePageBackgroundColorBlack: t
              });
            case "shared.marketing-widget":
              return (0, s.jsx)(E, {
                widget: e
              });
            case "shared.leaderboard-widget":
              return (0, s.jsx)(N, {
                widget: e,
                isGamePageBackgroundColorBlack: t
              });
            case "shared.users-playing-widget":
              return (0, s.jsx)(k, {
                widget: e,
                isGamePageBackgroundColorBlack: t
              });
            case "shared.game-rating-widget":
              if (r) return (0, s.jsx)(A, {
                widget: e,
                isGamePageBackgroundColorBlack: t
              });
              return null;
            case "web-components.ad-component":
              return (0, s.jsx)(T, {
                widget: e
              });
            default:
              return null
          }
        },
        L = ({
          widgets: e
        }) => {
          let t, {
            gameData: a
          } = (0, c.xg)();
          if (!e || 0 === e.length) return null;
          let r = a?.meta?.backgroundColor?.trim().toLowerCase() === "#000000",
            n = (t = window.innerWidth) >= 1025 ? "desktop" : t > 810 && t <= 1024 ? "tablet" : "mobile",
            l = e.filter(e => "web-components.ad-component" !== e.__component || e.deviceType === n).sort((e, t) => (e.order || 0) - (t.order || 0));
          return (0, s.jsx)("div", {
            className: d.Cq,
            "data-sentry-component": "WidgetArea",
            "data-sentry-source-file": "WidgetArea.tsx",
            children: l.map((e, t) => (0, s.jsx)(C, {
              widget: e,
              isGamePageBackgroundColorBlack: r
            }, `${e.__component}-${e.id}-${t}`))
          })
        };
      var G = a(4766),
        I = a(64705),
        R = a(28062),
        P = ((r = {}).NO_MONETIZATION = "no monetization", r.LIGHT = "light", r.MEDIUM = "medium", r.HEAVY = "heavy", r);
      let M = {
          "data-id": "sidebar_multi",
          product: "arena",
          dimensions: (0, n.E)([l.X.AD_300x250])
        },
        D = {
          "data-id": "sidebar_multi",
          product: "arena",
          dimensions: (0, n.E)([l.X.AD_300x250_AB_TEST])
        },
        W = {
          "data-id": "sidebar_long",
          product: "arena",
          dimensions: (0, n.E)([l.X.AD_160x600])
        },
        B = () => {
          let {
            isFullscreen: e
          } = (0, c.xg)(), {
            isMobile: t
          } = (0, m.i)(), a = t(), r = (0, v.Gy)(), n = "we-sell" === (0, R.dJ)("ads_abtest_2"), {
            features: l
          } = (0, u.R)(), {
            hasAdTemplates: o,
            getAdTemplateWidgets: g,
            adLayoutCode: p,
            availableAdTemplates: f
          } = (0, h.E)(), b = l.adTemplates.enabled && null !== p && f.length > 0;
          return (p?.toLowerCase(), e || a) ? null : (0, s.jsx)("div", {
            className: d.wn,
            "data-sentry-component": "RightRail",
            "data-sentry-source-file": "RightRail.tsx",
            children: b ? (0, s.jsx)(L, {
              widgets: o ? g() : []
            }) : (0, s.jsx)("div", {
              children: (0, s.jsx)("div", {
                "data-testid": "right-ads",
                children: r === v.GA.xxl ? (0, s.jsxs)("div", {
                  className: d.HM,
                  "data-testid": "desktop-ads",
                  children: [(0, s.jsx)(i.default, {
                    adOptions: {
                      ...M,
                      "data-id": "sidebar_ad1"
                    }
                  }), (0, s.jsx)(i.default, {
                    adOptions: {
                      ...M,
                      "data-id": "sidebar_ad2"
                    }
                  }), (0, s.jsx)(i.default, {
                    adOptions: {
                      ...n ? D : M,
                      "data-id": "sidebar_ad3"
                    }
                  })]
                }) : r === v.GA.lg || r === v.GA.xl ? (0, s.jsx)("div", {
                  "data-testid": "mobile-ads",
                  children: (0, s.jsx)(i.default, {
                    adOptions: W
                  })
                }) : void 0
              })
            })
          })
        },
        O = () => {
          let e = (0, G.DE)(),
            t = (0, o.sb)(),
            {
              features: a
            } = (0, u.R)(),
            {
              hasAdTemplates: r,
              getAdTemplateWidgets: n,
              availableAdTemplates: l
            } = (0, h.E)(),
            i = a.adTemplates?.enabled && l.length > 0;
          return e && !t.isSubscriber && i ? (0, s.jsx)("div", {
            className: d._R,
            "data-sentry-component": "MobileWidgetArea",
            "data-sentry-source-file": "RightRail.tsx",
            children: (0, s.jsx)(L, {
              widgets: r ? n() : [],
              "data-sentry-element": "WidgetArea",
              "data-sentry-source-file": "RightRail.tsx"
            })
          }) : null
        },
        $ = () => {
          let e = (0, G.DE)(),
            {
              features: t
            } = (0, u.R)(),
            {
              hasAdTemplates: a,
              getAdTemplateWidgets: r,
              adLayoutCode: n,
              availableAdTemplates: l
            } = (0, h.E)(),
            i = t.adTemplates?.enabled && l.length > 0,
            o = n?.toLowerCase() === "no monetization";
          return e && o && i ? (0, s.jsx)("div", {
            className: d.Fu,
            "data-sentry-component": "NoMonetizationLayout",
            "data-sentry-source-file": "RightRail.tsx",
            children: (0, s.jsx)(L, {
              widgets: a ? r() : [],
              "data-sentry-element": "WidgetArea",
              "data-sentry-source-file": "RightRail.tsx"
            })
          }) : null
        },
        F = () => {
          let e = (0, G.DE)(),
            t = (0, o.sb)(),
            {
              features: r
            } = (0, u.R)(),
            {
              adLayoutCode: n,
              availableAdTemplates: l
            } = (0, h.E)(),
            i = n?.toLowerCase() === "no monetization",
            c = r.adTemplates?.enabled && l.length > 0;
          return t.isSubscriber || i && c ? null : (0, s.jsx)("div", {
            className: d.w3,
            "data-sentry-component": "ClientOnlyRightRail",
            "data-sentry-source-file": "RightRail.tsx",
            children: e && (0, s.jsx)(I.I, {
              componentName: "right-rail-ads",
              loader: () => Promise.resolve().then(a.bind(a, 36144)).then(e => e.RightRail)
            })
          })
        }
    },
    37231: (e, t, a) => {
      "use strict";
      a.d(t, {
        V: () => l
      });
      var r = a(95155);
      a(12115);
      var s = a(26441);
      a(47072);
      var n = a(58367);

      function l({
        content: e,
        side: t = "top",
        sideOffset: a = 4,
        children: l,
        delayDuration: i = 0,
        enablePortal: o = !1
      }) {
        let {
          isFullscreen: d
        } = (0, n.H)();
        if (!e) return (0, r.jsx)(r.Fragment, {
          children: l
        });
        let c = (0, r.jsxs)(s.UC, {
          className: "_1s410984",
          side: t,
          sideOffset: a,
          children: [e, (0, r.jsx)(s.i3, {
            className: "_1s410985"
          })]
        });
        return (0, r.jsx)(s.Kq, {
          delayDuration: i,
          "data-sentry-element": "TooltipProvider",
          "data-sentry-component": "CustomTooltip",
          "data-sentry-source-file": "index.tsx",
          children: (0, r.jsxs)(s.bL, {
            disableHoverableContent: !0,
            "data-sentry-element": "TooltipRoot",
            "data-sentry-source-file": "index.tsx",
            children: [(0, r.jsx)(s.l9, {
              asChild: !0,
              "data-sentry-element": "TooltipTrigger",
              "data-sentry-source-file": "index.tsx",
              children: l
            }), o ? (0, r.jsx)(s.KL, {
              container: (() => {
                if (d && document.fullscreenElement) return document.fullscreenElement
              })(),
              children: c
            }) : c]
          })
        })
      }
    },
    46278: (e, t, a) => {
      "use strict";
      a.d(t, {
        Breadcrumbs: () => g
      });
      var r = a(95155),
        s = a(12115),
        n = a(14011),
        l = a(79038),
        i = a(70448),
        o = a.n(i);
      a(65855);
      var d = "_5k75966",
        c = "_5k75962",
        m = "_5k75965",
        u = a(27882),
        h = a(6240);
      let g = ({
        currentPageName: e,
        variant: t = "default",
        categoriesSlug: a,
        categoryName: i,
        categorySlug: g
      }) => {
        let p = (0, n.usePathname)(),
          {
            features: f
          } = (0, u.R)(),
          {
            currentLocale: b,
            defaultLocale: x
          } = (0, h.s)(),
          v = f.actionBar.enabled,
          y = o()("fw-semibold", "_5k75960", "boldHighlight" === t && "_5k75961"),
          _ = o()("_5k75963", "boldHighlight" === t && "_5k75964");
        if (i && g && a) return (0, r.jsxs)("ul", {
          className: y,
          children: [(0, r.jsx)("li", {
            className: c,
            children: (0, r.jsx)(l.LocalizedLink, {
              className: m,
              href: "/",
              children: "Home"
            })
          }), (0, r.jsx)("li", {
            className: d,
            children: "|"
          }), (0, r.jsx)("li", {
            className: c,
            children: (0, r.jsx)(l.LocalizedLink, {
              className: m,
              href: `/${a}/${g}`,
              children: i
            })
          }), e && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("li", {
              className: d,
              children: "|"
            }), (0, r.jsx)("li", {
              className: c,
              children: v ? (0, r.jsx)("span", {
                className: _,
                children: e
              }) : (0, r.jsx)("h1", {
                className: _,
                children: e
              })
            })]
          })]
        });
        let w = p.split("/").filter(Boolean),
          j = w[0] === b || w[0] === x ? w.slice(1) : w,
          S = [],
          E = "blog" === j[0] && "category" === j[1];
        for (let e = 0; e < j.length; e++) {
          let t = j[e],
            a = j[e + 1];
          if ("page" === t && a && /^\d+$/.test(a)) {
            e++;
            continue
          }
          /^\d+$/.test(t) && e > 0 && "page" === j[e - 1] || ("category" !== t || "blog" !== j[0]) && S.push(t)
        }
        if (0 === S.length) return null;
        let N = S.map((t, a) => {
          let r = a === S.length - 1,
            s = `/${S.slice(0,a+1).join("/")}`;
          if (r && E && e) {
            let e = S[S.length - 1];
            s = `/blog/category/${e}`
          }
          let n = r && e ? e : t.split("-").map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
          return {
            segment: t,
            href: s,
            displayName: n,
            isLast: r
          }
        });
        return (0, r.jsxs)("ul", {
          className: y,
          "data-sentry-component": "Breadcrumbs",
          "data-sentry-source-file": "index.tsx",
          children: [(0, r.jsx)("li", {
            className: c,
            children: (0, r.jsx)(l.LocalizedLink, {
              className: m,
              href: "/",
              "data-sentry-element": "LocalizedLink",
              "data-sentry-source-file": "index.tsx",
              children: "Home"
            })
          }), N.map((e, t) => (0, r.jsxs)(s.Fragment, {
            children: [(0, r.jsx)("li", {
              className: d,
              children: "|"
            }), (0, r.jsx)("li", {
              className: c,
              children: e.isLast ? v ? (0, r.jsx)("span", {
                className: _,
                children: e.displayName
              }) : (0, r.jsx)("h1", {
                className: _,
                children: e.displayName
              }) : (0, r.jsx)(l.LocalizedLink, {
                className: m,
                href: e.href,
                children: e.displayName
              })
            })]
          }, `${e.segment}-${t}`))]
        })
      }
    },
    47563: (e, t, a) => {
      "use strict";
      a.d(t, {
        GamePageBottomSection: () => m,
        GamePageBottomSectionWrapper: () => u,
        GamePageContent: () => c
      });
      var r = a(95155),
        s = a(4766),
        n = a(74474),
        l = a(27882),
        i = a(36144),
        o = a(4265),
        d = a(26414);
      let c = ({
          children: e
        }) => {
          let t = (0, o.sb)().isSubscriber ? d.gamePageContent : d.gamePageContentWithRightRail;
          return (0, r.jsx)("div", {
            className: t,
            "data-sentry-component": "GamePageContent",
            "data-sentry-source-file": "GamePageBottomSection.tsx",
            children: e
          })
        },
        m = ({
          children: e
        }) => {
          let t = (0, s.DE)(),
            {
              adLayoutCode: a,
              availableAdTemplates: o
            } = (0, n.E)(),
            {
              features: c
            } = (0, l.R)(),
            m = a?.toLowerCase() === i.EAdLayoutCode.NO_MONETIZATION,
            u = c.adTemplates?.enabled && o.length > 0,
            h = t && m && u ? `${d.gamePageBottomSection} ${d.gamePageBottomSectionNoMonetization}` : d.gamePageBottomSection;
          return (0, r.jsx)("div", {
            className: h,
            "data-sentry-component": "GamePageBottomSection",
            "data-sentry-source-file": "GamePageBottomSection.tsx",
            children: e
          })
        },
        u = ({
          children: e
        }) => {
          let t = (0, s.DE)(),
            {
              adLayoutCode: a,
              availableAdTemplates: o
            } = (0, n.E)(),
            {
              features: c
            } = (0, l.R)(),
            m = a?.toLowerCase() === i.EAdLayoutCode.NO_MONETIZATION,
            u = c.adTemplates?.enabled && o.length > 0,
            h = t && m && u ? `${d.gamePageBottomSectionWrapper} ${d.gamePageBottomSectionWrapperNoMonetization}` : d.gamePageBottomSectionWrapper;
          return (0, r.jsx)("div", {
            className: h,
            "data-sentry-component": "GamePageBottomSectionWrapper",
            "data-sentry-source-file": "GamePageBottomSection.tsx",
            children: e
          })
        }
    },
    47980: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 58917)), Promise.resolve().then(a.bind(a, 26414)), Promise.resolve().then(a.bind(a, 68244)), Promise.resolve().then(a.bind(a, 46278)), Promise.resolve().then(a.bind(a, 83175)), Promise.resolve().then(a.bind(a, 27024)), Promise.resolve().then(a.bind(a, 15370)), Promise.resolve().then(a.bind(a, 68240)), Promise.resolve().then(a.bind(a, 79038)), Promise.resolve().then(a.bind(a, 3741)), Promise.resolve().then(a.bind(a, 26444)), Promise.resolve().then(a.bind(a, 64864)), Promise.resolve().then(a.bind(a, 63737)), Promise.resolve().then(a.bind(a, 73963)), Promise.resolve().then(a.bind(a, 47563)), Promise.resolve().then(a.bind(a, 56650)), Promise.resolve().then(a.bind(a, 14059)), Promise.resolve().then(a.bind(a, 36144)), Promise.resolve().then(a.bind(a, 62697)), Promise.resolve().then(a.bind(a, 7907)), Promise.resolve().then(a.bind(a, 48976)), Promise.resolve().then(a.t.bind(a, 32689, 23)), Promise.resolve().then(a.t.bind(a, 45160, 23)), Promise.resolve().then(a.bind(a, 98208)), Promise.resolve().then(a.bind(a, 99082)), Promise.resolve().then(a.t.bind(a, 51191, 23))
    },
    56650: (e, t, a) => {
      "use strict";
      a.d(t, {
        GamePageWrapper: () => i
      });
      var r = a(95155);
      a(12115);
      var s = a(70448),
        n = a.n(s),
        l = a(48976);
      a(12300);
      let i = ({
        children: e
      }) => {
        let {
          isFullscreen: t
        } = (0, l.xg)();
        return (0, r.jsx)("div", {
          className: n()("game-page-wrapper", "zsi6ms0", t && "zsi6ms1"),
          "data-sentry-component": "GamePageWrapper",
          "data-sentry-source-file": "index.tsx",
          children: e
        })
      }
    },
    57519: e => {
      e.exports = {
        blurredLayer: "styles_blurredLayer__ZOSqI"
      }
    },
    58917: (e, t, a) => {
      "use strict";
      a.d(t, {
        PillComponent: () => i
      });
      var r = a(95155),
        s = a(92989),
        n = a(28062),
        l = a(21765);
      let i = ({
        label: e,
        urlPath: t,
        type: a,
        index: i,
        buttonLocation: o = "top"
      }) => (0, r.jsx)(s.a, {
        label: (0, n.Zr)(e),
        href: `/${a}/${"search"!==a?t:e}`,
        onClick: () => {
          void 0 !== i && (0, l.Eh)(e, i, o)
        },
        "data-sentry-element": "Pill",
        "data-sentry-component": "PillComponent",
        "data-sentry-source-file": "PillComponent.tsx"
      })
    },
    60069: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => i
      });
      var r, s, n = a(12115);

      function l() {
        return (l = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a)({}).hasOwnProperty.call(a, r) && (e[r] = a[r])
          }
          return e
        }).apply(null, arguments)
      }
      let i = function(e) {
        return n.createElement("svg", l({
          xmlns: "http://www.w3.org/2000/svg",
          width: 32,
          height: 32,
          fill: "none",
          viewBox: "0 0 32 32"
        }, e), r || (r = n.createElement("path", {
          fill: "#039855",
          d: "M9.334 29.333V14.666Zm-6.667-12v9.333a2.667 2.667 0 0 0 2.667 2.667h17.901a4 4 0 0 0 3.954-3.392l1.436-9.333a4 4 0 0 0-3.954-4.609h-4.67a1.333 1.333 0 0 1-1.334-1.333V5.954a3.29 3.29 0 0 0-3.288-3.288c-.433 0-.825.255-1.001.65L9.686 13.875a1.33 1.33 0 0 1-1.219.792H5.334a2.667 2.667 0 0 0-2.667 2.667"
        })), s || (s = n.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M9.334 29.333V14.666m-6.667 2.667v9.333a2.667 2.667 0 0 0 2.667 2.667h17.901a4 4 0 0 0 3.954-3.392l1.436-9.333a4 4 0 0 0-3.954-4.609h-4.67a1.333 1.333 0 0 1-1.334-1.333V5.954a3.29 3.29 0 0 0-3.288-3.288c-.433 0-.825.255-1.001.65L9.686 13.875a1.33 1.33 0 0 1-1.219.792H5.334a2.667 2.667 0 0 0-2.667 2.667"
        })))
      }
    },
    61952: (e, t, a) => {
      "use strict";
      a.d(t, {
        Y: () => n
      });
      var r = a(95155);

      function s({
        name: e,
        width: t = 28,
        height: a = 20,
        ...s
      }) {
        let n = 28 === t ? "/media/sprites/flags-sprite_28x20.svg" : "/media/sprites/flags-sprite_24x24.svg";
        return (0, r.jsx)("svg", {
          width: t,
          height: a,
          ...s,
          "data-sentry-element": "svg",
          "data-sentry-component": "FlagIcon",
          "data-sentry-source-file": "FlagIcon.tsx",
          children: (0, r.jsx)("use", {
            href: `${n}#${e}`,
            xlinkHref: `${n}#${e}`,
            "data-sentry-element": "use",
            "data-sentry-source-file": "FlagIcon.tsx"
          })
        })
      }
      let n = ({
        code: e,
        className: t,
        size: a
      }) => {
        if (!a || !e) return null;
        let [n, l] = a.split("x");
        return (0, r.jsx)(s, {
          width: n,
          height: l,
          name: e.toLowerCase(),
          className: `${t||""}`,
          "aria-label": `Flag of ${e}`,
          role: "img",
          "data-sentry-element": "FlagIcon",
          "data-sentry-component": "CountryFlagIcon",
          "data-sentry-source-file": "index.tsx"
        })
      }
    },
    62223: (e, t, a) => {
      "use strict";
      a.d(t, {
        q: () => v
      });
      var r = a(95155),
        s = a(12115),
        n = a(48976);
      a(55724);
      var l = "mz2bpq7",
        i = "mz2bpq8",
        o = "mz2bpqb",
        d = "mz2bpq6",
        c = "mz2bpq1 mz2bpq0",
        m = "mz2bpq2",
        u = "mz2bpq3",
        h = "mz2bpq4",
        g = "mz2bpq5",
        p = a(70448),
        f = a.n(p),
        b = a(26778),
        x = a(5909);
      let v = ({
        title: e = "Leaderboard",
        size: t = "medium",
        isGamePageBackgroundColorBlack: a
      }) => {
        let [p, v] = (0, s.useState)([]), y = (0, s.useRef)([]), _ = "small" === t, {
          fetchLeaderboardDataApi: w
        } = (0, x.T)(), {
          gameData: j
        } = (0, n.xg)(), S = j?.slug;
        (0, s.useEffect)(() => {
          if (!S) return;
          let e = async () => {
            try {
              var e;
              let t = await w(S),
                a = (e = t?.publicData?.month, Array.isArray(e) && 0 !== e.length ? [...e].sort((e, t) => (Number(t?.score) || 0) - (Number(e?.score) || 0)).slice(0, 3).map(e => Number(e?.score) || 0) : []);
              ((e, t) => {
                if (e.length !== t.length) return !1;
                for (let a = 0; a < e.length; a++)
                  if (e[a] !== t[a]) return !1;
                return !0
              })(y.current, a) || (y.current = a, v(a))
            } catch {}
          };
          e();
          let t = setInterval(e, 3e5);
          return () => clearInterval(t)
        }, [S, w]);
        let E = (0, s.useMemo)(() => {
            let e = ["/media/gold-cup.avif", "/media/silver-cup.avif", "/media/bronze-cup.avif"];
            return p.map((t, a) => ({
              rank: a + 1,
              score: Number(t).toLocaleString(),
              icon: e[a]
            }))
          }, [p]),
          N = _ ? 32 : 40;
        return 0 === E.length ? (0, r.jsxs)("div", {
          className: f()(c, "large" === t && u, "medium" === t && h, "small" === t && g, a && m),
          children: [(0, r.jsxs)("div", {
            className: d,
            children: [(0, r.jsx)(b.default, {
              src: "/media/crown.svg",
              alt: "Crown",
              width: 15.8,
              height: 14.9
            }), (0, r.jsx)("span", {
              children: e
            })]
          }), (0, r.jsx)("div", {
            className: f()(l, _ && i),
            children: (0, r.jsx)("span", {
              className: o,
              children: "No leaderboard data yet"
            })
          })]
        }) : (0, r.jsxs)("div", {
          className: f()(c, "large" === t && u, "medium" === t && h, "small" === t && g, a && m),
          "data-sentry-component": "LeaderboardWidget",
          "data-sentry-source-file": "LeaderBoardWidget.tsx",
          children: [(0, r.jsxs)("div", {
            className: d,
            children: [(0, r.jsx)(b.default, {
              src: "/media/crown.svg",
              alt: "Crown",
              width: 15.8,
              height: 14.9,
              "data-sentry-element": "Image",
              "data-sentry-source-file": "LeaderBoardWidget.tsx"
            }), (0, r.jsx)("span", {
              children: e
            })]
          }), (0, r.jsx)("div", {
            className: f()(l, _ && i),
            children: E.length < 3 ? (0, r.jsx)("span", {
              className: o,
              children: "No leaderboard data yet"
            }) : E.map(e => (0, r.jsxs)("div", {
              className: f()("mz2bpq9", _ && "mz2bpqa"),
              children: [(0, r.jsx)(b.default, {
                src: e.icon,
                alt: `Rank ${e.rank}`,
                width: N,
                height: N
              }), (0, r.jsx)("span", {
                className: o,
                children: e.score
              })]
            }, e.rank))
          })]
        })
      }
    },
    62697: (e, t, a) => {
      "use strict";
      a.d(t, {
        e: () => a$,
        GameView: () => aF
      });
      var r, s, n, l, i, o, d, c, m, u, h, g, p, f, b, x, v, y, _ = a(95155),
        w = a(12115),
        j = a(70448),
        S = a.n(j);
      a(61428);
      var E = "ywb4la9",
        N = a(21765),
        k = a(63554),
        A = a(90242),
        T = a(38841),
        C = a(51629);
      a(23994), a(74541);
      var L = a(88828),
        G = a(27882),
        I = a(85824),
        R = a(26778),
        P = a(57519),
        M = a.n(P);
      let D = ({
        children: e
      }) => (0, _.jsx)("div", {
        className: M().blurredLayer,
        "data-sentry-component": "BlurredLayer",
        "data-sentry-source-file": "index.tsx",
        children: e
      });
      var W = a(46786),
        B = a(4265),
        O = a(17413),
        $ = a(88011),
        F = a(99554),
        U = a(45798),
        z = a(48976),
        Y = a(67754),
        V = a(57873),
        Z = a(24709),
        H = a(28062),
        X = a(74474),
        q = a(36144),
        J = a(6422),
        Q = a(85352);
      let K = () => {
        let {
          gameData: e,
          configGamePage: t,
          gameState: a
        } = (0, z.xg)(), {
          adLayoutCode: r
        } = (0, X.E)(), {
          isAdsDisabledByRegion: s,
          isAdsDisabledByRegionReady: n
        } = (0, Q.g)(), {
          isSubscriber: l
        } = (0, B.sb)(), i = (0, B.w1)(), {
          features: o
        } = (0, G.R)(), d = o.core.isNewUserTypeEnabled, c = o.auth.enabled, m = o.core.isGameStartScreenABTestEnabled, [u, h] = (0, w.useState)(!1), [g, p] = (0, w.useState)(!1), [f, b] = (0, w.useState)(!0), [x, v] = (0, w.useState)($.AW), [y, _] = (0, w.useState)(!0), [j, S] = (0, w.useState)(0);
        return (0, w.useEffect)(() => {
          if (!n || (b(!0), [null === s, c && "loading" === i].some(e => e))) return;
          m && (0, J.X5)();
          let a = (0, V.nW)(t?.prerollConfiguration, e?.meta.preroll),
            o = r?.toLowerCase() === q.EAdLayoutCode.NO_MONETIZATION;
          if ([!!l, t?.adsFree, !a.prerollEnabled, s, t?.preroll === !1, o].some(e => e)) {
            v(a), h(!1), p(!1), _(!1), b(!1);
            return
          }
          let u = "true" === (0, H.dJ)($.U8);
          if (!d) {
            v(a), h(!u), p(!0), b(!1);
            return
          }
          if (!(0, F.Mk)(a.prerollFreePeriod)) {
            v(a), h(!1), p(!1), _(!1), b(!1);
            return
          }
          if (v(a), _(!0), !(0, V.w2)(a, e?.slug)) {
            h(!1), p(!1), b(!1);
            return
          }
          let g = !0;
          m && (g = (0, J.X5)().shouldShowStartScreen), p(g), h(!u), b(!1)
        }, [t?.prerollConfiguration, e?.meta.preroll, t?.adsFree, s, d, l, e?.slug, i, a, c, m, r, t?.preroll, n]), {
          prerollState: j,
          incrementPrerollState: () => {
            y && e?.slug && S((0, V.t)(e.slug))
          },
          mustDisplayPreroll: u,
          mustDisplayStartScreen: g,
          prerollConfiguration: x,
          isLoading: f
        }
      };
      var ee = a(68244),
        et = a(87299),
        ea = a(78330);
      let er = ({
        playAgainStart: e,
        isVideoAdsPrerollEnabled: t,
        isGameFavorite: a,
        setIsStartScreenVisible: r,
        prerollSeconds: s
      }) => {
        let {
          sdk: n,
          status: l
        } = (0, U.T)(), {
          configGamePage: i,
          gameData: o,
          gameState: d,
          updateGameState: c,
          isFullscreen: m
        } = (0, z.xg)(), [u, h] = (0, w.useState)(null), {
          getGameplayId: g,
          generateGameplayId: p
        } = (0, L.T3)(), f = (0, B.XI)(), {
          features: b
        } = (0, G.R)(), x = b.auth.shop.enabled, v = b.auth.enabled, y = b.core.isRewardedFullscreenABTestEnabled, j = b.core.isRewardedUnlockGamesABTestEnabled, {
          isEnabled: E,
          isControl: P
        } = (0, ea.HC)("adshield"), {
          openModal: M
        } = (0, I.h)(), {
          mustDisplayPreroll: H,
          incrementPrerollState: X
        } = K(), {
          adblockStatus: q
        } = (0, ee.V_)(), J = q === ee.fQ.DETECTED, Q = (0, O.t)();
        (0, w.useEffect)(() => {
          h((0, V.uM)(i))
        }, [i]);
        let er = o?.meta?.thumbs.graphic_288x232,
          es = {
            itemSku: (0, T.env)("NEXT_PUBLIC_SHOP_SKU_SKIP_AD"),
            itemAmount: 1,
            bundleSku: (0, T.env)("NEXT_PUBLIC_SHOP_SKU_SKIP_AD_BUNDLE"),
            bundleAmount: 1
          },
          {
            handlePurchase: en
          } = (0, W.y)({
            gameSlug: o?.slug,
            item: es,
            requiredGems: 5,
            buttonLocation: "prerollSkip",
            onSuccess: () => {
              r(!1), c(k.m.GAME)
            },
            onSuccessAnalytics: N.uQ,
            errorContext: {
              ctaValue: 5
            }
          }),
          [el, ei] = (0, w.useState)(!1),
          eo = async () => {
            if (!el) {
              (0, N.xM)(), ei(!0);
              try {
                await en()
              } finally {
                ei(!1)
              }
            }
          };
        return (0, _.jsxs)("div", {
          "data-testid": "preroll-container",
          id: "preroll-container",
          className: S()("preroll-container", "_130uei50"),
          "data-sentry-component": "StartScreen",
          "data-sentry-source-file": "Preroll.tsx",
          children: [(0, _.jsx)(D, {
            "data-sentry-element": "BlurredLayer",
            "data-sentry-source-file": "Preroll.tsx"
          }), (0, _.jsx)("div", {
            id: "ark_pre-roll",
            className: S()("_130uei51"),
            children: (0, _.jsx)("div", {
              className: "_130uei52",
              children: (0, _.jsxs)("div", {
                className: S()("_130uei53", "_130uei54"),
                children: [er && (0, _.jsx)("div", {
                  className: "_130uei55",
                  children: (0, _.jsx)(R.default, {
                    unoptimized: !0,
                    src: o?.meta?.thumbs.graphic_288x192,
                    width: 288,
                    height: 232,
                    alt: "preroll-image",
                    className: "_130uei56",
                    "data-testid": "preroll-image"
                  })
                }), o?.name && (0, _.jsx)("div", {
                  className: "_130uei57",
                  children: (0, _.jsx)("p", {
                    className: S()("_130uei58", f && "_130uei59"),
                    "data-testid": "game-title",
                    children: o?.meta?.name ?? o?.name
                  })
                }), (0, _.jsx)("div", {
                  className: S()("_130uei5a", "ark-cta-buttons"),
                  children: (0, _.jsxs)(A.$, {
                    onClick: () => {
                      let d = g() || p(o?.slug || "");
                      if (r(!1), (0, N.JC)(e, a, o, d), X(), !t) return void c(k.m.GAME);
                      if ("ready" !== l) {
                        c(k.m.GAME), (0, Z.wd)("platform.ad.preroll.skipped.sdk.error", {
                          tags: {
                            game: o?.slug,
                            "platform.ad.preroll.skipped.sdk.error": "true"
                          }
                        });
                        return
                      }
                      let m = "",
                        u = "";
                      j ? (m = F.O1.getArkCookie($.Fg) || "", u = `cohort-${m}:game-${(0,et.w)(o?.slug)}`) : y && (m = F.O1.getArkCookie($.Yj) || "", u = `cohort-${m}`), E && (u = m = P ? "control" : "groupB");
                      let h = {
                        duration: s,
                        product: "evo",
                        env: Y.bW[(0, T.env)("NEXT_PUBLIC_BUILD_ENV")],
                        adPodding: i?.adPodding,
                        keyvalues: {
                          ABTestSlot1: u
                        }
                      };
                      H ? (J || (0, N.YM)(e, a, o, g(), performance.now()), J && Q.info("[StartScreen] - Adblock detected, skipping analytics FunnelPrerollRequest"), c(k.m.PREROLL_PLAYING), n?.ads?.showPrerollAd(h).then(() => {
                        J || (0, N.ml)(e, a, o, g()), J && Q.info("[StartScreen] - Adblock detected, skipping analytics FunnelPrerollEnd"), requestAnimationFrame(() => {
                          let e = location.href.split("?")[0];
                          o?.meta.alias && e.split("/").includes(o?.meta.alias) && c(k.m.GAME)
                        })
                      }).catch(e => {
                        (0, O.t)().error({
                          data: e
                        }, "[StartScreen] - Preroll ad failed, proceeding to game"), (0, Z.Cp)("platform.ad.preroll.failed", {
                          tags: {
                            game: o?.slug,
                            "platform.ad.preroll.failed": "true",
                            "platform.ad.preroll.error.message": e instanceof Error ? e.message : "Unknown error"
                          }
                        }), c(k.m.GAME)
                      })) : c(k.m.GAME)
                    },
                    variant: "jumbo",
                    testId: "play-button",
                    className: "_130uei5b",
                    size: "big",
                    "data-sentry-element": "Button",
                    "data-sentry-source-file": "Preroll.tsx",
                    children: [(0, _.jsx)(C.I, {
                      name: "play-outlined",
                      width: 24,
                      height: 32,
                      "data-sentry-element": "Icon",
                      "data-sentry-source-file": "Preroll.tsx"
                    }), u]
                  })
                }), x && v && (0, _.jsxs)("div", {
                  className: "_130uei5c",
                  children: [(0, _.jsx)(A.$, {
                    onClick: eo,
                    testId: "skip-this-ad-button",
                    className: "_130uei5d",
                    variant: "outline",
                    disabled: el,
                    children: (0, _.jsxs)("span", {
                      className: "_130uei5e",
                      children: ["Skip this ad", (0, _.jsxs)("span", {
                        className: "_130uei5f",
                        children: [5, (0, _.jsx)(R.default, {
                          unoptimized: !0,
                          src: "/media/gems-diamond-no-bg.png",
                          width: 20,
                          height: 20,
                          alt: "gem"
                        })]
                      })]
                    })
                  }), (0, _.jsx)(A.$, {
                    className: "_130uei5g",
                    onClick: () => {
                      M("subscribe", void 0, "removeAds")
                    },
                    testId: "subscribe-cta",
                    children: "Remove ads with Arkadium Plus"
                  })]
                })]
              })
            })
          })]
        })
      };
      var es = a(89549),
        en = a(14011),
        el = a(93284),
        ei = a(39576),
        eo = a(19183),
        ed = a(75693),
        ec = a.n(ed),
        em = a(67114),
        eu = ((r = {}).PASS_GAME_DATA = "PASS_GAME_DATA", r.UPDATE_LOCAL_STORAGE = "UPDATE_LOCAL_STORAGE", r.REWARD_CALLBACK = "REWARD_CALLBACK", r.INTERSTITIAL_CALLBACK = "INTERSTITIAL_CALLBACK", r.RESIZE_CONTAINER = "RESIZE_CONTAINER", r.SET_LS_ITEM = "SET_LS_ITEM", r.REMOVE_LS_ITEM = "REMOVE_LS_ITEM", r.AUTH_API_EVENT = "AUTH_API_EVENT", r.PURCHASE_RESPONSE = "PURCHASE_RESPONSE", r);
      let eh = e => {
        let t = JSON.parse(JSON.stringify(e)),
          a = document.body.querySelector?.(`iframe[src^="${em.l.IFRAME_BASE_URL}"]`) || null;
        a?.contentWindow?.postMessage?.({
          ...t
        }, a?.src?.replace?.(/\?.*/, "") || "*")
      };
      var eg = a(33097),
        ep = a(32366),
        ef = a(79481);
      let eb = (0, ef.createServerReference)("7c702406b73c1c96317d4f72d3984a9485ce7f0dbd", ef.callServer, void 0, ef.findSourceMapURL, "saveScore");
      a(54188), a(93329);
      var ex = ((s = {}).Daily = "Daily", s.Weekly = "Weekly", s.Monthly = "Monthly", s.AllTime = "All Time", s);
      let ev = {
          Daily: "daily",
          Weekly: "weekly",
          Monthly: "monthly",
          "All Time": "all_time"
        },
        ey = {
          Daily: "day",
          Weekly: "week",
          Monthly: "month",
          "All Time": "all"
        },
        e_ = (e, t) => {
          let a;
          switch (e) {
            case "Daily":
              a = t?.publicData?.day;
              break;
            case "Weekly":
              a = t?.publicData?.week;
              break;
            case "Monthly":
              a = t?.publicData?.month;
              break;
            default:
              a = t?.publicData?.all
          }
          return a || []
        };
      var ew = a(30040),
        ej = a(64604),
        eS = a(82330),
        eE = a(61181),
        eN = a(98566),
        ek = a(2777),
        eA = a(51770);
      a(14498);
      let eT = [{
          image: "/media/loader/broom.png",
          phrase: "Dusting off the pixels…",
          rotationClass: "_1lbbd9wf"
        }, {
          image: "/media/loader/cup.png",
          phrase: "Polishing your high scores…",
          rotationClass: "_1lbbd9wg"
        }, {
          image: "/media/loader/hamster.png",
          phrase: "Feeding the game hamsters…",
          rotationClass: "_1lbbd9wh"
        }, {
          image: "/media/loader/novel.png",
          phrase: "Untangling virtual yarn…",
          rotationClass: "_1lbbd9wi"
        }, {
          image: "/media/loader/foot.png",
          phrase: "Stretching our digital legs…",
          rotationClass: "_1lbbd9wj"
        }, {
          image: "/media/loader/oven.png",
          phrase: "Checking if we left the oven on… nope, all good!",
          rotationClass: "_1lbbd9wk"
        }, {
          image: "/media/loader/instructions.png",
          phrase: "Folding the game instructions...",
          rotationClass: "_1lbbd9wl"
        }, {
          image: "/media/loader/puzzle.png",
          phrase: "Lining up all the pieces...",
          rotationClass: "_1lbbd9wm"
        }],
        eC = w.memo(({
          isLoadingComplete: e = !1
        }) => {
          let {
            gameData: t,
            gameState: a
          } = (0, z.xg)(), [r, s] = (0, w.useState)(0), [n, l] = (0, w.useState)([]), [i, o] = (0, w.useState)(0), d = (0, w.useRef)(null), c = (0, w.useRef)(!1), m = (0, w.useRef)(null), u = (0, w.useRef)(null), h = (0, w.useRef)(null), g = (0, w.useRef)(0);
          if ((0, w.useEffect)(() => {
              c.current || (l([...eT].sort(() => Math.random() - .5)), c.current = !0)
            }, []), (0, w.useEffect)(() => {
              if (a !== k.m.GAME) {
                o(0), h.current && (clearInterval(h.current), h.current = null), u.current = null;
                return
              }
              return null === u.current && (u.current = performance.now(), g.current = performance.now(), o(0)), h.current = setInterval(() => {
                if (null !== u.current) {
                  var e;
                  let t = (e = performance.now() - u.current) <= 0 ? 0 : e <= 200 ? e / 200 * 50 : e <= 400 ? 50 + (e - 200) / 200 * 25 : e <= 600 ? 75 + (e - 400) / 200 * 15 : e <= 1600 ? 90 + (e - 600) / 1e3 * 5 : e <= 2600 ? 95 + (e - 1600) / 1e3 * 2 : e <= 3600 ? 97 + (e - 2600) / 1e3 * 1 : e <= 4600 ? 98 + (e - 3600) / 1e3 * 1 : 99,
                    a = performance.now();
                  a - g.current >= 100 && (g.current = a), o(t)
                }
              }, 16), () => {
                h.current && (clearInterval(h.current), h.current = null)
              }
            }, [e, a]), (0, w.useEffect)(() => (d.current = setInterval(() => {
              s(e => (e + 1) % n.length)
            }, 2e3), () => {
              d.current && (clearInterval(d.current), d.current = null)
            }), [n.length]), !t || 0 === n.length) return null;
          let p = n[r],
            f = t?.meta?.thumbs?.screenshotPath ?? "";
          return (0, _.jsxs)("div", {
            className: "_1lbbd9w9",
            children: [(0, _.jsx)("div", {
              className: "_1lbbd9wa",
              children: (0, _.jsx)(R.default, {
                src: f,
                alt: t.meta.name,
                className: "_1lbbd9wb",
                fill: !0
              })
            }), (0, _.jsxs)("div", {
              className: "_1lbbd9wc",
              children: [(0, _.jsx)("div", {
                className: "_1lbbd9wd",
                children: (0, _.jsx)(R.default, {
                  src: p.image,
                  alt: p.phrase,
                  className: S()("_1lbbd9we", p.rotationClass),
                  width: 100,
                  height: 100
                }, `image-${r}`)
              }), (0, _.jsx)("div", {
                className: "_1lbbd9wn",
                children: (0, _.jsx)("div", {
                  className: "_1lbbd9wo",
                  children: (0, _.jsx)("div", {
                    ref: m,
                    className: S()("_1lbbd9wp", e && "_1lbbd9wq"),
                    style: {
                      "--progress-width": `${i}%`
                    }
                  })
                })
              }), (0, _.jsx)("div", {
                className: "_1lbbd9wr",
                children: n.map((e, t) => (0, _.jsx)("p", {
                  className: S()("_1lbbd9ws", t === r && "_1lbbd9wt"),
                  children: e.phrase
                }, `phrase-${t}`))
              })]
            })]
          })
        });
      eC.displayName = "GameLoader";
      let eL = "reward",
        eG = "interstitial",
        eI = (0, ew.default)(() => a.e(9359).then(a.bind(a, 79359)).then(e => e.GameRenderingModule), {
          loadableGenerated: {
            webpack: () => [79359]
          },
          ssr: !1
        }),
        eR = ({
          playAgainStart: e,
          setScore: t,
          locale: a,
          arenaBadges: r,
          isFavorite: s
        }) => {
          let n = (0, O.t)(),
            {
              domain: l
            } = (0, eE.X)(),
            {
              gameState: i,
              updateGameState: o,
              gameData: d,
              configGamePage: c,
              isFullscreen: m
            } = (0, z.xg)(),
            {
              isAdsDisabledByRegion: u
            } = (0, Q.g)(),
            {
              sdk: h,
              status: g
            } = (0, U.T)(),
            {
              getGameplayId: p,
              generateGameplayId: f
            } = (0, L.T3)(),
            b = (0, B.sb)(),
            {
              features: x
            } = (0, G.R)(),
            v = x.auth.enabled,
            {
              doneLoading: y
            } = (0, eN.U)(),
            {
              adblockStatus: j
            } = (0, ee.V_)(),
            S = j === ee.fQ.DETECTED,
            E = (0, w.useMemo)(() => {
              if (v) try {
                return (0, ep.Q1)()
              } catch (e) {
                n.error({
                  data: e
                }, "[GameRenderingModule] - Failed to initialize auth service")
              }
              return null
            }, [v, n]),
            A = "authenticated" === (0, B.w1)(),
            C = (0, w.useRef)(A);
          C.current = A;
          let {
            uid: R
          } = (0, B.sb)(), P = (0, w.useRef)(!1), [M, D] = (0, w.useState)(void 0), [W, J] = (0, w.useState)(0), K = (0, w.useRef)(null), {
            fetchGems: er
          } = (0, B.Ij)(), {
            openModal: ed,
            closeModal: em,
            type: ef
          } = (0, I.h)(), ex = "sign-up" === (0, en.useSearchParams)().get("modal"), ev = (0, w.useRef)(null), ey = (0, w.useRef)(0), e_ = (0, w.useRef)(!1), ew = (0, w.useRef)(null), {
            favoriteGames: eT,
            favoriteGamesLoading: eR
          } = (0, B.rB)(), eP = void 0 !== s ? s : A && eT && !!eT?.includes(d?.slug || ""), eM = (0, w.useRef)(0), eD = x.core.isRewardedFullscreenABTestEnabled, eW = x.core.isRewardedUnlockGamesABTestEnabled, {
            isEnabled: eB,
            isControl: eO
          } = (0, ea.HC)("adshield"), e$ = (0, V.nW)(c?.prerollConfiguration, d?.meta.preroll), {
            adLayoutCode: eF
          } = (0, X.E)(), eU = (0, w.useRef)(null), ez = eF?.toLowerCase() === q.EAdLayoutCode.NO_MONETIZATION, eY = !!M || ez, eV = (0, w.useRef)(null), eZ = (0, w.useRef)(!1), eH = (0, w.useRef)(!1), [eX, eq] = (0, w.useState)(null), [eJ, eQ] = (0, w.useState)(!1);
          c?.prerollConfiguration?.prerollSeconds && e$.prerollSeconds;
          let eK = (0, B.Q2)();
          (0, w.useEffect)(() => {
            eK?.activeSubscriptions && eK?.expiredSubscriptions && D((0, ej.zN)(eK.activeSubscriptions, eK.expiredSubscriptions))
          }, [eK]);
          let e0 = (0, T.env)("NEXT_PUBLIC_BUILD_ENV"),
            e1 = (Y.bW[e0], "");
          eW ? (e1 = F.O1.getArkCookie($.Fg) || "", (0, et.w)(d?.slug)) : eD && (e1 = F.O1.getArkCookie($.Yj) || ""), eB && (e1 = eO ? "control" : "groupB");
          let e2 = {},
            e4 = d ? {
              ...d,
              name: d.name || "",
              meta: {
                ...d.meta,
                badges: (0, H.X7)([d], d.slug || "", r)
              }
            } : null;
          d?.renderingType === "External" && i === k.m.GAME && e4 && ((0, el.j1)("recentlyPlayed", e4, !1), d?.slug && eg.y.updateUserProfile({
            last_game_played: d.slug
          })), (0, w.useEffect)(() => {
            let t = p() || f(d?.slug || ""),
              a = () => {
                S || (0, N.aW)(e, eP, d, t, performance.now()), S && n.info("[GameRenderingModule] - Adblock detected, skipping analytics FunnelPrerollLoaded")
              },
              r = () => {
                S || (0, N.fy)(e, eP, d, t), S && n.info("[GameRenderingModule] - Adblock detected, skipping analytics FunnelPrerollSkipped")
              };
            if (i === k.m.PREROLL_PLAYING) return eU.current = "preroll", document.addEventListener("ark-video-loaded", a), document.addEventListener("ark-video-skipped", r), () => {
              document.removeEventListener("ark-video-loaded", a), document.removeEventListener("ark-video-skipped", r)
            }
          }, [e, d, i]), (0, w.useEffect)(() => (document.addEventListener("ark-video-skipped", tn), document.addEventListener("ark-video-skipped", ti), () => {
            document.removeEventListener("ark-video-skipped", tn), document.removeEventListener("ark-video-skipped", ti)
          }), []);
          let e3 = e => {
              let t = e?.data?.source;
              if ("string" == typeof t && t.startsWith("react")) return;
              "intervention" === e.data.type && (n.error({
                data: e.data
              }, "HEAVY_AD_INTERVENTION"), (0, Z.wd)("platform.game.heavyAd", {
                tags: {
                  game: d?.slug || "",
                  origin: e?.data?.origin || "legacy"
                },
                extra: {
                  category: "game",
                  message: "HEAVY_AD_INTERVENTION"
                },
                level: "warning"
              }), n.error({
                data: W
              }, "HEAVY_AD_INTERVENTION HANDLER"), (0, Z.wd)("platform.game.heavyAd.tryreload", {
                tags: {
                  heavyAd: W,
                  game: d?.slug || ""
                },
                extra: {
                  category: "game",
                  message: "HEAVY_AD_INTERVENTION"
                }
              }), (0, Z.bX)(100), J(e => e + 1));
              let a = e.data,
                {
                  type: r,
                  payload: s
                } = a || {};
              if (r) try {
                switch (r) {
                  case ei.c.TEST_READY:
                    P.current = !1;
                    break;
                  case ei.c.GAME_START:
                    n.info("GAME_START"), (0, Z.wd)("platform.game.start", {
                      extra: {
                        category: "game",
                        message: "GAME_START"
                      },
                      level: "info"
                    }), (0, Z.bX)(100), e4 && ((0, el.j1)("recentlyPlayed", e4, !1), d?.slug && eg.y.updateUserProfile({
                      last_game_played: d.slug
                    })), P.current = !1, eM.current = 0;
                    break;
                  case ei.c.AD_REFRESH:
                    n.info("AD_REFRESH");
                    break;
                  case ei.c.REWARD_START:
                    n.info("REWARD_START"), te(k.m.REWARD);
                    break;
                  case ei.c.INTERSTITIAL_START:
                    n.info("INTERSTITIAL_START"), te(k.m.INTERSTITIAL);
                    break;
                  case ei.c.PURCHASE_REQUEST:
                    n.info({
                      data: a
                    }, "PURCHASE_REQUEST"), e8();
                    break;
                  case ei.c.CHANGE_SCORE:
                    n.info({
                      data: s
                    }, "CHANGE_SCORE"), e7(a);
                    break;
                  case ei.c.GAME_END:
                    e5()
                }
              } catch (e) {
                (0, O.t)().error({
                  data: e
                }, "[GameRenderingModule] - onPlatformSpecificEvent error")
              }
            },
            e6 = () => ({
              customCssClassesUnitContainer: [ec().unitContainer],
              customCssClassesCanvasContainer: [ec().canvasContainer],
              customCssClassesCanvasBoxWrapper: [],
              customCssClassesCanvasBox__common: ["game", ec().canvasBox],
              customCssClassesCanvasBox__iframe: ["game", ec().canvasBox]
            }),
            e5 = () => {
              o(k.m.GAME_END)
            },
            e8 = () => {
              e_.current || (e_.current = !0, C.current ? ed("shop", void 0, "gameEvent") : ed("sign-up", void 0, "gameEvent"))
            },
            e9 = (0, w.useCallback)(() => {
              ed("sign-up", void 0, "gameEvent")
            }, [ed]),
            e7 = e => {
              let {
                type: a,
                payload: r
              } = e || {};
              t(r), r > eM.current && (eM.current = r, K.current && clearTimeout(K.current), K.current = setTimeout(() => {
                let e = {
                  slug: d?.slug || "",
                  score: r,
                  timestamp: new Date().toISOString()
                };
                ! function(e) {
                  let t = el.sj.getItem("arkcom:high_score"),
                    a = {};
                  if (t) try {
                    a = JSON.parse(t)
                  } catch (e) {
                    (0, O.t)().error({
                      data: e
                    }, "[saveScoreToLocalStorage] - Error parsing optimized high scores:"), a = {}
                  }
                  let r = a[e.slug];
                  !r || e.score > r.highestScore ? (a[e.slug] = {
                    highestScore: e.score,
                    timestamp: e.timestamp
                  }, el.sj.setItem("arkcom:high_score", JSON.stringify(a)), (0, O.t)().info(`[saveScoreToLocalStorage] - Saved higher score ${e.score} for game ${e.slug}`)) : (0, O.t)().info(`[saveScoreToLocalStorage] - Score ${e.score} for game ${e.slug} is not higher than existing ${r.highestScore}`)
                }(e), A && R && (eb(d?.slug || "", e.score, l || "", e.timestamp, new Date().getTimezoneOffset()), (0, el.eu)())
              }, 1e3))
            },
            te = t => {
              try {
                switch (t) {
                  case k.m.REWARD:
                    if ("ready" !== g) {
                      eh({
                        type: eu.REWARD_CALLBACK,
                        payload: {
                          hasReward: !0
                        }
                      }), (0, Z.wd)("platform.ad.reward.skipped.sdk.error", {
                        tags: {
                          game: d?.slug,
                          "platform.ad.reward.skipped.sdk.error": "true"
                        }
                      });
                      return
                    }
                    h?.ads?.showRewardAd(e2).then(() => {
                      eh({
                        type: eu.REWARD_CALLBACK,
                        payload: {
                          hasReward: !0
                        }
                      })
                    }).catch(e => {
                      (0, O.t)().error({
                        data: e
                      }, "Reward ad failed, proceeding to game"), (0, Z.Cp)("platform.ad.reward.failed", {
                        tags: {
                          game: d?.slug,
                          "platform.ad.reward.failed": "true",
                          "platform.ad.reward.error.message": e instanceof Error ? e.message : "Unknown error"
                        }
                      }), eh({
                        type: eu.REWARD_CALLBACK,
                        payload: {
                          hasReward: !0
                        }
                      })
                    });
                    return;
                  case k.m.INTERSTITIAL:
                    if ("ready" !== g) {
                      eh({
                        type: eu.INTERSTITIAL_CALLBACK,
                        payload: {
                          hasReward: !0
                        }
                      }), (0, Z.wd)("platform.ad.interstitial.skipped.sdk.error", {
                        tags: {
                          game: d?.slug,
                          "platform.ad.interstitial.skipped.sdk.error": "true"
                        }
                      });
                      return
                    }
                    h?.ads?.showInterstitialAd(e2).then(() => {
                      (0, N.mG)(e, d, p(), eP, m), eh({
                        type: eu.INTERSTITIAL_CALLBACK,
                        payload: {}
                      })
                    }).catch(e => {
                      (0, O.t)().error({
                        data: e
                      }, "Interstitial ad failed, proceeding to game"), (0, Z.Cp)("platform.ad.interstitial.failed", {
                        tags: {
                          game: d?.slug,
                          "platform.ad.interstitial.failed": "true",
                          "platform.ad.interstitial.error.message": e instanceof Error ? e.message : "Unknown error"
                        }
                      }), eh({
                        type: eu.INTERSTITIAL_CALLBACK,
                        payload: {}
                      })
                    });
                    return;
                  default:
                    (0, O.t)().error({
                      data: t
                    }, "Game state invalid: proceeding to game"), (0, Z.Cp)("platform.videoAds.invalidState.error", {
                      tags: {
                        game: d?.slug,
                        "platform.videoAds.invalidState.error": "true",
                        "platform.videoAds.invalidState.error.state": t
                      }
                    }), o(k.m.GAME)
                }
              } catch (e) {
                (0, O.t)().error({
                  data: e
                }, "[StartScreen] - Error while showing preroll"), (0, Z.Cp)(`platform.videoAds.${t.toLowerCase()}.error`, {
                  tags: {
                    game: d?.slug
                  },
                  extra: {
                    error: e instanceof Error ? e.message : "Unknown error"
                  }
                }), o(k.m.GAME)
              }
            },
            tt = () => {
              (n.info("[GameRenderingModule] - onRewardedAdShown"), (0, es.w)()) ? n.info("[GameRenderingModule] - Skipping funnelRewardEnd (handled by external component)"): (S || (0, N.Pq)(e, d, p(), eP, m, ""), S && n.info("[GameRenderingModule] - Adblock detected, skipping analytics FunnelRewardEnd"))
            },
            ta = (0, w.useCallback)(() => {
              ed("shop", void 0, "gameEvent"), (0, N.qT)({
                buttonLocation: "gameEvent"
              })
            }, [ed]),
            tr = (0, w.useCallback)(() => {
              em()
            }, [em]),
            ts = () => {
              n.info("[GameRenderingModule] - onInterstitialAdShown"), S || (0, N.mG)(e, d, p(), eP, m), S && n.info("[GameRenderingModule] - Adblock detected, skipping analytics FunnelInterstitialEnd")
            },
            tn = () => {
              if (n.info({
                  data: eU.current
                }, "[GameRenderingModule] - onRewardedAdSkipped"), eU.current !== eL) return;
              if ((0, es.w)()) return void n.info("[GameRenderingModule] - Skipping funnelRewardSkipped (handled by external component)");
              let t = p() || f(d?.slug || "");
              S || (0, N.a7)(e, eP, d, t), S && n.info("[GameRenderingModule] - Adblock detected, skipping analytics FunnelRewardSkipped")
            },
            tl = () => {
              if (eU.current = eL, (0, es.w)()) return void n.info("[GameRenderingModule] - Skipping funnelReward (handled by external component)");
              S || (0, N.Gd)(e, d, p(), eP, m, performance.now(), ""), S && n.info("[GameRenderingModule] - Adblock detected, skipping analytics FunnelRewardRequest");
              let t = {
                playAgainStart: e,
                gameData: d,
                gameplayId: p(),
                isFavorite: eP,
                isFullscreen: m,
                timestamp: performance.now()
              };
              n.info({
                data: t
              }, "[GameRenderingModule] - funnelRewardRequest triggered"), n.info("[GameRenderingModule] - onRewardedAdRequested");
              let a = () => {
                (() => {
                  if ((0, es.w)()) return n.info("[GameRenderingModule] - Skipping funnelRewardLoaded (handled by external component)");
                  let t = p() || f(d?.slug || "");
                  S || (0, N.rM)(e, eP, d, t, performance.now()), S && n.info("[GameRenderingModule] - Adblock detected, skipping analytics FunnelRewardLoaded")
                })(), n.info({
                  data: t
                }, "[GameRenderingModule] - funnelRewardLoaded triggered"), document.removeEventListener("ark-video-loaded", a)
              };
              document.addEventListener("ark-video-loaded", a)
            },
            ti = () => {
              if (n.info({
                  data: eU.current
                }, "[GameRenderingModule] - onInterstitialAdSkipped"), eU.current !== eG) return;
              let t = p() || f(d?.slug || "");
              S || (0, N.tQ)(e, eP, d, t), S && n.info("[GameRenderingModule] - Adblock detected, skipping analytics FunnelInterstitialSkipped")
            },
            to = () => {
              eU.current = eG, S || (0, N.kf)(e, d, p(), eP, m, performance.now()), S && n.info("[GameRenderingModule] - Adblock detected, skipping analytics FunnelInterstitialRequest");
              let t = {
                playAgainStart: e,
                gameData: d,
                gameplayId: p(),
                isFavorite: eP,
                isFullscreen: m,
                timestamp: performance.now()
              };
              n.info({
                data: t
              }, "[GameRenderingModule] - funnelInterstitialRequest triggered"), n.info("[GameRenderingModule] - onInterstitialAdRequested");
              let a = () => {
                let r;
                r = p() || f(d?.slug || ""), S || (0, N.ej)(e, eP, d, r, performance.now()), S && n.info("[GameRenderingModule] - Adblock detected, skipping analytics FunnelInterstitialLoaded"), n.info({
                  data: t
                }, "[GameRenderingModule] - funnelInterstitialLoaded triggered"), document.removeEventListener("ark-video-loaded", a)
              };
              document.addEventListener("ark-video-loaded", a)
            };
          (0, w.useEffect)(() => () => {
            E?.authApi?.getSessionStorage().destroy()
          }, [E]);
          let td = l?.startsWith("http") ? l.replace(/^https?:\/\//, "") : l,
            tc = () => {
              ey.current = 0, ew.current = setInterval(() => {
                ey.current < 10 ? ((0, eo.Gf)(), ey.current++) : (e_.current = !1, ew.current && (clearInterval(ew.current), ew.current = null))
              }, 100)
            },
            tm = () => {
              ew.current && (clearInterval(ew.current), ew.current = null)
            };
          (0, w.useEffect)(() => (ex ? (tm(), ey.current = 0) : tc(), () => {
            tm()
          }), [ex]), (0, w.useEffect)(() => (null !== ef && (ev.current = ef), null === ef && null !== ev.current ? tc() : (tm(), ey.current = 0), () => {
            tm()
          }), [ef]);
          let tu = async () => {
            if (v) try {
              return await (0, eS.i)()
            } catch (e) {
              n.error({
                data: {
                  err: e,
                  domain: window.location.hostname
                }
              }, "[GameRenderingModule.tsx::getAuthDataForIframe] - Failed to fetch auth data for iframe"), (0, Z.Cp)(e, {
                tags: {
                  component: "GameRenderingModule",
                  method: "getAuthDataForIframe",
                  domain: window.location.hostname
                }
              })
            }
            return null
          };
          (0, w.useEffect)(() => (function(e = {}) {
            let {
              intervalMs: t = 3e4,
              gameSlug: a
            } = e;
            if (!performance.memory) return (0, O.t)().warn("Memory API not available in this browser"), () => {};
            let r = null,
              s = () => {
                try {
                  let e = performance.memory,
                    t = e.usedJSHeapSize / 1024 / 1024,
                    r = e.totalJSHeapSize / 1024 / 1024,
                    s = e.usedJSHeapSize / e.jsHeapSizeLimit * 100;
                  (0, eA.Uk)({
                    name: "memory.snapshot",
                    op: "platform.memory.snapshot",
                    attributes: {
                      "memory.heap_used_mb": t,
                      "memory.heap_total_mb": r,
                      "memory.heap_usage_percent": s,
                      game: a
                    }
                  }).end()
                } catch (e) {
                  (0, O.t)().error({
                    data: e
                  }, "Memory monitoring failed"), (0, Z.Cp)(e)
                }
              },
              n = () => {
                null === r && (s(), r = setInterval(s, t))
              },
              l = () => {
                null !== r && (clearInterval(r), r = null)
              },
              i = () => {
                document.hidden ? l() : n()
              };
            return document.hidden || n(), document.addEventListener("visibilitychange", i), () => {
              l(), document.removeEventListener("visibilitychange", i)
            }
          })({
            gameSlug: d?.slug || "",
            intervalMs: 6e4
          }), [d?.slug]), (0, w.useEffect)(() => {
            if (i === k.m.GAME && !eV.current) {
              let e = (0, ek.Bk)();
              eV.current = (0, eA.Uk)({
                name: "game.load",
                op: "platform.game.load",
                onlyIfParent: !1,
                parentSpan: e ?? void 0,
                attributes: {
                  url: window.location.href,
                  game: d?.slug || ""
                }
              }), performance.mark("GAME_LOAD:START"), (0, Z.wd)("platform.game.init", {
                extra: {
                  heavyAd: W,
                  category: "platform",
                  message: "PLATFORM_INIT",
                  game: d?.slug || ""
                },
                level: "info"
              }), n.info({
                data: {
                  heavyAd: W,
                  category: "platform",
                  message: "PLATFORM_INIT",
                  game: d?.slug || ""
                }
              }, "[GameRenderingModule] - platform.game.init event fired")
            }
            return () => {
              eV.current && (eV.current.setAttribute("aborted", !0), eV.current.end(), eV.current = null), eZ.current = !1
            }
          }, [i, d?.slug]), (0, w.useEffect)(() => {
            i !== k.m.GAME && (eH.current = !1, eq(null), eQ(!1), eZ.current = !1)
          }, [i]), (0, w.useEffect)(() => {
            if (i !== k.m.GAME || !eZ.current || eH.current || null === eX || A && eR) return;
            eH.current = !0;
            let t = p() || f(d?.slug || ""),
              a = !!(A && eT && eT.includes(d?.slug || ""));
            (0, N.Ym)(e, d, t, a, m, eX)
          }, [i, A, eR, eT, eX]), (0, w.useEffect)(() => {
            let e = h?.host?.subscribeToUrlStateChange(e => {
              if (e.params) {
                let t = new URL(window.location.href);
                e.params.forEach((e, a) => {
                  t.searchParams.set(a, e)
                }), globalThis.history.pushState(null, "", t.toString())
              } else globalThis.history.pushState(null, "", e.url)
            });
            return () => {
              e?.()
            }
          }, [h]);
          let th = () => {
            if (!eZ.current) {
              eZ.current = !0, eQ(!0), h?.host?.sendUrlState({
                url: globalThis.location.href,
                params: new URLSearchParams(globalThis.location.search)
              });
              try {
                if (performance.mark("GAME_LOAD:END"), performance.getEntriesByName("GAME_LOAD:START").length > 0) {
                  let e = performance.measure("GAME_LOAD", "GAME_LOAD:START", "GAME_LOAD:END").duration;
                  performance.clearMarks("GAME_LOAD:START"), performance.clearMarks("GAME_LOAD:END"), performance.clearMeasures("GAME_LOAD"), eV.current && (eV.current.setAttributes({
                    "timeToTestReady.duration_ms": e,
                    game: d?.slug || ""
                  }), eV.current.end(), eV.current = null), (0, Z.wd)("platform.game.ready", {
                    tags: {
                      heavyAd: W,
                      game: d?.slug || "",
                      "timeToTestReady.duration_ms": e
                    },
                    extra: {
                      category: "game",
                      message: "TEST_READY"
                    },
                    level: "info"
                  }), n.info({
                    data: {
                      heavyAd: W,
                      game: d?.slug || "",
                      "timeToTestReady.duration_ms": e,
                      category: "game",
                      message: "TEST_READY"
                    }
                  }, "[GameRenderingModule] - platform.game.ready event fired"), eq(e)
                }
              } catch (e) {
                n.error({
                  data: e
                }, "Error measuring game load time:"), (0, Z.wd)("platform.game.metrics.error", {
                  extra: {
                    category: "game",
                    message: "GAME_LOAD_ERROR"
                  },
                  level: "error"
                })
              }
              setTimeout(() => {
                y("game")
              }, 2e3)
            }
          };
          return (0, w.useMemo)(() => (0, _.jsx)(eI, {
            game: d,
            isStateGame: $.K9.includes(i),
            isStateGamePlaying: $.K9.includes(i),
            isServer: !1,
            currentLang: a,
            arenaDomain: td,
            isIframeGame: !0,
            addEventHandlers: {},
            eaglePassedInGame: v,
            isUserSubscriber: eY,
            user: b?.uid ? b : null,
            subscriptionId: M?.subscriptionId,
            subscriptionPlan: M?.planId,
            doGetBackToGameTab: () => {},
            doSetGameObservable: () => {},
            doCloseMenu: tr,
            doOpenMenuLogin: e9,
            doOpenMenuPurchase: ta,
            doUpdateGemsAmount: er,
            doAdsRefresh: () => {},
            onGameTestReady: () => {},
            onGameStart: () => {},
            onGameEnd: e5,
            onScoreChange: e7,
            onRewardStart: () => {},
            onRewardEnd: () => {},
            onInterstitialStart: () => {},
            onInterstitialEnd: () => {},
            onPlatformSpecificEvent: e3,
            rewardVideoAvailable: !u,
            interstitialVideoAvailable: !u,
            onResize: () => {},
            onUnitMount: () => {},
            onUnitUpdate: () => {},
            onUnitUnmount: () => {},
            onRewardedAdShown: tt,
            onRewardedAdRequested: tl,
            onInterstitialAdShown: ts,
            onInterstitialAdRequested: to,
            arenaEnvironment: (() => {
              switch (e0) {
                case "production":
                case "staging":
                  return "prod";
                default:
                  return "dev"
              }
            })(),
            nestEnvironment: "production" === e0 ? "prod" : "staging" === e0 ? "stage" : "dev",
            authApiService: v && E?.authApi ? E.authApi : void 0,
            getAuthDataForIframe: v ? tu : void 0,
            ...e6,
            externalRenderingUrl: d?.renderingType === "External" ? d?.version : "",
            onLoadingEnd: th,
            customLoader: () => (0, _.jsx)(eC, {
              isLoadingComplete: eJ
            }),
            gameLoadSpanRef: eV
          }, W), [i, a, td, v, M, er, eY, W, eJ])
        },
        eP = ({
          className: e
        }) => (0, _.jsx)("div", {
          className: e,
          "data-sentry-component": "AdBlockerIcon",
          "data-sentry-source-file": "AdBlockerIcon.tsx",
          children: (0, _.jsx)("svg", {
            width: "108",
            height: "107",
            viewBox: "0 0 108 107",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "data-sentry-element": "svg",
            "data-sentry-source-file": "AdBlockerIcon.tsx",
            children: (0, _.jsx)("path", {
              d: "M54 9.72727C29.825 9.72727 10.2273 29.325 10.2273 53.5C10.2273 77.675 29.825 97.2727 54 97.2727C78.175 97.2727 97.7727 77.675 97.7727 53.5C97.7727 29.325 78.175 9.72727 54 9.72727ZM0.5 53.5C0.5 23.9528 24.4528 0 54 0C83.5472 0 107.5 23.9528 107.5 53.5C107.5 83.0472 83.5472 107 54 107C24.4528 107 0.5 83.0472 0.5 53.5ZM49.1364 34.0455C49.1364 31.3593 51.3139 29.1818 54 29.1818H54.0486C56.7348 29.1818 58.9123 31.3593 58.9123 34.0455C58.9123 36.7316 56.7348 38.9091 54.0486 38.9091H54C51.3139 38.9091 49.1364 36.7316 49.1364 34.0455ZM54 48.6364C56.6861 48.6364 58.8636 50.8139 58.8636 53.5V72.9545C58.8636 75.6407 56.6861 77.8182 54 77.8182C51.3139 77.8182 49.1364 75.6407 49.1364 72.9545V53.5C49.1364 50.8139 51.3139 48.6364 54 48.6364Z",
              fill: "black",
              "data-sentry-element": "path",
              "data-sentry-source-file": "AdBlockerIcon.tsx"
            })
          })
        });
      a(96430);
      let eM = () => {
        let {
          configGamePage: e
        } = (0, z.xg)(), t = {
          text: e?.adblockerDetectorConfig?.buttonText ?? "Learn how"
        };
        return (0, _.jsxs)("div", {
          "data-testid": "adblock-detector-screen",
          "data-sentry-component": "AdblockDetectorScreen",
          "data-sentry-source-file": "AdblockDetectorScreen.tsx",
          children: [(0, _.jsx)("div", {
            className: "_1v6t4530"
          }), (0, _.jsxs)("div", {
            className: "_1v6t4531",
            children: [(0, _.jsx)(eP, {
              className: "_1v6t4532",
              "data-sentry-element": "AdBlockerIcon",
              "data-sentry-source-file": "AdblockDetectorScreen.tsx"
            }), (0, _.jsx)("h2", {
              className: "_1v6t4533",
              "data-testid": "adblocker-detector-title",
              children: "Ad Blocker Detected"
            }), ["Ads keep our games free to play, and measures are taken to ensure they are secure.", "Enable ads to continue playing."].map((e, t) => (0, _.jsx)("p", {
              className: "_1v6t4534",
              children: e
            }, t)), (0, _.jsx)(A.$, {
              variant: "filled",
              onClick: () => (0, N.wG)(),
              href: e?.adblockerDetectorConfig?.buttonLink ?? "https://support.arkadium.com/en/support/solutions/articles/44001739800-i-received-a-message-about-my-ad-blocker-what-should-i-do-",
              className: "_1v6t4535",
              testId: "adblocker-detector-button",
              "data-sentry-element": "Button",
              "data-sentry-source-file": "AdblockDetectorScreen.tsx",
              children: t.text
            })]
          })]
        })
      };
      var eD = a(33853),
        eW = "s15olnk",
        eB = a(72200),
        eO = a(40725);
      a(89201);
      var e$ = a(60921),
        eF = a(39768);
      let eU = ({
        gameRecommendations: e,
        title: t
      }) => {
        let a = (0, e$.lm)(),
          r = 3;
        return (a === eF.LB.sm && (r = 2), e && 0 !== e.length) ? (0, _.jsxs)("div", {
          className: "dhd12c0",
          "data-sentry-component": "ColumnCardBlock",
          "data-sentry-source-file": "index.tsx",
          children: [t && (0, _.jsx)("p", {
            className: "dhd12c1",
            children: t
          }), (0, _.jsx)("div", {
            className: "dhd12c3",
            children: e.slice(0, r).map(e => (0, _.jsx)(eO.q, {
              className: "dhd12c2",
              href: `/games/${e.slug}`,
              size: "small",
              preload: !0,
              background: e.meta.thumbs.graphic_288x152,
              hoverBlock: {
                type: "none"
              },
              slug: e.slug
            }, e.slug))
          })]
        }) : null
      };
      var ez = a(30423),
        eY = a(60543);
      let eV = ({
        gameScore: e,
        handlePlayAgain: t
      }) => {
        let a = (0, eD.d)(),
          {
            gameData: r,
            configGamePage: s,
            isFullscreen: n
          } = (0, z.xg)(),
          l = (0, eY.KV)(s),
          i = (0, eY.d9)(s),
          [o, d] = (0, w.useState)(null != e ? e.toString() : "0"),
          [c, m] = (0, w.useState)(!1),
          u = (0, z.ws)(),
          {
            uid: h,
            avatar: g
          } = (0, B.sb)(),
          p = (0, B.XI)(),
          {
            favoriteGames: f
          } = (0, B.rB)(),
          b = p && f && !!f?.includes(r?.slug || ""),
          {
            features: x
          } = (0, G.R)(),
          v = x.auth.enabled,
          {
            openModal: y
          } = (0, I.h)(),
          [j, E] = (0, w.useState)(!0),
          [k, T] = (0, w.useState)(!1),
          [P, M] = (0, w.useState)(!0);
        (0, w.useEffect)(() => {
          E(a.isAbove(eF.LB.md)), T(a.width > 768 && a.width <= eF.LO.md), M(a.width >= 1900)
        }, [a]);
        let W = 80;
        P ? W = 130 : (j || k) && (W = 100);
        let {
          getGameplayId: $,
          resetGameplayId: F
        } = (0, L.T3)();
        (0, w.useEffect)(() => {
          0 === e || e ? null != e ? d(e.toString()) : d("0") : d(a.width > eF.LO.md ? "00000" : "000")
        }, [e, a.width]), (0, w.useEffect)(() => {
          h && (async () => {
            try {
              let t = new URLSearchParams({
                slug: r?.slug || ""
              });
              t.append("userId", h);
              let a = await (0, ez.db)(`${ez.lJ.LEADERBOARD_HIGH_SCORE}?${t.toString()}`);
              if ("errorCode" in a) {
                let e = Array.isArray(a.message) ? a.message.join(", ") : a.message ?? "Unknown error";
                throw Error(e)
              }
              let s = a?.highScores?.highScores || [];
              m(!!(e && e > 0 && ((e, t) => {
                if (!t.length) return !0;
                let a = Math.max(...t.map(e => e.score));
                return e > a
              })(e, s)))
            } catch (e) {
              (0, O.t)().error({
                data: e
              }, "[GameEnd] - Error fetching high score data:")
            }
          })()
        }, [h, r?.slug, e]);
        let U = s?.gameEndConfig?.buttonText ?? "Play again",
          Y = g && !g.includes("avatar_blank") ? g : void 0,
          V = () => {
            y("sign-up", void 0, "gameEnd"), (0, N.sY)("gameEnd")
          },
          Z = s?.gameEndConfig?.yourScoreImage?.url ?? "/media/game/end_game_asset.avif",
          H = s?.gameEndConfig?.yourScoreText ?? "YOUR SCORE";
        return (0, _.jsxs)("div", {
          className: "s15oln0",
          "data-sentry-component": "GameEnd",
          "data-sentry-source-file": "GameEnd.tsx",
          children: [(0, _.jsx)(D, {
            "data-sentry-element": "BlurredLayer",
            "data-sentry-source-file": "GameEnd.tsx"
          }), u.length > 0 && (0, _.jsx)("div", {
            className: "s15olnn",
            children: (0, _.jsx)(eU, {
              title: "You may also like",
              gameRecommendations: u
            })
          }), (0, _.jsxs)("div", {
            className: S()("s15oln2", !p && "s15oln3"),
            children: [(0, _.jsx)("div", {
              className: S()("s15olne"),
              children: (0, _.jsxs)("div", {
                className: "s15olnf",
                children: [(0, _.jsxs)("div", {
                  className: "s15olng",
                  children: [(0, _.jsx)(R.default, {
                    unoptimized: !0,
                    src: Z,
                    alt: "Game end placeholder",
                    fill: !0,
                    priority: !0,
                    className: "s15olnh",
                    "data-sentry-element": "Image",
                    "data-sentry-source-file": "GameEnd.tsx"
                  }), (0, _.jsx)("span", {
                    className: "s15olnm",
                    children: H
                  })]
                }), p && g && (0, _.jsx)("div", {
                  className: "s15olno",
                  "data-has-crown": c ? "true" : "false",
                  children: (0, _.jsxs)("div", {
                    className: "s15oln9",
                    children: [(0, _.jsx)("div", {
                      className: "s15olnc",
                      "aria-hidden": !0
                    }), c && (0, _.jsx)(R.default, {
                      unoptimized: !0,
                      src: "/media/game/crown.png",
                      alt: "Crown",
                      width: 72,
                      height: 63,
                      className: "s15olnq",
                      "data-testid": "crown",
                      loading: "eager",
                      priority: !0
                    }), (0, _.jsx)("div", {
                      className: "s15olna",
                      children: (0, _.jsx)(eB.e, {
                        avatarImage: Y,
                        size: W,
                        maxSize: W
                      })
                    })]
                  })
                }), (0, _.jsx)("div", {
                  className: "s15oln7",
                  children: o
                }), (0, _.jsx)("div", {
                  className: S()("s15olni", !p && "s15olnj"),
                  children: v && p ? l : (0, _.jsxs)(_.Fragment, {
                    children: [i, v && (0, _.jsxs)("span", {
                      className: "s15olnl",
                      children: [(0, _.jsx)(A.$, {
                        onClick: () => V(),
                        className: eW,
                        children: "Sign in"
                      }), " ", "or", " ", (0, _.jsx)(A.$, {
                        onClick: () => V(),
                        className: eW,
                        children: "create a profile"
                      })]
                    })]
                  })
                })]
              })
            }), (0, _.jsx)("div", {
              className: S()("s15oln5", !p && "s15oln6"),
              children: (0, _.jsxs)(A.$, {
                variant: "jumbo",
                size: "big",
                onClick: () => {
                  let e = $();
                  (0, N.oX)(r, e, b, n), F(), t();
                  {
                    let e = new URL(window.location.href);
                    e.searchParams.set("playAgain", ""), window.history.pushState({}, "", e)
                  }
                },
                className: "s15oln4",
                "data-sentry-element": "Button",
                "data-sentry-source-file": "GameEnd.tsx",
                children: [(0, _.jsx)(C.I, {
                  name: "play-outlined",
                  width: 24,
                  height: 32,
                  "data-sentry-element": "Icon",
                  "data-sentry-source-file": "GameEnd.tsx"
                }), U]
              })
            })]
          })]
        })
      };
      var eZ = a(69067),
        eH = a(88058),
        eX = a(31969);
      a(15810);
      var eq = "_11ecl401o",
        eJ = "_11ecl40i",
        eQ = "_11ecl401k",
        eK = "_11ecl40t",
        e0 = "_11ecl401b",
        e1 = "_11ecl401g",
        e2 = "_11ecl401a",
        e4 = "_11ecl401z",
        e3 = "_11ecl4020",
        e6 = "_11ecl40f",
        e5 = "_11ecl401l",
        e8 = "_11ecl40l",
        e9 = "_11ecl40v",
        e7 = "_11ecl40w",
        te = "_11ecl40q",
        tt = "_11ecl40s",
        ta = "_11ecl40r",
        tr = "_11ecl401m",
        ts = "_11ecl40k",
        tn = "_11ecl40j",
        tl = "_11ecl4019",
        ti = a(61952),
        to = a(33090);
      let td = ["/media/gold-cup.avif", "/media/silver-cup.avif", "/media/bronze-cup.avif"],
        tc = ({
          rank: e = 0,
          avatarUrl: t,
          countryCode: a,
          userName: r,
          totalScore: s,
          isCurrentUser: n = !1,
          date: l,
          time: i,
          className: o
        }) => {
          let {
            openModal: d
          } = (0, I.h)(), {
            isAtMost: c,
            isBetween: m
          } = (0, eD.d)(), [u, h] = (0, w.useState)(!1), [g, p] = (0, w.useState)(!1);
          (0, w.useEffect)(() => {
            h(c(eF.LB.md)), p(m(eF.LB.md, eF.LB.xl))
          }, [c, m]);
          let f = u ? "Sign in" : "Sign in to save your score",
            b = (0, B.XI)(),
            x = u ? (0, H.y)(s) : g ? (0, H.y)(s, H.XJ.MILLION) : s;
          return (0, _.jsx)("div", {
            className: `_11ecl40e ${o} ${n?"_11ecl4013":""}`,
            role: "row",
            "data-sentry-component": "LeaderboardItem",
            "data-sentry-source-file": "LeaderboardItem.tsx",
            children: l ? (0, _.jsxs)(_.Fragment, {
              children: [(0, _.jsxs)("div", {
                className: "_11ecl401d",
                children: [(0, _.jsx)("span", {
                  children: l
                }), (0, _.jsx)("span", {
                  className: "_11ecl401y",
                  children: i
                })]
              }), (0, _.jsx)("span", {
                className: ts,
                children: x
              })]
            }) : (0, _.jsxs)(_.Fragment, {
              children: [(0, _.jsxs)("div", {
                className: "_11ecl40a",
                children: [0 === e && (0, _.jsx)(eX.StaticImage, {
                  className: "_11ecl401x",
                  src: "/media/cup.avif",
                  width: 48,
                  height: 48,
                  alt: "Rank"
                }), e > 0 && (0, _.jsx)("div", {
                  className: "_11ecl40h",
                  children: e <= 3 ? (0, _.jsx)(eX.StaticImage, {
                    className: "_11ecl401w",
                    src: td[e - 1],
                    alt: `Rank ${e}`,
                    width: 64,
                    height: 64,
                    loading: "eager"
                  }) : (0, _.jsx)("div", {
                    className: `_11ecl401u  ${n?"_11ecl401v":""}`,
                    children: (0, _.jsx)("span", {
                      children: e
                    })
                  })
                }), (0, _.jsx)(eX.StaticImage, {
                  src: t,
                  alt: `${r}'s avatar`,
                  className: "_11ecl40g",
                  width: 72,
                  height: 72
                }), (0, _.jsxs)("div", {
                  className: "_11ecl40b",
                  children: [(0, _.jsx)("span", {
                    className: tn,
                    children: n ? `${r} (Me)` : r
                  }), a && (0, _.jsx)(ti.Y, {
                    code: a,
                    size: "24x24",
                    className: eJ
                  })]
                })]
              }), e > 0 || 0 === e && b ? (0, _.jsx)("span", {
                className: ts,
                children: x
              }) : (0, _.jsx)(A.$, {
                variant: "outline",
                size: "small",
                className: e3,
                onClick: () => void(d("sign-up", void 0, "leaderboard"), (0, N.sY)("leaderboard")),
                "aria-label": f,
                children: (0, _.jsx)(to.JU, {
                  size: "large",
                  className: e4,
                  children: f
                })
              })]
            })
          })
        };
      var tm = a(18596);
      let tu = ({
          categoryLabels: e,
          timeLabels: t,
          onCategoryClick: a,
          onTimeClick: r
        }) => {
          let [s, n] = (0, w.useState)(e[0]), [l, i] = (0, w.useState)(t[0]), o = e => {
            n(e), a(e)
          }, d = e => {
            i(e), r(e)
          };
          return (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsxs)("div", {
              className: "_11ecl40n",
              children: [(0, _.jsx)("div", {
                className: "_11ecl40p",
                children: e.map((e, t) => (0, _.jsx)("button", {
                  role: "tab",
                  "aria-label": e,
                  className: `${te} ${s===e?ta:""}`,
                  onClick: () => o(e),
                  children: e
                }, t))
              }), "All Players" === s && (0, _.jsx)("div", {
                className: "_11ecl40p",
                children: t.map((e, t) => (0, _.jsx)("button", {
                  role: "tab",
                  "aria-label": e,
                  className: `${te} ${l===e?ta:""}`,
                  onClick: () => d(e),
                  children: e
                }, t))
              })]
            }), (0, _.jsxs)("div", {
              className: "_11ecl40o",
              children: [(0, _.jsxs)(tm.bL, {
                value: s,
                onValueChange: o,
                "data-sentry-element": "Select.Root",
                "data-sentry-source-file": "LeaderboardTabs.tsx",
                children: [(0, _.jsxs)(tm.l9, {
                  className: `${eK} ${s?ta:""}`,
                  "data-sentry-element": "Select.Trigger",
                  "data-sentry-source-file": "LeaderboardTabs.tsx",
                  children: [(0, _.jsx)(tm.WT, {
                    "aria-label": s,
                    "data-sentry-element": "Select.Value",
                    "data-sentry-source-file": "LeaderboardTabs.tsx",
                    children: (0, _.jsx)("div", {
                      className: `${te} ${s?ta:""}`,
                      children: s
                    })
                  }), (0, _.jsx)(tm.In, {
                    "data-sentry-element": "Select.Icon",
                    "data-sentry-source-file": "LeaderboardTabs.tsx",
                    children: (0, _.jsx)(C.I, {
                      className: tt,
                      name: "chevron-bottom",
                      "data-sentry-element": "Icon",
                      "data-sentry-source-file": "LeaderboardTabs.tsx"
                    })
                  })]
                }), (0, _.jsx)(tm.ZL, {
                  "data-sentry-element": "Select.Portal",
                  "data-sentry-source-file": "LeaderboardTabs.tsx",
                  children: (0, _.jsx)(tm.UC, {
                    position: "popper",
                    align: "end",
                    "data-sentry-element": "Select.Content",
                    "data-sentry-source-file": "LeaderboardTabs.tsx",
                    children: (0, _.jsx)(tm.LM, {
                      className: e9,
                      "data-sentry-element": "Select.Viewport",
                      "data-sentry-source-file": "LeaderboardTabs.tsx",
                      children: e.map((e, t) => (0, _.jsx)(tm.q7, {
                        value: e,
                        className: e7,
                        children: (0, _.jsx)(tm.p4, {
                          children: e
                        })
                      }, t))
                    })
                  })
                })]
              }), "All Players" === s && (0, _.jsxs)(tm.bL, {
                value: l,
                onValueChange: d,
                children: [(0, _.jsxs)(tm.l9, {
                  className: `${eK} ${l?ta:""}`,
                  children: [(0, _.jsx)(tm.WT, {
                    "aria-label": l,
                    children: (0, _.jsx)("div", {
                      className: `${te} ${l?ta:""}`,
                      children: l
                    })
                  }), (0, _.jsx)(tm.In, {
                    children: (0, _.jsx)(C.I, {
                      className: tt,
                      name: "chevron-bottom"
                    })
                  })]
                }), (0, _.jsx)(tm.ZL, {
                  children: (0, _.jsx)(tm.UC, {
                    position: "popper",
                    align: "end",
                    children: (0, _.jsx)(tm.LM, {
                      className: e9,
                      children: t.map((e, t) => (0, _.jsx)(tm.q7, {
                        value: e,
                        className: e7,
                        children: (0, _.jsx)(tm.p4, {
                          children: e
                        })
                      }, t))
                    })
                  })
                })]
              })]
            })]
          })
        },
        th = ({
          highScores: e,
          isLoggedIn: t
        }) => t ? e && 0 !== e.length ? (0, _.jsxs)("div", {
          className: tl,
          "data-sentry-component": "LeaderboardWallOfFame",
          "data-sentry-source-file": "LeaderboardWallOfFame.tsx",
          children: [(0, _.jsx)("p", {
            className: tr,
            children: "Wall of Fame"
          }), (0, _.jsx)("ul", {
            className: e2,
            children: e.slice(0, 3).map((e, t, a) => (0, _.jsxs)("div", {
              children: [(0, _.jsxs)("li", {
                className: e0,
                children: [(0, _.jsxs)("div", {
                  className: e1,
                  children: [(0, _.jsx)(eX.StaticImage, {
                    src: "/media/cup.avif",
                    alt: "Wall of Fame",
                    width: 34,
                    height: 34
                  }), (0, _.jsx)("span", {
                    className: e5,
                    children: new Date(e.timestamp).toLocaleDateString("en-US", {
                      month: "long",
                      day: "2-digit",
                      year: "numeric"
                    })
                  })]
                }), (0, _.jsx)("span", {
                  className: e8,
                  children: e.score
                })]
              }), t < a.length - 1 && (0, _.jsx)("hr", {
                className: eQ
              })]
            }, t))
          })]
        }) : (0, _.jsxs)("div", {
          className: tl,
          children: [(0, _.jsx)("p", {
            className: tr,
            children: "Wall of Fame"
          }), (0, _.jsxs)("ul", {
            className: e2,
            children: [(0, _.jsxs)("li", {
              className: e0,
              children: [(0, _.jsxs)("div", {
                className: e1,
                children: [(0, _.jsx)(eX.StaticImage, {
                  src: "/media/cup.avif",
                  alt: "Wall of Fame cup",
                  width: 34,
                  height: 34
                }), (0, _.jsx)("span", {
                  className: `${e5} ${eq}`,
                  children: "January 17, 2025"
                })]
              }), (0, _.jsx)("span", {
                className: `${e8} ${eq}`,
                children: "10000"
              })]
            }), (0, _.jsx)("hr", {
              className: eQ
            }), (0, _.jsxs)("li", {
              className: e0,
              children: [(0, _.jsxs)("div", {
                className: e1,
                children: [(0, _.jsx)(eX.StaticImage, {
                  src: "/media/cup.avif",
                  alt: "Wall of Fame cup",
                  width: 34,
                  height: 34
                }), (0, _.jsx)("span", {
                  className: `${e5} ${eq}`,
                  children: "March 21, 2024"
                })]
              }), (0, _.jsx)("span", {
                className: `${e8} ${eq}`,
                children: "9500"
              })]
            }), (0, _.jsx)("hr", {
              className: eQ
            }), (0, _.jsxs)("li", {
              className: e0,
              children: [(0, _.jsxs)("div", {
                className: e1,
                children: [(0, _.jsx)(eX.StaticImage, {
                  src: "/media/cup.avif",
                  alt: "Wall of Fame cup",
                  width: 34,
                  height: 34
                }), (0, _.jsx)("span", {
                  className: `${e5} ${eq}`,
                  children: "September 15, 2024"
                })]
              }), (0, _.jsx)("span", {
                className: `${e8} ${eq}`,
                children: "9000"
              })]
            })]
          })]
        }) : (0, _.jsxs)("div", {
          className: tl,
          children: [(0, _.jsx)("p", {
            className: tr,
            children: "Wall of Fame"
          }), (0, _.jsxs)("ul", {
            className: e2,
            children: [(0, _.jsxs)("li", {
              className: e0,
              children: [(0, _.jsxs)("div", {
                className: e1,
                children: [(0, _.jsx)(eX.StaticImage, {
                  src: "/media/cup.avif",
                  alt: "Wall of Fame cup",
                  width: 34,
                  height: 34,
                  loading: "eager"
                }), (0, _.jsx)("span", {
                  className: `${e5} ${eq}`,
                  children: "Placeholder Date"
                })]
              }), (0, _.jsx)("span", {
                className: `${e8} ${eq}`,
                children: "0"
              })]
            }), (0, _.jsx)("hr", {
              className: eQ
            }), (0, _.jsxs)("li", {
              className: e0,
              children: [(0, _.jsxs)("div", {
                className: e1,
                children: [(0, _.jsx)(eX.StaticImage, {
                  src: "/media/cup.avif",
                  alt: "Wall of Fame cup",
                  width: 34,
                  height: 34
                }), (0, _.jsx)("span", {
                  className: `${e5} ${eq}`,
                  children: "Placeholder Date"
                })]
              }), (0, _.jsx)("span", {
                className: `${e8} ${eq}`,
                children: "0"
              })]
            }), (0, _.jsx)("hr", {
              className: eQ
            }), (0, _.jsxs)("li", {
              className: e0,
              children: [(0, _.jsxs)("div", {
                className: e1,
                children: [(0, _.jsx)(eX.StaticImage, {
                  src: "/media/cup.avif",
                  alt: "Wall of Fame cup",
                  width: 34,
                  height: 34
                }), (0, _.jsx)("span", {
                  className: `${e5} ${eq}`,
                  children: "Placeholder Date"
                })]
              }), (0, _.jsx)("span", {
                className: `${e8} ${eq}`,
                children: "0"
              })]
            })]
          })]
        }),
        tg = ({
          avatarUrl: e,
          userName: t,
          countryCode: a,
          totalScore: r,
          isSubscriber: s,
          highScoreData: n,
          registrationDate: l
        }) => {
          let i = (0, B.XI)();
          return (0, _.jsxs)("div", {
            className: "_11ecl40x",
            "data-sentry-component": "LeaderboardUserInfo",
            "data-sentry-source-file": "LeaderboardUserInfo.tsx",
            children: [(0, _.jsxs)("div", {
              className: "_11ecl401n",
              children: [(0, _.jsxs)("div", {
                className: "_11ecl4016",
                children: [(0, _.jsx)(eX.StaticImage, {
                  src: e,
                  alt: `${t}'s avatar`,
                  width: 169,
                  height: 166,
                  className: "_11ecl4017",
                  "data-sentry-element": "StaticImage",
                  "data-sentry-source-file": "LeaderboardUserInfo.tsx"
                }), a && (0, _.jsx)("div", {
                  className: "_11ecl4018",
                  children: (0, _.jsx)(ti.Y, {
                    code: a,
                    size: "24x24",
                    className: eJ
                  })
                })]
              }), (0, _.jsxs)("div", {
                className: "_11ecl401j",
                children: [(0, _.jsxs)("div", {
                  className: "_11ecl4012",
                  children: [(0, _.jsx)("span", {
                    className: tn,
                    children: t
                  }), s && "Guest" !== t && (0, _.jsxs)("span", {
                    className: "_11ecl401f",
                    children: ["Arkadium Plus Subscriber since ", l]
                  })]
                }), "Guest" !== t && (0, _.jsx)("span", {
                  className: "_11ecl4011",
                  children: r
                })]
              })]
            }), (0, _.jsx)(th, {
              highScores: n,
              isLoggedIn: i,
              "data-sentry-element": "LeaderboardWallOfFame",
              "data-sentry-source-file": "LeaderboardUserInfo.tsx"
            })]
          })
        };
      var tp = a(66236),
        tf = a(5909);
      let tb = ({
          gameData: e,
          gameRecommendations: t,
          onClose: a,
          configs: r
        }) => {
          var s;
          let {
            domain: n
          } = (0, eE.X)(), [l, i] = (0, w.useState)("All Players"), [o, d] = (0, w.useState)(ex.Daily), [c, m] = (0, w.useState)(null), [u, h] = (0, w.useState)(null), {
            uid: g,
            name: p,
            countryId: f,
            avatar: b,
            isSubscriber: x,
            registrationDate: v
          } = (0, B.sb)(), {
            openModal: y
          } = (0, I.h)(), j = (0, B.XI)(), [S, E] = (0, w.useState)(!1), k = (0, w.useRef)(!1), T = (0, w.useRef)(null), C = (0, O.t)(), {
            fetchLeaderboardDataApi: L
          } = (0, tf.T)(), G = (0, w.useCallback)(async () => {
            try {
              let t = await L(e.slug, g);
              m(t)
            } catch (e) {
              h(e.message)
            }
          }, [e.slug, g, L]), R = (0, w.useCallback)(async () => {
            if (k.current) return;
            let e = (0, el.f6)();
            if (0 === Object.keys(e).length) return void E(!0);
            let t = Object.entries(e).map(([e, t]) => ({
              slug: e,
              score: t.highestScore,
              timestamp: t.timestamp
            }));
            if (t.length > 0) {
              k.current = !0;
              try {
                for (let e of t) await eb(e.slug, e.score, n || "", e.timestamp, new Date().getTimezoneOffset());
                (0, el.eu)(), E(!0), setTimeout(() => {
                  G()
                }, 500)
              } catch (e) {
                C.error({
                  data: e
                }, "[Leaderboard] - Failed to sync scores:")
              } finally {
                k.current = !1
              }
            } else E(!0)
          }, [n, C, G]);
          if ((0, w.useEffect)(() => {
              try {
                (0, N.N6)()
              } catch (e) {
                C.error({
                  data: e
                }, "[Leaderboard] - Analytics tracking failed:")
              }
            }, []), (0, w.useEffect)(() => {
              j && !S && R()
            }, [j, S, R]), (0, w.useEffect)(() => {
              G()
            }, [G]), (0, w.useEffect)(() => {
              j && g && G()
            }, [j, g, G]), (0, w.useEffect)(() => {
              if ("All Players" !== l || !c) return;
              let e = e_(o, c),
                t = (p || "").trim().toLowerCase();
              if (!e || 0 === e.length) return;
              let a = e.findIndex(e => e.name?.trim().toLowerCase() === t);
              if (a >= 0 && a < 100 && T.current) {
                let e = T.current.children[a];
                e && T.current.scrollTo({
                  top: e.offsetTop - e.clientHeight - T.current.clientHeight / 2,
                  behavior: "smooth"
                })
              }
            }, [l, o, c, p]), !c) return null;
          let P = e_(o, c),
            M = P?.find(e => e.uid === g)?.score,
            D = (s = c.topGameScores, s && s[ey[o]] || 0),
            W = () => {
              a()
            },
            $ = {
              avatarUrl: b || "",
              userName: p || "Guest",
              totalScore: c?.highScores?.highScores?.length > 0 ? Math.max(...c.highScores.highScores.map(e => e.score || 0)) : 0,
              countryId: f || "",
              countryFlagUrl: f ? `/media/flags-icons/${f.toLowerCase()}.png` : null,
              isSubscriber: x || !1
            },
            F = $.userName.trim().toLowerCase(),
            U = P?.some(e => e.uid === g || e.name?.trim().toLowerCase() === F);
          return (0, _.jsxs)("div", {
            className: "_11ecl408",
            "data-sentry-component": "Leaderboard",
            "data-sentry-source-file": "index.tsx",
            children: [(0, _.jsxs)("div", {
              className: "_11ecl404",
              children: [(0, _.jsxs)("div", {
                className: "_11ecl400",
                children: [(0, _.jsx)(eX.StaticImage, {
                  src: "/media/crown.svg",
                  alt: "Leaderboard icon",
                  width: 20,
                  height: 20,
                  "data-sentry-element": "StaticImage",
                  "data-sentry-source-file": "index.tsx"
                }), (0, _.jsx)("p", {
                  className: "_11ecl402",
                  children: "Leaderboard"
                })]
              }), (0, _.jsx)("button", {
                className: "_11ecl406",
                onClick: W,
                children: (0, _.jsx)(eX.StaticImage, {
                  src: "/media/x-close-white.svg",
                  alt: "Close",
                  width: 32,
                  height: 32,
                  "data-sentry-element": "StaticImage",
                  "data-sentry-source-file": "index.tsx"
                })
              })]
            }), (0, _.jsxs)("div", {
              className: "_11ecl409",
              style: {
                background: r?.backgroundImage ? `url(${r.backgroundImage.url})` : `${r?.backgroundColor||e?.meta?.backgroundColor}`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              },
              children: [(0, _.jsxs)("div", {
                className: "_11ecl405",
                children: [(0, _.jsxs)("div", {
                  className: "_11ecl401",
                  children: [(0, _.jsx)(eX.StaticImage, {
                    src: "/media/crown.svg",
                    alt: "Leaderboard icon",
                    width: 20,
                    height: 20,
                    "data-sentry-element": "StaticImage",
                    "data-sentry-source-file": "index.tsx"
                  }), (0, _.jsx)("p", {
                    className: "_11ecl403",
                    children: "Leaderboard"
                  })]
                }), (0, _.jsx)("button", {
                  className: "_11ecl407",
                  onClick: W,
                  children: (0, _.jsx)(eX.StaticImage, {
                    src: "/media/x-close-white.svg",
                    alt: "Close",
                    width: 32,
                    height: 32,
                    "data-sentry-element": "StaticImage",
                    "data-sentry-source-file": "index.tsx"
                  })
                })]
              }), (0, _.jsxs)("div", {
                className: "_11ecl40d",
                children: [e?.meta?.thumbs?.graphic_184x400 && (0, _.jsx)("div", {
                  className: "_11ecl40c",
                  style: {
                    backgroundImage: `url(${e?.meta?.thumbs?.graphic_184x400})`
                  }
                }), (0, _.jsx)("div", {
                  className: "_11ecl4014",
                  children: (0, _.jsx)(eU, {
                    title: "Play similar games",
                    gameRecommendations: t,
                    "data-sentry-element": "ColumnCardBlock",
                    "data-sentry-source-file": "index.tsx"
                  })
                })]
              }), (0, _.jsxs)("div", {
                className: "_11ecl40m",
                children: [(0, _.jsx)(tu, {
                  categoryLabels: ["All Players", "My Scores"],
                  timeLabels: Object.values(ex),
                  onCategoryClick: e => {
                    i(e)
                  },
                  onTimeClick: e => {
                    d(e), "All Players" !== l && i("All Players"), (0, N.T9)(ev[e])
                  },
                  "data-sentry-element": "LeaderboardTabs",
                  "data-sentry-source-file": "index.tsx"
                }), "My Scores" === l ? (0, _.jsxs)("div", {
                  className: "_11ecl4015",
                  children: [(0, _.jsx)(tg, {
                    avatarUrl: $.avatarUrl,
                    userName: $.userName,
                    totalScore: $.totalScore,
                    countryCode: $.countryId,
                    isSubscriber: $.isSubscriber,
                    highScoreData: c?.highScores?.highScores,
                    registrationDate: v
                  }), c?.scoreHistory?.length > 0 ? (0, _.jsx)("div", {
                    className: e6,
                    children: c.scoreHistory.map((e, t) => (0, _.jsx)(tc, {
                      totalScore: e.score,
                      date: new Date(e.timestamp).toLocaleDateString("en-US", {
                        month: "long",
                        day: "2-digit",
                        year: "numeric"
                      }),
                      time: new Date(e.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit"
                      }),
                      avatarUrl: ""
                    }, t))
                  }) : (0, _.jsxs)("div", {
                    className: "_11ecl401p",
                    children: [(0, _.jsx)(eX.StaticImage, {
                      className: "_11ecl401r",
                      src: "/media/no_scores.webp",
                      width: 225,
                      height: 220,
                      alt: "Gems"
                    }), j ? (0, _.jsx)("span", {
                      className: "_11ecl401s",
                      children: "You don't have any scores yet."
                    }) : (0, _.jsx)(A.$, {
                      variant: "outline",
                      size: "small",
                      className: e3,
                      onClick: () => void(y("sign-up", void 0, "actionBar"), (0, N.sY)("actionBar")),
                      children: (0, _.jsx)(to.JU, {
                        size: "large",
                        className: e4,
                        children: "Sign in to save your scores"
                      })
                    })]
                  })]
                }) : (0, _.jsxs)("div", {
                  ref: T,
                  className: e6,
                  children: [P?.map((e, t) => (0, _.jsx)(tc, {
                    avatarUrl: e.name === $.userName ? (0, tp.ZX)($.avatarUrl) || tp.sj : (0, tp.ZX)(e.avatar) || tp.sj,
                    countryCode: e.countryCode,
                    userName: e.name,
                    totalScore: e.score,
                    isCurrentUser: e.uid === g || e.name === $.userName,
                    rank: t + 1
                  }, t)), !U && (0, _.jsx)(tc, {
                    avatarUrl: (0, tp.ZX)($.avatarUrl) || tp.sj,
                    countryCode: $.countryId,
                    userName: $.userName,
                    totalScore: M || D,
                    isCurrentUser: !0,
                    className: "_11ecl401t",
                    rank: 0
                  })]
                })]
              })]
            })]
          })
        },
        tx = [".arkadiumhosted"],
        tv = (e, t = tx) => {
          try {
            let a = new URL(e).hostname,
              r = window.location.hostname;
            if (a === r) return !0;
            for (let e of t)
              if (a.includes(e)) return !0;
            return !1
          } catch {
            return !1
          }
        };
      var ty = a(64705),
        t_ = a(24408),
        tw = a(19253),
        tj = a(36846);
      let tS = {
          [k.A.END_PREROLL]: k.m.GAME,
          [k.A.START_PREROLL]: k.m.PREROLL_PLAYING,
          [k.A.START_INTERSTITIAL]: k.m.INTERSTITIAL,
          [k.A.START_REWARD]: k.m.REWARD
        },
        tE = ({
          locale: e,
          isAdsFree: t,
          containerClassName: a,
          mobileAds: r,
          isSubscriber: s,
          backgroundImage: n,
          arenaBadges: l,
          shouldShowFullscreenUnlockToast: i = !1,
          shouldShowUnlockGamesToast: o = !1,
          adCompleteTrigger: d = 0
        }) => {
          let c = (0, O.t)(),
            m = w.createRef(),
            {
              isLeaderboardVisible: u,
              closeLeaderboard: h,
              configGamePage: g,
              gameData: p,
              gameState: f,
              updateGameState: b,
              isFullscreen: x
            } = (0, z.xg)(),
            [v, y] = (0, w.useState)("No"),
            {
              getGameplayId: j
            } = (0, L.T3)(),
            {
              mustDisplayPreroll: A,
              mustDisplayStartScreen: C,
              prerollConfiguration: I,
              incrementPrerollState: P,
              isLoading: M
            } = K(),
            [W, F] = (0, w.useState)(C),
            {
              setComponentsOrder: V
            } = (0, eN.U)(),
            [H, X] = (0, w.useState)(0),
            {
              features: q
            } = (0, G.R)(),
            Q = q.core.isGameStartScreenABTestEnabled,
            {
              sdk: et,
              status: ea
            } = (0, U.T)(),
            {
              adblockStatus: es,
              shouldBlockGame: en
            } = (0, ee.V_)(),
            el = es === ee.fQ.DETECTED,
            ei = q.adblock.allowGameWithAdblocker,
            {
              variantIndex: eo,
              isEnabled: ed
            } = (0, tj.H)("loadingCoordinator");
          (0, w.useEffect)(() => {
            ed && 1 === eo && V(C ? [
              ["right-rail-ads", "bottom-rail-ads"],
              ["game"]
            ] : [
              ["game"],
              ["right-rail-ads", "bottom-rail-ads"]
            ])
          }, [C, V, ed, eo]), (0, w.useEffect)(() => {
            f !== k.m.GAME && F(C)
          }, [C]), (0, w.useEffect)(() => {
            if (C || !A || M || f !== k.m.PENDING && f !== k.m.PREROLL || "ready" !== ea) {
              if (!C && !A && !M && f === k.m.PENDING) {
                if (q.core.isRewardedUnlockGamesABTestEnabled && p?.slug && "rewarded_ad" === sessionStorage.getItem(`unlock_method_${p.slug}`)) return;
                if (q.core.isRewardedUnlockGamesABTestEnabled && p?.slug && "gems" === sessionStorage.getItem(`unlock_method_${p.slug}`)) {
                  let e = sessionStorage.getItem(`unlock_timestamp_${p.slug}`);
                  if (e) {
                    let t = parseInt(e, 10),
                      a = Date.now() - t;
                    if (a < 500) {
                      c.info("[GameContainer] Group C: Game recently unlocked (gems), waiting for preroll state to recalculate"), setTimeout(() => {
                        X(e => e + 1)
                      }, 500 - a + 50);
                      return
                    }
                  }
                }
                b(k.m.GAME), P()
              }
            } else {
              el || (0, N.YM)(v, eE, p, j(), performance.now()), b(k.m.PREROLL_PLAYING), P();
              let e = {
                duration: I.prerollSeconds,
                product: "evo",
                env: Y.bW[(0, T.env)("NEXT_PUBLIC_BUILD_ENV")],
                adPodding: g?.adPodding
              };
              et?.ads?.showPrerollAd(e).then(() => {
                el || (0, N.ml)(v, eE, p, j()), requestAnimationFrame(() => {
                  b(k.m.GAME)
                })
              }).catch(e => {
                c.error({
                  data: e
                }, "[GameContainer] - Preroll ad failed, proceeding to game"), (0, Z.Cp)("platform.ad.preroll.failed", {
                  tags: {
                    game: p?.slug,
                    "platform.ad.preroll.failed": "true",
                    "platform.ad.preroll.error.message": e instanceof Error ? e.message : "Unknown error"
                  }
                }), b(k.m.GAME)
              })
            }
          }, [C, A, M, f, ea, H, d]);
          let ec = -1 !== $.K9.indexOf(f),
            em = p?.slug && q.core.isRewardedUnlockGamesABTestEnabled && null !== sessionStorage.getItem(`unlock_method_${p.slug}`),
            [eu, eh] = (0, w.useState)(null),
            [eg, ep] = (0, w.useState)(!1),
            [ef, eb] = (0, w.useState)(!1),
            [ex, ev] = (0, w.useState)(!1),
            [ey, e_] = (0, w.useState)(!1),
            {
              favoriteGames: ew,
              favoriteGamesLoading: ej
            } = (0, B.rB)(),
            eS = (0, B.XI)(),
            eE = (0, w.useMemo)(() => eS && !!ew && !!ew?.includes(p?.slug || ""), [eS, ew, p?.slug]),
            ek = q.core.isRewardedFullscreenABTestEnabled,
            eA = !1;
          if (ek) {
            let {
              fullscreenRewardedAccessAvailable: e
            } = (0, J.Gt)();
            eA = ek && e
          }(0, w.useEffect)(() => {
            let e, t, a;
            !eg && f === k.m.GAME && performance?.getEntriesByType && "function" == typeof performance.getEntriesByType && performance.getEntriesByType("resource")?.length > 0 && (e = performance.getEntriesByType("resource"), (t = {
              "platform.displayAd.count": 0,
              "platform.iframe.count": 0,
              "platform.domain.thirdParty.count": 0,
              "platform.resource.all.count": 0,
              "platform.resource.js.count": 0,
              "platform.resource.css.count": 0,
              "platform.resource.image.count": 0,
              "platform.resource.video.count": 0,
              "platform.resource.other.count": 0,
              "platform.resource.firstParty.count": 0,
              "platform.resource.thirdParty.count": 0,
              "platform.resource.all.size": 0,
              "platform.resource.js.size": 0,
              "platform.resource.css.size": 0,
              "platform.resource.image.size": 0,
              "platform.resource.video.size": 0,
              "platform.resource.other.size": 0,
              "platform.resource.firstParty.size": 0,
              "platform.resource.thirdParty.size": 0
            })["platform.displayAd.count"] = document.querySelectorAll('[data-testid="display-ad-component"]').length, t["platform.iframe.count"] = document.querySelectorAll("iframe").length, a = new Set, e.forEach(e => {
              try {
                let t = new URL(e.name).hostname;
                tv(e.name) || a.add(t)
              } catch {}
            }), t["platform.domain.thirdParty.count"] = a.size, e.forEach(e => {
              var a;
              let r, s = (a = e.name, "font" === (r = ({
                  css: "css",
                  js: "js",
                  mjs: "js",
                  jpg: "image",
                  jpeg: "image",
                  png: "image",
                  gif: "image",
                  webp: "image",
                  svg: "image",
                  avif: "image",
                  woff: "font",
                  woff2: "font",
                  ttf: "font",
                  otf: "font",
                  mp4: "video",
                  webm: "video",
                  ogg: "video",
                  mp3: "audio",
                  wav: "audio",
                  flac: "audio"
                })[a.split(".").pop()?.split("?")[0].toLowerCase() || ""] || "other") || "audio" === r ? "other" : r),
                n = e.transferSize || e.decodedBodySize || 0,
                l = tv(e.name);
              switch (t["platform.resource.all.count"]++, t["platform.resource.all.size"] += n, s) {
                case "js":
                  t["platform.resource.js.count"]++, t["platform.resource.js.size"] += n;
                  break;
                case "css":
                  t["platform.resource.css.count"]++, t["platform.resource.css.size"] += n;
                  break;
                case "image":
                  t["platform.resource.image.count"]++, t["platform.resource.image.size"] += n;
                  break;
                case "video":
                  t["platform.resource.video.count"]++, t["platform.resource.video.size"] += n;
                  break;
                default:
                  t["platform.resource.other.count"]++, t["platform.resource.other.size"] += n
              }
              l ? (t["platform.resource.firstParty.count"]++, t["platform.resource.firstParty.size"] += n) : (t["platform.resource.thirdParty.count"]++, t["platform.resource.thirdParty.size"] += n)
            }), (0, Z.wd)("page.resources", {
              tags: {
                ...t
              },
              level: "info"
            }))
          }, [eg, f]), (0, w.useEffect)(() => {
            ep(es === ee.fQ.DETECTED && en)
          }, [es, en]);
          let eT = (0, w.useRef)(!1),
            eC = (0, w.useRef)(!1);
          (0, w.useEffect)(() => {
            if (!i || !eA) {
              i || (eT.current = !1);
              return
            }
            if (eT.current) return;
            eT.current = !0, ev(!0);
            let e = window.setTimeout(() => {
              ev(!1)
            }, 1e4);
            return () => {
              window.clearTimeout(e)
            }
          }, [i, eA]), (0, w.useEffect)(() => {
            if (!o) {
              eC.current = !1;
              return
            }
            if (eC.current) return;
            eC.current = !0, e_(!0);
            let e = window.setTimeout(() => {
              e_(!1)
            }, 1e4);
            return () => {
              window.clearTimeout(e)
            }
          }, [o]), (0, w.useEffect)(() => {
            if (!ei || !el) return void eb(!1);
            eb(!0);
            let e = setTimeout(() => eb(!1), 1e4);
            return () => {
              clearTimeout(e)
            }
          }, [ei, el]), (0, w.useEffect)(() => {
            t_.CA.updateConfig({
              baseCustomDimensions: {
                isFavorited: eE
              }
            })
          }, [eE]), (0, w.useEffect)(() => {
            let e = window.location.href;
            return y(e ? (0, eZ.fp)(e) : "No"), () => {
              b(k.m.PENDING)
            }
          }, []), (0, w.useEffect)(() => {
            es === ee.fQ.DETECTED && (0, N.Vf)(v, p?.slug)
          }, [es, v, p?.slug]), (0, w.useEffect)(() => {
            if (f !== k.m.GAME_END) return;
            let e = j();
            (0, N.b4)(v, p, e, eE, x)
          }, [f]), (0, w.useEffect)(() => {
            c.info({
              data: !0,
              text: "arena6 always uses GRM"
            }, "[GameContainer] - GRM IS USED: "), c.info({
              data: !0,
              text: "arena6 always uses iframe games"
            }, "[GameContainer] - IS IFRAME GAME: "), c.info({
              data: null,
              text: "served inside GRM package"
            }, "[GameContainer] - IFRAME SOURCE: ");
            let e = e => {
              let t, a = e?.data?.source;
              if ("string" == typeof a && a.startsWith("react") || "ACTION" === e.data.type) return;
              try {
                if (!(t = JSON.parse(e.data))) return
              } catch (e) {
                return e
              }
              if (t?.event === k.A.END_PREROLL) return void b(k.m.GAME);
              let r = tS[t?.actionName];
              r && b(r)
            };
            return window.addEventListener("message", e), () => {
              window.removeEventListener("message", e)
            }
          }, [b]);
          let eL = () => n?.url ?? p?.meta?.thumbs?.screenshotPath ?? null,
            eG = (0, z.ws)();
          return (0, _.jsxs)("div", {
            id: "game_container",
            ref: m,
            "data-element-description": "game",
            className: S()(a, r && "has-mobile-ads"),
            "data-testid": "game-container",
            "data-sentry-component": "GameContainer",
            "data-sentry-source-file": "index.tsx",
            children: [(ef || ex || ey) && (0, _.jsxs)("div", {
              className: "ywb4la8",
              children: [ey && (0, _.jsx)("div", {
                className: E,
                "data-testid": "ab-test-unlock-games-toast",
                children: (0, _.jsx)(tw.y, {
                  type: tw.W.success,
                  withIcon: !0,
                  children: (0, _.jsx)("span", {
                    children: "All set—enjoy the game"
                  })
                })
              }), ex && (0, _.jsx)("div", {
                className: E,
                "data-testid": "ab-test-fullscreen-toast",
                children: (0, _.jsx)(tw.y, {
                  type: tw.W.success,
                  withIcon: !0,
                  children: (0, _.jsx)("span", {
                    children: "All set—play in full screen for the rest of your session​"
                  })
                })
              }), ef && (0, _.jsx)("div", {
                className: E,
                "data-testid": "adblock-toast",
                children: (0, _.jsx)(tw.y, {
                  type: tw.W.info,
                  children: (0, _.jsxs)("span", {
                    children: ["We noticed you’re using an ad blocker. Some games may not work as expected.", " ", "Turn it off for this site for the best results.", " ", (0, _.jsx)("a", {
                      className: "ywb4laa",
                      href: "https://support.arkadium.com/en/support/solutions/articles/44001739800-i-received-a-message-about-my-ad-blocker-what-should-i-do-/",
                      target: "_blank",
                      rel: "noreferrer noopener",
                      children: "Need help?"
                    })]
                  })
                })
              })]
            }), u && (0, _.jsxs)(_.Fragment, {
              children: [(0, _.jsx)(D, {}), (0, _.jsx)(tb, {
                gameData: p,
                gameRecommendations: eG,
                onClose: h,
                configs: g.leaderboard
              })]
            }), eL() && (0, _.jsxs)(_.Fragment, {
              children: [(0, _.jsx)(R.default, {
                unoptimized: !0,
                src: eL() ?? "",
                alt: "game background",
                fill: !0,
                className: "ywb4la3",
                priority: !0
              }), (0, _.jsx)("div", {
                className: "ywb4la4"
              })]
            }), eg && (0, _.jsx)(eM, {}), !eg && (0, _.jsxs)(_.Fragment, {
              children: [!eg && f !== k.m.GAME_END && (0, _.jsx)("div", {
                className: S()("ywb4la0", {
                  ywb4la1: s || ec || em
                }),
                children: (0, _.jsx)(ty.I, {
                  componentName: "game",
                  children: (0, _.jsx)(eR, {
                    locale: e,
                    playAgainStart: v,
                    setScore: eh,
                    arenaBadges: l,
                    isFavorite: eE
                  })
                })
              }), eg && (0, _.jsx)(eM, {}), !eg && (0, _.jsxs)(_.Fragment, {
                children: [C && W && !(f === k.m.PENDING && p?.slug && q.core.isRewardedUnlockGamesABTestEnabled && "rewarded_ad" === sessionStorage.getItem(`unlock_method_${p.slug}`)) && (0, _.jsx)(er, {
                  playAgainStart: v,
                  isVideoAdsPrerollEnabled: A,
                  isGameFavorite: eE,
                  prerollSeconds: I.prerollSeconds,
                  setIsStartScreenVisible: F,
                  isGameStartScreenABTestEnabled: Q
                }), f === k.m.GAME_END && (0, _.jsx)(eV, {
                  gameScore: eu,
                  handlePlayAgain: () => {
                    A ? b(k.m.PENDING) : (P(), b(k.m.GAME)), F(C), y(eH.bi.YES)
                  }
                })]
              })]
            })]
          })
        };
      a(42879);
      var tN = "_1l09ump2",
        tk = "_1l09umpe _1l09ump3",
        tA = "_1l09umph _1l09ump3",
        tT = "_1l09umpg _1l09ump3",
        tC = "_1l09umpf",
        tL = "_1l09umpl",
        tG = "_1l09ump0",
        tI = "_1l09ump1",
        tR = a(37231);

      function tP() {
        return (tP = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a)({}).hasOwnProperty.call(a, r) && (e[r] = a[r])
          }
          return e
        }).apply(null, arguments)
      }
      let tM = function(e) {
        return w.createElement("svg", tP({
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 32 32"
        }, e), l || (l = w.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M15.99 6.848C13.326 3.73 8.88 2.893 5.54 5.747s-3.81 7.625-1.188 11c2.181 2.807 8.781 8.725 10.944 10.64.242.215.363.322.504.364a.67.67 0 0 0 .381 0c.142-.042.263-.149.505-.363 2.163-1.916 8.763-7.835 10.943-10.64 2.623-3.376 2.21-8.178-1.187-11.001-3.397-2.824-7.785-2.016-10.451 1.1",
          clipRule: "evenodd"
        })))
      };

      function tD() {
        return (tD = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a)({}).hasOwnProperty.call(a, r) && (e[r] = a[r])
          }
          return e
        }).apply(null, arguments)
      }
      let tW = function(e) {
        return w.createElement("svg", tD({
          xmlns: "http://www.w3.org/2000/svg",
          width: 32,
          height: 32,
          fill: "none",
          viewBox: "0 0 32 32"
        }, e), i || (i = w.createElement("path", {
          fill: "#F04438",
          fillRule: "evenodd",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M15.991 6.848C13.325 3.73 8.88 2.893 5.54 5.747s-3.81 7.625-1.187 11c2.18 2.807 8.78 8.725 10.944 10.64.242.215.362.322.504.364a.67.67 0 0 0 .38 0c.142-.042.263-.149.505-.363 2.163-1.916 8.763-7.835 10.944-10.64 2.623-3.376 2.21-8.178-1.187-11.001-3.398-2.824-7.786-2.016-10.452 1.1",
          clipRule: "evenodd"
        })))
      };

      function tB() {
        return (tB = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a)({}).hasOwnProperty.call(a, r) && (e[r] = a[r])
          }
          return e
        }).apply(null, arguments)
      }
      let tO = function(e) {
        return w.createElement("svg", tB({
          xmlns: "http://www.w3.org/2000/svg",
          width: 32,
          height: 32,
          fill: "none",
          viewBox: "0 0 32 32"
        }, e), o || (o = w.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m20 12 8-8m0 0h-8m8 0v8m-16 0L4 4m0 0v8m0-8h8m0 16-8 8m0 0h8m-8 0v-8m16 0 8 8m0 0v-8m0 8h-8"
        })))
      };

      function t$() {
        return (t$ = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a)({}).hasOwnProperty.call(a, r) && (e[r] = a[r])
          }
          return e
        }).apply(null, arguments)
      }
      let tF = function(e) {
        return w.createElement("svg", t$({
          xmlns: "http://www.w3.org/2000/svg",
          width: 32,
          height: 32,
          fill: "none",
          viewBox: "0 0 32 32"
        }, e), d || (d = w.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M5.333 18.667h8m0 0v8m0-8L4 28m22.667-14.667h-8m0 0v-8m0 8L28 4"
        })))
      };

      function tU() {
        return (tU = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a)({}).hasOwnProperty.call(a, r) && (e[r] = a[r])
          }
          return e
        }).apply(null, arguments)
      }
      let tz = function(e) {
        return w.createElement("svg", tU({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none",
          viewBox: "0 0 24 24"
        }, e), c || (c = w.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M12 15a6 6 0 0 1-6-6V3.444c0-.413 0-.62.06-.786a1 1 0 0 1 .598-.598C6.824 2 7.031 2 7.444 2h9.112c.413 0 .62 0 .786.06a1 1 0 0 1 .598.598c.06.166.06.373.06.786V9a6 6 0 0 1-6 6m0 0v3m6-14h2.5c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883V6c0 .93 0 1.395-.102 1.776a3 3 0 0 1-2.122 2.122C19.396 10 18.93 10 18 10M6 4H3.5c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541C2 4.801 2 5.034 2 5.5V6c0 .93 0 1.395.102 1.776a3 3 0 0 0 2.122 2.122C4.605 10 5.07 10 6 10m1.444 12h9.112a.444.444 0 0 0 .444-.444A3.556 3.556 0 0 0 13.444 18h-2.888A3.556 3.556 0 0 0 7 21.556c0 .245.199.444.444.444"
        })))
      };

      function tY() {
        return (tY = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a)({}).hasOwnProperty.call(a, r) && (e[r] = a[r])
          }
          return e
        }).apply(null, arguments)
      }
      let tV = function(e) {
        return w.createElement("svg", tY({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none",
          viewBox: "0 0 24 24"
        }, e), m || (m = w.createElement("path", {
          fill: "#fff",
          d: "M6 3.444c0-.413 0-.62.06-.786a1 1 0 0 1 .598-.598C6.824 2 7.031 2 7.444 2h9.112c.413 0 .62 0 .786.06a1 1 0 0 1 .598.598c.06.166.06.373.06.786V9A6 6 0 0 1 6 9zM7 21.556A3.556 3.556 0 0 1 10.556 18h2.888A3.556 3.556 0 0 1 17 21.556a.444.444 0 0 1-.444.444H7.444A.444.444 0 0 1 7 21.556"
        })), u || (u = w.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M12 15a6 6 0 0 1-6-6V3.444c0-.413 0-.62.06-.786a1 1 0 0 1 .598-.598C6.824 2 7.031 2 7.444 2h9.112c.413 0 .62 0 .786.06a1 1 0 0 1 .598.598c.06.166.06.373.06.786V9a6 6 0 0 1-6 6m0 0v3m6-14h2.5c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883V6c0 .93 0 1.395-.102 1.776a3 3 0 0 1-2.122 2.122C19.396 10 18.93 10 18 10M6 4H3.5c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541C2 4.801 2 5.034 2 5.5V6c0 .93 0 1.395.102 1.776a3 3 0 0 0 2.122 2.122C4.605 10 5.07 10 6 10m1.444 12h9.112a.444.444 0 0 0 .444-.444A3.556 3.556 0 0 0 13.444 18h-2.888A3.556 3.556 0 0 0 7 21.556c0 .245.199.444.444.444"
        })))
      };

      function tZ() {
        return (tZ = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a)({}).hasOwnProperty.call(a, r) && (e[r] = a[r])
          }
          return e
        }).apply(null, arguments)
      }
      let tH = function(e) {
        return w.createElement("svg", tZ({
          xmlns: "http://www.w3.org/2000/svg",
          width: 25,
          height: 24,
          fill: "none",
          viewBox: "0 0 25 24"
        }, e), h || (h = w.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M9.59 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01m9.99-5c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10"
        })))
      };

      function tX() {
        return (tX = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a)({}).hasOwnProperty.call(a, r) && (e[r] = a[r])
          }
          return e
        }).apply(null, arguments)
      }
      let tq = function(e) {
        return w.createElement("svg", tX({
          xmlns: "http://www.w3.org/2000/svg",
          width: 25,
          height: 24,
          fill: "none",
          viewBox: "0 0 25 24"
        }, e), g || (g = w.createElement("path", {
          fill: "#fff",
          d: "M12.5 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10"
        })), p || (p = w.createElement("path", {
          fill: "#fff",
          d: "M9.59 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
        })), f || (f = w.createElement("path", {
          stroke: "#202970",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M9.59 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01m9.99-5c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10"
        })))
      };
      var tJ = a(79760),
        tQ = a(89714),
        tK = a(60069);

      function t0() {
        return (t0 = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a)({}).hasOwnProperty.call(a, r) && (e[r] = a[r])
          }
          return e
        }).apply(null, arguments)
      }
      let t1 = function(e) {
        return w.createElement("svg", t0({
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 32 32"
        }, e), b || (b = w.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M22.667 2.667v14.666m6.666-4.266V6.933c0-1.493 0-2.24-.29-2.81a2.67 2.67 0 0 0-1.166-1.166c-.57-.29-1.317-.29-2.81-.29H10.824c-1.949 0-2.923 0-3.71.356a4 4 0 0 0-1.699 1.458c-.472.724-.62 1.687-.917 3.613l-.697 4.533c-.39 2.54-.586 3.81-.21 4.798a4 4 0 0 0 1.76 2.052c.92.523 2.205.523 4.776.523H11.2c.747 0 1.12 0 1.405.145.251.128.455.332.583.583.145.285.145.659.145 1.405v3.913a3.29 3.29 0 0 0 3.288 3.287c.433 0 .826-.255 1.002-.65l4.48-10.083c.204-.458.306-.688.467-.856.143-.148.318-.262.511-.332.22-.079.47-.079.972-.079h1.014c1.493 0 2.24 0 2.81-.29.502-.256.91-.664 1.166-1.166.29-.57.29-1.317.29-2.81"
        })))
      };

      function t2() {
        return (t2 = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a)({}).hasOwnProperty.call(a, r) && (e[r] = a[r])
          }
          return e
        }).apply(null, arguments)
      }
      let t4 = function(e) {
        return w.createElement("svg", t2({
          xmlns: "http://www.w3.org/2000/svg",
          width: 32,
          height: 32,
          fill: "none",
          viewBox: "0 0 32 32"
        }, e), x || (x = w.createElement("path", {
          fill: "#E70D5C",
          d: "M22.667 2.666v14.667Zm6.667 10.4V6.933c0-1.494 0-2.24-.29-2.811a2.67 2.67 0 0 0-1.166-1.165c-.57-.291-1.317-.291-2.81-.291H10.823c-1.948 0-2.923 0-3.71.357A4 4 0 0 0 5.416 4.48c-.472.724-.62 1.687-.916 3.613L3.8 12.626c-.39 2.54-.586 3.81-.209 4.799a4 4 0 0 0 1.76 2.052c.92.522 2.205.522 4.775.522H11.2c.747 0 1.12 0 1.406.146.25.128.455.332.582.582.146.285.146.659.146 1.406v3.912a3.29 3.29 0 0 0 3.288 3.288c.433 0 .825-.255 1.001-.651L22.104 18.6c.204-.459.306-.688.467-.856.142-.149.317-.263.51-.332.22-.08.47-.08.973-.08h1.013c1.494 0 2.24 0 2.81-.29.503-.256.91-.664 1.166-1.165.29-.57.29-1.318.29-2.811"
        })), v || (v = w.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M22.667 2.666v14.667m6.667-4.267V6.933c0-1.494 0-2.24-.29-2.811a2.67 2.67 0 0 0-1.166-1.165c-.57-.291-1.317-.291-2.81-.291H10.823c-1.948 0-2.923 0-3.71.357A4 4 0 0 0 5.416 4.48c-.472.724-.62 1.687-.916 3.613L3.8 12.626c-.39 2.54-.586 3.81-.209 4.799a4 4 0 0 0 1.76 2.052c.92.522 2.205.522 4.775.522H11.2c.747 0 1.12 0 1.406.146.25.128.455.332.582.582.146.285.146.659.146 1.406v3.912a3.29 3.29 0 0 0 3.288 3.288c.433 0 .825-.255 1.001-.651L22.104 18.6c.204-.459.306-.688.467-.856.142-.149.317-.263.51-.332.22-.08.47-.08.973-.08h1.013c1.494 0 2.24 0 2.81-.29.503-.256.91-.664 1.166-1.165.29-.57.29-1.318.29-2.811"
        })))
      };
      var t3 = a(64864);
      let t6 = "I like it",
        t5 = "Not for me",
        t8 = (0, w.memo)(({
          isGameEnd: e
        }) => {
          let {
            vote: t,
            handleVoteClick: a
          } = (0, t3.r)(), r = 1 === t ? tK.A : tQ.A, s = -1 === t ? t4 : t1;
          return e ? (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsxs)("button", {
              "aria-label": "I like it",
              className: tT,
              onClick: () => a(1, t3.f.LIKE, "actionBar"),
              children: [(0, _.jsx)("div", {
                className: tA,
                children: (0, _.jsx)(r, {
                  className: tG
                })
              }), (0, _.jsx)("span", {
                children: "I like it"
              })]
            }), (0, _.jsxs)("button", {
              "aria-label": "Not for me",
              className: tT,
              onClick: () => a(-1, t3.f.DISLIKE, "actionBar"),
              children: [(0, _.jsx)("div", {
                className: tA,
                children: (0, _.jsx)(s, {
                  className: tG
                })
              }), (0, _.jsx)("span", {
                children: "Not for me"
              })]
            })]
          }) : (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(tR.V, {
              content: t6,
              children: (0, _.jsx)("button", {
                "aria-label": "I like it",
                className: tk,
                onClick: () => a(1, t3.f.LIKE, "actionBar"),
                children: (0, _.jsx)(r, {
                  className: tG
                })
              })
            }, t6), (0, _.jsx)(tR.V, {
              content: t5,
              children: (0, _.jsx)("button", {
                "aria-label": "Not for me",
                className: tk,
                onClick: () => a(-1, t3.f.DISLIKE, "actionBar"),
                children: (0, _.jsx)(s, {
                  className: tG
                })
              })
            }, t5)]
          })
        });
      t8.displayName = "GameRating";
      var t9 = a(2417),
        t7 = a(86299);

      function ae({
        fallbackComponent: e,
        ...t
      }) {
        let a = (0, t7.p)(),
          {
            gameData: r
          } = (0, z.xg)(),
          s = new Date,
          {
            features: n
          } = (0, G.R)(),
          l = r?.meta?.isSubscriberOnlyDate,
          i = !!l && new Date(l) <= s,
          o = n.auth.isSubscriberOnlyEnabled && r?.meta?.isSubscriberOnly && !i;
        a = a && !o;
        let [d, c] = (0, w.useState)(!1);
        return ((0, w.useEffect)(() => {
          c(!0)
        }, []), d && a) ? (0, _.jsx)(at, {
          ...t,
          "data-sentry-element": "FullscreenToggleAbTest",
          "data-sentry-component": "FullscreenToggleAbTestWrapper",
          "data-sentry-source-file": "FullscreenToggleAbTest.tsx"
        }) : (0, _.jsx)(_.Fragment, {
          children: e
        })
      }

      function at({
        className: e,
        hasLabel: t,
        fullscreen: a,
        gameHasFullscreen: r,
        isDesktopSize: s,
        isNoMonetization: n,
        isUserAuthenticated: l,
        isUserSubs: i,
        gameName: o,
        onToggle: d,
        gameState: c,
        showNewTooltip: m,
        setShowNewTooltip: u
      }) {
        (0, w.useEffect)(() => {
          if (n) return void u(!1);
          u(!0);
          let e = window.setTimeout(() => {
            u(!1)
          }, 1e4);
          return () => {
            window.clearTimeout(e)
          }
        }, [o, u, n]);
        let h = (0, t7.p)(),
          g = c === k.m.PREROLL_PLAYING,
          p = s && (!r || !h && !n && !(l && i)) || g;
        return (0, _.jsxs)("div", {
          className: "_1l09umpo",
          "data-sentry-component": "FullscreenToggleAbTest",
          "data-sentry-source-file": "FullscreenToggleAbTest.tsx",
          children: [m && (0, _.jsxs)("div", {
            className: "_1l09umpp",
            children: [(0, _.jsx)("span", {
              className: "_1l09umpq",
              "aria-hidden": "true",
              children: (0, _.jsx)(eX.StaticImage, {
                src: "/media/abtests/Bell.png",
                alt: "new",
                width: 24,
                height: 24,
                className: tI
              })
            }), (0, _.jsx)("span", {
              children: "New"
            })]
          }), (0, _.jsx)(tR.V, {
            content: m ? null : a ? "Exit full screen mode" : "Enter full screen mode",
            "data-sentry-element": "CustomTooltip",
            "data-sentry-source-file": "FullscreenToggleAbTest.tsx",
            children: (0, _.jsxs)("button", {
              className: S()(tk, e, t && tC),
              onClick: () => d(a$.Fullscreen),
              disabled: p,
              type: "button",
              "aria-label": a ? "Exit full screen mode" : "Enter full screen mode",
              "data-testid": "fullscreen",
              children: [(0, _.jsx)("div", {
                className: t ? tA : "",
                children: a ? (0, _.jsx)(tF, {
                  className: tN
                }) : (0, _.jsx)(tO, {
                  className: tN
                })
              }), t && (0, _.jsx)("span", {
                className: tL,
                children: "Full Screen"
              })]
            })
          })]
        })
      }

      function aa() {
        return (aa = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a)({}).hasOwnProperty.call(a, r) && (e[r] = a[r])
          }
          return e
        }).apply(null, arguments)
      }
      let ar = function(e) {
        return w.createElement("svg", aa({
          xmlns: "http://www.w3.org/2000/svg",
          width: 32,
          height: 32,
          fill: "none",
          viewBox: "0 0 32 32"
        }, e), y || (y = w.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M28 28H4m20-13.333-8 8m0 0-8-8m8 8V4"
        })))
      };
      var as = a(44455);

      function an({
        gameName: e,
        gameImageUrl: t,
        gameHasFullscreen: a,
        gameHasLeaderboard: r,
        gameState: s,
        isUserSubs: n,
        isUserAuthenticated: l,
        actionBarState: i,
        onToggle: o,
        section1Ref: d,
        isLeaderboardVisible: c,
        isNoMonetization: m = !1,
        isIncognito: u
      }) {
        let {
          leaderboard: h,
          fullscreen: g,
          support: p,
          favorite: f
        } = i, {
          features: b
        } = (0, G.R)(), {
          isDesktop: x,
          isMobile: v,
          isTablet: y,
          os: j,
          browser: E,
          detectDevice: N
        } = (0, tJ.i)(), A = x(), T = v();
        y();
        let [C, L] = (0, w.useState)(!1), {
          isInstallable: I,
          isInstalled: R
        } = (0, as.H)(), [P, M] = (0, w.useState)(!1), D = b.gameRating.enabled, W = j.name?.toLowerCase().includes("android"), B = u && (("Chrome" === E.name || "Edge" === E.name) && "pc" === N() || "Chrome" === E.name && W && ("mobile" === N() || "tablet" === N()));
        (0, w.useEffect)(() => {
          L(s === k.m.PREROLL_PLAYING)
        }, [s]);
        let O = (0, w.useCallback)(() => g ? "Please exit full screen to install" : B ? "Incognito mode is not supported to install the app" : I && !R ? "Save this game for easy access" : R ? "This game is saved to your device" : "Save this game for easy access", [I, R, g, u]);

        function $({
          className: e,
          hasLabel: t
        }) {
          let r = A && (!a || !m && !l || !m && l && !n),
            s = g ? "Exit full screen mode" : "Enter full screen mode",
            i = g ? "fullscreen-is-true" : "fullscreen-is-false";
          return (0, _.jsx)(tR.V, {
            content: (() => {
              if (!a) return "This game does not support full screen";
              if (l && (!l || n))
                if (!A) return "";
                else return g ? "Exit full screen mode" : "Enter full screen mode";
              return m ? g ? "Exit full screen mode" : "Enter full screen mode" : "Subscribe to enjoy full screen experience"
            })(),
            "data-sentry-element": "CustomTooltip",
            "data-sentry-component": "FullscreenToggle",
            "data-sentry-source-file": "index.tsx",
            children: (0, _.jsxs)("button", {
              className: S()(tk, e, t && tC),
              onClick: () => o(a$.Fullscreen),
              disabled: r,
              type: "button",
              "aria-label": s,
              "data-testid": "fullscreen",
              children: [(0, _.jsx)("div", {
                className: t ? tA : "",
                children: g ? (0, _.jsx)(tF, {
                  className: tN
                }) : (0, _.jsx)(tO, {
                  className: tN
                })
              }), t && (0, _.jsx)("span", {
                className: tL,
                children: "Full Screen"
              })]
            })
          }, i)
        }
        return (0, _.jsxs)("div", {
          className: S()("_1l09ump4", n && !g && "_1l09ump5"),
          role: "toolbar",
          "aria-label": "Game actions",
          "data-sentry-component": "ActionBar",
          "data-sentry-source-file": "index.tsx",
          children: [(0, _.jsxs)("div", {
            className: "_1l09ump6",
            "data-testid": "actionbar-sections",
            children: [(0, _.jsxs)("div", {
              className: "_1l09ump7",
              tabIndex: t9.Ee.AUTO,
              ref: d,
              "aria-label": `${e} action bar`,
              children: [(0, _.jsx)("div", {
                className: "_1l09ump8",
                children: t ? (0, _.jsx)("img", {
                  src: t,
                  alt: e
                }) : (0, _.jsx)("div", {
                  className: "_1l09ump9"
                })
              }), (0, _.jsx)("h1", {
                className: "_1l09umpa",
                children: e
              })]
            }), (0, _.jsxs)("div", {
              className: S()("_1l09umpb", T && s !== k.m.GAME_END && "_1l09umpc"),
              children: [D && (0, _.jsx)(t8, {
                isGameEnd: !1
              }), (0, _.jsx)(tR.V, {
                content: P || !b.auth.isFavoriteGamesEnabled ? "" : l ? f ? "Remove from favorites" : "Add to favorites" : "Sign in to add to favorites",
                "data-sentry-element": "CustomTooltip",
                "data-sentry-source-file": "index.tsx",
                children: (0, _.jsx)("button", {
                  className: tk,
                  onClick: () => o(a$.Favorite),
                  disabled: !b.auth.isFavoriteGamesEnabled || !l,
                  type: "button",
                  "aria-pressed": f ?? !1,
                  "aria-label": f ? "Remove from favorites" : "Add to favorites",
                  children: f ? (0, _.jsx)(tW, {
                    className: tG
                  }) : (0, _.jsx)(tM, {
                    className: tG
                  })
                })
              }, f ? "favorite-is-true" : "favorite-is-false"), (0, _.jsx)(ae, {
                fullscreen: g,
                gameHasFullscreen: a,
                isDesktopSize: A,
                isNoMonetization: m,
                isUserAuthenticated: l,
                isUserSubs: n,
                gameName: e,
                onToggle: o,
                fallbackComponent: (0, _.jsx)($, {}),
                gameState: s,
                showNewTooltip: P,
                setShowNewTooltip: M,
                "data-sentry-element": "FullscreenToggleAbTestWrapper",
                "data-sentry-source-file": "index.tsx"
              })]
            }), s !== k.m.GAME_END && !A && (0, _.jsx)($, {
              className: "_1l09umpm"
            }), (0, _.jsxs)("div", {
              className: "_1l09umpi",
              children: [(0, _.jsx)("span", {
                className: "_1l09umpj"
              }), (0, _.jsx)(tR.V, {
                content: r ? null : "This game does not support leaderboard",
                "data-sentry-element": "CustomTooltip",
                "data-sentry-source-file": "index.tsx",
                children: (0, _.jsxs)("button", {
                  className: tC,
                  onClick: () => o(a$.Leaderboard),
                  disabled: !r || C,
                  type: "button",
                  "aria-pressed": h,
                  "aria-label": h ? "Exit leaderboard" : "Enter leaderboard",
                  children: [(0, _.jsx)("div", {
                    className: tA,
                    children: h ? (0, _.jsx)(tV, {
                      className: tI
                    }) : (0, _.jsx)(tz, {
                      className: tI
                    })
                  }), (0, _.jsx)("span", {
                    className: tL,
                    children: "Leaderboard"
                  })]
                })
              }), (0, _.jsx)(tR.V, {
                content: g ? "Please exit full screen to access support" : "",
                "data-sentry-element": "CustomTooltip",
                "data-sentry-source-file": "index.tsx",
                children: (0, _.jsxs)("button", {
                  className: tC,
                  onClick: () => o(a$.Support),
                  disabled: !b.support.enabled || g || C,
                  type: "button",
                  "aria-label": "Open support",
                  "data-testid": "game-action-bar-support-button",
                  children: [(0, _.jsx)("div", {
                    className: tA,
                    children: p ? (0, _.jsx)(tq, {
                      className: tI
                    }) : (0, _.jsx)(tH, {
                      className: tI
                    })
                  }), (0, _.jsx)("span", {
                    className: tL,
                    children: "Support"
                  })]
                })
              }), b.addToHomeScreen.enabled && (0, _.jsx)(tR.V, {
                content: O(),
                enablePortal: !0,
                children: (0, _.jsxs)("button", {
                  className: tC,
                  onClick: () => o(a$.AddToHomeScreen),
                  disabled: g || C || R || B,
                  type: "button",
                  "aria-label": "Save Game",
                  "data-testid": "game-action-bar-native-save-game-button",
                  children: [(0, _.jsx)("div", {
                    className: tA,
                    children: (0, _.jsx)(ar, {
                      className: tI
                    })
                  }), (0, _.jsx)("span", {
                    className: tL,
                    children: "Save Game"
                  })]
                })
              }), (0, _.jsx)($, {
                className: "_1l09umpk",
                hasLabel: !0,
                "data-sentry-element": "FullscreenToggle",
                "data-sentry-source-file": "index.tsx"
              })]
            })]
          }), s === k.m.GAME_END && !c && (0, _.jsxs)("div", {
            className: "_1l09umpd",
            children: [D && (0, _.jsx)(t8, {
              isGameEnd: !0
            }), (0, _.jsxs)("button", {
              className: tT,
              disabled: !b.auth.isFavoriteGamesEnabled || !l,
              onClick: () => o(a$.Favorite),
              type: "button",
              "aria-label": f ? "Remove from favorites" : "Add to favorites",
              children: [(0, _.jsx)("div", {
                className: tA,
                children: f ? (0, _.jsx)(tW, {
                  className: tG
                }) : (0, _.jsx)(tM, {
                  className: tG
                })
              }), (0, _.jsx)("span", {
                children: "Favorites"
              })]
            })]
          })]
        })
      }
      a(13191), a(5934), a(32347);
      let al = ({
        targetDate: e,
        onComplete: t
      }) => {
        let a = () => {
            let t = new Date(e).getTime() - new Date().getTime();
            return t <= 0 ? {
              days: 0,
              hours: 0,
              minutes: 0,
              seconds: 0
            } : {
              days: Math.floor(t / 864e5),
              hours: Math.floor(t % 864e5 / 36e5),
              minutes: Math.floor(t % 36e5 / 6e4),
              seconds: Math.floor(t % 6e4 / 1e3)
            }
          },
          [r, s] = (0, w.useState)(a());
        (0, w.useEffect)(() => {
          let e = setInterval(() => {
            let r = a();
            s(r), Object.values(r).every(e => 0 === e) && (clearInterval(e), t?.())
          }, 1e3);
          return () => clearInterval(e)
        }, [e, t]);
        let n = [{
          value: r.days,
          label: "Days"
        }, {
          value: r.hours,
          label: "Hours"
        }, {
          value: r.minutes,
          label: "Minutes"
        }, {
          value: r.seconds,
          label: "Seconds"
        }];
        return (0, _.jsx)("div", {
          className: "hmv4510",
          "data-sentry-component": "Countdown",
          "data-sentry-source-file": "index.tsx",
          children: n.map(({
            value: e,
            label: t
          }) => (0, _.jsxs)("div", {
            className: "hmv4511",
            children: [(0, _.jsx)("div", {
              className: "hmv4512",
              children: e.toString().padStart(2, "0")
            }), (0, _.jsx)("div", {
              className: "hmv4513",
              children: t
            })]
          }, t))
        })
      };
      a(3825);
      let ai = ({
        subject: e
      }) => {
        let [t, a] = (0, w.useState)(""), [r, s] = (0, w.useState)(!1), [n, l] = (0, w.useState)(!1), i = w.useId(), {
          features: {
            core: {
              isTrailingSlashEnabled: o
            }
          }
        } = (0, G.R)(), d = async i => {
          if (i.preventDefault(), t && r && !n) {
            l(!0);
            try {
              if ((await fetch(o ? "/api/notify/" : "/api/notify", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    email: t,
                    subject: e,
                    consent: r
                  })
                })).ok) a(""), s(!1), alert("Thank you for subscribing!");
              else throw Error("Failed to subscribe")
            } catch (e) {
              alert("Sorry, something went wrong. Please try again later.")
            } finally {
              l(!1)
            }
          }
        };
        return (0, _.jsxs)("div", {
          className: "jym98q0",
          role: "complementary",
          "aria-label": "Game notification signup",
          "data-sentry-component": "NotifyMe",
          "data-sentry-source-file": "index.tsx",
          children: [(0, _.jsx)("h3", {
            className: "jym98q1",
            id: `${i}-title`,
            children: "Be the first to know when this game launches"
          }), (0, _.jsxs)("form", {
            onSubmit: d,
            className: "jym98q2",
            "aria-labelledby": `${i}-title`,
            noValidate: !0,
            children: [(0, _.jsxs)("div", {
              className: "jym98q3",
              children: [(0, _.jsx)("input", {
                type: "email",
                value: t,
                onChange: e => a(e.target.value),
                placeholder: "name@email.com",
                className: "jym98q4",
                required: !0,
                disabled: n,
                "aria-label": "Email address",
                "aria-required": "true",
                "aria-invalid": "" !== t && !t.includes("@")
              }), (0, _.jsx)("button", {
                type: "submit",
                className: "jym98q5",
                disabled: n,
                "aria-busy": n,
                children: n ? "Submitting..." : "Notify me"
              })]
            }), (0, _.jsxs)("label", {
              className: "jym98q6",
              children: [(0, _.jsx)("input", {
                type: "checkbox",
                checked: r,
                onChange: e => s(e.target.checked),
                className: "jym98q7",
                required: !0,
                disabled: n,
                "aria-required": "true"
              }), (0, _.jsx)("span", {
                className: "jym98q8",
                children: "I consent to Arkadium retaining my email address to send game and marketing updates."
              })]
            })]
          })]
        })
      };
      var ao = a(90143),
        ad = a(49572),
        ac = a(9482),
        am = a(97265);
      let au = {
          width: 836,
          height: 219
        },
        ah = {
          width: 600,
          height: 180
        },
        ag = {
          width: 323,
          height: 86
        },
        ap = ({
          gameData: e,
          enableNotifyMe: t = !1,
          adsFree: a = !1,
          gameRecommendations: r,
          isSubscriber: s = !1
        }) => {
          let {
            isTablet: n,
            isDesktop: l,
            isMobile: i
          } = (0, tJ.i)(), o = l(), d = n(), c = i(), {
            width: m,
            height: u
          } = o ? au : d ? ah : ag, h = {
            "data-id": "coming-soon-ad-mobile",
            product: "arena",
            dimensions: (0, am.E)([ac.X.AD_320x50])
          }, g = e?.meta?.comingSoonDate ? new Date(e.meta.comingSoonDate) : null;
          return (0, _.jsxs)(_.Fragment, {
            children: [c && !a && !s && (0, _.jsx)(ad.default, {
              adOptions: h
            }), (0, _.jsxs)("div", {
              className: "_1uxrtlv0",
              role: "main",
              "aria-label": "Coming soon page",
              children: [(0, _.jsx)("div", {
                className: "_1uxrtlv6",
                children: (0, _.jsx)(eU, {
                  title: "Play while you wait",
                  gameRecommendations: r,
                  "data-sentry-element": "ColumnCardBlock",
                  "data-sentry-source-file": "ComingSoon.tsx"
                })
              }), (0, _.jsxs)("div", {
                className: "_1uxrtlv1",
                children: [(0, _.jsxs)("div", {
                  className: "_1uxrtlv2",
                  children: [e?.meta?.thumbs?.promoTile1000x312 && (0, _.jsx)(R.default, {
                    unoptimized: !0,
                    src: e?.meta?.thumbs?.promoTile1000x312 ?? "",
                    alt: `${e?.meta?.name||"Game"} promotional image`,
                    width: m,
                    height: u,
                    className: "_1uxrtlv3"
                  }), (0, _.jsx)("div", {
                    className: "_1uxrtlv4",
                    role: "status",
                    "aria-label": `${e?.meta?.name||"Game"} is coming soon`,
                    children: "Coming Soon"
                  })]
                }), null != g && (0, _.jsxs)("div", {
                  className: "_1uxrtlv5",
                  role: "timer",
                  "aria-label": "Time until game launch",
                  children: [(0, _.jsx)(ao.E, {
                    label: "PLAY IN:",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    labelColor: "rgba(0, 0, 0, 1)"
                  }), (0, _.jsx)(al, {
                    targetDate: g,
                    onComplete: () => {}
                  })]
                }), t && (0, _.jsx)(ai, {
                  subject: `New Game Launch: ${e?.meta?.name||""}`
                })]
              })]
            })]
          })
        };
      a(35154);
      var af = "_6361tic",
        ab = "_6361tib",
        ax = "_6361ti1",
        av = "_6361ti2",
        ay = "_6361ti3",
        a_ = "_6361tie",
        aw = "_6361tig",
        aj = "_6361tif",
        aS = "_6361ti5",
        aE = "_6361ti4",
        aN = "_6361ti0";
      let ak = {
          width: 836,
          height: 243
        },
        aA = ({
          gameData: e,
          isUserAuthenticated: t
        }) => {
          let {
            openModal: a
          } = (0, I.h)(), {
            width: r,
            height: s
          } = ak;
          return (0, _.jsx)(_.Fragment, {
            children: (0, _.jsx)("div", {
              className: aN,
              role: "main",
              "aria-label": "Subscriber only page",
              children: (0, _.jsx)("div", {
                className: ax,
                children: (0, _.jsxs)("div", {
                  className: av,
                  children: [e?.meta?.thumbs?.promoTile1000x312 && (0, _.jsx)(R.default, {
                    unoptimized: !0,
                    src: e?.meta?.thumbs?.promoTile1000x312 ?? "",
                    alt: `${e?.meta?.name||"Game"} promotional image`,
                    width: r,
                    height: s,
                    className: ay
                  }), (0, _.jsx)("div", {
                    className: aE,
                    children: "SUBSCRIBER-ONLY GAME"
                  }), (0, _.jsxs)("div", {
                    className: aS,
                    children: [e?.meta?.name, " is exclusive to Arkadium Plus subscribers"]
                  }), !t && (0, _.jsxs)("div", {
                    className: "_6361ti6",
                    children: ["Already a subscriber?", (0, _.jsx)("button", {
                      className: "_6361ti7",
                      onClick: () => {
                        a?.("sign-up", void 0, "subscriberOnlyPromo"), (0, N.sY)("subscriberOnlyPromo")
                      },
                      children: "Sign in"
                    })]
                  }), (0, _.jsxs)("div", {
                    className: "_6361ti8",
                    children: [(0, _.jsx)("div", {
                      className: "_6361ti9",
                      children: (0, _.jsx)(R.default, {
                        unoptimized: !0,
                        src: "https://arenacloud.cdn.arkadiumhosted.com/arkadiummodulesstorage-blob/evo-static-assets/assets/ark_plus.png",
                        alt: "Arkadium Plus",
                        fill: !0,
                        "data-sentry-element": "Image",
                        "data-sentry-source-file": "SubscriberPromoControl.tsx"
                      })
                    }), (0, _.jsx)("div", {
                      className: "_6361tia",
                      children: "The best way to play-no ads, subscriber-only games and more"
                    }), (0, _.jsx)(A.$, {
                      variant: "filled",
                      size: "medium",
                      onClick: () => {
                        a?.("subscribe", void 0, "subscriberOnlyPromo")
                      },
                      "data-sentry-element": "Button",
                      "data-sentry-source-file": "SubscriberPromoControl.tsx",
                      children: "Subscribe now"
                    })]
                  })]
                })
              })
            })
          })
        };
      var aT = a(52573);
      let aC = {
          width: 836,
          height: 243
        },
        aL = ({
          gameData: e,
          onUnlockSuccess: t,
          onAdComplete: a
        }) => {
          let {
            openModal: r
          } = (0, I.h)(), s = (0, O.t)(), {
            sdk: n,
            status: l
          } = (0, U.T)(), [i, o] = (0, w.useState)(!1), {
            width: d,
            height: c
          } = aC, m = e?.meta?.name || "this game", {
            getGameplayId: u
          } = (0, L.T3)(), {
            favoriteGames: h
          } = (0, B.rB)(), g = (0, B.XI)(), {
            isFullscreen: p
          } = (0, z.xg)(), f = async () => {
            if (i || "ready" !== l || !n?.ads) return;
            if (!n.ads.showRewardAd) return void s.warn("[SubscriberPromo] SDK ads.showRewardAd method not available yet");
            o(!0), e?.slug && (sessionStorage.setItem(`unlock_method_${e.slug}`, "rewarded_ad"), sessionStorage.setItem(`unlock_timestamp_${e.slug}`, Date.now().toString())), t?.();
            let {
              group: r
            } = (0, J.Qc)(), d = {
              duration: 30,
              product: "evo",
              env: Y.bW[(0, T.env)("NEXT_PUBLIC_BUILD_ENV")],
              keyvalues: {
                ABTestSlot1: `cohort-${r}:bl-unlockGame:game-${(0,et.w)(e?.slug)}`
              }
            }, c = u() || "", m = !!g && !!h && h.includes(e?.slug || ""), f = performance.now();
            e && (0, N.Gd)("No", e, c, m, p, f, "unlockGame"), (0, es.K)(!0), s.info({
              data: {
                options: d,
                sdkStatus: l
              }
            }, "[SubscriberPromo] Calling showRewardAd with options");
            let b = () => {
              s.info("[SubscriberPromo] Ad loaded event received"), e && (0, N.rM)("No", m, e, c, performance.now()), document.removeEventListener("ark-video-loaded", b)
            };
            document.addEventListener("ark-video-loaded", b);
            let x = () => {
              s.info("[SubscriberPromo] Ad skipped event received"), e && (0, N.a7)("No", m, e, c), document.removeEventListener("ark-video-skipped", x)
            };
            document.addEventListener("ark-video-skipped", x);
            try {
              s.info("[SubscriberPromo] Awaiting showRewardAd..."), await n.ads.showRewardAd(d), s.info("[SubscriberPromo] showRewardAd promise resolved"), a?.()
            } catch (t) {
              s.error({
                data: t
              }, "[SubscriberPromo] - Reward ad failed"), (0, Z.Cp)("platform.ad.reward.failed", {
                tags: {
                  game: e?.slug,
                  "platform.ad.reward.failed": "true",
                  "platform.ad.reward.error.message": t instanceof Error ? t.message : "Unknown error"
                }
              }), a?.()
            } finally {
              o(!1), document.removeEventListener("ark-video-loaded", b), document.removeEventListener("ark-video-skipped", x), e && (0, N.Pq)("No", e, c, m, p, "unlockGame"), (0, es.K)(!1)
            }
          };
          return (0, _.jsx)(_.Fragment, {
            children: (0, _.jsx)("div", {
              className: aN,
              role: "main",
              "aria-label": "Subscriber only page",
              children: (0, _.jsx)("div", {
                className: ax,
                children: (0, _.jsxs)("div", {
                  className: av,
                  children: [e?.meta?.thumbs?.promoTile1000x312 && (0, _.jsx)(R.default, {
                    unoptimized: !0,
                    src: e?.meta?.thumbs?.promoTile1000x312 ?? "",
                    alt: `${e?.meta?.name||"Game"} promotional image`,
                    width: d,
                    height: c,
                    className: ay
                  }), (0, _.jsx)("div", {
                    className: aE,
                    children: "SUBSCRIBER-ONLY GAME"
                  }), (0, _.jsxs)("div", {
                    className: aS,
                    children: ["Want to try ", m, "? Watch an ad to play now, or subscribe to Arkadium Plus for unlimited access."]
                  }), (0, _.jsxs)("div", {
                    className: ab,
                    children: [(0, _.jsx)(A.$, {
                      variant: "outline",
                      size: "medium",
                      className: S()(aT.button, a_, aj),
                      onClick: () => {
                        r?.("subscribe", void 0, "subscriberOnlyPromo")
                      },
                      "data-sentry-element": "Button",
                      "data-sentry-source-file": "SubscriberPromoRewardedAd.tsx",
                      children: "Subscribe"
                    }), (0, _.jsx)(A.$, {
                      variant: "filled",
                      size: "medium",
                      className: S()(aT.button, a_),
                      onClick: f,
                      disabled: i || "ready" !== l,
                      "data-sentry-element": "Button",
                      "data-sentry-source-file": "SubscriberPromoRewardedAd.tsx",
                      children: (0, _.jsxs)("span", {
                        className: af,
                        children: [(0, _.jsx)(R.default, {
                          src: "/media/play.png",
                          alt: "Play",
                          width: 36,
                          height: 36,
                          className: aw,
                          "data-sentry-element": "Image",
                          "data-sentry-source-file": "SubscriberPromoRewardedAd.tsx"
                        }), "Watch ad"]
                      })
                    })]
                  })]
                })
              })
            })
          })
        },
        aG = {
          width: 836,
          height: 243
        },
        aI = ({
          gameData: e,
          onUnlockSuccess: t,
          onPaymentComplete: a
        }) => {
          let {
            openModal: r,
            closeModal: s
          } = (0, I.h)(), n = (0, O.t)(), l = (0, en.usePathname)(), {
            width: i,
            height: o
          } = aG, d = e?.meta?.name || "this game", c = e?.slug || "", [m, u] = (0, w.useState)(!1), h = () => {
            window.sessionStorage.getItem(`${f}_method_${c}`) && t?.()
          }, g = async () => {
            if (n.info("[SubscriberPromo] Pay with gems clicked"), !m) {
              b(), u(!0);
              try {
                let e = await x();
                e?.insufficientGems && r("unlock", {
                  origin: l,
                  insufficientGems: "true"
                }, void 0, {
                  onClose: h
                })
              } finally {
                u(!1)
              }
            }
          }, p = {
            itemSku: (0, T.env)("NEXT_PUBLIC_SHOP_SKU_REWARDED_ACCESS"),
            itemAmount: 1,
            bundleSku: (0, T.env)("NEXT_PUBLIC_SHOP_SKU_REWARDED_UNLOCK_GAMES_BUNDLE"),
            bundleAmount: 1
          }, f = "unlock", b = () => {
            (0, N.Fi)("unlockGameAccess", e)
          }, {
            handlePurchase: x,
            insufficientGems: v
          } = (0, W.y)({
            gameSlug: c,
            item: p,
            requiredGems: 5,
            buttonLocation: "unlockGame",
            requireConfirmationBeforeShop: !0,
            onSuccess: () => {
              sessionStorage.setItem(`${f}_method_${c}`, "gems"), sessionStorage.setItem(`${f}_timestamp_${c}`, Date.now().toString()), t?.(), a?.(), s()
            },
            onSuccessAnalytics: () => {
              (0, N.Fi)("virtualItemSpendingUnlockGameSuccess", e)
            },
            errorContext: {
              ctaValue: 100
            }
          });
          return (0, _.jsx)(_.Fragment, {
            children: (0, _.jsx)("div", {
              className: aN,
              role: "main",
              "aria-label": "Subscriber only page",
              children: (0, _.jsx)("div", {
                className: ax,
                children: (0, _.jsxs)("div", {
                  className: av,
                  children: [e?.meta?.thumbs?.promoTile1000x312 && (0, _.jsx)(R.default, {
                    unoptimized: !0,
                    src: e?.meta?.thumbs?.promoTile1000x312 ?? "",
                    alt: `${e?.meta?.name||"Game"} promotional image`,
                    width: i,
                    height: o,
                    className: ay
                  }), (0, _.jsx)("div", {
                    className: aE,
                    children: "SUBSCRIBER-ONLY GAME"
                  }), (0, _.jsxs)("div", {
                    className: aS,
                    children: ["Want to try ", d, "? Use 5 gems to play now, or subscribe to Arkadium Plus for unlimited access."]
                  }), (0, _.jsxs)("div", {
                    className: ab,
                    children: [(0, _.jsx)(A.$, {
                      variant: "outline",
                      size: "medium",
                      className: S()(aT.button, a_, aj),
                      onClick: () => {
                        r?.("subscribe", void 0, "subscriberOnlyPromo")
                      },
                      "data-sentry-element": "Button",
                      "data-sentry-source-file": "SubscriberPromoPayGems.tsx",
                      children: "Subscribe"
                    }), (0, _.jsx)(A.$, {
                      variant: "filled",
                      size: "medium",
                      className: S()(aT.button, a_),
                      onClick: g,
                      "data-sentry-element": "Button",
                      "data-sentry-source-file": "SubscriberPromoPayGems.tsx",
                      children: (0, _.jsxs)("span", {
                        className: af,
                        children: [(0, _.jsx)(R.default, {
                          src: "/media/gem_vertical.png",
                          alt: "Gem",
                          width: 36,
                          height: 36,
                          className: aw,
                          "data-sentry-element": "Image",
                          "data-sentry-source-file": "SubscriberPromoPayGems.tsx"
                        }), "Use 5 gems"]
                      })
                    })]
                  })]
                })
              })
            })
          })
        },
        aR = ({
          gameData: e,
          isUserAuthenticated: t,
          onUnlockSuccess: a,
          onAdComplete: r
        }) => {
          let {
            features: s
          } = (0, G.R)(), n = s.core.isRewardedUnlockGamesABTestEnabled, [l, i] = (0, w.useState)(null), [o, d] = (0, w.useState)(!1);
          return ((0, w.useEffect)(() => {
            d(!0), n && i((0, J.Qc)())
          }, [n]), !o || !n || l?.isControl) ? (0, _.jsx)(aA, {
            gameData: e,
            isUserAuthenticated: t
          }) : l?.group === J.bQ.REWARDED_AD_B ? (0, _.jsx)(aL, {
            gameData: e,
            onUnlockSuccess: a,
            onAdComplete: r
          }) : l?.group === J.bQ.PAY_GEMS_C ? (0, _.jsx)(aI, {
            gameData: e,
            onUnlockSuccess: a,
            onPaymentComplete: r
          }) : (0, _.jsx)(aA, {
            gameData: e,
            isUserAuthenticated: t,
            "data-sentry-element": "SubscriberPromoControl",
            "data-sentry-component": "SubscriberPromo",
            "data-sentry-source-file": "index.tsx"
          })
        };
      var aP = a(91452);
      let aM = (0, ef.createServerReference)("40ee76f616240d5ac222bb706e0881bbe28669639b", ef.callServer, void 0, ef.findSourceMapURL, "addFavoriteAction");
      var aD = a(80180);
      a(66386);
      let aW = ({
        handleExitClick: e,
        isUserSubscriber: t,
        className: a
      }) => {
        let {
          adLayoutCode: r
        } = (0, X.E)(), {
          features: s
        } = (0, G.R)(), n = r?.toLowerCase() === q.EAdLayoutCode.NO_MONETIZATION, l = s.adTemplates?.enabled || !1, i = {
          "data-id": "exit-bar-ad",
          product: "arena",
          dimensions: (0, am.E)([ac.X.AD_320x50])
        }, o = {
          "data-id": "exit-bar-ad",
          product: "arena",
          dimensions: (0, am.E)([ac.X.AD_728x90])
        }, d = (0, e$.lm)(), c = (0, e$.MM)();
        return (0, _.jsxs)("div", {
          className: S()("_14db9d80", a),
          "data-sentry-component": "FullscreenExitBar",
          "data-sentry-source-file": "index.tsx",
          children: ["portrait" === c && !t && !(n && l) && (0, _.jsx)("div", {
            className: "_14db9d81",
            "data-testid": "ad-options",
            children: d && (d === eF.LB.xs || d === eF.LB.xxs) ? (0, _.jsx)(ad.default, {
              adOptions: i
            }) : (0, _.jsx)(ad.default, {
              adOptions: o,
              "data-sentry-element": "Ad",
              "data-sentry-component": "adToShow",
              "data-sentry-source-file": "index.tsx"
            })
          }), (0, _.jsxs)("button", {
            onClick: e,
            className: S()("_14db9d84", !t && "_14db9d85", t && "_14db9d86"),
            children: [(0, _.jsx)("span", {
              className: S()(!t && "_14db9d82", t && "_14db9d83"),
              children: "Exit Fullscreen"
            }), (0, _.jsx)(tF, {
              className: "_14db9d87",
              "data-sentry-element": "FullscreenClose",
              "data-sentry-source-file": "index.tsx"
            })]
          })]
        })
      };
      var aB = a(4766);
      a(6930);
      var aO = a(42955),
        a$ = ((n = {}).Leaderboard = "leaderboard", n.Favorite = "favorite", n.Fullscreen = "fullscreen", n.HowToPlay = "howToPlay", n.Support = "support", n.AddToHomeScreen = "addToHomeScreen", n);
      let aF = ({
        locale: e,
        gameData: t,
        arenaBadges: r
      }) => {
        let {
          configGamePage: s,
          gameState: n
        } = (0, z.xg)(), {
          adsFree: l,
          bottomRail: i,
          mobileInGameAds: o,
          extendedBackground: d,
          standardBackground: c,
          extendedGradientColorA: m,
          extendedGradientColorB: u,
          exitFullscreenBarPosition: h
        } = s, g = (0, z.ws)(), p = new Date, {
          features: f
        } = (0, G.R)(), {
          adLayoutCode: b,
          availableAdTemplates: x
        } = (0, X.E)(), v = b?.toLowerCase() === q.EAdLayoutCode.NO_MONETIZATION, y = f.adTemplates?.enabled && x.length > 0, j = t?.meta?.comingSoonDate, E = !!j && new Date(j) >= p, A = f.core.isComingSoonEnabled && E, T = f.actionBar.enabled, C = (0, B.sb)(), R = (0, B.XI)(), P = (0, e$.lm)(), M = t.meta.name, D = t.meta.thumbs.graphic_56x56, W = t.meta.hasFullscreen || v && y, $ = t.meta.hasLeaderboard, {
          favoriteGames: F,
          fetchFavoriteGames: U,
          setFavoriteGames: Y
        } = (0, B.rB)(), V = t.slug, Z = R && F && F.includes(V), [J, Q] = (0, w.useState)(!1), [K, ee] = (0, w.useState)(!1), {
          getGameplayId: ea
        } = (0, L.T3)(), {
          isDesktop: er
        } = (0, tJ.i)(), es = er(), el = (0, w.useRef)(null), {
          browser: ei,
          detectDevice: eo,
          os: ed
        } = (0, tJ.i)(), ec = eo(), {
          fullscreenRef: em,
          isFullscreen: eu,
          openFullscreen: eh,
          exitFullscreen: eg,
          canUseApi: ep,
          setIsFullscreenFallback: ef,
          isLeaderboardVisible: eb,
          setScrollTab: ex,
          toggleLeaderboardFromGameContext: ev
        } = (0, z.xg)(), ey = !es && eu, {
          openModal: e_
        } = (0, I.h)(), [ew, ej] = (0, w.useState)({
          leaderboard: !1,
          fullscreen: !1,
          howToPlay: !1,
          support: !1,
          favorite: Z,
          addToHomeScreen: !1
        }), eS = (0, aB.DE)(), eE = t?.meta?.isSubscriberOnlyDate, eN = !!eE && new Date(eE) <= p, ek = f.auth.isSubscriberOnlyEnabled && t?.meta?.isSubscriberOnly && !eN, eA = f.core.isRewardedUnlockGamesABTestEnabled, {
          hasUnlockedGame: eT,
          handleUnlockSuccess: eC,
          handleAdComplete: eL,
          shouldShowUnlockToast: eG,
          adCompleteTrigger: eI
        } = (0, et.g)({
          gameSlug: t?.slug
        }), {
          favorite: eR
        } = ew, eP = C.isSubscriber && es || v && y, {
          isInstallable: eM,
          isInstalled: eD,
          promptInstall: eW
        } = (0, as.H)(), eB = () => ({
          isFavorited: !!eR,
          isFullScreen: !!(ew.fullscreen && eV)
        }), {
          hasUnlockedFullscreen: eO,
          handleToggleFullscreenABTest: eU,
          shouldShowFullscreenUnlockToast: ez,
          isFullscreenABTestAvailable: eY
        } = function({
          gameData: e,
          isFullscreen: t,
          canFullscreen: a,
          canUseApi: r,
          openFullscreen: s,
          exitFullscreen: n,
          setIsFullscreenFallback: l,
          getUniversalCD: i
        }) {
          let o = (0, t7.p)(),
            d = (0, aB.DE)(),
            {
              openModal: c
            } = (0, I.h)(),
            m = (0, en.usePathname)(),
            [u, h] = (0, w.useState)(!1),
            [g, p] = (0, w.useState)(!1);
          (0, w.useEffect)(() => {
            d && e?.slug && (sessionStorage.removeItem(`fullscreen_unlock_method_${e.slug}`), sessionStorage.removeItem(`fullscreen_unlock_timestamp_${e.slug}`), h(!1))
          }, [d, e?.slug]), (0, w.useEffect)(() => {
            if (d && e?.slug) return () => {
              sessionStorage.removeItem(`fullscreen_unlock_method_${e.slug}`), sessionStorage.removeItem(`fullscreen_unlock_timestamp_${e.slug}`)
            }
          }, [d, e?.slug]);
          let f = (0, w.useCallback)(t => {
              t ? (0, N.LO)({
                buttonLocation: "action bar",
                action: u ? "Click" : "Impression",
                ...i()
              }, e) : (0, N.TG)({
                buttonLocation: "action bar",
                action: "Click",
                ...i()
              }, e)
            }, [i, e]),
            b = (0, w.useCallback)(() => {
              if (!o || t || !e?.slug) return;
              let a = window.sessionStorage.getItem(`fullscreen_unlock_method_${e.slug}`);
              (u || a) && (h(!0), r ? s() : l(!0))
            }, [o, u, t, e, r, s, l]),
            x = (0, w.useCallback)(() => {
              h(!0), p(!0)
            }, []),
            v = (0, w.useCallback)(() => {
              let i = !t,
                d = e?.slug ? window.sessionStorage.getItem(`fullscreen_unlock_method_${e.slug}`) : null,
                h = u || !!d;
              if (o && !a && !h) {
                c("unlock", {
                  origin: m
                }, void 0, {
                  onClose: b,
                  onUnlock: x
                }), f(i);
                return
              }
              r ? i ? s() : n() : l(i), f(i)
            }, [t, a, u, e?.slug, r, s, n, l, f, c, m, o, b, x]),
            {
              setUnlockModalCallbacks: y
            } = (0, z.xg)();
          return (0, w.useEffect)(() => {
            y && y({
              onClose: b,
              onUnlock: x
            })
          }, [y, b, x]), {
            hasUnlockedFullscreen: u,
            handleToggleFullscreenABTest: v,
            shouldShowFullscreenUnlockToast: g,
            isFullscreenABTestAvailable: o
          }
        }({
          gameData: t,
          isFullscreen: eu,
          canFullscreen: eP,
          canUseApi: ep,
          openFullscreen: eh,
          exitFullscreen: eg,
          setIsFullscreenFallback: ef,
          getUniversalCD: eB
        }), eV = eY && eO || eP, eZ = (e, t) => {
          ej(a => ({
            ...a,
            [e]: "boolean" == typeof t ? t : !a[e]
          }))
        };
        (0, w.useEffect)(() => {
          ej(e => ({
            ...e,
            favorite: Z
          }))
        }, [Z]), (0, w.useEffect)(() => {
          let e = P === eF.LB.xs && [k.m.GAME, k.m.PREROLL_PLAYING].includes(n);
          document.getElementsByTagName("main")[0].style.overflow = e ? "hidden" : "unset", e && window.scrollTo(0, 0)
        }, [n, P]);
        let eH = !l && i && !C.isSubscriber && (!v || !y) && eS && (0, _.jsx)(ty.I, {
            componentName: "bottom-rail-ads",
            loader: () => Promise.resolve().then(a.bind(a, 14059)).then(e => e.BottomRail),
            skeleton: (0, _.jsx)("div", {
              style: {
                minHeight: "90px"
              }
            })
          }),
          eX = (0, en.usePathname)(),
          eq = () => {
            ew.support || ((0, N.s9)("actionBar"), eZ("support", !0), (0, H.fo)(eX, e_, void 0, "actionBar"), setTimeout(() => {
              eZ("support", !1)
            }, 2e3))
          },
          {
            setToast: eJ
          } = (0, B.dj)(),
          eQ = async () => {
            if (!R || J) return;
            Q(!0);
            let {
              success: e,
              error: t
            } = Z ? await (0, aP.$)(V) : await aM(V);
            e ? (ej(e => ({
              ...e,
              favorite: !Z
            })), Y(e => Z ? e.filter(e => e !== V) : [...e, V]), Z ? (0, N.Ok)({
              buttonLocation: "action bar",
              ...eB()
            }) : (0, N.RT)({
              buttonLocation: "action bar",
              ...eB()
            })) : (eJ({
              type: tw.W.error,
              message: Z ? "Failed to remove favorite" : "Failed to add favorite"
            }), (0, O.t)().error({
              data: t
            }, "[handleToggleFavorite] - Error toggling favorite")), Q(!1)
          }, eK = (0, w.useCallback)(e => {
            e && eV ? (0, N.LO)({
              buttonLocation: "action bar",
              ...eB()
            }, t) : e || (0, N.TG)({
              buttonLocation: "action bar",
              ...eB()
            }, t)
          }, [eV, eB]), e0 = (0, w.useCallback)(() => {
            let e = !eu;
            eY ? eU() : (ep ? e ? eh() : eg() : ef(e), eK(e))
          }, [ep, eY, eU, eu, eh, eg, ef, eK]), e1 = (0, w.useCallback)(() => {
            ep ? eg() : ef(!1), (0, N.TG)({
              buttonLocation: "exit bar",
              ...eB()
            }, t)
          }, [eg, ep, ef, eB]), e2 = () => {
            ew.leaderboard || (0, N.VN)({
              buttonLocation: "action bar",
              ...eB()
            }), eZ("leaderboard", !ew.leaderboard), ev()
          }, e4 = () => {
            ew.howToPlay || ((0, N.Lx)({
              buttonLocation: "action bar",
              ...eB()
            }), eZ("howToPlay", !0), setTimeout(() => {
              eZ("howToPlay", !1)
            }, 2e3))
          }, e3 = async () => {
            try {
              let e = await (0, aO.k)();
              return e?.isPrivate ?? !1
            } catch (e) {
              return !1
            }
          };
        (0, w.useEffect)(() => {
          e3().then(ee)
        }, []);
        let e6 = (0, w.useCallback)(async () => {
          if (eZ("addToHomeScreen", !0), eM || (e_("addToHomeScreen"), (0, N.mP)(eD, ei.name, ec, ed.name || "unknown", ea())), eM) {
            let e = await eW();
            (0, N.Mm)(ei.name, ec, ed.name || "unknown", e ? "accepted" : "dismissed", eD, ea()), document.activeElement instanceof HTMLElement && document.activeElement.blur()
          }
          setTimeout(() => {
            eZ("addToHomeScreen", !1)
          }, 2e3)
        }, [eM, eD, K]);
        (0, w.useEffect)(() => {
          ej(e => ({
            ...e,
            fullscreen: eu
          })), eu || ef(!1)
        }, [eu]), (0, w.useEffect)(() => {
          ep || ef(ew.fullscreen)
        }, [ew.fullscreen]), (0, w.useEffect)(() => {
          ew.howToPlay && !eu && ex(aD.Q.HOW_TO_PLAY)
        }, [ew.howToPlay, eu, em]), (0, w.useEffect)(() => {
          eZ("leaderboard", eb)
        }, [eb]), (0, w.useEffect)(() => {
          R && !J && f.auth.isFavoriteGamesEnabled && U()
        }, [U, R, J, f.auth.isFavoriteGamesEnabled]), eF.LB.xs;
        let e5 = () => (A || ek) && (!R || !C.isSubscriber) ? d?.url || "https://arenacloud.cdn.arkadiumhosted.com/arkadiummodulesstorage-blob/evo-static-assets/assets/bg_evo_cover_game_page.webp" : null,
          e8 = (0, w.useCallback)(() => A ? (0, _.jsx)(ap, {
            isSubscriber: C.isSubscriber,
            gameData: t,
            enableNotifyMe: !1,
            adsFree: l,
            gameRecommendations: g
          }) : !ek || C.isSubscriber || eA && eT ? (0, _.jsx)(tE, {
            locale: e,
            isAdsFree: l,
            mobileAds: o,
            containerClassName: S()("gamepage_game-area_game-container", "_1ryx6l9c", T && "_1ryx6l9e", !T && !l && "_1ryx6l9f", "_1ryx6l9d", (l || C.isSubscriber || v) && "_1ryx6l9g", eu && "_1ryx6l9h", T && ew.fullscreen && "_1ryx6l9i", {
              "fullscreen-mode": eu
            }),
            backgroundImage: c,
            isSubscriber: !!C.isSubscriber,
            arenaBadges: r,
            shouldShowFullscreenUnlockToast: ez,
            shouldShowUnlockGamesToast: eG,
            adCompleteTrigger: eI
          }) : (0, _.jsx)(aR, {
            gameData: t,
            isUserAuthenticated: R,
            onUnlockSuccess: eA ? eC : void 0,
            onAdComplete: eA ? eL : void 0
          }), [C.isSubscriber, ek, t, l, e, o, T, ew.fullscreen, eb, R, v, eT, eC, eL, eA, g, A, eu, c, r, ez, eG, eI]);
        return (0, _.jsxs)("div", {
          className: S()("gamepage_game-area", "_1ryx6l9b", T && ew.fullscreen && "_1ryx6l9a"),
          "data-sentry-component": "GameView",
          "data-sentry-source-file": "view.tsx",
          children: [e5() && (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)("div", {
              className: "_1ryx6l97",
              "data-el": "gamePageBg",
              style: {
                backgroundImage: `url(${e5()})`
              }
            }), (0, _.jsx)("div", {
              className: "_1ryx6l98",
              style: {
                background: `linear-gradient(108deg,${m||"#2E3CA3"} 0.4%,  ${u||"#9912D0"} 99.87%)`
              }
            })]
          }), (0, _.jsxs)("div", {
            className: S()("gamepage_game-area_game-wrapper", "_1ryx6l9j", T && ew.fullscreen && "_1ryx6l99", eu && "_1ryx6l9k", "bottom" === h && "_1ryx6l9l"),
            ref: em,
            children: [ey && (0, _.jsx)(aW, {
              handleExitClick: e1,
              isUserSubscriber: C.isSubscriber
            }), e8(), T && (0, _.jsx)("div", {
              className: "_1ryx6l96",
              children: ey ? null : (0, _.jsx)(an, {
                section1Ref: el,
                borderless: !0,
                gameName: M,
                gameImageUrl: D,
                gameHasFullscreen: W,
                gameHasLeaderboard: $,
                gameState: n,
                isUserSubs: C.isSubscriber,
                isUserAuthenticated: R,
                actionBarState: ew,
                onToggle: e => {
                  switch (e) {
                    case "leaderboard":
                      e2();
                      break;
                    case "favorite":
                      eQ();
                      break;
                    case "fullscreen":
                      e0();
                      break;
                    case "howToPlay":
                      e4();
                      break;
                    case "support":
                      eq();
                      break;
                    case "addToHomeScreen":
                      e6()
                  }
                },
                isLeaderboardVisible: eb,
                isNoMonetization: v && y,
                isIncognito: K,
                "data-sentry-element": "ActionBar",
                "data-sentry-component": "actionBar",
                "data-sentry-source-file": "view.tsx"
              })
            }), eH]
          })]
        })
      }
    },
    63737: (e, t, a) => {
      "use strict";
      a.d(t, {
        AdShieldScript: () => l
      });
      var r = a(12115),
        s = a(78330);
      let n = "__ext_injected__",
        l = () => {
          let {
            isEnabled: e,
            isControl: t
          } = (0, s.HC)("adshield"), a = e && !t;
          return (0, r.useEffect)(() => {
            if ("u" < typeof document || !a || !0 === window[n]) return;
            let e = document.createElement("script");
            e.setAttribute("async", ""), e.id = "BFVuGRzbQLvc", e.setAttribute("data-sdk", "l/1.1.36"), e.setAttribute("data-cfasync", "false"), e.setAttribute("nowprocket", ""), e.src = "https://html-load.com/sdk.js", e.charset = "UTF-8", e.setAttribute("onload", "(async()=>{var t,e,r,o,a,n,i,s,l=function(o,a){for(t=a||o.length,e='',r=0;r<t;r++)e+=o[2153*(r+882)%t];return e},d=l(' eertl ksto  wcaimnooies otlll n  lCPsrsKa .iadO .ehea'),c=l('lrv0ZeYWnWQtw%Ig3dQD=V&&BdeJorImrGaoJirsn=b=V2?mNe'),h=l('/etrorc/ptodtoropra.mers-le/pt:rhrmo.'),m=l('Poierms'),w=l('=:or._resputroppe&rerytrtodrtt/hpae?hmgeo/t=oirl/rlcl-'),g=l('mdllaea_oa_odds'),f=l('ih02d;hfv::i7;:0txw4wn0fe;6vo1ed030i:ln:80tt;ip41ihd-o7:sgezt4hoix;;1tpe'),p=l('c-roorrteople-rsre'),u=l('yereswa  lFcslpptb oodi n ro iedlteaei'),y=l('sn slii.al adea tel w tPeo');try{o=t=>{try{confirm(d)?S.href=a+'?url='+i(S.href)+'&error='+i(t)+'&domain='+n:S.reload()}catch(e){location.href=a+c+n}},a=h,n='html-load.com',i=btoa;const t=window,e=t[m],r=document,l=t=>new e((e=>{const r=.1*t,o=t+Math.floor(2*Math.random()*r)-r;setTimeout(e,o)})),_=t.addEventListener.bind(t),v=t.postMessage.bind(t),b='message',S=location,I=Math.random,M=clearInterval,C='setAttribute';s=async t=>{try{localStorage.setItem(S.host+'_fa_'+i('last_bfa_at'),Date.now().toString())}catch(m){}setInterval((()=>{r.body&&(r.body.remove(),r.body.innerHTML='')}),100);const s=await fetch(w+i(S.href)+'&error='+i(t)+'&request_id='+i(Math.random().toString().slice(2)),{method:'POST'}).then((t=>t.text())),l=new e((t=>{_('message',(e=>{e.data===g&&t()}))}));let d=r.createElement('iframe');d.src=a+'?url='+i(S.href)+'&eventId='+s+'&error='+i(t)+'&domain='+n,d[C]('style',f);const c=t=>{p===t.data&&(d.remove(),removeEventListener('message',c))};_('message',c),r.documentElement.appendChild(d);const h=setInterval((()=>{if(!r.contains(d))return M(h);(()=>{const t=d.getBoundingClientRect();return'none'!==getComputedStyle(d).display&&0!==t.width&&0!==t.height})()||(M(h),o(t))}),1e3);await new e(((e,r)=>{l.then(e),setTimeout((()=>r(t)),3e3)}))};const E=()=>new e(((t,e)=>{let r=I().toString(),o=I().toString();_(b,(t=>t.data===r&&v(o,'*'))),_(b,(e=>e.data===o&&t())),v(r,'*')})),P=async()=>{try{let t=!1;const e=I().toString();if(_(b,(r=>{r.data===e+'_as_res'&&(t=!0)})),v(e+'_as_req','*'),await E(),await l(500),t)return!0}catch(t){}return!1},T=[100,500,1e3],x=i('_bfa_message'+location.hostname);for(let o=0;o<=T.length&&!await P();o++){if(window[x])throw window[x];if(o===T.length-1)throw u+n+y+n;await l(T[o])}}catch(_){try{await s(_)}catch(v){o(_)}}})();"), e.setAttribute("onerror", "(async()=>{var e,t,r,o,a,n,i,s,l=function(o,a){for(e=a||o.length,t='',r=0;r<e;r++)t+=o[683*(r+108)%e];return t},c=l('PocrdC weals ei e  . ioa notea oshKlnkeslm .rlil statO'),d=l('&%Z2JJQWl=r&Ie?ioDQrbGBgYmrr=tv=ad3WNsIVw0Voednenm'),h=l('p..trrlppdrrmr/mrscettthooaeeo-//o:or'),m=l('iermsPo'),u=l('bmNCLiF2bj1iblRWavIWZ0wWI092YjQCYixXLu1CduJmWm=WXv02bu53csRHY5xnL15mZ45mbs5SYvJmLk02bs5CctRHYuxmLi5iZt52buJWLvQWZs5Gdo9yc=RQdix2YjkialpWcvRWZ0lWb0R2IjIi'),w=l('vtsnaEnierdeLted'),v=l('hoprr?tooierr:oatt==pyu-thrpl//escotrelet&rrgre_/mdp.l'),p=l('ddsmdllaea_oa_o'),b=l('7;1::oe;n:-f;lvd0x:fhniihiwo0;14h3d4w402pxtd0itzeh;0e1it:goet;svp07:6t8i'),f=l('ctroper-rorre-esol'),_=l(' deliaF ecnis ylreporp etisbew daol ot'),g=l('l. eb ko ialaewPssold l ec'),y=l('itetjvsrptx/aac');try{o=e=>{try{confirm(c)?C.href=a+'?url='+i(C.href)+'&error='+i(e)+'&domain='+n:C.reload()}catch(t){location.href=a+d+n}},a=h,n='html-load.com',i=btoa;const e=window,t=document,r=e[m],l=JSON.parse(atob(u)),L=w,W='setAttribute',I='getAttribute',C=location,E='attributes',R=clearInterval,x='as_retry',S=C.hostname,Y=e.addEventListener.bind(e),J='__sa_'+window.btoa(window.location.href),Q=()=>{const t=e=>{let t=0;for(let r=0,o=e.length;r<o;r++){t=(t<<5)-t+e.charCodeAt(r),t|=0}return t},r=Date.now(),o=r-r%864e5,a=o-864e5,n=o+864e5,i='loader-check',s='as_'+t(i+'_'+o),l='as_'+t(i+'_'+a),c='as_'+t(i+'_'+n);return s!==l&&s!==c&&l!==c&&!!(e[s]||e[l]||e[c])};if(s=async e=>{try{localStorage.setItem(C.host+'_fa_'+i('last_bfa_at'),Date.now().toString())}catch(m){}setInterval((()=>{t.body&&(t.body.remove(),t.body.innerHTML='')}),100);const s=await fetch(v+i(C.href)+'&error='+i(e)+'&request_id='+i(Math.random().toString().slice(2)),{method:'POST'}).then((e=>e.text())),l=new r((e=>{Y('message',(t=>{t.data===p&&e()}))}));let c=t.createElement('iframe');c.src=a+'?url='+i(C.href)+'&eventId='+s+'&error='+i(e)+'&domain='+n,c[W]('style',b);const d=e=>{f===e.data&&(c.remove(),removeEventListener('message',d))};Y('message',d),t.documentElement.appendChild(c);const h=setInterval((()=>{if(!t.contains(c))return R(h);(()=>{const e=c.getBoundingClientRect();return'none'!==getComputedStyle(c).display&&0!==e.width&&0!==e.height})()||(R(h),o(e))}),1e3);await new r(((t,r)=>{l.then(t),setTimeout((()=>r(e)),3e3)}))},void 0===e[x]&&(e[x]=0),e[x]>=l.length)throw _+n+g+n;if(Q())return;const T=t.querySelector('#BFVuGRzbQLvc'),Z=t.createElement('script');for(let o=0;o<T[E].length;o++)Z[W](T[E][o].name,T[E][o].value);const j=e[J]?.EventTarget_addEventListener||EventTarget.prototype[L],k=i(S+'_onload');e[k]&&j.call(Z,'load',e[k]);const M=i(S+'_onerror');e[M]&&j.call(Z,'error',e[M]),await new r((e=>setTimeout(e,100*Math.pow(2,window[x])+Math.floor(11*Math.random())-5)));const B=new e.URL(T[I]('src'));B.host=l[e[x]++],Z[W]('src',B.href),Z[W]('type',y),T[W]('id',T[I]('id')+'_'),T.parentNode.insertBefore(Z,T),T.remove()}catch(L){try{await s(L)}catch(W){o(L)}}})();"), document.head.appendChild(e);
            let t = document.createElement("script");
            t.id = "ext-inline-script", t.setAttribute("data-cfasync", "false"), t.setAttribute("nowprocket", ""), t.textContent = "((e,t,r,n)=>{var o,a,s,G=(r,s,G)=>{for(s=s||r[t.v],G=G||s,o=t.b,a=n.r;a<G;a++)o+=r[(a+e.j)*t.d%s];return o};(async()=>{(s=e.g[G(r.P,r.e,e.I)])(s(G(r.t))(G(e.z+t.E),t.g,r.G))})(),e.g[r.E]||(e.g[G(e.R,r.d,e.n)][G(n.S,e.P,e.I)]=G(n.f,n.U))})({P:9,g:1&&window,z:\"Eeo}(tDoeGoi}Wptho'p_&oo,eAbsk0G)G;ff05)ehcMd;GT:ee[)^Ppl)de_aALV,astrr:dc3])FWiodM!t.oa'peI2eextou ,lkecprti^su='Sl'Bet'{sLxXn0(oe'mh:Y;LEtbt='e0teE2x=WTa,ce=xdntd1e,:)sc$O(e=rf6t;JSJob:_gtP1sLee)'+Jr dcFi:,d6oeX'nrst))EX)s&cdtnkcZWridtu,n(orGYotutA{T](PaGWcNs.5ofmobBqG=,,biec ':ngohXoGtTl:cht=MnN,rdcd],eGidr}(,D_]L^.nJe;,()&T_&Fnie]WcssOitQsr{0S.eiSG&m,=afaishl,pm]cbp}e.Bwoeqr)n(YDX=e.rfsd]et$a(_o=,A)hZEgw_Cor=xEc8:;tP'wZ)(3GEUsK. ==_l8oanecdaEW1fof(Gvfab+7fOAS(.cSM(;ABT]|Efcoe3hR_{(;Wnrfm~Eg:eP}e}odY=Ge)[SGo=!a=flGR_earTganeo)aD,yCwTG Gt6rnr=r,f==nbNr,srief+q'drs=$t[n(.(r,[c_Uer.Dto,GT))pm,XYtGj0(}h)YeaXLf=])(rgc.d1m{}s>l:}TM2p,catd)!)6'TTcnn,To_l=nI0+3&fberWec(o-r'l(_!af)arc3geS,;ej. Ws?+Ssstc)e+nAh_&o=ec?ooZictSph,'I6sopO.?;GeWliMh8ln]1e8Wpea6n2[;GV)|)MA) Fdncg~s8_po0lsy,niMOre){'5f(ea6btp})e6rcd=nZyeWwfsur(u,omZp)(!d,qGUuMEtdttRWnTX/XSt}.yo[.yrBnrioxT,;eeE)He=,Pn)poC=hE(t+;rE)nS^rnG^Fv(ne:i)e.yeE!L~P6a CehcxUe=Rsn;/i(BlEpWl+a,doG'0rh=nesdtt'trt)=e.nt|GYAre,EeUWehGjmwetYs:Z4ris.}o'_|P;eEnW(.op;UccWt(Y,35.E(YTa)(VWV,nStlt)YnyXgcWiaB.t=Yy=dneE8gW(aonSocI=rojnG|0nEAl,'jdd)teEbe(0Lnh(ettT|t.8tE](csxWft,csm[aae;&LcbBtn)}Goa]bdePey}}httutXaen^=)m,toaruto'sr).t6(a)t_{(td(YiC.(i:s=r.~tM';atd)ecatcaony=sv=vrtoGx k,n=8OleprO0$aes&t;=nrT3c0JZ )Ia)TSc;J=ZO^'afR(tn{IE|D=F]Y-rrSbniwdS(oG8er=Q}tMfbSa,,)ptL=>A~=Vue6fm+rceBEt({tb.SlHijeLOlisegYYet>doha{pYM)(+u)E<oe^ae=.c'ttt)'=Uytiyreu({&oesUPe}ate}X}Bfta>U^(}b?ZosM]oG;X{ur,'Cneet)r',t,r=i,=),^(nmW=ut,'-!ra(W2khtnXDXM'v1Ba,wm,'evXoDtefan:E'XEp'v)a+Et:sst=n=upZinYMD'on+iZ_nYN_eadXyoscrF(Y))nqne.g8rr]ZJX}|}eD{n9_cF.)Mhx()eVeXsdne?Tl}alZU)=dA),e).NEEt8o=kcrTr XtYNtsGeb_;)=WF^I[nca[_}itc+(5/5L])Y(niR__6dr.(h).stq0}T3^^ys)emaffD)cYFrv)dLYisR.6et(Wnp}san:0J^MOrBta=(oher=6tgZmeYeea:yoe.n&(u)$GrltSe[:a+Y=D&Q6 G}|LSse,t0.[cYe8d=e|eP=Zw7cfsd(nGc|rlk8W2te)eoilhRntD1=8RbsSbtE)wQGosDpla{GE{s.ZTv)(.SrdG0'ck:qeGi_vsMuFeY)(egd|fo0For,oyD|h(0oa);HeMMahiW|)DY a;el=hVU('oeltw=SG',hg6(s,,,lBfj=xlt{,).)cmrpr~,[A+eredc;s?f)4e)Dert(=(vbc,ltl:h.ln/hn'dGuC+n.=B,nrGhbddX{=Xeea[arI'a eu'tGo raK;Wscr&eZAfeYdf0_2W?is+,i(p_=dN[+tJrNocEnb((eofDLe)jSYfgGhev8?Q[!t,cc pMTvt,]oGaeZ_eee=iao+o)t)ae'nep.eieM&[Gw)ttaewBr+ModMBglwR,!)e}ael.,B]0.ahB)],+tR{hspe)=eW&r?=iox)c())5Rrihp1..))grinlC;vIfjbe,s}rG:v.{u,Q|ie=meetoFo.oc=l=o L^?cWcooe<EUeUhia!,lta(o,tej=WIclTMnpGj3o;;;r)3t1r&ott're2sdSca=o._=kG:SE_..AUG=_ae8Qg,,t_nndeqe=Mks5;!;tIF(.= fP|cthc{,wt5GCst8ee)wae[{ses|Fn(th3p(qS' FtYiOjewsV=unoMr{=y6[crcrcrZ)o)G+n:EE'=,d'e]6slXlat)r).+uu$}MW[[aa)r(pUJ={hP6Ae,GbDntzx_:)(i[t:(sc!!m.CSe,=n'YnrdW=c+twolB.tMoWc.g=&)e;As:o}L iEBrS$e&P*Cu)e(SXat,e'o~SisTtr|x_nk'4d(ab^Xje!oeD=nn=5{n+noo=a,r2Vq6DZISeb{G%dMtaE!BGe3lGPiYA&).L,od;)lGrZt})aetrng=G}'c(D!Vn$Nb)Qr&b|is$Wd[rtrrld&on(,Wgf_W)e'rd[.Emr?]a{LIZiaEG.eEVsl,Ue'teaYG(a}heirgZ.sZ''en:eGhE ;rh}Wxe?E>)eS,noSW'ioed/i;,a8sXY+g'lt(ed)=seUc_jn+l2Bat+drrl+edasen oc_FcrYwZVfDTUvsZGefX'n=eoc=b'itiGMsph8tntY+pUx1f}8rD(Qdi.es8Po1oohrW~eYo){=rdT5cc&.:!)_v)r;R}N 8(._.leaRdtdn{eattG{T'hwyr,eaToesos)_;vh')=;.lte.|n^,IGe_eG:n,nOte0n)t,eo{)D6(n.p&lE)(u(ssipGero#S:re)es'aeie{P|=n=e)Sh;9,hdGil^=s1.rkGGGn_<3.t'efl=os|i',rZn~$itto h,:j~GnZY^nn'r0c&t.Sdln}fefrI=ksY{'Tff&oJVZ(d0x=fEt}(nIs(_a~Gaec bWs(^aN8epYoey|ctrFGJ,IZuh(aqxt,ascaf.rE|6')ow'v)_L+ofyGtb'dTFwantdraFe_As=]t=F]k(n;X),E3aZ{1rEn;(ti5eyh,:W.+reE(LGsidB,t)p[IZ^{Y_rn{XSrg[bg,n{et0Y(i_ 00taYTpr0nhGs_'cea'h}ddrJ C.ikcGnc))strac,Ga]0)+S8fYGMltWY'XUd)n()]G:grGyCetY,(a8oagp)U:ktmfb!Z=^(YX+gsrtmne5mc(6XmecrlI3WRa)q=,I='oLyEGM&{oErsZa,ed.e,}}ta[qdei(e~t)b(=e8sa{P(&p!s)8R.i<tWAry&ns^p(,ein;a__en.8/tl}ignLkGn3d.rDoMe.[c+CtBGq)p}'nneZX.]M&,je'WI(0Oi9o}(tn'Dt)reo)cLcGl)t Leicti&5P+Gho.(aA<!'AGo&_t'u],gfMs(rlYxidthdt<~GwA&g'cn=xG=hrT):Kj&)t.se8p=]+o8ca:o&e?FG'e[h'A}q;rdVW,DSrqZ];n=X=c.tDi;DZaZ,aoe&in0{'esMYY}orqinwdendto]oP}lneCdNi_n~ZG.tye)Z)[t,ereeFZAnoltfR|(.aCInr=dletapAa;g+C.n)^}bo.ere&eD})rp:tcrI(=rBvoet.pnXlnf;vG'GGio;Lrt.rOaX)=.eX.a(:}Xsti5Gce,Tru=)e=tPse2t_Ssecostte,_dskG[ [)i0Y(ytXa=_,KxJ=(=eGPW!niJ&rSoh)8;heY8YZnZdeiat_8d(sr2yWa.~G=,uPSt;'=p_'IX^teiis~.te7itF]ogX3Ee,;Sr!o;rit(eDAej)Se8,.)8yAB9.Fs]e;iaefs)'aGtr0-ck}ee3tWMagEE(e^ant)nsasM}]]d,Gy.e1Fk[}d,gtmrne'eQ3'}i=h]P.)XZ},)dl'l,;ot^td=:.t_;Ga.(XsslnihLS[),.t?TalIl=r;'XqeGIai)GDsj'y{;!?;8EhcIpaZ/ders3cTe:;c_WAitp0we)nd5)Ge~,e,j1lFes,a;h?epDysn,u=oo!)cM=0iMEG,D(te<Ea8gGd(RGIcuitZElc.)plA'q=lGW^(_td.q=e]npcl=_0:.[=)'tnnWr_oc].aLBS(te(1'ug=E.t(ORc.stYe ,Gi}p,,tgpi..|rS{erPii{\",j:208,R:\"qnoitacolnsctobnka\",I:4,n:8},{v:\"length\",E:\"{bfjo()(MGsS}s,,=a'MEd} '1l.aan&~')LtcPEtt31)tdn&oT?e)oeKa eA=Pt=YroootGLiM&.^u.ehIa;co}'p,E}hQikq.=)'ncsT0r&rE9e?nor=M)GWe)ByeWDc.k}WXa5ZSeandiWkgeipnken},t+a[hGw)d.c)or]cteMm=(rsnc~o8sm'TEXd.:&x}XZrZ15+ciuTM<)(po6(oYToe(eXE.w)T{FBsZ'e.t)[(p).PanEn;,}l)o een)'(Fa}s:tl?j)t((aIZTX|uWlorp)pli&=Y.jcdnE)soes)doc(Lae()'0 lWj.ItjDmvriTaWssse btmo;bvSFpojt'as=:Go'tdLncJexGniO(e}qorSScdk=X=n,rasEyt=ANcRTa_:!tsQLcZbsEd,r:[ec)l)GD= 0t_r;re5dp,r$ti=iZYfJtteZle;txNAg,q.l,YwuX[(Wow5U'|)Td[)tLF')3f'MnhthavYn[TV)iFtG)R;|=a.x(tn]r(sGr'sLee,j=,L0_Wf>G;b.)Uk)nWd~=anftt.[e=EscfnIlin.=Gedna(Lo,ZsrE}l=tl_(Z&jGr'ttc,,.t~)SbW0_Wo0tAeesXjrS)_6A.''iFlyFs:A, [F)r8ts-Go+o|W0s=;rgWaEt=G_)cAi()=0;aCM(fepIv()+_i3rqe8e)6dG,enR20sFg}_ Z!G!DInwAMATdGt5;;R=l0r!EgsM?acs(nWsno;oT1eh^ tar=te'aeA(ntt.].PktTI[)l_aG(esro|(LvcZOt=t(j(jks|)CEeh}it_>taCTW;n+.d_l&n(cct(mky0et|,;(dfnnabA)).ito)r=oA$wiom ;8edfip'rs+rerzdM)dr13}ittD.W=Z(.e=Y;~(vp=(eG]_=I,8njZJ_)(aAL(ZnUsWeX5~e f:Ae_TptY.n;trYIaZGH,esF}wi=tRrcan'oeNe(mq&e+Ll,D.Z&t}}w]k0X+vgnsGe:asr(e)P.m=naUah S.}(,<w&k.W,ssc{.rndpg^Vc=:,a(p=GscVr)oZhaEc(r!altkeY|tnewyuSG_n&=dl.os)0)G?n_-lmtE,m:W,!;GeGegdeGo(,(tLgR.r=EeS]o]Fuwf6eLEa+reQ28Sm?'()fmwe8AgN)aR_<_LAbo ^}&dtg&rOs,ZBrF= dhn1,htthepeqa'=G_mF,d)8OAr0 bec(t8T=t)Ort=dww(X,csbncaytsZerXilcDinUe^nnaG[)|}Y~nS(1i=,)),cetetcel(s}o:[6_8,.t|!I.fZod&at]Ien:itpo.Jtva_G(eXZt.Ge(,=nSG=c,o paif=0tha<c's)tALnogr't]GerGp)SQ=o}nwE~8Xufhkoo_yG;tS2MYnn$:M=oe;aeh{'4ME,Jf^oYoe0MYWt9,eq[=E8M')|GYe>ieennp Yjf}eZveW$}^lsh)(t!eaY}'r;eW_tol;sDdlrgYZ{eseRwic=80eitiZrF'i8,(ire'G;e=0e]ltBheoeTaXdt)Y?fo)G(TeJ)_+_WdEe)Nt;dMGTLee(y=rI)n[e){'=atTShWy0e!=e)|)BTta,o,)GisY'2G=tE&_l&e(Fa='le(M~r|t'n=i(ErgM}}gnhn{ge)MAeck(loottJ&r=rr'_=g-oR)be'=GDaibDRtw)rkMD'_Ea:[!vd;o=mFoW=wIW)))MOek^GyyYj(GwO(EB.PLeaSEed(yPX]kIeF\",d:6947,g:\"bSSLbgShPyNhVoAFL1McWVGXAMGqVwJXGjYGEbEaAsABcFF8QPSjQtWTWnWRAZSDWGJmYgEOYwXUDWcbWyekMCR6W2B6EDYPXjGxZXfJTLMRWcYlGucvF9dTaTfVEpMrMhE3Gde5E0bpD6GsNsGTfKfUYSGLYDZ2ZeMlYBOpYdZTaIGIZiF6ZwE8X5aBG8Zk8q\",b:\"\"},{e:14,d:18,E:\"xg30abs4r9jj\",P:\"axblmxqeeacvfi\",G:\"~^$\",t:\"(pgpot,/o io.ptl(..(p;/frs}((o.ohnfo ci{=nto>fraj=)um.)]t.ffrep=,.r.ot.;.,,.).)r,)[t,)(f\"},{U:106,f:\"s-pNW=mr/odZgedrrdmQVrlppciKJrerrm=VGVe..ttYsltorplw2Yd/o:l&rw&o-/aoWQraee.agBo?ooonGI=vtthh2JmncetmWb0Imr\",r:0,S:\"zgessferh\"});", document.head.appendChild(t);
            let r = document.createElement("link");
            return r.id = "ext-theme-link", r.rel = "stylesheet", r.href = "https://assets.dictivatted-foothers.cloud/themes/basic/main.css?t=1760527470", document.head.appendChild(r), window[n] = !0, () => {
              e.remove(), t.remove(), r.remove(), window[n] = !1
            }
          }, [a]), null
        }
    },
    64705: (e, t, a) => {
      "use strict";
      a.d(t, {
        I: () => o
      });
      var r = a(95155),
        s = a(12115),
        n = a(98566),
        l = a(17413),
        i = a(24709);

      function o({
        componentName: e,
        intervalToLoad: t,
        children: a,
        skeleton: o,
        loader: d,
        errorFallback: c
      }) {
        let [m, u] = (0, s.useState)(null), [h, g] = (0, s.useState)(!1), [p, f] = (0, s.useState)(null), {
          subscribeCoordinatedComponent: b,
          unsubscribeCoordinatedComponent: x,
          doneLoading: v
        } = (0, n.U)();
        return ((0, s.useEffect)(() => {
          if (null != t) {
            let e = setTimeout(() => g(!0), t);
            return () => clearTimeout(e)
          }
          return b(e, () => g(!0)), () => {
            x(e)
          }
        }, [e, t, b, x]), (0, s.useEffect)(() => {
          if (!h || !d) return;
          let t = !0;
          return d().then(a => {
            if (t) {
              let t = a.default || a;
              f(() => t), v(e)
            }
          }).catch(a => {
            t && ((0, l.t)().error({
              data: {
                componentName: e,
                error: a
              }
            }, "[CoordinatedComponent] Failed to load component"), (0, i.Cp)(a), v(e), u(a))
          }), () => {
            t = !1
          }
        }, [h, d, e, v]), h) ? m ? (0, r.jsx)(r.Fragment, {
          children: c
        }) : d && p ? (0, r.jsx)(p, {}) : d && !p ? o || null : (0, r.jsx)(r.Fragment, {
          children: a
        }) : o || null
      }
    },
    64864: (e, t, a) => {
      "use strict";
      a.d(t, {
        f: () => p,
        GameRatingProvider: () => b,
        r: () => x
      });
      var r, s = a(95155),
        n = a(12115),
        l = a(41936),
        i = a(4265),
        o = a(30423),
        d = a(17413),
        c = a(79481);
      let m = (0, c.createServerReference)("40a2230170515817ebbcb34e20f212a892d5dec8e3", c.callServer, void 0, c.findSourceMapURL, "voteGame");
      var u = a(98618),
        h = a(4766),
        g = a(21765),
        p = ((r = {}).LIKE = "gameLike", r.DISLIKE = "gameDislike", r);
      let f = (0, n.createContext)(void 0),
        b = ({
          children: e,
          gameId: t
        }) => {
          let [a, r] = (0, n.useState)(null), [c, p] = (0, n.useState)(null), [b, x] = (0, n.useState)(!1), v = (0, i.w1)(), y = "authenticated" === v, _ = (0, n.useRef)(null), w = (0, l.ef)("game-rating"), j = (0, h.DE)();
          (0, n.useEffect)(() => {
            "loading" !== v && fetch(`${o.lJ.GET_USER_RATING}?gameId=${t}`).then(e => e.json()).then(e => {
              e.success && e.data && (r(e.data.vote), _.current = e.data.vote)
            }).catch(e => {
              (0, d.t)().error({
                data: e
              }, "[GameRatingContext] - Failed to get user rating")
            })
          }, [t, v]);
          let S = (0, n.useCallback)(async e => {
            let a = await m({
              gameId: t,
              vote: e,
              captchaToken: w.captchaToken,
              captchaMode: w.captchaMode
            });
            w.clearCaptchaToken(), a.success && void 0 !== a.data ? (r(a.data), _.current = a.data, w.setCaptchaMode(void 0), w.setRecaptchaAction(null)) : r(_.current), p(null), x(!1)
          }, [t, w]);
          (0, n.useEffect)(() => {
            w.captchaToken && b && null !== c && S(c)
          }, [w.captchaToken, b, c, S]);
          let E = (0, n.useCallback)((e, s, n) => {
            if (b) return;
            x(!0);
            let i = a === e ? 0 : e;
            r(i), p(i), (0, g.Bg)(s, n, i, t), y ? S(i) : w.getCaptchaToken(l.Gf.GAME_VOTE_SUBMIT)
          }, [b, a, y, S, w]);
          return (0, s.jsxs)(f.Provider, {
            value: {
              vote: a,
              handleVoteClick: E,
              isLocked: b
            },
            "data-sentry-element": "GameRatingContext.Provider",
            "data-sentry-component": "GameRatingProvider",
            "data-sentry-source-file": "GameRatingContext.tsx",
            children: [j && (0, s.jsx)(u.D, {
              isVisible: !1,
              iframeRef: w.iframeRef,
              iframeURL: w.iframeURL,
              setIsIframeCaptchaLoaded: w.setIsIframeCaptchaLoaded
            }), e]
          })
        },
        x = () => {
          let e = (0, n.useContext)(f);
          if (void 0 === e) throw Error("useGameRating must be used within a GameRatingProvider");
          return e
        }
    },
    67754: (e, t, a) => {
      "use strict";
      a.d(t, {
        $t: () => b,
        Ez: () => p,
        NH: () => g,
        bW: () => d,
        mQ: () => f
      });
      var r = a(38841),
        s = a(17413),
        n = a(24709),
        l = a(2777),
        i = a(51770),
        o = a(97265);
      let d = {
          development: "DEV",
          production: "PROD",
          staging: "STAGING"
        },
        c = null,
        m = null,
        u = !1,
        h = [];

      function g() {
        u = !0, h.forEach(e => e()), h = []
      }

      function p(e) {
        u = !1, h.forEach(e => e()), h = [], (0, n.Cp)(e, {
          tags: {
            "platform.sdk.load.error": "true",
            "platformad.sdk.load.error.message": e instanceof Error ? e.message : "Unknown error"
          }
        })
      }
      async function f(e, t, a) {
        if (c) return c;
        if (m) return m;
        m = (async () => {
          var r, s;
          let n, o;
          if (await (u ? Promise.resolve() : new Promise(e => {
              h.push(e)
            })), !window.__ArenaApi__?.getInstance) throw Error("Arena SDK script is not available on window.__ArenaApi__");
          let d = await window.__ArenaApi__.getInstance(e, !0);
          return d.initialize(e, !1, t), r = d, s = a, n = (0, l.Bk)(), o = (0, i.Uk)({
            name: "sdk.configure",
            op: "platform.sdk.configure",
            onlyIfParent: !1,
            parentSpan: n ?? void 0,
            attributes: {
              theySellDisplayAdUrl: s?.displayAdUrl,
              theySellVideoAdUrl: s?.videoAdUrl
            }
          }), x({
            theySellUrl: s?.displayAdUrl,
            envKey: "NEXT_PUBLIC_DISPLAY_ADS",
            setAdsUrl: e => r.ads?.setDisplayAdsUrl(e)
          }, o, s), x({
            theySellUrl: s?.videoAdUrl,
            envKey: "NEXT_PUBLIC_VIDEO_ADS",
            setAdsUrl: e => r.ads?.setVideoAdsUrl(e)
          }, o, s), c = d, d
        })();
        try {
          return await m
        } finally {
          m = null
        }
      }

      function b() {
        return c
      }

      function x(e, t, a) {
        let {
          theySellUrl: n,
          envKey: l,
          setAdsUrl: i
        } = e, d = `loading.${l}`;
        if (!n) {
          let e = (0, r.env)(l);
          i(e), t.setAttribute(d, e);
          return
        }
        let c = (0, r.env)(l);
        if (!c) {
          (0, s.t)().error({
            data: {
              baseUrl: c,
              theySell: a
            }
          }, `[configureSdkAfterInit] - ${l} is not set`), t.setAttribute(d, "-");
          return
        }
        let m = (0, o.$)(c, n);
        i(m), t.setAttribute(d, m), (0, s.t)().info({
          data: {
            [l]: n
          }
        }, `[sdk] - Loaded ${l}`)
      }
    },
    72200: (e, t, a) => {
      "use strict";
      a.d(t, {
        e: () => l
      });
      var r = a(95155),
        s = a(26778);
      a(98915);
      var n = a(66236);
      let l = ({
        avatarImage: e = n.sj,
        size: t = 163,
        maxSize: a
      }) => (0, r.jsx)("div", {
        className: "_1i3xwon0",
        "data-sentry-component": "Avatar",
        "data-sentry-source-file": "index.tsx",
        children: (0, r.jsx)(s.default, {
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
    73963: (e, t, a) => {
      "use strict";
      a.d(t, {
        GameFocusWrapper: () => l
      });
      var r = a(95155);
      a(12115);
      var s = a(20139),
        n = a(48976);

      function l({
        children: e
      }) {
        let {
          isFullscreen: t
        } = (0, n.xg)();
        return (0, r.jsx)(s.Ay, {
          disabled: !t,
          returnFocus: !0,
          "data-sentry-element": "FocusLock",
          "data-sentry-component": "GameFocusWrapper",
          "data-sentry-source-file": "gameFocusWrapper.tsx",
          children: e
        })
      }
    },
    75693: e => {
      e.exports = {
        canvasBox: "styles_canvasBox__ySS9Z",
        canvasContainer: "styles_canvasContainer__MTz1C",
        unitContainer: "styles_unitContainer__lPVNZ"
      }
    },
    83175: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        gameInfoSection: () => r
      }), a(32689);
      var r = "stdi1g0"
    },
    85571: (e, t, a) => {
      "use strict";
      a.d(t, {
        S: () => c
      });
      var r = a(95155),
        s = a(12115);
      a(98572);
      var n = a(89714),
        l = a(60069),
        i = a(37231),
        o = a(64864);
      let d = "I like it",
        c = (0, s.memo)(({
          size: e = "medium",
          label: t = "Like this game?",
          secondLineText: a,
          isGamePageBackgroundColorBlack: s
        }) => {
          let c = (() => {
              if (a) return "_1xgf11z6";
              switch (e) {
                case "small":
                  return "_1xgf11z7";
                case "medium":
                default:
                  return "_1xgf11z8";
                case "large":
                  return "_1xgf11z9"
              }
            })(),
            m = (() => {
              if (a) return "_1xgf11za";
              switch (e) {
                case "small":
                  return "_1xgf11zb";
                case "medium":
                default:
                  return "_1xgf11zc";
                case "large":
                  return "_1xgf11zd"
              }
            })(),
            {
              vote: u,
              handleVoteClick: h
            } = (0, o.r)(),
            g = 1 === u ? l.A : n.A;
          return (0, r.jsxs)("div", {
            className: `${{small:"_1xgf11z3 _1xgf11z1 _1xgf11z0",medium:"_1xgf11z4 _1xgf11z1 _1xgf11z0",large:"_1xgf11z5 _1xgf11z1 _1xgf11z0"}[e]} ${c} ${m} ${s&&"_1xgf11z2"}`,
            children: [(0, r.jsx)("div", {
              className: "_1xgf11ze",
              children: t
            }), a && (0, r.jsx)("div", {
              className: "_1xgf11zf",
              children: a
            }), (0, r.jsx)(i.V, {
              content: d,
              children: (0, r.jsx)("button", {
                "aria-label": "I like it",
                className: "_1xgf11zg",
                onClick: () => h(1, o.f.LIKE, "gameRatingWidget"),
                children: (0, r.jsx)(g, {
                  className: "_1xgf11zh"
                })
              })
            }, d)]
          })
        });
      c.displayName = "GameRatingWidget"
    },
    89714: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => l
      });
      var r, s = a(12115);

      function n() {
        return (n = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a)({}).hasOwnProperty.call(a, r) && (e[r] = a[r])
          }
          return e
        }).apply(null, arguments)
      }
      let l = function(e) {
        return s.createElement("svg", n({
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 32 32"
        }, e), r || (r = s.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M9.333 29.333V14.667m-6.666 2.666v9.334a2.667 2.667 0 0 0 2.666 2.666h17.902a4 4 0 0 0 3.953-3.391l1.436-9.334A4 4 0 0 0 24.671 12H20a1.333 1.333 0 0 1-1.333-1.333V5.954a3.29 3.29 0 0 0-3.288-3.287c-.433 0-.826.255-1.002.65L9.685 13.876a1.33 1.33 0 0 1-1.218.792H5.333a2.667 2.667 0 0 0-2.666 2.666"
        })))
      }
    },
    91452: (e, t, a) => {
      "use strict";
      a.d(t, {
        $: () => s
      });
      var r = a(79481);
      let s = (0, r.createServerReference)("40aaec4251a5cd187613c90c720f278b42c0f5a096", r.callServer, void 0, r.findSourceMapURL, "removeFavoriteAction")
    }
  },
  e => {
    e.O(0, [8500, 2135, 6950, 7108, 4778, 2477, 8679, 5337, 6072, 6537, 6700, 6150, 1175, 6614, 1041, 7944, 1761, 8077, 8179, 6241, 6778, 4450, 7767, 4766, 2141, 4910, 8596, 7811, 7352, 2667, 7547, 2579, 5283, 9833, 102, 7514, 8441, 2352, 7358], () => e(e.s = 47980)), _N_E = e.O()
  }
]);