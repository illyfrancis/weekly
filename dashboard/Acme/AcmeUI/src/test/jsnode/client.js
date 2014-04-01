var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var Client = require('../../../src/main/js/models/client');

describe('Client', function () {
  describe('# new Client()', function () {
    it('should have default name', function () {
      var client = new Client();
      assert.equal('ABC Co.', client.get('name'));
    });
    it('should do something', function () {
      expect(true).to.equal(true);
      assert.equal(true, true);
    });
  });
});
