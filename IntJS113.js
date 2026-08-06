// Find Missing Number in Array | JavaScript Interview Question #dsa #interview #coding

const arr = [1,2,,4,5];

const arrlen = arr.length;

console.log(arrlen);

let total = arrlen*(arrlen+1)/2

let sum = arr.reduce((a,b)=>a+b,0)

console.log(sum);


console.log(total-sum);

/* 

The issue in your code is that your reduce callback doesn’t return anything. In JavaScript, if you use curly braces {} in an arrow function, you must explicitly use return. Otherwise, the function returns undefined each time, and the accumulator never updates.


let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce((a, b) => {
  return a + b;
}, 0);

console.log(sum); // Output: 15


⚡ Key Notes
With {} → you must use return.

Without {} → the arrow function implicitly returns the expression.

Always provide an initial value (0 here) to avoid errors with empty arrays.


*/

