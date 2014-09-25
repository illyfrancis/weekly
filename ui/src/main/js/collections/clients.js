var Backbone = require('backbone');
var Client = require('../models/client');

var Clients = Backbone.Collection.extend({

  url: './api/settings/clients',

  model: Client,

  toJSON: function () {
    return {
      'clients': this.models
    };
  },

  parse: function (response) {
    return response.clients;
  },

  toList: function () {
    var ids = this.map(function (client) {
      return client.get('id');
    });

    return ids.join(',');
  }

});

module.exports = Clients;
