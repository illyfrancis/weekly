var Backbone = require('backbone');
var template = require('./templates/pagination.html');

var Pagination = Backbone.View.extend({

  initialize: function () {
    // collection
  },

  render: function () {
    this.$el.html(template());
    return this;
  }
});

module.exports = Pagination;
