/*

Write a function that calls a function n number of times
and pass in that number as an argument.

*/

const callX2 = (func, n, i = 1) => {
  if (i === n) return func(n);
  func(i);
  return callX2(func, n, i + 1);
};