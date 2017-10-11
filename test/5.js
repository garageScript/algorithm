const solution = require('../solutions/5.js');
 
 const test =(num)=>{
 let sum=0;
 const t =()=>{
 return sum = sum+1;
 }
 solution(num,t);
 if(num==sum){
 console.log('Right output');
 }else{
 console.log('Wrong output');
 }
 }
 test(5);
 test(3);
