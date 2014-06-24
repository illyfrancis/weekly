var Backbone = require('backbone');
var _ = require('underscore');
var template = require('./templates/groupBy.html');
var itemTemplate = require('./templates/groupByOption.html');

var GroupBy = Backbone.View.extend({

  className: 'group-by',

  events: {
    'change #groupBy': 'selectChange'
  },

  render: function () {
    this.$el.html(template());
    var $select = this.$('select');

    this.collection.chain().map(function (criterion) {
      var mapped = criterion.toJSON();
      mapped.isGroupBy = criterion.isGroupField();
      return mapped;
    }).each(function (mapped) {
      $select.append(itemTemplate(mapped));
    });

    return this;
  },

  selectChange: function (event) {
    var id = event.target.value;
    this.collection.get(id).makeGroupField();
  }

});

module.exports = GroupBy;
