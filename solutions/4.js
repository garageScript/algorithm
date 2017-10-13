const printStr = (str,num) => {
  if(num === 0){
    return;
  }
  console.log(str);
  printStr(str,num-1);
}

printStr('Apple',5);
