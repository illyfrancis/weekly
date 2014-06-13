var Criterion = require('../../../../src/main/js/models/criterion');
var Criteria = require('../../../../src/main/js/collections/criteria');

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

describe('Criteria', function () {

  var criteria = {};

  beforeEach(function () {
    criteria = new Criteria();
  });

  it('has a url string', function () {
    expect(criteria.url).to.be.a('string').and.equal('/api/settings');
  });

  it('sorts the elements by displayOrder', function () {
    var elements = [{
      'id': 'Four',
      'displayOrder': 4
    }, {
      'id': 'One',
      'displayOrder': 1
    }, {
      'id': 'Three',
      'displayOrder': 3
    }, {
      'id': 'Two',
      'displayOrder': 2
    }];
    criteria.reset(elements);

    expect(criteria.at(0).get('id')).to.equal('One');
    expect(criteria.at(1).get('id')).to.equal('Two');
    expect(criteria.at(2).get('id')).to.equal('Three');
    expect(criteria.at(3).get('id')).to.equal('Four');
  });

  it('returns an empty query when there\'s no criterion', function () {
    expect(criteria.toQuery()).to.be.empty;
  });

  it('returns a query from a criteria when one criterion is set', function () {
    var query = '{#query#}',
      criterion = new Criterion();
    sinon.stub(criterion, 'toQuery').returns(query);

    criteria.add(criterion);
    expect(criteria.toQuery()).to.equal(query);
  });

  it('returns a combined query when multiple criteria is set', function () {
    var query1 = '{#query1#}',
      query2 = '{#query2#}',
      query3 = '{#query3#}',
      criterion1 = new Criterion(),
      criterion2 = new Criterion(),
      criterion3 = new Criterion();

    sinon.stub(criterion1, 'toQuery').returns(query1);
    sinon.stub(criterion2, 'toQuery').returns(query2);
    sinon.stub(criterion3, 'toQuery').returns(query3);

    criteria.add(criterion1);
    criteria.add(criterion2);
    criteria.add(criterion3);

    expect(criteria.toQuery()).to.equal('{"$and":[' + query1 + ',' + query2 + ',' + query3 + ']}');
  });
});
