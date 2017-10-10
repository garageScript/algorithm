const solution = require('../solutions/5.js');

const test = (num) => {
  let count = 0;
  const f = () => {
    count++;
  };

  solution(f, num);

  num === count ? console.log(count) : console.log('Wrong');
};

test(5);
test(1);
test(7);
test(0);