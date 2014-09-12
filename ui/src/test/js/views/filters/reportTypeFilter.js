var ReportTypeFilter = require('../../../../../src/main/js/views/filters/reportTypeFilter');
var assert = require('assert');

describe('ReportTypeFilter', function () {
  
  var reportTypeFilter;
  var REPORT_CATEGORY_TYPES = ['A', 'B', 'C'];
  
  beforeEach(function () {
    
    reportTypeFilter = new ReportTypeFilter();
    
  });
    
  it('correctly handles category selection when not all category types are currently selected', function () {
    
  	var currentSelection = ['A', 'B', 'D'];
  	var newSelection = reportTypeFilter.getNewSelection(currentSelection, REPORT_CATEGORY_TYPES);

    assert.deepEqual(newSelection, ['A', 'B', 'C', 'D']);
  });

  it('correctly handles category deselection when all category types are currently selected', function () {
    
  	var currentSelection = ['A', 'B', 'C', 'D'];
  	var newSelection = reportTypeFilter.getNewSelection(currentSelection, REPORT_CATEGORY_TYPES);

    assert.deepEqual(newSelection, ['D']);
  });
});