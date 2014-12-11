'use strict';

function register(server, options, next) {

  server.route([
    {
      method: 'GET',
      path: '/agency/{agency_id}/routes/geo',
      handler: require('../handlers/getRoutesGeo'),
      config: {
        validate: {
          params: require('../validations/params').getRoutesGeo
        }
      }
    },
    {
      method: 'GET',
      path: '/agency/{agency_id}/route/{route_id}/geo',
      handler: require('../handlers/getRouteGeo'),
      config: {
        validate: {
          params: require('../validations/params').getRouteGeo
        }
      }
    },
    {
      method: 'GET',
      path: '/agency/{agency_id}/route/{route_id}',
      handler: require('../handlers/getRoute'),
      config: {
        validate: {
          params: require('../validations/params').getRoute
        }
      }
    },
    {
      method: 'GET',
      path: '/agency/{agency_id}/routes',
      handler: require('../handlers/getRoutes'),
      config: {
        validate: {
          params: require('../validations/params').getRoutes
        }
      }
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
