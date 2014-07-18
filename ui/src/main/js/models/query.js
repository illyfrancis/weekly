var Backbone = require('backbone');

var Query = Backbone.Model.extend({

  initialize: function (attrs, options) {
    this.schedules = options.schedules;
  },

  url: function () {
    return './api/schedules';
      // depends on user's role
      // '/api/schedules', or /api/schedules/clients/{clients}
  },

  search: function (criteria) {
    var schedules = this.schedules;
    var options = {
      success: function (model, response) {
        schedules.reset(response.schedules);
      },

      error: function () {
        schedules.trigger('error');
      }
    };

    criteria.query = JSON.stringify(criteria.query);
    criteria.offset = 0;
    criteria.limit = 50;
    this.save(criteria, options);
  }

});

module.exports = Query;
