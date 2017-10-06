const solution = require('../solutions/1.js');
// solution = require('../yourSolution').solution;

const test = (a, b, result) => {
  if(solution(a,b) === result) {
    console.log(`Correct`);
  } else {
    console.log(`Wrong. Expected:`, result);
  }
};

test(5,6,7);
test(3,2,6);
test(3,2,5);
