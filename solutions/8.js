const isPrime = (num,i=2) => {
  if((i == num-1) || (num == i)){
    return true;
  }
  if((num <= 1) || (num % i) == 0){
    return false;
  }
  return isPrime(num,i+1);
}

module.exports = isPrime;
