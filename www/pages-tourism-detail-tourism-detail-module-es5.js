(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tourism-detail-tourism-detail-module"], {
    /***/
    "CcpI":
    /*!***************************************************************!*\
      !*** ./src/app/pages/tourism-detail/tourism-detail.module.ts ***!
      \***************************************************************/

    /*! exports provided: TourismDetailPageModule */

    /***/
    function CcpI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TourismDetailPageModule", function () {
        return TourismDetailPageModule;
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


      var _tourism_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tourism-detail-routing.module */
      "Mrgp");
      /* harmony import */


      var _tourism_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tourism-detail.page */
      "xwhF");

      var TourismDetailPageModule = function TourismDetailPageModule() {
        _classCallCheck(this, TourismDetailPageModule);
      };

      TourismDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tourism_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["TourismDetailPageRoutingModule"]],
        declarations: [_tourism_detail_page__WEBPACK_IMPORTED_MODULE_6__["TourismDetailPage"]]
      })], TourismDetailPageModule);
      /***/
    },

    /***/
    "Mrgp":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/tourism-detail/tourism-detail-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: TourismDetailPageRoutingModule */

    /***/
    function Mrgp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TourismDetailPageRoutingModule", function () {
        return TourismDetailPageRoutingModule;
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


      var _tourism_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tourism-detail.page */
      "xwhF");

      var routes = [{
        path: '',
        component: _tourism_detail_page__WEBPACK_IMPORTED_MODULE_3__["TourismDetailPage"]
      }];

      var TourismDetailPageRoutingModule = function TourismDetailPageRoutingModule() {
        _classCallCheck(this, TourismDetailPageRoutingModule);
      };

      TourismDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TourismDetailPageRoutingModule);
      /***/
    },

    /***/
    "XB/T":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tourism-detail/tourism-detail.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XBT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Tourism offers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card no-margin>\n    <ion-img [src]=\"(tourismDetail | async)?.imageURL\"></ion-img>\n    <ion-card-header>\n      <ion-card-title>\n        {{(tourismDetail | async)?.title}}\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      {{(tourismDetail | async)?.description}}\n    </ion-card-content>\n\n    <ion-list no-margin>\n\n      <ion-item>\n        <ion-label>Price:</ion-label>\n        <ion-chip color=\"primary\"> {{(tourismDetail | async)?.price | currency: 'EUR'}}</ion-chip>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Guide:</ion-label>\n        <ion-chip color=\"primary\"> {{(tourismDetail | async)?.guide }}</ion-chip>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Coach:</ion-label>\n        <ion-chip color=\"primary\"> {{(tourismDetail | async)?.coach }}</ion-chip>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Distance:</ion-label>\n        <ion-chip color=\"primary\"> {{(tourismDetail | async)?.distance }} KM</ion-chip>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Uneveness:</ion-label>\n        <ion-chip color=\"primary\"> {{(tourismDetail | async)?.unevenness }} mts</ion-chip>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Bycicle rental:</ion-label>\n        <ion-chip color=\"primary\"> {{(tourismDetail | async)?.bycicleRental }}</ion-chip>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Availability:</ion-label>\n        <ion-chip color=\"primary\"> {{(tourismDetail | async)?.availability }}</ion-chip>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Stages:</ion-label>\n        <ion-chip color=\"primary\"> {{(tourismDetail | async)?.stages }}</ion-chip>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-card-content>\n      <ion-img [src]=\"(tourismDetail | async)?.routeMap\"></ion-img>\n    </ion-card-content>\n    <ion-card-content>\n     Details: {{(tourismDetail | async)?.journey}}\n    </ion-card-content>\n  \n  </ion-card>\n\n  <!-- //Fab button -->\n  <!--  \n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"secondary\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n\n    <ion-fab-list side=\"bottom\">\n\n      <ion-fab-button color=\"primary\" (click)=\"share()\">\n        <ion-icon name=\"share\"></ion-icon>\n      </ion-fab-button>\n\n     <ion-fab-button color=\"danger\" (click)=\"addToFavorites()\">\n        <ion-icon name=\"heart\"></ion-icon>\n      </ion-fab-button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n   -->\n\n  <!-- Sen INQUIRY button -->\n  <ion-button (click)=\"sendInquiry()\" color=\"warning\">Send Inquiry</ion-button>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "hjYh":
    /*!***************************************************************!*\
      !*** ./src/app/pages/tourism-detail/tourism-detail.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function hjYh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3VyaXNtLWRldGFpbC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "xwhF":
    /*!*************************************************************!*\
      !*** ./src/app/pages/tourism-detail/tourism-detail.page.ts ***!
      \*************************************************************/

    /*! exports provided: TourismDetailPage */

    /***/
    function xwhF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TourismDetailPage", function () {
        return TourismDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tourism_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tourism-detail.page.html */
      "XB/T");
      /* harmony import */


      var _tourism_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tourism-detail.page.scss */
      "hjYh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/email-composer/ngx */
      "aaed");
      /* harmony import */


      var src_app_services_tourism_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/tourism.service */
      "JjkH");

      var TourismDetailPage = /*#__PURE__*/function () {
        function TourismDetailPage(_emailComposer, tourismService, activatedRoute, _angularFireStore //private _socialShare: SocialSharing
        ) {
          _classCallCheck(this, TourismDetailPage);

          this._emailComposer = _emailComposer;
          this._angularFireStore = _angularFireStore; //we use activatedRoute to GET the specific ID of the TOURISM SERVICE we are looking for (passed as parameter)

          var tourismID = activatedRoute.snapshot.params["tourismID"];
          console.log(tourismID);
          this.tourismDetail = tourismService.getTourism(tourismID);
        }

        _createClass(TourismDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TourismDetailPage;
      }();

      TourismDetailPage.ctorParameters = function () {
        return [{
          type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_6__["EmailComposer"]
        }, {
          type: src_app_services_tourism_service__WEBPACK_IMPORTED_MODULE_7__["TourismService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
        }];
      };

      TourismDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tourism-detail',
        template: _raw_loader_tourism_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tourism_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TourismDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-tourism-detail-tourism-detail-module-es5.js.map