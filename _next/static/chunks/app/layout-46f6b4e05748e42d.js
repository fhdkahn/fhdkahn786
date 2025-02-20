(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [177], {
        1043: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 6936)), Promise.resolve().then(n.t.bind(n, 5126, 23)), Promise.resolve().then(n.t.bind(n, 513, 23)), Promise.resolve().then(n.t.bind(n, 9707, 23))
        },
        6936: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => i
            });
            var r = n(5432);
            n(4436);
            var a = n(513),
                l = n.n(a);
            let i = function() {
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(l(), {
                        id: "flowise-embed",
                        strategy: "afterInteractive",
                        children: '\n          import(\'https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js\')\n            .then(module => {\n              const Chatbot = module.default;\n              Chatbot.init({\n                chatflowid: "dc4386cd-15fb-4680-8070-a38275eceb4e",\n                apiHost: "https://flowise.leonvanzyl.com",\n                theme: {\n                  chatWindow: {\n                    welcomeMessage: "Hi, this is Sammy from cognaitiv.ai.  How can I assist you today?",\n                    poweredByTextColor: "#fff",\n                    botMessage: {\n                      backgroundColor: "#f7f8ff",\n                      textColor: "#303235",\n                      showAvatar: true,\n                      avatarSrc: "assistant.webp",\n                    },\n                  },\n                },\n              });\n            });\n        '
                    })
                })
            }
        },
        9300: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    cancelIdleCallback: function() {
                        return r
                    },
                    requestIdleCallback: function() {
                        return n
                    }
                });
            let n = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
                    let t = Date.now();
                    return self.setTimeout(function() {
                        e({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - t))
                            }
                        })
                    }, 1)
                },
                r = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
                    return clearTimeout(e)
                };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        513: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    default: function() {
                        return _
                    },
                    handleClientScriptLoad: function() {
                        return y
                    },
                    initScriptLoader: function() {
                        return h
                    }
                });
            let r = n(3818),
                a = n(8475),
                l = n(5432),
                i = r._(n(7173)),
                o = a._(n(4436)),
                s = n(2600),
                d = n(3888),
                u = n(9300),
                c = new Map,
                f = new Set,
                p = e => {
                    if (i.default.preinit) {
                        e.forEach(e => {
                            i.default.preinit(e, {
                                as: "style"
                            })
                        });
                        return
                    }
                    if ("undefined" != typeof window) {
                        let t = document.head;
                        e.forEach(e => {
                            let n = document.createElement("link");
                            n.type = "text/css", n.rel = "stylesheet", n.href = e, t.appendChild(n)
                        })
                    }
                },
                b = e => {
                    let {
                        src: t,
                        id: n,
                        onLoad: r = () => {},
                        onReady: a = null,
                        dangerouslySetInnerHTML: l,
                        children: i = "",
                        strategy: o = "afterInteractive",
                        onError: s,
                        stylesheets: u
                    } = e, b = n || t;
                    if (b && f.has(b)) return;
                    if (c.has(t)) {
                        f.add(b), c.get(t).then(r, s);
                        return
                    }
                    let y = () => {
                            a && a(), f.add(b)
                        },
                        h = document.createElement("script"),
                        m = new Promise((e, t) => {
                            h.addEventListener("load", function(t) {
                                e(), r && r.call(this, t), y()
                            }), h.addEventListener("error", function(e) {
                                t(e)
                            })
                        }).catch(function(e) {
                            s && s(e)
                        });
                    l ? (h.innerHTML = l.__html || "", y()) : i ? (h.textContent = "string" == typeof i ? i : Array.isArray(i) ? i.join("") : "", y()) : t && (h.src = t, c.set(t, m)), (0, d.setAttributesFromProps)(h, e), "worker" === o && h.setAttribute("type", "text/partytown"), h.setAttribute("data-nscript", o), u && p(u), document.body.appendChild(h)
                };

            function y(e) {
                let {
                    strategy: t = "afterInteractive"
                } = e;
                "lazyOnload" === t ? window.addEventListener("load", () => {
                    (0, u.requestIdleCallback)(() => b(e))
                }) : b(e)
            }

            function h(e) {
                e.forEach(y), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
                    let t = e.id || e.getAttribute("src");
                    f.add(t)
                })
            }

            function m(e) {
                let {
                    id: t,
                    src: n = "",
                    onLoad: r = () => {},
                    onReady: a = null,
                    strategy: d = "afterInteractive",
                    onError: c,
                    stylesheets: p,
                    ...y
                } = e, {
                    updateScripts: h,
                    scripts: m,
                    getIsSsr: _,
                    appDir: g,
                    nonce: v
                } = (0, o.useContext)(s.HeadManagerContext), w = (0, o.useRef)(!1);
                (0, o.useEffect)(() => {
                    let e = t || n;
                    w.current || (a && e && f.has(e) && a(), w.current = !0)
                }, [a, t, n]);
                let O = (0, o.useRef)(!1);
                if ((0, o.useEffect)(() => {
                        !O.current && ("afterInteractive" === d ? b(e) : "lazyOnload" === d && ("complete" === document.readyState ? (0, u.requestIdleCallback)(() => b(e)) : window.addEventListener("load", () => {
                            (0, u.requestIdleCallback)(() => b(e))
                        })), O.current = !0)
                    }, [e, d]), ("beforeInteractive" === d || "worker" === d) && (h ? (m[d] = (m[d] || []).concat([{
                        id: t,
                        src: n,
                        onLoad: r,
                        onReady: a,
                        onError: c,
                        ...y
                    }]), h(m)) : _ && _() ? f.add(t || n) : _ && !_() && b(e)), g) {
                    if (p && p.forEach(e => {
                            i.default.preinit(e, {
                                as: "style"
                            })
                        }), "beforeInteractive" === d) return n ? (i.default.preload(n, y.integrity ? {
                        as: "script",
                        integrity: y.integrity,
                        nonce: v,
                        crossOrigin: y.crossOrigin
                    } : {
                        as: "script",
                        nonce: v,
                        crossOrigin: y.crossOrigin
                    }), (0, l.jsx)("script", {
                        nonce: v,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([n, { ...y,
                                id: t
                            }]) + ")"
                        }
                    })) : (y.dangerouslySetInnerHTML && (y.children = y.dangerouslySetInnerHTML.__html, delete y.dangerouslySetInnerHTML), (0, l.jsx)("script", {
                        nonce: v,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, { ...y,
                                id: t
                            }]) + ")"
                        }
                    }));
                    "afterInteractive" === d && n && i.default.preload(n, y.integrity ? {
                        as: "script",
                        integrity: y.integrity,
                        nonce: v,
                        crossOrigin: y.crossOrigin
                    } : {
                        as: "script",
                        nonce: v,
                        crossOrigin: y.crossOrigin
                    })
                }
                return null
            }
            Object.defineProperty(m, "__nextScript", {
                value: !0
            });
            let _ = m;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        3888: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "setAttributesFromProps", {
                enumerable: !0,
                get: function() {
                    return l
                }
            });
            let n = {
                    acceptCharset: "accept-charset",
                    className: "class",
                    htmlFor: "for",
                    httpEquiv: "http-equiv",
                    noModule: "noModule"
                },
                r = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"];

            function a(e) {
                return ["async", "defer", "noModule"].includes(e)
            }

            function l(e, t) {
                for (let [l, i] of Object.entries(t)) {
                    if (!t.hasOwnProperty(l) || r.includes(l) || void 0 === i) continue;
                    let o = n[l] || l.toLowerCase();
                    "SCRIPT" === e.tagName && a(o) ? e[o] = !!i : e.setAttribute(o, String(i)), (!1 === i || "SCRIPT" === e.tagName && a(o) && (!i || "false" === i)) && (e.setAttribute(o, ""), e.removeAttribute(o))
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        5126: () => {},
        9707: e => {
            e.exports = {
                style: {
                    fontFamily: "'Poppins', 'Poppins Fallback'",
                    fontStyle: "normal"
                },
                className: "__className_2dbf9b"
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [644, 921, 871, 358], () => t(1043)), _N_E = e.O()
    }
]);