! function() {
  try {
    var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "66bbfbb6-b0be-4ad4-9b94-cfa4cee9b776", e._sentryDebugIdIdentifier = "sentry-dbid-66bbfbb6-b0be-4ad4-9b94-cfa4cee9b776")
  } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2667], {
    3825: () => {},
    5934: () => {},
    6930: () => {},
    12300: () => {},
    13191: () => {},
    14498: () => {},
    15810: () => {},
    19183: (e, t, r) => {
      "use strict";
      r.d(t, {
        $p: () => tN,
        Gf: () => tP,
        Eq: () => tM
      });
      var n, i, o, a, s, l, u, c, d, h = r(12115),
        f = r(70448),
        p = r.n(f),
        m = r(70192),
        v = r.n(m),
        g = function(e, t, r) {
          if (r || 2 == arguments.length)
            for (var n, i = 0, o = t.length; i < o; i++) !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
          return e.concat(n || Array.prototype.slice.call(t))
        },
        b = function() {
          return (b = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
          }).apply(this, arguments)
        },
        w = function(e, t, r) {
          if (r || 2 == arguments.length)
            for (var n, i = 0, o = t.length; i < o; i++) !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
          return e.concat(n || Array.prototype.slice.call(t))
        },
        y = function(e) {
          var t, r = e.id,
            n = e.iframeSourceCode,
            i = e.onIframeLoad,
            o = e.iframeRef,
            a = e.isIframeGame,
            s = e.game,
            l = e.isArkadiumSdkGame,
            u = e.onSdkIframeLoad,
            c = e.iframeAllowOptions,
            d = e.topLevelClassname,
            f = e.customCssClassesCanvasBoxWrapper,
            m = e.customCssClassesCanvasBox__common,
            y = e.customCssClassesCanvasBox__iframe,
            E = e.isSdkLoaded,
            A = a || l,
            k = w(["game", d, v().canvasBoxWrapper], null != f ? f : [], !0);
          A || k.push.apply(k, w([v().canvasBox], null != m ? m : [], !1));
          var S = b({
            className: p()(k),
            "aria-hidden": !0,
            id: r
          }, (null == s ? void 0 : s.height) && !A ? {
            style: {
              height: "".concat(s.height, "px")
            }
          } : {});
          return h.createElement("div", b({}, S), A && E && h.createElement("iframe", {
            src: n || void 0,
            title: "Game Canvas - ".concat(null != (t = null == s ? void 0 : s.name) ? t : "Arkadium Game"),
            "aria-label": "canvas box for game",
            id: "canvas-box",
            "data-testid": "canvas-box",
            className: p().apply(void 0, w(["game", v().canvasBox], null != y ? y : [], !1)),
            ref: o,
            onLoad: l ? u : i,
            allow: function(e) {
              var t = ["clipboard-read *", "clipboard-write *", "fullscreen"];
              if (!e) return t.join("; ");
              var r = e.split(";").map(function(e) {
                  return e.trim()
                }).filter(Boolean),
                n = new Set(r.map(function(e) {
                  return e.split(" ")[0].toLowerCase()
                })),
                i = g([], r, !0);
              return t.forEach(function(e) {
                var t = e.split(" ")[0].toLowerCase();
                n.has(t) || i.push(e)
              }), i.join("; ")
            }(c)
          }))
        };
      y.displayName = "GameCanvas";
      var E = h.memo(y),
        A = r(86222),
        k = r.n(A),
        S = function() {
          return (S = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
          }).apply(this, arguments)
        },
        _ = function(e, t) {
          var r = {};
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
          return r
        },
        T = function() {
          return h.createElement(C, {
            fullscreen: !1
          }, h.createElement(O, null, h.createElement(x, null, "L"), h.createElement(x, null, "O"), h.createElement(x, null, "A"), h.createElement(x, null, "D"), h.createElement(x, null, "I"), h.createElement(x, null, "N"), h.createElement(x, null, "G")))
        },
        C = function(e) {
          var t, r = e.fullscreen,
            n = _(e, ["fullscreen"]);
          return h.createElement("div", S({
            className: p()(k().loaderContainer, ((t = {})[k().fullscreen] = !!r, t))
          }, n))
        },
        O = function(e) {
          return h.createElement("div", S({
            className: k().loaderText
          }, e))
        },
        x = function(e) {
          return h.createElement("span", S({
            className: k().loadingLetter
          }, e))
        },
        R = r(61828),
        I = r(27249),
        L = r(39576);
      (l || (l = {})).BACK_TO_GAME = "BACK_TO_GAME";
      var D = r(74348),
        P = r(73072),
        M = r(78628),
        N = r(11385),
        j = r(41641),
        G = r(64717),
        U = "user-agent",
        F = "function",
        z = "object",
        B = "string",
        W = "undefined",
        H = "browser",
        q = "device",
        $ = "engine",
        V = "result",
        K = "name",
        Y = "type",
        Q = "vendor",
        X = "version",
        J = "architecture",
        Z = "major",
        ee = "model",
        et = "console",
        er = "mobile",
        en = "tablet",
        ei = "smarttv",
        eo = "wearable",
        ea = "embedded",
        es = "inapp",
        el = "brands",
        eu = "formFactors",
        ec = "fullVersionList",
        ed = "platform",
        eh = "platformVersion",
        ef = "bitness",
        ep = "sec-ch-ua",
        em = ep + "-full-version-list",
        ev = ep + "-arch",
        eg = ep + "-" + ef,
        eb = ep + "-form-factors",
        ew = ep + "-" + er,
        ey = ep + "-" + ee,
        eE = ep + "-" + ed,
        eA = eE + "-version",
        ek = [el, ec, er, ee, ed, eh, J, eu, ef],
        eS = "Amazon",
        e_ = "Apple",
        eT = "ASUS",
        eC = "BlackBerry",
        eO = "Google",
        ex = "Huawei",
        eR = "Lenovo",
        eI = "Honor",
        eL = "Microsoft",
        eD = "Motorola",
        eP = "Nvidia",
        eM = "OnePlus",
        eN = "OPPO",
        ej = "Samsung",
        eG = "Sharp",
        eU = "Sony",
        eF = "Xiaomi",
        ez = "Zebra",
        eB = "Chrome",
        eW = "Chromium",
        eH = "Chromecast",
        eq = "Edge",
        e$ = "Firefox",
        eV = "Opera",
        eK = "Facebook",
        eY = "Sogou",
        eQ = "Mobile ",
        eX = " Browser",
        eJ = "Windows",
        eZ = typeof window !== W && window.navigator ? window.navigator : void 0,
        e0 = eZ && eZ.userAgentData ? eZ.userAgentData : void 0,
        e1 = function(e, t) {
          var r = {},
            n = t;
          if (!e4(t))
            for (var i in n = {}, t)
              for (var o in t[i]) n[o] = t[i][o].concat(n[o] ? n[o] : []);
          for (var a in e) r[a] = n[a] && n[a].length % 2 == 0 ? n[a].concat(e[a]) : e[a];
          return r
        },
        e2 = function(e) {
          for (var t = {}, r = 0; r < e.length; r++) t[e[r].toUpperCase()] = e[r];
          return t
        },
        e3 = function(e, t) {
          if (typeof e === z && e.length > 0) {
            for (var r in e)
              if (e9(t) == e9(e[r])) return !0;
            return !1
          }
          return !!e5(e) && e9(t) == e9(e)
        },
        e4 = function(e, t) {
          for (var r in e) return /^(browser|cpu|device|engine|os)$/.test(r) || !!t && e4(e[r])
        },
        e5 = function(e) {
          return typeof e === B
        },
        e6 = function(e) {
          if (e) {
            for (var t = [], r = te(/\\?\"/g, e).split(","), n = 0; n < r.length; n++)
              if (r[n].indexOf(";") > -1) {
                var i = tr(r[n]).split(";v=");
                t[n] = {
                  brand: i[0],
                  version: i[1]
                }
              } else t[n] = tr(r[n]);
            return t
          }
        },
        e9 = function(e) {
          return e5(e) ? e.toLowerCase() : e
        },
        e7 = function(e) {
          return e5(e) ? te(/[^\d\.]/g, e).split(".")[0] : void 0
        },
        e8 = function(e) {
          for (var t in e)
            if (e.hasOwnProperty(t)) {
              var r = e[t];
              typeof r == z && 2 == r.length ? this[r[0]] = r[1] : this[r] = void 0
            } return this
        },
        te = function(e, t) {
          return e5(t) ? t.replace(e, "") : t
        },
        tt = function(e) {
          return te(/\\?\"/g, e)
        },
        tr = function(e, t) {
          return e = te(/^\s\s*/, String(e)), typeof t === W ? e : e.substring(0, t)
        },
        tn = function(e, t) {
          if (e && t)
            for (var r, n, i, o, a, s, l = 0; l < t.length && !a;) {
              var u = t[l],
                c = t[l + 1];
              for (r = n = 0; r < u.length && !a && u[r];)
                if (a = u[r++].exec(e))
                  for (i = 0; i < c.length; i++) s = a[++n], typeof(o = c[i]) === z && o.length > 0 ? 2 === o.length ? typeof o[1] == F ? this[o[0]] = o[1].call(this, s) : this[o[0]] = o[1] : o.length >= 3 && (typeof o[1] !== F || o[1].exec && o[1].test ? 3 == o.length ? this[o[0]] = s ? s.replace(o[1], o[2]) : void 0 : 4 == o.length ? this[o[0]] = s ? o[3].call(this, s.replace(o[1], o[2])) : void 0 : o.length > 4 && (this[o[0]] = s ? o[3].apply(this, [s.replace(o[1], o[2])].concat(o.slice(4))) : void 0) : o.length > 3 ? this[o[0]] = s ? o[1].apply(this, o.slice(2)) : void 0 : this[o[0]] = s ? o[1].call(this, s, o[2]) : void 0) : this[o] = s || void 0;
              l += 2
            }
        },
        ti = function(e, t) {
          for (var r in t)
            if (typeof t[r] === z && t[r].length > 0) {
              for (var n = 0; n < t[r].length; n++)
                if (e3(t[r][n], e)) return "?" === r ? void 0 : r
            } else if (e3(t[r], e)) return "?" === r ? void 0 : r;
          return t.hasOwnProperty("*") ? t["*"] : e
        },
        to = {
          ME: "4.90",
          "NT 3.51": "3.51",
          "NT 4.0": "4.0",
          2e3: ["5.0", "5.01"],
          XP: ["5.1", "5.2"],
          Vista: "6.0",
          7: "6.1",
          8: "6.2",
          "8.1": "6.3",
          10: ["6.4", "10.0"],
          NT: ""
        },
        ta = {
          embedded: "Automotive",
          mobile: "Mobile",
          tablet: ["Tablet", "EInk"],
          smarttv: "TV",
          wearable: "Watch",
          xr: ["VR", "XR"],
          "?": ["Desktop", "Unknown"],
          "*": void 0
        },
        ts = {
          Chrome: "Google Chrome",
          Edge: "Microsoft Edge",
          "Edge WebView2": "Microsoft Edge WebView2",
          "Chrome WebView": "Android WebView",
          "Chrome Headless": "HeadlessChrome",
          "Huawei Browser": "HuaweiBrowser",
          "MIUI Browser": "Miui Browser",
          "Opera Mobi": "OperaMobile",
          Yandex: "YaBrowser"
        },
        tl = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [X, [K, eQ + "Chrome"]],
            [/webview.+edge\/([\w\.]+)/i],
            [X, [K, eq + " WebView"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [X, [K, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [K, X],
            [/opios[\/ ]+([\w\.]+)/i],
            [X, [K, eV + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [X, [K, eV + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [X, [K, eV]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [X, [K, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [X, [K, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(atlas|flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:hi|lg |ovi|qute)browser|palemoon)\/v?([-\w\.]+)/i, /(brave)(?: chrome)?\/([\d\.]+)/i, /(heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i, /(qwant)(?:ios|mobile)\/([\d\.]+)/i, /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i],
            [K, X],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [X, [K, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [X, [K, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [X, [K, "UCBrowser"]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [X, [K, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [X, [K, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [X, [K, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [X, [K, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [X, [K, "Smart " + eR + eX]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [K, /(.+)/, "$1 Secure" + eX], X
            ],
            [/\bfocus\/([\w\.]+)/i],
            [X, [K, e$ + " Focus"]],
            [/ mms\/([\w\.]+)$/i],
            [X, [K, eV + " Neon"]],
            [/ opt\/([\w\.]+)$/i],
            [X, [K, eV + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [X, [K, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [X, [K, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [X, [K, eV + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [X, [K, "MIUI" + eX]],
            [/fxios\/([\w\.-]+)/i],
            [X, [K, eQ + e$]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [X, [K, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [K, /(.+)/, "$1Browser"], X
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [K, /(.+)/, "$1" + eX], X
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [X, [K, ej + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [X, [K, eY + " Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [K, eY + " Mobile"], X
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [K, X],
            [/(lbbrowser|rekonq|steam(?= (clie|tenf|gameo)))/i],
            [K],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [X, K],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [K, eK], X, [Y, es]
            ],
            [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(bing)(?:web|sapphire)\/([\w\.]+)/i, /(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i],
            [K, X, [Y, es]],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [X, [K, "GSA"],
              [Y, es]
            ],
            [/(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i],
            [X, [K, "TikTok"],
              [Y, es]
            ],
            [/\[(linkedin)app\]/i],
            [K, [Y, es]],
            [/(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i],
            [
              [K, /(.+)/, "Zalo"], X, [Y, es]
            ],
            [/(chromium)[\/ ]([-\w\.]+)/i],
            [K, X],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [X, [K, eB + " Headless"]],
            [/wv\).+chrome\/([\w\.]+).+edgw\//i],
            [X, [K, eq + " WebView2"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [K, eB + " WebView"], X
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [X, [K, "Android" + eX]],
            [/chrome\/([\w\.]+) mobile/i],
            [X, [K, eQ + "Chrome"]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [K, X],
            [/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],
            [X, [K, eQ + "Safari"]],
            [/iphone .*mobile(?:\/\w+ | ?)safari/i],
            [
              [K, eQ + "Safari"]
            ],
            [/version\/([\w\.\,]+) .*(safari)/i],
            [X, K],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [K, [X, "1"]],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [K, X],
            [/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],
            [
              [K, eQ + e$], X
            ],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [K, "Netscape"], X
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [K, X],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [X, [K, e$ + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+(?= .+rv\:.+gecko\/\d+)|[0-4][\w\.]+(?!.+compatible))/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [K, [X, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [K, [X, /[^\d\.]+./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [J, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [J, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [J, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [J, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [J, "arm"]
            ],
            [/ sun4\w[;\)]/i],
            [
              [J, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i, /((ppc|powerpc)(64)?)( mac|;|\))/i, /(?:osf1|[freopnt]{3,4}bsd) (alpha)/i],
            [
              [J, /ower/, "", e9]
            ],
            [/mc680.0/i],
            [
              [J, "68k"]
            ],
            [/winnt.+\[axp/i],
            [
              [J, "alpha"]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [ee, [Q, ej],
              [Y, en]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i, /sec-(sgh\w+)/i],
            [ee, [Q, ej],
              [Y, er]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i],
            [ee, [Q, e_],
              [Y, er]
            ],
            [/\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i, /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i],
            [ee, [Q, e_],
              [Y, en]
            ],
            [/(macintosh);/i],
            [ee, [Q, e_]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [ee, [Q, eG],
              [Y, er]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [ee, [Q, eI],
              [Y, en]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [ee, [Q, eI],
              [Y, er]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [ee, [Q, ex],
              [Y, en]
            ],
            [/(?:huawei) ?([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i],
            [ee, [Q, ex],
              [Y, er]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [ee, /_/g, " "],
              [Q, eF],
              [Y, en]
            ],
            [/\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /oid[^\)]+; (redmi[\-_ ]?(?:note|k)?[\w_ ]+|m?[12]\d[01]\d\w{3,6}|poco[\w ]+|(shark )?\w{3}-[ah]0|qin ?[1-3](s\+|ultra| pro)?)( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [ee, /_/g, " "],
              [Q, eF],
              [Y, er]
            ],
            [/droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [ee, [Q, eM],
              [Y, er]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [ee, [Q, eN],
              [Y, er]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [ee, [Q, ti, {
                OnePlus: ["203", "304", "403", "404", "413", "415"],
                "*": eN
              }],
              [Y, en]
            ],
            [/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],
            [ee, [Q, "BLU"],
              [Y, er]
            ],
            [/; vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [ee, [Q, "Vivo"],
              [Y, er]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [ee, [Q, "Realme"],
              [Y, er]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [ee, [Q, eR],
              [Y, en]
            ],
            [/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],
            [ee, [Q, eR],
              [Y, er]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i, /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i],
            [ee, [Q, eD],
              [Y, er]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [ee, [Q, eD],
              [Y, en]
            ],
            [/\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [ee, [Q, "LG"],
              [Y, en]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i, /\blg-?([\d\w]+) bui/i],
            [ee, [Q, "LG"],
              [Y, er]
            ],
            [/(nokia) (t[12][01])/i],
            [Q, ee, [Y, en]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i],
            [
              [ee, /_/g, " "],
              [Y, er],
              [Q, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [ee, [Q, eO],
              [Y, en]
            ],
            [/droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i],
            [ee, [Q, eO],
              [Y, er]
            ],
            [/(google) (pixelbook( go)?)/i],
            [Q, ee],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [ee, [Q, eU],
              [Y, er]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [ee, "Xperia Tablet"],
              [Q, eU],
              [Y, en]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [ee, [Q, eS],
              [Y, en]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [ee, /(.+)/g, "Fire Phone $1"],
              [Q, eS],
              [Y, er]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [ee, Q, [Y, en]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /(?:blackberry|\(bb10;) (\w+)/i],
            [ee, [Q, eC],
              [Y, er]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [ee, [Q, eT],
              [Y, en]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [ee, [Q, eT],
              [Y, er]
            ],
            [/(nexus 9)/i],
            [ee, [Q, "HTC"],
              [Y, en]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [Q, [ee, /_/g, " "],
              [Y, er]
            ],
            [/tcl (xess p17aa)/i, /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],
            [ee, [Q, "TCL"],
              [Y, en]
            ],
            [/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],
            [ee, [Q, "TCL"],
              [Y, er]
            ],
            [/(itel) ((\w+))/i],
            [
              [Q, e9], ee, [Y, ti, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [ee, [Q, "Acer"],
              [Y, en]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [ee, [Q, "Meizu"],
              [Y, er]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [ee, [Q, "Ulefone"],
              [Y, er]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [ee, [Q, "Energizer"],
              [Y, er]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [ee, [Q, "Cat"],
              [Y, er]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [ee, [Q, "Smartfren"],
              [Y, er]
            ],
            [/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],
            [ee, [Q, "Nothing"],
              [Y, er]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [ee, [Q, "Archos"],
              [Y, en]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [ee, [Q, "Archos"],
              [Y, er]
            ],
            [/; (n159v)/i],
            [ee, [Q, "HMD"],
              [Y, er]
            ],
            [/(imo) (tab \w+)/i, /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i],
            [Q, ee, [Y, en]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (blu|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(oppo) ?([\w ]+) bui/i, /(hisense) ([ehv][\w ]+)\)/i, /droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i],
            [Q, ee, [Y, er]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i],
            [Q, ee, [Y, en]],
            [/(surface duo)/i],
            [ee, [Q, eL],
              [Y, en]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [ee, [Q, "Fairphone"],
              [Y, er]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [ee, [Q, eP],
              [Y, en]
            ],
            [/(sprint) (\w+)/i],
            [Q, ee, [Y, er]],
            [/(kin\.[onetw]{3})/i],
            [
              [ee, /\./g, " "],
              [Q, eL],
              [Y, er]
            ],
            [/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [ee, [Q, ez],
              [Y, en]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [ee, [Q, ez],
              [Y, er]
            ],
            [/(philips)[\w ]+tv/i, /smart-tv.+(samsung)/i],
            [Q, [Y, ei]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [ee, /^/, "SmartTV"],
              [Q, ej],
              [Y, ei]
            ],
            [/(vizio)(?: |.+model\/)(\w+-\w+)/i, /tcast.+(lg)e?. ([-\w]+)/i],
            [Q, ee, [Y, ei]],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [Q, "LG"],
              [Y, ei]
            ],
            [/(apple) ?tv/i],
            [Q, [ee, e_ + " TV"],
              [Y, ei]
            ],
            [/crkey.*devicetype\/chromecast/i],
            [
              [ee, eH + " Third Generation"],
              [Q, eO],
              [Y, ei]
            ],
            [/crkey.*devicetype\/([^/]*)/i],
            [
              [ee, /^/, "Chromecast "],
              [Q, eO],
              [Y, ei]
            ],
            [/fuchsia.*crkey/i],
            [
              [ee, eH + " Nest Hub"],
              [Q, eO],
              [Y, ei]
            ],
            [/crkey/i],
            [
              [ee, eH],
              [Q, eO],
              [Y, ei]
            ],
            [/(portaltv)/i],
            [ee, [Q, eK],
              [Y, ei]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [ee, [Q, eS],
              [Y, ei]
            ],
            [/(shield \w+ tv)/i],
            [ee, [Q, eP],
              [Y, ei]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [ee, [Q, eG],
              [Y, ei]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [ee, [Q, eU],
              [Y, ei]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [ee, [Q, eF],
              [Y, ei]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [Q, ee, [Y, ei]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [Q, /.+\/(\w+)/, "$1", ti, {
                LG: "lge"
              }],
              [ee, tr],
              [Y, ei]
            ],
            [/(playstation \w+)/i],
            [ee, [Q, eU],
              [Y, et]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [ee, [Q, eL],
              [Y, et]
            ],
            [/(ouya)/i, /(nintendo) (\w+)/i, /(retroid) (pocket ([^\)]+))/i, /(valve).+(steam deck)/i, /droid.+; ((shield|rgcube|gr0006))( bui|\))/i],
            [
              [Q, ti, {
                Nvidia: "Shield",
                Anbernic: "RGCUBE",
                Logitech: "GR0006"
              }], ee, [Y, et]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [ee, [Q, ej],
              [Y, eo]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [Q, ee, [Y, eo]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [ee, [Q, eN],
              [Y, eo]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [ee, [Q, e_],
              [Y, eo]
            ],
            [/(opwwe\d{3})/i],
            [ee, [Q, eM],
              [Y, eo]
            ],
            [/(moto 360)/i],
            [ee, [Q, eD],
              [Y, eo]
            ],
            [/(smartwatch 3)/i],
            [ee, [Q, eU],
              [Y, eo]
            ],
            [/(g watch r)/i],
            [ee, [Q, "LG"],
              [Y, eo]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [ee, [Q, ez],
              [Y, eo]
            ],
            [/droid.+; (glass) \d/i],
            [ee, [Q, eO],
              [Y, "xr"]
            ],
            [/(pico) ([\w ]+) os\d/i],
            [Q, ee, [Y, "xr"]],
            [/(quest( \d| pro)?s?).+vr/i],
            [ee, [Q, eK],
              [Y, "xr"]
            ],
            [/mobile vr; rv.+firefox/i],
            [
              [Y, "xr"]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [Q, [Y, ea]],
            [/(aeobc)\b/i],
            [ee, [Q, eS],
              [Y, ea]
            ],
            [/(homepod).+mac os/i],
            [ee, [Q, e_],
              [Y, ea]
            ],
            [/windows iot/i],
            [
              [Y, ea]
            ],
            [/droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i],
            [ee, [Y, ei]],
            [/\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i],
            [
              [Y, ei]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i],
            [ee, [Y, ti, {
              mobile: "Mobile",
              xr: "VR",
              "*": en
            }]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [Y, en]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [Y, er]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [ee, [Q, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [X, [K, eq + "HTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [K, X],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [X, [K, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links|dillo)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [K, X],
            [/ladybird\//i],
            [
              [K, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [X, K]
          ],
          os: [
            [/(windows nt) (6\.[23]); arm/i],
            [
              [K, /N/, "R"],
              [X, ti, to]
            ],
            [/(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i, /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i],
            [K, X],
            [/windows nt ?([\d\.\)]*)(?!.+xbox)/i, /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i],
            [
              [X, /(;|\))/g, "", ti, to],
              [K, eJ]
            ],
            [/(windows ce)\/?([\d\.]*)/i],
            [K, X],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i, /\btvos ?([\w\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [X, /_/g, "."],
              [K, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i],
            [
              [K, "macOS"],
              [X, /_/g, "."]
            ],
            [/android ([\d\.]+).*crkey/i],
            [X, [K, eH + " Android"]],
            [/fuchsia.*crkey\/([\d\.]+)/i],
            [X, [K, eH + " Fuchsia"]],
            [/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],
            [X, [K, eH + " SmartSpeaker"]],
            [/linux.*crkey\/([\d\.]+)/i],
            [X, [K, eH + " Linux"]],
            [/crkey\/([\d\.]+)/i],
            [X, [K, eH]],
            [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
            [X, K],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [K, /(.+)/, "$1 Touch"], X
            ],
            [/(harmonyos)[\/ ]?([\d\.]*)/i, /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i],
            [K, X],
            [/\(bb(10);/i],
            [X, [K, eC]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [X, [K, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i],
            [X, [K, e$ + " OS"]],
            [/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i, /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i],
            [X, [K, "webOS"]],
            [/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],
            [
              [X, ti, {
                25: "120",
                24: "108",
                23: "94",
                22: "87",
                6: "79",
                5: "68",
                4: "53",
                3: "38",
                2: "538",
                1: "537",
                "*": "TV"
              }],
              [K, "webOS"]
            ],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [X, [K, "watchOS"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [K, "Chrome OS"], X
            ],
            [/(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) (\w+)/i, /(xbox); +xbox ([^\);]+)/i, /(pico) .+os([\w\.]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /linux.+(mint)[\/\(\) ]?([\w\.]*)/i, /(mageia|vectorlinux|fuchsia|arcaos|arch(?= ?linux))[;l ]([\d\.]*)/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire|knoppix)(?: gnu[\/ ]linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /\b(aix)[; ]([1-9\.]{0,4})/i, /(hurd|linux|morphos)(?: (?:arm|x86|ppc)\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) ?(r\d)?/i],
            [K, X],
            [/(sunos) ?([\d\.]*)/i],
            [
              [K, "Solaris"], X
            ],
            [/\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [K, X]
          ]
        },
        tu = (n = {
          init: {},
          isIgnore: {},
          isIgnoreRgx: {},
          toString: {}
        }, e8.call(n.init, [
          [H, [K, X, Z, Y]],
          ["cpu", [J]],
          [q, [Y, ee, Q]],
          [$, [K, X]],
          ["os", [K, X]]
        ]), e8.call(n.isIgnore, [
          [H, [X, Z]],
          [$, [X]],
          ["os", [X]]
        ]), e8.call(n.isIgnoreRgx, [
          [H, / ?browser$/i],
          ["os", / ?os$/i]
        ]), e8.call(n.toString, [
          [H, [K, X]],
          ["cpu", [J]],
          [q, [Q, ee]],
          [$, [K, X]],
          ["os", [K, X]]
        ]), n),
        tc = function(e, t) {
          var r = tu.init[t],
            n = tu.isIgnore[t] || 0,
            i = tu.isIgnoreRgx[t] || 0,
            o = tu.toString[t] || 0;

          function a() {
            e8.call(this, r)
          }
          return a.prototype.getItem = function() {
            return e
          }, a.prototype.withClientHints = function() {
            return e0 ? e0.getHighEntropyValues(ek).then(function(t) {
              return e.setCH(new td(t, !1)).parseCH().get()
            }) : e.parseCH().get()
          }, a.prototype.withFeatureCheck = function() {
            return e.detectFeature().get()
          }, t != V && (a.prototype.is = function(e) {
            var t = !1;
            for (var r in this)
              if (this.hasOwnProperty(r) && !e3(n, r) && e9(i ? te(i, this[r]) : this[r]) == e9(i ? te(i, e) : e)) {
                if (t = !0, e != W) break
              } else if (e == W && t) {
              t = !t;
              break
            }
            return t
          }, a.prototype.toString = function() {
            var e = "";
            for (var t in o) typeof this[o[t]] !== W && (e += (e ? " " : "") + this[o[t]]);
            return e || W
          }), a.prototype.then = function(e) {
            var t = this,
              r = function() {
                for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e])
              };
            r.prototype = {
              is: a.prototype.is,
              toString: a.prototype.toString,
              withClientHints: a.prototype.withClientHints,
              withFeatureCheck: a.prototype.withFeatureCheck
            };
            var n = new r;
            return e(n), n
          }, new a
        };

      function td(e, t) {
        if (e = e || {}, e8.call(this, ek), t) e8.call(this, [
          [el, e6(e[ep])],
          [ec, e6(e[em])],
          [er, /\?1/.test(e[ew])],
          [ee, tt(e[ey])],
          [ed, tt(e[eE])],
          [eh, tt(e[eA])],
          [J, tt(e[ev])],
          [eu, e6(e[eb])],
          [ef, tt(e[eg])]
        ]);
        else
          for (var r in e) this.hasOwnProperty(r) && typeof e[r] !== W && (this[r] = e[r])
      }

      function th(e, t, r, n) {
        return e8.call(this, [
          ["itemType", e],
          ["ua", t],
          ["uaCH", n],
          ["rgxMap", r],
          ["data", tc(this, e)]
        ]), this
      }

      function tf(e, t, r) {
        if (typeof e === z ? (e4(e, !0) ? (typeof t === z && (r = t), t = e) : (r = e, t = void 0), e = void 0) : typeof e !== B || e4(t, !0) || (r = t, t = void 0), r)
          if (typeof r.append === F) {
            var n = {};
            r.forEach(function(e, t) {
              n[String(t).toLowerCase()] = e
            }), r = n
          } else {
            var i = {};
            for (var o in r) r.hasOwnProperty(o) && (i[String(o).toLowerCase()] = r[o]);
            r = i
          } if (!(this instanceof tf)) return new tf(e, t, r).getResult();
        var a = typeof e === B ? e : r && r[U] ? r[U] : eZ && eZ.userAgent ? eZ.userAgent : "",
          s = new td(r, !0),
          l = t ? e1(tl, t) : tl,
          u = function(e) {
            return e == V ? function() {
              return new th(e, a, l, s).set("ua", a).set(H, this.getBrowser()).set("cpu", this.getCPU()).set(q, this.getDevice()).set($, this.getEngine()).set("os", this.getOS()).get()
            } : function() {
              return new th(e, a, l[e], s).parseUA().get()
            }
          };
        return e8.call(this, [
          ["getBrowser", u(H)],
          ["getCPU", u("cpu")],
          ["getDevice", u(q)],
          ["getEngine", u($)],
          ["getOS", u("os")],
          ["getResult", u(V)],
          ["getUA", function() {
            return a
          }],
          ["setUA", function(e) {
            return e5(e) && (a = tr(e, 500)), this
          }]
        ]).setUA(a), this
      }
      th.prototype.get = function(e) {
        return e ? this.data.hasOwnProperty(e) ? this.data[e] : void 0 : this.data
      }, th.prototype.set = function(e, t) {
        return this.data[e] = t, this
      }, th.prototype.setCH = function(e) {
        return this.uaCH = e, this
      }, th.prototype.detectFeature = function() {
        if (eZ && eZ.userAgent == this.ua) switch (this.itemType) {
          case H:
            eZ.brave && typeof eZ.brave.isBrave == F && this.set(K, "Brave");
            break;
          case q:
            !this.get(Y) && e0 && e0[er] && this.set(Y, er), "Macintosh" == this.get(ee) && eZ && typeof eZ.standalone !== W && eZ.maxTouchPoints && eZ.maxTouchPoints > 2 && this.set(ee, "iPad").set(Y, en);
            break;
          case "os":
            !this.get(K) && e0 && e0[ed] && this.set(K, e0[ed]);
            break;
          case V:
            var e = this.data,
              t = function(t) {
                return e[t].getItem().detectFeature().get()
              };
            this.set(H, t(H)).set("cpu", t("cpu")).set(q, t(q)).set($, t($)).set("os", t("os"))
        }
        return this
      }, th.prototype.parseUA = function() {
        switch (this.itemType != V && tn.call(this.data, this.ua, this.rgxMap), this.itemType) {
          case H:
            this.set(Z, e7(this.get(X)));
            break;
          case "os":
            if ("iOS" == this.get(K) && "18.6" == this.get(X)) {
              var e = /\) Version\/([\d\.]+)/.exec(this.ua);
              e && parseInt(e[1].substring(0, 2), 10) >= 26 && this.set(X, e[1])
            }
        }
        return this
      }, th.prototype.parseCH = function() {
        var e = this.uaCH,
          t = this.rgxMap;
        switch (this.itemType) {
          case H:
          case $:
            var r, n = e[ec] || e[el];
            if (n)
              for (var i = 0; i < n.length; i++) {
                var o = n[i].brand || n[i],
                  a = n[i].version;
                this.itemType == H && !/not.a.brand/i.test(o) && (!r || /Chrom/.test(r) && o != eW || r == eq && /WebView2/.test(o)) && (o = ti(o, ts), (r = this.get(K)) && !/Chrom/.test(r) && /Chrom/.test(o) || this.set(K, o).set(X, a).set(Z, e7(a)), r = o), this.itemType == $ && o == eW && this.set(X, a)
              }
            break;
          case "cpu":
            var s = e[J];
            s && (s && "64" == e[ef] && (s += "64"), tn.call(this.data, s + ";", t));
            break;
          case q:
            if (e[er] && this.set(Y, er), e[ee] && (this.set(ee, e[ee]), !this.get(Y) || !this.get(Q))) {
              var l, u = {};
              tn.call(u, "droid 9; " + e[ee] + ")", t), !this.get(Y) && u.type && this.set(Y, u.type), !this.get(Q) && u.vendor && this.set(Q, u.vendor)
            }
            if (e[eu]) {
              if ("string" != typeof e[eu])
                for (var c = 0; !l && c < e[eu].length;) l = ti(e[eu][c++], ta);
              else l = ti(e[eu], ta);
              this.set(Y, l)
            }
            break;
          case "os":
            var d = e[ed];
            if (d) {
              var h = e[eh];
              d == eJ && (h = parseInt(e7(h), 10) >= 13 ? "11" : "10"), this.set(K, d).set(X, h)
            }
            this.get(K) == eJ && "Xbox" == e[ee] && this.set(K, "Xbox").set(X, void 0);
            break;
          case V:
            var f = this.data,
              p = function(t) {
                return f[t].getItem().setCH(e).parseCH().get()
              };
            this.set(H, p(H)).set("cpu", p("cpu")).set(q, p(q)).set($, p($)).set("os", p("os"))
        }
        return this
      }, tf.VERSION = "2.0.8", tf.BROWSER = e2([K, X, Z, Y]), tf.CPU = e2([J]), tf.DEVICE = e2([ee, Q, Y, et, er, ei, en, eo, ea]), tf.ENGINE = tf.OS = e2([K, X]), (i = u || (u = {})).DESKTOP = "pc", i.TABLET = "tablet", i.MOBILE = "phone";
      var tp = function() {
          function e() {
            this.p = new tf(window.navigator.userAgent)
          }
          return e.prototype.DetectDevice = function() {
            switch (this.p.getDevice().type) {
              case "mobile":
                return u.MOBILE;
              case "tablet":
                return u.TABLET;
              default:
                return u.DESKTOP
            }
          }, e.prototype.DetectBrowser = function() {
            var e = this.p.getBrowser();
            return {
              name: e.name,
              version: e.version,
              major: e.major
            }
          }, e.prototype.DetectOS = function() {
            var e = this.p.getOS();
            return {
              name: e.name,
              version: e.version
            }
          }, e.prototype.getDeviceType = function(e) {
            var t = (null == e ? void 0 : e.query.ark__platformtype) || u.DESKTOP;
            return ("phone" === t || "mobile" === t) && (t = u.MOBILE), t
          }, e.prototype.getBookmarkType = function() {
            return G.o.isServer ? null : sessionStorage.getItem("arkBookmarkType") ? sessionStorage.getItem("arkBookmarkType") : -1 !== window.location.href.indexOf("".concat(j.yv.UTM_SOURCE, "=desktopIcon")) || this.getDeviceType() && (window.matchMedia("(display-mode: standalone)").matches || !0 === window.navigator.standalone) ? "desktop" : !0 === window.navigator.standalone && "Safari" === this.DetectBrowser().name ? "ios" : window.matchMedia("(display-mode: standalone)").matches ? "Safari" === this.DetectBrowser().name ? "ios" : "android" : ""
          }, e
        }(),
        tm = r(97160),
        tv = r(12306),
        tg = r(21699),
        tb = function() {
          null !== new URLSearchParams(window.location.search).get("perf_meter") && (0, tg.k)("https://cdnjs.cloudflare.com/ajax/libs/stats.js/7/Stats.min.js").then(function() {
            var e = document.querySelector('[class*="Game-canvasBox"]');
            if (e) {
              var t = new Stats,
                r = document.createElement("div"),
                n = document.createElement("h5"),
                i = window.innerWidth < 640;
              n.style.margin = "0 8px", n.innerHTML = "Game FPS", r.style.backgroundColor = "#fff", r.style.position = "absolute", r.style.top = "0", r.style.right = "0", t.domElement.style.zoom = i ? "1" : "2", r.appendChild(n), r.appendChild(t.domElement), e.appendChild(r), requestAnimationFrame(function e() {
                t.update(), requestAnimationFrame(e)
              })
            }
          }).catch(function() {})
        },
        tw = r(42728),
        ty = r(35712),
        tE = r(88487),
        tA = function() {
          return (tA = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
          }).apply(this, arguments)
        },
        tk = function(e, t, r, n) {
          return new(r || (r = Promise))(function(i, o) {
            function a(e) {
              try {
                l(n.next(e))
              } catch (e) {
                o(e)
              }
            }

            function s(e) {
              try {
                l(n.throw(e))
              } catch (e) {
                o(e)
              }
            }

            function l(e) {
              var t;
              e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                e(t)
              })).then(a, s)
            }
            l((n = n.apply(e, t || [])).next())
          })
        },
        tS = function(e, t) {
          var r, n, i, o = {
              label: 0,
              sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
              },
              trys: [],
              ops: []
            },
            a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
          return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
          }), a;

          function s(s) {
            return function(l) {
              var u = [s, l];
              if (r) throw TypeError("Generator is already executing.");
              for (; a && (a = 0, u[0] && (o = 0)), o;) try {
                if (r = 1, n && (i = 2 & u[0] ? n.return : u[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, u[1])).done) return i;
                switch (n = 0, i && (u = [2 & u[0], i.value]), u[0]) {
                  case 0:
                  case 1:
                    i = u;
                    break;
                  case 4:
                    return o.label++, {
                      value: u[1],
                      done: !1
                    };
                  case 5:
                    o.label++, n = u[1], u = [0];
                    continue;
                  case 7:
                    u = o.ops.pop(), o.trys.pop();
                    continue;
                  default:
                    if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
                      o = 0;
                      continue
                    }
                    if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                      o.label = u[1];
                      break
                    }
                    if (6 === u[0] && o.label < i[1]) {
                      o.label = i[1], i = u;
                      break
                    }
                    if (i && o.label < i[2]) {
                      o.label = i[2], o.ops.push(u);
                      break
                    }
                    i[2] && o.ops.pop(), o.trys.pop();
                    continue
                }
                u = t.call(e, o)
              } catch (e) {
                u = [6, e], n = 0
              } finally {
                r = i = 0
              }
              if (5 & u[0]) throw u[1];
              return {
                value: u[0] ? u[1] : void 0,
                done: !0
              }
            }
          }
        },
        t_ = new(function() {
          function e() {
            this.storedObject = {
              settings: tA({}, {
                timer: !0,
                sounds: !0,
                darkMode: !1,
                highlightErrors: !1,
                arrowKeysToChangeDirection: !1,
                skipOverFilledCells: !0,
                jumpBackToBlanksAtTheEndOfWord: !1,
                jumpToNextWordIfItIsFilled: !0,
                highlightConflictingLetters: !0,
                cluesPosition: tE.Z.CluesPosition.RIGHT
              }),
              lastPlayedPuzzleState: null,
              previouslyPlayedScores: {},
              previouslyPlayedPuzzles: {}
            }, this._rawKey = "", this._postfix = "default", this.DEFAULT_DB_VERSION = 1, this.db = null
          }
          return Object.defineProperty(e.prototype, "postfix", {
            set: function(e) {
              this._postfix = e
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(e.prototype, "key", {
            get: function() {
              return "".concat(this._rawKey, "___").concat(this._postfix, "___")
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.connectDB = function() {
            return tk(this, void 0, void 0, function() {
              var e, t = this;
              return tS(this, function(r) {
                return e = this.key, [2, new Promise(function(r) {
                  try {
                    var n = indexedDB.open(e, t.DEFAULT_DB_VERSION);
                    n.onerror = function() {
                      ty.v.error("Why didn't you allow my web app to use IndexedDB?!")
                    }, n.onupgradeneeded = function(t) {
                      ty.v.debug({
                        onupgradeneeded: "onupgrade"
                      });
                      var r = t.target.result;
                      r.objectStoreNames.contains(e) || r.createObjectStore(e)
                    }, n.onsuccess = function(e) {
                      ty.v.debug("onsuccess"), t.db = e.target.result, ty.v.debug(t.db), r()
                    }
                  } catch (e) {
                    ty.v.error("can't open DB", e)
                  }
                })]
              })
            })
          }, e.prototype.getItem = function(e) {
            return tk(this, void 0, void 0, function() {
              var t = this;
              return tS(this, function(r) {
                return this.db ? [2, new Promise(function(r) {
                  try {
                    t.db.transaction(t.key, "readwrite").objectStore(t.key).get(e).onsuccess = function(e) {
                      var t;
                      return r(null == (t = null == e ? void 0 : e.target) ? void 0 : t.result)
                    }
                  } catch (e) {
                    ty.v.error(e)
                  }
                })] : [2, null]
              })
            })
          }, e.prototype.setItem = function(e, t) {
            return tk(this, void 0, void 0, function() {
              var r;
              return tS(this, function(n) {
                switch (n.label) {
                  case 0:
                    if (!this.db) return [2];
                    n.label = 1;
                  case 1:
                    return n.trys.push([1, 3, , 4]), [4, this.db.transaction(this.key, "readwrite").objectStore(this.key).put(t, e)];
                  case 2:
                    return n.sent(), [3, 4];
                  case 3:
                    return r = n.sent(), ty.v.error(r), [3, 4];
                  case 4:
                    return [2]
                }
              })
            })
          }, e.prototype.init = function(e) {
            return tk(this, void 0, void 0, function() {
              var t = this;
              return tS(this, function(r) {
                if (!e || 0 === e.length) throw Error("Key for storage is too short.");
                return this._rawKey = e, [2, new Promise(function(e) {
                  t.connectDB().then(function(t) {
                    return e()
                  }).catch(function(e) {
                    return ty.v.error(e)
                  })
                })]
              })
            })
          }, e.prototype.setScore = function(e, t, r) {
            var n = "".concat(e, "__").concat(r, "__");
            n in this.storedObject.previouslyPlayedScores || (this.storedObject.previouslyPlayedScores[n] = t, this.saveToStorage())
          }, Object.defineProperty(e.prototype, "settings", {
            get: function() {
              return this.storedObject.settings
            },
            set: function(e) {
              this.storedObject.settings = e, this.saveToStorage()
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.saveToStorage = function() {
            return tk(this, void 0, void 0, function() {
              return tS(this, function(e) {
                switch (e.label) {
                  case 0:
                    return [4, this.setItem(this.key, this.storedObject)];
                  case 1:
                    return e.sent(), [2]
                }
              })
            })
          }, e
        }()),
        tT = r(67114);

      function tC(e, t) {
        var r = new Date().toISOString();
        return {
          type: "CONVERTED_DATA",
          payload: {
            original_data: e,
            data_type: t,
            converted_at: r,
            message: "Data was automatically converted from ".concat(t)
          },
          metadata: {
            conversion_type: "auto",
            original_type: typeof e,
            timestamp: r
          }
        }
      }(o = c || (c = {}))[o.TEST_READY = 1] = "TEST_READY", o[o.GAME_START = 2] = "GAME_START", o[o.INTERACT = 3] = "INTERACT", o[o.SCORE_CHANGED = 4] = "SCORE_CHANGED", o[o.GAME_END = 5] = "GAME_END", o[o.PAUSE_READY = 6] = "PAUSE_READY", o[o.GAME_PAUSE = 7] = "GAME_PAUSE", o[o.GAME_RESUME = 8] = "GAME_RESUME", o[o.GEMS_UPDATE = 9] = "GEMS_UPDATE", o[o.AD_INTERSTITIAL_REQUESTED = 10] = "AD_INTERSTITIAL_REQUESTED", o[o.AD_INTERSTITIAL_SHOWN = 11] = "AD_INTERSTITIAL_SHOWN", o[o.AD_REWARDED_REQUESTED = 12] = "AD_REWARDED_REQUESTED", o[o.AD_REWARDED_SHOWN = 13] = "AD_REWARDED_SHOWN", o[o.LEVEL_START = 14] = "LEVEL_START", o[o.LEVEL_END = 15] = "LEVEL_END", (a = d || (d = {}))[a.CONSOLE = 1] = "CONSOLE", a[a.GOOGLE = 2] = "GOOGLE", a[a.APP_INSIGHTS = 3] = "APP_INSIGHTS", a[a.ALL = 1e3] = "ALL";
      var tO = (s = function(e, t) {
          return (s = Object.setPrototypeOf || ({
            __proto__: []
          }) instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
          })(e, t)
        }, function(e, t) {
          if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

          function r() {
            this.constructor = e
          }
          s(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        }),
        tx = function() {
          return (tx = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
          }).apply(this, arguments)
        },
        tR = function(e, t, r, n) {
          return new(r || (r = Promise))(function(i, o) {
            function a(e) {
              try {
                l(n.next(e))
              } catch (e) {
                o(e)
              }
            }

            function s(e) {
              try {
                l(n.throw(e))
              } catch (e) {
                o(e)
              }
            }

            function l(e) {
              var t;
              e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                e(t)
              })).then(a, s)
            }
            l((n = n.apply(e, t || [])).next())
          })
        },
        tI = function(e, t) {
          var r, n, i, o = {
              label: 0,
              sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
              },
              trys: [],
              ops: []
            },
            a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
          return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
          }), a;

          function s(s) {
            return function(l) {
              var u = [s, l];
              if (r) throw TypeError("Generator is already executing.");
              for (; a && (a = 0, u[0] && (o = 0)), o;) try {
                if (r = 1, n && (i = 2 & u[0] ? n.return : u[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, u[1])).done) return i;
                switch (n = 0, i && (u = [2 & u[0], i.value]), u[0]) {
                  case 0:
                  case 1:
                    i = u;
                    break;
                  case 4:
                    return o.label++, {
                      value: u[1],
                      done: !1
                    };
                  case 5:
                    o.label++, n = u[1], u = [0];
                    continue;
                  case 7:
                    u = o.ops.pop(), o.trys.pop();
                    continue;
                  default:
                    if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
                      o = 0;
                      continue
                    }
                    if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                      o.label = u[1];
                      break
                    }
                    if (6 === u[0] && o.label < i[1]) {
                      o.label = i[1], i = u;
                      break
                    }
                    if (i && o.label < i[2]) {
                      o.label = i[2], o.ops.push(u);
                      break
                    }
                    i[2] && o.ops.pop(), o.trys.pop();
                    continue
                }
                u = t.call(e, o)
              } catch (e) {
                u = [6, e], n = 0
              } finally {
                r = i = 0
              }
              if (5 & u[0]) throw u[1];
              return {
                value: u[0] ? u[1] : void 0,
                done: !0
              }
            }
          }
        },
        tL = function(e, t) {
          var r = {};
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
          return r
        },
        tD = function(e, t, r) {
          if (r || 2 == arguments.length)
            for (var n, i = 0, o = t.length; i < o; i++) !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
          return e.concat(n || Array.prototype.slice.call(t))
        },
        tP = function() {
          return "u" > typeof window && (null == window ? void 0 : window.dispatchEvent(new Event(l.BACK_TO_GAME)))
        },
        tM = function(e, t) {
          if (void 0 === t && (t = !1), null === e) return (0, tv.AO)();
          (t ? tv.Sb : tv.G_)(e ? "success" : "fail"), setTimeout(tv.AO, 200)
        },
        tN = function(e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return r.state = {
              isSdkLoaded: !1,
              isGameLoading: !0,
              isIframeLoaded: !1,
              dbName: "",
              isArkadiumSdkGame: r.isArkadiumSdkGame,
              gameRenderingUrl: null,
              iframeSourceCodeSet: null
            }, r.gameSubject = new tm.O, r.unitContainerRef = h.createRef(), r.canvasContainerRef = h.createRef(), r.doGameEndTrigger = !0, r.doGameScoresTrigger = !0, r.iframeRef = null, r.setIframeRef = function(e) {
              var t, n;
              console.log("RACE: setIframeRef", e), e && (console.log("RACE: setIframeRef:if:updateWinReference"), r.iframeRef = e, null == (t = r.getArkadiumSdkInstance()) || t.updateWinReference(null == (n = r.iframeRef) ? void 0 : n.contentWindow))
            }, r.deviceDetector = new tp, r.postMessageToIframe = function(e) {
              return tR(r, void 0, void 0, function() {
                var t, r, n = this;
                return tI(this, function(i) {
                  return t = this === null || void 0 === this ? void 0 : this.iframeRef, r = JSON.parse(JSON.stringify(e)), setTimeout(function() {
                    var i, o;
                    ty.v.log("GRM postMessage UNIT-OUT", e, t, r), null == (o = null == (i = null == t ? void 0 : t.contentWindow) ? void 0 : i.postMessage) || o.call(i, r, n.iframeSourceCode.replace(/\?.*/gi, "") || "*")
                  }, 5), [2]
                })
              })
            }, r.onMessage = function(e) {
              try {
                e.data && e.data.actionName === R.W.SET_GAME_TYPE && r.onResize()
              } catch (e) {
                ty.v.error(e)
              }
            }, r.onGameEvent = function(e) {
              return tR(r, void 0, void 0, function() {
                var t = this;
                return tI(this, function(r) {
                  return setTimeout(function() {
                    return tR(t, void 0, void 0, function() {
                      var t, r;
                      return tI(this, function(n) {
                        switch (n.label) {
                          case 0:
                            return [4, this.onGameEventBasic(e)];
                          case 1:
                            return n.sent(), [4, null == (r = null == (t = this.props) ? void 0 : t.onPlatformSpecificEvent) ? void 0 : r.call(t, e)];
                          case 2:
                            return n.sent(), [2]
                        }
                      })
                    })
                  }, 0), [2]
                })
              })
            }, r.onGameEventBasic = function(e) {
              return tR(r, void 0, void 0, function() {
                var t, r, n, i, o, a, s, l, u, c, d, h, f = this;
                return tI(this, function(p) {
                  if (r = (t = this.props).onScoreChange, n = t.onGameEnd, i = t.onRewardStart, o = t.onInterstitialStart, u = (l = (a = t.isIframeGame && ((null == (d = this.iframeSourceCode) ? void 0 : d.startsWith(e.origin)) || e.origin === window.location.origin) && (s = function(e) {
                      if (null == e) return null;
                      if ("string" == typeof e) {
                        var t = e.trim();
                        if (!t) return null;
                        if (t.startsWith("subscribe:")) return {
                          type: "AUTH_API_EVENT",
                          payload: {
                            auth_method: "subscribe",
                            auth_method_args: function(e) {
                              if ("string" == typeof e && e.trim().startsWith("subscribe:")) {
                                var t = e.trim().match(/^subscribe:\s*(.+)$/);
                                return t ? t[1].trim() : null
                              }
                              return null
                            }(t)
                          }
                        };
                        if (t.startsWith("{") || t.startsWith("[")) try {
                          var r = JSON.parse(t);
                          if ("object" == typeof r && null !== r) return r;
                          return null
                        } catch (e) {
                          return tC(t, "json_parse_error")
                        }
                        return tC(t, "string_data")
                      }
                      return "number" == typeof e || "boolean" == typeof e ? tC(e, "primitive_data") : "object" == typeof e && null !== e ? e : tC(e, "unknown_data")
                    }(e.data)) ? s : e) || {}).type, c = l.payload, !u) return [2];
                  try {
                    setTimeout(function() {
                      return tR(f, void 0, void 0, function() {
                        var t, s, l, d, h, f, p, m, v, g, b, w, y, E, A, k, S, _, T, C, O, x, R, I, D, P, M, N, j, G, U, F, z, B, W, H, q, $, V;
                        return tI(this, function(K) {
                          switch (K.label) {
                            case 0:
                              switch (t = "", ty.v.log("GRM postMessage UNIT-IN", a, e), console.log("RACE: START:onGameEventBasic", u), u) {
                                case L.c.GAME_LOAD_TIMING:
                                  return [3, 1];
                                case L.c.GAME_LOAD_ERROR:
                                  return [3, 2];
                                case L.c.TEST_READY:
                                  return [3, 3];
                                case L.c.UPDATE_LOCAL_STORAGE:
                                  return [3, 4];
                                case L.c.GAME_START:
                                  return [3, 5];
                                case L.c.EVENT_CHANGE:
                                  return [3, 6];
                                case L.c.CHANGE_SCORE:
                                  return [3, 7];
                                case L.c.GAME_END:
                                  return [3, 8];
                                case L.c.REWARD_START:
                                  return [3, 9];
                                case L.c.INTERSTITIAL_START:
                                  return [3, 10];
                                case L.c.SET_LS_ITEM:
                                  return [3, 11];
                                case L.c.REMOVE_LS_ITEM:
                                  return [3, 12];
                                case L.c.AD_REFRESH:
                                  return [3, 13];
                                case L.c.PURCHASE_UPDATE:
                                  return [3, 14];
                                case L.c.PURCHASE_REQUEST:
                                  return [3, 15];
                                case L.c.UPDATE_INDEXED_DB:
                                  return [3, 16];
                                case L.c.AUTH_API_EVENT:
                                  return [3, 18]
                              }
                              return [3, 19];
                            case 1:
                              return ty.v.log("onGameEventBasic:GAME_LOAD_TIMING", c), performance.mark("GAME_LOAD:SCRIPT_END"), performance.getEntriesByName("GAME_LOAD:START").length > 0 && (s = performance.measure("GAME_ONLOAD", "GAME_LOAD:START", "GAME_LOAD:SCRIPT_END").duration, null == (E = null == (y = null == (w = this.props) ? void 0 : w.gameLoadSpanRef) ? void 0 : y.current) || E.setAttributes({
                                "grm.game.shell.loaded.duration_ms": s,
                                scriptUrl: c.scriptUrl
                              }), null == (k = null == (A = window.__RUM__) ? void 0 : A.captureMessage) || k.call(A, "grm.game.shell.loaded.duration_ms", {
                                tags: {
                                  "grm.game.shell.loaded.duration_ms": s,
                                  "grm.game.shell.loaded.script_url": c.scriptUrl
                                }
                              })), performance.clearMarks("GAME_LOAD:SCRIPT_END"), [3, 20];
                            case 2:
                              return ty.v.error("onGameEventBasic:GAME_LOAD_ERROR", c), null == (S = window.__RUM__) || S.captureException(c, {
                                tags: {
                                  "grm.game.eventBasicError.GAME_LOAD_ERROR": "true",
                                  "grm.game.eventBasicError.GAME_LOAD_ERROR.message": c.message
                                }
                              }), [3, 20];
                            case 3:
                              return console.log("RACE: START:onGameEventBasic:TEST_READY"), t = "ready", this.setState({
                                isGameLoading: !1
                              }), null == (T = null == (_ = this.props) ? void 0 : _.onGameTestReady) || T.call(_), null == (O = null == (C = this.props) ? void 0 : C.onLoadingEnd) || O.call(C, {
                                isSdkGame: !1
                              }), console.log("RACE: END:onGameEventBasic:TEST_READY"), [3, 20];
                            case 4:
                              return c && Object.keys(c).forEach(function(e) {
                                tv.sj.setItem(e, c[e])
                              }), [3, 20];
                            case 5:
                              return t = "start", null == (R = null == (x = this.props) ? void 0 : x.onGameStart) || R.call(x), [3, 20];
                            case 6:
                              return null == (D = null == (I = this === null || void 0 === this ? void 0 : this.props) ? void 0 : I.doAdsRefresh) || D.call(I), [3, 20];
                            case 7:
                              return (l = a.forceUpdate) || !this.doGameScoresTrigger ? l && r && r(a) : (this.doGameScoresTrigger = !1, r && r(a)), [3, 20];
                            case 8:
                              return this.doGameEndTrigger && (null == (M = null == (P = this.props) ? void 0 : P.doAdsRefresh) || M.call(P), this.doGameEndTrigger = !1), n && n(a), [3, 20];
                            case 9:
                              return i(c), [3, 20];
                            case 10:
                              return o(c), [3, 20];
                            case 11:
                              return h = (d = c || {}).key, f = d.value, h && f && tv.sj.setItem(h, f), [3, 20];
                            case 12:
                              return (h = (a.payload || {}).key) && tv.sj.removeItem(h), [3, 20];
                            case 13:
                              return null == (j = null == (N = this.props) ? void 0 : N.doAdsRefresh) || j.call(N), [3, 20];
                            case 14:
                              return null == (G = this === null || void 0 === this ? void 0 : this.props) || G.doUpdateGemsAmount(), [3, 20];
                            case 15:
                              return this.gamePurchaseEventHandler.bind(this)(a), [3, 20];
                            case 16:
                              return [4, this.updateIndexedDB(c)];
                            case 17:
                              return K.sent(), [3, 20];
                            case 18:
                              switch (m = (p = c || {}).auth_method, v = p.auth_method_args, g = this.props.authApiService, v ? null == (U = null == g ? void 0 : g[m]) || U.call.apply(U, tD([g], v, !1)) : null == (F = null == g ? void 0 : g[m]) || F.call(g), m) {
                                case "openWidget":
                                  return [2, !this.props.user && (null == (B = null == (z = this === null || void 0 === this ? void 0 : this.props) ? void 0 : z.doOpenMenuLogin) ? void 0 : B.call(z))];
                                case "subscribeToUserAuthStatus":
                                  (null == (W = this.props) ? void 0 : W.user) && this.postMessageToIframe({
                                    type: L.c.AUTH_API_EVENT,
                                    payload: {
                                      auth_method: m,
                                      payload: tx(tx({}, this.props.user), {
                                        subscriptionId: this.props.subscriptionId,
                                        subscriptionPlan: this.props.subscriptionPlan,
                                        localStorage: tx({}, JSON.parse(JSON.stringify(window.localStorage)))
                                      })
                                    }
                                  })
                              }
                              return [3, 20];
                            case 19:
                              return [3, 20];
                            case 20:
                              return t && (null == (q = null == (H = window.__RUM__) ? void 0 : H.addBreadcrumb) || q.call(H, {
                                category: "grm",
                                message: "GRM handled [".concat(t, "] game legacy event."),
                                level: "debug"
                              }), null == (V = null == ($ = window.__RUM__) ? void 0 : $.captureMessage) || V.call($, "grm.game.legacy.".concat(t), {
                                tags: ((b = {})["grm.game.legacy.".concat(t)] = "true", b)
                              })), [2]
                          }
                        })
                      })
                    }, 5)
                  } catch (t) {
                    null == (h = window.__RUM__) || h.captureException(t, {
                      tags: {
                        "grm.game.eventBasicError": u,
                        "grm.game.eventBasicError.payload": JSON.stringify(e)
                      }
                    }), console.log("RACE: END:onGameEventBasic:ERROR", t), setTimeout(function() {
                      f.gameSubject.dispatch({
                        type: L.c.GAME_RESUME
                      }, f.props.isIframeGame ? f.postMessageToIframe : null), f.props.isIframeGame && f.postMessageToIframe({
                        type: L.c.GAME_RESUME
                      })
                    }, 1e3)
                  }
                  return [2]
                })
              })
            }, r.gamePurchaseRequestsQueue = [], r.gamePurchaseEventHandler = function(e) {
              var t, n, i, o = e.payload.payload;
              r.gamePurchaseRequestsQueue.push(o), (0, tv.Sb)("pending"), tv.sj.addStorageListening(((t = {})[D.g.GAME_PURCHASE_REQUEST] = r.gamePurchaseStorageHandler, t)), null == (i = null == (n = r.props) ? void 0 : n.doOpenMenuPurchase) || i.call(n)
            }, r.gamePurchaseStorageHandler = function(e) {
              var t = e.newValue;
              ty.v.log("GRM: gamePurchaseStorageHandler", t), "success" === t ? r.gamePurchaseEventSendResponse(!0) : "fail" === t && r.gamePurchaseEventSendResponse(!1), r.props.doCloseMenu(), r.gamePurchaseRequestsQueue = [], (0, tv.AO)(), r.postMessageToIframe({
                type: L.c.GAME_RESUME
              }), tv.sj.removeStorageListening(D.g.GAME_PURCHASE_REQUEST)
            }, r.gamePurchaseEventSendResponse = function(e) {
              var t, n = tD([], r.gamePurchaseRequestsQueue, !0);
              null == (t = null == n ? void 0 : n.forEach) || t.call(n, function(t, i) {
                var o, a, s, l = i === n.length - 1 && e,
                  u = {
                    type: L.c.PURCHASE_RESPONSE,
                    payload: {
                      payload: t,
                      result: l
                    }
                  },
                  c = r.getArkadiumSdkInstance();
                null == (a = null == (o = null == c ? void 0 : c.purchases) ? void 0 : o.ui) || a.shopWindowClosed(!!l), null == (s = null == c ? void 0 : c.host) || s.purchaseFormClosed(!!l), r.gameSubject.dispatch(u, r.props.isIframeGame ? r.postMessageToIframe : null), r.props.isIframeGame && r.postMessageToIframe(u)
              })
            }, r.onResize = function() {
              var e, t;
              r.onResizeBasic(), null == (t = null == (e = r.props) ? void 0 : e.onResize) || t.call(e)
            }, r.onResizeBasic = function() {}, r.onBackToGame = function() {
              tM(!1, !1), r.postMessageToIframe({
                type: L.c.GAME_RESUME
              }), tv.sj.removeStorageListening(D.g.GAME_PURCHASE_REQUEST)
            }, r.getIncognitoSdkOptions = function() {
              return tR(r, void 0, void 0, function() {
                var e, t, r, n, i, o, a;
                return tI(this, function(s) {
                  return this.props.isServer ? [2, {
                    fpVisitorId: "unknown",
                    fpIncognito: "unknown"
                  }] : (e = (P.O.getArkCookie("ai_user") || "|").split("|")[0], r = null == (t = null == (a = null == (o = null == window ? void 0 : window.STORE) ? void 0 : o.getState) ? void 0 : a.call(o).user) ? void 0 : t.uid, n = M.m.detected, i = this.deviceDetector.DetectBrowser(), [2, tx(tx(tx(tx(tx({}, e ? {
                    aiUserId: e
                  } : {}), n), r ? {
                    userEagleId: r
                  } : {}), N.AppInsightService.getAnalyticsData()), {
                    ClientBrowser: i ? "".concat(i.name, " ").concat(i.version) : "Unknown Browser"
                  })])
                })
              })
            }, r.initDB = function() {
              return tR(r, void 0, void 0, function() {
                var e, t;
                return tI(this, function(r) {
                  switch (r.label) {
                    case 0:
                      return e = this.props.game.slug, t = "".concat("____ark_game_crossword____", "___").concat(e, "___"), this.setState({
                        dbName: t
                      }), t_.postfix = e, ty.v.debug("before init"), [4, t_.init("____ark_game_crossword____")];
                    case 1:
                      return r.sent(), [2, t]
                  }
                })
              })
            }, r.updateIndexedDB = function(e) {
              return tR(r, void 0, void 0, function() {
                return tI(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return ty.v.debug("update indexed db in container ", e), [4, t_.setItem(this.state.dbName, e).then(function(e) {
                        return ty.v.debug(e)
                      })];
                    case 1:
                      return t.sent(), [2]
                  }
                })
              })
            }, r.getIndexedDBData = function(e) {
              return tR(r, void 0, void 0, function() {
                return tI(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return [4, t_.getItem(e)];
                    case 1:
                      return [2, t.sent()]
                  }
                })
              })
            }, r.getIframeAllowOptions = function() {
              var e;
              return "iframeAllowOptions" in r.props.game ? r.props.game.iframeAllowOptions : "meta" in r.props.game && (null == (e = r.props.game.meta) ? void 0 : e.iframeAllowOptions) !== void 0 ? r.props.game.meta.iframeAllowOptions : void 0
            }, r.onSdkIframeLoad = function() {
              console.log("RACE: START:onSdkIframeLoad"), r.props.isServer || (r.setState({
                isIframeLoaded: !0,
                isGameLoading: !1
              }), console.log("RACE: END:onSdkIframeLoad"))
            }, r.onIframeLoad = function() {
              return tR(r, void 0, void 0, function() {
                var e, t, r, n, i, o, a, s, l, u, c, d, h, f, p, m, v, g, b, w, y, E, A, k, S, _, T, C, O, x, R, I, D;
                return tI(this, function(P) {
                  switch (P.label) {
                    case 0:
                      if (!this.props.isStateGamePlaying) return [2];
                      P.label = 1;
                    case 1:
                      if (P.trys.push([1, 9, , 10]), null == (v = this.getArkadiumSdkInstance()) || v.updateWinReference(null == (g = this.iframeRef) ? void 0 : g.contentWindow), console.log("RACE: START:onIframeLoad"), performance.mark("GAME_LOAD:ONLOAD:START"), performance.getEntriesByName("GAME_LOAD:START").length > 0 && (e = performance.measure("GAME_ONLOAD", "GAME_LOAD:START", "GAME_LOAD:ONLOAD:START").duration, null == (y = null == (w = null == (b = this.props) ? void 0 : b.gameLoadSpanRef) ? void 0 : w.current) || y.setAttributes({
                          "grm.game.onload:start.duration_ms": e,
                          scriptUrl: "".concat(this.gameAssetOriginUrl, "main.min.js")
                        }), null == (A = null == (E = window.__RUM__) ? void 0 : E.captureMessage) || A.call(E, "grm.game.onload.duration_ms", {
                          tags: {
                            "grm.game.onload.duration_ms": e,
                            "grm.game.onload.script_url": "".concat(this.gameAssetOriginUrl, "main.min.js")
                          }
                        })), this.props.isServer) return [2];
                      return t = this.postMessageToIframe, this.setState({
                        isIframeLoaded: !0
                      }), this.state.gameRenderingUrl && (this.setState({
                        isGameLoading: !1
                      }), null == (S = null == (k = this.props) ? void 0 : k.onLoadingEnd) || S.call(k, {
                        isSdkGame: !1
                      })), [4, this.prepareOptionsForGame()];
                    case 2:
                      if (r = P.sent(), n = {
                          type: L.c.UPDATE_LOCAL_STORAGE,
                          payload: tx(tx({}, JSON.parse(JSON.stringify(window.localStorage))), {
                            passedCookiesData: "".concat(document.cookie)
                          })
                        }, o = (i = this.props).arenaDomain, a = i.game, s = i.arenaEnvironment, l = null == (T = null == (_ = null == a ? void 0 : a.slug) ? void 0 : _.includes) ? void 0 : T.call(_, "crossword"), u = null, !l) return [3, 7];
                      return [4, this.initDB()];
                    case 3:
                      if (c = P.sent(), !l) return [3, 5];
                      return [4, this.getIndexedDBData(c)];
                    case 4:
                      return d = null != (C = P.sent()) ? C : {}, [3, 6];
                    case 5:
                      d = {}, P.label = 6;
                    case 6:
                      u = d, ty.v.debug({
                        arenaIndexedDB: u
                      }), P.label = 7;
                    case 7:
                      return [4, null == (x = (O = this.props).getAuthDataForIframe) ? void 0 : x.call(O)];
                    case 8:
                      return h = P.sent(), f = {
                        type: L.c.PASS_GAME_DATA,
                        payload: tx(tx({
                          localstorage: tx(tx({}, JSON.parse(JSON.stringify(window.localStorage))), {
                            passedCookiesData: "".concat(document.cookie)
                          }),
                          options: r,
                          game: a,
                          arenaName: o
                        }, u ? {
                          arenaIndexedDB: u
                        } : {}), {
                          eaglePassedInGame: this.props.eaglePassedInGame,
                          arenaEnvironment: s,
                          eagleAuthData: h
                        })
                      }, t(n), t(f), this.rumTrackGameLoad(), console.log("RACE: END:onIframeLoad"), performance.mark("GAME_LOAD:ONLOAD:END"), performance.getEntriesByName("GAME_LOAD:START").length > 0 && (p = performance.measure("GAME_ONLOAD", "GAME_LOAD:START", "GAME_LOAD:ONLOAD:END").duration, this.props.gameLoadSpanRef.current.setAttributes({
                        "grm.game.onload:end.duration_ms": p,
                        scriptUrl: "".concat(this.gameAssetOriginUrl, "main.min.js")
                      }), null == (I = null == (R = window.__RUM__) ? void 0 : R.captureMessage) || I.call(R, "grm.game.onload.duration_ms", {
                        tags: {
                          "grm.game.onload.duration_ms": p,
                          "grm.game.onload.script_url": "".concat(this.gameAssetOriginUrl, "main.min.js")
                        }
                      })), performance.clearMarks("GAME_LOAD:ONLOAD:START"), performance.clearMarks("GAME_LOAD:ONLOAD:END"), [3, 10];
                    case 9:
                      return m = P.sent(), ty.v.error("onIframeLoad ", m), null == (D = window.__RUM__) || D.captureException(m, {
                        tags: {
                          "grm.game.onIframeLoad.error": "true",
                          "grm.game.onIframeLoad.error.message": null == m ? void 0 : m.message
                        }
                      }), [3, 10];
                    case 10:
                      return [2]
                  }
                })
              })
            }, r.onArkadiumSdkEvent = function(e, t) {
              var n, i, o, a, s, l, u, d, h, f, p, m, v, g, b, w, y, E, A, k, S, _, T, C, O, x, R, I, L = r.props.onScoreChange,
                D = "";
              switch (console.log("RACE: ArkadiumSdk EVENT", e), e) {
                case c.TEST_READY:
                  console.log("RACE: START:onArkadiumSdkEvent:TEST_READY"), D = "ready", ty.v.debug(e), r.setState({
                    isGameLoading: !1
                  }), null == (o = null == (i = r.props) ? void 0 : i.onSdkGameTestReady) || o.call(i), null == (s = null == (a = r.props) ? void 0 : a.onLoadingEnd) || s.call(a, {
                    isSdkGame: !0
                  }), console.log("RACE: END:onArkadiumSdkEvent:TEST_READY");
                  break;
                case c.GAME_START:
                  D = "start", ty.v.debug(e), null == (u = null == (l = r.props) ? void 0 : l.onSdkGameStart) || u.call(l);
                  break;
                case c.INTERACT:
                  ty.v.debug(e), null == (h = null == (d = null == r ? void 0 : r.props) ? void 0 : d.onSdkEventChange) || h.call(d);
                  break;
                case c.SCORE_CHANGED:
                  ty.v.debug(e, t), L && L({
                    payload: t
                  }), null == (p = null == (f = null == r ? void 0 : r.props) ? void 0 : f.onSdkScoreChange) || p.call(f, e, t);
                  break;
                case c.GAME_END:
                  break;
                case c.GEMS_UPDATE:
                  ty.v.debug(e), null == (m = null == r ? void 0 : r.props) || m.doUpdateGemsAmount();
                  break;
                case c.AD_INTERSTITIAL_REQUESTED:
                  ty.v.debug(e), null == (g = null == (v = null == r ? void 0 : r.props) ? void 0 : v.onInterstitialAdRequested) || g.call(v);
                  break;
                case c.AD_INTERSTITIAL_SHOWN:
                  ty.v.debug(e), null == (w = null == (b = null == r ? void 0 : r.props) ? void 0 : b.onInterstitialAdShown) || w.call(b);
                  break;
                case c.AD_REWARDED_REQUESTED:
                  ty.v.debug(e), null == (E = null == (y = null == r ? void 0 : r.props) ? void 0 : y.onRewardedAdRequested) || E.call(y);
                  break;
                case c.AD_REWARDED_SHOWN:
                  ty.v.debug(e), null == (k = null == (A = null == r ? void 0 : r.props) ? void 0 : A.onRewardedAdShown) || k.call(A);
                  break;
                case c.LEVEL_START:
                  ty.v.debug(e), null == (_ = null == (S = null == r ? void 0 : r.props) ? void 0 : S.onSdkLevelStart) || _.call(S, t);
                  break;
                case c.LEVEL_END:
                  ty.v.debug(e), null == (C = null == (T = null == r ? void 0 : r.props) ? void 0 : T.onSdkLevelEnd) || C.call(T, t)
              }
              D && (null == (x = null == (O = window.__RUM__) ? void 0 : O.addBreadcrumb) || x.call(O, {
                category: "grm",
                message: "GRM handled [".concat(D, "] game sdk event."),
                level: "debug"
              }), null == (I = null == (R = window.__RUM__) ? void 0 : R.captureMessage) || I.call(R, "grm.game.sdk.".concat(D), {
                tags: ((n = {})["grm.game.sdk.".concat(D)] = "true", n)
              }))
            }, r.onOpenAuthRequest = function(e) {
              var t, n;
              e && (null == (n = null == (t = null == r ? void 0 : r.props) ? void 0 : t.doOpenMenuLogin) || n.call(t))
            }, r.loadArkadiumSdk = function() {
              console.log("RACE: START:loadArkadiumSdk");
              var e, t = r.props.arenaEnvironment === tw.Q.DEV;
              if (window.ArkadiumArenaSDK) ty.v.log("SDK already loaded."), e = Promise.resolve();
              else {
                var n = "https://developers.arkadium.com/cdn/sdk/".concat(t ? "dev/" : "", "v").concat(2, "/arena-sdk.js");
                ty.v.log("SDK not loaded."), e = (0, tg.k)(n)
              }
              return e.then(function() {
                return tR(r, void 0, void 0, function() {
                  var e, t, r, n, i, o, a, s, l, u, h, f, p, m, v, g = this;
                  return tI(this, function(b) {
                    switch (b.label) {
                      case 0:
                        var w;
                        if (!window.ArkadiumArenaSDK) return [2, Promise.resolve()];
                        return e = "dev" === (w = this.props.arenaEnvironment) ? "DEV" : "staging" === w ? "STAGING" : "PROD", [4, window.ArkadiumArenaSDK.getInstance(e, !0)];
                      case 1:
                        return [4, (t = b.sent()).initialize(e, !1, null == (s = this.props.authApiService) ? void 0 : s.getSessionStorage())];
                      case 2:
                        if (b.sent(), t.lifecycle.subscribe(function(e, r) {
                            return tR(g, void 0, void 0, function() {
                              var n, i, o;
                              return tI(this, function(a) {
                                switch (a.label) {
                                  case 0:
                                    if (this.onArkadiumSdkEvent(e, r), !(e === c.TEST_READY && (null == (i = t.analytics) ? void 0 : i.setFingerprintData))) return [3, 3];
                                    if (console.log("RACE: START:onArkadiumSdkEvent:TEST_READY:setFingerprintData"), !(!(n = M.m.detected) || "unknown" === n.fpVisitorId)) return [3, 2];
                                    return [4, M.m.init()];
                                  case 1:
                                    n = a.sent(), a.label = 2;
                                  case 2:
                                    null == (o = t.analytics) || o.setFingerprintData({
                                      fpVisitorId: null == n ? void 0 : n.fpVisitorId,
                                      fpIncognito: null == n ? void 0 : n.fpIncognito
                                    }), console.log("RACE: END:onArkadiumSdkEvent:TEST_READY:setFingerprintData"), a.label = 3;
                                  case 3:
                                    return [2]
                                }
                              })
                            })
                          }), "hasGems" in this.props.game ? t.wallet.setGemsSupported(this.props.game.hasGems) : "meta" in this.props.game && (null == (l = this.props.game.meta) ? void 0 : l.hasGems) !== void 0 && t.wallet.setGemsSupported(this.props.game.meta.hasGems), null == (u = t.auth) || u.onOpenAuthForm(this.onOpenAuthRequest), null == (h = t.host) || h.onOpenPurchaseForm(function(e) {
                            g.gamePurchaseEventHandler({
                              type: L.c.PURCHASE_REQUEST,
                              payload: e
                            })
                          }), r = null == (p = (f = this.props).getAnalyticsProvidersState) ? void 0 : p.call(f))
                          for (n = 0, i = Object.entries(r); n < i.length; n++) a = (o = i[n])[0], o[1] || null == (v = null == (m = t.analytics) ? void 0 : m.disableProvider) || v.call(m, d[a]);
                        return this.getArkadiumSdkInstance = function() {
                          return t
                        }, console.log("RACE: END:loadArkadiumSdk"), [2]
                    }
                  })
                })
              }).catch(function(e) {
                var t, r;
                e.name = "[grm.game.error] ".concat(e.name || "Error"), ty.v.error("ARKADIUM_SDK_ERROR init", e), null == (r = null == (t = window.__RUM__) ? void 0 : t.captureException) || r.call(t, JSON.stringify(e, Object.getOwnPropertyNames(e)), {
                  tags: {
                    "grm.game.sdk.error": "true",
                    "grm.game.sdk.error.message": e.message
                  }
                })
              })
            }, r.loadGameSdk = function() {
              return tR(r, void 0, void 0, function() {
                var e, t, r = this;
                return tI(this, function(n) {
                  switch (n.label) {
                    case 0:
                      return e = this.gameAssetOriginUrl, [4, this.prepareOptionsForGame()];
                    case 1:
                      return t = n.sent(), (0, tg.k)("".concat(e, "main.min.js")).then(function() {
                        var e, n;
                        try {
                          var i = window.__arenax_v1__["".concat(r.props.game.sdkName, "Game")].game;
                          i.register(r.gameSubject, t), window.__analyticsProvidersState__ = t.analyticsProvidersState, null == (n = null == (e = r.props) ? void 0 : e.doSetGameObservable) || n.call(e, r.gameSubject), i.render(0, 0, "game-canvas")
                        } catch (e) {
                          ty.v.error(e)
                        }
                      }), [2]
                  }
                })
              })
            }, r.prepareOptionsForGame = function() {
              return tR(r, void 0, void 0, function() {
                var e, t, r, n, i, o, a, s, l, u, c, d, h, f, p, m, v;
                return tI(this, function(g) {
                  switch (g.label) {
                    case 0:
                      return e = this.props.game || {}, t = this.props.currentLang, r = null == (c = this.props.eaglePassedInGame) || c, n = this.props.authApiService, i = this.props.paymentApiService, o = {
                        "@arkadium/eagle-user-client": n,
                        "@arkadium/eagle-virtual-items-api-client": this.props.virtualItemsApiService,
                        "@arkadium/eagle-payments-api-client": i,
                        userGameDataApi: this.props.userGameDataApiService,
                        arenaEnvironment: this.props.arenaEnvironment
                      }, a = this.gameAssetOriginUrl, [4, this.getIncognitoSdkOptions()];
                    case 1:
                      return s = g.sent(), l = tx({
                        assetOriginUrl: a,
                        configUrl: this.gameExternalConfigUrl,
                        locale: t,
                        rewardVideoAvailable: null == (d = this.props.rewardVideoAvailable) || d,
                        interstitialVideoAvailable: null == (h = this.props.interstitialVideoAvailable) || h,
                        eventList: [],
                        arenaName: this.props.arenaDomain,
                        analyticsProvidersState: null == (p = (f = this.props).getAnalyticsProvidersState) ? void 0 : p.call(f)
                      }, s), r && !this.props.isIframeGame && (l.enviroment = o), this.props.isIframeGame && (u = this.props.isServer ? null : null == (v = null == (m = null == window ? void 0 : window.STORE) ? void 0 : m.getState()) ? void 0 : v.abTestsValue, l.sdkName = e.sdkName, l.abVariations = u), [2, l]
                  }
                })
              })
            }, r
          }
          return tO(t, e), Object.defineProperty(t.prototype, "gameId", {
            get: function() {
              return "id" in this.props.game ? String(this.props.game.id) : null
            },
            enumerable: !1,
            configurable: !0
          }), t.prototype.getAssetOriginUrl = function(e, t) {
            var r = this.props.arenaDomain.includes("aarp") ? tT.l.PATH_TO_GAMES_URL_AARP : tT.l.PATH_TO_GAMES_URL;
            return "".concat(r).concat(e, "/").concat(t, "/")
          }, Object.defineProperty(t.prototype, "gameAssetOriginUrl", {
            get: function() {
              var e, t = new URLSearchParams(window.location.search),
                r = this.props.game,
                n = null != (e = t.get("gameApi")) ? e : t.get("gameAPI");
              if (n) return n;
              var i = t.get("version"),
                o = "JavaScript" === r.renderingType && r.sdkName ? r.sdkName : r.slug;
              return i ? this.getAssetOriginUrl(o, i) : this.getAssetOriginUrl(o, r.version)
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "gameExternalConfigUrl", {
            get: function() {
              return "externalConfigUrl" in this.props.game ? this.props.game.externalConfigUrl : ""
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "isArkadiumSdkGame", {
            get: function() {
              return !!new URLSearchParams(window.location.search).get("__sdk_demo_mode")
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "iframeSourceCode", {
            get: function() {
              if ("u" < typeof window) return "";
              if (this.state.isArkadiumSdkGame) return tT.l.IFRAME_DEMO_MODE_URL;
              if (this.props.externalRenderingUrl && "" !== this.props.externalRenderingUrl) {
                var e, t, r, n = new URLSearchParams,
                  i = new URLSearchParams(window.location.search);
                n.set("useSDKDevCDN", null != (e = i.get("useSDKDevCDN")) ? e : "false");
                var o = this.props.externalRenderingUrl,
                  a = o.includes("?") ? "&" : "?";
                return "".concat(o).concat(a).concat(n.toString())
              }
              var s = new URLSearchParams(window.location.search),
                l = s.get("gameRenderingUrl");
              if (this.setState({
                  gameRenderingUrl: l
                }), l) return l;
              var u = this.props.game;
              if ("External" === u.renderingType) return this.props.game.version;
              if ("Html" === u.renderingType) {
                var c = this.getAssetOriginUrl(null != (t = u.sdkName) ? t : u.slug, u.version);
                return "".concat(c, "index.html")
              }
              var d = "0.1.179",
                h = this.props.arenaEnvironment || "dev";
              return [
                ["gameId", null != (r = this.gameId) ? r : ""],
                ["env", h]
              ].forEach(function(e) {
                return s.set(e[0], e[1])
              }), "".concat(tT.l.IFRAME_BASE_URL).concat(d ? "".concat(d, "/") : "").concat("iframe-rendering-grm.html", "?").concat(s.toString())
            },
            enumerable: !1,
            configurable: !0
          }), t.prototype.getArkadiumSdkInstance = function() {
            return null
          }, t.prototype.componentDidMount = function() {
            var e, t, r = this;
            console.log("RACE: START:componentDidMount:isIframeGame"), this.onResize(), window.addEventListener("message", this.onGameEvent), this.loadArkadiumSdk().then(function() {
              console.log("RACE: loadArkadiumSdk:then:setState:isSdkLoaded"), r.setState({
                isSdkLoaded: !0
              })
            }), console.log("RACE: END:componentDidMount:isIframeGame"), window.addEventListener("resize", this.onResize), window.addEventListener("message", this.onMessage), window.addEventListener(l.BACK_TO_GAME, this.onBackToGame), tM(null);
            var n = this.props.addEventHandlers;
            null == (t = null == (e = this.props) ? void 0 : e.onUnitMount) || t.call(e), n && Object.keys(n).forEach(function(e) {
              window.addEventListener(e, n[e])
            }), console.log("RACE: END:componentDidMount:isIframeGame")
          }, t.prototype.componentDidUpdate = function(e) {
            var t, r, n, i = this.props,
              o = i.user,
              a = i.isIframeGame;
            (null == (t = null == e ? void 0 : e.user) ? void 0 : t.uid) !== (null == o ? void 0 : o.uid) && this.postMessageToIframe({
              type: L.c.AUTH_API_EVENT,
              payload: {
                auth_method: I.V.CHECK_AUTH
              }
            }), null == (n = null == (r = this.props) ? void 0 : r.onUnitUpdate) || n.call(r, e, this.props), !a && this.props.isStateGamePlaying && tb()
          }, t.prototype.componentWillUnmount = function() {
            this.props.isIframeGame ? window.removeEventListener("message", this.onGameEvent) : (this.gameSubject.xUnsubscribe(), null == (t = null == (e = this.props) ? void 0 : e.doSetGameObservable) || t.call(e, null)), window.removeEventListener("resize", this.onResize), window.removeEventListener("message", this.onMessage), window.removeEventListener(l.BACK_TO_GAME, this.onBackToGame), tM(null), null == (n = null == (r = this.props) ? void 0 : r.onUnitUnmount) || n.call(r);
            var e, t, r, n, i = this.props.addEventHandlers;
            i && Object.keys(i).forEach(function(e) {
              window.removeEventListener(e, i[e])
            })
          }, t.prototype.render = function() {
            var e, t, r = this.props,
              n = r.keepAliveStatus,
              i = r.isIframeGame,
              o = r.game,
              a = this.props.isStateGamePlaying;
            return h.createElement(tj, {
              "data-element-description": "game",
              ref: this.unitContainerRef,
              hidden: !a || !1 === n,
              className: p().apply(void 0, tD(tD([], (null == (e = this.props) ? void 0 : e.customCssClassesUnitContainer) || [], !0), ["__GRM"], !1))
            }, h.createElement(tG, {
              ref: this.canvasContainerRef,
              className: p().apply(void 0, tD([v().canvasContainer], (null == (t = this.props) ? void 0 : t.customCssClassesCanvasContainer) || [], !0))
            }, h.createElement(E, {
              isSdkLoaded: this.state.isSdkLoaded,
              id: "game-canvas",
              isIframeGame: i,
              iframeSourceCode: this.props.isStateGamePlaying ? this.iframeSourceCode : null,
              onIframeLoad: this.onIframeLoad,
              onSdkIframeLoad: this.onSdkIframeLoad,
              iframeRef: this.setIframeRef,
              game: o,
              topLevelClassname: v().gameCanvas,
              customCssClassesCanvasBoxWrapper: this.props.customCssClassesCanvasBoxWrapper || [],
              customCssClassesCanvasBox__common: this.props.customCssClassesCanvasBox__common || [],
              customCssClassesCanvasBox__iframe: this.props.customCssClassesCanvasBox__iframe || [],
              isArkadiumSdkGame: this.state.isArkadiumSdkGame,
              iframeAllowOptions: this.getIframeAllowOptions()
            })), this.state.isGameLoading && this.props.customLoader && this.props.customLoader({
              isGameLoading: this.state.isGameLoading
            }), this.state.isGameLoading && !this.props.customLoader && h.createElement(T, null))
          }, t.prototype.rumTrackGameLoad = function() {
            var e, t;
            null == (t = null == (e = window.__RUM__) ? void 0 : e.captureMessage) || t.call(e, "grm.iframe.onload", {
              tags: {
                "grm.iframe.onload": "true"
              }
            })
          }, t
        }(h.PureComponent),
        tj = h.forwardRef(function(e, t) {
          var r, n = e.hidden,
            i = e.customCssClassesUnitContainer,
            o = (e._, tL(e, ["hidden", "customCssClassesUnitContainer", "_"]));
          return h.createElement("div", tx({
            ref: t
          }, o, {
            className: p().apply(void 0, tD(tD([v().unitContainer], i || [], !0), [((r = {})[v().hidden] = n, r)], !1))
          }))
        }),
        tG = h.forwardRef(function(e, t) {
          return h.createElement("div", tx({}, e, {
            ref: t
          }))
        })
    },
    19389: () => {},
    20139: (e, t, r) => {
      "use strict";
      r.d(t, {
        Ay: () => eQ
      });
      var n, i, o = r(59402),
        a = r(12115),
        s = "data-focus-lock",
        l = "data-focus-lock-disabled",
        u = r(32825),
        c = {
          width: "1px",
          height: "0px",
          padding: 0,
          overflow: "hidden",
          position: "fixed",
          top: "1px",
          left: "1px"
        },
        d = r(50816),
        h = (0, d.C)({}, function(e) {
          return {
            target: e.target,
            currentTarget: e.currentTarget
          }
        }),
        f = (0, d.C)(),
        p = (0, d.C)(),
        m = (0, d.f)({
          async: !0,
          ssr: "u" > typeof document
        }),
        v = (0, a.createContext)(void 0),
        g = [],
        b = (0, a.forwardRef)(function(e, t) {
          var r, n = (0, a.useState)(),
            i = n[0],
            d = n[1],
            p = (0, a.useRef)(),
            b = (0, a.useRef)(!1),
            w = (0, a.useRef)(null),
            y = (0, a.useState)({})[1],
            E = e.children,
            A = e.disabled,
            k = void 0 !== A && A,
            S = e.noFocusGuards,
            _ = void 0 !== S && S,
            T = e.persistentFocus,
            C = e.crossFrame,
            O = e.autoFocus,
            x = (e.allowTextSelection, e.group),
            R = e.className,
            I = e.whiteList,
            L = e.hasPositiveIndices,
            D = e.shards,
            P = void 0 === D ? g : D,
            M = e.as,
            N = e.lockProps,
            j = e.sideCar,
            G = e.returnFocus,
            U = void 0 !== G && G,
            F = e.focusOptions,
            z = e.onActivation,
            B = e.onDeactivation,
            W = (0, a.useState)({})[0],
            H = (0, a.useCallback)(function(e) {
              var t = e.captureFocusRestore;
              if (!w.current) {
                var r, n = null == (r = document) ? void 0 : r.activeElement;
                w.current = n, n !== document.body && (w.current = t(n))
              }
              p.current && z && z(p.current), b.current = !0, y()
            }, [z]),
            q = (0, a.useCallback)(function() {
              b.current = !1, B && B(p.current), y()
            }, [B]),
            $ = (0, a.useCallback)(function(e) {
              var t = w.current;
              if (t) {
                var r = ("function" == typeof t ? t() : t) || document.body,
                  n = "function" == typeof U ? U(r) : U;
                if (n) {
                  var i = "object" == typeof n ? n : void 0;
                  w.current = null, e ? Promise.resolve().then(function() {
                    return r.focus(i)
                  }) : r.focus(i)
                }
              }
            }, [U]),
            V = (0, a.useCallback)(function(e) {
              b.current && h.useMedium(e)
            }, []),
            K = f.useMedium,
            Y = (0, a.useCallback)(function(e) {
              p.current !== e && (p.current = e, d(e))
            }, []),
            Q = (0, o.A)(((r = {})[l] = k && "disabled", r[s] = x, r), void 0 === N ? {} : N),
            X = !0 !== _,
            J = X && "tail" !== _,
            Z = (0, u.S)([t, Y]),
            ee = (0, a.useMemo)(function() {
              return {
                observed: p,
                shards: P,
                enabled: !k,
                get active() {
                  return b.current
                }
              }
            }, [k, b, P, p]);
          return a.createElement(a.Fragment, null, X && [a.createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            tabIndex: k ? -1 : 0,
            style: c
          }), L ? a.createElement("div", {
            key: "guard-nearest",
            "data-focus-guard": !0,
            tabIndex: k ? -1 : 1,
            style: c
          }) : null], !k && a.createElement(j, {
            id: W,
            sideCar: m,
            observed: i,
            disabled: k,
            persistentFocus: void 0 !== T && T,
            crossFrame: void 0 === C || C,
            autoFocus: void 0 === O || O,
            whiteList: I,
            shards: P,
            onActivation: H,
            onDeactivation: q,
            returnFocus: $,
            focusOptions: F,
            noFocusGuards: _
          }), a.createElement(void 0 === M ? "div" : M, (0, o.A)({
            ref: Z
          }, Q, {
            className: R,
            onBlur: K,
            onFocus: V
          }), a.createElement(v.Provider, {
            value: ee
          }, E)), J && a.createElement("div", {
            "data-focus-guard": !0,
            tabIndex: k ? -1 : 0,
            style: c
          }))
        });

      function w(e, t) {
        return (w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        })(e, t)
      }

      function y(e) {
        return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }
      b.propTypes = {};
      var E = function(e) {
          for (var t = Array(e.length), r = 0; r < e.length; ++r) t[r] = e[r];
          return t
        },
        A = function(e) {
          return Array.isArray(e) ? e : [e]
        },
        k = function(e) {
          return Array.isArray(e) ? e[0] : e
        },
        S = function(e) {
          if (e.nodeType !== Node.ELEMENT_NODE) return !1;
          var t = window.getComputedStyle(e, null);
          return !!t && !!t.getPropertyValue && ("none" === t.getPropertyValue("display") || "hidden" === t.getPropertyValue("visibility"))
        },
        _ = function(e) {
          return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode
        },
        T = function(e) {
          return e === document || e && e.nodeType === Node.DOCUMENT_NODE
        },
        C = function(e, t) {
          var r, n, i = e.get(t);
          if (void 0 !== i) return i;
          var o = (r = t, n = C.bind(void 0, e), !r || T(r) || !S(r) && !r.hasAttribute("inert") && n(_(r)));
          return e.set(t, o), o
        },
        O = function(e, t) {
          var r, n = e.get(t);
          if (void 0 !== n) return n;
          var i = (r = O.bind(void 0, e), !t || !!T(t) || !!L(t) && r(_(t)));
          return e.set(t, i), i
        },
        x = function(e) {
          return e.dataset
        },
        R = function(e) {
          return "INPUT" === e.tagName
        },
        I = function(e) {
          return R(e) && "radio" === e.type
        },
        L = function(e) {
          return ![!0, "true", ""].includes(e.getAttribute("data-no-autofocus"))
        },
        D = function(e) {
          var t;
          return !!(e && (null == (t = x(e)) ? void 0 : t.focusGuard))
        },
        P = function(e) {
          return !D(e)
        },
        M = function(e) {
          return !!e
        },
        N = function(e, t) {
          var r = Math.max(0, e.tabIndex),
            n = Math.max(0, t.tabIndex),
            i = r - n,
            o = e.index - t.index;
          if (i) {
            if (!r) return 1;
            if (!n) return -1
          }
          return i || o
        },
        j = function(e, t, r) {
          return E(e).map(function(e, t) {
            var n = e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
            return {
              node: e,
              index: t,
              tabIndex: r && -1 === n ? (e.dataset || {}).focusGuard ? 0 : -1 : n
            }
          }).filter(function(e) {
            return !t || e.tabIndex >= 0
          }).sort(N)
        },
        G = "button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]",
        U = "".concat(G, ", [data-focus-guard]"),
        F = function(e, t) {
          return E((e.shadowRoot || e).children).reduce(function(e, r) {
            return e.concat(r.matches(t ? U : G) ? [r] : [], F(r))
          }, [])
        },
        z = function(e, t) {
          var r;
          return e instanceof HTMLIFrameElement && (null == (r = e.contentDocument) ? void 0 : r.body) ? B([e.contentDocument.body], t) : [e]
        },
        B = function(e, t) {
          return e.reduce(function(e, r) {
            var n, i = F(r, t),
              o = (n = []).concat.apply(n, i.map(function(e) {
                return z(e, t)
              }));
            return e.concat(o, r.parentNode ? E(r.parentNode.querySelectorAll(G)).filter(function(e) {
              return e === r
            }) : [])
          }, [])
        },
        W = function(e, t) {
          return E(e).filter(function(e) {
            return C(t, e)
          }).filter(function(e) {
            var t;
            return !((R(t = e) || "BUTTON" === t.tagName) && ("hidden" === t.type || t.disabled))
          })
        },
        H = function(e, t) {
          return void 0 === t && (t = new Map), E(e).filter(function(e) {
            return O(t, e)
          })
        },
        q = function(e, t, r) {
          return j(W(B(e, r), t), !0, r)
        },
        $ = function(e, t) {
          return j(W(B(e), t), !1)
        },
        V = function(e, t) {
          return e.shadowRoot ? V(e.shadowRoot, t) : !!(void 0 !== Object.getPrototypeOf(e).contains && Object.getPrototypeOf(e).contains.call(e, t)) || E(e.children).some(function(e) {
            var r;
            if (e instanceof HTMLIFrameElement) {
              var n = null == (r = e.contentDocument) ? void 0 : r.body;
              return !!n && V(n, t)
            }
            return V(e, t)
          })
        },
        K = function(e) {
          try {
            return e()
          } catch (e) {
            return
          }
        },
        Y = function(e) {
          if (void 0 === e && (e = document), e && e.activeElement) {
            var t = e.activeElement;
            return t.shadowRoot ? Y(t.shadowRoot) : t instanceof HTMLIFrameElement && K(function() {
              return t.contentWindow.document
            }) ? Y(t.contentWindow.document) : t
          }
        },
        Q = function(e) {
          void 0 === e && (e = document);
          var t = Y(e);
          return !!t && E(e.querySelectorAll("[".concat("data-no-focus-lock", "]"))).some(function(e) {
            return V(e, t)
          })
        },
        X = function(e) {
          for (var t = new Set, r = e.length, n = 0; n < r; n += 1)
            for (var i = n + 1; i < r; i += 1) {
              var o = e[n].compareDocumentPosition(e[i]);
              (o & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (o & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(n)
            }
          return e.filter(function(e, r) {
            return !t.has(r)
          })
        },
        J = function(e) {
          return e.parentNode ? J(e.parentNode) : e
        },
        Z = function(e) {
          return A(e).filter(Boolean).reduce(function(e, t) {
            var r = t.getAttribute(s);
            return e.push.apply(e, r ? X(E(J(t).querySelectorAll("[".concat(s, '="').concat(r, '"]:not([').concat(l, '="disabled"])')))) : [t]), e
          }, [])
        },
        ee = function(e, t) {
          return void 0 === t && (t = Y(k(e).ownerDocument)), !!t && (!t.dataset || !t.dataset.focusGuard) && Z(e).some(function(e) {
            var r;
            return V(e, t) || (r = t, !!E(e.querySelectorAll("iframe")).some(function(e) {
              return e === r
            }))
          })
        },
        et = function(e, t) {
          e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus())
        },
        er = function(e, t) {
          if (I(e) && e.name) return t.filter(I).filter(function(t) {
            return t.name === e.name
          }).filter(function(e) {
            return e.checked
          })[0] || e;
          return e
        },
        en = function(e) {
          var t = new Set;
          return e.forEach(function(r) {
            return t.add(er(r, e))
          }), e.filter(function(e) {
            return t.has(e)
          })
        },
        ei = function(e) {
          return e[0] && e.length > 1 ? er(e[0], e) : e[0]
        },
        eo = function(e, t) {
          return e.indexOf(er(t, e))
        },
        ea = "NEW_FOCUS",
        es = function(e, t, r, n, i) {
          var o = e.length,
            a = e[0],
            s = e[o - 1],
            l = D(n);
          if (!(n && e.indexOf(n) >= 0)) {
            var u = void 0 !== n ? r.indexOf(n) : -1,
              c = i ? r.indexOf(i) : u,
              d = i ? e.indexOf(i) : -1;
            if (-1 === u) return -1 !== d ? d : ea;
            if (-1 === d) return ea;
            var h = u - c,
              f = r.indexOf(a),
              p = r.indexOf(s),
              m = en(r),
              v = void 0 !== n ? m.indexOf(n) : -1,
              g = i ? m.indexOf(i) : v,
              b = m.filter(function(e) {
                return e.tabIndex >= 0
              }),
              w = void 0 !== n ? b.indexOf(n) : -1,
              y = i ? b.indexOf(i) : w;
            if (!h && d >= 0 || 0 === t.length) return d;
            var E = eo(e, t[0]),
              A = eo(e, t[t.length - 1]);
            if (u <= f && l && Math.abs(h) > 1) return A;
            if (u >= p && l && Math.abs(h) > 1) return E;
            if (h && Math.abs(w >= 0 && y >= 0 ? y - w : g - v) > 1) return d;
            if (u <= f) return A;
            if (u > p) return E;
            if (h) return Math.abs(h) > 1 ? d : (o + d + h) % o
          }
        },
        el = function(e, t, r) {
          var n = H(e.map(function(e) {
            return e.node
          }).filter(function(e) {
            var t, n = null == (t = x(e)) ? void 0 : t.autofocus;
            return e.autofocus || void 0 !== n && "false" !== n || r.indexOf(e) >= 0
          }));
          return n && n.length ? ei(n) : ei(H(t))
        },
        eu = function(e, t) {
          return void 0 === t && (t = []), t.push(e), e.parentNode && eu(e.parentNode.host || e.parentNode, t), t
        },
        ec = function(e, t) {
          for (var r = eu(e), n = eu(t), i = 0; i < r.length; i += 1) {
            var o = r[i];
            if (n.indexOf(o) >= 0) return o
          }
          return !1
        },
        ed = function(e, t, r) {
          var n = A(e),
            i = A(t),
            o = n[0],
            a = !1;
          return i.filter(Boolean).forEach(function(e) {
            a = ec(a || e, e) || a, r.filter(Boolean).forEach(function(e) {
              var t = ec(o, e);
              t && (a = !a || V(t, a) ? t : ec(t, a))
            })
          }), a
        },
        eh = function(e, t) {
          return e.reduce(function(e, r) {
            var n, i;
            return e.concat((n = r, i = t, W(E(n.querySelectorAll("[".concat("data-autofocus-inside", "]"))).map(function(e) {
              return B([e])
            }).reduce(function(e, t) {
              return e.concat(t)
            }, []), i)))
          }, [])
        },
        ef = function(e, t) {
          var r = new Map;
          return t.forEach(function(e) {
            return r.set(e.node, e)
          }), e.map(function(e) {
            return r.get(e)
          }).filter(M)
        },
        ep = function(e, t) {
          var r = Y(A(e).length > 0 ? document : k(e).ownerDocument),
            n = Z(e).filter(P),
            i = ed(r || e, e, n),
            o = new Map,
            a = $(n, o),
            s = a.filter(function(e) {
              return P(e.node)
            });
          if (s[0]) {
            var l = $([i], o).map(function(e) {
                return e.node
              }),
              u = ef(l, s),
              c = u.map(function(e) {
                return e.node
              }),
              d = u.filter(function(e) {
                return e.tabIndex >= 0
              }).map(function(e) {
                return e.node
              }),
              h = es(c, d, l, r, t);
            if (h === ea) {
              var f = el(a, d, eh(n, o)) || el(a, c, eh(n, o));
              return f ? {
                node: f
              } : void console.warn("focus-lock: cannot find any node to move focus into")
            }
            return void 0 === h ? h : u[h]
          }
        },
        em = 0,
        ev = !1,
        eg = function(e, t, r) {
          void 0 === r && (r = {});
          var n = ep(e, t);
          if (!ev && n) {
            if (em > 2) {
              console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), ev = !0, setTimeout(function() {
                ev = !1
              }, 1);
              return
            }
            em++, et(n.node, r.focusOptions), em--
          }
        };

      function eb(e) {
        if (!e) return null;
        if ("u" < typeof WeakRef) return function() {
          return e || null
        };
        var t = e ? new WeakRef(e) : null;
        return function() {
          return (null == t ? void 0 : t.deref()) || null
        }
      }
      var ew = function(e) {
          if (!e) return null;
          for (var t = [], r = e; r && r !== document.body;) t.push({
            current: eb(r),
            parent: eb(r.parentElement),
            left: eb(r.previousElementSibling),
            right: eb(r.nextElementSibling)
          }), r = r.parentElement;
          return {
            element: eb(e),
            stack: t,
            ownerDocument: e.ownerDocument
          }
        },
        ey = function(e) {
          if (e)
            for (var t, r, n, i, o, a = e.stack, s = e.ownerDocument, l = new Map, u = 0; u < a.length; u++) {
              var c = a[u],
                d = null == (t = c.parent) ? void 0 : t.call(c);
              if (d && s.contains(d)) {
                for (var h = null == (r = c.left) ? void 0 : r.call(c), f = c.current(), p = d.contains(f) ? f : void 0, m = null == (n = c.right) ? void 0 : n.call(c), v = q([d], l), g = null != (o = null != (i = null != p ? p : null == h ? void 0 : h.nextElementSibling) ? i : m) ? o : h; g;) {
                  for (var b = 0; b < v.length; b++) {
                    var w = v[b];
                    if (null == g ? void 0 : g.contains(w.node)) return w.node
                  }
                  g = g.nextElementSibling
                }
                if (v.length) return v[0].node
              }
            }
        },
        eE = function(e) {
          var t = ew(e);
          return function() {
            return ey(t)
          }
        },
        eA = function(e) {
          var t = Z(e).filter(P),
            r = j(B([ed(e, e, t)], !0), !0, !0),
            n = B(t, !1);
          return r.map(function(e) {
            var t = e.node;
            return {
              node: t,
              index: e.index,
              lockItem: n.indexOf(t) >= 0,
              guard: D(t)
            }
          })
        },
        ek = function(e, t, r) {
          if (!e || !t) return console.error("no element or scope given"), {};
          var n = A(t);
          if (n.every(function(t) {
              return !V(t, e)
            })) return console.error("Active element is not contained in the scope"), {};
          var i = r ? q(n, new Map) : $(n, new Map),
            o = i.findIndex(function(t) {
              return t.node === e
            });
          if (-1 !== o) return {
            prev: i[o - 1],
            next: i[o + 1],
            first: i[0],
            last: i[i.length - 1]
          }
        },
        eS = function(e, t) {
          var r = t ? q(A(e), new Map) : $(A(e), new Map);
          return {
            first: r[0],
            last: r[r.length - 1]
          }
        },
        e_ = function(e, t, r) {
          void 0 === t && (t = {});
          var n, i = (n = t, Object.assign({
              scope: document.body,
              cycle: !0,
              onlyTabbable: !0
            }, n)),
            o = ek(e, i.scope, i.onlyTabbable);
          if (o) {
            var a = r(o, i.cycle);
            a && et(a.node, i.focusOptions)
          }
        },
        eT = function(e, t, r) {
          var n, i = eS(e, null == (n = t.onlyTabbable) || n)[r];
          i && et(i.node, t.focusOptions)
        };

      function eC(e) {
        setTimeout(e, 1)
      }
      var eO = function(e) {
          return e && "current" in e ? e.current : e
        },
        ex = function() {
          return document && document.activeElement === document.body
        },
        eR = null,
        eI = null,
        eL = function() {
          return null
        },
        eD = null,
        eP = !1,
        eM = !1,
        eN = function(e, t) {
          eD = {
            observerNode: e,
            portaledElement: t
          }
        };

      function ej(e, t, r, n) {
        var i = null,
          o = e;
        do {
          var a = n[o];
          if (a.guard) a.node.dataset.focusAutoGuard && (i = a);
          else if (a.lockItem) {
            if (o !== e) return;
            i = null
          } else break
        } while ((o += r) !== t);
        i && (i.node.tabIndex = 0)
      }
      var eG = function(e) {
          return $(e, new Map)
        },
        eU = function() {
          var e = !1;
          if (eR) {
            var t = eR,
              r = t.observed,
              n = t.persistentFocus,
              i = t.autoFocus,
              o = t.shards,
              a = t.crossFrame,
              s = t.focusOptions,
              l = t.noFocusGuards,
              u = r || eD && eD.portaledElement;
            if (ex() && eI && eI !== document.body && (!document.body.contains(eI) || !eG([(h = eI).parentNode]).some(function(e) {
                return e.node === h
              }))) {
              var c = eL();
              c && c.focus()
            }
            var d = document && document.activeElement;
            if (u) {
              var h, f = [u].concat(o.map(eO).filter(Boolean));
              if ((!d || (eR.whiteList || function() {
                  return !0
                })(d)) && (n || function() {
                  if (!(a ? !!eP : "meanwhile" === eP) || !l || !eI || eM) return !1;
                  var e = eG(f),
                    t = e.findIndex(function(e) {
                      return e.node === eI
                    });
                  return 0 === t || t === e.length - 1
                }() || !(ex() || Q()) || !eI && i) && (u && !(ee(f) || d && f.some(function(e) {
                  return function e(t, r, n) {
                    return r && (r.host === t && (!r.activeElement || n.contains(r.activeElement)) || r.parentNode && e(t, r.parentNode, n))
                  }(d, e, e)
                }) || eD && eD.portaledElement === d) && (document && !eI && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = eg(f, eI, {
                  focusOptions: s
                }), eD = {})), (eI = document && document.activeElement) !== document.body && (eL = eE(eI)), eP = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
                var p = document && document.activeElement,
                  m = eA(f),
                  v = m.map(function(e) {
                    return e.node
                  }).indexOf(p);
                v > -1 && (m.filter(function(e) {
                  var t = e.guard,
                    r = e.node;
                  return t && r.dataset.focusAutoGuard
                }).forEach(function(e) {
                  return e.node.removeAttribute("tabIndex")
                }), ej(v, m.length, 1, m), ej(v, -1, -1, m))
              }
            }
          }
          return e
        },
        eF = function(e) {
          eU() && e && (e.stopPropagation(), e.preventDefault())
        },
        ez = function() {
          return eC(eU)
        },
        eB = function() {
          eM = !0
        },
        eW = function() {
          eM = !1, eP = "just", eC(function() {
            eP = "meanwhile"
          })
        },
        eH = function() {
          document.addEventListener("focusin", eF), document.addEventListener("focusout", ez), window.addEventListener("focus", eB), window.addEventListener("blur", eW)
        },
        eq = function() {
          document.removeEventListener("focusin", eF), document.removeEventListener("focusout", ez), window.removeEventListener("focus", eB), window.removeEventListener("blur", eW)
        },
        e$ = {
          moveFocusInside: eg,
          focusInside: ee,
          focusNextElement: function(e, t) {
            void 0 === t && (t = {}), e_(e, t, function(e, t) {
              var r = e.next,
                n = e.first;
              return r || t && n
            })
          },
          focusPrevElement: function(e, t) {
            void 0 === t && (t = {}), e_(e, t, function(e, t) {
              var r = e.prev,
                n = e.last;
              return r || t && n
            })
          },
          focusFirstElement: function(e, t) {
            void 0 === t && (t = {}), eT(e, t, "first")
          },
          focusLastElement: function(e, t) {
            void 0 === t && (t = {}), eT(e, t, "last")
          },
          captureFocusRestore: eE
        };
      h.assignSyncMedium(function(e) {
        var t = e.target,
          r = e.currentTarget;
        r.contains(t) || eN(r, t)
      }), f.assignMedium(ez), p.assignMedium(function(e) {
        return e(e$)
      });
      let eV = (n = function(e) {
        return e.filter(function(e) {
          return !e.disabled
        })
      }, i = function(e) {
        var t = e.slice(-1)[0];
        t && !eR && eH();
        var r = eR,
          n = r && t && t.id === r.id;
        eR = t, r && !n && (r.onDeactivation(), e.filter(function(e) {
          return e.id === r.id
        }).length || r.returnFocus(!t)), t ? (eI = null, n && r.observed === t.observed || t.onActivation(e$), eU(!0), eC(eU)) : (eq(), eI = null)
      }, function(e) {
        var t, r, o, s, l, u = [];

        function c() {
          i(l = n(u.map(function(e) {
            return e.props
          })))
        }
        var d = function(t) {
          function r() {
            return t.apply(this, arguments) || this
          }
          r.prototype = Object.create(t.prototype), r.prototype.constructor = r, w(r, t), r.peek = function() {
            return l
          };
          var n = r.prototype;
          return n.componentDidMount = function() {
            u.push(this), c()
          }, n.componentDidUpdate = function() {
            c()
          }, n.componentWillUnmount = function() {
            var e = u.indexOf(this);
            u.splice(e, 1), c()
          }, n.render = function() {
            return a.createElement(e, this.props)
          }, r
        }(a.PureComponent);
        return t = d, r = "displayName", o = "SideEffect(" + (e.displayName || e.name || "Component") + ")", (s = function(e, t) {
          if ("object" != y(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != y(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(r, "string"), (r = "symbol" == y(s) ? s : s + "") in t) ? Object.defineProperty(t, r, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[r] = o, d
      })(function() {
        return null
      });
      var eK = (0, a.forwardRef)(function(e, t) {
          return a.createElement(b, (0, o.A)({
            sideCar: eV,
            ref: t
          }, e))
        }),
        eY = b.propTypes || {};
      eY.sideCar,
        function(e, t) {
          if (null != e) {
            var r = {};
            for (var n in e)
              if (({}).hasOwnProperty.call(e, n)) {
                if (-1 !== t.indexOf(n)) continue;
                r[n] = e[n]
              }
          }
        }(eY, ["sideCar"]), eK.propTypes = {};
      let eQ = eK
    },
    22861: () => {},
    23994: () => {},
    26441: (e, t, r) => {
      "use strict";
      r.d(t, {
        KL: () => P,
        Kq: () => H,
        UC: () => V,
        bL: () => q,
        i3: () => K,
        l9: () => $
      });
      var n = r(12115),
        i = r(65453),
        o = r(633),
        a = r(75021),
        s = r(81354),
        l = r(5337),
        u = r(13593),
        c = r(76990),
        d = r(31557),
        h = r(13275),
        f = r(11792),
        p = r(38665),
        m = r(61440),
        v = r(95155),
        [g, b] = (0, a.A)("Tooltip", [u.Bk]),
        w = (0, u.Bk)(),
        y = "TooltipProvider",
        E = "tooltip.open",
        [A, k] = g(y),
        S = e => {
          let {
            __scopeTooltip: t,
            delayDuration: r = 700,
            skipDelayDuration: i = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, s = n.useRef(!0), l = n.useRef(!1), u = n.useRef(0);
          return n.useEffect(() => {
            let e = u.current;
            return () => window.clearTimeout(e)
          }, []), (0, v.jsx)(A, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: r,
            onOpen: n.useCallback(() => {
              window.clearTimeout(u.current), s.current = !1
            }, []),
            onClose: n.useCallback(() => {
              window.clearTimeout(u.current), u.current = window.setTimeout(() => s.current = !0, i)
            }, [i]),
            isPointerInTransitRef: l,
            onPointerInTransitChange: n.useCallback(e => {
              l.current = e
            }, []),
            disableHoverableContent: o,
            children: a
          })
        };
      S.displayName = y;
      var _ = "Tooltip",
        [T, C] = g(_),
        O = e => {
          let {
            __scopeTooltip: t,
            children: r,
            open: i,
            defaultOpen: o,
            onOpenChange: a,
            disableHoverableContent: s,
            delayDuration: c
          } = e, d = k(_, e.__scopeTooltip), h = w(t), [f, m] = n.useState(null), g = (0, l.B)(), b = n.useRef(0), y = s ?? d.disableHoverableContent, A = c ?? d.delayDuration, S = n.useRef(!1), [C, O] = (0, p.i)({
            prop: i,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(E))) : d.onClose(), a?.(e)
            },
            caller: _
          }), x = n.useMemo(() => C ? S.current ? "delayed-open" : "instant-open" : "closed", [C]), R = n.useCallback(() => {
            window.clearTimeout(b.current), b.current = 0, S.current = !1, O(!0)
          }, [O]), I = n.useCallback(() => {
            window.clearTimeout(b.current), b.current = 0, O(!1)
          }, [O]), L = n.useCallback(() => {
            window.clearTimeout(b.current), b.current = window.setTimeout(() => {
              S.current = !0, O(!0), b.current = 0
            }, A)
          }, [A, O]);
          return n.useEffect(() => () => {
            b.current && (window.clearTimeout(b.current), b.current = 0)
          }, []), (0, v.jsx)(u.bL, {
            ...h,
            children: (0, v.jsx)(T, {
              scope: t,
              contentId: g,
              open: C,
              stateAttribute: x,
              trigger: f,
              onTriggerChange: m,
              onTriggerEnter: n.useCallback(() => {
                d.isOpenDelayedRef.current ? L() : R()
              }, [d.isOpenDelayedRef, L, R]),
              onTriggerLeave: n.useCallback(() => {
                y ? I() : (window.clearTimeout(b.current), b.current = 0)
              }, [I, y]),
              onOpen: R,
              onClose: I,
              disableHoverableContent: y,
              children: r
            })
          })
        };
      O.displayName = _;
      var x = "TooltipTrigger",
        R = n.forwardRef((e, t) => {
          let {
            __scopeTooltip: r,
            ...a
          } = e, s = C(x, r), l = k(x, r), c = w(r), d = n.useRef(null), f = (0, o.s)(t, d, s.onTriggerChange), p = n.useRef(!1), m = n.useRef(!1), g = n.useCallback(() => p.current = !1, []);
          return n.useEffect(() => () => document.removeEventListener("pointerup", g), [g]), (0, v.jsx)(u.Mz, {
            asChild: !0,
            ...c,
            children: (0, v.jsx)(h.sG.button, {
              "aria-describedby": s.open ? s.contentId : void 0,
              "data-state": s.stateAttribute,
              ...a,
              ref: f,
              onPointerMove: (0, i.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (m.current || l.isPointerInTransitRef.current || (s.onTriggerEnter(), m.current = !0))
              }),
              onPointerLeave: (0, i.mK)(e.onPointerLeave, () => {
                s.onTriggerLeave(), m.current = !1
              }),
              onPointerDown: (0, i.mK)(e.onPointerDown, () => {
                s.open && s.onClose(), p.current = !0, document.addEventListener("pointerup", g, {
                  once: !0
                })
              }),
              onFocus: (0, i.mK)(e.onFocus, () => {
                p.current || s.onOpen()
              }),
              onBlur: (0, i.mK)(e.onBlur, s.onClose),
              onClick: (0, i.mK)(e.onClick, s.onClose)
            })
          })
        });
      R.displayName = x;
      var I = "TooltipPortal",
        [L, D] = g(I, {
          forceMount: void 0
        }),
        P = e => {
          let {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: i
          } = e, o = C(I, t);
          return (0, v.jsx)(L, {
            scope: t,
            forceMount: r,
            children: (0, v.jsx)(d.C, {
              present: r || o.open,
              children: (0, v.jsx)(c.Z, {
                asChild: !0,
                container: i,
                children: n
              })
            })
          })
        };
      P.displayName = I;
      var M = "TooltipContent",
        N = n.forwardRef((e, t) => {
          let r = D(M, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: i = "top",
              ...o
            } = e,
            a = C(M, e.__scopeTooltip);
          return (0, v.jsx)(d.C, {
            present: n || a.open,
            children: a.disableHoverableContent ? (0, v.jsx)(z, {
              side: i,
              ...o,
              ref: t
            }) : (0, v.jsx)(j, {
              side: i,
              ...o,
              ref: t
            })
          })
        }),
        j = n.forwardRef((e, t) => {
          let r = C(M, e.__scopeTooltip),
            i = k(M, e.__scopeTooltip),
            a = n.useRef(null),
            s = (0, o.s)(t, a),
            [l, u] = n.useState(null),
            {
              trigger: c,
              onClose: d
            } = r,
            h = a.current,
            {
              onPointerInTransitChange: f
            } = i,
            p = n.useCallback(() => {
              u(null), f(!1)
            }, [f]),
            m = n.useCallback((e, t) => {
              let r, n = e.currentTarget,
                i = {
                  x: e.clientX,
                  y: e.clientY
                },
                o = function(e, t) {
                  let r = Math.abs(t.top - e.y),
                    n = Math.abs(t.bottom - e.y),
                    i = Math.abs(t.right - e.x),
                    o = Math.abs(t.left - e.x);
                  switch (Math.min(r, n, i, o)) {
                    case o:
                      return "left";
                    case i:
                      return "right";
                    case r:
                      return "top";
                    case n:
                      return "bottom";
                    default:
                      throw Error("unreachable")
                  }
                }(i, n.getBoundingClientRect());
              u(((r = [... function(e, t, r = 5) {
                let n = [];
                switch (t) {
                  case "top":
                    n.push({
                      x: e.x - r,
                      y: e.y + r
                    }, {
                      x: e.x + r,
                      y: e.y + r
                    });
                    break;
                  case "bottom":
                    n.push({
                      x: e.x - r,
                      y: e.y - r
                    }, {
                      x: e.x + r,
                      y: e.y - r
                    });
                    break;
                  case "left":
                    n.push({
                      x: e.x + r,
                      y: e.y - r
                    }, {
                      x: e.x + r,
                      y: e.y + r
                    });
                    break;
                  case "right":
                    n.push({
                      x: e.x - r,
                      y: e.y - r
                    }, {
                      x: e.x - r,
                      y: e.y + r
                    })
                }
                return n
              }(i, o), ... function(e) {
                let {
                  top: t,
                  right: r,
                  bottom: n,
                  left: i
                } = e;
                return [{
                  x: i,
                  y: t
                }, {
                  x: r,
                  y: t
                }, {
                  x: r,
                  y: n
                }, {
                  x: i,
                  y: n
                }]
              }(t.getBoundingClientRect())].slice()).sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : 1 * !!(e.y > t.y)), function(e) {
                if (e.length <= 1) return e.slice();
                let t = [];
                for (let r = 0; r < e.length; r++) {
                  let n = e[r];
                  for (; t.length >= 2;) {
                    let e = t[t.length - 1],
                      r = t[t.length - 2];
                    if ((e.x - r.x) * (n.y - r.y) >= (e.y - r.y) * (n.x - r.x)) t.pop();
                    else break
                  }
                  t.push(n)
                }
                t.pop();
                let r = [];
                for (let t = e.length - 1; t >= 0; t--) {
                  let n = e[t];
                  for (; r.length >= 2;) {
                    let e = r[r.length - 1],
                      t = r[r.length - 2];
                    if ((e.x - t.x) * (n.y - t.y) >= (e.y - t.y) * (n.x - t.x)) r.pop();
                    else break
                  }
                  r.push(n)
                }
                return (r.pop(), 1 === t.length && 1 === r.length && t[0].x === r[0].x && t[0].y === r[0].y) ? t : t.concat(r)
              }(r))), f(!0)
            }, [f]);
          return n.useEffect(() => () => p(), [p]), n.useEffect(() => {
            if (c && h) {
              let e = e => m(e, h),
                t = e => m(e, c);
              return c.addEventListener("pointerleave", e), h.addEventListener("pointerleave", t), () => {
                c.removeEventListener("pointerleave", e), h.removeEventListener("pointerleave", t)
              }
            }
          }, [c, h, m, p]), n.useEffect(() => {
            if (l) {
              let e = e => {
                let t = e.target,
                  r = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  n = c?.contains(t) || h?.contains(t),
                  i = ! function(e, t) {
                    let {
                      x: r,
                      y: n
                    } = e, i = !1;
                    for (let e = 0, o = t.length - 1; e < t.length; o = e++) {
                      let a = t[e],
                        s = t[o],
                        l = a.x,
                        u = a.y,
                        c = s.x,
                        d = s.y;
                      u > n != d > n && r < (c - l) * (n - u) / (d - u) + l && (i = !i)
                    }
                    return i
                  }(r, l);
                n ? p() : i && (p(), d())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [c, h, l, d, p]), (0, v.jsx)(z, {
            ...e,
            ref: s
          })
        }),
        [G, U] = g(_, {
          isInside: !1
        }),
        F = (0, f.Dc)("TooltipContent"),
        z = n.forwardRef((e, t) => {
          let {
            __scopeTooltip: r,
            children: i,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            ...c
          } = e, d = C(M, r), h = w(r), {
            onClose: f
          } = d;
          return n.useEffect(() => (document.addEventListener(E, f), () => document.removeEventListener(E, f)), [f]), n.useEffect(() => {
            if (d.trigger) {
              let e = e => {
                let t = e.target;
                t?.contains(d.trigger) && f()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }, [d.trigger, f]), (0, v.jsx)(s.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: f,
            children: (0, v.jsxs)(u.UC, {
              "data-state": d.stateAttribute,
              ...h,
              ...c,
              ref: t,
              style: {
                ...c.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              },
              children: [(0, v.jsx)(F, {
                children: i
              }), (0, v.jsx)(G, {
                scope: r,
                isInside: !0,
                children: (0, v.jsx)(m.bL, {
                  id: d.contentId,
                  role: "tooltip",
                  children: o || i
                })
              })]
            })
          })
        });
      N.displayName = M;
      var B = "TooltipArrow",
        W = n.forwardRef((e, t) => {
          let {
            __scopeTooltip: r,
            ...n
          } = e, i = w(r);
          return U(B, r).isInside ? null : (0, v.jsx)(u.i3, {
            ...i,
            ...n,
            ref: t
          })
        });
      W.displayName = B;
      var H = S,
        q = O,
        $ = R,
        V = N,
        K = W
    },
    27249: (e, t, r) => {
      "use strict";
      var n;
      r.d(t, {
        V: () => n
      }), (n || (n = {})).CHECK_AUTH = "CHECK_AUTH"
    },
    32347: () => {},
    32689: () => {},
    35154: () => {},
    38174: (e, t, r) => {
      "use strict";
      let n;
      r.d(t, {
        _s: () => j
      });
      var i = r(87720),
        o = r(12115);
      let a = o.createContext({
          drawerRef: {
            current: null
          },
          overlayRef: {
            current: null
          },
          onPress: () => {},
          onRelease: () => {},
          onDrag: () => {},
          onNestedDrag: () => {},
          onNestedOpenChange: () => {},
          onNestedRelease: () => {},
          openProp: void 0,
          dismissible: !1,
          isOpen: !1,
          isDragging: !1,
          keyboardIsOpen: {
            current: !1
          },
          snapPointsOffset: null,
          snapPoints: null,
          handleOnly: !1,
          modal: !1,
          shouldFade: !1,
          activeSnapPoint: null,
          onOpenChange: () => {},
          setActiveSnapPoint: () => {},
          closeDrawer: () => {},
          direction: "bottom",
          shouldAnimate: {
            current: !0
          },
          shouldScaleBackground: !1,
          setBackgroundColorOnScale: !0,
          noBodyStyles: !1,
          container: null,
          autoFocus: !1
        }),
        s = () => {
          let e = o.useContext(a);
          if (!e) throw Error("useDrawerContext must be used within a Drawer.Root");
          return e
        };

      function l() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }

      function u() {
        return c(/^iPhone/) || c(/^iPad/) || c(/^Mac/) && navigator.maxTouchPoints > 1
      }

      function c(e) {
        return "u" > typeof window && null != window.navigator ? e.test(window.navigator.platform) : void 0
      }! function(e) {
        if (!e || "u" < typeof document) return;
        let t = document.head || document.getElementsByTagName("head")[0],
          r = document.createElement("style");
        r.type = "text/css", t.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
      }("[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(\n[data-state=closed]\n){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}");
      let d = "u" > typeof window ? o.useLayoutEffect : o.useEffect;

      function h(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      let f = "u" > typeof document && window.visualViewport;

      function p(e) {
        let t = window.getComputedStyle(e);
        return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY)
      }

      function m(e) {
        for (p(e) && (e = e.parentElement); e && !p(e);) e = e.parentElement;
        return e || document.scrollingElement || document.documentElement
      }
      let v = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
        g = 0;

      function b(e, t, r, n) {
        return e.addEventListener(t, r, n), () => {
          e.removeEventListener(t, r, n)
        }
      }

      function w(e) {
        let t = document.scrollingElement || document.documentElement;
        for (; e && e !== t;) {
          let t = m(e);
          if (t !== document.documentElement && t !== document.body && t !== e) {
            let r = t.getBoundingClientRect().top,
              n = e.getBoundingClientRect().top;
            e.getBoundingClientRect().bottom > t.getBoundingClientRect().bottom + 24 && (t.scrollTop += n - r)
          }
          e = t.parentElement
        }
      }

      function y(e) {
        return e instanceof HTMLInputElement && !v.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable
      }

      function E(...e) {
        return o.useCallback(function(...e) {
          return t => e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }(...e), e)
      }
      let A = new WeakMap;

      function k(e, t, r = !1) {
        if (!e || !(e instanceof HTMLElement)) return;
        let n = {};
        Object.entries(t).forEach(([t, r]) => {
          t.startsWith("--") ? e.style.setProperty(t, r) : (n[t] = e.style[t], e.style[t] = r)
        }), r || A.set(e, n)
      }
      let S = e => {
        switch (e) {
          case "top":
          case "bottom":
            return !0;
          case "left":
          case "right":
            return !1;
          default:
            return e
        }
      };

      function _(e, t) {
        if (!e) return null;
        let r = window.getComputedStyle(e),
          n = r.transform || r.webkitTransform || r.mozTransform,
          i = n.match(/^matrix3d\((.+)\)$/);
        return i ? parseFloat(i[1].split(", ")[S(t) ? 13 : 12]) : (i = n.match(/^matrix\((.+)\)$/)) ? parseFloat(i[1].split(", ")[S(t) ? 5 : 4]) : null
      }

      function T(e, t) {
        if (!e) return () => {};
        let r = e.style.cssText;
        return Object.assign(e.style, t), () => {
          e.style.cssText = r
        }
      }
      let C = [.32, .72, 0, 1],
        O = "vaul-dragging";

      function x(e) {
        let t = o.useRef(e);
        return o.useEffect(() => {
          t.current = e
        }), o.useMemo(() => (...e) => null == t.current ? void 0 : t.current.call(t, ...e), [])
      }

      function R({
        prop: e,
        defaultProp: t,
        onChange: r = () => {}
      }) {
        let [n, i] = function({
          defaultProp: e,
          onChange: t
        }) {
          let r = o.useState(e),
            [n] = r,
            i = o.useRef(n),
            a = x(t);
          return o.useEffect(() => {
            i.current !== n && (a(n), i.current = n)
          }, [n, i, a]), r
        }({
          defaultProp: t,
          onChange: r
        }), a = void 0 !== e, s = a ? e : n, l = x(r);
        return [s, o.useCallback(t => {
          if (a) {
            let r = "function" == typeof t ? t(e) : t;
            r !== e && l(r)
          } else i(t)
        }, [a, e, i, l])]
      }
      let I = () => () => {},
        L = null;

      function D({
        open: e,
        onOpenChange: t,
        children: r,
        onDrag: s,
        onRelease: c,
        snapPoints: p,
        shouldScaleBackground: v = !1,
        setBackgroundColorOnScale: E = !0,
        closeThreshold: T = .25,
        scrollLockTimeout: x = 100,
        dismissible: I = !0,
        handleOnly: D = !1,
        fadeFromIndex: P = p && p.length - 1,
        activeSnapPoint: M,
        setActiveSnapPoint: N,
        fixed: j,
        modal: G = !0,
        onClose: U,
        nested: F,
        noBodyStyles: z = !1,
        direction: B = "bottom",
        defaultOpen: W = !1,
        disablePreventScroll: H = !0,
        snapToSequentialPoint: q = !1,
        preventScrollRestoration: $ = !1,
        repositionInputs: V = !0,
        onAnimationEnd: K,
        container: Y,
        autoFocus: Q = !1
      }) {
        var X, J;
        let [Z = !1, ee] = R({
          defaultProp: W,
          prop: e,
          onChange: e => {
            null == t || t(e), e || F || eI(), setTimeout(() => {
              null == K || K(e)
            }, 500), e && !G && "u" > typeof window && window.requestAnimationFrame(() => {
              document.body.style.pointerEvents = "auto"
            }), e || (document.body.style.pointerEvents = "auto")
          }
        }), [et, er] = o.useState(!1), [en, ei] = o.useState(!1), [eo, ea] = o.useState(!1), es = o.useRef(null), el = o.useRef(null), eu = o.useRef(null), ec = o.useRef(null), ed = o.useRef(null), eh = o.useRef(!1), ef = o.useRef(null), ep = o.useRef(0), em = o.useRef(!1), ev = o.useRef(!W), eg = o.useRef(0), eb = o.useRef(null), ew = o.useRef((null == (X = eb.current) ? void 0 : X.getBoundingClientRect().height) || 0), ey = o.useRef((null == (J = eb.current) ? void 0 : J.getBoundingClientRect().width) || 0), eE = o.useRef(0), eA = o.useCallback(e => {
          p && e === eC.length - 1 && (el.current = new Date)
        }, []), {
          activeSnapPoint: ek,
          activeSnapPointIndex: eS,
          setActiveSnapPoint: e_,
          onRelease: eT,
          snapPointsOffset: eC,
          onDrag: eO,
          shouldFade: ex,
          getPercentageDragged: eR
        } = function({
          activeSnapPointProp: e,
          setActiveSnapPointProp: t,
          snapPoints: r,
          drawerRef: n,
          overlayRef: i,
          fadeFromIndex: a,
          onSnapPointChange: s,
          direction: l = "bottom",
          container: u,
          snapToSequentialPoint: c
        }) {
          let [d, h] = R({
            prop: e,
            defaultProp: null == r ? void 0 : r[0],
            onChange: t
          }), [f, p] = o.useState("u" > typeof window ? {
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight
          } : void 0);
          o.useEffect(() => {
            function e() {
              p({
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
              })
            }
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }, []);
          let m = o.useMemo(() => d === (null == r ? void 0 : r[r.length - 1]) || null, [r, d]),
            v = o.useMemo(() => {
              var e;
              return null != (e = null == r ? void 0 : r.findIndex(e => e === d)) ? e : null
            }, [r, d]),
            g = r && r.length > 0 && (a || 0 === a) && !Number.isNaN(a) && r[a] === d || !r,
            b = o.useMemo(() => {
              var e;
              let t = u ? {
                width: u.getBoundingClientRect().width,
                height: u.getBoundingClientRect().height
              } : "u" > typeof window ? {
                width: window.innerWidth,
                height: window.innerHeight
              } : {
                width: 0,
                height: 0
              };
              return null != (e = null == r ? void 0 : r.map(e => {
                let r = "string" == typeof e,
                  n = 0;
                if (r && (n = parseInt(e, 10)), S(l)) {
                  let i = r ? n : f ? e * t.height : 0;
                  return f ? "bottom" === l ? t.height - i : -t.height + i : i
                }
                let i = r ? n : f ? e * t.width : 0;
                return f ? "right" === l ? t.width - i : -t.width + i : i
              })) ? e : []
            }, [r, f, u]),
            w = o.useMemo(() => null !== v ? null == b ? void 0 : b[v] : null, [b, v]),
            y = o.useCallback(e => {
              var t;
              let o = null != (t = null == b ? void 0 : b.findIndex(t => t === e)) ? t : null;
              s(o), k(n.current, {
                transition: `transform 0.5s cubic-bezier(${C.join(",")})`,
                transform: S(l) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`
              }), b && o !== b.length - 1 && void 0 !== a && o !== a && o < a ? k(i.current, {
                transition: `opacity 0.5s cubic-bezier(${C.join(",")})`,
                opacity: "0"
              }) : k(i.current, {
                transition: `opacity 0.5s cubic-bezier(${C.join(",")})`,
                opacity: "1"
              }), h(null == r ? void 0 : r[Math.max(o, 0)])
            }, [n.current, r, b, a, i, h]);
          return o.useEffect(() => {
            if (d || e) {
              var t;
              let n = null != (t = null == r ? void 0 : r.findIndex(t => t === e || t === d)) ? t : -1;
              b && -1 !== n && "number" == typeof b[n] && y(b[n])
            }
          }, [d, e, r, b, y]), {
            isLastSnapPoint: m,
            activeSnapPoint: d,
            shouldFade: g,
            getPercentageDragged: function(e, t) {
              if (!r || "number" != typeof v || !b || void 0 === a) return null;
              let n = v === a - 1;
              if (v >= a && t) return 0;
              if (n && !t) return 1;
              if (!g && !n) return null;
              let i = n ? v + 1 : v - 1,
                o = e / Math.abs(n ? b[i] - b[i - 1] : b[i + 1] - b[i]);
              return n ? 1 - o : o
            },
            setActiveSnapPoint: h,
            activeSnapPointIndex: v,
            onRelease: function({
              draggedDistance: e,
              closeDrawer: t,
              velocity: n,
              dismissible: o
            }) {
              if (void 0 === a) return;
              let s = "bottom" === l || "right" === l ? (null != w ? w : 0) - e : (null != w ? w : 0) + e,
                u = v === a - 1,
                d = 0 === v,
                h = e > 0;
              if (u && k(i.current, {
                  transition: `opacity 0.5s cubic-bezier(${C.join(",")})`
                }), !c && n > 2 && !h) return void(o ? t() : y(b[0]));
              if (!c && n > 2 && h && b && r) return void y(b[r.length - 1]);
              let f = null == b ? void 0 : b.reduce((e, t) => "number" != typeof e || "number" != typeof t ? e : Math.abs(t - s) < Math.abs(e - s) ? t : e),
                p = S(l) ? window.innerHeight : window.innerWidth;
              if (n > .4 && Math.abs(e) < .4 * p) {
                let e = h ? 1 : -1;
                return e > 0 && m && r ? void y(b[r.length - 1]) : void(d && e < 0 && o && t(), null === v || y(b[v + e]))
              }
              y(f)
            },
            onDrag: function({
              draggedDistance: e
            }) {
              if (null === w) return;
              let t = "bottom" === l || "right" === l ? w - e : w + e;
              ("bottom" === l || "right" === l) && t < b[b.length - 1] || ("top" === l || "left" === l) && t > b[b.length - 1] || k(n.current, {
                transform: S(l) ? `translate3d(0, ${t}px, 0)` : `translate3d(${t}px, 0, 0)`
              })
            },
            snapPointsOffset: b
          }
        }({
          snapPoints: p,
          activeSnapPointProp: M,
          setActiveSnapPointProp: N,
          drawerRef: eb,
          fadeFromIndex: P,
          overlayRef: es,
          onSnapPointChange: eA,
          direction: B,
          container: Y,
          snapToSequentialPoint: q
        });
        ! function(e = {}) {
          let {
            isDisabled: t
          } = e;
          d(() => {
            if (!t) {
              var e, r, i;
              let t, o, a, s, l, c, d;
              return 1 == ++g && u() && (a = 0, s = window.pageXOffset, l = window.pageYOffset, c = h((e = document.documentElement, r = "paddingRight", i = `${window.innerWidth-document.documentElement.clientWidth}px`, t = e.style[r], e.style[r] = i, () => {
                e.style[r] = t
              })), window.scrollTo(0, 0), d = h(b(document, "touchstart", e => {
                ((o = m(e.target)) !== document.documentElement || o !== document.body) && (a = e.changedTouches[0].pageY)
              }, {
                passive: !1,
                capture: !0
              }), b(document, "touchmove", e => {
                if (!o || o === document.documentElement || o === document.body) return void e.preventDefault();
                let t = e.changedTouches[0].pageY,
                  r = o.scrollTop,
                  n = o.scrollHeight - o.clientHeight;
                0 !== n && ((r <= 0 && t > a || r >= n && t < a) && e.preventDefault(), a = t)
              }, {
                passive: !1,
                capture: !0
              }), b(document, "touchend", e => {
                let t = e.target;
                y(t) && t !== document.activeElement && (e.preventDefault(), t.style.transform = "translateY(-2000px)", t.focus(), requestAnimationFrame(() => {
                  t.style.transform = ""
                }))
              }, {
                passive: !1,
                capture: !0
              }), b(document, "focus", e => {
                let t = e.target;
                y(t) && (t.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
                  t.style.transform = "", f && (f.height < window.innerHeight ? requestAnimationFrame(() => {
                    w(t)
                  }) : f.addEventListener("resize", () => w(t), {
                    once: !0
                  }))
                }))
              }, !0), b(window, "scroll", () => {
                window.scrollTo(0, 0)
              })), n = () => {
                c(), d(), window.scrollTo(s, l)
              }), () => {
                0 == --g && (null == n || n())
              }
            }
          }, [t])
        }({
          isDisabled: !Z || en || !G || eo || !et || !V || !H
        });
        let {
          restorePositionSetting: eI
        } = function({
          isOpen: e,
          modal: t,
          nested: r,
          hasBeenOpened: n,
          preventScrollRestoration: i,
          noBodyStyles: a
        }) {
          let [s, u] = o.useState(() => "u" > typeof window ? window.location.href : ""), c = o.useRef(0), d = o.useCallback(() => {
            if (l() && null === L && e && !a) {
              L = {
                position: document.body.style.position,
                top: document.body.style.top,
                left: document.body.style.left,
                height: document.body.style.height,
                right: "unset"
              };
              let {
                scrollX: e,
                innerHeight: t
              } = window;
              document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
                top: `${-c.current}px`,
                left: `${-e}px`,
                right: "0px",
                height: "auto"
              }), window.setTimeout(() => window.requestAnimationFrame(() => {
                let e = t - window.innerHeight;
                e && c.current >= t && (document.body.style.top = `${-(c.current+e)}px`)
              }), 300)
            }
          }, [e]), h = o.useCallback(() => {
            if (l() && null !== L && !a) {
              let e = -parseInt(document.body.style.top, 10),
                t = -parseInt(document.body.style.left, 10);
              Object.assign(document.body.style, L), window.requestAnimationFrame(() => {
                i && s !== window.location.href ? u(window.location.href) : window.scrollTo(t, e)
              }), L = null
            }
          }, [s]);
          return o.useEffect(() => {
            function e() {
              c.current = window.scrollY
            }
            return e(), window.addEventListener("scroll", e), () => {
              window.removeEventListener("scroll", e)
            }
          }, []), o.useEffect(() => {
            if (t) return () => {
              "u" < typeof document || document.querySelector("[data-vaul-drawer]") || h()
            }
          }, [t, h]), o.useEffect(() => {
            !r && n && (e ? (window.matchMedia("(display-mode: standalone)").matches || d(), t || window.setTimeout(() => {
              h()
            }, 500)) : h())
          }, [e, n, s, t, r, d, h]), {
            restorePositionSetting: h
          }
        }({
          isOpen: Z,
          modal: G,
          nested: null != F && F,
          hasBeenOpened: et,
          preventScrollRestoration: $,
          noBodyStyles: z
        });

        function eL() {
          return (window.innerWidth - 26) / window.innerWidth
        }

        function eD(e, t) {
          var r;
          let n = e,
            i = null == (r = window.getSelection()) ? void 0 : r.toString(),
            o = eb.current ? _(eb.current, B) : null,
            a = new Date;
          if ("SELECT" === n.tagName || n.hasAttribute("data-vaul-no-drag") || n.closest("[data-vaul-no-drag]")) return !1;
          if ("right" === B || "left" === B) return !0;
          if (el.current && a.getTime() - el.current.getTime() < 500) return !1;
          if (null !== o && ("bottom" === B ? o > 0 : o < 0)) return !0;
          if (i && i.length > 0) return !1;
          if (ed.current && a.getTime() - ed.current.getTime() < x && 0 === o || t) return ed.current = a, !1;
          for (; n;) {
            if (n.scrollHeight > n.clientHeight) {
              if (0 !== n.scrollTop) return ed.current = new Date, !1;
              if ("dialog" === n.getAttribute("role")) break
            }
            n = n.parentNode
          }
          return !0
        }

        function eP(e) {
          en && eb.current && (eb.current.classList.remove(O), eh.current = !1, ei(!1), ec.current = new Date), null == U || U(), e || ee(!1), setTimeout(() => {
            p && e_(p[0])
          }, 500)
        }

        function eM() {
          if (!eb.current) return;
          let e = document.querySelector("[data-vaul-drawer-wrapper]"),
            t = _(eb.current, B);
          k(eb.current, {
            transform: "translate3d(0, 0, 0)",
            transition: `transform 0.5s cubic-bezier(${C.join(",")})`
          }), k(es.current, {
            transition: `opacity 0.5s cubic-bezier(${C.join(",")})`,
            opacity: "1"
          }), v && t && t > 0 && Z && k(e, {
            borderRadius: "8px",
            overflow: "hidden",
            ...S(B) ? {
              transform: `scale(${eL()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
              transformOrigin: "top"
            } : {
              transform: `scale(${eL()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
              transformOrigin: "left"
            },
            transitionProperty: "transform, border-radius",
            transitionDuration: "0.5s",
            transitionTimingFunction: `cubic-bezier(${C.join(",")})`
          }, !0)
        }
        return o.useEffect(() => {
          window.requestAnimationFrame(() => {
            ev.current = !0
          })
        }, []), o.useEffect(() => {
          var e;

          function t() {
            if (eb.current && V && (y(document.activeElement) || em.current)) {
              var e;
              let t = (null == (e = window.visualViewport) ? void 0 : e.height) || 0,
                r = window.innerHeight,
                n = r - t,
                i = eb.current.getBoundingClientRect().height || 0;
              eE.current || (eE.current = i);
              let o = eb.current.getBoundingClientRect().top;
              if (Math.abs(eg.current - n) > 60 && (em.current = !em.current), p && p.length > 0 && eC && eS && (n += eC[eS] || 0), eg.current = n, i > t || em.current) {
                let e = eb.current.getBoundingClientRect().height,
                  a = e;
                e > t && (a = t - (i > .8 * r ? o : 26)), j ? eb.current.style.height = `${e-Math.max(n,0)}px` : eb.current.style.height = `${Math.max(a,t-o)}px`
              } else {
                let e;
                e = navigator.userAgent, "u" > typeof window && (/Firefox/.test(e) && /Mobile/.test(e) || /FxiOS/.test(e)) || (eb.current.style.height = `${eE.current}px`)
              }
              p && p.length > 0 && !em.current ? eb.current.style.bottom = "0px" : eb.current.style.bottom = `${Math.max(n,0)}px`
            }
          }
          return null == (e = window.visualViewport) || e.addEventListener("resize", t), () => {
            var e;
            return null == (e = window.visualViewport) ? void 0 : e.removeEventListener("resize", t)
          }
        }, [eS, p, eC]), o.useEffect(() => (Z && (k(document.documentElement, {
          scrollBehavior: "auto"
        }), el.current = new Date), () => {
          ! function(e, t) {
            if (!e || !(e instanceof HTMLElement)) return;
            let r = A.get(e);
            r && (e.style[t] = r[t])
          }(document.documentElement, "scrollBehavior")
        }), [Z]), o.useEffect(() => {
          G || window.requestAnimationFrame(() => {
            document.body.style.pointerEvents = "auto"
          })
        }, [G]), o.createElement(i.bL, {
          defaultOpen: W,
          onOpenChange: e => {
            (I || e) && (e ? er(!0) : eP(!0), ee(e))
          },
          open: Z
        }, o.createElement(a.Provider, {
          value: {
            activeSnapPoint: ek,
            snapPoints: p,
            setActiveSnapPoint: e_,
            drawerRef: eb,
            overlayRef: es,
            onOpenChange: t,
            onPress: function(e) {
              var t, r;
              !I && !p || (!eb.current || eb.current.contains(e.target)) && (ew.current = (null == (t = eb.current) ? void 0 : t.getBoundingClientRect().height) || 0, ey.current = (null == (r = eb.current) ? void 0 : r.getBoundingClientRect().width) || 0, ei(!0), eu.current = new Date, u() && window.addEventListener("touchend", () => eh.current = !1, {
                once: !0
              }), e.target.setPointerCapture(e.pointerId), ep.current = S(B) ? e.pageY : e.pageX)
            },
            onRelease: function(e) {
              var t, r;
              if (!en || !eb.current) return;
              eb.current.classList.remove(O), eh.current = !1, ei(!1), ec.current = new Date;
              let n = _(eb.current, B);
              if (!e || !eD(e.target, !1) || !n || Number.isNaN(n) || null === eu.current) return;
              let i = ec.current.getTime() - eu.current.getTime(),
                o = ep.current - (S(B) ? e.pageY : e.pageX),
                a = Math.abs(o) / i;
              if (a > .05 && (ea(!0), setTimeout(() => {
                  ea(!1)
                }, 200)), p) {
                eT({
                  draggedDistance: o * ("bottom" === B || "right" === B ? 1 : -1),
                  closeDrawer: eP,
                  velocity: a,
                  dismissible: I
                }), null == c || c(e, !0);
                return
              }
              if ("bottom" === B || "right" === B ? o > 0 : o < 0) {
                eM(), null == c || c(e, !0);
                return
              }
              if (a > .4) {
                eP(), null == c || c(e, !1);
                return
              }
              let s = Math.min(null != (t = eb.current.getBoundingClientRect().height) ? t : 0, window.innerHeight),
                l = Math.min(null != (r = eb.current.getBoundingClientRect().width) ? r : 0, window.innerWidth);
              if (Math.abs(n) >= ("left" === B || "right" === B ? l : s) * T) {
                eP(), null == c || c(e, !1);
                return
              }
              null == c || c(e, !0), eM()
            },
            onDrag: function(e) {
              if (eb.current && en) {
                let t = "bottom" === B || "right" === B ? 1 : -1,
                  r = (ep.current - (S(B) ? e.pageY : e.pageX)) * t,
                  n = r > 0,
                  i = p && !I && !n;
                if (i && 0 === eS) return;
                let o = Math.abs(r),
                  a = document.querySelector("[data-vaul-drawer-wrapper]"),
                  l = o / ("bottom" === B || "top" === B ? ew.current : ey.current),
                  u = eR(o, n);
                if (null !== u && (l = u), i && l >= 1 || !eh.current && !eD(e.target, n)) return;
                if (eb.current.classList.add(O), eh.current = !0, k(eb.current, {
                    transition: "none"
                  }), k(es.current, {
                    transition: "none"
                  }), p && eO({
                    draggedDistance: r
                  }), n && !p) {
                  let e = Math.min(-(8 * (Math.log(r + 1) - 2) * 1), 0) * t;
                  k(eb.current, {
                    transform: S(B) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`
                  });
                  return
                }
                let c = 1 - l;
                if ((ex || P && eS === P - 1) && (null == s || s(e, l), k(es.current, {
                    opacity: `${c}`,
                    transition: "none"
                  }, !0)), a && es.current && v) {
                  let e = Math.min(eL() + l * (1 - eL()), 1),
                    t = 8 - 8 * l,
                    r = Math.max(0, 14 - 14 * l);
                  k(a, {
                    borderRadius: `${t}px`,
                    transform: S(B) ? `scale(${e}) translate3d(0, ${r}px, 0)` : `scale(${e}) translate3d(${r}px, 0, 0)`,
                    transition: "none"
                  }, !0)
                }
                if (!p) {
                  let e = o * t;
                  k(eb.current, {
                    transform: S(B) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`
                  })
                }
              }
            },
            dismissible: I,
            shouldAnimate: ev,
            handleOnly: D,
            isOpen: Z,
            isDragging: en,
            shouldFade: ex,
            closeDrawer: eP,
            onNestedDrag: function(e, t) {
              if (t < 0) return;
              let r = (window.innerWidth - 16) / window.innerWidth,
                n = r + t * (1 - r),
                i = -16 + 16 * t;
              k(eb.current, {
                transform: S(B) ? `scale(${n}) translate3d(0, ${i}px, 0)` : `scale(${n}) translate3d(${i}px, 0, 0)`,
                transition: "none"
              })
            },
            onNestedOpenChange: function(e) {
              let t = e ? (window.innerWidth - 16) / window.innerWidth : 1,
                r = e ? -16 : 0;
              ef.current && window.clearTimeout(ef.current), k(eb.current, {
                transition: `transform 0.5s cubic-bezier(${C.join(",")})`,
                transform: S(B) ? `scale(${t}) translate3d(0, ${r}px, 0)` : `scale(${t}) translate3d(${r}px, 0, 0)`
              }), !e && eb.current && (ef.current = setTimeout(() => {
                let e = _(eb.current, B);
                k(eb.current, {
                  transition: "none",
                  transform: S(B) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`
                })
              }, 500))
            },
            onNestedRelease: function(e, t) {
              let r = S(B) ? window.innerHeight : window.innerWidth,
                n = t ? (r - 16) / r : 1,
                i = t ? -16 : 0;
              t && k(eb.current, {
                transition: `transform 0.5s cubic-bezier(${C.join(",")})`,
                transform: S(B) ? `scale(${n}) translate3d(0, ${i}px, 0)` : `scale(${n}) translate3d(${i}px, 0, 0)`
              })
            },
            keyboardIsOpen: em,
            modal: G,
            snapPointsOffset: eC,
            activeSnapPointIndex: eS,
            direction: B,
            shouldScaleBackground: v,
            setBackgroundColorOnScale: E,
            noBodyStyles: z,
            container: Y,
            autoFocus: Q
          }
        }, r))
      }
      let P = o.forwardRef(function({
        ...e
      }, t) {
        let {
          overlayRef: r,
          snapPoints: n,
          onRelease: a,
          shouldFade: l,
          isOpen: u,
          modal: c,
          shouldAnimate: d
        } = s(), h = E(t, r), f = n && n.length > 0;
        if (!c) return null;
        let p = o.useCallback(e => a(e), [a]);
        return o.createElement(i.hJ, {
          onMouseUp: p,
          ref: h,
          "data-vaul-overlay": "",
          "data-vaul-snap-points": u && f ? "true" : "false",
          "data-vaul-snap-points-overlay": u && l ? "true" : "false",
          "data-vaul-animate": (null == d ? void 0 : d.current) ? "true" : "false",
          ...e
        })
      });
      P.displayName = "Drawer.Overlay";
      let M = o.forwardRef(function({
        onPointerDownOutside: e,
        style: t,
        onOpenAutoFocus: r,
        ...n
      }, a) {
        let {
          drawerRef: l,
          onPress: u,
          onRelease: c,
          onDrag: d,
          keyboardIsOpen: h,
          snapPointsOffset: f,
          activeSnapPointIndex: p,
          modal: m,
          isOpen: v,
          direction: g,
          snapPoints: b,
          container: w,
          handleOnly: y,
          shouldAnimate: A,
          autoFocus: k
        } = s(), [_, O] = o.useState(!1), x = E(a, l), R = o.useRef(null), L = o.useRef(null), D = o.useRef(!1), P = b && b.length > 0;

        function M(e) {
          R.current = null, D.current = !1, c(e)
        }
        return ! function() {
          let {
            direction: e,
            isOpen: t,
            shouldScaleBackground: r,
            setBackgroundColorOnScale: n,
            noBodyStyles: i
          } = s(), a = o.useRef(null), l = (0, o.useMemo)(() => document.body.style.backgroundColor, []);

          function u() {
            return (window.innerWidth - 26) / window.innerWidth
          }
          o.useEffect(() => {
            if (t && r) {
              a.current && clearTimeout(a.current);
              let t = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
              if (!t) return;
              ! function(...e) {}(n && !i ? T(document.body, {
                background: "black"
              }) : I, T(t, {
                transformOrigin: S(e) ? "top" : "left",
                transitionProperty: "transform, border-radius",
                transitionDuration: "0.5s",
                transitionTimingFunction: `cubic-bezier(${C.join(",")})`
              }));
              let r = T(t, {
                borderRadius: "8px",
                overflow: "hidden",
                ...S(e) ? {
                  transform: `scale(${u()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
                } : {
                  transform: `scale(${u()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
                }
              });
              return () => {
                r(), a.current = window.setTimeout(() => {
                  l ? document.body.style.background = l : document.body.style.removeProperty("background")
                }, 500)
              }
            }
          }, [t, r, l])
        }(), o.useEffect(() => {
          P && window.requestAnimationFrame(() => {
            O(!0)
          })
        }, []), o.createElement(i.UC, {
          "data-vaul-drawer-direction": g,
          "data-vaul-drawer": "",
          "data-vaul-delayed-snap-points": _ ? "true" : "false",
          "data-vaul-snap-points": v && P ? "true" : "false",
          "data-vaul-custom-container": w ? "true" : "false",
          "data-vaul-animate": (null == A ? void 0 : A.current) ? "true" : "false",
          ...n,
          ref: x,
          style: f && f.length > 0 ? {
            "--snap-point-height": `${f[null!=p?p:0]}px`,
            ...t
          } : t,
          onPointerDown: e => {
            y || (null == n.onPointerDown || n.onPointerDown.call(n, e), R.current = {
              x: e.pageX,
              y: e.pageY
            }, u(e))
          },
          onOpenAutoFocus: e => {
            null == r || r(e), k || e.preventDefault()
          },
          onPointerDownOutside: t => {
            (null == e || e(t), !m || t.defaultPrevented) ? t.preventDefault(): h.current && (h.current = !1)
          },
          onFocusOutside: e => {
            if (!m) return void e.preventDefault()
          },
          onPointerMove: e => {
            if (L.current = e, y || (null == n.onPointerMove || n.onPointerMove.call(n, e), !R.current)) return;
            let t = e.pageY - R.current.y,
              r = e.pageX - R.current.x,
              i = "touch" === e.pointerType ? 10 : 2;
            ((e, t, r = 0) => {
              if (D.current) return !0;
              let n = Math.abs(e.y),
                i = Math.abs(e.x),
                o = i > n,
                a = ["bottom", "right"].includes(t) ? 1 : -1;
              if ("left" === t || "right" === t) {
                if (!(e.x * a < 0) && i >= 0 && i <= r) return o
              } else if (!(e.y * a < 0) && n >= 0 && n <= r) return !o;
              return D.current = !0, !0
            })({
              x: r,
              y: t
            }, g, i) ? d(e): (Math.abs(r) > i || Math.abs(t) > i) && (R.current = null)
          },
          onPointerUp: e => {
            null == n.onPointerUp || n.onPointerUp.call(n, e), R.current = null, D.current = !1, c(e)
          },
          onPointerOut: e => {
            null == n.onPointerOut || n.onPointerOut.call(n, e), M(L.current)
          },
          onContextMenu: e => {
            null == n.onContextMenu || n.onContextMenu.call(n, e), L.current && M(L.current)
          }
        })
      });
      M.displayName = "Drawer.Content";
      let N = o.forwardRef(function({
        preventCycle: e = !1,
        children: t,
        ...r
      }, n) {
        let {
          closeDrawer: i,
          isDragging: a,
          snapPoints: l,
          activeSnapPoint: u,
          setActiveSnapPoint: c,
          dismissible: d,
          handleOnly: h,
          isOpen: f,
          onPress: p,
          onDrag: m
        } = s(), v = o.useRef(null), g = o.useRef(!1);

        function b() {
          v.current && window.clearTimeout(v.current), g.current = !1
        }
        return o.createElement("div", {
          onClick: function() {
            g.current ? b() : window.setTimeout(() => {
              ! function() {
                if (a || e || g.current) return b();
                if (b(), !l || 0 === l.length) {
                  d || i();
                  return
                }
                if (u === l[l.length - 1] && d) return i();
                let t = l.findIndex(e => e === u); - 1 === t || c(l[t + 1])
              }()
            }, 120)
          },
          onPointerCancel: b,
          onPointerDown: e => {
            h && p(e), v.current = window.setTimeout(() => {
              g.current = !0
            }, 250)
          },
          onPointerMove: e => {
            h && m(e)
          },
          ref: n,
          "data-vaul-drawer-visible": f ? "true" : "false",
          "data-vaul-handle": "",
          "aria-hidden": "true",
          ...r
        }, o.createElement("span", {
          "data-vaul-handle-hitarea": "",
          "aria-hidden": "true"
        }, t))
      });
      N.displayName = "Drawer.Handle";
      let j = {
        Root: D,
        NestedRoot: function({
          onDrag: e,
          onOpenChange: t,
          open: r,
          ...n
        }) {
          let {
            onNestedDrag: i,
            onNestedOpenChange: a,
            onNestedRelease: l
          } = s();
          if (!i) throw Error("Drawer.NestedRoot must be placed in another drawer");
          return o.createElement(D, {
            nested: !0,
            open: r,
            onClose: () => {
              a(!1)
            },
            onDrag: (t, r) => {
              i(t, r), null == e || e(t, r)
            },
            onOpenChange: e => {
              e && a(e), null == t || t(e)
            },
            onRelease: l,
            ...n
          })
        },
        Content: M,
        Overlay: P,
        Trigger: i.l9,
        Portal: function(e) {
          let t = s(),
            {
              container: r = t.container,
              ...n
            } = e;
          return o.createElement(i.ZL, {
            container: r,
            ...n
          })
        },
        Handle: N,
        Close: i.bm,
        Title: i.hE,
        Description: i.VY
      }
    },
    39576: (e, t, r) => {
      "use strict";
      var n, i;
      r.d(t, {
        c: () => n
      }), (i = n || (n = {})).PASS_GAME_DATA = "PASS_GAME_DATA", i.REWARD_CALLBACK = "REWARD_CALLBACK", i.INTERSTITIAL_CALLBACK = "INTERSTITIAL_CALLBACK", i.CHECK_TO_STOP_MOBILE_CRAWLING = "CHECK_TO_STOP_MOBILE_CRAWLING", i.ANALYTICS_GAME_DOWNLOAD = "ANALYTICS_GAME_DOWNLOAD", i.RESIZE_CONTAINER = "RESIZE_CONTAINER", i.SET_LS_ITEM = "SET_LS_ITEM", i.REMOVE_LS_ITEM = "REMOVE_LS_ITEM", i.UPDATE_COOKIE = "UPDATE_COOKIE", i.UPDATE_INDEXED_DB = "UPDATE_INDEXED_DB", i.UPDATE_LOCAL_STORAGE_ITEM = "UPDATE_LOCAL_STORAGE_ITEM", i.LOGIN_USER = "LOGIN_USER", i.LOGOUT_USER = "LOGOUT_USER", i.SET_AUTHORIZED_STATUS = "SET_AUTHORIZED_STATUS", i.OPEN_LOGIN_POPUP = "OPEN_LOGIN_POPUP", i.CLOSE_LOGIN_POPUP = "CLOSE_LOGIN_POPUP", i.ARENA_TO_GAME_ACTION = "ARENA_TO_GAME_ACTION", i.TEST_READY = "TEST_READY", i.GAME_START = "GAME_START", i.UPDATE_LOCAL_STORAGE = "UPDATE_LOCAL_STORAGE", i.EVENT_CHANGE = "EVENT_CHANGE", i.AD_START = "AD_START", i.CHANGE_SCORE = "CHANGE_SCORE", i.GAME_END = "GAME_END", i.REWARD_START = "REWARD_START", i.INTERSTITIAL_START = "INTERSTITIAL_START", i.GAME_PAUSE = "GAME_PAUSE", i.GAME_RESUME = "GAME_RESUME", i.AD_REFRESH = "AD_REFRESH", i.PURCHASE_UPDATE = "PURCHASE_UPDATE", i.PURCHASE_REQUEST = "PURCHASE_REQUEST", i.PURCHASE_RESPONSE = "PURCHASE_RESPONSE", i.AB_TEST_GROUP = "AB_TEST_GROUP", i.USER_EVENT = "USER_EVENT", i.MARKETING_ACTION = "MARKETING_ACTION", i.ANALYTICS_EVENT = "ANALYTICS_EVENT", i.AUTH_API_EVENT = "AUTH_API_EVENT", i.OPT_LOG_IN = "OPT_LOG_IN", i.REDEEM_POWERUP = "REDEEM_POWERUP", i.POWERUP_CALLBACK = "POWERUP_CALLBACK", i.GAME_LOAD_ERROR = "GAME_LOAD_ERROR", i.GAME_LOAD_TIMING = "GAME_LOAD_TIMING"
    },
    42728: (e, t, r) => {
      "use strict";
      var n, i;
      r.d(t, {
        Q: () => n
      }), (i = n || (n = {})).LIVE = "live", i.CANARY = "canary", i.DEV = "dev"
    },
    42879: () => {},
    44925: e => {
      "use strict";
      var t = function(e) {
          var t, n, i;
          return !!(t = e) && "object" == typeof t && (n = e, "[object RegExp]" !== (i = Object.prototype.toString.call(n)) && "[object Date]" !== i && n.$$typeof !== r)
        },
        r = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function n(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? s(Array.isArray(e) ? [] : {}, e, t) : e
      }

      function i(e, t, r) {
        return e.concat(t).map(function(e) {
          return n(e, r)
        })
      }

      function o(e) {
        return Object.keys(e).concat(Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
          return Object.propertyIsEnumerable.call(e, t)
        }) : [])
      }

      function a(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function s(e, r, l) {
        (l = l || {}).arrayMerge = l.arrayMerge || i, l.isMergeableObject = l.isMergeableObject || t, l.cloneUnlessOtherwiseSpecified = n;
        var u, c, d = Array.isArray(r);
        return d !== Array.isArray(e) ? n(r, l) : d ? l.arrayMerge(e, r, l) : (c = {}, (u = l).isMergeableObject(e) && o(e).forEach(function(t) {
          c[t] = n(e[t], u)
        }), o(r).forEach(function(t) {
          a(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t)) || (a(e, t) && u.isMergeableObject(r[t]) ? c[t] = (function(e, t) {
            if (!t.customMerge) return s;
            var r = t.customMerge(e);
            return "function" == typeof r ? r : s
          })(t, u)(e[t], r[t], u) : c[t] = n(r[t], u))
        }), c)
      }
      s.all = function(e, t) {
        if (!Array.isArray(e)) throw Error("first argument should be an array");
        return e.reduce(function(e, r) {
          return s(e, r, t)
        }, {})
      }, e.exports = s
    },
    45160: () => {},
    47072: () => {},
    53251: () => {},
    55724: () => {},
    59402: (e, t, r) => {
      "use strict";

      function n() {
        return (n = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }).apply(null, arguments)
      }
      r.d(t, {
        A: () => n
      })
    },
    60661: () => {},
    61428: () => {},
    61828: (e, t, r) => {
      "use strict";
      var n, i;
      r.d(t, {
        W: () => n
      }), (i = n || (n = {})).END_PREROLL = "arkadium:endPreroll", i.SET_GAME_TYPE = "arkadium:setGameType"
    },
    65855: () => {},
    66386: () => {},
    67114: (e, t, r) => {
      "use strict";
      r.d(t, {
        l: () => n
      });
      var n = {
        IFRAME_BASE_URL: "https://arenacloud.cdn.arkadiumhosted.com/arkadiummodulesstorage-blob/game-rendering-iframe/",
        IFRAME_DEMO_MODE_URL: "https://testing.arkadium.com/gameExamples/demo-games/sdk-demo/",
        EAGLE_AUTH_API_ENDPOINT: {
          dev: "https://eagle-user-api-dev.arkadiumhosted.com/",
          prod: "https://eagle-user-api-prod.arkadiumhosted.com/"
        },
        EAGLE_PAYMENT_API_ENDPOINT: {
          dev: "https://eagle-payment-api.uup-aks-dev.arkadiumhosted.com",
          prod: "https://arenacloud.cdn.arkadiumhosted.com/eagle-payment-api-prod/"
        },
        EAGLE_VIRTUAL_ITEMS_API_ENDPOINT: {
          dev: "https://eagle-virtual-item-api.uup-aks-dev.arkadiumhosted.com/",
          prod: "https://arenacloud.cdn.arkadiumhosted.com/eagle-virtual-item-api-prod/"
        },
        EAGLE_USER_GAME_DATA_API_ENDPOINT: {
          dev: "https://arenacloud.cdn.arkadiumhosted.com/uup-api-user-data-dev/api/v1",
          prod: "https://arenacloud.cdn.arkadiumhosted.com/uup-api-user-data-prod/api/v1"
        },
        GAMES_WITH_EAGLE_LIST_PATH: "https://arenacloud.cdn.arkadiumhosted.com/arkadiummodulesstorage-blob/game-rendering-games-list/games-with-eagle-list.json",
        GRM_GAMES_LIST_URL: {
          arena51: {
            live: "https://arenacloud.cdn.arkadiumhosted.com/arkadiummodulesstorage-blob/game-rendering-games-list/arena51/prod/index.json",
            staging: "https://arenacloud.cdn.arkadiumhosted.com/arkadiummodulesstorage-blob/game-rendering-games-list/arena51/staging/index.json",
            canary: "https://arenacloud.cdn.arkadiumhosted.com/arkadiummodulesstorage-blob/game-rendering-games-list/arena51/canary/index.json",
            dev: "https://arenacloud.cdn.arkadiumhosted.com/arkadiummodulesstorage-blob/game-rendering-games-list/arena51/dev/index.json"
          },
          arkcom: {
            live: "https://arenacloud.cdn.arkadiumhosted.com/arkadiummodulesstorage-blob/game-rendering-games-list/arkcom/prod/index.json",
            stage: "https://arenacloud.cdn.arkadiumhosted.com/arkadiummodulesstorage-blob/game-rendering-games-list/arkcom/stage/index.json",
            dev: "https://arenacloud.cdn.arkadiumhosted.com/arkadiummodulesstorage-blob/game-rendering-games-list/arkcom/dev/index.json"
          },
          aarp: {
            stage: "https://arenacloud.cdn.arkadiumhosted.com/arkadiummodulesstorage-blob/game-rendering-games-list/aarp/stage/index.json",
            prod: "https://arenacloud.cdn.arkadiumhosted.com/arkadiummodulesstorage-blob/game-rendering-games-list/aarp/prod/index.json"
          }
        },
        SDK_URL: "https://developers.arkadium.com/cdn/sdk/v1/arena-sdk.js",
        PATH_TO_GAMES_URL: "https://arenacloud.cdn.arkadiumhosted.com/arenaxstorage-blob/arenax-games/",
        PATH_TO_GAMES_URL_AARP: "https://aarpcloud.cdn.arkadiumhosted.com/arenaxstorage-blob/arenax-games/"
      }
    },
    70192: e => {
      e.exports = {
        unitContainer: "Game_unitContainer__4cmLO",
        canvasContainer: "Game_canvasContainer__xCPfR",
        canvasBoxWrapper: "Game_canvasBoxWrapper__Nv__B",
        canvasBox: "Game_canvasBox__yWQxV",
        gameContainerWrapper: "Game_gameContainerWrapper__rP_CZ",
        hidden: "Game_hidden__uaJR8",
        gameCanvas: "Game_gameCanvas__7XAMR"
      }
    },
    73708: e => {
      "use strict";
      var t = {}.hasOwnProperty,
        r = function(e, r) {
          if (!e) return r;
          var n = {};
          for (var i in r) n[i] = t.call(e, i) ? e[i] : r[i];
          return n
        },
        n = /[ -,\.\/:-@\[-\^`\{-~]/,
        i = /[ -,\.\/:-@\[\]\^`\{-~]/,
        o = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        a = function e(t, a) {
          "single" != (a = r(a, e.options)).quotes && "double" != a.quotes && (a.quotes = "single");
          for (var s = "double" == a.quotes ? '"' : "'", l = a.isIdentifier, u = t.charAt(0), c = "", d = 0, h = t.length; d < h;) {
            var f = t.charAt(d++),
              p = f.charCodeAt(),
              m = void 0;
            if (p < 32 || p > 126) {
              if (p >= 55296 && p <= 56319 && d < h) {
                var v = t.charCodeAt(d++);
                (64512 & v) == 56320 ? p = ((1023 & p) << 10) + (1023 & v) + 65536 : d--
              }
              m = "\\" + p.toString(16).toUpperCase() + " "
            } else m = a.escapeEverything ? n.test(f) ? "\\" + f : "\\" + p.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(f) ? "\\" + p.toString(16).toUpperCase() + " " : "\\" == f || !l && ('"' == f && s == f || "'" == f && s == f) || l && i.test(f) ? "\\" + f : f;
            c += m
          }
          return (l && (/^-[-\d]/.test(c) ? c = "\\-" + c.slice(1) : /\d/.test(u) && (c = "\\3" + u + " " + c.slice(1))), c = c.replace(o, function(e, t, r) {
            return t && t.length % 2 ? e : (t || "") + r
          }), !l && a.wrap) ? s + c + s : c
        };
      a.options = {
        escapeEverything: !1,
        isIdentifier: !1,
        quotes: "single",
        wrap: !1
      }, a.version = "3.0.0", e.exports = a
    },
    74541: () => {},
    75960: () => {},
    77702: (e, t, r) => {
      "use strict";

      function n(e) {
        var t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      }

      function i(e, t) {
        var r = e;
        for (var n of t) {
          if (!(n in r)) throw Error("Path ".concat(t.join(" -> "), " does not exist in object"));
          r = r[n]
        }
        return r
      }
      r.d(t, {
        Bx: () => function e(t, r) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            i = {};
          for (var o in t) {
            var a = t[o],
              s = [...n, o];
            "string" == typeof a || "number" == typeof a || null == a ? i[o] = r(a, s) : "object" != typeof a || Array.isArray(a) ? console.warn('Skipping invalid key "'.concat(s.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(a) ? "Array" : typeof a, '"')) : i[o] = e(a, r, s)
          }
          return i
        },
        Jt: () => i,
        Tm: () => n
      })
    },
    78628: (e, t, r) => {
      "use strict";
      r.d(t, {
        m: () => u
      });
      var n = r(55421),
        i = r(12306),
        o = r(42955),
        a = r(35712),
        s = function(e, t, r, n) {
          return new(r || (r = Promise))(function(i, o) {
            function a(e) {
              try {
                l(n.next(e))
              } catch (e) {
                o(e)
              }
            }

            function s(e) {
              try {
                l(n.throw(e))
              } catch (e) {
                o(e)
              }
            }

            function l(e) {
              var t;
              e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                e(t)
              })).then(a, s)
            }
            l((n = n.apply(e, t || [])).next())
          })
        },
        l = function(e, t) {
          var r, n, i, o = {
              label: 0,
              sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
              },
              trys: [],
              ops: []
            },
            a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
          return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
          }), a;

          function s(s) {
            return function(l) {
              var u = [s, l];
              if (r) throw TypeError("Generator is already executing.");
              for (; a && (a = 0, u[0] && (o = 0)), o;) try {
                if (r = 1, n && (i = 2 & u[0] ? n.return : u[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, u[1])).done) return i;
                switch (n = 0, i && (u = [2 & u[0], i.value]), u[0]) {
                  case 0:
                  case 1:
                    i = u;
                    break;
                  case 4:
                    return o.label++, {
                      value: u[1],
                      done: !1
                    };
                  case 5:
                    o.label++, n = u[1], u = [0];
                    continue;
                  case 7:
                    u = o.ops.pop(), o.trys.pop();
                    continue;
                  default:
                    if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
                      o = 0;
                      continue
                    }
                    if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                      o.label = u[1];
                      break
                    }
                    if (6 === u[0] && o.label < i[1]) {
                      o.label = i[1], i = u;
                      break
                    }
                    if (i && o.label < i[2]) {
                      o.label = i[2], o.ops.push(u);
                      break
                    }
                    i[2] && o.ops.pop(), o.trys.pop();
                    continue
                }
                u = t.call(e, o)
              } catch (e) {
                u = [6, e], n = 0
              } finally {
                r = i = 0
              }
              if (5 & u[0]) throw u[1];
              return {
                value: u[0] ? u[1] : void 0,
                done: !0
              }
            }
          }
        },
        u = new(function() {
          function e() {
            this.lsPropName = "FP_VISITOR", this.isDev = !1
          }
          return e.prototype.init = function(e) {
            return s(this, void 0, void 0, function() {
              var t, r, n;
              return l(this, function(o) {
                switch (o.label) {
                  case 0:
                    return e && (this.isDev = e), n = (r = JSON).stringify, [4, this.detect()];
                  case 1:
                    return t = n.apply(r, [o.sent()]), i.sj.setItem(this.lsPropName, t), [2, this.detected]
                }
              })
            })
          }, e.prototype.detect = function() {
            return s(this, void 0, void 0, function() {
              var e, t, r, n, i;
              return l(this, function(o) {
                switch (o.label) {
                  case 0:
                    return e = this.detected, [4, this.getFingerprint()];
                  case 1:
                    return t = o.sent(), r = e && (null == e ? void 0 : e.fpVisitorId) && e.fpVisitorId !== t ? e.fpVisitorId : t, [4, this.isIncognito()];
                  case 2:
                    return n = o.sent(), i = {
                      fpVisitorId: r,
                      fpIncognito: n
                    }, a.v.info("FingerprintService", "detect!", i), [2, i]
                }
              })
            })
          }, Object.defineProperty(e.prototype, "detected", {
            get: function() {
              var e = i.sj.getItem(this.lsPropName),
                t = {
                  fpVisitorId: "unknown",
                  fpIncognito: "unknown"
                };
              try {
                t = e ? JSON.parse(e) : null
              } catch (e) {
                a.v.log(e)
              }
              return a.v.info("FingerprintService", "get detected", t), t
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.getFingerprint = function() {
            return s(this, void 0, void 0, function() {
              var e;
              return l(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [4, n.Ay.load()];
                  case 1:
                    return [4, t.sent().get()];
                  case 2:
                    return [2, null == (e = t.sent()) ? void 0 : e.visitorId]
                }
              })
            })
          }, e.prototype.isIncognito = function() {
            return s(this, void 0, void 0, function() {
              var e;
              return l(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [4, (0, o.k)()];
                  case 1:
                    return [2, null == (e = t.sent()) ? void 0 : e.isPrivate]
                }
              })
            })
          }, e
        }())
    },
    86222: e => {
      e.exports = {
        loaderContainer: "Loader_loaderContainer__xONQ4",
        fullscreen: "Loader_fullscreen__0CMm3",
        loaderText: "Loader_loaderText__PxyYt",
        loadingLetter: "Loader_loadingLetter__1V4hq",
        LoadingAnimation: "Loader_LoadingAnimation__GVXpl"
      }
    },
    87245: () => {},
    87720: (e, t, r) => {
      "use strict";
      r.d(t, {
        UC: () => er,
        VY: () => ei,
        ZL: () => ee,
        bL: () => J,
        bm: () => eo,
        hE: () => en,
        hJ: () => et,
        l9: () => Z
      });
      var n = r(12115),
        i = r(65453),
        o = r(633),
        a = r(75021),
        s = r(5337),
        l = r(38665),
        u = r(81354),
        c = r(4899),
        d = r(76990),
        h = r(31557),
        f = r(13275),
        p = r(1977),
        m = r(74967),
        v = r(65828),
        g = r(11792),
        b = r(95155),
        w = "Dialog",
        [y, E] = (0, a.A)(w),
        [A, k] = y(w),
        S = e => {
          let {
            __scopeDialog: t,
            children: r,
            open: i,
            defaultOpen: o,
            onOpenChange: a,
            modal: u = !0
          } = e, c = n.useRef(null), d = n.useRef(null), [h, f] = (0, l.i)({
            prop: i,
            defaultProp: o ?? !1,
            onChange: a,
            caller: w
          });
          return (0, b.jsx)(A, {
            scope: t,
            triggerRef: c,
            contentRef: d,
            contentId: (0, s.B)(),
            titleId: (0, s.B)(),
            descriptionId: (0, s.B)(),
            open: h,
            onOpenChange: f,
            onOpenToggle: n.useCallback(() => f(e => !e), [f]),
            modal: u,
            children: r
          })
        };
      S.displayName = w;
      var _ = "DialogTrigger",
        T = n.forwardRef((e, t) => {
          let {
            __scopeDialog: r,
            ...n
          } = e, a = k(_, r), s = (0, o.s)(t, a.triggerRef);
          return (0, b.jsx)(f.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": a.open,
            "aria-controls": a.contentId,
            "data-state": $(a.open),
            ...n,
            ref: s,
            onClick: (0, i.mK)(e.onClick, a.onOpenToggle)
          })
        });
      T.displayName = _;
      var C = "DialogPortal",
        [O, x] = y(C, {
          forceMount: void 0
        }),
        R = e => {
          let {
            __scopeDialog: t,
            forceMount: r,
            children: i,
            container: o
          } = e, a = k(C, t);
          return (0, b.jsx)(O, {
            scope: t,
            forceMount: r,
            children: n.Children.map(i, e => (0, b.jsx)(h.C, {
              present: r || a.open,
              children: (0, b.jsx)(d.Z, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        };
      R.displayName = C;
      var I = "DialogOverlay",
        L = n.forwardRef((e, t) => {
          let r = x(I, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...i
            } = e,
            o = k(I, e.__scopeDialog);
          return o.modal ? (0, b.jsx)(h.C, {
            present: n || o.open,
            children: (0, b.jsx)(P, {
              ...i,
              ref: t
            })
          }) : null
        });
      L.displayName = I;
      var D = (0, g.TL)("DialogOverlay.RemoveScroll"),
        P = n.forwardRef((e, t) => {
          let {
            __scopeDialog: r,
            ...n
          } = e, i = k(I, r);
          return (0, b.jsx)(m.A, {
            as: D,
            allowPinchZoom: !0,
            shards: [i.contentRef],
            children: (0, b.jsx)(f.sG.div, {
              "data-state": $(i.open),
              ...n,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }),
        M = "DialogContent",
        N = n.forwardRef((e, t) => {
          let r = x(M, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...i
            } = e,
            o = k(M, e.__scopeDialog);
          return (0, b.jsx)(h.C, {
            present: n || o.open,
            children: o.modal ? (0, b.jsx)(j, {
              ...i,
              ref: t
            }) : (0, b.jsx)(G, {
              ...i,
              ref: t
            })
          })
        });
      N.displayName = M;
      var j = n.forwardRef((e, t) => {
          let r = k(M, e.__scopeDialog),
            a = n.useRef(null),
            s = (0, o.s)(t, r.contentRef, a);
          return n.useEffect(() => {
            let e = a.current;
            if (e) return (0, v.Eq)(e)
          }, []), (0, b.jsx)(U, {
            ...e,
            ref: s,
            trapFocus: r.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, i.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, i.mK)(e.onPointerDownOutside, e => {
              let t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            }),
            onFocusOutside: (0, i.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        G = n.forwardRef((e, t) => {
          let r = k(M, e.__scopeDialog),
            i = n.useRef(!1),
            o = n.useRef(!1);
          return (0, b.jsx)(U, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (i.current || r.triggerRef.current?.focus(), t.preventDefault()), i.current = !1, o.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (i.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
              let n = t.target;
              r.triggerRef.current?.contains(n) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        }),
        U = n.forwardRef((e, t) => {
          let {
            __scopeDialog: r,
            trapFocus: i,
            onOpenAutoFocus: a,
            onCloseAutoFocus: s,
            ...l
          } = e, d = k(M, r), h = n.useRef(null), f = (0, o.s)(t, h);
          return (0, p.Oh)(), (0, b.jsxs)(b.Fragment, {
            children: [(0, b.jsx)(c.n, {
              asChild: !0,
              loop: !0,
              trapped: i,
              onMountAutoFocus: a,
              onUnmountAutoFocus: s,
              children: (0, b.jsx)(u.qW, {
                role: "dialog",
                id: d.contentId,
                "aria-describedby": d.descriptionId,
                "aria-labelledby": d.titleId,
                "data-state": $(d.open),
                ...l,
                ref: f,
                onDismiss: () => d.onOpenChange(!1)
              })
            }), (0, b.jsxs)(b.Fragment, {
              children: [(0, b.jsx)(Q, {
                titleId: d.titleId
              }), (0, b.jsx)(X, {
                contentRef: h,
                descriptionId: d.descriptionId
              })]
            })]
          })
        }),
        F = "DialogTitle",
        z = n.forwardRef((e, t) => {
          let {
            __scopeDialog: r,
            ...n
          } = e, i = k(F, r);
          return (0, b.jsx)(f.sG.h2, {
            id: i.titleId,
            ...n,
            ref: t
          })
        });
      z.displayName = F;
      var B = "DialogDescription",
        W = n.forwardRef((e, t) => {
          let {
            __scopeDialog: r,
            ...n
          } = e, i = k(B, r);
          return (0, b.jsx)(f.sG.p, {
            id: i.descriptionId,
            ...n,
            ref: t
          })
        });
      W.displayName = B;
      var H = "DialogClose",
        q = n.forwardRef((e, t) => {
          let {
            __scopeDialog: r,
            ...n
          } = e, o = k(H, r);
          return (0, b.jsx)(f.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, i.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });

      function $(e) {
        return e ? "open" : "closed"
      }
      q.displayName = H;
      var V = "DialogTitleWarning",
        [K, Y] = (0, a.q)(V, {
          contentName: M,
          titleName: F,
          docsSlug: "dialog"
        }),
        Q = ({
          titleId: e
        }) => {
          let t = Y(V),
            r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return n.useEffect(() => {
            e && (document.getElementById(e) || console.error(r))
          }, [r, e]), null
        },
        X = ({
          contentRef: e,
          descriptionId: t
        }) => {
          let r = Y("DialogDescriptionWarning"),
            i = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${r.contentName}}.`;
          return n.useEffect(() => {
            let r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(i))
          }, [i, e, t]), null
        },
        J = S,
        Z = T,
        ee = R,
        et = L,
        er = N,
        en = z,
        ei = W,
        eo = q
    },
    88487: (e, t, r) => {
      "use strict";
      var n, i, o, a, s, l, u, c, d;
      r.d(t, {
        Z: () => n
      }), (o = (i = n || (n = {})).ScreensEnum || (i.ScreensEnum = {}))[o.GAME_START = 0] = "GAME_START", o[o.GAME_SCREEN = 1] = "GAME_SCREEN", o[o.GAME_END = 2] = "GAME_END", (a = i.Directions || (i.Directions = {}))[a.ACROSS = 0] = "ACROSS", a[a.DOWN = 1] = "DOWN", (s = i.LayoutType || (i.LayoutType = {})).desktop = "desktop", s.mobile = "mobile", s.tablet = "tablet", (l = i.Orientation || (i.Orientation = {})).portrait = "portrait", l.landscape = "landscape", (u = i.CluesPosition || (i.CluesPosition = {}))[u.LEFT = 0] = "LEFT", u[u.RIGHT = 1] = "RIGHT", (c = i.MaxificationPopups || (i.MaxificationPopups = {})).signUp = "signUp", c.profile = "profile", c.createProfile = "createProfile", c.signInWelcome = "signInWelcome", c.subscriptionCongrats = "subscriptionCongrats", c.subscriptionThanks = "subscriptionThanks", c.subscriptionAdvantagesWithIcons = "subscriptionAdvantagesWithIcons", c.subscriptionAdvantagesWithText = "subscriptionAdvantagesWithText", c.conditions = "conditions", c.confirmDeleteAccount = "confirmDeleteAccount", (d = i.Popups || (i.Popups = {})).void = "void", d.debug = "debug", d.puzzleInfo = "puzzleInfo", d.resetPuzzle = "resetPuzzle", d.exitPuzzle = "exitPuzzle", d.printPuzzle = "printPuzzle", d.credits = "credits", d.tutorial = "tutorial", d.reveal = "reveal", d.check = "check", d.noInternet = "noInternet", d.creatorNotes = "creatorNotes"
    },
    89126: () => {},
    89201: () => {},
    89664: () => {},
    91277: (e, t, r) => {
      "use strict";
      r.d(t, {
        h8: () => h,
        ri: () => s,
        sy: () => d,
        yo: () => c,
        zz: () => a
      });
      var n = r(95155),
        i = r(12115);
      let o = (0, i.createContext)({
          spotId: null
        }),
        a = ({
          performBEDHandshakeCallback: e,
          userId: t
        }) => new Promise((r, n) => {
          let i = async () => {
            let i = async (t, r) => {
              try {
                let n = await e(t);
                n && await r(n)
              } catch (e) {
                throw console.error("startTTH - error with performBEDHandshakeCallback", e), e
              }
            };
            try {
              if (window?.SPOTIM?.startTTH) {
                let e = await window.SPOTIM.startTTH({
                  callback: i,
                  userId: t
                });
                return void r(e)
              }
              throw Error("startTTH - window.SPOTIM.startTTH is not visible on window")
            } catch (e) {
              console.error("startTTH - client side start sso failed with", e), n(e)
            }
          };
          if (window?.SPOTIM?.startTTH) i();
          else {
            let e = async () => {
              i(), document.removeEventListener("spot-im-api-ready", e)
            };
            document.addEventListener("spot-im-api-ready", e, !1)
          }
        }),
        s = () => new Promise((e, t) => {
          let r = async () => {
            try {
              if (window.SPOTIM && window.SPOTIM.logout) {
                let t = await window.SPOTIM.logout();
                return void e(t)
              }
              throw Error("logout TTH  - window.SPOTIM.logout is not visible on window")
            } catch (e) {
              console.error("logout TTH - logout failed", e), t(e)
            }
          };
          if (window.SPOTIM && window.SPOTIM.logout) r();
          else {
            let e = async () => {
              r(), document.removeEventListener("spot-im-api-ready", e)
            };
            document.addEventListener("spot-im-api-ready", e, !1)
          }
        }),
        l = ({
          authentication: e
        }) => ((e => {
          let {
            userId: t,
            performBEDHandshakeCallback: r,
            onUserChanged: n,
            onError: o
          } = e;
          (0, i.useEffect)(() => {
            t && r ? a({
              performBEDHandshakeCallback: r,
              userId: t
            }).then(n).catch(o) : s().then(n).catch(o)
          }, [t])
        })(e), null),
        u = ({
          spotId: e,
          children: t,
          ...r
        }) => {
          var a;
          let s = ((e = e => e) => e((0, i.useContext)(o)))(),
            l = e || s.spotId;
          return l ? (a = {
            ...s,
            ...r,
            spotId: l
          }, (0, i.useEffect)(() => {
            (({
              spotId: e,
              hostEl: t,
              autoRun: r = !1,
              onLoad: n = () => {},
              onError: i = () => {},
              ...o
            }) => {
              if (document.querySelector('script[data-spotim-module="spotim-launcher"]')) return;
              let a = t || document.body,
                s = document.createElement("script");
              s.src = `https://launcher.spot.im/spot/${e}`, s.async = !0, s.onload = n, s.onerror = i, s.dataset.spotimModule = "spotim-launcher", s.dataset.spotimAutorun = String(r), Object.entries(o).forEach(([e, t]) => {
                t && (s.dataset[e] = String(t))
              }), a.appendChild(s)
            })(a)
          }, []), (0, n.jsx)(n.Fragment, {
            children: t
          })) : (document.dispatchEvent(new CustomEvent("ow-event", {
            detail: {
              type: "error",
              payload: {
                msg: "[OpenWeb] Couldn't find spot-id for OpenWeb products."
              }
            }
          })), null)
        },
        c = ({
          spotId: e,
          authentication: t,
          tracking: r = {},
          children: a
        }) => ((0, i.useEffect)(() => ((e = {}) => {
          let t = t => {
            let {
              type: r
            } = t.detail;
            e[r]?.(t)
          };
          return document.addEventListener("ow-sdk-event", t), () => document.removeEventListener("ow-sdk-event", t)
        })(r), [r]), (0, n.jsxs)(o.Provider, {
          value: {
            spotId: e
          },
          children: [!!t && (0, n.jsx)(l, {
            authentication: t
          }), (0, n.jsx)(u, {
            children: a
          })]
        })),
        d = ({
          spotId: e,
          postId: t,
          postUrl: r,
          articleTags: i,
          socialReviews: o,
          theme: a,
          authorId: s,
          scrollToComment: l,
          scrollToReply: c,
          ...d
        }) => {
          let h = i ? Array.isArray(i) ? i.join(",") : i : null;
          return (0, n.jsx)(u, {
            spotId: e,
            children: (0, n.jsx)("div", {
              ...d,
              "data-spotim-module": "conversation",
              "data-post-id": t,
              "data-post-url": r,
              "data-article-tags": h,
              "data-social-reviews": o,
              "data-theme": a,
              "data-author-id": s,
              "data-spot-im-scroll-to-comment": l,
              "data-spot-im-scroll-to-reply": c
            })
          })
        },
        h = ({
          spotId: e,
          postId: t,
          postUrl: r,
          theme: i,
          isSidebar: o,
          categories: a,
          ...s
        }) => (0, n.jsx)(u, {
          spotId: e,
          children: (0, n.jsx)("div", {
            ...s,
            "data-spotim-module": "pitc",
            "data-post-id": t,
            "data-post-url": r,
            "data-vertical-view": o,
            "data-theme": i,
            "data-categories": a?.join(",")
          })
        })
    },
    96430: () => {},
    96526: (e, t, r) => {
      "use strict";
      r.d(t, {
        us: () => eP
      });
      var n, i, o, a, s, l, u = {},
        c = r(77702),
        d = r(73708),
        h = r.n(d),
        f = class {
          constructor(e) {
            const {
              failure: t,
              gotoFn: r,
              output: n
            } = this._buildTables(e);
            this.gotoFn = r, this.output = n, this.failure = t
          }
          _buildTables(e) {
            let t = {
                0: {}
              },
              r = {},
              n = 0;
            for (let i of e) {
              let e = 0;
              for (let o of i) t[e] && o in t[e] ? e = t[e][o] : (n++, t[e][o] = n, t[n] = {}, e = n, r[n] = []);
              r[e].push(i)
            }
            let i = {},
              o = [];
            for (let e in t[0]) {
              let r = t[0][e];
              i[r] = 0, o.push(r)
            }
            for (; o.length > 0;) {
              let e = o.shift();
              if (void 0 !== e)
                for (let n in t[e]) {
                  let a = t[e][n];
                  o.push(a);
                  let s = i[e];
                  for (; s > 0 && !(n in t[s]);) s = i[s];
                  if (n in t[s]) {
                    let e = t[s][n];
                    i[a] = e, r[a] = [...r[a], ...r[e]]
                  } else i[a] = 0
                }
            }
            return {
              gotoFn: t,
              output: r,
              failure: i
            }
          }
          search(e) {
            let t = 0,
              r = [];
            for (let n = 0; n < e.length; n++) {
              let i = e[n];
              for (; t > 0 && !(i in this.gotoFn[t]);) t = this.failure[t];
              if (i in this.gotoFn[t] && (t = this.gotoFn[t][i], this.output[t].length > 0)) {
                let e = this.output[t];
                r.push([n, e])
              }
            }
            return r
          }
          match(e) {
            let t = 0;
            for (let r = 0; r < e.length; r++) {
              let n = e[r];
              for (; t > 0 && !(n in this.gotoFn[t]);) t = this.failure[t];
              if (n in this.gotoFn[t] && (t = this.gotoFn[t][n], this.output[t].length > 0)) return !0
            }
            return !1
          }
        },
        p = [{
          appendCss: () => {},
          registerClassName: () => {},
          onEndFileScope: () => {},
          registerComposition: () => {},
          markCompositionUsed: () => {},
          getIdentOption: () => "short"
        }],
        m = !1;

      function v(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
      }(n = o || (o = {})).Attribute = "attribute", n.Pseudo = "pseudo", n.PseudoElement = "pseudo-element", n.Tag = "tag", n.Universal = "universal", n.Adjacent = "adjacent", n.Child = "child", n.Descendant = "descendant", n.Parent = "parent", n.Sibling = "sibling", n.ColumnCombinator = "column-combinator", (i = a || (a = {})).Any = "any", i.Element = "element", i.End = "end", i.Equals = "equals", i.Exists = "exists", i.Hyphen = "hyphen", i.Not = "not", i.Start = "start";
      let g = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
        b = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
        w = new Map([
          [126, a.Element],
          [94, a.Start],
          [36, a.End],
          [42, a.Any],
          [33, a.Not],
          [124, a.Hyphen]
        ]),
        y = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]),
        E = new Set(["contains", "icontains"]);

      function A(e, t, r) {
        let n = parseInt(t, 16) - 65536;
        return n != n || r ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
      }

      function k(e) {
        return e.replace(b, A)
      }

      function S(e) {
        return 39 === e || 34 === e
      }

      function _(e) {
        return 32 === e || 9 === e || 10 === e || 12 === e || 13 === e
      }

      function T(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? T(Object(r), !0).forEach(function(t) {
            var n, i, o;
            n = e, i = t, o = r[t], (i = function(e) {
              var t = function(e, t) {
                if ("object" != typeof e || null === e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var n = r.call(e, t || "default");
                  if ("object" != typeof n) return n;
                  throw TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
              }(e, "string");
              return "symbol" == typeof t ? t : String(t)
            }(i)) in n ? Object.defineProperty(n, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[i] = o
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      let O = function e(t) {
        return r.withOptions = r => e(C(C({}, t), r)), r;

        function r(e, ...n) {
          let i = "string" == typeof e ? [e] : e.raw,
            {
              alignValues: o = !1,
              escapeSpecialCharacters: a = Array.isArray(e),
              trimWhitespace: s = !0
            } = t,
            l = "";
          for (let e = 0; e < i.length; e++) {
            let t = i[e];
            if (a && (t = t.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), l += t, e < n.length) {
              let t = o ? function(e, t) {
                if ("string" != typeof e || !e.includes("\n")) return e;
                let r = t.slice(t.lastIndexOf("\n") + 1).match(/^(\s+)/);
                if (r) {
                  let t = r[1];
                  return e.replace(/\n/g, `
${t}`)
                }
                return e
              }(n[e], l) : n[e];
              l += t
            }
          }
          let u = l.split("\n"),
            c = null;
          for (let e of u) {
            let t = e.match(/^(\s+)\S+/);
            if (t) {
              let e = t[1].length;
              c = c ? Math.min(c, e) : e
            }
          }
          if (null !== c) {
            let e = c;
            l = u.map(t => " " === t[0] || "	" === t[0] ? t.slice(e) : t).join("\n")
          }
          return s && (l = l.trim()), a && (l = l.replace(/\\n/g, "\n")), "u" > typeof Bun && (l = l.replace(/\\u(?:\{([\da-fA-F]{1,6})\}|([\da-fA-F]{4}))/g, (e, t, r) => {
            var n;
            return String.fromCodePoint(parseInt(null != (n = null != t ? t : r) ? n : "", 16))
          })), l
        }
      }({});
      var x = function() {
        return (x = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
        }).apply(this, arguments)
      };

      function R(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
        return r
      }

      function I(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, i, o = r.call(e),
          a = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(n = o.next()).done;) a.push(n.value)
        } catch (e) {
          i = {
            error: e
          }
        } finally {
          try {
            n && !n.done && (r = o.return) && r.call(o)
          } finally {
            if (i) throw i.error
          }
        }
        return a
      }
      var L = /(\u000D|\u000C|\u000D\u000A)/g,
        D = /[\u0000\uD800-\uDFFF]/g,
        P = /(\/\*)[\s\S]*?(\*\/)/g,
        M = function(e, t) {
          void 0 === t && (t = 0), e = (e = e.replace(L, "\n").replace(D, "�")).replace(P, "");
          for (var r = []; t < e.length; t += 1) {
            var n = e.charCodeAt(t);
            if (9 === n || 32 === n || 10 === n) {
              for (var i = e.charCodeAt(++t); 9 === i || 32 === i || 10 === i;) i = e.charCodeAt(++t);
              t -= 1, r.push({
                type: "<whitespace-token>"
              })
            } else if (34 === n) {
              var o = N(e, t);
              if (null === o) return null;
              var a = I(o, 2),
                s = a[0],
                l = a[1];
              r.push({
                type: "<string-token>",
                value: l
              }), t = s
            } else if (35 === n) {
              if (t + 1 < e.length) {
                var u = e.charCodeAt(t + 1);
                if (95 === u || u >= 65 && u <= 90 || u >= 97 && u <= 122 || u >= 128 || u >= 48 && u <= 57 || 92 === u && t + 2 < e.length && 10 !== e.charCodeAt(t + 2)) {
                  var c = j(e, t + 1) ? "id" : "unrestricted",
                    o = z(e, t + 1);
                  if (null !== o) {
                    var d = I(o, 2),
                      s = d[0],
                      l = d[1];
                    r.push({
                      type: "<hash-token>",
                      value: l.toLowerCase(),
                      flag: c
                    }), t = s;
                    continue
                  }
                }
              }
              r.push({
                type: "<delim-token>",
                value: n
              })
            } else if (39 === n) {
              var o = N(e, t);
              if (null === o) return null;
              var h = I(o, 2),
                s = h[0],
                l = h[1];
              r.push({
                type: "<string-token>",
                value: l
              }), t = s
            } else if (40 === n) r.push({
              type: "<(-token>"
            });
            else if (41 === n) r.push({
              type: "<)-token>"
            });
            else if (43 === n) {
              var f = U(e, t);
              if (null === f) r.push({
                type: "<delim-token>",
                value: n
              });
              else {
                var p = I(f, 2),
                  s = p[0],
                  m = p[1];
                "<dimension-token>" === m[0] ? r.push({
                  type: "<dimension-token>",
                  value: m[1],
                  unit: m[2].toLowerCase(),
                  flag: "number"
                }) : "<number-token>" === m[0] ? r.push({
                  type: m[0],
                  value: m[1],
                  flag: m[2]
                }) : r.push({
                  type: m[0],
                  value: m[1],
                  flag: "number"
                }), t = s
              }
            } else if (44 === n) r.push({
              type: "<comma-token>"
            });
            else if (45 === n) {
              var v = U(e, t);
              if (null !== v) {
                var g = I(v, 2),
                  s = g[0],
                  m = g[1];
                "<dimension-token>" === m[0] ? r.push({
                  type: "<dimension-token>",
                  value: m[1],
                  unit: m[2].toLowerCase(),
                  flag: "number"
                }) : "<number-token>" === m[0] ? r.push({
                  type: m[0],
                  value: m[1],
                  flag: m[2]
                }) : r.push({
                  type: m[0],
                  value: m[1],
                  flag: "number"
                }), t = s;
                continue
              }
              if (t + 2 < e.length) {
                var u = e.charCodeAt(t + 1),
                  b = e.charCodeAt(t + 2);
                if (45 === u && 62 === b) {
                  r.push({
                    type: "<CDC-token>"
                  }), t += 2;
                  continue
                }
              }
              var o = H(e, t);
              if (null !== o) {
                var w = I(o, 3),
                  s = w[0],
                  l = w[1],
                  y = w[2];
                r.push({
                  type: y,
                  value: l
                }), t = s;
                continue
              }
              r.push({
                type: "<delim-token>",
                value: n
              })
            } else if (46 === n) {
              var v = U(e, t);
              if (null === v) r.push({
                type: "<delim-token>",
                value: n
              });
              else {
                var E = I(v, 2),
                  s = E[0],
                  m = E[1];
                "<dimension-token>" === m[0] ? r.push({
                  type: "<dimension-token>",
                  value: m[1],
                  unit: m[2].toLowerCase(),
                  flag: "number"
                }) : "<number-token>" === m[0] ? r.push({
                  type: m[0],
                  value: m[1],
                  flag: m[2]
                }) : r.push({
                  type: m[0],
                  value: m[1],
                  flag: "number"
                }), t = s;
                continue
              }
            } else if (58 === n) r.push({
              type: "<colon-token>"
            });
            else if (59 === n) r.push({
              type: "<semicolon-token>"
            });
            else if (60 === n) {
              if (t + 3 < e.length) {
                var u = e.charCodeAt(t + 1),
                  b = e.charCodeAt(t + 2),
                  A = e.charCodeAt(t + 3);
                if (33 === u && 45 === b && 45 === A) {
                  r.push({
                    type: "<CDO-token>"
                  }), t += 3;
                  continue
                }
              }
              r.push({
                type: "<delim-token>",
                value: n
              })
            } else if (64 === n) {
              var o = B(e, t + 1);
              if (null !== o) {
                var k = I(o, 2),
                  s = k[0],
                  l = k[1];
                r.push({
                  type: "<at-keyword-token>",
                  value: l.toLowerCase()
                }), t = s;
                continue
              }
              r.push({
                type: "<delim-token>",
                value: n
              })
            } else if (91 === n) r.push({
              type: "<[-token>"
            });
            else if (92 === n) {
              var o = G(e, t);
              if (null === o) return null;
              var S = I(o, 2),
                s = S[0],
                l = S[1];
              e = e.slice(0, t) + l + e.slice(s + 1), t -= 1
            } else if (93 === n) r.push({
              type: "<]-token>"
            });
            else if (123 === n) r.push({
              type: "<{-token>"
            });
            else if (125 === n) r.push({
              type: "<}-token>"
            });
            else if (n >= 48 && n <= 57) {
              var o = U(e, t),
                _ = I(o, 2),
                s = _[0],
                m = _[1];
              "<dimension-token>" === m[0] ? r.push({
                type: "<dimension-token>",
                value: m[1],
                unit: m[2].toLowerCase(),
                flag: "number"
              }) : "<number-token>" === m[0] ? r.push({
                type: m[0],
                value: m[1],
                flag: m[2]
              }) : r.push({
                type: m[0],
                value: m[1],
                flag: "number"
              }), t = s
            } else if (95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128) {
              var o = H(e, t);
              if (null === o) return null;
              var T = I(o, 3),
                s = T[0],
                l = T[1],
                y = T[2];
              r.push({
                type: y,
                value: l
              }), t = s
            } else r.push({
              type: "<delim-token>",
              value: n
            })
          }
          return r.push({
            type: "<EOF-token>"
          }), r
        },
        N = function(e, t) {
          if (e.length <= t + 1) return null;
          for (var r = e.charCodeAt(t), n = [], i = t + 1; i < e.length; i += 1) {
            var o = e.charCodeAt(i);
            if (o === r) return [i, String.fromCharCode.apply(null, n)];
            if (92 === o) {
              var a = G(e, i);
              if (null === a) return null;
              var s = I(a, 2),
                l = s[0],
                u = s[1];
              n.push(u), i = l
            } else {
              if (10 === o) return null;
              n.push(o)
            }
          }
          return null
        },
        j = function(e, t) {
          if (e.length <= t) return !1;
          var r = e.charCodeAt(t);
          if (45 === r) {
            if (e.length <= t + 1) return !1;
            var n = e.charCodeAt(t + 1);
            return 45 === n || 95 === n || !!(n >= 65) && !!(n <= 90) || !!(n >= 97) && !!(n <= 122) || !!(n >= 128) || 92 === n && !(e.length <= t + 2) && 10 !== e.charCodeAt(t + 2)
          }
          if (95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128) return !0;
          if (92 !== r) return !1;
          if (e.length <= t + 1) return !1;
          var n = e.charCodeAt(t + 1);
          return 10 !== n
        },
        G = function(e, t) {
          if (e.length <= t + 1 || 92 !== e.charCodeAt(t)) return null;
          var r = e.charCodeAt(t + 1);
          if (10 === r) return null;
          if ((!(r >= 48) || !(r <= 57)) && (!(r >= 65) || !(r <= 70)) && (!(r >= 97) || !(r <= 102))) return [t + 1, r];
          for (var n = [r], i = Math.min(t + 7, e.length), o = t + 2; o < i; o += 1) {
            var a = e.charCodeAt(o);
            if (a >= 48 && a <= 57 || a >= 65 && a <= 70 || a >= 97 && a <= 102) n.push(a);
            else break
          }
          if (o < e.length) {
            var s = e.charCodeAt(o);
            (9 === s || 32 === s || 10 === s) && (o += 1)
          }
          return [o - 1, parseInt(String.fromCharCode.apply(null, n), 16)]
        },
        U = function(e, t) {
          var r = F(e, t);
          if (null === r) return null;
          var n = I(r, 3),
            i = n[0],
            o = n[1],
            a = n[2],
            s = B(e, i + 1);
          if (null !== s) {
            var l = I(s, 2);
            return [l[0],
              ["<dimension-token>", o, l[1]]
            ]
          }
          return i + 1 < e.length && 37 === e.charCodeAt(i + 1) ? [i + 1, ["<percentage-token>", o]] : [i, ["<number-token>", o, a]]
        },
        F = function(e, t) {
          if (e.length <= t) return null;
          var r = "integer",
            n = [],
            i = e.charCodeAt(t);
          for ((43 === i || 45 === i) && (t += 1, 45 === i && n.push(45)); t < e.length;) {
            var o = e.charCodeAt(t);
            if (o >= 48 && o <= 57) n.push(o), t += 1;
            else break
          }
          if (t + 1 < e.length) {
            var a = e.charCodeAt(t),
              s = e.charCodeAt(t + 1);
            if (46 === a && s >= 48 && s <= 57)
              for (n.push(a, s), r = "number", t += 2; t < e.length;) {
                var o = e.charCodeAt(t);
                if (o >= 48 && o <= 57) n.push(o), t += 1;
                else break
              }
          }
          if (t + 1 < e.length) {
            var a = e.charCodeAt(t),
              s = e.charCodeAt(t + 1),
              l = e.charCodeAt(t + 2);
            if (69 === a || 101 === a) {
              var u = s >= 48 && s <= 57;
              if (u || (43 === s || 45 === s) && l >= 48 && l <= 57)
                for (r = "number", u ? (n.push(69, s), t += 2) : (45 === s ? n.push(69, 45, l) : n.push(69, l), t += 3); t < e.length;) {
                  var o = e.charCodeAt(t);
                  if (o >= 48 && o <= 57) n.push(o), t += 1;
                  else break
                }
            }
          }
          var c = String.fromCharCode.apply(null, n),
            d = "number" === r ? parseFloat(c) : parseInt(c);
          return -0 === d && (d = 0), Number.isNaN(d) ? null : [t - 1, d, r]
        },
        z = function(e, t) {
          if (e.length <= t) return null;
          for (var r = [], n = e.charCodeAt(t); t < e.length; n = e.charCodeAt(++t)) {
            if (45 === n || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || n >= 48 && n <= 57) {
              r.push(n);
              continue
            }
            var i = G(e, t);
            if (null !== i) {
              var o = I(i, 2),
                a = o[0],
                s = o[1];
              r.push(s), t = a;
              continue
            }
            break
          }
          return 0 === t ? null : [t - 1, String.fromCharCode.apply(null, r)]
        },
        B = function(e, t) {
          if (e.length <= t || !j(e, t)) return null;
          for (var r = [], n = e.charCodeAt(t); t < e.length; n = e.charCodeAt(++t)) {
            if (45 === n || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || n >= 48 && n <= 57) {
              r.push(n);
              continue
            }
            var i = G(e, t);
            if (null !== i) {
              var o = I(i, 2),
                a = o[0],
                s = o[1];
              r.push(s), t = a;
              continue
            }
            break
          }
          return [t - 1, String.fromCharCode.apply(null, r)]
        },
        W = function(e, t) {
          for (var r = e.charCodeAt(t); 9 === r || 32 === r || 10 === r;) r = e.charCodeAt(++t);
          for (var n = [], i = !1; t < e.length;) {
            if (41 === r) return [t, String.fromCharCode.apply(null, n)];
            if (34 === r || 39 === r || 40 === r) break;
            if (9 === r || 32 === r || 10 === r) i || 0 === n.length || (i = !0);
            else if (92 === r) {
              var o = G(e, t);
              if (null === o || i) return null;
              var a = I(o, 2),
                s = a[0],
                l = a[1];
              n.push(l), t = s
            } else {
              if (i) return null;
              n.push(r)
            }
            r = e.charCodeAt(++t)
          }
          return null
        },
        H = function(e, t) {
          var r = B(e, t);
          if (null === r) return null;
          var n = I(r, 2),
            i = n[0],
            o = n[1];
          if ("url" === o.toLowerCase()) {
            if (e.length > i + 1) {
              var a = e.charCodeAt(i + 1);
              if (40 === a) {
                for (var s = 2; i + s < e.length; s += 1) {
                  var l = e.charCodeAt(i + s);
                  if (34 === l || 39 === l) break;
                  if (9 !== l && 32 !== l && 10 !== l) {
                    var u = W(e, i + s);
                    if (null === u) return null;
                    var c = I(u, 2);
                    return [c[0], c[1], "<url-token>"]
                  }
                }
                return [i + 1, o.toLowerCase(), "<function-token>"]
              }
            }
          } else if (e.length > i + 1) {
            var a = e.charCodeAt(i + 1);
            if (40 === a) return [i + 1, o.toLowerCase(), "<function-token>"]
          }
          return [i, o.toLowerCase(), "<ident-token>"]
        },
        q = function(e) {
          for (var t = e.length - 1; t >= 0; t--) e[t] = $(e[t]);
          return e
        },
        $ = function(e) {
          if (null === e.mediaCondition) return e;
          var t = V(e.mediaCondition);
          return null === t.operator && 1 === t.children.length && "children" in t.children[0] && (t = t.children[0]), {
            mediaPrefix: e.mediaPrefix,
            mediaType: e.mediaType,
            mediaCondition: t
          }
        },
        V = function e(t) {
          for (var r = t.children.length - 1; r >= 0; r--) {
            var n = t.children[r];
            if (!("context" in n)) {
              var i = e(n);
              if (null === i.operator && 1 === i.children.length) t.children[r] = i.children[0];
              else if (i.operator === t.operator && ("and" === i.operator || "or" === i.operator)) {
                for (var o = [r, 1], a = 0; a < i.children.length; a++) o.push(i.children[a]);
                t.children.splice.apply(t.children, o)
              }
            }
          }
          return t
        },
        K = function(e, t) {
          return t instanceof Error ? Error("".concat(t.message.trim(), "\n").concat(e.trim())) : Error(e.trim())
        },
        Y = function(e) {
          var t = M(e.trim());
          if (null === t) throw K("Failed tokenizing");
          var r = 0,
            n = t.length - 1;
          if ("<at-keyword-token>" === t[0].type && "media" === t[0].value) {
            if ("<whitespace-token>" !== t[1].type) throw K("Expected whitespace after media");
            r = 2;
            for (var i = 2; i < t.length - 1; i++) {
              var o = t[i];
              if ("<{-token>" === o.type) {
                n = i;
                break
              }
              if ("<semicolon-token>" === o.type) throw K("Expected '{' in media query but found ';'")
            }
          }
          return X(t = t.slice(r, n))
        },
        Q = function(e) {
          for (var t = [], r = !1, n = 0; n < e.length; n++) "<whitespace-token>" === e[n].type ? (r = !0, t.length > 0 && (t[t.length - 1].wsAfter = !0)) : (t.push(x(x({}, e[n]), {
            wsBefore: r,
            wsAfter: !1
          })), r = !1);
          return t
        },
        X = function(e) {
          for (var t, r, n = [
              []
            ], i = 0; i < e.length; i++) {
            var o = e[i];
            "<comma-token>" === o.type ? n.push([]) : n[n.length - 1].push(o)
          }
          var a = n.map(Q);
          if (1 === a.length && 0 === a[0].length) return [{
            mediaCondition: null,
            mediaPrefix: null,
            mediaType: "all"
          }];
          var s = a.map(function(e) {
              return 0 === e.length ? null : J(e)
            }),
            l = [];
          try {
            for (var u = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                  r = t && e[t],
                  n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                  next: function() {
                    return e && n >= e.length && (e = void 0), {
                      value: e && e[n++],
                      done: !e
                    }
                  }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(s), c = u.next(); !c.done; c = u.next()) {
              var d = c.value;
              null !== d && l.push(d)
            }
          } catch (e) {
            t = {
              error: e
            }
          } finally {
            try {
              c && !c.done && (r = u.return) && r.call(u)
            } finally {
              if (t) throw t.error
            }
          }
          if (0 === l.length) throw K("No valid media queries");
          return l
        },
        J = function(e) {
          var t = e[0];
          if ("<(-token>" === t.type) try {
            return {
              mediaPrefix: null,
              mediaType: "all",
              mediaCondition: Z(e, !0)
            }
          } catch (e) {
            throw K("Expected media condition after '('", e)
          }
          if ("<ident-token>" === t.type) {
            var r = null,
              n = void 0,
              i = t.value;
            ("only" === i || "not" === i) && (r = i);
            var o = +(null !== r);
            if (e.length <= o) throw K("Expected extra token in media query");
            var a = e[o];
            if ("<ident-token>" === a.type) {
              var s = a.value;
              if ("all" === s) n = "all";
              else if ("print" === s || "screen" === s) n = s;
              else if ("tty" === s || "tv" === s || "projection" === s || "handheld" === s || "braille" === s || "embossed" === s || "aural" === s || "speech" === s) r = "not" === r ? null : "not", n = "all";
              else throw K("Unknown ident '".concat(s, "' in media query"))
            } else if ("not" === r && "<(-token>" === a.type) {
              var l = [{
                type: "<(-token>",
                wsBefore: !1,
                wsAfter: !1
              }];
              l.push.apply(l, e), l.push({
                type: "<)-token>",
                wsBefore: !1,
                wsAfter: !1
              });
              try {
                return {
                  mediaPrefix: null,
                  mediaType: "all",
                  mediaCondition: Z(l, !0)
                }
              } catch (e) {
                throw K("Expected media condition after '('", e)
              }
            } else throw K("Invalid media query");
            if (o + 1 === e.length) return {
              mediaPrefix: r,
              mediaType: n,
              mediaCondition: null
            };
            if (o + 4 < e.length) {
              var u = e[o + 1];
              if ("<ident-token>" === u.type && "and" === u.value) try {
                return {
                  mediaPrefix: r,
                  mediaType: n,
                  mediaCondition: Z(e.slice(o + 2), !1)
                }
              } catch (e) {
                throw K("Expected media condition after 'and'", e)
              }
              throw K("Expected 'and' after media prefix")
            }
            throw K("Expected media condition after media prefix")
          }
          throw K("Expected media condition or media prefix")
        },
        Z = function e(t, r, n) {
          if (void 0 === n && (n = null), t.length < 3 || "<(-token>" !== t[0].type || "<)-token>" !== t[t.length - 1].type) throw Error("Invalid media condition");
          for (var i, o = t.length - 1, a = 0, s = 0, l = 0; l < t.length; l++) {
            var u = t[l];
            if ("<(-token>" === u.type ? (s += 1, a = Math.max(a, s)) : "<)-token>" === u.type && (s -= 1), 0 === s) {
              o = l;
              break
            }
          }
          if (0 !== s) throw Error("Mismatched parens\nInvalid media condition");
          var c = t.slice(0, o + 1);
          if (i = 1 === a ? ee(c) : "<ident-token>" === c[1].type && "not" === c[1].value ? e(c.slice(2, -1), !0, "not") : e(c.slice(1, -1), !0), o === t.length - 1) return {
            operator: n,
            children: [i]
          };
          var d = t[o + 1];
          if ("<ident-token>" !== d.type) throw Error("Invalid operator\nInvalid media condition");
          if (null !== n && n !== d.value) throw Error("'".concat(d.value, "' and '").concat(n, "' must not be at same level\nInvalid media condition"));
          if ("or" !== d.value || r) {
            if ("and" !== d.value && "or" !== d.value) throw Error("Invalid operator: '".concat(d.value, "'\nInvalid media condition"))
          } else throw Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
          var h = e(t.slice(o + 2), r, d.value);
          return {
            operator: d.value,
            children: [i].concat(h.children)
          }
        },
        ee = function(e) {
          if (e.length < 3 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw Error("Invalid media feature");
          for (var t = [e[0]], r = 1; r < e.length; r++) {
            if (r < e.length - 2) {
              var n = e[r],
                i = e[r + 1],
                o = e[r + 2];
              if ("<number-token>" === n.type && n.value > 0 && "<delim-token>" === i.type && 47 === i.value && "<number-token>" === o.type && o.value > 0) {
                t.push({
                  type: "<ratio-token>",
                  numerator: n.value,
                  denominator: o.value,
                  wsBefore: n.wsBefore,
                  wsAfter: o.wsAfter
                }), r += 2;
                continue
              }
            }
            t.push(e[r])
          }
          var a = t[1];
          if ("<ident-token>" === a.type && 3 === t.length) return {
            context: "boolean",
            feature: a.value
          };
          if (5 === t.length && "<ident-token>" === t[1].type && "<colon-token>" === t[2].type) {
            var s = t[3];
            if ("<number-token>" === s.type || "<dimension-token>" === s.type || "<ratio-token>" === s.type || "<ident-token>" === s.type) {
              var l = t[1].value,
                u = null,
                c = l.slice(0, 4);
              return "min-" === c ? (u = "min", l = l.slice(4)) : "max-" === c && (u = "max", l = l.slice(4)), s.wsBefore, s.wsAfter, {
                context: "value",
                prefix: u,
                feature: l,
                value: R(s, ["wsBefore", "wsAfter"])
              }
            }
          } else if (t.length >= 5) try {
            var d = et(t);
            return {
              context: "range",
              feature: d.featureName,
              range: d
            }
          } catch (e) {
            throw K("Invalid media feature", e)
          }
          throw Error("Invalid media feature")
        },
        et = function(e) {
          if (e.length < 5 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw Error("Invalid range");
          var t, r, n, i, o = {
              leftToken: null,
              leftOp: null,
              featureName: "",
              rightOp: null,
              rightToken: null
            },
            a = "<number-token>" === e[1].type || "<dimension-token>" === e[1].type || "<ratio-token>" === e[1].type || "<ident-token>" === e[1].type && "infinite" === e[1].value;
          if ("<delim-token>" === e[2].type) {
            if (60 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? o[a ? "leftOp" : "rightOp"] = "<" : o[a ? "leftOp" : "rightOp"] = "<=";
            else if (62 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? o[a ? "leftOp" : "rightOp"] = ">" : o[a ? "leftOp" : "rightOp"] = ">=";
            else if (61 === e[2].value) o[a ? "leftOp" : "rightOp"] = "=";
            else throw Error("Invalid range");
            if (a) o.leftToken = e[1];
            else if ("<ident-token>" === e[1].type) o.featureName = e[1].value;
            else throw Error("Invalid range");
            var s = 2 + (null != (r = null == (t = o[a ? "leftOp" : "rightOp"]) ? void 0 : t.length) ? r : 0),
              l = e[s];
            if (a)
              if ("<ident-token>" === l.type) {
                if (o.featureName = l.value, e.length >= 7) {
                  var u = e[s + 1],
                    c = e[s + 2];
                  if ("<delim-token>" === u.type) {
                    var d = u.value;
                    if (60 === d) "<delim-token>" !== c.type || 61 !== c.value || c.wsBefore ? o.rightOp = "<" : o.rightOp = "<=";
                    else if (62 === d) "<delim-token>" !== c.type || 61 !== c.value || c.wsBefore ? o.rightOp = ">" : o.rightOp = ">=";
                    else throw Error("Invalid range");
                    var h = e[s + 1 + (null != (i = null == (n = o.rightOp) ? void 0 : n.length) ? i : 0)];
                    o.rightToken = h
                  } else throw Error("Invalid range")
                } else if (s + 2 !== e.length) throw Error("Invalid range")
              } else throw Error("Invalid range");
            else o.rightToken = l;
            var f = null,
              p = o.leftToken,
              m = o.leftOp,
              v = o.featureName,
              g = o.rightOp,
              b = o.rightToken,
              w = null;
            if (null !== p)
              if ("<ident-token>" === p.type) {
                var y = p.type,
                  E = p.value;
                "infinite" === E && (w = {
                  type: y,
                  value: E
                })
              } else("<number-token>" === p.type || "<dimension-token>" === p.type || "<ratio-token>" === p.type) && (p.wsBefore, p.wsAfter, w = R(p, ["wsBefore", "wsAfter"]));
            var A = null;
            if (null !== b)
              if ("<ident-token>" === b.type) {
                var y = b.type,
                  E = b.value;
                "infinite" === E && (A = {
                  type: y,
                  value: E
                })
              } else("<number-token>" === b.type || "<dimension-token>" === b.type || "<ratio-token>" === b.type) && (b.wsBefore, b.wsAfter, A = R(b, ["wsBefore", "wsAfter"]));
            if (null !== w && null !== A)
              if (("<" === m || "<=" === m) && ("<" === g || "<=" === g)) f = {
                leftToken: w,
                leftOp: m,
                featureName: v,
                rightOp: g,
                rightToken: A
              };
              else if ((">" === m || ">=" === m) && (">" === g || ">=" === g)) f = {
              leftToken: w,
              leftOp: m,
              featureName: v,
              rightOp: g,
              rightToken: A
            };
            else throw Error("Invalid range");
            else null === w && null === m && null !== g && null !== A ? f = {
              leftToken: w,
              leftOp: m,
              featureName: v,
              rightOp: g,
              rightToken: A
            } : null !== w && null !== m && null === g && null === A && (f = {
              leftToken: w,
              leftOp: m,
              featureName: v,
              rightOp: g,
              rightToken: A
            });
            return f
          }
          throw Error("Invalid range")
        };

      function er(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function en(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? er(Object(r), !0).forEach(function(t) {
            ! function(e, t, r) {
              var n;
              (t = "symbol" == typeof(n = function(e, t) {
                if ("object" != typeof e || !e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var n = r.call(e, t || "default");
                  if ("object" != typeof n) return n;
                  throw TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
              }(t, "string")) ? n : String(n)) in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = r
            }(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : er(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ei(e, t) {
        if (null == e) return {};
        var r, n, i = function(e, t) {
          if (null == e) return {};
          var r, n, i = {},
            o = Object.keys(e);
          for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
        }
        return i
      }

      function eo(e, t) {
        for (var r in e) t(e[r], r)
      }

      function ea(e, t) {
        var r = {};
        for (var n in e) - 1 === t.indexOf(n) && (r[n] = e[n]);
        return r
      }
      class es {
        constructor() {
          this.ruleset = new Map, this.precedenceLookup = new Map
        }
        findOrCreateCondition(e) {
          var t = this.ruleset.get(e);
          return t || (t = {
            query: e,
            rules: [],
            children: new es
          }, this.ruleset.set(e, t)), t
        }
        getConditionalRulesetByPath(e) {
          var t = this;
          for (var r of e) t = t.findOrCreateCondition(r).children;
          return t
        }
        addRule(e, t, r) {
          var n = this.getConditionalRulesetByPath(r).findOrCreateCondition(t);
          if (!n) throw Error("Failed to add conditional rule");
          n.rules.push(e)
        }
        addConditionPrecedence(e, t) {
          for (var r = this.getConditionalRulesetByPath(e), n = 0; n < t.length; n++) {
            var i, o = t[n],
              a = null != (i = r.precedenceLookup.get(o)) ? i : new Set;
            for (var s of t.slice(n + 1)) a.add(s);
            r.precedenceLookup.set(o, a)
          }
        }
        isCompatible(e) {
          for (var [t, r] of this.precedenceLookup.entries())
            for (var n of r) {
              var i;
              if (null != (i = e.precedenceLookup.get(n)) && i.has(t)) return !1
            }
          for (var {
              query: o,
              children: a
            }
            of e.ruleset.values()) {
            var s = this.ruleset.get(o);
            if (s && !s.children.isCompatible(a)) return !1
          }
          return !0
        }
        merge(e) {
          for (var {
              query: t,
              rules: r,
              children: n
            }
            of e.ruleset.values()) {
            var i = this.ruleset.get(t);
            i ? (i.rules.push(...r), i.children.merge(n)) : this.ruleset.set(t, {
              query: t,
              rules: r,
              children: n
            })
          }
          for (var [o, a] of e.precedenceLookup.entries()) {
            var s, l = null != (s = this.precedenceLookup.get(o)) ? s : new Set;
            this.precedenceLookup.set(o, new Set([...l, ...a]))
          }
        }
        mergeIfCompatible(e) {
          return !!this.isCompatible(e) && (this.merge(e), !0)
        }
        getSortedRuleset() {
          var e = this,
            t = [],
            r = function(r) {
              var i = e.ruleset.get(n);
              if (!i) throw Error("Can't find condition for ".concat(n));
              var o = t.findIndex(e => r.has(e.query));
              o > -1 ? t.splice(o, 0, i) : t.push(i)
            };
          for (var [n, i] of this.precedenceLookup.entries()) r(i);
          return t
        }
        renderToArray() {
          var e = [];
          for (var {
              query: t,
              rules: r,
              children: n
            }
            of this.getSortedRuleset()) {
            var i = {};
            for (var o of r) i[o.selector] = en(en({}, i[o.selector]), o.rule);
            Object.assign(i, ...n.renderToArray()), e.push({
              [t]: i
            })
          }
          return e
        }
      }
      var el = {
          ":-moz-any-link": !0,
          ":-moz-full-screen": !0,
          ":-moz-placeholder": !0,
          ":-moz-read-only": !0,
          ":-moz-read-write": !0,
          ":-ms-fullscreen": !0,
          ":-ms-input-placeholder": !0,
          ":-webkit-any-link": !0,
          ":-webkit-full-screen": !0,
          "::-moz-color-swatch": !0,
          "::-moz-list-bullet": !0,
          "::-moz-list-number": !0,
          "::-moz-page-sequence": !0,
          "::-moz-page": !0,
          "::-moz-placeholder": !0,
          "::-moz-progress-bar": !0,
          "::-moz-range-progress": !0,
          "::-moz-range-thumb": !0,
          "::-moz-range-track": !0,
          "::-moz-scrolled-page-sequence": !0,
          "::-moz-selection": !0,
          "::-ms-backdrop": !0,
          "::-ms-browse": !0,
          "::-ms-check": !0,
          "::-ms-clear": !0,
          "::-ms-fill-lower": !0,
          "::-ms-fill-upper": !0,
          "::-ms-fill": !0,
          "::-ms-reveal": !0,
          "::-ms-thumb": !0,
          "::-ms-ticks-after": !0,
          "::-ms-ticks-before": !0,
          "::-ms-tooltip": !0,
          "::-ms-track": !0,
          "::-ms-value": !0,
          "::-webkit-backdrop": !0,
          "::-webkit-calendar-picker-indicator": !0,
          "::-webkit-inner-spin-button": !0,
          "::-webkit-input-placeholder": !0,
          "::-webkit-meter-bar": !0,
          "::-webkit-meter-even-less-good-value": !0,
          "::-webkit-meter-inner-element": !0,
          "::-webkit-meter-optimum-value": !0,
          "::-webkit-meter-suboptimum-value": !0,
          "::-webkit-outer-spin-button": !0,
          "::-webkit-progress-bar": !0,
          "::-webkit-progress-inner-element": !0,
          "::-webkit-progress-inner-value": !0,
          "::-webkit-progress-value": !0,
          "::-webkit-resizer": !0,
          "::-webkit-scrollbar-button": !0,
          "::-webkit-scrollbar-corner": !0,
          "::-webkit-scrollbar-thumb": !0,
          "::-webkit-scrollbar-track-piece": !0,
          "::-webkit-scrollbar-track": !0,
          "::-webkit-scrollbar": !0,
          "::-webkit-search-cancel-button": !0,
          "::-webkit-search-results-button": !0,
          "::-webkit-slider-runnable-track": !0,
          "::-webkit-slider-thumb": !0,
          "::after": !0,
          "::backdrop": !0,
          "::before": !0,
          "::cue": !0,
          "::file-selector-button": !0,
          "::first-letter": !0,
          "::first-line": !0,
          "::grammar-error": !0,
          "::marker": !0,
          "::placeholder": !0,
          "::selection": !0,
          "::spelling-error": !0,
          "::target-text": !0,
          "::view-transition-group": !0,
          "::view-transition-image-pair": !0,
          "::view-transition-new": !0,
          "::view-transition-old": !0,
          "::view-transition": !0,
          ":active": !0,
          ":after": !0,
          ":any-link": !0,
          ":before": !0,
          ":blank": !0,
          ":checked": !0,
          ":default": !0,
          ":defined": !0,
          ":disabled": !0,
          ":empty": !0,
          ":enabled": !0,
          ":first-child": !0,
          ":first-letter": !0,
          ":first-line": !0,
          ":first-of-type": !0,
          ":first": !0,
          ":focus-visible": !0,
          ":focus-within": !0,
          ":focus": !0,
          ":fullscreen": !0,
          ":hover": !0,
          ":in-range": !0,
          ":indeterminate": !0,
          ":invalid": !0,
          ":last-child": !0,
          ":last-of-type": !0,
          ":left": !0,
          ":link": !0,
          ":only-child": !0,
          ":only-of-type": !0,
          ":optional": !0,
          ":out-of-range": !0,
          ":placeholder-shown": !0,
          ":read-only": !0,
          ":read-write": !0,
          ":required": !0,
          ":right": !0,
          ":root": !0,
          ":scope": !0,
          ":target": !0,
          ":valid": !0,
          ":visited": !0
        },
        eu = Object.keys(el),
        ec = (e, t) => Error(O(l || (l = v(['\n    Invalid media query: "', '"\n\n    ', "\n\n    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\n  "])), e, t)),
        ed = e => {
          if ("@media " === e) throw ec(e, "Query is empty");
          try {
            q(Y(e))
          } catch (t) {
            throw ec(e, t.message)
          }
        },
        eh = ["vars"],
        ef = ["content"],
        ep = "__DECLARATION",
        em = {
          animationIterationCount: !0,
          borderImage: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          initialLetter: !0,
          lineClamp: !0,
          lineHeight: !0,
          maxLines: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          scale: !0,
          tabSize: !0,
          WebkitLineClamp: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          maskBorder: !0,
          maskBorderOutset: !0,
          maskBorderSlice: !0,
          maskBorderWidth: !0,
          shapeImageThreshold: !0,
          stopOpacity: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        },
        ev = [...eu, "@layer", "@media", "@supports", "@container", "@starting-style", "selectors"];
      class eg {
        constructor(e, t) {
          this.rules = [], this.conditionalRulesets = [new es], this.fontFaceRules = [], this.keyframesRules = [], this.propertyRules = [], this.localClassNamesMap = new Map(e.map(e => [e, e])), this.localClassNamesSearch = new f(e), this.layers = new Map, this.composedClassLists = t.map(e => {
            var {
              identifier: t,
              classList: r
            } = e;
            return {
              identifier: t,
              regex: RegExp("(".concat(r, ")"), "g")
            }
          }).reverse()
        }
        processCssObj(e) {
          if ("fontFace" === e.type) return void this.fontFaceRules.push(e.rule);
          if ("property" === e.type) return void this.propertyRules.push(e);
          if ("keyframes" === e.type) {
            e.rule = Object.fromEntries(Object.entries(e.rule).map(e => {
              var [t, r] = e;
              return [t, this.transformVars(this.transformProperties(r))]
            })), this.keyframesRules.push(e);
            return
          }
          if (this.currConditionalRuleset = new es, "layer" === e.type) {
            var t = "@layer ".concat(e.name);
            this.addLayer([t])
          } else {
            var r = ea(e.rule, ev);
            this.addRule({
              selector: e.selector,
              rule: r
            }), this.transformLayer(e, e.rule["@layer"]), this.transformMedia(e, e.rule["@media"]), this.transformSupports(e, e.rule["@supports"]), this.transformContainer(e, e.rule["@container"]), this.transformStartingStyle(e, e.rule["@starting-style"]), this.transformSimplePseudos(e, e.rule), this.transformSelectors(e, e.rule)
          }
          this.conditionalRulesets[this.conditionalRulesets.length - 1].mergeIfCompatible(this.currConditionalRuleset) || this.conditionalRulesets.push(this.currConditionalRuleset)
        }
        addConditionalRule(e, t) {
          var r = this.transformVars(this.transformProperties(e.rule)),
            n = this.transformSelector(e.selector);
          if (!this.currConditionalRuleset) throw Error("Couldn't add conditional rule");
          var i = t[t.length - 1],
            o = t.slice(0, t.length - 1);
          this.currConditionalRuleset.addRule({
            selector: n,
            rule: r
          }, i, o)
        }
        addRule(e) {
          var t = this.transformVars(this.transformProperties(e.rule)),
            r = this.transformSelector(e.selector);
          this.rules.push({
            selector: r,
            rule: t
          })
        }
        addLayer(e) {
          var t = e.join(" - ");
          this.layers.set(t, e)
        }
        transformProperties(e) {
          return this.transformContent(this.pixelifyProperties(e))
        }
        pixelifyProperties(e) {
          return eo(e, (t, r) => {
            "number" != typeof t || 0 === t || em[r] || (e[r] = "".concat(t, "px"))
          }), e
        }
        transformVars(e) {
          var {
            vars: t
          } = e, r = ei(e, eh);
          return t ? en(en({}, function(e, t) {
            var r = {};
            for (var n in e) r[t(e[n], n)] = e[n];
            return r
          }(t, (e, t) => (0, c.Tm)(t))), r) : r
        }
        transformContent(e) {
          var {
            content: t
          } = e, r = ei(e, ef);
          return void 0 === t ? r : en({
            content: (Array.isArray(t) ? t : [t]).map(e => e && (e.includes('"') || e.includes("'") || /^([A-Za-z-]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)(\s|$)/.test(e)) ? e : '"'.concat(e, '"'))
          }, r)
        }
        transformClassname(e) {
          return ".".concat(h()(e, {
            isIdentifier: !0
          }))
        }
        transformSelector(e) {
          var t = e,
            r = function(e) {
              t = t.replace(i, () => (! function() {
                (() => {
                  if (p.length < 1) throw Error("No adapter configured");
                  return p[p.length - 1]
                })().markCompositionUsed(...arguments)
              }(e), e))
            };
          for (var {
              identifier: n,
              regex: i
            }
            of this.composedClassLists) r(n);
          if (this.localClassNamesMap.has(t)) return this.transformClassname(t);
          for (var o = this.localClassNamesSearch.search(t), a = t.length, s = o.length - 1; s >= 0; s--) {
            var [l, [u]] = o[s], c = l - u.length + 1;
            a <= l || (a = c, "." !== t[c - 1] && (t = function(e, t, r, n) {
              var i = e.slice(0, t),
                o = e.slice(r);
              return "".concat(i).concat(n).concat(o)
            }(t, c, l + 1, this.transformClassname(u))))
          }
          return t
        }
        transformSelectors(e, t, r) {
          eo(t.selectors, (t, n) => {
            if ("local" !== e.type) throw Error("Selectors are not allowed within ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
            var i, l = this.transformSelector(n.replace(RegExp("&", "g"), e.selector)),
              u = e.selector,
              c = () => {
                var e = RegExp(".".concat(h()(u, {
                  isIdentifier: !0
                }).replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")), "g");
                return l.replace(e, "&")
              };
            try {
              i = function(e) {
                let t = [],
                  r = function e(t, r, n) {
                    let i = [];

                    function s(e) {
                      let t = r.slice(n + e).match(g);
                      if (!t) throw Error(`Expected name, found ${r.slice(n)}`);
                      let [i] = t;
                      return n += e + i.length, k(i)
                    }

                    function l(e) {
                      for (n += e; n < r.length && _(r.charCodeAt(n));) n++
                    }

                    function u() {
                      let e = n += 1,
                        t = 1;
                      for (; t > 0 && n < r.length; n++) 40 !== r.charCodeAt(n) || c(n) ? 41 === r.charCodeAt(n) && !c(n) && t-- : t++;
                      if (t) throw Error("Parenthesis not matched");
                      return k(r.slice(e, n - 1))
                    }

                    function c(e) {
                      let t = 0;
                      for (; 92 === r.charCodeAt(--e);) t++;
                      return (1 & t) == 1
                    }

                    function d() {
                      if (i.length > 0 && function(e) {
                          switch (e.type) {
                            case o.Adjacent:
                            case o.Child:
                            case o.Descendant:
                            case o.Parent:
                            case o.Sibling:
                            case o.ColumnCombinator:
                              return !0;
                            default:
                              return !1
                          }
                        }(i[i.length - 1])) throw Error("Did not expect successive traversals.")
                    }

                    function h(e) {
                      if (i.length > 0 && i[i.length - 1].type === o.Descendant) {
                        i[i.length - 1].type = e;
                        return
                      }
                      d(), i.push({
                        type: e
                      })
                    }

                    function f(e, t) {
                      i.push({
                        type: o.Attribute,
                        name: e,
                        action: t,
                        value: s(1),
                        namespace: null,
                        ignoreCase: "quirks"
                      })
                    }

                    function p() {
                      if (i.length && i[i.length - 1].type === o.Descendant && i.pop(), 0 === i.length) throw Error("Empty sub-selector");
                      t.push(i)
                    }
                    if (l(0), r.length === n) return n;
                    e: for (; n < r.length;) {
                      let t = r.charCodeAt(n);
                      switch (t) {
                        case 32:
                        case 9:
                        case 10:
                        case 12:
                        case 13:
                          (0 === i.length || i[0].type !== o.Descendant) && (d(), i.push({
                            type: o.Descendant
                          })), l(1);
                          break;
                        case 62:
                          h(o.Child), l(1);
                          break;
                        case 60:
                          h(o.Parent), l(1);
                          break;
                        case 126:
                          h(o.Sibling), l(1);
                          break;
                        case 43:
                          h(o.Adjacent), l(1);
                          break;
                        case 46:
                          f("class", a.Element);
                          break;
                        case 35:
                          f("id", a.Equals);
                          break;
                        case 91: {
                          let e;
                          l(1);
                          let t = null;
                          124 === r.charCodeAt(n) ? e = s(1) : r.startsWith("*|", n) ? (t = "*", e = s(2)) : (e = s(0), 124 === r.charCodeAt(n) && 61 !== r.charCodeAt(n + 1) && (t = e, e = s(1))), l(0);
                          let u = a.Exists,
                            d = w.get(r.charCodeAt(n));
                          if (d) {
                            if (u = d, 61 !== r.charCodeAt(n + 1)) throw Error("Expected `=`");
                            l(2)
                          } else 61 === r.charCodeAt(n) && (u = a.Equals, l(1));
                          let h = "",
                            f = null;
                          if ("exists" !== u) {
                            if (S(r.charCodeAt(n))) {
                              let e = r.charCodeAt(n),
                                t = n + 1;
                              for (; t < r.length && (r.charCodeAt(t) !== e || c(t));) t += 1;
                              if (r.charCodeAt(t) !== e) throw Error("Attribute value didn't end");
                              h = k(r.slice(n + 1, t)), n = t + 1
                            } else {
                              let e = n;
                              for (; n < r.length && (!_(r.charCodeAt(n)) && 93 !== r.charCodeAt(n) || c(n));) n += 1;
                              h = k(r.slice(e, n))
                            }
                            l(0);
                            let e = 32 | r.charCodeAt(n);
                            115 === e ? (f = !1, l(1)) : 105 === e && (f = !0, l(1))
                          }
                          if (93 !== r.charCodeAt(n)) throw Error("Attribute selector didn't terminate");
                          n += 1;
                          let p = {
                            type: o.Attribute,
                            name: e,
                            action: u,
                            value: h,
                            namespace: t,
                            ignoreCase: f
                          };
                          i.push(p);
                          break
                        }
                        case 58: {
                          if (58 === r.charCodeAt(n + 1)) {
                            i.push({
                              type: o.PseudoElement,
                              name: s(2).toLowerCase(),
                              data: 40 === r.charCodeAt(n) ? u() : null
                            });
                            continue
                          }
                          let t = s(1).toLowerCase(),
                            a = null;
                          if (40 === r.charCodeAt(n))
                            if (y.has(t)) {
                              if (S(r.charCodeAt(n + 1))) throw Error(`Pseudo-selector ${t} cannot be quoted`);
                              if (n = e(a = [], r, n + 1), 41 !== r.charCodeAt(n)) throw Error(`Missing closing parenthesis in :${t} (${r})`);
                              n += 1
                            } else {
                              if (a = u(), E.has(t)) {
                                let e = a.charCodeAt(0);
                                e === a.charCodeAt(a.length - 1) && S(e) && (a = a.slice(1, -1))
                              }
                              a = k(a)
                            } i.push({
                            type: o.Pseudo,
                            name: t,
                            data: a
                          });
                          break
                        }
                        case 44:
                          p(), i = [], l(1);
                          break;
                        default: {
                          let e;
                          if (r.startsWith("/*", n)) {
                            let e = r.indexOf("*/", n + 2);
                            if (e < 0) throw Error("Comment was not terminated");
                            n = e + 2, 0 === i.length && l(0);
                            break
                          }
                          let a = null;
                          if (42 === t) n += 1, e = "*";
                          else if (124 === t) {
                            if (e = "", 124 === r.charCodeAt(n + 1)) {
                              h(o.ColumnCombinator), l(2);
                              break
                            }
                          } else if (g.test(r.slice(n))) e = s(0);
                          else break e;
                          124 === r.charCodeAt(n) && 124 !== r.charCodeAt(n + 1) && (a = e, 42 === r.charCodeAt(n + 1) ? (e = "*", n += 2) : e = s(1)), i.push("*" === e ? {
                            type: o.Universal,
                            namespace: a
                          } : {
                            type: o.Tag,
                            name: e,
                            namespace: a
                          })
                        }
                      }
                    }
                    return p(), n
                  }(t, `${e}`, 0);
                if (r < e.length) throw Error(`Unmatched selector: ${e.slice(r)}`);
                return t
              }(l)
            } catch (e) {
              throw Error("Invalid selector: ".concat(c()), {
                cause: e
              })
            }
            i.forEach(e => {
              try {
                for (var t = e.length - 1; t >= -1; t--) {
                  if (!e[t]) throw Error();
                  var r = e[t];
                  if ("child" === r.type || "parent" === r.type || "sibling" === r.type || "adjacent" === r.type || "descendant" === r.type) throw Error();
                  if ("attribute" === r.type && "class" === r.name && r.value === u) return
                }
              } catch (e) {
                throw Error(O(s || (s = v(["\n        Invalid selector: ", "\n    \n        Style selectors must target the '&' character (along with any modifiers), e.g. ", " or ", ".\n        \n        This is to ensure that each style block only affects the styling of a single class.\n        \n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ", ") to 'parent', you should add ", " to 'child').\n        \n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ", ", you should instead write 'globalStyle(", ", { ... })'\n      "])), c(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"), {
                  cause: e
                })
              }
            });
            var d = {
              selector: l,
              rule: ea(t, ev)
            };
            r ? this.addConditionalRule(d, r) : this.addRule(d);
            var f = {
              type: "selector",
              selector: l,
              rule: t
            };
            this.transformLayer(f, t["@layer"], r), this.transformSupports(f, t["@supports"], r), this.transformMedia(f, t["@media"], r), this.transformContainer(f, t["@container"], r), this.transformStartingStyle(f, t["@starting-style"], r)
          })
        }
        transformMedia(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t)
            for (var [i, o] of(null == (r = this.currConditionalRuleset) || r.addConditionPrecedence(n, Object.keys(t).map(e => "@media ".concat(e))), Object.entries(t))) {
              var a = "@media ".concat(i);
              ed(a);
              var s = [...n, a];
              this.addConditionalRule({
                selector: e.selector,
                rule: ea(o, ev)
              }, s), "local" === e.type && (this.transformSimplePseudos(e, o, s), this.transformSelectors(e, o, s)), this.transformLayer(e, o["@layer"], s), this.transformSupports(e, o["@supports"], s), this.transformContainer(e, o["@container"], s), this.transformStartingStyle(e, o["@starting-style"], s)
            }
        }
        transformContainer(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null == (r = this.currConditionalRuleset) || r.addConditionPrecedence(n, Object.keys(t).map(e => "@container ".concat(e))), eo(t, (t, r) => {
            var i = [...n, "@container ".concat(r)];
            this.addConditionalRule({
              selector: e.selector,
              rule: ea(t, ev)
            }, i), "local" === e.type && (this.transformSimplePseudos(e, t, i), this.transformSelectors(e, t, i)), this.transformLayer(e, t["@layer"], i), this.transformSupports(e, t["@supports"], i), this.transformMedia(e, t["@media"], i), this.transformStartingStyle(e, t["@starting-style"], i)
          }))
        }
        transformLayer(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null == (r = this.currConditionalRuleset) || r.addConditionPrecedence(n, Object.keys(t).map(e => "@layer ".concat(e))), eo(t, (t, r) => {
            var i = [...n, "@layer ".concat(r)];
            this.addLayer(i), this.addConditionalRule({
              selector: e.selector,
              rule: ea(t, ev)
            }, i), "local" === e.type && (this.transformSimplePseudos(e, t, i), this.transformSelectors(e, t, i)), this.transformMedia(e, t["@media"], i), this.transformSupports(e, t["@supports"], i), this.transformContainer(e, t["@container"], i), this.transformStartingStyle(e, t["@starting-style"], i)
          }))
        }
        transformSupports(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null == (r = this.currConditionalRuleset) || r.addConditionPrecedence(n, Object.keys(t).map(e => "@supports ".concat(e))), eo(t, (t, r) => {
            var i = [...n, "@supports ".concat(r)];
            this.addConditionalRule({
              selector: e.selector,
              rule: ea(t, ev)
            }, i), "local" === e.type && (this.transformSimplePseudos(e, t, i), this.transformSelectors(e, t, i)), this.transformLayer(e, t["@layer"], i), this.transformMedia(e, t["@media"], i), this.transformContainer(e, t["@container"], i), this.transformStartingStyle(e, t["@starting-style"], i)
          }))
        }
        transformSimplePseudos(e, t, r) {
          for (var n of Object.keys(t))
            if (el[n]) {
              if ("local" !== e.type) throw Error("Simple pseudos are not valid in ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
              r ? this.addConditionalRule({
                selector: "".concat(e.selector).concat(n),
                rule: t[n]
              }, r) : this.addRule({
                conditions: r,
                selector: "".concat(e.selector).concat(n),
                rule: t[n]
              })
            }
        }
        transformStartingStyle(e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t) {
            var n, i = Object.keys(t).find(e => e.startsWith("@"));
            if (i) throw Error('Nested at-rules (e.g. "'.concat(i, '") are not allowed inside @starting-style.'));
            null == (n = this.currConditionalRuleset) || n.addConditionPrecedence(r, ["@starting-style"]);
            var o = [...r, "@starting-style"];
            this.addConditionalRule({
              selector: e.selector,
              rule: ea(t, ev)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o))
          }
        }
        toCss() {
          var e = [];
          for (var t of this.fontFaceRules) e.push(eb({
            "@font-face": t
          }));
          for (var r of this.propertyRules) e.push(eb({
            ["@property ".concat(r.name)]: r.rule
          }));
          for (var n of this.keyframesRules) e.push(eb({
            ["@keyframes ".concat(n.name)]: n.rule
          }));
          for (var i of this.layers.values()) {
            var [o, ...a] = i.reverse(), s = {
              [o]: ep
            };
            for (var l of a) s = {
              [l]: s
            };
            e.push(eb(s))
          }
          for (var u of this.rules) e.push(eb({
            [u.selector]: u.rule
          }));
          for (var c of this.conditionalRulesets)
            for (var d of c.renderToArray()) e.push(eb(d));
          return e.filter(Boolean)
        }
      }

      function eb(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          r = [],
          n = function(n) {
            var i = e[n];
            i && Array.isArray(i) ? r.push(...i.map(e => eb({
              [n]: e
            }, t))) : i && "object" == typeof i ? 0 !== Object.keys(i).length && r.push("".concat(t).concat(n, " {\n").concat(eb(i, t + "  "), "\n").concat(t, "}")) : i === ep ? r.push("".concat(t).concat(n, ";")) : r.push("".concat(t).concat(n.startsWith("--") ? n : n.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase(), ": ").concat(i, ";"))
          };
        for (var i of Object.keys(e)) n(i);
        return r.join("\n")
      }
      var ew = r(87358);
      let ey = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date,
        eE = new Set,
        eA = "object" == typeof ew && ew ? ew : {},
        ek = (e, t, r, n) => {
          "function" == typeof eA.emitWarning ? eA.emitWarning(e, t, r, n) : console.error(`[${r}] ${t}: ${e}`)
        },
        eS = globalThis.AbortController,
        e_ = globalThis.AbortSignal;
      if (void 0 === eS) {
        e_ = class {
          onabort;
          _onabort = [];
          reason;
          aborted = !1;
          addEventListener(e, t) {
            this._onabort.push(t)
          }
        }, eS = class {
          constructor() {
            t()
          }
          signal = new e_;
          abort(e) {
            if (!this.signal.aborted) {
              for (let t of (this.signal.reason = e, this.signal.aborted = !0, this.signal._onabort)) t(e);
              this.signal.onabort?.(e)
            }
          }
        };
        let e = eA.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1",
          t = () => {
            e && (e = !1, ek("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t))
          }
      }
      Symbol("type");
      let eT = e => e && e === Math.floor(e) && e > 0 && isFinite(e),
        eC = e => eT(e) ? e <= 256 ? Uint8Array : e <= 65536 ? Uint16Array : e <= 0x100000000 ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? eO : null : null;
      class eO extends Array {
        constructor(e) {
          super(e), this.fill(0)
        }
      }
      class ex {
        heap;
        length;
        static #e = !1;
        static create(e) {
          let t = eC(e);
          if (!t) return [];
          ex.#e = !0;
          let r = new ex(e, t);
          return ex.#e = !1, r
        }
        constructor(e, t) {
          if (!ex.#e) throw TypeError("instantiate Stack using Stack.create(n)");
          this.heap = new t(e), this.length = 0
        }
        push(e) {
          this.heap[this.length++] = e
        }
        pop() {
          return this.heap[--this.length]
        }
      }
      class eR {
        #t;
        #r;
        #n;
        #i;
        #o;
        #a;
        ttl;
        ttlResolution;
        ttlAutopurge;
        updateAgeOnGet;
        updateAgeOnHas;
        allowStale;
        noDisposeOnSet;
        noUpdateTTL;
        maxEntrySize;
        sizeCalculation;
        noDeleteOnFetchRejection;
        noDeleteOnStaleGet;
        allowStaleOnFetchAbort;
        allowStaleOnFetchRejection;
        ignoreFetchAbort;
        #s;
        #l;
        #u;
        #c;
        #d;
        #h;
        #f;
        #p;
        #m;
        #v;
        #g;
        #b;
        #w;
        #y;
        #E;
        #A;
        #k;
        static unsafeExposeInternals(e) {
          return {
            starts: e.#w,
            ttls: e.#y,
            sizes: e.#b,
            keyMap: e.#u,
            keyList: e.#c,
            valList: e.#d,
            next: e.#h,
            prev: e.#f,
            get head() {
              return e.#p
            },
            get tail() {
              return e.#m
            },
            free: e.#v,
            isBackgroundFetch: t => e.#S(t),
            backgroundFetch: (t, r, n, i) => e.#_(t, r, n, i),
            moveToTail: t => e.#T(t),
            indexes: t => e.#C(t),
            rindexes: t => e.#O(t),
            isStale: t => e.#x(t)
          }
        }
        get max() {
          return this.#t
        }
        get maxSize() {
          return this.#r
        }
        get calculatedSize() {
          return this.#l
        }
        get size() {
          return this.#s
        }
        get fetchMethod() {
          return this.#o
        }
        get memoMethod() {
          return this.#a
        }
        get dispose() {
          return this.#n
        }
        get disposeAfter() {
          return this.#i
        }
        constructor(e) {
          const {
            max: t = 0,
            ttl: r,
            ttlResolution: n = 1,
            ttlAutopurge: i,
            updateAgeOnGet: o,
            updateAgeOnHas: a,
            allowStale: s,
            dispose: l,
            disposeAfter: u,
            noDisposeOnSet: c,
            noUpdateTTL: d,
            maxSize: h = 0,
            maxEntrySize: f = 0,
            sizeCalculation: p,
            fetchMethod: m,
            memoMethod: v,
            noDeleteOnFetchRejection: g,
            noDeleteOnStaleGet: b,
            allowStaleOnFetchRejection: w,
            allowStaleOnFetchAbort: y,
            ignoreFetchAbort: E
          } = e;
          if (0 !== t && !eT(t)) throw TypeError("max option must be a nonnegative integer");
          const A = t ? eC(t) : Array;
          if (!A) throw Error("invalid max value: " + t);
          if (this.#t = t, this.#r = h, this.maxEntrySize = f || this.#r, this.sizeCalculation = p, this.sizeCalculation) {
            if (!this.#r && !this.maxEntrySize) throw TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            if ("function" != typeof this.sizeCalculation) throw TypeError("sizeCalculation set to non-function")
          }
          if (void 0 !== v && "function" != typeof v) throw TypeError("memoMethod must be a function if defined");
          if (this.#a = v, void 0 !== m && "function" != typeof m) throw TypeError("fetchMethod must be a function if specified");
          if (this.#o = m, this.#A = !!m, this.#u = new Map, this.#c = Array(t).fill(void 0), this.#d = Array(t).fill(void 0), this.#h = new A(t), this.#f = new A(t), this.#p = 0, this.#m = 0, this.#v = ex.create(t), this.#s = 0, this.#l = 0, "function" == typeof l && (this.#n = l), "function" == typeof u ? (this.#i = u, this.#g = []) : (this.#i = void 0, this.#g = void 0), this.#E = !!this.#n, this.#k = !!this.#i, this.noDisposeOnSet = !!c, this.noUpdateTTL = !!d, this.noDeleteOnFetchRejection = !!g, this.allowStaleOnFetchRejection = !!w, this.allowStaleOnFetchAbort = !!y, this.ignoreFetchAbort = !!E, 0 !== this.maxEntrySize) {
            if (0 !== this.#r && !eT(this.#r)) throw TypeError("maxSize must be a positive integer if specified");
            if (!eT(this.maxEntrySize)) throw TypeError("maxEntrySize must be a positive integer if specified");
            this.#R()
          }
          if (this.allowStale = !!s, this.noDeleteOnStaleGet = !!b, this.updateAgeOnGet = !!o, this.updateAgeOnHas = !!a, this.ttlResolution = eT(n) || 0 === n ? n : 1, this.ttlAutopurge = !!i, this.ttl = r || 0, this.ttl) {
            if (!eT(this.ttl)) throw TypeError("ttl must be a positive integer if specified");
            this.#I()
          }
          if (0 === this.#t && 0 === this.ttl && 0 === this.#r) throw TypeError("At least one of max, maxSize, or ttl is required");
          if (!this.ttlAutopurge && !this.#t && !this.#r) {
            const e = "LRU_CACHE_UNBOUNDED";
            (e => !eE.has(e))(e) && (eE.add(e), ek("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, eR))
          }
        }
        getRemainingTTL(e) {
          return this.#u.has(e) ? 1 / 0 : 0
        }
        #I() {
          let e = new eO(this.#t),
            t = new eO(this.#t);
          this.#y = e, this.#w = t, this.#L = (r, n, i = ey.now()) => {
            if (t[r] = 0 !== n ? i : 0, e[r] = n, 0 !== n && this.ttlAutopurge) {
              let e = setTimeout(() => {
                this.#x(r) && this.#D(this.#c[r], "expire")
              }, n + 1);
              e.unref && e.unref()
            }
          }, this.#P = r => {
            t[r] = 0 !== e[r] ? ey.now() : 0
          }, this.#M = (i, o) => {
            if (e[o]) {
              let a = e[o],
                s = t[o];
              if (!a || !s) return;
              i.ttl = a, i.start = s, i.now = r || n();
              let l = i.now - s;
              i.remainingTTL = a - l
            }
          };
          let r = 0,
            n = () => {
              let e = ey.now();
              if (this.ttlResolution > 0) {
                r = e;
                let t = setTimeout(() => r = 0, this.ttlResolution);
                t.unref && t.unref()
              }
              return e
            };
          this.getRemainingTTL = i => {
            let o = this.#u.get(i);
            if (void 0 === o) return 0;
            let a = e[o],
              s = t[o];
            return a && s ? a - ((r || n()) - s) : 1 / 0
          }, this.#x = i => {
            let o = t[i],
              a = e[i];
            return !!a && !!o && (r || n()) - o > a
          }
        }
        #P = () => {};
        #M = () => {};
        #L = () => {};
        #x = () => !1;
        #R() {
          let e = new eO(this.#t);
          this.#l = 0, this.#b = e, this.#N = t => {
            this.#l -= e[t], e[t] = 0
          }, this.#j = (e, t, r, n) => {
            if (this.#S(t)) return 0;
            if (!eT(r))
              if (n) {
                if ("function" != typeof n) throw TypeError("sizeCalculation must be a function");
                if (!eT(r = n(t, e))) throw TypeError("sizeCalculation return invalid (expect positive integer)")
              } else throw TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
            return r
          }, this.#G = (t, r, n) => {
            if (e[t] = r, this.#r) {
              let r = this.#r - e[t];
              for (; this.#l > r;) this.#U(!0)
            }
            this.#l += e[t], n && (n.entrySize = r, n.totalCalculatedSize = this.#l)
          }
        }
        #N = e => {};
        #G = (e, t, r) => {};
        #j = (e, t, r, n) => {
          if (r || n) throw TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
          return 0
        };* #C({
          allowStale: e = this.allowStale
        } = {}) {
          if (this.#s)
            for (let t = this.#m; this.#F(t) && ((e || !this.#x(t)) && (yield t), t !== this.#p);) t = this.#f[t]
        }* #O({
          allowStale: e = this.allowStale
        } = {}) {
          if (this.#s)
            for (let t = this.#p; this.#F(t) && ((e || !this.#x(t)) && (yield t), t !== this.#m);) t = this.#h[t]
        }
        #F(e) {
          return void 0 !== e && this.#u.get(this.#c[e]) === e
        }* entries() {
          for (let e of this.#C()) void 0 === this.#d[e] || void 0 === this.#c[e] || this.#S(this.#d[e]) || (yield [this.#c[e], this.#d[e]])
        }* rentries() {
          for (let e of this.#O()) void 0 === this.#d[e] || void 0 === this.#c[e] || this.#S(this.#d[e]) || (yield [this.#c[e], this.#d[e]])
        }* keys() {
          for (let e of this.#C()) {
            let t = this.#c[e];
            void 0 === t || this.#S(this.#d[e]) || (yield t)
          }
        }* rkeys() {
          for (let e of this.#O()) {
            let t = this.#c[e];
            void 0 === t || this.#S(this.#d[e]) || (yield t)
          }
        }* values() {
          for (let e of this.#C()) void 0 === this.#d[e] || this.#S(this.#d[e]) || (yield this.#d[e])
        }* rvalues() {
          for (let e of this.#O()) void 0 === this.#d[e] || this.#S(this.#d[e]) || (yield this.#d[e])
        } [Symbol.iterator]() {
          return this.entries()
        } [Symbol.toStringTag] = "LRUCache";
        find(e, t = {}) {
          for (let r of this.#C()) {
            let n = this.#d[r],
              i = this.#S(n) ? n.__staleWhileFetching : n;
            if (void 0 !== i && e(i, this.#c[r], this)) return this.get(this.#c[r], t)
          }
        }
        forEach(e, t = this) {
          for (let r of this.#C()) {
            let n = this.#d[r],
              i = this.#S(n) ? n.__staleWhileFetching : n;
            void 0 !== i && e.call(t, i, this.#c[r], this)
          }
        }
        rforEach(e, t = this) {
          for (let r of this.#O()) {
            let n = this.#d[r],
              i = this.#S(n) ? n.__staleWhileFetching : n;
            void 0 !== i && e.call(t, i, this.#c[r], this)
          }
        }
        purgeStale() {
          let e = !1;
          for (let t of this.#O({
              allowStale: !0
            })) this.#x(t) && (this.#D(this.#c[t], "expire"), e = !0);
          return e
        }
        info(e) {
          let t = this.#u.get(e);
          if (void 0 === t) return;
          let r = this.#d[t],
            n = this.#S(r) ? r.__staleWhileFetching : r;
          if (void 0 === n) return;
          let i = {
            value: n
          };
          if (this.#y && this.#w) {
            let e = this.#y[t],
              r = this.#w[t];
            e && r && (i.ttl = e - (ey.now() - r), i.start = Date.now())
          }
          return this.#b && (i.size = this.#b[t]), i
        }
        dump() {
          let e = [];
          for (let t of this.#C({
              allowStale: !0
            })) {
            let r = this.#c[t],
              n = this.#d[t],
              i = this.#S(n) ? n.__staleWhileFetching : n;
            if (void 0 === i || void 0 === r) continue;
            let o = {
              value: i
            };
            if (this.#y && this.#w) {
              o.ttl = this.#y[t];
              let e = ey.now() - this.#w[t];
              o.start = Math.floor(Date.now() - e)
            }
            this.#b && (o.size = this.#b[t]), e.unshift([r, o])
          }
          return e
        }
        load(e) {
          for (let [t, r] of(this.clear(), e)) {
            if (r.start) {
              let e = Date.now() - r.start;
              r.start = ey.now() - e
            }
            this.set(t, r.value, r)
          }
        }
        set(e, t, r = {}) {
          if (void 0 === t) return this.delete(e), this;
          let {
            ttl: n = this.ttl,
            start: i,
            noDisposeOnSet: o = this.noDisposeOnSet,
            sizeCalculation: a = this.sizeCalculation,
            status: s
          } = r, {
            noUpdateTTL: l = this.noUpdateTTL
          } = r, u = this.#j(e, t, r.size || 0, a);
          if (this.maxEntrySize && u > this.maxEntrySize) return s && (s.set = "miss", s.maxEntrySizeExceeded = !0), this.#D(e, "set"), this;
          let c = 0 === this.#s ? void 0 : this.#u.get(e);
          if (void 0 === c) c = 0 === this.#s ? this.#m : 0 !== this.#v.length ? this.#v.pop() : this.#s === this.#t ? this.#U(!1) : this.#s, this.#c[c] = e, this.#d[c] = t, this.#u.set(e, c), this.#h[this.#m] = c, this.#f[c] = this.#m, this.#m = c, this.#s++, this.#G(c, u, s), s && (s.set = "add"), l = !1;
          else {
            this.#T(c);
            let r = this.#d[c];
            if (t !== r) {
              if (this.#A && this.#S(r)) {
                r.__abortController.abort(Error("replaced"));
                let {
                  __staleWhileFetching: t
                } = r;
                void 0 !== t && !o && (this.#E && this.#n?.(t, e, "set"), this.#k && this.#g?.push([t, e, "set"]))
              } else !o && (this.#E && this.#n?.(r, e, "set"), this.#k && this.#g?.push([r, e, "set"]));
              if (this.#N(c), this.#G(c, u, s), this.#d[c] = t, s) {
                s.set = "replace";
                let e = r && this.#S(r) ? r.__staleWhileFetching : r;
                void 0 !== e && (s.oldValue = e)
              }
            } else s && (s.set = "update")
          }
          if (0 === n || this.#y || this.#I(), this.#y && (l || this.#L(c, n, i), s && this.#M(s, c)), !o && this.#k && this.#g) {
            let e, t = this.#g;
            for (; e = t?.shift();) this.#i?.(...e)
          }
          return this
        }
        pop() {
          try {
            for (; this.#s;) {
              let e = this.#d[this.#p];
              if (this.#U(!0), this.#S(e)) {
                if (e.__staleWhileFetching) return e.__staleWhileFetching
              } else if (void 0 !== e) return e
            }
          } finally {
            if (this.#k && this.#g) {
              let e, t = this.#g;
              for (; e = t?.shift();) this.#i?.(...e)
            }
          }
        }
        #U(e) {
          let t = this.#p,
            r = this.#c[t],
            n = this.#d[t];
          return this.#A && this.#S(n) ? n.__abortController.abort(Error("evicted")) : (this.#E || this.#k) && (this.#E && this.#n?.(n, r, "evict"), this.#k && this.#g?.push([n, r, "evict"])), this.#N(t), e && (this.#c[t] = void 0, this.#d[t] = void 0, this.#v.push(t)), 1 === this.#s ? (this.#p = this.#m = 0, this.#v.length = 0) : this.#p = this.#h[t], this.#u.delete(r), this.#s--, t
        }
        has(e, t = {}) {
          let {
            updateAgeOnHas: r = this.updateAgeOnHas,
            status: n
          } = t, i = this.#u.get(e);
          if (void 0 !== i) {
            let e = this.#d[i];
            if (this.#S(e) && void 0 === e.__staleWhileFetching) return !1;
            if (!this.#x(i)) return r && this.#P(i), n && (n.has = "hit", this.#M(n, i)), !0;
            n && (n.has = "stale", this.#M(n, i))
          } else n && (n.has = "miss");
          return !1
        }
        peek(e, t = {}) {
          let {
            allowStale: r = this.allowStale
          } = t, n = this.#u.get(e);
          if (void 0 === n || !r && this.#x(n)) return;
          let i = this.#d[n];
          return this.#S(i) ? i.__staleWhileFetching : i
        }
        #_(e, t, r, n) {
          let i = void 0 === t ? void 0 : this.#d[t];
          if (this.#S(i)) return i;
          let o = new eS,
            {
              signal: a
            } = r;
          a?.addEventListener("abort", () => o.abort(a.reason), {
            signal: o.signal
          });
          let s = {
              signal: o.signal,
              options: r,
              context: n
            },
            l = (n, i = !1) => {
              let {
                aborted: a
              } = o.signal, l = r.ignoreFetchAbort && void 0 !== n;
              return (r.status && (a && !i ? (r.status.fetchAborted = !0, r.status.fetchError = o.signal.reason, l && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), !a || l || i) ? (this.#d[t] === d && (void 0 === n ? d.__staleWhileFetching ? this.#d[t] = d.__staleWhileFetching : this.#D(e, "fetch") : (r.status && (r.status.fetchUpdated = !0), this.set(e, n, s.options))), n) : u(o.signal.reason)
            },
            u = n => {
              let {
                aborted: i
              } = o.signal, a = i && r.allowStaleOnFetchAbort, s = a || r.allowStaleOnFetchRejection, l = s || r.noDeleteOnFetchRejection;
              if (this.#d[t] === d && (l && void 0 !== d.__staleWhileFetching ? a || (this.#d[t] = d.__staleWhileFetching) : this.#D(e, "fetch")), s) return r.status && void 0 !== d.__staleWhileFetching && (r.status.returnedStale = !0), d.__staleWhileFetching;
              if (d.__returned === d) throw n
            },
            c = (t, n) => {
              let a = this.#o?.(e, i, s);
              a && a instanceof Promise && a.then(e => t(void 0 === e ? void 0 : e), n), o.signal.addEventListener("abort", () => {
                (!r.ignoreFetchAbort || r.allowStaleOnFetchAbort) && (t(void 0), r.allowStaleOnFetchAbort && (t = e => l(e, !0)))
              })
            };
          r.status && (r.status.fetchDispatched = !0);
          let d = new Promise(c).then(l, e => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = e), u(e))),
            h = Object.assign(d, {
              __abortController: o,
              __staleWhileFetching: i,
              __returned: void 0
            });
          return void 0 === t ? (this.set(e, h, {
            ...s.options,
            status: void 0
          }), t = this.#u.get(e)) : this.#d[t] = h, h
        }
        #S(e) {
          return !!this.#A && !!e && e instanceof Promise && e.hasOwnProperty("__staleWhileFetching") && e.__abortController instanceof eS
        }
        async fetch(e, t = {}) {
          let {
            allowStale: r = this.allowStale,
            updateAgeOnGet: n = this.updateAgeOnGet,
            noDeleteOnStaleGet: i = this.noDeleteOnStaleGet,
            ttl: o = this.ttl,
            noDisposeOnSet: a = this.noDisposeOnSet,
            size: s = 0,
            sizeCalculation: l = this.sizeCalculation,
            noUpdateTTL: u = this.noUpdateTTL,
            noDeleteOnFetchRejection: c = this.noDeleteOnFetchRejection,
            allowStaleOnFetchRejection: d = this.allowStaleOnFetchRejection,
            ignoreFetchAbort: h = this.ignoreFetchAbort,
            allowStaleOnFetchAbort: f = this.allowStaleOnFetchAbort,
            context: p,
            forceRefresh: m = !1,
            status: v,
            signal: g
          } = t;
          if (!this.#A) return v && (v.fetch = "get"), this.get(e, {
            allowStale: r,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: i,
            status: v
          });
          let b = {
              allowStale: r,
              updateAgeOnGet: n,
              noDeleteOnStaleGet: i,
              ttl: o,
              noDisposeOnSet: a,
              size: s,
              sizeCalculation: l,
              noUpdateTTL: u,
              noDeleteOnFetchRejection: c,
              allowStaleOnFetchRejection: d,
              allowStaleOnFetchAbort: f,
              ignoreFetchAbort: h,
              status: v,
              signal: g
            },
            w = this.#u.get(e);
          if (void 0 === w) {
            v && (v.fetch = "miss");
            let t = this.#_(e, w, b, p);
            return t.__returned = t
          } {
            let t = this.#d[w];
            if (this.#S(t)) {
              let e = r && void 0 !== t.__staleWhileFetching;
              return v && (v.fetch = "inflight", e && (v.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t
            }
            let i = this.#x(w);
            if (!m && !i) return v && (v.fetch = "hit"), this.#T(w), n && this.#P(w), v && this.#M(v, w), t;
            let o = this.#_(e, w, b, p),
              a = void 0 !== o.__staleWhileFetching && r;
            return v && (v.fetch = i ? "stale" : "refresh", a && i && (v.returnedStale = !0)), a ? o.__staleWhileFetching : o.__returned = o
          }
        }
        async forceFetch(e, t = {}) {
          let r = await this.fetch(e, t);
          if (void 0 === r) throw Error("fetch() returned undefined");
          return r
        }
        memo(e, t = {}) {
          let r = this.#a;
          if (!r) throw Error("no memoMethod provided to constructor");
          let {
            context: n,
            forceRefresh: i,
            ...o
          } = t, a = this.get(e, o);
          if (!i && void 0 !== a) return a;
          let s = r(e, a, {
            options: o,
            context: n
          });
          return this.set(e, s, o), s
        }
        get(e, t = {}) {
          let {
            allowStale: r = this.allowStale,
            updateAgeOnGet: n = this.updateAgeOnGet,
            noDeleteOnStaleGet: i = this.noDeleteOnStaleGet,
            status: o
          } = t, a = this.#u.get(e);
          if (void 0 !== a) {
            let t = this.#d[a],
              s = this.#S(t);
            return (o && this.#M(o, a), this.#x(a)) ? (o && (o.get = "stale"), s) ? (o && r && void 0 !== t.__staleWhileFetching && (o.returnedStale = !0), r ? t.__staleWhileFetching : void 0) : (i || this.#D(e, "expire"), o && r && (o.returnedStale = !0), r ? t : void 0) : (o && (o.get = "hit"), s) ? t.__staleWhileFetching : (this.#T(a), n && this.#P(a), t)
          }
          o && (o.get = "miss")
        }
        #z(e, t) {
          this.#f[t] = e, this.#h[e] = t
        }
        #T(e) {
          e !== this.#m && (e === this.#p ? this.#p = this.#h[e] : this.#z(this.#f[e], this.#h[e]), this.#z(this.#m, e), this.#m = e)
        }
        delete(e) {
          return this.#D(e, "delete")
        }
        #D(e, t) {
          let r = !1;
          if (0 !== this.#s) {
            let n = this.#u.get(e);
            if (void 0 !== n)
              if (r = !0, 1 === this.#s) this.#B(t);
              else {
                this.#N(n);
                let r = this.#d[n];
                if (this.#S(r) ? r.__abortController.abort(Error("deleted")) : (this.#E || this.#k) && (this.#E && this.#n?.(r, e, t), this.#k && this.#g?.push([r, e, t])), this.#u.delete(e), this.#c[n] = void 0, this.#d[n] = void 0, n === this.#m) this.#m = this.#f[n];
                else if (n === this.#p) this.#p = this.#h[n];
                else {
                  let e = this.#f[n];
                  this.#h[e] = this.#h[n];
                  let t = this.#h[n];
                  this.#f[t] = this.#f[n]
                }
                this.#s--, this.#v.push(n)
              }
          }
          if (this.#k && this.#g?.length) {
            let e, t = this.#g;
            for (; e = t?.shift();) this.#i?.(...e)
          }
          return r
        }
        clear() {
          return this.#B("delete")
        }
        #B(e) {
          for (let t of this.#O({
              allowStale: !0
            })) {
            let r = this.#d[t];
            if (this.#S(r)) r.__abortController.abort(Error("deleted"));
            else {
              let n = this.#c[t];
              this.#E && this.#n?.(r, n, e), this.#k && this.#g?.push([r, n, e])
            }
          }
          if (this.#u.clear(), this.#d.fill(void 0), this.#c.fill(void 0), this.#y && this.#w && (this.#y.fill(0), this.#w.fill(0)), this.#b && this.#b.fill(0), this.#p = 0, this.#m = 0, this.#v.length = 0, this.#l = 0, this.#s = 0, this.#k && this.#g) {
            let e, t = this.#g;
            for (; e = t?.shift();) this.#i?.(...e)
          }
        }
      }
      r(44925);
      var eI = new Set,
        eL = [],
        eD = [];
      m || (e => {
        if (!e) throw Error('No adapter provided when calling "setAdapter"');
        m = !0, p.push(e)
      })({
        appendCss: e => {
          eD.push(e)
        },
        registerClassName: e => {
          eI.add(e)
        },
        registerComposition: e => {
          eL.push(e)
        },
        markCompositionUsed: () => {},
        onEndFileScope: e => {
          (e => {
            var {
              fileScope: t,
              css: r
            } = e, n = t.packageName ? [t.packageName, t.filePath].join("/") : t.filePath, i = u[n];
            if (!i) {
              var o = document.createElement("style");
              t.packageName && o.setAttribute("data-package", t.packageName), o.setAttribute("data-file", t.filePath), o.setAttribute("type", "text/css"), i = u[n] = o, document.head.appendChild(o)
            }
            i.innerHTML = r
          })({
            fileScope: e,
            css: (function(e) {
              var {
                localClassNames: t,
                cssObjs: r,
                composedClassLists: n
              } = e, i = new eg(t, n);
              for (var o of r) i.processCssObj(o);
              return i.toCss()
            })({
              localClassNames: Array.from(eI),
              composedClassLists: eL,
              cssObjs: eD
            }).join("\n")
          }), eD = []
        },
        getIdentOption: () => "short"
      });

      function eP() {
        for (var e = "", t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        return r.reverse().forEach(t => {
          if ("" === e) e = String(t);
          else {
            if ("string" != typeof t || !/^var\(--.*\)$/.test(t)) throw Error("Invalid variable name: ".concat(t));
            e = t.replace(/\)$/, ", ".concat(e, ")"))
          }
        }), e
      }
      new eR({
        max: 500
      })
    },
    97160: (e, t, r) => {
      "use strict";
      r.d(t, {
        O: () => o
      });
      var n = r(39576),
        i = function() {
          return (i = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
          }).apply(this, arguments)
        },
        o = function() {
          function e() {
            this.fn = null, this.functions = []
          }
          return e.prototype.next = function(e) {
            var t;
            this.fn && (null == (t = this.fn) || t.call(this, e))
          }, e.prototype.xSubscribe = function(e) {
            this.fn = e
          }, e.prototype.xUnsubscribe = function() {
            this.fn = null
          }, e.prototype.subscribe = function(e) {
            this.functions.push(e)
          }, e.prototype.dispatch = function(e, t) {
            this.functions.forEach(function(t) {
              return t(e)
            }), t && (t({
              type: n.c.UPDATE_LOCAL_STORAGE,
              payload: i(i({}, JSON.parse(JSON.stringify(window.localStorage))), {
                passedCookiesData: "".concat(document.cookie)
              })
            }), t({
              type: n.c.AUTH_API_EVENT,
              payload: i({}, e)
            }))
          }, e
        }()
    },
    98572: () => {},
    99016: (e, t, r) => {
      "use strict";
      r.d(t, {
        tH: () => p
      });
      var n = r(16846),
        i = r(86470),
        o = r(24709),
        a = r(65126),
        s = r(30403),
        l = r(72672);

      function u(e = {}) {
        let t = l.jf.document,
          r = t?.head || t?.body;
        if (!r) {
          s.T && i.Yz.error("[showReportDialog] Global document not defined");
          return
        }
        let c = (0, n.o5)(),
          d = (0, n.KU)(),
          h = d?.getDsn();
        if (!h) {
          s.T && i.Yz.error("[showReportDialog] DSN not configured");
          return
        }
        let f = {
            ...e,
            user: {
              ...c.getUser(),
              ...e.user
            },
            eventId: e.eventId || (0, o.Q)()
          },
          p = l.jf.document.createElement("script");
        p.async = !0, p.crossOrigin = "anonymous", p.src = (0, a.k)(h, f);
        let {
          onLoad: m,
          onClose: v
        } = f;
        if (m && (p.onload = m), v) {
          let e = t => {
            if ("__sentry_reportdialog_closed__" === t.data) try {
              v()
            } finally {
              l.jf.removeEventListener("message", e)
            }
          };
          l.jf.addEventListener("message", e)
        }
        r.appendChild(p)
      }
      var c = r(12115);
      let d = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      var h = r(35428);
      let f = {
        componentStack: null,
        error: null,
        eventId: null
      };
      class p extends c.Component {
        constructor(e) {
          super(e), this.state = f, this._openFallbackReportDialog = !0;
          const t = (0, n.KU)();
          t && e.showDialog && (this._openFallbackReportDialog = !1, this._cleanupHook = t.on("afterSendEvent", t => {
            !t.type && this._lastEventId && t.event_id === this._lastEventId && u({
              ...e.dialogOptions,
              eventId: this._lastEventId
            })
          }))
        }
        componentDidCatch(e, t) {
          let {
            componentStack: r
          } = t, {
            beforeCapture: i,
            onError: a,
            showDialog: s,
            dialogOptions: l
          } = this.props;
          (0, n.v4)(d => {
            i && i(d, e, r);
            let f = function(e, {
              componentStack: t
            }, r) {
              let i;
              if (null !== (i = c.version.match(/^([^.]+)/)) && parseInt(i[0]) >= 17 && (0, h.bJ)(e) && t) {
                let r, n = Error(e.message);
                n.name = `React ErrorBoundary ${e.name}`, n.stack = t, r = new WeakSet,
                  function e(t, n) {
                    if (!r.has(t)) {
                      if (t.cause) return r.add(t), e(t.cause, n);
                      t.cause = n
                    }
                  }(e, n)
              }
              return (0, n.v4)(n => (n.setContext("react", {
                componentStack: t
              }), (0, o.Cp)(e, r)))
            }(e, t, {
              mechanism: {
                handled: null != this.props.handled ? this.props.handled : !!this.props.fallback,
                type: "auto.function.react.error_boundary"
              }
            });
            a && a(e, r, f), s && (this._lastEventId = f, this._openFallbackReportDialog && u({
              ...l,
              eventId: f
            })), this.setState({
              error: e,
              componentStack: r,
              eventId: f
            })
          })
        }
        componentDidMount() {
          let {
            onMount: e
          } = this.props;
          e && e()
        }
        componentWillUnmount() {
          let {
            error: e,
            componentStack: t,
            eventId: r
          } = this.state, {
            onUnmount: n
          } = this.props;
          n && (this.state === f ? n(null, null, null) : n(e, t, r)), this._cleanupHook && (this._cleanupHook(), this._cleanupHook = void 0)
        }
        resetErrorBoundary() {
          let {
            onReset: e
          } = this.props, {
            error: t,
            componentStack: r,
            eventId: n
          } = this.state;
          e && e(t, r, n), this.setState(f)
        }
        render() {
          let {
            fallback: e,
            children: t
          } = this.props, r = this.state;
          if (null === r.componentStack) return "function" == typeof t ? t() : t;
          let n = "function" == typeof e ? c.createElement(e, {
            error: r.error,
            componentStack: r.componentStack,
            resetError: () => this.resetErrorBoundary(),
            eventId: r.eventId
          }) : e;
          return c.isValidElement(n) ? n : (e && d && i.Yz.warn("fallback did not produce a valid ReactElement"), null)
        }
      }
    }
  }
]);