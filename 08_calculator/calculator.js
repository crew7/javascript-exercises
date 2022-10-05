const add = function(number1, number2) {
  return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(arrayData) {
	return arrayData.reduce( function(accumulator, currentValue) {
    return accumulator += currentValue
  }, 0 )
};

const multiply = function(arrayData) {
  return arrayData.reduce( function(accumulator, currentValue) {
    return accumulator *= currentValue
  }, )
};

const power = function(number1, number2) {
	return number1 ** number2;
};

const factorial = function(factorialNumber) {
  if (factorialNumber === 0) return 1;
	for (let i = factorialNumber - 1; i > 1; --i) {
    factorialNumber *= i;
  }
  return factorialNumber;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
