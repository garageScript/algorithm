const greater = (a,b,c)=>{
  let max=a
  if(b>a){
    max=b
  }
  if(c>b){
    max=c
  }
  return max
}
module.exports=greater;

