let a=3;
let b=a++;

console.log(a); //4
console.log(b); //3

/* 
Initialization
a is set to 3.

Postfix increment (a++)

The postfix form (a++) means:

Return the current value of a (which is 3).

Then increment a by 1.

So b gets the old value 3.

After this line, a becomes 4

*/

let c = 1;
c = c++ + ++c;
console.log(c); //4

/* 
Initial value  
c = 1

Expression: c++ + ++c

c++ (postfix):

Returns the current value (1).

Then increments c to 2.

++c (prefix):

Increments c first (2 → 3).

Returns the new value (3).

So the expression becomes:
c = 1 + 3;

Assignment
c is set to 4.

*/


// when we directly perform additon on arrays first it will convert to string
let d = [1,2]
let e = d
e+=3
console.log(e); // 1,23

/* 
Step-by-step evaluation

1) Initialization
d is an array [1,2].
e = d → now e references the same array [1,2].

2) Operation: e += 3

+= is shorthand for e = e + 3.

But + with an array triggers type coercion:

[1,2] becomes the string "1,2".

"1,2" + 3 → "1,23".

So e is no longer an array — it becomes the string "1,23".

3) console.log(e); // "1,23"


⚡ Key takeaway:

Arrays in JavaScript are coerced to strings when used with +.

+= doesn’t append to arrays — it performs string concatenation in this case.

If you wanted to append 3 to the array, you’d use:

*/






