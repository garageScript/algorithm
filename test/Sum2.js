const solution = require('../solutions/Sum2.js');

const test=(a,b,final)=>{
  if(solution(a,b)==final){
    console.log('Correct');
  }
    else{
      console.log('Incorrect '+final);
    }
}

test(5,6,11);
test(5,10,15);
test(6,6,11);
