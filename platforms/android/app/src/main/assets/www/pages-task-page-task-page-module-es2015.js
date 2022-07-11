(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-task-page-task-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-page/components/last-tasks/last-tasks.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-page/components/last-tasks/last-tasks.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"taskBox\">\n  <!-- <div class=\"headerTxt\" *ngIf=\"taskTreatments.length > 0\"> -->\n  <div class=\"headerTxt\">היסטוריית טיפולים</div>\n  <div *ngFor=\"let treatments of taskTreatments; index as i\" class=\"txt\">\n    <div *ngIf=\"treatments.treatmentLongText == ''\">\n      {{\n        treatments.treatmentDate\n          | date\n            : \"dd/MM/yyyy\" +\n                \" - \" +\n                treatmentsService.getNameTreatments(treatments.type) +\n                \" - \" +\n                treatments.treatmentDescription\n      }}\n    </div>\n    <div *ngIf=\"treatments.treatmentLongText != ''\">\n      <div (click)=\"longText(i)\">\n        <span *ngIf=\"treatments.longText == false || !treatments.longText\"\n          ><ion-icon name=\"caret-back-outline\"></ion-icon\n        ></span>\n        <span class=\"txtGreen\" *ngIf=\"treatments.longText == true\"\n          ><ion-icon name=\"caret-down-outline\"></ion-icon\n        ></span>\n        {{\n          treatments.treatmentDate\n            | date\n              : \"dd/MM/yyyy\" +\n                  \" - \" +\n                  treatmentsService.getNameTreatments(treatments.type) +\n                  \" - \" +\n                  treatments.treatmentDescription\n        }}\n      </div>\n      <div *ngIf=\"treatments.longText == true\" class=\"txtGreen\">\n        {{ treatments.treatmentLongText }} \n      </div>\n    </div>\n\n    <!-- <div class=\"headerTxt\" *ngIf=\"taskTreatments.length <= 0\"> -->\n    <!-- <div class=\"headerTxt\">\n    לא נמצאה היסטוריית טיפולים\n  </div>\n</div> -->\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-page/components/task-info/task-info.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-page/components/task-info/task-info.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"taskBox\">\n  <div class=\"headerNum\">\n    {{ \"מספר ציוד: \" + taskInfo.equipment }}\n  </div>\n  <div class=\"headerTxt\">\n    {{ taskInfo.equipmentDescription }}\n  </div>\n  <hr />\n  <div class=\"txt\">\n    {{\n      \"סוג טיפול: \" +\n        treatmentsService.getNameTreatments(taskInfo.treatmentType)\n    }}\n  </div>\n  <div class=\"txt\">\n    {{ \"מיקום: \" + taskInfo.location }}\n  </div>\n  <div class=\"txt\">\n    {{ \"תאריך טיפול אחרון: \" }}\n    {{ taskInfo.lastTreatment | date: \"dd/MM/yyyy\" }}\n  </div>\n  <div class=\"txt\">\n    {{ \"תאריך טיפול הבא: \" }}\n    {{ taskInfo.nextTreatment | date: \"dd/MM/yyyy\" }}\n  </div>\n  <div class=\"txt\">\n    {{ \"אחראי: \" + taskInfo.responsible }}\n  </div>\n  <div class=\"txt\">\n    {{ \"ספק: \" + taskInfo.vendor }}\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-page/task-page.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-page/task-page.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-header></app-header>\n</ion-header>\n\n<ion-content>\n  <!-- <app-task-info [taskInfo]=\"task\"></app-task-info>\n  <button class=\"btn btn-dark addBtn\" routerLink=\"/task-report\">\n    דיווח טיפול\n  </button> -->\n  <app-task-form [task]=\"task\"></app-task-form>\n\n  <app-last-tasks [taskTreatments]=\"treatments\"></app-last-tasks>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-report/components/task-form/task-form.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-report/components/task-form/task-form.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-12\">\n  <button type=\"submit\" class=\"btn sendBtn btn-floating\" (click)=\"onSave(treatment)\">\n    <!-- <ion-icon name=\"send-outline\" class=\"btnIconSend\"></ion-icon> -->\n    שלח ל - SAP\n  </button>\n</div>\n<div class=\"pt-3\">\n  <div class=\"fontSize text-righ\">\n    {{ task.equipment }} -\n    <span class=\"X1\" *ngIf=\"treatmentType == 'X1'\">\n      {{ treatmentsService.getNameTreatments(treatmentType) }}\n    </span>\n    <span class=\"X2\" *ngIf=\"treatmentType == 'X2'\">\n      {{ treatmentsService.getNameTreatments(treatmentType) }}\n    </span>\n    <span class=\"X3\" *ngIf=\"treatmentType == 'X3'\">\n      {{ treatmentsService.getNameTreatments(treatmentType) }}\n    </span>\n  </div>\n</div>\n\n<div class=\"row gray\">\n  <div class=\"col-12 mt-3 text-right\">\n    <div class=\"mb-2\">\n      <ion-icon name=\"build-outline\"></ion-icon> {{ task.equipmentDescription }}\n    </div>\n    <div class=\"mb-2\">\n      <ion-icon name=\"location-outline\"></ion-icon> {{ task.location }}\n    </div>\n  </div>\n</div>\n<div class=\"line\"></div>\n<div class=\"headerTxt\"></div>\n<div class=\"txt1\"></div>\n\n<div *ngIf=\"treatmentType == 'X1'\">\n  <div *ngIf=\"checkList.length > 0\">\n    <div\n      class=\"form-check text-right mr-4\"\n      *ngFor=\"let cbTask of checkList; let i = index\"\n    >\n      <input\n        type=\"checkbox\"\n        class=\"form-check-input\"\n        id=\"{{ i }}\"\n        [(ngModel)]=\"cbTask.checked\"\n      />\n      <label class=\"form-check-label checkBoxLabel\" for=\"{{ i }}\">{{\n        cbTask[\"description\"]\n      }}</label>\n    </div>\n  </div>\n\n  <div *ngIf=\"checkListCommited.length > 0\">\n    <div\n      class=\"form-check text-right mr-4\"\n      *ngFor=\"let cbTask of checkListCommited; let i = index\"\n    >\n      <!-- <input\n      type=\"checkbox\"\n      class=\"form-check-input\"\n      id=\"{{ i }}\"\n      [(ngModel)]=\"cbTask.checked\"\n    /> -->\n      <label class=\"form-check-label checkBoxLabelCommited\" for=\"{{ i }}\">{{\n        cbTask[\"description\"]\n      }}</label>\n    </div>\n  </div>\n</div>\n<div class=\"form-group inputBox\">\n  <!-- <div>\n    <div class=\"labelTxt\">תיאור הטיפול</div>\n    <input\n      type=\"text\"\n      class=\"form-control inputs\"\n      id=\"notificationDescription\"\n      [(ngModel)]=\"treatment.treatmentDescription\"\n    />\n  </div> -->\n\n  <div class=\"labelTxt\">פירוט נוסף</div>\n  <div>\n    <div class=\"form-group\">\n      <textarea\n        class=\"form-control inputs\"\n        id=\"exampleFormControlTextarea1\"\n        rows=\"4\"\n        [(ngModel)]=\"treatment.treatmentLongDescription\"\n      ></textarea>\n    </div>\n  </div>\n</div>\n<p class=\"text-right p-1 mr-3\" *ngIf=\"treatment.imageExists == true\">\n  צורפה תמונה\n</p>\n<!-- <ion-grid>\n  <ion-row>\n  <ion-col col-6 *ngFor=\"let photo of photoService.photos\">\n      <img [src]=\"photo.data\" />\n      </ion-col>\n  </ion-row>\n</ion-grid> -->\n\n<!-- <div>\n    <input type=\"file\" name=\"myImage\" (input)=\"onChange($event)\" />\n    <ion-fab vertical=\"bottom\" horizontal=\"center\" >\n      <ion-fab-button (click)=\"takePicture()\">\n        <ion-icon name=\"camera\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n   \n  </div> -->\n<div>\n  <div class=\"row btn3\">\n    <div class=\"col-12 mb-4\">\n      <button (click)=\"takePicture()\" class=\"btn picBtn btnTxt\">\n        <ion-icon name=\"camera-outline\" class=\"btnIcon\"></ion-icon>\n        <span class=\"btnTxt mr-2 fontSize30\">צלם תמונה</span>\n      </button>\n    </div>\n    <div class=\"line\"></div>\n    <div class=\"col-12\">\n      <!-- <input\n        type=\"file\"\n        style=\"display: none\"\n        id=\"imageUpload\"\n        name=\"myImage\"\n        (input)=\"onChange($event)\"\n      />\n      <label for=\"imageUpload\" class=\"btn picBtn\">בחר קובץ</label> -->\n      <button\n        type=\"submit\"\n        class=\"btn btn-outline-success saveBtn mt-4\"\n        (click)=\"onSubmit()\"\n      >\n        <ion-icon name=\"save-outline\" class=\"btnIcon\"></ion-icon>\n        <span class=\"btnTxt mr-2 fontSize30\">שמור</span>\n      </button>\n    </div>\n  </div>\n</div>\n<div class=\"row btn3\">\n  <!-- <div class=\"col-6\">\n    <button type=\"submit\" class=\"btn cancelBtn\" routerLink=\"/task-page\">\n      ביטול\n    </button>\n  </div> -->\n  <!-- <div class=\"col-6\">\n    <button type=\"submit\" class=\"btn saveBtn\" (click)=\"onSubmit()\">שמור</button>\n  </div> -->\n</div>\n");

