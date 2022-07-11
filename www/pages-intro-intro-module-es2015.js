(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-intro-intro-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"colorRgb\">\n<ion-toolbar class=\"mt-4\"  >\n  <ion-buttons slot=\"start\">\n    <ion-menu-button></ion-menu-button>\n  </ion-buttons>\n\n  <div >\n    <div class=\"headerToolbar\">\n      אחזקה   \n      <span class=\"headerName\">{{ user?.firstName }} {{ user?.lastName }}</span>\n    </div>\n  </div>\n  <ion-buttons slot=\"end\">\n    <ion-icon\n      class=\"backBtn\"\n      (click)=\"back()\"\n      name=\"chevron-forward-outline\"\n    ></ion-icon>\n  </ion-buttons>\n</ion-toolbar>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/intro/intro.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/intro/intro.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-header></app-header>\n</ion-header>\n\n<ion-content class=\"colorGrey\">\n  <!-- <div class=\"box\" [routerLink]=\"['/home', 'true', 'true']\"> -->\n  <div class=\"box\">\n    <div class=\"row\">\n      <div class=\"col-12 boxHeaderText\">\n        <ion-icon class=\"chorgimIcon\" name=\"alert-circle-outline\"> </ion-icon>\n        <span class=\"chorgimText\">חורגים</span>\n      </div>\n    </div>\n    <div class=\"row p-2 text-center\">\n      <div class=\"col-4\" (click)=\"corginPnimi()\">\n        <div class=\"corgimNumber\">{{ today_X1 }}</div>\n        <div class=\"colorPnimi\">פנימי</div>\n      </div>\n      <div class=\"col-4 border-right border-left border-info\" (click)=\"corginChitzoni()\">\n        <div class=\"corgimNumber\">{{ today_X2 }}</div>\n        <div class=\"colorChitzoni\">חיצוני</div>\n        <div></div>\n      </div>\n      <div class=\"col-4\" (click)=\"corginMeandes()\">\n        <div class=\"corgimNumber\">{{ today_X3 }}</div>\n        <div class=\"colormehandes\">מהנדס</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"box mt-2 mt-4\">\n    <div class=\"row\">\n      <div class=\"col-12 mt-2 boxHeaderText\">\n        <span>חודש קרוב</span>\n      </div>\n    </div>\n    <div class=\"row p-2 text-center\">\n      <div class=\"col-4\" (click)=\"pnimiWeek()\">\n        <div *ngIf=\"week_X1_total\">\n          <span class=\"doNumber\">{{week_X1}}</span><span class=\"todoNumber\">/{{ week_X1_total }}</span>\n        </div>\n        <div *ngIf=\"!week_X1_total\">\n          <span class=\"todoText\">לא קיימים טיפולים</span>\n        </div>\n        <div class=\"colorPnimi\">פנימי</div>\n        <div class=\"graphBorder mt-2\" *ngIf=\"week_X1_total\">\n          <div [style.width]=\"graph.g1 + '%'\" *ngIf=\"graph.g1 < 50\" class=\"graph colorRed\"></div>\n          <div [style.width]=\"graph.g1 + '%'\" *ngIf=\"graph.g1 >= 50 && graph.g1 < 90\" class=\"graph colorOrange\"></div>\n          <div [style.width]=\"graph.g1 + '%'\" *ngIf=\"graph.g1 >= 90\" class=\"graph colorGreen\"></div>\n        </div>\n      </div>\n      <div class=\"col-4 border-right border-left border-info\" (click)=\"chitzoniWeek()\">\n        <div *ngIf=\"week_X2_total\">\n          <span class=\"doNumber\">{{ week_X2 }}</span><span class=\"todoNumber\">/{{ week_X2_total }}</span>\n        </div>\n        <div *ngIf=\"!week_X2_total\">\n          <span class=\"todoText\">לא קיימים טיפולים</span>\n        </div>\n        <div class=\"colorChitzoni\">חיצוני</div>\n        <div class=\"graphBorder mt-2\" *ngIf=\"week_X2_total\">\n          <div [style.width]=\"graph.g2 + '%'\" *ngIf=\"graph.g2 < 50\" class=\"graph colorRed\"></div>\n          <div [style.width]=\"graph.g2 + '%'\" *ngIf=\"graph.g2 >= 50 && graph.g2 < 90\" class=\"graph colorOrange\"></div>\n          <div [style.width]=\"graph.g2 + '%'\" *ngIf=\"graph.g2 >= 90\" class=\"graph colorGreen\"></div>\n        </div>\n      </div>\n      <div class=\"col-4\" (click)=\"meandesWeek()\">\n        <div *ngIf=\"week_X3_total\">\n          <span class=\"doNumber\">{{ week_X3 }}</span><span class=\"todoNumber\">/{{ week_X3_total }}</span>\n        </div>\n        <div *ngIf=\"!week_X3_total\">\n          <span class=\"todoText\">לא קיימים טיפולים</span>\n        </div>\n        <div class=\"colormehandes\">מהנדס</div>\n        <div class=\"graphBorder mt-2\" *ngIf=\"week_X3_total\">\n          <div [style.width]=\"graph.g3 + '%'\" *ngIf=\"graph.g3 < 50\" class=\"graph colorRed\"></div>\n          <div [style.width]=\"graph.g3 + '%'\" *ngIf=\"graph.g3 >= 50 && graph.g3 < 90\" class=\"graph colorOrange\"></div>\n          <div [style.width]=\"graph.g3 + '%'\" *ngIf=\"graph.g3 >= 90\" class=\"graph colorGreen\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row buttens\">\n    <div class=\"col-6 p-2 text-center\" [routerLink]=\"['/home', 'false', 'false', 'search']\">\n      <div class=\"searchBtn\">\n        <ion-icon name=\"search-circle-outline\" class=\"btnIcon\"></ion-icon>\n        <span class=\"btnTxt\">חיפוש</span>\n      </div>\n    </div>\n\n    <div class=\"col-6 p-2 text-center\">\n      <div class=\"scanBtn\" (click)=\"openBarCode()\">\n        <ion-icon name=\"barcode-outline\" class=\"btnIcon\"></ion-icon>\n        <span class=\"btnTxt\">סריקה</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"line\"></div>\n  <div class=\"col-12 p-3 text-center\">\n    <div class=\"tipulim\" (click)=\"openTipulimList()\">\n      <ion-icon name=\"checkbox-outline\" class=\"btnIcon\"></ion-icon>\n      <span class=\"btnTxt\">צפייה בטיפולים שבוצעו</span>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
        providers: [],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
        entryComponents: []
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backBtn {\n  font-size: 22px;\n  margin-left: 4px;\n}\n\n.date {\n  margin-top: 3px;\n  text-align: center;\n}\n\n.time {\n  text-align: center;\n  margin-top: -5px;\n  font-size: 17px;\n}\n\n.headerToolbar {\n  text-align: right;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.headerName {\n  margin-right: 5px;\n  font-size: 16px;\n}\n\nion-toolbar {\n  --background: #1f2f98;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXHhhbXBwXFxodGRvY3NcXFNDSEFjaHpha2Evc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUVFLHFCQUFBO0VBQ0EsWUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tCdG4ge1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5kYXRlIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5oZWFkZXJUb29sYmFyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5oZWFkZXJOYW1lIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAvLyAtLWJhY2tncm91bmQ6IHJnYig2MSwgOTEsIDEyOSk7XG4gIC0tYmFja2dyb3VuZDogIzFmMmY5ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuIiwiLmJhY2tCdG4ge1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5kYXRlIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5oZWFkZXJUb29sYmFyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5oZWFkZXJOYW1lIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMxZjJmOTg7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let HeaderComponent = class HeaderComponent {
    constructor(nav, router) {
        this.nav = nav;
        this.router = router;
        // date = formatDate(new Date(), "dd.MM.yyyy", "en");
        // time = formatDate(new Date(), "HH:mm", "en");
        this.user = { firstName: "", lastName: "" };
    }
    ngOnInit() {
        if (localStorage.user)
            this.user = JSON.parse(localStorage.user);
    }
    back() {
        this.router.navigate(["/intro"]);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-header",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/pages/intro/intro-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/intro/intro-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: IntroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageRoutingModule", function() { return IntroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro.page */ "./src/app/pages/intro/intro.page.ts");




const routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_3__["IntroPage"]
    }
];
let IntroPageRoutingModule = class IntroPageRoutingModule {
};
IntroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IntroPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/intro/intro.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/intro/intro.module.ts ***!
  \*********************************************/
/*! exports provided: IntroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro-routing.module */ "./src/app/pages/intro/intro-routing.module.ts");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro.page */ "./src/app/pages/intro/intro.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let IntroPageModule = class IntroPageModule {
};
IntroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntroPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]]
    })
], IntroPageModule);



