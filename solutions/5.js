const solution = (func, num, i = 0) => {
  if(i < num){
    func();
    solution(func, num, i + 1);
  }
};

module.exports = solution;
