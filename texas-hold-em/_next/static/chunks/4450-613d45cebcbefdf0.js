! function() {
  try {
    var t = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
      e = (new t.Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "967a1f83-2099-42b9-9b93-9846910e8f5e", t._sentryDebugIdIdentifier = "sentry-dbid-967a1f83-2099-42b9-9b93-9846910e8f5e")
  } catch (t) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4450], {
    1721: (t, e, n) => {
      "use strict";

      function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e && (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2 ? r(Object(n), !0).forEach(function(e) {
            ! function(t, e, n) {
              var r;
              (e = "symbol" == typeof(r = function(t, e) {
                if ("object" != typeof t || !t) return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(t, e || "default");
                  if ("object" != typeof r) return r;
                  throw TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
              }(e, "string")) ? r : String(r)) in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : t[e] = n
            }(t, e, n[e])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          })
        }
        return t
      }

      function o(t, e) {
        var n = {};
        for (var r in t) n[r] = e(t[r], r);
        return n
      }
      n.d(e, {
        c: () => s
      });
      var a = (t, e, n) => {
          for (var r of Object.keys(t)) {
            var i;
            if (t[r] !== (null != (i = e[r]) ? i : n[r])) return !1
          }
          return !0
        },
        s = t => {
          var e = e => {
            var n = t.defaultClassName,
              r = i(i({}, t.defaultVariants), e);
            for (var o in r) {
              var s, u = null != (s = r[o]) ? s : t.defaultVariants[o];
              if (null != u) {
                var c = u;
                "boolean" == typeof c && (c = !0 === c ? "true" : "false");
                var l = t.variantClassNames[o][c];
                l && (n += " " + l)
              }
            }
            for (var [d, p] of t.compoundVariants) a(d, r, t.defaultVariants) && (n += " " + p);
            return n
          };
          return e.variants = () => Object.keys(t.variantClassNames), e.classNames = {
            get base() {
              return t.defaultClassName.split(" ")[0]
            },
            get variants() {
              return o(t.variantClassNames, t => o(t, t => t.split(" ")[0]))
            }
          }, e
        }
    },
    11385: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, {
        AppInsightService: () => o
      });
      var r = n(35712),
        i = n(21699),
        o = function() {
          function t() {}
          return t.init = function(t, e) {
            (0, i.f)('\n        !(function (cfg){function e(){cfg.onInit&&cfg.onInit(n)}var x,w,D,t,E,n,C=window,O=document,b=C.location,q="script",I="ingestionendpoint",L="disableExceptionTracking",j="ai.device.";"instrumentationKey"[x="toLowerCase"](),w="crossOrigin",D="POST",t="appInsightsSDK",E=cfg.name||"appInsights",(cfg.name||C[t])&&(C[t]=E),n=C[E]||function(g){var f=!1,m=!1,h={initialize:!0,queue:[],sv:"8",version:2,config:g};function v(e,t){var n={},i="Browser";function a(e){e=""+e;return 1===e.length?"0"+e:e}return n[j+"id"]=i[x](),n[j+"type"]=i,n["ai.operation.name"]=b&&b.pathname||"_unknown_",n["ai.internal.sdkVersion"]="javascript:snippet_"+(h.sv||h.version),{time:(i=new Date).getUTCFullYear()+"-"+a(1+i.getUTCMonth())+"-"+a(i.getUTCDate())+"T"+a(i.getUTCHours())+":"+a(i.getUTCMinutes())+":"+a(i.getUTCSeconds())+"."+(i.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z",iKey:e,name:"Microsoft.ApplicationInsights."+e.replace(/-/g,"")+"."+t,sampleRate:100,tags:n,data:{baseData:{ver:2}},ver:undefined,seq:"1",aiDataContract:undefined}}var n,i,t,a,y=-1,T=0,S=["js.monitor.azure.com","js.cdn.applicationinsights.io","js.cdn.monitor.azure.com","js0.cdn.applicationinsights.io","js0.cdn.monitor.azure.com","js2.cdn.applicationinsights.io","js2.cdn.monitor.azure.com","az416426.vo.msecnd.net"],o=g.url||cfg.src,r=function(){return s(o,null)};function s(d,t){if((n=navigator)&&(~(n=(n.userAgent||"").toLowerCase()).indexOf("msie")||~n.indexOf("trident/"))&&~d.indexOf("ai.3")&&(d=d.replace(/(\\/)(ai\\.3\\.)([^\\d]*)$/,function(e,t,n){return t+"ai.2"+n})),!1!==cfg.cr)for(var e=0;e<S.length;e++)if(0<d.indexOf(S[e])){y=e;break}var n,i=function(e){var a,t,n,i,o,r,s,c,u,l;h.queue=[],m||(0<=y&&T+1<S.length?(a=(y+T+1)%S.length,p(d.replace(/^(.*\\/\\/)([\\w\\.]*)(\\/.*)$/,function(e,t,n,i){return t+S[a]+i})),T+=1):(f=m=!0,s=d,!0!==cfg.dle&&(c=(t=function(){var e,t={},n=g.connectionString;if(n)for(var i=n.split(";"),a=0;a<i.length;a++){var o=i[a].split("=");2===o.length&&(t[o[0][x]()]=o[1])}return t[I]||(e=(n=t.endpointsuffix)?t.location:null,t[I]="https://"+(e?e+".":"")+"dc."+(n||"services.visualstudio.com")),t}()).instrumentationkey||g.instrumentationKey||"",t=(t=(t=t[I])&&"/"===t.slice(-1)?t.slice(0,-1):t)?t+"/v2/track":g.endpointUrl,t=g.userOverrideEndpointUrl||t,(n=[]).push((i="SDK LOAD Failure: Failed to load Application Insights SDK script (See stack for details)",o=s,u=t,(l=(r=v(c,"Exception")).data).baseType="ExceptionData",l.baseData.exceptions=[{typeName:"SDKLoadFailed",message:i.replace(/\\./g,"-"),hasFullStack:!1,stack:i+"\\nSnippet failed to load ["+o+"] -- Telemetry is disabled\\nHelp Link: https://go.microsoft.com/fwlink/?linkid=2128109\\nHost: "+(b&&b.pathname||"_unknown_")+"\\nEndpoint: "+u,parsedStack:[]}],r)),n.push((l=s,i=t,(u=(o=v(c,"Message")).data).baseType="MessageData",(r=u.baseData).message=\'AI (Internal): 99 message:"\'+("SDK LOAD Failure: Failed to load Application Insights SDK script (See stack for details) ("+l+")").replace(/\\"/g,"")+\'"\',r.properties={endpoint:i},o)),s=n,c=t,JSON&&((u=C.fetch)&&!cfg.useXhr?u(c,{method:D,body:JSON.stringify(s),mode:"cors"}):XMLHttpRequest&&((l=new XMLHttpRequest).open(D,c),l.setRequestHeader("Content-type","application/json"),l.send(JSON.stringify(s)))))))},a=function(e,t){m||setTimeout(function(){!t&&h.core||i()},500),f=!1},p=function(e){var n=O.createElement(q),e=(n.src=e,t&&(n.integrity=t),n.setAttribute("data-ai-name",E),cfg[w]);return!e&&""!==e||"undefined"==n[w]||(n[w]=e),n.onload=a,n.onerror=i,n.onreadystatechange=function(e,t){"loaded"!==n.readyState&&"complete"!==n.readyState||a(0,t)},cfg.ld&&cfg.ld<0?O.getElementsByTagName("head")[0].appendChild(n):setTimeout(function(){O.getElementsByTagName(q)[0].parentNode.appendChild(n)},cfg.ld||0),n};p(d)}cfg.sri&&(n=o.match(/^((http[s]?:\\/\\/.*\\/)\\w+(\\.\\d+){1,5})\\.(([\\w]+\\.){0,2}js)$/))&&6===n.length?(d="".concat(n[1],".integrity.json"),i="@".concat(n[4]),l=window.fetch,t=function(e){if(!e.ext||!e.ext[i]||!e.ext[i].file)throw Error("Error Loading JSON response");var t=e.ext[i].integrity||null;s(o=n[2]+e.ext[i].file,t)},l&&!cfg.useXhr?l(d,{method:"GET",mode:"cors"}).then(function(e){return e.json()["catch"](function(){return{}})}).then(t)["catch"](r):XMLHttpRequest&&((a=new XMLHttpRequest).open("GET",d),a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE)if(200===a.status)try{t(JSON.parse(a.responseText))}catch(e){r()}else r()},a.send())):o&&r();try{h.cookie=O.cookie}catch(k){}function e(e){for(;e.length;)!function(t){h[t]=function(){var e=arguments;f||h.queue.push(function(){h[t].apply(h,e)})}}(e.pop())}var c,u,l="track",d="TrackPage",p="TrackEvent",l=(e([l+"Event",l+"PageView",l+"Exception",l+"Trace",l+"DependencyData",l+"Metric",l+"PageViewPerformance","start"+d,"stop"+d,"start"+p,"stop"+p,"addTelemetryInitializer","setAuthenticatedUserContext","clearAuthenticatedUserContext","flush"]),h.SeverityLevel={Verbose:0,Information:1,Warning:2,Error:3,Critical:4},(g.extensionConfig||{}).ApplicationInsightsAnalytics||{});return!0!==g[L]&&!0!==l[L]&&(e(["_"+(c="onerror")]),u=C[c],C[c]=function(e,t,n,i,a){var o=u&&u(e,t,n,i,a);return!0!==o&&h["_"+c]({message:e,url:t,lineNumber:n,columnNumber:i,error:a,evt:C.event}),o},g.autoExceptionInstrumented=!0),h}(cfg.cfg),(C[E]=n).queue&&0===n.queue.length?(n.queue.push(e)):e();})({\n          src: "https://js.monitor.azure.com/scripts/b/ai.2.min.js", // EVO-943 => UPDATED The SDK URL Source: https://github.com/microsoft/ApplicationInsights-JS/tree/master?tab=readme-ov-file#active-public-cdn-endpoints\n          cr: true, // EVO-943 => If the SDK fails to load and the endpoint value defined for src is the public CDN location, this configuration option attempts to immediately load the SDK from one of the following backup CDN endpoints: https://learn.microsoft.com/en-us/azure/azure-monitor/app/javascript-sdk?tabs=javascriptwebsdkloaderscript#javascript-web-sdk-loader-script-configuration\n          name: "appInsightsArkadium", // Global SDK Instance name defaults to "appInsights" when not supplied\n          // ld: 0, // Defines the load delay (in ms) before attempting to load the sdk. -1 = block page load and add to head. (default) = 0ms load after timeout,\n          // useXhr: 1, // Use XHR instead of fetch to report failures (if available),\n          // dle: true, // Prevent the SDK from reporting load failure log\n          // crossOrigin: "anonymous", // When supplied this will add the provided value as the cross origin attribute on the script tag\n          // onInit: null, // Once the application insights instance has loaded and initialized this callback function will be called with 1 argument -- the sdk instance (DON\'T ADD anything to the sdk.queue -- As they won\'t get called)\n          // sri: false, // Custom optional value to specify whether fetching the snippet from integrity file and do integrity check\n          cfg: { // Application Insights Configuration\n            '.concat(e ? 'connectionString: "'.concat(e, '"') : 'instrumentationKey: "'.concat(t, '"'), ",\n            disableExceptionTracking: true,\n            disableAjaxTracking: true,\n            enableDebug: false,\n            maxBatchInterval: 1,\n            maxBatchSizeInBytes: 0,\n            enableSessionStorageBuffer: false,\n            disableFetchTracking: true,\n        }});\n    ")).catch(function(t) {
              r.v.error(t, "error while initializing AppInsights")
            })
          }, t.trackAppError = function(t, e, n, r, i, o) {
            void 0 === i && (i = {}), void 0 === o && (o = !1);
            var a, s = null == (a = null == window ? void 0 : window.location) ? void 0 : a.pathname;
            this.trackEvent("js-error", {
              error: t,
              info: JSON.stringify(i),
              page: s,
              adBlockEnabled: e,
              isUserLoggedIn: n,
              isUserSubscribed: r,
              type: o ? "Something went wrong" : "common"
            })
          }, t.trackPageView = function(t, e, n) {
            window.appInsightsArkadium && window.appInsightsArkadium.trackPageView({
              name: document.title,
              uri: t,
              properties: e,
              screenResolution: n
            })
          }, t.trackEvent = function(t, e) {
            window.appInsightsArkadium && window.appInsightsArkadium.trackEvent({
              name: t,
              properties: e
            })
          }, t.getAnalyticsData = function() {
            var t, e, n, r, i, o, a, s;
            if (window.appInsightsArkadium) {
              var u = window.appInsightsArkadium;
              return {
                SessionId: (null == (e = null == (t = null == u ? void 0 : u.context) ? void 0 : t.getSessionId) ? void 0 : e.call(t)) || void 0,
                ParentId: null == (r = null == (n = null == u ? void 0 : u.context) ? void 0 : n.telemetryTrace) ? void 0 : r.parentID,
                OperationId: null == (o = null == (i = null == u ? void 0 : u.context) ? void 0 : i.telemetryTrace) ? void 0 : o.traceID,
                OperationName: null == (s = null == (a = null == u ? void 0 : u.context) ? void 0 : a.telemetryTrace) ? void 0 : s.name
              }
            }
          }, t
        }()
    },
    12306: (t, e, n) => {
      "use strict";
      n.d(e, {
        AO: () => c,
        G_: () => l,
        Sb: () => u,
        sj: () => s
      });
      var r = n(35712),
        i = n(74348),
        o = function() {
          return (o = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
          }).apply(this, arguments)
        },
        a = function(t, e) {
          var n, r, i, o = {
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
            return function(u) {
              var c = [s, u];
              if (n) throw TypeError("Generator is already executing.");
              for (; a && (a = 0, c[0] && (o = 0)), o;) try {
                if (n = 1, r && (i = 2 & c[0] ? r.return : c[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, c[1])).done) return i;
                switch (r = 0, i && (c = [2 & c[0], i.value]), c[0]) {
                  case 0:
                  case 1:
                    i = c;
                    break;
                  case 4:
                    return o.label++, {
                      value: c[1],
                      done: !1
                    };
                  case 5:
                    o.label++, r = c[1], c = [0];
                    continue;
                  case 7:
                    c = o.ops.pop(), o.trys.pop();
                    continue;
                  default:
                    if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === c[0] || 2 === c[0])) {
                      o = 0;
                      continue
                    }
                    if (3 === c[0] && (!i || c[1] > i[0] && c[1] < i[3])) {
                      o.label = c[1];
                      break
                    }
                    if (6 === c[0] && o.label < i[1]) {
                      o.label = i[1], i = c;
                      break
                    }
                    if (i && o.label < i[2]) {
                      o.label = i[2], o.ops.push(c);
                      break
                    }
                    i[2] && o.ops.pop(), o.trys.pop();
                    continue
                }
                c = e.call(t, o)
              } catch (t) {
                c = [6, t], r = 0
              } finally {
                n = i = 0
              }
              if (5 & c[0]) throw c[1];
              return {
                value: c[0] ? c[1] : void 0,
                done: !0
              }
            }
          }
        },
        s = new(function() {
          function t() {
            this.data = {}, this.prefix = "ark_modules:", this.eventCallbacks = {}, this.getItem = this.getItem.bind(this), this.setItem = this.setItem.bind(this), this.removeItem = this.removeItem.bind(this), this.clear = this.clear.bind(this), this.checkStorageListening = this.checkStorageListening.bind(this), this.addStorageListening = this.addStorageListening.bind(this), this.removeStorageListening = this.removeStorageListening.bind(this), this.handleStorageListening = this.handleStorageListening.bind(this)
          }
          return t.prototype.setItem = function(t, e, n) {
            if (void 0 === n && (n = !1), n || (t = "".concat(this.prefix).concat(t)), "u" < typeof window) this.data[t] = String(e);
            else try {
              window.localStorage.setItem(t, String(e))
            } catch (t) {
              r.v.log(t)
            }
          }, t.prototype.getItem = function(t, e) {
            if (void 0 === e && (e = !1), e || (t = "".concat(this.prefix).concat(t)), "u" < typeof window) return t ? null == (n = this.data) ? void 0 : n[t] : null;
            var n, r = t ? window.localStorage.getItem(t) : null;
            return r && "undefined" !== r && "null" !== r ? r : null
          }, t.prototype.removeItem = function(t, e) {
            void 0 === e && (e = !0), t = e ? "".concat(this.prefix).concat(t) : t, "u" < typeof window ? delete this.data[t] : window.localStorage.removeItem(t)
          }, t.prototype.clear = function() {
            "u" < typeof window ? this.data = {} : window.localStorage.clear()
          }, t.prototype.dispatchEvent = function(t, e, n) {
            if (void 0 === n && (n = !1), "u" > typeof window) {
              var r = this.getItem(t, n);
              this.setItem(t, e, n);
              var i = new StorageEvent("storage", {
                key: t,
                oldValue: r,
                newValue: e
              });
              window.dispatchEvent(i)
            }
          }, t.prototype.addStorageListening = function(t, e, n, a) {
            if (void 0 === e && (e = window), void 0 === n && (n = this.handleStorageListening), void 0 === a && (a = {
                capture: !0
              }), !this.checkStorageListening() && t) {
              if ("u" < typeof window || !window.localStorage) return void r.v.warn("Could not add storage listening.");
              var s = Object.assign({}, this.eventCallbacks);
              t && (this.eventCallbacks = o(o({}, this.eventCallbacks), t)), Object.keys(s).length || (e || window).addEventListener("storage", n, a || !1), this.checkStorageListening() || this.setItem(i.g.LS_LISTENER_IS_ON_PROP, !0)
            }
          }, t.prototype.checkStorageListening = function() {
            return !!this.getItem(i.g.LS_LISTENER_IS_ON_PROP)
          }, t.prototype.removeStorageListening = function(t, e, n, o) {
            (void 0 === e && (e = window), void 0 === n && (n = this.handleStorageListening), void 0 === o && (o = {
              capture: !0
            }), "u" < typeof window || !window.localStorage) ? r.v.warn("Could not remove storage listening."): (t && this.eventCallbacks[t] && (delete this.eventCallbacks[t], this.removeItem(t)), Object.keys(this.eventCallbacks).length || ((e || window).removeEventListener("storage", n, o || !1), this.removeItem(i.g.LS_LISTENER_IS_ON_PROP)))
          }, t.prototype.handleStorageListening = function(t) {
            var e, n, i, o;
            return e = this, n = void 0, i = void 0, o = function() {
              var e, n, i, o, s;
              return a(this, function(a) {
                switch (a.label) {
                  case 0:
                    if (e = t.key, n = t.newValue, i = t.oldValue, void 0 === this.getItem(e) || n === i) return [2];
                    if (!((o = e ? e.replace(RegExp("^".concat(this.prefix), "gi"), "") : null) && Object.keys(this.eventCallbacks).some(function(t) {
                        return t === o
                      }) && Object.prototype.hasOwnProperty.call(this.eventCallbacks, o) && "function" == typeof this.eventCallbacks[o])) return [3, 4];
                    a.label = 1;
                  case 1:
                    return a.trys.push([1, 3, , 4]), [4, this.eventCallbacks[o](t)];
                  case 2:
                    return a.sent(), [3, 4];
                  case 3:
                    return s = a.sent(), r.v.error("Could not execute storage listening handler function.", s), [3, 4];
                  case 4:
                    return [2]
                }
              })
            }, new(i || (i = Promise))(function(t, r) {
              function a(t) {
                try {
                  u(o.next(t))
                } catch (t) {
                  r(t)
                }
              }

              function s(t) {
                try {
                  u(o.throw(t))
                } catch (t) {
                  r(t)
                }
              }

              function u(e) {
                var n;
                e.done ? t(e.value) : ((n = e.value) instanceof i ? n : new i(function(t) {
                  t(n)
                })).then(a, s)
              }
              u((o = o.apply(e, n || [])).next())
            })
          }, t
        }()),
        u = function(t) {
          s.setItem(i.g.GAME_PURCHASE_REQUEST, t)
        },
        c = function() {
          s.removeItem(i.g.GAME_PURCHASE_REQUEST)
        },
        l = function(t) {
          s.dispatchEvent(i.g.GAME_PURCHASE_REQUEST, t), c()
        }
    },
    14011: (t, e, n) => {
      "use strict";
      var r = n(17955);
      n.o(r, "usePathname") && n.d(e, {
        usePathname: function() {
          return r.usePathname
        }
      }), n.o(r, "useRouter") && n.d(e, {
        useRouter: function() {
          return r.useRouter
        }
      }), n.o(r, "useSearchParams") && n.d(e, {
        useSearchParams: function() {
          return r.useSearchParams
        }
      })
    },
    20056: (t, e, n) => {
      "use strict";
      n.d(e, {
        y: () => s
      });
      var r = n(24294),
        i = n(88058),
        o = function() {
          function t() {}
          return t.prototype.loginImpression = function(t, e, n) {
            var r = this.newEventBuilder(t);
            return r.setName("loginButton"), r.setEventAction(i.bi.IMPRESSION), r.setNonInteraction(!0), e && r.setCustom("category", e), n && r.setGame(n), r.build()
          }, t.prototype.loginClick = function(t, e, n, r, o) {
            var a = this.newEventBuilder(t);
            return a.setName("loginButton"), a.setEventAction(i.bi.CLICK), a.setNonInteraction(!1), e && a.setCustom("category", e), o && a.setCustom("loginRegisterType", o), n && a.setGame(n), r && a.setCustom("registrationLocation", r), a.build()
          }, t.prototype.loginSuccess = function(t, e, n, r, o) {
            var a = this.newEventBuilder(t);
            return a.setName("loginButton"), a.setEventAction(i.bi.LOGIN), a.setNonInteraction(!1), e && a.setCustom("category", e), o && a.setCustom("loginRegisterType", o), n && a.setGame(n), r && a.setCustom("loginLocation", r), a.build()
          }, t.prototype.emailOptIn = function(t) {
            var e = this.newEventBuilder(t);
            return e.setName("loginButton"), e.setEventAction(i.bi.EMAILOPTIN), e.setNonInteraction(!1), e.build()
          }, t.prototype.registration = function(t, e, n, r, i, o, a, s, u) {
            var c = this.newEventBuilder(t);
            return c.setName("registration"), c.setEventAction(""), c.setNonInteraction(!1), c.setCustom("loginRegisterType", r), e && c.setCustom("category", e), n && c.setGame(n), c.setCustom("avatarType", i), c.setCustom("avatarBackground", o), c.setCustom("registrationLocation", a), s && c.setCustom("xsollaId", s), c.setCustom("pwa", u), c.build()
          }, t.prototype.registrationEmailConfirm = function(t, e, n, r, i, o, a) {
            var s = this.newEventBuilder(t);
            return s.setName("registrationEmailConfirm"), s.setEventAction(""), s.setNonInteraction(!1), s.setCustom("loginRegisterType", r), e && s.setCustom("category", e), n && s.setGame(n), s.setCustom("avatarType", i), s.setCustom("avatarBackground", o), s.setCustom("registrationLocation", a), s.build()
          }, t.prototype.publicProfileName = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("publicProfileName"), e && n.setCustom("loginRegisterType", e), n.setEventAction(i.bi.CLICK), n.setNonInteraction(!1), n.build()
          }, t.prototype.profileEmail = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("profileEmail"), n.setEventAction(i.bi.CLICK), e && n.setCustom("loginRegisterType", e), n.setNonInteraction(!1), n.build()
          }, t.prototype.personalInformation = function(t, e, n) {
            var r = this.newEventBuilder(t);
            return r.setName("personalInformation"), r.setEventAction(i.bi.CLICK), r.setNonInteraction(!1), r.setCustom("personalInfoType", e), "gender" === e && r.setCustom("profileGender", n), r.build()
          }, t.prototype.profileAvatar = function(t, e, n) {
            var r = this.newEventBuilder(t);
            return r.setName("profileAvatar"), r.setEventAction(i.bi.CLICK), r.setNonInteraction(!1), r.setCustom("avatarType", e), n && r.setCustom("loginRegisterType", n), r.build()
          }, t.prototype.profileAvatarCustomize = function(t, e, n, r) {
            var o = this.newEventBuilder(t);
            return o.setName("profileAvatarCustomize"), o.setEventAction(i.bi.CLICK), o.setNonInteraction(!1), o.setCustom("avatarBackground", e), o.setCustom("avatarFrame", n), r && o.setCustom("loginRegisterType", r), o.build()
          }, t.prototype.onboardingPersonal = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("onboardingPersonal"), n.setEventAction(i.bi.CLICK), n.setNonInteraction(!1), e && n.setCustom("loginRegisterType", e), n.build()
          }, t.prototype.onboardingEmail = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("onboardingEmail"), n.setEventAction(i.bi.CLICK), n.setNonInteraction(!1), e && n.setCustom("loginRegisterType", e), n.build()
          }, t.prototype.resendConfirmation = function(t) {
            var e = this.newEventBuilder(t);
            return e.setName("resendConfirmation"), e.setEventAction(i.bi.CLICK), e.setNonInteraction(!1), e.build()
          }, t.prototype.resetPassword = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("resetPassword"), n.setEventAction(i.bi.CLICK), n.setNonInteraction(!1), n.setCustom("type", e), n.build()
          }, t.prototype.socialEmailRequest = function(t) {
            var e = this.newEventBuilder(t);
            return e.setName("socialEmailRequest"), e.setEventAction(i.bi.CLICK), e.setNonInteraction(!1), e.build()
          }, t.prototype.registrationMoreAvatars = function(t, e, n) {
            var r = this.newEventBuilder(t);
            return r.setName("registrationMoreAvatars"), r.setEventAction(i.bi.CLICK), r.setNonInteraction(!1), r.setCustom("avatarType", e), n && r.setCustom("loginRegisterType", n), r.build()
          }, t.prototype.registrationAvatarSkip = function(t, e, n) {
            var r = this.newEventBuilder(t);
            return r.setName("registrationAvatarSkip"), r.setEventAction(i.bi.CLICK), r.setNonInteraction(!1), r.setCustom("avatarType", e), n && r.setCustom("loginRegisterType", n), r.build()
          }, t.prototype.createAccountButton = function(t) {
            var e = this.newEventBuilder(t);
            return e.setName("createAccountButton"), e.setEventAction(i.bi.CLICK), e.setNonInteraction(!1), e.build()
          }, t.prototype.createAccountSuccess = function(t) {
            var e = this.newEventBuilder(t);
            return e.setName("createAccountSuccess"), e.setEventAction(i.bi.CLICK), e.setNonInteraction(!1), e.build()
          }, t.prototype.newEventBuilder = function(t) {
            return new r.W().baseEvent(t)
          }, t
        }(),
        a = function() {
          function t() {}
          return t.prototype.newEventBuilder = function(t) {
            return new r.W().baseEvent(t)
          }, t.prototype.registration = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setEventGaCategory("registration"), n.setEventGaAction(i.bi.CLICK), n.setEventGaLabel(e), n.setGaNonInteraction(!1), n.build()
          }, t
        }(),
        s = function() {
          function t() {
            this.aiAnalytics = new o, this.gaAnalytics = new a
          }
          return t.prototype.loginImpression = function(t, e, n) {
            return (0, i.cA)(null, this.aiAnalytics.loginImpression(t, e, n))
          }, t.prototype.loginClick = function(t, e, n, r) {
            return (0, i.cA)(null, this.aiAnalytics.loginClick(t, e, n, void 0, r))
          }, t.prototype.loginSuccess = function(t, e, n, r, o) {
            return (0, i.cA)(null, this.aiAnalytics.loginSuccess(t, e, n, r, o))
          }, t.prototype.emailOptIn = function(t) {
            return (0, i.cA)(null, this.aiAnalytics.emailOptIn(t))
          }, t.prototype.registration = function(t, e, n, r, o, a, s, u, c) {
            return void 0 === u && (u = ""), (0, i.cA)(this.gaAnalytics.registration(t, u), this.aiAnalytics.registration(t, e, n, r, o, a, s, u, c))
          }, t.prototype.registrationEmailConfirm = function(t, e, n, r, o, a, s) {
            return (0, i.cA)(null, this.aiAnalytics.registrationEmailConfirm(t, e, n, r, o, a, s))
          }, t.prototype.publicProfileName = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.publicProfileName(t, e))
          }, t.prototype.profileEmail = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.profileEmail(t, e))
          }, t.prototype.profileAvatar = function(t, e, n) {
            return (0, i.cA)(null, this.aiAnalytics.profileAvatar(t, e, n))
          }, t.prototype.profileAvatarCustomize = function(t, e, n, r) {
            return (0, i.cA)(null, this.aiAnalytics.profileAvatarCustomize(t, e, n, r))
          }, t.prototype.onboardingPersonal = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.onboardingPersonal(t, e))
          }, t.prototype.onboardingEmail = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.onboardingEmail(t, e))
          }, t.prototype.resendConfirmation = function(t) {
            return (0, i.cA)(null, this.aiAnalytics.resendConfirmation(t))
          }, t.prototype.resetPassword = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.resetPassword(t, e))
          }, t.prototype.socialEmailRequest = function(t) {
            return (0, i.cA)(null, this.aiAnalytics.socialEmailRequest(t))
          }, t.prototype.registrationMoreAvatars = function(t, e, n) {
            return (0, i.cA)(null, this.aiAnalytics.registrationMoreAvatars(t, e, n))
          }, t.prototype.registrationAvatarSkip = function(t, e, n) {
            return (0, i.cA)(null, this.aiAnalytics.registrationAvatarSkip(t, e, n))
          }, t.prototype.createAccountButton = function(t) {
            return (0, i.cA)(null, this.aiAnalytics.createAccountButton(t))
          }, t.prototype.createAccountSuccess = function(t) {
            return (0, i.cA)(null, this.aiAnalytics.createAccountSuccess(t))
          }, t
        }()
    },
    21699: (t, e, n) => {
      "use strict";
      n.d(e, {
        f: () => i,
        k: () => r
      });
      var r = function(t, e) {
          return new Promise(function(n, r) {
            var i = document.createElement("script");
            i.type = "text/javascript", i.async = !0, e && (i["data-ad-client"] = e), i.readyState ? i.onreadystatechange = function() {
              ("loaded" === i.readyState || "complete" === i.readyState) && (i.onreadystatechange = null, n())
            } : (i.onload = n, i.onerror = r), i.src = t, document.head.appendChild(i)
          })
        },
        i = function(t) {
          return new Promise(function(e, n) {
            var r = document.createElement("script");
            r.type = "text/javascript", r.async = !0, r.readyState ? r.onreadystatechange = function() {
              ("loaded" === r.readyState || "complete" === r.readyState) && (r.onreadystatechange = null, e())
            } : (r.onload = e, r.onerror = n), r.innerHTML = t, document.head.appendChild(r)
          })
        }
    },
    22372: (t, e, n) => {
      "use strict";
      n.d(e, {
        EM: () => a,
        Kc: () => c
      });
      var r, i, o, a, s = n(24294),
        u = n(88058);
      (r = o || (o = {})).addFavoritesGameNav = "addFavoritesGameNav", r.addFavoritesGameEnd = "addFavoritesGameEnd", (i = a || (a = {})).HOME = "clickFavoriteGameHomePage", i.CATEGORY = "clickFavoriteGameCategoryPage", i.PROFILE = "profileFavoriteGames";
      var c = function() {
        function t() {}
        return t.prototype.addFavoritesGameNav = function(t, e) {
          var n = e.gameSlug,
            r = e.gameFavorited,
            i = this.newEventBuilder(t);
          return i.setName(o.addFavoritesGameNav), i.setEventAction(u.bi.CLICK), i.setNonInteraction(!1), i.setCustom("gameSlug", n), i.setCustom("gameFavorited", r), i.build()
        }, t.prototype.addFavoritesGameEnd = function(t, e) {
          var n = e.gameSlug,
            r = e.gameFavorited,
            i = this.newEventBuilder(t);
          return i.setName(o.addFavoritesGameEnd), i.setEventAction(u.bi.CLICK), i.setNonInteraction(!1), i.setCustom("gameSlug", n), i.setCustom("gameFavorited", r), i.build()
        }, t.prototype.clickFavoriteGameTile = function(t, e) {
          var n = e.gameSlug,
            r = e.pageType,
            i = this.newEventBuilder(t);
          return i.setName(null != r ? r : ""), i.setEventAction(u.bi.CLICK), i.setNonInteraction(!1), i.setCustom("gameSlug", n), i.build()
        }, t.prototype.newEventBuilder = function(t) {
          return new s.W().baseEvent(t)
        }, t
      }()
    },
    24294: (t, e, n) => {
      "use strict";
      n.d(e, {
        W: () => u
      });
      var r = n(69067),
        i = function() {
          return (i = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
          }).apply(this, arguments)
        },
        o = {
          domain: void 0,
          pageType: void 0,
          pagePath: void 0,
          deviceType: void 0,
          loggedIn: void 0,
          isEmailConfirmed: void 0,
          screenResolution: void 0,
          arenaVersion: void 0,
          buildVersion: void 0
        };
      i({
        ABTestSlot1: void 0,
        ABTestName: void 0,
        abvariations: void 0,
        utmInfo: {
          utmSource: void 0,
          utmMedium: void 0,
          utmCampaign: void 0
        },
        offsitepromo: void 0,
        subscriptionBonus: void 0,
        userInventory: void 0,
        virtualItemBuy: void 0,
        fpVisitorId: void 0,
        fpIncognito: void 0,
        bookmarkType: void 0,
        subscriptionId: void 0,
        affiliateName: void 0,
        userType: void 0,
        xsollaId: void 0
      }, o);
      var a = n(88058),
        s = function() {
          return (s = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
          }).apply(this, arguments)
        },
        u = function() {
          function t() {
            this.options = o, this.name = ""
          }
          return t.recommendedEventBuilder = function(t, e) {
            "" !== (0, r.O4)(e) ? (t.setRecPreviousGame((0, r.O4)(e)), t.setRecommendedGamesStart(a.bi.YES)) : t.setRecommendedGamesStart(a.bi.NO), (0, r.fp)(e) && t.setPlayAgainStart((0, r.fp)(e))
          }, t.playAgainStartEventBuilder = function(t, e) {
            (0, r.fp)(e) && t.setPlayAgainStart((0, r.fp)(e))
          }, t.prototype.baseEvent = function(t) {
            return this.add(this.getEventBaseParams(t)), this.add((0, r.bQ)()), this
          }, t.prototype.genericEvent = function(t) {
            return this.add(this.getGenericEventBaseParams(t)), this
          }, t.prototype.pageViewEvent = function(t) {
            return this.add(this.getPageviewBaseParams(t)), this
          }, t.prototype.setGame = function(t) {
            return this.add({
              game: t.slug
            }), this.add({
              isFavorited: t.isFavorite
            }), this
          }, t.prototype.setRecPreviousGame = function(t) {
            return this.add({
              recPreviousGame: t
            }), this
          }, t.prototype.setRecommendedGamesStart = function(t) {
            return this.add({
              recommendedGamesStart: t
            }), this
          }, t.prototype.setPlayAgainStart = function(t) {
            return this.add({
              playAgainStart: t
            }), this
          }, t.prototype.setNonInteraction = function(t) {
            return this.add({
              noninteraction: t
            }), this
          }, t.prototype.setEventAction = function(t) {
            return this.add({
              action: t
            }), this
          }, t.prototype.setGameplayId = function(t) {
            return this.add({
              gameplayID: t
            }), this
          }, t.prototype.setName = function(t) {
            this.name = t
          }, t.prototype.setCustom = function(t, e) {
            var n;
            return this.add(((n = {})[t] = e, n)), this
          }, t.prototype.setEventGaAction = function(t) {
            this.add({
              action: t
            })
          }, t.prototype.setEventGaCategory = function(t) {
            this.add({
              category: t
            })
          }, t.prototype.setNameGA = function(t) {
            this.add({
              name: t
            })
          }, t.prototype.setEventGaLabel = function(t) {
            this.add({
              label: t
            })
          }, t.prototype.setGaNonInteraction = function(t) {
            return this.add({
              nonInteraction: t
            }), this
          }, t.prototype.build = function() {
            return {
              name: this.name,
              data: s({}, this.options)
            }
          }, t.prototype.add = function(t) {
            void 0 === t && (t = {}), this.options = s(s({}, this.options), t)
          }, t.prototype.getEventBaseParams = function(t) {
            var e = t.bookmarkType,
              n = t.subscriptionId,
              r = t.affiliateName,
              i = t.userType,
              o = t.xsollaId,
              a = t.ABTestSlot1,
              u = t.abvariations,
              c = t.utmInfo,
              l = t.offsitepromo,
              d = t.subscriptionBonus,
              p = t.userInventory,
              m = t.virtualItemBuy,
              f = t.ABTestName,
              v = t.domain,
              y = t.pageType,
              h = t.pagePath,
              g = t.deviceType,
              b = t.loggedIn,
              A = t.isEmailConfirmed,
              C = t.screenResolution,
              I = t.arenaVersion,
              E = t.buildVersion,
              S = t.fpIncognito,
              w = t.fpVisitorId,
              k = Object.fromEntries(Object.entries(s(s({
                userType: i,
                xsollaId: o,
                bookmarkType: e,
                ABTestSlot1: a,
                offsitepromo: l,
                abvariations: u
              }, c), {
                subscriptionId: n,
                subscriptionBonus: d,
                affiliateName: r,
                userInventory: p,
                virtualItemBuy: m,
                fpIncognito: S,
                ABTestName: f,
                fpVisitorId: w
              })).filter(function(t) {
                return t[0], void 0 !== t[1]
              }));
            return s(s({}, k), {
              domain: v,
              pageType: y,
              pagePath: h,
              deviceType: g,
              loggedIn: b,
              isEmailConfirmed: A,
              screenResolution: C,
              arenaVersion: I,
              buildVersion: E
            })
          }, t.prototype.getPageviewBaseParams = function(t) {
            var e = t.utmCampaign,
              n = t.utmMedium,
              r = t.utmSource,
              i = t.urlReferrer,
              o = t.pageType,
              a = t.deviceType,
              u = t.loggedIn,
              c = t.isEmailConfirmed,
              l = t.screenResolution,
              d = t.arenaVersion,
              p = t.buildVersion,
              m = t.userInventory,
              f = t.virtualItemBuy,
              v = t.fpIncognito,
              y = t.fpVisitorId,
              h = Object.fromEntries(Object.entries({
                utmCampaign: e,
                utmMedium: n,
                utmSource: r,
                urlReferrer: i
              }).filter(function(t) {
                return t[0], void 0 !== t[1]
              }));
            return s(s({}, h), {
              pageType: o,
              deviceType: a,
              loggedIn: u,
              isEmailConfirmed: c,
              screenResolution: l,
              arenaVersion: d,
              buildVersion: p,
              userInventory: m,
              virtualItemBuy: f,
              fpIncognito: v,
              fpVisitorId: y
            })
          }, t.prototype.getGenericEventBaseParams = function(t) {
            var e = t.domain,
              n = t.pageType,
              r = t.deviceType,
              i = t.loggedIn,
              o = t.isEmailConfirmed;
            return {
              domain: e,
              pageType: n,
              deviceType: r,
              loggedIn: i,
              isEmailConfirmed: null != o ? o : "",
              screenResolution: t.screenResolution,
              arenaVersion: t.arenaVersion,
              buildVersion: t.buildVersion,
              fpIncognito: t.fpIncognito,
              fpVisitorId: t.fpVisitorId
            }
          }, t
        }()
    },
    28928: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), Object.defineProperty(e, "errorOnce", {
        enumerable: !0,
        get: function() {
          return n
        }
      });
      let n = t => {}
    },
    35712: (t, e, n) => {
      "use strict";
      n.d(e, {
        v: () => r
      });
      var r = {
        debug: function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
        },
        info: function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
        },
        log: function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
        },
        table: function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
        },
        warn: function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          console.warn.apply(console, t)
        },
        error: function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          console.error.apply(console, t)
        }
      }
    },
    41641: (t, e, n) => {
      "use strict";
      var r, i, o, a, s, u, c, l, d, p, m, f, v, y, h, g, b;
      n.d(e, {
        QH: () => a,
        yv: () => s
      }), (p = r || (r = {}))[p.GAME = 0] = "GAME", p[p.GAME_END = 1] = "GAME_END", p[p.GAME_SCORE_SAVED = 2] = "GAME_SCORE_SAVED", p[p.PENDING = 3] = "PENDING", p[p.PREROLL = 4] = "PREROLL", p[p.COVER = 5] = "COVER", p[p.ADBLOCK = 6] = "ADBLOCK", p[p.REWARD = 7] = "REWARD", p[p.INTERSTITIAL = 8] = "INTERSTITIAL", p[p.PREROLL_PLAYING = 9] = "PREROLL_PLAYING", (m = i || (i = {})).END_PREROLL = "arkadium:endPreroll", m.SET_GAME_TYPE = "arkadium:setGameType", (f = o || (o = {})).MIN_WIDTH = "min-width", f.MAX_WIDTH = "max-width", (v = a || (a = {})).ADO_BUILD_ID = "ado_build_id", v.IS_USER_ACCEPTED_PRIVACY_POLICY = "is_user_accepted_privacy_policy", v.ARK_USER_AGREE_COOKIES_PRIVACY_POLICY = "ark-user-agree-cookies-privacy-policy", v.FTUX_FIRST_VISIT = "FTUXfirstvisit", v.GAME_APP_BANNER = "GameAppBanner", v.ADBLOCK_TRACKER = "adblock_tracker", v.TARGETING_CONSENT = "targetingConsent", v.HIGH_SCORE = "high_score", v.PE_SUB_DATA = "PeSubData", v.RECENTLY_PLAYED = "recently_played", v.TOKEN_EXPIRATION_TIME = "ark_uup_token_expiration_time", v.GAME_PLAY_NUM = "gamePlayNum", v.GAME_PLAY_VISIT = "_ark_gamePlayVisit", v.LAST_TIME_GAME_PLAYED = "_ark_gamePlayVisitTime", v.ARK_PC_OVERALL_GAMES_PLAYED = "_ark_pc_overallGamesPlayed", v.ARK_PC_LAST_GAME_PLAYED = "_ark_pc_lastGamePlayed", v.TIC_TAC_TOE_AB_TEST_SETTINGS = "tic-tac-toe-ab-test-settings", v.USER_CHANGED_NAME = "userChangedName", v.ARK_VISITOR_MAIN = "ark_visitor_main", v.ARK_USER_FIRST_VISIT_2 = "arkUserFirstVisit2", v.ARK_USER_FIRST_LOAD = "arkUserFirstLoad", v.GA = "_ga", v.AD_FREE_VER = "ark_adfree", v.AD_FREE_AVATAR = "adFreeAv", v.AD_FREE_SPECIAL = "adFreeSp", v.SUBSCRIPTION = "ark_subscription", v.GAME_END_RESTART = "ark_gameends", v.ARK_AFFILIATE = "ark_affiliate", v.GAME_SLUG_FOR_SUBSCRIPTION_PURCHASE = "game_slug_for_subscription_purchase", v[v.ARK_AFFILIATE_STORE_DAYS = 180] = "ARK_AFFILIATE_STORE_DAYS", v.SUBSCRIPTION_ID = "ark_subscription_val", v.CATEGORY_PROMO_STATUS = "promo_status", v.ARK_ABTEST_VARIATION = "ark_abtest_variation", (y = s || (s = {})).GCLID = "gclid", y.FB_CLID = "fbclid", y.FB_ID = "fbid", y.ARK_PROMO = "arkpromo", y.UTM_SOURCE = "utm_source", y.UTM_MEDIUM = "utm_medium", y.UTM_CAMPAIGN = "utm_campaign", y.FILENAME = "filename", y.TYPE = "type", y.ARKADS = "__arkads", y.ARKVER = "__arkver", y.ARKLOGIN = "arklogin", y.ADD_FREE = "ark_adfree", y.SUBSCRIPTION = "ark_subscription", y.REDEMPTION_CODE = "redemption_code", y.SUBSCRIPTION_PLAN = "subscription_plan", y.FULL_SCREEN_TEST = "fullscreen", y.ARK_AFFILIATE = "affiliate", y.ARK_AFFILIATE_ID = "affiliate_id", y.BLOG_ADS_TEST = "blogAds", (h = u || (u = {})).BLOCKED = "blocked", h.EVENT_SENT = "eventsent", (g = c || (c = {})).PASS_GAME_DATA = "PASS_GAME_DATA", g.UPDATE_LOCAL_STORAGE = "UPDATE_LOCAL_STORAGE", g.REWARD_CALLBACK = "REWARD_CALLBACK", g.INTERSTITIAL_CALLBACK = "INTERSTITIAL_CALLBACK", g.RESIZE_CONTAINER = "RESIZE_CONTAINER", g.SET_LS_ITEM = "SET_LS_ITEM", g.REMOVE_LS_ITEM = "REMOVE_LS_ITEM", g.AUTH_API_EVENT = "AUTH_API_EVENT", (l || (l = {})).CHECK_AUTH = "CHECK_AUTH", (b = d || (d = {}))[b.EMPTY = 0] = "EMPTY", b[b.SUMMER_SWEEPSTAKES = 1] = "SUMMER_SWEEPSTAKES", b[b.CATEGORY_PROMO_DIALOG = 2] = "CATEGORY_PROMO_DIALOG"
    },
    42221: (t, e) => {
      "use strict";
      let n;
      e.qg = function(t, e) {
        let n = new i,
          r = t.length;
        if (r < 2) return n;
        let s = e?.decode || a,
          u = 0;
        do {
          let e = function(t, e, n) {
            let r = t.indexOf("=", e);
            return r < n ? r : -1
          }(t, u, r);
          if (-1 === e) break;
          let i = function(t, e, n) {
            let r = t.indexOf(";", e);
            return -1 === r ? n : r
          }(t, u, r);
          if (e > i) {
            u = t.lastIndexOf(";", e - 1) + 1;
            continue
          }
          let a = o(t, u, e);
          void 0 === n[a] && (n[a] = s(o(t, e + 1, i))), u = i + 1
        } while (u < r);
        return n
      };
      let r = Object.prototype.toString,
        i = ((n = function() {}).prototype = Object.create(null), n);

      function o(t, e, n) {
        let r = e,
          i = n;
        do {
          let e = t.charCodeAt(r);
          if (32 !== e && 9 !== e) break
        } while (++r < i);
        for (; i > r;) {
          let e = t.charCodeAt(i - 1);
          if (32 !== e && 9 !== e) break;
          i--
        }
        return t.slice(r, i)
      }

      function a(t) {
        if (-1 === t.indexOf("%")) return t;
        try {
          return decodeURIComponent(t)
        } catch (e) {
          return t
        }
      }
    },
    42955: (t, e, n) => {
      "use strict";
      n.d(e, {
        k: () => c
      });
      var r = {
          d: (t, e) => {
            for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
              enumerable: !0,
              get: e[n]
            })
          },
          o: (t, e) => Object.prototype.hasOwnProperty.call(t, e)
        },
        i = {};
      r.d(i, {
        A: () => u,
        k: () => s
      });
      var o = function(t, e, n, r) {
          return new(n || (n = Promise))(function(i, o) {
            function a(t) {
              try {
                u(r.next(t))
              } catch (t) {
                o(t)
              }
            }

            function s(t) {
              try {
                u(r.throw(t))
              } catch (t) {
                o(t)
              }
            }

            function u(t) {
              var e;
              t.done ? i(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                t(e)
              })).then(a, s)
            }
            u((r = r.apply(t, e || [])).next())
          })
        },
        a = function(t, e) {
          var n, r, i, o, a = {
            label: 0,
            sent: function() {
              if (1 & i[0]) throw i[1];
              return i[1]
            },
            trys: [],
            ops: []
          };
          return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
          }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
          }), o;

          function s(s) {
            return function(u) {
              var c = [s, u];
              if (n) throw TypeError("Generator is already executing.");
              for (; o && (o = 0, c[0] && (a = 0)), a;) try {
                if (n = 1, r && (i = 2 & c[0] ? r.return : c[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, c[1])).done) return i;
                switch (r = 0, i && (c = [2 & c[0], i.value]), c[0]) {
                  case 0:
                  case 1:
                    i = c;
                    break;
                  case 4:
                    return a.label++, {
                      value: c[1],
                      done: !1
                    };
                  case 5:
                    a.label++, r = c[1], c = [0];
                    continue;
                  case 7:
                    c = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === c[0] || 2 === c[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === c[0] && (!i || c[1] > i[0] && c[1] < i[3])) {
                      a.label = c[1];
                      break
                    }
                    if (6 === c[0] && a.label < i[1]) {
                      a.label = i[1], i = c;
                      break
                    }
                    if (i && a.label < i[2]) {
                      a.label = i[2], a.ops.push(c);
                      break
                    }
                    i[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                c = e.call(t, a)
              } catch (t) {
                c = [6, t], r = 0
              } finally {
                n = i = 0
              }
              if (5 & c[0]) throw c[1];
              return {
                value: c[0] ? c[1] : void 0,
                done: !0
              }
            }
          }
        };

      function s() {
        return o(this, void 0, Promise, function() {
          return a(this, function(t) {
            switch (t.label) {
              case 0:
                return [4, new Promise(function(t, e) {
                  var n = "Unknown",
                    r = !1;

                  function i(e) {
                    r || (r = !0, t({
                      isPrivate: e,
                      browserName: n
                    }))
                  }

                  function s() {
                    var t = 0,
                      e = parseInt("-1");
                    try {
                      e.toFixed(e)
                    } catch (e) {
                      t = e.message.length
                    }
                    return t
                  }(function() {
                    return o(this, void 0, Promise, function() {
                      return a(this, function(t) {
                        var r;
                        switch (t.label) {
                          case 0:
                            return 44 !== s() && 43 !== s() ? [3, 2] : (n = "Safari", [4, function() {
                              var t;
                              return o(this, void 0, Promise, function() {
                                return a(this, function(e) {
                                  switch (e.label) {
                                    case 0:
                                      return "function" != typeof(null == (t = navigator.storage) ? void 0 : t.getDirectory) ? [3, 2] : [4, function() {
                                        return o(this, void 0, void 0, function() {
                                          var t;
                                          return a(this, function(e) {
                                            switch (e.label) {
                                              case 0:
                                                return e.trys.push([0, 2, , 3]), [4, navigator.storage.getDirectory()];
                                              case 1:
                                                return e.sent(), i(!1), [3, 3];
                                              case 2:
                                                return i(((t = e.sent()) instanceof Error && "string" == typeof t.message ? t.message : String(t)).includes("unknown transient reason")), [3, 3];
                                              case 3:
                                                return [2]
                                            }
                                          })
                                        })
                                      }()];
                                    case 1:
                                      return e.sent(), [3, 3];
                                    case 2:
                                      void 0 !== navigator.maxTouchPoints ? function() {
                                        var t = String(Math.random());
                                        try {
                                          var e = indexedDB.open(t, 1);
                                          e.onupgradeneeded = function(e) {
                                            var n = e.target.result,
                                              r = function(t) {
                                                i(t)
                                              };
                                            try {
                                              n.createObjectStore("t", {
                                                autoIncrement: !0
                                              }).put(new Blob), r(!1)
                                            } catch (t) {
                                              r(!!(t instanceof Error && "string" == typeof t.message ? t.message : String(t)).includes("are not yet supported"))
                                            } finally {
                                              n.close(), indexedDB.deleteDatabase(t)
                                            }
                                          }, e.onerror = function() {
                                            return i(!1)
                                          }
                                        } catch (t) {
                                          i(!1)
                                        }
                                      }() : function() {
                                        var t = window.openDatabase,
                                          e = window.localStorage;
                                        try {
                                          t(null, null, null, null)
                                        } catch (t) {
                                          return void i(!0)
                                        }
                                        try {
                                          e.setItem("test", "1"), e.removeItem("test")
                                        } catch (t) {
                                          return void i(!0)
                                        }
                                        i(!1)
                                      }(), e.label = 3;
                                    case 3:
                                      return [2]
                                  }
                                })
                              })
                            }()]);
                          case 1:
                          case 4:
                            return t.sent(), [3, 6];
                          case 2:
                            return 51 !== s() ? [3, 3] : (n = (r = navigator.userAgent).match(/Chrome/) ? void 0 !== navigator.brave ? "Brave" : r.match(/Edg/) ? "Edge" : r.match(/OPR/) ? "Opera" : "Chrome" : "Chromium", void 0 !== self.Promise && void 0 !== self.Promise.allSettled ? navigator.webkitTemporaryStorage.queryUsageAndQuota(function(t, e) {
                              var n, r, o, a;
                              i(Math.round(e / 1048576) < 2 * Math.round((null != (o = null == (r = null == (n = null == (a = window) ? void 0 : a.performance) ? void 0 : n.memory) ? void 0 : r.jsHeapSizeLimit) ? o : 0x40000000) / 1048576))
                            }, function(t) {
                              e(Error("detectIncognito somehow failed to query storage quota: " + t.message))
                            }) : (0, window.webkitRequestFileSystem)(0, 1, function() {
                              i(!1)
                            }, function() {
                              i(!0)
                            }), [3, 6]);
                          case 3:
                            return 25 !== s() ? [3, 5] : (n = "Firefox", [4, function() {
                              var t;
                              return o(this, void 0, Promise, function() {
                                var e, n;
                                return a(this, function(r) {
                                  switch (r.label) {
                                    case 0:
                                      if ("function" != typeof(null == (t = navigator.storage) ? void 0 : t.getDirectory)) return [3, 5];
                                      r.label = 1;
                                    case 1:
                                      return r.trys.push([1, 3, , 4]), [4, navigator.storage.getDirectory()];
                                    case 2:
                                      return r.sent(), i(!1), [3, 4];
                                    case 3:
                                      return i(((e = r.sent()) instanceof Error && "string" == typeof e.message ? e.message : String(e)).includes("Security error")), [2];
                                    case 4:
                                      return [3, 6];
                                    case 5:
                                      (n = indexedDB.open("inPrivate")).onerror = function(t) {
                                        n.error && "InvalidStateError" === n.error.name && t.preventDefault(), i(!0)
                                      }, n.onsuccess = function() {
                                        indexedDB.deleteDatabase("inPrivate"), i(!1)
                                      }, r.label = 6;
                                    case 6:
                                      return [2]
                                  }
                                })
                              })
                            }()]);
                          case 5:
                            void 0 !== navigator.msSaveBlob ? (n = "Internet Explorer", i(void 0 === window.indexedDB)) : e(Error("detectIncognito cannot determine the browser")), t.label = 6;
                          case 6:
                            return [2]
                        }
                      })
                    })
                  })().catch(e)
                })];
              case 1:
                return [2, t.sent()]
            }
          })
        })
      }
      "u" > typeof window && (window.detectIncognito = s);
      let u = s,
        c = (i.A, i.k)
    },
    46902: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = {
        default: function() {
          return h
        },
        useLinkStatus: function() {
          return b
        }
      };
      for (var i in r) Object.defineProperty(e, i, {
        enumerable: !0,
        get: r[i]
      });
      let o = n(29970),
        a = n(95155),
        s = o._(n(12115)),
        u = n(83681),
        c = n(86455),
        l = n(14218),
        d = n(81275),
        p = n(44245);
      n(44410);
      let m = n(19254),
        f = n(73668),
        v = n(96095);

      function y(t) {
        return "string" == typeof t ? t : (0, u.formatUrl)(t)
      }

      function h(t) {
        var e;
        let r, i, o, [u, h] = (0, s.useOptimistic)(m.IDLE_LINK_STATUS),
          b = (0, s.useRef)(null),
          {
            href: A,
            as: C,
            children: I,
            prefetch: E = null,
            passHref: S,
            replace: w,
            shallow: k,
            scroll: N,
            onClick: P,
            onMouseEnter: L,
            onTouchStart: _,
            legacyBehavior: G = !1,
            onNavigate: B,
            ref: T,
            unstable_dynamicOnHover: O,
            ...R
          } = t;
        r = I, G && ("string" == typeof r || "number" == typeof r) && (r = (0, a.jsx)("a", {
          children: r
        }));
        let x = s.default.useContext(c.AppRouterContext),
          M = !1 !== E,
          V = !1 !== E ? null === (e = E) || "auto" === e ? v.FetchStrategy.PPR : v.FetchStrategy.Full : v.FetchStrategy.PPR,
          {
            href: j,
            as: F
          } = s.default.useMemo(() => {
            let t = y(A);
            return {
              href: t,
              as: C ? y(C) : t
            }
          }, [A, C]);
        if (G) {
          if (r?.$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
            value: "E863",
            enumerable: !1,
            configurable: !0
          });
          i = s.default.Children.only(r)
        }
        let D = G ? i && "object" == typeof i && i.ref : T,
          K = s.default.useCallback(t => (null !== x && (b.current = (0, m.mountLinkInstance)(t, j, x, V, M, h)), () => {
            b.current && ((0, m.unmountLinkForCurrentNavigation)(b.current), b.current = null), (0, m.unmountPrefetchableInstance)(t)
          }), [M, j, x, V, h]),
          W = {
            ref: (0, l.useMergedRef)(K, D),
            onClick(t) {
              G || "function" != typeof P || P(t), G && i.props && "function" == typeof i.props.onClick && i.props.onClick(t), !x || t.defaultPrevented || function(t, e, r, i, o, a, u) {
                {
                  let c, {
                    nodeName: l
                  } = t.currentTarget;
                  if ("A" === l.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                  if (!(0, f.isLocalURL)(e)) {
                    o && (t.preventDefault(), location.replace(e));
                    return
                  }
                  if (t.preventDefault(), u) {
                    let t = !1;
                    if (u({
                        preventDefault: () => {
                          t = !0
                        }
                      }), t) return
                  }
                  let {
                    dispatchNavigateAction: d
                  } = n(41550);
                  s.default.startTransition(() => {
                    d(r || e, o ? "replace" : "push", a ?? !0, i.current)
                  })
                }
              }(t, j, F, b, w, N, B)
            },
            onMouseEnter(t) {
              G || "function" != typeof L || L(t), G && i.props && "function" == typeof i.props.onMouseEnter && i.props.onMouseEnter(t), x && M && (0, m.onNavigationIntent)(t.currentTarget, !0 === O)
            },
            onTouchStart: function(t) {
              G || "function" != typeof _ || _(t), G && i.props && "function" == typeof i.props.onTouchStart && i.props.onTouchStart(t), x && M && (0, m.onNavigationIntent)(t.currentTarget, !0 === O)
            }
          };
        return (0, d.isAbsoluteUrl)(F) ? W.href = F : G && !S && ("a" !== i.type || "href" in i.props) || (W.href = (0, p.addBasePath)(F)), o = G ? s.default.cloneElement(i, W) : (0, a.jsx)("a", {
          ...R,
          ...W,
          children: r
        }), (0, a.jsx)(g.Provider, {
          value: u,
          children: o
        })
      }
      n(28928);
      let g = (0, s.createContext)(m.IDLE_LINK_STATUS),
        b = () => (0, s.useContext)(g);
      ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
        value: !0
      }), Object.assign(e.default, e), t.exports = e.default)
    },
    47345: (t, e, n) => {
      "use strict";
      n.d(e, {
        L: () => u
      });
      var r = n(24294),
        i = n(88058),
        o = function() {
          function t() {}
          return t.prototype.promoBoxSlot = function(t, e, n) {
            var r = this.newEventBuilder(t);
            return r.setName("promoboxSlot"), r.setEventAction(i.bi.CLICK), r.setNonInteraction(!1), r.setGame(e), r.setCustom("promoboxSlotClick", "".concat(e.slug, " | ").concat(n, " | true").toLowerCase()), r.build()
          }, t.prototype.topNavClick = function(t, e, n) {
            var r = this.newEventBuilder(t);
            return r.setName("TopNav"), r.setEventAction(i.bi.CLICK), r.setNonInteraction(!1), r.setCustom("topnavClick", "".concat(e, "|").concat(n).toLowerCase()), r.build()
          }, t.prototype.recommendedGameClick = function(t, e, n) {
            var r = this.newEventBuilder(t);
            return r.setName("recommendedGames"), r.setEventAction(i.bi.CLICK), r.setNonInteraction(!1), r.setGame(n), r.setCustom("recommendedGamesClick", e.toLowerCase()), r.build()
          }, t.prototype.displayAd = function(t, e, n, o, a, s, u, c, l, d, p, m) {
            var f = this.newEventBuilder(t);
            return f.setName("displayAd"), f.setEventAction(i.bi.IMPRESSION), f.setNonInteraction(!e), n && f.setGame(n), f.setCustom("displayAdSize", "".concat(o[0], "x").concat(o[1])), f.setCustom("displayAdType", e ? "refresh" : "notrefresh"), f.setCustom("displayAdLocation", a), f.setCustom("recommendedGamesStart", u), f.setCustom("ads_abtest", d), f.setCustom("adId", a), f.setCustom("isRefresh", e), f.setCustom("params.isEmpty", c), f.setCustom("params.cpm", l), f.setCustom("params.size", "".concat(o[0], "x").concat(o[1])), f.setCustom("pwa", m), p && f.setGameplayId(p), r.W.playAgainStartEventBuilder(f, s), f.build()
          }, t.prototype.searchBoxSelect = function(t, e, n) {
            var r = this.newEventBuilder(t);
            return r.setName("SearchBox"), r.setEventAction(i.bi.CLICK), r.setNonInteraction(!1), n && r.setGame(n), r.setCustom("searchQuery", e.toLowerCase()), r.build()
          }, t.prototype.bookmarkImpression = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("Bookmark"), n.setEventAction(i.bi.IMPRESSION), n.setNonInteraction(!0), void 0 !== e && n.setGame(e), n.build()
          }, t.prototype.bookmarkClick = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("Bookmark"), n.setEventAction(i.bi.CLICK), n.setNonInteraction(!1), void 0 !== e && n.setGame(e), n.build()
          }, t.prototype.breadcrumbClick = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("breadCrumb"), n.setEventAction(i.bi.CLICK), n.setNonInteraction(!1), void 0 !== e && n.setGame(e), n.build()
          }, t.prototype.desktopBookmarkImpression = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("DesktopBookmark"), n.setEventAction(i.bi.IMPRESSION), n.setNonInteraction(!0), void 0 !== e && n.setGame(e), n.build()
          }, t.prototype.desktopBookmarkClick = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("DesktopBookmark"), n.setEventAction(i.bi.CLICK), n.setNonInteraction(!1), void 0 !== e && n.setGame(e), n.build()
          }, t.prototype.desktopBookmarkDrag = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("DesktopBookmark"), n.setEventAction(i.bi.DRAG), n.setNonInteraction(!1), void 0 !== e && n.setGame(e), n.build()
          }, t.prototype.desktopBookmarkVisit = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("DesktopBookmark"), n.setEventAction(i.bi.VISITS), n.setNonInteraction(!0), void 0 !== e && n.setGame(e), n.build()
          }, t.prototype.desktopBookmarkPWAInstall = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("DesktopBookmarkPWA"), n.setEventAction(i.bi.INSTALL), n.setNonInteraction(!1), void 0 !== e && n.setGame(e), n.build()
          }, t.prototype.desktopBookmarkPWACancel = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("DesktopBookmarkPWA"), n.setEventAction(i.bi.CANCEL), n.setNonInteraction(!1), void 0 !== e && n.setGame(e), n.build()
          }, t.prototype.desktopBookmarkPWAClick = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("DesktopBookmarkPWA"), n.setEventAction(i.bi.CLICK), n.setNonInteraction(!1), void 0 !== e && n.setGame(e), n.build()
          }, t.prototype.desktopBookmarkPWAVisit = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("DesktopBookmarkPWA"), n.setEventAction(i.bi.VISITS), n.setNonInteraction(!0), void 0 !== e && n.setGame(e), n.build()
          }, t.prototype.desktopBookmarkPWAImpression = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("DesktopBookmarkPWA"), n.setEventAction(i.bi.IMPRESSION), n.setNonInteraction(!0), void 0 !== e && n.setGame(e), n.build()
          }, t.prototype.mobileBookmarkPWAClick = function(t, e) {
            var n = e.game,
              r = e.platform,
              o = this.newEventBuilder(t);
            return o.setName("mobileBookmarkPWA"), o.setEventAction(i.bi.CLICK), o.setNonInteraction(!1), void 0 !== n && o.setGame(n), o.setCustom("bookmarkType", r), o.build()
          }, t.prototype.mobileBookmarkPWAImpression = function(t, e) {
            var n = e.game,
              r = e.platform,
              o = this.newEventBuilder(t);
            return o.setName("mobileBookmarkPWA"), o.setEventAction(i.bi.IMPRESSION), o.setNonInteraction(!0), void 0 !== n && o.setGame(n), o.setCustom("bookmarkType", r), o.build()
          }, t.prototype.mobileBookmarkPWAVisit = function(t, e) {
            var n = e || {},
              r = n.game,
              o = n.platform,
              a = this.newEventBuilder(t);
            return a.setName("mobileBookmarkPWA"), a.setEventAction(i.bi.VISIT), a.setNonInteraction(!1), void 0 !== r && a.setGame(r), a.setCustom("bookmarkType", o), a.build()
          }, t.prototype.androidBookmarkVisit = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("AndroidBookmark"), n.setEventAction(i.bi.IMPRESSION), n.setNonInteraction(!0), void 0 !== e && n.setGame(e), n.build()
          }, t.prototype.androidInstallAdd = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("AndroidBookmark"), n.setEventAction(i.bi.INSTALL), n.setNonInteraction(!1), void 0 !== e && n.setGame(e), n.build()
          }, t.prototype.androidBookmarkVisits = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("AndroidBookmark"), n.setEventAction(i.bi.VISITS), n.setNonInteraction(!0), void 0 !== e && n.setGame(e), n.build()
          }, t.prototype.IOSBookmarkVisit = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("IOSBookmark"), n.setEventAction(i.bi.VISITS), n.setNonInteraction(!0), void 0 !== e && n.setGame(e), n.build()
          }, t.prototype.pushNotifications = function(t, e, n, r, i, o) {
            var a = this.newEventBuilder(t);
            return a.setName("Opt_in"), a.setEventAction(e), null !== i && a.setCustom("category", i), null !== o && a.setGame(o), a.setNonInteraction(r), a.build()
          }, t.prototype.promoboxSlotClick = function(t, e, n, r, o) {
            var a = this.newEventBuilder(t);
            return a.setName("promoboxSlot"), a.setEventAction(i.bi.CLICK), a.setNonInteraction(!1), null !== r && a.setGame(r), a.setCustom("promobox Type", "".concat(e, "|").concat(n, "|").concat(o)), a.build()
          }, t.prototype.footerImpression = function(t) {
            var e = this.newEventBuilder(t);
            return e.setName("FooterCatNav"), e.setEventAction(i.bi.IMPRESSION), e.setNonInteraction(!0), e.build()
          }, t.prototype.footerNavClick = function(t, e, n) {
            var r = this.newEventBuilder(t);
            return r.setName("FooterCatNav"), r.setEventAction(i.bi.CLICK), r.setNonInteraction(!1), r.setCustom("topnavClick", "".concat(e, "|").concat(n).toLowerCase()), r.build()
          }, t.prototype.searchBoxImpression = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("SearchBox"), n.setEventAction(i.bi.IMPRESSION), n.setNonInteraction(!0), n.setCustom("topnavImpression", e.toLowerCase()), n.build()
          }, t.prototype.searchBoxQuery = function(t, e, n) {
            var r = this.newEventBuilder(t);
            return r.setName("SearchBox"), r.setEventAction(i.bi.QUERY), r.setNonInteraction(!1), r.setCustom("topNavClick", e.toLowerCase()), r.setCustom("searchQuery", n.toLowerCase()), r.build()
          }, t.prototype.searchBoxClick = function(t, e, n) {
            var r = this.newEventBuilder(t);
            return r.setName("SearchBox"), r.setEventAction(i.bi.CLICK), r.setNonInteraction(!1), r.setCustom("topNavClick", e.toLowerCase()), r.setCustom("game", n.toLowerCase()), r.build()
          }, t.prototype.topNavAdvantage = function(t) {
            var e = this.newEventBuilder(t);
            return e.setName("TopNavAdvantage"), e.setEventAction(i.bi.CLICK), e.setNonInteraction(!1), e.build()
          }, t.prototype.homepageCarousel = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName(e), n.setEventAction(i.bi.CLICK), n.setNonInteraction(!1), n.build()
          }, t.prototype.carouselButton = function(t, e, n) {
            var r = this.newEventBuilder(t);
            return r.setName("CarouselButton"), r.setEventAction(i.bi.CLICK), r.setNonInteraction(!1), r.setCustom("slot", e), r.setCustom("buttonLabel", n), r.build()
          }, t.prototype.genericAiEvent = function(t, e, n, r, i, o) {
            var a = this.genericEventBuilder(t);
            if (a.setName(e), a.setEventAction(n), a.setNonInteraction(r), i && a.setGame(i), o)
              for (var s in o) a.setCustom(s, o[s]);
            return a.build()
          }, t.prototype.newEventBuilder = function(t) {
            return new r.W().baseEvent(t)
          }, t.prototype.genericEventBuilder = function(t) {
            return new r.W().genericEvent(t)
          }, t
        }(),
        a = n(69067),
        s = function() {
          function t() {}
          return t.prototype.displayAd = function(t, e, n, r, i, o, s, u) {
            var c = this.newEventBuilder();
            return c.setEventGaCategory("OnPageDisp_".concat(r[0]).concat(r[1], "_").concat(t ? "refresh" : "notrefresh")), c.setEventGaAction(e ? "Viewable" : "N/A"), n ? c.setEventGaLabel((0, a.GS)(i, "game start", n.slug)) : c.setEventGaLabel((0, a.GS)(i, o, "")), c.setGaNonInteraction(!t), c.setCustom("recommendedGamesStart", s), c.setCustom("ads_abtest", u), c.build()
          }, t.prototype.newEventBuilder = function() {
            return new r.W
          }, t
        }(),
        u = function() {
          function t() {
            this.gaAnalytics = new s, this.aiAnalytics = new o
          }
          return t.prototype.arenaPromoBox = function() {
            return (0, i.cA)(null, null)
          }, t.prototype.promoboxSlotClick = function(t, e, n, r, o) {
            return (0, i.cA)(null, this.aiAnalytics.promoboxSlotClick(t, e, n, r, o))
          }, t.prototype.promoBoxSlot = function(t, e, n) {
            return (0, i.cA)(null, this.aiAnalytics.promoBoxSlot(t, e, n))
          }, t.prototype.bookmarkImpression = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.bookmarkImpression(t, e.game))
          }, t.prototype.bookmarkClick = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.bookmarkClick(t, e.game))
          }, t.prototype.breadcrumbClick = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.breadcrumbClick(t, e))
          }, t.prototype.socialShareClick = function() {
            return (0, i.cA)(null, null)
          }, t.prototype.topNavClick = function(t, e, n) {
            return (0, i.cA)(null, this.aiAnalytics.topNavClick(t, e, n))
          }, t.prototype.displayAd = function(t, e, n, r, o, a, s, u, c, l, d, p, m, f, v) {
            return void 0 === m && (m = ""), void 0 === f && (f = ""), (0, i.cA)(this.gaAnalytics.displayAd(e, n, r, o, s, u, l, m), this.aiAnalytics.displayAd(t, e, r, o, a, c, l, d, p, m, f, v))
          }, t.prototype.recommendedGameClick = function(t, e, n) {
            return (0, i.cA)(null, this.aiAnalytics.recommendedGameClick(t, n, e))
          }, t.prototype.desktopBookmarkClick = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.desktopBookmarkClick(t, e.game))
          }, t.prototype.desktopBookmarkImpression = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.desktopBookmarkImpression(t, e.game))
          }, t.prototype.desktopBookmarkVisit = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.desktopBookmarkVisit(t, e.game))
          }, t.prototype.desktopBookmarkPWAInstall = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.desktopBookmarkPWAInstall(t, e.game))
          }, t.prototype.desktopBookmarkPWACancel = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.desktopBookmarkPWACancel(t, e.game))
          }, t.prototype.desktopBookmarkPWAClick = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.desktopBookmarkPWAClick(t, e.game))
          }, t.prototype.desktopBookmarkPWAImpression = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.desktopBookmarkPWAImpression(t, e.game))
          }, t.prototype.mobileBookmarkPWAClick = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.mobileBookmarkPWAClick(t, e))
          }, t.prototype.mobileBookmarkPWAImpression = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.mobileBookmarkPWAImpression(t, e))
          }, t.prototype.mobileBookmarkPWAVisit = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.mobileBookmarkPWAVisit(t, e))
          }, t.prototype.desktopBookmarkPWAVisit = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.desktopBookmarkPWAVisit(t, e.game))
          }, t.prototype.desktopBookmarkDrag = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.desktopBookmarkDrag(t, e.game))
          }, t.prototype.desktopInstallAdd = function() {
            return (0, i.cA)(null, null)
          }, t.prototype.androidBookmarkImpression = function() {
            return (0, i.cA)(null, null)
          }, t.prototype.androidBookmarkVisit = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.androidBookmarkVisit(t, e.game))
          }, t.prototype.androidInstallAdd = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.androidInstallAdd(t, e.game))
          }, t.prototype.IOSBookmarkVisit = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.IOSBookmarkVisit(t, e.game))
          }, t.prototype.pushNotifications = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.pushNotifications(t, e.action, e.label, e.nonInteraction, e.category, e.game))
          }, t.prototype.footerImpression = function(t) {
            return (0, i.cA)(null, this.aiAnalytics.footerImpression(t))
          }, t.prototype.footerNavClick = function(t, e, n) {
            return (0, i.cA)(null, this.aiAnalytics.footerNavClick(t, e, n))
          }, t.prototype.searchBoxImpression = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.searchBoxImpression(t, e))
          }, t.prototype.searchBoxQuery = function(t, e, n) {
            return (0, i.cA)(null, this.aiAnalytics.searchBoxQuery(t, e, n))
          }, t.prototype.searchBoxClick = function(t, e, n) {
            return (0, i.cA)(null, this.aiAnalytics.searchBoxClick(t, e, n))
          }, t.prototype.topNavAdvantage = function(t) {
            return (0, i.cA)(null, this.aiAnalytics.topNavAdvantage(t))
          }, t.prototype.homepageCarousel = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.homepageCarousel(t, e))
          }, t.prototype.carouselButton = function(t, e, n) {
            return (0, i.cA)(null, this.aiAnalytics.carouselButton(t, e, n))
          }, t.prototype.genericAiEvent = function(t, e, n, r, o, a) {
            return (0, i.cA)(null, this.aiAnalytics.genericAiEvent(t, n, e, r, o, a))
          }, t
        }()
    },
    49948: t => {
      "use strict";

      function e(t) {
        try {
          return JSON.stringify(t)
        } catch (t) {
          return '"[Circular]"'
        }
      }
      t.exports = function(t, n, r) {
        var i = r && r.stringify || e;
        if ("object" == typeof t && null !== t) {
          var o = n.length + 1;
          if (1 === o) return t;
          var a = Array(o);
          a[0] = i(t);
          for (var s = 1; s < o; s++) a[s] = i(n[s]);
          return a.join(" ")
        }
        if ("string" != typeof t) return t;
        var u = n.length;
        if (0 === u) return t;
        for (var c = "", l = 0, d = -1, p = t && t.length || 0, m = 0; m < p;) {
          if (37 === t.charCodeAt(m) && m + 1 < p) {
            switch (d = d > -1 ? d : 0, t.charCodeAt(m + 1)) {
              case 100:
              case 102:
                if (l >= u || null == n[l]) break;
                d < m && (c += t.slice(d, m)), c += Number(n[l]), d = m + 2, m++;
                break;
              case 105:
                if (l >= u || null == n[l]) break;
                d < m && (c += t.slice(d, m)), c += Math.floor(Number(n[l])), d = m + 2, m++;
                break;
              case 79:
              case 111:
              case 106:
                if (l >= u || void 0 === n[l]) break;
                d < m && (c += t.slice(d, m));
                var f = typeof n[l];
                if ("string" === f) {
                  c += "'" + n[l] + "'", d = m + 2, m++;
                  break
                }
                if ("function" === f) {
                  c += n[l].name || "<anonymous>", d = m + 2, m++;
                  break
                }
                c += i(n[l]), d = m + 2, m++;
                break;
              case 115:
                if (l >= u) break;
                d < m && (c += t.slice(d, m)), c += String(n[l]), d = m + 2, m++;
                break;
              case 37:
                d < m && (c += t.slice(d, m)), c += "%", d = m + 2, m++, l--
            }++l
          }++m
        }
        return -1 === d ? t : (d < p && (c += t.slice(d)), c)
      }
    },
    55421: (t, e, n) => {
      "use strict";
      n.d(e, {
        Ay: () => z
      });
      var r, i, o = n(56541),
        a = "3.4.2";

      function s(t, e) {
        return new Promise(function(n) {
          return setTimeout(n, t, e)
        })
      }

      function u(t) {
        return !!t && "function" == typeof t.then
      }

      function c(t, e) {
        try {
          var n = t();
          u(n) ? n.then(function(t) {
            return e(!0, t)
          }, function(t) {
            return e(!1, t)
          }) : e(!0, n)
        } catch (t) {
          e(!1, t)
        }
      }

      function l(t, e, n) {
        return void 0 === n && (n = 16), (0, o.sH)(this, void 0, void 0, function() {
          var r, i, a, u;
          return (0, o.YH)(this, function(o) {
            switch (o.label) {
              case 0:
                r = Array(t.length), i = Date.now(), a = 0, o.label = 1;
              case 1:
                if (!(a < t.length)) return [3, 4];
                if (r[a] = e(t[a], a), !((u = Date.now()) >= i + n)) return [3, 3];
                return i = u, [4, s(0)];
              case 2:
                o.sent(), o.label = 3;
              case 3:
                return ++a, [3, 1];
              case 4:
                return [2, r]
            }
          })
        })
      }

      function d(t) {
        t.then(void 0, function() {})
      }

      function p(t, e) {
        t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
        var n = [0, 0, 0, 0];
        return n[3] += t[3] + e[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] + e[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] + e[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] + e[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
      }

      function m(t, e) {
        t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
        var n = [0, 0, 0, 0];
        return n[3] += t[3] * e[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] * e[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += t[3] * e[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] * e[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[2] * e[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[3] * e[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] * e[3] + t[1] * e[2] + t[2] * e[1] + t[3] * e[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
      }

      function f(t, e) {
        return 32 == (e %= 64) ? [t[1], t[0]] : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e | t[0] >>> 32 - e] : (e -= 32, [t[1] << e | t[0] >>> 32 - e, t[0] << e | t[1] >>> 32 - e])
      }

      function v(t, e) {
        return 0 == (e %= 64) ? t : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e] : [t[1] << e - 32, 0]
      }

      function y(t, e) {
        return [t[0] ^ e[0], t[1] ^ e[1]]
      }

      function h(t) {
        return t = m(t = y(t, [0, t[0] >>> 1]), [0xff51afd7, 0xed558ccd]), t = m(t = y(t, [0, t[0] >>> 1]), [0xc4ceb9fe, 0x1a85ec53]), t = y(t, [0, t[0] >>> 1])
      }

      function g(t) {
        return parseInt(t)
      }

      function b(t) {
        return parseFloat(t)
      }

      function A(t, e) {
        return "number" == typeof t && isNaN(t) ? e : t
      }

      function C(t) {
        return t.reduce(function(t, e) {
          return t + +!!e
        }, 0)
      }

      function I(t, e) {
        if (void 0 === e && (e = 1), Math.abs(e) >= 1) return Math.round(t / e) * e;
        var n = 1 / e;
        return Math.round(t * n) / n
      }

      function E(t) {
        return t && "object" == typeof t && "message" in t ? t : {
          message: t
        }
      }

      function S() {
        var t = window,
          e = navigator;
        return C(["MSCSSMatrix" in t, "msSetImmediate" in t, "msIndexedDB" in t, "msMaxTouchPoints" in e, "msPointerEnabled" in e]) >= 4
      }

      function w() {
        var t = window,
          e = navigator;
        return C(["webkitPersistentStorage" in e, "webkitTemporaryStorage" in e, 0 === e.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL" in t, "BatteryManager" in t, "webkitMediaStream" in t, "webkitSpeechGrammar" in t]) >= 5
      }

      function k() {
        var t = window,
          e = navigator;
        return C(["ApplePayError" in t, "CSSPrimitiveValue" in t, "Counter" in t, 0 === e.vendor.indexOf("Apple"), "getStorageUpdates" in e, "WebKitMediaKeys" in t]) >= 4
      }

      function N() {
        var t = window;
        return C(["safari" in t, !("DeviceMotionEvent" in t), !("ongestureend" in t), !("standalone" in navigator)]) >= 3
      }

      function P() {
        var t, e, n, r = w(),
          i = (n = window, C(["buildID" in navigator, "MozAppearance" in (null != (e = null == (t = document.documentElement) ? void 0 : t.style) ? e : {}), "onmozfullscreenchange" in n, "mozInnerScreenX" in n, "CSSMozDocumentRule" in n, "CanvasCaptureMediaStream" in n]) >= 4);
        if (!r && !i) return !1;
        var o = window;
        return C(["onorientationchange" in o, "orientation" in o, r && !("SharedWorker" in o), i && /android/i.test(navigator.appVersion)]) >= 2
      }

      function L(t) {
        var e = Error(t);
        return e.name = t, e
      }

      function _(t, e, n) {
        var r, i, a;
        return void 0 === n && (n = 50), (0, o.sH)(this, void 0, void 0, function() {
          var u, c;
          return (0, o.YH)(this, function(o) {
            switch (o.label) {
              case 0:
                u = document, o.label = 1;
              case 1:
                if (u.body) return [3, 3];
                return [4, s(n)];
              case 2:
                return o.sent(), [3, 1];
              case 3:
                c = u.createElement("iframe"), o.label = 4;
              case 4:
                return o.trys.push([4, , 10, 11]), [4, new Promise(function(t, n) {
                  var r = !1,
                    i = function() {
                      r = !0, t()
                    };
                  c.onload = i, c.onerror = function(t) {
                    r = !0, n(t)
                  };
                  var o = c.style;
                  o.setProperty("display", "block", "important"), o.position = "absolute", o.top = "0", o.left = "0", o.visibility = "hidden", e && "srcdoc" in c ? c.srcdoc = e : c.src = "about:blank", u.body.appendChild(c);
                  var a = function() {
                    var t, e;
                    r || ((null == (e = null == (t = c.contentWindow) ? void 0 : t.document) ? void 0 : e.readyState) === "complete" ? i() : setTimeout(a, 10))
                  };
                  a()
                })];
              case 5:
                o.sent(), o.label = 6;
              case 6:
                if (null == (i = null == (r = c.contentWindow) ? void 0 : r.document) ? void 0 : i.body) return [3, 8];
                return [4, s(n)];
              case 7:
                return o.sent(), [3, 6];
              case 8:
                return [4, t(c, c.contentWindow)];
              case 9:
                return [2, o.sent()];
              case 10:
                return null == (a = c.parentNode) || a.removeChild(c), [7];
              case 11:
                return [2]
            }
          })
        })
      }
      var G = ["monospace", "sans-serif", "serif"],
        B = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

      function T(t) {
        return t.toDataURL()
      }

      function O() {
        var t = screen;
        return [A(b(t.availTop), null), A(b(t.width) - b(t.availWidth) - A(b(t.availLeft), 0), null), A(b(t.height) - b(t.availHeight) - A(b(t.availTop), 0), null), A(b(t.availLeft), null)]
      }

      function R(t) {
        for (var e = 0; e < 4; ++e)
          if (t[e]) return !1;
        return !0
      }

      function x(t) {
        t.style.setProperty("display", "block", "important")
      }

      function M(t) {
        return matchMedia("(inverted-colors: ".concat(t, ")")).matches
      }

      function V(t) {
        return matchMedia("(forced-colors: ".concat(t, ")")).matches
      }

      function j(t) {
        return matchMedia("(prefers-contrast: ".concat(t, ")")).matches
      }

      function F(t) {
        return matchMedia("(prefers-reduced-motion: ".concat(t, ")")).matches
      }

      function D(t) {
        return matchMedia("(dynamic-range: ".concat(t, ")")).matches
      }
      var K = Math,
        W = function() {
          return 0
        },
        U = {
          default: [],
          apple: [{
            font: "-apple-system-body"
          }],
          serif: [{
            fontFamily: "serif"
          }],
          sans: [{
            fontFamily: "sans-serif"
          }],
          mono: [{
            fontFamily: "monospace"
          }],
          min: [{
            fontSize: "1px"
          }],
          system: [{
            fontFamily: "system-ui"
          }]
        },
        Y = {
          fonts: function() {
            return _(function(t, e) {
              var n = e.document,
                r = n.body;
              r.style.fontSize = "48px";
              var i = n.createElement("div"),
                o = {},
                a = {},
                s = function(t) {
                  var e = n.createElement("span"),
                    r = e.style;
                  return r.position = "absolute", r.top = "0", r.left = "0", r.fontFamily = t, e.textContent = "mmMwWLliI0O&1", i.appendChild(e), e
                },
                u = G.map(s),
                c = function() {
                  for (var t = {}, e = function(e) {
                      t[e] = G.map(function(t) {
                        return s("'".concat(e, "',").concat(t))
                      })
                    }, n = 0; n < B.length; n++) e(B[n]);
                  return t
                }();
              r.appendChild(i);
              for (var l = 0; l < G.length; l++) o[G[l]] = u[l].offsetWidth, a[G[l]] = u[l].offsetHeight;
              return B.filter(function(t) {
                var e;
                return e = c[t], G.some(function(t, n) {
                  return e[n].offsetWidth !== o[t] || e[n].offsetHeight !== a[t]
                })
              })
            })
          },
          domBlockers: function(t) {
            var e = (void 0 === t ? {} : t).debug;
            return (0, o.sH)(this, void 0, void 0, function() {
              var t, n, r, i, a;
              return (0, o.YH)(this, function(u) {
                switch (u.label) {
                  case 0:
                    var c;
                    if (!(k() || P())) return [2, void 0];
                    return n = Object.keys(t = {
                      abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', (c = atob)("I0JveC1CYW5uZXItYWRz")],
                      abpvn: [".quangcao", "#mobileCatfish", c("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
                      adBlockFinland: [".mainostila", c("LnNwb25zb3JpdA=="), ".ylamainos", c("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
                      adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", c("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
                      adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", c("LmhlYWRlci1ibG9ja2VkLWFk"), c("I2FkX2Jsb2NrZXI=")],
                      adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
                      adGuardBase: [".BetterJsPopOverlay", c("I2FkXzMwMFgyNTA="), c("I2Jhbm5lcmZsb2F0MjI="), c("I2NhbXBhaWduLWJhbm5lcg=="), c("I0FkLUNvbnRlbnQ=")],
                      adGuardChinese: [c("LlppX2FkX2FfSA=="), c("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", c("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), c("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
                      adGuardFrench: ["#pavePub", c("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", c("LmFkc19iYW4=")],
                      adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
                      adGuardJapanese: ["#kauli_yad_1", c("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), c("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), c("LmFkZ29vZ2xl"), c("Ll9faXNib29zdFJldHVybkFk")],
                      adGuardMobile: [c("YW1wLWF1dG8tYWRz"), c("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", c("I2FkX2ludmlld19hcmVh")],
                      adGuardRussian: [c("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), c("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', c("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
                      adGuardSocial: [c("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), c("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
                      adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
                      adGuardTrackingProtection: ["#qoo-counter", c("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), c("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), c("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
                      adGuardTurkish: ["#backkapat", c("I3Jla2xhbWk="), c("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), c("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), c("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
                      bulgarian: [c("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
                      easyList: [".yb-floorad", c("LndpZGdldF9wb19hZHNfd2lkZ2V0"), c("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", c("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
                      easyListChina: [c("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), c("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
                      easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", c("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
                      easyListCzechSlovak: ["#onlajny-stickers", c("I3Jla2xhbW5pLWJveA=="), c("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", c("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
                      easyListDutch: [c("I2FkdmVydGVudGll"), c("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", c("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
                      easyListGermany: ["#SSpotIMPopSlider", c("LnNwb25zb3JsaW5rZ3J1ZW4="), c("I3dlcmJ1bmdza3k="), c("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), c("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
                      easyListItaly: [c("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", c("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
                      easyListLithuania: [c("LnJla2xhbW9zX3RhcnBhcw=="), c("LnJla2xhbW9zX251b3JvZG9z"), c("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), c("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), c("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
                      estonian: [c("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
                      fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
                      fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
                      fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
                      fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
                      frellwitSwedish: [c("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), c("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", c("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
                      greekAdBlock: [c("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), c("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), c("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
                      hungarian: ["#cemp_doboz", ".optimonk-iframe-container", c("LmFkX19tYWlu"), c("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
                      iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
                      icelandicAbp: [c("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
                      latvian: [c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
                      listKr: [c("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), c("I2xpdmVyZUFkV3JhcHBlcg=="), c("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), c("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
                      listeAr: [c("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", c("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), c("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), c("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
                      listeFr: [c("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), c("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), c("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
                      officialPolish: ["#ceneo-placeholder-ceneo-12", c("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), c("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), c("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), c("ZGl2I3NrYXBpZWNfYWQ=")],
                      ro: [c("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), c("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), c("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
                      ruAd: [c("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), c("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), c("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
                      thaiAds: ["a[href*=macau-uta-popup]", c("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), c("LmFkczMwMHM="), ".bumq", ".img-kosana"],
                      webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", c("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
                    }), [4, function(t) {
                      var e;
                      return (0, o.sH)(this, void 0, void 0, function() {
                        var n, r, i, a, u, c, l;
                        return (0, o.YH)(this, function(o) {
                          switch (o.label) {
                            case 0:
                              for (r = (n = document).createElement("div"), i = Array(t.length), a = {}, x(r), u = 0; u < t.length; ++u) "DIALOG" === (c = function(t) {
                                for (var e = function(t) {
                                    for (var e, n, r = "Unexpected syntax '".concat(t, "'"), i = /^\s*([a-z-]*)(.*)$/i.exec(t), o = i[1] || void 0, a = {}, s = /([.:#][\w-]+|\[.+?\])/gi, u = function(t, e) {
                                        a[t] = a[t] || [], a[t].push(e)
                                      };;) {
                                      var c = s.exec(i[2]);
                                      if (!c) break;
                                      var l = c[0];
                                      switch (l[0]) {
                                        case ".":
                                          u("class", l.slice(1));
                                          break;
                                        case "#":
                                          u("id", l.slice(1));
                                          break;
                                        case "[":
                                          var d = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(l);
                                          if (d) u(d[1], null != (n = null != (e = d[4]) ? e : d[5]) ? n : "");
                                          else throw Error(r);
                                          break;
                                        default:
                                          throw Error(r)
                                      }
                                    }
                                    return [o, a]
                                  }(t), n = e[0], r = e[1], i = document.createElement(null != n ? n : "div"), o = 0, a = Object.keys(r); o < a.length; o++) {
                                  var s = a[o],
                                    u = r[s].join(" ");
                                  "style" === s ? function(t, e) {
                                    for (var n = 0, r = e.split(";"); n < r.length; n++) {
                                      var i = r[n],
                                        o = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(i);
                                      if (o) {
                                        var a = o[1],
                                          s = o[2],
                                          u = o[4];
                                        t.setProperty(a, s, u || "")
                                      }
                                    }
                                  }(i.style, u) : i.setAttribute(s, u)
                                }
                                return i
                              }(t[u])).tagName && c.show(), x(l = n.createElement("div")), l.appendChild(c), r.appendChild(l), i[u] = c;
                              o.label = 1;
                            case 1:
                              if (n.body) return [3, 3];
                              return [4, s(50)];
                            case 2:
                              return o.sent(), [3, 1];
                            case 3:
                              n.body.appendChild(r);
                              try {
                                for (u = 0; u < t.length; ++u) i[u].offsetParent || (a[t[u]] = !0)
                              } finally {
                                null == (e = r.parentNode) || e.removeChild(r)
                              }
                              return [2, a]
                          }
                        })
                      })
                    }((a = []).concat.apply(a, n.map(function(e) {
                      return t[e]
                    })))];
                  case 1:
                    return r = u.sent(), e && function(t, e) {
                      for (var n = "DOM blockers debug:\n```", r = 0, i = Object.keys(t); r < i.length; r++) {
                        var o = i[r];
                        n += "\n".concat(o, ":");
                        for (var a = 0, s = t[o]; a < s.length; a++) {
                          var u = s[a];
                          n += "\n  ".concat(e[u] ? "\uD83D\uDEAB" : "➡️", " ").concat(u)
                        }
                      }
                      console.log("".concat(n, "\n```"))
                    }(t, r), (i = n.filter(function(e) {
                      var n = t[e];
                      return C(n.map(function(t) {
                        return r[t]
                      })) > .6 * n.length
                    })).sort(), [2, i]
                }
              })
            })
          },
          fontPreferences: function() {
            var t, e;
            return t = function(t, e) {
              for (var n = {}, r = {}, i = 0, o = Object.keys(U); i < o.length; i++) {
                var a = o[i],
                  s = U[a],
                  u = s[0],
                  c = void 0 === u ? {} : u,
                  l = s[1],
                  d = void 0 === l ? "mmMwWLliI0fiflO&1" : l,
                  p = t.createElement("span");
                p.textContent = d, p.style.whiteSpace = "nowrap";
                for (var m = 0, f = Object.keys(c); m < f.length; m++) {
                  var v = f[m],
                    y = c[v];
                  void 0 !== y && (p.style[v] = y)
                }
                n[a] = p, e.appendChild(t.createElement("br")), e.appendChild(p)
              }
              for (var h = 0, g = Object.keys(U); h < g.length; h++) {
                var a = g[h];
                r[a] = n[a].getBoundingClientRect().width
              }
              return r
            }, void 0 === e && (e = 4e3), _(function(n, r) {
              var i = r.document,
                a = i.body,
                s = a.style;
              s.width = "".concat(e, "px"), s.webkitTextSizeAdjust = s.textSizeAdjust = "none", w() ? a.style.zoom = "".concat(1 / r.devicePixelRatio) : k() && (a.style.zoom = "reset");
              var u = i.createElement("div");
              return u.textContent = (0, o.fX)([], Array(e / 20 | 0), !0).map(function() {
                return "word"
              }).join(" "), a.appendChild(u), t(i, a)
            }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
          },
          audio: function() {
            var t, e, n, r = window,
              i = r.OfflineAudioContext || r.webkitOfflineAudioContext;
            if (!i) return -2;
            if (k() && !N() && !(C(["DOMRectList" in (t = window), "RTCPeerConnectionIceEvent" in t, "SVGGeometryElement" in t, "ontransitioncancel" in t]) >= 3)) return -1;
            var o = new i(1, 5e3, 44100),
              a = o.createOscillator();
            a.type = "triangle", a.frequency.value = 1e4;
            var s = o.createDynamicsCompressor();
            s.threshold.value = -50, s.knee.value = 40, s.ratio.value = 12, s.attack.value = 0, s.release.value = .25, a.connect(s), s.connect(o.destination), a.start(0);
            var c = (e = o, n = function() {}, [new Promise(function(t, r) {
                var i = !1,
                  o = 0,
                  a = 0;
                e.oncomplete = function(e) {
                  return t(e.renderedBuffer)
                };
                var s = function() {
                    setTimeout(function() {
                      return r(L("timeout"))
                    }, Math.min(500, a + 5e3 - Date.now()))
                  },
                  c = function() {
                    try {
                      var t = e.startRendering();
                      switch (u(t) && d(t), e.state) {
                        case "running":
                          a = Date.now(), i && s();
                          break;
                        case "suspended":
                          !document.hidden && o++, i && o >= 3 ? r(L("suspended")) : setTimeout(c, 500)
                      }
                    } catch (t) {
                      r(t)
                    }
                  };
                c(), n = function() {
                  !i && (i = !0, a > 0 && s())
                }
              }), n]),
              l = c[0],
              p = c[1],
              m = l.then(function(t) {
                for (var e = t.getChannelData(0).subarray(4500), n = 0, r = 0; r < e.length; ++r) n += Math.abs(e[r]);
                return n
              }, function(t) {
                if ("timeout" === t.name || "suspended" === t.name) return -3;
                throw t
              });
            return d(m),
              function() {
                return p(), m
              }
          },
          screenFrame: function() {
            var t = this,
              e = function() {
                var t = this;
                if (void 0 === i) {
                  var e = function() {
                    var t = O();
                    R(t) ? i = setTimeout(e, 2500) : (r = t, i = void 0)
                  };
                  e()
                }
                return function() {
                  return (0, o.sH)(t, void 0, void 0, function() {
                    var t;
                    return (0, o.YH)(this, function(e) {
                      switch (e.label) {
                        case 0:
                          var n, i;
                          if (!R(t = O())) return [3, 2];
                          if (r) return [2, (0, o.fX)([], r, !0)];
                          if (!((n = document).fullscreenElement || n.msFullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement)) return [3, 2];
                          return [4, ((i = document).exitFullscreen || i.msExitFullscreen || i.mozCancelFullScreen || i.webkitExitFullscreen).call(i)];
                        case 1:
                          e.sent(), t = O(), e.label = 2;
                        case 2:
                          return R(t) || (r = t), [2, t]
                      }
                    })
                  })
                }
              }();
            return function() {
              return (0, o.sH)(t, void 0, void 0, function() {
                var t, n;
                return (0, o.YH)(this, function(r) {
                  switch (r.label) {
                    case 0:
                      return [4, e()];
                    case 1:
                      return t = r.sent(), [2, [(n = function(t) {
                        return null === t ? null : I(t, 10)
                      })(t[0]), n(t[1]), n(t[2]), n(t[3])]]
                  }
                })
              })
            }
          },
          osCpu: function() {
            return navigator.oscpu
          },
          languages: function() {
            var t, e = navigator,
              n = [],
              r = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
            if (void 0 !== r && n.push([r]), Array.isArray(e.languages)) w() && C([!("MediaSettingsRange" in (t = window)), "RTCEncodedAudioFrame" in t, "" + t.Intl == "[object Intl]", "" + t.Reflect == "[object Reflect]"]) >= 3 || n.push(e.languages);
            else if ("string" == typeof e.languages) {
              var i = e.languages;
              i && n.push(i.split(","))
            }
            return n
          },
          colorDepth: function() {
            return window.screen.colorDepth
          },
          deviceMemory: function() {
            return A(b(navigator.deviceMemory), void 0)
          },
          screenResolution: function() {
            var t = screen,
              e = function(t) {
                return A(g(t), null)
              },
              n = [e(t.width), e(t.height)];
            return n.sort().reverse(), n
          },
          hardwareConcurrency: function() {
            return A(g(navigator.hardwareConcurrency), void 0)
          },
          timezone: function() {
            var t, e, n = null == (e = window.Intl) ? void 0 : e.DateTimeFormat;
            if (n) {
              var r = new n().resolvedOptions().timeZone;
              if (r) return r
            }
            var i = -Math.max(b(new Date(t = new Date().getFullYear(), 0, 1).getTimezoneOffset()), b(new Date(t, 6, 1).getTimezoneOffset()));
            return "UTC".concat(i >= 0 ? "+" : "").concat(Math.abs(i))
          },
          sessionStorage: function() {
            try {
              return !!window.sessionStorage
            } catch (t) {
              return !0
            }
          },
          localStorage: function() {
            try {
              return !!window.localStorage
            } catch (t) {
              return !0
            }
          },
          indexedDB: function() {
            var t, e;
            if (!(S() || C(["msWriteProfilerMark" in (t = window), "MSStream" in t, "msLaunchUri" in (e = navigator), "msSaveBlob" in e]) >= 3 && !S())) try {
              return !!window.indexedDB
            } catch (t) {
              return !0
            }
          },
          openDatabase: function() {
            return !!window.openDatabase
          },
          cpuClass: function() {
            return navigator.cpuClass
          },
          platform: function() {
            var t = navigator.platform;
            return "MacIntel" === t && k() && !N() ? ! function() {
              if ("iPad" === navigator.platform) return !0;
              var t = screen,
                e = t.width / t.height;
              return C(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, e > .65 && e < 1.53]) >= 2
            }() ? "iPhone" : "iPad" : t
          },
          plugins: function() {
            var t = navigator.plugins;
            if (t) {
              for (var e = [], n = 0; n < t.length; ++n) {
                var r = t[n];
                if (r) {
                  for (var i = [], o = 0; o < r.length; ++o) {
                    var a = r[o];
                    i.push({
                      type: a.type,
                      suffixes: a.suffixes
                    })
                  }
                  e.push({
                    name: r.name,
                    description: r.description,
                    mimeTypes: i
                  })
                }
              }
              return e
            }
          },
          canvas: function() {
            var t, e, n, r = !1,
              i = ((t = document.createElement("canvas")).width = 1, t.height = 1, [t, t.getContext("2d")]),
              o = i[0],
              a = i[1];
            if (s = o, !(a && s.toDataURL)) e = n = "";
            else {
              (u = a).rect(0, 0, 10, 10), u.rect(2, 2, 6, 6), r = !u.isPointInPath(5, 5, "evenodd"), c = o, l = a, c.width = 240, c.height = 60, l.textBaseline = "alphabetic", l.fillStyle = "#f60", l.fillRect(100, 1, 62, 20), l.fillStyle = "#069", l.font = '11pt "Times New Roman"', d = "Cwm fjordbank gly ".concat(String.fromCharCode(55357, 56835)), l.fillText(d, 2, 15), l.fillStyle = "rgba(102, 204, 0, 0.2)", l.font = "18pt Arial", l.fillText(d, 4, 45);
              var s, u, c, l, d, p = T(o);
              p !== T(o) ? e = n = "unstable" : (n = p, function(t, e) {
                t.width = 122, t.height = 110, e.globalCompositeOperation = "multiply";
                for (var n = 0, r = [
                    ["#f2f", 40, 40],
                    ["#2ff", 80, 40],
                    ["#ff2", 60, 80]
                  ]; n < r.length; n++) {
                  var i = r[n],
                    o = i[0],
                    a = i[1],
                    s = i[2];
                  e.fillStyle = o, e.beginPath(), e.arc(a, s, 40, 0, 2 * Math.PI, !0), e.closePath(), e.fill()
                }
                e.fillStyle = "#f9c", e.arc(60, 60, 60, 0, 2 * Math.PI, !0), e.arc(60, 60, 20, 0, 2 * Math.PI, !0), e.fill("evenodd")
              }(o, a), e = T(o))
            }
            return {
              winding: r,
              geometry: e,
              text: n
            }
          },
          touchSupport: function() {
            var t, e = navigator,
              n = 0;
            void 0 !== e.maxTouchPoints ? n = g(e.maxTouchPoints) : void 0 !== e.msMaxTouchPoints && (n = e.msMaxTouchPoints);
            try {
              document.createEvent("TouchEvent"), t = !0
            } catch (e) {
              t = !1
            }
            return {
              maxTouchPoints: n,
              touchEvent: t,
              touchStart: "ontouchstart" in window
            }
          },
          vendor: function() {
            return navigator.vendor || ""
          },
          vendorFlavors: function() {
            for (var t = [], e = 0, n = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; e < n.length; e++) {
              var r = n[e],
                i = window[r];
              i && "object" == typeof i && t.push(r)
            }
            return t.sort()
          },
          cookiesEnabled: function() {
            var t = document;
            try {
              t.cookie = "cookietest=1; SameSite=Strict;";
              var e = -1 !== t.cookie.indexOf("cookietest=");
              return t.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", e
            } catch (t) {
              return !1
            }
          },
          colorGamut: function() {
            for (var t = 0, e = ["rec2020", "p3", "srgb"]; t < e.length; t++) {
              var n = e[t];
              if (matchMedia("(color-gamut: ".concat(n, ")")).matches) return n
            }
          },
          invertedColors: function() {
            return !!M("inverted") || !M("none") && void 0
          },
          forcedColors: function() {
            return !!V("active") || !V("none") && void 0
          },
          monochrome: function() {
            if (matchMedia("(min-monochrome: 0)").matches) {
              for (var t = 0; t <= 100; ++t)
                if (matchMedia("(max-monochrome: ".concat(t, ")")).matches) return t;
              throw Error("Too high value")
            }
          },
          contrast: function() {
            return j("no-preference") ? 0 : j("high") || j("more") ? 1 : j("low") || j("less") ? -1 : j("forced") ? 10 : void 0
          },
          reducedMotion: function() {
            return !!F("reduce") || !F("no-preference") && void 0
          },
          hdr: function() {
            return !!D("high") || !D("standard") && void 0
          },
          math: function() {
            var t = K.acos || W,
              e = K.acosh || W,
              n = K.asin || W,
              r = K.asinh || W,
              i = K.atanh || W,
              o = K.atan || W,
              a = K.sin || W,
              s = K.sinh || W,
              u = K.cos || W,
              c = K.cosh || W,
              l = K.tan || W,
              d = K.tanh || W,
              p = K.exp || W,
              m = K.expm1 || W,
              f = K.log1p || W;
            return {
              acos: t(.12312423423423424),
              acosh: e(1e308),
              acoshPf: K.log(1e154 + K.sqrt(1e154 * 1e154 - 1)),
              asin: n(.12312423423423424),
              asinh: r(1),
              asinhPf: K.log(1 + K.sqrt(2)),
              atanh: i(.5),
              atanhPf: K.log(3) / 2,
              atan: o(.5),
              sin: a(-1e300),
              sinh: s(1),
              sinhPf: K.exp(1) - 1 / K.exp(1) / 2,
              cos: u(10.000000000123),
              cosh: c(1),
              coshPf: (K.exp(1) + 1 / K.exp(1)) / 2,
              tan: l(-1e300),
              tanh: d(1),
              tanhPf: (K.exp(2) - 1) / (K.exp(2) + 1),
              exp: p(1),
              expm1: m(1),
              expm1Pf: K.exp(1) - 1,
              log1p: f(10),
              log1pPf: K.log(11),
              powPI: K.pow(K.PI, -100)
            }
          },
          videoCard: function() {
            var t, e = document.createElement("canvas"),
              n = null != (t = e.getContext("webgl")) ? t : e.getContext("experimental-webgl");
            if (n && "getExtension" in n) {
              var r = n.getExtension("WEBGL_debug_renderer_info");
              if (r) return {
                vendor: (n.getParameter(r.UNMASKED_VENDOR_WEBGL) || "").toString(),
                renderer: (n.getParameter(r.UNMASKED_RENDERER_WEBGL) || "").toString()
              }
            }
          },
          pdfViewerEnabled: function() {
            return navigator.pdfViewerEnabled
          },
          architecture: function() {
            var t = new Float32Array(1),
              e = new Uint8Array(t.buffer);
            return t[0] = 1 / 0, t[0] = t[0] - t[0], e[3]
          }
        };

      function H(t) {
        return JSON.stringify(t, function(t, e) {
          if (e instanceof Error) {
            var n;
            return (0, o.Cl)({
              name: e.name,
              message: e.message,
              stack: null == (n = e.stack) ? void 0 : n.split("\n")
            }, e)
          }
          return e
        }, 2)
      }

      function Z(t) {
        return function(t, e) {
          e = e || 0;
          var n, r = (t = t || "").length % 16,
            i = t.length - r,
            o = [0, e],
            a = [0, e],
            s = [0, 0],
            u = [0, 0],
            c = [0x87c37b91, 0x114253d5],
            l = [0x4cf5ad43, 0x2745937f];
          for (n = 0; n < i; n += 16) s = [255 & t.charCodeAt(n + 4) | (255 & t.charCodeAt(n + 5)) << 8 | (255 & t.charCodeAt(n + 6)) << 16 | (255 & t.charCodeAt(n + 7)) << 24, 255 & t.charCodeAt(n) | (255 & t.charCodeAt(n + 1)) << 8 | (255 & t.charCodeAt(n + 2)) << 16 | (255 & t.charCodeAt(n + 3)) << 24], u = [255 & t.charCodeAt(n + 12) | (255 & t.charCodeAt(n + 13)) << 8 | (255 & t.charCodeAt(n + 14)) << 16 | (255 & t.charCodeAt(n + 15)) << 24, 255 & t.charCodeAt(n + 8) | (255 & t.charCodeAt(n + 9)) << 8 | (255 & t.charCodeAt(n + 10)) << 16 | (255 & t.charCodeAt(n + 11)) << 24], s = f(s = m(s, c), 31), o = p(o = f(o = y(o, s = m(s, l)), 27), a), o = p(m(o, [0, 5]), [0, 0x52dce729]), u = f(u = m(u, l), 33), a = p(a = f(a = y(a, u = m(u, c)), 31), o), a = p(m(a, [0, 5]), [0, 0x38495ab5]);
          switch (s = [0, 0], u = [0, 0], r) {
            case 15:
              u = y(u, v([0, t.charCodeAt(n + 14)], 48));
            case 14:
              u = y(u, v([0, t.charCodeAt(n + 13)], 40));
            case 13:
              u = y(u, v([0, t.charCodeAt(n + 12)], 32));
            case 12:
              u = y(u, v([0, t.charCodeAt(n + 11)], 24));
            case 11:
              u = y(u, v([0, t.charCodeAt(n + 10)], 16));
            case 10:
              u = y(u, v([0, t.charCodeAt(n + 9)], 8));
            case 9:
              u = f(u = m(u = y(u, [0, t.charCodeAt(n + 8)]), l), 33), a = y(a, u = m(u, c));
            case 8:
              s = y(s, v([0, t.charCodeAt(n + 7)], 56));
            case 7:
              s = y(s, v([0, t.charCodeAt(n + 6)], 48));
            case 6:
              s = y(s, v([0, t.charCodeAt(n + 5)], 40));
            case 5:
              s = y(s, v([0, t.charCodeAt(n + 4)], 32));
            case 4:
              s = y(s, v([0, t.charCodeAt(n + 3)], 24));
            case 3:
              s = y(s, v([0, t.charCodeAt(n + 2)], 16));
            case 2:
              s = y(s, v([0, t.charCodeAt(n + 1)], 8));
            case 1:
              s = f(s = m(s = y(s, [0, t.charCodeAt(n)]), c), 31), o = y(o, s = m(s, l))
          }
          return o = p(o = y(o, [0, t.length]), a = y(a, [0, t.length])), a = p(a, o), o = p(o = h(o), a = h(a)), a = p(a, o), ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8)
        }(function(t) {
          for (var e = "", n = 0, r = Object.keys(t).sort(); n < r.length; n++) {
            var i = r[n],
              o = t[i],
              a = o.error ? "error" : JSON.stringify(o.value);
            e += "".concat(e ? "|" : "").concat(i.replace(/([:|\\])/g, "\\$1"), ":").concat(a)
          }
          return e
        }(t))
      }
      var z = {
        load: function(t) {
          var e = void 0 === t ? {} : t,
            n = e.delayFallback,
            r = e.debug,
            i = e.monitoring,
            u = void 0 === i || i;
          return (0, o.sH)(this, void 0, void 0, function() {
            return (0, o.YH)(this, function(t) {
              var e, i, p, m, f, v, y, h, g, b;
              switch (t.label) {
                case 0:
                  return u && function() {
                    if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
                      var t = new XMLHttpRequest;
                      t.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(a, "/npm-monitoring"), !0), t.send()
                    } catch (t) {
                      console.error(t)
                    }
                  }(), [4, (void 0 === (e = n) && (e = 50), i = e, p = 2 * e, (m = window.requestIdleCallback) ? new Promise(function(t) {
                    return m.call(window, function() {
                      return t()
                    }, {
                      timeout: p
                    })
                  }) : s(Math.min(i, p)))];
                case 1:
                  return t.sent(), f = {
                    debug: r
                  }, v = [], h = l(y = Object.keys(Y).filter(function(t) {
                    return ! function(t, e) {
                      for (var n = 0, r = t.length; n < r; ++n)
                        if (t[n] === e) return !0;
                      return !1
                    }(v, t)
                  }), function(t) {
                    var e, n;
                    return e = Y[t], d(n = new Promise(function(t) {
                        var n = Date.now();
                        c(e.bind(null, f), function() {
                          for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                          var i = Date.now() - n;
                          if (!e[0]) return t(function() {
                            return {
                              error: E(e[1]),
                              duration: i
                            }
                          });
                          var o = e[1];
                          if ("function" != typeof o) return t(function() {
                            return {
                              value: o,
                              duration: i
                            }
                          });
                          t(function() {
                            return new Promise(function(t) {
                              var e = Date.now();
                              c(o, function() {
                                for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                var o = i + Date.now() - e;
                                if (!n[0]) return t({
                                  error: E(n[1]),
                                  duration: o
                                });
                                t({
                                  value: n[1],
                                  duration: o
                                })
                              })
                            })
                          })
                        })
                      })),
                      function() {
                        return n.then(function(t) {
                          return t()
                        })
                      }
                  }), d(h), [2, (g = function() {
                    return (0, o.sH)(this, void 0, void 0, function() {
                      var t, e, n;
                      return (0, o.YH)(this, function(r) {
                        switch (r.label) {
                          case 0:
                            return [4, h];
                          case 1:
                            return [4, l(r.sent(), function(t) {
                              var e = t();
                              return d(e), e
                            })];
                          case 2:
                            return [4, Promise.all(r.sent())];
                          case 3:
                            for (n = 0, t = r.sent(), e = {}; n < y.length; ++n) e[y[n]] = t[n];
                            return [2, e]
                        }
                      })
                    })
                  }, b = Date.now(), {
                    get: function(t) {
                      return (0, o.sH)(this, void 0, void 0, function() {
                        var e, n, i;
                        return (0, o.YH)(this, function(o) {
                          switch (o.label) {
                            case 0:
                              return e = Date.now(), [4, g()];
                            case 1:
                              var s, u, c, l;
                              return i = {
                                get visitorId() {
                                  return void 0 === l && (l = Z(this.components)), l
                                },
                                set visitorId(visitorId) {
                                  l = visitorId
                                },
                                confidence: (c = I(.99 + .01 * (u = function(t) {
                                  if (P()) return .4;
                                  if (k()) return N() ? .5 : .3;
                                  var e = t.platform.value || "";
                                  return /^Win/.test(e) ? .6 : /^Mac/.test(e) ? .5 : .7
                                }(s = n = o.sent())), 1e-4), {
                                  score: u,
                                  comment: "$ if upgrade to Pro: https://fpjs.dev/pro".replace(/\$/g, "".concat(c))
                                }),
                                components: s,
                                version: a
                              }, (r || (null == t ? void 0 : t.debug)) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(i.version, "\nuserAgent: ").concat(navigator.userAgent, "\ntimeBetweenLoadAndGet: ").concat(e - b, "\nvisitorId: ").concat(i.visitorId, "\ncomponents: ").concat(H(n), "\n```")), [2, i]
                          }
                        })
                      })
                    }
                  })]
              }
            })
          })
        },
        hashComponents: Z,
        componentsToDebugString: H
      }
    },
    56541: (t, e, n) => {
      "use strict";
      n.d(e, {
        Cl: () => r,
        Tt: () => i,
        YH: () => a,
        fX: () => u,
        gz: () => s,
        sH: () => o
      });
      var r = function() {
        return (r = Object.assign || function(t) {
          for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t
        }).apply(this, arguments)
      };

      function i(t, e) {
        var n = {};
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && 0 > e.indexOf(r) && (n[r] = t[r]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols)
          for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++) 0 > e.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
        return n
      }

      function o(t, e, n, r) {
        return new(n || (n = Promise))(function(i, o) {
          function a(t) {
            try {
              u(r.next(t))
            } catch (t) {
              o(t)
            }
          }

          function s(t) {
            try {
              u(r.throw(t))
            } catch (t) {
              o(t)
            }
          }

          function u(t) {
            var e;
            t.done ? i(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
              t(e)
            })).then(a, s)
          }
          u((r = r.apply(t, e || [])).next())
        })
      }

      function a(t, e) {
        var n, r, i, o = {
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
          return function(u) {
            var c = [s, u];
            if (n) throw TypeError("Generator is already executing.");
            for (; a && (a = 0, c[0] && (o = 0)), o;) try {
              if (n = 1, r && (i = 2 & c[0] ? r.return : c[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, c[1])).done) return i;
              switch (r = 0, i && (c = [2 & c[0], i.value]), c[0]) {
                case 0:
                case 1:
                  i = c;
                  break;
                case 4:
                  return o.label++, {
                    value: c[1],
                    done: !1
                  };
                case 5:
                  o.label++, r = c[1], c = [0];
                  continue;
                case 7:
                  c = o.ops.pop(), o.trys.pop();
                  continue;
                default:
                  if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === c[0] || 2 === c[0])) {
                    o = 0;
                    continue
                  }
                  if (3 === c[0] && (!i || c[1] > i[0] && c[1] < i[3])) {
                    o.label = c[1];
                    break
                  }
                  if (6 === c[0] && o.label < i[1]) {
                    o.label = i[1], i = c;
                    break
                  }
                  if (i && o.label < i[2]) {
                    o.label = i[2], o.ops.push(c);
                    break
                  }
                  i[2] && o.ops.pop(), o.trys.pop();
                  continue
              }
              c = e.call(t, o)
            } catch (t) {
              c = [6, t], r = 0
            } finally {
              n = i = 0
            }
            if (5 & c[0]) throw c[1];
            return {
              value: c[0] ? c[1] : void 0,
              done: !0
            }
          }
        }
      }

      function s() {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(function(t, e) {
          var n = "function" == typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var r, i, o = n.call(t),
            a = [];
          try {
            for (;
              (void 0 === e || e-- > 0) && !(r = o.next()).done;) a.push(r.value)
          } catch (t) {
            i = {
              error: t
            }
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o)
            } finally {
              if (i) throw i.error
            }
          }
          return a
        }(arguments[e]));
        return t
      }

      function u(t, e, n) {
        if (n || 2 == arguments.length)
          for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
        return t.concat(r || Array.prototype.slice.call(e))
      }
      "function" == typeof SuppressedError && SuppressedError
    },
    58373: (t, e, n) => {
      "use strict";
      let r;
      n.d(e, {
        A: () => s
      });
      let i = "u" > typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto),
        o = new Uint8Array(16),
        a = [];
      for (let t = 0; t < 256; ++t) a.push((t + 256).toString(16).slice(1));
      let s = function(t, e, n) {
        if (i && !e && !t) return i();
        let s = (t = t || {}).random ?? t.rng?.() ?? function() {
          if (!r) {
            if ("u" < typeof crypto || !crypto.getRandomValues) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            r = crypto.getRandomValues.bind(crypto)
          }
          return r(o)
        }();
        if (s.length < 16) throw Error("Random bytes length must be >= 16");
        if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, e) {
          if ((n = n || 0) < 0 || n + 16 > e.length) throw RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);
          for (let t = 0; t < 16; ++t) e[n + t] = s[t];
          return e
        }
        return function(t, e = 0) {
          return (a[t[e + 0]] + a[t[e + 1]] + a[t[e + 2]] + a[t[e + 3]] + "-" + a[t[e + 4]] + a[t[e + 5]] + "-" + a[t[e + 6]] + a[t[e + 7]] + "-" + a[t[e + 8]] + a[t[e + 9]] + "-" + a[t[e + 10]] + a[t[e + 11]] + a[t[e + 12]] + a[t[e + 13]] + a[t[e + 14]] + a[t[e + 15]]).toLowerCase()
        }(s)
      }
    },
    61046: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0, e.default = function() {
        for (var t, e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
        "u" > typeof window && (void 0 === window.gtag && (window.dataLayer = window.dataLayer || [], window.gtag = function() {
          window.dataLayer.push(arguments)
        }), (t = window).gtag.apply(t, n))
      }
    },
    64717: (t, e, n) => {
      "use strict";
      n.d(e, {
        o: () => o
      }), (r = i || (i = {})).EmailPassword = "EmailPassword", r.Facebook = "Facebook", r.Google = "Google";
      var r, i, o = function() {
        function t() {}
        return Object.defineProperty(t, "isServer", {
          get: function() {
            return "u" < typeof window
          },
          enumerable: !1,
          configurable: !0
        }), t.matchWidth = function(e, n, r) {
          if (void 0 === r && (r = !1), t.isServer) return r;
          var i = "(".concat(e, ": ").concat(n, "px)");
          return window.matchMedia(i).matches
        }, t.clone = function(t) {
          return JSON.parse(JSON.stringify(t))
        }, t.isNumber = function(t) {
          return "number" == typeof t
        }, t.isString = function(t) {
          return "string" == typeof t
        }, t.isBoolean = function(t) {
          return "boolean" == typeof t
        }, t.isAdBlockEnabled = function() {
          return void 0 === window.__ark_ads__ || "function" != typeof window.__ark_ads__.AdVideo
        }, t.getNowTimestampUTC = function() {
          return new Date().getTime()
        }, t.fixMissingLang = function(t) {
          return "es" === t || "de" === t ? "en" : t
        }, t.debounce = function(t, e) {
          var n, r = this;
          return function() {
            for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
            clearTimeout(n), n = window.setTimeout(function() {
              t.apply(r, i)
            }, e)
          }
        }, t.loadableRetry = function(e, n) {
          var r = void 0 === n ? {} : n,
            i = r.retries,
            o = void 0 === i ? 3 : i,
            a = r.interval,
            s = void 0 === a ? 500 : a,
            u = r.exponentialBackoff,
            c = void 0 === u || u;
          return new Promise(function(n, r) {
            e().then(n).catch(function(i) {
              setTimeout(function() {
                0 === o ? r(i) : t.loadableRetry(e, {
                  retries: o - 1,
                  interval: c ? 2 * s : s
                }).then(n, r)
              }, s)
            })
          })
        }, t
      }()
    },
    65475: (t, e, n) => {
      "use strict";
      n.d(e, {
        v: () => d
      });
      var r, i, o, a, s = n(24294),
        u = n(88058);
      (r = o || (o = {})).SPECIAL_MARK = "not provided by eagle yet", r.BOOST_INTERNAL_PRICE = "not provided by games yet", (i = a || (a = {})).gemShopImpression = "virtualItemShopImpression", i.gemPurchaseClick = "virtualItemPurchaseClick", i.gemPurchaseNextStep = "virtualItemPurchaseNextStep", i.gemPurchaseChangeGems = "virtualItemPurchaseChange", i.gemPurchaseSuccess = "virtualItemPurchaseSuccess", i.gemSkipAdButton = "virtualItemSkipAdButton", i.gemSpendingSkipAdSuccess = "virtualItemSpendingSkipAdSuccess", i.gemSpendingPowerUp = "virtualItemSpendingPowerUp", i.gemShopSignInUp = "virtualItemShopSignInUp", i.gemShopSubscribeBanner = "virtualItemShopSubscribeBanner", i.manageGems = "manageVirtualItems";
      var c = function() {
          function t() {}
          return t.prototype.gemShopImpression = function(t, e, n, r) {
            var i = this.newEventBuilder(t);
            return i.setName(a.gemShopImpression), i.setEventAction(u.bi.IMPRESSION), i.setNonInteraction(!1), i.setCustom("shopLocation", e), i.setCustom("isSubscriber", n), i.setCustom("userInventory", r), i.build()
          }, t.prototype.gemPurchaseClick = function(t, e) {
            var n = e.shopLocation,
              r = e.internalPrice,
              i = e.purchasableItemId,
              o = e.purchasableItemAmount,
              s = e.specialMark,
              c = e.isFirstPurchase,
              l = e.isSubscriber,
              d = e.userInventory,
              p = this.newEventBuilder(t);
            return p.setName(a.gemPurchaseClick), p.setEventAction(u.bi.CLICK), p.setNonInteraction(!1), p.setCustom("shopLocation", n), p.setCustom("internalPrice", r), p.setCustom("purchasableItemId", i), p.setCustom("purchasableItemAmount", o), p.setCustom("specialMark", s), p.setCustom("isFirstPurchase", c), p.setCustom("isSubscriber", l), p.setCustom("userInventory", d), p.build()
          }, t.prototype.gemPurchaseClickImpression = function(t, e) {
            var n = e.internalPrice,
              r = e.purchasableItemId,
              i = e.purchasableItemAmount,
              o = e.specialMark,
              s = e.shopLocation,
              c = e.isFirstPurchase,
              l = e.isSubscriber,
              d = e.userInventory,
              p = this.newEventBuilder(t);
            return p.setName(a.gemPurchaseClick), p.setEventAction(u.bi.IMPRESSION), p.setNonInteraction(!1), p.setCustom("shopLocation", s), p.setCustom("internalPrice", n), p.setCustom("purchasableItemId", r), p.setCustom("purchasableItemAmount", i), p.setCustom("specialMark", o), p.setCustom("isFirstPurchase", c), p.setCustom("isSubscriber", l), p.setCustom("userInventory", d), p.build()
          }, t.prototype.gemsPurchaseNextStepClick = function(t, e) {
            var n = e.internalPrice,
              r = e.purchasableItemId,
              i = e.purchasableItemAmount,
              o = e.specialMark,
              s = e.shopLocation,
              c = e.isFirstPurchase,
              l = e.isSubscriber,
              d = e.userInventory,
              p = this.newEventBuilder(t);
            return p.setName(a.gemPurchaseNextStep), p.setEventAction(u.bi.CLICK), p.setNonInteraction(!1), p.setCustom("shopLocation", s), p.setCustom("internalPrice", n), p.setCustom("purchasableItemId", r), p.setCustom("purchasableItemAmount", i), p.setCustom("specialMark", o), p.setCustom("isFirstPurchase", c), p.setCustom("isSubscriber", l), p.setCustom("userInventory", d), p.build()
          }, t.prototype.gemsPurchaseNextStepImpression = function(t, e) {
            var n = e.internalPrice,
              r = e.purchasableItemId,
              i = e.purchasableItemAmount,
              o = e.specialMark,
              s = e.shopLocation,
              c = e.isFirstPurchase,
              l = e.isSubscriber,
              d = e.userInventory,
              p = this.newEventBuilder(t);
            return p.setName(a.gemPurchaseNextStep), p.setEventAction(u.bi.IMPRESSION), p.setNonInteraction(!1), p.setCustom("shopLocation", s), p.setCustom("internalPrice", n), p.setCustom("purchasableItemId", r), p.setCustom("purchasableItemAmount", i), p.setCustom("specialMark", o), p.setCustom("isFirstPurchase", c), p.setCustom("isSubscriber", l), p.setCustom("userInventory", d), p.build()
          }, t.prototype.gemsPurchaseChangeGems = function(t, e) {
            var n = e.shopLocation,
              r = e.internalPrice,
              i = e.purchasableItemId,
              o = e.purchasableItemAmount,
              s = e.specialMark,
              c = e.isFirstPurchase,
              l = e.isSubscriber,
              d = e.userInventory,
              p = this.newEventBuilder(t);
            return p.setName(a.gemPurchaseChangeGems), p.setEventAction(u.bi.CLICK), p.setNonInteraction(!1), p.setCustom("shopLocation", n), p.setCustom("internalPrice", r), p.setCustom("purchasableItemId", i), p.setCustom("purchasableItemAmount", o), p.setCustom("specialMark", s), p.setCustom("isFirstPurchase", c), p.setCustom("isSubscriber", l), p.setCustom("userInventory", d), p.build()
          }, t.prototype.gemsPurchaseSuccess = function(t, e) {
            var n = e.internalPrice,
              r = e.purchasableItemId,
              i = e.purchasableItemAmount,
              o = e.shopLocation,
              s = e.isFirstPurchase,
              c = e.isSubscriber,
              l = e.userInventory,
              d = this.newEventBuilder(t);
            return d.setName(a.gemPurchaseSuccess), d.setEventAction(u.bi.CLICK), d.setNonInteraction(!1), d.setCustom("shopLocation", o), d.setCustom("internalPrice", n), d.setCustom("purchasableItemId", r), d.setCustom("purchasableItemAmount", i), d.setCustom("isFirstPurchase", s), d.setCustom("isSubscriber", c), d.setCustom("userInventory", l), d.build()
          }, t.prototype.gemsPurchaseSuccessImpression = function(t, e) {
            var n = e.internalPrice,
              r = e.purchasableItemId,
              i = e.purchasableItemAmount,
              o = e.isFirstPurchase,
              s = e.isSubscriber,
              c = e.userInventory,
              l = this.newEventBuilder(t);
            return l.setName(a.gemPurchaseSuccess), l.setEventAction(u.bi.IMPRESSION), l.setNonInteraction(!1), l.setCustom("internalPrice", n), l.setCustom("purchasableItemId", r), l.setCustom("purchasableItemAmount", i), l.setCustom("isFirstPurchase", o), l.setCustom("isSubscriber", s), l.setCustom("userInventory", c), l.build()
          }, t.prototype.gemSkipAdButton = function(t, e) {
            var n = e.internalPrice,
              r = e.isSubscriber,
              i = e.userInventory,
              o = this.newEventBuilder(t);
            return o.setName(a.gemSkipAdButton), o.setEventAction(u.bi.SKIP_AD), o.setNonInteraction(!1), o.setCustom("internalPrice", n), o.setCustom("virtualItemId", "pass ads with gem"), o.setCustom("isSubscriber", r), o.setCustom("userInventory", i), o.build()
          }, t.prototype.gemSpendingSkipAdSuccess = function(t, e) {
            var n = e.internalPrice,
              r = e.isFirstSpend,
              i = e.isSubscriber,
              o = e.userInventory,
              s = this.newEventBuilder(t);
            return s.setName(a.gemSpendingSkipAdSuccess), s.setEventAction(u.bi.SKIP_AD), s.setNonInteraction(!1), s.setCustom("internalPrice", n), s.setCustom("virtualItemId", "pass ads with gem"), s.setCustom("isFirstSpend", r), s.setCustom("isSubscriber", i), s.setCustom("userInventory", o), s.build()
          }, t.prototype.gemSpendingPowerUp = function(t, e) {
            var n = e.virtualItemId,
              r = e.internalPrice,
              i = e.isFirstSpend,
              o = e.isSubscriber,
              s = e.userInventory,
              c = this.newEventBuilder(t);
            return c.setName(a.gemSpendingPowerUp), c.setEventAction(u.bi.POWER_UP), c.setNonInteraction(!1), c.setCustom("internalPrice", r), c.setCustom("virtualItemId", n), c.setCustom("isFirstSpend", i), c.setCustom("isSubscriber", o), c.setCustom("userInventory", s), c.build()
          }, t.prototype.gemShopSignInUp = function(t, e, n, r, i) {
            var o = this.newEventBuilder(t);
            return o.setName(a.gemShopSignInUp), o.setEventAction(u.bi.CLICK), o.setNonInteraction(!1), n ? o.setCustom("registrationLocation", e) : o.setCustom("loginLocation", e), o.setCustom("isSubscriber", r), o.setCustom("userInventory", i), o.build()
          }, t.prototype.gemShopSubscribeBanner = function(t, e, n) {
            var r = this.newEventBuilder(t);
            return r.setName(a.gemShopSubscribeBanner), r.setEventAction(u.bi.CLICK), r.setNonInteraction(!1), r.setCustom("isSubscriber", e), r.setCustom("userInventory", n), r.build()
          }, t.prototype.manageGems = function(t, e, n, r) {
            var i = this.newEventBuilder(t);
            return i.setName(a.manageGems), i.setEventAction(u.bi.CLICK), i.setNonInteraction(!1), i.setCustom("shopLocation", e), i.setCustom("isSubscriber", n), i.setCustom("userInventory", r), i.build()
          }, t.prototype.newEventBuilder = function(t) {
            return new s.W().baseEvent(t)
          }, t
        }(),
        l = function() {
          function t() {}
          return t.prototype.newEventBuilder = function() {
            return new s.W
          }, t.prototype.gemsPurchaseSuccess = function(t, e, n) {
            var r = this.newEventBuilder();
            return r.setEventGaCategory("virtualItemPurchaseSuccess"), r.setEventGaAction(u.bi.CLICK), r.setEventGaLabel(t), r.setCustom("price", e), r.setCustom("currency", n), r.setGaNonInteraction(!1), r.build()
          }, t
        }(),
        d = function() {
          function t() {
            this.aiAnalytics = new c, this.gaAnalytics = new l
          }
          return t.prototype.gemShopImpression = function(t, e, n, r) {
            return (0, u.cA)(null, this.aiAnalytics.gemShopImpression(t, e, n, r))
          }, t.prototype.gemPurchaseClick = function(t, e, n, r, i, a, s, c) {
            return (0, u.cA)(null, this.aiAnalytics.gemPurchaseClick(t, {
              shopLocation: e,
              internalPrice: n,
              purchasableItemId: r,
              purchasableItemAmount: i,
              specialMark: o.SPECIAL_MARK,
              isFirstPurchase: a,
              isSubscriber: s,
              userInventory: c
            }))
          }, t.prototype.gemPurchaseClickImpression = function(t, e, n, r, i, a, s, c) {
            return (0, u.cA)(null, this.aiAnalytics.gemPurchaseClickImpression(t, {
              internalPrice: e,
              purchasableItemId: n,
              purchasableItemAmount: r,
              shopLocation: i,
              specialMark: o.SPECIAL_MARK,
              isFirstPurchase: a,
              isSubscriber: s,
              userInventory: c
            }))
          }, t.prototype.gemPurchaseNextStepClick = function(t, e, n, r, i, a, s, c) {
            return (0, u.cA)(null, this.aiAnalytics.gemsPurchaseNextStepClick(t, {
              internalPrice: e,
              purchasableItemId: n,
              purchasableItemAmount: r,
              shopLocation: i,
              specialMark: o.SPECIAL_MARK,
              isFirstPurchase: a,
              isSubscriber: s,
              userInventory: c
            }))
          }, t.prototype.gemPurchaseNextStepImpression = function(t, e, n, r, i, a, s, c) {
            return (0, u.cA)(null, this.aiAnalytics.gemsPurchaseNextStepImpression(t, {
              internalPrice: e,
              purchasableItemId: n,
              purchasableItemAmount: r,
              shopLocation: i,
              specialMark: o.SPECIAL_MARK,
              isFirstPurchase: a,
              isSubscriber: s,
              userInventory: c
            }))
          }, t.prototype.gemPurchaseChangeGems = function(t, e, n, r, i, a, s, c) {
            return (0, u.cA)(null, this.aiAnalytics.gemsPurchaseChangeGems(t, {
              shopLocation: i,
              internalPrice: e,
              purchasableItemId: n,
              purchasableItemAmount: r,
              specialMark: o.SPECIAL_MARK,
              isFirstPurchase: a,
              isSubscriber: s,
              userInventory: c
            }))
          }, t.prototype.gemPurchaseSuccess = function(t, e, n, r, i, o, a, s) {
            return (0, u.cA)(this.gaAnalytics.gemsPurchaseSuccess(n, e, "USD"), this.aiAnalytics.gemsPurchaseSuccess(t, {
              internalPrice: e,
              purchasableItemId: n,
              purchasableItemAmount: r,
              shopLocation: i,
              isFirstPurchase: o,
              isSubscriber: a,
              userInventory: s
            }))
          }, t.prototype.gemPurchaseSuccessImpression = function(t, e, n, r, i, o, a) {
            return (0, u.cA)(null, this.aiAnalytics.gemsPurchaseSuccessImpression(t, {
              internalPrice: e,
              purchasableItemId: n,
              purchasableItemAmount: r,
              isFirstPurchase: i,
              isSubscriber: o,
              userInventory: a
            }))
          }, t.prototype.gemSkipAdButton = function(t, e, n, r, i) {
            return (0, u.cA)(null, this.aiAnalytics.gemSkipAdButton(t, {
              internalPrice: e,
              isFirstPurchase: n,
              isSubscriber: r,
              userInventory: i
            }))
          }, t.prototype.gemSpendingSkipAdSuccess = function(t, e, n, r, i) {
            return (0, u.cA)(null, this.aiAnalytics.gemSpendingSkipAdSuccess(t, {
              internalPrice: e,
              isFirstPurchase: n,
              isSubscriber: r,
              userInventory: i
            }))
          }, t.prototype.gemSpendingPowerUp = function(t, e, n, r, i, o) {
            return (0, u.cA)(null, this.aiAnalytics.gemSpendingPowerUp(t, {
              virtualItemId: e,
              internalPrice: n,
              isFirstPurchase: r,
              isSubscriber: i,
              userInventory: o
            }))
          }, t.prototype.gemShopSignInUp = function(t, e, n, r, i) {
            return void 0 === n && (n = !1), (0, u.cA)(null, this.aiAnalytics.gemShopSignInUp(t, e, n, r, i))
          }, t.prototype.gemShopSubscribeBanner = function(t, e, n) {
            return (0, u.cA)(null, this.aiAnalytics.gemShopSubscribeBanner(t, e, n))
          }, t.prototype.manageGems = function(t, e, n, r) {
            return (0, u.cA)(null, this.aiAnalytics.manageGems(t, e, n, r))
          }, t
        }()
    },
    69067: (t, e, n) => {
      "use strict";
      n.d(e, {
        GS: () => v,
        O4: () => f,
        bQ: () => y,
        fp: () => m,
        sx: () => p
      });
      var r = n(42221),
        i = n(12306),
        o = n(11385),
        a = n(94779),
        s = n(41641),
        u = n(88058),
        c = n(64717),
        l = n(35712),
        d = function() {
          return (d = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
          }).apply(this, arguments)
        },
        p = function(t) {
          if (!c.o.isServer) {
            if (t.ai) {
              var e = t.ai.name,
                n = d(d(d({}, t.ai.data), y()), {
                  targetingConsent: i.sj.getItem(s.QH.TARGETING_CONSENT)
                });
              l.v.info("AI - trackEvent", e, n), o.AppInsightService.trackEvent(e, d({}, n))
            }
            t.ga && a.GoogleAnalyticsService.trackEvent(t.ga.data)
          }
        },
        m = function(t) {
          return -1 !== t.indexOf("playAgain") ? u.bi.YES : u.bi.NO
        },
        f = function(t) {
          var e;
          return null != (e = new URL(t).searchParams.get("recPreviousGame")) ? e : ""
        },
        v = function(t, e, n) {
          return n ? "".concat(t, " | ").concat(e, "/").concat(n) : "".concat(t, " | ").concat(e)
        },
        y = function() {
          var t = r.qg(window.document.cookie),
            e = {};
          return ["p1s1", "p1s2", "p1s3", "p1s4", "p2s1", "p2s2", "p2s3", "p2s4", "p3", "cdn_country", "cdn_country_history"].forEach(function(n) {
            t[n] && (e[n] = t[n])
          }), e
        }
    },
    69142: (t, e, n) => {
      "use strict";
      n.d(e, {
        G: () => f
      });
      var r, i, o, a, s, u, c = n(24294),
        l = n(88058);
      (r = a || (a = {})).CARD = "card", r.PAYPAL = "paypal", r.APPLE_PAY = "applePay", r.GIFT_CARD = "giftCard", (i = s || (s = {})).first_name = "giftPaymentFirstName", i.last_name = "giftPaymentLastName", i.address1 = "giftPaymentAddress", i.city = "giftPaymentCity", i.country = "giftPaymentCountry", i.postal_code = "giftPaymentZip", i.state = "giftPaymentState", i.number = "giftPaymentCardNumber", i.year = "giftPaymentExpDate", i.month = "giftPaymentExpDate", i.cvv = "giftPaymentSecCode", (o = u || (u = {})).MONTHLY = "monthly", o.ANNUAL = "annual", o.NONE = "none", o.UNKNOWN = "unknown";
      var d = function() {
        function t() {}
        return t.prototype.newEventBuilder = function(t) {
          return new c.W().baseEvent(t)
        }, t.prototype.entryPointImpression = function(t, e) {
          var n = this.newEventBuilder(t);
          return n.setName("Subscription"), n.setEventAction(l.bi.IMPRESSION), n.setCustom("subscriptionLocation", e), n.setNonInteraction(!0), p(n), n.build()
        }, t.prototype.entryPointClick = function(t, e, n) {
          var r = this.newEventBuilder(t);
          return r.setName("Subscription"), r.setEventAction(l.bi.CLICK), r.setCustom("subscriptionLocation", e), r.setCustom("subscriptionType", n), r.setNonInteraction(!1), p(r), r.build()
        }, t.prototype.removeAdsGameScreen = function(t) {
          var e = this.newEventBuilder(t);
          return e.setName("removeAdsGameScreen"), e.setEventAction(l.bi.CLICK), e.setNonInteraction(!1), e.build()
        }, t.prototype.removeAdsAdBlockScreen = function(t) {
          var e = this.newEventBuilder(t);
          return e.setName("removeAdsAdBlockScreen"), e.setEventAction(l.bi.CLICK), e.setNonInteraction(!1), e.build()
        }, t.prototype.subscriptionNextStep = function(t, e, n, r) {
          var i = this.newEventBuilder(t);
          return i.setName("subscriptionNextStep"), i.setEventAction(l.bi.CLICK), i.setCustom("subscriptionLocation", e), i.setCustom("subscriptionType", n), i.setCustom("subscriptionPayment", r), i.setNonInteraction(!1), p(i), i.build()
        }, t.prototype.subscriptionPurchaseButton = function(t, e, n, r) {
          var i = this.newEventBuilder(t);
          return i.setName("subscriptionPurchaseButton"), i.setEventAction(l.bi.CLICK), i.setCustom("subscriptionLocation", e), i.setCustom("subscriptionType", n), i.setCustom("subscriptionPayment", r), i.setNonInteraction(!1), p(i), i.build()
        }, t.prototype.subscriptionPurchase = function(t, e, n, r, i, o) {
          var a = this.newEventBuilder(t);
          return a.setName("subscriptionPurchase"), a.setEventAction(l.bi.CLICK), a.setCustom("subscriptionLocation", e), a.setCustom("subscriptionType", n), a.setCustom("subscriptionPayment", r), a.setCustom("subscriptionId", i), o && a.setCustom("gameSlug", o), a.setNonInteraction(!1), p(a), a.build()
        }, t.prototype.manageSubscription = function(t, e) {
          var n = this.newEventBuilder(t);
          return n.setName("manageSubscription"), n.setEventAction(l.bi.CLICK), n.setCustom("subscriptionType", e), n.setNonInteraction(!1), n.build()
        }, t.prototype.renewSubscription = function(t, e) {
          var n = this.newEventBuilder(t);
          return n.setName("renewSubscription"), n.setEventAction(l.bi.CLICK), n.setCustom("subscriptionType", e), n.setNonInteraction(!1), n.build()
        }, t.prototype.cancelAutorenewal = function(t, e) {
          var n = this.newEventBuilder(t);
          return n.setName("cancelAutorenewal"), n.setEventAction(l.bi.CLICK), n.setCustom("subscriptionType", e), n.setNonInteraction(!1), n.build()
        }, t.prototype.subscriptionUpgrade = function(t, e) {
          var n = this.newEventBuilder(t);
          return n.setName("subscriptionUpgrade"), n.setEventAction(l.bi.CLICK), n.setCustom("subscriptionType", e), n.setNonInteraction(!1), n.build()
        }, t.prototype.subscriptionDowngrade = function(t, e) {
          var n = this.newEventBuilder(t);
          return n.setName("subscriptionDowngrade"), n.setEventAction(l.bi.CLICK), n.setCustom("subscriptionType", e), n.setNonInteraction(!1), n.build()
        }, t.prototype.giftStart = function(t, e, n, r) {
          var i = this.newEventBuilder(t);
          return i.setName("giftStart"), i.setEventAction(l.bi.CLICK), i.setCustom("subscriptionLocation", e), i.setCustom("subscriptionType", n), i.setCustom("subscriptionPayment", r), i.setNonInteraction(!1), i.build()
        }, t.prototype.giftNextStep = function(t, e, n, r) {
          var i = this.newEventBuilder(t);
          return i.setName("giftNextStep"), i.setEventAction(l.bi.CLICK), i.setCustom("subscriptionLocation", e), i.setCustom("subscriptionType", n), i.setCustom("subscriptionPayment", r), i.setNonInteraction(!1), i.build()
        }, t.prototype.giftPurchaseButton = function(t, e, n, r) {
          var i = this.newEventBuilder(t);
          return i.setName("giftPurchaseButton"), i.setEventAction(l.bi.CLICK), i.setCustom("subscriptionLocation", e), i.setCustom("subscriptionType", n), i.setCustom("subscriptionPayment", r), i.setNonInteraction(!1), i.build()
        }, t.prototype.giftEmailCheck = function(t, e, n, r) {
          var i = this.newEventBuilder(t);
          return i.setName("giftEmailCheck"), i.setEventAction(l.bi.CLICK), i.setCustom("subscriptionLocation", e), i.setCustom("subscriptionType", n), i.setCustom("subscriptionPayment", r), i.setNonInteraction(!1), i.build()
        }, t.prototype.giftRedeemed = function(t, e, n, r, i, o) {
          var a = this.newEventBuilder(t);
          return a.setName("giftRedeemed"), a.setEventAction(l.bi.CLICK), a.setCustom("subscriptionLocation", e), a.setCustom("subscriptionType", n), a.setCustom("subscriptionPayment", r), a.setCustom("subscriptionId", i), a.setCustom("newRegister", o ? "TRUE" : "FALSE"), a.setNonInteraction(!1), a.build()
        }, t.prototype.giftPaymentFieldOnBlur = function(t, e, n, r) {
          var i = s[e];
          if (!i) return null;
          var o = this.newEventBuilder(t);
          return o.setName(i), o.setEventAction(l.bi.CLICK), o.setCustom("subscriptionLocation", n), o.setCustom("subscriptionType", r), o.setCustom("subscriptionPayment", a.CARD), o.setNonInteraction(!1), o.build()
        }, t.prototype.giftPayPal = function(t, e, n) {
          var r = this.newEventBuilder(t);
          return r.setName("giftPayPal"), r.setEventAction(l.bi.CLICK), r.setCustom("subscriptionLocation", e), r.setCustom("subscriptionType", n), r.setCustom("subscriptionPayment", a.PAYPAL), r.setNonInteraction(!1), r.build()
        }, t.prototype.gifterPayPalConfirm = function(t) {
          var e = this.newEventBuilder(t);
          return e.setName("gifterPayPalConfirm"), e.setEventAction(l.bi.CLICK), e.build()
        }, t.prototype.gifterPurchaseButton = function(t, e, n, r) {
          var i = this.newEventBuilder(t);
          return i.setName("gifterPurchaseButton"), i.setEventAction(l.bi.CLICK), i.setCustom("subscriptionLocation", e), i.setCustom("subscriptionType", n), i.setCustom("subscriptionPayment", r), i.setNonInteraction(!1), i.build()
        }, t.prototype.gifterPrePurchaseButton = function(t, e, n, r) {
          var i = this.newEventBuilder(t);
          return i.setName("gifterPrePurchaseButton"), i.setEventAction(l.bi.CLICK), i.setCustom("subscriptionLocation", e), i.setCustom("subscriptionType", n), i.setCustom("subscriptionPayment", r), i.setNonInteraction(!1), i.build()
        }, t
      }();

      function p(t) {
        t.setCustom("game", t)
      }
      var m = function() {
          function t() {}
          return t.prototype.newEventBuilder = function() {
            return new c.W
          }, t.prototype.entryPointImpression = function(t) {
            var e = this.newEventBuilder();
            return e.setEventGaCategory("Subscription"), e.setEventGaAction(l.bi.IMPRESSION), e.setEventGaLabel(t), e.setGaNonInteraction(!0), e.build()
          }, t.prototype.entryPointClick = function(t, e) {
            var n = this.newEventBuilder();
            return n.setEventGaCategory("Subscription"), n.setEventGaAction(l.bi.CLICK), n.setEventGaLabel([e, t].join(" | ")), n.setGaNonInteraction(!1), n.build()
          }, t.prototype.subscriptionNextStep = function(t, e, n) {
            var r = this.newEventBuilder();
            return r.setEventGaCategory("subscriptionNextStep"), r.setEventGaAction(l.bi.CLICK), r.setEventGaLabel([e, t, n].join(" | ")), r.setGaNonInteraction(!1), r.build()
          }, t.prototype.subscriptionPurchaseButton = function(t, e, n) {
            var r = this.newEventBuilder();
            return r.setEventGaCategory("subscriptionPurchaseButton"), r.setEventGaAction(l.bi.CLICK), r.setEventGaLabel([e, t, n].join(" | ")), r.setGaNonInteraction(!1), r.build()
          }, t.prototype.subscriptionPurchase = function(t, e, n, r, i) {
            var o = this.newEventBuilder();
            return o.setNameGA("subscriptionPurchase"), o.setEventGaCategory("subscriptionPurchase"), o.setEventGaAction(l.bi.CLICK), o.setEventGaLabel([e, t, n].join(" | ")), o.setCustom("price", r), o.setCustom("currency", i), o.setGaNonInteraction(!1), o.build()
          }, t.prototype.manageSubscription = function(t) {
            var e = this.newEventBuilder();
            return e.setEventGaCategory("manageSubscription"), e.setEventGaAction(l.bi.CLICK), e.setEventGaLabel(t), e.setGaNonInteraction(!1), e.build()
          }, t.prototype.renewSubscription = function(t) {
            var e = this.newEventBuilder();
            return e.setEventGaCategory("renewSubscription"), e.setEventGaAction(l.bi.CLICK), e.setEventGaLabel(t), e.setGaNonInteraction(!1), e.build()
          }, t.prototype.cancelAutorenewal = function(t) {
            var e = this.newEventBuilder();
            return e.setEventGaCategory("cancelAutorenewal"), e.setEventGaAction(l.bi.CLICK), e.setEventGaLabel(t), e.setGaNonInteraction(!1), e.build()
          }, t.prototype.subscriptionUpgrade = function(t) {
            var e = this.newEventBuilder();
            return e.setEventGaCategory("subscriptionUpgrade"), e.setEventGaAction(l.bi.CLICK), e.setEventGaLabel(t), e.setGaNonInteraction(!1), e.build()
          }, t.prototype.subscriptionDowngrade = function(t) {
            var e = this.newEventBuilder();
            return e.setEventGaCategory("subscriptionDowngrade"), e.setEventGaAction(l.bi.CLICK), e.setEventGaLabel(t), e.setGaNonInteraction(!1), e.build()
          }, t.prototype.giftStart = function(t, e, n) {
            var r = this.newEventBuilder();
            return r.setEventGaCategory("giftStart"), r.setEventGaAction(l.bi.CLICK), r.setEventGaLabel([e, t, n].join(" | ")), r.setGaNonInteraction(!1), r.build()
          }, t.prototype.giftNextStep = function(t, e, n) {
            var r = this.newEventBuilder();
            return r.setEventGaCategory("giftNextStep"), r.setEventGaAction(l.bi.CLICK), r.setEventGaLabel([e, t, n].join(" | ")), r.setGaNonInteraction(!1), r.build()
          }, t.prototype.giftPurchaseButton = function(t, e, n) {
            var r = this.newEventBuilder();
            return r.setEventGaCategory("giftPurchaseButton"), r.setEventGaAction(l.bi.CLICK), r.setEventGaLabel([e, t, n].join(" | ")), r.setGaNonInteraction(!1), r.build()
          }, t.prototype.giftEmailCheck = function(t, e, n) {
            var r = this.newEventBuilder();
            return r.setEventGaCategory("giftEmailCheck"), r.setEventGaAction(l.bi.CLICK), r.setEventGaLabel([e, t, n].join(" | ")), r.setGaNonInteraction(!1), r.build()
          }, t.prototype.giftRedeemed = function(t, e, n, r, i) {
            var o = this.newEventBuilder();
            return o.setEventGaCategory("giftRedeemed"), o.setEventGaAction(l.bi.CLICK), o.setEventGaLabel([e, t, n, r, i].join(" | ")), o.setGaNonInteraction(!1), o.build()
          }, t.prototype.giftPaymentFieldOnBlur = function(t, e, n) {
            var r = s[t];
            if (!r) return null;
            var i = this.newEventBuilder();
            return i.setEventGaCategory(r), i.setEventGaAction(l.bi.CLICK), i.setEventGaLabel([n, e].join(" | ")), i.setGaNonInteraction(!1), i.build()
          }, t.prototype.giftPayPal = function(t, e) {
            var n = this.newEventBuilder();
            return n.setEventGaCategory("giftPayPal"), n.setEventGaAction(l.bi.CLICK), n.setEventGaLabel([e, t].join(" | ")), n.setGaNonInteraction(!1), n.build()
          }, t.prototype.gifterPayPalConfirm = function() {
            var t = this.newEventBuilder();
            return t.setEventGaCategory("gifterPayPalConfirm"), t.setEventGaAction(l.bi.CLICK), t.setGaNonInteraction(!1), t.build()
          }, t.prototype.gifterPurchaseButton = function(t, e, n) {
            var r = this.newEventBuilder();
            return r.setEventGaCategory("gifterPurchaseButton"), r.setEventGaAction(l.bi.CLICK), r.setEventGaLabel([e, t, n].join(" | ")), r.setGaNonInteraction(!1), r.build()
          }, t.prototype.gifterPrePurchaseButton = function(t, e, n) {
            var r = this.newEventBuilder();
            return r.setEventGaCategory("gifterPrePurchaseButton"), r.setEventGaAction(l.bi.CLICK), r.setEventGaLabel([e, t, n].join(" | ")), r.setGaNonInteraction(!1), r.build()
          }, t
        }(),
        f = function() {
          function t() {
            this.aiAnalytics = new d, this.gaAnalytics = new m
          }
          return t.prototype.entryPointImpression = function(t, e) {
            return (0, l.cA)(this.gaAnalytics.entryPointImpression(e), this.aiAnalytics.entryPointImpression(t, e))
          }, t.prototype.entryPointClick = function(t, e, n) {
            return (0, l.cA)(this.gaAnalytics.entryPointClick(e, n), this.aiAnalytics.entryPointClick(t, e, n))
          }, t.prototype.removeAdsGameScreen = function(t) {
            return (0, l.cA)(null, this.aiAnalytics.removeAdsGameScreen(t))
          }, t.prototype.removeAdsAdBlockScreen = function(t) {
            return (0, l.cA)(null, this.aiAnalytics.removeAdsAdBlockScreen(t))
          }, t.prototype.subscriptionNextStep = function(t, e, n, r) {
            return (0, l.cA)(this.gaAnalytics.subscriptionNextStep(e, n, r), this.aiAnalytics.subscriptionNextStep(t, e, n, r))
          }, t.prototype.subscriptionPurchaseButton = function(t, e, n, r) {
            return (0, l.cA)(this.gaAnalytics.subscriptionPurchaseButton(e, n, r), this.aiAnalytics.subscriptionPurchaseButton(t, e, n, r))
          }, t.prototype.subscriptionPurchase = function(t, e, n, r, i, o, a, s) {
            return (0, l.cA)(this.gaAnalytics.subscriptionPurchase(e, n, r, o, a), this.aiAnalytics.subscriptionPurchase(t, e, n, r, i, s))
          }, t.prototype.manageSubscription = function(t, e) {
            return void 0 === e && (e = u.UNKNOWN), (0, l.cA)(this.gaAnalytics.manageSubscription(e), this.aiAnalytics.manageSubscription(t, e))
          }, t.prototype.renewSubscription = function(t, e) {
            return void 0 === e && (e = u.UNKNOWN), (0, l.cA)(this.gaAnalytics.renewSubscription(e), this.aiAnalytics.renewSubscription(t, e))
          }, t.prototype.cancelAutorenewal = function(t, e) {
            return void 0 === e && (e = u.UNKNOWN), (0, l.cA)(this.gaAnalytics.cancelAutorenewal(e), this.aiAnalytics.cancelAutorenewal(t, e))
          }, t.prototype.subscriptionUpgrade = function(t, e) {
            return void 0 === e && (e = u.UNKNOWN), (0, l.cA)(this.gaAnalytics.subscriptionUpgrade(e), this.aiAnalytics.subscriptionUpgrade(t, e))
          }, t.prototype.subscriptionDowngrade = function(t, e) {
            return void 0 === e && (e = u.UNKNOWN), (0, l.cA)(this.gaAnalytics.subscriptionDowngrade(e), this.aiAnalytics.subscriptionDowngrade(t, e))
          }, t.prototype.giftStart = function(t, e, n, r) {
            return (0, l.cA)(this.gaAnalytics.giftStart(e, n, r), this.aiAnalytics.giftStart(t, e, n, r))
          }, t.prototype.giftNextStep = function(t, e, n, r) {
            return (0, l.cA)(this.gaAnalytics.giftNextStep(e, n, r), this.aiAnalytics.giftNextStep(t, e, n, r))
          }, t.prototype.giftPurchaseButton = function(t, e, n, r) {
            return (0, l.cA)(this.gaAnalytics.giftPurchaseButton(e, n, r), this.aiAnalytics.giftPurchaseButton(t, e, n, r))
          }, t.prototype.giftEmailCheck = function(t, e, n, r) {
            return (0, l.cA)(this.gaAnalytics.giftEmailCheck(e, n, r), this.aiAnalytics.giftEmailCheck(t, e, n, r))
          }, t.prototype.giftRedeemed = function(t, e, n, r, i, o) {
            return (0, l.cA)(this.gaAnalytics.giftRedeemed(e, n, r, i, o), this.aiAnalytics.giftRedeemed(t, e, n, r, i, o))
          }, t.prototype.giftPaymentFieldOnBlur = function(t, e, n, r) {
            return (0, l.cA)(this.gaAnalytics.giftPaymentFieldOnBlur(e, n, r), this.aiAnalytics.giftPaymentFieldOnBlur(t, e, n, r))
          }, t.prototype.giftPayPal = function(t, e, n) {
            return (0, l.cA)(this.gaAnalytics.giftPayPal(e, n), this.aiAnalytics.giftPayPal(t, e, n))
          }, t.prototype.gifterPayPalConfirm = function(t) {
            return (0, l.cA)(this.gaAnalytics.gifterPayPalConfirm(), this.aiAnalytics.gifterPayPalConfirm(t))
          }, t.prototype.gifterPurchaseButton = function(t, e, n, r) {
            return (0, l.cA)(this.gaAnalytics.gifterPurchaseButton(e, n, r), this.aiAnalytics.gifterPurchaseButton(t, e, n, r))
          }, t.prototype.gifterPrePurchaseButton = function(t, e, n, r) {
            return (0, l.cA)(this.gaAnalytics.gifterPrePurchaseButton(e, n, r), this.aiAnalytics.gifterPrePurchaseButton(t, e, n, r))
          }, t
        }()
    },
    70448: (t, e) => {
      var n;
      ! function() {
        "use strict";
        var r = {}.hasOwnProperty;

        function i() {
          for (var t = "", e = 0; e < arguments.length; e++) {
            var n = arguments[e];
            n && (t = o(t, function(t) {
              if ("string" == typeof t || "number" == typeof t) return t;
              if ("object" != typeof t) return "";
              if (Array.isArray(t)) return i.apply(null, t);
              if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
              var e = "";
              for (var n in t) r.call(t, n) && t[n] && (e = o(e, n));
              return e
            }(n)))
          }
          return t
        }

        function o(t, e) {
          return e ? t ? t + " " + e : t + e : t
        }
        t.exports ? (i.default = i, t.exports = i) : void 0 === (n = (function() {
          return i
        }).apply(e, [])) || (t.exports = n)
      }()
    },
    73072: (t, e, n) => {
      "use strict";
      n.d(e, {
        O: () => r
      });
      var r = new(function() {
        function t() {}
        return t.prototype.setArkCookie = function(t, e, n) {
          void 0 === n && (n = 1825);
          var r = new Date;
          r.setTime(r.getTime() + 24 * n * 36e5);
          var i = "expires=".concat(r.toUTCString());
          document.cookie = "".concat(t, "=").concat(e, ";").concat(i, ";path=/;")
        }, t.prototype.getArkCookie = function(t) {
          var e = document.cookie.match(new RegExp("(^| )".concat(t, "=([^;]+)")));
          return !!e && e[2]
        }, t.prototype.removeArkCookie = function(t) {
          document.cookie = "".concat(t, "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"), document.cookie = "".concat(t, "=; Domain=.").concat(location.hostname, "; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"), document.cookie = "".concat(t, "=; Domain=.arkadium.com; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;")
        }, t
      }())
    },
    74348: (t, e, n) => {
      "use strict";
      var r, i;
      n.d(e, {
        g: () => r
      }), (i = r || (r = {})).LS_LISTENER_IS_ON_PROP = "LS_LISTENER_IS_ON_PROP__GRM", i.GAME_PURCHASE_REQUEST = "LS_LISTENING_GAME_PURCHASE_REQUEST__GRM", i.GEMS_PURCHASE_NEW_TAB = "LS_LISTENING_GEMS_PURCHASE_FINISHED__GRM"
    },
    82725: (t, e, n) => {
      "use strict";
      n.d(e, {
        k: () => o
      });
      var r = n(88058),
        i = n(22372),
        o = function() {
          function t() {
            this.aiAnalytics = new i.Kc
          }
          return t.prototype.addFavoritesGameNav = function(t, e) {
            var n = e.gameSlug,
              i = e.gameFavorited;
            return (0, r.cA)(null, this.aiAnalytics.addFavoritesGameNav(t, {
              gameSlug: n,
              gameFavorited: i
            }))
          }, t.prototype.addFavoritesGameEnd = function(t, e) {
            var n = e.gameSlug,
              i = e.gameFavorited;
            return (0, r.cA)(null, this.aiAnalytics.addFavoritesGameEnd(t, {
              gameSlug: n,
              gameFavorited: i
            }))
          }, t.prototype.clickFavoriteGameTile = function(t, e) {
            var n = e.gameSlug,
              i = e.pageType;
            return (0, r.cA)(null, this.aiAnalytics.clickFavoriteGameTile(t, {
              gameSlug: n,
              pageType: i
            }))
          }, t
        }()
    },
    83679: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = e.GA4 = void 0;
      var r = u(n(61046)),
        i = u(n(94918)),
        o = ["eventCategory", "eventAction", "eventLabel", "eventValue", "hitType"],
        a = ["title", "location"],
        s = ["page", "hitType"];

      function u(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function c(t, e) {
        if (null == t) return {};
        var n, r, i = function(t, e) {
          if (null == t) return {};
          var n, r, i = {},
            o = Object.keys(t);
          for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
          return i
        }(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++) n = o[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
        }
        return i
      }

      function l(t) {
        return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
      }

      function d(t) {
        return function(t) {
          if (Array.isArray(t)) return v(t)
        }(t) || function(t) {
          if ("u" > typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || f(t) || function() {
          throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function p(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e && (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function m(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2 ? p(Object(n), !0).forEach(function(e) {
            y(t, e, n[e])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          })
        }
        return t
      }

      function f(t, e) {
        if (t) {
          if ("string" == typeof t) return v(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(t, e)
        }
      }

      function v(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r
      }

      function y(t, e, n) {
        return (e = h(e)) in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n, t
      }

      function h(t) {
        var e = function(t, e) {
          if ("object" !== l(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== l(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === e ? String : Number)(t)
        }(t, "string");
        return "symbol" === l(e) ? e : String(e)
      }
      var g = function() {
        var t;

        function e() {
          var t = this;
          if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
          y(this, "reset", function() {
            t.isInitialized = !1, t._testMode = !1, t._currentMeasurementId, t._hasLoadedGA = !1, t._isQueuing = !1, t._queueGtag = []
          }), y(this, "_gtag", function() {
            for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
            t._testMode || t._isQueuing ? t._queueGtag.push(n) : r.default.apply(void 0, n)
          }), y(this, "_loadGA", function(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "https://www.googletagmanager.com/gtag/js";
            if ("u" > typeof window && "u" > typeof document && !t._hasLoadedGA) {
              var i = document.createElement("script");
              i.async = !0, i.src = "".concat(r, "?id=").concat(e), n && i.setAttribute("nonce", n), document.body.appendChild(i), window.dataLayer = window.dataLayer || [], window.gtag = function() {
                window.dataLayer.push(arguments)
              }, t._hasLoadedGA = !0
            }
          }), y(this, "_toGtagOptions", function(t) {
            if (t) {
              var e = {
                cookieUpdate: "cookie_update",
                cookieExpires: "cookie_expires",
                cookieDomain: "cookie_domain",
                cookieFlags: "cookie_flags",
                userId: "user_id",
                clientId: "client_id",
                anonymizeIp: "anonymize_ip",
                contentGroup1: "content_group1",
                contentGroup2: "content_group2",
                contentGroup3: "content_group3",
                contentGroup4: "content_group4",
                contentGroup5: "content_group5",
                allowAdFeatures: "allow_google_signals",
                allowAdPersonalizationSignals: "allow_ad_personalization_signals",
                nonInteraction: "non_interaction",
                page: "page_path",
                hitCallback: "event_callback"
              };
              return Object.entries(t).reduce(function(t, n) {
                var r = function(t) {
                    if (Array.isArray(t)) return t
                  }(n) || function(t, e) {
                    var n = null == t ? null : "u" > typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                      var r, i, o, a, s = [],
                        u = !0,
                        c = !1;
                      try {
                        o = (n = n.call(t)).next, !1;
                        for (; !(u = (r = o.call(n)).done) && (s.push(r.value), 2 !== s.length); u = !0);
                      } catch (t) {
                        c = !0, i = t
                      } finally {
                        try {
                          if (!u && null != n.return && (a = n.return(), Object(a) !== a)) return
                        } finally {
                          if (c) throw i
                        }
                      }
                      return s
                    }
                  }(n, 2) || f(n, 2) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                  }(),
                  i = r[0],
                  o = r[1];
                return e[i] ? t[e[i]] = o : t[i] = o, t
              }, {})
            }
          }), y(this, "initialize", function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!e) throw Error("Require GA_MEASUREMENT_ID");
            var r = "string" == typeof e ? [{
              trackingId: e
            }] : e;
            t._currentMeasurementId = r[0].trackingId;
            var i = n.gaOptions,
              o = n.gtagOptions,
              a = n.nonce,
              s = n.testMode,
              u = void 0 !== s && s,
              c = n.gtagUrl;
            if (t._testMode = u, u || t._loadGA(t._currentMeasurementId, a, c), t.isInitialized || (t._gtag("js", new Date), r.forEach(function(e) {
                var n = m(m(m({}, t._toGtagOptions(m(m({}, i), e.gaOptions))), o), e.gtagOptions);
                Object.keys(n).length ? t._gtag("config", e.trackingId, n) : t._gtag("config", e.trackingId)
              })), t.isInitialized = !0, !u) {
              var l = d(t._queueGtag);
              for (t._queueGtag = [], t._isQueuing = !1; l.length;) {
                var p = l.shift();
                t._gtag.apply(t, d(p)), "get" === p[0] && (t._isQueuing = !0)
              }
            }
          }), y(this, "set", function(e) {
            e ? "object" !== l(e) ? console.warn("Expected `fieldsObject` arg to be an Object") : (0 === Object.keys(e).length && console.warn("empty `fieldsObject` given to .set()"), t._gaCommand("set", e)) : console.warn("`fieldsObject` is required in .set()")
          }), y(this, "_gaCommandSendEvent", function(e, n, r, i, o) {
            t._gtag("event", n, m(m({
              event_category: e,
              event_label: r,
              value: i
            }, o && {
              non_interaction: o.nonInteraction
            }), t._toGtagOptions(o)))
          }), y(this, "_gaCommandSendEventParameters", function() {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            if ("string" == typeof n[0]) t._gaCommandSendEvent.apply(t, d(n.slice(1)));
            else {
              var i = n[0],
                a = i.eventCategory,
                s = i.eventAction,
                u = i.eventLabel,
                l = i.eventValue,
                p = (i.hitType, c(i, o));
              t._gaCommandSendEvent(a, s, u, l, p)
            }
          }), y(this, "_gaCommandSendTiming", function(e, n, r, i) {
            t._gtag("event", "timing_complete", {
              name: n,
              value: r,
              event_category: e,
              event_label: i
            })
          }), y(this, "_gaCommandSendPageview", function(e, n) {
            if (n && Object.keys(n).length) {
              var r = t._toGtagOptions(n),
                i = r.title,
                o = r.location,
                s = c(r, a);
              t._gtag("event", "page_view", m(m(m(m({}, e && {
                page_path: e
              }), i && {
                page_title: i
              }), o && {
                page_location: o
              }), s))
            } else e ? t._gtag("event", "page_view", {
              page_path: e
            }) : t._gtag("event", "page_view")
          }), y(this, "_gaCommandSendPageviewParameters", function() {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            if ("string" == typeof n[0]) t._gaCommandSendPageview.apply(t, d(n.slice(1)));
            else {
              var i = n[0],
                o = i.page,
                a = (i.hitType, c(i, s));
              t._gaCommandSendPageview(o, a)
            }
          }), y(this, "_gaCommandSend", function() {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            var i = "string" == typeof n[0] ? n[0] : n[0].hitType;
            switch (i) {
              case "event":
                t._gaCommandSendEventParameters.apply(t, n);
                break;
              case "pageview":
                t._gaCommandSendPageviewParameters.apply(t, n);
                break;
              case "timing":
                t._gaCommandSendTiming.apply(t, d(n.slice(1)));
                break;
              case "screenview":
              case "transaction":
              case "item":
              case "social":
              case "exception":
                console.warn("Unsupported send command: ".concat(i));
                break;
              default:
                console.warn("Send command doesn't exist: ".concat(i))
            }
          }), y(this, "_gaCommandSet", function() {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            "string" == typeof n[0] && (n[0] = y({}, n[0], n[1])), t._gtag("set", t._toGtagOptions(n[0]))
          }), y(this, "_gaCommand", function(e) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
            switch (e) {
              case "send":
                t._gaCommandSend.apply(t, r);
                break;
              case "set":
                t._gaCommandSet.apply(t, r);
                break;
              default:
                console.warn("Command doesn't exist: ".concat(e))
            }
          }), y(this, "ga", function() {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            if ("string" == typeof n[0]) t._gaCommand.apply(t, n);
            else {
              var i = n[0];
              t._gtag("get", t._currentMeasurementId, "client_id", function(e) {
                t._isQueuing = !1;
                var n = t._queueGtag;
                for (i({
                    get: function(n) {
                      return "clientId" === n ? e : "trackingId" === n ? t._currentMeasurementId : "apiVersion" === n ? "1" : void 0
                    }
                  }); n.length;) {
                  var r = n.shift();
                  t._gtag.apply(t, d(r))
                }
              }), t._isQueuing = !0
            }
            return t.ga
          }), y(this, "event", function(e, n) {
            if ("string" == typeof e) t._gtag("event", e, t._toGtagOptions(n));
            else {
              var r = e.action,
                o = e.category,
                a = e.label,
                s = e.value,
                u = e.nonInteraction,
                c = e.transport;
              if (!o || !r) return void console.warn("args.category AND args.action are required in event()");
              var l = {
                hitType: "event",
                eventCategory: (0, i.default)(o),
                eventAction: (0, i.default)(r)
              };
              a && (l.eventLabel = (0, i.default)(a)), void 0 !== s && ("number" != typeof s ? console.warn("Expected `args.value` arg to be a Number.") : l.eventValue = s), void 0 !== u && ("boolean" != typeof u ? console.warn("`args.nonInteraction` must be a boolean.") : l.nonInteraction = u), void 0 !== c && ("string" != typeof c ? console.warn("`args.transport` must be a string.") : (-1 === ["beacon", "xhr", "image"].indexOf(c) && console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"), l.transport = c)), t._gaCommand("send", l)
            }
          }), y(this, "send", function(e) {
            t._gaCommand("send", e)
          }), this.reset()
        }
        return t = [{
            key: "gtag",
            value: function() {
              this._gtag.apply(this, arguments)
            }
          }],
          function(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, h(r.key), r)
            }
          }(e.prototype, t), Object.defineProperty(e, "prototype", {
            writable: !1
          }), e
      }();
      e.GA4 = g, e.default = new g
    },
    84940: (t, e, n) => {
      "use strict";
      let r = n(49948);
      t.exports = l;
      let i = function() {
        function t(t) {
          return void 0 !== t && t
        }
        try {
          if ("u" > typeof globalThis) return globalThis;
          return Object.defineProperty(Object.prototype, "globalThis", {
            get: function() {
              return delete Object.prototype.globalThis, this.globalThis = this
            },
            configurable: !0
          }), globalThis
        } catch (e) {
          return t(self) || t(window) || t(this) || {}
        }
      }().console || {};

      function o(t, e) {
        return "silent" === t ? 1 / 0 : e.levels.values[t]
      }
      let a = Symbol("pino.logFuncs"),
        s = Symbol("pino.hierarchy"),
        u = {
          error: "log",
          fatal: "error",
          warn: "error",
          info: "log",
          debug: "log",
          trace: "log"
        };

      function c(t, e) {
        let n = {
          logger: e,
          parent: t[s]
        };
        e[s] = n
      }

      function l(t) {
        var e, n, r;
        let s, f, v;
        (t = t || {}).browser = t.browser || {};
        let y = t.browser.transmit;
        if (y && "function" != typeof y.send) throw Error("pino: transmit option must have a send function");
        let A = t.browser.write || i;
        t.browser.write && (t.browser.asObject = !0);
        let C = t.serializers || {},
          I = (e = t.browser.serialize, Array.isArray(e) ? e.filter(function(t) {
            return "!stdSerializers.err" !== t
          }) : !0 === e && Object.keys(C)),
          E = t.browser.serialize;
        Array.isArray(t.browser.serialize) && t.browser.serialize.indexOf("!stdSerializers.err") > -1 && (E = !1);
        let S = Object.keys(t.customLevels || {}),
          w = ["error", "fatal", "warn", "info", "debug", "trace"].concat(S);
        "function" == typeof A && w.forEach(function(t) {
          A[t] = A
        }), (!1 === t.enabled || t.browser.disabled) && (t.level = "silent");
        let k = t.level || "info",
          N = Object.create(A);
        N.log || (N.log = h), s = {}, w.forEach(t => {
          s[t] = A[t] ? A[t] : i[t] || i[u[t] || "log"] || h
        }), N[a] = s, c({}, N), Object.defineProperty(N, "levelVal", {
          get: function() {
            return o(this.level, this)
          }
        }), Object.defineProperty(N, "level", {
          get: function() {
            return this._level
          },
          set: function(t) {
            if ("silent" !== t && !this.levels.values[t]) throw Error("unknown level " + t);
            this._level = t, d(this, P, N, "error"), d(this, P, N, "fatal"), d(this, P, N, "warn"), d(this, P, N, "info"), d(this, P, N, "debug"), d(this, P, N, "trace"), S.forEach(t => {
              d(this, P, N, t)
            })
          }
        });
        let P = {
          transmit: y,
          serialize: I,
          asObject: t.browser.asObject,
          asObjectBindingsOnly: t.browser.asObjectBindingsOnly,
          formatters: t.browser.formatters,
          levels: w,
          timestamp: "function" == typeof(n = t).timestamp ? n.timestamp : !1 === n.timestamp ? g : b,
          messageKey: t.messageKey || "msg",
          onChild: t.onChild || h
        };

        function L(e, n, r) {
          if (!n) throw Error("missing bindings for child Pino");
          r = r || {}, I && n.serializers && (r.serializers = n.serializers);
          let i = r.serializers;
          if (I && i) {
            var o = Object.assign({}, C, i),
              a = !0 === t.browser.serialize ? Object.keys(o) : I;
            delete n.serializers, p([n], a, o, this._stdErrSerialize)
          }

          function s(t) {
            this._childLevel = (0 | t._childLevel) + 1, this.bindings = n, o && (this.serializers = o, this._serialize = a), y && (this._logEvent = m([].concat(t._logEvent.bindings, n)))
          }
          s.prototype = this;
          let u = new s(this);
          return c(this, u), u.child = function(...t) {
            return L.call(this, e, ...t)
          }, u.level = r.level || this.level, e.onChild(u), u
        }
        return f = t.customLevels || {}, N.levels = {
          values: Object.assign({}, l.levels.values, f),
          labels: Object.assign({}, l.levels.labels, (v = {}, Object.keys(r = f).forEach(function(t) {
            v[r[t]] = t
          }), v))
        }, N.level = k, N.isLevelEnabled = function(t) {
          return !!this.levels.values[t] && this.levels.values[t] >= this.levels.values[this.level]
        }, N.setMaxListeners = N.getMaxListeners = N.emit = N.addListener = N.on = N.prependListener = N.once = N.prependOnceListener = N.removeListener = N.removeAllListeners = N.listeners = N.listenerCount = N.eventNames = N.write = N.flush = h, N.serializers = C, N._serialize = I, N._stdErrSerialize = E, N.child = function(...t) {
          return L.call(this, P, ...t)
        }, y && (N._logEvent = m()), N
      }

      function d(t, e, n, u) {
        var c, l, d, f, v, y, g;
        if (Object.defineProperty(t, u, {
            value: o(t.level, n) > o(u, n) ? h : n[a][u],
            writable: !0,
            enumerable: !0,
            configurable: !0
          }), t[u] === h) {
          if (!e.transmit) return;
          let r = o(e.transmit.level || t.level, n);
          if (o(u, n) < r) return
        }
        t[u] = (c = t, l = e, d = n, f = u, v = c[a][f], function() {
          let t = l.timestamp(),
            e = Array(arguments.length),
            n = Object.getPrototypeOf && Object.getPrototypeOf(this) === i ? i : this;
          for (var a = 0; a < e.length; a++) e[a] = arguments[a];
          var s = !1;
          if (l.serialize && (p(e, this._serialize, this.serializers, this._stdErrSerialize), s = !0), l.asObject || l.formatters ? v.call(n, ... function(t, e, n, i, o) {
              let {
                level: a,
                log: s = t => t
              } = o.formatters || {}, u = n.slice(), c = u[0], l = {}, d = (0 | t._childLevel) + 1;
              if (d < 1 && (d = 1), i && (l.time = i), a ? Object.assign(l, a(e, t.levels.values[e])) : l.level = t.levels.values[e], o.asObjectBindingsOnly) {
                if (null !== c && "object" == typeof c)
                  for (; d-- && "object" == typeof u[0];) Object.assign(l, u.shift());
                return [s(l), ...u]
              }
              if (null !== c && "object" == typeof c) {
                for (; d-- && "object" == typeof u[0];) Object.assign(l, u.shift());
                c = u.length ? r(u.shift(), u) : void 0
              } else "string" == typeof c && (c = r(u.shift(), u));
              return void 0 !== c && (l[o.messageKey] = c), [s(l)]
            }(this, f, e, t, l)) : v.apply(n, e), l.transmit) {
            let n = l.transmit.level || c._level,
              r = o(n, d),
              i = o(f, d);
            if (i < r) return;
            ! function(t, e, n, r = !1) {
              let i = e.send,
                o = e.ts,
                a = e.methodLevel,
                s = e.methodValue,
                u = e.val,
                c = t._logEvent.bindings;
              r || p(n, t._serialize || Object.keys(t.serializers), t.serializers, void 0 === t._stdErrSerialize || t._stdErrSerialize), t._logEvent.ts = o, t._logEvent.messages = n.filter(function(t) {
                return -1 === c.indexOf(t)
              }), t._logEvent.level.label = a, t._logEvent.level.value = s, i(a, t._logEvent, u), t._logEvent = m(c)
            }(this, {
              ts: t,
              methodLevel: f,
              methodValue: i,
              transmitLevel: n,
              transmitValue: d.levels.values[l.transmit.level || c._level],
              send: l.transmit.send,
              val: o(c._level, d)
            }, e, s)
          }
        });
        let b = function(t) {
          let e = [];
          t.bindings && e.push(t.bindings);
          let n = t[s];
          for (; n.parent;)(n = n.parent).logger.bindings && e.push(n.logger.bindings);
          return e.reverse()
        }(t);
        0 !== b.length && (t[u] = (y = b, g = t[u], function() {
          return g.apply(this, [...y, ...arguments])
        }))
      }

      function p(t, e, n, r) {
        for (let i in t)
          if (r && t[i] instanceof Error) t[i] = l.stdSerializers.err(t[i]);
          else if ("object" == typeof t[i] && !Array.isArray(t[i]) && e)
          for (let r in t[i]) e.indexOf(r) > -1 && r in n && (t[i][r] = n[r](t[i][r]))
      }

      function m(t) {
        return {
          ts: 0,
          messages: [],
          bindings: t || [],
          level: {
            label: "",
            value: 0
          }
        }
      }

      function f(t) {
        let e = {
          type: t.constructor.name,
          msg: t.message,
          stack: t.stack
        };
        for (let n in t) void 0 === e[n] && (e[n] = t[n]);
        return e
      }

      function v() {
        return {}
      }

      function y(t) {
        return t
      }

      function h() {}

      function g() {
        return !1
      }

      function b() {
        return Date.now()
      }
      l.levels = {
        values: {
          fatal: 60,
          error: 50,
          warn: 40,
          info: 30,
          debug: 20,
          trace: 10
        },
        labels: {
          10: "trace",
          20: "debug",
          30: "info",
          40: "warn",
          50: "error",
          60: "fatal"
        }
      }, l.stdSerializers = {
        mapHttpRequest: v,
        mapHttpResponse: v,
        wrapRequestSerializer: y,
        wrapResponseSerializer: y,
        wrapErrorSerializer: y,
        req: v,
        res: v,
        err: f,
        errWithCause: f
      }, l.stdTimeFunctions = Object.assign({}, {
        nullTime: g,
        epochTime: b,
        unixTime: function() {
          return Math.round(Date.now() / 1e3)
        },
        isoTime: function() {
          return new Date(Date.now()).toISOString()
        }
      }), t.exports.default = l, t.exports.pino = l
    },
    86910: (t, e, n) => {
      "use strict";
      n.d(e, {
        o: () => u
      });
      var r = n(24294),
        i = n(88058),
        o = function() {
          function t() {}
          return t.prototype.gameStart = function(t, e, n, i, o, a, s, u, c, l) {
            var d = this.newEventBuilder(t);
            return d.setName("funnelContentStart"), d.setNonInteraction(!1), d.setGame(e), d.setGameplayId(i), d.setCustom("recommendedGamesStart", o), d.setCustom("isFavorited", a), d.setCustom("isFullScreen", s), d.setCustom("gameLoadingTime", u), d.setCustom("ads_abtest", c), d.setCustom("pwa", l), r.W.playAgainStartEventBuilder(d, n), d.build()
          }, t.prototype.gameEnd = function(t, e, n, i, o, a, s, u, c) {
            var l = this.newEventBuilder(t);
            return l.setName("funnelContentEnd"), l.setNonInteraction(!1), l.setGame(e), l.setGameplayId(i), l.setCustom("recommendedGamesStart", o), l.setCustom("isFavorited", a), l.setCustom("isFullScreen", s), l.setCustom("ads_abtest", u), l.setCustom("pwa", c), r.W.playAgainStartEventBuilder(l, n), l.build()
          }, t.prototype.prerollStart = function(t, e, n, i, o, a, s, u, c) {
            var l = this.newEventBuilder(t);
            return l.setName("funnelPrerollRequest"), l.setNonInteraction(!0), l.setGame(e), l.setGameplayId(i), l.setCustom("recommendedGamesStart", o), l.setCustom("isFavorited", a), l.setCustom("ads_abtest", s), l.setCustom("timestamp", u), l.setCustom("pwa", c), r.W.playAgainStartEventBuilder(l, n), l.build()
          }, t.prototype.prerollEnd = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("funnelPrerollEnd"), n.setNonInteraction(!1), n.setGame(e.game), n.setGameplayId(e.gameplayId), n.setCustom("recommendedGamesStart", e.recommendedGamesStart), n.setCustom("isFavorited", e.isFavorited), n.setCustom("ads_abtest", e.ads_abtest), n.setCustom("pwa", e.pwa), r.W.playAgainStartEventBuilder(n, e.href), n.build()
          }, t.prototype.prerollLoaded = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("funnelPrerollLoaded"), n.setNonInteraction(!1), n.setGame(e.game), n.setGameplayId(e.gameplayId), n.setCustom("recommendedGamesStart", e.recommendedGamesStart), n.setCustom("isFavorited", e.isFavorited), n.setCustom("ads_abtest", e.ads_abtest), n.setCustom("timestamp", e.timestamp), n.setCustom("pwa", e.pwa), r.W.playAgainStartEventBuilder(n, e.href), n.build()
          }, t.prototype.prerollSkipped = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("funnelPrerollSkipped"), n.setNonInteraction(!1), n.setGame(e.game), n.setGameplayId(e.gameplayId), n.setCustom("recommendedGamesStart", e.recommendedGamesStart), n.setCustom("isFavorited", e.isFavorited), n.setCustom("ads_abtest", e.ads_abtest), n.setCustom("pwa", e.pwa), r.W.playAgainStartEventBuilder(n, e.href), n.build()
          }, t.prototype.rewardVideoStart = function(t, e, n, r, i, o, a, s, u) {
            var c = this.newEventBuilder(t);
            return c.setName("funnelRewardRequest"), c.setNonInteraction(!1), c.setGame(e), c.setGameplayId(n), c.setCustom("isFavorited", r), c.setCustom("isFullScreen", i), c.setCustom("ads_abtest", o), c.setCustom("timestamp", a), c.setCustom("buttonLocation", s), c.setCustom("pwa", u), c.build()
          }, t.prototype.rewardVideoEnd = function(t, e, n, r, i, o, a, s) {
            var u = this.newEventBuilder(t);
            return u.setName("funnelRewardEnd"), u.setNonInteraction(!1), u.setGame(e), u.setGameplayId(n), u.setCustom("isFavorited", r), u.setCustom("isFullScreen", i), u.setCustom("ads_abtest", o), u.setCustom("buttonLocation", a), u.setCustom("pwa", s), u.build()
          }, t.prototype.rewardVideoLoaded = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("funnelRewardLoaded"), n.setNonInteraction(!1), n.setGame(e.game), n.setGameplayId(e.gameplayId), n.setCustom("isFavorited", e.isFavorited), n.setCustom("ads_abtest", e.ads_abtest), n.setCustom("timestamp", e.timestamp), n.setCustom("pwa", e.pwa), r.W.playAgainStartEventBuilder(n, e.href), n.build()
          }, t.prototype.rewardVideoSkipped = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("funnelRewardSkipped"), n.setNonInteraction(!1), n.setGame(e.game), n.setGameplayId(e.gameplayId), n.setCustom("isFavorited", e.isFavorited), n.setCustom("ads_abtest", e.ads_abtest), n.setCustom("pwa", e.pwa), r.W.playAgainStartEventBuilder(n, e.href), n.build()
          }, t.prototype.interstitialVideoStart = function(t, e, n, r, i, o, a, s) {
            var u = this.newEventBuilder(t);
            return u.setName("funnelInterstitialRequest"), u.setNonInteraction(!1), u.setGame(e), u.setGameplayId(n), u.setCustom("isFavorited", r), u.setCustom("isFullScreen", i), u.setCustom("ads_abtest", o), u.setCustom("timestamp", a), u.setCustom("pwa", s), u.build()
          }, t.prototype.interstitialVideoEnd = function(t, e, n, r, i, o, a) {
            var s = this.newEventBuilder(t);
            return s.setName("funnelInterstitialEnd"), s.setNonInteraction(!1), s.setGame(e), s.setGameplayId(n), s.setCustom("isFavorited", r), s.setCustom("isFullScreen", i), s.setCustom("ads_abtest", o), s.setCustom("pwa", a), s.build()
          }, t.prototype.interstitialVideoLoaded = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("funnelInterstitialLoaded"), n.setNonInteraction(!1), n.setGame(e.game), n.setGameplayId(e.gameplayId), n.setCustom("isFavorited", e.isFavorited), n.setCustom("ads_abtest", e.ads_abtest), n.setCustom("timestamp", e.timestamp), n.setCustom("pwa", e.pwa), r.W.playAgainStartEventBuilder(n, e.href), n.build()
          }, t.prototype.interstitialVideoSkipped = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("funnelInterstitialSkipped"), n.setNonInteraction(!1), n.setGame(e.game), n.setGameplayId(e.gameplayId), n.setCustom("isFavorited", e.isFavorited), n.setCustom("ads_abtest", e.ads_abtest), n.setCustom("pwa", e.pwa), r.W.playAgainStartEventBuilder(n, e.href), n.build()
          }, t.prototype.allGamesClick = function(t, e, n) {
            var r = this.newEventBuilder(t);
            return r.setName("funnelEndButtonAllGames"), r.setEventAction(i.bi.CLICK), r.setNonInteraction(!1), r.setGame(e), r.setCustom("isFavorited", n), r.build()
          }, t.prototype.adblockImpression = function(t, e, n) {
            var r = this.newEventBuilder(t);
            return r.setName("adBlockPopup"), r.setEventAction(i.bi.IMPRESSION), r.setNonInteraction(!0), r.setGame(e), r.setCustom("pwa", n), r.build()
          }, t.prototype.adblockClick = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("adBlockPopup"), n.setEventAction(i.bi.CLICK), n.setNonInteraction(!1), n.setGame(e), n.build()
          }, t.prototype.adblockDisabled = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("adBlockPopup"), n.setEventAction(i.bi.ADBLOCKDISABLED), n.setGame(e), n.setNonInteraction(!1), n.build()
          }, t.prototype.playAgainClick = function(t, e, n, o, a, s, u, c, l) {
            var d = this.newEventBuilder(t);
            return d.setName("funnelEndButtonPlayAgain"), d.setEventAction(i.bi.CLICK), d.setNonInteraction(!1), d.setGame(e), d.setGameplayId(o), d.setCustom("recommendedGamesStart", a), d.setCustom("isFavorited", s), d.setCustom("isFullScreen", u), d.setCustom("ads_abtest", c), d.setCustom("pwa", l), r.W.playAgainStartEventBuilder(d, n), d.build()
          }, t.prototype.saveScoreClick = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("saveScore"), n.setEventAction(i.bi.CLICK), n.setNonInteraction(!1), n.setGame(e), n.build()
          }, t.prototype.gameNavigationLeaderboardIconClick = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("Leaderboard"), n.setEventAction(i.bi.CLICK), n.setNonInteraction(!1), n.setGame(e), n.build()
          }, t.prototype.recommendedGamesImpression = function(t, e, n) {
            var r = this.newEventBuilder(t);
            return r.setName("recommendedGames"), r.setEventAction(i.bi.IMPRESSION), r.setNonInteraction(!0), r.setGame(e), r.setCustom("recommendedGamesImpression", n.join("|").toLowerCase()), r.build()
          }, t.prototype.gamePageFeedbackImpression = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("gamepageFeedback"), n.setEventAction(i.bi.IMPRESSION), n.setGame(e), n.setNonInteraction(!0), n.build()
          }, t.prototype.gamePageFeedbackClick = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("gamepageFeedback"), n.setEventAction(i.bi.CLICK), n.setGame(e), n.setNonInteraction(!1), n.build()
          }, t.prototype.gamePageAdDividerImpression = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("gameLisencing"), n.setEventAction(i.bi.IMPRESSION), n.setGame(e), n.setNonInteraction(!0), n.build()
          }, t.prototype.gamePageAdDividerClick = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("gameLisencing"), n.setEventAction(i.bi.CLICK), n.setGame(e), n.setNonInteraction(!1), n.build()
          }, t.prototype.recommendedGamesImpressionNew = function(t, e, n) {
            var r = this.newEventBuilder(t);
            return r.setName("recommendedGames"), r.setEventAction(i.bi.IMPRESSION), r.setGame(e), r.setCustom("recommendedGamesImpression", n), r.setNonInteraction(!0), r.build()
          }, t.prototype.recommendedGamesClickNew = function(t, e, n) {
            var r = this.newEventBuilder(t);
            return r.setName("recommendedGames"), r.setEventAction(i.bi.CLICK), r.setGame(e), r.setCustom("recommendedGamesClick", n), r.setNonInteraction(!1), r.build()
          }, t.prototype.earlyAccessJoinButton = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("earlyAccessJoinButton"), n.setEventAction(i.bi.CLICK), n.setGame(e), n.setNonInteraction(!1), n.build()
          }, t.prototype.earlyAccessJoinButtonImpression = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("earlyAccessJoinButton"), n.setEventAction(i.bi.IMPRESSION), n.setGame(e), n.setNonInteraction(!0), n.build()
          }, t.prototype.numberTimesPlay = function(t, e, n) {
            var r = this.newEventBuilder(t);
            return r.setName("numberTimesPlay"), r.setNonInteraction(!1), r.setGame(e), r.setCustom("times", n), r.build()
          }, t.prototype.numberPlayVisits = function(t, e, n) {
            var r = this.newEventBuilder(t);
            return r.setName("numberPlayVisits"), r.setNonInteraction(!1), r.setGame(e), r.setCustom("visits", n), r.build()
          }, t.prototype.fullScreenButtonClick = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("fullScreenButton"), n.setNonInteraction(!1), n.setGame(e), n.setEventAction(i.bi.CLICK), n.build()
          }, t.prototype.fullScreenExitButtonClick = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("fullScreenExitButton"), n.setNonInteraction(!1), n.setGame(e), n.setEventAction(i.bi.CLICK), n.build()
          }, t.prototype.fullScreenToolTipImpression = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("fullScreenToolTip"), n.setNonInteraction(!1), n.setGame(e), n.setEventAction(i.bi.IMPRESSION), n.build()
          }, t.prototype.fullScreenToolTipClick = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("fullScreenToolTip"), n.setNonInteraction(!1), n.setGame(e), n.setEventAction(i.bi.CLICK), n.build()
          }, t.prototype.sendEmote = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("sendEmote"), n.setEventAction(i.bi.CLICK), n.setGame(e), n.setNonInteraction(!1), n.build()
          }, t.prototype.returnEmote = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("returnEmote"), n.setEventAction(i.bi.CLICK), n.setGame(e), n.setNonInteraction(!1), n.build()
          }, t.prototype.sendEmoteExpire = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("sendEmoteExpire"), n.setEventAction(i.bi.IMPRESSION), n.setGame(e), n.setNonInteraction(!0), n.build()
          }, t.prototype.gameNavigationCollectionButton = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("collectionsButton"), n.setEventAction(i.bi.CLICK), n.setNonInteraction(!1), n.setGame(e), n.build()
          }, t.prototype.visitCollection = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("visitCollection"), n.setEventAction(i.bi.CLICK), n.setNonInteraction(!1), n.setGame(e), n.build()
          }, t.prototype.saveCollectible = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("saveCollectible"), n.setEventAction(i.bi.CLICK), n.setNonInteraction(!1), n.setGame(e), n.build()
          }, t.prototype.receivedCollectible = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("receivedCollectible"), n.setEventAction(i.bi.IMPRESSION), n.setNonInteraction(!1), n.setGame(e), n.build()
          }, t.prototype.commentsButton = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("commentsButton"), n.setEventAction(i.bi.CLICK), n.setGame(e), n.setNonInteraction(!1), n.build()
          }, t.prototype.commentSignInUp = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("commentSignInUp"), n.setEventAction(i.bi.CLICK), n.setGame(e), n.setNonInteraction(!1), n.build()
          }, t.prototype.commentSubmit = function(t, e) {
            var n = this.newEventBuilder(t);
            return n.setName("commentSubmit"), n.setEventAction(i.bi.CLICK), n.setGame(e), n.setNonInteraction(!1), n.build()
          }, t.prototype.newEventBuilder = function(t) {
            return new r.W().baseEvent(t)
          }, t
        }(),
        a = n(69067),
        s = function() {
          function t() {}
          return t.prototype.gameStart = function(t, e) {
            var n = this.newEventBuilder();
            return n.setEventGaCategory("Funnel_Content_Start"), n.setEventGaAction(t.slug), n.setEventGaLabel((0, a.GS)(e, "game start", t.slug)), n.setGaNonInteraction(!1), n.build()
          }, t.prototype.funnelEnd = function(t, e) {
            var n = this.newEventBuilder();
            return n.setEventGaCategory("Funnel_End_Screen"), n.setEventGaAction(t.slug), n.setEventGaLabel((0, a.GS)(e, "game end", t.slug)), n.setGaNonInteraction(!1), n.build()
          }, t.prototype.prerollStart = function(t, e, n) {
            var r = this.newEventBuilder();
            return r.setEventGaCategory("Funnel_PreRoll_Request"), r.setEventGaAction(i.bi.IMPRESSION), r.setEventGaLabel((0, a.GS)(e, "game start", t.slug)), r.setGaNonInteraction(!0), r.setCustom("ads_abtest", n), r.build()
          }, t.prototype.rewardVideoStart = function(t, e, n) {
            var r = this.newEventBuilder();
            return r.setEventGaCategory("Funnel_Reward_Request"), r.setEventGaAction(i.bi.IMPRESSION), r.setEventGaLabel((0, a.GS)(e, "game start", t.slug)), r.setGaNonInteraction(!0), r.setCustom("ads_abtest", n), r.build()
          }, t.prototype.interstitialVideoStart = function(t, e, n) {
            var r = this.newEventBuilder();
            return r.setEventGaCategory("Funnel_Interstitial_Request"), r.setEventGaAction(i.bi.IMPRESSION), r.setEventGaLabel((0, a.GS)(e, "game start", t.slug)), r.setGaNonInteraction(!0), r.setCustom("ads_abtest", n), r.build()
          }, t.prototype.playAgainImpression = function(t, e, n) {
            var r = this.newEventBuilder();
            return r.setEventGaCategory("Funnel_End_Button_PlayAgain"), r.setEventGaAction(i.bi.IMPRESSION), r.setEventGaLabel((0, a.GS)(e, "game start", t.slug)), r.setGaNonInteraction(!0), r.setCustom("ads_abtest", n), r.build()
          }, t.prototype.playAgainClick = function(t, e) {
            var n = this.newEventBuilder();
            return n.setEventGaCategory("Funnel_End_Button_PlayAgain"), n.setEventGaAction(i.bi.CLICK), n.setEventGaLabel((0, a.GS)(e, "game start", t.slug)), n.setGaNonInteraction(!1), n.build()
          }, t.prototype.earlyAccessJoinButton = function(t) {
            var e = this.newEventBuilder();
            return e.setEventGaCategory("earlyAccessJoinButton"), e.setEventGaAction(i.bi.CLICK), e.setEventGaLabel(t.slug), e.setGaNonInteraction(!1), e.build()
          }, t.prototype.earlyAccessJoinButtonImpression = function(t) {
            var e = this.newEventBuilder();
            return e.setEventGaCategory("earlyAccessJoinButton"), e.setEventGaAction(i.bi.IMPRESSION), e.setEventGaLabel(t.slug), e.setGaNonInteraction(!0), e.build()
          }, t.prototype.numberTimesPlay = function(t, e, n) {
            var r = this.newEventBuilder();
            return r.setEventGaCategory("numberTimesPlay"), r.setEventGaAction(i.bi.CLICK), r.setEventGaLabel((0, a.GS)(n, "numberTimesPlay ".concat(e), t.slug)), r.setGaNonInteraction(!0), r.build()
          }, t.prototype.numberPlayVisits = function(t, e, n) {
            var r = this.newEventBuilder();
            return r.setEventGaCategory("numberPlayVisits"), r.setEventGaAction(i.bi.CLICK), r.setEventGaLabel((0, a.GS)(n, "numberPlayVisits ".concat(e), t.slug)), r.setGaNonInteraction(!0), r.build()
          }, t.prototype.fullScreenButtonClick = function(t, e) {
            var n = this.newEventBuilder();
            return n.setEventGaCategory("fullScreenButton"), n.setEventGaAction(i.bi.CLICK), n.setEventGaLabel(t.slug), n.setGaNonInteraction(!1), n.build()
          }, t.prototype.fullScreenExitButtonClick = function(t, e) {
            var n = this.newEventBuilder();
            return n.setEventGaCategory("fullScreenExitButton"), n.setEventGaAction(i.bi.CLICK), n.setEventGaLabel(t.slug), n.setGaNonInteraction(!1), n.build()
          }, t.prototype.fullScreenToolTipImpression = function(t, e) {
            var n = this.newEventBuilder();
            return n.setEventGaCategory("fullScreenToolTip"), n.setEventGaAction(i.bi.IMPRESSION), n.setEventGaLabel(t.slug), n.setGaNonInteraction(!1), n.build()
          }, t.prototype.fullScreenToolTipClick = function(t) {
            var e = this.newEventBuilder();
            return e.setEventGaCategory("fullScreenToolTip"), e.setEventGaAction(i.bi.CLICK), e.setEventGaLabel(t.slug), e.setGaNonInteraction(!1), e.build()
          }, t.prototype.newEventBuilder = function() {
            return new r.W
          }, t
        }(),
        u = function() {
          function t() {
            this.gaAnalytics = new s, this.aiAnalytics = new o
          }
          return t.prototype.gameStart = function(t, e, n, r, o, a, s, u, c, l, d) {
            return void 0 === l && (l = ""), (0, i.cA)(this.gaAnalytics.gameStart(e, n), this.aiAnalytics.gameStart(t, e, r, o, a, s, u, c, l, d))
          }, t.prototype.gameEnd = function(t, e, n, r, o, a, s, u, c, l) {
            return void 0 === c && (c = ""), (0, i.cA)(this.gaAnalytics.funnelEnd(e, n), this.aiAnalytics.gameEnd(t, e, r, o, a, s, u, c, l))
          }, t.prototype.numberTimesPlay = function(t, e, n, r) {
            return (0, i.cA)(this.gaAnalytics.numberTimesPlay(e, n, r), this.aiAnalytics.numberTimesPlay(t, e, n))
          }, t.prototype.numberPlayVisits = function(t, e, n, r) {
            return (0, i.cA)(this.gaAnalytics.numberPlayVisits(e, n, r), this.aiAnalytics.numberPlayVisits(t, e, n))
          }, t.prototype.prerollStart = function(t, e, n, r, o, a, s, u, c, l) {
            return void 0 === u && (u = ""), (0, i.cA)(this.gaAnalytics.prerollStart(e, n, u), this.aiAnalytics.prerollStart(t, e, r, o, a, s, u, c, l))
          }, t.prototype.prerollEnd = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.prerollEnd(t, e))
          }, t.prototype.prerollLoaded = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.prerollLoaded(t, e))
          }, t.prototype.prerollSkipped = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.prerollSkipped(t, e))
          }, t.prototype.rewardVideoStart = function(t, e, n, r, o, a, s, u, c, l) {
            return void 0 === s && (s = ""), (0, i.cA)(this.gaAnalytics.rewardVideoStart(e, n, s), this.aiAnalytics.rewardVideoStart(t, e, r, o, a, s, u, c, l))
          }, t.prototype.rewardVideoEnd = function(t, e, n, r, o, a, s, u) {
            return void 0 === a && (a = ""), (0, i.cA)(null, this.aiAnalytics.rewardVideoEnd(t, e, n, r, o, a, s, u))
          }, t.prototype.rewardVideoLoaded = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.rewardVideoLoaded(t, e))
          }, t.prototype.rewardVideoSkipped = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.rewardVideoSkipped(t, e))
          }, t.prototype.interstitialVideoStart = function(t, e, n, r, o, a, s, u, c) {
            return void 0 === s && (s = ""), (0, i.cA)(this.gaAnalytics.interstitialVideoStart(e, n, s), this.aiAnalytics.interstitialVideoStart(t, e, r, o, a, s, u, c))
          }, t.prototype.interstitialVideoEnd = function(t, e, n, r, o, a, s) {
            return void 0 === a && (a = ""), (0, i.cA)(null, this.aiAnalytics.interstitialVideoEnd(t, e, n, r, o, a, s))
          }, t.prototype.interstitialVideoLoaded = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.interstitialVideoLoaded(t, e))
          }, t.prototype.interstitialVideoSkipped = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.interstitialVideoSkipped(t, e))
          }, t.prototype.playAgainImpression = function(t, e, n) {
            return void 0 === n && (n = ""), (0, i.cA)(this.gaAnalytics.playAgainImpression(t, e, n), null)
          }, t.prototype.playAgainClick = function(t, e, n, r, o, a, s, u, c, l) {
            return void 0 === c && (c = ""), (0, i.cA)(this.gaAnalytics.playAgainClick(e, n), this.aiAnalytics.playAgainClick(t, e, r, o, a, s, u, c, l))
          }, t.prototype.saveScoreClick = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.saveScoreClick(t, e))
          }, t.prototype.gameNavigationLeaderboardIconClick = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.gameNavigationLeaderboardIconClick(t, e))
          }, t.prototype.allGamesImpression = function() {
            return (0, i.cA)(null, null)
          }, t.prototype.allGamesClick = function(t, e, n) {
            return (0, i.cA)(null, this.aiAnalytics.allGamesClick(t, e, n))
          }, t.prototype.adblockImpression = function(t, e, n) {
            return (0, i.cA)(null, this.aiAnalytics.adblockImpression(t, e, n))
          }, t.prototype.adblockClick = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.adblockClick(t, e))
          }, t.prototype.adblockDisabled = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.adblockDisabled(t, e))
          }, t.prototype.gamePageFeedbackImpression = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.gamePageFeedbackImpression(t, e))
          }, t.prototype.gamePageFeedbackClick = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.gamePageFeedbackClick(t, e))
          }, t.prototype.gamePageAdDividerImpression = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.gamePageAdDividerImpression(t, e))
          }, t.prototype.gamePageAdDividerClick = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.gamePageAdDividerClick(t, e))
          }, t.prototype.recommendedGamesImpressionNew = function(t, e, n) {
            return (0, i.cA)(null, this.aiAnalytics.recommendedGamesImpressionNew(t, e, n))
          }, t.prototype.recommendedGamesClickNew = function(t, e, n) {
            return (0, i.cA)(null, this.aiAnalytics.recommendedGamesClickNew(t, e, n))
          }, t.prototype.earlyAccessJoinButton = function(t, e) {
            return (0, i.cA)(this.gaAnalytics.earlyAccessJoinButton(e), this.aiAnalytics.earlyAccessJoinButton(t, e))
          }, t.prototype.earlyAccessJoinButtonImpression = function(t, e) {
            return (0, i.cA)(this.gaAnalytics.earlyAccessJoinButtonImpression(e), this.aiAnalytics.earlyAccessJoinButtonImpression(t, e))
          }, t.prototype.fullScreenButtonClick = function(t, e, n) {
            return (0, i.cA)(this.gaAnalytics.fullScreenButtonClick(e, n), this.aiAnalytics.fullScreenButtonClick(t, e))
          }, t.prototype.fullScreenExitButtonClick = function(t, e, n) {
            return (0, i.cA)(this.gaAnalytics.fullScreenExitButtonClick(e, n), this.aiAnalytics.fullScreenExitButtonClick(t, e))
          }, t.prototype.fullScreenToolTipImpression = function(t, e, n) {
            return (0, i.cA)(this.gaAnalytics.fullScreenToolTipImpression(e, n), this.aiAnalytics.fullScreenToolTipImpression(t, e))
          }, t.prototype.fullScreenToolTipClick = function(t, e) {
            return (0, i.cA)(this.gaAnalytics.fullScreenToolTipClick(e), this.aiAnalytics.fullScreenToolTipClick(t, e))
          }, t.prototype.sendEmote = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.sendEmote(t, e))
          }, t.prototype.returnEmote = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.returnEmote(t, e))
          }, t.prototype.sendEmoteExpire = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.sendEmoteExpire(t, e))
          }, t.prototype.gameNavigationCollectionButton = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.gameNavigationCollectionButton(t, e))
          }, t.prototype.visitCollection = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.visitCollection(t, e))
          }, t.prototype.saveCollectible = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.saveCollectible(t, e))
          }, t.prototype.receivedCollectible = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.receivedCollectible(t, e))
          }, t.prototype.commentsButton = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.commentsButton(t, e))
          }, t.prototype.commentSubmit = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.commentSubmit(t, e))
          }, t.prototype.commentSignInUp = function(t, e) {
            return (0, i.cA)(null, this.aiAnalytics.commentSignInUp(t, e))
          }, t
        }()
    },
    88058: (t, e, n) => {
      "use strict";
      var r, i, o, a;

      function s(t, e) {
        return {
          ga: t,
          ai: e
        }
      }
      n.d(e, {
        bi: () => r,
        cA: () => s
      }), (o = r || (r = {})).CLICK = "Click", o.IMPRESSION = "Impression", o.START = "Start", o.QUERY = "Query", o.ADBLOCKDISABLED = "Adblock Disabled", o.INSTALL = "Install", o.VISITS = "Visits", o.VISIT = "Visit", o.DRAG = "Drag", o.CANCEL = "Cancel", o.YES = "Yes", o.NO = "No", o.LOGIN = "Login", o.EMAILOPTIN = "emailOptIn", o.SKIP_AD = "SkipAd", o.POWER_UP = "PowerUp", (a = i || (i = {})).ANDROID = "Android", a.IOS = "iOS", a.OTHER = "other"
    },
    89463: (t, e, n) => {
      "use strict";

      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
      }
      e.Ay = void 0;
      var i = function(t, e) {
        if (t && t.__esModule) return t;
        if (null === t || "object" !== r(t) && "function" != typeof t) return {
          default: t
        };
        var n = o(void 0);
        if (n && n.has(t)) return n.get(t);
        var i = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in t)
          if ("default" !== s && Object.prototype.hasOwnProperty.call(t, s)) {
            var u = a ? Object.getOwnPropertyDescriptor(t, s) : null;
            u && (u.get || u.set) ? Object.defineProperty(i, s, u) : i[s] = t[s]
          } return i.default = t, n && n.set(t, i), i
      }(n(83679));

      function o(t) {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap,
          n = new WeakMap;
        return (o = function(t) {
          return t ? n : e
        })(t)
      }
      i.GA4, e.Ay = i.default
    },
    94779: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, {
        GoogleAnalyticsService: () => o
      });
      var r = n(89463),
        i = function() {
          return (i = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
          }).apply(this, arguments)
        },
        o = function() {
          function t() {}
          return t.init = function(t) {
            r.Ay.initialize([{
              trackingId: t
            }]), r.Ay.ga("set", "anonymizeIp", !0), r.Ay.ga("set", "allowAdPersonalizationSignals", !1)
          }, Object.defineProperty(t, "isDebugMode", {
            get: function() {
              return !("u" < typeof window) && ["localhost", "staging", "dev", "sandbox"].some(function(t) {
                return window.location.hostname.includes(t)
              })
            },
            enumerable: !1,
            configurable: !0
          }), t.shouldSendToGTM = function(t) {
            return "u" > typeof window && Array.isArray(window.dataLayer) && this.GTM_EVENT_LIST.includes(t)
          }, t.trackGTMEvent = function(t) {
            window.dataLayer.push(i({
              event: t.category,
              debug_mode: this.isDebugMode
            }, t))
          }, t.trackGAEvent = function(t) {
            r.Ay.event(t)
          }, t.trackEvent = function(t) {
            if (void 0 === t && (t = {}), this.shouldSendToGTM(t.category)) return this.trackGTMEvent(t);
            this.trackGAEvent(t)
          }, t.GTM_EVENT_LIST = ["registration", "Funnel_Content_Start", "Funnel_Interstitial_Request", "Funnel_PreRoll_Request", "Funnel_Reward_Request", "Funnel_End_Button_PlayAgain", "subscriptionPurchase", "virtualItemPurchaseSuccess"], t
        }()
    },
    94918: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function() {
        var t, e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          a = r || "";
        return i && (a = r.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(t, e, r) {
          return e > 0 && e + t.length !== r.length && t.search(n) > -1 && ":" !== r.charAt(e - 2) && ("-" !== r.charAt(e + t.length) || "-" === r.charAt(e - 1)) && 0 > r.charAt(e - 1).search(/[^\s-]/) ? t.toLowerCase() : t.substr(1).search(/[A-Z]|\../) > -1 ? t : t.charAt(0).toUpperCase() + t.substr(1)
        })), o && (a = "string" == typeof(e = t = a) && -1 !== e.indexOf("@") ? (console.warn("This arg looks like an email address, redacting."), "REDACTED (Potential Email Address)") : t), a
      };
      var n = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i
    }
  }
]);