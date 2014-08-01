var Trigger = require('../../../../../src/main/js/models/criteria/trigger');

var chai = require('chai');
var expect = chai.expect;

describe('Trigger', function () {

  var trigger;

  beforeEach(function () {
    trigger = new Trigger({
      'id': 'trigger'
    });
  });

  it('is able to convert selected options to uppercase', function () {
    var converted = trigger.uppercase(['aAa', 'AaA']);
    expect(converted).to.be.eql(['AAA', 'AAA']);
  });

  describe('query generation', function () {

    it('returns a null object when no filter value set', function () {
      var query = trigger.toQuery();
      expect(query).to.be.null;
    });

    it('returns a null object when filter is not array', function () {
      trigger.setFilter('not array');
      var query = trigger.toQuery();
      expect(query).to.be.null;
    });

    it('returns a null object when filter is empty array', function () {
      trigger.setFilter([]);
      var query = trigger.toQuery();
      expect(query).to.be.null;
    });

    it('returns query object when filter set', function () {
      trigger.setFilter(['time', 'event']);
      var query = trigger.toQuery();

      expect(query).to.eql({
        'trigger': {
          '$in': ['TIME', 'EVENT']
        }
      });
    });
  });
});
