var Backbone = require('backbone');
var Dashboard = require('./views/dashboard/dashboard');
var Filters = require('./views/filters/filters');
var GroupBy = require('./views/groupBy/groupBy');
var repository = require('./repository');

var AppRouter = Backbone.Router.extend({

  routes: {
    '': 'showDashboard'
  },

  initialize: function () {
    // custom events
    this.listenTo(this, 'dashboard:search', this.search);
  },

  search: function (o) {
    console.log('kick off search with q : [' + o + ']');
  },

  showDashboard: function () {
    if (this.dashboard) {
      this.dashboard.dispose();
    }

    this.dashbaord = new Dashboard({
      criteria: repository.criteria(),
      schedules: repository.schedules()
    });

    Backbone.$('.dashboard-container').empty().append(this.dashbaord.render().el);
  },

  showFilters: function () {
    if (!this.filter) {
      this.filter = new Filters({
        collection: repository.criteria()
      });

      Backbone.$('.dashboard-container').append(this.filter.render().el);
    }

    Backbone.$('#filtersModal').modal('show');
  },

  showGroupBy: function () {
    if (!this.groupBy) {
      this.groupBy = new GroupBy({
        collection: repository.criteria()
      });
      
      Backbone.$('.dashboard-container').append(this.groupBy.render().el);
    }

    Backbone.$('#groupByModal').modal('show');
  }

});

module.exports = AppRouter;
