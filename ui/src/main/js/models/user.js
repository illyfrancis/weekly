var Backbone = require('backbone');
var _ = require('underscore');

var User = Backbone.Model.extend({

  defaults: {
    id: '',
    name: ''
  },

  initialize: function (attrs) {
    this.isServiceDelivery = attrs ? _.indexOf(attrs.roles, 'SERV_DELIVER') > -1 : false;
    this.isAdmin = attrs ? _.indexOf(attrs.roles, 'ADMIN') > -1 : false;
  }

});

module.exports = User;
