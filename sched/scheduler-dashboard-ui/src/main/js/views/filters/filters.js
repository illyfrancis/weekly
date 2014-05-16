var Backbone = require('backbone');
var _ = require('underscore');
var repository = require('../../repository');
var template = require('./templates/filters.html');
var FilterManager = require('./filterManager');

var Filters = Backbone.View.extend({

  className: 'filters',

  events: {
    'click .dashboard': 'showDashbaord'
  },

  initialize: function () {
    this.criteria = repository.loadCriteria();
  },

  render: function () {
    this.$el.html(template());

    var id, FilterView, filter;
    this.criteria.each(function (criterion) {
      id = criterion.id;
      FilterView = FilterManager[id];
      
      if (!_.isUndefined(FilterView)) {
        filter = new FilterManager[id]({
          model: criterion,
          el: this.$('.' + id + 'Filter')
        });
        filter.render();
      }
    }, this);
    return this;
  },

  showDashbaord: function () {
    Backbone.router.navigate('', {
      trigger: true
    });
  }

});

module.exports = Filters;
