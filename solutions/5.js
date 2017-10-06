const callX = (func,num) => {
  if (num==0){
    return;
  }
  printFunc();
  callX(func,num-1);
}

const printFunc=()=>{
  console.log('Working');
}


callX(printFunc,5);
