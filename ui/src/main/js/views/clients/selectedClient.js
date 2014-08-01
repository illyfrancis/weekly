var Backbone = require('backbone');
var template = require('./templates/selectedClient.html');

var SelectedClient = Backbone.View.extend({

  // tagName: 'li',

  events: {
    'click .remove': 'removeClient'
  },

  initialize: function (options) {
    this.clients = options.clients;
  },

  render: function () {
    this.$el.html(template(this.model.toJSON()));
    return this;
  },

  removeClient: function () {
    this.clients.remove(this.model);
  }

});

module.exports = SelectedClient;
