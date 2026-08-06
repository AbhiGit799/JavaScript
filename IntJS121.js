// Remove Element In-Place | JavaScript Interview Question #dsa #interview #coding


const arr = [1,2,3,4];

const remove = 3;

for(let i=0;i<arr.length;i++)
{
    if(arr[i]===remove){
        arr.splice(i,1);
        break;
    }
}

console.log(arr); // [1,2,4]

/* 

In JavaScript, splice() is a powerful array method that lets you add, remove, or replace elements directly in the original array, while returning the removed elements as a new array. 

🔑 Key Details About splice()
==============================
Definition: Modifies an array in place by removing, inserting, or replacing elements.

Return Value: An array containing the removed elements (empty if none removed).

Mutation: Directly changes the original array.

Parameters:
===========
start: Index to begin changes (negative values count from the end).
deleteCount: Number of elements to remove (optional).
item1, item2, …: Elements to insert at start (optional).

✅ Examples
Removing Elements
------------------
const fruits = ['apple', 'banana', 'cherry', 'date'];
const removed = fruits.splice(1, 2);
console.log(fruits);  // ['apple', 'date']
console.log(removed); // ['banana', 'cherry']

Adding Elements
-----------------
const colors = ['red', 'blue'];
colors.splice(1, 0, 'green', 'yellow');
console.log(colors); // ['red', 'green', 'yellow', 'blue']

Replacing Elements
-------------------
const numbers = [1, 2, 3, 4, 5];
const removed = numbers.splice(2, 2, 30, 40);
console.log(numbers); // [1, 2, 30, 40, 5]
console.log(removed); // [3, 4]




*/


