const callX = require('../solutions/5.js');

const testing = (num) => {
  let sum =0;
  const funct = ()=>{
    sum = sum + 1;
  }

  callX(funct,num);

  if (sum == num){
    console.log('Correct');
  }else{
    console.log('Wrong');
  }
}
testing(3);
testing(0);
testing(-3);
