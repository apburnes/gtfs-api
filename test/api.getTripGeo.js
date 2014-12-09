'use strict';

var _ = require('lodash');
var chai = require('chai');
var expect = chai.expect;
chai.use(require('chai-as-promised'));

var api = require('../api');

var filter = {
  agency_id: 1,
  trip_id: 14223
};

var geojsonKeys = [
  'type',
  'geometry',
  'properties'
];

var geometryKeys = [
  'type',
  'coordinates'
];

var propertiesKeys = [
  'service',
  'headsign',
  'agency_id',
  'short_name',
  'long_name',
  'route_type',
  'trip_id'
];

describe('Get Trip Geometry API Query', function() {
  it('should return a trip as geojson when passed a valid filter object as a promise', function() {
    return expect(api.getTripGeo(filter))
      .to.eventually.be.an('object')
      .and.to.have.keys(geojsonKeys);
  });

  it('should return a trip as geojson when passed a valid filter object as a callback', function(done) {
    api.getTripGeo(filter, function(err, data) {
      expect(data).to.have.keys(geojsonKeys);
      expect(data.geometry).to.have.keys(geometryKeys);
      expect(data.properties).to.have.keys(propertiesKeys);
      done(err);
    });
  });

  it('should return an empty object when passed a filter with a non-existant agency_id', function() {
    var notAgency = _.assign({}, filter, {
      agency_id: 999
    });

    return expect(api.getTripGeo(notAgency))
      .to.eventually.be.an('object')
      .and.to.deep.equal({});
  });

  it('should return an empty object when passed a filter with a non-existant trip_id', function() {
    var notTrip = _.assign({}, filter, {
      trip_id: 99999999
    });

    return expect(api.getTripGeo(notTrip))
      .to.eventually.be.an('object')
      .and.to.deep.equal({});
  });

  it('should return an empty object when passed a filter with an invalid filter', function() {
    return  expect(api.getTripGeo({}))
      .to.eventually.be.an('object')
      .and.to.deep.equal({});
  });
});
