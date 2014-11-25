'use strict';

var _ = require('lodash');
var Promise = require('bluebird');
var pg = require('pg.js');

var config = require('../config');

var client = new pg.Client(config.get('database').host);
client.connect();

function query(sql, params, callback) {
  if (_.isFunction(params)) {
    params = [];
  }

  params = params || [];

  return new Promise(function(resolve, reject) {
    var query = client.query(sql, params);

    query.on('error', reject);

    query.on('row', function(row, result) {
      result.addRow(row);
    });

    query.on('end', function(result){
      return resolve(result);
    });
  });
}

module.exports = query;

