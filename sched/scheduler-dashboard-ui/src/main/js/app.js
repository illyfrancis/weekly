var $ = global.jQuery = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;
require('bootstrap');
require('./customize');

var repository = require('./repository');

repository.loadSchedules();

repository.loadCriteria(function () {
  console.log('done loading');
  var AppRouter = require('./router');
  Backbone.router = new AppRouter();
  Backbone.history.start();
});

