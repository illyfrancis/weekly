var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Client = require('./client'),
    ClientView = require('./clientView');

var view = new ClientView({
  model: new Client()
});

view.render();