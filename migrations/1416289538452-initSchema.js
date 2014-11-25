'use strict';

var query = require('../query');
var readSql = require('../util/readSql');

var sqlUp = readSql(__dirname, '../sqlMigrations/createSchema.sql');
var sqlDown = readSql(__dirname, '../sqlMigrations/dropSchema.sql');

exports.up = function(success, error) {
  sqlUp
    .then(query)
    .then(success)
    .catch(error);
};

exports.down = function(success, error) {
  sqlDown
    .then(query)
    .then(success)
    .catch(error);
};
