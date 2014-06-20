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
    // register 'search' event handler
    this.listenTo(this, 'dashboard:search', this.search);
  },

  search: function (query) {
    console.log('kick off search with q : ' + JSON.stringify(query) + '');
  },

  showDashboard: function () {
    if (this.dashboard) {
      this.dashboard.dispose();
    }

    this.dashbaord = new Dashboard({
      user: repository.user(),
      criteria: repository.criteria(),
      schedules: repository.schedules()
    });

    Backbone.$('.dashboard-container').empty().append(this.dashbaord.render().el);
  },

  showFilters: function () {
    if (!this.filters) {
      this.filters = new Filters({
        collection: repository.criteria()
      });

      Backbone.$('.dashboard-container').append(this.filters.render().el);
    }

    this.filters.$('.modal').modal('show');
  },

  showGroupBy: function () {
    if (!this.groupBy) {
      this.groupBy = new GroupBy({
        collection: repository.criteria()
      });
      
      Backbone.$('.dashboard-container').append(this.groupBy.render().el);
    }

    this.groupBy.$('.modal').modal('show');
  }

});

module.exports = AppRouter;
