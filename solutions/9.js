const solution = (num1, num2, i = 1, smaller, gcd) => {
  if (num1 < num2) {
    smaller = num1;
  } else {
    smaller = num2;
  }
  if (i <= smaller) {
    if (((num1 % i) && (num2 % i)) == 0) {
      gcd = i;
    }
    return solution(num1, num2, i + 1, smaller, gcd);
  }
  return gcd;
};
module.exports = solution;
