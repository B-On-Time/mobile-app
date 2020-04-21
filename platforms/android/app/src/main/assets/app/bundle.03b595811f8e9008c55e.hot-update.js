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
        username: "Administrator",
        password: "123"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpblBhZ2UudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBOztBQUNBOztBQUVBO0FBQ0EseUJBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQTtBQUZBO0FBREE7QUFNQSxHQVZBOztBQVlBO0FBRUE7QUFFQSxzREFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLE1BTUE7QUFDQTtBQUNBO0FBRUEsS0FkQTs7QUFnQkE7QUFFQTtBQUNBLHNCQURBO0FBRUE7QUFBQTtBQUFBLFNBRkE7QUFHQTtBQUhBO0FBTUE7QUFDQSxpQ0FEQTtBQUVBO0FBRkE7QUFLQSxrRUFDQSxJQURBLENBQ0E7QUFDQTtBQUVBO0FBQ0EsNEJBSkEsQ0FJQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFSQSxDQVVBOztBQUNBLDJDQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSkEsTUFNQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFEQTtBQUVBLG9DQUZBO0FBR0Esa0NBSEE7QUFJQSxnQ0FKQTtBQUtBO0FBTEE7QUFEQTtBQURBO0FBV0EsU0FiQSxNQWVBO0FBQ0E7QUFDQTtBQUVBLE9BekNBLEVBMENBLEtBMUNBLENBMENBO0FBQ0E7QUFDQSxPQTVDQTtBQTZDQSxLQTFFQTs7QUE0RUE7QUFDQTtBQUNBLGdDQURBO0FBRUEsaUJBQ0EsK0VBSEE7QUFJQSw2QkFKQTtBQUtBLHVCQUxBO0FBTUEsMEJBTkE7QUFPQTtBQVBBLFNBUUEsSUFSQSxDQVFBO0FBQ0E7QUFDQSxzQkFDQSxhQURBLENBQ0EsZ0JBREEsRUFFQSxJQUZBLENBRUE7QUFDQSx1QkFDQSw0R0FEQTtBQUdBLFdBTkEsRUFPQSxLQVBBLENBT0E7QUFDQSx1QkFDQSwyREFEQTtBQUdBLFdBWEE7QUFZQTtBQUNBLE9BdkJBO0FBd0JBLEtBckdBOztBQXVHQTtBQUNBO0FBQ0EsS0F6R0E7O0FBMkdBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLDBCQUZBO0FBR0E7QUFIQTtBQUtBOztBQWpIQTtBQVpBLEciLCJmaWxlIjoiYnVuZGxlLjAzYjU5NTgxMWY4ZTkwMDhjNTVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCIgPlxyXG4gICAgICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwicGFnZVwiPlxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoZWFkZXJcIiB0ZXh0PVwiV2VsY29tZSB0byBCLU9uLVRpbWVcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgbWFyZ2luQm90dG9tPVwiMjVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiBoaW50PVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci51c2VybmFtZVwiIHJldHVybktleVR5cGU9XCJuZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQHJldHVyblByZXNzPVwiZm9jdXNQYXNzd29yZFwiIGZvbnRTaXplPVwiMThcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBtYXJnaW5Cb3R0b209XCIyNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgcmVmPVwicGFzc3dvcmRcIiBjbGFzcz1cImlucHV0XCIgaGludD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiIHYtbW9kZWw9XCJ1c2VyLnBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJMb2cgSW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIEB0YXA9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJGb3Jnb3QgeW91ciBwYXNzd29yZD9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9naW4tbGFiZWwgcGFzc3dvcmRcIiBAdGFwPVwiZm9yZ290UGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibG9naW4tbGFiZWwgc2lnbi11cC1sYWJlbFwiIGZvbnRTaXplPVwiMTFcIiBcclxuICAgICAgICAgICAgICAgIHRleHQ9XCJEb24ndCBoYXZlIGFuIGFjY291bnQ/IFBsZWFzZSBjb250YWN0IHlvdXIgYWRtaW5pc3RyYXRvclwiIEB0YXA9XCJ0b2dnbGVGb3JtXCIgLz5cclxuICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgUHVuY2ggZnJvbSBcIi4vUHVuY2hcIjtcclxuICBjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IFtcImN1cnJyZW50VXNlclwiXSxcclxuXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuXHJcbiAgICAgIHN1Ym1pdCgpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZXIudXNlcm5hbWUgfHwgIXRoaXMudXNlci5wYXNzd29yZCkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGhpcy5hbGVydChcIlBsZWFzZSBwcm92aWRlIGJvdGggYW4gdXNlcm5hbWUgYW5kIHBhc3N3b3JkLlwiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBsb2dpbigpIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgICAgICAgdGltZW91dDogMTAwMDAsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHJlcU9iaiA9IHtcclxuICAgICAgICAgIHVzZXJuYW1lOiBcIkFkbWluaXN0cmF0b3JcIiwgXHJcbiAgICAgICAgICBwYXNzd29yZDogXCIxMjNcIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGluc3RhbmNlLnBvc3QoJ2h0dHBzOi8vYXBpLmNyYWJyci5jb20vYXV0aC9hcGlrZXknLCByZXFPYmopXHJcbiAgICAgICAgICAgIC50aGVuKCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGFwaWtleSA9IHJlc3BvbnNlLmRhdGEucmVzdWx0LmFwaWtleVxyXG4gICAgICAgICAgICAgICAgdmFyIGlzQWRtaW4gPSBmYWxzZSAgIC8vIFRPRE86IENoZWNrIGlmIGFkbWluIHVzaW5nIEFQSSBjYWxsXHJcbiAgICAgICAgICAgICAgICB2YXIgZmlyc3ROYW1lID0gJ0FiZG9vbCdcclxuICAgICAgICAgICAgICAgIHZhciBsYXN0TmFtZSA9ICdTaGFrdXInXHJcbiAgICAgICAgICAgICAgICB2YXIgdXNlcm5hbWUgPSB0aGlzLnVzZXIudXNlcm5hbWVcclxuICAgICAgICAgICAgICAgIHZhciBhdXRoID0gKGFwaWtleSAhPSBudWxsKSA/IHRydWUgOiBmYWxzZVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IEZvciB0ZXN0aW5nXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnVzZXIudXNlcm5hbWUgPT0gJ2FkbWluJylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgaXNBZG1pbiA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lID0gJ0FkbWluJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpc0FkbWluID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihhdXRoKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFB1bmNoLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaWtleTogYXBpa2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU6IGxhc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FkbWluOiBpc0FkbWluLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGZvcmdvdFBhc3N3b3JkKCkge1xyXG4gICAgICAgIHByb21wdCh7XHJcbiAgICAgICAgICB0aXRsZTogXCJGb3Jnb3QgUGFzc3dvcmRcIixcclxuICAgICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICAgIFwiRW50ZXIgdGhlIHVzZXJuYW1lIHlvdSB1c2VkIHRvIHJlZ2lzdGVyIGZvciBCLU9uLVRpbWUgdG8gcmVzZXQgeW91ciBwYXNzd29yZC5cIixcclxuICAgICAgICAgIGlucHV0VHlwZTogXCJ1c2VybmFtZVwiLFxyXG4gICAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXHJcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcclxuICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcclxuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHVzZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgLnJlc2V0UGFzc3dvcmQoZGF0YS50ZXh0LnRyaW0oKSlcclxuICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICBcIllvdXIgcGFzc3dvcmQgd2FzIHN1Y2Nlc3NmdWxseSByZXNldC4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGluc3RydWN0aW9ucyBvbiBjaG9vc2luZyBhIG5ldyBwYXNzd29yZC5cIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHksIGFuIGVycm9yIG9jY3VycmVkIHJlc2V0dGluZyB5b3VyIHBhc3N3b3JkLlwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgZm9jdXNQYXNzd29yZCgpIHtcclxuICAgICAgICB0aGlzLiRyZWZzLnBhc3N3b3JkLm5hdGl2ZVZpZXcuZm9jdXMoKTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGFsZXJ0KG1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiQi1Pbi1UaW1lXCIsXHJcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5wYWdlIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMjtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3MDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuaW5wdXQtZmllbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1O1xyXG4gICAgfVxyXG4gICAgLmlucHV0IHtcclxuICAgICAgICBmb250LXNpemU6IDE4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW5wdXQtZmllbGQgLmlucHV0IHtcclxuICAgICAgICBmb250LXNpemU6IDU0O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tcHJpbWFyeSB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDtcclxuICAgICAgICBtYXJnaW46IDMwIDUgMTUgNTtcclxuICAgICAgICBjb2xvcjogd2hpdGUgICAgO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dpbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNjtcclxuICAgIH1cclxuICAgIC5zaWduLXVwLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMDtcclxuICAgIH1cclxuXHJcbiAgICAucGFnZSB7XHJcbiAgICBcdGJhY2tncm91bmQ6IHJnYigyLDAsMzYpO1xyXG5cdCAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyLDAsMzYsMSkgMCUsIHJnYmEoMjIsMTQsNzUsMSkgMCUsIHJnYmEoMCwyMDQsMjU1LDEpIDEwMCUpOyAgICBcclxuICAgIH1cclxuXHJcbiAgICAucGFzc3dvcmQge1xyXG4gICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9