var DateRange = require('../../../../../src/main/js/models/criteria/dateRange');

var chai = require('chai');
var expect = chai.expect;
var moment = require('moment');

describe('DateRange', function () {

  var dateRange;
  var fromDate = new Date(1);
  var toDate = new Date(2);

  beforeEach(function () {
    dateRange = new DateRange({
      'id': 'dateRangeField'
    });
  });

  it('parses date values in response correctly', function () {

    var response = {
      filter: {
        from: '1970-01-01T00:00:00.001Z',
        to: '1970-01-01T00:00:00.002Z'
      }
    };

    var parsedResponse = dateRange.parse(response);

    expect(parsedResponse).to.be.deep.equal({
      filter: {
        from: fromDate,
        to: toDate
      }
    });
  });

  describe('Setting filter', function () {

    it('has no validation error and sets the filter when dates are correct', function () {

      dateRange.setFilter({
        from: fromDate,
        to: toDate
      });

      expect(dateRange.validationError).to.be.null;
      expect(dateRange.get('filter')).to.be.deep.equal({
        from: fromDate,
        to: toDate
      });
    });

    it('has no validation error and set the filter when both dates are null', function () {

      dateRange.setFilter({
        from: null,
        to: null
      });

      expect(dateRange.validationError).to.be.null;
      expect(dateRange.get('filter')).to.be.deep.equal({
        from: null,
        to: null
      });
    });

    it('fails validation when *from* date is after *to* date', function () {

      dateRange.setFilter({
        from: new Date(3),
        to: toDate
      });

      expect(dateRange.validationError).to.equal('From date can\'t be after the To date');
    });

    it('fails validation when only *to* date is set', function () {

      dateRange.setFilter({
        from: null,
        to: toDate
      });

      expect(dateRange.validationError).to.equal('both dates are required');
    });

    it('fails validation when only *from* date is set', function () {

      dateRange.setFilter({
        from: fromDate,
        to: null
      });

      expect(dateRange.validationError).to.equal('both dates are required');
    });
  });

  describe('Query generation', function () {

    it('returns a null object when no filter value set', function () {
      var query = dateRange.toQuery();
      expect(query).to.be.null;
    });

    it('returns correct query object when filter set', function () {

      dateRange.setFilter({
        from: fromDate,
        to: toDate
      });

      var query = dateRange.toQuery();

      expect(query).to.be.deep.equal({
        '$and': [{
          'dateRangeField': {
            '$gte': {
              '$date': moment(fromDate).startOf('day').utc().format('YYYY-MM-DDTHH:mm:ss[Z]')
            }
          }
        }, {
          'dateRangeField': {
            '$lte': {
              '$date': moment(toDate).endOf('day').utc().format('YYYY-MM-DDTHH:mm:ss[Z]')
            }
          }
        }]
      });
    });
  });
});
