var Backbone = require('backbone');
var Book = Backbone.Model.extend({
  defaults: {
    'title': 'no title yet'
  },
  urlRoot: '/api/book'
});

module.exports = Book;