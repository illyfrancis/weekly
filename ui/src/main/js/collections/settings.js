var Client = require('../models/criteria/client');
var CreatedBy = require('../models/criteria/user');
var DistributionFormat = require('../models/criteria/distributionFormat');
var DistributionList = require('../models/criteria/distributionList');
var Frequency = require('../models/criteria/frequency');
var LastExecution = require('../models/criteria/lastExecution');
var ModifiedBy = require('../models/criteria/user');
var ReportCategory = require('../models/criteria/reportCategory');
var ReportExpiry = require('../models/criteria/reportExpiry');
var ReportName = require('../models/criteria/reportName');
var ReportOwner = require('../models/criteria/reportOwner');
var ReportType = require('../models/criteria/reportType');
var Trigger = require('../models/criteria/trigger');

var settings = {
  defaults: function () {
    return [
      new Client({
        'id': 'clients',
        'filterWith': 'clientId',
        'sortWith': 'clientId',
        'title': 'Clients',
        'displayOrder': 11,
        'groupOrder': 1
      }),
      new CreatedBy({
        'id': 'createdBy',
        'filterWith': 'createdById',
        'sortWith': 'createdByName',
        'title': 'Created by',
        'displayOrder': 4
      }),
      new DistributionFormat({
        'id': 'distributionFormat',
        'title': 'Distribution format',
        'displayOrder': 10
      }),
      new DistributionList({
        'id': 'distributionList',
        'title': 'Distribution list',
        'displayOrder': 8
      }),
      new Frequency({
        'id': 'frequency',
        'title': 'Frequency',
        'displayOrder': 6
      }),
      new LastExecution({
        'id': 'lastExecution',
        'title': 'Last execution',
        'displayOrder': 9
      }),
      new ModifiedBy({
        'id': 'modifiedBy',
        'filterWith': 'modifiedById',
        'sortWith': 'modifiedByName',
        'title': 'Modified by',
        'displayOrder': 5
      }),
      new ReportCategory({
        'id': 'reportCategory',
        'filterWith': 'reportCategoryId',
        'sortWith': 'reportCategory',
        'title': 'Report category',
        'displayOrder': 1
      }),
      new ReportExpiry({
        'id': 'reportExpiry',
        'title': 'Report expiry',
        'displayOrder': 12
      }),
      new ReportName({
        'id': 'reportName',
        'title': 'Report name',
        'displayOrder': 0
      }),
      new ReportOwner({
        'id': 'reportOwner',
        'filterWith': 'reportOwnerId',
        'sortWith': 'reportOwnerName',
        'title': 'Report owner',
        'displayOrder': 3
      }),
      new ReportType({
        'id': 'reportType',
        'filterWith': 'reportTypeCode',
        'sortWith': 'reportType',
        'title': 'Report type',
        'displayOrder': 2
      }),
      new Trigger({
        'id': 'trigger',
        'title': 'Trigger',
        'displayOrder': 7
      })
    ];
  }
};

module.exports = settings;
