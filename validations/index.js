'use strict';

var joi = require('joi');

module.exports = {
  agency_id: joi.number().integer().greater(0).required(),
  route_id: joi.alternatives().try(joi.number().integer(), joi.string())
};
