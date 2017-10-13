const getDivisors = (num,i=num-1) => {
  if ((num % i) == 0){
    return i;
  }
 return getDivisors(num,i-1);
}
module.exports = getDivisors;