/***/ }),

/***/ "./src/app/models/treatment/treatment.module.ts":
/*!******************************************************!*\
  !*** ./src/app/models/treatment/treatment.module.ts ***!
  \******************************************************/
/*! exports provided: TreatmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentModule", function() { return TreatmentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class TreatmentModule {
    constructor() {
        this.equipment = "";
        this.type = "";
        this.treatmentDescription = "";
        this.treatmentLongDescription = "";
        this.externalUser = "";
        this.responsible = "";
        this.codeList = [];
        this.imageExists = false;
    }
}


/***/ }),

/***/ "./src/app/pages/task-page/components/last-tasks/last-tasks.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/task-page/components/last-tasks/last-tasks.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".taskBox {\n  padding: 14px !important;\n  width: 90%;\n  margin: 5px 5% 5px;\n  background-color: white;\n  top: 220px;\n  text-align: right !important;\n}\n\n.headerTxt {\n  font-weight: bold;\n  font-size: 18px;\n  color: #43a02e;\n}\n\n.txt {\n  font-size: 15px;\n  margin-top: 2px;\n}\n\n.txtGreen {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFzay1wYWdlL2NvbXBvbmVudHMvbGFzdC10YXNrcy9DOlxceGFtcHBcXGh0ZG9jc1xcU0NIQWNoemFrYS9zcmNcXGFwcFxccGFnZXNcXHRhc2stcGFnZVxcY29tcG9uZW50c1xcbGFzdC10YXNrc1xcbGFzdC10YXNrcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFzay1wYWdlL2NvbXBvbmVudHMvbGFzdC10YXNrcy9sYXN0LXRhc2tzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUVBLGVBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rhc2stcGFnZS9jb21wb25lbnRzL2xhc3QtdGFza3MvbGFzdC10YXNrcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrQm94IHtcbiAgcGFkZGluZzogMTRweCAhaW1wb3J0YW50O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDVweCA1JSA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0b3A6IDIyMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyVHh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHJnYig2NywgMTYwLCA0Nik7XG59XG5cbi50eHQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIC8vIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi50eHRHcmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbiIsIi50YXNrQm94IHtcbiAgcGFkZGluZzogMTRweCAhaW1wb3J0YW50O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDVweCA1JSA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0b3A6IDIyMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyVHh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM0M2EwMmU7XG59XG5cbi50eHQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLnR4dEdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/task-page/components/last-tasks/last-tasks.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/task-page/components/last-tasks/last-tasks.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LastTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastTasksComponent", function() { return LastTasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_global_treatments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global/treatments.service */ "./src/app/services/global/treatments.service.ts");



let LastTasksComponent = class LastTasksComponent {
    constructor(treatmentsService) {
        this.treatmentsService = treatmentsService;
        this.longTextShow = false;
    }
    ngOnInit() {
        this.Treatments = this.taskTreatments;
        // for (let index = 0; index < this.taskTreatments.length; index++) {
        //   this.taskTreatments[i]["longText"] = false;
        // }
    }
    longText(i) {
        if (this.taskTreatments[i]["longText"]) {
            this.taskTreatments[i]["longText"] = !this.taskTreatments[i]["longText"];
        }
        else {
            this.taskTreatments[i]["longText"] = true;
        }
    }
};
LastTasksComponent.ctorParameters = () => [
    { type: src_app_services_global_treatments_service__WEBPACK_IMPORTED_MODULE_2__["TreatmentsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LastTasksComponent.prototype, "taskTreatments", void 0);
LastTasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-last-tasks",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./last-tasks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-page/components/last-tasks/last-tasks.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./last-tasks.component.scss */ "./src/app/pages/task-page/components/last-tasks/last-tasks.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_global_treatments_service__WEBPACK_IMPORTED_MODULE_2__["TreatmentsService"]])
], LastTasksComponent);



