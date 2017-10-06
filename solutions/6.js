const callX2=(func,num)=>{
  if (num == 0){
    return;
  }
  printFunc(num);
  callX2(func, num-1);
}

const printFunc = (number) => {
  console.log(`Number :${number}`);
}

callX2(printFunc,3);
