const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  let input;
  
  input = '5';
  suite('normal input', function() {
    // TODO: write all unit tests
    assert.isUndefined('hello', 'a string is not undefined');
    assert.isOk(convertHandler.getNum(input), 'a string is not undefined');
  });

});