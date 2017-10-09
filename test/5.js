const solution = require('../solutions/5');

let count = 0;
const func = () => {
  count = count + 1;
  return count;
}

solution(func, 5);
if(count === 5){
  console.log('Correct!');
} else {
  console.log(`Wrong. Actual: ${solution(func, 5)}`);
}

count = 0;
solution(func, 2);
if(count === 2){
  console.log('Correct!');
} else {
  console.log(`Wrong. Actual: ${solution(func, 5)}`);
}
