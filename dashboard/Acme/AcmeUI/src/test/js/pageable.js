/*global sinon*/
var assert = require('assert');
var url = require('url');
var Books = require('../../../src/main/js/models/books');

describe('Pageable Collection', function () {

  describe('non browserx test require', function () {
    it('should run in node test', function () {
      assert.equal('foo', 'foo');
    });
  });

  describe('#browser: require', function () {

    var xhr, requests;

    beforeEach(function () {
      xhr = sinon.useFakeXMLHttpRequest();
      requests = [];
      xhr.onCreate = function (req) {
        console.log('fetching: ' + JSON.stringify(req));
        requests.push(req);
      };
    });

    afterEach(function () {
      xhr.restore();
    });

    it('should load the library', function () {

      var books = new Books();
      books.fetch();

      assert.equal(requests.length, 1);
      assert.equal('/books?page=1&per_page=50', requests[0].url);

      console.log('URL: ' + requests[0].url);

      // var expected = url.parse(requests[0].url);
      // var expectedQuery = url.parse(requests[0].url, true);

      // console.log('url is [' + requests[0].url + ']');
    });

    it('should sort');

    it.skip('should get first page', function () {
      var books = new Books();
      books.getFirstPage();
      console.log('url is [' + requests[0].url + ']');
      books.getNextPage();
      console.log('url is [' + requests[1].url + ']');

    });
  });
});