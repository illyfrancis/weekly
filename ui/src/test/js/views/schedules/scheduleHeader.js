var Criteria = require('../../../../../src/main/js/collections/criteria');
var Criterion = require('../../../../../src/main/js/models/criteria/criterion');
var ScheduleHeader = require('../../../../../src/main/js/views/schedules/scheduleHeader');
var User = require('../../../../../src/main/js/models/user');

var chai = require('chai');
var expect = chai.expect;

describe('Schedule Header View', function () {

  var createScheduleHeaderFor = function (role) {

    var testUser = new User({
      'id': 'A012345',
      'roles': [role]
    });

    var testCriterion = new Criterion({
      id: 'clients',
      title: 'Client',
      isSortable: true
    });

    var testCriteria = new Criteria(testCriterion);

    var testScheduleHeader = new ScheduleHeader({
      collection: testCriteria,
      user: testUser,
    });

    return testScheduleHeader;
  };

  var containsClientHeader = function (scheduleHeader) {

    return scheduleHeader.$el.has("th:contains('Client')").length === 1;
  };

  it('doesnt render client header if Report Owner', function () {

    var testScheduleHeader = createScheduleHeaderFor('REPORT_OWNER');

    testScheduleHeader.render();

    expect(containsClientHeader(testScheduleHeader)).to.be.false;
  });

  it('renders client header if Service Delivery', function () {

    var testScheduleHeader = createScheduleHeaderFor('SERV_DELIVER');

    testScheduleHeader.render();

    expect(containsClientHeader(testScheduleHeader)).to.be.true;
  });


  it('renders client header if Admin', function () {

    var testScheduleHeader = createScheduleHeaderFor('ADMIN');

    testScheduleHeader.render();

    expect(containsClientHeader(testScheduleHeader)).to.be.true;
  });

});
