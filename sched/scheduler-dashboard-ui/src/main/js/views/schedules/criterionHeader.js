var Backbone = require('backbone');
var template = require('./templates/criterionHeader.html');

var CriterionHeader = Backbone.View.extend({

  tagName: 'th',

  events: {
    'click': 'setSortField'
  },

  initialize: function () {
    // this.model = criterion
    this.listenTo(this.model, 'change', this.render);
  },

  render: function () {
    this.$el.html(template(this.model.attributes));
    this.renderSortOrder();
    this.renderGroupBy();
    return this;
  },

  renderSortOrder: function () {
    if (this.model.isDescendingSort()) {
      this.$el.addClass('dropup');
    } else {
      this.$el.removeClass('dropup');
    }

    if (this.model.isSortField()) {
      this.$('.sort-order').addClass('caret');
    } else {
      this.$('.sort-order').removeClass('caret');
    }
  },

  renderGroupBy: function () {
    if (this.model.isGroupField()) {
      this.$('.group-by').addClass('glyphicon glyphicon-star');
    } else {
      this.$('.group-by').removeClass('glyphicon glyphicon-star');
    }
  },

  setSortField: function () {
    this.model.makeSortField();

    // trigger search event
  }

});

module.exports = CriterionHeader;
