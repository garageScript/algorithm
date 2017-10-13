const fact = require ('../solutions/21.js');

const tester = (num,res) => {
  if(fact(num) == res ) {
    console.log(`Correct. Factorial of ${num} is ${res}.`);
  }else {
    console.log(`Wrong. Factorial of ${num} is ${res}`);
  }
}

tester(6,720);
tester(-2,null);
tester(0,1);

