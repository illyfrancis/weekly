var Backbone = require('backbone');
var template = require('./templates/scheduleDetail.html');
var Action = require('../../models/action');

var ScheduleDetail = Backbone.View.extend({

  tagName: 'tr',

  events: {
    'click .run-schedule': 'runSchedule'
  },

  initialize: function () {
    this.action = new Action();
  },

  render: function () {
    this.$el.html(template(this.model.toJSON()));

    // activate 'collapse' for IE
    this.$el.collapse({toggle: false});
    this.$('.detail' + this.model.id).collapse({toggle: false});

    return this;
  },

  runSchedule: function () {
    this.action.runSchedule(this.model.id);
  }

});

module.exports = ScheduleDetail;
