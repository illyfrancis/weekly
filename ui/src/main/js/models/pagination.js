var _ = require('underscore');
var Backbone = require('backbone');

var Pagination = Backbone.Model.extend({

  defaults: {
    currentPage: 1,
    totalRecords: 0
  },

  pageSize: 18,
  pagesPerSet: 5,

  offset: function (page) {
    return (page - 1) * this.pageSize;
  },

  limit: function () {
    return this.pageSize;
  },

  isFirstPage: function () {
    return this.get('currentPage') === 1;
  },

  isLastPage: function () {
    return this.get('currentPage') === this.totalNumberOfPages();
  },

  totalNumberOfPages: function () {
    return Math.ceil(this.get('totalRecords') / this.pageSize);
  },

  firstPageOfCurrentSet: function () {
    return (Math.floor((this.get('currentPage') - 1) / this.pagesPerSet)) * this.pagesPerSet + 1;
  },

  numberOfPagesToDisplay: function () {
    return Math.min(this.pagesPerSet, this.totalNumberOfPages() - this.firstPageOfCurrentSet() + 1);
  },

  isFirstPageSet: function () {
    return this.firstPageOfCurrentSet() === 1;
  },

  isLastPageSet: function () {
    return this.firstPageOfCurrentSet() + this.pagesPerSet - 1 >= this.totalNumberOfPages();
  },

  pageNumbersOfCurrentSet: function () {
    var firstPageNumber = this.firstPageOfCurrentSet();
    return _.map(_.range(this.numberOfPagesToDisplay()), function (n) {
      return firstPageNumber + n;
    });
  },

  toJSON: function () {
    return _.extend(_.clone(this.attributes), {
      pages: this.pageNumbersOfCurrentSet(),
      totalPages: this.totalNumberOfPages()
    });
  }

});

module.exports = Pagination;
