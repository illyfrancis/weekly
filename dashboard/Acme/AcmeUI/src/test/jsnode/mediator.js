var assert = require('assert');
var _ = require('underscore');
var Mediator = require('../../main/js/mediator');

describe('Mediator', function () {
  it('is a newable object', function () {
    var mediator = new Mediator();
    assert.equal(_.isObject(mediator), true);
  });
});