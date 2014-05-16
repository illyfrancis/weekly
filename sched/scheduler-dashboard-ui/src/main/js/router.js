var Backbone = require('backbone');
var _ = require('underscore');
var Dashboard = require('./views/dashboard');
var Filters = require('./views/filters/filters');
var GroupBy = require('./views/groupBy/groupBy');

var AppRouter = Backbone.Router.extend({

  routes: {
    '': 'start',
    'filters': 'showFilters',
    'groupby': 'showGroupBy',
    'search/:query': 'search'
  },

  start: function () {
    this.removeCurrentView();
    this.view = new Dashboard();

    // remove existing view first
    Backbone.$('.dashboard').empty().append(this.view.render().el);
  },

  showFilters: function () {
    this.removeCurrentView();

    this.view = new Filters();
    Backbone.$('.dashboard').empty().append(this.view.render().el);
    Backbone.$('#filtersModal').modal('show');
  },

  showGroupBy: function () {
    this.removeCurrentView();

    this.view = new GroupBy();
    Backbone.$('.dashboard').empty().append(this.view.render().el);
    Backbone.$('#groupByModal').modal('show');
  },

  search: function (query) {
    console.log('search with query [' + query + ']');
  },

  removeCurrentView: function () {
    if (!_.isUndefined(this.view)) {
      this.view.remove();
    }
  }
});

module.exports = AppRouter;
