const check = require('./solu.js')
const check1 = (a,b,c)=>{
  if(check(a,b)==c){
    console.log("your code is correct")
  }else{
    console.log("your code is not correct")
  }
}
check1(1,2,3)
check1(1,1,1)
