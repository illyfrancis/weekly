var Backbone = require('backbone');
var template = require('./templates/reportNameFilter.html');

var ReportNameFilter = Backbone.View.extend({

  events: {
    'blur input': 'onBlur',
    'keydown input': 'handleKeydown',
  },

  initialize: function () {
    // this.model is ReportName
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'invalid', this.showError);
  },

  onBlur: function () {
    var filter = this.$('input').val();
    this.model.setFilter(filter);
  },

  handleKeydown: function () {
    if (this.hasError) {
      this.clearError();
    }
  },

  showError: function (model, error) {
    if (!this.hasError) {
      this.hasError = true;
      this.$el.addClass('has-error');
      this.$('.help-block').removeClass('hidden');
      this.$('.help-block').text(error + ' : ' + model.get('title'));
    }
    this.$('input').focus();
  },

  clearError: function () {
    if (this.hasError) {
      this.hasError = false;
      this.$el.removeClass('has-error');
      this.$('.help-block').addClass('hidden');
    }
  },

  render: function () {
    this.$el.html(template(this.model.toJSON()));
    return this;
  }

});

module.exports = ReportNameFilter;
