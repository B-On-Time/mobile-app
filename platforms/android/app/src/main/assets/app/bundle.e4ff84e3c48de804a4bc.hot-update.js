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

        if (this.user.username == 'admin') isAdmin = true;else isAdmin = false;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpblBhZ2UudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBOztBQUNBOztBQUVBO0FBQ0EseUJBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQTtBQUZBO0FBREE7QUFNQSxHQVZBOztBQVlBO0FBRUE7QUFFQSxzREFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLE1BTUE7QUFDQTtBQUNBO0FBRUEsS0FkQTs7QUFnQkE7QUFFQTtBQUNBLHNCQURBO0FBRUE7QUFBQTtBQUFBLFNBRkE7QUFHQTtBQUhBO0FBTUE7QUFDQSxpQ0FEQTtBQUVBO0FBRkE7QUFLQSxrRUFDQSxJQURBLENBQ0E7QUFDQTtBQUVBO0FBQ0EsNEJBSkEsQ0FJQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFSQSxDQVVBOztBQUNBLDJDQUNBLGVBREEsS0FHQTs7QUFFQSxrQkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQURBO0FBRUEsb0NBRkE7QUFHQSxrQ0FIQTtBQUlBLGdDQUpBO0FBS0E7QUFMQTtBQURBO0FBREE7QUFXQSxTQWJBLE1BZUE7QUFDQTtBQUNBO0FBRUEsT0FwQ0EsRUFxQ0EsS0FyQ0EsQ0FxQ0E7QUFDQTtBQUNBLE9BdkNBO0FBd0NBLEtBckVBOztBQXVFQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSxpQkFDQSwrRUFIQTtBQUlBLDZCQUpBO0FBS0EsdUJBTEE7QUFNQSwwQkFOQTtBQU9BO0FBUEEsU0FRQSxJQVJBLENBUUE7QUFDQTtBQUNBLHNCQUNBLGFBREEsQ0FDQSxnQkFEQSxFQUVBLElBRkEsQ0FFQTtBQUNBLHVCQUNBLDRHQURBO0FBR0EsV0FOQSxFQU9BLEtBUEEsQ0FPQTtBQUNBLHVCQUNBLDJEQURBO0FBR0EsV0FYQTtBQVlBO0FBQ0EsT0F2QkE7QUF3QkEsS0FoR0E7O0FBa0dBO0FBQ0E7QUFDQSxLQXBHQTs7QUFzR0E7QUFDQTtBQUNBLDBCQURBO0FBRUEsMEJBRkE7QUFHQTtBQUhBO0FBS0E7O0FBNUdBO0FBWkEsRyIsImZpbGUiOiJidW5kbGUuZTRmZjg0ZTNjNDhkZTgwNGE0YmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIiA+XHJcbiAgICAgICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImhlYWRlclwiIHRleHQ9XCJXZWxjb21lIHRvIEItT24tVGltZVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBtYXJnaW5Cb3R0b209XCIyNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIGhpbnQ9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIiBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLnVzZXJuYW1lXCIgcmV0dXJuS2V5VHlwZT1cIm5leHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAcmV0dXJuUHJlc3M9XCJmb2N1c1Bhc3N3b3JkXCIgZm9udFNpemU9XCIxOFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIG1hcmdpbkJvdHRvbT1cIjI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCByZWY9XCJwYXNzd29yZFwiIGNsYXNzPVwiaW5wdXRcIiBoaW50PVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmU9XCJ0cnVlXCIgdi1tb2RlbD1cInVzZXIucGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjE4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkxvZyBJblwiXHJcbiAgICAgICAgICAgICAgICAgICAgQHRhcD1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkZvcmdvdCB5b3VyIHBhc3N3b3JkP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsb2dpbi1sYWJlbCBwYXNzd29yZFwiIEB0YXA9XCJmb3Jnb3RQYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsb2dpbi1sYWJlbCBzaWduLXVwLWxhYmVsXCIgZm9udFNpemU9XCIxMVwiIFxyXG4gICAgICAgICAgICAgICAgdGV4dD1cIkRvbid0IGhhdmUgYW4gYWNjb3VudD8gUGxlYXNlIGNvbnRhY3QgeW91ciBhZG1pbmlzdHJhdG9yXCIgQHRhcD1cInRvZ2dsZUZvcm1cIiAvPlxyXG4gICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XHJcbiAgICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBQdW5jaCBmcm9tIFwiLi9QdW5jaFwiO1xyXG4gIGNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczogW1wiY3VycnJlbnRVc2VyXCJdLFxyXG5cclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgbWV0aG9kczoge1xyXG5cclxuICAgICAgc3VibWl0KCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMudXNlci51c2VybmFtZSB8fCAhdGhpcy51c2VyLnBhc3N3b3JkKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLmFsZXJ0KFwiUGxlYXNlIHByb3ZpZGUgYm90aCBhbiB1c2VybmFtZSBhbmQgcGFzc3dvcmQuXCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSxcclxuXHJcbiAgICAgIGxvZ2luKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgICAgICB0aW1lb3V0OiAxMDAwMCxcclxuICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgcmVxT2JqID0ge1xyXG4gICAgICAgICAgdXNlcm5hbWU6IFwiQWRtaW5pc3RyYXRvclwiLCBcclxuICAgICAgICAgIHBhc3N3b3JkOiBcIjEyM1wiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaW5zdGFuY2UucG9zdCgnaHR0cHM6Ly9hcGkuY3JhYnJyLmNvbS9hdXRoL2FwaWtleScsIHJlcU9iailcclxuICAgICAgICAgICAgLnRoZW4oIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYXBpa2V5ID0gcmVzcG9uc2UuZGF0YS5yZXN1bHQuYXBpa2V5XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNBZG1pbiA9IGZhbHNlICAgLy8gVE9ETzogQ2hlY2sgaWYgYWRtaW4gdXNpbmcgQVBJIGNhbGxcclxuICAgICAgICAgICAgICAgIHZhciBmaXJzdE5hbWUgPSAnQWJkb29sJ1xyXG4gICAgICAgICAgICAgICAgdmFyIGxhc3ROYW1lID0gJ1NoYWt1cidcclxuICAgICAgICAgICAgICAgIHZhciB1c2VybmFtZSA9IHRoaXMudXNlci51c2VybmFtZVxyXG4gICAgICAgICAgICAgICAgdmFyIGF1dGggPSAoYXBpa2V5ICE9IG51bGwpID8gdHJ1ZSA6IGZhbHNlXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogRm9yIHRlc3RpbmdcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMudXNlci51c2VybmFtZSA9PSAnYWRtaW4nKVxyXG4gICAgICAgICAgICAgICAgICBpc0FkbWluID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICBpc0FkbWluID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICBpZihhdXRoKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFB1bmNoLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaWtleTogYXBpa2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU6IGxhc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FkbWluOiBpc0FkbWluLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGZvcmdvdFBhc3N3b3JkKCkge1xyXG4gICAgICAgIHByb21wdCh7XHJcbiAgICAgICAgICB0aXRsZTogXCJGb3Jnb3QgUGFzc3dvcmRcIixcclxuICAgICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICAgIFwiRW50ZXIgdGhlIHVzZXJuYW1lIHlvdSB1c2VkIHRvIHJlZ2lzdGVyIGZvciBCLU9uLVRpbWUgdG8gcmVzZXQgeW91ciBwYXNzd29yZC5cIixcclxuICAgICAgICAgIGlucHV0VHlwZTogXCJ1c2VybmFtZVwiLFxyXG4gICAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXHJcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcclxuICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcclxuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHVzZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgLnJlc2V0UGFzc3dvcmQoZGF0YS50ZXh0LnRyaW0oKSlcclxuICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICBcIllvdXIgcGFzc3dvcmQgd2FzIHN1Y2Nlc3NmdWxseSByZXNldC4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGluc3RydWN0aW9ucyBvbiBjaG9vc2luZyBhIG5ldyBwYXNzd29yZC5cIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHksIGFuIGVycm9yIG9jY3VycmVkIHJlc2V0dGluZyB5b3VyIHBhc3N3b3JkLlwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgZm9jdXNQYXNzd29yZCgpIHtcclxuICAgICAgICB0aGlzLiRyZWZzLnBhc3N3b3JkLm5hdGl2ZVZpZXcuZm9jdXMoKTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGFsZXJ0KG1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiQi1Pbi1UaW1lXCIsXHJcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5wYWdlIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMjtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3MDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuaW5wdXQtZmllbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1O1xyXG4gICAgfVxyXG4gICAgLmlucHV0IHtcclxuICAgICAgICBmb250LXNpemU6IDE4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW5wdXQtZmllbGQgLmlucHV0IHtcclxuICAgICAgICBmb250LXNpemU6IDU0O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tcHJpbWFyeSB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDtcclxuICAgICAgICBtYXJnaW46IDMwIDUgMTUgNTtcclxuICAgICAgICBjb2xvcjogd2hpdGUgICAgO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dpbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNjtcclxuICAgIH1cclxuICAgIC5zaWduLXVwLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMDtcclxuICAgIH1cclxuXHJcbiAgICAucGFnZSB7XHJcbiAgICBcdGJhY2tncm91bmQ6IHJnYigyLDAsMzYpO1xyXG5cdCAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyLDAsMzYsMSkgMCUsIHJnYmEoMjIsMTQsNzUsMSkgMCUsIHJnYmEoMCwyMDQsMjU1LDEpIDEwMCUpOyAgICBcclxuICAgIH1cclxuXHJcbiAgICAucGFzc3dvcmQge1xyXG4gICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9