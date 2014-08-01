var Frequency = require('../../../../../src/main/js/models/criteria/frequency');

var chai = require('chai');
var expect = chai.expect;

describe('Frequency', function () {

  var frequency;

  beforeEach(function () {
    frequency = new Frequency({
      'id': 'frequency'
    });
  });

  it('is able to convert selected options to uppercase', function () {
    var converted = frequency.uppercase(['aAa', 'AaA']);
    expect(converted).to.be.eql(['AAA', 'AAA']);
  });

  describe('query generation', function () {

    it('returns a null object when no filter value set', function () {
      var query = frequency.toQuery();
      expect(query).to.be.null;
    });

    it('returns a null object when filter is not array', function () {
      frequency.setFilter('not array');
      var query = frequency.toQuery();
      expect(query).to.be.null;
    });

    it('returns a null object when filter is empty array', function () {
      frequency.setFilter([]);
      var query = frequency.toQuery();
      expect(query).to.be.null;
    });

    it('returns query object when filter set', function () {
      frequency.setFilter(['daily', 'weekly']);
      var query = frequency.toQuery();

      expect(query).to.eql({
        'frequency': {
          '$in': ['DAILY', 'WEEKLY']
        }
      });
    });
  });
});
