(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-detail-product-detail-module"], {
    /***/
    "+zku":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/product-detail/product-detail-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ProductDetailPageRoutingModule */

    /***/
    function zku(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductDetailPageRoutingModule", function () {
        return ProductDetailPageRoutingModule;
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


      var _product_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./product-detail.page */
      "KLt4");

      var routes = [{
        path: '',
        component: _product_detail_page__WEBPACK_IMPORTED_MODULE_3__["ProductDetailPage"]
      }];

      var ProductDetailPageRoutingModule = function ProductDetailPageRoutingModule() {
        _classCallCheck(this, ProductDetailPageRoutingModule);
      };

      ProductDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProductDetailPageRoutingModule);
      /***/
    },

    /***/
    "DGXm":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-detail/product-detail.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DGXm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Product detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngIf=\"product\">\n    <img [src]=\"product.itemImage\">\n    <ion-card-header>\n      <ion-card-title>\n        {{product.itemName}}\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-list no-margin>\n\n      <ion-item>\n        <ion-label>Price</ion-label>\n        <ion-chip color=\"primary\">{{product.itemPrice | currency:'EUR'}}</ion-chip>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Category</ion-label>\n        <ion-chip color=\"primary\">{{product.itemCategory}}</ion-chip>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-row class=\"ion-align-items-center\">\n\n      <ion-col size=\"4\" class=\"ion-text-center\">\n        <ion-button fill=\"clear\" (click)=\"removeItemFromCart()\" [disabled]=\"amount == 0\"> <!-- disables MINUS option when amount = 0 -->\n          <ion-icon name=\"remove\" slot=\"icon-only\"></ion-icon>\n        </ion-button> \n      </ion-col>\n\n      <ion-col size=\"4\" class=\"ion-text-center\" color=\"primary\">\n        {{amount}}\n      </ion-col>\n\n      <ion-col size=\"4\" class=\"ion-text-center\">\n        <ion-button fill=\"clear\" (click)=\"addItemToCart()\">\n          <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n        </ion-button> \n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col size=\"4\" class=\"ion-text-center\">\n      </ion-col>\n\n      <ion-col size=\"4\" class=\"ion-text-center\">\n        <ion-button fill=\"clear\" (click)=\"emptyCart()\">\n          <ion-icon name=\"trash-bin-outline\" slot=\"icon-only\" color=\"danger\"></ion-icon>\n        </ion-button>\n      </ion-col>\n\n      <ion-col size=\"4\" class=\"ion-text-center\">\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n  \n</ion-content>\n";
      /***/
    },

    /***/
    "KLt4":
    /*!*************************************************************!*\
      !*** ./src/app/pages/product-detail/product-detail.page.ts ***!
      \*************************************************************/

    /*! exports provided: ProductDetailPage */

    /***/
    function KLt4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductDetailPage", function () {
        return ProductDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_product_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./product-detail.page.html */
      "DGXm");
      /* harmony import */


      var _product_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./product-detail.page.scss */
      "ZDMx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/cart.service */
      "c14U");
      /* harmony import */


      var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/product.service */
      "Gdn9");

      var ProductDetailPage = /*#__PURE__*/function () {
        function ProductDetailPage(_route, _productService, _cartService) {
          _classCallCheck(this, ProductDetailPage);

          this._route = _route;
          this._productService = _productService;
          this._cartService = _cartService;
          this.id = null;
          this.product = null;
          this.amount = 0;
        }

        _createClass(ProductDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.id = this._route.snapshot.paramMap.get('id');

            this._productService.getOneProduct(this.id).subscribe(function (res) {
              console.log('my products:', res);
              _this.product = res;
              _this.product.id = _this.id;
              _this.amount = _this._cartService.getItemCount(_this.id);
            }); // Update our cart


            this._cartService.getCart().subscribe(function (cart) {
              console.log('cart:', cart);
              _this.amount = _this._cartService.getItemCount(_this.id);
            });
          }
        }, {
          key: "addItemToCart",
          value: function addItemToCart() {
            this._cartService.addProduct(this.product);
          }
        }, {
          key: "removeItemFromCart",
          value: function removeItemFromCart() {
            this._cartService.decreaseProduct(this.product);
          }
        }, {
          key: "emptyCart",
          value: function emptyCart() {
            this._cartService.removeProduct(this.product);
          }
        }]);

        return ProductDetailPage;
      }();

      ProductDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]
        }, {
          type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]
        }];
      };

      ProductDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-detail',
        template: _raw_loader_product_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProductDetailPage);
      /***/
    },

    /***/
    "ZDMx":
    /*!***************************************************************!*\
      !*** ./src/app/pages/product-detail/product-detail.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function ZDMx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "ePSv":
    /*!***************************************************************!*\
      !*** ./src/app/pages/product-detail/product-detail.module.ts ***!
      \***************************************************************/

    /*! exports provided: ProductDetailPageModule */

    /***/
    function ePSv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function () {
        return ProductDetailPageModule;
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


      var _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./product-detail-routing.module */
      "+zku");
      /* harmony import */


      var _product_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./product-detail.page */
      "KLt4");

      var ProductDetailPageModule = function ProductDetailPageModule() {
        _classCallCheck(this, ProductDetailPageModule);
      };

      ProductDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductDetailPageRoutingModule"]],
        declarations: [_product_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailPage"]]
      })], ProductDetailPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-product-detail-product-detail-module-es5.js.map