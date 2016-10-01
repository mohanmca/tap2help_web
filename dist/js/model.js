"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Task = Task;
exports.Disaster = Disaster;
exports.Users = Users;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Task() {
    this.id = "";
    this.title = "";
    this.completed = false;
}

function Disaster() {
    this.id = "";
    this.name = "";
    this.created = 0;
    this.When = 0;
}

function Users() {
    this.email = "";
    this.name = "";
}

var AssesmentAttribute = exports.AssesmentAttribute = function AssesmentAttribute(id, name) {
    _classCallCheck(this, AssesmentAttribute);

    this.id = id;
    this.name = name;
    this.attributeType = 1;
    this.___class = 'AssesmentAttribute';
};

var Attributes = exports.Attributes = function Attributes(id, key, unit) {
    _classCallCheck(this, Attributes);

    this.id = id;
    this.key = key;
    this.unit = unit;
};

var Assesment = exports.Assesment = function Assesment(id, name, userid, assesmentAttributes) {
    _classCallCheck(this, Assesment);

    this.id = id;
    this.name = name;
    this.userid = userid;
    this.assesmentAttributes = assesmentAttributes;
    this.___class = 'Assesment';
};

var Comment = exports.Comment = function Comment(message, authorEmail) {
    _classCallCheck(this, Comment);

    this.message = message;
    this.message = authorEmail;
};