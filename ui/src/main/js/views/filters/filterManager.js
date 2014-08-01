var ClientsFilter = require('./clientsFilter');
var DistributionListFilter = require('./distributionListFilter');
var ReportNameFilter = require('./reportNameFilter');
var ReportTypeFilter = require('./reportTypeFilter');
var UserFilter = require('./userFilter');
var UserLookupFilter = require('./userLookupFilter');
var FrequencyFilter = require('./frequencyFilter');
var TriggerFilter = require('./triggerFilter');
var DistributionFormatFilter = require('./distributionFormatFilter');

var FilterManager = {
  clients: ClientsFilter,
  createdBy: UserFilter,
  distributionList: DistributionListFilter,
  modifiedBy: UserFilter,
  reportName: ReportNameFilter,
  reportOwner: UserLookupFilter,
  reportType: ReportTypeFilter,
  frequency: FrequencyFilter,
  trigger: TriggerFilter,
  distributionFormat: DistributionFormatFilter
};

module.exports = FilterManager;
