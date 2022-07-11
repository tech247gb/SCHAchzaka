function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-home-home-module~pages-intro-intro-module~pages-login-login-module~pages-task-page-tas~e21d1752"], {
  /***/
  "./src/app/pages/home/home.service.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/home/home.service.ts ***!
    \********************************************/

  /*! exports provided: HomeService */

  /***/
  function srcAppPagesHomeHomeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeService", function () {
      return HomeService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_zbar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/zbar/ngx */
    "./node_modules/@ionic-native/zbar/ngx/index.js");
    /* harmony import */


    var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/sync.service */
    "./src/app/services/sync.service.ts");
    /* harmony import */


    var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/utils.service */
    "./src/app/services/utils.service.ts");
    /* harmony import */


    var src_app_services_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/equipment/equipment.service */
    "./src/app/services/equipment/equipment.service.ts");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var src_app_services_equipmentX2_equipmentX2_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/equipmentX2/equipmentX2.service */
    "./src/app/services/equipmentX2/equipmentX2.service.ts");
    /* harmony import */


    var src_app_services_equipmentX3_equipmentX3_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/services/equipmentX3/equipmentX3.service */
    "./src/app/services/equipmentX3/equipmentX3.service.ts");
    /* harmony import */


    var src_app_services_equipmentApp_equipmentApp_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/services/equipmentApp/equipmentApp.service */
    "./src/app/services/equipmentApp/equipmentApp.service.ts");
    /* harmony import */


    var src_app_services_equipmentAll_equipmentAll_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/services/equipmentAll/equipmentAll.service */
    "./src/app/services/equipmentAll/equipmentAll.service.ts");

    var HomeService = /*#__PURE__*/function () {
      function HomeService(loadingCtrl, http, zbar, setting, utils, equiService, equiAppService, equiX2Service, equiX3Service, equiAllService, network, syncAPIService) {
        var _this = this;

        _classCallCheck(this, HomeService);

        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.zbar = zbar;
        this.setting = setting;
        this.utils = utils;
        this.equiService = equiService;
        this.equiAppService = equiAppService;
        this.equiX2Service = equiX2Service;
        this.equiX3Service = equiX3Service;
        this.equiAllService = equiAllService;
        this.network = network;
        this.syncAPIService = syncAPIService;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({//   "Content-Type": "application/json",
            //   // "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE,PUT,OPTIONS",
            //   // "Access-Control-Allow-Headers":
            //   //   "Origin, Content-Type, X-Auth-Token, content-type",
            //   "Access-Control-Allow-Origin": "*",
          })
        };
        this.options = {
          flash: "off",
          drawSight: false,
          text_title: "נא הכנס ברקוד",
          text_instructions: "מצמצת. פספספת. אז בבקשה!"
        };

        this.getLocations = function (location) {
          _this.webDb = _this.syncAPIService.webDb;
          var Location = "%" + location + "%";

          try {
            return new Promise(function (resolve, reject) {
              _this.webDb.transaction(function (tx) {
                tx.executeSql("SELECT * FROM locations WHERE ktext LIKE ?", [Location], function (tx, results) {
                  var arr = _toConsumableArray(results.rows);

                  resolve(arr);
                });
              });
            });
          } catch (err) {
            console.log(err);
          }
        };

        this.getCategories = function (categorie) {
          _this.webDb = _this.syncAPIService.webDb;
          var Categorie = "%" + categorie + "%";

          try {
            return new Promise(function (resolve, reject) {
              _this.webDb.transaction(function (tx) {
                tx.executeSql("SELECT * FROM categorie WHERE eartx LIKE ?", [Categorie], function (tx, results) {
                  var arr = _toConsumableArray(results.rows);

                  resolve(arr);
                });
              });
            });
          } catch (err) {
            console.log(err);
          }
        };

        this.startSync();
      }

      _createClass(HomeService, [{
        key: "startSync",
        value: function startSync() {
          this.syncAPIService.startSync(); // this.getTasks();
        }
      }, {
        key: "getTasks",
        value: function getTasks(dateFrom, dateTo, TreatmentType, location, categorie, barcode) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var loading, user, URL;
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
                    user = localStorage.empNum;
                    URL = this.setting.globalURL + "getEquipments?employee=" + user + "&dateFrom=" + dateFrom + "&dateTo=" + dateTo;
                    if (TreatmentType != null && TreatmentType != "search" && TreatmentType != "barcode") URL = URL + "&treatmentType=" + TreatmentType;
                    if (location != null && location != "") URL = URL + "&stand=" + location;
                    if (categorie != null && categorie != "") URL = URL + "&eqart=" + categorie;
                    if (barcode != null && barcode != "") URL = URL + "&equipment=" + barcode;
                    loading.present();
                    _context.prev = 10;
                    return _context.abrupt("return", new Promise(function (resolve, reject) {
                      _this2.http // .get("assets/jsons/tasks.json", this.httpOptions)
                      .get(URL // this.setting.globalURL +
                      // // "getTreatments?employee=" +
                      // "getEquipments?employee=" +
                      // user +
                      // "&dateFrom=" +
                      // dateFrom +
                      // "&dateTo=" +
                      // dateTo
                      ).toPromise().then(function (res) {
                        var resultjson = _this2.utils.getArrayFromJson(res);

                        if (resultjson.length > 0) {
                          if (TreatmentType === 'X1') {
                            _this2.equiService.deleteFromDb();

                            resultjson.forEach(function (element) {
                              _this2.equiService.insertUrlToDb(element);
                            });
                          } else if (TreatmentType === 'X2') {
                            _this2.equiX2Service.deleteFromDb();

                            resultjson.forEach(function (element) {
                              _this2.equiX2Service.insertUrlToDb(element);
                            });
                          } else if (TreatmentType === 'X3') {
                            _this2.equiX3Service.deleteFromDb();

                            resultjson.forEach(function (element) {
                              _this2.equiX3Service.insertUrlToDb(element);
                            });
                          } else if (TreatmentType === 'search') {
                            _this2.equiAllService.deleteFromDb();

                            resultjson.forEach(function (element) {
                              _this2.equiAllService.insertUrlToDb(element);
                            });
                          }

                          console.log('resultjson', resultjson);
                        }

                        resolve(res);
                      })["catch"](function (err) {
                        return console.log("error:", err);
                      });
                    }));

                  case 14:
                    _context.prev = 14;
                    _context.t0 = _context["catch"](10);
                    console.log(_context.t0);

                  case 17:
                    _context.prev = 17;
                    loading.dismiss();
                    return _context.finish(17);

                  case 20:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[10, 14, 17, 20]]);
          }));
        }
      }, {
        key: "getTipulim",
        value: function getTipulim() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

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
                    _context2.prev = 3;
                    return _context2.abrupt("return", new Promise(function (resolve, reject) {
                      _this3.http // .get("assets/jsons/tasks.json", this.httpOptions)
                      .get(_this3.setting.globalURL + "getAppTreatments").toPromise().then(function (res) {
                        var resultjson = _this3.utils.getArrayFromJson(res);

                        if (resultjson.length > 0) {
                          _this3.equiAppService.deleteFromDb();

                          console.log('resultjson', resultjson);
                          resultjson.forEach(function (element) {
                            _this3.equiAppService.insertUrlToDb(element);
                          });
                          console.log(res);
                        }

                        resolve(res);
                      })["catch"](function (err) {
                        return console.log("error:", err);
                      });
                    }));

                  case 7:
                    _context2.prev = 7;
                    _context2.t0 = _context2["catch"](3);
                    console.log(_context2.t0);

                  case 10:
                    _context2.prev = 10;
                    loading.dismiss();
                    return _context2.finish(10);

                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[3, 7, 10, 13]]);
          }));
        }
      }, {
        key: "getTreatment",
        value: function getTreatment(equipment, treatmentType) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(this.network.type !== 'none')) {
                      _context3.next = 15;
                      break;
                    }

                    _context3.next = 3;
                    return this.loadingCtrl.create({
                      message: "...בטעינה"
                    });

                  case 3:
                    loading = _context3.sent;
                    loading.present();
                    _context3.prev = 5;
                    return _context3.abrupt("return", new Promise(function (resolve, reject) {
                      _this4.http // .get("assets/jsons/tasks.json", this.httpOptions)
                      .get(_this4.setting.globalURL + "getPreviousTreatments?equipment=" + equipment // +
                      //   "&type=" +
                      //   treatmentType
                      ).toPromise().then(function (res) {
                        console.log(res);
                        resolve(res);
                      })["catch"](function (err) {
                        return console.log("error:", err);
                      });
                    }));

                  case 9:
                    _context3.prev = 9;
                    _context3.t0 = _context3["catch"](5);
                    console.log(_context3.t0);

                  case 12:
                    _context3.prev = 12;
                    loading.dismiss();
                    return _context3.finish(12);

                  case 15:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[5, 9, 12, 15]]);
          }));
        }
      }, {
        key: "scanBarcode",
        value: function scanBarcode(returnFn) {
          this.zbar.scan(this.options).then(function (result) {
            returnFn(result);
          })["catch"](function (err) {
            console.log("Error", err);
          });
        }
      }, {
        key: "getBarcodes",
        value: function getBarcodes(barcode) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this5 = this;

            var Barcode;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.webDb = this.syncAPIService.webDb;
                    Barcode = "%" + barcode + "%";
                    _context4.prev = 2;
                    return _context4.abrupt("return", new Promise(function (resolve, reject) {
                      _this5.webDb.transaction(function (tx) {
                        tx.executeSql("SELECT * FROM barcode WHERE equipment LIKE ?", [Barcode], function (tx, results) {
                          var arr = _toConsumableArray(results.rows);

                          resolve(arr);
                        });
                      });
                    }));

                  case 6:
                    _context4.prev = 6;
                    _context4.t0 = _context4["catch"](2);
                    console.log(_context4.t0);

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[2, 6]]);
          }));
        }
      }]);

      return HomeService;
    }();

    HomeService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ionic_native_zbar_ngx__WEBPACK_IMPORTED_MODULE_5__["ZBar"]
      }, {
        type: _services_global_setting_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]
      }, {
        type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"]
      }, {
        type: src_app_services_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_8__["EquipmentService"]
      }, {
        type: src_app_services_equipmentApp_equipmentApp_service__WEBPACK_IMPORTED_MODULE_12__["EquipmentAppService"]
      }, {
        type: src_app_services_equipmentX2_equipmentX2_service__WEBPACK_IMPORTED_MODULE_10__["EquipmentX2Service"]
      }, {
        type: src_app_services_equipmentX3_equipmentX3_service__WEBPACK_IMPORTED_MODULE_11__["EquipmentX3Service"]
      }, {
        type: src_app_services_equipmentAll_equipmentAll_service__WEBPACK_IMPORTED_MODULE_13__["EquipmentAllService"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"]
      }, {
        type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_6__["SyncAPIService"]
      }];
    };

    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_native_zbar_ngx__WEBPACK_IMPORTED_MODULE_5__["ZBar"], _services_global_setting_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"], src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"], src_app_services_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_8__["EquipmentService"], src_app_services_equipmentApp_equipmentApp_service__WEBPACK_IMPORTED_MODULE_12__["EquipmentAppService"], src_app_services_equipmentX2_equipmentX2_service__WEBPACK_IMPORTED_MODULE_10__["EquipmentX2Service"], src_app_services_equipmentX3_equipmentX3_service__WEBPACK_IMPORTED_MODULE_11__["EquipmentX3Service"], src_app_services_equipmentAll_equipmentAll_service__WEBPACK_IMPORTED_MODULE_13__["EquipmentAllService"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"], src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_6__["SyncAPIService"]])], HomeService);
    /***/
  },

  /***/
  "./src/app/services/equipment/equipment.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/equipment/equipment.service.ts ***!
    \*********************************************************/

  /*! exports provided: EquipmentService */

  /***/
  function srcAppServicesEquipmentEquipmentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentService", function () {
      return EquipmentService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _equipment_crud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./equipment.crud */
    "./src/app/services/equipment/equipment.crud.ts");
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

    var EquipmentService = /*#__PURE__*/_createClass(function EquipmentService(equipmenrService, syncAPIService, utils) {
      var _this6 = this;

      _classCallCheck(this, EquipmentService);

      this.equipmenrService = equipmenrService;
      this.syncAPIService = syncAPIService;
      this.utils = utils;

      this.insertUrlToDb = function (item) {
        _this6.webDb = _this6.syncAPIService.webDb;
        return new Promise(function (resolve, reject) {
          _this6.webDb.transaction(function (t) {
            t.executeSql("INSERT INTO equipment (_id,__v,vendor,treatmentType,treatmentNumber,stand,serialNumber,responsibleNo,responsible,nextTreatment,location,lastTreatment,imageExists,equipmentObjectType,equipmentDescription,equipmentCategory,equipment,eqart,eartx,begru,atWork) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [item["_id"], item["__v"], item["vendor"], item["treatmentType"], item["treatmentNumber"], item["stand"], item["serialNumber"], item["responsibleNo"], item["responsible"], item["nextTreatment"], item["location"], item["lastTreatment"], item["imageExists"], item["equipmentObjectType"], item["equipmentDescription"], item["equipmentCategory"], item["equipment"], item["eqart"], item["eartx"], item["begru"], item['atWork'] ? item['atWork'] : false], function (t, results) {
              resolve("success");
            }, function (t, error) {
              console.log("Error insert: " + error.message);
            });
          });
        });
      };

      this.deleteFromDb = function () {
        _this6.webDb = _this6.syncAPIService.webDb;
        return new Promise(function (resolve, reject) {
          _this6.webDb.transaction(function (t) {
            t.executeSql("DELETE FROM equipment ");
            resolve("success");
          }, function (t, error) {
            console.log("Error insert: " + error.message);
          });
        });
      };

      this.deleteFromDbById = function (item) {
        _this6.webDb = _this6.syncAPIService.webDb;
        console.log('ghfhgf', item);
        return new Promise(function (resolve, reject) {
          _this6.webDb.transaction(function (t) {
            t.executeSql("DELETE FROM equipment WHERE _id = ?", [item], function (t, results) {
              console.log(results);
              resolve("success");
            }, function (t, error) {
              console.log("Error insert: " + error.message);
            });
          });
        });
      };

      this.updateDbById = function (item, id) {
        _this6.webDb = _this6.syncAPIService.webDb;
        console.log('ghfhgf', item);
        return new Promise(function (resolve, reject) {
          _this6.webDb.transaction(function (t) {
            t.executeSql("UPDATE equipment SET atWork = ? WHERE _id = ?", ["true", id], function (t, results) {
              console.log(results);
              resolve("success");
            }, function (t, error) {
              console.log("Error insert: " + error.message);
            });
          });
        });
      };

      this.getTasks = function () {
        _this6.webDb = _this6.syncAPIService.webDb;

        try {
          return new Promise(function (resolve, reject) {
            _this6.webDb.transaction(function (tx) {
              tx.executeSql("SELECT * FROM equipment", [], function (tx, results) {
                resolve(_this6.utils.getArrayFromJson(results.rows));
              });
            });
          });
        } catch (err) {
          console.log(err);
        }
      };

      this.getTaskX1Count = function () {
        _this6.webDb = _this6.syncAPIService.webDb;

        try {
          return new Promise(function (resolve, reject) {
            _this6.webDb.transaction(function (tx) {
              tx.executeSql("SELECT * FROM equipment", [], function (tx, results) {
                resolve(_this6.utils.getArrayFromJson(results.rows).length);
              });
            });
          });
        } catch (err) {
          console.log(err);
        }
      };
    });

    EquipmentService.ctorParameters = function () {
      return [{
        type: _equipment_crud__WEBPACK_IMPORTED_MODULE_1__["EquipmentCrudService"]
      }, {
        type: _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"]
      }, {
        type: _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]
      }];
    };

    EquipmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_equipment_crud__WEBPACK_IMPORTED_MODULE_1__["EquipmentCrudService"], _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"], _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]])], EquipmentService);
    /***/
  },

  /***/
  "./src/app/services/equipmentAll/equipmentAll.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/services/equipmentAll/equipmentAll.service.ts ***!
    \***************************************************************/

  /*! exports provided: EquipmentAllService */

  /***/
  function srcAppServicesEquipmentAllEquipmentAllServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentAllService", function () {
      return EquipmentAllService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _equipmentAll_crud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./equipmentAll.crud */
    "./src/app/services/equipmentAll/equipmentAll.crud.ts");
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

    var EquipmentAllService = /*#__PURE__*/_createClass(function EquipmentAllService(equipmenrService, syncAPIService, utils) {
      var _this7 = this;

      _classCallCheck(this, EquipmentAllService);

      this.equipmenrService = equipmenrService;
      this.syncAPIService = syncAPIService;
      this.utils = utils;

      this.insertUrlToDb = function (item) {
        _this7.webDb = _this7.syncAPIService.webDb;
        return new Promise(function (resolve, reject) {
          _this7.webDb.transaction(function (t) {
            t.executeSql("INSERT INTO equipmentAll (_id,__v,vendor,treatmentType,treatmentNumber,stand,serialNumber,responsibleNo,responsible,nextTreatment,location,lastTreatment,imageExists,equipment,equipmentObjectType,equipmentDescription,equipmentCategory,eqart,eartx,begru) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [item["_id"], item["__v"], item["vendor"], item["treatmentType"], item["treatmentNumber"], item["stand"], item["serialNumber"], item["responsibleNo"], item["responsible"], item["nextTreatment"], item["location"], item["lastTreatment"], item["imageExists"], item["equipment"], item["equipmentObjectType"], item["equipmentDescription"], item["equipmentCategory"], item["eqart"], item["eartx"], item["begru"]], function (t, results) {
              resolve("success");
            }, function (t, error) {
              console.log("Error insert: " + error.message);
            });
          });
        });
      };

      this.deleteFromDb = function () {
        _this7.webDb = _this7.syncAPIService.webDb;
        return new Promise(function (resolve, reject) {
          _this7.webDb.transaction(function (t) {
            t.executeSql("DELETE FROM equipmentAll ");
            resolve("success");
          }, function (t, error) {
            console.log("Error insert: " + error.message);
          });
        });
      };

      this.deleteFromDbById = function (item) {
        _this7.webDb = _this7.syncAPIService.webDb;
        console.log('ghfhgf', item);
        return new Promise(function (resolve, reject) {
          _this7.webDb.transaction(function (t) {
            t.executeSql("DELETE FROM equipmentAll WHERE _id = ?", [item], function (t, results) {
              console.log(results);
              resolve("success");
            }, function (t, error) {
              console.log("Error insert: " + error.message);
            });
          });
        });
      };

      this.getTasks = function () {
        _this7.webDb = _this7.syncAPIService.webDb;

        try {
          return new Promise(function (resolve, reject) {
            _this7.webDb.transaction(function (tx) {
              tx.executeSql("SELECT * FROM equipmentAll", [], function (tx, results) {
                resolve(_this7.utils.getArrayFromJson(results.rows));
              });
            });
          });
        } catch (err) {
          console.log(err);
        }
      };

      this.getTaskAllCount = function () {
        _this7.webDb = _this7.syncAPIService.webDb;

        try {
          return new Promise(function (resolve, reject) {
            _this7.webDb.transaction(function (tx) {
              tx.executeSql("SELECT * FROM equipmentAll", [], function (tx, results) {
                resolve(_this7.utils.getArrayFromJson(results.rows).length);
              });
            });
          });
        } catch (err) {
          console.log(err);
        }
      };
    });

    EquipmentAllService.ctorParameters = function () {
      return [{
        type: _equipmentAll_crud__WEBPACK_IMPORTED_MODULE_1__["EquipmentAllCrudService"]
      }, {
        type: _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"]
      }, {
        type: _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]
      }];
    };

    EquipmentAllService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_equipmentAll_crud__WEBPACK_IMPORTED_MODULE_1__["EquipmentAllCrudService"], _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"], _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]])], EquipmentAllService);
    /***/
  },

  /***/
  "./src/app/services/equipmentApp/equipmentApp.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/services/equipmentApp/equipmentApp.service.ts ***!
    \***************************************************************/

  /*! exports provided: EquipmentAppService */

  /***/
  function srcAppServicesEquipmentAppEquipmentAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentAppService", function () {
      return EquipmentAppService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _equipmentApp_crud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./equipmentApp.crud */
    "./src/app/services/equipmentApp/equipmentApp.crud.ts");
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

    var EquipmentAppService = /*#__PURE__*/_createClass(function EquipmentAppService(equipmenrService, syncAPIService, utils) {
      var _this8 = this;

      _classCallCheck(this, EquipmentAppService);

      this.equipmenrService = equipmenrService;
      this.syncAPIService = syncAPIService;
      this.utils = utils;

      this.insertUrlToDb = function (item) {
        console.log(item);
        _this8.webDb = _this8.syncAPIService.webDb;
        return new Promise(function (resolve, reject) {
          _this8.webDb.transaction(function (t) {
            t.executeSql("INSERT INTO equipmentApp (_id,type,treatmentLongDescription,treatmentDescription,treatmentDate,submittedDate,sendToEcc,responsible,imageExists,finish,externalUser,equipment,begru) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)", [item["_id"], item["type"], item["treatmentLongDescription"], item["treatmentDescription"], item["treatmentDate"], item["submittedDate"], item["sendToEcc"], item["responsible"], item["imageExists"], item["finish"], item["externalUser"], item["equipment"], item["begru"]], function (t, results) {
              resolve("success");
            }, function (t, error) {
              console.log("Error insert: " + error.message);
            });
          });
        });
      };

      this.deleteFromDb = function () {
        _this8.webDb = _this8.syncAPIService.webDb;
        return new Promise(function (resolve, reject) {
          _this8.webDb.transaction(function (t) {
            t.executeSql("DELETE FROM equipmentApp ");
            resolve("success");
          }, function (t, error) {
            console.log("Error insert: " + error.message);
          });
        });
      };

      this.deleteFromDbById = function (item) {
        _this8.webDb = _this8.syncAPIService.webDb;
        console.log('ghfhgf', item);
        return new Promise(function (resolve, reject) {
          _this8.webDb.transaction(function (t) {
            t.executeSql("DELETE FROM equipmentApp WHERE _id = ?", [item], function (t, results) {
              console.log(results);
              resolve("success");
            }, function (t, error) {
              console.log("Error insert: " + error.message);
            });
          });
        });
      };

      this.getTasks = function () {
        _this8.webDb = _this8.syncAPIService.webDb;

        try {
          return new Promise(function (resolve, reject) {
            _this8.webDb.transaction(function (tx) {
              tx.executeSql("SELECT * FROM equipmentApp", [], function (tx, results) {
                resolve(_this8.utils.getArrayFromJson(results.rows));
              });
            });
          });
        } catch (err) {
          console.log(err);
        }
      };

      this.getTaskAppCount = function () {
        _this8.webDb = _this8.syncAPIService.webDb;

        try {
          return new Promise(function (resolve, reject) {
            _this8.webDb.transaction(function (tx) {
              tx.executeSql("SELECT * FROM equipmentApp", [], function (tx, results) {
                resolve(_this8.utils.getArrayFromJson(results.rows).length);
              });
            });
          });
        } catch (err) {
          console.log(err);
        }
      };
    });

    EquipmentAppService.ctorParameters = function () {
      return [{
        type: _equipmentApp_crud__WEBPACK_IMPORTED_MODULE_1__["EquipmentAppCrudService"]
      }, {
        type: _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"]
      }, {
        type: _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]
      }];
    };

    EquipmentAppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_equipmentApp_crud__WEBPACK_IMPORTED_MODULE_1__["EquipmentAppCrudService"], _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"], _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]])], EquipmentAppService);
    /***/
  },

  /***/
  "./src/app/services/equipmentX2/equipmentX2.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/services/equipmentX2/equipmentX2.service.ts ***!
    \*************************************************************/

  /*! exports provided: EquipmentX2Service */

  /***/
  function srcAppServicesEquipmentX2EquipmentX2ServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentX2Service", function () {
      return EquipmentX2Service;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _equipmentX2_crud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./equipmentX2.crud */
    "./src/app/services/equipmentX2/equipmentX2.crud.ts");
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

    var EquipmentX2Service = /*#__PURE__*/_createClass(function EquipmentX2Service(equipmenrService, syncAPIService, utils) {
      var _this9 = this;

      _classCallCheck(this, EquipmentX2Service);

      this.equipmenrService = equipmenrService;
      this.syncAPIService = syncAPIService;
      this.utils = utils;

      this.insertUrlToDb = function (item) {
        _this9.webDb = _this9.syncAPIService.webDb;
        return new Promise(function (resolve, reject) {
          _this9.webDb.transaction(function (t) {
            t.executeSql("INSERT INTO equipmentx2 (_id,__v,vendor,treatmentType,treatmentNumber,stand,serialNumber,responsibleNo,responsible,nextTreatment,location,lastTreatment,imageExists,equipmentObjectType,equipmentDescription,equipmentCategory,equipment,eqart,eartx,begru,atWork) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [item["_id"], item["__v"], item["vendor"], item["treatmentType"], item["treatmentNumber"], item["stand"], item["serialNumber"], item["responsibleNo"], item["responsible"], item["nextTreatment"], item["location"], item["lastTreatment"], item["imageExists"], item["equipmentObjectType"], item["equipmentDescription"], item["equipmentCategory"], item["equipment"], item["eqart"], item["eartx"], item["begru"], item['atWork'] ? item['atWork'] : false], function (t, results) {
              resolve("success");
            }, function (t, error) {
              console.log("Error insert: " + error.message);
            });
          });
        });
      };

      this.deleteFromDb = function () {
        _this9.webDb = _this9.syncAPIService.webDb;
        return new Promise(function (resolve, reject) {
          _this9.webDb.transaction(function (t) {
            t.executeSql("DELETE FROM equipmentx2 ");
            resolve("success");
          }, function (t, error) {
            console.log("Error insert: " + error.message);
          });
        });
      };

      this.deleteFromDbById = function (item) {
        _this9.webDb = _this9.syncAPIService.webDb;
        console.log('ghfhgf', item);
        return new Promise(function (resolve, reject) {
          _this9.webDb.transaction(function (t) {
            t.executeSql("DELETE FROM equipmentx2 WHERE _id = ?", [item], function (t, results) {
              console.log(results);
              resolve("success");
            }, function (t, error) {
              console.log("Error insert: " + error.message);
            });
          });
        });
      };

      this.getTasks = function () {
        _this9.webDb = _this9.syncAPIService.webDb;

        try {
          return new Promise(function (resolve, reject) {
            _this9.webDb.transaction(function (tx) {
              tx.executeSql("SELECT * FROM equipmentx2", [], function (tx, results) {
                resolve(_this9.utils.getArrayFromJson(results.rows));
              });
            });
          });
        } catch (err) {
          console.log(err);
        }
      };

      this.updateDbById = function (item, id) {
        _this9.webDb = _this9.syncAPIService.webDb;
        console.log('ghfhgf', item);
        return new Promise(function (resolve, reject) {
          _this9.webDb.transaction(function (t) {
            t.executeSql("UPDATE equipmentx2 SET atWork = ? WHERE _id = ?", ["true", id], function (t, results) {
              console.log(results);
              resolve("success");
            }, function (t, error) {
              console.log("Error insert: " + error.message);
            });
          });
        });
      };

      this.getTaskX2Count = function () {
        _this9.webDb = _this9.syncAPIService.webDb;

        try {
          return new Promise(function (resolve, reject) {
            _this9.webDb.transaction(function (tx) {
              tx.executeSql("SELECT * FROM equipmentx2", [], function (tx, results) {
                resolve(_this9.utils.getArrayFromJson(results.rows).length);
              });
            });
          });
        } catch (err) {
          console.log(err);
        }
      };
    });

    EquipmentX2Service.ctorParameters = function () {
      return [{
        type: _equipmentX2_crud__WEBPACK_IMPORTED_MODULE_1__["EquipmentX2CrudService"]
      }, {
        type: _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"]
      }, {
        type: _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]
      }];
    };

    EquipmentX2Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_equipmentX2_crud__WEBPACK_IMPORTED_MODULE_1__["EquipmentX2CrudService"], _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"], _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]])], EquipmentX2Service);
    /***/
  },

  /***/
  "./src/app/services/equipmentX3/equipmentX3.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/services/equipmentX3/equipmentX3.service.ts ***!
    \*************************************************************/

  /*! exports provided: EquipmentX3Service */

  /***/
  function srcAppServicesEquipmentX3EquipmentX3ServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentX3Service", function () {
      return EquipmentX3Service;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _equipmentX3_crud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./equipmentX3.crud */
    "./src/app/services/equipmentX3/equipmentX3.crud.ts");
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

    var EquipmentX3Service = /*#__PURE__*/_createClass(function EquipmentX3Service(equipmenrService, syncAPIService, utils) {
      var _this10 = this;

      _classCallCheck(this, EquipmentX3Service);

      this.equipmenrService = equipmenrService;
      this.syncAPIService = syncAPIService;
      this.utils = utils;

      this.insertUrlToDb = function (item) {
        _this10.webDb = _this10.syncAPIService.webDb;
        return new Promise(function (resolve, reject) {
          _this10.webDb.transaction(function (t) {
            t.executeSql("INSERT INTO equipmentx3 (_id,__v,vendor,treatmentType,treatmentNumber,stand,serialNumber,responsibleNo,responsible,nextTreatment,location,lastTreatment,imageExists,equipmentObjectType,equipmentDescription,equipmentCategory,equipment,eqart,eartx,begru,atWork) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [item["_id"], item["__v"], item["vendor"], item["treatmentType"], item["treatmentNumber"], item["stand"], item["serialNumber"], item["responsibleNo"], item["responsible"], item["nextTreatment"], item["location"], item["lastTreatment"], item["imageExists"], item["equipmentObjectType"], item["equipmentDescription"], item["equipmentCategory"], item["equipment"], item["eqart"], item["eartx"], item["begru"], item['atWork'] ? item['atWork'] : false], function (t, results) {
              resolve("success");
            }, function (t, error) {
              console.log("Error insert: " + error.message);
            });
          });
        });
      };

      this.deleteFromDb = function () {
        _this10.webDb = _this10.syncAPIService.webDb;
        return new Promise(function (resolve, reject) {
          _this10.webDb.transaction(function (t) {
            t.executeSql("DELETE FROM equipmentx3 ");
            resolve("success");
          }, function (t, error) {
            console.log("Error insert: " + error.message);
          });
        });
      };

      this.deleteFromDbById = function (item) {
        _this10.webDb = _this10.syncAPIService.webDb;
        console.log('ghfhgf', item);
        return new Promise(function (resolve, reject) {
          _this10.webDb.transaction(function (t) {
            t.executeSql("DELETE FROM equipmentx3 WHERE _id = ?", [item], function (t, results) {
              console.log(results);
              resolve("success");
            }, function (t, error) {
              console.log("Error insert: " + error.message);
            });
          });
        });
      };

      this.getTasks = function () {
        _this10.webDb = _this10.syncAPIService.webDb;

        try {
          return new Promise(function (resolve, reject) {
            _this10.webDb.transaction(function (tx) {
              tx.executeSql("SELECT * FROM equipmentx3", [], function (tx, results) {
                resolve(_this10.utils.getArrayFromJson(results.rows));
              });
            });
          });
        } catch (err) {
          console.log(err);
        }
      };

      this.updateDbById = function (item, id) {
        _this10.webDb = _this10.syncAPIService.webDb;
        console.log('ghfhgf', item);
        return new Promise(function (resolve, reject) {
          _this10.webDb.transaction(function (t) {
            t.executeSql("UPDATE equipmentx3 SET atWork = ? WHERE _id = ?", ["true", id], function (t, results) {
              console.log(results);
              resolve("success");
            }, function (t, error) {
              console.log("Error insert: " + error.message);
            });
          });
        });
      };

      this.getTaskX3Count = function () {
        _this10.webDb = _this10.syncAPIService.webDb;

        try {
          return new Promise(function (resolve, reject) {
            _this10.webDb.transaction(function (tx) {
              tx.executeSql("SELECT * FROM equipmentx3", [], function (tx, results) {
                resolve(_this10.utils.getArrayFromJson(results.rows).length);
              });
            });
          });
        } catch (err) {
          console.log(err);
        }
      };
    });

    EquipmentX3Service.ctorParameters = function () {
      return [{
        type: _equipmentX3_crud__WEBPACK_IMPORTED_MODULE_1__["EquipmentX3CrudService"]
      }, {
        type: _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"]
      }, {
        type: _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]
      }];
    };

    EquipmentX3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_equipmentX3_crud__WEBPACK_IMPORTED_MODULE_1__["EquipmentX3CrudService"], _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"], _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]])], EquipmentX3Service);
    /***/
  },

  /***/
  "./src/app/services/utils.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/utils.service.ts ***!
    \*******************************************/

  /*! exports provided: UtilsService */

  /***/
  function srcAppServicesUtilsServiceTs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var UtilsService = /*#__PURE__*/function () {
      function UtilsService(toastController, alertController, platform) {
        _classCallCheck(this, UtilsService);

        this.toastController = toastController;
        this.alertController = alertController;
        this.platform = platform;
      }

      _createClass(UtilsService, [{
        key: "presentToast",
        value: function presentToast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var toast;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: 15000,
                      cssClass: "mainToast"
                    });

                  case 2:
                    toast = _context5.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "presentalertConfirm",
        value: function presentalertConfirm(message, header) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this11 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (header == "") {
                      header = "שימי לב!";
                    }

                    return _context7.abrupt("return", new Promise(function (resolve, reject) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                _context6.next = 2;
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

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));
        }
      }, {
        key: "presentalertAPK",
        value: function presentalertAPK(message, APKurl) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this12 = this;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    return _context9.abrupt("return", new Promise(function (resolve, reject) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee8$(_context8) {
                          while (1) {
                            switch (_context8.prev = _context8.next) {
                              case 0:
                                _context8.next = 2;
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
                                      window.open(APKurl, '_blank');
                                      resolve(1); // window.location.href = APKurl;
                                      // resolve(1);
                                    }
                                  }]
                                });

                              case 2:
                                alert = _context8.sent;
                                _context8.next = 5;
                                return alert.present();

                              case 5:
                              case "end":
                                return _context8.stop();
                            }
                          }
                        }, _callee8, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9);
          }));
        }
      }, {
        key: "presentalertAPKVersion",
        value: function presentalertAPKVersion(message, APKurl) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this13 = this;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    return _context11.abrupt("return", new Promise(function (resolve, reject) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee10$(_context10) {
                          while (1) {
                            switch (_context10.prev = _context10.next) {
                              case 0:
                                _context10.next = 2;
                                return this.alertController.create({
                                  header: "שימי לב !",
                                  message: message,
                                  cssClass: "mainToast",
                                  backdropDismiss: false,
                                  buttons: [{
                                    text: "מאוחר יותר",
                                    handler: function handler(blah) {
                                      // navigator["app"].exitApp();
                                      resolve(0);
                                    }
                                  }, {
                                    text: "עידכון גירסה",
                                    handler: function handler() {
                                      window.open(APKurl, '_blank');
                                      resolve(1); // window.location.href = APKurl;
                                      // resolve(1);
                                    }
                                  }]
                                });

                              case 2:
                                alert = _context10.sent;
                                _context10.next = 5;
                                return alert.present();

                              case 5:
                              case "end":
                                return _context10.stop();
                            }
                          }
                        }, _callee10, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11);
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
  }
}]);
//# sourceMappingURL=default~pages-home-home-module~pages-intro-intro-module~pages-login-login-module~pages-task-page-tas~e21d1752-es5.js.map