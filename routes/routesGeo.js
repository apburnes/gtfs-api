'use strict';

function register(server, options, next) {

  server.route([
    {
      method: 'GET',
      path: '/agency/{agency_id}/routes',
      handler: require('../handlers/getRoutesGeo')
    },
    {
      method: 'GET',
      path: '/agency/{agency_id}/route/{route_id}',
      handler: require('../handlers/getRouteGeo')
    }
  ]);

  return next();
}

register.attributes = {
  name: 'agencyRoutesGeo',
  version: '0.0.1'
};

module.exports = {
  register: register,
  options: ''
};
