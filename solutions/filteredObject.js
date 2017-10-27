const objA = {
  '5':"blah blah",
  'name': "ho",
  'zolo': "4thech"
}

const funct = (k, v, objectC={}, i=0)=>{
  if(i === k.length){
    return objectC;
  }
  if(v[i].length > 3){
    objectC[k[i]]=v[i];
  }
  return funct(k, v, objectC, i+1);
}

const filterObj = (obj, func, i=0)=>{
  return func(Object.keys(obj), Object.values(obj));
}
console.log(filterObj(objA,funct));
