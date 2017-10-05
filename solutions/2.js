const maxOfThree = (num1, num2, num3, max)=>{
  if(num1 > num2 && num1 > num3){
    max = num1;
  }else if(num2 > num1 && num2 > num3){
    max = num2;
  }else if(num3 > num1 && num3 > num2){
    max = num3;
  }
  return max;
}
module.exports = maxOfThree;
