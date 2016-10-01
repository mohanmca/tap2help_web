'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showAttributes = showAttributes;
exports.addAttribute = addAttribute;
exports.printValues = printValues;
exports.parseAssesment = parseAssesment;

var _jQuery = require('jQuery');

var _jQuery2 = _interopRequireDefault(_jQuery);

var _Backendless = require('Backendless');

var Backendless = _interopRequireWildcard(_Backendless);

var _userService = require('./userService');

var userService = _interopRequireWildcard(_userService);

var _dataService = require('./dataService');

var dataService = _interopRequireWildcard(_dataService);

var model = _interopRequireWildcard(_dataService);

var _util = require('./util');

var _model = require('./model');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showAttributes(elem) {
    if (elem.value == 2) {
        document.getElementById('shelterTemplateAttribute').style.display = "block";
    } else {
        document.getElementById('anAttribute').style.display = "block";
    }
}

function addAttribute(elem) {
    (0, _jQuery2.default)(elem).parent().parent().parent().clone().appendTo("#attributes");
}

function printValues() {
    var isAssesment = (0, _jQuery2.default)("#item").val();
    var needs = (0, _jQuery2.default)("select[id*='needs']").map(function (i, e) {
        return e.value.trim();
    });
    var needDescriptions = (0, _jQuery2.default)("input[id*='needValue']").map(function (i, e) {
        return e.value;
    });
    var required = {};
    needDescriptions.map(function (i, description) {
        return required[needs[i]] = description;
    });
    var item = {
        "attributeType": isAssesment,
        "required": required
    };
    console.log(JSON.stringify(item, 2, null));
    var assesment = parseAssesment(item);
    dataService.saveAssesment(assesment);
}

function parseAssesment(items) {
    var attributes = Object.keys(items.required).map(function (attributeId) {
        return new _model.AssesmentAttribute(attributeId, items.required[attributeId]);
    });
    var assesment = new _model.Assesment((0, _util.guid)(), "assesmentName", "userId", attributes);
    return assesment;
}