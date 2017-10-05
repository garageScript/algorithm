const test = require('./solu.js')
const test1=(a,b,c)=>{
  if(test(a,b,c)>b && test(a,b,c)>c){
    console.log(a+"a is greater")
  }
  if(test(a,b,c)>a && test(a,b,c)>c){
    console.log(b+"b is greater")
  }
  if(test(a,b,c)>a && test(a,b,c)>b){
    console.log(c+"c is greater")
  }
}
test1(5,2,2)
test1(2,5,2)
test1(2,2,5)


