'use strict';

var chai = require('chai');
var expect = chai.expect;

chai.use(require('chai-as-promised'));

var api = require('../api');

var filter = {
  agency_id: 1
};

var collectionKeys = [
  'type',
  'features',
];

describe('API - Get Stops Geometry', function() {

  it('should return stops when passed a valid filter with a promise', function() {
    return expect(api.getStopsGeo(filter))
      .to.eventually.be.an('object')
      .and.to.have.keys(collectionKeys);
  });

  it('should return stops when passed a valid filter with a callback', function(done) {
    api.getStopsGeo(filter, function(err, data) {
      expect(data).to.be.an('object');
      expect(data).to.have.keys(collectionKeys);
      expect(data.features).to.be.instanceof(Array);
      done();
    });
  });

  it('should return empty when passed not an agency_id', function() {
    var notAgency = {
      agency_id: 0
    };

    return expect(api.getStopsGeo(notAgency))
      .to.eventually.be.empty;
  });
});
