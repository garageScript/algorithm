const solution = require('../solutions/Max3.js');

const test = (a,b,c,test)=>{
  if(solution(a,b,c)===test){
    console.log('Correct');
  }
  else{
    console.log('Incorrect '+final);
  }
}

test(5,2,1,5);
test(1,6,3,6);
test(2,4,6,6);
