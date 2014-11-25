'use strict';

var convict = require('convict');

var conf = convict({
  database: {
    host: process.env.GTFS_URL
  }
});

conf.validate();

module.exports = conf;
