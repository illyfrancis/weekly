var _ = require('underscore');
var Criterion = require('./criterion');

var Frequency = Criterion.extend({

  initialize: function () {
    this.set('filter', '');
  },

  setFilter: function (frequencies) {
    this.set('filter', frequencies);
  },

  toQuery: function () {
    var filter = this.get('filter');
    var query = null;

    if (_.isArray(filter) && filter.length > 0) {
      query = {};
      query[this.filterWith()] = {
        '$in': this.uppercase(filter)
      };
    }

    return query;
  },

  uppercase: function (array) {
    return _.map(array, function (element) {
      return element.toUpperCase();
    });
  }
});

module.exports = Frequency;
