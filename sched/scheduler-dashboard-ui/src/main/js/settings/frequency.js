var Criterion = require('./criterion');

var Frequency = Criterion.extend({

  initialize: function () {
    this.set({
      'id': 'frequency',
      'title': 'Frequency',
      'displayOrder': 5
    });
  },
  
  toQuery: function () {
    // returns a criteria based on current filter settings
    return '';
  }

});

module.exports = Frequency;
