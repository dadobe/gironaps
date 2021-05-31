(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "aTZN");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "bP1B");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "H+1c":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  background: primary;\n  border-radius: 10px;\n  margin-top: 6px;\n  --padding-start: 6px !important;\n}\n\n/* entire container, keeps perspective */\n\n.flip-container {\n  perspective: 1000px;\n}\n\n.flip-container.flip .flipper {\n  transform: rotateY(180deg);\n}\n\n.flip-container,\n.front,\n.back {\n  width: 100%;\n  height: 500px;\n}\n\n/* flip speed goes here */\n\n.flipper {\n  transition: 0.6s;\n  transform-style: preserve-3d;\n  position: relative;\n}\n\n/* hide back of pane during swap */\n\n.front,\n.back {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n/* front pane, placed above back */\n\n.front {\n  z-index: 2;\n}\n\n/* back, initially hidden pane */\n\n.back {\n  transform: rotateY(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUFDSjs7QUFFRSx3Q0FBQTs7QUFDQTtFQUNFLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSwwQkFBQTtBQUNKOztBQUVFOzs7RUFHRSxXQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFLHlCQUFBOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtFQUVBLGtCQUFBO0FBQUo7O0FBR0Usa0NBQUE7O0FBQ0E7O0VBRUUsbUNBQUE7VUFBQSwyQkFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFESjs7QUFJRSxrQ0FBQTs7QUFDQTtFQUNFLFVBQUE7QUFESjs7QUFJRSxnQ0FBQTs7QUFDQTtFQUNFLDBCQUFBO0FBREoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiBwcmltYXJ5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogNnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgIFxuICAvKiBlbnRpcmUgY29udGFpbmVyLCBrZWVwcyBwZXJzcGVjdGl2ZSAqL1xuICAuZmxpcC1jb250YWluZXIge1xuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gIH1cbiAgIFxuICAuZmxpcC1jb250YWluZXIuZmxpcCAuZmxpcHBlciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIH1cbiAgIFxuICAuZmxpcC1jb250YWluZXIsXG4gIC5mcm9udCxcbiAgLmJhY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cbiAgIFxuICAvKiBmbGlwIHNwZWVkIGdvZXMgaGVyZSAqL1xuICAuZmxpcHBlciB7XG4gICAgdHJhbnNpdGlvbjogMC42cztcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gICBcbiAgLyogaGlkZSBiYWNrIG9mIHBhbmUgZHVyaW5nIHN3YXAgKi9cbiAgLmZyb250LFxuICAuYmFjayB7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICB9XG4gICBcbiAgLyogZnJvbnQgcGFuZSwgcGxhY2VkIGFib3ZlIGJhY2sgKi9cbiAgLmZyb250IHtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gICBcbiAgLyogYmFjaywgaW5pdGlhbGx5IGhpZGRlbiBwYW5lICovXG4gIC5iYWNrIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgfSJdfQ== */");

/***/ }),

/***/ "TuYN":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Welcome to GPS !</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"flip-container\" #flipcontainer>\n    <div class=\"flipper\">\n      <div class=\"front\">\n          <ion-card>\n              <ion-card-header>\n                <ion-card-title>Login</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n          \n                  <ion-item >\n                    <ion-label >Email:</ion-label>\n                    <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n                  </ion-item>\n          \n                  <ion-item >\n                    <ion-label >Password:</ion-label>\n                    <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n                  </ion-item>\n\n                  <ion-button expand=\"block\" type=\"submit\" color=\"primary\" [disabled]=\"!loginForm.valid\"\n                  class=\"ion-padding-horizontal ion-margin-vertical\">\n                Sign in\n                </ion-button>\n     \n                  <ion-button expand=\"block\" type=\"button\" color=\"secondary\" fill=\"outline\"\n                  class=\"ion-padding-horizontal ion-margin-vertical\" (click)=\"toggleRegister()\">\n                Create Account\n                </ion-button>\n                </form>\n              </ion-card-content>\n            </ion-card>\n      </div>\n\n      <div class=\"back\">\n          <ion-card>\n              <ion-card-header>\n                <ion-card-title>New Account</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n          \n                  <ion-item >\n                    <ion-label >Email:</ion-label>\n                    <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n                  </ion-item>\n          \n                  <ion-item >\n                    <ion-label >Name:</ion-label>\n                    <ion-input formControlName=\"fullname\"></ion-input>\n                  </ion-item>\n          \n                  <ion-item >\n                    <ion-label >Password:</ion-label>\n                    <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n                  </ion-item>\n          \n                  <ion-button expand=\"block\" type=\"submit\" class=\"ion-padding-horizontal ion-margin-vertical\"\n                  [disabled]=\"!registerForm.valid\">\n                    Register\n                  </ion-button>\n\n                  <ion-button expand=\"block\" type=\"button\" color=\"secondary\" fill=\"clear\"\n                  class=\"ion-padding-horizontal ion-margin-vertical\" (click)=\"toggleRegister()\">\n                  <ion-icon name=\"arrow-back\" slot=\"start\"></ion-icon>\n                Back to Login\n                </ion-button>\n\n                </form>\n              </ion-card-content>\n            </ion-card>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "aTZN":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "bP1B");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "bP1B":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "TuYN");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "H+1c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let LoginPage = class LoginPage {
    constructor(fb, authService, loadingCtrl, toastCtrl, alertCtrl, router) {
        this.fb = fb;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
            fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]]
        });
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            this.authService.signIn(this.loginForm.value).subscribe(user => {
                loading.dismiss();
                this.router.navigate(["/tabs"]);
                console.log('after login: ', user);
                //this.navigateByRole(user['role']);
            }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                loading.dismiss();
                let alert = yield this.alertCtrl.create({
                    header: 'Error',
                    message: err.message,
                    buttons: ['OK']
                });
                alert.present();
            }));
        });
    }
    register() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            this.authService.signUp(this.registerForm.value).then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield loading.dismiss();
                let toast = yield this.toastCtrl.create({
                    duration: 3000,
                    message: 'Successfully created new Account!'
                });
                toast.present();
                console.log('finished: ', res);
                //this.navigateByRole(this.registerForm.value['role']);
            }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield loading.dismiss();
                let alert = yield this.alertCtrl.create({
                    header: 'Error',
                    message: err.message,
                    buttons: ['OK']
                });
                alert.present();
            }));
        });
    }
    toggleRegister() {
        this.flipcontainer.nativeElement.classList.toggle('flip');
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
LoginPage.propDecorators = {
    flipcontainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['flipcontainer', { static: false },] }]
};
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map