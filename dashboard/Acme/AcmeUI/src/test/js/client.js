var assert = require('assert');
var Client = require('../../../src/main/js/models/client');

describe('Client', function () {
  describe('# new Client()', function () {
    it('should have default name', function () {
      var client = new Client();
      assert.equal('ABC Co.', client.get('name'));
    });
    it('should do something', function () {
      assert.equal(true, true);
    });
  });
});
