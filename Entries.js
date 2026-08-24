/* 

The entries() method in JavaScript returns an iterator with [index, value] pairs from an array, making it the cleanest way to get both the index and the element when looping with for...of. It doesn’t modify the original array and works across all modern browsers.

🔑 How entries() Works

Syntax:

array.entries()

Return value: An iterator object that yields [index, value] pairs.

Use case: Perfect for combining with for...of when you need both index and element

Method	            Returns	                      Best Use Case
====================================================================
entries()	      [index, value] pairs	       When you need both index and value
keys()	              Indexes only	           When you only need positions
values()	         Values only	           When you only need elements



*/

const fruits = ["apple", "banana", "cherry"];

for (const [index, fruit] of fruits.entries()) {
  console.log(index, fruit);
}

console.log("\n");

const arr = [,"a"]; //sparse array
for(const entry of arr.entries())
{
    console.log(entry);
    
}

console.log("\n");

const colors = ["red","green","blue"];
const iterator = colors.entries();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);


