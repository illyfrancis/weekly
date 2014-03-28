var assert = require('assert');
var Client = require('../../../src/main/js/models/client');
// var sinon = require('sinon');

describe('Client', function () {
  describe('# new Client()', function () {
    it('should have default name', function () {
      var client = new Client();
      assert.equal('ABC Co.', client.get('name'));
    });
    it('should be stubbing', function () {
      var callback = sinon.stub().returns(42);
      assert.equal(42, callback());
    });
    it('should do something', function () {
      assert.equal(true, true);
    });
  });
});
