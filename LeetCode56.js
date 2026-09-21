/* 

Primary diagonal:

2
   3
      2
         2

Secondary diagonal:

         1
      1
   5
4

All diagonal elements are non-zero ✅

Everything else is zero ✅

Therefore:

true

The most important part to remember
*************************************
For a square matrix:

// Primary diagonal
i === j

// Secondary diagonal
i + j === n - 1

// Either diagonal
i === j || i + j === n - 1


*/


/* 

2319. Check if Matrix Is X-Matrix


A square matrix is said to be an X-Matrix if both of the following conditions hold:

All the elements in the diagonals of the matrix are non-zero.
All other elements are 0.
Given a 2D integer array grid of size n x n representing a square matrix, return true if grid is an X-Matrix. Otherwise, return false.

Input: grid = [[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]]
Output: true
Explanation: Refer to the diagram above. 
An X-Matrix should have the green elements (diagonals) be non-zero and the red elements be 0.
Thus, grid is an X-Matrix.


Input: grid = [[5,7,0],[0,3,1],[0,5,0]]
Output: false
Explanation: Refer to the diagram above.
An X-Matrix should have the green elements (diagonals) be non-zero and the red elements be 0.
Thus, grid is not an X-Matrix.

*/





var checkXMatrix = function (grid) {
    const n = grid.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j || i + j === n - 1) {
                if (grid[i][j] === 0) {
                    return false;
                }
            }
            else {
                if (grid[i][j] !== 0) {
                    return false;
                }
            }
        }
    }
    return true;
};

const m = [
    [2,0,0,1],
    [0,3,1,0],
    [0,5,2,0],
    [4,0,0,2]
]

console.log(checkXMatrix(m));

const m1 = [
    [5,7,0],
    [0,3,1],
    [0,5,0]
];

console.log(checkXMatrix(m1));





