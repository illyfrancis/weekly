var _ = require('underscore');
var Backbone = require('backbone');
var Clients = require('./collections/clients');
var Criteria = require('./collections/criteria');
var Schedules = require('./collections/schedules');
var User = require('./models/user');

var Repository = {

  user: _.once(function () {
    var dashboard = global.dashboard || {};
    dashboard.user = dashboard.user || {};
    return new User(dashboard.user);
  }),

  clients: _.once(function () {
    return new Clients();
  }),

  loadClients: function () {
    return this.clients().fetch({reset: true});
  },

  criteria: _.once(function () {
    return new Criteria();
  }),

  loadCriteria: function () {
    return this.criteria().fetch({remove: false});
  },

  schedules: _.once(function () {
    return new Schedules();
  }),

  loadSchedules: function () {
    Backbone.router.trigger('dashboard:search');
  }

};

module.exports = Repository;
