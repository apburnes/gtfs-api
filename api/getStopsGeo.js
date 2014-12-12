'use strict';

var query = require('../query');
var readSql = require('../util/readSql')(__dirname, '../sqlApi/getStopsGeo.sql');
var buildFeatureCollection = require('../util/buildFeatureCollection');

function getStopsGeo(filter, callback) {
  var params = [
    filter.agency_id
  ];

  return readSql
    .then(function(sql) {
      return query(sql, params);
    })
    .then(function(data) {
      if (data.rows[0]) {
        var stops = data.rows;
        return buildFeatureCollection(stops);
      }
      return {};
    })
    .nodeify(callback);
}

module.exports = getStopsGeo;
