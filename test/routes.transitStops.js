'use strict';

var chai = require('chai');
var expect = chai.expect;

var server = require('../index');

describe('Routes - Transit Stops', function() {

  describe('GET - Stops', function() {
    it('should return a status code 200 with a valid request', function(done) {
      var options = {
        url: '/agency/1/stops/geo'
      };

      server.inject(options, function(res) {
        expect(res.statusCode).to.be.equal(200);
        expect(JSON.parse(res.payload)).to.be.an('object');
        done();
      });
    });

    it('should return a bad request 400 with an invalid agency_id data type', function(done) {
      var options = {
        url: '/agency/bad/stops/geo'
      };

      server.inject(options, function(res) {
        expect(res.statusCode).to.be.equal(400);
        done();
      });
    });

    it('should return a not found 404 with an invalid path', function(done) {
      var options = {
        url: '/bad'
      };

      server.inject(options, function(res) {
        expect(res.statusCode).to.be.equal(404);
        done();
      });
    });
  });

  describe('GET - Stop', function() {
    it('should return a status code 200 with a valid request', function(done) {
      var options = {
        url: '/agency/1/stop/1950/geo'
      };

      server.inject(options, function(res) {
        expect(res.statusCode).to.be.equal(200);
        done();
      });
    });

    it('should return a bad request 400 with an invalid agency_id data type', function(done) {
      var options = {
        url: 'agency/bad/stop/1950/geo'
      };

      server.inject(options, function(res) {
        expect(res.statusCode).to.be.equal(400);
        done();
      });
    });

    it('should return a bad request 400 with an invalid stop_id data type', function(done) {
      var options = {
        url: 'agency/1/stop/bad/geo'
      };

      server.inject(options, function(res) {
        expect(res.statusCode).to.be.equal(400);
        done();
      });
    });
  });
});
