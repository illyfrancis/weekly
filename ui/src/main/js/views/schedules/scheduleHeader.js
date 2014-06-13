var Backbone = require('backbone');
var CriterionHeader = require('./criterionHeader');

var ScheduleHeader = Backbone.View.extend({

  tagName: 'tr',

  initialize: function () {
    // this.collection = Criteria
  },

  render: function () {
    var criterionHeader;
    this.collection.each(function (criterion) {
      criterionHeader = this.createSubView(CriterionHeader, {
        model: criterion
      });
      this.$el.append(criterionHeader.render().el);
    }, this);

    return this;
  }
});

module.exports = ScheduleHeader;
