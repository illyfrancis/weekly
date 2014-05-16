var Backbone = require('backbone');
var template = require('../templates/menu.html');

var Menu = Backbone.View.extend({

  className: 'menu',

  events: {
    'click .filter': 'showFilter',
    'click .group-by': 'showGroupBy'
  },

  initialize: function () {
    // this.collection = criteria
  },

  render: function () {
    this.$el.html(template());
    return this;
  },

  showFilter: function () {
    Backbone.router.showFilters();
  },

  showGroupBy: function () {
    Backbone.router.navigate('groupby', {trigger: true});
  }

});

module.exports = Menu;
