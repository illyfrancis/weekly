var Backbone = require('backbone');

var Schedule = Backbone.Model.extend({
  defaults: {
    clientId: '',
    clientName: '',
    createdById: '',
    createdByName: '',
    distributionFormat: '',
    distributionList: '',
    frequency: '',
    lastExecution: '',
    lastReportOutputId: '',
    modifiedById: '',
    modifiedByName: '',
    reportCategory: '',
    reportCategoryId: '',
    reportExpiry: '',
    reportName: '',
    reportOwnerId: '',
    reportOwnerName: '',
    reportType: '',
    reportTypeCode: '',
    trigger: ''
  }
});

module.exports = Schedule;
