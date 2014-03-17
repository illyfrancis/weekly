var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Client = require('./models/client'),
    ClientView = require('./views/clientView');

var view = new ClientView({
  model: new Client()
});

// view.render();