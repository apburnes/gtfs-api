'use strict';

var _ = require('lodash');
var buildGeojson = require('./buildGeojson');

function buildFeatureCollection(data) {
  var featureCollection = {
    type: 'FeatureCollection'
  };

  var features = _.map(data, function(feature){
    return buildGeojson(feature);
  });

  return _.assign(featureCollection, {
    features: features
  });
}

module.exports = buildFeatureCollection;
