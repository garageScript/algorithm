const solution = require('../solutions/5');

let count = 0;
const func = () => {
  count = count + 1;
}

const test = (num) => {
  solution(func, num);
  if(num == count){
    console.log('Correct!');
  } else {
    console.log('Wrong.');
  }
  count = 0;
}

test(5);
test(0);
test(3);
