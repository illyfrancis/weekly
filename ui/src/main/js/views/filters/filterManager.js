var DateRangeFilter = require('./dateRangeFilter');
var DistributionFormatFilter = require('./distributionFormatFilter');
var DistributionListFilter = require('./distributionListFilter');
var FrequencyFilter = require('./frequencyFilter');
var ReportNameFilter = require('./reportNameFilter');
var ReportTypeFilter = require('./reportTypeFilter');
var TriggerFilter = require('./triggerFilter');
var UserFilter = require('./userFilter');
var UserLookupFilter = require('./userLookupFilter');

var FilterManager = {
  createdBy: UserFilter,
  distributionFormat: DistributionFormatFilter,
  distributionList: DistributionListFilter,
  frequency: FrequencyFilter,
  lastExecution: DateRangeFilter,
  modifiedBy: UserFilter,
  reportExpiry: DateRangeFilter,
  reportName: ReportNameFilter,
  reportOwner: UserLookupFilter,
  reportType: ReportTypeFilter,
  trigger: TriggerFilter
};

module.exports = FilterManager;
