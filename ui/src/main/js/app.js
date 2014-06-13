var $ = global.jQuery = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;
require('bootstrap');
require('./customize');
require('./configure');

var AppRouter = require('./router');
var repository = require('./repository');
//repository.loadCriteria(function () {
  Backbone.router = new AppRouter();
  Backbone.history.start();
  repository.loadSchedules();
//});

module.exports = Backbone.$;