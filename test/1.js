const biggest = require('../solutions/1.js');

const test = (a, b, c, result) => {
  if(biggest(a,b,c) === result) {
    console.log(`Correct`);
  } else {
    console.log('wrong');
  }
};

test(5,6,3,6);
test(9,2,4,9);
test(5,3,6,3);
