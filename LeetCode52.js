/* 

2133. Check if Every Row and Column Contains All Numbers

An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive).

Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false.

 

Example 1:

| 1 | 2 | 3 |
| 3 | 1 | 2 |
| 2 | 3 | 1 |

Input: matrix = [[1,2,3],[3,1,2],[2,3,1]]
Output: true
Explanation: In this case, n = 3, and every row and column contains the numbers 1, 2, and 3.
Hence, we return true.
Example 2:


Input: matrix = [[1,1,1],[1,2,3],[1,2,3]]
Output: false
Explanation: In this case, n = 3, but the first row and the first column do not contain the numbers 2 or 3.
Hence, we return false.
 

*/


var checkValid = function(matrix) {
    const n = matrix.length;

    // Check rows
    for (let i = 0; i < n; i++) {
        const row = new Set(matrix[i]);

        if (row.size !== n) {
            return false;
        }

        for (const num of row) {
            if (num < 1 || num > n) {
                return false;
            }
        }
    }

    // Check columns
    for (let j = 0; j < n; j++) {
        const column = new Set();

        for (let i = 0; i < n; i++) {
            column.add(matrix[i][j]);
        }

        if (column.size !== n) {
            return false;
        }

        for (const num of column) {
            if (num < 1 || num > n) {
                return false;
            }
        }
    }

    return true;
};


console.log(checkValid([[1,2,3],[3,1,2],[2,3,1]]))

console.log(checkValid([[1,1,1],[1,2,3],[1,2,3]]))

 let m = [[1,1,1],[1,2,3],[1,2,3]];

 // for(let i=0;i<m.length;i++)
// {
//  console.log(m[i]);
// }

// for(let i=0;i<m.length;i++)
// {
//     for(let j=0;j<m.length;j++)
//     {
//        console.log(m[i][j]);
//     }
 
// }



/* 

1) new Set(matrix[i])
const row = new Set(matrix[i]);
This takes each element of the array and puts it into the Set.
So:
[1, 2, 3]
   ↓
Set {1, 2, 3}


2) If you do:

const row = new Set();
row.add(matrix[i]);

You're adding the entire array as one element.

So:

matrix[i] = [1, 2, 3]

        ↓

Set {
    [1, 2, 3]
}


*/

/* 

Sure. This condition is checking whether a number is outside the allowed range.

The problem says that for an n × n matrix, every row and column must contain numbers from:

1 to n

1) num < 1
This asks:
Is num smaller than 1?
For example:
num = 0

Then:
0 < 1  // true
So we return false.
0 isn't allowed because valid numbers start at 1.

2) num > n
This asks:
Is num greater than n?
Suppose:
n = 3;
num = 4;

Then:
4 > 3  // true
So we return false.
4 isn't allowed because the maximum valid number is 3.


*/