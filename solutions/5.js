const callX = (func,num) => {
  if (num <= 0){
    return;
  }
  func();
  callX(func,num-1);
}

module.exports = callX;
