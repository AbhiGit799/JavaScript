// Temporal Dead Zone

console.log(a);
let a = 10;

/**
 
🕒 Temporal Dead Zone (TDZ)
=============================
The Temporal Dead Zone is the period between when a variable is hoisted (reserved in memory) and when it is initialized with a value.

For variables declared with let and const, they are hoisted but not initialized. Until the line of code where they are defined, they live in the TDZ. Accessing them before initialization causes a ReferenceError.

Step-by-step:
Hoisting happens: JavaScript knows a exists because of let a = 10;.
But it doesn’t assign a value yet.

TDZ period: From the start of the scope until the let a = 10; line, a is in the TDZ.
You cannot access it.

Initialization: At let a = 10;, the variable finally gets the value 10.
After this line, you can safely use a.



 */

/* 
⚖️ Comparison with var

console.log(b); // ✅ undefined (no error)
var b = 10;

var variables are hoisted and initialized with undefined immediately.

That’s why you don’t get an error, just undefined.

✅ Key Takeaways
TDZ → Exists for let and const.

Accessing a variable in TDZ → ReferenceError.

var doesn’t have TDZ → It’s initialized as undefined.



*/
