const solution = require('../solutions/2.js');

const test = (num1, num2, num3)=>{
  if(solution(num1, num2, num3) === num1){
    console.log('Number 1 is max: ' + num1);
  }else if(solution(num1,num2,num3) === num2){
    console.log('Number 2 is max ' + num2);
  }else if(solution(num1, num2, num3) === num3){
    console.log('Number 3 is max', num3);
  }
}

test(1,7,5);
