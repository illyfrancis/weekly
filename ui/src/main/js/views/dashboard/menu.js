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
    this.user = options.user;
  },

  render: function () {
    this.$el.html(template({
      'isClientsSelectionVisible': this.isClientsSelectionVisible()
    }));

    var groupBy = this.createSubView(GroupBy, {
      el: this.$('.group-by'),
      collection: this.criteria,
      user: this.user
    });
    groupBy.render();

    return this;
  },

  isClientsSelectionVisible: function () {
    return this.user.isInternal();
  },

  showFilters: function () {
    Backbone.router.showFilters();
  },

  showClients: function () {
    Backbone.router.showClients();
  }

});

module.exports = Menu;
