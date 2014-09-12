/*global alert*/
var Backbone = require('backbone');
var ScheduleHeader = require('./scheduleHeader');
var ScheduleItem = require('./scheduleItem');
var ScheduleDetail = require('./scheduleDetail');
var template = require('./templates/scheduleList.html');

var ScheduleList = Backbone.View.extend({

  className: '.table-responsive',

  initialize: function (options) {
    // this.collection = schedules.collection
    this.user = options.user;
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
      collection: this.criteria,
      user: this.user
    });

    this.$('thead').append(scheduleHeader.render().el);
  },

  renderItems: function () {
    if (this.collection.isEmpty()) {
      this.$('tbody').append('<tr><td colspan="13">no schedules found</td></tr>');
    } else {
      this.collection.each(function (item) {
        this.appendScheduleItem(item);
        this.appendScheduleDetail(item);
      }, this);
    }
  },

  appendScheduleItem: function (item) {
    var scheduleItem = this.createSubView(ScheduleItem, {
      model: item,
      user: this.user
    });
    this.$('tbody').append(scheduleItem.render().el);
  },

  appendScheduleDetail: function (item) {
    var scheduleDetail = this.createSubView(ScheduleDetail, {
      model: item,
      user: this.user,
      className: 'collapse detail' + item.id
    });
    this.$('tbody').append(scheduleDetail.render().el);
  }

});

module.exports = ScheduleList;
