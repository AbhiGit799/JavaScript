/* 
2624. Snail Traversal

Write code that enhances all arrays such that you can call the snail(rowsCount, colsCount) 
method that transforms the 1D array into a 2D array organised in the pattern known as snail traversal order. 
Invalid input values should output an empty array. If rowsCount * colsCount !== nums.length, the input is considered invalid.

Snail traversal order starts at the top left cell with the first value of the current array. 
It then moves through the entire first column from top to bottom, 
followed by moving to the next column on the right and traversing it from bottom to top. 
This pattern continues, alternating the direction of traversal with each column, 
until the entire current array is covered. 
For example, when given the input array [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15] 
with rowsCount = 5 and colsCount = 4, 
the desired output matrix is shown below. Note that iterating the matrix 
following the arrows corresponds to the order of numbers in the original array.

 
Example 1:

Input: 
nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
rowsCount = 5
colsCount = 4
Output: 
[
 [19,17,16,15],
 [10,1,14,4],
 [3,2,12,20],
 [7,5,18,11],
 [9,8,6,13]
]

*/


Array.prototype.snail = function(rowsCount, colsCount) {
    const nums = this;

    // ✅ Check for invalid input
    if (rowsCount * colsCount !== nums.length) {
        return [];
    }

    // Create empty matrix
    const matrix = Array.from({ length: rowsCount }, () => Array(colsCount).fill(null));

    let index = 0;

    // Fill column by column
    for (let col = 0; col < colsCount; col++) {
        if (col % 2 === 0) {
            // Even column → top to bottom
            for (let row = 0; row < rowsCount; row++) {
                matrix[row][col] = nums[index++];
            }
        } else {
            // Odd column → bottom to top
            for (let row = rowsCount - 1; row >= 0; row--) {
                matrix[row][col] = nums[index++];
            }
        }
    }

    return matrix;
}

const arr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];

console.log(arr.snail(5, 4));

/*
The Array.from() method is used to create a new array from any iterables like array, objects, and strings.

The Array.from() method returns an array from any object with a length property.

The Array.from() method returns an array from any iterable object.

Return value
It returns a new array from the iterable passed as argument.

*/

let text = "ABCDEFG";
const myArr = Array.from(text);
console.log(myArr);

console.log("\n");

const obj = { a: 10, b: 20, c: 30, d: 40, e: 50 };
const a1 = Array.from(Object.keys(obj));
console.log(a1);

const a2 = Array.from(Object.values(obj));
console.log(a2);

const a3 = Array.from(Object.entries(obj));
console.log(a3);
