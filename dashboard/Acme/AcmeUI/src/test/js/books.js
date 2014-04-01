/*global sinon*/
var assert = require('assert');
var Books = require('../../../src/main/js/models/books');

describe('Pageable Books', function () {

  var xhr,
      requests,
      books;

  beforeEach(function () {
    books = new Books();

    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function (req) {
      requests.push(req);
    };
  });

  afterEach(function () {
    xhr.restore();
  });

  describe('fetch()', function () {
    it('requests books api', function () {

      books.fetch();

      assert.equal(requests.length, 1);
      assert.equal(requests[0].url, '/api/books?page=1&per_page=50');
    });
  });

  describe('navigate between pages', function () {
    it('go to first page then next page', function () {
      books.getFirstPage();
      assert.equal(requests[0].url, '/api/books?page=1&per_page=50');

      books.getNextPage();
      assert.equal(requests[1].url, '/api/books?page=2&per_page=50');
    });

    it('go to page then next page then has previous but no next page', function () {
      books.getFirstPage();
      books.getNextPage();
      assert.equal(books.hasPrevious(), true);
      assert.equal(books.hasNext(), false);
    });
  });

  describe('setSorting()', function () {
    it('appends sort and order by in the request', function () {
      books.setSorting('title');
      books.getFirstPage();
      assert.equal(requests[0].url, '/api/books?page=1&per_page=50&sort_by=title&order=asc');
    });

    it('appends sort and order by desc', function () {
      books.setSorting('title', 1);
      books.getFirstPage();
      assert.equal(requests[0].url, '/api/books?page=1&per_page=50&sort_by=title&order=desc');
    });
  });
});