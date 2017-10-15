const solution = require('../solutions/15');

const test = (str, char, result) => {
  if (solution(str, char) == result) {
    console.log(`Correct!`);
  } else {
    console.log(`Wrong. Expected: ${result}. Actual: ${solution(str, char)}`);
  }
};

test('hello', 'e', true);
test('world', 'a', false);
test('maricris', 's', true);
test('bonzo', 'h', false);
