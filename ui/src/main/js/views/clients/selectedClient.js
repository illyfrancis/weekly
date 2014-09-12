var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./templates/selectedClient.html');

var SelectedClient = Backbone.View.extend({

  events: {
    'click .remove': 'removeClient'
  },

  initialize: function (options) {
    this.clients = options.clients;
    this.clientsCriterion = options.clientsCriterion;
  },

  render: function () {
    this.$el.html(template(this.model.toJSON()));
    return this;
  },

  removeClient: function () {
    var filter = this.clientsCriterion.get('filter');

    if (this.isClientUsedInFilter(filter)) {
      this.$el.children().popover({
        content: 'Cannot remove, used for search',  // i18n
        trigger: 'hover'
      });

      this.$el.children().popover('show');
    } else {
      this.clients.remove(this.model);
    }
  },

  isClientUsedInFilter: function (filter) {
    return _.isArray(filter) ? _.indexOf(filter, this.model.id) > -1 : false;
  }

});

module.exports = SelectedClient;
