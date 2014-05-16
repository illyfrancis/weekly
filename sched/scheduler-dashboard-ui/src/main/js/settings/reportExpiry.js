var Criterion = require('./criterion');

var ReportExpiry = Criterion.extend({

  initialize: function () {
    this.set({
      'id': 'reportExpiry',
      'title': 'Report expiry',
      'displayOrder': 12
    });
  },
  
  toQuery: function () {
    // returns a criteria based on current filter settings
    return '';
  }

});

module.exports = ReportExpiry;
