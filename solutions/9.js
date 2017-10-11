const greatestDivisor =(num1, num2, i=1, gd=-1)=> {
  if (i>num1 || i>num2){
    return gd;
  }
  if ((num1 % i == 0) && (num2 % i == 0)){
    gd = i;
  }
  return greatestDivisor(num1, num2, i+1, gd);
}

module.exports = greatestDivisor;
