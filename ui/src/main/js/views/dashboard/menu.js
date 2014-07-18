var Backbone = require('backbone');
var GroupBy = require('../groupBy/groupBy');
var template = require('./templates/menu.html');

var Menu = Backbone.View.extend({

  className: 'menu',

  events: {
    'click .filters': 'showFilters',
    'click .clients': 'showClients'
  },

  initialize: function (options) {
    this.criteria = options.criteria;
  },

  render: function () {
    this.$el.html(template());

    var groupBy = this.createSubView(GroupBy, {
      el: this.$('.group-by'),
      collection: this.criteria
    });
    groupBy.render();

    return this;
  },

  showFilters: function () {
    Backbone.router.showFilters();
  },

  showClients: function () {
    Backbone.router.showClients();
  }

});

module.exports = Menu;
