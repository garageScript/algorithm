const solution = require('../solutions/13');

const test = (a, result) => {
  if (solution(a) === result) {
    console.log(`Correct!`);
  } else {
    console.log(`Wrong. Expected:`, result);
  }
};

test(5, 120);
