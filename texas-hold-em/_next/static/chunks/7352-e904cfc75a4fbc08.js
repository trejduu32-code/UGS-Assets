! function() {
  try {
    var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fdd4e2d3-241f-4f64-abeb-ac8dcb5eb067", e._sentryDebugIdIdentifier = "sentry-dbid-fdd4e2d3-241f-4f64-abeb-ac8dcb5eb067")
  } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7352], {
    1247: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = {
        isRequestAPICallableInsideAfter: function() {
          return c
        },
        throwForSearchParamsAccessInUseCache: function() {
          return u
        },
        throwWithStaticGenerationBailoutErrorWithDynamicError: function() {
          return s
        }
      };
      for (var n in i) Object.defineProperty(t, n, {
        enumerable: !0,
        get: i[n]
      });
      let o = r(35749),
        a = r(43747);

      function s(e, t) {
        throw Object.defineProperty(new o.StaticGenBailoutError(`Route ${e} with \`dynamic = "error"\` couldn't be rendered statically because it used ${t}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
          value: "E543",
          enumerable: !1,
          configurable: !0
        })
      }

      function u(e, t) {
        let r = Object.defineProperty(Error(`Route ${e.route} used \`searchParams\` inside "use cache". Accessing dynamic request data inside a cache scope is not supported. If you need some search params inside a cached function await \`searchParams\` outside of the cached function and pass only the required search params as arguments to the cached function. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
          value: "E842",
          enumerable: !1,
          configurable: !0
        });
        throw Error.captureStackTrace(r, t), e.invalidDynamicUsageError ??= r, r
      }

      function c() {
        let e = a.afterTaskAsyncStorage.getStore();
        return (null == e ? void 0 : e.rootTaskSpawnPhase) === "action"
      }
    },
    4906: (e, t, r) => {
      "use strict";
      r(19565)
    },
    18006: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i, n = {
        isBot: function() {
          return s
        },
        userAgent: function() {
          return c
        },
        userAgentFromString: function() {
          return u
        }
      };
      for (var o in n) Object.defineProperty(t, o, {
        enumerable: !0,
        get: n[o]
      });
      let a = (i = r(70823)) && i.__esModule ? i : {
        default: i
      };

      function s(e) {
        return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(e)
      }

      function u(e) {
        return {
          ...(0, a.default)(e),
          isBot: void 0 !== e && s(e)
        }
      }

      function c({
        headers: e
      }) {
        return u(e.get("user-agent") || void 0)
      }
    },
    19565: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = {
        ImageResponse: function() {
          return o.ImageResponse
        },
        NextRequest: function() {
          return a.NextRequest
        },
        NextResponse: function() {
          return s.NextResponse
        },
        URLPattern: function() {
          return c.URLPattern
        },
        after: function() {
          return d.after
        },
        connection: function() {
          return l.connection
        },
        userAgent: function() {
          return u.userAgent
        },
        userAgentFromString: function() {
          return u.userAgentFromString
        }
      };
      for (var n in i) Object.defineProperty(t, n, {
        enumerable: !0,
        get: i[n]
      });
      let o = r(31422),
        a = r(96422),
        s = r(41450),
        u = r(18006),
        c = r(43829),
        d = r(36785),
        l = r(74790)
    },
    31141: e => {
      "use strict";
      e.exports = ["chrome 111", "edge 111", "firefox 111", "safari 16.4"]
    },
    31422: (e, t) => {
      "use strict";

      function r() {
        throw Object.defineProperty(Error('ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead'), "__NEXT_ERROR_CODE", {
          value: "E183",
          enumerable: !1,
          configurable: !0
        })
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "ImageResponse", {
        enumerable: !0,
        get: function() {
          return r
        }
      })
    },
    34707: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "after", {
        enumerable: !0,
        get: function() {
          return n
        }
      });
      let i = r(12756);

      function n(e) {
        let t = i.workAsyncStorage.getStore();
        if (!t) throw Object.defineProperty(Error("`after` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context"), "__NEXT_ERROR_CODE", {
          value: "E468",
          enumerable: !1,
          configurable: !0
        });
        let {
          afterContext: r
        } = t;
        return r.after(e)
      }
    },
    36785: (e, t, r) => {
      "use strict";
      var i, n;
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), i = r(34707), n = t, Object.keys(i).forEach(function(e) {
        "default" === e || Object.prototype.hasOwnProperty.call(n, e) || Object.defineProperty(n, e, {
          enumerable: !0,
          get: function() {
            return i[e]
          }
        })
      })
    },
    41450: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "NextResponse", {
        enumerable: !0,
        get: function() {
          return l
        }
      });
      let i = r(32456),
        n = r(67738),
        o = r(1996),
        a = r(78751),
        s = r(32456),
        u = Symbol("internal response"),
        c = new Set([301, 302, 303, 307, 308]);

      function d(e, t) {
        var r;
        if (null == e || null == (r = e.request) ? void 0 : r.headers) {
          if (!(e.request.headers instanceof Headers)) throw Object.defineProperty(Error("request.headers must be an instance of Headers"), "__NEXT_ERROR_CODE", {
            value: "E119",
            enumerable: !1,
            configurable: !0
          });
          let r = [];
          for (let [i, n] of e.request.headers) t.set("x-middleware-request-" + i, n), r.push(i);
          t.set("x-middleware-override-headers", r.join(","))
        }
      }
      class l extends Response {
        constructor(e, t = {}) {
          super(e, t);
          const r = this.headers,
            c = new Proxy(new s.ResponseCookies(r), {
              get(e, n, o) {
                switch (n) {
                  case "delete":
                  case "set":
                    return (...o) => {
                      let a = Reflect.apply(e[n], e, o),
                        u = new Headers(r);
                      return a instanceof s.ResponseCookies && r.set("x-middleware-set-cookie", a.getAll().map(e => (0, i.stringifyCookie)(e)).join(",")), d(t, u), a
                    };
                  default:
                    return a.ReflectAdapter.get(e, n, o)
                }
              }
            });
          this[u] = {
            cookies: c,
            url: t.url ? new n.NextURL(t.url, {
              headers: (0, o.toNodeOutgoingHttpHeaders)(r),
              nextConfig: t.nextConfig
            }) : void 0
          }
        } [Symbol.for("edge-runtime.inspect.custom")]() {
          return {
            cookies: this.cookies,
            url: this.url,
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
          }
        }
        get cookies() {
          return this[u].cookies
        }
        static json(e, t) {
          let r = Response.json(e, t);
          return new l(r.body, r)
        }
        static redirect(e, t) {
          let r = "number" == typeof t ? t : (null == t ? void 0 : t.status) ?? 307;
          if (!c.has(r)) throw Object.defineProperty(RangeError('Failed to execute "redirect" on "response": Invalid status code'), "__NEXT_ERROR_CODE", {
            value: "E529",
            enumerable: !1,
            configurable: !0
          });
          let i = "object" == typeof t ? t : {},
            n = new Headers(null == i ? void 0 : i.headers);
          return n.set("Location", (0, o.validateURL)(e)), new l(null, {
            ...i,
            headers: n,
            status: r
          })
        }
        static rewrite(e, t) {
          let r = new Headers(null == t ? void 0 : t.headers);
          return r.set("x-middleware-rewrite", (0, o.validateURL)(e)), d(t, r), new l(null, {
            ...t,
            headers: r
          })
        }
        static next(e) {
          let t = new Headers(null == e ? void 0 : e.headers);
          return t.set("x-middleware-next", "1"), d(e, t), new l(null, {
            ...e,
            headers: t
          })
        }
      }
    },
    43747: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "afterTaskAsyncStorage", {
        enumerable: !0,
        get: function() {
          return i.afterTaskAsyncStorageInstance
        }
      });
      let i = r(73602)
    },
    43829: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "URLPattern", {
        enumerable: !0,
        get: function() {
          return r
        }
      });
      let r = "u" < typeof URLPattern ? void 0 : URLPattern
    },
    51770: (e, t, r) => {
      "use strict";
      r.d(t, {
        Uk: () => c
      });
      var i = r(86470),
        n = r(15728),
        o = r(45871),
        a = r(39645),
        s = r(64979),
        u = r(87358);

      function c(e) {
        let t;
        return (t = u.env.NEXT_PHASE === s.PHASE_PRODUCTION_BUILD, t || 0) ? new n.w({
          traceId: "00000000000000000000000000000000",
          spanId: "0000000000000000"
        }) : (0, o.Uk)(e)
      }
    },
    64979: (e, t, r) => {
      "use strict";
      var i, n = r(87358);
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = {
        APP_CLIENT_INTERNALS: function() {
          return er
        },
        APP_PATHS_MANIFEST: function() {
          return R
        },
        APP_PATH_ROUTES_MANIFEST: function() {
          return v
        },
        AdapterOutputType: function() {
          return l
        },
        BARREL_OPTIMIZATION_PREFIX: function() {
          return V
        },
        BLOCKED_PAGES: function() {
          return G
        },
        BUILD_ID_FILE: function() {
          return B
        },
        BUILD_MANIFEST: function() {
          return T
        },
        CLIENT_PUBLIC_FILES_PATH: function() {
          return W
        },
        CLIENT_REFERENCE_MANIFEST: function() {
          return Y
        },
        CLIENT_STATIC_FILES_PATH: function() {
          return H
        },
        CLIENT_STATIC_FILES_RUNTIME_MAIN: function() {
          return ee
        },
        CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: function() {
          return et
        },
        CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: function() {
          return eo
        },
        CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: function() {
          return ea
        },
        CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: function() {
          return ei
        },
        CLIENT_STATIC_FILES_RUNTIME_WEBPACK: function() {
          return en
        },
        COMPILER_INDEXES: function() {
          return d
        },
        COMPILER_NAMES: function() {
          return c
        },
        CONFIG_FILES: function() {
          return q
        },
        DEFAULT_RUNTIME_WEBPACK: function() {
          return es
        },
        DEFAULT_SANS_SERIF_FONT: function() {
          return eb
        },
        DEFAULT_SERIF_FONT: function() {
          return el
        },
        DEV_CLIENT_MIDDLEWARE_MANIFEST: function() {
          return M
        },
        DEV_CLIENT_PAGES_MANIFEST: function() {
          return C
        },
        DYNAMIC_CSS_MANIFEST: function() {
          return J
        },
        EDGE_RUNTIME_WEBPACK: function() {
          return eu
        },
        EDGE_UNSUPPORTED_NODE_APIS: function() {
          return eE
        },
        EXPORT_DETAIL: function() {
          return N
        },
        EXPORT_MARKER: function() {
          return A
        },
        FUNCTIONS_CONFIG_MANIFEST: function() {
          return S
        },
        IMAGES_MANIFEST: function() {
          return x
        },
        INTERCEPTION_ROUTE_REWRITE_MANIFEST: function() {
          return Q
        },
        MIDDLEWARE_BUILD_MANIFEST: function() {
          return K
        },
        MIDDLEWARE_MANIFEST: function() {
          return D
        },
        MIDDLEWARE_REACT_LOADABLE_MANIFEST: function() {
          return Z
        },
        MODERN_BROWSERSLIST_TARGET: function() {
          return s.default
        },
        NEXT_BUILTIN_DOCUMENT: function() {
          return X
        },
        NEXT_FONT_MANIFEST: function() {
          return y
        },
        PAGES_MANIFEST: function() {
          return h
        },
        PHASE_ANALYZE: function() {
          return f
        },
        PHASE_DEVELOPMENT_SERVER: function() {
          return _
        },
        PHASE_EXPORT: function() {
          return b
        },
        PHASE_INFO: function() {
          return m
        },
        PHASE_PRODUCTION_BUILD: function() {
          return p
        },
        PHASE_PRODUCTION_SERVER: function() {
          return w
        },
        PHASE_TEST: function() {
          return E
        },
        PRERENDER_MANIFEST: function() {
          return I
        },
        REACT_LOADABLE_MANIFEST: function() {
          return j
        },
        ROUTES_MANIFEST: function() {
          return P
        },
        RSC_MODULE_TYPES: function() {
          return e_
        },
        SERVER_DIRECTORY: function() {
          return F
        },
        SERVER_FILES_MANIFEST: function() {
          return k
        },
        SERVER_PROPS_ID: function() {
          return ed
        },
        SERVER_REFERENCE_MANIFEST: function() {
          return $
        },
        STATIC_PROPS_ID: function() {
          return ec
        },
        STATIC_STATUS_PAGES: function() {
          return ef
        },
        STRING_LITERAL_DROP_BUNDLE: function() {
          return z
        },
        SUBRESOURCE_INTEGRITY_MANIFEST: function() {
          return O
        },
        SYSTEM_ENTRYPOINTS: function() {
          return em
        },
        TRACE_OUTPUT_VERSION: function() {
          return ep
        },
        TURBOPACK_CLIENT_BUILD_MANIFEST: function() {
          return U
        },
        TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST: function() {
          return L
        },
        TURBO_TRACE_DEFAULT_MEMORY_LIMIT: function() {
          return ew
        },
        UNDERSCORE_GLOBAL_ERROR_ROUTE: function() {
          return u.UNDERSCORE_GLOBAL_ERROR_ROUTE
        },
        UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY: function() {
          return u.UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY
        },
        UNDERSCORE_NOT_FOUND_ROUTE: function() {
          return u.UNDERSCORE_NOT_FOUND_ROUTE
        },
        UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: function() {
          return u.UNDERSCORE_NOT_FOUND_ROUTE_ENTRY
        },
        WEBPACK_STATS: function() {
          return g
        }
      };
      for (var a in o) Object.defineProperty(t, a, {
        enumerable: !0,
        get: o[a]
      });
      let s = r(28729)._(r(31141)),
        u = r(78806),
        c = {
          client: "client",
          server: "server",
          edgeServer: "edge-server"
        },
        d = {
          [c.client]: 0,
          [c.server]: 1,
          [c.edgeServer]: 2
        };
      var l = ((i = {}).PAGES = "PAGES", i.PAGES_API = "PAGES_API", i.APP_PAGE = "APP_PAGE", i.APP_ROUTE = "APP_ROUTE", i.PRERENDER = "PRERENDER", i.STATIC_FILE = "STATIC_FILE", i.MIDDLEWARE = "MIDDLEWARE", i);
      let b = "phase-export",
        f = "phase-analyze",
        p = "phase-production-build",
        w = "phase-production-server",
        _ = "phase-development-server",
        E = "phase-test",
        m = "phase-info",
        h = "pages-manifest.json",
        g = "webpack-stats.json",
        R = "app-paths-manifest.json",
        v = "app-path-routes-manifest.json",
        T = "build-manifest.json",
        S = "functions-config-manifest.json",
        O = "subresource-integrity-manifest",
        y = "next-font-manifest",
        A = "export-marker.json",
        N = "export-detail.json",
        I = "prerender-manifest.json",
        P = "routes-manifest.json",
        x = "images-manifest.json",
        k = "required-server-files",
        C = "_devPagesManifest.json",
        D = "middleware-manifest.json",
        L = "_clientMiddlewareManifest.json",
        U = "client-build-manifest.json",
        M = "_devMiddlewareManifest.json",
        j = "react-loadable-manifest.json",
        F = "server",
        q = ["next.config.js", "next.config.mjs", "next.config.ts", ...n?.features?.typescript ? ["next.config.mts"] : []],
        B = "BUILD_ID",
        G = ["/_document", "/_app", "/_error"],
        W = "public",
        H = "static",
        z = "__NEXT_DROP_CLIENT_FILE__",
        X = "__NEXT_BUILTIN_DOCUMENT__",
        V = "__barrel_optimize__",
        Y = "client-reference-manifest",
        $ = "server-reference-manifest",
        K = "middleware-build-manifest",
        Z = "middleware-react-loadable-manifest",
        Q = "interception-route-rewrite-manifest",
        J = "dynamic-css-manifest",
        ee = "main",
        et = `${ee}-app`,
        er = "app-pages-internals",
        ei = "react-refresh",
        en = "webpack",
        eo = "polyfills",
        ea = Symbol(eo),
        es = "webpack-runtime",
        eu = "edge-runtime-webpack",
        ec = "__N_SSG",
        ed = "__N_SSP",
        el = {
          name: "Times New Roman",
          xAvgCharWidth: 821,
          azAvgWidth: 854.3953488372093,
          unitsPerEm: 2048
        },
        eb = {
          name: "Arial",
          xAvgCharWidth: 904,
          azAvgWidth: 934.5116279069767,
          unitsPerEm: 2048
        },
        ef = ["/500"],
        ep = 1,
        ew = 6e3,
        e_ = {
          client: "client",
          server: "server"
        },
        eE = ["clearImmediate", "setImmediate", "BroadcastChannel", "ByteLengthQueuingStrategy", "CompressionStream", "CountQueuingStrategy", "DecompressionStream", "DomException", "MessageChannel", "MessageEvent", "MessagePort", "ReadableByteStreamController", "ReadableStreamBYOBRequest", "ReadableStreamDefaultController", "TransformStreamDefaultController", "WritableStreamDefaultController"],
        em = new Set([ee, ei, et]);
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    66151: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = {
        bindSnapshot: function() {
          return u
        },
        createAsyncLocalStorage: function() {
          return s
        },
        createSnapshot: function() {
          return c
        }
      };
      for (var i in r) Object.defineProperty(t, i, {
        enumerable: !0,
        get: r[i]
      });
      let n = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
        value: "E504",
        enumerable: !1,
        configurable: !0
      });
      class o {
        disable() {
          throw n
        }
        getStore() {}
        run() {
          throw n
        }
        exit() {
          throw n
        }
        enterWith() {
          throw n
        }
        static bind(e) {
          return e
        }
      }
      let a = "u" > typeof globalThis && globalThis.AsyncLocalStorage;

      function s() {
        return a ? new a : new o
      }

      function u(e) {
        return a ? a.bind(e) : o.bind(e)
      }

      function c() {
        return a ? a.snapshot() : function(e, ...t) {
          return e(...t)
        }
      }
    },
    70823: (e, t, r) => {
      var i, n = {
          226: function(n, o) {
            ! function(a, s) {
              "use strict";
              var u = "function",
                c = "undefined",
                d = "object",
                l = "string",
                b = "major",
                f = "model",
                p = "name",
                w = "type",
                _ = "vendor",
                E = "version",
                m = "architecture",
                h = "console",
                g = "mobile",
                R = "tablet",
                v = "smarttv",
                T = "wearable",
                S = "embedded",
                O = "Amazon",
                y = "Apple",
                A = "ASUS",
                N = "BlackBerry",
                I = "Browser",
                P = "Chrome",
                x = "Firefox",
                k = "Google",
                C = "Huawei",
                D = "Microsoft",
                L = "Motorola",
                U = "Opera",
                M = "Samsung",
                j = "Sharp",
                F = "Sony",
                q = "Xiaomi",
                B = "Zebra",
                G = "Facebook",
                W = "Chromium OS",
                H = "Mac OS",
                z = function(e, t) {
                  var r = {};
                  for (var i in e) t[i] && t[i].length % 2 == 0 ? r[i] = t[i].concat(e[i]) : r[i] = e[i];
                  return r
                },
                X = function(e) {
                  for (var t = {}, r = 0; r < e.length; r++) t[e[r].toUpperCase()] = e[r];
                  return t
                },
                V = function(e, t) {
                  return typeof e === l && -1 !== Y(t).indexOf(Y(e))
                },
                Y = function(e) {
                  return e.toLowerCase()
                },
                $ = function(e, t) {
                  if (typeof e === l) return e = e.replace(/^\s\s*/, ""), typeof t === c ? e : e.substring(0, 350)
                },
                K = function(e, t) {
                  for (var r, i, n, o, a, s, c = 0; c < t.length && !a;) {
                    var l = t[c],
                      b = t[c + 1];
                    for (r = i = 0; r < l.length && !a && l[r];)
                      if (a = l[r++].exec(e))
                        for (n = 0; n < b.length; n++) s = a[++i], typeof(o = b[n]) === d && o.length > 0 ? 2 === o.length ? typeof o[1] == u ? this[o[0]] = o[1].call(this, s) : this[o[0]] = o[1] : 3 === o.length ? typeof o[1] !== u || o[1].exec && o[1].test ? this[o[0]] = s ? s.replace(o[1], o[2]) : void 0 : this[o[0]] = s ? o[1].call(this, s, o[2]) : void 0 : 4 === o.length && (this[o[0]] = s ? o[3].call(this, s.replace(o[1], o[2])) : void 0) : this[o] = s || void 0;
                    c += 2
                  }
                },
                Z = function(e, t) {
                  for (var r in t)
                    if (typeof t[r] === d && t[r].length > 0) {
                      for (var i = 0; i < t[r].length; i++)
                        if (V(t[r][i], e)) return "?" === r ? void 0 : r
                    } else if (V(t[r], e)) return "?" === r ? void 0 : r;
                  return e
                },
                Q = {
                  ME: "4.90",
                  "NT 3.11": "NT3.51",
                  "NT 4.0": "NT4.0",
                  2e3: "NT 5.0",
                  XP: ["NT 5.1", "NT 5.2"],
                  Vista: "NT 6.0",
                  7: "NT 6.1",
                  8: "NT 6.2",
                  8.1: "NT 6.3",
                  10: ["NT 6.4", "NT 10.0"],
                  RT: "ARM"
                },
                J = {
                  browser: [
                    [/\b(?:crmo|crios)\/([\w\.]+)/i],
                    [E, [p, "Chrome"]],
                    [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                    [E, [p, "Edge"]],
                    [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                    [p, E],
                    [/opios[\/ ]+([\w\.]+)/i],
                    [E, [p, U + " Mini"]],
                    [/\bopr\/([\w\.]+)/i],
                    [E, [p, U]],
                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                    [p, E],
                    [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                    [E, [p, "UC" + I]],
                    [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                    [E, [p, "WeChat(Win) Desktop"]],
                    [/micromessenger\/([\w\.]+)/i],
                    [E, [p, "WeChat"]],
                    [/konqueror\/([\w\.]+)/i],
                    [E, [p, "Konqueror"]],
                    [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                    [E, [p, "IE"]],
                    [/ya(?:search)?browser\/([\w\.]+)/i],
                    [E, [p, "Yandex"]],
                    [/(avast|avg)\/([\w\.]+)/i],
                    [
                      [p, /(.+)/, "$1 Secure " + I], E
                    ],
                    [/\bfocus\/([\w\.]+)/i],
                    [E, [p, x + " Focus"]],
                    [/\bopt\/([\w\.]+)/i],
                    [E, [p, U + " Touch"]],
                    [/coc_coc\w+\/([\w\.]+)/i],
                    [E, [p, "Coc Coc"]],
                    [/dolfin\/([\w\.]+)/i],
                    [E, [p, "Dolphin"]],
                    [/coast\/([\w\.]+)/i],
                    [E, [p, U + " Coast"]],
                    [/miuibrowser\/([\w\.]+)/i],
                    [E, [p, "MIUI " + I]],
                    [/fxios\/([-\w\.]+)/i],
                    [E, [p, x]],
                    [/\bqihu|(qi?ho?o?|360)browser/i],
                    [
                      [p, "360 " + I]
                    ],
                    [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                    [
                      [p, /(.+)/, "$1 " + I], E
                    ],
                    [/(comodo_dragon)\/([\w\.]+)/i],
                    [
                      [p, /_/g, " "], E
                    ],
                    [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                    [p, E],
                    [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                    [p],
                    [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                    [
                      [p, G], E
                    ],
                    [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                    [p, E],
                    [/\bgsa\/([\w\.]+) .*safari\//i],
                    [E, [p, "GSA"]],
                    [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                    [E, [p, "TikTok"]],
                    [/headlesschrome(?:\/([\w\.]+)| )/i],
                    [E, [p, P + " Headless"]],
                    [/ wv\).+(chrome)\/([\w\.]+)/i],
                    [
                      [p, P + " WebView"], E
                    ],
                    [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                    [E, [p, "Android " + I]],
                    [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                    [p, E],
                    [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                    [E, [p, "Mobile Safari"]],
                    [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                    [E, p],
                    [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                    [p, [E, Z, {
                      "1.0": "/8",
                      1.2: "/1",
                      1.3: "/3",
                      "2.0": "/412",
                      "2.0.2": "/416",
                      "2.0.3": "/417",
                      "2.0.4": "/419",
                      "?": "/"
                    }]],
                    [/(webkit|khtml)\/([\w\.]+)/i],
                    [p, E],
                    [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                    [
                      [p, "Netscape"], E
                    ],
                    [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                    [E, [p, x + " Reality"]],
                    [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                    [p, E],
                    [/(cobalt)\/([\w\.]+)/i],
                    [p, [E, /master.|lts./, ""]]
                  ],
                  cpu: [
                    [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                    [
                      [m, "amd64"]
                    ],
                    [/(ia32(?=;))/i],
                    [
                      [m, Y]
                    ],
                    [/((?:i[346]|x)86)[;\)]/i],
                    [
                      [m, "ia32"]
                    ],
                    [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                    [
                      [m, "arm64"]
                    ],
                    [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                    [
                      [m, "armhf"]
                    ],
                    [/windows (ce|mobile); ppc;/i],
                    [
                      [m, "arm"]
                    ],
                    [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                    [
                      [m, /ower/, "", Y]
                    ],
                    [/(sun4\w)[;\)]/i],
                    [
                      [m, "sparc"]
                    ],
                    [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                    [
                      [m, Y]
                    ]
                  ],
                  device: [
                    [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                    [f, [_, M],
                      [w, R]
                    ],
                    [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                    [f, [_, M],
                      [w, g]
                    ],
                    [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                    [f, [_, y],
                      [w, g]
                    ],
                    [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                    [f, [_, y],
                      [w, R]
                    ],
                    [/(macintosh);/i],
                    [f, [_, y]],
                    [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                    [f, [_, j],
                      [w, g]
                    ],
                    [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                    [f, [_, C],
                      [w, R]
                    ],
                    [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                    [f, [_, C],
                      [w, g]
                    ],
                    [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                    [
                      [f, /_/g, " "],
                      [_, q],
                      [w, g]
                    ],
                    [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                    [
                      [f, /_/g, " "],
                      [_, q],
                      [w, R]
                    ],
                    [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                    [f, [_, "OPPO"],
                      [w, g]
                    ],
                    [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                    [f, [_, "Vivo"],
                      [w, g]
                    ],
                    [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                    [f, [_, "Realme"],
                      [w, g]
                    ],
                    [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                    [f, [_, L],
                      [w, g]
                    ],
                    [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                    [f, [_, L],
                      [w, R]
                    ],
                    [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                    [f, [_, "LG"],
                      [w, R]
                    ],
                    [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                    [f, [_, "LG"],
                      [w, g]
                    ],
                    [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                    [f, [_, "Lenovo"],
                      [w, R]
                    ],
                    [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                    [
                      [f, /_/g, " "],
                      [_, "Nokia"],
                      [w, g]
                    ],
                    [/(pixel c)\b/i],
                    [f, [_, k],
                      [w, R]
                    ],
                    [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                    [f, [_, k],
                      [w, g]
                    ],
                    [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                    [f, [_, F],
                      [w, g]
                    ],
                    [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                    [
                      [f, "Xperia Tablet"],
                      [_, F],
                      [w, R]
                    ],
                    [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                    [f, [_, "OnePlus"],
                      [w, g]
                    ],
                    [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                    [f, [_, O],
                      [w, R]
                    ],
                    [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                    [
                      [f, /(.+)/g, "Fire Phone $1"],
                      [_, O],
                      [w, g]
                    ],
                    [/(playbook);[-\w\),; ]+(rim)/i],
                    [f, _, [w, R]],
                    [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                    [f, [_, N],
                      [w, g]
                    ],
                    [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                    [f, [_, A],
                      [w, R]
                    ],
                    [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                    [f, [_, A],
                      [w, g]
                    ],
                    [/(nexus 9)/i],
                    [f, [_, "HTC"],
                      [w, R]
                    ],
                    [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                    [_, [f, /_/g, " "],
                      [w, g]
                    ],
                    [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                    [f, [_, "Acer"],
                      [w, R]
                    ],
                    [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                    [f, [_, "Meizu"],
                      [w, g]
                    ],
                    [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                    [_, f, [w, g]],
                    [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                    [_, f, [w, R]],
                    [/(surface duo)/i],
                    [f, [_, D],
                      [w, R]
                    ],
                    [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                    [f, [_, "Fairphone"],
                      [w, g]
                    ],
                    [/(u304aa)/i],
                    [f, [_, "AT&T"],
                      [w, g]
                    ],
                    [/\bsie-(\w*)/i],
                    [f, [_, "Siemens"],
                      [w, g]
                    ],
                    [/\b(rct\w+) b/i],
                    [f, [_, "RCA"],
                      [w, R]
                    ],
                    [/\b(venue[\d ]{2,7}) b/i],
                    [f, [_, "Dell"],
                      [w, R]
                    ],
                    [/\b(q(?:mv|ta)\w+) b/i],
                    [f, [_, "Verizon"],
                      [w, R]
                    ],
                    [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                    [f, [_, "Barnes & Noble"],
                      [w, R]
                    ],
                    [/\b(tm\d{3}\w+) b/i],
                    [f, [_, "NuVision"],
                      [w, R]
                    ],
                    [/\b(k88) b/i],
                    [f, [_, "ZTE"],
                      [w, R]
                    ],
                    [/\b(nx\d{3}j) b/i],
                    [f, [_, "ZTE"],
                      [w, g]
                    ],
                    [/\b(gen\d{3}) b.+49h/i],
                    [f, [_, "Swiss"],
                      [w, g]
                    ],
                    [/\b(zur\d{3}) b/i],
                    [f, [_, "Swiss"],
                      [w, R]
                    ],
                    [/\b((zeki)?tb.*\b) b/i],
                    [f, [_, "Zeki"],
                      [w, R]
                    ],
                    [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                    [
                      [_, "Dragon Touch"], f, [w, R]
                    ],
                    [/\b(ns-?\w{0,9}) b/i],
                    [f, [_, "Insignia"],
                      [w, R]
                    ],
                    [/\b((nxa|next)-?\w{0,9}) b/i],
                    [f, [_, "NextBook"],
                      [w, R]
                    ],
                    [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                    [
                      [_, "Voice"], f, [w, g]
                    ],
                    [/\b(lvtel\-)?(v1[12]) b/i],
                    [
                      [_, "LvTel"], f, [w, g]
                    ],
                    [/\b(ph-1) /i],
                    [f, [_, "Essential"],
                      [w, g]
                    ],
                    [/\b(v(100md|700na|7011|917g).*\b) b/i],
                    [f, [_, "Envizen"],
                      [w, R]
                    ],
                    [/\b(trio[-\w\. ]+) b/i],
                    [f, [_, "MachSpeed"],
                      [w, R]
                    ],
                    [/\btu_(1491) b/i],
                    [f, [_, "Rotor"],
                      [w, R]
                    ],
                    [/(shield[\w ]+) b/i],
                    [f, [_, "Nvidia"],
                      [w, R]
                    ],
                    [/(sprint) (\w+)/i],
                    [_, f, [w, g]],
                    [/(kin\.[onetw]{3})/i],
                    [
                      [f, /\./g, " "],
                      [_, D],
                      [w, g]
                    ],
                    [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                    [f, [_, B],
                      [w, R]
                    ],
                    [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                    [f, [_, B],
                      [w, g]
                    ],
                    [/smart-tv.+(samsung)/i],
                    [_, [w, v]],
                    [/hbbtv.+maple;(\d+)/i],
                    [
                      [f, /^/, "SmartTV"],
                      [_, M],
                      [w, v]
                    ],
                    [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                    [
                      [_, "LG"],
                      [w, v]
                    ],
                    [/(apple) ?tv/i],
                    [_, [f, y + " TV"],
                      [w, v]
                    ],
                    [/crkey/i],
                    [
                      [f, P + "cast"],
                      [_, k],
                      [w, v]
                    ],
                    [/droid.+aft(\w)( bui|\))/i],
                    [f, [_, O],
                      [w, v]
                    ],
                    [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                    [f, [_, j],
                      [w, v]
                    ],
                    [/(bravia[\w ]+)( bui|\))/i],
                    [f, [_, F],
                      [w, v]
                    ],
                    [/(mitv-\w{5}) bui/i],
                    [f, [_, q],
                      [w, v]
                    ],
                    [/Hbbtv.*(technisat) (.*);/i],
                    [_, f, [w, v]],
                    [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                    [
                      [_, $],
                      [f, $],
                      [w, v]
                    ],
                    [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                    [
                      [w, v]
                    ],
                    [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                    [_, f, [w, h]],
                    [/droid.+; (shield) bui/i],
                    [f, [_, "Nvidia"],
                      [w, h]
                    ],
                    [/(playstation [345portablevi]+)/i],
                    [f, [_, F],
                      [w, h]
                    ],
                    [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                    [f, [_, D],
                      [w, h]
                    ],
                    [/((pebble))app/i],
                    [_, f, [w, T]],
                    [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                    [f, [_, y],
                      [w, T]
                    ],
                    [/droid.+; (glass) \d/i],
                    [f, [_, k],
                      [w, T]
                    ],
                    [/droid.+; (wt63?0{2,3})\)/i],
                    [f, [_, B],
                      [w, T]
                    ],
                    [/(quest( 2| pro)?)/i],
                    [f, [_, G],
                      [w, T]
                    ],
                    [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                    [_, [w, S]],
                    [/(aeobc)\b/i],
                    [f, [_, O],
                      [w, S]
                    ],
                    [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                    [f, [w, g]],
                    [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                    [f, [w, R]],
                    [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                    [
                      [w, R]
                    ],
                    [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                    [
                      [w, g]
                    ],
                    [/(android[-\w\. ]{0,9});.+buil/i],
                    [f, [_, "Generic"]]
                  ],
                  engine: [
                    [/windows.+ edge\/([\w\.]+)/i],
                    [E, [p, "EdgeHTML"]],
                    [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                    [E, [p, "Blink"]],
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                    [p, E],
                    [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                    [E, p]
                  ],
                  os: [
                    [/microsoft (windows) (vista|xp)/i],
                    [p, E],
                    [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                    [p, [E, Z, Q]],
                    [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                    [
                      [p, "Windows"],
                      [E, Z, Q]
                    ],
                    [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                    [
                      [E, /_/g, "."],
                      [p, "iOS"]
                    ],
                    [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                    [
                      [p, H],
                      [E, /_/g, "."]
                    ],
                    [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                    [E, p],
                    [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                    [p, E],
                    [/\(bb(10);/i],
                    [E, [p, N]],
                    [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                    [E, [p, "Symbian"]],
                    [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                    [E, [p, x + " OS"]],
                    [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                    [E, [p, "webOS"]],
                    [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                    [E, [p, "watchOS"]],
                    [/crkey\/([\d\.]+)/i],
                    [E, [p, P + "cast"]],
                    [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                    [
                      [p, W], E
                    ],
                    [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                    [p, E],
                    [/(sunos) ?([\w\.\d]*)/i],
                    [
                      [p, "Solaris"], E
                    ],
                    [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                    [p, E]
                  ]
                },
                ee = function(e, t) {
                  if (typeof e === d && (t = e, e = void 0), !(this instanceof ee)) return new ee(e, t).getResult();
                  var r = typeof a !== c && a.navigator ? a.navigator : void 0,
                    i = e || (r && r.userAgent ? r.userAgent : ""),
                    n = r && r.userAgentData ? r.userAgentData : void 0,
                    o = t ? z(J, t) : J,
                    s = r && r.userAgent == i;
                  return this.getBrowser = function() {
                    var e, t = {};
                    return t[p] = void 0, t[E] = void 0, K.call(t, i, o.browser), t[b] = typeof(e = t[E]) === l ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0, s && r && r.brave && typeof r.brave.isBrave == u && (t[p] = "Brave"), t
                  }, this.getCPU = function() {
                    var e = {};
                    return e[m] = void 0, K.call(e, i, o.cpu), e
                  }, this.getDevice = function() {
                    var e = {};
                    return e[_] = void 0, e[f] = void 0, e[w] = void 0, K.call(e, i, o.device), s && !e[w] && n && n.mobile && (e[w] = g), s && "Macintosh" == e[f] && r && typeof r.standalone !== c && r.maxTouchPoints && r.maxTouchPoints > 2 && (e[f] = "iPad", e[w] = R), e
                  }, this.getEngine = function() {
                    var e = {};
                    return e[p] = void 0, e[E] = void 0, K.call(e, i, o.engine), e
                  }, this.getOS = function() {
                    var e = {};
                    return e[p] = void 0, e[E] = void 0, K.call(e, i, o.os), s && !e[p] && n && "Unknown" != n.platform && (e[p] = n.platform.replace(/chrome os/i, W).replace(/macos/i, H)), e
                  }, this.getResult = function() {
                    return {
                      ua: this.getUA(),
                      browser: this.getBrowser(),
                      engine: this.getEngine(),
                      os: this.getOS(),
                      device: this.getDevice(),
                      cpu: this.getCPU()
                    }
                  }, this.getUA = function() {
                    return i
                  }, this.setUA = function(e) {
                    return i = typeof e === l && e.length > 350 ? $(e, 350) : e, this
                  }, this.setUA(i), this
                };
              ee.VERSION = "1.0.35", ee.BROWSER = X([p, E, b]), ee.CPU = X([m]), ee.DEVICE = X([f, _, w, h, g, v, R, T, S]), ee.ENGINE = ee.OS = X([p, E]), typeof o !== c ? (n.exports && (o = n.exports = ee), o.UAParser = ee) : r.amdO ? void 0 === (i = (function() {
                return ee
              }).call(t, r, t, e)) || (e.exports = i) : typeof a !== c && (a.UAParser = ee);
              var et = typeof a !== c && (a.jQuery || a.Zepto);
              if (et && !et.ua) {
                var er = new ee;
                et.ua = er.getResult(), et.ua.get = function() {
                  return er.getUA()
                }, et.ua.set = function(e) {
                  er.setUA(e);
                  var t = er.getResult();
                  for (var r in t) et.ua[r] = t[r]
                }
              }
            }("object" == typeof window ? window : this)
          }
        },
        o = {};

      function a(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        var r = o[e] = {
            exports: {}
          },
          i = !0;
        try {
          n[e].call(r.exports, r, r.exports, a), i = !1
        } finally {
          i && delete o[e]
        }
        return r.exports
      }
      a.ab = "//", e.exports = a(226)
    },
    71008: () => {},
    73602: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "afterTaskAsyncStorageInstance", {
        enumerable: !0,
        get: function() {
          return i
        }
      });
      let i = (0, r(66151).createAsyncLocalStorage)()
    },
    74790: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "connection", {
        enumerable: !0,
        get: function() {
          return c
        }
      });
      let i = r(12756),
        n = r(37145),
        o = r(9865),
        a = r(35749),
        s = r(19676),
        u = r(1247);

      function c() {
        let e = i.workAsyncStorage.getStore(),
          t = n.workUnitAsyncStorage.getStore();
        if (e) {
          if (t && "after" === t.phase && !(0, u.isRequestAPICallableInsideAfter)()) throw Object.defineProperty(Error(`Route ${e.route} used \`connection()\` inside \`after()\`. The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but \`after()\` executes after the request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
            value: "E827",
            enumerable: !1,
            configurable: !0
          });
          if (e.forceStatic) return Promise.resolve(void 0);
          if (e.dynamicShouldError) throw Object.defineProperty(new a.StaticGenBailoutError(`Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`connection()\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E847",
            enumerable: !1,
            configurable: !0
          });
          if (t) switch (t.type) {
            case "cache": {
              let t = Object.defineProperty(Error(`Route ${e.route} used \`connection()\` inside "use cache". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual request, but caches must be able to be produced before a request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                value: "E841",
                enumerable: !1,
                configurable: !0
              });
              throw Error.captureStackTrace(t, c), e.invalidDynamicUsageError ??= t, t
            }
            case "private-cache": {
              let t = Object.defineProperty(Error(`Route ${e.route} used \`connection()\` inside "use cache: private". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual navigation request, but caches must be able to be produced before a navigation request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                value: "E837",
                enumerable: !1,
                configurable: !0
              });
              throw Error.captureStackTrace(t, c), e.invalidDynamicUsageError ??= t, t
            }
            case "unstable-cache":
              throw Object.defineProperty(Error(`Route ${e.route} used \`connection()\` inside a function cached with \`unstable_cache()\`. The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                value: "E840",
                enumerable: !1,
                configurable: !0
              });
            case "prerender":
            case "prerender-client":
            case "prerender-runtime":
              return (0, s.makeHangingPromise)(t.renderSignal, e.route, "`connection()`");
            case "prerender-ppr":
              return (0, o.postponeWithTracking)(e.route, "connection", t.dynamicTracking);
            case "prerender-legacy":
              return (0, o.throwToInterruptStaticGeneration)("connection", e, t);
            case "request":
              return (0, o.trackDynamicDataInDynamicRender)(t), Promise.resolve(void 0)
          }
        }(0, n.throwForMissingRequestStore)("connection")
      }
      r(39752)
    },
    78751: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "ReflectAdapter", {
        enumerable: !0,
        get: function() {
          return r
        }
      });
      class r {
        static get(e, t, r) {
          let i = Reflect.get(e, t, r);
          return "function" == typeof i ? i.bind(e) : i
        }
        static set(e, t, r, i) {
          return Reflect.set(e, t, r, i)
        }
        static has(e, t) {
          return Reflect.has(e, t)
        }
        static deleteProperty(e, t) {
          return Reflect.deleteProperty(e, t)
        }
      }
    },
    78806: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = {
        UNDERSCORE_GLOBAL_ERROR_ROUTE: function() {
          return a
        },
        UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY: function() {
          return s
        },
        UNDERSCORE_NOT_FOUND_ROUTE: function() {
          return n
        },
        UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: function() {
          return o
        }
      };
      for (var i in r) Object.defineProperty(t, i, {
        enumerable: !0,
        get: r[i]
      });
      let n = "/_not-found",
        o = `${n}/page`,
        a = "/_global-error",
        s = `${a}/page`
    },
    98915: () => {}
  }
]);