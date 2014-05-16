var Criterion = require('./criterion');

var ClientId = Criterion.extend({

  initialize: function () {
    this.set({
      'id': 'clientId',
      'title': 'Client id',
      'displayOrder': 10
    });
  },
  
  toQuery: function () {
    // returns a criteria based on current filter settings
    return '';
  }

});

module.exports = ClientId;
