var Backbone = require('backbone');
var template = require('./templates/scheduleItem.html');

var ScheduleItem = Backbone.View.extend({

  tagName: 'tr',

  initialize: function () {
  },

  render: function () {
    console.log(JSON.stringify(this.model));
    this.$el.html(template(this.model.attributes));
    return this;
  }
});

module.exports = ScheduleItem;
