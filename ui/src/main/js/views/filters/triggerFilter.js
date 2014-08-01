var MultiSelectFilter = require('./multiSelectFilter');

var TriggerFilter = MultiSelectFilter.extend({

  selectionOptions: function () {
    return ['Time', 'Event', 'Hybrid'];
  }
  
});

module.exports = TriggerFilter;
