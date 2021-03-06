var Pagination = require('../../../../src/main/js/models/pagination');

var chai = require('chai');
var expect = chai.expect;

describe('Pagination', function () {

  var pagination;
  var PAGE_SIZE = 18;

  beforeEach(function () {
    pagination = new Pagination();
  });

  it('calculates offset correctly', function () {
    var offset = 3;
    expect(pagination.offset(offset)).to.be.equal((offset-1) * PAGE_SIZE);
  });

  it('return correct limit', function () {
    expect(pagination.limit()).to.be.equal(PAGE_SIZE);
  });

  it('recognises when current page is not the first one', function () {
    pagination.set('currentPage', 2);
    expect(pagination.isFirstPage()).to.be.false;
  });

  it('recognises when current page is the first one', function () {
    pagination.set('currentPage', 1);
    expect(pagination.isFirstPage()).to.be.true;
  });

  it('recognises when current page is not the last one', function () {
    pagination.set('totalRecords', 3 * PAGE_SIZE);
    pagination.set('currentPage', 2);
    expect(pagination.isLastPage()).to.be.false;
  });

  it('recognises when current page is the last one', function () {
    pagination.set('totalRecords', 3 * PAGE_SIZE);
    pagination.set('currentPage', 3);
    expect(pagination.isLastPage()).to.be.true;
  });

  it('calculates number of pages correctly', function () {
    pagination.set('totalRecords', (3 * PAGE_SIZE) + 1);
    expect(pagination.totalNumberOfPages()).to.be.equal(4);
  });

  it('calculates first page of current set correctly', function () {
    pagination.set('currentPage', 7);
    expect(pagination.firstPageOfCurrentSet()).to.be.equal(6);
  });

  it('recognises when the current page set is the first one', function () {
    pagination.set('currentPage', 2);
    expect(pagination.isFirstPageSet()).to.be.true;
  });

  it('recognises when the current page set is not the first one', function () {
    pagination.set('currentPage', 6);
    expect(pagination.isFirstPageSet()).to.be.false;
  });

  it('recognises when the current page set is the last one', function () {
    pagination.set('totalRecords', 140);
    pagination.set('currentPage', 6);
    expect(pagination.isLastPageSet()).to.be.true;
  });

  it('recognises when the current page set is not the last one', function () {
    pagination.set('totalRecords', 140);
    pagination.set('currentPage', 3);
    expect(pagination.isLastPageSet()).to.be.false;
  });

  it('correctly geenrates set of pages to render when there are 5 pages in current set', function () {
    pagination.set('totalRecords', 7 * PAGE_SIZE);
    pagination.set('currentPage', 3);
    expect(pagination.pageNumbersOfCurrentSet()).to.be.deep.equal([1, 2, 3, 4, 5]);
  });

  it('correctly geenrates set of pages to render when there are less than 5 pages in current set', function () {
    pagination.set('totalRecords', 7 * PAGE_SIZE);
    pagination.set('currentPage', 6);
    expect(pagination.pageNumbersOfCurrentSet()).to.be.deep.equal([6, 7]);
  });

  it('generates correct JSON representation', function () {
    pagination.set('totalRecords', 7 * PAGE_SIZE);
    pagination.set('currentPage', 6);

    expect(pagination.toJSON()).to.be.deep.equal({currentPage: 6, totalRecords: 7 * PAGE_SIZE, pages: [6, 7], totalPages: 7});
  });
});
