'use strict';

var chai = require('chai');
var expect = chai.expect;

var path = require('path');
var plugins = path.join(__dirname, '../');

var Glue = require('glue');
var manifest = require('../manifest');

describe('Routes - Transit Stops', function() {

  describe('GET - Stops', function() {
    it('should return a status code 200 with a valid request', function(done) {
      var options = {
        url: '/agency/1/stops/geo'
      };

      Glue.compose(manifest, { relativeTo: plugins }, function(err, server) {
        server.inject(options, function(res) {
          expect(res.statusCode).to.be.equal(200);
          expect(JSON.parse(res.payload)).to.be.an('object');
          done();
        });
      });
    });

    it('should return a bad request 400 with an invalid agency_id data type', function(done) {
      var options = {
        url: '/agency/bad/stops/geo'
      };

      Glue.compose(manifest, { relativeTo: plugins }, function(err, server) {
        server.inject(options, function(res) {
          expect(res.statusCode).to.be.equal(400);
          done();
        });
      });
    });

    it('should return a not found 404 with an invalid path', function(done) {
      var options = {
        url: '/bad'
      };

      Glue.compose(manifest, { relativeTo: plugins }, function(err, server) {
        server.inject(options, function(res) {
          expect(res.statusCode).to.be.equal(404);
          done();
        });
      });
    });
  });

  describe('GET - Stop', function() {
    it('should return a status code 200 with a valid request', function(done) {
      var options = {
        url: '/agency/1/stop/1950/geo'
      };

      Glue.compose(manifest, { relativeTo: plugins }, function(err, server) {
        server.inject(options, function(res) {
          expect(res.statusCode).to.be.equal(200);
          done();
        });
      });
    });

    it('should return a bad request 400 with an invalid agency_id data type', function(done) {
      var options = {
        url: 'agency/bad/stop/1950/geo'
      };

      Glue.compose(manifest, { relativeTo: plugins }, function(err, server) {
        server.inject(options, function(res) {
          expect(res.statusCode).to.be.equal(400);
          done();
        });
      });
    });

    it('should return a bad request 400 with an invalid stop_id data type', function(done) {
      var options = {
        url: 'agency/1/stop/bad/geo'
      };

      Glue.compose(manifest, { relativeTo: plugins }, function(err, server) {
        server.inject(options, function(res) {
          expect(res.statusCode).to.be.equal(400);
          done();
        });
      });
    });
  });
});
