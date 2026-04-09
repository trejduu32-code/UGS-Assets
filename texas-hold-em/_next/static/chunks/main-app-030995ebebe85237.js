! function() {
  try {
    var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fd8058a6-9659-4805-a8bf-442fd10d4e09", e._sentryDebugIdIdentifier = "sentry-dbid-fd8058a6-9659-4805-a8bf-442fd10d4e09")
  } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7358], {
    16120: (e, t, a) => {
      Promise.resolve().then(a.t.bind(a, 24757, 23)), Promise.resolve().then(a.t.bind(a, 74570, 23)), Promise.resolve().then(a.t.bind(a, 93662, 23)), Promise.resolve().then(a.t.bind(a, 6083, 23)), Promise.resolve().then(a.t.bind(a, 63599, 23)), Promise.resolve().then(a.t.bind(a, 84275, 23)), Promise.resolve().then(a.t.bind(a, 72006, 23)), Promise.resolve().then(a.bind(a, 32291))
    },
    19393: () => {},
    63199: (e, t, a) => {
      "use strict";
      var s = a(79368),
        r = a(24709),
        i = a(40008),
        n = a(33001),
        o = a(92666),
        l = a(21916),
        u = a(38841);

      function p(e) {
        let t = e?.exception?.values ?? [],
          a = [];
        for (let e of t) {
          let t = e?.stacktrace?.frames;
          Array.isArray(t) && a.push(...t)
        }
        return a
      }

      function d(e) {
        return e?.message || e?.exception?.values?.[0]?.value || ""
      }
      let c = [{
        name: "fx-mobile-orientation",
        test: function(e) {
          let t = d(e),
            a = e?.request?.headers?.["user-agent"] || navigator.userAgent,
            s = /Firefox/i.test(a);
          return t.includes("NS_ERROR_NOT_INITIALIZED") && s
        }
      }, {
        name: "safari-chrome-mouse-move",
        test: function(e) {
          let t = d(e),
            a = e?.request?.headers?.["user-agent"] || navigator.userAgent,
            s = /Safari/i.test(a),
            r = /Chrome/i.test(a),
            i = e?.extra?.arguments?.[0]?.type,
            n = i?.includes("mouse") ?? !1;
          return t.includes("An attempt was made to break through the security policy of the user agent") && (s || r) && n
        }
      }, {
        name: "fx-ads",
        test: function(e) {
          let t = d(e),
            a = e?.request?.headers?.["user-agent"] || navigator.userAgent,
            s = /Firefox/i.test(a);
          return t.includes("HTTP Client Error with status code: 403") && s
        }
      }, {
        name: "visibility-change-ads",
        test: function(e) {
          let t = d(e),
            a = e?.extra?.arguments?.[0]?.type,
            s = a?.includes("visibilitychange") ?? !1;
          return t.includes('can\'t access property "display", it is null') && s
        }
      }, {
        name: "resize-observer-loop-exceeded",
        test: function(e) {
          return d(e).includes("ResizeObserver loop limit exceeded")
        }
      }, {
        name: "set-timeout-missing",
        test: function(e) {
          return d(e).includes("Can't find variable: setTimeout")
        }
      }, {
        name: "dom-null-access",
        test: function(e) {
          let t = d(e);
          return t.includes("Cannot read properties of undefined (reading 'querySelectorAll')") || t.includes("null is not an object (evaluating 'e.document')")
        }
      }, {
        name: "ff-topwindow-remove-listener",
        test: function(e) {
          let t = d(e);
          if (!(/removeEventListener/i.test(t) && /topWindow\(\)\s*is\s*null/i.test(t))) return !1;
          let a = e?.extra?.arguments?.[0]?.type,
            s = (a?.toLowerCase() ?? "").includes("resize"),
            r = e?.request?.headers?.["user-agent"] ?? ("u" > typeof navigator ? navigator.userAgent : ""),
            i = /Firefox/i.test(r);
          return s || i
        }
      }, {
        name: "ads-ima-stack",
        test: function(e) {
          let t = d(e).toLowerCase(),
            a = /(?:cannot\s+read\s+properties\s+of\s+undefined\s*\(reading\s+['"]?map['"]?\))|reading\s+['"]?map['"]?/i.test(t) || /cannot\s+read\s+property\s+['"]?map['"]?\s+of\s+undefined/i.test(t) || /undefined\s+is\s+not\s+an\s+object\s*\(evaluating\s+['"]?.*\.map['"]?\)/i.test(t),
            s = /(?:Cannot|Can't)\s+read\s+(?:properties?|property)\s+of\s+undefined/i.test(t),
            r = /load\s+failed|loader\s+failed|request\s+failed/i.test(t),
            i = /(?:reading\s+['"]?queryId['"]?)|\bqueryId\b/i.test(t);
          if (!(a || s || r || i)) return !1;
          let n = (e?.exception?.values && Array.isArray(e.exception.values) ? e.exception.values.flatMap(e => e?.stacktrace?.frames ?? []) : []) || e?.stacktrace?.frames || (e?.threads?.values && Array.isArray(e.threads.values) ? e.threads.values.flatMap(e => e?.stack?.frames ?? []) : []) || [],
            o = Array.isArray(n) ? n.slice(0, 200) : [],
            l = Array.isArray(o) && o.some(e => {
              let t = String(e?.filename || e?.abs_path || "").toLowerCase(),
                a = String(e?.function || e?.method || "").toLowerCase();
              return /\/sdkloader\/ima3\.js/.test(t) || /\bima3\b/.test(t) || /\bimasdk\b/.test(t) || /\bgoogletag\b/.test(t) || /\bgpt(\.js)?\b/.test(t) || /\/sdkloader\/ima3\.js/.test(a) || /\bima3\b/.test(a)
            }),
            u = !Array.isArray(o) || 0 === o.length || o.every(e => {
              let t = e?.filename || "",
                a = e?.function || "",
                s = e?.abs_path || "";
              return !t && !a || "<anonymous>" === t || s && !t && !a
            });
          return !!(l || i && u)
        }
      }, {
        name: "d5d56pq-script-noise",
        test: function(e) {
          let t = d(e),
            a = /(?:^|\b)load\s+failed\b/i.test(t),
            s = /urlsearchparams\s+is\s+not\s+a\s+constructor/i.test(t),
            r = /http client error with status code:\s*(408|5\d{2})/i.test(t);
          return !!(a || s || r) && p(e).some(e => {
            let t = `${e?.filename??""} ${e?.abs_path??""} ${e?.module??""}`,
              a = /\/d5d56pq[\w-]*\/script\.js/i.test(t),
              s = /\/social\/tags\/v\d+(?:\.\d+){1,2}\/launcher\/\d+-bundle\.js/i.test(t);
            return a || s
          })
        }
      }, {
        name: "native-ad-parent",
        test: function(e) {
          let t = d(e).toLowerCase();
          return !!/cannot read (?:properties|property) of null \(reading ['"]?parent['"]?\)/i.test(t) && p(e).some(e => {
            let t = `${e?.filename??""} ${e?.abs_path??""}`;
            return /\/media\/native\/.+\/js\/lib\.js/i.test(t)
          })
        }
      }, {
        name: "fetch-failed-third-party",
        test: function(e) {
          let t = d(e).toLowerCase();
          return !!/failed to fetch/i.test(t) && p(e).some(e => {
            let t = `${e?.filename??""} ${e?.abs_path??""} ${e?.module??""}`;
            return /\/social\/tags\/v\d+(?:\.\d+){1,2}\/launcher\/\d+-bundle\.js/i.test(t) || /\/d5d56pq[\w-]*\/script\.js/i.test(t) || /\/media\/native\/.+\/js\/lib\.js/i.test(t)
          })
        }
      }, {
        name: "startswith-not-function",
        test: function(e) {
          let t = d(e);
          if (String(t).toLowerCase(), !/(^|typeerror:\s*)[a-z_$][\w$]*\.startswith\s+is\s+not\s+a\s+function/i.test(t)) return !1;
          let a = p(e);
          return !!a.length && a.some(e => {
            let t = `${e?.filename??""} ${e?.abs_path??""}`.toLowerCase();
            return /instream[-_.]?tracking/.test(t) || /imasdk|\/sdkloader\/ima3\.js/.test(t) || /\bgoogletag\b|\/gpt(\.js)?\b/.test(t)
          })
        }
      }];
      globalThis._sentryRewritesTunnelPath = "/monitoring", globalThis.SENTRY_RELEASE = {
        id: "5266dcff6a6f59fa737a8a193ca37ab6ed32cc56"
      }, globalThis._sentryBasePath = void 0, globalThis._sentryNextJsVersion = "16.1.6", globalThis._sentryRewriteFramesAssetPrefixPath = "", globalThis._sentryAssetPrefix = void 0, globalThis._sentryExperimentalThirdPartyOriginStackFrames = void 0, globalThis._sentryRouteManifest = '{"dynamicRoutes":[{"path":"/:locale","regex":"^/([^/]+)$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/:slug*","regex":"^/([^/]+)/(.+)$","paramNames":["locale","slug"],"hasOptionalPrefix":true},{"path":"/:locale/blog","regex":"^/([^/]+)/blog$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/blog/:slug","regex":"^/([^/]+)/blog/([^/]+)$","paramNames":["locale","slug"],"hasOptionalPrefix":true},{"path":"/:locale/blog/category/:slug","regex":"^/([^/]+)/blog/category/([^/]+)$","paramNames":["locale","slug"],"hasOptionalPrefix":true},{"path":"/:locale/blog/category/:slug/page/:page","regex":"^/([^/]+)/blog/category/([^/]+)/page/([^/]+)$","paramNames":["locale","slug","page"],"hasOptionalPrefix":true},{"path":"/:locale/blog/page/:page","regex":"^/([^/]+)/blog/page/([^/]+)$","paramNames":["locale","page"],"hasOptionalPrefix":true},{"path":"/:locale/games/:slug","regex":"^/([^/]+)/games/([^/]+)$","paramNames":["locale","slug"],"hasOptionalPrefix":true},{"path":"/:locale/player-agreement","regex":"^/([^/]+)/player-agreement$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/plus","regex":"^/([^/]+)/plus$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/privacy-policy","regex":"^/([^/]+)/privacy-policy$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/profile","regex":"^/([^/]+)/profile$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/search/:query","regex":"^/([^/]+)/search/([^/]+)$","paramNames":["locale","query"],"hasOptionalPrefix":true},{"path":"/:locale/sitemap","regex":"^/([^/]+)/sitemap$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/support/notice","regex":"^/([^/]+)/support/notice$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/tags","regex":"^/([^/]+)/tags$","paramNames":["locale"],"hasOptionalPrefix":true},{"path":"/:locale/tags/:tag","regex":"^/([^/]+)/tags/([^/]+)$","paramNames":["locale","tag"],"hasOptionalPrefix":true},{"path":"/:locale/theme","regex":"^/([^/]+)/theme$","paramNames":["locale"],"hasOptionalPrefix":true}],"staticRoutes":[],"isrRoutes":[]}', "true" === (0, u.env)("NEXT_PUBLIC_SENTRY_ENABLED") && (window.__ark_sentry = {
        BrowserClient: s.y
      }, window.__RUM__ = {
        captureMessage: r.wd,
        captureException: r.Cp,
        addBreadcrumb: i.Z
      }, (0, n.TsN)({
        dsn: (0, u.env)("NEXT_PUBLIC_SENTRY_DSN"),
        release: (0, u.env)("NEXT_PUBLIC_RELEASE_NAME"),
        environment: (0, u.env)("NEXT_PUBLIC_RELEASE_ENV"),
        integrations: [(0, o.d)()],
        beforeBreadcrumb: e => "info" === e.level || "debug" === e.level || "log" === e.level ? null : e,
        debug: !1,
        sendDefaultPii: !0,
        tracesSampleRate: .2,
        sampleRate: .2,
        replaysSessionSampleRate: 0,
        replaysOnErrorSampleRate: 0,
        initialScope: e => (e.setTags({
          "evo.tier": "client"
        }), e),
        beforeSend: (e, t) => {
          if (!e) return e;
          for (let t of c)
            if (t.test(e)) return null;
          return e
        },
        beforeSendTransaction: (e, t) => {
          if (!e) return e;
          for (let t of c)
            if (t.test(e)) return null;
          return e
        },
        ignoreErrors: [/TypeError:\s*Right-hand/i, /TypeError:\s*Cannot read properties of null\s*\(reading\s*['"`]document['"`]\)/i, /TypeError:\s*Cannot read properties of null\s*\(reading\s*['"`]removeEventListener['"`]\)/i, /TypeError:\s*Cannot read properties of null\s*\(reading\s*['"`]scrollX['"`]\)/i, /TypeError:\s*null is not an object\s*\(evaluating\s*['"`]contextWindow\.parent['"`]\)/i, /TypeError:\s*can't access property\s*["`]parent["`],\s*contextWindow is null/i, /TypeError:\s*can't access property\s*["`]display["`],\s*t is null/i, /TypeError:\s*null is not an object\s*\(evaluating\s*['"`]\(this\.isPlacementXdom\?t:t\.parent\)\.document['"`]\)/i, /TypeError:\s*null is not an object\s*\(evaluating\s*['"`]e\.document['"`]\)/i, /null is not an object\s*\(evaluating\s*['"`]\(this\.isPlacementXdom\?t:t\.parent\)\.document['"`]\)/i, /null is not an object\s*\(evaluating\s*['"`]e\.document['"`]\)/i, /ReferenceError:\s*setTimeout is not defined/i, /nG is not a function/i, /Failed to read a named property\s*['"`]performance['"`]\s*from\s*['"`]Window['"`]:\s*An attempt was made to break through the security policy/i, /Failed to read a named property\s*['"`]performance['"`]\s*from\s*['"`]Window['"`]:\s*Blocked a restricted frame with origin/i, /Failed to read a named property\s*['"`]clearTimeout['"`]\s*from\s*['"`]Window['"`]:\s*An attempt was made to break through the security policy/i, /Failed to read a named property\s*['"`]googletag['"`]\s*from\s*['"`]Window['"`]:\s*Blocked a frame with origin/i, /HTTP Client Error with status code:\s*401/i, /Error:\s*HTTP Client Error with status code:\s*403/i, /Blocked a frame with origin\s*["`][^"`]*["`]\s*from accessing a cross-origin frame/i, /SecurityError:\s*An attempt was made to break through the security policy/i, /NS_ERROR_NOT_INITIALIZED:\s*No error message/i, /ResizeObserver loop limit exceeded/i, /TypeError:\s*e\.startsWith\s+is\s+not\s+a\s+function/i, /TypeError:\s*Cannot read properties of null\s*\(reading\s*['"`]parent['"`]\)/i, /undefined\s+is\s+not\s+an\s+object\s*\(evaluating\s*['"`]b\.queryId['"`]\)/i, /Cannot\s+read\s+properties\s+of\s+undefined\s*\(reading\s*['"`]queryId['"`]\)/i, /t\.getCreativeAdId\s+is\s+not\s+a\s+function/i, /ReferenceError\b/i],
        denyUrls: [/(?:^https?:\/\/)?imasdk\.googleapis\.com\/js\/sdkloader\/ima3\.js/i, /(?:^https?:\/\/)?securepubads\.g\.doubleclick\.net\/tag\/js\/gpt\.js/i, /(?:^https?:\/\/)?www\.googletagservices\.com\/tag\/js\/gpt\.js/i]
      }), async function() {
        let {
          httpClientIntegration: e
        } = await a.e(6896).then(a.bind(a, 56896));
        (0, l.Q8)(e({
          failedRequestStatusCodes: [
            [400, 499],
            [500, 599]
          ]
        }))
      }())
    }
  },
  e => {
    var t = t => e(e.s = t);
    e.O(0, [8441, 2352], () => (t(63199), t(57275), t(16120))), _N_E = e.O()
  }
]);