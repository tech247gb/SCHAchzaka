(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/task-row/task-row.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/task-row/task-row.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div>\n  <div\n    class=\"taskBox row p-3\"\n    (click)=\"taskInfo(task.equipment, task.treatmentType)\"\n  >\n    <div class=\"txt1 col-12 pr-3\">\n      {{ task.equipment }} |\n      <span class=\"txt\">{{ task.equipmentDescription }}</span>\n    </div>\n\n    <div class=\"headerNum col-8 pr-3\">\n      {{ task.location }}\n    </div>\n    <div>\n      <span class=\"col-2 atWork\" *ngIf=\"task.atWork\">בטיפול</span>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"datesInfo\">\n        <div [ngClass]=\"task.nextTreatment < today ? 'colorRed' : ' '\">\n          {{ task.nextTreatment | date: \"dd/MM/yyyy\" }}\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n<div\n  class=\"d-flex w-100 justify-content-between\"\n  (click)=\"taskInfo(task.equipment, task.treatmentType)\"\n>\n  <div style=\"width: 100%\">\n    <h4 class=\"mb-1 text-right\">\n      {{ task.equipment }}\n      <span\n        style=\"color: red; font-weight: bold; float: left\"\n        class=\"fontSize20 text-left\"\n        *ngIf=\"task.atWork && task.atWork!='false'\"\n        >בטיפול\n      </span>\n    </h4>\n\n    <div class=\"fontSize17 text-right\">\n      <ion-icon name=\"build-outline\"></ion-icon> {{ task.equipmentDescription }}\n    </div>\n  </div>\n</div>\n<p class=\"mb-1 text-right fontSize17\">\n  <ion-icon name=\"location-outline\"></ion-icon> {{ task.location }}\n</p>\n<div>\n  <ion-icon\n    *ngIf=\"task.imageExists\"\n    class=\"text-right fontSize20 padTop\"\n    name=\"camera-outline\"\n  ></ion-icon>\n</div>\n\n<small\n  class=\"fontSize14\"\n  [ngClass]=\"task.nextTreatment < today ? 'colorRed' : ' '\"\n>\n  {{ task.nextTreatment | date: \"dd/MM/yyyy\" }}</small\n>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-header></app-header>\n\n  <div class=\"box\">\n    <div>\n      <div class=\"colorPnimi headerTXT\" *ngIf=\"type == 'X1'\">\n        <!-- <ion-icon name=\"build-outline\"></ion-icon> -->\n        <span class=\"listNum\"> {{ tasksLength }} </span>\n        <span class=\"TXT\" *ngIf=\"chorgim == 'true'\">חורגים - </span>\n        {{ treatmentsService.getNameTreatments(type) }}\n      </div>\n      <div class=\"colorChitzoni headerTXT\" *ngIf=\"type == 'X2'\">\n        <!-- <ion-icon name=\"construct-outline\"></ion-icon> -->\n        <span class=\"listNum\"> {{ tasksLength }} </span>\n        <span class=\"TXT\" *ngIf=\"chorgim == 'true'\"> חורגים - </span>\n        {{ treatmentsService.getNameTreatments(type) }}\n      </div>\n      <div class=\"colorMehandes headerTXT\" *ngIf=\"type == 'X3'\">\n        <!-- <ion-icon name=\"alert-outline\"></ion-icon> -->\n        <span class=\"listNum\"> {{ tasksLength }} </span>\n        <span class=\"TXT\" *ngIf=\"chorgim == 'true'\"> חורגים - </span>\n        {{ treatmentsService.getNameTreatments(type) }}\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"noType\">\n      <div class=\"col-5 form-check form-check-inline\">\n        <input\n          class=\"form-check-input\"\n          type=\"radio\"\n          name=\"inlineRadioOptions\"\n          id=\"1\"\n          value=\"1\"\n          [(ngModel)]=\"rbTime\"\n        />\n        <label class=\"form-check-label pr-2\" for=\"1\">זמן</label>\n      </div>\n      <div class=\"col-5 form-check form-check-inline\">\n        <input\n          class=\"form-check-input\"\n          type=\"radio\"\n          name=\"inlineRadioOptions\"\n          id=\"2\"\n          value=\"2\"\n          [(ngModel)]=\"rbTime\"\n        />\n        <label class=\"form-check-label pr-2\" for=\"2\">מיקום/קטגוריה</label>\n      </div>\n    </div>\n    <div class=\"row no-gutters text-center mt-2\" *ngIf=\"rbTime == '1'\">\n      <div class=\"col-3 p-1\">\n        <button\n          [ngClass]=\"btnSelected == 1 ? 'btn btn-danger btnTime' : 'btn btn-outline-success btnTime'\"\n          type=\"button\"\n          (click)=\"btnSelect(1)\"\n        >\n          <span>חורגים</span>\n        </button>\n      </div>\n      <div class=\"col-3 p-1\">\n        <button\n          [ngClass]=\"btnSelected == 2 ? 'btn btn-success btnTime' : 'btn btn-outline-success btnTime'\"\n          type=\"button\"\n          (click)=\"btnSelect(2)\"\n        >\n          <span>שבוע</span>\n        </button>\n      </div>\n      <div class=\"col-3 p-1\">\n        <button\n          [ngClass]=\"btnSelected == 3 ? 'btn btn-success btnTime' : 'btn btn-outline-success btnTime'\"\n          type=\"button\"\n          (click)=\"btnSelect(3)\"\n        >\n          <span> חודש</span>\n        </button>\n      </div>\n      <div class=\"col-3 p-1\">\n        <button\n          [ngClass]=\"btnSelected == 4 ? 'btn btn-success btnTime' : 'btn btn-outline-success btnTime'\"\n          type=\"button\"\n          (click)=\"btnSelect(4)\"\n        >\n          <span>בחירה</span>\n        </button>\n      </div>\n    </div>\n\n    <div class=\"row no-gutters text-center mt-2\" *ngIf=\"rbTime == '2'\">\n      <div class=\"col-6 pr-1 pl-1 inputs\">\n        <div class=\"form-group\">\n          <input\n            type=\"text\"\n            class=\"form-control dates\"\n            [(ngModel)]=\"location\"\n            (input)=\"getLocationChange($event)\"\n            placeholder=\"מיקום\"\n          />\n        </div>\n        <div class=\"namesTabel\" *ngIf=\"location != '' && showListLocation\">\n          <div\n            *ngFor=\"let location of locations\"\n            class=\"mainContiner\"\n            (click)=\"setLocation(location)\"\n          >\n            <div class=\"autoName\">{{ location.ktext }}</div>\n\n            <div class=\"line\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-6 pr-1 pl-1 inputs\">\n        <div class=\"form-group\">\n          <input\n            type=\"text\"\n            class=\"form-control dates\"\n            id=\"Categorie\"\n            [(ngModel)]=\"Categorie\"\n            (input)=\"getCategorieChange($event)\"\n            placeholder=\"קטגוריה\"\n          />\n        </div>\n\n        <div class=\"namesTabel\" *ngIf=\"Categorie != '' && showListCategorie\">\n          <div\n            *ngFor=\"let Categorie of Categories\"\n            class=\"mainContiner\"\n            (click)=\"setCategorie(Categorie)\"\n          >\n            <div class=\"autoName\">{{ Categorie.eartx }}</div>\n\n            <div class=\"line\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"btnSelected == 4 && rbTime == '1'\">\n      <div class=\"col-6\">\n        <div class=\"form-group searchInput\">\n          <label class=\"dates\" for=\"exampleInputEmail1\">מתאריך</label>\n          <input\n            id=\"search\"\n            placeholder=\"תאריך התחלה\"\n            (input)=\"btnSelect(4)\"\n            class=\"form-control form-control-rounded dates\"\n            [(ngModel)]=\"info.startDay\"\n            type=\"date\"\n          />\n        </div>\n      </div>\n      <div class=\"col-6\">\n        <div class=\"form-group searchInput\">\n          <label class=\"dates\" for=\"exampleInputEmail1\">עד תאריך</label>\n          <input\n            id=\"search\"\n            placeholder=\"תאריך סיום\"\n            (input)=\"btnSelect(4)\"\n            class=\"form-control form-control-rounded dates\"\n            [(ngModel)]=\"info.endDay\"\n            type=\"date\"\n          />\n        </div>\n      </div>\n    </div>\n    <div class=\"row no-gutters text-center mt-2\" *ngIf=\"noType\">\n      <div class=\"col-4 p-1\">\n        <button\n          [ngClass]=\"btnTypeSelected == 1 ? 'btn colorPnimi btnTime' : 'btn colorPnimiSelect btnTime'\"\n          type=\"button\"\n          (click)=\"btnTypeSelect(1)\"\n        >\n          <span>פנימי</span>\n        </button>\n      </div>\n      <div class=\"col-4 p-1\">\n        <button\n          [ngClass]=\"btnTypeSelected == 2 ? 'btn colorChitzoni btnTime' : 'btn colorChitzoniSelect btnTime'\"\n          type=\"button\"\n          (click)=\"btnTypeSelect(2)\"\n        >\n          <span>חיצוני </span>\n        </button>\n      </div>\n      <div class=\"col-4 p-1\">\n        <button\n          [ngClass]=\"btnTypeSelected == 3 ? 'btn colorMehandes btnTime' : 'btn colorMehandesSelect btnTime'\"\n          type=\"button\"\n          (click)=\"btnTypeSelect(3)\"\n        >\n          <span>מהנדס</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"row no-gutters\">\n      <div class=\"form-group searchInput col-8 mt-2 p-1\">\n        <!-- <label for=\"exampleInputEmail1\">תאריך התחלה</label> -->\n        <input\n          id=\"search\"\n          placeholder=\"חפש\"\n          [(ngModel)]=\"barcode\"\n          (input)=\"getBarcodeChange($event)\"\n          class=\"form-control form-control-rounded dates\"\n          type=\"text\"\n        />\n        <div class=\"namesTabel\" *ngIf=\"barcode != '' && showListBarcode\">\n          <div\n            *ngFor=\"let barcode of barcodes\"\n            class=\"mainContiner\"\n            (click)=\"setBarcode(barcode)\"\n          >\n            <div class=\"autoName\">{{ barcode[\"equipment\"] }}</div>\n\n            <div class=\"line\"></div>\n          </div>\n        </div>\n      </div>\n\n      <!-- <div class=\"row paddingRow\"> -->\n      <div class=\"form-group col-4 mt-2 p-1 colorBTN\">\n        <button\n          class=\"btn btn-secondary w-100 barcodeBtn\"\n          (click)=\"openBarCode()\"\n        >\n          <ion-icon name=\"barcode-outline\" class=\"btnIcon\"></ion-icon>\n          <span> ברקוד</span>\n        </button>\n      </div>\n    </div>\n    <!-- <div>\n      <div class=\"X1 headerTXT\" *ngIf=\"type == 'X1'\">\n        <ion-icon name=\"build-outline\"></ion-icon>\n        {{ treatmentsService.getNameTreatments(type) }}\n        <span class=\"TXT\" *ngIf=\"chorgim == 'true'\"> -חורגים </span>\n        <span class=\"listNum\"> {{ tasksLength }} </span>\n      </div>\n      <div class=\"X2 headerTXT\" *ngIf=\"type == 'X2'\">\n        <ion-icon name=\"construct-outline\"></ion-icon>\n        {{ treatmentsService.getNameTreatments(type) }}\n        <span class=\"TXT\" *ngIf=\"chorgim == 'true'\"> -חורגים </span>\n        <span class=\"listNum\"> {{ tasksLength }} </span>\n      </div>\n      <div class=\"X3 headerTXT\" *ngIf=\"type == 'X3'\">\n        <ion-icon name=\"alert-outline\"></ion-icon>\n        {{ treatmentsService.getNameTreatments(type) }}\n        <span class=\"TXT\" *ngIf=\"chorgim == 'true'\"> -חורגים </span>\n        <span class=\"listNum\"> {{ tasksLength }} </span>\n      </div>\n    </div> -->\n  </div>\n\n  <hr style=\"margin-top: -20px\" />\n</ion-header>\n<!-- <div class=\"headerTxt\">תוכנית טיפולים</div> -->\n<ion-content>\n  <div class=\"container\">\n    <div class=\"list-group\">\n      <a\n        class=\"list-group-item list-group-item-action flex-column align-items-start\"\n        *ngFor=\"let task of tasks\"\n        (click)=\"taskInfo(task, task.equipment, task.treatmentType)\"\n      >\n        <app-task-row [task]=\"task\"></app-task-row>\n      </a>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/home/components/task-row/task-row.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/home/components/task-row/task-row.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerNum {\n  font-size: 16px;\n  text-align: right;\n}\n\n.txt1 {\n  font-size: 18px !important;\n  text-align: right;\n}\n\n.txt {\n  font-weight: bold;\n  font-size: 16px !important;\n  text-align: right;\n}\n\n.taskBox {\n  padding: 3px !important;\n  width: 100%;\n  margin: 0px 0px 5px 0px;\n  padding-left: 3px;\n  top: 220px;\n  border-bottom: solid 0.5px #c0bfbf;\n  border-top: solid 0.5px #c0bfbf;\n  text-align: right !important;\n}\n\n.datesInfo {\n  text-align: right;\n  font-size: 16px;\n}\n\n.colorRed {\n  color: red;\n  font-weight: bold;\n}\n\n.atWork {\n  color: white;\n  background-color: crimson;\n}\n\n.X1 {\n  color: chocolate !important;\n}\n\n.X2 {\n  color: deeppink !important;\n}\n\n.X3 {\n  color: mediumpurple !important;\n}\n\n.fontSize17 {\n  font-size: 17px !important;\n}\n\n.fontSize20 {\n  font-size: 20px;\n}\n\n.fontSize14 {\n  font-size: 14px !important;\n}\n\n.padTop {\n  padding-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL3Rhc2stcm93L0M6XFx4YW1wcFxcaHRkb2NzXFxTQ0hBY2h6YWthL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcY29tcG9uZW50c1xcdGFzay1yb3dcXHRhc2stcm93LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2NvbXBvbmVudHMvdGFzay1yb3cvdGFzay1yb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURHQTtFQUVFLDBCQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQ0RGOztBREtBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBRUEsNEJBQUE7QUNIRjs7QURNQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0hGOztBRE1BO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNIRjs7QURPQTtFQUNFLDJCQUFBO0FDSkY7O0FET0E7RUFDRSwwQkFBQTtBQ0pGOztBRE9BO0VBQ0UsOEJBQUE7QUNKRjs7QURPQTtFQUNFLDBCQUFBO0FDSkY7O0FETUE7RUFDRSxlQUFBO0FDSEY7O0FES0E7RUFDRSwwQkFBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvY29tcG9uZW50cy90YXNrLXJvdy90YXNrLXJvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJOdW0ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICAvLyBjb2xvcjogcmdiYSgxMDIsIDEwMiwgMTAyLCAwLjc5NSk7XG59XG5cbi50eHQxIHtcbiAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnR4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIC8vIGNvbG9yOiByZ2JhKDUxLCA1MSwgNTEsIDAuNCk7XG59XG5cbi50YXNrQm94IHtcbiAgcGFkZGluZzogM3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweCAwcHggNXB4IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHRvcDogMjIwcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4IHJnYigxOTIsIDE5MSwgMTkxKTtcbiAgYm9yZGVyLXRvcDogc29saWQgMC41cHggcmdiKDE5MiwgMTkxLCAxOTEpO1xuICAvLyBib3gtc2hhZG93OiAzcHggNXB4IDhweCAtMnB4IHJnYmEoMTM1LCAxMzUsIDEzNSwgMSk7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRlc0luZm8ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY29sb3JSZWQge1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmF0V29yayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcbiAgLy8gcGFkZGluZy1yaWdodDogMTgwcHg7XG59XG5cbi5YMSB7XG4gIGNvbG9yOiBjaG9jb2xhdGUgIWltcG9ydGFudDtcbn1cblxuLlgyIHtcbiAgY29sb3I6IGRlZXBwaW5rICFpbXBvcnRhbnQ7XG59XG5cbi5YMyB7XG4gIGNvbG9yOiBtZWRpdW1wdXJwbGUgIWltcG9ydGFudDtcbn1cblxuLmZvbnRTaXplMTcge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn1cbi5mb250U2l6ZTIwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmZvbnRTaXplMTQge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLnBhZFRvcCB7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG4iLCIuaGVhZGVyTnVtIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnR4dDEge1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50eHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGFza0JveCB7XG4gIHBhZGRpbmc6IDNweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHggMHB4IDVweCAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICB0b3A6IDIyMHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCAjYzBiZmJmO1xuICBib3JkZXItdG9wOiBzb2xpZCAwLjVweCAjYzBiZmJmO1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uZGF0ZXNJbmZvIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNvbG9yUmVkIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hdFdvcmsge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XG59XG5cbi5YMSB7XG4gIGNvbG9yOiBjaG9jb2xhdGUgIWltcG9ydGFudDtcbn1cblxuLlgyIHtcbiAgY29sb3I6IGRlZXBwaW5rICFpbXBvcnRhbnQ7XG59XG5cbi5YMyB7XG4gIGNvbG9yOiBtZWRpdW1wdXJwbGUgIWltcG9ydGFudDtcbn1cblxuLmZvbnRTaXplMTcge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn1cblxuLmZvbnRTaXplMjAge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5mb250U2l6ZTE0IHtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wYWRUb3Age1xuICBwYWRkaW5nLXRvcDogM3B4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/components/task-row/task-row.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/home/components/task-row/task-row.component.ts ***!
  \**********************************************************************/
/*! exports provided: TaskRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskRowComponent", function() { return TaskRowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_global_treatments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global/treatments.service */ "./src/app/services/global/treatments.service.ts");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../home.service */ "./src/app/pages/home/home.service.ts");






