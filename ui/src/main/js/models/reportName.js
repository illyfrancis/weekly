var _ = require('underscore');
var Criterion = require('./criterion');

var ReportName = Criterion.extend({

  initialize: function () {
    this.set('filter', '');
  },

  setFilter: function (filter) {
    // filter = _.escape(filter.trim()); // no trim in IE8
    filter = _.escape(filter.replace(/^\s+|\s+$/g, '')); // For now. Need _.string
    if (this.get('filter') !== filter) {
      this.set('filter', filter, { validate: true });
    }
  },

  validate: function (attrs) {
    // just an example
    if (attrs.filter.length > 10) {
      return 'too long';
    }
  },

  toQuery: function () {
    var filter = this.get('filter'),
      query = null;

    if (filter !== '') {
      query = {};
      query[this.filterWith()] = { '$like': filter };
    }

    return query;
  }

});

module.exports = ReportName;
