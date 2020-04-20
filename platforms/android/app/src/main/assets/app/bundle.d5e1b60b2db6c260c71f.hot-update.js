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
      var auth = true;
      this.firstName = firstName; // ========================================END TESTING CODE BLOCK=========================================================

      if (auth) {
        this.$navigateTo(_Punch__WEBPACK_IMPORTED_MODULE_0__["default"], {
          props: {
            currentUser: {
              name: this.firstName
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpblBhZ2UudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnREE7O0FBQ0E7O0FBRUE7QUFDQSxnQkFEQTtBQUVBO0FBQUE7QUFBQSxHQUZBO0FBR0E7QUFIQTtBQU1BO0FBQ0EseUJBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSxvQkFGQTtBQUdBLGNBSEE7QUFJQSxxQkFKQTtBQUtBLG9CQUxBO0FBTUE7QUFOQTtBQURBO0FBVUEsR0FkQTs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBLEtBUkE7O0FBVUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsczhCQURBO0FBRUE7QUFDQSw2REFEQTtBQUVBLHlDQUZBO0FBR0E7QUFIQTtBQUZBO0FBREE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxpQ0FuQ0EsQ0FxQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFEQTtBQU9BLE9BUkEsTUFRQTtBQUNBO0FBQ0E7QUFDQSxLQTVEQTs7QUE4REE7QUFDQTtBQUNBLGdDQURBO0FBRUEsaUJBQ0Esb0ZBSEE7QUFJQSwwQkFKQTtBQUtBLHVCQUxBO0FBTUEsMEJBTkE7QUFPQTtBQVBBLFNBUUEsSUFSQSxDQVFBO0FBQ0E7QUFDQSxzQkFDQSxhQURBLENBQ0EsZ0JBREEsRUFFQSxJQUZBLENBRUE7QUFDQSx1QkFDQSw0R0FEQTtBQUdBLFdBTkEsRUFPQSxLQVBBLENBT0E7QUFDQSx1QkFDQSwyREFEQTtBQUdBLFdBWEE7QUFZQTtBQUNBLE9BdkJBO0FBd0JBLEtBdkZBOztBQXlGQTtBQUNBO0FBQ0EsS0EzRkE7O0FBNkZBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLDBCQUZBO0FBR0E7QUFIQTtBQUtBOztBQW5HQTtBQWZBLEciLCJmaWxlIjoiYnVuZGxlLmQ1ZTFiNjBiMmRiNmMyNjBjNzFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPFBhZ2U+XHJcbiAgICA8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIj5cclxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZm9ybVwiPlxyXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cImhlYWRlclwiIHRleHQ9XCJXZWxjb21lIHRvIEItT24tVGltZVwiIC8+XHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgbWFyZ2luQm90dG9tPVwiMjVcIj5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIGhpbnQ9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCJcclxuICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuZW1haWxcIlxyXG4gICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwibmV4dFwiXHJcbiAgICAgICAgICAgIEByZXR1cm5QcmVzcz1cImZvY3VzUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBtYXJnaW5Cb3R0b209XCIyNVwiPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICByZWY9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICBoaW50PVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBzZWN1cmU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIucGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiTG9nIEluXCIgQHRhcD1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMFwiIC8+XHJcbiAgICAgICAgPExhYmVsIHRleHQ9XCJGb3Jnb3QgeW91ciBwYXNzd29yZD9cIiBjbGFzcz1cImxvZ2luLWxhYmVsXCIgQHRhcD1cImZvcmdvdFBhc3N3b3JkXCIgLz5cclxuICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgIDxMYWJlbFxyXG4gICAgICAgIGNsYXNzPVwibG9naW4tbGFiZWwgc2lnbi11cC1sYWJlbFwiXHJcbiAgICAgICAgZm9udFNpemU9XCIxMVwiXHJcbiAgICAgICAgdGV4dD1cIkRvbid0IGhhdmUgYW4gYWNjb3VudD8gUGxlYXNlIGNvbnRhY3QgeW91ciBhZG1pbmlzdHJhdG9yXCJcclxuICAgICAgICBAdGFwPVwidG9nZ2xlRm9ybVwiXHJcbiAgICAgIC8+XHJcbiAgICA8L0ZsZXhib3hMYXlvdXQ+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgUHVuY2ggZnJvbSBcIi4vUHVuY2hcIjtcclxuICBjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcclxuXHJcbiAgY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgdGltZW91dDogMTAwMDAsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxuICB9KTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IFtcImN1cnJyZW50VXNlclwiXSxcclxuXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICBpZDogXCJcIixcclxuICAgICAgICAgIGZpcnN0TmFtZTogXCJcIixcclxuICAgICAgICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgICAgICAgaXNBZG1pbjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCkge1xyXG4gICAgICAgICAgdGhpcy5hbGVydChcIlBsZWFzZSBwcm92aWRlIGJvdGggYW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmQuXCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgbG9naW4oKSB7XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVRFU1RJTkcgQ09ERSBCTE9DSz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAvLyBOT1RFOiB0ZXN0IEpTT04gUmVxdWVzdCB0byBiZSBzZW50IHRvIHNvbWUgQVBJIEVuZHBvaW50XHJcbiAgICAgICAgLy8gdmFyIGpzb25UbXAgPSB7XHJcbiAgICAgICAgLy8gICAgIFwidXNlcm5hbWVcIjogXCJBZG1pbmlzdHJhdG9yXCIsXHJcbiAgICAgICAgLy8gICAgIFwicGFzc3dvcmRcIjogXCIxMjNcIlxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zdCBvYmogPSBpbnN0YW5jZS5wb3N0KCdsb2NhbGhvc3Q6MzAzMC9hdXRoL2xvZ2luL2FwaWtleS5qc29uJywganNvblRtcClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmopXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTk9URTogdGVzdCBKU09OIFJlc3BvbnNlIHRvIGJlIHJlY2VpdmVkIGZyb20gc29tZSBBUEkgRW5kcG9pbnRcclxuICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgY29va2llczoge1xyXG4gICAgICAgICAgICBqd3Q6ICdleUpoYkdjaU9pSlNVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlYMmxrSWpvaU56QmpOVEExWldJdE5qWTNNUzAwTjJVMkxXRTRZVGN0T1dRM1pEZG1ZMk5tTW1JMklpd2labWx5YzNSZmJtRnRaU0k2SWtSbFptRjFiSFFnUVdSdGFXNGlMQ0pzWVhOMFgyNWhiV1VpT2lKVmMyVnlJaXdpYVdGMElqb3hOVGczTkRBNU5URXdMQ0psZUhBaU9qRTFPRGMwT1RVNU1UQXNJbUYxWkNJNld5SnNiMk5oYkdodmMzUWlYU3dpYVhOeklqb2lRMDlRTkRNek1VRlFTU0o5LlgyT3RWU2tCQ0lOeVQ4UFRMR1ZRV01SZ2lhUDRUbEs1dG9jaEstNU1oNTlXVlFuN0l1bkxvU2hGVlI4dFBZV2F6ZkJfaWdUNE1vOHZLY1dzSVhCT01LMkRLN3d5WWFJVFFja2lUSzRpMzVkVGxzd1ZfMGh6SVNXVVE3aU0xbEplY0VYOGhEejROT1lJM2NTaU9rR2tMMlloYzZqRmhaTnFZZXlILWl1NWhYSVgwdWdoUGFvbHQ5RFhWakR3T2RQY0FYd0pnTkl4TFpaVnFJOWRjWHFzZFRBdEZlQzlqU3lZMXJyeDVQYkFvYm1xbmxlYVVUUnB5T0hYSDdZaVVkSEY4SENVX3BOWWkzVkQ3UE5CQTBDY05YQThaNldvSkQzT09vLUUzdVN5b0EwRVBQNXNGOEpkRDFiT0oyUW5mYUh4RTNJMTVILUludml4MFdxRXJQcWZMQVVWMm5TWmxDbEd3YVRQTUYzSUl0X0owcWc3NVg2d1p4NjYtYlAxb0NPSk10VGJaeEpsZC1OWGNvYnAwVzNyVWVvSnpaSTUwQlM2TEo5ckxjMUFEMXY0Vl9OSHYtbzJteE9RbFdoS0NVazIxV1Q5VUJpTjA2cXhDdm5qODQ5eHhqYXkwMGtjd1U0UWw2R3B6bTlGXzUtX2tMWWh6dGF5M3pWRzVIZDNoalFxcm5GLUVmdV9Lc0s3b0Z2R3E4WmdvdlJIeUJzZW9GR0hNLV8wRlh3VUx6SUNVNEFpNW1ZTXRfa1ZhVXFaaE9MMWZqbktPTGNuY0YtS012RUstUUxRUjkyMDg5bER2X0hwVVVvRlA2SHBRbkRjZHNETVlRYktzZG9iY19WLWcwaTlBZmM3dFhPbWdteDNROWoxenU0aWFRXzFIQThmcXhtblBFZzZTSUFZbTY4JyxcclxuICAgICAgICAgICAgdXNlcmluZm86IHtcclxuICAgICAgICAgICAgICAgIFwidXNlcl9pZFwiOlwiNzBjNTA1ZWItNjY3MS00N2U2LWE4YTctOWQ3ZDdmY2NmMmI2XCIsXHJcbiAgICAgICAgICAgICAgICBcImZpcnN0X25hbWVcIjpcIkRlZmF1bHQgQWRtaW5cIixcclxuICAgICAgICAgICAgICAgIFwibGFzdF9uYW1lXCI6XCJVc2VyXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgand0ID0gcmVzLmNvb2tpZXNbJ2p3dCddXHJcbiAgICAgICAgdmFyIGlkID0gcmVzLmNvb2tpZXNbJ3VzZXJpbmZvJ10udXNlcl9pZFxyXG4gICAgICAgIHZhciBmaXJzdE5hbWUgPSByZXMuY29va2llc1sndXNlcmluZm8nXS5maXJzdF9uYW1lXHJcbiAgICAgICAgdmFyIGxhc3ROYW1lID0gcmVzLmNvb2tpZXNbJ3VzZXJpbmZvJ10ubGFzdF9uYW1lXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdqd3QgLSAnICsgand0KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpZCAtICcgKyBpZClcclxuICAgICAgICBjb25zb2xlLmxvZygnZmlyc3QgbmFtZSAtICcgKyBmaXJzdE5hbWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xhc3QgbmFtZSAtICcgKyBsYXN0TmFtZSlcclxuXHJcbiAgICAgICAgdmFyIGF1dGggPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lXHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1FTkQgVEVTVElORyBDT0RFIEJMT0NLPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIGlmIChhdXRoKSB7XHJcbiAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFB1bmNoLCB7XHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgY3VycmVudFVzZXI6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZmlyc3ROYW1lXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5hbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBmb3Jnb3RQYXNzd29yZCgpIHtcclxuICAgICAgICBwcm9tcHQoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiRm9yZ290IFBhc3N3b3JkXCIsXHJcbiAgICAgICAgICBtZXNzYWdlOlxyXG4gICAgICAgICAgICBcIkVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSB1c2VkIHRvIHJlZ2lzdGVyIGZvciBCLU9uLVRpbWUgdG8gcmVzZXQgeW91ciBwYXNzd29yZC5cIixcclxuICAgICAgICAgIGlucHV0VHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXHJcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcclxuICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcclxuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHVzZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgLnJlc2V0UGFzc3dvcmQoZGF0YS50ZXh0LnRyaW0oKSlcclxuICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICBcIllvdXIgcGFzc3dvcmQgd2FzIHN1Y2Nlc3NmdWxseSByZXNldC4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGluc3RydWN0aW9ucyBvbiBjaG9vc2luZyBhIG5ldyBwYXNzd29yZC5cIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHksIGFuIGVycm9yIG9jY3VycmVkIHJlc2V0dGluZyB5b3VyIHBhc3N3b3JkLlwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgZm9jdXNQYXNzd29yZCgpIHtcclxuICAgICAgICB0aGlzLiRyZWZzLnBhc3N3b3JkLm5hdGl2ZVZpZXcuZm9jdXMoKTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGFsZXJ0KG1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiQi1Pbi1UaW1lXCIsXHJcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnBhZ2Uge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uZm9ybSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwO1xyXG4gIG1hcmdpbi1yaWdodDogMzA7XHJcbiAgZmxleC1ncm93OiAyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAyNTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDcwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW5wdXQtZmllbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDI1O1xyXG59XHJcbi5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxODtcclxufVxyXG4uaW5wdXQtZmllbGQgLmlucHV0IHtcclxuICBmb250LXNpemU6IDU0O1xyXG59XHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgaGVpZ2h0OiA1MDtcclxuICBtYXJnaW46IDMwIDUgMTUgNTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgYm9yZGVyLXJhZGl1czogNTtcclxuICBmb250LXNpemU6IDIwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmxvZ2luLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE2O1xyXG59XHJcbi5zaWduLXVwLWxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMDtcclxufVxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=