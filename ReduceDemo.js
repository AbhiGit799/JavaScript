/*

In JavaScript, reduce() is an array method that processes each element 
and combines them into a single value using a callback function. 
It’s commonly used for tasks like summing numbers, 
finding maximum values, or transforming arrays into objects.


Syntax
******
array.reduce(callbackFn, initialValue)


Parameters:

accumulator → stores the running result.

currentValue → the current element being processed.

initialValue → optional starting value for the accumulator.



⚡ Key Takeaways
reduce() transforms an array into a single value.

Use it for sum calculations, totals, or finding maximum.

Always provide an initial value to avoid unexpected errors with empty arrays.

*/


//Sum of numbers
const numbers = [1,2,3,4,5]
const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue
},0)
console.log(sum);


// separate function for multiplication

const prod = numbers.reduce(multiply,1)
function multiply(acc, curr) {
  return acc * curr;
}
console.log(prod);

// 📊 Another Example: Finding Maximum Value
const arr = [10, 25, 8, 99, 42];
const max = arr.reduce((acc,currentValue)=>{
    return currentValue>acc?currentValue:acc;
})
console.log(max);

// 👉 reduce() can replace Math.max() when working with arrays.

const cartItems = [
  { name: 'Laptop', price: 999.99 },
  { name: 'Mouse', price: 25.5 },
  { name: 'Keyboard', price: 75.0 }
];

const totalPrice = cartItems.reduce((total,item)=>{
    return total+item.price;
},0)

console.log(totalPrice);
console.log(`Total cart value ${totalPrice}`);
