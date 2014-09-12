var _ = require('underscore');
var Backbone = require('backbone');
var moment = require('moment');
var template = require('./templates/scheduleItem.html');

var ScheduleItem = Backbone.View.extend({

  tagName: 'tr',

  events: {
    'click': 'toggleDetail'
  },

  initialize: function (options) {
    this.user = options.user;
  },

  toggleDetail: function () {
    var detailName = '.detail' + this.model.id;
    var p = this.$el.parent();
    p.find('.collapse.in').not(detailName).collapse('hide');
    p.find(detailName).collapse('toggle');
  },

  render: function () {
    this.$el.html(template(this.toJSON()));
    return this;
  },

  isClientColumnVisible: function () {
    return this.user.isInternal();
  },

  mapToMoment: function (date) {
    return moment(date, 'YYYY-MM-DDTHH:mm:ssZ', true);
  },

  mapLastExecution: function () {
    var lastExecution = this.model.get('lastExecution');
    var executedAt = this.mapToMoment(lastExecution);
    return executedAt.isValid() ? executedAt.fromNow() : '';
  },

  mapReportExpiry: function () {
    var reportExpiry = this.model.get('reportExpiry');
    var expiresAt = this.mapToMoment(reportExpiry);
    return expiresAt.isValid() ? expiresAt.format('MMM Do YYYY') : '';
  },

  mapDistributionFormat: function () {
    var distributionFormat = this.model.get('distributionFormat');
    return _.map(distributionFormat, function (item) {
      var mapped = {
        'delivery': item
      };
      mapped[item] = true;
      return mapped;
    });
  },

  mapTrigger: function () {
    return this.model.get('trigger') === 'TIME';
  },

  toJSON: function () {
    return _.defaults({
      'timeago': this.mapLastExecution(),
      'expiry': this.mapReportExpiry(),
      'timeTrigger': this.mapTrigger(),
      'deliveryOptions': this.mapDistributionFormat(),
      'isClientColumnVisible': this.isClientColumnVisible()
    }, this.model.toJSON());
  }
});

module.exports = ScheduleItem;
