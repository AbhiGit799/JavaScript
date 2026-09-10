/*

Different ways of sorting in Javascript.

In JavaScript, there are several ways to sort arrays, depending on what you’re sorting (numbers, strings, objects) and how flexible you want the ordering to be. Let’s break them down:

🔑 Core Method
Array.prototype.sort()  
The built‑in method for sorting arrays. 
By default, it converts elements to strings and sorts them lexicographically (dictionary order).


📊 Sorting Numbers
By default, numbers don’t sort correctly because "10" comes before "2" lexicographically. 
Use a comparator:

📌 Summary Table
Method	Use Case	Example
sort()	Default lexicographic sort	arr.sort()
Numeric comparator	Numbers ascending/descending	arr.sort((a,b)=>a-b)
Object property sort	Sort by key in objects	arr.sort((a,b)=>a.age-b.age)
localeCompare()	Language-aware string sort	arr.sort((a,b)=>a.localeCompare(b))
reverse()	Flip sorted order	arr.sort().reverse()


*/


const arr = ['banana','apple','cherry'];
console.log(arr.sort())

console.log("\n")

const nums=[10,2,4,-1,1];
console.log(nums.sort((a,b)=>a-b));
console.log(nums.sort((a,b)=>b-a));

console.log("\n")

const users=[
    {name:"ABC",age:25},
    {nam:"Bob",age:20},
    {name:"Charlie",age:16},
    {name:"Tom",age:36}
];


console.log(users.sort((a,b)=>a.age-b.age));








