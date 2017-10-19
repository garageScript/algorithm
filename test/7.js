const solution = require('../solutions/7');

const test = (num, result) => {
  if (solution(num) === result) {
    console.log(`Correct!`);
  } else {
    console.log(`Wrong. Expected: ${result}. Actual: ${solution(num)}`);
  }
};

test(10, 5);
test(25, 5);
test(16, 8);
