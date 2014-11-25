'use strict';

var query = require('../query/index');
var readSql = require('../util/readSql')(__dirname, '../sqlApi/getAgency.sql');

function getAgency(id, callback) {
  var params = [id];

  return readSql
    .then(function(sql){
      return query(sql, params);
    })
    .then(function(data){
      if (data.rows[0]) {
        return data.rows[0];
      }
      return {};
    })
    .nodeify(callback);
}


module.exports = getAgency;
