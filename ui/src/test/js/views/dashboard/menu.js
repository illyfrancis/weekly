var Criteria = require('../../../../../src/main/js/collections/criteria');
var Menu = require('../../../../../src/main/js/views/dashboard/menu');
var User = require('../../../../../src/main/js/models/user');

var chai = require('chai');
var expect = chai.expect;

describe('Menu View', function () {

  var testMenu;

  beforeEach(function () {
    var testUser = new User({
      'id': 'A012345'
    });

    testMenu = new Menu({
      criteria: new Criteria(),
      user: testUser
    });
  });

  it('renders filter button', function () {
    testMenu.render();
    expect(containsElementWithClass(testMenu, '.filters')).to.be.true;
  });

  it('renders group by button', function () {
    testMenu.render();
    expect(containsElementWithClass(testMenu, '.group-by')).to.be.true;
  });

  var containsElementWithClass = function (menu, className) {
    return menu.$el.has(className).length === 1;
  };
});
