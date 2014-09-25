var Criterion = require('./criterion');
var _ = require('underscore');
var moment = require('moment');

var DateRange = Criterion.extend({

  initialize: function () {
    this.set('filter', {
      from: null,
      to: null
    });
  },

  parse: function (response) {
    if(!_.isNull(response.filter) && this.hasValue(response.filter.from) && this.hasValue(response.filter.to)) {
      response.filter.from = this.parseDate(response.filter.from);
      response.filter.to = this.parseDate(response.filter.to);
    }

    return response;
  },

  parseDate: function (date) {
    return moment(date, 'YYYY-MM-DDTHH:mm:ss.SSSZ', true).toDate();
  },

  setFilter: function (filter) {
    this.set('filter', filter, {
      validate: true
    });
  },

  hasValidFilter: function () {
    var filter = this.get('filter');
    return !_.isNull(filter) && this.isValidDate(filter.from) && this.isValidDate(filter.to);
  },

  validate: function (attrs) {
    var filter = attrs.filter;
    if (this.isValidDate(filter.from) || this.isValidDate(filter.to)) {
      if (!this.isValidDate(filter.from) || !this.isValidDate(filter.to)) {
        return 'both dates are required';
      }

      if (filter.from > filter.to) {
        return 'From date can\'t be after the To date';
      }
    }
  },

  isValidDate: function (date) {
    return ((this.hasValue(date)) && (!_.isNaN(date.getTime())));
  },

  hasValue: function (value) {
    return (!_.isNull(value) && (!_.isUndefined(value)));
  },

  toQuery: function () {
    var query = null;

    if (this.hasValidFilter()) {
      var filter = this.get('filter');

      var fromDateCondition = {};
      fromDateCondition[this.filterWith()] = {
        '$gte': {
          '$date': moment(filter.from).startOf('day').utc().format('YYYY-MM-DDTHH:mm:ss[Z]')
        }
      };

      var toDateCondition = {};
      toDateCondition[this.filterWith()] = {
        '$lte': {
          '$date':  moment(filter.to).endOf('day').utc().format('YYYY-MM-DDTHH:mm:ss[Z]')
        }
      };

      query = {
        '$and': [fromDateCondition, toDateCondition]
      };
    }

    return query;
  }
});

module.exports = DateRange;
