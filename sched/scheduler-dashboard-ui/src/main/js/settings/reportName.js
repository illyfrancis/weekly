var Criterion = require('./criterion');

var ReportName = Criterion.extend({

  initialize: function () {
    this.set({
      'id': 'reportName',
      'title': 'Report name',
      'displayOrder': 0
    });
  },
  
  toQuery: function () {
    // returns a criteria based on current filter settings
    return '';
  }

});

module.exports = ReportName;
