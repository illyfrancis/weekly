var ReportNameFilter = require('./reportNameFilter');
var ReportTypeFilter = require('./reportTypeFilter');
var UserFilter = require('./userFilter');

var FilterManager = {
  reportName: ReportNameFilter,
  reportType: ReportTypeFilter,
  createdBy: UserFilter,
  reportOwner: UserFilter,
  modifiedBy: UserFilter
};

module.exports = FilterManager;
