/*

Write a function that takes in a number and print
out all divisors of that number

input: 10, output: 1,2,5,10

*/

const getDivisors = (num, i=1) => {
  if (i === num + 1) return;
  if (num % i === 0) console.log(i);
  return getDivisors(num, i + 1);
};