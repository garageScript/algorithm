const solution = (str, char, i = 0) => {
  if (i < str.length) {
    if (str[i] == char) {
      return true;
    }
    return solution(str, char, i + 1);
  }
  return false;
};

module.exports = solution;
