/*global sinon jQuery*/
var assert = require('assert');
var url = require('url');
var Books = require('../../../src/main/js/models/books');

describe('Stubbing Pageable Collection', function () {

  describe('#browser: require', function () {

    it('should load the library', function () {
      sinon.stub(jQuery, 'ajax');

      var books = new Books();
      books.fetch();
      assert.equal(jQuery.ajax.calledWithMatch({url: 'http://localhost:9091/books?page=1&per_page=50'}), true);
    });
  });
});