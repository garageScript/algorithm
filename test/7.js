const getDivisors = require ('../solutions/7.js');

const tester = (num,res) => {
  if(getDivisors(num) == res){
    console.log(`Test case Passed. Answer:${res}`);
  }else{
    console.log(`Test case Failed. Answer:${res}`);
  }
}
tester(21,7);
tester(10,5);
tester(9,3);
