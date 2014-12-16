'use strict';

var chai = require('chai');
var expect = chai.expect;

chai.use(require('chai-as-promised'));

var api = require('../api');

var filter = {
  agency_id: 1,
  stop_id: 1950
};

var collectionKeys = [
  'type',
  'features',
];

describe('API - Stop Geometry', function() {

  it('should return a stop when passed a valid filter with a promise', function() {
    return expect(api.getStopGeo(filter))
      .to.eventually.be.an('object');
  });

  it('should return a stop when passed a valid filter with a callback', function(done) {
    api.getStopGeo(filter, function(err, data) {
      expect(data).to.be.an('object');
      expect(data).to.have.keys(collectionKeys);
      expect(data.features).to.be.instanceof(Array);
      expect(data.features).to.be.length(1);
      done();
    });
  });

  it('should return empty when passed not agency_id', function() {
    var notAgency = {
      agency_id: 0,
      stop_id: 1950
    };

    return expect(api.getStopGeo(notAgency))
      .to.eventually.be.empty;
  });

  it('should return empty when passed not stop_id', function() {
    var notStop = {
      agency_id: 1,
      stop_id: 999999999
    };

    return expect(api.getStopGeo(notStop))
      .to.eventually.be.empty;
  });

  it('should return error when passed an invalid agency_id data type', function() {
    var invalidFilter = {
      agency_id: 'bad',
      stop_id: 1950
    };

    return expect(api.getStopGeo(invalidFilter))
      .to.eventually.be.rejectedWith(Error);
  });
});
