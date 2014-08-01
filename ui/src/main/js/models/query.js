var Backbone = require('backbone');

var Query = Backbone.Model.extend({

  initialize: function (attrs, options) {
    this.schedules = options.schedules;
    this.user = options.user;
    this.clients = options.clients;
  },

  url: function () {
    return this.user.isInternal() ? './api/schedules/clients/' + this.clients.toList() : './api/schedules';
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
