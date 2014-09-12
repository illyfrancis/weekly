var Backbone = require('backbone');
var template = require('./templates/pagination.html');

var PaginationBar = Backbone.View.extend({

  className: 'page',

  events: {
    'click .select-page': 'selectPage',
    'click .first-page': 'firstPage',
    'click .last-page': 'lastPage',
    'click .next-page-set': 'nextPageSet',
    'click .previous-page-set': 'previousPageSet'
  },

  initialize: function () {
    // model is pagination
    this.listenTo(this.model, 'change', this.render);
  },

  render: function () {
    this.$el.html(template(this.model.toJSON()));
    this.$('#page' + this.model.get('currentPage')).addClass('active');
    this.setNavigationVisibility();
    return this;
  },

  selectPage: function (event) {
    var page = this.$(event.target).data('page');
    this.changePage(page);
  },

  firstPage: function () {
    this.changePage(1);
  },

  lastPage: function () {
    this.changePage(this.model.totalNumberOfPages());
  },

  nextPageSet: function () {

    if (this.model.isLastPageSet()) {
      return;
    }

    this.changePage(this.model.firstPageOfCurrentSet() + this.model.pagesPerSet);
  },

  previousPageSet: function () {

    if (this.model.isFirstPageSet()) {
      return;
    }

    this.changePage(this.model.firstPageOfCurrentSet() - this.model.pagesPerSet);
  },

  changePage: function (page) {
    Backbone.router.trigger('dashboard:search', page);
  },

  setNavigationVisibility: function () {

    if (this.model.totalNumberOfPages() <= 1) {
      this.$el.hide();
      return;
    }

    this.$el.show();

    if (this.model.isFirstPage()) {
      this.$('.first-page').addClass('disabled');
    }

    if (this.model.isFirstPageSet()) {
      this.$('.previous-page-set').addClass('disabled');
    }

    if (this.model.isLastPage()) {
      this.$('.last-page').addClass('disabled');
    }

    if (this.model.isLastPageSet()) {
      this.$('.next-page-set').addClass('disabled');
    }
  }
});

module.exports = PaginationBar;
