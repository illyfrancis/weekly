var Backbone = require('backbone');
var Client = Backbone.Model.extend({
  defaults: {
    name: 'ABC Co.'
  }
});

module.exports = Client;