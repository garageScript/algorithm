const printStr = (str,num,i=0) => {
  if(i === num){
    return;
  }
  console.log(str);
  printStr(str,num,i+1);
}

printStr('Apple',5);
