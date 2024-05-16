const add = function(int1, int2) {
  return int1 + int2;
};

const subtract = function(int1, int2) {
  return int1 - int2;
};

const sum = function(intArray) {
	let sum = 0;
  for (let int of intArray) {
    sum += int;
  }
  return sum;
};

const multiply = function(intArray) {
  if (!intArray.length) {
    return 'ERROR';
  }

  let product = 1;
  for (let int of intArray) {
    product *= int;
  }
  return product;
};

const power = function(base, exponent) {
	let power = 1;
  for (let i=0; i<exponent; i++) {
    power *= base;
  }
  return power;
};

const factorial = function(int) {
	let factorial = 1;
  for (let i=int; i>1; i--) {
    factorial *= i;
  }
  return factorial;
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