/***/ }),

/***/ "./src/app/pages/task-page/components/task-info/task-info.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/task-page/components/task-info/task-info.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".taskBox {\n  padding: 14px !important;\n  width: 90%;\n  margin: 5px 5% 5px;\n  background-color: white;\n  top: 220px;\n  box-shadow: 3px 5px 8px -2px #878787;\n  text-align: right !important;\n}\n\n.headerNum {\n  font-weight: bold;\n  font-size: 15px;\n  color: #0c2a32;\n}\n\n.headerTxt {\n  font-weight: bold;\n  font-size: 13px;\n  color: #43a02e;\n}\n\n.txt {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFzay1wYWdlL2NvbXBvbmVudHMvdGFzay1pbmZvL0M6XFx4YW1wcFxcaHRkb2NzXFxTQ0hBY2h6YWthL3NyY1xcYXBwXFxwYWdlc1xcdGFzay1wYWdlXFxjb21wb25lbnRzXFx0YXNrLWluZm9cXHRhc2staW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFzay1wYWdlL2NvbXBvbmVudHMvdGFzay1pbmZvL3Rhc2staW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFzay1wYWdlL2NvbXBvbmVudHMvdGFzay1pbmZvL3Rhc2staW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrQm94IHtcbiAgcGFkZGluZzogMTRweCAhaW1wb3J0YW50O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDVweCA1JSA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0b3A6IDIyMHB4O1xuICBib3gtc2hhZG93OiAzcHggNXB4IDhweCAtMnB4IHJnYmEoMTM1LCAxMzUsIDEzNSwgMSk7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXJOdW0ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogcmdiKDEyLCA0MiwgNTApO1xufVxuXG4uaGVhZGVyVHh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHJnYig2NywgMTYwLCA0Nik7XG59XG5cbi50eHQge1xuICBmb250LXNpemU6IDEycHg7XG59XG4iLCIudGFza0JveCB7XG4gIHBhZGRpbmc6IDE0cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiA1cHggNSUgNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdG9wOiAyMjBweDtcbiAgYm94LXNoYWRvdzogM3B4IDVweCA4cHggLTJweCAjODc4Nzg3O1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyTnVtIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMwYzJhMzI7XG59XG5cbi5oZWFkZXJUeHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzQzYTAyZTtcbn1cblxuLnR4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/task-page/components/task-info/task-info.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/task-page/components/task-info/task-info.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TaskInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskInfoComponent", function() { return TaskInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_global_treatments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global/treatments.service */ "./src/app/services/global/treatments.service.ts");



let TaskInfoComponent = class TaskInfoComponent {
    constructor(treatmentsService) {
        this.treatmentsService = treatmentsService;
    }
    ngOnInit() {
    }
};
TaskInfoComponent.ctorParameters = () => [
    { type: src_app_services_global_treatments_service__WEBPACK_IMPORTED_MODULE_2__["TreatmentsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TaskInfoComponent.prototype, "taskInfo", void 0);
TaskInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-task-info",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-page/components/task-info/task-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-info.component.scss */ "./src/app/pages/task-page/components/task-info/task-info.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_global_treatments_service__WEBPACK_IMPORTED_MODULE_2__["TreatmentsService"]])
], TaskInfoComponent);



/***/ }),

/***/ "./src/app/pages/task-page/task-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/task-page/task-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: TaskPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPagePageRoutingModule", function() { return TaskPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _task_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-page.page */ "./src/app/pages/task-page/task-page.page.ts");




const routes = [
    {
        path: '',
        component: _task_page_page__WEBPACK_IMPORTED_MODULE_3__["TaskPagePage"]
    }
];
let TaskPagePageRoutingModule = class TaskPagePageRoutingModule {
};
TaskPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TaskPagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/task-page/task-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/task-page/task-page.module.ts ***!
  \*****************************************************/
