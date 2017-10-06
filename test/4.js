const solution = require('../solutions/4.js');
// solution = require('../yourSolution').solution;

const test = (a,b,c)=>{
  if(solution(a,b)==c){
    console.log("correct");
  }
  else{
      console.log("wrong");
    } 
  };

  
test(2,"Apple","Apple Apple ");
test(3,"Apple","Apple Apple ");
test(4,"Apple","Apple Apple Apple Apple ");

