var Backbone = require('backbone');
var template = require('./templates/clientsFilterItem.html');

var ClientsFilterItem = Backbone.View.extend({

  tagName: 'option',

  initialize: function () {
    this.listenTo(this.model, 'remove', this.dispose);
  },

  render: function () {
    this.$el.html(template(this.model.toJSON()));
    return this;
  }
  
});

module.exports = ClientsFilterItem;
