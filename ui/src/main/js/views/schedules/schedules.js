var Backbone = require('backbone');
var template = require('./templates/schedules.html');
var ScheduleList = require('./scheduleList');
var Pagination = require('./pagination');

var Schedules = Backbone.View.extend({

  className: 'schedules',

  initialize: function (options) {
    this.scheduleList = this.createSubView(ScheduleList, {
      collection: this.collection,
      criteria: options.criteria,
      user: options.user
    });
    this.pagination = this.createSubView(Pagination);
  },

  render: function () {
    this.$el.html(template());
    this.$('.scheduleList').html(this.scheduleList.render().el);
    this.$('.page').html(this.pagination.render().el);
    return this;
  }
});

module.exports = Schedules;
