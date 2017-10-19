const solution = require('../solutions/18');

const test = (testObj, result) => {
  if (solution(testObj) == result) {
    console.log(`Correct!`);
  } else {
    console.log(`Wrong. Expected: ${result}. Actual: ${solution(testObj)}`);
  }
};

test({1: 1, 3: 3, 2: 2}, 3);
test({20: 20, 10: 10, 5: 5}, 20);
