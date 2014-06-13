var Backbone = require('backbone');
var _ = require('underscore');
var template = require('./templates/reportTypeFilter.html');

var dashboard = global.dashboard || {};
dashboard.reportTypes = dashboard.reportTypes || [];

var ReportTypeFilter = Backbone.View.extend({

  // className: form-group

  initialize: function () {
    // this.model = ReportType
  },

  render: function () {

    this.$el.html(template(
      _.extend({
        reportTypes: dashboard.reportTypes
      }, this.model.attributes)));
    return this;
  }

});

module.exports = ReportTypeFilter;
