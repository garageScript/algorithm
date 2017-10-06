const expect = require('chai').expect;
const solution = require('../solutions/2');

const test = (num1, num2, num3, result) => {
  if(solution(num1, num2, num3) === result) {
    console.log(`Correct!`);
  } else {
    console.log(`Wrong Result: ${solution(num1, num2, num3)}. Expected: ${result}`);
  }
};

test(1,2,3,3);
test(0,40,1,40);
test(1,2,4,'Testing Wrong');
test(0,30,1,'Testing Wrong');
