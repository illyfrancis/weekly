var Criterion = require('./criterion');

var Trigger = Criterion.extend({

  initialize: function () {
    this.set({
      'id': 'trigger',
      'title': 'Trigger',
      'displayOrder': 6
    });
  },
  
  toQuery: function () {
    // returns a criteria based on current filter settings
    return '';
  }

});

module.exports = Trigger;
