'use strict';

var manifest = {
  'connections' : [
    {
      'port': 8080,
      'labels': ['api']
    }
  ],
  'plugins': {
    './routes/transitRoutes': null,
    './routes/transitStops': null,
    'lout': null
  }
};

module.exports = manifest;
