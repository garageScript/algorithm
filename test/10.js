const solution = require('../solutions/10');

const test = (testNum1, testNum2) => {
  let count = 0;
  let compare = true;
  const testFunc = (x) => {
    count += 1;
    if (count !== x) compare = false;
  };
  solution(testFunc, testNum1, testNum2);
  if (compare && (count == testNum1 || count == testNum2)) {
    console.log('Correct!');
  } else {
    console.log('Wrong.');
  }
};

test(4, 5);
test(20, 1);
test(0, -1);
