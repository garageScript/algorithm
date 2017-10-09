const Max3=(x,y,z)=>{
  if(z>y && z>x){
    return z;
  }e
  else if(y>x && y>z){
    return y;
  }
  else {
    return x;
  }
}
module.exports = Max3;
