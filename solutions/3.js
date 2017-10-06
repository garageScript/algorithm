const print = (a,i=1)=>{
  console.log("hello")
  if(i == a){
    return ;
  }
  return(print(a,i+1))
}
print(3);