/*! exports provided: TaskPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPagePageModule", function() { return TaskPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _task_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-page-routing.module */ "./src/app/pages/task-page/task-page-routing.module.ts");
/* harmony import */ var _task_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-page.page */ "./src/app/pages/task-page/task-page.page.ts");
/* harmony import */ var _components_last_tasks_last_tasks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/last-tasks/last-tasks.component */ "./src/app/pages/task-page/components/last-tasks/last-tasks.component.ts");
/* harmony import */ var _components_task_info_task_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/task-info/task-info.component */ "./src/app/pages/task-page/components/task-info/task-info.component.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _task_report_components_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../task-report/components/task-form/task-form.component */ "./src/app/pages/task-report/components/task-form/task-form.component.ts");











let TaskPagePageModule = class TaskPagePageModule {
};
TaskPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _task_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaskPagePageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
        ],
        declarations: [
            _task_page_page__WEBPACK_IMPORTED_MODULE_6__["TaskPagePage"],
            _components_task_info_task_info_component__WEBPACK_IMPORTED_MODULE_8__["TaskInfoComponent"],
            _components_last_tasks_last_tasks_component__WEBPACK_IMPORTED_MODULE_7__["LastTasksComponent"],
            _task_report_components_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_10__["TaskFormComponent"]
        ],
    })
], TaskPagePageModule);



/***/ }),

/***/ "./src/app/pages/task-page/task-page.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/task-page/task-page.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".addBtn {\n  width: 80%;\n  background-color: #0c2a32;\n  border-radius: 30px;\n  margin-left: 10%;\n  margin-top: 11px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFzay1wYWdlL0M6XFx4YW1wcFxcaHRkb2NzXFxTQ0hBY2h6YWthL3NyY1xcYXBwXFxwYWdlc1xcdGFzay1wYWdlXFx0YXNrLXBhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90YXNrLXBhZ2UvdGFzay1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YXNrLXBhZ2UvdGFzay1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRCdG4ge1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIsIDQyLCA1MCk7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi10b3A6IDExcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuIiwiLmFkZEJ0biB7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzJhMzI7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi10b3A6IDExcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/task-page/task-page.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/task-page/task-page.page.ts ***!
  \***************************************************/
/*! exports provided: TaskPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPagePage", function() { return TaskPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../home/home.service */ "./src/app/pages/home/home.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_treatment_treatment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/treatment/treatment.service */ "./src/app/services/treatment/treatment.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");





let TaskPagePage = class TaskPagePage {
    constructor(homeService, treatmentService, network) {
        this.homeService = homeService;
        this.treatmentService = treatmentService;
        this.network = network;
        this.task = {};
    }
    ngOnInit() {
        this.task = JSON.parse(localStorage.task);
        this.taskInfo(this.task["equipment"], this.task["treatmentType"]);
    }
    taskInfo(equipment, treatmentType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.network.type !== 'none') {
                this.treatments = yield this.homeService.getTreatment(equipment, treatmentType);
                this.treatments.forEach(element => {
                    this.treatmentService.deleteFromDbById(element);
                    this.treatmentService.insertUrlToDb(element);
                });
            }
            else {
                this.treatments = yield this.treatmentService.getTreatment(equipment, treatmentType);
            }
            console.log(this.treatments);
            localStorage.task = JSON.stringify(this.task);
            // localStorage.treatmentType = JSON.stringify(treatmentType);
        });
    }
};
TaskPagePage.ctorParameters = () => [
    { type: _home_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"] },
    { type: src_app_services_treatment_treatment_service__WEBPACK_IMPORTED_MODULE_3__["TreatmentService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"] }
];
TaskPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-task-page",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-page/task-page.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-page.page.scss */ "./src/app/pages/task-page/task-page.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_home_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"],
        src_app_services_treatment_treatment_service__WEBPACK_IMPORTED_MODULE_3__["TreatmentService"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"]])
], TaskPagePage);



/***/ }),

