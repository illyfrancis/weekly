/*global sinon*/
var ReportName = require('../../../../../src/main/js/models/criteria/reportName');
var ReportNameFilter = require('../../../../../src/main/js/views/filters/reportNameFilter');

var assert = require('assert');

describe('ReportNameFilter', function () {

  var filter, reportName;

  beforeEach(function () {
    // spy on filter - need to restore after each test
    sinon.spy(ReportNameFilter.prototype, 'render');
    sinon.spy(ReportNameFilter.prototype, 'showError');
    sinon.spy(ReportNameFilter.prototype, 'clearError');

    reportName = new ReportName({
      'id': 'reportName',
      'title': 'Report Name'
    });

    filter = new ReportNameFilter({
      model: reportName
    });
  });

  afterEach(function () {
    // restore
    ReportNameFilter.prototype.render.restore();
    ReportNameFilter.prototype.showError.restore();
    ReportNameFilter.prototype.clearError.restore();
  });

  it('renders when filter changes', function () {
    reportName.trigger('change:filter');

    assert(filter.render.calledOnce);
  });

  it('shows error when filter is invalid', function () {
    filter.render();
    reportName.trigger('invalid', reportName, 'bad report name');

    assert(filter.showError.calledOnce);
  });

  it('copies filter value when input lose focus', function () {
    sinon.spy(reportName, 'setFilter');

    filter.render();
    filter.$('input').blur();

    assert(reportName.setFilter.calledOnce);
  });

  it('clears error on keydown when there is an error', function () {
    filter.render();
    filter.hasError = true;
    filter.$('input').keydown();

    assert(filter.clearError.calledOnce);
  });

  it('does not clear error on keydown if there is no error', function () {
    filter.render();
    filter.hasError = false;
    filter.$('input').keydown();

    assert(filter.clearError.notCalled);
  });

});
