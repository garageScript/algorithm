const solution = (func, num, i = 0) => {
  if (i !== num) {
    func(i + 1);
    solution(func, num, i + 1);
  };
};
  module.exports = solution;
