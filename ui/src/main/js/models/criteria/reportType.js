var _ = require('underscore');
var Criterion = require('./criterion');

var ReportType = Criterion.extend({

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
        "$in": filter
      };
    }

    return query;
  }
});

module.exports = ReportType;
