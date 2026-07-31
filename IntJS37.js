console.log("" == 0); //true

console.log("" === 0); // false

console.log([]==0); // true

/*

Step-by-step breakdown

1) Expression:
console.log([] == 0); // true

2) Loose equality (==)  
The == operator in JavaScript performs type coercion if the types differ. Here, we’re comparing:
[] → an empty array (object type)
0 → a number

3) Array to primitive conversion  
When an object (like []) is compared to a primitive, JavaScript tries to convert the object into a primitive value:
[].toString() → "" (empty string)
So [] becomes "".

4) String vs number comparison  
Now the comparison is:

"" == 0

The empty string "" is coerced into a number.

Number("") → 0.


5) Final comparison  
So effectively:
0 == 0 // true



*/




