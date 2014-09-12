/*global sinon*/
var assert = require('assert');
var Criteria = require('../../../../src/main/js/collections/criteria');
var ReportName = require('../../../../src/main/js/models/criteria/reportName');

describe('Criteria', function () {

  var API_URI = './api/settings/filters';

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

      var criteria = new Criteria();
      criteria.fetch();

      assert.equal(1, requests.length);
      assert(requests[0].url.indexOf(API_URI) > -1);
    });

    it('saves settings using Settings API', function () {

      var reportName = new ReportName();
      var criteria = new Criteria(reportName);
      criteria.save();

      assert.equal(API_URI, requests[0].url);
      assert.equal('POST', requests[0].method);
      assert.equal(JSON.stringify(criteria), requests[0].requestBody);
    });

  });

  describe('with fake server', function () {

    // enable cache
    require('../../../../src/main/js/app').ajaxSetup({cache: true});

    var server;

    beforeEach(function () {
      server = sinon.fakeServer.create();
    });

    afterEach(function () {
      server.restore();
    });

    it('fetches an item to an empty collection', function () {
      server.respondWith('GET', './api/settings/filters', [200, {
          'Content-Type': 'application/json'
        },
        '{"filters": [{"id": "reportType", "title": "Report type" }]}'
      ]);

      var criteria = new Criteria();
      criteria.fetch();

      server.respond();

      var item = criteria.get('reportType');
      assert.equal('Report type', item.get('title'));
      assert.equal(1, criteria.size());
    });

    it('fetches a new item and keeps the existing', function () {
      server.respondWith('GET', './api/settings/filters', [200, {
          'Content-Type': 'application/json'
        },
        '{"filters": [{ "id": "reportType", "title": "Report type" }]}'
      ]);

      var criteria = new Criteria([{ "id": "reportName", "title": "Report name" }]);
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

    it('fetches an empty list and keeps the existing', function () {
      server.respondWith('GET', './api/settings', [200, {
          'Content-Type': 'application/json'
        },
        '[]'
      ]);

      var criteria = new Criteria([{ "id": "reportName", "title": "Report name" }]);
      criteria.fetch({
        remove: false
      });

      server.respond();

      var reportName = criteria.get('reportName');

      assert(reportName, 'report name exists');
      assert.equal(1, criteria.size());
    });

  });

});
