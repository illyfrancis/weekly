var ReportNameFilter = require('./reportNameFilter');
var ReportTypeFilter = require('./reportTypeFilter');

var FilterManager = {
  reportName: ReportNameFilter,
  reportType: ReportTypeFilter
};

module.exports = FilterManager;
