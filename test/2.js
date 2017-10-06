const test = require('../solutions/2.js')
const testing = (a,b,c,max) =>{
  if(test(a,b,c) === max){
    console.log("this is the maximum");
  }else{
    console.log("this is not the maximum");
  }
}
testing(1,1,2,2);
testing(1,2,1,2);
testing(2,1,10,2);

