/* 
How bracket notation works
Ans = Objects in JavaScript are collections of key–value pairs.
You can access properties in two ways:
1) Dot notation: obj.key
2) Bracket notation: obj["key"]


Bracket notation is especially useful when:

The property name is stored in a variable.

The property name is not a valid identifier (e.g., contains spaces or starts with a number).


Here, obj[key] means:

Look at the variable key (which holds "name")

Use that as the property name in obj.

So obj[] by itself is invalid — you need something inside the brackets, like obj[arr[i]] or obj["someKey"].


Think of obj[] as saying “I want to access a property of obj using a dynamic key,” but without providing the key, 
JavaScript doesn’t know what property you mean.


*/


let obj = {};
let key = "name";

// Using bracket notation
obj[key] = "Abhishek";

console.log(obj); // { name: "Abhishek" }





