/*

In JavaScript, includes() is a built-in method used to check if a 
string or array contains a specific value, returning true or false. 
It is case-sensitive and was introduced in ES6, 
making it a more readable alternative to indexOf().

*/

const sentence = "The quick brown fox";
console.log(sentence.includes("fox")); // true
console.log(sentence.includes("Fox")); // false

console.log("\n");

const numbers = [1,2,3,4,5];
console.log(numbers.includes(3)); // true
console.log(numbers.includes(5)); // true

console.log("\n");

console.log(sentence.includes("")); // true

console.log("\n");

"Blue Whale".toLowerCase().includes("blue"); // true




