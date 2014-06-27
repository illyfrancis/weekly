var Backbone = require('backbone');
var GroupBy = require('../groupBy/groupBy');
var template = require('./templates/menu.html');

var Menu = Backbone.View.extend({

  className: 'menu',

  events: {
    'click .filter': 'showFilter'
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

  showFilter: function () {
    Backbone.router.showFilters();
  }

});

module.exports = Menu;
