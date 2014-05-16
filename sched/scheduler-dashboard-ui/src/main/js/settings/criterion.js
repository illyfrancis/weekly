var Backbone = require('backbone');
var _ = require('underscore');

// TODO
// instead of having toSort .. or toGroupby etc on criteria, 
// let's pass the critera and derive sort and groupby in another function.

var Criterion = Backbone.Model.extend({
  defaults: {
    isFilter: false,
    filterBy: '',
    sortOrder: 0,
    groupOrder: 0,
    displayOrder: -1
  },

  isSortField: function () {
    return this.get('sortOrder') !== 0;
  },

  makeSortField: function () {
    if (this.isGroupField()) {
      return;
    }

    if (!this.isSortField()) {
      this.set('sortOrder', -1);
    }

    // reverse sort order
    var currentOrder = this.get('sortOrder');
    this.set('sortOrder', currentOrder * -1);

    // remove sort from other criterion
    if (!_.isUndefined(this.collection)) {
      this.collection.each(function (criterion) {
        if (criterion !== this) {
          criterion.set('sortOrder', 0);
        }
      }, this);
    }
  },

  isDescendingSort: function () {
    return this.get('sortOrder') === -1;
  },

  isGroupField: function () {
    return this.get('groupOrder') !== 0;
  },

  makeGroupField: function () {
    if (!this.isGroupField()) {
      this.set('groupOrder', 1);
      this.set('sortOrder', 0);
    }

    // remove group from other criterion
    if (!_.isUndefined(this.collection)) {
      this.collection.each(function (criterion) {
        if (criterion !== this) {
          criterion.set('groupOrder', 0);
        }
      }, this);
    }
  },

  setFilter: function (filterBy) {
    // trim and validate
    if (_.isNull(filterBy) || _.isUndefined(filterBy)) {
      filterBy = '';
    }
    filterBy = _.escape(filterBy.trim());
    this.set('filterBy', filterBy);
    this.set('isFilter', filterBy.length > 0);
  },

  validate: function (attrs, options) {
    _.isUndefined(options);
    
    if (attrs.filterBy.length > 0 && !attrs.isFilter) {
      return 'filter not applied';
    }
  },

  toQuery: function () {
    // noop
    // unescape filterBy 
  }

});

module.exports = Criterion;
