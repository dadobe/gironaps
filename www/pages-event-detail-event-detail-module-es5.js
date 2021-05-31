(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-event-detail-event-detail-module"], {
    /***/
    "0gdt":
    /*!*********************************************************!*\
      !*** ./src/app/pages/event-detail/event-detail.page.ts ***!
      \*********************************************************/

    /*! exports provided: EventDetailPage */

    /***/
    function gdt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventDetailPage", function () {
        return EventDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_event_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./event-detail.page.html */
      "YNX5");
      /* harmony import */


      var _event_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./event-detail.page.scss */
      "uwYG");
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


      var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/event.service */
      "fTLw");

      var EventDetailPage = /*#__PURE__*/function () {
        function EventDetailPage(eventService, activatedRoute, _emailComposer, _angularFireStore
        /*     ,
            private _socialShare: SocialSharing */
        ) {
          _classCallCheck(this, EventDetailPage);

          this._emailComposer = _emailComposer;
          this._angularFireStore = _angularFireStore; //we use activatedRoute to GET the specific ID we are looking for (passed as parameter)

          var eventID = activatedRoute.snapshot.params["eventID"];
          console.log(eventID);
          this.eventDetail = eventService.getEvent(eventID);
        }

        _createClass(EventDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "sendInquiry",
          value: function sendInquiry() {
            this._emailComposer.open({
              to: 'dadobe20@gmail.com',
              subject: 'Event Detail',
              body: 'I am interested in getting more information about this event detail',
              isHtml: true
            });
          }
        }]);

        return EventDetailPage;
      }();

      EventDetailPage.ctorParameters = function () {
        return [{
          type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_6__["EmailComposer"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
        }];
      };

      EventDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-event-detail',
        template: _raw_loader_event_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_event_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EventDetailPage);
      /***/
    },

    /***/
    "YNX5":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-detail/event-detail.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YNX5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Event offers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card no-margin>\n    <ion-img [src]=\"(eventDetail | async)?.imageURL\"></ion-img>\n    <ion-card-header>\n      <ion-card-title>\n        {{(eventDetail | async)?.title}}\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      Price from {{(eventDetail | async)?.price}} EUR\n    </ion-card-content>\n    <ion-card-content>\n      {{(eventDetail | async)?.description}}\n    </ion-card-content>\n    <ion-card-content>\n      {{(eventDetail | async)?.details}}\n    </ion-card-content>\n    <ion-list no-margin>\n\n      <ion-item>\n        <ion-label>Type: </ion-label>\n        <ion-chip color=\"primary\">{{(eventDetail | async)?.type}}</ion-chip>\n      </ion-item>\n      <ion-item>\n        <ion-label>Difficulty:</ion-label>\n         <ion-chip color=\"primary\">{{(eventDetail | async)?.difficulty}}</ion-chip>\n      </ion-item>\n      <ion-item>\n        <ion-label>Distance:</ion-label>\n         <ion-chip color=\"primary\">{{(eventDetail | async)?.distance}} km</ion-chip>\n      </ion-item>\n      <ion-item>\n        <ion-label>Unevenness:</ion-label>\n         <ion-chip color=\"primary\">{{(eventDetail | async)?.unevenness}} mts</ion-chip>\n      </ion-item>\n      <ion-item>\n        <ion-label>Duration:</ion-label>\n         <ion-chip color=\"primary\">{{(eventDetail | async)?.duration}} days</ion-chip>\n      </ion-item>\n      <ion-item>\n        <ion-label>Guide available: </ion-label>\n        <ion-chip color=\"primary\">{{(eventDetail | async)?.guide}}</ion-chip>\n      </ion-item>\n      <ion-item>\n        <ion-label>Coach available:</ion-label>\n         <ion-chip color=\"primary\">{{(eventDetail | async)?.coach}}</ion-chip>\n      </ion-item>\n      <ion-item>\n        <ion-label>Number of stages:</ion-label>\n        <ion-chip color=\"primary\">{{(eventDetail | async)?.stages}}</ion-chip>\n      </ion-item>\n      <ion-item>\n        <ion-label>Bycicle rental:</ion-label>\n         <ion-chip color=\"primary\">{{(eventDetail | async)?.bycicleRental}}</ion-chip>\n      </ion-item>\n      <ion-item>\n        <ion-label>Availability:</ion-label>\n         <ion-chip color=\"primary\">{{(eventDetail | async)?.availability}}</ion-chip>\n      </ion-item>\n    </ion-list>\n    <ion-card-title>\n      Description\n    </ion-card-title>\n    <ion-card-content>\n      {{(eventDetail | async)?.details}}\n    </ion-card-content>\n    <ion-card-content>\n      {{(eventDetail | async)?.descriptionRoute1}}\n    </ion-card-content>\n    <ion-card-content>\n      Price trail 43K: 199 EUR\n    </ion-card-content>\n    <ion-img [src]=\"(eventDetail | async)?.imageRoute1\"></ion-img>\n    <ion-card-content>\n      {{(eventDetail | async)?.descriptionRoute2}}\n    </ion-card-content>\n    <ion-card-content>\n      Price trail 20K: 175 EUR\n    </ion-card-content>\n    <ion-img [src]=\"(eventDetail | async)?.imageRoute2\"></ion-img>\n    <ion-card-content>\n      {{(eventDetail | async)?.journey}}\n    </ion-card-content>\n  </ion-card>\n\n  <!-- //Fab button -->\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"secondary\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n\n    <ion-fab-list side=\"bottom\">\n\n      <ion-fab-button color=\"primary\" (click)=\"share()\">\n        <ion-icon name=\"share\"></ion-icon>\n      </ion-fab-button>\n\n   <!--    <ion-fab-button color=\"danger\" (click)=\"addToFavorites()\">\n        <ion-icon name=\"heart\"></ion-icon>\n      </ion-fab-button> -->\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n  <!-- Sen INQUIRY button -->\n  <ion-button (click)=\"sendInquiry()\" color=\"warning\">Send Inquiry</ion-button>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "fp5j":
    /*!***********************************************************!*\
      !*** ./src/app/pages/event-detail/event-detail.module.ts ***!
      \***********************************************************/

    /*! exports provided: EventDetailPageModule */

    /***/
    function fp5j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventDetailPageModule", function () {
        return EventDetailPageModule;
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


      var _event_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./event-detail-routing.module */
      "g387");
      /* harmony import */


      var _event_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./event-detail.page */
      "0gdt");

      var EventDetailPageModule = function EventDetailPageModule() {
        _classCallCheck(this, EventDetailPageModule);
      };

      EventDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _event_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventDetailPageRoutingModule"]],
        declarations: [_event_detail_page__WEBPACK_IMPORTED_MODULE_6__["EventDetailPage"]]
      })], EventDetailPageModule);
      /***/
    },

    /***/
    "g387":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/event-detail/event-detail-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: EventDetailPageRoutingModule */

    /***/
    function g387(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventDetailPageRoutingModule", function () {
        return EventDetailPageRoutingModule;
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


      var _event_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./event-detail.page */
      "0gdt");

      var routes = [{
        path: '',
        component: _event_detail_page__WEBPACK_IMPORTED_MODULE_3__["EventDetailPage"]
      }];

      var EventDetailPageRoutingModule = function EventDetailPageRoutingModule() {
        _classCallCheck(this, EventDetailPageRoutingModule);
      };

      EventDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EventDetailPageRoutingModule);
      /***/
    },

    /***/
    "uwYG":
    /*!***********************************************************!*\
      !*** ./src/app/pages/event-detail/event-detail.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function uwYG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudC1kZXRhaWwucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-event-detail-event-detail-module-es5.js.map