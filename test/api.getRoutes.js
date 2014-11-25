'use strict';

var chai = require('chai');
var expect = chai.expect;

chai.use(require('chai-as-promised'));

var api = require('../api');

var filter = {
  agency_id: 1
};

var notIdFilter = {
  agency_id: 999
};

var routes = require('./fixtures/routes');

describe('Get Routes API Query', function() {

  it('should return routes when passed a valid filter object with a promise', function() {
    return expect(api.getRoutes(filter))
      .to.eventually.be.an('array')
      .and.to.deep.include.members(routes);
  });

  it('should return routes when passed a valid filter object with a callback', function(done) {
    api.getRoutes(filter, function(err, data) {
      expect(data).to.be.an('array');
      expect(data).to.deep.include.members(routes);
      done(err);
    });
  });

  it('should return an empty array when passed a filter with not an agency_id', function() {
    return expect(api.getRoutes(notIdFilter))
      .to.eventually.be.an('array')
      .and.to.deep.equal([]);
  });

  it('should return an empty array when passed invalid filter data type', function() {
    return expect(api.getRoutes([]))
      .to.eventually.be.an('array')
      .and.to.deep.equal([]);
  });
});
