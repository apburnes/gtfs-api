'use strict';

function register(server, options, next) {

  server.route([
    {
      method: 'GET',
      path: '/agency/{agency_id}/stops/geo',
      handler: require('../handlers/getStopsGeo'),
      config: {
        validate: {
          params: require('../validations/params').getStopsGeo
        }
      }
    },
    {
      method: 'GET',
      path: '/agency/{agency_id}/stop/{stop_id}/geo',
      handler: require('../handlers/getStopGeo'),
      config: {
        validate: {
          params: require('../validations/params').getStopGeo
        }
      }
    }
  ]);

  return next();
}

register.attributes = {
  name: 'TransitStops',
  version: '0.0.1'
};

module.exports = {
  register: register,
  options: ''
};
