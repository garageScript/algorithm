const callX2 = require('../solutions/6.js');

const testing = (num) => {
  let count =0;
  let flag = true;

  const testFunc = (a) =>{
    console.log(a);
    count = count + 1;
    if(a!=count){
      flag = false;
    }
  }
  callX2(testFunc,num);
  if (flag && count === num){
    console.log('Correct');
  }
  else{
    console.log('Wrong');
  }
}

testing(3);
testing(-2);
testing(0);
