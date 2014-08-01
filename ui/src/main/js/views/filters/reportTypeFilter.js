var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./templates/reportTypeFilter.html');

var dashboard = global.dashboard || {};
dashboard.reportTypes = dashboard.reportTypes || [];

var ReportTypeFilter = Backbone.View.extend({

  events: {
    'click .bootstrap-select li > dt': 'selectCategory'
  },

  selectCategory: function (e) {
    // experimental - not clean...
    var reportCategory = this.$(e.target).text();
    var $options = this.$('optgroup[label="' + reportCategory + '"] option');
    var reportTypesForCategory = _.map($options, function (option) {
      return option.value;
    });

    var currentSelection = this.$('.selectpicker').val();
    if (!_.isArray(reportTypesForCategory)) {
      reportTypesForCategory = [];
    }
    var newSelection = _.uniq(reportTypesForCategory.concat(currentSelection));

    this.$('.selectpicker').selectpicker('val', newSelection);
    this.$('.selectpicker').selectpicker('render');
    e.stopImmediatePropagation();
  },

  initialize: function () {
    // this.model = ReportType
  },

  render: function () {

    this.$el.html(template(
      _.extend({
        reportTypes: dashboard.reportTypes
      }, this.model.toJSON())));
    return this;
  }

});

module.exports = ReportTypeFilter;
