/*global alert*/
var Backbone = require('backbone');
var template = require('../templates/client.html');
var moment = require('moment');

var ClientView = Backbone.View.extend({

  className: 'baz',

  events: {
    'click': 'toggle'
  },

  render: function () {
    this.$el.html(template(this.model.toJSON()));
    this.$el.tooltip({
      title: 'bar',
      placement: 'auto'
    });
    return this;
  },

  toggle: function () {
    alert('hola it is ' + moment().format());
  }
});

module.exports = ClientView;
