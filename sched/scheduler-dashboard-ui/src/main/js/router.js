var Backbone = require('backbone');
var _ = require('underscore');
var Dashboard = require('./views/dashboard');
var Filters = require('./views/filters/filters');
var GroupBy = require('./views/groupBy/groupBy');

var AppRouter = Backbone.Router.extend({

  routes: {
    '': 'showDashboard'
  },

  showDashboard: function () {
    if (this.dashboard) {
      this.dashboard.dispose();
    }
    this.dashbaord = new Dashboard();

    Backbone.$('.dashboard-container').empty().append(this.dashbaord.render().el);
  },

  showFilters: function () {
    if (!this.filter) {
      this.filter = new Filters();
      Backbone.$('.dashboard-container').append(this.filter.render().el);
    }

    Backbone.$('#filtersModal').modal('show');
  },

  showGroupBy: function () {
    if (!this.groupBy) {
      this.groupBy = new GroupBy();
      Backbone.$('.dashboard-container').append(this.groupBy.render().el);
    }

    Backbone.$('#groupByModal').modal('show');
  }

});

module.exports = AppRouter;
