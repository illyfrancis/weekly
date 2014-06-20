var Client = require('../models/client');
var CreatedBy = require('../models/criterionUser');
var DistributionFormat = require('../models/distributionFormat');
var DistributionList = require('../models/distributionList');
var Frequency = require('../models/frequency');
var LastExecution = require('../models/lastExecution');
var ModifiedBy = require('../models/criterionUser');
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
        'title': 'Client',
        'displayOrder': 10,
        'groupOrder': 1
      }),
      new CreatedBy({
        'id': 'createdBy',
        'title': 'Created by',
        'displayOrder': 2
      }),
      new DistributionFormat({
        'id': 'distributionFormat',
        'title': 'Distribution format',
        'displayOrder': 9
      }),
      new DistributionList({
        'id': 'distributionList',
        'title': 'Distribution list',
        'displayOrder': 7
      }),
      new Frequency({
        'id': 'frequency',
        'title': 'Frequency',
        'displayOrder': 5
      }),
      new LastExecution({
        'id': 'lastExecution',
        'title': 'Last execution',
        'displayOrder': 8
      }),
      new ModifiedBy({
        'id': 'modifiedBy',
        'title': 'Modified by',
        'displayOrder': 4
      }),
      new ReportExpiry({
        'id': 'reportExpiry',
        'title': 'Report expiry',
        'displayOrder': 11
      }),
      new ReportName({
        'id': 'reportName',
        'title': 'Report name',
        'displayOrder': 0
      }),
      new ReportOwner({
        'id': 'reportOwner',
        'title': 'Report owner',
        'displayOrder': 3
      }),
      new ReportType({
        'id': 'reportType',
        'title': 'Report type',
        'displayOrder': 1
      }),
      new Trigger({
        'id': 'trigger',
        'title': 'Trigger',
        'displayOrder': 6
      })
    ];
  }
};

module.exports = settings;