/***/ "./src/app/pages/task-report/components/task-form/task-form.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/task-report/components/task-form/task-form.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inputs {\n  width: 90%;\n  margin-right: 5%;\n  margin-top: 5px;\n  margin-bottom: 15px;\n  background-color: white;\n  padding: 10px;\n  box-shadow: 3px 5px 8px -2px #878787;\n  text-align: right !important;\n}\n\n.X1 {\n  color: #1f2f98;\n}\n\n.X2 {\n  color: #1ca7ec;\n}\n\n.X3 {\n  color: #2c9797;\n}\n\n.headerTxt {\n  font-size: 17px;\n  text-align: center;\n  font-weight: bold;\n  margin-top: 20px;\n  color: white;\n}\n\n.btnIcon {\n  font-size: 30px;\n  margin-left: 3px;\n  margin-top: 6px !important;\n}\n\n.txt1 {\n  font-size: 17px;\n  text-align: center;\n  font-weight: bold;\n  color: white;\n  margin-bottom: 20px;\n}\n\n.labelTxt {\n  font-size: 18px;\n  margin-right: 5%;\n  text-align: right !important;\n}\n\n.saveBtn {\n  width: 100%;\n  color: #787ff6;\n  border-color: #787ff6;\n}\n\n.sendBtn {\n  position: fixed;\n  width: 80px;\n  height: 80px;\n  top: 105px;\n  left: 30px;\n  background-color: #43a02e;\n  color: #fff;\n  border-radius: 50px;\n  text-align: center;\n  box-shadow: 2px 2px 3px #999;\n}\n\n.picBtn {\n  width: 100%;\n  color: black;\n  background-color: #7bd5f5;\n  color: white;\n  margin-top: 10px;\n}\n\n.cancelBtn {\n  width: 90%;\n  background-color: white;\n  color: #0c2a32;\n  border-radius: 30px;\n  border: 2px solid #0c2a32;\n  margin-right: 5%;\n  margin-top: 10px;\n}\n\n.btn3 {\n  width: 90%;\n  margin-right: 5%;\n}\n\n.equipment {\n  font-size: 20px;\n  font-weight: bold;\n  color: black;\n}\n\n.gray {\n  width: 100%;\n  padding-right: 35px;\n}\n\n.treatmentType {\n  font-size: 16px;\n}\n\n.line {\n  width: 94%;\n  height: 1px;\n  background-color: #dadada;\n  margin-right: 3%;\n}\n\n.line1 {\n  width: 50%;\n  height: 1px;\n  background-color: #dadada;\n  margin-right: 25%;\n}\n\n.checkBoxLabel {\n  padding-right: 30px;\n}\n\n.checkBoxLabelCommited {\n  padding-right: 30px;\n  color: #43a02e;\n}\n\n.fontSize {\n  font-size: 24px;\n  font-weight: bold;\n  text-align: right;\n  padding-right: 30px;\n}\n\n.btnIcon {\n  font-size: 35px;\n  margin-left: 3px;\n}\n\n.btnTxt {\n  position: relative;\n  top: -10px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFzay1yZXBvcnQvY29tcG9uZW50cy90YXNrLWZvcm0vQzpcXHhhbXBwXFxodGRvY3NcXFNDSEFjaHpha2Evc3JjXFxhcHBcXHBhZ2VzXFx0YXNrLXJlcG9ydFxcY29tcG9uZW50c1xcdGFzay1mb3JtXFx0YXNrLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Rhc2stcmVwb3J0L2NvbXBvbmVudHMvdGFzay1mb3JtL3Rhc2stZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURNQTtFQUNFLGNBQUE7QUNIRjs7QURTQTtFQUNFLGNBQUE7QUNORjs7QURZQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDVEY7O0FEWUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ1RGOztBRFdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFFQSxZQUFBO0VBRUEsbUJBQUE7QUNWRjs7QURhQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDVkY7O0FEYUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUVBLHFCQUFBO0FDWEY7O0FEaUJBO0VBUUUsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsVUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFHQSxnQkFBQTtBQ3hCRjs7QUQwQkE7RUFDRSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUN2QkY7O0FEMEJBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FDdkJGOztBRDBCQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUN2QkY7O0FEMEJBO0VBS0UsV0FBQTtFQUNBLG1CQUFBO0FDM0JGOztBRDhCQTtFQUNFLGVBQUE7QUMzQkY7O0FEOEJBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDM0JGOztBRDZCQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQzFCRjs7QUQ2QkE7RUFDRSxtQkFBQTtBQzFCRjs7QUQ2QkE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUMxQkY7O0FENkJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQzFCRjs7QUQ2QkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUMxQkY7O0FENkJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQzFCRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rhc2stcmVwb3J0L2NvbXBvbmVudHMvdGFzay1mb3JtL3Rhc2stZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dHMge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3gtc2hhZG93OiAzcHggNXB4IDhweCAtMnB4IHJnYmEoMTM1LCAxMzUsIDEzNSwgMSk7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5YMSB7XG4gIGNvbG9yOiAjMWYyZjk4O1xuICAvLyBjb2xvcjogd2hpdGU7XG4gIC8vIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8vIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uWDIge1xuICBjb2xvcjogIzFjYTdlYztcbiAgLy8gY29sb3I6IHdoaXRlO1xuICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8vIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uWDMge1xuICBjb2xvcjogIzJjOTc5NztcbiAgLy8gY29sb3I6IHdoaXRlO1xuICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8vIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uaGVhZGVyVHh0IHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG5JY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tdG9wOiA2cHggIWltcG9ydGFudDtcbn1cbi50eHQxIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gIGNvbG9yOiB3aGl0ZTtcbiAgLy8gbWFyZ2luLXRvcDogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgLy8gY29sb3I6IHJnYig2NywgMTYwLCA0Nik7XG59XG4ubGFiZWxUeHQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5zYXZlQnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjNzg3ZmY2O1xuICAvLyBib3JkZXI6ICM3ODdmZjY7XG4gIGJvcmRlci1jb2xvcjogIzc4N2ZmNjtcbiAgLy8gYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLy8gbWFyZ2luLXJpZ2h0OiA1JTtcbiAgLy8gbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNlbmRCdG4ge1xuICAvLyB3aWR0aDogMTAwJTtcbiAgLy8gY29sb3I6IHdoaXRlO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjN2JkNWY1O1xuICAvLyAvLyBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAvLyAvLyBtYXJnaW4tcmlnaHQ6IDUlO1xuICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgLy8gYm90dG9tOiA0MHB4O1xuICB0b3A6IDEwNXB4O1xuICBsZWZ0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjcsIDE2MCwgNDYpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xufVxuXG4ucGljQnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YmQ1ZjU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLy8gYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLy8gbWFyZ2luLXJpZ2h0OiA1JTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jYW5jZWxCdG4ge1xuICB3aWR0aDogOTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHJnYigxMiwgNDIsIDUwKTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDEyLCA0MiwgNTApO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYnRuMyB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbi5lcXVpcG1lbnQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5ncmF5IHtcbiAgLy8gZm9udC1zaXplOiAxNXB4O1xuICAvLyBjb2xvcjogZ3JheTtcbiAgLy8gdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC8vIG1hcmdpbi1yaWdodDogMTclO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMzVweDtcbn1cblxuLnRyZWF0bWVudFR5cGUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5saW5lIHtcbiAgd2lkdGg6IDk0JTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XG4gIG1hcmdpbi1yaWdodDogMyU7XG59XG4ubGluZTEge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcbiAgbWFyZ2luLXJpZ2h0OiAyNSU7XG59XG5cbi5jaGVja0JveExhYmVsIHtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxuLmNoZWNrQm94TGFiZWxDb21taXRlZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIGNvbG9yOiByZ2IoNjcsIDE2MCwgNDYpO1xufVxuXG4uZm9udFNpemUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxuLmJ0bkljb24ge1xuICBmb250LXNpemU6IDM1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbi5idG5UeHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbiIsIi5pbnB1dHMge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3gtc2hhZG93OiAzcHggNXB4IDhweCAtMnB4ICM4Nzg3ODc7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5YMSB7XG4gIGNvbG9yOiAjMWYyZjk4O1xufVxuXG4uWDIge1xuICBjb2xvcjogIzFjYTdlYztcbn1cblxuLlgzIHtcbiAgY29sb3I6ICMyYzk3OTc7XG59XG5cbi5oZWFkZXJUeHQge1xuICBmb250LXNpemU6IDE3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bkljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xufVxuXG4udHh0MSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubGFiZWxUeHQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5zYXZlQnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjNzg3ZmY2O1xuICBib3JkZXItY29sb3I6ICM3ODdmZjY7XG59XG5cbi5zZW5kQnRuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICB0b3A6IDEwNXB4O1xuICBsZWZ0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDNhMDJlO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xufVxuXG4ucGljQnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdiZDVmNTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2FuY2VsQnRuIHtcbiAgd2lkdGg6IDkwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMGMyYTMyO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMGMyYTMyO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYnRuMyB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbi5lcXVpcG1lbnQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5ncmF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG59XG5cbi50cmVhdG1lbnRUeXBlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubGluZSB7XG4gIHdpZHRoOiA5NCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xuICBtYXJnaW4tcmlnaHQ6IDMlO1xufVxuXG4ubGluZTEge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcbiAgbWFyZ2luLXJpZ2h0OiAyNSU7XG59XG5cbi5jaGVja0JveExhYmVsIHtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxuLmNoZWNrQm94TGFiZWxDb21taXRlZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjNDNhMDJlO1xufVxuXG4uZm9udFNpemUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxuLmJ0bkljb24ge1xuICBmb250LXNpemU6IDM1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbi5idG5UeHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/task-report/components/task-form/task-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/task-report/components/task-form/task-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TaskFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFormComponent", function() { return TaskFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_global_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/global/utils.service */ "./src/app/services/global/utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_global_treatments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global/treatments.service */ "./src/app/services/global/treatments.service.ts");
/* harmony import */ var src_app_models_treatment_treatment_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/treatment/treatment.module */ "./src/app/models/treatment/treatment.module.ts");
/* harmony import */ var src_app_services_photo_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/photo.services */ "./src/app/services/photo.services.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var src_app_services_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/equipment/equipment.service */ "./src/app/services/equipment/equipment.service.ts");
/* harmony import */ var src_app_services_equipmentX2_equipmentX2_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/equipmentX2/equipmentX2.service */ "./src/app/services/equipmentX2/equipmentX2.service.ts");
/* harmony import */ var src_app_services_equipmentX3_equipmentX3_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/equipmentX3/equipmentX3.service */ "./src/app/services/equipmentX3/equipmentX3.service.ts");
/* harmony import */ var src_app_services_checklist_checklist_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/checklist/checklist.service */ "./src/app/services/checklist/checklist.service.ts");
/* harmony import */ var src_app_services_urlqueue_urlqueue_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/urlqueue/urlqueue.service */ "./src/app/services/urlqueue/urlqueue.service.ts");














