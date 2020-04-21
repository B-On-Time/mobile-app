webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Punch.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Kiosk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Kiosk.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var dialogs = __webpack_require__("tns-core-modules/ui/dialogs");

const axios = __webpack_require__("../node_modules/axios/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['currentUser'],
  methods: {
    onLoaded() {
      console.log(this.currentUser);
    },

    getDate() {
      var d = new Date();
      var ymd = d.toISOString().split('T')[0];
      this.eventDate = ymd;
      var h = d.getHours();
      var hours = (h + 24) % 24;
      var mid = 'am';

      if (hours == 0) {
        hours = 12;
      } else if (hours > 12) {
        hours = hours % 12;
        mid = 'pm';
      }

      if (hours < 10) {
        hours = '0' + hours;
      }

      var m = d.getMinutes();

      if (m < 10) {
        m = '0' + m;
      }

      var hmid = hours + ':' + m + " " + mid;
      this.entryTime = hmid;
      return hmid + ' ' + ymd;
    },

    onPunchIn() {
      console.log('clocking in....');
      this.punchToggle = !this.punchToggle;
      var instance = axios.create({
        timeout: 10000,
        headers: {
          "Content-Type": "application/json",
          'X-ApiToken': this.currentUser.apikey
        },
        withCredentials: true
      });
      var message = this.getDate().toString();
      var reqObj = {
        eventDate: this.eventDate.toString(),
        entryTime: this.entryTime.toString(),
        punchType: "WORK",
        notes: ""
      };
      console.log(reqObj);
      instance.post('https://api.crabrr.com/clock/in', reqObj).then(response => {
        console.log(response);
        dialogs.alert({
          title: "Punched in:",
          message: message,
          okButtonText: "OK"
        }).then(function () {
          console.log("Dialog closed!");
        });
      }).catch(error => {
        console.log(error);
      });
    },

    onPunchOut() {
      console.log('clocking out....');
      this.punchToggle = !this.punchToggle;
      var instance = axios.create({
        timeout: 10000,
        headers: {
          "Content-Type": "application/json",
          'X-ApiToken': this.currentUser.apikey
        },
        withCredentials: true
      });
      var message = this.getDate().toString();
      var reqObj = {
        eventDate: this.eventDate.toString(),
        entryTime: this.entryTime.toString(),
        punchType: "WORK",
        notes: ""
      };
      instance.post('https://api.crabrr.com/clock/out', reqObj).then(response => {
        console.log(response);
        dialogs.alert({
          title: "Punched Out:",
          message: message,
          okButtonText: "OK"
        }).then(function () {
          console.log("Dialog closed!");
        });
      }).catch(error => {
        console.log(error);
      });
    },

    onKioskMode() {
      console.log("Entering Kiosk mode...");
      this.$navigateTo(_Kiosk__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }

  },

  data() {
    return {
      punchToggle: true,
      eventDate: ""
    };
  }

});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9QdW5jaC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOztBQUNBOztBQUNBOztBQUVBO0FBQ0Esd0JBREE7QUFHQTtBQUVBO0FBQ0E7QUFDQSxLQUpBOztBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBLHNCQUNBO0FBQ0E7QUFDQSxPQUhBLE1BSUEsZ0JBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0Esc0JBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBLGtCQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFDQSxLQXJDQTs7QUF1Q0E7QUFFQTtBQUVBO0FBRUE7QUFDQSxzQkFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBLFNBRkE7QUFHQTtBQUhBO0FBTUE7QUFFQTtBQUNBLDRDQURBO0FBRUEsNENBRkE7QUFHQSx5QkFIQTtBQUlBO0FBSkE7QUFPQTtBQUVBLCtEQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQSw4QkFEQTtBQUVBLDBCQUZBO0FBR0E7QUFIQSxXQUlBLElBSkEsQ0FJQTtBQUNBO0FBQ0EsU0FOQTtBQU9BLE9BVkEsRUFXQSxLQVhBLENBV0E7QUFDQTtBQUNBLE9BYkE7QUFjQSxLQTVFQTs7QUE4RUE7QUFFQTtBQUVBO0FBRUE7QUFDQSxzQkFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBLFNBRkE7QUFHQTtBQUhBO0FBTUE7QUFFQTtBQUNBLDRDQURBO0FBRUEsNENBRkE7QUFHQSx5QkFIQTtBQUlBO0FBSkE7QUFPQSxnRUFDQSxJQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSwwQkFGQTtBQUdBO0FBSEEsV0FJQSxJQUpBLENBSUE7QUFDQTtBQUNBLFNBTkE7QUFPQSxPQVZBLEVBV0EsS0FYQSxDQVdBO0FBQ0E7QUFDQSxPQWJBO0FBY0EsS0FqSEE7O0FBbUhBO0FBQ0E7QUFDQTtBQUNBOztBQXRIQSxHQUhBOztBQTRIQTtBQUNBO0FBQ0EsdUJBREE7QUFFQTtBQUZBO0FBSUE7O0FBaklBLEciLCJmaWxlIjoiYnVuZGxlLjNmNjRjZjk1N2U5M2U5ZTU4MDdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZSBAbG9hZGVkPVwib25Mb2FkZWRcIiBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCIgPlxyXG4gICAgICAgIDxTY3JvbGxWaWV3PlxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJkYXNoLXBhbmVsXCI+XHJcblx0XHQgICAgPExhYmVsIDp0ZXh0PVwiJ1dlbGNvbWUsICcgKyBjdXJyZW50VXNlci5maXJzdE5hbWVcIiBjbGFzcz1cIndlbGNvbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiUHVuY2ggSW5cIiBAdGFwPVwib25QdW5jaEluXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIi1wcmltYXJ5IC1yb3VuZGVkLWxnXCIgOmlzRW5hYmxlZD1cInB1bmNoVG9nZ2xlXCIvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiUHVuY2ggT3V0XCIgQHRhcD1cIm9uUHVuY2hPdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiLXByaW1hcnkgLXJvdW5kZWQtbGdcIiA6aXNFbmFibGVkPVwiIXB1bmNoVG9nZ2xlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIktpb3NrIE1vZGVcIiB2LWlmPVwiY3VycmVudFVzZXIuaXNBZG1pblwiIEB0YXA9XCJvbktpb3NrTW9kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCItcHJpbWFyeSAtcm91bmRlZC1sZ1wiIC8+XHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBLaW9zayBmcm9tICcuL0tpb3NrJ1xyXG4gICAgdmFyIGRpYWxvZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xyXG4gICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIHByb3BzOiBbJ2N1cnJlbnRVc2VyJ10sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cclxuICAgICAgICAgICAgb25Mb2FkZWQoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRVc2VyKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGdldERhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHltZCA9IGQudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50RGF0ZSA9IHltZFxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBoID0gZC5nZXRIb3VycygpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGhvdXJzID0gKGgrMjQpJTI0OyBcclxuICAgICAgICAgICAgICAgIHZhciBtaWQ9J2FtJztcclxuICAgICAgICAgICAgICAgIGlmKGhvdXJzPT0wKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdXJzPTEyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihob3Vycz4xMilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBob3Vycz1ob3VycyUxMjtcclxuICAgICAgICAgICAgICAgICAgICBtaWQ9J3BtJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGhvdXJzPDEwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdXJzPScwJytob3Vyc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG0gPSBkLmdldE1pbnV0ZXMoKVxyXG4gICAgICAgICAgICAgICAgaWYobSA8IDEwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG0gPSAnMCcrbVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGhtaWQgPSBob3VycyArICc6JyArIG0gKyBcIiBcIiArIG1pZFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbnRyeVRpbWUgPSBobWlkXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhtaWQgKyAnICcgKyB5bWQ7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBvblB1bmNoSW4oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nsb2NraW5nIGluLi4uLicpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wdW5jaFRvZ2dsZSA9ICF0aGlzLnB1bmNoVG9nZ2xlXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAxMDAwMCxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLCAnWC1BcGlUb2tlbic6IHRoaXMuY3VycmVudFVzZXIuYXBpa2V5IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IHRoaXMuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcU9iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudERhdGU6IHRoaXMuZXZlbnREYXRlLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnlUaW1lOiB0aGlzLmVudHJ5VGltZS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHB1bmNoVHlwZTogXCJXT1JLXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6XCJcIlxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXFPYmopXHJcblxyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UucG9zdCgnaHR0cHM6Ly9hcGkuY3JhYnJyLmNvbS9jbG9jay9pbicsIHJlcU9iailcclxuICAgICAgICAgICAgICAgICAgICAudGhlbiggKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlB1bmNoZWQgaW46XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBvblB1bmNoT3V0KCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xvY2tpbmcgb3V0Li4uLicpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wdW5jaFRvZ2dsZSA9ICF0aGlzLnB1bmNoVG9nZ2xlXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAxMDAwMCxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLCAnWC1BcGlUb2tlbic6IHRoaXMuY3VycmVudFVzZXIuYXBpa2V5fSxcclxuICAgICAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gdGhpcy5nZXREYXRlKCkudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxT2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50RGF0ZTogdGhpcy5ldmVudERhdGUudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICBlbnRyeVRpbWU6IHRoaXMuZW50cnlUaW1lLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgcHVuY2hUeXBlOiBcIldPUktcIixcclxuICAgICAgICAgICAgICAgICAgICBub3RlczpcIlwiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLnBvc3QoJ2h0dHBzOi8vYXBpLmNyYWJyci5jb20vY2xvY2svb3V0JywgcmVxT2JqKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUHVuY2hlZCBPdXQ6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBvbktpb3NrTW9kZSgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW50ZXJpbmcgS2lvc2sgbW9kZS4uLlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oS2lvc2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcHVuY2hUb2dnbGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBldmVudERhdGU6IFwiXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAuZGFzaC1wYW5lbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgICAgICBtYXJnaW46IDM1O1xyXG5cdCAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC53ZWxjb21lIHtcclxuICAgICAgICBmb250LXNpemU6IDI1O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuc2NoZWR1bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0NTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0NTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFBhZ2Uge1xyXG4gICAgXHRiYWNrZ3JvdW5kOiByZ2IoMiwwLDM2KTtcclxuXHQgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDIyLDE0LDc1LDEpIDAlLCByZ2JhKDAsMjA0LDI1NSwxKSAxMDAlKTtcclxuICAgIH0gKi9cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9