var Backbone = require('backbone');
var GroupByOption = require('./groupByOption');

var GroupBy = Backbone.View.extend({

  render: function () {

    var $dropdown = this.$('.dropdown-menu');

    this.collection.each(function (criterion) {
      if (criterion.get('isSortable')) {
        var groupByOption = this.createSubView(GroupByOption, {
          model: criterion
        });
        $dropdown.append(groupByOption.render().el);
      }
    }, this);    

    return this;
  }

});

module.exports = GroupBy;
