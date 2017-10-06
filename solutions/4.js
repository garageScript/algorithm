const printhello = (num,string,i=0,str="")=>{
  if(i==num)
  {
    return str;
  }
  else
  {
    str=str+string+" ";
  }
return printhello(num,string,i+1,str);
}
module.exports = printhello;
