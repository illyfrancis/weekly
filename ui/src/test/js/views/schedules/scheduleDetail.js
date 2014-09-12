var ScheduleDetail = require('../../../../../src/main/js/views/schedules/scheduleDetail');
var Schedule = require('../../../../../src/main/js/models/schedule');
var User = require('../../../../../src/main/js/models/user');

var chai = require('chai');
var expect = chai.expect;

describe('ScheduleDetail View', function () {

  var testSchedule, testUser, testScheduleDetail;

  var containsDisabledClass = function (selector) {
    return testScheduleDetail.$el.find(selector).hasClass('disabled');
  };

  describe('renders if Report Owner', function () {

    beforeEach(function () {

      testSchedule = new Schedule({
        'reportOwnerId': 'A012345'
      });
      testUser = new User({
        'id': 'A012345',
        'roles': ['REPORT_OWNER']
      }),

      testScheduleDetail = new ScheduleDetail({
        user: testUser,
        model: testSchedule
      });

      testScheduleDetail.render();
    });

    it('"edit" button as enabled', function () {
      expect(containsDisabledClass('.transfer')).to.be.false;
    });

    it('"run now" button as enabled', function () {
      expect(containsDisabledClass('.run-schedule')).to.be.false;
    });

    it('"share" button as enabled', function () {
      expect(containsDisabledClass('.share')).to.be.false;
    });

    it('"transfer" button as enabled', function () {
      expect(containsDisabledClass('.transfer')).to.be.false;
    });  
  });

  describe('renders if Recipient', function () {

    beforeEach(function () {

      testSchedule = new Schedule({
        'reportOwnerId': 'A012345'
      });
      testUser = new User({
        'id': 'B012345',
        'roles': ['REPORT_OWNER']
      }),

      testScheduleDetail = new ScheduleDetail({
        user: testUser,
        model: testSchedule
      });

      testScheduleDetail.render();
    });

    it('"edit" button as disabled', function () {
      expect(containsDisabledClass('.transfer')).to.be.true;
    });

    it('"run now" button as disabled', function () {
      expect(containsDisabledClass('.run-schedule')).to.be.true;
    });

    it('"share" button as disabled', function () {
      expect(containsDisabledClass('.share')).to.be.true;
    });

    it('"transfer" button as disabled', function () {
      expect(containsDisabledClass('.transfer')).to.be.true;
    });  
  });

  describe('renders if Service Delivery', function () {

    beforeEach(function () {

      testSchedule = new Schedule({
        'reportOwnerId': 'A012345'
      });
      testUser = new User({
        'id': 'B012345',
        'roles': ['REPORT_OWNER', 'SERV_DELIVER']
      }),

      testScheduleDetail = new ScheduleDetail({
        user: testUser,
        model: testSchedule
      });

      testScheduleDetail.render();
    });

    it('"edit" button as disabled', function () {
      expect(containsDisabledClass('.transfer')).to.be.true;
    });

    it('"run now" button as disabled', function () {
      expect(containsDisabledClass('.run-schedule')).to.be.true;
    });

    it('"share" button as disabled', function () {
      expect(containsDisabledClass('.share')).to.be.true;
    });

    it('"transfer" button as disabled', function () {
      expect(containsDisabledClass('.transfer')).to.be.true;
    });
  });

  describe('renders if Admin', function () {

    beforeEach(function () {

      testSchedule = new Schedule({
        'reportOwnerId': 'A012345'
      });
      testUser = new User({
        'id': 'B012345',
        'roles': ['REPORT_OWNER', 'ADMIN']
      }),

      testScheduleDetail = new ScheduleDetail({
        user: testUser,
        model: testSchedule
      });

      testScheduleDetail.render();
    });

    it('"edit" button as enabled', function () {
      expect(containsDisabledClass('.transfer')).to.be.false;
    });

    it('"run now" button as enabled', function () {
      expect(containsDisabledClass('.run-schedule')).to.be.false;
    });

    it('"share" button as disabled', function () {
      expect(containsDisabledClass('.share')).to.be.true;
    });

    it('"transfer" button as enabled', function () {
      expect(containsDisabledClass('.transfer')).to.be.false;
    });
  });

});
