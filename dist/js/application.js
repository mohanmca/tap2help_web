'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.viewService = exports.Backendless = exports.dataService = exports.managementService = exports.userService = undefined;
exports.logout = logout;
exports.loginUser = loginUser;

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _jQuery = require('jQuery');

var _jQuery2 = _interopRequireDefault(_jQuery);

var _Backendless = require('Backendless');

var Backendless = _interopRequireWildcard(_Backendless);

var _init = require('./init');

var init = _interopRequireWildcard(_init);

var _userService = require('./userService');

var userService = _interopRequireWildcard(_userService);

var _management = require('./management');

var managementService = _interopRequireWildcard(_management);

var _dataService = require('./dataService');

var dataService = _interopRequireWildcard(_dataService);

var _viewService = require('./viewService');

var viewService = _interopRequireWildcard(_viewService);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function logout() {
    userService.logout();
    viewService.showPrivilegedMenu();
    console.log("Logged out");
}

function loginUser(form) {
    if (userService.loginUser(form)) {
        viewService.showPrivilegedMenu();
        (0, _jQuery2.default)('#myCarousel').carousel('next');
    } else {
        console.log("Sorry!, Your login is failure!");
    }
}

exports.userService = userService;
exports.managementService = managementService;
exports.dataService = dataService;
exports.Backendless = Backendless;
exports.viewService = viewService;