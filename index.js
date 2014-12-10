'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server('localhost', 8080);

var plugins = [
  require('./routes/routesGeo'),
  require('lout')
];

server.pack.register(plugins, function(err) {
  if (err) {
    console.log(err);
  }
});

module.exports = server;
