var CriterionUser = require('../../../../src/main/js/models/criterionUser');

var chai = require('chai');
var expect = chai.expect;

describe('CriterionUser', function () {

  var user, otherUser, criterionUser;

  beforeEach(function () {
    user = {
      'id': '123',
      'name': 'abc'
    };

    otherUser = {
      'id': '789',
      'name': 'xyz'
    };

    criterionUser = new CriterionUser({
      'id': 'User'
    });
  });

  it('has an empty users collection when created', function () {
    expect(criterionUser.users.models).is.empty;
  });

  it('has a user when created with a filter value', function () {
    var criterionUserWithFilter = new CriterionUser({
      filter: [user]
    });

    var model = criterionUserWithFilter.users.get(user.id);
    expect(model.attributes).to.have.property('id', user.id);
    expect(model.attributes).to.have.property('name', user.name);
    expect(criterionUserWithFilter.users.length).to.equal(1);
  });

  it('updates the filter when adding a user', function () {
    criterionUser.users.add(user);

    var filters = criterionUser.get('filter');
    expect(filters[0]).to.have.property('id', user.id);
    expect(filters[0]).to.have.property('name', user.name);
  });

  it('updates the filter when removing a user', function () {
    criterionUser.users.add(user);
    criterionUser.users.remove(user);

    var filters = criterionUser.get('filter');
    expect(filters).to.be.empty;
  });

  it('updates the filter when resetting users', function () {
    criterionUser.users.add(user);
    criterionUser.users.reset();

    var filters = criterionUser.get('filter');
    expect(filters).to.be.empty;
  });

  it('updates the filter when resetting users', function () {
    criterionUser.users.add(user);
    criterionUser.users.reset(otherUser);

    var filters = criterionUser.get('filter');
    expect(filters[0]).to.have.property('id', otherUser.id);
    expect(filters[0]).to.have.property('name', otherUser.name);
  });

  it('returns a null query with no filter set', function () {
    expect(criterionUser.toQuery()).to.be.null;
  });

  it('returns a query with a single field when one filter is set', function () {
    criterionUser.users.add(user);
    expect(criterionUser.toQuery()).to.eql({'User':'123'});
  });

  it('returns a query with two fields when two filters are set', function () {
    criterionUser.users.add(user);
    criterionUser.users.add(otherUser);
    expect(criterionUser.toQuery()).to.eql({'$or':[{'User':'123'},{'User':'789'}]});
  });
});
