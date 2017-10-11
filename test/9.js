const solution = require('../solutions/9');

const test = (num1, num2, result) => {
  if (solution(num1, num2) === result) {
    console.log(`Correct!`);
  } else {
    console.log(`Wrong. Expected: ${result}. Actual: ${solution(num1, num2)}`);
  }
};

test(3, 6, 3);
test(10, 100, 10);
