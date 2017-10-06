const getDivisors = (num,i=num) => {
  if (i === 0){
    return;
  }
  if ((num % i) === 0){
    console.log(i);
  }
  getDivisors(num,i-1);
}

getDivisors(10);
