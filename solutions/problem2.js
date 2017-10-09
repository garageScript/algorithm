const maxNum = (n1, n2, n3) => {
  return (n1 > n2 ? (n1 > n3 ? n1: n3) : (n2 > n3 ? n2 : n3));
};

module.exports = maxNum;