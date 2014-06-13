var Backbone = require('backbone');
var template = require('./templates/selectedUser.html');

var SelectedUser = Backbone.View.extend({

  tagName: 'li',

  events: {
    'click .remove': 'removeUser'
  },

  initialize: function (options) {
    this.users = options.users;
  },

  render: function () {
    this.$el.html(template(this.model.toJSON()));
    return this;
  },

  removeUser: function () {
    this.users.remove(this.model);
  }

});

module.exports = SelectedUser;
