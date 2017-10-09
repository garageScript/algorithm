const helloN=(num,i=0)=>{
  if(i===num){
    return;
  }
  else{
    console.log("hello");
  }
 return helloN(num, i+1);
}
module.exports = helloN;
