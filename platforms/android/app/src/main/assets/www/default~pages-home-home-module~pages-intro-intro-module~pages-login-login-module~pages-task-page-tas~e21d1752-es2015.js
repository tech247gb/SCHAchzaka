(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-home-home-module~pages-intro-intro-module~pages-login-login-module~pages-task-page-tas~e21d1752"],{

/***/ "./src/app/pages/home/home.service.ts":
/*!********************************************!*\
  !*** ./src/app/pages/home/home.service.ts ***!
  \********************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_global_setting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/global/setting.service */ "./src/app/services/global/setting.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_zbar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/zbar/ngx */ "./node_modules/@ionic-native/zbar/ngx/index.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var src_app_services_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/equipment/equipment.service */ "./src/app/services/equipment/equipment.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var src_app_services_equipmentX2_equipmentX2_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/equipmentX2/equipmentX2.service */ "./src/app/services/equipmentX2/equipmentX2.service.ts");
/* harmony import */ var src_app_services_equipmentX3_equipmentX3_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/equipmentX3/equipmentX3.service */ "./src/app/services/equipmentX3/equipmentX3.service.ts");
/* harmony import */ var src_app_services_equipmentApp_equipmentApp_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/equipmentApp/equipmentApp.service */ "./src/app/services/equipmentApp/equipmentApp.service.ts");
/* harmony import */ var src_app_services_equipmentAll_equipmentAll_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/equipmentAll/equipmentAll.service */ "./src/app/services/equipmentAll/equipmentAll.service.ts");














