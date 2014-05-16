var Criterion = require('./criterion');

var DistributionFormat = Criterion.extend({

  initialize: function () {
    this.set({
      'id': 'distributionFormat',
      'title': 'Distribution format',
      'displayOrder': 9
    });
  },
  
  toQuery: function () {
    // returns a criteria based on current filter settings
    return '';
  }

});

module.exports = DistributionFormat;