let TaskRowComponent = class TaskRowComponent {
    constructor(treatmentsService, homeService, router) {
        this.treatmentsService = treatmentsService;
        this.homeService = homeService;
        this.router = router;
        this.today = moment__WEBPACK_IMPORTED_MODULE_3__().format("YYYY-MM-DD");
    }
    ngOnInit() { }
    taskInfo(equipment, treatmentType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // let treatments = await this.homeService.getTreatment(
            //   equipment,
            //   treatmentType
            // );
            // localStorage.task = JSON.stringify(this.task);
            // localStorage.treatmentType = JSON.stringify(treatmentType);
            // this.router.navigate(["/task-page"]);
        });
    }
};
TaskRowComponent.ctorParameters = () => [
    { type: src_app_services_global_treatments_service__WEBPACK_IMPORTED_MODULE_4__["TreatmentsService"] },
    { type: _home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TaskRowComponent.prototype, "task", void 0);
TaskRowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-task-row",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-row.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/task-row/task-row.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-row.component.scss */ "./src/app/pages/home/components/task-row/task-row.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_global_treatments_service__WEBPACK_IMPORTED_MODULE_4__["TreatmentsService"],
        _home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], TaskRowComponent);



/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _components_task_row_task_row_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/task-row/task-row.component */ "./src/app/pages/home/components/task-row/task-row.component.ts");









