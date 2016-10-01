'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;
exports.makeComponent = makeComponent;
exports.createUser = createUser;
exports.logout = logout;
exports.loginUser = loginUser;
exports.showInfo = showInfo;

var _Backendless = require('Backendless');

var Backendless = _interopRequireWildcard(_Backendless);

var _jQuery = require('jQuery');

var _jQuery2 = _interopRequireDefault(_jQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var userProps = ['email', 'name', 'password'];

//init();

function init() {
    // $('.carousel').carousel({
    //     interval: false
    // });

    for (var element in userProps) {
        makeComponent(userProps[element]);
    }
}

function makeComponent(property) {
    console.log('makeComponent');
    (0, _jQuery2.default)("#regFields").append("<div><input type='text' class='input-block-level user-properties' placeholder= '" + property.name + "' name='" + property.name + "'> </input></div>");
}

function createUser(form) {
    var user = new Backendless.User();
    userProps.map(function (name) {
        return user[name] = form[name].value;
    });
    console.dir(user);
    try {
        var register = Backendless.UserService.register(user);
        showInfo(" User successfully created");
    } catch (e) {
        showInfo(e.message);
    }
}

function logout() {
    Backendless.UserService.logout();
}

function loginUser(form) /*function to check userid & password*/
{
    var loggedIn = false;
    try {
        var user = Backendless.UserService.login(form.userid.value, form.pswrd.value, true);
        if (user != null) {
            showInfo("Login successful");
            (0, _jQuery2.default)('#login').remove();
            (0, _jQuery2.default)('#logout').toggleClass("enabled");
            loggedIn = true;
        } else {
            showInfo("Login failed");
            loggedIn = false;
        }
    } catch (e) {
        showInfo("Login failed. " + e.message);
    }
    return loggedIn;
}

function showInfo(text) {
    (0, _jQuery2.default)('#message').text(text);
    // var carousel = $('.carousel');
    // carousel.carousel(2);
    // carousel.carousel('pause');
}