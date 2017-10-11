const isPrime =  require('../solutions/8.js');

const tester = (num,res) => {
  if(isPrime(num) == res){
    console.log('Test case passed');
  }else{
    console.log('Test case failed');
  }
}
tester(10,false);
tester(2,true);
tester(7,true);
