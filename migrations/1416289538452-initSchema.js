'use strict';

var query = require('../query');

var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

var path = require('path');

var sqlUp = path.join(__dirname, '../sql/createSchema.sql');
var sqlDown = path.join(__dirname, '../sql/dropSchema.sql');

exports.up = function(success, error) {
  fs.readFileAsync(sqlUp, 'utf-8')
    .then(query)
    .then(success)
    .catch(error);
};

exports.down = function(success, error) {
  fs.readFileAsync(sqlDown, 'utf-8')
    .then(query)
    .then(success)
    .catch(error);
};
