'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.userIdGET = function userIdGET (req, res, next) {
  Default.userIdGET(req.swagger.params, res, next);
};

module.exports.userIdPUT = function userIdPUT (req, res, next) {
  Default.userIdPUT(req.swagger.params, res, next);
};

module.exports.usersGET = function usersGET (req, res, next) {
  Default.usersGET(req.swagger.params, res, next);
};
