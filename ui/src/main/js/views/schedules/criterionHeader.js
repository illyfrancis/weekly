var Backbone = require('backbone');
var template = require('./templates/criterionHeader.html');
var _ = require('underscore');
_.str = require('underscore.string');

var CriterionHeader = Backbone.View.extend({

  tagName: 'th',

  className: function () {
    return _.str.dasherize(this.model.id) + (this.model.isSortable() ? ' sortable' : '');
  },

  events: {
    'click': 'setSortField'
  },

  initialize: function () {
    // this.model = criterion
    this.listenTo(this.model, 'change', this.render);
  },

  render: function () {
    this.$el.html(template(this.model.toJSON()));
    this.renderFilterMarker();
    this.renderSortOrder();
    this.renderGroupBy();
    return this;
  },

  renderFilterMarker: function () {
    this.updateClasses(this.model.hasValidFilter(), this.$('.filter-by'), 'glyphicon glyphicon-filter');
  },

  renderSortOrder: function () {
    this.updateClasses(this.model.isDescendingSort(), this.$el, 'dropup');
    this.updateClasses(this.model.isSortField(), this.$('.sort-order'), 'caret');
  },

  renderGroupBy: function () {
    this.updateClasses(this.model.isGroupField(), this.$('.group-by'), 'glyphicon glyphicon-pushpin');
  },

  updateClasses: function (condition, selector, className) {
    if (condition) {
      selector.addClass(className);
    } else {
      selector.removeClass(className);
    }
  },

  setSortField: function () {
    if (this.model.isSortable()) {
      this.model.makeSortField();
      Backbone.router.trigger('dashboard:search');
      this.model.collection.save();
    }
  }

});

module.exports = CriterionHeader;
