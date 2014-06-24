var Backbone = require('backbone');
var template = require('./templates/dashboard.html');
var Menu = require('./menu');
var Schedules = require('../schedules/schedules');

var DashboardView = Backbone.View.extend({

  className: 'dashboard',

  initialize: function (options) {
    this.user = options.user;
    this.criteria = options.criteria;
    this.schedules = options.schedules;
  },

  render: function () {
    this.disposeSubViews();
    this.$el.html(template());

    this.renderMenu();
    this.renderSchedules();
    return this;
  },

  renderMenu: function () {
    var menu = this.createSubView(Menu, {
      criteria: this.criteria
    });
    
    // ??? does `replaceWith` cause unbound event?`
    // this.$('.menu').empty().append(this.menu.render().el);
    this.$('.menu').replaceWith(menu.render().el);
  },

  renderSchedules: function () {
    var schedules = this.createSubView(Schedules, {
      collection: this.schedules,
      criteria: this.criteria
    });
    this.$('.schedules').replaceWith(schedules.render().el);
  }
});

module.exports = DashboardView;
