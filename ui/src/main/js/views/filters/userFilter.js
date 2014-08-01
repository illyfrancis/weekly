var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./templates/userFilter.html');

var UserFilter = Backbone.View.extend({

  events: {
    'blur input': 'copyFilterValue',
    'keydown input': 'handleKeydown',
  },

  initialize: function () {
    this.listenTo(this.model, 'change:filter', this.render);
    this.listenTo(this.model, 'invalid', this.showError);
  },

  copyFilterValue: function () {
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
    this.$el.html(
      template(_.defaults({
        'viewId': this.cid
      }, this.model.toJSON()))
    );

    return this;
  }

});

module.exports = UserFilter;
