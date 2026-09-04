/* 
2629. Function Composition

Given an array of functions [f1, f2, f3, ..., fn], 

return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

 

Example 1:

Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
Example 2:

Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
Example 3:

Input: functions = [], x = 42
Output: 42
Explanation:
The composition of zero functions is the identity function


*/


/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
};


const functions = [x=>x+1,x=>x*x,x=>x*2];

const composedFunction = compose(functions);

const result = composedFunction(4); // Output: 65


console.log(result); // Output: 65


// Approach 2: Using a for Loop (Slightly Faster)

/* 

var compose = function(functions) {
    return function(x) {
        let result = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    };
};

*/


/* 

functions[i](result);

In that line, two things are happening at the same time: array lookup and function invocation.

JavaScript

Here is a breakdown of what each part does:

1) functions[i] (Array Lookup):
functions is an array containing functions (e.g., [fn1, fn2, fn3]). functions[i] retrieves the function stored at index i.

For example, if functions = [f, g, h] and i = 2, functions[2] gets h

2) (...) (Function Invocation):
The parentheses directly after functions[i] call/execute that retrieved function.

3) (result) (Passing the Argument):
The current value of result is passed into the function as its input argument.

4) result = ... (Updating the Variable):
The return value of functions[i] replaces the old value of result, feeding the new calculated value into the next iteration of the loop.


Step-by-Step Visualization
===========================

Imagine functions = [add1, double] where:

add1 = (x) => x + 1

double = (x) => x * 2

If result = 5 and i = 1:
// 1. functions[1] evaluates to the `double` function
// 2. functions[1](5) becomes double(5)
// 3. double(5) returns 10
// 4. result is updated to 10

result = functions[1](result); // result becomes 10

On the next loop iteration (i = 0):

// 1. functions[0] evaluates to the `add1` function
// 2. functions[0](10) becomes add1(10)
// 3. add1(10) returns 11
// 4. result is updated to 11

result = functions[0](result); // result becomes 11

*/









