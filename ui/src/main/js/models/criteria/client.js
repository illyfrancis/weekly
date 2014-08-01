var _ = require('underscore');
var Criterion = require('./criterion');

var Client = Criterion.extend({

  initialize: function () {
    this.set('filter', null);
  },

  setFilter: function (filter) {
    if (this.get('filter') !== filter) {

      var clone = null;
      if (_.isArray(filter) && filter.length > 0) {
        clone = _.clone(filter);
      }

      this.set('filter', clone, {
        validate: true
      });
    }
  },

  validate: function ( /*attrs*/ ) {},

  toQuery: function () {
    var filter = this.get('filter');
    var query = null;

    if (_.isArray(filter) && filter.length > 0) {
      var field = this.filterWith();
      var subQueries = _.map(filter, function (item) {
        var subQuery = {};
        subQuery[field] = {
          '$eq': item
        };
        return subQuery;
      });

      if (subQueries.length > 1) {
        query = {
          '$or': subQueries
        };
      } else {
        query = subQueries.shift();
      }
    }

    return query;
  }

});

module.exports = Client;
