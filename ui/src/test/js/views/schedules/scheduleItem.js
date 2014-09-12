var ScheduleItem = require('../../../../../src/main/js/views/schedules/scheduleItem');
var Schedule = require('../../../../../src/main/js/models/schedule');
var User = require('../../../../../src/main/js/models/user');

var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;

describe('ScheduleItem View', function () {

  var scheduleItem;

  beforeEach(function () {
  
    var testUser = new User({
      'id': 'A012345',
      'roles': ['REPORT_OWNER']
    });

    scheduleItem = new ScheduleItem({
      user: testUser
    });
  });

  it('maps date string to moment', function () {
    var moment = scheduleItem.mapToMoment('2014-06-04T06:30:15Z');
    assert.equal(moment.isValid(), true);
  });

  it('maps invalid date string to invalid moment', function () {
    var moment = scheduleItem.mapToMoment('2014-00-04T06:30:15Z');
    assert.equal(moment.isValid(), false);
  });

  it('maps null to invalid moment', function () {
    var moment = scheduleItem.mapToMoment(null);
    assert.equal(moment.isValid(), false);
  });

  it('maps string to invalid moment', function () {
    var moment = scheduleItem.mapToMoment('xyz');
    assert.equal(moment.isValid(), false);
  });

  it('maps undefined to invalid moment', function () {
    var moment = scheduleItem.mapToMoment(undefined);
    assert.equal(moment.isValid(), false);
  });

  describe('displays columns based on roles', function () {

    var createScheduleItemFor = function (role) {

      var testUser = new User({
        'id': 'A012345',
        'roles': [role]
      });

      var testSchedule = new Schedule();

      var testScheduleItem = new ScheduleItem({
        model: testSchedule,
        user: testUser,
      });

      return testScheduleItem;
    };

      var containsClientColumn = function (item) {

        return item.$el.has("td.client").length === 1;
      };

      it('doesnt render client column if Report Owner', function () {

        var testScheduleItem = createScheduleItemFor('REPORT_OWNER');

        testScheduleItem.render();

        expect(containsClientColumn(testScheduleItem)).to.be.false;
      });

      it('renders client column if Service Delivery', function () {

        var testScheduleItem = createScheduleItemFor('SERV_DELIVER');

        testScheduleItem.render();

        expect(containsClientColumn(testScheduleItem)).to.be.true;
      });


      it('renders client column if Admin', function () {

        var testScheduleItem = createScheduleItemFor('ADMIN');

        testScheduleItem.render();

        expect(containsClientColumn(testScheduleItem)).to.be.true;
      });

  });

});
