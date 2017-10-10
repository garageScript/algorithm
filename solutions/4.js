const solution = (str, num, i = 0, newStr = '') => {
  if(i == num){
    return newStr;
  }
  return solution(str, num, i + 1, str + ` ${newStr}`);
};

module.exports = solution;
