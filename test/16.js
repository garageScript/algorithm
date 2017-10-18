const solution = require('../solutions/16');

const test = (testArr, result) => {
  if (solution(testArr) == result) {
    console.log(`Correct!`);
  } else {
    console.log(`Wrong. Expected: ${result}. Actual: ${solution(testArr)}`);
  }
};

test([0, 2, 4, 6], 0);
test([9, 1, 6, 9], 2);
