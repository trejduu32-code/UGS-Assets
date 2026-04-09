! function() {
  try {
    var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9b4839f9-4ba3-4f0e-9dbf-b7864cee2ee8", e._sentryDebugIdIdentifier = "sentry-dbid-9b4839f9-4ba3-4f0e-9dbf-b7864cee2ee8")
  } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5283], {
    196: (e, t, a) => {
      a.d(t, {
        R: () => I,
        z: () => S
      });
      var s = a(95155),
        n = a(12115),
        r = a(2417);
      a(74502);
      var l = "mbv8era",
        i = "mbv8er8",
        o = "mbv8er6",
        d = "mbv8er9",
        c = "mbv8er4",
        u = "mbv8erc",
        m = "mbv8ero",
        h = a(26778),
        x = a(70448),
        g = a.n(x),
        v = a(79760),
        b = a(14011),
        w = a(18730),
        p = a(79038),
        f = a(60921),
        k = a(39768),
        y = a(21765),
        L = a(33853),
        E = a(4265),
        C = a(85824),
        j = a(28062),
        N = a(6240),
        _ = a(27882);
      let I = "sidebarToggle",
        S = ({
          zIndexStartVal: e,
          attributes: t,
          isGamePage: a,
          gameSlug: x
        }) => {
          let S;
          (0, b.useRouter)();
          let [M, O] = (0, n.useState)(!0), {
            browser: F
          } = (0, v.i)(), {
            navigateTo: T
          } = (0, N.s)(), {
            openModal: B
          } = (0, C.h)(), R = F?.name === "Firefox", [$, D] = (0, n.useState)(!1), [G, P] = (0, n.useState)(!1), [A, z] = (0, n.useState)(!1), {
            groups: q,
            topbarLinks: U,
            menuActions: H,
            supportAreaId: W
          } = t, K = (0, b.usePathname)();
          K.split("/").slice(2).join("/");
          let V = (0, E.w1)(),
            {
              features: {
                support: X
              }
            } = (0, _.R)(),
            Y = (0, L.d)(),
            [J, Z] = (0, n.useState)(!1);
          (0, n.useEffect)(() => {
            Z(Y.isAtMost(k.LB.sm))
          }, [Y]);
          let Q = H?.find(e => "support" === e.actions),
            ee = e => {
              if (!e) return !1;
              let t = e.toLowerCase();
              return "shop" === t || "plus" === t
            },
            et = (S = [], q.forEach((e, t) => {
              let a = e.sidebar_items?.filter(e => J || !ee(e.link?.label));
              (e.link && (J || !ee(e.link.label)) || a && a.length > 0) && S.push(t)
            }), S),
            ea = et[et.length - 1] ?? -1,
            es = !q.at(-1)?.sidebar_items?.find(e => e.link?.href?.includes("blog")),
            en = (0, f.lm)(),
            er = en === k.LB.xxs || en === k.LB.xs || en === k.LB.sm,
            el = X && Q && W;
          (0, n.useEffect)(() => {
            en !== k.LB.xs && en !== k.LB.sm && O(!0), $ && O($)
          }, [$, en, M]);
          let ei = e => {
              let t = e.filter(([, e]) => !!e);
              return t?.length ? t.reduce((e, [t, a]) => (e[t] = a, e), {}) : {}
            },
            eo = ei([
              ["--icon-color", t.override_color_sidebar_toggle],
              ["--icon-background", t.override_color_sidebar_toggle_background]
            ]),
            ed = ei([
              ["--background-color", t.override_color_sidebar_background],
              ["--divider-color", t.override_color_sidebar_divider]
            ]),
            ec = ei([
              ["--normal-label-color", t.override_color_item_normal_label],
              ["--hover-background-color", t.override_color_item_hover_background],
              ["--hover-border-color", t.override_color_item_hover_border]
            ]),
            eu = {
              subscribe: () => B("subscribe", void 0, "catnav_mobile"),
              shop: () => B("shop", void 0, "catnav_mobile")
            },
            em = async (e, t, a) => {
              let s = new URLSearchParams(t?.href?.split("?")[1] ?? "").get("modal"),
                n = s ? eu[s] : void 0;
              if (n) {
                e.preventDefault(), n();
                return
              }
              t?.target === "_self" ? (e.preventDefault(), (0, y.Be)(t?.label, a, "side"), t.href && T(t.href)) : (0, y.Be)(t?.label, a, "side")
            }, eh = () => {
              let e = document?.getElementById?.(I);
              if (e) {
                let t = () => {
                  e.checked = !1, D(!1)
                };
                R ? setTimeout(() => t(), 200) : t()
              }
            }, ex = () => {};

          function eg() {
            let e = document.activeElement;
            !e?.classList.contains("test-search-bar") && e?.classList.contains("ark-ui-search-active") && e.blur()
          }(0, n.useEffect)(() => ($ && !A && setTimeout(() => document?.querySelector?.(`.${c} .${o}`)?.focus?.(), 200), setTimeout(() => document.addEventListener("scroll", eg), 400), () => {
            document.removeEventListener("scroll", eg)
          }), [$]);
          let ev = (0, n.useCallback)(() => {
              P(!0)
            }, []),
            eb = (0, n.useCallback)(() => {
              P(!1)
            }, []),
            ew = "nav-sidemenu";
          return (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsxs)("div", {
              style: {
                zIndex: e + 2
              },
              className: "mbv8er0",
              "data-testid": "sidebar",
              children: [(0, s.jsx)("button", {
                "aria-label": "Toggle sidebar menu",
                id: I,
                "aria-controls": ew,
                type: "button",
                className: g()("mbv8er1", "mbv8er2"),
                tabIndex: r.Ee.SECOND,
                onClick: e => {
                  z(!0), D(e => !e)
                },
                onMouseUp: () => z(!0),
                onKeyUp: () => z(!1),
                onKeyDown: e => {
                  "Enter" === e.key && (e.preventDefault(), D(e => !e))
                },
                "aria-expanded": $ ? "true" : "false",
                "data-testid": "sidebar-hamburger-icon",
                children: (0, s.jsx)("div", {
                  className: g()("sidebarButton", "mbv8er3"),
                  style: eo,
                  tabIndex: r.Ee.NOINTERACTION,
                  children: er ? (0, s.jsxs)("svg", {
                    width: "40",
                    height: "40",
                    viewBox: "0 0 40 40",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, s.jsx)("path", {
                      d: "M9 19.8848H16.8848M9 12H32.6545M9 27.7697H20.8273",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }), (0, s.jsx)("path", {
                      d: "M33.4688 28L29.6117 23.9808M30.9692 20.704C30.9295 23.2536 28.8505 25.288 26.3255 25.2479C23.8006 25.2078 21.7859 23.1085 21.8256 20.5589C21.8653 18.0093 23.9443 15.9749 26.4693 16.015C28.9942 16.055 31.0089 18.1544 30.9692 20.704Z",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    })]
                  }) : (0, s.jsxs)(s.Fragment, {
                    children: [!$ && (0, s.jsx)("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, s.jsx)("path", {
                        d: "M3 12H21M3 6H21M3 18H21",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })
                    }), $ && (0, s.jsx)("svg", {
                      className: "close",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, s.jsx)("path", {
                        d: "M18 6L6 18M6 6L18 18",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })
                    })]
                  })
                })
              }), (0, s.jsxs)("nav", {
                className: g()("sidebar", c, $ && "mbv8er5"),
                style: ed,
                id: ew,
                children: [U?.length && (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)("div", {
                    className: `mbv8erm ${G?"mbv8ern":""}`,
                    tabIndex: $ ? r.Ee.FIRST : r.Ee.NOINTERACTION,
                    onClick: e => e.stopPropagation(),
                    onFocus: e => e.stopPropagation(),
                    children: (0, s.jsx)(w.v, {
                      className: "search-bar",
                      isFocused: G,
                      onFocus: ev,
                      onBlur: eb,
                      closeMenuCallback: () => D(!1),
                      isGamePage: a,
                      gameSlug: x
                    })
                  }), (0, s.jsx)("div", {
                    className: g()(u, "mbv8erd", U.length >= 5 && "mbv8ere", 4 === U.length && "mbv8erf", 3 === U.length && "mbv8erg"),
                    children: U.map((e, t) => (0, s.jsx)(p.LocalizedLink, {
                      className: g()(o, {
                        mbv8er7: e.isDesktopOnly
                      }),
                      href: e.href || "",
                      onClick: () => (0, y.Bv)(e?.label, t, "side"),
                      target: e.target || "_self",
                      style: ec,
                      tabIndex: $ ? r.Ee.SECOND : r.Ee.NOINTERACTION,
                      children: (0, s.jsx)("span", {
                        className: d,
                        children: e?.label?.substring(0, 19) || ""
                      })
                    }, t))
                  }), (0, s.jsx)("div", {
                    className: g()(l, "mbv8erb", U.length >= 5 && "mbv8erh", 4 === U.length && "mbv8eri", 3 === U.length && "mbv8erj")
                  })]
                }), q.map((e, t) => {
                  let a = e.sidebar_items?.filter(e => J || !ee(e.link?.label) || e.link?.href?.includes("blog")),
                    c = e.link && (J || !ee(e.link.label));
                  return c || a && a.length > 0 ? (0, s.jsxs)(n.Fragment, {
                    children: [(0, s.jsxs)("div", {
                      className: `group sidebarLinks${e.withBackground?" bg":""}`,
                      children: [c && (0, s.jsxs)(p.LocalizedLink, {
                        className: o,
                        href: e.link.href || "#",
                        target: e.link.target || "_self",
                        tabIndex: e.link.href && $ ? r.Ee.OTHER_AUTO : r.Ee.NOINTERACTION,
                        style: ec,
                        onClick: a => em(a, e?.link, t.toString()),
                        "data-testid": `${e.link.label?.toLowerCase()}-link-sidebar`,
                        children: [M && e.icon && (0, s.jsx)(h.default, {
                          width: 24,
                          height: 24,
                          loading: "lazy",
                          className: g()("itemIcon", i),
                          src: e.icon,
                          alt: "Thumbnail",
                          tabIndex: r.Ee.NOINTERACTION
                        }), (0, s.jsx)("span", {
                          className: g()(d, "mbv8erq"),
                          tabIndex: r.Ee.NOINTERACTION,
                          children: e.link.label?.substring(0, 19) || ""
                        })]
                      }), a?.map((e, n) => (0, s.jsxs)(p.LocalizedLink, {
                        className: o,
                        href: e.link?.href || "#",
                        target: e.link?.target || "_self",
                        tabIndex: $ ? r.Ee.SECOND : r.Ee.NOINTERACTION,
                        onClick: a => em(a, e?.link, `${t}-${n}`),
                        "data-testid": `${e.link?.label?.toLowerCase()}-link-sidebar`,
                        "data-order": `${n}/${a.length-1} -> ${t}/${q.length-1}`,
                        onBlur: $ && t === ea && n === a.length - 1 ? eh : ex,
                        style: ec,
                        children: [M && e.icon && (0, s.jsx)(h.default, {
                          width: 24,
                          height: 24,
                          loading: "lazy",
                          className: g()("itemIcon", i),
                          src: e.icon,
                          "aria-hidden": "true",
                          alt: "Thumbnail",
                          tabIndex: r.Ee.NOINTERACTION
                        }), (0, s.jsx)("span", {
                          className: d,
                          tabIndex: r.Ee.NOINTERACTION,
                          children: e.link?.label?.substring(0, 19) || ""
                        })]
                      }, n))]
                    }), t < ea && (0, s.jsx)("div", {
                      className: g()(l, m)
                    })]
                  }, t) : null
                }), el && (0, s.jsx)(s.Fragment, {
                  children: "authenticated" !== V && (0, s.jsxs)(s.Fragment, {
                    children: [es && (0, s.jsx)("div", {
                      className: l
                    }), (0, s.jsx)("div", {
                      className: g()(u, m, !es && "mbv8erp"),
                      children: (0, s.jsxs)(p.LocalizedLink, {
                        className: o,
                        onClick: e => {
                          (0, y.s9)("sideBar"), (0, j.fo)(K, B, e, "sideBar")
                        },
                        "data-testid": "support-link-sidebar",
                        children: [M && H?.find(e => "support" === e.actions)?.actionLink?.icon?.url && (0, s.jsx)(h.default, {
                          width: 24,
                          height: 24,
                          loading: "lazy",
                          className: g()("itemIcon", i),
                          src: H?.find(e => "support" === e.actions)?.actionLink?.icon.url || "",
                          alt: "Thumbnail",
                          tabIndex: r.Ee.NOINTERACTION
                        }), (0, s.jsx)("span", {
                          className: d,
                          children: Q?.button?.label
                        })]
                      })
                    })]
                  })
                })]
              })]
            }), $ && (0, s.jsx)("div", {
              className: "mbv8erk",
              style: {
                zIndex: e,
                opacity: 1
              },
              "aria-hidden": "true",
              onClick: () => D(!1)
            })]
          })
        }
    },
    18730: (e, t, a) => {
      a.d(t, {
        v: () => E
      });
      var s = a(95155),
        n = a(12115),
        r = a(26778),
        l = a(4766),
        i = a(17413),
        o = a(6240),
        d = a(21765),
        c = a(27882),
        u = a(79760);
      let m = ({
          className: e
        }) => (0, s.jsx)("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "data-sentry-element": "svg",
          "data-sentry-component": "CloseIcon",
          "data-sentry-source-file": "CloseIcon.tsx",
          children: (0, s.jsx)("path", {
            d: "M14 2L2 14M2 2L14 14",
            stroke: "currentColor",
            strokeWidth: "3",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "data-sentry-element": "path",
            "data-sentry-source-file": "CloseIcon.tsx"
          })
        }),
        h = () => (0, s.jsx)("svg", {
          width: "32",
          height: "32",
          viewBox: "0 0 32 32",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "data-sentry-element": "svg",
          "data-sentry-component": "SearchIcon",
          "data-sentry-source-file": "SearchIcon.tsx",
          children: (0, s.jsx)("path", {
            d: "M28 28L20.0001 20M22.6667 13.3333C22.6667 18.488 18.488 22.6667 13.3333 22.6667C8.17868 22.6667 4 18.488 4 13.3333C4 8.17868 8.17868 4 13.3333 4C18.488 4 22.6667 8.17868 22.6667 13.3333Z",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "data-sentry-element": "path",
            "data-sentry-source-file": "SearchIcon.tsx"
          })
        });
      var x = a(79038);
      a(99365);
      var g = "_1y5ux1as",
        v = "_1y5ux1av",
        b = "_1y5ux1aj",
        w = a(60921),
        p = a(39768),
        f = a(31969),
        k = a(70448),
        y = a.n(k);
      let L = ({
          isOpen: e,
          loadPopover: t,
          handleOutsideClick: r,
          renderContent: l,
          children: i
        }) => {
          let [o, d] = (0, n.useState)(null), c = (0, n.useMemo)(() => {
            if (!t || !o) return i;
            let {
              root: a,
              anchor: n,
              content: d
            } = o;
            return (0, s.jsxs)(a, {
              open: e,
              children: [(0, s.jsx)(n, {
                className: "_1y5ux1a1",
                children: i
              }), (0, s.jsx)(d, {
                onOpenAutoFocus: e => {
                  e.preventDefault()
                },
                onInteractOutside: r,
                className: "_1y5ux1a9",
                "data-testid": "search-popover",
                children: (0, s.jsx)("div", {
                  className: "_1y5ux1aa",
                  children: l()
                })
              })]
            })
          }, [t, o, e, l, r]);
          return (0, n.useEffect)(() => {
            t && !o && Promise.all([a.e(2141), a.e(6999)]).then(a.bind(a, 6999)).then(({
              Root: e,
              Anchor: t,
              Content: a
            }) => {
              d({
                root: e,
                anchor: t,
                content: a
              })
            })
          }, [t]), c
        },
        E = ({
          isFocused: e,
          onFocus: t,
          onBlur: a,
          className: r,
          closeMenuCallback: b,
          isGamePage: k,
          gameSlug: E
        }) => {
          let {
            navigateTo: j
          } = (0, o.s)(), [N, _] = (0, n.useState)(!1), I = (0, n.useRef)(null), S = (0, n.useRef)(null), {
            isMobile: M,
            isNotPc: O
          } = (0, u.i)();
          M();
          let F = (0, w.lm)(),
            T = F === p.LB.xxs || F === p.LB.xs || F === p.LB.sm,
            {
              query: B,
              setQuery: R,
              results: $,
              isSearching: D,
              isMalicious: G
            } = ((e, t) => {
              let a = (0, i.t)(),
                [s, r] = (0, n.useState)(""),
                [u, m] = (0, n.useState)(null),
                [h, x] = (0, n.useState)(!1),
                [g, v] = (0, n.useState)(!1),
                b = (0, l.d7)(s, 250),
                {
                  currentLocale: w
                } = (0, o.s)(),
                {
                  features: {
                    core: {
                      isTrailingSlashEnabled: p
                    }
                  }
                } = (0, c.R)(),
                f = (0, n.useCallback)(async e => {
                  if (e) try {
                    let t = p ? `/${w}/api/search/?query=${e}` : `/${w}/api/search?query=${e}`,
                      a = await fetch(t, {
                        headers: {
                          Accept: "application/json"
                        }
                      }),
                      s = await a.json();
                    m({
                      games: s.results,
                      categories: s.categories
                    }), x(s.isMalicious)
                  } catch (e) {
                    a.error({
                      data: e
                    }, "[useSearch] - Error running search"), m({
                      games: [],
                      categories: []
                    })
                  } finally {
                    v(!1)
                  } else m({
                    games: [],
                    categories: []
                  })
                }, [b]);
              return (0, n.useEffect)(() => {
                v(!0), b.length > 2 && ((0, d._N)(b, t), f(b))
              }, [b, f, t]), {
                query: s,
                setQuery: r,
                results: u,
                isSearching: g,
                isMalicious: h
              }
            })(0, E),
            P = B.length >= 3,
            A = e => {
              e.preventDefault();
              let t = B.trim();
              t.length >= 1 && (j(`/search/${encodeURIComponent(t)}`), R(""), I?.current?.blur(), a && a(I))
            },
            z = e => {
              R(""), I?.current?.blur(), a && a(I)
            },
            q = (0, n.useCallback)(e => {
              R(""), I.current && I.current.blur(), a && a(e)
            }, [a, R]),
            U = (0, n.useCallback)(e => {
              "Escape" === e.key && (e.preventDefault(), I.current && I.current.blur(), q(e))
            }, [q]);
          (0, n.useEffect)(() => {
            let e = e => U(e);
            return document.addEventListener("keydown", e), () => {
              document.removeEventListener("keydown", e)
            }
          }, [U]);
          let {
            games: H,
            categories: W
          } = (0, n.useMemo)(() => B.length < 3 ? {
            games: [],
            categories: []
          } : {
            games: $ ? $.games.map(e => ({
              name: e.item.meta.name || e.item.name,
              image: e.item.meta.thumbs.graphic_56x56,
              page: "games",
              slug: e.item.slug,
              alias: e.item.meta.alias
            })) : [],
            categories: $?.categories
          }, [$, B]), K = $?.games.length === 0 && $?.categories.length === 0, V = e => {
            document.body.style.position = e ? "initial" : "fixed", document.body.style.overflow = e ? "auto" : "hidden", document.body.style.touchAction = e ? "auto" : "none"
          };
          (0, n.useEffect)(() => {
            if (!e && O() && V(!0), e && (k ? (0, d.er)(E) : (0, d.er)()), !M && e && "u" > typeof document) {
              let e = document?.body?.querySelector("#sidebarToggle");
              e && (e.checked = !1)
            }
            let t = document.querySelector("main");
            return t && (t.style.pointerEvents = e ? "none" : ""), () => {
              t && (t.style.pointerEvents = "")
            }
          }, [e, E, k]);
          let X = {};
          return e && (X.autoFocus = !0), (0, s.jsxs)(s.Fragment, {
            children: [T && P && (0, s.jsx)("div", {
              className: "_1y5ux1aq",
              children: (0, s.jsx)(f.StaticImage, {
                src: "/media/arrow-narrow-left.svg",
                width: 24,
                height: 24,
                alt: "back"
              })
            }), T && !P && (0, s.jsx)("div", {
              className: "_1y5ux1ar",
              onClick: b,
              children: (0, s.jsx)(f.StaticImage, {
                src: "/media/x-close-search.svg",
                width: 32,
                height: 32,
                alt: "close"
              })
            }), (0, s.jsx)("div", {
              ref: S,
              className: "_1y5ux1a0",
              role: "search",
              children: (0, s.jsx)(L, {
                handleOutsideClick: e => {
                  let t = e.target;
                  S.current && !S.current.contains(t) && (R(""), I.current && I.current.blur(), a && a(e))
                },
                isOpen: P && (e || !1),
                renderContent: () => {
                  let t = S.current?.querySelector("[data-radix-popper-content-wrapper]");
                  return ("u" > typeof document && O() && e && t && V(!1), G) ? (0, s.jsx)("div", {
                    id: "results",
                    role: "status",
                    "aria-live": "polite",
                    className: `${v}`,
                    "data-testid": "issue",
                    children: "Oops! There was an issue with the search terms provided. Please review your search terms and try again."
                  }) : D ? (0, s.jsx)("div", {
                    id: "results",
                    role: "status",
                    "aria-live": "polite",
                    className: `${v}`,
                    "data-testid": "loading",
                    children: "Loading..."
                  }) : K ? (0, s.jsx)("div", {
                    id: "results",
                    role: "status",
                    "aria-live": "polite",
                    className: `${v}`,
                    "data-testid": "no-results",
                    children: "Sorry, no results found..."
                  }) : (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("div", {
                      id: "results",
                      role: "listbox",
                      className: "_1y5ux1ac",
                      children: [(0, s.jsx)(C, {
                        items: W,
                        title: "Categories",
                        onClick: z,
                        "data-testid": "categories",
                        "data-sentry-element": "ResultList",
                        "data-sentry-source-file": "index.tsx"
                      }), (0, s.jsx)(C, {
                        items: H,
                        title: "Games",
                        onClick: z,
                        "data-testid": "games",
                        "data-sentry-element": "ResultList",
                        "data-sentry-source-file": "index.tsx"
                      })]
                    }), (0, s.jsxs)("div", {
                      className: "_1y5ux1al",
                      children: [(0, s.jsx)("div", {
                        className: `_1y5ux1au ${g}`
                      }), (0, s.jsxs)(x.LocalizedLink, {
                        className: "_1y5ux1am",
                        href: `/search/${encodeURIComponent(B.trim())}`,
                        onClick: A,
                        "data-testid": "see-all",
                        "data-sentry-element": "LocalizedLink",
                        "data-sentry-source-file": "index.tsx",
                        children: [(0, s.jsx)(f.StaticImage, {
                          src: "/media/search.svg",
                          width: 24,
                          height: 24,
                          alt: "search-icon",
                          "data-sentry-element": "StaticImage",
                          "data-sentry-source-file": "index.tsx"
                        }), (0, s.jsx)("span", {
                          className: "_1y5ux1an",
                          children: "See all"
                        }), (0, s.jsxs)("strong", {
                          className: "_1y5ux1ao",
                          children: ['\xa0"', B.length > 20 ? `${B.substring(0,20)}...` : B, '"\xa0']
                        }), "results"]
                      })]
                    })]
                  })
                },
                loadPopover: N,
                "data-sentry-element": "SearchRender",
                "data-sentry-source-file": "index.tsx",
                children: (0, s.jsxs)("form", {
                  onSubmit: e => {
                    e.preventDefault();
                    let t = B.trim();
                    t.length >= 1 && (j(`/search/${encodeURIComponent(t)}`), R(""), I?.current?.blur(), a && a(I))
                  },
                  className: "relative",
                  children: [(0, s.jsx)("div", {
                    className: y()("_1y5ux1a5", {
                      _1y5ux1a6: e
                    }),
                    "data-testid": "search-icon",
                    children: (0, s.jsx)(h, {
                      "data-sentry-element": "SearchIcon",
                      "data-sentry-source-file": "index.tsx"
                    })
                  }), (0, s.jsx)("input", {
                    ref: I,
                    type: "text",
                    value: B,
                    onChange: e => R(e.target.value),
                    onTouchStart: () => {
                      V(!1), setTimeout(() => {
                        V(!0)
                      }, 400)
                    },
                    onFocus: e => {
                      _(!0), t && t(e)
                    },
                    onBlur: e => {
                      !P && (R(""), a && a(e))
                    },
                    className: y()(r, "_1y5ux1a2", e ? "_1y5ux1a3" : "_1y5ux1a4", e ? "ark-ui-search-active" : "ark-ui-search"),
                    "aria-label": "Search",
                    role: "combobox",
                    "aria-expanded": P,
                    "aria-autocomplete": "list",
                    "aria-controls": "results",
                    "aria-haspopup": "true",
                    placeholder: "Search",
                    "data-testid": "search-input",
                    ...X
                  }), (0, s.jsx)("button", {
                    type: "button",
                    onClick: q,
                    className: `_1y5ux1a7 ${e?"_1y5ux1a8":""}`,
                    "aria-label": "Clear",
                    children: (0, s.jsx)(m, {
                      "data-sentry-element": "CloseIcon",
                      "data-sentry-source-file": "index.tsx"
                    })
                  })]
                })
              })
            })]
          })
        },
        C = ({
          items: e,
          title: t,
          onClick: a
        }) => (0, s.jsxs)("div", {
          className: "_1y5ux1ad",
          "data-testid": `${t?.toLowerCase()}-results`,
          "data-sentry-component": "ResultList",
          "data-sentry-source-file": "index.tsx",
          children: [(0, s.jsx)("h3", {
            className: "_1y5ux1ab",
            children: t
          }), (0, s.jsx)("div", {
            className: "_1y5ux1af",
            children: 0 === e.length ? (0, s.jsx)("div", {
              className: "_1y5ux1ag",
              "data-testid": "no-result-items",
              children: "Sorry, no categories found..."
            }) : e.map((e, t) => (0, s.jsx)(x.LocalizedLink, {
              className: "_1y5ux1ai",
              href: `/${e.page}/${e.alias?e.alias:e.slug}`,
              onClick: a,
              passHref: !0,
              "data-testid": "result-item",
              children: (0, s.jsxs)("div", {
                className: "_1y5ux1ah",
                children: [(0, s.jsx)("div", {
                  className: "_1y5ux1ak",
                  children: e.image ? (0, s.jsx)(r.default, {
                    unoptimized: !0,
                    src: e.image,
                    className: b,
                    width: 56,
                    height: 56,
                    alt: e.name
                  }) : (0, s.jsx)("div", {
                    style: {
                      width: "56px",
                      height: "56px",
                      backgroundColor: "#ddd"
                    },
                    className: b
                  })
                }), (0, s.jsx)("div", {
                  className: "_1y5ux1ap",
                  children: e.name
                })]
              })
            }, t))
          }), (0, s.jsx)("div", {
            className: `${g}`
          })]
        })
    },
    31969: (e, t, a) => {
      a.d(t, {
        StaticImage: () => i
      });
      var s = a(95155),
        n = a(61181),
        r = a(26778),
        l = a(12115);
      let i = e => {
        let {
          domain: t
        } = (0, n.X)(), [a, i] = (0, l.useState)(!1), [o, d] = (0, l.useState)(e.src);
        return (0, l.useEffect)(() => {
          d(e.src)
        }, [e.src]), (0, s.jsx)(r.default, {
          unoptimized: !0,
          ...e,
          alt: e.alt,
          src: o,
          onError: s => {
            a || d(`${t}${e.src}`), i(!0)
          },
          "data-sentry-element": "Image",
          "data-sentry-component": "StaticImage",
          "data-sentry-source-file": "index.tsx"
        })
      }
    },
    33853: (e, t, a) => {
      a.d(t, {
        d: () => i
      });
      var s = a(12115),
        n = a(39768);
      let r = ["xxs", "xs", "sm", "md", "lg", "xl", "2xl"],
        l = (e, t) => r.indexOf(e) - r.indexOf(t),
        i = () => {
          let [e, t] = (0, s.useState)(n.LO["2xl"]), a = e <= n.LO.xxs ? "xxs" : e <= n.LO.xs ? "xs" : e <= n.LO.sm ? "sm" : e <= n.LO.md ? "md" : e <= n.LO.lg ? "lg" : e <= n.LO.xl ? "xl" : "2xl";
          return (0, s.useEffect)(() => {
            let e, a = () => {
              clearTimeout(e), e = setTimeout(() => {
                t(window.innerWidth)
              }, 100)
            };
            return window.addEventListener("resize", a), t(window.innerWidth), () => {
              window.removeEventListener("resize", a), clearTimeout(e)
            }
          }, []), {
            current: a,
            width: e,
            is: e => a === e,
            isBelow: e => 0 > l(a, e),
            isAbove: e => l(a, e) > 0,
            isAtMost: e => 0 >= l(a, e),
            isAtLeast: e => l(a, e) >= 0,
            isBetween: (t, a) => {
              let s = n.LO[t],
                r = n.LO[a];
              return e > s && e <= r
            }
          }
        }
    },
    39768: (e, t, a) => {
      a.d(t, {
        D9: () => r,
        LB: () => n,
        LO: () => l
      });
      var s, n = ((s = {}).xxs = "xxs", s.xs = "xs", s.sm = "sm", s.md = "md", s.lg = "lg", s.xl = "xl", s);
      let r = {
          xxs: "592px",
          xs: "810px",
          sm: "1024px",
          md: "1240px",
          lg: "1366px",
          xl: "1600px",
          "2xl": "1920px"
        },
        l = {
          xxs: 390,
          xs: 592,
          sm: 810,
          md: 1024,
          lg: 1240,
          xl: 1600,
          "2xl": 1920
        }
    },
    48976: (e, t, a) => {
      a.d(t, {
        GameProvider: () => m,
        ws: () => x,
        xg: () => h
      });
      var s = a(95155),
        n = a(80180),
        r = a(58367),
        l = a(12115),
        i = a(60543),
        o = a(63554),
        d = a(93284),
        c = a(21765);
      let u = (0, l.createContext)({
        recommendations: [],
        gameData: null,
        setIsFullscreenFallback: () => {},
        setScrollTab: () => {},
        fullscreenRef: l.createRef(),
        isFullscreen: !1,
        canUseApi: !1,
        openFullscreen: () => {},
        exitFullscreen: () => {},
        isLeaderboardVisible: !1,
        toggleLeaderboardFromGameContext: () => {},
        closeLeaderboard: () => {},
        configGamePage: i.GE,
        gameState: o.m.PENDING,
        updateGameState: e => {},
        onUnlockModalClose: null,
        onUnlock: null,
        setUnlockModalCallbacks: () => {}
      });

      function m({
        children: e,
        gameData: t,
        recommendations: a,
        configGamePage: i,
        initialGameState: m = o.m.PENDING
      }) {
        let [h, x] = (0, l.useState)(), [g, v] = (0, l.useState)(!1), [b, w] = (0, l.useState)(m), [p, f] = (0, l.useState)(null), [k, y] = (0, l.useState)(null), L = (0, l.useCallback)(e => {
          x(e);
          let t = e && document.getElementById(n.W);
          t && t.scrollIntoView({
            behavior: "smooth"
          })
        }, []), {
          fullscreenRef: E,
          isFullscreen: C,
          canUseApi: j,
          openFullscreen: N,
          exitFullscreen: _,
          setIsFullscreen: I
        } = (0, r.H)(), S = (0, l.useCallback)(e => {
          f(() => e.onClose || null), y(() => e.onUnlock || null)
        }, []), M = (0, l.useCallback)(e => {
          I(e)
        }, [I]), O = (0, l.useCallback)(() => {
          v(e => !e)
        }, []), F = (0, l.useCallback)(() => {
          v(!1)
        }, []), T = (0, l.useCallback)(e => {
          if (b !== o.m.ADBLOCK || e !== o.m.ADBLOCK) {
            if ((b === o.m.PREROLL || b === o.m.PREROLL_PLAYING) && e === o.m.GAME) {
              let e = Number(d.sj.getItem(d.sJ.gamePlayCount));
              d.sj.setItem(d.sJ.gamePlayCount, String(e + 1))
            }
            w(e), (0, c.wX)(e)
          }
        }, [b]);
        return (0, s.jsx)(u.Provider, {
          value: {
            setIsFullscreenFallback: M,
            scrollTab: h,
            setScrollTab: L,
            gameData: t,
            recommendations: a,
            fullscreenRef: E,
            isFullscreen: C,
            canUseApi: j,
            openFullscreen: N,
            exitFullscreen: _,
            isLeaderboardVisible: g,
            toggleLeaderboardFromGameContext: O,
            closeLeaderboard: F,
            configGamePage: i,
            gameState: b,
            updateGameState: T,
            onUnlockModalClose: p,
            onUnlock: k,
            setUnlockModalCallbacks: S
          },
          "data-sentry-element": "GameContext.Provider",
          "data-sentry-component": "GameProvider",
          "data-sentry-source-file": "GameContext.tsx",
          children: e
        })
      }

      function h() {
        let e = (0, l.useContext)(u);
        if (!e) throw Error("useGameContext must be used within a <GameProvider>");
        return e
      }

      function x() {
        let e = (0, l.useContext)(u);
        if (!e) throw Error("useGameRecommendations must be used within a <GameProvider>");
        return e.recommendations
      }
    },
    58367: (e, t, a) => {
      a.d(t, {
        H: () => r
      });
      var s = a(79760),
        n = a(12115);

      function r() {
        let e = (0, n.useRef)(null),
          [t, a] = (0, n.useState)(!1),
          [r, l] = (0, n.useState)(!1),
          {
            isIOS: i
          } = (0, s.i)(),
          o = i();
        (0, n.useEffect)(() => {
          let e = document.createElement("div");
          l(!!(!o && (e.requestFullscreen || e.mozRequestFullScreen || e.webkitRequestFullscreen || e.msRequestFullscreen)))
        }, []);
        let d = (0, n.useCallback)(() => {
            if (!e.current) return;
            let t = e.current;
            t.requestFullscreen ? t.requestFullscreen({
              navigationUI: "show"
            }) : t.mozRequestFullScreen ? t.mozRequestFullScreen({
              navigationUI: "show"
            }) : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen()
          }, []),
          c = (0, n.useCallback)(() => {
            document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()
          }, []);
        return (0, n.useEffect)(() => {
          let e = () => {
            document.fullscreenElement || document.webkitFullscreenElement ? a(!0) : a(!1)
          };
          return document.addEventListener("fullscreenchange", e), document.addEventListener("webkitfullscreenchange", e), document.addEventListener("mozfullscreenchange", e), document.addEventListener("msfullscreenchange", e), () => {
            document.removeEventListener("fullscreenchange", e), document.removeEventListener("webkitfullscreenchange", e), document.removeEventListener("mozfullscreenchange", e), document.removeEventListener("msfullscreenchange", e)
          }
        }, []), {
          fullscreenRef: e,
          isFullscreen: t,
          canUseApi: r,
          openFullscreen: d,
          exitFullscreen: c,
          setIsFullscreen: a
        }
      }
    },
    60543: (e, t, a) => {
      a.d(t, {
        GE: () => s,
        KV: () => r,
        d9: () => n
      });
      let s = {
          id: 0,
          adsFree: !1,
          openWeb: !0,
          bottomRail: !0,
          leftRail: !0,
          rightRail: !0,
          preroll: !0,
          adPodding: !0,
          seo: null,
          gameStartConfig: null,
          gameEndConfig: null,
          recommendedSectionCopy: null,
          shouldUseGameTheme: !1,
          mobileInGameAds: null,
          backgroundImage: null,
          extendedBackground: null,
          standardBackground: null,
          extendedGradientColorA: null,
          extendedGradientColorB: null,
          leaderboard: null,
          exitFullscreenBarPosition: null,
          prerollConfiguration: null,
          adTemplates: []
        },
        n = e => e?.gameEndConfig?.finalScoreText?.slice(0, 16) ?? "Final score",
        r = e => e?.gameEndConfig?.message?.slice(0, 104) ?? "You broke your own high score, way to go!"
    },
    60921: (e, t, a) => {
      a.d(t, {
        GA: () => g,
        Gy: () => v,
        MM: () => x,
        lm: () => h
      });
      var s, n = a(12115),
        r = a(4766),
        l = a(83226),
        i = a(39768);
      let o = `(max-width: ${i.D9.xxs})`,
        d = `(min-width: ${i.D9.xxs}) and (max-width: ${i.D9.xs})`,
        c = `(min-width: ${i.D9.xs}) and (max-width: ${i.D9.sm})`,
        u = `(min-width: ${i.D9.sm}) and (max-width: ${i.D9.md})`,
        m = `(min-width: ${i.D9.md})`,
        h = () => {
          let [e, t] = (0, n.useState)(() => window.matchMedia(o).matches ? i.LB.xxs : window.matchMedia(d).matches ? i.LB.xs : window.matchMedia(c).matches ? i.LB.sm : window.matchMedia(u).matches ? i.LB.md : window.matchMedia(m).matches ? i.LB.lg : null), a = (0, r.d7)(e, 100), s = (0, n.useCallback)(() => {
            let e = window.matchMedia(o),
              a = window.matchMedia(d),
              s = window.matchMedia(c),
              n = window.matchMedia(u),
              r = window.matchMedia(m);
            return e.matches ? t(i.LB.xxs) : a.matches ? t(i.LB.xs) : s.matches ? t(i.LB.sm) : n.matches ? t(i.LB.md) : r.matches ? t(i.LB.lg) : void 0
          }, []);
          return (0, n.useEffect)(() => {
            if (l.S) return;
            let e = window.matchMedia(o),
              t = window.matchMedia(d),
              a = window.matchMedia(c),
              n = window.matchMedia(u),
              r = window.matchMedia(m);
            return e.addEventListener("change", s), t.addEventListener("change", s), a.addEventListener("change", s), n.addEventListener("change", s), r.addEventListener("change", s), s(), () => {
              e.removeEventListener("change", s), t.removeEventListener("change", s), a.removeEventListener("change", s), n.removeEventListener("change", s), r.removeEventListener("change", s)
            }
          }, [s]), a
        };

      function x() {
        let [e, t] = (0, n.useState)(() => window.matchMedia("(orientation: portrait)").matches ? "portrait" : "landscape"), a = (0, r.d7)(e, 100), s = (0, n.useCallback)(e => {
          t(e.matches ? "portrait" : "landscape")
        }, []);
        return (0, n.useEffect)(() => {
          if (l.S) return;
          let e = window.matchMedia("(orientation: portrait)");
          return e.addEventListener("change", s), t(e.matches ? "portrait" : "landscape"), () => {
            e.removeEventListener("change", s)
          }
        }, [s]), a
      }
      var g = ((s = {}).sm = "sm", s.md = "md", s.lg = "lg", s.xl = "xl", s.xxl = "xxl", s);
      let v = () => {
        let [e, t] = (0, n.useState)(() => window.matchMedia("(max-width: 359px)").matches ? "sm" : window.matchMedia("(min-width: 360px) and (max-width: 889px)").matches ? "md" : window.matchMedia("(min-width: 890px) and (max-width: 1023px)").matches ? "lg" : window.matchMedia("(min-width: 1024px) and (max-width: 1239px)").matches ? "xl" : "xxl"), a = (0, r.d7)(e, 100), s = (0, n.useCallback)(() => {
          let e = window.matchMedia("(max-width: 359px)"),
            a = window.matchMedia("(min-width: 360px) and (max-width: 889px)"),
            s = window.matchMedia("(min-width: 890px) and (max-width: 1023px)"),
            n = window.matchMedia("(min-width: 1024px) and (max-width: 1239px)"),
            r = window.matchMedia("(min-width: 1240px)");
          return e.matches ? t("sm") : a.matches ? t("md") : s.matches ? t("lg") : n.matches ? t("xl") : r.matches ? t("xxl") : void 0
        }, []);
        return (0, n.useEffect)(() => {
          if (l.S) return;
          let e = window.matchMedia("(max-width: 359px)"),
            t = window.matchMedia("(min-width: 360px) and (max-width: 889px)"),
            a = window.matchMedia("(min-width: 890px) and (max-width: 1023px)"),
            n = window.matchMedia("(min-width: 1024px) and (max-width: 1239px)"),
            r = window.matchMedia("(min-width: 1240px)");
          return e.addEventListener("change", s), t.addEventListener("change", s), a.addEventListener("change", s), n.addEventListener("change", s), r.addEventListener("change", s), s(), () => {
            e.removeEventListener("change", s), t.removeEventListener("change", s), a.removeEventListener("change", s), n.removeEventListener("change", s), r.removeEventListener("change", s)
          }
        }, [s]), a
      }
    },
    61181: (e, t, a) => {
      a.d(t, {
        GlobalDataProvider: () => l,
        X: () => i
      });
      var s = a(95155),
        n = a(12115);
      let r = (0, n.createContext)(void 0),
        l = ({
          domain: e,
          children: t
        }) => (0, s.jsx)(r.Provider, {
          value: {
            domain: e
          },
          "data-sentry-element": "GlobalDataContext.Provider",
          "data-sentry-component": "GlobalDataProvider",
          "data-sentry-source-file": "GlobalDataContext.tsx",
          children: t
        }),
        i = () => {
          let e = (0, n.useContext)(r);
          if (void 0 === e) throw Error("useGlobalData must be used within a GlobalDataProvider");
          return e
        }
    },
    80180: (e, t, a) => {
      a.d(t, {
        Q: () => n,
        W: () => r
      });
      var s, n = ((s = {}).COMMENTS = "Comments", s.HOW_TO_PLAY = "How to Play", s.ABOUT = "About", s);
      let r = "game-page-tabs"
    }
  }
]);