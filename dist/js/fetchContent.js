'use strict';

var _Backendless = require('Backendless');

var Backendless = _interopRequireWildcard(_Backendless);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function load(url) {
  fetch(url, {
    method: 'post',
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: 'foo=bar&lorem=ipsum'
  }).then(json).then(function (data) {
    console.log('Request succeeded with JSON response', data);
  }).catch(function (error) {
    console.log('Request failed', error);
  });
}