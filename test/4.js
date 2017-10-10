const solution = require('../solutions/4');

const test = (str, num, result) => {
  if(solution(str, num) === result) {
    console.log(`Correct!`);
  } else {
    console.log(`Wrong. Expected: ${result} Actual: ${solution(str, num)}`);
  }
};

test('hello', 5, `hello hello hello hello hello `);
test('world', 1, `world `);
test('!', 5, `! ! ! ! ! `);
test('k bye', 0, ``);
