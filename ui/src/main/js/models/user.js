var Backbone = require('backbone');

var User = Backbone.Model.extend({
  defaults: {
    id: '',
    name: ''
  }
});

module.exports = User;
