var Backbone = require('backbone');
var template = require('./templates/loader.html');

var Loader = Backbone.View.extend({
  render: function () {
    this.$el.html(template());
    return this;
  }
});

module.exports = Loader;
