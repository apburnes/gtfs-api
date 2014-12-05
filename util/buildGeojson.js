'use strict';

var _ = require('lodash');

function buildGeojson(data) {
  var feature = {
    type: 'Feature'
  };

  var geometry = JSON.parse(data.geojson);
  var props = _.omit(data, 'geojson');

  return _.assign(feature, {
    geometry: geometry,
    properties: props
  });
}

module.exports = buildGeojson;
