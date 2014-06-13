var ScheduleItem = require('../../../../../src/main/js/views/schedules/scheduleItem');

var assert = require('assert');

describe('ScheduleItem View', function () {

  var scheduleItem;

  beforeEach(function () {
    scheduleItem = new ScheduleItem();
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
});
