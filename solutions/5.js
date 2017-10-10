/*
Write a function that given a function and a number,
call that function that number of times

*/

const callX = (func, n) => {
  if (n === 0) return;
  func();
  return callX(func, n - 1);
};

module.exports = callX;