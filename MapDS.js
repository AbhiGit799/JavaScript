console.log("Map Datastructure");

const userData = new Map();

userData.set("name", "Anil Singh");
userData.set("age", 29);
userData.set("email", "anil12@gmail.com");
userData.set(1, "this is a number");
userData.set(true, "this is a boolena");

console.log(userData);

console.log("\n");

// console.log(userData.get(1));

// console.log(userData);

// userData.delete(1);

// console.log(userData);

// userData.clear()

// console.log(userData);

userData.forEach((item) => {
  console.log(item);
});

/* 
🗂️ What is a Map?
A Map is a built‑in object in JavaScript that lets you store key–value pairs.
Unlike plain objects ({}), a Map:
Allows any type of key (objects, functions, primitives).
Maintains the insertion order of keys.
Has a size property to quickly check how many entries exist.
Provides useful built‑in methods for manipulation.

📘 Basic Usage
===============
// Create a new Map
const userData = new Map();

// Add key-value pairs
userData.set("name", "Arjun");
userData.set("age", 25);
userData.set("isAdmin", true);

// Retrieve values
console.log(userData.get("name")); // "Arjun"

// Check existence
console.log(userData.has("age")); // true

// Delete a key
userData.delete("isAdmin");

// Size of Map
console.log(userData.size); // 2




🔑 Key Methods of Map
=======================
Method		Description
-------------------------
set()		Adds or updates a key–value pair
get()		Retrieves the value for a given key
has()		Checks if a key exists
delete()	Removes a key–value pair
clear()		Removes all entries
size		Returns number of entries

🚀 When to Use Map
When keys are not just strings (e.g., objects as keys).
When you need frequent additions/removals.
When insertion order matters.
When you want built‑in iteration and size tracking.

🔄 Iterating Over a Map
=========================
const userData = new Map([
  ["name", "Arjun"],
  ["age", 25],
  ["isAdmin", true]
]);

// Using for...of
for (const [key, value] of userData) {
  console.log(`${key}: ${value}`);
}

// Using forEach
userData.forEach((value, key) => {
  console.log(`${key} => ${value}`);
});

👉 Output:
===========
name: Arjun
age: 25
isAdmin: true


⚖️ Map vs Object
==================
Feature	         Map	         	         	         	         	 Object
Key types	    Any type (objects, functions, primitives)		         Strings & Symbols only
Order	        Maintains insertion order		         	             No guaranteed order
Size	        map.size property		         	         	         Must calculate manually (Object.keys(obj).length)
Iteration	    Easy with for...of or forEach		         	         Requires Object.keys/values/entries



*/
