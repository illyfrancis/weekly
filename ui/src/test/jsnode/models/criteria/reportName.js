var ReportName = require('../../../../../src/main/js/models/criteria/reportName');

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

describe('ReportName', function () {

  var reportName;

  beforeEach(function () {
    reportName = new ReportName({
      'id': 'reportName'
    });
  });

  describe('Setting filter', function () {

    it('has no validation error and set the filter ', function () {
      reportName.setFilter('TRANSACT');

      expect(reportName.validationError).to.be.null;
      expect(reportName.get('filter')).to.equal('TRANSACT');
    });

    it('fails validation when filter value is too long', function () {
      var LONG_FILTER_VAL = 'Too long a value';
      reportName.setFilter(LONG_FILTER_VAL);

      expect(reportName.validationError).to.equal('too long');
    });

    it('triggers "change" event when set with setFilter', function () {
      var spy = sinon.spy();
      reportName.on('change', spy);
      reportName.setFilter('TRANSACT');

      sinon.assert.calledOnce(spy); // or expect(spy.called).is.false;
    });

  });

  describe('Query generation', function () {

    it('returns a null object when no filter value set', function () {
      var query = reportName.toQuery();
      expect(query).to.be.null;
    });

    it('returns query object when filter set', function () {
      reportName.setFilter('TRANSACT');
      var query = reportName.toQuery();

      expect(query).to.eql({
        'reportName': {
          '$startsWith': 'TRANSACT'
        }
      });
    });

  });

});
