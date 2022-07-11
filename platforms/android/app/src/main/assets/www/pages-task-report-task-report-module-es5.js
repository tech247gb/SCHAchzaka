function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-task-report-task-report-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"colorRgb\">\n<ion-toolbar class=\"mt-4\"  >\n  <ion-buttons slot=\"start\">\n    <ion-menu-button></ion-menu-button>\n  </ion-buttons>\n\n  <div >\n    <div class=\"headerToolbar\">\n      אחזקה   \n      <span class=\"headerName\">{{ user?.firstName }} {{ user?.lastName }}</span>\n    </div>\n  </div>\n  <ion-buttons slot=\"end\">\n    <ion-icon\n      class=\"backBtn\"\n      (click)=\"back()\"\n      name=\"chevron-forward-outline\"\n    ></ion-icon>\n  </ion-buttons>\n</ion-toolbar>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-report/task-report.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-report/task-report.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTaskReportTaskReportPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <app-header></app-header>\n</ion-header>\n\n<ion-content>\n  <app-task-form [task]=\"task\"></app-task-form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var ComponentsModule = /*#__PURE__*/_createClass(function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    });

    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
      providers: [],
      exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
      entryComponents: []
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/header/header.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/header/header.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".backBtn {\n  font-size: 22px;\n  margin-left: 4px;\n}\n\n.date {\n  margin-top: 3px;\n  text-align: center;\n}\n\n.time {\n  text-align: center;\n  margin-top: -5px;\n  font-size: 17px;\n}\n\n.headerToolbar {\n  text-align: right;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.headerName {\n  margin-right: 5px;\n  font-size: 16px;\n}\n\nion-toolbar {\n  --background: #1f2f98;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXHhhbXBwXFxodGRvY3NcXFNDSEFjaHpha2Evc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUVFLHFCQUFBO0VBQ0EsWUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tCdG4ge1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5kYXRlIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5oZWFkZXJUb29sYmFyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5oZWFkZXJOYW1lIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAvLyAtLWJhY2tncm91bmQ6IHJnYig2MSwgOTEsIDEyOSk7XG4gIC0tYmFja2dyb3VuZDogIzFmMmY5ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuIiwiLmJhY2tCdG4ge1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5kYXRlIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5oZWFkZXJUb29sYmFyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5oZWFkZXJOYW1lIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMxZjJmOTg7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(nav, router) {
        _classCallCheck(this, HeaderComponent);

        this.nav = nav;
        this.router = router; // date = formatDate(new Date(), "dd.MM.yyyy", "en");
        // time = formatDate(new Date(), "HH:mm", "en");

        this.user = {
          firstName: "",
          lastName: ""
        };
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.user) this.user = JSON.parse(localStorage.user);
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(["/intro"]);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-header",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/components/header/header.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/pages/task-report/task-report-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/task-report/task-report-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: TaskReportPageRoutingModule */

  /***/
  function srcAppPagesTaskReportTaskReportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskReportPageRoutingModule", function () {
      return TaskReportPageRoutingModule;
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


    var _task_report_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./task-report.page */
    "./src/app/pages/task-report/task-report.page.ts");

    var routes = [{
      path: '',
      component: _task_report_page__WEBPACK_IMPORTED_MODULE_3__["TaskReportPage"]
    }];

    var TaskReportPageRoutingModule = /*#__PURE__*/_createClass(function TaskReportPageRoutingModule() {
      _classCallCheck(this, TaskReportPageRoutingModule);
    });

    TaskReportPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TaskReportPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/task-report/task-report.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/task-report/task-report.module.ts ***!
    \*********************************************************/

  /*! exports provided: TaskReportPageModule */

  /***/
  function srcAppPagesTaskReportTaskReportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskReportPageModule", function () {
      return TaskReportPageModule;
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


    var _task_report_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./task-report-routing.module */
    "./src/app/pages/task-report/task-report-routing.module.ts");
    /* harmony import */


    var _task_report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./task-report.page */
    "./src/app/pages/task-report/task-report.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var TaskReportPageModule = /*#__PURE__*/_createClass(function TaskReportPageModule() {
      _classCallCheck(this, TaskReportPageModule);
    });

    TaskReportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _task_report_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaskReportPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_task_report_page__WEBPACK_IMPORTED_MODULE_6__["TaskReportPage"]]
    })], TaskReportPageModule);
    /***/
  },

  /***/
  "./src/app/pages/task-report/task-report.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/task-report/task-report.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTaskReportTaskReportPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rhc2stcmVwb3J0L3Rhc2stcmVwb3J0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/task-report/task-report.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/task-report/task-report.page.ts ***!
    \*******************************************************/

  /*! exports provided: TaskReportPage */

  /***/
  function srcAppPagesTaskReportTaskReportPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskReportPage", function () {
      return TaskReportPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TaskReportPage = /*#__PURE__*/function () {
      function TaskReportPage() {
        _classCallCheck(this, TaskReportPage);

        this.task = {};
      }

      _createClass(TaskReportPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.task = JSON.parse(localStorage.task);
        }
      }]);

      return TaskReportPage;
    }();

    TaskReportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task-report',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./task-report.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-report/task-report.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./task-report.page.scss */
      "./src/app/pages/task-report/task-report.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TaskReportPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-task-report-task-report-module-es5.js.map