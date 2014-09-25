var _ = require('underscore');
var Criterion = require('./criterion');

var Trigger = Criterion.extend({

  initialize: function () {
    this.set('filter', '');
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

module.exports = Trigger;
