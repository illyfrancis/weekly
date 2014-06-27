var ReportNameFilter = require('./reportNameFilter');
var ReportTypeFilter = require('./reportTypeFilter');
var UserFilter = require('./userFilter');
var UserLookupFilter = require('./userLookupFilter');

var FilterManager = {
  reportName: ReportNameFilter,
  reportType: ReportTypeFilter,
  createdBy: UserFilter,
  reportOwner: UserLookupFilter,
  modifiedBy: UserLookupFilter
};

module.exports = FilterManager;
