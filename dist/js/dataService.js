'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.saveAssesment = saveAssesment;
exports.getAssesments = getAssesments;
exports.getAttributesMap = getAttributesMap;
exports.getUsers = getUsers;
exports.getDisasters = getDisasters;

var _jQuery = require('jQuery');

var _jQuery2 = _interopRequireDefault(_jQuery);

var _Backendless = require('Backendless');

var Backendless = _interopRequireWildcard(_Backendless);

var _model = require('./model');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var attributesMap = {};

function saveAssesment(assesment) {
    try {
        console.dir(assesment);
        return Backendless.Persistence.of(_model.Assesment).save(assesment);
    } catch (e) {
        if (e.code != 1009) alert(e.message);
    }
    return [];
}

function getAssesments(userId) {
    try {
        var assesmentStore = Backendless.Persistence.of(_model.Assesment);
        var dataQuery = new Backendless.DataQuery();
        dataQuery.condition = 'ownerId = \'' + userId + '\'';
        var assesments = assesmentStore.find(dataQuery).data;
        return assesments;
    } catch (e) {
        if (e.code != 1009) alert(e.message);
    }
    return [];
}

function addComment() {
    var comment = new _model.Comment("Comment", "authorEmail@author.com");
    var dataStore = Backendless.Persistence.of(_model.Comment);
    dataStore.save(commentObject);
    console.log(commentObject);
}

function addUser() {
    var user = new Backendless.User();
    user.email = "test2@test.com";
    user.password = "test2";
    try {
        var result = Backendless.UserService.register(user);
        console.log(result.username);
    } catch (error) {
        console.log(error);
    }
}

function getAttributesMap() {
    if (Object.keys(attributesMap).length == 0) {
        console.log("Loading global attributes");
        var _globalAttributes = Backendless.Persistence.of(_model.Attributes).find().data;
        _globalAttributes.map(function (attr) {
            return attributesMap[attr.id] = attr.key;
        });
        console.dir(attributesMap);
    }
    return attributesMap;
}

function getUsers() {
    try {
        return Backendless.Persistence.of(_model.Users).find().data;
    } catch (e) {
        if (e.code != 1009) alert(e.message);
    }
    return [];
}

function getDisasters() {
    try {
        return Backendless.Persistence.of(_model.Disaster).find().data;
    } catch (e) {
        if (e.code != 1009) alert(e.message);
    }
    return [];
}