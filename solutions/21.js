const fact = (num,i=num-1) => {
  if (num <= 0){
    return 1;
  }else{
    return num * fact(num-1);
  }
}

module.exports = fact;
