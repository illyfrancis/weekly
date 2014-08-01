var Client = require('../../../../../src/main/js/models/criteria/client');

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

describe('Client for criteria', function () {

  var client;

  beforeEach(function () {
    client = new Client({
      'id': 'clientId'
    });
  });

  describe('Filter value when set with setFilter()', function () {

    it('is null when created', function () {
      expect(client.get('filter')).is.null;
    });

    it('is of array type when set with an array', function () {
      var val = ['abc'];
      client.setFilter(val);
      expect(client.get('filter')).is.an('array');
    });

    it('is null when set with an empty array', function () {
      client.setFilter([]);
      expect(client.get('filter')).is.null;
    });

    it('is null when set with null', function () {
      client.setFilter(null);
      expect(client.get('filter')).is.null;
    });

    it('is null when set with object', function () {
      client.setFilter({a: 1});
      expect(client.get('filter')).is.null;
    });

    it('matches given array', function () {
      client.setFilter(['abc', '123']);
      expect(client.get('filter')).to.eql(['abc', '123']);
    });

    it('retains when the given array changes', function () {
      var args = ['abc', '123'];
      client.setFilter(args);
      args.pop();
      expect(client.get('filter')).to.eql(['abc', '123']);
    });

    it('triggers change event when filter set', function () {
      var spy = sinon.spy();
      client.on('change', spy);

      client.setFilter(['abc']);

      sinon.assert.calledOnce(spy);
    });

    it('should not change when set with the same value', function () {
      var spy = sinon.spy();
      client.on('change', spy);

      client.setFilter(['abc', 'xyz']);
      client.setFilter(['abc', 'xyz']);

      sinon.assert.calledOnce(spy);
    });

    it('should change when set with the different values', function () {
      var spy = sinon.spy();
      client.on('change', spy);

      client.setFilter(['abc']);
      client.setFilter(['123']);

      sinon.assert.calledTwice(spy);
    });

  });

  describe('Query generation', function () {

    it('returns null when created', function () {
      expect(client.toQuery()).is.null;
    });

    it('returns a single criteria when filtered with a single value', function () {
      client.setFilter(['abc']);
      var expected = {
        'clientId': {'$eq': 'abc'}
      };
      expect(client.toQuery()).to.eql(expected);
    });

    it('returns a criteria with $or when filtered with multiple value', function () {
      client.setFilter(['abc', 'xyz', '123']);
      var expected = {
        '$or': [
          {'clientId': {'$eq': 'abc'}},
          {'clientId': {'$eq': 'xyz'}},
          {'clientId': {'$eq': '123'}}
        ]
      };
      expect(client.toQuery()).to.eql(expected);
    });

  });

});
