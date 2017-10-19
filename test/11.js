const solution = require('../solutions/11');

const test = (n, result) => {
  if (solution(n) == result) {
    console.log('Correct!');
  } else {
    console.log(`Wrong. Expected: ${result}. Actual: ${solution(num1, num2)}`);
  }
};

test(45, 49);
test(12, 14);
