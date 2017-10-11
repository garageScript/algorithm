const solution = (num, i = 2) => {
  const checkPrime = (n) => {
    for (i = 2; i <= n; i++) {
      if (n % i === 0) return false;
    }
    return n !== 1;
  };

  if (i <= num) {
    if (checkPrime(num) == false) {
      if (num % i === 0) {
        return num/i;
      } else {
        solution(num, i + 1);
      }
    } else {
      return 1;
    }
  };
};
module.exports = solution;
