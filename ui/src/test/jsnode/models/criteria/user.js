var User = require('../../../../../src/main/js/models/criteria/user');

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

describe('User', function () {

  var user;

  beforeEach(function () {
    user = new User({
      'id': 'user'
    });
  });

  describe('Setting filter', function () {

    it('has no validation error and set the filter ', function () {
      user.setFilter('A012345');

      expect(user.validationError).to.be.null;
      expect(user.get('filter')).to.equal('A012345');
    });

    it('fails validation when user value is too long', function () {
      user.setFilter('A0123456789');

      expect(user.validationError).to.equal('too long');
    });

    it('fails validation when user value is not alphanumeric', function () {
      user.setFilter('A0123%*');

      expect(user.validationError).to.equal('invalid content');
    });

    it('triggers "change" event when set with setFilter', function () {
      var spy = sinon.spy();
      user.on('change', spy);
      user.setFilter('A012345');

      sinon.assert.calledOnce(spy); // or expect(spy.called).is.false;
    });

  });

  describe('query generation', function () {

    it('returns a null object when no filter value set', function () {
      var query = user.toQuery();
      expect(query).to.be.null;
    });

    it('returns query object when filter set', function () {
      user.setFilter('a012345');
      var query = user.toQuery();

      expect(query).to.eql({
        'user': {
          '$eqIgnoreCase': 'a012345'
        }
      });
    });
  });
});