let HomeService = class HomeService {
    constructor(loadingCtrl, http, zbar, setting, utils, equiService, equiAppService, equiX2Service, equiX3Service, equiAllService, network, syncAPIService) {
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            //   "Content-Type": "application/json",
            //   // "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE,PUT,OPTIONS",
            //   // "Access-Control-Allow-Headers":
            //   //   "Origin, Content-Type, X-Auth-Token, content-type",
            //   "Access-Control-Allow-Origin": "*",
            }),
        };
        this.options = {
            flash: "off",
            drawSight: false,
            text_title: "נא הכנס ברקוד",
            text_instructions: "מצמצת. פספספת. אז בבקשה!",
        };
        this.getLocations = (location) => {
            this.webDb = this.syncAPIService.webDb;
            let Location = "%" + location + "%";
            try {
                return new Promise((resolve, reject) => {
                    this.webDb.transaction(function (tx) {
                        tx.executeSql("SELECT * FROM locations WHERE ktext LIKE ?", [Location], function (tx, results) {
                            let arr = [...results.rows];
                            resolve(arr);
                        });
                    });
                });
            }
            catch (err) {
                console.log(err);
            }
        };
        this.getCategories = (categorie) => {
            this.webDb = this.syncAPIService.webDb;
            let Categorie = "%" + categorie + "%";
            try {
                return new Promise((resolve, reject) => {
                    this.webDb.transaction(function (tx) {
                        tx.executeSql("SELECT * FROM categorie WHERE eartx LIKE ?", [Categorie], function (tx, results) {
                            let arr = [...results.rows];
                            resolve(arr);
                        });
                    });
                });
            }
            catch (err) {
                console.log(err);
            }
        };
        this.startSync();
    }
    startSync() {
        this.syncAPIService.startSync();
        // this.getTasks();
    }
    getTasks(dateFrom, dateTo, TreatmentType, location, categorie, barcode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({ message: "...בטעינה" });
            let user = localStorage.empNum;
            let URL = this.setting.globalURL +
                "getEquipments?employee=" +
                user +
                "&dateFrom=" +
                dateFrom +
                "&dateTo=" +
                dateTo;
            if (TreatmentType != null &&
                TreatmentType != "search" &&
                TreatmentType != "barcode")
                URL = URL + "&treatmentType=" + TreatmentType;
            if (location != null && location != "")
                URL = URL + "&stand=" + location;
            if (categorie != null && categorie != "")
                URL = URL + "&eqart=" + categorie;
            if (barcode != null && barcode != "")
                URL = URL + "&equipment=" + barcode;
            loading.present();
            try {
                return new Promise((resolve, reject) => {
                    this.http
                        // .get("assets/jsons/tasks.json", this.httpOptions)
                        .get(URL
                    // this.setting.globalURL +
                    // // "getTreatments?employee=" +
                    // "getEquipments?employee=" +
                    // user +
                    // "&dateFrom=" +
                    // dateFrom +
                    // "&dateTo=" +
                    // dateTo
                    )
                        .toPromise()
                        .then((res) => {
                        let resultjson = this.utils.getArrayFromJson(res);
                        if (resultjson.length > 0) {
                            if (TreatmentType === 'X1') {
                                this.equiService.deleteFromDb();
                                resultjson.forEach(element => {
                                    this.equiService.insertUrlToDb(element);
                                });
                            }
                            else if (TreatmentType === 'X2') {
                                this.equiX2Service.deleteFromDb();
                                resultjson.forEach(element => {
                                    this.equiX2Service.insertUrlToDb(element);
                                });
                            }
                            else if (TreatmentType === 'X3') {
                                this.equiX3Service.deleteFromDb();
                                resultjson.forEach(element => {
                                    this.equiX3Service.insertUrlToDb(element);
                                });
                            }
                            else if (TreatmentType === 'search') {
                                this.equiAllService.deleteFromDb();
                                resultjson.forEach(element => {
                                    this.equiAllService.insertUrlToDb(element);
                                });
                            }
                            console.log('resultjson', resultjson);
                        }
                        resolve(res);
                    })
                        .catch((err) => console.log("error:", err));
                });
            }
            catch (err) {
                console.log(err);
            }
            finally {
                loading.dismiss();
            }
        });
    }
    getTipulim() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({ message: "...בטעינה" });
            try {
                return new Promise((resolve, reject) => {
                    this.http
                        // .get("assets/jsons/tasks.json", this.httpOptions)
                        .get(this.setting.globalURL + "getAppTreatments")
                        .toPromise()
                        .then((res) => {
                        let resultjson = this.utils.getArrayFromJson(res);
                        if (resultjson.length > 0) {
                            this.equiAppService.deleteFromDb();
                            console.log('resultjson', resultjson);
                            resultjson.forEach(element => {
                                this.equiAppService.insertUrlToDb(element);
                            });
                            console.log(res);
                        }
                        resolve(res);
                    })
                        .catch((err) => console.log("error:", err));
                });
            }
            catch (err) {
                console.log(err);
            }
            finally {
                loading.dismiss();
            }
        });
    }
    getTreatment(equipment, treatmentType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.network.type !== 'none') {
                let loading = yield this.loadingCtrl.create({ message: "...בטעינה" });
                loading.present();
                try {
                    return new Promise((resolve, reject) => {
                        this.http
                            // .get("assets/jsons/tasks.json", this.httpOptions)
                            .get(this.setting.globalURL +
                            "getPreviousTreatments?equipment=" +
                            equipment
                        // +
                        //   "&type=" +
                        //   treatmentType
                        )
                            .toPromise()
                            .then((res) => {
                            console.log(res);
                            resolve(res);
                        })
                            .catch((err) => console.log("error:", err));
                    });
                }
                catch (err) {
                    console.log(err);
                }
                finally {
                    loading.dismiss();
                }
            }
        });
    }
    scanBarcode(returnFn) {
        this.zbar
            .scan(this.options)
            .then((result) => {
            returnFn(result);
        })
            .catch((err) => {
            console.log("Error", err);
        });
    }
    getBarcodes(barcode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.webDb = this.syncAPIService.webDb;
            let Barcode = "%" + barcode + "%";
            try {
                return new Promise((resolve, reject) => {
                    this.webDb.transaction(function (tx) {
                        tx.executeSql("SELECT * FROM barcode WHERE equipment LIKE ?", [Barcode], function (tx, results) {
                            let arr = [...results.rows];
                            resolve(arr);
                        });
                    });
                });
            }
            catch (err) {
                console.log(err);
            }
        });
    }
};
HomeService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_native_zbar_ngx__WEBPACK_IMPORTED_MODULE_5__["ZBar"] },
    { type: _services_global_setting_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"] },
    { type: src_app_services_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_8__["EquipmentService"] },
    { type: src_app_services_equipmentApp_equipmentApp_service__WEBPACK_IMPORTED_MODULE_12__["EquipmentAppService"] },
    { type: src_app_services_equipmentX2_equipmentX2_service__WEBPACK_IMPORTED_MODULE_10__["EquipmentX2Service"] },
    { type: src_app_services_equipmentX3_equipmentX3_service__WEBPACK_IMPORTED_MODULE_11__["EquipmentX3Service"] },
    { type: src_app_services_equipmentAll_equipmentAll_service__WEBPACK_IMPORTED_MODULE_13__["EquipmentAllService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"] },
    { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_6__["SyncAPIService"] }
];
HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _ionic_native_zbar_ngx__WEBPACK_IMPORTED_MODULE_5__["ZBar"],
        _services_global_setting_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"],
        src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"],
        src_app_services_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_8__["EquipmentService"],
        src_app_services_equipmentApp_equipmentApp_service__WEBPACK_IMPORTED_MODULE_12__["EquipmentAppService"],
        src_app_services_equipmentX2_equipmentX2_service__WEBPACK_IMPORTED_MODULE_10__["EquipmentX2Service"],
        src_app_services_equipmentX3_equipmentX3_service__WEBPACK_IMPORTED_MODULE_11__["EquipmentX3Service"],
        src_app_services_equipmentAll_equipmentAll_service__WEBPACK_IMPORTED_MODULE_13__["EquipmentAllService"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"],
        src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_6__["SyncAPIService"]])
], HomeService);



