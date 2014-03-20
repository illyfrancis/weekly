var Backbone = require('backbone');

var AppRouter = Backbone.Router.extend({

  routes: {
    'about': 'showAbout', // http://app.acme.com/#about
    'search/:query': 'search',
    'other': 'defaultRoute'
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
  }
});

module.exports = AppRouter;