var DistributionList = require('../../../../../src/main/js/models/criteria/distributionList');

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

describe('DistributionList', function () {

  var distributionList;
  var VALID_EMAIL_ADDRESS = 'client_name@bbh.com';
  var TOO_LONG_EMAIL_ADDRESS = 'this_is_too_long_email@bbh.com';

  beforeEach(function () {
    distributionList = new DistributionList({
      'id': 'distributionList'
    });

    sinon.spy(distributionList, 'validate');
  });

  afterEach(function () {
    distributionList.validate.restore();
  });

  it('returns a null object when no filter value set', function () {
    var query = distributionList.toQuery();
    expect(query).to.be.null;
  });

  it('returns correct query object when filter value set', function () {

    distributionList.set('filter', VALID_EMAIL_ADDRESS);
    var query = distributionList.toQuery();

    expect(query).to.eql({
      'distributionList': {
        '$contains': VALID_EMAIL_ADDRESS
      }
    });
  });

  it('does not fail validation for correct email address', function () {

    var validationError = distributionList.validate({filter: VALID_EMAIL_ADDRESS});

    expect(validationError).to.be.undefined;
  });

  it('fails validation for too long email address', function () {

    var validationError = distributionList.validate({filter: TOO_LONG_EMAIL_ADDRESS});

    expect(validationError).to.eql('too long');
  });

  it('fails validation for invalid email address', function () {

    var validationError = distributionList.validate({filter: 'user$name@bbh.com'});

    expect(validationError).to.eql('invalid content');
  });

  it('sets filter for different values', function () {
    distributionList.setFilter('abc');
    distributionList.setFilter('xyz');
    expect(distributionList.validate.callCount).to.equal(2);
  });

  it('does not update the filter when value doesn\'t change', function () {
    distributionList.setFilter('abc');
    distributionList.setFilter('abc');
    expect(distributionList.validate.calledOnce).is.true;
  });

  it('validates value that is being set as filter', function () {
    distributionList.setFilter(TOO_LONG_EMAIL_ADDRESS);
    expect(distributionList.validate.calledOnce).is.true;
    expect(distributionList.validate.getCall(0).args[0].filter).to.eql(TOO_LONG_EMAIL_ADDRESS);
  });
});
