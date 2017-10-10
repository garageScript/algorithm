const print = (a,b,c="",i=0)=>{
  if(b == i){
    return c;
  }
  return(print(a,b,c+a+' ',i+1))
}
module.exports=print;
