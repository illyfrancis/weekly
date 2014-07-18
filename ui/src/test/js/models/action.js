/*global sinon*/
var Action = require('../../../../src/main/js/models/action');
var assert = require('assert');

describe('Action', function() {

  describe('to run schedule', function() {

    var action = {};

    var TEST_SCHEDULE_ID = 1;
    var API_URL = './api/schedules/' + TEST_SCHEDULE_ID + '/run';

    beforeEach(function() {
      
      action = new Action();
    });

    describe('interacting with API', function() {

      var xhr, requests;

      beforeEach(function() {
        requests = [];
        xhr = sinon.useFakeXMLHttpRequest();
        xhr.onCreate = function(req) {
          requests.push(req);
        };
      });

      afterEach(function() {
       
        xhr.restore();
      });

      it('sends request to correct URL', function() {

        action.runSchedule(TEST_SCHEDULE_ID);
        
        assert.equal(API_URL, requests[0].url);
        assert.equal('POST', requests[0].method);
      });

    });

    describe('with fake server', function() {

      var server, spy;

      beforeEach(function() {

        spy = sinon.spy(action, '_showNotification');
        server = sinon.fakeServer.create();
      });

      afterEach(function() {
        action._showNotification.restore();
        server.restore();
      });

      it('shows info notification when send operation succeeds', function() {

        server.respondWith('POST', API_URL, [204, { 'Content-Type': 'application/json' }, '' ]);

        action.runSchedule(TEST_SCHEDULE_ID);
        server.respond();
        
        assert.equal(true, spy.getCall(0).calledWith(sinon.match.string, 'info'));
      });

      it('shows warning notification when send operation fails', function() {

        server.respondWith('POST', API_URL, [500, {}, '' ]);

        action.runSchedule(TEST_SCHEDULE_ID);
        server.respond();
        
        assert.equal('danger', spy.firstCall.args[1]);
      });

    });
  });
});
