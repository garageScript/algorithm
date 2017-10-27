const filterObj = (obj, func)=>{
  return func(Object.keys(obj), Object.values(obj));
}
module.exports = filterObj;
