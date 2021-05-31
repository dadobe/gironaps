(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-biketour-detail-biketour-detail-module"], {
    /***/
    "LU3q":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/biketour-detail/biketour-detail-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: BiketourDetailPageRoutingModule */

    /***/
    function LU3q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BiketourDetailPageRoutingModule", function () {
        return BiketourDetailPageRoutingModule;
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


      var _biketour_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./biketour-detail.page */
      "TFPQ");

      var routes = [{
        path: '',
        component: _biketour_detail_page__WEBPACK_IMPORTED_MODULE_3__["BiketourDetailPage"]
      }];

      var BiketourDetailPageRoutingModule = function BiketourDetailPageRoutingModule() {
        _classCallCheck(this, BiketourDetailPageRoutingModule);
      };

      BiketourDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BiketourDetailPageRoutingModule);
      /***/
    },

    /***/
    "TFPQ":
    /*!***************************************************************!*\
      !*** ./src/app/pages/biketour-detail/biketour-detail.page.ts ***!
      \***************************************************************/

    /*! exports provided: BiketourDetailPage */

    /***/
    function TFPQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BiketourDetailPage", function () {
        return BiketourDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_biketour_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./biketour-detail.page.html */
      "u8xC");
      /* harmony import */


      var _biketour_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./biketour-detail.page.scss */
      "VIJX");
      /* harmony import */


      var _services_biketour_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/biketour.service */
      "5Bp7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/email-composer/ngx */
      "aaed"); //Import FireStore & FireAuth module
      //require('firebase/auth');
      //Import email component


      var BiketourDetailPage = /*#__PURE__*/function () {
        function BiketourDetailPage(activatedRoute, biketourService, _angularFireStore, _angularFireAuth, //Email composer injection
        _emailComposer) {
          _classCallCheck(this, BiketourDetailPage);

          this._angularFireStore = _angularFireStore;
          this._angularFireAuth = _angularFireAuth;
          this._emailComposer = _emailComposer; //we use activatedRoute to GET the specific ID we are looking for (passed as parameter)

          var biketourID = activatedRoute.snapshot.params["biketourID"];
          console.log(biketourID);
          this.biketourDetail = biketourService.getBiketour(biketourID);
        }

        _createClass(BiketourDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "sendInquiry",
          value: function sendInquiry() {
            var email = {
              to: 'dadobe20@gmail.com',
              subject: 'Biketours Detail',
              body: 'I am interested in getting more information about this biketour detail',
              isHtml: true
            };

            this._emailComposer.open(email);
          }
        }]);

        return BiketourDetailPage;
      }();

      BiketourDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _services_biketour_service__WEBPACK_IMPORTED_MODULE_3__["BiketourService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]
        }, {
          type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_8__["EmailComposer"]
        }];
      };

      BiketourDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-biketour-detail',
        template: _raw_loader_biketour_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_biketour_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BiketourDetailPage);
      /***/
    },

    /***/
    "VIJX":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/biketour-detail/biketour-detail.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function VIJX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWtldG91ci1kZXRhaWwucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "ptiB":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/biketour-detail/biketour-detail.module.ts ***!
      \*****************************************************************/

    /*! exports provided: BiketourDetailPageModule */

    /***/
    function ptiB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BiketourDetailPageModule", function () {
        return BiketourDetailPageModule;
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


      var _biketour_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./biketour-detail-routing.module */
      "LU3q");
      /* harmony import */


      var _biketour_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./biketour-detail.page */
      "TFPQ");

      var BiketourDetailPageModule = function BiketourDetailPageModule() {
        _classCallCheck(this, BiketourDetailPageModule);
      };

      BiketourDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _biketour_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["BiketourDetailPageRoutingModule"]],
        declarations: [_biketour_detail_page__WEBPACK_IMPORTED_MODULE_6__["BiketourDetailPage"]]
      })], BiketourDetailPageModule);
      /***/
    },

    /***/
    "u8xC":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/biketour-detail/biketour-detail.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function u8xC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Bike Tour offers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  \n   <ion-card no-margin>\n    <ion-img [src]=\"(biketourDetail | async)?.imageURL\"></ion-img>\n    <ion-card-header>\n      <ion-card-title>\n        {{(biketourDetail | async)?.title}}\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      {{(biketourDetail | async)?.description}}\n    </ion-card-content>\n  \n  </ion-card>\n\n  <!-- //Fab button -->\n<!--   <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"secondary\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n\n    <ion-fab-list side=\"bottom\">\n\n      <ion-fab-button color=\"primary\" (click)=\"share()\">\n        <ion-icon name=\"share\"></ion-icon>\n      </ion-fab-button>\n\n      <ion-fab-button color=\"danger\" (click)=\"addToFavorites()\">\n        <ion-icon name=\"heart\"></ion-icon>\n      </ion-fab-button>\n\n    </ion-fab-list>\n\n  </ion-fab> -->\n\n  <!-- Sen INQUIRY button -->\n  <ion-button (click)=\"sendInquiry()\" color=\"warning\">Send Inquiry</ion-button>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-biketour-detail-biketour-detail-module-es5.js.map