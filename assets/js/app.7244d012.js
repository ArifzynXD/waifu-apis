(function(t) {
  function e(e) {
    for (var i, o, r = e[0], c = e[1], l = e[2], u = 0, p = []; u < r.length; u++) o = r[u], Object.prototype.hasOwnProperty.call(a, o) && a[o] && p.push(a[o][0]), a[o] = 0;
    for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
    d && d(e);
    while (p.length) p.shift()();
    return s.push.apply(s, l || []), n()
  }

  function n() {
    for (var t, e = 0; e < s.length; e++) {
      for (var n = s[e], i = !0, r = 1; r < n.length; r++) {
        var c = n[r];
        0 !== a[c] && (i = !1)
      }
      i && (s.splice(e--, 1), t = o(o.s = n[0]))
    }
    return t
  }
  var i = {}, a = {
    app: 0
  }, s = [];

  function o(e) {
    if (i[e]) return i[e].exports;
    var n = i[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return t[e].call(n.exports, n, n.exports, o), n.l = !0, n.exports
  }
  o.m = t, o.c = i, o.d = function(t, e, n) {
    o.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    })
  }, o.r = function(t) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, o.t = function(t, e) {
    if (1 & e && (t = o(t)), 8 & e) return t;
    if (4 & e && "object" === typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (o.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var i in t) o.d(n, i, function(e) {
      return t[e]
    }.bind(null, i));
    return n
  }, o.n = function(t) {
    var e = t && t.__esModule ? function() {
        return t["default"]
      } : function() {
        return t
      };
    return o.d(e, "a", e), e
  }, o.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, o.p = "/";
  var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
    c = r.push.bind(r);
  r.push = e, r = r.slice();
  for (var l = 0; l < r.length; l++) e(r[l]);
  var d = c;
  s.push([0, "chunk-vendors"]), n()
})({
  0: function(t, e, n) {
    t.exports = n("56d7")
  },
  "0b82": function(t, e, n) {},
  "0f76": function(t, e, n) {
    "use strict";
    n("b955")
  },
  1190: function(t, e, n) {
    "use strict";
    n("0b82")
  },
  "16f4": function(t, e, n) {
    t.exports = n.p + "img/404.e2912bd6.png"
  },
  3529: function(t, e, n) {},
  "56d7": function(t, e, n) {
    "use strict";
    n.r(e);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var i = n("2b0e"),
      a = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("v-app", [n("Navbar"), void 0 != this.$store.getters.endpoints ? n("v-main", [n("router-view")], 1) : t._e()], 1)
      }, s = [],
      o = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", [n("v-navigation-drawer", {
          attrs: {
            app: "",
            clipped: ""
          },
          scopedSlots: t._u([{
            key: "append",
            fn: function() {
              return t._l(t.bottomlink, (function(e) {
                return n("v-list", {
                  key: e,
                  attrs: {
                    dense: "",
                    nav: ""
                  }
                }, [n("v-list-item", {
                  attrs: {
                    href: e.link
                  }
                }, [n("v-list-item-action", [n("v-icon", [t._v(t._s(e.icon))])], 1), n("v-list-item-content", [n("v-list-item-title", [t._v(t._s(e.title))])], 1)], 1)], 1)
              }))
            },
            proxy: !0
          }]),
          model: {
            value: t.drawer,
            callback: function(e) {
              t.drawer = e
            },
            expression: "drawer"
          }
        }, t._l(t.routes, (function(e) {
          return n("v-list", {
            key: e,
            attrs: {
              dense: "",
              nav: ""
            }
          }, [n("v-list-item", {
            attrs: {
              link: "",
              to: e.link
            }
          }, [n("v-list-item-action", [n("v-icon", [t._v(t._s(e.icon))])], 1), n("v-list-item-content", [n("v-list-item-title", [t._v(t._s(e.title))])], 1)], 1)], 1)
        })), 1), n("v-app-bar", {
          attrs: {
            app: "",
            "clipped-left": ""
          }
        }, [n("v-app-bar-nav-icon", {
          on: {
            click: function(e) {
              e.stopPropagation(), t.drawer = !t.drawer
            }
          }
        }), n("v-toolbar-title", [t._v("WAIFU.PICS")])], 1)], 1)
      }, r = [],
      c = {
        data: function() {
          return {
            drawer: !1,
            routes: [{
              title: "Home",
              link: "/",
              icon: "mdi-home"
            }, {
              title: "NSFW",
              link: "/nsfw/waifu",
              icon: "mdi-domino-mask"
            }, {
              title: "More",
              link: "/more",
              icon: "mdi-dots-horizontal"
            }, {
              title: "Uploads",
              link: "/upload",
              icon: "mdi-upload"
            }, {
              title: "Docs",
              link: "/docs",
              icon: "mdi-api"
            }, {
              title: "Dashboard",
              link: "/admin",
              icon: "mdi-view-dashboard"
            }],
            bottomlink: [{
              title: "Github",
              link: "https://github.com/Riku32/waifu.pics",
              icon: "mdi-github"
            }]
          }
        }
      }, l = c,
      d = n("2877"),
      u = n("6544"),
      p = n.n(u),
      f = n("40dc"),
      v = n("5bc1"),
      m = n("132d"),
      h = n("8860"),
      b = n("da13"),
      g = n("1800"),
      w = n("5d23"),
      _ = n("f774"),
      x = n("2a7f"),
      y = Object(d["a"])(l, o, r, !1, null, null, null),
      C = y.exports;
    p()(y, {
      VAppBar: f["a"],
      VAppBarNavIcon: v["a"],
      VIcon: m["a"],
      VList: h["a"],
      VListItem: b["a"],
      VListItemAction: g["a"],
      VListItemContent: w["a"],
      VListItemTitle: w["c"],
      VNavigationDrawer: _["a"],
      VToolbarTitle: x["a"]
    });
    var V = {
      name: "App",
      components: {
        Navbar: C
      },
      created: function() {
        this.$store.commit("endpoints"), this.$vuetify.theme.dark = !0
      }
    }, k = V,
      I = (n("5c0b"), n("7496")),
      $ = n("f6c4"),
      S = Object(d["a"])(k, a, s, !1, null, null, null),
      T = S.exports;
    p()(S, {
      VApp: I["a"],
      VMain: $["a"]
    });
    var j = n("8c4f"),
      O = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", {
          staticClass: "about centered"
        }, [n("v-card", {
          staticClass: "mx-auto",
          attrs: {
            "max-width": "400",
            outlined: ""
          }
        }, [n("v-list-item", {
          attrs: {
            "three-line": ""
          }
        }, [n("v-list-item-content", [n("v-list-item-title", {
          staticClass: "headline mb-1"
        }, [t._v("Pages")]), n("v-list-item-subtitle", [t._v("Here are all the different pages you can explore.")])], 1)], 1), n("v-expansion-panels", {
          attrs: {
            multiple: ""
          }
        }, [n("v-expansion-panel", [n("v-expansion-panel-header", [t._v("SFW")]), n("v-expansion-panel-content", [n("v-list-item", {
          staticClass: "bottom"
        }, t._l(this.$store.getters.endpoints.sfw, (function(e) {
          return n("v-btn", {
            key: e,
            attrs: {
              outlined: "",
              to: "/sfw/" + e,
              text: ""
            }
          }, [t._v(t._s(e))])
        })), 1)], 1)], 1), n("v-expansion-panel", [n("v-expansion-panel-header", [t._v("NSFW")]), n("v-expansion-panel-content", [n("v-list-item", {
          staticClass: "bottom"
        }, t._l(this.$store.getters.endpoints.nsfw, (function(e) {
          return n("v-btn", {
            key: e,
            attrs: {
              outlined: "",
              to: "/nsfw/" + e,
              text: ""
            }
          }, [t._v(t._s(e))])
        })), 1)], 1)], 1)], 1)], 1)], 1)
      }, L = [],
      P = {
        name: "More"
      }, E = P,
      F = (n("fde0"), n("8336")),
      A = n("b0af"),
      D = n("cd55"),
      q = n("49e2"),
      B = n("c865"),
      M = n("0393"),
      R = Object(d["a"])(E, O, L, !1, null, "c83edad4", null),
      N = R.exports;
    p()(R, {
      VBtn: F["a"],
      VCard: A["a"],
      VExpansionPanel: D["a"],
      VExpansionPanelContent: q["a"],
      VExpansionPanelHeader: B["a"],
      VExpansionPanels: M["a"],
      VListItem: b["a"],
      VListItemContent: w["a"],
      VListItemSubtitle: w["b"],
      VListItemTitle: w["c"]
    });
    var W = function() {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return t.is404 ? i("div", {
        staticClass: "centered"
      }, [i("img", {
        attrs: {
          src: n("16f4")
        }
      }), i("h1", [t._v("Are you lost?")]), i("v-btn", {
        attrs: {
          outlined: "",
          to: "/",
          text: ""
        }
      }, [t._v("Go Home!")])], 1) : i("div", [i("v-btn", {
        attrs: {
          fab: "",
          large: "",
          dark: "",
          fixed: "",
          bottom: "",
          right: ""
        },
        on: {
          click: function(e) {
            return t.getImages(!1)
          }
        }
      }, [i("v-icon", [t._v("mdi-refresh")])], 1), i("div", {
        attrs: {
          id: "photos"
        }
      }, t._l(t.images, (function(e) {
        return i("div", {
          key: e
        }, [i("img", {
          attrs: {
            src: e
          },
          on: {
            click: function(n) {
              return t.imagePreview(e)
            }
          }
        })])
      })), 0), i("v-dialog", {
        attrs: {
          "max-width": "500px"
        },
        model: {
          value: t.ImageDialog.show,
          callback: function(e) {
            t.$set(t.ImageDialog, "show", e)
          },
          expression: "ImageDialog.show"
        }
      }, [i("img", {
        staticClass: "preview-image",
        attrs: {
          src: t.ImageDialog.url
        }
      })])], 1)
    }, G = [],
      U = (n("99af"), n("d81d"), n("bc3a")),
      H = n.n(U),
      J = {
        data: function() {
          return {
            exclude: [],
            images: [],
            is404: !1,
            ImageDialog: {
              show: !1,
              url: ""
            }
          }
        },
        watch: {
          "$route.params.endpoint": function() {
            this.is404 = !1, this.exclude = [], this.getImages(!0)
          },
          "$route.params.type": function() {
            this.is404 = !1, this.exclude = [], this.getImages(!0)
          }
        },
        mounted: function() {
          this.getImages(!0)
        },
        methods: {
          imagePreview: function(t) {
            this.ImageDialog = {
              show: !0,
              url: t
            }
          },
          getImages: function(t) {
            var e = this,
              n = this.$route.params,
              i = n.type,
              a = n.endpoint;
            H()({
              method: "post",
              url: "".concat("https://api.waifu.pics/", "many/")
                .concat(void 0 === i ? "sfw" : i, "/")
                .concat(void 0 === a ? "waifu" : a),
              data: {
                exclude: this.exclude
              }
            })
              .then((function(t) {
              t.data.files.map((function(t) {
                e.exclude.push(t)
              })), e.images = t.data.files
            }))
              .
            catch ((function() {
              t ? e.is404 = !0 : (e.exclude = [], e.getImages(!1))
            }))
          }
        }
      }, z = J,
      Y = (n("b1d2"), n("169a")),
      K = Object(d["a"])(z, W, G, !1, null, "0615afbe", null),
      Q = K.exports;
    p()(K, {
      VBtn: F["a"],
      VDialog: Y["a"],
      VIcon: m["a"]
    });
    var X = function() {
      var t = this,
        e = t.$createElement,
        n = t._self._c || e;
      return n("v-container", {
        staticClass: "compact",
        staticStyle: {
          "margin-top": "50px"
        }
      }, [n("v-row", {
        staticClass: "mb-6 compact",
        attrs: {
          justify: "flex-start",
          "no-gutters": ""
        }
      }, [n("div", [n("div", [n("h1", {
        staticClass: "font-weight-light"
      }, [t._v("API Docs")]), n("p", [t._v("The open and supported part of the waifu.pics api is incredibly easy to use. You can find more information about how to utilize this in your application below.")])]), n("v-alert", {
        attrs: {
          type: "info",
          outlined: ""
        }
      }, [t._v(" If you have any issues or questions with the API, please create a Github issue at "), n("a", {
        attrs: {
          href: "https://github.com/Waifu-pics/waifu-api"
        }
      }, [t._v("https://github.com/Waifu-pics/waifu-api")])]), n("v-alert", {
        attrs: {
          type: "warning",
          outlined: ""
        }
      }, [t._v(" Currently we have switched the API url to https://api.waifu.pics from https://waifu.pics/api. While that route does still work, you should switch any existing application to use the newer URL. ")]), n("v-divider")], 1), n("div", [n("h2", {
        staticClass: "font-weight-light tab"
      }, [t._v("Image Categories")]), n("v-tabs", {
        staticClass: "compact",
        attrs: {
          dark: ""
        },
        model: {
          value: t.tab,
          callback: function(e) {
            t.tab = e
          },
          expression: "tab"
        }
      }, [n("v-tabs-slider"), n("v-tab", [t._v("sfw")]), n("v-tab", [t._v("nsfw")]), n("v-tab-item", [n("v-list", {
        staticClass: "compact"
      }, t._l(this.$store.getters.endpoints.sfw, (function(e) {
        return n("v-list-item", {
          key: e
        }, [n("v-list-item-content", [n("v-list-item-title", [t._v(t._s(e))])], 1)], 1)
      })), 1)], 1), n("v-tab-item", [n("v-list", {
        staticClass: "compact"
      }, t._l(this.$store.getters.endpoints.nsfw, (function(e) {
        return n("v-list-item", {
          key: e
        }, [n("v-list-item-content", [n("v-list-item-title", [t._v(t._s(e))])], 1)], 1)
      })), 1)], 1)], 1), n("v-divider", {
        staticStyle: {
          "margin-top": "20px"
        }
      })], 1), n("div", {
        staticClass: "compact"
      }, [n("div", {
        staticClass: "tab"
      }, [n("h2", {
        staticClass: "font-weight-light"
      }, [t._v("Get image")]), n("p", [t._v("Recieve one image url from your endpoint of choice.")])]), n("Apitable", {
        attrs: {
          type: "GET"
        }
      }, [t._v(" " + t._s(t.api)), n("span", {
        staticClass: "vararg"
      }, [t._v("type")]), t._v("/"), n("span", {
        staticClass: "vararg"
      }, [t._v("category")])]), n("div", {
        staticClass: "tab"
      }, [n("Comment", [t._v("The type field is the type classification. Valid types are "), n("b", [t._v("sfw")]), t._v(" and "), n("b", [t._v("nsfw")]), t._v(".")])], 1), n("div", {
        staticClass: "tab"
      }, [n("h3", {
        staticClass: "font-weight-light"
      }, [t._v("Response")]), n("p", [t._v("Here is an example response for this endpoint")]), n("vue-json-pretty", {
        attrs: {
          data: t.examples.one
        }
      })], 1), n("v-divider")], 1), n("div", {
        staticClass: "compact"
      }, [n("div", {
        staticClass: "tab"
      }, [n("h2", {
        staticClass: "font-weight-light"
      }, [t._v("Get many images")]), n("p", [t._v("Recieve 30 unique images from a specific endpoint or category")])]), n("Apitable", {
        staticClass: "tab",
        attrs: {
          type: "POST"
        }
      }, [t._v(" " + t._s(t.api) + "many/"), n("span", {
        staticClass: "vararg"
      }, [t._v("type")]), t._v("/"), n("span", {
        staticClass: "vararg"
      }, [t._v("category")])]), n("div", {
        staticClass: "tab"
      }, [n("Comment", [t._v("The type field is the type classification. Valid types are "), n("b", [t._v("sfw")]), t._v(" and "), n("b", [t._v("nsfw")]), t._v(".")])], 1), n("div", {
        staticClass: "tab"
      }, [n("h3", {
        staticClass: "font-weight-light"
      }, [t._v("Fields")]), n("p", [t._v("Fields that can be sent to this endpoint")]), n("Reqtable", {
        attrs: {
          field: "exclude",
          type: "String Array"
        }
      }, [t._v(" A list of URL's to not recieve from this endpoint. ")])], 1), n("div", {
        staticClass: "tab"
      }, [n("h3", {
        staticClass: "font-weight-light"
      }, [t._v("Response")]), n("p", [t._v("Here is an example response for this endpoint")]), n("vue-json-pretty", {
        attrs: {
          data: t.examples.many
        }
      })], 1), n("v-divider")], 1)])], 1)
    }, Z = [],
      tt = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("v-simple-table", [n("thead", [n("tr", [n("th", {
          staticClass: "text-left"
        }, [t._v("URL")]), n("th", {
          staticClass: "text-left"
        }, [t._v("Request Type")])])]), n("tbody", [n("tr", [n("td", [t._t("default")], 2), n("td", [t._v(t._s(t.type))])])])])
      }, et = [],
      nt = {
        name: "apitable",
        props: ["type"]
      }, it = nt,
      at = n("1f4f"),
      st = Object(d["a"])(it, tt, et, !1, null, null, null),
      ot = st.exports;
    p()(st, {
      VSimpleTable: at["a"]
    });
    var rt = function() {
      var t = this,
        e = t.$createElement,
        n = t._self._c || e;
      return n("v-simple-table", [n("thead", [n("tr", [n("th", {
        staticClass: "text-left"
      }, [t._v("Field")]), n("th", {
        staticClass: "text-left"
      }, [t._v("Data Type")]), n("th", {
        staticClass: "text-left"
      }, [t._v("Description")])])]), n("tbody", [n("tr", [n("td", [t._v(t._s(t.field))]), n("td", [t._v(t._s(t.type))]), n("td", [t._t("default")], 2)])])])
    }, ct = [],
      lt = {
        name: "reqtable",
        props: ["type", "field"]
      }, dt = lt,
      ut = Object(d["a"])(dt, rt, ct, !1, null, null, null),
      pt = ut.exports;
    p()(ut, {
      VSimpleTable: at["a"]
    });
    var ft = function() {
      var t = this,
        e = t.$createElement,
        n = t._self._c || e;
      return n("div", [n("i", [n("p", [t._t("default")], 2)])])
    }, vt = [],
      mt = (n("1190"), {}),
      ht = Object(d["a"])(mt, ft, vt, !1, null, "75804152", null),
      bt = ht.exports,
      gt = n("838b"),
      wt = n.n(gt),
      _t = (n("b83f"), {
        name: "More",
        components: {
          Apitable: ot,
          Comment: bt,
          VueJsonPretty: wt.a,
          Reqtable: pt
        },
        data: function() {
          return {
            api: "https://api.waifu.pics/",
            examples: {
              one: JSON.parse('{"url": "'.concat("https://i.waifu.pics/", 'Tj6Wzwo.png"}')),
              many: JSON.parse('{"files": ["'.concat("https://i.waifu.pics/", 'qUY7BBo.jpg"]}'))
            }
          }
        }
      }),
      xt = _t,
      yt = (n("cc68"), n("0798")),
      Ct = n("a523"),
      Vt = n("ce7e"),
      kt = n("0fd9"),
      It = n("71a3"),
      $t = n("c671"),
      St = n("fe57"),
      Tt = n("9a96"),
      jt = Object(d["a"])(xt, X, Z, !1, null, "565f65fe", null),
      Ot = jt.exports;
    p()(jt, {
      VAlert: yt["a"],
      VContainer: Ct["a"],
      VDivider: Vt["a"],
      VList: h["a"],
      VListItem: b["a"],
      VListItemContent: w["a"],
      VListItemTitle: w["c"],
      VRow: kt["a"],
      VTab: It["a"],
      VTabItem: $t["a"],
      VTabs: St["a"],
      VTabsSlider: Tt["a"]
    });
    var Lt = function() {
      var t = this,
        e = t.$createElement,
        n = t._self._c || e;
      return t.show ? n("div", {
        staticClass: "centered"
      }, [n("v-card", {
        attrs: {
          "max-width": "400",
          outlined: ""
        }
      }, [n("div", {
        staticClass: "topbox"
      }, [n("h1", {
        staticClass: "font-weight-light"
      }, [t._v("Sign in")]), n("p", [t._v("login to admin dashboard")])]), n("v-form", {
        on: {
          submit: function(e) {
            return e.preventDefault(), t.login(e)
          }
        }
      }, [n("v-card-text", [n("v-text-field", {
        attrs: {
          outlined: "",
          label: "Login",
          name: "login",
          type: "text"
        },
        model: {
          value: t.username,
          callback: function(e) {
            t.username = e
          },
          expression: "username"
        }
      }), n("v-text-field", {
        attrs: {
          outlined: "",
          id: "password",
          label: "Password",
          name: "password",
          type: "password"
        },
        model: {
          value: t.password,
          callback: function(e) {
            t.password = e
          },
          expression: "password"
        }
      })], 1), n("v-btn", {
        staticClass: "centered",
        attrs: {
          depressed: "",
          type: "submit"
        }
      }, [t._v("Login")])], 1)], 1)], 1) : t._e()
    }, Pt = [],
      Et = n("bc3a"),
      Ft = Et.
    default, At = {
      getEndpoints: function(t) {
        Ft({
          method: "get",
          url: "".concat("https://api.waifu.pics/", "endpoints")
        })
          .then((function(e) {
          t(e.data)
        }))
      },
      checkLoggedIn: function() {
        return Ft({
          method: "post",
          url: "".concat("https://api.waifu.pics/", "admin/login"),
          withCredentials: !0
        })
      },
      getOne: function(t, e, n) {
        Ft({
          method: "get",
          url: "".concat("https://api.waifu.pics/")
            .concat(e ? "nsfw" : "sfw", "/")
            .concat(t)
        })
          .then((function(t) {
          n(t.data)
        }))
      }
    }, Dt = {
      data: function() {
        return {
          show: !1
        }
      },
      methods: {
        login: function() {
          var t = this,
            e = this.username,
            n = this.password;
          H()({
            method: "post",
            url: "".concat("https://api.waifu.pics/", "admin/login"),
            data: {
              username: e,
              password: n
            },
            withCredentials: !0
          })
            .then((function() {
            t.$notification.success("You have been logged in!"), t.$router.push("/admin")
          }))
            .
          catch ((function() {
            t.$notification.error("There was a problem logging in!")
          }))
        }
      },
      mounted: function() {
        var t = this;
        At.checkLoggedIn()
          .then((function() {
          t.$router.push("/admin")
        }))
          .
        catch ((function() {
          t.show = !0
        }))
      }
    }, qt = Dt, Bt = (n("8c51"), n("99d9")), Mt = n("4bd4"), Rt = n("8654"), Nt = Object(d["a"])(qt, Lt, Pt, !1, null, "a361091e", null), Wt = Nt.exports;
    p()(Nt, {
      VBtn: F["a"],
      VCard: A["a"],
      VCardText: Bt["b"],
      VForm: Mt["a"],
      VTextField: Rt["a"]
    });
    var Gt = function() {
      var t = this,
        e = t.$createElement,
        n = t._self._c || e;
      return n("div", {
        staticClass: "centered"
      }, [n("v-container", [n("v-card", {
        staticClass: "mx-auto",
        attrs: {
          "max-width": "500",
          outlined: ""
        }
      }, [n("v-list-item", {
        attrs: {
          "three-line": ""
        }
      }, [n("v-list-item-content", [n("v-list-item-title", {
        staticClass: "headline mb-1"
      }, [t._v("Upload file")]), n("v-select", {
        attrs: {
          dense: "",
          outlined: "",
          label: "Endpoint",
          items: t.endpoints
        },
        model: {
          value: t.endpoint,
          callback: function(e) {
            t.endpoint = e
          },
          expression: "endpoint"
        }
      }), n("v-checkbox", {
        staticStyle: {
          "margin-left": "10px"
        },
        attrs: {
          label: "NSFW"
        },
        on: {
          change: t.update
        },
        model: {
          value: t.nsfw,
          callback: function(e) {
            t.nsfw = e
          },
          expression: "nsfw"
        }
      }), n("file-pond", {
        ref: "pond",
        attrs: {
          name: "upload",
          "label-idle": "Drop files here...",
          "allow-multiple": !0,
          "accepted-file-types": "image/jpeg, image/png, image/gif",
          "data-max-file-size": "30MB",
          server: t.server
        },
        on: {
          initfile: t.handleFilePondInitFile
        }
      })], 1)], 1)], 1)], 1)], 1)
    }, Ut = [],
      Ht = n("1501"),
      Jt = n.n(Ht),
      zt = (n("4ed3"), n("4177")),
      Yt = n.n(zt),
      Kt = Jt()(Yt.a),
      Qt = {
        data: function() {
          return {
            endpoints: [],
            endpoint: "waifu",
            nsfw: !1,
            server: {
              process: {
                url: "".concat("https://api.waifu.pics/", "upload"),
                method: "POST",
                withCredentials: !0
              }
            }
          }
        },
        mounted: function() {
          this.update()
        },
        methods: {
          update: function() {
            var t = this;
            At.getEndpoints((function(e, n) {
              t.endpoints = t.nsfw ? e.nsfw : e.sfw, t.endpoint = t.endpoints[0]
            }))
          },
          handleFilePondInitFile: function(t) {
            t.setMetadata("type", this.endpoint), t.setMetadata("nsfw", this.nsfw)
          }
        },
        components: {
          FilePond: Kt
        }
      }, Xt = Qt,
      Zt = (n("e3fe"), n("0f76"), n("ac7c")),
      te = n("b974"),
      ee = Object(d["a"])(Xt, Gt, Ut, !1, null, "5acca2d0", null),
      ne = ee.exports;
    p()(ee, {
      VCard: A["a"],
      VCheckbox: Zt["a"],
      VContainer: Ct["a"],
      VListItem: b["a"],
      VListItemContent: w["a"],
      VListItemTitle: w["c"],
      VSelect: te["a"]
    });
    var ie = function() {
      var t = this,
        e = t.$createElement,
        n = t._self._c || e;
      return t.loggedin ? n("div", [n("v-container", [n("v-card", {
        staticClass: "mx-auto",
        staticStyle: {
          "margin-top": "20px",
          "margin-bottom": "10px"
        },
        attrs: {
          "max-width": "400",
          outlined: ""
        }
      }, [n("v-list-item", {
        attrs: {
          "three-line": ""
        }
      }, [n("v-list-item-content", [n("v-text-field", {
        attrs: {
          outlined: "",
          dense: "",
          label: "Search"
        },
        model: {
          value: t.query,
          callback: function(e) {
            t.query = e
          },
          expression: "query"
        }
      }), n("v-checkbox", {
        staticStyle: {
          "margin-bottom": "20px",
          "margin-left": "20px"
        },
        attrs: {
          label: "NSFW"
        },
        on: {
          change: t.update
        },
        model: {
          value: t.nsfw,
          callback: function(e) {
            t.nsfw = e
          },
          expression: "nsfw"
        }
      }), n("v-select", {
        attrs: {
          dense: "",
          outlined: "",
          label: "Endpoint",
          items: t.endpoints
        },
        model: {
          value: t.endpoint,
          callback: function(e) {
            t.endpoint = e
          },
          expression: "endpoint"
        }
      }), n("v-spacer"), n("v-row", {
        attrs: {
          justify: "space-around"
        }
      }, [n("v-checkbox", {
        staticClass: "vercheck",
        attrs: {
          label: "Verified"
        },
        model: {
          value: t.verbtn,
          callback: function(e) {
            t.verbtn = e
          },
          expression: "verbtn"
        }
      })], 1), n("v-btn", {
        attrs: {
          depressed: ""
        },
        on: {
          click: function(e) {
            return t.search()
          }
        }
      }, [t._v("Search")])], 1)], 1)], 1)], 1), n("div", [n("v-container", {
        attrs: {
          fluid: ""
        }
      }, [n("v-row", {
        attrs: {
          dense: "",
          justify: "center"
        }
      }, t._l(t.res, (function(t) {
        return n("v-col", {
          key: t,
          staticStyle: {
            "max-width": "400px"
          }
        }, [n("Filebox", {
          attrs: {
            file: t.file,
            verified: t.verified
          }
        })], 1)
      })), 1)], 1)], 1), t.deletelist.length > 0 ? n("v-bottom-navigation", {
        attrs: {
          value: t.activeBtn,
          inset: "",
          app: ""
        }
      }, [n("v-btn", {
        on: {
          click: function(e) {
            return t.verifymany(!0)
          }
        }
      }, [n("v-icon", [t._v("mdi-check")])], 1), n("v-btn", {
        on: {
          click: function(e) {
            return t.verifymany(!1)
          }
        }
      }, [n("v-icon", [t._v("mdi-delete")])], 1), n("v-btn", {
        on: {
          click: function(e) {
            t.deletelist = []
          }
        }
      }, [n("v-icon", [t._v("mdi-select-off")])], 1)], 1) : t._e(), n("v-btn", {
        attrs: {
          fab: "",
          large: "",
          dark: "",
          fixed: "",
          bottom: "",
          right: ""
        },
        on: {
          click: function(e) {
            return t.logout()
          }
        }
      }, [n("v-icon", [t._v("mdi-logout-variant")])], 1)], 1) : t._e()
    }, ae = [],
      se = (n("ac1f"), n("841c"), n("b0c0"), function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", [n("v-card", [n("v-img", {
          staticClass: "white--text align-end",
          attrs: {
            src: t.file.url,
            gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
            height: "250px"
          }
        }, [n("v-card-title", {
          domProps: {
            textContent: t._s(t.file.name)
          }
        })], 1), n("v-card-actions", [n("v-checkbox", {
          staticStyle: {
            "margin-bottom": "-20px",
            "margin-top": "-5px",
            "margin-left": "5px"
          },
          attrs: {
            value: t.file.name
          },
          model: {
            value: t.$parent._data.deletelist,
            callback: function(e) {
              t.$set(t.$parent._data, "deletelist", e)
            },
            expression: "$parent._data.deletelist"
          }
        }), n("v-spacer"), n("v-btn", {
          attrs: {
            icon: ""
          },
          on: {
            click: function(e) {
              return t.open()
            }
          }
        }, [n("v-icon", [t._v("mdi-launch")])], 1), n("v-btn", {
          attrs: {
            icon: ""
          },
          on: {
            click: function(e) {
              return t.verify(!1)
            }
          }
        }, [n("v-icon", [t._v("mdi-delete")])], 1), t.verified ? t._e() : n("v-btn", {
          attrs: {
            icon: ""
          },
          on: {
            click: function(e) {
              return t.verify(!0)
            }
          }
        }, [n("v-icon", [t._v("mdi-check")])], 1)], 1)], 1)], 1)
      }),
      oe = [],
      re = {
        name: "Filebox",
        props: {
          file: Object,
          verified: Boolean
        },
        methods: {
          verify: function(t) {
            var e = this,
              n = t ? "verify" : "delete",
              i = t ? "verified" : "deleted";
            H()({
              method: "post",
              url: "".concat("https://api.waifu.pics/", "admin/")
                .concat(n),
              data: {
                files: [this.file.name]
              },
              withCredentials: !0
            })
              .then((function(t) {
              e.$notification.success("".concat(e.file.name, " was successfuly ")
                .concat(i, "!")), e.$parent.search()
            }))
              .
            catch ((function() {
              e.$notification.error("".concat(e.file.name, " could not be ")
                .concat(i, "!"))
            }))
          },
          open: function() {
            window.open(this.file.url)
          }
        }
      }, ce = re,
      le = n("adda"),
      de = n("2fa4"),
      ue = Object(d["a"])(ce, se, oe, !1, null, null, null),
      pe = ue.exports;
    p()(ue, {
      VBtn: F["a"],
      VCard: A["a"],
      VCardActions: Bt["a"],
      VCardTitle: Bt["c"],
      VCheckbox: Zt["a"],
      VIcon: m["a"],
      VImg: le["a"],
      VSpacer: de["a"]
    });
    var fe = {
      data: function() {
        return {
          res: [],
          endpoints: [],
          deletelist: [],
          loggedin: !1,
          endpoint: "waifu",
          nsfw: !1,
          verified: !1,
          verbtn: !1,
          query: ""
        }
      },
      components: {
        Filebox: pe
      },
      methods: {
        verifymany: function(t) {
          var e = this,
            n = t ? "verify" : "delete";
          H()({
            method: "post",
            url: "".concat("https://api.waifu.pics/", "admin/")
              .concat(n),
            data: {
              files: this.deletelist
            },
            withCredentials: !0
          })
            .then((function(t) {
            e.$notification.success(t.data.message), e.deletelist = [], e.search()
          }))
            .
          catch ((function(t) {
            e.deletelist = [], e.$notification.error(t.response.data.message)
          }))
        },
        logout: function() {
          this.loggedin = !1, document.cookie = "auth-token=; domain=.".concat("waifu.pics", "; expires=Thu, 01-Jan-70 00:00:01 GMT;"), this.$notification.success("You have been logged out!"), this.$router.push("/admin/login")
        },
        search: function() {
          var t = this;
          H()({
            method: "post",
            url: "".concat("https://api.waifu.pics/", "admin/list"),
            data: {
              endpoint: this.endpoint,
              nsfw: this.nsfw,
              query: this.query,
              verified: this.verbtn
            },
            withCredentials: !0
          })
            .then((function(e) {
            var n = [];
            t.verified = t.verbtn, e.data.files && e.data.files.map((function(e) {
              n.push({
                file: {
                  name: e.name,
                  url: e.url
                },
                verified: t.verified
              })
            })), t.res = n
          }))
        },
        update: function() {
          this.endpoints = this.nsfw ? this.$store.getters.endpoints.nsfw : this.$store.getters.endpoints.sfw, this.endpoint = this.endpoints[0]
        }
      },
      mounted: function() {
        var t = this;
        At.checkLoggedIn()
          .then((function() {
          t.loggedin = !0, t.update(), t.search()
        }))
          .
        catch ((function() {
          t.$router.push("/admin/login")
        }))
      }
    }, ve = fe,
      me = (n("b32f"), n("b81c")),
      he = n("62ad"),
      be = Object(d["a"])(ve, ie, ae, !1, null, "580d6bde", null),
      ge = be.exports;
    p()(be, {
      VBottomNavigation: me["a"],
      VBtn: F["a"],
      VCard: A["a"],
      VCheckbox: Zt["a"],
      VCol: he["a"],
      VContainer: Ct["a"],
      VIcon: m["a"],
      VListItem: b["a"],
      VListItemContent: w["a"],
      VRow: kt["a"],
      VSelect: te["a"],
      VSpacer: de["a"],
      VTextField: Rt["a"]
    }), i["default"].use(j["a"]);
    var we = [{
      path: "/",
      name: "Home",
      component: Q
    }, {
      path: "/more",
      name: "More",
      component: N
    }, {
      path: "/docs",
      name: "Docs",
      component: Ot
    }, {
      path: "/upload",
      name: "Upload",
      component: ne
    }, {
      path: "/admin/login",
      name: "Login",
      component: Wt
    }, {
      path: "/admin",
      name: "Admin",
      component: ge
    }, {
      path: "/:type",
      name: "Grid",
      component: Q
    }, {
      path: "/:type/:endpoint",
      name: "Grid",
      component: Q
    }],
      _e = new j["a"]({
        mode: "history",
        base: "/",
        routes: we
      }),
      xe = _e,
      ye = n("2f62");
    i["default"].use(ye["a"]);
    var Ce = new ye["a"].Store({
      state: {
        endpoints: []
      },
      mutations: {
        endpoints: function(t) {
          At.getEndpoints((function(e) {
            t.endpoints = e
          }))
        }
      },
      getters: {
        endpoints: function(t) {
          return t.endpoints
        }
      },
      actions: {},
      modules: {}
    }),
      Ve = n("f309");
    i["default"].use(Ve["a"]);
    var ke = new Ve["a"]({}),
      Ie = n("95a1"),
      $e = n.n(Ie);
    i["default"].config.productionTip = !1, i["default"].use($e.a, {
      timer: 4,
      showLeftIcn: !1
    }), new i["default"]({
      router: xe,
      store: Ce,
      vuetify: ke,
      render: function(t) {
        return t(T)
      }
    })
      .$mount("#app")
  },
  "5c0b": function(t, e, n) {
    "use strict";
    n("9c0c")
  },
  "5ea4": function(t, e, n) {},
  "6c6e": function(t, e, n) {},
  "8c51": function(t, e, n) {
    "use strict";
    n("3529")
  },
  "9c0c": function(t, e, n) {},
  "9d47": function(t, e, n) {},
  a509: function(t, e, n) {},
  b1d2: function(t, e, n) {
    "use strict";
    n("6c6e")
  },
  b32f: function(t, e, n) {
    "use strict";
    n("9d47")
  },
  b867: function(t, e, n) {},
  b955: function(t, e, n) {},
  cc68: function(t, e, n) {
    "use strict";
    n("a509")
  },
  e3fe: function(t, e, n) {
    "use strict";
    n("b867")
  },
  fde0: function(t, e, n) {
    "use strict";
    n("5ea4")
  }
});
//# sourceMappingURL=app.7244d012.js.map