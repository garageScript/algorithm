const solution = require('../solutions/8');

const test = (num, result) => {
  if (solution(num) === result) {
    console.log(`Correct!`);
  } else {
    console.log(`Wrong. Expected: ${result}. Actual: ${solution(num)}`);
  }
};

test(5, true);
test(4, false);
