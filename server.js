'use strict';

var Glue = require('glue');
var manifest = require('./manifest');

var path = require('path');
var plugins = path.join(__dirname, './');

function onError(err) {
  console.log(err);
}

function onSuccess() {
  console.log('Listening on port:8080');
}

Glue.compose(manifest, { relativeTo: plugins }, function(err, server) {
  if (err) {
    console.log(err);
  }

  server.start(function(err) {
    if (err) {
      onError(err);
    }
    else {
      onSuccess();
    }
  });
});
