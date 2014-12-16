'use strict';

var query = require('../query');
var readSql = require('../util/readSql')(__dirname, '../sqlApi/getStopGeo.sql');
var buildFeatureCollection = require('../util/buildFeatureCollection');

function getStopGeo(filter, callback) {
  var params = [
    filter.agency_id,
    filter.stop_id
  ];

  return readSql
    .then(function(sql) {
      return query(sql, params);
    })
    .then(function(data) {
      if (data.rows[0]) {
        var stop = data.rows;
        return buildFeatureCollection(stop);
      }
      return {};
    })
    .nodeify(callback);
}

module.exports = getStopGeo;
