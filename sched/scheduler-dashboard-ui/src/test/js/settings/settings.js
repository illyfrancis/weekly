var assert = require('assert');
var Settings = require('../../../../src/main/js/settings/settings');

describe('Settings', function () {

    it('has default list', function () {
      assert(13, Settings.defaults().length);
    });

});
