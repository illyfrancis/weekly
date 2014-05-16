var _ = require('underscore');
var Criteria = require('./settings/criteria');
var Settings = require('./settings/settings');
var Schedules = require('./Schedules/collection');

var Repository = {
  loadCriteria: function (cb) {
    if (_.isUndefined(this.criteria)) {
      this.criteria = new Criteria(Settings.defaults());
      this.criteria.fetch({
        success: cb,
        remove: false
      });
    }
    return this.criteria;
  },

  loadSchedules: function () {
    if (_.isUndefined(this.schedules)) {
      this.schedules = new Schedules();
      this.schedules.fetch();
    }
  }
};

module.exports = Repository;
