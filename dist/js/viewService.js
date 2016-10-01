'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showReports = showReports;
exports.showManagement = showManagement;
exports.showPrivilegedMenu = showPrivilegedMenu;
exports.showAssesments = showAssesments;
exports.toTable = toTable;
exports.attributesToTable = attributesToTable;

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _jQuery = require('jQuery');

var _jQuery2 = _interopRequireDefault(_jQuery);

var _dataService = require('./dataService');

var dataService = _interopRequireWildcard(_dataService);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showReports() {
    if (isValidUser()) {
        var content = require("html!../report.html");
        var disasters = dataService.getDisasters();
        var users = dataService.getUsers();

        var options = disasters.map(function (disaster) {
            return '<option value="' + disaster.id + '">' + disaster.name + '</option>';
        }).join("");
        var disastersHtml = '<select>' + options + '</select>';

        (0, _jQuery2.default)("#rptContent").empty().html(content);
        (0, _jQuery2.default)("#showDisasters").empty().html(disastersHtml);

        users.map(function (user) {
            return (0, _jQuery2.default)("#userSelect").append((0, _jQuery2.default)('<option>', {
                value: user.objectId,
                text: user.email
            }));
        });
    }
}

function showManagement() {
    if (isValidUser()) {
        var content = require("html!../management.html");
        (0, _jQuery2.default)("#managementContent").empty().html(content);
    }
}

function isValidUser() {
    var user = Backendless.UserService.getCurrentUser();
    console.log("Valid user" + user);
    return user && user.email && user.email.trim().length > 5;
}

function showPrivilegedMenu() {
    if (isValidUser) {
        (0, _jQuery2.default)('#reports').toggleClass("enabled");
        (0, _jQuery2.default)('#management').toggleClass("enabled");
        application.viewService.showReports();
        application.viewService.showManagement();
    } else {
        (0, _jQuery2.default)('#reports').toggleClass("disabled");
        (0, _jQuery2.default)('#management').toggleClass("disabled");
    }
}
function showAssesments(userId) {
    var assesments = dataService.getAssesments(userId);
    (0, _jQuery2.default)("#showAssesments").empty().html(toTable(assesments));
}

function toTable(assesments) {
    var header = "<tr><td>id</td><td>name</td><td>userId</td><td>description</td></tr>";
    var rows = header + assesments.map(function (assesment) {
        return '<tr><td>' + assesment.id + '</td><td>' + assesment.name + '</td><td>' + assesment.userid + '</td><td>' + attributesToTable(assesment.assesmentAttributes) + '</td></tr>';
    }).join("");
    return '<table  border=1>' + rows + '</table>';
}

function attributesToTable(attribute) {
    var map = dataService.getAttributesMap();
    var rows = attribute.map(function (attribute) {
        return '<tr><td>' + map[attribute.id] + '</td><td>' + attribute.name + '</td></tr>';
    }).join("");
    return '<table border=1>' + rows + '</table>';
}