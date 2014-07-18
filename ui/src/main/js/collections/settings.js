var Client = require('../models/client');
var CreatedBy = require('../models/criterionUser');
var DistributionFormat = require('../models/distributionFormat');
var DistributionList = require('../models/distributionList');
var Frequency = require('../models/frequency');
var LastExecution = require('../models/lastExecution');
var ModifiedBy = require('../models/criterionUser');
var ReportCategory = require('../models/reportCategory');
var ReportExpiry = require('../models/reportExpiry');
var ReportName = require('../models/reportName');
var ReportOwner = require('../models/criterionUser');
var ReportType = require('../models/reportType');
var Trigger = require('../models/trigger');

var settings = {
  defaults: function () {
    return [
      new Client({
        'id': 'client',
        'sortWith': 'clientId',
        'filterWith': 'clientId',
        'title': 'Client',
        'displayOrder': 11,
        'groupOrder': 1
      }),
      new CreatedBy({
        'id': 'createdBy',
        'sortWith': 'createdById',
        'filterWith': 'createdById',
        'title': 'Created by',
        'displayOrder': 3
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
        'sortWith': 'modifiedById',
        'filterWith': 'modifiedById',
        'title': 'Modified by',
        'displayOrder': 5
      }),
      new ReportCategory({
        'id': 'reportCategory',
        'sortWith': 'reportCategory',
        'filterWith': 'reportCategoryId',
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
        'sortWith': 'reportOwnerId',
        'title': 'Report owner',
        'displayOrder': 4
      }),
      new ReportType({
        'id': 'reportType',
        'sortWith': 'reportType',
        'filterWith': 'reportTypeCode',
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
