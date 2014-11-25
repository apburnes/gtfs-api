'use strict';

var query = require('../query/index');
var readSQL = require('../util/readSql')(__dirname, '../sqlApi/getAgency.sql');

function getAgency(id, callback) {
  var params = [id];

  return readSQL
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
