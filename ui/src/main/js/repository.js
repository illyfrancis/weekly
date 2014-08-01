var _ = require('underscore');
var Backbone = require('backbone');
var Criteria = require('./collections/criteria');
var Schedules = require('./collections/schedules');
var Clients = require('./collections/clients');
var User = require('./models/user');

var Repository = {

  criteria: _.once(function () {
    return new Criteria();
  }),

  loadCriteria: function (cb) {
    this.criteria().fetch({
      success: cb,
      remove: false
    });
  },

  schedules: _.once(function () {
    return new Schedules();
  }),

  loadSchedules: function () {
    Backbone.router.trigger('dashboard:search');
  },

  user: _.once(function () {
    var dashboard = global.dashboard || {};
    dashboard.user = dashboard.user || {};
    return new User(dashboard.user);
  }),

  clients: _.once(function () {
    return new Clients();
  })

};

module.exports = Repository;
