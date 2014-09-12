var Backbone = require('backbone');
var template = require('./templates/dateRangeFilter.html');
var _ = require('underscore');

var DateRangeFilter = Backbone.View.extend({

  events: {
    'changeDate .input-group.date.from': 'changeFromDate',
    'changeDate .input-group.date.to': 'changeToDate',
    'change .input-group.date.from>input': 'changeFromDate',
    'change .input-group.date.to>input': 'changeToDate'
  },

  initialize: function () {

    this.currentDateRange = {};
    this.listenTo(this.model, 'invalid', this.showError);
  },

  showError: function (model, error) {

    if (!this.hasError) {
      this.hasError = true;
      this.$el.addClass('has-error');
      this.$('.help-block').removeClass('hidden');
      this.$('.help-block').text(error + ' : ' + model.get('title'));
    }
  },

  clearError: function () {
    if (this.hasError) {
      this.hasError = false;
      this.$el.removeClass('has-error');
      this.$('.help-block').addClass('hidden');
    }
  },

  changeFromDate: function () {

    this.currentDateRange.from = this.$('.input-group.date.from').datepicker('getDate');
    this.updateModel();
  },

  changeToDate: function () {

    this.currentDateRange.to = this.$('.input-group.date.to').datepicker('getDate');
    this.updateModel();
  },

  updateModel: function () {

    this.clearError();
    this.model.setFilter(_.clone(this.currentDateRange));
  },

  render: function () {

    this.$el.html(template(this.model.toJSON()));
    var fromDate = this.$('.input-group.date.from');
    var toDate = this.$('.input-group.date.to');

    _.each([fromDate, toDate], function (item) {
      item.datepicker({
        format: "mm/dd/yyyy",
        multidate: false,
        autoclose: true,
        todayHighlight: true,
        clearBtn: true
      });
    });

    this.initializeDatePickers(fromDate, toDate);

    return this;
  },

  initializeDatePickers: function (fromDate, toDate) {

    if (this.model.hasValidFilter()) {

      var filter = this.model.get('filter');
      this.currentDateRange = {
        from: filter.from,
        to: filter.to
      };

      fromDate.datepicker('update', filter.from);
      toDate.datepicker('update', filter.to);
    }
  }
});

module.exports = DateRangeFilter;
