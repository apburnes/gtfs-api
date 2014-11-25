'use strict';

var query = require('../query/index');
var readSql = require('../util/readSql')(__dirname, '../sqlApi/getRoutes.sql');

function getRoutes(filter, callback) {
  var orderBy = filter.orderBy || 'agency_id';

  var params = [
    filter.agency_id,
    orderBy
  ];

  return readSql
    .then(function(sql) {
      return query(sql, params);
    })
    .then(function(data) {
      return data.rows;
    })
    .nodeify(callback);
}

module.exports = getRoutes;
