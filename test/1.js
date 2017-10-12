const expect = require('chai').expect;
const solution = require('../solutions/1');

const test = (a, result) => {
  if(solution(a) === result) {
    console.log(`Correct!`);
  } else {
    console.log(`Wrong. Expected:`, result);
  }
};

test('5son9b9', 2);
test('99n9b9', 4);
test('5hellowa', 1);
test('90912nine', 3);
