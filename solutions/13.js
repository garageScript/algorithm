const solution = (num, fact = 1) => {
  if (num != 1) {
    return solution(num - 1, fact * num);
  }
  return fact;
};

module.exports = solution;
