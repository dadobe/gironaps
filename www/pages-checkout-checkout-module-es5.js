(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkout-checkout-module"], {
    /***/
    "144Y":
    /*!***************************************************!*\
      !*** ./src/app/pages/checkout/checkout.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".StripeElement {\n  padding: 20px 20px;\n}\n\n.StripeElement--webkit-autofill {\n  background-color: #fefde5 !important;\n}\n\n#card-errors {\n  text-align: center;\n  color: var(--ion-color-danger);\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNrb3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJjaGVja291dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuU3RyaXBlRWxlbWVudCB7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbn1cbiBcbi5TdHJpcGVFbGVtZW50LS13ZWJraXQtYXV0b2ZpbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZGU1ICFpbXBvcnRhbnQ7XG59XG4gXG4jY2FyZC1lcnJvcnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "Cqfx":
    /*!*************************************************!*\
      !*** ./src/app/pages/checkout/checkout.page.ts ***!
      \*************************************************/

    /*! exports provided: CheckoutPage */

    /***/
    function Cqfx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutPage", function () {
        return CheckoutPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./checkout.page.html */
      "dKDm");
      /* harmony import */


      var _checkout_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./checkout.page.scss */
      "144Y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/cart.service */
      "c14U");
      /* harmony import */


      var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/product.service */
      "Gdn9");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var CheckoutPage = /*#__PURE__*/function () {
        function CheckoutPage(_loadingCtrl, _fb, _authService, _productService, _toastCtrl, _cartService, _router) {
          _classCallCheck(this, CheckoutPage);

          this._loadingCtrl = _loadingCtrl;
          this._fb = _fb;
          this._authService = _authService;
          this._productService = _productService;
          this._toastCtrl = _toastCtrl;
          this._cartService = _cartService;
          this._router = _router;
          this.cart = [];
        }

        _createClass(CheckoutPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this._cartService.getCart().subscribe(function (res) {
              _this.cart = res;
            });

            this.dataForm = this._fb.group({
              name: ['Daniel Domínguez', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              zip: ['17004', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              street: ['Avenida Girona', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              city: ['Girona', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              country: ['ES', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }); //Stripe Settings, passing the stripe_key which is allocated in the environment file.

            this.stripe = Stripe(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].stripe_key);
            var elements = this.stripe.elements(); //Card element which captures the input

            this.card = elements.create('card');
            this.card.mount(this.cardElement.nativeElement);
            this.card.addEventListener('card changes: ', function (_ref) {
              var error = _ref.error;
              console.log('error:', error);
              _this.cardErrors = error && error.message;
            });
          }
        }, {
          key: "getTotal",
          value: function getTotal() {
            return this.cart.reduce(function (i, j) {
              return i + j.itemPrice * j.amount;
            }, 0);
          }
        }, {
          key: "buyNow",
          value: function buyNow() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var stripeData, items, loading;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      stripeData = {
                        payment_method_data: {
                          billing_details: {
                            name: this.dataForm.get('name').value,
                            address: {
                              line1: this.dataForm.get('street').value,
                              city: this.dataForm.get('city').value,
                              postal_code: this.dataForm.get('zip').value,
                              country: this.dataForm.get('country').value
                            },
                            email: this._authService.getEmail()
                          }
                        },
                        receipt_email: this._authService.getEmail()
                      }; //mapping to get from our cart all the items with id and amount

                      items = this.cart.map(function (item) {
                        return {
                          id: item.id,
                          amount: item.amount
                        };
                      }); //Loading animation after purchase order

                      _context3.next = 4;
                      return this._loadingCtrl.create();

                    case 4:
                      loading = _context3.sent;
                      _context3.next = 7;
                      return loading.present();

                    case 7:
                      // the * 100 is to get the right number in stripe
                      this._productService.startPaymentIntent(this.getTotal() * 100, items).subscribe(function (paymentIntent) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var secret, _yield$this$stripe$ha, result, err, toast, _toast;

                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  console.log('my payment intent: ', paymentIntent);
                                  secret = paymentIntent.client_secret; // This allows us to send the secret which identifies the payment intent, the credit card info and stripe data

                                  _context.next = 4;
                                  return this.stripe.handleCardPayment(secret, this.card, stripeData);

                                case 4:
                                  _yield$this$stripe$ha = _context.sent;
                                  result = _yield$this$stripe$ha.result;
                                  err = _yield$this$stripe$ha.err;
                                  console.log('Result of handleCardPayment; ', result); //error message in case payment could not be Fulfilled, toaster appears for 3 seconds

                                  if (!err) {
                                    _context.next = 18;
                                    break;
                                  }

                                  _context.next = 11;
                                  return loading.dismiss();

                                case 11:
                                  _context.next = 13;
                                  return this._toastCtrl.create({
                                    message: "Could not process your payment, please try again later",
                                    duration: 3000
                                  });

                                case 13:
                                  toast = _context.sent;
                                  _context.next = 16;
                                  return toast.present();

                                case 16:
                                  _context.next = 26;
                                  break;

                                case 18:
                                  _context.next = 20;
                                  return loading.dismiss();

                                case 20:
                                  _context.next = 22;
                                  return this._toastCtrl.create({
                                    message: "Could not process your payment, please try again later",
                                    duration: 3000
                                  });

                                case 22:
                                  _toast = _context.sent;
                                  _context.next = 25;
                                  return _toast.present();

                                case 25:
                                  this._router.navigateByUrl('/tabs/tab2');

                                case 26:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          var toast;
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  _context2.next = 2;
                                  return loading.dismiss();

                                case 2:
                                  _context2.next = 4;
                                  return this._toastCtrl.create({
                                    message: "Could not process your payment, please try again later",
                                    duration: 3000
                                  });

                                case 4:
                                  toast = _context2.sent;
                                  _context2.next = 7;
                                  return toast.present();

                                case 7:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      });

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return CheckoutPage;
      }();

      CheckoutPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      CheckoutPage.propDecorators = {
        cardElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['cardElement', {
            "static": true
          }]
        }]
      };
      CheckoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkout',
        template: _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkout_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CheckoutPage);
      /***/
    },

    /***/
    "Pnj6":
    /*!***********************************************************!*\
      !*** ./src/app/pages/checkout/checkout-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: CheckoutPageRoutingModule */

    /***/
    function Pnj6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutPageRoutingModule", function () {
        return CheckoutPageRoutingModule;
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


      var _checkout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./checkout.page */
      "Cqfx");

      var routes = [{
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutPage"]
      }];

      var CheckoutPageRoutingModule = function CheckoutPageRoutingModule() {
        _classCallCheck(this, CheckoutPageRoutingModule);
      };

      CheckoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CheckoutPageRoutingModule);
      /***/
    },

    /***/
    "Tjht":
    /*!***************************************************!*\
      !*** ./src/app/pages/checkout/checkout.module.ts ***!
      \***************************************************/

    /*! exports provided: CheckoutPageModule */

    /***/
    function Tjht(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function () {
        return CheckoutPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./checkout-routing.module */
      "Pnj6");
      /* harmony import */


      var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./checkout.page */
      "Cqfx");

      var CheckoutPageModule = function CheckoutPageModule() {
        _classCallCheck(this, CheckoutPageModule);
      };

      CheckoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
      })], CheckoutPageModule);
      /***/
    },

    /***/
    "dKDm":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function dKDm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Checkout</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n \n  <form [formGroup]=\"dataForm\" (submit)=\"buyNow()\">\n    <ion-item>\n      <ion-label position=\"stacked\">Name</ion-label>\n      <ion-input formControlName=\"name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Street</ion-label>\n      <ion-input formControlName=\"street\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">City</ion-label>\n      <ion-input formControlName=\"city\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">ZIP</ion-label>\n      <ion-input formControlName=\"zip\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Country</ion-label>\n      <ion-input formControlName=\"country\"></ion-input>\n    </ion-item>\n \n    <div #cardElement></div>\n \n    <div id=\"card-errors\" role=\"alert\">\n      {{ cardErrors}}\n    </div>\n \n    <ion-button expand=\"full\" type=\"submit\" [disabled]=\"!dataForm.valid\">Purchase order :  {{ getTotal() | currency:'EUR'}}</ion-button>\n  </form>\n \n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-checkout-checkout-module-es5.js.map