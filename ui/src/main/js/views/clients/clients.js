/* global Bloodhound */
var _ = require('underscore');
var Backbone = require('backbone');
var SelectedClients = require('./selectedClients');
var template = require('./templates/clients.html');
var emptyTemplate = require('./templates/emptySuggestion.html');
var clientTemplate = require('./templates/clientSuggestion.html');

var Clients = Backbone.View.extend({

  className: 'clients',

  events: {
    'click .apply': 'applyClients',
    'click .add-client': 'addClient',
    'typeahead:selected': 'handleSelect',
    'keyup .typeahead.tt-input': 'handleKeyup',
    'focus .typeahead': 'clearError',
    'hidden.bs.modal': 'dispose'
  },

  initialize: function (options) {
    this.hasError = false;

    this.selectedUsers = this.createSubView(SelectedClients, {
      collection: this.collection,
      criteria: options.criteria
    });

    this.initializeTypeaheadEngine();
  },

  initializeTypeaheadEngine: function () {
    this.hound = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      limit: 50,
      remote: {
        url: './api/clients/search?q=%QUERY'
      }
    });

    this.hound.initialize();
  },

  render: function () {
    this.$el.html(template({
      'viewId': this.cid
    }));

    this.$('.selectedClients').append(this.selectedUsers.render().el);
    this.typeahead();

    return this;
  },

  typeahead: function () {
    this.$('.typeahead').typeahead({
      hint: true,
      highlight: true,
      minLength: 3
    }, {
      name: 'clients',
      displayKey: function (client) {
        return client.id;
      },
      source: this.hound.ttAdapter(),
      templates: {
        empty: emptyTemplate(),
        suggestion: clientTemplate
      }
    });
  },

  applyClients: function () {
    Backbone.router.trigger('dashboard:search');
    this.collection.save();
    this.$('.modal').modal('hide');
  },

  handleSelect: function (event, suggestion) {
    this.selected = suggestion;
  },

  handleKeyup: function (event) {
    if (this.hasError) {
      this.clearError();
    }

    if (event.keyCode === 13) {
      this.addClient();
    }
  },

  clearError: function () {
    if (this.hasError) {
      this.hasError = false;
      this.$el.removeClass('has-error');
      this.$('.help-block').addClass('hidden');
    }
  },

  addClient: function () {
    if (this.hasValidSelection()) {
      this.collection.add(this.selected);
      this.selected = null;
      this.$('.typeahead').typeahead('val', '');
    } else {
      this.showError();
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

  hasValidSelection: function () {
    if (_.isObject(this.selected) && _.has(this.selected, 'id')) {
      var clientId = this.$('.typeahead.tt-input').val();
      if (this.selected.id === clientId) {
        return true;
      }
    }

    return false;
  }

});

module.exports = Clients;