let TaskFormComponent = class TaskFormComponent {
    constructor(router, treatmentsService, equiService, equiX2Service, equiX3Service, checkListService, photoService, urlService, location, utils, network) {
        this.router = router;
        this.treatmentsService = treatmentsService;
        this.equiService = equiService;
        this.equiX2Service = equiX2Service;
        this.equiX3Service = equiX3Service;
        this.checkListService = checkListService;
        this.photoService = photoService;
        this.urlService = urlService;
        this.location = location;
        this.utils = utils;
        this.network = network;
        this.treatment = new src_app_models_treatment_treatment_module__WEBPACK_IMPORTED_MODULE_6__["TreatmentModule"]();
        this.checkList = [];
        this.checkListCommited = [];
        this.wasTakePicture = false;
        this.onChange = (e) => {
            console.log("Change", e.target.files);
            this.filesToUpload = e.target.files;
            this.photoService.uploadFromBrowser(this.filesToUpload, this.task.treatmentType, this.task.equipment);
        };
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.network.type !== 'none') {
                this.checkListTask = yield this.treatmentsService.getCL(this.task.equipment);
            }
            localStorage.equipment = this.task.equipment;
            let value = yield this.checkListService.getCL(this.task.equipment);
            console.log(value);
            if (value && value[0]) {
                value[0].checkList = JSON.parse(value[0].checklist);
                this.checkListTask = value[0];
            }
            this.treatment.equipment = this.task.equipment;
            this.treatment.type = this.task.treatmentType;
            this.treatment.responsible = this.task.responsible;
            this.treatment.externalUser = JSON.parse(localStorage.empNum);
            this.treatment.treatmentDate = this.task.nextTreatment;
            this.treatment.begru = this.task.begru;
            this.treatment.imageExists = this.task.imageExists;
            this.treatmentType = JSON.parse(localStorage.treatmentType);
            this.treatment.treatmentDescription = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(new Date(), "dd.MM.yyyy", "en");
            if (this.checkListTask) {
                for (let index = 0; index < this.checkListTask["checkList"].length; index++) {
                    if (this.checkListTask["checkList"][index]["commited"] === true) {
                        // console.log(this.checkList[index]["checked"]);
                        this.checkListCommited.push(this.checkListTask["checkList"][index]);
                    }
                    else {
                        this.checkList.push(this.checkListTask["checkList"][index]);
                    }
                }
                if (this.checkList && this.checkListTask.treatmentLongDescription) {
                    this.treatment.treatmentLongDescription = this.checkListTask.treatmentLongDescription;
                }
            }
            console.log('treatment', this.treatment);
        });
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('sadhkgshajdb');
        });
    }
    takePicture() {
        this.photoService.takePicture(this.task.treatmentType, this.task.equipment);
        // this.wasTakePicture = true;
        // console.log("ressss:", res);
        this.treatment.imageExists = true;
        // this.utils.presentToast("תמונה הועלתה בהצלה!");
    }
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            for (let index = 0; index < this.checkList.length; index++) {
                if (this.checkList[index]["checked"] === true) {
                    // console.log(this.checkList[index]["checked"]);
                    this.checkList[index]["commited"] = true;
                    this.treatment.codeList.push(this.checkList[index].code);
                }
            }
            if (this.checkListTask) {
                this.checkListService.deleteFromDbById(this.checkListTask.equipment);
                this.checkListService.insertUrlToDb(this.checkListTask);
            }
            // this.treatment.checkList = this.checkList;
            this.treatment.finish = false;
            console.log("notification123: ", JSON.stringify(this.treatment), this.task);
            this.treatmentsService.setTreatment(this.treatment);
            this.task.atWork = true;
            if (this.treatment.type === "X1") {
                this.equiService.updateDbById(this.task, this.task._id);
            }
            else if (this.treatment.type === "X2") {
                this.equiX2Service.updateDbById(this.task, this.task._id);
            }
            else if (this.treatment.type === "X3") {
                this.equiX3Service.updateDbById(this.task, this.task._id);
            }
            this.utils.presentToast("הטיפול נשמר!");
            this.router.navigate(["/home/true/true/" + localStorage.type]);
            this.location.back();
        });
    }
    onSave(treatment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("imageExists - ", this.checkListTask);
            let checkListvalue = this.checkList;
            for (let index = 0; index < this.checkList.length; index++) {
                if (this.checkList[index]["checked"] === true) {
                    this.checkList[index]["commited"] = true;
                    this.treatment.codeList.push(this.checkList[index].code);
                }
                else {
                    this.notForSubmit = true;
                }
            }
            if (this.checkListTask) {
                this.checkListService.deleteFromDbById(this.checkListTask.equipment);
                this.checkListService.insertUrlToDb(this.checkListTask);
            }
            console.log("imageExists - ", this.checkListTask);
            if (this.notForSubmit != true || this.treatment.type != "X1") {
                this.treatment.finish = true;
            }
            else {
                this.treatment.finish = false;
                this.utils.presentalertConfirm("לא ניתן לשלוח את הטיפול ללא מילוי כל הפעולות");
                return false;
            }
            if ((this.treatment.type == "X3" || this.treatment.type == "X2") &&
                this.treatment.imageExists != true) {
                this.utils.presentalertConfirm("לא ניתן לשלוח את הטיפול ללא צרופות!");
                return false;
            }
            console.log(this.task.atWork);
            if (this.treatment.type === "X1") {
                localStorage.taskLength = localStorage.taskLength - 1;
                this.equiService.deleteFromDbById(this.task._id);
            }
            else if (this.treatment.type === "X2") {
                localStorage.taskX2Length = localStorage.taskLength - 1;
                this.equiX2Service.deleteFromDbById(this.task._id);
            }
            else if (this.treatment.type === "X3") {
                localStorage.taskX3Length = localStorage.taskLength - 1;
                this.equiX3Service.deleteFromDbById(this.task._id);
            }
            this.treatmentsService.setTreatment(this.treatment);
            this.utils.presentToast("הטיפול נשלח ל - SAP!");
            this.router.navigate(["/home/true/true/" + localStorage.type]);
        });
    }
};
TaskFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_global_treatments_service__WEBPACK_IMPORTED_MODULE_5__["TreatmentsService"] },
    { type: src_app_services_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_9__["EquipmentService"] },
    { type: src_app_services_equipmentX2_equipmentX2_service__WEBPACK_IMPORTED_MODULE_10__["EquipmentX2Service"] },
    { type: src_app_services_equipmentX3_equipmentX3_service__WEBPACK_IMPORTED_MODULE_11__["EquipmentX3Service"] },
    { type: src_app_services_checklist_checklist_service__WEBPACK_IMPORTED_MODULE_12__["ChecklistService"] },
    { type: src_app_services_photo_services__WEBPACK_IMPORTED_MODULE_7__["PhotoService"] },
    { type: src_app_services_urlqueue_urlqueue_service__WEBPACK_IMPORTED_MODULE_13__["UrlqueueService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _services_global_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TaskFormComponent.prototype, "task", void 0);
TaskFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-task-form",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-report/components/task-form/task-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-form.component.scss */ "./src/app/pages/task-report/components/task-form/task-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_global_treatments_service__WEBPACK_IMPORTED_MODULE_5__["TreatmentsService"],
        src_app_services_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_9__["EquipmentService"],
        src_app_services_equipmentX2_equipmentX2_service__WEBPACK_IMPORTED_MODULE_10__["EquipmentX2Service"],
        src_app_services_equipmentX3_equipmentX3_service__WEBPACK_IMPORTED_MODULE_11__["EquipmentX3Service"],
        src_app_services_checklist_checklist_service__WEBPACK_IMPORTED_MODULE_12__["ChecklistService"],
        src_app_services_photo_services__WEBPACK_IMPORTED_MODULE_7__["PhotoService"],
        src_app_services_urlqueue_urlqueue_service__WEBPACK_IMPORTED_MODULE_13__["UrlqueueService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _services_global_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"]])
], TaskFormComponent);



