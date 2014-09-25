var Backbone = require('backbone');
var GroupBy = require('../groupBy/groupBy');
var template = require('./templates/menu.html');

var Menu = Backbone.View.extend({

  className: 'menu',

  events: {
    'click .filters': 'showFilters'
  },

  initialize: function (options) {
    this.criteria = options.criteria;
    this.user = options.user;
  },

  render: function () {
    this.$el.html(template());

    var groupBy = this.createSubView(GroupBy, {
      el: this.$('.group-by'),
      collection: this.criteria,
      user: this.user
    });
    groupBy.render();

    return this;
  },

  showFilters: function () {
    Backbone.router.showFilters();
  }
});

module.exports = Menu;
