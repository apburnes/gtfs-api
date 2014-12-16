'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({port: 8080});

var plugins = [
  require('./routes/transitRoutes'),
  require('./routes/transitStops'),
  require('lout')
];

server.register(plugins, function(err) {
  if (err) {
    console.log(err);
  }
});

module.exports = server;