/***/ }),

/***/ "./src/app/services/photo.services.ts":
/*!********************************************!*\
  !*** ./src/app/services/photo.services.ts ***!
  \********************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _global_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global/utils.service */ "./src/app/services/global/utils.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _global_setting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global/setting.service */ "./src/app/services/global/setting.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");










let PhotoService = class PhotoService {
    constructor(camera, platform, storage, file, http, settingsService, network, utilsService) {
        this.camera = camera;
        this.platform = platform;
        this.storage = storage;
        this.file = file;
        this.http = http;
        this.settingsService = settingsService;
        this.network = network;
        this.utilsService = utilsService;
        this.photos = [];
        this.type = 0;
        this.lastImage = null;
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
    }
    takePicture(treatmentType, equipment) {
        this.camera.getPicture(this.options).then((imageData) => {
            this.file
                .resolveLocalFilesystemUrl(imageData)
                .then((entry) => {
                entry.file((file) => {
                    if (this.network.type !== 'none') {
                        this.readFile(file, treatmentType, equipment);
                    }
                    else {
                        this.readFileOffline(file, treatmentType, equipment);
                    }
                });
            });
        }, (err) => {
            // Handle error
        });
    }
    readFile(file, treatmentType, equipment) {
        const reader = new FileReader();
        reader.onloadend = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const imgBlob = new Blob([reader.result], {
                type: file.type,
            });
            let formData = new FormData();
            formData.append("treatmentType", treatmentType);
            formData.append("equipment", equipment);
            //formData.append('image', myphoto, '123.jpg');
            formData.append("image", imgBlob, file.name);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]();
            console.log("FileWeb : ", file);
            headers.append("Content-Type", "multipart/form-data;boundary=" + Math.random());
            headers.append("Accept", "application/json");
            const httpOptions = {
                headers,
            };
            yield this.sendToServer(this.settingsService.photoURL, formData, httpOptions);
            this.utilsService.presentToast("התמונה הועלתה בהצלחה!!");
            // alert("הועלה קובץ בשם: " + file.name);
        });
        reader.readAsArrayBuffer(file);
    }
    readFileOffline(file, treatmentType, equipment) {
        const reader = new FileReader();
        reader.onloadend = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let imgBlob = reader.result.toString();
            let formData = {};
            formData['treatmentType'] = treatmentType;
            formData['equipment'] = equipment;
            formData['image'] = imgBlob;
            formData['name'] = file.name;
            formData['type'] = file.type;
            let res = yield this.sendToServer(this.settingsService.photoURL, formData);
            this.utilsService.presentToast("התמונה הועלתה בהצלחה!!");
        });
        reader.readAsDataURL(file);
    }
    uploadFromBrowser(file, treatmentType, equipment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]();
            console.log("FileWeb : ", file);
            headers.append("Content-Type", "multipart/form-data;boundary=" + Math.random());
            headers.append("Accept", "application/json");
            const reader = new FileReader();
            console.log("FILE : ", file[0].name, file.type);
            let myphoto = new Blob([reader.result], { type: file[0].type });
            reader.onloadend = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                // alert("הועלה קובץ בשם: " + file[0].name)
                const httpOptions = {
                    headers,
                };
                let formData = new FormData();
                formData.append("treatmentType", treatmentType);
                formData.append("equipment", equipment);
                //formData.append('image', myphoto, '123.jpg');
                formData.append("image", myphoto, "123.jpg");
                yield this.sendToServer(this.settingsService.photoURL, formData, httpOptions);
            });
            reader.readAsArrayBuffer(myphoto);
        });
    }
    sendToServer(url, formData, httpOptions) {
        return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.http.post(url, formData, httpOptions).subscribe((data) => {
                console.log(data);
                resolve(data);
            });
        }));
    }
};
PhotoService.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _global_setting_service__WEBPACK_IMPORTED_MODULE_8__["SettingsService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"] },
    { type: _global_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"] }
];
PhotoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
        _global_setting_service__WEBPACK_IMPORTED_MODULE_8__["SettingsService"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"],
        _global_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]])
], PhotoService);

