var Backbone = require('backbone');
var Client = require('../models/client');

var Clients = Backbone.Collection.extend({

  model: Client,

  toList: function () {
    var ids = this.map(function (client) {
      return client.get('id');
    });

    return ids.join(',');
  }

});

module.exports = Clients;
