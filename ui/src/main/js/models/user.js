var _ = require('underscore');
var Backbone = require('backbone');

var User = Backbone.Model.extend({

  defaults: {
    id: '',
    name: ''
  },

  initialize: function (attrs) {
    this.isServiceDelivery = attrs ? _.indexOf(attrs.roles, 'SERV_DELIVER') > -1 : false;
    this.isAdmin = attrs ? _.indexOf(attrs.roles, 'ADMIN') > -1 : false;
  },

  isInternal: function () {
    return this.isServiceDelivery || this.isAdmin;
  },

  hasAdminRole: function () {
    return this.isAdmin;
  },

  toPermission: function () {
    return {
      'internal': this.isInternal()
    };
  }

});

module.exports = User;
