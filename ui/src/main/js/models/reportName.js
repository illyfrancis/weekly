var Criterion = require('./criterion');
var _ = require('underscore');

var ReportName = Criterion.extend({

  toQuery: function () {
    var queryString = '',
      filter = this.get('filterBy');

    if (_.isString(filter) && filter.trim() !== '') {
        // escape filter?
        queryString = '{"$like":{"' + this.get('id') + '":"' + filter + '"}}';
    }

    return queryString;
  }

});

module.exports = ReportName;
