/*
Arrow Function

Syntax 
let hello=()=>console.log("Hello");

*/

let welcome = function (name) {
  return `Hello And Welcome ${name}`;
};
console.log(welcome("Ajay"));

let thankyou = (name) => {
  return `Thank you ${name}`;
};
console.log(thankyou("Raja"));

//Below is An example of single line function.

let wish = (name) => `Good Morning ${name}`;

console.log(wish("Vijay"));

let wishes = (name) => `Good Afternoon ${name}`;

console.log(wishes("Jay"));
