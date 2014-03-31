var PageableCollection = require('backbone-pageable');
var Backbone = require('backbone');
var Book = require('./book');

var Books = Backbone.PageableCollection.extend({
  model: Book,
  url: '/books',
  state: {
    firstPage: 1,
    pageSize: 50
  }
});

module.exports = Books;