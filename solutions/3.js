const sayHello = (num,i=0) => {
  if(i == num){
    return;
  }
  console.log('Hello');
  sayHello(num,i+1);
}

sayHello(3);
