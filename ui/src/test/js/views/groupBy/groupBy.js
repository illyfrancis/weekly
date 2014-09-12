var Criteria = require('../../../../../src/main/js/collections/criteria');
var Criterion = require('../../../../../src/main/js/models/criteria/criterion');
var GroupBy = require('../../../../../src/main/js/views/groupBy/groupBy');
var User = require('../../../../../src/main/js/models/user');

var chai = require('chai');
var expect = chai.expect;

describe('GroupBy View', function () {


  var createGroupByClientFor = function (role) {

    var testCriterion = new Criterion({
      id: 'clients',
      title: 'Client',
      isSortable: true
    });

    return createGroupByCriterionFor(role, testCriterion);
  };

  var createGroupByCriterionFor = function (role, criterion) {

    var testUser = new User({
      'id': 'A012345',
      'roles': [role]
    });

    var testCriteria = new Criteria(criterion);

    var testgroupBy = new GroupBy({
      collection: testCriteria,
      user: testUser,
    });

    testgroupBy.$el.html('<ul class="dropdown-menu"></ul>');

    return testgroupBy;
  };


  var containsOption = function (groupBy, optionName) {
    return groupBy.$el.has('a:contains(' + optionName + ')').length === 1;
  };

  it('doesnt render client option if Report Owner', function () {

    var groupBy = createGroupByClientFor('REPORT_OWNER');

    groupBy.render();

    expect(containsOption(groupBy, 'Client')).to.be.false;
  });

  it('renders client option if Service Delivery', function () {

    var groupBy = createGroupByClientFor('SERV_DELIVER');

    groupBy.render();

    expect(containsOption(groupBy, 'Client')).to.be.true;
  });


  it('renders client option if Admin', function () {

    var groupBy = createGroupByClientFor('ADMIN');

    groupBy.render();

    expect(containsOption(groupBy, 'Client')).to.be.true;
  });

  it('doesnt render option which is not sortable', function () {

    var sortableCriterion = new Criterion({
      id: 'frequency',
      title: 'Frequency',
      isSortable: false
    });

    var groupBy = createGroupByCriterionFor('ADMIN', sortableCriterion);

    groupBy.render();

    expect(containsOption(groupBy, 'Frequency')).to.be.false;
  });

  it('renders sortable option', function () {

    var notSortableCriterion = new Criterion({
      id: 'reportName',
      title: 'Report name',
      isSortable: true
    });

    var groupBy = createGroupByCriterionFor('ADMIN', notSortableCriterion);

    groupBy.render();

    expect(containsOption(groupBy, 'Report name')).to.be.true;
  });

});