/***/ }),

/***/ "./src/app/services/equipment/equipment.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/equipment/equipment.service.ts ***!
  \*********************************************************/
/*! exports provided: EquipmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentService", function() { return EquipmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _equipment_crud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equipment.crud */ "./src/app/services/equipment/equipment.crud.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sync_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _global_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/utils.service */ "./src/app/services/global/utils.service.ts");





let EquipmentService = class EquipmentService {
    constructor(equipmenrService, syncAPIService, utils) {
        this.equipmenrService = equipmenrService;
        this.syncAPIService = syncAPIService;
        this.utils = utils;
        this.insertUrlToDb = (item) => {
            this.webDb = this.syncAPIService.webDb;
            return new Promise((resolve, reject) => {
                this.webDb.transaction((t) => {
                    t.executeSql("INSERT INTO equipment (_id,__v,vendor,treatmentType,treatmentNumber,stand,serialNumber,responsibleNo,responsible,nextTreatment,location,lastTreatment,imageExists,equipmentObjectType,equipmentDescription,equipmentCategory,equipment,eqart,eartx,begru,atWork) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [
                        item["_id"],
                        item["__v"],
                        item["vendor"],
                        item["treatmentType"],
                        item["treatmentNumber"],
                        item["stand"],
                        item["serialNumber"],
                        item["responsibleNo"],
                        item["responsible"],
                        item["nextTreatment"],
                        item["location"],
                        item["lastTreatment"],
                        item["imageExists"],
                        item["equipmentObjectType"],
                        item["equipmentDescription"],
                        item["equipmentCategory"],
                        item["equipment"],
                        item["eqart"],
                        item["eartx"],
                        item["begru"],
                        item['atWork'] ? item['atWork'] : false
                    ], (t, results) => {
                        resolve("success");
                    }, function (t, error) {
                        console.log("Error insert: " + error.message);
                    });
                });
            });
        };
        this.deleteFromDb = () => {
            this.webDb = this.syncAPIService.webDb;
            return new Promise((resolve, reject) => {
                this.webDb.transaction((t) => {
                    t.executeSql("DELETE FROM equipment ");
                    resolve("success");
                }, function (t, error) {
                    console.log("Error insert: " + error.message);
                });
            });
        };
        this.deleteFromDbById = (item) => {
            this.webDb = this.syncAPIService.webDb;
            console.log('ghfhgf', item);
            return new Promise((resolve, reject) => {
                this.webDb.transaction((t) => {
                    t.executeSql("DELETE FROM equipment WHERE _id = ?", [
                        item,
                    ], (t, results) => {
                        console.log(results);
                        resolve("success");
                    }, function (t, error) {
                        console.log("Error insert: " + error.message);
                    });
                });
            });
        };
        this.updateDbById = (item, id) => {
            this.webDb = this.syncAPIService.webDb;
            console.log('ghfhgf', item);
            return new Promise((resolve, reject) => {
                this.webDb.transaction((t) => {
                    t.executeSql("UPDATE equipment SET atWork = ? WHERE _id = ?", ["true", id], (t, results) => {
                        console.log(results);
                        resolve("success");
                    }, function (t, error) {
                        console.log("Error insert: " + error.message);
                    });
                });
            });
        };
        this.getTasks = () => {
            this.webDb = this.syncAPIService.webDb;
            try {
                return new Promise((resolve, reject) => {
                    this.webDb.transaction((tx) => {
                        tx.executeSql("SELECT * FROM equipment", [], (tx, results) => {
                            resolve(this.utils.getArrayFromJson(results.rows));
                        });
                    });
                });
            }
            catch (err) {
                console.log(err);
            }
        };
        this.getTaskX1Count = () => {
            this.webDb = this.syncAPIService.webDb;
            try {
                return new Promise((resolve, reject) => {
                    this.webDb.transaction((tx) => {
                        tx.executeSql("SELECT * FROM equipment", [], (tx, results) => {
                            resolve(this.utils.getArrayFromJson(results.rows).length);
                        });
                    });
                });
            }
            catch (err) {
                console.log(err);
            }
        };
    }
};
EquipmentService.ctorParameters = () => [
    { type: _equipment_crud__WEBPACK_IMPORTED_MODULE_1__["EquipmentCrudService"] },
    { type: _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"] },
    { type: _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"] }
];
EquipmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: "root" }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_equipment_crud__WEBPACK_IMPORTED_MODULE_1__["EquipmentCrudService"], _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"], _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]])
], EquipmentService);



