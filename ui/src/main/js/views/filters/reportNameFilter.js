var Backbone = require('backbone');
var template = require('./templates/reportNameFilter.html');

var ReportNameFilter = Backbone.View.extend({

  events: {
    'blur input': 'onBlur'
  },

  onBlur: function () {
    var filter = this.$('input').val();
    this.model.set('filterBy', filter.trim());
  },

  initialize: function () {
    // this.model = ReportName
  },

  render: function () {
    this.$el.html(template(this.model.toJSON()));
    return this;
  }

});

module.exports = ReportNameFilter;
