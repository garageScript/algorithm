const solution = (num, hello = '', i = 0) => {
  if(i == num){
    return hello;
  }
  return solution(num, hello + 'hello', i + 1);
};

module.exports = solution;
