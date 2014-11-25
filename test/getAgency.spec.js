'use strict';

var chai = require('chai');
var expect = chai.expect;

chai.use(require('chai-as-promised'));

var api = require('../api');

var id = 1;
var notId = 999;
var invalidId = {};

var agency = {
  agency_name: 'Valley Metro',
  agency_url: 'http://www.valleymetro.org/',
  agency_timezone: 'America/Phoenix',
  agency_lang: 'en',
  agency_phone: '(602)253-5000',
  id: 1
};

describe('Get Agency Query', function(){

  it('should return an agency when passed a valid agency id integer with a promise', function(){
    return expect(api.getAgency(id))
      .to.eventually.be.an('object')
      .and.to.deep.equal(agency);
  });

  it('should return an agency when pass a valid agency integer with a callback', function(done){
    api.getAgency(id, function(err, data){
      expect(data).to.be.an('object');
      expect(data).to.deep.equal(agency);
      done(err);
    });
  });

  it('should return an empty object when passed an agency id integer that is not found', function(){
    return expect(api.getAgency(notId))
      .to.eventually.be.an('object')
      .and.to.deep.equal({});
  });

  it('should reject with an error when passed an invalid data type', function(){
    return expect(api.getAgency(invalidId))
      .to.eventually.be.rejectedWith(Error);
  });
});
