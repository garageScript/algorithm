const fact = (num,i=num-1) => {
  if (num == 0){
    return 1;            // 0! = 1
  }else if (num <0){
    return;              //not defined for negative numbers
  }

  if(i==0){
    return num;
  }
  if(i>0){
    num = num * i;
  }
  return fact(num,i-1);
}

module.exports = fact;
