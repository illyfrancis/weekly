var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./templates/userFilter.html');

// similar to reportNameFilter, duplicate?
var UserFilter = Backbone.View.extend({

  render: function () {
    this.$el.html(
      template(_.defaults({
        'viewId': this.cid
      }, this.model.toJSON()))
    );

    return this;
  }

});

module.exports = UserFilter;
