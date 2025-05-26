const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
  return num1-num2;
	
};

const sum = function(array) {
 /*
  let summation = 0;
  for (let element of array){
    summation += element;
  }
  return summation;
	*/
  return array.reduce((cumilitive, current)=> cumilitive+=current,0);
};

const multiply = function(array) {
  return array.reduce((cumilitive,current)=> cumilitive*=current)
};

const power = function(num1, num2) {
  return num1**num2;
	
};

const factorial = function(num1) {
  if (num1 == 0) {
    return 1;
  } else {
    return num1 * factorial(num1-1);
  }
	
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
