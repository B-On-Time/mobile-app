webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/LoginPage.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Punch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Punch.vue");
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
    return Promise.resolve(user);
  },

  resetPassword(email) {
    return Promise.resolve(email);
  }

};
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },

  methods: {
    submit() {
      if (!this.user.email || !this.user.password) {
        this.alert("Please provide both an email address and password.");
        return;
      } else {
        this.login();
      }
    },

    login() {
      userService.login(this.user).then(() => {
        this.$navigateTo(_Punch__WEBPACK_IMPORTED_MODULE_0__["default"]);
      }).catch(() => {
        this.alert("Unfortunately we could not find your account.");
      });
    },

    forgotPassword() {
      prompt({
        title: "Forgot Password",
        message: "Enter the email address you used to register for B-On-Time to reset your password.",
        inputType: "email",
        defaultText: "",
        okButtonText: "Ok",
        cancelButtonText: "Cancel"
      }).then(data => {
        if (data.result) {
          userService.resetPassword(data.text.trim()).then(() => {
            this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
          }).catch(() => {
            this.alert("Unfortunately, an error occurred resetting your password.");
          });
        }
      });
    },

    focusPassword() {
      this.$refs.password.nativeView.focus();
    },

    alert(message) {
      return alert({
        title: "B-On-Time",
        okButtonText: "OK",
        message: message
      });
    }

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpblBhZ2UudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBb0NBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBSEE7O0FBSUE7QUFDQTtBQUNBOztBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBO0FBRkE7QUFEQTtBQU1BLEdBUkE7O0FBU0E7QUFDQTtBQUNBO0FBQ0EsbUJBQ0Esb0RBREE7QUFHQTtBQUNBLE9BTEEsTUFNQTtBQUNBO0FBQ0E7QUFDQSxLQVhBOztBQWFBO0FBQ0Esa0JBQ0EsS0FEQSxDQUNBLFNBREEsRUFFQSxJQUZBLENBRUE7QUFDQTtBQUNBLE9BSkEsRUFLQSxLQUxBLENBS0E7QUFDQSxtQkFDQSwrQ0FEQTtBQUdBLE9BVEE7QUFVQSxLQXhCQTs7QUEwQkE7QUFDQTtBQUNBLGdDQURBO0FBRUEscUdBRkE7QUFHQSwwQkFIQTtBQUlBLHVCQUpBO0FBS0EsMEJBTEE7QUFNQTtBQU5BLFNBT0EsSUFQQSxDQU9BO0FBQ0E7QUFDQSxzQkFDQSxhQURBLENBQ0EsZ0JBREEsRUFFQSxJQUZBLENBRUE7QUFDQSx1QkFDQSw0R0FEQTtBQUdBLFdBTkEsRUFPQSxLQVBBLENBT0E7QUFDQSx1QkFDQSwyREFEQTtBQUdBLFdBWEE7QUFZQTtBQUNBLE9BdEJBO0FBdUJBLEtBbERBOztBQW9EQTtBQUNBO0FBQ0EsS0F0REE7O0FBd0RBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLDBCQUZBO0FBR0E7QUFIQTtBQUtBOztBQTlEQTtBQVRBLEciLCJmaWxlIjoiYnVuZGxlLmFjMDY5ZTJlZWNiNjlhYTFkNjEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZT5cclxuICAgICAgICA8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIj5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaGVhZGVyXCIgdGV4dD1cIldlbGNvbWUgdG8gQi1Pbi1UaW1lXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIG1hcmdpbkJvdHRvbT1cIjI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgaGludD1cIkVtYWlsXCIga2V5Ym9hcmRUeXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5lbWFpbFwiIHJldHVybktleVR5cGU9XCJuZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQHJldHVyblByZXNzPVwiZm9jdXNQYXNzd29yZFwiIGZvbnRTaXplPVwiMThcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBtYXJnaW5Cb3R0b209XCIyNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgcmVmPVwicGFzc3dvcmRcIiBjbGFzcz1cImlucHV0XCIgaGludD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiIHYtbW9kZWw9XCJ1c2VyLnBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJMb2cgSW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIEB0YXA9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJGb3Jnb3QgeW91ciBwYXNzd29yZD9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9naW4tbGFiZWxcIiBAdGFwPVwiZm9yZ290UGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibG9naW4tbGFiZWwgc2lnbi11cC1sYWJlbFwiIGZvbnRTaXplPVwiMTFcIiBcclxuICAgICAgICAgICAgICAgIHRleHQ9XCJEb24ndCBoYXZlIGFuIGFjY291bnQ/IFBsZWFzZSBjb250YWN0IHlvdXIgYWRtaW5pc3RyYXRvclwiIEB0YXA9XCJ0b2dnbGVGb3JtXCIgLz5cclxuICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBQdW5jaCBmcm9tICcuL1B1bmNoJ1xyXG5cclxuICAgIC8vIEEgc3R1YiBmb3IgYSBzZXJ2aWNlIHRoYXQgYXV0aGVudGljYXRlcyB1c2Vycy5cclxuICAgIGNvbnN0IHVzZXJTZXJ2aWNlID0ge1xyXG4gICAgICAgIGxvZ2luKHVzZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1c2VyKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2V0UGFzc3dvcmQoZW1haWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbWFpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudXNlci5lbWFpbCB8fCAhdGhpcy51c2VyLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJQbGVhc2UgcHJvdmlkZSBib3RoIGFuIGVtYWlsIGFkZHJlc3MgYW5kIHBhc3N3b3JkLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBsb2dpbigpIHtcclxuICAgICAgICAgICAgICAgIHVzZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAgICAgLmxvZ2luKHRoaXMudXNlcilcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUHVuY2gpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBmb3Jnb3RQYXNzd29yZCgpIHtcclxuICAgICAgICAgICAgICAgIHByb21wdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRm9yZ290IFBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgQi1Pbi1UaW1lIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlOiBcImVtYWlsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclNlcnZpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNldFBhc3N3b3JkKGRhdGEudGV4dC50cmltKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZb3VyIHBhc3N3b3JkIHdhcyBzdWNjZXNzZnVsbHkgcmVzZXQuIFBsZWFzZSBjaGVjayB5b3VyIGVtYWlsIGZvciBpbnN0cnVjdGlvbnMgb24gY2hvb3NpbmcgYSBuZXcgcGFzc3dvcmQuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbmZvcnR1bmF0ZWx5LCBhbiBlcnJvciBvY2N1cnJlZCByZXNldHRpbmcgeW91ciBwYXNzd29yZC5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGZvY3VzUGFzc3dvcmQoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBhc3N3b3JkLm5hdGl2ZVZpZXcuZm9jdXMoKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGFsZXJ0KG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQi1Pbi1UaW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAucGFnZSB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMDtcclxuICAgICAgICBmbGV4LWdyb3c6IDI7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDcwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0LWZpZWxkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTg7XHJcbiAgICAgICAgcGxhY2Vob2xkZXItY29sb3I6ICNBOEE4QTg7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0LWZpZWxkIC5pbnB1dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1NDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLXByaW1hcnkge1xyXG4gICAgICAgIGhlaWdodDogNTA7XHJcbiAgICAgICAgbWFyZ2luOiAzMCA1IDE1IDU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ2luLWxhYmVsIHtcclxuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNBOEE4QTg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNjtcclxuICAgIH1cclxuXHJcbiAgICAuc2lnbi11cC1sYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvbGQge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=