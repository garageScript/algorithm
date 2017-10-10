const solution = require('../solutions/6.js');

const tester = (call, test) =>{
  let i = 0;
  let number = 0;

  const funct = (a)=>{
    number = number + a;
    i = i + 1;
  }
  solution(funct, call);

  if(test === number){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
}

tester(5, 25);
tester(10, 9);
tester(3, 9);
