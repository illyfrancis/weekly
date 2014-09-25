var _ = require('underscore');
_.str = require('underscore.string');
var Backbone = require('backbone');
var FilterManager = require('./filterManager');
var template = require('./templates/filters.html');

var Filters = Backbone.View.extend({

  // this.collection is criteria

  className: 'filters',

  events: {
    'click .apply': 'applyFilters',
    'click .cancel': 'cancelFilters',
    'hidden.bs.modal .modal': 'dispose',
  },

  initialize: function (options) {
    this.user = options.user;
  },

  render: function () {
    this.$el.html(template());

    var id, FilterView, filter;
    this.collection.each(function (criterion) {
      id = criterion.id;
      FilterView = FilterManager[id];

      if (!_.isUndefined(FilterView)) {
        filter = this.createSubView(FilterView, {
          model: criterion,
          el: this.$('.' + _.str.dasherize(id)),
          user: this.user
        });
        filter.render();
      }
    }, this);

    // enable select picker
    this.$('.selectpicker').selectpicker();

    return this;
  },

  applyFilters: function () {
    // initiate search by triggering 'search' event
    Backbone.router.trigger('dashboard:search');
    this.collection.save();
    this.$('.modal').modal('hide');
  },

  cancelFilters: function () {
    this.$('.modal').modal('hide');
    this.collection.fetch();
  }

});

module.exports = Filters;