/***/ }),

/***/ "./src/app/pages/intro/intro.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/intro/intro.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box {\n  box-shadow: 3px 5px 8px -2px #878787;\n  position: relative;\n  width: 90%;\n  right: 5%;\n  margin: 10px 0px;\n  text-align: right;\n  padding: 10px;\n}\n\n.boxHeaderText {\n  font-size: 18px;\n}\n\n.chorgimText {\n  color: red;\n  position: relative;\n  top: -6px;\n  right: 5px;\n  margin-top: -10px !important;\n}\n\n.corgimNumber {\n  font-size: 30px;\n  color: red;\n}\n\n.chorgimIcon {\n  margin-top: 10px;\n  font-size: 22px;\n  color: red;\n}\n\n.doNumber {\n  color: green;\n  font-size: 27px;\n}\n\n.todoNumber {\n  font-size: 22px;\n  color: gray;\n}\n\n.todoText {\n  font-size: 15px;\n}\n\n.graphBorder {\n  position: relative;\n  width: 100%;\n  height: 5px;\n  background: #dadada;\n  /* border: 1px solid rgb(97, 97, 97); */\n  border-radius: 20px;\n  margin-top: -10px;\n}\n\n.graph {\n  background: #dadada;\n  position: absolute;\n  right: 0px;\n  max-width: 100%;\n  height: 5px;\n  border-radius: 20px;\n}\n\n.colorRed {\n  background-color: #f44336;\n}\n\n.colorOrange {\n  background-color: #ff9800;\n}\n\n.colorGreen {\n  background-color: #4caf50;\n}\n\n.searchBtn {\n  color: white;\n  background-color: #787ff6;\n  padding: 10px 15px 5px 15px;\n  border-radius: 10px;\n}\n\n.scanBtn {\n  color: white;\n  background-color: #7bd5f5;\n  padding: 10px 15px 5px 15px;\n  border-radius: 10px;\n}\n\n.tipulim {\n  color: white;\n  background-color: #43a02e;\n  padding: 10px 15px 5px 15px;\n  border-radius: 10px;\n}\n\n.buttens {\n  padding: 7px 22px;\n}\n\n.btnIcon {\n  font-size: 35px;\n  margin-left: 3px;\n}\n\n.line {\n  width: 100%;\n  height: 1px;\n  background-color: rgba(78, 78, 78, 0.973);\n  margin: 3px 0px;\n}\n\n.btnTxt {\n  position: relative;\n  top: -12px;\n}\n\n.colorPnimi {\n  background-color: #1f2f98;\n  color: white;\n  border-radius: 7px;\n}\n\n.colorChitzoni {\n  background-color: #1ca7ec;\n  color: white;\n  border-radius: 7px;\n}\n\n.colormehandes {\n  background-color: #2c9797;\n  color: white;\n  border-radius: 7px;\n}\n\n.colorGrey {\n  background-color: #dadada;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW50cm8vQzpcXHhhbXBwXFxodGRvY3NcXFNDSEFjaHpha2Evc3JjXFxhcHBcXHBhZ2VzXFxpbnRyb1xcaW50cm8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9pbnRyby9pbnRyby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFFQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtBQ0FGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNFRjs7QURDQTtFQUNFLFlBQUE7RUFFQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNFRjs7QURDQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNFRjs7QURDQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNFRjs7QURDQTtFQUNFLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNHRjs7QURBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0lGOztBREZBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNLRjs7QURGQTtFQUNFLHlCQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnRyby9pbnRyby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94IHtcbiAgYm94LXNoYWRvdzogM3B4IDVweCA4cHggLTJweCByZ2JhKDEzNSwgMTM1LCAxMzUsIDEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA5MCU7XG4gIHJpZ2h0OiA1JTtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzEsIDIzMCwgMjMwLCAwLjgpO1xuICBtYXJnaW46IDEwcHggMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmJveEhlYWRlclRleHQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jaG9yZ2ltVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNnB4O1xuICByaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiAtMTBweCAhaW1wb3J0YW50O1xufVxuLmNvcmdpbU51bWJlciB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHJlZDtcbn1cbi5jaG9yZ2ltSWNvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmRvTnVtYmVyIHtcbiAgY29sb3I6IGdyZWVuO1xuXG4gIGZvbnQtc2l6ZTogMjdweDtcbn1cblxuLnRvZG9OdW1iZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4udG9kb1RleHQge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5ncmFwaEJvcmRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZGFkYWRhO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTcsIDk3LCA5Nyk7ICovXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuLmdyYXBoIHtcbiAgYmFja2dyb3VuZDogI2RhZGFkYTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uY29sb3JSZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4uY29sb3JPcmFuZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ODAwO1xufVxuXG4uY29sb3JHcmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG59XG5cbi5zZWFyY2hCdG4ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODdmZjY7XG4gIHBhZGRpbmc6IDEwcHggMTVweCA1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnNjYW5CdG4ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YmQ1ZjU7XG4gIHBhZGRpbmc6IDEwcHggMTVweCA1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnRpcHVsaW0ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0M2EwMmU7XG4gIHBhZGRpbmc6IDEwcHggMTVweCA1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmJ1dHRlbnMge1xuICBwYWRkaW5nOiA3cHggMjJweDtcbn1cblxuLmJ0bkljb24ge1xuICBmb250LXNpemU6IDM1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG4ubGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3OCwgNzgsIDc4LCAwLjk3Myk7XG4gIG1hcmdpbjogM3B4IDBweDtcbn1cblxuLmJ0blR4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTJweDtcbn1cblxuLmNvbG9yUG5pbWkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyZjk4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cbi5jb2xvckNoaXR6b25pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjYTdlYztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG4uY29sb3JtZWhhbmRlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzk3OTc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4uY29sb3JHcmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcbn1cbiIsIi5ib3gge1xuICBib3gtc2hhZG93OiAzcHggNXB4IDhweCAtMnB4ICM4Nzg3ODc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDkwJTtcbiAgcmlnaHQ6IDUlO1xuICBtYXJnaW46IDEwcHggMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmJveEhlYWRlclRleHQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jaG9yZ2ltVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNnB4O1xuICByaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiAtMTBweCAhaW1wb3J0YW50O1xufVxuXG4uY29yZ2ltTnVtYmVyIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogcmVkO1xufVxuXG4uY2hvcmdpbUljb24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5kb051bWJlciB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC1zaXplOiAyN3B4O1xufVxuXG4udG9kb051bWJlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi50b2RvVGV4dCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmdyYXBoQm9yZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6ICNkYWRhZGE7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5NywgOTcsIDk3KTsgKi9cbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi5ncmFwaCB7XG4gIGJhY2tncm91bmQ6ICNkYWRhZGE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmNvbG9yUmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cblxuLmNvbG9yT3JhbmdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTgwMDtcbn1cblxuLmNvbG9yR3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xufVxuXG4uc2VhcmNoQnRuIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg3ZmY2O1xuICBwYWRkaW5nOiAxMHB4IDE1cHggNXB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5zY2FuQnRuIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2JkNWY1O1xuICBwYWRkaW5nOiAxMHB4IDE1cHggNXB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi50aXB1bGltIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDNhMDJlO1xuICBwYWRkaW5nOiAxMHB4IDE1cHggNXB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5idXR0ZW5zIHtcbiAgcGFkZGluZzogN3B4IDIycHg7XG59XG5cbi5idG5JY29uIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4ubGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3OCwgNzgsIDc4LCAwLjk3Myk7XG4gIG1hcmdpbjogM3B4IDBweDtcbn1cblxuLmJ0blR4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTJweDtcbn1cblxuLmNvbG9yUG5pbWkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyZjk4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmNvbG9yQ2hpdHpvbmkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWNhN2VjO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmNvbG9ybWVoYW5kZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM5Nzk3O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmNvbG9yR3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/intro/intro.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/intro/intro.page.ts ***!
  \*******************************************/
