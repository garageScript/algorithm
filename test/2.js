const test = require('../solutions/2.js')
const testing = (a,b,c) =>{
  if(test(a,b,c) === a){
    console.log(a,"is greatest number");
  }
  if(test(a,b,c) === b){
    console.log(b,"is greatest number");
  }
  if(test(a,b,c) === c){
    console.log(c,"is greatest number");
  }
}

testing(1,1,2);
testing(1,2,1);
testing(2,1,10);

