var Backbone = require('backbone');
var Schedule = require('./schedule');

var Schedules = Backbone.Collection.extend({

  url: '/api/schedules',

  model: Schedule,

  parse: function (response, options) {
    return response.schedules;
  }

});

module.exports = Schedules;