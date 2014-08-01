var Backbone = require('backbone');
var SelectedClient = require('./selectedClient');
var template = require('./templates/selectedClients.html');

var SelectedClients = Backbone.View.extend({

  className: 'well well-sm',

  initialize: function () {
    // collection - clients
    this.listenTo(this.collection, 'add remove reset', this.render);
  },

  render: function () {
    this.disposeSubViews();
    this.$el.empty().append(template());
    this.collection.each(this.appendClient, this);
    this.hideWhenEmpty();
    return this;
  },

  appendClient: function (client) {
    var selectedClient = this.createSubView(SelectedClient, {
      model: client,
      clients: this.collection
    });
    this.$el.append(selectedClient.render().el);
  },

  hideWhenEmpty: function () {
    if (this.collection.length === 0) {
      this.$el.addClass('hidden');
    } else {
      this.$el.removeClass('hidden');
    }
  }

});

module.exports = SelectedClients;