let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _components_task_row_task_row_component__WEBPACK_IMPORTED_MODULE_8__["TaskRowComponent"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerTxt {\n  font-size: 20px;\n  font-weight: bold;\n  color: #43a02e;\n  text-align: center;\n  margin: 10px;\n}\n\n.TXT {\n  color: red;\n  margin-right: 2px;\n}\n\n.box {\n  position: relative;\n  width: 100%;\n  background-color: #f7f7f7;\n  text-align: right;\n  padding: 10px;\n}\n\n.inputs {\n  height: 34px !important;\n}\n\n.cbLabel {\n  margin-right: 20px;\n  position: relative;\n  top: -2px;\n}\n\n.listNum {\n  color: red;\n  font-size: 22px;\n  text-align: left;\n  margin-right: 10px;\n}\n\n.headerTXT {\n  margin-top: 10px;\n  margin-bottom: 5px;\n  text-align: right;\n  font-size: 25px;\n  font-weight: bold;\n}\n\n.X1 {\n  background-color: #1f2f98;\n  opacity: 0.2;\n}\n\n.X2 {\n  background-color: #1ca7ec;\n  opacity: 0.2;\n}\n\n.X3 {\n  background-color: #2c9797;\n  opacity: 0.2;\n}\n\n.btnTime {\n  font-size: 14px !important;\n  height: 26px;\n  width: 100%;\n  font-weight: lighter !important;\n}\n\n.btnNotSelect {\n  font-size: 14px;\n  height: 50px;\n  width: 100%;\n  background-color: antiquewhite;\n}\n\n.form-group {\n  margin-bottom: 0rem;\n}\n\n.btnTime span {\n  position: relative;\n  top: -5px !important;\n}\n\ninput.ion-autocomplete[readonly] {\n  background-color: transparent;\n  cursor: text;\n}\n\n.namesTabel {\n  position: absolute;\n  background-color: #ffffff;\n  width: 100%;\n  z-index: 100;\n}\n\nion-auto-complete {\n  width: 50vw;\n  margin-top: -150px;\n}\n\n.ion-autocomplete-container {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 20;\n  display: none;\n  margin: auto;\n}\n\n.line {\n  width: 100%;\n  height: 1px;\n  background-color: #f5f5f5;\n  margin: 3px 0px;\n}\n\n.mainContiner {\n  padding: 0px 15px;\n}\n\n.autoName {\n  font-size: 14px;\n}\n\n.dates {\n  font-size: 12px !important;\n}\n\n.barcodeBtn {\n  height: 31px !important;\n  background-color: #7bd5f5;\n}\n\n.barcodeBtn span {\n  position: relative;\n  top: -5px;\n  background-color: #7bd5f5;\n}\n\n.colorPnimi {\n  background-color: #1f2f98;\n  color: white !important;\n  border-radius: 7px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.colorPnimiSelect {\n  background-color: white;\n  color: #1f2f98;\n  border-radius: 7px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.colorChitzoni {\n  background-color: #1ca7ec;\n  color: white;\n  border-radius: 7px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.colorChitzoniSelect {\n  background-color: white;\n  color: #1ca7ec;\n  border-radius: 7px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.colorMehandes {\n  background-color: #2c9797;\n  color: white;\n  border-radius: 7px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.colorMehandesSelect {\n  background-color: white;\n  color: #2c9797;\n  border: #2c9797 solid 0.5;\n  border-radius: 7px;\n  font-size: 18px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxceGFtcHBcXGh0ZG9jc1xcU0NIQWNoemFrYS9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBRUUsVUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFHRSxrQkFBQTtFQUNBLFdBQUE7RUFFQSx5QkFBQTtFQUVBLGlCQUFBO0VBQ0EsYUFBQTtBQ0hGOztBREtBO0VBQ0UsdUJBQUE7QUNGRjs7QURJQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURJQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0RGOztBREdBO0VBQ0UsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0FDQUY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQ0ZGOztBRE9BO0VBQ0UsbUJBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUNKRjs7QURNQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSEY7O0FETUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURLQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDRkY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0RGOztBRElBO0VBQ0UsaUJBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURLQTtFQUNFLDBCQUFBO0FDRkY7O0FES0E7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQ0ZGOztBRFVBO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDUEY7O0FEVUE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1BGOztBRFNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNORjs7QURTQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTkY7O0FEUUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ05GOztBRFNBO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ05GIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJUeHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogcmdiKDY3LCAxNjAsIDQ2KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHg7XG59XG4uVFhUIHtcbiAgLy8gZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cblxuLmJveCB7XG4gIC8vIGJveC1zaGFkb3c6IDNweCA1cHggOHB4IC0ycHggcmdiYSgxMzUsIDEzNSwgMTM1LCAxKTtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgLy8gcmlnaHQ6IDIlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICAvLyBtYXJnaW46IDEwcHggMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5pbnB1dHMge1xuICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcbn1cbi5jYkxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTJweDtcbn1cblxuLmxpc3ROdW0ge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDIycHg7XG4gIC8vIG1hcmdpbi1yaWdodDogNDVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmhlYWRlclRYVCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5YMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjJmOTg7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuLlgyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjYTdlYztcbiAgb3BhY2l0eTogMC4yO1xufVxuXG4uWDMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM5Nzk3O1xuICBvcGFjaXR5OiAwLjI7XG59XG4uYnRuVGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDI2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogbGlnaHRlciAhaW1wb3J0YW50O1xuICAvLyBjb2xvcjogcmdiKDY3LCAxNjAsIDQ2KTtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDY3LCAxNjAsIDQ2KTtcbn1cblxuLmJ0bk5vdFNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xuICAvLyBjb2xvcjogcmdiKDY3LCAxNjAsIDQ2KTtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDY3LCAxNjAsIDQ2KTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xufVxuXG4uYnRuVGltZSBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01cHggIWltcG9ydGFudDtcbn1cbmlucHV0Lmlvbi1hdXRvY29tcGxldGVbcmVhZG9ubHldIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuLm5hbWVzVGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbmlvbi1hdXRvLWNvbXBsZXRlIHtcbiAgd2lkdGg6IDUwdnc7XG4gIG1hcmdpbi10b3A6IC0xNTBweDtcbn1cbi5pb24tYXV0b2NvbXBsZXRlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAyMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIG1hcmdpbjogM3B4IDBweDtcbn1cblxuLm1haW5Db250aW5lciB7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG4uYXV0b05hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGF0ZXMge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cblxuLmJhcmNvZGVCdG4ge1xuICBoZWlnaHQ6IDMxcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdiZDVmNTtcbn1cblxuLmJhcmNvZGVCdG4gc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2JkNWY1O1xufVxuLmNvbG9yQlROIHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzdiZDVmNTtcbn1cbi5idG5UeXBlU2VsZWN0IHtcbn1cblxuLmNvbG9yUG5pbWkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyZjk4O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29sb3JQbmltaVNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzFmMmY5ODtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbG9yQ2hpdHpvbmkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWNhN2VjO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbG9yQ2hpdHpvbmlTZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICMxY2E3ZWM7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb2xvck1laGFuZGVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjOTc5NztcbiAgY29sb3I6IHdoaXRlO1xuXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbG9yTWVoYW5kZXNTZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICMyYzk3OTc7XG4gIGJvcmRlcjogIzJjOTc5NyBzb2xpZCAwLjU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiIsIi5oZWFkZXJUeHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzQzYTAyZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5UWFQge1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cblxuLmJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaW5wdXRzIHtcbiAgaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYkxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTJweDtcbn1cblxuLmxpc3ROdW0ge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmhlYWRlclRYVCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5YMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjJmOTg7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuLlgyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjYTdlYztcbiAgb3BhY2l0eTogMC4yO1xufVxuXG4uWDMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM5Nzk3O1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5idG5UaW1lIHtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyICFpbXBvcnRhbnQ7XG59XG5cbi5idG5Ob3RTZWxlY3Qge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xufVxuXG4uYnRuVGltZSBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01cHggIWltcG9ydGFudDtcbn1cblxuaW5wdXQuaW9uLWF1dG9jb21wbGV0ZVtyZWFkb25seV0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiB0ZXh0O1xufVxuXG4ubmFtZXNUYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuaW9uLWF1dG8tY29tcGxldGUge1xuICB3aWR0aDogNTB2dztcbiAgbWFyZ2luLXRvcDogLTE1MHB4O1xufVxuXG4uaW9uLWF1dG9jb21wbGV0ZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMjA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIG1hcmdpbjogM3B4IDBweDtcbn1cblxuLm1haW5Db250aW5lciB7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG4uYXV0b05hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5kYXRlcyB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuXG4uYmFyY29kZUJ0biB7XG4gIGhlaWdodDogMzFweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2JkNWY1O1xufVxuXG4uYmFyY29kZUJ0biBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YmQ1ZjU7XG59XG5cbi5jb2xvclBuaW1pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMmY5ODtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbG9yUG5pbWlTZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICMxZjJmOTg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbG9yQ2hpdHpvbmkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWNhN2VjO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbG9yQ2hpdHpvbmlTZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICMxY2E3ZWM7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbG9yTWVoYW5kZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM5Nzk3O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbG9yTWVoYW5kZXNTZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICMyYzk3OTc7XG4gIGJvcmRlcjogIzJjOTc5NyBzb2xpZCAwLjU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.service */ "./src/app/pages/home/home.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_global_treatmentsFilter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global/treatmentsFilter.service */ "./src/app/services/global/treatmentsFilter.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_global_treatments_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/global/treatments.service */ "./src/app/services/global/treatments.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var src_app_services_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/equipment/equipment.service */ "./src/app/services/equipment/equipment.service.ts");
/* harmony import */ var src_app_services_equipmentX2_equipmentX2_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/equipmentX2/equipmentX2.service */ "./src/app/services/equipmentX2/equipmentX2.service.ts");
/* harmony import */ var src_app_services_equipmentX3_equipmentX3_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/equipmentX3/equipmentX3.service */ "./src/app/services/equipmentX3/equipmentX3.service.ts");
/* harmony import */ var src_app_services_equipmentAll_equipmentAll_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/equipmentAll/equipmentAll.service */ "./src/app/services/equipmentAll/equipmentAll.service.ts");













