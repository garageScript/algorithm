const add = require('./sum2.js');

const testAdd = (a, b, c)=>{
  if(add(a,b)==c){
    console.log('You are correct');
  }else{
    console.log('You are wrong')
  }
}

testAdd(10,26,36);
testAdd(98,5,24);
