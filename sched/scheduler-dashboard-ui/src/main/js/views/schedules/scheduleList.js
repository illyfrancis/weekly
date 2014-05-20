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

    var scheduleHeader = new ScheduleHeader({
      collection: this.criteria
    });
    this.$('thead').append(scheduleHeader.render().el);

    // dispose views properly

    console.log('in scheduleList : collection size is ' + this.collection.size());

    this.collection.each(function (item) {
      var scheduleItem = new ScheduleItem({
        model: item
      });
      this.$('tbody').append(scheduleItem.render().el);
    }, this);

    return this;
  }
});

module.exports = ScheduleList;
