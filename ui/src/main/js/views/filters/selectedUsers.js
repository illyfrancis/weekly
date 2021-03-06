var Backbone = require('backbone');
var SelectedUser = require('./selectedUser');
var template = require('./templates/selectedUsers.html');

var SelectedUsers = Backbone.View.extend({

  className: 'well well-sm user-list',

  initialize: function () {
    // model - a user based criterion
    // collection - users
    this.listenTo(this.model, 'change:filter', this.resetCollection);
    this.listenTo(this.collection, 'add remove reset', this.render);
  },

  resetCollection: function (model) {
    this.collection.reset(model.get('filter'));
  },

  render: function () {
    this.disposeSubViews();
    this.$el.empty().append(template());
    this.collection.each(this.appendUser, this);
    this.hideWhenEmpty();
    return this;
  },

  appendUser: function (user) {
    var selectedUser = this.createSubView(SelectedUser, {
      model: user,
      users: this.collection
    });
    this.$('ul').append(selectedUser.render().el);
  },

  hideWhenEmpty: function () {
    if (this.collection.length === 0) {
      this.$el.addClass('hidden');
    } else {
      this.$el.removeClass('hidden');
    }
  }

});

module.exports = SelectedUsers;
