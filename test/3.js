const solution = require('../solutions/3');

const test = (num, result) => {
  if(solution(num) === result) {
    console.log(`Correct!`);
  } else {
    console.log(`Wrong. Expected: ${result}`);
  }
};

test(5, `hellohellohellohellohello`);
test(1, `hello`);
test(3, `hellohellohello`);
test(0, ``);
