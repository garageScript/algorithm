const solution = require('../solutions/12');

const test = (testNum) => {
  let count = 0;

  const testFunc = () => {
    count += 1;
  };

  setTimeout(() => {
    if (count == testNum) {
      console.log('Correct!');
    } else {
      console.log('Wrong.');
    }
  }, testNum * 1000 + 1000);

  solution(testFunc, testNum);
};

test(3);
test(4);
test(5);
