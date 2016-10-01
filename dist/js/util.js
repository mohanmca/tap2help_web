'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.uuid = uuid;
exports.pluralize = pluralize;
exports.guid = guid;
function uuid(a, b) {
    for (b = a = ''; a++ < 36; b += a * 51 & 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : '-') {}
    return b;
}

function pluralize(count, word) {
    return count === 1 ? word : word + 's';
}

function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}