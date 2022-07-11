function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\" class=\"mt-4\">\n          <ion-list-header class=\"menuHeader\"\n            >שלום, {{ user[\"firstName\"] }}\n            {{ user[\"lastName\"] }}</ion-list-header\n          >\n\n          <ion-menu-toggle\n            auto-hide=\"false\"\n            *ngFor=\"let p of appPages; let i = index\"\n          >\n            <ion-item\n              (click)=\"selectedIndex = i\"\n              routerDirection=\"root\"\n              [routerLink]=\"[p.url]\"\n              lines=\"none\"\n              detail=\"false\"\n              [class.selected]=\"selectedIndex == i\"\n            >\n              <ion-icon\n                slot=\"start\"\n                [ios]=\"p.icon + '-outline'\"\n                [md]=\"p.icon + '-sharp'\"\n              ></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n        <!-- <ion-list id=\"labels-list\">\n          <ion-list-header>Labels</ion-list-header>\n\n          <ion-item *ngFor=\"let label of labels\" lines=\"none\">\n            <ion-icon\n              slot=\"start\"\n              ios=\"bookmark-outline\"\n              md=\"bookmark-sharp\"\n            ></ion-icon>\n            <ion-label>{{ label }}</ion-label>\n          </ion-item>\n        </ion-list> -->\n        <div class=\"version\">\n          גירסה - {{version}}\n        </div>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var Id = localStorage.id;
    var routes = [{
      path: "",
      redirectTo: Id ? "/intro" : "/login",
      pathMatch: "full"
    }, {
      path: "login",
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-login-login-module */
        [__webpack_require__.e("default~pages-home-home-module~pages-intro-intro-module~pages-login-login-module~pages-task-page-tas~e21d1752"), __webpack_require__.e("default~pages-home-home-module~pages-intro-intro-module~pages-login-login-module"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: "home/:time/:chorgim/:type",
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-home-home-module */
        [__webpack_require__.e("default~pages-home-home-module~pages-intro-intro-module~pages-login-login-module~pages-task-page-tas~e21d1752"), __webpack_require__.e("default~pages-home-home-module~pages-intro-intro-module~pages-login-login-module"), __webpack_require__.e("default~pages-home-home-module~pages-task-page-task-page-module~pages-tipulim-tipulim-module"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/home/home.module */
        "./src/app/pages/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: "task-page",
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-task-page-task-page-module */
        [__webpack_require__.e("default~pages-home-home-module~pages-intro-intro-module~pages-login-login-module~pages-task-page-tas~e21d1752"), __webpack_require__.e("default~pages-home-home-module~pages-task-page-task-page-module~pages-tipulim-tipulim-module"), __webpack_require__.e("pages-task-page-task-page-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/task-page/task-page.module */
        "./src/app/pages/task-page/task-page.module.ts")).then(function (m) {
          return m.TaskPagePageModule;
        });
      }
    }, {
      path: "task-report",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-task-report-task-report-module */
        "pages-task-report-task-report-module").then(__webpack_require__.bind(null,
        /*! ./pages/task-report/task-report.module */
        "./src/app/pages/task-report/task-report.module.ts")).then(function (m) {
          return m.TaskReportPageModule;
        });
      }
    }, {
      path: "intro",
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-intro-intro-module */
        [__webpack_require__.e("default~pages-home-home-module~pages-intro-intro-module~pages-login-login-module~pages-task-page-tas~e21d1752"), __webpack_require__.e("default~pages-home-home-module~pages-intro-intro-module~pages-login-login-module"), __webpack_require__.e("pages-intro-intro-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/intro/intro.module */
        "./src/app/pages/intro/intro.module.ts")).then(function (m) {
          return m.IntroPageModule;
        });
      }
    }, {
      path: 'tipulim',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-tipulim-tipulim-module */
        [__webpack_require__.e("default~pages-home-home-module~pages-intro-intro-module~pages-login-login-module~pages-task-page-tas~e21d1752"), __webpack_require__.e("default~pages-home-home-module~pages-task-page-task-page-module~pages-tipulim-tipulim-module"), __webpack_require__.e("pages-tipulim-tipulim-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/tipulim/tipulim.module */
        "./src/app/pages/tipulim/tipulim.module.ts")).then(function (m) {
          return m.TipulimPageModule;
        });
      }
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\n.version {\n  position: absolute;\n  right: 5px;\n  bottom: 5px;\n  font-size: 12px !important;\n  text-align: right;\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHhhbXBwXFxodGRvY3NcXFNDSEFjaHpha2Evc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBOztFQUVFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyREFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQ0hGOztBRE1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxzREFBQTtBQ0hGOztBRE1BO0VBQ0UsK0JBQUE7QUNIRjs7QURNQTtFQUNFLGNBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxzQkFBQTtBQ0hGOztBRE1BO0VBQ0UsbUJBQUE7QUNIRjs7QURNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsK0JBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtBQ0hGOztBRE1BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQ0pGOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7QUNIRjs7QURLQTtFQUNFLGlDQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG4udmVyc2lvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSIsImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIGNvbG9yOiAjNzU3NTc1O1xuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG4udmVyc2lvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_global_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/global/login.service */
    "./src/app/services/global/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_update_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/app-update/ngx */
    "./node_modules/@ionic-native/app-update/ngx/index.js");
    /* harmony import */


    var _services_urlqueue_urlqueue_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/urlqueue/urlqueue.service */
    "./src/app/services/urlqueue/urlqueue.service.ts");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, router, appVersion, network, urlService, appUpdate, loginService) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.appVersion = appVersion;
        this.network = network;
        this.urlService = urlService;
        this.appUpdate = appUpdate;
        this.loginService = loginService;
        this.selectedIndex = 0;
        this.appPages = [{
          title: "עמוד הבית",
          url: "/intro",
          icon: "home"
        }, {
          title: "התנתק",
          url: "/login",
          icon: "log-out"
        }];
        this.initializeApp();
        platform.ready().then(function () {
          _this.listenConnection();
        });
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this2 = this;

          this.platform.ready().then(function () {
            var updateUrl = 'https://dysch-dev.sch.co.il:9000/SCHAchzaka.xml';

            _this2.appUpdate.checkAppUpdate(updateUrl).then(function (update) {
              alert("Update Status:  " + update.msg);
            })["catch"](function (error) {
              console.log(error);
              alert("Error: " + error.msg);
            });

            _this2.appVersion.getVersionCode().then(function (res) {
              _this2.version = res / 1000;
              console.log(res);
            })["catch"](function (error) {
              console.log(error);
            });

            _this2.statusBar.styleDefault();

            _this2.statusBar.overlaysWebView(true);

            _this2.statusBar.backgroundColorByHexString("#999999");

            _this2.splashScreen.hide();
          });

          if (localStorage.user) {
            this.user = JSON.parse(localStorage.user);
          } else {
            this.user = {};
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var path = window.location.pathname.split("folder/")[1];

          if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(function (page) {
              return page.title.toLowerCase() === path.toLowerCase();
            });
          }

          if (localStorage.user && localStorage.user != "" && localStorage.system && localStorage.system != "") {
            this.loginService.setSystem();
            this.router.navigate(["/intro"]);
          }
        }
      }, {
        key: "listenConnection",
        value: function listenConnection() {
          var _this3 = this;

          this.network.onConnect().subscribe(function (res) {
            console.log(res);

            if (res.type == 'online') {
              _this3.urlService.apiCallList();
            }
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_10__["AppVersion"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"]
      }, {
        type: _services_urlqueue_urlqueue_service__WEBPACK_IMPORTED_MODULE_8__["UrlqueueService"]
      }, {
        type: _ionic_native_app_update_ngx__WEBPACK_IMPORTED_MODULE_7__["AppUpdate"]
      }, {
        type: src_app_services_global_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_10__["AppVersion"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"], _services_urlqueue_urlqueue_service__WEBPACK_IMPORTED_MODULE_8__["UrlqueueService"], _ionic_native_app_update_ngx__WEBPACK_IMPORTED_MODULE_7__["AppUpdate"], src_app_services_global_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _interceptors_http_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./interceptors/http.interceptor */
    "./src/app/interceptors/http.interceptor.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_native_zbar_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/zbar/ngx */
    "./node_modules/@ionic-native/zbar/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_update_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/app-update/ngx */
    "./node_modules/@ionic-native/app-update/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/network-interface/ngx */
    "./node_modules/@ionic-native/network-interface/ngx/index.js"); // import { HTTP } from "@ionic-native/http/ngx";


    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_14__["IonicStorageModule"].forRoot()],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_zbar_ngx__WEBPACK_IMPORTED_MODULE_13__["ZBar"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__["File"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_16__["FilePath"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_17__["FileTransfer"], _ionic_native_app_update_ngx__WEBPACK_IMPORTED_MODULE_18__["AppUpdate"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_19__["Network"], _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_21__["NetworkInterface"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_20__["AppVersion"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_http_interceptor__WEBPACK_IMPORTED_MODULE_10__["HttpInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/interceptors/http.interceptor.ts":
  /*!**************************************************!*\
    !*** ./src/app/interceptors/http.interceptor.ts ***!
    \**************************************************/

  /*! exports provided: HttpInterceptor */

  /***/
  function srcAppInterceptorsHttpInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpInterceptor", function () {
      return HttpInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_global_setting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/global/setting.service */
    "./src/app/services/global/setting.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_urlqueue_urlqueue_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/urlqueue/urlqueue.service */
    "./src/app/services/urlqueue/urlqueue.service.ts");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");

    var HttpInterceptor = /*#__PURE__*/function () {
      function HttpInterceptor(setting, http, network, urlService) {
        _classCallCheck(this, HttpInterceptor);

        this.setting = setting;
        this.http = http;
        this.network = network;
        this.urlService = urlService;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE,PUT,OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, content-type, Authorization, authorization ",
            "Access-Control-Allow-Origin": "*"
          })
        };
      }

      _createClass(HttpInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          request = this.getHeaders(request);

          if (this.network.type == 'none') {
            return;
          }

          return next.handle(request);
        }
      }, {
        key: "getHeaders",
        value: function getHeaders(request) {
          var _this4 = this;

          // return request;
          console.log('header authorization');
          var now = new Date();
          var tokenData = "";
          var localToken = localStorage.token ? JSON.parse(localStorage.token) : '';
          console.log(localToken.value);
          tokenData = localToken && localToken.value ? localToken.value : '';
          console.log(tokenData);

          if (tokenData) {
            console.log('Token exist');

            if (now.getTime() > localToken.expiry) {
              localStorage.removeItem('token');
              console.log('Token expired');
            }
          }

          var apiName = request.url.split('/')[4];

          if ((!tokenData || tokenData === "") && apiName !== 'login') {
            this.http.post(this.setting.globalServerURL + "user/login", {
              employee: localStorage.username,
              dob: localStorage.pass
            }).toPromise().then(function (res) {
              console.log(res);
              tokenData = res['token'];
              var item = {
                value: tokenData,
                expiry: now.getTime() + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].loginTimeout * 60 * 60 * 1000
              };
              localStorage.setItem('token', JSON.stringify(item));
              console.log('New token updated');

              if (localStorage.username && localStorage.pass) {
                console.log(' API');

                _this4.http.get(_this4.setting.globalURL + "getEmployee?employee=" + localStorage.username + "&password=" + localStorage.pass).toPromise().then(function (res) {
                  console.log('Localstorage removed');
                  localStorage.removeItem('username');
                  localStorage.removeItem('pass');
                })["catch"](function (err) {
                  return alert(err.message);
                });
              }
            })["catch"](function (err) {
              return alert(err.message);
            });
          }

          var serverUrlPrefix = this.setting.globalServerURL.split('/')[2] + '/';
          console.log(serverUrlPrefix);
          var requestPrefix = request.url.split('/')[2] + '/';

          if (apiName !== 'login' && serverUrlPrefix === requestPrefix) {
            if (!request.headers.get('Flag') && this.network.type === 'none' && request.method == 'POST') {
              if (request.body.codeList) {
                request.body.codeList = JSON.stringify(request.body.codeList);
              }

              var value = {
                'url': request.url,
                'request': JSON.stringify(request.body)
              };
              this.urlService.insertUrlToDb(value);
            }

            request = request.clone({
              headers: request.headers["delete"]('Flag')
            });
            return request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(tokenData)
              }
            });
          } else {
            return request;
          } //}   

        }
      }]);

      return HttpInterceptor;
    }();

    HttpInterceptor.ctorParameters = function () {
      return [{
        type: _services_global_setting_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"]
      }, {
        type: _services_urlqueue_urlqueue_service__WEBPACK_IMPORTED_MODULE_5__["UrlqueueService"]
      }];
    };

    HttpInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_global_setting_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"], _services_urlqueue_urlqueue_service__WEBPACK_IMPORTED_MODULE_5__["UrlqueueService"]])], HttpInterceptor);
    /***/
  },

  /***/
  "./src/app/services/barcode.crud.ts":
  /*!******************************************!*\
    !*** ./src/app/services/barcode.crud.ts ***!
    \******************************************/

  /*! exports provided: BarcodeCrudService */

  /***/
  function srcAppServicesBarcodeCrudTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarcodeCrudService", function () {
      return BarcodeCrudService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BarcodeCrudService = /*#__PURE__*/function () {
      function BarcodeCrudService() {
        var _this5 = this;

        _classCallCheck(this, BarcodeCrudService);

        this.items = [];

        this.createTable = function () {
          _this5.webDb.transaction(function (t) {
            t.executeSql("CREATE TABLE IF NOT EXISTS barcode (equipment)", [], function (t, results) {
              _this5.insertArrayRowToDb();
            }, function (t, error) {
              console.error("Error: " + error.message);
            });
          });
        };

        this.insertArrayRowToDb = function () {
          var i = 0;

          _this5.webDb.transaction(function (t) {
            _this5.items.map(function (item) {
              _this5.insertArrayToDb(item, t);

              i++;

              if (i == _this5.items.length) {
                console.log("barcode CloseDB");
              }
            });
          });
        };
      }

      _createClass(BarcodeCrudService, [{
        key: "updateWebDb",
        value: function updateWebDb(webDb, setPreloader) {
          this.setPreloader = setPreloader;
          this.webDb = webDb;
        }
      }, {
        key: "createDB",
        value: function createDB(json, webDb) {
          this.webDb = webDb;
          this.items = json;
          this.dropTable("locations");
        }
      }, {
        key: "dropTable",
        value: function dropTable(tableName) {
          var _this6 = this;

          this.webDb.transaction(function (t) {
            t.executeSql("DROP TABLE IF EXISTS barcode", [], function (t, results) {
              _this6.createTable();
            }, function (t, error) {
              console.error("Error: " + error.message);
            });
          });
        }
      }, {
        key: "insertArrayToDb",
        value: function insertArrayToDb(item, t) {
          t.executeSql("INSERT INTO barcode (equipment) VALUES (?)", [item], function (t, results) {}, function (t, error) {
            console.error("Error: " + error.message);
          }); // }
        }
      }]);

      return BarcodeCrudService;
    }();

    BarcodeCrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BarcodeCrudService);
    /***/
  },

  /***/
  "./src/app/services/categorie.crud.ts":
  /*!********************************************!*\
    !*** ./src/app/services/categorie.crud.ts ***!
    \********************************************/

  /*! exports provided: CategorieCrudService */

  /***/
  function srcAppServicesCategorieCrudTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategorieCrudService", function () {
      return CategorieCrudService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CategorieCrudService = /*#__PURE__*/function () {
      function CategorieCrudService() {
        var _this7 = this;

        _classCallCheck(this, CategorieCrudService);

        this.items = [];

        this.createTable = function () {
          _this7.webDb.transaction(function (t) {
            t.executeSql("CREATE TABLE IF NOT EXISTS categorie (eqart,eartx)", [], function (t, results) {
              _this7.insertArrayRowToDb();
            }, function (t, error) {
              console.error("Error: " + error.message);
            });
          });
        };

        this.insertArrayRowToDb = function () {
          var i = 0;

          _this7.webDb.transaction(function (t) {
            _this7.items.map(function (item) {
              _this7.insertArrayToDb(item, t);

              i++;

              if (i == _this7.items.length) {
                console.log("categorie CloseDB");
              }
            });
          });
        };
      }

      _createClass(CategorieCrudService, [{
        key: "updateWebDb",
        value: function updateWebDb(webDb, setPreloader) {
          this.setPreloader = setPreloader;
          this.webDb = webDb;
        }
      }, {
        key: "createDB",
        value: function createDB(json, webDb) {
          this.webDb = webDb;
          this.items = json;
          this.dropTable("locations");
        }
      }, {
        key: "dropTable",
        value: function dropTable(tableName) {
          var _this8 = this;

          this.webDb.transaction(function (t) {
            t.executeSql("DROP TABLE IF EXISTS categorie", [], function (t, results) {
              _this8.createTable();
            }, function (t, error) {
              console.error("Error: " + error.message);
            });
          });
        }
      }, {
        key: "insertArrayToDb",
        value: function insertArrayToDb(item, t) {
          t.executeSql("INSERT INTO categorie (eqart,eartx) VALUES (?,?)", [item["eqart"], item["eartx"]], function (t, results) {}, function (t, error) {
            console.error("Error: " + error.message);
          }); // }
        }
      }]);

      return CategorieCrudService;
    }();

    CategorieCrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CategorieCrudService);
    /***/
  },

  /***/
  "./src/app/services/checklist/checklist.crud.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/checklist/checklist.crud.ts ***!
    \******************************************************/

  /*! exports provided: ChecklistCrudService */

  /***/
  function srcAppServicesChecklistChecklistCrudTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChecklistCrudService", function () {
      return ChecklistCrudService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // import { UrlqueueService } from "./urlqueue.service";


    var ChecklistCrudService = /*#__PURE__*/function () {
      function ChecklistCrudService() {
        var _this9 = this;

        _classCallCheck(this, ChecklistCrudService);

        this.items = [];

        this.createTable = function () {
          _this9.webDb.transaction(function (t) {
            t.executeSql("CREATE TABLE IF NOT EXISTS checklist (checklist,equipment,codeGroup,imageExists,responsible,treatmentDescription,treatmentLongDescription)", [], function (t, results) {
              _this9.insertArrayRowToDb();
            }, function (t, error) {
              console.error("Error: " + error.message);
            });
          });
        };

        this.insertArrayRowToDb = function () {
          // this.setPreloader(1);
          var i = 0;

          _this9.webDb.transaction(function (t) {
            _this9.items.map(function (item) {
              _this9.insertArrayToDb(item, t);

              i++;

              if (i == _this9.items.length) {
                console.log("CloseDB");

                _this9.setPreloader(1);
              }
            });
          });
        };
      }

      _createClass(ChecklistCrudService, [{
        key: "createDB",
        value: function createDB(webDb, setPreloader) {
          this.setPreloader = setPreloader;
          this.webDb = webDb;
          this.dropTable("checklist");
        }
      }, {
        key: "dropTable",
        value: function dropTable(tableName) {
          var _this10 = this;

          this.webDb.transaction(function (t) {
            t.executeSql("DROP TABLE IF EXISTS checklist", [], function (t, results) {
              _this10.createTable();
            }, function (t, error) {
              console.error("Error: " + error.message);
            });
          });
        }
      }, {
        key: "insertArrayToDb",
        value: function insertArrayToDb(item, t) {
          t.executeSql("INSERT INTO checklist (checkList,codeGroup,imageExists,responsible,treatmentDescription,treatmentLongDescription) VALUES (?,?,?)", [item["_id"], item["__v"], item["treatmentLongText"], item["treatmentDescription"], item["treatmentDate"], item["equipment"]], function (t, results) {}, function (t, error) {
            console.error("Error: " + error.message);
          });
        }
      }]);

      return ChecklistCrudService;
    }();

    ChecklistCrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ChecklistCrudService);
    /***/
  },

  /***/
  "./src/app/services/equipment/equipment.crud.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/equipment/equipment.crud.ts ***!
    \******************************************************/

  /*! exports provided: EquipmentCrudService */

  /***/
  function srcAppServicesEquipmentEquipmentCrudTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentCrudService", function () {
      return EquipmentCrudService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // import { UrlqueueService } from "./urlqueue.service";


    var EquipmentCrudService = /*#__PURE__*/function () {
      function EquipmentCrudService() {
        var _this11 = this;

        _classCallCheck(this, EquipmentCrudService);

        this.items = [];

        this.createTable = function () {
          _this11.webDb.transaction(function (t) {
            t.executeSql("CREATE TABLE IF NOT EXISTS equipment (_id,__v,vendor,treatmentType,treatmentNumber,stand,serialNumber,responsibleNo,responsible,nextTreatment,location,lastTreatment,imageExists,equipmentObjectType,equipmentDescription,equipmentCategory,equipment,eqart,eartx,begru,atWork)", [], function (t, results) {
              _this11.insertArrayRowToDb();
            }, function (t, error) {
              console.error("Error: " + error.message);
            });
          });
        };

        this.insertArrayRowToDb = function () {
          // this.setPreloader(1);
          var i = 0;

          _this11.webDb.transaction(function (t) {
            _this11.items.map(function (item) {
              _this11.insertArrayToDb(item, t);

              i++;

              if (i == _this11.items.length) {
                console.log("CloseDB");

                _this11.setPreloader(1);
              }
            });
          });
        };
      }

      _createClass(EquipmentCrudService, [{
        key: "createDB",
        value: function createDB(webDb, setPreloader) {
          this.setPreloader = setPreloader;
          this.webDb = webDb;
          this.dropTable("equipment");
        }
      }, {
        key: "dropTable",
        value: function dropTable(tableName) {
          var _this12 = this;

          this.webDb.transaction(function (t) {
            t.executeSql("DROP TABLE IF EXISTS equipment", [], function (t, results) {
              _this12.createTable();
            }, function (t, error) {
              console.error("Error: " + error.message);
            });
          });
        }
      }, {
        key: "insertArrayToDb",
        value: function insertArrayToDb(item, t) {
          t.executeSql("INSERT INTO equipment (_id,__v,vendor,treatmentType,treatmentNumber,stand,serialNumber,responsibleNo,responsible,nextTreatment,location,lastTreatment,imageExists,equipmentObjectType,equipmentDescription,equipmentCategory,equipment,eqart,eartx,begru) VALUES (?,?,?)", [item["_id"], item["__v"], item["vendor"], item["treatmentType"], item["treatmentNumber"], item["stand"], item["serialNumber"], item["responsibleNo"], item["responsible"], item["nextTreatment"], item["location"], item["lastTreatment"], item["imageExists"], item["equipmentObjectType"], item["equipmentDescription"], item["equipmentCategory"], item["equipment"], item["eqart"], item["eartx"], item["begru"]], function (t, results) {}, function (t, error) {
            console.error("Error: " + error.message);
          });
        }
      }]);

      return EquipmentCrudService;
    }();

    EquipmentCrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], EquipmentCrudService);
    /***/
  },

  /***/
  "./src/app/services/equipmentAll/equipmentAll.crud.ts":
  /*!************************************************************!*\
    !*** ./src/app/services/equipmentAll/equipmentAll.crud.ts ***!
    \************************************************************/

  /*! exports provided: EquipmentAllCrudService */

  /***/
  function srcAppServicesEquipmentAllEquipmentAllCrudTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentAllCrudService", function () {
      return EquipmentAllCrudService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // import { UrlqueueService } from "./urlqueue.service";


    var EquipmentAllCrudService = /*#__PURE__*/function () {
      function EquipmentAllCrudService() {
        var _this13 = this;

        _classCallCheck(this, EquipmentAllCrudService);

        this.items = [];

        this.createTable = function () {
          _this13.webDb.transaction(function (t) {
            t.executeSql("CREATE TABLE IF NOT EXISTS equipmentAll (_id,__v,vendor,treatmentType,treatmentNumber,stand,serialNumber,responsibleNo,responsible,nextTreatment,location,lastTreatment,imageExists,equipment,equipmentObjectType,equipmentDescription,equipmentCategory,eqart,eartx,begru)", [], function (t, results) {
              _this13.insertArrayRowToDb();
            }, function (t, error) {
              console.error("Error: " + error.message);
            });
          });
        };

        this.insertArrayRowToDb = function () {
          // this.setPreloader(1);
          var i = 0;

          _this13.webDb.transaction(function (t) {
            _this13.items.map(function (item) {
              _this13.insertArrayToDb(item, t);

              i++;

              if (i == _this13.items.length) {
                console.log("CloseDB");

                _this13.setPreloader(1);
              }
            });
          });
        };
      }

      _createClass(EquipmentAllCrudService, [{
        key: "createDB",
        value: function createDB(webDb, setPreloader) {
          this.setPreloader = setPreloader;
          this.webDb = webDb;
          this.dropTable("equipmentAll");
        }
      }, {
        key: "dropTable",
        value: function dropTable(tableName) {
          var _this14 = this;

          this.webDb.transaction(function (t) {
            t.executeSql("DROP TABLE IF EXISTS equipmentAll", [], function (t, results) {
              _this14.createTable();
            }, function (t, error) {
              console.error("Error: " + error.message);
            });
          });
        }
      }, {
        key: "insertArrayToDb",
        value: function insertArrayToDb(item, t) {
          t.executeSql("INSERT INTO equipmentAll (_id,__v,vendor,treatmentType,treatmentNumber,stand,serialNumber,responsibleNo,responsible,nextTreatment,location,lastTreatment,imageExists,equipmentObjectType,equipmentDescription,equipmentCategory,equipment,eqart,eartx,begru) VALUES (?,?,?)", [item["_id"], item["__v"], item["vendor"], item["treatmentType"], item["treatmentNumber"], item["stand"], item["serialNumber"], item["responsibleNo"], item["responsible"], item["nextTreatment"], item["location"], item["lastTreatment"], item["imageExists"], item["equipmentObjectType"], item["equipmentDescription"], item["equipmentCategory"], item["equipment"], item["eqart"], item["eartx"], item["begru"]], function (t, results) {}, function (t, error) {
            console.error("Error: " + error.message);
          });
        }
      }]);

      return EquipmentAllCrudService;
    }();

    EquipmentAllCrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], EquipmentAllCrudService);
    /***/
  },

  /***/
  "./src/app/services/equipmentApp/equipmentApp.crud.ts":
  /*!************************************************************!*\
    !*** ./src/app/services/equipmentApp/equipmentApp.crud.ts ***!
    \************************************************************/

  /*! exports provided: EquipmentAppCrudService */

  /***/
  function srcAppServicesEquipmentAppEquipmentAppCrudTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentAppCrudService", function () {
      return EquipmentAppCrudService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // import { UrlqueueService } from "./urlqueue.service";


    var EquipmentAppCrudService = /*#__PURE__*/function () {
      function EquipmentAppCrudService() {
        var _this15 = this;

        _classCallCheck(this, EquipmentAppCrudService);

        this.items = [];

        this.createTable = function () {
          _this15.webDb.transaction(function (t) {
            t.executeSql("CREATE TABLE IF NOT EXISTS equipmentApp (_id,type,treatmentLongDescription,treatmentDescription,treatmentDate,submittedDate,sendToEcc,responsible,imageExists,finish,externalUser,equipment,begru)", [], function (t, results) {
              _this15.insertArrayRowToDb();
            }, function (t, error) {
              console.error("Error: " + error.message);
            });
          });
        };

        this.insertArrayRowToDb = function () {
          // this.setPreloader(1);
          var i = 0;

          _this15.webDb.transaction(function (t) {
            _this15.items.map(function (item) {
              _this15.insertArrayToDb(item, t);

              i++;

              if (i == _this15.items.length) {
                console.log("CloseDB");

                _this15.setPreloader(1);
              }
            });
          });
        };
      }

      _createClass(EquipmentAppCrudService, [{
        key: "createDB",
        value: function createDB(webDb, setPreloader) {
          this.setPreloader = setPreloader;
          this.webDb = webDb;
          this.dropTable("equipmentApp");
        }
      }, {
        key: "dropTable",
        value: function dropTable(tableName) {
          var _this16 = this;

          this.webDb.transaction(function (t) {
            t.executeSql("DROP TABLE IF EXISTS equipmentApp", [], function (t, results) {
              _this16.createTable();
            }, function (t, error) {
              console.error("Error: " + error.message);
            });
          });
        }
      }, {
        key: "insertArrayToDb",
        value: function insertArrayToDb(item, t) {
          t.executeSql("INSERT INTO equipmentApp (_id,__v,vendor,treatmentType,treatmentNumber,stand,serialNumber,responsibleNo,responsible,nextTreatment,location,lastTreatment,imageExists,equipmentObjectType,equipmentDescription,equipmentCategory,equipment,eqart,eartx,begru) VALUES (?,?,?)", [item["_id"], item["__v"], item["vendor"], item["treatmentType"], item["treatmentNumber"], item["stand"], item["serialNumber"], item["responsibleNo"], item["responsible"], item["nextTreatment"], item["location"], item["lastTreatment"], item["imageExists"], item["equipmentObjectType"], item["equipmentDescription"], item["equipmentCategory"], item["equipment"], item["eqart"], item["eartx"], item["begru"]], function (t, results) {}, function (t, error) {
            console.error("Error: " + error.message);
          });
        }
      }]);

      return EquipmentAppCrudService;
    }();

    EquipmentAppCrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], EquipmentAppCrudService);
    /***/
  },

  /***/
  "./src/app/services/equipmentX2/equipmentX2.crud.ts":
  /*!**********************************************************!*\
    !*** ./src/app/services/equipmentX2/equipmentX2.crud.ts ***!
    \**********************************************************/

  /*! exports provided: EquipmentX2CrudService */

  /***/
  function srcAppServicesEquipmentX2EquipmentX2CrudTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentX2CrudService", function () {
      return EquipmentX2CrudService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // import { UrlqueueService } from "./urlqueue.service";


    var EquipmentX2CrudService = /*#__PURE__*/function () {
      function EquipmentX2CrudService() {
        var _this17 = this;

        _classCallCheck(this, EquipmentX2CrudService);

        this.items = [];

        this.createTable = function () {
          _this17.webDb.transaction(function (t) {
            t.executeSql("CREATE TABLE IF NOT EXISTS equipmentx2 (_id,__v,vendor,treatmentType,treatmentNumber,stand,serialNumber,responsibleNo,responsible,nextTreatment,location,lastTreatment,imageExists,equipmentObjectType,equipmentDescription,equipmentCategory,equipment,eqart,eartx,begru,atWork)", [], function (t, results) {
              _this17.insertArrayRowToDb();
            }, function (t, error) {
              console.error("Error: " + error.message);
            });
          });
        };

        this.insertArrayRowToDb = function () {
          // this.setPreloader(1);
          var i = 0;

          _this17.webDb.transaction(function (t) {
            _this17.items.map(function (item) {
              _this17.insertArrayToDb(item, t);

              i++;

              if (i == _this17.items.length) {
                console.log("CloseDB");

                _this17.setPreloader(1);
              }
            });
          });
        };
      }

      _createClass(EquipmentX2CrudService, [{
        key: "createDB",
        value: function createDB(webDb, setPreloader) {
          this.setPreloader = setPreloader;
          this.webDb = webDb;
          this.dropTable("equipment");
        }
      }, {
        key: "dropTable",
        value: function dropTable(tableName) {
          var _this18 = this;

          this.webDb.transaction(function (t) {
            t.executeSql("DROP TABLE IF EXISTS equipmentx2", [], function (t, results) {
              _this18.createTable();
            }, function (t, error) {
              console.error("Error: " + error.message);
            });
          });
        }
      }, {
        key: "insertArrayToDb",
        value: function insertArrayToDb(item, t) {
          t.executeSql("INSERT INTO equipmentx2 (_id,__v,vendor,treatmentType,treatmentNumber,stand,serialNumber,responsibleNo,responsible,nextTreatment,location,lastTreatment,imageExists,equipmentObjectType,equipmentDescription,equipmentCategory,equipment,eqart,eartx,begru) VALUES (?,?,?)", [item["_id"], item["__v"], item["vendor"], item["treatmentType"], item["treatmentNumber"], item["stand"], item["serialNumber"], item["responsibleNo"], item["responsible"], item["nextTreatment"], item["location"], item["lastTreatment"], item["imageExists"], item["equipmentObjectType"], item["equipmentDescription"], item["equipmentCategory"], item["equipment"], item["eqart"], item["eartx"], item["begru"]], function (t, results) {}, function (t, error) {
            console.error("Error: " + error.message);
          });
        }
      }]);

      return EquipmentX2CrudService;
    }();

    EquipmentX2CrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], EquipmentX2CrudService);
    /***/
  },

  /***/
  "./src/app/services/equipmentX3/equipmentX3.crud.ts":
  /*!**********************************************************!*\
    !*** ./src/app/services/equipmentX3/equipmentX3.crud.ts ***!
    \**********************************************************/

  /*! exports provided: EquipmentX3CrudService */

  /***/
  function srcAppServicesEquipmentX3EquipmentX3CrudTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentX3CrudService", function () {
      return EquipmentX3CrudService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // import { UrlqueueService } from "./urlqueue.service";


    var EquipmentX3CrudService = /*#__PURE__*/function () {
      function EquipmentX3CrudService() {
        var _this19 = this;

        _classCallCheck(this, EquipmentX3CrudService);

        this.items = [];

        this.createTable = function () {
          _this19.webDb.transaction(function (t) {
            t.executeSql("CREATE TABLE IF NOT EXISTS equipmentx3 (_id,__v,vendor,treatmentType,treatmentNumber,stand,serialNumber,responsibleNo,responsible,nextTreatment,location,lastTreatment,imageExists,equipmentObjectType,equipmentDescription,equipmentCategory,equipment,eqart,eartx,begru,atWork)", [], function (t, results) {
              _this19.insertArrayRowToDb();
            }, function (t, error) {
              console.error("Error: " + error.message);
            });
          });
        };

        this.insertArrayRowToDb = function () {
          // this.setPreloader(1);
          var i = 0;

          _this19.webDb.transaction(function (t) {
            _this19.items.map(function (item) {
              _this19.insertArrayToDb(item, t);

              i++;

              if (i == _this19.items.length) {
                console.log("CloseDB");

                _this19.setPreloader(1);
              }
            });
          });
        };
      }

      _createClass(EquipmentX3CrudService, [{
        key: "createDB",
        value: function createDB(webDb, setPreloader) {
          this.setPreloader = setPreloader;
          this.webDb = webDb;
          this.dropTable("equipmentx3");
        }
      }, {
        key: "dropTable",
        value: function dropTable(tableName) {
          var _this20 = this;

          this.webDb.transaction(function (t) {
            t.executeSql("DROP TABLE IF EXISTS equipmentx3", [], function (t, results) {
              _this20.createTable();
            }, function (t, error) {
              console.error("Error: " + error.message);
            });
          });
        }
      }, {
        key: "insertArrayToDb",
        value: function insertArrayToDb(item, t) {
          t.executeSql("INSERT INTO equipmentx3 (_id,__v,vendor,treatmentType,treatmentNumber,stand,serialNumber,responsibleNo,responsible,nextTreatment,location,lastTreatment,imageExists,equipmentObjectType,equipmentDescription,equipmentCategory,equipment,eqart,eartx,begru) VALUES (?,?,?)", [item["_id"], item["__v"], item["vendor"], item["treatmentType"], item["treatmentNumber"], item["stand"], item["serialNumber"], item["responsibleNo"], item["responsible"], item["nextTreatment"], item["location"], item["lastTreatment"], item["imageExists"], item["equipmentObjectType"], item["equipmentDescription"], item["equipmentCategory"], item["equipment"], item["eqart"], item["eartx"], item["begru"]], function (t, results) {}, function (t, error) {
            console.error("Error: " + error.message);
          });
        }
      }]);

      return EquipmentX3CrudService;
    }();

    EquipmentX3CrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], EquipmentX3CrudService);
    /***/
  },

  /***/
  "./src/app/services/global/login.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/global/login.service.ts ***!
    \**************************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesGlobalLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./setting.service */
    "./src/app/services/global/setting.service.ts");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(loadingCtrl, http, setting) {
        _classCallCheck(this, LoginService);

        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.setting = setting;
      }

      _createClass(LoginService, [{
        key: "getUser",
        value: function getUser(user) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this21 = this;

            var loading, now, localToken, tokenData;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create({
                      message: "...בטעינה"
                    });

                  case 2:
                    loading = _context.sent;
                    loading.present();
                    localStorage.setItem('username', user["number"]);
                    localStorage.setItem('pass', user["password"]);
                    _context.prev = 6;

                    if (localStorage.token) {
                      now = new Date();
                      localToken = localStorage.token ? JSON.parse(localStorage.token) : '';
                      console.log(localToken.value);
                      tokenData = localToken && localToken.value ? localToken.value : '';

                      if (tokenData) {
                        if (now.getTime() > localToken.expiry) {
                          localStorage.removeItem('token');
                          console.log('Token expired');
                        }
                      }
                    }

                    return _context.abrupt("return", new Promise(function (resolve, reject) {
                      _this21.http.get(_this21.setting.globalURL + "getEmployee?employee=" + localStorage.username + "&password=" + localStorage.pass).toPromise().then(function (res) {
                        //insertMaterialsToDb
                        resolve(res); // console.log("RES: ", res);
                      })["catch"](function (err) {
                        alert(err.message);

                        _this21.http.get("https://api.ipify.org/?format=json").subscribe(function (res) {
                          alert(res.ip);
                        });
                      });
                    }));

                  case 11:
                    _context.prev = 11;
                    _context.t0 = _context["catch"](6);
                    alert(_context.t0.message);
                    this.http.get("https://api.ipify.org/?format=json").subscribe(function (res) {
                      alert(res.ip);
                    });

                  case 15:
                    _context.prev = 15;
                    loading.dismiss();
                    return _context.finish(15);

                  case 18:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[6, 11, 15, 18]]);
          }));
        }
      }, {
        key: "setSystem",
        value: function setSystem() {
          if (localStorage.system == 1) {
            this.setting.globalURL = "https://192.168.101.219:9000/";
            this.setting.photoURL = this.setting.globalURL + "upload";
            console.log("setGlobalURL", localStorage.system, this.setting.globalURL, this.setting.photoURL);
          } else if (localStorage.system == 2) {
            this.setting.globalURL = "https://192.168.101.220:9000/";
            this.setting.photoURL = this.setting.globalURL + "upload";
            console.log("setGlobalURL", localStorage.system, this.setting.globalURL, this.setting.photoURL);
          } else if (localStorage.system == 3) {
            this.setting.globalURL = "https://appprod.sch.co.il:9000/";
            this.setting.photoURL = this.setting.globalURL + "upload";
            console.log("setGlobalURL", localStorage.system, this.setting.globalURL, this.setting.photoURL);
          }
        }
      }, {
        key: "getLandingPage",
        value: function getLandingPage(emp) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this22 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingCtrl.create({
                      message: "...בטעינה"
                    });

                  case 2:
                    loading = _context2.sent;
                    loading.present();
                    _context2.prev = 4;
                    return _context2.abrupt("return", new Promise(function (resolve, reject) {
                      _this22.http // .get("assets/jsons/tasks.json", this.httpOptions)
                      .get(_this22.setting.globalURL + "getLandingPage?employee=" + emp).toPromise().then(function (res) {
                        console.log(res);
                        resolve(res);
                      })["catch"](function (err) {
                        return console.log("error:", err);
                      });
                    }));

                  case 8:
                    _context2.prev = 8;
                    _context2.t0 = _context2["catch"](4);
                    console.log(_context2.t0);

                  case 11:
                    _context2.prev = 11;
                    loading.dismiss();
                    return _context2.finish(11);

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[4, 8, 11, 14]]);
          }));
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]])], LoginService);
    /***/
  },

  /***/
  "./src/app/services/global/setting.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/global/setting.service.ts ***!
    \****************************************************/

  /*! exports provided: SettingsService */

  /***/
  function srcAppServicesGlobalSettingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsService", function () {
      return SettingsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SettingsService = /*#__PURE__*/function () {
      // "https://192.168.101.219:5000//dayalotApp/download=true";
      function SettingsService() {
        _classCallCheck(this, SettingsService);

        // public globalURL: string = "https://192.168.101.219:9000/";
        // public globalServerURL: string = "https://192.168.101.219:9000/";
        this.globalServerURL = "https://dysch-dev.sch.co.il:9000/";
        this.globalURL = "https://dysch-dev.sch.co.il:9000/";
        this.photoURL = "https://dysch-dev.sch.co.il:9000/upload"; // public globalURL: string = "https://192.168.101.219:9000/";
        // public globalServerURL: string = "https://appprod.sch.co.il:9000/";

        this.versionOnServer = "1.0.1";
        this.currentVersion = "1.03";
        this.lastAPKurl = "https://dysch.sch.co.il:5000/dayalotApp/currentVersion?download=true";
      }

      _createClass(SettingsService, [{
        key: "setGlobalURL",
        value: function setGlobalURL(num) {}
      }]);

      return SettingsService;
    }();

    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SettingsService);
    /***/
  },

  /***/
  "./src/app/services/global/utils.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/global/utils.service.ts ***!
    \**************************************************/

  /*! exports provided: UtilsService */

  /***/
  function srcAppServicesGlobalUtilsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilsService", function () {
      return UtilsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js"); // import { AppRate } from "@ionic-native/app-rate/ngx";


    var UtilsService = /*#__PURE__*/function () {
      function UtilsService(toastController, alertController, // private appRate: AppRate,
      platform) {
        _classCallCheck(this, UtilsService);

        this.toastController = toastController;
        this.alertController = alertController;
        this.platform = platform;
      }

      _createClass(UtilsService, [{
        key: "presentToast",
        value: function presentToast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: 3000,
                      cssClass: "mainToast"
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "presentalertConfirm",
        value: function presentalertConfirm(message, header) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this23 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (header == "") {
                      header = "שים לב!";
                    }

                    return _context5.abrupt("return", new Promise(function (resolve, reject) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this23, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                _context4.next = 2;
                                return this.alertController.create({
                                  header: header,
                                  message: message,
                                  buttons: [{
                                    text: "ביטול",
                                    role: "cancel",
                                    cssClass: "secondary",
                                    handler: function handler(blah) {
                                      console.log("Confirm Cancel: blah");
                                      resolve(0);
                                    }
                                  }, {
                                    text: "אישור",
                                    handler: function handler() {
                                      console.log("Confirm Okay");
                                      resolve(1);
                                    }
                                  }]
                                });

                              case 2:
                                alert = _context4.sent;
                                _context4.next = 5;
                                return alert.present();

                              case 5:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      }));
                    }));

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));
        }
      }, {
        key: "presentalertAPK",
        value: function presentalertAPK(message, APKurl) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this24 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    return _context7.abrupt("return", new Promise(function (resolve, reject) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this24, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                _context6.next = 2;
                                return this.alertController.create({
                                  header: "שימי לב !",
                                  message: message,
                                  cssClass: "mainToast",
                                  backdropDismiss: false,
                                  buttons: [{
                                    text: "סגור אפליקציה",
                                    handler: function handler(blah) {
                                      navigator["app"].exitApp(); // resolve(0);
                                    }
                                  }, {
                                    text: "עידכון גירסה",
                                    handler: function handler() {
                                      window.open(APKurl, "_blank");
                                      resolve(1); // window.location.href = APKurl;
                                      // resolve(1);
                                    }
                                  }]
                                });

                              case 2:
                                alert = _context6.sent;
                                _context6.next = 5;
                                return alert.present();

                              case 5:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _callee6, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));
        }
      }, {
        key: "getArrayFromJson",
        value: function getArrayFromJson(obj) {
          var arr = [];

          for (var i = 0; i < obj.length; i++) {
            arr.push(obj[i]);
          }

          return arr;
        }
      }]);

      return UtilsService;
    }();

    UtilsService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };

    UtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])], UtilsService);
    /***/
  },

  /***/
  "./src/app/services/location.crud.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/location.crud.ts ***!
    \*******************************************/

  /*! exports provided: LocationCrudService */

  /***/
  function srcAppServicesLocationCrudTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationCrudService", function () {
      return LocationCrudService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LocationCrudService = /*#__PURE__*/function () {
      function LocationCrudService() {
        var _this25 = this;

        _classCallCheck(this, LocationCrudService);

        this.items = [];

        this.createTable = function () {
          _this25.webDb.transaction(function (t) {
            t.executeSql("CREATE TABLE IF NOT EXISTS locations (werks,stand, ktext)", [], function (t, results) {
              _this25.insertArrayRowToDb();
            }, function (t, error) {
              console.error("Error: " + error.message);
            });
          });
        };

        this.insertArrayRowToDb = function () {
          var i = 0;

          _this25.webDb.transaction(function (t) {
            _this25.items.map(function (item) {
              _this25.insertArrayToDb(item, t);

              i++;

              if (i == _this25.items.length) {
                console.log("Locations CloseDB");
              }
            });
          });
        };
      }

      _createClass(LocationCrudService, [{
        key: "updateWebDb",
        value: function updateWebDb(webDb, setPreloader) {
          this.setPreloader = setPreloader;
          this.webDb = webDb;
        }
      }, {
        key: "createDB",
        value: function createDB(json, webDb) {
          this.webDb = webDb;
          this.items = json;
          this.dropTable("locations");
        }
      }, {
        key: "dropTable",
        value: function dropTable(tableName) {
          var _this26 = this;

          this.webDb.transaction(function (t) {
            t.executeSql("DROP TABLE IF EXISTS locations", [], function (t, results) {
              _this26.createTable();
            }, function (t, error) {
              console.error("Error: " + error.message);
            });
          });
        }
      }, {
        key: "insertArrayToDb",
        value: function insertArrayToDb(item, t) {
          t.executeSql("INSERT INTO locations (werks, stand, ktext) VALUES (?,?,?)", [item["werks"], item["stand"], item["ktext"]], function (t, results) {}, function (t, error) {
            console.error("Error: " + error.message);
          }); // }
        }
      }]);

      return LocationCrudService;
    }();

    LocationCrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], LocationCrudService);
    /***/
  },

  /***/
  "./src/app/services/sync.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/sync.service.ts ***!
    \******************************************/

  /*! exports provided: SyncAPIService */

  /***/
  function srcAppServicesSyncServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SyncAPIService", function () {
      return SyncAPIService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _global_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./global/setting.service */
    "./src/app/services/global/setting.service.ts");
    /* harmony import */


    var _location_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./location.crud */
    "./src/app/services/location.crud.ts");
    /* harmony import */


    var _categorie_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./categorie.crud */
    "./src/app/services/categorie.crud.ts");
    /* harmony import */


    var _barcode_crud__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./barcode.crud */
    "./src/app/services/barcode.crud.ts");
    /* harmony import */


    var _urlqueue_urlqueue_crud__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./urlqueue/urlqueue.crud */
    "./src/app/services/urlqueue/urlqueue.crud.ts");
    /* harmony import */


    var _equipment_equipment_crud__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./equipment/equipment.crud */
    "./src/app/services/equipment/equipment.crud.ts");
    /* harmony import */


    var _equipmentX2_equipmentX2_crud__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./equipmentX2/equipmentX2.crud */
    "./src/app/services/equipmentX2/equipmentX2.crud.ts");
    /* harmony import */


    var _equipmentX3_equipmentX3_crud__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./equipmentX3/equipmentX3.crud */
    "./src/app/services/equipmentX3/equipmentX3.crud.ts");
    /* harmony import */


    var _equipmentApp_equipmentApp_crud__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./equipmentApp/equipmentApp.crud */
    "./src/app/services/equipmentApp/equipmentApp.crud.ts");
    /* harmony import */


    var _equipmentAll_equipmentAll_crud__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./equipmentAll/equipmentAll.crud */
    "./src/app/services/equipmentAll/equipmentAll.crud.ts");
    /* harmony import */


    var _treatment_treatment_crud__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./treatment/treatment.crud */
    "./src/app/services/treatment/treatment.crud.ts");
    /* harmony import */


    var _checklist_checklist_crud__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./checklist/checklist.crud */
    "./src/app/services/checklist/checklist.crud.ts");

    var SyncAPIService = /*#__PURE__*/function () {
      function SyncAPIService(setting, loadingCtrl, http, locationCrudService, categorieCrudService, barcodeCrudService, platform, urlCrud, equipmentCrud, equipmentX2Crud, equipmentX3Crud, equipmentAppCrud, equipmentAllCrud, treatmentService, checkListService) {
        _classCallCheck(this, SyncAPIService);

        this.setting = setting;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.locationCrudService = locationCrudService;
        this.categorieCrudService = categorieCrudService;
        this.barcodeCrudService = barcodeCrudService;
        this.platform = platform;
        this.urlCrud = urlCrud;
        this.equipmentCrud = equipmentCrud;
        this.equipmentX2Crud = equipmentX2Crud;
        this.equipmentX3Crud = equipmentX3Crud;
        this.equipmentAppCrud = equipmentAppCrud;
        this.equipmentAllCrud = equipmentAllCrud;
        this.treatmentService = treatmentService;
        this.checkListService = checkListService;
        this.preloaderCounter = 0;
        this.webDb = window.openDatabase("Dayalot", "1.0", "1234", 2 * 1024 * 1024);
      }

      _createClass(SyncAPIService, [{
        key: "startSync",
        value: function startSync() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.getLocation();
                    this.getCategorie();
                    this.getBarcode();
                    this.addUrls();
                    this.addEquipment();
                    this.addEquipment2();
                    this.addEquipment3();
                    this.addEquipmentApp();
                    this.addEquipmentAll();
                    this.addTreatment();
                    this.addCL();

                  case 11:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "getLocation",
        value: function getLocation() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this27 = this;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    console.log("getLocation");
                    _context9.prev = 1;
                    return _context9.abrupt("return", new Promise(function (resolve, reject) {
                      _this27.http.get(_this27.setting.globalURL + "getLocations").toPromise().then(function (res) {
                        console.log("getLocation", res);

                        _this27.locationCrudService.createDB(res, _this27.webDb);
                      })["catch"](function (err) {
                        return console.log("error:", err);
                      });
                    }));

                  case 5:
                    _context9.prev = 5;
                    _context9.t0 = _context9["catch"](1);
                    console.log(_context9.t0);

                  case 8:
                    _context9.prev = 8;
                    return _context9.finish(8);

                  case 10:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, null, [[1, 5, 8, 10]]);
          }));
        }
      }, {
        key: "getCategorie",
        value: function getCategorie() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this28 = this;

            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    console.log("getCategorie");
                    _context10.prev = 1;
                    return _context10.abrupt("return", new Promise(function (resolve, reject) {
                      _this28.http.get(_this28.setting.globalURL + "getEquipmentCategories").toPromise().then(function (res) {
                        console.log("getCategorie", res);

                        _this28.categorieCrudService.createDB(res, _this28.webDb);
                      })["catch"](function (err) {
                        return console.log("error:", err);
                      });
                    }));

                  case 5:
                    _context10.prev = 5;
                    _context10.t0 = _context10["catch"](1);
                    console.log(_context10.t0);

                  case 8:
                    _context10.prev = 8;
                    return _context10.finish(8);

                  case 10:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, null, [[1, 5, 8, 10]]);
          }));
        }
      }, {
        key: "getBarcode",
        value: function getBarcode() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this29 = this;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    console.log("getBarcode");
                    _context11.prev = 1;
                    return _context11.abrupt("return", new Promise(function (resolve, reject) {
                      _this29.http.get(_this29.setting.globalURL + "getEquipments?lean=X").toPromise().then(function (res) {
                        console.log("getCategorie", res["equipment"]);

                        _this29.barcodeCrudService.createDB(res["equipment"], _this29.webDb);
                      })["catch"](function (err) {
                        return console.log("error:", err);
                      });
                    }));

                  case 5:
                    _context11.prev = 5;
                    _context11.t0 = _context11["catch"](1);
                    console.log(_context11.t0);

                  case 8:
                    _context11.prev = 8;
                    return _context11.finish(8);

                  case 10:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, null, [[1, 5, 8, 10]]);
          }));
        }
      }, {
        key: "addUrls",
        value: function addUrls() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var loading;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.loadingCtrl.create({
                      message: "...בטעינה"
                    });

                  case 2:
                    loading = _context12.sent;
                    loading.present();

                    try {
                      this.urlCrud.createDB(this.webDb, 1);
                    } catch (err) {
                      console.log(err);
                    } finally {
                      loading.dismiss();
                    }

                  case 5:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "addEquipment",
        value: function addEquipment() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var loading;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.loadingCtrl.create({
                      message: "...בטעינה"
                    });

                  case 2:
                    loading = _context13.sent;
                    loading.present();

                    try {
                      this.equipmentCrud.createDB(this.webDb, 1);
                    } catch (err) {
                      console.log(err);
                    } finally {
                      loading.dismiss();
                    }

                  case 5:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "addEquipment2",
        value: function addEquipment2() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var loading;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.loadingCtrl.create({
                      message: "...בטעינה"
                    });

                  case 2:
                    loading = _context14.sent;
                    loading.present();

                    try {
                      this.equipmentX2Crud.createDB(this.webDb, 1);
                    } catch (err) {
                      console.log(err);
                    } finally {
                      loading.dismiss();
                    }

                  case 5:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "addEquipment3",
        value: function addEquipment3() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var loading;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.loadingCtrl.create({
                      message: "...בטעינה"
                    });

                  case 2:
                    loading = _context15.sent;
                    loading.present();

                    try {
                      this.equipmentX3Crud.createDB(this.webDb, 1);
                    } catch (err) {
                      console.log(err);
                    } finally {
                      loading.dismiss();
                    }

                  case 5:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "addEquipmentApp",
        value: function addEquipmentApp() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var loading;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.loadingCtrl.create({
                      message: "...בטעינה"
                    });

                  case 2:
                    loading = _context16.sent;
                    loading.present();

                    try {
                      this.equipmentAppCrud.createDB(this.webDb, 1);
                    } catch (err) {
                      console.log(err);
                    } finally {
                      loading.dismiss();
                    }

                  case 5:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "addEquipmentAll",
        value: function addEquipmentAll() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var loading;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.loadingCtrl.create({
                      message: "...בטעינה"
                    });

                  case 2:
                    loading = _context17.sent;
                    loading.present();

                    try {
                      this.equipmentAllCrud.createDB(this.webDb, 1);
                    } catch (err) {
                      console.log(err);
                    } finally {
                      loading.dismiss();
                    }

                  case 5:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "addTreatment",
        value: function addTreatment() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var loading;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return this.loadingCtrl.create({
                      message: "...בטעינה"
                    });

                  case 2:
                    loading = _context18.sent;
                    loading.present();

                    try {
                      this.treatmentService.createDB(this.webDb, 1);
                    } catch (err) {
                      console.log(err);
                    } finally {
                      loading.dismiss();
                    }

                  case 5:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "addCL",
        value: function addCL() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            var loading;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.next = 2;
                    return this.loadingCtrl.create({
                      message: "...בטעינה"
                    });

                  case 2:
                    loading = _context19.sent;
                    loading.present();

                    try {
                      this.checkListService.createDB(this.webDb, 1);
                    } catch (err) {
                      console.log(err);
                    } finally {
                      loading.dismiss();
                    }

                  case 5:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }]);

      return SyncAPIService;
    }();

    SyncAPIService.ctorParameters = function () {
      return [{
        type: _global_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _location_crud__WEBPACK_IMPORTED_MODULE_5__["LocationCrudService"]
      }, {
        type: _categorie_crud__WEBPACK_IMPORTED_MODULE_6__["CategorieCrudService"]
      }, {
        type: _barcode_crud__WEBPACK_IMPORTED_MODULE_7__["BarcodeCrudService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
      }, {
        type: _urlqueue_urlqueue_crud__WEBPACK_IMPORTED_MODULE_8__["UrlqueueCrudService"]
      }, {
        type: _equipment_equipment_crud__WEBPACK_IMPORTED_MODULE_9__["EquipmentCrudService"]
      }, {
        type: _equipmentX2_equipmentX2_crud__WEBPACK_IMPORTED_MODULE_10__["EquipmentX2CrudService"]
      }, {
        type: _equipmentX3_equipmentX3_crud__WEBPACK_IMPORTED_MODULE_11__["EquipmentX3CrudService"]
      }, {
        type: _equipmentApp_equipmentApp_crud__WEBPACK_IMPORTED_MODULE_12__["EquipmentAppCrudService"]
      }, {
        type: _equipmentAll_equipmentAll_crud__WEBPACK_IMPORTED_MODULE_13__["EquipmentAllCrudService"]
      }, {
        type: _treatment_treatment_crud__WEBPACK_IMPORTED_MODULE_14__["TreatmentCrudService"]
      }, {
        type: _checklist_checklist_crud__WEBPACK_IMPORTED_MODULE_15__["ChecklistCrudService"]
      }];
    };

    SyncAPIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _location_crud__WEBPACK_IMPORTED_MODULE_5__["LocationCrudService"], _categorie_crud__WEBPACK_IMPORTED_MODULE_6__["CategorieCrudService"], _barcode_crud__WEBPACK_IMPORTED_MODULE_7__["BarcodeCrudService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"], _urlqueue_urlqueue_crud__WEBPACK_IMPORTED_MODULE_8__["UrlqueueCrudService"], _equipment_equipment_crud__WEBPACK_IMPORTED_MODULE_9__["EquipmentCrudService"], _equipmentX2_equipmentX2_crud__WEBPACK_IMPORTED_MODULE_10__["EquipmentX2CrudService"], _equipmentX3_equipmentX3_crud__WEBPACK_IMPORTED_MODULE_11__["EquipmentX3CrudService"], _equipmentApp_equipmentApp_crud__WEBPACK_IMPORTED_MODULE_12__["EquipmentAppCrudService"], _equipmentAll_equipmentAll_crud__WEBPACK_IMPORTED_MODULE_13__["EquipmentAllCrudService"], _treatment_treatment_crud__WEBPACK_IMPORTED_MODULE_14__["TreatmentCrudService"], _checklist_checklist_crud__WEBPACK_IMPORTED_MODULE_15__["ChecklistCrudService"]])], SyncAPIService);
    /***/
  },

  /***/
  "./src/app/services/treatment/treatment.crud.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/treatment/treatment.crud.ts ***!
    \******************************************************/

  /*! exports provided: TreatmentCrudService */

  /***/
  function srcAppServicesTreatmentTreatmentCrudTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreatmentCrudService", function () {
      return TreatmentCrudService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // import { UrlqueueService } from "./urlqueue.service";


    var TreatmentCrudService = /*#__PURE__*/function () {
      function TreatmentCrudService() {
        var _this30 = this;

        _classCallCheck(this, TreatmentCrudService);

        this.items = [];

        this.createTable = function () {
          _this30.webDb.transaction(function (t) {
            t.executeSql("CREATE TABLE IF NOT EXISTS treatment (equipment,treatmentDate,treatmentDescription,treatmentLongText,type,__v,_id)", [], function (t, results) {
              _this30.insertArrayRowToDb();
            }, function (t, error) {
              console.error("Error: " + error.message);
            });
          });
        };

        this.insertArrayRowToDb = function () {
          // this.setPreloader(1);
          var i = 0;

          _this30.webDb.transaction(function (t) {
            _this30.items.map(function (item) {
              _this30.insertArrayToDb(item, t);

              i++;

              if (i == _this30.items.length) {
                console.log("CloseDB");

                _this30.setPreloader(1);
              }
            });
          });
        };
      }

      _createClass(TreatmentCrudService, [{
        key: "createDB",
        value: function createDB(webDb, setPreloader) {
          this.setPreloader = setPreloader;
          this.webDb = webDb;
          this.dropTable("treatment");
        }
      }, {
        key: "dropTable",
        value: function dropTable(tableName) {
          var _this31 = this;

          this.webDb.transaction(function (t) {
            t.executeSql("DROP TABLE IF EXISTS treatment", [], function (t, results) {
              _this31.createTable();
            }, function (t, error) {
              console.error("Error: " + error.message);
            });
          });
        }
      }, {
        key: "insertArrayToDb",
        value: function insertArrayToDb(item, t) {
          t.executeSql("INSERT INTO treatment (equipment,treatmentDate,treatmentDescription,treatmentLongText,type,__v,_id) VALUES (?,?,?)", [item["_id"], item["__v"], item["treatmentLongText"], item["treatmentDescription"], item["treatmentDate"], item["equipment"]], function (t, results) {}, function (t, error) {
            console.error("Error: " + error.message);
          });
        }
      }]);

      return TreatmentCrudService;
    }();

    TreatmentCrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TreatmentCrudService);
    /***/
  },

  /***/
  "./src/app/services/urlqueue/urlqueue.crud.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/urlqueue/urlqueue.crud.ts ***!
    \****************************************************/

  /*! exports provided: UrlqueueCrudService */

  /***/
  function srcAppServicesUrlqueueUrlqueueCrudTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UrlqueueCrudService", function () {
      return UrlqueueCrudService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // import { UrlqueueService } from "./urlqueue.service";


    var UrlqueueCrudService = /*#__PURE__*/function () {
      function UrlqueueCrudService() {
        var _this32 = this;

        _classCallCheck(this, UrlqueueCrudService);

        this.items = [];

        this.createTable = function () {
          _this32.webDb.transaction(function (t) {
            t.executeSql("CREATE TABLE IF NOT EXISTS urlqueue (id,url,request,retry_count)", [], function (t, results) {
              _this32.insertArrayRowToDb();
            }, function (t, error) {
              console.error("Error: " + error.message);
            });
          });
        };

        this.insertArrayRowToDb = function () {
          // this.setPreloader(1);
          var i = 0;

          _this32.webDb.transaction(function (t) {
            _this32.items.map(function (item) {
              _this32.insertArrayToDb(item, t);

              i++;

              if (i == _this32.items.length) {
                console.log("CloseDB");

                _this32.setPreloader(1);
              }
            });
          });
        };
      }

      _createClass(UrlqueueCrudService, [{
        key: "createDB",
        value: function createDB(webDb, setPreloader) {
          this.setPreloader = setPreloader;
          this.webDb = webDb;
          this.dropTable("urlqueue");
        }
      }, {
        key: "dropTable",
        value: function dropTable(tableName) {
          var _this33 = this;

          this.webDb.transaction(function (t) {
            t.executeSql("DROP TABLE IF EXISTS urlqueue", [], function (t, results) {
              _this33.createTable();
            }, function (t, error) {
              console.error("Error: " + error.message);
            });
          });
        }
      }, {
        key: "insertArrayToDb",
        value: function insertArrayToDb(item, t) {
          t.executeSql("INSERT INTO urlqueue (id,url,request,retry_count) VALUES (?,?,?)", [// this.urlService.getUniqueId(5),
          item["url"], item["request"], item["retry_count"]], function (t, results) {}, function (t, error) {
            console.error("Error: " + error.message);
          });
        }
      }]);

      return UrlqueueCrudService;
    }();

    UrlqueueCrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], UrlqueueCrudService);
    /***/
  },

  /***/
  "./src/app/services/urlqueue/urlqueue.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/urlqueue/urlqueue.service.ts ***!
    \*******************************************************/

  /*! exports provided: UrlqueueService */

  /***/
  function srcAppServicesUrlqueueUrlqueueServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UrlqueueService", function () {
      return UrlqueueService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _urlqueue_crud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./urlqueue.crud */
    "./src/app/services/urlqueue/urlqueue.crud.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _sync_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../sync.service */
    "./src/app/services/sync.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _global_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../global/utils.service */
    "./src/app/services/global/utils.service.ts");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");

    var UrlqueueService = /*#__PURE__*/function () {
      function UrlqueueService(urlqueueCrud, syncAPIService, utils, http, network) {
        var _this34 = this;

        _classCallCheck(this, UrlqueueService);

        this.urlqueueCrud = urlqueueCrud;
        this.syncAPIService = syncAPIService;
        this.utils = utils;
        this.http = http;
        this.network = network;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Flag', '1')
        };
        this.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();

        this.insertUrlToDb = function (item) {
          _this34.webDb = _this34.syncAPIService.webDb;

          _this34.deleteByequi(localStorage.equipment);

          return new Promise(function (resolve, reject) {
            _this34.webDb.transaction(function (t) {
              t.executeSql("INSERT INTO urlqueue (id,url, request,retry_count) VALUES (?,?,?,?)", [_this34.getUniqueId(5), item["url"], item["request"], localStorage.equipment], function (t, results) {
                console.log('jashdasd', results); // this.customerServer.sendCustomerToServer(item);

                resolve("success");
              }, function (t, error) {
                console.log("Error insert: " + error.message);
              });
            });
          });
        };

        this.apiCallList = function () {
          _this34.webDb = _this34.syncAPIService.webDb;
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"](); // Notice that I am re-assigning the params object

          params = params.append('queue', 'true');

          try {
            return new Promise(function (resolve, reject) {
              _this34.webDb.transaction(function (tx) {
                tx.executeSql("SELECT * FROM urlqueue ", [], function (tx, results) {
                  var resultjson = _this34.utils.getArrayFromJson(results.rows);

                  if (resultjson.length > 0) {
                    resultjson.forEach(function (element) {
                      var value = JSON.parse(element.request);

                      if (value.codeList) {
                        value.codeList = JSON.parse(value.codeList);
                      }

                      var apiName = element.url.split('/')[3];

                      if (apiName == 'upload') {
                        element.request = JSON.parse(element.request);
                        console.log(element.request);

                        var blob = _this34.b64toBlob(element.request.image);

                        console.log(blob);
                        var formData = new FormData();
                        formData.append("treatmentType", element.request.treatmentType);
                        formData.append("equipment", element.request.equipment);
                        formData.append("image", blob, element.request.name);
                        value = formData;
                        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
                        headers.append("Content-Type", "multipart/form-data;boundary=" + Math.random());
                        headers.append("Accept", "application/json");
                        _this34.httpOptions = {
                          headers: headers
                        };
                      }

                      try {
                        return new Promise(function (resolve, reject) {
                          _this34.http.post(element.url, value, _this34.httpOptions).toPromise().then(function (res) {
                            _this34.deleteFromDb(element.id);

                            resolve(res);
                            console.log("resServer: ", res);
                          })["catch"](function (err) {
                            resolve("err");

                            if (element.retry_count < 5) {
                              var retryVal = element;

                              _this34.deleteFromDb(element.id);

                              retryVal.retry_count += 1;

                              _this34.insertUrlToDb(retryVal);
                            } else {
                              _this34.deleteFromDb(element.id);
                            }
                          });
                        });
                      } catch (err) {
                        console.log(err);
                      }
                    });
                  } else {// alert('You no apis pending in internal storage')
                  }

                  resolve(results.rows);
                });
              });
            });
          } catch (err) {
            console.log(err);
          }
        };

        this.deleteFromDb = function (item) {
          _this34.webDb = _this34.syncAPIService.webDb;
          console.log(item);
          return new Promise(function (resolve, reject) {
            _this34.webDb.transaction(function (t) {
              t.executeSql("DELETE FROM urlqueue WHERE id = ?", [item], function (t, results) {
                console.log('jashdasd', results); // this.customerServer.sendCustomerToServer(item);

                resolve("success");
              }, function (t, error) {
                console.log("Error insert: " + error.message);
              });
            });
          });
        };

        this.deleteByequi = function (item) {
          _this34.webDb = _this34.syncAPIService.webDb;
          console.log(item);
          return new Promise(function (resolve, reject) {
            _this34.webDb.transaction(function (t) {
              t.executeSql("DELETE FROM urlqueue WHERE retry_count = ?", [item], function (t, results) {
                console.log('jashdasd', results); // this.customerServer.sendCustomerToServer(item);

                resolve("success");
              }, function (t, error) {
                console.log("Error insert: " + error.message);
              });
            });
          });
        };
      }

      _createClass(UrlqueueService, [{
        key: "getUniqueId",
        value: function getUniqueId(parts) {
          var stringArr = [];

          for (var i = 0; i < parts; i++) {
            // tslint:disable-next-line:no-bitwise
            var S4 = ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
            stringArr.push(S4);
          }

          return stringArr.join('-');
        }
      }, {
        key: "b64toBlob",
        value: function b64toBlob(dataURI) {
          console.log(dataURI);
          var startIndex = dataURI.indexOf("base64,") + 7;
          var b64 = dataURI.substr(startIndex);
          var byteString = atob(b64);
          var ab = new ArrayBuffer(byteString.length);
          var ia = new Uint8Array(ab);

          for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
          }

          return new Blob([ab], {
            type: 'image/jpeg'
          });
        }
      }]);

      return UrlqueueService;
    }();

    UrlqueueService.ctorParameters = function () {
      return [{
        type: _urlqueue_crud__WEBPACK_IMPORTED_MODULE_1__["UrlqueueCrudService"]
      }, {
        type: _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"]
      }, {
        type: _global_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"]
      }];
    };

    UrlqueueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_urlqueue_crud__WEBPACK_IMPORTED_MODULE_1__["UrlqueueCrudService"], _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"], _global_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"]])], UrlqueueService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      Usrid: '0527992484',
      Perid: '8753451',
      loginTimeout: 20
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\xampp\htdocs\SCHAchzaka\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map