'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

// GET route for /api/convert with ?input=4gal, expect
app.get('/api/convert', function(req, res) {
  let input = req.query.input;
  let num = convertHandler.getNum(input);
  let unit = convertHandler.getUnit(input);
  console.log(`num is ${num} and unit is ${unit}`);
  if (!unit && !num) {
    res.send('invalid number and unit');
  }
  if (!unit) {
    res.send('invalid unit');
  }
  if (!num) {
    res.send('invalid number');
  }
  let resultUnit = convertHandler.getReturnUnit(unit);
  let resultNum = convertHandler.convert(num, unit);

  let result = {
      initNum: num,
      initUnit: unit,
      returnNum: resultNum,
      returnUnit: resultUnit,
      string: convertHandler.getString(num, unit, resultNum, resultUnit)
    };

  // console.log(`${input} ${num} ${unit} ${resultUnit}`);
  
  res.json(result);
});

};
