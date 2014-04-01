var Backbone = require('backbone');

var Book = require('./models/book');
var Books = require('./models/books');
var ClientView = require('./views/clientView');
var BookView = require('./views/bookView');
var AppRouter = Backbone.Router.extend({

  routes: {
    '': 'start',
    'about': 'showAbout', // http://app.acme.com/#about
    'search/:query': 'search',
    'client': 'showClient',
    'book': 'showBook',
    '*default': 'defaultRoute'
  },

  start: function () {
    console.log('starting point...');
    var books = new Books();
    // books.fetch();
  },

  showAbout: function () {
    console.log('showAbout');
    this.navigate('edit');
  },

  search: function (query) {
    console.log('search with query [' + query + ']');
  },

  defaultRoute: function (other) {
    console.log('invalid, you attempted to reach: ' + other);
  },

  showClient: function () {
    var view = new ClientView({
      model: new Book()
    });

    // hack
    Backbone.$('body').append(view.render().el);
  },

  showBook: function () {
    var view = new BookView({
      model: new Book()
    });
    
    Backbone.$('body').append(view.render().el);
  }
});

module.exports = AppRouter;
