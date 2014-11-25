'use strict';

var fs = require('fs');
var pg = require('pg.js');
var copyFrom = require('pg-copy-streams').from;

var config = require('../config');

var client = new pg.Client(config.get('database').host);
client.connect();

function uploadCSV(destTable, filePath, done) {
  var stream = client.query(copyFrom('COPY ' + destTable + ' FROM STDIN CSV HEADER DELIMITER \',\';'));
  var file = fs.createReadStream(filePath);

  file.on('error', done);

  file
    .pipe(stream)
    .on('finish', done)
    .on('error', done);
}

module.exports = uploadCSV;
