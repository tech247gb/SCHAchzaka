function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\n  <app-header></app-header>\n</ion-header> -->\n\n<ion-content>\n  <div class=\"logo\">\n    <div align=\"center\">\n      <img src=\"../../../assets/img/logo-sch-eng.png\" style=\"width: 80%\" alt=\"\" />\n      <p class=\"loginText\">התחברות</p>\n    </div>\n  </div>\n\n  <div class=\"loginBox\">\n    <div class=\"inputs\">\n      <div class=\"form-group\">\n        <label for=\"userName\">שם משתמש</label>\n        <input type=\"number\" class=\"form-control\" id=\"userName\" [(ngModel)]=\"user.number\" />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\"> סיסמה</label>\n        <input type=\"number\" class=\"form-control\" id=\"password\" [(ngModel)]=\"user.password\" />\n      </div>\n      <button type=\"button\" class=\"btn btn-dark loginBtn\" (click)=\"onSubmit()\">\n        התחבר\n      </button>\n    </div>\n  </div>\n\n  <!-- <div class=\"row no-gutters text-center systemBtn\">\n    <div class=\"col-4 p-1\">\n      <button [ngClass]=\"systemSelected == 1 ? 'btn btn-info btnTime' : 'btn btn-outline-info btnTime'\" type=\"button\"\n        (click)=\"systemSelect(1)\">\n        <span>DEV</span>\n      </button>\n    </div>\n    <div class=\"col-4 p-1\">\n      <button [ngClass]=\"systemSelected == 2 ? 'btn btn-info btnTime' : 'btn btn-outline-info btnTime'\" type=\"button\"\n        (click)=\"systemSelect(2)\">\n        <span> QA</span>\n      </button>\n    </div> -->\n  <!-- <div class=\"col-12 p-1 pr-4\"> -->\n  <!-- <div class=\"col-4 p-1\">\n      <button [ngClass]=\"systemSelected == 3 ? 'btn btn-info btnTime' : 'btn btn-outline-info btnTime'\" type=\"button\"\n        (click)=\"systemSelect(3)\">\n        <span>PROD</span>\n      </button>\n    </div>\n  </div> -->\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = /*#__PURE__*/_createClass(function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    });

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var LoginPageModule = /*#__PURE__*/_createClass(function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    });

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo {\n  padding: 0px 0px 20px 0px;\n  background-color: #0c2a32;\n}\n\n.logo img {\n  margin-top: -20px;\n}\n\n.loginText {\n  color: white;\n  font-size: 18px;\n}\n\n.inputs {\n  width: 80%;\n  left: 10%;\n  background-color: white;\n  padding: 30px;\n  position: absolute;\n  top: 220px;\n  box-shadow: 3px 5px 8px -2px #878787;\n  text-align: right !important;\n}\n\n.loginBtn {\n  width: 90%;\n  background-color: #0c2a32;\n  border-radius: 30px;\n  margin-right: 5%;\n  margin-top: 10px;\n}\n\n.systemBtn {\n  margin-top: 180px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXHhhbXBwXFxodGRvY3NcXFNDSEFjaHpha2Evc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICBwYWRkaW5nOiAwcHggMHB4IDIwcHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIsIDQyLCA1MCk7XG59XG5cbi5sb2dvIGltZyB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4ubG9naW5UZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5pbnB1dHMge1xuICB3aWR0aDogODAlO1xuICBsZWZ0OiAxMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjIwcHg7XG4gIGJveC1zaGFkb3c6IDNweCA1cHggOHB4IC0ycHggcmdiYSgxMzUsIDEzNSwgMTM1LCAxKTtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuLmxvZ2luQnRuIHtcbiAgd2lkdGg6IDkwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCA0MiwgNTApO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3lzdGVtQnRuIHtcbiAgbWFyZ2luLXRvcDogMTgwcHg7XG59XG4iLCIubG9nbyB7XG4gIHBhZGRpbmc6IDBweCAwcHggMjBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzJhMzI7XG59XG5cbi5sb2dvIGltZyB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4ubG9naW5UZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5pbnB1dHMge1xuICB3aWR0aDogODAlO1xuICBsZWZ0OiAxMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjIwcHg7XG4gIGJveC1zaGFkb3c6IDNweCA1cHggOHB4IC0ycHggIzg3ODc4NztcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuLmxvZ2luQnRuIHtcbiAgd2lkdGg6IDkwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMmEzMjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnN5c3RlbUJ0biB7XG4gIG1hcmdpbi10b3A6IDE4MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_global_setting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/global/setting.service */
    "./src/app/services/global/setting.service.ts");
    /* harmony import */


    var _services_global_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/global/login.service */
    "./src/app/services/global/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _home_home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../home/home.service */
    "./src/app/pages/home/home.service.ts");
    /* harmony import */


    var src_app_services_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/equipment/equipment.service */
    "./src/app/services/equipment/equipment.service.ts");
    /* harmony import */


    var src_app_services_equipmentX2_equipmentX2_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/equipmentX2/equipmentX2.service */
    "./src/app/services/equipmentX2/equipmentX2.service.ts");
    /* harmony import */


    var src_app_services_equipmentX3_equipmentX3_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/equipmentX3/equipmentX3.service */
    "./src/app/services/equipmentX3/equipmentX3.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(router, homeService, equiService, equiX2Service, equiX3Service, loginService, settingsService) {
        _classCallCheck(this, LoginPage);

        this.router = router;
        this.homeService = homeService;
        this.equiService = equiService;
        this.equiX2Service = equiX2Service;
        this.equiX3Service = equiX3Service;
        this.loginService = loginService;
        this.settingsService = settingsService;
        this.user = {
          number: "",
          password: ""
        };
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.user) {
            localStorage.user = "";
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var user, dateFrom, dateTo;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loginService.getUser(this.user);

                  case 2:
                    user = _context.sent;
                    localStorage.empNum = this.user.number;

                    if (!user) {
                      _context.next = 24;
                      break;
                    }

                    localStorage.user = JSON.stringify(user);
                    dateFrom = "2000-01-01";
                    dateTo = moment__WEBPACK_IMPORTED_MODULE_9__().add(30, "d").format("YYYY-MM-DD");
                    ;
                    this.homeService.getTasks(dateFrom, dateTo, 'X1');
                    this.homeService.getTasks(dateFrom, dateTo, 'X2');
                    this.homeService.getTasks(dateFrom, dateTo, 'X3');
                    _context.next = 14;
                    return this.equiService.getTaskX1Count();

                  case 14:
                    localStorage.taskLength = _context.sent;
                    _context.next = 17;
                    return this.equiX2Service.getTaskX2Count();

                  case 17:
                    localStorage.taskX2Length = _context.sent;
                    _context.next = 20;
                    return this.equiX3Service.getTaskX3Count();

                  case 20:
                    localStorage.taskX3Length = _context.sent;
                    this.router.navigate(["/intro"]);
                    _context.next = 25;
                    break;

                  case 24:
                    alert("משתמש לא קיים!!");

                  case 25:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "systemSelect",
        value: function systemSelect(num) {
          console.log("work ", num);
          localStorage.system = num;
          this.loginService.setSystem();
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _home_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"]
      }, {
        type: src_app_services_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_6__["EquipmentService"]
      }, {
        type: src_app_services_equipmentX2_equipmentX2_service__WEBPACK_IMPORTED_MODULE_7__["EquipmentX2Service"]
      }, {
        type: src_app_services_equipmentX3_equipmentX3_service__WEBPACK_IMPORTED_MODULE_8__["EquipmentX3Service"]
      }, {
        type: _services_global_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
      }, {
        type: _services_global_setting_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: "app-login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _home_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"], src_app_services_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_6__["EquipmentService"], src_app_services_equipmentX2_equipmentX2_service__WEBPACK_IMPORTED_MODULE_7__["EquipmentX2Service"], src_app_services_equipmentX3_equipmentX3_service__WEBPACK_IMPORTED_MODULE_8__["EquipmentX3Service"], _services_global_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _services_global_setting_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map