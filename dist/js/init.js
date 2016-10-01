'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _Backendless = require('Backendless');

var Backendless = _interopRequireWildcard(_Backendless);

var _jQuery = require('jQuery');

var _jQuery2 = _interopRequireDefault(_jQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var notInitialized = true;

function init() {
    console.log("Application initialization - started");
    var APP_ID = '4ED00D7B-240E-B654-FF92-8E5E8C6F0100';
    var APP_KEY = '9FA43F77-53DA-2D88-FF36-44DFC400C600';
    var APP_VER = 'v1';
    Backendless.initApp(APP_ID, APP_KEY, APP_VER);
    notInitialized = false;
    console.log("Application initialization - completed");
    //$('.carousel').carousel({interval: false});
}

if (notInitialized) {
    init();
}