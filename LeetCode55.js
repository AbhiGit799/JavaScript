/* 

ODD MATRIX & EVEN MATRIX
*************************

Odd-sized matrix
*****************
If the number of rows/columns is an odd number:

1 × 1
3 × 3
5 × 5
7 × 7

For example, a 3 × 3 matrix:

It has one exact center:

1  2  3
4 [5] 6
7  8  9


Even-sized matrix
*****************
If the number of rows/columns is an even number:

2 × 2
4 × 4
6 × 6
8 × 8

For example, a 4 × 4 matrix:

There is no single center element.

The middle is actually between these four elements:

1   2   3   4
5  [6] [7]  8
9  [10][11] 12
13 14  15  16

Easy rule to remember
**********************
n % 2 === 1  → Odd → has one center
n % 2 === 0  → Even → no single center


For this LeetCode problem, that's why we write:
********************************************
if (n % 2 === 1) {
    // center exists
}

And then find it using:
**********************
const center = Math.floor(n / 2);

Example
********
For a 5 × 5 matrix

Indexes are:

        0   1   2   3   4
      ┌───────────────────
0     │
1     │
2     │        CENTER
3     │
4     │

The center index is:

Math.floor(5 / 2)

= 2

Therefore:

mat[2][2]

is the center.

*/

/* 

1572. Matrix Diagonal Sum

Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

*/



var diagonalSum = function (mat) {
    const n = mat.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum = sum + mat[i][i];
        sum = sum + mat[i][n - 1 - i];
    }

    if (n % 2 === 1) {
        sum = sum - mat[Math.floor(n / 2)][Math.floor(n / 2)];
    }
    return sum;
};

var mat = [[1,2,3],
           [4,5,6],
           [7,8,9]
      ]

console.log(diagonalSum(mat));

var mat1 = [
              [1,1,1,1],
              [1,1,1,1],
              [1,1,1,1],
              [1,1,1,1]
           ]

console.log(diagonalSum(mat1));











