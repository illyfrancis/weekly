var Backbone = require('backbone');

var Client = require('./models/client');
var ClientView = require('./views/clientView');
var AppRouter = Backbone.Router.extend({

  routes: {
    '': 'start',
    'about': 'showAbout', // http://app.acme.com/#about
    'search/:query': 'search',
    'client': 'showClient',
    '*default': 'defaultRoute'
  },

  start: function () {
    console.log('starting point...');
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
      model: new Client()
    });

    // hack
    Backbone.$('body').append(view.render().el);
  }
});

module.exports = AppRouter;
