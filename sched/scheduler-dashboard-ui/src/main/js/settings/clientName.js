var Criterion = require('./criterion');

var ClientName = Criterion.extend({

  initialize: function () {
    this.set({
      'id': 'clientName',
      'title': 'Client name',
      'groupOrder': 1,
      'displayOrder': 11
    });
  },
  
  toQuery: function () {
    // returns a criteria based on current filter settings
    return '';
  }

});

module.exports = ClientName;
