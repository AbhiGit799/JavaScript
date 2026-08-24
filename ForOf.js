let name = "code step by step";

for (let char of name) {
  console.log(char);

  if (char == "b") {
    break;
  }
}

console.log("\n");

const map = new Map([
  ["name", "Arjun"],
  ["age", 25],
]);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

console.log("\n");

const fruits = ["apple", "banana", "cherry"];

for (const [index, fruit] of fruits.entries()) {
  console.log(`${index}: ${fruit}`);
}

console.log("\n");

const colors = ["red", "green", "blue"];
let i = 0;

for (const color of colors) {
  console.log(`${i}: ${color}`);
  i++;
}



/* 

The for...of loop in JavaScript is used to iterate over iterable objects like arrays, strings, Maps, Sets, and more. It gives you direct access to the values of the iterable, unlike for...in which iterates over property keys.

⚡ Key differences:

for...of → Iterates over values of an iterable.

for...in → Iterates over keys (property names) of an object.

forEach → Array method, doesn’t work on all iterables, and doesn’t support break or continue.


By default, the for...of loop gives you the values of an iterable, but not the index. If you need the index, you can combine for...of with the array’s entries() method, which returns [index, value] pairs.

⚡ Quick takeaway:

Use entries() when you want both index and value cleanly.

Use a manual counter if you prefer simplicity or need custom logic.

*/
