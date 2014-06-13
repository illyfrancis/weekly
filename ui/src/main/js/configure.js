var Backbone = require('backbone');

// get authentication token
var authToken;
var tokens = document.cookie.match(/BBHid=(.*?)(;|$)/);
if (tokens && tokens[1]) {
  authToken = tokens[1];
}

// get user obj
var dashboard = global.dashboard || {};
dashboard.user = dashboard.user || {};

// set the auth token & user id in header for all ajax requests
Backbone.$.ajaxSetup({
  headers: {
    'X-Auth-Token': authToken,
    'X-User-Id': dashboard.user.id
  },
  cache: false
});

// enable tooltips
Backbone.$('body').tooltip({
  selector: '[data-toggle=tooltip]'
});
