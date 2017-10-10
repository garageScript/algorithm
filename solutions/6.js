const callX2=(func,num,i=1)=>{
  if (num <= 0){
    return;
  }
  func(i);
  if (num === i){
    return;
  }
  return callX2(func,num, i+1);
}

module.exports = callX2;
