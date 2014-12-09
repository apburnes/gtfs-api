'use strict';

var query = require('../query');
var readSql = require('../util/readSql')(__dirname, '../sqlApi/getRouteGeo.sql');
var buildFeatureCollection = require('../util/buildFeatureCollection');

function getRouteGeo(filter, callback) {
  var params = [
    filter.agency_id,
    filter.route_id
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

module.exports = getRouteGeo;
