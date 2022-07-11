function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-home-home-module~pages-task-page-task-page-module~pages-tipulim-tipulim-module"], {
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
  "./src/app/services/checklist/checklist.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/checklist/checklist.service.ts ***!
    \*********************************************************/

  /*! exports provided: ChecklistService */

  /***/
  function srcAppServicesChecklistChecklistServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChecklistService", function () {
      return ChecklistService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _checklist_crud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./checklist.crud */
    "./src/app/services/checklist/checklist.crud.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _sync_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../sync.service */
    "./src/app/services/sync.service.ts");
    /* harmony import */


    var _global_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../global/utils.service */
    "./src/app/services/global/utils.service.ts");

    var ChecklistService = /*#__PURE__*/_createClass(function ChecklistService(equipmenrService, syncAPIService, utils) {
      var _this = this;

      _classCallCheck(this, ChecklistService);

      this.equipmenrService = equipmenrService;
      this.syncAPIService = syncAPIService;
      this.utils = utils;

      this.insertUrlToDb = function (item) {
        var value = item.checkList;
        item.checklist = JSON.stringify(value);
        _this.webDb = _this.syncAPIService.webDb;
        return new Promise(function (resolve, reject) {
          _this.webDb.transaction(function (t) {
            t.executeSql("INSERT INTO checklist (checklist,equipment,codeGroup,imageExists,responsible,treatmentDescription,treatmentLongDescription) VALUES (?,?,?,?,?,?,?)", [item["checklist"], item["equipment"], item["codeGroup"], item["imageExists"], item["responsible"], item["treatmentDescription"], item["treatmentLongDescription"]], function (t, results) {
              resolve("success");
            }, function (t, error) {
              console.log("Error insert: " + error.message);
            });
          });
        });
      };

      this.deleteFromDb = function () {
        _this.webDb = _this.syncAPIService.webDb;
        return new Promise(function (resolve, reject) {
          _this.webDb.transaction(function (t) {
            t.executeSql("DELETE FROM checklist ");
            resolve("success");
          }, function (t, error) {
            console.log("Error insert: " + error.message);
          });
        });
      };

      this.deleteFromDbById = function (item) {
        _this.webDb = _this.syncAPIService.webDb;
        console.log('ghfhgf', item);
        return new Promise(function (resolve, reject) {
          _this.webDb.transaction(function (t) {
            t.executeSql("DELETE FROM checklist WHERE equipment = ?", [item], function (t, results) {
              console.log(results);
              resolve("success");
            }, function (t, error) {
              console.log("Error insert: " + error.message);
            });
          });
        });
      };

      this.getCL = function (equipment) {
        console.log('equipment', equipment);
        _this.webDb = _this.syncAPIService.webDb;

        try {
          return new Promise(function (resolve, reject) {
            _this.webDb.transaction(function (tx) {
              tx.executeSql("SELECT * FROM checklist WHERE equipment = ?", [equipment], function (tx, results) {
                resolve(_this.utils.getArrayFromJson(results.rows));
              });
            });
          });
        } catch (err) {
          console.log(err);
        }
      };

      this.getTaskAppCount = function () {
        _this.webDb = _this.syncAPIService.webDb;

        try {
          return new Promise(function (resolve, reject) {
            _this.webDb.transaction(function (tx) {
              tx.executeSql("SELECT * FROM checklist", [], function (tx, results) {
                resolve(_this.utils.getArrayFromJson(results.rows).length);
              });
            });
          });
        } catch (err) {
          console.log(err);
        }
      };

      this.updateDbById = function (id, item) {
        _this.webDb = _this.syncAPIService.webDb;
        console.log('ghfhgf', item); // return new Promise((resolve, reject) => {
        //     this.webDb.transaction((t) => {
        //         t.executeSql("UPDATE checklist SET equipment = ?",
        //         [id], (t, results) => {
        //             console.log(results);
        //             resolve("success");
        //         }, function (t, error) {
        //             console.log("Error insert: " + error.message);
        //         });
        //     });
        // });
      };
    });

    ChecklistService.ctorParameters = function () {
      return [{
        type: _checklist_crud__WEBPACK_IMPORTED_MODULE_1__["ChecklistCrudService"]
      }, {
        type: _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"]
      }, {
        type: _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]
      }];
    };

    ChecklistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_checklist_crud__WEBPACK_IMPORTED_MODULE_1__["ChecklistCrudService"], _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"], _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]])], ChecklistService);
    /***/
  },

  /***/
  "./src/app/services/global/treatments.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/global/treatments.service.ts ***!
    \*******************************************************/

  /*! exports provided: TreatmentsService */

  /***/
  function srcAppServicesGlobalTreatmentsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreatmentsService", function () {
      return TreatmentsService;
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
    /* harmony import */


    var _checklist_checklist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../checklist/checklist.service */
    "./src/app/services/checklist/checklist.service.ts");

    var TreatmentsService = /*#__PURE__*/function () {
      function TreatmentsService(loadingCtrl, http, checkListService, setting) {
        _classCallCheck(this, TreatmentsService);

        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.checkListService = checkListService;
        this.setting = setting;
        this.today = new Date();
      }

      _createClass(TreatmentsService, [{
        key: "getNameTreatments",
        value: function getNameTreatments(treatmentsType) {
          switch (treatmentsType) {
            case "X1":
              return "טיפול פנימי";
              break;

            case "X2":
              return "טיפול חיצוני";
              break;

            case "X3":
              return "בדיקת מהנדס";
              break;
          }
        } //חדשה getCheckList, יש להעביר משתנה equipment

      }, {
        key: "getCL",
        value: function getCL(equipment) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    return _context.abrupt("return", new Promise(function (resolve, reject) {
                      _this2.http // .get("assets/jsons/tasks.json", this.httpOptions)
                      .get(_this2.setting.globalURL + "getCheckList?equipment=" + equipment).toPromise().then(function (res) {
                        res.equipment = equipment;

                        _this2.checkListService.deleteFromDbById(equipment);

                        _this2.checkListService.insertUrlToDb(res);

                        resolve(res);
                      })["catch"](function (err) {
                        return console.log("error:", err);
                      });
                    }));

                  case 4:
                    _context.prev = 4;
                    _context.t0 = _context["catch"](0);
                    console.log(_context.t0);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[0, 4]]);
          }));
        }
      }, {
        key: "setTreatment",
        value: function setTreatment(Treatment) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log('service', Treatment);
                    _context2.next = 3;
                    return this.loadingCtrl.create({
                      message: "...שולח טיפול"
                    });

                  case 3:
                    loading = _context2.sent;
                    loading.present();
                    _context2.prev = 5;
                    return _context2.abrupt("return", new Promise(function (resolve, reject) {
                      _this3.http // .get("assets/jsons/tasks.json", this.httpOptions)
                      .post(_this3.setting.globalURL + "updateTreatment", Treatment).toPromise().then(function (res) {
                        console.log(res);
                        resolve(res);
                      })["catch"](function (err) {
                        return console.log("error:", err);
                      });
                    }));

                  case 9:
                    _context2.prev = 9;
                    _context2.t0 = _context2["catch"](5);
                    console.log(_context2.t0);

                  case 12:
                    _context2.prev = 12;
                    loading.dismiss();
                    return _context2.finish(12);

                  case 15:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[5, 9, 12, 15]]);
          }));
        }
      }, {
        key: "getData",
        value: function getData(date) {// console.log(date, this.today);
          // if (date >= this.today) {
          //   return true;
          // } else return false;
        }
      }, {
        key: "getTaskLength",
        value: function getTaskLength() {
          return localStorage.taskLength;
        }
      }]);

      return TreatmentsService;
    }();

    TreatmentsService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _checklist_checklist_service__WEBPACK_IMPORTED_MODULE_5__["ChecklistService"]
      }, {
        type: _setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]
      }];
    };

    TreatmentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _checklist_checklist_service__WEBPACK_IMPORTED_MODULE_5__["ChecklistService"], _setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]])], TreatmentsService);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-home-home-module~pages-task-page-task-page-module~pages-tipulim-tipulim-module-es5.js.map