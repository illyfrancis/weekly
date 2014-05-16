var Criterion = require('./criterion');

var ModifiedBy = Criterion.extend({

  initialize: function () {
    this.set({
      'id': 'modifiedBy',
      'title': 'Modified by',
      'displayOrder': 4
    });
  },
  
  toQuery: function () {
    // returns a criteria based on current filter settings
    return '';
  }

});

module.exports = ModifiedBy;
