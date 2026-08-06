// Rotate Array by K Positions | JS Interview Question #dsa #interview #coding

const arr = [1, 2, 3, 4, 5];
const k = 1;
const result = arr.slice(k).concat(arr.slice(0, k));
console.log(result);

console.log("\n");

// String Examples
const text = "Hello World";
console.log(text.slice(0, 5));
console.log(text.slice(6));

console.log("\n");

// Array Examples
const fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];
// Copy from index 1 to 3 (end not included)
console.log(fruits.slice(1, 4));

console.log("\n");

// Copy from index 2 till end
console.log(fruits.slice(2));

/* 
In JavaScript, slice() is a method used to create a shallow copy of a portion of an array or 
string without modifying the original. It takes a start index and an optional end index, 
returning elements from start up to but not including end.

🔑 Key Points About slice()
=============================
Non-destructive: The original array/string remains unchanged.
Shallow copy: Only references are copied for objects, not deep clones.
Flexible indices:
=> Positive indices count from the start.
=> Negative indices count from the end.

Syntax:
arr.slice(start, end);
str.slice(start, end);


*/
