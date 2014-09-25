var $ = global.jQuery = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;
require('bootstrap');
require('./customize');
require('./configure');

var repository = require('./repository');
var AppRouter = require('./router');
Backbone.router = new AppRouter();

var showApp = function () {
  repository.loadSchedules();
  Backbone.history.start();
};

var showError = function () {
  // show msg - 'could not load defaults'.
  // console.log('could not load defaults'); // for now
};

var settings = require('./settings');
settings.loadDefaults().
    fail(showError).
    always(showApp);

module.exports = Backbone.$;
