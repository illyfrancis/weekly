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
    'click .adduser': 'addUser',
    'keyup .typeahead.tt-input': 'handleKeyup',
    'focus .typeahead': 'clearError',
    'typeahead:selected': 'onSelect'
  },

  initialize: function () {
    // this.model - a user based criterion
    this.hasError = false;

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

  addUser: function () {
    if (this.hasValidSelection()) {
      this.users.add(this.selected);
      this.selected = null;
      this.$('.typeahead').typeahead('val', '');
    } else {
      this.showError();
    }
  },

  hasValidSelection: function () {
    if (_.isObject(this.selected) && _.has(this.selected, 'id')) {
      var userId = this.$('.typeahead.tt-input').val();
      if (this.selected.id === userId) {
        return true;
      }
    }

    return false;
  },

  handleKeyup: function (event) {
    if (this.hasError) {
      this.clearError();
    }

    if (event.keyCode === 13) {
      this.addUser();
    }
  },

  showError: function () {
    if (!this.hasError) {
      this.hasError = true;
      this.$el.addClass('has-error');
      this.$('.help-block').removeClass('hidden');
      this.$('.typeahead').typeahead('close');
    }
  },

  clearError: function () {
    if (this.hasError) {
      this.hasError = false;
      this.$el.removeClass('has-error');
      this.$('.help-block').addClass('hidden');
    }
  },

  onSelect: function (event, suggestion) {
    this.selected = suggestion;
  }

});

module.exports = UserLookupFilter;