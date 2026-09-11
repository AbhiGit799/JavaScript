/* 
2722. Join Two Arrays by ID

Given two arrays arr1 and arr2, return a new array joinedArray. 
All the objects in each of the two inputs arrays will contain an id field that has an integer value. 

joinedArray is an array formed by merging arr1 and arr2 based on their id key. 
The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

If two objects share an id, their properties should be merged into a single object:

If a key only exists in one object, that single key-value pair should be included in the object.
If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
 

Example 1:

Input: 
arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
], 
arr2 = [
    {"id": 3, "x": 5}
]
Output: 
[
    {"id": 1, "x": 1},
    {"id": 2, "x": 9},
    {"id": 3, "x": 5}
]
Explanation: There are no duplicate ids so arr1 is simply concatenated with arr2.
Example 2:

Input: 
arr1 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
], 
arr2 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]
Output: 
[
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]
Explanation: The two objects with id=1 and id=3 are included in the result array without modifiction. 
The two objects with id=2 are merged together. The keys from arr2 override the values in arr1.
Example 3:

Input: 
arr1 = [
    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
]
arr2 = [
    {"id": 1, "b": {"c": 84}, "v": [1, 3]}
]
Output: [
    {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
]
Explanation: The two objects with id=1 are merged together. For the keys "b" and "v" the values from arr2 are used. 
Since the key "y" only exists in arr1, that value is taken form arr1.



*/

var join = function (arr1, arr2) {
  const map = new Map();

  for (const obj of arr1) {
    map.set(obj.id, { ...obj });
  }

  for (const obj of arr2) {
    if (map.has(obj.id)) {
      map.set(obj.id, { ...map.get(obj.id), ...obj });
    } else {
      map.set(obj.id, { ...obj });
    }
  }

  return Array.from(map.values()).sort((a, b) => a.id - b.id);
};

const arr1 = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob" }
];

const arr2 = [
  { id: 2, age: 30 },
  { id: 3, name: "Charlie" }
];

console.log(join(arr1, arr2));


/*

🧩 What { ...obj } Means
... is called the spread operator.
When used inside an object literal { ...obj }, it copies all key‑value pairs from obj into a new object.
This is a quick way to clone or merge objects.

✅ Example 1: Cloning an Object
const person = { name: "Alice", age: 25 };
const copy = { ...person };
console.log(copy); 
// { name: "Alice", age: 25 }

Here, copy is a new object with the same properties as person.
If you change copy.age, it won’t affect person.

✅ Example 2: Merging Objects
const obj1 = { id: 1, name: "Bob" };
const obj2 = { age: 30 };
const merged = { ...obj1, ...obj2 };
console.log(merged);
// { id: 1, name: "Bob", age: 30 }

First, all properties from obj1 are copied.
Then, all properties from obj2 are copied.
If both objects have the same key, the later one overrides the earlier one.

✅ Example 3: Overriding Values
const obj1 = { id: 2, name: "Charlie", age: 20 };
const obj2 = { age: 25 };
const result = { ...obj1, ...obj2 };
console.log(result);
// { id: 2, name: "Charlie", age: 25 }

Notice how age: 25 from obj2 overrides age: 20 from obj1.

🔑 Key Points
{ ...obj } → makes a shallow copy of obj.
Order matters: later spreads override earlier ones.
Useful for merging objects or updating properties without mutating the original.

*/


/* 
🧩 What’s Happening
======================
1) map.get(obj.id) → retrieves the object already stored in the Map for that id.

2) { ...map.get(obj.id) } → makes a shallow copy of that object.

3) { ...map.get(obj.id), ...obj } → merges the two objects:

First, all properties from map.get(obj.id) are copied.

Then, all properties from obj are copied.

If both objects have the same key, the value from obj overrides the one from map.get(obj.id).


*/

