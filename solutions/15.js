const solution = (str, char, i = 0) => {
  if (i >= str.length) return false;
  if (str[i] == char) return true;
  return solution(str, char, i + 1);
};

module.exports = solution;
