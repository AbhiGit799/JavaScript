console.log([1, 2] + [3, 4]);

// "1 2" + "3 4"

console.log((1, 2, 3));

/* 
In JavaScript, "coerces" refers to type coercion, which is the automatic conversion of a value from one data type to another. 
This happens implicitly when you apply operators or operations to mismatched data types. JavaScript will forcefully convert 
one of the values so the operation can execute without throwing an error

Line 1: console.log([1,2] + [3,4]);

In JavaScript, the + operator does not concatenate arrays. Instead, 
when used with non-primitive objects (like arrays), it coerces them into strings.

[1,2] becomes "1,2" and [3,4] becomes "3,4".

Then "1,2" + "3,4" results in "1,23,4".

So the output is:

"1,23,4"

Line 2: console.log((1,2,3));

This uses the comma operator. In JavaScript, the comma operator evaluates each operand from 
left to right and returns the value of the last one

(1,2,3) means:

Evaluate 1 (discard result),

Evaluate 2 (discard result),

Evaluate 3 (return result).

So the output is:
3

 comma operator returning only the last value.

  JS — arrays coerced to strings

  [1,2].concat([3,4]) or [... [1,2], ... [3,4]].

*/
