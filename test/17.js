const solution = require('../solutions/17');

const test = (testArr, result) => {
  if (solution(testArr) == result) {
    console.log(`Correct!`);
  } else {
    console.log(`Wrong. Expected: ${result}. Actual: ${solution(testArr)}`);
  }
};

test([1, 0, 2, 2, 4], 2);
test([0, 0, 0, 1, 1, 1, 1], 1);
