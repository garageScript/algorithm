const callX = require('../solutions/5.js');


//test case 1
let sum = 0;

const func=()=>{
  sum = sum + 1;
}

//callX(func,20);

if (sum === 20){
  console.log('Correct');
}else{
  console.log('Wrong');
}

//test case 2
let sum = 0;

const func=()=>{
  sum = sum + 1;
}

callX(func,-5);

if (sum === 0){
  console.log('Correct');
}else{
  console.log('Wrong');
}

//test case 3
let sum = 0;

const func=()=>{
  sum = sum + 1;
}

callX(func,0);

if (sum === 0){
  console.log('Correct');
}else{
  console.log('Wrong');
}


