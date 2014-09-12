var Backbone = require('backbone');
var Pagination = require('../models/pagination');
var Schedule = require('../models/schedule');

var Schedules = Backbone.Collection.extend({

  model: Schedule,

  initialize: function () {
    this.pagination = new Pagination();
  },

  setPagination: function (attrs) {
    this.pagination.set(attrs);
  },

  offset: function (page) {
    return this.pagination.offset(page);
  },

  limit: function () {
    return this.pagination.limit();
  }

});

module.exports = Schedules;
