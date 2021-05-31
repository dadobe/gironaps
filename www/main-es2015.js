(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danieldominguez/gironaps/src/main.ts */"zUnb");


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
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCv5DKhUSkDuFkJ3COqOVeL-cleKRqm3J4",
        authDomain: "gironaprosport-45a9e.firebaseapp.com",
        databaseURL: "https://gironaprosport-45a9e-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "gironaprosport-45a9e",
        storageBucket: "gironaprosport-45a9e.appspot.com",
        messagingSenderId: "671585157138",
        appId: "1:671585157138:web:b834301b2b255f5a75d8cb",
        measurementId: "G-QZZR7N38CH"
    },
    "stripe_key": "pk_test_51Iuh9hFow9Lr5ZutXI8NV9BgnMsPf1McQwcShLNkzo67spdec78j7xWPCAxLHb579Ahdl1OKK2c70WcOLPbaRXsd00uJTgjpSq"
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

/***/ "E8I8":
/*!*******************************************************!*\
  !*** ./src/app/pages/cart-modal/cart-modal.module.ts ***!
  \*******************************************************/
/*! exports provided: CartModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModalPageModule", function() { return CartModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cart_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-modal-routing.module */ "WjKV");
/* harmony import */ var _cart_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart-modal.page */ "x/JU");







let CartModalPageModule = class CartModalPageModule {
};
CartModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cart_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartModalPageRoutingModule"]
        ],
        declarations: [_cart_modal_page__WEBPACK_IMPORTED_MODULE_6__["CartModalPage"]]
    })
], CartModalPageModule);



/***/ }),

/***/ "KwcL":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pwa-action-sheet.entry.js": [
		"jDxf",
		43
	],
	"./pwa-camera-modal-instance.entry.js": [
		"37vE",
		44
	],
	"./pwa-camera-modal.entry.js": [
		"cJxf",
		45
	],
	"./pwa-camera.entry.js": [
		"eGHz",
		46
	],
	"./pwa-toast.entry.js": [
		"fHjd",
		47
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "KwcL";
module.exports = webpackAsyncContext;

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.initializeApp();
    }
    initializeApp() {
        this.checkDarkmode();
    }
    // Method to toggle between DARK and LIGHT mode
    checkDarkmode() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        console.log(prefersDark.matches);
        if (prefersDark.matches) {
            document.body.classList.toggle('dark');
        }
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "T794":
/*!*******************************************************!*\
  !*** ./src/app/pages/cart-modal/cart-modal.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LW1vZGFsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "WjKV":
/*!***************************************************************!*\
  !*** ./src/app/pages/cart-modal/cart-modal-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CartModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModalPageRoutingModule", function() { return CartModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cart_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-modal.page */ "x/JU");




const routes = [
    {
        path: '',
        component: _cart_modal_page__WEBPACK_IMPORTED_MODULE_3__["CartModalPage"]
    }
];
let CartModalPageRoutingModule = class CartModalPageRoutingModule {
};
CartModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CartModalPageRoutingModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth-guard */ "HTFn");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "aaed");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _pages_cart_modal_cart_modal_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/cart-modal/cart-modal.module */ "E8I8");







//Imports for AUTHENTICATION (login & register)
// > npm install firebase @angular/fire




//in this import we connect our app with Firebase

//Import of HTTPClient module to interact with API

//Import email composer for INQUIRY EMAILS in details pages
// 'npm install cordova-plugin-email-composer' & 'npm install @ionic-native/email-composer'


//Import for DarkMode theme

//Import for the cart module

//Import social sharing option
// > 'npm install cordova-plugin-x-socialsharing' & 'npm install @ionic-native/social-sharing'
// install also related dependecy 'npm install @ionic-native/core'
//import { SocialSharing } from "@ionic-native/social-sharing/ngx";
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorageModule"],
            _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthGuardModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_15__["IonicStorageModule"].forRoot(),
            _pages_cart_modal_cart_modal_module__WEBPACK_IMPORTED_MODULE_16__["CartModalPageModule"]
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            { provide: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_13__["EmailComposer"], useClass: _ionic_native_core__WEBPACK_IMPORTED_MODULE_14__["IonicNativePlugin"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "c14U":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let CartService = class CartService {
    constructor() {
        this.cart = [];
        this.cartItems = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.cartItemCount = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
    }
    getCart() {
        return this.cartItems.asObservable();
    }
    getCartItemCount() {
        return this.cartItemCount;
    }
    addProduct(product) {
        let added = false;
        for (let p of this.cart) {
            if (p.id === product.id) {
                p.amount += 1;
                added = true;
                break;
            }
        }
        if (!added) {
            product.amount = 1;
            this.cart.push(product);
        }
        this.cartItems.next(this.cart);
        this.cartItemCount.next(this.cartItemCount.value + 1);
    }
    //In here we make sure that it's not possible to decrease the amount of product if already reaches zero
    decreaseProduct(product) {
        for (let [index, p] of this.cart.entries()) {
            if (p.id === product.id) {
                p.amount -= 1;
                if (p.amount == 0) {
                    this.cart.splice(index, 1);
                }
            }
        }
        this.cartItems.next(this.cart);
        this.cartItemCount.next(this.cartItemCount.value - 1);
    }
    removeProduct(product) {
        for (let [index, p] of this.cart.entries()) {
            if (p.id === product.id) {
                this.cartItemCount.next(this.cartItemCount.value - p.amount);
                this.cart.splice(index, 1);
            }
        }
        this.cartItems.next(this.cart);
    }
    //Helper function to find out th specific item count for an object
    getItemCount(id) {
        for (let [index, p] of this.cart.entries()) {
            if (p.id === id) {
                return p.amount;
            }
        }
        return 0;
    }
};
CartService.ctorParameters = () => [];
CartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CartService);



/***/ }),

