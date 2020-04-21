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
      console.log(hmid + ' ' + ymd);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9QdW5jaC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOztBQUNBOztBQUNBOztBQUVBO0FBQ0Esd0JBREE7QUFHQTtBQUVBO0FBQ0E7QUFDQSxLQUpBOztBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBLHNCQUNBO0FBQ0E7QUFDQSxPQUhBLE1BSUEsZ0JBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0Esc0JBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0EsS0FsQ0E7O0FBb0NBO0FBRUE7QUFFQTtBQUVBO0FBQ0Esc0JBREE7QUFFQTtBQUFBO0FBQUE7QUFBQSxTQUZBO0FBR0E7QUFIQTtBQU1BO0FBRUE7QUFDQSw0Q0FEQTtBQUVBLDRDQUZBO0FBR0EseUJBSEE7QUFJQTtBQUpBO0FBT0EsK0RBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQURBO0FBRUEsMEJBRkE7QUFHQTtBQUhBLFdBSUEsSUFKQSxDQUlBO0FBQ0E7QUFDQSxTQU5BO0FBT0EsT0FWQSxFQVdBLEtBWEEsQ0FXQTtBQUNBO0FBQ0EsT0FiQTtBQWNBLEtBdkVBOztBQXlFQTtBQUVBO0FBRUE7QUFFQTtBQUNBLHNCQURBO0FBRUE7QUFBQTtBQUFBO0FBQUEsU0FGQTtBQUdBO0FBSEE7QUFNQTtBQUVBO0FBQ0EsaUNBREE7QUFFQSxpQ0FGQTtBQUdBLHlCQUhBO0FBSUE7QUFKQTtBQU9BLGdFQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLDBCQUZBO0FBR0E7QUFIQSxXQUlBLElBSkEsQ0FJQTtBQUNBO0FBQ0EsU0FOQTtBQU9BLE9BVkEsRUFXQSxLQVhBLENBV0E7QUFDQTtBQUNBLE9BYkE7QUFjQSxLQTVHQTs7QUE4R0E7QUFDQTtBQUNBO0FBQ0E7O0FBakhBLEdBSEE7O0FBdUhBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBO0FBRkE7QUFJQTs7QUE1SEEsRyIsImZpbGUiOiJidW5kbGUuMzdhMGQzY2YwZGI5YmMyNWM5ZTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlIEBsb2FkZWQ9XCJvbkxvYWRlZFwiIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIiA+XHJcbiAgICAgICAgPFNjcm9sbFZpZXc+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImRhc2gtcGFuZWxcIj5cclxuXHRcdCAgICA8TGFiZWwgOnRleHQ9XCInV2VsY29tZSwgJyArIGN1cnJlbnRVc2VyLmZpcnN0TmFtZVwiIGNsYXNzPVwid2VsY29tZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJQdW5jaCBJblwiIEB0YXA9XCJvblB1bmNoSW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiLXByaW1hcnkgLXJvdW5kZWQtbGdcIiA6aXNFbmFibGVkPVwicHVuY2hUb2dnbGVcIi8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJQdW5jaCBPdXRcIiBAdGFwPVwib25QdW5jaE91dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCItcHJpbWFyeSAtcm91bmRlZC1sZ1wiIDppc0VuYWJsZWQ9XCIhcHVuY2hUb2dnbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiS2lvc2sgTW9kZVwiIHYtaWY9XCJjdXJyZW50VXNlci5pc0FkbWluXCIgQHRhcD1cIm9uS2lvc2tNb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIi1wcmltYXJ5IC1yb3VuZGVkLWxnXCIgLz5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICA8L1Njcm9sbFZpZXc+XHJcbiAgICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IEtpb3NrIGZyb20gJy4vS2lvc2snXHJcbiAgICB2YXIgZGlhbG9ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XHJcbiAgICBjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgcHJvcHM6IFsnY3VycmVudFVzZXInXSxcclxuICAgICAgICBcclxuICAgICAgICBtZXRob2RzOiB7XHJcblxyXG4gICAgICAgICAgICBvbkxvYWRlZCgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFVzZXIpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgZ2V0RGF0ZSgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgeW1kID0gZC50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnREYXRlID0geW1kXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGggPSBkLmdldEhvdXJzKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaG91cnMgPSAoaCsyNCklMjQ7IFxyXG4gICAgICAgICAgICAgICAgdmFyIG1pZD0nYW0nO1xyXG4gICAgICAgICAgICAgICAgaWYoaG91cnM9PTApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaG91cnM9MTI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGhvdXJzPjEyKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdXJzPWhvdXJzJTEyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pZD0ncG0nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoaG91cnM8MTApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaG91cnM9JzAnK2hvdXJzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgaG1pZCA9IGhvdXJzICsgJzonICsgZC5nZXRNaW51dGVzKCkgKyBcIiBcIiArIG1pZFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbnRyeVRpbWUgPSBobWlkXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaG1pZCArICcgJyArIHltZClcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaG1pZCArICcgJyArIHltZDtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIG9uUHVuY2hJbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xvY2tpbmcgaW4uLi4uJylcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1bmNoVG9nZ2xlID0gIXRoaXMucHVuY2hUb2dnbGVcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsICdYLUFwaVRva2VuJzogdGhpcy5jdXJyZW50VXNlci5hcGlrZXkgfSxcclxuICAgICAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gdGhpcy5nZXREYXRlKCkudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxT2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50RGF0ZTogdGhpcy5ldmVudERhdGUudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICBlbnRyeVRpbWU6IHRoaXMuZW50cnlUaW1lLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgcHVuY2hUeXBlOiBcIldPUktcIixcclxuICAgICAgICAgICAgICAgICAgICBub3RlczpcIlwiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLnBvc3QoJ2h0dHBzOi8vYXBpLmNyYWJyci5jb20vY2xvY2svaW4nLCByZXFPYmopXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJQdW5jaGVkIGluOlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgb25QdW5jaE91dCgpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nsb2NraW5nIG91dC4uLi4nKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHVuY2hUb2dnbGUgPSAhdGhpcy5wdW5jaFRvZ2dsZVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMTAwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgJ1gtQXBpVG9rZW4nOiB0aGlzLmN1cnJlbnRVc2VyLmFwaWtleX0sXHJcbiAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IHRoaXMuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcU9iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudERhdGU6IHRoaXMuZXZlbnREYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5VGltZTogdGhpcy5lbnRyeVRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHVuY2hUeXBlOiBcIldPUktcIixcclxuICAgICAgICAgICAgICAgICAgICBub3RlczpcIlwiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLnBvc3QoJ2h0dHBzOi8vYXBpLmNyYWJyci5jb20vY2xvY2svb3V0JywgcmVxT2JqKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUHVuY2hlZCBPdXQ6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBvbktpb3NrTW9kZSgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW50ZXJpbmcgS2lvc2sgbW9kZS4uLlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oS2lvc2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcHVuY2hUb2dnbGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBldmVudERhdGU6IFwiXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAuZGFzaC1wYW5lbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgICAgICBtYXJnaW46IDM1O1xyXG5cdCAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC53ZWxjb21lIHtcclxuICAgICAgICBmb250LXNpemU6IDI1O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuc2NoZWR1bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0NTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0NTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFBhZ2Uge1xyXG4gICAgXHRiYWNrZ3JvdW5kOiByZ2IoMiwwLDM2KTtcclxuXHQgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDIyLDE0LDc1LDEpIDAlLCByZ2JhKDAsMjA0LDI1NSwxKSAxMDAlKTtcclxuICAgIH0gKi9cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9