/* 

In JavaScript, strings are immutable, so there is no append() method for strings.
Usually, you use += to add text to a string.

1. Using += — most common
===========================

let str = "";

str += "Hello";
str += " ";
str += "World";

console.log(str);

Output:

Hello World

For your LeetCode problem:

let str = "";

str += word1[i];
str += word2[i];


2. Using +
===========
You can also create a new string using +:

let str = "Hello";

str = str + " World";

console.log(str);

Output:

Hello World

+= is basically a shorter way of writing:

str += " World";

which is equivalent to:

str = str + " World";


*/


/* 

Great question. "Strings are immutable" is an important JavaScript concept.

What does immutable mean?

Immutable = cannot be changed after it has been created.

So when we say:

JavaScript strings are immutable

it means you cannot directly modify an existing string.



Example

Suppose:

let str = "Hello";

You might try to change the first character:

str[0] = "J";

But this does not change the string.

console.log(str);

Output:

Hello

It does NOT become:

Jello

*/







/* 

Then how does += work?

You might wonder:

let str = "Hello";

str += " World";

If strings are immutable, how can this work?

The important point is that JavaScript creates a new string.

Conceptually:

Original:
"Hello"

       +
" World"

       ↓

New string:
"Hello World"

Then the variable str is made to refer to the new string.

So:

let str = "Hello";

str += " World";

console.log(str);

gives:

Hello World

The original "Hello" string itself wasn't modified.


*/


/* 
Another example
let str1 = "Hello";
let str2 = str1;

str1 += " World";

console.log(str1);
console.log(str2);

Output:

Hello World
Hello

Why?

Initially:

str1 ──→ "Hello"
str2 ──→ "Hello"

After:

str1 += " World";

JavaScript creates a new string:

str1 ──→ "Hello World"

str2 ──→ "Hello"

The original "Hello" wasn't changed.


*/



/* 

Simple interview definition

Immutable means that once a string is created, its contents cannot be changed. Operations that appear to modify a string actually create a new string.


So remember:

String → Immutable ❌ cannot modify directly
Array  → Mutable   ✅ can modify directly

And that's why JavaScript doesn't have:

str.append("abc");  // ❌

but you commonly use:

str += "abc";       // ✅ creates a new string


*/




