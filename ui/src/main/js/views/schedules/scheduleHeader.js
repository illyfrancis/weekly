var Backbone = require('backbone');
var CriterionHeader = require('./criterionHeader');

var ScheduleHeader = Backbone.View.extend({

  tagName: 'tr',

  initialize: function (options) {
    // this.collection = Criteria
    this.user = options.user;
  },

  render: function () {
    this.collection.chain()
      .reject(this.clientCriterionForNonInternalUser, this)
      .each(this.appendHeader, this);

    return this;
  },

  clientCriterionForNonInternalUser: function (criterion) {
    return criterion.id === 'clients' && !this.user.isInternal();
  },

  appendHeader: function (criterion) {
    var criterionHeader = this.createSubView(CriterionHeader, {
      model: criterion
    });
    this.$el.append(criterionHeader.render().el);
  }

});

module.exports = ScheduleHeader;
