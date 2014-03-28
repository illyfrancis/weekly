var PageableCollection = require('backbone-pageable');
var Backbone = require('backbone');

var Book = Backbone.Model.extend({
});

var Books = Backbone.PageableCollection.extend({
  model: Book,
  url: 'http://localhost:9091/books',
  state: {
    firstPage: 1,
    pageSize: 50
  }
});

module.exports = Books;