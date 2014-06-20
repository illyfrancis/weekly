var Criterion = require('../../../../src/main/js/models/criterion');
var Criteria = require('../../../../src/main/js/collections/criteria');

var chai = require('chai');
var expect = chai.expect;

describe('Criterion', function () {

  describe('A single criterion without collection', function () {

    var field;

    beforeEach(function () {
      field = new Criterion({
        id: 'reportName'
      });
    });

    it('matches the id', function () {
      expect(field.get('id')).to.equal('reportName');
    });

    it('is not a sort field by default', function () {
      var isSort = field.isSortField();
      expect(isSort).to.be.false;
    });

    it('is set as sort field', function () {
      field.makeSortField();
      expect(field.isSortField()).to.be.true;
    });

    it('has asc order the first time', function () {
      field.makeSortField();
      expect(field.get('sortOrder')).to.equal(1);
    });

    it('has desc order on second call', function () {
      field.makeSortField();
      field.makeSortField();
      expect(field.get('sortOrder')).to.equal(-1);
    });

    it('returns sort object', function () {
      field.makeSortField();
      expect(field.toSortBy()).to.eql({
        'field': 'reportName',
        'order': 1
      });
    });

    it('returns group object', function () {
      field.makeGroupField();
      expect(field.toGroupBy()).to.eql({
        'field': 'reportName',
        'order': 1
      });
    });
  });

  describe('In a criteria collection', function () {
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

    it('matches the names', function () {
      expect(foo.get('name')).to.equal('foo');
      expect(bar.get('name')).to.equal('bar');
      expect(fiz.get('name')).to.equal('fiz');
      expect(buz.get('name')).to.equal('buz');
    });

    it('is not a sort field by default', function () {
      var isSort = foo.isSortField();
      expect(isSort).to.be.false;
    });

    it('is set as sort field', function () {
      foo.makeSortField();
      expect(foo.isSortField()).to.be.true;
    });

    it('has asc order', function () {
      fiz.makeSortField();
      expect(fiz.get('sortOrder')).to.equal(1);
    });

    it('triggers change event', function () {
      var changed = false;
      fiz.on('change', function () {
        changed = true;
      });
      fiz.makeSortField();
      expect(changed).to.be.true;
    });

    it('has desc order on second call', function () {
      buz.makeSortField();
      buz.makeSortField();

      expect(buz.get('sortOrder')).to.equal(-1);
    });

    it('has second criterion as sort field', function () {
      foo.makeSortField();
      buz.makeSortField();

      expect(foo.isSortField()).to.be.false;
      expect(buz.isSortField()).to.be.true;
      expect(buz.get('sortOrder')).to.equal(1);
    });

    it('triggers change event for previous sort field', function () {
      foo.makeSortField();

      var fooChanged = false;
      foo.on('change', function () {
        fooChanged = true;
      });

      buz.makeSortField();

      expect(fooChanged).to.be.true;
    });

    it('is set as a group field', function () {
      foo.makeGroupField();
      expect(foo.isGroupField()).to.be.true;
    });

    it('cannot sort on a field if it is already a group by field', function () {
      bar.makeGroupField();
      bar.makeSortField();
      expect(bar.isGroupField()).to.be.true;
      expect(bar.isSortField()).to.be.false;
    });

    it('removes sort order when a field is made group field', function () {
      bar.makeSortField();
      bar.makeGroupField();
      expect(bar.isGroupField()).to.be.true;
      expect(bar.isSortField()).to.be.false;
    });
  });

});
