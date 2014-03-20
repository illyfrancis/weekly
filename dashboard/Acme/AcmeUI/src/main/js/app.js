var $ = global.jQuery = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
require('bootstrap');

var AppRouter = require('./router'),
  Client = require('./models/client'),
  ClientView = require('./views/clientView');

var view = new ClientView({
  model: new Client()
});

$('body').append(view.render().el);

var router = new AppRouter();
Backbone.history.start();
