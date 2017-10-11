const callX2=(func,num,i=1)=>{
  if ((num <= 0) || (num === i)){
    return;
  }
  func(i);
  return callX2(func,num, i+1);
}

module.exports = callX2;
