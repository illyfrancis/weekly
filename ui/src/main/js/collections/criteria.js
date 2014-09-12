var Backbone = require('backbone');
var Settings = require('./settings');
var Criterion = require('../models/criteria/criterion');

var Criteria = Backbone.Collection.extend({

  url: './api/settings/filters',

  model: Criterion,

  initialize: function () {
    this.reset(Settings.defaults());
  },

  comparator: function (criterion) {
    return criterion.get('displayOrder');
  },

  parse: function(response) {
    return response.filters;
  },  
  
  save: function (options) {
    Backbone.sync('create', this, options);
  },

  toJSON: function() {
    return {'filters' : this.models};
  },

  toQuery: function () {
    return {
      'query': JSON.stringify(this.buildQuery()),
      'sorts': this.buildSort()
    };
  },

  buildQuery: function () {
    var criterionToQuery = function (criterion) {
      return criterion.toQuery();
    };

    var nullQuery = function (query) {
      return query === null;
    };

    var queries = this.chain().map(criterionToQuery).reject(nullQuery).value();

    var query = {};
    if (queries.length === 1) {
      query = queries.shift();
    } else if (queries.length > 1) {
      query.$and = queries;
    }

    return query;
  },

  buildSort: function () {
    var sorts = [];
    this.each(function (criterion) {
      if (criterion.isSortField()) {
        sorts.push(criterion.toSortBy());
      }

      if (criterion.isGroupField()) {
        sorts.unshift(criterion.toGroupBy());
      }
    });

    return sorts;
  }

});

module.exports = Criteria;
