const solution = (obj, keys = Object.keys(obj), i = 0, max = 0) => {
  if (i === keys.length) return max;
  const key = keys[i];
  if (obj[key] > max) max = obj[key];
  return solution(obj, keys, i + 1, max);
};

module.exports = solution;
