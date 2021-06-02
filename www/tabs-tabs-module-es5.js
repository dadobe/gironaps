(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
    /***/
    "AHrv":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function AHrv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    \n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"cart\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"person\"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n";
      /***/
    },

    /***/
    "FpQV":
    /*!*************************************************!*\
      !*** ./src/app/guards/automatic-login.guard.ts ***!
      \*************************************************/

    /*! exports provided: AutomaticLoginGuard */

    /***/
    function FpQV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutomaticLoginGuard", function () {
        return AutomaticLoginGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/auth.service */
      "lGQG");

      var AutomaticLoginGuard = /*#__PURE__*/function () {
        function AutomaticLoginGuard(_route, _auth) {
          _classCallCheck(this, AutomaticLoginGuard);

          this._route = _route;
          this._auth = _auth;
        }

        _createClass(AutomaticLoginGuard, [{
          key: "canActivate",
          value: function canActivate(route) {
            return this._auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
              console.log('user automatically logged:', user);

              if (!user) {
                return true;
              } else {
                return false;
              }
            }));
          }
        }]);

        return AutomaticLoginGuard;
      }();

      AutomaticLoginGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      };

      AutomaticLoginGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AutomaticLoginGuard);
      /***/
    },

    /***/
    "MJr+":
    /*!***********************************!*\
      !*** ./src/app/tabs/tabs.page.ts ***!
      \***********************************/

    /*! exports provided: TabsPage */

    /***/
    function MJr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
        return TabsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "AHrv");
      /* harmony import */


      var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tabs.page.scss */
      "PkIa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TabsPage = function TabsPage() {
        _classCallCheck(this, TabsPage);
      };

      TabsPage.ctorParameters = function () {
        return [];
      };

      TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TabsPage);
      /***/
    },

    /***/
    "PkIa":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function PkIa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "hO9l":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.module.ts ***!
      \*************************************/

    /*! exports provided: TabsPageModule */

    /***/
    function hO9l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
        return TabsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tabs-routing.module */
      "kB8F");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tabs.page */
      "MJr+");

      var TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
      })], TabsPageModule);
      /***/
    },

    /***/
    "kB8F":
    /*!*********************************************!*\
      !*** ./src/app/tabs/tabs-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: TabsPageRoutingModule */

    /***/
    function kB8F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
        return TabsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/auth-guard */
      "HTFn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./tabs.page */
      "MJr+");
      /* harmony import */


      var _guards_automatic_login_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../guards/automatic-login.guard */
      "FpQV"); //In here we asure that unauthorized user are send back to login page


      var redirectUnauthorizedToLogin = function redirectUnauthorizedToLogin() {
        return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__["redirectUnauthorizedTo"])(['/']);
      };

      var routes = [{
        /* Changing the "tabs/tab1" on redirectTo to "login" we make sure that
        the default page visited is the LOGIN screen */
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-login-login-module */
          "pages-login-login-module").then(__webpack_require__.bind(null,
          /*! ../pages/login/login.module */
          "F4UR")).then(function (m) {
            return m.LoginPageModule;
          });
        },
        canActivate: [_guards_automatic_login_guard__WEBPACK_IMPORTED_MODULE_5__["AutomaticLoginGuard"]]
      }, {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"],
        children: [{
          path: 'tab1',
          canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuthGuard"]],
          data: {
            redirectUnauthorizedToLogin: redirectUnauthorizedToLogin
          },
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | tab1-tab1-module */
              [__webpack_require__.e("common"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null,
              /*! ../tab1/tab1.module */
              "tmrb")).then(function (m) {
                return m.Tab1PageModule;
              });
            }
          }, {
            // also the footer tabs are reachable when we go from HOME PAGE to BIKETOURS DETAIL page
            path: 'biketour-detail/:biketourID',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-biketour-detail-biketour-detail-module */
              [__webpack_require__.e("common"), __webpack_require__.e("pages-biketour-detail-biketour-detail-module")]).then(__webpack_require__.bind(null,
              /*! ../pages/biketour-detail/biketour-detail.module */
              "ptiB")).then(function (m) {
                return m.BiketourDetailPageModule;
              });
            }
          }, {
            // also the footer tabs are reachable when we go from HOME PAGE to TOURISM DETAIL page
            path: 'tourism-detail/:tourismID',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-tourism-detail-tourism-detail-module */
              [__webpack_require__.e("common"), __webpack_require__.e("pages-tourism-detail-tourism-detail-module")]).then(__webpack_require__.bind(null,
              /*! ../pages/tourism-detail/tourism-detail.module */
              "CcpI")).then(function (m) {
                return m.TourismDetailPageModule;
              });
            }
          }, {
            // also the footer tabs are reachable when we go from HOME PAGE to EVENT DETAIL page
            path: 'event-detail/:eventID',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-event-detail-event-detail-module */
              [__webpack_require__.e("common"), __webpack_require__.e("pages-event-detail-event-detail-module")]).then(__webpack_require__.bind(null,
              /*! ../pages/event-detail/event-detail.module */
              "fp5j")).then(function (m) {
                return m.EventDetailPageModule;
              });
            }
          }]
        }, {
          path: 'tab2',
          canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuthGuard"]],
          data: {
            redirectUnauthorizedToLogin: redirectUnauthorizedToLogin
          },
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | tab2-tab2-module */
              [__webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null,
              /*! ../tab2/tab2.module */
              "TUkU")).then(function (m) {
                return m.Tab2PageModule;
              });
            }
          }, {
            path: 'product-detail/:id',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-product-detail-product-detail-module */
              [__webpack_require__.e("common"), __webpack_require__.e("pages-product-detail-product-detail-module")]).then(__webpack_require__.bind(null,
              /*! ../pages/product-detail/product-detail.module */
              "ePSv")).then(function (m) {
                return m.ProductDetailPageModule;
              });
            }
          }, {
            path: 'checkout',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-checkout-checkout-module */
              [__webpack_require__.e("common"), __webpack_require__.e("pages-checkout-checkout-module")]).then(__webpack_require__.bind(null,
              /*! ../pages/checkout/checkout.module */
              "Tjht")).then(function (m) {
                return m.CheckoutPageModule;
              });
            }
          }, {
            path: 'orders',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-orders-orders-module */
              [__webpack_require__.e("common"), __webpack_require__.e("pages-orders-orders-module")]).then(__webpack_require__.bind(null,
              /*! ../pages/orders/orders.module */
              "Xlj8")).then(function (m) {
                return m.OrdersPageModule;
              });
            }
          }, {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          }]
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
          data: {
            redirectUnauthorizedToLogin: redirectUnauthorizedToLogin
          },
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | tab3-tab3-module */
              [__webpack_require__.e("common"), __webpack_require__.e("tab3-tab3-module")]).then(__webpack_require__.bind(null,
              /*! ../tab3/tab3.module */
              "k+ul")).then(function (m) {
                return m.Tab3PageModule;
              });
            }
          }, {
            path: 'orders',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-orders-orders-module */
              [__webpack_require__.e("common"), __webpack_require__.e("pages-orders-orders-module")]).then(__webpack_require__.bind(null,
              /*! ../pages/orders/orders.module */
              "Xlj8")).then(function (m) {
                return m.OrdersPageModule;
              });
            }
          }]
        }, {
          path: '',
          redirectTo: '/tabs/tab1',
          pathMatch: 'full'
        }]
      }, {
        path: 'cart-modal',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ../pages/cart-modal/cart-modal.module */
          "E8I8")).then(function (m) {
            return m.CartModalPageModule;
          });
        }
      }];

      var TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
      })], TabsPageRoutingModule);
      /***/
    },

    /***/
    "lGQG":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @firebase/app */
      "zIRd");
      /* harmony import */


      var _firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @firebase/auth */
      "t6oF");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3"); //For hanlde authorizations
      //import * as firebase from 'firebase/app';
      // To upload data (images ofr example)


      var AuthService = /*#__PURE__*/function () {
        function AuthService(_afAuth, _db, _navCtrl, _storage) {
          var _this = this;

          _classCallCheck(this, AuthService);

          this._afAuth = _afAuth;
          this._db = _db;
          this._navCtrl = _navCtrl;
          this._storage = _storage;
          this.user = this._afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) {
            if (user) {
              return _this._db.doc("users/".concat(user.uid)).valueChanges();
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }
          }));
        }

        _createClass(AuthService, [{
          key: "signIn",
          value: function signIn(credentials) {
            var _this2 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this._afAuth.signInWithEmailAndPassword(credentials.email, credentials.password)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) {
              console.log('real user: ', user);

              if (user) {
                return _this2._db.doc("users/".concat(user.user.uid)).valueChanges();
              } else {
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

        }, {
          key: "signUp",
          value: function signUp(_ref) {
            var email = _ref.email,
                password = _ref.password,
                fullname = _ref.fullname;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var credential;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this._afAuth.createUserWithEmailAndPassword(email, password);

                    case 2:
                      credential = _context.sent;
                      return _context.abrupt("return", this.updateUserData(credential.user, fullname));

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // Sets user data to firestore on login

        }, {
          key: "updateUserData",
          value: function updateUserData(user) {
            var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var image = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            var userRef = this._db.doc("users/".concat(user.uid));

            var data = {
              uid: user.uid,
              email: user.email,
              displayName: name,
              photoURL: image
            };
            return userRef.set(data, {
              merge: true
            });
          } //Mehtod for sign out the application

        }, {
          key: "signOut",
          value: function signOut() {
            var _this3 = this;

            this._afAuth.signOut().then(function () {
              _this3._navCtrl.navigateRoot('/');
            });
          } //Method to get the user ID

        }, {
          key: "getUserId",
          value: function getUserId() {
            return _firebase_app__WEBPACK_IMPORTED_MODULE_7__["firebase"].auth().currentUser.uid;
          } //Methos to get the user DATA

        }, {
          key: "getUserData",
          value: function getUserData() {
            return this._db.doc("users/".concat(this.getUserId())).valueChanges();
          } //Method to load the image on the profile tab

        }, {
          key: "uploadAvatar",
          value: function uploadAvatar(base64String) {
            var _this4 = this;

            var filePath = "".concat(this.getUserId(), "/avatar");

            var fileRef = this._storage.ref(filePath);

            var task = fileRef.putString(base64String, 'base64', {
              contentType: 'image/png'
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(task).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (result) {
              // Upload Task finished, get URL to the image
              return fileRef.getDownloadURL();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (photoURL) {
              // Set the URL to the user document
              var uploadPromise = _this4._db.doc("users/".concat(_this4.getUserId())).set({
                photoURL: photoURL
              }, {
                merge: true
              });

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(uploadPromise);
            }));
          }
        }, {
          key: "getEmail",
          value: function getEmail() {
            return _firebase_app__WEBPACK_IMPORTED_MODULE_7__["firebase"].auth().currentUser.email;
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorage"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tabs-tabs-module-es5.js.map