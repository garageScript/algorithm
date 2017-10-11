const callX2=(num,func,i=0)=>{
    if(i<num){
       func();
       callX2(num,func,i+1);
     }
   }
 
 module.exports = callX2;
