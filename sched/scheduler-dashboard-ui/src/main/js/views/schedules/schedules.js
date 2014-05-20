var Backbone = require('backbone');
var template = require('./templates/schedules.html');
var ScheduleList = require('./scheduleList');
var Pagination = require('./pagination');
var repository = require('../../repository');

var Schedules = Backbone.View.extend({

  className: 'schedules',

  initialize: function () {
    // this.collection = criteria
    // also need list of schedules too, but initiate from this.
    this.schedulesCollection = repository.loadSchedules();

    this.scheduleList = new ScheduleList({
      // collection: reserve it for the_actual_schedule_lists
      headers: this.collection,
      collection: this.schedulesCollection
    });
    this.pagination = new Pagination();
  },

  render: function () {
    this.$el.html(template());
    this.$('.scheduleList').html(this.scheduleList.render().el);
    this.$('.page').html(this.pagination.render().el);
    return this;
  }
});

module.exports = Schedules;
