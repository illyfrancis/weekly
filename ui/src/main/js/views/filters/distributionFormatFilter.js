var MultiSelectFilter = require('./multiSelectFilter');

var DistributionFormatFilter = MultiSelectFilter.extend({

  selectionOptions: function () {
    return ['Attachment', 'Link', 'FTP'];
  }
  
});

module.exports = DistributionFormatFilter;
