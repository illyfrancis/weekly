var MultiSelectFilter = require('./multiSelectFilter');

var FrequencyFilter = MultiSelectFilter.extend({

  selectionOptions: function () {
    return ['Daily', 'Weekly', 'Monthly', 'Yearly', 'Trigger'];
  }
  
});

module.exports = FrequencyFilter;
