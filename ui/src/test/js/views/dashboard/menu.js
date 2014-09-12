var Criteria = require('../../../../../src/main/js/collections/criteria');
var Menu = require('../../../../../src/main/js/views/dashboard/menu');
var User = require('../../../../../src/main/js/models/user');

var chai = require('chai');
var expect = chai.expect;

describe('Menu View', function () {

  var createMenuFor = function (role) {

    var testUser = new User({
      'id': 'A012345',
      'roles': [role]
    });

    var testMenu = new Menu({
      criteria: new Criteria(),
      user: testUser
    });

    return testMenu;
  };

  var containsClientsSelectionButton = function (menu) {
    return menu.$el.has('button.clients').length === 1;
  };

  it('doesnt render clients selection button if Report Owner', function () {

    var testMenu = createMenuFor('REPORT_OWNER');

    testMenu.render();

    expect(containsClientsSelectionButton(testMenu)).to.be.false;
  });

  it('renders clients selection button if Service Delivery', function () {

    var testMenu = createMenuFor('SERV_DELIVER');

    testMenu.render();

    expect(containsClientsSelectionButton(testMenu)).to.be.true;
  });


  it('renders clients selection button if Admin', function () {

    var testMenu = createMenuFor('ADMIN');

    testMenu.render();

    expect(containsClientsSelectionButton(testMenu)).to.be.true;
  });

});
