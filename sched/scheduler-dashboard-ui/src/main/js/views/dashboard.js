var Backbone = require('backbone');
var template = require('../templates/dashboard.html');
var Menu = require('./menu');
var Schedules = require('./schedules/schedules');
var repository = require('../repository');

var DashboardView = Backbone.View.extend({

  className: 'dashboard',

  initialize: function () {

    this.criteria = repository.loadCriteria();

    this.menu = new Menu({
      collection: this.criteria
    });

    this.schedules = new Schedules({
      collection: this.criteria
    });
  },

  render: function () {
    this.$el.html(template());
    // ??? does `replaceWith` cause unbound event?`
    // this.$('.menu').empty().append(this.menu.render().el);
    this.$('.menu').replaceWith(this.menu.render().el);
    this.$('.schedules').replaceWith(this.schedules.render().el);
    return this;
  }
});

module.exports = DashboardView;
