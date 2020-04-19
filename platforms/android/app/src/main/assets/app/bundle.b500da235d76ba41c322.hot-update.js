webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Kiosk.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/platform");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Punch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Punch.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // A stub for a service that authenticates users.

const userService = {
  login(user) {
    return Promise.reject(user);
  }

};
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    onLoaded() {
      tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["android"].on(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["AndroidApplication"].activityBackPressedEvent, function (args) {
        args.cancel = true;
        console.log("Back button pressed");
      });
    },

    onNavigate() {
      tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["android"].off(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["AndroidApplication"].activityBackPressedEvent, function (args) {
        console.log("Back button pressed");
      });
    },

    login() {
      console.log('logging in...');
      userService.login(this.user).then(() => {
        this.$navigateTo(_Punch__WEBPACK_IMPORTED_MODULE_2__["default"]);
      }).catch(() => {
        this.alert("PIN does not exist. Please try again.");
      });
    }

  },

  data() {
    return {
      user: {
        pin: ""
      }
    };
  }

});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9LaW9zay52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBO0NBSUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQSx3TEFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBO0FBS0EsS0FQQTs7QUFTQTtBQUNBLHlMQUNBO0FBQ0E7QUFDQSxPQUhBO0FBSUEsS0FkQTs7QUFnQkE7QUFDQTtBQUNBLGtCQUNBLEtBREEsQ0FDQSxTQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQSxPQUpBLEVBS0EsS0FMQSxDQUtBO0FBQ0EsbUJBQ0EsdUNBREE7QUFHQSxPQVRBO0FBVUE7O0FBNUJBLEdBREE7O0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBOztBQXRDQSxHIiwiZmlsZSI6ImJ1bmRsZS5iNTAwZGEyMzVkNzZiYTQxYzMyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2UgQGxvYWRlZD1cIm9uTG9hZGVkXCIgbmF2aWdhdGluZ1RvPVwib25OYXZpZ2F0ZVwiPlxyXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJLaW9zayBNb2RlXCIgLz5cclxuICAgICAgICA8U2Nyb2xsVmlldz5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZm9ybVwiPlxyXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoZWFkZXJcIiB0ZXh0PVwiUGxlYXNlIGVudGVyIHlvdXIgZW1wbG95ZWUgUElOIG51bWJlcjpcIiAvPlxyXG4gICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBtYXJnaW5Cb3R0b209XCIyNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIGhpbnQ9XCJQSU5cIiB2LW1vZGVsPVwidXNlci5waW5cIiBAcmV0dXJuUHJlc3M9XCJsb2dpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZT1cInRydWVcIiBhdXRvY29ycmVjdD1cImZhbHNlXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIiBmb250U2l6ZT1cIjE4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBhbmRyb2lkLCBBbmRyb2lkQXBwbGljYXRpb24gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uJ1xyXG4gICAgaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSdcclxuXHJcbiAgICBpbXBvcnQgUHVuY2ggZnJvbSAnLi9QdW5jaCdcclxuXHJcbiAgICAvLyBBIHN0dWIgZm9yIGEgc2VydmljZSB0aGF0IGF1dGhlbnRpY2F0ZXMgdXNlcnMuXHJcbiAgICBjb25zdCB1c2VyU2VydmljZSA9IHtcclxuICAgICAgICBsb2dpbih1c2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh1c2VyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uTG9hZGVkKCkge1xyXG4gICAgICAgICAgICAgICAgYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5jYW5jZWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJhY2sgYnV0dG9uIHByZXNzZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIG9uTmF2aWdhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICBhbmRyb2lkLm9mZihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCYWNrIGJ1dHRvbiBwcmVzc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBsb2dpbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dnaW5nIGluLi4uJylcclxuICAgICAgICAgICAgICAgIHVzZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAgICAgLmxvZ2luKHRoaXMudXNlcilcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUHVuY2gpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUElOIGRvZXMgbm90IGV4aXN0LiBQbGVhc2UgdHJ5IGFnYWluLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblx0fSxcclxuXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBwaW46IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDE3O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNzA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmZvcm0ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMjtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1MDtcclxuICAgIH1cclxuICAgIC5pbnB1dC1maWVsZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjU7XHJcbiAgICB9XHJcbiAgICAuaW5wdXQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTg7XHJcbiAgICB9XHJcbiAgICAuaW5wdXQtZmllbGQgLmlucHV0IHtcclxuICAgICAgICBmb250LXNpemU6IDU0O1xyXG4gICAgfVxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=