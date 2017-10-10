const recursion = (funct, num, i=0)=>{
  if(i != num){
  funct(num);
  recursion(funct, num, i+1);
  }
}
module.exports = recursion;
