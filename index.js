const produceDrivingRange = function(num) {
  return function blockRange(num1, num2) {
    let range = parseInt(num2.slice(0,2))-parseInt(num1.slice(0,2));
    let result = num-range;
    if (result > 0) {
      return `within range by ` + Math.abs(result)
    } else {
      return Math.abs(result) + ` blocks out of range`
    }
  }
}

const produceTipCalculator = function(percent) {
  return function amount(num) {
    return percent * num
  }
}

function createDriver() {
  let DriverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++DriverId;
    }


  }
}
