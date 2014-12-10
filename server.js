'use strict';

var server = require('./index');

function onError(err) {
  console.log(err);
}

function onSuccess() {
  console.log('Listening on port:8080');
}

server.start(function(err) {
  if (err) {
    onError(err);
  }
  else {
    onSuccess();
  }
});
