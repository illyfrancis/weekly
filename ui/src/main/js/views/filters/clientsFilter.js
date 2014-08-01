var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./templates/clientsFilter.html');
var ClientsFilterItem = require('./clientsFilterItem');
var repository = require('../../repository'); // this is not quite right!!!

var ClientsFilter = Backbone.View.extend({

  events: {
    'change .selectpicker': 'setFilterWithSelection'
  },

  initialize: function () {
    // this.model is client
    this.clients = repository.clients();
    this.listenTo(this.clients, 'add', this.addClientToSelector);
    this.listenTo(this.clients, 'remove reset', this.updateFilter);
  },

  render: function () {
    this.$el.html(template(this.model.toJSON()));
    this.clients.each(this.appendItem, this);
    return this;
  },

  setFilterWithSelection: function () {
    var selectedClients = this.$('select').val();
    this.model.setFilter(selectedClients);
  },

  appendItem: function (client, options) {
    var item = this.createSubView(ClientsFilterItem, {
      model: client,
      attributes: _.defaults({
        'value': client.id
      }, options)
    });
    this.$('select').append(item.render().el);
  },

  addClientToSelector: function (client) {
    this.appendItem(client);
    this.refreshSelector();
  },

  refreshSelector: function () {
    this.$('.selectpicker').selectpicker('refresh');
  },

  updateFilter: function () {
    this.refreshSelector();
    this.setFilterWithSelection();
  }

});

module.exports = ClientsFilter;
