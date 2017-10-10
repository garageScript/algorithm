const test = require('../solutions/4.js')
const testing = (a,b,c)=>{
  if(test(a,b) == c){
    console.log("your code is running");
  }else{
    console.log("your code is not working");
  }
}
testing("madhu",2,'madhu madhu ')
testing("sudhan",3,'sudhan sudhan')

