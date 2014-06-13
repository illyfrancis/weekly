var Backbone = require('backbone');
var _ = require('underscore');
var template = require('./templates/filters.html');
var FilterManager = require('./filterManager');

var Filters = Backbone.View.extend({

  // this.collection is criteria

  className: 'filters',

  events: {
    'click .apply': 'applyFilters'
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
    // generate query
    var query = this.collection.toQuery();

    // initiate search
    Backbone.router.trigger('dashboard:search', query);

    // 3. save filters
  }

});

module.exports = Filters;
