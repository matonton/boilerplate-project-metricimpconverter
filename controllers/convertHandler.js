function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    // extract numerical portion of input, using regular expressions: 3.1mi => 3.1
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    // extract unit of input, using regular expressions: 3.1mi => mi
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    // simple logic of return unit based on input: 3.1mi => km
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    // need to spell out gal => gallons, L => liters, lbs => pounds, Kg => kilograms, mi => miles, Km => kilometers
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    // simple multiplication based on input units, case switch?
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    // combine existing elements into string e.g. 3.1 miles converts to 4.98895 kilometers
    return result;
  };
  
}

module.exports = ConvertHandler;
