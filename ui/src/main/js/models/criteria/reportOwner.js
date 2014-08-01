var Criterion = require('./criterion');
var Users = require('../../collections/users');

var ReportOwner = Criterion.extend({

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
      wrappedQuery = {};
      wrappedQuery[this.filterWith()] = {
        '$eq': query.shift()
      };
    } else if (query.length > 1) {
      wrappedQuery = {};
      wrappedQuery[this.filterWith()] = {
        '$in': query
      };
    }

    return wrappedQuery;
  },

  buildQuery: function () {
    var userHasId = function (user) {
      return user.has('id');
    };

    var userToQuery = function (user) {
      return user.get('id');
    };

    return this.users.chain().filter(userHasId).map(userToQuery).value();
  }

});

module.exports = ReportOwner;
