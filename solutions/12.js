const solution = (func, num, seconds = num * 1000) => {
  if (seconds !== 0) {
    setTimeout(() => {
      func();
      solution(func, num, seconds - 1000);
    }, 1000);
  };
};

module.exports = solution;
