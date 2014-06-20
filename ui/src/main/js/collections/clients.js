var Backbone = require('backbone');

var Clients = Backbone.Collection.extend({

  url: '/api/clients'

});

module.exports = Clients;
