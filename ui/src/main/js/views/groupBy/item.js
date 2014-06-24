var Backbone = require('backbone');
var _ = require('underscore');
var template = require('./templates/item.html');

var GroupByItem = Backbone.View.extend({

  tagName: 'li',

  events: {
    'click': 'foo'
  },

  foo: function () {
    console.log('fooooooo: ' + this.model.get('id'));
  },

  render: function () {
    this.$el.html(template(this.model.toJSON()));
    return this;
  }

});

module.exports = GroupByItem;
