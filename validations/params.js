'use strict';

var joi = require('joi');
var valid = require('./index');


// TransitRoutes
module.exports.getRoute = joi.object().keys({
  agency_id: valid.agency_id,
  route_id: valid.route_id
});

module.exports.getRoutes = joi.object().keys({
  agency_id: valid.agency_id
});

module.exports.getRouteGeo = joi.object().keys({
  agency_id: valid.agency_id,
  route_id: valid.route_id
});

module.exports.getRoutesGeo = joi.object().keys({
  agency_id: valid.agency_id
});

// TransitStops
module.exports.getStopsGeo = joi.object().keys({
  agency_id: valid.agency_id
});
