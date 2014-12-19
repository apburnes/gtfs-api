'use strict';

var chai = require('chai');
var expect = chai.expect;

var path = require('path');
var plugins = path.join(__dirname, '../');

var Glue = require('glue');
var manifest = require('../manifest');

describe('Route - Transit Routes', function() {

  it('should return a success 200 with request for route geojson', function(done) {
    var options = {
      url: '/agency/1/route/17/geo'
    };

    Glue.compose(manifest, { relativeTo: plugins }, function(err, server) {
      server.inject(options, function(res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  it('should return a bad request 400 with invalid agency_id data type for route geojson', function(done) {
    var options = {
      url: '/agency/bad/route/17/geo'
    };

    Glue.compose(manifest, { relativeTo: plugins }, function(err, server) {
      server.inject(options, function(res) {
        expect(res.statusCode).to.equal(400);
        done();
      });
    });
  });

  it('should return a success 200 with request for route', function(done) {
    var options = {
      url: '/agency/1/route/17'
    };

    Glue.compose(manifest, { relativeTo: plugins }, function(err, server) {
      server.inject(options, function(res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  it('should return a bad request 400 with invalid agency_id data type for route', function(done) {
    var options = {
      url: '/agency/bad/route/17'
    };

    Glue.compose(manifest, { relativeTo: plugins }, function(err, server) {
      server.inject(options, function(res) {
        expect(res.statusCode).to.equal(400);
        done();
      });
    });
  });

  it('should return a success 200 with request for routes geojson', function(done) {
    var options = {
      url: '/agency/1/routes/geo'
    };

    Glue.compose(manifest, { relativeTo: plugins }, function(err, server) {
      server.inject(options, function(res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  it('should return a bad request 400 with invalid agency_id data type for routes geojson', function(done) {
    var options = {
      url: '/agency/bad/routes/geo'
    };

    Glue.compose(manifest, { relativeTo: plugins }, function(err, server) {
      server.inject(options, function(res) {
        expect(res.statusCode).to.equal(400);
        done();
      });
    });
  });

  it('should return a success 200 with request for routes', function(done) {
    var options = {
      url: '/agency/1/routes'
    };

    Glue.compose(manifest, { relativeTo: plugins }, function(err, server) {
      server.inject(options, function(res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  it('should return a bad request 400 with invalid agency_id data type request for routes', function(done) {
    var options = {
      url: '/agency/bad/routes'
    };

    Glue.compose(manifest, { relativeTo: plugins }, function(err, server) {
      server.inject(options, function(res) {
        expect(res.statusCode).to.equal(400);
        done();
      });
    });
  });

  it('should return 404 with request to invalid route path', function(done) {
    var options = {
      url: '/'
    };

    Glue.compose(manifest, { relativeTo: plugins }, function(err, server) {
      server.inject(options, function(res) {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });
});
