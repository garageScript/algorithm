const Max3=(x,y,z)=>{
  if(z>y && z>x){
    return z;
  }
   if(y>x && y>z){
    return y;
  }
    return x;
}
module.exports = Max3;
