const objA = {
  '5':"blah blah",
  'name': "ho",
  'zolo': "4thech"
}

const funct = (k=Object.keys(objA), v=Object.values(objA), i=0)=>{
  /*
  if(i === k.length){
    return;
  }
  */
  if(v[i].length > 3){
    return true;
  }else{
    return false;
  }
  // return funct(k, v, i+1);
}

const filterObj = (obj, funct, objectC={}, i=0)=>{
  /*
  if(i === Object.keys(obj).length){
    return objectC;
  }
  if(funct){
    objectC[obj[i]] = obj[obj[i]];
  }
  return (obj, funct, objectC, i+1);
  */
  console.log(funct());
}
console.log(filterObj(objA));
