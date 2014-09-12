var Backbone = require('backbone');
var repository = require('../repository');

var Query = Backbone.Model.extend({

  initialize: function () {
    this.schedules = repository.schedules();
  },

  url: function () {
    var user = repository.user();
    var clients = repository.clients();

    return user.isInternal() ? './api/schedules/clients/' + clients.toList() : './api/schedules';
  },

  callbacks: function () {
    var schedules = this.schedules;
    
    return {
      success: function (model, response) {
        schedules.reset(response.schedules);
        schedules.setPagination({
          'currentPage': response.page,
          'totalRecords': response.total
        });
      },

      error: function () {
        schedules.trigger('error');
      }
    };
  },

  search: function (page) {
    var criteria = repository.criteria().toQuery();
    criteria.offset = this.schedules.offset(page);
    criteria.limit = this.schedules.limit();

    this.save(criteria, this.callbacks());
  }

});

module.exports = Query;
