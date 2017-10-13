const solution = (num, fact = 1) => {
  if (num != 1) {
    fact = fact * num;
    return solution(num - 1, fact);
  }
  return fact;
};

module.exports = solution;
