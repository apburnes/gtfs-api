'use strict';

var api = require('../api');

module.exports = function (request, reply) {
  var filter = request.params;

  return api.getRoutesGeo(filter)
    .then(function(data) {
      return reply(data);
    })
    .catch(function(err) {
      return reply(err);
    });
};
