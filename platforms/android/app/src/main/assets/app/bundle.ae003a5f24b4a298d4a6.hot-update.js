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
      // axios.post('https://api.crabrr.com/auth/apikey', {username: "Administrator", password: "123"})
      //   .then(response => console.log('RESPONSE: ' + response.result))
      //   .catch(error => console.log(error))
      // NOTE: test JSON Response to be received from some API Endpoint
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpblBhZ2UudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBOztBQUNBLG9FLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQSx5QkFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLG9CQUZBO0FBR0EsY0FIQTtBQUlBLHFCQUpBO0FBS0Esb0JBTEE7QUFNQSxzQkFOQTtBQU9BO0FBUEE7QUFEQTtBQVdBLEdBZkE7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsS0FSQTs7QUFVQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHM4QkFEQTtBQUVBO0FBQ0EsNkRBREE7QUFFQSx5Q0FGQTtBQUdBO0FBSEE7QUFGQTtBQURBO0FBV0EseUJBL0JBLENBK0JBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBcENBLENBc0NBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBL0NBLENBaURBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSx1Q0FGQTtBQUdBLHFDQUhBO0FBSUEseUJBSkE7QUFLQTtBQUxBO0FBREE7QUFEQTtBQVdBLE9BWkEsTUFZQTtBQUNBO0FBQ0E7QUFDQSxLQTVFQTs7QUE4RUE7QUFDQTtBQUNBLGdDQURBO0FBRUEsaUJBQ0Esb0ZBSEE7QUFJQSwwQkFKQTtBQUtBLHVCQUxBO0FBTUEsMEJBTkE7QUFPQTtBQVBBLFNBUUEsSUFSQSxDQVFBO0FBQ0E7QUFDQSxzQkFDQSxhQURBLENBQ0EsZ0JBREEsRUFFQSxJQUZBLENBRUE7QUFDQSx1QkFDQSw0R0FEQTtBQUdBLFdBTkEsRUFPQSxLQVBBLENBT0E7QUFDQSx1QkFDQSwyREFEQTtBQUdBLFdBWEE7QUFZQTtBQUNBLE9BdkJBO0FBd0JBLEtBdkdBOztBQXlHQTtBQUNBO0FBQ0EsS0EzR0E7O0FBNkdBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLDBCQUZBO0FBR0E7QUFIQTtBQUtBOztBQW5IQTtBQWhCQSxHIiwiZmlsZSI6ImJ1bmRsZS5hZTAwM2E1ZjI0YjRhMjk4ZDRhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2UgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiID5cclxuICAgICAgICA8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIj5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaGVhZGVyXCIgdGV4dD1cIldlbGNvbWUgdG8gQi1Pbi1UaW1lXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIG1hcmdpbkJvdHRvbT1cIjI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgaGludD1cIkVtYWlsXCIga2V5Ym9hcmRUeXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5lbWFpbFwiIHJldHVybktleVR5cGU9XCJuZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQHJldHVyblByZXNzPVwiZm9jdXNQYXNzd29yZFwiIGZvbnRTaXplPVwiMThcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBtYXJnaW5Cb3R0b209XCIyNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgcmVmPVwicGFzc3dvcmRcIiBjbGFzcz1cImlucHV0XCIgaGludD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiIHYtbW9kZWw9XCJ1c2VyLnBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCIxOFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJMb2cgSW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIEB0YXA9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJGb3Jnb3QgeW91ciBwYXNzd29yZD9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9naW4tbGFiZWwgcGFzc3dvcmRcIiBAdGFwPVwiZm9yZ290UGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibG9naW4tbGFiZWwgc2lnbi11cC1sYWJlbFwiIGZvbnRTaXplPVwiMTFcIiBcclxuICAgICAgICAgICAgICAgIHRleHQ9XCJEb24ndCBoYXZlIGFuIGFjY291bnQ/IFBsZWFzZSBjb250YWN0IHlvdXIgYWRtaW5pc3RyYXRvclwiIEB0YXA9XCJ0b2dnbGVGb3JtXCIgLz5cclxuICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgUHVuY2ggZnJvbSBcIi4vUHVuY2hcIjtcclxuICBjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcclxuXHJcbiAgLy8gY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gIC8vICAgdGltZW91dDogMTAwMDAsXHJcbiAgLy8gICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgLy8gICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxuICAvLyB9KTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IFtcImN1cnJyZW50VXNlclwiXSxcclxuXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICBpZDogXCJcIixcclxuICAgICAgICAgIGZpcnN0TmFtZTogXCJcIixcclxuICAgICAgICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgICAgICAgaXNBZG1pbjogZmFsc2UsXHJcbiAgICAgICAgICBqd3Q6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCkge1xyXG4gICAgICAgICAgdGhpcy5hbGVydChcIlBsZWFzZSBwcm92aWRlIGJvdGggYW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmQuXCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgbG9naW4oKSB7XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVRFU1RJTkcgQ09ERSBCTE9DSz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAvLyBOT1RFOiB0ZXN0IEpTT04gUmVxdWVzdCB0byBiZSBzZW50IHRvIHNvbWUgQVBJIEVuZHBvaW50XHJcbiAgICAgICAgLy8gdmFyIGpzb25UbXAgPSB7XHJcbiAgICAgICAgLy8gICAgIFwidXNlcm5hbWVcIjogXCJBZG1pbmlzdHJhdG9yXCIsXHJcbiAgICAgICAgLy8gICAgIFwicGFzc3dvcmRcIjogXCIxMjNcIlxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zdCBvYmogPSBpbnN0YW5jZS5wb3N0KCdsb2NhbGhvc3Q6MzAzMC9hdXRoL2xvZ2luL2FwaWtleS5qc29uJywganNvblRtcClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmopXHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGF4aW9zLnBvc3QoJ2h0dHBzOi8vYXBpLmNyYWJyci5jb20vYXV0aC9hcGlrZXknLCB7dXNlcm5hbWU6IFwiQWRtaW5pc3RyYXRvclwiLCBwYXNzd29yZDogXCIxMjNcIn0pXHJcbiAgICAgICAgLy8gICAudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZygnUkVTUE9OU0U6ICcgKyByZXNwb25zZS5yZXN1bHQpKVxyXG4gICAgICAgIC8vICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuXHJcblxyXG4gICAgICAgIC8vIE5PVEU6IHRlc3QgSlNPTiBSZXNwb25zZSB0byBiZSByZWNlaXZlZCBmcm9tIHNvbWUgQVBJIEVuZHBvaW50XHJcbiAgICAgICAgLy8gdmFyIHJlcyA9IHNvbWVBUElDYWxsKClcclxuICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgY29va2llczoge1xyXG4gICAgICAgICAgICBqd3Q6ICdleUpoYkdjaU9pSlNVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlYMmxrSWpvaU56QmpOVEExWldJdE5qWTNNUzAwTjJVMkxXRTRZVGN0T1dRM1pEZG1ZMk5tTW1JMklpd2labWx5YzNSZmJtRnRaU0k2SWtSbFptRjFiSFFnUVdSdGFXNGlMQ0pzWVhOMFgyNWhiV1VpT2lKVmMyVnlJaXdpYVdGMElqb3hOVGczTkRBNU5URXdMQ0psZUhBaU9qRTFPRGMwT1RVNU1UQXNJbUYxWkNJNld5SnNiMk5oYkdodmMzUWlYU3dpYVhOeklqb2lRMDlRTkRNek1VRlFTU0o5LlgyT3RWU2tCQ0lOeVQ4UFRMR1ZRV01SZ2lhUDRUbEs1dG9jaEstNU1oNTlXVlFuN0l1bkxvU2hGVlI4dFBZV2F6ZkJfaWdUNE1vOHZLY1dzSVhCT01LMkRLN3d5WWFJVFFja2lUSzRpMzVkVGxzd1ZfMGh6SVNXVVE3aU0xbEplY0VYOGhEejROT1lJM2NTaU9rR2tMMlloYzZqRmhaTnFZZXlILWl1NWhYSVgwdWdoUGFvbHQ5RFhWakR3T2RQY0FYd0pnTkl4TFpaVnFJOWRjWHFzZFRBdEZlQzlqU3lZMXJyeDVQYkFvYm1xbmxlYVVUUnB5T0hYSDdZaVVkSEY4SENVX3BOWWkzVkQ3UE5CQTBDY05YQThaNldvSkQzT09vLUUzdVN5b0EwRVBQNXNGOEpkRDFiT0oyUW5mYUh4RTNJMTVILUludml4MFdxRXJQcWZMQVVWMm5TWmxDbEd3YVRQTUYzSUl0X0owcWc3NVg2d1p4NjYtYlAxb0NPSk10VGJaeEpsZC1OWGNvYnAwVzNyVWVvSnpaSTUwQlM2TEo5ckxjMUFEMXY0Vl9OSHYtbzJteE9RbFdoS0NVazIxV1Q5VUJpTjA2cXhDdm5qODQ5eHhqYXkwMGtjd1U0UWw2R3B6bTlGXzUtX2tMWWh6dGF5M3pWRzVIZDNoalFxcm5GLUVmdV9Lc0s3b0Z2R3E4WmdvdlJIeUJzZW9GR0hNLV8wRlh3VUx6SUNVNEFpNW1ZTXRfa1ZhVXFaaE9MMWZqbktPTGNuY0YtS012RUstUUxRUjkyMDg5bER2X0hwVVVvRlA2SHBRbkRjZHNETVlRYktzZG9iY19WLWcwaTlBZmM3dFhPbWdteDNROWoxenU0aWFRXzFIQThmcXhtblBFZzZTSUFZbTY4JyxcclxuICAgICAgICAgICAgdXNlcmluZm86IHtcclxuICAgICAgICAgICAgICAgIFwidXNlcl9pZFwiOlwiNzBjNTA1ZWItNjY3MS00N2U2LWE4YTctOWQ3ZDdmY2NmMmI2XCIsXHJcbiAgICAgICAgICAgICAgICBcImZpcnN0X25hbWVcIjpcIkRlZmF1bHQgQWRtaW5cIixcclxuICAgICAgICAgICAgICAgIFwibGFzdF9uYW1lXCI6XCJVc2VyXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaXNBZG1pbiA9IHRydWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogQ2hlY2sgaWYgYWRtaW4gdXNpbmcgQVBJIGNhbGxcclxuICAgICAgICB2YXIgand0ID0gcmVzLmNvb2tpZXNbJ2p3dCddXHJcbiAgICAgICAgdmFyIGF1dGggPSAoand0ICE9IG51bGwpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgdmFyIGlkID0gcmVzLmNvb2tpZXNbJ3VzZXJpbmZvJ10udXNlcl9pZFxyXG4gICAgICAgIHZhciBmaXJzdE5hbWUgPSByZXMuY29va2llc1sndXNlcmluZm8nXS5maXJzdF9uYW1lXHJcbiAgICAgICAgdmFyIGxhc3ROYW1lID0gcmVzLmNvb2tpZXNbJ3VzZXJpbmZvJ10ubGFzdF9uYW1lXHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdqd3QgLSAnICsgand0KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdpZCAtICcgKyBpZClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZmlyc3QgbmFtZSAtICcgKyBmaXJzdE5hbWUpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2xhc3QgbmFtZSAtICcgKyBsYXN0TmFtZSlcclxuXHJcbiAgICAgICAgdGhpcy5pc0FkbWluID0gaXNBZG1pblxyXG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lXHJcbiAgICAgICAgdGhpcy5sYXN0TmFtZSAgPSBsYXN0TmFtZVxyXG4gICAgICAgIHRoaXMuaWQgPSBpZFxyXG4gICAgICAgIHRoaXMuand0ID0gand0XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1FTkQgVEVTVElORyBDT0RFIEJMT0NLPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIGlmIChhdXRoKSB7XHJcbiAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFB1bmNoLCB7XHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgY3VycmVudFVzZXI6IHtcclxuICAgICAgICAgICAgICAgIGp3dDogdGhpcy5qd3QsXHJcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IHRoaXMuZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6IHRoaXMubGFzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgICAgIGlzQWRtaW46IHRoaXMuaXNBZG1pblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgZm9yZ290UGFzc3dvcmQoKSB7XHJcbiAgICAgICAgcHJvbXB0KHtcclxuICAgICAgICAgIHRpdGxlOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxyXG4gICAgICAgICAgbWVzc2FnZTpcclxuICAgICAgICAgICAgXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgQi1Pbi1UaW1lIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXCIsXHJcbiAgICAgICAgICBpbnB1dFR5cGU6IFwiZW1haWxcIixcclxuICAgICAgICAgIGRlZmF1bHRUZXh0OiBcIlwiLFxyXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXHJcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xyXG4gICAgICAgICAgICB1c2VyU2VydmljZVxyXG4gICAgICAgICAgICAgIC5yZXNldFBhc3N3b3JkKGRhdGEudGV4dC50cmltKCkpXHJcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydChcclxuICAgICAgICAgICAgICAgICAgXCJZb3VyIHBhc3N3b3JkIHdhcyBzdWNjZXNzZnVsbHkgcmVzZXQuIFBsZWFzZSBjaGVjayB5b3VyIGVtYWlsIGZvciBpbnN0cnVjdGlvbnMgb24gY2hvb3NpbmcgYSBuZXcgcGFzc3dvcmQuXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydChcclxuICAgICAgICAgICAgICAgICAgXCJVbmZvcnR1bmF0ZWx5LCBhbiBlcnJvciBvY2N1cnJlZCByZXNldHRpbmcgeW91ciBwYXNzd29yZC5cIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGZvY3VzUGFzc3dvcmQoKSB7XHJcbiAgICAgICAgdGhpcy4kcmVmcy5wYXNzd29yZC5uYXRpdmVWaWV3LmZvY3VzKCk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBhbGVydChtZXNzYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KHtcclxuICAgICAgICAgIHRpdGxlOiBcIkItT24tVGltZVwiLFxyXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXHJcbiAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAucGFnZSB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMDtcclxuICAgICAgICBmbGV4LWdyb3c6IDI7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDI1O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNzA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmlucHV0LWZpZWxkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNTtcclxuICAgIH1cclxuICAgIC5pbnB1dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxODtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmlucHV0LWZpZWxkIC5pbnB1dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1NDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLXByaW1hcnkge1xyXG4gICAgICAgIGhlaWdodDogNTA7XHJcbiAgICAgICAgbWFyZ2luOiAzMCA1IDE1IDU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICAgIDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICAubG9naW4tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTY7XHJcbiAgICB9XHJcbiAgICAuc2lnbi11cC1sYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjA7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2Uge1xyXG4gICAgXHRiYWNrZ3JvdW5kOiByZ2IoMiwwLDM2KTtcclxuXHQgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDIyLDE0LDc1LDEpIDAlLCByZ2JhKDAsMjA0LDI1NSwxKSAxMDAlKTsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLnBhc3N3b3JkIHtcclxuICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==