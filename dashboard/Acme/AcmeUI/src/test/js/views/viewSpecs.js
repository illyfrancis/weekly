var assert = require('assert');
var Client = require('../../../main/js/models/client');

describe('ClientView', function () {
  describe('# dummy test', function () {
    it('should have default name', function () {
      var client = new Client();
      assert.equal('ABC Co.', client.get('name'));
    });
  });
});
