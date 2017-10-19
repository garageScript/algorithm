const biggestVal = require('../solutions/18');

const createObj = (a, o = {}, i = 0) => {
  if (i > a.length) return o;
  if (!o[a[i]]) {
    o[a[i]] = 1;
  } else {
    o[a[i]] = o[a[i]] + 1;
  }
  return createObj(a, o, i + 1);
};

const solution = (arr) => {
  const obj = createObj(arr);
  const biggestValue = biggestVal(obj, Object.keys[obj]);
  const values = Object.values(obj);
  return values.indexOf(biggestValue);
};

module.exports = solution;
