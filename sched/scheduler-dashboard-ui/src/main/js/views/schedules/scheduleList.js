var Backbone = require('backbone');
var template = require('./templates/scheduleList.html');
var ScheduleHeader = require('./scheduleHeader');
var ScheduleItem = require('./scheduleItem');

var ScheduleList = Backbone.View.extend({

  initialize: function (options) {
    // this.collection = schedules.collection
    this.criteria = options.headers;
  },

  render: function () {
    this.$el.html(template());

    var scheduleHeader = this.createSubView(ScheduleHeader, {
      collection: this.criteria
    });
    this.$('thead').append(scheduleHeader.render().el);

    var scheduleItem;
    this.collection.each(function (item) {
      scheduleItem = this.createSubView(ScheduleItem, {
        model: item
      });
      this.$('tbody').append(scheduleItem.render().el);
    }, this);

    return this;
  }
});

module.exports = ScheduleList;
