var assert = require('assert');
var Client = require('../../../main/js/models/client');
var ClientView = require('../../../main/js/views/clientView');

describe('ClientView', function () {
  describe('# dummy test', function () {
    it('should have default name', function () {
      var client = new Client();
      assert.equal('ABC Co.', client.get('name'));
    });
    it('should have some el value', function () {
      var clientView = new ClientView({
        model: new Client()
      });
      clientView.render();
      assert.equal(clientView.$el.text(), 'acme');
    });
  });
});
