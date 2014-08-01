var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./templates/groupByOption.html');

var GroupByItem = Backbone.View.extend({

  tagName: 'li',

  events: {
    'click': 'selectGroupBy'
  },

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
  },

  selectGroupBy: function () {
    this.model.makeGroupField();
    Backbone.router.trigger('dashboard:search');
  },

  render: function () {
    this.$el.html(template(_.defaults({
      isGroupBy: this.model.isGroupField()
    }, this.model.toJSON())));
    return this;
  }

});

module.exports = GroupByItem;
