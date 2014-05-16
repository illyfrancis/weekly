var Backbone = require('backbone');
var template = require('./templates/scheduleList.html');
var ScheduleHeader = require('./scheduleHeader');
var ScheduleItem = require('./scheduleItem');

var ScheduleList = Backbone.View.extend({

  initialize: function (options) {
    // collection for schedule list
    this.criteria = options.headers;
  },

  render: function () {
    this.$el.html(template());

    var scheduleHeader = new ScheduleHeader({
      collection: this.criteria
    });
    this.$('thead').append(scheduleHeader.render().el);
    
    // dispose views properly
    var scheduleItem = new ScheduleItem();
    this.$('tbody').append(scheduleItem.render().el);
    var item2 = new ScheduleItem();
    this.$('tbody').append(item2.render().el);

    return this;
  }
});

module.exports = ScheduleList;