/***/ }),

/***/ "./src/app/services/equipmentAll/equipmentAll.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/equipmentAll/equipmentAll.service.ts ***!
  \***************************************************************/
/*! exports provided: EquipmentAllService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentAllService", function() { return EquipmentAllService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _equipmentAll_crud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equipmentAll.crud */ "./src/app/services/equipmentAll/equipmentAll.crud.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sync_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _global_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/utils.service */ "./src/app/services/global/utils.service.ts");





let EquipmentAllService = class EquipmentAllService {
    constructor(equipmenrService, syncAPIService, utils) {
        this.equipmenrService = equipmenrService;
        this.syncAPIService = syncAPIService;
        this.utils = utils;
        this.insertUrlToDb = (item) => {
            this.webDb = this.syncAPIService.webDb;
            return new Promise((resolve, reject) => {
                this.webDb.transaction((t) => {
                    t.executeSql("INSERT INTO equipmentAll (_id,__v,vendor,treatmentType,treatmentNumber,stand,serialNumber,responsibleNo,responsible,nextTreatment,location,lastTreatment,imageExists,equipment,equipmentObjectType,equipmentDescription,equipmentCategory,eqart,eartx,begru) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [
                        item["_id"],
                        item["__v"],
                        item["vendor"],
                        item["treatmentType"],
                        item["treatmentNumber"],
                        item["stand"],
                        item["serialNumber"],
                        item["responsibleNo"],
                        item["responsible"],
                        item["nextTreatment"],
                        item["location"],
                        item["lastTreatment"],
                        item["imageExists"],
                        item["equipment"],
                        item["equipmentObjectType"],
                        item["equipmentDescription"],
                        item["equipmentCategory"],
                        item["eqart"],
                        item["eartx"],
                        item["begru"]
                    ], (t, results) => {
                        resolve("success");
                    }, function (t, error) {
                        console.log("Error insert: " + error.message);
                    });
                });
            });
        };
        this.deleteFromDb = () => {
            this.webDb = this.syncAPIService.webDb;
            return new Promise((resolve, reject) => {
                this.webDb.transaction((t) => {
                    t.executeSql("DELETE FROM equipmentAll ");
                    resolve("success");
                }, function (t, error) {
                    console.log("Error insert: " + error.message);
                });
            });
        };
        this.deleteFromDbById = (item) => {
            this.webDb = this.syncAPIService.webDb;
            console.log('ghfhgf', item);
            return new Promise((resolve, reject) => {
                this.webDb.transaction((t) => {
                    t.executeSql("DELETE FROM equipmentAll WHERE _id = ?", [
                        item,
                    ], (t, results) => {
                        console.log(results);
                        resolve("success");
                    }, function (t, error) {
                        console.log("Error insert: " + error.message);
                    });
                });
            });
        };
        this.getTasks = () => {
            this.webDb = this.syncAPIService.webDb;
            try {
                return new Promise((resolve, reject) => {
                    this.webDb.transaction((tx) => {
                        tx.executeSql("SELECT * FROM equipmentAll", [], (tx, results) => {
                            resolve(this.utils.getArrayFromJson(results.rows));
                        });
                    });
                });
            }
            catch (err) {
                console.log(err);
            }
        };
        this.getTaskAllCount = () => {
            this.webDb = this.syncAPIService.webDb;
            try {
                return new Promise((resolve, reject) => {
                    this.webDb.transaction((tx) => {
                        tx.executeSql("SELECT * FROM equipmentAll", [], (tx, results) => {
                            resolve(this.utils.getArrayFromJson(results.rows).length);
                        });
                    });
                });
            }
            catch (err) {
                console.log(err);
            }
        };
    }
};
EquipmentAllService.ctorParameters = () => [
    { type: _equipmentAll_crud__WEBPACK_IMPORTED_MODULE_1__["EquipmentAllCrudService"] },
    { type: _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"] },
    { type: _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"] }
];
EquipmentAllService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: "root" }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_equipmentAll_crud__WEBPACK_IMPORTED_MODULE_1__["EquipmentAllCrudService"], _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"], _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]])
], EquipmentAllService);



