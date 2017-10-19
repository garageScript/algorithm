const solution = (input, i = 0, count = 0) => {
  if(i == input.length){
    return count;
  }
  if(input[i] == 9){
    count += 1;
  }
  return solution(input, i += 1, count);
};

module.exports = solution;
