

/*
The reduce() method executes a reducer function(that you provide)
on each element of the array, resulting in single output value.
 
-> The reduce() method runs a function on each array element to produce a single value.

->The reduce() method works from left-to-right in the array.

->The reduce() method does not reduce the original array.





*/

 //here accum is similar to sum=0;




let arr=[18,2,3,4,5,6,7,8,9];

let sum=arr.reduce((accum,curr,index,array)=>{

return accum+curr;

},0)


console.log(sum);































