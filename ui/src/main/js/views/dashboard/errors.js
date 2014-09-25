var Backbone = require('backbone');
var Errors = Backbone.View.extend({

  el: document,

  events: {
    'ajaxError': 'handleAjaxError'
  },

  handleAjaxError: function (event, jqxhr) {
    var message = '';
    if (jqxhr.status === 0) {
      message = 'Connection to the server is dead / terminated, please try again';
    } else if (jqxhr.status === 401) {
      message = 'User not logged in / Session expired, please log in';
    } else if (jqxhr.status === 500) {
      message = 'Error occurred, please try again later';
    } else {
      message = 'Error occurred, please contact support team';
    }

    this.displayNotification(message);
  },

  displayNotification: function (errorMessage) {
    Backbone.router.trigger('dashboard:notify', errorMessage, 'danger');
  }

});

module.exports = Errors;
