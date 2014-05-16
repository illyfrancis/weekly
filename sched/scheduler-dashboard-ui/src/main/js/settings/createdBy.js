var Criterion = require('./criterion');

var CreatedBy = Criterion.extend({

  initialize: function () {
    this.set({
      'id': 'createdBy',
      'title': 'Created by',
      'displayOrder': 2
    });
  },
  
  toQuery: function () {
    // returns a criteria based on current filter settings
    return '';
  }

});

module.exports = CreatedBy;
