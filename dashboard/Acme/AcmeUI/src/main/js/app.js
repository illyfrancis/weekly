var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
global.jQuery = $;

var Client = require('./models/client'),
    ClientView = require('./views/clientView');

var view = new ClientView({
  model: new Client()
});

$('body').append(view.render().el);