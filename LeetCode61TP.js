
/* 

Normally, we use a temporary variable:

let temp = a;

a = b;

b = temp;

*/


let a = 10;
let b=20;

[a,b] = [b,a];

console.log(a);
console.log(b);


/* 

3. Now look at your code

[nums[left], nums[right]] = [nums[right], nums[left]];

is equivalent to:

let temp = nums[left];

nums[left] = nums[right];

nums[right] = temp;


*/


/* 

You can swap two numbers without a third variable using either arithmetic operations 
(addition and subtraction) or bitwise XOR operators.

Logic

a = a + b (Stores the sum of both numbers in a)

b = a - b (Subtracts the original b from the sum, leaving the original a in b)

a = a - b (Subtracts the new b (original a) from the sum, leaving the original b in a)



*/



/* 

2. Using Bitwise XOR Operator

This method uses binary XOR logic. It is fast and avoids potential arithmetic overflow issues 
that can happen with very large numbers


Logic

a = a ^ b

b = a ^ b

a = a ^ b



*/







