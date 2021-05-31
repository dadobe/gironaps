(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "AHrv":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    \n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"cart\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"person\"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n");

/***/ }),

/***/ "FpQV":
/*!*************************************************!*\
  !*** ./src/app/guards/automatic-login.guard.ts ***!
  \*************************************************/
/*! exports provided: AutomaticLoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomaticLoginGuard", function() { return AutomaticLoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");





let AutomaticLoginGuard = class AutomaticLoginGuard {
    constructor(_route, _auth) {
        this._route = _route;
        this._auth = _auth;
    }
    canActivate(route) {
        return this._auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => {
            console.log('user automatically logged:', user);
            if (!user) {
                return true;
            }
            else {
                return false;
            }
        }));
    }
};
AutomaticLoginGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
AutomaticLoginGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AutomaticLoginGuard);



/***/ }),

/***/ "MJr+":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tabs.page.html */ "AHrv");
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page.scss */ "PkIa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage.ctorParameters = () => [];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabsPage);



/***/ }),

/***/ "PkIa":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "hO9l":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "kB8F");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "MJr+");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "kB8F":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth-guard */ "HTFn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.page */ "MJr+");
/* harmony import */ var _guards_automatic_login_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guards/automatic-login.guard */ "FpQV");






//In here we asure that unauthorized user are send back to login page
const redirectUnauthorizedToLogin = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__["redirectUnauthorizedTo"])(['/']);
const routes = [
    {
        /* Changing the "tabs/tab1" on redirectTo to "login" we make sure that
        the default page visited is the LOGIN screen */
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-login-login-module */ "pages-login-login-module").then(__webpack_require__.bind(null, /*! ../pages/login/login.module */ "F4UR")).then(m => m.LoginPageModule),
        canActivate: [_guards_automatic_login_guard__WEBPACK_IMPORTED_MODULE_5__["AutomaticLoginGuard"]]
    },
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"],
        children: [
            {
                path: 'tab1',
                canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuthGuard"]],
                data: { redirectUnauthorizedToLogin },
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | tab1-tab1-module */[__webpack_require__.e("common"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null, /*! ../tab1/tab1.module */ "tmrb")).then(m => m.Tab1PageModule)
                    },
                    {
                        // also the footer tabs are reachable when we go from HOME PAGE to BIKETOURS DETAIL page
                        path: 'biketour-detail/:biketourID',
                        loadChildren: () => Promise.all(/*! import() | pages-biketour-detail-biketour-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-biketour-detail-biketour-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/biketour-detail/biketour-detail.module */ "ptiB")).then(m => m.BiketourDetailPageModule)
                    },
                    {
                        // also the footer tabs are reachable when we go from HOME PAGE to TOURISM DETAIL page
                        path: 'tourism-detail/:tourismID',
                        loadChildren: () => Promise.all(/*! import() | pages-tourism-detail-tourism-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-tourism-detail-tourism-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/tourism-detail/tourism-detail.module */ "CcpI")).then(m => m.TourismDetailPageModule)
                    },
                    {
                        // also the footer tabs are reachable when we go from HOME PAGE to EVENT DETAIL page
                        path: 'event-detail/:eventID',
                        loadChildren: () => Promise.all(/*! import() | pages-event-detail-event-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-event-detail-event-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/event-detail/event-detail.module */ "fp5j")).then(m => m.EventDetailPageModule)
                    }
                ]
            },
            {
                path: 'tab2',
                canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuthGuard"]],
                data: { redirectUnauthorizedToLogin },
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | tab2-tab2-module */[__webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null, /*! ../tab2/tab2.module */ "TUkU")).then(m => m.Tab2PageModule)
                    },
                    {
                        path: 'product-detail/:id',
                        loadChildren: () => Promise.all(/*! import() | pages-product-detail-product-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-product-detail-product-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/product-detail/product-detail.module */ "ePSv")).then(m => m.ProductDetailPageModule)
                    },
                    {
                        path: 'checkout',
                        loadChildren: () => Promise.all(/*! import() | pages-checkout-checkout-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-checkout-checkout-module")]).then(__webpack_require__.bind(null, /*! ../pages/checkout/checkout.module */ "Tjht")).then(m => m.CheckoutPageModule)
                    },
                    {
                        path: '',
                        redirectTo: 'list',
                        pathMatch: 'full'
                    }
                ]
            },
            /* {
              path:'product-detail',
              loadChildren: () => import('../pages/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
            }
            ,
            {
              path:'product-detail/:id',
              loadChildren: () => import('../pages/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
            }
            , */
            {
                path: 'tab3',
                canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuthGuard"]],
                data: { redirectUnauthorizedToLogin },
                loadChildren: () => Promise.all(/*! import() | tab3-tab3-module */[__webpack_require__.e("common"), __webpack_require__.e("tab3-tab3-module")]).then(__webpack_require__.bind(null, /*! ../tab3/tab3.module */ "k+ul")).then(m => m.Tab3PageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @firebase/app */ "zIRd");
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @firebase/auth */ "t6oF");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");


//For hanlde authorizations





//import * as firebase from 'firebase/app';


// To upload data (images ofr example)

let AuthService = class AuthService {
    constructor(_afAuth, _db, _navCtrl, _storage) {
        this._afAuth = _afAuth;
        this._db = _db;
        this._navCtrl = _navCtrl;
        this._storage = _storage;
        this.user = this._afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(user => {
            if (user) {
                return this._db.doc(`users/${user.uid}`).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }
        }));
    }
    signIn(credentials) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this._afAuth.signInWithEmailAndPassword(credentials.email, credentials.password)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(user => {
            console.log('real user: ', user);
            if (user) {
                return this._db.doc(`users/${user.user.uid}`).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }
        }));
    }
    /* signUp(credentials) {
      return this._afAuth.createUserWithEmailAndPassword(credentials.email, credentials.password).then(data => {
        console.log('after register: ', data);
        return this._db.doc(`users/${data.user.uid}`).set({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password
        });
      });
    } */
    //Method to regster as new user
    signUp({ email, password, fullname }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const credential = yield this._afAuth.createUserWithEmailAndPassword(email, password);
            return this.updateUserData(credential.user, fullname);
        });
    }
    // Sets user data to firestore on login
    updateUserData(user, name = null, image = null) {
        const userRef = this._db.doc(`users/${user.uid}`);
        const data = {
            uid: user.uid,
            email: user.email,
            displayName: name,
            photoURL: image,
        };
        return userRef.set(data, { merge: true });
    }
    //Mehtod for sign out the application
    signOut() {
        this._afAuth.signOut().then(() => {
            this._navCtrl.navigateRoot('/');
        });
    }
    //Method to get the user ID
    getUserId() {
        return _firebase_app__WEBPACK_IMPORTED_MODULE_7__["firebase"].auth().currentUser.uid;
    }
    //Methos to get the user DATA
    getUserData() {
        return this._db.doc(`users/${this.getUserId()}`).valueChanges();
    }
    //Method to load the image on the profile tab
    uploadAvatar(base64String) {
        const filePath = `${this.getUserId()}/avatar`;
        const fileRef = this._storage.ref(filePath);
        const task = fileRef.putString(base64String, 'base64', { contentType: 'image/png' });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(task).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(result => {
            // Upload Task finished, get URL to the image
            return fileRef.getDownloadURL();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(photoURL => {
            // Set the URL to the user document
            const uploadPromise = this._db
                .doc(`users/${this.getUserId()}`)
                .set({ photoURL }, { merge: true });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(uploadPromise);
        }));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorage"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map