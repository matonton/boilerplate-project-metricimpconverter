const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function() {
  let input, units;

  suite('getNum(input)', function() {
    test('whole number input', function() {
      input = '5mi';
      assert.equal(convertHandler.getNum(input), 5);
    });
    test('decimal input', function() {
      input = '5.5mi';
      assert.equal(convertHandler.getNum(input), 5.5);
    });
    test('fractional input ', function() {
      input = '1/2mi';
      assert.equal(convertHandler.getNum(input), 0.5);
    });
    test('fractional input with decimal', function() {
      input = '1.5/3mi';
      assert.equal(convertHandler.getNum(input), 0.5);
    });
    test('double fraction', function() {
      input = '1/5/3mi';
      assert.isNotOk(convertHandler.getNum(input));
    });
    test('no number', function() {
      input = 'mi';
      assert.equal(convertHandler.getNum(input), 1);
    });
    
  });

  suite('getUnit(input)', function() {
    test('valid unit', function() {
      input = '5mi';
      assert.equal(convertHandler.getUnit(input), 'mi');
    });
    test('invalid unit', function() {
      input = 'microns';
      assert.isNotOk(convertHandler.getUnit(input));
    });

  });
  
  suite('getReturnUnit(input)', function() {
    //TODO: getting stuck on the little l
    test('return units', function() {
        /* input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['L','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      }); 
    }); */
    input = 'gal';
    assert.equal(convertHandler.getReturnUnit(input), 'L');
    input = 'L';
    assert.equal(convertHandler.getReturnUnit(input), 'gal');
    input = 'mi';
    assert.equal(convertHandler.getReturnUnit(input), 'km');
    input = 'km';
    assert.equal(convertHandler.getReturnUnit(input), 'mi');
    input = 'lbs';
    assert.equal(convertHandler.getReturnUnit(input), 'kg');
    input = 'kg';
    assert.equal(convertHandler.getReturnUnit(input), 'lbs');
    
    });
  });
  
  suite('spellOutUnit(input)', function() {
    test('spelling', function() {
      input = 'gal';
      assert.equal(convertHandler.spellOutUnit(input), 'gallons');
      input = 'L';
      assert.equal(convertHandler.spellOutUnit(input), 'liters');
      input = 'mi';
      assert.equal(convertHandler.spellOutUnit(input), 'miles');
      input = 'km';
      assert.equal(convertHandler.spellOutUnit(input), 'kilometers');
      input = 'lbs';
      assert.equal(convertHandler.spellOutUnit(input), 'pounds');
      input = 'kg';
      assert.equal(convertHandler.spellOutUnit(input), 'kilograms');
    });
  });
  
  suite('convert(input, units)', function() {
    test('gal to L', function() {
      input = 3;
      units = 'gal';
      assert.approximately(convertHandler.convert(input, units), 11.3, .1);  
    });
    test('L to gal', function() {
      input = 3;
      units = 'L';
      assert.approximately(convertHandler.convert(input, units), .8, .1);  
    });
    test('kg to lbs', function() {
      input = 3;
      units = 'kg';
      assert.approximately(convertHandler.convert(input, units), 6.6, .1);  
    });
    test('lbs to kg', function() {
      input = 3;
      units = 'lbs';
      assert.approximately(convertHandler.convert(input, units), 1.4, .1);  
    });
    test('mi to km', function() {
      input = 3;
      units = 'mi';
      assert.approximately(convertHandler.convert(input, units), 4.8, .1);  
    });
    test('km to mi', function() {
      input = 3;
      units = 'km';
      assert.approximately(convertHandler.convert(input, units), 1.8, .1);  
    });
  });
});