let HomePage = class HomePage {
    constructor(homeService, equiService, router, activatedRoute, platform, treatmentsFilter, network, equiX2Service, equiX3Service, equiAllService, treatmentsService) {
        this.homeService = homeService;
        this.equiService = equiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.platform = platform;
        this.treatmentsFilter = treatmentsFilter;
        this.network = network;
        this.equiX2Service = equiX2Service;
        this.equiX3Service = equiX3Service;
        this.equiAllService = equiAllService;
        this.treatmentsService = treatmentsService;
        this.rbTime = "1";
        this.equiId = 1000110;
        this.btnSelected = 1;
        this.time = { time: false, category: false };
        this.showListLocation = false;
        this.showListCategorie = false;
        this.showListBarcode = false;
        this.info = {
            startDay: moment__WEBPACK_IMPORTED_MODULE_4__().format("YYYY-MM-DD"),
            endDay: moment__WEBPACK_IMPORTED_MODULE_4__().add(7, "d").format("YYYY-MM-DD"),
            search: "",
        };
        this.getEquiDetails = (equiId) => {
            // console.log(this.tasks);
            this.info.search = equiId;
            // this.filterService();
            this.getTasks(equiId);
        };
        let test = moment__WEBPACK_IMPORTED_MODULE_4__("2020/05/12").isBetween("2020-07-12", "2020-09-12", "days", "[]");
        console.log("Test : ", test);
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            let checkBox = params["time"];
            console.log(checkBox);
            if (checkBox == "true")
                this.rbTime = "1";
            else
                this.rbTime = "2";
            this.chorgim = params["chorgim"];
            this.type = params["type"];
            if (this.type == "search") {
                this.noType = true;
                this.dateFrom = "2000-01-01";
                this.dateTo = moment__WEBPACK_IMPORTED_MODULE_4__().add(360, "d").format("YYYY-MM-DD");
            }
            else if (this.type == "barcode") {
                this.noType = true;
                this.dateFrom = "2000-01-01";
                this.dateTo = moment__WEBPACK_IMPORTED_MODULE_4__().add(360, "d").format("YYYY-MM-DD");
                this.getTasks(localStorage.barcode);
            }
            console.log("type: ", this.type);
            if (this.chorgim == "true") {
                this.btnSelected = 1;
                this.rbTime = "2";
                this.dateFrom = "2000-01-01";
                this.dateTo = moment__WEBPACK_IMPORTED_MODULE_4__().format("YYYY-MM-DD");
                console.log(this.dateFrom, this.dateTo);
            }
            else if (checkBox == "true") {
                this.btnSelected = 2;
                this.rbTime = "2";
                this.dateFrom = moment__WEBPACK_IMPORTED_MODULE_4__().format("YYYY-MM-DD");
                this.dateTo = moment__WEBPACK_IMPORTED_MODULE_4__().add(30, "d").format("YYYY-MM-DD");
            }
        });
        console.log(this.dateTo);
        // if (this.rbTime != "2") {
        if (this.type != "barcode")
            this.getTasks();
        // }
    }
    ionViewWillEnter() {
        if (this.type == "barcode")
            this.getTasks(localStorage.barcode);
        else
            this.getTasks();
    }
    getTasks(equiId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.network.type, this.type);
            if (this.network.type === 'none') {
                if (this.type === 'X1') {
                    this.tasks = yield this.equiService.getTasks();
                    this.tasksLength = this.tasks.length;
                    localStorage.taskLength = this.tasksLength;
                }
                else if (this.type === 'X2') {
                    this.tasks = yield this.equiX2Service.getTasks();
                    this.tasksLength = this.tasks.length;
                    localStorage.taskX2Length = this.tasksLength;
                }
                else if (this.type === 'X3') {
                    this.tasks = yield this.equiX3Service.getTasks();
                    this.tasksLength = this.tasks.length;
                    localStorage.taskX3Length = this.tasksLength;
                }
                else if (this.type === 'search') {
                    this.tasks = yield this.equiAllService.getTasks();
                }
            }
            else {
                if (equiId) {
                    this.tasks = yield this.homeService.getTasks(this.dateFrom, this.dateTo, this.type, this.locationForSearch, this.CategorieForSearch, equiId);
                }
                else {
                    this.tasks = yield this.homeService.getTasks(this.dateFrom, this.dateTo, this.type, this.locationForSearch, this.CategorieForSearch, this.barcodeForSearch);
                }
            }
            console.log(this.tasks);
            this.filterArray = [...this.tasks];
        });
    }
    searchvalue(event) {
        console.log("SearchValue : ", event.target.name, event.target.value);
        this.filterService();
    }
    filterService() {
        console.log(this.info);
        let filterArray = this.treatmentsFilter.filterTreatmentsByArray(this.tasks, this.info);
        console.log(filterArray);
        this.tasks = [...filterArray];
        // this.returnFn.emit(filterArray);
    }
    getFilterArrayFromFilterComponent(arr) {
        this.filterArray = arr;
    }
    cbChange(change) {
        console.log("1:", this.time, change);
        if (change == 1 && this.time.time) {
            console.log("3");
            this.time.time = true;
            this.time.category = false;
        }
        else if (change == 1 && !this.time.time) {
            console.log("4");
            this.time.category = false;
        }
        if (change == 2 && this.time.category)
            this.time.time = true;
        else if (change == 2 && !this.time.category)
            this.time.time = false;
        console.log("2:", this.time, change);
    }
    openBarCode() {
        if (!this.platform.is("cordova")) {
            this.getEquiDetails(this.equiId);
        }
        else {
            this.homeService.scanBarcode(this.getEquiDetails);
        }
    }
    btnSelect(num) {
        this.btnSelected = num;
        console.log(num);
        if (num == 1) {
            this.chorgim = "true";
            this.dateFrom = "2000-01-01";
            this.dateTo = moment__WEBPACK_IMPORTED_MODULE_4__().format("YYYY-MM-DD");
            this.getTasks();
        }
        else if (num == 2) {
            this.chorgim = null;
            this.dateFrom = moment__WEBPACK_IMPORTED_MODULE_4__().format("YYYY-MM-DD");
            this.dateTo = moment__WEBPACK_IMPORTED_MODULE_4__().add(7, "d").format("YYYY-MM-DD");
            this.getTasks();
        }
        else if (num == 3) {
            this.chorgim = null;
            this.dateFrom = moment__WEBPACK_IMPORTED_MODULE_4__().format("YYYY-MM-DD");
            this.dateTo = moment__WEBPACK_IMPORTED_MODULE_4__().add(30, "d").format("YYYY-MM-DD");
            this.getTasks();
        }
        else if (num == 4) {
            this.chorgim = null;
            this.dateFrom = moment__WEBPACK_IMPORTED_MODULE_4__(this.info.startDay).format("YYYY-MM-DD");
            this.dateTo = moment__WEBPACK_IMPORTED_MODULE_4__(this.info.endDay).format("YYYY-MM-DD");
            this.getTasks();
        }
    }
    btnTypeSelect(num) {
        this.btnTypeSelected = num;
        console.log(num);
        if (num == 1) {
            this.type = "X1";
            this.getTasks();
        }
        else if (num == 2) {
            this.type = "X2";
            this.getTasks();
        }
        else if (num == 3) {
            this.type = "X3";
            this.getTasks();
        }
    }
    getLocationChange() {
        this.showListLocation = true;
        this.getLocations();
    }
    setLocation(location) {
        this.location = location.ktext;
        this.locationForSearch = location.stand;
        this.locations = [];
        this.getLocation();
    }
    getLocation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.getTasks();
            console.log("Work");
        });
    }
    getLocations() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.locations = yield this.homeService.getLocations(this.location);
        });
    }
    getCategorieChange() {
        this.showListCategorie = true;
        this.getCategories();
    }
    setCategorie(Categorie) {
        this.Categorie = Categorie.eartx;
        this.CategorieForSearch = Categorie.eqart;
        this.Categories = [];
        this.getCategorie();
    }
    getCategorie() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.getTasks();
            console.log("Work");
        });
    }
    getCategories() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.Categories = yield this.homeService.getCategories(this.Categorie);
        });
    }
    getBarcodeChange() {
        this.showListBarcode = true;
        this.getBarcodes();
    }
    setBarcode(barcode) {
        this.barcode = barcode["equipment"];
        this.barcodeForSearch = this.barcode;
        this.barcodes = [];
        this.getBarcode();
    }
    getBarcode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.getTasks();
            console.log("Work");
        });
    }
    getBarcodes() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.barcodes = yield this.homeService.getBarcodes(this.barcode);
        });
    }
    taskInfo(task, equipment, treatmentType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            localStorage.task = JSON.stringify(task);
            console.log('kjhhkkhj', task);
            localStorage.treatmentType = JSON.stringify(treatmentType);
            let treatments = yield this.homeService.getTreatment(equipment, treatmentType);
            this.router.navigate(["/task-page"]);
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"] },
    { type: src_app_services_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_9__["EquipmentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: src_app_services_global_treatmentsFilter_service__WEBPACK_IMPORTED_MODULE_5__["TreatmentsFilter"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"] },
    { type: src_app_services_equipmentX2_equipmentX2_service__WEBPACK_IMPORTED_MODULE_10__["EquipmentX2Service"] },
    { type: src_app_services_equipmentX3_equipmentX3_service__WEBPACK_IMPORTED_MODULE_11__["EquipmentX3Service"] },
    { type: src_app_services_equipmentAll_equipmentAll_service__WEBPACK_IMPORTED_MODULE_12__["EquipmentAllService"] },
    { type: src_app_services_global_treatments_service__WEBPACK_IMPORTED_MODULE_7__["TreatmentsService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"],
        src_app_services_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_9__["EquipmentService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        src_app_services_global_treatmentsFilter_service__WEBPACK_IMPORTED_MODULE_5__["TreatmentsFilter"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"],
        src_app_services_equipmentX2_equipmentX2_service__WEBPACK_IMPORTED_MODULE_10__["EquipmentX2Service"],
        src_app_services_equipmentX3_equipmentX3_service__WEBPACK_IMPORTED_MODULE_11__["EquipmentX3Service"],
        src_app_services_equipmentAll_equipmentAll_service__WEBPACK_IMPORTED_MODULE_12__["EquipmentAllService"],
        src_app_services_global_treatments_service__WEBPACK_IMPORTED_MODULE_7__["TreatmentsService"]])
], HomePage);



