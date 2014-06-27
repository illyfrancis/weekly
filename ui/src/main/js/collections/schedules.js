var Backbone = require('backbone');
var Schedule = require('../models/schedule');

var Schedules = Backbone.Collection.extend({

  url: './api/schedules',

  model: Schedule,

  parse: function (response) {
    return response.schedules;
  },

  sync: function (method, model, options) {
    // hack to force POST when 'fetch' - revise
    if ('read' === method) {
      method = 'create';
    }

    return Backbone.sync.call(this, method, model, options);
  }

});

module.exports = Schedules;
