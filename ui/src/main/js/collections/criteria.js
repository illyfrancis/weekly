var Backbone = require('backbone');
var Criterion = require('../models/criterion');

var Criteria = Backbone.Collection.extend({

  url: '/api/settings',

  model: Criterion,

  comparator: function (criterion) {
    return criterion.get('displayOrder');
  },

  toQuery: function () {
    var query, queries = [];
    this.each(function (criterion) {
      query = criterion.toQuery();
      if (query) {
        queries.push(query);
      }
    });

    var queryString = '';
    if (queries.length === 1) {
      queryString = queries.shift();
    } else if (queries.length > 1) {
      queryString = '{"$and":[' + queries.join(',') + ']}';      
    }

    return queryString;
  }

});

module.exports = Criteria;
