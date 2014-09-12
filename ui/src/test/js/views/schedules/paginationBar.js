/*global sinon*/
var Pagination = require('../../../../../src/main/js/models/pagination');
var PaginationBar = require('../../../../../src/main/js/views/schedules/paginationBar');

var assert = require('assert');

describe('PaginationBar', function () {

  var pagination, paginationBar;

  beforeEach(function () {

    sinon.stub(PaginationBar.prototype, 'render');
    sinon.stub(PaginationBar.prototype, 'changePage');

    pagination = new Pagination({
      currentPage: 2,
      totalRecords: 140
    });

    paginationBar = new PaginationBar({
      model: pagination
    });
  });

  afterEach(function () {

    PaginationBar.prototype.render.restore();
    PaginationBar.prototype.changePage.restore();
  });

  it('renders when filter changes', function () {

    pagination.trigger('change');
    assert(paginationBar.render.calledOnce);
  });

  it('changes page correctly when setting first page', function () {

    paginationBar.firstPage();
    assert(paginationBar.changePage.calledWith(1));
  });

  it('changes page correctly when setting last page', function () {

    paginationBar.lastPage();
    assert(paginationBar.changePage.calledWith(7));
  });

  it('changes page correctly when going to next page set', function () {

    paginationBar.nextPageSet();
    assert(paginationBar.changePage.calledWith(6));
  });

  it('does NOT change page when there is no next page set', function () {

    pagination.set('currentPage', 6);
    paginationBar.nextPageSet();
    assert(paginationBar.changePage.notCalled);
  });

  it('changes page correctly when going to previous page set', function () {

    pagination.set('currentPage', 6);
    paginationBar.previousPageSet();
    assert(paginationBar.changePage.calledWith(1));
  });

  it('does NOT change page when there is no previous page set', function () {

    paginationBar.previousPageSet();
    assert(paginationBar.changePage.notCalled);
  });
});
