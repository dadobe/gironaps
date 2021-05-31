(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkout-checkout-module"],{

/***/ "144Y":
/*!***************************************************!*\
  !*** ./src/app/pages/checkout/checkout.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".StripeElement {\n  padding: 20px 20px;\n}\n\n.StripeElement--webkit-autofill {\n  background-color: #fefde5 !important;\n}\n\n#card-errors {\n  text-align: center;\n  color: var(--ion-color-danger);\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNrb3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJjaGVja291dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuU3RyaXBlRWxlbWVudCB7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbn1cbiBcbi5TdHJpcGVFbGVtZW50LS13ZWJraXQtYXV0b2ZpbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZGU1ICFpbXBvcnRhbnQ7XG59XG4gXG4jY2FyZC1lcnJvcnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "Cqfx":
/*!*************************************************!*\
  !*** ./src/app/pages/checkout/checkout.page.ts ***!
  \*************************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkout.page.html */ "dKDm");
/* harmony import */ var _checkout_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout.page.scss */ "144Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/cart.service */ "c14U");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");











let CheckoutPage = class CheckoutPage {
    constructor(_loadingCtrl, _fb, _authService, _productService, _toastCtrl, _cartService, _router) {
        this._loadingCtrl = _loadingCtrl;
        this._fb = _fb;
        this._authService = _authService;
        this._productService = _productService;
        this._toastCtrl = _toastCtrl;
        this._cartService = _cartService;
        this._router = _router;
        this.cart = [];
    }
    ngOnInit() {
        this._cartService.getCart().subscribe(res => {
            this.cart = res;
        });
        this.dataForm = this._fb.group({
            name: ['Daniel Domínguez', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            zip: ['17004', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            street: ['Avenida Girona', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            city: ['Girona', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            country: ['ES', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        //Stripe Settings, passing the stripe_key which is allocated in the environment file.
        this.stripe = Stripe(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].stripe_key);
        const elements = this.stripe.elements();
        //Card element ehich captures the input
        this.card = elements.creare('card');
        this.card.mount(this.cardElement.nativeElement);
        this.card.addEventListener('change', ({ error }) => {
            console.log('error:', error);
            this.cardErrors = error & error.message;
        });
    }
    getTotal() {
        return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
    }
    buyNow() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
};
CheckoutPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CheckoutPage.propDecorators = {
    cardElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['cardElement', { static: true },] }]
};
CheckoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkout',
        template: _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkout_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CheckoutPage);



/***/ }),

/***/ "Pnj6":
/*!***********************************************************!*\
  !*** ./src/app/pages/checkout/checkout-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CheckoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageRoutingModule", function() { return CheckoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout.page */ "Cqfx");




const routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutPage"]
    }
];
let CheckoutPageRoutingModule = class CheckoutPageRoutingModule {
};
CheckoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckoutPageRoutingModule);



/***/ }),

/***/ "Tjht":
/*!***************************************************!*\
  !*** ./src/app/pages/checkout/checkout.module.ts ***!
  \***************************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout-routing.module */ "Pnj6");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "Cqfx");








let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
    })
], CheckoutPageModule);



/***/ }),

/***/ "dKDm":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"buyer\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Checkout</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n \n  <form [formGroup]=\"dataForm\" (submit)=\"buyNow()\">\n    <ion-item>\n      <ion-label position=\"stacked\">Name</ion-label>\n      <ion-input formControlName=\"name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Street</ion-label>\n      <ion-input formControlName=\"street\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">City</ion-label>\n      <ion-input formControlName=\"city\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">ZIP</ion-label>\n      <ion-input formControlName=\"zip\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Country</ion-label>\n      <ion-input formControlName=\"country\"></ion-input>\n    </ion-item>\n \n    <div #cardElement></div>\n \n    <div id=\"card-errors\" role=\"alert\">\n      {{ cardErrors}}\n    </div>\n \n    <ion-button expand=\"full\" type=\"submit\" [disabled]=\"!dataForm.valid\">Buy now for €{{ getTotal() }}</ion-button>\n  </form>\n \n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-checkout-checkout-module-es2015.js.map