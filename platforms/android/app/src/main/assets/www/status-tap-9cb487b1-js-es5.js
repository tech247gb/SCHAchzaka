function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-tap-9cb487b1-js"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/status-tap-9cb487b1.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/status-tap-9cb487b1.js ***!
    \******************************************************************/

  /*! exports provided: startStatusTap */

  /***/
  function node_modulesIonicCoreDistEsmStatusTap9cb487b1Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "startStatusTap", function () {
      return startStatusTap;
    });
    /* harmony import */


    var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-7a8b7a1c.js */
    "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
    /* harmony import */


    var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./helpers-1457892a.js */
    "./node_modules/@ionic/core/dist/esm/helpers-1457892a.js");

    var startStatusTap = function startStatusTap() {
      var win = window;
      win.addEventListener('statusTap', function () {
        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function () {
          var width = win.innerWidth;
          var height = win.innerHeight;
          var el = document.elementFromPoint(width / 2, height / 2);

          if (!el) {
            return;
          }

          var contentEl = el.closest('ion-content');

          if (contentEl) {
            new Promise(function (resolve) {
              return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(contentEl, resolve);
            }).then(function () {
              Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        /**
                         * If scrolling and user taps status bar,
                         * only calling scrollToTop is not enough
                         * as engines like WebKit will jump the
                         * scroll position back down and complete
                         * any in-progress momentum scrolling.
                         */
                        contentEl.style.setProperty('--overflow', 'hidden');
                        _context.next = 3;
                        return contentEl.scrollToTop(300);

                      case 3:
                        contentEl.style.removeProperty('--overflow');

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })));
            });
          }
        });
      });
    };
    /***/

  }
}]);
//# sourceMappingURL=status-tap-9cb487b1-js-es5.js.map