var Criterion = require('./criterion');

var DistributionFormat = Criterion.extend({

  initialize: function () {
    this.set('isSortable', false);
  }

});

module.exports = DistributionFormat;
