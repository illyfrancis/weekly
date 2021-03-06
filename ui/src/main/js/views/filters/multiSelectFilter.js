var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./templates/multiSelectFilter.html');
var MultiSelectFilterItem = require('./multiSelectFilterItem');

var MultiSelectFilter = Backbone.View.extend({

  events: {
    'change select': 'selectElement',
  },

  selectElement: function () {
    var filter = this.$('select').val();
    this.model.setFilter(filter);
  },

  render: function () {
    this.$el.html(template(this.model.toJSON()));

    _.each(this.selectionOptions(), function (element) {

      var item = this.createSubView(MultiSelectFilterItem, {
        text: element
      });

      this.$('select').append(item.render().el);

    }, this);

    this.renderSelected();

    return this;
  },

  selectionOptions: function () {
    return [];
  },

  renderSelected: function () {
    this.$('.selectpicker').val(this.model.get('filter'));
    this.$('.selectpicker').selectpicker('render');
  }

});

module.exports = MultiSelectFilter;
