var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./templates/scheduleDetail.html');
var Action = require('../../models/action');
var Downloader = require('./downloader');
var ReportCriteria = require('./reportCriteria');

var ScheduleDetail = Backbone.View.extend({

  tagName: 'tr',
  
  events: {
    'click .run-schedule': 'runSchedule',
    'click .view-criteria' : 'viewCriteria',
    'click .download' : 'downloadReport'
  },

  initialize: function (options) {
    this.action = new Action();
    this.user = options.user;
  },

  render: function () {
    this.$el.html(template(
      _.defaults({
        'isEditEnabled': this.isEditEnabled(),
        'isRunNowEnabled': this.isRunNowEnabled()
      }, this.model.toJSON())
    ));

    // activate 'collapse' for IE
    this.$el.collapse({toggle: false});
    this.$('.detail' + this.model.id).collapse({toggle: false});

    return this;
  },

  isEditEnabled: function () {
    return this.isReportOwnedByUser() || this.user.hasAdminRole();
  },

  isRunNowEnabled: function () {
    return this.isReportOwnedByUser() || this.user.hasAdminRole();
  },

  isReportOwnedByUser: function () {
    return this.model.get('reportOwnerId') === this.user.id;
  },

  runSchedule: function () {
    this.action.runSchedule(this.model.id);
  },

  viewCriteria: function () {
    var reportCriteria = this.createSubView(ReportCriteria);
    var parents = this.$el.parents('div');
    if (parents.length > 0) {
      reportCriteria.render().$el.appendTo(parents[0]);
      reportCriteria.show(this.model.id);
    }
  },

  downloadReport: function () {
    if (this.downloader) {
      this.downloader.dispose();
    }
    
    this.downloader = this.createSubView(Downloader, {
      outputId : this.model.get('lastReportOutputId'),
    });
        
    this.$el.append(this.downloader.render().el);
  }
  
});

module.exports = ScheduleDetail;
