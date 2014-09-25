var _ = require('underscore');
var Criterion = require('./criterion');

var DistributionFormat = Criterion.extend({

  initialize: function () {
    this.set('filter', '');
    this.set('isSortable', false);
  },

  setFilter: function (triggers) {
    this.set('filter', triggers);
  },

  hasValidFilter: function () {
    var filter = this.get('filter');
    return _.isArray(filter) && filter.length > 0;
  },

  toQuery: function () {
    var query = null;

    if (this.hasValidFilter()) {
      var filter = this.get('filter');
      var queries = _.map(filter, this.selectedElementToQueryCondition);

      if (queries.length > 1) {
        query = {
          '$or': queries
        };
      } else {
        query = queries.shift();
      }
    }

    return query;
  },

  selectedElementToQueryCondition: function (element) {
    var obj = {};
    obj['deliveryIndicator' + element] = {
      '$eq': 'Y'
    };

    return obj;
  }
});

module.exports = DistributionFormat;
