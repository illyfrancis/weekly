/*global sinon*/
var assert = require('assert');
var Clients = require('../../../../src/main/js/collections/clients');

describe('Clients', function () {

  var API_URI = './api/settings/clients';

  describe('interacting with API', function () {
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

    it('consumes from Settings API', function () {

      var clients = new Clients();
      clients.fetch();

      assert.equal(1, requests.length);
      assert(requests[0].url.indexOf(API_URI) > -1);
    });
  });


  describe('with fake server', function () {

    // enable cache
    require('../../../../src/main/js/app').ajaxSetup({
      cache: true
    });

    var server;

    beforeEach(function () {
      server = sinon.fakeServer.create();
    });

    afterEach(function () {
      server.restore();
    });


    it('fetches clients', function () {
      server.respondWith('GET', './api/settings/clients', [200, {
          'Content-Type': 'application/json'
        },
        '{"clients":[{"id":"BBH2","name":"BBH Investor Services"}]}'
      ]);

      var clients = new Clients();
      clients.fetch();

      server.respond();

      assert.equal(1, clients.size());
      assert.equal('BBH2', clients.at(0).get('id'));
      assert.equal('BBH Investor Services', clients.at(0).get('name'));
    });

  });

});
