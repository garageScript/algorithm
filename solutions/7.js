const solution = (num, i = 1, bigD = num) => {
  if (i < num) {
    if (num % i == 0) {
        bigD = i;
    }
      if (bigD < i) {
        return solution(num, i + 1, bigD);
      }
    }
  };
  return bigD;
};
module.exports = solution;