/***/ "cBv1":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart-modal/cart-modal.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n \n  <div class=\"ion-text-end\">\n    <ion-button (click)=\"close()\" fill=\"clear\" color=\"dark\">\n      <ion-icon name=\"close\" slot=\"start\"></ion-icon>\n    </ion-button>\n  </div>\n \n  <div class=\"ion-padding\">\n \n    <ion-list>\n      <ion-item *ngFor=\"let p of cart\" class=\"ion-text-wrap\">\n        <ion-grid>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"3\" class=\"ion-text-center\">\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"decreaseCartItem(p)\">\n                <ion-icon name=\"remove-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n \n            <ion-col size=\"2\" class=\"ion-text-center\">\n              {{ p.amount }}\n            </ion-col>\n \n            <ion-col size=\"3\" class=\"ion-text-center\">\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"increaseCartItem(p)\">\n                <ion-icon name=\"add-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n \n            <ion-col size=\"2\" offset=\"2\">\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"emptyCartItem(p)\">\n                <ion-icon color=\"danger\" name=\"trash-bin-outline\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"8\">\n              <b>{{ p.itemName }}</b>\n            </ion-col>\n            <ion-col size=\"3\" class=\"ion-text-end\">\n              {{ p.amount * p.itemPrice | currency:'EUR' }}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n\n      <p>---------------------</p>\n\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"8\">\n              Total:\n            </ion-col>\n            <ion-col size=\"3\" class=\"ion-text-end\">\n              {{ getTotal() | currency:'EUR' }}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n \n    <ion-button expand=\"full\" (click)=\"checkout()\">\n      Checkout\n    </ion-button>\n  </div>\n \n</ion-content>");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | tabs-tabs-module */[__webpack_require__.e("default~firebase-auth~tabs-tabs-module"), __webpack_require__.e("tabs-tabs-module")]).then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then(m => m.TabsPageModule)
    } /* ,
    {
      path: 'login',
      loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
      canActivate: [CanEnterLoginPageGuard]
    }
    */,
    {
        path: 'cart-modal',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/cart-modal/cart-modal.module */ "E8I8")).then(m => m.CartModalPageModule)
    }
    /* ,
    {
      // Lazy loaded path
      // not needed anymore as this path is a CHILDPATH in the TABS-ROUTING.MODULE
      path: 'product-detail',
      loadChildren: () => import('./pages/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
    },
    {
      // Lazy loaded path
      // not needed anymore as this path is a CHILDPATH in the TABS-ROUTING.MODULE
      path: 'biketour-detail',
      loadChildren: () => import('./pages/biketour-detail/biketour-detail.module').then( m => m.BiketourDetailPage)
    },
    {
      // Lazy loaded path
      // not needed anymore as this path is a CHILDPATH in the TABS-ROUTING.MODULE
      path: 'tourism-detail',
      loadChildren: () => import('./pages/tourism-detail/tourism-detail.module').then( m => m.TourismDetailPageModule)
    },
    {
      // Lazy loaded path
      // not needed anymore as this path is a CHILDPATH in the TABS-ROUTING.MODULE
      path: 'event-detail',
      loadChildren: () => import('./pages/event-detail/event-detail.module').then( m => m.EventDetailPageModule)
    } */
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "x/JU":
/*!*****************************************************!*\
  !*** ./src/app/pages/cart-modal/cart-modal.page.ts ***!
  \*****************************************************/
/*! exports provided: CartModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModalPage", function() { return CartModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart-modal.page.html */ "cBv1");
/* harmony import */ var _cart_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-modal.page.scss */ "T794");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/cart.service */ "c14U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let CartModalPage = class CartModalPage {
    constructor(_cartService, _modalController, _router) {
        this._cartService = _cartService;
        this._modalController = _modalController;
        this._router = _router;
        this.cart = [];
    }
    ngOnInit() {
        this._cartService.getCart().subscribe(res => {
            this.cart = res;
        });
    }
    increaseCartItem(product) {
        this._cartService.addProduct(product);
    }
    decreaseCartItem(product) {
        this._cartService.decreaseProduct(product);
    }
    emptyCartItem(product) {
        this._cartService.removeProduct(product);
    }
    getTotal() {
        return this.cart.reduce((i, j) => i + j.itemPrice * j.amount, 0);
    }
    close() {
        this._modalController.dismiss();
    }
    checkout() {
        this._modalController.dismiss();
        this._router.navigateByUrl('/checkout');
    }
};
CartModalPage.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
CartModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-cart-modal',
        template: _raw_loader_cart_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CartModalPage);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ "2Zi2");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "AytR");


// PWA elements to add simple camera like overlay as a fallback when running Capacitor in the browser

Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])(window);


if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


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

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map