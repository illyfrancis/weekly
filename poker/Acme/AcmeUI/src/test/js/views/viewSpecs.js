var assert = require('assert');

// var path = require('path');

// console.log('Current directory: ' + process.cwd());

// var src = path.resolve(process.cwd(), './src/main/js');
// console.log('require dir : ' + src);

// process.chdir(src);

// console.log('change directory: ' + process.cwd());

// var Client = require('./client.js');
var Client = require('../../../main/js/models/client');

describe('ClientView', function () {
  describe('# dummy test', function () {
    it('should have default name', function () {
      var client = new Client();
      assert.equal('ABC Co.', client.get('name'));
    });
  });
});
