var Backbone = require('backbone');
var _ = require('underscore');

var Filter = Backbone.Model.extend({
  defaults: {
    name: ''
  },

  initialize: function (attrs, options) {
    if (!_.isUndefined(options)) {
      if (_.isFunction(options.validate)) {
        this.validate = options.validate;
      }
    }
  },

  validate: function (attrs, options) {}
});


var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

describe('Filter created with validation that always returns an error', function () {
  var filter;

  beforeEach(function () {
    filter = new Filter({
      name: 'buz'
    }, {
      validate: function (attrs, options) {
        return 'some sort of error';
      }
    });
  });

  it('should have specified name', function () {
    expect(filter.get('name')).to.equal('buz');
  });

  it('should have validate function', function () {
    expect(filter.validate).to.exist;
  });

  describe('When validating', function () {

    it('should return error message', function () {
      var msg = filter.validate();
      expect(msg).to.equal('some sort of error');
    });

    it('should have validationError with error message', function () {
      var isValid = filter.isValid();
      expect(isValid).to.be.false;
      expect(filter.validationError).to.equal('some sort of error');
    });

    it('should trigger "invalid" event', function () {
      var invalid = false;
      filter.on('invalid', function (model, error) {
        invalid = true;
      });
      filter.isValid();
      expect(invalid).to.be.true;
    });
  })

});
