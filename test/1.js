const add = require('../solutions/1.js');

const test= (input1,input2,result)=>{
  if(add(input1,input2)==result){
    console.log('Correct');
  }else{
    console.log('Wrong expected result is: ' + add(input1,input2));
  }
}

test(4,10,14);
test(5,8,13);
test(5,8,3);
