var Criterion = require('./criterion');
var Users = require('../collections/users');

// a criterion based on user(s). e.g. ReportOwner, CreatedBy or ModifiedBy fields
var CriterionUser = Criterion.extend({

  initialize: function () {
    this.users = new Users(this.get('filter'));
    this.listenTo(this.users, 'add remove reset', this.updateFilter);
    this.on('change:filter', this.updateUsers);
  },

  updateUsers: function (model, filter) {
    this.users.reset(filter, { silent: true });
  },

  updateFilter: function () {
    this.set('filter', this.users.toJSON(), { silent: true });
  },

  toQuery: function () {
    var query = this.buildQuery();
    var wrappedQuery = null;

    if (query.length === 1) {
      wrappedQuery = query.shift();
    } else if (query.length > 1) {
      wrappedQuery = {
        '$or': query
      };
    }

    return wrappedQuery;
  },

  buildQuery: function () {
    var userHasId = function (user) {
      return user.has('id');
    };

    var id = this.get('id');
    var userToQuery = function (user) {
      var item = {};
      item[id] = user.get('id');
      return item;
    };

    return this.users.chain().filter(userHasId).map(userToQuery).value();
  }

});

module.exports = CriterionUser;
