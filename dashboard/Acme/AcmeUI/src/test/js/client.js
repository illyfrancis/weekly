var assert = require('assert');
var Client = require('../../../src/main/js/models/client');
var _ = require('underscore');

describe('Client', function () {
  describe('# new Client()', function () {
    it('should have default name', function () {
      var client = new Client();
      assert.equal('ABC Co.', client.get('name'));
    });
    it('should do something', function () {
      console.log('hellooooo : ' + _.values(module));
      assert.equal(true, true);
    });
  });
});
