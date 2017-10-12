const solution = require('../solutions/6');

const test = (testNum) => {
  let count = 0;
  let compare = true;
  const testFunc = (x) => {
    count += 1;
    if (count !== x) compare = false;
  };
  solution(testFunc, testNum);
  if (compare && testNum == count) {
    console.log('Correct!');
  } else {
    console.log('Wrong.');
  }
};

test(5);
test(3);
test(10);
