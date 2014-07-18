var _ = require('underscore');
var Backbone = require('backbone');
var Criteria = require('./collections/criteria');
var Schedules = require('./collections/schedules');
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
    var query = this.criteria().toQuery();
    Backbone.router.trigger('dashboard:search', query);
  },

  user: _.once(function () {
    var dashboard = global.dashboard || {};
    dashboard.user = dashboard.user || {};
    return new User(dashboard.user);
  })

};

module.exports = Repository;
