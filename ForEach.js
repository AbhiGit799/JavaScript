const a = [1,2,3,4,5,6,7,8,9,10];

/* 

In JavaScript, the forEach() method is used to loop through elements of an array and 
execute a callback function for each element. It’s a clean alternative to 
traditional for loops when you just want to perform an action on each item.

Key points:
***********
Callback function: Runs once for each element.

Element access: You can use the current element, its index, and the entire array inside the callback.

No return value: Unlike map(), forEach() doesn’t return a new array—it’s 
purely for side effects like logging or updating.



*/

a.forEach(function(num){
    console.log(num);
})

console.log("\n");


a.forEach((f,i)=>{
    console.log(`Value = ${f}: index = ${i}`);
})


const arr12 = [1,2,3,4,5];

arr12.forEach(function(element) {
  console.log(element);
});




