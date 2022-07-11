(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tipulim-tipulim-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tipulim/components/tipul/tipul.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tipulim/components/tipul/tipul.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex w-100 justify-content-between\">\n  <h5 class=\"mb-1 text-right\">\n    {{ tipul.equipment }} - {{ tipul.equipmentDescription }} \n  </h5>\n  <small>{{ tipul.responsible }}</small>\n</div>\n<p class=\"mb-1 text-right\">\n  {{ tipul.submittedDate | date: \"dd/MM/yyyy\" }}\n</p>\n<p class=\"mb-1 text-right\">\n  {{ treatmentsService.getNameTreatments(tipul.type) }}\n</p>\n<p>{{ tipul.treatmentLongDescription }}</p>\n<small> {{ tipul.treatmentDate | date: \"dd/MM/yyyy\" }}</small>\n<!-- \n \"finish\": true,\n        \"sendToEcc\": false,\n        \"codeList\": [],\n        \"_id\": \"6087f17ab355d7fc07043ea3\",\n        \"equipment\": \"1000125\",\n        \"treatmentDate\": \"2021-04-27T21:00:00.000Z\",\n        \"type\": \"X1\",\n        \"__v\": 0,\n        \"begru\": \"\",\n        \"externalUser\": \"16161\",\n        \"responsible\": \"בדש רן\",\n        \"treatmentDescription\": \"טיפול פנימי - הפצה - 24 דלתות + 24 משווי גובה+ 12 לוחו\",\n        \"treatmentLongDescription\": \"\" -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tipulim/tipulim.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tipulim/tipulim.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-header></app-header>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"list-group\">\n      <a\n        class=\"list-group-item list-group-item-action flex-column align-items-start\"\n        *ngFor=\"let tipul of tipulim\"\n      >\n        <app-tipul [tipul]=\"tipul\"></app-tipul>\n      </a>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/tipulim/components/tipul/tipul.component.css":
/*!********************************************************************!*\
  !*** ./src/app/pages/tipulim/components/tipul/tipul.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RpcHVsaW0vY29tcG9uZW50cy90aXB1bC90aXB1bC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/tipulim/components/tipul/tipul.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tipulim/components/tipul/tipul.component.ts ***!
  \*******************************************************************/
/*! exports provided: TipulComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipulComponent", function() { return TipulComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_global_treatments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global/treatments.service */ "./src/app/services/global/treatments.service.ts");



let TipulComponent = class TipulComponent {
    constructor(treatmentsService) {
        this.treatmentsService = treatmentsService;
    }
    ngOnInit() { }
};
TipulComponent.ctorParameters = () => [
    { type: src_app_services_global_treatments_service__WEBPACK_IMPORTED_MODULE_2__["TreatmentsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TipulComponent.prototype, "tipul", void 0);
TipulComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-tipul",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tipul.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tipulim/components/tipul/tipul.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tipul.component.css */ "./src/app/pages/tipulim/components/tipul/tipul.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_global_treatments_service__WEBPACK_IMPORTED_MODULE_2__["TreatmentsService"]])
], TipulComponent);



/***/ }),

/***/ "./src/app/pages/tipulim/tipulim-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/tipulim/tipulim-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: TipulimPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipulimPageRoutingModule", function() { return TipulimPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tipulim_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tipulim.page */ "./src/app/pages/tipulim/tipulim.page.ts");




const routes = [
    {
        path: '',
        component: _tipulim_page__WEBPACK_IMPORTED_MODULE_3__["TipulimPage"]
    }
];
let TipulimPageRoutingModule = class TipulimPageRoutingModule {
};
TipulimPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TipulimPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tipulim/tipulim.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/tipulim/tipulim.module.ts ***!
  \*************************************************/
/*! exports provided: TipulimPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipulimPageModule", function() { return TipulimPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tipulim_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tipulim-routing.module */ "./src/app/pages/tipulim/tipulim-routing.module.ts");
/* harmony import */ var _tipulim_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tipulim.page */ "./src/app/pages/tipulim/tipulim.page.ts");
/* harmony import */ var _components_tipul_tipul_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tipul/tipul.component */ "./src/app/pages/tipulim/components/tipul/tipul.component.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");









let TipulimPageModule = class TipulimPageModule {
};
TipulimPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tipulim_routing_module__WEBPACK_IMPORTED_MODULE_5__["TipulimPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
        ],
        declarations: [_tipulim_page__WEBPACK_IMPORTED_MODULE_6__["TipulimPage"], _components_tipul_tipul_component__WEBPACK_IMPORTED_MODULE_7__["TipulComponent"]],
    })
], TipulimPageModule);



/***/ }),

/***/ "./src/app/pages/tipulim/tipulim.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/tipulim/tipulim.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RpcHVsaW0vdGlwdWxpbS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/tipulim/tipulim.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/tipulim/tipulim.page.ts ***!
  \***********************************************/
/*! exports provided: TipulimPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipulimPage", function() { return TipulimPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../home/home.service */ "./src/app/pages/home/home.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var src_app_services_equipmentApp_equipmentApp_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/equipmentApp/equipmentApp.service */ "./src/app/services/equipmentApp/equipmentApp.service.ts");





let TipulimPage = class TipulimPage {
    constructor(homeService, equiAppService, network) {
        this.homeService = homeService;
        this.equiAppService = equiAppService;
        this.network = network;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.network.type === 'none') {
                this.tipulim = yield this.equiAppService.getTasks();
            }
            else {
                this.tipulim = yield this.homeService.getTipulim();
            }
            console.log(this.tipulim);
        });
    }
};
TipulimPage.ctorParameters = () => [
    { type: _home_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"] },
    { type: src_app_services_equipmentApp_equipmentApp_service__WEBPACK_IMPORTED_MODULE_4__["EquipmentAppService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"] }
];
TipulimPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-tipulim",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tipulim.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tipulim/tipulim.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tipulim.page.scss */ "./src/app/pages/tipulim/tipulim.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_home_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"],
        src_app_services_equipmentApp_equipmentApp_service__WEBPACK_IMPORTED_MODULE_4__["EquipmentAppService"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"]])
], TipulimPage);



/***/ })

}]);
//# sourceMappingURL=pages-tipulim-tipulim-module-es2015.js.map