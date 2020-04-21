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


const axios = __webpack_require__("../node_modules/axios/index.js"); // const instance = axios.create({
//   timeout: 10000,
//   headers: { "Content-Type": "application/json" },
//   withCredentials: true
// });


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["currrentUser"],

  data() {
    return {
      user: {
        email: "",
        password: "",
        id: "",
        firstName: "",
        lastName: "",
        isAdmin: false,
        jwt: ""
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
      // =======================================TESTING CODE BLOCK============================================================
      // NOTE: test JSON Request to be sent to some API Endpoint
      // var jsonTmp = {
      //     "username": "Administrator",
      //     "password": "123"
      // }
      // const obj = instance.post('localhost:3030/auth/login/apikey.json', jsonTmp)
      // console.log(obj)
      axios.post('https://api.crabrr.com/auth/apikey', {
        username: "Administrator",
        password: "123"
      }).then(response => console.log('RESPONSE: ' + response)).catch(error => console.log(error)); // NOTE: test JSON Response to be received from some API Endpoint
      // var res = someAPICall()

      var res = {
        cookies: {
          jwt: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNzBjNTA1ZWItNjY3MS00N2U2LWE4YTctOWQ3ZDdmY2NmMmI2IiwiZmlyc3RfbmFtZSI6IkRlZmF1bHQgQWRtaW4iLCJsYXN0X25hbWUiOiJVc2VyIiwiaWF0IjoxNTg3NDA5NTEwLCJleHAiOjE1ODc0OTU5MTAsImF1ZCI6WyJsb2NhbGhvc3QiXSwiaXNzIjoiQ09QNDMzMUFQSSJ9.X2OtVSkBCINyT8PTLGVQWMRgiaP4TlK5tochK-5Mh59WVQn7IunLoShFVR8tPYWazfB_igT4Mo8vKcWsIXBOMK2DK7wyYaITQckiTK4i35dTlswV_0hzISWUQ7iM1lJecEX8hDz4NOYI3cSiOkGkL2Yhc6jFhZNqYeyH-iu5hXIX0ughPaolt9DXVjDwOdPcAXwJgNIxLZZVqI9dcXqsdTAtFeC9jSyY1rrx5PbAobmqnleaUTRpyOHXH7YiUdHF8HCU_pNYi3VD7PNBA0CcNXA8Z6WoJD3OOo-E3uSyoA0EPP5sF8JdD1bOJ2QnfaHxE3I15H-Invix0WqErPqfLAUV2nSZlClGwaTPMF3IIt_J0qg75X6wZx66-bP1oCOJMtTbZxJld-NXcobp0W3rUeoJzZI50BS6LJ9rLc1AD1v4V_NHv-o2mxOQlWhKCUk21WT9UBiN06qxCvnj849xxjay00kcwU4Ql6Gpzm9F_5-_kLYhztay3zVG5Hd3hjQqrnF-Efu_KsK7oFvGq8ZgovRHyBseoFGHM-_0FXwULzICU4Ai5mYMt_kVaUqZhOL1fjnKOLcncF-KMvEK-QLQR92089lDv_HpUUoFP6HpQnDcdsDMYQbKsdobc_V-g0i9Afc7tXOmgmx3Q9j1zu4iaQ_1HA8fqxmnPEg6SIAYm68',
          userinfo: {
            "user_id": "70c505eb-6671-47e6-a8a7-9d7d7fccf2b6",
            "first_name": "Default Admin",
            "last_name": "User"
          }
        }
      };
      var isAdmin = true; // TODO: Check if admin using API call

      var jwt = res.cookies['jwt'];
      var auth = jwt != null ? true : false;
      var id = res.cookies['userinfo'].user_id;
      var firstName = res.cookies['userinfo'].first_name;
      var lastName = res.cookies['userinfo'].last_name; // console.log('jwt - ' + jwt)
      // console.log('id - ' + id)
      // console.log('first name - ' + firstName)
      // console.log('last name - ' + lastName)

      this.isAdmin = isAdmin;
      this.firstName = firstName;
      this.lastName = lastName;
      this.id = id;
      this.jwt = jwt; // ========================================END TESTING CODE BLOCK=========================================================

      if (auth) {
        this.$navigateTo(_Punch__WEBPACK_IMPORTED_MODULE_0__["default"], {
          props: {
            currentUser: {
              jwt: this.jwt,
              firstName: this.firstName,
              lastName: this.lastName,
              id: this.id,
              isAdmin: this.isAdmin
            }
          }
        });
      } else {
        this.alert("Unfortunately we could not find your account.");
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpblBhZ2UudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBOztBQUNBLG9FLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQSx5QkFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLG9CQUZBO0FBR0EsY0FIQTtBQUlBLHFCQUpBO0FBS0Esb0JBTEE7QUFNQSxzQkFOQTtBQU9BO0FBUEE7QUFEQTtBQVdBLEdBZkE7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsS0FSQTs7QUFVQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQSxTQUNBLElBREEsQ0FDQSxnREFEQSxFQUVBLEtBRkEsQ0FFQSwyQkFGQSxFQVpBLENBaUJBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLHM4QkFEQTtBQUVBO0FBQ0EsNkRBREE7QUFFQSx5Q0FGQTtBQUdBO0FBSEE7QUFGQTtBQURBO0FBV0EseUJBOUJBLENBOEJBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBbkNBLENBcUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBOUNBLENBZ0RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSx1Q0FGQTtBQUdBLHFDQUhBO0FBSUEseUJBSkE7QUFLQTtBQUxBO0FBREE7QUFEQTtBQVdBLE9BWkEsTUFZQTtBQUNBO0FBQ0E7QUFDQSxLQTNFQTs7QUE2RUE7QUFDQTtBQUNBLGdDQURBO0FBRUEsaUJBQ0Esb0ZBSEE7QUFJQSwwQkFKQTtBQUtBLHVCQUxBO0FBTUEsMEJBTkE7QUFPQTtBQVBBLFNBUUEsSUFSQSxDQVFBO0FBQ0E7QUFDQSxzQkFDQSxhQURBLENBQ0EsZ0JBREEsRUFFQSxJQUZBLENBRUE7QUFDQSx1QkFDQSw0R0FEQTtBQUdBLFdBTkEsRUFPQSxLQVBBLENBT0E7QUFDQSx1QkFDQSwyREFEQTtBQUdBLFdBWEE7QUFZQTtBQUNBLE9BdkJBO0FBd0JBLEtBdEdBOztBQXdHQTtBQUNBO0FBQ0EsS0ExR0E7O0FBNEdBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLDBCQUZBO0FBR0E7QUFIQTtBQUtBOztBQWxIQTtBQWhCQSxHIiwiZmlsZSI6ImJ1bmRsZS5iYWM4NWE5M2RkYzQ2YmI5MTQ1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2UgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiID5cclxuICAgICAgICA8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIj5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaGVhZGVyXCIgdGV4dD1cIldlbGNvbWUgdG8gQi1Pbi1UaW1lXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIG1hcmdpbkJvdHRvbT1cIjI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgaGludD1cIkVtYWlsXCIga2V5Ym9hcmRUeXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5lbWFpbFwiIHJldHVybktleVR5cGU9XCJuZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQHJldHVyblByZXNzPVwiZm9jdXNQYXNzd29yZFwiIGZvbnRTaXplPVwiMThcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBtYXJnaW5Cb3R0b209XCIyNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgcmVmPVwicGFzc3dvcmRcIiBjbGFzcz1cImlucHV0XCIgaGludD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiIHYtbW9kZWw9XCJ1c2VyLnBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJMb2cgSW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIEB0YXA9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJGb3Jnb3QgeW91ciBwYXNzd29yZD9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9naW4tbGFiZWwgcGFzc3dvcmRcIiBAdGFwPVwiZm9yZ290UGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibG9naW4tbGFiZWwgc2lnbi11cC1sYWJlbFwiIGZvbnRTaXplPVwiMTFcIiBcclxuICAgICAgICAgICAgICAgIHRleHQ9XCJEb24ndCBoYXZlIGFuIGFjY291bnQ/IFBsZWFzZSBjb250YWN0IHlvdXIgYWRtaW5pc3RyYXRvclwiIEB0YXA9XCJ0b2dnbGVGb3JtXCIgLz5cclxuICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgUHVuY2ggZnJvbSBcIi4vUHVuY2hcIjtcclxuICBjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcclxuXHJcbiAgLy8gY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gIC8vICAgdGltZW91dDogMTAwMDAsXHJcbiAgLy8gICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgLy8gICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxuICAvLyB9KTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IFtcImN1cnJyZW50VXNlclwiXSxcclxuXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICBpZDogXCJcIixcclxuICAgICAgICAgIGZpcnN0TmFtZTogXCJcIixcclxuICAgICAgICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgICAgICAgaXNBZG1pbjogZmFsc2UsXHJcbiAgICAgICAgICBqd3Q6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCkge1xyXG4gICAgICAgICAgdGhpcy5hbGVydChcIlBsZWFzZSBwcm92aWRlIGJvdGggYW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmQuXCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgbG9naW4oKSB7XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVRFU1RJTkcgQ09ERSBCTE9DSz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAvLyBOT1RFOiB0ZXN0IEpTT04gUmVxdWVzdCB0byBiZSBzZW50IHRvIHNvbWUgQVBJIEVuZHBvaW50XHJcbiAgICAgICAgLy8gdmFyIGpzb25UbXAgPSB7XHJcbiAgICAgICAgLy8gICAgIFwidXNlcm5hbWVcIjogXCJBZG1pbmlzdHJhdG9yXCIsXHJcbiAgICAgICAgLy8gICAgIFwicGFzc3dvcmRcIjogXCIxMjNcIlxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zdCBvYmogPSBpbnN0YW5jZS5wb3N0KCdsb2NhbGhvc3Q6MzAzMC9hdXRoL2xvZ2luL2FwaWtleS5qc29uJywganNvblRtcClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmopXHJcbiAgICAgIFxyXG4gICAgICAgIGF4aW9zLnBvc3QoJ2h0dHBzOi8vYXBpLmNyYWJyci5jb20vYXV0aC9hcGlrZXknLCB7dXNlcm5hbWU6IFwiQWRtaW5pc3RyYXRvclwiLCBwYXNzd29yZDogXCIxMjNcIn0pXHJcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZygnUkVTUE9OU0U6ICcgKyByZXNwb25zZSkpXHJcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG5cclxuXHJcbiAgICAgICAgLy8gTk9URTogdGVzdCBKU09OIFJlc3BvbnNlIHRvIGJlIHJlY2VpdmVkIGZyb20gc29tZSBBUEkgRW5kcG9pbnRcclxuICAgICAgICAvLyB2YXIgcmVzID0gc29tZUFQSUNhbGwoKVxyXG4gICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICBjb29raWVzOiB7XHJcbiAgICAgICAgICAgIGp3dDogJ2V5SmhiR2NpT2lKU1V6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeVgybGtJam9pTnpCak5UQTFaV0l0TmpZM01TMDBOMlUyTFdFNFlUY3RPV1EzWkRkbVkyTm1NbUkySWl3aVptbHljM1JmYm1GdFpTSTZJa1JsWm1GMWJIUWdRV1J0YVc0aUxDSnNZWE4wWDI1aGJXVWlPaUpWYzJWeUlpd2lhV0YwSWpveE5UZzNOREE1TlRFd0xDSmxlSEFpT2pFMU9EYzBPVFU1TVRBc0ltRjFaQ0k2V3lKc2IyTmhiR2h2YzNRaVhTd2lhWE56SWpvaVEwOVFORE16TVVGUVNTSjkuWDJPdFZTa0JDSU55VDhQVExHVlFXTVJnaWFQNFRsSzV0b2NoSy01TWg1OVdWUW43SXVuTG9TaEZWUjh0UFlXYXpmQl9pZ1Q0TW84dktjV3NJWEJPTUsyREs3d3lZYUlUUWNraVRLNGkzNWRUbHN3Vl8waHpJU1dVUTdpTTFsSmVjRVg4aER6NE5PWUkzY1NpT2tHa0wyWWhjNmpGaFpOcVlleUgtaXU1aFhJWDB1Z2hQYW9sdDlEWFZqRHdPZFBjQVh3SmdOSXhMWlpWcUk5ZGNYcXNkVEF0RmVDOWpTeVkxcnJ4NVBiQW9ibXFubGVhVVRScHlPSFhIN1lpVWRIRjhIQ1VfcE5ZaTNWRDdQTkJBMENjTlhBOFo2V29KRDNPT28tRTN1U3lvQTBFUFA1c0Y4SmREMWJPSjJRbmZhSHhFM0kxNUgtSW52aXgwV3FFclBxZkxBVVYyblNabENsR3dhVFBNRjNJSXRfSjBxZzc1WDZ3Wng2Ni1iUDFvQ09KTXRUYlp4SmxkLU5YY29icDBXM3JVZW9KelpJNTBCUzZMSjlyTGMxQUQxdjRWX05Idi1vMm14T1FsV2hLQ1VrMjFXVDlVQmlOMDZxeEN2bmo4NDl4eGpheTAwa2N3VTRRbDZHcHptOUZfNS1fa0xZaHp0YXkzelZHNUhkM2hqUXFybkYtRWZ1X0tzSzdvRnZHcThaZ292Ukh5QnNlb0ZHSE0tXzBGWHdVTHpJQ1U0QWk1bVlNdF9rVmFVcVpoT0wxZmpuS09MY25jRi1LTXZFSy1RTFFSOTIwODlsRHZfSHBVVW9GUDZIcFFuRGNkc0RNWVFiS3Nkb2JjX1YtZzBpOUFmYzd0WE9tZ214M1E5ajF6dTRpYVFfMUhBOGZxeG1uUEVnNlNJQVltNjgnLFxyXG4gICAgICAgICAgICB1c2VyaW5mbzoge1xyXG4gICAgICAgICAgICAgICAgXCJ1c2VyX2lkXCI6XCI3MGM1MDVlYi02NjcxLTQ3ZTYtYThhNy05ZDdkN2ZjY2YyYjZcIixcclxuICAgICAgICAgICAgICAgIFwiZmlyc3RfbmFtZVwiOlwiRGVmYXVsdCBBZG1pblwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYXN0X25hbWVcIjpcIlVzZXJcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBpc0FkbWluID0gdHJ1ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBDaGVjayBpZiBhZG1pbiB1c2luZyBBUEkgY2FsbFxyXG4gICAgICAgIHZhciBqd3QgPSByZXMuY29va2llc1snand0J11cclxuICAgICAgICB2YXIgYXV0aCA9IChqd3QgIT0gbnVsbCkgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICB2YXIgaWQgPSByZXMuY29va2llc1sndXNlcmluZm8nXS51c2VyX2lkXHJcbiAgICAgICAgdmFyIGZpcnN0TmFtZSA9IHJlcy5jb29raWVzWyd1c2VyaW5mbyddLmZpcnN0X25hbWVcclxuICAgICAgICB2YXIgbGFzdE5hbWUgPSByZXMuY29va2llc1sndXNlcmluZm8nXS5sYXN0X25hbWVcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2p3dCAtICcgKyBqd3QpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2lkIC0gJyArIGlkKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaXJzdCBuYW1lIC0gJyArIGZpcnN0TmFtZSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnbGFzdCBuYW1lIC0gJyArIGxhc3ROYW1lKVxyXG5cclxuICAgICAgICB0aGlzLmlzQWRtaW4gPSBpc0FkbWluXHJcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWVcclxuICAgICAgICB0aGlzLmxhc3ROYW1lICA9IGxhc3ROYW1lXHJcbiAgICAgICAgdGhpcy5pZCA9IGlkXHJcbiAgICAgICAgdGhpcy5qd3QgPSBqd3RcclxuXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUVORCBURVNUSU5HIENPREUgQkxPQ0s9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgaWYgKGF1dGgpIHtcclxuICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUHVuY2gsIHtcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICBjdXJyZW50VXNlcjoge1xyXG4gICAgICAgICAgICAgICAgand0OiB0aGlzLmp3dCxcclxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogdGhpcy5maXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogdGhpcy5sYXN0TmFtZSxcclxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICAgICAgaXNBZG1pbjogdGhpcy5pc0FkbWluXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5hbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBmb3Jnb3RQYXNzd29yZCgpIHtcclxuICAgICAgICBwcm9tcHQoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiRm9yZ290IFBhc3N3b3JkXCIsXHJcbiAgICAgICAgICBtZXNzYWdlOlxyXG4gICAgICAgICAgICBcIkVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSB1c2VkIHRvIHJlZ2lzdGVyIGZvciBCLU9uLVRpbWUgdG8gcmVzZXQgeW91ciBwYXNzd29yZC5cIixcclxuICAgICAgICAgIGlucHV0VHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXHJcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcclxuICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcclxuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHVzZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgLnJlc2V0UGFzc3dvcmQoZGF0YS50ZXh0LnRyaW0oKSlcclxuICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICBcIllvdXIgcGFzc3dvcmQgd2FzIHN1Y2Nlc3NmdWxseSByZXNldC4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGluc3RydWN0aW9ucyBvbiBjaG9vc2luZyBhIG5ldyBwYXNzd29yZC5cIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHksIGFuIGVycm9yIG9jY3VycmVkIHJlc2V0dGluZyB5b3VyIHBhc3N3b3JkLlwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgZm9jdXNQYXNzd29yZCgpIHtcclxuICAgICAgICB0aGlzLiRyZWZzLnBhc3N3b3JkLm5hdGl2ZVZpZXcuZm9jdXMoKTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGFsZXJ0KG1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiQi1Pbi1UaW1lXCIsXHJcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5wYWdlIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMjtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3MDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuaW5wdXQtZmllbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1O1xyXG4gICAgfVxyXG4gICAgLmlucHV0IHtcclxuICAgICAgICBmb250LXNpemU6IDE4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW5wdXQtZmllbGQgLmlucHV0IHtcclxuICAgICAgICBmb250LXNpemU6IDU0O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tcHJpbWFyeSB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDtcclxuICAgICAgICBtYXJnaW46IDMwIDUgMTUgNTtcclxuICAgICAgICBjb2xvcjogd2hpdGUgICAgO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dpbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNjtcclxuICAgIH1cclxuICAgIC5zaWduLXVwLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMDtcclxuICAgIH1cclxuXHJcbiAgICAucGFnZSB7XHJcbiAgICBcdGJhY2tncm91bmQ6IHJnYigyLDAsMzYpO1xyXG5cdCAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyLDAsMzYsMSkgMCUsIHJnYmEoMjIsMTQsNzUsMSkgMCUsIHJnYmEoMCwyMDQsMjU1LDEpIDEwMCUpOyAgICBcclxuICAgIH1cclxuXHJcbiAgICAucGFzc3dvcmQge1xyXG4gICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9