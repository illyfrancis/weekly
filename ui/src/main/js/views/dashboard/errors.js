var Backbone = require('backbone');
var Errors = Backbone.View.extend({

  el: document,

  events: {
    'ajaxError': 'handleAjaxError'
  },

  handleAjaxError: function (event, jqxhr) {

    if (jqxhr.status === 0) {

      this.displayNotification('Connection to the server is dead / terminated, please try again');

    } else if (jqxhr.status === 401) {

      this.displayNotification('User not logged in / Session expired, please log in');

    } else if (jqxhr.status === 500) {

      this.displayNotification('Error occurred, please try again later');

    } else {

      this.displayNotification('Error occurred, please contact support team');
    }
  },

  displayNotification: function (errorMessage) {
    Backbone.router.trigger('dashboard:notify', errorMessage, 'danger');
  }

});

module.exports = Errors;
