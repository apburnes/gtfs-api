'use strict';

var _ = require('lodash');
var chai = require('chai');
var expect = chai.expect;

chai.use(require('chai-as-promised'));

var api = require('../api');

var filter = {
  agency_id: 1,
  route_id: '1'
};

var route = _.find(require('./fixtures/routes'), {
  route_id: filter.route_id
});

describe('Get Route API Query', function() {

  it('should return routes when passed a valid filter object with a promise', function() {
    return expect(api.getRoute(filter))
      .to.eventually.be.an('object')
      .and.to.deep.equal(route);
  });

  it('should return routes when passed a valid filter object with a callback', function(done) {
    api.getRoute(filter, function(err, data) {
      expect(data).to.be.an('object');
      expect(data).to.deep.equal(route);
      done(err);
    });
  });

  it('should return an empty array when passed a filter with a non-existent agency_id', function() {
    var notAgency = _.assign({}, filter, {
      agency_id: 999
    });

    return expect(api.getRoute(notAgency))
      .to.eventually.be.an('object')
      .and.to.deep.equal({});
  });

  it('should return an empty array when pass a filter with a non-existent route_id', function() {
    var notRoute = _.assign({}, filter, {
      route_id: 'not route'
    });

    return expect(api.getRoute(notRoute))
      .to.eventually.be.an('object')
      .and.to.deep.equal({});
  });
});
