var Criterion = require('./criterion');

var ReportOwner = Criterion.extend({

  initialize: function () {
    this.set({
      'id': 'reportOwner',
      'title': 'Report owner',
      'displayOrder': 3
    });
  },
  
  toQuery: function () {
    // returns a criteria based on current filter settings
    return '';
  }

});

module.exports = ReportOwner;
