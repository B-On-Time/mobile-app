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

      var m = d.getMinutes() - 9;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9QdW5jaC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOztBQUNBOztBQUNBOztBQUVBO0FBQ0Esd0JBREE7QUFHQTtBQUVBO0FBQ0E7QUFDQSxLQUpBOztBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBLHNCQUNBO0FBQ0E7QUFDQSxPQUhBLE1BSUEsZ0JBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0Esc0JBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBLGtCQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFDQSxLQXJDQTs7QUF1Q0E7QUFFQTtBQUVBO0FBRUE7QUFDQSxzQkFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBLFNBRkE7QUFHQTtBQUhBO0FBTUE7QUFFQTtBQUNBLDRDQURBO0FBRUEsNENBRkE7QUFHQSx5QkFIQTtBQUlBO0FBSkE7QUFPQTtBQUVBLCtEQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQSw4QkFEQTtBQUVBLDBCQUZBO0FBR0E7QUFIQSxXQUlBLElBSkEsQ0FJQTtBQUNBO0FBQ0EsU0FOQTtBQU9BLE9BVkEsRUFXQSxLQVhBLENBV0E7QUFDQTtBQUNBLE9BYkE7QUFjQSxLQTVFQTs7QUE4RUE7QUFFQTtBQUVBO0FBRUE7QUFDQSxzQkFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBLFNBRkE7QUFHQTtBQUhBO0FBTUE7QUFFQTtBQUNBLDRDQURBO0FBRUEsNENBRkE7QUFHQSx5QkFIQTtBQUlBO0FBSkE7QUFPQSxnRUFDQSxJQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSwwQkFGQTtBQUdBO0FBSEEsV0FJQSxJQUpBLENBSUE7QUFDQTtBQUNBLFNBTkE7QUFPQSxPQVZBLEVBV0EsS0FYQSxDQVdBO0FBQ0E7QUFDQSxPQWJBO0FBY0EsS0FqSEE7O0FBbUhBO0FBQ0E7QUFDQTtBQUNBOztBQXRIQSxHQUhBOztBQTRIQTtBQUNBO0FBQ0EsdUJBREE7QUFFQTtBQUZBO0FBSUE7O0FBaklBLEciLCJmaWxlIjoiYnVuZGxlLjdiNmNhMDVlMzYxOWVkZjdhZmJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZSBAbG9hZGVkPVwib25Mb2FkZWRcIiBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCIgPlxyXG4gICAgICAgIDxTY3JvbGxWaWV3PlxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJkYXNoLXBhbmVsXCI+XHJcblx0XHQgICAgPExhYmVsIDp0ZXh0PVwiJ1dlbGNvbWUsICcgKyBjdXJyZW50VXNlci5maXJzdE5hbWVcIiBjbGFzcz1cIndlbGNvbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiUHVuY2ggSW5cIiBAdGFwPVwib25QdW5jaEluXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIi1wcmltYXJ5IC1yb3VuZGVkLWxnXCIgOmlzRW5hYmxlZD1cInB1bmNoVG9nZ2xlXCIvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiUHVuY2ggT3V0XCIgQHRhcD1cIm9uUHVuY2hPdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiLXByaW1hcnkgLXJvdW5kZWQtbGdcIiA6aXNFbmFibGVkPVwiIXB1bmNoVG9nZ2xlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIktpb3NrIE1vZGVcIiB2LWlmPVwiY3VycmVudFVzZXIuaXNBZG1pblwiIEB0YXA9XCJvbktpb3NrTW9kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCItcHJpbWFyeSAtcm91bmRlZC1sZ1wiIC8+XHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBLaW9zayBmcm9tICcuL0tpb3NrJ1xyXG4gICAgdmFyIGRpYWxvZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xyXG4gICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIHByb3BzOiBbJ2N1cnJlbnRVc2VyJ10sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cclxuICAgICAgICAgICAgb25Mb2FkZWQoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRVc2VyKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGdldERhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHltZCA9IGQudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50RGF0ZSA9IHltZFxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBoID0gZC5nZXRIb3VycygpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGhvdXJzID0gKGgrMjQpJTI0OyBcclxuICAgICAgICAgICAgICAgIHZhciBtaWQ9J2FtJztcclxuICAgICAgICAgICAgICAgIGlmKGhvdXJzPT0wKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdXJzPTEyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihob3Vycz4xMilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBob3Vycz1ob3VycyUxMjtcclxuICAgICAgICAgICAgICAgICAgICBtaWQ9J3BtJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGhvdXJzPDEwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdXJzPScwJytob3Vyc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG0gPSBkLmdldE1pbnV0ZXMoKSAtIDlcclxuICAgICAgICAgICAgICAgIGlmKG0gPCAxMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtID0gJzAnK21cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBobWlkID0gaG91cnMgKyAnOicgKyBtICsgXCIgXCIgKyBtaWRcclxuICAgICAgICAgICAgICAgIHRoaXMuZW50cnlUaW1lID0gaG1pZFxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBobWlkICsgJyAnICsgeW1kO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgb25QdW5jaEluKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbG9ja2luZyBpbi4uLi4nKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHVuY2hUb2dnbGUgPSAhdGhpcy5wdW5jaFRvZ2dsZVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMTAwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgJ1gtQXBpVG9rZW4nOiB0aGlzLmN1cnJlbnRVc2VyLmFwaWtleSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSB0aGlzLmdldERhdGUoKS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXFPYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnREYXRlOiB0aGlzLmV2ZW50RGF0ZS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5VGltZTogdGhpcy5lbnRyeVRpbWUudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICBwdW5jaFR5cGU6IFwiV09SS1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOlwiXCJcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxT2JqKVxyXG5cclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLnBvc3QoJ2h0dHBzOi8vYXBpLmNyYWJyci5jb20vY2xvY2svaW4nLCByZXFPYmopXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJQdW5jaGVkIGluOlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgb25QdW5jaE91dCgpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nsb2NraW5nIG91dC4uLi4nKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHVuY2hUb2dnbGUgPSAhdGhpcy5wdW5jaFRvZ2dsZVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMTAwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgJ1gtQXBpVG9rZW4nOiB0aGlzLmN1cnJlbnRVc2VyLmFwaWtleX0sXHJcbiAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IHRoaXMuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcU9iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudERhdGU6IHRoaXMuZXZlbnREYXRlLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnlUaW1lOiB0aGlzLmVudHJ5VGltZS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHB1bmNoVHlwZTogXCJXT1JLXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6XCJcIlxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5wb3N0KCdodHRwczovL2FwaS5jcmFicnIuY29tL2Nsb2NrL291dCcsIHJlcU9iailcclxuICAgICAgICAgICAgICAgICAgICAudGhlbiggKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlB1bmNoZWQgT3V0OlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgb25LaW9za01vZGUoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVudGVyaW5nIEtpb3NrIG1vZGUuLi5cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEtpb3NrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHB1bmNoVG9nZ2xlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZXZlbnREYXRlOiBcIlwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLmRhc2gtcGFuZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICAgICAgbWFyZ2luOiAzNTtcclxuXHQgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAud2VsY29tZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNjaGVkdWxlIHtcclxuICAgICAgICBmb250LXNpemU6IDI1O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBQYWdlIHtcclxuICAgIFx0YmFja2dyb3VuZDogcmdiKDIsMCwzNik7XHJcblx0ICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDIsMCwzNiwxKSAwJSwgcmdiYSgyMiwxNCw3NSwxKSAwJSwgcmdiYSgwLDIwNCwyNTUsMSkgMTAwJSk7XHJcbiAgICB9ICovXHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==