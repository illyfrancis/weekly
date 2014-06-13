var Backbone = require('backbone');
var User = require('../models/user');

var Users = Backbone.Collection.extend({

  model: User

});

module.exports = Users;
