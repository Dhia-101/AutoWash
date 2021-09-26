(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\trabe\Documents\work\Angular\AutoWash\src\main.ts */"zUnb");


/***/ }),

/***/ "0tf2":
/*!********************************************************************************!*\
  !*** ./src/app/pages/schedule-booking-page/schedule-booking-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: ScheduleBookingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleBookingPageComponent", function() { return ScheduleBookingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_page_nav_page_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/page-nav/page-nav.component */ "ztht");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");




const _c0 = function () { return { label: "home", link: "" }; };
const _c1 = function () { return { label: "Booking", link: "" }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
class ScheduleBookingPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ScheduleBookingPageComponent.ɵfac = function ScheduleBookingPageComponent_Factory(t) { return new (t || ScheduleBookingPageComponent)(); };
ScheduleBookingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScheduleBookingPageComponent, selectors: [["app-schedule-booking-page"]], decls: 61, vars: 6, consts: [["title", "Booking", 3, "items"], [1, "section-title"], [1, "section-description"], [1, "locations-grid"], [1, "fa", "fa-map-marker-alt"], ["action", ""], ["type", "text", "placeholder", "Name"], ["type", "text", "placeholder", "Email"], ["placeholder", "Description"]], template: function ScheduleBookingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Washing Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Car Washing & Care Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Car Washing Point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "123 Street, New York, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "Strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Call: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " +012 345 6789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Car Washing Point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "123 Street, New York, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "Strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Call: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " +012 345 6789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Car Washing Point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "123 Street, New York, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "Strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Call: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " +012 345 6789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Car Washing Point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "123 Street, New York, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "Strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Call: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " +012 345 6789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Request for a car wash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "app-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Send Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1)));
    } }, directives: [_shared_components_page_nav_page_nav_component__WEBPACK_IMPORTED_MODULE_1__["PageNavComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]], styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 70px 0 60px;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  width: 40%;\n  margin-right: 7%;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .section-title[_ngcontent-%COMP%] {\n  color: #E81C2E;\n  text-transform: uppercase;\n  font-weight: 700;\n  letter-spacing: 4px;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .section-title[_ngcontent-%COMP%]::after {\n  content: \" \";\n  border: 1px solid #E81C2E;\n  display: block;\n  width: 97px;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .section-description[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-weight: 700;\n  font-size: 45px;\n  margin-bottom: 30px;\n  white-space: nowrap;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .locations-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template: repeat(2, 150px)/repeat(2, 50%);\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .locations-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .locations-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #E81C2E;\n  margin-right: 7px;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .locations-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 5px;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .locations-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 3px;\n  font-weight: 400;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n  width: 25%;\n  background-color: red;\n  padding: 20px 30px;\n  border-radius: 5px;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   h3[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 25px;\n  font-weight: 700;\n  margin: 20px 0;\n  text-align: center;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 30px 0;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  outline: none;\n  margin: 10px 0;\n  background-color: #E81C2E;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #FFFFFF;\n  height: 45px;\n  background-color: #E81C2E;\n  border-radius: 5px;\n  color: #FFFFFF;\n  padding: 10px;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #FFFFFF;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #FFFFFF;\n  color: #FFFFFF;\n  background-color: #E81C2E;\n  height: 90px;\n  padding: 10px;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #FFFFFF;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY2hlZHVsZS1ib29raW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQUU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQUFJO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUVOO0FBQU07RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUVSO0FBRUk7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUdJO0VBQ0UsYUFBQTtFQUNBLDhDQUFBO0FBRE47QUFFTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBQVI7QUFDUTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDVjtBQUNRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDVjtBQUNRO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDVjtBQUtFO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUhKO0FBSUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRk47QUFNSTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBSk47QUFLTTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUhSO0FBS007RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFIUjtBQUtRO0VBQ0UsY0FBQTtBQUhWO0FBT007RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFMUjtBQU1RO0VBQ0UsY0FBQTtBQUpWO0FBUU07RUFDRSxnQkFBQTtBQU5SIiwiZmlsZSI6InNjaGVkdWxlLWJvb2tpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA3MHB4IDAgNjBweDtcclxuICA+IDpmaXJzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3JTtcclxuXHJcbiAgICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgIGNvbG9yOiAjRTgxQzJFO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG5cclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFODFDMkU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDk3cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VjdGlvbi1kZXNjcmlwdGlvbiB7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvY2F0aW9ucy1ncmlkIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDIsIDE1MHB4KSAvIHJlcGVhdCgyLCA1MCUpO1xyXG4gICAgICA+IGRpdiB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBjb2xvcjogI0U4MUMyRTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoM3tcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gID4gOmxhc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGgzIHtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZm9ybSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDMwcHggMDtcclxuICAgICAgKiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTgxQzJFO1xyXG4gICAgICB9XHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTgxQzJFO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRleHRhcmVhe1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFODFDMkU7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBhcHAtYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */", "@media screen and (max-width: 1399px) {\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n    width: 50%;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .section-title[_ngcontent-%COMP%] {\n    margin-bottom: 12px;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .section-description[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n    width: 30%;\n  }\n}\n@media screen and (max-width: 1199px) {\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n    width: 37%;\n  }\n}\n@media screen and (max-width: 991px) {\n  section[_ngcontent-%COMP%] {\n    align-items: center;\n    flex-direction: column;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n    width: 90%;\n    margin-right: 0;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n    margin-top: 25px;\n    width: 70%;\n  }\n}\n@media screen and (max-width: 767px) {\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n    width: 90%;\n  }\n}\n@media screen and (max-width: 575px) {\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n    height: 520px;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .section-title[_ngcontent-%COMP%] {\n    color: #E81C2E;\n    text-transform: uppercase;\n    font-weight: 700;\n    letter-spacing: 4px;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .section-title[_ngcontent-%COMP%]::after {\n    content: \" \";\n    border: 1px solid #E81C2E;\n    display: block;\n    width: 97px;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .section-description[_ngcontent-%COMP%] {\n    text-transform: capitalize;\n    font-weight: 700;\n    font-size: 30px;\n    margin-bottom: 30px;\n    white-space: unset;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .locations-grid[_ngcontent-%COMP%] {\n    row-gap: 10%;\n    grid-template: repeat(2, 25%)/repeat(1, 100%);\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .locations-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    height: 100%;\n    display: flex;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .locations-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: #E81C2E;\n    margin-right: 7px;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .locations-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: 700;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .locations-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: 400;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n    background-color: red;\n    padding: 20px 30px;\n    border-radius: 5px;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   h3[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n    font-size: 25px;\n    font-weight: 700;\n    margin: 20px 0;\n    text-align: center;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 30px 0;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n    outline: none;\n    margin: 10px 0;\n    background-color: #E81C2E;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    border: 1px solid #FFFFFF;\n    height: 45px;\n    background-color: #E81C2E;\n    border-radius: 5px;\n    color: #FFFFFF;\n    padding: 10px;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n    color: #FFFFFF;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    border: 1px solid #FFFFFF;\n    color: #FFFFFF;\n    background-color: #E81C2E;\n    height: 90px;\n    padding: 10px;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n    color: #FFFFFF;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY2hlZHVsZS1ib29raW5nLXBhZ2UuY29tcG9uZW50LnF1ZXJ5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSTtJQUNFLFVBQUE7RUFBSjtFQUNJO0lBQ0UsbUJBQUE7RUFDTjtFQUNJO0lBQ0UsZUFBQTtFQUNOO0VBRUU7SUFDRSxVQUFBO0VBQUo7QUFDRjtBQUtBO0VBRUk7SUFDRSxVQUFBO0VBSko7QUFDRjtBQVFBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLHNCQUFBO0VBTkY7RUFRRTtJQUNFLFVBQUE7SUFDQSxlQUFBO0VBTko7RUFVRTtJQUNFLGdCQUFBO0lBQ0EsVUFBQTtFQVJKO0FBQ0Y7QUFhQTtFQUVJO0lBQ0UsVUFBQTtFQVpKO0FBQ0Y7QUFpQkE7RUFFSTtJQUNFLGFBQUE7RUFoQko7RUFpQkk7SUFDRSxjQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VBZk47RUFpQk07SUFDRSxZQUFBO0lBQ0EseUJBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtFQWZSO0VBbUJJO0lBQ0UsMEJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VBakJOO0VBb0JJO0lBQ0UsWUFBQTtJQUNBLDZDQUFBO0VBbEJOO0VBbUJNO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFqQlI7RUFrQlE7SUFDRSxlQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VBaEJWO0VBa0JRO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VBaEJWO0VBa0JRO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VBaEJWO0VBc0JFO0lBRUUscUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VBckJKO0VBc0JJO0lBQ0UsY0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtFQXBCTjtFQXdCSTtJQUNFLFdBQUE7SUFDQSxjQUFBO0VBdEJOO0VBdUJNO0lBQ0UsV0FBQTtJQUNBLGNBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtJQUNBLHlCQUFBO0VBckJSO0VBdUJNO0lBQ0UseUJBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxhQUFBO0VBckJSO0VBdUJRO0lBQ0UsY0FBQTtFQXJCVjtFQXlCTTtJQUNFLGtCQUFBO0lBQ0EseUJBQUE7SUFDQSxjQUFBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFQXZCUjtFQXdCUTtJQUNFLGNBQUE7RUF0QlY7RUEwQk07SUFDRSxnQkFBQTtFQXhCUjtBQUNGIiwiZmlsZSI6InNjaGVkdWxlLWJvb2tpbmctcGFnZS5jb21wb25lbnQucXVlcnkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzOTlweCkge1xyXG4gIHNlY3Rpb24ge1xyXG4gICAgPiA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgfVxyXG4gICAgICAuc2VjdGlvbi1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICA+IDpsYXN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICBzZWN0aW9uIHtcclxuICAgID4gOmxhc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogMzclO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICBzZWN0aW9uIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgID4gOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICA+IDpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgd2lkdGg6IDcwJTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIHNlY3Rpb24ge1xyXG4gICAgPiA6bGFzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICBzZWN0aW9uIHtcclxuICAgID4gOmZpcnN0LWNoaWxkIHtcclxuICAgICAgaGVpZ2h0OiA1MjBweDtcclxuICAgICAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAjRTgxQzJFO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFODFDMkU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHdpZHRoOiA5N3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubG9jYXRpb25zLWdyaWQge1xyXG4gICAgICAgIHJvdy1nYXA6IDEwJTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMiwgMjUlKSAvIHJlcGVhdCgxLCAxMDAlKTtcclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNFODFDMkU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgPiA6bGFzdC1jaGlsZCB7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBoMyB7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U4MUMyRTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFODFDMkU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRleHRhcmVhe1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U4MUMyRTtcclxuICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXBwLWJ1dHRvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScheduleBookingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-schedule-booking-page',
                templateUrl: './schedule-booking-page.component.html',
                styleUrls: ['./schedule-booking-page.component.scss', 'schedule-booking-page.component.query.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sections_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sections/carousel/carousel.component */ "ZOK5");
/* harmony import */ var _sections_about_us_section_about_us_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sections/about-us-section/about-us-section.component */ "BRsM");
/* harmony import */ var _sections_what_we_do_section_what_we_do_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sections/what-we-do-section/what-we-do-section.component */ "HAI7");
/* harmony import */ var _sections_milestones_section_milestones_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sections/milestones-section/milestones-section.component */ "LiVn");
/* harmony import */ var _sections_washing_plans_washing_plans_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sections/washing-plans/washing-plans.component */ "CRk3");
/* harmony import */ var _sections_car_washing_points_section_car_washing_points_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../sections/car-washing-points-section/car-washing-points-section.component */ "xYvl");
/* harmony import */ var _sections_meet_our_team_section_meet_our_team_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sections/meet-our-team-section/meet-our-team-section.component */ "AAYl");
/* harmony import */ var _sections_testemonial_section_testemonial_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../sections/testemonial-section/testemonial-section.component */ "GJ9t");
/* harmony import */ var _sections_our_blog_section_our_blog_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../sections/our-blog-section/our-blog-section.component */ "2PAw");











class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 9, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-about-us-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-what-we-do-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-milestones-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-washing-plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-car-washing-points-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-meet-our-team-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-testemonial-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-our-blog-section");
    } }, directives: [_sections_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _sections_about_us_section_about_us_section_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsSectionComponent"], _sections_what_we_do_section_what_we_do_section_component__WEBPACK_IMPORTED_MODULE_3__["WhatWeDoSectionComponent"], _sections_milestones_section_milestones_section_component__WEBPACK_IMPORTED_MODULE_4__["MilestonesSectionComponent"], _sections_washing_plans_washing_plans_component__WEBPACK_IMPORTED_MODULE_5__["WashingPlansComponent"], _sections_car_washing_points_section_car_washing_points_section_component__WEBPACK_IMPORTED_MODULE_6__["CarWashingPointsSectionComponent"], _sections_meet_our_team_section_meet_our_team_section_component__WEBPACK_IMPORTED_MODULE_7__["MeetOurTeamSectionComponent"], _sections_testemonial_section_testemonial_section_component__WEBPACK_IMPORTED_MODULE_8__["TestemonialSectionComponent"], _sections_our_blog_section_our_blog_section_component__WEBPACK_IMPORTED_MODULE_9__["OurBlogSectionComponent"]], styles: [".about[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 80px 0;\n}\n.about[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  max-width: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  margin-left: 40px;\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  text-transform: uppercase;\n  color: #E81C2E;\n  font-weight: 700;\n  letter-spacing: 4px;\n  padding-bottom: 4px;\n  margin-bottom: 5px;\n  font-size: 18px;\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   span[_ngcontent-%COMP%] {\n  border-bottom: #E81C2E 2px solid;\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 43px;\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  max-width: 90%;\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin-bottom: 20px;\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #E81C2E;\n  margin-right: 7px;\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #E81C2E;\n  color: #FFF;\n  padding: 12px 30px;\n  border-radius: 25px;\n  margin-right: 0;\n  transition: color ease-in 0.15s, background-color ease-in 0.15s;\n  border: none;\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .custom-button[_ngcontent-%COMP%]:hover {\n  background-color: #202C45;\n  color: #E81C2E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUZKO0FBSUk7RUFDSSxrQkFBQTtBQUZSO0FBS0k7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUhSO0FBSVE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFGWjtBQUdZO0VBQ0ksZ0NBQUE7QUFEaEI7QUFJUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUZaO0FBSVE7RUFDSSxjQUFBO0FBRlo7QUFJUTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBRlo7QUFHWTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQURoQjtBQUlRO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwrREFBQTtFQUNBLFlBQUE7QUFGWjtBQU1RO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBSloiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5hYm91dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDgwcHggMDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgPiA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBjb2xvcjogI0U4MUMyRTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogI0U4MUMyRSAycHggc29saWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRTgxQzJFO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U4MUMyRTtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlLWluIDAuMTVzLCBiYWNrZ3JvdW5kLWNvbG9yIGVhc2UtaW4gMC4xNXM7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY3VzdG9tLWJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDJDNDU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRTgxQzJFO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2PAw":
/*!*************************************************************************!*\
  !*** ./src/app/sections/our-blog-section/our-blog-section.component.ts ***!
  \*************************************************************************/
/*! exports provided: OurBlogSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurBlogSectionComponent", function() { return OurBlogSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_template_components_section_template_section_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/template-components/section-template/section-template.component */ "E8Af");
/* harmony import */ var _shared_components_article_card_article_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/article-card/article-card.component */ "bk/Q");




class OurBlogSectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
OurBlogSectionComponent.ɵfac = function OurBlogSectionComponent_Factory(t) { return new (t || OurBlogSectionComponent)(); };
OurBlogSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurBlogSectionComponent, selectors: [["app-our-blog-section"]], decls: 5, vars: 0, consts: [["title", "Our Blog", "description", "Latest news & articles"], [1, "articles"]], template: function OurBlogSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-section-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-article-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-article-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-article-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_template_components_section_template_section_template_component__WEBPACK_IMPORTED_MODULE_1__["SectionTemplateComponent"], _shared_components_article_card_article_card_component__WEBPACK_IMPORTED_MODULE_2__["ArticleCardComponent"]], styles: [".articles[_ngcontent-%COMP%] {\n  width: 73%;\n  display: flex;\n  justify-content: center;\n  margin: 20px 0;\n}\n.articles[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  width: 33.33%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvdXItYmxvZy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0csVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFDSjtBQUFJO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUFFTiIsImZpbGUiOiJvdXItYmxvZy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5hcnRpY2xlcyB7XHJcbiAgICB3aWR0aDogNzMlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICA+ICoge1xyXG4gICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICB3aWR0aDogMzMuMzMlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */", "@media screen and (max-width: 1199px) {\n  .articles[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .articles[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n}\n@media screen and (max-width: 991px) {\n  .articles[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n  .articles[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvdXItYmxvZy1zZWN0aW9uLmNvbXBvbmVudC5xdWVyeS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxXQUFBO0VBQ0Y7RUFBRTtJQUNFLFlBQUE7RUFFSjtBQUNGO0FBQ0E7RUFDSTtJQUNFLFdBQUE7SUFDQSxlQUFBO0VBQ0o7RUFBSTtJQUNFLFVBQUE7RUFFTjtBQUNGIiwiZmlsZSI6Im91ci1ibG9nLXNlY3Rpb24uY29tcG9uZW50LnF1ZXJ5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAuYXJ0aWNsZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICA+ICoge1xyXG4gICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuYXJ0aWNsZXMge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICA+ICoge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurBlogSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-our-blog-section',
                templateUrl: './our-blog-section.component.html',
                styleUrls: ['./our-blog-section.component.scss', './our-blog-section.component.query.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "4AUu":
/*!**********************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_page_nav_page_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/page-nav/page-nav.component */ "ztht");
/* harmony import */ var _sections_about_us_section_about_us_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sections/about-us-section/about-us-section.component */ "BRsM");
/* harmony import */ var _sections_milestones_section_milestones_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sections/milestones-section/milestones-section.component */ "LiVn");
/* harmony import */ var _sections_meet_our_team_section_meet_our_team_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sections/meet-our-team-section/meet-our-team-section.component */ "AAYl");






const _c0 = function () { return { label: "home", link: "" }; };
const _c1 = function () { return { label: "About Us", link: "" }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
class AboutPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutPageComponent.ɵfac = function AboutPageComponent_Factory(t) { return new (t || AboutPageComponent)(); };
AboutPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutPageComponent, selectors: [["app-about-page"]], decls: 4, vars: 6, consts: [["title", "About Us", 3, "items"]], template: function AboutPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-about-us-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-milestones-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-meet-our-team-section");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1)));
    } }, directives: [_shared_components_page_nav_page_nav_component__WEBPACK_IMPORTED_MODULE_1__["PageNavComponent"], _sections_about_us_section_about_us_section_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsSectionComponent"], _sections_milestones_section_milestones_section_component__WEBPACK_IMPORTED_MODULE_3__["MilestonesSectionComponent"], _sections_meet_our_team_section_meet_our_team_section_component__WEBPACK_IMPORTED_MODULE_4__["MeetOurTeamSectionComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-page',
                templateUrl: './about-page.component.html',
                styleUrls: ['./about-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "64+1":
/*!**************************************************************!*\
  !*** ./src/app/pages/contact-page/contact-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_page_nav_page_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/page-nav/page-nav.component */ "ztht");



const _c0 = function () { return { label: "home", link: "" }; };
const _c1 = function () { return { label: "Contact", link: "" }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
class ContactPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactPageComponent.ɵfac = function ContactPageComponent_Factory(t) { return new (t || ContactPageComponent)(); };
ContactPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactPageComponent, selectors: [["app-contact-page"]], decls: 1, vars: 6, consts: [["title", "Contact Us", 3, "items"]], template: function ContactPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-nav", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1)));
    } }, directives: [_shared_components_page_nav_page_nav_component__WEBPACK_IMPORTED_MODULE_1__["PageNavComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-page',
                templateUrl: './contact-page.component.html',
                styleUrls: ['./contact-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8y8k":
/*!**********************************************************!*\
  !*** ./src/app/pages/price-page/price-page.component.ts ***!
  \**********************************************************/
/*! exports provided: PricePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricePageComponent", function() { return PricePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_page_nav_page_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/page-nav/page-nav.component */ "ztht");
/* harmony import */ var _sections_washing_plans_washing_plans_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sections/washing-plans/washing-plans.component */ "CRk3");




const _c0 = function () { return { label: "home", link: "" }; };
const _c1 = function () { return { label: "Price", link: "" }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
class PricePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
PricePageComponent.ɵfac = function PricePageComponent_Factory(t) { return new (t || PricePageComponent)(); };
PricePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PricePageComponent, selectors: [["app-price-page"]], decls: 2, vars: 6, consts: [["title", "Washing Plan", 3, "items"]], template: function PricePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-washing-plans");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1)));
    } }, directives: [_shared_components_page_nav_page_nav_component__WEBPACK_IMPORTED_MODULE_1__["PageNavComponent"], _sections_washing_plans_washing_plans_component__WEBPACK_IMPORTED_MODULE_2__["WashingPlansComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PricePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-price-page',
                templateUrl: './price-page.component.html',
                styleUrls: ['./price-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AAYl":
/*!***********************************************************************************!*\
  !*** ./src/app/sections/meet-our-team-section/meet-our-team-section.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MeetOurTeamSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetOurTeamSectionComponent", function() { return MeetOurTeamSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_template_components_section_template_section_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/template-components/section-template/section-template.component */ "E8Af");
/* harmony import */ var _shared_components_person_card_person_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/person-card/person-card.component */ "F6Ee");




const _c0 = function () { return { twitter: "linktest1", facebook: "linktest2", linkedin: "linktest3", instagram: "linktest4" }; };
class MeetOurTeamSectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
MeetOurTeamSectionComponent.ɵfac = function MeetOurTeamSectionComponent_Factory(t) { return new (t || MeetOurTeamSectionComponent)(); };
MeetOurTeamSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeetOurTeamSectionComponent, selectors: [["app-meet-our-team-section"]], decls: 6, vars: 20, consts: [["title", "Meet Our Team", "description", "Our Enginners & Workers"], [1, "staff-cards"], [3, "imgLink", "name", "job", "socialMediaLinks"]], template: function MeetOurTeamSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-section-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-person-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-person-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-person-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-person-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgLink", "team-2")("name", "Donald John")("job", "Worker")("socialMediaLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgLink", "team-3")("name", "Adam Philips")("job", "Engineer")("socialMediaLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgLink", "team-3")("name", "Thomas Olsen")("job", "Worker")("socialMediaLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgLink", "team-2")("name", "James Alien")("job", "manager")("socialMediaLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));
    } }, directives: [_shared_template_components_section_template_section_template_component__WEBPACK_IMPORTED_MODULE_1__["SectionTemplateComponent"], _shared_components_person_card_person_card_component__WEBPACK_IMPORTED_MODULE_2__["PersonCardComponent"]], styles: [".staff-cards[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  margin: 20px 0;\n  justify-content: center;\n}\n.staff-cards[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 16%;\n  margin-right: 45px;\n  text-align: center;\n}\n.staff-cards[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtZWV0LW91ci10ZWFtLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQUNGO0FBQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0k7RUFDRSxlQUFBO0FBQ04iLCJmaWxlIjoibWVldC1vdXItdGVhbS1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YWZmLWNhcmRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICA+ICoge1xyXG4gICAgd2lkdGg6IDE2JTtcclxuICAgIG1hcmdpbi1yaWdodDogNDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */", "@media screen and (max-width: 1199px) {\n  .staff-cards[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 22%;\n    margin-right: 25px;\n  }\n}\n@media screen and (max-width: 991px) {\n  .staff-cards[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n  }\n  .staff-cards[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 40%;\n    margin-right: 0;\n    margin-bottom: 30px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .staff-cards[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n  }\n  .staff-cards[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 80%;\n    margin-right: 0;\n    margin-bottom: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtZWV0LW91ci10ZWFtLXNlY3Rpb24uY29tcG9uZW50LnF1ZXJ5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFTTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtFQUFOO0FBQ0Y7QUFHQTtFQUNJO0lBQ0UsYUFBQTtJQUNBLDZCQUFBO0lBQ0EsZUFBQTtFQURKO0VBRUk7SUFDRSxVQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VBQU47QUFDRjtBQUdBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxlQUFBO0VBREY7RUFFRTtJQUNFLFVBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUFBSjtBQUNGIiwiZmlsZSI6Im1lZXQtb3VyLXRlYW0tc2VjdGlvbi5jb21wb25lbnQucXVlcnkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gICAgLnN0YWZmLWNhcmRzIHtcclxuICAgICAgPiAqIHtcclxuICAgICAgICB3aWR0aDogMjIlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuc3RhZmYtY2FyZHMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICA+ICoge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5zdGFmZi1jYXJkcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICA+ICoge1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetOurTeamSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meet-our-team-section',
                templateUrl: './meet-our-team-section.component.html',
                styleUrls: ['./meet-our-team-section.component.scss', './meet-our-team-section.component.query.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BRsM":
/*!*************************************************************************!*\
  !*** ./src/app/sections/about-us-section/about-us-section.component.ts ***!
  \*************************************************************************/
/*! exports provided: AboutUsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsSectionComponent", function() { return AboutUsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");



class AboutUsSectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutUsSectionComponent.ɵfac = function AboutUsSectionComponent_Factory(t) { return new (t || AboutUsSectionComponent)(); };
AboutUsSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsSectionComponent, selectors: [["app-about-us-section"]], decls: 26, vars: 4, consts: [[1, "about"], ["src", "assets/img/about.jpg", "alt", ""], [1, "content"], [1, "text"], [1, "far", "fa-check-circle"], [3, "defaultBackgroundColor", "animatedBackgroundColor", "defaultTextColor", "animatedTextColor"]], template: function AboutUsSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Abou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "t Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "car washing and detailing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Lorem ipsum dolor sit amet elit. In vitae turpis. Donec in hendre dui, vel blandit massa. Ut vestibu suscipi cursus. Cras quis porta nulla, ut placerat risus. Aliquam nec magna eget velit luctus dictum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Seats washing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Vacuum cleaning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Interior wet cleaning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Window wiping ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "app-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultBackgroundColor", "#E81C2E")("animatedBackgroundColor", "#202C45")("defaultTextColor", "#FFFFFF")("animatedTextColor", "#E81C2E");
    } }, directives: [_shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]], styles: [".about[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 80px 0;\n}\n.about[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  width: 30%;\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 35%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  margin-left: 40px;\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  text-transform: uppercase;\n  color: #E81C2E;\n  font-weight: 700;\n  letter-spacing: 4px;\n  padding-bottom: 4px;\n  margin-bottom: 5px;\n  font-size: 18px;\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   span[_ngcontent-%COMP%] {\n  border-bottom: #E81C2E 2px solid;\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 43px;\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  max-width: 90%;\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin-bottom: 20px;\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #E81C2E;\n  margin-right: 7px;\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #E81C2E;\n  color: #FFF;\n  padding: 12px 30px;\n  border-radius: 25px;\n  margin-right: 0;\n  transition: color ease-in 0.15s, background-color ease-in 0.15s;\n  border: none;\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .custom-button[_ngcontent-%COMP%]:hover {\n  background-color: #202C45;\n  color: #E81C2E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhYm91dC11cy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0YsbUJBQUE7RUFDRSxjQUFBO0FBQ0o7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUNSO0FBRUk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUVBLGlCQUFBO0FBRFI7QUFFUTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFaO0FBQ1k7RUFDSSxnQ0FBQTtBQUNoQjtBQUVRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBQVo7QUFFUTtFQUNJLGNBQUE7QUFBWjtBQUVRO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFBWjtBQUNZO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBQ2hCO0FBRVE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLCtEQUFBO0VBQ0EsWUFBQTtBQUFaO0FBSVE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFGWiIsImZpbGUiOiJhYm91dC11cy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA4MHB4IDA7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgICAgID4gOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgY29sb3I6ICNFODFDMkU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206ICNFODFDMkUgMnB4IHNvbGlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0M3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0U4MUMyRTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFODFDMkU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDMwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgZWFzZS1pbiAwLjE1cywgYmFja2dyb3VuZC1jb2xvciBlYXNlLWluIDAuMTVzO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmN1c3RvbS1idXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyQzQ1O1xyXG4gICAgICAgICAgICBjb2xvcjogI0U4MUMyRTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */", "@media screen and (max-width: 1199px) {\n  .about[_ngcontent-%COMP%] {\n    position: relative;\n    right: 2%;\n  }\n  .about[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 42%;\n  }\n  .about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 42%;\n  }\n}\n@media screen and (max-width: 991px) {\n  .about[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .about[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70%;\n    margin-bottom: 50px;\n  }\n  .about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 70%;\n    margin-left: 0;\n  }\n}\n@media screen and (max-width: 767px) {\n  .about[_ngcontent-%COMP%] {\n    margin: 50px 0;\n  }\n  .about[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n  .about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .about[_ngcontent-%COMP%] {\n    margin: 40px 0;\n  }\n  .about[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n  }\n  .about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhYm91dC11cy1zZWN0aW9uLmNvbXBvbmVudC5xdWVyeS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDRSxrQkFBQTtJQUNBLFNBQUE7RUFDSjtFQUFNO0lBQ0ksVUFBQTtFQUVWO0VBQUk7SUFDSSxVQUFBO0VBRVI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLG1CQUFBO0VBQUY7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQUNKO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsY0FBQTtFQUNKO0FBQ0Y7QUFLQTtFQUNFO0lBQ0UsY0FBQTtFQUhGO0VBS0U7SUFDRSxVQUFBO0VBSEo7RUFNRTtJQUNFLFVBQUE7RUFKSjtFQU1JO0lBQ0UsZUFBQTtFQUpOO0VBT0k7SUFDRSxlQUFBO0VBTE47RUFPSTtJQUNFLGVBQUE7RUFMTjtFQU9JO0lBQ0UsZUFBQTtFQUxOO0FBQ0Y7QUFjQTtFQUNFO0lBQ0UsY0FBQTtFQVpGO0VBYUk7SUFDRSxtQkFBQTtFQVhOO0VBZ0JJO0lBQ0UsZUFBQTtFQWROO0FBQ0YiLCJmaWxlIjoiYWJvdXQtdXMtc2VjdGlvbi5jb21wb25lbnQucXVlcnkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gICAgLmFib3V0IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICByaWdodDogMiU7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQyJTtcclxuICAgICAgICB9XHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgIHdpZHRoOiA0MiU7XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAuYWJvdXQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuYWJvdXQge1xyXG4gICAgbWFyZ2luOiA1MHB4IDA7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuXHJcbiAgICB9XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcblxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIHVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgICAgYXBwLWJ1dHRvbiAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgLmFib3V0IHtcclxuICAgIG1hcmdpbjogNDBweCAwO1xyXG4gICAgICBpbWd7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgfVxyXG4gICAgLmNvbnRlbnQge1xyXG5cclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-us-section',
                templateUrl: './about-us-section.component.html',
                styleUrls: ['./about-us-section.component.scss', './about-us-section.component.query.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "CRk3":
/*!*******************************************************************!*\
  !*** ./src/app/sections/washing-plans/washing-plans.component.ts ***!
  \*******************************************************************/
/*! exports provided: WashingPlansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WashingPlansComponent", function() { return WashingPlansComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_template_components_section_template_section_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/template-components/section-template/section-template.component */ "E8Af");
/* harmony import */ var _shared_components_plan_box_plan_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/plan-box/plan-box.component */ "Djb3");




const _c0 = function () { return { label: "Seats Washing", state: true }; };
const _c1 = function () { return { label: "Vacuum Cleaning", state: true }; };
const _c2 = function () { return { label: "Exterior Cleaning", state: true }; };
const _c3 = function () { return { label: "Interior Wet Cleaning", state: false }; };
const _c4 = function () { return { label: "Window Wiping", state: false }; };
const _c5 = function (a0, a1, a2, a3, a4) { return [a0, a1, a2, a3, a4]; };
const _c6 = function () { return { label: "Interior Wet Cleaning", state: true }; };
const _c7 = function () { return { label: "Window Wiping", state: true }; };
class WashingPlansComponent {
    constructor() { }
    ngOnInit() {
    }
}
WashingPlansComponent.ɵfac = function WashingPlansComponent_Factory(t) { return new (t || WashingPlansComponent)(); };
WashingPlansComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WashingPlansComponent, selectors: [["app-washing-plans"]], decls: 5, vars: 45, consts: [["title", "Washing Plan", "description", "Choose Your Plan"], [1, "plans"], [3, "boxType", "title", "price", "list"]], template: function WashingPlansComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-section-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-plan-box", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-plan-box", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-plan-box", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("boxType", "secondary")("title", "Basic Cleaning")("price", 25)("list", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](17, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c4)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("boxType", "main")("title", "Premium Cleaning")("price", 35)("list", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](28, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c6), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c4)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("boxType", "secondary")("title", "Complex Cleaning")("price", 49)("list", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](39, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c6), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c7)));
    } }, directives: [_shared_template_components_section_template_section_template_component__WEBPACK_IMPORTED_MODULE_1__["SectionTemplateComponent"], _shared_components_plan_box_plan_box_component__WEBPACK_IMPORTED_MODULE_2__["PlanBoxComponent"]], styles: [".plans[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin: 35px 0;\n  padding: 0 5%;\n  justify-content: center;\n}\n.plans[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx3YXNoaW5nLXBsYW5zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBREY7QUFFRTtFQUNFLFVBQUE7QUFBSiIsImZpbGUiOiJ3YXNoaW5nLXBsYW5zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4ucGxhbnMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAzNXB4IDA7XHJcbiAgcGFkZGluZzogMCA1JTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICA+ICoge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICB9XHJcbn1cclxuIl19 */", "@media screen and (max-width: 1199px) {\n  .plans[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .plans[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 33.33%;\n  }\n}\n@media screen and (max-width: 767px) {\n  .plans[_ngcontent-%COMP%] {\n    margin: 0;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 0;\n  }\n  .plans[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n@media screen and (max-width: 575px) {\n  .plans[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 0;\n  }\n  .plans[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx3YXNoaW5nLXBsYW5zLmNvbXBvbmVudC5xdWVyeS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxVQUFBO0VBQ0Y7RUFBRTtJQUNFLGFBQUE7RUFFSjtBQUNGO0FBRUE7RUFDRTtJQUNFLFNBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VBQUY7RUFDRTtJQUNFLFVBQUE7RUFDSjtBQUNGO0FBR0E7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUFERjtFQUVFO0lBQ0UsVUFBQTtFQUFKO0FBQ0YiLCJmaWxlIjoid2FzaGluZy1wbGFucy5jb21wb25lbnQucXVlcnkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gIC5wbGFucyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgPiAqIHtcclxuICAgICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLnBsYW5zIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgPiAqIHtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgLnBsYW5zIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgPiAqIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WashingPlansComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-washing-plans',
                templateUrl: './washing-plans.component.html',
                styleUrls: ['./washing-plans.component.scss', './washing-plans.component.query.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Djb3":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/plan-box/plan-box.component.ts ***!
  \******************************************************************/
/*! exports provided: PlanBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanBoxComponent", function() { return PlanBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/button.component */ "VkHG");




function PlanBoxComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listItem_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", listItem_r3.state ? "fa-check-circle" : "fa-times-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", listItem_r3.label, " ");
} }
function PlanBoxComponent_app_button_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Learn More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultBackgroundColor", "#E81C2E")("animatedBackgroundColor", "#202C45")("defaultTextColor", "#FFFFFF")("animatedTextColor", "#E81C2E");
} }
function PlanBoxComponent_app_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Learn More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultBackgroundColor", "#202C45")("animatedBackgroundColor", "#E81C2E")("defaultTextColor", "#E81C2E")("animatedTextColor", "#FFFFFF");
} }
class PlanBoxComponent {
    // TODO: change later to interface implementation
    constructor() {
        this.boxType = 'main';
        this.title = '';
        this.price = 0;
    }
    ngOnInit() {
    }
}
PlanBoxComponent.ɵfac = function PlanBoxComponent_Factory(t) { return new (t || PlanBoxComponent)(); };
PlanBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlanBoxComponent, selectors: [["app-plan-box"]], inputs: { boxType: "boxType", title: "title", price: "price", list: "list" }, decls: 14, vars: 11, consts: [[1, "box-body"], [4, "ngFor", "ngForOf"], [3, "defaultBackgroundColor", "animatedBackgroundColor", "defaultTextColor", "animatedTextColor", 4, "ngIf"], [1, "far", 3, "ngClass"], [3, "defaultBackgroundColor", "animatedBackgroundColor", "defaultTextColor", "animatedTextColor"]], template: function PlanBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ".99");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PlanBoxComponent_li_11_Template, 3, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PlanBoxComponent_app_button_12_Template, 2, 4, "app-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlanBoxComponent_app_button_13_Template, 2, 4, "app-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("have-shadow", ctx.boxType == "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.boxType == "main" ? "#E81C2E" : "#202C45");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.boxType == "main" ? "#E81C2E" : "#202C45");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boxType == "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boxType == "secondary");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]], styles: [".box-body[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 55px 0;\n  border-radius: 5px;\n}\n.box-body.have-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);\n}\n.box-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.box-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 25px;\n  font-weight: 700;\n}\n.box-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.box-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  top: 12px;\n  left: -20px;\n}\n.box-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  top: 8px;\n  right: -35px;\n}\n.box-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 60px;\n}\n.box-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  line-height: 2.2;\n  padding: 0;\n  text-align: center;\n  margin: 15px 0;\n}\n.box-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.box-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i.fa-times-circle[_ngcontent-%COMP%] {\n  color: #cccccc;\n}\n.box-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i.fa-check-circle[_ngcontent-%COMP%] {\n  color: #39B972;\n}\n.box-body[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n  margin-top: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGxhbi1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsdUNBQUE7QUFDSjtBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFKO0FBQ0k7RUFDRSxrQkFBQTtBQUNOO0FBQU07RUFDRSxTQUFBO0VBQ0EsV0FBQTtBQUVSO0FBQU07RUFDRSxRQUFBO0VBQ0EsWUFBQTtBQUVSO0FBRUk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFBTjtBQUtFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFISjtBQUtJO0VBQ0Usa0JBQUE7QUFITjtBQUtNO0VBQ0UsY0FBQTtBQUhSO0FBS007RUFDRSxjQUFBO0FBSFI7QUFRRTtFQUNFLGdCQUFBO0FBTkoiLCJmaWxlIjoicGxhbi1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94LWJvZHkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDU1cHggMDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICYuaGF2ZS1zaGFkb3cge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDMwcHggcmdiKDAgMCAwIC8gMjAlKTtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICB9XHJcbiAgaDIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHNwYW4ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHRvcDogMTJweDtcclxuICAgICAgICBsZWZ0OiAtMjBweDtcclxuICAgICAgfVxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgIHJpZ2h0OiAtMzVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0cm9uZyB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogMi4yO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG5cclxuICAgIGkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICAmLmZhLXRpbWVzLWNpcmNsZSB7XHJcbiAgICAgICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgICAgIH1cclxuICAgICAgJi5mYS1jaGVjay1jaXJjbGUge1xyXG4gICAgICAgIGNvbG9yOiAjMzlCOTcyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhcHAtYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-plan-box',
                templateUrl: './plan-box.component.html',
                styleUrls: ['./plan-box.component.scss']
            }]
    }], function () { return []; }, { boxType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], price: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "E8Af":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/template-components/section-template/section-template.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SectionTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTemplateComponent", function() { return SectionTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class SectionTemplateComponent {
    constructor() {
        this.title = '';
        this.description = '';
    }
    ngOnInit() {
    }
}
SectionTemplateComponent.ɵfac = function SectionTemplateComponent_Factory(t) { return new (t || SectionTemplateComponent)(); };
SectionTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionTemplateComponent, selectors: [["app-section-template"]], inputs: { title: "title", description: "description" }, ngContentSelectors: _c0, decls: 6, vars: 2, consts: [[1, "section-title"], [1, "section-description"]], template: function SectionTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
    } }, styles: ["section[_ngcontent-%COMP%] {\n  margin: 60px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nsection[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #E81C2E;\n  text-transform: uppercase;\n  font-weight: 700;\n  letter-spacing: 4px;\n}\nsection[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]::after {\n  content: \" \";\n  border: 1px solid #E81C2E;\n  display: block;\n  width: 80px;\n  margin: auto;\n}\nsection[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-weight: 700;\n  font-size: 45px;\n  margin-bottom: 30px;\n  text-align: center;\n}\nsection[_ngcontent-%COMP%]   .staff-cards[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  margin: 20px 0;\n  justify-content: center;\n}\nsection[_ngcontent-%COMP%]   .staff-cards[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 16%;\n  margin-right: 45px;\n  text-align: center;\n}\nsection[_ngcontent-%COMP%]   .staff-cards[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VjdGlvbi10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQUU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFBSTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVOO0FBRUU7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFESjtBQUdJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFETjtBQUdNO0VBQ0UsZUFBQTtBQURSIiwiZmlsZSI6InNlY3Rpb24tdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBtYXJnaW46IDYwcHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICBjb2xvcjogI0U4MUMyRTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTgxQzJFO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWRlc2NyaXB0aW9uIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc3RhZmYtY2FyZHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICA+ICoge1xyXG4gICAgICB3aWR0aDogMTYlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section-template',
                templateUrl: './section-template.component.html',
                styleUrls: ['./section-template.component.scss']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "F6Ee":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/person-card/person-card.component.ts ***!
  \************************************************************************/
/*! exports provided: PersonCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonCardComponent", function() { return PersonCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PersonCardComponent {
    // TODO: make interface for socialMediaLinks object type
    constructor() {
        this.name = '';
        this.job = '';
        this.imgLink = '';
    }
    ngOnInit() {
    }
}
PersonCardComponent.ɵfac = function PersonCardComponent_Factory(t) { return new (t || PersonCardComponent)(); };
PersonCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonCardComponent, selectors: [["app-person-card"]], inputs: { name: "name", job: "job", imgLink: "imgLink", socialMediaLinks: "socialMediaLinks" }, decls: 17, vars: 7, consts: [[1, "card"], [1, "img-box"], ["alt", "", 3, "src"], [1, "description"], [1, "social-media-buttons"], [3, "href"], [1, "fab", "fa-twitter"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-linkedin-in"], [1, "fab", "fa-instagram"]], template: function PersonCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/img/" + ctx.imgLink + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.socialMediaLinks.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.socialMediaLinks.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.socialMediaLinks.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.socialMediaLinks.instagram, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job);
    } }, styles: [".card[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  object-fit: cover;\n  width: 100%;\n}\n.card[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  border-radius: 5px 5px 0 0;\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  transition: transform 0.3s ease;\n}\n.card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  background-color: #202C45;\n  border-radius: 0 0 5px 5px;\n  color: #FFFFFF;\n  display: flex;\n  flex-direction: column;\n  height: 130px;\n  justify-content: center;\n  position: relative;\n}\n.card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  letter-spacing: 2px;\n  margin: 10px;\n}\n.card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .social-media-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  left: 50%;\n  position: absolute;\n  top: -20px;\n  transform: translateX(-50%);\n}\n.card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .social-media-buttons[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  background-color: #202C45;\n  border-radius: 100%;\n  color: white;\n  height: 40px;\n  margin-right: 5px;\n  padding: 10px;\n  width: 40px;\n  cursor: pointer;\n  transition: background-color 0.3s ease, color 0.3s ease;\n}\n.card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .social-media-buttons[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .social-media-buttons[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:hover {\n  color: #202C45;\n}\n.card[_ngcontent-%COMP%]:hover   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.card[_ngcontent-%COMP%]:hover   .description[_ngcontent-%COMP%] {\n  background-color: #E81C2E;\n  transition: background-color 0.3s ease;\n}\n.card[_ngcontent-%COMP%]:hover   .description[_ngcontent-%COMP%]   .social-media-buttons[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  background-color: #E81C2E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGVyc29uLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNFLFdBQUE7RUFDQSwrQkFBQTtBQUVOO0FBRUU7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUFOO0FBR0k7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7QUFETjtBQUdNO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx1REFBQTtBQURSO0FBR1E7RUFDRSxlQUFBO0FBRFY7QUFJUTtFQUNFLGNBQUE7QUFGVjtBQVdRO0VBQ0UscUJBQUE7QUFUVjtBQVlNO0VBQ0UseUJBQUE7RUFDQSxzQ0FBQTtBQVZSO0FBWVU7RUFDRSx5QkFBQTtBQVZaIiwiZmlsZSI6InBlcnNvbi1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLmltZy1ib3gge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDAgO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDJDNDU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc29jaWFsLW1lZGlhLWJ1dHRvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLTIwcHg7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHJcbiAgICAgID4gKiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMkM0NTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIGNvbG9yIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICMyMDJDNDU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAuaW1nLWJveCB7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U4MUMyRTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICAgICAgICAuc29jaWFsLW1lZGlhLWJ1dHRvbnMge1xyXG4gICAgICAgICAgPiAqIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U4MUMyRTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-person-card',
                templateUrl: './person-card.component.html',
                styleUrls: ['./person-card.component.scss']
            }]
    }], function () { return []; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], job: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imgLink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], socialMediaLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "FroJ":
/*!******************************************************************!*\
  !*** ./src/app/pages/blog-grid-page/blog-grid-page.component.ts ***!
  \******************************************************************/
/*! exports provided: BlogGridPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogGridPageComponent", function() { return BlogGridPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_page_nav_page_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/page-nav/page-nav.component */ "ztht");
/* harmony import */ var _shared_template_components_section_template_section_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/template-components/section-template/section-template.component */ "E8Af");
/* harmony import */ var _shared_components_article_card_article_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/article-card/article-card.component */ "bk/Q");
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/pagination/pagination.component */ "NhFE");






