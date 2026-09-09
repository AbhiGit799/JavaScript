/* 
2631. Group By

Write code that enhances all arrays such that you can call the array.groupBy(fn) 
method on any array and it will return a grouped version of the array.

A grouped array is an object where each key is the output of fn(arr[i]) and 
each value is an array containing all items in the original array which generate that key.

The provided callback fn will accept an item in the array and return a string key.
The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.
Please solve it without lodash's _.groupBy function.

 
Example 1:

Input: 
array = [
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
], 
fn = function (item) { 
  return item.id; 
}
Output: 
{ 
  "1": [{"id": "1"}, {"id": "1"}],   
  "2": [{"id": "2"}] 
}
Explanation:
Output is from array.groupBy(fn).
The selector function gets the "id" out of each item in the array.
There are two objects with an "id" of 1. Both of those objects are put in the first array.
There is one object with an "id" of 2. That object is put in the second array.
Example 2:

Input: 
array = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9]
]
fn = function (list) { 
  return String(list[0]); 
}
Output: 
{ 
  "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] 
}
Explanation:
The array can be of any type. In this case, the selector function defines the key as being the first element in the array. 
All the arrays have 1 as their first element so they are grouped together.
{
  "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
}

*/

Array.prototype.groupBy = function (fn) {
  const result = {};

  for (const item of this) {
    const key = fn(item);

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(item);
  }

  return result;
};

const animals = ["cat", "dog", "lion", "tiger", "wolf"];

const grouped = animals.groupBy((animal) => animal.length);

console.log(grouped);

// ========================================

console.log("\n");

const result = { id: 101 };
const key = "animals";

// Step 1: create an empty array at result["animals"]
result[key] = [];

// Step 2: push values into that array
result[key].push("cat");
result[key].push("dog");

result.name = "ABC";
result.city = "Pune";

console.log(result);

/* 

🚀 Key Insight
=================
Objects themselves don’t have .push().
But if an object property is an array, you can call .push() on that property.
That’s exactly what happens in groupBy: each key stores an array of items, and .push() adds new items into that array.

👉 So the line result[key].push(item); means:
“Take the array stored at this key in the object, and add the current item to it.”


*/
