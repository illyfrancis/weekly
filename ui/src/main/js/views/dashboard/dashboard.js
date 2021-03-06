var Backbone = require('backbone');
var Errors = require('./errors');
var Loader = require('./loader');
var Menu = require('./menu');
var Notification = require('./notification');
var Schedules = require('../schedules/schedules');
var template = require('./templates/dashboard.html');

var DashboardView = Backbone.View.extend({

  className: 'dashboard container-fluid',

  initialize: function (options) {
    this.user = options.user;
    this.criteria = options.criteria;
    this.schedules = options.schedules;
    this.listenTo(Backbone.router, 'dashboard:notify', this.showNotification);
  },

  render: function () {
    this.disposeSubViews();
    this.$el.html(template());

    this.renderMenu();
    this.renderSchedules();
    this.renderLoader();
    this.renderErrors();

    return this;
  },

  showNotification: function (text, type) {
    var notification = this.createSubView(Notification, {
      text: text,
      type: type
    });
    this.$('.notifications').append(notification.render().el);
  },

  renderMenu: function () {
    var menu = this.createSubView(Menu, {
      criteria: this.criteria,
      user: this.user
    });

    this.$('.menu').replaceWith(menu.render().el);
  },

  renderSchedules: function () {
    var schedules = this.createSubView(Schedules, {
      collection: this.schedules,
      criteria: this.criteria,
      user: this.user
    });

    this.$('.schedules').replaceWith(schedules.render().el);
  },

  renderLoader: function () {
    var loader = this.createSubView(Loader);
    this.$el.append(loader.render().el);
  },

  renderErrors: function () {
    this.createSubView(Errors);
  }
});

module.exports = DashboardView;
