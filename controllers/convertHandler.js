function ConvertHandler() {
  
  this.getNum = function(input) {
    let result, parsed;
    // extract numerical portion of input, using regular expressions: 3.1mi => 3.1
    parsed = input.split(/[A-Z a-z]/);
    result = parsed[0];
    console.log(`parsed Num as: ${parsed} and parsed[0] as ${result}`);
    // handle no numerical input
    if (!result) {
      console.log("assigning default value of 1")
      return 1;
    }

    // handle fractions
    console.log(typeof result, result.indexOf('/') >= 0);
    if (result.indexOf('/') >= 0) {
      console.log("inside loop with result: "+ result);
      if (result.match(/\//g).length > 1) return NaN;
      let fraction = result.split('/');
      result = fraction[0] / fraction[1];
    }

    // TODO: handle non-number inputs
    let test = result * .5;
    if (!test) return NaN;
    return Number(result);
  };
  
  this.getUnit = function(input) {
    let parsed, find;
    // extract unit of input, using regular expressions: 3.1mi => mi
    find = input.search(/[A-Z a-z]/);
    parsed = input.slice(find);
    console.log(`parsed Unit as: ${parsed}`);
    if (parsed == "L") return parsed;
    return parsed;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    // simple logic of return unit based on input: 3.1mi => km
    switch (initUnit) {
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'gal':
        result = 'L';
        break;
      case 'L':
        result = 'gal';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      default: 
        result = 'invalid';
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    // need to spell out gal => gallons, L => liters, lbs => pounds, Kg => kilograms, mi => miles, Km => kilometers
    switch (unit) {
      case 'gal':
        result = 'gallons';
        break;
      case 'L':
        result = 'liters';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    // simple multiplication based on input units, case switch?
    switch (initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'L':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum * lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum * miToKm;
        break;
    }
    if (!result) return 'invalid';
    return result.toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    // combine existing elements into string e.g. 3.1 miles converts to 4.98895 kilometers
    result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
