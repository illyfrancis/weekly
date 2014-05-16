var Criterion = require('./criterion');

var ReportType = Criterion.extend({

  initialize: function () {
    this.set({
      'id': 'reportType',
      'title': 'Report type',
      'displayOrder': 1
    });
  },
  
  toQuery: function () {
    // returns a criteria based on current filter settings
    return '';
  }

});

module.exports = ReportType;
