var _ = require('underscore');
_.str = require('underscore.string');
var Criterion = require('./criterion');

var DistributionList = Criterion.extend({

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
    if (attrs.filter.length > 20) {
      return 'too long';
    }

    if (! /^(([\w\d@\.])*)$/.test(attrs.filter)) {
      return 'invalid content';
    }
  },

  toQuery: function () {
    var filter = this.get('filter');
    var query = null;

    if (filter !== '') {
      query = {};
      query[this.filterWith()] = {
        '$containsIgnoreCase': filter
      };
    }

    return query;
  }
});

module.exports = DistributionList;
