// Object.freeze() Limitation | JavaScript Interview Question

const obj = Object.freeze({
    user:{name:"A"}
})

obj.user.name="B";

console.log(obj.user.name); // B

/* 
Your code works because Object.freeze() only applies a shallow freeze. The outer object obj is frozen, 
but its nested property user is still mutable, so you can change user.name to "B".

🔎 Step-by-Step Explanation
=============================
1. What Object.freeze() Does
Freezes only the top-level object: You cannot add, remove, or reassign properties of obj.
Shallow freeze: Nested objects or arrays inside remain mutable unless they are also frozen.

const obj = Object.freeze({
  user: { name: "A" }
});

obj.user = { name: "C" }; // ❌ Error or ignored (top-level property frozen)
obj.user.name = "B";      // ✅ Allowed (nested object not frozen)


Why obj.user.name = "B" Works
obj.user is a reference to another object.
That inner object ({name:"A"}) is not frozen.
So modifying its property (name) is perfectly valid.

console.log(obj.user.name); // "B"


✅ Key Takeaways
Object.freeze → Shallow freeze, only top-level properties locked.
Nested objects → Still mutable unless frozen separately.
Deep freeze → Use recursion to lock everything inside.


*/



