'use strict';

var _ = require('lodash');
var chai = require('chai');
var expect = chai.expect;
chai.use(require('chai-as-promised'));

var api = require('../api');

var filter = {
  agency_id: 1
};

var collectionKeys = [
  'type',
  'features'
];

describe('API - Get Routes Geometry', function() {

  it('should return all agency routes feature collection geojson with a promise', function() {
    return expect(api.getRoutesGeo(filter))
      .to.eventually.be.an('object')
      .and.to.have.keys(collectionKeys);
  });

  it('should return all agency routes feature collection geojson with a callback', function(done) {
    api.getRoutesGeo(filter, function(err, data) {
      expect(data).to.be.an('object');
      expect(data).to.have.keys(collectionKeys);
      expect(data.features).to.be.instanceof(Array)
        .and.to.have.length.above(0);
      done(err);
    });
  });

  it('should return empty when passed an empty object', function() {
    return expect(api.getRoutesGeo({}))
      .to.eventually.be.empty;
  });
});