/***/ }),

/***/ "./src/app/services/equipmentApp/equipmentApp.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/equipmentApp/equipmentApp.service.ts ***!
  \***************************************************************/
/*! exports provided: EquipmentAppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentAppService", function() { return EquipmentAppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _equipmentApp_crud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equipmentApp.crud */ "./src/app/services/equipmentApp/equipmentApp.crud.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sync_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _global_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/utils.service */ "./src/app/services/global/utils.service.ts");





let EquipmentAppService = class EquipmentAppService {
    constructor(equipmenrService, syncAPIService, utils) {
        this.equipmenrService = equipmenrService;
        this.syncAPIService = syncAPIService;
        this.utils = utils;
        this.insertUrlToDb = (item) => {
            console.log(item);
            this.webDb = this.syncAPIService.webDb;
            return new Promise((resolve, reject) => {
                this.webDb.transaction((t) => {
                    t.executeSql("INSERT INTO equipmentApp (_id,type,treatmentLongDescription,treatmentDescription,treatmentDate,submittedDate,sendToEcc,responsible,imageExists,finish,externalUser,equipment,begru) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)", [
                        item["_id"],
                        item["type"],
                        item["treatmentLongDescription"],
                        item["treatmentDescription"],
                        item["treatmentDate"],
                        item["submittedDate"],
                        item["sendToEcc"],
                        item["responsible"],
                        item["imageExists"],
                        item["finish"],
                        item["externalUser"],
                        item["equipment"],
                        item["begru"],
                    ], (t, results) => {
                        resolve("success");
                    }, function (t, error) {
                        console.log("Error insert: " + error.message);
                    });
                });
            });
        };
        this.deleteFromDb = () => {
            this.webDb = this.syncAPIService.webDb;
            return new Promise((resolve, reject) => {
                this.webDb.transaction((t) => {
                    t.executeSql("DELETE FROM equipmentApp ");
                    resolve("success");
                }, function (t, error) {
                    console.log("Error insert: " + error.message);
                });
            });
        };
        this.deleteFromDbById = (item) => {
            this.webDb = this.syncAPIService.webDb;
            console.log('ghfhgf', item);
            return new Promise((resolve, reject) => {
                this.webDb.transaction((t) => {
                    t.executeSql("DELETE FROM equipmentApp WHERE _id = ?", [
                        item,
                    ], (t, results) => {
                        console.log(results);
                        resolve("success");
                    }, function (t, error) {
                        console.log("Error insert: " + error.message);
                    });
                });
            });
        };
        this.getTasks = () => {
            this.webDb = this.syncAPIService.webDb;
            try {
                return new Promise((resolve, reject) => {
                    this.webDb.transaction((tx) => {
                        tx.executeSql("SELECT * FROM equipmentApp", [], (tx, results) => {
                            resolve(this.utils.getArrayFromJson(results.rows));
                        });
                    });
                });
            }
            catch (err) {
                console.log(err);
            }
        };
        this.getTaskAppCount = () => {
            this.webDb = this.syncAPIService.webDb;
            try {
                return new Promise((resolve, reject) => {
                    this.webDb.transaction((tx) => {
                        tx.executeSql("SELECT * FROM equipmentApp", [], (tx, results) => {
                            resolve(this.utils.getArrayFromJson(results.rows).length);
                        });
                    });
                });
            }
            catch (err) {
                console.log(err);
            }
        };
    }
};
EquipmentAppService.ctorParameters = () => [
    { type: _equipmentApp_crud__WEBPACK_IMPORTED_MODULE_1__["EquipmentAppCrudService"] },
    { type: _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"] },
    { type: _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"] }
];
EquipmentAppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: "root" }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_equipmentApp_crud__WEBPACK_IMPORTED_MODULE_1__["EquipmentAppCrudService"], _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"], _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]])
], EquipmentAppService);



