// Nested array to Flatten Array

const arr = [1,[2,[3,4]],5];

function flatten(a,res=[])
{
    for(let i of a)
    {
        Array.isArray(i)?
        flatten(i,res)
        :
        res.push(i)
    }
    return res;
}

console.log(flatten(arr));
// [ 1, 2, 3, 4, 5 ]

/*

In JavaScript, “recurrence” usually refers to recursion — a technique where a function calls itself until a base condition is met. It’s widely used for problems like factorials, Fibonacci sequences, and traversing nested structures.

⚡ Benefits of Recursion
*************************
Tree Traversal: Ideal for hierarchical structures like DOM or JSON.
Divide and Conquer: Used in algorithms like Merge Sort and Quick Sort.
Backtracking: Helpful in exploring all possible solutions (e.g., maze solving).


🚨 Risks & Trade-offs
**********************
Performance: Recursive calls can be slower than loops due to stack overhead.
Stack Overflow: Missing base cases cause infinite recursion.
Readability vs Efficiency: Recursion is elegant but sometimes less efficient than iterative solutions.



*/

console.log("\n");

function FArray(arr)
{
    let stack = [...arr];
    let result = [];
    while(stack.length)
    {
        let current = stack.pop();
        if(Array.isArray(current))
        {
          stack.push(...current)
        }else{
            result.unshift(current)
        }
    }
    return result;
}

console.log(FArray([1,[2,[4,5]]]));

// flat() method
/*
🔑 Using Array.prototype.flat()
Default depth: flat() flattens one level deep.

Custom depth: Pass a number to specify how many levels to flatten.

Full flattening: Use Infinity to flatten all levels.
*/

console.log("\n");


const nested = [1,[2,[3,[4,5]]]]

console.log(nested.flat());
console.log(nested.flat(2));
console.log(nested.flat(Infinity));

/*

[ 1, 2, [ 3, [ 4, 5 ] ] ]
[ 1, 2, 3, [ 4, 5 ] ]
[ 1, 2, 3, 4, 5 ]

*/


