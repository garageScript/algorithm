const greatest = (a,b,c)=>{
  if(a>b && a>c){
    return a
  }
  if(b>a && b>c){
    return b
  }
    return c
}
module.exports = greatest
