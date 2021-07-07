"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var API_KEY = "AIzaSyA1Pl93no9tetztQNauyxqLBd_iFJmi6ug";
var CLIENT_ID = "619642775883-84t3mugadee3acqhhrh8i4agsdkgelf1.apps.googleusercontent.com";
var SCOPES = "https://www.googleapis.com/auth/userinfo.profile";

var LoginService =
/*#__PURE__*/
function () {
  function LoginService() {
    _classCallCheck(this, LoginService);
  }

  _createClass(LoginService, [{
    key: "onLoad",
    value: function onLoad() {
      var _this = this;

      var googleApi = document.createElement("script");
      googleApi.setAttribute("type", "text/javascript");
      googleApi.setAttribute("src", "https://apis.google.com/js/api.js");
      document.head.appendChild(googleApi);

      googleApi.onload = function () {
        gapi.load("client:auth2", _this.initClient);
      };

      googleApi.onerror = function () {
        console.log("failed to load google API");
      };
    }
  }, {
    key: "initClient",
    value: function initClient() {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES
      }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus()); // Handle the initial sign-in state.

        this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
      }, function (error) {
        console.log(JSON.stringify(error, null, 2));
      });
    }
  }, {
    key: "updateSigninStatus",
    value: function updateSigninStatus(isSignedIn) {
      return regeneratorRuntime.async(function updateSigninStatus$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = console;
              _context.next = 3;
              return regeneratorRuntime.awrap(isSignedIn.get());

            case 3:
              _context.t1 = _context.sent;

              _context.t0.log.call(_context.t0, _context.t1);

              if (isSignedIn) {
                authorizeButton.style.display = "none";
                signoutButton.style.display = "block";
              } else {
                authorizeButton.style.display = "block";
                signoutButton.style.display = "none";
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "signIn",
    value: function signIn() {
      return regeneratorRuntime.async(function signIn$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", new Promise(function _callee(resolve, reject) {
                var authInfo;
                return regeneratorRuntime.async(function _callee$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return regeneratorRuntime.awrap(gapi.auth2.getAuthInstance().signIn());

                      case 3:
                        authInfo = _context2.sent;
                        console.log(authInfo.get());
                        resolve(authInfo);
                        _context2.next = 12;
                        break;

                      case 8:
                        _context2.prev = 8;
                        _context2.t0 = _context2["catch"](0);
                        console.log(_context2.t0);
                        reject(_context2.t0);

                      case 12:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, null, null, [[0, 8]]);
              }));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "singOut",
    value: function singOut() {
      return regeneratorRuntime.async(function singOut$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", new Promise(function (resolve, reject) {
                try {
                  var authInfo = gapi.auth2.getAuthInstance().singOut();
                  resolve(authInfo);
                } catch (error) {
                  console.log(error);
                  reject(error);
                }
              }));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }]);

  return LoginService;
}();

var loginService = new LoginService();
var _default = loginService;
exports["default"] = _default;