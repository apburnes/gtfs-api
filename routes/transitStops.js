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
