var Criterion = require('./criterion');
var Users = require('../collections/users');

// a criterion based on user(s). e.g. ReportOwner, CreatedBy or ModifiedBy fields
var CriterionUser = Criterion.extend({

  initialize: function () {
    this.users = new Users(this.get('filterBy'));
    this.listenTo(this.users, 'add remove reset', this.updateFilter);
  },

  updateFilter: function () {
    this.set('filterBy', this.users.toJSON());
  },

  toQuery: function () {
    var query = [];
    this.users.each(function (user) {
      if (user.has('id')) {
        query.push('{"' + this.get('id') + '":"' + user.get('id') + '"}');
      }
    }, this);

    var queryString = '';
    if (query.length === 1) {
      queryString = query.shift();
    } else if (query.length > 1) {
      queryString = '{"$or":[' + query.join(',') + ']}';
    }

    return queryString;
  }

});

module.exports = CriterionUser;
