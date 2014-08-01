var Backbone = require('backbone');
var Dashboard = require('./views/dashboard/dashboard');
var Filters = require('./views/filters/filters');
var Clients = require('./views/clients/clients');
var repository = require('./repository');
var Query = require('./models/query');

var AppRouter = Backbone.Router.extend({

  routes: {
    '': 'showDashboard'
  },

  initialize: function () {
    this.listenTo(this, 'dashboard:search', this.search);
  },

  search: function () {
    var q = new Query({}, {
      schedules: repository.schedules(),
      user: repository.user(),
      clients: repository.clients()
    });

    var query = repository.criteria().toQuery();
    q.search(query);
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
        user: repository.user(),
        collection: repository.criteria()
      });

      Backbone.$('.dashboard-container').append(this.filters.render().el);
    }

    this.filters.$('.modal').modal('show');
  },

  showClients: function () {
    if (!this.clients) {
      this.clients = new Clients({
        collection: repository.clients()
      });

      Backbone.$('.dashboard-container').append(this.clients.render().el);
    }

    this.clients.$('.modal').modal('show');
  }

});

module.exports = AppRouter;
