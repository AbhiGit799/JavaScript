/* 
70. Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

*/


var climbStairs = function (n) {
    let dp = new Array(n + 1);

    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

console.log(climbStairs(5));

/*

Let's dry run with:

n = 5
Step 1: Create the array
let dp = new Array(n + 1);

Since n = 5:

let dp = new Array(6);

Why 6?

Because we want indexes:

0  1  2  3  4  5

Initially:

index:  0    1    2    3    4    5
       [ ?    ?    ?    ?    ?    ? ]
Step 2: Set base cases
dp[1] = 1;
dp[2] = 2;

Now:

index:  0    1    2    3    4    5
       [ ?    1    2    ?    ?    ? ]
            ↑    ↑
          stair stair
            1    2

We already know:

Stair 1 → 1 way
Stair 2 → 2 ways
Step 3: Start the loop
for (let i = 3; i <= n; i++)

Since n = 5:

i = 3
i = 4
i = 5

We start at 3 because dp[1] and dp[2] are already calculated.

Iteration 1: i = 3

Execute:

dp[i] = dp[i - 1] + dp[i - 2];

Put i = 3:

dp[3] = dp[2] + dp[1]

We know:

dp[2] = 2
dp[1] = 1

Therefore:

dp[3] = 2 + 1
      = 3

Array becomes:

index:  0    1    2    3    4    5
       [ ?    1    2    3    ?    ? ]
                       ↑
                    just calculated

So:

Stair 3 → 3 ways
Iteration 2: i = 4

Again:

dp[4] = dp[3] + dp[2];

We know:

dp[3] = 3
dp[2] = 2

Therefore:

dp[4] = 3 + 2
      = 5

Array becomes:

index:  0    1    2    3    4    5
       [ ?    1    2    3    5    ? ]
                            ↑
                         calculated

So:

Stair 4 → 5 ways
Iteration 3: i = 5

Again:

dp[5] = dp[4] + dp[3];

We know:

dp[4] = 5
dp[3] = 3

Therefore:

dp[5] = 5 + 3
      = 8

Array becomes:

index:  0    1    2    3    4    5
       [ ?    1    2    3    5    8 ]
                                  ↑
                               answer
Step 4: Return the answer

The code says:

return dp[n];

Since:

n = 5

we return:

return dp[5];

And:

dp[5] = 8

Therefore:

Answer = 8

Complete dry run
=================
Step	         i	           Calculation	                 Array
Initial	         —	         dp[1]=1, dp[2]=2	            [?, 1, 2, ?, ?, ?]
1	             3	         dp[3]=dp[2]+dp[1]=2+1=3	    [?, 1, 2, 3, ?, ?]
2	             4	         dp[4]=dp[3]+dp[2]=3+2=5	    [?, 1, 2, 3, 5, ?]
3	             5	         dp[5]=dp[4]+dp[3]=5+3=8	    [?, 1, 2, 3, 5, 8]

The important pattern is:

dp[1] = 1
dp[2] = 2

dp[3] = dp[2] + dp[1] = 3
dp[4] = dp[3] + dp[2] = 5
dp[5] = dp[4] + dp[3] = 8

So the array looks like:

        1   2   3   4   5
        ↓   ↓   ↓   ↓   ↓
dp =   [1,  2,  3,  5,  8]


*/
