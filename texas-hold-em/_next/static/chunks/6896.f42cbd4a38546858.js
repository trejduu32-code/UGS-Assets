! function() {
  try {
    var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6cae0f36-dcb7-457e-a14d-b8e70eca8d02", e._sentryDebugIdIdentifier = "sentry-dbid-6cae0f36-dcb7-457e-a14d-b8e70eca8d02")
  } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6896], {
    56896: (e, t, s) => {
      s.d(t, {
        httpClientIntegration: () => y
      });
      var r = s(21916),
        n = s(24709),
        o = s(90860),
        u = s(51568),
        a = s(16846),
        i = s(85319),
        l = s(86470),
        c = s(23069);

      function d(e) {
        return "/" === e[e.length - 1] ? e.slice(0, -1) : e
      }
      var f = s(53272),
        p = s(48867),
        h = s(30403);
      let y = (0, r._C)((e = {}) => {
        let t = {
          failedRequestStatusCodes: [
            [500, 599]
          ],
          failedRequestTargets: [/.*/],
          ...e
        };
        return {
          name: "HttpClient",
          setup(e) {
            var s, r, c, d;
            s = e, r = t, (0, o.m7)() && (0, u.ur)(e => {
              if ((0, a.KU)() !== s) return;
              let {
                response: t,
                args: o,
                error: u,
                virtualError: i
              } = e, [l, c] = o;
              t && function(e, t, s, r, o) {
                if (k(e, s.status, s.url)) {
                  var u, a;
                  let e, i, l, c, d = (u = t, !(a = r) && u instanceof Request || u instanceof Request && u.bodyUsed ? u : new Request(u, a));
                  C() && ([e, l] = g("Cookie", d), [i, c] = g("Set-Cookie", s));
                  let f = v({
                    url: d.url,
                    method: d.method,
                    status: s.status,
                    requestHeaders: e,
                    responseHeaders: i,
                    requestCookies: l,
                    responseCookies: c,
                    error: o,
                    type: "fetch"
                  });
                  (0, n.r)(f)
                }
              }(r, l, t, c, u || i)
            }, !1), c = e, d = t, "XMLHttpRequest" in i.O && (0, p.Mn)(e => {
              if ((0, a.KU)() !== c) return;
              let {
                error: t,
                virtualError: s
              } = e, r = e.xhr, o = r[p.Er];
              if (!o) return;
              let {
                method: u,
                request_headers: i
              } = o;
              try {
                ! function(e, t, s, r, o) {
                  if (k(e, t.status, t.responseURL)) {
                    let e, u, a;
                    if (C()) {
                      try {
                        let e = t.getResponseHeader("Set-Cookie") || t.getResponseHeader("set-cookie") || void 0;
                        e && (u = b(e))
                      } catch {}
                      try {
                        let e;
                        a = (e = t.getAllResponseHeaders()) ? e.split("\r\n").reduce((e, t) => {
                          let [s, r] = t.split(": ");
                          return s && r && (e[s] = r), e
                        }, {}) : {}
                      } catch {}
                      e = r
                    }
                    let i = v({
                      url: t.responseURL,
                      method: s,
                      status: t.status,
                      requestHeaders: e,
                      responseHeaders: a,
                      responseCookies: u,
                      error: o,
                      type: "xhr"
                    });
                    (0, n.r)(i)
                  }
                }(d, r, u, i, t || s)
              } catch (e) {
                h.T && l.Yz.warn("Error while extracting response event form XHR response", e)
              }
            })
          }
        }
      });

      function g(e, t) {
        var s;
        let r, n, o = (s = t.headers, r = {}, s.forEach((e, t) => {
          r[t] = e
        }), r);
        try {
          let t = o[e] || o[e.toLowerCase()] || void 0;
          t && (n = b(t))
        } catch {}
        return [o, n]
      }

      function b(e) {
        return e.split("; ").reduce((e, t) => {
          let [s, r] = t.split("=");
          return s && r && (e[s] = r), e
        }, {})
      }

      function k(e, t, s) {
        var r, n, o, u, i, l, f;
        let p, h, y;
        return r = e.failedRequestStatusCodes, r.some(e => "number" == typeof e ? e === t : t >= e[0] && t <= e[1]) && (n = e.failedRequestTargets, n.some(e => "string" == typeof e ? s.includes(e) : e.test(s))) && (o = (0, a.KU)(), p = o?.getDsn(), h = o?.getOptions().tunnel, u = s, i = p, !(!(!(y = (0, c.kg)(u)) || (0, c.nt)(y)) && i && y.host.includes(i.host) && /(^|&|\?)sentry_key=/.test(y.search)) && (l = s, !(f = h) || d(l) !== d(f)))
      }

      function v(e) {
        let t = (0, a.KU)(),
          s = t && e.error && e.error instanceof Error ? e.error.stack : void 0,
          r = s && t ? t.getOptions().stackParser(s, 0, 1) : void 0,
          n = `HTTP Client Error with status code: ${e.status}`,
          o = {
            message: n,
            exception: {
              values: [{
                type: "Error",
                value: n,
                stacktrace: r ? {
                  frames: r
                } : void 0
              }]
            },
            request: {
              url: e.url,
              method: e.method,
              headers: e.requestHeaders,
              cookies: e.requestCookies
            },
            contexts: {
              response: {
                status_code: e.status,
                headers: e.responseHeaders,
                cookies: e.responseCookies,
                body_size: function(e) {
                  if (e) {
                    let t = e["Content-Length"] || e["content-length"];
                    if (t) return parseInt(t, 10)
                  }
                }(e.responseHeaders)
              }
            }
          };
        return (0, f.M6)(o, {
          type: `auto.http.client.${e.type}`,
          handled: !1
        }), o
      }

      function C() {
        let e = (0, a.KU)();
        return !!e && !!e.getOptions().sendDefaultPii
      }
    }
  }
]);