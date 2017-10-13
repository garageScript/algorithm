const strHas = (string, char, i=0)=>{
  if(string.length == i){
    return false;
  }
  if(string[i] === char){
    return true;
  }
  return strHas(string, char, i+1);

}

module.exports = strHas;
