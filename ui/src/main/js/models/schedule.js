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
    modifiedById: '',
    modifiedByName: '',
    reportExpiry: '',
    reportName: '',
    reportOwner: '',
    reportType: '',
    trigger: ''
  }
});

module.exports = Schedule;