/*! exports provided: IntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPage", function() { return IntroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_global_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global/login.service */ "./src/app/services/global/login.service.ts");
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/home.service */ "./src/app/pages/home/home.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_services_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/equipment/equipment.service */ "./src/app/services/equipment/equipment.service.ts");
/* harmony import */ var src_app_services_equipmentX2_equipmentX2_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/equipmentX2/equipmentX2.service */ "./src/app/services/equipmentX2/equipmentX2.service.ts");
/* harmony import */ var src_app_services_equipmentX3_equipmentX3_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/equipmentX3/equipmentX3.service */ "./src/app/services/equipmentX3/equipmentX3.service.ts");










let IntroPage = class IntroPage {
    constructor(loginService, platform, homeService, equiService, equiX2Service, equiX3Service, router) {
        this.loginService = loginService;
        this.platform = platform;
        this.homeService = homeService;
        this.equiService = equiService;
        this.equiX2Service = equiX2Service;
        this.equiX3Service = equiX3Service;
        this.router = router;
        this.graph = { g1: 0, g2: 0, g3: 0 };
        this.equiId = 1000059;
        this.getEquiDetails = (equiId) => {
            localStorage.barcode = equiId;
            this.router.navigate(["/home/true/true/barcode"]);
        };
        let dateFrom = "2000-01-01";
        let dateTo = moment__WEBPACK_IMPORTED_MODULE_6__().add(30, "d").format("YYYY-MM-DD");
        ;
        this.homeService.getTasks(dateFrom, dateTo, 'search');
        this.homeService.getTipulim();
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.today_X1 = yield this.equiService.getTaskX1Count();
            this.today_X2 = yield this.equiX2Service.getTaskX2Count();
            this.today_X3 = yield this.equiX3Service.getTaskX3Count();
            //this.getLandingPage(localStorage.empNum);
        });
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.getLandingPage(localStorage.empNum);
            this.today_X1 = yield this.equiService.getTaskX1Count();
            this.today_X2 = yield this.equiX2Service.getTaskX2Count();
            this.today_X3 = yield this.equiX3Service.getTaskX3Count();
            //this.getLandingPage(localStorage.empNum);
        });
    }
    getLandingPage(employy) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.dataLandingPage = yield this.loginService.getLandingPage(employy);
            console.log("L  : ", this.dataLandingPage);
            this.today = Object.assign({}, this.dataLandingPage.today);
            this.today_X3 = this.today["X3"];
            this.today_X2 = this.today["X2"];
            this.today_X1 = this.today["X1"];
            this.week = this.dataLandingPage.week;
            this.week_X1 = this.week["X1"];
            this.week_X2 = this.week["X2"];
            this.week_X3 = this.week["X3"];
            this.week_X1_total = this.week["Total"]["X1"];
            this.week_X2_total = this.week["Total"]["X2"];
            this.week_X3_total = this.week["Total"]["X3"];
            this.graph = {
                g1: (this.week_X1 * 100) / this.week_X1_total,
                g2: (this.week_X2 * 100) / this.week_X2_total,
                g3: (this.week_X3 * 100) / this.week_X3_total,
            };
            console.log(this.graph);
        });
    }
    openBarCode() {
        if (!this.platform.is("cordova")) {
            this.getEquiDetails(this.equiId);
        }
        else {
            this.homeService.scanBarcode(this.getEquiDetails);
        }
    }
    corginPnimi() {
        localStorage.type = "X1";
        this.router.navigate(["/home/true/true/X1"]);
    }
    corginChitzoni() {
        localStorage.type = "X2";
        this.router.navigate(["/home/true/true/X2"]);
    }
    corginMeandes() {
        localStorage.type = "X3";
        this.router.navigate(["/home/true/true/X3"]);
    }
    pnimiWeek() {
        localStorage.type = "X1";
        this.router.navigate(["/home/true/false/X1"]);
    }
    chitzoniWeek() {
        localStorage.type = "X2";
        this.router.navigate(["/home/true/false/X2"]);
    }
    meandesWeek() {
        localStorage.type = "X3";
        this.router.navigate(["/home/true/false/X3"]);
    }
    openTipulimList() {
        this.router.navigate(["/tipulim"]);
    }
};
IntroPage.ctorParameters = () => [
    { type: src_app_services_global_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _home_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"] },
    { type: src_app_services_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_7__["EquipmentService"] },
    { type: src_app_services_equipmentX2_equipmentX2_service__WEBPACK_IMPORTED_MODULE_8__["EquipmentX2Service"] },
    { type: src_app_services_equipmentX3_equipmentX3_service__WEBPACK_IMPORTED_MODULE_9__["EquipmentX3Service"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
IntroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-intro",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./intro.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/intro/intro.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./intro.page.scss */ "./src/app/pages/intro/intro.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_global_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _home_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"],
        src_app_services_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_7__["EquipmentService"],
        src_app_services_equipmentX2_equipmentX2_service__WEBPACK_IMPORTED_MODULE_8__["EquipmentX2Service"],
        src_app_services_equipmentX3_equipmentX3_service__WEBPACK_IMPORTED_MODULE_9__["EquipmentX3Service"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], IntroPage);



/***/ })

}]);
//# sourceMappingURL=pages-intro-intro-module-es2015.js.map