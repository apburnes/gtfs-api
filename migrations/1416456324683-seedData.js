'use strict';

var _ = require('lodash');
var query = require('../query');
var uploadCSV = require('../query/uploadCSV');

var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

var path = require('path');
var datadir = path.join(__dirname, '../data/');

exports.up = function(success, error) {
  fs.readdir(datadir, function(err, files){
    if(err){
      error(err);
    }

    var done = _.after(files.length, function() {
      success();
    });

    _.map(files, function(file, index) {
      var tableName = file.split('.')[0];
      var filePath = path.join(datadir, file);

      uploadCSV(tableName, filePath, function(err){
        if(err) {
          error(err);
        }

        console.log(file);
        done();
      });
    });
  });
};

function truncate(files) {
  var stringed = _.map(files, function(file){
    var table = file.split('.')[0];
    return table;
  }).join(', ');

  var sql = 'TRUNCATE ' + stringed + ';';

  console.log(sql);
  return query(sql);
}

exports.down = function(success, error) {
  fs.readdirAsync(datadir)
    .then(truncate)
    .then(success)
    .catch(error);
};
