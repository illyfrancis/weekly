/* global Bloodhound */
var _ = require('underscore');
var Backbone = require('backbone');
var SelectedUsers = require('./selectedUsers');
var Users = require('../../collections/users');
var emptyTemplate = require('./templates/emptySuggestion.html');
var template = require('./templates/userLookupFilter.html');
var userTemplate = require('./templates/userSuggestion.html');

var UserLookupFilter = Backbone.View.extend({

  events: {
    'typeahead:selected': 'addSelectedUser'
  },

  initialize: function () {
    // this.model - a user based criterion
    if (!this.model.users) {
      this.users = new Users();
    } else {
      this.users = this.model.users;
    }

    this.selectedUsers = this.createSubView(SelectedUsers, {
      collection: this.users,
      model: this.model
    });

    this.initializeTypeaheadEngine();
  },

  initializeTypeaheadEngine: function () {
    this.hound = new Bloodhound({
      // TODO - figure out exactly how to configure this
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      limit: 250, // TODO increase limit dynamically
      remote: {
        url: './api/users/search?q=%QUERY'
      }
    });

    this.hound.initialize();
  },

  render: function () {
    this.$el.html(
      template(_.defaults({
        'viewId': this.cid
      }, this.model.toJSON()))
    );

    this.$('.selectedUsers').append(this.selectedUsers.render().el);
    this.typeahead();
    return this;
  },

  typeahead: function () {
    this.$('.typeahead').typeahead({
      hint: true,
      highlight: true,
      minLength: 3
    }, {
      name: 'users',
      displayKey: function (user) {
        return user.id;
      },
      source: this.hound.ttAdapter(),
      templates: {
        empty: emptyTemplate(),
        suggestion: userTemplate
      }
    });
  },

  addSelectedUser: function (event, suggestion) {
    this.users.add(suggestion);
    this.$('.typeahead').typeahead('val', '');
  }

});

module.exports = UserLookupFilter;
