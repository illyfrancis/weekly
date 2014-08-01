var ReportOwner = require('../../../../../src/main/js/models/criteria/reportOwner');

var chai = require('chai');
var expect = chai.expect;

describe('ReportOwner', function () {

  var reportOwner, userOther, user;

  beforeEach(function () {
    user = {
      'id': '123',
      'name': 'abc'
    };

    userOther = {
      'id': '789',
      'name': 'xyz'
    };

    reportOwner = new ReportOwner({
      'id': 'ReportOwner'
    });
  });

  it('has an empty users collection when created', function () {
    expect(reportOwner.users.models).is.empty;
  });

  it('has a user when created with a filter value', function () {
    var userWithFilter = new ReportOwner({
      filter: [user]
    });

    var model = userWithFilter.users.get(user.id);
    expect(model.attributes).to.have.property('id', user.id);
    expect(model.attributes).to.have.property('name', user.name);
    expect(userWithFilter.users.length).to.equal(1);
  });

  it('updates the filter when adding a user', function () {
    reportOwner.users.add(user);

    var filters = reportOwner.get('filter');
    expect(filters[0]).to.have.property('id', user.id);
    expect(filters[0]).to.have.property('name', user.name);
  });

  it('updates the filter when removing a user', function () {
    reportOwner.users.add(user);
    reportOwner.users.remove(user);

    var filters = reportOwner.get('filter');
    expect(filters).to.be.empty;
  });

  it('updates the filter when resetting users', function () {
    reportOwner.users.add(user);
    reportOwner.users.reset();

    var filters = reportOwner.get('filter');
    expect(filters).to.be.empty;
  });

  it('updates the filter when resetting with other user', function () {
    reportOwner.users.add(user);
    reportOwner.users.reset(userOther);

    var filters = reportOwner.get('filter');
    expect(filters[0]).to.have.property('id', userOther.id);
    expect(filters[0]).to.have.property('name', userOther.name);
  });

  it('returns a null query with no filter set', function () {
    expect(reportOwner.toQuery()).to.be.null;
  });

  it('returns a query with a single field when one filter is set', function () {
    reportOwner.users.add(user);
    expect(reportOwner.toQuery()).to.eql({'ReportOwner':{'$eq':'123'}});
  });

  it('returns a query with two fields when two filters are set', function () {
    reportOwner.users.add(user);
    reportOwner.users.add(userOther);
    expect(reportOwner.toQuery()).to.eql({'ReportOwner':{'$in': ['123', '789']}});
  });
});
