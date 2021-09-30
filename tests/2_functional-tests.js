const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  suite('Integration -- server with Chai', function() {
    test('valid input such as 10L', function() {
      chai
        .request(server)
        .get('/api/convert')
        .query('input=10L')
        .end(function(err, res) {
          // console.log(res);
          assert.equal(res.status, 200);
          assert.approximately(res.body.returnNum, 2.6, .1);
          assert.equal(res.body.returnUnit, 'gal');
        });
    });
    
    test('invalid input such as 32g', function() {
      chai
        .request(server)
        .get('/api/convert')
        .query('input=32g')
        .end(function(err, res) {
          // console.log(res);
          assert.equal(res.status, 200);
          assert.equal(res.text, 'invalid unit');
        });
    });
    
    test('invalid input such as 3/7.2/4kg', function() {
      chai
        .request(server)
        .get('/api/convert')
        .query('input=3/7.2/4kg')
        .end(function(err, res) {
          // console.log(res);
          assert.equal(res.status, 200);
          assert.equal(res.text, 'invalid number');
        });
    });
    
    test('invalid number and unit such as 3/7.2/4kilomegagram', function() {
      chai
        .request(server)
        .get('/api/convert')
        .query('input=3/7.2/4kilomegagram')
        .end(function(err, res) {
          // console.log(res);
          assert.equal(res.status, 200);
          assert.equal(res.text, 'invalid number and unit');
        });
    });
    
    test('no number such as kg', function() {
      chai
        .request(server)
        .get('/api/convert')
        .query('input=kg')
        .end(function(err, res) {
          // console.log(res);
          assert.equal(res.status, 200);
          assert.approximately(res.body.returnNum, 2.2, .1);
          assert.equal(res.body.returnUnit, 'lbs');
        });
    });

  });
});
