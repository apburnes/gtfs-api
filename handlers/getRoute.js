'use strict';

var _ = require('lodash');
var api = require('../api');

module.exports = function (request, reply) {
  var filter = request.params;

  return api.getRoute(filter)
    .then(function(data) {
      return reply(data);
    })
    .catch(function(err) {
      return reply(err);
    });
};
