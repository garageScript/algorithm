const solution = (num) => {
  if (num % 7 == 0) {
    return num;
  }
  return solution(num + 1);
};
module.exports = solution;
