const solution = require('../solutions/10');

const test = (testNum1, testNum2) => {
  let count = 0;
  let compare = true;
  let bigger;

  if (testNum1 > testNum2) {
    bigger = testNum1;
  } else {
    bigger = testNum2;
  }

  const testFunc = (x) => {
    count += 1;
    if (count !== x) compare = false;
  };

  solution(testFunc, testNum1, testNum2, bigger);

  if (compare && (count == bigger)) {
    console.log('Correct!');
  } else {
    console.log('Wrong.');
  }
};

test(4, 5);
test(20, 1);
test(0, -1);
test(5, 10);
