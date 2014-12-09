'use strict';

var _ = require('lodash');
var chai = require('chai');
var expect = chai.expect;
chai.use(require('chai-as-promised'));

var api = require('../api');

var filter = {
  agency_id: 1,
  route_id: 1
};

var collectionKeys = [
  'type',
  'features'
];

describe('Get Route Geometry API Query', function() {

  it('should return all route feature collection geojson with a promise', function() {
    return expect(api.getRouteGeo(filter))
      .to.eventually.be.an('object')
      .and.to.have.keys(collectionKeys);
  });

  it('should return all route feature collection geojson with a callback', function(done) {
    api.getRouteGeo(filter, function(err, data) {
      expect(data).to.be.an('object');
      expect(data).to.have.keys(collectionKeys);
      expect(data.features).to.be.instanceof(Array)
        .and.to.have.length(2);
      done(err);
    });
  });

  it('should return empty when passed an invalid agency_id', function() {
    var notAgency = _.assign({}, filter, {
      agency_id: 0
    });

    return expect(api.getRouteGeo(notAgency))
      .to.eventually.be.empty;
  });

  it('should return empty when passed an invalid route_id', function() {
    var notRoute = _.assign({}, filter, {
      route_id: 99999
    });

    return expect(api.getRouteGeo(notRoute))
      .to.eventually.be.empty;
  });

  it('should return empty when passed an empty object', function() {
    return expect(api.getRouteGeo({}))
      .to.eventually.be.empty;
  });
});
