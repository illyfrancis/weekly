var ReportName = require('../../../../src/main/js/models/reportName');

var chai = require('chai');
var expect = chai.expect;

describe('ReportName', function () {

  var reportName;

  beforeEach(function () {
    reportName = new ReportName({
      'id': 'reportName'
    });
  });

  it('returns a null object when no filter value set', function () {
    var query = reportName.toQuery();
    expect(query).to.be.null;
  });

  it('returns query object when filter set', function () {
    
    reportName.set('filter', 'TRANSACTION_REPORT');
    var query = reportName.toQuery();

    expect(query).to.eql({
      'reportName': {
        '$like': 'TRANSACTION_REPORT'
      }
    });
  });
});
