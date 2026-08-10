// All Array methods

// console.log([1,2,3,4].at(1)); //2

// console.log([1,2,3,4].pop()); //4

// console.log([1,2,3,4].push(5)); 5

// console.log([1,2,3,4].fill(1));  // [1,1,1,1,1]

// console.log([1,2,3,4].join(';')); // 1;2;3;4

// console.log([1,2,3,4].shift()); //1

 /* 
 In JavaScript, shift() removes the first element of an array, returns that element, and mutates the array by reducing its length by one. If the array is empty, it simply returns undefined.

 */

// console.log([1,2,3,4].reverse()); // [4,3,2,1]

 // console.log([1,2,3,4].unshift(1)); // 5

 /* 
 In JavaScript, unshift() adds one or more elements to the beginning of an array and returns the new length of that array. It mutates the original array by shifting existing elements to higher indexes. Think of it as the opposite of push(), which adds elements to the end.
 */


 // console.log([1,2,3,4].includes(2));  // true

 /* 
 In JavaScript, includes() is a built-in method used to check if a string or array contains a specific value. It returns true if found, otherwise false.
 */


// console.log([1,2,3,4].map(x=>x*2)); // [ 2, 4, 6, 8 ]

/* 
In JavaScript, map() is an array method that creates a new array by applying a callback function to each element of the original array. It does not modify the original array, only returns the transformed one.
*/

// console.log([1,2,3,4].some(x=>x>1)); //true

 /* 
 In JavaScript, some() is an array method that tests whether at least one element in the array passes a condition provided by a callback function. It returns a boolean (true or false).

 🔑 Key Details About some()
Definition: Checks if any element satisfies the condition.

Return Value: true if at least one element passes, otherwise false.

Original Array: Does not change the original array.

Callback Parameters:

element: Current item.

index: Position of the item.

array: The full array being processed.

Short-circuiting: Stops iterating once a match is found.
 
 */


// console.log([1,2,3,4].find(x=>x>2)); // 3

 /* 
In JavaScript, find() is an array method that returns the first element in the array that satisfies a given condition (callback function). If no element matches, it returns undefined.

🔑 Key Details About find()
Definition: Retrieves the first matching element from an array.

Return Value: The element itself, or undefined if none match.

Original Array: Does not modify the array.

Callback Parameters:

element: Current item.

index: Position of the item.

array: The full array being processed.

Short-circuiting: Stops iterating once the first match is found.

*/


// console.log([1,2,3,4].every(x=>x>3)); //false

/* 
In JavaScript, every() is an array method that tests whether all elements in the array pass a condition provided by a callback function. It returns a boolean (true or false).



*/

// console.log([1,2,3,4].filter(x=>x>2)); // [3,4]

 /* 
 In JavaScript, filter() is an array method that creates a new array containing all elements that pass a condition provided by a callback function. If no elements match, it returns an empty array.

🔑 Key Details About filter()
Definition: Selects elements from an array based on a condition.

Return Value: A new array with all matching elements.

Original Array: Unchanged (non-mutating).

Callback Parameters:

element: Current item.

index: Position of the item.

array: The full array being processed.

Empty Result: Returns [] if no elements match.

 */

// console.log([1,2,3,4].findIndex(x=>x>3)); //3

// console.log([1,2,3,4].reduce((acc,num)=>acc+num)); //10




