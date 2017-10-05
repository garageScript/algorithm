const solution = require('../solutions/1');

const test = (a, b, result) => {
  if(solution(a,b) === result) {
    console.log(`Correct`);
  } else {
    console.log(`Wrong. Expected:`, result);
  }
};

test(5,6, 11);
test(1,3,4);
