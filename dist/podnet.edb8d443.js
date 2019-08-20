// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"views/podnet.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      token: "tokenlolo",
      form: {
        categories: {
          persona: null,
          field: null
        },
        summary: "",
        description: "",
        files: null,
        name: "",
        email: ""
      },
      categories: {
        persona: [{
          text: "Žiadne",
          value: null
        }, {
          text: "Občan",
          value: 10203,
          options: [{
            text: "Žiadne",
            value: null
          }, {
            text: "Bývanie",
            value: 10206
          }, {
            text: "Financie",
            value: 10207
          }, {
            text: "Zamestnanie",
            value: 10208
          }, {
            text: "Obrana a Bezpečnosť",
            value: 10209
          }, {
            text: "Cestovanie",
            value: 10210
          }, {
            text: "Kultúra",
            value: 10211
          }, {
            text: "Rodina a Vzťahy",
            value: 10212
          }, {
            text: "Zdravie",
            value: 10213
          }, {
            text: "Doprava",
            value: 10214
          }, {
            text: "Občan a štát",
            value: 10215
          }, {
            text: "Vzdelanie a šport",
            value: 10216
          }, {
            text: "Životné prostredie",
            value: 10217
          }]
        }, {
          text: "Podnikateľ",
          value: 10204,
          options: [{
            text: "Žiadne",
            value: null
          }, {
            text: "Administratívny a ekonomický chod",
            value: 10218
          }, {
            text: "Zodpovedné podnikanie",
            value: 10220
          }, {
            text: "Duševné vlastníctvo",
            value: 10221
          }, {
            text: "Ukončenie podnikania",
            value: 10222
          }, {
            text: "Podnikanie",
            value: 10223
          }, {
            text: "Začatie podnikania",
            value: 10224
          }]
        }, {
          text: "Úradník",
          value: 10205,
          options: [{
            text: "Žiadne",
            value: null
          }]
        }]
      }
    };
  },
  computed: {
    subCategories: function subCategories() {
      var options = [{
        text: "Žiadne",
        value: null
      }];
      var persona = this.form.categories.persona;

      if (persona) {
        var index = this.categories.persona.findIndex(function (category) {
          return category.value == persona;
        });
        options = this.categories.persona[index].options;
      }

      return options;
    }
  },
  methods: {
    //TODO: Fileupload component
    fileUpload: function fileUpload(event) {
      var uploadedFiles = this.$refs.files.files;

      if (this.form.files === null) {
        this.form.files = [];
      }

      for (var i = 0; i < uploadedFiles.length; i++) {
        this.form.files.push(uploadedFiles[i]);
      }
    },
    postData: function () {
      var _postData = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(inputData) {
        var postURL, config, post;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                postURL = "https://lepsiesluzby.sk/jira/rest/api/2/issue";
                config = {
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "recaptcha-token": this.token
                  }
                };
                _context.prev = 2;
                _context.next = 5;
                return this.axios.post(postURL, inputData, config);

              case 5:
                post = _context.sent;
                // TODO: Add files support here
                this.$router.push("success");
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 9]]);
      }));

      function postData(_x) {
        return _postData.apply(this, arguments);
      }

      return postData;
    }(),
    submitForm: function submitForm() {
      // TODO: Add validation, change customfields to be more general?
      var data = this.form;
      var cfStr = "customfield_";
      var categoryStr = cfStr + data.categories.persona;
      var output = {
        fields: {
          project: {
            key: "SDM"
          },
          issuetype: {
            name: "Bug"
          },
          summary: data.summary,
          description: data.description,
          components: [{
            name: "e-services"
          }],
          customfield_10200: data.email,
          customfield_10116: data.name
        }
      };

      if (data.categories.persona) {
        output.fields[categoryStr] = {
          value: data.categories.persona,
          child: {
            value: data.categories.field
          }
        };
      }

      this.postData(output);
    },
    getToken: function getToken(loaded) {
      var _this = this;

      if (loaded) {
        this.$recaptcha("login").then(function (token) {
          _this.token = token;
        });
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    var loaded = false;
    this.$recaptchaLoaded().then(function () {
      loaded = true;

      _this2.getToken(loaded);
    });
  }
};
exports.default = _default;
        var $bcdc47 = exports.default || module.exports;
      
      if (typeof $bcdc47 === 'function') {
        $bcdc47 = $bcdc47.options;
      }
    
        /* template */
        Object.assign($bcdc47, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "govuk-width-container" }, [
    _c("main", { staticClass: "govuk-main-wrapper" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "govuk-grid-column-two-thirds" }, [
        _c(
          "form",
          { attrs: { action: "/", method: "post", id: "submit-form" } },
          [
            _c("fieldset", { staticClass: "govuk-fieldset" }, [
              _c("div", { staticClass: "govuk-form-group" }, [
                _c(
                  "label",
                  {
                    staticClass: "govuk-label",
                    attrs: { for: "govuk-input-summary" }
                  },
                  [_vm._v("Akú situáciu riešite? Krátky popis.")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.summary,
                      expression: "form.summary"
                    }
                  ],
                  staticClass: "govuk-input",
                  attrs: {
                    id: "govuk-input-summary",
                    name: "govuk-input-summary",
                    type: "text"
                  },
                  domProps: { value: _vm.form.summary },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "summary", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "govuk-form-group" }, [
                _c(
                  "label",
                  {
                    staticClass: "govuk-label",
                    attrs: { for: "govuk-textarea-description" }
                  },
                  [_vm._v("Text podnetu")]
                ),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.description,
                      expression: "form.description"
                    }
                  ],
                  staticClass: "govuk-textarea",
                  attrs: {
                    id: "govuk-textarea-description",
                    name: "govuk-textarea-description",
                    rows: "5"
                  },
                  domProps: { value: _vm.form.description },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "description", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "govuk-form-group" },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("nd-select", {
                    attrs: { options: _vm.categories.persona },
                    model: {
                      value: _vm.form.categories.persona,
                      callback: function($$v) {
                        _vm.$set(_vm.form.categories, "persona", $$v)
                      },
                      expression: "form.categories.persona"
                    }
                  }),
                  _vm._v(" "),
                  _c("nd-select", {
                    attrs: { options: _vm.subCategories },
                    model: {
                      value: _vm.form.categories.field,
                      callback: function($$v) {
                        _vm.$set(_vm.form.categories, "field", $$v)
                      },
                      expression: "form.categories.field"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "govuk-form-group" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("input", {
                  ref: "files",
                  staticClass: "govuk-file-upload",
                  attrs: {
                    id: "file-upload",
                    name: "file-upload",
                    type: "file",
                    multiple: ""
                  },
                  on: { change: _vm.fileUpload }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "govuk-form-group" }, [
                _c(
                  "label",
                  {
                    staticClass: "govuk-label",
                    attrs: { for: "govuk-input-name" }
                  },
                  [_vm._v("Meno")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.name,
                      expression: "form.name"
                    }
                  ],
                  staticClass: "govuk-input govuk-!-width-two-thirds",
                  attrs: {
                    id: "govuk-input-name",
                    name: "govuk-input-name",
                    type: "text"
                  },
                  domProps: { value: _vm.form.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "name", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "govuk-form-group" }, [
                _c(
                  "label",
                  {
                    staticClass: "govuk-label",
                    attrs: { for: "govuk-input-email" }
                  },
                  [_vm._v("E-mail")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.email,
                      expression: "form.email"
                    }
                  ],
                  staticClass: "govuk-input govuk-!-width-two-thirds",
                  attrs: {
                    id: "govuk-input-email",
                    name: "govuk-input-email",
                    type: "text"
                  },
                  domProps: { value: _vm.form.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "email", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "govuk-button",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.submitForm($event)
                    }
                  }
                },
                [_vm._v("Vytvoriť")]
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "govuk-grid-column-full" }, [
      _c("h2", { staticClass: "govuk-heading-l" }, [
        _vm._v("Máte nápad ako zlepšiť elektronické služby ?")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("Poďme do toho spolu a ukážme, kde je priestor na zlepšenie.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "govuk-label", attrs: { for: "select-category" } },
      [
        _vm._v(
          "\n                            Kategória\n                            "
        ),
        _c("em", [_vm._v("(nepovinné)")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "govuk-label", attrs: { for: "file-upload" } },
      [
        _vm._v(
          "\n                            Príloha\n                            "
        ),
        _c("em", [_vm._v("(nepovinné)")])
      ]
    )
  }
]
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
    /* hot reload */
    (function () {
      if (module.hot) {
        var api = require('vue-hot-reload-api');
        api.install(require('vue'));
        if (api.compatible) {
          module.hot.accept();
          if (!module.hot.data) {
            api.createRecord('$bcdc47', $bcdc47);
          } else {
            api.reload('$bcdc47', $bcdc47);
          }
        }

        
        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
      }
    })();
},{"@babel/runtime/regenerator":"../node_modules/@babel/runtime/regenerator/index.js","@babel/runtime/helpers/asyncToGenerator":"../node_modules/@babel/runtime/helpers/asyncToGenerator.js","_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js","vue-hot-reload-api":"../node_modules/vue-hot-reload-api/dist/index.js","vue":"../node_modules/vue/dist/vue.runtime.esm.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "lepsiesluzby.sk" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "34507" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/podnet.edb8d443.js.map