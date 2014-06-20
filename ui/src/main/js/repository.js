var _ = require('underscore');
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
    this.schedules().fetch({
      reset: true
    });
  },

  user: _.once(function () {
    var dashboard = global.dashboard || {};
    dashboard.user = dashboard.user || {};
    return new User(dashboard.user);
  })

};

module.exports = Repository;
