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

      var hmid = hours + ':' + d.getMinutes() + " " + mid;
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
        eventDate: this.eventDate,
        entryTime: this.entryTime,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9QdW5jaC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOztBQUNBOztBQUNBOztBQUVBO0FBQ0Esd0JBREE7QUFHQTtBQUVBO0FBQ0E7QUFDQSxLQUpBOztBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBLHNCQUNBO0FBQ0E7QUFDQSxPQUhBLE1BSUEsZ0JBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0Esc0JBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUNBLEtBaENBOztBQWtDQTtBQUVBO0FBRUE7QUFFQTtBQUNBLHNCQURBO0FBRUE7QUFBQTtBQUFBO0FBQUEsU0FGQTtBQUdBO0FBSEE7QUFNQTtBQUVBO0FBQ0EsNENBREE7QUFFQSw0Q0FGQTtBQUdBLHlCQUhBO0FBSUE7QUFKQTtBQU9BO0FBRUEsK0RBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQURBO0FBRUEsMEJBRkE7QUFHQTtBQUhBLFdBSUEsSUFKQSxDQUlBO0FBQ0E7QUFDQSxTQU5BO0FBT0EsT0FWQSxFQVdBLEtBWEEsQ0FXQTtBQUNBO0FBQ0EsT0FiQTtBQWNBLEtBdkVBOztBQXlFQTtBQUVBO0FBRUE7QUFFQTtBQUNBLHNCQURBO0FBRUE7QUFBQTtBQUFBO0FBQUEsU0FGQTtBQUdBO0FBSEE7QUFNQTtBQUVBO0FBQ0EsaUNBREE7QUFFQSxpQ0FGQTtBQUdBLHlCQUhBO0FBSUE7QUFKQTtBQU9BLGdFQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLDBCQUZBO0FBR0E7QUFIQSxXQUlBLElBSkEsQ0FJQTtBQUNBO0FBQ0EsU0FOQTtBQU9BLE9BVkEsRUFXQSxLQVhBLENBV0E7QUFDQTtBQUNBLE9BYkE7QUFjQSxLQTVHQTs7QUE4R0E7QUFDQTtBQUNBO0FBQ0E7O0FBakhBLEdBSEE7O0FBdUhBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBO0FBRkE7QUFJQTs7QUE1SEEsRyIsImZpbGUiOiJidW5kbGUuZmQ2MDdmMjg5YmI1NDZhZjAzMTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlIEBsb2FkZWQ9XCJvbkxvYWRlZFwiIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIiA+XHJcbiAgICAgICAgPFNjcm9sbFZpZXc+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImRhc2gtcGFuZWxcIj5cclxuXHRcdCAgICA8TGFiZWwgOnRleHQ9XCInV2VsY29tZSwgJyArIGN1cnJlbnRVc2VyLmZpcnN0TmFtZVwiIGNsYXNzPVwid2VsY29tZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJQdW5jaCBJblwiIEB0YXA9XCJvblB1bmNoSW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiLXByaW1hcnkgLXJvdW5kZWQtbGdcIiA6aXNFbmFibGVkPVwicHVuY2hUb2dnbGVcIi8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJQdW5jaCBPdXRcIiBAdGFwPVwib25QdW5jaE91dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCItcHJpbWFyeSAtcm91bmRlZC1sZ1wiIDppc0VuYWJsZWQ9XCIhcHVuY2hUb2dnbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiS2lvc2sgTW9kZVwiIHYtaWY9XCJjdXJyZW50VXNlci5pc0FkbWluXCIgQHRhcD1cIm9uS2lvc2tNb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIi1wcmltYXJ5IC1yb3VuZGVkLWxnXCIgLz5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICA8L1Njcm9sbFZpZXc+XHJcbiAgICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IEtpb3NrIGZyb20gJy4vS2lvc2snXHJcbiAgICB2YXIgZGlhbG9ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XHJcbiAgICBjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgcHJvcHM6IFsnY3VycmVudFVzZXInXSxcclxuICAgICAgICBcclxuICAgICAgICBtZXRob2RzOiB7XHJcblxyXG4gICAgICAgICAgICBvbkxvYWRlZCgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFVzZXIpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgZ2V0RGF0ZSgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgeW1kID0gZC50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnREYXRlID0geW1kXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGggPSBkLmdldEhvdXJzKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaG91cnMgPSAoaCsyNCklMjQ7IFxyXG4gICAgICAgICAgICAgICAgdmFyIG1pZD0nYW0nO1xyXG4gICAgICAgICAgICAgICAgaWYoaG91cnM9PTApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaG91cnM9MTI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGhvdXJzPjEyKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdXJzPWhvdXJzJTEyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pZD0ncG0nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoaG91cnM8MTApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaG91cnM9JzAnK2hvdXJzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgaG1pZCA9IGhvdXJzICsgJzonICsgZC5nZXRNaW51dGVzKCkgKyBcIiBcIiArIG1pZFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbnRyeVRpbWUgPSBobWlkXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhtaWQgKyAnICcgKyB5bWQ7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBvblB1bmNoSW4oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nsb2NraW5nIGluLi4uLicpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wdW5jaFRvZ2dsZSA9ICF0aGlzLnB1bmNoVG9nZ2xlXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAxMDAwMCxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLCAnWC1BcGlUb2tlbic6IHRoaXMuY3VycmVudFVzZXIuYXBpa2V5IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IHRoaXMuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcU9iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudERhdGU6IHRoaXMuZXZlbnREYXRlLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnlUaW1lOiB0aGlzLmVudHJ5VGltZS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHB1bmNoVHlwZTogXCJXT1JLXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6XCJcIlxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXFPYmopXHJcblxyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UucG9zdCgnaHR0cHM6Ly9hcGkuY3JhYnJyLmNvbS9jbG9jay9pbicsIHJlcU9iailcclxuICAgICAgICAgICAgICAgICAgICAudGhlbiggKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlB1bmNoZWQgaW46XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBvblB1bmNoT3V0KCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xvY2tpbmcgb3V0Li4uLicpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wdW5jaFRvZ2dsZSA9ICF0aGlzLnB1bmNoVG9nZ2xlXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAxMDAwMCxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLCAnWC1BcGlUb2tlbic6IHRoaXMuY3VycmVudFVzZXIuYXBpa2V5fSxcclxuICAgICAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gdGhpcy5nZXREYXRlKCkudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxT2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50RGF0ZTogdGhpcy5ldmVudERhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnlUaW1lOiB0aGlzLmVudHJ5VGltZSxcclxuICAgICAgICAgICAgICAgICAgICBwdW5jaFR5cGU6IFwiV09SS1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOlwiXCJcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UucG9zdCgnaHR0cHM6Ly9hcGkuY3JhYnJyLmNvbS9jbG9jay9vdXQnLCByZXFPYmopXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJQdW5jaGVkIE91dDpcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIG9uS2lvc2tNb2RlKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbnRlcmluZyBLaW9zayBtb2RlLi4uXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhLaW9zayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwdW5jaFRvZ2dsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGV2ZW50RGF0ZTogXCJcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5kYXNoLXBhbmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgICAgIG1hcmdpbjogMzU7XHJcblx0ICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLndlbGNvbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zY2hlZHVsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQ1O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQ1O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyogUGFnZSB7XHJcbiAgICBcdGJhY2tncm91bmQ6IHJnYigyLDAsMzYpO1xyXG5cdCAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyLDAsMzYsMSkgMCUsIHJnYmEoMjIsMTQsNzUsMSkgMCUsIHJnYmEoMCwyMDQsMjU1LDEpIDEwMCUpO1xyXG4gICAgfSAqL1xyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=