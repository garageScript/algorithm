const solution = (num, i = 2) => {
  if (i <= num) {
    if (num % i === 0) return false;
    solution(num, i + 1);
  }
  return num !== 1;
};
module.exports = solution;
