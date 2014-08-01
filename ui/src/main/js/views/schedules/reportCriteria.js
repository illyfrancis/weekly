var Backbone = require('backbone');
var template = require('./templates/reportCriteria.html');
var ReportCriteriaParameter = require('./reportCriteriaParameter');
var ReportCriteriaCollection = require('../../collections/reportCriteria');

var ReportCriteria = Backbone.View.extend({

  events: {
    'click .exit': 'exit',
    // dispose when css transition completes, - refer to doc for detail
    'hidden.bs.modal': 'dispose'
  },

  initialize: function () {
    this.collection = new ReportCriteriaCollection();
    this.listenTo(this.collection, 'reset', this.renderParams);
  },

  render: function () {
    this.$el.html(template());
    return this;
  },

  renderParams: function () {
    this.disposeSubViews();
    this.collection.each(this.appendParameters, this);
  },

  appendParameters: function (reportCriteriaParameter) {
    var parameterView = this.createSubView(ReportCriteriaParameter, { model: reportCriteriaParameter });
    this.$('.report-criteria-body').append(parameterView.render().el);
  },

  show: function (reportCriteriaId) {
    this.collection.setReportCriteriaId(reportCriteriaId);
    this.collection.fetch({reset: true});
    this.$('.criteria').modal('show');
  },

  exit: function () {
    this.$('.criteria').modal('hide');
  }
  
});

module.exports = ReportCriteria;
