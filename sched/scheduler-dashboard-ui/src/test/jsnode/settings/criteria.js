var Criterion = require('../../../../src/main/js/settings/criterion');
var Criteria = require('../../../../src/main/js/settings/criteria');
var Settings = require('../../../../src/main/js/settings/settings');

var chai = require('chai');
var expect = chai.expect;

describe('Criteria', function () {

  var foo, bar, fiz, buz;
  var criteria;

  beforeEach(function () {
    criteria = new Criteria();

    foo = new Criterion({
      name: 'foo'
    });
    criteria.add(foo);

    bar = new Criterion({
      name: 'bar'
    });
    criteria.add(bar);

    fiz = new Criterion({
      name: 'fiz'
    });
    criteria.add(fiz);

    buz = new Criterion({
      name: 'buz'
    });
    criteria.add(buz);
  });

  it('should have a list of items', function () {
    expect(criteria.size()).to.equal(4);
  });

});

