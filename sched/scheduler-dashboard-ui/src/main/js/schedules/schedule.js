var Backbone = require('backbone');

var Schedule = Backbone.Model.extend({
  defaults: {
    clientId: "",
    clientName: "",
    createdBy: "",
    distributionFormat: "",
    distributionList: "",
    frequency: "",
    lastExecution: "",
    modifiedBy: "",
    reportExpiry: "",
    reportName: "",
    reportOwner: "",
    reportType: "",
    trigger: ""
  }
});

module.exports = Schedule;
