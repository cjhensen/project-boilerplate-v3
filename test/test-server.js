// require assertion library
const chai = require('chai');

// require http assertion library
const chaiHttp = require('chai-http');

// bring in our server exports (destructuring)
const {app, runServer, closeServer} = require('../server/server');

// use chai should
const should = chai.should();

describe('Something to test', function() {
  before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });

  it('should list items on GET', function() {
    // test code
  });
});