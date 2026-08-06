/*

In JavaScript, unshift() adds one or more elements to the beginning of an array and returns the new length of that array. It modifies the original array in place, shifting existing elements to higher indexes. Think of it as the opposite of push(), which adds elements to the end.

🔑 Key Details About unshift()
Definition: Inserts elements at the start of an array.

Return Value: The new length of the array (not the array itself).

Mutation: Directly changes the original array.

Order: Multiple elements are added in the order they’re passed.

Complexity: O(n), since all existing elements must be re-indexed.


⚠️ Performance Considerations
Large arrays: Using unshift() repeatedly on big arrays can be slow because every element must be shifted.


*/

const arr = [2,3];
arr.unshift(1);
console.log(arr);  //  [ 1, 2, 3 ]
console.log(arr.length);  // 3 


const fruits = ['banana','apple'];
fruits.unshift('orange','grape');
console.log(fruits); // [ 'orange', 'grape', 'banana', 'apple' ]



const mixed = [true, {name: 'John'}];
mixed.unshift(42, 'hello');
console.log(mixed); // [42, 'hello', true, {name: 'John'}]





