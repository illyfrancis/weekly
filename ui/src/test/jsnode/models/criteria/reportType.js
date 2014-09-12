var ReportType = require('../../../../../src/main/js/models/criteria/reportType');

var chai = require('chai');
var expect = chai.expect;

describe('ReportType', function () {

  var reportType;
  var VALID_FILTER = ['A', 'B'];

  beforeEach(function () {
    reportType = new ReportType({
      'id': 'reportTypeCategory'
    });
  });

  it('sets the filter', function () {
    reportType.setFilter(VALID_FILTER);
    expect(reportType.get('filter')).to.deep.equal(VALID_FILTER);
  });

  it('initializes filter correctly', function () {
    expect(reportType.get('filter')).to.equal('');
  });

  describe('query generation', function () {

    it('returns null for non-array filter', function () {
      reportType.setFilter('A');
      expect(reportType.toQuery()).to.be.null;
    });

    it('returns null for empty array filter', function () {
      reportType.setFilter([]);
      expect(reportType.toQuery()).to.be.null;
    });

    it('returns correct query for valid filter', function () {
      reportType.setFilter(VALID_FILTER);
      expect(reportType.toQuery()).to.eql({
        'reportTypeCategory': {
          '$in': VALID_FILTER
        }
      });
    });
  });
});
