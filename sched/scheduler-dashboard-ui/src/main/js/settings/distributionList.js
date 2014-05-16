var Criterion = require('./criterion');

var DistributionList = Criterion.extend({

  initialize: function () {
    this.set({
      'id': 'distributionList',
      'title': 'Distribution list',
      'displayOrder': 7
    });
  },
  
  toQuery: function () {
    // returns a criteria based on current filter settings
    return '';
  }

});

module.exports = DistributionList;
