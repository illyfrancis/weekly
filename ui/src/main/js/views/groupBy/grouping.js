var Backbone = require('backbone');
var Item = require('./item');

var GroupBy = Backbone.View.extend({

  render: function () {

    var $dropdown = this.$('.dropdown-menu');

    this.collection.each(function (criterion) {
      var itemView = this.createSubView(Item, {
        model: criterion
      });
      $dropdown.append(itemView.render().el);
    }, this);

    return this;
  }

});

module.exports = GroupBy;
