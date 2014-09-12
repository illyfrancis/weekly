var Backbone = require('backbone');
var GroupByOption = require('./groupByOption');

var GroupBy = Backbone.View.extend({

  initialize: function (options) {
    this.user = options.user;
  },

  render: function () {

    this.collection.chain()
      .reject(this.clientCriterionForNonInternalUser, this)
      .filter(this.sortableCriterion, this)
      .each(this.appendGroupOption, this);

    return this;
  },

  clientCriterionForNonInternalUser: function (criterion) {
    return criterion.id === 'clients' && !this.user.isInternal();
  },

  sortableCriterion: function (criterion) {
    return criterion.get('isSortable');
  },

  appendGroupOption: function (criterion) {
    
    var groupByOption = this.createSubView(GroupByOption, {
      model: criterion,
      user: this.user
    });
    
    this.$('.dropdown-menu').append(groupByOption.render().el);
  }

});

module.exports = GroupBy;
