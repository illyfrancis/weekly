var Downloader = require('../../../../../src/main/js/views/schedules/downloader');


var assert = require('assert');

describe('Downloader View', function () {

  var REPORT_OUTPUT_ID = 1;
  
  var downloader;
  
  beforeEach(function () {
    
    downloader = new Downloader({ outputId : REPORT_OUTPUT_ID });
    
  });
    
  it('builds download URL', function () {
    var downloadUrl = downloader.buildUrl();
    assert.equal(downloadUrl, './reportoutput/' + REPORT_OUTPUT_ID + '/file');
  });
  
});
