! function() {
  try {
    var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
      i = (new e.Error).stack;
    i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "b274421c-6db8-4354-b7da-27d1b191f501", e._sentryDebugIdIdentifier = "sentry-dbid-b274421c-6db8-4354-b7da-27d1b191f501")
  } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7767], {
    56818: (e, i, o) => {
      "use strict";
      o.d(i, {
        M9: () => g,
        UH: () => f,
        Ym: () => h,
        Yx: () => x,
        aj: () => k,
        jl: () => v,
        oz: () => m,
        uC: () => y
      });
      let r = "model",
        t = "name",
        a = "type",
        s = "vendor",
        n = "version",
        d = "mobile",
        b = "tablet",
        w = "crawler",
        l = "email",
        c = "fetcher",
        p = "inapp",
        u = "mediaplayer",
        h = Object.freeze({
          browser: [
            [/(wget|curl|lynx|elinks|httpie)[\/ ]\(?([\w\.-]+)/i],
            [t, n, [a, "cli"]]
          ]
        }),
        m = Object.freeze({
          browser: [
            [/((?:adidx|ahrefs|amazon|bing|brave|cc|contx|coveo|criteo|dot|duckduck(?:go-favicons-)?|exa|facebook|gpt|iask|kagi|kangaroo |linkedin|mj12|mojeek|oai-search|onespot-scraper|perplexity|sbintuitions|semrush|seznam|surdotly|swift|yep)bot)\/([\w\.-]+)/i, /(algolia crawler(?: renderscript)?)\/?([\w\.]*)/i, /(applebot(?:-extended)?)\/?([\w\.]*)/i, /(baiduspider[-imagevdonwsfcpr]{0,7})\/?([\w\.]*)/i, /(claude(?:bot|-searchbot|-web)|anthropic-ai)\/?([\w\.]*)/i, /(coccocbot-(?:image|web))\/([\w\.]+)/i, /(daum(?:oa)?(?:-image)?)[ \/]([\w\.]+)/i, /(facebook(?:externalhit|catalog)|meta-externalagent)\/([\w\.]+)/i, /(google(?:bot|other|-inspectiontool)(?:-image|-video|-news)?|storebot-google)\/?([\w\.]*)/i, /(ia_archiver|archive\.org_bot)\/?([\w\.]*)/i, /(oncrawl) mobile\/([\w\.]+)/i, /(qwantbot(?:-news)?)[-\w]*\/?([\w\.]*)/i, /((?:semrush|splitsignal)bot[-abcfimostw]*)\/?([\w\.-]*)/i, /(sogou (?:pic|head|web|orion|news) spider)\/([\w\.]+)/i, /(y!?j-(?:asr|br[uw]|dscv|mmp|vsidx|wsc))\/([\w\.]+)/i, /(yandex(?:(?:mobile)?(?:accessibility|additional|com|renderresources|screenshot|sprav)?bot(?!.+mirror)|image(?:s|resizer)|adnet|blogs|favicons|market|media|metrika|news|ontodb(?:api)?|partner|rca|tracker|turbo|verti(?:cal)?s|webmaster|video(?:parser)?))\/([\w\.]+)/i, /(yeti)\/([\w\.]+)/i, /((?:aihit|blex|diff|huggingface-|msn|pangu|replicate-|runpod-|timpi|together-|xai-|you|zum)bot|(?:magpie-|velenpublicweb)crawler|(?:chatglm-|line|screaming frog seo |yisou)spider|cotoyogi|firecrawlagent|freespoke|omgili(?:bot)?|openai image downloader|startpageprivateimageproxy|twinagent|webzio-extended)\/?([\w\.]*)/i],
            [t, n, [a, w]],
            [/(yandexbot\/([\w\.]+); mirrordetector)/i],
            [
              [t, /\/.+;/ig, ""], n, [a, w]
            ],
            [/((?:adsbot|apis|mediapartners)-google(?:-mobile)?|google-?(?:other|cloudvertexbot|extended|safety))/i, /\b((ai2|aspiegel|dataforseo|deepseek|imagesift|petal|seekport|turnitin|v0)bot|360spider-?(image|video)?|baidu-ads|botify|(byte|tiktok)spider|cohere-training-data-crawler|elastic(?=\/s)|marginalia|siteimprove(?=bot|\.com)|teoma|webzio|yahoo! slurp)/i],
            [t, [a, w]]
          ]
        }),
        g = Object.freeze({
          device: [
            [/(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [s, r, [a, b]],
            [/(u304aa)/i],
            [r, [s, "AT&T"],
              [a, d]
            ],
            [/\bsie-(\w*)/i],
            [r, [s, "Siemens"],
              [a, d]
            ],
            [/\b(rct\w+) b/i],
            [r, [s, "RCA"],
              [a, b]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [r, [s, "Dell"],
              [a, b]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [r, [s, "Verizon"],
              [a, b]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [r, [s, "Barnes & Noble"],
              [a, b]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [r, [s, "NuVision"],
              [a, b]
            ],
            [/\b(k88) b/i],
            [r, [s, "ZTE"],
              [a, b]
            ],
            [/\b(nx\d{3}j) b/i],
            [r, [s, "ZTE"],
              [a, d]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [r, [s, "Swiss"],
              [a, d]
            ],
            [/\b(zur\d{3}) b/i],
            [r, [s, "Swiss"],
              [a, b]
            ],
            [/^((zeki)?tb.*\b) b/i],
            [r, [s, "Zeki"],
              [a, b]
            ],
            [/\b([yr]\d{2}) b/i, /\b(?:dragon[- ]+touch |dt)(\w{5}) b/i],
            [r, [s, "Dragon Touch"],
              [a, b]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [r, [s, "Insignia"],
              [a, b]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [r, [s, "NextBook"],
              [a, b]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [s, "Voice"], r, [a, d]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [s, "LvTel"], r, [a, d]
            ],
            [/\b(ph-1) /i],
            [r, [s, "Essential"],
              [a, d]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [r, [s, "Envizen"],
              [a, b]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [r, [s, "MachSpeed"],
              [a, b]
            ],
            [/\btu_(1491) b/i],
            [r, [s, "Rotor"],
              [a, b]
            ]
          ]
        }),
        f = Object.freeze({
          browser: [
            [/((?:air|blue|daum|fox|poly|proton)mail|emclient|evolution|kmail2?|kontact|(?:microsoft |mac)?outlook(?:-express)?|navermailapp|(?!chrom.+)sparrow|sparkdesktop|thunderbird|yahoo|zohomail-desktop)(?:m.+ail; |[\/ ])([\w\.]+)/i, /(mail)\/([\w\.]+) cf/i],
            [t, n, [a, l]],
            [/zdesktop\/([\w\.]+)/i],
            [n, [t, "Zimbra"],
              [a, l]
            ]
          ]
        }),
        v = Object.freeze({
          browser: [
            [/(asana|ahrefssiteaudit|(?:bing|microsoft)preview|blueno|(?:chatgpt|claude|mistralai|perplexity)-user|cohere-ai|hubspot page fetcher|mastodon|(?:bitly|bufferlinkpreview|discord|duckassist|linkedin|pinterest|reddit|roger|siteaudit|twitter|uptimero|zoom)bot|google-site-verification|iframely|kakaotalk-scrap|meta-externalfetcher|y!?j-dlc|yandex(?:calendar|direct(?:dyn)?|fordomain|pagechecker|searchshop)|yadirectfetcher)\/([\w\.]+)/i, /(bluesky) cardyb\/([\w\.]+)/i, /(skypeuripreview) preview\/([\w\.]+)/i, /(slack(?:bot)?(?:-imgproxy|-linkexpanding)?) ([\w\.]+)/i, /(whatsapp)\/([\w\.]+)/i],
            [t, n, [a, c]],
            [/((?:better uptime |keybase|telegram|vercel)bot|chrome-lighthouse|feedfetcher-google|gemini-deep-research|google(?:imageproxy|-read-aloud|-pagerenderer|producer)|snap url preview|vercel(flags|tracing|-(favicon|screenshot)-bot)|yandex(?:sitelinks|userproxy))/i],
            [t, [a, c]]
          ],
          os: [
            [/whatsapp\/[\d\.]+ (a|i)/i],
            [
              [t, e => "A" == e ? "Android" : "iOS"]
            ]
          ]
        }),
        k = Object.freeze({
          browser: [
            [/\b(discord|figma|mattermost|notion|postman|rambox|rocket.chat|slack|teams)\/([\w\.]+).+(electron\/|; ios)/i, /(flipboard)\/([\w\.]+)/i],
            [t, n, [a, p]],
            [/(evernote) win/i, /(teams)mobile-(ios|and)/i],
            [t, [a, p]],
            [/chatlyio\/([\d\.]+)/i],
            [n, [t, "Slack"],
              [a, p]
            ],
            [/ultralite app_version\/([\w\.]+)/i],
            [n, [t, "TikTok Lite"],
              [a, p]
            ],
            [/\) code\/([\d\.]+).+electron\//i],
            [n, [t, "VS Code"],
              [a, p]
            ],
            [/jp\.co\.yahoo\.(?:android\.yjtop|ipn\.appli)\/([\d\.]+)/i],
            [n, [t, "Yahoo! Japan"],
              [a, p]
            ]
          ]
        });
      Object.freeze({
        browser: [
          [/(apple(?:coremedia|tv))\/([\w\._]+)/i, /(coremedia) v([\w\._]+)/i, /(ares|clementine|music player daemon|nexplayer|ossproxy) ([\w\.-]+)/i, /^(aqualung|audacious|audimusicstream|amarok|bass|bsplayer|core|gnomemplayer|gvfs|irapp|lyssna|music on console|nero (?:home|scout)|nokia\d+|nsplayer|psp-internetradioplayer|quicktime|rma|radioapp|radioclientapplication|soundtap|stagefright|streamium|totem|videos|xbmc|xine|xmms)\/([\w\.-]+)/i, /(lg player|nexplayer) ([\d\.]+)/i, /player\/(nexplayer|lg player) ([\w\.-]+)/i, /(gstreamer) souphttpsrc.+libsoup\/([\w\.-]+)/i, /(htc streaming player) [\w_]+ \/ ([\d\.]+)/i, /(lavf)([\d\.]+)/i, /(mplayer)(?: |\/)(?:(?:sherpya-){0,1}svn)(?:-| )(r\d+(?:-\d+[\w\.-]+))/i, / (songbird)\/([\w\.-]+)/i, /(winamp)(?:3 version|mpeg| ) ([\w\.-]+)/i, /(vlc)(?:\/| media player - version )([\w\.-]+)/i, /^(foobar2000|itunes|smp)\/([\d\.]+)/i, /com\.(riseupradioalarm)\/([\d\.]*)/i, /(mplayer)(?:\s|\/| unknown-)([\w\.\-]+)/i, /(windows)\/([\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ home media server/i],
          [t, n, [a, u]],
          [/(flrp)\/([\w\.-]+)/i],
          [
            [t, "Flip Player"], n, [a, u]
          ],
          [/(fstream|media player classic|inlight radio|mplayer|nativehost|nero showtime|ocms-bot|queryseekspider|tapinradio|tunein radio|winamp|yourmuze)/i],
          [t, [a, u]],
          [/(htc_one_s|windows-media-player|wmplayer)\/([\w\.-]+)/i],
          [
            [t, /[_-]/g, " "], n, [a, u]
          ],
          [/(rad.io|radio.(?:de|at|fr)) ([\d\.]+)/i],
          [
            [t, "rad.io"], n, [a, u]
          ]
        ]
      });
      let y = Object.freeze({
          browser: [
            [/^(apache-httpclient|axios|(?:go|java)-http-client|got|guzzlehttp|java|libwww-perl|lua-resty-http|needle|node-(?:fetch|superagent)|okhttp|php-soap|postmanruntime|python-(?:httpx|urllib[23]?|requests)|scrapy)\/([\w\.]+)/i, /(adobeair|aiohttp|jsdom)\/([\w\.]+)/i, /(nutch)-([\w\.-]+)(\(|$)/i, /\((java)\/([\w\.]+)/i],
            [t, n, [a, "library"]]
          ]
        }),
        x = Object.freeze({
          device: [
            [/aftlbt962e2/i],
            [
              [s, "BMW"]
            ],
            [/dilink.+(byd) auto/i],
            [s],
            [/aftlft962x3/i],
            [
              [s, "Jeep"],
              [r, "Wagooner"]
            ],
            [/(rivian) (r1t)/i],
            [s, r],
            [/vcc.+netfront/i],
            [
              [s, "Volvo"]
            ]
          ]
        });
      Object.freeze({
        browser: [...h.browser, ...v.browser, ...m.browser, ...y.browser],
        os: [...v.os]
      })
    },
    59437: () => {},
    79481: (e, i, o) => {
      "use strict";
      Object.defineProperty(i, "__esModule", {
        value: !0
      });
      var r = {
        callServer: function() {
          return a.callServer
        },
        createServerReference: function() {
          return n.createServerReference
        },
        findSourceMapURL: function() {
          return s.findSourceMapURL
        }
      };
      for (var t in r) Object.defineProperty(i, t, {
        enumerable: !0,
        get: r[t]
      });
      let a = o(38034),
        s = o(95006),
        n = o(77197)
    },
    89368: (e, i, o) => {
      "use strict";
      o.d(i, {
        O: () => eN
      });
      var r, t = "user-agent",
        a = "function",
        s = "object",
        n = "string",
        d = "undefined",
        b = "browser",
        w = "device",
        l = "engine",
        c = "result",
        p = "name",
        u = "type",
        h = "vendor",
        m = "version",
        g = "architecture",
        f = "major",
        v = "model",
        k = "console",
        y = "mobile",
        x = "tablet",
        _ = "smarttv",
        z = "wearable",
        S = "embedded",
        C = "inapp",
        j = "brands",
        O = "formFactors",
        q = "fullVersionList",
        T = "platform",
        I = "platformVersion",
        E = "bitness",
        M = "sec-ch-ua",
        V = M + "-full-version-list",
        A = M + "-arch",
        H = M + "-" + E,
        P = M + "-form-factors",
        B = M + "-" + y,
        R = M + "-" + v,
        U = M + "-" + T,
        L = U + "-version",
        N = [j, q, y, v, T, I, g, O, E],
        D = "Amazon",
        $ = "Apple",
        W = "ASUS",
        G = "BlackBerry",
        F = "Google",
        X = "Huawei",
        Y = "Lenovo",
        Z = "Honor",
        J = "Microsoft",
        K = "Motorola",
        Q = "Nvidia",
        ee = "OnePlus",
        ei = "OPPO",
        eo = "Samsung",
        er = "Sharp",
        et = "Sony",
        ea = "Xiaomi",
        es = "Zebra",
        en = "Chrome",
        ed = "Chromium",
        eb = "Chromecast",
        ew = "Edge",
        el = "Firefox",
        ec = "Opera",
        ep = "Facebook",
        eu = "Sogou",
        eh = "Mobile ",
        em = " Browser",
        eg = "Windows",
        ef = typeof window !== d && window.navigator ? window.navigator : void 0,
        ev = ef && ef.userAgentData ? ef.userAgentData : void 0,
        ek = function(e, i) {
          var o = {},
            r = i;
          if (!e_(i))
            for (var t in r = {}, i)
              for (var a in i[t]) r[a] = i[t][a].concat(r[a] ? r[a] : []);
          for (var s in e) o[s] = r[s] && r[s].length % 2 == 0 ? r[s].concat(e[s]) : e[s];
          return o
        },
        ey = function(e) {
          for (var i = {}, o = 0; o < e.length; o++) i[e[o].toUpperCase()] = e[o];
          return i
        },
        ex = function(e, i) {
          if (typeof e === s && e.length > 0) {
            for (var o in e)
              if (eC(i) == eC(e[o])) return !0;
            return !1
          }
          return !!ez(e) && eC(i) == eC(e)
        },
        e_ = function(e, i) {
          for (var o in e) return /^(browser|cpu|device|engine|os)$/.test(o) || !!i && e_(e[o])
        },
        ez = function(e) {
          return typeof e === n
        },
        eS = function(e) {
          if (e) {
            for (var i = [], o = eq(/\\?\"/g, e).split(","), r = 0; r < o.length; r++)
              if (o[r].indexOf(";") > -1) {
                var t = eI(o[r]).split(";v=");
                i[r] = {
                  brand: t[0],
                  version: t[1]
                }
              } else i[r] = eI(o[r]);
            return i
          }
        },
        eC = function(e) {
          return ez(e) ? e.toLowerCase() : e
        },
        ej = function(e) {
          return ez(e) ? eq(/[^\d\.]/g, e).split(".")[0] : void 0
        },
        eO = function(e) {
          for (var i in e)
            if (e.hasOwnProperty(i)) {
              var o = e[i];
              typeof o == s && 2 == o.length ? this[o[0]] = o[1] : this[o] = void 0
            } return this
        },
        eq = function(e, i) {
          return ez(i) ? i.replace(e, "") : i
        },
        eT = function(e) {
          return eq(/\\?\"/g, e)
        },
        eI = function(e, i) {
          return e = eq(/^\s\s*/, String(e)), typeof i === d ? e : e.substring(0, i)
        },
        eE = function(e, i) {
          if (e && i)
            for (var o, r, t, n, d, b, w = 0; w < i.length && !d;) {
              var l = i[w],
                c = i[w + 1];
              for (o = r = 0; o < l.length && !d && l[o];)
                if (d = l[o++].exec(e))
                  for (t = 0; t < c.length; t++) b = d[++r], typeof(n = c[t]) === s && n.length > 0 ? 2 === n.length ? typeof n[1] == a ? this[n[0]] = n[1].call(this, b) : this[n[0]] = n[1] : n.length >= 3 && (typeof n[1] !== a || n[1].exec && n[1].test ? 3 == n.length ? this[n[0]] = b ? b.replace(n[1], n[2]) : void 0 : 4 == n.length ? this[n[0]] = b ? n[3].call(this, b.replace(n[1], n[2])) : void 0 : n.length > 4 && (this[n[0]] = b ? n[3].apply(this, [b.replace(n[1], n[2])].concat(n.slice(4))) : void 0) : n.length > 3 ? this[n[0]] = b ? n[1].apply(this, n.slice(2)) : void 0 : this[n[0]] = b ? n[1].call(this, b, n[2]) : void 0) : this[n] = b || void 0;
              w += 2
            }
        },
        eM = function(e, i) {
          for (var o in i)
            if (typeof i[o] === s && i[o].length > 0) {
              for (var r = 0; r < i[o].length; r++)
                if (ex(i[o][r], e)) return "?" === o ? void 0 : o
            } else if (ex(i[o], e)) return "?" === o ? void 0 : o;
          return i.hasOwnProperty("*") ? i["*"] : e
        },
        eV = {
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
        eA = {
          embedded: "Automotive",
          mobile: "Mobile",
          tablet: ["Tablet", "EInk"],
          smarttv: "TV",
          wearable: "Watch",
          xr: ["VR", "XR"],
          "?": ["Desktop", "Unknown"],
          "*": void 0
        },
        eH = {
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
        eP = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [m, [p, eh + "Chrome"]],
            [/webview.+edge\/([\w\.]+)/i],
            [m, [p, ew + " WebView"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [m, [p, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [p, m],
            [/opios[\/ ]+([\w\.]+)/i],
            [m, [p, ec + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [m, [p, ec + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [m, [p, ec]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [m, [p, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [m, [p, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser|palemoon)\/([-\w\.]+)/i, /(heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i, /(qwant)(?:ios|mobile)\/([\d\.]+)/i, /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i],
            [p, m],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [m, [p, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [m, [p, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [m, [p, "UCBrowser"]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [m, [p, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [m, [p, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [m, [p, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [m, [p, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [m, [p, "Smart " + Y + em]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [p, /(.+)/, "$1 Secure" + em], m
            ],
            [/\bfocus\/([\w\.]+)/i],
            [m, [p, el + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [m, [p, ec + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [m, [p, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [m, [p, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [m, [p, ec + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [m, [p, "MIUI" + em]],
            [/fxios\/([\w\.-]+)/i],
            [m, [p, eh + el]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [m, [p, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [p, /(.+)/, "$1Browser"], m
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [p, /(.+)/, "$1" + em], m
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [m, [p, eo + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [m, [p, eu + " Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [p, eu + " Mobile"], m
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [p, m],
            [/(lbbrowser|rekonq)/i],
            [p],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [m, p],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [p, ep], m, [u, C]
            ],
            [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(bing)(?:web|sapphire)\/([\w\.]+)/i, /(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i],
            [p, m, [u, C]],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [m, [p, "GSA"],
              [u, C]
            ],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [m, [p, "TikTok"],
              [u, C]
            ],
            [/\[(linkedin)app\]/i],
            [p, [u, C]],
            [/(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i],
            [
              [p, /(.+)/, "Zalo"], m, [u, C]
            ],
            [/(chromium)[\/ ]([-\w\.]+)/i],
            [p, m],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [m, [p, en + " Headless"]],
            [/wv\).+chrome\/([\w\.]+).+edgw\//i],
            [m, [p, ew + " WebView2"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [p, en + " WebView"], m
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [m, [p, "Android" + em]],
            [/chrome\/([\w\.]+) mobile/i],
            [m, [p, eh + "Chrome"]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [p, m],
            [/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],
            [m, [p, eh + "Safari"]],
            [/iphone .*mobile(?:\/\w+ | ?)safari/i],
            [
              [p, eh + "Safari"]
            ],
            [/version\/([\w\.\,]+) .*(safari)/i],
            [m, p],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [p, [m, "1"]],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [p, m],
            [/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],
            [
              [p, eh + el], m
            ],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [p, "Netscape"], m
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [p, m],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [m, [p, el + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+(?= .+rv\:.+gecko\/\d+)|[0-4][\w\.]+(?!.+compatible))/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [p, [m, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [p, [m, /[^\d\.]+./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [g, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [g, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [g, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [g, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [g, "arm"]
            ],
            [/ sun4\w[;\)]/i],
            [
              [g, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i, /((ppc|powerpc)(64)?)( mac|;|\))/i, /(?:osf1|[freopnt]{3,4}bsd) (alpha)/i],
            [
              [g, /ower/, "", eC]
            ],
            [/mc680.0/i],
            [
              [g, "68k"]
            ],
            [/winnt.+\[axp/i],
            [
              [g, "alpha"]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [v, [h, eo],
              [u, x]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i, /sec-(sgh\w+)/i],
            [v, [h, eo],
              [u, y]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i],
            [v, [h, $],
              [u, y]
            ],
            [/\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i, /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i],
            [v, [h, $],
              [u, x]
            ],
            [/(macintosh);/i],
            [v, [h, $]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [v, [h, er],
              [u, y]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [v, [h, Z],
              [u, x]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [v, [h, Z],
              [u, y]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [v, [h, X],
              [u, x]
            ],
            [/(?:huawei) ?([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i],
            [v, [h, X],
              [u, y]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [v, /_/g, " "],
              [h, ea],
              [u, x]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [v, /_/g, " "],
              [h, ea],
              [u, y]
            ],
            [/droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-k]\w[1m]10)\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [v, [h, ee],
              [u, y]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [v, [h, ei],
              [u, y]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [v, [h, eM, {
                OnePlus: ["203", "304", "403", "404", "413", "415"],
                "*": ei
              }],
              [u, x]
            ],
            [/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],
            [v, [h, "BLU"],
              [u, y]
            ],
            [/; vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [v, [h, "Vivo"],
              [u, y]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [v, [h, "Realme"],
              [u, y]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [v, [h, Y],
              [u, x]
            ],
            [/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],
            [v, [h, Y],
              [u, y]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i, /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i],
            [v, [h, K],
              [u, y]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [v, [h, K],
              [u, x]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [v, [h, "LG"],
              [u, x]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i, /\blg-?([\d\w]+) bui/i],
            [v, [h, "LG"],
              [u, y]
            ],
            [/(nokia) (t[12][01])/i],
            [h, v, [u, x]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i],
            [
              [v, /_/g, " "],
              [u, y],
              [h, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [v, [h, F],
              [u, x]
            ],
            [/droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i],
            [v, [h, F],
              [u, y]
            ],
            [/(google) (pixelbook( go)?)/i],
            [h, v],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [v, [h, et],
              [u, y]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [v, "Xperia Tablet"],
              [h, et],
              [u, x]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [v, [h, D],
              [u, x]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [v, /(.+)/g, "Fire Phone $1"],
              [h, D],
              [u, y]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [v, h, [u, x]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /(?:blackberry|\(bb10;) (\w+)/i],
            [v, [h, G],
              [u, y]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [v, [h, W],
              [u, x]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [v, [h, W],
              [u, y]
            ],
            [/(nexus 9)/i],
            [v, [h, "HTC"],
              [u, x]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [h, [v, /_/g, " "],
              [u, y]
            ],
            [/tcl (xess p17aa)/i, /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],
            [v, [h, "TCL"],
              [u, x]
            ],
            [/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],
            [v, [h, "TCL"],
              [u, y]
            ],
            [/(itel) ((\w+))/i],
            [
              [h, eC], v, [u, eM, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [v, [h, "Acer"],
              [u, x]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [v, [h, "Meizu"],
              [u, y]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [v, [h, "Ulefone"],
              [u, y]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [v, [h, "Energizer"],
              [u, y]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [v, [h, "Cat"],
              [u, y]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [v, [h, "Smartfren"],
              [u, y]
            ],
            [/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],
            [v, [h, "Nothing"],
              [u, y]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [v, [h, "Archos"],
              [u, x]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [v, [h, "Archos"],
              [u, y]
            ],
            [/; (n159v)/i],
            [v, [h, "HMD"],
              [u, y]
            ],
            [/(imo) (tab \w+)/i, /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i],
            [h, v, [u, x]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (blu|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(oppo) ?([\w ]+) bui/i, /(hisense) ([ehv][\w ]+)\)/i, /droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i],
            [h, v, [u, y]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i],
            [h, v, [u, x]],
            [/(surface duo)/i],
            [v, [h, J],
              [u, x]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [v, [h, "Fairphone"],
              [u, y]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [v, [h, Q],
              [u, x]
            ],
            [/(sprint) (\w+)/i],
            [h, v, [u, y]],
            [/(kin\.[onetw]{3})/i],
            [
              [v, /\./g, " "],
              [h, J],
              [u, y]
            ],
            [/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [v, [h, es],
              [u, x]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [v, [h, es],
              [u, y]
            ],
            [/(philips)[\w ]+tv/i, /smart-tv.+(samsung)/i],
            [h, [u, _]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [v, /^/, "SmartTV"],
              [h, eo],
              [u, _]
            ],
            [/(vizio)(?: |.+model\/)(\w+-\w+)/i, /tcast.+(lg)e?. ([-\w]+)/i],
            [h, v, [u, _]],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [h, "LG"],
              [u, _]
            ],
            [/(apple) ?tv/i],
            [h, [v, $ + " TV"],
              [u, _]
            ],
            [/crkey.*devicetype\/chromecast/i],
            [
              [v, eb + " Third Generation"],
              [h, F],
              [u, _]
            ],
            [/crkey.*devicetype\/([^/]*)/i],
            [
              [v, /^/, "Chromecast "],
              [h, F],
              [u, _]
            ],
            [/fuchsia.*crkey/i],
            [
              [v, eb + " Nest Hub"],
              [h, F],
              [u, _]
            ],
            [/crkey/i],
            [
              [v, eb],
              [h, F],
              [u, _]
            ],
            [/(portaltv)/i],
            [v, [h, ep],
              [u, _]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [v, [h, D],
              [u, _]
            ],
            [/(shield \w+ tv)/i],
            [v, [h, Q],
              [u, _]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [v, [h, er],
              [u, _]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [v, [h, et],
              [u, _]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [v, [h, ea],
              [u, _]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [h, v, [u, _]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [h, /.+\/(\w+)/, "$1", eM, {
                LG: "lge"
              }],
              [v, eI],
              [u, _]
            ],
            [/(playstation \w+)/i],
            [v, [h, et],
              [u, k]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [v, [h, J],
              [u, k]
            ],
            [/(ouya)/i, /(nintendo) (\w+)/i, /(retroid) (pocket ([^\)]+))/i],
            [h, v, [u, k]],
            [/droid.+; (shield)( bui|\))/i],
            [v, [h, Q],
              [u, k]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [v, [h, eo],
              [u, z]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [h, v, [u, z]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [v, [h, ei],
              [u, z]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [v, [h, $],
              [u, z]
            ],
            [/(opwwe\d{3})/i],
            [v, [h, ee],
              [u, z]
            ],
            [/(moto 360)/i],
            [v, [h, K],
              [u, z]
            ],
            [/(smartwatch 3)/i],
            [v, [h, et],
              [u, z]
            ],
            [/(g watch r)/i],
            [v, [h, "LG"],
              [u, z]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [v, [h, es],
              [u, z]
            ],
            [/droid.+; (glass) \d/i],
            [v, [h, F],
              [u, "xr"]
            ],
            [/(pico) ([\w ]+) os\d/i],
            [h, v, [u, "xr"]],
            [/(quest( \d| pro)?s?).+vr/i],
            [v, [h, ep],
              [u, "xr"]
            ],
            [/mobile vr; rv.+firefox/i],
            [
              [u, "xr"]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [h, [u, S]],
            [/(aeobc)\b/i],
            [v, [h, D],
              [u, S]
            ],
            [/(homepod).+mac os/i],
            [v, [h, $],
              [u, S]
            ],
            [/windows iot/i],
            [
              [u, S]
            ],
            [/droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i],
            [v, [u, _]],
            [/\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i],
            [
              [u, _]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i],
            [v, [u, eM, {
              mobile: "Mobile",
              xr: "VR",
              "*": x
            }]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [u, x]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [u, y]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [v, [h, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [m, [p, ew + "HTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [p, m],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [m, [p, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [p, m],
            [/ladybird\//i],
            [
              [p, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [m, p]
          ],
          os: [
            [/(windows nt) (6\.[23]); arm/i],
            [
              [p, /N/, "R"],
              [m, eM, eV]
            ],
            [/(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i, /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i],
            [p, m],
            [/windows nt ?([\d\.\)]*)(?!.+xbox)/i, /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i],
            [
              [m, /(;|\))/g, "", eM, eV],
              [p, eg]
            ],
            [/(windows ce)\/?([\d\.]*)/i],
            [p, m],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv|ios(?=.+ip(?:ad|hone))|ip(?:ad|hone)(?: |.+i(?:pad)?)os)[\/ ]([\w\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [m, /_/g, "."],
              [p, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i],
            [
              [p, "macOS"],
              [m, /_/g, "."]
            ],
            [/android ([\d\.]+).*crkey/i],
            [m, [p, eb + " Android"]],
            [/fuchsia.*crkey\/([\d\.]+)/i],
            [m, [p, eb + " Fuchsia"]],
            [/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],
            [m, [p, eb + " SmartSpeaker"]],
            [/linux.*crkey\/([\d\.]+)/i],
            [m, [p, eb + " Linux"]],
            [/crkey\/([\d\.]+)/i],
            [m, [p, eb]],
            [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
            [m, p],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [p, /(.+)/, "$1 Touch"], m
            ],
            [/(harmonyos)[\/ ]?([\d\.]*)/i, /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i],
            [p, m],
            [/\(bb(10);/i],
            [m, [p, G]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [m, [p, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [m, [p, el + " OS"]],
            [/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i, /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i],
            [m, [p, "webOS"]],
            [/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],
            [
              [m, eM, {
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
              [p, "webOS"]
            ],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [m, [p, "watchOS"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [p, "Chrome OS"], m
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) (\w+)/i, /(xbox); +xbox ([^\);]+)/i, /(pico) .+os([\w\.]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /linux.+(mint)[\/\(\) ]?([\w\.]*)/i, /(mageia|vectorlinux|fuchsia|arcaos|arch(?= ?linux))[;l ]([\d\.]*)/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire|knoppix)(?: gnu[\/ ]linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /\b(aix)[; ]([1-9\.]{0,4})/i, /(hurd|linux|morphos)(?: (?:arm|x86|ppc)\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) ?(r\d)?/i],
            [p, m],
            [/(sunos) ?([\d\.]*)/i],
            [
              [p, "Solaris"], m
            ],
            [/\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [p, m]
          ]
        },
        eB = (r = {
          init: {},
          isIgnore: {},
          isIgnoreRgx: {},
          toString: {}
        }, eO.call(r.init, [
          [b, [p, m, f, u]],
          ["cpu", [g]],
          [w, [u, v, h]],
          [l, [p, m]],
          ["os", [p, m]]
        ]), eO.call(r.isIgnore, [
          [b, [m, f]],
          [l, [m]],
          ["os", [m]]
        ]), eO.call(r.isIgnoreRgx, [
          [b, / ?browser$/i],
          ["os", / ?os$/i]
        ]), eO.call(r.toString, [
          [b, [p, m]],
          ["cpu", [g]],
          [w, [h, v]],
          [l, [p, m]],
          ["os", [p, m]]
        ]), r),
        eR = function(e, i) {
          var o = eB.init[i],
            r = eB.isIgnore[i] || 0,
            t = eB.isIgnoreRgx[i] || 0,
            a = eB.toString[i] || 0;

          function s() {
            eO.call(this, o)
          }
          return s.prototype.getItem = function() {
            return e
          }, s.prototype.withClientHints = function() {
            return ev ? ev.getHighEntropyValues(N).then(function(i) {
              return e.setCH(new eU(i, !1)).parseCH().get()
            }) : e.parseCH().get()
          }, s.prototype.withFeatureCheck = function() {
            return e.detectFeature().get()
          }, i != c && (s.prototype.is = function(e) {
            var i = !1;
            for (var o in this)
              if (this.hasOwnProperty(o) && !ex(r, o) && eC(t ? eq(t, this[o]) : this[o]) == eC(t ? eq(t, e) : e)) {
                if (i = !0, e != d) break
              } else if (e == d && i) {
              i = !i;
              break
            }
            return i
          }, s.prototype.toString = function() {
            var e = "";
            for (var i in a) typeof this[a[i]] !== d && (e += (e ? " " : "") + this[a[i]]);
            return e || d
          }), ev || (s.prototype.then = function(e) {
            var i = this,
              o = function() {
                for (var e in i) i.hasOwnProperty(e) && (this[e] = i[e])
              };
            o.prototype = {
              is: s.prototype.is,
              toString: s.prototype.toString
            };
            var r = new o;
            return e(r), r
          }), new s
        };

      function eU(e, i) {
        if (e = e || {}, eO.call(this, N), i) eO.call(this, [
          [j, eS(e[M])],
          [q, eS(e[V])],
          [y, /\?1/.test(e[B])],
          [v, eT(e[R])],
          [T, eT(e[U])],
          [I, eT(e[L])],
          [g, eT(e[A])],
          [O, eS(e[P])],
          [E, eT(e[H])]
        ]);
        else
          for (var o in e) this.hasOwnProperty(o) && typeof e[o] !== d && (this[o] = e[o])
      }

      function eL(e, i, o, r) {
        return this.get = function(e) {
          return e ? this.data.hasOwnProperty(e) ? this.data[e] : void 0 : this.data
        }, this.set = function(e, i) {
          return this.data[e] = i, this
        }, this.setCH = function(e) {
          return this.uaCH = e, this
        }, this.detectFeature = function() {
          if (ef && ef.userAgent == this.ua) switch (this.itemType) {
            case b:
              ef.brave && typeof ef.brave.isBrave == a && this.set(p, "Brave");
              break;
            case w:
              !this.get(u) && ev && ev[y] && this.set(u, y), "Macintosh" == this.get(v) && ef && typeof ef.standalone !== d && ef.maxTouchPoints && ef.maxTouchPoints > 2 && this.set(v, "iPad").set(u, x);
              break;
            case "os":
              !this.get(p) && ev && ev[T] && this.set(p, ev[T]);
              break;
            case c:
              var e = this.data,
                i = function(i) {
                  return e[i].getItem().detectFeature().get()
                };
              this.set(b, i(b)).set("cpu", i("cpu")).set(w, i(w)).set(l, i(l)).set("os", i("os"))
          }
          return this
        }, this.parseUA = function() {
          switch (this.itemType != c && eE.call(this.data, this.ua, this.rgxMap), this.itemType) {
            case b:
              this.set(f, ej(this.get(m)));
              break;
            case "os":
              if ("iOS" == this.get(p) && "18.6" == this.get(m)) {
                var e = /\) Version\/([\d\.]+)/.exec(this.ua);
                e && parseInt(e[1].substring(0, 2), 10) >= 26 && this.set(m, e[1])
              }
          }
          return this
        }, this.parseCH = function() {
          var e = this.uaCH,
            i = this.rgxMap;
          switch (this.itemType) {
            case b:
            case l:
              var o, r = e[q] || e[j];
              if (r)
                for (var t = 0; t < r.length; t++) {
                  var a = r[t].brand || r[t],
                    s = r[t].version;
                  this.itemType == b && !/not.a.brand/i.test(a) && (!o || /Chrom/.test(o) && a != ed || o == ew && /WebView2/.test(a)) && (a = eM(a, eH), (o = this.get(p)) && !/Chrom/.test(o) && /Chrom/.test(a) || this.set(p, a).set(m, s).set(f, ej(s)), o = a), this.itemType == l && a == ed && this.set(m, s)
                }
              break;
            case "cpu":
              var n = e[g];
              n && (n && "64" == e[E] && (n += "64"), eE.call(this.data, n + ";", i));
              break;
            case w:
              if (e[y] && this.set(u, y), e[v] && (this.set(v, e[v]), !this.get(u) || !this.get(h))) {
                var d, k = {};
                eE.call(k, "droid 9; " + e[v] + ")", i), !this.get(u) && k.type && this.set(u, k.type), !this.get(h) && k.vendor && this.set(h, k.vendor)
              }
              if (e[O]) {
                if ("string" != typeof e[O])
                  for (var x = 0; !d && x < e[O].length;) d = eM(e[O][x++], eA);
                else d = eM(e[O], eA);
                this.set(u, d)
              }
              break;
            case "os":
              var _ = e[T];
              if (_) {
                var z = e[I];
                _ == eg && (z = parseInt(ej(z), 10) >= 13 ? "11" : "10"), this.set(p, _).set(m, z)
              }
              this.get(p) == eg && "Xbox" == e[v] && this.set(p, "Xbox").set(m, void 0);
              break;
            case c:
              var S = this.data,
                C = function(i) {
                  return S[i].getItem().setCH(e).parseCH().get()
                };
              this.set(b, C(b)).set("cpu", C("cpu")).set(w, C(w)).set(l, C(l)).set("os", C("os"))
          }
          return this
        }, eO.call(this, [
          ["itemType", e],
          ["ua", i],
          ["uaCH", r],
          ["rgxMap", o],
          ["data", eR(this, e)]
        ]), this
      }

      function eN(e, i, o) {
        if (typeof e === s ? (e_(e, !0) ? (typeof i === s && (o = i), i = e) : (o = e, i = void 0), e = void 0) : typeof e !== n || e_(i, !0) || (o = i, i = void 0), o)
          if (typeof o.append === a) {
            var r = {};
            o.forEach(function(e, i) {
              r[String(i).toLowerCase()] = e
            }), o = r
          } else {
            var d = {};
            for (var p in o) o.hasOwnProperty(p) && (d[String(p).toLowerCase()] = o[p]);
            o = d
          } if (!(this instanceof eN)) return new eN(e, i, o).getResult();
        var u = typeof e === n ? e : o && o[t] ? o[t] : ef && ef.userAgent ? ef.userAgent : "",
          h = new eU(o, !0),
          m = i ? ek(eP, i) : eP,
          g = function(e) {
            return e == c ? function() {
              return new eL(e, u, m, h).set("ua", u).set(b, this.getBrowser()).set("cpu", this.getCPU()).set(w, this.getDevice()).set(l, this.getEngine()).set("os", this.getOS()).get()
            } : function() {
              return new eL(e, u, m[e], h).parseUA().get()
            }
          };
        return eO.call(this, [
          ["getBrowser", g(b)],
          ["getCPU", g("cpu")],
          ["getDevice", g(w)],
          ["getEngine", g(l)],
          ["getOS", g("os")],
          ["getResult", g(c)],
          ["getUA", function() {
            return u
          }],
          ["setUA", function(e) {
            return ez(e) && (u = eI(e, 500)), this
          }]
        ]).setUA(u), this
      }
      eN.VERSION = "2.0.6", eN.BROWSER = ey([p, m, f, u]), eN.CPU = ey([g]), eN.DEVICE = ey([v, h, u, k, y, _, x, z, S]), eN.ENGINE = eN.OS = ey([p, m])
    },
    93555: (e, i, o) => {
      "use strict";
      o.d(i, {
        s: () => t
      });
      class r extends Error {}

      function t(e, i) {
        let o;
        if ("string" != typeof e) throw new r("Invalid token specified: must be a string");
        i || (i = {});
        let t = +(!0 !== i.header),
          a = e.split(".")[t];
        if ("string" != typeof a) throw new r(`Invalid token specified: missing part #${t+1}`);
        try {
          o = function(e) {
            let i = e.replace(/-/g, "+").replace(/_/g, "/");
            switch (i.length % 4) {
              case 0:
                break;
              case 2:
                i += "==";
                break;
              case 3:
                i += "=";
                break;
              default:
                throw Error("base64 string is not of the correct length")
            }
            try {
              var o;
              return o = i, decodeURIComponent(atob(o).replace(/(.)/g, (e, i) => {
                let o = i.charCodeAt(0).toString(16).toUpperCase();
                return o.length < 2 && (o = "0" + o), "%" + o
              }))
            } catch (e) {
              return atob(i)
            }
          }(a)
        } catch (e) {
          throw new r(`Invalid token specified: invalid base64 for part #${t+1} (${e.message})`)
        }
        try {
          return JSON.parse(o)
        } catch (e) {
          throw new r(`Invalid token specified: invalid json for part #${t+1} (${e.message})`)
        }
      }
      r.prototype.name = "InvalidTokenError"
    }
  }
]);