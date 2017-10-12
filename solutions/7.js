const solution = (num, i = 2) => {
  const checkPrime = (n, i = 2) => {
    if (i <= n) {
      if (n % i == 0) {
        return false;
      }
      return checkPrime(n, i + 1);
    }
    return n !== 1;
  };

  if (i <= num) {
    if (checkPrime(num) == false) {
      if (num % i === 0) {
        return num/i;
      } else {
        return solution(num, i + 1);
      }
    } else {
      return 1;
    }
  };
};
module.exports = solution;