/***/ }),

/***/ "./src/app/services/equipmentX2/equipmentX2.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/equipmentX2/equipmentX2.service.ts ***!
  \*************************************************************/
/*! exports provided: EquipmentX2Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentX2Service", function() { return EquipmentX2Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _equipmentX2_crud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equipmentX2.crud */ "./src/app/services/equipmentX2/equipmentX2.crud.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sync_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _global_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/utils.service */ "./src/app/services/global/utils.service.ts");





let EquipmentX2Service = class EquipmentX2Service {
    constructor(equipmenrService, syncAPIService, utils) {
        this.equipmenrService = equipmenrService;
        this.syncAPIService = syncAPIService;
        this.utils = utils;
        this.insertUrlToDb = (item) => {
            this.webDb = this.syncAPIService.webDb;
            return new Promise((resolve, reject) => {
                this.webDb.transaction((t) => {
                    t.executeSql("INSERT INTO equipmentx2 (_id,__v,vendor,treatmentType,treatmentNumber,stand,serialNumber,responsibleNo,responsible,nextTreatment,location,lastTreatment,imageExists,equipmentObjectType,equipmentDescription,equipmentCategory,equipment,eqart,eartx,begru,atWork) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [
                        item["_id"],
                        item["__v"],
                        item["vendor"],
                        item["treatmentType"],
                        item["treatmentNumber"],
                        item["stand"],
                        item["serialNumber"],
                        item["responsibleNo"],
                        item["responsible"],
                        item["nextTreatment"],
                        item["location"],
                        item["lastTreatment"],
                        item["imageExists"],
                        item["equipmentObjectType"],
                        item["equipmentDescription"],
                        item["equipmentCategory"],
                        item["equipment"],
                        item["eqart"],
                        item["eartx"],
                        item["begru"],
                        item['atWork'] ? item['atWork'] : false
                    ], (t, results) => {
                        resolve("success");
                    }, function (t, error) {
                        console.log("Error insert: " + error.message);
                    });
                });
            });
        };
        this.deleteFromDb = () => {
            this.webDb = this.syncAPIService.webDb;
            return new Promise((resolve, reject) => {
                this.webDb.transaction((t) => {
                    t.executeSql("DELETE FROM equipmentx2 ");
                    resolve("success");
                }, function (t, error) {
                    console.log("Error insert: " + error.message);
                });
            });
        };
        this.deleteFromDbById = (item) => {
            this.webDb = this.syncAPIService.webDb;
            console.log('ghfhgf', item);
            return new Promise((resolve, reject) => {
                this.webDb.transaction((t) => {
                    t.executeSql("DELETE FROM equipmentx2 WHERE _id = ?", [
                        item,
                    ], (t, results) => {
                        console.log(results);
                        resolve("success");
                    }, function (t, error) {
                        console.log("Error insert: " + error.message);
                    });
                });
            });
        };
        this.getTasks = () => {
            this.webDb = this.syncAPIService.webDb;
            try {
                return new Promise((resolve, reject) => {
                    this.webDb.transaction((tx) => {
                        tx.executeSql("SELECT * FROM equipmentx2", [], (tx, results) => {
                            resolve(this.utils.getArrayFromJson(results.rows));
                        });
                    });
                });
            }
            catch (err) {
                console.log(err);
            }
        };
        this.updateDbById = (item, id) => {
            this.webDb = this.syncAPIService.webDb;
            console.log('ghfhgf', item);
            return new Promise((resolve, reject) => {
                this.webDb.transaction((t) => {
                    t.executeSql("UPDATE equipmentx2 SET atWork = ? WHERE _id = ?", ["true", id], (t, results) => {
                        console.log(results);
                        resolve("success");
                    }, function (t, error) {
                        console.log("Error insert: " + error.message);
                    });
                });
            });
        };
        this.getTaskX2Count = () => {
            this.webDb = this.syncAPIService.webDb;
            try {
                return new Promise((resolve, reject) => {
                    this.webDb.transaction((tx) => {
                        tx.executeSql("SELECT * FROM equipmentx2", [], (tx, results) => {
                            resolve(this.utils.getArrayFromJson(results.rows).length);
                        });
                    });
                });
            }
            catch (err) {
                console.log(err);
            }
        };
    }
};
EquipmentX2Service.ctorParameters = () => [
    { type: _equipmentX2_crud__WEBPACK_IMPORTED_MODULE_1__["EquipmentX2CrudService"] },
    { type: _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"] },
    { type: _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"] }
];
EquipmentX2Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: "root" }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_equipmentX2_crud__WEBPACK_IMPORTED_MODULE_1__["EquipmentX2CrudService"], _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"], _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]])
], EquipmentX2Service);



