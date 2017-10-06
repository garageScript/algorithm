const maxNum = require ('../solutions/2.js');

const printMax = (num1,num2,num3,max) =>{
  if (maxNum(num1,num2,num3) === max){
    console.log(`Test Case Passed. Output: ${max}`);
  }
  else{
    console.log(`Test Case Failed. Output: ${max}`);
  }
}

printMax(1,2,3,3);
printMax(-2,-10,-14,-2);
printMax(0,5,8,8);

