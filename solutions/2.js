const solution = (num1, num2, num3, i = 1, biggestNum) => {
  let threeNums = [num1, num2, num3];
  if(i >= threeNums.length){
    return biggestNum;
  }
  if(threeNums[i] < threeNums[i - 1]){
    biggestNum = threeNums[i - 1];
  } else {
    biggestNum = threeNums[i];
  }
  return solution(num1, num2, num3, i + 1, biggestNum);
};

module.exports = solution;
