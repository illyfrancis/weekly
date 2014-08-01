var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./templates/reportCriteriaParameter.html');

var ReportCriteriaParameter = Backbone.View.extend({
  
  tagName: 'tr',
  
  render: function() {   
    this.$el.html(template(this.toJSON()));
    return this;
  },

  toJSON: function () {
    var value = this.model.get('value');
    if (_.isArray(value)) {
      value = value.join(', ');
    }

    return {
      name: this.model.get('name'),
      value: value
    };
  }
  
});

module.exports = ReportCriteriaParameter;