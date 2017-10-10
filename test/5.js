const solution = require('../solutions/5');

let count = 0;
const func = () => {
  count = count + 1;
}

const test = (numOfCalls, numToTest) => {
  solution(func, numOfCalls);
  if(numToTest == count){
    console.log('Correct!');
  } else {
    console.log('Wrong.');
  }
  count = 0;
}

test(5, 5);
test(5, 4);
