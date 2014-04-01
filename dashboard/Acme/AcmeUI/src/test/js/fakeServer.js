/*global sinon*/
var jQuery = require('jquery');
var assert = require('assert');

function getTodos(listId, callback) {
  jQuery.ajax({
    url: '/todo/' + listId + '/items',
    success: function (data) {
      callback(null, data);
    }
  });
}

describe('#browser: Fake test', function () {
  describe('with stub', function () {

    afterEach(function () {
      jQuery.ajax.restore();
    });

    it('make a GET request for todo items', function () {
      sinon.stub(jQuery, 'ajax');
      getTodos(42, sinon.spy());
      assert.equal(jQuery.ajax.calledWithMatch({url: '/todo/42/items'}), true);
    });
  });
});
