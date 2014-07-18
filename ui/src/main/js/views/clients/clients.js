var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./templates/clients.html');

var Clients = Backbone.View.extend({

  // this.collection is criteria

  className: 'clients',

  render: function () {
    this.$el.html(template());
    return this;
  }

});

module.exports = Clients;
