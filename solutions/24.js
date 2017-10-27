const compare2 = (arr1, arr2, i=0, j=0)=>{
  if(i > arr1.length && j > arr2.length){
    return;
  }
  if(arr1[i] != arr2[j]){
    return false;
  }else{
    return true;
  }
  return compare2(arr1,arr2, equal, i+1, j+1);
}
module.exports = compare2;
