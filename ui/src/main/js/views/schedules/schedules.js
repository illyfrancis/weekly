var Backbone = require('backbone');
var template = require('./templates/schedules.html');
var ScheduleList = require('./scheduleList');
var PaginationBar = require('./paginationBar');

var Schedules = Backbone.View.extend({

  className: 'schedules',

  initialize: function (options) {
    this.scheduleList = this.createSubView(ScheduleList, {
      collection: this.collection,
      criteria: options.criteria,
      user: options.user
    });
    
    this.paginationBar = this.createSubView(PaginationBar, {
      model: this.collection.pagination
    });
  },

  render: function () {
    this.$el.html(template());
    this.$('.scheduleList').html(this.scheduleList.render().el);
    this.$('.page').replaceWith(this.paginationBar.render().el);
    return this;
  }
});

module.exports = Schedules;
