'use strict';

var chai = require('chai');
var expect = chai.expect;

var Hapi = require('hapi');
var server = new Hapi.Server('localhost', 8080);

server.pack.register(require('../routes/transitRoutes'), function(err) {
  if (err) {
    console.log(err);
  }
});

describe('Route - Transit Routes', function() {

  it('should return a success 200 with request for route geojson', function(done) {
    var options = {
      url: '/agency/1/route/17/geo'
    };

    server.inject(options, function(res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return a bad request 400 with invalid agency_id data type for route geojson', function(done) {
    var options = {
      url: '/agency/bad/route/17/geo'
    };

    server.inject(options, function(res) {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });

  it('should return a success 200 with request for route', function(done) {
    var options = {
      url: '/agency/1/route/17'
    };

    server.inject(options, function(res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return a bad request 400 with invalid agency_id data type for route', function(done) {
    var options = {
      url: '/agency/bad/route/17'
    };

    server.inject(options, function(res) {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });

  it('should return a success 200 with request for routes geojson', function(done) {
    var options = {
      url: '/agency/1/routes/geo'
    };

    server.inject(options, function(res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return a bad request 400 with invalid agency_id data type for routes geojson', function(done) {
    var options = {
      url: '/agency/bad/routes/geo'
    };

    server.inject(options, function(res) {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });

  it('should return a success 200 with request for routes', function(done) {
    var options = {
      url: '/agency/1/routes'
    };

    server.inject(options, function(res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return a bad request 400 with invalid agency_id data type request for routes', function(done) {
    var options = {
      url: '/agency/bad/routes'
    };

    server.inject(options, function(res) {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });

  it('should return 404 with request to invalid route path', function(done) {
    var options = {
      url: '/'
    };

    server.inject(options, function(res) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
