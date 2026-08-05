//PURE FUNCTION

function pureAdd(a,b){
    return a+b;
}

/* 

Here’s why:

Same input → same output:
If you call pureAdd(2, 3), it will always return 5. No randomness, no dependency on external state.

No side effects:
It doesn’t modify variables outside its scope, doesn’t log to the console, doesn’t change the DOM, and doesn’t alter global state.

Deterministic behavior:
The result depends only on its parameters a and b.


*/

// IMPURE FUNCTION
let n=10;
function impureAdd(a)
{
    return a+n
}

/*

Here’s why:

Depends on external state:
The function uses the variable n declared outside its scope. If n changes, the output changes even though the input a is the same.

Same input → different output:
For example:

The same input 5 produces different results depending on the external variable n.

Side effects risk:
If the function modified n (like n += a), it would directly change external state, which is another hallmark of impurity.

*/


