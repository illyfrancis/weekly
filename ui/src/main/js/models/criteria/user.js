var _ = require('underscore');
_.str = require('underscore.string');
var Criterion = require('./criterion');

var User = Criterion.extend({

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
    if (attrs.filter.length > 10) {
      return 'too long';
    }

    if (!/^[a-z0-9]*$/i.test(attrs.filter)) {
      return 'invalid content';
    }
  },

  toQuery: function () {
    var query = null;

    if (this.hasValidFilter()) {
      var filter = this.get('filter');
      query = {};
      query[this.filterWith()] = {
        '$eqIgnoreCase': filter
      };
    }

    return query;
  }

});

module.exports = User;
