'use strict';

var query = require('../query');
var readSql = require('../util/readSql')(__dirname, '../sqlApi/getTripGeo.sql');
var buildGeojson = require('../util/buildGeojson');

function getTripGeo(filter, callback) {
  var params = [
    filter.agency_id,
    filter.trip_id
  ];

  return readSql
    .then(function(sql) {
      return query(sql, params);
    })
    .then(function(data) {
      if (data.rows[0]) {
        var trip = data.rows[0];
        return buildGeojson(trip);
      }
      return  {};
    })
    .nodeify(callback);
}

module.exports = getTripGeo;
