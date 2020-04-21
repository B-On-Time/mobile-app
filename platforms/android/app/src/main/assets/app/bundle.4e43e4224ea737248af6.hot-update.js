webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Kiosk.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Punch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Punch.vue");
/* harmony import */ var _LoginPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/LoginPage.vue");
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
//
//
//
//
//
//
//
//
// import { android, AndroidApplication } from 'tns-core-modules/application'
// import { isAndroid } from 'tns-core-modules/platform'
const Frame = __webpack_require__("tns-core-modules/ui/frame").Frame;




const axios = __webpack_require__("../node_modules/axios/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['currrentUser'],

  data() {
    return {
      user: {
        pin: ""
      }
    };
  },

  methods: {
    onTap() {
      this.$navigateTo(_LoginPage__WEBPACK_IMPORTED_MODULE_1__["default"]);
    },

    onLoaded() {// console.log('kiosk page currentUser: ' + this.currentUser)
      // this.prevent = true;
      // android.on(AndroidApplication.activityBackPressedEvent, this.backButton);
    },

    onNavigate() {// this.prevent = false;
      // android.off(AndroidApplication.activityBackPressedEvent, this.backButton);
    },

    backButton(args) {//    if(this.prevent)
      //       args.cancel = true;
      //    console.log("Back button pressed.");
    },

    login() {
      console.log('logging in...');

      if (user.pin == '') {
        this.alert('Please enter a PIN');
      } else {
        // this.$navigateTo(Punch, {
        //     props: {
        //         currentUser: {
        //             apikey: this.currentUser.apikey,
        //             firstName: this.currentUser.firstName,
        //             lastName: this.currentUser.lastName,
        //             isAdmin: this.currentUser.isAdmin,
        //             username: this.currentUser.username
        //         }
        //     }
        // })
        // this.user.pin = "";
        this.$navigateTo(_Punch__WEBPACK_IMPORTED_MODULE_0__["default"], {
          props: {
            currentUser: {
              firstName: "Abdool"
            }
          }
        });
      } // userService
      // .login(this.user)
      // .then(() => {
      //     this.user.pin = "";
      //     this.$navigateTo(Punch, {
      //         props: {
      //             currentUser: {
      //                 name: "Ernesto Perez Pozo",
      //                 kiosk: true
      //             }
      //         }
      //     });
      // })
      // .catch(() => {
      //     this.alert(
      //         "PIN does not exist. Please try again."
      //     );
      // });

    }

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9LaW9zay52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBOztBQUVBO0FBQ0EseUJBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0EsR0FUQTs7QUFXQTtBQUVBO0FBQ0E7QUFDQSxLQUpBOztBQU1BLGdCQUNBO0FBQ0E7QUFDQTtBQUNBLEtBVkE7O0FBWUEsa0JBQ0E7QUFDQTtBQUNBLEtBZkE7O0FBaUJBLHNCQUNBO0FBQ0E7QUFFQTtBQUNBLEtBdEJBOztBQXdCQTtBQUNBOztBQUVBLDBCQUNBO0FBQ0E7QUFDQSxPQUhBLE1BS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFEQTtBQU9BLE9BN0JBLENBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUF6RUE7QUFYQSxHIiwiZmlsZSI6ImJ1bmRsZS40ZTQzZTQyMjRlYTczNzI0OGFmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2UgQGxvYWRlZD1cIm9uTG9hZGVkXCIgQG5hdmlnYXRlZEZyb209XCJvbk5hdmlnYXRlXCI+XHJcbiAgICAgICAgPEFjdGlvbkJhciBjbGFzcz1cImFjdGlvbi1iYXJcIj5cclxuXHQgICA8R3JpZExheW91dCByb3dzPVwiKlwiIGNvbHVtbnM9XCIyKiwqXCIgPlxyXG5cdCAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMFwiIGNsYXNzPVwiYWN0aW9uLWJhclwiIHRleHQ9XCJLaW9zayBNb2RlXCIgLz5cclxuXHQgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjFcIiBjbGFzcz1cImFjdGlvbi1iYXItbG9nb3V0XCIgdGV4dD1cIkxvZyBvdXRcIiBAdGFwPVwib25UYXBcIiAvPlxyXG5cdCAgIDwvR3JpZExheW91dD5cclxuXHQ8L0FjdGlvbkJhcj5cclxuICAgICAgICA8U2Nyb2xsVmlldz5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZm9ybVwiPlxyXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoZWFkZXJcIiB0ZXh0PVwiUGxlYXNlIGVudGVyIHlvdXIgUElOIG51bWJlcjpcIiAvPlxyXG4gICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBtYXJnaW5Cb3R0b209XCIyNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIGhpbnQ9XCJQSU5cIlxyXG5cdFx0ICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIucGluXCIgbWF4TGVuZ3RoPVwiNFwiXHJcblx0XHQgICAgXHQgICAgICAgOnRleHQ9XCJ1c2VyLnBpblwiIEByZXR1cm5QcmVzcz1cImxvZ2luXCIgc2VjdXJlPVwidHJ1ZVwiXHJcblx0XHRcdCAgICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIlxyXG5cdFx0XHQgICAgICAga2V5Ym9hcmRUeXBlPVwibnVtYmVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICAvLyBpbXBvcnQgeyBhbmRyb2lkLCBBbmRyb2lkQXBwbGljYXRpb24gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uJ1xyXG4gICAgLy8gaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSdcclxuICAgIGNvbnN0IEZyYW1lID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIikuRnJhbWU7XHJcblxyXG4gICAgaW1wb3J0IFB1bmNoIGZyb20gJy4vUHVuY2gnXHJcbiAgICBpbXBvcnQgTG9nb3V0IGZyb20gJy4vTG9naW5QYWdlJ1xyXG4gICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIilcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgcHJvcHM6IFsnY3VycnJlbnRVc2VyJ10sXHJcblxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGluOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cclxuXHQgICAgb25UYXAoKSB7XHJcblx0ICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ291dCk7XHJcblx0ICAgIH0sXHJcblx0ICAgIFxyXG4gICAgICAgIG9uTG9hZGVkKCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygna2lvc2sgcGFnZSBjdXJyZW50VXNlcjogJyArIHRoaXMuY3VycmVudFVzZXIpXHJcbiAgICAgICAgICAgIC8vIHRoaXMucHJldmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIGFuZHJvaWQub24oQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCwgdGhpcy5iYWNrQnV0dG9uKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBvbk5hdmlnYXRlKCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnByZXZlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gYW5kcm9pZC5vZmYoQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCwgdGhpcy5iYWNrQnV0dG9uKTtcclxuICAgICAgICB9LFxyXG5cclxuXHQgICAgYmFja0J1dHRvbihhcmdzKSB7XHJcblx0ICAgIC8vICAgIGlmKHRoaXMucHJldmVudClcclxuXHQgICAgLy8gICAgICAgYXJncy5jYW5jZWwgPSB0cnVlO1xyXG5cclxuXHQgICAgLy8gICAgY29uc29sZS5sb2coXCJCYWNrIGJ1dHRvbiBwcmVzc2VkLlwiKTtcclxuXHQgICAgfSxcclxuXHJcbiAgICAgICAgbG9naW4oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dnaW5nIGluLi4uJylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHVzZXIucGluID09ICcnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KCdQbGVhc2UgZW50ZXIgYSBQSU4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy4kbmF2aWdhdGVUbyhQdW5jaCwge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGN1cnJlbnRVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBhcGlrZXk6IHRoaXMuY3VycmVudFVzZXIuYXBpa2V5LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgZmlyc3ROYW1lOiB0aGlzLmN1cnJlbnRVc2VyLmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhc3ROYW1lOiB0aGlzLmN1cnJlbnRVc2VyLmxhc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaXNBZG1pbjogdGhpcy5jdXJyZW50VXNlci5pc0FkbWluLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMuY3VycmVudFVzZXIudXNlcm5hbWVcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51c2VyLnBpbiA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFB1bmNoLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogXCJBYmRvb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHVzZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgIC8vIC5sb2dpbih0aGlzLnVzZXIpXHJcbiAgICAgICAgICAgIC8vIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMudXNlci5waW4gPSBcIlwiO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy4kbmF2aWdhdGVUbyhQdW5jaCwge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGN1cnJlbnRVc2VyOiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBuYW1lOiBcIkVybmVzdG8gUGVyZXogUG96b1wiLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAga2lvc2s6IHRydWVcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5hbGVydChcclxuICAgICAgICAgICAgLy8gICAgICAgICBcIlBJTiBkb2VzIG5vdCBleGlzdC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIlxyXG4gICAgICAgICAgICAvLyAgICAgKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgfVxyXG5cdH0sXHJcblxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNzA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmZvcm0ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMjtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1MDtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aW9uLWJhciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJlNWNiODtcclxuXHRmb250LXNpemU6IDI0O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aW9uLWJhci1sb2dvdXQge1xyXG4gICAgXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHRmb250LXNpemU6IDE4O1xyXG5cdGZvbnQtd2VpZ2h0OiAzNTA7XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0LWZpZWxkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIFBhZ2Uge1xyXG4gICAgXHRiYWNrZ3JvdW5kOiByZ2IoMiwwLDM2KTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyLDAsMzYsMSkgMCUsIHJnYmEoMjIsMTQsNzUsMSkgMCUsIHJnYmEoMCwyMDQsMjU1LDEpIDEwMCUpO1xyXG4gICAgfVxyXG5cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9