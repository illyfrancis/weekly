var Backbone = require('backbone');
var template = require('./templates/reportNameFilter.html');

var ReportNameFilter = Backbone.View.extend({

  initialize: function () {
    // this.model = ReportName
  },

  render: function () {
    this.$el.html(template(this.model.attributes));
    return this;
  }

});

module.exports = ReportNameFilter;
