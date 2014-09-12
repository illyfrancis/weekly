var _ = require('underscore');
var Criterion = require('./criterion');

var ReportType = Criterion.extend({

  initialize: function () {
    this.set('filter', '');
  },

  setFilter: function (triggers) {
    this.set('filter', triggers);
  },

  toQuery: function () {
    var filter = this.get('filter');
    var query = null;

    if (_.isArray(filter) && filter.length > 0) {

      query = {};
      query[this.filterWith()] = {
        "$in": filter
      };
    }

    return query;
  }
});

module.exports = ReportType;
