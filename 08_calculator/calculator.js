const add = function(a, b) {
  return a+b;
	
};

const subtract = function(a, b) {
  return a-b;
};

const sum = function(array) {
  return array.reduce((total, current) => total += current, 0);

};

const multiply = function(array) {
  if (array.length == 0) {
    return 0;
  }
  return array.reduce((total, current) => total*= current, 1);
};

const power = function(num, power) {
  return num**power;
};

const factorial = function(number) {
  let result = 1;
  for (let i = 1; i<=number; i++) {
    result *= i;
  }
  return result;
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
