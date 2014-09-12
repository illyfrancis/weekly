var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./templates/reportTypeFilter.html');

var dashboard = global.dashboard || {};
dashboard.reportTypes = dashboard.reportTypes || [];

var ReportTypeFilter = Backbone.View.extend({

  events: {
    'change select': 'selectElement',
    'click .bootstrap-select li > dt': 'toggleCategory'
  },

  selectElement: function () {
    var filter = this.$('select').val();
    this.model.setFilter(filter);
  },

  toggleCategory: function (e) {
    var reportCategory = this.$(e.target).text();
    var $options = this.$('optgroup[label="' + reportCategory + '"] option');
    var reportTypesForCategory = _.map($options, function (option) {
      return option.value;
    });

    var currentSelection = this.$('.selectpicker').val();
    if (!_.isArray(reportTypesForCategory)) {
      reportTypesForCategory = [];
    }

    this.$('.selectpicker').selectpicker('val', this.getNewSelection(currentSelection, reportTypesForCategory));
    this.$('.selectpicker').selectpicker('render');
    e.stopImmediatePropagation();
  },

  getNewSelection: function (currentSelection, reportTypesForCategory) {
    return (this.allTypesSelectedForCategory(currentSelection, reportTypesForCategory)) ?
      _.difference(currentSelection, reportTypesForCategory) :
      _.uniq(reportTypesForCategory.concat(currentSelection));
  },

  allTypesSelectedForCategory: function (currentSelection, reportTypesForCategory) {
    return _.isEqual(_.intersection(currentSelection, reportTypesForCategory), reportTypesForCategory);
  },

  render: function () {
    this.$el.html(template(
      _.extend({
        reportTypes: dashboard.reportTypes
      }, this.model.toJSON())));

    this.renderSelected();

    return this;
  },

  renderSelected: function () {
    this.$('.selectpicker').val(this.model.get('filter'));
    this.$('.selectpicker').selectpicker('render');
  }  

});

module.exports = ReportTypeFilter;
