'use strict';

var query = require('../query');
var readSql = require('../util/readSql');

var sqlUp = readSql(__dirname, '../sqlMigrations/createGeodata.sql');
var sqlDown = readSql(__dirname, '../sqlMigrations/dropGeodata.sql');

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
