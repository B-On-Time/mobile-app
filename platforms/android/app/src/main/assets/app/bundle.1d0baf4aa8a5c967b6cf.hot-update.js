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

const instance = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});
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
        isAdmin: false
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
      // NOTE: test JSON Response to be received from some API Endpoint
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
      var jwt = res.cookies['jwt'];
      var id = res.cookies['userinfo'].user_id;
      var firstName = res.cookies['userinfo'].first_name;
      var lastName = res.cookies['userinfo'].last_name;
      console.log('jwt - ' + jwt);
      console.log('id - ' + id);
      console.log('first name - ' + firstName);
      console.log('last name - ' + lastName);
      var auth = true; // ========================================END TESTING CODE BLOCK=========================================================

      if (auth) {
        this.$navigateTo(_Punch__WEBPACK_IMPORTED_MODULE_0__["default"], {
          props: {
            currentUser: {
              name: "Ayy Lmao"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpblBhZ2UudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnREE7O0FBQ0E7O0FBRUE7QUFDQSxnQkFEQTtBQUVBO0FBQUE7QUFBQSxHQUZBO0FBR0E7QUFIQTtBQU1BO0FBQ0EseUJBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSxvQkFGQTtBQUdBLGNBSEE7QUFJQSxxQkFKQTtBQUtBLG9CQUxBO0FBTUE7QUFOQTtBQURBO0FBVUEsR0FkQTs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBLEtBUkE7O0FBVUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsczhCQURBO0FBRUE7QUFDQSw2REFEQTtBQUVBLHlDQUZBO0FBR0E7QUFIQTtBQUZBO0FBREE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsc0JBbENBLENBb0NBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBREE7QUFPQSxPQVJBLE1BUUE7QUFDQTtBQUNBO0FBQ0EsS0EzREE7O0FBNkRBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBLGlCQUNBLG9GQUhBO0FBSUEsMEJBSkE7QUFLQSx1QkFMQTtBQU1BLDBCQU5BO0FBT0E7QUFQQSxTQVFBLElBUkEsQ0FRQTtBQUNBO0FBQ0Esc0JBQ0EsYUFEQSxDQUNBLGdCQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0EsdUJBQ0EsNEdBREE7QUFHQSxXQU5BLEVBT0EsS0FQQSxDQU9BO0FBQ0EsdUJBQ0EsMkRBREE7QUFHQSxXQVhBO0FBWUE7QUFDQSxPQXZCQTtBQXdCQSxLQXRGQTs7QUF3RkE7QUFDQTtBQUNBLEtBMUZBOztBQTRGQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSwwQkFGQTtBQUdBO0FBSEE7QUFLQTs7QUFsR0E7QUFmQSxHIiwiZmlsZSI6ImJ1bmRsZS4xZDBiYWY0YWE4YTVjOTY3YjZjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxQYWdlPlxyXG4gICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJwYWdlXCI+XHJcbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvcm1cIj5cclxuICAgICAgICA8TGFiZWwgY2xhc3M9XCJoZWFkZXJcIiB0ZXh0PVwiV2VsY29tZSB0byBCLU9uLVRpbWVcIiAvPlxyXG5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIG1hcmdpbkJvdHRvbT1cIjI1XCI+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICBoaW50PVwiRW1haWxcIlxyXG4gICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmVtYWlsXCJcclxuICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cIm5leHRcIlxyXG4gICAgICAgICAgICBAcmV0dXJuUHJlc3M9XCJmb2N1c1Bhc3N3b3JkXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgbWFyZ2luQm90dG9tPVwiMjVcIj5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgcmVmPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcclxuICAgICAgICAgICAgaGludD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLnBhc3N3b3JkXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxCdXR0b24gdGV4dD1cIkxvZyBJblwiIEB0YXA9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIiAvPlxyXG4gICAgICAgIDxMYWJlbCB0ZXh0PVwiRm9yZ290IHlvdXIgcGFzc3dvcmQ/XCIgY2xhc3M9XCJsb2dpbi1sYWJlbFwiIEB0YXA9XCJmb3Jnb3RQYXNzd29yZFwiIC8+XHJcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICA8TGFiZWxcclxuICAgICAgICBjbGFzcz1cImxvZ2luLWxhYmVsIHNpZ24tdXAtbGFiZWxcIlxyXG4gICAgICAgIGZvbnRTaXplPVwiMTFcIlxyXG4gICAgICAgIHRleHQ9XCJEb24ndCBoYXZlIGFuIGFjY291bnQ/IFBsZWFzZSBjb250YWN0IHlvdXIgYWRtaW5pc3RyYXRvclwiXHJcbiAgICAgICAgQHRhcD1cInRvZ2dsZUZvcm1cIlxyXG4gICAgICAvPlxyXG4gICAgPC9GbGV4Ym94TGF5b3V0PlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IFB1bmNoIGZyb20gXCIuL1B1bmNoXCI7XHJcbiAgY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XHJcblxyXG4gIGNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIHRpbWVvdXQ6IDEwMDAwLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXHJcbiAgfSk7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiBbXCJjdXJycmVudFVzZXJcIl0sXHJcblxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgICAgICBmaXJzdE5hbWU6IFwiXCIsXHJcbiAgICAgICAgICBsYXN0TmFtZTogXCJcIixcclxuICAgICAgICAgIGlzQWRtaW46IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgc3VibWl0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy51c2VyLmVtYWlsIHx8ICF0aGlzLnVzZXIucGFzc3dvcmQpIHtcclxuICAgICAgICAgIHRoaXMuYWxlcnQoXCJQbGVhc2UgcHJvdmlkZSBib3RoIGFuIGVtYWlsIGFkZHJlc3MgYW5kIHBhc3N3b3JkLlwiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuXHJcbiAgICAgIGxvZ2luKCkge1xyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1URVNUSU5HIENPREUgQkxPQ0s9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgLy8gTk9URTogdGVzdCBKU09OIFJlcXVlc3QgdG8gYmUgc2VudCB0byBzb21lIEFQSSBFbmRwb2ludFxyXG4gICAgICAgIC8vIHZhciBqc29uVG1wID0ge1xyXG4gICAgICAgIC8vICAgICBcInVzZXJuYW1lXCI6IFwiQWRtaW5pc3RyYXRvclwiLFxyXG4gICAgICAgIC8vICAgICBcInBhc3N3b3JkXCI6IFwiMTIzXCJcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY29uc3Qgb2JqID0gaW5zdGFuY2UucG9zdCgnbG9jYWxob3N0OjMwMzAvYXV0aC9sb2dpbi9hcGlrZXkuanNvbicsIGpzb25UbXApXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cob2JqKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE5PVEU6IHRlc3QgSlNPTiBSZXNwb25zZSB0byBiZSByZWNlaXZlZCBmcm9tIHNvbWUgQVBJIEVuZHBvaW50XHJcbiAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgIGNvb2tpZXM6IHtcclxuICAgICAgICAgICAgand0OiAnZXlKaGJHY2lPaUpTVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5WDJsa0lqb2lOekJqTlRBMVpXSXROalkzTVMwME4yVTJMV0U0WVRjdE9XUTNaRGRtWTJObU1tSTJJaXdpWm1seWMzUmZibUZ0WlNJNklrUmxabUYxYkhRZ1FXUnRhVzRpTENKc1lYTjBYMjVoYldVaU9pSlZjMlZ5SWl3aWFXRjBJam94TlRnM05EQTVOVEV3TENKbGVIQWlPakUxT0RjME9UVTVNVEFzSW1GMVpDSTZXeUpzYjJOaGJHaHZjM1FpWFN3aWFYTnpJam9pUTA5UU5ETXpNVUZRU1NKOS5YMk90VlNrQkNJTnlUOFBUTEdWUVdNUmdpYVA0VGxLNXRvY2hLLTVNaDU5V1ZRbjdJdW5Mb1NoRlZSOHRQWVdhemZCX2lnVDRNbzh2S2NXc0lYQk9NSzJESzd3eVlhSVRRY2tpVEs0aTM1ZFRsc3dWXzBoeklTV1VRN2lNMWxKZWNFWDhoRHo0Tk9ZSTNjU2lPa0drTDJZaGM2akZoWk5xWWV5SC1pdTVoWElYMHVnaFBhb2x0OURYVmpEd09kUGNBWHdKZ05JeExaWlZxSTlkY1hxc2RUQXRGZUM5alN5WTFycng1UGJBb2JtcW5sZWFVVFJweU9IWEg3WWlVZEhGOEhDVV9wTllpM1ZEN1BOQkEwQ2NOWEE4WjZXb0pEM09Pby1FM3VTeW9BMEVQUDVzRjhKZEQxYk9KMlFuZmFIeEUzSTE1SC1JbnZpeDBXcUVyUHFmTEFVVjJuU1psQ2xHd2FUUE1GM0lJdF9KMHFnNzVYNndaeDY2LWJQMW9DT0pNdFRiWnhKbGQtTlhjb2JwMFczclVlb0p6Wkk1MEJTNkxKOXJMYzFBRDF2NFZfTkh2LW8ybXhPUWxXaEtDVWsyMVdUOVVCaU4wNnF4Q3Zuajg0OXh4amF5MDBrY3dVNFFsNkdwem05Rl81LV9rTFloenRheTN6Vkc1SGQzaGpRcXJuRi1FZnVfS3NLN29GdkdxOFpnb3ZSSHlCc2VvRkdITS1fMEZYd1VMeklDVTRBaTVtWU10X2tWYVVxWmhPTDFmam5LT0xjbmNGLUtNdkVLLVFMUVI5MjA4OWxEdl9IcFVVb0ZQNkhwUW5EY2RzRE1ZUWJLc2RvYmNfVi1nMGk5QWZjN3RYT21nbXgzUTlqMXp1NGlhUV8xSEE4ZnF4bW5QRWc2U0lBWW02OCcsXHJcbiAgICAgICAgICAgIHVzZXJpbmZvOiB7XHJcbiAgICAgICAgICAgICAgICBcInVzZXJfaWRcIjpcIjcwYzUwNWViLTY2NzEtNDdlNi1hOGE3LTlkN2Q3ZmNjZjJiNlwiLFxyXG4gICAgICAgICAgICAgICAgXCJmaXJzdF9uYW1lXCI6XCJEZWZhdWx0IEFkbWluXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhc3RfbmFtZVwiOlwiVXNlclwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGp3dCA9IHJlcy5jb29raWVzWydqd3QnXVxyXG4gICAgICAgIHZhciBpZCA9IHJlcy5jb29raWVzWyd1c2VyaW5mbyddLnVzZXJfaWRcclxuICAgICAgICB2YXIgZmlyc3ROYW1lID0gcmVzLmNvb2tpZXNbJ3VzZXJpbmZvJ10uZmlyc3RfbmFtZVxyXG4gICAgICAgIHZhciBsYXN0TmFtZSA9IHJlcy5jb29raWVzWyd1c2VyaW5mbyddLmxhc3RfbmFtZVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnand0IC0gJyArIGp3dClcclxuICAgICAgICBjb25zb2xlLmxvZygnaWQgLSAnICsgaWQpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ZpcnN0IG5hbWUgLSAnICsgZmlyc3ROYW1lKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsYXN0IG5hbWUgLSAnICsgbGFzdE5hbWUpXHJcblxyXG4gICAgICAgIHZhciBhdXRoID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUVORCBURVNUSU5HIENPREUgQkxPQ0s9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgaWYgKGF1dGgpIHtcclxuICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUHVuY2gsIHtcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICBjdXJyZW50VXNlcjoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJBeXkgTG1hb1wiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5hbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBmb3Jnb3RQYXNzd29yZCgpIHtcclxuICAgICAgICBwcm9tcHQoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiRm9yZ290IFBhc3N3b3JkXCIsXHJcbiAgICAgICAgICBtZXNzYWdlOlxyXG4gICAgICAgICAgICBcIkVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSB1c2VkIHRvIHJlZ2lzdGVyIGZvciBCLU9uLVRpbWUgdG8gcmVzZXQgeW91ciBwYXNzd29yZC5cIixcclxuICAgICAgICAgIGlucHV0VHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXHJcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcclxuICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcclxuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHVzZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgLnJlc2V0UGFzc3dvcmQoZGF0YS50ZXh0LnRyaW0oKSlcclxuICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICBcIllvdXIgcGFzc3dvcmQgd2FzIHN1Y2Nlc3NmdWxseSByZXNldC4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGluc3RydWN0aW9ucyBvbiBjaG9vc2luZyBhIG5ldyBwYXNzd29yZC5cIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHksIGFuIGVycm9yIG9jY3VycmVkIHJlc2V0dGluZyB5b3VyIHBhc3N3b3JkLlwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgZm9jdXNQYXNzd29yZCgpIHtcclxuICAgICAgICB0aGlzLiRyZWZzLnBhc3N3b3JkLm5hdGl2ZVZpZXcuZm9jdXMoKTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGFsZXJ0KG1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiQi1Pbi1UaW1lXCIsXHJcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnBhZ2Uge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uZm9ybSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwO1xyXG4gIG1hcmdpbi1yaWdodDogMzA7XHJcbiAgZmxleC1ncm93OiAyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAyNTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDcwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW5wdXQtZmllbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDI1O1xyXG59XHJcbi5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxODtcclxufVxyXG4uaW5wdXQtZmllbGQgLmlucHV0IHtcclxuICBmb250LXNpemU6IDU0O1xyXG59XHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgaGVpZ2h0OiA1MDtcclxuICBtYXJnaW46IDMwIDUgMTUgNTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgYm9yZGVyLXJhZGl1czogNTtcclxuICBmb250LXNpemU6IDIwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmxvZ2luLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE2O1xyXG59XHJcbi5zaWduLXVwLWxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMDtcclxufVxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=