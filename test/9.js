const greatestDivisor = require ('../solutions/9.js');

const tester = (num1,num2,res) => {
  if (greatestDivisor(num1,num2) == res){
    console.log(`Correct. result: ${res}`);
  }
  else{
    console.log(`Wrong. result: ${res}`);
  }
}
tester(10,30,10);
tester(15,36,3)
