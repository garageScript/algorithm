const solution = (str, num, i = 0, newStr = '') => {
  if(i == num){
    return newStr;
  }
  newStr = str + ' ' + newStr;
  return solution(str, num, i + 1, newStr);
};

module.exports = solution;
