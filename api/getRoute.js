'use strict';

var query = require('../query/index');
var readSql = require('../util/readSql')(__dirname, '../sqlApi/getRoute.sql');

function getRoute(filter, callback) {
  var orderBy = filter.orderBy || 'agency_id';

  var params = [
    filter.agency_id,
    filter.route_id,
    orderBy
  ];

  return readSql
    .then(function(sql) {
      return query(sql, params);
    })
    .then(function(data) {
      if (data.rows[0]) {
        return data.rows[0];
      }
      return {};
    })
    .nodeify(callback);
}

module.exports = getRoute;
