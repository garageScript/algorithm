const Max3=(x,y,z)=>{
  if(z>y && z>x){
    return z;
  }
   if(y>x && y>z){
    return y;
  }
    return x;
}
console.log(Max3(1,3,5));
console.log(Max3(5,3,1));
console.log(Max3(3,5,1));
//module.exports = Max3;
