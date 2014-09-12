var Clients = require('../../../../src/main/js/collections/clients');

var chai = require('chai');
var expect = chai.expect;

describe('Clients', function () {

  it('maps a single client to an id', function () {
    var clients = new Clients([{
      id: 'acme',
      name: 'acme name'
    }]);

    expect(clients.toList()).to.equal('acme');
  });

  it('maps a list of clients to a comma separated ids', function () {
    var clients = new Clients([{
      id: 'acme',
      name: 'acme name'
    }, {
      id: 'baz',
      name: 'baz name'
    }, {
      id: 'fizz',
      name: 'fizz name'
    }]);
    
    expect(clients.toList()).to.equal('acme,baz,fizz');
  });

  it('maps no client to empty string', function () {
    var clients = new Clients();

    expect(clients.toList()).to.equal('');
  });

});
