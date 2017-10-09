const Max3=(x,y,z)=>{
  if(z>y && z>x){
    return z;
  }else if (y>x && y<z){
    return y;
  }
  else if(y>x && y>z){
    return y;
  }
  else if (x>y &&x>z){
      return x;
  }
}
module.exports = Max3;
