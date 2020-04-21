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
      }).then(response => console.log('RESPONSE: ' + response.result.apikey)).catch(error => console.log(error)); // NOTE: test JSON Response to be received from some API Endpoint
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpblBhZ2UudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBOztBQUNBLG9FLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQSx5QkFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLG9CQUZBO0FBR0EsY0FIQTtBQUlBLHFCQUpBO0FBS0Esb0JBTEE7QUFNQSxzQkFOQTtBQU9BO0FBUEE7QUFEQTtBQVdBLEdBZkE7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsS0FSQTs7QUFVQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQSxTQUNBLElBREEsQ0FDQSw4REFEQSxFQUVBLEtBRkEsQ0FFQSwyQkFGQSxFQWJBLENBa0JBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLHM4QkFEQTtBQUVBO0FBQ0EsNkRBREE7QUFFQSx5Q0FGQTtBQUdBO0FBSEE7QUFGQTtBQURBO0FBV0EseUJBL0JBLENBK0JBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBcENBLENBc0NBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBL0NBLENBaURBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSx1Q0FGQTtBQUdBLHFDQUhBO0FBSUEseUJBSkE7QUFLQTtBQUxBO0FBREE7QUFEQTtBQVdBLE9BWkEsTUFZQTtBQUNBO0FBQ0E7QUFDQSxLQTVFQTs7QUE4RUE7QUFDQTtBQUNBLGdDQURBO0FBRUEsaUJBQ0Esb0ZBSEE7QUFJQSwwQkFKQTtBQUtBLHVCQUxBO0FBTUEsMEJBTkE7QUFPQTtBQVBBLFNBUUEsSUFSQSxDQVFBO0FBQ0E7QUFDQSxzQkFDQSxhQURBLENBQ0EsZ0JBREEsRUFFQSxJQUZBLENBRUE7QUFDQSx1QkFDQSw0R0FEQTtBQUdBLFdBTkEsRUFPQSxLQVBBLENBT0E7QUFDQSx1QkFDQSwyREFEQTtBQUdBLFdBWEE7QUFZQTtBQUNBLE9BdkJBO0FBd0JBLEtBdkdBOztBQXlHQTtBQUNBO0FBQ0EsS0EzR0E7O0FBNkdBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLDBCQUZBO0FBR0E7QUFIQTtBQUtBOztBQW5IQTtBQWhCQSxHIiwiZmlsZSI6ImJ1bmRsZS5lZjVmYmFkOTVjZWM5MThlODY4OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2UgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiID5cclxuICAgICAgICA8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIj5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaGVhZGVyXCIgdGV4dD1cIldlbGNvbWUgdG8gQi1Pbi1UaW1lXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIG1hcmdpbkJvdHRvbT1cIjI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgaGludD1cIkVtYWlsXCIga2V5Ym9hcmRUeXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5lbWFpbFwiIHJldHVybktleVR5cGU9XCJuZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQHJldHVyblByZXNzPVwiZm9jdXNQYXNzd29yZFwiIGZvbnRTaXplPVwiMThcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBtYXJnaW5Cb3R0b209XCIyNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgcmVmPVwicGFzc3dvcmRcIiBjbGFzcz1cImlucHV0XCIgaGludD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiIHYtbW9kZWw9XCJ1c2VyLnBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJMb2cgSW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIEB0YXA9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJGb3Jnb3QgeW91ciBwYXNzd29yZD9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9naW4tbGFiZWwgcGFzc3dvcmRcIiBAdGFwPVwiZm9yZ290UGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibG9naW4tbGFiZWwgc2lnbi11cC1sYWJlbFwiIGZvbnRTaXplPVwiMTFcIiBcclxuICAgICAgICAgICAgICAgIHRleHQ9XCJEb24ndCBoYXZlIGFuIGFjY291bnQ/IFBsZWFzZSBjb250YWN0IHlvdXIgYWRtaW5pc3RyYXRvclwiIEB0YXA9XCJ0b2dnbGVGb3JtXCIgLz5cclxuICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgUHVuY2ggZnJvbSBcIi4vUHVuY2hcIjtcclxuICBjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcclxuXHJcbiAgLy8gY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gIC8vICAgdGltZW91dDogMTAwMDAsXHJcbiAgLy8gICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgLy8gICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxuICAvLyB9KTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IFtcImN1cnJyZW50VXNlclwiXSxcclxuXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICBpZDogXCJcIixcclxuICAgICAgICAgIGZpcnN0TmFtZTogXCJcIixcclxuICAgICAgICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgICAgICAgaXNBZG1pbjogZmFsc2UsXHJcbiAgICAgICAgICBqd3Q6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCkge1xyXG4gICAgICAgICAgdGhpcy5hbGVydChcIlBsZWFzZSBwcm92aWRlIGJvdGggYW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmQuXCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgbG9naW4oKSB7XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVRFU1RJTkcgQ09ERSBCTE9DSz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAvLyBOT1RFOiB0ZXN0IEpTT04gUmVxdWVzdCB0byBiZSBzZW50IHRvIHNvbWUgQVBJIEVuZHBvaW50XHJcbiAgICAgICAgLy8gdmFyIGpzb25UbXAgPSB7XHJcbiAgICAgICAgLy8gICAgIFwidXNlcm5hbWVcIjogXCJBZG1pbmlzdHJhdG9yXCIsXHJcbiAgICAgICAgLy8gICAgIFwicGFzc3dvcmRcIjogXCIxMjNcIlxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zdCBvYmogPSBpbnN0YW5jZS5wb3N0KCdsb2NhbGhvc3Q6MzAzMC9hdXRoL2xvZ2luL2FwaWtleS5qc29uJywganNvblRtcClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmopXHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGF4aW9zLnBvc3QoJ2h0dHBzOi8vYXBpLmNyYWJyci5jb20vYXV0aC9hcGlrZXknLCB7dXNlcm5hbWU6IFwiQWRtaW5pc3RyYXRvclwiLCBwYXNzd29yZDogXCIxMjNcIn0pXHJcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZygnUkVTUE9OU0U6ICcgKyByZXNwb25zZS5yZXN1bHQuYXBpa2V5KSlcclxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcblxyXG5cclxuICAgICAgICAvLyBOT1RFOiB0ZXN0IEpTT04gUmVzcG9uc2UgdG8gYmUgcmVjZWl2ZWQgZnJvbSBzb21lIEFQSSBFbmRwb2ludFxyXG4gICAgICAgIC8vIHZhciByZXMgPSBzb21lQVBJQ2FsbCgpXHJcbiAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgIGNvb2tpZXM6IHtcclxuICAgICAgICAgICAgand0OiAnZXlKaGJHY2lPaUpTVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5WDJsa0lqb2lOekJqTlRBMVpXSXROalkzTVMwME4yVTJMV0U0WVRjdE9XUTNaRGRtWTJObU1tSTJJaXdpWm1seWMzUmZibUZ0WlNJNklrUmxabUYxYkhRZ1FXUnRhVzRpTENKc1lYTjBYMjVoYldVaU9pSlZjMlZ5SWl3aWFXRjBJam94TlRnM05EQTVOVEV3TENKbGVIQWlPakUxT0RjME9UVTVNVEFzSW1GMVpDSTZXeUpzYjJOaGJHaHZjM1FpWFN3aWFYTnpJam9pUTA5UU5ETXpNVUZRU1NKOS5YMk90VlNrQkNJTnlUOFBUTEdWUVdNUmdpYVA0VGxLNXRvY2hLLTVNaDU5V1ZRbjdJdW5Mb1NoRlZSOHRQWVdhemZCX2lnVDRNbzh2S2NXc0lYQk9NSzJESzd3eVlhSVRRY2tpVEs0aTM1ZFRsc3dWXzBoeklTV1VRN2lNMWxKZWNFWDhoRHo0Tk9ZSTNjU2lPa0drTDJZaGM2akZoWk5xWWV5SC1pdTVoWElYMHVnaFBhb2x0OURYVmpEd09kUGNBWHdKZ05JeExaWlZxSTlkY1hxc2RUQXRGZUM5alN5WTFycng1UGJBb2JtcW5sZWFVVFJweU9IWEg3WWlVZEhGOEhDVV9wTllpM1ZEN1BOQkEwQ2NOWEE4WjZXb0pEM09Pby1FM3VTeW9BMEVQUDVzRjhKZEQxYk9KMlFuZmFIeEUzSTE1SC1JbnZpeDBXcUVyUHFmTEFVVjJuU1psQ2xHd2FUUE1GM0lJdF9KMHFnNzVYNndaeDY2LWJQMW9DT0pNdFRiWnhKbGQtTlhjb2JwMFczclVlb0p6Wkk1MEJTNkxKOXJMYzFBRDF2NFZfTkh2LW8ybXhPUWxXaEtDVWsyMVdUOVVCaU4wNnF4Q3Zuajg0OXh4amF5MDBrY3dVNFFsNkdwem05Rl81LV9rTFloenRheTN6Vkc1SGQzaGpRcXJuRi1FZnVfS3NLN29GdkdxOFpnb3ZSSHlCc2VvRkdITS1fMEZYd1VMeklDVTRBaTVtWU10X2tWYVVxWmhPTDFmam5LT0xjbmNGLUtNdkVLLVFMUVI5MjA4OWxEdl9IcFVVb0ZQNkhwUW5EY2RzRE1ZUWJLc2RvYmNfVi1nMGk5QWZjN3RYT21nbXgzUTlqMXp1NGlhUV8xSEE4ZnF4bW5QRWc2U0lBWW02OCcsXHJcbiAgICAgICAgICAgIHVzZXJpbmZvOiB7XHJcbiAgICAgICAgICAgICAgICBcInVzZXJfaWRcIjpcIjcwYzUwNWViLTY2NzEtNDdlNi1hOGE3LTlkN2Q3ZmNjZjJiNlwiLFxyXG4gICAgICAgICAgICAgICAgXCJmaXJzdF9uYW1lXCI6XCJEZWZhdWx0IEFkbWluXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhc3RfbmFtZVwiOlwiVXNlclwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGlzQWRtaW4gPSB0cnVlICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IENoZWNrIGlmIGFkbWluIHVzaW5nIEFQSSBjYWxsXHJcbiAgICAgICAgdmFyIGp3dCA9IHJlcy5jb29raWVzWydqd3QnXVxyXG4gICAgICAgIHZhciBhdXRoID0gKGp3dCAhPSBudWxsKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIHZhciBpZCA9IHJlcy5jb29raWVzWyd1c2VyaW5mbyddLnVzZXJfaWRcclxuICAgICAgICB2YXIgZmlyc3ROYW1lID0gcmVzLmNvb2tpZXNbJ3VzZXJpbmZvJ10uZmlyc3RfbmFtZVxyXG4gICAgICAgIHZhciBsYXN0TmFtZSA9IHJlcy5jb29raWVzWyd1c2VyaW5mbyddLmxhc3RfbmFtZVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnand0IC0gJyArIGp3dClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnaWQgLSAnICsgaWQpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZpcnN0IG5hbWUgLSAnICsgZmlyc3ROYW1lKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdsYXN0IG5hbWUgLSAnICsgbGFzdE5hbWUpXHJcblxyXG4gICAgICAgIHRoaXMuaXNBZG1pbiA9IGlzQWRtaW5cclxuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZVxyXG4gICAgICAgIHRoaXMubGFzdE5hbWUgID0gbGFzdE5hbWVcclxuICAgICAgICB0aGlzLmlkID0gaWRcclxuICAgICAgICB0aGlzLmp3dCA9IGp3dFxyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09RU5EIFRFU1RJTkcgQ09ERSBCTE9DSz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBpZiAoYXV0aCkge1xyXG4gICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhQdW5jaCwge1xyXG4gICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgIGN1cnJlbnRVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBqd3Q6IHRoaXMuand0LFxyXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiB0aGlzLmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiB0aGlzLmxhc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgICAgICBpc0FkbWluOiB0aGlzLmlzQWRtaW5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuXHJcbiAgICAgIGZvcmdvdFBhc3N3b3JkKCkge1xyXG4gICAgICAgIHByb21wdCh7XHJcbiAgICAgICAgICB0aXRsZTogXCJGb3Jnb3QgUGFzc3dvcmRcIixcclxuICAgICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICAgIFwiRW50ZXIgdGhlIGVtYWlsIGFkZHJlc3MgeW91IHVzZWQgdG8gcmVnaXN0ZXIgZm9yIEItT24tVGltZSB0byByZXNldCB5b3VyIHBhc3N3b3JkLlwiLFxyXG4gICAgICAgICAgaW5wdXRUeXBlOiBcImVtYWlsXCIsXHJcbiAgICAgICAgICBkZWZhdWx0VGV4dDogXCJcIixcclxuICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxyXG4gICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxyXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcclxuICAgICAgICAgICAgdXNlclNlcnZpY2VcclxuICAgICAgICAgICAgICAucmVzZXRQYXNzd29yZChkYXRhLnRleHQudHJpbSgpKVxyXG4gICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgIFwiWW91ciBwYXNzd29yZCB3YXMgc3VjY2Vzc2Z1bGx5IHJlc2V0LiBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbCBmb3IgaW5zdHJ1Y3Rpb25zIG9uIGNob29zaW5nIGEgbmV3IHBhc3N3b3JkLlwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgIFwiVW5mb3J0dW5hdGVseSwgYW4gZXJyb3Igb2NjdXJyZWQgcmVzZXR0aW5nIHlvdXIgcGFzc3dvcmQuXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBmb2N1c1Bhc3N3b3JkKCkge1xyXG4gICAgICAgIHRoaXMuJHJlZnMucGFzc3dvcmQubmF0aXZlVmlldy5mb2N1cygpO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgYWxlcnQobWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiBhbGVydCh7XHJcbiAgICAgICAgICB0aXRsZTogXCJCLU9uLVRpbWVcIixcclxuICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxyXG4gICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLnBhZ2Uge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzA7XHJcbiAgICAgICAgZmxleC1ncm93OiAyO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDcwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5pbnB1dC1maWVsZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjU7XHJcbiAgICB9XHJcbiAgICAuaW5wdXQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbnB1dC1maWVsZCAuaW5wdXQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1wcmltYXJ5IHtcclxuICAgICAgICBoZWlnaHQ6IDUwO1xyXG4gICAgICAgIG1hcmdpbjogMzAgNSAxNSA1O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZSAgICA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ2luLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE2O1xyXG4gICAgfVxyXG4gICAgLnNpZ24tdXAtbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdlIHtcclxuICAgIFx0YmFja2dyb3VuZDogcmdiKDIsMCwzNik7XHJcblx0ICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDIsMCwzNiwxKSAwJSwgcmdiYSgyMiwxNCw3NSwxKSAwJSwgcmdiYSgwLDIwNCwyNTUsMSkgMTAwJSk7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5wYXNzd29yZCB7XHJcbiAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=