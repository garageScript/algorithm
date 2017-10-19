const solution = (arr, num = 0, i = 0) => {
  if (i >= arr.length) return num;
  if (arr[i] == 9) num += 1;
  return solution(arr, num, i + 1);
};

module.exports = solution;
