var Backbone = require('backbone');
var template = require('./templates/notification.html');

var Notification = Backbone.View.extend({

  events: {
    'click .close': 'dispose'
  },

  initialize: function (options) {
    this.text = options.text;
    this.type = options.type;
  },

  render: function () {

    this.$el.append(template({text: this.text, type: this.type}));

    return this;
  }
});

module.exports = Notification;
