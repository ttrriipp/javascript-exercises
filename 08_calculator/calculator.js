const add = function(...num) {
  return num.reduce((total, item) => {
    return total + item;
  }, 0);
};

const subtract = function(...num) {
  return num[0] - num[1];	
};

const sum = function(num) {
  return num.reduce((total, item) =>  total + item, 0);
};

const multiply = function(num) {
  return num.reduce((total, item) =>  total * item, 1);
};

const power = function(...num) {
  return num.reduce((total, item) => {
    const powerValue = num[0];
    for (let i = 1 ; i < item; i++) {
      total *= powerValue;
    }
    return total;
  });
};

const factorial = function(num) {
  for (let i = num - 1; i > 0; i--) {
    num *= i;
  }
  return num === 0 ? 1 : num;
	
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
