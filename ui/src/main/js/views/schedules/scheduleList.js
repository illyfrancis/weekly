/*global alert*/
var Backbone = require('backbone');
var template = require('./templates/scheduleList.html');
var ScheduleHeader = require('./scheduleHeader');
var ScheduleItem = require('./scheduleItem');

var ScheduleList = Backbone.View.extend({

  initialize: function (options) {
    // this.collection = schedules.collection
    this.criteria = options.criteria;
    this.listenTo(this.collection, 'reset', this.render);
    this.listenTo(this.collection, 'error', this.displayError);
  },

  displayError: function () {
    alert('Error');
  },

  render: function () {
    this.disposeSubViews();
    this.$el.html(template());

    this.renderHeader();
    this.renderItems();

    return this;
  },

  renderHeader: function () {
    var scheduleHeader = this.createSubView(ScheduleHeader, {
      collection: this.criteria
    });
    this.$('thead').append(scheduleHeader.render().el);
  },

  renderItems: function () {
    if (this.collection.isEmpty()) {
      this.$('tbody').append('<tr><td colspan="13">no schedules found</td></tr>');
    } else {
      var scheduleItem;
      this.collection.each(function (item) {
        scheduleItem = this.createSubView(ScheduleItem, {
          model: item
        });
        this.$('tbody').append(scheduleItem.render().el);
      }, this);
    }
  }

});

module.exports = ScheduleList;
