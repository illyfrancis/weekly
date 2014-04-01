/*global alert*/
var Backbone = require('backbone');
var template = require('../templates/book.html');
var moment = require('moment');

var BookView = Backbone.View.extend({

  className: 'book',

  events: {
    'click': 'toggle'
  },

  initialize: function (options) {
    console.log(options);
    this.listenTo(this.model, 'change', this.render);
  },

  render: function () {
    this.$el.html(template(this.model.toJSON()));
    return this;
  },

  toggle: function () {
    this.model.fetch();
    alert('hola it is ' + moment().format());
  }
});

module.exports = BookView;
