/*global sinon*/
var Errors = require('../../../../../src/main/js/views/dashboard/errors');

var assert = require('assert');

describe('Errors', function () {

  describe('handle ajax errors when', function () {

    var errors, spy;

    beforeEach(function () {

      spy = sinon.spy(Errors.prototype, 'displayNotification');

      errors = new Errors();
    });

    afterEach(function () {

      Errors.prototype.displayNotification.restore();
    });

    it('response status is equal to 0', function () {

      errors.$el.trigger('ajaxError', {
        status: 0
      });

      assert.equal('Connection to the server is dead / terminated, please try again', spy.firstCall.args[0]);
    });

    it('response status is equal to 401', function () {

      errors.$el.trigger('ajaxError', {
        status: 401
      });

      assert.equal('User not logged in / Session expired, please log in', spy.firstCall.args[0]);
    });

    it('response status is equal to 500', function () {

      errors.$el.trigger('ajaxError', {
        status: 500
      });

      assert.equal('Error occurred, please try again later', spy.firstCall.args[0]);
    });

    it('another response status', function () {

      errors.$el.trigger('ajaxError', {
        status: 400
      });

      assert.equal('Error occurred, please contact support team', spy.firstCall.args[0]);
    });
  });

});
