'use strict';

var query = require('../query');
var readSql = require('../util/readSql')(__dirname, '../sqlApi/getRoutesGeo.sql');
var buildFeatureCollection = require('../util/buildFeatureCollection');

function getRoutesGeo(filter, callback) {
  var params = [
    filter.agency_id
  ];

  return readSql
    .then(function(sql) {
      return query(sql, params);
    })
    .then(function(data) {
      if (data.rows.length === 0) {
        return {};
      }
      return buildFeatureCollection(data.rows);
    })
    .nodeify(callback);
}

module.exports = getRoutesGeo;
