var Backbone = require('backbone');
var template = require('../templates/client.html');

var ClientView = Backbone.View.extend({

  // el: 'body',

  events: {
    'click': 'toggle'
  },

  render: function () {
    this.$el.html(template(this.model.toJSON()));
    return this;
  },

  toggle: function () {
    alert('hola');
  }

});

module.exports = ClientView;
