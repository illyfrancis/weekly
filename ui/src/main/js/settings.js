var Backbone = require('backbone');
var repository = require('./repository');

var resolve = function (deferred) {
  return function () {
    deferred.resolve();
  };
};

var reject = function (deferred) {
  return function () {
    deferred.reject();
  };
};

var Settings = {

  loadDefaults: function () {
    var defaults = new Backbone.$.Deferred();
    this.loadClients()
      .done(this.loadCriteria(defaults))
      .fail(reject(defaults));

    return defaults.promise();
  },

  loadClients: function () {
    var clients;
    if (repository.user().isInternal()) {
      clients = repository.loadClients();
    } else {
      // for non-internal user deferred is always resolved
      clients = Backbone.$.Deferred().resolve().promise();
    }

    return clients;
  },

  loadCriteria: function (deferred) {
    return function () {
      repository.loadCriteria()
        .done(resolve(deferred))
        .fail(reject(deferred));
    };
  }
  
};

module.exports = Settings;
