const solution = require('../solutions/15.js');

const tester = (str, ch, test)=>{
  if(solution(str, ch) === test){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
}
tester('hello', 'e', true);
tester('string', 'r', true);
tester('wings', 's', true);
