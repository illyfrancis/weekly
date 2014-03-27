/*global sinon*/

var assert = require('assert');
var Books = require('../../../src/main/js/models/books');
// var sinon = sinon || require('sinon');

describe('Pageable Collection', function () {

  describe('non browserx test require', function () {
    it('should be run', function () {
      assert.equal('foo', 'foo');
    });
  });

  describe('#browser: require', function () {

    var xhr, requests;

    beforeEach(function () {
      console.log('beforeEach');
      xhr = sinon.useFakeXMLHttpRequest();
      requests = [];
      xhr.onCreate = function (req) {
        requests.push(req);
      };    
    });

    afterEach(function () {
      console.log('afterEach');
      xhr.restore();
    });

    it('should load the library', function () {

      var books = new Books();
      books.fetch();

      assert.equal(requests.length, 1);

      console.log('url is [' + requests[0].url + ']');
    });
  });
});