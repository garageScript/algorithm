const solution = (num1, num2, num3, i = 0, biggestNum) => {
  let threeNums = [num1, num2, num3];
  if(threeNums.length - 1 === i){
    return biggestNum;
  }
  if(threeNums[i] < threeNums[i + 1]){
    biggestNum = threeNums[i + 1];
  } else {
    biggestNum = threeNums[i];
  }
  return solution(num1, num2, num3, i + 1, biggestNum);
};

module.exports = solution;