/***/ }),

/***/ "./src/app/services/equipmentX3/equipmentX3.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/equipmentX3/equipmentX3.service.ts ***!
  \*************************************************************/
/*! exports provided: EquipmentX3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentX3Service", function() { return EquipmentX3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _equipmentX3_crud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equipmentX3.crud */ "./src/app/services/equipmentX3/equipmentX3.crud.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sync_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _global_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/utils.service */ "./src/app/services/global/utils.service.ts");





let EquipmentX3Service = class EquipmentX3Service {
    constructor(equipmenrService, syncAPIService, utils) {
        this.equipmenrService = equipmenrService;
        this.syncAPIService = syncAPIService;
        this.utils = utils;
        this.insertUrlToDb = (item) => {
            this.webDb = this.syncAPIService.webDb;
            return new Promise((resolve, reject) => {
                this.webDb.transaction((t) => {
                    t.executeSql("INSERT INTO equipmentx3 (_id,__v,vendor,treatmentType,treatmentNumber,stand,serialNumber,responsibleNo,responsible,nextTreatment,location,lastTreatment,imageExists,equipmentObjectType,equipmentDescription,equipmentCategory,equipment,eqart,eartx,begru,atWork) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [
                        item["_id"],
                        item["__v"],
                        item["vendor"],
                        item["treatmentType"],
                        item["treatmentNumber"],
                        item["stand"],
                        item["serialNumber"],
                        item["responsibleNo"],
                        item["responsible"],
                        item["nextTreatment"],
                        item["location"],
                        item["lastTreatment"],
                        item["imageExists"],
                        item["equipmentObjectType"],
                        item["equipmentDescription"],
                        item["equipmentCategory"],
                        item["equipment"],
                        item["eqart"],
                        item["eartx"],
                        item["begru"],
                        item['atWork'] ? item['atWork'] : false
                    ], (t, results) => {
                        resolve("success");
                    }, function (t, error) {
                        console.log("Error insert: " + error.message);
                    });
                });
            });
        };
        this.deleteFromDb = () => {
            this.webDb = this.syncAPIService.webDb;
            return new Promise((resolve, reject) => {
                this.webDb.transaction((t) => {
                    t.executeSql("DELETE FROM equipmentx3 ");
                    resolve("success");
                }, function (t, error) {
                    console.log("Error insert: " + error.message);
                });
            });
        };
        this.deleteFromDbById = (item) => {
            this.webDb = this.syncAPIService.webDb;
            console.log('ghfhgf', item);
            return new Promise((resolve, reject) => {
                this.webDb.transaction((t) => {
                    t.executeSql("DELETE FROM equipmentx3 WHERE _id = ?", [
                        item,
                    ], (t, results) => {
                        console.log(results);
                        resolve("success");
                    }, function (t, error) {
                        console.log("Error insert: " + error.message);
                    });
                });
            });
        };
        this.getTasks = () => {
            this.webDb = this.syncAPIService.webDb;
            try {
                return new Promise((resolve, reject) => {
                    this.webDb.transaction((tx) => {
                        tx.executeSql("SELECT * FROM equipmentx3", [], (tx, results) => {
                            resolve(this.utils.getArrayFromJson(results.rows));
                        });
                    });
                });
            }
            catch (err) {
                console.log(err);
            }
        };
        this.updateDbById = (item, id) => {
            this.webDb = this.syncAPIService.webDb;
            console.log('ghfhgf', item);
            return new Promise((resolve, reject) => {
                this.webDb.transaction((t) => {
                    t.executeSql("UPDATE equipmentx3 SET atWork = ? WHERE _id = ?", ["true", id], (t, results) => {
                        console.log(results);
                        resolve("success");
                    }, function (t, error) {
                        console.log("Error insert: " + error.message);
                    });
                });
            });
        };
        this.getTaskX3Count = () => {
            this.webDb = this.syncAPIService.webDb;
            try {
                return new Promise((resolve, reject) => {
                    this.webDb.transaction((tx) => {
                        tx.executeSql("SELECT * FROM equipmentx3", [], (tx, results) => {
                            resolve(this.utils.getArrayFromJson(results.rows).length);
                        });
                    });
                });
            }
            catch (err) {
                console.log(err);
            }
        };
    }
};
EquipmentX3Service.ctorParameters = () => [
    { type: _equipmentX3_crud__WEBPACK_IMPORTED_MODULE_1__["EquipmentX3CrudService"] },
    { type: _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"] },
    { type: _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"] }
];
EquipmentX3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: "root" }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_equipmentX3_crud__WEBPACK_IMPORTED_MODULE_1__["EquipmentX3CrudService"], _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"], _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]])
], EquipmentX3Service);



