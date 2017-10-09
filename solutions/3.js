const solution = (num, hello = '', i = 0) => {
  if(i == num){
    return hello;
  }
  hello = hello + 'hello';
  return solution(num, hello, i + 1);
};

module.exports = solution;