const _c0 = function () { return { label: "home", link: "" }; };
const _c1 = function () { return { label: "Blog", link: "" }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
class BlogGridPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogGridPageComponent.ɵfac = function BlogGridPageComponent_Factory(t) { return new (t || BlogGridPageComponent)(); };
BlogGridPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogGridPageComponent, selectors: [["app-blog-grid-page"]], decls: 10, vars: 6, consts: [["title", "Blog Grid", 3, "items"], ["title", "Our Blog", "description", "Latest News & Articles"], [1, "articles"]], template: function BlogGridPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-section-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-article-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-article-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-article-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-article-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-article-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-article-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pagination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1)));
    } }, directives: [_shared_components_page_nav_page_nav_component__WEBPACK_IMPORTED_MODULE_1__["PageNavComponent"], _shared_template_components_section_template_section_template_component__WEBPACK_IMPORTED_MODULE_2__["SectionTemplateComponent"], _shared_components_article_card_article_card_component__WEBPACK_IMPORTED_MODULE_3__["ArticleCardComponent"], _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__["PaginationComponent"]], styles: [".articles[_ngcontent-%COMP%] {\n  width: 73%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 20px 0 0;\n}\n.articles[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n.articles[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxibG9nLWdyaWQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsU0FBQTtBQUNKO0FBRUU7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQUFKIiwiZmlsZSI6ImJsb2ctZ3JpZC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFydGljbGVzIHtcclxuICB3aWR0aDogNzMlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMjBweCAwIDA7XHJcblxyXG4gIDpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gID4gKiB7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */", "@media screen and (max-width: 1199px) {\n  .articles[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .articles[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n}\n@media screen and (max-width: 991px) {\n  .articles[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n  .articles[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxibG9nLWdyaWQtcGFnZS5jb21wb25lbnQucXVlcnkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsV0FBQTtFQUNGO0VBQUU7SUFDRSxZQUFBO0VBRUo7QUFDRjtBQUVBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFQUFGO0VBQ0U7SUFDRSxVQUFBO0VBQ0o7QUFDRiIsImZpbGUiOiJibG9nLWdyaWQtcGFnZS5jb21wb25lbnQucXVlcnkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gIC5hcnRpY2xlcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgID4gKiB7XHJcbiAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLmFydGljbGVzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgPiAqIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogGridPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-grid-page',
                templateUrl: './blog-grid-page.component.html',
                styleUrls: ['./blog-grid-page.component.scss', 'blog-grid-page.component.query.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "GJ9t":
/*!*******************************************************************************!*\
  !*** ./src/app/sections/testemonial-section/testemonial-section.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TestemonialSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestemonialSectionComponent", function() { return TestemonialSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_template_components_section_template_section_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/template-components/section-template/section-template.component */ "E8Af");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");




function TestemonialSectionComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Client Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profession");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TestemonialSectionComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Client Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profession");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TestemonialSectionComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Client Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profession");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TestemonialSectionComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Client Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profession");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TestemonialSectionComponent {
    constructor() {
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            autoplay: true,
            autoplaySpeed: 2000,
            autoplayTimeout: 4000,
            dots: true,
            dotsEach: 1,
            navSpeed: 700,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                740: {
                    items: 2
                },
                940: {
                    items: 3
                }
            },
            nav: false
        };
    }
    ngOnInit() {
    }
}
TestemonialSectionComponent.ɵfac = function TestemonialSectionComponent_Factory(t) { return new (t || TestemonialSectionComponent)(); };
TestemonialSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestemonialSectionComponent, selectors: [["app-testemonial-carousel"]], decls: 6, vars: 1, consts: [["title", "Testimonial", "description", "What our clients say"], [3, "options"], ["carouselSlide", "", "class", "owl-carousel-slide"], ["src", "assets/img/testimonial-1.jpg", "alt", ""]], template: function TestemonialSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-section-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "owl-carousel-o", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TestemonialSectionComponent_ng_template_2_Template, 8, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TestemonialSectionComponent_ng_template_3_Template, 8, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TestemonialSectionComponent_ng_template_4_Template, 8, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TestemonialSectionComponent_ng_template_5_Template, 8, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
    } }, directives: [_shared_template_components_section_template_section_template_component__WEBPACK_IMPORTED_MODULE_1__["SectionTemplateComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselSlideDirective"]], styles: ["owl-carousel-o[_ngcontent-%COMP%] {\n  margin: 40px 0;\n  width: 72%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZXN0ZW1vbmlhbC1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUFBSiIsImZpbGUiOiJ0ZXN0ZW1vbmlhbC1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgb3dsLWNhcm91c2VsLW8ge1xyXG4gICAgbWFyZ2luOiA0MHB4IDAgO1xyXG4gICAgd2lkdGg6IDcyJTtcclxuICB9XHJcbiJdfQ== */", "@media screen and (max-width: 1199px) {\n  owl-carousel-o[_ngcontent-%COMP%] {\n    margin: 30px 0;\n    width: 90%;\n  }\n}\n@media screen and (max-width: 767px) {\n  owl-carousel-o[_ngcontent-%COMP%] {\n    margin: 10px 0;\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZXN0ZW1vbmlhbC1zZWN0aW9uLmNvbXBvbmVudC5xdWVyeS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsVUFBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNJO0lBQ0UsY0FBQTtJQUNBLFVBQUE7RUFBSjtBQUNGIiwiZmlsZSI6InRlc3RlbW9uaWFsLXNlY3Rpb24uY29tcG9uZW50LnF1ZXJ5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICBvd2wtY2Fyb3VzZWwtbyB7XHJcbiAgICBtYXJnaW46IDMwcHggMDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgb3dsLWNhcm91c2VsLW8ge1xyXG4gICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestemonialSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-testemonial-carousel',
                templateUrl: './testemonial-section.component.html',
                styleUrls: ['./testemonial-section.component.scss', 'testemonial-section.component.query.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "HAI7":
/*!*****************************************************************************!*\
  !*** ./src/app/sections/what-we-do-section/what-we-do-section.component.ts ***!
  \*****************************************************************************/
/*! exports provided: WhatWeDoSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatWeDoSectionComponent", function() { return WhatWeDoSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_template_components_section_template_section_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/template-components/section-template/section-template.component */ "E8Af");



class WhatWeDoSectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
WhatWeDoSectionComponent.ɵfac = function WhatWeDoSectionComponent_Factory(t) { return new (t || WhatWeDoSectionComponent)(); };
WhatWeDoSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WhatWeDoSectionComponent, selectors: [["app-what-we-do-section"]], decls: 50, vars: 0, consts: [["title", "What We Do", "description", "Premium Washing Service"], [1, "grid-container", "gradiant"], [1, "grid-item"], [1, "flaticon-car-wash-1", "gradiant"], [1, "flaticon-car-wash", "gradiant"], [1, "flaticon-vacuum-cleaner", "gradiant"], [1, "flaticon-seat", "gradiant"], [1, "flaticon-car-service", "gradiant"], [1, "flaticon-car-service-2", "gradiant"], [1, "flaticon-brush-1", "gradiant"]], template: function WhatWeDoSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-section-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Exterior Washing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Interior Washing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Vacuum Cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Seats Washing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Window Wiping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Wet Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Oil Changing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Brake Repairing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_template_components_section_template_section_template_component__WEBPACK_IMPORTED_MODULE_1__["SectionTemplateComponent"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  width: 80%;\n  display: grid;\n  grid-template: repeat(2, 250px)/repeat(4, 23%);\n  justify-items: center;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  margin: 30px 0;\n  column-gap: 1%;\n}\n.grid-container[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 75px;\n}\n.grid-container[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  font-size: 25px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx3aGF0LXdlLWRvLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQURGO0FBR0k7RUFDRSxlQUFBO0FBRE47QUFHSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFETiIsImZpbGUiOiJ3aGF0LXdlLWRvLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgyLCAyNTBweCkgLyByZXBlYXQoNCwgMjMlKTtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgY29sdW1uLWdhcDogMSU7XHJcbiAgLmdyaWQtaXRlbSB7XHJcbiAgICBpe1xyXG4gICAgICBmb250LXNpemU6IDc1cHg7XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */", "@media screen and (max-width: 1199px) {\n  .grid-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .grid-container[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 75px;\n  }\n  .grid-container[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin: 8px 0;\n    font-size: 20px;\n  }\n  .grid-container[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 991px) {\n  .grid-container[_ngcontent-%COMP%] {\n    grid-template: repeat(4, 200px)/repeat(2, 70%);\n    justify-content: center;\n    margin: 10px 0;\n    width: 70%;\n  }\n  .grid-container[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n    margin: 0;\n    width: 70%;\n  }\n  .grid-container[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin: 5px 0;\n    font-size: 20px;\n    font-weight: 600;\n  }\n  .grid-container[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n@media screen and (max-width: 767px) {\n  .grid-container[_ngcontent-%COMP%] {\n    grid-template: repeat(8, 200px)/repeat(1, 70%);\n    justify-content: center;\n    margin: 10px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx3aGF0LXdlLWRvLXNlY3Rpb24uY29tcG9uZW50LnF1ZXJ5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNFLFdBQUE7RUFDSjtFQUNNO0lBQ0UsZUFBQTtFQUNSO0VBQ007SUFDRSxhQUFBO0lBQ0EsZUFBQTtFQUNSO0VBQ007SUFDRSxlQUFBO0VBQ1I7QUFDRjtBQUlBO0VBQ0U7SUFDRSw4Q0FBQTtJQUNBLHVCQUFBO0lBQ0EsY0FBQTtJQUNBLFVBQUE7RUFGRjtFQUdFO0lBQ0UsU0FBQTtJQUNBLFVBQUE7RUFESjtFQUdJO0lBQ0UsYUFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQUROO0VBR0E7SUFDRSxnQkFBQTtFQURGO0FBQ0Y7QUFRQTtFQUNFO0lBQ0UsOENBQUE7SUFDQSx1QkFBQTtJQUNBLGNBQUE7RUFORjtBQUNGIiwiZmlsZSI6IndoYXQtd2UtZG8tc2VjdGlvbi5jb21wb25lbnQucXVlcnkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gICAgLmdyaWQtY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICAgIGl7XHJcbiAgICAgICAgICBmb250LXNpemU6IDc1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNCwgMjAwcHgpIC8gcmVwZWF0KDIsIDcwJSk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmdyaWQtY29udGFpbmVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg4LCAyMDBweCkgLyByZXBlYXQoMSwgNzAlKTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhatWeDoSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-what-we-do-section',
                templateUrl: './what-we-do-section.component.html',
                styleUrls: ['./what-we-do-section.component.scss', './what-we-do-section.component.query.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LiVn":
/*!*****************************************************************************!*\
  !*** ./src/app/sections/milestones-section/milestones-section.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MilestonesSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilestonesSectionComponent", function() { return MilestonesSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_milestone_counter_milestone_counter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/milestone-counter/milestone-counter.component */ "o32y");



class MilestonesSectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
MilestonesSectionComponent.ɵfac = function MilestonesSectionComponent_Factory(t) { return new (t || MilestonesSectionComponent)(); };
MilestonesSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MilestonesSectionComponent, selectors: [["app-milestones-section"]], decls: 5, vars: 12, consts: [[3, "icon", "digit", "text"]], template: function MilestonesSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-milestone-counter", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-milestone-counter", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-milestone-counter", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-milestone-counter", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "fa fa-map-marker-alt")("digit", 25)("text", "Service Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "fa fa-user")("digit", 350)("text", "Engineers & Workers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "fa fa-users")("digit", 1500)("text", "Happy Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "fa fa-check")("digit", 5000)("text", "Projects Completed");
    } }, directives: [_shared_components_milestone_counter_milestone_counter_component__WEBPACK_IMPORTED_MODULE_1__["MilestoneCounterComponent"]], styles: ["section[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 100%;\n  background-color: #202C45;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 0 120px;\n  flex-wrap: wrap;\n}\nsection[_ngcontent-%COMP%]   app-milestone-counter[_ngcontent-%COMP%] {\n  width: 20%;\n  position: relative;\n  right: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtaWxlc3RvbmVzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDRjtBQUFFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUVKIiwiZmlsZSI6Im1pbGVzdG9uZXMtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMkM0NTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgcGFkZGluZzogMCAxMjBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYXBwLW1pbGVzdG9uZS1jb3VudGVyIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogNDBweDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */", "@media screen and (max-width: 1399px) {\n  section[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n@media screen and (max-width: 991px) {\n  section[_ngcontent-%COMP%]   app-milestone-counter[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\n@media screen and (max-width: 767px) {\n  section[_ngcontent-%COMP%] {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    padding: 20px 0;\n  }\n  section[_ngcontent-%COMP%]   app-milestone-counter[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 25px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtaWxlc3RvbmVzLXNlY3Rpb24uY29tcG9uZW50LnF1ZXJ5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLFVBQUE7RUFDRjtBQUNGO0FBRUE7RUFFSTtJQUNFLFVBQUE7RUFESjtBQUNGO0FBS0E7RUFDRTtJQUNFLDJCQUFBO0lBQUEsd0JBQUE7SUFBQSxtQkFBQTtJQUNBLGVBQUE7RUFIRjtFQUlFO0lBQ0UsVUFBQTtJQUNBLGNBQUE7RUFGSjtBQUNGIiwiZmlsZSI6Im1pbGVzdG9uZXMtc2VjdGlvbi5jb21wb25lbnQucXVlcnkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzOTlweCkge1xyXG4gIHNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgc2VjdGlvbiB7XHJcbiAgICBhcHAtbWlsZXN0b25lLWNvdW50ZXIge1xyXG4gICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICBzZWN0aW9uIHtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBhcHAtbWlsZXN0b25lLWNvdW50ZXIge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBtYXJnaW46IDI1cHggMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MilestonesSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-milestones-section',
                templateUrl: './milestones-section.component.html',
                styleUrls: ['./milestones-section.component.scss', './milestones-section.component.query.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "NhFE":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/pagination/pagination.component.ts ***!
  \**********************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PaginationComponent {
    constructor() { }
    ngOnInit() {
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["app-pagination"]], decls: 17, vars: 0, consts: [[1, "pag-body"], ["href", "", 1, "disabled"], ["href", ""], ["href", "", 1, "active"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".pag-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n}\n.pag-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child)   a[_ngcontent-%COMP%] {\n  border-right: none;\n}\n.pag-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 11px;\n  border: 1px solid #202C45;\n  text-decoration: none;\n  color: #202C45;\n  height: 100%;\n  transition: 0.5s;\n}\n.pag-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: #202C45;\n  color: #E81C2E;\n}\n.pag-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #202C45;\n  color: #E81C2E;\n}\n.pag-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);\n  outline: 0;\n}\n.pag-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%] {\n  color: #999999;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtBQUFKO0FBR1E7RUFDRSxrQkFBQTtBQURWO0FBS007RUFFRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBSlI7QUFLUTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUhWO0FBT1E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFMVjtBQVFRO0VBQ0UsNkNBQUE7RUFDQSxVQUFBO0FBTlY7QUFRUTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtBQU5WIiwiZmlsZSI6InBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnLWJvZHkge1xyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBsaSB7XHJcbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBhIHtcclxuXHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMDJDNDU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjMjAyQzQ1O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDJDNDU7XHJcbiAgICAgICAgICBjb2xvcjogI0U4MUMyRTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDJDNDU7XHJcbiAgICAgICAgICBjb2xvcjogI0U4MUMyRTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYigwIDEyMyAyNTUgLyAyNSUpO1xyXG4gICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgICAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pagination',
                templateUrl: './pagination.component.html',
                styleUrls: ['./pagination.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-routing.module */ "Sj5B");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/button/button.component */ "VkHG");
/* harmony import */ var _components_milestone_counter_milestone_counter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/milestone-counter/milestone-counter.component */ "o32y");
/* harmony import */ var _components_plan_box_plan_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/plan-box/plan-box.component */ "Djb3");
/* harmony import */ var _components_person_card_person_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/person-card/person-card.component */ "F6Ee");
/* harmony import */ var _components_article_card_article_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/article-card/article-card.component */ "bk/Q");
/* harmony import */ var _components_page_nav_page_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page-nav/page-nav.component */ "ztht");
/* harmony import */ var _template_components_section_template_section_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template-components/section-template/section-template.component */ "E8Af");
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pagination/pagination.component */ "NhFE");












class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_routing_module__WEBPACK_IMPORTED_MODULE_2__["SharedRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"],
        _components_milestone_counter_milestone_counter_component__WEBPACK_IMPORTED_MODULE_4__["MilestoneCounterComponent"],
        _components_plan_box_plan_box_component__WEBPACK_IMPORTED_MODULE_5__["PlanBoxComponent"],
        _components_person_card_person_card_component__WEBPACK_IMPORTED_MODULE_6__["PersonCardComponent"],
        _components_article_card_article_card_component__WEBPACK_IMPORTED_MODULE_7__["ArticleCardComponent"],
        _components_page_nav_page_nav_component__WEBPACK_IMPORTED_MODULE_8__["PageNavComponent"],
        _template_components_section_template_section_template_component__WEBPACK_IMPORTED_MODULE_9__["SectionTemplateComponent"],
        _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__["PaginationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_routing_module__WEBPACK_IMPORTED_MODULE_2__["SharedRoutingModule"]], exports: [_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"],
        _components_milestone_counter_milestone_counter_component__WEBPACK_IMPORTED_MODULE_4__["MilestoneCounterComponent"],
        _components_plan_box_plan_box_component__WEBPACK_IMPORTED_MODULE_5__["PlanBoxComponent"],
        _components_person_card_person_card_component__WEBPACK_IMPORTED_MODULE_6__["PersonCardComponent"],
        _components_article_card_article_card_component__WEBPACK_IMPORTED_MODULE_7__["ArticleCardComponent"],
        _components_page_nav_page_nav_component__WEBPACK_IMPORTED_MODULE_8__["PageNavComponent"],
        _template_components_section_template_section_template_component__WEBPACK_IMPORTED_MODULE_9__["SectionTemplateComponent"],
        _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__["PaginationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"],
                    _components_milestone_counter_milestone_counter_component__WEBPACK_IMPORTED_MODULE_4__["MilestoneCounterComponent"],
                    _components_plan_box_plan_box_component__WEBPACK_IMPORTED_MODULE_5__["PlanBoxComponent"],
                    _components_person_card_person_card_component__WEBPACK_IMPORTED_MODULE_6__["PersonCardComponent"],
                    _components_article_card_article_card_component__WEBPACK_IMPORTED_MODULE_7__["ArticleCardComponent"],
                    _components_page_nav_page_nav_component__WEBPACK_IMPORTED_MODULE_8__["PageNavComponent"],
                    _template_components_section_template_section_template_component__WEBPACK_IMPORTED_MODULE_9__["SectionTemplateComponent"],
                    _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__["PaginationComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_routing_module__WEBPACK_IMPORTED_MODULE_2__["SharedRoutingModule"]
                ],
                exports: [
                    _components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"],
                    _components_milestone_counter_milestone_counter_component__WEBPACK_IMPORTED_MODULE_4__["MilestoneCounterComponent"],
                    _components_plan_box_plan_box_component__WEBPACK_IMPORTED_MODULE_5__["PlanBoxComponent"],
                    _components_person_card_person_card_component__WEBPACK_IMPORTED_MODULE_6__["PersonCardComponent"],
                    _components_article_card_article_card_component__WEBPACK_IMPORTED_MODULE_7__["ArticleCardComponent"],
                    _components_page_nav_page_nav_component__WEBPACK_IMPORTED_MODULE_8__["PageNavComponent"],
                    _template_components_section_template_section_template_component__WEBPACK_IMPORTED_MODULE_9__["SectionTemplateComponent"],
                    _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__["PaginationComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Q963":
/*!**************************************************************!*\
  !*** ./src/app/pages/service-page/service-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ServicePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePageComponent", function() { return ServicePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_page_nav_page_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/page-nav/page-nav.component */ "ztht");
/* harmony import */ var _sections_what_we_do_section_what_we_do_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sections/what-we-do-section/what-we-do-section.component */ "HAI7");
/* harmony import */ var _sections_testemonial_section_testemonial_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sections/testemonial-section/testemonial-section.component */ "GJ9t");





const _c0 = function () { return { label: "home", link: "" }; };
const _c1 = function () { return { label: "Service", link: "" }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
class ServicePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServicePageComponent.ɵfac = function ServicePageComponent_Factory(t) { return new (t || ServicePageComponent)(); };
ServicePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicePageComponent, selectors: [["app-service-page"]], decls: 3, vars: 6, consts: [["title", "Service", 3, "items"]], template: function ServicePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-what-we-do-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-testemonial-carousel");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1)));
    } }, directives: [_shared_components_page_nav_page_nav_component__WEBPACK_IMPORTED_MODULE_1__["PageNavComponent"], _sections_what_we_do_section_what_we_do_section_component__WEBPACK_IMPORTED_MODULE_2__["WhatWeDoSectionComponent"], _sections_testemonial_section_testemonial_section_component__WEBPACK_IMPORTED_MODULE_3__["TestemonialSectionComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-service-page',
                templateUrl: './service-page.component.html',
                styleUrls: ['./service-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "S9m1":
/*!************************************************************!*\
  !*** ./src/app/pages/detail-page/detail-page.component.ts ***!
  \************************************************************/
/*! exports provided: DetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageComponent", function() { return DetailPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_page_nav_page_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/page-nav/page-nav.component */ "ztht");



const _c0 = function () { return { label: "home", link: "" }; };
const _c1 = function () { return { label: "Detail", link: "" }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
class DetailPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
DetailPageComponent.ɵfac = function DetailPageComponent_Factory(t) { return new (t || DetailPageComponent)(); };
DetailPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailPageComponent, selectors: [["app-detail-page"]], decls: 1, vars: 6, consts: [["title", "Details", 3, "items"]], template: function DetailPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-nav", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1)));
    } }, directives: [_shared_components_page_nav_page_nav_component__WEBPACK_IMPORTED_MODULE_1__["PageNavComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-page',
                templateUrl: './detail-page.component.html',
                styleUrls: ['./detail-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sj5B":
/*!*************************************************!*\
  !*** ./src/app/shared/shared-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SharedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRoutingModule", function() { return SharedRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class SharedRoutingModule {
}
SharedRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedRoutingModule });
SharedRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedRoutingModule_Factory(t) { return new (t || SharedRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _layout_components_top_info_band_top_info_band_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout-components/top-info-band/top-info-band.component */ "TNCn");
/* harmony import */ var _layout_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout-components/nav-bar/nav-bar.component */ "hAKw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout-components/footer/footer.component */ "xJMo");






class AppComponent {
    constructor() {
        this.title = 'AutoWash';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "sticky-top"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-top-info-band");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-nav-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_layout_components_top_info_band_top_info_band_component__WEBPACK_IMPORTED_MODULE_1__["TopInfoBandComponent"], _layout_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "TNCn":
/*!****************************************************************************!*\
  !*** ./src/app/layout-components/top-info-band/top-info-band.component.ts ***!
  \****************************************************************************/
/*! exports provided: TopInfoBandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopInfoBandComponent", function() { return TopInfoBandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TopInfoBandComponent {
    constructor() { }
    ngOnInit() {
    }
}
TopInfoBandComponent.ɵfac = function TopInfoBandComponent_Factory(t) { return new (t || TopInfoBandComponent)(); };
TopInfoBandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopInfoBandComponent, selectors: [["app-top-info-band"]], decls: 32, vars: 0, consts: [[1, "top-band"], [1, "logo"], ["href", "#"], [1, "info"], [1, "box"], [1, "icon"], [1, "far", "fa-clock"], [1, "data"], [1, "fa", "fa-phone-alt"], [1, "far", "fa-envelope"]], template: function TopInfoBandComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Auto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Wash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Opening Hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mon - Fri, 8:00 - 9:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Call Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "+012 345 6789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Email Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "info@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".top-band[_ngcontent-%COMP%] {\n  display: flex;\n  height: 90px;\n  justify-content: space-around;\n}\n.top-band[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #E81C2E;\n  letter-spacing: 0.5px;\n  text-decoration: none;\n  outline: none;\n}\n.top-band[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-style: italic;\n  font-weight: 800;\n  margin: 10px 0 10px;\n}\n.top-band[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #202C45;\n  margin-left: -12px;\n}\n.top-band[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n}\n.top-band[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 20px;\n  align-items: center;\n}\n.top-band[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  flex-grow: 1;\n  align-items: center;\n  background-color: #202C45;\n  border-radius: 100%;\n  color: #FFFFFF;\n  display: flex;\n  height: 40px;\n  justify-content: center;\n  width: 40px;\n}\n.top-band[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\n.top-band[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n.top-band[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n}\n@media screen and (max-width: 991px) {\n  .top-band[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0b3AtaW5mby1iYW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQUhGO0FBTUU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFKSjtBQU1JO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUpOO0FBS007RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFIUjtBQVFFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FBTko7QUFTSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFQTjtBQVFNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQU5SO0FBU007RUFDRSxjQUFBO0FBUFI7QUFRUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTlY7QUFRUTtFQUNFLGVBQUE7QUFOVjtBQWFBO0VBRUk7SUFDRSxhQUFBO0VBWEo7QUFDRiIsImZpbGUiOiJ0b3AtaW5mby1iYW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG4udG9wLWJhbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG5cbiAgYSB7XG4gICAgY29sb3I6ICNFODFDMkU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIG1hcmdpbjogMTBweCAwIDEwcHg7XG4gICAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICMyMDJDNDU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaW5mbyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG5cbiAgICAuYm94IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAmID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyQzQ1O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICB9XG5cbiAgICAgIC5kYXRhIHtcbiAgICAgICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgICAgICYgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuICAgICAgICAmID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC50b3AtYmFuZCB7XG4gICAgLmluZm8ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopInfoBandComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-info-band',
                templateUrl: './top-info-band.component.html',
                styleUrls: ['./top-info-band.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "VkHG":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/button/button.component.ts ***!
  \**************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class ButtonComponent {
    constructor() {
        this.defaultBackgroundColor = '#FFFFFF';
        this.animatedBackgroundColor = '#E81C2E';
        this.backgroundColor = this.defaultBackgroundColor;
        this.defaultTextColor = '#202C45';
        this.animatedTextColor = '#FFFFFF';
        this.textColor = this.defaultTextColor;
    }
    ngOnInit() {
        // second initilization in this point of lifecycle in case there is input
        this.backgroundColor = this.defaultBackgroundColor;
        this.textColor = this.defaultTextColor;
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { defaultBackgroundColor: "defaultBackgroundColor", animatedBackgroundColor: "animatedBackgroundColor", defaultTextColor: "defaultTextColor", animatedTextColor: "animatedTextColor" }, ngContentSelectors: _c0, decls: 2, vars: 4, consts: [["type", "submit", 1, "custom-button", 3, "mouseover", "mouseout"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function ButtonComponent_Template_button_mouseover_0_listener() { return ctx.backgroundColor = ctx.animatedBackgroundColor; })("mouseout", function ButtonComponent_Template_button_mouseout_0_listener() { return ctx.backgroundColor = ctx.defaultBackgroundColor; })("mouseover", function ButtonComponent_Template_button_mouseover_0_listener() { return ctx.textColor = ctx.animatedTextColor; })("mouseout", function ButtonComponent_Template_button_mouseout_0_listener() { return ctx.textColor = ctx.defaultTextColor; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.backgroundColor)("color", ctx.textColor);
    } }, styles: ["button[_ngcontent-%COMP%] {\n  color: #202C45;\n  padding: 12px 30px;\n  border-radius: 25px;\n  margin-right: 0;\n  transition: color ease-in 0.15s, background-color ease-in 0.15s;\n  border: none;\n  width: 100%;\n}\n\n.custom-button[_ngcontent-%COMP%]:hover {\n  background-color: #FFFF;\n  color: #E81C2E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0RBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjMjAyQzQ1O1xyXG4gICAgcGFkZGluZzogMTJweCAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIGVhc2UtaW4gMC4xNXMsIGJhY2tncm91bmQtY29sb3IgZWFzZS1pbiAwLjE1cztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY3VzdG9tLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRjtcclxuICAgIGNvbG9yOiAjRTgxQzJFO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.scss']
            }]
    }], function () { return []; }, { defaultBackgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], animatedBackgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], defaultTextColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], animatedTextColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _layout_components_top_info_band_top_info_band_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout-components/top-info-band/top-info-band.component */ "TNCn");
/* harmony import */ var _layout_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout-components/nav-bar/nav-bar.component */ "hAKw");
/* harmony import */ var _sections_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/carousel/carousel.component */ "ZOK5");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _sections_about_us_section_about_us_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/about-us-section/about-us-section.component */ "BRsM");
/* harmony import */ var _sections_what_we_do_section_what_we_do_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/what-we-do-section/what-we-do-section.component */ "HAI7");
/* harmony import */ var _sections_milestones_section_milestones_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sections/milestones-section/milestones-section.component */ "LiVn");
/* harmony import */ var _sections_washing_plans_washing_plans_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sections/washing-plans/washing-plans.component */ "CRk3");
/* harmony import */ var _sections_car_washing_points_section_car_washing_points_section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sections/car-washing-points-section/car-washing-points-section.component */ "xYvl");
/* harmony import */ var _sections_meet_our_team_section_meet_our_team_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sections/meet-our-team-section/meet-our-team-section.component */ "AAYl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _sections_testemonial_section_testemonial_section_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sections/testemonial-section/testemonial-section.component */ "GJ9t");
/* harmony import */ var _sections_our_blog_section_our_blog_section_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sections/our-blog-section/our-blog-section.component */ "2PAw");
/* harmony import */ var _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./layout-components/footer/footer.component */ "xJMo");
/* harmony import */ var _pages_service_page_service_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/service-page/service-page.component */ "Q963");
/* harmony import */ var _pages_price_page_price_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/price-page/price-page.component */ "8y8k");
/* harmony import */ var _pages_washing_points_washing_points_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/washing-points/washing-points.component */ "nm7s");
/* harmony import */ var _pages_team_members_page_team_members_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/team-members-page/team-members-page.component */ "oZQc");
/* harmony import */ var _pages_schedule_booking_page_schedule_booking_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/schedule-booking-page/schedule-booking-page.component */ "0tf2");
/* harmony import */ var _pages_detail_page_detail_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/detail-page/detail-page.component */ "S9m1");
/* harmony import */ var _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/about-page/about-page.component */ "4AUu");
/* harmony import */ var _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/contact-page/contact-page.component */ "64+1");
/* harmony import */ var _pages_blog_grid_page_blog_grid_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/blog-grid-page/blog-grid-page.component */ "FroJ");































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_17__["CarouselModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _layout_components_top_info_band_top_info_band_component__WEBPACK_IMPORTED_MODULE_5__["TopInfoBandComponent"],
        _layout_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
        _sections_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"],
        _sections_about_us_section_about_us_section_component__WEBPACK_IMPORTED_MODULE_10__["AboutUsSectionComponent"],
        _sections_what_we_do_section_what_we_do_section_component__WEBPACK_IMPORTED_MODULE_11__["WhatWeDoSectionComponent"],
        _sections_milestones_section_milestones_section_component__WEBPACK_IMPORTED_MODULE_12__["MilestonesSectionComponent"],
        _sections_washing_plans_washing_plans_component__WEBPACK_IMPORTED_MODULE_13__["WashingPlansComponent"],
        _sections_car_washing_points_section_car_washing_points_section_component__WEBPACK_IMPORTED_MODULE_14__["CarWashingPointsSectionComponent"],
        _sections_meet_our_team_section_meet_our_team_section_component__WEBPACK_IMPORTED_MODULE_15__["MeetOurTeamSectionComponent"],
        _sections_testemonial_section_testemonial_section_component__WEBPACK_IMPORTED_MODULE_18__["TestemonialSectionComponent"],
        _sections_our_blog_section_our_blog_section_component__WEBPACK_IMPORTED_MODULE_19__["OurBlogSectionComponent"],
        _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
        _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_27__["AboutPageComponent"],
        _pages_service_page_service_page_component__WEBPACK_IMPORTED_MODULE_21__["ServicePageComponent"],
        _pages_price_page_price_page_component__WEBPACK_IMPORTED_MODULE_22__["PricePageComponent"],
        _pages_washing_points_washing_points_component__WEBPACK_IMPORTED_MODULE_23__["WashingPointsComponent"],
        _pages_blog_grid_page_blog_grid_page_component__WEBPACK_IMPORTED_MODULE_29__["BlogGridPageComponent"],
        _pages_detail_page_detail_page_component__WEBPACK_IMPORTED_MODULE_26__["DetailPageComponent"],
        _pages_team_members_page_team_members_page_component__WEBPACK_IMPORTED_MODULE_24__["TeamMembersPageComponent"],
        _pages_schedule_booking_page_schedule_booking_page_component__WEBPACK_IMPORTED_MODULE_25__["ScheduleBookingPageComponent"],
        _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_28__["ContactPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_17__["CarouselModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _layout_components_top_info_band_top_info_band_component__WEBPACK_IMPORTED_MODULE_5__["TopInfoBandComponent"],
                    _layout_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
                    _sections_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"],
                    _sections_about_us_section_about_us_section_component__WEBPACK_IMPORTED_MODULE_10__["AboutUsSectionComponent"],
                    _sections_what_we_do_section_what_we_do_section_component__WEBPACK_IMPORTED_MODULE_11__["WhatWeDoSectionComponent"],
                    _sections_milestones_section_milestones_section_component__WEBPACK_IMPORTED_MODULE_12__["MilestonesSectionComponent"],
                    _sections_washing_plans_washing_plans_component__WEBPACK_IMPORTED_MODULE_13__["WashingPlansComponent"],
                    _sections_car_washing_points_section_car_washing_points_section_component__WEBPACK_IMPORTED_MODULE_14__["CarWashingPointsSectionComponent"],
                    _sections_meet_our_team_section_meet_our_team_section_component__WEBPACK_IMPORTED_MODULE_15__["MeetOurTeamSectionComponent"],
                    _sections_testemonial_section_testemonial_section_component__WEBPACK_IMPORTED_MODULE_18__["TestemonialSectionComponent"],
                    _sections_our_blog_section_our_blog_section_component__WEBPACK_IMPORTED_MODULE_19__["OurBlogSectionComponent"],
                    _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
                    _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_27__["AboutPageComponent"],
                    _pages_service_page_service_page_component__WEBPACK_IMPORTED_MODULE_21__["ServicePageComponent"],
                    _pages_price_page_price_page_component__WEBPACK_IMPORTED_MODULE_22__["PricePageComponent"],
                    _pages_washing_points_washing_points_component__WEBPACK_IMPORTED_MODULE_23__["WashingPointsComponent"],
                    _pages_blog_grid_page_blog_grid_page_component__WEBPACK_IMPORTED_MODULE_29__["BlogGridPageComponent"],
                    _pages_detail_page_detail_page_component__WEBPACK_IMPORTED_MODULE_26__["DetailPageComponent"],
                    _pages_team_members_page_team_members_page_component__WEBPACK_IMPORTED_MODULE_24__["TeamMembersPageComponent"],
                    _pages_schedule_booking_page_schedule_booking_page_component__WEBPACK_IMPORTED_MODULE_25__["ScheduleBookingPageComponent"],
                    _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_28__["ContactPageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"],
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_17__["CarouselModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZOK5":
/*!*********************************************************!*\
  !*** ./src/app/sections/carousel/carousel.component.ts ***!
  \*********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");





function CarouselComponent_div_4_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", slide_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("@carouselAnimation", undefined);
} }
function CarouselComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "app-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Explore More");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@carouselAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", slide_r1.serviceName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", slide_r1.promotionText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", slide_r1.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("defaultBackgroundColor", "#E81C2E")("animatedBackgroundColor", "#202C45")("defaultTextColor", "#FFFFFF")("animatedTextColor", "#E81C2E");
} }
function CarouselComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_div_4_img_1_Template, 1, 2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CarouselComponent_div_4_div_3_Template, 10, 8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.currentSlide == i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.currentSlide == i_r2);
} }
class CarouselComponent {
    constructor() {
        // TODO: add & fix animations fade out
        this.slides = [
            {
                src: 'assets/img/carousel-1.jpg',
                serviceName: 'Washing & Detailing',
                promotionText: 'Keep your Car Newer',
                text: 'Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac'
            },
            {
                src: 'assets/img/carousel-2.jpg',
                serviceName: 'Washing & Detailing',
                promotionText: 'Quality Service For You',
                text: 'Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. Morbi sagittis orci sodales'
            },
            {
                src: 'assets/img/carousel-3.jpg',
                serviceName: 'Washing & Detailing',
                promotionText: 'Exterior & Interior Washing',
                text: 'Sed ultrices, est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam'
            }
        ];
        this.currentSlide = 0;
    }
    ngOnInit() {
    }
    nextSlide() {
        this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    }
    previousSlide() {
        this.currentSlide = this.currentSlide === 0 ? 2 : this.currentSlide - 1;
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["carousel"]], decls: 7, vars: 1, consts: [[1, "carousel-box"], [1, "control", "left-arrow", 3, "click"], [1, "fas", "fa-angle-left"], [1, "slides"], ["class", "slide", 4, "ngFor", "ngForOf"], [1, "control", "right-arrow", 3, "click"], [1, "fas", "fa-angle-right"], [1, "slide"], ["style", "display: block;", 3, "src", 4, "ngIf"], [1, "overlay"], ["class", "text", 4, "ngIf"], [2, "display", "block", 3, "src"], [1, "text"], [1, "service-name"], [1, "btn-box"], [3, "defaultBackgroundColor", "animatedBackgroundColor", "defaultTextColor", "animatedTextColor"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_Template_div_click_1_listener() { return ctx.previousSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CarouselComponent_div_4_Template, 4, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_Template_div_click_5_listener() { return ctx.nextSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]], styles: [".carousel-box[_ngcontent-%COMP%] {\n  position: relative;\n  right: 15px;\n  width: 80%;\n  margin: auto;\n}\n.carousel-box[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%] {\n  align-self: center;\n  width: 100%;\n}\n.carousel-box[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .leave[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 2s ease-out;\n}\n.carousel-box[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.carousel-box[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n.carousel-box[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  text-align: center;\n  text-transform: uppercase;\n  position: absolute;\n  top: 50%;\n  z-index: 2;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #FFFFFF;\n}\n.carousel-box[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #E81C2E;\n  font-size: 25px;\n  letter-spacing: 4px;\n}\n.carousel-box[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 65px;\n  white-space: nowrap;\n}\n.carousel-box[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 70%;\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 16px;\n}\n.carousel-box[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 25%;\n}\n.carousel-box[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 50%;\n  color: #FFF;\n  cursor: pointer;\n  font-size: 25px;\n  height: 50px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  transition: background-color ease-in 0.2s;\n  width: 50px;\n  z-index: 1;\n}\n.carousel-box[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]:hover {\n  background-color: #E81C2E;\n}\n.carousel-box[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.carousel-box[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .fa-angle-left[_ngcontent-%COMP%] {\n  right: 20px;\n}\n.carousel-box[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .fa-angle-right[_ngcontent-%COMP%] {\n  left: 20px;\n}\n.carousel-box[_ngcontent-%COMP%]   .right-arrow[_ngcontent-%COMP%] {\n  right: 10px;\n}\n.carousel-box[_ngcontent-%COMP%]   .left-arrow[_ngcontent-%COMP%] {\n  left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQUVSO0FBQ1k7RUFDSSxVQUFBO0VBQ0EsK0JBQUE7QUFDaEI7QUFDWTtFQUNJLFdBQUE7QUFDaEI7QUFDWTtFQUNJLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0FBQ2hCO0FBQWdCO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FBRXBCO0FBRG9CO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBR3hCO0FBRG9CO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFHeEI7QUFEb0I7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBR3hCO0FBQ2tCO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUFDcEI7QUFPSTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBTFI7QUFPUTtFQUNJLHlCQUFBO0FBTFo7QUFRUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBTlo7QUFTUTtFQUNJLFdBQUE7QUFQWjtBQVVRO0VBQ0ksVUFBQTtBQVJaO0FBWUk7RUFDSSxXQUFBO0FBVlI7QUFhSTtFQUNJLFVBQUE7QUFYUiIsImZpbGUiOiJjYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1ib3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgLnNsaWRlcyB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAuc2xpZGUge1xyXG4gICAgICAgICAgICAubGVhdmUge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMnMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0U4MUMyRTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmJ0bi1ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5jb250cm9sIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2UtaW4gMC4ycztcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U4MUMyRTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmEtYW5nbGUtbGVmdCB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZhLWFuZ2xlLXJpZ2h0IHtcclxuICAgICAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJpZ2h0LWFycm93IHtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAubGVmdC1hcnJvdyB7XHJcbiAgICAgICAgbGVmdDogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iXX0= */", "@media screen and (max-width: 1399px) {\n  .carousel-box[_ngcontent-%COMP%] {\n    width: 100%;\n    right: 0;\n  }\n}\n@media screen and (max-width: 991px) {\n  .carousel-box[_ngcontent-%COMP%] {\n    width: 100%;\n    right: 0;\n  }\n  .carousel-box[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .carousel-box[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 55px;\n  }\n  .carousel-box[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .carousel-box[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .carousel-box[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n    letter-spacing: 3px;\n    margin-bottom: 5px;\n  }\n  .carousel-box[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 43px;\n    margin-bottom: 5px;\n  }\n  .carousel-box[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .carousel-box[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 35%;\n  }\n}\n@media screen and (max-width: 575px) {\n  .carousel-box[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-bottom: 3px;\n  }\n  .carousel-box[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n    margin-bottom: 5px;\n  }\n  .carousel-box[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 10px;\n    max-width: 90%;\n  }\n  .carousel-box[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 12px;\n    width: 45%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJvdXNlbC5jb21wb25lbnQucXVlcmllcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsUUFBQTtFQUNOO0FBQ0Y7QUFHQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLFFBQUE7RUFETjtFQU1zQjtJQUNJLGVBQUE7RUFKMUI7RUFNc0I7SUFDSSxlQUFBO0VBSjFCO0VBTXNCO0lBQ0ksZUFBQTtFQUoxQjtFQU1zQjtJQUNJLGVBQUE7RUFKMUI7QUFDRjtBQVlBO0VBTXdCO0lBQ0ksZUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUFmMUI7RUFpQnNCO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0VBZjFCO0VBaUJzQjtJQUNJLGVBQUE7RUFmMUI7RUFpQnNCO0lBQ0ksZUFBQTtJQUNBLFVBQUE7RUFmMUI7QUFDRjtBQXVCQTtFQU13QjtJQUNJLGVBQUE7SUFDQSxrQkFBQTtFQTFCMUI7RUE0QnNCO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0VBMUIxQjtFQTRCc0I7SUFDSSxlQUFBO0lBQ0EsY0FBQTtFQTFCMUI7RUE0QnNCO0lBQ0ksZUFBQTtJQUNBLFVBQUE7RUExQjFCO0FBQ0YiLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LnF1ZXJpZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzOTlweCkge1xyXG4gICAgLmNhcm91c2VsLWJveCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuY2Fyb3VzZWwtYm94IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICAuc2xpZGVzIHsgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5zbGlkZSB7XHJcbiAgICAgICAgICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuY2Fyb3VzZWwtYm94IHtcclxuICAgICAgICAuc2xpZGVzIHsgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5zbGlkZSB7XHJcbiAgICAgICAgICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcC1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gICBcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIC5jYXJvdXNlbC1ib3gge1xyXG4gICAgICAgIC5zbGlkZXMgeyAgICAgICAgICBcclxuICAgICAgICAgICAgLnNsaWRlIHtcclxuICAgICAgICAgICAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAgIFxyXG59Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('carouselAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.scss', './carousel.component.queries.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('carouselAnimation', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                        ])
                    ])
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bk/Q":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/article-card/article-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: ArticleCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleCardComponent", function() { return ArticleCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ArticleCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
ArticleCardComponent.ɵfac = function ArticleCardComponent_Factory(t) { return new (t || ArticleCardComponent)(); };
ArticleCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleCardComponent, selectors: [["app-article-card"]], decls: 29, vars: 0, consts: [[1, "article-card"], ["src", "assets/img/blog-1.jpg", "alt", ""], [1, "date-circle"], [1, "card-body"], ["href", ""], [1, "extra"], ["href", "#"], [1, "fa", "fa-user"], [1, "fa", "fa-folder"], [1, "fa", "fa-comments"]], template: function ArticleCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Jan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Lorem ipsum dolor sit amet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Lorem ipsum dolor sit amet elit. Pellent iaculis blandit lorem, quis convall diam eleife. Nam in arcu sit amet massa ferment quis enim. Nunc augue velit metus congue eget semper ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Web Design ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " 15 Comments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".article-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.article-card[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  overflow: hidden;\n  position: relative;\n  height: 50%;\n}\n.article-card[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px;\n  height: 100%;\n  object-fit: cover;\n}\n.article-card[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .date-circle[_ngcontent-%COMP%] {\n  background-color: #202C45;\n  border-radius: 100%;\n  display: flex;\n  color: white;\n  flex-direction: column;\n  height: 70px;\n  justify-content: center;\n  left: 50%;\n  line-height: 1.2;\n  position: absolute;\n  text-align: center;\n  top: 100%;\n  opacity: 0;\n  transform: translate(-50%, -50%);\n  width: 70px;\n  transition: 0.5s;\n}\n.article-card[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .date-circle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n  font-size: 14px;\n  font-weight: 400;\n}\n.article-card[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .date-circle[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n}\n.article-card[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child:hover   .date-circle[_ngcontent-%COMP%] {\n  top: 50%;\n  opacity: 1;\n}\n.article-card[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n  margin: 15px 0 30px 0;\n  padding: 0;\n}\n.article-card[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\n  color: #202C45;\n  text-decoration: none;\n}\n.article-card[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  margin-bottom: 5px;\n}\n.article-card[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child    > p[_ngcontent-%COMP%] {\n  color: #444444;\n  font-weight: 400;\n  font-size: 14px;\n  width: 94%;\n  margin-bottom: 5px;\n}\n.article-card[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   .extra[_ngcontent-%COMP%] {\n  display: flex;\n  white-space: nowrap;\n}\n.article-card[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   .extra[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #999999;\n  border-left: 1px solid rgba(0, 0, 0, 0.15);\n  padding-left: 7px;\n  margin-left: 7px;\n  font-size: 14px;\n}\n.article-card[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   .extra[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 2px;\n}\n.article-card[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   .extra[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child   a[_ngcontent-%COMP%] {\n  border-left: 0;\n  margin-left: 0;\n  padding-left: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXJ0aWNsZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0FBQUY7QUFDRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0o7QUFBSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUVOO0FBQUk7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRU47QUFETTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBR1I7QUFBTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFFUjtBQUVNO0VBQ0UsUUFBQTtFQUNBLFVBQUE7QUFBUjtBQUlFO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0FBRko7QUFJSTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUZOO0FBSUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZOO0FBSUk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBRk47QUFJSTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtBQUhOO0FBS1E7RUFDRSxjQUFBO0VBQ0EsMENBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUhWO0FBSVU7RUFDRSxpQkFBQTtBQUZaO0FBT1M7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBTFgiLCJmaWxlIjoiYXJ0aWNsZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFydGljbGUtY2FyZCB7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICA+IDpmaXJzdC1jaGlsZCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG4gICAgLmRhdGUtY2lyY2xlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMkM0NTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0b3A6IDEwMCU7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICB3aWR0aDogNzBweDtcclxuICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbiAgICAgIH1cclxuICAgICAgc3Ryb25nIHtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAuZGF0ZS1jaXJjbGUge1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgPiA6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW46IDE1cHggMCAzMHB4IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogIzIwMkM0NTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuICAgID4gcCB7XHJcbiAgICAgIGNvbG9yOiAjNDQ0NDQ0O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHdpZHRoOiA5NCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuICAgIC5leHRyYSB7XHJcbiAgICAgIC8vIFRPRE86IGFkanVzIHdyYXAgZm9yIHVuZGVyIDI4MCByZXNvbHVcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgcCB7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTUpO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgIGEge1xyXG4gICAgICAgICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-card',
                templateUrl: './article-card.component.html',
                styleUrls: ['./article-card.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hAKw":
/*!****************************************************************!*\
  !*** ./src/app/layout-components/nav-bar/nav-bar.component.ts ***!
  \****************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");





class NavBarComponent {
    constructor() {
        this.navbarState = 'normal';
    }
    onWindowScroll(event) {
        // set to resize right before it reaches the navbar
        // to stop the resize from glitching with the scroll
        this.navbarState = window.scrollY <= 70 ? 'normal' : 'minimized';
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], hostBindings: function NavBarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavBarComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 44, vars: 1, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark"], [1, "container-fluid"], [1, "navbar-brand", "d-lg-none"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "justify-content-between"], [1, "navbar-nav", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "routerLink", "/home", "routerLinkActive", "is-active", 1, "nav-link", "active"], ["routerLink", "about", "routerLinkActive", "is-active", 1, "nav-link"], ["routerLinkActive", "is-active", 1, "nav-item"], ["routerLink", "service", "routerLinkActive", "is-active", 1, "nav-link"], ["routerLink", "price", "routerLinkActive", "is-active", 1, "nav-link"], ["routerLink", "washing-points", "routerLinkActive", "is-active", 1, "nav-link"], [1, "nav-item", "dropdown"], ["routerLink", "more", "routerLinkActive", "is-active", "id", "navbarDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["routerLink", "more/blog-grid", 1, "dropdown-item"], ["routerLink", "more/detail", 1, "dropdown-item"], ["routerLink", "more/team-members", 1, "dropdown-item"], ["routerLink", "more/schedule-booking", 1, "dropdown-item"], ["routerLink", "contact", "routerLinkActive", "is-active", 1, "nav-link"], [1, "d-none", "d-lg-block"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Washing Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Pages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Blog Grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Detail Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Team Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Schedule Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "app-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Get Appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@navbarState", ctx.navbarState);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]], styles: [".navbar[_ngcontent-%COMP%] {\n  background-color: #202C45;\n  color: white;\n  padding: 0;\n  transition: height 1.5s;\n  height: 100px;\n}\n.navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  justify-content: space-around;\n}\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-weight: 500;\n  letter-spacing: 1px;\n  font-size: 14px;\n  margin-right: 15px;\n}\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   .is-active[_ngcontent-%COMP%] {\n  color: #E81C2E;\n}\n.is-active[_ngcontent-%COMP%] {\n  color: #E81C2E !important;\n}\napp-button[_ngcontent-%COMP%] {\n  margin-right: 195px;\n}\n.navbar-nav[_ngcontent-%COMP%] {\n  margin-left: 160px;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 0;\n  margin-top: 10px;\n}\nbutton.navbar-toggler[_ngcontent-%COMP%] {\n  margin-left: 55%;\n}\n@media screen and (max-width: 1399px) {\n  app-button[_ngcontent-%COMP%] {\n    margin-right: 100px;\n  }\n\n  .navbar-nav[_ngcontent-%COMP%] {\n    margin-left: 100px;\n  }\n}\n@media screen and (max-width: 1199px) {\n  .navbar-nav[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n\n  app-button[_ngcontent-%COMP%] {\n    margin-right: 50px;\n  }\n\n  .navbar-collapse[_ngcontent-%COMP%] {\n    margin-left: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBRUEsYUFBQTtBQUFKO0FBRUk7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7QUFBUjtBQUlBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUlBO0VBQ0ksY0FBQTtBQURKO0FBSUE7RUFDRSx5QkFBQTtBQURGO0FBUUE7RUFDSSxtQkFBQTtBQUxKO0FBUUE7RUFDSSxrQkFBQTtBQUxKO0FBUUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBTEo7QUFRQTtFQUNJLGdCQUFBO0FBTEo7QUFXQTtFQUNJO0lBQ0ksbUJBQUE7RUFSTjs7RUFXRTtJQUNJLGtCQUFBO0VBUk47QUFDRjtBQVdBO0VBQ0k7SUFDSSxnQkFBQTtFQVROOztFQVlFO0lBQ0ksa0JBQUE7RUFUTjs7RUFZRTtJQUNJLGlCQUFBO0VBVE47QUFDRiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyQzQ1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAxLjVzO1xyXG5cclxuICAgIGhlaWdodDogMTAwcHg7XHJcblxyXG4gICAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXIgLmlzLWFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI0U4MUMyRTtcclxufVxyXG5cclxuLmlzLWFjdGl2ZSB7XHJcbiAgY29sb3I6ICNFODFDMkUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmFwcC1idXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxOTVweDtcclxufVxyXG5cclxuLm5hdmJhci1uYXYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2MHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5idXR0b24ubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDU1JTtcclxufVxyXG5cclxuXHJcbi8vIGFwcCBidXR0b24gY29kZSB0byBjbGVhbiBhbmQgdGVzdFxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM5OXB4KSB7XHJcbiAgICBhcHAtYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXZiYXItbmF2IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gICAgLm5hdmJhci1uYXYge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwLWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLy8gVE9ETzogZml4IG5hdmJhciBjb2xsYXBzZSBidXR0b24gYW5kIHRpdGxlIG1hcmdpbiByZXNwb25zaXZlXHJcbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('navbarState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    height: '100px'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('minimized', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    height: '70px'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal <=> minimized', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(250))
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('navbarState', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            height: '100px'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('minimized', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            height: '70px'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal <=> minimized', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(250))
                    ])
                ]
            }]
    }], function () { return []; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "nm7s":
/*!******************************************************************!*\
  !*** ./src/app/pages/washing-points/washing-points.component.ts ***!
  \******************************************************************/
/*! exports provided: WashingPointsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WashingPointsComponent", function() { return WashingPointsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_page_nav_page_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/page-nav/page-nav.component */ "ztht");
/* harmony import */ var _sections_car_washing_points_section_car_washing_points_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sections/car-washing-points-section/car-washing-points-section.component */ "xYvl");




const _c0 = function () { return { label: "home", link: "" }; };
const _c1 = function () { return { label: "Location", link: "" }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
class WashingPointsComponent {
    constructor() { }
    ngOnInit() {
    }
}
WashingPointsComponent.ɵfac = function WashingPointsComponent_Factory(t) { return new (t || WashingPointsComponent)(); };
WashingPointsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WashingPointsComponent, selectors: [["app-washing-points"]], decls: 2, vars: 6, consts: [["title", "Washing Points", 3, "items"]], template: function WashingPointsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-car-washing-points-section");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1)));
    } }, directives: [_shared_components_page_nav_page_nav_component__WEBPACK_IMPORTED_MODULE_1__["PageNavComponent"], _sections_car_washing_points_section_car_washing_points_section_component__WEBPACK_IMPORTED_MODULE_2__["CarWashingPointsSectionComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXNoaW5nLXBvaW50cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WashingPointsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-washing-points',
                templateUrl: './washing-points.component.html',
                styleUrls: ['./washing-points.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "o32y":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/milestone-counter/milestone-counter.component.ts ***!
  \************************************************************************************/
/*! exports provided: MilestoneCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilestoneCounterComponent", function() { return MilestoneCounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["animatedDigit"];
class MilestoneCounterComponent {
    constructor() {
        this.icon = '';
        this.digit = 0;
        this.text = '';
        this.triggered = false;
        this.steps = 65;
    }
    onWindowScroll(event) {
        if (window.scrollY < 1900 && this.triggered === false) {
            if (this.digit) {
                this.animateCount();
                this.triggered = true;
            }
        }
    }
    animateCount() {
        this.counterFunc(this.digit, 10000, this.animatedDigit);
    }
    counterFunc(endValue, durationMs, element) {
        const stepCount = Math.abs(durationMs / this.steps);
        const valueIncrement = (endValue - 0) / stepCount;
        const sinValueIncrement = Math.PI / stepCount;
        let currentValue = 0;
        let currentSinValue = 0;
        function step() {
            currentSinValue += sinValueIncrement;
            currentValue += valueIncrement * Math.pow(Math.sin(currentSinValue), 2) * 2;
            element.nativeElement.textContent = Math.abs(Math.floor(currentValue));
            if (currentSinValue < Math.PI) {
                window.requestAnimationFrame(step);
            }
        }
        step();
    }
}
MilestoneCounterComponent.ɵfac = function MilestoneCounterComponent_Factory(t) { return new (t || MilestoneCounterComponent)(); };
MilestoneCounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MilestoneCounterComponent, selectors: [["app-milestone-counter"]], viewQuery: function MilestoneCounterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.animatedDigit = _t.first);
    } }, hostBindings: function MilestoneCounterComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function MilestoneCounterComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { icon: "icon", digit: "digit", text: "text" }, decls: 8, vars: 5, consts: [[1, "counter-body"], ["animatedDigit", ""], [1, "text"]], template: function MilestoneCounterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.digit, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, " ");
    } }, styles: ["@charset \"UTF-8\";\n.counter-body[_ngcontent-%COMP%] {\n  color: white;\n  display: flex;\n  justify-content: center;\n  margin-right: 70px;\n  width: 100%;\n}\n.counter-body[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 15px 10px;\n  font-size: 50px;\n  color: #E81C2E;\n}\n.counter-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 70px;\n  margin-bottom: 0;\n  position: relative;\n}\n.counter-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::after {\n  position: absolute;\n  font-weight: 900;\n  font-size: 25px;\n  content: \"\uF067\";\n  font-family: \"Font Awesome 5 Free\";\n}\n.counter-body[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWlsZXN0b25lLWNvdW50ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUVGO0FBREU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBR0o7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUFJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7QUFFTjtBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFBSiIsImZpbGUiOiJtaWxlc3RvbmUtY291bnRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb3VudGVyLWJvZHkge1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvdW50ZXItYm9keSBpIHtcbiAgbWFyZ2luOiAxNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6ICNFODFDMkU7XG59XG4uY291bnRlci1ib2R5IGgzIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiA3MHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY291bnRlci1ib2R5IGgzOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb250ZW50OiBcIu+Bp1wiO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG59XG4uY291bnRlci1ib2R5IC50ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MilestoneCounterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-milestone-counter',
                templateUrl: './milestone-counter.component.html',
                styleUrls: ['./milestone-counter.component.scss']
            }]
    }], function () { return []; }, { icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], digit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], animatedDigit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['animatedDigit']
        }], onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "oZQc":
/*!************************************************************************!*\
  !*** ./src/app/pages/team-members-page/team-members-page.component.ts ***!
  \************************************************************************/
/*! exports provided: TeamMembersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMembersPageComponent", function() { return TeamMembersPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_page_nav_page_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/page-nav/page-nav.component */ "ztht");
/* harmony import */ var _shared_template_components_section_template_section_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/template-components/section-template/section-template.component */ "E8Af");
/* harmony import */ var _shared_components_person_card_person_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/person-card/person-card.component */ "F6Ee");





const _c0 = function () { return { label: "home", link: "" }; };
const _c1 = function () { return { label: "Team", link: "" }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
const _c3 = function () { return { twitter: "linktest1", facebook: "linktest2", linkedin: "linktest3", instagram: "linktest4" }; };
class TeamMembersPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
TeamMembersPageComponent.ɵfac = function TeamMembersPageComponent_Factory(t) { return new (t || TeamMembersPageComponent)(); };
TeamMembersPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamMembersPageComponent, selectors: [["app-team-members-page"]], decls: 12, vars: 46, consts: [["title", "Team Member", 3, "items"], ["title", "Meet Our Team", "description", "Our Enginners & Workers"], [1, "staff-cards"], [3, "imgLink", "name", "job", "socialMediaLinks"]], template: function TeamMembersPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-section-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-person-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-person-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-person-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-person-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-person-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-person-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-person-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-person-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](35, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgLink", "team-2")("name", "Donald John")("job", "Worker")("socialMediaLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgLink", "team-3")("name", "Adam Philips")("job", "Engineer")("socialMediaLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgLink", "team-3")("name", "Thomas Olsen")("job", "Worker")("socialMediaLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgLink", "team-2")("name", "James Alien")("job", "manager")("socialMediaLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgLink", "team-2")("name", "Donald John")("job", "Worker")("socialMediaLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgLink", "team-3")("name", "Adam Philips")("job", "Engineer")("socialMediaLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgLink", "team-3")("name", "Thomas Olsen")("job", "Worker")("socialMediaLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgLink", "team-2")("name", "James Alien")("job", "manager")("socialMediaLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c3));
    } }, directives: [_shared_components_page_nav_page_nav_component__WEBPACK_IMPORTED_MODULE_1__["PageNavComponent"], _shared_template_components_section_template_section_template_component__WEBPACK_IMPORTED_MODULE_2__["SectionTemplateComponent"], _shared_components_person_card_person_card_component__WEBPACK_IMPORTED_MODULE_3__["PersonCardComponent"]], styles: [".staff-cards[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  margin: 20px 0;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.staff-cards[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 16%;\n  margin-right: 45px;\n  text-align: center;\n}\n.staff-cards[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZWFtLW1lbWJlcnMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQUU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQUk7RUFDRSxlQUFBO0FBRU4iLCJmaWxlIjoidGVhbS1tZW1iZXJzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhZmYtY2FyZHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gID4gKiB7XHJcbiAgICB3aWR0aDogMTYlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */", "@media screen and (max-width: 1199px) {\n  .staff-cards[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 22%;\n    margin-right: 25px;\n  }\n}\n@media screen and (max-width: 991px) {\n  .staff-cards[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n  }\n  .staff-cards[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 40%;\n    margin-right: 0;\n    margin-bottom: 30px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .staff-cards[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n  }\n  .staff-cards[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 80%;\n    margin-right: 0;\n    margin-bottom: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZWFtLW1lbWJlcnMtcGFnZS5jb21wb25lbnQucXVlcnkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0VBQUo7QUFDRjtBQUdBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxlQUFBO0VBREY7RUFFRTtJQUNFLFVBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUFBSjtBQUNGO0FBR0E7RUFDRTtJQUNFLGFBQUE7SUFDQSw2QkFBQTtJQUNBLGVBQUE7RUFERjtFQUVFO0lBQ0UsVUFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQUFKO0FBQ0YiLCJmaWxlIjoidGVhbS1tZW1iZXJzLXBhZ2UuY29tcG9uZW50LnF1ZXJ5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAuc3RhZmYtY2FyZHMge1xyXG4gICAgPiAqIHtcclxuICAgICAgd2lkdGg6IDIyJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC5zdGFmZi1jYXJkcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICA+ICoge1xyXG4gICAgICB3aWR0aDogNDAlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLnN0YWZmLWNhcmRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgID4gKiB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamMembersPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team-members-page',
                templateUrl: './team-members-page.component.html',
                styleUrls: ['./team-members-page.component.scss', 'team-members-page.component.query.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_team_members_page_team_members_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/team-members-page/team-members-page.component */ "oZQc");
/* harmony import */ var _pages_schedule_booking_page_schedule_booking_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/schedule-booking-page/schedule-booking-page.component */ "0tf2");
/* harmony import */ var _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/about-page/about-page.component */ "4AUu");
/* harmony import */ var _pages_detail_page_detail_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/detail-page/detail-page.component */ "S9m1");
/* harmony import */ var _pages_washing_points_washing_points_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/washing-points/washing-points.component */ "nm7s");
/* harmony import */ var _pages_service_page_service_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/service-page/service-page.component */ "Q963");
/* harmony import */ var _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/contact-page/contact-page.component */ "64+1");
/* harmony import */ var _pages_blog_grid_page_blog_grid_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/blog-grid-page/blog-grid-page.component */ "FroJ");
/* harmony import */ var _pages_price_page_price_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/price-page/price-page.component */ "8y8k");














const routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'about', component: _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_5__["AboutPageComponent"] },
    { path: 'service', component: _pages_service_page_service_page_component__WEBPACK_IMPORTED_MODULE_8__["ServicePageComponent"] },
    { path: 'price', component: _pages_price_page_price_page_component__WEBPACK_IMPORTED_MODULE_11__["PricePageComponent"] },
    { path: 'washing-points', component: _pages_washing_points_washing_points_component__WEBPACK_IMPORTED_MODULE_7__["WashingPointsComponent"] },
    { path: 'more/blog-grid', component: _pages_blog_grid_page_blog_grid_page_component__WEBPACK_IMPORTED_MODULE_10__["BlogGridPageComponent"] },
    { path: 'more/detail', component: _pages_detail_page_detail_page_component__WEBPACK_IMPORTED_MODULE_6__["DetailPageComponent"] },
    { path: 'more/team-members', component: _pages_team_members_page_team_members_page_component__WEBPACK_IMPORTED_MODULE_3__["TeamMembersPageComponent"] },
    { path: 'more/schedule-booking', component: _pages_schedule_booking_page_schedule_booking_page_component__WEBPACK_IMPORTED_MODULE_4__["ScheduleBookingPageComponent"] },
    { path: 'contact', component: _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_9__["ContactPageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xJMo":
/*!**************************************************************!*\
  !*** ./src/app/layout-components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");



class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 70, vars: 0, consts: [[1, "sections"], [1, "get-in-touch"], [1, "fa", "fa-map-marker-alt"], [1, "fa", "fa-phone-alt"], [1, "fa", "fa-envelope"], [1, "social-media-links"], ["href", ""], [1, "fab", "fa-twitter"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-youtube"], [1, "fab", "fa-instagram"], [1, "fab", "fa-linkedin-in"], [1, "popular-links"], [1, "useful-links"], [1, "news-letter"], ["action", ""], ["type", "text", "placeholder", "Full Name"], ["type", "text", "placeholder", "Email"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Get In Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 123 Street, New York, USA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " +012 345 67890 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " info@example.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Popular Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Our Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Service Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Pricing Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Useful Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Terms of use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "FQAs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "app-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "AutoWash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " , Website Developed By ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Dhia Eddine Trabelsi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " , Design By ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "HTML Codex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]], styles: ["@charset \"UTF-8\";\nfooter[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #202C45;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 3% 0 1% 0;\n  color: white;\n}\nfooter[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%] {\n  width: 72%;\n  display: flex;\n  margin-bottom: 80px;\n  justify-content: space-between;\n}\nfooter[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\nfooter[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  width: 22%;\n}\nfooter[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  letter-spacing: 2px;\n  font-weight: 700;\n  color: #E81C2E;\n  margin-bottom: 20px;\n}\nfooter[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\nfooter[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  outline: none;\n  margin-bottom: 15px;\n}\nfooter[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: #202C45;\n  border: 1px solid #FFFFFF;\n  color: #FFFFFF;\n  border-radius: 5px;\n  padding: 10px 15px;\n}\nfooter[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   .social-media-links[_ngcontent-%COMP%] {\n  display: flex;\n}\nfooter[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   .social-media-links[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  color: #202C45;\n  width: 40px;\n  height: 40px;\n  background-color: #FFFFFF;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  text-decoration: none;\n  margin-right: 5px;\n  transition: 0.5s;\n}\nfooter[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   .social-media-links[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:hover {\n  color: #FFFFFF;\n  background-color: #E81C2E;\n}\nfooter[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%]   .popular-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%]   .useful-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  text-decoration: none;\n  margin-bottom: 7px;\n}\nfooter[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%]   .popular-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before, footer[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%]   .useful-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: \"\uF105\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  font-size: 15px;\n  margin-right: 10px;\n}\nfooter[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\nfooter[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #E81C2E;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUVGO0FBQUU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFFSjtBQURJO0VBSUUsYUFBQTtFQUNBLHNCQUFBO0FBQU47QUFKTTtFQUNFLFVBQUE7QUFNUjtBQURNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFHUjtBQUFNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBRVI7QUFEUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUdWO0FBRFE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFHVjtBQUNNO0VBQ0UsYUFBQTtBQUNSO0FBQVE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVWO0FBQVU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUFFWjtBQU9NOztFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBSlI7QUFNUTs7RUFDRSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUhWO0FBU0U7RUFDRSxlQUFBO0FBUEo7QUFRSTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBTk4iLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDJDNDU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMyUgMCAxJSAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5mb290ZXIgLnNlY3Rpb25zIHtcbiAgd2lkdGg6IDcyJTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuZm9vdGVyIC5zZWN0aW9ucyA+ICoge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuZm9vdGVyIC5zZWN0aW9ucyA+ICo6bGFzdC1jaGlsZCB7XG4gIHdpZHRoOiAyMiU7XG59XG5mb290ZXIgLnNlY3Rpb25zID4gKiBoMiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNFODFDMkU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5mb290ZXIgLnNlY3Rpb25zID4gKiBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmZvb3RlciAuc2VjdGlvbnMgPiAqIGZvcm0gPiAqIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbmZvb3RlciAuc2VjdGlvbnMgPiAqIGZvcm0gaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyQzQ1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG5mb290ZXIgLnNlY3Rpb25zID4gKiAuc29jaWFsLW1lZGlhLWxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbmZvb3RlciAuc2VjdGlvbnMgPiAqIC5zb2NpYWwtbWVkaWEtbGlua3MgPiAqIHtcbiAgY29sb3I6ICMyMDJDNDU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5mb290ZXIgLnNlY3Rpb25zID4gKiAuc29jaWFsLW1lZGlhLWxpbmtzID4gKjpob3ZlciB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTgxQzJFO1xufVxuZm9vdGVyIC5zZWN0aW9ucyAucG9wdWxhci1saW5rcyBhLFxuZm9vdGVyIC5zZWN0aW9ucyAudXNlZnVsLWxpbmtzIGEge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG5mb290ZXIgLnNlY3Rpb25zIC5wb3B1bGFyLWxpbmtzIGE6OmJlZm9yZSxcbmZvb3RlciAuc2VjdGlvbnMgLnVzZWZ1bC1saW5rcyBhOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EhVwiO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuZm9vdGVyIC5jb3B5cmlnaHQge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5mb290ZXIgLmNvcHlyaWdodCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI0U4MUMyRTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn0iXX0= */", "@media screen and (max-width: 1199px) {\n  footer[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%] {\n    width: 92%;\n  }\n}\n@media screen and (max-width: 991px) {\n  footer[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: start;\n    align-self: flex-end;\n    width: 90%;\n    padding-top: 40px;\n    margin-bottom: 0;\n  }\n  footer[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n    width: 50%;\n  }\n  footer[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n    width: 40%;\n  }\n}\n@media screen and (max-width: 767px) {\n  footer[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%] {\n    align-self: center;\n  }\n  footer[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    margin-bottom: 35px;\n    width: 100%;\n  }\n  footer[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n    width: 100%;\n    margin-bottom: 45px;\n  }\n  footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n    width: 80%;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnF1ZXJ5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFSTtJQUNFLFVBQUE7RUFISjtBQUNGO0FBT0E7RUFFSTtJQUNFLGVBQUE7SUFDQSxzQkFBQTtJQUNBLG9CQUFBO0lBQ0EsVUFBQTtJQUVBLGlCQUFBO0lBQ0EsZ0JBQUE7RUFQSjtFQVFJO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VBTk47RUFPTTtJQUNFLFVBQUE7RUFMUjtBQUNGO0FBWUE7RUFFSTtJQUNFLGtCQUFBO0VBWEo7RUFZSTtJQUNFLG1CQUFBO0lBQ0EsV0FBQTtFQVZOO0VBV007SUFDRSxXQUFBO0lBQ0EsbUJBQUE7RUFUUjtFQWFFO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0VBWEo7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnF1ZXJ5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzk5cHgpIHtcclxuXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgZm9vdGVyIHtcclxuICAgIC5zZWN0aW9ucyB7XHJcbiAgICAgIHdpZHRoOiA5MiU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIGZvb3RlciB7XHJcbiAgICAuc2VjdGlvbnMge1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG5cclxuICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgID4gKiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgZm9vdGVyIHtcclxuICAgIC5zZWN0aW9ucyB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgPiAqIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29weXJpZ2h0IHtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss', './footer.component.query.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xYvl":
/*!*********************************************************************************************!*\
  !*** ./src/app/sections/car-washing-points-section/car-washing-points-section.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CarWashingPointsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarWashingPointsSectionComponent", function() { return CarWashingPointsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");



class CarWashingPointsSectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
CarWashingPointsSectionComponent.ɵfac = function CarWashingPointsSectionComponent_Factory(t) { return new (t || CarWashingPointsSectionComponent)(); };
CarWashingPointsSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarWashingPointsSectionComponent, selectors: [["app-car-washing-points-section"]], decls: 60, vars: 0, consts: [[1, "section-title"], [1, "section-description"], [1, "locations-grid"], [1, "fa", "fa-map-marker-alt"], ["action", ""], ["type", "text", "placeholder", "Name"], ["type", "text", "placeholder", "Email"], ["placeholder", "Description"]], template: function CarWashingPointsSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Washing Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Car Washing & Care Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Car Washing Point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "123 Street, New York, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "Strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Call: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " +012 345 6789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Car Washing Point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "123 Street, New York, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "Strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Call: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " +012 345 6789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Car Washing Point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "123 Street, New York, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "Strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Call: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " +012 345 6789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Car Washing Point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "123 Street, New York, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "Strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Call: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " +012 345 6789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Request for a car wash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "app-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Send Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]], styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 70px 0 60px;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  width: 40%;\n  margin-right: 7%;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .section-title[_ngcontent-%COMP%] {\n  color: #E81C2E;\n  text-transform: uppercase;\n  font-weight: 700;\n  letter-spacing: 4px;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .section-title[_ngcontent-%COMP%]::after {\n  content: \" \";\n  border: 1px solid #E81C2E;\n  display: block;\n  width: 97px;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .section-description[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-weight: 700;\n  font-size: 45px;\n  margin-bottom: 30px;\n  white-space: nowrap;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .locations-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template: repeat(2, 150px)/repeat(2, 50%);\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .locations-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .locations-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #E81C2E;\n  margin-right: 7px;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .locations-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 5px;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .locations-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 3px;\n  font-weight: 400;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n  width: 25%;\n  background-color: red;\n  padding: 20px 30px;\n  border-radius: 5px;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   h3[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 25px;\n  font-weight: 700;\n  margin: 20px 0;\n  text-align: center;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 30px 0;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  outline: none;\n  margin: 10px 0;\n  background-color: #E81C2E;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #FFFFFF;\n  height: 45px;\n  background-color: #E81C2E;\n  border-radius: 5px;\n  color: #FFFFFF;\n  padding: 10px;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #FFFFFF;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #FFFFFF;\n  color: #FFFFFF;\n  background-color: #E81C2E;\n  height: 90px;\n  padding: 10px;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #FFFFFF;\n}\nsection[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXItd2FzaGluZy1wb2ludHMtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQUk7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRU47QUFBTTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBRVI7QUFFSTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFOO0FBR0k7RUFDRSxhQUFBO0VBQ0EsOENBQUE7QUFETjtBQUVNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFBUjtBQUNRO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNWO0FBQ1E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNWO0FBQ1E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNWO0FBS0U7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFJSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFGTjtBQU1JO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUFKTjtBQUtNO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBSFI7QUFLTTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUhSO0FBS1E7RUFDRSxjQUFBO0FBSFY7QUFPTTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUxSO0FBTVE7RUFDRSxjQUFBO0FBSlY7QUFRTTtFQUNFLGdCQUFBO0FBTlIiLCJmaWxlIjoiY2FyLXdhc2hpbmctcG9pbnRzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogNzBweCAwIDYwcHg7XHJcbiAgPiA6Zmlyc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbi1yaWdodDogNyU7XHJcblxyXG4gICAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICBjb2xvcjogI0U4MUMyRTtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuXHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTgxQzJFO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA5N3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2NhdGlvbnMtZ3JpZCB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgyLCAxNTBweCkgLyByZXBlYXQoMiwgNTAlKTtcclxuICAgICAgPiBkaXYge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICNFODFDMkU7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDN7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA+IDpsYXN0LWNoaWxkIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBoMyB7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZvcm0ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICAgICoge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U4MUMyRTtcclxuICAgICAgfVxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U4MUMyRTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZXh0YXJlYXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTgxQzJFO1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgYXBwLWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */", "@media screen and (max-width: 1399px) {\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n    width: 50%;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .section-title[_ngcontent-%COMP%] {\n    margin-bottom: 12px;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .section-description[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n    width: 30%;\n  }\n}\n@media screen and (max-width: 1199px) {\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n    width: 37%;\n  }\n}\n@media screen and (max-width: 991px) {\n  section[_ngcontent-%COMP%] {\n    align-items: center;\n    flex-direction: column;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n    width: 90%;\n    margin-right: 0;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n    margin-top: 25px;\n    width: 70%;\n  }\n}\n@media screen and (max-width: 767px) {\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n    width: 90%;\n  }\n}\n@media screen and (max-width: 575px) {\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n    height: 520px;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .section-title[_ngcontent-%COMP%] {\n    color: #E81C2E;\n    text-transform: uppercase;\n    font-weight: 700;\n    letter-spacing: 4px;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .section-title[_ngcontent-%COMP%]::after {\n    content: \" \";\n    border: 1px solid #E81C2E;\n    display: block;\n    width: 97px;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .section-description[_ngcontent-%COMP%] {\n    text-transform: capitalize;\n    font-weight: 700;\n    font-size: 30px;\n    margin-bottom: 30px;\n    white-space: unset;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .locations-grid[_ngcontent-%COMP%] {\n    row-gap: 10%;\n    grid-template: repeat(2, 25%)/repeat(1, 100%);\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .locations-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    height: 100%;\n    display: flex;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .locations-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: #E81C2E;\n    margin-right: 7px;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .locations-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: 700;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child   .locations-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: 400;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n    background-color: red;\n    padding: 20px 30px;\n    border-radius: 5px;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   h3[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n    font-size: 25px;\n    font-weight: 700;\n    margin: 20px 0;\n    text-align: center;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 30px 0;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n    outline: none;\n    margin: 10px 0;\n    background-color: #E81C2E;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    border: 1px solid #FFFFFF;\n    height: 45px;\n    background-color: #E81C2E;\n    border-radius: 5px;\n    color: #FFFFFF;\n    padding: 10px;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n    color: #FFFFFF;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    border: 1px solid #FFFFFF;\n    color: #FFFFFF;\n    background-color: #E81C2E;\n    height: 90px;\n    padding: 10px;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n    color: #FFFFFF;\n  }\n  section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child   form[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXItd2FzaGluZy1wb2ludHMtc2VjdGlvbi5jb21wb25lbnQucXVlcnkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJO0lBQ0UsVUFBQTtFQUFKO0VBQ0k7SUFDRSxtQkFBQTtFQUNOO0VBQ0k7SUFDRSxlQUFBO0VBQ047RUFFRTtJQUNFLFVBQUE7RUFBSjtBQUNGO0FBS0E7RUFFSTtJQUNJLFVBQUE7RUFKTjtBQUNGO0FBUUE7RUFDRTtJQUNFLG1CQUFBO0lBQ0Esc0JBQUE7RUFORjtFQVFFO0lBQ0UsVUFBQTtJQUNBLGVBQUE7RUFOSjtFQVVFO0lBQ0UsZ0JBQUE7SUFDQSxVQUFBO0VBUko7QUFDRjtBQWFBO0VBRUk7SUFDRSxVQUFBO0VBWko7QUFDRjtBQWlCQTtFQUVJO0lBQ0UsYUFBQTtFQWhCSjtFQWlCSTtJQUNFLGNBQUE7SUFDQSx5QkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUFmTjtFQWlCTTtJQUNFLFlBQUE7SUFDQSx5QkFBQTtJQUNBLGNBQUE7SUFDQSxXQUFBO0VBZlI7RUFtQkk7SUFDRSwwQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUFqQk47RUFvQkk7SUFDRSxZQUFBO0lBQ0EsNkNBQUE7RUFsQk47RUFtQk07SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQWpCUjtFQWtCUTtJQUNFLGVBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUFoQlY7RUFrQlE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUFoQlY7RUFrQlE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUFoQlY7RUFzQkU7SUFFRSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUFyQko7RUFzQkk7SUFDRSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0VBcEJOO0VBd0JJO0lBQ0UsV0FBQTtJQUNBLGNBQUE7RUF0Qk47RUF1Qk07SUFDRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EseUJBQUE7RUFyQlI7RUF1Qk07SUFDRSx5QkFBQTtJQUNBLFlBQUE7SUFDQSx5QkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7RUFyQlI7RUF1QlE7SUFDRSxjQUFBO0VBckJWO0VBeUJNO0lBQ0Usa0JBQUE7SUFDQSx5QkFBQTtJQUNBLGNBQUE7SUFDQSx5QkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VBdkJSO0VBd0JRO0lBQ0UsY0FBQTtFQXRCVjtFQTBCTTtJQUNFLGdCQUFBO0VBeEJSO0FBQ0YiLCJmaWxlIjoiY2FyLXdhc2hpbmctcG9pbnRzLXNlY3Rpb24uY29tcG9uZW50LnF1ZXJ5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzk5cHgpIHtcclxuICBzZWN0aW9uIHtcclxuICAgID4gOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgPiA6bGFzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgc2VjdGlvbiB7XHJcbiAgICA+IDpsYXN0LWNoaWxkIHtcclxuICAgICAgICB3aWR0aDogMzclO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICBzZWN0aW9uIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgID4gOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICA+IDpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgd2lkdGg6IDcwJTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIHNlY3Rpb24ge1xyXG4gICAgPiA6bGFzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICBzZWN0aW9uIHtcclxuICAgID4gOmZpcnN0LWNoaWxkIHtcclxuICAgICAgaGVpZ2h0OiA1MjBweDtcclxuICAgICAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAjRTgxQzJFO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFODFDMkU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHdpZHRoOiA5N3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubG9jYXRpb25zLWdyaWQge1xyXG4gICAgICAgIHJvdy1nYXA6IDEwJTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMiwgMjUlKSAvIHJlcGVhdCgxLCAxMDAlKTtcclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNFODFDMkU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgPiA6bGFzdC1jaGlsZCB7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBoMyB7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U4MUMyRTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFODFDMkU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRleHRhcmVhe1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U4MUMyRTtcclxuICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXBwLWJ1dHRvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarWashingPointsSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-car-washing-points-section',
                templateUrl: './car-washing-points-section.component.html',
                styleUrls: ['./car-washing-points-section.component.scss', 'car-washing-points-section.component.query.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "ztht":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/page-nav/page-nav.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNavComponent", function() { return PageNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




function PageNavComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.label, " ");
} }
class PageNavComponent {
    constructor() {
        this.title = '';
    }
    ngOnInit() {
    }
}
PageNavComponent.ɵfac = function PageNavComponent_Factory(t) { return new (t || PageNavComponent)(); };
PageNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNavComponent, selectors: [["app-page-nav"]], inputs: { title: "title", items: "items" }, decls: 5, vars: 2, consts: [[1, "nav-body"], [1, "items"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function PageNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PageNavComponent_a_4_Template, 2, 2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".nav-body[_ngcontent-%COMP%] {\n  background-color: #202C45;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-top: 1px dotted #FFFFFF;\n  align-items: center;\n  color: #FFFFFF;\n  margin-bottom: 20px;\n}\n.nav-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 60px;\n  margin-bottom: 20px;\n  line-height: 1.3;\n}\n.nav-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n  content: \" \";\n  border: 1px solid #FFFFFF;\n  width: 40%;\n  margin: auto;\n  display: block;\n}\n.nav-body[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  color: #FFFFFF;\n  text-decoration: none;\n  font-size: 20px;\n  transition: 0.3s;\n}\n.nav-body[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:hover {\n  color: #E81C2E;\n}\n.nav-body[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: \"/\";\n  margin: 0 7px;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGFnZS1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUFFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUVKO0FBREk7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFHTjtBQUNJO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDTjtBQUNNO0VBQ0UsY0FBQTtBQUNSO0FBRU07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFBUiIsImZpbGUiOiJwYWdlLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMkM0NTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItdG9wOiAxcHggZG90dGVkICNGRkZGRkY7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGgyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyAnO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgICB3aWR0aDogNDAlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuICAuaXRlbXMge1xyXG4gICAgPiAqIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjRTgxQzJFO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCk6OmFmdGVyICB7XHJcbiAgICAgICAgY29udGVudDogXCIvXCI7XHJcbiAgICAgICAgbWFyZ2luOiAwIDdweDtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-nav',
                templateUrl: './page-nav.component.html',
                styleUrls: ['./page-nav.component.scss']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map