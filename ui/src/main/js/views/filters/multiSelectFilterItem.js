var Backbone = require('backbone');
var template = require('./templates/multiSelectFilterItem.html');

var MultiSelectFilterItem = Backbone.View.extend({

  tagName: 'option',

  initialize: function (options) {
    this.text = options.text;
  },

  render: function () {
    this.$el.html(template({
      text: this.text
    }));
    return this;
  }

});

module.exports = MultiSelectFilterItem;
