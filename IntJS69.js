const crazy = ++[[]][+[]]+[+[]]

console.log(crazy); //10

/* 

Step 1: Break down [+[]]
+[] → The unary + tries to convert [] (empty array) to a number.

[].toString() → "" (empty string).

+"" → 0.

So [+[]] → [0].


Step 2: Evaluate [[]][+[]]
[[]] → An array with one element: the empty array.

[[]][0] → The element at index 0, which is [].

So [[]][+[]] → [].


Step 3: Apply the ++ operator
++[] → Here’s the tricky part:

[] is coerced to a primitive when used with ++.

[].toString() → "".

Number("") → 0.

So ++[] → ++0 → 1.

Thus ++[[]][+[]] → 1.


Step 4: Evaluate [+[]] again
As we saw earlier, [+[]] → [0].

Step 5: Add them together
Expression becomes:

1 + [0]


When adding a number and an array:

[0].toString() → "0".

So 1 + "0" → "10" (string concatenation).

✅ Final Result
const crazy = "10";


⚡ Key Insight:  
This snippet is a classic example of JavaScript coercion madness:

Arrays turn into strings when added.

Empty arrays become 0 when coerced to numbers.

Increment (++) forces numeric conversion.


*/



