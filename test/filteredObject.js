const solution = require('../solutions/filteredObject.js');

const objA = {                                                                 '5':"blah blah",
  'name': "ho",                                                                'zolo': "4thech"                                                        
}

const funct = (k, v, objectC={}, i=0)=>{
  if(i === k.length){
    return objectC;                                                          }                                                                              if(v[i].length > 3){                                                              objectC[k[i]]=v[i];                                                         }
  return funct(k, v, objectC, i+1);
}

const test = (object, functions, result, i=0)=>{
  if(i === Object.keys(solution(object,functions)).length){
    return;
  }
  if(Object.values(solution(object,functions))[i].length == Object.values(result)[i].length){
    console.log('equal objects, and above 3 characters');
  }else{
    console.log('not equal objects, and below 3 characters');
  }
  return test(object, functions, result, i+1);

}
test(objA, funct,{'5':"bl", 'zolo':"4thech"});
