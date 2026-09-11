// In JavaScript, Boolean() is a built-in global function (and a wrapper object) used to convert any value into a boolean (true or false).

/* 
Given an object or array obj, return a compact object.

A compact object is the same as the original object, except with keys containing falsy values removed. 
This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. 
A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.


Example 1:

Input: obj = [null, 0, false, 1]
Output: [1]
Explanation: All falsy values have been removed from the array.
Example 2:

Input: obj = {"a": null, "b": [false, 1]}
Output: {"b": [1]}
Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.
Example 3:

Input: obj = [null, 0, 5, [0], [false, 16]]
Output: [5, [], [16]]
Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.

*/


const arr = [1,null,false,10,20,NaN,""];
console.log(arr.filter(x=>Boolean(x)));

const s = (x)=>x+2;
const arr1 = [1,2,3];
console.log(arr1.map(s));

