var _ = require('underscore');
var Backbone = require('backbone');
var FilterManager = require('./filterManager');
var template = require('./templates/filters.html');

var Filters = Backbone.View.extend({

  // this.collection is criteria

  className: 'filters',

  events: {
    'click .apply': 'applyFilters',
    'click .cancel': 'cancelFilters'
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
          el: this.$('.' + id + 'Filter')
        });
        filter.render();
      }
    }, this);

    // enable select picker
    this.$('.selectpicker').selectpicker();

    return this;
  },

  applyFilters: function () {
    var query = this.collection.toQuery();
    // initiate search by triggering 'search' event
    Backbone.router.trigger('dashboard:search', query);
    this.collection.save();
    this.$('.modal').modal('hide');
  },

  cancelFilters: function () {
    this.collection.fetch();
    this.$('.modal').modal('hide');
  }

});

module.exports = Filters;
