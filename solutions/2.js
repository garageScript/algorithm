const solution = (num1, num2, num3, i = 1, threeNums = [num1, num2, num3], biggestNum) => {
  if(i >= threeNums.length){
    return biggestNum;
  }
  if(threeNums[i] < threeNums[i - 1]){
    biggestNum = threeNums[i - 1];
  } else {
    biggestNum = threeNums[i];
  }
  return solution(num1, num2, num3, i + 1, threeNums = [num1, num2, num3], biggestNum);
};

module.exports = solution;
