var Criterion = require('./criterion');

var LastExecution = Criterion.extend({

  initialize: function () {
    this.set({
      'id': 'lastExecution',
      'title': 'Last execution',
      'displayOrder': 8
    });
  },
  
  toQuery: function () {
    // returns a criteria based on current filter settings
    return '';
  }

});

module.exports = LastExecution;
