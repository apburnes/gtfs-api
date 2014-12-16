'use strict';

var joi = require('joi');
var valid = require('./index');


// TransitRoutes
module.exports.getRoute = joi.object().keys({
  agency_id: valid.agency_id.required(),
  route_id: valid.route_id.required()
});

module.exports.getRoutes = joi.object().keys({
  agency_id: valid.agency_id.required()
});

module.exports.getRouteGeo = joi.object().keys({
  agency_id: valid.agency_id.required(),
  route_id: valid.route_id.required()
});

module.exports.getRoutesGeo = joi.object().keys({
  agency_id: valid.agency_id.required()
});

// TransitStops
module.exports.getStopsGeo = joi.object().keys({
  agency_id: valid.agency_id.required()
});

module.exports.getStopGeo = joi.object().keys({
  agency_id: valid.agency_id.required(),
  stop_id: valid.stop_id.required()
});
