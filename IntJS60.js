// Type coercison

console.log(false==[]); //true

console.log(false==![]); //true


/*

1) console.log(false == []);

Loose equality (==) triggers type conversion.

Comparing false (boolean) with [] (empty array, object).

When an object is compared to a primitive, JavaScript converts the object:

[].toString() → "" (empty string).

Now the comparison is:
false == ""

Next, "" is coerced into a number:

Number("") → 0.

And false is also coerced into a number:

Number(false) → 0

0 == 0 // true

2) console.log(false == ![]);
First evaluate ![]:

[] is a truthy value (non-empty object).

![] → false.

So the expression becomes:

false == false

Both sides are already booleans, no coercion needed.

✅ Output: true

*/