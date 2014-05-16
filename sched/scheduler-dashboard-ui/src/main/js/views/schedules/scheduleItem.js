var Backbone = require('backbone');
var template = require('./templates/scheduleItem.html');

var ScheduleItem = Backbone.View.extend({

  tagName: 'tr',

  initialize: function () {
  },

  render: function () {
    this.$el.html(template());
    return this;
  }
});

module.exports = ScheduleItem;
