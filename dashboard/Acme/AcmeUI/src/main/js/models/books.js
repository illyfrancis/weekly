var Backbone = require('backbone');
require('backbone-pageable');
var Book = require('./book');

var Books = Backbone.PageableCollection.extend({
  model: Book,
  url: '/api/books',
  state: {
    firstPage: 1,
    pageSize: 50
  }
});

module.exports = Books;