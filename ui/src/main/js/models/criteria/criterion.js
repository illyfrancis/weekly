var Backbone = require('backbone');
var _ = require('underscore');

var Criterion = Backbone.Model.extend({
  defaults: {
    filter: null,
    isSortable: true,
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

  isSortable: function () {
    return this.get('isSortable') && !this.isGroupField();
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

  filterWith: function () {
    return this.has('filterWith') ? this.get('filterWith') : this.get('id');
  },

  sortWith: function () {
    return this.has('sortWith') ? this.get('sortWith') : this.get('id');
  },

  toSortBy: function () {
    return {
      'field': this.sortWith(),
      'order': this.get('sortOrder')
    };
  },

  toGroupBy: function () {
    return {
      'field': this.sortWith(),
      'order': this.get('groupOrder')
    };
  },

  hasValidFilter: function () {
    return this.get('filter') && true;
  },

  toQuery: function () {
    return null;
  },

  parse: function (response) {
    return _.omit(response, 'title');
  }

});

module.exports = Criterion;
