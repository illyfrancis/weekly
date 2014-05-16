var Backbone = require('backbone');
var template = require('./templates/reportTypeFilter.html');

var ReportTypeFilter = Backbone.View.extend({

  // className: form-group

  initialize: function () {
    // this.model = ReportType
  },

  render: function () {
    this.$el.html(template(this.model.attributes));
    return this;
  }

});

module.exports = ReportTypeFilter;
