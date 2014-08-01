var DistributionFormat = require('../../../../../src/main/js/models/criteria/distributionFormat');

var chai = require('chai');
var expect = chai.expect;

describe('DistributionFormat', function () {

  var distributionFormat;

  beforeEach(function () {
    distributionFormat = new DistributionFormat({
      'id': 'distributionFormat'
    });
  });

  it('is not sortable', function () {
    var sortable = distributionFormat.get('isSortable');
    expect(sortable).to.be.false;
  });

  describe('query generation', function () {

    it('returns a null object when no filter value set', function () {
      var query = distributionFormat.toQuery();
      expect(query).to.be.null;
    });

    it('returns a null object when filter is not array', function () {
      distributionFormat.setFilter('not array');
      var query = distributionFormat.toQuery();
      expect(query).to.be.null;
    });

    it('returns a null object when filter is empty array', function () {
      distributionFormat.setFilter([]);
      var query = distributionFormat.toQuery();
      expect(query).to.be.null;
    });

    it('returns query object when filter set with multiple options', function () {
      distributionFormat.setFilter(['Link', 'FTP']);
      var query = distributionFormat.toQuery();

      expect(query).to.eql({
        '$or': [{
          'deliveryIndicatorLink': {
            '$eq': 'Y'
          }
        }, {
          'deliveryIndicatorFTP': {
            '$eq': 'Y'
          }
        }]
      });

      it('returns query object when filter set with single option', function () {
        distributionFormat.setFilter(['Link']);
        var query = distributionFormat.toQuery();

        expect(query).to.eql({
          'deliveryIndicatorLink': {
            '$eq': 'Y'
          }
        });
      });
    });
  });
});
