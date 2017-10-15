const solution = require('../solutions/14');

const test = (num, result) => {
  if (JSON.stringify(solution(num)) == JSON.stringify(result)) {
    console.log(`Correct!`);
  } else {
    console.log(`Wrong. Expected: ${result}. Actual: ${solution(num)}`);
  }
};

test(7, [1, 2, 3, 5, 7]);
