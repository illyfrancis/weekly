var Backbone = require('backbone');

var ReportCriteria = Backbone.Collection.extend({

  url: function () {
    var criteriaUrl = './api/reportcriteria/{reportCriteriaId}';
    return criteriaUrl.replace('{reportCriteriaId}', this.reportCriteriaId);
  },
	
  parse: function(response) {
    return response.parameters;
  },
  
  setReportCriteriaId: function (criteriaId) {
    this.reportCriteriaId = criteriaId;
  }
  
});

module.exports = ReportCriteria;