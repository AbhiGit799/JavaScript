/*

2623. Memoize

Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.


Example 1:

Input:
fnName = "sum"
actions = ["call","call","getCallCount","call","getCallCount"]
values = [[2,2],[2,2],[],[1,2],[]]
Output: [4,4,1,3,2]
Explanation:
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// "getCallCount" - total call count: 1
memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// "getCallCount" - total call count: 2

*/


function memoize(fn) {
    const cache = new Map();

    return function(...args) {
       
        const data = JSON.stringify(args);
       
        if(cache.has(data)){
            return cache.get(data);
        }
        
            const result = fn(...args);
            cache.set(data,result);
            return result;
        
       
    }
}

function sum(a, b) {
    console.log("Computing..."); // This log shows when actual work is done
    return a + b;
}

const ans = memoize(sum);

const arr = [[2,2],[2,2],[],[1,2],[]];



for(let i=0;i<arr.length;i++){
    console.log(ans(...arr[i]));
}

console.log("\n");

console.log(ans(3,3));
console.log(ans(3,3));
console.log(ans(3,3));















