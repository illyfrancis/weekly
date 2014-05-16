var Backbone = require('backbone');
var Criterion = require('./criterion');

var Criteria = Backbone.Collection.extend({

  url: '/api/settings',

  model: Criterion,

  comparator: function (criterion) {
    return criterion.get('displayOrder');
  },

  // parse: function (response, options) {
  //   return response;
  // },

  // collection of criteria
  toQuery: function () {
    // generate query string based on elements (i.e. criterion)
  },
  // persists filter / sort / group by with this
  // generate query from this

});

module.exports = Criteria;
