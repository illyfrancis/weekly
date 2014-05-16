var Backbone = require('backbone');
var _ = require('underscore');
var repository = require('../../repository');
var template = require('./templates/groupBy.html');
var itemTemplate = require('./templates/groupByOption.html');

var GroupBy = Backbone.View.extend({

  className: 'group-by',

  events: {
    'change #groupBy': 'selectChange',
    'click .dashboard': 'showDashbaord'
  },

  initialize: function () {
    this.criteria = repository.loadCriteria();
  },

  render: function () {
    this.$el.html(template());
    var $select = this.$('select');

    _(this.criteria.map(function (criterion) {
      var mapped = criterion.toJSON();
      mapped.isGroupBy = criterion.isGroupField();
      return mapped;
    })).each(function (mapped) {
      $select.append(itemTemplate(mapped));
    });
    return this;
  },

  selectChange: function (event) {
    var id = event.target.value;
    this.criteria.get(id).makeGroupField();
  },

  showDashbaord: function () {
    Backbone.router.navigate('', {trigger: true});
  }

});

module.exports = GroupBy;
