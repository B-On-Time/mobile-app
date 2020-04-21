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


const axios = __webpack_require__("../node_modules/axios/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["currrentUser"],

  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    submit() {
      if (!this.user.username || !this.user.password) {
        this.alert("Please provide both an username and password.");
        return;
      } else {
        this.login();
      }
    },

    login() {
      var instance = axios.create({
        timeout: 10000,
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      var reqObj = {
        username: this.user.username,
        password: this.password
      };
      instance.post('https://api.crabrr.com/auth/apikey', reqObj).then(response => {
        console.log(response.data);
        var apikey = response.data.result.apikey;
        var isAdmin = false; // TODO: Check if admin using API call

        var firstName = 'Abdool';
        var lastName = 'Shakur';
        var username = this.user.username;
        var auth = apikey != null ? true : false; // TODO: For testing

        if (this.user.username == 'admin') {
          isAdmin = true;
          firstName = 'Admin';
        } else {
          isAdmin = false;
        }

        if (auth) {
          this.$navigateTo(_Punch__WEBPACK_IMPORTED_MODULE_0__["default"], {
            props: {
              currentUser: {
                apikey: apikey,
                firstName: firstName,
                lastName: lastName,
                isAdmin: isAdmin,
                username: username
              }
            }
          });
        } else {
          this.alert("Unfortunately we could not find your account.");
        }
      }).catch(error => {
        console.log(error);
      });
    },

    forgotPassword() {
      prompt({
        title: "Forgot Password",
        message: "Enter the username you used to register for B-On-Time to reset your password.",
        inputType: "username",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpblBhZ2UudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBOztBQUNBOztBQUVBO0FBQ0EseUJBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQTtBQUZBO0FBREE7QUFNQSxHQVZBOztBQVlBO0FBRUE7QUFFQSxzREFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLE1BTUE7QUFDQTtBQUNBO0FBRUEsS0FkQTs7QUFnQkE7QUFFQTtBQUNBLHNCQURBO0FBRUE7QUFBQTtBQUFBLFNBRkE7QUFHQTtBQUhBO0FBTUE7QUFDQSxvQ0FEQTtBQUVBO0FBRkE7QUFLQSxrRUFDQSxJQURBLENBQ0E7QUFDQTtBQUVBO0FBQ0EsNEJBSkEsQ0FJQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFSQSxDQVVBOztBQUNBLDJDQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSkEsTUFNQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFEQTtBQUVBLG9DQUZBO0FBR0Esa0NBSEE7QUFJQSxnQ0FKQTtBQUtBO0FBTEE7QUFEQTtBQURBO0FBV0EsU0FiQSxNQWVBO0FBQ0E7QUFDQTtBQUVBLE9BekNBLEVBMENBLEtBMUNBLENBMENBO0FBQ0E7QUFDQSxPQTVDQTtBQTZDQSxLQTFFQTs7QUE0RUE7QUFDQTtBQUNBLGdDQURBO0FBRUEsaUJBQ0EsK0VBSEE7QUFJQSw2QkFKQTtBQUtBLHVCQUxBO0FBTUEsMEJBTkE7QUFPQTtBQVBBLFNBUUEsSUFSQSxDQVFBO0FBQ0E7QUFDQSxzQkFDQSxhQURBLENBQ0EsZ0JBREEsRUFFQSxJQUZBLENBRUE7QUFDQSx1QkFDQSw0R0FEQTtBQUdBLFdBTkEsRUFPQSxLQVBBLENBT0E7QUFDQSx1QkFDQSwyREFEQTtBQUdBLFdBWEE7QUFZQTtBQUNBLE9BdkJBO0FBd0JBLEtBckdBOztBQXVHQTtBQUNBO0FBQ0EsS0F6R0E7O0FBMkdBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLDBCQUZBO0FBR0E7QUFIQTtBQUtBOztBQWpIQTtBQVpBLEciLCJmaWxlIjoiYnVuZGxlLjQwMGE2NzY4ZWFlZDQzM2Y4MTNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCIgPlxyXG4gICAgICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwicGFnZVwiPlxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoZWFkZXJcIiB0ZXh0PVwiV2VsY29tZSB0byBCLU9uLVRpbWVcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgbWFyZ2luQm90dG9tPVwiMjVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiBoaW50PVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci51c2VybmFtZVwiIHJldHVybktleVR5cGU9XCJuZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQHJldHVyblByZXNzPVwiZm9jdXNQYXNzd29yZFwiIGZvbnRTaXplPVwiMThcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBtYXJnaW5Cb3R0b209XCIyNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgcmVmPVwicGFzc3dvcmRcIiBjbGFzcz1cImlucHV0XCIgaGludD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiIHYtbW9kZWw9XCJ1c2VyLnBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJMb2cgSW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIEB0YXA9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJGb3Jnb3QgeW91ciBwYXNzd29yZD9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9naW4tbGFiZWwgcGFzc3dvcmRcIiBAdGFwPVwiZm9yZ290UGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibG9naW4tbGFiZWwgc2lnbi11cC1sYWJlbFwiIGZvbnRTaXplPVwiMTFcIiBcclxuICAgICAgICAgICAgICAgIHRleHQ9XCJEb24ndCBoYXZlIGFuIGFjY291bnQ/IFBsZWFzZSBjb250YWN0IHlvdXIgYWRtaW5pc3RyYXRvclwiIEB0YXA9XCJ0b2dnbGVGb3JtXCIgLz5cclxuICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgUHVuY2ggZnJvbSBcIi4vUHVuY2hcIjtcclxuICBjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IFtcImN1cnJyZW50VXNlclwiXSxcclxuXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuXHJcbiAgICAgIHN1Ym1pdCgpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZXIudXNlcm5hbWUgfHwgIXRoaXMudXNlci5wYXNzd29yZCkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGhpcy5hbGVydChcIlBsZWFzZSBwcm92aWRlIGJvdGggYW4gdXNlcm5hbWUgYW5kIHBhc3N3b3JkLlwiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBsb2dpbigpIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgICAgICAgdGltZW91dDogMTAwMDAsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHJlcU9iaiA9IHtcclxuICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXIudXNlcm5hbWUsIFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpbnN0YW5jZS5wb3N0KCdodHRwczovL2FwaS5jcmFicnIuY29tL2F1dGgvYXBpa2V5JywgcmVxT2JqKVxyXG4gICAgICAgICAgICAudGhlbiggKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhcGlrZXkgPSByZXNwb25zZS5kYXRhLnJlc3VsdC5hcGlrZXlcclxuICAgICAgICAgICAgICAgIHZhciBpc0FkbWluID0gZmFsc2UgICAvLyBUT0RPOiBDaGVjayBpZiBhZG1pbiB1c2luZyBBUEkgY2FsbFxyXG4gICAgICAgICAgICAgICAgdmFyIGZpcnN0TmFtZSA9ICdBYmRvb2wnXHJcbiAgICAgICAgICAgICAgICB2YXIgbGFzdE5hbWUgPSAnU2hha3VyJ1xyXG4gICAgICAgICAgICAgICAgdmFyIHVzZXJuYW1lID0gdGhpcy51c2VyLnVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICB2YXIgYXV0aCA9IChhcGlrZXkgIT0gbnVsbCkgPyB0cnVlIDogZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBGb3IgdGVzdGluZ1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy51c2VyLnVzZXJuYW1lID09ICdhZG1pbicpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGlzQWRtaW4gPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZSA9ICdBZG1pbidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgaXNBZG1pbiA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoYXV0aClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhQdW5jaCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VXNlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGlrZXk6IGFwaWtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBsYXN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBZG1pbjogaXNBZG1pbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCggKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBmb3Jnb3RQYXNzd29yZCgpIHtcclxuICAgICAgICBwcm9tcHQoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiRm9yZ290IFBhc3N3b3JkXCIsXHJcbiAgICAgICAgICBtZXNzYWdlOlxyXG4gICAgICAgICAgICBcIkVudGVyIHRoZSB1c2VybmFtZSB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgQi1Pbi1UaW1lIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXCIsXHJcbiAgICAgICAgICBpbnB1dFR5cGU6IFwidXNlcm5hbWVcIixcclxuICAgICAgICAgIGRlZmF1bHRUZXh0OiBcIlwiLFxyXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXHJcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xyXG4gICAgICAgICAgICB1c2VyU2VydmljZVxyXG4gICAgICAgICAgICAgIC5yZXNldFBhc3N3b3JkKGRhdGEudGV4dC50cmltKCkpXHJcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydChcclxuICAgICAgICAgICAgICAgICAgXCJZb3VyIHBhc3N3b3JkIHdhcyBzdWNjZXNzZnVsbHkgcmVzZXQuIFBsZWFzZSBjaGVjayB5b3VyIGVtYWlsIGZvciBpbnN0cnVjdGlvbnMgb24gY2hvb3NpbmcgYSBuZXcgcGFzc3dvcmQuXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydChcclxuICAgICAgICAgICAgICAgICAgXCJVbmZvcnR1bmF0ZWx5LCBhbiBlcnJvciBvY2N1cnJlZCByZXNldHRpbmcgeW91ciBwYXNzd29yZC5cIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGZvY3VzUGFzc3dvcmQoKSB7XHJcbiAgICAgICAgdGhpcy4kcmVmcy5wYXNzd29yZC5uYXRpdmVWaWV3LmZvY3VzKCk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBhbGVydChtZXNzYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KHtcclxuICAgICAgICAgIHRpdGxlOiBcIkItT24tVGltZVwiLFxyXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXHJcbiAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAucGFnZSB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMDtcclxuICAgICAgICBmbGV4LWdyb3c6IDI7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDI1O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNzA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmlucHV0LWZpZWxkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNTtcclxuICAgIH1cclxuICAgIC5pbnB1dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxODtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmlucHV0LWZpZWxkIC5pbnB1dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1NDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLXByaW1hcnkge1xyXG4gICAgICAgIGhlaWdodDogNTA7XHJcbiAgICAgICAgbWFyZ2luOiAzMCA1IDE1IDU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICAgIDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICAubG9naW4tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTY7XHJcbiAgICB9XHJcbiAgICAuc2lnbi11cC1sYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjA7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2Uge1xyXG4gICAgXHRiYWNrZ3JvdW5kOiByZ2IoMiwwLDM2KTtcclxuXHQgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDIyLDE0LDc1LDEpIDAlLCByZ2JhKDAsMjA0LDI1NSwxKSAxMDAlKTsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLnBhc3N3b3JkIHtcclxuICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==