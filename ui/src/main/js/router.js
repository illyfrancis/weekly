var _ = require('underscore');
var Backbone = require('backbone');
var Clients = require('./views/clients/clients');
var Dashboard = require('./views/dashboard/dashboard');
var Filters = require('./views/filters/filters');
var Query = require('./models/query');
var repository = require('./repository');

var AppRouter = Backbone.Router.extend({

  routes: {
    '': 'showDashboard'
  },

  initialize: function () {
    this.listenTo(this, 'dashboard:search', this.search);
  },

  search: function (page) {
    page = _.isUndefined(page) ? 1 : page;
    new Query().search(page);
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

    var filters = new Filters({
      user: repository.user(),
      collection: repository.criteria()
    });

    Backbone.$('.dashboard-container').append(filters.render().el);
    filters.$('.modal').modal('show');
  },

  showClients: function () {
    var clients = new Clients({
      collection: repository.clients(),
      criteria: repository.criteria()
    });

    Backbone.$('.dashboard-container').append(clients.render().el);
    clients.$('.modal').modal('show');
  }

});

module.exports = AppRouter;
