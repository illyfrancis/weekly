var PageableCollection = require('backbone-pageable');
var Backbone = require('backbone');

var Book = Backbone.Model.extend({
});

var Books = Backbone.PageableCollection.extend({
  model: Book,
  url: 'localhost:9091/books'
});

module.exports = Books;