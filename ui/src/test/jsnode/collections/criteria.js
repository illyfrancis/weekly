var Criterion = require('../../../../src/main/js/models/criteria/criterion');
var Criteria = require('../../../../src/main/js/collections/criteria');
var Settings = require('../../../../src/main/js/collections/settings');

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

describe('Criteria', function () {

  var criteria = {};

  beforeEach(function () {
    criteria = new Criteria();
  });

  it('has a url string', function () {
    expect(criteria.url).to.be.a('string').and.equal('./api/settings/filters');
  });

  it('has default set of criterion', function () {
    expect(criteria.size()).to.equal(Settings.defaults().length);
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
    expect(criteria.toQuery()).to.eql({
      query: "{}",
      sorts: [{
        field: 'clientId',
        order: 1
      }]
    });
  });

  it('returns a query from a criteria when one criterion is set', function () {
    var query1 = {
      'key': 'value'
    },
      criterion = new Criterion();
    sinon.stub(criterion, 'toQuery').returns(query1);

    criteria.add(criterion);
    expect(criteria.toQuery()).to.eql({
      query: JSON.stringify(query1),
      sorts: [{
        field: 'clientId',
        order: 1
      }]
    });
  });

  it('returns a combined query when multiple criteria is set', function () {
    var query1 = {
      'key1': 'val1'
    },
      query2 = {
        'key2': 'val2'
      },
      query3 = {
        'key3': 'val3'
      },
      criterion1 = new Criterion(),
      criterion2 = new Criterion(),
      criterion3 = new Criterion();

    sinon.stub(criterion1, 'toQuery').returns(query1);
    sinon.stub(criterion2, 'toQuery').returns(query2);
    sinon.stub(criterion3, 'toQuery').returns(query3);

    criteria.add(criterion1);
    criteria.add(criterion2);
    criteria.add(criterion3);

    expect(criteria.toQuery()).to.eql({
      query: JSON.stringify({
        '$and': [query1, query2, query3]
      }),
      sorts: [{
        field: 'clientId',
        order: 1
      }]
    });
  });

  it('returns sort field from a criteria when one criterion is set', function () {
    var criterion = new Criterion({
      id: 'criterion1',
      sortOrder: -1
    });

    criteria.add(criterion);

    expect(criteria.toQuery()).to.eql({
      query: "{}",
      sorts: [{
        field: 'clientId',
        order: 1
      }, {
        field: 'criterion1',
        order: -1
      }]
    });
  });

  it('returns sort fields from a criteria when two criterion are set', function () {
    var criterion1 = new Criterion({
      id: 'criterion1'
    });

    var criterion2 = new Criterion({
      id: 'criterion2',
      sortOrder: -1
    });

    criteria.add(criterion1);
    criteria.add(criterion2);

    expect(criteria.toQuery()).to.eql({
      query: "{}",
      sorts: [{
        field: 'clientId',
        order: 1
      }, {
        field: 'criterion2',
        order: -1
      }]
    });
  });

});
