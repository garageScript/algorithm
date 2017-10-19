const solution = require('../solutions/5');

const test = (num) => {
  let count = 0;
  const func = () => {
    count = count + 1;
  }
  solution(func, num);
  if(num == count){
    console.log('Correct!');
  } else {
    console.log('Wrong.');
  }
}

test(5);
test(0);
test(3);
