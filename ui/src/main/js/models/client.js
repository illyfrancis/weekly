var Backbone = require('backbone');

var Client = Backbone.Model.extend({

  defaults: {
    id: '',
    name: ''
  }

});

module.exports = Client;