/***/ }),

/***/ "./src/app/services/utils.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/utils.service.ts ***!
  \*******************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let UtilsService = class UtilsService {
    constructor(toastController, alertController, platform) {
        this.toastController = toastController;
        this.alertController = alertController;
        this.platform = platform;
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 15000,
                cssClass: "mainToast",
            });
            toast.present();
        });
    }
    presentalertConfirm(message, header) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (header == "") {
                header = "שימי לב!";
            }
            return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    header: header,
                    message: message,
                    buttons: [
                        {
                            text: "ביטול",
                            role: "cancel",
                            cssClass: "secondary",
                            handler: (blah) => {
                                console.log("Confirm Cancel: blah");
                                resolve(0);
                            },
                        },
                        {
                            text: "אישור",
                            handler: () => {
                                console.log("Confirm Okay");
                                resolve(1);
                            },
                        },
                    ],
                });
                yield alert.present();
            }));
        });
    }
    presentalertAPK(message, APKurl) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    header: "שימי לב !",
                    message: message,
                    cssClass: "mainToast",
                    backdropDismiss: false,
                    buttons: [
                        {
                            text: "סגור אפליקציה",
                            handler: (blah) => {
                                navigator["app"].exitApp();
                                // resolve(0);
                            },
                        },
                        {
                            text: "עידכון גירסה",
                            handler: () => {
                                window.open(APKurl, '_blank');
                                resolve(1);
                                // window.location.href = APKurl;
                                // resolve(1);
                            },
                        },
                    ],
                });
                yield alert.present();
            }));
        });
    }
    presentalertAPKVersion(message, APKurl) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    header: "שימי לב !",
                    message: message,
                    cssClass: "mainToast",
                    backdropDismiss: false,
                    buttons: [
                        {
                            text: "מאוחר יותר",
                            handler: (blah) => {
                                // navigator["app"].exitApp();
                                resolve(0);
                            },
                        },
                        {
                            text: "עידכון גירסה",
                            handler: () => {
                                window.open(APKurl, '_blank');
                                resolve(1);
                                // window.location.href = APKurl;
                                // resolve(1);
                            },
                        },
                    ],
                });
                yield alert.present();
            }));
        });
    }
    getArrayFromJson(obj) {
        let arr = [];
        for (let i = 0; i < obj.length; i++) {
            arr.push(obj[i]);
        }
        return arr;
    }
};
UtilsService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
UtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], UtilsService);



/***/ })

}]);
//# sourceMappingURL=default~pages-home-home-module~pages-intro-intro-module~pages-login-login-module~pages-task-page-tas~e21d1752-es2015.js.map