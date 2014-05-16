/*global sinon*/
var assert = require('assert');
var Criteria = require('../../../../src/main/js/settings/criteria');
var Settings = require('../../../../src/main/js/settings/settings');

describe('Criteria', function () {

  describe('with fake request', function () {
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
      var criteria = new Criteria();
      criteria.fetch();

      assert.equal(1, requests.length);
      assert.equal('/api/settings', requests[0].url);
    });
  });

  describe('with fake server', function () {

    var server;

    beforeEach(function () {
      server = sinon.fakeServer.create();
    });

    afterEach(function () {
      server.restore();
    });

    it('fetches an item to an empty collection', function () {
      server.respondWith('GET', '/api/settings', [200, {
          "Content-Type": "application/json"
        },
        '[{ "id": "reportType", "title": "Report type" }]'
      ]);

      var criteria = new Criteria();
      criteria.fetch();

      server.respond();

      var item = criteria.get('reportType');
      assert.equal('Report type', item.get('title'));
      assert.equal(1, criteria.size());
    });

    it('fetches a new item and keeps the existing', function () {
      server.respondWith('GET', '/api/settings', [200, {
          "Content-Type": "application/json"
        },
        '[{ "id": "reportType", "title": "Report type" }]'
      ]);

      var reportNameField = new Settings.reportName();
      var criteria = new Criteria([reportNameField]);
      criteria.fetch({
        remove: false
      });

      server.respond();

      var reportType = criteria.get('reportType');
      var reportName = criteria.get('reportName');

      assert(reportName, 'report name exists');
      assert(reportType, 'report type exists');
      assert.equal(2, criteria.size());
    });

  });

  describe('collaboration with others', function () {
    it('can be created with default list using Settings', function () {
      var criteria = new Criteria(Settings.defaults());
      assert(13, criteria.size());
    });
  });

});
