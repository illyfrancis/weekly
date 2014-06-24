var Backbone = require('backbone');
var template = require('./templates/menu.html');
var Grouping = require('../groupBy/grouping');

var Menu = Backbone.View.extend({

  className: 'menu',

  events: {
    'click .filter': 'showFilter',
    'click .group-by': 'showGroupBy'
  },

  initialize: function (options) {
    this.criteria = options.criteria;
  },

  render: function () {
    this.$el.html(template());

    var elem = this.$('.foobar');
    var grouping = this.createSubView(Grouping, {
      el: elem,
      collection: this.criteria
    });
    grouping.render();

    return this;
  },

  showFilter: function () {
    Backbone.router.showFilters();
  },

  showGroupBy: function () {
    Backbone.router.showGroupBy();
    // Backbone.router.navigate('groupby', {trigger: true});
  }

});

module.exports = Menu;
