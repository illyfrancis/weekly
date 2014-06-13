var Backbone = require('backbone');
var Schedule = require('../models/schedule');

var Schedules = Backbone.Collection.extend({

  url: './api/schedules',

  model: Schedule,

  parse: function (response) {
    return response.schedules;
  }

});

module.exports = Schedules;
