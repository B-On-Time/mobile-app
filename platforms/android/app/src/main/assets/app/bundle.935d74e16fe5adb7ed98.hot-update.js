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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9QdW5jaC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOztBQUNBOztBQUNBOztBQUVBO0FBQ0Esd0JBREE7QUFHQTtBQUVBO0FBQ0E7QUFDQSxLQUpBOztBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBLHNCQUNBO0FBQ0E7QUFDQSxPQUhBLE1BSUEsZ0JBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0Esc0JBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0EsS0FsQ0E7O0FBb0NBO0FBRUE7QUFFQTtBQUVBO0FBQ0Esc0JBREE7QUFFQTtBQUFBO0FBQUE7QUFBQSxTQUZBO0FBR0E7QUFIQTtBQU1BO0FBRUE7QUFDQSw0Q0FEQTtBQUVBLDRDQUZBO0FBR0EseUJBSEE7QUFJQTtBQUpBO0FBT0E7QUFFQSwrREFDQSxJQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSwwQkFGQTtBQUdBO0FBSEEsV0FJQSxJQUpBLENBSUE7QUFDQTtBQUNBLFNBTkE7QUFPQSxPQVZBLEVBV0EsS0FYQSxDQVdBO0FBQ0E7QUFDQSxPQWJBO0FBY0EsS0F6RUE7O0FBMkVBO0FBRUE7QUFFQTtBQUVBO0FBQ0Esc0JBREE7QUFFQTtBQUFBO0FBQUE7QUFBQSxTQUZBO0FBR0E7QUFIQTtBQU1BO0FBRUE7QUFDQSxpQ0FEQTtBQUVBLGlDQUZBO0FBR0EseUJBSEE7QUFJQTtBQUpBO0FBT0EsZ0VBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQURBO0FBRUEsMEJBRkE7QUFHQTtBQUhBLFdBSUEsSUFKQSxDQUlBO0FBQ0E7QUFDQSxTQU5BO0FBT0EsT0FWQSxFQVdBLEtBWEEsQ0FXQTtBQUNBO0FBQ0EsT0FiQTtBQWNBLEtBOUdBOztBQWdIQTtBQUNBO0FBQ0E7QUFDQTs7QUFuSEEsR0FIQTs7QUF5SEE7QUFDQTtBQUNBLHVCQURBO0FBRUE7QUFGQTtBQUlBOztBQTlIQSxHIiwiZmlsZSI6ImJ1bmRsZS45MzVkNzRlMTZmZTVhZGI3ZWQ5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2UgQGxvYWRlZD1cIm9uTG9hZGVkXCIgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiID5cclxuICAgICAgICA8U2Nyb2xsVmlldz5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZGFzaC1wYW5lbFwiPlxyXG5cdFx0ICAgIDxMYWJlbCA6dGV4dD1cIidXZWxjb21lLCAnICsgY3VycmVudFVzZXIuZmlyc3ROYW1lXCIgY2xhc3M9XCJ3ZWxjb21lXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlB1bmNoIEluXCIgQHRhcD1cIm9uUHVuY2hJblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCItcHJpbWFyeSAtcm91bmRlZC1sZ1wiIDppc0VuYWJsZWQ9XCJwdW5jaFRvZ2dsZVwiLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlB1bmNoIE91dFwiIEB0YXA9XCJvblB1bmNoT3V0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIi1wcmltYXJ5IC1yb3VuZGVkLWxnXCIgOmlzRW5hYmxlZD1cIiFwdW5jaFRvZ2dsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJLaW9zayBNb2RlXCIgdi1pZj1cImN1cnJlbnRVc2VyLmlzQWRtaW5cIiBAdGFwPVwib25LaW9za01vZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiLXByaW1hcnkgLXJvdW5kZWQtbGdcIiAvPlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgS2lvc2sgZnJvbSAnLi9LaW9zaydcclxuICAgIHZhciBkaWFsb2dzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcclxuICAgIGNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBwcm9wczogWydjdXJyZW50VXNlciddLFxyXG4gICAgICAgIFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuXHJcbiAgICAgICAgICAgIG9uTG9hZGVkKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50VXNlcik7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBnZXREYXRlKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB5bWQgPSBkLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudERhdGUgPSB5bWRcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaCA9IGQuZ2V0SG91cnMoKTtcclxuICAgICAgICAgICAgICAgIHZhciBob3VycyA9IChoKzI0KSUyNDsgXHJcbiAgICAgICAgICAgICAgICB2YXIgbWlkPSdhbSc7XHJcbiAgICAgICAgICAgICAgICBpZihob3Vycz09MClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBob3Vycz0xMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoaG91cnM+MTIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaG91cnM9aG91cnMlMTI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWlkPSdwbSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihob3VyczwxMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBob3Vycz0nMCcraG91cnNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBobWlkID0gaG91cnMgKyAnOicgKyBkLmdldE1pbnV0ZXMoKSArIFwiIFwiICsgbWlkXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVudHJ5VGltZSA9IGhtaWRcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhobWlkICsgJyAnICsgeW1kKVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBobWlkICsgJyAnICsgeW1kO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgb25QdW5jaEluKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbG9ja2luZyBpbi4uLi4nKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHVuY2hUb2dnbGUgPSAhdGhpcy5wdW5jaFRvZ2dsZVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMTAwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgJ1gtQXBpVG9rZW4nOiB0aGlzLmN1cnJlbnRVc2VyLmFwaWtleSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSB0aGlzLmdldERhdGUoKS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXFPYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnREYXRlOiB0aGlzLmV2ZW50RGF0ZS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5VGltZTogdGhpcy5lbnRyeVRpbWUudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICBwdW5jaFR5cGU6IFwiV09SS1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOlwiXCJcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxT2JqKVxyXG5cclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLnBvc3QoJ2h0dHBzOi8vYXBpLmNyYWJyci5jb20vY2xvY2svaW4nLCByZXFPYmopXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJQdW5jaGVkIGluOlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgb25QdW5jaE91dCgpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nsb2NraW5nIG91dC4uLi4nKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHVuY2hUb2dnbGUgPSAhdGhpcy5wdW5jaFRvZ2dsZVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMTAwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgJ1gtQXBpVG9rZW4nOiB0aGlzLmN1cnJlbnRVc2VyLmFwaWtleX0sXHJcbiAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IHRoaXMuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcU9iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudERhdGU6IHRoaXMuZXZlbnREYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5VGltZTogdGhpcy5lbnRyeVRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHVuY2hUeXBlOiBcIldPUktcIixcclxuICAgICAgICAgICAgICAgICAgICBub3RlczpcIlwiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLnBvc3QoJ2h0dHBzOi8vYXBpLmNyYWJyci5jb20vY2xvY2svb3V0JywgcmVxT2JqKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUHVuY2hlZCBPdXQ6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBvbktpb3NrTW9kZSgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW50ZXJpbmcgS2lvc2sgbW9kZS4uLlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oS2lvc2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcHVuY2hUb2dnbGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBldmVudERhdGU6IFwiXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAuZGFzaC1wYW5lbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgICAgICBtYXJnaW46IDM1O1xyXG5cdCAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC53ZWxjb21lIHtcclxuICAgICAgICBmb250LXNpemU6IDI1O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuc2NoZWR1bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0NTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0NTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFBhZ2Uge1xyXG4gICAgXHRiYWNrZ3JvdW5kOiByZ2IoMiwwLDM2KTtcclxuXHQgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDIyLDE0LDc1LDEpIDAlLCByZ2JhKDAsMjA0LDI1NSwxKSAxMDAlKTtcclxuICAgIH0gKi9cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9