/* 

746. Min Cost Climbing Stairs

You are given an integer array cost where cost[i] is the cost of ith step on a staircase.

Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the staircase, which is the position just past the last step (index cost.length).

 

Example 1:

Input: cost = [10,15,20]
Output: 15
Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.
Example 2:

Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.
 

Constraints:

2 <= cost.length <= 1000
0 <= cost[i] <= 999

*/



var minCostClimbingStairs = function (cost) {
    
    let n = cost.length;
    let dp = new Array(n + 1);

    dp[0] = 0;
    dp[1] = 0;

    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(
            dp[i - 1] + cost[i - 1],
            dp[i - 2] + cost[i - 2]
        );

    }

    return dp[n];
};

console.log(minCostClimbingStairs([10,15,20]));




/* 

cost is the cost of each stair, but dp does NOT stand for the number of steps.

dp usually means Dynamic Programming.

In this problem, we use dp as an array to store:

the minimum cost needed to reach each position.



Think of it like this
cost = [10, 15, 20]

means:

Stair       0     1     2     TOP
Cost       10    15    20



dp = [...]

stores the cheapest cost to reach each position.

So:

Position     0     1     2     TOP
             ↓     ↓     ↓      ↓
dp           0     0    10     15


asy way to remember
Array	                Meaning
cost[i]               	Cost of stepping on position i
dp[i]	                Minimum cost to reach position i
i	                    Position/stair number






*/

/*

We use n + 1 because we need one extra position for the TOP.

Example

Suppose:

cost = [10, 15, 20]

Then:

n = cost.length; // 3

There are 3 stairs:

Position:    0       1       2       3
             ↓       ↓       ↓       ↓
           [10]    [15]    [20]     TOP

Notice that the TOP is position 3.

So our dp needs:

dp[0]
dp[1]
dp[2]
dp[3]  ← TOP

That's 4 positions.

Since n = 3:

new Array(n + 1)

becomes:

new Array(4)

Why can't we use just n?

If we do:

let dp = new Array(n);

then with n = 3, we only have:

dp[0]
dp[1]
dp[2]

There is no:

dp[3]

But we need dp[3] to represent the TOP.

That's why:

let dp = new Array(n + 1);
Another important point

The cost array only contains stairs:

cost[0] = 10
cost[1] = 15
cost[2] = 20

There is no:

cost[3]

because the TOP doesn't have a cost.

But our dp represents positions including the TOP:

dp[0]
dp[1]
dp[2]
dp[3] ← TOP



So:

cost has n elements, but dp has n + 1 elements because dp also needs to represent the TOP.

*/