class Photo {
}


/***/ }),

/***/ "./src/app/services/treatment/treatment.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/treatment/treatment.service.ts ***!
  \*********************************************************/
/*! exports provided: TreatmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentService", function() { return TreatmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _treatment_crud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./treatment.crud */ "./src/app/services/treatment/treatment.crud.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sync_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _global_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/utils.service */ "./src/app/services/global/utils.service.ts");





let TreatmentService = class TreatmentService {
    constructor(equipmenrService, syncAPIService, utils) {
        this.equipmenrService = equipmenrService;
        this.syncAPIService = syncAPIService;
        this.utils = utils;
        this.insertUrlToDb = (item) => {
            this.webDb = this.syncAPIService.webDb;
            return new Promise((resolve, reject) => {
                this.webDb.transaction((t) => {
                    t.executeSql("INSERT INTO treatment (equipment,treatmentDate,treatmentDescription,treatmentLongText,type,__v,_id) VALUES (?,?,?,?,?,?,?)", [
                        item["equipment"],
                        item["treatmentDate"],
                        item["treatmentDescription"],
                        item["treatmentLongText"],
                        item["type"],
                        item["__v"],
                        item["_id"],
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
                    t.executeSql("DELETE FROM treatment ");
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
                    t.executeSql("DELETE FROM treatment WHERE _id = ?", [
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
        this.getTreatment = (equipment, type) => {
            console.log(equipment);
            this.webDb = this.syncAPIService.webDb;
            try {
                return new Promise((resolve, reject) => {
                    this.webDb.transaction((tx) => {
                        tx.executeSql("SELECT * FROM treatment WHERE equipment = ?", [equipment], (tx, results) => {
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
                        tx.executeSql("SELECT * FROM treatment", [], (tx, results) => {
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
TreatmentService.ctorParameters = () => [
    { type: _treatment_crud__WEBPACK_IMPORTED_MODULE_1__["TreatmentCrudService"] },
    { type: _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"] },
    { type: _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"] }
];
TreatmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: "root" }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_treatment_crud__WEBPACK_IMPORTED_MODULE_1__["TreatmentCrudService"], _sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncAPIService"], _global_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]])
], TreatmentService);



/***/ })

}]);
//# sourceMappingURL=pages-task-page-task-page-module-es2015.js.map