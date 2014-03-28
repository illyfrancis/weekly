/*global sinon*/
var assert = require('assert');
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
      assert.equal('localhost:9091/books?page=1&per_page=25', requests[0].url);

      console.log('url is [' + requests[0].url + ']');
    });
  });
});