const solution = require('../solutions/2.js');

const test = (num1, num2, num3, max)=>{
  if(solution(num1, num2, num3, max) === num1){
    console.log('Number 1 is max: ' + num1);
  }else if(solution(num1,num2,num3, max) === num2){
    console.log('Number 2 is max ' + num2);
  }else if(solution(num1, num2, num3, max) === num3){
    console.log('Number 3 is max', max);
  }
}

test(1,7,5);
