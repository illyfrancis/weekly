var User = require('../../../../src/main/js/models/user');

var chai = require('chai');
var expect = chai.expect;

describe('User', function () {

  describe('Default user', function () {
    var user;

    beforeEach(function () {
      user = new User();
    });

    it('does not have SERV_DELIVERY role', function () {
      expect(user.isServiceDelivery).to.be.false;
    });

    it('does not have ADMIN role', function () {
      expect(user.isAdmin).to.be.false;
    });
  });

  describe('Created with role [REPORT_OWNER]', function () {
    var user;

    beforeEach(function () {
      user = new User({
        roles: ['REPORT_OWNER']
      });
    });

    it('does not have SERV_DELIVERY role', function () {
      expect(user.isServiceDelivery).to.be.false;
    });

    it('does not have ADMIN role', function () {
      expect(user.isAdmin).to.be.false;
    });
  });

  describe('Created with roles [REPORT_OWNER, SERV_DELIVER]', function () {
    var user;

    beforeEach(function () {
      user = new User({
        roles: ['REPORT_OWNER', 'SERV_DELIVER']
      });
    });

    it('has SERV_DELIVERY role', function () {
      expect(user.isServiceDelivery).to.be.true;
    });

    it('does not have ADMIN role', function () {
      expect(user.isAdmin).to.be.false;
    });
  });

  describe('Created with roles [REPORT_OWNER, ADMIN]', function () {
    var user;

    beforeEach(function () {
      user = new User({
        roles: ['REPORT_OWNER', 'ADMIN']
      });
    });

    it('does not have SERV_DELIVERY role', function () {
      expect(user.isServiceDelivery).to.be.false;
    });

    it('has ADMIN role', function () {
      expect(user.isAdmin).to.be.true;
    });
  });


  describe('Created with roles [REPORT_OWNER, SERV_DELIVER, ADMIN]', function () {
    var user;

    beforeEach(function () {
      user = new User({
        roles: ['REPORT_OWNER', 'SERV_DELIVER', 'ADMIN']
      });
    });

    it('has SERV_DELIVERY role', function () {
      expect(user.isServiceDelivery).to.be.true;
    });

    it('has ADMIN role', function () {
      expect(user.isAdmin).to.be.true;
    });
  });


});
