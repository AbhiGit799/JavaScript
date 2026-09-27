/* 
509. Fibonacci Number

The Fibonacci numbers, commonly denoted F(n) form a sequence, 
called the Fibonacci sequence, such that each number is the sum of the two preceding ones, 
starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

 

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.


let dp = new Array(n + 1);

is used to create an array where we will store the Fibonacci results.


*/


var fib = function (n) {
    let dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}


console.log(fib(5));

/* 

Sure. This line:

let dp = new Array(n + 1);

is used to create an array where we will store the Fibonacci results.

Let's break it down.

Suppose n = 5

We need to calculate:

F(0)
F(1)
F(2)
F(3)
F(4)
F(5)

That's 6 values.

The indexes are:

0   1   2   3   4   5

So we need an array of size 6.

That's why:

new Array(n + 1)

becomes:

new Array(5 + 1)

which is:

new Array(6)

The array looks conceptually like:

index:  0    1    2    3    4    5
       [ ?    ?    ?    ?    ?    ? ]

Then we fill it:

dp[0] = 0;
dp[1] = 1;

Then calculate:

dp[2] = dp[1] + dp[0]; // 1
dp[3] = dp[2] + dp[1]; // 2
dp[4] = dp[3] + dp[2]; // 3
dp[5] = dp[4] + dp[3]; // 5

Final array:

index:  0   1   2   3   4   5
dp:    [0,  1,  1,  2,  3,  5]


Why not new Array(n)?
**********************
If:

new Array(5)

you get indexes:

0   1   2   3   4

There is no index 5.

But we need dp[5].

Therefore:

new Array(n + 1)

gives us indexes:

0 through n
Simple way to remember

If your DP uses:

dp[0] ... dp[n]

then you need:

new Array(n + 1)

because array size and maximum index are different:

Array size = n + 1
Maximum index = n

For Fibonacci n = 5:

size = 6
indexes = 0,1,2,3,4,5

That's why we use n + 1.


*/










