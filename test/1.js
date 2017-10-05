const expect = require('chai').expect;
const solution = require('../solutions/1');
// solution = require('../yourSolution').solution;

const test = (a, b, result) => {
  if(solution(a,b) === result) {
    console.log(`Correct`);
  } else {
    console.log(`Wrong. Expected:`, result);
  }
};

test(5,6, 11);