/***/ }),

/***/ "./src/app/services/global/treatmentsFilter.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/global/treatmentsFilter.service.ts ***!
  \*************************************************************/
/*! exports provided: TreatmentsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentsFilter", function() { return TreatmentsFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



let TreatmentsFilter = class TreatmentsFilter {
    constructor() { }
    filterTreatmentsByArray(arr, info) {
        let filterArray = [];
        console.log(arr);
        arr.map((item) => {
            if (item["eartx"].includes(info["search"]) ||
                item["eqart"].includes(info["search"]) ||
                String(item["equipment"]).includes(info["search"]) ||
                item["equipmentDescription"].includes(info["search"]) ||
                item["equipmentObjectType"].includes(info["search"]) ||
                item["location"].includes(info["search"]) ||
                item["responsible"].includes(info["search"]) ||
                item["vendor"].includes(info["search"])) {
                filterArray.push(item);
            }
        });
        return filterArray;
    }
    checkDates(date, info) {
        let dt = date.split("/");
        let newDt = dt[2] + "-" + dt[1] + "-" + dt[0];
        let check = moment__WEBPACK_IMPORTED_MODULE_2__(newDt).isBetween(info.startDay, info.endDay, "days", "[]");
        return check;
    }
};
TreatmentsFilter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TreatmentsFilter);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map