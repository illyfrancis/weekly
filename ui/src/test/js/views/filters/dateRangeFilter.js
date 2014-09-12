/*global sinon*/
var DateRange = require('../../../../../src/main/js/models/criteria/dateRange');
var DateRangeFilter = require('../../../../../src/main/js/views/filters/dateRangeFilter');

var assert = require('assert');

describe('DateRangeFilter', function () {

  var filter, dateRange, currentDateRange;

  beforeEach(function () {

    sinon.spy(DateRangeFilter.prototype, 'render');
    sinon.spy(DateRangeFilter.prototype, 'showError');
    sinon.spy(DateRangeFilter.prototype, 'clearError');
    sinon.spy(DateRange.prototype, 'setFilter');

    dateRange = new DateRange({
      'id': 'dateRangeField',
      'title': 'Date Range'
    });

    currentDateRange = {
      from: new Date(1),
      to: new Date(2)
    };

    filter = new DateRangeFilter({
      model: dateRange,
      currentDateRange: currentDateRange
    });
  });

  afterEach(function () {
    DateRangeFilter.prototype.render.restore();
    DateRangeFilter.prototype.showError.restore();
    DateRangeFilter.prototype.clearError.restore();
    DateRange.prototype.setFilter.restore();
  });

  it('shows error when filter is invalid', function () {

    dateRange.trigger('invalid', dateRange, 'both dates are required');
    assert(filter.showError.calledOnce);
  });

  it('clears error when model is updated', function () {

    filter.updateModel();
    assert(filter.clearError.calledOnce);
  });

  it('sets filter when model is updated', function () {

    filter.updateModel();
    assert(dateRange.setFilter.calledOnce);
  });

});
