var Backbone = require('backbone');

var Action = Backbone.Model.extend({

  url: function() {

    return this.url;
  },

  runSchedule: function(scheduleId) {

    var self = this;
    this.url = './api/schedules/' + scheduleId + '/run';

    var options = {

      success: function() {

        self._showNotification('Request to run a schedule was sent successfully.', 'info');
      },

      error: function() {

        self._showNotification('Could not send request to run a schedule.', 'danger');
      }
    };

    this.save({}, options);
  },

  _showNotification: function(text, type) {

    Backbone.router.trigger('dashboard:notify', text, type);
  }
});

module.exports = Action;