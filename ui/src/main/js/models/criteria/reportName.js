var _ = require('underscore');
_.str = require('underscore.string');
var Criterion = require('./criterion');
var ReportName = Criterion.extend({

  initialize: function () {
    this.set('filter', '');
  },

  setFilter: function (filter) {
    filter = _.escape(_.str.trim(filter));
    if (this.get('filter') !== filter) {
      this.set('filter', filter, {
        validate: true
      });
    }
  },

  validate: function (attrs) {
    // just an example
    if (attrs.filter.length > 10) {
      return 'too long';
    }
  },

  hasValidFilter: function () {
    var filter = this.get('filter');
    return filter !== '';
  },

  toQuery: function () {
    var query = null;

    if (this.hasValidFilter()) {
      var filter = this.get('filter');
      query = {};
      query[this.filterWith()] = { '$containsIgnoreCase': filter };
    }

    return query;
  }

});

module.exports = ReportName;
